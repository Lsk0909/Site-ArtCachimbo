# 🚀 DEPLOY INSTRUCTIONS - NETLIFY

## ✅ VERIFICAÇÃO ANTES DO DEPLOY

### 📋 ARQUIVOS ESSENCIAIS:
- ✅ `netlify.toml` - Configuração do Netlify
- ✅ `package.json` - Informações do projeto
- ✅ `public/` - Pasta com todos os arquivos estáticos
- ✅ `.gitignore` - Arquivos ignorados

### 📁 ESTRUTURA CORRETA:
```
Site-ArtCachimbo/
├── public/           ← Todos os arquivos do site
│   ├── index.html
│   ├── login.html
│   ├── admin.html
│   ├── css/
│   ├── js/
│   └── static/
├── netlify.toml      ← Config Netlify
├── package.json      ← Info projeto
└── .gitignore        ← Arquivos ignorados
```

## 🔧 CONFIGURAÇÃO NETLIFY

### 1️⃣ NO PAINEL NETLIFY:
1. **Build settings:**
   - **Base directory:** `.` (raiz)
   - **Build command:** `echo 'Static site - no build needed'`
   - **Publish directory:** `public`

### 2️⃣ CONFIGURAÇÕES AVANÇADAS:
- **Node version:** Não necessário (site estático)
- **Environment variables:** Não necessário
- **Redirects:** Já configurado no `netlify.toml`

## 🚀 COMANDOS DE DEPLOY

### AUTOMÁTICO (GitHub):
1. **Push para GitHub:** `git push origin main`
2. **Netlify detecta** automaticamente
3. **Deploy automático** em 1-2 minutos

### MANUAL (Netlify CLI):
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login no Netlify
netlify login

# Deploy
netlify deploy --prod --dir=public
```

## 🛠️ SOLUÇÃO DE PROBLEMAS

### ❌ SITE PAUSADO/ERRO:
1. **Verifique logs** no painel Netlify
2. **Build settings** - Confirme `public` como publish
3. **Arquivos** - Verifique se `public/` existe
4. **netlify.toml** - Confirme configuração

### ❌ PÁGINA NÃO ENCONTRADA:
1. **Redirects** - Verifique `netlify.toml`
2. **Arquivos** - Confirme `index.html` em `public/`
3. **Permissões** - Verifique repositório GitHub

### ❌ BUILD FALHOU:
1. **Command** - Use: `echo 'Static site - no build needed'`
2. **Directory** - Confirme: `public`
3. **Dependencies** - Não necessárias para site estático

## 📱 TESTE PÓS-DEPLOY

### URLs PARA TESTAR:
- **Home:** `https://seu-site.netlify.app`
- **Login:** `https://seu-site.netlify.app/login.html`
- **Admin:** `https://seu-site.netlify.app/admin.html`
- **Produtos:** `https://seu-site.netlify.app/produtos.html`

### FUNCIONALIDADES:
- ✅ **Navegação rolável** (mobile)
- ✅ **Botão PAINEL** (admin)
- ✅ **Login** (Euller.Adm/admin123)
- ✅ **Background** (foto atrás texto)

## 🔍 DEBUG

### VERIFICAR DEPLOY:
```bash
# Ver arquivos no deploy
ls -la public/

# Ver configuração
cat netlify.toml

# Testar local
python -m http.server 8000 --directory public
```

### LOGS NETLIFY:
1. **Painel Netlify** → Deploys
2. **Ver último deploy**
3. **Check build logs**
4. **Ver error messages**

## 🎯 RESUMO

✅ **Site estático** - Sem build necessário  
✅ **Pasta public** - Todos os arquivos  
✅ **netlify.toml** - Configuração otimizada  
✅ **Deploy automático** - Via GitHub  
✅ **Mobile-friendly** - Navegação rolável  
✅ **Admin funcional** - Botão PAINEL  

**O site deve funcionar perfeitamente no Netlify após estas correções!** 🚀
