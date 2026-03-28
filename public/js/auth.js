// Sistema de autenticação global
function checkAuthStatus() {
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    const username = localStorage.getItem('username');
    const nome = localStorage.getItem('nome');
    
    if (loggedIn && username) {
        // Mostra usuário logado
        showLoggedInUser(nome || username);
        
        // Esconde botões de login/register
        hideAuthButtons();
        
        // Mostra botão de logout
        showLogoutButton();
    } else {
        // Mostra botões de login/register
        showAuthButtons();
        
        // Esconde botão de logout
        hideLogoutButton();
        
        // Esconde usuário logado
        hideLoggedInUser();
    }
}

function showLoggedInUser(displayName) {
    let userDiv = document.getElementById('user-info');
    if (!userDiv) {
        userDiv = document.createElement('div');
        userDiv.id = 'user-info';
        userDiv.style.cssText = `
            position: fixed;
            top: 20px;
            left: 20px;
            background: rgba(74, 52, 27, 0.9);
            border: 2px solid #8b5e34;
            color: #d4af37;
            padding: 10px 20px;
            border-radius: 20px;
            font-weight: bold;
            z-index: 1000;
            backdrop-filter: blur(5px);
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            font-size: 0.9rem;
        `;
        document.body.appendChild(userDiv);
    }
    userDiv.innerHTML = `👤 ${displayName}`;
}

function hideLoggedInUser() {
    const userDiv = document.getElementById('user-info');
    if (userDiv) {
        userDiv.remove();
    }
}

function showAuthButtons() {
    const loginBtn = document.querySelector('a[href="login.html"]');
    const registerBtn = document.querySelector('a[href="register.html"]');
    
    if (loginBtn) loginBtn.style.display = 'inline-block';
    if (registerBtn) registerBtn.style.display = 'inline-block';
}

function hideAuthButtons() {
    const loginBtn = document.querySelector('a[href="login.html"]');
    const registerBtn = document.querySelector('a[href="register.html"]');
    
    if (loginBtn) loginBtn.style.display = 'none';
    if (registerBtn) registerBtn.style.display = 'none';
}

function showLogoutButton() {
    console.log('Mostrando botão de logout...');
    let logoutBtn = document.getElementById('logout-btn');
    if (!logoutBtn) {
        logoutBtn = document.createElement('a');
        logoutBtn.id = 'logout-btn';
        logoutBtn.href = '#';
        logoutBtn.className = 'nav-btn';
        logoutBtn.textContent = 'LOGOUT';
        logoutBtn.onclick = function(e) {
            e.preventDefault();
            logout();
        };
        
        // Adiciona ao menu de navegação
        const nav = document.querySelector('nav');
        if (nav) {
            nav.appendChild(logoutBtn);
            console.log('Botão logout adicionado ao nav');
        } else {
            console.log('Nav não encontrado!');
        }
    }
    logoutBtn.style.display = 'inline-block';
    
    // Verifica se é administrador para mostrar o painel admin
    const username = localStorage.getItem('username');
    console.log('Username do localStorage:', username);
    
    if (username && isAdmin(username)) {
        console.log('Usuário é admin, mostrando botão PAINEL');
        showAdminButton();
    } else {
        console.log('Usuário não é admin ou não encontrado');
    }
}

function isAdmin(username) {
    console.log('Verificando se usuário é admin:', username);
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    console.log('Usuários encontrados:', users.length);
    
    const currentUser = users.find(u => u.username === username);
    console.log('Usuário encontrado:', currentUser);
    
    if (currentUser) {
        console.log('isAdmin:', currentUser.isAdmin);
        console.log('Username match:', currentUser.username === username);
        return currentUser.isAdmin === true;
    }
    
    console.log('Usuário não encontrado!');
    return false;
}

function showAdminButton() {
    console.log('Criando botão PAINEL...');
    let adminBtn = document.getElementById('admin-btn');
    if (!adminBtn) {
        adminBtn = document.createElement('a');
        adminBtn.id = 'admin-btn';
        adminBtn.href = 'admin.html';
        adminBtn.className = 'nav-btn';
        adminBtn.textContent = 'PAINEL';
        adminBtn.style.background = '#d4af37';
        adminBtn.style.color = '#000';
        adminBtn.style.fontWeight = 'bold';
        adminBtn.style.margin = '0 5px';
        
        // Adiciona antes do botão de logout
        const logoutBtn = document.getElementById('logout-btn');
        const nav = document.querySelector('nav');
        
        if (nav && logoutBtn) {
            nav.insertBefore(adminBtn, logoutBtn);
            console.log('Botão PAINEL adicionado antes do LOGOUT');
        } else if (nav) {
            nav.appendChild(adminBtn);
            console.log('Botão PAINEL adicionado ao final do nav');
        } else {
            console.log('Nav não encontrado para adicionar botão PAINEL!');
        }
    } else {
        adminBtn.style.display = 'inline-block';
        console.log('Botão PAINEL já existia, apenas mostrando');
    }
}

function hideLogoutButton() {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.style.display = 'none';
    }
}

function logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');
    localStorage.removeItem('nome');
    localStorage.removeItem('email');
    
    // Recarrega a página para atualizar a interface
    window.location.reload();
}

// Inicializa quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    console.log('Auth.js carregado, verificando status...');
    checkAuthStatus();
    
    // Força verificação do botão admin após um pequeno delay
    setTimeout(() => {
        const username = localStorage.getItem('username');
        const loggedIn = localStorage.getItem('loggedIn') === 'true';
        
        console.log('Verificação delay - Username:', username, 'LoggedIn:', loggedIn);
        
        if (loggedIn && username && isAdmin(username)) {
            console.log('Forçando mostrar botão PAINEL...');
            showAdminButton();
        }
    }, 1000);
    
    // Verifica periodicamente (para mudanças em outras abas)
    setInterval(checkAuthStatus, 1000);
});
