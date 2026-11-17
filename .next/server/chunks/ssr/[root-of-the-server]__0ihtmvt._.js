module.exports=[6960,a=>a.a(async(b,c)=>{try{var d=await a.y("swr-42dbc0d3c7d88386");a.n(d),c()}catch(a){c(a)}},!0),4218,a=>a.a(async(b,c)=>{try{var d=a.i(9168),e=a.i(7068),f=a.i(2759),g=a.i(3590),h=a.i(6555),i=a.i(5061),j=a.i(9193),k=b([i]);[i]=k.then?(await k)():k;let l=(0,f.hoist)(i,"default"),m=(0,f.hoist)(i,"getStaticProps"),n=(0,f.hoist)(i,"getStaticPaths"),o=(0,f.hoist)(i,"getServerSideProps"),p=(0,f.hoist)(i,"config"),q=(0,f.hoist)(i,"reportWebVitals"),r=(0,f.hoist)(i,"unstable_getStaticProps"),s=(0,f.hoist)(i,"unstable_getStaticPaths"),t=(0,f.hoist)(i,"unstable_getStaticParams"),u=(0,f.hoist)(i,"unstable_getServerProps"),v=(0,f.hoist)(i,"unstable_getServerSideProps"),w=new d.PagesRouteModule({definition:{kind:e.RouteKind.PAGES,page:"/dashboard/index",pathname:"/dashboard",bundlePath:"",filename:""},distDir:".next",relativeProjectDir:"",components:{App:h.default,Document:g.default},userland:i}),x=(0,j.getHandler)({srcPage:"/dashboard/index",config:p,userland:i,routeModule:w,getStaticPaths:n,getStaticProps:m,getServerSideProps:o});a.s(["config",0,p,"default",0,l,"getServerSideProps",0,o,"getStaticPaths",0,n,"getStaticProps",0,m,"handler",0,x,"reportWebVitals",0,q,"routeModule",0,w,"unstable_getServerProps",0,u,"unstable_getServerSideProps",0,v,"unstable_getStaticParams",0,t,"unstable_getStaticPaths",0,s,"unstable_getStaticProps",0,r]),c()}catch(a){c(a)}},!1),5061,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(7669),f=a.i(6960),g=b([f]);async function h(a){let b=await fetch(a);if(!b.ok){let a=await b.json(),c=Error(a.message||"Não foi possível carregar sua conta.");throw c.status=b.status,c.action=a.action,c}return b.json()}[f]=g.then?(await g)():g,a.s(["default",0,function(){let{data:a,error:b}=(0,f.default)("/api/v1/user",h),[c,g]=(0,e.useState)("light"),[i,j]=(0,e.useState)(!1),[k,l]=(0,e.useState)(!1),[m,n]=(0,e.useState)("");async function o(){l(!0),n("");try{let a=await fetch("/api/v1/sessions",{method:"DELETE"});if(!a.ok){let b=await a.json();throw Error(b.message||"Não foi possível encerrar sua sessão.")}window.location.assign("/")}catch(a){n(a instanceof Error?a.message:"Não foi possível encerrar sua sessão."),l(!1)}}return((0,e.useEffect)(()=>{let a=window.localStorage.getItem("caixacerto-theme");"dark"===a&&g("dark"),j(!0)},[]),(0,e.useEffect)(()=>{i&&(window.localStorage.setItem("caixacerto-theme",c),document.documentElement.dataset.theme=c,document.body.dataset.theme=c)},[c,i]),(0,e.useEffect)(()=>{b?.status===401&&window.location.replace("/")},[b]),a&&b?.status!==401)?(0,d.jsxs)("main",{className:`dashboard-shell ${"dark"===c?"dark-theme":""}`,children:[(0,d.jsxs)("header",{className:"dashboard-topbar",children:[(0,d.jsxs)("a",{className:"dashboard-brand",href:"/dashboard","aria-label":"CaixaCerto início",children:[(0,d.jsx)("span",{className:"dashboard-brand-mark","aria-hidden":"true",children:"$"}),(0,d.jsx)("span",{children:"CaixaCerto"})]}),(0,d.jsxs)("nav",{className:"dashboard-nav","aria-label":"Navegação principal",children:[(0,d.jsx)("a",{href:"#visao-geral",children:"Visão geral"}),(0,d.jsx)("a",{href:"#recursos",children:"Recursos"})]}),(0,d.jsxs)("div",{className:"dashboard-actions",children:[(0,d.jsx)("button",{className:"dashboard-theme",type:"button",onClick:()=>g("light"===c?"dark":"light"),"aria-label":`Ativar tema ${"light"===c?"escuro":"claro"}`,children:"light"===c?"Tema escuro":"Tema claro"}),(0,d.jsx)("button",{className:"dashboard-logout",type:"button",onClick:o,disabled:k,children:k?"Saindo...":"Sair"})]})]}),(0,d.jsxs)("section",{className:"dashboard-hero",id:"visao-geral",children:[(0,d.jsxs)("div",{className:"dashboard-hero-copy",children:[(0,d.jsx)("p",{className:"dashboard-eyebrow",children:"CAIXACERTO / VISÃO GERAL"}),(0,d.jsx)("h1",{children:"Seu financeiro, mais claro a cada dia."}),(0,d.jsxs)("p",{className:"dashboard-intro",children:["Olá, ",(0,d.jsx)("strong",{children:a.username}),". Organize suas contas e tenha mais tranquilidade para decidir os próximos passos do seu negócio."]}),(0,d.jsxs)("a",{className:"dashboard-primary-link",href:"#recursos",children:["Conheça seus recursos ",(0,d.jsx)("span",{"aria-hidden":"true",children:"→"})]})]}),(0,d.jsxs)("div",{className:"dashboard-summary","aria-label":"Resumo do CaixaCerto",children:[(0,d.jsxs)("div",{className:"summary-top",children:[(0,d.jsx)("span",{className:"summary-indicator"}),(0,d.jsx)("span",{children:"Seu espaço financeiro"})]}),(0,d.jsxs)("div",{className:"summary-graphic","aria-hidden":"true",children:[(0,d.jsx)("i",{}),(0,d.jsx)("i",{}),(0,d.jsx)("i",{}),(0,d.jsx)("i",{}),(0,d.jsx)("i",{}),(0,d.jsx)("i",{}),(0,d.jsx)("i",{})]}),(0,d.jsx)("p",{children:"Uma visão organizada começa com cada conta no lugar certo."}),(0,d.jsx)("span",{className:"summary-caption",children:"SIMPLES · SEGURO · SEU"})]})]}),(0,d.jsxs)("section",{className:"dashboard-welcome",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:"dashboard-eyebrow",children:"PRONTO PARA COMEÇAR?"}),(0,d.jsx)("h2",{children:"Bem-vindo ao seu novo ponto de partida."})]}),(0,d.jsx)("p",{children:"Use o CaixaCerto para acompanhar o que entra, planejar o que sai e tomar decisões com mais confiança."})]}),(0,d.jsxs)("section",{className:"dashboard-features",id:"recursos",children:[(0,d.jsxs)("article",{className:"dashboard-feature-card",children:[(0,d.jsx)("span",{className:"feature-number",children:"01"}),(0,d.jsx)("div",{className:"feature-icon","aria-hidden":"true",children:"↓"}),(0,d.jsx)("h3",{children:"Contas a pagar"}),(0,d.jsx)("p",{children:"Reúna despesas e vencimentos para manter os compromissos do seu negócio sempre à vista."})]}),(0,d.jsxs)("article",{className:"dashboard-feature-card feature-highlight",children:[(0,d.jsx)("span",{className:"feature-number",children:"02"}),(0,d.jsx)("div",{className:"feature-icon","aria-hidden":"true",children:"↑"}),(0,d.jsx)("h3",{children:"Contas a receber"}),(0,d.jsx)("p",{children:"Acompanhe entradas previstas e recebidas para entender melhor o movimento do seu caixa."})]}),(0,d.jsxs)("article",{className:"dashboard-feature-card",children:[(0,d.jsx)("span",{className:"feature-number",children:"03"}),(0,d.jsx)("div",{className:"feature-icon","aria-hidden":"true",children:"⌁"}),(0,d.jsx)("h3",{children:"Fluxo financeiro"}),(0,d.jsx)("p",{children:"Tenha uma visão mais clara das movimentações e planeje o crescimento da sua empresa."})]})]}),(0,d.jsxs)("footer",{className:"dashboard-footer",children:[(0,d.jsxs)("span",{children:["Conectado como ",a.email]}),(0,d.jsx)("span",{children:"Organização precisa para crescer com confiança."})]}),m&&(0,d.jsxs)("div",{className:"dashboard-error",role:"alert",children:[(0,d.jsx)("span",{children:m}),(0,d.jsx)("button",{type:"button",onClick:()=>n(""),"aria-label":"Fechar",children:"×"})]}),(0,d.jsx)("style",{children:`
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
      `})]}):(0,d.jsxs)("main",{className:"dashboard-loading",children:[(0,d.jsx)("p",{children:b&&401!==b.status?"Não foi possível carregar sua área inicial.":"Carregando sua área inicial..."}),b&&401!==b.status&&(0,d.jsx)("span",{children:b.action||b.message}),(0,d.jsx)("style",{children:`
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
        `})]})}]),c()}catch(a){c(a)}},!1)];

//# sourceMappingURL=%5Broot-of-the-server%5D__0ihtmvt._.js.map