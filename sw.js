self.addEventListener('install', function(event){
    console.log('Sw installed')
    event.waitUntil(
        caches.open('static')
          .then(function(cache){
            cache.addAll([
                '/',
                '/index.html',
                '/img/img144.jpg',
                '/img/img256.jpg',
                '/img/img512.jpg',
                '/img/img96.jpg'
            ]);
        })
    );
});

self.addEventListener('activate', function(){
    console.log("sw is activated")
})

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(res){
            if(res){
                return res;
            }
            else{
                return fetch(event.request);
            }
        })
    );
});

