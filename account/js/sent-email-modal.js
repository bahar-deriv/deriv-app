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
		module.exports = factory(require("@deriv/components"), require("@deriv/shared"), require("@deriv/translations"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@deriv/components", "@deriv/shared", "@deriv/translations", "react"], factory);
	else if(typeof exports === 'object')
		exports["@deriv/account"] = factory(require("@deriv/components"), require("@deriv/shared"), require("@deriv/translations"), require("react"));
	else
		root["@deriv/account"] = factory(root["@deriv/components"], root["@deriv/shared"], root["@deriv/translations"], root["react"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__deriv_components__, __WEBPACK_EXTERNAL_MODULE__deriv_shared__, __WEBPACK_EXTERNAL_MODULE__deriv_translations__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Components/sent-email-modal/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  \"default\": () => (/* binding */ Components_sent_email_modal)\n});\n\n// EXTERNAL MODULE: external \"react\"\nvar external_react_ = __webpack_require__(\"react\");\nvar external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);\n// EXTERNAL MODULE: ../../../node_modules/prop-types/index.js\nvar prop_types = __webpack_require__(\"../../../node_modules/prop-types/index.js\");\nvar prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);\n// EXTERNAL MODULE: external \"@deriv/translations\"\nvar translations_ = __webpack_require__(\"@deriv/translations\");\n// EXTERNAL MODULE: external \"@deriv/components\"\nvar components_ = __webpack_require__(\"@deriv/components\");\n// EXTERNAL MODULE: external \"@deriv/shared\"\nvar shared_ = __webpack_require__(\"@deriv/shared\");\n;// CONCATENATED MODULE: ./Components/sent-email-modal/sent-email-modal.jsx\n\n\n\n\n\n\nvar getNoEmailContentStrings = function getNoEmailContentStrings() {\n  return [{\n    key: 'email_spam',\n    icon: 'IcEmailSpam',\n    content: (0,translations_.localize)('The email is in your spam folder (Sometimes things get lost there).')\n  }, {\n    key: 'wrong_email',\n    icon: 'IcEmail',\n    content: (0,translations_.localize)('You accidentally gave us another email address (Usually a work or a personal one instead of the one you meant).')\n  }, {\n    key: 'email_firewall',\n    icon: 'IcEmailFirewall',\n    content: (0,translations_.localize)('We can’t deliver the email to this address (Usually because of firewalls or filtering).')\n  }];\n};\n\nvar SentEmailModal = function SentEmailModal(_ref) {\n  var identifier_title = _ref.identifier_title,\n      is_open = _ref.is_open,\n      onClose = _ref.onClose,\n      onClickSendEmail = _ref.onClickSendEmail;\n\n  var getSubtitle = function getSubtitle() {\n    var subtitle = '';\n\n    switch (identifier_title) {\n      case shared_.CFD_PLATFORMS.DXTRADE:\n        subtitle = /*#__PURE__*/external_react_default().createElement(translations_.Localize, {\n          i18n_default_text: \"Please click on the link in the email to change your <0>Deriv X</0> password.\",\n          components: [/*#__PURE__*/external_react_default().createElement(\"span\", {\n            className: \"send-email-template__subtitle-platform\",\n            key: 0\n          })]\n        });\n        break;\n\n      case shared_.CFD_PLATFORMS.MT5:\n        subtitle = (0,translations_.localize)('Please click on the link in the email to change your DMT5 password.');\n        break;\n\n      case 'Google':\n      case 'Facebook':\n        subtitle = (0,translations_.localize)('Check your {{ identifier_title }} account email and click the link in the email to proceed.', {\n          identifier_title: identifier_title\n        });\n        break;\n\n      default:\n        subtitle = (0,translations_.localize)('Please click on the link in the email to reset your password.');\n        break;\n    }\n\n    return subtitle;\n  };\n\n  var sent_email_template = /*#__PURE__*/external_react_default().createElement(components_.SendEmailTemplate, {\n    className: \"sent-email\",\n    subtitle: getSubtitle(),\n    title: (0,translations_.localize)('We’ve sent you an email'),\n    lbl_no_receive: (0,translations_.localize)(\"Didn't receive the email?\"),\n    txt_resend: (0,translations_.localize)('Resend email'),\n    txt_resend_in: (0,translations_.localize)('Resend email in'),\n    onClickSendEmail: onClickSendEmail\n  }, getNoEmailContentStrings().map(function (item) {\n    return /*#__PURE__*/external_react_default().createElement(\"div\", {\n      className: \"sent-email__content\",\n      key: item.key\n    }, /*#__PURE__*/external_react_default().createElement(components_.Icon, {\n      icon: item.icon,\n      size: 32\n    }), /*#__PURE__*/external_react_default().createElement(components_.Text, {\n      size: \"xxs\",\n      as: \"p\"\n    }, item.content));\n  }));\n\n  if ((0,shared_.isMobile)()) {\n    return /*#__PURE__*/external_react_default().createElement(components_.MobileDialog, {\n      portal_element_id: \"modal_root\",\n      title: (0,translations_.localize)('We’ve sent you an email'),\n      wrapper_classname: \"mt5-email-sent\",\n      visible: is_open,\n      onClose: onClose,\n      has_content_scroll: true\n    }, sent_email_template);\n  }\n\n  return /*#__PURE__*/external_react_default().createElement(components_.Modal, {\n    className: 'sent-email__modal',\n    is_open: is_open,\n    has_close_icon: true,\n    should_header_stick_body: true,\n    title: \"\",\n    toggleModal: onClose,\n    width: \"440px\"\n  }, /*#__PURE__*/external_react_default().createElement(components_.Div100vhContainer, {\n    className: \"account__scrollbars_container-wrapper\",\n    is_disabled: (0,shared_.isDesktop)(),\n    height_offset: \"80px\"\n  }, /*#__PURE__*/external_react_default().createElement(components_.Modal.Body, null, /*#__PURE__*/external_react_default().createElement(\"div\", {\n    onClick: onClose,\n    className: \"send-email-template__close\"\n  }, /*#__PURE__*/external_react_default().createElement(components_.Icon, {\n    icon: \"IcCross\"\n  })), sent_email_template)));\n};\n\nSentEmailModal.propTypes = {\n  identifier_title: (prop_types_default()).string,\n  is_open: (prop_types_default()).bool,\n  is_unlink_modal: (prop_types_default()).bool,\n  onClose: (prop_types_default()).func,\n  onClickSendEmail: (prop_types_default()).func\n};\n/* harmony default export */ const sent_email_modal = (SentEmailModal);\n;// CONCATENATED MODULE: ./Components/sent-email-modal/index.js\n\n/* harmony default export */ const Components_sent_email_modal = (sent_email_modal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3NlbnQtZW1haWwtbW9kYWwvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFIQTtBQVFBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFLQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQXJCQTs7QUF1QkE7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUhBOztBQVdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVdBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQU9BOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7O0FDaklBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL0NvbXBvbmVudHMvc2VudC1lbWFpbC1tb2RhbC9zZW50LWVtYWlsLW1vZGFsLmpzeD82YjM5Iiwid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29tcG9uZW50cy9zZW50LWVtYWlsLW1vZGFsL2luZGV4LmpzP2Q3MzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBsb2NhbGl6ZSwgTG9jYWxpemUgfSBmcm9tICdAZGVyaXYvdHJhbnNsYXRpb25zJztcbmltcG9ydCB7IERpdjEwMHZoQ29udGFpbmVyLCBJY29uLCBNb2JpbGVEaWFsb2csIE1vZGFsLCBTZW5kRW1haWxUZW1wbGF0ZSwgVGV4dCB9IGZyb20gJ0BkZXJpdi9jb21wb25lbnRzJztcbmltcG9ydCB7IENGRF9QTEFURk9STVMsIGlzTW9iaWxlLCBpc0Rlc2t0b3AgfSBmcm9tICdAZGVyaXYvc2hhcmVkJztcblxuY29uc3QgZ2V0Tm9FbWFpbENvbnRlbnRTdHJpbmdzID0gKCkgPT4ge1xuICAgIHJldHVybiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGtleTogJ2VtYWlsX3NwYW0nLFxuICAgICAgICAgICAgaWNvbjogJ0ljRW1haWxTcGFtJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGxvY2FsaXplKCdUaGUgZW1haWwgaXMgaW4geW91ciBzcGFtIGZvbGRlciAoU29tZXRpbWVzIHRoaW5ncyBnZXQgbG9zdCB0aGVyZSkuJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGtleTogJ3dyb25nX2VtYWlsJyxcbiAgICAgICAgICAgIGljb246ICdJY0VtYWlsJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGxvY2FsaXplKFxuICAgICAgICAgICAgICAgICdZb3UgYWNjaWRlbnRhbGx5IGdhdmUgdXMgYW5vdGhlciBlbWFpbCBhZGRyZXNzIChVc3VhbGx5IGEgd29yayBvciBhIHBlcnNvbmFsIG9uZSBpbnN0ZWFkIG9mIHRoZSBvbmUgeW91IG1lYW50KS4nXG4gICAgICAgICAgICApLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBrZXk6ICdlbWFpbF9maXJld2FsbCcsXG4gICAgICAgICAgICBpY29uOiAnSWNFbWFpbEZpcmV3YWxsJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGxvY2FsaXplKFxuICAgICAgICAgICAgICAgICdXZSBjYW7igJl0IGRlbGl2ZXIgdGhlIGVtYWlsIHRvIHRoaXMgYWRkcmVzcyAoVXN1YWxseSBiZWNhdXNlIG9mIGZpcmV3YWxscyBvciBmaWx0ZXJpbmcpLidcbiAgICAgICAgICAgICksXG4gICAgICAgIH0sXG4gICAgXTtcbn07XG5cbmNvbnN0IFNlbnRFbWFpbE1vZGFsID0gKHsgaWRlbnRpZmllcl90aXRsZSwgaXNfb3Blbiwgb25DbG9zZSwgb25DbGlja1NlbmRFbWFpbCB9KSA9PiB7XG4gICAgY29uc3QgZ2V0U3VidGl0bGUgPSAoKSA9PiB7XG4gICAgICAgIGxldCBzdWJ0aXRsZSA9ICcnO1xuICAgICAgICBzd2l0Y2ggKGlkZW50aWZpZXJfdGl0bGUpIHtcbiAgICAgICAgICAgIGNhc2UgQ0ZEX1BMQVRGT1JNUy5EWFRSQURFOlxuICAgICAgICAgICAgICAgIHN1YnRpdGxlID0gKFxuICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemVcbiAgICAgICAgICAgICAgICAgICAgICAgIGkxOG5fZGVmYXVsdF90ZXh0PSdQbGVhc2UgY2xpY2sgb24gdGhlIGxpbmsgaW4gdGhlIGVtYWlsIHRvIGNoYW5nZSB5b3VyIDwwPkRlcml2IFg8LzA+IHBhc3N3b3JkLidcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e1s8c3BhbiBjbGFzc05hbWU9J3NlbmQtZW1haWwtdGVtcGxhdGVfX3N1YnRpdGxlLXBsYXRmb3JtJyBrZXk9ezB9IC8+XX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDRkRfUExBVEZPUk1TLk1UNTpcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZSA9IGxvY2FsaXplKCdQbGVhc2UgY2xpY2sgb24gdGhlIGxpbmsgaW4gdGhlIGVtYWlsIHRvIGNoYW5nZSB5b3VyIERNVDUgcGFzc3dvcmQuJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdHb29nbGUnOlxuICAgICAgICAgICAgY2FzZSAnRmFjZWJvb2snOlxuICAgICAgICAgICAgICAgIHN1YnRpdGxlID0gbG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICdDaGVjayB5b3VyIHt7IGlkZW50aWZpZXJfdGl0bGUgfX0gYWNjb3VudCBlbWFpbCBhbmQgY2xpY2sgdGhlIGxpbmsgaW4gdGhlIGVtYWlsIHRvIHByb2NlZWQuJyxcbiAgICAgICAgICAgICAgICAgICAgeyBpZGVudGlmaWVyX3RpdGxlIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZSA9IGxvY2FsaXplKCdQbGVhc2UgY2xpY2sgb24gdGhlIGxpbmsgaW4gdGhlIGVtYWlsIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1YnRpdGxlO1xuICAgIH07XG5cbiAgICBjb25zdCBzZW50X2VtYWlsX3RlbXBsYXRlID0gKFxuICAgICAgICA8U2VuZEVtYWlsVGVtcGxhdGVcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nc2VudC1lbWFpbCdcbiAgICAgICAgICAgIHN1YnRpdGxlPXtnZXRTdWJ0aXRsZSgpfVxuICAgICAgICAgICAgdGl0bGU9e2xvY2FsaXplKCdXZeKAmXZlIHNlbnQgeW91IGFuIGVtYWlsJyl9XG4gICAgICAgICAgICBsYmxfbm9fcmVjZWl2ZT17bG9jYWxpemUoXCJEaWRuJ3QgcmVjZWl2ZSB0aGUgZW1haWw/XCIpfVxuICAgICAgICAgICAgdHh0X3Jlc2VuZD17bG9jYWxpemUoJ1Jlc2VuZCBlbWFpbCcpfVxuICAgICAgICAgICAgdHh0X3Jlc2VuZF9pbj17bG9jYWxpemUoJ1Jlc2VuZCBlbWFpbCBpbicpfVxuICAgICAgICAgICAgb25DbGlja1NlbmRFbWFpbD17b25DbGlja1NlbmRFbWFpbH1cbiAgICAgICAgPlxuICAgICAgICAgICAge2dldE5vRW1haWxDb250ZW50U3RyaW5ncygpLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VudC1lbWFpbF9fY29udGVudCcga2V5PXtpdGVtLmtleX0+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249e2l0ZW0uaWNvbn0gc2l6ZT17MzJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IHNpemU9J3h4cycgYXM9J3AnPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uY29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvU2VuZEVtYWlsVGVtcGxhdGU+XG4gICAgKTtcblxuICAgIGlmIChpc01vYmlsZSgpKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TW9iaWxlRGlhbG9nXG4gICAgICAgICAgICAgICAgcG9ydGFsX2VsZW1lbnRfaWQ9J21vZGFsX3Jvb3QnXG4gICAgICAgICAgICAgICAgdGl0bGU9e2xvY2FsaXplKCdXZeKAmXZlIHNlbnQgeW91IGFuIGVtYWlsJyl9XG4gICAgICAgICAgICAgICAgd3JhcHBlcl9jbGFzc25hbWU9J210NS1lbWFpbC1zZW50J1xuICAgICAgICAgICAgICAgIHZpc2libGU9e2lzX29wZW59XG4gICAgICAgICAgICAgICAgb25DbG9zZT17b25DbG9zZX1cbiAgICAgICAgICAgICAgICBoYXNfY29udGVudF9zY3JvbGxcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7c2VudF9lbWFpbF90ZW1wbGF0ZX1cbiAgICAgICAgICAgIDwvTW9iaWxlRGlhbG9nPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgY2xhc3NOYW1lPXsnc2VudC1lbWFpbF9fbW9kYWwnfVxuICAgICAgICAgICAgaXNfb3Blbj17aXNfb3Blbn1cbiAgICAgICAgICAgIGhhc19jbG9zZV9pY29uXG4gICAgICAgICAgICBzaG91bGRfaGVhZGVyX3N0aWNrX2JvZHlcbiAgICAgICAgICAgIHRpdGxlPScnXG4gICAgICAgICAgICB0b2dnbGVNb2RhbD17b25DbG9zZX1cbiAgICAgICAgICAgIHdpZHRoPSc0NDBweCdcbiAgICAgICAgPlxuICAgICAgICAgICAgPERpdjEwMHZoQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhY2NvdW50X19zY3JvbGxiYXJzX2NvbnRhaW5lci13cmFwcGVyJ1xuICAgICAgICAgICAgICAgIGlzX2Rpc2FibGVkPXtpc0Rlc2t0b3AoKX1cbiAgICAgICAgICAgICAgICBoZWlnaHRfb2Zmc2V0PSc4MHB4J1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uQ2xvc2V9IGNsYXNzTmFtZT0nc2VuZC1lbWFpbC10ZW1wbGF0ZV9fY2xvc2UnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj0nSWNDcm9zcycgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtzZW50X2VtYWlsX3RlbXBsYXRlfVxuICAgICAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgICAgIDwvRGl2MTAwdmhDb250YWluZXI+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgKTtcbn07XG5cblNlbnRFbWFpbE1vZGFsLnByb3BUeXBlcyA9IHtcbiAgICBpZGVudGlmaWVyX3RpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlzX29wZW46IFByb3BUeXBlcy5ib29sLFxuICAgIGlzX3VubGlua19tb2RhbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DbGlja1NlbmRFbWFpbDogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZW50RW1haWxNb2RhbDtcbiIsImltcG9ydCBTZW50RW1haWxNb2RhbCBmcm9tICcuL3NlbnQtZW1haWwtbW9kYWwuanN4JztcblxuZXhwb3J0IGRlZmF1bHQgU2VudEVtYWlsTW9kYWw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJsb2NhbGl6ZSIsIkxvY2FsaXplIiwiRGl2MTAwdmhDb250YWluZXIiLCJJY29uIiwiTW9iaWxlRGlhbG9nIiwiTW9kYWwiLCJTZW5kRW1haWxUZW1wbGF0ZSIsIlRleHQiLCJDRkRfUExBVEZPUk1TIiwiaXNNb2JpbGUiLCJpc0Rlc2t0b3AiLCJnZXROb0VtYWlsQ29udGVudFN0cmluZ3MiLCJrZXkiLCJpY29uIiwiY29udGVudCIsIlNlbnRFbWFpbE1vZGFsIiwiaWRlbnRpZmllcl90aXRsZSIsImlzX29wZW4iLCJvbkNsb3NlIiwib25DbGlja1NlbmRFbWFpbCIsImdldFN1YnRpdGxlIiwic3VidGl0bGUiLCJEWFRSQURFIiwiTVQ1Iiwic2VudF9lbWFpbF90ZW1wbGF0ZSIsIm1hcCIsIml0ZW0iLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiaXNfdW5saW5rX21vZGFsIiwiZnVuYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/sent-email-modal/index.js\n");

/***/ }),

/***/ "../../../node_modules/prop-types/factoryWithThrowingShims.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar ReactPropTypesSecret = __webpack_require__(\"../../../node_modules/prop-types/lib/ReactPropTypesSecret.js\");\n\nfunction emptyFunction() {}\nfunction emptyFunctionWithReset() {}\nemptyFunctionWithReset.resetWarningCache = emptyFunction;\n\nmodule.exports = function() {\n  function shim(props, propName, componentName, location, propFullName, secret) {\n    if (secret === ReactPropTypesSecret) {\n      // It is still safe when called from React.\n      return;\n    }\n    var err = new Error(\n      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +\n      'Use PropTypes.checkPropTypes() to call them. ' +\n      'Read more at http://fb.me/use-check-prop-types'\n    );\n    err.name = 'Invariant Violation';\n    throw err;\n  };\n  shim.isRequired = shim;\n  function getShim() {\n    return shim;\n  };\n  // Important!\n  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.\n  var ReactPropTypes = {\n    array: shim,\n    bool: shim,\n    func: shim,\n    number: shim,\n    object: shim,\n    string: shim,\n    symbol: shim,\n\n    any: shim,\n    arrayOf: getShim,\n    element: shim,\n    elementType: shim,\n    instanceOf: getShim,\n    node: shim,\n    objectOf: getShim,\n    oneOf: getShim,\n    oneOfType: getShim,\n    shape: getShim,\n    exact: getShim,\n\n    checkPropTypes: emptyFunctionWithReset,\n    resetWarningCache: emptyFunction\n  };\n\n  ReactPropTypes.PropTypes = ReactPropTypes;\n\n  return ReactPropTypes;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzP2RjMDciXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fVxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbldpdGhSZXNldCgpIHt9XG5lbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LnJlc2V0V2FybmluZ0NhY2hlID0gZW1wdHlGdW5jdGlvbjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIHRocm93IGVycjtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGVsZW1lbnRUeXBlOiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW0sXG4gICAgZXhhY3Q6IGdldFNoaW0sXG5cbiAgICBjaGVja1Byb3BUeXBlczogZW1wdHlGdW5jdGlvbldpdGhSZXNldCxcbiAgICByZXNldFdhcm5pbmdDYWNoZTogZW1wdHlGdW5jdGlvblxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../../node_modules/prop-types/factoryWithThrowingShims.js\n");

/***/ }),

/***/ "../../../node_modules/prop-types/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nif (false) { var throwOnDirectAccess, ReactIs; } else {\n  // By explicitly using `prop-types` you are opting into new production behavior.\n  // http://fb.me/prop-types-in-prod\n  module.exports = __webpack_require__(\"../../../node_modules/prop-types/factoryWithThrowingShims.js\")();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanM/NzBkNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../../node_modules/prop-types/index.js\n");

/***/ }),

/***/ "../../../node_modules/prop-types/lib/ReactPropTypesSecret.js":
/***/ ((module) => {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';\n\nmodule.exports = ReactPropTypesSecret;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4uLy4uLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcz9hZDgzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../../node_modules/prop-types/lib/ReactPropTypesSecret.js\n");

/***/ }),

/***/ "@deriv/components":
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components__;

/***/ }),

/***/ "@deriv/shared":
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_shared__;

/***/ }),

/***/ "@deriv/translations":
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_translations__;

/***/ }),

/***/ "react":
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
/******/ 	var __webpack_exports__ = __webpack_require__("./Components/sent-email-modal/index.js");
/******/ 	__webpack_exports__ = __webpack_exports__.default;
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});