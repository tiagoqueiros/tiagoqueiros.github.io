(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{6065:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,2419,23)),Promise.resolve().then(n.bind(n,6296)),Promise.resolve().then(n.bind(n,1950)),Promise.resolve().then(n.bind(n,9713)),Promise.resolve().then(n.t.bind(n,9002,23)),Promise.resolve().then(n.t.bind(n,4409,23)),Promise.resolve().then(n.t.bind(n,814,23))},9713:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{html:t,height:n=null,width:l=null,children:o,dataNtpc:i=""}=e;return(0,a.useEffect)(()=>{i&&performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-".concat(i)}})},[i]),(0,r.jsxs)(r.Fragment,{children:[o,t?(0,r.jsx)("div",{style:{height:null!=n?"".concat(n,"px"):"auto",width:null!=l?"".concat(l,"px"):"auto"},"data-ntpc":i,dangerouslySetInnerHTML:{__html:t}}):null]})};let r=n(5361),a=n(1141)},6296:(e,t,n)=>{"use strict";let r;Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=function(e){let{gaId:t,debugMode:n,dataLayerName:i="dataLayer",nonce:s}=e;return void 0===r&&(r=i),(0,l.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:"\n          window['".concat(i,"'] = window['").concat(i,"'] || [];\n          function gtag(){window['").concat(i,"'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t,"' ").concat(n?",{ 'debug_mode': true }":"",");")},nonce:s}),(0,a.jsx)(o.default,{id:"_next-ga",src:"https://www.googletagmanager.com/gtag/js?id=".concat(t),nonce:s})]})},t.sendGAEvent=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(void 0===r){console.warn("@next/third-parties: GA has not been initialized");return}window[r]?window[r].push(arguments):console.warn("@next/third-parties: GA dataLayer ".concat(r," does not exist"))};let a=n(5361),l=n(1141),o=function(e){return e&&e.__esModule?e:{default:e}}(n(8545))},1950:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=void 0,t.GoogleTagManager=function(e){let{gtmId:t,gtmScriptUrl:n="https://www.googletagmanager.com/gtm.js",dataLayerName:i="dataLayer",auth:s,preview:c,dataLayer:u,nonce:d}=e;o=i;let f="dataLayer"!==i?"&l=".concat(i):"";return(0,a.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:"\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(u?"w[l].push(".concat(JSON.stringify(u),")"):"","\n      })(window,'").concat(i,"');")},nonce:d}),(0,r.jsx)(l.default,{id:"_next-gtm","data-ntpc":"GTM",src:"".concat(n,"?id=").concat(t).concat(f).concat(s?"&gtm_auth=".concat(s):"").concat(c?"&gtm_preview=".concat(c,"&gtm_cookies_win=x"):""),nonce:d})]})};let r=n(5361),a=n(1141),l=function(e){return e&&e.__esModule?e:{default:e}}(n(8545)),o="dataLayer";t.sendGTMEvent=(e,t)=>{let n=t||o;window[n]=window[n]||[],window[n].push(e)}},8545:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a.a});var r=n(9002),a=n.n(r),l={};for(let e in r)"default"!==e&&(l[e]=()=>r[e]);n.d(t,l)},6885:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9002:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return h},handleClientScriptLoad:function(){return g},initScriptLoader:function(){return m}});let r=n(6318),a=n(3511),l=n(5361),o=r._(n(4520)),i=a._(n(1141)),s=n(1849),c=n(1737),u=n(6885),d=new Map,f=new Set,_=e=>{if(o.default.preinit){e.forEach(e=>{o.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},p=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:l,children:o="",strategy:i="afterInteractive",onError:s,stylesheets:u}=e,p=n||t;if(p&&f.has(p))return;if(d.has(t)){f.add(p),d.get(t).then(r,s);return}let g=()=>{a&&a(),f.add(p)},m=document.createElement("script"),y=new Promise((e,t)=>{m.addEventListener("load",function(t){e(),r&&r.call(this,t),g()}),m.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});l?(m.innerHTML=l.__html||"",g()):o?(m.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):"",g()):t&&(m.src=t,d.set(t,y)),(0,c.setAttributesFromProps)(m,e),"worker"===i&&m.setAttribute("type","text/partytown"),m.setAttribute("data-nscript",i),u&&_(u),document.body.appendChild(m)};function g(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>p(e))}):p(e)}function m(e){e.forEach(g),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function y(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:c="afterInteractive",onError:d,stylesheets:_,...g}=e,{updateScripts:m,scripts:y,getIsSsr:h,appDir:b,nonce:w}=(0,i.useContext)(s.HeadManagerContext),v=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||n;v.current||(a&&e&&f.has(e)&&a(),v.current=!0)},[a,t,n]);let x=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!x.current&&("afterInteractive"===c?p(e):"lazyOnload"===c&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>p(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>p(e))})),x.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(m?(y[c]=(y[c]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:d,...g}]),m(y)):h&&h()?f.add(t||n):h&&!h()&&p(e)),b){if(_&&_.forEach(e=>{o.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return n?(o.default.preload(n,g.integrity?{as:"script",integrity:g.integrity,nonce:w,crossOrigin:g.crossOrigin}:{as:"script",nonce:w,crossOrigin:g.crossOrigin}),(0,l.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...g,id:t}])+")"}})):(g.dangerouslySetInnerHTML&&(g.children=g.dangerouslySetInnerHTML.__html,delete g.dangerouslySetInnerHTML),(0,l.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...g,id:t}])+")"}}));"afterInteractive"===c&&n&&o.default.preload(n,g.integrity?{as:"script",integrity:g.integrity,nonce:w,crossOrigin:g.crossOrigin}:{as:"script",nonce:w,crossOrigin:g.crossOrigin})}return null}Object.defineProperty(y,"__nextScript",{value:!0});let h=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1737:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"setAttributesFromProps",{enumerable:!0,get:function(){return l}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"},r=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"];function a(e){return["async","defer","noModule"].includes(e)}function l(e,t){for(let[l,o]of Object.entries(t)){if(!t.hasOwnProperty(l)||r.includes(l)||void 0===o)continue;let i=n[l]||l.toLowerCase();"SCRIPT"===e.tagName&&a(i)?e[i]=!!o:e.setAttribute(i,String(o)),(!1===o||"SCRIPT"===e.tagName&&a(i)&&(!o||"false"===o))&&(e.setAttribute(i,""),e.removeAttribute(i))}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2419:()=>{},814:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_d65c78",variable:"__variable_d65c78"}},4409:e=>{e.exports={style:{fontFamily:"'Outfit', 'Outfit Fallback'",fontStyle:"normal"},className:"__className_ad50fd",variable:"__variable_ad50fd"}}},e=>{var t=t=>e(e.s=t);e.O(0,[211,333,995,358],()=>t(6065)),_N_E=e.O()}]);