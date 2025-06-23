/**
 * Sistema de Certificação PNSB - CertificateManager
 * Gerencia a emissão, validação e controle de certificados
 */

class CertificateManager {
    constructor(username) {
        this.username = username;
        
        // Detecta automaticamente se está em produção ou desenvolvimento
        const baseURL = window.location.hostname === 'localhost' ? 'http://localhost:3000' : '';
        this.API_URL = `${baseURL}/api/certificates/${this.username}`;
        this.BASE_URL = baseURL;
        
        // URL de validação deve usar a mesma origem
        this.VALIDATION_URL = window.location.origin + '/validate.html';
        
        this.certificateData = null;
        this.validationCode = null;
    }

    /**
     * Verifica se o usuário pode gerar certificado
     */
    async canGenerateCertificate() {
        try {
            const response = await fetch(`${this.BASE_URL}/api/progress/${this.username}`);
            if (!response.ok) return false;
            
            const progress = await response.json();
            
            // Verifica se todos os módulos foram concluídos e avaliação final passou
            const allModulesCompleted = this.checkAllModulesCompleted(progress);
            const finalEvaluationPassed = progress.final_evaluation && 
                                        progress.final_evaluation.status === 'passed' &&
                                        progress.final_evaluation.score >= 70;
            
            return allModulesCompleted && finalEvaluationPassed;
        } catch (error) {
            console.error('Erro ao verificar elegibilidade:', error);
            return false;
        }
    }

    /**
     * Verifica se todos os módulos foram concluídos
     */
    checkAllModulesCompleted(progress) {
        if (!progress.modules) return false;
        
        for (let i = 1; i <= 8; i++) {
            const moduleId = i.toString();
            const module = progress.modules[moduleId];
            
            if (!module || module.status !== 'completed') {
                return false;
            }
        }
        return true;
    }

    /**
     * Carrega dados do certificado se existir
     */
    async loadCertificate() {
        try {
            const response = await fetch(`${this.API_URL}`);
            if (response.ok) {
                const data = await response.json();
                this.certificateData = data;
                this.validationCode = data.validationCode;
                return data;
            }
            return null;
        } catch (error) {
            console.error('Erro ao carregar certificado:', error);
            return null;
        }
    }

    /**
     * Verifica se já possui certificado
     */
    async hasCertificate() {
        try {
            const cert = await this.loadCertificate();
            return cert !== null;
        } catch (error) {
            console.error('Erro ao verificar certificado:', error);
            return false;
        }
    }

    /**
     * Verifica se pode emitir certificado
     */
    canIssueCertificate() {
        // Esta função será chamada após loadCertificate, então podemos usar dados em cache
        return this.certificateData === null; // Pode emitir se não tem certificado
    }

    /**
     * Gera um novo certificado
     */
    async generateCertificate() {
        try {
            // Verifica elegibilidade
            const canGenerate = await this.canGenerateCertificate();
            if (!canGenerate) {
                throw new Error('Você precisa completar todos os módulos e passar na avaliação final para gerar o certificado.');
            }

            // Verifica se já possui certificado
            const hasExisting = await this.hasCertificate();
            if (hasExisting) {
                throw new Error('Você já possui um certificado emitido.');
            }

            const response = await fetch(`${this.API_URL}/generate`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Erro ao gerar certificado');
            }

            const result = await response.json();
            this.certificateData = result.certificate;
            this.validationCode = result.validationCode;
            
            return result;
        } catch (error) {
            console.error('Erro ao gerar certificado:', error);
            throw error;
        }
    }

    /**
     * Baixa o certificado em PDF
     */
    async downloadCertificate() {
        try {
            if (!this.validationCode) {
                // Tenta recuperar o código de validação
                const cert = await this.getCertificateData();
                if (cert && cert.validationCode) {
                    this.validationCode = cert.validationCode;
                } else {
                    throw new Error('Código de validação não encontrado');
                }
            }

            const response = await fetch(`${this.API_URL}/download`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ validationCode: this.validationCode })
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Erro ao baixar certificado');
            }

