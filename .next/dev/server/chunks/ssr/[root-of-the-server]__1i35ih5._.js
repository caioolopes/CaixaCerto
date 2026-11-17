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
"[project]/pages/dashboard/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$swr__$5b$external$5d$__$28$swr$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$swr$29$__ = __turbopack_context__.i("[externals]/swr [external] (swr, esm_import, [project]/node_modules/swr)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$swr__$5b$external$5d$__$28$swr$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$swr$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$swr__$5b$external$5d$__$28$swr$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$swr$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function fetchCurrentUser(url) {
    const response = await fetch(url);
    if (!response.ok) {
        const errorBody = await response.json();
        const error = new Error(errorBody.message || "Não foi possível carregar sua conta.");
        error.status = response.status;
        error.action = errorBody.action;
        throw error;
    }
    return response.json();
}
function DashboardPage() {
    const { data: user, error } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$swr__$5b$external$5d$__$28$swr$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$swr$29$__["default"])("/api/v1/user", fetchCurrentUser);
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("light");
    const [themeReady, setThemeReady] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [loggingOut, setLoggingOut] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [logoutError, setLogoutError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
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
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (error?.status === 401) {
            window.location.replace("/");
        }
    }, [
        error
    ]);
    async function handleLogout() {
        setLoggingOut(true);
        setLogoutError("");
        try {
            const response = await fetch("/api/v1/sessions", {
                method: "DELETE"
            });
            if (!response.ok) {
                const errorBody = await response.json();
                throw new Error(errorBody.message || "Não foi possível encerrar sua sessão.");
            }
            window.location.assign("/");
        } catch (logoutFailure) {
            setLogoutError(logoutFailure instanceof Error ? logoutFailure.message : "Não foi possível encerrar sua sessão.");
            setLoggingOut(false);
        }
    }
    if (!user || error?.status === 401) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
            className: "dashboard-loading",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    children: error && error.status !== 401 ? "Não foi possível carregar sua área inicial." : "Carregando sua área inicial..."
                }, void 0, false, {
                    fileName: "[project]/pages/dashboard/index.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                error && error.status !== 401 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                    children: error.action || error.message
                }, void 0, false, {
                    fileName: "[project]/pages/dashboard/index.tsx",
                    lineNumber: 94,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("style", {
                    children: `
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
        `
                }, void 0, false, {
                    fileName: "[project]/pages/dashboard/index.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/pages/dashboard/index.tsx",
            lineNumber: 87,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
        className: `dashboard-shell ${theme === "dark" ? "dark-theme" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                className: "dashboard-topbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                        className: "dashboard-brand",
                        href: "/dashboard",
                        "aria-label": "CaixaCerto início",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "dashboard-brand-mark",
                                "aria-hidden": "true",
                                children: "$"
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard/index.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                children: "CaixaCerto"
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard/index.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/dashboard/index.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                        className: "dashboard-nav",
                        "aria-label": "Navegação principal",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                href: "#visao-geral",
                                children: "Visão geral"
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard/index.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                href: "#recursos",
                                children: "Recursos"
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard/index.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/dashboard/index.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "dashboard-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                className: "dashboard-theme",
                                type: "button",
                                onClick: ()=>setTheme(theme === "light" ? "dark" : "light"),
                                "aria-label": `Ativar tema ${theme === "light" ? "escuro" : "claro"}`,
                                children: theme === "light" ? "Tema escuro" : "Tema claro"
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard/index.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                className: "dashboard-logout",
                                type: "button",
                                onClick: handleLogout,
                                disabled: loggingOut,
                                children: loggingOut ? "Saindo..." : "Sair"
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard/index.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/dashboard/index.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/dashboard/index.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "dashboard-hero",
                id: "visao-geral",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "dashboard-hero-copy",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "dashboard-eyebrow",
                                children: "CAIXACERTO / VISÃO GERAL"
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard/index.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                children: "Seu financeiro, mais claro a cada dia."
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard/index.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "dashboard-intro",
                                children: [
                                    "Olá, ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                        children: user.username
                                    }, void 0, false, {
                                        fileName: "[project]/pages/dashboard/index.tsx",
                                        lineNumber: 152,
                                        columnNumber: 18
                                    }, this),
                                    ". Organize suas contas e tenha mais tranquilidade para decidir os próximos passos do seu negócio."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/dashboard/index.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                className: "dashboard-primary-link",
                                href: "#recursos",
                                children: [
                                    "Conheça seus recursos ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/dashboard/index.tsx",
                                        lineNumber: 156,
                                        columnNumber: 35
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/dashboard/index.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/dashboard/index.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "dashboard-summary",
                        "aria-label": "Resumo do CaixaCerto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "summary-top",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "summary-indicator"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/dashboard/index.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        children: "Seu espaço financeiro"
                                    }, void 0, false, {
                                        fileName: "[project]/pages/dashboard/index.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/dashboard/index.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "summary-graphic",
                                "aria-hidden": "true",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {}, void 0, false, {
                                        fileName: "[project]/pages/dashboard/index.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {}, void 0, false, {
                                        fileName: "[project]/pages/dashboard/index.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {}, void 0, false, {
                                        fileName: "[project]/pages/dashboard/index.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {}, void 0, false, {
                                        fileName: "[project]/pages/dashboard/index.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {}, void 0, false, {
                                        fileName: "[project]/pages/dashboard/index.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {}, void 0, false, {
                                        fileName: "[project]/pages/dashboard/index.tsx",
                                        lineNumber: 170,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("i", {}, void 0, false, {
                                        fileName: "[project]/pages/dashboard/index.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/dashboard/index.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: "Uma visão organizada começa com cada conta no lugar certo."
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard/index.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "summary-caption",
                                children: "SIMPLES · SEGURO · SEU"
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard/index.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/dashboard/index.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/dashboard/index.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "dashboard-welcome",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "dashboard-eyebrow",
                                children: "PRONTO PARA COMEÇAR?"
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard/index.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                children: "Bem-vindo ao seu novo ponto de partida."
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard/index.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/dashboard/index.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: "Use o CaixaCerto para acompanhar o que entra, planejar o que sai e tomar decisões com mais confiança."
                    }, void 0, false, {
                        fileName: "[project]/pages/dashboard/index.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/dashboard/index.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "dashboard-features",
                id: "recursos",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("article", {
                        className: "dashboard-feature-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "feature-number",
                                children: "01"
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard/index.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "feature-icon",
                                "aria-hidden": "true",
                                children: "↓"
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard/index.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                children: "Contas a pagar"
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard/index.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: "Reúna despesas e vencimentos para manter os compromissos do seu negócio sempre à vista."
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard/index.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/dashboard/index.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("article", {
                        className: "dashboard-feature-card feature-highlight",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "feature-number",
                                children: "02"
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard/index.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "feature-icon",
                                "aria-hidden": "true",
                                children: "↑"
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard/index.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                children: "Contas a receber"
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard/index.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: "Acompanhe entradas previstas e recebidas para entender melhor o movimento do seu caixa."
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard/index.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/dashboard/index.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("article", {
                        className: "dashboard-feature-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "feature-number",
                                children: "03"
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard/index.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "feature-icon",
                                "aria-hidden": "true",
                                children: "⌁"
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard/index.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                children: "Fluxo financeiro"
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard/index.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: "Tenha uma visão mais clara das movimentações e planeje o crescimento da sua empresa."
                            }, void 0, false, {
                                fileName: "[project]/pages/dashboard/index.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/dashboard/index.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/dashboard/index.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("footer", {
                className: "dashboard-footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        children: [
                            "Conectado como ",
                            user.email
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/dashboard/index.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        children: "Organização precisa para crescer com confiança."
                    }, void 0, false, {
                        fileName: "[project]/pages/dashboard/index.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/dashboard/index.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            logoutError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "dashboard-error",
                role: "alert",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        children: logoutError
                    }, void 0, false, {
                        fileName: "[project]/pages/dashboard/index.tsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setLogoutError(""),
                        "aria-label": "Fechar",
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/pages/dashboard/index.tsx",
                        lineNumber: 227,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/dashboard/index.tsx",
                lineNumber: 225,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/pages/dashboard/index.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/dashboard/index.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1i35ih5._.js.map