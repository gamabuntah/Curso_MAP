@echo off
title Limpeza da Versao Portatil
color 0E

echo.
echo ===================================================
echo   LIMPANDO ARQUIVOS DESNECESSARIOS DA PASTA PRONTA
echo ===================================================
echo.

set "PASTA_PRONTA=.\SistemaPNSB-PRONTO"

if not exist "%PASTA_PRONTA%" (
    echo ❌ Pasta '%PASTA_PRONTA%' nao encontrada!
    echo A limpeza nao pode continuar.
    pause
    exit /b 1
)

echo [1/2] Acessando a pasta: %PASTA_PRONTA%
cd "%PASTA_PRONTA%"

echo.
echo [2/2] Excluindo arquivos temporarios e desnecessarios...
echo.

del /Q /F "temp_*.txt" >nul 2>&1
echo ✅ Arquivos temporarios (temp_*.txt) excluidos.

del /Q /F "lista_alternativas_*.txt" >nul 2>&1
echo ✅ Listas de alternativas (lista_alternativas_*.txt) excluidas.

del /Q /F "atualizar_versao_portatil.bat" >nul 2>&1
echo ✅ Script de atualizacao (atualizar_versao_portatil.bat) excluido.

if exist "%TARGET_DIR%\\backend\\node_modules" (
    echo - Removendo node_modules do backend (serao reinstalados no primeiro uso)...
    rd /s /q "%TARGET_DIR%\\backend\\node_modules"
)

if exist "%TARGET_DIR%\\backend\\.npm-cache" (
    echo - Removendo cache local de pacotes...
    rd /s /q "%TARGET_DIR%\\backend\\.npm-cache"
)

echo.
echo ========================================
echo         LIMPEZA CONCLUIDA!
echo ========================================
echo.
echo A pasta '%PASTA_PRONTA%' esta agora mais limpa.
echo.

cd ..
pause 