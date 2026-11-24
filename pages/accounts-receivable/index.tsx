import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

type BillStatus = "PENDING" | "PAID" | "CANCELLED";

interface AccountReceivable {
  id: string;
  name: string;
  amount: string;
  dueDate: string | null;
  status: BillStatus;
  createdAt: string;
}

interface ApiError {
  message?: string;
  action?: string;
  errors?: string;
}

const statusLabels: Record<BillStatus, string> = {
  PENDING: "Pendente",
  PAID: "Recebido",
  CANCELLED: "Cancelado",
};

export default function AccountsReceivablePage() {
  const [accounts, setAccounts] = useState<AccountReceivable[]>([]);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [themeReady, setThemeReady] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState<BillStatus>("PENDING");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [deleteConfirmationId, setDeleteConfirmationId] = useState<
    string | null
  >(null);
  const [deleteError, setDeleteError] = useState("");
  const [updatingStatusId, setUpdatingStatusId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    void loadAccounts();
  }, []);

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

  async function loadAccounts() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/v1/accounts-receivable");
      const body = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          window.location.replace("/");
          return;
        }

        throw new Error(
          body.message || "Não foi possível carregar suas contas a receber.",
        );
      }

      setAccounts(body);
    } catch (loadError) {
      setError(
        loadError instanceof Error
          ? loadError.message
          : "Não foi possível carregar suas contas a receber.",
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(
        editingId
          ? `/api/v1/accounts-receivable/${encodeURIComponent(editingId)}`
          : "/api/v1/accounts-receivable",
        {
          method: editingId ? "PATCH" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            amount: Number(amount),
            dueDate: dueDate || null,
            status,
          }),
        },
      );
      const body = (await response.json()) as ApiError;

      if (!response.ok) {
        throw new Error(
          body.errors || body.message || "Não foi possível salvar a conta.",
        );
      }

      setName("");
      setAmount("");
      setDueDate("");
      setStatus("PENDING");
      setSuccess(
        editingId
          ? "Conta a receber atualizada com sucesso."
          : "Conta a receber cadastrada com sucesso.",
      );
      setEditingId(null);
      await loadAccounts();
    } catch (saveError) {
      setError(
        saveError instanceof Error
          ? saveError.message
          : "Não foi possível salvar a conta.",
      );
    } finally {
      setSaving(false);
    }
  }

  function startEditing(account: AccountReceivable) {
    setEditingId(account.id);
    setName(account.name);
    setAmount(String(account.amount));
    setDueDate(account.dueDate ? account.dueDate.slice(0, 10) : "");
    setStatus(account.status);
    setError("");
    setSuccess("");
  }

  function cancelEditing() {
    setEditingId(null);
    setName("");
    setAmount("");
    setDueDate("");
    setStatus("PENDING");
  }

  async function handleDelete(accountId: string) {
    setDeletingId(accountId);
    setDeleteError("");

    try {
      const response = await fetch(
        `/api/v1/accounts-receivable?id=${encodeURIComponent(accountId)}`,
        { method: "DELETE" },
      );
      const body = (await response.json()) as ApiError;

      if (!response.ok) {
        throw new Error(body.message || "Não foi possível excluir a conta.");
      }

      if (editingId === accountId) cancelEditing();
      setDeleteConfirmationId(null);
      setSuccess("Conta a receber excluída com sucesso.");
      await loadAccounts();
    } catch (deleteFailure) {
      setDeleteError(
        deleteFailure instanceof Error
          ? deleteFailure.message
          : "Não foi possível excluir a conta.",
      );
    } finally {
      setDeletingId(null);
    }
  }

  async function handleStatusChange(accountId: string, nextStatus: BillStatus) {
    setUpdatingStatusId(accountId);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(
        `/api/v1/accounts-receivable/${encodeURIComponent(accountId)}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: nextStatus }),
        },
      );
      const body = (await response.json()) as ApiError;

      if (!response.ok) {
        throw new Error(
          body.message || "Não foi possível atualizar a situação.",
        );
      }

      setAccounts((currentAccounts) =>
        currentAccounts.map((account) =>
          account.id === accountId
            ? { ...account, status: nextStatus }
            : account,
        ),
      );
      setSuccess("Situação atualizada com sucesso.");
    } catch (statusFailure) {
      setError(
        statusFailure instanceof Error
          ? statusFailure.message
          : "Não foi possível atualizar a situação.",
      );
    } finally {
      setUpdatingStatusId(null);
    }
  }

  function formatCurrency(value: number | string) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(value));
  }

  function formatDate(value: string | null) {
    if (!value) return "Sem vencimento";

    return new Intl.DateTimeFormat("pt-BR", {
      timeZone: "UTC",
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(value));
  }

  const pendingAccounts = accounts.filter(
    (account) => account.status === "PENDING",
  );
  const receivedAccounts = accounts.filter(
    (account) => account.status === "PAID",
  );
  const totalPending = pendingAccounts.reduce(
    (total, account) => total + Number(account.amount),
    0,
  );
  const totalReceived = receivedAccounts.reduce(
    (total, account) => total + Number(account.amount),
    0,
  );
  const nextDueDate = pendingAccounts
    .filter((account) => account.dueDate)
    .sort(
      (first, second) =>
        new Date(first.dueDate as string).getTime() -
        new Date(second.dueDate as string).getTime(),
    )[0]?.dueDate;
  const accountPendingDeletion = accounts.find(
    (account) => account.id === deleteConfirmationId,
  );

  return (
    <main
      className={`receivable-shell ${theme === "dark" ? "dark-theme" : ""}`}
    >
      <header className="receivable-topbar">
        <Link className="receivable-brand" href="/dashboard">
          <span className="receivable-brand-mark" aria-hidden="true">
            $
          </span>
          <span>CaixaCerto</span>
        </Link>
        <nav className="receivable-nav" aria-label="Navegação financeira">
          <Link href="/dashboard">Visão geral</Link>
          <Link href="/accounts-payable">Contas a pagar</Link>
          <span aria-current="page">Contas a receber</span>
        </nav>
        <button
          className="receivable-theme-toggle"
          type="button"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          aria-label={`Ativar tema ${theme === "light" ? "escuro" : "claro"}`}
        >
          {theme === "light" ? "Tema escuro" : "Tema claro"}
        </button>
      </header>

      <section className="receivable-heading">
        <div>
          <p>CAIXACERTO / CONTAS A RECEBER</p>
          <h1>Acompanhe o que entra.</h1>
        </div>
        <Link className="receivable-back" href="/dashboard">
          ← Voltar ao dashboard
        </Link>
      </section>

      <section className="receivable-overview" aria-label="Resumo das receitas">
        <article>
          <span>Total pendente</span>
          <strong>{formatCurrency(totalPending)}</strong>
        </article>
        <article>
          <span>Total recebido</span>
          <strong>{formatCurrency(totalReceived)}</strong>
        </article>
        <article>
          <span>Próximo vencimento</span>
          <strong>{nextDueDate ? formatDate(nextDueDate) : "Nenhum"}</strong>
        </article>
      </section>

      <section className="receivable-content">
        <form className="receivable-form" onSubmit={handleSubmit}>
          <div className="receivable-form-heading">
            <p>{editingId ? "EDITANDO RECEITA" : "NOVA RECEITA"}</p>
            <h2>{editingId ? "Atualizar conta" : "Cadastrar conta"}</h2>
          </div>

          <label>
            Descrição
            <input
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Ex: Projeto, venda ou cliente"
            />
          </label>

          <label>
            Valor
            <input
              required
              type="number"
              min="0.01"
              step="0.01"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              placeholder="0,00"
            />
          </label>

          <label>
            Vencimento <span className="receivable-optional">Opcional</span>
            <input
              type="date"
              lang="pt-BR"
              value={dueDate}
              onChange={(event) => setDueDate(event.target.value)}
            />
          </label>

          <label>
            Situação
            <select
              value={status}
              onChange={(event) => setStatus(event.target.value as BillStatus)}
            >
              <option value="PENDING">Pendente</option>
              <option value="PAID">Recebido</option>
              <option value="CANCELLED">Cancelado</option>
            </select>
          </label>

          <button type="submit" disabled={saving}>
            {saving
              ? "Salvando..."
              : editingId
                ? "Salvar alterações"
                : "Adicionar receita"}
          </button>
          {editingId && (
            <button
              className="receivable-cancel-edit"
              type="button"
              onClick={cancelEditing}
            >
              Cancelar edição
            </button>
          )}
          {error && (
            <p className="receivable-message error" role="alert">
              {error}
            </p>
          )}
          {success && (
            <p className="receivable-message success" role="status">
              {success}
            </p>
          )}
        </form>

        <div className="receivable-list">
          <div className="receivable-list-heading">
            <div>
              <p>LANÇAMENTOS</p>
              <h2>Contas cadastradas</h2>
            </div>
            <button
              type="button"
              onClick={() => void loadAccounts()}
              disabled={loading}
            >
              {loading ? "Atualizando..." : "Atualizar"}
            </button>
          </div>

          {loading ? (
            <p className="receivable-empty">Carregando contas...</p>
          ) : accounts.length === 0 ? (
            <p className="receivable-empty">
              Nenhuma conta cadastrada. Adicione a primeira ao lado.
            </p>
          ) : (
            <div className="receivable-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Receita</th>
                    <th>Vencimento</th>
                    <th>Situação</th>
                    <th>Valor</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {accounts.map((account) => (
                    <tr key={account.id}>
                      <td>
                        <strong>{account.name}</strong>
                        <span>
                          Cadastrada em {formatDate(account.createdAt)}
                        </span>
                      </td>
                      <td>{formatDate(account.dueDate)}</td>
                      <td>
                        <select
                          className={`receivable-status-select status-${account.status.toLowerCase()}`}
                          aria-label={`Alterar situação de ${account.name}`}
                          value={account.status}
                          disabled={updatingStatusId === account.id}
                          onChange={(event) =>
                            void handleStatusChange(
                              account.id,
                              event.target.value as BillStatus,
                            )
                          }
                        >
                          {Object.entries(statusLabels).map(
                            ([value, label]) => (
                              <option key={value} value={value}>
                                {label}
                              </option>
                            ),
                          )}
                        </select>
                      </td>
                      <td className="receivable-amount">
                        {formatCurrency(account.amount)}
                      </td>
                      <td className="receivable-actions">
                        <button
                          type="button"
                          onClick={() => startEditing(account)}
                        >
                          Editar
                        </button>
                        <button
                          className="delete"
                          type="button"
                          disabled={deletingId === account.id}
                          onClick={() => {
                            setDeleteError("");
                            setDeleteConfirmationId(account.id);
                          }}
                        >
                          {deletingId === account.id
                            ? "Excluindo..."
                            : "Excluir"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {accountPendingDeletion && (
        <div className="receivable-confirmation-backdrop">
          <section
            className="receivable-confirmation"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="delete-confirmation-title"
            aria-describedby="delete-confirmation-description"
          >
            <p className="receivable-confirmation-eyebrow">
              EXCLUSÃO PERMANENTE
            </p>
            <h2 id="delete-confirmation-title">
              Deseja realmente excluir esta conta?
            </h2>
            <p id="delete-confirmation-description">
              A receita <strong>{accountPendingDeletion.name}</strong> será
              excluída. Não será possível recuperar essa informação.
            </p>
            {deleteError && (
              <p className="receivable-message error" role="alert">
                {deleteError}
              </p>
            )}
            <div className="receivable-confirmation-actions">
              <button
                type="button"
                autoFocus
                disabled={deletingId !== null}
                onClick={() => setDeleteConfirmationId(null)}
              >
                Cancelar
              </button>
              <button
                className="confirm-delete"
                type="button"
                disabled={deletingId !== null}
                onClick={() => void handleDelete(accountPendingDeletion.id)}
              >
                {deletingId === accountPendingDeletion.id
                  ? "Excluindo..."
                  : "Sim, excluir"}
              </button>
            </div>
          </section>
        </div>
      )}

      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #f8fafc; color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
        .receivable-shell { min-height: 100vh; padding: 0 clamp(24px, 7vw, 104px) 64px; }
        .receivable-topbar { position: sticky; top: 0; z-index: 20; min-height: 84px; display: flex; align-items: center; justify-content: space-between; gap: 20px; border-bottom: 1px solid #e2e8f0; background: #f8fafc; }
        .receivable-brand { display: flex; align-items: center; gap: 10px; color: #0f172a; font-weight: 750; text-decoration: none; }
        .receivable-brand-mark { width: 36px; height: 36px; display: grid; place-items: center; border: 1px solid #0284c7; border-radius: 7px; background: #e0f2fe; color: #0369a1; font-size: 20px; }
        .receivable-nav { display: flex; align-items: center; gap: 20px; color: #0284c7; font-size: 12px; font-weight: 650; }
        .receivable-nav a { color: #64748b; text-decoration: none; }
        .receivable-nav a:hover { color: #0284c7; }
        .receivable-theme-toggle, .receivable-back { padding: 9px 13px; border: 1px solid #cbd5e1; border-radius: 6px; background: transparent; color: #475569; font-size: 12px; font-weight: 600; }
        .receivable-theme-toggle { cursor: pointer; }
        .receivable-heading { display: flex; align-items: end; justify-content: space-between; gap: 24px; padding: 48px 0 32px; }
        .receivable-heading p, .receivable-form-heading p, .receivable-list-heading p { margin: 0 0 10px; color: #0284c7; font-size: 10px; font-weight: 750; letter-spacing: 1.6px; }
        .receivable-heading h1 { margin: 0; font-size: clamp(34px, 5vw, 54px); letter-spacing: -1.8px; }
        .receivable-back { color: #475569; text-decoration: none; }
        .receivable-overview { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 14px; }
        .receivable-overview article { display: flex; flex-direction: column; gap: 12px; padding: 20px 22px; border: 1px solid #e2e8f0; border-radius: 9px; background: #fff; }
        .receivable-overview span { color: #64748b; font-size: 11px; font-weight: 650; }
        .receivable-overview strong { font-size: 21px; }
        .receivable-content { display: grid; grid-template-columns: 300px minmax(0, 1fr); gap: 14px; }
        .receivable-form, .receivable-list { border: 1px solid #e2e8f0; border-radius: 9px; background: #fff; }
        .receivable-form { align-self: start; display: grid; gap: 14px; padding: 22px; }
        .receivable-form-heading { padding-bottom: 5px; }
        .receivable-form-heading h2, .receivable-list-heading h2 { margin: 0; font-size: 18px; }
        .receivable-form label { display: grid; gap: 7px; color: #475569; font-size: 11px; font-weight: 650; }
        .receivable-optional { color: #94a3b8; font-size: 10px; font-weight: 500; }
        .receivable-form input, .receivable-form select { width: 100%; height: 42px; padding: 0 11px; border: 1px solid #cbd5e1; border-radius: 6px; background: #fff; color: #0f172a; font: inherit; }
        .receivable-form input:focus, .receivable-form select:focus { outline: 2px solid #bae6fd; border-color: #0284c7; }
        .receivable-form button, .receivable-list-heading button { height: 42px; border: 0; border-radius: 6px; background: #0284c7; color: #fff; cursor: pointer; font-size: 12px; font-weight: 700; }
        .receivable-form button:disabled, .receivable-list-heading button:disabled { cursor: wait; opacity: .65; }
        .receivable-form .receivable-cancel-edit { border: 1px solid #cbd5e1; background: #fff; color: #475569; }
        .receivable-message { margin: 0; padding: 10px; border-radius: 6px; font-size: 11px; line-height: 1.45; }
        .receivable-message.error { border: 1px solid #fecdd3; background: #fff1f2; color: #9f1239; }
        .receivable-message.success { border: 1px solid #bbf7d0; background: #f0fdf4; color: #166534; }
        .receivable-list { min-height: 360px; overflow: hidden; }
        .receivable-list-heading { display: flex; align-items: center; justify-content: space-between; padding: 22px; border-bottom: 1px solid #e2e8f0; }
        .receivable-list-heading button { height: 36px; padding: 0 12px; border: 1px solid #cbd5e1; background: #fff; color: #475569; }
        .receivable-empty { margin: 0; padding: 54px 22px; color: #64748b; text-align: center; }
        .receivable-table-wrap { overflow-x: auto; }
        table { width: 100%; border-collapse: collapse; }
        th { padding: 13px 16px; background: #f8fafc; color: #64748b; font-size: 10px; text-align: left; }
        td { padding: 15px 16px; border-top: 1px solid #f1f5f9; color: #475569; font-size: 12px; }
        td:first-child { min-width: 180px; }
        td:first-child strong, td:first-child span { display: block; }
        td:first-child strong { color: #0f172a; }
        td:first-child span { margin-top: 4px; color: #94a3b8; font-size: 10px; }
        .receivable-amount { color: #0f172a; font-weight: 750; text-align: right; }
        th:last-child { text-align: right; }
        .receivable-actions { white-space: nowrap; text-align: right; }
        .receivable-actions button { margin-left: 6px; padding: 7px 9px; border: 1px solid #cbd5e1; border-radius: 5px; background: #fff; color: #0369a1; cursor: pointer; font-size: 10px; font-weight: 700; }
        .receivable-actions button.delete { border-color: #fecdd3; color: #be123c; }
        .receivable-actions button:disabled { cursor: wait; opacity: .65; }
        .receivable-status-select { max-width: 126px; padding: 5px 8px; border: 0; border-radius: 999px; font-size: 10px; font-weight: 700; cursor: pointer; }
        .receivable-status-select:disabled { cursor: wait; opacity: .65; }
        .status-pending { background: #fef3c7; color: #92400e; }
        .status-paid { background: #dcfce7; color: #166534; }
        .status-cancelled { background: #f1f5f9; color: #475569; }
        .receivable-confirmation-backdrop { position: fixed; inset: 0; z-index: 10; display: grid; place-items: center; padding: 20px; background: rgba(15, 23, 42, .58); }
        .receivable-confirmation { width: min(100%, 430px); padding: 26px; border: 1px solid #e2e8f0; border-radius: 12px; background: #fff; color: #0f172a; box-shadow: 0 24px 70px rgba(15, 23, 42, .28); }
        .receivable-confirmation-eyebrow { margin: 0 0 10px; color: #be123c; font-size: 10px; font-weight: 750; letter-spacing: 1.4px; }
        .receivable-confirmation h2 { margin: 0; font-size: 20px; letter-spacing: -.4px; }
        .receivable-confirmation > p:not(.receivable-confirmation-eyebrow):not(.receivable-message) { margin: 12px 0 0; color: #475569; font-size: 13px; line-height: 1.6; }
        .receivable-confirmation-actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 24px; }
        .receivable-confirmation-actions button { min-height: 40px; padding: 0 14px; border: 1px solid #cbd5e1; border-radius: 6px; background: #fff; color: #475569; cursor: pointer; font-size: 12px; font-weight: 700; }
        .receivable-confirmation-actions button.confirm-delete { border-color: #be123c; background: #be123c; color: #fff; }
        .receivable-confirmation-actions button:disabled { cursor: wait; opacity: .65; }
        .dark-theme.receivable-shell { background: #030712; color: #f8fafc; }
        .dark-theme .receivable-topbar { border-color: #1e293b; background: #030712; }
        .dark-theme .receivable-brand, .dark-theme .receivable-heading h1, .dark-theme .receivable-overview strong, .dark-theme .receivable-form-heading h2, .dark-theme .receivable-list-heading h2, .dark-theme td:first-child strong, .dark-theme .receivable-amount { color: #f8fafc; }
        .dark-theme .receivable-brand-mark { background: #082f49; color: #38bdf8; }
        .dark-theme .receivable-nav a, .dark-theme .receivable-back, .dark-theme .receivable-theme-toggle { border-color: #334155; color: #cbd5e1; }
        .dark-theme .receivable-overview article, .dark-theme .receivable-form, .dark-theme .receivable-list { border-color: #1e293b; background: #0b1120; }
        .dark-theme .receivable-overview span, .dark-theme .receivable-form label, .dark-theme td, .dark-theme .receivable-empty { color: #94a3b8; }
        .dark-theme .receivable-form input, .dark-theme .receivable-form select, .dark-theme .receivable-list-heading button { border-color: #334155; background: #030712; color: #f8fafc; }
        .dark-theme .receivable-list-heading, .dark-theme td { border-color: #1e293b; }
        .dark-theme th { background: #111827; color: #94a3b8; }
        .dark-theme td:first-child span { color: #64748b; }
        .dark-theme .receivable-actions button { border-color: #334155; background: #0b1120; color: #7dd3fc; }
        .dark-theme .receivable-actions button.delete { border-color: #881337; color: #fda4af; }
        .dark-theme .status-pending { background: #78350f; color: #fde68a; }
        .dark-theme .status-paid { background: #14532d; color: #bbf7d0; }
        .dark-theme .status-cancelled { background: #334155; color: #cbd5e1; }
        .dark-theme .receivable-confirmation { border-color: #334155; background: #0b1120; color: #f8fafc; }
        .dark-theme .receivable-confirmation > p:not(.receivable-confirmation-eyebrow):not(.receivable-message) { color: #cbd5e1; }
        .dark-theme .receivable-confirmation-actions button { border-color: #475569; background: #111827; color: #e2e8f0; }
        .dark-theme .receivable-confirmation-actions button.confirm-delete { border-color: #be123c; background: #be123c; color: #fff; }
        .dark-theme .receivable-form .receivable-cancel-edit { border-color: #334155; background: #0b1120; color: #cbd5e1; }
        @media (max-width: 900px) { .receivable-content { grid-template-columns: 1fr; } }
        @media (max-width: 760px) {
          .receivable-shell { padding-right: 18px; padding-left: 18px; }
          .receivable-topbar { align-items: flex-start; flex-wrap: wrap; padding: 14px 0; }
          .receivable-nav { order: 3; width: 100%; gap: 14px; flex-wrap: wrap; }
          .receivable-heading { align-items: flex-start; flex-direction: column; padding-top: 34px; }
          .receivable-overview { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
