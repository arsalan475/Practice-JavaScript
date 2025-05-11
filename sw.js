// const CACHE_NAME = "calendar-app-v1";
// const assetsToCache = [
//   "/",
//   "/index.html",
//   "/styles/main.css",
//   "/scripts/main.js"
// ];

// // Install Event
// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       return cache.addAll(assetsToCache);
//     })
//   );
// });

// // Activate Event
// self.addEventListener("activate", (event) => {
//   event.waitUntil(
//     caches.keys().then((keys) =>
//       Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
//     )
//   );
// });

// // Fetch Event
// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((cachedResponse) => {
//       return cachedResponse || fetch(event.request);
//     })
//   );
// });






