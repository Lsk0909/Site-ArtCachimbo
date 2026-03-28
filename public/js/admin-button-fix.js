// FIX GARANTIDO PARA BOTÃO PAINEL
// Este script força a criação do botão PAINEL para administradores

function forceAdminButton() {
    console.log('🔧 FORÇANDO BOTÃO PAINEL...');
    
    // Verifica se está logado
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    const username = localStorage.getItem('username');
    
    console.log('📋 Status:', { loggedIn, username });
    
    if (!loggedIn || !username) {
        console.log('❌ Usuário não está logado');
        return;
    }
    
    // Verifica se é admin
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const currentUser = users.find(u => u.username === username);
    
    console.log('👤 Usuário encontrado:', currentUser);
    
    if (!currentUser || !currentUser.isAdmin) {
        console.log('❌ Usuário não é administrador');
        return;
    }
    
    console.log('✅ Usuário é ADMINISTRADOR - Criando botão PAINEL...');
    
    // Remove botão existente se houver
    const existingBtn = document.getElementById('admin-btn');
    if (existingBtn) {
        existingBtn.remove();
        console.log('🗑️ Botão antigo removido');
    }
    
    // Cria novo botão
    const adminBtn = document.createElement('a');
    adminBtn.id = 'admin-btn';
    adminBtn.href = 'admin.html';
    adminBtn.textContent = 'PAINEL';
    adminBtn.className = 'nav-btn';
    
    // Estilo garantido
    adminBtn.style.cssText = `
        background: #d4af37 !important;
        color: #000 !important;
        padding: 10px 20px !important;
        text-decoration: none !important;
        border-radius: 20px !important;
        font-weight: bold !important;
        margin: 0 5px !important;
        display: inline-block !important;
        border: 2px solid #d4af37 !important;
        transition: all 0.3s !important;
    `;
    
    // Hover effect
    adminBtn.addEventListener('mouseenter', () => {
        adminBtn.style.background = '#b8941f';
        adminBtn.style.transform = 'translateY(-2px)';
    });
    
    adminBtn.addEventListener('mouseleave', () => {
        adminBtn.style.background = '#d4af37';
        adminBtn.style.transform = 'translateY(0)';
    });
    
    // Encontra onde adicionar o botão
    const nav = document.querySelector('nav');
    const logoutBtn = document.getElementById('logout-btn');
    const loginBtn = document.querySelector('a[href="login.html"]');
    
    console.log('🔍 Elementos encontrados:', { nav: !!nav, logoutBtn: !!logoutBtn, loginBtn: !!loginBtn });
    
    if (nav && logoutBtn) {
        // Adiciona antes do logout
        nav.insertBefore(adminBtn, logoutBtn);
        console.log('✅ Botão PAINEL adicionado antes do LOGOUT');
    } else if (nav && loginBtn) {
        // Adiciona antes do login
        nav.insertBefore(adminBtn, loginBtn);
        console.log('✅ Botão PAINEL adicionado antes do LOGIN');
    } else if (nav) {
        // Adiciona no final do nav
        nav.appendChild(adminBtn);
        console.log('✅ Botão PAINEL adicionado no final do NAV');
    } else {
        // Cria nav se não existir
        const newNav = document.createElement('nav');
        newNav.style.cssText = `
            text-align: center;
            padding: 20px;
            background: rgba(0,0,0,0.8);
        `;
        newNav.appendChild(adminBtn);
        
        // Adiciona no topo do body
        const body = document.body;
        const firstChild = body.firstChild;
        if (firstChild) {
            body.insertBefore(newNav, firstChild);
        } else {
            body.appendChild(newNav);
        }
        console.log('✅ Nav criado e botão PAINEL adicionado');
    }
    
    // Confirmação visual
    setTimeout(() => {
        const btn = document.getElementById('admin-btn');
        if (btn) {
            console.log('🎉 BOTÃO PAINEL CRIADO COM SUCESSO!');
            console.log('📍 Posição:', btn.getBoundingClientRect());
            
            // Efeito de destaque
            btn.style.animation = 'pulse 2s';
            const style = document.createElement('style');
            style.textContent = `
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }
            `;
            document.head.appendChild(style);
        } else {
            console.log('❌ ERRO: Botão não encontrado após criação');
        }
    }, 100);
}

// Função para verificar e criar botão repetidamente
function ensureAdminButton() {
    const maxAttempts = 10;
    let attempts = 0;
    
    const checkAndCreate = () => {
        const btn = document.getElementById('admin-btn');
        if (!btn && attempts < maxAttempts) {
            attempts++;
            console.log(`🔄 Tentativa ${attempts}/${maxAttempts} de criar botão PAINEL...`);
            forceAdminButton();
            setTimeout(checkAndCreate, 500);
        } else if (btn) {
            console.log('✅ Botão PAINEL encontrado e funcionando!');
        } else {
            console.log('❌ Não foi possível criar o botão após várias tentativas');
        }
    };
    
    checkAndCreate();
}

// Inicia quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Admin Button Fix carregado...');
    
    // Espera um pouco e força criação
    setTimeout(ensureAdminButton, 100);
    
    // Tenta novamente após 2 segundos
    setTimeout(ensureAdminButton, 2000);
    
    // Verifica periodicamente
    setInterval(() => {
        const loggedIn = localStorage.getItem('loggedIn') === 'true';
        const username = localStorage.getItem('username');
        
        if (loggedIn && username) {
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const currentUser = users.find(u => u.username === username);
            
            if (currentUser && currentUser.isAdmin) {
                const btn = document.getElementById('admin-btn');
                if (!btn) {
                    console.log('🔄 Botão PAINEL desapareceu, recriando...');
                    forceAdminButton();
                }
            }
        }
    }, 3000);
});

// Função global para forçar manualmente
window.forceAdminPanel = forceAdminButton;
console.log('💡 Para forçar manualmente, digite: forceAdminPanel() no console');
