@echo off
chcp 65001 >nul
title BANCO DE DADOS - ART&CACHIMBO
color 1F
mode con: cols=80 lines=30

cls
echo ╔══════════════════════════════════════════════════════════════════════════════╗
echo ║                    VISUALIZADOR DO BANCO DE DADOS                              ║
echo ║                          ART&CACHIMBO                                          ║
echo ╚══════════════════════════════════════════════════════════════════════════════╝
echo.

cd /d "%~dp0"

echo [INFO] Iniciando visualizacao do banco de dados...
echo [INFO] Local: %CD%
echo.

python view_database.py

echo.
echo ╔══════════════════════════════════════════════════════════════════════════════╗
echo ║                     OPERACAO CONCLUIDA                                        ║
echo ║              Pressione qualquer tecla para fechar...                          ║
echo ╚══════════════════════════════════════════════════════════════════════════════╝
pause >nul
