# Prompt para Gemini – Módulo 2 PNSB

**Instruções para Gemini:**

Você é um especialista em saneamento e didática digital. Receberá abaixo o conteúdo integral do Módulo 2 do curso PNSB (em formato markdown). Sua tarefa é:

1. **Transformar todo o conteúdo em um objeto JavaScript** no formato abaixo, para uso direto em um sistema web (não pode faltar nada do texto original, nem resumos!):

```js
window.modulos_data = window.modulos_data || {};
Object.assign(window.modulos_data, {
  "2": {
    "title": "Módulo 2: Caracterização do Prestador de Serviço (Bloco CZP)",
    "audio": "MAP/Audios/Curso MAP - Mod 2.mp3",
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

4. **No final, o resultado deve ser um único objeto JavaScript pronto para ser colado no arquivo `public/data/module2.js` do sistema.**

---

## Conteúdo original do Módulo 2

```
Módulo 2: Caracterização do Prestador de Serviço (Bloco CZP)
Este módulo tem como objetivo capacitar os técnicos do IBGE a compreender o bloco CZP, identificando o responsável pela infraestrutura e serviços de drenagem e manejo de águas pluviais [1, 2]. O prestador de serviço, para a PNSB 2024, é a entidade que atua em áreas rurais ou urbanas, realizando pelo menos uma das seguintes atividades: mapeamento atualizado de áreas de risco, cadastro, planejamento, projeto, instalação, ampliação, adequação, monitoramento, manutenção e operação da infraestrutura de drenagem e manejo de águas pluviais [3, 4].

