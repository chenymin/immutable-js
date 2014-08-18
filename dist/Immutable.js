/**
 *  Copyright (c) 2014, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */
function t(){function t(t,e,n,r){var i;if(r){var s=r.prototype;i=F.create(s)}else i=t.prototype;return F.keys(e).forEach(function(t){i[t]=e[t]}),F.keys(n).forEach(function(e){t[e]=n[e]}),i.constructor=t,t.prototype=i,t}function e(t,e,n,r){return F.getPrototypeOf(e)[n].apply(t,r)}function n(t,n,r){e(t,n,"constructor",r)}function r(){return Object.create(T)}function i(t){var e=Object.create(Z);return e.__reversedIndices=t?t.__reversedIndices:!1,e}function s(t,e,n,r){var i=t.get?t.get(e[r],ue):ue;return i===ue?n:++r===e.length?i:s(i,e,n,r)}function u(t,e,n){return(0===t||null!=n&&-n>=t)&&(null==e||null!=n&&e>=n)}function h(t,e){return 0>t?Math.max(0,e+t):e?Math.min(e,t):t}function a(t,e){return null==t?e:0>t?Math.max(0,e+t):e?Math.min(e,t):t}function o(t){return t}function c(t,e){return[e,t]}function f(){return!0}function l(){return this}function _(t){return(t||0)+1}function v(t,e,n,r,i){var s=t.__makeSequence();return s.__iterateUncached=function(s,u,h){var a=0,o=t.__iterate(function(t,i,u){if(e.call(n,t,i,u)){if(s(t,r?i:a,u)===!1)return!1;a++}},u,h);return i?o:a},s}function g(t){return function(){return!t.apply(this,arguments)}}function p(t){return"string"==typeof t?JSON.stringify(t):t}function m(t,e){for(var n="";e;)1&e&&(n+=t),(e>>=1)&&(t+=t);return n}function d(t,e){return t>e?1:e>t?-1:0}function y(t){I(1/0!==t,"Cannot perform this action with an infinite sequence.")}function w(t,e){return t===e?0!==t||0!==e||1/t===1/e:t!==t?e!==e:t instanceof H?t.equals(e):!1}function I(t,e){if(!t)throw Error(e)}function O(t,e,n){var r=t._rootData.updateIn(t._keyPath,e),i=t._keyPath||[];return t._onChange&&t._onChange.call(void 0,r,t._rootData,n?i.concat(n):i),new ee(r,t._keyPath,t._onChange)}function D(){}function b(t){return me.value=t,me}function M(t,e,n){var r=Object.create(oe);return r.length=t,r._root=e,r.__ownerID=n,r}function k(t,e,n,r,i){if(n.hash===r)return new le(t,r,[n.entry,i]);var s=n.hash>>>e&se,u=r>>>e&se,h=[];return s===u?h[s]=k(t,e+re,n,r,i):(h[s]=n,h[u]=new ve(t,r,i)),new ce(t,1<<s|1<<u,h)}function S(t,e,n){for(var r=[],i=0;n.length>i;i++){var s=n[i];
s&&r.push(Array.isArray(s)?H(s).fromEntries():H(s))}return E(t,e,r)}function x(t){return function(e,n){return e&&e.mergeDeepWith?e.mergeDeepWith(t,n):t?t(e,n):n}}function E(t,e,n){return 0===n.length?t:t.withMutations(function(t){for(var r=e?function(n,r){var i=t.get(r,ue);t.set(r,i===ue?n:e(i,n))}:function(e,n){t.set(n,e)},i=0;n.length>i;i++)n[i].forEach(r)})}function C(t,e,n,r){var i=e[r],s=t.get?t.get(i,ue):ue;return s===ue&&(s=he.empty()),I(t.set,"updateIn with invalid keyPath"),t.set(i,++r===e.length?n(s):C(s,e,n,r))}function A(t){if(!t)return 0;if(t===!0)return 1;if("function"==typeof t.hashCode)return t.hashCode();var e=typeof t;if("number"===e)return Math.floor(t)%2147483647;if("string"===e)return q(t);throw Error("Unable to hash: "+t)}function q(t){var e=Ie[t];if(null==e){e=0;for(var n=0;t.length>n;n++)e=(31*e+t.charCodeAt(n))%de;we===ye&&(we=0,Ie={}),we++,Ie[t]=e}return e}function j(t,e,n,r,i,s){var u=Object.create(be);return u.length=e-t,u._origin=t,u._size=e,u._level=n,u._root=r,u._tail=i,u.__ownerID=s,u}function P(t,e){if(e>=W(t._size))return t._tail;if(1<<t._level+re>e){for(var n=t._root,r=t._level;n&&r>0;)n=n.array[e>>>r&se],r-=re;return n}}function U(t,e,n){var r=t.__ownerID||new D,i=t._origin,s=t._size,u=i+e,h=null==n?s:0>n?s+n:i+n;if(u===i&&h===s)return t;if(u>=h)return t.clear();for(var a=t._level,o=t._root,c=0;0>u+c;)o=new Me(o.array.length?[,o]:[],r),a+=re,c+=1<<a;c&&(u+=c,i+=c,h+=c,s+=c);for(var f=W(s),l=W(h);l>=1<<a+re;)o=new Me(o.array.length?[o]:[],r),a+=re;var _=t._tail,v=f>l?P(t,h-1):l>f?new Me([],r):_;if(l>f&&s>u&&_.array.length){o=o.ensureOwner(r);for(var g=o,p=a;p>re;p-=re){var m=f>>>p&se;g=g.array[m]=g.array[m]?g.array[m].ensureOwner(r):new Me([],r)}g.array[f>>>re&se]=_}if(s>h&&(v=v.removeAfter(r,0,h)),u>=l)u-=l,h-=l,a=re,o=Ee,v=v.removeBefore(r,0,u);else if(u>i||f>l){var d,y;c=0;do d=u>>>a&se,y=l-1>>>a&se,d===y&&(d&&(c+=(1<<a)*d),a-=re,o=o&&o.array[d]);while(o&&d===y);o&&u>i&&(o=o.removeBefore(r,a,u-c)),o&&f>l&&(o=o.removeAfter(r,a,l-c)),c&&(u-=c,h-=c),o=o||Ee}return t.__ownerID?(t.length=h-u,t._origin=u,t._size=h,t._level=a,t._root=o,t._tail=v,t):j(u,h,a,o,v)
}function z(t,e,n){for(var r=[],i=0;n.length>i;i++){var s=n[i];s&&r.push(s.forEach?s:H(s))}var u=Math.max.apply(null,r.map(function(t){return t.length||0}));return u>t.length&&(t=t.setLength(u)),E(t,e,r)}function R(t,e){return I(t>=0,"Index out of bounds"),t+e}function W(t){return ie>t?0:t-1>>>re<<re}function J(t,e){var n=Object.create(qe);return n.length=t?t.length:0,n._map=t,n.__ownerID=e,n}function B(t,e,n){var r=Object.create(Pe.prototype);return r.length=t?t.length:0,r._map=t,r._vector=e,r.__ownerID=n,r}function L(t,e,n){var r=Object.create(Object.getPrototypeOf(t));return r._map=e,r.__ownerID=n,r}function V(t,e){return e?K(e,t,"",{"":t}):N(t)}function K(t,e,n,r){return e&&(Array.isArray(e)||e.constructor===Object)?t.call(r,n,H(e).map(function(n,r){return K(t,n,r,e)})):e}function N(t){if(t){if(Array.isArray(t))return H(t).map(N).toVector();if(t.constructor===Object)return H(t).map(N).toMap()}return t}var F=Object,G={};G.createClass=t,G.superCall=e,G.defaultSuperCall=n;var H=function(t){return Q.from(1===arguments.length?t:Array.prototype.slice.call(arguments))},Q=H;G.createClass(H,{toString:function(){return this.__toString("Seq {","}")},__toString:function(t,e){return 0===this.length?t+e:t+" "+this.map(this.__toStringMapper).join(", ")+" "+e},__toStringMapper:function(t,e){return e+": "+p(t)},toJS:function(){return this.map(function(t){return t instanceof Q?t.toJS():t}).__toJS()},toArray:function(){y(this.length);var t=Array(this.length||0);return this.values().forEach(function(e,n){t[n]=e}),t},toObject:function(){y(this.length);var t={};return this.forEach(function(e,n){t[n]=e}),t},toVector:function(){return y(this.length),Oe.from(this)},toMap:function(){return y(this.length),he.from(this)},toOrderedMap:function(){return y(this.length),Pe.from(this)},toSet:function(){return y(this.length),Ce.from(this)},equals:function(t){if(this===t)return!0;if(!(t instanceof Q))return!1;if(null!=this.length&&null!=t.length){if(this.length!==t.length)return!1;if(0===this.length&&0===t.length)return!0}return this.__deepEquals(t)
},__deepEquals:function(t){var e=this.cacheResult().entries().toArray(),n=0;return t.every(function(t,r){var i=e[n++];return w(r,i[0])&&w(t,i[1])})},join:function(t){t=t||",";var e="",n=!0;return this.forEach(function(r){n?(n=!1,e+=r):e+=t+r}),e},count:function(t,e){return t?this.filter(t,e).count():(null==this.length&&(this.length=this.forEach(f)),this.length)},countBy:function(t){var e=this;return Pe.empty().withMutations(function(n){e.forEach(function(e,r,i){n.update(t(e,r,i),_)})})},concat:function(){for(var t=[],e=0;arguments.length>e;e++)t[e]=arguments[e];var n=[this].concat(t.map(function(t){return Q(t)})),r=this.__makeSequence();return r.length=n.reduce(function(t,e){return null!=t&&null!=e.length?t+e.length:void 0},0),r.__iterateUncached=function(t,e){for(var r,i=0,s=n.length-1,u=0;s>=u&&!r;u++){var h=n[e?s-u:u];i+=h.__iterate(function(e,n,i){return t(e,n,i)===!1?(r=!0,!1):void 0},e)}return i},r},reverse:function(){var t=this,e=t.__makeSequence();return e.length=t.length,e.__iterateUncached=function(e,n){return t.__iterate(e,!n)},e.reverse=function(){return t},e},keys:function(){return this.flip().values()},values:function(){var t=this,e=i(t);return e.length=t.length,e.values=l,e.__iterateUncached=function(e,n,r){if(r&&null==this.length)return this.cacheResult().__iterate(e,n,r);var i,s=0;return r?(s=this.length-1,i=function(t,n,r){return e(t,s--,r)!==!1}):i=function(t,n,r){return e(t,s++,r)!==!1},t.__iterate(i,n),r?this.length:s},e},entries:function(){var t=this;if(t._cache)return Q(t._cache);var e=t.map(c).values();return e.fromEntries=function(){return t},e},forEach:function(t,e){return this.__iterate(e?t.bind(e):t)},reduce:function(t,e,n){var r=e;return this.forEach(function(e,i,s){r=t.call(n,r,e,i,s)}),r},reduceRight:function(t,e,n){return this.reverse(!0).reduce(t,e,n)},every:function(t,e){var n=!0;return this.forEach(function(r,i,s){return t.call(e,r,i,s)?void 0:(n=!1,!1)}),n},some:function(t,e){return!this.every(g(t),e)},first:function(){return this.find(f)},last:function(){return this.findLast(f)
},rest:function(){return this.slice(1)},butLast:function(){return this.slice(0,-1)},has:function(t){return this.get(t,ue)!==ue},get:function(t,e){return this.find(function(e,n){return w(n,t)},null,e)},getIn:function(t,e){return t&&0!==t.length?s(this,t,e,0):this},contains:function(t){return this.find(function(e){return w(e,t)},null,ue)!==ue},find:function(t,e,n){var r=n;return this.forEach(function(n,i,s){return t.call(e,n,i,s)?(r=n,!1):void 0}),r},findKey:function(t,e){var n;return this.forEach(function(r,i,s){return t.call(e,r,i,s)?(n=i,!1):void 0}),n},findLast:function(t,e,n){return this.reverse(!0).find(t,e,n)},findLastKey:function(t,e){return this.reverse(!0).findKey(t,e)},flip:function(){var t=this,e=r();return e.length=t.length,e.flip=function(){return t},e.__iterateUncached=function(e,n){return t.__iterate(function(t,n,r){return e(n,t,r)!==!1},n)},e},map:function(t,e){var n=this,r=n.__makeSequence();return r.length=n.length,r.__iterateUncached=function(r,i){return n.__iterate(function(n,i,s){return r(t.call(e,n,i,s),i,s)!==!1},i)},r},mapKeys:function(t,e){var n=this,r=n.__makeSequence();return r.length=n.length,r.__iterateUncached=function(r,i){return n.__iterate(function(n,i,s){return r(n,t.call(e,i,n,s),s)!==!1},i)},r},filter:function(t,e){return v(this,t,e,!0,!1)},slice:function(t,e){if(u(t,e,this.length))return this;var n=h(t,this.length),r=a(e,this.length);if(n!==n||r!==r)return this.entries().slice(t,e).fromEntries();var i=0===n?this:this.skip(n);return null==r||r===this.length?i:i.take(r-n)},take:function(t){var e=0,n=this.takeWhile(function(){return e++<t});return n.length=this.length&&Math.min(this.length,t),n},takeLast:function(t,e){return this.reverse(e).take(t).reverse(e)},takeWhile:function(t,e){var n=this,r=n.__makeSequence();return r.__iterateUncached=function(r,i,s){if(i)return this.cacheResult().__iterate(r,i,s);var u=0;return n.__iterate(function(n,i,s){return t.call(e,n,i,s)&&r(n,i,s)!==!1?void u++:!1},i,s),u},r},takeUntil:function(t,e,n){return this.takeWhile(g(t),e,n)},skip:function(t,e){if(0===t)return this;
var n=0,r=this.skipWhile(function(){return n++<t},null,e);return r.length=this.length&&Math.max(0,this.length-t),r},skipLast:function(t,e){return this.reverse(e).skip(t).reverse(e)},skipWhile:function(t,e){var n=this,r=n.__makeSequence();return r.__iterateUncached=function(r,i,s){if(i)return this.cacheResult().__iterate(r,i,s);var u=!0,h=0;return n.__iterate(function(n,i,s){if(!u||!(u=t.call(e,n,i,s))){if(r(n,i,s)===!1)return!1;h++}},i,s),h},r},skipUntil:function(t,e,n){return this.skipWhile(g(t),e,n)},groupBy:function(t){var e=this,n=Pe.empty().withMutations(function(n){e.forEach(function(e,r,i){var s=t(e,r,i),u=n.get(s,ue);u===ue&&(u=[],n.set(s,u)),u.push([r,e])})});return n.map(function(t){return Q(t).fromEntries()})},sort:function(t,e){return this.sortBy(o,t,e)},sortBy:function(t,e){e=e||d;var n=this;return Q(this.entries().entries().toArray().sort(function(r,i){return e(t(r[1][1],r[1][0],n),t(i[1][1],i[1][0],n))||r[0]-i[0]})).fromEntries().values().fromEntries()},cacheResult:function(){return!this._cache&&this.__iterateUncached&&(y(this.length),this._cache=this.entries().toArray(),null==this.length&&(this.length=this._cache.length)),this},__iterate:function(t,e,n){if(!this._cache)return this.__iterateUncached(t,e,n);var r=this.length-1,i=this._cache,s=this;if(e)for(var u=i.length-1;u>=0;u--){var h=i[u];if(t(h[1],n?h[0]:r-h[0],s)===!1)break}else i.every(n?function(e){return t(e[1],r-e[0],s)!==!1}:function(e){return t(e[1],e[0],s)!==!1});return this.length},__makeSequence:function(){return r()}},{from:function(t){if(t instanceof Q)return t;if(!Array.isArray(t)){if(t&&t.constructor===Object)return new $(t);t=[t]}return new te(t)}});var T=H.prototype;T.toJSON=T.toJS,T.__toJS=T.toObject,T.inspect=T.toSource=function(){return""+this};var X=function(){G.defaultSuperCall(this,Y.prototype,arguments)},Y=X;G.createClass(X,{toString:function(){return this.__toString("Seq [","]")},toArray:function(){y(this.length);var t=Array(this.length||0);return t.length=this.forEach(function(e,n){t[n]=e}),t},fromEntries:function(){var t=this,e=r();
return e.length=t.length,e.entries=function(){return t},e.__iterateUncached=function(e,n,r){return t.__iterate(function(t,n,r){return e(t[1],t[0],r)},n,r)},e},join:function(t){t=t||",";var e="",n=0;return this.forEach(function(r,i){var s=i-n;n=i,e+=(1===s?t:m(t,s))+r}),this.length&&this.length-1>n&&(e+=m(t,this.length-1-n)),e},concat:function(){for(var t=[],e=0;arguments.length>e;e++)t[e]=arguments[e];var n=[this].concat(t).map(function(t){return H(t)}),r=this.__makeSequence();return r.length=n.reduce(function(t,e){return null!=t&&null!=e.length?t+e.length:void 0},0),r.__iterateUncached=function(t,e,r){if(r&&!this.length)return this.cacheResult().__iterate(t,e,r);for(var i,s=0,u=r&&this.length-1,h=n.length-1,a=0;h>=a&&!i;a++){var o=n[e?h-a:a];o instanceof Y||(o=o.values()),s+=o.__iterate(function(e,n,h){return n+=s,t(e,r?u-n:n,h)===!1?(i=!0,!1):void 0},e)}return s},r},reverse:function(t){var e=this,n=e.__makeSequence();return n.length=e.length,n.__reversedIndices=!!(t^e.__reversedIndices),n.__iterateUncached=function(n,r,i){return e.__iterate(n,!r,i^t)},n.reverse=function(n){return t===n?e:Z.reverse.call(this,n)},n},values:function(){var t=G.superCall(this,Y.prototype,"values",[]);return t.length=void 0,t},filter:function(t,e,n){var r=v(this,t,e,n,n);return n&&(r.length=this.length),r},indexOf:function(t){return this.findIndex(function(e){return w(e,t)})},lastIndexOf:function(t){return this.reverse(!0).indexOf(t)},findIndex:function(t,e){var n=this.findKey(t,e);return null==n?-1:n},findLastIndex:function(t,e){return this.reverse(!0).findIndex(t,e)},slice:function(t,e,n){var r=this;if(u(t,e,r.length))return r;var i=r.__makeSequence(),s=h(t,r.length),o=a(e,r.length);return i.length=r.length&&(n?r.length:o-s),i.__reversedIndices=r.__reversedIndices,i.__iterateUncached=function(i,u,c){if(u)return this.cacheResult().__iterate(i,u,c);var f=this.__reversedIndices^c;if(s!==s||o!==o||f&&null==r.length){var l=r.count();s=h(t,l),o=a(e,l)}var _=f?r.length-o:s,v=f?r.length-s:o,g=r.__iterate(function(t,e,r){return f?null!=v&&e>=v||e>=_&&i(t,n?e:e-_,r)!==!1:_>e||(null==v||v>e)&&i(t,n?e:e-_,r)!==!1
},u,c);return null!=this.length?this.length:n?g:Math.max(0,g-_)},i},splice:function(t,e){for(var n=[],r=2;arguments.length>r;r++)n[r-2]=arguments[r];return 0===e&&0===n.length?this:this.slice(0,t).concat(n,this.slice(t+e))},takeWhile:function(t,e,n){var r=this,i=r.__makeSequence();return i.__iterateUncached=function(s,u,h){if(u)return this.cacheResult().__iterate(s,u,h);var a=0,o=!0,c=r.__iterate(function(n,r,i){return t.call(e,n,r,i)&&s(n,r,i)!==!1?void(a=r):(o=!1,!1)},u,h);return n?i.length:o?c:a+1},n&&(i.length=this.length),i},skipWhile:function(t,e,n){var r=this,i=r.__makeSequence();return n&&(i.length=this.length),i.__iterateUncached=function(i,s,u){if(s)return this.cacheResult().__iterate(i,s,u);var h=r.__reversedIndices^u,a=!0,o=0,c=r.__iterate(function(r,s,h){return a&&(a=t.call(e,r,s,h),a||(o=s)),a||i(r,u||n?s:s-o,h)!==!1},s,u);return n?c:h?o+1:c-o},i},groupBy:function(t,e,n){var r=this,i=Pe.empty().withMutations(function(e){r.forEach(function(i,s,u){var h=t(i,s,u),a=e.get(h,ue);a===ue&&(a=Array(n?r.length:0),e.set(h,a)),n?a[s]=i:a.push(i)})});return i.map(function(t){return H(t)})},sortBy:function(t,e,n){var r=G.superCall(this,Y.prototype,"sortBy",[t,e]);return n||(r=r.values()),r.length=this.length,r},__makeSequence:function(){return i(this)}},{},H);var Z=X.prototype;Z.__toJS=Z.toArray,Z.__toStringMapper=p;var $=function(t){var e=Object.keys(t);this._object=t,this._keys=e,this.length=e.length};G.createClass($,{toObject:function(){return this._object},get:function(t,e){return void 0===e||this.has(t)?this._object[t]:e},has:function(t){return this._object.hasOwnProperty(t)},__iterate:function(t,e){for(var n=this._object,r=this._keys,i=r.length-1,s=0;i>=s;s++){var u=e?i-s:s;if(t(n[r[u]],r[u],n)===!1)break}return s}},{},H);var te=function(t){this._array=t,this.length=t.length};G.createClass(te,{toArray:function(){return this._array},__iterate:function(t,e,n){var r=this._array,i=r.length-1,s=-1;if(e){for(var u=i;u>=0;u--){if(r.hasOwnProperty(u)&&t(r[u],n?u:i-u,r)===!1)return s+1;s=u}return r.length}var h=r.every(function(e,u){return t(e,n?i-u:u,r)===!1?!1:(s=u,!0)
});return h?r.length:s+1}},{},X),te.prototype.get=$.prototype.get,te.prototype.has=$.prototype.has;var ee=function(t,e,n){this._rootData=t,this._keyPath=e,this._onChange=n},ne=ee;G.createClass(ee,{get:function(t,e){var n=this._rootData.getIn(this._keyPath,he.empty());return t?n.get(t,e):n},set:function(t,e){return O(this,function(n){return n.set(t,e)},t)},"delete":function(t){return O(this,function(e){return e.delete(t)},t)},update:function(t,e){var n;return"function"==typeof t?(n=t,t=void 0):n=function(n){return n.update(t,e)},O(this,n,t)},cursor:function(t){return t&&!Array.isArray(t)&&(t=[t]),t&&0!==t.length?new ne(this._rootData,this._keyPath?this._keyPath.concat(t):t,this._onChange):this}},{});var re=5,ie=1<<re,se=ie-1,ue={},he=function(t){return t&&t.constructor===ae?t:t&&0!==t.length?ae.empty().merge(t):ae.empty()},ae=he;G.createClass(he,{toString:function(){return this.__toString("Map {","}")},get:function(t,e){return null==t||null==this._root?e:this._root.get(0,A(t),t,e)},set:function(t,e){if(null==t)return this;var n,r=this.length;if(this._root){var i=b();n=this._root.update(this.__ownerID,0,A(t),t,e,i),i.value&&r++}else r++,n=new ve(this.__ownerID,A(t),[t,e]);return this.__ownerID?(this.length=r,this._root=n,this):n===this._root?this:M(r,n)},"delete":function(t){if(null==t||null==this._root)return this;var e=this.__ownerID&&b(),n=this._root.update(this.__ownerID,0,A(t),t,ue,e);return this.__ownerID?(this._root=n,e.value&&this.length--,this):n?n===this._root?this:M(this.length-1,n):ae.empty()},update:function(t,e){return this.set(t,e(this.get(t)))},clear:function(){return this.__ownerID?(this.length=0,this._root=null,this):ae.empty()},merge:function(){return S(this,null,arguments)},mergeWith:function(t){for(var e=[],n=1;arguments.length>n;n++)e[n-1]=arguments[n];return S(this,t,e)},mergeDeep:function(){return S(this,x(null),arguments)},mergeDeepWith:function(t){for(var e=[],n=1;arguments.length>n;n++)e[n-1]=arguments[n];return S(this,x(t),e)},updateIn:function(t,e){return t&&0!==t.length?C(this,t,e,0):e(this)
},cursor:function(t,e){return e||"function"!=typeof t||(e=t,t=null),t&&!Array.isArray(t)&&(t=[t]),new ee(this,t,e)},withMutations:function(t){var e=this.asMutable();return t(e),e.__ensureOwner(this.__ownerID)},asMutable:function(){return this.__ownerID?this:this.__ensureOwner(new D)},asImmutable:function(){return this.__ensureOwner()},__iterate:function(t,e){return this._root?this._root.iterate(this,t,e):0},__deepEqual:function(t){var e=this;return t.every(function(t,n){return w(e.get(n,ue),t)})},__ensureOwner:function(t){return t===this.__ownerID?this:t?M(this.length,this._root,t):(this.__ownerID=t,this)}},{empty:function(){return pe||(pe=M(0))}},H);var oe=he.prototype;he.from=he;var ce=function(t,e,n){this.ownerID=t,this.bitmap=e,this.nodes=n},fe=ce;G.createClass(ce,{get:function(t,e,n,r){var i=e>>>t&se;if(0===(this.bitmap&1<<i))return r;var s=this.nodes[i];return s.get(t+re,e,n,r)},update:function(t,e,n,r,i,s){var u,h=n>>>e&se,a=1<<h,o=i===ue,c=0!==(this.bitmap&a);if(!c)return o?this:(s&&(s.value=!0),u=this.ensureOwner(t),u.nodes[h]=new ve(t,n,[r,i]),u.bitmap|=a,u);var f=this.nodes[h],l=f.update(t,e+re,n,r,i,s);return l===f?this:l||this.bitmap!==a?(u=this.ensureOwner(t),u.nodes[h]=l,l||(u.bitmap^=a),u):null},ensureOwner:function(t){return t&&t===this.ownerID?this:new fe(t,this.bitmap,this.nodes.slice())},iterate:function(t,e,n){for(var r=this.nodes,i=r.length-1,s=0;i>=s;s++){var u=n?i-s:s,h=r[u];if(h&&!h.iterate(t,e,n))return!1}return!0}},{});var le=function(t,e,n){this.ownerID=t,this.hash=e,this.entries=n},_e=le;G.createClass(le,{get:function(t,e,n,r){for(var i=this.entries,s=0,u=i.length;u>s;s++)if(n===i[s][0])return i[s][1];return r},update:function(t,e,n,r,i,s){var u,h=i===ue;if(n!==this.hash)return s&&(s.value=!0),k(t,e,this,n,[r,i]);for(var a=this.entries,o=0,c=a.length;c>o;o++)if(r===a[o][0])return h?(s&&(s.value=!0),2===c?new ve(t,this.hash,a[o]):(u=this.ensureOwner(t),o===c-1?u.entries.pop():u.entries[o]=u.entries.pop(),u)):(u=this.ensureOwner(t),u.entries[o]=[r,i],u);return h?this:(s&&(s.value=!0),u=this.ensureOwner(t),u.push([r,i]),u)
},ensureOwner:function(t){return t&&t===this.ownerID?this:new _e(t,this.hash,this.entries.slice())},iterate:function(t,e,n){for(var r=this.entries,i=r.length-1,s=0;i>=s;s++){var u=n?i-s:s;if(e(r[u][1],r[u][0],t)===!1)return!1}return!0}},{});var ve=function(t,e,n){this.ownerID=t,this.hash=e,this.entry=n},ge=ve;G.createClass(ve,{get:function(t,e,n,r){return n===this.entry[0]?this.entry[1]:r},update:function(t,e,n,r,i,s){var u=r===this.entry[0];return i===ue?(u&&s&&(s.value=!0),u?null:this):u?i===this.entry[1]?this:t&&t===this.ownerID?(this.entry[1]=i,this):new ge(t,n,[r,i]):(s&&(s.value=!0),k(t,e,this,n,[r,i]))},iterate:function(t,e){return e(this.entry[1],this.entry[0],t)!==!1}},{});var pe,me={value:!1},de=4294967296,ye=255,we=0,Ie={},Oe=function(){for(var t=[],e=0;arguments.length>e;e++)t[e]=arguments[e];return De.from(t)},De=Oe;G.createClass(Oe,{toString:function(){return this.__toString("Vector [","]")},get:function(t,e){if(t=R(t,this._origin),t>=this._size)return e;var n=P(this,t),r=t&se;return n&&(void 0===e||n.array.hasOwnProperty(r))?n.array[r]:e},first:function(){return this.get(0)},last:function(){return this.get(this.length?this.length-1:0)},set:function(t,e){var n=W(this._size);if(t>=this.length)return this.withMutations(function(n){return U(n,0,t+1).set(t,e)});if(this.get(t,ue)===e)return this;if(t=R(t,this._origin),t>=n){var r=this._tail.ensureOwner(this.__ownerID);r.array[t&se]=e;var i=t>=this._size?t+1:this._size;return this.__ownerID?(this.length=i-this._origin,this._size=i,this._tail=r,this):j(this._origin,i,this._level,this._root,r)}for(var s=this._root.ensureOwner(this.__ownerID),u=s,h=this._level;h>0;h-=re){var a=t>>>h&se;u=u.array[a]=u.array[a]?u.array[a].ensureOwner(this.__ownerID):new Me([],this.__ownerID)}return u.array[t&se]=e,this.__ownerID?(this._root=s,this):j(this._origin,this._size,this._level,s,this._tail)},"delete":function(t){if(!this.has(t))return this;var e=W(this._size);if(t=R(t,this._origin),t>=e){var n=this._tail.ensureOwner(this.__ownerID);return delete n.array[t&se],this.__ownerID?(this._tail=n,this):j(this._origin,this._size,this._level,this._root,n)
}for(var r=this._root.ensureOwner(this.__ownerID),i=r,s=this._level;s>0;s-=re){var u=t>>>s&se;i=i.array[u]=i.array[u].ensureOwner(this.__ownerID)}return delete i.array[t&se],this.__ownerID?(this._root=r,this):j(this._origin,this._size,this._level,r,this._tail)},clear:function(){return this.__ownerID?(this.length=this._origin=this._size=0,this._level=re,this._root=this._tail=Ee,this):De.empty()},push:function(){var t=arguments,e=this.length;return this.withMutations(function(n){U(n,0,e+t.length);for(var r=0;t.length>r;r++)n.set(e+r,t[r])})},pop:function(){return U(this,0,-1)},unshift:function(){var t=arguments;return this.withMutations(function(e){U(e,-t.length);for(var n=0;t.length>n;n++)e.set(n,t[n])})},shift:function(){return U(this,1)},merge:function(){return z(this,null,arguments)},mergeWith:function(t){for(var e=[],n=1;arguments.length>n;n++)e[n-1]=arguments[n];return z(this,t,e)},mergeDeep:function(){return z(this,x(null),arguments)},mergeDeepWith:function(t){for(var e=[],n=1;arguments.length>n;n++)e[n-1]=arguments[n];return z(this,x(t),e)},setLength:function(t){return U(this,0,t)},slice:function(t,e,n){var r=G.superCall(this,De.prototype,"slice",[t,e,n]);if(!n&&r!==this){var i=this,s=i.length;r.toVector=function(){return U(i,0>t?Math.max(0,s+t):s?Math.min(s,t):t,null==e?s:0>e?Math.max(0,s+e):s?Math.min(s,e):e)}}return r},iterator:function(){return new Se(this,this._origin,this._size,this._level,this._root,this._tail)},__iterate:function(t,e,n){var r=this,i=0,s=r.length-1;n^=e;var u,h=function(e,u){return t(e,n?s-u:u,r)===!1?!1:(i=u,!0)},a=W(this._size);return u=e?this._tail.iterate(0,a-this._origin,this._size-this._origin,h,e)&&this._root.iterate(this._level,-this._origin,a-this._origin,h,e):this._root.iterate(this._level,-this._origin,a-this._origin,h,e)&&this._tail.iterate(0,a-this._origin,this._size-this._origin,h,e),(u?s:e?s-i:i)+1},__deepEquals:function(t){var e=this.iterator();return t.every(function(t,n){var r=e.next().value;return r&&n===r[0]&&w(t,r[1])})},__ensureOwner:function(t){return t===this.__ownerID?this:t?j(this._origin,this._size,this._level,this._root,this._tail,t):(this.__ownerID=t,this)
}},{empty:function(){return xe||(xe=j(0,0,re,Ee,Ee))},from:function(t){if(t&&t.constructor===De)return t;if(!t||0===t.length)return De.empty();var e=Array.isArray(t);return t.length>0&&ie>t.length?j(0,t.length,re,Ee,new Me(e?t.slice():H(t).toArray())):(e||(t=H(t),t instanceof X||(t=t.values())),De.empty().merge(t))}},X);var be=Oe.prototype;be["@@iterator"]=be.__iterator__,be.update=oe.update,be.updateIn=oe.updateIn,be.cursor=oe.cursor,be.withMutations=oe.withMutations,be.asMutable=oe.asMutable,be.asImmutable=oe.asImmutable;var Me=function(t,e){this.array=t,this.ownerID=e},ke=Me;G.createClass(Me,{ensureOwner:function(t){return t&&t===this.ownerID?this:new ke(this.array.slice(),t)},removeBefore:function(t,e,n){if(n===e?1<<e:0||0===this.array.length)return this;var r=n>>>e&se;if(r>=this.array.length)return new ke([],t);var i,s=0===r;if(e>0){var u=this.array[r];if(i=u&&u.removeBefore(t,e-re,n),i===u&&s)return this}if(s&&!i)return this;var h=this.ensureOwner();if(!s)for(var a=0;r>a;a++)delete h.array[a];return i&&(h.array[r]=i),h},removeAfter:function(t,e,n){if(n===e?1<<e:0||0===this.array.length)return this;var r=n-1>>>e&se;if(r>=this.array.length)return this;var i,s=r===this.array.length-1;if(e>0){var u=this.array[r];if(i=u&&u.removeAfter(t,e-re,n),i===u&&s)return this}if(s&&!i)return this;var h=this.ensureOwner();return s||(h.array.length=r+1),i&&(h.array[r]=i),h},iterate:function(t,e,n,r,i){if(0===t){if(i){for(var s=this.array.length-1;s>=0;s--)if(this.array.hasOwnProperty(s)){var u=s+e;if(u>=0&&n>u&&r(this.array[s],u)===!1)return!1}return!0}return this.array.every(function(t,i){var s=i+e;return 0>s||s>=n||r(t,s)!==!1})}var h=1<<t,a=t-re;if(i){for(var o=this.array.length-1;o>=0;o--){var c=e+o*h;if(n>c&&c+h>0&&this.array.hasOwnProperty(o)&&!this.array[o].iterate(a,c,n,r,i))return!1}return!0}return this.array.every(function(t,s){var u=e+s*h;return u>=n||0>=u+h||t.iterate(a,u,n,r,i)})}},{});var Se=function(t,e,n,r,i,s){var u=W(n);this._stack={node:i.array,level:r,offset:-e,max:u-e,__prev:{node:s.array,level:0,offset:u-e,max:n-e}}
};G.createClass(Se,{next:function(){var t=this._stack;t:for(;t;){if(0===t.level)for(t.rawIndex||(t.rawIndex=0);t.node.length>t.rawIndex;){var e=t.rawIndex+t.offset;if(e>=0&&t.max>e&&t.node.hasOwnProperty(t.rawIndex)){var n=t.node[t.rawIndex];return t.rawIndex++,{value:[e,n],done:!0}}t.rawIndex++}else{var r=1<<t.level;for(t.levelIndex||(t.levelIndex=0);t.node.length>t.levelIndex;){var i=t.offset+t.levelIndex*r;if(i+r>0&&t.max>i&&t.node.hasOwnProperty(t.levelIndex)){var s=t.node[t.levelIndex].array;t.levelIndex++,t=this._stack={node:s,level:t.level-re,offset:i,max:t.max,__prev:t};continue t}t.levelIndex++}}t=this._stack=this._stack.__prev}return{done:!0}}},{});var xe,Ee=new Me([]),Ce=function(){for(var t=[],e=0;arguments.length>e;e++)t[e]=arguments[e];return Ae.from(t)},Ae=Ce;G.createClass(Ce,{toString:function(){return this.__toString("Set {","}")},has:function(t){return this._map?this._map.has(t):!1},get:function(t,e){return this.has(t)?t:e},add:function(t){if(null==t)return this;var e=this._map;return e||(e=he.empty().__ensureOwner(this.__ownerID)),e=e.set(t,null),this.__ownerID?(this.length=e.length,this._map=e,this):e===this._map?this:J(e)},"delete":function(t){if(null==t||null==this._map)return this;var e=this._map.delete(t);return 0===e.length?this.clear():this.__ownerID?(this.length=e.length,this._map=e,this):e===this._map?this:J(e)},clear:function(){return this.__ownerID?(this.length=0,this._map=null,this):Ae.empty()},union:function(){var t=arguments;return 0===t.length?this:this.withMutations(function(e){for(var n=0;t.length>n;n++){var r=t[n];r=r.forEach?r:H(r),r.forEach(function(t){return e.add(t)})}})},intersect:function(){for(var t=[],e=0;arguments.length>e;e++)t[e]=arguments[e];if(0===t.length)return this;t=t.map(function(t){return H(t)});var n=this;return this.withMutations(function(e){n.forEach(function(n){t.every(function(t){return t.contains(n)})||e.delete(n)})})},subtract:function(){for(var t=[],e=0;arguments.length>e;e++)t[e]=arguments[e];if(0===t.length)return this;t=t.map(function(t){return H(t)
});var n=this;return this.withMutations(function(e){n.forEach(function(n){t.some(function(t){return t.contains(n)})&&e.delete(n)})})},isSubset:function(t){return t=H(t),this.every(function(e){return t.contains(e)})},isSuperset:function(t){var e=this;return t=H(t),t.every(function(t){return e.contains(t)})},__iterate:function(t,e){var n=this;return this._map?this._map.__iterate(function(e,r){return t(r,r,n)},e):0},__deepEquals:function(t){return!(this._map||t._map)||this._map.equals(t._map)},__ensureOwner:function(t){if(t===this.__ownerID)return this;var e=this._map&&this._map.__ensureOwner(t);return t?J(e,t):(this.__ownerID=t,this._map=e,this)}},{empty:function(){return je||(je=J())},from:function(t){return t&&t.constructor===Ae?t:t&&0!==t.length?Ae.empty().union(t):Ae.empty()},fromKeys:function(t){return Ae.from(H(t).flip())}},H);var qe=Ce.prototype;qe.contains=qe.has,qe.withMutations=he.prototype.withMutations,qe.asMutable=he.prototype.asMutable,qe.asImmutable=he.prototype.asImmutable,qe.__toJS=X.prototype.__toJS,qe.__toStringMapper=X.prototype.__toStringMapper;var je,Pe=function(t){return t&&t.constructor===Ue?t:t&&0!==t.length?Ue.empty().merge(t):Ue.empty()},Ue=Pe;G.createClass(Pe,{toString:function(){return this.__toString("OrderedMap {","}")},get:function(t,e){if(null!=t&&this._map){var n=this._map.get(t);if(null!=n)return this._vector.get(n)[1]}return e},clear:function(){return this.__ownerID?(this.length=0,this._map=this._vector=null,this):Ue.empty()},set:function(t,e){if(null==t)return this;var n=this._map,r=this._vector;if(n){var i=n.get(t);null==i?(n=n.set(t,r.length),r=r.push([t,e])):r.get(i)[1]!==e&&(r=r.set(i,[t,e]))}else r=Oe.empty().__ensureOwner(this.__ownerID).set(0,[t,e]),n=he.empty().__ensureOwner(this.__ownerID).set(t,0);return this.__ownerID?(this.length=n.length,this._map=n,this._vector=r,this):r===this._vector?this:B(n,r)},"delete":function(t){if(null==t||null==this._map)return this;var e=this._map.get(t);if(null==e)return this;var n=this._map.delete(t),r=this._vector.delete(e);return 0===n.length?this.clear():this.__ownerID?(this.length=n.length,this._map=n,this._vector=r,this):n===this._map?this:B(n,r)
},__iterate:function(t,e){return this._vector?this._vector.fromEntries().__iterate(t,e):0},__deepEqual:function(t){var e=this._vector.__iterator__();return t.every(function(t,n){var r=e.next();return r&&(r=r[1]),r&&w(n,r[0])&&w(t,r[1])})},__ensureOwner:function(t){if(t===this.__ownerID)return this;var e=this._map&&this._map.__ensureOwner(t),n=this._vector&&this._vector.__ensureOwner(t);return t?B(e,n,t):(this.__ownerID=t,this._map=e,this._vector=n,this)}},{empty:function(){return ze||(ze=B())}},he),Pe.from=Pe;var ze,Re=function(t,e){var n=function(t){this._map=he(t)};t=H(t);var r=n.prototype=Object.create(Je);r.constructor=n,r._name=e,r._defaultValues=t;var i=Object.keys(t);return n.prototype.length=i.length,Object.defineProperty&&t.forEach(function(t,e){Object.defineProperty(n.prototype,e,{get:function(){return this.get(e)},set:function(t){I(this.__ownerID,"Cannot set on an immutable record."),this.set(e,t)}})}),n},We=Re;G.createClass(Re,{toString:function(){return this.__toString((this._name||"Record")+" {","}")},has:function(t){return this._defaultValues.has(t)},get:function(t,e){return void 0===e||this.has(t)?this._map.get(t,this._defaultValues.get(t)):e},clear:function(){if(this.__ownerID)return this._map.clear(),this;Object.getPrototypeOf(this).constructor;return We._empty||(We._empty=L(this,he.empty()))},set:function(t,e){if(null==t||!this.has(t))return this;var n=this._map.set(t,e);return this.__ownerID||n===this._map?this:L(this,n)},"delete":function(t){if(null==t||!this.has(t))return this;var e=this._map.delete(t);return this.__ownerID||e===this._map?this:L(this,e)},__iterate:function(t,e){var n=this;return this._defaultValues.map(function(t,e){return n.get(e)}).__iterate(t,e)},__ensureOwner:function(t){if(t===this.__ownerID)return this;var e=this._map&&this._map.__ensureOwner(t);return t?L(this,e,t):(this.__ownerID=t,this._map=e,this)}},{},H);var Je=Re.prototype;Je.__deepEqual=oe.__deepEqual,Je.merge=oe.merge,Je.mergeWith=oe.mergeWith,Je.mergeDeep=oe.mergeDeep,Je.mergeDeepWith=oe.mergeDeepWith,Je.update=oe.update,Je.updateIn=oe.updateIn,Je.cursor=oe.cursor,Je.withMutations=oe.withMutations,Je.asMutable=oe.asMutable,Je.asImmutable=oe.asImmutable;
var Be=function(t,e,n){return this instanceof Le?(I(0!==n,"Cannot step a Range by 0"),t=t||0,null==e&&(e=1/0),t===e&&Ke?Ke:(n=null==n?1:Math.abs(n),t>e&&(n=-n),this._start=t,this._end=e,this._step=n,void(this.length=Math.max(0,Math.ceil((e-t)/n-1)+1)))):new Le(t,e,n)},Le=Be;G.createClass(Be,{toString:function(){return 0===this.length?"Range []":"Range [ "+this._start+"..."+this._end+(this._step>1?" by "+this._step:"")+" ]"},has:function(t){return I(t>=0,"Index out of bounds"),this.length>t},get:function(t,e){return I(t>=0,"Index out of bounds"),1/0===this.length||this.length>t?this._start+t*this._step:e},contains:function(t){var e=(t-this._start)/this._step;return e>=0&&this.length>e&&e===Math.floor(e)},slice:function(t,e,n){return u(t,e,this.length)?this:n?G.superCall(this,Le.prototype,"slice",[t,e,n]):(t=h(t,this.length),e=a(e,this.length),t>=e?Ke:new Le(this.get(t,this._end),this.get(e,this._end),this._step))},indexOf:function(t){var e=t-this._start;if(e%this._step===0){var n=e/this._step;if(n>=0&&this.length>n)return n}return-1},lastIndexOf:function(t){return this.indexOf(t)},take:function(t){return this.slice(0,t)},skip:function(t,e){return e?G.superCall(this,Le.prototype,"skip",[t]):this.slice(t)},__iterate:function(t,e,n){for(var r=e^n,i=this.length-1,s=this._step,u=e?this._start+i*s:this._start,h=0;i>=h&&t(u,r?i-h:h,this)!==!1;h++)u+=e?-s:s;return r?this.length:h},__deepEquals:function(t){return this._start===t._start&&this._end===t._end&&this._step===t._step}},{},X);var Ve=Be.prototype;Ve.__toJS=Ve.toArray,Ve.first=be.first,Ve.last=be.last;var Ke=Be(0,0),Ne=function(t,e){return 0===e&&He?He:this instanceof Fe?(this._value=t,void(this.length=null==e?1/0:Math.max(0,e))):new Fe(t,e)},Fe=Ne;G.createClass(Ne,{toString:function(){return 0===this.length?"Repeat []":"Repeat [ "+this._value+" "+this.length+" times ]"},get:function(t,e){return I(t>=0,"Index out of bounds"),1/0===this.length||this.length>t?this._value:e},first:function(){return this._value},contains:function(t){return w(this._value,t)},slice:function(t,e,n){if(n)return G.superCall(this,Fe.prototype,"slice",[t,e,n]);
var r=this.length;return t=0>t?Math.max(0,r+t):Math.min(r,t),e=null==e?r:e>0?Math.min(r,e):Math.max(0,r+e),e>t?new Fe(this._value,e-t):He},reverse:function(t){return t?G.superCall(this,Fe.prototype,"reverse",[t]):this},indexOf:function(t){return w(this._value,t)?0:-1},lastIndexOf:function(t){return w(this._value,t)?this.length:-1},__iterate:function(t,e,n){var r=e^n;I(!r||1/0>this.length,"Cannot access end of infinite range.");for(var i=this.length-1,s=0;i>=s&&t(this._value,r?i-s:s,this)!==!1;s++);return r?this.length:s},__deepEquals:function(t){return w(this._value,t._value)}},{},X);var Ge=Ne.prototype;Ge.last=Ge.first,Ge.has=Ve.has,Ge.take=Ve.take,Ge.skip=Ve.skip,Ge.__toJS=Ve.__toJS;var He=new Ne(void 0,0),Qe={Sequence:H,Map:he,Vector:Oe,Set:Ce,OrderedMap:Pe,Record:Re,Range:Be,Repeat:Ne,is:w,fromJS:V};return Qe}"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define(t):Immutable=t();