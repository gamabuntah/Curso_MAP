@echo off
title Backup dos Dados PNSB
color 0E

echo.
echo ========================================
echo    BACKUP DOS DADOS DO SISTEMA PNSB
echo ========================================
echo.

:: Criar pasta de backup se não existir
if not exist "backup" mkdir backup

:: Gerar timestamp para o backup
for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set "dt=%%a"
set "YY=%dt:~2,2%" & set "YYYY=%dt:~0,4%" & set "MM=%dt:~4,2%" & set "DD=%dt:~6,2%"
set "HH=%dt:~8,2%" & set "Min=%dt:~10,2%" & set "Sec=%dt:~12,2%"
set "datestamp=%YYYY%-%MM%-%DD%_%HH%-%Min%-%Sec%"

echo [1/3] Criando backup do banco de dados...
if exist "backend\database.json" (
    copy "backend\database.json" "backup\database_%datestamp%.json" >nul
    echo ✅ Backup do banco criado: database_%datestamp%.json
) else (
    echo ⚠️ Banco de dados nao encontrado
)

echo.
echo [2/3] Criando backup das configuracoes...
if exist "config-sistema.json" (
    copy "config-sistema.json" "backup\config_%datestamp%.json" >nul
    echo ✅ Backup das configuracoes criado: config_%datestamp%.json
) else (
    echo ⚠️ Arquivo de configuracoes nao encontrado
)

echo.
echo [3/3] Limpando backups antigos...
:: Manter apenas os últimos 10 backups
for /f "skip=10 delims=" %%i in ('dir /b /o-d backup\*.json 2^>nul') do del "backup\%%i" >nul 2>&1
echo ✅ Backups antigos removidos

echo.
echo ========================================
echo    BACKUP CONCLUIDO COM SUCESSO!
echo ========================================
echo.
echo 📁 Pasta de backup: backup\
echo 📊 Total de backups: 
dir /b backup\*.json 2>nul | find /c /v "" >nul 2>&1 && (
    for /f %%i in ('dir /b backup\*.json 2^>nul ^| find /c /v ""') do echo    %%~ni arquivos
) || echo    0 arquivos
echo.
echo 💡 Dica: Faça backup regular dos dados importantes
echo.

pause 