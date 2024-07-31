const CACHE_NAME = 'ahtera-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    'edilahtera.github.io/ahtera/index.html',
    '/script.js',
    '/footer.html',
    '/header.html',
    '/contact-us.html',
    '/b/about-us.html',
    '/b/media-assets.html',
    'edilahtera.github.io/ahtera/footer.html',
    'edilahtera.github.io/ahtera/header.html',
    'edilahtera.github.io/ahtera/contact-us.html',
    'edilahtera.github.io/ahtera/b/about-us.html',
    'edilahtera.github.io/ahtera/b/media-assets.html',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});