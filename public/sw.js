if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return c[e]||(a=new Promise(async a=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=a}else importScripts(e),a()})),a.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},a=(a,c)=>{Promise.all(a.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(a)};self.define=(a,s,o)=>{c[a]||(c[a]=Promise.resolve().then(()=>{let c={};const n={uri:location.origin+a.slice(1)};return Promise.all(s.map(a=>{switch(a){case"exports":return c;case"module":return n;default:return e(a)}})).then(e=>{const a=o(...e);return c.default||(c.default=a),c})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0bcb25fab4ee51a983a42fd65d925c9ac361bfb5.7318bb36c387efc40d89.js",revision:"12f10c2792ce0a1c0595233f4e4842ee"},{url:"/_next/static/chunks/1e650316c0972267d66936bc6deb67ba77905442.c76d9fec655971546892.js",revision:"d43a0c6b6c386884217091a8a7db9eec"},{url:"/_next/static/chunks/39e8fd94099205f6985d9c923af0172292dd6038.fb19c9c0e26832d7f3f1.js",revision:"3d068f5febdb3e9d058288832059a064"},{url:"/_next/static/chunks/7f6c49a77f8fd35330eedd38cfcd8b929da768ab.a8696ac79bd4b3ee41ca.js",revision:"c75c12cfc1aa4e391bccbf1849c04442"},{url:"/_next/static/chunks/b45addb55b16a5a0502747a7c064e6b70bdf0962.059d836e0a2e797ff773.js",revision:"f96fd49b428d1ad2de63667a68386403"},{url:"/_next/static/chunks/da02aa324c5de70c6ee6e631550a19bdf4d042d3.77a39401e223829c3248.js",revision:"99499161967b3d4cf2701f7334a590f5"},{url:"/_next/static/chunks/framework.53cfa66f9846f4090096.js",revision:"34da50bf2f234c3162f92c7406756c59"},{url:"/_next/static/chunks/main-5dad939fc25cfa39a649.js",revision:"f0ac34831aedc873b008c0004432d538"},{url:"/_next/static/chunks/pages/%5Bkey%5D-a9e929cf02863690f6d0.js",revision:"88a40839524044dd1f51c1d0de9732e8"},{url:"/_next/static/chunks/pages/_app-38907951127ad08133a0.js",revision:"5b3d2b82c9b54212c2ad736d4fddda60"},{url:"/_next/static/chunks/pages/_error-9555a62fff10f50476f0.js",revision:"83ea5b3a418319cb2c78f1b3774a969a"},{url:"/_next/static/chunks/pages/cart-18550252557b71e5de0c.js",revision:"d0045936f40ca4a3658f5db8a257ed9b"},{url:"/_next/static/chunks/pages/index-a14b0b4fc91d7b816a7b.js",revision:"3629ea3d3eb2a32c9bb86ea56ebc7663"},{url:"/_next/static/chunks/pages/product-category/%5Bslug%5D-6dd1ce3b16b71d723964.js",revision:"759b0354330e7a83d2b580a2a4611b2a"},{url:"/_next/static/chunks/pages/product/%5Bslug%5D-9d3d44889942dddad4fe.js",revision:"dbf2b3ceb7299073a66e6152317e17ab"},{url:"/_next/static/chunks/pages/test1-5a3131763c87a24c92fb.js",revision:"69719cabed531eaa5980e349cbe9cdab"},{url:"/_next/static/chunks/pages/test2-1b3d120df34c3c6098db.js",revision:"878402e67111a15c2cc35af8b6c560a4"},{url:"/_next/static/chunks/pages/test3-f722a3b8f6c7a70f8034.js",revision:"12cca636096026aabf02db2c7810b64c"},{url:"/_next/static/chunks/polyfills-0a2dccd2aa0d7ea1a89f.js",revision:"dc57e31a3bf18e0306300c1a9fba3bc6"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/9af2d5172c90faa0cec3.css",revision:"3cdd084164faeebbdbdfee6898b9a8bb"},{url:"/_next/static/css/c65b811279fa6ae498e7.css",revision:"ec7fbaff475cd7b106304cf0c401671c"},{url:"/_next/static/css/f736c4795079b7d7e939.css",revision:"a69ded5496af1e47f0c96b24fe53fc05"},{url:"/_next/static/qpzdKuViuCvoR-Y_LX62u/_buildManifest.js",revision:"315e565508ef8aca273cf4d9c3cc972c"},{url:"/_next/static/qpzdKuViuCvoR-Y_LX62u/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/android-icon-144x144.png",revision:"88d76117c71ad5ce6f7873fdc8316f9a"},{url:"/android-icon-192x192.png",revision:"041887a7471b8ce7952f1e06789a22e8"},{url:"/android-icon-36x36.png",revision:"868fe50ab6f6a6411189a8bcff1b827e"},{url:"/android-icon-48x48.png",revision:"71d65bf38b33b5c033caed4181e5237d"},{url:"/android-icon-72x72.png",revision:"9862f3773225b6169dece643ba0a1ce2"},{url:"/android-icon-96x96.png",revision:"eb600e6367e8a15299d4a91d5f27cab1"},{url:"/apple-icon-114x114.png",revision:"5dc9e96ebcb12a3ff39a3ab3557c9495"},{url:"/apple-icon-120x120.png",revision:"0af19c1075e654a47d79efdc5409efdd"},{url:"/apple-icon-144x144.png",revision:"88d76117c71ad5ce6f7873fdc8316f9a"},{url:"/apple-icon-152x152.png",revision:"ed9b39614c7189a6f53de81a226e54d2"},{url:"/apple-icon-180x180.png",revision:"ed2b63bcb2deeecb45c8e6018f41498e"},{url:"/apple-icon-57x57.png",revision:"81bcd2fba70c28372cb986644ea8c50e"},{url:"/apple-icon-60x60.png",revision:"089221410c8c471f54c8f7e881a043ef"},{url:"/apple-icon-72x72.png",revision:"9862f3773225b6169dece643ba0a1ce2"},{url:"/apple-icon-76x76.png",revision:"69a2dfbc98688ff88f50396709518ef6"},{url:"/apple-icon-precomposed.png",revision:"ad9c156a5d7b4791247c7530cbd97c89"},{url:"/apple-icon.png",revision:"ad9c156a5d7b4791247c7530cbd97c89"},{url:"/apple-touch-icon.png",revision:"c393855469f15b32f449689877774e1f"},{url:"/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/favicon-16x16.png",revision:"1f326067106ab9c5b02f1f6ce17eda9c"},{url:"/favicon-32x32.png",revision:"ec66426bc877892ff41a22efdd64a79c"},{url:"/favicon-96x96.png",revision:"eb600e6367e8a15299d4a91d5f27cab1"},{url:"/favicon.ico",revision:"ae238931e0d75862080e7fceb9c21b32"},{url:"/flickity-fullscreen.css",revision:"f8223196b7eadd24655e169d0d6fcf61"},{url:"/flickity-fullscreen.js",revision:"5b7850fb2a1f25c6df4c02ace2f80099"},{url:"/fonts.css",revision:"87ebead9a806a1560297e37a99fc15e3"},{url:"/fonts/lato/lato_black.eot",revision:"d2d9ddbd08ae0ade29cebca9330a05fc"},{url:"/fonts/lato/lato_black.ttf",revision:"a54bddbc1689d05277d2127f58589917"},{url:"/fonts/lato/lato_black.woff",revision:"f80bda6afd19534368443a3d0323a140"},{url:"/fonts/lato/lato_black.woff2",revision:"33d5f0d956f3fc30bc51f81047a2c47d"},{url:"/fonts/lato/lato_bold.eot",revision:"a2fb219c999a8fa6b95ad7c24890072e"},{url:"/fonts/lato/lato_bold.ttf",revision:"5b1b8b856d7a8cb1cb0bae6d0573f2e9"},{url:"/fonts/lato/lato_bold.woff",revision:"d878b6c29b10beca227e9eef4246111b"},{url:"/fonts/lato/lato_bold.woff2",revision:"cccb897485813c7c256901dbca54ecf2"},{url:"/fonts/lato/lato_hairline.eot",revision:"c27ae7852e3ba0749f095e5a9a78911b"},{url:"/fonts/lato/lato_hairline.ttf",revision:"5c535860c145cbafff4b17e2bfa865a3"},{url:"/fonts/lato/lato_hairline.woff",revision:"482fe0a9e92d9c5ff7fec117ca54c8ae"},{url:"/fonts/lato/lato_hairline.woff2",revision:"ada4458b361d5e72bcbd19da105afdc5"},{url:"/fonts/lato/lato_heavy.eot",revision:"b0357e425384d4222769a19587e27867"},{url:"/fonts/lato/lato_heavy.ttf",revision:"72c6dd530f0acc74b5286a7dcfa9e2d8"},{url:"/fonts/lato/lato_heavy.woff",revision:"2ce4d82354fdf1be1788c526d94eefc1"},{url:"/fonts/lato/lato_heavy.woff2",revision:"c9cbbdc3762c340d5d37073a54971487"},{url:"/fonts/lato/lato_light.eot",revision:"4afee4c98483c85a33460792d1f0f6db"},{url:"/fonts/lato/lato_light.ttf",revision:"cf44fd55d7045a2378f92f86ddfca3d3"},{url:"/fonts/lato/lato_light.woff",revision:"90301aa07d780a09812229d6375c3b28"},{url:"/fonts/lato/lato_light.woff2",revision:"7244318390cc4d36aac4a613ff42d308"},{url:"/fonts/lato/lato_medium.eot",revision:"cecc32d267ee07ce3413637314b66ca0"},{url:"/fonts/lato/lato_medium.ttf",revision:"06e1c8dbe641dd9dfa4367dc2a6efb9f"},{url:"/fonts/lato/lato_medium.woff",revision:"acbd6ecc97c80340e9bf00ea80063234"},{url:"/fonts/lato/lato_medium.woff2",revision:"0996d39c4cf5d223a14559dfa37047fd"},{url:"/fonts/lato/lato_regular.eot",revision:"8ab18d934cfa1e51dc8273cd8585387e"},{url:"/fonts/lato/lato_regular.ttf",revision:"6d4e78225df0cfd5fe1bf3e8547fefe4"},{url:"/fonts/lato/lato_regular.woff",revision:"27bd77b9162d388cb8d4c4217c7c5e2a"},{url:"/fonts/lato/lato_regular.woff2",revision:"bd03a2cc277bbbc338d464e679fe9942"},{url:"/fonts/lato/lato_semibold.eot",revision:"8bb939ef88123e279c292794c0b23768"},{url:"/fonts/lato/lato_semibold.ttf",revision:"3b0cd7254b3b6ddb8a313d41573fda8b"},{url:"/fonts/lato/lato_semibold.woff",revision:"c2b50f4a7d908c8d06f5b05ec135e166"},{url:"/fonts/lato/lato_semibold.woff2",revision:"8b4f872c5de19974857328d06d3fe48f"},{url:"/fonts/lato/lato_thin.eot",revision:"fe4e34a5b0708ee85231d4b43fa6f2f3"},{url:"/fonts/lato/lato_thin.ttf",revision:"454421e7b2b8aaee2980346571f86863"},{url:"/fonts/lato/lato_thin.woff",revision:"13fa4c60e0ee7ea5fe2bd84059fb8cac"},{url:"/fonts/lato/lato_thin.woff2",revision:"0faa1074c17a74a7f5e32cbe6f9d76f3"},{url:"/fonts/open-sans/open-sans_bold.eot",revision:"6dcdccc095ca3d949a5f0b2c05f8bd08"},{url:"/fonts/open-sans/open-sans_bold.ttf",revision:"07986db864a6fdb45564de20fc8b1691"},{url:"/fonts/open-sans/open-sans_bold.woff",revision:"58308bcc8dce00a629bd46305a1c5494"},{url:"/fonts/open-sans/open-sans_extrabold.eot",revision:"788fde173c5069003cf171d9d4310ea1"},{url:"/fonts/open-sans/open-sans_extrabold.ttf",revision:"94a6e3fc55c91b663cad7ebd651e8d3d"},{url:"/fonts/open-sans/open-sans_extrabold.woff",revision:"b6557a2c1e47e244fd42a085e8fe0897"},{url:"/fonts/open-sans/open-sans_light.eot",revision:"185c8f0ad073144803fcaaac566c4531"},{url:"/fonts/open-sans/open-sans_light.ttf",revision:"3c5786e02436eb7c7f6763f391c7d648"},{url:"/fonts/open-sans/open-sans_light.woff",revision:"684c4fb87e4351abe8c8d6b02b1ceb25"},{url:"/fonts/open-sans/open-sans_regular.eot",revision:"7ce00256097ccf0d2c0641fce8a96e57"},{url:"/fonts/open-sans/open-sans_regular.ttf",revision:"a88748791c366be26c9bdf959d583d3f"},{url:"/fonts/open-sans/open-sans_regular.woff",revision:"ce3b96ab2b51255e60d2d1aae633dae3"},{url:"/fonts/open-sans/open-sans_semibold.eot",revision:"e4dd295071829c9022725f034943525a"},{url:"/fonts/open-sans/open-sans_semibold.ttf",revision:"5076adfa1bf9c1e5bac965ace755e798"},{url:"/fonts/open-sans/open-sans_semibold.woff",revision:"0cb4787114f012d2daa4645df1811808"},{url:"/jquery.3.5.1.min.js",revision:"12b69d0ae6c6f0c42942ae6da2896e84"},{url:"/manifest.json",revision:"f37d8da410750f3c96f00eef3cc55ab4"},{url:"/ms-icon-144x144.png",revision:"88d76117c71ad5ce6f7873fdc8316f9a"},{url:"/ms-icon-150x150.png",revision:"592a46fb90ce3643ee372ed54a8ecc6c"},{url:"/ms-icon-310x310.png",revision:"9eb7c177e67af198d6ef43e320471ead"},{url:"/ms-icon-70x70.png",revision:"20d27282dba44d7feab7799031c07860"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));