// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).Uint8Array=n()}(this,(function(){"use strict";var t=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var n=function(){return t&&"symbol"==typeof Symbol.toStringTag},r=Object.prototype.toString,o=r;var e=function(t){return o.call(t)},i=Object.prototype.hasOwnProperty;var f=function(t,n){return null!=t&&i.call(t,n)},u="function"==typeof Symbol?Symbol.toStringTag:"",c=f,l=u,y=r;var a=e,p=function(t){var n,r,o;if(null==t)return y.call(t);r=t[l],n=c(t,l);try{t[l]=void 0}catch(n){return y.call(t)}return o=y.call(t),n?t[l]=r:delete t[l],o},d=n()?p:a,b="function"==typeof Uint8Array;var m="function"==typeof Uint8Array?Uint8Array:null,s=function(t){return b&&t instanceof Uint8Array||"[object Uint8Array]"===d(t)},v=m;var A="function"==typeof Uint8Array?Uint8Array:void 0,S=function(){throw new Error("not implemented")};return function(){var t,n;if("function"!=typeof v)return!1;try{n=new v(n=[1,3.14,-3.14,256,257]),t=s(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?A:S}));
//# sourceMappingURL=bundle.js.map
