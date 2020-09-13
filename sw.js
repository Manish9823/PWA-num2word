self.addEventListener('install', function(event){
    console.log('Sw installed')
    event.waitUntil(
        caches.open('static')
          .then(function(cache){
            cache.addAll([
                '/',
                '/index.html',
                '/img/img144.png',
                '/img/img256.png',
                '/img/img512.png',
                '/img/img96.png'
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

