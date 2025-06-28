# Prompt para Gemini – Módulo 7 PNSB

**Instruções para Gemini:**

Você é um especialista em saneamento e didática digital. Receberá abaixo o conteúdo integral do Módulo 7 do curso PNSB (em formato markdown). Sua tarefa é:

1. **Transformar todo o conteúdo em um objeto JavaScript** no formato abaixo, para uso direto em um sistema web (não pode faltar nada do texto original, nem resumos!):

```js
window.modulos_data = window.modulos_data || {};
Object.assign(window.modulos_data, {
  "7": {
    "title": "Módulo 7: Monitoramento (Bloco MON) e Manutenção, Melhoria e Prevenção (Bloco MMP)",
    "audio": "MAP/Audios/Curso MAP - Mod 7.mp3",
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

4. **No final, o resultado deve ser um único objeto JavaScript pronto para ser colado no arquivo `public/data/module7.js` do sistema.**

---

## Conteúdo original do Módulo 7

```
Módulo 7: Monitoramento (Bloco MON) e Manutenção, Melhoria e Prevenção (Bloco MMP)
Este módulo aborda a importância do monitoramento da quantidade e qualidade da água no sistema de drenagem, bem como as práticas de manutenção, melhoria e prevenção de problemas para assegurar o funcionamento adequado da infraestrutura de drenagem e manejo de águas pluviais [1, 3, 4].

Resumo
Este documento detalha o Módulo 7 do curso de Capacitação para Técnicos do IBGE, focado na drenagem e manejo de águas pluviais. Ele se divide em dois blocos principais: Monitoramento (MON) e Manutenção, Melhoria e Prevenção (MMP). O bloco MON aborda a importância de registrar a altura, vazão e qualidade da água em sistemas de drenagem, visando identificar contaminantes e assegurar que as águas pluviais não comprometam corpos hídricos receptores. O bloco MMP concentra-se em manter o sistema de drenagem em funcionamento, aprimorá-lo e prevenir problemas como o assoreamento e o descarte inadequado de resíduos, detalhando ações como limpeza, destinação de resíduos, e medidas preventivas contra sólidos e sedimentos.

