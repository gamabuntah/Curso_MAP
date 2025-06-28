# Prompt para Gemini – Módulo 4 PNSB

**Instruções para Gemini:**

Você é um especialista em saneamento e didática digital. Receberá abaixo o conteúdo integral do Módulo 4 do curso PNSB (em formato markdown). Sua tarefa é:

1. **Transformar todo o conteúdo em um objeto JavaScript** no formato abaixo, para uso direto em um sistema web (não pode faltar nada do texto original, nem resumos!):

```js
window.modulos_data = window.modulos_data || {};
Object.assign(window.modulos_data, {
  "4": {
    "title": "Módulo 4: Captação, Condução e Infiltração (Bloco CCI)",
    "audio": "MAP/Audios/Curso MAP - Mod 4.mp3",
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

4. **No final, o resultado deve ser um único objeto JavaScript pronto para ser colado no arquivo `public/data/module4.js` do sistema.**

---

## Conteúdo original do Módulo 4

```
Módulo 4: Captação, Condução e Infiltração (Bloco CCI)
Este módulo tem como objetivo identificar o sistema de drenagem instalado no município, seu funcionamento e os serviços realizados pelo prestador. Serão considerados, neste bloco, os sistemas de captação e transporte da água da chuva por rede, e os dispositivos de micro e de macrodrenagem, bem como infraestruturas verdes [2, 3].

Resumo
O Módulo 4 do curso "Drenagem e Manejo de Águas Pluviais Urbanas" detalha os sistemas utilizados para gerenciar a água da chuva nas cidades. O bloco Captação, Condução e Infiltração (CCI) foca em como a água é coletada e transportada, distinguindo entre redes unitárias (que misturam esgoto e água da chuva) e redes separadoras absolutas (que os separam). O documento explora a microdrenagem, composta por dispositivos como bueiros e sarjetas para disciplinar o fluxo inicial, e a macrodrenagem, que lida com o escoamento final através de canais maiores e estruturas de controle de cheias. Além disso, o texto introduz as infraestruturas verdes ou Soluções Baseadas na Natureza (SBN), que utilizam elementos naturais para a drenagem sustentável, e aborda o reúso de águas pluviais, a gestão em áreas de ocupação irregular, e os tipos de pavimentação, incluindo opções permeáveis e o uso de materiais reciclados, finalizando com o manejo em vias não pavimentadas.

