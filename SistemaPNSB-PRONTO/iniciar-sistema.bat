@echo off
title Sistema de Certificacao PNSB - Portatil
color 0B

echo.
echo ========================================
echo    SISTEMA DE CERTIFICACAO PNSB
echo ========================================
echo.
echo Iniciando sistema em modo portatil...
echo.

:: Define o caminho para o Node.js portatil
set "NODE_PATH=%~dp0nodejs-portable\node-v24.2.0-win-x64"
set "PATH=%NODE_PATH%;%PATH%"

:: Verifica se o Node.js portatil existe
echo [1/4] Verificando Node.js portatil...
if not exist "%NODE_PATH%\node.exe" (
    echo.
    echo ❌ ERRO: Node.js portatil nao encontrado!
    echo    Verifique se a pasta 'nodejs-portable' existe e contem o Node.
    echo.
    pause
    exit /b 1
)
echo ✅ Node.js portatil encontrado!

:: Instalar dependencias do backend se necessario
echo.
echo [2/4] Verificando dependencias do backend...
if not exist "%~dp0backend\node_modules" (
    echo    Instalando dependencias pela primeira vez. Isso pode levar um minuto...
    call "%NODE_PATH%\npm.cmd" install --prefix "%~dp0backend" --cache "%~dp0backend\\.npm-cache"
    if errorlevel 1 (
        echo ❌ Erro ao instalar dependencias do backend!
        pause
        exit /b 1
    )
    echo ✅ Dependencias do backend instaladas!
) else (
    echo ✅ Dependencias do backend ja existem!
)

:: Iniciar o servidor backend
echo.
echo [3/4] Iniciando servidor backend em segundo plano...
start "Backend PNSB" /B cmd /c "call ""%NODE_PATH%\node.exe"" ""%~dp0backend\server.js"""

:: Aguardar um pouco para o backend inicializar
timeout /t 5 /nobreak >nul

:: Iniciar o servidor frontend
echo.
echo [4/4] Iniciando servidor frontend (Live-Server)...
start "Frontend PNSB" /B cmd /c "call ""%NODE_PATH%\npx.cmd"" live-server --port=8000 ""%~dp0public\"""

:: Aguardar um pouco para o frontend inicializar
timeout /t 3 /nobreak >nul

:: Abrir o navegador automaticamente
echo.
echo ========================================
echo    SISTEMA INICIADO COM SUCESSO!
echo ========================================
echo.
echo 🌐 Abrindo o sistema no seu navegador...
echo.
echo 📍 URLs do sistema:
echo    - Frontend (Site): http://localhost:8000
echo    - Backend (API):   http://localhost:3000
echo.
echo 💡 Para parar o sistema, execute o arquivo 'parar-sistema.bat'.
echo.

start http://localhost:8000

exit 