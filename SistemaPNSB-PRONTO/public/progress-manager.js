/**
 * Sistema de Progresso PNSB - Gerenciador Discreto com Backend
 */

class ProgressManager {
    constructor(username, role = 'user') {
        if (!username) {
            throw new Error('ProgressManager requer um nome de usuário.');
        }
        this.username = username;
        this.role = role;
        this.progress = {}; // O progresso será carregado de forma assíncrona
        this.API_URL = `http://localhost:3000/api/progress/${this.username}`;
    }

    /**
     * Inicializa o sistema de progresso, carregando os dados do backend.
     * Esta função agora é assíncrona.
     */
    async init() {
        await this.loadProgress();

        // Garante que o módulo 1 sempre esteja disponível na primeira vez
        if (!this.progress.modules) {
            this.progress.modules = {};
        }
        if (!this.progress.modules['1']) {
            this.progress.modules['1'] = { status: 'available', score: null, date: null };
        }
        
        // Atualiza status dos módulos baseado no progresso
        this.updateModuleAvailability();
        
        // Salva o progresso inicial no backend
        await this.saveProgress();
        return this; // Retorna a instância para encadeamento
    }

    /**
     * Carrega o progresso do backend
     */
    async loadProgress() {
        try {
            const response = await fetch(this.API_URL);
            if (!response.ok) {
                // Se o usuário não tiver progresso, o backend pode retornar 404, o que é esperado.
                this.progress = {};
            } else {
                this.progress = await response.json();
            }
        } catch (e) {
            console.error('Erro ao carregar progresso do backend:', e);
            this.progress = {}; // Começa com progresso vazio em caso de erro de rede
        }
        
        // Garante que a estrutura base exista
        if (!this.progress.modules) {
            this.progress.modules = {};
        }
        // Adiciona a verificação para cada módulo individualmente
        for (let i = 1; i <= 8; i++) {
            const moduleId = i.toString();
            if (!this.progress.modules[moduleId]) {
                this.progress.modules[moduleId] = { 
                    status: 'locked', 
                    score: null, 
                    date: null, 
                    audioCompleted: false // Novo campo
                };
            } else if (this.progress.modules[moduleId].audioCompleted === undefined) {
                // Garante que o novo campo seja adicionado a progressos antigos
                this.progress.modules[moduleId].audioCompleted = false;
            }
        }
        
        if (!this.progress.final_evaluation) {
            this.progress.final_evaluation = { status: 'not_attempted', score: null, date: null };
        }
        if (!this.progress.certificate) {
             this.progress.certificate = { issued: false, date: null, final_score: null };
        }
    }