--------------------------------------------------------------------------------
7.1. Bloco MON - Monitoramento de Nível, de Vazão e de Qualidade da Água
O Bloco MON tem como propósito registrar a altura e a vazão da água, além de analisar as características físico-químicas e biológicas para identificar contaminantes no sistema de drenagem [1, 3]. O objetivo é identificar nos corpos d'água e demais estruturas de drenagem possíveis contaminantes, com vistas a assegurar que as águas pluviais, ao serem captadas e conduzidas, não comprometam a qualidade dos corpos hídricos receptores e o meio ambiente urbano [2, 5].
•
Monitoramento de Nível ou Vazão (Quesito 1) [1] Refere-se ao registro contínuo da altura da água em rios, reservatórios ou outros corpos d'água (nível) e da quantidade de água que passa por um ponto específico ao longo de um período (vazão), para medir o fluxo de água de um rio em uma bacia hidrográfica [2, 6].
◦
Responsabilidade pela realização (Quesito 1.1) [1, 2, 7]: * Diretamente pelo prestador ou por terceiros. * Quem realizou (se terceirizado) [2, 7]: * Órgão público [2, 7]. * Empresa privada [2, 7]. * Universidade [2, 7]. * Agência Reguladora [2, 7]. * Outro [2, 7].
◦
Locais do monitoramento (Quesito 2) [1, 2, 8, 9]: * Rios intermitentes: rios com água somente no período chuvoso [2, 8]. * Rios perenes: rios com água o ano todo [2, 8]. * Mar [2, 8]. * Estruturas de retenção, detenção e barragens para controle de cheias [2, 8]. * Sistema de drenagem construído (galerias, tubulação) [2, 8]. * Outro(s) [2, 9]. * Não sabe [2, 9].
◦
Métodos utilizados (Quesito 3) [1, 2, 9]: * Régua milimétrica [2, 9]. * Linígrafo [2, 9]. * Sensor ultrassônico [2, 9]. * ADCP (Perfilador Acústico por Efeito Doppler) [2, 9]. * Medição manual [2, 9]. * Curva-Chave (cota descarga, cota vazão): relação entre a altura da lâmina de água e a vazão de um curso d'água [2, 9, 10]. * Outro(s) [2, 9]. * Não sabe [2, 9].
◦
Frequência mínima (Quesito 4) [1, 2, 11]: * Minutos [2, 11]. * Horária [2, 11]. * Diária [2, 11]. * Semanal [2, 11]. * Mensal [2, 11]. * Não sabe [2, 11].
•
Monitoramento da Qualidade das Águas Pluviais (Quesito 5) [1] Refere-se ao processo de coleta, análise e avaliação das características físicas, químicas, biológicas e hidrológicas das águas das chuvas que escoam pelo sistema de drenagem urbana ou natural [2, 5, 11].
◦
Responsabilidade pela realização (Quesito 5.1) [1, 2, 12]: * Diretamente pelo prestador ou por terceiros. * Quem realizou (se terceirizado) [2, 13]: * Órgão público [2, 13]. * Empresa privada [2, 13]. * Universidade [2, 13]. * Agência Reguladora [2, 13]. * Outro [2, 13].
◦
Locais do monitoramento (Quesito 6) [1, 2, 13, 14]: * Rios intermitentes [2, 13]. * Rios perenes [2, 13]. * Mar [2, 13]. * Estruturas de retenção, detenção e barragens para controle de cheias [2, 13]. * Sistema de drenagem construído (galerias, tubulação) [2, 14]. * Outro(s) [2, 14]. * Não sabe [2, 14].
◦
Métodos utilizados (Quesito 7) [1, 2, 10, 14-16]: * Coleta manual e análise em laboratório: coleta amostras de água manualmente, usada em campanhas pontuais ou periódicas, como após eventos de chuva [2, 14]. * Coleta NÃO manual e análise em laboratório: usa equipamentos automáticos programados para coletar amostras sem a necessidade de um operador [2, 15]. * Sistema de monitoramento contínuo em tempo real (sensores, sondas etc.) [2, 10, 15]. * Curva-chave de parâmetros de qualidade: relação entre a altura da lâmina de água e a vazão de um curso d'água para avaliar, por exemplo, o fluxo de sedimentos [2, 10]. * Bioindicadores: análise de organismos presentes na água que indicam alterações ambientais [2, 10, 16]. * Outro(s) [2, 16]. * Não sabe [2, 16].
◦
Frequência (Quesito 8) [1, 2, 16, 17]: * Minutos [2, 16]. * Horária [2, 16]. * Diária [2, 16]. * Semanal [2, 16]. * Mensal [2, 16]. * Semestral [2, 17]. * Anual [2, 17]. * Na onda de cheia: aumento repentino do nível da água [2, 17]. * Outra [2, 17]. * Não sabe [2, 17].
◦
Parâmetros analisados (Quesito 9) [1, 2, 17, 18]: * Matéria orgânica (DQO/DBO) [2, 18]. * Oxigênio dissolvido [2, 18]. * Sólidos totais, suspensos e dissolvidos [2, 18]. * Nutrientes (Nitrogênio, Fósforo) [2, 18]. * Turbidez [2, 18]. * Condutividade [2, 18]. * Metais pesados [2, 18]. * Óleos e graxas [2, 18]. * Coliformes [2, 18]. * PH [2, 18]. * Outro(s) [2, 18]. * Não sabe [2, 18].
--------------------------------------------------------------------------------
7.2. Bloco MMP - Manutenção, Melhoria e Prevenção
Este bloco foca nas atividades para manter o sistema de drenagem em funcionamento, aprimorá-lo e prevenir problemas como o assoreamento e o descarte inadequado de resíduos [1, 4].
•
Limpeza e/ou Manutenção do Sistema de Drenagem (Quesito 1) [1, 2, 4]: Verifica se foram realizadas atividades como limpeza, desobstrução de rios, córregos, galerias, barragens e reparos em estruturas [2, 4].
◦
Atividades desenvolvidas (Quesito 1.1) [1, 2, 4]: * Microdrenagem [2, 4]: * Limpeza e desobstrução de dispositivos de captação [2, 4, 19]. * Varrição e limpeza de vias [2, 19]. * Reparo das estruturas de microdrenagem [2, 19]. * Outra(s) [2, 19]. * Macrodrenagem [2, 19]: * Limpeza e desobstrução de galerias [2, 19]. * Dragagem e limpeza de canais [2, 19, 20]. * Limpeza e desobstrução de estruturas de detenção, retenção e barragem para controle de cheias [2, 20]. * Reparo das estruturas de macrodrenagem [2, 20]. * Outra(s) [2, 20]. * Infraestruturas verdes [2, 20]: * Limpeza e manutenção das Infraestruturas verdes [2, 20]. * Reparo das Infraestruturas verdes [2, 20, 21]. * Cuidados com a vegetação [2, 21]. * Outra(s) [2, 21].
•
Frequência da limpeza e/ou manutenção (Quesito 2) [1, 2, 21, 22]:
◦
Semanal [2, 21].
◦
Quinzenal [2, 21].
◦
Mensal [2, 21].
◦
Semestral [2, 22].
◦
Anual [2, 22].
◦
Somente em caso de alerta meteorológico [2, 22]: quando a prefeitura intensifica a manutenção e limpeza em eventos de chuvas intensas.
◦
Somente durante o período chuvoso [2, 22]: manutenção realizada durante chuvas menos intensas, que NÃO acionaram o sistema de alerta.
◦
Não realiza [2, 23].
•
Destinação dos Resíduos (Quesito 3) [1, 2, 23]: Verifica para onde são enviados os resíduos gerados pela limpeza e manutenção do sistema de drenagem [2, 23].
◦
Lançamento em corpos d'água (oceanos, mares, lagos, rios, riachos, córregos, lagoas, poças, reservatórios e nascentes) [2, 23].
◦
Aterro sanitário [2, 23, 24].
◦
Áreas livres públicas ou particulares [2, 24].
◦
Vazadouro a céu aberto (lixão) [2, 24, 25].
◦
Processamento (triagem, reciclagem, incineração) [2, 25-27].
◦
Compostagem [2, 27].
◦
Outro(s) [2, 27].
◦
Não sabe [2, 27].
•
Problemas de Assoreamento (Quesito 4) [1, 2, 27]: Identifica a existência de acúmulo de terra, areia, argila, detritos que interferem no funcionamento do sistema de drenagem [2, 27]. O assoreamento pode causar alagamentos, enchentes, redução da qualidade da água e perda da vida aquática [2, 28].
◦
Locais afetados (Quesito 4.1) [1, 2, 29]: * Rios, arroios, ribeirões e córregos [2, 29]. * Estruturas de retenção, detenção e barragem para controle de cheias [2, 29]. * Sistema de drenagem construído (galerias, tubulação) [2, 29]. * Outro(s) [2, 29]. * Não sabe [2, 29].
•
Medidas Preventivas para Resíduos Sólidos (Quesito 5) [1, 2, 30]: Verifica se o prestador adota ações para evitar que resíduos sólidos atinjam os sistemas de drenagem [2, 30].
◦
Tipos de medidas preventivas (Quesito 5.1) [1, 2, 30-33]: * Caixa de areia: dispositivo que recolhe detritos e sólidos [2, 30, 31]. * Gradeamento: instalação de grades ou mantas para reter sedimentos e resíduos [2, 31]. * Ecobarreiras: estruturas flutuantes que bloqueiam o escoamento de resíduos sólidos [2, 31, 32]. * Varrição preventiva [2, 32]. * Orientações para acondicionamento adequado dos resíduos sólidos (evitar descarte nas calçadas) [2, 32, 33]. * Outra(s) [2, 33].
•
Controle de Geração de Sedimentos em Obras (Quesito 6) [1, 2, 34]: Avalia a atuação do prestador no controle de boas práticas em obras para evitar o fluxo de sedimentos que possam entupir bocas de lobo e galerias [2, 34].
◦
Ações para controle (Quesito 6.1) [1, 2, 34-42]: * Grades e caixas de sedimentação nas redes pluviais [2, 34]. * Proteção nos acessos das obras [2, 34, 35]. * Estabilização com camada de britas [2, 35, 36]. * Sistema lava-rodas [2, 36, 37]. * Estabilização de solos expostos em superfícies [2, 37, 38]. * Controle da geração de poeira nas atividades construtivas e vias de circulação de veículos [2, 38, 39]. * Proteção do perímetro do canteiro de obras [2, 39]. * Cercas de membrana de geotêxtil [2, 39, 40]. * Assentamento de fiadas de bloco de concreto ao longo do perímetro [2, 40, 41]. * Leiras: monte de terra ou material que funciona como barreira [2, 41]. * Diques de contenção com sacarias [2, 41, 42]. * Outra(s) [2, 42].
•
Ampliação e/ou Melhoria do Sistema de Drenagem (Quesito 7 - últimos 4 anos) [1, 2, 42]: Refere-se a obras realizadas ou em andamento no período entre 2021 e 2024 [2, 43].
◦
Tipos de ampliação e/ou melhoria (Quesito 7.1) [1, 2, 43-45]: * Canalização de cursos d'água naturais: modificação do leito do rio, podendo ter consequências negativas como aumento da velocidade da água [2, 44]. * Expansão ou requalificação do sistema de microdrenagem em bairros antigos [2, 44]. * Expansão ou requalificação do sistema de microdrenagem em bairros novos / loteamentos [2, 43]. * Implantação de galerias pluviais visando aumentar a capacidade da rede existente [2, 43]. * Implantação de estruturas de detenção/retenção para controle / amortecimento de cheias ("piscinão") [2, 43]. * Renaturalização / Restauração ou Recuperação / Revitalização de cursos d'água: restaurar funções ecológicas e hidrológicas, tornando rios "vivos" [2, 45]. * Tamponamento de cursos d'água naturais: canalização do rio que o "enterra" em galerias ou tubulações [2, 45]. * Implantação de estruturas de contenção de enchentes [2, 45]. * Outro(s) [2, 45].

7. IMPORTANTE:
Não resuma, não omita, não altere o texto original.
Apenas organize em cards didáticos, usando os tipos sugeridos.
O resultado deve ser um código JavaScript pronto para uso, sem comentários ou explicações extras. 