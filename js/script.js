document.addEventListener('DOMContentLoaded', function() {
    
    
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    
    console.log('🚗 Добро пожаловать в ЕдетАвто!');
    console.log('📅 Сайт загружен: ' + new Date().toLocaleString());
    
    
    const heroInfo = document.querySelector('.hero-info');
    if (heroInfo) {
        heroInfo.style.opacity = '0';
        heroInfo.style.transform = 'translateX(-30px)';
        heroInfo.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            heroInfo.style.opacity = '1';
            heroInfo.style.transform = 'translateX(0)';
        }, 300);
    } 
    console.log('✅ Все функции загружены!');
});
