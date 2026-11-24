import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

type BillStatus = "PENDING" | "PAID" | "CANCELLED";

interface AccountPayable {
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

export default function AccountsPayablePage() {
  const [accounts, setAccounts] = useState<AccountPayable[]>([]);
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
    loadAccounts();
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
      const response = await fetch("/api/v1/accounts-payable");
      const body = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          window.location.replace("/");
          return;
        }

        throw new Error(
          body.message || "Não foi possível carregar suas contas.",
        );
      }

      setAccounts(body);
    } catch (loadError) {
      setError(
        loadError instanceof Error
          ? loadError.message
          : "Não foi possível carregar suas contas.",
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
          ? `/api/v1/accounts-payable?id=${encodeURIComponent(editingId)}`
          : "/api/v1/accounts-payable",
        {
          method: editingId ? "PATCH" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            amount: Number(amount),
            dueDate: dueDate || null,
            status,
          }),
        },
      );
      const body = (await response.json()) as ApiError & {
        data?: AccountPayable;
      };

      if (!response.ok) {
        throw new Error(
          body.errors || body.message || "Não foi possível criar a conta.",
        );
      }

      setName("");
      setAmount("");
      setDueDate("");
      setStatus("PENDING");
      setSuccess(
        editingId
          ? "Conta a pagar atualizada com sucesso."
          : "Conta a pagar criada com sucesso.",
      );
      setEditingId(null);
      await loadAccounts();
    } catch (saveError) {
      setError(
        saveError instanceof Error
          ? saveError.message
          : "Não foi possível criar a conta.",
      );
    } finally {
      setSaving(false);
    }
  }

  function startEditing(account: AccountPayable) {
    setEditingId(account.id);
    setName(account.name);
    setAmount(String(account.amount));
    setDueDate(
      account.dueDate
        ? new Date(account.dueDate).toISOString().slice(0, 10)
        : "",
    );
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
        `/api/v1/accounts-payable?id=${encodeURIComponent(accountId)}`,
        { method: "DELETE" },
      );
      const body = (await response.json()) as ApiError;

      if (!response.ok) {
        throw new Error(body.message || "Não foi possível excluir a conta.");
      }

      if (editingId === accountId) cancelEditing();
      setDeleteConfirmationId(null);
      setSuccess("Conta a pagar excluída com sucesso.");
      await loadAccounts();
    } catch (deleteError) {
      setDeleteError(
        deleteError instanceof Error
          ? deleteError.message
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
        `/api/v1/accounts-payable?id=${encodeURIComponent(accountId)}`,
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
    } catch (statusError) {
      setError(
        statusError instanceof Error
          ? statusError.message
          : "Não foi possível atualizar a situação.",
      );
    } finally {
      setUpdatingStatusId(null);
    }
  }

  const totalPending = accounts
    .filter((account) => account.status === "PENDING")
    .reduce((total, account) => total + Number(account.amount), 0);
  const accountPendingDeletion = accounts.find(
    (account) => account.id === deleteConfirmationId,
  );

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

  return (
    <main className={`accounts-shell ${theme === "dark" ? "dark-theme" : ""}`}>
      <header className="accounts-topbar">
        <Link className="accounts-brand" href="/dashboard">
          <span className="accounts-brand-mark" aria-hidden="true">
            $
          </span>
          <span>CaixaCerto</span>
        </Link>
        <nav className="accounts-nav" aria-label="Navegação financeira">
          <Link href="/dashboard">Visão geral</Link>
          <span aria-current="page">Contas a pagar</span>
          <Link href="/accounts-receivable">Contas a receber</Link>
        </nav>
        <button
          className="accounts-theme-toggle"
          type="button"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          aria-label={`Ativar tema ${theme === "light" ? "escuro" : "claro"}`}
        >
          {theme === "light" ? "Tema escuro" : "Tema claro"}
        </button>
      </header>

      <section className="accounts-heading">
        <div>
          <p>CAIXACERTO / CONTAS A PAGAR</p>
          <h1>Organize seus compromissos.</h1>
        </div>
        <Link className="accounts-back" href="/dashboard">
          ← Voltar ao dashboard
        </Link>
      </section>

      <section className="accounts-overview">
        <article>
          <span>Total pendente</span>
          <strong>{formatCurrency(totalPending)}</strong>
        </article>
        <article>
          <span>Contas cadastradas</span>
          <strong>{accounts.length}</strong>
        </article>
        <article>
          <span>Próximo vencimento</span>
          <strong>
            {accounts
              .filter(
                (account) => account.status === "PENDING" && account.dueDate,
              )
              .sort(
                (first, second) =>
                  new Date(first.dueDate as string).getTime() -
                  new Date(second.dueDate as string).getTime(),
              )[0]?.dueDate
              ? formatDate(
                  accounts
                    .filter(
                      (account) =>
                        account.status === "PENDING" && account.dueDate,
                    )
                    .sort(
                      (first, second) =>
                        new Date(first.dueDate as string).getTime() -
                        new Date(second.dueDate as string).getTime(),
                    )[0].dueDate,
                )
              : "Nenhum"}
          </strong>
        </article>
      </section>

      <section className="accounts-content">
        <form className="accounts-form" onSubmit={handleSubmit}>
          <div className="accounts-form-heading">
            <p>{editingId ? "EDITANDO DESPESA" : "NOVA DESPESA"}</p>
            <h2>{editingId ? "Atualizar conta" : "Cadastrar conta"}</h2>
          </div>

          <label>
            Nome
            <input
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Ex: Fornecedor"
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

          <label className="accounts-date-field">
            <span className="accounts-date-label">
              <span>Vencimento</span>
              <span className="accounts-optional">Opcional</span>
            </span>
            <span className="accounts-date-control">
              <input
                type="date"
                lang="pt-BR"
                value={dueDate}
                aria-describedby="accounts-date-hint"
                onChange={(event) => setDueDate(event.target.value)}
              />
              {dueDate && (
                <button
                  className="accounts-date-clear"
                  type="button"
                  onClick={() => setDueDate("")}
                  aria-label="Remover data de vencimento"
                >
                  ×
                </button>
              )}
            </span>
            <span className="accounts-date-hint" id="accounts-date-hint">
              {dueDate
                ? `Vencimento em ${formatDate(dueDate)}`
                : "Selecione uma data ou deixe sem vencimento"}
            </span>
          </label>

          <label>
            Situação
            <select
              value={status}
              onChange={(event) => setStatus(event.target.value as BillStatus)}
            >
              <option value="PENDING">Pendente</option>
              <option value="PAID">Pago</option>
              <option value="CANCELLED">Cancelado</option>
            </select>
          </label>

          <button type="submit" disabled={saving}>
            {saving
              ? "Salvando..."
              : editingId
                ? "Salvar alterações"
                : "Adicionar conta"}
          </button>
          {editingId && (
            <button
              className="accounts-cancel-edit"
              type="button"
              onClick={cancelEditing}
            >
              Cancelar edição
            </button>
          )}

          {error && <p className="accounts-message error">{error}</p>}
          {success && <p className="accounts-message success">{success}</p>}
        </form>

        <div className="accounts-list">
          <div className="accounts-list-heading">
            <div>
              <p>LANÇAMENTOS</p>
              <h2>Contas cadastradas</h2>
            </div>
            <button type="button" onClick={loadAccounts} disabled={loading}>
              {loading ? "Atualizando..." : "Atualizar"}
            </button>
          </div>

          {loading ? (
            <p className="accounts-empty">Carregando contas...</p>
          ) : accounts.length === 0 ? (
            <p className="accounts-empty">
              Nenhuma conta cadastrada. Adicione a primeira ao lado.
            </p>
          ) : (
            <div className="accounts-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Conta</th>
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
                          Adicionada em {formatDate(account.createdAt)}
                        </span>
                      </td>
                      <td>{formatDate(account.dueDate)}</td>
                      <td>
                        <select
                          className={`accounts-status-select status-${account.status.toLowerCase()}`}
                          aria-label={`Alterar situação de ${account.name}`}
                          value={account.status}
                          disabled={updatingStatusId === account.id}
                          onChange={(event) =>
                            handleStatusChange(
                              account.id,
                              event.target.value as BillStatus,
                            )
                          }
                        >
                          <option value="PENDING">Pendente</option>
                          <option value="PAID">Pago</option>
                          <option value="CANCELLED">Cancelado</option>
                        </select>
                      </td>
                      <td className="accounts-amount">
                        {formatCurrency(account.amount)}
                      </td>
                      <td className="accounts-actions">
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
        <div className="delete-confirmation-backdrop">
          <section
            className="delete-confirmation"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="delete-confirmation-title"
            aria-describedby="delete-confirmation-description"
          >
            <p className="delete-confirmation-eyebrow">EXCLUSÃO PERMANENTE</p>
            <h2 id="delete-confirmation-title">
              Deseja realmente excluir esta conta?
            </h2>
            <p id="delete-confirmation-description">
              A conta <strong>{accountPendingDeletion.name}</strong> será
              excluída. Não será possível recuperar essa informação.
            </p>
            {deleteError && (
              <p className="accounts-message error" role="alert">
                {deleteError}
              </p>
            )}
            <div className="delete-confirmation-actions">
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
                onClick={() => handleDelete(accountPendingDeletion.id)}
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
        body {
          margin: 0;
          background: #f8fafc;
          color: #0f172a;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }
        .accounts-shell { min-height: 100vh; padding: 0 clamp(24px, 7vw, 104px) 64px; }
        .accounts-topbar {
          position: sticky;
          top: 0;
          z-index: 20;
          min-height: 84px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #e2e8f0;
          background: #f8fafc;
        }
        .accounts-brand, .accounts-nav, .accounts-back { display: flex; align-items: center; }
        .accounts-brand { gap: 10px; color: #0f172a; font-weight: 750; text-decoration: none; }
        .accounts-brand-mark {
          width: 36px; height: 36px; display: grid; place-items: center;
          border: 1px solid #0284c7; border-radius: 7px;
          background: #e0f2fe; color: #0369a1; font-size: 20px;
        }
        .accounts-nav { gap: 24px; color: #0284c7; font-size: 13px; font-weight: 650; }
        .accounts-nav a { color: #64748b; text-decoration: none; }
        .accounts-nav a:hover { color: #0284c7; }
        .accounts-theme-toggle {
          padding: 9px 13px; border: 1px solid #cbd5e1; border-radius: 6px;
          background: transparent; color: #475569; cursor: pointer;
          font-size: 12px; font-weight: 600;
        }
        .accounts-heading {
          display: flex; align-items: end; justify-content: space-between;
          gap: 24px; padding: 48px 0 32px;
        }
        .accounts-heading p, .accounts-form-heading p, .accounts-list-heading p {
          margin: 0 0 10px; color: #0284c7; font-size: 10px;
          font-weight: 750; letter-spacing: 1.6px;
        }
        .accounts-heading h1 { margin: 0; font-size: clamp(34px, 5vw, 54px); letter-spacing: -1.8px; }
        .accounts-back {
          padding: 10px 14px; border: 1px solid #cbd5e1; border-radius: 6px;
          color: #475569; font-size: 12px; font-weight: 650; text-decoration: none;
        }
        .accounts-overview { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 14px; }
        .accounts-overview article {
          display: flex; flex-direction: column; gap: 12px;
          padding: 20px 22px; border: 1px solid #e2e8f0; border-radius: 9px; background: #fff;
        }
        .accounts-overview span { color: #64748b; font-size: 11px; font-weight: 650; }
        .accounts-overview strong { font-size: 21px; }
        .accounts-content { display: grid; grid-template-columns: 300px minmax(0, 1fr); gap: 14px; }
        .accounts-form, .accounts-list {
          border: 1px solid #e2e8f0; border-radius: 9px; background: #fff;
        }
        .accounts-form { align-self: start; display: grid; gap: 14px; padding: 22px; }
        .accounts-form-heading h2, .accounts-list-heading h2 { margin: 0; font-size: 18px; }
        .accounts-form-heading { padding-bottom: 5px; }
        .accounts-form label { display: grid; gap: 7px; color: #475569; font-size: 11px; font-weight: 650; }
        .accounts-date-label { display: flex; align-items: center; justify-content: space-between; }
        .accounts-optional { color: #94a3b8; font-size: 10px; font-weight: 500; }
        .accounts-date-control { position: relative; display: flex; }
        .accounts-date-control input { padding-right: 38px; color-scheme: light; }
        .accounts-date-control input::-webkit-calendar-picker-indicator {
          cursor: pointer; opacity: .7;
        }
        .accounts-form .accounts-date-clear {
          position: absolute; top: 50%; right: 34px; transform: translateY(-50%);
          width: 24px; height: 24px; padding: 0; border: 0; border-radius: 50%;
          background: #e2e8f0; color: #475569; cursor: pointer;
          font-size: 17px; line-height: 1;
        }
        .accounts-form .accounts-date-clear:hover { background: #cbd5e1; }
        .accounts-date-hint { color: #94a3b8; font-size: 10px; font-weight: 400; }
        .accounts-form input, .accounts-form select {
          width: 100%; height: 42px; padding: 0 11px;
          border: 1px solid #cbd5e1; border-radius: 6px;
          background: #fff; color: #0f172a; font: inherit;
        }
        .accounts-form input:focus, .accounts-form select:focus { outline: 2px solid #bae6fd; border-color: #0284c7; }
        .accounts-form button, .accounts-list-heading button {
          height: 42px; border: 0; border-radius: 6px;
          background: #0284c7; color: #fff; cursor: pointer; font-size: 12px; font-weight: 700;
        }
        .accounts-form button:disabled, .accounts-list-heading button:disabled { cursor: wait; opacity: .65; }
        .accounts-form .accounts-cancel-edit {
          border: 1px solid #cbd5e1; background: #fff; color: #475569;
        }
        .accounts-message { margin: 0; padding: 10px; border-radius: 6px; font-size: 11px; line-height: 1.45; }
        .accounts-message.error { border: 1px solid #fecdd3; background: #fff1f2; color: #9f1239; }
        .accounts-message.success { border: 1px solid #bbf7d0; background: #f0fdf4; color: #166534; }
        .accounts-list { min-height: 360px; overflow: hidden; }
        .accounts-list-heading {
          display: flex; align-items: center; justify-content: space-between;
          padding: 22px; border-bottom: 1px solid #e2e8f0;
        }
        .accounts-list-heading button {
          height: 36px; padding: 0 12px; border: 1px solid #cbd5e1;
          background: #fff; color: #475569;
        }
        .accounts-empty { margin: 0; padding: 54px 22px; color: #64748b; text-align: center; }
        .accounts-table-wrap { overflow-x: auto; }
        table { width: 100%; border-collapse: collapse; }
        th { padding: 13px 16px; background: #f8fafc; color: #64748b; font-size: 10px; text-align: left; }
        td { padding: 15px 16px; border-top: 1px solid #f1f5f9; color: #475569; font-size: 12px; }
        td:first-child { min-width: 180px; }
        td:first-child strong, td:first-child span { display: block; }
        td:first-child strong { color: #0f172a; }
        td:first-child span { margin-top: 4px; color: #94a3b8; font-size: 10px; }
        .accounts-amount { color: #0f172a; font-weight: 750; text-align: right; }
        th:last-child { text-align: right; }
        .accounts-actions { white-space: nowrap; text-align: right; }
        .accounts-actions button {
          margin-left: 6px; padding: 7px 9px; border: 1px solid #cbd5e1;
          border-radius: 5px; background: #fff; color: #0369a1;
          cursor: pointer; font-size: 10px; font-weight: 700;
        }
        .accounts-actions button.delete { border-color: #fecdd3; color: #be123c; }
        .accounts-actions button:disabled { cursor: wait; opacity: .65; }
        .accounts-status-select {
          max-width: 126px; padding: 5px 8px; border: 0; border-radius: 999px;
          font-size: 10px; font-weight: 700; cursor: pointer;
        }
        .accounts-status-select:disabled { cursor: wait; opacity: .65; }
        .status-pending { background: #fef3c7; color: #92400e; }
        .status-paid { background: #dcfce7; color: #166534; }
        .status-cancelled { background: #f1f5f9; color: #475569; }
        .delete-confirmation-backdrop {
          position: fixed; inset: 0; z-index: 10; display: grid;
          place-items: center; padding: 20px;
          background: rgba(15, 23, 42, .58);
        }
        .delete-confirmation {
          width: min(100%, 430px); padding: 26px; border: 1px solid #e2e8f0;
          border-radius: 12px; background: #fff; color: #0f172a;
          box-shadow: 0 24px 70px rgba(15, 23, 42, .28);
        }
        .delete-confirmation-eyebrow {
          margin: 0 0 10px; color: #be123c; font-size: 10px;
          font-weight: 750; letter-spacing: 1.4px;
        }
        .delete-confirmation h2 { margin: 0; font-size: 20px; letter-spacing: -.4px; }
        .delete-confirmation > p:not(.delete-confirmation-eyebrow):not(.accounts-message) {
          margin: 12px 0 0; color: #475569; font-size: 13px; line-height: 1.6;
        }
        .delete-confirmation-actions {
          display: flex; justify-content: flex-end; gap: 10px; margin-top: 24px;
        }
        .delete-confirmation-actions button {
          min-height: 40px; padding: 0 14px; border: 1px solid #cbd5e1;
          border-radius: 6px; background: #fff; color: #475569;
          cursor: pointer; font-size: 12px; font-weight: 700;
        }
        .delete-confirmation-actions button.confirm-delete {
          border-color: #be123c; background: #be123c; color: #fff;
        }
        .delete-confirmation-actions button:disabled { cursor: wait; opacity: .65; }
        .dark-theme.accounts-shell { background: #030712; color: #f8fafc; }
        .dark-theme .accounts-topbar { border-color: #1e293b; background: #030712; }
        .dark-theme .accounts-brand, .dark-theme .accounts-heading h1,
        .dark-theme .accounts-overview strong, .dark-theme .accounts-form-heading h2,
        .dark-theme .accounts-list-heading h2, .dark-theme td:first-child strong,
        .dark-theme .accounts-amount { color: #f8fafc; }
        .dark-theme .accounts-brand-mark { background: #082f49; color: #38bdf8; }
        .dark-theme .accounts-nav a, .dark-theme .accounts-back,
        .dark-theme .accounts-theme-toggle { border-color: #334155; color: #cbd5e1; }
        .dark-theme .accounts-overview article, .dark-theme .accounts-form,
        .dark-theme .accounts-list { border-color: #1e293b; background: #0b1120; }
        .dark-theme .accounts-overview span, .dark-theme .accounts-form label,
        .dark-theme td, .dark-theme .accounts-empty { color: #94a3b8; }
        .dark-theme .accounts-form input, .dark-theme .accounts-form select,
        .dark-theme .accounts-list-heading button { border-color: #334155; background: #030712; color: #f8fafc; }
        .dark-theme .accounts-date-control input { color-scheme: dark; }
        .dark-theme .accounts-date-clear { background: #334155; color: #e2e8f0; }
        .dark-theme .accounts-form .accounts-date-clear:hover { background: #475569; }
        .dark-theme .accounts-date-hint, .dark-theme .accounts-optional { color: #64748b; }
        .dark-theme .accounts-list-heading, .dark-theme td { border-color: #1e293b; }
        .dark-theme th { background: #111827; color: #94a3b8; }
        .dark-theme td:first-child span { color: #64748b; }
        .dark-theme .accounts-actions button { border-color: #334155; background: #0b1120; color: #7dd3fc; }
        .dark-theme .accounts-actions button.delete { border-color: #881337; color: #fda4af; }
        .dark-theme .status-pending { background: #78350f; color: #fde68a; }
        .dark-theme .status-paid { background: #14532d; color: #bbf7d0; }
        .dark-theme .status-cancelled { background: #334155; color: #cbd5e1; }
        .dark-theme .delete-confirmation { border-color: #334155; background: #0b1120; color: #f8fafc; }
        .dark-theme .delete-confirmation > p:not(.delete-confirmation-eyebrow):not(.accounts-message) { color: #cbd5e1; }
        .dark-theme .delete-confirmation-actions button { border-color: #475569; background: #111827; color: #e2e8f0; }
        .dark-theme .delete-confirmation-actions button.confirm-delete { border-color: #be123c; background: #be123c; color: #fff; }
        .dark-theme .accounts-form .accounts-cancel-edit { border-color: #334155; background: #0b1120; color: #cbd5e1; }
        @media (max-width: 900px) {
          .accounts-content { grid-template-columns: 1fr; }
          .accounts-form { width: 100%; }
        }
        @media (max-width: 680px) {
          .accounts-shell { padding-right: 18px; padding-left: 18px; }
          .accounts-topbar { align-items: flex-start; flex-wrap: wrap; justify-content: center; gap: 10px; padding: 14px 0; }
          .accounts-heading { align-items: flex-start; flex-direction: column; padding-top: 34px; }
          .accounts-overview { grid-template-columns: 1fr; }
          .accounts-nav { width: 100%; }
        }
      `}</style>
    </main>
  );
}
