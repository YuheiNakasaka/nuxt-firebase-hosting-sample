importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "firebase-sample",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.c79d52f534604f7b2996.js",
    "revision": "56b361f2b7bd04d8c7230571a342be15"
  },
  {
    "url": "/_nuxt/layouts/default.b807b7c966aeb4e2a735.js",
    "revision": "7612c873b77c906c7bb9134e49b46502"
  },
  {
    "url": "/_nuxt/manifest.98087ceaaf4147ba46a3.js",
    "revision": "03e1c1beb0f6d5aa90c8f49b8f2af6ed"
  },
  {
    "url": "/_nuxt/pages/index.35e069e353800bbcf7ff.js",
    "revision": "29af6fb9988992ce0c3bb328647212ac"
  },
  {
    "url": "/_nuxt/vendor.93b0c8260fefcdb7f815.js",
    "revision": "4e9667626e76baf65507ee0af5ef90f9"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

