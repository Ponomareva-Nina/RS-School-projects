(()=>{"use strict";var n={305:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"footer {\n    box-sizing: border-box;\n    width: 100%;\n    min-height: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    column-gap: 25px;\n    padding: 15px;\n    flex-wrap: wrap;\n    border-top: 1px solid #30c5ff;\n    flex: 0 0 auto;\n}\n\nfooter .copyright {\n    font-size: 15px;\n    color: #e9e9e9;\n    text-align: center;\n}\n\nfooter .copyright a,\nfooter .copyright a:visited {\n    color: #e9e9e9;\n}\n\nfooter .copyright a:hover,\nfooter .copyright a:visited:hover {\n    color: #69db7e;\n}\n\nfooter .copyright:before {\n    content: '©';\n}\n\nfooter .github-link {\n    color: #e9e9e9;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    justify-content: flex-end;\n    width: 100%;\n    font-size: 15px;\n    text-decoration: none;\n}\n\nfooter .github-link:hover,\nfooter .github-link:visited:hover {\n    cursor: pointer;\n    color: #69db7e;\n}\n\nfooter .github-link:visited {\n    color: #e9e9e9;\n}\n\n\nfooter .github-link img {\n   max-width: 35px;\n}",""]);const i=o},669:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,".news__item {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem auto;\n    margin-bottom: 1.6%;\n    background: #fff;\n    color: #333;\n    line-height: 1.4;\n    font-family: Arial, sans-serif;\n    border-radius: 5px;\n    overflow: hidden;\n}\n\n.news__item:hover .news__meta-photo {\n    transform: scale(1.3) rotate(3deg);\n}\n\n.news__item .news__meta {\n    position: relative;\n    height: 200px;\n}\n\n.news__item .news__meta-photo {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center;\n    transition: transform 0.2s;\n}\n\n.news__item .news__meta-details,\n.news__item .news__meta-details ul {\n    margin: auto;\n    padding: 0;\n    list-style: none;\n}\n\n.news__item .news__meta-details {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -120%;\n    margin: auto;\n    transition: left 0.2s;\n    background: rgba(0, 0, 0, 0.6);\n    color: #fff;\n    padding: 10px;\n    width: 100%;\n    font-size: 0.9rem;\n}\n\n.news__item .news__description {\n    padding: 1rem;\n    background: #fff;\n    position: relative;\n    z-index: 1;\n}\n\n.news__item .news__description h2 {\n    line-height: 1;\n    margin: 0;\n    font-size: 1.7rem;\n}\n\n.news__item .news__description h3 {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a2a2a2;\n    margin-top: 5px;\n}\n\n.news__item .news__description .news__read-more {\n    text-align: right;\n}\n\n.news__item .news__description .news__read-more a {\n    color: #5ad67d;\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    font-weight: 800;\n}\n\n.news__item .news__description .news__read-more a:after {\n    content: '→';\n    margin-left: -10px;\n    opacity: 0;\n    vertical-align: middle;\n    transition: margin 0.3s, opacity 0.3s;\n}\n\n.news__item .news__description .news__read-more a:hover:after {\n    margin-left: 5px;\n    opacity: 1;\n}\n\n.news__item p {\n    margin: 1rem 0 0;\n}\n\n.news__item p:first-of-type {\n    margin-top: 1.25rem;\n    position: relative;\n}\n\n.news__item p:first-of-type:before {\n    content: '';\n    position: absolute;\n    height: 5px;\n    background: #5ad67d;\n    width: 35px;\n    top: -0.75rem;\n    border-radius: 3px;\n}\n\n.news__item:hover .news__meta-details {\n    left: 0%;\n}\n\n@media (min-width: 640px) {\n    .news__item {\n        flex-direction: row;\n        max-width: 700px;\n    }\n\n    .news__item .news__meta {\n        flex-basis: 40%;\n        height: auto;\n    }\n\n    .news__item .news__description {\n        flex-basis: 60%;\n    }\n\n    .news__item .news__description:before {\n        -webkit-transform: skewX(-3deg);\n        transform: skewX(-3deg);\n        content: '';\n        background: #fff;\n        width: 30px;\n        position: absolute;\n        left: -10px;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n    }\n\n    .news__item.alt {\n        flex-direction: row-reverse;\n    }\n\n    .news__item.alt .news__description:before {\n        left: inherit;\n        right: -10px;\n        -webkit-transform: skew(3deg);\n        transform: skew(3deg);\n    }\n\n    .news__item.alt .news__meta-details {\n        padding-left: 25px;\n    }\n}\n",""]);const i=o},501:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,".sources {\n    font: 300 1em 'Fira Sans', sans-serif;\n    width: 100%;\n    display: flex;\n    column-gap: 10px;\n    overflow: initial;\n    transition: all .2s ease;\n    margin-bottom: 10px;\n    padding: 15px 0;\n}\n\n.source__item {\n    background: none;\n    border: 2px solid #30c5ff;\n    font: inherit;\n    color: #70d6ff;\n    transition: 0.2s;\n    cursor: pointer;\n    flex-basis: calc(100% / 5 - 10px);\n    flex-shrink: 0;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding: 5px;\n}\n\n@media screen and (max-width: 605px) {\n    .source__item {\n        flex-basis: calc(100% / 3 - 10px);\n        font-size: 14px;\n    }\n}\n\n.source__item:hover,\n.source__item:focus {\n    border-color: #3fcc59;\n    color: #69db7e;\n    box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\n    transform: translateY(-0.25em);\n}\n\n.source__item:active {\n    box-shadow: none;\n    transform: translateY(0);\n}\n\n.source__item-name {\n    font-weight: 400;\n}\n\n.sources-container {\n    width: 100%;\n    overflow: hidden;\n    margin-bottom: 30px;\n}\n\n.sources::-webkit-scrollbar {\n    display: none;\n}\n\n.scrollbar {\n    margin: 0 auto;\n    min-width: 300px;\n    max-width: 700px;\n    width: 100%;\n    display: flex;\n    height: min-content;\n}\n\ninput[type=range] {\n    -webkit-appearance: none;\n    width: 100%;\n    background: transparent;\n}\n\ninput[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n}\n\ninput[type=range]:focus {\n    outline: none;\n}\n\ninput[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    background: transparent;\n    border-color: transparent;\n    color: transparent;\n}\n\ninput[type=range]::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 10px;\n    background: transparent;\n    border-radius: 5px;\n    cursor: pointer;\n    box-sizing: border-box;\n    border: 0.5px solid #30c5ff;\n}\n\ninput[type=range]::-moz-range-track {\n    width: 100%;\n    height: 10px;\n    background: transparent;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\ninput[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    width: 35px;\n    height: 100%;\n    border-radius: 5px;\n    background: #ffffff;\n    cursor: pointer;\n    z-index: 1;\n}\n\ninput[type=range]::-moz-range-thumb {\n    -webkit-appearance: none;\n    width: 35px;\n    height: 100%;\n    border-radius: 5px;\n    background: #ffffff;\n    cursor: pointer;\n}",""]);const i=o},767:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"body {\n    color: #f8f8f8;\n    background: #242424;\n    font-family: sans-serif;\n}\n\nheader {\n    padding: 15px 0;\n    flex: 0 0 auto;\n    width: 100%;\n}\n\nheader h1 {\n    margin: 0;\n    font-size: 40px;\n    font-weight: 800;\n    text-align: center;\n    text-shadow: -1px 1px 8px #30c5ff;\n}\n\nmain {\n    flex: 1 0 auto;\n    width: 100%;\n}\n\n.wrapper {\n    margin: 0 auto;\n    max-width: 900px;\n    height: 100vh;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}",""]);const i=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<n.length;a++){var c=[].concat(n[a]);r&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},379:(n,e,t)=>{var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function s(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function a(n,e){for(var t={},r=[],o=0;o<n.length;o++){var a=n[o],c=e.base?a[0]+e.base:a[0],l=t[c]||0,d="".concat(c," ").concat(l);t[c]=l+1;var u=s(d),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:d,updater:m(p,e),references:1}),r.push(d)}return r}function c(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var s=o(n.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var l,d=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function u(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=d(e,o);else{var i=document.createTextNode(o),s=n.childNodes;s[e]&&n.removeChild(s[e]),s.length?n.insertBefore(i,s[e]):n.appendChild(i)}}function p(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var f=null,h=0;function m(n,e){var t,r,o;if(e.singleton){var i=h++;t=f||(f=c(e)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=c(e),r=p.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=a(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=s(t[r]);i[o].references--}for(var c=a(n,e),l=0;l<t.length;l++){var d=s(t[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=c}}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n,e;!function(n){n.SOURCES="sources",n.EVERYTHING="everything"}(n||(n={})),function(n){n[n.UNAUTHORIZED=401]="UNAUTHORIZED",n[n.OK=200]="OK",n[n.NOTFOUND=404]="NOTFOUND"}(e||(e={}));const r=class{constructor(n,e){this.baseLink=n,this.options=e}getResp({endpoint:n,options:e={}},t=(()=>{console.error("No callback for GET response")})){this.load("GET",n,t,e)}errorHandler(n){if(!n.ok)throw n.status!==e.UNAUTHORIZED&&n.status!==e.NOTFOUND||console.log(`Sorry, but there is ${n.status} error: ${n.statusText}`),Error(n.statusText);return n}makeUrl(n,e){const t=Object.assign(Object.assign({},this.options),n);let r=`${this.baseLink}${e}?`;return Object.keys(t).forEach((n=>{r+=`${n}=${t[n]}&`})),r.slice(0,-1)}load(n,e,t,r={}){fetch(this.makeUrl(r,e),{method:n}).then(this.errorHandler).then((n=>n.json())).then((n=>t(n))).catch((n=>console.error(n)))}},o=class extends r{constructor(){super("https://newsapi-redirect-production.up.railway.app/",{apiKey:"50c95b2697574c248fdb1871f00d7ff7"})}},i=class extends o{getSources(e){super.getResp({endpoint:n.SOURCES},e)}getNews(e,t){let r=e.target;const o=e.currentTarget;for(;r!==o;){if(r.classList.contains("source__item")){const e=r.getAttribute("data-source-id");return void(o.getAttribute("data-source")!==e&&(o.setAttribute("data-source",e),super.getResp({endpoint:n.EVERYTHING,options:{sources:e}},t)))}r=r.parentNode}}};var s=t(379),a=t.n(s),c=t(669);a()(c.Z,{insert:"head",singleton:!1}),c.Z.locals;const l=t.p+"a27fd60deb1bfb4c8911.jpg";var d=t(501);a()(d.Z,{insert:"head",singleton:!1}),d.Z.locals;var u=t(305);function p(n="div",e="",t=""){const r=document.createElement(n);return r.className=e,r.innerHTML=t,r}a()(u.Z,{insert:"head",singleton:!1}),u.Z.locals;const f=t.p+"e2e56ef7efb88b91d2e8.svg",h=t.p+"80e1589fa8aee5c3e535.svg";class m{constructor(){this.footerEl=document.querySelector("footer")}createRSLink(){const n=p("a");n.setAttribute("href","https://rs.school");const e=p("img");return e.setAttribute("src",h),e.setAttribute("alt","RS School"),n.append(e),n}createGithubLink(){const n=p("a","github-link","Ponomareva-Nina");n.setAttribute("href","https://github.com/Ponomareva-Nina");const e=p("img");return e.setAttribute("src",f),e.setAttribute("alt","Github:"),n.prepend(e),n}createFooter(){const n=this.createRSLink(),e=this.createGithubLink();this.footerEl&&(this.footerEl.prepend(n),this.footerEl.append(e))}}class w{constructor(){this.news=new class{constructor(){this.newsContainer=document.querySelector(".news")}createPlaceholder(){this.newsContainer&&(this.newsContainer.innerHTML="Sorry, this channel have no news for today!")}draw(n){if(0===n.length)return void this.createPlaceholder();const e=n.length>=10?n.filter(((n,e)=>e<10)):n,t=document.createDocumentFragment(),r=document.querySelector("#newsItemTemp");r&&e.forEach(((n,e)=>{var o;const i=r.content.cloneNode(!0);e%2&&(null===(o=i.querySelector(".news__item"))||void 0===o||o.classList.add("alt")),i.querySelector(".news__meta-photo").style.backgroundImage=`url(${n.urlToImage||l})`,i.querySelector(".news__meta-author").textContent=n.author||n.source.name,i.querySelector(".news__meta-date").textContent=n.publishedAt.slice(0,10).split("-").reverse().join("-");const s=i.querySelector(".news__description-title");s&&(s.textContent=n.title),i.querySelector(".news__description-source").textContent=n.source.name,i.querySelector(".news__description-content").textContent=n.description,i.querySelector(".news__read-more a").setAttribute("href",n.url),t.append(i)})),this.newsContainer&&(this.newsContainer.innerHTML="",this.newsContainer.appendChild(t))}},this.sources=new class{constructor(){this.scrollbar=document.querySelector(".scrollbar"),this.currentTranslate="0px"}slideSources(n){var e;const t=document.querySelector(".sources"),r=document.querySelector(".source__item"),o=t.scrollWidth/n,i=Math.floor(t.offsetWidth/r.offsetWidth);if(null===(e=this.scrollbar)||void 0===e||e.setAttribute("max",(n-i).toString()),this.scrollbar){let n="";const e=this.currentTranslate;n=`translateX(-${Number(this.scrollbar.value)*o}px)`;const r=[{transform:e},{transform:n}];t.animate(r,{duration:500}),this.currentTranslate=n,t.style.transform=this.currentTranslate}}draw(n){const e=n.length>=50?n.filter(((n,e)=>e<50)):n,t=document.createDocumentFragment(),r=document.querySelector("#sourceItemTemp");e.forEach((n=>{const e=r.content.cloneNode(!0);e.querySelector(".source__item-name").textContent=n.name,e.querySelector(".source__item").setAttribute("data-source-id",n.id),t.append(e)})),document.querySelector(".sources").append(t),this.scrollbar&&this.scrollbar.addEventListener("input",(()=>{this.slideSources(e.length)})),window.addEventListener("resize",(()=>{this.slideSources(e.length)}))}},this.footer=new m}drawNews(n){const e=(null==n?void 0:n.articles)?null==n?void 0:n.articles:[];this.news.draw(e)}drawSources(n){const e=(null==n?void 0:n.sources)?null==n?void 0:n.sources:[];this.sources.draw(e)}drawFooter(){this.footer.createFooter()}}var g=t(767);a()(g.Z,{insert:"head",singleton:!1}),g.Z.locals,(new class{constructor(){this.controller=new i,this.view=new w}start(){document.querySelector(".sources").addEventListener("click",(n=>this.controller.getNews(n,(n=>{n&&this.view.drawNews(n)})))),this.controller.getSources((n=>{n&&this.view.drawSources(n)})),this.view.drawFooter()}}).start()})()})();