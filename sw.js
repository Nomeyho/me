var version = '1.0.0';
var cacheName = 'nomeyho-' + version;

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/avatar_125.png',
                '/avatar_125.webp',
            ]).then(() => self.skipWaiting());
        })
    );
});

self.addEventListener('activate', function(e) {
    e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.open(cacheName)
        .then(cache => cache.match(event.request, { ignoreSearch: true }))
        .then(response => {
            return response || fetch(event.request);
        })
    );
});