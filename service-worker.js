/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./service-worker.js",['./workbox-9fa588b0'], (function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "/css/core.chunk.account-signup-modal.020c6fc85db4621428a2.css",
    "revision": null
  }, {
    "url": "/css/core.chunk.complaints-policy.910e70714d90c104b90f.css",
    "revision": null
  }, {
    "url": "/css/core.chunk.set-residence-modal.3878c29db0c68440cf97.css",
    "revision": null
  }, {
    "url": "/css/core.chunk.trader~account_dist_account_css_reset-trading-password-modal_css_70ccac33.15d2a40d139e511a9b36.css",
    "revision": null
  }, {
    "url": "/css/core.main~A.384950e21df4a9554049.main.css",
    "revision": null
  }, {
    "url": "/css/core.main~c.309bcf57cd9452f54911.main.css",
    "revision": null
  }, {
    "url": "/css/core.main~components_src_components_a.a0a53f725667ea71d187.main.css",
    "revision": null
  }, {
    "url": "/css/core.main~components_src_components_c.c0290feba952cbc60f33.main.css",
    "revision": null
  }, {
    "url": "/css/core.main~components_src_components_l.48f919446016ff8c1623.main.css",
    "revision": null
  }, {
    "url": "/css/core.main~s.d31f363edaeaa7aca948.main.css",
    "revision": null
  }, {
    "url": "/css/core.vendors-node_modules_deriv_deriv-api_dist_DerivAPIBasic_js-node_modules_deriv_deriv-onboardin-a0d54e.aa5b42faf3ae48dc5bbb.main.css",
    "revision": null
  }, {
    "url": "/favicon.ico",
    "revision": "0cb8c9c65c9adde7eec4f6f79e2f4076"
  }, {
    "url": "/js/core.account-info.a04a53c1b0bb820e39c8.js",
    "revision": null
  }, {
    "url": "/js/core.account-signup-modal.a4230baf06ff308c01bb.js",
    "revision": null
  }, {
    "url": "/js/core.account.8647e3baac8572e4ddb6.js",
    "revision": null
  }, {
    "url": "/js/core.bot.8d0e7e0c64901fd45a57.js",
    "revision": null
  }, {
    "url": "/js/core.cashier.b9999db6a2059964fc88.js",
    "revision": null
  }, {
    "url": "/js/core.close-mx-account-modal.b13689287d7fa35c6647.js",
    "revision": null
  }, {
    "url": "/js/core.complaints-policy.f8d60d14ccb2661c7478.js",
    "revision": null
  }, {
    "url": "/js/core.dashboard~Modules_Dashboard_d.26c9ec00d0750e883e49.js",
    "revision": null
  }, {
    "url": "/js/core.main~App_C.24c3357a363e265a11b8.js",
    "revision": null
  }, {
    "url": "/js/core.main~App_Com.5307c1f80e853a579f0b.js",
    "revision": null
  }, {
    "url": "/js/core.main~As.7516f170e51e843fe14b.js",
    "revision": null
  }, {
    "url": "/js/core.main~Se.90fe32d7023e5f485e27.js",
    "revision": null
  }, {
    "url": "/js/core.main~Stores_b.d121e3d9e9db989602f8.js",
    "revision": null
  }, {
    "url": "/js/core.main~Stores_m.0a05bb63842081007e49.js",
    "revision": null
  }, {
    "url": "/js/core.main~U.a774a4131af383e84b04.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_a.d95b4880246db092d567.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_account-limits_js_501e634c.f32e090fecbccb0290de.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_address-details_js_0928415f.707980076609d982c8f7.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_api-token_js_a71678f7.311a2808127f1430e7a2.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_currency-selector_js_f2f9c8d9.d28466ef34bac554e9d4.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_financial-details_js_0e7eaa58.48c53c0a606b52493ec7.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_personal-details_js_21b2d6f5.ea0e8d2d9be81bc292dc.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_self-exclusion_js_6be4b9cc.4ca26877dda4adf8cf5f.js",
    "revision": null
  }, {
    "url": "/js/core.main~account_dist_account_js_terms-of-use_js_d9e09153.3cfde6e1dc03a60fc5e5.js",
    "revision": null
  }, {
    "url": "/js/core.main~c.807e34f0e321ec157906.js",
    "revision": null
  }, {
    "url": "/js/core.main~cashier_dist_cashier_js_cashier-store_js_77e8332f.c4d6c48f33a190093df9.js",
    "revision": null
  }, {
    "url": "/js/core.main~components_src_components_a.48dd17e91c7259a5143a.js",
    "revision": null
  }, {
    "url": "/js/core.main~components_src_components_c.bcdd55ec52a5093cc9e2.js",
    "revision": null
  }, {
    "url": "/js/core.main~components_src_components_l.28bbe556e3b5da95bfd7.js",
    "revision": null
  }, {
    "url": "/js/core.main~s.a4337bf1c229418b8b5f.js",
    "revision": null
  }, {
    "url": "/js/core.reality-check-modal.060b969acf7b4b835645.js",
    "revision": null
  }, {
    "url": "/js/core.reset-or-unlink-password-modal.97b7785725bcb1cb14da.js",
    "revision": null
  }, {
    "url": "/js/core.reset-password-modal.d2bf741cc998b8d61db5.js",
    "revision": null
  }, {
    "url": "/js/core.set-residence-modal.61fceddcdabb2840d6d7.js",
    "revision": null
  }, {
    "url": "/js/core.settings-language.af91c97382edffc8bc09.js",
    "revision": null
  }, {
    "url": "/js/core.settings-theme.0b1fa19d48f5ac51e53d.js",
    "revision": null
  }, {
    "url": "/js/core.trader~account_dist_account_c.1590053797119b251306.js",
    "revision": null
  }, {
    "url": "/js/core.trader~account_dist_account_js_file-uploader-container_js_ad032b75.32c9e2f7d489c9abbcfc.js",
    "revision": null
  }, {
    "url": "/js/core.trader~account_dist_account_js_reset-trading-password-modal_js_ff517517.a655facbc49f1d1f25c8.js",
    "revision": null
  }, {
    "url": "/js/core.trader~trader_dist_trader_js_trader_js_4e59f282.ed0d6017a1ca94bd0ef2.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_babel_runtime_helpers_esm_classCallCheck_js-node_modules_babel_runtime_h-1aba2f.8c682a465719cc1d6c9e.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_contentpass_zxcvbn_lib_frequency_lists_js.6314af75fb93509061cc.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_contentpass_zxcvbn_lib_main_js.3a05d03cce725e083ad0.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_core-js_fn_regexp_escape_js-node_modules_core-js_shim_js-node_modules_cr-1e24ef.3b686c610fd60f309ecb.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_deriv_deriv-api_dist_DerivAPIBasic_js-node_modules_deriv_deriv-onboardin-a0d54e.5b3f3d92a6718ab4423b.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_deriv_deriv-charts_dist_smartcharts_js.d5de3195eecaf6315ef2.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_deriv_web-push-notifications_lib_index_js.92fb9ed685b50f883fa9.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_emotion_is-prop-valid_dist_is-prop-valid_browser_esm_js-node_modules_emo-55b69f.5786dec334b724c864ca.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_file-selector_dist_es5_index_js-node_modules_focus-lock_dist_es2015_inde-382d41.d241263ac8a59961668b.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_hey-listen_dist_hey-listen_es_js-node_modules_hoist-non-react-statics_di-7c7098.a1eba17dc867640bfc24.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_is-callable_index_js-node_modules_is-date-object_index_js-node_modules_i-b97f84.27bc4325cd79efe6037c.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_mini-create-react-context_dist_esm_index_js-node_modules_mobx-react_dist-7803fa.c30f1dc4d458c0152908.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_moment_moment_js.2b343aa5843cc44c1241.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_object-assign_index_js-node_modules_object-inspect_index_js-node_modules-47ff9e.c0fca4630a1ac4a40bec.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_promise-polyfill_src_index_js-node_modules_prop-types_index_js.2447f7673b6eb6798486.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_raf_index_js-node_modules_react-content-loader_dist_react-content-loader-4fed0e.aee9ab3a006227b0d8b8.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_react-lifecycles-compat_react-lifecycles-compat_es_js-node_modules_react-54b804.04837ad31707a26acc30.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_react-swipeable_es_index_js-node_modules_react-tiny-popover_dist_Popover_js.2d17039e602a3f85ca30.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_react-transition-group_esm_CSSTransition_js-node_modules_react-transitio-85c8d7.8ab018279d2840385aed.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_react-transition-group_esm_index_js.d54ad15d43b684d1aa4f.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_react_index_js.3601c738eaa45b80a31c.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_rooks_use-mutation-observer_lib_index_esm_js-node_modules_scheduler_inde-a1a9fe.0fab8890286b3c87df23.js",
    "revision": null
  }, {
    "url": "/js/core.vendors-node_modules_scroll-smooth_dist_index_js-node_modules_scrollparent_scrollparent_js-no-e650d6.862d09a3400a175a483b.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Ap.0d16e9565cee5399922d.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Assets_SvgComponents_onboarding_cfds_svg_af25ac66.f5ae4bce4b6e7a30efdb.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Assets_SvgComponents_onboarding_digital-options-mobile_svg_a765406b.183a67b6aa6cec801c56.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Assets_SvgComponents_onboarding_digital-options_svg_6a6a8cad.c437c56a6f6ff6d841bb.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Assets_SvgComponents_onboarding_multipliers-mobile_svg_48db1f53.41820f31f50e1ccc7849.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Assets_SvgComponents_onboarding_multipliers_svg_67df4c4b.848e7fa7dee65b5616b1.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Assets_SvgComponents_onboarding_not-sure-mobile_svg_9ad91f0b.541a0fefc44e187ee1ee.js",
    "revision": null
  }, {
    "url": "/js/core.welcome-modal~Assets_SvgComponents_onboarding_not-sure_svg_a469acfa.cb2f5ac67d91008a4c45.js",
    "revision": null
  }, {
    "url": "/public/images/app/header/dbot-logo.svg",
    "revision": "74dd603772623201c277552d07db9dea"
  }, {
    "url": "/public/images/app/header/dmt5-logo.svg",
    "revision": "bb9d72a69387257a410f35d42763287d"
  }, {
    "url": "/public/images/app/header/dtrader-logo.svg",
    "revision": "e0d36a7365f13540be65f2ba83781f83"
  }, {
    "url": "/public/images/common/404.png",
    "revision": "b2fd89fd64d75b5b75bb7e75f2bb9029"
  }, {
    "url": "/public/images/common/close_account_banner.png",
    "revision": "47457964f57828ac882a49dcd4009a1d"
  }, {
    "url": "/public/images/common/derivgo_banner.png",
    "revision": "cfa6bac9d229ecf1a60adcf0f9c283f9"
  }, {
    "url": "/public/images/common/dp2p_banner.png",
    "revision": "efbd723ab548be783bb6411d18cf168a"
  }, {
    "url": "/public/images/common/ke_alien_card.png",
    "revision": "8fc3d3345db92d1333e59a72ba5be769"
  }, {
    "url": "/public/images/common/ke_national_identity_card.png",
    "revision": "3d54bcbb6a019c272e28b15601774a2a"
  }, {
    "url": "/public/images/common/ke_passport.png",
    "revision": "d111da0604e97583feb278a206c8c5c3"
  }, {
    "url": "/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png",
    "revision": "8b90a2d122bd63b19b2987d8fca2c75d"
  }, {
    "url": "/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png",
    "revision": "cc6cdd9391b053108005c72f5dcc3a57"
  }, {
    "url": "/public/images/common/ng_drivers_license.png",
    "revision": "ad0c31da5da08e640308d2ea3447b681"
  }, {
    "url": "/public/images/common/ng_nin_slip.png",
    "revision": "d743586bddc5ddd91e0bb820f0718597"
  }, {
    "url": "/public/images/common/ng_voter_id.png",
    "revision": "47f0de9fd4bf1da1b9bda784889d7fd0"
  }, {
    "url": "/public/images/common/welcome-bg-blue.b45a36e7985e837390d4dbec26bf1dce.svg",
    "revision": "d3de1dd75990ffc283952ec5e747d03c"
  }, {
    "url": "/public/images/common/welcome-bg-red.439aaf362ccc377e019dedcb7ddc34e0.svg",
    "revision": "f4e868a5a4c6bdab25fab2aaa04dbac5"
  }, {
    "url": "/public/images/common/za_national_identity_card.png",
    "revision": "48c0447163401fe1d2705072a7f1c9e8"
  }, {
    "url": "/public/images/favicons/apple-touch-icon-114.png",
    "revision": "effff3cb7c7aa7890a0f613252d40b8c"
  }, {
    "url": "/public/images/favicons/apple-touch-icon-120.png",
    "revision": "30ea8aae4db71e707571a615a1207462"
  }, {
    "url": "/public/images/favicons/apple-touch-icon-144.png",
    "revision": "1fbf7ddfba9aa060af026c6856ffec44"
  }, {
    "url": "/public/images/favicons/apple-touch-icon-152.png",
    "revision": "816388a881453a30d4c2b2711fa05e64"
  }, {
    "url": "/public/images/favicons/apple-touch-icon-180.png",
    "revision": "a8db9d4eb2e09a4357ecd6a87a1dd6d9"
  }, {
    "url": "/public/images/favicons/apple-touch-icon-57.png",
    "revision": "535f09e679b29d21c3c5b9d6447d2585"
  }, {
    "url": "/public/images/favicons/apple-touch-icon-60.png",
    "revision": "56a21b5a2b088cbcf26912c17061b612"
  }, {
    "url": "/public/images/favicons/apple-touch-icon-72.png",
    "revision": "6786ed4ef1e2e96e3d4edebc3be12fd5"
  }, {
    "url": "/public/images/favicons/apple-touch-icon-76.png",
    "revision": "796a1bbc9a1a6ebdf0a002af495f9233"
  }, {
    "url": "/public/images/favicons/favicon-16.png",
    "revision": "8cf977893d6011fc63021bb7ce461544"
  }, {
    "url": "/public/images/favicons/favicon-160.png",
    "revision": "45fe97d84d1923f3e05626ea79971262"
  }, {
    "url": "/public/images/favicons/favicon-192.png",
    "revision": "3975b58ec899147249328917c81a90f4"
  }, {
    "url": "/public/images/favicons/favicon-32.png",
    "revision": "5bf792f88750e72e5e5ed56fc96c6efb"
  }, {
    "url": "/public/images/favicons/favicon-96.png",
    "revision": "bbaa020b9ae1944f52a684c311edda66"
  }, {
    "url": "/public/images/favicons/favicon.ico",
    "revision": "0cb8c9c65c9adde7eec4f6f79e2f4076"
  }, {
    "url": "/public/sprites/brand.b3f15ed36d0d2db95a0646380655b7a2.svg",
    "revision": "20ad1e2992e66ccbba6c61f2e9079be0"
  }, {
    "url": "/public/sprites/cashier.fc27bfcd5a3e8e0a2d2ffe74ae797e0d.svg",
    "revision": "e511f5dcb9dca4f2cef7659855a3888a"
  }, {
    "url": "/public/sprites/common.00fd6367b4c3950bd4c31ccd68f82612.svg",
    "revision": "5bf540b50a8bfb7ab22ab823b895bf79"
  }, {
    "url": "/public/sprites/contract.1ca5743a5b5f7fd7201608c9301cc540.svg",
    "revision": "b505df6ba2e73a30257f3ccb7e1af7e1"
  }, {
    "url": "/public/sprites/currency.bb01e214db4460f58372ecb28c62765e.svg",
    "revision": "3955f98d0403f371acffa892627a39c6"
  }, {
    "url": "/public/sprites/dashboard.1416f37be58e2bd4617691820715c53b.svg",
    "revision": "05ff54d36b55c456f529b2edaf1fd83f"
  }, {
    "url": "/public/sprites/dxtrade.3a8eee97254a48a1ca9cff7ba17491c8.svg",
    "revision": "177fb07c55e16c9e2f392e73fca70a89"
  }, {
    "url": "/public/sprites/flag.2679f4a3231842793a9c71fec07e0f8b.svg",
    "revision": "0b6be63adf18362585e1f439d7d20bae"
  }, {
    "url": "/public/sprites/mt5.9eefdebfceac37a07bc45349dfcb533f.svg",
    "revision": "c7c45ecc8d96bafbcd71b31389e3d078"
  }, {
    "url": "/public/sprites/option.3971bb040600e58a1e30dc008551a163.svg",
    "revision": "be90e5e9d25a16c5ebabf8c6b698dd57"
  }, {
    "url": "/public/sprites/stock.1a672b1203ae2066f107a58ffb137c9c.svg",
    "revision": "d8505022d6f871323ddb92c18208246a"
  }, {
    "url": "/public/sprites/tradetype.b9ed31953cc8da3d84bafb6f5e62ee3b.svg",
    "revision": "04d969ea5b62d0ad45915b5ace954021"
  }, {
    "url": "/public/sprites/underlying.2c20ddec26f1393de401939ec8967e1c.svg",
    "revision": "5d71ad1dad2983330f5f2e0202f27c14"
  }, {
    "url": "/public/sprites/wallet.04e5a96d8a64d80ba390218d17c0a487.svg",
    "revision": "a385d07b496daa519f7d61ca8cda77df"
  }], {});
  workbox.cleanupOutdatedCaches();

}));
//# sourceMappingURL=service-worker.js.map
