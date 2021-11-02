/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@deriv/shared"), require("@deriv/translations"));
	else if(typeof define === 'function' && define.amd)
		define(["@deriv/shared", "@deriv/translations"], factory);
	else if(typeof exports === 'object')
		exports["@deriv/account"] = factory(require("@deriv/shared"), require("@deriv/translations"));
	else
		root["@deriv/account"] = factory(root["@deriv/shared"], root["@deriv/translations"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__deriv_shared__, __WEBPACK_EXTERNAL_MODULE__deriv_translations__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Configs/currency-selector-config.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"@deriv/shared\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _currency_selector_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"./Configs/currency-selector-schema.js\");\n\n\n\n\nvar currencySelectorConfig = function currencySelectorConfig(_ref, CurrencySelector) {\n  var real_account_signup_target = _ref.real_account_signup_target;\n  var is_dashboard = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n  return {\n    header: {\n      active_title: is_dashboard ? (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_0__.localize)('Select wallet currency') : (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_0__.localize)('Please choose your currency'),\n      title: is_dashboard ? (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_0__.localize)('CURRENCY') : (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_0__.localize)('Account currency')\n    },\n    body: CurrencySelector,\n    form_value: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.getDefaultFields)(real_account_signup_target, _currency_selector_schema__WEBPACK_IMPORTED_MODULE_2__.default),\n    props: {\n      validate: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.generateValidationFunction)(real_account_signup_target, _currency_selector_schema__WEBPACK_IMPORTED_MODULE_2__.default)\n    },\n    passthrough: ['legal_allowed_currencies'],\n    icon: 'IcDashboardCurrency'\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currencySelectorConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db25maWdzL2N1cnJlbmN5LXNlbGVjdG9yLWNvbmZpZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFYQTtBQWFBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi9Db25maWdzL2N1cnJlbmN5LXNlbGVjdG9yLWNvbmZpZy5qcz9iYTNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSAnQGRlcml2L3RyYW5zbGF0aW9ucyc7XG5pbXBvcnQgeyBnZW5lcmF0ZVZhbGlkYXRpb25GdW5jdGlvbiwgZ2V0RGVmYXVsdEZpZWxkcyB9IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuaW1wb3J0IGN1cnJlbmN5X3NlbGVjdG9yX2NvbmZpZyBmcm9tICcuL2N1cnJlbmN5LXNlbGVjdG9yLXNjaGVtYSc7XG5cbmNvbnN0IGN1cnJlbmN5U2VsZWN0b3JDb25maWcgPSAoeyByZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldCB9LCBDdXJyZW5jeVNlbGVjdG9yLCBpc19kYXNoYm9hcmQgPSBmYWxzZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgYWN0aXZlX3RpdGxlOiBpc19kYXNoYm9hcmQgPyBsb2NhbGl6ZSgnU2VsZWN0IHdhbGxldCBjdXJyZW5jeScpIDogbG9jYWxpemUoJ1BsZWFzZSBjaG9vc2UgeW91ciBjdXJyZW5jeScpLFxuICAgICAgICAgICAgdGl0bGU6IGlzX2Rhc2hib2FyZCA/IGxvY2FsaXplKCdDVVJSRU5DWScpIDogbG9jYWxpemUoJ0FjY291bnQgY3VycmVuY3knKSxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogQ3VycmVuY3lTZWxlY3RvcixcbiAgICAgICAgZm9ybV92YWx1ZTogZ2V0RGVmYXVsdEZpZWxkcyhyZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldCwgY3VycmVuY3lfc2VsZWN0b3JfY29uZmlnKSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHZhbGlkYXRlOiBnZW5lcmF0ZVZhbGlkYXRpb25GdW5jdGlvbihyZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldCwgY3VycmVuY3lfc2VsZWN0b3JfY29uZmlnKSxcbiAgICAgICAgfSxcbiAgICAgICAgcGFzc3Rocm91Z2g6IFsnbGVnYWxfYWxsb3dlZF9jdXJyZW5jaWVzJ10sXG4gICAgICAgIGljb246ICdJY0Rhc2hib2FyZEN1cnJlbmN5JyxcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3VycmVuY3lTZWxlY3RvckNvbmZpZztcbiJdLCJuYW1lcyI6WyJsb2NhbGl6ZSIsImdlbmVyYXRlVmFsaWRhdGlvbkZ1bmN0aW9uIiwiZ2V0RGVmYXVsdEZpZWxkcyIsImN1cnJlbmN5X3NlbGVjdG9yX2NvbmZpZyIsImN1cnJlbmN5U2VsZWN0b3JDb25maWciLCJDdXJyZW5jeVNlbGVjdG9yIiwicmVhbF9hY2NvdW50X3NpZ251cF90YXJnZXQiLCJpc19kYXNoYm9hcmQiLCJoZWFkZXIiLCJhY3RpdmVfdGl0bGUiLCJ0aXRsZSIsImJvZHkiLCJmb3JtX3ZhbHVlIiwicHJvcHMiLCJ2YWxpZGF0ZSIsInBhc3N0aHJvdWdoIiwiaWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Configs/currency-selector-config.js\n");

/***/ }),

/***/ "./Configs/currency-selector-schema.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  currency: {\n    supported_in: ['maltainvest', 'malta', 'svg', 'iom'],\n    default_value: '',\n    rules: [['req', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_0__.localize)('Select an item')]]\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db25maWdzL2N1cnJlbmN5LXNlbGVjdG9yLXNjaGVtYS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL0NvbmZpZ3MvY3VycmVuY3ktc2VsZWN0b3Itc2NoZW1hLmpzPzBkZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tICdAZGVyaXYvdHJhbnNsYXRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGN1cnJlbmN5OiB7XG4gICAgICAgIHN1cHBvcnRlZF9pbjogWydtYWx0YWludmVzdCcsICdtYWx0YScsICdzdmcnLCAnaW9tJ10sXG4gICAgICAgIGRlZmF1bHRfdmFsdWU6ICcnLFxuICAgICAgICBydWxlczogW1sncmVxJywgbG9jYWxpemUoJ1NlbGVjdCBhbiBpdGVtJyldXSxcbiAgICB9LFxufTtcbiJdLCJuYW1lcyI6WyJsb2NhbGl6ZSIsImN1cnJlbmN5Iiwic3VwcG9ydGVkX2luIiwiZGVmYXVsdF92YWx1ZSIsInJ1bGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Configs/currency-selector-schema.js\n");

/***/ }),

/***/ "@deriv/shared":
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_shared__;

/***/ }),

/***/ "@deriv/translations":
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_translations__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./Configs/currency-selector-config.js");
/******/ 	__webpack_exports__ = __webpack_exports__.default;
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});