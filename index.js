// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,r=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol.toStringTag:"",i=n&&"symbol"==typeof Symbol.toStringTag?function(t){var n,i,f,l,y;if(null==t)return o.call(t);i=t[e],y=e,n=null!=(l=t)&&r.call(l,y);try{t[e]=void 0}catch(n){return o.call(t)}return f=o.call(t),n?t[e]=i:delete t[e],f}:function(t){return o.call(t)},f="function"==typeof Uint8Array,l="function"==typeof Uint8Array?Uint8Array:null,y="function"==typeof Uint8Array?Uint8Array:void 0;return t=function(){var t,n,o;if("function"!=typeof l)return!1;try{n=new l(n=[1,3.14,-3.14,256,257]),o=n,t=(f&&o instanceof Uint8Array||"[object Uint8Array]"===i(o))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?y:function(){throw new Error(function(){var t,n=arguments,o="https://stdlib.io/e/"+n[0]+"?";for(t=1;t<n.length;t++)o+="&arg[]="+encodeURIComponent(n[t]);return o}("01E00"))},t},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).Uint8Array=n();
//# sourceMappingURL=index.js.map
