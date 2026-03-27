import sqlite3
import os

# Atualizar schema do banco para o novo formato
db_path = "instance/site.db"

if os.path.exists(db_path):
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # Verificar se a coluna visit_date existe
    cursor.execute("PRAGMA table_info(site_visit)")
    columns = [col[1] for col in cursor.fetchall()]
    
    print("Colunas atuais:", columns)
    
    # Se não existir visit_date, adicionar
    if 'visit_date' not in columns:
        print("Adicionando coluna visit_date...")
        cursor.execute("ALTER TABLE site_visit ADD COLUMN visit_date DATE")
        
        # Atualizar registros existentes com data de hoje
        from datetime import date
        today = date.today().isoformat()
        cursor.execute(f"UPDATE site_visit SET visit_date = '{today}' WHERE visit_date IS NULL")
        
        conn.commit()
        print("Schema atualizado com sucesso!")
    else:
        print("Coluna visit_date já existe!")
    
    conn.close()
else:
    print("Banco de dados não encontrado!")
