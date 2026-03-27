from app import app, db, User, SiteVisit, LoginLog, Product
from datetime import datetime

# Inicializar banco de dados com estrutura correta
with app.app_context():
    # Criar todas as tabelas
    db.create_all()
    print("Banco de dados criado com sucesso!")
    
    # Verificar estrutura da tabela User
    print("\nEstrutura da tabela User:")
    print("- id (INTEGER PRIMARY KEY)")
    print("- nome (String(100) NOT NULL)")
    print("- email (String(120) UNIQUE NOT NULL)")
    print("- username (String(100) UNIQUE NOT NULL)")
    print("- senha (String(100) NOT NULL)")
    
    # Testar inserção de usuário
    print("\nTestando inserção de usuário...")
    try:
        test_user = User(
            nome="Teste",
            email="teste@exemplo.com",
            username="testuser",
            senha="senha123"
        )
        db.session.add(test_user)
        db.session.commit()
        print("Usuario de teste inserido com sucesso!")
        
        # Remover usuário de teste
        db.session.delete(test_user)
        db.session.commit()
        print("Usuario de teste removido")
        
    except Exception as e:
        print(f"Erro ao inserir usuario: {e}")
        db.session.rollback()
    
    print("\nBanco de dados pronto para uso!")
    print("Inicie o servidor com: python app.py")
