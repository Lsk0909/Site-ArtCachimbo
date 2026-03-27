from app import app, db, User
import csv
from datetime import datetime

# Exportar emails dos usuários cadastrados
with app.app_context():
    try:
        # Buscar todos os usuários
        users = User.query.all()
        
        if not users:
            print("📭 Nenhum usuário cadastrado ainda.")
        else:
            print(f"📊 Encontrados {len(users)} usuários cadastrados:")
            print("-" * 50)
            
            # Criar arquivo CSV com emails
            filename = f"emails_usuarios_{datetime.now().strftime('%Y%m%d_%H%M%S')}.csv"
            
            with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
                fieldnames = ['ID', 'Nome', 'Email', 'Username', 'Data de Cadastro']
                writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
                
                writer.writeheader()
                for user in users:
                    writer.writerow({
                        'ID': user.id,
                        'Nome': user.nome,
                        'Email': user.email,
                        'Username': user.username,
                        'Data de Cadastro': 'N/A (não registrado)'
                    })
                    print(f"✅ {user.nome} - {user.email}")
            
            print(f"\n📁 Emails exportados para: {filename}")
            print(f"📧 Total de emails: {len(users)}")
            
            # Lista de emails para copiar/colar
            print("\n📋 Lista de emails (para copiar):")
            emails_list = [user.email for user in users]
            print(", ".join(emails_list))
            
    except Exception as e:
        print(f"❌ Erro ao exportar emails: {e}")
