from app import app, db, User
from werkzeug.security import generate_password_hash

# Criar usuário administrador Kleber
with app.app_context():
    # Verificar se o usuário Kleber já existe
    existing_user = User.query.filter_by(username='Kleber').first()
    
    if existing_user:
        print("Usuario Kleber ja existe!")
        print(f"ID: {existing_user.id}")
        print(f"Nome: {existing_user.nome}")
        print(f"Email: {existing_user.email}")
        print(f"Username: {existing_user.username}")
    else:
        # Criar usuário Kleber como administrador
        admin_user = User(
            nome='Kleber Administrador',
            email='kleber@admin.com',
            username='Kleber',
            senha=generate_password_hash('admin123')  # Senha padrão: admin123
        )
        
        db.session.add(admin_user)
        db.session.commit()
        
        print("Usuario administrador Kleber criado com sucesso!")
        print("Username: Kleber")
        print("Senha: admin123")
        print("Email: kleber@admin.com")
        print("\nAcesse o painel admin em: http://192.168.1.7:5000/admin/visitas")
        print("Use estas credenciais para fazer login como administrador.")
