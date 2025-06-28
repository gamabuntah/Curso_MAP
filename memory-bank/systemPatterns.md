# systemPatterns.md

## Arquitetura Geral
- **Frontend:** HTML5, CSS3, JavaScript puro (ES6+), responsivo e mobile-first
- **Backend:** Node.js HTTP nativo, Express.js, banco de dados JSON (file-based), pronto para PostgreSQL em produção
- **Deploy:** Render (cloud), com variáveis de ambiente e portas dinâmicas
- **Qualidade:** Sistema de verificação de fidelidade implementado para todos os módulos

## Padrões e Decisões Técnicas
- **Separação clara:** Lógica de progresso, quizzes, certificados e administração bem definidas
- **Sistema de roles:** admin/user com proteção de rotas e permissões
- **URLs dinâmicas:** Ambiente local e produção automaticamente detectados
- **Geração de certificados:** PDF com jsPDF e QR Code para validação
- **Armazenamento:** Progresso e certificados persistidos no backend
- **Interface administrativa:** Dashboard, gerenciamento completo e revogação
- **Responsividade:** Breakpoints testados em múltiplos dispositivos
- **Fidelidade de conteúdo:** Processo de verificação sistemática implementado

## Relacionamento de Componentes
- **ProgressManager:** Controla progresso do usuário e libera módulos
- **CertificateManager:** Gerencia elegibilidade, geração e validação de certificados
- **CertificateGenerator:** Gera PDF do certificado com design profissional
- **CertificateValidator:** Valida certificados e verifica revogação
- **Admin:** Painel para gestão de usuários, progresso e certificados
- **ModuleVerifier:** Sistema de verificação de fidelidade ao conteúdo original (conceitual)

## Estados dos Módulos (Máquina de Estados)
- **locked:** 🔒 Bloqueado (cinza) - módulo não liberado
- **available:** 📘 Disponível (azul) - pode iniciar
- **audio_pending:** ⚠️ Quiz OK, áudio pendente (laranja) - passou no quiz mas precisa ouvir áudio
- **completed:** ✅ Totalmente completo (verde) - quiz ≥70% + áudio 98%
- **failed:** ❌ Falhou no quiz (vermelho) - nota <70%

## APIs Principais
- `GET/POST /api/progress/:username` - Progresso do usuário
- `GET/POST /api/certificates/:username` - Certificados
- `GET /api/certificates/validate/:code` - Validação pública
- `POST /api/certificates/:username/revoke` - Revogação (admin)
- `GET /api/admin/all-progress` - Todos os usuários (admin)
- `GET /api/admin/all-certificates` - Todos os certificados (admin)

## Estrutura de Arquivos Crítica
```
public/
├── data/
│   ├── module1-8.js          # Dados dos módulos (verificados)
│   ├── avaliacaoFinal.js     # Avaliação final (50 questões)
│   └── padrao_questao_*.js   # Padrões de questões
├── MAP/
│   ├── Audios/               # Arquivos MP3 dos módulos
│   └── *.md                  # Conteúdo original de referência
├── admin.html                # Painel administrativo
├── index.html                # Interface principal
└── *.js, *.css              # Scripts e estilos

backend/
├── database.json             # Banco de dados (desenvolvimento)
├── server.js                 # Servidor principal
└── package.json              # Dependências
```

## Padrão de Qualidade dos Módulos
- **Títulos completos:** Incluem todos os blocos e terminologia técnica
- **Conteúdo fiel:** 100% alinhado com material original PNSB
- **Estrutura consistente:** Resumo, seções numeradas, exemplos práticos, quiz
- **Terminologia técnica:** Conceitos especializados corretos e precisos
- **Questões específicas:** Baseadas no conteúdo real, não genéricas
- **Feedback educativo:** Explicações detalhadas para todas as alternativas

## Padrão de Questões (170 total)
```javascript
{
  question: "Pergunta específica do conteúdo",
  options: ["A) Opção", "B) Opção", "C) Opção", "D) Opção"],
  answer: "Resposta correta exata",
  feedback: "Explicação educativa detalhada"
}
```

## Métricas de Qualidade
- **Distribuição:** 15 questões por módulo + 50 na avaliação final
- **Cobertura:** 100% dos conceitos PNSB abordados
- **Fidelidade:** Verificação linha por linha com conteúdo original
- **Consistência:** Formato uniforme em todos os módulos
- **Valor educativo:** Cada questão ensina conceitos importantes

## Processo de Verificação de Qualidade
1. **Leitura do original:** Arquivo .md de referência
2. **Comparação linha por linha:** Conteúdo implementado vs original
3. **Identificação de problemas:** Títulos, terminologia, estrutura
4. **Correção completa:** Reescrita para fidelidade 100%
5. **Verificação final:** Confirmação de qualidade técnica 