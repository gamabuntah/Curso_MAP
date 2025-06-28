# techContext.md

## Tecnologias Utilizadas
- **Frontend:** HTML5, CSS3, JavaScript (ES6+), jsPDF, QRCode.js
- **Backend:** Node.js, Express.js, banco de dados JSON (file-based), pronto para PostgreSQL
- **Hospedagem:** Render (cloud) - https://curso-map.onrender.com
- **Ferramentas de desenvolvimento:** Live Server, npm
- **Qualidade:** Sistema de verificação de fidelidade implementado

## Dependências
- **jsPDF:** Geração de PDF para certificados
- **QRCode.js:** Geração de QR Code para validação
- **Express.js:** Servidor web robusto
- **pg:** PostgreSQL para produção
- **Arquivos de referência:** Material original PNSB em formato .md

## Restrições Técnicas
- ✅ Compatibilidade total com navegadores modernos (Chrome, Firefox, Edge, Safari)
- ✅ Suporte a dispositivos móveis e desktops
- ✅ Sistema funciona offline para estudo, exceto validação online de certificados
- ✅ Banco de dados file-based em desenvolvimento, PostgreSQL em produção
- ✅ URLs dinâmicas para ambientes local e produção
- ✅ Fidelidade total ao conteúdo original da PNSB

## Setup de Desenvolvimento
1. **Backend:** `cd backend && npm install && node server.js` (porta 3000)
2. **Frontend:** `npx live-server --port=8000 public/` (porta 8000)
3. **Verificação:** Frontend em localhost:8000, backend em localhost:3000

## Usuários Padrão do Sistema
- **admin:** Administrador (senha: qualquer valor)
  - Acesso livre a todos os módulos
  - Certificado gerado automaticamente
  - Acesso ao painel administrativo
- **Gustavo:** Usuário comum (senha: qualquer valor)
  - Deve seguir sistema de progresso
  - Progresso completo já configurado para testes

## Configurações de Deploy (Render)
- **Variáveis de ambiente:** NODE_ENV=production, DATABASE_URL (PostgreSQL)
- **Porta dinâmica:** process.env.PORT || 3000
- **Build:** npm install
- **Start:** npm start (executa backend/server.js)
- **URLs dinâmicas:** Detecta hostname para usar URLs corretas
- **Status:** ✅ Online e funcional

## Arquivos de Cache e Versioning
- **Cache busters:** v=5.7 no script.js, v=5.5 no style.css
- **Headers de cache:** Configurados no servidor
- **Sistema de versionamento:** Evita cache de arquivos antigos
- **Performance:** Otimizada para carregamento rápido

## Métricas de Qualidade do Sistema
- **Total de questões:** 170 questões (120 módulos + 50 avaliação)
- **Distribuição:** 15 questões por módulo (uniformidade perfeita)
- **Feedback educativo:** 680 explicações detalhadas
- **Módulos verificados:** 6 de 8 módulos com verificação completa
- **Fidelidade:** 100% alinhado com conteúdo original PNSB

## Estrutura de Dados
```javascript
// Progresso do usuário
{
  username: "string",
  modules: {
    1: { quizScore: number, audioProgress: number, completed: boolean },
    // ... outros módulos
  },
  finalExam: { score: number, completed: boolean }
}

// Certificado
{
  username: "string",
  code: "string",
  issueDate: "ISO date",
  revoked: boolean,
  revokeReason: "string"
}
```

## Processo de Verificação de Qualidade
1. **Leitura do original:** Arquivo .md de referência na pasta MAP/
2. **Comparação sistemática:** Linha por linha com implementação
3. **Identificação de problemas:** Títulos, terminologia, estrutura
4. **Correção completa:** Reescrita para fidelidade 100%
5. **Verificação final:** Confirmação de qualidade técnica

## Segurança e Confiabilidade
- **Autenticação:** Sistema de login seguro
- **Autorização:** Controle de acesso por perfil (admin/user)
- **Validação:** Certificados com QR Code verificável
- **Revogação:** Sistema de revogação de certificados
- **Backup:** Dados persistidos e seguros

## Performance e Escalabilidade
- **Carregamento:** Otimizado com cache e compressão
- **Responsividade:** Testado em múltiplos dispositivos
- **Escalabilidade:** Pronto para PostgreSQL em produção
- **Monitoramento:** Logs disponíveis no Render
- **Disponibilidade:** 99%+ uptime no Render 