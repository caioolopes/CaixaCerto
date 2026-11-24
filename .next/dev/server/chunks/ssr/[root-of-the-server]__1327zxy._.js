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
"[project]/pages/accounts-payable/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AccountsPayablePage
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
;
function AccountsPayablePage() {
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
        loadAccounts();
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
            const response = await fetch("/api/v1/accounts-payable");
            const body = await response.json();
            if (!response.ok) {
                if (response.status === 401) {
                    window.location.replace("/");
                    return;
                }
                throw new Error(body.message || "Não foi possível carregar suas contas.");
            }
            setAccounts(body);
        } catch (loadError) {
            setError(loadError instanceof Error ? loadError.message : "Não foi possível carregar suas contas.");
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
            const response = await fetch(editingId ? `/api/v1/accounts-payable?id=${encodeURIComponent(editingId)}` : "/api/v1/accounts-payable", {
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
                throw new Error(body.errors || body.message || "Não foi possível criar a conta.");
            }
            setName("");
            setAmount("");
            setDueDate("");
            setStatus("PENDING");
            setSuccess(editingId ? "Conta a pagar atualizada com sucesso." : "Conta a pagar criada com sucesso.");
            setEditingId(null);
            await loadAccounts();
        } catch (saveError) {
            setError(saveError instanceof Error ? saveError.message : "Não foi possível criar a conta.");
        } finally{
            setSaving(false);
        }
    }
    function startEditing(account) {
        setEditingId(account.id);
        setName(account.name);
        setAmount(String(account.amount));
        setDueDate(account.dueDate ? new Date(account.dueDate).toISOString().slice(0, 10) : "");
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
            const response = await fetch(`/api/v1/accounts-payable?id=${encodeURIComponent(accountId)}`, {
                method: "DELETE"
            });
            const body = await response.json();
            if (!response.ok) {
                throw new Error(body.message || "Não foi possível excluir a conta.");
            }
            if (editingId === accountId) cancelEditing();
            setDeleteConfirmationId(null);
            setSuccess("Conta a pagar excluída com sucesso.");
            await loadAccounts();
        } catch (deleteError) {
            setDeleteError(deleteError instanceof Error ? deleteError.message : "Não foi possível excluir a conta.");
        } finally{
            setDeletingId(null);
        }
    }
    async function handleStatusChange(accountId, nextStatus) {
        setUpdatingStatusId(accountId);
        setError("");
        setSuccess("");
        try {
            const response = await fetch(`/api/v1/accounts-payable?id=${encodeURIComponent(accountId)}`, {
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
        } catch (statusError) {
            setError(statusError instanceof Error ? statusError.message : "Não foi possível atualizar a situação.");
        } finally{
            setUpdatingStatusId(null);
        }
    }
    const totalPending = accounts.filter((account)=>account.status === "PENDING").reduce((total, account)=>total + Number(account.amount), 0);
    const accountPendingDeletion = accounts.find((account)=>account.id === deleteConfirmationId);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
        className: `accounts-shell ${theme === "dark" ? "dark-theme" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                className: "accounts-topbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "accounts-brand",
                        href: "/dashboard",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "accounts-brand-mark",
                                "aria-hidden": "true",
                                children: "$"
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                children: "CaixaCerto"
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/accounts-payable/index.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                        className: "accounts-nav",
                        "aria-label": "Navegação financeira",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard",
                                children: "Visão geral"
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                "aria-current": "page",
                                children: "Contas a pagar"
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/accounts-receivable",
                                children: "Contas a receber"
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/accounts-payable/index.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        className: "accounts-theme-toggle",
                        type: "button",
                        onClick: ()=>setTheme(theme === "light" ? "dark" : "light"),
                        "aria-label": `Ativar tema ${theme === "light" ? "escuro" : "claro"}`,
                        children: theme === "light" ? "Tema escuro" : "Tema claro"
                    }, void 0, false, {
                        fileName: "[project]/pages/accounts-payable/index.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/accounts-payable/index.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "accounts-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: "CAIXACERTO / CONTAS A PAGAR"
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                children: "Organize seus compromissos."
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                lineNumber: 291,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/accounts-payable/index.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "accounts-back",
                        href: "/dashboard",
                        children: "← Voltar ao dashboard"
                    }, void 0, false, {
                        fileName: "[project]/pages/accounts-payable/index.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/accounts-payable/index.tsx",
                lineNumber: 288,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "accounts-overview",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("article", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                children: "Total pendente"
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: formatCurrency(totalPending)
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                lineNumber: 301,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/accounts-payable/index.tsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("article", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                children: "Contas cadastradas"
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                lineNumber: 304,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: accounts.length
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                lineNumber: 305,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/accounts-payable/index.tsx",
                        lineNumber: 303,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("article", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                children: "Próximo vencimento"
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: accounts.filter((account)=>account.status === "PENDING" && account.dueDate).sort((first, second)=>new Date(first.dueDate).getTime() - new Date(second.dueDate).getTime())[0]?.dueDate ? formatDate(accounts.filter((account)=>account.status === "PENDING" && account.dueDate).sort((first, second)=>new Date(first.dueDate).getTime() - new Date(second.dueDate).getTime())[0].dueDate) : "Nenhum"
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/accounts-payable/index.tsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/accounts-payable/index.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "accounts-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                        className: "accounts-form",
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "accounts-form-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        children: editingId ? "EDITANDO DESPESA" : "NOVA DESPESA"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/accounts-payable/index.tsx",
                                        lineNumber: 339,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        children: editingId ? "Atualizar conta" : "Cadastrar conta"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/accounts-payable/index.tsx",
                                        lineNumber: 340,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                lineNumber: 338,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                children: [
                                    "Nome",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        required: true,
                                        value: name,
                                        onChange: (event)=>setName(event.target.value),
                                        placeholder: "Ex: Fornecedor"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/accounts-payable/index.tsx",
                                        lineNumber: 345,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                lineNumber: 343,
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
                                        fileName: "[project]/pages/accounts-payable/index.tsx",
                                        lineNumber: 355,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                lineNumber: 353,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                className: "accounts-date-field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "accounts-date-label",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                children: "Vencimento"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                                lineNumber: 368,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "accounts-optional",
                                                children: "Opcional"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                                lineNumber: 369,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/accounts-payable/index.tsx",
                                        lineNumber: 367,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "accounts-date-control",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                lang: "pt-BR",
                                                value: dueDate,
                                                "aria-describedby": "accounts-date-hint",
                                                onChange: (event)=>setDueDate(event.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                                lineNumber: 372,
                                                columnNumber: 15
                                            }, this),
                                            dueDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                className: "accounts-date-clear",
                                                type: "button",
                                                onClick: ()=>setDueDate(""),
                                                "aria-label": "Remover data de vencimento",
                                                children: "×"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                                lineNumber: 380,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/accounts-payable/index.tsx",
                                        lineNumber: 371,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "accounts-date-hint",
                                        id: "accounts-date-hint",
                                        children: dueDate ? `Vencimento em ${formatDate(dueDate)}` : "Selecione uma data ou deixe sem vencimento"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/accounts-payable/index.tsx",
                                        lineNumber: 390,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                lineNumber: 366,
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
                                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                                lineNumber: 403,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                value: "PAID",
                                                children: "Pago"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                                lineNumber: 404,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                value: "CANCELLED",
                                                children: "Cancelado"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                                lineNumber: 405,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/accounts-payable/index.tsx",
                                        lineNumber: 399,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                lineNumber: 397,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: saving,
                                children: saving ? "Salvando..." : editingId ? "Salvar alterações" : "Adicionar conta"
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                lineNumber: 409,
                                columnNumber: 11
                            }, this),
                            editingId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                className: "accounts-cancel-edit",
                                type: "button",
                                onClick: cancelEditing,
                                children: "Cancelar edição"
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                lineNumber: 417,
                                columnNumber: 13
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "accounts-message error",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                lineNumber: 426,
                                columnNumber: 21
                            }, this),
                            success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "accounts-message success",
                                children: success
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                lineNumber: 427,
                                columnNumber: 23
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/accounts-payable/index.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "accounts-list",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "accounts-list-heading",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                children: "LANÇAMENTOS"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                                lineNumber: 433,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                children: "Contas cadastradas"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                                lineNumber: 434,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/accounts-payable/index.tsx",
                                        lineNumber: 432,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: loadAccounts,
                                        disabled: loading,
                                        children: loading ? "Atualizando..." : "Atualizar"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/accounts-payable/index.tsx",
                                        lineNumber: 436,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                lineNumber: 431,
                                columnNumber: 11
                            }, this),
                            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "accounts-empty",
                                children: "Carregando contas..."
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                lineNumber: 442,
                                columnNumber: 13
                            }, this) : accounts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "accounts-empty",
                                children: "Nenhuma conta cadastrada. Adicione a primeira ao lado."
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                lineNumber: 444,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "accounts-table-wrap",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("table", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                                        children: "Conta"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/accounts-payable/index.tsx",
                                                        lineNumber: 452,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                                        children: "Vencimento"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/accounts-payable/index.tsx",
                                                        lineNumber: 453,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                                        children: "Situação"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/accounts-payable/index.tsx",
                                                        lineNumber: 454,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                                        children: "Valor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/accounts-payable/index.tsx",
                                                        lineNumber: 455,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                                        children: "Ações"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/accounts-payable/index.tsx",
                                                        lineNumber: 456,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                                lineNumber: 451,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/pages/accounts-payable/index.tsx",
                                            lineNumber: 450,
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
                                                                    fileName: "[project]/pages/accounts-payable/index.tsx",
                                                                    lineNumber: 463,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        "Adicionada em ",
                                                                        formatDate(account.createdAt)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/pages/accounts-payable/index.tsx",
                                                                    lineNumber: 464,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pages/accounts-payable/index.tsx",
                                                            lineNumber: 462,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                            children: formatDate(account.dueDate)
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/accounts-payable/index.tsx",
                                                            lineNumber: 468,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                                                                className: `accounts-status-select status-${account.status.toLowerCase()}`,
                                                                "aria-label": `Alterar situação de ${account.name}`,
                                                                value: account.status,
                                                                disabled: updatingStatusId === account.id,
                                                                onChange: (event)=>handleStatusChange(account.id, event.target.value),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                        value: "PENDING",
                                                                        children: "Pendente"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/accounts-payable/index.tsx",
                                                                        lineNumber: 482,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                        value: "PAID",
                                                                        children: "Pago"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/accounts-payable/index.tsx",
                                                                        lineNumber: 483,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                                                                        value: "CANCELLED",
                                                                        children: "Cancelado"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/accounts-payable/index.tsx",
                                                                        lineNumber: 484,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                                                lineNumber: 470,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/accounts-payable/index.tsx",
                                                            lineNumber: 469,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                            className: "accounts-amount",
                                                            children: formatCurrency(account.amount)
                                                        }, void 0, false, {
                                                            fileName: "[project]/pages/accounts-payable/index.tsx",
                                                            lineNumber: 487,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                            className: "accounts-actions",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>startEditing(account),
                                                                    children: "Editar"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/pages/accounts-payable/index.tsx",
                                                                    lineNumber: 491,
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
                                                                    fileName: "[project]/pages/accounts-payable/index.tsx",
                                                                    lineNumber: 497,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/pages/accounts-payable/index.tsx",
                                                            lineNumber: 490,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, account.id, true, {
                                                    fileName: "[project]/pages/accounts-payable/index.tsx",
                                                    lineNumber: 461,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/pages/accounts-payable/index.tsx",
                                            lineNumber: 459,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pages/accounts-payable/index.tsx",
                                    lineNumber: 449,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pages/accounts-payable/index.tsx",
                                lineNumber: 448,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/accounts-payable/index.tsx",
                        lineNumber: 430,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/accounts-payable/index.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, this),
            accountPendingDeletion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "delete-confirmation-backdrop",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                    className: "delete-confirmation",
                    role: "alertdialog",
                    "aria-modal": "true",
                    "aria-labelledby": "delete-confirmation-title",
                    "aria-describedby": "delete-confirmation-description",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "delete-confirmation-eyebrow",
                            children: "EXCLUSÃO PERMANENTE"
                        }, void 0, false, {
                            fileName: "[project]/pages/accounts-payable/index.tsx",
                            lineNumber: 529,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            id: "delete-confirmation-title",
                            children: "Deseja realmente excluir esta conta?"
                        }, void 0, false, {
                            fileName: "[project]/pages/accounts-payable/index.tsx",
                            lineNumber: 530,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            id: "delete-confirmation-description",
                            children: [
                                "A conta ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                    children: accountPendingDeletion.name
                                }, void 0, false, {
                                    fileName: "[project]/pages/accounts-payable/index.tsx",
                                    lineNumber: 534,
                                    columnNumber: 23
                                }, this),
                                " será excluída. Não será possível recuperar essa informação."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/accounts-payable/index.tsx",
                            lineNumber: 533,
                            columnNumber: 13
                        }, this),
                        deleteError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "accounts-message error",
                            role: "alert",
                            children: deleteError
                        }, void 0, false, {
                            fileName: "[project]/pages/accounts-payable/index.tsx",
                            lineNumber: 538,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "delete-confirmation-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    autoFocus: true,
                                    disabled: deletingId !== null,
                                    onClick: ()=>setDeleteConfirmationId(null),
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/pages/accounts-payable/index.tsx",
                                    lineNumber: 543,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    className: "confirm-delete",
                                    type: "button",
                                    disabled: deletingId !== null,
                                    onClick: ()=>handleDelete(accountPendingDeletion.id),
                                    children: deletingId === accountPendingDeletion.id ? "Excluindo..." : "Sim, excluir"
                                }, void 0, false, {
                                    fileName: "[project]/pages/accounts-payable/index.tsx",
                                    lineNumber: 551,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pages/accounts-payable/index.tsx",
                            lineNumber: 542,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/accounts-payable/index.tsx",
                    lineNumber: 522,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/accounts-payable/index.tsx",
                lineNumber: 521,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/pages/accounts-payable/index.tsx",
                lineNumber: 566,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/accounts-payable/index.tsx",
        lineNumber: 265,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1327zxy._.js.map