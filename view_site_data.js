// Script para visualizar dados do site via Node.js
const fs = require('fs');
const path = require('path');

// Caminho para o diretório de dados do navegador (Windows)
function getBrowserDataPath() {
    const homeDir = require('os').homedir();
    const browserPaths = {
        chrome: path.join(homeDir, 'AppData', 'Local', 'Google', 'Chrome', 'User Data', 'Default', 'Local Storage'),
        edge: path.join(homeDir, 'AppData', 'Local', 'Microsoft', 'Edge', 'User Data', 'Default', 'Local Storage'),
        firefox: path.join(homeDir, 'AppData', 'Local', 'Mozilla', 'Firefox', 'Profiles')
    };
    return browserPaths;
}

// Função para ler dados do localStorage simulado
function readSiteData() {
    console.log('🔍 VISUALIZADOR DE DADOS DO SITE ART&CACHIMBO');
    console.log('=' .repeat(50));
    
    // Simula a leitura do localStorage (em produção, isso viria do navegador)
    console.log('\n📊 DADOS DO SITE (LocalStorage):');
    console.log('-'.repeat(30));
    
    // Dados de usuários
    const users = [
        {
            nome: 'Euller',
            email: 'eullerfernandes649@gmail.com',
            username: 'Euller',
            senha: 'admin123 (codificada)',
            createdAt: new Date().toISOString(),
            isAdmin: true
        }
    ];
    
    console.log('\n👥 USUÁRIOS CADASTRADOS:');
    users.forEach((user, index) => {
        console.log(`${index + 1}. Nome: ${user.nome}`);
        console.log(`   Username: ${user.username}`);
        console.log(`   Email: ${user.email}`);
        console.log(`   Admin: ${user.isAdmin ? 'Sim' : 'Não'}`);
        console.log(`   Criado em: ${new Date(user.createdAt).toLocaleString('pt-BR')}`);
        console.log('');
    });
    
    // Dados de visitas (simulados)
    const visits = [
        {
            id: 1,
            timestamp: new Date().toISOString(),
            page: '/index.html',
            ip: '192.168.45.123',
            userAgent: 'Mozilla/5.0...'
        }
    ];
    
    console.log('👁️ VISITAS REGISTRADAS:');
    visits.forEach((visit, index) => {
        console.log(`${index + 1}. ID: ${visit.id}`);
        console.log(`   Página: ${visit.page}`);
        console.log(`   IP: ${visit.ip}`);
        console.log(`   Data: ${new Date(visit.timestamp).toLocaleString('pt-BR')}`);
        console.log('');
    });
    
    // Dados diários
    const today = new Date().toDateString();
    const dailyVisits = {
        [`192.168.45.123_${today}`]: {
            timestamp: new Date().toISOString(),
            ip: '192.168.45.123',
            page: '/index.html'
        }
    };
    
    console.log('📅 CONTROLE DIÁRIO:');
    Object.keys(dailyVisits).forEach(key => {
        const visit = dailyVisits[key];
        console.log(`IP: ${visit.ip}`);
        console.log(`Data: ${new Date(visit.timestamp).toLocaleString('pt-BR')}`);
        console.log(`Página: ${visit.page}`);
        console.log('');
    });
    
    console.log('📈 RESUMO:');
    console.log(`Total de usuários: ${users.length}`);
    console.log(`Total de visitas: ${visits.length}`);
    console.log(`Visitas únicas hoje: ${Object.keys(dailyVisits).length}`);
    console.log('');
    
    console.log('💡 Para acessar os dados reais do navegador:');
    console.log('1. Abra o site no navegador');
    console.log('2. Pressione F12 para abrir o DevTools');
    console.log('3. Vá para a aba Console');
    console.log('4. Digite: localStorage.getItem("users")');
    console.log('5. Digite: localStorage.getItem("site_visits")');
    console.log('6. Digite: localStorage.getItem("daily_visits")');
}

// Executa a função
readSiteData();
