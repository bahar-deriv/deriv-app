if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,c,l)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const o={uri:location.origin+r.slice(1)};return Promise.all(c.map((r=>{switch(r){case"exports":return s;case"module":return o;default:return e(r)}}))).then((e=>{const r=l(...e);return s.default||(s.default=r),s}))})))}}define("./service-worker.js",["./workbox-fe8f56f8"],(function(e){"use strict";importScripts("https://cdn.pushwoosh.com/webpush/v3/pushwoosh-service-worker.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/br_test_folder/css/core.7203.1bcfb0d5d30fd738588f.main.css",revision:null},{url:"/br_test_folder/css/core.chunk.account-signup-modal.329e70dd3554e9f6c89b.css",revision:null},{url:"/br_test_folder/css/core.chunk.complaints-policy.f7da2a996b45a3de793e.css",revision:null},{url:"/br_test_folder/css/core.chunk.set-residence-modal.de8efe679a545c1074fa.css",revision:null},{url:"/br_test_folder/css/core.chunk.trader~bde52cb3.2cc3c23bb16434c2ac95.css",revision:null},{url:"/br_test_folder/css/core.main~07ff1e00.31d6cfe0d16ae931b73c.main.css",revision:null},{url:"/br_test_folder/css/core.main~182f79bf.74f74a7c093cff9d9943.main.css",revision:null},{url:"/br_test_folder/css/core.main~352d95fa.31d6cfe0d16ae931b73c.main.css",revision:null},{url:"/br_test_folder/css/core.main~703a1da7.a718c4d04c21976d41e9.main.css",revision:null},{url:"/br_test_folder/css/core.main~7e76c2e1.3748f3da90236c39cea2.main.css",revision:null},{url:"/br_test_folder/css/core.main~d5ef20ee.5039d8c41526de325dd5.main.css",revision:null},{url:"/br_test_folder/favicon.ico",revision:"0cb8c9c65c9adde7eec4f6f79e2f4076"},{url:"/br_test_folder/js/core.1360.de42e9fcb77bae8064fa.js",revision:null},{url:"/br_test_folder/js/core.1360.de42e9fcb77bae8064fa.js.LICENSE.txt",revision:"411548f347b07fd9b880024b1215db1d"},{url:"/br_test_folder/js/core.204.8b7a19d8f18af4177488.js",revision:null},{url:"/br_test_folder/js/core.204.8b7a19d8f18af4177488.js.LICENSE.txt",revision:"c74e4063dd4a8c60ce82963c023a070e"},{url:"/br_test_folder/js/core.230.3d077e96d615db97a9d7.js",revision:null},{url:"/br_test_folder/js/core.230.3d077e96d615db97a9d7.js.LICENSE.txt",revision:"9312913abd3ec291e09a77758d4b839e"},{url:"/br_test_folder/js/core.3190.7d76931ac4455b1d416d.js",revision:null},{url:"/br_test_folder/js/core.338.82932f2d7958e26eb977.js",revision:null},{url:"/br_test_folder/js/core.338.82932f2d7958e26eb977.js.LICENSE.txt",revision:"6fce53c7c7713ebf61712cc2929746fa"},{url:"/br_test_folder/js/core.3733.fd03eb2b7967994419d1.js",revision:null},{url:"/br_test_folder/js/core.3733.fd03eb2b7967994419d1.js.LICENSE.txt",revision:"05efa0f2ef59b13b6cb1cae8031f1c52"},{url:"/br_test_folder/js/core.3806.e4c91008fba2f25d08fd.js",revision:null},{url:"/br_test_folder/js/core.3806.e4c91008fba2f25d08fd.js.LICENSE.txt",revision:"8e7fa176b006150306288bd092a696c0"},{url:"/br_test_folder/js/core.413.86ac780ef11826c8b57f.js",revision:null},{url:"/br_test_folder/js/core.4400.a33b556d1309c92d7009.js",revision:null},{url:"/br_test_folder/js/core.4755.367a88103ce1b6f5a397.js",revision:null},{url:"/br_test_folder/js/core.4755.367a88103ce1b6f5a397.js.LICENSE.txt",revision:"7ec01595672f75e83fd81b41f132f4c1"},{url:"/br_test_folder/js/core.516.314933f9f0a3944d6817.js",revision:null},{url:"/br_test_folder/js/core.516.314933f9f0a3944d6817.js.LICENSE.txt",revision:"caa639c0a9c790606af088aa1f8f5c26"},{url:"/br_test_folder/js/core.6089.6d6a961c611a5af46d50.js",revision:null},{url:"/br_test_folder/js/core.6642.1ca6d745e11138df063a.js",revision:null},{url:"/br_test_folder/js/core.6642.1ca6d745e11138df063a.js.LICENSE.txt",revision:"6fce53c7c7713ebf61712cc2929746fa"},{url:"/br_test_folder/js/core.7203.a113e09203758b03e8c2.js",revision:null},{url:"/br_test_folder/js/core.7203.a113e09203758b03e8c2.js.LICENSE.txt",revision:"52d07faf3fab71c4ad7e9f1a3a00aa4f"},{url:"/br_test_folder/js/core.7598.ea6b032631522923451a.js",revision:null},{url:"/br_test_folder/js/core.7598.ea6b032631522923451a.js.LICENSE.txt",revision:"9048b1757255eadd33395e6e79746ece"},{url:"/br_test_folder/js/core.8605.40cf2b012cd8c452c697.js",revision:null},{url:"/br_test_folder/js/core.8605.40cf2b012cd8c452c697.js.LICENSE.txt",revision:"52d07faf3fab71c4ad7e9f1a3a00aa4f"},{url:"/br_test_folder/js/core.9268.37bae2bbe31b0362d475.js",revision:null},{url:"/br_test_folder/js/core.9273.159039eb75886abb5e6b.js",revision:null},{url:"/br_test_folder/js/core.935.2de574cb09d3433f1c7c.js",revision:null},{url:"/br_test_folder/js/core.935.2de574cb09d3433f1c7c.js.LICENSE.txt",revision:"e81688a9cf3aa8a7481b976f81916512"},{url:"/br_test_folder/js/core.9554.9f7eacd4484e354cdcb4.js",revision:null},{url:"/br_test_folder/js/core.9554.9f7eacd4484e354cdcb4.js.LICENSE.txt",revision:"a16bc6da978d0d0e93239b2ef9f7d540"},{url:"/br_test_folder/js/core.9956.48f3d59e4c9d89b6e113.js",revision:null},{url:"/br_test_folder/js/core.9956.48f3d59e4c9d89b6e113.js.LICENSE.txt",revision:"c47fb89f944fc413937f1d857df6495a"},{url:"/br_test_folder/js/core.account-info.c49bf10775af3c1aa964.js",revision:null},{url:"/br_test_folder/js/core.account-signup-modal.3012686ca5bb18532ef6.js",revision:null},{url:"/br_test_folder/js/core.account.6c7e9c4e127376126c7c.js",revision:null},{url:"/br_test_folder/js/core.bot.8f93e27d7780bff133b7.js",revision:null},{url:"/br_test_folder/js/core.cashier.fb2b20ffe2800df2cb64.js",revision:null},{url:"/br_test_folder/js/core.close-mx-account-modal.28a98b67d228506c2ff6.js",revision:null},{url:"/br_test_folder/js/core.complaints-policy.c371e8dfd90b5c33125d.js",revision:null},{url:"/br_test_folder/js/core.dashboard~18520c0a.27e06233650b3552debf.js.LICENSE.txt",revision:"2a121c3102a04487aa23db6ffaae2e7d"},{url:"/br_test_folder/js/core.dashboard~52bcb5ca.844bb439f3edc2aae1fc.js",revision:null},{url:"/br_test_folder/js/core.main~07ff1e00.6ce2eb442b727ea5c40a.js",revision:null},{url:"/br_test_folder/js/core.main~182f79bf.7216d88231ed240d9746.js",revision:null},{url:"/br_test_folder/js/core.main~1a408eaf.6e12e4f41299108123c3.js",revision:null},{url:"/br_test_folder/js/core.main~28ed2440.8d165e49d56f698d5784.js",revision:null},{url:"/br_test_folder/js/core.main~352d95fa.5e3f51e22806f6e82a09.js",revision:null},{url:"/br_test_folder/js/core.main~4e43d1b7.30dbe938e80903ad7044.js",revision:null},{url:"/br_test_folder/js/core.main~6b4cb1b5.57e02b7868b2325cfc37.js",revision:null},{url:"/br_test_folder/js/core.main~703a1da7.1a285f4d0e785497765d.js",revision:null},{url:"/br_test_folder/js/core.main~7e76c2e1.4049f8c119cdb42c74af.js",revision:null},{url:"/br_test_folder/js/core.main~85fa0c87.59b81320adc155bb3a06.js",revision:null},{url:"/br_test_folder/js/core.main~9a79028c.df02a9ce0b9ab3b1a535.js",revision:null},{url:"/br_test_folder/js/core.main~9a8b795a.2a9c2751beb6caea5eb6.js",revision:null},{url:"/br_test_folder/js/core.main~a8149675.e233088219e1bd7e6ec0.js",revision:null},{url:"/br_test_folder/js/core.main~c3144fc0.35b0d5fa3c80433728c5.js",revision:null},{url:"/br_test_folder/js/core.main~cb888b8a.d83e86f373245f1e7224.js",revision:null},{url:"/br_test_folder/js/core.main~cf448228.6da771334e5eeb3de428.js",revision:null},{url:"/br_test_folder/js/core.main~fc854bfa.289e0c9526011885dfd4.js",revision:null},{url:"/br_test_folder/js/core.reality-check-modal.420808876b796f924889.js",revision:null},{url:"/br_test_folder/js/core.reset-or-unlink-password-modal.37d7efa02d965d6ad6ad.js",revision:null},{url:"/br_test_folder/js/core.reset-password-modal.7a0d34326b99625e7384.js",revision:null},{url:"/br_test_folder/js/core.set-residence-modal.0ee533ba360024c4d62e.js",revision:null},{url:"/br_test_folder/js/core.settings-language.23597d6699a1b6a8e161.js",revision:null},{url:"/br_test_folder/js/core.settings-theme.8ac36040ed792f2b13b5.js",revision:null},{url:"/br_test_folder/js/core.trader~3b8e11e6.792e46858cea219fcbf4.js",revision:null},{url:"/br_test_folder/js/core.trader~bde52cb3.7d6f0fe5157a7352a2db.js",revision:null},{url:"/br_test_folder/js/core.welcome-modal~5c04ba06.19589ad0b79d3d979fdc.js",revision:null},{url:"/br_test_folder/js/core.welcome-modal~734a261b.824cc57c0c4168729249.js",revision:null},{url:"/br_test_folder/js/core.welcome-modal~7a15df7a.c40bc1311cb5254aae48.js",revision:null},{url:"/br_test_folder/js/core.welcome-modal~9624755f.26d85097d4c391fd8b6c.js",revision:null},{url:"/br_test_folder/js/core.welcome-modal~b407d6a8.3761de189bdb83dad96a.js",revision:null},{url:"/br_test_folder/js/core.welcome-modal~e0489f8e.39f2c0e6a5bb1aa4f27e.js",revision:null},{url:"/br_test_folder/js/core.welcome-modal~f0b1ccd8.2f152b8e32a33280f330.js",revision:null},{url:"/br_test_folder/js/core.welcome-modal~f53eb8c1.f62edb30c147d90b4663.js",revision:null},{url:"/br_test_folder/public/images/app/header/dbot-logo.svg",revision:"74dd603772623201c277552d07db9dea"},{url:"/br_test_folder/public/images/app/header/dmt5-logo.svg",revision:"bb9d72a69387257a410f35d42763287d"},{url:"/br_test_folder/public/images/app/header/dtrader-logo.svg",revision:"e0d36a7365f13540be65f2ba83781f83"},{url:"/br_test_folder/public/images/common/404.png",revision:"b2fd89fd64d75b5b75bb7e75f2bb9029"},{url:"/br_test_folder/public/images/common/close_account_banner.png",revision:"47457964f57828ac882a49dcd4009a1d"},{url:"/br_test_folder/public/images/common/derivgo_banner.png",revision:"cfa6bac9d229ecf1a60adcf0f9c283f9"},{url:"/br_test_folder/public/images/common/dp2p_banner.png",revision:"efbd723ab548be783bb6411d18cf168a"},{url:"/br_test_folder/public/images/common/ke_alien_card.png",revision:"8fc3d3345db92d1333e59a72ba5be769"},{url:"/br_test_folder/public/images/common/ke_national_identity_card.png",revision:"3d54bcbb6a019c272e28b15601774a2a"},{url:"/br_test_folder/public/images/common/ke_passport.png",revision:"d111da0604e97583feb278a206c8c5c3"},{url:"/br_test_folder/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png",revision:"8b90a2d122bd63b19b2987d8fca2c75d"},{url:"/br_test_folder/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png",revision:"cc6cdd9391b053108005c72f5dcc3a57"},{url:"/br_test_folder/public/images/common/ng_drivers_license.png",revision:"ad0c31da5da08e640308d2ea3447b681"},{url:"/br_test_folder/public/images/common/ng_nin_slip.png",revision:"d743586bddc5ddd91e0bb820f0718597"},{url:"/br_test_folder/public/images/common/ng_voter_id.png",revision:"47f0de9fd4bf1da1b9bda784889d7fd0"},{url:"/br_test_folder/public/images/common/welcome-bg-blue.b45a36e7985e837390d4dbec26bf1dce.svg",revision:null},{url:"/br_test_folder/public/images/common/welcome-bg-red.439aaf362ccc377e019dedcb7ddc34e0.svg",revision:null},{url:"/br_test_folder/public/images/common/za_national_identity_card.png",revision:"48c0447163401fe1d2705072a7f1c9e8"},{url:"/br_test_folder/public/images/favicons/apple-touch-icon-114.png",revision:"effff3cb7c7aa7890a0f613252d40b8c"},{url:"/br_test_folder/public/images/favicons/apple-touch-icon-120.png",revision:"30ea8aae4db71e707571a615a1207462"},{url:"/br_test_folder/public/images/favicons/apple-touch-icon-144.png",revision:"1fbf7ddfba9aa060af026c6856ffec44"},{url:"/br_test_folder/public/images/favicons/apple-touch-icon-152.png",revision:"816388a881453a30d4c2b2711fa05e64"},{url:"/br_test_folder/public/images/favicons/apple-touch-icon-180.png",revision:"a8db9d4eb2e09a4357ecd6a87a1dd6d9"},{url:"/br_test_folder/public/images/favicons/apple-touch-icon-57.png",revision:"535f09e679b29d21c3c5b9d6447d2585"},{url:"/br_test_folder/public/images/favicons/apple-touch-icon-60.png",revision:"56a21b5a2b088cbcf26912c17061b612"},{url:"/br_test_folder/public/images/favicons/apple-touch-icon-72.png",revision:"6786ed4ef1e2e96e3d4edebc3be12fd5"},{url:"/br_test_folder/public/images/favicons/apple-touch-icon-76.png",revision:"796a1bbc9a1a6ebdf0a002af495f9233"},{url:"/br_test_folder/public/images/favicons/favicon-16.png",revision:"8cf977893d6011fc63021bb7ce461544"},{url:"/br_test_folder/public/images/favicons/favicon-160.png",revision:"45fe97d84d1923f3e05626ea79971262"},{url:"/br_test_folder/public/images/favicons/favicon-192.png",revision:"3975b58ec899147249328917c81a90f4"},{url:"/br_test_folder/public/images/favicons/favicon-32.png",revision:"5bf792f88750e72e5e5ed56fc96c6efb"},{url:"/br_test_folder/public/images/favicons/favicon-96.png",revision:"bbaa020b9ae1944f52a684c311edda66"},{url:"/br_test_folder/public/images/favicons/favicon.ico",revision:"0cb8c9c65c9adde7eec4f6f79e2f4076"},{url:"/br_test_folder/public/sprites/brand.b3f15ed36d0d2db95a0646380655b7a2.svg",revision:"20ad1e2992e66ccbba6c61f2e9079be0"},{url:"/br_test_folder/public/sprites/cashier.fc27bfcd5a3e8e0a2d2ffe74ae797e0d.svg",revision:"e511f5dcb9dca4f2cef7659855a3888a"},{url:"/br_test_folder/public/sprites/common.00fd6367b4c3950bd4c31ccd68f82612.svg",revision:"5bf540b50a8bfb7ab22ab823b895bf79"},{url:"/br_test_folder/public/sprites/contract.1ca5743a5b5f7fd7201608c9301cc540.svg",revision:"b505df6ba2e73a30257f3ccb7e1af7e1"},{url:"/br_test_folder/public/sprites/currency.bb01e214db4460f58372ecb28c62765e.svg",revision:"3955f98d0403f371acffa892627a39c6"},{url:"/br_test_folder/public/sprites/dashboard.1416f37be58e2bd4617691820715c53b.svg",revision:"05ff54d36b55c456f529b2edaf1fd83f"},{url:"/br_test_folder/public/sprites/dxtrade.3a8eee97254a48a1ca9cff7ba17491c8.svg",revision:"177fb07c55e16c9e2f392e73fca70a89"},{url:"/br_test_folder/public/sprites/flag.2679f4a3231842793a9c71fec07e0f8b.svg",revision:"0b6be63adf18362585e1f439d7d20bae"},{url:"/br_test_folder/public/sprites/mt5.9eefdebfceac37a07bc45349dfcb533f.svg",revision:"c7c45ecc8d96bafbcd71b31389e3d078"},{url:"/br_test_folder/public/sprites/option.3971bb040600e58a1e30dc008551a163.svg",revision:"be90e5e9d25a16c5ebabf8c6b698dd57"},{url:"/br_test_folder/public/sprites/stock.1a672b1203ae2066f107a58ffb137c9c.svg",revision:"d8505022d6f871323ddb92c18208246a"},{url:"/br_test_folder/public/sprites/tradetype.b9ed31953cc8da3d84bafb6f5e62ee3b.svg",revision:"04d969ea5b62d0ad45915b5ace954021"},{url:"/br_test_folder/public/sprites/underlying.2c20ddec26f1393de401939ec8967e1c.svg",revision:"5d71ad1dad2983330f5f2e0202f27c14"},{url:"/br_test_folder/public/sprites/wallet.04e5a96d8a64d80ba390218d17c0a487.svg",revision:"a385d07b496daa519f7d61ca8cda77df"}],{}),e.cleanupOutdatedCaches()}));