Resumo
O Módulo 2, intitulado "Caracterização do Prestador de Serviço", da Pesquisa Nacional de Saneamento Básico (PNSB) 2024, visa capacitar técnicos do IBGE para identificar e compreender a entidade responsável pela infraestrutura e serviços de drenagem e manejo de águas pluviais. Este módulo detalha os tipos de serviços executados por essas entidades, sejam eles diretos ou terceirizados, cobrindo desde o mapeamento de áreas de risco e planejamento até a operação e manutenção de sistemas de drenagem. A pesquisa também investiga a abrangência territorial, natureza jurídica e esfera administrativa do prestador, oferecendo uma classificação abrangente das organizações que atuam nesse setor essencial. O questionário foi desenhado para encerrar a coleta de dados caso nenhum serviço direto ou indireto seja identificado, garantindo a relevância das informações coletadas.
--------------------------------------------------------------------------------
2.1. O Bloco CZP e seu Propósito
O Bloco CZP visa identificar o responsável pelo cadastro, planejamento, projeto, instalação, ampliação, adequação, monitoramento, manutenção e operação da infraestrutura de drenagem em diversas áreas e dispositivos [1]. Também é importante identificar o responsável por manter o mapeamento atualizado das áreas de risco e fornecer informações ao sistema de alerta da Defesa Civil [1, 2, 5].
--------------------------------------------------------------------------------
2.2. Serviços de Drenagem e Manejo de Águas Pluviais Executados (Quesito 1)
Este quesito busca entender se o prestador executou, direta e/ou indiretamente (através de contratação de terceiros), algum serviço de drenagem e manejo de águas pluviais nas ruas (com ou sem pavimentação) da área rural e/ou urbana do município pesquisado em 2024 [1, 5].
Exemplos práticos de serviços incluem:
•
Controle de inundações [1, 5].
•
Manutenção em sarjetas, bocas de lobo, galerias, ou em infraestruturas verdes [1, 5].
•
Limpeza de rios, córregos, igarapés [1, 5].
•
Operação de grandes dispositivos de drenagem [1, 5].
•
Planejamento, obras, instalação, ampliação, fiscalização e supervisão [1, 5, 6].
O questionário deve ser encerrado se a resposta a este quesito for "Não" [6].
--------------------------------------------------------------------------------
2.3. Detalhamento dos Serviços Executados DIRETAMENTE (Quesito 2)
Este quesito foca nos serviços de drenagem e manejo de águas pluviais executados DIRETAMENTE pelo próprio prestador no município pesquisado em 2024, não considerando serviços terceirizados [1, 6]. O informante deve indicar os serviços que presta diretamente, mesmo que também terceirize alguns deles [7].
Os serviços detalhados são:
•
Atualização do mapeamento das áreas de risco de inundação, alagamentos, enxurradas, deslizamentos e movimentos de massa [1, 6]: Refere-se à revisão da identificação espacial das áreas suscetíveis a desastres.
◦
Inundação: transbordamento de um curso d'água [8].
◦
Alagamentos: acúmulo de águas por deficiência na drenagem [8].
◦
Enxurradas: grande quantidade de água que corre com violência [8].
◦
Deslizamentos e movimentos de massa: deslocamentos de solo, sedimentos, vegetação ou rocha pela encosta abaixo [8].
•
Planejamento (projetos) [1, 8]: Envolve a elaboração de projetos de drenagem, analisando variáveis como chuva, relevo, vegetação e arruamento, com o objetivo de definir a vazão de projeto e propor alternativas de concepção para o sistema de drenagem [7, 8].
•
Monitoramento pluviométrico e fluviométrico [1, 7]:
◦
Monitoramento pluviométrico: registra a quantidade de chuva que cai em uma determinada área e num determinado tempo [7].
◦
Monitoramento fluviométrico: registro contínuo de nível e vazão de água de um rio em uma bacia hidrográfica [9].
•
Monitoramento de qualidade da água pluvial [1, 10]: Realizado nos cursos d'água e/ou componentes do sistema de drenagem e manejo de águas pluviais, consiste na análise e acompanhamento da água da chuva que escoa sobre superfícies para identificar poluentes e avaliar impactos ambientais e de saúde pública [10].
•
Operação [1, 10]: Compreende as ações realizadas nos dispositivos de drenagem e manejo de águas pluviais para o funcionamento do sistema, como a abertura ou fechamento de comportas ou diques [10, 11].
•
Manutenção (recuperação de infraestrutura, limpeza, reparos etc.) [1, 11]: Inclui exemplos como limpeza de bocas de lobo, desobstrução de galerias de drenagem, desassoreamento de córregos e barragens, limpeza de filtros, inspeção de bombas e reforço da canalização [11].
•
Execução de obras / instalação / ampliação [1, 11]: Refere-se à realização de construções, implementação e expansão de sistemas de drenagem novos ou preexistentes, sejam infraestruturas verdes ou cinzas [1, 12].
•
Outro(s) [1, 13]: Para serviços que não se enquadram nas categorias anteriores, deve-se especificá-los [13].
•
Não executou nenhum serviço diretamente [1, 13]: Se esta opção for marcada, o informante deve continuar respondendo apenas até o bloco "Serviço(s) de Drenagem e Manejo de Águas Pluviais Realizado(s) por Terceiro(s)" e, então, encerrar o questionário. É crucial verificar se a empresa terceirizada foi cadastrada, caso contrário, ela deverá ser cadastrada [9, 13].
--------------------------------------------------------------------------------
2.4. Abrangência Territorial e Natureza Jurídica (Quesitos 3 e 4)
Abrangência Territorial (Quesito 3)
Este quesito questiona a área de atuação, direta e indireta, do prestador de serviço [14, 15]. As opções são:
•
Somente no município pesquisado [14, 15].
•
No município pesquisado e em outros municípios [14, 15].
Natureza Jurídica (Quesito 4)
A natureza jurídica refere-se à forma legal pela qual o prestador de serviço de drenagem e manejo de águas pluviais foi constituído [14, 15]. No Brasil, essa classificação é determinada pela Comissão Nacional de Classificação (CONCLA), vinculada ao IBGE [14, 15]. As opções incluem:
•
Administração direta do poder público: Conjunto de órgãos e serviços ligados diretamente ao Poder Executivo (administração centralizada, seja em nível federal, estadual ou municipal) e órgãos auxiliares (ministérios, secretarias ou equivalentes) [14, 16].
•
Autarquia: Parte da administração indireta, criada por lei específica para executar atividades típicas de Administração Pública, com personalidade jurídica de direito público, patrimônio e receita próprios, e capacidade de autoadministrar-se sob controle federal, estadual ou municipal com gestão financeira descentralizada [14, 16, 17].
•
Empresa pública: Entidade paraestatal, criada por lei, com personalidade jurídica de direito privado e participação única do poder público no seu capital e direção [14, 17].
•
Sociedade de economia mista: Entidade paraestatal, criada por lei, com capital público e privado, maioria pública nas ações com direito a voto, gestão e indicação de dirigentes exclusivamente pública [14, 17].
•
Consórcio público: Entidade pública resultante de acordo formal entre dois ou mais municípios (Consórcio Intermunicipal), ou entre dois ou mais estados, ou ainda entre município(s), estado(s) e a União (Consórcio Interfederativo) [14, 17, 18].
•
Empresa privada: Possui capital predominante ou integralmente privado, administrada exclusivamente por particulares [14, 18].
•
Fundação: Podem ser públicas (personalidade jurídica de direito privado, sem fins lucrativos, criada por autorização legislativa para desenvolver atividades que não exijam execução por órgãos públicos) ou privadas (criadas por iniciativa particular, regidas inteiramente pelo direito privado) [14, 18, 19].
•
Associação, cooperativa e afins: Entidade da sociedade civil organizada, sem fins lucrativos, à qual tenha sido delegada a administração dos serviços (como associações de moradores) [14, 19, 20].
•
Outra: Entidade cuja constituição jurídica não esteja discriminada anteriormente [14, 20].
--------------------------------------------------------------------------------
2.5. Esfera Administrativa do Prestador (Quesito 5)
Este quesito busca identificar a esfera (Federal, Estadual, Municipal, Privada, Interfederativa, Intermunicipal) com a qual o estabelecimento prestador de serviço possui contrato ou convênio [14, 20]. As opções são:
•
Federal [14, 20].
•
Estadual [14, 20].
•
Municipal [14, 20].
•
Privada [14, 20].
•
Interfederativa: reúne diferentes entes federativos das três esferas administrativas do país (União e/ou Estados e/ou Municípios) [14, 20].
•
Intermunicipal: reúne Municípios, contíguos ou não [14, 20].

```

5. IMPORTANTE:
Não resuma, não omita, não altere o texto original.
Apenas organize em cards didáticos, usando os tipos sugeridos.
O resultado deve ser um código JavaScript pronto para uso, sem comentários ou explicações extras. 