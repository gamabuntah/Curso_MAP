document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const errorMessageDiv = document.getElementById('error-message');

    const API_URL = 'http://localhost:3000/api';

    // Função para mostrar mensagens de erro
    const showMessage = (message, isError = true) => {
        errorMessageDiv.textContent = message;
        errorMessageDiv.style.color = isError ? '#e53e3e' : '#28a745';
        errorMessageDiv.style.backgroundColor = isError ? 'rgba(229, 62, 62, 0.1)' : 'rgba(40, 167, 69, 0.1)';
        errorMessageDiv.style.display = 'block';
    };

    // Função para lidar com o login
    const handleLogin = async () => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username || !password) {
            showMessage('Por favor, preencha todos os campos.');
            return;
        }

        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (response.ok) {
                // Salva o nome de usuário e a função no sessionStorage e redireciona
                sessionStorage.setItem('currentUser', data.username);
                sessionStorage.setItem('userRole', data.role);
                window.location.href = 'index.html';
            } else {
                showMessage(data.message || 'Erro desconhecido no login.');
            }
        } catch (error) {
            showMessage('Não foi possível conectar ao servidor. Verifique se ele está rodando.');
        }
    };

    // Função para lidar com o registro
    const handleRegister = async () => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (!username || !password) {
            showMessage('Por favor, preencha todos os campos.');
            return;
        }

        try {
            const response = await fetch(`${API_URL}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();
            
            if (response.status === 201) {
                showMessage(data.message, false); // Mensagem de sucesso
                passwordInput.value = ''; // Limpa a senha
            } else {
                showMessage(data.message || 'Erro desconhecido no registro.');
            }
        } catch (error) {
            showMessage('Não foi possível conectar ao servidor. Verifique se ele está rodando.');
        }
    };

    // Adiciona os event listeners
    loginBtn.addEventListener('click', handleLogin);
    registerBtn.addEventListener('click', handleRegister);

    // Permite "Enter" para logar
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    });
}); 