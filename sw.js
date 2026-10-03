const CACHE_NAME = 'robyfox-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Install the offline system and save files to the phone
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Serve the saved files when offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
