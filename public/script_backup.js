// Conteúdo do Módulo 1 em cards (emojis apenas nos títulos e cards especiais)
const cards = [
  {
    type: 'default',
    title: '📋 Resumo',
    content: `O Módulo 1 da Pesquisa Nacional de Saneamento Básico (PNSB) do IBGE foca na Drenagem e Manejo de Águas Pluviais (MAP), um componente essencial do saneamento básico brasileiro. Ele detalha a importância da PNSB como um levantamento fundamental para planejar e aprimorar a gestão municipal dos serviços de saneamento, coletando informações de prestadores em todos os 5.570 municípios brasileiros. O módulo também aborda conceitos cruciais como a distinção entre microdrenagem e macrodrenagem, além da drenagem urbana e rural, destacando a necessidade de reduzir impactos de chuvas e cheias e a função das infraestruturas verdes. O objetivo geral é fornecer um cenário atualizado para análises das condições ambientais e sua implicação na saúde e qualidade de vida.`
  },
  {
    type: 'default',
    title: '1.1 Apresentação da Pesquisa Nacional de Saneamento Básico (PNSB) 🏛️',
    content: `A Pesquisa Nacional de Saneamento Básico (PNSB) é um levantamento fundamental realizado pelo IBGE. O saneamento básico é definido como o conjunto de serviços, infraestruturas e instalações operacionais relacionados ao abastecimento de água, esgotamento sanitário, limpeza urbana e manejo de resíduos sólidos, além da drenagem e manejo de águas pluviais. Esses serviços são essenciais para a saúde humana e a preservação ambiental, contribuindo diretamente para o bem-estar social.<br><br>O IBGE realiza levantamentos nacionais sobre a oferta de saneamento básico no Brasil desde 1974. A partir de 2015, a PNSB foi incluída no orçamento do IBGE para se tornar uma pesquisa regular, com coleta de informações estruturada por módulos. A participação na PNSB é fundamental para suprir a demanda por informações municipais detalhadas sobre os serviços de limpeza urbana, manejo de resíduos sólidos e drenagem e manejo de águas pluviais. Esses dados são cruciais para o planejamento e aprimoramento da gestão do saneamento e para fortalecer a capacidade dos governos municipais de atender à população.<br><br>A PNSB 2024 visa obter informações de entidades públicas e privadas que atuam na oferta de serviços de Limpeza Urbana, Manejo de Resíduos Sólidos e Drenagem e Manejo de Águas Pluviais, levantando aspectos legais, serviços prestados, educação ambiental, entre outros. O IBGE busca formular e disponibilizar indicadores que apresentem um cenário atualizado sobre esses serviços em todos os municípios brasileiros, permitindo análises das condições ambientais e suas implicações diretas na saúde e qualidade de vida da população.<br><br>A pesquisa abrange prestadores de serviço com registro no Cadastro Nacional de Pessoas Jurídicas (CNPJ). Para o serviço de drenagem e manejo de águas pluviais, o prestador atua em áreas rurais ou urbanas, desempenhando pelo menos uma das seguintes atividades: mapeamento atualizado de áreas de risco, cadastro, planejamento, projeto, instalação, ampliação, adequação, monitoramento, manutenção e operação da infraestrutura de drenagem e manejo de águas pluviais. Essas atividades podem ocorrer em ruas pavimentadas ou não, em corpos d'água (rios, córregos, igarapés) ou em dispositivos (guias, sarjetas, bueiros, bocas de lobo, galerias, estruturas de amortecimento de águas pluviais e infraestruturas verdes).<br><br>O período de referência da pesquisa é 31 de dezembro de 2024, e todas as informações devem se referir ao ano de 2024, exceto aquelas com datas específicas no quesito. A coleta das informações será realizada através do preenchimento de questionários em um sistema online desenvolvido pelo IBGE. Uma alternativa de questionário em PDF editável também será disponibilizada. É indispensável que uma cópia do manual seja distribuída à área e à pessoa envolvida com o fornecimento dos dados para o correto preenchimento dos blocos.`
  },
  {
    type: 'dica',
    title: '💡 Dica',
    content: 'Sempre consulte o manual antes de preencher o questionário. Os quesitos são agrupados em blocos de acordo com o assunto. Expressões e conceitos que exigem esclarecimento estão definidos no manual ou nos questionários.'
  },
  {
    type: 'default',
    title: '1.2 Conceitos Essenciais de Drenagem e Manejo de Águas Pluviais (MAP) 🌧️',
    content: `<b>Definição do Serviço:</b> O serviço de Drenagem e Manejo de Águas Pluviais (MAP) é o escoamento e infiltração da água em áreas urbanas e rurais, com controle dos impactos a jusante na bacia.<br><br><b>Objetivos do Serviço:</b><ul><li>✔️ Redução dos danos à sociedade e ao ambiente por chuvas e cheias</li><li>✔️ Prevenção de alagamentos, inundações e enxurradas</li><li>✔️ Prevenção de deslizamentos, corridas de massa e erosões</li></ul><b>Terminologia Chave:</b><ul><li><b>Jusante:</b> Rio abaixo, montanha abaixo, encosta abaixo</li><li><b>Montante:</b> Rio acima, montanha acima, encosta acima</li></ul>`
  },
  {
    type: 'default',
    title: '1.3 Componentes do Serviço de MAP 🛠️',
    content: `O serviço de drenagem capta, conduz e retém a água das chuvas através de diversos componentes:<ul><li><b>Pavimentos das ruas, guias e sarjetas, bocas de lobo:</b> Elementos da Microdrenagem, responsáveis pelo disciplinamento das águas pluviais, redução de riscos de alagamentos e enxurradas, proteção de taludes/encostas e redução da poluição hídrica.</li><li><b>Canais naturais:</b> igarapés, córregos, rios.</li><li><b>Canais artificiais:</b> rios canalizados ou tamponados.</li><li><b>Galerias pluviais de grandes dimensões</b></li><li><b>Estruturas de amortecimento de águas da chuva e grandes dispositivos de drenagem</b></li><li><b>Infraestruturas verdes:</b> Soluções Baseadas na Natureza (SBN) ou Drenagem Sustentável, como jardins de chuva, telhados verdes, parques urbanos e alagados construídos.</li></ul>`
  },
  {
    type: 'default',
    title: '1.4 A Importância Crítica do Manejo de Águas Pluviais ⚠️',
    content: `<ul><li>✔️ <b>Prevenção de Enchentes e Alagamentos:</b> Evita o acúmulo de água e os consequentes prejuízos.</li><li>✔️ <b>Conservação do Solo e Prevenção da Erosão:</b> Ajuda a controlar a velocidade da água em áreas rurais ou com pouca vegetação, minimizando a erosão.</li><li>✔️ <b>Proteção da Infraestrutura Urbana:</b> Contribui para o aumento da durabilidade de calçadas, ruas, pontes e edifícios.</li><li>✔️ <b>Recarga dos Lençóis Freáticos:</b> Técnicas de infiltração, como jardins de chuva e bacias de retenção, alimentam os aquíferos subterrâneos.</li><li>✔️ <b>Redução da Poluição Hídrica:</b> Um manejo correto, que inclui o uso de filtros e bacias de contenção, diminui a contaminação de rios e lagos por resíduos e produtos químicos carregados pela água da chuva.</li></ul>`
  },
  {
    type: 'default',
    title: '1.5 Distinção entre Drenagem Urbana 🏙️ e Rural 🚜, e Áreas de Expansão',
    content: `<ul><li><b>Drenagem Urbana:</b> Refere-se ao sistema implementado nas vias urbanas. Seu principal objetivo é o aumento da velocidade de escoamento da água da chuva, visando a menor ocorrência de inundações e alagamentos em áreas edificadas.</li><li><b>Drenagem Rural:</b> Diz respeito ao sistema aplicado nas vias rurais. Diferentemente da urbana, seu propósito é a diminuição da velocidade da água, o aumento da infiltração no solo e, consequentemente, a menor erosão do terreno.</li><li><b>Áreas de Expansão Urbana e Novos Loteamentos:</b> Essas áreas são grandes indutores de problemas como erosão, perda de solo e assoreamento se não contarem com um sistema de drenagem adequado desde o planejamento e execução.</li></ul>`
  },
  {
    type: 'resumo',
    title: '📊 Resumo Visual',
    content: `<table><tr><th>Termo</th><th>Definição Rápida</th></tr><tr><td>Microdrenagem</td><td>Sarjetas, bocas de lobo, pavimentos</td></tr><tr><td>Macrodrenagem</td><td>Rios, córregos, galerias grandes</td></tr><tr><td>Infraestrutura Verde</td><td>Jardins de chuva, telhados verdes, parques urbanos</td></tr></table><br><b>Diferenças:</b><br><table><tr><th>Conceito A</th><th>Conceito B</th><th>Diferença Principal</th></tr><tr><td>Drenagem Urbana</td><td>Drenagem Rural</td><td>Velocidade vs Infiltração</td></tr><tr><td>Microdrenagem</td><td>Macrodrenagem</td><td>Escala local vs Escala regional</td></tr></table>`
  },
  {
    type: 'atencao',
    title: '⚠️ Atenção',
    content: 'Não deixe campos obrigatórios em branco! O campo de observações deve ser usado para complementar informações, sempre indicando o nome do bloco e o número do quesito.'
  },
  {
    type: 'exemplo',
    title: '📝 Exemplo',
    content: 'Se a sua cidade possui apenas bocas de lobo, marque microdrenagem.'
  },
  {
    type: 'default',
    title: '🗨️ Dúvidas Frequentes e Como Ajudar',
    content: `<b>Dúvida Comum:</b> "Não sei se minha empresa presta serviço de drenagem."<br><b>Como Ajudar:</b> Explique que inclui limpeza de sarjetas, manutenção de bocas de lobo, galerias, etc.<br><br><b>Dúvida Comum:</b> "O que é microdrenagem vs macrodrenagem?"<br><b>Como Ajudar:</b> Use exemplos práticos: sarjetas (micro) vs rios (macro).<br><br><b>Dúvida Comum:</b> "Como preencher se terceirizamos tudo?"<br><b>Como Ajudar:</b> Oriente sobre o bloco SRT e cadastro da empresa terceirizada.`
  }
];

// Quiz do Módulo 1
const quiz1 = {
  title: '📝 Quiz do Módulo 1',
  questions: [
    {
      question: 'Qual é o objetivo principal da Pesquisa Nacional de Saneamento Básico (PNSB)?',
      options: [
        'Planejar e aprimorar a gestão dos serviços de saneamento no Brasil',
        'Construir novas estações de tratamento de água',
        'Fiscalizar empresas privadas de saneamento',
        'Reduzir o consumo de água nas cidades'
      ],
      answer: 0
    },
    {
      question: 'Segundo a Lei 11.445/2007, qual destes NÃO é um componente do saneamento básico?',
      options: [
        'Abastecimento de água',
        'Drenagem e manejo de águas pluviais',
        'Energia elétrica',
        'Esgotamento sanitário'
      ],
      answer: 2
    },
    {
      question: 'O que caracteriza a microdrenagem?',
      options: [
        'Dispositivos locais como sarjetas, bocas de lobo e pavimentos',
        'Grandes rios e barragens',
        'Sistemas de esgoto sanitário',
        'Parques urbanos'
      ],
      answer: 0
    },
    {
      question: 'Qual é a principal função da macrodrenagem?',
      options: [
        'Escoamento final das águas pluviais por meio de grandes dispositivos',
        'Filtrar resíduos sólidos',
        'Bombear água para reservatórios',
        'Medir a qualidade da água'
      ],
      answer: 0
    },
    {
      question: 'O que são infraestruturas verdes no contexto do MAP?',
      options: [
        'Soluções baseadas na natureza, como jardins de chuva e telhados verdes',
        'Apenas galerias de concreto',
        'Sistemas de esgoto',
        'Reservatórios subterrâneos de água potável'
      ],
      answer: 0
    },
    {
      question: 'Qual é o objetivo geral do serviço de Drenagem e Manejo de Águas Pluviais (MAP)?',
      options: [
        'Reduzir impactos causados por alagamentos, inundações, enxurradas e erosões',
        'Aumentar a velocidade da água em áreas rurais',
        'Promover apenas a limpeza urbana',
        'Construir apenas galerias pluviais'
      ],
      answer: 0
    },
    {
      question: 'O que significa o termo "jusante"?',
      options: [
        'Rio abaixo, montanha abaixo, encosta abaixo',
        'Rio acima, montanha acima, encosta acima',
        'Sentido contrário ao fluxo da água',
        'Área de infiltração do solo'
      ],
      answer: 0
    },
    {
      question: 'Qual das opções é um objetivo do serviço de MAP?',
      options: [
        'Prevenção de alagamentos e inundações',
        'Aumento da erosão',
        'Redução da vegetação urbana',
        'Aumento da poluição hídrica'
      ],
      answer: 0
    },
    {
      question: 'A coleta de dados da PNSB é realizada principalmente por:',
      options: [
        'Preenchimento de questionário online',
        'Entrevistas presenciais',
        'Telefonemas',
        'Cartas enviadas pelo correio'
      ],
      answer: 0
    },
    {
      question: 'O que deve ser feito se houver terceirização dos serviços de drenagem?',
      options: [
        'Cadastrar a empresa terceirizada no bloco SRT',
        'Ignorar o bloco SRT',
        'Preencher apenas dados do município',
        'Não responder ao questionário'
      ],
      answer: 0
    },
    {
      question: 'Qual é a principal diferença entre drenagem urbana e rural?',
      options: [
        'Urbana visa aumentar a velocidade do escoamento; rural, aumentar a infiltração',
        'Rural utiliza apenas canais naturais',
        'Urbana não utiliza infraestruturas verdes',
        'Rural não sofre com erosão'
      ],
      answer: 0
    },
    {
      question: 'O que pode ocorrer em áreas de expansão urbana sem drenagem adequada?',
      options: [
        'Erosão, perda de solo e assoreamento',
        'Aumento da infiltração',
        'Redução de enchentes',
        'Melhoria da qualidade do ar'
      ],
      answer: 0
    },
    {
      question: 'Qual é a importância da conservação do solo no contexto do MAP?',
      options: [
        'Minimizar a erosão e proteger encostas',
        'Aumentar a velocidade da água',
        'Reduzir a infiltração',
        'Promover a poluição hídrica'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza um canal artificial no contexto da drenagem?',
      options: [
        'Rios canalizados ou tamponados',
        'Apenas rios naturais',
        'Poços de infiltração',
        'Bueiros e bocas de lobo'
      ],
      answer: 0
    },
    {
      question: 'Por que é importante não deixar quesitos em branco no questionário da PNSB?',
      options: [
        'Para garantir a completude e a qualidade das informações coletadas',
        'Para facilitar o trabalho do IBGE',
        'Para evitar multas',
        'Para aumentar o número de municípios pesquisados'
      ],
      answer: 0
    }
  ]
};

function renderQuiz(quiz) {
  const container = document.getElementById('cards-container');
  const div = document.createElement('div');
  div.className = 'card card-quiz';
  const h2 = document.createElement('div');
  h2.className = 'card-title';
  h2.innerHTML = quiz.title;
  div.appendChild(h2);

  let score = 0;
  let current = 0;
  let finished = false;

  const questionDiv = document.createElement('div');
  questionDiv.className = 'quiz-question';
  div.appendChild(questionDiv);

  const optionsDiv = document.createElement('div');
  optionsDiv.className = 'quiz-options';
  div.appendChild(optionsDiv);

  const feedbackDiv = document.createElement('div');
  feedbackDiv.className = 'quiz-feedback';
  div.appendChild(feedbackDiv);

  const nextBtn = document.createElement('button');
  nextBtn.className = 'quiz-next-btn';
  nextBtn.innerText = 'Próxima';
  nextBtn.style.display = 'none';
  div.appendChild(nextBtn);

  function showQuestion() {
    questionDiv.innerHTML = `<b>${current + 1}. ${quiz.questions[current].question}</b>`;
    optionsDiv.innerHTML = '';
    feedbackDiv.innerHTML = '';
    nextBtn.style.display = 'none';
    quiz.questions[current].options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option-btn';
      btn.innerText = opt;
      btn.style.display = 'block';
      btn.style.width = '100%';
      btn.style.margin = '8px 0';
      btn.onclick = () => selectOption(idx);
      optionsDiv.appendChild(btn);
    });
  }

  function selectOption(idx) {
    if (finished) return;
    const correct = quiz.questions[current].answer;
    if (idx === correct) {
      feedbackDiv.innerHTML = '<span style="color:green;font-weight:bold;">Correto!</span>';
      score++;
    } else {
      feedbackDiv.innerHTML = `<span style="color:red;font-weight:bold;">Incorreto.</span> Resposta correta: <b>${quiz.questions[current].options[correct]}</b>`;
    }
    Array.from(optionsDiv.children).forEach(btn => btn.disabled = true);
    nextBtn.style.display = 'inline-block';
    if (current === quiz.questions.length - 1) {
      nextBtn.innerText = 'Finalizar';
    } else {
      nextBtn.innerText = 'Próxima';
    }
  }

  nextBtn.onclick = () => {
    if (current < quiz.questions.length - 1) {
      current++;
      showQuestion();
    } else {
      finished = true;
      showResult();
    }
  };

  function showResult() {
    const correct = answers.filter((answer, idx) => answer === quiz.questions[idx].answer).length;
    const percentage = ((correct / quiz.questions.length) * 100).toFixed(1);
    
    // Salvar resultado no sistema de progresso
    sistemaProgresso.salvarResultadoQuiz(currentModule, percentage, correct, quiz.questions.length);
    
    container.innerHTML = `
      <div class="quiz-result">
        <h2>🎯 Resultado do Quiz</h2>
        <div class="result-stats">
          <div class="stat-item correct">
            <span class="stat-number">${correct}</span>
            <span class="stat-label">Acertos</span>
          </div>
          <div class="stat-item incorrect">
            <span class="stat-number">${quiz.questions.length - correct}</span>
            <span class="stat-label">Erros</span>
          </div>
          <div class="stat-item percentage">
            <span class="stat-number">${percentage}%</span>
            <span class="stat-label">Aproveitamento</span>
          </div>
        </div>
        
        <div class="result-feedback">
          ${percentage >= 70 ? 
            '<p class="success">🎉 Parabéns! Você demonstrou bom conhecimento do módulo!</p>' :
            '<p class="warning">📚 Recomendamos revisar o conteúdo antes de prosseguir.</p>'
          }
        </div>
        
        <div class="result-actions">
          <button onclick="renderCards()" class="btn-voltar">← Voltar ao Módulo</button>
          <button onclick="renderQuiz(quiz)" class="btn-refazer">🔄 Refazer Quiz</button>
        </div>
      </div>
    `;
  }

  showQuestion();
  container.appendChild(div);
}

// Variável para controlar o módulo atual
let currentModule = 1;

