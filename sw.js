const CACHE_NAME = "reunion-v1";
const ASSETS = [
  "/reunion-family-app/",
  "/reunion-family-app/index.html",
  "/reunion-family-app/logo.png",
  "/reunion-family-app/manifest.json"
];

// Installation : Mise en cache des fichiers
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Stratégie : Répondre avec le cache, sinon chercher sur le réseau
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});