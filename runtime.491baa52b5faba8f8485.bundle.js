(()=>{"use strict";var e,t,r,n,a,o,i,d={},f={};function l(e){var t=f[e];if(void 0!==t)return t.exports;var r=f[e]={exports:{}};return d[e].call(r.exports,r,r.exports,l),r.exports}l.m=d,e=[],l.O=(t,r,n,a)=>{if(!r){var o=1/0;for(c=0;c<e.length;c++){for(var[r,n,a]=e[c],i=!0,d=0;d<r.length;d++)(!1&a||o>=a)&&Object.keys(l.O).every((e=>l.O[e](r[d])))?r.splice(d--,1):(i=!1,a<o&&(o=a));if(i){e.splice(c--,1);var f=n();void 0!==f&&(t=f)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,n,a]},l.F={},l.E=e=>{Object.keys(l.F).map((t=>{l.F[t](e)}))},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var a=Object.create(null);l.r(a);var o={};t=t||[null,r({}),r([]),r(r)];for(var i=2&n&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,l.d(a,o),a},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,r)=>(l.f[r](e,t),t)),[])),l.u=e=>e+"."+{209:"9acf1bbbd7a45d3bdd41",352:"2b97c0c160cbb3389c12",465:"0fcb8406dbb45f4cecd4",512:"7f4a0a64f19a04fd4e57",568:"3d84ed06579b2e52759b",582:"78de7f2bf5950cc4af9b",626:"dc3eb010e2463e0a26a8",846:"8c31e09f7f3e6bab735e",869:"bee44d9f685e7b6c2ec8",921:"b9af1c12378628a89ef6"}[e]+".bundle.js",l.miniCssF=e=>(({179:"main",736:"vendor"}[e]||e)+"."+{179:"f1da5588fd7403f55950",209:"9acf1bbbd7a45d3bdd41",352:"2b97c0c160cbb3389c12",512:"7f4a0a64f19a04fd4e57",626:"dc3eb010e2463e0a26a8",736:"fcd6371fa4c2ed2aebe8",846:"8c31e09f7f3e6bab735e"}[e]+".css"),l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},a="sango-slide:",l.l=(e,t,r,o)=>{if(n[e])n[e].push(t);else{var i,d;if(void 0!==r)for(var f=document.getElementsByTagName("script"),c=0;c<f.length;c++){var s=f[c];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==a+r){i=s;break}}i||(d=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.setAttribute("data-webpack",a+r),i.src=e),n[e]=[t];var u=(t,r)=>{i.onerror=i.onload=null,clearTimeout(b);var a=n[e];if(delete n[e],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(r))),t)return t(r)},b=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),d&&document.head.appendChild(i)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.p="/sango-slide/",o=e=>new Promise(((t,r)=>{var n=l.miniCssF(e),a=l.p+n;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=(i=r[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){var i;if((a=(i=o[n]).getAttribute("data-href"))===e||a===t)return i}})(n,a))return t();((e,t,r,n)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=o=>{if(a.onerror=a.onload=null,"load"===o.type)r();else{var i=o&&("load"===o.type?"missing":o.type),d=o&&o.target&&o.target.href||t,f=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");f.code="CSS_CHUNK_LOAD_FAILED",f.type=i,f.request=d,a.parentNode.removeChild(a),n(f)}},a.href=t,document.head.appendChild(a)})(e,a,t,r)})),i={666:0},l.f.miniCss=(e,t)=>{i[e]?t.push(i[e]):0!==i[e]&&{209:1,352:1,512:1,626:1,846:1}[e]&&t.push(i[e]=o(e).then((()=>{i[e]=0}),(t=>{throw delete i[e],t})))},(()=>{var e={666:0};l.f.j=(t,r)=>{var n=l.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else if(/^(209|626|666)$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>n=e[t]=[r,a]));r.push(n[2]=a);var o=l.p+l.u(t),i=new Error;l.l(o,(r=>{if(l.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+t,t)}},l.F.j=t=>{if(!(l.o(e,t)&&void 0!==e[t]||/^(209|626|666)$/.test(t))){e[t]=null;var r=document.createElement("link");l.nc&&r.setAttribute("nonce",l.nc),r.rel="prefetch",r.as="script",r.href=l.p+l.u(t),document.head.appendChild(r)}},l.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[o,i,d]=r,f=0;if(o.some((t=>0!==e[t]))){for(n in i)l.o(i,n)&&(l.m[n]=i[n]);if(d)var c=d(l)}for(t&&t(r);f<o.length;f++)a=o[f],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(c)},r=self.webpackChunksango_slide=self.webpackChunksango_slide||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();