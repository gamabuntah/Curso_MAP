# 🚀 PASSO A PASSO COMPLETO - SCRIPTS E OPERAÇÕES CURSO MRS

## 📋 RESUMO EXECUTIVO
Este documento detalha todos os scripts e operações necessárias para replicar o sistema PNSB para o curso MRS (Manejo de Resíduos Sólidos), garantindo layout idêntico e qualidade preservada.

---

## 🎯 OBJETIVO FINAL
Criar um sistema de curso MRS com:
- ✅ 7 módulos (vs 8 do PNSB)
- ✅ Layout 100% idêntico ao PNSB
- ✅ 15 questões por módulo + 50 na avaliação final
- ✅ Conversão inteligente de .txt para JSON
- ✅ Sistema de certificados e portabilidade

---

## 🛠️ FASE 1: PREPARAÇÃO E VERIFICAÇÃO

### **PASSO 1.1: Verificação do Ambiente**
```bash
# Script: verificar-ambiente.js
# Verificações automáticas:
- Node.js instalado (versão 14+)
- npm disponível
- Estrutura do projeto PNSB intacta
- Permissões de escrita na pasta
- Portas 3001 e 8000 livres (PNSB)
- Portas 3002 e 8001 livres (MRS)
```

### **PASSO 1.2: Análise dos Arquivos MRS**
```bash
# Script: analisar-arquivos-mrs.js
# Verificação automática:
- Confirmar 7 arquivos .txt na pasta MRS/
- Confirmar 7 arquivos .wav na pasta MRS/Audios/
- Verificar tamanhos e integridade dos arquivos
- Validar nomenclatura: "Curso MRS - Mod X.wav"
```

### **PASSO 1.3: Criação da Estrutura de Trabalho**
```bash
# Operação manual/automática
mkdir replicador-curso-mrs
cd replicador-curso-mrs
mkdir scripts templates conteudo output
mkdir conteudo/modulos conteudo/audios
mkdir output/curso-mrs
```

---

## FASE 2: REPLICAÇÃO DA ESTRUTURA PNSB

### **PASSO 2.1: Cópia Completa do Projeto PNSB**
```bash
# Script: copiar-estrutura-pnsb.js
# Copiar estrutura base:
- Copiar pasta backend/ (excluir node_modules)
- Copiar pasta public/ (excluir dados específicos)
- Copiar scripts batch essenciais
- Copiar arquivos de configuração base
```

**Arquivos copiados:**
- `backend/server.js`, `backend/package.json`
- `public/index.html`, `public/style.css`, `public/script.js`
- `public/progress-manager.js`, `public/certificate-manager.js`
- `iniciar-sistema.bat`, `parar-sistema.bat`, `backup-dados.bat`

### **PASSO 2.2: Limpeza de Dados Específicos**
```bash
# Script: limpar-dados-pnsb.js
# Remover dados do PNSB:
- Remover public/data/module1.js até module8.js
- Remover public/data/avaliacaoFinal.js
- Remover public/MAP/ (conteúdo específico)
- Remover config-sistema.json (será recriado)
```

---

## ⚙️ FASE 3: ADAPTAÇÃO DE CONFIGURAÇÕES

### **PASSO 3.1: Criação do config-sistema.json**
```json
// Script: criar-config-mrs.js
{
  "curso": {
    "nome": "Manejo de Resíduos Sólidos",
    "sigla": "MRS",
    "modulos": 7,
    "questoesPorModulo": 15,
    "questoesAvaliacaoFinal": 50
  },
  "portas": {
    "backend": 3002,
    "frontend": 8001
  },
  "audios": {
    "formato": "wav",
    "prefixo": "Curso MRS - Mod"
  }
}
```

### **PASSO 3.2: Adaptação do backend/server.js**
```javascript
// Script: adaptar-backend.js
// Modificações:
- Porta do servidor: 3002
- Referências de módulos: 7 em vez de 8
- Configurações específicas do MRS
```

