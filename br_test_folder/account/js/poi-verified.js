/*! For license information please see poi-verified.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","react"],t):"object"==typeof exports?exports["@deriv/account"]=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):e["@deriv/account"]=t(e["@deriv/components"],e["@deriv/shared"],e["@deriv/translations"],e.react)}(self,(function(e,t,r,o){return(()=>{var n={"./Components/icon-message-content/index.js":(e,t,r)=>{"use strict";r.d(t,{default:()=>u});var o=r("react"),n=r.n(o),s=r("../../../node_modules/prop-types/index.js"),a=r("../../../node_modules/classnames/index.js"),i=r.n(a),c=r("@deriv/components"),p=r("@deriv/shared");function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e){var t=e.children,r=e.className,o=e.full_width,s=e.icon,a=e.icon_row,l=e.message,u=e.text;return n().createElement(c.Div100vhContainer,{className:i()("account-management__message-wrapper",{"account-management__message-wrapper-full-width":o}),is_disabled:(0,p.isDesktop)(),height_offset:"110px"},n().createElement("div",{className:i()("account-management__message-content",d({},"".concat(r,"__message-content"),r))},s&&n().createElement("div",{className:i()("account-management__message-icon",d({},"".concat(r,"__message-icon"),r))},s),a&&n().createElement("div",null,a),n().createElement(c.Text,{as:"div",color:"general",weight:"bold",size:"s",align:"center",className:i()("account-management__message",d({},"".concat(r,"__message"),r))},l),u&&n().createElement("div",{className:"account-management__text-container"},n().createElement(c.Text,{className:i()(d({},"".concat(r,"__text"),r)),as:"p",size:"xs",align:"center"},u)),t))};l.propTypes={children:s.PropTypes.oneOfType([s.PropTypes.object,s.PropTypes.array]),className:s.PropTypes.string,full_width:s.PropTypes.bool,icon:s.PropTypes.object,message:s.PropTypes.oneOfType([s.PropTypes.node,s.PropTypes.string,s.PropTypes.object]),text:s.PropTypes.oneOfType([s.PropTypes.string,s.PropTypes.element])};const u=l},"./Components/poa-button/index.js":(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var o=r("react"),n=r.n(o),s=r("../../../node_modules/prop-types/index.js"),a=r.n(s),i=r("@deriv/components"),c=r("@deriv/shared"),p=r("@deriv/translations"),d=function(e){var t=e.custom_text,r=void 0===t?(0,p.localize)("Proof of address"):t;return n().createElement(i.ButtonLink,{className:"account-management__button",to:c.routes.proof_of_address},n().createElement(i.Text,{className:"dc-btn__text",as:"p",weight:"bold"},r||(0,p.localize)("Proof of address")))};d.propTypes={custom_text:a().oneOfType([a().string,a().element])};const l=d},"../../../node_modules/classnames/index.js":(e,t)=>{var r;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var a=n.apply(null,r);a&&e.push(a)}}else if("object"===s)if(r.toString===Object.prototype.toString)for(var i in r)o.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},"../../../node_modules/prop-types/factoryWithThrowingShims.js":(e,t,r)=>{"use strict";var o=r("../../../node_modules/prop-types/lib/ReactPropTypesSecret.js");function n(){}function s(){}s.resetWarningCache=n,e.exports=function(){function e(e,t,r,n,s,a){if(a!==o){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:n};return r.PropTypes=r,r}},"../../../node_modules/prop-types/index.js":(e,t,r)=>{e.exports=r("../../../node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/prop-types/lib/ReactPropTypesSecret.js":e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"@deriv/components":t=>{"use strict";t.exports=e},"@deriv/shared":e=>{"use strict";e.exports=t},"@deriv/translations":e=>{"use strict";e.exports=r},react:e=>{"use strict";e.exports=o}},s={};function a(e){var t=s[e];if(void 0!==t)return t.exports;var r=s[e]={exports:{}};return n[e](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};return(()=>{"use strict";a.d(i,{default:()=>l});var e=a("react"),t=a.n(e),r=a("../../../node_modules/prop-types/index.js"),o=a("@deriv/components"),n=a("@deriv/shared"),s=a("@deriv/translations"),c=a("./Components/poa-button/index.js"),p=a("./Components/icon-message-content/index.js"),d=function(e){var r=e.needs_poa,a=e.redirect_button,i=e.is_from_external,d=t().useContext(n.PlatformContext).is_dashboard,l=(0,s.localize)("Your proof of identity is verified");return r?t().createElement(p.default,{message:l,icon:d?t().createElement(o.Icon,{icon:"IcPoaVerifiedDashboard",height:128,width:237}):t().createElement(o.Icon,{icon:"IcPoaVerified",size:128}),className:"account-management-dashboard",text:(0,s.localize)("To continue trading, you must also submit a proof of address.")},!i&&t().createElement(t().Fragment,null,t().createElement(c.Z,null),a)):t().createElement(p.default,{message:l,icon:d?t().createElement(o.Icon,{icon:"IcPoaVerifiedDashboard",height:128,width:237}):t().createElement(o.Icon,{icon:"IcPoaVerified",size:128}),className:"account-management-dashboard"},!i&&a)};d.propTypes={has_poa:r.PropTypes.bool,is_description_enabled:r.PropTypes.bool,redirect_button:r.PropTypes.oneOfType([r.PropTypes.object,r.PropTypes.bool])};const l=d})(),i.default})()}));