parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"yCUT":[function(require,module,exports) {
function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}var n={days:document.querySelector('span[data-value="days"]'),hours:document.querySelector('span[data-value="hours"]'),mins:document.querySelector('span[data-value="mins"]'),secs:document.querySelector('span[data-value="secs"]'),currentDate:document.querySelector(".js-target-date")},r=function(){function t(a){var n=a.selector,r=a.targetDate;e(this,t),this.selector=n,this.date=r,this.render(),this.run()}return a(t,[{key:"countDate",value:function(){var e=new Date(this.date)-Date.now();return{days:Math.floor(e/864e5),hours:Math.floor(e%864e5/36e5),mins:Math.floor(e%36e5/6e4),secs:Math.floor(e%6e4/1e3)}}},{key:"render",value:function(){var e=this.countDate();n.days.textContent=String(e.days).padStart(2,"0"),n.hours.textContent=String(e.hours).padStart(2,"0"),n.mins.textContent=String(e.mins).padStart(2,"0"),n.secs.textContent=String(e.secs).padStart(2,"0")}},{key:"run",value:function(){var e=this,t=Date.parse(this.date)<=Date.parse(new Date);this.timerId=setInterval(function(){t?e.stop():e.render()},1e3)}},{key:"stop",value:function(){clearInterval(this.timerId)}}]),t}(),o=new r({selector:"#timer-1",targetDate:new Date("May 5, 2021")}),s=o.date.toLocaleString("ru",{year:"numeric",month:"long",day:"numeric"});n.currentDate.textContent=s;
},{}]},{},["yCUT"], null)
//# sourceMappingURL=/goit-js-hw-11/timer.d5a0e857.js.map