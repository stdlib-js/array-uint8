// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var r=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol:void 0,e="function"==typeof o?o.toStringTag:"";var a=t&&"symbol"==typeof Symbol.toStringTag?function(t){var o,a,i,y,f;if(null==t)return r.call(t);a=t[e],f=e,o=null!=(y=t)&&n.call(y,f);try{t[e]=void 0}catch(n){return r.call(t)}return i=r.call(t),o?t[e]=a:delete t[e],i}:function(t){return r.call(t)},i="function"==typeof Uint8Array;var y="function"==typeof Uint8Array?Uint8Array:null;var f="function"==typeof Uint8Array?Uint8Array:void 0;var l=function(){var t,r,n;if("function"!=typeof y)return!1;try{r=new y(r=[1,3.14,-3.14,256,257]),n=r,t=(i&&n instanceof Uint8Array||"[object Uint8Array]"===a(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?f:function(){throw new Error(function(){var t,r=arguments,n="https://stdlib.io/e/"+r[0]+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}("02T00,Cw"))};export{l as default};
//# sourceMappingURL=mod.js.map
