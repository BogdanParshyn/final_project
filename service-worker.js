"use strict";var precacheConfig=[["/final_project/Ring-Preloader.44d18b1f.gif","2407b512f6f2eec61cd2f3136242a025"],["/final_project/back_table.8e23bebf.png","62f9f593a7aafdc6dd9a4a9c880dd98f"],["/final_project/final_project.377a0c1b.js","1dd793a5e9a7410e06f05d16cbd6b58d"],["/final_project/final_project.52116b45.css","e13183929524a612109f7e656c424ec2"],["/final_project/icon-128x128.ee841723.png","f6f433cf47a90c950623271a92b75850"],["/final_project/icon-144x144.5cd96c36.png","bce7aa4fa9840800084b510c300ee6df"],["/final_project/icon-152x152.dade288d.png","003de86e4f1d8e6947cb5e42a4801731"],["/final_project/icon-192x192.74f21d2c.png","915cfa7f2992e9e24a8b035d378456b8"],["/final_project/icon-384x384.3c018978.png","ae30eed093312dde7b417401abc7b87b"],["/final_project/icon-512x512.8f353153.png","485769c9492266e634dd5aaa3d5fe107"],["/final_project/icon-72x72.6f0bc51c.png","b94e7346993f2798882e0fb86ade82b5"],["/final_project/icon-96x96.3f680d80.png","013ae4970a4da9d1be6eec35f6e01f00"],["/final_project/index.html","23bb0500c6f64695d503a4702c90f13f"],["/final_project/style.52116b45.css","0143cf70345019a6cf35cde3c63ea5e3"]],cacheName="sw-precache-v3-service_report-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,t,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),a.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],r=new URL(n,self.location),a=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var r=new Request(t,{credentials:"same-origin"});return fetch(r).then(function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(t,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),n=urlsToCacheKeys.has(t));!n&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/final_project/index.html",self.location).toString(),n=urlsToCacheKeys.has(t)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});