from app import app, db, SiteVisit
from datetime import datetime, timedelta

# Resetar todas as visitas do banco
with app.app_context():
    # Contar visitas antes de resetar
    total_antes = SiteVisit.query.count()
    print(f"Total de visitas antes: {total_antes}")
    
    # Deletar todas as visitas
    SiteVisit.query.delete()
    db.session.commit()
    
    # Verificar se resetou
    total_depois = SiteVisit.query.count()
    print(f"Total de visitas depois: {total_depois}")
    
    print("Visitas resetadas com sucesso!")
    print("O sistema agora contará 1 visita por IP por dia.")
