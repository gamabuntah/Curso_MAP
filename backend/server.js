const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_PATH = path.join(__dirname, 'database.json');

// Middlewares
app.use(cors());
app.use(express.json());

// Servir os arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, '..', 'public')));

// Função auxiliar para ler o banco de dados
const readDB = () => {
  try {
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    // Se o arquivo não existir ou for inválido, retorna uma estrutura padrão
    return { users: [], progress: {}, certificates: {} };
  }
};

// Função auxiliar para escrever no banco de dados
const writeDB = (data) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
};

// Função de hash simples para a senha (NÃO USE EM PRODUÇÃO REAL)
const simpleHash = (s) => {
  let hash = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Converte para 32bit integer
  }
  return hash.toString();
};

// --- ROTAS DA API ---

// Rota de Teste
app.get('/api', (req, res) => {
  res.send('Servidor do Curso PNSB está no ar! 👋');
});

// Rota de Registro
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Nome de usuário e senha são obrigatórios.' });
  }

  const db = readDB();
  const userExists = db.users.find(user => user.username === username);

  if (userExists) {
    return res.status(409).json({ message: 'Este nome de usuário já existe.' });
  }

  const newUser = {
    username,
    passwordHash: simpleHash(password),
    role: username.toLowerCase() === 'admin' ? 'admin' : 'user'
  };

  db.users.push(newUser);
  // Inicializa o progresso para o novo usuário
  db.progress[username] = {}; 
  writeDB(db);

  res.status(201).json({ message: 'Usuário criado com sucesso! Agora você pode entrar.' });
});

// Rota de Login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Nome de usuário e senha são obrigatórios.' });
  }

  const db = readDB();
  const user = db.users.find(user => user.username === username);

  if (!user || user.passwordHash !== simpleHash(password)) {
    return res.status(401).json({ message: 'Nome de usuário ou senha inválidos.' });
  }

  res.status(200).json({ 
    message: 'Login bem-sucedido!', 
    username: user.username,
    role: user.role || 'user'
  });
});

// Rota para OBTER o progresso de um usuário
app.get('/api/progress/:username', (req, res) => {
  const { username } = req.params;
  const db = readDB();

  // Validação simples para segurança
  const user = db.users.find(u => u.username === username);
  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado.' });
  }

  const userProgress = db.progress[username] || {};
  res.status(200).json(userProgress);
});

// Rota para SALVAR o progresso de um usuário
app.post('/api/progress/:username', (req, res) => {
  const { username } = req.params;
  const newProgress = req.body;

  const db = readDB();
  const user = db.users.find(u => u.username === username);
  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado.' });
  }

  db.progress[username] = newProgress;
  writeDB(db);

  res.status(200).json({ message: 'Progresso salvo com sucesso.' });
});

// --- ROTAS DE CERTIFICADOS ---

// Rota para GERAR um certificado
app.post('/api/certificates/:username', (req, res) => {
  const { username } = req.params;
  const certificateData = req.body;

  const db = readDB();
  const user = db.users.find(u => u.username === username);
  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado.' });
  }

  // Verifica se já existe um certificado para este usuário
  const existingCertificate = Object.values(db.certificates || {}).find(
    cert => cert.username === username
  );

  if (existingCertificate) {
    return res.status(409).json({ 
      message: 'Usuário já possui um certificado.',
      certificate: existingCertificate
    });
  }

  // Salva o certificado
  if (!db.certificates) db.certificates = {};
  db.certificates[certificateData.validationCode] = certificateData;
  writeDB(db);

  res.status(201).json(certificateData);
});

// Rota para OBTER certificado de um usuário
app.get('/api/certificates/:username', (req, res) => {
  const { username } = req.params;
  const db = readDB();

  const user = db.users.find(u => u.username === username);
  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado.' });
  }

  const certificate = Object.values(db.certificates || {}).find(
    cert => cert.username === username
  );

  if (!certificate) {
    return res.status(404).json({ message: 'Certificado não encontrado.' });
  }

  res.status(200).json(certificate);
});

