from app import db, Product, app

with app.app_context():
    # Adicionar produtos de exemplo
    products = [
        Product(categoria='Preto velho', nome='Cachimbo Preto Velho Básico', descricao='Descrição do produto', preco=50.0, imagem='cachimbo1.jpg', forma_pagamento='Pix', link_pagamento='https://pagamento.com'),
        Product(categoria='Oxossi', nome='Cachimbo Oxossi', descricao='Descrição', preco=60.0, imagem='cachimbo2.jpg', forma_pagamento='Cartão', link_pagamento='https://pagamento.com'),
        # Adicionar mais conforme necessário
    ]
    db.session.add_all(products)
    db.session.commit()
    print("Produtos adicionados!")