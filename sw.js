self.addEventListener("install", e=> {
 e.waitUntill(
     caches.open("static").then(cache => {
         return cache.addAll(["./", "./src/master.css", "./images/logo192.png"]);
     })
     );
});


self.addEventListener("fetch", e=> {
 console.log('Intercepting fetch request for : ${e.request.url}');
