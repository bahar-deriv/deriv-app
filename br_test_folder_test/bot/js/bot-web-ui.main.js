/*! For license information please see bot-web-ui.main.js.LICENSE.txt */
!function(e,_){"object"==typeof exports&&"object"==typeof module?module.exports=_(require("@deriv/components"),require("@deriv/deriv-charts"),require("@deriv/shared"),require("@deriv/translations"),require("classnames"),require("formik"),require("mobx"),require("mobx-react"),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/deriv-charts","@deriv/shared","@deriv/translations","classnames","formik","mobx","mobx-react","react","react-dom"],_):"object"==typeof exports?exports["@deriv/bot-web-ui"]=_(require("@deriv/components"),require("@deriv/deriv-charts"),require("@deriv/shared"),require("@deriv/translations"),require("classnames"),require("formik"),require("mobx"),require("mobx-react"),require("react"),require("react-dom")):e["@deriv/bot-web-ui"]=_(e["@deriv/components"],e["@deriv/deriv-charts"],e["@deriv/shared"],e["@deriv/translations"],e.classnames,e.formik,e.mobx,e["mobx-react"],e.react,e["react-dom"])}(self,(function(__WEBPACK_EXTERNAL_MODULE__deriv_components__,__WEBPACK_EXTERNAL_MODULE__deriv_deriv_charts__,__WEBPACK_EXTERNAL_MODULE__deriv_shared__,__WEBPACK_EXTERNAL_MODULE__deriv_translations__,__WEBPACK_EXTERNAL_MODULE_classnames__,__WEBPACK_EXTERNAL_MODULE_formik__,__WEBPACK_EXTERNAL_MODULE_mobx__,__WEBPACK_EXTERNAL_MODULE_mobx_react__,__WEBPACK_EXTERNAL_MODULE_react__,__WEBPACK_EXTERNAL_MODULE_react_dom__){return(()=>{"use strict";var __webpack_modules__={"./src/app/app.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/shared */ "@deriv/shared");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/components */ "@deriv/components");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar Bot = (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.makeLazyLoader)(function () {\n  return Promise.all(/*! import() | bot-web-ui-app */[__webpack_require__.e("vendors-node_modules_deriv_deriv-api_dist_DerivAPIBasic_js-node_modules_deriv_js-interpreter_-7c5351"), __webpack_require__.e("bot-web-ui-app")]).then(__webpack_require__.bind(__webpack_require__, /*! ./app.jsx */ "./src/app/app.jsx"));\n}, function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Loading, null);\n})();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bot);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwL2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2JvdC13ZWItdWkvLi9zcmMvYXBwL2FwcC5qcz83ZjEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlTGF6eUxvYWRlciB9IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJ0BkZXJpdi9jb21wb25lbnRzJztcblxuY29uc3QgQm90ID0gbWFrZUxhenlMb2FkZXIoXG4gICAgKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiYm90LXdlYi11aS1hcHBcIiwgd2VicGFja1ByZWxvYWQ6IHRydWUgKi8gJy4vYXBwLmpzeCcpLFxuICAgICgpID0+IDxMb2FkaW5nIC8+XG4pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEJvdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1ha2VMYXp5TG9hZGVyIiwiTG9hZGluZyIsIkJvdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app/app.js\n')},"@deriv/components":e=>{e.exports=__WEBPACK_EXTERNAL_MODULE__deriv_components__},"@deriv/deriv-charts":e=>{e.exports=__WEBPACK_EXTERNAL_MODULE__deriv_deriv_charts__},"@deriv/shared":e=>{e.exports=__WEBPACK_EXTERNAL_MODULE__deriv_shared__},"@deriv/translations":e=>{e.exports=__WEBPACK_EXTERNAL_MODULE__deriv_translations__},classnames:e=>{e.exports=__WEBPACK_EXTERNAL_MODULE_classnames__},formik:e=>{e.exports=__WEBPACK_EXTERNAL_MODULE_formik__},mobx:e=>{e.exports=__WEBPACK_EXTERNAL_MODULE_mobx__},"mobx-react":e=>{e.exports=__WEBPACK_EXTERNAL_MODULE_mobx_react__},react:e=>{e.exports=__WEBPACK_EXTERNAL_MODULE_react__},"react-dom":e=>{e.exports=__WEBPACK_EXTERNAL_MODULE_react_dom__}},__webpack_module_cache__={},leafPrototypes,getProto,inProgress,dataWebpackPrefix,loadStylesheet,installedCssChunks;function __webpack_require__(e){var _=__webpack_module_cache__[e];if(void 0!==_)return _.exports;var r=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(r.exports,r,r.exports,__webpack_require__),r.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.n=e=>{var _=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(_,{a:_}),_},getProto=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,__webpack_require__.t=function(e,_){if(1&_&&(e=this(e)),8&_)return e;if("object"==typeof e&&e){if(4&_&&e.__esModule)return e;if(16&_&&"function"==typeof e.then)return e}var r=Object.create(null);__webpack_require__.r(r);var t={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var a=2&_&&e;"object"==typeof a&&!~leafPrototypes.indexOf(a);a=getProto(a))Object.getOwnPropertyNames(a).forEach((_=>t[_]=()=>e[_]));return t.default=()=>e,__webpack_require__.d(r,t),r},__webpack_require__.d=(e,_)=>{for(var r in _)__webpack_require__.o(_,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:_[r]})},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce(((_,r)=>(__webpack_require__.f[r](e,_),_)),[])),__webpack_require__.u=e=>"bot/js/bot."+e+"."+{"vendors-node_modules_deriv_deriv-api_dist_DerivAPIBasic_js-node_modules_deriv_js-interpreter_-7c5351":"2e125faf0bc490c5d157","bot-web-ui-app":"d25228d9cf5e38558c32","dalembert-xml":"476620a46ee4557c5a53","martingale-xml":"30d6bded99f974379d9e","oscars_grind-xml":"f88009ceae167b3dff25","dbot-collection":"c3b71e2c6595c012278f"}[e]+".js",__webpack_require__.miniCssF=e=>"bot/css/bot."+e+".acf8bdf19c0954db3b14.css",__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_),inProgress={},dataWebpackPrefix="@deriv/bot-web-ui:",__webpack_require__.l=(e,_,r,t)=>{if(inProgress[e])inProgress[e].push(_);else{var a,o;if(void 0!==r)for(var i=document.getElementsByTagName("script"),n=0;n<i.length;n++){var s=i[n];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==dataWebpackPrefix+r){a=s;break}}a||(o=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,__webpack_require__.nc&&a.setAttribute("nonce",__webpack_require__.nc),a.setAttribute("data-webpack",dataWebpackPrefix+r),a.src=e),inProgress[e]=[_];var c=(_,r)=>{a.onerror=a.onload=null,clearTimeout(d);var t=inProgress[e];if(delete inProgress[e],a.parentNode&&a.parentNode.removeChild(a),t&&t.forEach((e=>e(r))),_)return _(r)},d=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),o&&document.head.appendChild(a)}},__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.p="/",loadStylesheet=e=>new Promise(((_,r)=>{var t=__webpack_require__.miniCssF(e),a=__webpack_require__.p+t;if(((e,_)=>{for(var r=document.getElementsByTagName("link"),t=0;t<r.length;t++){var a=(i=r[t]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===_))return i}var o=document.getElementsByTagName("style");for(t=0;t<o.length;t++){var i;if((a=(i=o[t]).getAttribute("data-href"))===e||a===_)return i}})(t,a))return _();((e,_,r,t)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=o=>{if(a.onerror=a.onload=null,"load"===o.type)r();else{var i=o&&("load"===o.type?"missing":o.type),n=o&&o.target&&o.target.href||_,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=n,a.parentNode.removeChild(a),t(s)}},a.href=_,document.head.appendChild(a)})(e,a,_,r)})),installedCssChunks={main:0},__webpack_require__.f.miniCss=(e,_)=>{installedCssChunks[e]?_.push(installedCssChunks[e]):0!==installedCssChunks[e]&&{"bot-web-ui-app":1}[e]&&_.push(installedCssChunks[e]=loadStylesheet(e).then((()=>{installedCssChunks[e]=0}),(_=>{throw delete installedCssChunks[e],_})))},(()=>{var e={main:0};__webpack_require__.f.j=(_,r)=>{var t=__webpack_require__.o(e,_)?e[_]:void 0;if(0!==t)if(t)r.push(t[2]);else{var a=new Promise(((r,a)=>t=e[_]=[r,a]));r.push(t[2]=a);var o=__webpack_require__.p+__webpack_require__.u(_),i=new Error;__webpack_require__.l(o,(r=>{if(__webpack_require__.o(e,_)&&(0!==(t=e[_])&&(e[_]=void 0),t)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+_+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,t[1](i)}}),"chunk-"+_,_)}};var _=(_,r)=>{var t,a,[o,i,n]=r,s=0;for(t in i)__webpack_require__.o(i,t)&&(__webpack_require__.m[t]=i[t]);if(n)n(__webpack_require__);for(_&&_(r);s<o.length;s++)a=o[s],__webpack_require__.o(e,a)&&e[a]&&e[a][0](),e[o[s]]=0},r=self.webpackChunk_deriv_bot_web_ui=self.webpackChunk_deriv_bot_web_ui||[];r.forEach(_.bind(null,0)),r.push=_.bind(null,r.push.bind(r))})();var __webpack_exports__=__webpack_require__("./src/app/app.js");return __webpack_exports__=__webpack_exports__.default,__webpack_exports__})()}));