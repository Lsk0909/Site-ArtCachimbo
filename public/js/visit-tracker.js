// Sistema de rastreamento de visitas
function trackVisit() {
    // Obtém o IP do cliente (simulado para localhost)
    const clientIP = getClientIP();
    const today = new Date().toDateString();
    
    // Verifica o controle diário de visitas por IP
    const dailyVisits = JSON.parse(localStorage.getItem('daily_visits') || '{}');
    const ipKey = `${clientIP}_${today}`;
    
    // Se já visitou hoje, não conta novamente
    if (dailyVisits[ipKey]) {
        console.log('IP já visitou hoje:', clientIP);
        return false;
    }
    
    // Registra a visita
    const visits = JSON.parse(localStorage.getItem('site_visits') || '[]');
    
    const visit = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'direct',
        ip: clientIP,
        sessionId: getSessionId()
    };
    
    visits.push(visit);
    
    // Mantém apenas as últimas 1000 visitas para não sobrecarregar
    if (visits.length > 1000) {
        visits.splice(0, visits.length - 1000);
    }
    
    localStorage.setItem('site_visits', JSON.stringify(visits));
    
    // Marca que este IP visitou hoje
    dailyVisits[ipKey] = {
        timestamp: new Date().toISOString(),
        ip: clientIP,
        page: window.location.pathname
    };
    localStorage.setItem('daily_visits', JSON.stringify(dailyVisits));
    
    console.log('Visita registrada:', visit);
    return true;
}

// Obtém o IP do cliente (simulado - em produção usaria API real)
function getClientIP() {
    // Para desenvolvimento, usa um IP simulado baseado no storage
    let storedIP = localStorage.getItem('client_ip');
    if (!storedIP) {
        // Gera um IP simulado único para este navegador
        const randomIP = `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
        localStorage.setItem('client_ip', randomIP);
        storedIP = randomIP;
    }
    return storedIP;
}

// Limpa registros diários antigos (mantém apenas últimos 7 dias)
function cleanOldDailyRecords() {
    const dailyVisits = JSON.parse(localStorage.getItem('daily_visits') || '{}');
    const today = new Date();
    const cleanedVisits = {};
    
    Object.keys(dailyVisits).forEach(key => {
        const record = dailyVisits[key];
        const recordDate = new Date(record.timestamp);
        const daysDiff = Math.floor((today - recordDate) / (1000 * 60 * 60 * 24));
        
        // Mantém apenas registros dos últimos 7 dias
        if (daysDiff <= 7) {
            cleanedVisits[key] = record;
        }
    });
    
    localStorage.setItem('daily_visits', JSON.stringify(cleanedVisits));
}

// Gera um ID de sessão único
function getSessionId() {
    let sessionId = sessionStorage.getItem('session_id');
    if (!sessionId) {
        sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        sessionStorage.setItem('session_id', sessionId);
    }
    return sessionId;
}

// Verifica se o IP já visitou hoje
function hasVisitedToday() {
    const clientIP = getClientIP();
    const today = new Date().toDateString();
    const dailyVisits = JSON.parse(localStorage.getItem('daily_visits') || '{}');
    const ipKey = `${clientIP}_${today}`;
    
    return dailyVisits[ipKey] || false;
}

// Registra visita quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    // Limpa registros antigos
    cleanOldDailyRecords();
    
    // Verifica se já visitou hoje
    const alreadyVisited = hasVisitedToday();
    
    if (alreadyVisited) {
        console.log('Este IP já visitou o site hoje');
        // Mesmo que já tenha visitado, podemos registrar a navegação entre páginas
        // mas não como nova visita única
        trackPageNavigation();
    } else {
        // Nova visita do dia
        trackVisit();
    }
});

// Registra navegação entre páginas (não conta como visita única)
function trackPageNavigation() {
    const pageKey = 'visited_' + window.location.pathname;
    const lastVisit = sessionStorage.getItem(pageKey);
    
    if (!lastVisit || Date.now() - parseInt(lastVisit) > 300000) { // 5 minutos
        // Registra como navegação interna
        const navigation = {
            id: Date.now(),
            timestamp: new Date().toISOString(),
            page: window.location.pathname,
            type: 'navigation',
            sessionId: getSessionId()
        };
        
        const navigations = JSON.parse(localStorage.getItem('page_navigations') || '[]');
        navigations.push(navigation);
        
        // Mantém apenas últimas 500 navegações
        if (navigations.length > 500) {
            navigations.splice(0, navigations.length - 500);
        }
        
        localStorage.setItem('page_navigations', JSON.stringify(navigations));
        sessionStorage.setItem(pageKey, Date.now().toString());
    }
}

// Registra visita quando o usuário volta para a página (focus)
window.addEventListener('focus', function() {
    trackPageNavigation();
});
