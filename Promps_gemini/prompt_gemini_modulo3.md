# Prompt para Gemini – Módulo 3 PNSB

**Instruções para Gemini:**

Você é um especialista em saneamento e didática digital. Receberá abaixo o conteúdo integral do Módulo 3 do curso PNSB (em formato markdown). Sua tarefa é:

1. **Transformar todo o conteúdo em um objeto JavaScript** no formato abaixo, para uso direto em um sistema web (não pode faltar nada do texto original, nem resumos!):

```js
window.modulos_data = window.modulos_data || {};
Object.assign(window.modulos_data, {
  "3": {
    "title": "Módulo 3: Aspectos Legais (Bloco LEG) e Serviços Realizados por Terceiros (Bloco SRT)",
    "audio": "MAP/Audios/Curso MAP - Mod 3.mp3",
    "cards": [
      // Aqui entram os cards, veja instruções abaixo
    ]
  }
});
```

2. **Organize o conteúdo em cards didáticos**, SEM OMITIR NENHUM TRECHO do texto original. Cada card deve ter:
   - `"type"`: pode ser `"default"`, `"atencao"`, `"exemplo"`, `"duvidas"`, `"resumo"` (use conforme o conteúdo)
   - `"title"`: título do card (ex: "📖 Introdução", "⚠️ Atenção", "📝 Exemplo Prático", "📊 Resumo Visual", etc)
   - `"content"`: o texto do card (pode usar HTML básico para listas, tabelas, negrito, etc)

3. **Dicas para a estrutura:**
   - Cada parágrafo, lista, definição ou orientação importante do original deve ser um card ou subcard.
   - Use cards especiais para exemplos, dúvidas frequentes, resumos visuais e alertas de atenção.
   - Não resuma, não omita, não altere o sentido. O texto deve ser integral, apenas organizado didaticamente.
   - Se houver listas ou tabelas, use HTML básico no campo `"content"` para facilitar a visualização.
   - Mantenha a ordem lógica do original.

4. **No final, o resultado deve ser um único objeto JavaScript pronto para ser colado no arquivo `public/data/module3.js` do sistema.**

---

## Conteúdo original do Módulo 3

