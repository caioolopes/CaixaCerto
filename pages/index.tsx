import { FormEvent, useEffect, useState } from "react";

type AuthMode = "login" | "register";
type Theme = "light" | "dark";

interface ApiError {
  message?: string;
  action?: string;
}

export default function HomePage() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [theme, setTheme] = useState<Theme>("light");
  const [themeReady, setThemeReady] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<ApiError | null>(null);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("caixacerto-theme");

    if (savedTheme === "dark") {
      setTheme("dark");
    }

    setThemeReady(true);
  }, []);

  useEffect(() => {
    if (!themeReady) return;

    window.localStorage.setItem("caixacerto-theme", theme);
    document.documentElement.dataset.theme = theme;
    document.body.dataset.theme = theme;
  }, [theme, themeReady]);

  function changeMode(nextMode: AuthMode) {
    setMode(nextMode);
    setFeedback(null);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setFeedback(null);

    const endpoint = mode === "login" ? "/api/v1/sessions" : "/api/v1/users";
    const body =
      mode === "login"
        ? { email, password }
        : { username, email, password };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const responseBody = (await response.json()) as ApiError;

      if (!response.ok) {
        throw responseBody;
      }

      if (mode === "login") {
        window.location.assign("/dashboard");
        return;
      }

      setPassword("");
      setMode("login");
      setFeedback({
        message: "Conta criada com sucesso.",
        action: "Entre com seu email e senha para acessar o financeiro.",
      });
    } catch (error) {
      const apiError = error as ApiError;
      setFeedback({
        message: apiError.message || "Não foi possível concluir a operação.",
        action: apiError.action || "Confira os dados e tente novamente.",
      });
    } finally {
      setLoading(false);
    }
  }

  const isLogin = mode === "login";

  return (
    <main className={`auth-shell ${theme === "dark" ? "dark-theme" : ""}`}>
      <section className="intro-panel" aria-label="Sobre o CaixaCerto">
        <div className="topbar">
          <div className="brand-mark" aria-hidden="true">
            <span>$</span>
          </div>
          <div className="theme-switch" aria-label="Escolher tema">
            <button
              className={theme === "light" ? "active" : ""}
              type="button"
              onClick={() => setTheme("light")}
              aria-pressed={theme === "light"}
            >
              Tema claro
            </button>
            <button
              className={theme === "dark" ? "active" : ""}
              type="button"
              onClick={() => setTheme("dark")}
              aria-pressed={theme === "dark"}
            >
              Tema escuro
            </button>
          </div>
        </div>

        <div className="hero-block">
          <p className="eyebrow">CAIXACERTO / GESTÃO FINANCEIRA</p>
          <h1>O controle total do seu caixa.</h1>
          <p className="intro-copy">
            Contas a pagar, contas a receber e previsibilidade de fluxo de caixa
            em uma plataforma segura e intuitiva.
          </p>

          <div className="features-card">
            <p className="eyebrow">GESTÃO EMPRESARIAL INTEGRADA</p>
            <h2>Mantenha as contas em dia.</h2>
            <div className="features-list">
              <div className="feature-item">
                <span className="dot" />
                <div>
                  <strong>Contas a Receber:</strong> Acompanhe faturas, prazos e
                  baixas em tempo real.
                </div>
              </div>
              <div className="feature-item">
                <span className="dot" />
                <div>
                  <strong>Contas a Pagar:</strong> Elimine juros por atraso e
                  organize despesas fixas e variáveis.
                </div>
              </div>
              <div className="feature-item">
                <span className="dot" />
                <div>
                  <strong>DRE e Fluxo:</strong> Visualize relatórios analíticos de
                  lucratividade e liquidez.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-intro">
          <div className="signal-line" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <p className="panel-note">
            Organização precisa para empresas que buscam crescimento sustentável.
          </p>
        </div>
      </section>

      <section className="form-panel">
        <div className="form-wrap">
          <div className="form-heading">
            <p className="eyebrow">ACESSO SEGURO</p>
            <h2>{isLogin ? "Bem-vindo de volta." : "Comece agora."}</h2>
            <p>
              {isLogin
                ? "Entre para gerenciar o caixa da sua empresa."
                : "Crie sua conta corporativa e assuma o controle financeiro."}
            </p>
          </div>

          {!isLogin && (
            <div className="register-benefits">
              <p className="benefits-title">Com o CaixaCerto você pode:</p>
              <span>
                <b>01</b> Controlar entradas e saídas sem planilhas complexas
              </span>
              <span>
                <b>02</b> Monitorar inadimplência e vencimentos futuros
              </span>
              <span>
                <b>03</b> Tomar decisões seguras com base em relatórios reais
              </span>
            </div>
          )}

          <div className="mode-switch" role="tablist" aria-label="Tipo de acesso">
            <button
              className={isLogin ? "active" : ""}
              onClick={() => changeMode("login")}
              role="tab"
              aria-selected={isLogin}
              type="button"
            >
              Entrar
            </button>
            <button
              className={!isLogin ? "active" : ""}
              onClick={() => changeMode("register")}
              role="tab"
              aria-selected={!isLogin}
              type="button"
            >
              Criar conta
            </button>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {!isLogin && (
              <label>
                <span>Nome de usuário</span>
                <input
                  autoComplete="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder="seu_usuario"
                  required
                />
              </label>
            )}
            <label>
              <span>Email corporativo</span>
              <input
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="voce@empresa.com.br"
                required
              />
            </label>
            <label>
              <span>Senha</span>
              <input
                type="password"
                autoComplete={isLogin ? "current-password" : "new-password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••••••"
                minLength={6}
                required
              />
            </label>

            {isLogin && (
              <a className="forgot-link" href="/esqueci-minha-senha">
                Esqueci minha senha
              </a>
            )}

            {feedback && (
              <div
                className={`feedback ${
                  feedback.message === "Conta criada com sucesso."
                    ? "success"
                    : "error"
                }`}
                role="alert"
              >
                <strong>{feedback.message}</strong>
                <span>{feedback.action}</span>
              </div>
            )}

            <button className="submit-button" type="submit" disabled={loading}>
              {loading
                ? "Processando..."
                : isLogin
                ? "Entrar no sistema"
                : "Criar minha conta"}
              <span aria-hidden="true">→</span>
            </button>
          </form>

          <p className="legal-copy">
            Seus dados financeiros protegidos com criptografia de ponta a ponta.
          </p>
        </div>
      </section>

      <style>{`
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

        /* Painel Esquerdo (Apresentação CaixaCerto) */
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

        /* Painel Direito (Formulário) */
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
      `}</style>
    </main>
  );
}