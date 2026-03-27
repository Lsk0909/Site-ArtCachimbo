from app import app, db, User
from werkzeug.security import generate_password_hash

# Criar usuário administrador Euller
with app.app_context():
    # Verificar se o usuário Euller já existe
    existing_user = User.query.filter_by(username='Euller').first()
    
    if existing_user:
        print("Usuario Euller ja existe!")
        print(f"ID: {existing_user.id}")
        print(f"Nome: {existing_user.nome}")
        print(f"Email: {existing_user.email}")
        print(f"Username: {existing_user.username}")
    else:
        # Criar usuário Euller como administrador
        admin_user = User(
            nome='Euller Administrador',
            email='euller@admin.com',
            username='Euller',
            senha=generate_password_hash('admin123')  # Senha padrão: admin123
        )
        
        db.session.add(admin_user)
        db.session.commit()
        
        print("Usuario administrador Euller criado com sucesso!")
        print("Username: Euller")
        print("Senha: admin123")
        print("Email: euller@admin.com")
        print("\nAcesse o painel admin em: http://192.168.1.7:5000/admin/visitas")
        print("Use estas credenciais para fazer login como administrador.")
        
    print("\nUsuarios administradores ativos:")
    admins = User.query.filter(User.username.in_(['Kleber', 'Euller'])).all()
    for admin in admins:
        print(f"- {admin.username} (ID: {admin.id})")
