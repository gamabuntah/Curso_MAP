# 📋 PLANO COMPLETO - REPLICAÇÃO DO SISTEMA PNSB PARA CURSO MRS

## 🎯 OBJETIVO
Criar um sistema híbrido de scripts para replicar o projeto PNSB com layout idêntico e adaptar para o curso MRS (Manejo de Resíduos Sólidos) com 7 módulos.

---

## 📊 CONFIGURAÇÃO DO CURSO MRS

### **Dados Básicos:**
- **Nome:** Manejo de Resíduos Sólidos
- **Sigla:** MRS
- **Módulos:** 7 (vs 8 do PNSB)
- **Questões por módulo:** 15
- **Avaliação final:** 50 questões
- **Total de questões:** 155 (105 modulares + 50 finais)
- **Áudios:** Formato .wav, nomenclatura "Curso MRS - Mod X"
- **Portas:** Automáticas (evitar conflito com PNSB)

### **Estrutura de Conteúdo:**
- **Formato fonte:** Markdown (.md)
- **Estrutura:** Título, Resumo, Seções numeradas (1.1, 1.2, etc.)
- **Elementos:** Listas, sublistas, referências [1], [2], etc.
- **Conversão:** Para JSON com cards inteligentes

---

## 🎨 LAYOUT E PADRÕES VISUAIS (BASEADO NA DEFINIÇÃO PNSB)

### **🎯 Layout Base:**
- **Inspiração:** Aave.com (design moderno e limpo)
- **Estrutura:** Barra superior fixa, cards organizados, navegação lateral
- **Responsividade:** Mobile-first, adaptável a todos os dispositivos

### **🎨 Paleta de Cores (Preservada 100%):**
- **Primária:** #2B2D3A (azul escuro)
- **Secundária:** #6C63FF (roxo)
- **Accent:** #00E599 (verde)
- **Fundo:** #F5F6FA (cinza claro)
- **Texto:** #22223B (azul muito escuro)

### ** Sistema de Cards (6 Tipos):**
1. **default** - Conteúdo principal
2. **dica** - Dicas práticas e importantes
3. **atencao** - Pontos críticos e alertas
4. **exemplo** - Exemplos práticos e casos reais
5. **duvidas** - Dúvidas frequentes e como ajudar
6. **resumo visual** - Tabelas, infográficos e resumos

### **📱 Elementos de Interface:**
- **Navegação lateral** com progresso visual
- **Player de áudio** integrado com controles avançados
- **Sistema de progresso** por módulos
- **Animações** e transições suaves
- **Ícones** e emojis padronizados

---

## 🎨 SISTEMA INTELIGENTE DE CONVERSÃO MARKDOWN → JSON

### **📋 PROCESSO DE CONVERSÃO FIEL E INTEGRAL**

#### **1. ANÁLISE INTELIGENTE DO CONTEÚDO:**
```javascript
function analisarConteudoInteligente(markdown, numeroModulo) {
  return {
    tipoConteudo: identificarTipoConteudo(markdown),
    complexidade: calcularComplexidade(markdown),
    exemplos: extrairExemplos(markdown),
    pontosCriticos: identificarPontosCriticos(markdown),
    termosTecnicos: extrairTermosTecnicos(markdown),
    duvidasPotenciais: gerarDuvidasPotenciais(markdown, numeroModulo),
    resumosVisuais: identificarElementosVisuais(markdown)
  };
}
```

#### **2. CRIAÇÃO INTELIGENTE DE CARDS (Baseada na Definição PNSB):**

**Card 1: Resumo (Sempre Presente)**
- **Tipo:** default
- **Conteúdo:** Primeiro parágrafo do módulo (resumo)
- **Criação:** Sempre presente, extraído automaticamente
- **Formato:** Texto limpo, sem referências [1], [2], etc.

**Card 2: Conteúdo Principal (Sempre Presente)**
- **Tipo:** default
- **Conteúdo:** Seções principais (1.1, 1.2, 1.3, etc.)
- **Criação:** Sempre presente, dividido logicamente
- **Preservação:** 100% do conteúdo técnico

**Card 3: Dica (Opcional - Inteligente)**
- **Tipo:** dica
- **Conteúdo:** Dicas práticas extraídas do texto
- **Criação:** Se encontrar palavras-chave: "importante", "atenção", "dica", "nota"
- **Formato:** Box destacado com ícone 

**Card 4: Exemplo (Opcional - Inteligente)**
- **Tipo:** exemplo
- **Conteúdo:** Exemplos práticos do texto
- **Criação:** Se encontrar frases como "por exemplo", "como", "caso", "situação"
- **Formato:** Box destacado com ícone 

**Card 5: Dúvidas Frequentes (Opcional - Inteligente)**
- **Tipo:** duvidas
- **Conteúdo:** Perguntas baseadas no conteúdo + como ajudar
- **Criação:** Se módulo for complexo ou tiver muitos termos técnicos
- **Formato:** Box destacado com ícone 🗨️
- **Estrutura:** "❓ Dúvida Comum" + "💡 Como Ajudar"

**Card 6: Resumo Visual (Opcional - Inteligente)**
- **Tipo:** resumo visual
- **Conteúdo:** Pontos-chave em formato visual
- **Criação:** Se módulo tiver muitas listas, tabelas ou conceitos importantes
- **Formato:** Box destacado com ícone 📊

#### **3. PRESERVAÇÃO INTEGRAL DO CONTEÚDO:**
- ✅ **Manter:** Todo o conteúdo técnico
- ✅ **Manter:** Estrutura lógica das seções
- ✅ **Manter:** Exemplos e casos práticos
- ✅ **Manter:** Informações para aplicação prática
- ❌ **Remover:** Referências bibliográficas [1], [2], [3], etc.
- ❌ **Remover:** Notas de rodapé
- ❌ **Remover:** Metadados desnecessários

#### **4. PADRÕES DE FORMATAÇÃO (Baseados na Definição PNSB):**
- **Emojis:** Apenas nos títulos dos cards e cards especiais
- **Símbolos:** Não usar no meio do texto dos cards ou em tabelas
- **Listas:** Manter formatação original com bullets
- **Tabelas:** Preservar estrutura e dados
- **Ênfases:** Manter negrito e itálico importantes

---

## 📁 ESTRUTURA DO SISTEMA HÍBRIDO

### **📁 Organização de Arquivos:** 