!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t){e.exports=void 0},function(e,t){e.exports=void 0},function(e,t){function r(){var e,t=this.parentNode,r=arguments.length;if(t)for(r||t.removeChild(this);r--;)"object"!=typeof(e=arguments[r])?e=this.ownerDocument.createTextNode(e):e.parentNode&&e.parentNode.removeChild(e),r?t.insertBefore(this.previousSibling,e):t.replaceChild(e,this)}Element.prototype.replaceWith||(Element.prototype.replaceWith=r),CharacterData.prototype.replaceWith||(CharacterData.prototype.replaceWith=r),DocumentType.prototype.replaceWith||(DocumentType.prototype.replaceWith=r)},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),i=r(0),u=r.n(i);r(2);function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var a=function(e){var t,r;function n(){for(var t,r,n,o,i=arguments.length,a=new Array(i),p=0;p<i;p++)a[p]=arguments[p];return t=e.call.apply(e,[this].concat(a))||this,r=c(c(t)),n="ref",o=u.a.createRef(),n in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=n.prototype;return o.componentDidMount=function(){var e,t=this.props.children||[];(e=this.ref.current).replaceWith.apply(e,t)},o.render=function(){return u.a.createElement("div",{ref:this.ref})},n}(u.a.Component);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=function(e,t,r,n){var i=function(r){var n,o;function i(){for(var e,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return l(f(f(e=r.call.apply(r,[this].concat(o))||this)),"state",p({},t)),l(f(f(e)),"setProps",function(t){return e.setState(function(){return t})}),e}return o=r,(n=i).prototype=Object.create(o.prototype),n.prototype.constructor=n,n.__proto__=o,i.prototype.render=function(){return u.a.createElement(e,p({},this.props,this.state))},i}(u.a.PureComponent),c=u.a.createRef();o.a.render(u.a.createElement(i,{ref:c}),r,function(){return n(c)})},d=function(e,t){e&&e.current&&e.current.setProps(t)},h=function(e){var t=e.getAttributeNames().reduce(function(t,r){return t[r]=e.getAttribute(r),t},{});return t.children=u.a.createElement(a,null,e.children),t};function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){var t="function"==typeof Map?new Map:void 0;return(v=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return m(e,arguments,O(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),g(n,e)})(e)}function m(e,t,r){return(m=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&g(o,r.prototype),o}).apply(null,arguments)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"registerAsWebComponent",function(){return j});var w=function(e){return function(t){var r,n;function o(){var r;return _(b(b(r=t.call(this)||this)),"shadow",null),_(b(b(r)),"propBridgeRef",null),_(b(b(r)),"props",{}),_(b(b(r)),"observer",null),_(b(b(r)),"setProps",function(e){r.props=y({},r.props,e),d(r.propBridgeRef,r.props)}),_(b(b(r)),"_onReactMount",function(e){r.propBridgeRef=e,r.setProps(r.props)}),_(b(b(r)),"_onMutation",function(e){var t=e.reduce(function(e,t){if("attributes"===t.type){var n=t.attributeName;e[n]=r.getAttribute(n)}return e},{});r.setProps(t)}),r.props=h(b(b(r))),r.observer=new MutationObserver(r._onMutation),r.shadow=r.attachShadow({mode:"closed"}),s(e,r.props,r.shadow,r._onReactMount),r}n=t,(r=o).prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n;var i=o.prototype;return i.connectedCallback=function(){this.observer.observe(this,{attributes:!0})},i.disconnectedCallback=function(){this.observer.disconnect()},o}(v(HTMLElement))},j=function(e,t){var r=w(t);customElements.define(e,r)}}]);