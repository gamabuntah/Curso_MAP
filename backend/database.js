const fs = require('fs');
const path = require('path');

// Configuração do banco
const isProduction = process.env.NODE_ENV === 'production' || process.env.DATABASE_URL;
const DB_PATH = path.join(__dirname, 'database.json');

let pg = null;
let pool = null;

// Debug da DATABASE_URL
console.log('🔍 DEBUG - DATABASE_URL presente:', !!process.env.DATABASE_URL);
if (process.env.DATABASE_URL) {
  // Não mostrar a URL completa por segurança, apenas o início
  const urlStart = process.env.DATABASE_URL.substring(0, 20);
  console.log('🔍 DEBUG - DATABASE_URL inicia com:', urlStart + '...');
}

// Inicializar PostgreSQL se em produção
if (isProduction && process.env.DATABASE_URL) {
  try {
    pg = require('pg');
    
    // Configuração mais robusta
    pool = new pg.Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      },
      connectionTimeoutMillis: 5000,
      idleTimeoutMillis: 30000,
      max: 10
    });

    console.log('📊 Usando PostgreSQL para persistência de dados');
    
    // Teste de conexão
    pool.connect()
      .then(client => {
        console.log('✅ Conexão PostgreSQL bem-sucedida');
        client.release();
      })
      .catch(err => {
        console.error('❌ Erro ao testar conexão PostgreSQL:', err.message);
        console.log('📁 Fallback para arquivo JSON ativado');
        pool = null; // Desabilita PostgreSQL e usa JSON
      });
      
  } catch (error) {
    console.error('Erro ao configurar PostgreSQL:', error.message);
    console.log('📁 Fallback para arquivo JSON');
    pool = null;
  }
} else {
  console.log('📁 Usando arquivo JSON (desenvolvimento ou sem DATABASE_URL)');
}

// Estrutura inicial do banco
const initialData = {
  users: [],
  progress: {},
  certificates: {}
};

// Função para inicializar as tabelas PostgreSQL
const initializePostgreSQL = async () => {
  if (!pool) return;
  
  try {
    console.log('🔧 Inicializando tabelas PostgreSQL...');
    
    // Criar tabela de usuários
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        role VARCHAR(50) DEFAULT 'user',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Criar tabela de progresso
    await pool.query(`
      CREATE TABLE IF NOT EXISTS progress (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        progress_data JSONB NOT NULL,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (username) REFERENCES users(username) ON DELETE CASCADE
      )
    `);

    // Criar tabela de certificados
    await pool.query(`
      CREATE TABLE IF NOT EXISTS certificates (
        id SERIAL PRIMARY KEY,
        validation_code VARCHAR(255) UNIQUE NOT NULL,
        username VARCHAR(255) NOT NULL,
        certificate_data JSONB NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (username) REFERENCES users(username) ON DELETE CASCADE
      )
    `);

    console.log('✅ Tabelas PostgreSQL inicializadas com sucesso');
  } catch (error) {
    console.error('❌ Erro ao inicializar PostgreSQL:', error.message);
    console.log('📁 Fallback para arquivo JSON ativado');
    pool = null; // Desabilita PostgreSQL em caso de erro
  }
};

// Função para ler dados (híbrida)
const readDB = async () => {
  if (pool) {
    try {
      // PostgreSQL
      const usersResult = await pool.query('SELECT * FROM users');
      const progressResult = await pool.query('SELECT username, progress_data FROM progress');
      const certificatesResult = await pool.query('SELECT validation_code, certificate_data FROM certificates');

      // Converter para formato compatível
      const users = usersResult.rows.map(row => ({
        username: row.username,
        passwordHash: row.password_hash,
        role: row.role,
        createdAt: row.created_at
      }));

      const progress = {};
      progressResult.rows.forEach(row => {
        progress[row.username] = row.progress_data;
      });

      const certificates = {};
      certificatesResult.rows.forEach(row => {
        certificates[row.validation_code] = row.certificate_data;
      });

      return { users, progress, certificates };
    } catch (error) {
      console.error('Erro ao ler PostgreSQL:', error.message);
      console.log('📁 Usando fallback para arquivo JSON');
      pool = null; // Desabilita PostgreSQL e usa JSON
      return await readJSONDB();
    }
  } else {
    return await readJSONDB();
  }
};

