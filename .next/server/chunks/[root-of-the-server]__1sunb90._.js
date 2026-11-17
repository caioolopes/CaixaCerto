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
        ;`,values:[e]});if(0===t.rowCount)throw new i.NotFoundError({cause:null,message:"O email informado não foi encontrado no sistema.",action:"Verifique se o email está digitado corretamente."});return t.rows[0]}}async function d(e){return await m(e.username),await p(e.email),await w(e),await t(e);async function t(e){return(await r.default.query({text:`
        INSERT INTO
          users (username, email, password)
        VALUES
          ($1, $2, $3)
        RETURNING
          *
        ;`,values:[e.username,e.email,e.password]})).rows[0]}}async function c(e,t){let a=await u(e);"username"in t&&await m(t.username),"email"in t&&await p(t.email),"password"in t&&await w(t);let n={...a,...t};return await i(n);async function i(e){return(await r.default.query({text:`
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
      `,values:[e.id,e.username,e.email,e.password]})).rows[0]}}async function m(e){if((await r.default.query({text:`
      SELECT
        username
      FROM
        users
      WHERE
        LOWER(username) = LOWER($1)
      ;`,values:[e]})).rowCount>0)throw new i.ValidationError({cause:null,message:"O username informado já está sendo utilizado.",action:"Utilize outro username para realizar esta operação."})}async function p(e){if((await r.default.query({text:`
      SELECT
        email
      FROM
        users
      WHERE
        LOWER(email) = LOWER($1)
      ;`,values:[e]})).rowCount>0)throw new i.ValidationError({cause:null,message:"O email informado já está sendo utilizado.",action:"Utilize outro email para realizar esta operação."})}async function w(e){let t=await n.default.hash(e.password);e.password=t}[r,n]=s.then?(await s)():s,e.s(["default",0,{create:d,findOneById:o,findOneByUsername:u,findOneByEmail:l,update:c}]),a()}catch(e){a(e)}},!1),3241,e=>e.a(async(t,a)=>{try{var r=e.i(6747),n=e.i(9245),i=e.i(4898),s=e.i(2950),o=e.i(4137),u=e.i(7031),l=e.i(1927),d=e.i(6432),c=t([o]);[o]=c.then?(await c)():c;let p=(0,s.hoist)(o,"default"),w=(0,s.hoist)(o,"config"),f=new i.PagesAPIRouteModule({definition:{kind:n.RouteKind.PAGES_API,page:"/api/v1/users/[username]/index",pathname:"/api/v1/users/[username]",bundlePath:"",filename:""},userland:o,distDir:".next",relativeProjectDir:""});async function m(e,t,a){a.requestMeta&&(0,d.setRequestMeta)(e,a.requestMeta),f.isDev&&(0,d.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let n="/api/v1/users/[username]/index";n=n.replace(/\/index$/,"")||"/";let i=await f.prepare(e,t,{srcPage:n});if(!i){t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve());return}let{query:s,params:o,prerenderManifest:c,routerServerContext:m}=i;try{let a,r=e.method||"GET",i=(0,u.getTracer)(),d=i.getActiveScopeSpan(),p=!!(null==m?void 0:m.isWrappedByNextServer),w=f.instrumentationOnRequestError.bind(f),y=async d=>f.render(e,t,{query:{...s,...o},params:o,allowedRevalidateHeaderKeys:[],multiZoneDraftMode:!1,trustHostHeader:!1,previewProps:c.preview,propagateError:!1,dev:f.isDev,page:"/api/v1/users/[username]/index",internalRevalidate:null==m?void 0:m.revalidate,onError:(...t)=>w(e,...t)}).finally(()=>{if(!d)return;d.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1}),t.statusCode&&t.statusCode>=500&&(d.setStatus({code:u.SpanStatusCode.ERROR}),d.setAttribute("error.type",t.statusCode.toString()));let e=i.getRootSpanAttributes();if(!e)return;if(e.get("next.span_type")!==l.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${e.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let s=e.get("next.route")||n,o=`${r} ${s}`;d.setAttributes({"next.route":s,"http.route":s,"next.span_name":o}),d.updateName(o),a&&a!==d&&(a.setAttribute("http.route",s),a.updateName(o))});p&&d?await y(d):(a=i.getActiveScopeSpan(),await i.withPropagatedContext(e.headers,()=>i.trace(l.BaseServerSpan.handleRequest,{spanName:`${r} ${n}`,kind:u.SpanKind.SERVER,attributes:{"http.method":r,"http.target":e.url}},y),void 0,!p))}catch(e){if(f.isDev)throw e;(0,r.sendError)(t,500,"Internal Server Error")}finally{null==a.waitUntil||a.waitUntil.call(a,Promise.resolve())}}e.s(["config",0,w,"default",0,p,"handler",0,m]),a()}catch(e){a(e)}},!1),4137,e=>e.a(async(t,a)=>{try{var r=e.i(1814),n=e.i(4028),i=e.i(3516),s=t([r,n,i]);[r,n,i]=s.then?(await s)():s;let l=(0,r.createRouter)();l.get(o),l.patch(u);let d=l.handler(n.default.errorHandlers);async function o(e,t){let a=e.query.username,r=await i.default.findOneByUsername(a);return t.status(200).json(r)}async function u(e,t){let a=e.query.username,r=e.body,n=await i.default.update(a,r);return t.status(200).json(n)}e.s(["default",0,d]),a()}catch(e){a(e)}},!1)];

//# sourceMappingURL=%5Broot-of-the-server%5D__1sunb90._.js.map