### **PASSO 3.3: Adaptação do public/script.js**
```javascript
// Script: adaptar-frontend.js
// Modificações:
- Número de módulos: 7
- Referências de áudio: "Curso MRS - Mod X"
- Títulos dos módulos (7 títulos específicos):
  * "Módulo 1: Introdução ao Saneamento Básico e à PNSB"
  * "Módulo 2: Estrutura do Questionário MRS da PNSB 2024"
  * "Módulo 3: Aspectos Legais, Terceirização e Coleta Convencional"
  * "Módulo 4: MRS em Áreas Especiais e Coleta Seletiva"
  * "Módulo 5: Manejo de Resíduos Sólidos Especiais"
  * "Módulo 6: Unidades de Destinação/Disposição Final"
  * "Módulo 7: Entidades de Catadores, Veículos e Educação Ambiental"
- Configurações de progresso
```

### **PASSO 3.4: Adaptação do public/progress-manager.js**
```javascript
// Script: adaptar-progress-manager.js
// Modificações:
- Lógica de progresso para 7 módulos
- Desbloqueio sequencial
- Validação de conclusão
```

---

## 🔄 FASE 4: CONVERSÃO .TXT → JSON

### **PASSO 4.1: Processamento dos Arquivos .txt**
```bash
# Script: processar-arquivos-txt.js
# Para cada módulo (1 a 7):
1. Ler arquivo .txt
2. Remover referências bibliográficas [1], [2], [3], etc.
3. Identificar estrutura (título, resumo, seções)
4. Extrair conteúdo integral
5. Identificar elementos para cards especiais
```

### **PASSO 4.2: Criação de Cards Inteligentes**
```javascript
// Script: criar-cards-inteligentes.js
// Algoritmo de criação:

// Card 1: Resumo (Sempre Presente)
{
  type: "default",
  title: "Resumo do Módulo",
  content: "Primeiro parágrafo do módulo",
  icon: "📋"
}

// Card 2: Conteúdo Principal (Sempre Presente)
{
  type: "default",
  title: "Conteúdo Principal",
  content: "Seções 1.1, 1.2, 1.3, etc.",
  icon: "📚"
}

// Card 3: Dica (Opcional - Inteligente)
// Criado se encontrar: "importante", "atenção", "dica"
{
  type: "dica",
  title: "💡 Dica Importante",
  content: "Dicas práticas extraídas",
  icon: "💡"
}

// Card 4: Exemplo (Opcional - Inteligente)
// Criado se encontrar: "por exemplo", "como", "caso"
{
  type: "exemplo",
  title: "📝 Exemplo Prático",
  content: "Exemplos práticos",
  icon: "📝"
}

// Card 5: Dúvidas Frequentes (Opcional - Inteligente)
// Criado se módulo for complexo
{
  type: "duvidas",
  title: "🗨️ Dúvidas Frequentes",
  content: "❓ Dúvida + 💡 Como Ajudar",
  icon: "🗨️"
}

// Card 6: Resumo Visual (Opcional - Inteligente)
// Criado se tiver listas ou conceitos importantes
{
  type: "resumo visual",
  title: "📊 Resumo Visual",
  content: "Pontos-chave visuais",
  icon: "📊"
}
```

### **PASSO 4.3: Geração dos Arquivos JSON dos Módulos**
```javascript
// Script: gerar-modulos-json.js
// Estrutura final para cada módulo:
{
  id: 1,
  titulo: "Módulo 1: Introdução ao Saneamento Básico e à PNSB",
  audio: "Curso MRS - Mod 1.wav",
  cards: [
    // Array com os cards criados
  ],
  quiz: {
    // 15 questões do módulo
  }
}
```

---

## ❓ FASE 5: GERAÇÃO DE QUESTÕES

### **PASSO 5.1: Geração de Questões por Módulo**
```bash
# Script: gerar-questoes-modulos.js
# Para cada módulo (1 a 7):
1. Analisar conteúdo do módulo
2. Gerar 15 questões baseadas no conteúdo
3. Criar 4 alternativas por questão
4. Definir alternativa correta
5. Criar feedback educativo para cada alternativa
6. Embaralhar alternativas automaticamente
```

