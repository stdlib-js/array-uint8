// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var r=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol.toStringTag:"";var e=t&&"symbol"==typeof Symbol.toStringTag?function(t){var e,a,i,l,y;if(null==t)return r.call(t);a=t[o],y=o,e=null!=(l=t)&&n.call(l,y);try{t[o]=void 0}catch(n){return r.call(t)}return i=r.call(t),e?t[o]=a:delete t[o],i}:function(t){return r.call(t)},a="function"==typeof Uint8Array;var i="function"==typeof Uint8Array?Uint8Array:null;var l="function"==typeof Uint8Array?Uint8Array:void 0;var y=function(){var t,r,n;if("function"!=typeof i)return!1;try{r=new i(r=[1,3.14,-3.14,256,257]),n=r,t=(a&&n instanceof Uint8Array||"[object Uint8Array]"===e(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?l:function(){throw new Error(function(){var t,r=arguments,n="https://stdlib.io/e/"+r[0]+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}("01E00"))};export{y as default};
//# sourceMappingURL=mod.js.map
