@echo off
title Atualizando Versao Portatil do Sistema PNSB
color 0B

echo.
echo ===================================================
echo  CRIANDO PASTA 'SistemaPNSB-PRONTO' DENTRO DO PROJETO
echo ===================================================
echo.

set "DESTINO=.\SistemaPNSB-PRONTO"

echo [1/3] Preparando a pasta de destino...
echo Pasta: %DESTINO%
if not exist "%DESTINO%" (
    echo Criando pasta de destino...
    mkdir "%DESTINO%"
) else (
    echo Pasta de destino ja existe. O conteudo sera sobrescrito.
)
echo.

echo [2/3] Copiando arquivos do sistema...
echo.

xcopy /E /I /Y /Q "public" "%DESTINO%\public\"
echo ✅ Pasta 'public' atualizada.

xcopy /E /I /Y /Q "backend" "%DESTINO%\backend\"
echo ✅ Pasta 'backend' atualizada.

xcopy /E /I /Y /Q "nodejs-portable" "%DESTINO%\nodejs-portable\"
echo ✅ Node.js portatil copiado.

copy /Y "*.bat" "%DESTINO%\" >nul 2>&1
copy /Y "*.json" "%DESTINO%\" >nul 2>&1
copy /Y "*.md" "%DESTINO%\" >nul 2>&1
copy /Y "*.txt" "%DESTINO%\" >nul 2>&1
echo ✅ Arquivos de sistema (.bat, .json, .md, .txt) atualizados.
echo.

echo [3/3] Verificacao final...
if exist "%DESTINO%\iniciar-sistema.bat" (
    echo.
    echo ========================================
    echo   SISTEMA ATUALIZADO COM SUCESSO!
    echo ========================================
    echo.
    echo 📁 A versao atualizada esta em sua Area de Trabalho, na pasta:
    echo    SistemaPNSB-Atualizado
    echo.
    echo 🚀 Para usar, navegue ate a pasta e execute 'iniciar-sistema.bat'.
    echo.
) else (
    echo ❌ ERRO: A copia falhou. Nao foi possivel encontrar 'iniciar-sistema.bat' no destino.
)

pause 