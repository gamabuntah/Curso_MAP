const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const { readDB, writeDB, addUser, updateProgress, addCertificate, isProduction } = require('./database');

const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = path.join(__dirname, '..', 'public');

console.log(`🔧 Modo: ${isProduction ? 'PRODUÇÃO (PostgreSQL)' : 'DESENVOLVIMENTO (JSON)'}`);

// MIME types
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.wav': 'audio/wav',
  '.mp3': 'audio/mpeg',
  '.md': 'text/markdown',
  '.txt': 'text/plain'
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

// Função para servir arquivos estáticos
const serveStaticFile = (res, filePath) => {
  try {
    if (!fs.existsSync(filePath)) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Arquivo não encontrado');
      return;
    }

    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    
    const data = fs.readFileSync(filePath);
    res.writeHead(200, { 
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
    res.end(data);
  } catch (error) {
    console.error('Erro ao servir arquivo:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Erro interno do servidor');
  }
};

// Função para ler body da requisição
const getRequestBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        resolve({});
      }
    });
    req.on('error', reject);
  });
};

// Função para enviar resposta JSON
const sendJSON = (res, statusCode, data) => {
  res.writeHead(statusCode, { 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  });
  res.end(JSON.stringify(data));
};

// Criar servidor HTTP
const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;

  // CORS preflight
  if (method === 'OPTIONS') {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
    res.end();
    return;
  }

  try {
    // API Routes
    if (pathname.startsWith('/api')) {
      
      // Teste da API
      if (pathname === '/api' && method === 'GET') {
        sendJSON(res, 200, { 
          message: 'API funcionando!', 
          timestamp: new Date().toISOString(),
          database: isProduction ? 'PostgreSQL' : 'JSON File',
          persistent: isProduction
        });
        return;
      }

      // Registro
      if (pathname === '/api/register' && method === 'POST') {
        const body = await getRequestBody(req);
        const { username, password } = body;

        if (!username || !password) {
          sendJSON(res, 400, { message: 'Nome de usuário e senha são obrigatórios.' });
          return;
        }

        const db = await readDB();
        const userExists = db.users.find(user => user.username === username);

        if (userExists) {
          sendJSON(res, 409, { message: 'Este nome de usuário já existe.' });
          return;
        }

        const newUser = {
          username,
          passwordHash: simpleHash(password),
          role: username.toLowerCase() === 'admin' ? 'admin' : 'user',
          createdAt: new Date().toISOString()
        };

        await addUser(newUser);
        sendJSON(res, 201, { message: 'Usuário criado com sucesso!' });
        return;
      }

      // Login
      if (pathname === '/api/login' && method === 'POST') {
        const body = await getRequestBody(req);
        const { username, password } = body;

        if (!username || !password) {
          sendJSON(res, 400, { message: 'Nome de usuário e senha são obrigatórios.' });
          return;
        }

        const db = await readDB();
        const user = db.users.find(user => user.username === username);

        if (!user || user.passwordHash !== simpleHash(password)) {
          sendJSON(res, 401, { message: 'Nome de usuário ou senha inválidos.' });
          return;
        }

        sendJSON(res, 200, { 
          message: 'Login bem-sucedido!', 
          username: user.username,
          role: user.role || 'user'
        });
        return;
      }

      // Obter progresso
      if (pathname.startsWith('/api/progress/') && method === 'GET') {
        const username = pathname.split('/')[3];
        const db = await readDB();

        const user = db.users.find(u => u.username === username);
        if (!user) {
          sendJSON(res, 404, { message: 'Usuário não encontrado.' });
          return;
        }

        const userProgress = db.progress[username] || {};
        sendJSON(res, 200, userProgress);
        return;
      }

      // Salvar progresso
      if (pathname.startsWith('/api/progress/') && method === 'POST') {
        const username = pathname.split('/')[3];
        const body = await getRequestBody(req);
        const db = await readDB();

        const user = db.users.find(u => u.username === username);
        if (!user) {
          sendJSON(res, 404, { message: 'Usuário não encontrado.' });
          return;
        }

        await updateProgress(username, body);
        sendJSON(res, 200, { message: 'Progresso salvo com sucesso.' });
        return;
      }

      // Gerar certificado
      if (pathname.startsWith('/api/certificates/') && method === 'POST' && !pathname.includes('/download')) {
        const username = pathname.split('/')[3];
        const body = await getRequestBody(req);
        const db = await readDB();

        const user = db.users.find(u => u.username === username);
        if (!user) {
          sendJSON(res, 404, { message: 'Usuário não encontrado.' });
          return;
        }

        const existingCertificate = Object.values(db.certificates || {}).find(
          cert => cert.username === username
        );

        if (existingCertificate) {
          sendJSON(res, 409, { 
            message: 'Usuário já possui um certificado.',
            certificate: existingCertificate
          });
          return;
        }

        await addCertificate(body.validationCode, body);
        sendJSON(res, 201, body);
        return;
      }

      // Obter certificado
      if (pathname.startsWith('/api/certificates/') && method === 'GET' && !pathname.includes('/validate')) {
        const username = pathname.split('/')[3];
        const db = await readDB();

        const user = db.users.find(u => u.username === username);
        if (!user) {
          sendJSON(res, 404, { message: 'Usuário não encontrado.' });
          return;
        }

        const certificate = Object.values(db.certificates || {}).find(
          cert => cert.username === username
        );

        if (!certificate) {
          sendJSON(res, 404, { message: 'Certificado não encontrado.' });
          return;
        }

        sendJSON(res, 200, certificate);
        return;
      }

      // Validar certificado
      if (pathname.startsWith('/api/certificates/validate/') && method === 'GET') {
        const validationCode = pathname.split('/')[4];
        const db = await readDB();

        const certificate = db.certificates[validationCode];
        if (!certificate) {
          sendJSON(res, 404, { 
            valid: false, 
            error: 'Certificado não encontrado' 
          });
          return;
        }

        // Incrementar contador (usando writeDB para compatibilidade)
        certificate.validationCount = (certificate.validationCount || 0) + 1;
        await writeDB(db);

        sendJSON(res, 200, {
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
        return;
      }

      // Admin - todos os certificados
      if (pathname === '/api/admin/all-certificates' && method === 'GET') {
        const adminUser = parsedUrl.query.adminUser;
        const db = await readDB();
        const requester = db.users.find(u => u.username === adminUser);

        if (!requester || requester.role !== 'admin') {
          sendJSON(res, 403, { message: 'Acesso negado.' });
          return;
        }

        const allCertificates = Object.values(db.certificates || {});
        sendJSON(res, 200, allCertificates);
        return;
      }

      // Admin - todo o progresso
      if (pathname === '/api/admin/all-progress' && method === 'GET') {
        const adminUser = parsedUrl.query.adminUser;
        const db = await readDB();
        const requester = db.users.find(u => u.username === adminUser);

        if (!requester || requester.role !== 'admin') {
          sendJSON(res, 403, { message: 'Acesso negado.' });
          return;
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
        
        sendJSON(res, 200, allProgressWithDetails);
        return;
      }

      // Se chegou aqui, rota da API não encontrada
      sendJSON(res, 404, { message: 'Rota da API não encontrada' });
      return;
    }

    // Servir arquivos estáticos
    let filePath;
    if (pathname === '/') {
      filePath = path.join(PUBLIC_PATH, 'index.html');
    } else {
      filePath = path.join(PUBLIC_PATH, pathname);
    }

    // Verificar se é um arquivo
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      serveStaticFile(res, filePath);
    } else {
      // SPA fallback - servir index.html para rotas não encontradas
      serveStaticFile(res, path.join(PUBLIC_PATH, 'index.html'));
    }

  } catch (error) {
    console.error('Erro no servidor:', error);
    sendJSON(res, 500, { message: 'Erro interno do servidor' });
  }
});

// Iniciar servidor
server.listen(PORT, () => {
  console.log(`🚀 Servidor HTTP rodando na porta ${PORT}`);
  console.log(`📁 Servindo arquivos de: ${PUBLIC_PATH}`);
  console.log(`💾 Banco de dados: ${isProduction ? 'PostgreSQL (Persistente)' : 'JSON File (Temporário)'}`);
}); 