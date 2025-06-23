# Sistema de Certificação PNSB - Manejo de Águas Pluviais

## 🌟 Status: ONLINE E FUNCIONANDO!

Sistema de certificação para o Plano Nacional de Saneamento Básico, focado em Manejo de Águas Pluviais.

### ✅ Funcionalidades:
- Login e registro de usuários
- 8 módulos de aprendizagem com áudio
- Sistema de progresso automático
- Avaliação final
- Geração de certificados
- Painel administrativo

### 🚀 Tecnologias:
- Backend: Node.js HTTP nativo
- Frontend: HTML5, CSS3, JavaScript
- Banco de dados: JSON file-based
- Hospedagem: Render (gratuito)

### 📱 Acesso:
Sistema disponível online 24/7 através do Render.

---
**Última atualização:** 2024-12-19 - Deploy bem-sucedido! 🎉

# 🎓 Sistema de Certificação PNSB

Sistema completo de certificação para o curso de capacitação sobre a **Pesquisa Nacional de Saneamento Básico (PNSB)**, desenvolvido com tecnologias modernas e interface responsiva.

## 📋 Índice

- [🎯 Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🚀 Instalação e Configuração](#-instalação-e-configuração)
- [👥 Usuários do Sistema](#-usuários-do-sistema)
- [📖 Como Usar](#-como-usar)
- [🔧 API Endpoints](#-api-endpoints)
- [📊 Banco de Dados](#-banco-de-dados)
- [🎨 Interface do Usuário](#-interface-do-usuário)
- [🔒 Segurança](#-segurança)
- [📝 Logs e Monitoramento](#-logs-e-monitoramento)
- [🔄 Manutenção](#-manutenção)
- [📞 Suporte](#-suporte)

## 🎯 Sobre o Projeto

O Sistema de Certificação PNSB é uma plataforma completa para gerenciamento de cursos online, progresso de alunos e emissão de certificados digitais. O sistema foi desenvolvido para atender às necessidades específicas da Pesquisa Nacional de Saneamento Básico, oferecendo:

- **8 módulos de conteúdo** com avaliações individuais
- **Avaliação final** com critérios de aprovação
- **Geração automática de certificados** em PDF
- **Sistema de validação** com QR Code
- **Painel administrativo** completo
- **Interface responsiva** e moderna

## ✨ Funcionalidades

### 👤 Para Usuários Comuns
- ✅ Acesso aos 8 módulos do curso
- ✅ Reprodução de áudio dos módulos
- ✅ Avaliações individuais por módulo
- ✅ Avaliação final com pontuação
- ✅ Geração automática de certificado (após aprovação)
- ✅ Download do certificado em PDF
- ✅ Validação pública do certificado

### 👨‍💼 Para Administradores
- ✅ Acesso irrestrito a todos os módulos
- ✅ Geração automática de certificado próprio
- ✅ Painel administrativo completo
- ✅ Visualização de todos os usuários
- ✅ Gerenciamento de certificados
- ✅ Estatísticas gerais do sistema
- ✅ Revogação de certificados

### 🔧 Funcionalidades Técnicas
- ✅ Sistema de progresso por módulos
- ✅ Backend robusto com Node.js
- ✅ Banco de dados JSON
- ✅ Geração de PDFs profissionais
- ✅ Sistema de validação com QR Code
- ✅ Interface responsiva
- ✅ Controle de acesso por roles

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna e responsiva
- **JavaScript (ES6+)** - Lógica de frontend
- **jsPDF** - Geração de PDFs
- **Live Server** - Servidor de desenvolvimento

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **JSON** - Banco de dados
- **CORS** - Cross-origin resource sharing

### Bibliotecas
- **jsPDF** - Geração de certificados em PDF
- **Router** - Roteamento HTTP

## 📁 Estrutura do Projeto

```
Curso PNSB - Final/
├── 📁 backend/
│   ├── 📄 server.js          # Servidor principal
│   ├── 📄 database.json      # Banco de dados
│   ├── 📄 package.json       # Dependências
│   └── 📄 package-lock.json  # Lock de dependências
├── 📁 public/
│   ├── 📄 index.html         # Página principal
│   ├── 📄 login.html         # Página de login
│   ├── 📄 admin.html         # Painel administrativo
│   ├── 📄 validate.html      # Validação pública
│   ├── 📄 script.js          # Script principal
│   ├── 📄 progress-manager.js # Gerenciador de progresso
│   ├── 📄 certificate-manager.js # Gerenciador de certificados
│   ├── 📄 certificate-generator.js # Gerador de PDFs
│   ├── 📄 certificate-modal.html # Modal de certificado
│   ├── 📁 data/              # Dados dos módulos
│   │   ├── 📄 module1.js     # Módulo 1
│   │   ├── 📄 module2.js     # Módulo 2
│   │   └── ...               # Módulos 3-8
│   └── 📁 MAP/               # Conteúdo do curso
│       ├── 📁 Audios/        # Arquivos de áudio
│       └── 📄 *.md           # Conteúdo textual
├── 📄 README.md              # Este arquivo
├── 📄 historico_chat.md      # Histórico de desenvolvimento
└── 📄 definicao_curso_pnsb.md # Definição do curso
```

## 🚀 Instalação e Configuração

### Pré-requisitos
- **Node.js** (versão 14 ou superior)
- **npm** (gerenciador de pacotes)
- **Navegador web** moderno

### Passos de Instalação

1. **Clone o repositório**
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd "Curso PNSB - Final"
   ```

2. **Instale as dependências do backend**
   ```bash
   cd backend
   npm install
   ```

3. **Inicie o servidor backend**
   ```bash
   node server.js
   ```
   O servidor estará disponível em: `http://localhost:3000`

4. **Inicie o servidor frontend**
   ```bash
   # Em outro terminal, na raiz do projeto
   npx live-server --port=8000 public/
   ```
   O frontend estará disponível em: `http://localhost:8000`

### Verificação da Instalação

Após iniciar ambos os servidores, acesse:
- **Frontend**: http://localhost:8000
- **Backend**: http://localhost:3000/api/progress/admin

## 👥 Usuários do Sistema

### Usuários Padrão
- **Gustavo** - Usuário comum com progresso completo
- **admin** - Administrador do sistema

### Credenciais de Acesso
- **Gustavo**: Usuário comum (senha: qualquer valor)
- **admin**: Administrador (senha: qualquer valor)

## 📖 Como Usar

### Para Usuários Comuns

1. **Acesse o sistema**
   - URL: http://localhost:8000
   - Faça login com usuário "Gustavo"

2. **Complete os módulos**
   - Navegue pelos 8 módulos
   - Ouça os áudios de cada módulo
   - Responda as avaliações (mínimo 70% para aprovação)

3. **Faça a avaliação final**
   - Acesse a avaliação final após completar todos os módulos
   - Obtenha pontuação mínima de 70%

4. **Receba o certificado**
   - O certificado será gerado automaticamente
   - Clique em "Meu Certificado" para visualizar
   - Faça download do PDF

### Para Administradores

1. **Acesse como admin**
   - URL: http://localhost:8000
   - Faça login com usuário "admin"

2. **Acesse o painel administrativo**
   - Clique em "Painel Administrativo"
   - Visualize estatísticas gerais

3. **Gerencie usuários e certificados**
   - Aba "Progresso de Usuários"
   - Aba "Gerenciar Certificados"
   - Funcionalidades de validação e revogação

## 🔧 API Endpoints

### Progresso
- `GET /api/progress/:username` - Obter progresso do usuário
- `POST /api/progress/:username` - Salvar progresso do usuário

### Certificados
- `GET /api/certificates/:username` - Obter certificado do usuário
- `POST /api/certificates/:username` - Criar certificado
- `GET /api/certificates/validate/:code` - Validar certificado
- `POST /api/certificates/:username/revoke` - Revogar certificado

### Administração
- `GET /api/admin/all-certificates` - Todos os certificados
- `GET /api/admin/all-progress` - Progresso de todos os usuários

## 📊 Banco de Dados

O sistema utiliza um banco de dados JSON (`backend/database.json`) com a seguinte estrutura:

```json
{
  "users": [
    {
      "username": "admin",
      "passwordHash": "-1799229257",
      "role": "admin"
    },
    {
      "username": "Gustavo",
      "passwordHash": "1509472",
      "role": "user"
    }
  ],
  "progress": {
    "admin": { /* Progresso do admin */ },
    "Gustavo": { /* Progresso do Gustavo */ }
  },
  "certificates": {
    "PNSB-2025-2S7C-IOX1": { /* Certificado do Gustavo */ }
  }
}
```

## 🎨 Interface do Usuário

### Design Responsivo
- Interface adaptável para desktop, tablet e mobile
- Design moderno com gradientes e sombras
- Navegação intuitiva e acessível

### Componentes Principais
- **Cards de módulos** - Visualização do progresso
- **Player de áudio** - Reprodução de conteúdo
- **Modal de certificado** - Visualização do certificado
- **Painel administrativo** - Gerenciamento completo

## 🔒 Segurança

### Controle de Acesso
- Verificação de roles (admin/user)
- Validação de permissões por endpoint
- Proteção de rotas administrativas

### Validação de Certificados
- Códigos únicos de validação
- Assinatura digital
- Sistema de revogação

## 📝 Logs e Monitoramento

### Logs do Backend
- Logs de inicialização do servidor
- Logs de requisições HTTP
- Logs de erros e exceções

### Monitoramento
- Status do servidor em tempo real
- Contadores de downloads e validações
- Estatísticas de uso

## 🔄 Manutenção

### Backup do Banco de Dados
```bash
# Fazer backup do database.json
cp backend/database.json backend/database_backup_$(date +%Y%m%d).json
```

### Atualização de Dependências
```bash
cd backend
npm update
```

### Reinicialização do Sistema
```bash
# Parar servidores (Ctrl+C)
# Reiniciar backend
node backend/server.js
# Reiniciar frontend
npx live-server --port=8000 public/
```

## 📞 Suporte

### Problemas Comuns

1. **Servidor não inicia**
   - Verifique se a porta 3000 está livre
   - Confirme se Node.js está instalado

2. **Frontend não carrega**
   - Verifique se o backend está rodando
   - Confirme se a porta 8000 está livre

3. **PDF não gera**
   - Verifique se jsPDF está carregado
   - Confirme conexão com internet (CDN)

### Contato
Para suporte técnico ou dúvidas sobre o sistema, consulte o arquivo `historico_chat.md` que contém todo o processo de desenvolvimento.

---

## 🎉 Status do Projeto

**✅ PROJETO 100% CONCLUÍDO E FUNCIONAL**

- ✅ Sistema de certificação implementado
- ✅ Backend robusto e funcional
- ✅ Interface moderna e responsiva
- ✅ Testes completos realizados
- ✅ Documentação completa

**Data de Conclusão**: 21/06/2025  
**Versão**: 1.0.0  
**Status**: Pronto para Produção 🚀 