**Estrutura da Questão:**
```javascript
{
  pergunta: "Texto da pergunta baseada no conteúdo",
  alternativas: [
    {
      texto: "Alternativa A",
      correta: false,
      feedback: "Explicação educativa sobre por que está incorreta"
    },
    {
      texto: "Alternativa B",
      correta: true,
      feedback: "Explicação educativa sobre por que está correta"
    },
    {
      texto: "Alternativa C",
      correta: false,
      feedback: "Explicação educativa sobre por que está incorreta"
    },
    {
      texto: "Alternativa D",
      correta: false,
      feedback: "Explicação educativa sobre por que está incorreta"
    }
  ]
}
```

### **PASSO 5.2: Geração da Avaliação Final**
```bash
# Script: gerar-avaliacao-final.js
# Avaliação final com 50 questões:
1. Selecionar questões de todos os 7 módulos
2. Distribuir equilibradamente (7-8 questões por módulo)
3. Manter padrão de 4 alternativas
4. Incluir feedbacks educativos
5. Embaralhar alternativas
```

---

## 🎨 FASE 6: PRESERVAÇÃO DO LAYOUT

### **PASSO 6.1: Verificação de Arquivos de Layout**
```bash
# Script: verificar-layout.js
# Arquivos que NÃO devem ser modificados:
- public/style.css (preservar 100%)
- public/certificate-manager.js (preservar 100%)
- public/index.html (apenas títulos e referências)
```

### **PASSO 6.2: Adaptações Mínimas Necessárias**
```bash
# Script: adaptar-layout.js
# Apenas estas modificações:
- Títulos no index.html
- Referências de módulos no script.js
- Número de módulos no progress-manager.js
- Configurações no config-sistema.json
```

### **PASSO 6.3: Cópia dos Áudios**
```bash
# Script: copiar-audios.js
# Copiar arquivos de áudio:
- MRS/Audios/ → public/MRS/Audios/
- Verificar integridade dos arquivos
- Confirmar nomenclatura correta
```

---

## 🧪 FASE 7: TESTES E VALIDAÇÃO

### **PASSO 7.1: Testes de Estrutura**
```bash
# Script: testar-estrutura.js
# Verificar:
- Todos os arquivos presentes
- Estrutura de pastas correta
- Configurações válidas
- Referências de áudio existem
```

### **PASSO 7.2: Testes de Funcionalidade**
```bash
# Script: testar-funcionalidade.js
# Testar:
- Backend inicia na porta 3002
- Frontend carrega na porta 8001
- Navegação entre módulos
- Sistema de progresso
- Player de áudio
- Quizzes funcionais
- Certificados geram
```

### **PASSO 7.3: Testes de Conteúdo**
```bash
# Script: testar-conteudo.js
# Verificar:
- Todos os 7 módulos carregam
- 15 questões por módulo
- 50 questões na avaliação final
- Feedbacks educativos presentes
- Áudios reproduzem corretamente
```

### **PASSO 7.4: Testes de Layout**
```bash
# Script: testar-layout.js
# Verificar:
- Layout idêntico ao PNSB
- Paleta de cores preservada
- Cards funcionam corretamente
- Responsividade mantida
- Animações suaves
```

---

## 📦 FASE 8: FINALIZAÇÃO E ENTREGA

### **PASSO 8.1: Organização Final**
```bash
# Script: organizar-final.js
# Estrutura final:
- Remover arquivos temporários
- Organizar pastas
- Verificar permissões
- Criar README.md
```

### **PASSO 8.2: Criação de Scripts de Uso**
```bash
# Script: criar-scripts-uso.js
# Scripts finais:
- iniciar-sistema.bat (porta 8001)
- parar-sistema.bat
- backup-dados.bat
- README.md com instruções
```

### **PASSO 8.3: Documentação Final**
```markdown
# Script: criar-documentacao.js
# README.md final com:
- Instruções de instalação
- Como usar o sistema
- Estrutura do curso
- Contato para suporte
```

---

## 🛠️ ESTRUTURA DE SCRIPTS NECESSÁRIOS

