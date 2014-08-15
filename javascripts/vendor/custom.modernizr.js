window.Modernizr=function(t,e,n){function i(t){p.cssText=t}function r(t,e){return typeof t===e}var a,s,o,c="2.6.2",h={},u=!0,l=e.documentElement,f="modernizr",d=e.createElement(f),p=d.style,m={}.toString,g=" -webkit- -moz- -o- -ms- ".split(" "),v={svg:"http://www.w3.org/2000/svg"},y={},w=[],k=w.slice,x=function(t,n,i,r){var a,s,o,c,h=e.createElement("div"),u=e.body,d=u||e.createElement("body");if(parseInt(i,10))for(;i--;)o=e.createElement("div"),o.id=r?r[i]:f+(i+1),h.appendChild(o);return a=["&#173;",'<style id="s',f,'">',t,"</style>"].join(""),h.id=f,(u?h:d).innerHTML+=a,d.appendChild(h),u||(d.style.background="",d.style.overflow="hidden",c=l.style.overflow,l.style.overflow="hidden",l.appendChild(d)),s=n(h,t),u?h.parentNode.removeChild(h):(d.parentNode.removeChild(d),l.style.overflow=c),!!s},b=function(e){var n=t.matchMedia||t.msMatchMedia;if(n)return n(e).matches;var i;return x("@media "+e+" { #"+f+" { position: absolute; } }",function(e){i="absolute"==(t.getComputedStyle?getComputedStyle(e,null):e.currentStyle).position}),i},R={}.hasOwnProperty;o=r(R,"undefined")||r(R.call,"undefined")?function(t,e){return e in t&&r(t.constructor.prototype[e],"undefined")}:function(t,e){return R.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=k.call(arguments,1),i=function(){if(this instanceof i){var r=function(){};r.prototype=e.prototype;var a=new r,s=e.apply(a,n.concat(k.call(arguments)));return Object(s)===s?s:a}return e.apply(t,n.concat(k.call(arguments)))};return i}),y.touch=function(){var n;return"ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch?n=!0:x(["@media (",g.join("touch-enabled),("),f,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){n=9===t.offsetTop}),n},y.svg=function(){return!!e.createElementNS&&!!e.createElementNS(v.svg,"svg").createSVGRect},y.inlinesvg=function(){var t=e.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==v.svg},y.svgclippaths=function(){return!!e.createElementNS&&/SVGClipPath/.test(m.call(e.createElementNS(v.svg,"clipPath")))};for(var E in y)o(y,E)&&(s=E.toLowerCase(),h[s]=y[E](),w.push((h[s]?"":"no-")+s));return h.addTest=function(t,e){if("object"==typeof t)for(var i in t)o(t,i)&&h.addTest(i,t[i]);else{if(t=t.toLowerCase(),h[t]!==n)return h;e="function"==typeof e?e():e,"undefined"!=typeof u&&u&&(l.className+=" "+(e?"":"no-")+t),h[t]=e}return h},i(""),d=a=null,function(t,e){function n(t,e){var n=t.createElement("p"),i=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var t=v.elements;return"string"==typeof t?t.split(" "):t}function r(t){var e=g[t[p]];return e||(e={},m++,t[p]=m,g[m]=e),e}function a(t,n,i){if(n||(n=e),u)return n.createElement(t);i||(i=r(n));var a;return a=i.cache[t]?i.cache[t].cloneNode():d.test(t)?(i.cache[t]=i.createElem(t)).cloneNode():i.createElem(t),a.canHaveChildren&&!f.test(t)?i.frag.appendChild(a):a}function s(t,n){if(t||(t=e),u)return t.createDocumentFragment();n=n||r(t);for(var a=n.frag.cloneNode(),s=0,o=i(),c=o.length;c>s;s++)a.createElement(o[s]);return a}function o(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return v.shivMethods?a(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/\w+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(v,e.frag)}function c(t){t||(t=e);var i=r(t);return v.shivCSS&&!h&&!i.hasCSS&&(i.hasCSS=!!n(t,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),u||o(t,i),t}var h,u,l=t.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,d=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",m=0,g={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",h="hidden"in t,u=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(n){h=!0,u=!0}}();var v={elements:l.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:l.shivCSS!==!1,supportsUnknownElements:u,shivMethods:l.shivMethods!==!1,type:"default",shivDocument:c,createElement:a,createDocumentFragment:s};t.html5=v,c(e)}(this,e),h._version=c,h._prefixes=g,h.mq=b,h.testStyles=x,l.className=l.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(u?" js "+w.join(" "):""),h}(this,this.document),function(t,e,n){function i(t){return"[object Function]"==g.call(t)}function r(t){return"string"==typeof t}function a(){}function s(t){return!t||"loaded"==t||"complete"==t||"uninitialized"==t}function o(){var t=v.shift();y=1,t?t.t?p(function(){("c"==t.t?f.injectCss:f.injectJs)(t.s,0,t.a,t.x,t.e,1)},0):(t(),o()):y=0}function c(t,n,i,r,a,c,h){function u(e){if(!d&&s(l.readyState)&&(w.r=d=1,!y&&o(),l.onload=l.onreadystatechange=null,e)){"img"!=t&&p(function(){x.removeChild(l)},50);for(var i in T[n])T[n].hasOwnProperty(i)&&T[n][i].onload()}}var h=h||f.errorTimeout,l=e.createElement(t),d=0,g=0,w={t:i,s:n,e:a,a:c,x:h};1===T[n]&&(g=1,T[n]=[]),"object"==t?l.data=n:(l.src=n,l.type=t),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){u.call(this,g)},v.splice(r,0,w),"img"!=t&&(g||2===T[n]?(x.insertBefore(l,k?null:m),p(u,h)):T[n].push(l))}function h(t,e,n,i,a){return y=0,e=e||"j",r(t)?c("c"==e?R:b,t,e,this.i++,n,i,a):(v.splice(this.i++,0,t),1==v.length&&o()),this}function u(){var t=f;return t.loader={load:h,i:0},t}var l,f,d=e.documentElement,p=t.setTimeout,m=e.getElementsByTagName("script")[0],g={}.toString,v=[],y=0,w="MozAppearance"in d.style,k=w&&!!e.createRange().compareNode,x=k?d:m.parentNode,d=t.opera&&"[object Opera]"==g.call(t.opera),d=!!e.attachEvent&&!d,b=w?"object":d?"script":"img",R=d?"script":b,E=Array.isArray||function(t){return"[object Array]"==g.call(t)},S=[],T={},C={timeout:function(t,e){return e.length&&(t.timeout=e[0]),t}};f=function(t){function e(t){var e,n,i,t=t.split("!"),r=S.length,a=t.pop(),s=t.length,a={url:a,origUrl:a,prefixes:t};for(n=0;s>n;n++)i=t[n].split("="),(e=C[i.shift()])&&(a=e(a,i));for(n=0;r>n;n++)a=S[n](a);return a}function s(t,r,a,s,o){var c=e(t),h=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(r&&(r=i(r)?r:r[t]||r[s]||r[t.split("/").pop().split("?")[0]]),c.instead?c.instead(t,r,a,s,o):(T[c.url]?c.noexec=!0:T[c.url]=1,a.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":n,c.noexec,c.attrs,c.timeout),(i(r)||i(h))&&a.load(function(){u(),r&&r(c.origUrl,o,s),h&&h(c.origUrl,o,s),T[c.url]=2})))}function o(t,e){function n(t,n){if(t){if(r(t))n||(l=function(){var t=[].slice.call(arguments);f.apply(this,t),d()}),s(t,l,e,0,h);else if(Object(t)===t)for(c in o=function(){var e,n=0;for(e in t)t.hasOwnProperty(e)&&n++;return n}(),t)t.hasOwnProperty(c)&&(!n&&!--o&&(i(l)?l=function(){var t=[].slice.call(arguments);f.apply(this,t),d()}:l[c]=function(t){return function(){var e=[].slice.call(arguments);t&&t.apply(this,e),d()}}(f[c])),s(t[c],l,e,c,h))}else!n&&d()}var o,c,h=!!t.test,u=t.load||t.both,l=t.callback||a,f=l,d=t.complete||a;n(h?t.yep:t.nope,!!u),u&&n(u)}var c,h,l=this.yepnope.loader;if(r(t))s(t,0,l,0);else if(E(t))for(c=0;c<t.length;c++)h=t[c],r(h)?s(h,0,l,0):E(h)?f(h):Object(h)===h&&o(h,l);else Object(t)===t&&o(t,l)},f.addPrefix=function(t,e){C[t]=e},f.addFilter=function(t){S.push(t)},f.errorTimeout=1e4,null==e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",l=function(){e.removeEventListener("DOMContentLoaded",l,0),e.readyState="complete"},0)),t.yepnope=u(),t.yepnope.executeStack=o,t.yepnope.injectJs=function(t,n,i,r,c,h){var u,l,d=e.createElement("script"),r=r||f.errorTimeout;d.src=t;for(l in i)d.setAttribute(l,i[l]);n=h?o:n||a,d.onreadystatechange=d.onload=function(){!u&&s(d.readyState)&&(u=1,n(),d.onload=d.onreadystatechange=null)},p(function(){u||(u=1,n(1))},r),c?d.onload():m.parentNode.insertBefore(d,m)},t.yepnope.injectCss=function(t,n,i,r,s,c){var h,r=e.createElement("link"),n=c?o:n||a;r.href=t,r.rel="stylesheet",r.type="text/css";for(h in i)r.setAttribute(h,i[h]);s||(m.parentNode.insertBefore(r,m),p(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("ie8compat",function(){return!window.addEventListener&&document.documentMode&&7===document.documentMode});