--------------------------------------------------------------------------------
4.1. O Bloco CCI e seu Escopo
O Bloco CCI foca no sistema de drenagem instalado no município, seu funcionamento e os serviços que são realizados pelo prestador [2, 3]. Abrange os sistemas de captação e transporte da água da chuva por rede, os dispositivos de micro e de macrodrenagem, e as infraestruturas verdes [2, 3].
4.2. Redes de Captação e Transporte (Quesito 1)
Este quesito verifica a existência de redes de captação e transporte de águas pluviais construídas na área atendida pelo prestador de serviço no município pesquisado em 2024 [2, 3].
Os tipos de rede são:
•
Rede Tipo Unitária: É um sistema único de tubulações que capta e transporta a água da chuva e o esgoto doméstico juntos, havendo, portanto, a mistura entre eles [2, 4].
•
Rede Tipo Separadora Absoluta: É um sistema que divide claramente a captação e o transporte em dois conjuntos separados de tubulações, um para água da chuva e outro para o esgoto, onde não há mistura entre eles [2, 4, 5].
4.3. Detalhamento da Microdrenagem (Quesito 2)
Este quesito pergunta se, em 2024, foram realizados serviços (como construção, manutenção, melhoria, limpeza de bueiros, desobstrução de canais, inspeção de tubulações, mudança de direção de declividade, de diâmetro nos poços de visita, etc.) nos dispositivos do sistema de microdrenagem do município pesquisado [2, 5].
•
Definição de MICRODRENAGEM: É o sistema de dispositivos instalados responsável pelo disciplinamento das águas pluviais [2, 5]. É composto por pavimentos das ruas, guias e sarjetas, bueiros, e bocas de lobo. Seus objetivos incluem a redução de riscos de alagamentos e enxurradas no sistema viário, a proteção de taludes/encostas contra deslizamentos e erosões, e a redução da poluição hídrica [2, 6].
•
Tipos de Dispositivos de Microdrenagem (Quesito 2.1):
◦
Boca de lobo / de leão: Coletoras de água da chuva [2, 7].
◦
Grelha / ralo: Dispositivos que permitem o escoamento e retêm resíduos [2, 7].
◦
Poço de visita: Câmaras para inspeção e manutenção de tubulações [2, 7].
◦
Guia / sarjeta / meio-fio / canaleta / valeta: Estruturas que delimitam vias, auxiliam na drenagem, controlam pavimentos e protegem áreas [2, 7].
◦
Rua pavimentada: Cobertura resistente para circulação, facilitando a mobilidade e aumentando a resistência do terreno [2, 7].
◦
Outros [2, 7].
4.4. Detalhamento da Macrodrenagem (Quesito 3)
Este quesito investiga a realização de serviços (como construção, manutenção, melhoria, reforma, desassoreamento, canalização, descanalização, etc.) nos dispositivos do sistema de macrodrenagem do município pesquisado em 2024 [2, 8].
•
Definição de MACRODRENAGEM: É o sistema de dispositivos instalados responsável pelo escoamento final das águas, que inclui canais naturais ou artificiais e galerias pluviais de grandes dimensões que recebem as águas de diversos sistemas de microdrenagem. Rios, córregos, riachos, igarapés e valas localizados nos fundos de vale também são componentes do sistema de macrodrenagem [2, 8, 9]. Inclui também os grandes dispositivos, que possuem grandes dimensões e alto grau de intervenção na paisagem para controle de elevados volumes de água, como barragens de amortecimento de cheias, "piscinões", diques, etc. [2, 9].
•
Tipos de Dispositivos de Macrodrenagem (Quesito 3.1):
◦
Canal natural: Cursos d'água como rios e riachos sem interferência de engenharia [2, 9].
◦
Canal construído e/ou cursos d'água canalizados: Inclui rios retificados (aprofundamento/alargamento para aumentar a velocidade e transferir cheias a jusante) e/ou tamponados (quando o rio corre dentro de galeria ou tubulação enterrada) [2, 10]. A canalização pode ter consequências negativas, como o aumento da velocidade da água e do seu poder de destruição, a ocupação de áreas sujeitas a inundação e o extermínio de peixes, pássaros e vegetação [1, 11].
◦
Galeria: Conjunto de tubulações para captar, transportar e drenar água da chuva [2, 10].
◦
Dique e/ou muro: Estruturas para controlar a água e evitar inundações [2, 10, 12].
◦
Estrutura de detenção/retenção para controle/amortecimento de cheias ("piscinão"): Acumulação temporária para reduzir inundações, muitas vezes com multifuncionalidade [2, 10, 13-15].
◦
Dissipador de energia: Redutor de velocidade das águas para evitar erosão, como escadas ou rampas com blocos [2, 13, 16].
◦
Outros [2, 13].
4.5. Detalhamento das Infraestruturas Verdes (Quesito 4)
Este quesito verifica a realização de serviços (como construção, manutenção, melhoria, desassoreamento, cuidados com a vegetação, etc.) em infraestruturas verdes no município pesquisado em 2024 [2, 13].
•
Definição de INFRAESTRUTURAS VERDES: Também conhecidas como Soluções Baseadas na Natureza (SBN) ou Drenagem Sustentável, são estruturas construídas que utilizam as funções da natureza para a solução da drenagem das águas de chuva. Elas criam áreas naturais e espaços abertos – em diferentes escalas (regional, local e particular) e tamanhos – integrados com a infraestrutura cinza (engenharia convencional) [2, 17].
•
Desassoreamento: Procedimento de dragagem ou limpeza do fundo de alguma estrutura construída, para retirar sedimentos, lodo, areia, vegetação e outros resíduos [2, 18].
•
Tipos de Dispositivos de Infraestruturas Verdes (Quesito 4.1):
◦
Bacias de infiltração ou lagoas pluviais: Reduzem enxurradas, removem poluentes e recarregam a água subterrânea [2, 19].
◦
Alagado construído / wetlands construídos / jardins filtrantes: Ecossistemas para tratamento da água, com baixo custo e aumento da biodiversidade [2, 19].
◦
Canteiro pluvial / jardim de chuva: Pequenos jardins rebaixados que retêm água e removem poluentes [2, 19].
◦
Pavimento permeável: Permite infiltração, filtração e armazenamento de água da chuva [2, 19].
◦
Telhado Verde: Cobertura de plantas que diminui a temperatura, absorve a chuva, filtra o ar e promove sustentabilidade [2, 19].
◦
Vala ou Biovaleta / Trincheira de infiltração vegetada: Estruturas lineares que filtram, armazenam e infiltram águas da chuva [2, 19, 20].
◦
Corredores verdes urbanos (greenways): Faixas de vegetação que ligam áreas naturais, aumentando a biodiversidade e melhorando a qualidade de vida [2, 20].
◦
Ruas verdes (green streets): Ruas com calçadas arborizadas e infraestruturas verdes que reduzem poluição, temperatura, ruído e risco de enchentes [2, 20].
◦
Bioengenharia de solos ou engenharia natural: Técnicas que utilizam materiais vivos e inertes para estabilizar, proteger e recuperar o solo [2, 20].
◦
Renaturalização / Restauração ou Recuperação / Revitalização de cursos d'água: Restauram funções ecológicas e hidrológicas, diminuem a velocidade da água, aumentam a área inundável, protegem a biota e recuperam matas ciliares [2, 20, 21].
◦
Parques lineares urbanos: Espaços públicos que se estendem ao longo de cursos d'água, preservam o meio ambiente e promovem lazer [2, 21].
◦
Outros [2, 21].
4.6. Captação de Esgoto Sanitário de Tempo Seco (Quesito 5)
Este quesito pergunta se, em 2024, existia captação de esgoto sanitário de tempo seco (vazão de estiagem) no município pesquisado [2, 21].
•
Essa captação ocorre em localidades com rede de captação unitária (esgoto e águas pluviais correndo juntas na mesma tubulação) e é realizada em período de seca (sem chuva). Pode existir também na rede de captação tipo separadora absoluta por causa das ligações clandestinas [2, 22].
•
Consiste na interceptação do esgoto presente nas galerias da rede pluvial, evitando, parcialmente, que seja despejado in natura no meio ambiente [2, 22].
•
O sistema é composto por interceptores que desviam o esgoto para uma Estação de Tratamento de Esgoto (ETE). Em dias sem chuva, o esgoto desviado tem características sanitárias e pode ser tratado normalmente [2, 22, 23].
4.7. Captação e Aproveitamento (Reúso) de Águas Pluviais (Quesito 6)
Este quesito verifica se, em 2024, o prestador de serviço instalou e/ou operou sistema de captação e aproveitamento (reúso) de águas pluviais nas áreas urbanizadas do município pesquisado [2, 24].
•
O reúso consiste na captação da água da chuva, que pode ser feita a partir de telhados de casas, através do uso de calhas e encanamentos condutores, e o armazenamento em cisternas, caixas d'água, tanques de armazenamento ou outro tipo de reservatório [2, 24].
•
Devem ser considerados todos os dispositivos existentes: de coleta e armazenamento de águas de chuvas e os de captação e transporte de águas pluviais em geral [2, 24].
4.8. Reservatório de Primeira Chuva (Quesito 7)
Este quesito pergunta se, em 2024, o prestador de serviço operou, orientou, instalou ou fez manutenção de reservatório de primeira chuva no município pesquisado [2, 25].
•
Nos sistemas de captação e reúso, a primeira água de chuva deve ser descartada, pois contém sujeira acumulada nos telhados e encanamentos. A quantidade de água a ser descartada depende da região e da poluição do ar [2, 25].
•
Este quesito se refere, exclusivamente, a dispositivos instalados para captar, armazenar e reutilizar ÁGUA DA CHUVA, independentemente do tamanho e da abrangência do sistema (individual ou coletivo) [2, 26].
4.9. Manejo em Áreas de Ocupação Irregular (Quesito 8)
Este quesito verifica se, em 2024, o prestador de serviço realizou manejo em dispositivos de microdrenagem, macrodrenagem ou em infraestruturas verdes (soluções baseadas na natureza) nas ÁREAS DE OCUPAÇÃO IRREGULAR, FAVELAS OU COMUNIDADES URBANAS do município pesquisado [26-28].
•
Os tipos de sistema para manejo são:
◦
Microdrenagem [27, 28].
◦
Macrodrenagem [27, 28].
◦
Infraestruturas verdes (soluções baseadas na natureza) [27, 28].
4.10. Tipos de Pavimentação nas Áreas Urbanizadas (Quesito 9)
Este quesito indaga se, em 2024, existiam ruas pavimentadas nas áreas urbanizadas do município pesquisado (inclusive setor rural com características urbanas) [27, 29].
•
Tipos de Pavimento (Quesito 9.1):
◦
Pavimento impermeável de asfalto: Composto de concreto asfáltico misturado com agregados ligantes, como piche [27, 30].
◦
Pavimento impermeável de peças pré-moldadas de concreto: Considerado de baixo custo, estável e de fácil manejo, feito com blocos ou placas cimentícias travadas internamente, utilizando apenas a compactação plana do solo como base [27, 30].
◦
Pavimento impermeável de concreto contínuo: De alta resistência a tráfego pesado e alta durabilidade, de concreto moldado in loco [27, 30, 31].
◦
Pavimento permeável de asfalto poroso: Um pavimento que permite que a água da chuva seja absorvida, feito de uma mistura com espaços vazios em sua estrutura [27, 31].
◦
Pavimento permeável de peças pré-moldadas de concreto poroso ou com juntas alargadas: Permite a infiltração de água no solo [27, 31, 32].
◦
Pavimento permeável de concreto poroso contínuo: Uma estrutura com vazios interconectados que permitem a passagem de água através da superfície [27, 32].
◦
Paralelepípedo: Pavimento impermeável, mas sem juntas de cimento, considerado ecologicamente correto por permitir a infiltração da água da chuva [27, 32, 33].
◦
Solo-cimento: Material utilizado na pavimentação, obtido da mistura de solo, cimento e água, sendo econômico e ecológico [27, 33].
◦
Outros [27, 33].
4.11. Pavimentação com Material de Reúso/Reciclagem (Quesito 10)
Este quesito pergunta se o material utilizado na pavimentação das ruas nas áreas urbanizadas, em 2024, era proveniente de reúso/reciclagem [27, 34].
•
Materiais Provenientes de Reúso/Reciclagem (Quesito 10.1):
◦
Resíduos de construção: Provenientes de construções, reformas, reparos e demolições, como tijolos, concreto, solos, rochas, metais, etc. [27, 34, 35].
◦
Borracha, pneu: Pavimentação conhecida como asfalto-borracha, feita com pneus velhos triturados e adicionados à mistura asfáltica [27, 35, 36].
◦
Escória (resíduo industrial): Subproduto da produção de ferro e aço, aplicada na construção de estradas, ruas, etc., substituindo parcialmente brita ou cimento [27, 36].
◦
Outros [27, 36].
4.12. Ruas/Estradas Pavimentadas Sem Drenagem (Quesito 11)
Este quesito questiona se, em 2024, existiam ruas e/ou estradas com pavimentação sem sistema de drenagem no município pesquisado [27, 36, 37].
•
Isso se refere a ruas ou estradas onde existe apenas a pavimentação, sem a presença de guias, sarjetas, bocas de lobo ou outro tipo de dispositivo de microdrenagem [27, 37].
4.13. Manejo de Águas Pluviais em Ruas/Estradas NÃO Pavimentadas (Quesito 12)
Este quesito pergunta se, em 2024, o prestador realizou manejo de águas pluviais em ruas e/ou estradas não pavimentadas no município pesquisado [27, 37].
•
O manejo pode ser feito através de algumas estratégias (Quesito 12.1), como [14, 27, 37, 38]:
◦
Controle de erosão e cheias (Bacia de acumulação / barraginhas) [27, 38].
◦
Controle de tráfego no período chuvoso [27, 38].
◦
Proteção das áreas adjacentes com vegetação ou outras formas de proteção (como geotêxtil ou enrocamento) [14, 27].
◦
Instalação / manutenção de jardim de chuva, vala ou biovaleta / trincheira de infiltração [14, 27].
◦
Outras [14, 27].
```

5. IMPORTANTE:
Não resuma, não omita, não altere o texto original.
Apenas organize em cards didáticos, usando os tipos sugeridos.
O resultado deve ser um código JavaScript pronto para uso, sem comentários ou explicações extras. 