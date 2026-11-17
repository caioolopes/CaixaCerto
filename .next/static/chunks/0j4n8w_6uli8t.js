(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1705,(e,r,t)=>{"use strict";t._=function(e){return e&&e.__esModule?e:{default:e}}},2456,(e,r,t)=>{"use strict";function a(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(a=function(e){return e?t:r})(e)}t._=function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a(r);if(t&&t.has(e))return t.get(e);var o={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=n?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(o,i,s):o[i]=e[i]}return o.default=e,t&&t.set(e,o),o}},955,(e,r,t)=>{var a={156:function(e){var r,t,a,o=e.exports={};function n(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}try{r="function"==typeof setTimeout?setTimeout:n}catch(e){r=n}try{t="function"==typeof clearTimeout?clearTimeout:i}catch(e){t=i}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===n||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}var c=[],d=!1,u=-1;function l(){d&&a&&(d=!1,a.length?c=a.concat(c):u=-1,c.length&&f())}function f(){if(!d){var e=s(l);d=!0;for(var r=c.length;r;){for(a=c,c=[];++u<r;)a&&a[u].run();u=-1,r=c.length}a=null,d=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===i||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(r){try{return t.call(null,e)}catch(r){return t.call(this,e)}}}(e)}}function p(e,r){this.fun=e,this.array=r}function h(){}o.nextTick=function(e){var r=Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];c.push(new p(e,r)),1!==c.length||d||s(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var t=o[e]={exports:{}},i=!0;try{a[e](t,t.exports,n),i=!1}finally{i&&delete o[e]}return t.exports}n.ab="/ROOT/node_modules/next/dist/compiled/process/",r.exports=n(156)},461,(e,r,t)=>{"use strict";var a,o;r.exports=(null==(a=e.g.process)?void 0:a.env)&&"object"==typeof(null==(o=e.g.process)?void 0:o.env)?e.g.process:e.r(955)},8805,e=>{e.v(r=>Promise.all(["static/chunks/2l2zj5v8ol-z8.js"].map(r=>e.l(r))).then(()=>r(9466)))},8761,e=>{e.v(r=>Promise.all(["static/chunks/1krqpuia-4ekl.js"].map(r=>e.l(r))).then(()=>r(3594)))},3584,(e,r,t)=>{"use strict";e.i(461),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"HeadManagerContext",{enumerable:!0,get:function(){return a}});let a=e.r(1705)._(e.r(1788)).default.createContext({})},9129,(e,r,t)=>{"use strict";e.i(461),Object.defineProperty(t,"__esModule",{value:!0});var a={DecodeError:function(){return g},MiddlewareNotFoundError:function(){return j},MissingStaticPage:function(){return v},NormalizeError:function(){return x},PageNotFoundError:function(){return y},SP:function(){return m},ST:function(){return b},WEB_VITALS:function(){return n},execOnce:function(){return i},getDisplayName:function(){return l},getLocationOrigin:function(){return d},getURL:function(){return u},isAbsoluteUrl:function(){return c},isResSent:function(){return f},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return w}};for(var o in a)Object.defineProperty(t,o,{enumerable:!0,get:a[o]});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let r,t=!1;return(...a)=>(t||(t=!0,r=e(...a)),r)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,c=e=>{let r=e.charCodeAt(0);return!!(r>=65&&r<=90||r>=97&&r<=122)&&s.test(e)};function d(){let{protocol:e,hostname:r,port:t}=window.location;return`${e}//${r}${t?":"+t:""}`}function u(){let{href:e}=window.location,r=d();return e.substring(r.length)}function l(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let r=e.split("?");return r[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(r[1]?`?${r.slice(1).join("?")}`:"")}async function h(e,r){let t=r.res||r.ctx&&r.ctx.res;if(!e.getInitialProps)return r.ctx&&r.Component?{pageProps:await h(r.Component,r.ctx)}:{};let a=await e.getInitialProps(r);if(t&&f(t))return a;if(!a)throw Object.defineProperty(Error(`"${l(e)}.getInitialProps()" should resolve to an object. But found "${a}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return a}let m="u">typeof performance,b=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class x extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class v extends Error{constructor(e,r){super(),this.message=`Failed to load static file for page: ${e} ${r}`}}class j extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function w(e){return JSON.stringify({message:e.message,stack:e.stack})}},8481,(e,r,t)=>{"use strict";var a=Symbol.for("react.transitional.element");function o(e,r,t){var o=null;if(void 0!==t&&(o=""+t),void 0!==r.key&&(o=""+r.key),"key"in r)for(var n in t={},r)"key"!==n&&(t[n]=r[n]);else t=r;return{$$typeof:a,type:e,key:o,ref:void 0!==(r=t.ref)?r:null,props:t}}t.Fragment=Symbol.for("react.fragment"),t.jsx=o,t.jsxs=o},1398,(e,r,t)=>{"use strict";e.i(461),r.exports=e.r(8481)},1556,(e,r,t)=>{"use strict";var a=e.i(461),o=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),u=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),m=Symbol.iterator,b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,x={};function y(e,r,t){this.props=e,this.context=r,this.refs=x,this.updater=t||b}function v(){}function j(e,r,t){this.props=e,this.context=r,this.refs=x,this.updater=t||b}y.prototype.isReactComponent={},y.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var w=j.prototype=new v;w.constructor=j,g(w,y.prototype),w.isPureReactComponent=!0;var k=Array.isArray,_={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function S(e,r,t,a,n,i){return{$$typeof:o,type:e,key:r,ref:void 0!==(t=i.ref)?t:null,props:i}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var T=/\/+/g;function C(e,r){var t,a;return"object"==typeof e&&null!==e&&null!=e.key?(t=""+e.key,a={"=":"=0",":":"=2"},"$"+t.replace(/[=:]/g,function(e){return a[e]})):r.toString(36)}function O(){}function P(e,r,t){if(null==e)return e;var a=[],i=0;return!function e(r,t,a,i,s){var c,d,u,l=typeof r;("undefined"===l||"boolean"===l)&&(r=null);var f=!1;if(null===r)f=!0;else switch(l){case"bigint":case"string":case"number":f=!0;break;case"object":switch(r.$$typeof){case o:case n:f=!0;break;case h:return e((f=r._init)(r._payload),t,a,i,s)}}if(f)return s=s(r),f=""===i?"."+C(r,0):i,k(s)?(a="",null!=f&&(a=f.replace(T,"$&/")+"/"),e(s,t,a,"",function(e){return e})):null!=s&&(N(s)&&(c=s,d=a+(null==s.key||r&&r.key===s.key?"":(""+s.key).replace(T,"$&/")+"/")+f,s=S(c.type,d,void 0,void 0,void 0,c.props)),t.push(s)),1;f=0;var p=""===i?".":i+":";if(k(r))for(var b=0;b<r.length;b++)l=p+C(i=r[b],b),f+=e(i,t,a,l,s);else if("function"==typeof(b=null===(u=r)||"object"!=typeof u?null:"function"==typeof(u=m&&u[m]||u["@@iterator"])?u:null))for(r=b.call(r),b=0;!(i=r.next()).done;)l=p+C(i=i.value,b++),f+=e(i,t,a,l,s);else if("object"===l){if("function"==typeof r.then)return e(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"==typeof e.status?e.then(O,O):(e.status="pending",e.then(function(r){"pending"===e.status&&(e.status="fulfilled",e.value=r)},function(r){"pending"===e.status&&(e.status="rejected",e.reason=r)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(r),t,a,i,s);throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(t=String(r))?"object with keys {"+Object.keys(r).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return f}(e,a,"","",function(e){return r.call(t,e,i++)}),a}function R(e){if(-1===e._status){var r=e._result;(r=r()).then(function(r){(0===e._status||-1===e._status)&&(e._status=1,e._result=r)},function(r){(0===e._status||-1===e._status)&&(e._status=2,e._result=r)}),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var z="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(r))return}else if("object"==typeof a.default&&"function"==typeof a.default.emit)return void a.default.emit("uncaughtException",e);console.error(e)};function $(){}t.Children={map:P,forEach:function(e,r,t){P(e,function(){r.apply(this,arguments)},t)},count:function(e){var r=0;return P(e,function(){r++}),r},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!N(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=i,t.Profiler=c,t.PureComponent=j,t.StrictMode=s,t.Suspense=f,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_,t.act=function(){throw Error("act(...) is not supported in production builds of React.")},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,r,t){if(null==e)throw Error("The argument must be a React element, but you passed "+e+".");var a=g({},e.props),o=e.key,n=void 0;if(null!=r)for(i in void 0!==r.ref&&(n=void 0),void 0!==r.key&&(o=""+r.key),r)E.call(r,i)&&"key"!==i&&"__self"!==i&&"__source"!==i&&("ref"!==i||void 0!==r.ref)&&(a[i]=r[i]);var i=arguments.length-2;if(1===i)a.children=t;else if(1<i){for(var s=Array(i),c=0;c<i;c++)s[c]=arguments[c+2];a.children=s}return S(e.type,o,void 0,void 0,n,a)},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:d,_context:e},e},t.createElement=function(e,r,t){var a,o={},n=null;if(null!=r)for(a in void 0!==r.key&&(n=""+r.key),r)E.call(r,a)&&"key"!==a&&"__self"!==a&&"__source"!==a&&(o[a]=r[a]);var i=arguments.length-2;if(1===i)o.children=t;else if(1<i){for(var s=Array(i),c=0;c<i;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(a in i=e.defaultProps)void 0===o[a]&&(o[a]=i[a]);return S(e,n,void 0,void 0,null,o)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=N,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,r){return{$$typeof:p,type:e,compare:void 0===r?null:r}},t.startTransition=function(e){var r=_.T,t={};_.T=t;try{var a=e(),o=_.S;null!==o&&o(t,a),"object"==typeof a&&null!==a&&"function"==typeof a.then&&a.then($,z)}catch(e){z(e)}finally{_.T=r}},t.unstable_useCacheRefresh=function(){return _.H.useCacheRefresh()},t.use=function(e){return _.H.use(e)},t.useActionState=function(e,r,t){return _.H.useActionState(e,r,t)},t.useCallback=function(e,r){return _.H.useCallback(e,r)},t.useContext=function(e){return _.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,r){return _.H.useDeferredValue(e,r)},t.useEffect=function(e,r){return _.H.useEffect(e,r)},t.useId=function(){return _.H.useId()},t.useImperativeHandle=function(e,r,t){return _.H.useImperativeHandle(e,r,t)},t.useInsertionEffect=function(e,r){return _.H.useInsertionEffect(e,r)},t.useLayoutEffect=function(e,r){return _.H.useLayoutEffect(e,r)},t.useMemo=function(e,r){return _.H.useMemo(e,r)},t.useOptimistic=function(e,r){return _.H.useOptimistic(e,r)},t.useReducer=function(e,r,t){return _.H.useReducer(e,r,t)},t.useRef=function(e){return _.H.useRef(e)},t.useState=function(e){return _.H.useState(e)},t.useSyncExternalStore=function(e,r,t){return _.H.useSyncExternalStore(e,r,t)},t.useTransition=function(){return _.H.useTransition()},t.version="19.0.0"},1788,(e,r,t)=>{"use strict";e.i(461),r.exports=e.r(1556)},2649,e=>{"use strict";var r=e.i(1398),t=e.i(1788),a=e.i(7874);async function o(e){let r=await fetch(e);if(!r.ok){let e=await r.json(),t=Error(e.message||"Não foi possível carregar sua conta.");throw t.status=r.status,t.action=e.action,t}return r.json()}e.s(["default",0,function(){let{data:e,error:n}=(0,a.default)("/api/v1/user",o),[i,s]=(0,t.useState)("light"),[c,d]=(0,t.useState)(!1),[u,l]=(0,t.useState)(!1),[f,p]=(0,t.useState)("");async function h(){l(!0),p("");try{let e=await fetch("/api/v1/sessions",{method:"DELETE"});if(!e.ok){let r=await e.json();throw Error(r.message||"Não foi possível encerrar sua sessão.")}window.location.assign("/")}catch(e){p(e instanceof Error?e.message:"Não foi possível encerrar sua sessão."),l(!1)}}return((0,t.useEffect)(()=>{"dark"===window.localStorage.getItem("caixacerto-theme")&&s("dark"),d(!0)},[]),(0,t.useEffect)(()=>{c&&(window.localStorage.setItem("caixacerto-theme",i),document.documentElement.dataset.theme=i,document.body.dataset.theme=i)},[i,c]),(0,t.useEffect)(()=>{n?.status===401&&window.location.replace("/")},[n]),e&&n?.status!==401)?(0,r.jsxs)("main",{className:`dashboard-shell ${"dark"===i?"dark-theme":""}`,children:[(0,r.jsxs)("header",{className:"dashboard-topbar",children:[(0,r.jsxs)("a",{className:"dashboard-brand",href:"/dashboard","aria-label":"CaixaCerto início",children:[(0,r.jsx)("span",{className:"dashboard-brand-mark","aria-hidden":"true",children:"$"}),(0,r.jsx)("span",{children:"CaixaCerto"})]}),(0,r.jsxs)("nav",{className:"dashboard-nav","aria-label":"Navegação principal",children:[(0,r.jsx)("a",{href:"#visao-geral",children:"Visão geral"}),(0,r.jsx)("a",{href:"#recursos",children:"Recursos"})]}),(0,r.jsxs)("div",{className:"dashboard-actions",children:[(0,r.jsx)("button",{className:"dashboard-theme",type:"button",onClick:()=>s("light"===i?"dark":"light"),"aria-label":`Ativar tema ${"light"===i?"escuro":"claro"}`,children:"light"===i?"Tema escuro":"Tema claro"}),(0,r.jsx)("button",{className:"dashboard-logout",type:"button",onClick:h,disabled:u,children:u?"Saindo...":"Sair"})]})]}),(0,r.jsxs)("section",{className:"dashboard-hero",id:"visao-geral",children:[(0,r.jsxs)("div",{className:"dashboard-hero-copy",children:[(0,r.jsx)("p",{className:"dashboard-eyebrow",children:"CAIXACERTO / VISÃO GERAL"}),(0,r.jsx)("h1",{children:"Seu financeiro, mais claro a cada dia."}),(0,r.jsxs)("p",{className:"dashboard-intro",children:["Olá, ",(0,r.jsx)("strong",{children:e.username}),". Organize suas contas e tenha mais tranquilidade para decidir os próximos passos do seu negócio."]}),(0,r.jsxs)("a",{className:"dashboard-primary-link",href:"#recursos",children:["Conheça seus recursos ",(0,r.jsx)("span",{"aria-hidden":"true",children:"→"})]})]}),(0,r.jsxs)("div",{className:"dashboard-summary","aria-label":"Resumo do CaixaCerto",children:[(0,r.jsxs)("div",{className:"summary-top",children:[(0,r.jsx)("span",{className:"summary-indicator"}),(0,r.jsx)("span",{children:"Seu espaço financeiro"})]}),(0,r.jsxs)("div",{className:"summary-graphic","aria-hidden":"true",children:[(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{}),(0,r.jsx)("i",{})]}),(0,r.jsx)("p",{children:"Uma visão organizada começa com cada conta no lugar certo."}),(0,r.jsx)("span",{className:"summary-caption",children:"SIMPLES · SEGURO · SEU"})]})]}),(0,r.jsxs)("section",{className:"dashboard-welcome",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"dashboard-eyebrow",children:"PRONTO PARA COMEÇAR?"}),(0,r.jsx)("h2",{children:"Bem-vindo ao seu novo ponto de partida."})]}),(0,r.jsx)("p",{children:"Use o CaixaCerto para acompanhar o que entra, planejar o que sai e tomar decisões com mais confiança."})]}),(0,r.jsxs)("section",{className:"dashboard-features",id:"recursos",children:[(0,r.jsxs)("article",{className:"dashboard-feature-card",children:[(0,r.jsx)("span",{className:"feature-number",children:"01"}),(0,r.jsx)("div",{className:"feature-icon","aria-hidden":"true",children:"↓"}),(0,r.jsx)("h3",{children:"Contas a pagar"}),(0,r.jsx)("p",{children:"Reúna despesas e vencimentos para manter os compromissos do seu negócio sempre à vista."})]}),(0,r.jsxs)("article",{className:"dashboard-feature-card feature-highlight",children:[(0,r.jsx)("span",{className:"feature-number",children:"02"}),(0,r.jsx)("div",{className:"feature-icon","aria-hidden":"true",children:"↑"}),(0,r.jsx)("h3",{children:"Contas a receber"}),(0,r.jsx)("p",{children:"Acompanhe entradas previstas e recebidas para entender melhor o movimento do seu caixa."})]}),(0,r.jsxs)("article",{className:"dashboard-feature-card",children:[(0,r.jsx)("span",{className:"feature-number",children:"03"}),(0,r.jsx)("div",{className:"feature-icon","aria-hidden":"true",children:"⌁"}),(0,r.jsx)("h3",{children:"Fluxo financeiro"}),(0,r.jsx)("p",{children:"Tenha uma visão mais clara das movimentações e planeje o crescimento da sua empresa."})]})]}),(0,r.jsxs)("footer",{className:"dashboard-footer",children:[(0,r.jsxs)("span",{children:["Conectado como ",e.email]}),(0,r.jsx)("span",{children:"Organização precisa para crescer com confiança."})]}),f&&(0,r.jsxs)("div",{className:"dashboard-error",role:"alert",children:[(0,r.jsx)("span",{children:f}),(0,r.jsx)("button",{type:"button",onClick:()=>p(""),"aria-label":"Fechar",children:"×"})]}),(0,r.jsx)("style",{children:`
        * { box-sizing: border-box; }
        body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
        .dashboard-shell {
          min-height: 100vh;
          padding: 0 clamp(24px, 7vw, 104px);
          background: #f8fafc;
          color: #0f172a;
        }
        .dashboard-topbar {
          min-height: 84px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          border-bottom: 1px solid #e2e8f0;
        }
        .dashboard-brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #0f172a;
          font-size: 15px;
          font-weight: 750;
          text-decoration: none;
        }
        .dashboard-brand-mark {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          border: 1px solid #0284c7;
          border-radius: 7px;
          background: #e0f2fe;
          color: #0369a1;
          font-size: 20px;
        }
        .dashboard-nav, .dashboard-actions { display: flex; align-items: center; gap: 24px; }
        .dashboard-nav a {
          color: #64748b;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
        }
        .dashboard-nav a:hover { color: #0284c7; }
        .dashboard-actions { gap: 12px; }
        .dashboard-theme, .dashboard-logout {
          padding: 9px 13px;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          background: transparent;
          color: #475569;
          cursor: pointer;
          font-size: 12px;
          font-weight: 600;
        }
        .dashboard-logout { border-color: #0284c7; color: #0369a1; }
        .dashboard-logout:disabled { cursor: wait; opacity: .65; }
        .dashboard-hero {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(280px, .75fr);
          align-items: center;
          gap: clamp(36px, 8vw, 110px);
          padding: clamp(60px, 9vw, 112px) 0 84px;
        }
        .dashboard-eyebrow {
          margin: 0 0 16px;
          color: #0284c7;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 1.6px;
        }
        .dashboard-hero h1 {
          max-width: 650px;
          margin: 0 0 20px;
          color: #0f172a;
          font-size: clamp(40px, 5.7vw, 68px);
          font-weight: 800;
          letter-spacing: -2px;
          line-height: 1.03;
        }
        .dashboard-intro {
          max-width: 530px;
          margin: 0;
          color: #64748b;
          font-size: 16px;
          line-height: 1.7;
        }
        .dashboard-intro strong { color: #0f172a; }
        .dashboard-primary-link {
          display: inline-flex;
          align-items: center;
          gap: 28px;
          margin-top: 30px;
          padding: 14px 18px;
          border-radius: 6px;
          background: #0284c7;
          color: #fff;
          font-size: 13px;
          font-weight: 650;
          text-decoration: none;
        }
        .dashboard-primary-link:hover { background: #0369a1; }
        .dashboard-summary {
          min-height: 285px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 26px;
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          background: #fff;
          box-shadow: 0 12px 30px rgba(15, 23, 42, .05);
        }
        .summary-top { display: flex; align-items: center; gap: 9px; color: #475569; font-size: 12px; font-weight: 650; }
        .summary-indicator { width: 8px; height: 8px; border-radius: 50%; background: #0284c7; }
        .summary-graphic { height: 110px; display: flex; align-items: end; gap: 9px; padding: 8px 0; border-bottom: 1px solid #e2e8f0; }
        .summary-graphic i { flex: 1; border-radius: 4px 4px 0 0; background: #bae6fd; }
        .summary-graphic i:nth-child(1) { height: 30%; }
        .summary-graphic i:nth-child(2) { height: 48%; }
        .summary-graphic i:nth-child(3) { height: 40%; }
        .summary-graphic i:nth-child(4) { height: 67%; }
        .summary-graphic i:nth-child(5) { height: 58%; }
        .summary-graphic i:nth-child(6) { height: 82%; }
        .summary-graphic i:nth-child(7) { height: 100%; background: #0284c7; }
        .dashboard-summary > p { margin: 14px 0 0; color: #475569; font-size: 13px; line-height: 1.5; }
        .summary-caption { margin-top: 18px; color: #94a3b8; font-size: 9px; font-weight: 700; letter-spacing: 1.4px; }
        .dashboard-welcome {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 32px;
          padding: 30px 0 24px;
          border-top: 1px solid #e2e8f0;
        }
        .dashboard-welcome .dashboard-eyebrow { margin-bottom: 8px; }
        .dashboard-welcome h2 { max-width: 480px; margin: 0; font-size: 25px; letter-spacing: -.6px; }
        .dashboard-welcome > p { max-width: 430px; margin: 0; color: #64748b; font-size: 13px; line-height: 1.6; }
        .dashboard-features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; padding: 18px 0 56px; }
        .dashboard-feature-card {
          position: relative;
          min-height: 220px;
          padding: 22px;
          border: 1px solid #e2e8f0;
          border-radius: 9px;
          background: #fff;
        }
        .dashboard-feature-card.feature-highlight { border-color: #bae6fd; background: #f0f9ff; }
        .feature-number { position: absolute; top: 22px; right: 22px; color: #94a3b8; font-size: 10px; font-weight: 700; }
        .feature-icon { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 7px; background: #e0f2fe; color: #0284c7; font-size: 19px; font-weight: 700; }
        .dashboard-feature-card h3 { margin: 20px 0 8px; font-size: 16px; }
        .dashboard-feature-card p { margin: 0; color: #64748b; font-size: 12px; line-height: 1.6; }
        .dashboard-footer { display: flex; justify-content: space-between; gap: 20px; padding: 18px 0 26px; border-top: 1px solid #e2e8f0; color: #94a3b8; font-size: 10px; }
        .dashboard-error { position: fixed; right: 20px; bottom: 20px; display: flex; gap: 16px; align-items: center; padding: 12px 14px; border: 1px solid #fecdd3; border-radius: 7px; background: #fff1f2; color: #9f1239; font-size: 12px; box-shadow: 0 8px 24px rgba(15, 23, 42, .12); }
        .dashboard-error button { border: 0; background: transparent; color: inherit; cursor: pointer; font-size: 18px; line-height: 1; }
        .dark-theme.dashboard-shell { background: #030712; color: #f8fafc; }
        .dark-theme .dashboard-topbar, .dark-theme .dashboard-footer, .dark-theme .dashboard-welcome { border-color: #1e293b; }
        .dark-theme .dashboard-brand, .dark-theme .dashboard-hero h1, .dark-theme .dashboard-intro strong, .dark-theme .dashboard-welcome h2 { color: #f8fafc; }
        .dark-theme .dashboard-nav a, .dark-theme .dashboard-intro, .dark-theme .dashboard-welcome > p, .dark-theme .dashboard-footer { color: #94a3b8; }
        .dark-theme .dashboard-brand-mark { background: #082f49; color: #38bdf8; }
        .dark-theme .dashboard-theme, .dark-theme .dashboard-logout { border-color: #334155; color: #cbd5e1; }
        .dark-theme .dashboard-logout { border-color: #0284c7; color: #7dd3fc; }
        .dark-theme .dashboard-summary, .dark-theme .dashboard-feature-card { border-color: #1e293b; background: #0b1120; }
        .dark-theme .dashboard-feature-card.feature-highlight { border-color: #075985; background: #082f49; }
        .dark-theme .summary-top, .dark-theme .dashboard-summary > p { color: #cbd5e1; }
        .dark-theme .summary-graphic { border-color: #1e293b; }
        .dark-theme .summary-graphic i { background: #164e63; }
        .dark-theme .summary-graphic i:nth-child(7) { background: #0284c7; }
        .dark-theme .dashboard-feature-card h3 { color: #f8fafc; }
        .dark-theme .dashboard-feature-card p { color: #94a3b8; }
        @media (max-width: 760px) {
          .dashboard-topbar { flex-wrap: wrap; padding: 16px 0; }
          .dashboard-nav { order: 3; width: 100%; gap: 20px; }
          .dashboard-actions { margin-left: auto; }
          .dashboard-hero { grid-template-columns: 1fr; gap: 36px; padding: 58px 0; }
          .dashboard-summary { min-height: 250px; }
          .dashboard-welcome { align-items: start; flex-direction: column; gap: 14px; }
          .dashboard-features { grid-template-columns: 1fr; }
          .dashboard-feature-card { min-height: 190px; }
          .dashboard-footer { flex-direction: column; }
        }
        @media (max-width: 420px) {
          .dashboard-shell { padding-right: 18px; padding-left: 18px; }
          .dashboard-nav { justify-content: space-between; }
          .dashboard-theme, .dashboard-logout { padding: 8px 10px; }
        }
      `})]}):(0,r.jsxs)("main",{className:"dashboard-loading",children:[(0,r.jsx)("p",{children:n&&401!==n.status?"Não foi possível carregar sua área inicial.":"Carregando sua área inicial..."}),n&&401!==n.status&&(0,r.jsx)("span",{children:n.action||n.message}),(0,r.jsx)("style",{children:`
          .dashboard-loading {
            min-height: 100vh;
            display: grid;
            align-content: center;
            justify-items: center;
            gap: 8px;
            padding: 24px;
            background: #f8fafc;
            color: #0f172a;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            text-align: center;
          }
          .dashboard-loading p { margin: 0; font-size: 16px; font-weight: 600; }
          .dashboard-loading span { color: #64748b; font-size: 13px; }
        `})]})}])},3512,(e,r,t)=>{let a="/dashboard";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(2649)]),r.hot&&r.hot.dispose(function(){window.__NEXT_P.push([a])})}]);