!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequire4c75;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequire4c75=o),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){return a.default(e)||u.default(e,t)||f.default(e,t)||l.default()};var a=c(o("8slrw")),u=c(o("7AJDX")),l=c(o("ifqQW")),f=c(o("auk6i"));function c(e){return e&&e.__esModule?e:{default:e}}var s,d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var v="Expected a function",m=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,b=/^0o[0-7]+$/i,g=parseInt,_="object"==typeof t&&t&&t.Object===Object&&t,x="object"==typeof self&&self&&self.Object===Object&&self,h=_||x||Function("return this")(),O=Object.prototype.toString,j=Math.max,w=Math.min,S=function(){return h.Date.now()};function k(e,t,r){var n,o,i,a,u,l,f=0,c=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError(v);function m(t){var r=n,i=o;return n=o=void 0,f=t,a=e.apply(i,r)}function p(e){return f=e,u=setTimeout(b,t),c?m(e):a}function y(e){var r=e-l;return void 0===l||r>=t||r<0||s&&e-f>=i}function b(){var e=S();if(y(e))return g(e);u=setTimeout(b,function(e){var r=t-(e-l);return s?w(r,i-(e-f)):r}(e))}function g(e){return u=void 0,d&&n?m(e):(n=o=void 0,a)}function _(){var e=S(),r=y(e);if(n=arguments,o=this,l=e,r){if(void 0===u)return p(l);if(s)return u=setTimeout(b,t),m(l)}return void 0===u&&(u=setTimeout(b,t)),a}return t=A(t)||0,M(r)&&(c=!!r.leading,i=(s="maxWait"in r)?j(A(r.maxWait)||0,t):i,d="trailing"in r?!!r.trailing:d),_.cancel=function(){void 0!==u&&clearTimeout(u),f=0,n=l=o=u=void 0},_.flush=function(){return void 0===u?a:g(S())},_}function M(t){var r=void 0===t?"undefined":e(d)(t);return!!t&&("object"==r||"function"==r)}function A(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(d)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==O.call(t)}(t))return NaN;if(M(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=M(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(m,"");var n=y.test(t);return n||b.test(t)?g(t.slice(2),n?2:8):p.test(t)?NaN:+t}s=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError(v);return M(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),k(e,t,{leading:n,maxWait:t,trailing:o})};var E=document.querySelector(".feedback-form"),T=E.children,N=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,I=!0,P=!1,q=void 0;try{for(var D,$=T[Symbol.iterator]();!(I=(D=$.next()).done);I=!0){var C=D.value;null!=C.firstElementChild?C.firstElementChild.classList.add("feedback-form__".concat(C.firstElementChild.getAttribute("name"))):C.classList.add("feedback-form__".concat(C.getAttribute("type")))}}catch(e){P=!0,q=e}finally{try{I||null==$.return||$.return()}finally{if(P)throw q}}var L=e(i)(E.querySelectorAll(".feedback-form__email, .feedback-form__message, .feedback-form__submit"),3),W=L[0],J=L[1],U=L[2],F={email:"damanosalvag@gmail.com",message:"test message"},Q=localStorage.getItem("feedback-form-state"),R=JSON.parse(Q);null!=Q&&(W.value=R.email,J.value=R.message);E.addEventListener("input",e(s)((function(){F={email:W.value,message:J.value},localStorage.setItem("feedback-form-state",JSON.stringify(F))}),500)),U.addEventListener("click",(function(e){N.test(W.value)?(e.preventDefault(),console.log(F),W.value="",J.value="",localStorage.removeItem("feedback-form-state")):alert("El correo no tiene formato adecuado")}))}();
//# sourceMappingURL=03-feedback.23d90cd8.js.map