// Rota para VALIDAR um certificado pelo código
app.get('/api/certificates/validate/:validationCode', (req, res) => {
  const { validationCode } = req.params;
  const db = readDB();

  const certificate = db.certificates[validationCode];
  if (!certificate) {
    return res.status(404).json({ 
      valid: false, 
      error: 'Certificado não encontrado' 
    });
  }

  // Incrementa contador de validações
  certificate.validationCount = (certificate.validationCount || 0) + 1;
  writeDB(db);

  res.status(200).json({
    valid: true,
    certificate: {
      username: certificate.username,
      issuedDate: certificate.issuedDate,
      finalScore: certificate.finalScore,
      completedModules: certificate.completedModules,
      status: certificate.status,
      validationCount: certificate.validationCount
    }
  });
});

// Rota para incrementar download count
app.post('/api/certificates/:username/download', (req, res) => {
  const { username } = req.params;
  const db = readDB();

  const certificate = Object.values(db.certificates || {}).find(
    cert => cert.username === username
  );

  if (certificate) {
    certificate.downloadCount = (certificate.downloadCount || 0) + 1;
    writeDB(db);
  }

  res.status(200).json({ message: 'Download count atualizado.' });
});

// Rota para REVOGAR um certificado (apenas admin)
app.post('/api/certificates/:username/revoke', (req, res) => {
  const { username } = req.params;
  const { reason } = req.body;
  const adminUser = req.query.adminUser;
  const db = readDB();
  
  // Verifica se é admin
  const requester = db.users.find(u => u.username === adminUser);
  if (!requester || requester.role !== 'admin') {
    return res.status(403).json({ error: 'Acesso negado. Apenas administradores.' });
  }
  
  try {
    // Garante que db.certificates exista antes de acessá-lo
    if (!db.certificates) {
      return res.status(404).json({ error: 'Nenhum certificado encontrado no sistema.' });
    }

    const certCode = Object.keys(db.certificates).find(code => db.certificates[code].username === username);
    
    if (!certCode) {
      return res.status(404).json({ error: `Certificado para o usuário '${username}' não encontrado.` });
    }
    
    db.certificates[certCode].status = 'revoked';
    db.certificates[certCode].revokedDate = new Date().toISOString();
    db.certificates[certCode].revokedBy = adminUser;
    db.certificates[certCode].revokeReason = reason || 'Revogado pelo administrador';
    
    // Salva no arquivo
    writeDB(db);
    
    res.json({ message: 'Certificado revogado com sucesso', certificate: db.certificates[certCode] });
  } catch (error) {
    console.error('Erro ao revogar certificado:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// --- ROTAS DE ADMINISTRAÇÃO ---

// Rota de Admin para ver TODOS os certificados
app.get('/api/admin/all-certificates', (req, res) => {
    const { adminUser } = req.query;
    const db = readDB();
    const requester = db.users.find(u => u.username === adminUser);

    if (!requester || requester.role !== 'admin') {
        return res.status(403).json({ message: 'Acesso negado.' });
    }

    const allCertificates = Object.values(db.certificates || {});
    res.status(200).json(allCertificates);
});

// Rota de Admin para ver o progresso de TODOS os usuários
app.get('/api/admin/all-progress', (req, res) => {
    const { adminUser } = req.query;
    const db = readDB();
    const requester = db.users.find(u => u.username === adminUser);

    if (!requester || requester.role !== 'admin') {
        return res.status(403).json({ message: 'Acesso negado.' });
    }

    const allProgressWithDetails = Object.keys(db.progress).map(username => {
        const userProgress = db.progress[username];
        const completedModules = userProgress.modules 
            ? Object.values(userProgress.modules).filter(m => m.status === 'completed').length 
            : 0;
        const progressPercent = Math.round((completedModules / 8) * 100);
        
        return {
            username,
            progressPercent,
            completedModules,
            finalEvaluationScore: userProgress.final_evaluation?.score ?? 'N/A'
        };
    });
    
    res.status(200).json(allProgressWithDetails);
});

// Rota para servir o index.html principal para qualquer rota não encontrada
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
}); 