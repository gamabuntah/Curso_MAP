document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerBtn = document.getElementById('register-btn');
    const loginBtn = document.getElementById('login-btn');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    
    // Detecta automaticamente se está em produção ou desenvolvimento  
    const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:3000/api' : '/api';

    // Verificar se todos os elementos existem
    if (!loginForm || !registerBtn || !loginBtn || !usernameInput || !passwordInput || !errorMessage) {
        console.error('Elementos do DOM não encontrados:', {
            loginForm: !!loginForm,
            registerBtn: !!registerBtn,
            loginBtn: !!loginBtn,
            usernameInput: !!usernameInput,
            passwordInput: !!passwordInput,
            errorMessage: !!errorMessage
        });
        return;
    }

    // Função para mostrar mensagens de erro
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        errorMessage.style.backgroundColor = '#f44336';
        errorMessage.style.color = 'white';
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000);
    }

    // Função para mostrar sucesso
    function showSuccess(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        errorMessage.style.backgroundColor = '#4CAF50';
        errorMessage.style.color = 'white';
        setTimeout(() => {
            errorMessage.style.display = 'none';
            errorMessage.style.backgroundColor = '#f44336';
        }, 3000);
    }

    // Estado da aplicação
    let isLoginMode = true;

    // Função para alternar entre login e registro
    function toggleMode() {
        isLoginMode = !isLoginMode;
        
        if (isLoginMode) {
            // Modo Login
            document.querySelector('h2').textContent = 'Acesse seu Progresso';
            document.querySelector('p').textContent = 'Use seu nome de usuário para acessar o curso. Se for seu primeiro acesso, crie um novo usuário.';
            loginBtn.textContent = 'Entrar';
            registerBtn.textContent = 'Criar Novo Usuário';
            
            // Remove campo de confirmação se existir
            const confirmField = document.getElementById('confirm-password-group');
            if (confirmField) {
                confirmField.remove();
            }
        } else {
            // Modo Registro
            document.querySelector('h2').textContent = 'Criar Nova Conta';
            document.querySelector('p').textContent = 'Crie sua conta para acessar o curso. Use um nome de usuário único e uma senha segura.';
            loginBtn.textContent = 'Registrar';
            registerBtn.textContent = 'Já tenho conta';
            
            // Adiciona campo de confirmação de senha
            if (!document.getElementById('confirm-password-group')) {
                const confirmGroup = document.createElement('div');
                confirmGroup.className = 'input-group';
                confirmGroup.id = 'confirm-password-group';
                confirmGroup.innerHTML = `
                    <label for="confirm-password">Confirmar Senha</label>
                    <input type="password" id="confirm-password" name="confirm-password" required placeholder="••••••••">
                `;
                passwordInput.parentElement.insertAdjacentElement('afterend', confirmGroup);
            }
        }
        
        // Limpar mensagens de erro
        errorMessage.style.display = 'none';
        
        // Limpar campos
        usernameInput.value = '';
        passwordInput.value = '';
        const confirmInput = document.getElementById('confirm-password');
        if (confirmInput) {
            confirmInput.value = '';
        }
    }

    // Event listeners
    registerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMode();
    });

    // Aviso quando tentar registrar como admin
    usernameInput.addEventListener('input', () => {
        const username = usernameInput.value.toLowerCase();
        const isAdminAttempt = username === 'admin';
        
        // Remove aviso anterior
        const existingWarning = document.querySelector('.admin-warning');
        if (existingWarning) {
            existingWarning.remove();
        }
        
        // Adiciona aviso se for tentativa de admin e estiver em modo registro
        if (isAdminAttempt && !isLoginMode) {
            const warning = document.createElement('div');
            warning.className = 'admin-warning';
            warning.style.cssText = `
                background: #ff9800;
                color: white;
                padding: 10px;
                border-radius: 5px;
                margin-top: 10px;
                font-size: 14px;
                text-align: center;
                animation: fadeIn 0.3s ease;
            `;
            warning.innerHTML = '⚠️ <strong>ATENÇÃO:</strong> Apenas 1 administrador é permitido no sistema!';
            usernameInput.parentNode.appendChild(warning);
        }
    });

    // Login/Registro
    loginBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        
        const username = usernameInput.value.trim();
        const password = passwordInput.value;
        
        // Validações básicas
        if (!username || !password) {
            showError('Por favor, preencha todos os campos.');
            return;
        }

        if (username.length < 3) {
            showError('Nome de usuário deve ter pelo menos 3 caracteres.');
            return;
        }

        if (password.length < 6) {
            showError('Senha deve ter pelo menos 6 caracteres.');
            return;
        }

        // Se estiver no modo registro, validar confirmação de senha
        if (!isLoginMode) {
            const confirmPassword = document.getElementById('confirm-password');
            if (!confirmPassword || confirmPassword.value !== password) {
                showError('As senhas não conferem.');
                return;
            }
        }
        
        const originalText = loginBtn.textContent;
        
        try {
            loginBtn.disabled = true;
            loginBtn.textContent = isLoginMode ? 'Entrando...' : 'Registrando...';
            
            const endpoint = isLoginMode ? '/login' : '/register';
            const response = await fetch(`${API_URL}${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (response.ok) {
                if (isLoginMode) {
                    // Login bem-sucedido
                    sessionStorage.setItem('currentUser', data.username);
                    sessionStorage.setItem('userRole', data.role || 'user');
                    
                    showSuccess('Login realizado com sucesso!');
                    
                    setTimeout(() => {
                        window.location.href = 'index.html';
                    }, 1000);
                } else {
                    // Registro bem-sucedido
                    showSuccess('Usuário registrado com sucesso! Agora você pode fazer login.');
                    
                    // Voltar para modo login
                    setTimeout(() => {
                        toggleMode();
                    }, 2000);
                }
            } else {
                // Tratar mensagens específicas de erro
                let errorMsg = data.message || (isLoginMode ? 'Erro no login' : 'Erro no registro');
                
                // Mensagem especial se tentar criar admin duplicado
                if (response.status === 403 && errorMsg.includes('administrador')) {
                    errorMsg = '⚠️ SISTEMA LIMITADO: Apenas 1 administrador é permitido.\n\nJá existe um admin registrado no sistema.';
                }
                
                showError(errorMsg);
            }
        } catch (error) {
            console.error('Erro:', error);
            showError('Erro de conexão com o servidor. Verifique sua internet e tente novamente.');
        } finally {
            loginBtn.disabled = false;
            loginBtn.textContent = originalText;
        }
    });

    // Permitir envio com Enter
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        loginBtn.click();
    });

    // Verificar se já está logado
    const currentUser = sessionStorage.getItem('currentUser');
    if (currentUser) {
        showSuccess('Você já está logado. Redirecionando...');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }
});

// CSS adicional para melhorar a aparência
const style = document.createElement('style');
style.textContent = `
    .error-message {
        display: none;
        padding: 12px;
        margin-bottom: 20px;
        border-radius: 6px;
        background-color: #f44336;
        color: white;
        text-align: center;
        font-weight: 500;
        animation: slideDown 0.3s ease;
    }
    
    @keyframes slideDown {
        from { transform: translateY(-10px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
    }
    
    .btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
    
    .input-group {
        margin-bottom: 20px;
    }
    
    .input-group label {
        display: block;
        margin-bottom: 8px;
        font-weight: 500;
        color: #333;
    }
    
    .input-group input {
        width: 100%;
        padding: 12px;
        border: 2px solid #ddd;
        border-radius: 6px;
        font-size: 16px;
        transition: border-color 0.3s ease;
    }
    
    .input-group input:focus {
        outline: none;
        border-color: #2980b9;
    }
    
    .button-group {
        display: flex;
        gap: 10px;
        flex-direction: column;
    }
    
    .btn {
        padding: 12px 24px;
        border: none;
        border-radius: 6px;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .btn-primary {
        background-color: #2980b9;
        color: white;
    }
    
    .btn-primary:hover:not(:disabled) {
        background-color: #3498db;
        transform: translateY(-2px);
    }
    
    .btn-secondary {
        background-color: #95a5a6;
        color: white;
    }
    
    .btn-secondary:hover:not(:disabled) {
        background-color: #7f8c8d;
        transform: translateY(-2px);
    }
`;
document.head.appendChild(style); 