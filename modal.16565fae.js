parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"dQuI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Modal=void 0;class e{constructor(e={},s={}){this.refs=this.getRefs(e,s)}getRefs(e,s){const t={};return t.container=document.querySelector(e),t.backdrop=document.querySelector(s),t.closeButton=t.backdrop.querySelector("[data-modal-close]"),t}createModal(){this.refs.container.addEventListener("click",this.openModal.bind(this)),this.refs.closeButton.addEventListener("click",this.closeModal.bind(this)),this.refs.backdrop.addEventListener("click",this.onBackdropClick.bind(this))}openModal(e){e.preventDefault(),e.target!==this.refs.container&&(window.addEventListener("keydown",this.onEscPress.bind(this)),document.body.classList.add("footer-modal-open"),this.refs.backdrop.classList.remove("visually-hidden"))}closeModal(){window.removeEventListener("keydown",this.onEscPress.bind(this)),this.refs.backdrop.classList.add("visually-hidden"),document.body.classList.remove("footer-modal-open")}onBackdropClick(e){e.target===this.refs.backdrop&&this.closeModal()}onEscPress(e){"Escape"===e.code&&this.closeModal()}}exports.Modal=e;
},{}],"rqFF":[function(require,module,exports) {
"use strict";var a=require("./modal-plugin");const o=new a.Modal(".gallery","[data-card-modal]");o.createModal();const e=new a.Modal(".footer-modal-container","[data-footer-modal]");e.createModal();
},{"./modal-plugin":"dQuI"}]},{},["rqFF"], null)
//# sourceMappingURL=/js-team-project-16/modal.16565fae.js.map