// Função para navegar entre módulos (deve ser global)
window.changeModule = function(moduleNumber) {
  if (moduleNumber >= 1 && moduleNumber <= 8) {
    currentModule = moduleNumber;
    renderCards();
    
    // Atualizar botões ativos
    const nav = document.getElementById('module-nav');
    if (nav) {
      const buttons = nav.querySelectorAll('.module-btn');
      buttons.forEach((btn, index) => {
        if (index + 1 === moduleNumber) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }
  }
};
function getCardIcon(type) {
  const icons = {
    'dica': '💡',
    'atencao': '⚠️',
    'exemplo': '📝',
    'resumo': '📊',
    'duvidas': '❓',
    'content': '📚',
    'default': '📚'
  };
  return icons[type] || '📚';
}
// Render cards e quiz
function renderCards() {
  // Marcar módulo como acessado
  sistemaProgresso.marcarModuloAcessado(currentModule);
  
  const container = document.getElementById('cards-container');
  const moduleData = modules[currentModule];
  
  // Verificar se o módulo atual pode ser acessado
  const progresso = sistemaProgresso.obterProgresso();
  const modulosConcluidos = Object.values(progresso.modulos).filter(m => m.concluido).length;
  const proximoModuloDisponivel = modulosConcluidos + 1;
  
  // Se o módulo atual não pode ser acessado, redirecionar para o próximo disponível
  if (currentModule > proximoModuloDisponivel) {
    currentModule = proximoModuloDisponivel;
    // Recursão para renderizar o módulo correto
    renderCards();
    return;
  }
  
  // Atualizar título
  document.querySelector('.main-title').textContent = moduleData.title;
  
  // Renderizar cards
  let cardsHTML = '';
  
  moduleData.cards.forEach((card, index) => {
    const cardClass = card.type || 'content';
    const icon = getCardIcon(card.type);
    
    cardsHTML += `
      <div class="card ${cardClass}-card" data-index="${index}">
        <div class="card-header">
          <span class="card-icon">${icon}</span>
          <h3 class="card-title">${card.title}</h3>
        </div>
        <div class="card-content">
          ${card.content}
        </div>
      </div>
    `;
  });
  
  // Adicionar barra de progresso
  const progressoGeral = sistemaProgresso.calcularProgressoGeral();
  const progressoHTML = `
    <div class="progresso-container">
      <div class="progresso-header">
        <h3>📊 Seu Progresso no Curso</h3>
        <button onclick="mostrarProgressoDetalhado()" class="btn-progresso-detalhado">📈 Ver Detalhes</button>
      </div>
      <div class="progresso-barras">
        <div class="progresso-item">
          <span class="progresso-label">Módulos Concluídos</span>
          <div class="progresso-bar">
            <div class="progresso-fill" style="width: ${progressoGeral.percentualModulos}%"></div>
          </div>
          <span class="progresso-texto">${progressoGeral.modulosConcluidos}/8 (${progressoGeral.percentualModulos}%)</span>
        </div>
        <div class="progresso-item">
          <span class="progresso-label">Quizzes Realizados</span>
          <div class="progresso-bar">
            <div class="progresso-fill" style="width: ${progressoGeral.percentualQuizzes}%"></div>
          </div>
          <span class="progresso-texto">${progressoGeral.quizzesConcluidos}/8 (${progressoGeral.percentualQuizzes}%)</span>
        </div>
        <div class="progresso-item">
          <span class="progresso-label">Avaliação Final</span>
          <div class="progresso-bar">
            <div class="progresso-fill ${progressoGeral.avaliacaoFinalConcluida ? 'completo' : ''}" style="width: ${progressoGeral.avaliacaoFinalConcluida ? 100 : 0}%"></div>
          </div>
          <span class="progresso-texto">${progressoGeral.avaliacaoFinalConcluida ? 'Concluída' : 'Pendente'}</span>
        </div>
      </div>
    </div>
  `;
  
  container.innerHTML = progressoHTML + cardsHTML;
  
  // Adicionar navegação entre módulos com controle de acesso
  const navigationHTML = `
    <div class="module-navigation">
      <button onclick="previousModule()" class="nav-btn prev-btn" ${currentModule === 1 ? 'disabled' : ''}>
        ← Módulo ${currentModule - 1}
      </button>
      
      <div class="module-indicators">
        ${Array.from({length: 8}, (_, i) => {
          const moduloNum = i + 1;
          const progressoModulo = progresso.modulos[moduloNum];
          const status = progressoModulo.concluido ? 'concluido' : 
                        progressoModulo.ultimoAcesso ? 'iniciado' : 'pendente';
          const podeAcessar = moduloNum <= proximoModuloDisponivel;
          const isActive = moduloNum === currentModule;
          
          return `
            <button onclick="goToModule(${moduloNum})" 
                    class="module-indicator ${status} ${isActive ? 'active' : ''} ${!podeAcessar ? 'bloqueado' : ''}"
                    title="Módulo ${moduloNum} ${!podeAcessar ? '(Bloqueado)' : ''}"
                    ${!podeAcessar ? 'disabled' : ''}>
              ${moduloNum}
            </button>
          `;
        }).join('')}
      </div>
      
      <button onclick="nextModule()" class="nav-btn next-btn" ${currentModule === 8 || currentModule >= proximoModuloDisponivel ? 'disabled' : ''}>
        Módulo ${currentModule + 1} →
      </button>
    </div>
  `;
  
  container.innerHTML += navigationHTML;
  
  // Adicionar botões de ação com controle de acesso
  const moduloConcluido = progresso.modulos[currentModule].concluido;
  const quizConcluido = progresso.modulos[currentModule].quizConcluido;
  
  let actionButtonsHTML = `
    <div class="action-buttons">
  `;
  
  // Botão de quiz - sempre disponível se o módulo não foi concluído
  if (!moduloConcluido) {
    actionButtonsHTML += `<button onclick="startQuiz()" class="quiz-btn">📝 Fazer Quiz do Módulo ${currentModule}</button>`;
  } else if (!quizConcluido) {
    actionButtonsHTML += `<button onclick="startQuiz()" class="quiz-btn">📝 Refazer Quiz do Módulo ${currentModule}</button>`;
  } else {
    actionButtonsHTML += `<button onclick="startQuiz()" class="quiz-btn quiz-concluido">✅ Quiz Concluído (${progresso.modulos[currentModule].quizNota}%)</button>`;
  }
  
  // Botão de dúvidas - sempre disponível
  actionButtonsHTML += `<button onclick="showDuvidas()" class="duvidas-btn">❓ Dúvidas Frequentes</button>`;
  
  // Botão de avaliação final - apenas no módulo 8 e se todos os módulos anteriores foram concluídos
  if (currentModule === 8 && progressoGeral.modulosConcluidos === 8) {
    actionButtonsHTML += `<button onclick="startAvaliacaoFinal()" class="avaliacao-btn">🏆 Avaliação Final</button>`;
  } else if (currentModule === 8) {
    actionButtonsHTML += `<button class="avaliacao-btn bloqueado" disabled>🏆 Avaliação Final (Complete todos os módulos)</button>`;
  }
  
  actionButtonsHTML += `</div>`;
  
  container.innerHTML += actionButtonsHTML;
  
  // Adicionar mensagem de orientação se necessário
  if (currentModule > proximoModuloDisponivel) {
    const orientacaoHTML = `
      <div class="orientacao-container">
        <div class="orientacao-mensagem">
          <h3>🔒 Módulo Bloqueado</h3>
          <p>Para acessar o Módulo ${currentModule}, você precisa concluir o Módulo ${currentModule - 1} primeiro.</p>
          <button onclick="goToModule(${proximoModuloDisponivel})" class="btn-ir-proximo">📚 Ir para o Próximo Módulo Disponível</button>
        </div>
      </div>
    `;
    container.innerHTML += orientacaoHTML;
  }
}

// Adicionar navegação entre módulos
document.addEventListener('DOMContentLoaded', function() {
  renderCards();
  
  // Adicionar botões de navegação se não existirem
  if (!document.getElementById('module-nav')) {
    const nav = document.createElement('div');
    nav.id = 'module-nav';
    nav.className = 'module-navigation';
    nav.innerHTML = `
      <button onclick="changeModule(1)" class="module-btn ${currentModule === 1 ? 'active' : ''}">Módulo 1</button>
      <button onclick="changeModule(2)" class="module-btn ${currentModule === 2 ? 'active' : ''}">Módulo 2</button>
      <button onclick="changeModule(3)" class="module-btn ${currentModule === 3 ? 'active' : ''}">Módulo 3</button>
      <button onclick="changeModule(4)" class="module-btn ${currentModule === 4 ? 'active' : ''}">Módulo 4</button>
      <button onclick="changeModule(5)" class="module-btn ${currentModule === 5 ? 'active' : ''}">Módulo 5</button>
      <button onclick="changeModule(6)" class="module-btn ${currentModule === 6 ? 'active' : ''}">Módulo 6</button>
      <button onclick="changeModule(7)" class="module-btn ${currentModule === 7 ? 'active' : ''}">Módulo 7</button>
      <button onclick="changeModule(8)" class="module-btn ${currentModule === 8 ? 'active' : ''}">Módulo 8</button>
      <button onclick="startAvaliacaoFinal()" class="module-btn avaliacao-btn">🏆 Avaliação Final</button>
    `;
    const mainContent = document.querySelector('.main-content');
    const cardsContainer = document.getElementById('cards-container');
    if (mainContent && cardsContainer) {
      mainContent.insertBefore(nav, cardsContainer);
    }
  }
});

// Quiz do Módulo 2
const quiz2 = {
  title: '📝 Quiz do Módulo 2',
  questions: [
    {
      question: 'Qual é o objetivo principal do Bloco CZP na PNSB?',
      options: [
        'Identificar o responsável pela infraestrutura e serviços de drenagem e manejo de águas pluviais',
        'Coletar dados sobre qualidade da água',
        'Fiscalizar empresas privadas',
        'Medir a quantidade de chuva'
      ],
      answer: 0
    },
    {
      question: 'O que acontece se a resposta ao quesito sobre serviços executados for "Não"?',
      options: [
        'O questionário deve ser encerrado',
        'Deve-se continuar respondendo normalmente',
        'Deve-se pular para o próximo módulo',
        'Deve-se aguardar orientação do supervisor'
      ],
      answer: 0
    },
    {
      question: 'Qual destes é um exemplo de serviço de drenagem e manejo de águas pluviais?',
      options: [
        'Manutenção em sarjetas, bocas de lobo e galerias',
        'Tratamento de esgoto sanitário',
        'Distribuição de água potável',
        'Coleta de lixo domiciliar'
      ],
      answer: 0
    },
    {
      question: 'O que significa "monitoramento pluviométrico"?',
      options: [
        'Registro da quantidade de chuva que cai em uma determinada área e num determinado tempo',
        'Medição da qualidade da água dos rios',
        'Controle do nível dos reservatórios',
        'Análise da velocidade do vento'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza uma "inundação" no contexto do MAP?',
      options: [
        'Transbordamento de um curso d\'água',
        'Acúmulo de águas por deficiência na drenagem',
        'Grande quantidade de água que corre com violência',
        'Deslocamentos de solo pela encosta'
      ],
      answer: 0
    },
    {
      question: 'Qual é a diferença entre "alagamentos" e "enxurradas"?',
      options: [
        'Alagamentos são acúmulo de águas por deficiência na drenagem; enxurradas são grande quantidade de água que corre com violência',
        'Alagamentos são sempre causados por rios; enxurradas são sempre causadas por chuva',
        'Alagamentos ocorrem apenas em áreas urbanas; enxurradas apenas em áreas rurais',
        'Não há diferença, são sinônimos'
      ],
      answer: 0
    },
    {
      question: 'O que inclui a "manutenção" no contexto do MAP?',
      options: [
        'Limpeza de bocas de lobo, desobstrução de galerias, desassoreamento de córregos',
        'Apenas construção de novas infraestruturas',
        'Apenas monitoramento de qualidade da água',
        'Apenas planejamento de projetos'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza uma "autarquia" na natureza jurídica?',
      options: [
        'Parte da administração indireta, criada por lei específica, com personalidade jurídica de direito público',
        'Empresa com capital público e privado',
        'Entidade privada sem fins lucrativos',
        'Órgão diretamente ligado ao Poder Executivo'
      ],
      answer: 0
    },
    {
      question: 'O que é um "consórcio público"?',
      options: [
        'Entidade pública resultante de acordo formal entre dois ou mais municípios, estados ou entre município(s), estado(s) e a União',
        'Empresa privada que presta serviços públicos',
        'Fundação criada por iniciativa particular',
        'Associação de moradores'
      ],
      answer: 0
    },
    {
      question: 'O que significa "esfera interfederativa"?',
      options: [
        'Reúne diferentes entes federativos das três esferas administrativas do país (União e/ou Estados e/ou Municípios)',
        'Apenas municípios contíguos',
        'Apenas estados da mesma região',
        'Apenas órgãos federais'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza uma "sociedade de economia mista"?',
      options: [
        'Entidade com capital público e privado, maioria pública nas ações com direito a voto',
        'Apenas capital público',
        'Apenas capital privado',
        'Fundação sem fins lucrativos'
      ],
      answer: 0
    },
    {
      question: 'Qual é a diferença entre "monitoramento pluviométrico" e "monitoramento fluviométrico"?',
      options: [
        'Pluviométrico registra chuva; fluviométrico registra nível/vazão de rios',
        'Pluviométrico registra qualidade da água; fluviométrico registra temperatura',
        'Ambos registram apenas chuva',
        'Ambos registram apenas nível dos rios'
      ],
      answer: 0
    },
    {
      question: 'O que inclui "execução de obras / instalação / ampliação"?',
      options: [
        'Construções, implementação e expansão de sistemas de drenagem novos ou preexistentes',
        'Apenas manutenção de sistemas existentes',
        'Apenas monitoramento de qualidade',
        'Apenas planejamento de projetos'
      ],
      answer: 0
    },
    {
      question: 'Qual é a importância da "atualização do mapeamento das áreas de risco"?',
      options: [
        'Revisão da identificação espacial das áreas suscetíveis a desastres',
        'Apenas para fins estatísticos',
        'Apenas para documentação histórica',
        'Apenas para controle de orçamento'
      ],
      answer: 0
    }
  ]
};

// Conteúdo do Módulo 2 em cards
const cards2 = [
  {
    type: 'default',
    title: '📋 Resumo',
    content: `O Módulo 2, intitulado "Caracterização do Prestador de Serviço", da Pesquisa Nacional de Saneamento Básico (PNSB) 2024, visa capacitar técnicos do IBGE para identificar e compreender a entidade responsável pela infraestrutura e serviços de drenagem e manejo de águas pluviais. Este módulo detalha os tipos de serviços executados por essas entidades, sejam eles diretos ou terceirizados, cobrindo desde o mapeamento de áreas de risco e planejamento até a operação e manutenção de sistemas de drenagem. A pesquisa também investiga a abrangência territorial, natureza jurídica e esfera administrativa do prestador, oferecendo uma classificação abrangente das organizações que atuam nesse setor essencial. O questionário foi desenhado para encerrar a coleta de dados caso nenhum serviço direto ou indireto seja identificado, garantindo a relevância das informações coletadas.`
  },
  {
    type: 'default',
    title: '2.1 O Bloco CZP e seu Propósito 🎯',
    content: `O Bloco CZP visa identificar o responsável pelo cadastro, planejamento, projeto, instalação, ampliação, adequação, monitoramento, manutenção e operação da infraestrutura de drenagem em diversas áreas e dispositivos. Também é importante identificar o responsável por manter o mapeamento atualizado das áreas de risco e fornecer informações ao sistema de alerta da Defesa Civil.<br><br>O prestador de serviço, para a PNSB 2024, é a entidade que atua em áreas rurais ou urbanas, realizando pelo menos uma das seguintes atividades: mapeamento atualizado de áreas de risco, cadastro, planejamento, projeto, instalação, ampliação, adequação, monitoramento, manutenção e operação da infraestrutura de drenagem e manejo de águas pluviais.`
  },
  {
    type: 'default',
    title: '2.2 Serviços de Drenagem e Manejo de Águas Pluviais Executados (Quesito 1) 🔧',
    content: `Este quesito busca entender se o prestador executou, direta e/ou indiretamente (através de contratação de terceiros), algum serviço de drenagem e manejo de águas pluviais nas ruas (com ou sem pavimentação) da área rural e/ou urbana do município pesquisado em 2024.<br><br><b>Exemplos práticos de serviços incluem:</b><ul><li>✔️ Controle de inundações</li><li>✔️ Manutenção em sarjetas, bocas de lobo, galerias, ou em infraestruturas verdes</li><li>✔️ Limpeza de rios, córregos, igarapés</li><li>✔️ Operação de grandes dispositivos de drenagem</li><li>✔️ Planejamento, obras, instalação, ampliação, fiscalização e supervisão</li></ul><br><b>⚠️ IMPORTANTE:</b> O questionário deve ser encerrado se a resposta a este quesito for "Não".`
  },
  {
    type: 'atencao',
    title: '⚠️ Atenção',
    content: 'Se a resposta ao quesito sobre serviços executados for "Não", o questionário deve ser encerrado. Verifique se a empresa terceirizada foi cadastrada, caso contrário, ela deverá ser cadastrada.'
  },
  {
    type: 'default',
    title: '2.3 Detalhamento dos Serviços Executados DIRETAMENTE (Quesito 2) 📋',
    content: `Este quesito foca nos serviços de drenagem e manejo de águas pluviais executados DIRETAMENTE pelo próprio prestador no município pesquisado em 2024, não considerando serviços terceirizados. O informante deve indicar os serviços que presta diretamente, mesmo que também terceirize alguns deles.<br><br><b>Os serviços detalhados são:</b><ul><li><b>Atualização do mapeamento das áreas de risco:</b> Revisão da identificação espacial das áreas suscetíveis a desastres (inundação, alagamentos, enxurradas, deslizamentos e movimentos de massa)</li><li><b>Planejamento (projetos):</b> Elaboração de projetos de drenagem, analisando variáveis como chuva, relevo, vegetação e arruamento</li><li><b>Monitoramento pluviométrico e fluviométrico:</b> Registro da quantidade de chuva e nível/vazão de água de rios</li><li><b>Monitoramento de qualidade da água pluvial:</b> Análise da água da chuva que escoa sobre superfícies</li><li><b>Operação:</b> Ações realizadas nos dispositivos para o funcionamento do sistema</li><li><b>Manutenção:</b> Recuperação de infraestrutura, limpeza, reparos</li><li><b>Execução de obras / instalação / ampliação:</b> Construções, implementação e expansão de sistemas</li><li><b>Outro(s):</b> Para serviços que não se enquadram nas categorias anteriores</li><li><b>Não executou nenhum serviço diretamente:</b> Se marcada, continuar apenas até o bloco de terceirização</li></ul>`
  },
  {
    type: 'dica',
    title: '💡 Dica',
    content: 'Mesmo que a empresa terceirize alguns serviços, ela deve indicar os serviços que presta diretamente. O quesito 2 foca apenas nos serviços diretos, não nos terceirizados.'
  },
  {
    type: 'default',
    title: '2.4 Abrangência Territorial e Natureza Jurídica (Quesitos 3 e 4) 🏛️',
    content: `<b>Abrangência Territorial (Quesito 3):</b> Questiona a área de atuação, direta e indireta, do prestador de serviço.<ul><li>Somente no município pesquisado</li><li>No município pesquisado e em outros municípios</li></ul><br><b>Natureza Jurídica (Quesito 4):</b> Refere-se à forma legal pela qual o prestador foi constituído, determinada pela Comissão Nacional de Classificação (CONCLA), vinculada ao IBGE.<ul><li><b>Administração direta do poder público:</b> Órgãos e serviços ligados diretamente ao Poder Executivo</li><li><b>Autarquia:</b> Parte da administração indireta, criada por lei específica, com personalidade jurídica de direito público</li><li><b>Empresa pública:</b> Entidade paraestatal, criada por lei, com personalidade jurídica de direito privado</li><li><b>Sociedade de economia mista:</b> Entidade com capital público e privado, maioria pública nas ações</li><li><b>Consórcio público:</b> Entidade resultante de acordo formal entre municípios, estados ou entre município(s), estado(s) e a União</li><li><b>Empresa privada:</b> Capital predominante ou integralmente privado</li><li><b>Fundação:</b> Pode ser pública ou privada, sem fins lucrativos</li><li><b>Associação, cooperativa e afins:</b> Entidade da sociedade civil organizada, sem fins lucrativos</li><li><b>Outra:</b> Entidade cuja constituição jurídica não esteja discriminada anteriormente</li></ul>`
  },
  {
    type: 'default',
    title: '2.5 Esfera Administrativa do Prestador (Quesito 5) 🏢',
    content: `Este quesito busca identificar a esfera com a qual o estabelecimento prestador de serviço possui contrato ou convênio.<ul><li><b>Federal:</b> Contrato ou convênio com a União</li><li><b>Estadual:</b> Contrato ou convênio com o Estado</li><li><b>Municipal:</b> Contrato ou convênio com o Município</li><li><b>Privada:</b> Contrato ou convênio com entidade privada</li><li><b>Interfederativa:</b> Reúne diferentes entes federativos das três esferas administrativas do país (União e/ou Estados e/ou Municípios)</li><li><b>Intermunicipal:</b> Reúne Municípios, contíguos ou não</li></ul>`
  },
  {
    type: 'resumo',
    title: '📊 Resumo Visual',
    content: `<table><tr><th>Conceito</th><th>Definição Rápida</th></tr><tr><td>Inundação</td><td>Transbordamento de curso d'água</td></tr><tr><td>Alagamento</td><td>Acúmulo por deficiência na drenagem</td></tr><tr><td>Enxurrada</td><td>Grande quantidade de água que corre com violência</td></tr><tr><td>Deslizamento</td><td>Deslocamentos de solo pela encosta</td></tr></table><br><b>Natureza Jurídica:</b><br><table><tr><th>Tipo</th><th>Característica</th></tr><tr><td>Administração Direta</td><td>Órgãos ligados ao Poder Executivo</td></tr><tr><td>Autarquia</td><td>Administração indireta, direito público</td></tr><tr><td>Empresa Pública</td><td>Direito privado, capital público</td></tr><tr><td>Consórcio</td><td>Acordo entre entes federativos</td></tr></table>`
  },
  {
    type: 'exemplo',
    title: '📝 Exemplo',
    content: 'Se uma prefeitura executa diretamente a limpeza de sarjetas, mas terceiriza a manutenção de galerias, ela deve marcar apenas a limpeza de sarjetas no quesito 2 (serviços diretos) e cadastrar a empresa terceirizada no bloco SRT para a manutenção de galerias.'
  },
  {
    type: 'default',
    title: '🗨️ Dúvidas Frequentes e Como Ajudar',
    content: `<b>Dúvida Comum:</b> "Como saber se minha empresa presta serviço de drenagem?"<br><b>Como Ajudar:</b> Pergunte se faz limpeza de sarjetas, manutenção de bocas de lobo, galerias, ou controle de inundações.<br><br><b>Dúvida Comum:</b> "O que é monitoramento pluviométrico vs fluviométrico?"<br><b>Como Ajudar:</b> Pluviométrico = chuva; fluviométrico = nível/vazão de rios.<br><br><b>Dúvida Comum:</b> "Como classificar se sou uma autarquia ou empresa pública?"<br><b>Como Ajudar:</b> Autarquia = direito público; empresa pública = direito privado com capital público.<br><br><b>Dúvida Comum:</b> "O que fazer se não executo nenhum serviço diretamente?"<br><b>Como Ajudar:</b> Marque essa opção e continue apenas até o bloco de terceirização, cadastrando a empresa terceirizada.`
  }
];

// Quiz do Módulo 3
const quiz3 = {
  title: '📝 Quiz do Módulo 3',
  questions: [
    {
      question: 'Qual é o objetivo principal do Bloco LEG no contexto da PNSB?',
      options: [
        'Compreender os mecanismos de transferência da execução do serviço público e os canais de atendimento ao cidadão',
        'Definir o orçamento municipal',
        'Avaliar a qualidade da água',
        'Registrar apenas reclamações de esgoto'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza um contrato de programa?',
      options: [
        'Delegação sem licitação, restrita a prestadores públicos em cooperação federativa',
        'Transferência ao particular, com licitação',
        'Remuneração por desempenho em PPP',
        'Instrumento normativo legal sem contrato'
      ],
      answer: 0
    },
    {
      question: 'Quando o questionário deve pular para o quesito 3 no Bloco LEG?',
      options: [
        'Quando a opção "Inexistente" for marcada no instrumento de delegação',
        'Quando houver contrato de concessão',
        'Quando houver PPP',
        'Quando houver reclamação registrada'
      ],
      answer: 0
    },
    {
      question: 'O que é considerado período de vigência de um instrumento de delegação?',
      options: [
        'Tempo previsto para início e fim da validade do instrumento',
        'Tempo de resposta da ouvidoria',
        'Tempo de execução de obras',
        'Tempo de manutenção dos dispositivos'
      ],
      answer: 0
    },
    {
      question: 'Se não souber informar o período de vigência, o que deve ser registrado?',
      options: [
        '3 – Não sabe',
        '0 – Não existe',
        '1 – Sim',
        '2 – Não'
      ],
      answer: 0
    },
    {
      question: 'O que é uma ouvidoria no contexto dos serviços de drenagem?',
      options: [
        'Canal aberto para receber reivindicações, denúncias, sugestões e solucionar conflitos entre empresa e cliente',
        'Departamento de obras',
        'Empresa terceirizada',
        'Sistema de monitoramento de qualidade da água'
      ],
      answer: 0
    },
    {
      question: 'Se não houver canal de atendimento, o questionário deve:',
      options: [
        'Pular para o quesito 5',
        'Encerrar imediatamente',
        'Voltar ao início',
        'Solicitar novo cadastro'
      ],
      answer: 0
    },
    {
      question: 'Qual das opções NÃO é uma reclamação típica recebida pela ouvidoria?',
      options: [
        'Solicitação de orçamento para obras particulares',
        'Solicitação para implantação de sistema de drenagem',
        'Reclamação sobre alagamentos',
        'Reclamação sobre poluição da água'
      ],
      answer: 0
    },
    {
      question: 'O que fazer se não houve reclamação ou manifestação em 2024?',
      options: [
        'Marcar a opção "Não houve reclamação ou manifestação em 2024"',
        'Deixar em branco',
        'Selecionar "Outra(s)"',
        'Encerrar o questionário'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza a contratação de empresa terceirizada no Bloco SRT?',
      options: [
        'Prestador contrata empresa(s) para execução de serviços de drenagem e manejo de águas pluviais',
        'Município executa todos os serviços diretamente',
        'Apenas monitoramento de qualidade',
        'Apenas serviços de esgoto'
      ],
      answer: 0
    },
    {
      question: 'Se for assinalado "Não" para contratação de terceiros, o que acontece?',
      options: [
        'O bloco SRT deve ser encerrado',
        'O questionário volta ao início',
        'Deve-se preencher todos os quesitos seguintes',
        'Nada muda no fluxo'
      ],
      answer: 0
    },
    {
      question: 'Quais serviços podem ser executados por terceiros segundo o Bloco SRT?',
      options: [
        'Atualização do mapeamento, planejamento, monitoramento pluviométrico e fluviométrico, monitoramento de qualidade da água pluvial, operação, manutenção, execução de obras, outro(s)',
        'Apenas manutenção',
        'Apenas operação',
        'Apenas planejamento'
      ],
      answer: 0
    },
    {
      question: 'O que deve ser feito se todos os serviços forem TOTALMENTE terceirizados?',
      options: [
        'Após responder ao quesito, o questionário deve ser encerrado',
        'Deve-se preencher o bloco CZP novamente',
        'Deve-se ignorar o bloco SRT',
        'Nada muda no fluxo'
      ],
      answer: 0
    },
    {
      question: 'Por que é importante cadastrar corretamente a empresa terceirizada?',
      options: [
        'Para garantir que as informações sobre os serviços prestados estejam completas e corretas',
        'Para aumentar o número de empresas no município',
        'Para facilitar a fiscalização de obras',
        'Para registrar reclamações de moradores'
      ],
      answer: 0
    },
    {
      question: 'Qual é o papel do técnico ao identificar o instrumento legal de delegação?',
      options: [
        'Verificar se há contrato, lei ou outro documento formalizando a delegação',
        'Solicitar apenas informações financeiras',
        'Registrar apenas reclamações',
        'Executar obras diretamente'
      ],
      answer: 0
    }
  ]
};

// Conteúdo do Módulo 3 em cards
const cards3 = [
  {
    type: 'default',
    title: '📋 Resumo',
    content: `Este módulo detalha os aspectos legais e terceirização na drenagem e manejo de águas pluviais. O Bloco LEG explora como os municípios delegam serviços públicos, identificando os instrumentos legais como contrato de programa, concessão comum, Parceria Público-Privada (PPP) ou lei, e investiga a existência e o período de vigência desses acordos. Aborda também os canais de atendimento ao cidadão e as principais reclamações recebidas. O Bloco SRT foca na contratação de empresas terceirizadas para execução de serviços, listando atividades que podem ser delegadas e orientando sobre o fluxo do questionário em caso de terceirização total.`
  },
  {
    type: 'default',
    title: '3.1 Bloco LEG - Aspectos Legais',
    content: `Este bloco tem como objetivo capacitar o técnico a compreender os mecanismos de transferência da execução do serviço público e os canais de atendimento ao cidadão.`
  },
  {
    type: 'default',
    title: '3.1.1 Instrumento de Delegação ou Outorga (Quesito 1)',
    content: `Este quesito visa identificar o instrumento legal pelo qual o município define o prestador do serviço de drenagem e manejo de águas pluviais. As opções de resposta e suas definições são:<br><ul><li><b>Contrato de programa:</b> Contrato de delegação da prestação de um serviço público que não exige licitação. Restrito aos casos em que o prestador de caráter público foi contratado no âmbito de cooperação federativa.</li><li><b>Contrato de concessão comum:</b> Contrato que transfere a gestão e execução de um serviço do Poder Público ao particular, por sua conta e risco, precedido de licitação.</li><li><b>Parceria Público-Privada (PPP):</b> Parceiro privado assume o compromisso de disponibilizar à administração pública ou à comunidade uma utilidade, mediante operação e manutenção de uma obra/serviço por ele projetada, financiada e construída, com remuneração periódica paga pelo Estado e vinculada ao desempenho.</li><li><b>Lei:</b> Instrumento normativo legal.</li><li><b>Outro:</b> Para entidades cuja constituição jurídica não esteja discriminada anteriormente.</li><li><b>Inexistente:</b> Se não há instrumento de delegação ou outorga. Se esta opção for marcada, o questionário deve pular para o quesito 3.</li></ul>`
  },
  {
    type: 'exemplo',
    title: '📝 Exemplo',
    content: 'Se o município não possui contrato de concessão, PPP ou lei específica, marque "Inexistente" no quesito 1.'
  },
  {
    type: 'default',
    title: '3.1.2 Período de Vigência (Quesito 2)',
    content: `Este quesito pergunta se o instrumento de delegação ou outorga definia um período de vigência. O período de vigência é o tempo previsto para o início e o fim da validade do instrumento, ou seja, a duração da prestação dos serviços indicada no documento, não necessariamente correspondendo à efetiva duração da prestação do serviço. As opções de resposta são: Sim, Não, Não sabe. Se for assinalado "Sim", deve-se informar mês/ano de início e término. Se não souber, marque "Não sabe".`
  },
  {
    type: 'atencao',
    title: '⚠️ Atenção',
    content: 'Caso não saiba informar o período de vigência, registre "3 – Não sabe".'
  },
  {
    type: 'default',
    title: '3.1.3 Canais de Atendimento ao Cidadão (Quesito 3)',
    content: `Este quesito verifica se, em 2024, o prestador de serviço possuía ouvidoria ou central de atendimento para recebimento de reclamações ou manifestações, mesmo que não seja exclusiva do serviço de drenagem e manejo de águas pluviais. <br><b>Ouvidoria:</b> Atua na defesa dos direitos dos cidadãos, consumidores e usuários de produtos e serviços; é considerada um canal aberto para receber reivindicações, denúncias, sugestões e elogios e, especialmente, solucionar conflitos entre empresa e cliente.<br><b>Central de atendimento:</b> Faz a interação, o contato direto entre o cliente e a empresa, fornecedor ou fabricante do produto ou serviço adquirido. As opções de resposta são: Sim, Não. Se for assinalado "Não", o questionário deve pular para o quesito 5.`
  },
  {
    type: 'default',
    title: '3.1.4 Principal Reclamação ou Manifestação (Quesito 4)',
    content: `Este quesito busca identificar a PRINCIPAL reclamação ou manifestação sobre o serviço de drenagem e manejo de águas pluviais, ou seja, a opção mais recorrente (maior quantidade) recebida pela central de atendimento/ouvidoria. As opções incluem:<ul><li>Solicitação para implantação de sistema de drenagem e manejo de águas pluviais</li><li>Solicitação para expansão de sistema de drenagem e manejo de águas pluviais</li><li>Solicitação de licenciamento de projetos de drenagem e manejo de águas pluviais para empreendimentos particulares</li><li>Solicitação para limpeza de corpos hídricos</li><li>Reclamação sobre falta de pavimentação e/ou buracos na rua</li><li>Reclamação sobre problemas nos dispositivos de drenagem (entupimento de bocas de lobo, grelhas quebradas etc.)</li><li>Reclamação sobre ocorrência de alagamentos, inundações ou enxurradas</li><li>Reclamação sobre deslizamentos ou movimentos de massa</li><li>Implantação de soluções baseadas na natureza</li><li>Reclamação sobre poluição da água</li><li>Reclamação sobre lançamento de esgotos na rede de drenagem</li><li>Reclamação sobre lançamento de esgotos em corpos hídricos</li><li>Outra(s)</li><li>Não houve reclamação ou manifestação em 2024</li></ul>`
  },
  {
    type: 'exemplo',
    title: '📝 Exemplo',
    content: 'Se a principal reclamação for sobre alagamentos, selecione essa opção no quesito 4.'
  },
  {
    type: 'default',
    title: '3.2 Bloco SRT - Serviço(s) de Drenagem e Manejo de Águas Pluviais Realizado(s) por Terceiro(s)',
    content: `Este bloco tem como objetivo identificar se o prestador de serviço contratou empresa(s) para a execução do(s) serviço(s) de drenagem e manejo de águas pluviais. O quesito 1 pergunta se, em 2024, o prestador de serviço contratou empresa(s) para a execução do(s) serviço(s) de drenagem e manejo de águas pluviais no município pesquisado. As opções de resposta são: Sim, Não. Se for assinalado "Não", o bloco deve ser encerrado.`
  },
  {
    type: 'default',
    title: '3.2.2 Serviços Executados por Terceiros (Quesito 2)',
    content: `Este quesito solicita que o informante assinale o(s) serviço(s) de drenagem e manejo de águas pluviais executado(s) por terceiro(s) no município pesquisado. A marcação admite múltipla escolha. As definições correspondem aos serviços listados no Bloco CZP (Módulo 2, seção 2.3), como:<ul><li>Atualização do mapeamento das áreas de risco de inundação, alagamentos, enxurradas, deslizamentos e movimentos de massa</li><li>Planejamento (projetos)</li><li>Monitoramento pluviométrico e fluviométrico</li><li>Monitoramento de qualidade da água pluvial</li><li>Operação (ações realizadas nos dispositivos de drenagem e manejo de águas pluviais)</li><li>Manutenção (recuperação de infraestrutura, limpeza, reparos etc.)</li><li>Execução de obras / instalação / ampliação</li><li>Outro(s)</li></ul> Orientação: Neste quesito, o informante deve indicar somente os serviços prestados pela empresa terceirizada. Caso os serviços sejam TOTALMENTE terceirizados, após responder a este quesito, o questionário deve ser encerrado.`
  },
  {
    type: 'dica',
    title: '💡 Dica',
    content: 'É crucial certificar-se com o responsável pela coleta se a empresa terceirizada foi cadastrada. Caso não tenha sido, ela deverá ser cadastrada antes de encerrar o questionário.'
  },
  {
    type: 'atencao',
    title: '⚠️ Atenção',
    content: 'Caso os serviços sejam TOTALMENTE terceirizados, após responder a este quesito, o questionário deve ser encerrado.'
  },
  {
    type: 'default',
    title: '🗨️ Dúvidas Frequentes e Como Ajudar',
    content: `<b>Dúvida Comum:</b> "Como saber qual instrumento legal utilizar?"<br><b>Como Ajudar:</b> Verifique se há contrato, lei ou outro documento formalizando a delegação.<br><br><b>Dúvida Comum:</b> "O que fazer se não houver reclamações registradas?"<br><b>Como Ajudar:</b> Marque a opção "Não houve reclamação ou manifestação em 2024".<br><br><b>Dúvida Comum:</b> "Como registrar serviços totalmente terceirizados?"<br><b>Como Ajudar:</b> Marque todos os serviços terceirizados no bloco SRT e encerre o questionário após esse bloco.`
  },
  {
    type: 'resumo',
    title: '📊 Resumo Visual',
    content: `<table><tr><th>Instrumento Legal</th><th>Definição</th></tr><tr><td>Contrato de programa</td><td>Delegação sem licitação, prestador público</td></tr><tr><td>Concessão comum</td><td>Transferência ao particular, com licitação</td></tr><tr><td>PPP</td><td>Parceria público-privada, remuneração por desempenho</td></tr><tr><td>Lei</td><td>Instrumento normativo legal</td></tr><tr><td>Inexistente</td><td>Não há delegação formal</td></tr></table><br><b>Principais Reclamações:</b><br><ul><li>Alagamentos/inundações</li><li>Falta de pavimentação</li><li>Problemas em dispositivos de drenagem</li><li>Poluição da água</li></ul>`
  }
];

const cards4 = [
  {
    type: 'default',
    title: '📋 Resumo',
    content: `O Módulo 4 detalha os sistemas utilizados para gerenciar a água da chuva nas cidades. O bloco Captação, Condução e Infiltração (CCI) foca em como a água é coletada e transportada, distinguindo entre redes unitárias (que misturam esgoto e água da chuva) e redes separadoras absolutas (que os separam). O documento explora a microdrenagem, composta por dispositivos como bueiros e sarjetas para disciplinar o fluxo inicial, e a macrodrenagem, que lida com o escoamento final através de canais maiores e estruturas de controle de cheias. Além disso, introduz as infraestruturas verdes ou Soluções Baseadas na Natureza (SBN), o reúso de águas pluviais, a gestão em áreas de ocupação irregular, e os tipos de pavimentação, incluindo opções permeáveis e o uso de materiais reciclados, finalizando com o manejo em vias não pavimentadas.`
  },
  {
    type: 'default',
    title: '4.1. O Bloco CCI e seu Escopo',
    content: `O Bloco CCI foca no sistema de drenagem instalado no município, seu funcionamento e os serviços realizados pelo prestador. Abrange os sistemas de captação e transporte da água da chuva por rede, os dispositivos de micro e de macrodrenagem, e as infraestruturas verdes.`
  },
  {
    type: 'default',
    title: '4.2. Redes de Captação e Transporte (Quesito 1)',
    content: `Este quesito verifica a existência de redes de captação e transporte de águas pluviais construídas na área atendida pelo prestador de serviço no município pesquisado em 2024. Os tipos de rede são:<ul><li><b>Rede Tipo Unitária:</b> Sistema único de tubulações que capta e transporta a água da chuva e o esgoto doméstico juntos, havendo mistura entre eles.</li><li><b>Rede Tipo Separadora Absoluta:</b> Sistema que divide claramente a captação e o transporte em dois conjuntos separados de tubulações, um para água da chuva e outro para o esgoto, onde não há mistura entre eles.</li></ul>`
  },
  {
    type: 'default',
    title: '4.3. Detalhamento da Microdrenagem (Quesito 2)',
    content: `Este quesito pergunta se, em 2024, foram realizados serviços (como construção, manutenção, melhoria, limpeza de bueiros, desobstrução de canais, inspeção de tubulações, mudança de direção de declividade, de diâmetro nos poços de visita, etc.) nos dispositivos do sistema de microdrenagem do município pesquisado.<br><b>Definição de MICRODRENAGEM:</b> Sistema de dispositivos instalados responsável pelo disciplinamento das águas pluviais. Composto por pavimentos das ruas, guias e sarjetas, bueiros, e bocas de lobo. Objetivos: redução de riscos de alagamentos e enxurradas no sistema viário, proteção de taludes/encostas contra deslizamentos e erosões, e redução da poluição hídrica.<br><b>Tipos de Dispositivos de Microdrenagem:</b> Boca de lobo/de leão, grelha/ralo, poço de visita, guia/sarjeta/meio-fio/canaleta/valeta, rua pavimentada, outros.`
  },
  {
    type: 'exemplo',
    title: '📝 Exemplo',
    content: 'A limpeza de bueiros e a desobstrução de canais são exemplos de serviços de microdrenagem.'
  },
  {
    type: 'default',
    title: '4.4. Detalhamento da Macrodrenagem (Quesito 3)',
    content: `Este quesito investiga a realização de serviços (como construção, manutenção, melhoria, reforma, desassoreamento, canalização, descanalização, etc.) nos dispositivos do sistema de macrodrenagem do município pesquisado em 2024.<br><b>Definição de MACRODRENAGEM:</b> Sistema de dispositivos instalados responsável pelo escoamento final das águas, incluindo canais naturais ou artificiais e galerias pluviais de grandes dimensões que recebem as águas de diversos sistemas de microdrenagem. Inclui também grandes dispositivos como barragens de amortecimento de cheias, "piscinões", diques, etc.<br><b>Tipos de Dispositivos de Macrodrenagem:</b> Canal natural, canal construído/canalizado, galeria, dique/muro, estrutura de detenção/retenção para controle de cheias, dissipador de energia, outros.`
  },
  {
    type: 'atencao',
    title: '⚠️ Atenção',
    content: 'A canalização pode ter consequências negativas, como o aumento da velocidade da água e do seu poder de destruição, a ocupação de áreas sujeitas a inundação e o extermínio de peixes, pássaros e vegetação.'
  },
  {
    type: 'default',
    title: '4.5. Detalhamento das Infraestruturas Verdes (Quesito 4)',
    content: `Este quesito verifica a realização de serviços (como construção, manutenção, melhoria, desassoreamento, cuidados com a vegetação, etc.) em infraestruturas verdes no município pesquisado em 2024.<br><b>Definição de INFRAESTRUTURAS VERDES:</b> Também conhecidas como Soluções Baseadas na Natureza (SBN) ou Drenagem Sustentável, são estruturas construídas que utilizam as funções da natureza para a solução da drenagem das águas de chuva. Criam áreas naturais e espaços abertos integrados com a infraestrutura cinza.<br><b>Tipos de Dispositivos:</b> Bacias de infiltração, alagado construído, canteiro pluvial, pavimento permeável, telhado verde, vala/biovaleta, corredores verdes urbanos, ruas verdes, bioengenharia de solos, renaturalização de cursos d'água, parques lineares urbanos, outros.`
  },
  {
    type: 'dica',
    title: '💡 Dica',
    content: 'O desassoreamento é o procedimento de dragagem ou limpeza do fundo de alguma estrutura construída, para retirar sedimentos, lodo, areia, vegetação e outros resíduos.'
  },
  {
    type: 'default',
    title: '4.6. Captação de Esgoto Sanitário de Tempo Seco (Quesito 5)',
    content: `Este quesito pergunta se, em 2024, existia captação de esgoto sanitário de tempo seco (vazão de estiagem) no município pesquisado. Essa captação ocorre em localidades com rede de captação unitária (esgoto e águas pluviais correndo juntas na mesma tubulação) e é realizada em período de seca (sem chuva). Pode existir também na rede de captação tipo separadora absoluta por causa das ligações clandestinas. Consiste na interceptação do esgoto presente nas galerias da rede pluvial, evitando, parcialmente, que seja despejado in natura no meio ambiente. O sistema é composto por interceptores que desviam o esgoto para uma Estação de Tratamento de Esgoto (ETE). Em dias sem chuva, o esgoto desviado tem características sanitárias e pode ser tratado normalmente.`
  },
  {
    type: 'default',
    title: '4.7. Captação e Aproveitamento (Reúso) de Águas Pluviais (Quesito 6)',
    content: `Este quesito verifica se, em 2024, o prestador de serviço instalou e/ou operou sistema de captação e aproveitamento (reúso) de águas pluviais nas áreas urbanizadas do município pesquisado. O reúso consiste na captação da água da chuva, que pode ser feita a partir de telhados de casas, através do uso de calhas e encanamentos condutores, e o armazenamento em cisternas, caixas d'água, tanques de armazenamento ou outro tipo de reservatório. Devem ser considerados todos os dispositivos existentes: de coleta e armazenamento de águas de chuvas e os de captação e transporte de águas pluviais em geral.`
  },
  {
    type: 'default',
    title: '4.8. Reservatório de Primeira Chuva (Quesito 7)',
    content: `Este quesito pergunta se, em 2024, o prestador de serviço operou, orientou, instalou ou fez manutenção de reservatório de primeira chuva no município pesquisado. Nos sistemas de captação e reúso, a primeira água de chuva deve ser descartada, pois contém sujeira acumulada nos telhados e encanamentos. A quantidade de água a ser descartada depende da região e da poluição do ar. Este quesito se refere, exclusivamente, a dispositivos instalados para captar, armazenar e reutilizar ÁGUA DA CHUVA, independentemente do tamanho e da abrangência do sistema (individual ou coletivo).`
  },
  {
    type: 'exemplo',
    title: '📝 Exemplo',
    content: 'A instalação de cisternas para captação de água da chuva em escolas públicas é um exemplo de sistema de reúso.'
  },
  {
    type: 'default',
    title: '4.9. Manejo em Áreas de Ocupação Irregular (Quesito 8)',
    content: `Este quesito verifica se, em 2024, o prestador de serviço realizou manejo em dispositivos de microdrenagem, macrodrenagem ou em infraestruturas verdes (soluções baseadas na natureza) nas ÁREAS DE OCUPAÇÃO IRREGULAR, FAVELAS OU COMUNIDADES URBANAS do município pesquisado. Os tipos de sistema para manejo são: Microdrenagem, Macrodrenagem, Infraestruturas verdes.`
  },
  {
    type: 'default',
    title: '4.10. Tipos de Pavimentação nas Áreas Urbanizadas (Quesito 9)',
    content: `Este quesito indaga se, em 2024, existiam ruas pavimentadas nas áreas urbanizadas do município pesquisado (inclusive setor rural com características urbanas).<br><b>Tipos de Pavimento:</b> Pavimento impermeável de asfalto, pavimento impermeável de peças pré-moldadas de concreto, pavimento impermeável de concreto contínuo, pavimento permeável de asfalto poroso, pavimento permeável de peças pré-moldadas de concreto poroso ou com juntas alargadas, pavimento permeável de concreto poroso contínuo, paralelepípedo, solo-cimento, outros.`
  },
  {
    type: 'default',
    title: '4.11. Pavimentação com Material de Reúso/Reciclagem (Quesito 10)',
    content: `Este quesito pergunta se o material utilizado na pavimentação das ruas nas áreas urbanizadas, em 2024, era proveniente de reúso/reciclagem.<br><b>Materiais Provenientes de Reúso/Reciclagem:</b> Resíduos de construção, borracha/pneu, escória (resíduo industrial), outros.`
  },
  {
    type: 'dica',
    title: '💡 Dica',
    content: 'O uso de pavimento permeável e materiais reciclados contribui para a sustentabilidade urbana e a redução de enchentes.'
  },
  {
    type: 'default',
    title: '4.12. Ruas/Estradas Pavimentadas Sem Drenagem (Quesito 11)',
    content: `Este quesito questiona se, em 2024, existiam ruas e/ou estradas com pavimentação sem sistema de drenagem no município pesquisado. Isso se refere a ruas ou estradas onde existe apenas a pavimentação, sem a presença de guias, sarjetas, bocas de lobo ou outro tipo de dispositivo de microdrenagem.`
  },
  {
    type: 'default',
    title: '4.13. Manejo de Águas Pluviais em Ruas/Estradas NÃO Pavimentadas (Quesito 12)',
    content: `Este quesito pergunta se, em 2024, o prestador realizou manejo de águas pluviais em ruas e/ou estradas não pavimentadas no município pesquisado. O manejo pode ser feito através de algumas estratégias, como: controle de erosão e cheias (bacia de acumulação/barraginhas), controle de tráfego no período chuvoso, proteção das áreas adjacentes com vegetação ou outras formas de proteção (como geotêxtil ou enrocamento), instalação/manutenção de jardim de chuva, vala ou biovaleta/trincheira de infiltração, outras.`
  },
  {
    type: 'atencao',
    title: '⚠️ Atenção',
    content: 'A ausência de drenagem adequada em ruas pavimentadas pode causar alagamentos, erosão e danos à infraestrutura urbana.'
  },
  {
    type: 'default',
    title: '🗨️ Dúvidas Frequentes e Como Ajudar',
    content: `<b>Dúvida Comum:</b> "Como diferenciar microdrenagem de macrodrenagem?"<br><b>Como Ajudar:</b> Microdrenagem refere-se a dispositivos locais (bueiros, sarjetas, bocas de lobo); macrodrenagem envolve canais, rios e grandes estruturas.<br><br><b>Dúvida Comum:</b> "O que são infraestruturas verdes?"<br><b>Como Ajudar:</b> São soluções baseadas na natureza, como jardins de chuva, telhados verdes, bacias de infiltração.<br><br><b>Dúvida Comum:</b> "Por que usar pavimento permeável?"<br><b>Como Ajudar:</b> Para permitir a infiltração da água da chuva e reduzir enchentes.`
  },
  {
    type: 'resumo',
    title: '📊 Resumo Visual',
    content: `<table><tr><th>Termo</th><th>Definição</th></tr><tr><td>Microdrenagem</td><td>Dispositivos locais: bueiros, sarjetas, bocas de lobo</td></tr><tr><td>Macrodrenagem</td><td>Canais, rios, galerias de grande porte</td></tr><tr><td>Infraestrutura verde</td><td>Jardins de chuva, telhados verdes, bacias de infiltração</td></tr><tr><td>Pavimento permeável</td><td>Permite infiltração da água da chuva</td></tr></table><br><b>Fluxo de drenagem:</b> Captação → Microdrenagem → Macrodrenagem → Destinação final`}
  
];

// Quiz do Módulo 4
const quiz4 = {
  title: '📝 Quiz do Módulo 4',
  questions: [
    {
      question: 'Qual é o objetivo principal do Bloco CCI no contexto do curso?',
      options: [
        'Identificar o sistema de drenagem instalado no município, seu funcionamento e os serviços realizados pelo prestador',
        'Avaliar a qualidade da água potável',
        'Registrar reclamações de moradores',
        'Controlar apenas o esgoto doméstico'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza uma rede tipo unitária?',
      options: [
        'Capta e transporta água da chuva e esgoto doméstico juntos',
        'Separa água da chuva e esgoto em tubulações distintas',
        'Só transporta água da chuva',
        'Só transporta esgoto doméstico'
      ],
      answer: 0
    },
    {
      question: 'Qual é a principal função da microdrenagem?',
      options: [
        'Disciplinar as águas pluviais localmente, reduzindo riscos de alagamentos e enxurradas',
        'Transportar grandes volumes de água para rios',
        'Tratar esgoto sanitário',
        'Monitorar a qualidade da água'
      ],
      answer: 0
    },
    {
      question: 'Quais são exemplos de dispositivos de microdrenagem?',
      options: [
        'Boca de lobo, grelha, poço de visita, guia, sarjeta, rua pavimentada',
        'Barragem, dique, piscinão',
        'Cisterna, caixa d\'água',
        'Parque linear, corredor verde'
      ],
      answer: 0
    },
    {
      question: 'O que é macrodrenagem?',
      options: [
        'Sistema responsável pelo escoamento final das águas, incluindo canais naturais ou artificiais e grandes dispositivos',
        'Sistema de coleta de lixo',
        'Rede de distribuição de água potável',
        'Sistema de monitoramento de qualidade'
      ],
      answer: 0
    },
    {
      question: 'Qual das opções é um dispositivo de macrodrenagem?',
      options: [
        'Canal natural, canal canalizado, galeria, dique, piscinão, dissipador de energia',
        'Boca de lobo, sarjeta',
        'Cisterna, caixa d\'água',
        'Poço de visita, grelha'
      ],
      answer: 0
    },
    {
      question: 'Qual é um possível impacto negativo da canalização de rios?',
      options: [
        'Aumento da velocidade da água e do seu poder de destruição',
        'Redução do risco de enchentes',
        'Aumento da biodiversidade',
        'Melhoria da qualidade do ar'
      ],
      answer: 0
    },
    {
      question: 'O que são infraestruturas verdes?',
      options: [
        'Estruturas que utilizam funções da natureza para drenagem sustentável, como jardins de chuva, telhados verdes, bacias de infiltração',
        'Apenas galerias de concreto',
        'Sistemas de esgoto sanitário',
        'Reservatórios subterrâneos de água potável'
      ],
      answer: 0
    },
    {
      question: 'O que é desassoreamento?',
      options: [
        'Dragagem ou limpeza do fundo de estruturas para retirar sedimentos, lodo, areia, vegetação e resíduos',
        'Construção de barragens',
        'Instalação de poços de visita',
        'Pavimentação de ruas'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza a captação de esgoto sanitário de tempo seco?',
      options: [
        'Interceptação do esgoto presente nas galerias da rede pluvial em período de seca, desviando para ETE',
        'Coleta de água da chuva para reúso',
        'Monitoramento de qualidade da água',
        'Construção de galerias pluviais'
      ],
      answer: 0
    },
    {
      question: 'O que é reúso de águas pluviais?',
      options: [
        'Captação da água da chuva para armazenamento e uso posterior, como em cisternas e caixas d\'água',
        'Descarte da água da chuva',
        'Mistura de esgoto e água pluvial',
        'Canalização de rios urbanos'
      ],
      answer: 0
    },
    {
      question: 'Por que a primeira água de chuva deve ser descartada em sistemas de reúso?',
      options: [
        'Porque contém sujeira acumulada nos telhados e encanamentos',
        'Porque é potável',
        'Porque é usada para irrigação',
        'Porque é filtrada naturalmente'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza o manejo em áreas de ocupação irregular?',
      options: [
        'Realização de manejo em dispositivos de microdrenagem, macrodrenagem ou infraestruturas verdes em favelas ou comunidades urbanas',
        'Apenas em áreas rurais',
        'Somente em vias pavimentadas',
        'Apenas em áreas industriais'
      ],
      answer: 0
    },
    {
      question: 'Qual das opções é um tipo de pavimento permeável?',
      options: [
        'Pavimento de asfalto poroso, peças pré-moldadas de concreto poroso, concreto poroso contínuo',
        'Pavimento de asfalto convencional',
        'Paralelepípedo com juntas cimentadas',
        'Solo-cimento sem compactação'
      ],
      answer: 0
    },
    {
      question: 'Por que o uso de pavimento permeável e materiais reciclados é importante?',
      options: [
        'Contribui para a sustentabilidade urbana e redução de enchentes',
        'Aumenta o risco de erosão',
        'Dificulta a manutenção das vias',
        'Reduz a infiltração da água da chuva'
      ],
      answer: 0
    }
  ]
}; 

// Conteúdo do Módulo 5 em cards (emojis apenas nos títulos e cards especiais)
const cards5 = [
  {
    type: 'default',
    title: '📋 Resumo',
    content: `O Módulo 5 da Pesquisa Nacional de Saneamento Básico (PNSB) do IBGE foca nas Estruturas de Retenção/Detenção (Bloco EDR) e Sistema de Proteção Contra Enchentes e Inundações (Bloco SPI). O módulo visa capacitar técnicos a identificar e compreender sistemas que armazenam temporariamente enxurradas para reduzir a vazão a jusante, distinguindo entre detenção (temporária) e retenção (nível permanente de água). Além disso, aborda a operação e manutenção dessas estruturas, incluindo gestão de sistemas de bombeamento e protocolos de contingência para acionamento em caso de cheias. O módulo também descreve componentes de sistemas de proteção contra enchentes, como diques e pôlderes, e os quesitos de vistoria e manutenção para garantir sua eficácia.`
  },
  {
    type: 'default',
    title: '5.1 Bloco EDR - Estruturas de Retenção/Detenção 🏗️',
    content: `O propósito das Estruturas de Retenção/Detenção é o armazenamento temporário de enxurradas com o objetivo de reduzir a vazão a jusante (rio abaixo, montanha abaixo, encosta abaixo).<br><br>É fundamental compreender a diferença entre Detenção e Retenção:<br><br><b>Detenção:</b> Refere-se a bacias utilizadas para receber temporariamente o acréscimo de águas, sendo dimensionadas para descarregar totalmente a água armazenada. Estas bacias permanecem sem água em seu interior no período de estiagem. Exemplos incluem piscinões e sistemas subterrâneos. Durante o período sem chuva, é comum que a área seja utilizada para atividades de lazer da comunidade, como pista de caminhada, pista de skate ou futebol. Sistemas de armazenamento subterrâneos são geralmente considerados de detenção, pois são projetados para reter um volume específico de água e liberá-lo lentamente.<br><br><b>Retenção:</b> São bacias que possuem um nível permanente de água (espelho d'água) ao longo do ano, regularizando os níveis dos rios por meio do armazenamento das águas das chuvas. Nesses sistemas, a saída da água ocorre por tubulações ou infiltração nas margens quando o nível permanente é ultrapassado.<br><br>Uma boa regra prática para distinguir esses sistemas é lembrar que a detenção é temporária, mas a retenção tem um nível de água permanente.`
  },
  {
    type: 'dica',
    title: '💡 Dica',
    content: 'Para diferenciar detenção de retenção: detenção é temporária (sem água na estiagem), retenção mantém nível permanente de água.'
  },
  {
    type: 'default',
    title: '5.2 Responsabilidade pela Operação e/ou Manutenção (Quesito 2)',
    content: `Este quesito visa identificar quem era o responsável pela operação e/ou manutenção de estruturas de retenção/detenção para controle de inundações no município pesquisado, podendo ser o próprio prestador de serviço ou outros entes, como o município, o estado, o governo federal, uma empresa privada ou um consórcio público.<br><br><b>Operação:</b> Procedimentos executados nos dispositivos para o funcionamento do sistema de drenagem, como, por exemplo, abertura ou fechamento de comportas ou diques.<br><br><b>Manutenção:</b> Inclui a recuperação de infraestrutura, limpeza, reparos, como limpeza de bocas de lobo, desobstrução de galerias de drenagem, desassoreamento de córregos e barragens, limpeza de filtros, inspeção de bombas e verificação de sensores.`
  },
  {
    type: 'default',
    title: '5.3 Estruturas com Bombeamento (Quesito 3)',
    content: `Aborda a existência e as estratégias de mitigação de riscos adotadas no sistema de bombeamento das estruturas, em caso de falha no suprimento de energia elétrica. Essas estratégias são ações preventivas que visam reduzir ou eliminar riscos operacionais, ambientais ou outros, identificando-os e desenvolvendo um plano para seu controle ou eliminação.<br><br><b>Exemplos de estratégias de mitigação:</b><ul><li>Fornecimento alternativo de energia elétrica por sistema de geradores</li><li>Atendimento prioritário por parte da concessionária de energia elétrica (o fornecimento de energia é especial, e o desligamento da rede nas proximidades não implica no seu desligamento)</li><li>Banco de baterias</li></ul>`
  },
  {
    type: 'default',
    title: '5.4 Protocolo de Contingência (Quesito 4)',
    content: `Verifica se o município possuía um protocolo de contingência para atuação na ocorrência de enchentes e inundações. Um protocolo de contingência de desastres é um conjunto pré-definido de ações locais, que orienta os procedimentos a serem tomados em caso de desastre, sendo geralmente de conhecimento dos gestores e demais órgãos municipais e empresas responsáveis pelas ações de resposta a desastres.`
  },
  {
    type: 'default',
    title: '5.5 Parâmetros de Nível de Cheia para Acionamento do Protocolo (Quesito 4.2)',
    content: `Identifica os parâmetros de nível de cheia que acionam o protocolo de contingência. Estes podem ser:<br><br><b>Altura em metros:</b> Quando o nível da cheia do rio atinge uma altura pré-determinada, as primeiras ações do protocolo começam a ser acionadas.<br><br><b>Referência física:</b> Quando o nível da cheia do rio atinge um ponto ou local pré-determinado, como um pilar de ponte, marcação em muros, ou determinada rua, as ações do protocolo são iniciadas.`
  },
  {
    type: 'atencao',
    title: '⚠️ Atenção',
    content: 'Protocolos de contingência são essenciais para resposta rápida e eficaz em situações de emergência. Sempre verifique se existem e estão atualizados.'
  },
  {
    type: 'default',
    title: '5.6 Bloco SPI - Sistema de Proteção Contra Enchentes e Inundações 🛡️',
    content: `O sistema de proteção contra enchentes e inundações tem a função de impedir o ingresso das águas dos rios nas cidades. É composto por diversos elementos, tais como:<br><br><b>Pôlder:</b> Zonas ou locais de baixa altitude protegidos pelos sistemas de diques, reservatórios, cortinas de concreto e barreiras móveis, dutos e bombas, para controle de inundação. Para ser considerada a existência do sistema, é imprescindível que exista o pôlder, ou seja, uma área protegida por alguma barreira (um ou mais dos componentes de proteção) com dutos e bombas para escoar a água.<br><br><b>Dique:</b> Estrutura construída para barrar o avanço das águas fluviais em zonas urbanas e rurais, podendo ser de terra ou outro material.<br><br><b>Cortina de concreto / Muro:</b> Estrutura em concreto armado, alternativa aos diques, para locais onde não há largura suficiente.<br><br><b>Barreiras móveis:</b> Estruturas que desempenham a mesma funcionalidade dos diques, mas são instaladas apenas quando há previsão de inundação, exigindo maiores requisitos de treinamento de montagem e manutenção.`
  },
  {
    type: 'default',
    title: '5.7 Componentes do Sistema de Proteção (Continuação)',
    content: `<b>Comportas de passagem / Portões:</b> Utilizadas em locais onde há necessidade de passagem de pessoas, veículos ou mercadorias, são comportas móveis e herméticas que são fechadas durante as inundações.<br><br><b>Comportas de gravidade, retenção, tipo flap:</b> Estruturas hidráulicas autônomas que permitem o fluxo de água apenas em um sentido dentro de galerias de descarga das casas de bomba e condutos forçados.<br><br><b>Comportas tipo stop-log:</b> Consistem em placas de acionamento manual, mecânico ou remoto que interrompem o fluxo por obstrução através de movimento descendente em trilhos (guilhotina).<br><br><b>Casas de bombas / Estações elevatórias:</b> Instalações que abrigam sistemas de bombeamento de água pluvial que são acionados.`
  },
  {
    type: 'exemplo',
    title: '📝 Exemplo',
    content: 'Um piscinão é um exemplo de estrutura de detenção, pois fica vazio na estiagem e é usado para lazer pela comunidade.'
  },
  {
    type: 'default',
    title: '5.8 Existência do Sistema de Proteção (Quesito 1)',
    content: `Questiona a existência do sistema de proteção contra enchentes e inundações no município pesquisado, sendo imprescindível a existência de um pôlder (área protegida) e pelo menos um componente de proteção (como dique ou cortina de concreto).`
  },
  {
    type: 'default',
    title: '5.9 Responsabilidade pela Operação e/ou Manutenção do Sistema (Quesito 2)',
    content: `Identifica o responsável pela operação e/ou manutenção do sistema de proteção contra enchentes e inundações no município.`
  },
  {
    type: 'default',
    title: '5.10 Cota de Projeto (Quesitos 2.1 e 2.2)',
    content: `Verificam se o sistema de proteção estava totalmente construído na cota de projeto (a altura do topo do dique ou da cortina de concreto definida pelo projeto) e se possuía trechos abaixo dessa cota.`
  },
  {
    type: 'default',
    title: '5.11 Vistoria (Inspeção Visual) (Quesito 3)',
    content: `Pergunta sobre a existência de vistoria (inspeção visual) no sistema de proteção para identificação de princípio de colapso por erosão, recalque (afundamento), desmoronamento ou corrosão de armadura/ferragem do concreto.<br><br><b>Colapso por erosão:</b> Problemas causados pela erosão do solo que destrói as bases das fundações, podendo resultar em desabamento parcial ou total das estruturas.<br><br><b>Recalque:</b> Ocorre quando o solo sob uma edificação se compacta, rebaixando as fundações e podendo causar trincas, rachaduras, deslocamentos.<br><br><b>Desmoronamento:</b> Desabamento.<br><br><b>Corrosão de armadura/ferragem do concreto:</b> Oxidação do aço das armaduras do concreto, podendo levar ao desgaste e, em casos extremos, ao colapso estrutural.`
  },
  {
    type: 'default',
    title: '5.12 Periodicidade da Vistoria e Responsabilidade Técnica',
    content: `São questionadas a periodicidade da vistoria (semestral, anual, bianual, entre 2 e 5 anos, mais de 5 anos, somente em caso de alerta meteorológico, somente durante o período chuvoso, outra, ou se não há periodicidade), e a existência de responsabilidade técnica (ART) para as vistorias. Uma Anotação de Responsabilidade Técnica (A.R.T.) é o instrumento que define legalmente os responsáveis técnicos pela execução de obras ou prestação de serviços.`
  },
  {
    type: 'dica',
    title: '💡 Dica',
    content: 'Vistorias regulares são fundamentais para identificar problemas antes que se tornem críticos. Sempre verifique a periodicidade e responsabilidade técnica.'
  },
  {
    type: 'default',
    title: '5.13 Levantamento Topográfico (Planialtimétrico) (Quesito 4)',
    content: `Investiga a realização de levantamento topográfico (planialtimétrico) dos diques e muros do sistema de proteção.<br><br><b>Levantamento topográfico:</b> Conjunto de medições feitas em um terreno para representar acidentes geográficos e distâncias entre pontos notáveis.<br><br><b>Levantamento planialtimétrico:</b> Tipo de levantamento topográfico que destaca as diferenças de nível no relevo, registrando a inclinação do terreno através de curvas de nível.`
  },
  {
    type: 'default',
    title: '5.14 Periodicidade do Levantamento e Responsabilidade Técnica',
    content: `São questionadas a periodicidade do levantamento (semestral, anual, bianual, entre 2 e 5 anos, mais de 5 anos, outra, ou se não há periodicidade), e a existência de responsabilidade técnica (ART).`
  },
  {
    type: 'default',
    title: '5.15 Vegetação e Edificações Irregulares (Quesitos 5 e 6)',
    content: `Verificam a presença de vegetação de porte médio ou grande (maior que 50 cm de altura) e a existência de edificações irregulares (qualquer tipo de construção não legalizada) sobre as estruturas do sistema de proteção contra enchentes e inundações.`
  },
  {
    type: 'atencao',
    title: '⚠️ Atenção',
    content: 'Vegetação e edificações irregulares sobre estruturas de proteção podem comprometer sua eficácia e segurança.'
  },
  {
    type: 'default',
    title: '5.16 Manutenção de Comportas (Quesito 7)',
    content: `Averigua se o sistema de proteção possuía comportas (estruturas que controlam a passagem de água) e qual a periodicidade de sua manutenção (semestral, anual, bianual, entre 2 e 5 anos, mais de 5 anos, somente em caso de alerta meteorológico, somente durante o período chuvoso, outra, não há periodicidade, ou se não realiza manutenção). Também questiona a existência de responsabilidade técnica (ART) para as vistorias das comportas.`
  },
  {
    type: 'default',
    title: '5.17 Características e Mitigação de Riscos em Casas de Bombas (Quesito 8)',
    content: `Questiona a existência de casas de bombas / estações elevatórias no sistema de proteção. E as características e estratégias de mitigação de riscos adotadas em caso de falha no suprimento de energia elétrica.<br><br><b>As características incluem:</b> se operam mesmo com a estrutura inundada (motores e quadros elétricos acima da cota de inundação ou operam submersos/blindados), se as tampas de acesso às galerias de descarga são herméticas (vedam perfeitamente) ou estão acima da cota de inundação para evitar refluxo, e a existência de bombas volantes (equipamentos transportáveis de bombeamento) nas proximidades para redundância do sistema de bombeamento (equipamentos em duplicidade).`
  },
  {
    type: 'exemplo',
    title: '📝 Exemplo',
    content: 'Bombas volantes são equipamentos transportáveis que podem ser usados como backup em caso de falha do sistema principal.'
  },
  {
    type: 'default',
    title: '5.18 Manutenção de Galerias de Descarga (Quesito 9)',
    content: `Indaga se as galerias de descarga das casas de bombas / estações elevatórias possuíam comportas de gravidade, retenção, tipo flap ou tipo stop-log, e qual a periodicidade de sua manutenção. As comportas de gravidade, retenção e tipo flap permitem o fluxo de água em apenas um sentido, enquanto as tipo stop-log são placas de acionamento manual/remoto que interrompem o fluxo. A periodicidade da manutenção é investigada, bem como a existência de responsabilidade técnica (ART) para as vistorias.`
  },
  {
    type: 'default',
    title: '5.19 Condução de Águas Pluviais por Outros Dispositivos (Quesito 10)',
    content: `Por fim, este quesito verifica se as águas pluviais foram conduzidas para fora do sistema de proteção por outro tipo de dispositivo que não as casas de bombas/estações elevatórias.<br><br><b>Os dispositivos podem ser:</b><br><br><b>Condutos forçados:</b> Galerias ou tubulações herméticas com escoamento sob pressão interna superior à atmosférica. Podem ser por gravidade (recebendo água de partes altas e herméticos no trecho inferior) ou pressurizados por bombeamento (trechos após uma casa de bombas).<br><br><b>Ligações diretas por gravidade que permitem o fluxo para dentro do pôlder durante as cheias:</b> Redes pluviais direcionadas diretamente para o rio ou lago, atravessando diques e/ou cortinas de concreto, causando refluxo e inundando a área protegida.<br><br><b>Ligações diretas por gravidade que NÃO permitem o fluxo para dentro do pôlder durante as cheias:</b> Possuem comportas de gravidade, retenção, tipo flap ou tipo stop-log que impedem o refluxo.`
  },
  {
    type: 'resumo',
    title: '📊 Resumo Visual',
    content: `<table><tr><th>Termo</th><th>Definição</th></tr><tr><td>Detenção</td><td>Bacias temporárias, vazias na estiagem</td></tr><tr><td>Retenção</td><td>Bacias com nível permanente de água</td></tr><tr><td>Pôlder</td><td>Área protegida por barreiras contra inundação</td></tr><tr><td>Dique</td><td>Estrutura para barrar avanço das águas</td></tr><tr><td>Comporta</td><td>Estrutura que controla passagem de água</td></tr></table><br><b>Estratégias de mitigação:</b><br><table><tr><th>Risco</th><th>Solução</th></tr><tr><td>Falha de energia</td><td>Geradores, banco de baterias</td></tr><tr><td>Inundação</td><td>Motores acima da cota, bombas volantes</td></tr><tr><td>Refluxo</td><td>Comportas herméticas, tampas vedadas</td></tr></table>`
  },
  {
    type: 'default',
    title: '🗨️ Dúvidas Frequentes e Como Ajudar',
    content: `<b>Dúvida Comum:</b> "Como diferenciar detenção de retenção?"<br><b>Como Ajudar:</b> Detenção é temporária (sem água na estiagem), retenção mantém nível permanente de água.<br><br><b>Dúvida Comum:</b> "O que é um pôlder?"<br><b>Como Ajudar:</b> É uma área protegida por barreiras (diques, muros) contra inundação, com sistema de bombeamento.<br><br><b>Dúvida Comum:</b> "Por que vistorias são importantes?"<br><b>Como Ajudar:</b> Identificam problemas antes que se tornem críticos, como erosão, recalque ou corrosão.`
  }
];

// Quiz do Módulo 5
const quiz5 = {
  title: '📝 Quiz do Módulo 5',
  questions: [
    {
      question: 'Qual é o propósito principal das Estruturas de Retenção/Detenção?',
      options: [
        'Armazenamento temporário de enxurradas para reduzir a vazão a jusante',
        'Tratamento de esgoto doméstico',
        'Abastecimento de água potável',
        'Geração de energia elétrica'
      ],
      answer: 0
    },
    {
      question: 'Qual é a principal diferença entre detenção e retenção?',
      options: [
        'Detenção é temporária, retenção mantém nível permanente de água',
        'Detenção é permanente, retenção é temporária',
        'Detenção usa bombas, retenção usa gravidade',
        'Detenção é subterrânea, retenção é superficial'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza uma estrutura de detenção?',
      options: [
        'Bacias que permanecem sem água no período de estiagem',
        'Bacias com nível permanente de água',
        'Sistemas subterrâneos apenas',
        'Estruturas de concreto armado'
      ],
      answer: 0
    },
    {
      question: 'O que é um piscinão?',
      options: [
        'Exemplo de estrutura de detenção que pode ser usado para lazer na estiagem',
        'Sistema de tratamento de esgoto',
        'Reservatório de água potável',
        'Estrutura de retenção permanente'
      ],
      answer: 0
    },
    {
      question: 'O que inclui a manutenção de estruturas de retenção/detenção?',
      options: [
        'Limpeza de bocas de lobo, desobstrução de galerias, desassoreamento',
        'Apenas limpeza de filtros',
        'Somente inspeção de bombas',
        'Apenas verificação de sensores'
      ],
      answer: 0
    },
    {
      question: 'Qual é uma estratégia de mitigação de riscos para falha de energia elétrica?',
      options: [
        'Fornecimento alternativo por sistema de geradores',
        'Aumento da capacidade de armazenamento',
        'Construção de mais diques',
        'Instalação de mais comportas'
      ],
      answer: 0
    },
    {
      question: 'O que é um protocolo de contingência?',
      options: [
        'Conjunto pré-definido de ações locais para resposta a desastres',
        'Plano de manutenção preventiva',
        'Documento de licenciamento ambiental',
        'Projeto de engenharia'
      ],
      answer: 0
    },
    {
      question: 'Qual é a função do sistema de proteção contra enchentes?',
      options: [
        'Impedir o ingresso das águas dos rios nas cidades',
        'Aumentar a velocidade do escoamento',
        'Reduzir a infiltração no solo',
        'Promover a erosão controlada'
      ],
      answer: 0
    },
    {
      question: 'O que é um pôlder?',
      options: [
        'Zona de baixa altitude protegida por sistemas de diques e barreiras',
        'Tipo de dique de terra',
        'Sistema de bombeamento',
        'Estrutura de concreto armado'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza uma barreira móvel?',
      options: [
        'Estrutura instalada apenas quando há previsão de inundação',
        'Dique permanente de concreto',
        'Sistema de bombeamento fixo',
        'Comporta automática'
      ],
      answer: 0
    },
    {
      question: 'O que é colapso por erosão?',
      options: [
        'Problemas causados pela erosão do solo que destrói as bases das fundações',
        'Desabamento por sobrecarga',
        'Falha por corrosão do aço',
        'Ruptura por pressão hidráulica'
      ],
      answer: 0
    },
    {
      question: 'O que é recalque em estruturas de proteção?',
      options: [
        'Compactação do solo que rebaixa as fundações',
        'Erosão das margens',
        'Corrosão do concreto',
        'Desgaste das armaduras'
      ],
      answer: 0
    },
    {
      question: 'Por que é importante a periodicidade das vistorias?',
      options: [
        'Para identificar problemas antes que se tornem críticos',
        'Para reduzir custos de manutenção',
        'Para aumentar a capacidade de armazenamento',
        'Para melhorar a eficiência energética'
      ],
      answer: 0
    },
    {
      question: 'O que são bombas volantes?',
      options: [
        'Equipamentos transportáveis de bombeamento para redundância do sistema',
        'Bombas fixas em casas de bombas',
        'Sistemas de drenagem por gravidade',
        'Comportas automáticas'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza um conduto forçado?',
      options: [
        'Tubulação hermética com escoamento sob pressão superior à atmosférica',
        'Canal aberto de drenagem',
        'Sistema de infiltração',
        'Estrutura de retenção'
      ],
      answer: 0
    }
  ]
}; 

// Conteúdo do Módulo 6 em cards (emojis apenas nos títulos e cards especiais)
const cards6 = [
  {
    type: 'default',
    title: '📋 Resumo',
    content: `O Módulo 6 da Pesquisa Nacional de Saneamento Básico (PNSB) do IBGE foca na Destinação (Bloco DES) e Tratamento (Bloco TRA) de águas pluviais. O módulo visa aprofundar a compreensão sobre o percurso da água pluvial após ser coletada e os métodos de tratamento aplicados a ela antes de sua disposição final. O Bloco DES concentra-se em compreender o fluxo da água pluvial após a captação e os impactos no seu ponto de despejo, detalhando os locais para onde a água pode ser direcionada, como rios, lagoas ou estações de tratamento. O Bloco TRA foca na distinção entre o tratamento de águas pluviais, esgoto e água para abastecimento, descrevendo os locais e tipos de tratamento aplicados e a possibilidade de aproveitamento do efluente tratado para promover a sustentabilidade.`
  },
  {
    type: 'default',
    title: '6.1 Bloco DES - Destinação 🌊',
    content: `O Bloco DES foca em compreender o fluxo da água pluvial após a captação e os impactos no seu ponto de despejo. Após ser captada pelos dispositivos de drenagem, a água pluvial é conduzida ao seu destino final, que pode ser rios, córregos, entre outros, ou pode ser direcionada para estações de tratamento ou reservatórios para reúso. O ponto final de despejo é crucial para garantir que a drenagem não cause problemas como erosão, poluição ou alagamento.`
  },
  {
    type: 'default',
    title: '6.2 Pontos Finais de Destinação (Quesito 1)',
    content: `A água captada é descarregada, liberada ou tratada nestes locais, finalizando o percurso do sistema. Os pontos finais de destinação podem ser:<br><br><b>Rios intermitentes:</b> rios com água somente no período chuvoso.<br><br><b>Rios perenes:</b> rios com água o ano todo.<br><br><b>Lagoas</b><br><br><b>Mar</b><br><br><b>Áreas livres públicas ou particulares:</b><ul><li>Públicas: ruas, calçadas, praças, jardins, parques, etc., mantidas pelo poder público</li><li>Particulares: terrenos, jardins, quintais, etc., de propriedade privada</li></ul><b>Reservatórios/açudes:</b> importante não confundir com reservatórios para tratamento de águas pluviais.<br><br><b>Encaminhamento para tratamento</b><br><br><b>Outro(s)</b><br><br><b>Não sabe</b>`
  },
  {
    type: 'dica',
    title: '💡 Dica',
    content: 'Para identificar pontos finais de destinação, siga o percurso da água desde a captação até onde ela é finalmente descarregada.'
  },
  {
    type: 'default',
    title: '6.3 Dispositivos para Redução da Velocidade da Água (Quesito 2)',
    content: `Verifica-se a existência de dispositivos para redução da velocidade da água, como dissipadores de energia, antes do deságue em rios, lagos ou outros locais no município pesquisado. Um dissipador de energia é uma estrutura que reduz a velocidade das águas para evitar erosão, como escadas ou rampas com blocos.`
  },
  {
    type: 'exemplo',
    title: '📝 Exemplo',
    content: 'Dissipadores de energia são estruturas como escadas ou rampas com blocos que reduzem a velocidade da água antes do deságue, evitando erosão.'
  },
  {
    type: 'default',
    title: '6.4 Erosão ou Deslizamentos nos Pontos Finais (Quesito 3)',
    content: `Esta seção busca identificar processos erosivos e/ou movimentos de massa relacionados exclusivamente aos pontos finais de deságue do sistema de drenagem de águas pluviais. A erosão é um processo de deterioração de solos e rochas causado por agentes naturais (chuva, água, vento, gelo, clima) ou por intervenção humana, que pode levar a modificações paisagísticas, por vezes catastróficas.<br><br><b>Os processos erosivos e/ou movimentos de massa a serem identificados incluem:</b><ul><li>Deslizamentos / escorregamentos</li><li>Erosão/solapamento de margens de corpos d'água: tipo de erosão que causa a queda das encostas, afundando o solo e destruindo as bases da margem. Na Amazônia, é conhecido como "terras caídas"</li><li>Sulcos / ravinamentos / voçoroca (vossoroca ou bossoroca ou boçoroca)</li><li>Outro(s)</li></ul>`
  },
  {
    type: 'atencao',
    title: '⚠️ Atenção',
    content: 'Processos erosivos nos pontos finais de destinação podem causar danos ambientais graves e comprometer a infraestrutura urbana.'
  },
  {
    type: 'default',
    title: '6.5 Bloco TRA - Tratamento 🛠️',
    content: `No Bloco TRA, a atenção é dada à clara distinção entre tratamento de águas pluviais, esgoto e água para abastecimento. É fundamental compreender que o tratamento de águas pluviais é diferente do tratamento de esgoto sanitário e do tratamento de água para abastecimento público.`
  },
  {
    type: 'default',
    title: '6.6 Realização de Tratamento (Quesito 1)',
    content: `Verifica se o prestador de serviço realizou o tratamento das águas pluviais captadas pela rede separadora (captação e transporte somente de águas de chuva), antes da destinação final. O tratamento de águas pluviais visa remover contaminantes e melhorar a qualidade da água antes do descarte no meio ambiente.`
  },
  {
    type: 'default',
    title: '6.7 Locais de Tratamento (Quesito 2)',
    content: `Os locais onde o tratamento das águas pluviais pode ser realizado incluem:<br><br><b>Estação de Tratamento de Esgotos (ETE):</b> instalação projetada para tratar e depurar o esgoto coletado, removendo contaminantes físicos, químicos e biológicos antes de seu descarte no meio ambiente, visando minimizar impactos ambientais e proteger a saúde pública.<br><br><b>Unidade de Tratamento de Rios (UTR) / Unidades de Recuperação da Qualidade da Água de Córregos (UQR):</b> sistemas implementados diretamente em corpos d'água, como rios e córregos, para melhorar a qualidade da água. Podem incluir processos físicos, químicos ou biológicos para remover poluentes e restaurar a saúde ambiental do ecossistema aquático.`
  },
  {
    type: 'default',
    title: '6.8 Locais de Tratamento (Continuação)',
    content: `<b>Reservatório de retenção ou detenção:</b> estruturas projetadas para armazenar temporariamente grandes volumes de água provenientes de chuvas ou escoamento superficial. Entre os métodos comuns estão o tratamento preliminar (grades, cestos coletores, caixas de retenção), sedimentação e, em áreas com grande circulação de veículos, a separação de óleo e graxa. Alguns projetos também incluem soluções naturais, como jardins de chuva ou áreas com vegetação filtrante.<br><br><b>Estruturas de fitorremediação ou biorremediação:</b> soluções naturais ou biotecnológicas que utilizam plantas (fitorremediação) ou microrganismos (biorremediação) para remover, estabilizar ou degradar poluentes presentes no solo, na água ou no ar. São métodos sustentáveis e de baixo impacto ambiental.<br><br><b>Outro(s):</b> inclui tecnologias ou soluções diversas não abrangidas nas categorias acima, como wetlands construídos, barreiras filtrantes ou novas inovações no campo da sustentabilidade hídrica.`
  },
  {
    type: 'dica',
    title: '💡 Dica',
    content: 'Fitorremediação e biorremediação são métodos sustentáveis que usam plantas e microrganismos para tratar poluentes.'
  },
  {
    type: 'default',
    title: '6.9 Tipos de Tratamento (Quesito 3)',
    content: `Os tipos de tratamento que podem ser realizados são:<br><br><b>Preliminar:</b> responsável pela remoção de materiais sólidos mais grosseiros, como gradeamento e caixa de areia.<br><br><b>Sedimentação:</b> etapa focada na remoção de sólidos suspensos menores por meio de decantação.<br><br><b>Biológico:</b> envolve o uso de microrganismos para decompor matéria orgânica dissolvida e em suspensão no esgoto.<br><br><b>Outro(s):</b> pode incluir processos como Oxidação Química (uso de reagentes químicos), Membranas Filtrantes (tratamento avançado para remoção de partículas muito finas e compostos dissolvidos), e Reúso de Água (sistemas que permitem a recuperação e reutilização do efluente tratado para fins não potáveis).`
  },
  {
    type: 'exemplo',
    title: '📝 Exemplo',
    content: 'Caixas de areia são dispositivos de tratamento preliminar que removem partículas sólidas grosseiras da água pluvial.'
  },
  {
    type: 'default',
    title: '6.10 Aproveitamento do Efluente Tratado (Quesito 4)',
    content: `Verifica a existência de sistemas que utilizam a água tratada para diferentes fins, promovendo sustentabilidade. Refere-se a tecnologias e práticas que utilizam a água resultante do tratamento para diversas finalidades, reduzindo a necessidade de captação de água de fontes naturais, o que promove a sustentabilidade, a economia de recursos hídricos e contribui para a preservação ambiental.`
  },
  {
    type: 'atencao',
    title: '⚠️ Atenção',
    content: 'O aproveitamento do efluente tratado promove sustentabilidade e economia de recursos hídricos, mas deve seguir normas técnicas específicas.'
  },
  {
    type: 'resumo',
    title: '📊 Resumo Visual',
    content: `<table><tr><th>Termo</th><th>Definição</th></tr><tr><td>Rios Intermitentes</td><td>Água somente no período chuvoso</td></tr><tr><td>Rios Perenes</td><td>Água o ano todo</td></tr><tr><td>Dissipador de Energia</td><td>Estrutura que reduz velocidade da água</td></tr><tr><td>Voçoroca</td><td>Erosão profunda em sulcos</td></tr><tr><td>Fitorremediação</td><td>Uso de plantas para tratar poluentes</td></tr></table><br><b>Tipos de Tratamento:</b><br><table><tr><th>Tipo</th><th>Função</th></tr><tr><td>Preliminar</td><td>Remove sólidos grosseiros</td></tr><tr><td>Sedimentação</td><td>Remove sólidos suspensos</td></tr><tr><td>Biológico</td><td>Decompõe matéria orgânica</td></tr></table>`
  },
  {
    type: 'default',
    title: '🗨️ Dúvidas Frequentes e Como Ajudar',
    content: `<b>Dúvida Comum:</b> "Como identificar pontos finais de destinação?"<br><b>Como Ajudar:</b> Siga o percurso da água desde a captação até onde ela é finalmente descarregada (rios, lagoas, mar, etc.).<br><br><b>Dúvida Comum:</b> "Qual a diferença entre tratamento de águas pluviais e esgoto?"<br><b>Como Ajudar:</b> Águas pluviais são da chuva, esgoto é doméstico/industrial. Tratamentos são diferentes.<br><br><b>Dúvida Comum:</b> "O que é fitorremediação?"<br><b>Como Ajudar:</b> É o uso de plantas para remover poluentes da água, método sustentável e natural.`
  }
];

// Quiz do Módulo 6
const quiz6 = {
  title: '📝 Quiz do Módulo 6',
  questions: [
    {
      question: 'Qual é o objetivo principal do Bloco DES na PNSB?',
      options: [
        'Compreender o fluxo da água pluvial após a captação e os impactos no seu ponto de despejo',
        'Tratar esgoto doméstico',
        'Distribuir água potável',
        'Coletar lixo urbano'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza um rio intermitente?',
      options: [
        'Rio com água somente no período chuvoso',
        'Rio com água o ano todo',
        'Rio que nunca seca',
        'Rio subterrâneo'
      ],
      answer: 0
    },
    {
      question: 'O que é um dissipador de energia?',
      options: [
        'Estrutura que reduz a velocidade das águas para evitar erosão',
        'Dispositivo para gerar eletricidade',
        'Sistema de bombeamento',
        'Filtro de água'
      ],
      answer: 0
    },
    {
      question: 'O que é voçoroca?',
      options: [
        'Erosão profunda em sulcos que pode causar danos ambientais',
        'Tipo de lagoa natural',
        'Sistema de drenagem urbana',
        'Reservatório de água'
      ],
      answer: 0
    },
    {
      question: 'Qual é a principal diferença entre o Bloco TRA e outros tratamentos?',
      options: [
        'Distinção clara entre tratamento de águas pluviais, esgoto e água para abastecimento',
        'Todos os tratamentos são iguais',
        'Só trata esgoto doméstico',
        'Só trata água potável'
      ],
      answer: 0
    },
    {
      question: 'O que é uma ETE no contexto do tratamento de águas pluviais?',
      options: [
        'Estação de Tratamento de Esgotos que pode tratar águas pluviais',
        'Estação de Tratamento de Energia',
        'Estação de Tratamento de Água potável',
        'Estação de Tratamento de Lixo'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza uma UTR/UQR?',
      options: [
        'Sistema implementado diretamente em corpos d\'água para melhorar a qualidade da água',
        'Unidade de Tratamento de Resíduos',
        'Unidade de Tratamento de Água potável',
        'Unidade de Tratamento de Esgoto'
      ],
      answer: 0
    },
    {
      question: 'O que é fitorremediação?',
      options: [
        'Uso de plantas para remover, estabilizar ou degradar poluentes',
        'Tratamento químico da água',
        'Filtração por membranas',
        'Cloração da água'
      ],
      answer: 0
    },
    {
      question: 'Qual é o objetivo do tratamento preliminar?',
      options: [
        'Remoção de materiais sólidos mais grosseiros, como gradeamento e caixa de areia',
        'Remoção de todos os poluentes',
        'Desinfecção da água',
        'Cloração da água'
      ],
      answer: 0
    },
    {
      question: 'O que é sedimentação no tratamento de águas pluviais?',
      options: [
        'Remoção de sólidos suspensos menores por meio de decantação',
        'Filtração por membranas',
        'Cloração da água',
        'Oxidação química'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza o tratamento biológico?',
      options: [
        'Uso de microrganismos para decompor matéria orgânica dissolvida e em suspensão',
        'Uso de produtos químicos',
        'Filtração física',
        'Cloração'
      ],
      answer: 0
    },
    {
      question: 'Por que o aproveitamento do efluente tratado é importante?',
      options: [
        'Promove sustentabilidade, economia de recursos hídricos e preservação ambiental',
        'Aumenta o custo do tratamento',
        'Reduz a qualidade da água',
        'Não tem benefícios'
      ],
      answer: 0
    },
    {
      question: 'O que são "terras caídas" na Amazônia?',
      options: [
        'Erosão/solapamento de margens de corpos d\'água que causa queda das encostas',
        'Deslizamentos de terra',
        'Voçorocas',
        'Reservatórios naturais'
      ],
      answer: 0
    },
    {
      question: 'Qual é a função de um reservatório de retenção ou detenção no tratamento?',
      options: [
        'Armazenar temporariamente grandes volumes de água para tratamento',
        'Gerar energia elétrica',
        'Distribuir água potável',
        'Coletar esgoto'
      ],
      answer: 0
    },
    {
      question: 'O que inclui o tratamento "Outro(s)"?',
      options: [
        'Processos como oxidação química, membranas filtrantes e reúso de água',
        'Apenas tratamento biológico',
        'Apenas tratamento preliminar',
        'Apenas sedimentação'
      ],
      answer: 0
    }
  ]
};

// Conteúdo do Módulo 7 em cards (emojis apenas nos títulos e cards especiais)
const cards7 = [
  {
    type: 'default',
    title: '📋 Resumo',
    content: `O Módulo 7 da Pesquisa Nacional de Saneamento Básico (PNSB) do IBGE aborda a importância do monitoramento da quantidade e qualidade da água no sistema de drenagem, bem como as práticas de manutenção, melhoria e prevenção de problemas para assegurar o funcionamento adequado da infraestrutura de drenagem e manejo de águas pluviais. O módulo se divide em dois blocos principais: Monitoramento (MON) e Manutenção, Melhoria e Prevenção (MMP). O bloco MON aborda a importância de registrar a altura, vazão e qualidade da água em sistemas de drenagem, visando identificar contaminantes e assegurar que as águas pluviais não comprometam corpos hídricos receptores. O bloco MMP concentra-se em manter o sistema de drenagem em funcionamento, aprimorá-lo e prevenir problemas como o assoreamento e o descarte inadequado de resíduos.`
  },
  {
    type: 'default',
    title: '7.1 Bloco MON - Monitoramento de Nível, de Vazão e de Qualidade da Água 📊',
    content: `O Bloco MON tem como propósito registrar a altura e a vazão da água, além de analisar as características físico-químicas e biológicas para identificar contaminantes no sistema de drenagem. O objetivo é identificar nos corpos d'água e demais estruturas de drenagem possíveis contaminantes, com vistas a assegurar que as águas pluviais, ao serem captadas e conduzidas, não comprometam a qualidade dos corpos hídricos receptores e o meio ambiente urbano.`
  },
  {
    type: 'default',
    title: 'Monitoramento de Nível ou Vazão (Quesito 1)',
    content: `Refere-se ao registro contínuo da altura da água em rios, reservatórios ou outros corpos d'água (nível) e da quantidade de água que passa por um ponto específico ao longo de um período (vazão), para medir o fluxo de água de um rio em uma bacia hidrográfica.`
  },
  {
    type: 'default',
    title: 'Responsabilidade pela Realização (Quesito 1.1)',
    content: `A responsabilidade pode ser diretamente pelo prestador ou por terceiros. Se terceirizado, quem realizou pode ser:<br><br><ul><li>Órgão público</li><li>Empresa privada</li><li>Universidade</li><li>Agência Reguladora</li><li>Outro</li></ul>`
  },
  {
    type: 'dica',
    title: '💡 Dica',
    content: 'O monitoramento de nível e vazão é fundamental para entender o comportamento dos corpos d\'água e prevenir enchentes.'
  },
  {
    type: 'default',
    title: 'Locais do Monitoramento (Quesito 2)',
    content: `Os locais onde o monitoramento pode ser realizado incluem:<br><br><ul><li>Rios intermitentes: rios com água somente no período chuvoso</li><li>Rios perenes: rios com água o ano todo</li><li>Mar</li><li>Estruturas de retenção, detenção e barragens para controle de cheias</li><li>Sistema de drenagem construído (galerias, tubulação)</li><li>Outro(s)</li><li>Não sabe</li></ul>`
  },
  {
    type: 'default',
    title: 'Métodos Utilizados (Quesito 3)',
    content: `Os métodos utilizados para monitoramento podem ser:<br><br><ul><li>Régua milimétrica</li><li>Linígrafo</li><li>Sensor ultrassônico</li><li>ADCP (Perfilador Acústico por Efeito Doppler)</li><li>Medição manual</li><li>Curva-Chave (cota descarga, cota vazão): relação entre a altura da lâmina de água e a vazão de um curso d'água</li><li>Outro(s)</li><li>Não sabe</li></ul>`
  },
  {
    type: 'exemplo',
    title: '📝 Exemplo',
    content: 'A Curva-Chave é uma relação matemática entre a altura da água e a vazão, permitindo estimar vazões a partir de medições de nível.'
  },
  {
    type: 'default',
    title: 'Frequência Mínima (Quesito 4)',
    content: `A frequência mínima do monitoramento pode ser:<br><br><ul><li>Minutos</li><li>Horária</li><li>Diária</li><li>Semanal</li><li>Mensal</li><li>Não sabe</li></ul>`
  },
  {
    type: 'default',
    title: 'Monitoramento da Qualidade das Águas Pluviais (Quesito 5)',
    content: `Refere-se ao processo de coleta, análise e avaliação das características físicas, químicas, biológicas e hidrológicas das águas das chuvas que escoam pelo sistema de drenagem urbana ou natural.`
  },
  {
    type: 'default',
    title: 'Responsabilidade pela Realização da Qualidade (Quesito 5.1)',
    content: `A responsabilidade pode ser diretamente pelo prestador ou por terceiros. Se terceirizado, quem realizou pode ser:<br><br><ul><li>Órgão público</li><li>Empresa privada</li><li>Universidade</li><li>Agência Reguladora</li><li>Outro</li></ul>`
  },
  {
    type: 'default',
    title: 'Locais do Monitoramento de Qualidade (Quesito 6)',
    content: `Os locais onde o monitoramento de qualidade pode ser realizado incluem:<br><br><ul><li>Rios intermitentes</li><li>Rios perenes</li><li>Mar</li><li>Estruturas de retenção, detenção e barragens para controle de cheias</li><li>Sistema de drenagem construído (galerias, tubulação)</li><li>Outro(s)</li><li>Não sabe</li></ul>`
  },
  {
    type: 'default',
    title: 'Métodos Utilizados para Qualidade (Quesito 7)',
    content: `Os métodos utilizados para monitoramento de qualidade podem ser:<br><br><ul><li>Coleta manual e análise em laboratório: coleta amostras de água manualmente, usada em campanhas pontuais ou periódicas, como após eventos de chuva</li><li>Coleta NÃO manual e análise em laboratório: usa equipamentos automáticos programados para coletar amostras sem a necessidade de um operador</li><li>Sistema de monitoramento contínuo em tempo real (sensores, sondas etc.)</li><li>Curva-chave de parâmetros de qualidade: relação entre a altura da lâmina de água e a vazão de um curso d'água para avaliar, por exemplo, o fluxo de sedimentos</li><li>Bioindicadores: análise de organismos presentes na água que indicam alterações ambientais</li><li>Outro(s)</li><li>Não sabe</li></ul>`
  },
  {
    type: 'atencao',
    title: '⚠️ Atenção',
    content: 'O monitoramento de qualidade é essencial para identificar contaminantes e proteger os corpos hídricos receptores.'
  },
  {
    type: 'default',
    title: 'Frequência do Monitoramento de Qualidade (Quesito 8)',
    content: `A frequência do monitoramento de qualidade pode ser:<br><br><ul><li>Minutos</li><li>Horária</li><li>Diária</li><li>Semanal</li><li>Mensal</li><li>Semestral</li><li>Anual</li><li>Na onda de cheia: aumento repentino do nível da água</li><li>Outra</li><li>Não sabe</li></ul>`
  },
  {
    type: 'default',
    title: 'Parâmetros Analisados (Quesito 9)',
    content: `Os parâmetros que podem ser analisados incluem:<br><br><ul><li>Matéria orgânica (DQO/DBO)</li><li>Oxigênio dissolvido</li><li>Sólidos totais, suspensos e dissolvidos</li><li>Nutrientes (Nitrogênio, Fósforo)</li><li>Turbidez</li><li>Condutividade</li><li>Metais pesados</li><li>Óleos e graxas</li><li>Coliformes</li><li>PH</li><li>Outro(s)</li><li>Não sabe</li></ul>`
  },
  {
    type: 'default',
    title: 'Bloco MMP - Manutenção, Melhoria e Prevenção 🔧',
    content: `Este bloco foca nas atividades para manter o sistema de drenagem em funcionamento, aprimorá-lo e prevenir problemas como o assoreamento e o descarte inadequado de resíduos.`
  },
  {
    type: 'default',
    title: 'Limpeza e/ou Manutenção do Sistema de Drenagem (Quesito 1)',
    content: `Verifica se foram realizadas atividades como limpeza, desobstrução de rios, córregos, galerias, barragens e reparos em estruturas.`
  },
  {
    type: 'default',
    title: 'Atividades Desenvolvidas (Quesito 1.1)',
    content: `<b>Microdrenagem:</b><ul><li>Limpeza e desobstrução de dispositivos de captação</li><li>Varrição e limpeza de vias</li><li>Reparo das estruturas de microdrenagem</li><li>Outra(s)</li></ul><br><b>Macrodrenagem:</b><ul><li>Limpeza e desobstrução de galerias</li><li>Dragagem e limpeza de canais</li><li>Limpeza e desobstrução de estruturas de detenção, retenção e barragem para controle de cheias</li><li>Reparo das estruturas de macrodrenagem</li><li>Outra(s)</li></ul><br><b>Infraestruturas verdes:</b><ul><li>Limpeza e manutenção das Infraestruturas verdes</li><li>Reparo das Infraestruturas verdes</li><li>Cuidados com a vegetação</li><li>Outra(s)</li></ul>`
  },
  {
    type: 'dica',
    title: '💡 Dica',
    content: 'A manutenção preventiva é mais eficiente e econômica que a corretiva. Programe limpezas regulares.'
  },
  {
    type: 'default',
    title: 'Frequência da Limpeza e/ou Manutenção (Quesito 2)',
    title: '7.16 Frequência da Limpeza e/ou Manutenção (Quesito 2)',
    content: `A frequência da limpeza e/ou manutenção pode ser:<br><br><ul><li>Semanal</li><li>Quinzenal</li><li>Mensal</li><li>Semestral</li><li>Anual</li><li>Somente em caso de alerta meteorológico: quando a prefeitura intensifica a manutenção e limpeza em eventos de chuvas intensas</li><li>Somente durante o período chuvoso: manutenção realizada durante chuvas menos intensas, que NÃO acionaram o sistema de alerta</li><li>Não realiza</li></ul>`
  },
  {
    type: 'default',
    title: '7.17 Destinação dos Resíduos (Quesito 3)',
    content: `Verifica para onde são enviados os resíduos gerados pela limpeza e manutenção do sistema de drenagem:<br><br><ul><li>Lançamento em corpos d'água (oceanos, mares, lagos, rios, riachos, córregos, lagoas, poças, reservatórios e nascentes)</li><li>Aterro sanitário</li><li>Áreas livres públicas ou particulares</li><li>Vazadouro a céu aberto (lixão)</li><li>Processamento (triagem, reciclagem, incineração)</li><li>Compostagem</li><li>Outro(s)</li><li>Não sabe</li></ul>`
  },
  {
    type: 'atencao',
    title: '⚠️ Atenção',
    content: 'A destinação adequada dos resíduos é fundamental para evitar impactos ambientais e problemas de saúde pública.'
  },
  {
    type: 'default',
    title: '7.18 Problemas de Assoreamento (Quesito 4)',
    content: `Identifica a existência de acúmulo de terra, areia, argila, detritos que interferem no funcionamento do sistema de drenagem. O assoreamento pode causar alagamentos, enchentes, redução da qualidade da água e perda da vida aquática.`
  },
  {
    type: 'default',
    title: '7.19 Locais Afetados pelo Assoreamento (Quesito 4.1)',
    content: `Os locais que podem ser afetados pelo assoreamento incluem:<br><br><ul><li>Rios, arroios, ribeirões e córregos</li><li>Estruturas de retenção, detenção e barragem para controle de cheias</li><li>Sistema de drenagem construído (galerias, tubulação)</li><li>Outro(s)</li><li>Não sabe</li></ul>`
  },
  {
    type: 'exemplo',
    title: '📝 Exemplo',
    content: 'O assoreamento pode reduzir a capacidade de vazão de rios e galerias, causando alagamentos mesmo em chuvas moderadas.'
  },
  {
    type: 'default',
    title: '7.20 Medidas Preventivas para Resíduos Sólidos (Quesito 5)',
    content: `Verifica se o prestador adota ações para evitar que resíduos sólidos atinjam os sistemas de drenagem.`
  },
  {
    type: 'default',
    title: '7.21 Tipos de Medidas Preventivas (Quesito 5.1)',
    content: `Os tipos de medidas preventivas podem incluir:<br><br><ul><li>Caixa de areia: dispositivo que recolhe detritos e sólidos</li><li>Gradeamento: instalação de grades ou mantas para reter sedimentos e resíduos</li><li>Ecobarreiras: estruturas flutuantes que bloqueiam o escoamento de resíduos sólidos</li><li>Varrição preventiva</li><li>Orientações para acondicionamento adequado dos resíduos sólidos (evitar descarte nas calçadas)</li><li>Outra(s)</li></ul>`
  },
  {
    type: 'default',
    title: '7.22 Controle de Geração de Sedimentos em Obras (Quesito 6)',
    content: `Avalia a atuação do prestador no controle de boas práticas em obras para evitar o fluxo de sedimentos que possam entupir bocas de lobo e galerias.`
  },
  {
    type: 'default',
    title: '7.23 Ações para Controle de Sedimentos (Quesito 6.1)',
    content: `As ações para controle de sedimentos em obras podem incluir:<br><br><ul><li>Grades e caixas de sedimentação nas redes pluviais</li><li>Proteção nos acessos das obras</li><li>Estabilização com camada de britas</li><li>Sistema lava-rodas</li><li>Estabilização de solos expostos em superfícies</li><li>Controle da geração de poeira nas atividades construtivas e vias de circulação de veículos</li><li>Proteção do perímetro do canteiro de obras</li><li>Cercas de membrana de geotêxtil</li><li>Assentamento de fiadas de bloco de concreto ao longo do perímetro</li><li>Leiras: monte de terra ou material que funciona como barreira</li><li>Diques de contenção com sacarias</li><li>Outra(s)</li></ul>`
  },
  {
    type: 'default',
    title: '7.24 Ampliação e/ou Melhoria do Sistema de Drenagem (Quesito 7)',
    content: `Refere-se a obras realizadas ou em andamento no período entre 2021 e 2024 (últimos 4 anos).`
  },
  {
    type: 'default',
    title: '7.25 Tipos de Ampliação e/ou Melhoria (Quesito 7.1)',
    content: `Os tipos de ampliação e/ou melhoria podem incluir:<br><br><ul><li>Canalização de cursos d'água naturais: modificação do leito do rio, podendo ter consequências negativas como aumento da velocidade da água</li><li>Expansão ou requalificação do sistema de microdrenagem em bairros antigos</li><li>Expansão ou requalificação do sistema de microdrenagem em bairros novos / loteamentos</li><li>Implantação de galerias pluviais visando aumentar a capacidade da rede existente</li><li>Implantação de estruturas de detenção/retenção para controle / amortecimento de cheias ("piscinão")</li><li>Renaturalização / Restauração ou Recuperação / Revitalização de cursos d'água: restaurar funções ecológicas e hidrológicas, tornando rios "vivos"</li><li>Tamponamento de cursos d'água naturais: canalização do rio que o "enterra" em galerias ou tubulações</li><li>Implantação de estruturas de contenção de enchentes</li><li>Outro(s)</li></ul>`
  },
  {
    type: 'resumo',
    title: '📊 Resumo Visual',
    content: `<table><tr><th>Bloco</th><th>Foco Principal</th></tr><tr><td>MON</td><td>Monitoramento de nível, vazão e qualidade da água</td></tr><tr><td>MMP</td><td>Manutenção, melhoria e prevenção de problemas</td></tr></table><br><b>Métodos de Monitoramento:</b><br><table><tr><th>Método</th><th>Descrição</th></tr><tr><td>Régua milimétrica</td><td>Medição manual de nível</td></tr><tr><td>Sensor ultrassônico</td><td>Medição automática de nível</td></tr><tr><td>ADCP</td><td>Perfilador acústico para vazão</td></tr><tr><td>Curva-Chave</td><td>Relação nível-vazão</td></tr></table><br><b>Medidas Preventivas:</b><br><table><tr><th>Medida</th><th>Função</th></tr><tr><td>Caixa de areia</td><td>Retém detritos e sólidos</td></tr><tr><td>Ecobarreiras</td><td>Bloqueia resíduos sólidos</td></tr><tr><td>Gradeamento</td><td>Retém sedimentos</td></tr></table>`
  },
  {
    type: 'default',
    title: '🗨️ Dúvidas Frequentes e Como Ajudar',
    content: `<b>Dúvida Comum:</b> "Qual a diferença entre monitoramento de nível e vazão?"<br><b>Como Ajudar:</b> Nível é a altura da água, vazão é a quantidade que passa por um ponto. Ambos são importantes para prevenir enchentes.<br><br><b>Dúvida Comum:</b> "Por que monitorar a qualidade da água?"<br><b>Como Ajudar:</b> Para identificar contaminantes e proteger os corpos hídricos receptores e o meio ambiente.<br><br><b>Dúvida Comum:</b> "O que é assoreamento?"<br><b>Como Ajudar:</b> É o acúmulo de terra, areia e detritos que reduz a capacidade de vazão e pode causar alagamentos.`
  }
];

// Quiz do Módulo 7
const quiz7 = {
  title: '📝 Quiz do Módulo 7',
  questions: [
    {
      question: 'Qual é o propósito principal do Bloco MON na PNSB?',
      options: [
        'Registrar altura e vazão da água e analisar características físico-químicas para identificar contaminantes',
        'Construir novas galerias pluviais',
        'Distribuir água potável',
        'Coletar lixo urbano'
      ],
      answer: 0
    },
    {
      question: 'O que é monitoramento de nível?',
      options: [
        'Registro contínuo da altura da água em rios, reservatórios ou outros corpos d\'água',
        'Medição da temperatura da água',
        'Análise da qualidade da água',
        'Controle de poluição'
      ],
      answer: 0
    },
    {
      question: 'O que é monitoramento de vazão?',
      options: [
        'Medição da quantidade de água que passa por um ponto específico ao longo de um período',
        'Medição da velocidade do vento',
        'Análise de sedimentos',
        'Controle de qualidade'
      ],
      answer: 0
    },
    {
      question: 'O que é uma Curva-Chave?',
      options: [
        'Relação entre a altura da lâmina de água e a vazão de um curso d\'água',
        'Tipo de sensor ultrassônico',
        'Dispositivo de medição manual',
        'Sistema de alerta'
      ],
      answer: 0
    },
    {
      question: 'Qual é o objetivo do monitoramento da qualidade das águas pluviais?',
      options: [
        'Identificar contaminantes e assegurar que as águas não comprometam corpos hídricos receptores',
        'Aumentar a velocidade da água',
        'Reduzir custos de tratamento',
        'Melhorar a aparência dos rios'
      ],
      answer: 0
    },
    {
      question: 'O que são bioindicadores no monitoramento de qualidade?',
      options: [
        'Organismos presentes na água que indicam alterações ambientais',
        'Sensores eletrônicos',
        'Dispositivos de medição automática',
        'Equipamentos de laboratório'
      ],
      answer: 0
    },
    {
      question: 'Qual parâmetro NÃO é analisado no monitoramento de qualidade?',
      options: [
        'Velocidade do vento',
        'Matéria orgânica (DQO/DBO)',
        'Oxigênio dissolvido',
        'Turbidez'
      ],
      answer: 0
    },
    {
      question: 'O que é o Bloco MMP?',
      options: [
        'Manutenção, Melhoria e Prevenção de problemas no sistema de drenagem',
        'Monitoramento de Poluição',
        'Medição de Parâmetros',
        'Manutenção Preventiva'
      ],
      answer: 0
    },
    {
      question: 'O que inclui a manutenção de microdrenagem?',
      options: [
        'Limpeza e desobstrução de dispositivos de captação, varrição de vias, reparos',
        'Apenas limpeza de rios',
        'Apenas construção de galerias',
        'Apenas monitoramento de qualidade'
      ],
      answer: 0
    },
    {
      question: 'O que é assoreamento?',
      options: [
        'Acúmulo de terra, areia, argila, detritos que interferem no funcionamento do sistema de drenagem',
        'Tipo de tratamento de água',
        'Sistema de monitoramento',
        'Dispositivo de captação'
      ],
      answer: 0
    },
    {
      question: 'Qual é uma consequência do assoreamento?',
      options: [
        'Alagamentos, enchentes, redução da qualidade da água e perda da vida aquática',
        'Aumento da capacidade de vazão',
        'Melhoria da qualidade da água',
        'Redução de custos de manutenção'
      ],
      answer: 0
    },
    {
      question: 'O que é uma ecobarreira?',
      options: [
        'Estrutura flutuante que bloqueia o escoamento de resíduos sólidos',
        'Tipo de galeria pluvial',
        'Sistema de bombeamento',
        'Dispositivo de medição'
      ],
      answer: 0
    },
    {
      question: 'O que é um sistema lava-rodas?',
      options: [
        'Sistema para limpar pneus de veículos e evitar sedimentos nas vias',
        'Dispositivo de medição de vazão',
        'Tipo de galeria pluvial',
        'Sistema de tratamento de água'
      ],
      answer: 0
    },
    {
      question: 'O que é renaturalização de cursos d\'água?',
      options: [
        'Restaurar funções ecológicas e hidrológicas, tornando rios "vivos"',
        'Canalizar rios urbanos',
        'Construir barragens',
        'Instalar galerias pluviais'
      ],
      answer: 0
    },
    {
      question: 'Por que a manutenção preventiva é importante?',
      options: [
        'É mais eficiente e econômica que a manutenção corretiva',
        'Aumenta os custos operacionais',
        'Reduz a qualidade do serviço',
        'Não tem benefícios'
      ],
      answer: 0
    }
  ]
};

// Conteúdo do Módulo 8: Manejo de Águas Pluviais em Áreas Rurais (Bloco RUR) e Educação Ambiental (Bloco EDU)
const cards8 = [
  {
    type: "content",
    title: "📋 Introdução ao Módulo 8",
    content: `
      <p>Este módulo aborda as práticas e soluções de drenagem e manejo de águas pluviais especificamente em contextos rurais, bem como a importância e as ações de educação ambiental relacionadas ao saneamento básico e à gestão de águas pluviais.</p>
      
      <p>O Bloco RUR explora as soluções e serviços implementados para gerenciar águas da chuva em contextos rurais, abrangendo vias de acesso, cursos d'água e domicílios, com destaque para técnicas como barraginhas e diferentes tipos de pavimentação.</p>
      
      <p>O Bloco EDU, por sua vez, investiga as ações de educação ambiental realizadas para conscientizar sobre a importância da conservação e sustentabilidade, abordando temas como prevenção de desastres e renaturalização de rios, e descrevendo diversas formas de execução dessas iniciativas.</p>
    `
  },
  {
    type: "content",
    title: "8.1. Bloco RUR - Manejo de Águas Pluviais em Áreas Rurais",
    content: `
      <p>Este bloco visa compreender as soluções e serviços implementados para o manejo das águas pluviais em áreas rurais, incluindo vias, cursos d'água e domicílios.</p>
    `
  },
  {
    type: "content",
    title: "Serviços Realizados em Áreas Rurais (Quesito 1)",
    content: `
      <p>Verifica se o prestador realizou algum serviço nas ruas/estradas (pavimentadas ou não), ou em rios, córregos, igarapés presentes na(s) área(s) rural(is) do município pesquisado em 2024.</p>
      
      <p><strong>Opções de resposta:</strong></p>
      <ul>
        <li>Sim</li>
        <li>Não (encerra o bloco)</li>
        <li>Não se aplica (município não possui área rural - encerra o bloco)</li>
      </ul>
    `
  },
  {
    type: "content",
    title: "Serviços de Manejo nas Vias de Acesso (Quesito 2)",
    content: `
      <p>Avalia se houve serviços de manejo de águas pluviais, como canalização, instalação de barraginhas e outros, nas vias de acesso às áreas rurais, não considerando apenas o nivelamento por máquina (patrola).</p>
      
      <p><strong>Vias de acesso:</strong> Todo o sistema viário, com ou sem pavimentação, que permite acessar as comunidades rurais, sistema viário externo às comunidades, estradas vicinais etc.</p>
      
      <p><strong>Barraginhas:</strong> Pequenas bacias que capturam enxurradas e permitem que as chuvas infiltrem nos terrenos, conservando a água e o solo. É uma tecnologia social de baixo custo com benefícios ambientais, sociais e econômicos.</p>
    `
  },
  {
    type: "content",
    title: "Tipos de Serviço (Quesito 2.1)",
    content: `
      <p><strong>Tipos de serviço:</strong></p>
      <ul>
        <li><strong>Adequação do abaulamento do leito da via:</strong> Técnica que deixa a parte central das vias mais elevada que as laterais, permitindo o escoamento da água da chuva, evitando a formação de poças e a erosão</li>
        <li><strong>Canalização dos cursos d'água naturais</strong></li>
        <li><strong>Expansão do sistema de microdrenagem</strong></li>
        <li><strong>Implantação de estruturas de retenção / detenção / amortecimento próximas às vias (barraginhas, por exemplo)</strong></li>
        <li><strong>Implantação de galerias pluviais</strong></li>
        <li><strong>Implantação e/ou manutenção do sistema de microdrenagem (sarjetas, bueiros etc.)</strong></li>
        <li><strong>Renaturalização / Restauração ou Recuperação / Revitalização de cursos d'água:</strong> Visam restaurar as funções ecológicas e hidrológicas dos cursos de água, transformando-os em rios vivos, com ecossistemas sadios, e melhorar a qualidade e funcionalidade dos corpos de água</li>
        <li><strong>Tamponamento de cursos d'água naturais (canalização através de galerias fechadas):</strong> Tipo de canalização onde o rio é "enterrado" em galerias ou tubulações</li>
        <li><strong>Outro(s)</strong></li>
      </ul>
    `
  },
  {
    type: "exemplo",
    title: "📝 Exemplo Prático - Barraginhas",
    content: `
      <p><strong>Exemplo de Barraginhas:</strong> Em uma comunidade rural, o prestador de serviço implementou barraginhas ao longo das vias de acesso. Estas pequenas bacias capturam as enxurradas durante as chuvas, permitindo que a água infiltre no solo, conservando tanto a água quanto o solo. Esta tecnologia social de baixo custo trouxe benefícios ambientais (redução da erosão), sociais (melhoria da qualidade de vida) e econômicos (redução de custos com manutenção das vias).</p>
    `
  },
  {
    type: "content",
    title: "Pavimentação nas Vias de Acesso Rurais (Quesito 3)",
    content: `
      <p>Verifica se existia algum tipo de pavimentação nas vias de acesso às áreas rurais sob responsabilidade do prestador de serviço (instalação e/ou operação e/ou manutenção) em 2024.</p>
    `
  },
  {
    type: "content",
    title: "Tipos de Pavimento (Quesito 3.1)",
    content: `
      <p><strong>Tipos de pavimento:</strong></p>
      <ul>
        <li><strong>Pavimento impermeável:</strong> de asfalto, de peças pré-moldadas de concreto, de concreto contínuo</li>
        <li><strong>Pavimento permeável:</strong> de asfalto poroso, de peças pré-moldadas de concreto poroso ou com juntas alargadas, de concreto poroso contínuo</li>
        <li><strong>Paralelepípedo:</strong> Pavimento permeável, sem juntas de cimento, que permite a infiltração da água da chuva</li>
        <li><strong>Solo-cimento:</strong> Mistura de solo, cimento e água, econômico e ecológico</li>
        <li><strong>Outro(s)</strong></li>
        <li><strong>Não sabe</strong></li>
      </ul>
    `
  },
  {
    type: "atencao",
    title: "⚠️ Atenção - Tipos de Pavimentação",
    content: `
      <p>É essencial diferenciar entre os diferentes tipos de pavimentação (permeável vs impermeável) e compreender como cada um impacta o manejo de águas pluviais em áreas rurais.</p>
    `
  },
  {
    type: "content",
    title: "Material de Pavimentação de Reúso/Reciclagem (Quesito 4)",
    content: `
      <p>Verifica se o material utilizado na pavimentação das vias de acesso às áreas rurais era proveniente de reúso/reciclagem.</p>
    `
  },
  {
    type: "content",
    title: "Materiais de Reúso/Reciclagem (Quesito 4.1)",
    content: `
      <p><strong>Materiais:</strong></p>
      <ul>
        <li><strong>Resíduos de construção</strong></li>
        <li><strong>Borracha, pneu (asfalto-borracha)</strong></li>
        <li><strong>Escória (resíduo industrial):</strong> Subproduto da produção de ferro e aço, usado na construção de estradas</li>
        <li><strong>Outro(s)</strong></li>
      </ul>
    `
  },
  {
    type: "content",
    title: "Soluções em Vias Internas de Comunidades Rurais (Quesito 5)",
    content: `
      <p>Avalia se o prestador de serviço implementou soluções que favoreçam o aproveitamento, a infiltração ou o armazenamento das águas da chuva nas vias internas das comunidades rurais (vias de ligação entre as residências pertencentes a uma mesma localidade).</p>
    `
  },
  {
    type: "content",
    title: "Soluções em Vias Internas (Quesito 5.1)",
    content: `
      <p><strong>Soluções:</strong></p>
      <ul>
        <li><strong>Adequação do abaulamento do leito da via</strong></li>
        <li><strong>Implantação e/ou manutenção de dispositivos para coleta, condução das águas pluviais (sarjetas, canaletas e outros)</strong></li>
        <li><strong>Implantação e/ou manutenção de bacias de contenção próximas às vias (barraginhas, outros)</strong></li>
        <li><strong>Melhorias e/ou adequações nas soluções de Manejo de Águas Pluviais já existentes</strong></li>
        <li><strong>Orientação e apoio à comunidade para a implantação e/ou manutenção de soluções de drenagem pluvial:</strong> Inclui cursos de capacitação para que os próprios moradores construam e gerenciem as soluções</li>
        <li><strong>Implantação e/ou manutenção de reservatórios coletivos (para captação de água de chuva):</strong> Atendem toda a comunidade, não apenas um domicílio</li>
        <li><strong>Outra(s)</strong></li>
      </ul>
    `
  },
  {
    type: "content",
    title: "Soluções em Peridomicílios Rurais (Quesito 6)",
    content: `
      <p>Verifica se o prestador de serviço implementou soluções que favoreçam o aproveitamento, a infiltração e o armazenamento das águas da chuva nos peridomicílios (área externa no entorno do domicílio, dentro da propriedade) em 2024.</p>
    `
  },
  {
    type: "content",
    title: "Soluções em Peridomicílios (Quesito 6.1)",
    content: `
      <p><strong>Soluções:</strong></p>
      <ul>
        <li><strong>Implantação e/ou manutenção de técnicas infiltrantes:</strong> trincheira de infiltração, jardim de chuva, canteiro pluvial etc.</li>
        <li><strong>Implantação e/ou manutenção de reservatórios domiciliares (para captação de água de chuva)</strong></li>
        <li><strong>Melhorias e/ou adequações nas soluções de manejo de águas pluviais preexistentes</strong></li>
        <li><strong>Orientação e apoio aos moradores para a implantação e/ou manutenção de soluções de drenagem</strong></li>
        <li><strong>Outra(s)</strong></li>
      </ul>
    `
  },
  {
    type: "content",
    title: "Aproveitamento de Águas Pluviais em Áreas Rurais (Quesito 7)",
    content: `
      <p>Avalia se o prestador de serviço orientou, instalou ou fez manutenção de dispositivos para aproveitamento de águas pluviais no atendimento das áreas rurais.</p>
    `
  },
  {
    type: "content",
    title: "Estratégias de Aproveitamento (Quesito 7.1)",
    content: `
      <p><strong>Estratégias:</strong></p>
      <ul>
        <li><strong>Promoção do uso racional da água</strong></li>
        <li><strong>Uso de cisternas domiciliares de placas para acumular água para o consumo humano</strong></li>
        <li><strong>Uso de outros tipos de cisternas domiciliares para acumular água para o consumo humano (plásticas, fibra de vidro, com filtro e boa vedação)</strong></li>
        <li><strong>Uso de outros modelos de cisternas para os demais usos relacionados ao saneamento domiciliar (dessedentação de animais, limpeza etc.)</strong></li>
        <li><strong>Outra(s)</strong></li>
      </ul>
    `
  },
  {
    type: "content",
    title: "Gestão Compartilhada das Águas Pluviais Rurais (Quesito 8)",
    content: `
      <p>Verifica se o prestador de serviço participou da gestão compartilhada das águas pluviais nas áreas rurais em 2024. A gestão compartilhada é a atuação conjunta entre governos, comunidades e organizações para orientar técnicas de drenagem e/ou ações de educação ambiental.</p>
    `
  },
  {
    type: "content",
    title: "Formas de Participação (Quesito 8.1)",
    content: `
      <p><strong>Formas de participação:</strong></p>
      <ul>
        <li><strong>Ações de orientação, instalação, operação ou manutenção dos dispositivos instalados nos peridomicílios</strong></li>
        <li><strong>Ações de instalação, operação e manutenção dos dispositivos instalados no sistema viário interno</strong></li>
        <li><strong>Ações de educação ambiental</strong></li>
        <li><strong>Ações de capacitação para apropriação das técnicas de drenagem utilizadas:</strong> Oferta ou participação em cursos para compreensão e aplicação de técnicas em manejo de águas pluviais</li>
        <li><strong>Outra(s)</strong></li>
      </ul>
    `
  },
  {
    type: "dica",
    title: "💡 Dica - Bloco RUR",
    content: `
      <p>O Bloco RUR é fundamental para compreender como as práticas de manejo de águas pluviais se aplicam especificamente em contextos rurais. A gestão compartilhada das águas pluviais rurais representa uma abordagem integrada que envolve governos, comunidades e organizações, destacando a importância da participação social e da capacitação técnica.</p>
    `
  },
  {
    type: "content",
    title: "8.2. Bloco EDU - Educação Ambiental",
    content: `
      <p>Este bloco investiga a existência e a natureza das ações de educação ambiental realizadas pelo prestador, com foco na conscientização sobre a importância da conservação, sustentabilidade e respeito ao meio ambiente, incluindo programas, projetos e campanhas.</p>
      
      <p><strong>Conceito de Educação Ambiental:</strong> Processos que promovem a conscientização sobre a importância da conservação, sustentabilidade e respeito ao meio ambiente. Envolve programas, projetos e ações, realizados em parceria ou não com órgãos da educação municipal e/ou outros setores, por meio de campanhas de sensibilização e esclarecimento, visando ampliar a consciência ambiental da população.</p>
      
      <p><strong>Importância no MAP:</strong> Sensibiliza para as relações da drenagem com desastres, promove consciência, estimula a redução da impermeabilização e a infiltração local.</p>
    `
  },
  {
    type: "content",
    title: "Projetos ou Ações de Educação Ambiental (Quesito 1)",
    content: `
      <p>Verifica se o prestador de serviço realizou, no município pesquisado, projeto ou ação de educação ambiental que aborde desastres como enchentes, inundações, poluição de rios, saúde e natureza, mudanças climáticas, saneamento ou temas semelhantes, em 2024.</p>
    `
  },
  {
    type: "content",
    title: "Frequência das Ações (Quesito 1.1)",
    content: `
      <p><strong>Frequência:</strong></p>
      <ul>
        <li><strong>Contínua (regular, constante)</strong></li>
        <li><strong>Eventual/esporádica (em datas específicas, como Dia da Árvore, Dia do Meio Ambiente, Dia da Água etc.)</strong></li>
      </ul>
    `
  },
  {
    type: "content",
    title: "Formação e Experiência do Responsável (Quesito 2)",
    content: `
      <p>Avalia se o(a) responsável possuía formação na área ambiental e/ou realizou outros projetos ou ações em educação ambiental. A educação ambiental abrange diversas formações acadêmicas e experiências práticas em projetos e ações, envolvendo diferentes setores.</p>
    `
  },
  {
    type: "content",
    title: "Temas Desenvolvidos (Quesito 3)",
    content: `
      <p>Lista os temas abordados nos projetos ou ações de educação ambiental para o manejo adequado de águas pluviais em 2024.</p>
    `
  },
  {
    type: "content",
    title: "Temas Específicos (Quesito 3.1)",
    content: `
      <p><strong>Temas desenvolvidos:</strong></p>
      <ul>
        <li><strong>Mitigação e adaptação às mudanças climáticas e prevenção aos desastres:</strong> Redução de emissões, redução de impactos e ações de precaução</li>
        <li><strong>Importância do manejo de águas pluviais no saneamento básico:</strong> Relevância da gestão das águas pluviais</li>
        <li><strong>Renaturalização, ecologia, despoluição e revitalização dos rios:</strong> Restaurar funções ecológicas e hidrológicas, melhorar a qualidade e funcionalidade dos corpos d'água</li>
        <li><strong>Drenagem sustentável através de soluções baseadas na natureza e Infraestruturas verdes:</strong> Drenagem ecológica e infraestruturas sustentáveis</li>
        <li><strong>Arborização e áreas verdes na saúde e bem-estar humano e na qualidade dos mananciais:</strong> Impacto da vegetação na saúde e nos recursos hídricos</li>
        <li><strong>Urbanização, projetos de uso e ocupação do solo e o impacto na rede de drenagem de águas pluviais:</strong> Consequências da edificação das cidades e impermeabilização na drenagem</li>
        <li><strong>Desastres e fatores naturais (meteorológicos, geotécnicos) e antrópicos:</strong> Calamidades e influências naturais e humanas</li>
        <li><strong>Ciclo hidrológico e ciclo da água no saneamento:</strong> Processo de troca constante da água e a relação do saneamento com os recursos hídricos</li>
        <li><strong>Disposição inadequada dos resíduos sólidos, fontes de poluição dos mananciais e sistema de drenagem de águas pluviais:</strong> Contaminação de fontes de água e obstrução de redes</li>
        <li><strong>Gestão participativa da água, participação social e comitês de bacia:</strong> Administração compartilhada e engajamento social</li>
        <li><strong>Outro(s)</strong></li>
      </ul>
    `
  },
  {
    type: "content",
    title: "Formas de Realização dos Projetos/Ações (Quesito 4)",
    content: `
      <p>Descreve como os projetos ou ações de educação ambiental foram realizados em 2024.</p>
    `
  },
  {
    type: "content",
    title: "Formas de Execução (Quesito 4.1)",
    content: `
      <p><strong>Formas de realização:</strong></p>
      <ul>
        <li><strong>Campanhas de sensibilização / mobilização social</strong></li>
        <li><strong>Capacitação de profissionais de educação, agentes de saúde, agentes comunitários etc.</strong></li>
        <li><strong>Inserção do tema no programa de educação ambiental nas escolas</strong></li>
        <li><strong>Mutirões de limpeza</strong></li>
        <li><strong>Promoção de palestras temáticas; oficinas e/ou seminários sobre temas de interesse direto ou indireto sobre drenagem</strong></li>
        <li><strong>Rodas de conversa (método de participação coletiva, para qualquer faixa etária)</strong></li>
        <li><strong>Veiculação em internet, redes sociais, rádio, tv, jornal, folhetos e cartazes</strong></li>
        <li><strong>Utilização de grupos artísticos orientados</strong></li>
        <li><strong>Visitas de agentes públicos a residências, empresas, órgãos públicos etc.</strong></li>
        <li><strong>Visitas guiadas a equipamentos/estruturas do sistema de drenagem</strong></li>
        <li><strong>Outro(s)</strong></li>
      </ul>
    `
  },
  {
    type: "dica",
    title: "💡 Dica Importante",
    content: `
      <p>O Bloco RUR e o Bloco EDU são fundamentais para compreender como as práticas de manejo de águas pluviais se aplicam especificamente em contextos rurais e como a educação ambiental pode contribuir para a conscientização e implementação de soluções sustentáveis.</p>
      
      <p>A gestão compartilhada das águas pluviais rurais representa uma abordagem integrada que envolve governos, comunidades e organizações, destacando a importância da participação social e da capacitação técnica.</p>
    `
  },
  {
    type: "atencao",
    title: "⚠️ Atenção",
    content: `
      <p>É essencial diferenciar entre os diferentes tipos de pavimentação (permeável vs impermeável) e compreender como cada um impacta o manejo de águas pluviais em áreas rurais.</p>
      
      <p>A educação ambiental no contexto do MAP deve abordar temas específicos relacionados à drenagem, desastres naturais e sustentabilidade, não apenas questões gerais de meio ambiente.</p>
    `
  },
  {
    type: "exemplo",
    title: "📝 Exemplo Prático",
    content: `
      <p><strong>Exemplo de Barraginhas:</strong> Em uma comunidade rural, o prestador de serviço implementou barraginhas ao longo das vias de acesso. Estas pequenas bacias capturam as enxurradas durante as chuvas, permitindo que a água infiltre no solo, conservando tanto a água quanto o solo. Esta tecnologia social de baixo custo trouxe benefícios ambientais (redução da erosão), sociais (melhoria da qualidade de vida) e econômicos (redução de custos com manutenção das vias).</p>
      
      <p><strong>Exemplo de Educação Ambiental:</strong> O prestador realizou campanhas de sensibilização sobre a importância do manejo adequado de águas pluviais, incluindo palestras sobre prevenção de desastres, oficinas sobre técnicas de drenagem sustentável e mutirões de limpeza de cursos d'água, envolvendo a comunidade local.</p>
    `
  },
  {
    type: "duvidas",
    title: "❓ Dúvidas Frequentes",
    content: `
      <div class="faq-item">
        <h4>Qual a diferença entre pavimento permeável e impermeável?</h4>
        <p>Pavimento permeável permite a infiltração da água da chuva no solo, enquanto o impermeável impede essa infiltração, direcionando toda a água para sistemas de drenagem.</p>
      </div>
      
      <div class="faq-item">
        <h4>O que são barraginhas?</h4>
        <p>Barraginhas são pequenas bacias que capturam enxurradas e permitem que as chuvas infiltrem nos terrenos, conservando a água e o solo. É uma tecnologia social de baixo custo.</p>
      </div>
      
      <div class="faq-item">
        <h4>Como funciona a gestão compartilhada das águas pluviais rurais?</h4>
        <p>É a atuação conjunta entre governos, comunidades e organizações para orientar técnicas de drenagem e/ou ações de educação ambiental, promovendo a participação social.</p>
      </div>
      
      <div class="faq-item">
        <h4>Quais são os principais temas da educação ambiental no MAP?</h4>
        <p>Incluem mitigação de mudanças climáticas, manejo de águas pluviais, renaturalização de rios, drenagem sustentável, arborização, urbanização e gestão participativa da água.</p>
      </div>
    `
  },
  {
    type: "resumo",
    title: "📊 Resumo Visual",
    content: `
      <div class="resumo-grid">
        <div class="resumo-item">
          <h4>Bloco RUR - Áreas Rurais</h4>
          <ul>
            <li>Serviços em vias de acesso</li>
            <li>Tipos de pavimentação</li>
            <li>Soluções em comunidades rurais</li>
            <li>Peridomicílios rurais</li>
            <li>Aproveitamento de águas pluviais</li>
            <li>Gestão compartilhada</li>
          </ul>
        </div>
        <div class="resumo-item">
          <h4>Bloco EDU - Educação Ambiental</h4>
          <ul>
            <li>Projetos e ações educativas</li>
            <li>Formação dos responsáveis</li>
            <li>Temas desenvolvidos</li>
            <li>Formas de realização</li>
            <li>Frequência das ações</li>
            <li>Participação social</li>
          </ul>
        </div>
      </div>
    `
  }
];

const quiz8 = {
  title: '📝 Quiz do Módulo 8',
  questions: [
    {
      question: "O que são barraginhas no contexto do manejo de águas pluviais em áreas rurais?",
      options: [
        "Grandes reservatórios para armazenamento de água potável",
        "Pequenas bacias que capturam enxurradas e permitem infiltração",
        "Sistemas de canalização subterrânea",
        "Estruturas de tratamento de esgoto"
      ],
      answer: 1
    },
    {
      question: "Qual é o conceito de vias de acesso no Bloco RUR?",
      options: [
        "Apenas estradas pavimentadas",
        "Todo o sistema viário que permite acessar comunidades rurais",
        "Exclusivamente estradas vicinais",
        "Apenas vias internas das comunidades"
      ],
      answer: 1
    },
    {
      question: "O que significa adequação do abaulamento do leito da via?",
      options: [
        "Pavimentação completa da via",
        "Técnica que deixa a parte central das vias mais elevada que as laterais",
        "Instalação de galerias pluviais",
        "Construção de barraginhas"
      ],
      answer: 1
    },
    {
      question: "Qual tipo de pavimento permite a infiltração da água da chuva?",
      options: [
        "Pavimento impermeável de asfalto",
        "Pavimento permeável de asfalto poroso",
        "Concreto contínuo",
        "Apenas pavimentos de concreto"
      ],
      answer: 1
    },
    {
      question: "O que são peridomicílios no contexto rural?",
      options: [
        "Apenas a área interna da residência",
        "Área externa no entorno do domicílio, dentro da propriedade",
        "Vias de acesso às comunidades",
        "Cursos d'água naturais"
      ],
      answer: 1
    },
    {
      question: "Qual é o objetivo da renaturalização de cursos d'água?",
      options: [
        "Apenas melhorar a aparência visual",
        "Restaurar funções ecológicas e hidrológicas dos cursos de água",
        "Aumentar a velocidade do escoamento",
        "Reduzir custos de manutenção"
      ],
      answer: 1
    },
    {
      question: "O que é gestão compartilhada das águas pluviais rurais?",
      options: [
        "Apenas responsabilidade do governo federal",
        "Atuação conjunta entre governos, comunidades e organizações",
        "Exclusivamente responsabilidade das comunidades",
        "Apenas ações do prestador de serviço"
      ],
      answer: 1
    },
    {
      question: "Qual é o conceito de Educação Ambiental no contexto do MAP?",
      options: [
        "Apenas palestras sobre meio ambiente",
        "Processos que promovem conscientização sobre conservação e sustentabilidade",
        "Exclusivamente campanhas publicitárias",
        "Apenas atividades escolares"
      ],
      answer: 1
    },
    {
      question: "Qual a importância da educação ambiental no MAP?",
      options: [
        "Apenas para cumprir exigências legais",
        "Sensibilizar para relações da drenagem com desastres e promover consciência",
        "Exclusivamente para reduzir custos",
        "Apenas para melhorar a imagem do prestador"
      ],
      answer: 1
    },
    {
      question: "O que significa tamponamento de cursos d'água naturais?",
      options: [
        "Construção de barragens",
        "Canalização através de galerias fechadas onde o rio é 'enterrado'",
        "Limpeza dos cursos d'água",
        "Instalação de filtros"
      ],
      answer: 1
    },
    {
      question: "Qual é o objetivo das cisternas domiciliares em áreas rurais?",
      options: [
        "Apenas armazenar água potável da rede",
        "Acumular água de chuva para consumo humano e outros usos",
        "Tratar esgoto doméstico",
        "Apenas para irrigação"
      ],
      answer: 1
    },
    {
      question: "O que são técnicas infiltrantes no contexto rural?",
      options: [
        "Apenas sistemas de drenagem convencional",
        "Trincheira de infiltração, jardim de chuva, canteiro pluvial",
        "Exclusivamente galerias pluviais",
        "Apenas sarjetas e bueiros"
      ],
      answer: 1
    },
    {
      question: "Qual é o objetivo da educação ambiental sobre mudanças climáticas no MAP?",
      options: [
        "Apenas informar sobre o fenômeno",
        "Mitigação e adaptação às mudanças climáticas e prevenção aos desastres",
        "Exclusivamente para cumprir protocolos internacionais",
        "Apenas para sensibilização geral"
      ],
      answer: 1
    },
    {
      question: "O que significa renaturalização de rios no contexto da educação ambiental?",
      options: [
        "Apenas limpeza dos rios",
        "Restaurar funções ecológicas e hidrológicas, melhorar qualidade dos corpos d'água",
        "Exclusivamente despoluição",
        "Apenas arborização das margens"
      ],
      answer: 1
    },
    {
      question: "Qual é o papel das rodas de conversa na educação ambiental?",
      options: [
        "Método de participação coletiva para qualquer faixa etária",
        "Apenas para palestras formais",
        "Exclusivamente para especialistas",
        "Apenas para crianças"
      ],
      answer: 1
    }
  ]
};

const modules = {
  1: {
    title: 'Módulo 1: Introdução à PNSB e Fundamentos',
    cards: cards,
    quiz: quiz1
  },
  2: {
    title: 'Módulo 2: Caracterização do Prestador',
    cards: cards2,
    quiz: quiz2
  },
  3: {
    title: 'Módulo 3: Aspectos Legais',
    cards: cards3,
    quiz: quiz3
  },
  4: {
    title: 'Módulo 4: Captação, Condução e Infi',
    cards: cards4,
    quiz: quiz4
  },
  5: {
    title: 'Módulo 5: Estruturas de RetençãoDete',
    cards: cards5,
    quiz: quiz5
  },
  6: {
    title: 'Módulo 6: Drenagem Urbana',
    cards: cards6,
    quiz: quiz6
  },
  7: {
    title: 'Módulo 7: Monitoramento e Manutenção',
    cards: cards7,
    quiz: quiz7
  },
  8: {
    title: 'Módulo 8: Drenagem Rural',
    cards: cards8,
    quiz: quiz8
  }
};
// ... existing code ...

// AVALIAÇÃO FINAL - 50 QUESTÕES
const avaliacaoFinal = {
  title: '🏆 Avaliação Final - Curso PNSB',
  description: 'Avaliação final com 50 questões abrangendo todos os módulos do curso. Você tem tempo ilimitado para responder.',
  questions: [
    {
      question: 'Qual é o objetivo principal da Pesquisa Nacional de Saneamento Básico (PNSB)?',
      options: [
        'Planejar e aprimorar a gestão municipal dos serviços de saneamento',
        'Construir novas estações de tratamento de água',
        'Fiscalizar empresas privadas de saneamento',
        'Reduzir o consumo de água nas cidades'
      ],
      answer: 0
    },
    {
      question: 'Segundo a Lei 11.445/2007, qual destes NÃO é um componente do saneamento básico?',
      options: [
        'Abastecimento de água',
        'Drenagem e manejo de águas pluviais',
        'Energia elétrica',
        'Esgotamento sanitário'
      ],
      answer: 2
    },
    {
      question: 'O que caracteriza a microdrenagem?',
      options: [
        'Dispositivos locais como sarjetas, bocas de lobo e pavimentos',
        'Grandes rios e barragens',
        'Sistemas de esgoto sanitário',
        'Parques urbanos'
      ],
      answer: 0
    },
    {
      question: 'Qual é a principal função da macrodrenagem?',
      options: [
        'Escoamento final das águas pluviais por meio de grandes dispositivos',
        'Filtrar resíduos sólidos',
        'Bombear água para reservatórios',
        'Medir a qualidade da água'
      ],
      answer: 0
    },
    {
      question: 'O que são infraestruturas verdes no contexto do MAP?',
      options: [
        'Soluções baseadas na natureza, como jardins de chuva e telhados verdes',
        'Apenas galerias de concreto',
        'Sistemas de esgoto',
        'Reservatórios subterrâneos de água potável'
      ],
      answer: 0
    },
    {
      question: 'Qual é o objetivo geral do serviço de Drenagem e Manejo de Águas Pluviais (MAP)?',
      options: [
        'Reduzir impactos causados por alagamentos, inundações, enxurradas e erosões',
        'Aumentar a velocidade da água em áreas rurais',
        'Promover apenas a limpeza urbana',
        'Construir apenas galerias pluviais'
      ],
      answer: 0
    },
    {
      question: 'O que significa o termo "jusante"?',
      options: [
        'Rio abaixo, montanha abaixo, encosta abaixo',
        'Rio acima, montanha acima, encosta acima',
        'Sentido contrário ao fluxo da água',
        'Área de infiltração do solo'
      ],
      answer: 0
    },
    {
      question: 'Qual das opções é um objetivo do serviço de MAP?',
      options: [
        'Prevenção de alagamentos e inundações',
        'Aumento da erosão',
        'Redução da vegetação urbana',
        'Aumento da poluição hídrica'
      ],
      answer: 0
    },
    {
      question: 'A coleta de dados da PNSB é realizada principalmente por:',
      options: [
        'Preenchimento de questionário online',
        'Entrevistas presenciais',
        'Telefonemas',
        'Cartas enviadas pelo correio'
      ],
      answer: 0
    },
    {
      question: 'O que deve ser feito se houver terceirização dos serviços de drenagem?',
      options: [
        'Cadastrar a empresa terceirizada no bloco SRT',
        'Ignorar o bloco SRT',
        'Preencher apenas dados do município',
        'Não responder ao questionário'
      ],
      answer: 0
    },
    {
      question: 'Qual é a principal diferença entre drenagem urbana e rural?',
      options: [
        'Urbana visa aumentar a velocidade do escoamento; rural, aumentar a infiltração',
        'Rural utiliza apenas canais naturais',
        'Urbana não utiliza infraestruturas verdes',
        'Rural não sofre com erosão'
      ],
      answer: 0
    },
    {
      question: 'O que pode ocorrer em áreas de expansão urbana sem drenagem adequada?',
      options: [
        'Erosão, perda de solo e assoreamento',
        'Aumento da infiltração',
        'Redução de enchentes',
        'Melhoria da qualidade do ar'
      ],
      answer: 0
    },
    {
      question: 'Qual é a importância da conservação do solo no contexto do MAP?',
      options: [
        'Minimizar a erosão e proteger encostas',
        'Aumentar a velocidade da água',
        'Reduzir a infiltração',
        'Promover a poluição hídrica'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza um canal artificial no contexto da drenagem?',
      options: [
        'Rios canalizados ou tamponados',
        'Apenas rios naturais',
        'Poços de infiltração',
        'Bueiros e bocas de lobo'
      ],
      answer: 0
    },
    {
      question: 'Qual é o objetivo principal do Bloco CZP na PNSB?',
      options: [
        'Identificar o responsável pela infraestrutura e serviços de drenagem e manejo de águas pluviais',
        'Coletar dados sobre qualidade da água',
        'Fiscalizar empresas privadas',
        'Medir a quantidade de chuva'
      ],
      answer: 0
    },
    {
      question: 'O que acontece se a resposta ao quesito sobre serviços executados for "Não"?',
      options: [
        'O questionário deve ser encerrado',
        'Deve-se continuar respondendo normalmente',
        'Deve-se pular para o próximo módulo',
        'Deve-se aguardar orientação do supervisor'
      ],
      answer: 0
    },
    {
      question: 'Qual destes é um exemplo de serviço de drenagem e manejo de águas pluviais?',
      options: [
        'Manutenção em sarjetas, bocas de lobo e galerias',
        'Tratamento de esgoto sanitário',
        'Distribuição de água potável',
        'Coleta de lixo domiciliar'
      ],
      answer: 0
    },
    {
      question: 'O que significa "monitoramento pluviométrico"?',
      options: [
        'Registro da quantidade de chuva que cai em uma determinada área e num determinado tempo',
        'Medição da qualidade da água dos rios',
        'Controle do nível dos reservatórios',
        'Análise da velocidade do vento'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza uma "inundação" no contexto do MAP?',
      options: [
        'Transbordamento de um curso d\'água',
        'Acúmulo de águas por deficiência na drenagem',
        'Grande quantidade de água que corre com violência',
        'Deslocamentos de solo pela encosta'
      ],
      answer: 0
    },
    {
      question: 'Qual é a diferença entre "alagamentos" e "enxurradas"?',
      options: [
        'Alagamentos são acúmulo de águas por deficiência na drenagem; enxurradas são grande quantidade de água que corre com violência',
        'Alagamentos são sempre causados por rios; enxurradas são sempre causadas por chuva',
        'Alagamentos ocorrem apenas em áreas urbanas; enxurradas apenas em áreas rurais',
        'Não há diferença, são sinônimos'
      ],
      answer: 0
    },
    {
      question: 'O que inclui a "manutenção" no contexto do MAP?',
      options: [
        'Limpeza de bocas de lobo, desobstrução de galerias, desassoreamento de córregos',
        'Apenas construção de novas infraestruturas',
        'Apenas monitoramento de qualidade da água',
        'Apenas planejamento de projetos'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza uma "autarquia" na natureza jurídica?',
      options: [
        'Parte da administração indireta, criada por lei específica, com personalidade jurídica de direito público',
        'Empresa com capital público e privado',
        'Entidade privada sem fins lucrativos',
        'Órgão diretamente ligado ao Poder Executivo'
      ],
      answer: 0
    },
    {
      question: 'O que é um "consórcio público"?',
      options: [
        'Entidade pública resultante de acordo formal entre dois ou mais municípios, estados ou entre município(s), estado(s) e a União',
        'Empresa privada que presta serviços públicos',
        'Fundação criada por iniciativa particular',
        'Associação de moradores'
      ],
      answer: 0
    },
    {
      question: 'O que significa "esfera interfederativa"?',
      options: [
        'Reúne diferentes entes federativos das três esferas administrativas do país (União e/ou Estados e/ou Municípios)',
        'Apenas municípios contíguos',
        'Apenas estados da mesma região',
        'Apenas órgãos federais'
      ],
      answer: 0
    },
    {
      question: 'Qual é o objetivo principal do Bloco LEG na PNSB?',
      options: [
        'Verificar se o prestador possui autorização legal para prestar serviços de drenagem e manejo de águas pluviais',
        'Coletar dados sobre qualidade da água',
        'Fiscalizar empresas privadas',
        'Medir a quantidade de chuva'
      ],
      answer: 0
    },
    {
      question: 'O que é uma "concessão" no contexto legal?',
      options: [
        'Delegação da prestação de serviço público, precedida de licitação, à pessoa jurídica ou consórcio de pessoas jurídicas',
        'Apenas autorização para funcionar',
        'Registro simples no cadastro municipal',
        'Permissão temporária de funcionamento'
      ],
      answer: 0
    },
    {
      question: 'Qual é a diferença entre "concessão" e "autorização"?',
      options: [
        'Concessão é precedida de licitação; autorização é ato administrativo discricionário',
        'Concessão é temporária; autorização é permanente',
        'Concessão é apenas para empresas públicas; autorização é apenas para privadas',
        'Não há diferença, são sinônimos'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza uma "permissão" de serviço público?',
      options: [
        'Delegação, a título precário, mediante licitação, da prestação de serviços públicos',
        'Autorização permanente sem licitação',
        'Registro simples no cadastro municipal',
        'Permissão temporária sem licitação'
      ],
      answer: 0
    },
    {
      question: 'O que é uma "licença ambiental"?',
      options: [
        'Ato administrativo pelo qual o órgão ambiental competente estabelece as condições, restrições e medidas de controle ambiental',
        'Apenas autorização para funcionar',
        'Registro simples no cadastro municipal',
        'Permissão temporária de funcionamento'
      ],
      answer: 0
    },
    {
      question: 'Qual é o objetivo principal do Bloco CAP na PNSB?',
      options: [
        'Identificar como a água da chuva é captada e conduzida no sistema de drenagem',
        'Coletar dados sobre qualidade da água',
        'Fiscalizar empresas privadas',
        'Medir a quantidade de chuva'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza a "captação" no contexto do MAP?',
      options: [
        'Coleta da água da chuva por dispositivos como sarjetas, bocas de lobo e pavimentos',
        'Apenas armazenamento da água',
        'Apenas tratamento da água',
        'Apenas distribuição da água'
      ],
      answer: 0
    },
    {
      question: 'O que é "condução" no sistema de drenagem?',
      options: [
        'Transporte da água captada através de galerias, canais e tubulações',
        'Apenas captação da água',
        'Apenas tratamento da água',
        'Apenas destinação final'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza a "infiltração" no contexto do MAP?',
      options: [
        'Processo pelo qual a água penetra no solo através de dispositivos específicos',
        'Apenas captação da água',
        'Apenas condução da água',
        'Apenas destinação final'
      ],
      answer: 0
    },
    {
      question: 'O que são "dispositivos de infiltração"?',
      options: [
        'Estruturas que permitem a infiltração da água no solo, como poços de infiltração e trincheiras',
        'Apenas galerias pluviais',
        'Apenas bocas de lobo',
        'Apenas sarjetas'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza uma "galeria pluvial"?',
      options: [
        'Estrutura subterrânea para condução de águas pluviais',
        'Apenas canal superficial',
        'Apenas boca de lobo',
        'Apenas sarjeta'
      ],
      answer: 0
    },
    {
      question: 'O que é "tamponamento" de cursos d\'água?',
      options: [
        'Canalização através de galerias fechadas onde o rio é \'enterrado\'',
        'Apenas limpeza dos cursos d\'água',
        'Apenas desassoreamento',
        'Apenas construção de barragens'
      ],
      answer: 0
    },
    {
      question: 'Qual é o objetivo principal do Bloco RET na PNSB?',
      options: [
        'Identificar estruturas que retêm ou detêm temporariamente as águas pluviais',
        'Coletar dados sobre qualidade da água',
        'Fiscalizar empresas privadas',
        'Medir a quantidade de chuva'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza uma "estrutura de retenção"?',
      options: [
        'Dispositivo que armazena água temporariamente e permite infiltração no solo',
        'Apenas galeria pluvial',
        'Apenas boca de lobo',
        'Apenas sarjeta'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza uma "estrutura de detenção"?',
      options: [
        'Dispositivo que armazena água temporariamente e libera gradualmente',
        'Apenas galeria pluvial',
        'Apenas boca de lobo',
        'Apenas sarjeta'
      ],
      answer: 0
    },
    {
      question: 'O que é uma "bacia de retenção"?',
      options: [
        'Estrutura que armazena água temporariamente e permite infiltração',
        'Apenas reservatório de água potável',
        'Apenas lagoa de tratamento',
        'Apenas canal de drenagem'
      ],
      answer: 0
    },
    {
      question: 'O que é uma "bacia de detenção"?',
      options: [
        'Estrutura que armazena água temporariamente e libera gradualmente',
        'Apenas reservatório de água potável',
        'Apenas lagoa de tratamento',
        'Apenas canal de drenagem'
      ],
      answer: 0
    },
    {
      question: 'O que são "poços de infiltração"?',
      options: [
        'Estruturas verticais que permitem a infiltração da água no solo',
        'Apenas poços de água potável',
        'Apenas poços de monitoramento',
        'Apenas poços artesianos'
      ],
      answer: 0
    },
    {
      question: 'O que são "trincheiras de infiltração"?',
      options: [
        'Estruturas horizontais que permitem a infiltração da água no solo',
        'Apenas valas de drenagem',
        'Apenas canais superficiais',
        'Apenas galerias pluviais'
      ],
      answer: 0
    },
    {
      question: 'O que são "jardins de chuva"?',
      options: [
        'Áreas plantadas que captam e infiltram águas pluviais',
        'Apenas jardins ornamentais',
        'Apenas parques urbanos',
        'Apenas áreas de lazer'
      ],
      answer: 0
    },
    {
      question: 'Qual é o objetivo principal do Bloco DES na PNSB?',
      options: [
        'Identificar para onde a água captada é direcionada após o sistema de drenagem',
        'Coletar dados sobre qualidade da água',
        'Fiscalizar empresas privadas',
        'Medir a quantidade de chuva'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza um "ponto final de destinação"?',
      options: [
        'Local onde a água é finalmente descarregada, como rios, lagos ou mar',
        'Apenas ponto de captação',
        'Apenas ponto de tratamento',
        'Apenas ponto de monitoramento'
      ],
      answer: 0
    },
    {
      question: 'O que é um "rio perene"?',
      options: [
        'Rio com água o ano todo',
        'Rio que seca no período seco',
        'Rio temporário',
        'Rio subterrâneo'
      ],
      answer: 0
    },
    {
      question: 'O que é um "rio intermitente"?',
      options: [
        'Rio com água somente no período chuvoso',
        'Rio com água o ano todo',
        'Rio subterrâneo',
        'Rio artificial'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza o "tratamento de águas pluviais"?',
      options: [
        'Processos aplicados para remover contaminantes antes da destinação final',
        'Apenas captação da água',
        'Apenas condução da água',
        'Apenas armazenamento da água'
      ],
      answer: 0
    },
    {
      question: 'O que é "reúso de águas pluviais"?',
      options: [
        'Utilização da água captada para outras finalidades, como irrigação e limpeza',
        'Apenas descarte da água',
        'Apenas tratamento da água',
        'Apenas armazenamento da água'
      ],
      answer: 0
    },
    {
      question: 'Qual é o objetivo principal do Bloco MON na PNSB?',
      options: [
        'Identificar como o prestador monitora a qualidade e quantidade das águas pluviais',
        'Coletar dados sobre qualidade da água',
        'Fiscalizar empresas privadas',
        'Medir a quantidade de chuva'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza o "monitoramento de qualidade da água"?',
      options: [
        'Acompanhamento de parâmetros físicos, químicos e biológicos da água',
        'Apenas medição de vazão',
        'Apenas medição de nível',
        'Apenas medição de temperatura'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza o "monitoramento de quantidade da água"?',
      options: [
        'Acompanhamento de vazão, nível e volume de água',
        'Apenas medição de qualidade',
        'Apenas medição de temperatura',
        'Apenas medição de pH'
      ],
      answer: 0
    },
    {
      question: 'O que é "monitoramento pluviométrico"?',
      options: [
        'Registro da quantidade de chuva que cai em uma determinada área e tempo',
        'Apenas medição de qualidade da água',
        'Apenas medição de vazão',
        'Apenas medição de nível'
      ],
      answer: 0
    },
    {
      question: 'O que são "estações de monitoramento"?',
      options: [
        'Locais equipados com instrumentos para coleta de dados ambientais',
        'Apenas postos de coleta de água',
        'Apenas laboratórios',
        'Apenas escritórios administrativos'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza o "monitoramento contínuo"?',
      options: [
        'Coleta de dados em tempo real, 24 horas por dia',
        'Apenas coleta mensal',
        'Apenas coleta semanal',
        'Apenas coleta diária'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza o "monitoramento pontual"?',
      options: [
        'Coleta de dados em momentos específicos',
        'Apenas coleta contínua',
        'Apenas coleta automática',
        'Apenas coleta remota'
      ],
      answer: 0
    },
    {
      question: 'O que são "barraginhas" no contexto rural?',
      options: [
        'Pequenas bacias que capturam enxurradas e permitem infiltração',
        'Grandes reservatórios para armazenamento de água potável',
        'Sistemas de canalização subterrânea',
        'Estruturas de tratamento de esgoto'
      ],
      answer: 0
    },
    {
      question: 'O que caracteriza "vias de acesso" no contexto rural?',
      options: [
        'Todo o sistema viário que permite acessar comunidades rurais',
        'Apenas estradas pavimentadas',
        'Exclusivamente estradas vicinais',
        'Apenas vias internas das comunidades'
      ],
      answer: 0
    },
    {
      question: 'O que significa "adequação do abaulamento do leito da via"?',
      options: [
        'Técnica que deixa a parte central das vias mais elevada que as laterais',
        'Pavimentação completa da via',
        'Instalação de galerias pluviais',
        'Construção de barraginhas'
      ],
      answer: 0
    },
    {
      question: 'Qual tipo de pavimento permite a infiltração da água da chuva?',
      options: [
        'Pavimento permeável de asfalto poroso',
        'Pavimento impermeável de asfalto',
        'Concreto contínuo',
        'Apenas pavimentos de concreto'
      ],
      answer: 0
    },
    {
      question: 'O que são "peridomicílios" no contexto rural?',
      options: [
        'Área externa no entorno do domicílio, dentro da propriedade',
        'Apenas a área interna da residência',
        'Vias de acesso às comunidades',
        'Cursos d\'água naturais'
      ],
      answer: 0
    },
    {
      question: 'O que é "renaturalização de cursos d\'água"?',
      options: [
        'Restaurar funções ecológicas e hidrológicas dos cursos de água',
        'Apenas melhorar a aparência visual',
        'Aumentar a velocidade do escoamento',
        'Reduzir custos de manutenção'
      ],
      answer: 0
    },
    {
      question: 'O que é "gestão compartilhada" das águas pluviais rurais?',
      options: [
        'Atuação conjunta entre governos, comunidades e organizações',
        'Apenas responsabilidade do governo federal',
        'Exclusivamente responsabilidade das comunidades',
        'Apenas ações do prestador de serviço'
      ],
      answer: 0
    },
    {
      question: 'O que é "Educação Ambiental" no contexto do MAP?',
      options: [
        'Processos que promovem conscientização sobre conservação e sustentabilidade',
        'Apenas palestras sobre meio ambiente',
        'Exclusivamente campanhas publicitárias',
        'Apenas atividades escolares'
      ],
      answer: 0
    },
    {
      question: 'Qual a importância da educação ambiental no MAP?',
      options: [
        'Sensibilizar para relações da drenagem com desastres e promover consciência',
        'Apenas para cumprir exigências legais',
        'Exclusivamente para reduzir custos',
        'Apenas para melhorar a imagem do prestador'
      ],
      answer: 0
    },
    {
      question: 'O que são "cisternas domiciliares" em áreas rurais?',
      options: [
        'Estruturas que acumulam água de chuva para consumo humano e outros usos',
        'Apenas armazenar água potável da rede',
        'Tratar esgoto doméstico',
        'Apenas para irrigação'
      ],
      answer: 0
    },
    {
      question: 'O que são "técnicas infiltrantes" no contexto rural?',
      options: [
        'Trincheira de infiltração, jardim de chuva, canteiro pluvial',
        'Apenas sistemas de drenagem convencional',
        'Exclusivamente galerias pluviais',
        'Apenas sarjetas e bueiros'
      ],
      answer: 0
    },
    {
      question: 'Qual é o objetivo da educação ambiental sobre mudanças climáticas no MAP?',
      options: [
        'Mitigação e adaptação às mudanças climáticas e prevenção aos desastres',
        'Apenas informar sobre o fenômeno',
        'Exclusivamente para cumprir protocolos internacionais',
        'Apenas para sensibilização geral'
      ],
      answer: 0
    },
    {
      question: 'O que significa "renaturalização de rios" no contexto da educação ambiental?',
      options: [
        'Restaurar funções ecológicas e hidrológicas, melhorar qualidade dos corpos d\'água',
        'Apenas limpeza dos rios',
        'Exclusivamente despoluição',
        'Apenas arborização das margens'
      ],
      answer: 0
    },
    {
      question: 'Qual é o papel das "rodas de conversa" na educação ambiental?',
      options: [
        'Método de participação coletiva para qualquer faixa etária',
        'Apenas para palestras formais',
        'Exclusivamente para especialistas',
        'Apenas para crianças'
      ],
      answer: 0
    }
  ]
};

// ... existing code ...

// Função para renderizar a avaliação final
function renderAvaliacaoFinal() {
  const container = document.getElementById('cards-container');
  container.innerHTML = '';
  
  const avaliacaoDiv = document.createElement('div');
  avaliacaoDiv.className = 'avaliacao-final';
  avaliacaoDiv.innerHTML = `
    <div class="avaliacao-header">
      <h2>${avaliacaoFinal.title}</h2>
      <p>${avaliacaoFinal.description}</p>
      <div class="avaliacao-info">
        <span>📝 50 questões</span>
        <span>⏱️ Tempo ilimitado</span>
        <span>🎯 Aprovação: 70% (35 acertos)</span>
      </div>
    </div>
    <div id="avaliacao-container"></div>
  `;
  
  container.appendChild(avaliacaoDiv);
  
  // Iniciar a avaliação
  iniciarAvaliacaoFinal();
}

// Função para iniciar a avaliação final
function iniciarAvaliacaoFinal() {
  const container = document.getElementById('avaliacao-container');
  let currentQuestion = 0;
  let answers = [];
  let startTime = Date.now();
  
  // Inicializar array de respostas
  for (let i = 0; i < avaliacaoFinal.questions.length; i++) {
    answers[i] = null;
  }
  
  function showQuestion() {
    const question = avaliacaoFinal.questions[currentQuestion];
    const progress = ((currentQuestion + 1) / avaliacaoFinal.questions.length * 100).toFixed(1);
    
    container.innerHTML = `
      <div class="avaliacao-progress">
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progress}%"></div>
        </div>
        <span>Questão ${currentQuestion + 1} de ${avaliacaoFinal.questions.length} (${progress}%)</span>
      </div>
      
      <div class="avaliacao-question">
        <h3>${question.question}</h3>
        <div class="avaliacao-options">
          ${question.options.map((option, idx) => `
            <button class="avaliacao-option ${answers[currentQuestion] === idx ? 'selected' : ''}" 
                    onclick="selectAvaliacaoOption(${idx})">
              ${String.fromCharCode(65 + idx)}) ${option}
            </button>
          `).join('')}
        </div>
      </div>
      
      <div class="avaliacao-navigation">
        <button onclick="navigateAvaliacao(-1)" ${currentQuestion === 0 ? 'disabled' : ''}>
          ← Anterior
        </button>
        <span class="question-counter">${currentQuestion + 1} / ${avaliacaoFinal.questions.length}</span>
        <button onclick="navigateAvaliacao(1)" ${currentQuestion === avaliacaoFinal.questions.length - 1 ? 'disabled' : ''}>
          Próxima →
        </button>
        ${currentQuestion === avaliacaoFinal.questions.length - 1 ? 
          '<button onclick="finalizarAvaliacao()" class="finalizar-btn">Finalizar Avaliação</button>' : ''}
      </div>
    `;
  }
  
  // Funções globais para navegação
  window.selectAvaliacaoOption = function(idx) {
    answers[currentQuestion] = idx;
    showQuestion();
  };
  
  window.navigateAvaliacao = function(direction) {
    const newQuestion = currentQuestion + direction;
    if (newQuestion >= 0 && newQuestion < avaliacaoFinal.questions.length) {
      currentQuestion = newQuestion;
      showQuestion();
    }
  };
  
  window.finalizarAvaliacao = function() {
    const answered = answers.filter(a => a !== null).length;
    const total = avaliacaoFinal.questions.length;
    
    if (answered < total) {
      const confirmar = confirm(`Você respondeu ${answered} de ${total} questões. Deseja finalizar mesmo assim?`);
      if (!confirmar) return;
    }
    
    showAvaliacaoResult();
  };
  
  function showAvaliacaoResult() {
    const endTime = Date.now();
    const timeSpent = Math.floor((endTime - startTime) / 1000 / 60); // minutos
    
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    
    answers.forEach((answer, idx) => {
      if (answer === null) {
        unanswered++;
      } else if (answer === avaliacaoFinal.questions[idx].answer) {
        correct++;
      } else {
        incorrect++;
      }
    });
    
    const percentage = ((correct / avaliacaoFinal.questions.length) * 100).toFixed(1);
    const passed = percentage >= 70;
    
    // Salvar nota final no localStorage
    localStorage.setItem('notaFinal', percentage);
    
    // Salvar resultado no sistema de progresso
    sistemaProgresso.salvarResultadoAvaliacaoFinal(percentage, passed);
    
    container.innerHTML = `
      <div class="avaliacao-result">
        <h2>🏆 Resultado da Avaliação Final</h2>
        
        <div class="result-stats">
          <div class="stat-item correct">
            <span class="stat-number">${correct}</span>
            <span class="stat-label">Acertos</span>
          </div>
          <div class="stat-item incorrect">
            <span class="stat-number">${incorrect}</span>
            <span class="stat-label">Erros</span>
          </div>
          <div class="stat-item unanswered">
            <span class="stat-number">${unanswered}</span>
            <span class="stat-label">Não respondidas</span>
          </div>
        </div>
        
        <div class="result-percentage ${passed ? 'passed' : 'failed'}">
          <span class="percentage-number">${percentage}%</span>
          <span class="percentage-label">${passed ? 'APROVADO!' : 'REPROVADO'}</span>
        </div>
        
        <div class="result-details">
          <p><strong>Tempo gasto:</strong> ${timeSpent} minutos</p>
          <p><strong>Nota mínima para aprovação:</strong> 70% (35 acertos)</p>
          <p><strong>Sua nota:</strong> ${correct} acertos de ${avaliacaoFinal.questions.length}</p>
        </div>
        
        ${passed ? `
          <div class="certificate-info">
            <h3>🎉 Parabéns! Você foi aprovado!</h3>
            <p>Você demonstrou excelente conhecimento sobre a PNSB e Manejo de Águas Pluviais.</p>
            <button onclick="gerarCertificado()" class="certificate-btn">📜 Gerar Certificado</button>
          </div>
        ` : `
          <div class="retry-info">
            <h3>📚 Continue Estudando</h3>
            <p>Recomendamos revisar os módulos e tentar novamente. Você precisa de pelo menos 70% de acertos para aprovação.</p>
            <button onclick="voltarAosModulos()" class="retry-btn">📖 Voltar aos Módulos</button>
          </div>
        `}
        
        <div class="result-actions">
          <button onclick="revisarAvaliacao()" class="review-btn">🔍 Revisar Respostas</button>
          <button onclick="voltarAosModulos()" class="back-btn">🏠 Voltar ao Início</button>
        </div>
      </div>
    `;
  }
  
  // Iniciar com a primeira questão
  showQuestion();
}

// Funções auxiliares
window.gerarCertificado = function() {
  // Obter dados do participante
  const nome = prompt('Digite seu nome completo para o certificado:') || 'Participante do Curso';
  const notaFinal = localStorage.getItem('notaFinal') || '85';
  
  // Salvar dados do participante
  if (typeof salvarDadosParticipante === 'function') {
    salvarDadosParticipante(nome, notaFinal);
  } else {
    localStorage.setItem('nomeParticipante', nome);
    localStorage.setItem('notaFinal', notaFinal);
    localStorage.setItem('dataInicio', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString());
    localStorage.setItem('dataConclusao', new Date().toISOString());
  }
  
  // Redirecionar para a página do certificado
  window.open('certificado.html', '_blank');
};

window.voltarAosModulos = function() {
  currentModule = 1;
  renderCards();
};

window.revisarAvaliacao = function() {
  // Implementar revisão das respostas
  alert('Funcionalidade de revisão será implementada em breve!');
};

// ... existing code ...

// Função para mudar módulo
function changeModule(module) {
  currentModule = module;
  renderCards();
  updateNavigation();
}

// Função para iniciar avaliação final
function startAvaliacaoFinal() {
  currentModule = 'avaliacao';
  renderCards();
  updateNavigation();
}

// Função para atualizar navegação
function updateNavigation() {
  const nav = document.getElementById('module-nav');
  if (nav) {
    nav.innerHTML = `
      <button onclick="changeModule(1)" class="module-btn ${currentModule === 1 ? 'active' : ''}">Módulo 1</button>
      <button onclick="changeModule(2)" class="module-btn ${currentModule === 2 ? 'active' : ''}">Módulo 2</button>
      <button onclick="changeModule(3)" class="module-btn ${currentModule === 3 ? 'active' : ''}">Módulo 3</button>
      <button onclick="changeModule(4)" class="module-btn ${currentModule === 4 ? 'active' : ''}">Módulo 4</button>
      <button onclick="changeModule(5)" class="module-btn ${currentModule === 5 ? 'active' : ''}">Módulo 5</button>
      <button onclick="changeModule(6)" class="module-btn ${currentModule === 6 ? 'active' : ''}">Módulo 6</button>
      <button onclick="changeModule(7)" class="module-btn ${currentModule === 7 ? 'active' : ''}">Módulo 7</button>
      <button onclick="changeModule(8)" class="module-btn ${currentModule === 8 ? 'active' : ''}">Módulo 8</button>
      <button onclick="startAvaliacaoFinal()" class="module-btn avaliacao-btn ${currentModule === 'avaliacao' ? 'active' : ''}">🏆 Avaliação Final</button>
    `;
  }
}

// Adicionar navegação entre módulos
document.addEventListener('DOMContentLoaded', function() {
  renderCards();
  
  // Adicionar botões de navegação se não existirem
  if (!document.getElementById('module-nav')) {
    const nav = document.createElement('div');
    nav.id = 'module-nav';
    nav.className = 'module-navigation';
    nav.innerHTML = `
      <button onclick="changeModule(1)" class="module-btn ${currentModule === 1 ? 'active' : ''}">Módulo 1</button>
      <button onclick="changeModule(2)" class="module-btn ${currentModule === 2 ? 'active' : ''}">Módulo 2</button>
      <button onclick="changeModule(3)" class="module-btn ${currentModule === 3 ? 'active' : ''}">Módulo 3</button>
      <button onclick="changeModule(4)" class="module-btn ${currentModule === 4 ? 'active' : ''}">Módulo 4</button>
      <button onclick="changeModule(5)" class="module-btn ${currentModule === 5 ? 'active' : ''}">Módulo 5</button>
      <button onclick="changeModule(6)" class="module-btn ${currentModule === 6 ? 'active' : ''}">Módulo 6</button>
      <button onclick="changeModule(7)" class="module-btn ${currentModule === 7 ? 'active' : ''}">Módulo 7</button>
      <button onclick="changeModule(8)" class="module-btn ${currentModule === 8 ? 'active' : ''}">Módulo 8</button>
      <button onclick="startAvaliacaoFinal()" class="module-btn avaliacao-btn">🏆 Avaliação Final</button>
    `;
    const mainContent = document.querySelector('.main-content');
    const cardsContainer = document.getElementById('cards-container');
    if (mainContent && cardsContainer) {
      mainContent.insertBefore(nav, cardsContainer);
    }
  }
});

// Sistema de Progresso - Curso PNSB
class ProgressoCurso {
  constructor() {
    this.storageKey = 'pnsb_progresso';
    this.inicializarProgresso();
  }

  // Inicializar progresso se não existir
  inicializarProgresso() {
    if (!localStorage.getItem(this.storageKey)) {
      const progressoInicial = {
        modulos: {
          1: { concluido: false, quizConcluido: false, quizNota: 0, ultimoAcesso: null },
          2: { concluido: false, quizConcluido: false, quizNota: 0, ultimoAcesso: null },
          3: { concluido: false, quizConcluido: false, quizNota: 0, ultimoAcesso: null },
          4: { concluido: false, quizConcluido: false, quizNota: 0, ultimoAcesso: null },
          5: { concluido: false, quizConcluido: false, quizNota: 0, ultimoAcesso: null },
          6: { concluido: false, quizConcluido: false, quizNota: 0, ultimoAcesso: null },
          7: { concluido: false, quizConcluido: false, quizNota: 0, ultimoAcesso: null },
          8: { concluido: false, quizConcluido: false, quizNota: 0, ultimoAcesso: null }
        },
        avaliacaoFinal: { concluida: false, nota: 0, aprovado: false, dataConclusao: null },
        dataInicio: new Date().toISOString(),
        ultimoAcesso: new Date().toISOString(),
        tempoTotal: 0
      };
      this.salvarProgresso(progressoInicial);
    }
  }

  // Obter progresso atual
  obterProgresso() {
    return JSON.parse(localStorage.getItem(this.storageKey));
  }

  // Salvar progresso
  salvarProgresso(progresso) {
    localStorage.setItem(this.storageKey, JSON.stringify(progresso));
  }

  // Marcar módulo como acessado
  marcarModuloAcessado(numeroModulo) {
    const progresso = this.obterProgresso();
    progresso.modulos[numeroModulo].ultimoAcesso = new Date().toISOString();
    progresso.ultimoAcesso = new Date().toISOString();
    this.salvarProgresso(progresso);
  }

  // Marcar módulo como concluído
  marcarModuloConcluido(numeroModulo) {
    const progresso = this.obterProgresso();
    progresso.modulos[numeroModulo].concluido = true;
    progresso.modulos[numeroModulo].ultimoAcesso = new Date().toISOString();
    progresso.ultimoAcesso = new Date().toISOString();
    this.salvarProgresso(progresso);
  }

  // Salvar resultado do quiz
  salvarResultadoQuiz(numeroModulo, nota, acertos, total) {
    const progresso = this.obterProgresso();
    progresso.modulos[numeroModulo].quizConcluido = true;
    progresso.modulos[numeroModulo].quizNota = nota;
    progresso.modulos[numeroModulo].quizAcertos = acertos;
    progresso.modulos[numeroModulo].quizTotal = total;
    progresso.modulos[numeroModulo].ultimoAcesso = new Date().toISOString();
    progresso.ultimoAcesso = new Date().toISOString();
    this.salvarProgresso(progresso);
  }

  // Salvar resultado da avaliação final
  salvarResultadoAvaliacaoFinal(nota, aprovado) {
    const progresso = this.obterProgresso();
    progresso.avaliacaoFinal.concluida = true;
    progresso.avaliacaoFinal.nota = nota;
    progresso.avaliacaoFinal.aprovado = aprovado;
    progresso.avaliacaoFinal.dataConclusao = new Date().toISOString();
    progresso.ultimoAcesso = new Date().toISOString();
    this.salvarProgresso(progresso);
  }

  // Calcular progresso geral
  calcularProgressoGeral() {
    const progresso = this.obterProgresso();
    let modulosConcluidos = 0;
    let quizzesConcluidos = 0;
    let totalModulos = 8;

    for (let i = 1; i <= totalModulos; i++) {
      if (progresso.modulos[i].concluido) modulosConcluidos++;
      if (progresso.modulos[i].quizConcluido) quizzesConcluidos++;
    }

    return {
      modulosConcluidos,
      quizzesConcluidos,
      totalModulos,
      percentualModulos: Math.round((modulosConcluidos / totalModulos) * 100),
      percentualQuizzes: Math.round((quizzesConcluidos / totalModulos) * 100),
      avaliacaoFinalConcluida: progresso.avaliacaoFinal.concluida,
      aprovado: progresso.avaliacaoFinal.aprovado
    };
  }

  // Obter estatísticas detalhadas
  obterEstatisticas() {
    const progresso = this.obterProgresso();
    const estatisticas = {
      modulos: {},
      geral: this.calcularProgressoGeral(),
      tempo: this.calcularTempoEstudo()
    };

    for (let i = 1; i <= 8; i++) {
      estatisticas.modulos[i] = {
        concluido: progresso.modulos[i].concluido,
        quizConcluido: progresso.modulos[i].quizConcluido,
        quizNota: progresso.modulos[i].quizNota,
        ultimoAcesso: progresso.modulos[i].ultimoAcesso
      };
    }

    return estatisticas;
  }

  // Calcular tempo de estudo
  calcularTempoEstudo() {
    const progresso = this.obterProgresso();
    const dataInicio = new Date(progresso.dataInicio);
    const agora = new Date();
    const diferenca = agora - dataInicio;
    
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));

    return { dias, horas, minutos };
  }

  // Limpar progresso (reset)
  limparProgresso() {
    localStorage.removeItem(this.storageKey);
    this.inicializarProgresso();
  }

  // Exportar progresso
  exportarProgresso() {
    const progresso = this.obterProgresso();
    const estatisticas = this.obterEstatisticas();
    
    const dados = {
      progresso,
      estatisticas,
      dataExportacao: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(dados, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `progresso_pnsb_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }
}

// Instanciar sistema de progresso
const sistemaProgresso = new ProgressoCurso();

// Funções auxiliares para o sistema de progresso
window.mostrarProgressoDetalhado = function() {
  const estatisticas = sistemaProgresso.obterEstatisticas();
  const progresso = sistemaProgresso.obterProgresso();
  
  const modal = document.createElement('div');
  modal.className = 'progresso-modal';
  modal.innerHTML = `
    <div class="progresso-modal-content">
      <div class="progresso-modal-header">
        <h2>📊 Progresso Detalhado do Curso</h2>
        <button onclick="this.parentElement.parentElement.parentElement.remove()" class="btn-fechar">×</button>
      </div>
      
      <div class="progresso-modal-body">
              <p>Em breve, estatísticas detalhadas do seu progresso aparecerão aqui.</p>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
};