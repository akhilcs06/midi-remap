// Service Worker for caching and offline support
const CACHE_NAME = 'midi-remapper-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/blog.html',
  '/privacy.html',
  '/css/styles.css',
  '/css/blog-styles.css',
  '/js/app.js',
  '/js/presets.js',
  '/js/presets-loader.js',
  '/js/seo-enhancer.js',
  '/favicon.png'
];

// Install event - cache assets
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache first, then network
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached response if found
        if (response) {
          return response;
        }
        
        // Clone the request - request is a stream and can only be consumed once
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then(
          function(response) {
            // Check if valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone the response - response is a stream and can only be consumed once
            const responseToCache = response.clone();
            
            // Cache the fetched resource
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });
              
            return response;
          }
        );
      })
  );
});
