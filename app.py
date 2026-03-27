from flask import Flask, render_template, request, redirect, url_for, flash, session
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime, date
from functools import wraps

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    username = db.Column(db.String(100), unique=True, nullable=False)
    senha = db.Column(db.String(100), nullable=False)

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    categoria = db.Column(db.String(50), nullable=False)
    nome = db.Column(db.String(100), nullable=False)
    descricao = db.Column(db.Text, nullable=False)
    preco = db.Column(db.Float, nullable=False)
    imagem = db.Column(db.String(200), nullable=True)
    forma_pagamento = db.Column(db.String(200), nullable=False)
    link_pagamento = db.Column(db.String(200), nullable=False)

class SiteVisit(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    ip_address = db.Column(db.String(45), nullable=False)
    visit_date = db.Column(db.Date, default=date.today, nullable=False)
    page_visited = db.Column(db.String(200), nullable=False)
    visit_time = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)

@app.before_request
def track_visit():
    # Ignorar arquivos estáticos e requisições internas
    if request.endpoint and request.endpoint.startswith('static'):
        return
    
    # Registrar visita apenas para requisições GET principais
    if request.method == 'GET' and request.endpoint:
        ip_address = request.remote_addr
        today = date.today()
        page = request.endpoint or request.path
        
        # Verificar se este IP já visitou hoje
        existing_visit = SiteVisit.query.filter_by(
            ip_address=ip_address,
            visit_date=today
        ).first()
        
        # Se não visitou hoje, registrar nova visita
        if not existing_visit:
            visit = SiteVisit(
                ip_address=ip_address,
                page_visited=page,
                visit_date=today
            )
            db.session.add(visit)
            db.session.commit()

@app.route('/api/contador')
def api_contador():
    total_visitas = SiteVisit.query.count()
    return {'total_visitas': total_visitas}

@app.route('/admin')
def admin_dashboard():
    return render_template('admin_dashboard.html', session=session)

@app.route('/logout')
def logout():
    session.pop('username', None)
    flash('Você saiu do sistema!')
    return redirect(url_for('home'))

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/historia')
def historia():
    return render_template('historia.html')

@app.route('/produtos')
def produtos():
    return render_template('produtos.html')

@app.route('/catalogo')
def catalogo():
    categorias = ['Preto velho', 'Oxossi', 'Mestre', 'Maresia', 'Exu', 'Convencional', 'Torneado']
    products = Product.query.all()
    return render_template('catalogo.html', categorias=categorias, products=products)

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        nome = request.form['nome']
        email = request.form['email']
        username = request.form['username']
        senha = generate_password_hash(request.form['senha'])
        user = User(nome=nome, email=email, username=username, senha=senha)
        db.session.add(user)
        db.session.commit()
        flash('Usuário registrado com sucesso!')
        return redirect(url_for('login'))
    return render_template('register.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        senha = request.form['senha']
        user = User.query.filter_by(username=username).first()
        if user and check_password_hash(user.senha, senha):
            session['username'] = user.username
            flash('Login bem-sucedido!')
            return redirect(url_for('home'))
        else:
            flash('Credenciais inválidas!')
    return render_template('login.html')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, host='0.0.0.0', port=5000)

# Para Vercel
from werkzeug.middleware.dispatcher import DispatcherMiddleware
from werkzeug.serving import WSGIRequestHandler

# Handler para Vercel
def handler(environ, start_response):
    return app(environ, start_response)

# Exportar para Vercel
app.wsgi_app = DispatcherMiddleware(app.wsgi_app)