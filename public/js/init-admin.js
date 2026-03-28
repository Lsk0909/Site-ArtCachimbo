// Sistema de inicialização de administradores (DESATIVADO)
// Os usuários serão criados manualmente após limpeza

function initAdminUsers() {
    // DESATIVADO - Sistema resetado para criação manual
    console.log('Sistema de inicialização automática desativado.');
    console.log('Crie usuários manualmente após limpeza dos dados.');
    
    // Se precisar reativar, remova os comentários abaixo:
    /*
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Verifica se o usuário Euller já existe
    const eullerExists = users.find(u => u.username === 'Euller');
    if (!eullerExists) {
        const eullerAdmin = {
            nome: 'Euller',
            email: 'eullerfernandes649@gmail.com',
            username: 'Euller',
            senha: btoa('admin123'), // Senha: admin123
            createdAt: new Date().toISOString(),
            isAdmin: true
        };
        users.push(eullerAdmin);
        console.log('Usuário administrador Euller criado com sucesso!');
        console.log('Login: Euller');
        console.log('Senha: admin123');
    } else {
        console.log('Usuário administrador Euller já existe.');
    }
    
    // Verifica se o usuário Kleber já existe
    const kleberExists = users.find(u => u.username === 'Kleber');
    if (!kleberExists) {
        const kleberAdmin = {
            nome: 'Kleber',
            email: 'kleber@admin.com',
            username: 'Kleber',
            senha: btoa('admin456'), // Senha: admin456
            createdAt: new Date().toISOString(),
            isAdmin: true
        };
        users.push(kleberAdmin);
        console.log('Usuário administrador Kleber criado com sucesso!');
        console.log('Login: Kleber');
        console.log('Senha: admin456');
    } else {
        console.log('Usuário administrador Kleber já existe.');
    }
    
    // Salva a lista atualizada de usuários
    localStorage.setItem('users', JSON.stringify(users));
    
    console.log('Total de usuários administradores:', users.filter(u => u.isAdmin).length);
    */
}

// Inicializa quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    initAdminUsers();
});
