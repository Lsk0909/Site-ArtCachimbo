# 🌐 ACESSO AO PAINEL ADMINISTRATIVO - NETLIFY

## 📋 INFORMAÇÕES DE ACESSO

### 🔐 ADMINISTRADORES DISPONÍVEIS

#### 🟢 ADMINISTRADOR 1 - Euller.Adm
- **Usuário:** `Euller.Adm`
- **Senha:** `admin123`
- **Email:** `euller.adm@artcachimbo.com`

#### 🟢 ADMINISTRADOR 2 - Kleber.Adm
- **Usuário:** `Kleber.Adm`
- **Senha:** `admin456`
- **Email:** `kleber.adm@artcachimbo.com`

---

## 🚀 COMO ACESSAR O PAINEL NO NETLIFY

### MÉTODO 1 - ACESSO DIRETO

1. **Acesse o site:** [https://seu-site.netlify.app](https://seu-site.netlify.app)
2. **Clique em LOGIN** no menu de navegação
3. **Faça login com os dados:**
   - Usuário: `Euller.Adm` ou `Kleber.Adm`
   - Senha: `admin123` ou `admin456`
4. **Botão "PAINEL"** aparecerá no menu
5. **Clique em "PAINEL"** para acessar o painel administrativo

### MÉTODO 2 - URL DIRETA

1. **Acesse diretamente:** `https://seu-site.netlify.app/login.html`
2. **Faça login** com os dados acima
3. **Será redirecionado** para o painel automaticamente

### MÉTODO 3 - PAINEL DIRETO

1. **Acesse:** `https://seu-site.netlify.app/admin.html`
2. **Se não estiver logado,** será redirecionado para o login
3. **Faça login** e volte para o painel

---

## 🎛️ FUNCIONALIDADES DO PAINEL

### 📊 ESTATÍSTICAS EM TEMPO REAL
- 👥 **Usuários Cadastrados** - Total de usuários no sistema
- 👁️ **Visitas ao Site** - Todas as visitas registradas
- 👥 **Visitas Únicas Hoje** - IPs únicos que visitaram hoje
- 📦 **Produtos** - Itens no portfólio
- 📅 **Data Atual** - Informações do dia

### 👥 GERENCIAMENTO DE USUÁRIOS
- **Ver todos os usuários** cadastrados
- **Editar informações** dos usuários
- **Deletar usuários** indesejados
- **Exportar lista** em formato CSV

### 📈 CONTROLE DE VISITAS
- **Ver todas as visitas** com detalhes
- **Exportar visitas** para análise
- **Limpar visitas** (reset do contador)
- **Ver estatísticas** diárias

### ⚡ AÇÕES RÁPIDAS
- **Exportar Usuários** - CSV completo
- **Exportar Visitas** - CSV detalhado
- **Limpar Visitas** - Reset do sistema
- **Logout Seguro** - Saída protegida

---

## 🔍 VERIFICANDO DADOS NO CONSOLE

Se precisar verificar os dados diretamente:

1. **Acesse o site:** `https://seu-site.netlify.app`
2. **Pressione F12** para abrir DevTools
3. **Vá para aba "Console"**
4. **Digite os comandos:**

```javascript
// Ver usuários
localStorage.getItem("users")

// Ver usuários formatado
JSON.parse(localStorage.getItem("users"))

// Ver se está logado
localStorage.getItem("username")
localStorage.getItem("loggedIn")

// Ver visitas
localStorage.getItem("site_visits")
localStorage.getItem("daily_visits")

// Ver tudo
localStorage
```

---

## 🛠️ SOLUÇÃO DE PROBLEMAS

### ❌ Botão "PAINEL" não aparece?
**Solução:**
1. Verifique se fez login corretamente
2. Use os usernames exatos: `Euller.Adm` ou `Kleber.Adm`
3. Limpe o cache do navegador (Ctrl+F5)
4. Tente fazer login novamente

### ❌ Acesso negado ao painel?
**Solução:**
1. Verifique se está logado como administrador
2. Use as senhas corretas: `admin123` ou `admin456`
3. Verifique no console se o usuário tem `isAdmin: true`

### ❌ Página não encontrada (404)?
**Solução:**
1. Acesse pela página inicial: `https://seu-site.netlify.app`
2. Use o menu de navegação
3. Tente as URLs diretas mencionadas acima

---

## 📱 FUNCIONALIDADES ESPECIAIS

### 🔄 ATUALIZAÇÃO AUTOMÁTICA
- **Dados atualizados** a cada 30 segundos
- **Estatísticas em tempo real**
- **Sincronização automática**

### 📊 EXPORTAÇÃO DE DADOS
- **CSV de Usuários:** Nome, Username, Email, Data
- **CSV de Visitas:** ID, Timestamp, Página, IP, Sessão
- **Download automático** ao clicar nos botões

### 🔐 SEGURANÇA
- **Acesso restrito** apenas para administradores
- **Verificação dinâmica** de permissões
- **Logout seguro** com confirmação
- **Sessão persistente** no navegador

---

## 🎯 DICAS IMPORTANTES

### 💡 MELHORES PRÁTICAS
- **Guarde os dados de acesso** em local seguro
- **Use senhas fortes** para os usuários
- **Faça logout** após usar o painel
- **Exporte dados** regularmente para backup

### 📱 COMPATIBILIDADE
- **Desktop:** Chrome, Firefox, Edge, Safari
- **Mobile:** Chrome Mobile, Safari Mobile
- **Tablets:** Totalmente funcional

### 🌐 DESEMPENHO
- **Carregamento rápido** de páginas
- **Interface responsiva**
- **Dados otimizados** para localStorage
- **Atualizações sem recarregar**

---

## 🚀 PRÓXIMOS PASSOS

1. **Acesse o site** no Netlify
2. **Faça login** com `Euller.Adm` / `admin123`
3. **Explore o painel** administrativo
4. **Teste as funcionalidades** disponíveis
5. **Gerencie usuários** e visitas
6. **Exporte dados** se necessário

---

## 📞 SUPORTE

Se tiver problemas:
1. **Verifique o console** (F12) para erros
2. **Limpe o cache** do navegador
3. **Tente outro navegador**
4. **Verifique a conexão** com a internet

---

**✅ O painel administrativo está 100% funcional no Netlify!**
