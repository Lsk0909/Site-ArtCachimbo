from app import app, db, User, SiteVisit, LoginLog, Product
import sqlite3
from datetime import datetime

# Conectar diretamente ao banco SQLite
def view_database():
    print("=" * 60)
    print("ACESSO AO BANCO DE DADOS - ART&CACHIMBO")
    print("=" * 60)
    
    # Caminho do banco de dados
    db_path = "instance/site.db"
    print(f"Localizacao do banco: {db_path}")
    print(f"Tamanho: {28672} bytes")
    print()
    
    # Conectar com SQLite
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # Listar todas as tabelas
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
    tables = cursor.fetchall()
    
    print("Tabelas encontradas:")
    for table in tables:
        print(f"  - {table[0]}")
    print()
    
    # Usar SQLAlchemy para dados estruturados
    with app.app_context():
        print("=" * 40)
        print("USUARIOS CADASTRADOS")
        print("=" * 40)
        
        users = User.query.all()
        if users:
            for user in users:
                print(f"ID: {user.id}")
                print(f"Nome: {user.nome}")
                print(f"Email: {user.email}")
                print(f"Username: {user.username}")
                print("-" * 30)
            print(f"Total de usuarios: {len(users)}")
        else:
            print("Nenhum usuario cadastrado.")
        
        print("\n" + "=" * 40)
        print("VISITAS AO SITE")
        print("=" * 40)
        
        visits = SiteVisit.query.all()
        if visits:
            print(f"Total de visitas: {len(visits)}")
            print("\nUltimas 10 visitas:")
            recent_visits = SiteVisit.query.order_by(SiteVisit.visit_time.desc()).limit(10).all()
            for visit in recent_visits:
                print(f"IP: {visit.ip_address}")
                print(f"Pagina: {visit.page_visited}")
                print(f"Data: {visit.visit_time}")
                print("-" * 20)
        else:
            print("Nenhuma visita registrada.")
        
        print("\n" + "=" * 40)
        print("TENTATIVAS DE LOGIN")
        print("=" * 40)
        
        login_logs = LoginLog.query.all()
        if login_logs:
            print(f"Total de tentativas: {len(login_logs)}")
            successful = LoginLog.query.filter_by(success=True).count()
            failed = LoginLog.query.filter_by(success=False).count()
            print(f"Sucesso: {successful}")
            print(f"Falha: {failed}")
        else:
            print("Nenhuma tentativa de login registrada.")
    
    conn.close()
    print("\n" + "=" * 60)
    print("FIM DA VISUALIZACAO")
    print("=" * 60)

if __name__ == "__main__":
    view_database()
