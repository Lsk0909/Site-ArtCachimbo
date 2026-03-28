// Sistema de rastreamento de visitas
function trackVisit() {
    const visits = JSON.parse(localStorage.getItem('site_visits') || '[]');
    
    // Cria uma nova visita
    const visit = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'direct',
        ip: 'localhost', // Em produção, seria obtido do servidor
        sessionId: getSessionId()
    };
    
    visits.push(visit);
    
    // Mantém apenas as últimas 1000 visitas para não sobrecarregar
    if (visits.length > 1000) {
        visits.splice(0, visits.length - 1000);
    }
    
    localStorage.setItem('site_visits', JSON.stringify(visits));
    
    console.log('Visita registrada:', visit);
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

// Registra visita quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    // Evita registrar múltiplas visitas na mesma sessão para a mesma página
    const pageKey = 'visited_' + window.location.pathname;
    const lastVisit = sessionStorage.getItem(pageKey);
    
    if (!lastVisit || Date.now() - parseInt(lastVisit) > 300000) { // 5 minutos
        trackVisit();
        sessionStorage.setItem(pageKey, Date.now().toString());
    }
});

// Registra visita quando o usuário volta para a página (focus)
window.addEventListener('focus', function() {
    const pageKey = 'visited_' + window.location.pathname;
    const lastVisit = sessionStorage.getItem(pageKey);
    
    if (!lastVisit || Date.now() - parseInt(lastVisit) > 300000) { // 5 minutos
        trackVisit();
        sessionStorage.setItem(pageKey, Date.now().toString());
    }
});
