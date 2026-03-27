import sqlite3
import os
from datetime import date

# Corrigir schema do banco de dados
db_path = "instance/site.db"

if os.path.exists(db_path):
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # Verificar schema atual
    cursor.execute("PRAGMA table_info(site_visit)")
    columns = [col[1] for col in cursor.fetchall()]
    print("Colunas atuais:", columns)
    
    # Adicionar coluna visit_date se não existir
    if 'visit_date' not in columns:
        print("Adicionando coluna visit_date...")
        cursor.execute("ALTER TABLE site_visit ADD COLUMN visit_date TEXT")
        conn.commit()
        print("Coluna visit_date adicionada!")
    
    # Atualizar registros existentes com data atual
    today = date.today().isoformat()
    cursor.execute(f"UPDATE site_visit SET visit_date = '{today}' WHERE visit_date IS NULL")
    conn.commit()
    
    # Verificar resultado
    cursor.execute("SELECT COUNT(*) FROM site_visit WHERE visit_date IS NOT NULL")
    updated = cursor.fetchone()[0]
    print(f"Registros atualizados: {updated}")
    
    conn.close()
    print("Schema corrigido com sucesso!")
else:
    print("Banco de dados não encontrado!")
