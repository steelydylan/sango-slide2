(()=>{"use strict";var e,t,r,n,o,a,d,i={},l={};function c(e){var t=l[e];if(void 0!==t)return t.exports;var r=l[e]={exports:{}};return i[e].call(r.exports,r,r.exports,c),r.exports}c.m=i,e=[],c.O=(t,r,n,o)=>{if(!r){var a=1/0;for(f=0;f<e.length;f++){for(var[r,n,o]=e[f],d=!0,i=0;i<r.length;i++)(!1&o||a>=o)&&Object.keys(c.O).every((e=>c.O[e](r[i])))?r.splice(i--,1):(d=!1,o<a&&(a=o));if(d){e.splice(f--,1);var l=n();void 0!==l&&(t=l)}}return t}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[r,n,o]},c.F={},c.E=e=>{Object.keys(c.F).map((t=>{c.F[t](e)}))},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);c.r(o);var a={};t=t||[null,r({}),r([]),r(r)];for(var d=2&n&&e;"object"==typeof d&&!~t.indexOf(d);d=r(d))Object.getOwnPropertyNames(d).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,c.d(o,a),o},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((t,r)=>(c.f[r](e,t),t)),[])),c.u=e=>e+"."+{209:"9acf1bbbd7a45d3bdd41",352:"2b97c0c160cbb3389c12",465:"0fcb8406dbb45f4cecd4",512:"7f4a0a64f19a04fd4e57",568:"3d84ed06579b2e52759b",582:"78de7f2bf5950cc4af9b",626:"dc3eb010e2463e0a26a8",846:"8c31e09f7f3e6bab735e",869:"bee44d9f685e7b6c2ec8",921:"1bed584467398ea1b3e9"}[e]+".bundle.js",c.miniCssF=e=>(({179:"main",736:"vendor"}[e]||e)+"."+{179:"f2c9e7ddecded1d6795d",209:"9acf1bbbd7a45d3bdd41",352:"2b97c0c160cbb3389c12",512:"7f4a0a64f19a04fd4e57",626:"dc3eb010e2463e0a26a8",736:"fcd6371fa4c2ed2aebe8",846:"8c31e09f7f3e6bab735e"}[e]+".css"),c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},o="sango-slide:",c.l=(e,t,r,a)=>{if(n[e])n[e].push(t);else{var d,i;if(void 0!==r)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==o+r){d=s;break}}d||(i=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.setAttribute("data-webpack",o+r),d.src=e),n[e]=[t];var u=(t,r)=>{d.onerror=d.onload=null,clearTimeout(b);var o=n[e];if(delete n[e],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(r))),t)return t(r)},b=setTimeout(u.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=u.bind(null,d.onerror),d.onload=u.bind(null,d.onload),i&&document.head.appendChild(d)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.p="/sango-slide2/",a=e=>new Promise(((t,r)=>{var n=c.miniCssF(e),o=c.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(d=r[n]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(o===e||o===t))return d}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){var d;if((o=(d=a[n]).getAttribute("data-href"))===e||o===t)return d}})(n,o))return t();((e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var d=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=d,l.request=i,o.parentNode.removeChild(o),n(l)}},o.href=t,document.head.appendChild(o)})(e,o,t,r)})),d={666:0},c.f.miniCss=(e,t)=>{d[e]?t.push(d[e]):0!==d[e]&&{209:1,352:1,512:1,626:1,846:1}[e]&&t.push(d[e]=a(e).then((()=>{d[e]=0}),(t=>{throw delete d[e],t})))},(()=>{var e={666:0};c.f.j=(t,r)=>{var n=c.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(/^(209|626|666)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var a=c.p+c.u(t),d=new Error;c.l(a,(r=>{if(c.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}}),"chunk-"+t,t)}},c.F.j=t=>{if(!(c.o(e,t)&&void 0!==e[t]||/^(209|626|666)$/.test(t))){e[t]=null;var r=document.createElement("link");c.nc&&r.setAttribute("nonce",c.nc),r.rel="prefetch",r.as="script",r.href=c.p+c.u(t),document.head.appendChild(r)}},c.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[a,d,i]=r,l=0;if(a.some((t=>0!==e[t]))){for(n in d)c.o(d,n)&&(c.m[n]=d[n]);if(i)var f=i(c)}for(t&&t(r);l<a.length;l++)o=a[l],c.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return c.O(f)},r=self.webpackChunksango_slide=self.webpackChunksango_slide||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();