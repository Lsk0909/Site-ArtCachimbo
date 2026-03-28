// Inicializa o usuário administrador Euller
function initAdminUser() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Verifica se o usuário Euller já existe
    const eullerExists = users.find(u => u.username === 'Euller');
    
    if (!eullerExists) {
        // Cria o usuário administrador Euller
        const adminUser = {
            nome: 'Euller',
            email: 'eullerfernandes649@gmail.com',
            username: 'Euller',
            senha: btoa('admin123'), // Senha: admin123
            createdAt: new Date().toISOString(),
            isAdmin: true
        };
        
        users.push(adminUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        console.log('Usuário administrador Euller criado com sucesso!');
        console.log('Login: Euller');
        console.log('Senha: admin123');
    } else {
        console.log('Usuário administrador Euller já existe.');
    }
}

// Inicializa quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    initAdminUser();
});