    /**
     * Salva o progresso no backend
     */
    async saveProgress() {
        try {
            await fetch(this.API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.progress)
            });
        } catch (e) {
            console.error('Erro ao salvar progresso no backend:', e);
        }
    }

    /**
     * Atualiza a disponibilidade dos módulos baseado no progresso
     */
    updateModuleAvailability() {
        for (let i = 1; i <= 8; i++) {
            const moduleId = i.toString();
            
            if (!this.progress.modules[moduleId]) {
                this.progress.modules[moduleId] = { 
                    status: 'locked', score: null, date: null, audioCompleted: false
                };
            }

            // Se um módulo já está concluído ou falhou, NUNCA altere seu status.
            const currentStatus = this.progress.modules[moduleId].status;
            if (currentStatus === 'completed' || currentStatus === 'failed') {
                continue;
            }

            // Módulo 1 deve estar sempre disponível se não estiver nos estados finais.
            if (i === 1) {
                this.progress.modules[moduleId].status = 'available';
                continue;
            }

            // Para outros módulos, verifique o anterior para decidir se libera o atual.
            const previousModuleId = (i - 1).toString();
            const previousModule = this.progress.modules[previousModuleId];
            
            if (previousModule && previousModule.status === 'completed') {
                this.progress.modules[moduleId].status = 'available';
            } else {
                this.progress.modules[moduleId].status = 'locked';
            }
        }
    }

    /**
     * Registra conclusão de um módulo
     */
    async completeModule(moduleId, score) {
        const module = this.progress.modules[moduleId];
        if (!module) return;

        const percentage = score;
        const quizPassed = percentage >= 70;
        
        module.score = percentage;
        module.date = new Date().toISOString();

        // A lógica de conclusão agora depende do áudio também
        if (quizPassed && module.audioCompleted) {
            module.status = 'completed';
        } else if (quizPassed) {
            module.status = 'available'; // Quiz passado, mas áudio pendente. Mantém disponível.
        } else {
            module.status = 'failed';
        }

        // Atualiza disponibilidade dos próximos módulos
        this.updateModuleAvailability();
        await this.saveProgress();

        // Atualiza indicadores visuais
        this.updateVisualIndicators();
    }

    /**
     * Marca o áudio de um módulo como concluído
     */
    async markAudioAsCompleted(moduleId) {
        const module = this.progress.modules[moduleId];
        if (module && !module.audioCompleted) {
            module.audioCompleted = true;
            
            // Verifica se o quiz já foi passado para completar o módulo
            if (module.score >= 70) {
                module.status = 'completed';
                this.updateModuleAvailability();
            }

            await this.saveProgress();
            this.updateVisualIndicators();
            console.log(`Áudio do Módulo ${moduleId} concluído.`);
        }
    }

    /**
     * Registra tentativa da avaliação final
     */
    async completeFinalEvaluation(score) {
        const percentage = score;
        const status = percentage >= 70 ? 'passed' : 'failed';
        
        this.progress.final_evaluation.status = status;
        this.progress.final_evaluation.score = percentage;
        this.progress.final_evaluation.date = new Date().toISOString();

        // Se aprovado, emite certificado
        if (status === 'passed') {
            this.progress.certificate.issued = true;
            this.progress.certificate.date = new Date().toISOString();
            this.progress.certificate.final_score = percentage;
        }

        await this.saveProgress();
        this.updateVisualIndicators();
    }

    /**
     * Obtém o status de um módulo
     */
    getModuleStatus(moduleId) {
        const module = this.progress.modules[moduleId];
        if (!module) return 'locked';
        
        // Retorna um status especial para UI se o quiz foi passado mas o áudio não
        if (module.score >= 70 && !module.audioCompleted) {
            return 'audio_pending';
        }
        
        return module.status || 'locked';
    }

    /**
     * Obtém a pontuação de um módulo
     */
    getModuleScore(moduleId) {
        return this.progress.modules[moduleId]?.score || null;
    }

    /**
     * Calcula a porcentagem de progresso geral
     */
    getOverallProgress() {
        const completedModules = Object.values(this.progress.modules || {}).filter(m => m.status === 'completed').length;
        return (completedModules / 8) * 100;
    }

    /**
     * Retorna o status de conclusão detalhado.
     * @returns {{completedModules: number, finalEvaluation: {status: string, score: number}}}
     */
    getCompletionStatus() {
        const completedModules = Object.values(this.progress.modules || {})
            .filter(module => module.status === 'completed').length;
        
        const finalEvaluation = this.progress.final_evaluation || { status: 'locked', score: 0 };
        
        return { completedModules, finalEvaluation };
    }

    /**
     * Verifica se um módulo pode ser acessado
     */
    canAccessModule(moduleId) {
        if (this.role === 'admin') {
            return true; // Admin pode acessar tudo
        }
        const status = this.getModuleStatus(moduleId);
        return status === 'available' || status === 'completed' || status === 'failed' || status === 'audio_pending';
    }

    /**
     * Verifica se a avaliação final pode ser acessada
     */
    canAccessFinalEvaluation() {
        if (this.role === 'admin') {
            return true; // Admin pode acessar tudo
        }
        const completedModules = Object.values(this.progress.modules)
            .filter(module => module.status === 'completed').length;
        return completedModules >= 6; // Pelo menos 6 módulos concluídos
    }

    /**
     * Reseta todo o progresso
     */
    resetProgress() {
        this.progress = {
            modules: {}, // Começa vazio
            final_evaluation: { status: 'not_attempted', score: null, date: null },
            certificate: { issued: false, date: null, final_score: null }
        };
        
        // Inicializa todos os módulos de 1 a 8 corretamente
        for (let i = 1; i <= 8; i++) {
            this.progress.modules[i.toString()] = {
                status: (i === 1) ? 'available' : 'locked', // Módulo 1 disponível, outros bloqueados
                score: null,
                date: null,
                audioCompleted: false
            };
        }
        
        this.saveProgress();
        this.updateVisualIndicators();
    }

    /**
     * Atualiza indicadores visuais (será implementado na integração)
     */
    updateVisualIndicators() {
        // Esta função será chamada pelo script principal
        if (window.updateProgressIndicators) {
            window.updateProgressIndicators(this);
        }
    }

    /**
     * Obtém dados para certificado
     */
    getCertificateData() {
        if (!this.progress.certificate.issued) return null;
        
        return {
            issued: true,
            date: this.progress.certificate.date,
            final_score: this.progress.certificate.final_score,
            completed_modules: Object.values(this.progress.modules)
                .filter(module => module.status === 'completed').length,
            total_modules: 8
        };
    }
}

// Exporta para uso global
window.ProgressManager = ProgressManager; 