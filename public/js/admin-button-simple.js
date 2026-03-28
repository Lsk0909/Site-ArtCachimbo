// SOLUÇÃO SIMPLES E DIRETA PARA BOTÃO PAINEL
// Versão ultra-simplificada que funciona 100%

(function() {
    'use strict';
    
    console.log('🔥 INICIANDO SOLUÇÃO SIMPLES BOTÃO PAINEL...');
    
    // Função para criar e injetar o botão
    function injectAdminButton() {
        // Verifica se está logado como admin
        const loggedIn = localStorage.getItem('loggedIn') === 'true';
        const username = localStorage.getItem('username');
        
        if (!loggedIn || !username) {
            console.log('❌ Não está logado');
            return;
        }
        
        // Verifica se é admin
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.username === username && u.isAdmin);
        
        if (!user) {
            console.log('❌ Não é administrador');
            return;
        }
        
        console.log('✅ É ADMINISTRADOR! Injetando botão...');
        
        // Remove botão existente
        const existingBtn = document.getElementById('admin-btn');
        if (existingBtn) {
            existingBtn.remove();
        }
        
        // Cria o botão
        const btn = document.createElement('a');
        btn.id = 'admin-btn';
        btn.href = 'admin.html';
        btn.textContent = 'PAINEL';
        btn.className = 'nav-btn';
        
        // Estilo inline garantido
        btn.setAttribute('style', `
            background: #d4af37 !important;
            color: #000 !important;
            border: 2px solid #d4af37 !important;
            padding: 8px 20px !important;
            border-radius: 20px !important;
            text-decoration: none !important;
            font-weight: bold !important;
            font-size: 0.9rem !important;
            display: inline-block !important;
            margin: 0 5px !important;
            box-shadow: inset 0 0 10px rgba(0,0,0,0.3) !important;
            transition: all 0.3s !important;
        `);
        
        // Encontra o nav container
        const navContainer = document.querySelector('.nav-container');
        const nav = document.querySelector('nav');
        
        if (!navContainer || !nav) {
            console.log('❌ Nav container não encontrado');
            return;
        }
        
        // Encontra o botão LOGIN para inserir antes
        const loginBtn = nav.querySelector('a[href="login.html"]');
        
        if (loginBtn) {
            nav.insertBefore(btn, loginBtn);
            console.log('✅ Botão injetado antes do LOGIN');
        } else {
            // Se não encontrar LOGIN, adiciona antes do logo
            const logoContainer = nav.querySelector('.logo-container');
            if (logoContainer) {
                nav.insertBefore(btn, logoContainer);
                console.log('✅ Botão injetado antes do LOGO');
            } else {
                // Se não encontrar logo, adiciona no final
                nav.appendChild(btn);
                console.log('✅ Botão injetado no final do nav');
            }
        }
        
        // Confirmação
        setTimeout(() => {
            const checkBtn = document.getElementById('admin-btn');
            if (checkBtn) {
                console.log('🎉 SUCESSO! Botão PAINEL está visível!');
                console.log('📍 Elemento:', checkBtn);
                
                // Efeito visual
                btn.style.background = '#ff6b35';
                setTimeout(() => {
                    btn.style.background = '#d4af37';
                }, 500);
            } else {
                console.log('❌ ERRO: Botão não encontrado após injeção');
            }
        }, 100);
    }
    
    // Executa imediatamente
    injectAdminButton();
    
    // Executa novamente após 1 segundo
    setTimeout(injectAdminButton, 1000);
    
    // Executa novamente após 3 segundos
    setTimeout(injectAdminButton, 3000);
    
    // Verifica periodicamente
    setInterval(() => {
        const btn = document.getElementById('admin-btn');
        if (!btn) {
            const loggedIn = localStorage.getItem('loggedIn') === 'true';
            const username = localStorage.getItem('username');
            
            if (loggedIn && username) {
                console.log('🔄 Botão desapareceu, reinjetando...');
                injectAdminButton();
            }
        }
    }, 5000);
    
    // Função global para forçar manualmente
    window.forceAdminButton = injectAdminButton;
    
    console.log('✅ Script de botão simples carregado! Use forceAdminButton() no console se necessário.');
})();
