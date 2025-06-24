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
        
        // Verificar se é admin
        this.isAdmin = sessionStorage.getItem('userRole') === 'admin';
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
            // Se não for 200 (incluindo 404), retorna null (normal quando não tem certificado)
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
            // Primeiro verifica se pode gerar certificado (completou curso)
            const canGenerate = await this.canGenerateCertificate();
            if (!canGenerate) {
                return false; // Se não completou curso, não tem certificado
            }
            
            // Só então tenta carregar o certificado
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
            // Admins podem gerar certificados para qualquer usuário
            if (!this.isAdmin) {
                // Verifica elegibilidade para usuários comuns
                const canGenerate = await this.canGenerateCertificate();
                if (!canGenerate) {
                    throw new Error('Você precisa completar todos os módulos e passar na avaliação final para gerar o certificado.');
                }

                // Verifica se já possui certificado
                const hasExisting = await this.hasCertificate();
                if (hasExisting) {
                    throw new Error('Você já possui um certificado emitido.');
                }
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
     * Download de certificado para administradores (qualquer usuário)
     */
    async downloadCertificateAsAdmin(validationCode) {
        try {
            if (!this.isAdmin) {
                throw new Error('Acesso negado. Apenas administradores podem usar esta função.');
            }

            const response = await fetch(`${this.BASE_URL}/api/certificates/admin/download`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ validationCode: validationCode })
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Erro ao baixar certificado');
            }

            const result = await response.json();
            const certificate = result.certificate;

            // Cria um blob com o PDF e faz o download
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = `certificado-pnsb-${certificate.username}.pdf`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);

            return true;
        } catch (error) {
            console.error('Erro ao baixar certificado como admin:', error);
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
                this.certificateData = data;
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
     * Valida um certificado usando o código
     */
    static async validateCertificate(validationCode) {
        try {
            // Detecta automaticamente se está em produção ou desenvolvimento
            const baseURL = window.location.hostname === 'localhost' ? 'http://localhost:3000' : '';
            
            const response = await fetch(`${baseURL}/api/certificates/validate/${validationCode}`);
            
            if (!response.ok) {
                return {
                    valid: false,
                    error: 'Código de validação não encontrado'
                };
            }
            
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro ao validar certificado:', error);
            return {
                valid: false,
                error: 'Erro ao conectar com o servidor'
            };
        }
    }

    /**
     * Obtém a URL de validação do certificado
     */
    getValidationURL() {
        if (!this.validationCode) {
            throw new Error('Código de validação não disponível');
        }
        return `${this.VALIDATION_URL}?code=${this.validationCode}`;
    }

    /**
     * Compartilha o certificado (copia URL de validação)
     */
    shareCertificate() {
        try {
            const validationURL = this.getValidationURL();
            
            // Tenta usar a API de clipboard se disponível
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(validationURL).then(() => {
                    this.showNotification('Link de validação copiado para a área de transferência!', 'success');
                }).catch(err => {
                    console.error('Erro ao copiar para clipboard:', err);
                    this.fallbackCopyTextToClipboard(validationURL);
                });
            } else {
                // Fallback para navegadores mais antigos
                this.fallbackCopyTextToClipboard(validationURL);
            }
        } catch (error) {
            console.error('Erro ao compartilhar certificado:', error);
            this.showNotification('Erro ao gerar link de compartilhamento', 'error');
        }
    }

    /**
     * Fallback para copiar texto (navegadores antigos)
     */
    fallbackCopyTextToClipboard(text) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
        
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            const successful = document.execCommand('copy');
            if (successful) {
                this.showNotification('Link de validação copiado para a área de transferência!', 'success');
            } else {
                throw new Error('Comando copy falhou');
            }
        } catch (err) {
            console.error('Fallback: Não foi possível copiar texto: ', err);
            // Como último recurso, mostra o link para o usuário copiar manualmente
            prompt('Copie o link abaixo:', text);
        }
        
        document.body.removeChild(textArea);
    }

    /**
     * Mostra notificação para o usuário
     */
    showNotification(message, type = 'info') {
        // Cria elemento de notificação
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        // Estilos da notificação
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '15px 20px',
            borderRadius: '5px',
            color: 'white',
            fontWeight: 'bold',
            zIndex: '10000',
            maxWidth: '300px',
            wordWrap: 'break-word'
        });
        
        // Cores baseadas no tipo
        const colors = {
            success: '#28a745',
            error: '#dc3545',
            warning: '#ffc107',
            info: '#17a2b8'
        };
        
        notification.style.backgroundColor = colors[type] || colors.info;
        
        document.body.appendChild(notification);
        
        // Remove a notificação após 4 segundos
        setTimeout(() => {
            if (notification && notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 4000);
    }

    /**
     * Método estático para buscar todos os certificados (admin)
     */
    static async getAllCertificates(adminUser) {
        try {
            // Detecta automaticamente se está em produção ou desenvolvimento
            const baseURL = window.location.hostname === 'localhost' ? 'http://localhost:3000' : '';
            
            const response = await fetch(`${baseURL}/api/admin/all-certificates?adminUser=${adminUser}`);
            
            if (!response.ok) {
                throw new Error('Erro ao buscar certificados');
            }
            
            return await response.json();
        } catch (error) {
            console.error('Erro ao buscar todos os certificados:', error);
            throw error;
        }
    }

    /**
     * Cria a interface de certificação
     */
    async createCertificateInterface() {
        const container = document.createElement('div');
        container.className = 'certificate-container';
        
        try {
            // Verifica se pode gerar certificado
            const canGenerate = await this.canGenerateCertificate();
            
            if (!canGenerate && !this.isAdmin) {
                this.renderRequirements(container);
                return container;
            }
            
            // Carrega certificado existente
            const existingCert = await this.loadCertificate();
            
            if (existingCert) {
                this.renderExistingCertificate(container, existingCert);
            } else {
                this.renderGenerateButton(container);
            }
            
        } catch (error) {
            console.error('Erro ao criar interface de certificação:', error);
            this.renderError(container, 'Erro ao carregar dados do certificado');
        }
        
        return container;
    }

    /**
     * Renderiza certificado existente
     */
    renderExistingCertificate(container, certData) {
        container.innerHTML = `
            <div class="certificate-card">
                <div class="certificate-header">
                    <i class="fa-solid fa-award"></i>
                    <h3>Certificado Emitido</h3>
                </div>
                <div class="certificate-info">
                    <p><strong>Usuário:</strong> ${certData.username}</p>
                    <p><strong>Data de Emissão:</strong> ${new Date(certData.issuedDate).toLocaleDateString('pt-BR')}</p>
                    <p><strong>Código de Validação:</strong> <code>${certData.validationCode}</code></p>
                    <p><strong>Pontuação Final:</strong> ${certData.finalScore}%</p>
                </div>
                <div class="certificate-actions">
                    <button class="btn btn-primary" onclick="certificateManager.downloadCertificate()">
                        <i class="fa-solid fa-download"></i> Baixar Certificado
                    </button>
                    <button class="btn btn-secondary" onclick="certificateManager.shareCertificate()">
                        <i class="fa-solid fa-share"></i> Compartilhar
                    </button>
                </div>
            </div>
        `;
    }

    /**
     * Renderiza botão de gerar certificado
     */
    renderGenerateButton(container) {
        container.innerHTML = `
            <div class="certificate-card">
                <div class="certificate-header">
                    <i class="fa-solid fa-trophy"></i>
                    <h3>Parabéns! Você completou o curso!</h3>
                </div>
                <p>Você pode agora gerar seu certificado de conclusão.</p>
                <button class="btn btn-success" onclick="certificateManager.handleGenerateCertificate()">
                    <i class="fa-solid fa-award"></i> Gerar Certificado
                </button>
            </div>
        `;
    }

    /**
     * Renderiza requisitos não atendidos
     */
    renderRequirements(container) {
        container.innerHTML = `
            <div class="certificate-card">
                <div class="certificate-header">
                    <i class="fa-solid fa-exclamation-triangle"></i>
                    <h3>Requisitos para Certificação</h3>
                </div>
                <p>Para gerar seu certificado, você precisa:</p>
                <ul>
                    <li>Completar todos os 8 módulos do curso</li>
                    <li>Obter pelo menos 70% na avaliação final</li>
                </ul>
                <p><em>Continue estudando para conquistar seu certificado!</em></p>
            </div>
        `;
    }

    /**
     * Renderiza mensagem de erro
     */
    renderError(container, message) {
        container.innerHTML = `
            <div class="certificate-card error">
                <div class="certificate-header">
                    <i class="fa-solid fa-exclamation-triangle"></i>
                    <h3>Erro</h3>
                </div>
                <p>${message}</p>
                <button class="btn btn-secondary" onclick="location.reload()">
                    <i class="fa-solid fa-refresh"></i> Tentar Novamente
                </button>
            </div>
        `;
    }

    /**
     * Manipula a geração do certificado
     */
    async handleGenerateCertificate() {
        try {
            const button = event.target;
            const originalText = button.innerHTML;
            button.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Gerando...';
            button.disabled = true;
            
            const result = await this.generateCertificate();
            
            this.showNotification('Certificado gerado com sucesso!', 'success');
            
            // Recarrega a interface para mostrar o certificado
            setTimeout(() => {
                location.reload();
            }, 1500);
            
        } catch (error) {
            console.error('Erro ao gerar certificado:', error);
            this.showNotification(error.message, 'error');
            
            // Restaura o botão
            const button = event.target;
            button.innerHTML = '<i class="fa-solid fa-award"></i> Gerar Certificado';
            button.disabled = false;
        }
    }
}

// Instância global para ser usada nos eventos onclick
window.certificateManager = null;

// Inicialização automática quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    const currentUser = sessionStorage.getItem('currentUser');
    if (currentUser) {
        window.certificateManager = new CertificateManager(currentUser);
    }
});

// Exporta a classe para uso em módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CertificateManager;
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
window.CertificateManager = CertificateManager; 