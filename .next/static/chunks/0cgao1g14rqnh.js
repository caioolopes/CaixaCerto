(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1705,(e,t,r)=>{"use strict";r._=function(e){return e&&e.__esModule?e:{default:e}}},2456,(e,t,r)=>{"use strict";function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(n=function(e){return e?r:t})(e)}r._=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=n(t);if(r&&r.has(e))return r.get(e);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=a?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(o,i,s):o[i]=e[i]}return o.default=e,r&&r.set(e,o),o}},955,(e,t,r)=>{var n={156:function(e){var t,r,n,o=e.exports={};function a(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}var c=[],l=!1,u=-1;function d(){l&&n&&(l=!1,n.length?c=n.concat(c):u=-1,c.length&&f())}function f(){if(!l){var e=s(d);l=!0;for(var t=c.length;t;){for(n=c,c=[];++u<t;)n&&n[u].run();u=-1,t=c.length}n=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new p(e,t)),1!==c.length||l||s(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}},i=!0;try{n[e](r,r.exports,a),i=!1}finally{i&&delete o[e]}return r.exports}a.ab="/ROOT/node_modules/next/dist/compiled/process/",t.exports=a(156)},461,(e,t,r)=>{"use strict";var n,o;t.exports=(null==(n=e.g.process)?void 0:n.env)&&"object"==typeof(null==(o=e.g.process)?void 0:o.env)?e.g.process:e.r(955)},8805,e=>{e.v(t=>Promise.all(["static/chunks/2l2zj5v8ol-z8.js"].map(t=>e.l(t))).then(()=>t(9466)))},8761,e=>{e.v(t=>Promise.all(["static/chunks/1krqpuia-4ekl.js"].map(t=>e.l(t))).then(()=>t(3594)))},3584,(e,t,r)=>{"use strict";e.i(461),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"HeadManagerContext",{enumerable:!0,get:function(){return n}});let n=e.r(1705)._(e.r(1788)).default.createContext({})},9129,(e,t,r)=>{"use strict";e.i(461),Object.defineProperty(r,"__esModule",{value:!0});var n={DecodeError:function(){return x},MiddlewareNotFoundError:function(){return k},MissingStaticPage:function(){return v},NormalizeError:function(){return g},PageNotFoundError:function(){return y},SP:function(){return m},ST:function(){return b},WEB_VITALS:function(){return a},execOnce:function(){return i},getDisplayName:function(){return d},getLocationOrigin:function(){return l},getURL:function(){return u},isAbsoluteUrl:function(){return c},isResSent:function(){return f},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return w}};for(var o in n)Object.defineProperty(r,o,{enumerable:!0,get:n[o]});let a=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let t,r=!1;return(...n)=>(r||(r=!0,t=e(...n)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,c=e=>{let t=e.charCodeAt(0);return!!(t>=65&&t<=90||t>=97&&t<=122)&&s.test(e)};function l(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function u(){let{href:e}=window.location,t=l();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&f(r))return n;if(!n)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return n}let m="u">typeof performance,b=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class x extends Error{}class g extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class v extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class k extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function w(e){return JSON.stringify({message:e.message,stack:e.stack})}},8481,(e,t,r)=>{"use strict";var n=Symbol.for("react.transitional.element");function o(e,t,r){var o=null;if(void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),"key"in t)for(var a in r={},t)"key"!==a&&(r[a]=t[a]);else r=t;return{$$typeof:n,type:e,key:o,ref:void 0!==(t=r.ref)?t:null,props:r}}r.Fragment=Symbol.for("react.fragment"),r.jsx=o,r.jsxs=o},1398,(e,t,r)=>{"use strict";e.i(461),t.exports=e.r(8481)},1556,(e,t,r)=>{"use strict";var n=e.i(461),o=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),m=Symbol.iterator,b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,g={};function y(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||b}function v(){}function k(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||b}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var w=k.prototype=new v;w.constructor=k,x(w,y.prototype),w.isPureReactComponent=!0;var j=Array.isArray,E={H:null,A:null,T:null,S:null},_=Object.prototype.hasOwnProperty;function S(e,t,r,n,a,i){return{$$typeof:o,type:e,key:t,ref:void 0!==(r=i.ref)?r:null,props:i}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function T(e,t){var r,n;return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,function(e){return n[e]})):t.toString(36)}function O(){}function P(e,t,r){if(null==e)return e;var n=[],i=0;return!function e(t,r,n,i,s){var c,l,u,d=typeof t;("undefined"===d||"boolean"===d)&&(t=null);var f=!1;if(null===t)f=!0;else switch(d){case"bigint":case"string":case"number":f=!0;break;case"object":switch(t.$$typeof){case o:case a:f=!0;break;case h:return e((f=t._init)(t._payload),r,n,i,s)}}if(f)return s=s(t),f=""===i?"."+T(t,0):i,j(s)?(n="",null!=f&&(n=f.replace(C,"$&/")+"/"),e(s,r,n,"",function(e){return e})):null!=s&&(N(s)&&(c=s,l=n+(null==s.key||t&&t.key===s.key?"":(""+s.key).replace(C,"$&/")+"/")+f,s=S(c.type,l,void 0,void 0,void 0,c.props)),r.push(s)),1;f=0;var p=""===i?".":i+":";if(j(t))for(var b=0;b<t.length;b++)d=p+T(i=t[b],b),f+=e(i,r,n,d,s);else if("function"==typeof(b=null===(u=t)||"object"!=typeof u?null:"function"==typeof(u=m&&u[m]||u["@@iterator"])?u:null))for(t=b.call(t),b=0;!(i=t.next()).done;)d=p+T(i=i.value,b++),f+=e(i,r,n,d,s);else if("object"===d){if("function"==typeof t.then)return e(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"==typeof e.status?e.then(O,O):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(t),r,n,i,s);throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(r=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.")}return f}(e,n,"","",function(e){return t.call(r,e,i++)}),n}function R(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var z="function"==typeof reportError?reportError:function(e){if("object"==typeof window&&"function"==typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"==typeof e&&null!==e&&"string"==typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"==typeof n.default&&"function"==typeof n.default.emit)return void n.default.emit("uncaughtException",e);console.error(e)};function A(){}r.Children={map:P,forEach:function(e,t,r){P(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!N(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=y,r.Fragment=i,r.Profiler=c,r.PureComponent=k,r.StrictMode=s,r.Suspense=f,r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,r.act=function(){throw Error("act(...) is not supported in production builds of React.")},r.cache=function(e){return function(){return e.apply(null,arguments)}},r.cloneElement=function(e,t,r){if(null==e)throw Error("The argument must be a React element, but you passed "+e+".");var n=x({},e.props),o=e.key,a=void 0;if(null!=t)for(i in void 0!==t.ref&&(a=void 0),void 0!==t.key&&(o=""+t.key),t)_.call(t,i)&&"key"!==i&&"__self"!==i&&"__source"!==i&&("ref"!==i||void 0!==t.ref)&&(n[i]=t[i]);var i=arguments.length-2;if(1===i)n.children=r;else if(1<i){for(var s=Array(i),c=0;c<i;c++)s[c]=arguments[c+2];n.children=s}return S(e.type,o,void 0,void 0,a,n)},r.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:l,_context:e},e},r.createElement=function(e,t,r){var n,o={},a=null;if(null!=t)for(n in void 0!==t.key&&(a=""+t.key),t)_.call(t,n)&&"key"!==n&&"__self"!==n&&"__source"!==n&&(o[n]=t[n]);var i=arguments.length-2;if(1===i)o.children=r;else if(1<i){for(var s=Array(i),c=0;c<i;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return S(e,a,void 0,void 0,null,o)},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:d,render:e}},r.isValidElement=N,r.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:R}},r.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},r.startTransition=function(e){var t=E.T,r={};E.T=r;try{var n=e(),o=E.S;null!==o&&o(r,n),"object"==typeof n&&null!==n&&"function"==typeof n.then&&n.then(A,z)}catch(e){z(e)}finally{E.T=t}},r.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},r.use=function(e){return E.H.use(e)},r.useActionState=function(e,t,r){return E.H.useActionState(e,t,r)},r.useCallback=function(e,t){return E.H.useCallback(e,t)},r.useContext=function(e){return E.H.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e,t){return E.H.useDeferredValue(e,t)},r.useEffect=function(e,t){return E.H.useEffect(e,t)},r.useId=function(){return E.H.useId()},r.useImperativeHandle=function(e,t,r){return E.H.useImperativeHandle(e,t,r)},r.useInsertionEffect=function(e,t){return E.H.useInsertionEffect(e,t)},r.useLayoutEffect=function(e,t){return E.H.useLayoutEffect(e,t)},r.useMemo=function(e,t){return E.H.useMemo(e,t)},r.useOptimistic=function(e,t){return E.H.useOptimistic(e,t)},r.useReducer=function(e,t,r){return E.H.useReducer(e,t,r)},r.useRef=function(e){return E.H.useRef(e)},r.useState=function(e){return E.H.useState(e)},r.useSyncExternalStore=function(e,t,r){return E.H.useSyncExternalStore(e,t,r)},r.useTransition=function(){return E.H.useTransition()},r.version="19.0.0"},1788,(e,t,r)=>{"use strict";e.i(461),t.exports=e.r(1556)},3181,e=>{"use strict";var t=e.i(1398),r=e.i(1788);e.s(["default",0,function(){let[e,n]=(0,r.useState)("login"),[o,a]=(0,r.useState)("light"),[i,s]=(0,r.useState)(!1),[c,l]=(0,r.useState)(""),[u,d]=(0,r.useState)(""),[f,p]=(0,r.useState)(""),[h,m]=(0,r.useState)(!1),[b,x]=(0,r.useState)(null);function g(e){n(e),x(null)}async function y(t){t.preventDefault(),m(!0),x(null);let r="login"===e?{email:u,password:f}:{username:c,email:u,password:f};try{let t=await fetch("login"===e?"/api/v1/sessions":"/api/v1/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),o=await t.json();if(!t.ok)throw o;if("login"===e)return void window.location.assign("/dashboard");p(""),n("login"),x({message:"Conta criada com sucesso.",action:"Entre com seu email e senha para acessar o financeiro."})}catch(e){x({message:e.message||"Não foi possível concluir a operação.",action:e.action||"Confira os dados e tente novamente."})}finally{m(!1)}}(0,r.useEffect)(()=>{"dark"===window.localStorage.getItem("caixacerto-theme")&&a("dark"),s(!0)},[]),(0,r.useEffect)(()=>{i&&(window.localStorage.setItem("caixacerto-theme",o),document.documentElement.dataset.theme=o,document.body.dataset.theme=o)},[o,i]);let v="login"===e;return(0,t.jsxs)("main",{className:`auth-shell ${"dark"===o?"dark-theme":""}`,children:[(0,t.jsxs)("section",{className:"intro-panel","aria-label":"Sobre o CaixaCerto",children:[(0,t.jsxs)("div",{className:"topbar",children:[(0,t.jsx)("div",{className:"brand-mark","aria-hidden":"true",children:(0,t.jsx)("span",{children:"$"})}),(0,t.jsxs)("div",{className:"theme-switch","aria-label":"Escolher tema",children:[(0,t.jsx)("button",{className:"light"===o?"active":"",type:"button",onClick:()=>a("light"),"aria-pressed":"light"===o,children:"Tema claro"}),(0,t.jsx)("button",{className:"dark"===o?"active":"",type:"button",onClick:()=>a("dark"),"aria-pressed":"dark"===o,children:"Tema escuro"})]})]}),(0,t.jsxs)("div",{className:"hero-block",children:[(0,t.jsx)("p",{className:"eyebrow",children:"CAIXACERTO / GESTÃO FINANCEIRA"}),(0,t.jsx)("h1",{children:"O controle total do seu caixa."}),(0,t.jsx)("p",{className:"intro-copy",children:"Contas a pagar, contas a receber e previsibilidade de fluxo de caixa em uma plataforma segura e intuitiva."}),(0,t.jsxs)("div",{className:"features-card",children:[(0,t.jsx)("p",{className:"eyebrow",children:"GESTÃO EMPRESARIAL INTEGRADA"}),(0,t.jsx)("h2",{children:"Mantenha as contas em dia."}),(0,t.jsxs)("div",{className:"features-list",children:[(0,t.jsxs)("div",{className:"feature-item",children:[(0,t.jsx)("span",{className:"dot"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Contas a Receber:"})," Acompanhe faturas, prazos e baixas em tempo real."]})]}),(0,t.jsxs)("div",{className:"feature-item",children:[(0,t.jsx)("span",{className:"dot"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"Contas a Pagar:"})," Elimine juros por atraso e organize despesas fixas e variáveis."]})]}),(0,t.jsxs)("div",{className:"feature-item",children:[(0,t.jsx)("span",{className:"dot"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("strong",{children:"DRE e Fluxo:"})," Visualize relatórios analíticos de lucratividade e liquidez."]})]})]})]})]}),(0,t.jsxs)("div",{className:"footer-intro",children:[(0,t.jsxs)("div",{className:"signal-line","aria-hidden":"true",children:[(0,t.jsx)("i",{}),(0,t.jsx)("i",{}),(0,t.jsx)("i",{}),(0,t.jsx)("i",{}),(0,t.jsx)("i",{})]}),(0,t.jsx)("p",{className:"panel-note",children:"Organização precisa para empresas que buscam crescimento sustentável."})]})]}),(0,t.jsx)("section",{className:"form-panel",children:(0,t.jsxs)("div",{className:"form-wrap",children:[(0,t.jsxs)("div",{className:"form-heading",children:[(0,t.jsx)("p",{className:"eyebrow",children:"ACESSO SEGURO"}),(0,t.jsx)("h2",{children:v?"Bem-vindo de volta.":"Comece agora."}),(0,t.jsx)("p",{children:v?"Entre para gerenciar o caixa da sua empresa.":"Crie sua conta corporativa e assuma o controle financeiro."})]}),!v&&(0,t.jsxs)("div",{className:"register-benefits",children:[(0,t.jsx)("p",{className:"benefits-title",children:"Com o CaixaCerto você pode:"}),(0,t.jsxs)("span",{children:[(0,t.jsx)("b",{children:"01"})," Controlar entradas e saídas sem planilhas complexas"]}),(0,t.jsxs)("span",{children:[(0,t.jsx)("b",{children:"02"})," Monitorar inadimplência e vencimentos futuros"]}),(0,t.jsxs)("span",{children:[(0,t.jsx)("b",{children:"03"})," Tomar decisões seguras com base em relatórios reais"]})]}),(0,t.jsxs)("div",{className:"mode-switch",role:"tablist","aria-label":"Tipo de acesso",children:[(0,t.jsx)("button",{className:v?"active":"",onClick:()=>g("login"),role:"tab","aria-selected":v,type:"button",children:"Entrar"}),(0,t.jsx)("button",{className:v?"":"active",onClick:()=>g("register"),role:"tab","aria-selected":!v,type:"button",children:"Criar conta"})]}),(0,t.jsxs)("form",{onSubmit:y,className:"auth-form",children:[!v&&(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:"Nome de usuário"}),(0,t.jsx)("input",{autoComplete:"username",value:c,onChange:e=>l(e.target.value),placeholder:"seu_usuario",required:!0})]}),(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:"Email corporativo"}),(0,t.jsx)("input",{type:"email",autoComplete:"email",value:u,onChange:e=>d(e.target.value),placeholder:"voce@empresa.com.br",required:!0})]}),(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:"Senha"}),(0,t.jsx)("input",{type:"password",autoComplete:v?"current-password":"new-password",value:f,onChange:e=>p(e.target.value),placeholder:"••••••••",minLength:6,required:!0})]}),v&&(0,t.jsx)("a",{className:"forgot-link",href:"/esqueci-minha-senha",children:"Esqueci minha senha"}),b&&(0,t.jsxs)("div",{className:`feedback ${"Conta criada com sucesso."===b.message?"success":"error"}`,role:"alert",children:[(0,t.jsx)("strong",{children:b.message}),(0,t.jsx)("span",{children:b.action})]}),(0,t.jsxs)("button",{className:"submit-button",type:"submit",disabled:h,children:[h?"Processando...":v?"Entrar no sistema":"Criar minha conta",(0,t.jsx)("span",{"aria-hidden":"true",children:"→"})]})]}),(0,t.jsx)("p",{className:"legal-copy",children:"Seus dados financeiros protegidos com criptografia de ponta a ponta."})]})}),(0,t.jsx)("style",{children:`
        * { box-sizing: border-box; }
        body { margin: 0; background: #f8fafc; color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
        button, input { font: inherit; }

        /* Estrutura principal */
        .auth-shell {
          min-height: 100vh;
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(420px, 0.9fr);
          background: #f8fafc;
        }

        /* Painel Esquerdo (Apresenta\xe7\xe3o CaixaCerto) */
        .intro-panel {
          padding: clamp(32px, 6vw, 80px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 100vh;
          border-right: 1px solid #e2e8f0;
          background: #f1f5f9;
        }

        .topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .brand-mark {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          border: 1px solid #0284c7;
          border-radius: 8px;
          background: #e0f2fe;
          color: #0369a1;
          font-size: 24px;
          font-weight: 700;
          line-height: 1;
        }

        .theme-switch {
          display: flex;
          gap: 3px;
          padding: 3px;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          background: #e2e8f0;
        }

        .theme-switch button {
          padding: 6px 12px;
          border: 0;
          border-radius: 4px;
          background: transparent;
          color: #64748b;
          cursor: pointer;
          font-size: 11px;
          font-weight: 600;
        }

        .theme-switch button.active {
          background: #ffffff;
          color: #0f172a;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
        }

        .hero-block {
          margin: 40px 0;
        }

        .eyebrow {
          margin: 0 0 12px;
          color: #0284c7;
          font-size: 11px;
          letter-spacing: 1.5px;
          font-weight: 700;
        }

        h1, h2, p { margin-top: 0; }

        h1 {
          max-width: 580px;
          margin-bottom: 20px;
          font-size: clamp(38px, 5vw, 64px);
          line-height: 1.05;
          letter-spacing: -1.5px;
          font-weight: 800;
          color: #0f172a;
        }

        .intro-copy {
          max-width: 460px;
          color: #475569;
          font-size: 17px;
          line-height: 1.6;
        }

        .features-card {
          max-width: 520px;
          margin-top: 32px;
          padding: 24px;
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }

        .features-card h2 {
          margin: 6px 0 16px;
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
        }

        .features-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          color: #475569;
          line-height: 1.4;
        }

        .feature-item strong {
          color: #0f172a;
        }

        .feature-item .dot {
          width: 8px;
          height: 8px;
          margin-top: 5px;
          border-radius: 50%;
          background: #0284c7;
          flex-shrink: 0;
        }

        .footer-intro {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .signal-line {
          display: flex;
          align-items: end;
          gap: 5px;
          height: 32px;
        }

        .signal-line i {
          display: block;
          width: 5px;
          background: #0284c7;
          border-radius: 2px;
          animation: pulse 1.8s ease-in-out infinite;
        }

        .signal-line i:nth-child(1) { height: 14px; animation-delay: .1s; }
        .signal-line i:nth-child(2) { height: 24px; animation-delay: .25s; }
        .signal-line i:nth-child(3) { height: 32px; animation-delay: .4s; }
        .signal-line i:nth-child(4) { height: 20px; animation-delay: .55s; }
        .signal-line i:nth-child(5) { height: 28px; animation-delay: .7s; }

        .panel-note, .legal-copy {
          color: #64748b;
          font-size: 12px;
          line-height: 1.5;
        }

        /* Painel Direito (Formul\xe1rio) */
        .form-panel {
          display: grid;
          place-items: center;
          padding: 48px clamp(24px, 6vw, 90px);
          background: #ffffff;
        }

        .form-wrap {
          width: min(100%, 390px);
        }

        .form-heading h2 {
          margin: 10px 0 8px;
          font-size: 32px;
          font-weight: 700;
          letter-spacing: -0.5px;
          color: #0f172a;
        }

        .form-heading > p:last-child {
          color: #64748b;
          font-size: 14px;
          line-height: 1.5;
        }

        .register-benefits {
          display: grid;
          gap: 8px;
          margin-top: 20px;
          padding: 14px 0 2px;
          border-top: 1px solid #e2e8f0;
          color: #64748b;
          font-size: 12px;
          line-height: 1.4;
        }

        .benefits-title {
          margin: 0 0 2px;
          color: #0f172a;
          font-size: 12px;
          font-weight: 700;
        }

        .register-benefits span {
          display: flex;
          gap: 10px;
          align-items: baseline;
        }

        .register-benefits b {
          min-width: 18px;
          color: #0284c7;
          font-size: 11px;
        }

        .mode-switch {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4px;
          margin: 28px 0 24px;
          padding: 4px;
          border-radius: 8px;
          background: #f1f5f9;
        }

        .mode-switch button {
          padding: 10px;
          border: 0;
          border-radius: 6px;
          color: #64748b;
          background: transparent;
          cursor: pointer;
          font-size: 13px;
          font-weight: 600;
          transition: all 0.2s;
        }

        .mode-switch button.active {
          background: #ffffff;
          color: #0f172a;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08), inset 0 -2px #0284c7;
        }

        .auth-form {
          display: grid;
          gap: 16px;
        }

        label {
          display: grid;
          gap: 6px;
        }

        label span {
          color: #475569;
          font-size: 13px;
          font-weight: 500;
        }

        input {
          width: 100%;
          padding: 13px 14px;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          outline: 0;
          background: #f8fafc;
          color: #0f172a;
          font-size: 14px;
          transition: border-color .2s, box-shadow .2s;
        }

        input::placeholder {
          color: #94a3b8;
        }

        input:focus {
          border-color: #0284c7;
          box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);
        }

        .feedback {
          display: grid;
          gap: 4px;
          padding: 12px 14px;
          border: 1px solid #fecdd3;
          border-left: 3px solid #e11d48;
          border-radius: 6px;
          background: #fff1f2;
          color: #9f1239;
          font-size: 12px;
          line-height: 1.4;
        }

        .feedback.success {
          border-color: #bbf7d0;
          border-left-color: #16a34a;
          background: #f0fdf4;
          color: #166534;
        }

        .feedback span {
          color: #64748b;
        }

        .forgot-link {
          justify-self: end;
          margin-top: -6px;
          color: #0284c7;
          font-size: 12px;
          font-weight: 500;
          text-decoration: none;
        }

        .forgot-link:hover {
          text-decoration: underline;
        }

        .submit-button {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 6px;
          padding: 14px 18px;
          border: 0;
          border-radius: 6px;
          background: #0284c7;
          color: #ffffff;
          cursor: pointer;
          font-weight: 600;
          font-size: 14px;
          transition: background .2s;
        }

        .submit-button:hover:not(:disabled) {
          background: #0369a1;
        }

        .submit-button:disabled {
          cursor: wait;
          opacity: .65;
        }

        .legal-copy {
          margin: 24px 0 0;
          text-align: center;
        }

        /* ---------------- TEMA ESCURO ---------------- */
        .dark-theme {
          background: #030712;
          color: #f8fafc;
        }

        .dark-theme .intro-panel {
          border-color: #1e293b;
          background: #0b1120;
        }

        .dark-theme h1,
        .dark-theme .features-card h2,
        .dark-theme .form-heading h2,
        .dark-theme .benefits-title {
          color: #f8fafc;
        }

        .dark-theme .intro-copy {
          color: #94a3b8;
        }

        .dark-theme .features-card {
          border-color: #1e293b;
          background: #0f172a;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .dark-theme .feature-item {
          color: #94a3b8;
        }

        .dark-theme .feature-item strong {
          color: #f8fafc;
        }

        .dark-theme .brand-mark {
          border-color: #0284c7;
          background: #082f49;
          color: #38bdf8;
        }

        .dark-theme .form-panel {
          background: #030712;
        }

        .dark-theme input {
          border-color: #1e293b;
          background: #0b1120;
          color: #f8fafc;
        }

        .dark-theme input::placeholder {
          color: #475569;
        }

        .dark-theme label span {
          color: #94a3b8;
        }

        .dark-theme .form-heading > p:last-child,
        .dark-theme .register-benefits,
        .dark-theme .panel-note,
        .dark-theme .legal-copy {
          color: #64748b;
        }

        .dark-theme .register-benefits {
          border-color: #1e293b;
        }

        .dark-theme .mode-switch {
          background: #0f172a;
        }

        .dark-theme .mode-switch button {
          color: #94a3b8;
        }

        .dark-theme .mode-switch button.active {
          background: #1e293b;
          color: #ffffff;
          box-shadow: inset 0 -2px #38bdf8;
        }

        .dark-theme .theme-switch {
          border-color: #1e293b;
          background: #0f172a;
        }

        .dark-theme .theme-switch button {
          color: #94a3b8;
        }

        .dark-theme .theme-switch button.active {
          background: #1e293b;
          color: #ffffff;
        }

        .dark-theme .feedback {
          background: #4c0519;
          border-color: #9f1239;
          color: #fecdd3;
        }

        .dark-theme .feedback.success {
          background: #052e16;
          border-color: #166534;
          color: #bbf7d0;
        }

        @keyframes pulse {
          0%, 100% { opacity: .4; transform: scaleY(.7); }
          50% { opacity: 1; transform: scaleY(1); }
        }

        @media (max-width: 860px) {
          .auth-shell { display: block; }
          .intro-panel {
            min-height: auto;
            padding: 32px 24px 48px;
            border-right: 0;
            border-bottom: 1px solid #e2e8f0;
          }
          .dark-theme .intro-panel {
            border-bottom-color: #1e293b;
          }
          h1 { font-size: clamp(34px, 8vw, 48px); }
          .form-panel { padding: 48px 24px 60px; }
        }
      `})]})}])},9675,(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",()=>e.r(3181)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push(["/"])})}]);