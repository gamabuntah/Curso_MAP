const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_PATH = path.join(__dirname, 'database.json');

// Middlewares básicos
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, '..', 'public')));

// Função para ler banco de dados
const readDB = () => {
  try {
    if (!fs.existsSync(DB_PATH)) {
      const initialData = { users: [], progress: {}, certificates: {} };
      fs.writeFileSync(DB_PATH, JSON.stringify(initialData, null, 2));
      return initialData;
    }
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Erro ao ler DB:', error);
    return { users: [], progress: {}, certificates: {} };
  }
};

// Função para escrever no banco
const writeDB = (data) => {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error('Erro ao escrever DB:', error);
  }
};

// Hash simples
const simpleHash = (s) => {
  let hash = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return hash.toString();
};

// Rota de teste
app.get('/api', (req, res) => {
  res.json({ message: 'API funcionando!', timestamp: new Date().toISOString() });
});

// Registro de usuário
app.post('/api/register', (req, res) => {
  try {
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
      role: username.toLowerCase() === 'admin' ? 'admin' : 'user',
      createdAt: new Date().toISOString()
    };

    db.users.push(newUser);
    db.progress[username] = {};
    writeDB(db);

    res.status(201).json({ message: 'Usuário criado com sucesso!' });
  } catch (error) {
    console.error('Erro no registro:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Login
app.post('/api/login', (req, res) => {
  try {
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
  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Obter progresso
app.get('/api/progress/:username', (req, res) => {
  try {
    const username = req.params.username;
    const db = readDB();

    const user = db.users.find(u => u.username === username);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    const userProgress = db.progress[username] || {};
    res.status(200).json(userProgress);
  } catch (error) {
    console.error('Erro ao obter progresso:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Salvar progresso
app.post('/api/progress/:username', (req, res) => {
  try {
    const username = req.params.username;
    const newProgress = req.body;

    const db = readDB();
    const user = db.users.find(u => u.username === username);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    db.progress[username] = newProgress;
    writeDB(db);

    res.status(200).json({ message: 'Progresso salvo com sucesso.' });
  } catch (error) {
    console.error('Erro ao salvar progresso:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Gerar certificado
app.post('/api/certificates/:username', (req, res) => {
  try {
    const username = req.params.username;
    const certificateData = req.body;

    const db = readDB();
    const user = db.users.find(u => u.username === username);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    if (!db.certificates) db.certificates = {};

    const existingCertificate = Object.values(db.certificates).find(
      cert => cert.username === username
    );

    if (existingCertificate) {
      return res.status(409).json({ 
        message: 'Usuário já possui um certificado.',
        certificate: existingCertificate
      });
    }

    db.certificates[certificateData.validationCode] = certificateData;
    writeDB(db);

    res.status(201).json(certificateData);
  } catch (error) {
    console.error('Erro ao gerar certificado:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Obter certificado
app.get('/api/certificates/:username', (req, res) => {
  try {
    const username = req.params.username;
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
  } catch (error) {
    console.error('Erro ao obter certificado:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Validar certificado
app.get('/api/certificates/validate/:validationCode', (req, res) => {
  try {
    const validationCode = req.params.validationCode;
    const db = readDB();

    const certificate = db.certificates[validationCode];
    if (!certificate) {
      return res.status(404).json({ 
        valid: false, 
        error: 'Certificado não encontrado' 
      });
    }

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
  } catch (error) {
    console.error('Erro ao validar certificado:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Download count
app.post('/api/certificates/:username/download', (req, res) => {
  try {
    const username = req.params.username;
    const db = readDB();

    const certificate = Object.values(db.certificates || {}).find(
      cert => cert.username === username
    );

    if (certificate) {
      certificate.downloadCount = (certificate.downloadCount || 0) + 1;
      writeDB(db);
    }

    res.status(200).json({ message: 'Download count atualizado.' });
  } catch (error) {
    console.error('Erro ao atualizar download:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Admin - todos os certificados
app.get('/api/admin/all-certificates', (req, res) => {
  try {
    const adminUser = req.query.adminUser;
    const db = readDB();
    const requester = db.users.find(u => u.username === adminUser);

    if (!requester || requester.role !== 'admin') {
      return res.status(403).json({ message: 'Acesso negado.' });
    }

    const allCertificates = Object.values(db.certificates || {});
    res.status(200).json(allCertificates);
  } catch (error) {
    console.error('Erro admin certificados:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Admin - todo o progresso
app.get('/api/admin/all-progress', (req, res) => {
  try {
    const adminUser = req.query.adminUser;
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
        finalEvaluationScore: userProgress.final_evaluation?.score || 'N/A'
      };
    });
    
    res.status(200).json(allProgressWithDetails);
  } catch (error) {
    console.error('Erro admin progresso:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

// Catch-all route - deve ser a última
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📁 Servindo arquivos de: ${path.join(__dirname, '..', 'public')}`);
  console.log(`💾 Banco de dados: ${DB_PATH}`);
}); 