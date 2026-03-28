@echo off
chcp 65001 >nul
title ACESSAR BANCO DE DADOS - ART&CACHIMBO
color 0B

echo.
echo ══════════════════════════════════════════════════════════════
echo     💾 ACESSO AO BANCO DE DADOS DO SITE
echo ══════════════════════════════════════════════════════════════
echo.

echo 🔍 VERIFICANDO SISTEMA DE BANCO DE DADOS...
echo.

echo 💡 O SITE ART&CACHIMBO USA:
echo    ✅ LocalStorage (dados no navegador)
echo    ✅ Sistema em tempo real
echo    ✅ Acesso via console do navegador
echo.

echo 📋 OPÇÕES DE ACESSO:
echo.
echo    1️⃣  ABRIR SITE E CONSOLE (RECOMENDADO)
echo    2️⃣  CRIAR USUÁRIO KLEBER COMO ADMIN
echo    3️⃣  VER COMANDOS DO CONSOLE
echo    4️⃣  ABRIR PAINEL ADMINISTRATIVO
echo    5️⃣  EXECUTAR SCRIPT PYTHON
echo    6️⃣  SAIR
echo.

set /p opcao="Escolha uma opção (1-6): "

if "%opcao%"=="1" goto abrir_site_console
if "%opcao%"=="2" goto criar_kleber
if "%opcao%"=="3" goto ver_comandos
if "%opcao%"=="4" goto painel_admin
if "%opcao%"=="5" goto script_python
if "%opcao%"=="6" goto sair

echo ❌ Opção inválida!
pause
goto inicio

:abrir_site_console
echo.
echo 🌐 Abrindo o site...
start http://localhost:8000/index.html
timeout /t 2 >nul
echo.
echo ✅ SITE ABERTO! AGORA:
echo    1. Pressione F12 no navegador
echo    2. Vá para aba "Console"
echo    3. Digite os comandos para ver os dados
echo.
echo 🔹 VER USUÁRIOS:
echo    localStorage.getItem("users")
echo.
echo 🔹 VER LOGIN ATUAL:
echo    localStorage.getItem("username")
echo    localStorage.getItem("loggedIn")
echo.
pause
goto inicio

:criar_kleber
echo.
echo 👥 CRIANDO USUÁRIO KLEBER COMO ADMINISTRADOR...
echo.
echo 🔐 DADOS DO KLEBER:
echo    • Nome: Kleber
echo    • Username: Kleber  
echo    • Email: kleber@admin.com
echo    • Senha: admin456
echo    • Permissão: Administrador
echo.
echo 🌐 Abrindo site para criar o usuário...
start http://localhost:8000/index.html
echo.
echo ✅ O usuário Kleber será criado automaticamente!
echo    • Abra o console (F12) para verificar
echo    • Use: localStorage.getItem("users") para ver
echo    • Faça login com: Kleber / admin456
echo.
pause
goto inicio

:ver_comandos
echo.
echo ══════════════════════════════════════════════════════════════
echo     📋 COMANDOS PARA ACESSAR O BANCO DE DADOS
echo ══════════════════════════════════════════════════════════════
echo.
echo 🔹 VER TODOS OS USUÁRIOS:
echo    localStorage.getItem("users")
echo.
echo 🔹 VER USUÁRIOS FORMATADO:
echo    JSON.parse(localStorage.getItem("users"))
echo.
echo 🔹 VER VISITAS:
echo    localStorage.getItem("site_visits")
echo.
echo 🔹 VER VISITAS DIÁRIAS:
echo    localStorage.getItem("daily_visits")
echo.
echo 🔹 VER LOGIN ATUAL:
echo    localStorage.getItem("username")
echo    localStorage.getItem("loggedIn")
echo.
echo 🔹 VER TUDO:
echo    localStorage
echo.
echo 🔹 LIMPAR TUDO:
echo    localStorage.clear()
echo.
echo ══════════════════════════════════════════════════════════════
echo.
echo 💡 DICAS IMPORTANTES:
echo • Pressione F12 no site para abrir o console
echo • Copie e cole os comandos acima
echo • Os dados ficam salvos no navegador
echo • Para ver formatado, use JSON.parse()
echo.
pause
goto inicio

:painel_admin
echo.
echo 🔐 ACESSO AO PAINEL ADMINISTRATIVO
echo.
echo 👤 ADMINISTRADORES DISPONÍVEIS:
echo.
echo    🟢 ADMIN 1 - Euller
echo       Usuário: Euller
echo       Senha: admin123
echo.
echo    🟢 ADMIN 2 - Kleber
echo       Usuário: Kleber  
echo       Senha: admin456
echo.
echo 🌐 Abrindo página de login...
start http://localhost:8000/login.html
echo.
echo ✅ INSTRUÇÕES:
echo    1. Faça login com os dados acima
echo    2. Clique no botão "PAINEL" no menu
echo    3. Acesse: http://localhost:8000/admin.html
echo.
pause
goto inicio

:script_python
echo.
echo 🐍 EXECUTANDO SCRIPT PYTHON...
echo.
if exist criar_kleber_admin.py (
    echo ✅ Script encontrado! Executando...
    python criar_kleber_admin.py
) else (
    echo ❌ Script criar_kleber_admin.py não encontrado!
    echo 💡 Verificando se Python está instalado...
    python --version
    if errorlevel 1 (
        echo ❌ Python não está instalado!
        echo 💡 Use as opções do navegador (F12)
    )
)
echo.
pause
goto inicio

:sair
echo.
echo 👋 Obrigado por usar o Art&Cachimbo!
echo 💡 Lembre-se: os dados ficam no navegador (LocalStorage)
echo.
exit

:inicio
cls
goto start
