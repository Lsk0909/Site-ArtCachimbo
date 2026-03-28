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
        console.log('Senha codificada:', btoa('admin123'));
        console.log('Teste decodificação:', atob(btoa('admin123')));
    } else {
        console.log('Usuário administrador Euller.Adm já existe.');
        // Verifica se a senha está correta
        const senhaArmazenada = eullerAdmExists.senha;
        const senhaDecodificada = atob(senhaArmazenada);
        console.log('Senha armazenada:', senhaArmazenada);
        console.log('Senha decodificada:', senhaDecodificada);
        
        // Se a senha não for admin123, atualiza
        if (senhaDecodificada !== 'admin123') {
            eullerAdmExists.senha = btoa('admin123');
            console.log('Senha do Euller.Adm corrigida para: admin123');
        }
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
        console.log('Senha codificada:', btoa('admin456'));
        console.log('Teste decodificação:', atob(btoa('admin456')));
    } else {
        console.log('Usuário administrador Kleber.Adm já existe.');
        // Verifica se a senha está correta
        const senhaArmazenada = kleberAdmExists.senha;
        const senhaDecodificada = atob(senhaArmazenada);
        console.log('Senha armazenada:', senhaArmazenada);
        console.log('Senha decodificada:', senhaDecodificada);
        
        // Se a senha não for admin456, atualiza
        if (senhaDecodificada !== 'admin456') {
            kleberAdmExists.senha = btoa('admin456');
            console.log('Senha do Kleber.Adm corrigida para: admin456');
        }
    }
    
    // Salva a lista atualizada de usuários
    localStorage.setItem('users', JSON.stringify(users));
    
    console.log('Total de usuários administradores:', users.filter(u => u.isAdmin).length);
    console.log('Usuários criados/atualizados com sucesso!');
}

// Inicializa quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    initAdminUsers();
});