// Função para ler arquivo JSON
const readJSONDB = async () => {
  try {
    if (!fs.existsSync(DB_PATH)) {
      fs.writeFileSync(DB_PATH, JSON.stringify(initialData, null, 2));
      return initialData;
    }
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Erro ao ler arquivo JSON:', error);
    return initialData;
  }
};

// Função para escrever dados (híbrida)
const writeDB = async (data) => {
  if (pool) {
    try {
      // PostgreSQL - usar transação para consistência
      const client = await pool.connect();
      
      try {
        await client.query('BEGIN');

        // Limpar e inserir usuários
        await client.query('DELETE FROM certificates');
        await client.query('DELETE FROM progress');
        await client.query('DELETE FROM users');

        for (const user of data.users) {
          await client.query(
            'INSERT INTO users (username, password_hash, role) VALUES ($1, $2, $3)',
            [user.username, user.passwordHash, user.role || 'user']
          );
        }

        // Inserir progresso
        for (const [username, progressData] of Object.entries(data.progress)) {
          await client.query(
            'INSERT INTO progress (username, progress_data) VALUES ($1, $2)',
            [username, JSON.stringify(progressData)]
          );
        }

        // Inserir certificados
        for (const [validationCode, certificateData] of Object.entries(data.certificates)) {
          await client.query(
            'INSERT INTO certificates (validation_code, username, certificate_data) VALUES ($1, $2, $3)',
            [validationCode, certificateData.username, JSON.stringify(certificateData)]
          );
        }

        await client.query('COMMIT');
      } catch (error) {
        await client.query('ROLLBACK');
        throw error;
      } finally {
        client.release();
      }
    } catch (error) {
      console.error('Erro ao escrever PostgreSQL:', error.message);
      console.log('📁 Usando fallback para arquivo JSON');
      pool = null;
      await writeJSONDB(data);
    }
  } else {
    await writeJSONDB(data);
  }
};

// Função para escrever arquivo JSON
const writeJSONDB = async (data) => {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error('Erro ao escrever arquivo JSON:', error);
  }
};

// Função para adicionar usuário (otimizada)
const addUser = async (user) => {
  if (pool) {
    try {
      await pool.query(
        'INSERT INTO users (username, password_hash, role) VALUES ($1, $2, $3)',
        [user.username, user.passwordHash, user.role || 'user']
      );
      
      // Inicializar progresso vazio
      await pool.query(
        'INSERT INTO progress (username, progress_data) VALUES ($1, $2)',
        [user.username, JSON.stringify({})]
      );
    } catch (error) {
      console.error('Erro ao adicionar usuário PostgreSQL:', error);
      throw error;
    }
  } else {
    const data = await readDB();
    data.users.push(user);
    data.progress[user.username] = {};
    await writeDB(data);
  }
};

// Função para atualizar progresso (otimizada)
const updateProgress = async (username, progressData) => {
  if (pool) {
    try {
      await pool.query(
        'UPDATE progress SET progress_data = $1, updated_at = CURRENT_TIMESTAMP WHERE username = $2',
        [JSON.stringify(progressData), username]
      );
    } catch (error) {
      console.error('Erro ao atualizar progresso PostgreSQL:', error);
      throw error;
    }
  } else {
    const data = await readDB();
    data.progress[username] = progressData;
    await writeDB(data);
  }
};

// Função para adicionar certificado (otimizada)
const addCertificate = async (validationCode, certificateData) => {
  if (pool) {
    try {
      await pool.query(
        'INSERT INTO certificates (validation_code, username, certificate_data) VALUES ($1, $2, $3)',
        [validationCode, certificateData.username, JSON.stringify(certificateData)]
      );
    } catch (error) {
      console.error('Erro ao adicionar certificado PostgreSQL:', error);
      throw error;
    }
  } else {
    const data = await readDB();
    data.certificates[validationCode] = certificateData;
    await writeDB(data);
  }
};

// Inicializar banco na importação (simplificado)
if (isProduction && process.env.DATABASE_URL) {
  // Inicializar de forma mais segura
  initializePostgreSQL().catch(err => {
    console.error('❌ Erro na inicialização PostgreSQL:', err.message);
    console.log('📁 Continuando com fallback JSON');
  });
}

module.exports = {
  readDB,
  writeDB,
  addUser,
  updateProgress,
  addCertificate,
  isProduction
}; 