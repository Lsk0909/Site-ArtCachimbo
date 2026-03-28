# 🌐 GUIA COMPLETO - DOMÍNIO ARTCACHIMBO.TK

## 📋 PASSO A PASSO - FREEDOM REGISTRATION

### 🎯 PASSO 1: ACESSAR FREEDOM
1. **Abra:** https://www.freenom.com
2. **Clique em:** "Get a domain for FREE"
3. **Digite:** `Artcachimbo`
4. **Pesquise** e escolha: `Artcachimbo.tk`
5. **Clique em:** "Checkout"

### 📝 PASSO 2: CRIAR CONTA
1. **Preencha formulário:**
   - **First Name:** Seu nome
   - **Last Name:** Seu sobrenome
   - **Email:** seu-email@gmail.com
   - **Phone:** +55 85 XXXXX-XXXX
   - **Password:** Crie senha forte
   - **Confirm Password:** Repita senha

2. **Marque:** "I have read and agree to the Terms of Service"
3. **Clique em:** "Continue"

### 📧 PASSO 3: VERIFICAR EMAIL
1. **Abra seu email**
2. **Procure email** do Freenom
3. **Clique no link** de verificação
4. **Login** no Freenom

### 🎯 PASSO 4: GERENCIAR DOMÍNIO
1. **Após login,** clique em "My Domains"
2. **Encontre:** `Artcachimbo.tk`
3. **Clique em:** "Manage Domain"

## 🔧 CONFIGURAÇÃO DNS - FREEDOM

### 📋 PASSO 5: CONFIGURAR NAMESERVERS
1. **Em "Manage Domain",** clique em "Nameservers"
2. **Selecione:** "Use Freenom Nameservers"
3. **Clique em:** "Change Nameservers"
4. **Aguarde 5-10 minutos** para propagar

### 📋 PASSO 6: CONFIGURAR DNS RECORDS
1. **Vá para:** "DNS Records"
2. **Clique em:** "Add Record"
3. **Adicione estes registros:**

#### 🎯 REGISTRO A (PRINCIPAL)
```
TYPE: A
NAME: @
TTL: 14400
TARGET: 185.199.108.153
```

#### 🎯 REGISTRO CNAME (WWW)
```
TYPE: CNAME
NAME: www
TTL: 14400
TARGET: lsk0909.github.io
```

#### 🎯 REGISTRO TXT (GITHUB VERIFICATION)
```
TYPE: TXT
NAME: @
TTL: 14400
TARGET: github-pages-challenge-lsk0909
```

#### 🎯 REGISTRO A (BACKUP)
```
TYPE: A
NAME: @
TTL: 14400
TARGET: 185.199.109.153
```

#### 🎯 REGISTRO A (BACKUP 2)
```
TYPE: A
NAME: @
TTL: 14400
TARGET: 185.199.110.153
```

#### 🎯 REGISTRO A (BACKUP 3)
```
TYPE: A
NAME: @
TTL: 14400
TARGET: 185.199.111.153
```

## 🔧 CONFIGURAÇÃO GITHUB PAGES

### 📋 PASSO 7: GITHUB PAGES CUSTOM DOMAIN
1. **Abra:** https://github.com/Lsk0909/Site-ArtCachimbo
2. **Clique em:** Settings
3. **No menu lateral,** clique em Pages
4. **Em "Custom domain",** digite: `Artcachimbo.tk`
5. **Clique em:** "Add domain"

### 📋 PASSO 8: VERIFICAR DNS
1. **Aguarde 5 minutos**
2. **GitHub mostrará:** "Your site is published at Artcachimbo.tk"
3. **Se aparecer erro,** aguarde mais 10 minutos

### 📋 PASSO 9: CNAME FILE
1. **GitHub criará automaticamente:** `CNAME` file
2. **Verifique se** o arquivo contém: `Artcachimbo.tk`
3. **Se não existir,** crie manualmente

## 🔒 CONFIGURAÇÃO SSL/HTTPS

### 📋 PASSO 10: VERIFICAR SSL
1. **Acesse:** https://Artcachimbo.tk
2. **Verifique cadeado** 🔒 no navegador
3. **Se não tiver HTTPS,** aguarde 24 horas

### 📋 PASSO 11: FORÇAR HTTPS
1. **GitHub Pages → Settings → Pages**
2. **Marque:** "Enforce HTTPS"
3. **Aguarde** alguns minutos

## 🧪 TESTE COMPLETO

### 📋 PASSO 12: TESTAR TUDO
1. **Teste URL principal:** https://Artcachimbo.tk
2. **Teste com www:** https://www.Artcachimbo.tk
3. **Teste HTTPS:** Verifique cadeado 🔒
4. **Teste funcionalidades:**
   - Login: Euller.Adm / admin123
   - Botão PAINEL
   - Navegação mobile

### 📋 PASSO 13: VERIFICAR MOBILE
1. **Abra no celular**
2. **Teste navegação rolável**
3. **Verifique layout responsivo**
4. **Teste login e PAINEL**

## 🔧 SOLUÇÃO DE PROBLEMAS

### ❌ ERRO: "DNS_PROBE_FINISHED_NXDOMAIN"
**Solução:**
1. **Aguarde 1-2 horas** para propagar DNS
2. **Limpe cache DNS:** `ipconfig /flushdns`
3. **Use outro navegador**

### ❌ ERRO: "404 Not Found"
**Solução:**
1. **Verifique DNS records** no Freenom
2. **Confirme CNAME file** no GitHub
3. **Aguarde mais tempo**

### ❌ ERRO: "SSL Certificate Error"
**Solução:**
1. **Aguarde 24 horas** para SSL
2. **Verifique "Enforce HTTPS"** no GitHub
3. **Limpe cache do navegador**

### ❌ ERRO: "GitHub Pages not found"
**Solução:**
1. **Verifique se** GitHub Pages está ativo
2. **Confirme branch:** main
3. **Verifique pasta:** /(root)

## 📱 RESULTADO FINAL

### ✅ SEU SITE FICARÁ:
- **URL:** https://Artcachimbo.tk
- **HTTPS:** Automático e seguro
- **Mobile:** 100% funcional
- **Admin:** Botão PAINEL ativo
- **Login:** Euller.Adm / admin123

### 🎯 BENEFÍCIOS:
- ✅ Domínio profissional
- ✅ SSL automático
- ✅ Performance rápida
- ✅ 100% gratuito
- ✅ Marca própria

## 🚀 TEMPO ESTIMADO

### ⏱️ CONFIGURAÇÃO:
- **Registro Freenom:** 5 minutos
- **DNS propagation:** 10-30 minutos
- **GitHub Pages:** 2-5 minutos
- **SSL certificate:** 1-24 horas

### 🎯 TOTAL: 30 minutos - 24 horas

## 📞 SUPORTE

### 🔧 SE PRECISAR AJUDA:
1. **Verifique logs** no GitHub Pages
2. **Teste DNS** em: https://www.whatsmydns.net
3. **Use ferramenta:** https://www.nslookup.io

---

**Siga este guia passo a passo e seu domínio Artcachimbo.tk estará funcionando perfeitamente!** 🎉
