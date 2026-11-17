module.exports=[4950,e=>e.a(async(t,a)=>{try{var r=await e.y("bcryptjs-ee66c2bdc904f2cf");e.n(r),a()}catch(e){a(e)}},!0),8592,e=>e.a(async(t,a)=>{try{var r=e.i(4950),n=t([r]);async function i(e){return await r.default.hash(e,14)}async function s(e,t){return await r.default.compare(e,t)}[r]=n.then?(await n)():n,e.s(["default",0,{hash:i,compare:s}]),a()}catch(e){a(e)}},!1),406,(e,t,a)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},3516,e=>e.a(async(t,a)=>{try{var r=e.i(6723),n=e.i(8592),i=e.i(4932),s=t([r,n]);async function o(e){return await t(e);async function t(e){let t=await r.default.query({text:`
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
        ;`,values:[e]});if(0===t.rowCount)throw new i.NotFoundError({cause:null,message:"O username informado não foi encontrado no sistema.",action:"Verifique se o username está digitado corretamente."});return t.rows[0]}}async function l(e){return await t(e);async function t(e){let t=await r.default.query({text:`
        SELECT
          *
        FROM
          users
        WHERE
          LOWER(email) = LOWER($1)
        LIMIT
          1
        ;`,values:[e]});if(0===t.rowCount)throw new i.NotFoundError({cause:null,message:"O email informado não foi encontrado no sistema.",action:"Verifique se o email está digitado corretamente."});return t.rows[0]}}async function d(e){return await w(e.username),await f(e.email),await p(e),await t(e);async function t(e){return(await r.default.query({text:`
        INSERT INTO
          users (username, email, password)
        VALUES
          ($1, $2, $3)
        RETURNING
          *
        ;`,values:[e.username,e.email,e.password]})).rows[0]}}async function c(e,t){let a=await u(e);"username"in t&&await w(t.username),"email"in t&&await f(t.email),"password"in t&&await p(t);let n={...a,...t};return await i(n);async function i(e){return(await r.default.query({text:`
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
      `,values:[e.id,e.username,e.email,e.password]})).rows[0]}}async function w(e){if((await r.default.query({text:`
      SELECT
        username
      FROM
        users
      WHERE
        LOWER(username) = LOWER($1)
      ;`,values:[e]})).rowCount>0)throw new i.ValidationError({cause:null,message:"O username informado já está sendo utilizado.",action:"Utilize outro username para realizar esta operação."})}async function f(e){if((await r.default.query({text:`
      SELECT
        email
      FROM
        users
      WHERE
        LOWER(email) = LOWER($1)
      ;`,values:[e]})).rowCount>0)throw new i.ValidationError({cause:null,message:"O email informado já está sendo utilizado.",action:"Utilize outro email para realizar esta operação."})}async function p(e){let t=await n.default.hash(e.password);e.password=t}[r,n]=s.then?(await s)():s,e.s(["default",0,{create:d,findOneById:o,findOneByUsername:u,findOneByEmail:l,update:c}]),a()}catch(e){a(e)}},!1),161,e=>e.a(async(t,a)=>{try{var r=e.i(6747),n=e.i(9245),i=e.i(4898),s=e.i(2950),o=e.i(3357),u=e.i(7031),l=e.i(1927),d=e.i(6432),c=t([o]);[o]=c.then?(await c)():c;let f=(0,s.hoist)(o,"default"),p=(0,s.hoist)(o,"config"),m=new i.PagesAPIRouteModule({definition:{kind:n.RouteKind.PAGES_API,page:"/api/v1/user/index",pathname:"/api/v1/user",bundlePath:"",filename:""},userland:o,distDir:".next",relativeProjectDir:""});async function w(e,t,a){a.requestMeta&&(0,d.setRequestMeta)(e,a.requestMeta),m.isDev&&(0,d.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let n="/api/v1/user/index";n=n.replace(/\/index$/,"")||"/";let i=await m.prepare(e,t,{srcPage:n});if(!i){t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve());return}let{query:s,params:o,prerenderManifest:c,routerServerContext:w}=i;try{let a,r=e.method||"GET",i=(0,u.getTracer)(),d=i.getActiveScopeSpan(),f=!!(null==w?void 0:w.isWrappedByNextServer),p=m.instrumentationOnRequestError.bind(m),E=async d=>m.render(e,t,{query:{...s,...o},params:o,allowedRevalidateHeaderKeys:[],multiZoneDraftMode:!1,trustHostHeader:!1,previewProps:c.preview,propagateError:!1,dev:m.isDev,page:"/api/v1/user/index",internalRevalidate:null==w?void 0:w.revalidate,onError:(...t)=>p(e,...t)}).finally(()=>{if(!d)return;d.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1}),t.statusCode&&t.statusCode>=500&&(d.setStatus({code:u.SpanStatusCode.ERROR}),d.setAttribute("error.type",t.statusCode.toString()));let e=i.getRootSpanAttributes();if(!e)return;if(e.get("next.span_type")!==l.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${e.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let s=e.get("next.route")||n,o=`${r} ${s}`;d.setAttributes({"next.route":s,"http.route":s,"next.span_name":o}),d.updateName(o),a&&a!==d&&(a.setAttribute("http.route",s),a.updateName(o))});f&&d?await E(d):(a=i.getActiveScopeSpan(),await i.withPropagatedContext(e.headers,()=>i.trace(l.BaseServerSpan.handleRequest,{spanName:`${r} ${n}`,kind:u.SpanKind.SERVER,attributes:{"http.method":r,"http.target":e.url}},E),void 0,!f))}catch(e){if(m.isDev)throw e;(0,r.sendError)(t,500,"Internal Server Error")}finally{null==a.waitUntil||a.waitUntil.call(a,Promise.resolve())}}e.s(["config",0,p,"default",0,f,"handler",0,w]),a()}catch(e){a(e)}},!1),3357,e=>e.a(async(t,a)=>{try{var r=e.i(1814),n=e.i(4028),i=e.i(3516),s=e.i(8661),o=t([r,n,i,s]);[r,n,i,s]=o.then?(await o)():o;let l=(0,r.createRouter)();l.get(u);let d=l.handler(n.default.errorHandlers);async function u(e,t){let a=e.cookies.session_id,r=await s.default.findOneValidByToken(a),o=await s.default.renew(r.id);n.default.setSessionCookie(o.token,t);let u=await i.default.findOneById(r.user_id);return t.setHeader("Cache-Control","no-store, no-cache, max-age=0, must-revalidate"),t.status(200).json(u)}e.s(["default",0,d]),a()}catch(e){a(e)}},!1)];

//# sourceMappingURL=%5Broot-of-the-server%5D__15s9nb2._.js.map