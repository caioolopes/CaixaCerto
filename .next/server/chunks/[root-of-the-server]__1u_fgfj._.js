module.exports=[4950,e=>e.a(async(t,a)=>{try{var r=await e.y("bcryptjs-ee66c2bdc904f2cf");e.n(r),a()}catch(e){a(e)}},!0),8592,e=>e.a(async(t,a)=>{try{var r=e.i(4950),n=t([r]);async function i(e){return await r.default.hash(e,14)}async function s(e,t){return await r.default.compare(e,t)}[r]=n.then?(await n)():n,e.s(["default",0,{hash:i,compare:s}]),a()}catch(e){a(e)}},!1),406,(e,t,a)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},2118,e=>e.a(async(t,a)=>{try{var r=e.i(3516),n=e.i(8592),i=e.i(4932),s=t([r,n]);async function o(e,t){try{let r=await a(e);return await s(t,r.password),r}catch(e){if(e instanceof i.UnauthorizedError)throw new i.UnauthorizedError({cause:e,message:"Dados de autenticação não conferem.",action:"Verifique se os dados enviados estão corretos."});throw e}async function a(e){let t;try{t=await r.default.findOneByEmail(e)}catch(e){if(e instanceof i.NotFoundError)throw new i.UnauthorizedError({cause:e,message:"Email não confere.",action:"Verifique se este dado está correto."});throw e}return t}async function s(e,t){if(!await n.default.compare(e,t))throw new i.UnauthorizedError({cause:Error("Senha não confere."),message:"Senha não confere.",action:"Verifique se este dado está correto."})}}[r,n]=s.then?(await s)():s,e.s(["default",0,{getAuthenticatedUser:o}]),a()}catch(e){a(e)}},!1),3516,e=>e.a(async(t,a)=>{try{var r=e.i(6723),n=e.i(8592),i=e.i(4932),s=t([r,n]);async function o(e){return await t(e);async function t(e){let t=await r.default.query({text:`
        SELECT
          *
        FROM
          users
        WHERE
          id = $1
        LIMIT
          1
        ;`,values:[e]});if(0===t.rowCount)throw new i.NotFoundError({cause:null,message:"O id informado não foi encontrado no sistema.",action:"Verifique se o id está digitado corretamente."});return t.rows[0]}}async function u(e){return await t(e);async function t(e){let t=await r.default.query({text:`
        SELECT
          *
        FROM
          users
        WHERE
          LOWER(username) = LOWER($1)
        LIMIT
          1
        ;`,values:[e]});if(0===t.rowCount)throw new i.NotFoundError({cause:null,message:"O username informado não foi encontrado no sistema.",action:"Verifique se o username está digitado corretamente."});return t.rows[0]}}async function d(e){return await t(e);async function t(e){let t=await r.default.query({text:`
        SELECT
          *
        FROM
          users
        WHERE
          LOWER(email) = LOWER($1)
        LIMIT
          1
        ;`,values:[e]});if(0===t.rowCount)throw new i.NotFoundError({cause:null,message:"O email informado não foi encontrado no sistema.",action:"Verifique se o email está digitado corretamente."});return t.rows[0]}}async function l(e){return await f(e.username),await w(e.email),await m(e),await t(e);async function t(e){return(await r.default.query({text:`
        INSERT INTO
          users (username, email, password)
        VALUES
          ($1, $2, $3)
        RETURNING
          *
        ;`,values:[e.username,e.email,e.password]})).rows[0]}}async function c(e,t){let a=await u(e);"username"in t&&await f(t.username),"email"in t&&await w(t.email),"password"in t&&await m(t);let n={...a,...t};return await i(n);async function i(e){return(await r.default.query({text:`
        UPDATE
          users
        SET
          username = $2,
          email = $3,
          password = $4,
          updated_at = timezone('utc', now())
        WHERE
          id = $1
        RETURNING
          *
      `,values:[e.id,e.username,e.email,e.password]})).rows[0]}}async function f(e){if((await r.default.query({text:`
      SELECT
        username
      FROM
        users
      WHERE
        LOWER(username) = LOWER($1)
      ;`,values:[e]})).rowCount>0)throw new i.ValidationError({cause:null,message:"O username informado já está sendo utilizado.",action:"Utilize outro username para realizar esta operação."})}async function w(e){if((await r.default.query({text:`
      SELECT
        email
      FROM
        users
      WHERE
        LOWER(email) = LOWER($1)
      ;`,values:[e]})).rowCount>0)throw new i.ValidationError({cause:null,message:"O email informado já está sendo utilizado.",action:"Utilize outro email para realizar esta operação."})}async function m(e){let t=await n.default.hash(e.password);e.password=t}[r,n]=s.then?(await s)():s,e.s(["default",0,{create:l,findOneById:o,findOneByUsername:u,findOneByEmail:d,update:c}]),a()}catch(e){a(e)}},!1),191,e=>e.a(async(t,a)=>{try{var r=e.i(6747),n=e.i(9245),i=e.i(4898),s=e.i(2950),o=e.i(2567),u=e.i(7031),d=e.i(1927),l=e.i(6432),c=t([o]);[o]=c.then?(await c)():c;let w=(0,s.hoist)(o,"default"),m=(0,s.hoist)(o,"config"),p=new i.PagesAPIRouteModule({definition:{kind:n.RouteKind.PAGES_API,page:"/api/v1/sessions/index",pathname:"/api/v1/sessions",bundlePath:"",filename:""},userland:o,distDir:".next",relativeProjectDir:""});async function f(e,t,a){a.requestMeta&&(0,l.setRequestMeta)(e,a.requestMeta),p.isDev&&(0,l.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let n="/api/v1/sessions/index";n=n.replace(/\/index$/,"")||"/";let i=await p.prepare(e,t,{srcPage:n});if(!i){t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve());return}let{query:s,params:o,prerenderManifest:c,routerServerContext:f}=i;try{let a,r=e.method||"GET",i=(0,u.getTracer)(),l=i.getActiveScopeSpan(),w=!!(null==f?void 0:f.isWrappedByNextServer),m=p.instrumentationOnRequestError.bind(p),y=async l=>p.render(e,t,{query:{...s,...o},params:o,allowedRevalidateHeaderKeys:[],multiZoneDraftMode:!1,trustHostHeader:!1,previewProps:c.preview,propagateError:!1,dev:p.isDev,page:"/api/v1/sessions/index",internalRevalidate:null==f?void 0:f.revalidate,onError:(...t)=>m(e,...t)}).finally(()=>{if(!l)return;l.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1}),t.statusCode&&t.statusCode>=500&&(l.setStatus({code:u.SpanStatusCode.ERROR}),l.setAttribute("error.type",t.statusCode.toString()));let e=i.getRootSpanAttributes();if(!e)return;if(e.get("next.span_type")!==d.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${e.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let s=e.get("next.route")||n,o=`${r} ${s}`;l.setAttributes({"next.route":s,"http.route":s,"next.span_name":o}),l.updateName(o),a&&a!==l&&(a.setAttribute("http.route",s),a.updateName(o))});w&&l?await y(l):(a=i.getActiveScopeSpan(),await i.withPropagatedContext(e.headers,()=>i.trace(d.BaseServerSpan.handleRequest,{spanName:`${r} ${n}`,kind:u.SpanKind.SERVER,attributes:{"http.method":r,"http.target":e.url}},y),void 0,!w))}catch(e){if(p.isDev)throw e;(0,r.sendError)(t,500,"Internal Server Error")}finally{null==a.waitUntil||a.waitUntil.call(a,Promise.resolve())}}e.s(["config",0,m,"default",0,w,"handler",0,f]),a()}catch(e){a(e)}},!1),2567,e=>e.a(async(t,a)=>{try{var r=e.i(1814),n=e.i(4028),i=e.i(2118),s=e.i(8661),o=t([r,n,i,s]);[r,n,i,s]=o.then?(await o)():o;let l=(0,r.createRouter)();l.post(u),l.delete(d);let c=l.handler(n.default.errorHandlers);async function u(e,t){let a=e.body,r=await i.default.getAuthenticatedUser(a.email,a.password),o=await s.default.create(r.id);return n.default.setSessionCookie(o.token,t),t.status(201).json(o)}async function d(e,t){let a=e.cookies.session_id,r=await s.default.findOneValidByToken(a),i=await s.default.expireById(r.id);return n.default.clearSessionCookie(t),t.status(200).json(i)}e.s(["default",0,c]),a()}catch(e){a(e)}},!1)];

//# sourceMappingURL=%5Broot-of-the-server%5D__1u_fgfj._.js.map