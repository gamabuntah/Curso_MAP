document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const showRegisterBtn = document.getElementById('showRegister');
    const showLoginBtn = document.getElementById('showLogin');
    
    // Detecta automaticamente se está em produção ou desenvolvimento  
    const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:3000/api' : '/api';

    // Alternar entre login e registro
    showRegisterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    showLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    // Login
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        const submitBtn = loginForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        try {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Entrando...';
            
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (response.ok) {
                // Salvar dados do usuário
                sessionStorage.setItem('currentUser', data.username);
                sessionStorage.setItem('userRole', data.role || 'user');
                
                // Mostrar mensagem de sucesso
                showMessage('Login realizado com sucesso!', 'success');
                
                // Aguardar um pouco e redirecionar
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1000);
            } else {
                showMessage(data.message || 'Erro no login', 'error');
            }
        } catch (error) {
            console.error('Erro:', error);
            showMessage('Erro de conexão com o servidor', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });

    // Registro
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const username = document.getElementById('registerUsername').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const submitBtn = registerForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        // Validações no frontend
        if (username.length < 3) {
            showMessage('Nome de usuário deve ter pelo menos 3 caracteres', 'error');
            return;
        }

        if (password.length < 6) {
            showMessage('Senha deve ter pelo menos 6 caracteres', 'error');
            return;
        }

        if (password !== confirmPassword) {
            showMessage('Senhas não conferem', 'error');
            return;
        }
        
        try {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Registrando...';
            
            const response = await fetch(`${API_URL}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (response.ok) {
                showMessage('Usuário registrado com sucesso! Faça login para continuar.', 'success');
                // Limpar formulário
                registerForm.reset();
                // Voltar para tela de login
                setTimeout(() => {
                    showLoginBtn.click();
                }, 2000);
            } else {
                showMessage(data.message || 'Erro no registro', 'error');
            }
        } catch (error) {
            console.error('Erro:', error);
            showMessage('Erro de conexão com o servidor', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });

    // Função para mostrar mensagens
    function showMessage(message, type = 'info') {
        // Remove mensagem anterior se existir
        const existingMessage = document.querySelector('.message');
        if (existingMessage) {
            existingMessage.remove();
        }

        const messageDiv = document.createElement('div');
        messageDiv.className = `message message-${type}`;
        messageDiv.textContent = message;
        
        // Estilos da mensagem
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 15px 25px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            max-width: 90%;
            text-align: center;
            animation: slideDown 0.3s ease;
        `;
        
        // Cores por tipo
        const colors = {
            success: '#4CAF50',
            error: '#F44336',
            warning: '#FF9800',
            info: '#2196F3'
        };
        
        messageDiv.style.backgroundColor = colors[type] || colors.info;
        
        document.body.appendChild(messageDiv);
        
        // Remover após alguns segundos
        const duration = type === 'success' ? 3000 : 5000;
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.style.animation = 'slideUp 0.3s ease';
                setTimeout(() => {
                    if (messageDiv.parentNode) {
                        messageDiv.remove();
                    }
                }, 300);
            }
        }, duration);
    }

    // Verificar se já está logado
    const currentUser = sessionStorage.getItem('currentUser');
    if (currentUser) {
        showMessage('Você já está logado. Redirecionando...', 'info');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }
});

// Adicionar CSS para animações
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from { transform: translate(-50%, -100%); opacity: 0; }
        to { transform: translate(-50%, 0); opacity: 1; }
    }
    
    @keyframes slideUp {
        from { transform: translate(-50%, 0); opacity: 1; }
        to { transform: translate(-50%, -100%); opacity: 0; }
    }
`;
document.head.appendChild(style); 