@echo off
title BANCO DE DADOS - ART&CACHIMBO
color 0B
cls

echo ========================================
echo   VISUALIZAR BANCO DE DADOS
echo   ART&CACHIMBO
echo ========================================
echo.

REM Mudar para o diretorio do script
cd /d "%~dp0"

REM Tentar encontrar o Python
echo [INFO] Procurando Python...
where python >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo [OK] Python encontrado
    set PYTHON_CMD=python
) else (
    echo [INFO] Tentando python3...
    where python3 >nul 2>&1
    if %ERRORLEVEL% EQU 0 (
        echo [OK] Python3 encontrado
        set PYTHON_CMD=python3
    ) else (
        echo [ERRO] Python nao encontrado!
        echo Por favor, instale o Python ou adicione ao PATH
        pause
        exit /b 1
    )
)

echo.
echo [INFO] Executando script do banco de dados...
echo [INFO] Diretorio: %CD%
echo.

REM Executar o script
%PYTHON_CMD% view_database.py

echo.
echo ========================================
echo   PRESSIONE QUALQUER TECLA PARA FECHAR
echo ========================================
pause >nul
