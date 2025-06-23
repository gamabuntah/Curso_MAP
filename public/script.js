document.addEventListener('DOMContentLoaded', async () => {
    // Pega o usuário logado e sua função do sessionStorage
    const currentUser = sessionStorage.getItem('currentUser');
    const userRole = sessionStorage.getItem('userRole');

    // Mapeamento dos elementos do DOM
    const domElements = {
        sidebarNav: document.getElementById('sidebar-nav'),
        moduleTitle: document.getElementById('module-title'),
        contentContainer: document.getElementById('content'),
        quizContainer: document.getElementById('quiz-container'),
        finalQuizContainer: document.getElementById('final-quiz-container'),
        finalScoreContainer: document.getElementById('final-score-container'),
        audioPlayer: document.getElementById('audio-player'),
        playerModuleTitle: document.getElementById('player-module-title'),
        audioElement: document.getElementById('audio-element'),
        playPauseBtn: document.getElementById('play-pause-btn'),
        progressBar: document.getElementById('progress-bar'),
        progress: document.getElementById('progress'),
        currentTime: document.getElementById('current-time'),
        duration: document.getElementById('duration'),
        volumeBtn: document.getElementById('volume-btn'),
        volumeSlider: document.getElementById('volume-slider'),
        rewindBtn: document.getElementById('rewind-btn'),
        forwardBtn: document.getElementById('forward-btn'),
        speedBtn: document.getElementById('speed-btn'),
        progressIndicator: document.querySelector('.progress-indicator'),
        logoutBtn: document.getElementById('logout-btn'),
        sidebarFooter: document.querySelector('.sidebar-footer')
    };
    
    // Acessa os dados dos módulos e da avaliação final
    const modulos = window.modulos_data || {};
    const avaliacaoFinalEmbaralhado = window.avaliacaoFinalEmbaralhado || {};
    
    let currentModuleId = null;
    let currentQuizData = null;
    let currentQuestionIndex = 0;
    let score = 0;
    const speeds = [1, 1.25, 1.5, 2];
    let currentSpeedIndex = 0;
    let progressManager;
    let audioCompletedMarked = false;

    // --- FUNÇÃO PRINCIPAL E INICIALIZAÇÃO ---

    async function main() {
        if (!currentUser) {
            window.location.href = 'login.html';
            return;
        }

        // Adiciona lógica de logout
        if(domElements.logoutBtn) {
            domElements.logoutBtn.addEventListener('click', () => {
                sessionStorage.removeItem('currentUser');
                window.location.href = 'login.html';
            });
        }
        
        // Adiciona o link do painel de admin se o usuário for admin
        if (userRole === 'admin' && domElements.sidebarFooter) {
            const adminLink = document.createElement('a');
            adminLink.href = 'admin.html';
            adminLink.innerHTML = '<i class="fa-solid fa-user-shield"></i> Painel do Admin';
            domElements.sidebarFooter.prepend(adminLink);
        }

        // Inicializa o ProgressManager com o usuário e carrega os dados
        progressManager = await new ProgressManager(currentUser, userRole).init();

        // --- INTEGRAÇÃO CERTIFICADO ---
        // Adiciona botão "Meu Certificado" se elegível
        if (domElements.sidebarFooter) {
            const certManager = new window.CertificateManager(currentUser, progressManager);
            await certManager.loadCertificate();
            // Admin sempre tem acesso, usuários normais precisam atender critérios
            const isEligible = userRole === 'admin' || certManager.canIssueCertificate() || certManager.hasCertificate();
            if (isEligible) {
                let certLink = document.querySelector('.certificate-link');
                if (!certLink) {
                    certLink = document.createElement('a');
                    certLink.href = '#';
                    certLink.className = 'certificate-link';
                    certLink.innerHTML = '<i class="fa-solid fa-certificate"></i> <span>Meu Certificado</span>';
                    certLink.onclick = (e) => {
                        e.preventDefault();
                        window.showCertificateModal && window.showCertificateModal();
                    };
                    domElements.sidebarFooter.prepend(certLink);
                }
            }
        }

        if (!domElements.sidebarNav || !domElements.moduleTitle || !domElements.contentContainer) {
            console.error('Elementos essenciais do DOM não foram encontrados.');
            return;
        }
        
        populateSidebar();
        renderModule('1');
        const firstLink = document.querySelector('.sidebar a[data-module="1"]');
        if (firstLink) {
            firstLink.classList.add('active');
        }
        updateProgressIndicator();
    }

    // --- FUNÇÕES DE LÓGICA (O restante do arquivo) ---
    // (Todas as suas funções como populateSidebar, renderModule, etc. vêm aqui)
    
    // ... (cole aqui TODAS as outras funções do script.js, como populateSidebar, renderModule, etc.)
    
    function populateSidebar() {
        // Limpa a barra lateral antes de popular
        domElements.sidebarNav.innerHTML = '';

        // Ordena os módulos pelo ID numericamente
        const sortedModuleIds = Object.keys(modulos).sort((a, b) => parseInt(a) - parseInt(b));

        // Adiciona links para cada módulo ordenado
        sortedModuleIds.forEach(id => {
            const link = document.createElement('a');
            link.href = '#';
            link.setAttribute('data-module', id);
            
            const titleText = modulos[id].title;

            link.innerHTML = `
                <i class="fa-solid fa-book"></i>
                <span>${titleText}</span>
            `;

            link.addEventListener('click', (e) => handleNavClick(e, link));
            domElements.sidebarNav.appendChild(link);
        });

        // Adiciona o link para a avaliação final
        const finalLink = document.createElement('a');
        finalLink.href = '#';
        finalLink.setAttribute('data-module', 'final');
        finalLink.innerHTML = `
            <i class="fa-solid fa-graduation-cap"></i>
            <span>Avaliação Final</span>
        `;
        finalLink.addEventListener('click', (e) => handleNavClick(e, finalLink));
        domElements.sidebarNav.appendChild(finalLink);

        // Aplica classes de progresso aos links
        applyProgressClasses();
    }

    /**
     * Aplica classes de progresso aos links da barra lateral
     */
    function applyProgressClasses() {
        // Remove classes de progresso existentes
        document.querySelectorAll('#sidebar-nav a').forEach(link => {
            link.classList.remove('progress-locked', 'progress-available', 'progress-completed', 'progress-failed', 'progress-audio_pending');
        });

        // Aplica classes baseadas no status do progresso
        document.querySelectorAll('#sidebar-nav a[data-module]').forEach(link => {
            const moduleId = link.getAttribute('data-module');
            
            if (moduleId === 'final') {
                const canAccess = progressManager.canAccessFinalEvaluation();
                const status = progressManager.progress.final_evaluation.status;
                
                if (status === 'passed') {
                    link.classList.add('progress-completed');
                } else if (canAccess) {
                    link.classList.add('progress-available');
                } else {
                    link.classList.add('progress-locked');
                }
            } else {
                const status = progressManager.getModuleStatus(moduleId);
                link.classList.add(`progress-${status}`);
            }
        });

        // Atualiza indicador de progresso
        updateProgressIndicator();
    }

    /**
     * Atualiza o indicador de progresso no cabeçalho
     */
    function updateProgressIndicator() {
        if (domElements.progressIndicator) {
            const progress = progressManager.getOverallProgress();
            domElements.progressIndicator.textContent = `${progress}%`;
            
            // Adiciona classe de cor baseada no progresso
            domElements.progressIndicator.className = 'progress-indicator';
            if (progress >= 80) {
                domElements.progressIndicator.classList.add('high-progress');
            } else if (progress >= 50) {
                domElements.progressIndicator.classList.add('medium-progress');
            } else {
                domElements.progressIndicator.classList.add('low-progress');
            }
        }
    }

    /**
     * Manipula o clique nos links de navegação
     * @param {Event} e - O evento de clique
     */
    function handleNavClick(e, linkElement) {
        e.preventDefault();
        const moduleId = linkElement.getAttribute('data-module');

        // Verifica se o módulo pode ser acessado
        if (moduleId === 'final') {
            if (!progressManager.canAccessFinalEvaluation()) {
                alert('Complete pelo menos 6 módulos para acessar a Avaliação Final.');
                return;
            }
        } else {
            if (!progressManager.canAccessModule(moduleId)) {
                alert('Complete o módulo anterior para desbloquear este módulo.');
                return;
            }
        }

        // Remove a classe 'active' de todos os links e a adiciona ao clicado
        document.querySelectorAll('#sidebar-nav a').forEach(l => l.classList.remove('active'));
        linkElement.classList.add('active');

        if (moduleId === 'final') {
            startFinalEvaluation();
        } else {
            renderModule(moduleId);
        }
    }

    /**
     * Formata segundos para o formato "minutos:segundos"
     */
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    /**
     * Configura o player de áudio para o módulo atual
     * @param {string} audioSrc - O caminho para o arquivo de áudio
     * @param {string} moduleTitle - O título do módulo
     */
    function setupAudioPlayer(audioSrc, moduleTitle) {
        if (!audioSrc || !domElements.audioPlayer) {
            if(domElements.audioPlayer) domElements.audioPlayer.style.display = 'none';
            return;
        }

        console.log('🎵 Configurando player de áudio:', audioSrc);
        audioCompletedMarked = false; // Reseta a flag para o novo áudio

        // Cria e adiciona o botão de fechar se ele não existir
        if (!document.getElementById('close-player-btn')) {
            const closeBtn = document.createElement('button');
            closeBtn.id = 'close-player-btn';
            closeBtn.innerHTML = '&times;'; // Símbolo de 'X'
            closeBtn.onclick = closeAudioPlayer;
            domElements.audioPlayer.appendChild(closeBtn);
        }

        domElements.playerModuleTitle.textContent = moduleTitle;
        domElements.audioPlayer.style.display = 'flex';
        
        // Adicionar evento de erro antes de definir o src
        domElements.audioElement.onerror = (e) => {
            console.error('❌ Erro ao carregar áudio:', e);
            console.error('❌ Caminho do áudio:', audioSrc);
            // Se é URL externa, não concatena com origin
            const fullUrl = audioSrc.startsWith('http') ? audioSrc : window.location.origin + '/' + audioSrc;
            console.error('❌ URL completa:', fullUrl);
        };
        
        // Adicionar evento de carregamento
        domElements.audioElement.onloadstart = () => {
            console.log('🔄 Iniciando carregamento do áudio...');
        };
        
        domElements.audioElement.oncanplay = () => {
            console.log('✅ Áudio carregado e pronto para reproduzir');
        };
        
        domElements.audioElement.src = audioSrc;
        console.log('🎵 Áudio src definido:', domElements.audioElement.src);

        // Reset a velocidade para o padrão quando um novo áudio é carregado
        currentSpeedIndex = 0;
        domElements.audioElement.playbackRate = speeds[currentSpeedIndex];
        domElements.speedBtn.textContent = `${speeds[currentSpeedIndex]}x`;

        // --- Event Listeners ---
        domElements.audioElement.onloadedmetadata = () => {
            domElements.duration.textContent = formatTime(domElements.audioElement.duration);
            console.log('📊 Metadados carregados - Duração:', domElements.audioElement.duration);
        };

        domElements.audioElement.ontimeupdate = () => {
            const { currentTime, duration } = domElements.audioElement;
            if (isNaN(duration) || duration === 0) return;

            const progressPercent = (currentTime / duration) * 100;
            domElements.progress.style.width = `${progressPercent}%`;
            domElements.currentTime.textContent = formatTime(currentTime);

            // Marca como concluído se o usuário ouviu pelo menos 98% do áudio
            if (!audioCompletedMarked && progressPercent >= 98 && currentModuleId) {
                progressManager.markAudioAsCompleted(currentModuleId);
                audioCompletedMarked = true; // Impede que a função seja chamada múltiplas vezes
            }
        };

        // Adiciona o evento para fechar o player quando o áudio terminar
        domElements.audioElement.onended = () => {
            // Garante que o progresso seja marcado caso o usuário pule para o final
            if (!audioCompletedMarked && currentModuleId) {
                progressManager.markAudioAsCompleted(currentModuleId);
            }
            closeAudioPlayer();
        };

        domElements.rewindBtn.onclick = () => {
            domElements.audioElement.currentTime = Math.max(0, domElements.audioElement.currentTime - 10);
        };

        domElements.forwardBtn.onclick = () => {
            const duration = domElements.audioElement.duration;
            if (duration) {
                domElements.audioElement.currentTime = Math.min(duration, domElements.audioElement.currentTime + 10);
            }
        };

        domElements.playPauseBtn.onclick = () => {
            if (domElements.audioElement.paused) {
                console.log('▶️ Tentando reproduzir áudio...');
                domElements.audioElement.play().catch(error => {
                    console.error('❌ Erro ao reproduzir áudio:', error);
                    alert('Erro ao reproduzir áudio. Verifique se o arquivo existe e está acessível.');
                });
                domElements.playPauseBtn.classList.remove('play-btn');
                domElements.playPauseBtn.classList.add('pause-btn');
            } else {
                console.log('⏸️ Pausando áudio...');
                domElements.audioElement.pause();
                domElements.playPauseBtn.classList.remove('pause-btn');
                domElements.playPauseBtn.classList.add('play-btn');
            }
        };

        domElements.progressBar.onclick = (e) => {
            const rect = domElements.progressBar.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const width = rect.width;
            const duration = domElements.audioElement.duration;
            if(duration) {
                domElements.audioElement.currentTime = (x / width) * duration;
            }
        };

        domElements.volumeBtn.onclick = () => {
            domElements.audioElement.muted = !domElements.audioElement.muted;
            domElements.volumeBtn.classList.toggle('muted-btn');
        };

        domElements.volumeSlider.oninput = (e) => {
            domElements.audioElement.volume = e.target.value;
            domElements.audioElement.muted = e.target.value == 0;
            domElements.volumeBtn.classList.toggle('muted-btn', domElements.audioElement.muted);
        };

        domElements.speedBtn.onclick = () => {
            currentSpeedIndex = (currentSpeedIndex + 1) % speeds.length;
            const newSpeed = speeds[currentSpeedIndex];
            domElements.audioElement.playbackRate = newSpeed;
            domElements.speedBtn.textContent = `${newSpeed}x`;
        };

        // Não força a reprodução automática para evitar erros
        console.log('🎵 Player de áudio configurado com sucesso');
    }

    /**
     * Fecha e reseta o player de áudio
     */
    function closeAudioPlayer() {
        if (domElements.audioPlayer) {
            domElements.audioElement.pause();
            domElements.audioElement.src = ''; // Limpa o áudio para parar o download
            domElements.audioPlayer.style.display = 'none';
        }
    }

    // --- CONFIGURAÇÕES PARA OS DIFERENTES TIPOS DE QUIZ ---
    const quizConfigs = {
        module: {
            containerId: 'quiz-container',
            contentId: 'quiz-content',
            titleClass: 'quiz-title',
            resultsContainer: null, // Resultado é mostrado no mesmo container
            getResultsMessage: (percentage) => {
                if (percentage >= 70) return '<strong><i class="fa-solid fa-award"></i> Excelente!</strong> Você tem um ótimo conhecimento sobre o assunto.';
                if (percentage >= 50) return '<strong><i class="fa-solid fa-thumbs-up"></i> Bom trabalho!</strong> Você está no caminho certo.';
                return '<strong><i class="fa-solid fa-book-open"></i> Continue estudando.</strong> Reveja o conteúdo para fixar os conceitos.';
            },
            restartButtonText: '<i class="fa-solid fa-rotate-right"></i> Tentar Novamente'
        },
        final: {
            containerId: 'final-quiz-container',
            contentId: 'final-quiz-content',
            titleClass: 'final-quiz-title', // Pode ser estilizado de forma diferente
            resultsContainer: domElements.finalScoreContainer, // Container separado para o resultado
            getResultsMessage: (percentage) => {
                if (percentage >= 70) return '<div class="success"><h2><i class="fa-solid fa-award"></i> Parabéns! Você foi aprovado!</h2><p>Você demonstrou um excelente conhecimento sobre a PNSB e o Manejo de Águas Pluviais.</p></div>';
                return '<div class="failure"><h2><i class="fa-solid fa-book-open"></i> Não foi desta vez.</h2><p>Sua pontuação foi inferior a 70%. Recomendamos que revise os módulos e tente novamente.</p></div>';
            },
            restartButtonText: '<i class="fa-solid fa-rotate-right"></i> Refazer Avaliação'
        }
    };

    /**
     * Renderiza o conteúdo principal de um módulo (título, cards, botão de quiz)
     * @param {string} moduleId - O ID do módulo a ser renderizado
     */
    function renderModule(moduleId) {
        const moduleData = modulos[moduleId];
        if (!moduleData) {
            console.error(`Módulo ${moduleId} não encontrado.`);
            return;
        }
        
        document.title = moduleData.title; // Ajusta o título da página

        currentModuleId = moduleId;
        // Limpa todos os contêineres de conteúdo e quiz
        domElements.contentContainer.innerHTML = '';
        domElements.contentContainer.style.display = 'block'; // Garante que o conteúdo seja visível
        domElements.quizContainer.innerHTML = '';
        domElements.finalQuizContainer.innerHTML = '';
        domElements.finalScoreContainer.innerHTML = '';

        // Garante que todos os contêineres de quiz/score estejam ocultos ao trocar de módulo
        domElements.quizContainer.style.display = 'none';
        domElements.finalQuizContainer.style.display = 'none';
        domElements.finalScoreContainer.style.display = 'none';

        domElements.moduleTitle.textContent = moduleData.title;

        // Se houver áudio, cria o card de áudio clicável no topo
        if (moduleData.audio) {
            const audioCard = document.createElement('div');
            audioCard.className = 'card audio-card';
            
            // Verifica se o áudio já foi concluído para adicionar a classe
            const moduleProgress = progressManager.progress.modules[moduleId];
            if (moduleProgress && moduleProgress.audioCompleted) {
                audioCard.classList.add('audio-completed');
            }

            audioCard.innerHTML = `
                <div class="audio-card-icon-bg"><i class="fa-solid fa-volume-high"></i></div>
                <div class="audio-card-content">
                    <div class="audio-card-header"><i class="fa-solid fa-headphones"></i> Conversa Aprofundada do Módulo</div>
                    <div class="audio-card-body">Imersão completa no conteúdo através de uma conversa detalhada gerada por IA, baseada no material oficial do IBGE. Uma abordagem dinâmica e envolvente para compreender os conceitos fundamentais.</div>
                </div>
            `;
            audioCard.onclick = () => setupAudioPlayer(moduleData.audio, `Áudio do Módulo: ${moduleData.title}`);
            domElements.contentContainer.appendChild(audioCard);
        }

        // Renderiza os cards de conteúdo
        moduleData.cards.forEach(cardData => {
            const card = document.createElement('div');
            card.className = `card ${cardData.type}`;
            card.innerHTML = `<div class="card-header">${cardData.title}</div><div class="card-content">${cardData.content}</div>`;
            domElements.contentContainer.appendChild(card);
        });

        // Se houver um quiz, adiciona o botão para iniciá-lo
        if (moduleData.quiz && domElements.quizContainer) {
            // Adiciona um botão no final do conteúdo principal para iniciar o quiz
            const startQuizButton = document.createElement('button');
            startQuizButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Iniciar Quiz do Módulo ${moduleId}`;
            startQuizButton.className = 'start-quiz-btn';
            
            // A ação de clique irá renderizar o quiz no container de quiz
            startQuizButton.onclick = () => {
                // Mostra o container do quiz
                domElements.quizContainer.style.display = 'block';
                // Rola suavemente até o contêiner do quiz
                domElements.quizContainer.scrollIntoView({ behavior: 'smooth' });
                // Chama a nova função de quiz genérica
                renderQuiz(moduleData.quiz, quizConfigs.module);
            };
            
            domElements.contentContainer.appendChild(startQuizButton);
        }
    }

    /**
     * Renderiza um quiz (genérico para módulos e avaliação final)
     * @param {object} quizData - O objeto de dados do quiz
     * @param {object} config - O objeto de configuração do quiz (de quizConfigs)
     */
    function renderQuiz(quizData, config) {
        currentQuizData = quizData;
        currentQuestionIndex = 0;
        score = 0;

        const quizContainer = document.getElementById(config.containerId);
        if (!quizContainer) {
            console.error(`Quiz container #${config.containerId} not found`);
            return;
        }

        // Limpa e prepara o container
        quizContainer.innerHTML = `<h2 class="${config.titleClass}">${quizData.title}</h2><div id="${config.contentId}"></div>`;
        quizContainer.style.display = 'block';

        // Oculta o container de resultados (se houver um específico)
        if (config.resultsContainer) {
            config.resultsContainer.style.display = 'none';
        }

        showQuestion(config);
    }

    /**
     * Mostra a pergunta atual (função genérica)
     * @param {object} config - O objeto de configuração do quiz
     */
    function showQuestion(config) {
        const quizContent = document.getElementById(config.contentId);
        if (!quizContent) return;

        const questionData = currentQuizData.questions[currentQuestionIndex];
        if (!questionData) {
            showResults(config);
            return;
        }

        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'options';

        questionData.options.forEach(optionText => {
            const label = document.createElement('label');
            label.className = 'option';

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${currentQuestionIndex}`;
            input.value = optionText;

            // Anexa o input e o texto diretamente no label
            label.appendChild(input);
            label.appendChild(document.createTextNode(optionText));

            optionsContainer.appendChild(label);

            input.addEventListener('change', () => {
                handleAnswer(input.value, config);
            });
        });

        quizContent.innerHTML = `
            <div class="quiz-progress">
                <span>Questão ${currentQuestionIndex + 1} de ${currentQuizData.questions.length}</span>
                ${questionData.category ? `<small>Categoria: ${questionData.category}</small>` : ''}
            </div>
            <div class="question">${questionData.question}</div>
            <div class="options">${optionsContainer.innerHTML}</div>
            <div class="feedback-container"></div>
            <div class="quiz-nav"></div>
        `;

        const options = quizContent.querySelectorAll('.option input');
        options.forEach(option => {
            option.addEventListener('change', (event) => {
                handleAnswer(event.target.value, config);
            });
        });
    }

    /**
     * Manipula a resposta selecionada (função genérica)
     * @param {string} selectedValue - O valor da opção selecionada
     * @param {object} config - O objeto de configuração do quiz
     */
    function handleAnswer(selectedValue, config) {
        const quizContent = document.getElementById(config.contentId);
        const questionData = currentQuizData.questions[currentQuestionIndex];
        const correctAnswer = questionData.answer;
        const feedbackContainer = quizContent.querySelector('.feedback-container');
        const quizNav = quizContent.querySelector('.quiz-nav');

        quizContent.querySelectorAll('.options .option').forEach((label) => {
            const input = label.querySelector('input');
            input.disabled = true; // Desabilita todas as opções
            if (input.value === correctAnswer) {
                label.classList.add('correct');
            } else if (input.value === selectedValue) {
                label.classList.add('incorrect');
            }
        });

        // Novo: Lógica para buscar o feedback correto
        const feedbackText = questionData.feedbacks && questionData.feedbacks[selectedValue]
            ? questionData.feedbacks[selectedValue]
            : (questionData.feedback || ''); // Mantém compatibilidade com o formato antigo

        if (selectedValue === correctAnswer) {
            score++;
            feedbackContainer.innerHTML = `
                <div class="feedback correct">
                    <p><strong><i class="fa-solid fa-circle-check"></i> Resposta Correta!</strong></p>
                    ${feedbackText ? `<p>${feedbackText.replace(/^Correto. /i, '')}</p>` : ''}
                </div>
            `;
        } else {
            feedbackContainer.innerHTML = `
                <div class="feedback incorrect">
                    <p><strong><i class="fa-solid fa-circle-xmark"></i> Resposta Incorreta.</strong></p>
                    ${feedbackText ? `<p>${feedbackText.replace(/^Incorreto. /i, '')}</p>` : ''}
                </div>
            `;
        }

        if (currentQuestionIndex < currentQuizData.questions.length - 1) {
            quizNav.innerHTML = `<button class="quiz-button next-question-btn">Próxima Pergunta <i class="fa-solid fa-arrow-right"></i></button>`;
            quizNav.querySelector('.next-question-btn').addEventListener('click', () => {
                currentQuestionIndex++;
                showQuestion(config);
            });
        } else {
            quizNav.innerHTML = `<button class="quiz-button show-results-btn">Ver Resultado Final</button>`;
            quizNav.querySelector('.show-results-btn').addEventListener('click', () => showResults(config));
        }

        // Rola a página para o botão de navegação para que ele fique visível
        setTimeout(() => {
            quizNav.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 150); // Um pequeno delay para a renderização do feedback
    }
    
    /**
     * Mostra a tela de resultados (função genérica)
     * @param {object} config - O objeto de configuração do quiz
     */
    function showResults(config) {
        const quizContainer = document.getElementById(config.containerId);
        const resultsContainer = config.resultsContainer || quizContainer; // Usa container específico ou o do próprio quiz
        const contentContainer = config.resultsContainer ? resultsContainer : document.getElementById(config.contentId);
        
        const totalQuestions = currentQuizData.questions.length;
        const percentage = totalQuestions > 0 ? ((score / totalQuestions) * 100).toFixed(1) : 0;
        
        const resultMessage = config.getResultsMessage(percentage);

        // Registra o progresso baseado no tipo de quiz
        if (config.containerId === 'final-quiz-container') {
            // Avaliação final
            progressManager.completeFinalEvaluation(parseFloat(percentage));
        } else if (currentModuleId) {
            // Quiz de módulo
            progressManager.completeModule(currentModuleId, parseFloat(percentage));
        }

        // Se o resultado for em um container separado, oculta o de perguntas
        if (config.resultsContainer) {
            quizContainer.style.display = 'none';
            resultsContainer.style.display = 'block';
        }

        contentContainer.innerHTML = `
            <div class="quiz-results final-results">
                 <h1>${config.containerId === 'final-quiz-container' ? 'Resultado da Avaliação Final' : 'Resultado do Quiz'}</h1>
                <p>Você acertou <strong>${score}</strong> de <strong>${totalQuestions}</strong> questões.</p>
                <div class="progress-bar-container">
                    <div class="progress-bar" style="width: ${percentage}%; background-color: ${percentage >= 70 ? '#28a745' : '#dc3545'};">
                        <span>${percentage}%</span>
                    </div>
                </div>
                <div class="final-result-message">${resultMessage}</div>
                <button class="quiz-button restart-quiz-btn">
                    ${config.restartButtonText}
                </button>
            </div>
        `;

        contentContainer.querySelector('.restart-quiz-btn').addEventListener('click', () => {
            renderQuiz(currentQuizData, config);
        });

        // Atualiza indicadores visuais após registrar progresso
        applyProgressClasses();
    }

    /**
     * Inicia a avaliação final
     */
    function startFinalEvaluation() {
        document.title = avaliacaoFinalEmbaralhado.title; // Ajusta o título da página

        // Limpa containers de conteúdo do módulo e quiz do módulo
        domElements.contentContainer.innerHTML = '';
        domElements.contentContainer.style.display = 'none'; // Oculta o container de conteúdo
        domElements.quizContainer.innerHTML = '';
        domElements.quizContainer.style.display = 'none';

        // Cria interface premium para a avaliação final
        domElements.finalQuizContainer.innerHTML = `
            <div class="quiz-title">
                <div class="title-content">
                    <h1><i class="fa-solid fa-bullseye"></i> Avaliação Final PNSB</h1>
                    <p class="subtitle">Teste seus conhecimentos sobre Drenagem e Manejo de Águas Pluviais</p>
                    <div class="quiz-stats">
                        <div class="stat-item">
                            <span class="stat-number">${avaliacaoFinalEmbaralhado.questions.length}</span>
                            <span class="stat-label">Questões</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">70%</span>
                            <span class="stat-label">Aprovação</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">∞</span>
                            <span class="stat-label">Tempo</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="final-quiz-content" class="quiz-content">
                <div class="quiz-intro">
                    <div class="intro-card">
                        <h2>📋 Instruções da Avaliação</h2>
                        <ul>
                            <li>✅ A avaliação contém <strong>${avaliacaoFinalEmbaralhado.questions.length} questões</strong> sobre todos os módulos</li>
                            <li>✅ Você pode navegar livremente entre as questões</li>
                            <li>✅ Cada questão tem <strong>feedback educativo</strong></li>
                            <li>✅ Aprovação com <strong>70% ou mais</strong> de acertos</li>
                            <li>✅ Não há limite de tempo para responder</li>
                        </ul>
                        <div class="intro-actions">
                            <button class="start-quiz-btn" onclick="startFinalQuiz()">
                                <i class="fa-solid fa-play"></i>
                                Iniciar Avaliação
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        domElements.finalQuizContainer.style.display = 'block';
        domElements.moduleTitle.textContent = '🏆 Avaliação Final';
        domElements.audioPlayer.style.display = 'none';
    }

    /**
     * Inicia o quiz da avaliação final
     */
    function startFinalQuiz() {
        // Usa a função de renderização de quiz genérica com a configuração da avaliação final
        renderQuiz(avaliacaoFinalEmbaralhado, quizConfigs.final);
    }

    // Torna a função startFinalQuiz global para ser chamada pelo HTML
    window.startFinalQuiz = startFinalQuiz;

    // Torna a função de atualização de indicadores global
    window.updateProgressIndicators = function(pm) {
        // Atualiza a referência ao progressManager se for passada
        if (pm) {
            progressManager = pm;
        }
        applyProgressClasses();
        // Atualiza também o estado visual do card de áudio, se visível
        if (currentModuleId && modulos[currentModuleId].audio) {
             const audioCard = domElements.contentContainer.querySelector('.audio-card');
             if (audioCard) {
                const moduleProgress = progressManager.progress.modules[currentModuleId];
                if (moduleProgress && moduleProgress.audioCompleted) {
                    audioCard.classList.add('audio-completed');
                } else {
                    audioCard.classList.remove('audio-completed');
                }
             }
        }
    };

    // --- MODAL DO CERTIFICADO ---

    window.showCertificateModal = async function() {
        // Se já existe, só exibe
        let modal = document.getElementById('certificate-modal');
        if (!modal) {
            // Carrega o HTML do modal (estático)
            const response = await fetch('certificate-modal.html');
            const html = await response.text();
            const div = document.createElement('div');
            div.innerHTML = html;
            document.body.appendChild(div.firstElementChild);
            // Adiciona o <style> do modal
            const style = div.querySelector('style');
            if (style) document.body.appendChild(style);
            modal = document.getElementById('certificate-modal');
        }
        modal.style.display = 'flex';

        // Carrega dados do certificado
        const currentUser = sessionStorage.getItem('currentUser');
        const userRole = sessionStorage.getItem('userRole');
        const progressManager = window.progressManager || (window.ProgressManager && new window.ProgressManager(currentUser, userRole));
        const certManager = new window.CertificateManager(currentUser, progressManager);
        await certManager.loadCertificate();
        const certData = certManager.getCertificateData();

        // Preenche preview e info
        const previewDiv = document.getElementById('certificate-preview');
        const infoDiv = document.getElementById('certificate-info');
        if (!certData) {
            previewDiv.innerHTML = '<div class="loading-preview">Certificado não encontrado.</div>';
            infoDiv.innerHTML = '';
            return;
        }
        // Gera preview do PDF (imagem)
        previewDiv.innerHTML = '<div class="loading-preview">Gerando preview...</div>';
        const generator = new window.CertificateGenerator(certData);
        await generator.generatePDF(certData);
        // Gera imagem do PDF (primeira página)
        const pdfDataUrl = generator.pdf.output('datauristring');
        previewDiv.innerHTML = `<iframe src="${pdfDataUrl}" style="width:100%;min-height:220px;border:none;"></iframe>`;

        // Preenche info
        infoDiv.innerHTML = `
            <strong>Nome:</strong> ${certData.username}<br>
            <strong>Data de Emissão:</strong> ${new Date(certData.issuedDate).toLocaleDateString('pt-BR')}<br>
            <strong>Pontuação Final:</strong> ${certData.finalScore}%<br>
            <strong>Módulos Concluídos:</strong> ${certData.completedModules}/8<br>
            <strong>Código de Validação:</strong> <span style="font-family:monospace;">${certData.validationCode}</span><br>
            <strong>Status:</strong> ${certData.status === 'issued' ? 'Emitido' : 'Revogado'}
            ${userRole === 'admin' ? '<br><strong>Função:</strong> Administrador' : ''}
        `;

        // Botão de download
        document.getElementById('download-certificate-btn').onclick = async () => {
            const downloadGenerator = new window.CertificateGenerator(certData);
            await downloadGenerator.generatePDF(certData);
            downloadGenerator.downloadPDF(`certificado-${certData.username}.pdf`);
            certManager.incrementDownloadCount();
        };
        // Botão de validação
        document.getElementById('validate-certificate-btn').onclick = () => {
            window.open(`validate.html?code=${certData.validationCode}`, '_blank');
        };
        // Botão de compartilhar
        document.getElementById('share-certificate-btn').onclick = () => {
            const url = `${window.location.origin}/validate.html?code=${certData.validationCode}`;
            if (navigator.share) {
                navigator.share({
                    title: 'Meu Certificado PNSB',
                    text: 'Confira meu certificado do Curso PNSB!',
                    url
                });
            } else {
                navigator.clipboard.writeText(url);
                alert('Link de validação copiado para a área de transferência!');
            }
        };
    };

    window.closeCertificateModal = function() {
        const modal = document.getElementById('certificate-modal');
        if (modal) modal.style.display = 'none';
    };

    // --- INICIA A APLICAÇÃO ---
    await main();

    // O código original que estava solto ou dentro de um 'DOMContentLoaded' normal
    // agora está encapsulado e é chamado pela função `main`.
}); 