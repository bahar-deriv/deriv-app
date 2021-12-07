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
		module.exports = factory(require("@deriv/shared"));
	else if(typeof define === 'function' && define.amd)
		define(["@deriv/shared"], factory);
	else if(typeof exports === 'object')
		exports["@deriv/account"] = factory(require("@deriv/shared"));
	else
		root["@deriv/account"] = factory(root["@deriv/shared"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__deriv_shared__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Configs/accept-risk-config.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"@deriv/shared\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_0__);\n\nvar accept_risk_config = {\n  accept_risk: {\n    supported_in: ['maltainvest'],\n    default_value: 1\n  }\n};\n\nvar acceptRiskConfig = function acceptRiskConfig(_ref, AcceptRiskForm) {\n  var real_account_signup_target = _ref.real_account_signup_target;\n  return {\n    header: {},\n    body: AcceptRiskForm,\n    form_value: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_0__.getDefaultFields)(real_account_signup_target, accept_risk_config),\n    props: {\n      real_account_signup_target: real_account_signup_target\n    },\n    icon: '',\n    passthrough: []\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (acceptRiskConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db25maWdzL2FjY2VwdC1yaXNrLWNvbmZpZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBOztBQU9BO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFSQTtBQVVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi9Db25maWdzL2FjY2VwdC1yaXNrLWNvbmZpZy5qcz85ZjUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldERlZmF1bHRGaWVsZHMgfSBmcm9tICdAZGVyaXYvc2hhcmVkJztcblxuY29uc3QgYWNjZXB0X3Jpc2tfY29uZmlnID0ge1xuICAgIGFjY2VwdF9yaXNrOiB7XG4gICAgICAgIHN1cHBvcnRlZF9pbjogWydtYWx0YWludmVzdCddLFxuICAgICAgICBkZWZhdWx0X3ZhbHVlOiAxLFxuICAgIH0sXG59O1xuXG5jb25zdCBhY2NlcHRSaXNrQ29uZmlnID0gKHsgcmVhbF9hY2NvdW50X3NpZ251cF90YXJnZXQgfSwgQWNjZXB0Umlza0Zvcm0pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBoZWFkZXI6IHt9LFxuICAgICAgICBib2R5OiBBY2NlcHRSaXNrRm9ybSxcbiAgICAgICAgZm9ybV92YWx1ZTogZ2V0RGVmYXVsdEZpZWxkcyhyZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldCwgYWNjZXB0X3Jpc2tfY29uZmlnKSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHJlYWxfYWNjb3VudF9zaWdudXBfdGFyZ2V0LFxuICAgICAgICB9LFxuICAgICAgICBpY29uOiAnJyxcbiAgICAgICAgcGFzc3Rocm91Z2g6IFtdLFxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhY2NlcHRSaXNrQ29uZmlnO1xuIl0sIm5hbWVzIjpbImdldERlZmF1bHRGaWVsZHMiLCJhY2NlcHRfcmlza19jb25maWciLCJhY2NlcHRfcmlzayIsInN1cHBvcnRlZF9pbiIsImRlZmF1bHRfdmFsdWUiLCJhY2NlcHRSaXNrQ29uZmlnIiwiQWNjZXB0Umlza0Zvcm0iLCJyZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldCIsImhlYWRlciIsImJvZHkiLCJmb3JtX3ZhbHVlIiwicHJvcHMiLCJpY29uIiwicGFzc3Rocm91Z2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Configs/accept-risk-config.js\n");

/***/ }),

/***/ "@deriv/shared":
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_shared__;

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
/******/ 	var __webpack_exports__ = __webpack_require__("./Configs/accept-risk-config.js");
/******/ 	__webpack_exports__ = __webpack_exports__.default;
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});