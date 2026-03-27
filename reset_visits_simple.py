import sqlite3
import os

# Resetar visitas usando SQLite diretamente
db_path = "instance/site.db"

if os.path.exists(db_path):
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # Contar visitas antes
    cursor.execute("SELECT COUNT(*) FROM site_visit")
    total_antes = cursor.fetchone()[0]
    print(f"Total de visitas antes: {total_antes}")
    
    # Deletar todas as visitas
    cursor.execute("DELETE FROM site_visit")
    conn.commit()
    
    # Verificar se resetou
    cursor.execute("SELECT COUNT(*) FROM site_visit")
    total_depois = cursor.fetchone()[0]
    print(f"Total de visitas depois: {total_depois}")
    
    conn.close()
    print("Visitas resetadas com sucesso!")
else:
    print("Banco de dados não encontrado!")