```
Módulo 3: Aspectos Legais (Bloco LEG) e Serviços Realizados por Terceiros (Bloco SRT)
Este módulo irá abordar os aspectos legais pertinentes à prestação dos serviços de drenagem e manejo de águas pluviais, incluindo as formas de delegação e os canais de atendimento ao cidadão. Em seguida, tratará das situações em que esses serviços são realizados por terceiros [1].

Resumo
Este documento detalha o Módulo 3 de um curso focado em aspectos legais e terceirização na drenagem e manejo de águas pluviais. O Bloco LEG explora como os municípios delegam serviços públicos, identificando os instrumentos legais como contrato de programa, concessão comum, Parceria Público-Privada (PPP) ou lei, e investiga a existência e o período de vigência desses acordos. Adicionalmente, aborda os canais de atendimento ao cidadão, como ouvidorias e centrais, e as principais reclamações recebidas. Já o Bloco SRT foca na contratação de empresas terceirizadas para a execução de serviços, listando diversas atividades que podem ser delegadas, como planejamento, monitoramento e manutenção, indicando que a total terceirização de serviços impacta o fluxo do questionário.
--------------------------------------------------------------------------------
3.1. Bloco LEG - Aspectos Legais
Este bloco tem como objetivo capacitar o técnico a compreender os mecanismos de transferência da execução do serviço público e os canais de atendimento ao cidadão [1].
3.1.1. Instrumento de Delegação ou Outorga (Quesito 1)
Este quesito visa identificar o instrumento legal pelo qual o município define o prestador do serviço de drenagem e manejo de águas pluviais [2].
As opções de resposta e suas definições são:
•
Contrato de programa: É um contrato de delegação da prestação de um serviço público que não exige licitação. É restrito aos casos em que o prestador de caráter público foi contratado no âmbito de cooperação federativa, conforme previsto na Lei 11.107, de 6 de abril de 2005 [2].
•
Contrato de concessão comum: É um contrato que tem como objeto a transferência da gestão e execução de um Serviço do Poder Público ao particular, por sua conta e risco, e é precedido de licitação nos termos da Lei 8.987/1995 [3].
•
Contrato de Parceria Público-Privada: Neste modelo, um parceiro privado assume o compromisso de disponibilizar à administração pública ou à comunidade uma certa utilidade, mediante a operação e manutenção de uma obra/serviço por ele previamente projetada, financiada e construída, tendo remuneração periódica paga pelo Estado e vinculada ao seu desempenho [3].
•
Lei: Um instrumento normativo legal [3].
•
Outro: Para entidades cuja constituição jurídica não esteja discriminada anteriormente [3].
•
Inexistente: Se não há um instrumento de delegação ou outorga. Se esta opção for marcada, o questionário deve pular para o quesito 3 [3].
3.1.2. Período de Vigência (Quesito 2)
Este quesito pergunta se o instrumento de delegação ou outorga definia um período de vigência [4].
•
A transferência da execução do serviço público pode ser feita por OUTORGA, que só pode ocorrer por meio de lei, ou por DELEGAÇÃO, que pode se dar por lei, contrato ou ato administrativo [4].
•
O período de vigência é o tempo previsto para o início e o fim da validade do instrumento, ou seja, a duração da prestação dos serviços indicada no documento, não necessariamente correspondendo à efetiva duração da prestação do serviço [4].
As opções de resposta são: Sim, Não, Não sabe [4].
•
Se for assinalado "Sim", os quesitos 2.1 e 2.2 devem ser respondidos [5]:
◦
2.1 - Data de início: Informe o mês e ano de início do período de vigência [5].
◦
2.2 - Data de término: Informe o mês e ano de término do período de vigência [5].
•
Atenção: Caso não saiba informar o período de vigência, registre "3 – Não sabe" [6].
3.1.3. Canais de Atendimento ao Cidadão (Quesito 3)
Este quesito verifica se, em 2024, o prestador de serviço possuía ouvidoria ou central de atendimento para recebimento de reclamações ou manifestações, mesmo que não seja exclusiva do serviço de drenagem e manejo de águas pluviais [5].
•
Ouvidoria: Atua na defesa dos direitos dos cidadãos, consumidores e usuários de produtos e serviços; é considerada um canal aberto para receber reivindicações, denúncias, sugestões e elogios e, especialmente, solucionar conflitos entre empresa e cliente [5, 7].
•
Central de atendimento: Faz a interação, o contato direto entre o cliente e a empresa, fornecedor ou fabricante do produto ou serviço adquirido [7].
As opções de resposta são: Sim, Não [7].
•
Se for assinalado "Não", o questionário deve pular para o quesito 5 [7].
3.1.4. Principal Reclamação ou Manifestação (Quesito 4)
Este quesito busca identificar a PRINCIPAL reclamação ou manifestação sobre o serviço de drenagem e manejo de águas pluviais, ou seja, a opção mais recorrente (maior quantidade) recebida pela central de atendimento/ouvidoria [7, 8].
As opções incluem:
•
Solicitação para implantação de sistema de drenagem e manejo de águas pluviais [8].
•
Solicitação para expansão de sistema de drenagem e manejo de águas pluviais [8].
•
Solicitação de licenciamento de projetos de drenagem e manejo de águas pluviais para empreendimentos particulares [8].
•
Solicitação para limpeza de corpos hídricos [8].
•
Reclamação sobre falta de pavimentação e/ou buracos na rua [8].
•
Reclamação sobre problemas nos dispositivos de drenagem (entupimento de bocas de lobo, grelhas quebradas etc.) [8].
•
Reclamação sobre ocorrência de alagamentos, inundações ou enxurradas [6].
•
Reclamação sobre deslizamentos ou movimentos de massa [6].
•
Implantação de soluções baseadas na natureza [6].
•
Reclamação sobre poluição da água [6].
•
Reclamação sobre lançamento de esgotos na rede de drenagem [6].
•
Reclamação sobre lançamento de esgotos em corpos hídricos [6].
•
Outra(s) [6].
•
Não houve reclamação ou manifestação em 2024 [6].
--------------------------------------------------------------------------------
3.2. Bloco SRT - Serviço(s) de Drenagem e Manejo de Águas Pluviais Realizado(s) por Terceiro(s)
Este bloco tem como objetivo identificar se o prestador de serviço contratou empresa(s) para a execução do(s) serviço(s) de drenagem e manejo de águas pluviais [1, 9].
3.2.1. Contratação de Empresas Terceirizadas (Quesito 1)
Este quesito pergunta se, em 2024, o prestador de serviço contratou empresa(s) para a execução do(s) serviço(s) de drenagem e manejo de águas pluviais no município pesquisado [9].
As opções de resposta são: Sim, Não [9].
•
Se for assinalado "Não", o bloco deve ser encerrado [9].
3.2.2. Serviços Executados por Terceiros (Quesito 2)
Este quesito solicita que o informante assinale o(s) serviço(s) de drenagem e manejo de águas pluviais executado(s) por terceiro(s) no município pesquisado. A marcação admite múltipla escolha [9].
•
A relação e definições dos Quesitos 2.1 a 2.8 (serviços de drenagem e manejo de águas pluviais realizados por terceiros) estão nas páginas 103 e 104 deste Manual [9, 10]. Estas definições correspondem aos serviços listados no Bloco CZP (Módulo 2, seção 2.3), como:
◦
Atualização do mapeamento das áreas de risco de inundação, alagamentos, enxurradas, deslizamentos e movimentos de massa [11, 12].
◦
Planejamento (projetos) [12, 13].
◦
Monitoramento pluviométrico e fluviométrico [13, 14].
◦
Monitoramento de qualidade da água pluvial [15].
◦
Operação (ações realizadas nos dispositivos de drenagem e manejo de águas pluviais) [15, 16].
◦
Manutenção (recuperação de infraestrutura, limpeza, reparos etc.) [16].
◦
Execução de obras / instalação / ampliação [16, 17].
◦
Outro(s) [17].
Orientação de preenchimento e fluxo do questionário em caso de terceirização total:
•
Neste quesito, o informante deve indicar somente os serviços prestados pela empresa terceirizada [10].
•
Caso os serviços sejam TOTALMENTE terceirizados, após responder a este quesito, o questionário deve ser encerrado [10, 18].
•
É crucial certificar-se com o responsável pela coleta se a empresa terceirizada foi cadastrada. Caso não tenha sido, ela deverá ser cadastrada [10, 18].

```

5. IMPORTANTE:
Não resuma, não omita, não altere o texto original.
Apenas organize em cards didáticos, usando os tipos sugeridos.
O resultado deve ser um código JavaScript pronto para uso, sem comentários ou explicações extras. 