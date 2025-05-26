// Script to defer non-critical resources loading
document.addEventListener('DOMContentLoaded', function() {
  // Register service worker for better performance if supported
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').then(function() {
        console.log('Service worker registered for better performance');
      });
    });
  }
  // Privacy link is now handled directly via href
  
  // Track outbound links for analytics
  document.querySelectorAll('a').forEach(link => {
    if (link.hostname !== window.location.hostname && link.href.indexOf('mailto:') === -1) {
      link.addEventListener('click', function(e) {
        if (typeof gtag === 'function') {
          gtag('event', 'click', {
            'event_category': 'outbound',
            'event_label': link.href
          });
        }
      });
    }
  });
});