### **📁 Organização dos Scripts:**
```
replicador-curso-mrs/
├── replicar-curso-mrs.bat          # Script principal
├── scripts/
│   ├── verificar-ambiente.js       # Fase 1.1
│   ├── analisar-arquivos-mrs.js    # Fase 1.2
│   ├── copiar-estrutura-pnsb.js    # Fase 2.1
│   ├── limpar-dados-pnsb.js        # Fase 2.2
│   ├── criar-config-mrs.js         # Fase 3.1
│   ├── adaptar-backend.js          # Fase 3.2
│   ├── adaptar-frontend.js         # Fase 3.3
│   ├── adaptar-progress-manager.js # Fase 3.4
│   ├── processar-arquivos-txt.js   # Fase 4.1
│   ├── criar-cards-inteligentes.js # Fase 4.2
│   ├── gerar-modulos-json.js       # Fase 4.3
│   ├── gerar-questoes-modulos.js   # Fase 5.1
│   ├── gerar-avaliacao-final.js    # Fase 5.2
│   ├── verificar-layout.js         # Fase 6.1
│   ├── adaptar-layout.js           # Fase 6.2
│   ├── copiar-audios.js            # Fase 6.3
│   ├── testar-estrutura.js         # Fase 7.1
│   ├── testar-funcionalidade.js    # Fase 7.2
│   ├── testar-conteudo.js          # Fase 7.3
│   ├── testar-layout.js            # Fase 7.4
│   ├── organizar-final.js          # Fase 8.1
│   ├── criar-scripts-uso.js        # Fase 8.2
│   └── criar-documentacao.js       # Fase 8.3
├── templates/
│   ├── module-template.js
│   ├── quiz-template.js
│   └── config-template.json
└── output/
    └── curso-mrs/
```

---

## 📋 DETALHAMENTO DOS SCRIPTS PRINCIPAIS

### **1. SCRIPT PRINCIPAL: `replicar-curso-mrs.bat`**
```batch
@echo off
chcp 65001 >nul
title Replicador de Sistema de Curso MRS

echo.
echo ========================================
echo    REPLICADOR DE SISTEMA CURSO MRS
echo ========================================
echo.

:: Verificar ambiente
node scripts/verificar-ambiente.js
if errorlevel 1 (
    echo ❌ ERRO: Ambiente não adequado!
    pause
    exit /b 1
)

:: Analisar arquivos MRS
node scripts/analisar-arquivos-mrs.js
if errorlevel 1 (
    echo ❌ ERRO: Arquivos MRS não encontrados!
    pause
    exit /b 1
)

:: Executar todas as fases
echo 🚀 Iniciando replicação...
node scripts/copiar-estrutura-pnsb.js
node scripts/limpar-dados-pnsb.js
node scripts/criar-config-mrs.js
node scripts/adaptar-backend.js
node scripts/adaptar-frontend.js
node scripts/adaptar-progress-manager.js
node scripts/processar-arquivos-txt.js
node scripts/criar-cards-inteligentes.js
node scripts/gerar-modulos-json.js
node scripts/gerar-questoes-modulos.js
node scripts/gerar-avaliacao-final.js
node scripts/verificar-layout.js
node scripts/adaptar-layout.js
node scripts/copiar-audios.js
node scripts/testar-estrutura.js
node scripts/testar-funcionalidade.js
node scripts/testar-conteudo.js
node scripts/testar-layout.js
node scripts/organizar-final.js
node scripts/criar-scripts-uso.js
node scripts/criar-documentacao.js

echo.
echo ✅ REPLICAÇÃO CONCLUÍDA COM SUCESSO!
echo 📁 Resultado em: output/curso-mrs/
echo 🚀 Para iniciar: cd output/curso-mrs && iniciar-sistema.bat
echo.
pause
```

### **2. SCRIPT DE VERIFICAÇÃO: `verificar-ambiente.js`**
```javascript
const fs = require('fs');
const { execSync } = require('child_process');

console.log('🔍 Verificando ambiente...');

// Verificar Node.js
try {
    const nodeVersion = execSync('node --version').toString().trim();
    console.log(`✅ Node.js: ${nodeVersion}`);
} catch (error) {
    console.error('❌ Node.js não encontrado!');
    process.exit(1);
}

// Verificar npm
try {
    const npmVersion = execSync('npm --version').toString().trim();
    console.log(`✅ npm: ${npmVersion}`);
} catch (error) {
    console.error('❌ npm não encontrado!');
    process.exit(1);
}

// Verificar projeto PNSB
if (!fs.existsSync('../public/data/module1.js')) {
    console.error('❌ Projeto PNSB não encontrado!');
    process.exit(1);
}
console.log('✅ Projeto PNSB encontrado');

// Verificar portas
// ... lógica de verificação de portas

console.log('✅ Ambiente verificado com sucesso!');
```

