"use strict";(self.webpackChunk_deriv_trader=self.webpackChunk_deriv_trader||[]).push([["error-component"],{"./App/Components/Elements/Errors/index.js":(e,r,o)=>{o.r(r),o.d(r,{default:()=>d});var t=o("../../../node_modules/prop-types/index.js"),n=o.n(t),s=o("react"),i=o("@deriv/components"),a=o("@deriv/shared"),l=o("@deriv/translations"),c=function(e){var r=e.header,o=e.message,t=e.is_dialog,n=e.redirect_label,c=e.redirectOnClick,d=e.should_show_refresh,u=void 0===d||d?(0,l.localize)("Please refresh this page to continue."):"";return t?s.createElement(i.Dialog,{title:r||(0,l.localize)("There was an error"),is_visible:!0,confirm_button_text:n||(0,l.localize)("Ok"),onConfirm:c||function(){return location.reload()}},o||(0,l.localize)("Sorry, an error occured while processing your request.")):s.createElement(i.PageError,{header:r||(0,l.localize)("Something’s not right"),messages:o?[o,u]:[(0,l.localize)("Sorry, an error occured while processing your request."),u],redirect_urls:[a.routes.trade],redirect_labels:[n||(0,l.localize)("Refresh")],buttonOnClick:c||function(){return location.reload()}})};c.propTypes={message:n().oneOfType([n().node,n().string,n().object]),type:n().string};const d=c}}]);