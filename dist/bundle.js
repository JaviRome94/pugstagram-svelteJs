!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function o(){}n.r(e);function r(t){return t()}function u(){return Object.create(null)}function l(t){t.forEach(r)}function i(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t){return 0===Object.keys(t).length}new Set;function a(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}new Set;let $;function m(t){$=t}const y=[],b=[],g=[],_=[],v=Promise.resolve();let x=!1;function w(){x||(x=!0,v.then(j))}function k(t){g.push(t)}let S=!1;const O=new Set;function j(){if(!S){S=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];m(e),E(e.$$)}for(y.length=0;b.length;)b.pop()();for(let t=0;t<g.length;t+=1){const e=g[t];O.has(e)||(O.add(e),e())}g.length=0}while(y.length);for(;_.length;)_.pop()();x=!1,S=!1,O.clear()}}function E(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const M=new Set;function C(t,e){t&&t.i&&(M.delete(t),t.i(e))}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let T;function q(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function P(t,e,n,c,s,a,f=[-1]){const p=$;m(t);const h=e.props||{},b=t.$$={fragment:null,ctx:null,props:a,update:o,not_equal:s,bound:u(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:u(),dirty:f,skip_bound:!1};let g=!1;if(b.ctx=n?n(t,h,(e,n,...o)=>{const r=o.length?o[0]:n;return b.ctx&&s(b.ctx[e],b.ctx[e]=r)&&(!b.skip_bound&&b.bound[e]&&b.bound[e](r),g&&function(t,e){-1===t.$$.dirty[0]&&(y.push(t),w(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n}):[],b.update(),g=!0,l(b.before_update),b.fragment=!!c&&c(b.ctx),e.target){if(e.hydrate){const t=(_=e.target,Array.from(_.childNodes));b.fragment&&b.fragment.l(t),t.forEach(d)}else b.fragment&&b.fragment.c();e.intro&&C(t.$$.fragment),function(t,e,n){const{fragment:o,on_mount:u,on_destroy:c,after_update:s}=t.$$;o&&o.m(e,n),k(()=>{const e=u.map(r).filter(i);c?c.push(...e):l(e),t.$$.on_mount=[]}),s.forEach(k)}(t,e.target,e.anchor),j()}var _;m(p)}"function"==typeof HTMLElement&&(T=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){q(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!s(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class A{$destroy(){q(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!s(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function H(t){let e;return{c(){e=p("div"),e.innerHTML="<h1>hola pugstagram</h1>",h(e,"class","main")},m(t,n){f(t,e,n)},p:o,i:o,o:o,d(t){t&&d(e)}}}var L=new class extends A{constructor(t){var e;super(),document.getElementById("svelte-9fqg7n-style")||((e=p("style")).id="svelte-9fqg7n-style",e.textContent="body{background-color:#676778;color:white}",a(document.head,e)),P(this,t,null,H,c,{})}}({target:document.querySelector("main")});e.default=L}]);