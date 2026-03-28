// Sistema de inicialização de administradores
function initAdminUsers() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Verifica se o usuário Euller.Adm já existe
    const eullerAdmExists = users.find(u => u.username === 'Euller.Adm');
    if (!eullerAdmExists) {
        const eullerAdmin = {
            nome: 'Euller.Adm',
            email: 'euller.adm@artcachimbo.com',
            username: 'Euller.Adm',
            senha: btoa('admin123'), // Senha: admin123
            createdAt: new Date().toISOString(),
            isAdmin: true
        };
        users.push(eullerAdmin);
        console.log('Usuário administrador Euller.Adm criado com sucesso!');
        console.log('Login: Euller.Adm');
        console.log('Senha: admin123');
    } else {
        console.log('Usuário administrador Euller.Adm já existe.');
    }
    
    // Verifica se o usuário Kleber.Adm já existe
    const kleberAdmExists = users.find(u => u.username === 'Kleber.Adm');
    if (!kleberAdmExists) {
        const kleberAdmin = {
            nome: 'Kleber.Adm',
            email: 'kleber.adm@artcachimbo.com',
            username: 'Kleber.Adm',
            senha: btoa('admin456'), // Senha: admin456
            createdAt: new Date().toISOString(),
            isAdmin: true
        };
        users.push(kleberAdmin);
        console.log('Usuário administrador Kleber.Adm criado com sucesso!');
        console.log('Login: Kleber.Adm');
        console.log('Senha: admin456');
    } else {
        console.log('Usuário administrador Kleber.Adm já existe.');
    }
    
    // Salva a lista atualizada de usuários
    localStorage.setItem('users', JSON.stringify(users));
    
    console.log('Total de usuários administradores:', users.filter(u => u.isAdmin).length);
}

// Inicializa quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    initAdminUsers();
});
