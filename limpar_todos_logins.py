#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para limpar todos os logins e dados do site
"""

import webbrowser
import time

def limpar_dados_site():
    """Cria uma página HTML para limpar todos os dados do localStorage"""
    
    html_content = """
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Limpar Dados do Site</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; background: #1a0f00; color: #f4e4bc; }
        .container { max-width: 600px; margin: 0 auto; background: rgba(255,255,255,0.1); padding: 30px; border-radius: 15px; }
        button { background: #d4af37; color: #000; border: none; padding: 15px 30px; border-radius: 25px; font-weight: bold; cursor: pointer; margin: 10px; }
        button:hover { background: #b8941f; }
        .success { color: #28a745; font-weight: bold; }
        .error { color: #dc3545; font-weight: bold; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🧹 LIMPAR DADOS DO SITE</h1>
        <p>Esta página irá limpar todos os dados do site Art&Cachimbo:</p>
        <ul>
            <li>👥 Todos os usuários cadastrados</li>
            <li>🔐 Sessões de login</li>
            <li>👁️ Registros de visitas</li>
            <li>📅 Controle diário</li>
            <li>📊 Todos os dados do localStorage</li>
        </ul>
        
        <button onclick="limparTudo()">🗑️ LIMPAR TUDO</button>
        <button onclick="verDados()">👀 VER DADOS ATUAIS</button>
        <button onclick="voltar()">🏠 VOLTAR PARA O SITE</button>
        
        <div id="resultado"></div>
    </div>

    <script>
        function limparTudo() {
            if (confirm('TEM CERTEZA QUE DESEJA LIMPAR TODOS OS DADOS?\\n\\nEsta ação não pode ser desfeita!')) {
                // Limpa tudo
                localStorage.clear();
                sessionStorage.clear();
                
                document.getElementById('resultado').innerHTML = 
                    '<div class="success">✅ Todos os dados foram limpos com sucesso!</div>' +
                    '<p>O site está agora como novo. Você pode criar novos usuários.</p>' +
                    '<button onclick="location.reload()">🔄 Recarregar Página</button>';
            }
        }
        
        function verDados() {
            let dados = '<h3>📊 DADOS ATUAIS:</h3>';
            
            // Ver usuários
            const users = localStorage.getItem('users');
            if (users) {
                dados += '<p><strong>👥 Usuários:</strong></p>';
                dados += '<pre>' + JSON.stringify(JSON.parse(users), null, 2) + '</pre>';
            } else {
                dados += '<p>❌ Nenhum usuário encontrado</p>';
            }
            
            // Ver visitas
            const visits = localStorage.getItem('site_visits');
            if (visits) {
                dados += '<p><strong>👁️ Visitas:</strong> ' + JSON.parse(visits).length + ' visitas</p>';
            } else {
                dados += '<p>❌ Nenhuma visita encontrada</p>';
            }
            
            // Ver login atual
            const loggedIn = localStorage.getItem('loggedIn');
            const username = localStorage.getItem('username');
            if (loggedIn === 'true' && username) {
                dados += '<p>✅ Logado como: ' + username + '</p>';
            } else {
                dados += '<p>❌ Ninguém logado</p>';
            }
            
            dados += '<p><strong>📋 Total de itens no localStorage:</strong> ' + Object.keys(localStorage).length + '</p>';
            
            document.getElementById('resultado').innerHTML = dados;
        }
        
        function voltar() {
            window.location.href = 'index.html';
        }
        
        // Mostra dados ao carregar
        window.onload = function() {
            verDados();
        };
    </script>
</body>
</html>
    """
    
    # Salva o arquivo HTML
    with open('limpar_dados.html', 'w', encoding='utf-8') as f:
        f.write(html_content)
    
    print("🧹 CRIANDO PÁGINA PARA LIMPAR DADOS...")
    print("=" * 50)
    
    # Abre a página no navegador
    webbrowser.open('file://' + os.path.abspath('limpar_dados.html'))
    
    print("✅ Página aberta no navegador!")
    print("💡 Use os botões para:")
    print("   • VER DADOS ATUAIS")
    print("   • LIMPAR TUDO")
    print("   • VOLTAR PARA O SITE")
    print()
    print("🔐 DEPOIS DE LIMPAR, VOCÊ PODERÁ CRIAR NOVOS USUÁRIOS!")

if __name__ == "__main__":
    import os
    limpar_dados_site()
    input("\nPressione Enter para sair...")
