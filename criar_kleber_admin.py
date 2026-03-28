#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para criar usuário Kleber como administrador no banco de dados
"""

import json
import os
from datetime import datetime
import base64

def criar_kleber_admin():
    """Cria o usuário Kleber como administrador no banco de dados"""
    
    print("🔧 CRIANDO USUÁRIO KLEBER COMO ADMINISTRADOR")
    print("=" * 50)
    
    # Caminho para o banco de dados SQLite
    db_path = os.path.join(os.getcwd(), 'instance', 'site.db')
    
    if os.path.exists(db_path):
        print("✅ Banco de dados SQLite encontrado em:", db_path)
        
        try:
            import sqlite3
            
            # Conecta ao banco de dados
            conn = sqlite3.connect(db_path)
            cursor = conn.cursor()
            
            # Verifica se a tabela users existe
            cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='users';")
            table_exists = cursor.fetchone()
            
            if table_exists:
                print("✅ Tabela 'users' encontrada")
                
                # Verifica se Kleber já existe
                cursor.execute("SELECT * FROM users WHERE username = ?", ('Kleber',))
                kleber_exists = cursor.fetchone()
                
                if kleber_exists:
                    print("⚠️  Usuário Kleber já existe no banco de dados")
                    print(f"   ID: {kleber_exists[0]}")
                    print(f"   Nome: {kleber_exists[1]}")
                    print(f"   Username: {kleber_exists[2]}")
                    print(f"   Email: {kleber_exists[3]}")
                else:
                    # Insere o usuário Kleber como admin
                    senha_codificada = base64.b64encode('admin456'.encode()).decode()
                    
                    cursor.execute("""
                        INSERT INTO users (nome, username, email, senha, created_at, is_admin)
                        VALUES (?, ?, ?, ?, ?, ?)
                    """, (
                        'Kleber',
                        'Kleber', 
                        'kleber@admin.com',
                        senha_codificada,
                        datetime.now(),
                        1  # is_admin = True
                    ))
                    
                    conn.commit()
                    print("✅ Usuário Kleber criado com sucesso!")
                    print("   Nome: Kleber")
                    print("   Username: Kleber")
                    print("   Email: kleber@admin.com")
                    print("   Senha: admin456")
                    print("   Permissão: Administrador")
                    
            else:
                print("❌ Tabela 'users' não encontrada no banco de dados")
                
            conn.close()
            
        except Exception as e:
            print(f"❌ Erro ao acessar o banco de dados: {e}")
            
    else:
        print("❌ Banco de dados SQLite não encontrado em:", db_path)
        print("💡 O site usa LocalStorage (navegador) em vez de SQLite")
        
    print("\n📋 INSTRUÇÕES PARA ACESSAR O BANCO DE DADOS:")
    print("1. O site Art&Cachimbo usa LocalStorage (navegador)")
    print("2. Execute: ABRIR_DADOS_SITE.bat")
    print("3. Escolha a opção 5 para criar o Kleber")
    print("4. Ou acesse via console do navegador (F12)")
    print("\n🔐 DADOS DE ACESSO:")
    print("   Usuário: Kleber")
    print("   Senha: admin456")
    print("   Permissão: Administrador")
    
    print("\n🌐 Para acessar o painel:")
    print("   1. Abra: http://localhost:8000/login.html")
    print("   2. Faça login com Kleber/admin456")
    print("   3. Clique no botão 'PAINEL' no menu")

if __name__ == "__main__":
    criar_kleber_admin()
    input("\nPressione Enter para sair...")
