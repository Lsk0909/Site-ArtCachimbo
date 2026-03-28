@echo off
title Visualizar Banco de Dados - ArtCachimbo
color 0A
echo.
echo ========================================
echo  ABRINDO BANCO DE DADOS...
echo ========================================
echo.
cd /d "%~dp0"
python view_database.py
echo.
echo ========================================
echo  JANELA FECHARA EM 5 SEGUNDOS...
echo ========================================
timeout /t 5 /nobreak >nul
exit