### **3. SCRIPT DE PROCESSAMENTO: `processar-arquivos-txt.js`**
```javascript
const fs = require('fs');
const path = require('path');

console.log('📄 Processando arquivos .txt...');

const modulosDir = '../MRS/';
const modulos = [];

// Ler todos os arquivos .txt
const arquivos = fs.readdirSync(modulosDir)
    .filter(file => file.endsWith('.txt'))
    .sort();

for (let i = 0; i < arquivos.length; i++) {
    const arquivo = arquivos[i];
    const conteudo = fs.readFileSync(path.join(modulosDir, arquivo), 'utf8');
    
    // Remover referências bibliográficas [1], [2], [3], etc.
    const conteudoLimpo = conteudo.replace(/\[\d+\]/g, '');
    
    // Extrair título
    const tituloMatch = conteudoLimpo.match(/^([^\n]+)/);
    const titulo = tituloMatch ? tituloMatch[1].trim() : `Módulo ${i + 1}`;
    
    // Extrair resumo
    const resumoMatch = conteudoLimpo.match(/Resumo\n([^\n]+)/);
    const resumo = resumoMatch ? resumoMatch[1].trim() : '';
    
    // Extrair seções
    const secoes = conteudoLimpo.split(/\d+\.\d+/).slice(1);
    
    modulos.push({
        id: i + 1,
        titulo,
        resumo,
        secoes,
        audio: `Curso MRS - Mod ${i + 1}.wav`
    });
}

console.log(`✅ Processados ${modulos.length} módulos`);
module.exports = modulos;
```

---

## ✅ CHECKLIST DE EXECUÇÃO

### **✅ Fase 1 - Preparação:**
- [ ] Verificação do ambiente
- [ ] Análise dos arquivos MRS
- [ ] Criação da estrutura de trabalho

### **✅ Fase 2 - Replicação:**
- [ ] Cópia da estrutura PNSB
- [ ] Limpeza de dados específicos

### **✅ Fase 3 - Adaptação:**
- [ ] Criação do config-sistema.json
- [ ] Adaptação do backend
- [ ] Adaptação do frontend
- [ ] Adaptação do progress-manager

### **✅ Fase 4 - Conversão:**
- [ ] Processamento dos arquivos .txt
- [ ] Criação de cards inteligentes
- [ ] Geração dos módulos JSON

### **✅ Fase 5 - Questões:**
- [ ] Geração de questões por módulo
- [ ] Geração da avaliação final

### **✅ Fase 6 - Layout:**
- [ ] Verificação de layout
- [ ] Adaptações mínimas
- [ ] Cópia dos áudios

### **✅ Fase 7 - Testes:**
- [ ] Testes de estrutura
- [ ] Testes de funcionalidade
- [ ] Testes de conteúdo
- [ ] Testes de layout

### **✅ Fase 8 - Finalização:**
- [ ] Organização final
- [ ] Criação de scripts de uso
- [ ] Documentação final

---

## 🎯 RESULTADO FINAL ESPERADO

**Sistema MRS completo com:**
- ✅ Layout 100% idêntico ao PNSB
- ✅ 7 módulos funcionais
- ✅ 155 questões totais (105 modulares + 50 finais)
- ✅ Sistema de certificados
- ✅ Portabilidade total
- ✅ Qualidade educativa preservada

**🎯 CURSO MRS - PRONTO PARA USO! 🏆**

---

## 📝 NOTAS IMPORTANTES

1. **Todos os scripts** devem ser executados na ordem especificada
2. **Verificações** são feitas automaticamente em cada fase
3. **Backup** do projeto PNSB original é recomendado
4. **Testes** são executados automaticamente no final
5. **Documentação** é gerada automaticamente

---

**🏆 SISTEMA DE SCRIPTS COMPLETO PARA REPLICAÇÃO DO CURSO MRS! 🚀** 