            // Cria um blob com o PDF e faz o download
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = `certificado-pnsb-${this.username}.pdf`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);

            return true;
        } catch (error) {
            console.error('Erro ao baixar certificado:', error);
            throw error;
        }
    }

    /**
     * Obtém dados do certificado existente
     */
    async getCertificateData() {
        try {
            const response = await fetch(`${this.API_URL}/data`);
            if (response.ok) {
                const data = await response.json();
                this.certificateData = data.certificate;
                this.validationCode = data.validationCode;
                return data;
            }
            return null;
        } catch (error) {
            console.error('Erro ao obter dados do certificado:', error);
            return null;
        }
    }

    /**
     * Valida um certificado pelo código
     */
    static async validateCertificate(validationCode) {
        try {
            // URL de validação dinâmica baseada no ambiente
            const baseURL = window.location.hostname === 'localhost' ? 'http://localhost:3000' : '';
            const response = await fetch(`${baseURL}/api/certificates/validate/${validationCode}`);
            
            if (response.ok) {
                return await response.json();
            } else {
                const error = await response.json();
                throw new Error(error.message || 'Certificado não encontrado');
            }
        } catch (error) {
            console.error('Erro ao validar certificado:', error);
            throw error;
        }
    }

    /**
     * Gera URL de validação do certificado
     */
    getValidationURL() {
        if (!this.validationCode) {
            throw new Error('Código de validação não disponível');
        }
        return `${this.VALIDATION_URL}?code=${this.validationCode}`;
    }

    /**
     * Compartilha certificado (gera link de validação)
     */
    shareCertificate() {
        try {
            const validationURL = this.getValidationURL();
            
            // Copia para clipboard se disponível
            if (navigator.clipboard) {
                navigator.clipboard.writeText(validationURL).then(() => {
                    this.showNotification('Link de validação copiado para a área de transferência!', 'success');
                });
            } else {
                // Fallback para navegadores mais antigos
                const textarea = document.createElement('textarea');
                textarea.value = validationURL;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                this.showNotification('Link de validação copiado!', 'success');
            }
            
            return validationURL;
        } catch (error) {
            console.error('Erro ao compartilhar certificado:', error);
            throw error;
        }
    }

    /**
     * Mostra notificação na tela
     */
    showNotification(message, type = 'info') {
        // Remove notificação anterior se existir
        const existingNotification = document.querySelector('.certificate-notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = `certificate-notification notification-${type}`;
        notification.textContent = message;
        
        // Estilos da notificação
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            max-width: 300px;
            animation: slideInRight 0.3s ease;
        `;
        
        // Cores por tipo
        const colors = {
            success: '#4CAF50',
            error: '#F44336',
            warning: '#FF9800',
            info: '#2196F3'
        };
        
        notification.style.backgroundColor = colors[type] || colors.info;
        
        document.body.appendChild(notification);
        
        // Remover após 4 segundos
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.remove();
                    }
                }, 300);
            }
        }, 4000);
    }

    /**
     * Função para uso administrativo - listar todos os certificados
     */
    static async getAllCertificates(adminUser) {
        try {
            const baseURL = window.location.hostname === 'localhost' ? 'http://localhost:3000' : '';
            const response = await fetch(`${baseURL}/api/admin/all-certificates?adminUser=${adminUser}`);
            
            if (response.ok) {
                return await response.json();
            } else {
                throw new Error('Erro ao obter lista de certificados');
            }
        } catch (error) {
            console.error('Erro ao obter certificados:', error);
            throw error;
        }
    }

    /**
     * Cria interface de certificado
     */
    async createCertificateInterface() {
        try {
            const container = document.getElementById('certificate-container');
            if (!container) {
                console.error('Container de certificado não encontrado');
                return;
            }

            // Verifica status atual
            const hasExisting = await this.hasCertificate();
            const canGenerate = await this.canGenerateCertificate();

            if (hasExisting) {
                // Usuário já tem certificado
                const certData = await this.getCertificateData();
                this.renderExistingCertificate(container, certData);
            } else if (canGenerate) {
                // Usuário pode gerar certificado
                this.renderGenerateButton(container);
            } else {
                // Usuário ainda não pode gerar certificado
                this.renderRequirements(container);
            }
        } catch (error) {
            console.error('Erro ao criar interface:', error);
            this.renderError(container, 'Erro ao carregar informações do certificado');
        }
    }

    /**
     * Renderiza certificado existente
     */
    renderExistingCertificate(container, certData) {
        container.innerHTML = `
            <div class="certificate-existing">
                <h3>Seu Certificado PNSB</h3>
                <div class="certificate-info">
                    <p><strong>Emitido em:</strong> ${new Date(certData.certificate.issuedDate).toLocaleDateString('pt-BR')}</p>
                    <p><strong>Pontuação Final:</strong> ${certData.certificate.finalScore}%</p>
                    <p><strong>Código de Validação:</strong> <code>${certData.validationCode}</code></p>
                </div>
                <div class="certificate-actions">
                    <button class="btn btn-primary" onclick="certificateManager.downloadCertificate()">
                        <i class="fas fa-download"></i> Baixar PDF
                    </button>
                    <button class="btn btn-secondary" onclick="certificateManager.shareCertificate()">
                        <i class="fas fa-share"></i> Compartilhar
                    </button>
                    <a href="${this.getValidationURL()}" target="_blank" class="btn btn-outline">
                        <i class="fas fa-external-link-alt"></i> Validar Online
                    </a>
                </div>
            </div>
        `;
    }

    /**
     * Renderiza botão de gerar certificado
     */
    renderGenerateButton(container) {
        container.innerHTML = `
            <div class="certificate-generate">
                <h3>Parabéns! Você concluiu o curso</h3>
                <p>Você completou todos os módulos e passou na avaliação final. Agora pode gerar seu certificado oficial.</p>
                <button class="btn btn-success" onclick="certificateManager.handleGenerateCertificate()">
                    <i class="fas fa-trophy"></i> Gerar Certificado
                </button>
            </div>
        `;
    }

    /**
     * Renderiza requisitos não atendidos
     */
    renderRequirements(container) {
        container.innerHTML = `
            <div class="certificate-requirements">
                <h3>Certificado PNSB</h3>
                <p>Para obter seu certificado, você precisa:</p>
                <ul>
                    <li>✅ Completar todos os 8 módulos do curso</li>
                    <li>✅ Obter pelo menos 70% na avaliação final</li>
                </ul>
                <p class="text-muted">Continue estudando para desbloquear seu certificado!</p>
            </div>
        `;
    }

    /**
     * Renderiza erro
     */
    renderError(container, message) {
        container.innerHTML = `
            <div class="certificate-error">
                <h3>Erro</h3>
                <p>${message}</p>
                <button class="btn btn-secondary" onclick="location.reload()">
                    <i class="fas fa-refresh"></i> Tentar Novamente
                </button>
            </div>
        `;
    }

    /**
     * Handler para gerar certificado
     */
    async handleGenerateCertificate() {
        try {
            const button = event.target;
            const originalText = button.innerHTML;
            
            button.disabled = true;
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Gerando...';
            
            await this.generateCertificate();
            
            this.showNotification('Certificado gerado com sucesso!', 'success');
            
            // Recarrega a interface
            setTimeout(() => {
                this.createCertificateInterface();
            }, 1000);
            
        } catch (error) {
            this.showNotification(error.message, 'error');
            
            // Restaura o botão
            const button = event.target;
            button.disabled = false;
            button.innerHTML = '<i class="fas fa-trophy"></i> Gerar Certificado';
        }
    }
}

// Adicionar CSS para animações
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .certificate-existing, .certificate-generate, .certificate-requirements, .certificate-error {
        background: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        text-align: center;
    }
    
    .certificate-info {
        margin: 20px 0;
        text-align: left;
    }
    
    .certificate-actions {
        display: flex;
        gap: 10px;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 20px;
    }
    
    .btn {
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-weight: 500;
        transition: all 0.3s ease;
    }
    
    .btn-primary { background: #2980b9; color: white; }
    .btn-secondary { background: #95a5a6; color: white; }
    .btn-success { background: #4CAF50; color: white; }
    .btn-outline { background: transparent; border: 2px solid #2980b9; color: #2980b9; }
    
    .btn:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.2); }
    .btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
    
    code {
        background: #f4f4f4;
        padding: 4px 8px;
        border-radius: 4px;
        font-family: monospace;
        color: #e74c3c;
    }
`;
document.head.appendChild(style);

// Tornar disponível globalmente
window.CertificateManager = CertificateManager; 