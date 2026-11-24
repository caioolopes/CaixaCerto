import { useEffect, useState } from "react";
import Link from "next/link";
import useSWR from "swr";

interface AuthenticatedUser {
  username: string;
  email: string;
}

interface ApiError extends Error {
  status: number;
  action?: string;
}

async function fetchCurrentUser(url: string): Promise<AuthenticatedUser> {
  const response = await fetch(url);

  if (!response.ok) {
    const errorBody = await response.json();
    const error = new Error(
      errorBody.message || "Não foi possível carregar sua conta.",
    ) as ApiError;
    error.status = response.status;
    error.action = errorBody.action;
    throw error;
  }

  return response.json();
}

export default function DashboardPage() {
  const { data: user, error } = useSWR<AuthenticatedUser, ApiError>(
    "/api/v1/user",
    fetchCurrentUser,
  );
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [themeReady, setThemeReady] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const [logoutError, setLogoutError] = useState("");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("caixacerto-theme");
    if (savedTheme === "dark") setTheme("dark");
    setThemeReady(true);
  }, []);

  useEffect(() => {
    if (!themeReady) return;

    window.localStorage.setItem("caixacerto-theme", theme);
    document.documentElement.dataset.theme = theme;
    document.body.dataset.theme = theme;
  }, [theme, themeReady]);

  useEffect(() => {
    if (error?.status === 401) {
      window.location.replace("/");
    }
  }, [error]);

  async function handleLogout() {
    setLoggingOut(true);
    setLogoutError("");

    try {
      const response = await fetch("/api/v1/sessions", { method: "DELETE" });

      if (!response.ok) {
        const errorBody = await response.json();
        throw new Error(
          errorBody.message || "Não foi possível encerrar sua sessão.",
        );
      }

      window.location.assign("/");
    } catch (logoutFailure) {
      setLogoutError(
        logoutFailure instanceof Error
          ? logoutFailure.message
          : "Não foi possível encerrar sua sessão.",
      );
      setLoggingOut(false);
    }
  }

  if (!user || error?.status === 401) {
    return (
      <main className="dashboard-loading">
        <p>
          {error && error.status !== 401
            ? "Não foi possível carregar sua área inicial."
            : "Carregando sua área inicial..."}
        </p>
        {error && error.status !== 401 && (
          <span>{error.action || error.message}</span>
        )}
        <style>{`
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
        `}</style>
      </main>
    );
  }

  return (
    <main className={`dashboard-shell ${theme === "dark" ? "dark-theme" : ""}`}>
      <header className="dashboard-topbar">
        <Link
          className="dashboard-brand"
          href="/dashboard"
          aria-label="CaixaCerto início"
        >
          <span className="dashboard-brand-mark" aria-hidden="true">
            $
          </span>
          <span>CaixaCerto</span>
        </Link>
        <nav className="dashboard-nav" aria-label="Navegação principal">
          <a href="#visao-geral">Visão geral</a>
          <Link href="/accounts-payable">Contas a pagar</Link>
          <Link href="/accounts-receivable">Contas a receber</Link>
        </nav>
        <div className="dashboard-actions">
          <button
            className="dashboard-theme"
            type="button"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label={`Ativar tema ${theme === "light" ? "escuro" : "claro"}`}
          >
            {theme === "light" ? "Tema escuro" : "Tema claro"}
          </button>
          <button
            className="dashboard-logout"
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
          >
            {loggingOut ? "Saindo..." : "Sair"}
          </button>
        </div>
      </header>

      <section className="dashboard-hero" id="visao-geral">
        <div className="dashboard-hero-copy">
          <p className="dashboard-eyebrow">CAIXACERTO / VISÃO GERAL</p>
          <h1>Seu financeiro, mais claro a cada dia.</h1>
          <p className="dashboard-intro">
            Olá, <strong>{user.username}</strong>. Organize suas contas e tenha
            mais tranquilidade para decidir os próximos passos do seu negócio.
          </p>
          <a className="dashboard-primary-link" href="#recursos">
            Conheça seus recursos <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="dashboard-summary" aria-label="Resumo do CaixaCerto">
          <div className="summary-top">
            <span className="summary-indicator" />
            <span>Seu espaço financeiro</span>
          </div>
          <div className="summary-graphic" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <p>Uma visão organizada começa com cada conta no lugar certo.</p>
          <span className="summary-caption">SIMPLES · SEGURO · SEU</span>
        </div>
      </section>

      <section className="dashboard-welcome">
        <div>
          <p className="dashboard-eyebrow">PRONTO PARA COMEÇAR?</p>
          <h2>Bem-vindo ao seu novo ponto de partida.</h2>
        </div>
        <p>
          Use o CaixaCerto para acompanhar o que entra, planejar o que sai e
          tomar decisões com mais confiança.
        </p>
      </section>

      <section className="dashboard-features" id="recursos">
        <article className="dashboard-feature-card">
          <span className="feature-number">01</span>
          <div className="feature-icon" aria-hidden="true">
            ↓
          </div>
          <h3>Contas a pagar</h3>
          <p>
            Reúna despesas e vencimentos para manter os compromissos do seu
            negócio sempre à vista.
          </p>
        </article>
        <article className="dashboard-feature-card feature-highlight">
          <span className="feature-number">02</span>
          <div className="feature-icon" aria-hidden="true">
            ↑
          </div>
          <h3>Contas a receber</h3>
          <p>
            Acompanhe entradas previstas e recebidas para entender melhor o
            movimento do seu caixa.
          </p>
        </article>
        <article className="dashboard-feature-card">
          <span className="feature-number">03</span>
          <div className="feature-icon" aria-hidden="true">
            ⌁
          </div>
          <h3>Fluxo financeiro</h3>
          <p>
            Tenha uma visão mais clara das movimentações e planeje o crescimento
            da sua empresa.
          </p>
        </article>
      </section>

      <footer className="dashboard-footer">
        <span>Conectado como {user.email}</span>
        <span>Organização precisa para crescer com confiança.</span>
      </footer>

      {logoutError && (
        <div className="dashboard-error" role="alert">
          <span>{logoutError}</span>
          <button
            type="button"
            onClick={() => setLogoutError("")}
            aria-label="Fechar"
          >
            ×
          </button>
        </div>
      )}

      <style>{`
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
      `}</style>
    </main>
  );
}
