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
"[project]/pages/status/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "default",
    ()=>StatusPage
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$swr__$5b$external$5d$__$28$swr$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$swr$29$__ = __turbopack_context__.i("[externals]/swr [external] (swr, esm_import, [project]/node_modules/swr)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$swr__$5b$external$5d$__$28$swr$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$swr$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$swr__$5b$external$5d$__$28$swr$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$swr$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
async function fetchAPI(key) {
    const response = await fetch(key);
    if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.statusText}`);
    }
    const responseBody = await response.json();
    return responseBody;
}
function StatusPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
        style: styles.container,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            style: styles.card,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                    style: styles.header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            style: styles.statusIndicator
                        }, void 0, false, {
                            fileName: "[project]/pages/status/index.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                            style: styles.title,
                            children: "System Status"
                        }, void 0, false, {
                            fileName: "[project]/pages/status/index.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/status/index.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(UpdatedAt, {}, void 0, false, {
                    fileName: "[project]/pages/status/index.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(DatabaseStatus, {}, void 0, false, {
                    fileName: "[project]/pages/status/index.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/pages/status/index.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pages/status/index.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
function UpdatedAt() {
    const { isLoading, data } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$swr__$5b$external$5d$__$28$swr$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$swr$29$__["default"])("/api/v1/status", fetchAPI, {
        refreshInterval: 2000
    });
    let updatedAtText = "Carregando...";
    if (!isLoading && data) {
        updatedAtText = new Date(data.updated_at).toLocaleString("pt-BR");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: styles.updatedAtContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                style: styles.updatedAtLabel,
                children: "Última atualização:"
            }, void 0, false, {
                fileName: "[project]/pages/status/index.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                style: styles.updatedAtValue,
                children: updatedAtText
            }, void 0, false, {
                fileName: "[project]/pages/status/index.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/status/index.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
function DatabaseStatus() {
    const { isLoading, data } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$swr__$5b$external$5d$__$28$swr$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$swr$29$__["default"])("/api/v1/status", fetchAPI, {
        refreshInterval: 2000
    });
    let databaseStatusInformation = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        style: styles.loadingText,
        children: "Carregando dados do banco..."
    }, void 0, false, {
        fileName: "[project]/pages/status/index.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
    if (!isLoading && data) {
        databaseStatusInformation = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            style: styles.metricsGrid,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: styles.metricItem,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            style: styles.metricLabel,
                            children: "Versão"
                        }, void 0, false, {
                            fileName: "[project]/pages/status/index.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            style: styles.metricValue,
                            children: data.dependencies.database.version
                        }, void 0, false, {
                            fileName: "[project]/pages/status/index.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/status/index.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: styles.metricItem,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            style: styles.metricLabel,
                            children: "Conexões Abertas"
                        }, void 0, false, {
                            fileName: "[project]/pages/status/index.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            style: styles.metricHighlight,
                            children: data.dependencies.database.opened_connections
                        }, void 0, false, {
                            fileName: "[project]/pages/status/index.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/status/index.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    style: styles.metricItem,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            style: styles.metricLabel,
                            children: "Conexões Máximas"
                        }, void 0, false, {
                            fileName: "[project]/pages/status/index.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            style: styles.metricValue,
                            children: data.dependencies.database.max_connections
                        }, void 0, false, {
                            fileName: "[project]/pages/status/index.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pages/status/index.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/pages/status/index.tsx",
            lineNumber: 82,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        style: styles.databaseSection,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                style: styles.subtitle,
                children: "Database"
            }, void 0, false, {
                fileName: "[project]/pages/status/index.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            databaseStatusInformation
        ]
    }, void 0, true, {
        fileName: "[project]/pages/status/index.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
const styles = {
    container: {
        minHeight: "100vh",
        backgroundColor: "#030712",
        color: "#f8fafc",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        boxSizing: "border-box"
    },
    card: {
        backgroundColor: "#0b1329",
        border: "1px solid #1e3a8a",
        borderRadius: "16px",
        padding: "32px",
        width: "100%",
        maxWidth: "540px",
        boxShadow: "0 10px 30px -10px rgba(14, 165, 233, 0.15)"
    },
    header: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "16px"
    },
    statusIndicator: {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "#38bdf8",
        boxShadow: "0 0 12px #38bdf8"
    },
    title: {
        fontSize: "24px",
        fontWeight: 700,
        color: "#ffffff",
        margin: 0,
        letterSpacing: "-0.5px"
    },
    updatedAtContainer: {
        display: "flex",
        gap: "8px",
        fontSize: "14px",
        marginBottom: "24px",
        paddingBottom: "16px",
        borderBottom: "1px solid #172554"
    },
    updatedAtLabel: {
        color: "#94a3b8"
    },
    updatedAtValue: {
        color: "#60a5fa",
        fontWeight: 500
    },
    databaseSection: {
        display: "flex",
        flexDirection: "column",
        gap: "16px"
    },
    subtitle: {
        fontSize: "18px",
        fontWeight: 600,
        color: "#38bdf8",
        margin: 0,
        textTransform: "uppercase",
        letterSpacing: "0.5px"
    },
    metricsGrid: {
        display: "flex",
        flexDirection: "column",
        gap: "12px"
    },
    metricItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#030712",
        padding: "12px 16px",
        borderRadius: "8px",
        border: "1px solid #1d4ed8"
    },
    metricLabel: {
        color: "#94a3b8",
        fontSize: "14px"
    },
    metricValue: {
        color: "#f8fafc",
        fontFamily: 'monospace',
        fontWeight: 600,
        fontSize: "15px"
    },
    metricHighlight: {
        color: "#60a5fa",
        fontFamily: 'monospace',
        fontWeight: 700,
        fontSize: "16px"
    },
    loadingText: {
        color: "#60a5fa",
        fontSize: "14px",
        fontStyle: "italic"
    }
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__00ypt1n._.js.map