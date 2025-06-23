const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middlewares essenciais
app.use(cors());
app.use(express.json());

// Servir os arquivos estáticos da pasta public
// __dirname é o diretório do server.js (backend), então voltamos um para a raiz
app.use(express.static(path.join(__dirname, '..', 'public')));

// Para qualquer outra rota GET, servir o index.html para o roteamento do frontend
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor mínimo de teste rodando na porta ${port}. As APIs estão desativadas.`);
}); 