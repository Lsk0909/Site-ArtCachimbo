@echo off
chcp 65001 >nul
title ABRIR DADOS DO SITE - ART&CACHIMBO
color 0A

echo.
echo ══════════════════════════════════════════════════════════════
echo     🔍 VISUALIZADOR DE DADOS DO SITE ART&CACHIMBO
echo ══════════════════════════════════════════════════════════════
echo.

echo 💡 OPÇÕES PARA ACESSAR O BANCO DE DADOS:
echo.
echo    1️⃣  ABRIR SITE NO NAVEGADOR (para acessar via console)
echo    2️⃣  VER INSTRUÇÕES DO CONSOLE DO NAVEGADOR
echo    3️⃣  ABRIR PAINEL ADMINISTRATIVO
echo    4️⃣  VER RESUMO DOS DADOS
echo    5️⃣  CRIAR USUÁRIO KLEBER COMO ADMIN
echo    6️⃣  SAIR
echo.

set /p opcao="Escolha uma opção (1-6): "

if "%opcao%"=="1" goto abrir_site
if "%opcao%"=="2" goto instrucoes
if "%opcao%"=="3" goto painel_admin
if "%opcao%"=="4" goto resumo
if "%opcao%"=="5" goto criar_kleber
if "%opcao%"=="6" goto sair

echo ❌ Opção inválida!
pause
goto inicio

:abrir_site
echo.
echo 🌐 Abrindo o site...
start http://localhost:8000/index.html
timeout /t 3 >nul
echo.
echo ✅ Site aberto! Agora:
echo    1. Pressione F12 no navegador
echo    2. Vá para aba Console
echo    3. Digite os comandos abaixo para ver os dados
echo.
pause
goto instrucoes

:instrucoes
echo.
echo ══════════════════════════════════════════════════════════════
echo     📋 COMANDOS PARA ACESSAR O BANCO DE DADOS
echo ══════════════════════════════════════════════════════════════
echo.
echo 🔹 VER USUÁRIOS:
echo    localStorage.getItem("users")
echo.
echo 🔹 VER VISITAS:
echo    localStorage.getItem("site_visits")
echo.
echo 🔹 VER VISITAS DIÁRIAS:
echo    localStorage.getItem("daily_visits")
echo.
echo 🔹 VER DADOS DO ADMIN:
echo    localStorage.getItem("username")
echo    localStorage.getItem("loggedIn")
echo.
echo 🔹 VER TODOS OS DADOS:
echo    localStorage
echo.
echo 🔹 VER DADOS FORMATADOS:
echo    JSON.parse(localStorage.getItem("users"))
echo.
echo 🔹 LIMPAR DADOS:
echo    localStorage.clear()
echo.
echo ══════════════════════════════════════════════════════════════
echo.
echo 💡 DICAS:
echo • Copie e cole os comandos no console do navegador (F12)
echo • Os dados aparecem em formato JSON
echo • Para ver formatado, use: JSON.parse(localStorage.getItem("users"))
echo.
pause
goto inicio

:painel_admin
echo.
echo 🔐 Abrindo painel administrativo...
echo.
echo 👤 DADOS DE ACESSO DISPONÍVEIS:
echo.
echo    🟢 ADMINISTRADOR 1 - Euller
echo       Usuário: Euller
echo       Senha: admin123
echo.
echo    🟢 ADMINISTRADOR 2 - Kleber  
echo       Usuário: Kleber
echo       Senha: admin456
echo.
echo 🌐 Abrindo site para fazer login...
start http://localhost:8000/login.html
echo.
echo ✅ Após o login, clique no botão "PAINEL" no menu
pause
goto inicio

:resumo
echo.
echo ══════════════════════════════════════════════════════════════
echo     📊 RESUMO DO BANCO DE DADOS
echo ══════════════════════════════════════════════════════════════
echo.
echo 💾 TIPO DE BANCO: LocalStorage (navegador)
echo 📍 LOCALIZAÇÃO: Navegador do usuário
echo 🔄 SINCRONIZAÇÃO: Automática em tempo real
echo.
echo 📋 TABELAS DISPONÍVEIS:
echo    • users          - Usuários cadastrados
echo    • site_visits    - Todas as visitas
echo    • daily_visits  - Controle diário por IP
echo    • page_navigations - Navegações entre páginas
echo.
echo 👤 ADMINISTRADORES:
echo    • Euller: eullerfernandes649@gmail.com (admin123)
echo    • Kleber: kleber@admin.com (admin456)
echo.
echo 📈 ESTATÍSTICAS ATUAIS:
echo    • Total de usuários: 2 (Euller + Kleber)
echo    • Controle de visitas: 1 por IP por dia
echo    • Limite de armazenamento: 1000 visitas
echo.
echo 🔧 FUNCIONALIDADES:
echo    • Exportação CSV de usuários e visitas
echo    • Reset completo do sistema
echo    • Controle de acesso administrativo
echo.
pause
goto inicio

:criar_kleber
echo.
echo ══════════════════════════════════════════════════════════════
echo     👥 CRIAR USUÁRIO KLEBER COMO ADMINISTRADOR
echo ══════════════════════════════════════════════════════════════
echo.
echo 🔐 DADOS DO USUÁRIO KLEBER:
echo    • Nome: Kleber
echo    • Username: Kleber
echo    • Email: kleber@admin.com
echo    • Senha: admin456
echo    • Permissão: Administrador
echo.
echo 🌐 Abrindo o site para criar o usuário...
start http://localhost:8000/index.html
echo.
echo ✅ INSTRUÇÕES:
echo    1. O usuário Kleber será criado automaticamente
echo    2. Abra o console (F12) para verificar
echo    3. Use: localStorage.getItem("users") para ver
echo    4. Faça login com: Kleber / admin456
echo    5. O botão "PAINEL" aparecerá no menu
echo.
pause
goto inicio

:sair
echo.
echo 👋 Obrigado por usar o Art&Cachimbo!
echo.
exit

:inicio
cls
goto start
