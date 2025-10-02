self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(clients.claim());
});

// Sempre busca online
self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});
