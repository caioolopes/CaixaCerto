module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[project]/pages/accounts-receivable/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AccountsReceivablePage
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
;
const statusLabels = {
    PENDING: "Pendente",
    PAID: "Recebido",
    CANCELLED: "Cancelado"
};
function AccountsReceivablePage() {
    const [accounts, setAccounts] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("light");
    const [themeReady, setThemeReady] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [dueDate, setDueDate] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("PENDING");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [deletingId, setDeletingId] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [deleteConfirmationId, setDeleteConfirmationId] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [deleteError, setDeleteError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [updatingStatusId, setUpdatingStatusId] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        void loadAccounts();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const savedTheme = window.localStorage.getItem("caixacerto-theme");
        if (savedTheme === "dark") setTheme("dark");
        setThemeReady(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!themeReady) return;
        window.localStorage.setItem("caixacerto-theme", theme);
        document.documentElement.dataset.theme = theme;
        document.body.dataset.theme = theme;
    }, [
        theme,
        themeReady
    ]);
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
                throw new Error(body.message || "Não foi possível carregar suas contas a receber.");
            }
            setAccounts(body);
        } catch (loadError) {
            setError(loadError instanceof Error ? loadError.message : "Não foi possível carregar suas contas a receber.");
        } finally{
            setLoading(false);
        }
    }
    async function handleSubmit(event) {
        event.preventDefault();
        setSaving(true);
        setError("");
        setSuccess("");
        try {
            const response = await fetch(editingId ? `/api/v1/accounts-receivable/${encodeURIComponent(editingId)}` : "/api/v1/accounts-receivable", {
                method: editingId ? "PATCH" : "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    amount: Number(amount),
                    dueDate: dueDate || null,
                    status
                })
            });
            const body = await response.json();
            if (!response.ok) {
                throw new Error(body.errors || body.message || "Não foi possível salvar a conta.");
            }
            setName("");
            setAmount("");
            setDueDate("");
            setStatus("PENDING");
            setSuccess(editingId ? "Conta a receber atualizada com sucesso." : "Conta a receber cadastrada com sucesso.");
            setEditingId(null);
            await loadAccounts();
        } catch (saveError) {
            setError(saveError instanceof Error ? saveError.message : "Não foi possível salvar a conta.");
        } finally{
            setSaving(false);
        }
    }
    function startEditing(account) {
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
    async function handleDelete(accountId) {
        setDeletingId(accountId);
        setDeleteError("");
        try {
            const response = await fetch(`/api/v1/accounts-receivable?id=${encodeURIComponent(accountId)}`, {
                method: "DELETE"
            });
            const body = await response.json();
            if (!response.ok) {
                throw new Error(body.message || "Não foi possível excluir a conta.");
            }
            if (editingId === accountId) cancelEditing();
            setDeleteConfirmationId(null);
            setSuccess("Conta a receber excluída com sucesso.");
            await loadAccounts();
        } catch (deleteFailure) {
            setDeleteError(deleteFailure instanceof Error ? deleteFailure.message : "Não foi possível excluir a conta.");
        } finally{
            setDeletingId(null);
        }
    }
    async function handleStatusChange(accountId, nextStatus) {
        setUpdatingStatusId(accountId);
        setError("");
        setSuccess("");
        try {
            const response = await fetch(`/api/v1/accounts-receivable/${encodeURIComponent(accountId)}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    status: nextStatus
                })
            });
            const body = await response.json();
            if (!response.ok) {
                throw new Error(body.message || "Não foi possível atualizar a situação.");
            }
            setAccounts((currentAccounts)=>currentAccounts.map((account)=>account.id === accountId ? {
                        ...account,
                        status: nextStatus
                    } : account));
            setSuccess("Situação atualizada com sucesso.");
        } catch (statusFailure) {
            setError(statusFailure instanceof Error ? statusFailure.message : "Não foi possível atualizar a situação.");
        } finally{
            setUpdatingStatusId(null);
        }
    }
    function formatCurrency(value) {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(Number(value));
    }
    function formatDate(value) {
        if (!value) return "Sem vencimento";
        return new Intl.DateTimeFormat("pt-BR", {
            timeZone: "UTC",
            day: "2-digit",
            month: "short",
            year: "numeric"
        }).format(new Date(value));
    }
    const pendingAccounts = accounts.filter((account)=>account.status === "PENDING");
    const receivedAccounts = accounts.filter((account)=>account.status === "PAID");
    const totalPending = pendingAccounts.reduce((total, account)=>total + Number(account.amount), 0);
    const totalReceived = receivedAccounts.reduce((total, account)=>total + Number(account.amount), 0);
    const nextDueDate = pendingAccounts.filter((account)=>account.dueDate).sort((first, second)=>new Date(first.dueDate).getTime() - new Date(second.dueDate).getTime())[0]?.dueDate;
    const accountPendingDeletion = accounts.find((account)=>account.id === deleteConfirmationId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
        className: `receivable-shell ${theme === "dark" ? "dark-theme" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                className: "receivable-topbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "receivable-brand",
                        href: "/dashboard",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "receivable-brand-mark",
                                "aria-hidden": "true",
                                children: "$"
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                children: "CaixaCerto"
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/accounts-receivable/index.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                        className: "receivable-nav",
                        "aria-label": "Navegação financeira",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard",
                                children: "Visão geral"
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                lineNumber: 292,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/accounts-payable",
                                children: "Contas a pagar"
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                "aria-current": "page",
                                children: "Contas a receber"
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/accounts-receivable/index.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        className: "receivable-theme-toggle",
                        type: "button",
                        onClick: ()=>setTheme(theme === "light" ? "dark" : "light"),
                        "aria-label": `Ativar tema ${theme === "light" ? "escuro" : "claro"}`,
                        children: theme === "light" ? "Tema escuro" : "Tema claro"
                    }, void 0, false, {
                        fileName: "[project]/pages/accounts-receivable/index.tsx",
                        lineNumber: 296,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/accounts-receivable/index.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "receivable-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: "CAIXACERTO / CONTAS A RECEBER"
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                children: "Acompanhe o que entra."
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/accounts-receivable/index.tsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "receivable-back",
                        href: "/dashboard",
                        children: "← Voltar ao dashboard"
                    }, void 0, false, {
                        fileName: "[project]/pages/accounts-receivable/index.tsx",
                        lineNumber: 311,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/accounts-receivable/index.tsx",
                lineNumber: 306,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "receivable-overview",
                "aria-label": "Resumo das receitas",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("article", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                children: "Total pendente"
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                lineNumber: 318,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: formatCurrency(totalPending)
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                lineNumber: 319,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/accounts-receivable/index.tsx",
                        lineNumber: 317,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("article", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                children: "Total recebido"
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: formatCurrency(totalReceived)
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                lineNumber: 323,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/accounts-receivable/index.tsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("article", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                children: "Próximo vencimento"
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                lineNumber: 326,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: nextDueDate ? formatDate(nextDueDate) : "Nenhum"
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                lineNumber: 327,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/accounts-receivable/index.tsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/accounts-receivable/index.tsx",
                lineNumber: 316,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "receivable-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                        className: "receivable-form",
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "receivable-form-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        children: editingId ? "EDITANDO RECEITA" : "NOVA RECEITA"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/accounts-receivable/index.tsx",
                                        lineNumber: 334,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        children: editingId ? "Atualizar conta" : "Cadastrar conta"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/accounts-receivable/index.tsx",
                                        lineNumber: 335,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                lineNumber: 333,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                children: [
                                    "Descrição",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        required: true,
                                        value: name,
                                        onChange: (event)=>setName(event.target.value),
                                        placeholder: "Ex: Projeto, venda ou cliente"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/accounts-receivable/index.tsx",
                                        lineNumber: 340,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                lineNumber: 338,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                children: [
                                    "Valor",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        required: true,
                                        type: "number",
                                        min: "0.01",
                                        step: "0.01",
                                        value: amount,
                                        onChange: (event)=>setAmount(event.target.value),
                                        placeholder: "0,00"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/accounts-receivable/index.tsx",
                                        lineNumber: 350,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                lineNumber: 348,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                children: [
                                    "Vencimento ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "receivable-optional",
                                        children: "Opcional"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/accounts-receivable/index.tsx",
                                        lineNumber: 362,
                                        columnNumber: 24
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        lang: "pt-BR",
                                        value: dueDate,
                                        onChange: (event)=>setDueDate(event.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/pages/accounts-receivable/index.tsx",
                                        lineNumber: 363,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                lineNumber: 361,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                children: [
                                    "Situação",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                        value: status,
                                        onChange: (event)=>setStatus(event.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                value: "PENDING",
                                                children: "Pendente"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                                lineNumber: 377,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                value: "PAID",
                                                children: "Recebido"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                                lineNumber: 378,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                value: "CANCELLED",
                                                children: "Cancelado"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                                lineNumber: 379,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/accounts-receivable/index.tsx",
                                        lineNumber: 373,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                lineNumber: 371,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: saving,
                                children: saving ? "Salvando..." : editingId ? "Salvar alterações" : "Adicionar receita"
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                lineNumber: 383,
                                columnNumber: 11
                            }, this),
                            editingId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                className: "receivable-cancel-edit",
                                type: "button",
                                onClick: cancelEditing,
                                children: "Cancelar edição"
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                lineNumber: 391,
                                columnNumber: 13
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "receivable-message error",
                                role: "alert",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                lineNumber: 400,
                                columnNumber: 13
                            }, this),
                            success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "receivable-message success",
                                role: "status",
                                children: success
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                lineNumber: 405,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/accounts-receivable/index.tsx",
                        lineNumber: 332,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "receivable-list",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "receivable-list-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                children: "LANÇAMENTOS"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                                lineNumber: 414,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                children: "Contas cadastradas"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                                lineNumber: 415,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/accounts-receivable/index.tsx",
                                        lineNumber: 413,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>void loadAccounts(),
                                        disabled: loading,
                                        children: loading ? "Atualizando..." : "Atualizar"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/accounts-receivable/index.tsx",
                                        lineNumber: 417,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                lineNumber: 412,
                                columnNumber: 11
                            }, this),
                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "receivable-empty",
                                children: "Carregando contas..."
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                lineNumber: 427,
                                columnNumber: 13
                            }, this) : accounts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "receivable-empty",
                                children: "Nenhuma conta cadastrada. Adicione a primeira ao lado."
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                lineNumber: 429,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "receivable-table-wrap",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("table", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                                        children: "Receita"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/accounts-receivable/index.tsx",
                                                        lineNumber: 437,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                                        children: "Vencimento"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/accounts-receivable/index.tsx",
                                                        lineNumber: 438,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                                        children: "Situação"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/accounts-receivable/index.tsx",
                                                        lineNumber: 439,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                                        children: "Valor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/accounts-receivable/index.tsx",
                                                        lineNumber: 440,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                                        children: "Ações"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/accounts-receivable/index.tsx",
                                                        lineNumber: 441,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                                lineNumber: 436,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/pages/accounts-receivable/index.tsx",
                                            lineNumber: 435,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tbody", {
                                            children: accounts.map((account)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                                    children: account.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/accounts-receivable/index.tsx",
                                                                    lineNumber: 448,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        "Cadastrada em ",
                                                                        formatDate(account.createdAt)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/pages/accounts-receivable/index.tsx",
                                                                    lineNumber: 449,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pages/accounts-receivable/index.tsx",
                                                            lineNumber: 447,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                            children: formatDate(account.dueDate)
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/accounts-receivable/index.tsx",
                                                            lineNumber: 453,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                                className: `receivable-status-select status-${account.status.toLowerCase()}`,
                                                                "aria-label": `Alterar situação de ${account.name}`,
                                                                value: account.status,
                                                                disabled: updatingStatusId === account.id,
                                                                onChange: (event)=>void handleStatusChange(account.id, event.target.value),
                                                                children: Object.entries(statusLabels).map(([value, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                        value: value,
                                                                        children: label
                                                                    }, value, false, {
                                                                        fileName: "[project]/pages/accounts-receivable/index.tsx",
                                                                        lineNumber: 469,
                                                                        columnNumber: 31
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                                                lineNumber: 455,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/accounts-receivable/index.tsx",
                                                            lineNumber: 454,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                            className: "receivable-amount",
                                                            children: formatCurrency(account.amount)
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/accounts-receivable/index.tsx",
                                                            lineNumber: 476,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                            className: "receivable-actions",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>startEditing(account),
                                                                    children: "Editar"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/accounts-receivable/index.tsx",
                                                                    lineNumber: 480,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                    className: "delete",
                                                                    type: "button",
                                                                    disabled: deletingId === account.id,
                                                                    onClick: ()=>{
                                                                        setDeleteError("");
                                                                        setDeleteConfirmationId(account.id);
                                                                    },
                                                                    children: deletingId === account.id ? "Excluindo..." : "Excluir"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/accounts-receivable/index.tsx",
                                                                    lineNumber: 486,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pages/accounts-receivable/index.tsx",
                                                            lineNumber: 479,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, account.id, true, {
                                                    fileName: "[project]/pages/accounts-receivable/index.tsx",
                                                    lineNumber: 446,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/pages/accounts-receivable/index.tsx",
                                            lineNumber: 444,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/accounts-receivable/index.tsx",
                                    lineNumber: 434,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-receivable/index.tsx",
                                lineNumber: 433,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/accounts-receivable/index.tsx",
                        lineNumber: 411,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/accounts-receivable/index.tsx",
                lineNumber: 331,
                columnNumber: 7
            }, this),
            accountPendingDeletion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "receivable-confirmation-backdrop",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                    className: "receivable-confirmation",
                    role: "alertdialog",
                    "aria-modal": "true",
                    "aria-labelledby": "delete-confirmation-title",
                    "aria-describedby": "delete-confirmation-description",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "receivable-confirmation-eyebrow",
                            children: "EXCLUSÃO PERMANENTE"
                        }, void 0, false, {
                            fileName: "[project]/pages/accounts-receivable/index.tsx",
                            lineNumber: 518,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            id: "delete-confirmation-title",
                            children: "Deseja realmente excluir esta conta?"
                        }, void 0, false, {
                            fileName: "[project]/pages/accounts-receivable/index.tsx",
                            lineNumber: 521,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            id: "delete-confirmation-description",
                            children: [
                                "A receita ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                    children: accountPendingDeletion.name
                                }, void 0, false, {
                                    fileName: "[project]/pages/accounts-receivable/index.tsx",
                                    lineNumber: 525,
                                    columnNumber: 25
                                }, this),
                                " será excluída. Não será possível recuperar essa informação."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/accounts-receivable/index.tsx",
                            lineNumber: 524,
                            columnNumber: 13
                        }, this),
                        deleteError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "receivable-message error",
                            role: "alert",
                            children: deleteError
                        }, void 0, false, {
                            fileName: "[project]/pages/accounts-receivable/index.tsx",
                            lineNumber: 529,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "receivable-confirmation-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    autoFocus: true,
                                    disabled: deletingId !== null,
                                    onClick: ()=>setDeleteConfirmationId(null),
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/pages/accounts-receivable/index.tsx",
                                    lineNumber: 534,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    className: "confirm-delete",
                                    type: "button",
                                    disabled: deletingId !== null,
                                    onClick: ()=>void handleDelete(accountPendingDeletion.id),
                                    children: deletingId === accountPendingDeletion.id ? "Excluindo..." : "Sim, excluir"
                                }, void 0, false, {
                                    fileName: "[project]/pages/accounts-receivable/index.tsx",
                                    lineNumber: 542,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/accounts-receivable/index.tsx",
                            lineNumber: 533,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/accounts-receivable/index.tsx",
                    lineNumber: 511,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/accounts-receivable/index.tsx",
                lineNumber: 510,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/pages/accounts-receivable/index.tsx",
                lineNumber: 557,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/accounts-receivable/index.tsx",
        lineNumber: 281,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0bjagab._.js.map