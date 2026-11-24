module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:url [external] (node:url, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}),
"[project]/infra/controller.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$cookie__$5b$external$5d$__$28$cookie$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$cookie$29$__ = __turbopack_context__.i("[externals]/cookie [external] (cookie, esm_import, [project]/node_modules/cookie)");
var __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$session$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/models/session.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$errors$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/infra/errors.ts [api] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$cookie__$5b$external$5d$__$28$cookie$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$cookie$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$session$2e$ts__$5b$api$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$cookie__$5b$external$5d$__$28$cookie$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$cookie$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$session$2e$ts__$5b$api$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
function onNoMatchHandler(request, response) {
    const publicErrorObject = new __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$errors$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["MethodNotAllowedError"]();
    response.status(publicErrorObject.statusCode).json(publicErrorObject);
}
function onErrorHandler(error, request, response) {
    if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$errors$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["ValidationError"] || error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$errors$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["NotFoundError"] || error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$errors$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["UnauthorizedError"]) {
        return response.status(error.statusCode).json(error);
    }
    const publicErrorObject = new __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$errors$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["InternalServerError"]({
        cause: error,
        statusCode: 500
    });
    console.error(publicErrorObject);
    response.status(publicErrorObject.statusCode).json(publicErrorObject);
}
async function setSessionCookie(sessionToken, response) {
    const setCookie = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$cookie__$5b$external$5d$__$28$cookie$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$cookie$29$__["stringifySetCookie"])({
        name: "session_id",
        value: sessionToken,
        path: "/",
        maxAge: __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$session$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].EXPIRATION_IN_MILLISECONDS / 1000,
        secure: ("TURBOPACK compile-time value", "development") === "production",
        httpOnly: true
    });
    response.appendHeader("Set-Cookie", setCookie);
}
async function clearSessionCookie(response) {
    const setCookie = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$cookie__$5b$external$5d$__$28$cookie$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$cookie$29$__["stringifySetCookie"])({
        name: "session_id",
        value: "invalid",
        path: "/",
        maxAge: -1,
        secure: ("TURBOPACK compile-time value", "development") === "production",
        httpOnly: true
    });
    response.appendHeader("Set-Cookie", setCookie);
}
const controller = {
    errorHandlers: {
        onNoMatch: onNoMatchHandler,
        onError: onErrorHandler
    },
    setSessionCookie,
    clearSessionCookie
};
const __TURBOPACK__default__export__ = controller;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/infra/database.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$errors$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/infra/errors.ts [api] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
async function query(queryObject) {
    let client;
    try {
        client = await getNewClient();
        const result = await client.query(queryObject);
        return result;
    } catch (error) {
        const serviceErrorObject = new __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$errors$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["ServiceError"]({
            message: "Erro na conexão com Banco ou na Query.",
            cause: error
        });
        throw serviceErrorObject;
    } finally{
        await client?.end();
    }
}
async function getNewClient() {
    const client = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["Client"]({
        connectionString: process.env.DATABASE_URL,
        ssl: getSSLValues()
    });
    await client.connect();
    return client;
}
const database = {
    query,
    getNewClient
};
const __TURBOPACK__default__export__ = database;
function getSSLValues() {
    if (process.env.POSTGRES_CA) {
        return {
            ca: process.env.POSTGRES_CA
        };
    }
    return ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : false;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/infra/errors.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InternalServerError",
    ()=>InternalServerError,
    "MethodNotAllowedError",
    ()=>MethodNotAllowedError,
    "NotFoundError",
    ()=>NotFoundError,
    "ServiceError",
    ()=>ServiceError,
    "UnauthorizedError",
    ()=>UnauthorizedError,
    "ValidationError",
    ()=>ValidationError
]);
class InternalServerError extends Error {
    action;
    statusCode;
    constructor({ cause, statusCode }){
        super("Um erro interno não esperado aconteceu.", {
            cause
        });
        this.name = "InternalServerError";
        this.action = "Entre em contato com o suporte.";
        this.statusCode = statusCode || 500;
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            action: this.action,
            status_code: this.statusCode
        };
    }
}
class ServiceError extends Error {
    constructor({ cause, message }){
        super(message || "Serviço indisponível no momento.", {
            cause
        });
        this.name = "ServiceError";
        this.action = "Verifique se o serviço está disponível.";
        this.statusCode = 503;
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            action: this.action,
            status_code: this.statusCode
        };
    }
}
class ValidationError extends Error {
    constructor({ cause, message, action }){
        super(message || "Um erro de validação ocorreu.", {
            cause
        });
        this.name = "ValidationError";
        this.action = action || "Ajuste os dados enviados e tente novamente.";
        this.statusCode = 400;
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            action: this.action,
            status_code: this.statusCode
        };
    }
}
class NotFoundError extends Error {
    constructor({ cause, message, action }){
        super(message || "Não foi possível encontrar este recurso no sistema.", {
            cause
        });
        this.name = "NotFoundError";
        this.action = action || "Verifique se os parâmetros enviados na consulta estão certos.";
        this.statusCode = 404;
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            action: this.action,
            status_code: this.statusCode
        };
    }
}
class UnauthorizedError extends Error {
    constructor({ cause, message, action }){
        super(message || "Usuário não autenticado.", {
            cause
        });
        this.name = "UnauthorizedError";
        this.action = action || "Faça novamente o login para continuar.";
        this.statusCode = 401;
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            action: this.action,
            status_code: this.statusCode
        };
    }
}
class MethodNotAllowedError extends Error {
    constructor(){
        super("Método não permitido para este endpoint.");
        this.name = "MethodNotAllowedError";
        this.action = "Verifique se o método HTTP enviado é válido para este endpoint.";
        this.statusCode = 405;
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            action: this.action,
            status_code: this.statusCode
        };
    }
}
}),
"[project]/lib/prisma.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import, [project]/node_modules/pg)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$adapter$2d$pg__$5b$external$5d$__$2840$prisma$2f$adapter$2d$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$29$__ = __turbopack_context__.i("[externals]/@prisma/adapter-pg [external] (@prisma/adapter-pg, esm_import, [project]/node_modules/@prisma/adapter-pg)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$client$2e$ts__$5b$api$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/generated/prisma/client.ts [api] (ecmascript) <locals>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$adapter$2d$pg__$5b$external$5d$__$2840$prisma$2f$adapter$2d$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$adapter$2d$pg__$5b$external$5d$__$2840$prisma$2f$adapter$2d$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const connectionString = process.env.DATABASE_URL;
const pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$pg$29$__["Pool"]({
    connectionString
});
const adapter = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$adapter$2d$pg__$5b$external$5d$__$2840$prisma$2f$adapter$2d$pg$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$29$__["PrismaPg"](pool);
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$client$2e$ts__$5b$api$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PrismaClient"]({
    adapter,
    log: ("TURBOPACK compile-time truthy", 1) ? [
        "error",
        "warn"
    ] : "TURBOPACK unreachable"
});
if ("TURBOPACK compile-time truthy", 1) {
    globalForPrisma.prisma = prisma;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/models/session.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$database$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/infra/database.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$errors$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/infra/errors.ts [api] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$database$2e$ts__$5b$api$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$database$2e$ts__$5b$api$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const EXPIRATION_IN_MILLISECONDS = 60 * 60 * 24 * 30 * 1000; // 30 Days
async function findOneValidByToken(sessionToken) {
    const sessionFound = await runSelectQuery(sessionToken);
    return sessionFound;
    //TURBOPACK unreachable
    ;
    async function runSelectQuery(sessionToken) {
        const results = await __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$database$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].query({
            text: `
        SELECT
          *
        FROM
          sessions
        WHERE
          token = $1
          AND expires_at > NOW()
        LIMIT
          1
      ;`,
            values: [
                sessionToken
            ]
        });
        if (results.rowCount === 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$errors$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["UnauthorizedError"]({
                cause: null,
                message: "Usuário não possui sessão ativa.",
                action: "Verifique se este usuário está logado e tente novamente."
            });
        }
        return results.rows[0];
    }
}
async function create(userId) {
    const token = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].randomBytes(48).toString("hex");
    const newSession = await runInsertQuery(token, userId);
    return newSession;
    //TURBOPACK unreachable
    ;
    async function runInsertQuery(token, userId) {
        // O banco calcula o prazo para evitar o deslocamento de fuso ao salvar Date do Node.
        const results = await __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$database$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].query({
            text: `
        INSERT INTO
          sessions (token, user_id, expires_at)
        VALUES
          ($1, $2, NOW() + ($3::double precision * INTERVAL '1 millisecond'))
        RETURNING
          *
      ;`,
            values: [
                token,
                userId,
                EXPIRATION_IN_MILLISECONDS
            ]
        });
        return results.rows[0];
    }
}
async function renew(sessionId) {
    const renewedSessionObject = runUpdateQuery(sessionId);
    return renewedSessionObject;
    //TURBOPACK unreachable
    ;
    async function runUpdateQuery(sessionId) {
        const results = await __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$database$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].query({
            text: `
        UPDATE
          sessions
        SET
          expires_at = NOW() + ($2::double precision * INTERVAL '1 millisecond'),
          updated_at = NOW()
        WHERE
          id = $1
        RETURNING
          *
        ;`,
            values: [
                sessionId,
                EXPIRATION_IN_MILLISECONDS
            ]
        });
        return results.rows[0];
    }
}
async function expireById(sessionId) {
    const expiredSessionObject = await runUpdateQuery(sessionId);
    return expiredSessionObject;
    //TURBOPACK unreachable
    ;
    async function runUpdateQuery(sessionId) {
        const results = await __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$database$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].query({
            text: `
        UPDATE
          sessions
        SET
          expires_at = expires_at - interval '1 year',
          updated_at = NOW()
                  WHERE
          id = $1
        RETURNING
          *
        ;`,
            values: [
                sessionId
            ]
        });
        return results.rows[0];
    }
}
const session = {
    create,
    findOneValidByToken,
    renew,
    expireById,
    EXPIRATION_IN_MILLISECONDS
};
const __TURBOPACK__default__export__ = session;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/pages/api/v1/accounts-receivable/index.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "createAccountReceivable",
    ()=>createAccountReceivable,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$connect__$5b$external$5d$__$28$next$2d$connect$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$connect$29$__ = __turbopack_context__.i("[externals]/next-connect [external] (next-connect, esm_import, [project]/node_modules/next-connect)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$controller$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/infra/controller.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$session$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/models/session.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$errors$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/infra/errors.ts [api] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$connect__$5b$external$5d$__$28$next$2d$connect$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$connect$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$controller$2e$ts__$5b$api$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$session$2e$ts__$5b$api$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$connect__$5b$external$5d$__$28$next$2d$connect$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$connect$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$controller$2e$ts__$5b$api$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$session$2e$ts__$5b$api$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const router = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$connect__$5b$external$5d$__$28$next$2d$connect$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$next$2d$connect$29$__["createRouter"])();
router.post(postHandler);
router.get(getHandler);
router.patch(patchHandler);
router.delete(deleteHandler);
const __TURBOPACK__default__export__ = router.handler(__TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$controller$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].errorHandlers);
// Cria uma nova conta a receber (POST /api/v1/accounts-receivable)
async function postHandler(request, response) {
    const sessionObject = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$session$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].findOneValidByToken(request.cookies.session_id);
    const { name, amount, dueDate, status } = request.body;
    if (!name || amount === undefined || amount === null) {
        return response.status(400).json({
            message: "Os campos 'name' e 'amount' são obrigatórios."
        });
    }
    const result = await createAccountReceivable({
        userId: sessionObject.user_id,
        name,
        amount: Number(amount),
        dueDate,
        status
    });
    return response.status(200).json({
        status: 200,
        message: "Solicitação processada com sucesso",
        data: result
    });
}
// Lista todas as contas a receber do usuário (GET /api/v1/accounts-receivable)
async function getHandler(request, response) {
    const sessionObject = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$session$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].findOneValidByToken(request.cookies.session_id);
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["prisma"].contaReceber.findMany({
        where: {
            userId: sessionObject.user_id
        },
        orderBy: {
            dueDate: "asc"
        }
    });
    return response.status(200).json(result);
}
async function patchHandler(request, response) {
    const sessionObject = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$session$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].findOneValidByToken(request.cookies.session_id);
    const id = String(request.query.id || request.body?.id || "");
    if (!id) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$errors$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["ValidationError"]({
            cause: null,
            message: "O id da conta a receber é obrigatório.",
            action: "Informe o id da conta a receber que deseja atualizar."
        });
    }
    const existingAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["prisma"].contaReceber.findFirst({
        where: {
            id,
            userId: sessionObject.user_id
        }
    });
    if (!existingAccount) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$errors$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["NotFoundError"]({
            cause: null,
            message: "Conta a receber não encontrada.",
            action: "Verifique o id informado e tente novamente."
        });
    }
    const { name, amount, dueDate, status } = request.body;
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["prisma"].contaReceber.update({
        where: {
            id
        },
        data: {
            ...name !== undefined ? {
                name
            } : {},
            ...amount !== undefined ? {
                amount: Number(amount)
            } : {},
            ...dueDate !== undefined ? {
                dueDate: dueDate ? new Date(dueDate) : null
            } : {},
            ...status !== undefined ? {
                status
            } : {}
        }
    });
    return response.status(200).json(result);
}
async function deleteHandler(request, response) {
    const sessionObject = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$session$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].findOneValidByToken(request.cookies.session_id);
    const id = String(request.query.id || request.body?.id || "");
    if (!id) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$errors$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["ValidationError"]({
            cause: null,
            message: "O id da conta a receber é obrigatório.",
            action: "Informe o id da conta a receber que deseja excluir."
        });
    }
    const existingAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["prisma"].contaReceber.findFirst({
        where: {
            id,
            userId: sessionObject.user_id
        }
    });
    if (!existingAccount) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$errors$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["NotFoundError"]({
            cause: null,
            message: "Conta a receber não encontrada.",
            action: "Verifique o id informado e tente novamente."
        });
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["prisma"].contaReceber.delete({
        where: {
            id
        }
    });
    return response.status(200).json({
        message: "Conta a receber excluída com sucesso."
    });
}
async function createAccountReceivable(data) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["prisma"].contaReceber.create({
        data: {
            userId: data.userId,
            name: data.name,
            amount: data.amount,
            dueDate: data.dueDate ? new Date(data.dueDate) : null,
            status: data.status ?? "PENDING"
        }
    });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/generated/prisma/client.ts [api] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* !!! This is code generated by Prisma. Do not edit directly. !!! */ /* eslint-disable */ // biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * This file should be your main import to use Prisma. Through it you get access to all the models, enums, and input types.
 * If you're looking for something you can import in the client-side of your application, please refer to the `browser.ts` file instead.
 *
 * 🟢 You can import this file directly.
 */ __turbopack_context__.s([
    "PrismaClient",
    ()=>PrismaClient
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:url [external] (node:url, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$internal$2f$class$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/generated/prisma/internal/class.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$internal$2f$prismaNamespace$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/generated/prisma/internal/prismaNamespace.ts [api] (ecmascript)");
var __TURBOPACK__import$2e$meta__ = {
    get url () {
        return __turbopack_context__.F("src/generated/prisma/client.ts");
    },
    env: {
        DEV: true,
        PROD: false,
        MODE: "development",
        BASE_URL: "/",
        SSR: true
    },
    get turbopackHot () {
        return __turbopack_context__.m.hot;
    }
};
;
;
globalThis['__dirname'] = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["dirname"]((0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__["fileURLToPath"])(__TURBOPACK__import$2e$meta__.url));
;
;
;
;
const PrismaClient = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$internal$2f$class$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["getPrismaClientClass"]();
;
}),
"[project]/src/generated/prisma/internal/class.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPrismaClientClass",
    ()=>getPrismaClientClass
]);
/* !!! This is code generated by Prisma. Do not edit directly. !!! */ /* eslint-disable */ // biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * WARNING: This is an internal file that is subject to change!
 *
 * 🛑 Under no circumstances should you import this file directly! 🛑
 *
 * Please import the `PrismaClient` class from the `client.ts` file instead.
 */ var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client/runtime/client [external] (@prisma/client/runtime/client, cjs, [project]/node_modules/@prisma/client)");
;
const config = {
    "previewFeatures": [],
    "clientVersion": "7.10.1",
    "engineVersion": "d1b3f377ca835d73fd50954a5e22128b9ebdd6b8",
    "activeProvider": "postgresql",
    "inlineSchema": "generator client {\n  provider = \"prisma-client\"\n  output   = \"../src/generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nenum BillStatus {\n  PENDING\n  PAID\n  CANCELLED\n}\n\nmodel User {\n  id        String   @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  username  String   @unique\n  email     String   @unique\n  password  String\n  createdAt DateTime @default(now()) @map(\"created_at\")\n  updatedAt DateTime @default(now()) @updatedAt @map(\"updated_at\")\n\n  sessions            Session[]\n  contasPagar         ContaPagar[]\n  contasReceber       ContaReceber[]\n  passwordResetTokens PasswordResetToken[]\n\n  @@map(\"users\")\n}\n\nmodel Session {\n  id        String   @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  token     String   @unique\n  userId    String   @map(\"user_id\") @db.Uuid\n  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n  expiresAt DateTime @map(\"expires_at\")\n  createdAt DateTime @default(now()) @map(\"created_at\")\n  updatedAt DateTime @default(now()) @updatedAt @map(\"updated_at\")\n\n  @@index([userId])\n  @@map(\"sessions\")\n}\n\nmodel ContaPagar {\n  id        String     @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  userId    String     @map(\"user_id\") @db.Uuid\n  user      User       @relation(fields: [userId], references: [id], onDelete: Cascade)\n  name      String\n  amount    Decimal    @db.Decimal(10, 2)\n  dueDate   DateTime?  @map(\"due_date\")\n  status    BillStatus @default(PENDING)\n  createdAt DateTime   @default(now()) @map(\"created_at\")\n  updatedAt DateTime   @default(now()) @updatedAt @map(\"updated_at\")\n\n  @@index([userId])\n  @@map(\"contas_pagar\")\n}\n\nmodel ContaReceber {\n  id        String     @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  userId    String     @map(\"user_id\") @db.Uuid\n  user      User       @relation(fields: [userId], references: [id], onDelete: Cascade)\n  name      String\n  amount    Decimal    @db.Decimal(10, 2)\n  dueDate   DateTime?  @map(\"due_date\")\n  status    BillStatus @default(PENDING)\n  createdAt DateTime   @default(now()) @map(\"created_at\")\n  updatedAt DateTime   @default(now()) @updatedAt @map(\"updated_at\")\n\n  @@index([userId])\n  @@map(\"contas_receber\")\n}\n\nmodel PasswordResetToken {\n  id        String    @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  userId    String    @map(\"user_id\") @db.Uuid\n  user      User      @relation(fields: [userId], references: [id], onDelete: Cascade)\n  codeHash  String    @unique @map(\"code_hash\")\n  expiresAt DateTime  @map(\"expires_at\")\n  usedAt    DateTime? @map(\"used_at\")\n  attempts  Int       @default(0)\n  createdAt DateTime  @default(now()) @map(\"created_at\")\n\n  @@index([userId])\n  @@map(\"password_reset_tokens\")\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"username\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"sessions\",\"kind\":\"object\",\"type\":\"Session\",\"relationName\":\"SessionToUser\"},{\"name\":\"contasPagar\",\"kind\":\"object\",\"type\":\"ContaPagar\",\"relationName\":\"ContaPagarToUser\"},{\"name\":\"contasReceber\",\"kind\":\"object\",\"type\":\"ContaReceber\",\"relationName\":\"ContaReceberToUser\"},{\"name\":\"passwordResetTokens\",\"kind\":\"object\",\"type\":\"PasswordResetToken\",\"relationName\":\"PasswordResetTokenToUser\"}],\"dbName\":\"users\",\"schema\":null},\"Session\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"token\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"user_id\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"SessionToUser\"},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"expires_at\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"}],\"dbName\":\"sessions\",\"schema\":null},\"ContaPagar\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"user_id\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"ContaPagarToUser\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"amount\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"dueDate\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"due_date\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"BillStatus\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"}],\"dbName\":\"contas_pagar\",\"schema\":null},\"ContaReceber\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"user_id\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"ContaReceberToUser\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"amount\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"dueDate\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"due_date\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"BillStatus\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"}],\"dbName\":\"contas_receber\",\"schema\":null},\"PasswordResetToken\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"user_id\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"PasswordResetTokenToUser\"},{\"name\":\"codeHash\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"code_hash\"},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"expires_at\"},{\"name\":\"usedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"used_at\"},{\"name\":\"attempts\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"}],\"dbName\":\"password_reset_tokens\",\"schema\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"orderBy\",\"cursor\",\"user\",\"sessions\",\"contasPagar\",\"contasReceber\",\"passwordResetTokens\",\"_count\",\"User.findUnique\",\"User.findUniqueOrThrow\",\"User.findFirst\",\"User.findFirstOrThrow\",\"User.findMany\",\"data\",\"User.createOne\",\"User.createMany\",\"User.createManyAndReturn\",\"User.updateOne\",\"User.updateMany\",\"User.updateManyAndReturn\",\"create\",\"update\",\"User.upsertOne\",\"User.deleteOne\",\"User.deleteMany\",\"having\",\"_min\",\"_max\",\"User.groupBy\",\"User.aggregate\",\"Session.findUnique\",\"Session.findUniqueOrThrow\",\"Session.findFirst\",\"Session.findFirstOrThrow\",\"Session.findMany\",\"Session.createOne\",\"Session.createMany\",\"Session.createManyAndReturn\",\"Session.updateOne\",\"Session.updateMany\",\"Session.updateManyAndReturn\",\"Session.upsertOne\",\"Session.deleteOne\",\"Session.deleteMany\",\"Session.groupBy\",\"Session.aggregate\",\"ContaPagar.findUnique\",\"ContaPagar.findUniqueOrThrow\",\"ContaPagar.findFirst\",\"ContaPagar.findFirstOrThrow\",\"ContaPagar.findMany\",\"ContaPagar.createOne\",\"ContaPagar.createMany\",\"ContaPagar.createManyAndReturn\",\"ContaPagar.updateOne\",\"ContaPagar.updateMany\",\"ContaPagar.updateManyAndReturn\",\"ContaPagar.upsertOne\",\"ContaPagar.deleteOne\",\"ContaPagar.deleteMany\",\"_avg\",\"_sum\",\"ContaPagar.groupBy\",\"ContaPagar.aggregate\",\"ContaReceber.findUnique\",\"ContaReceber.findUniqueOrThrow\",\"ContaReceber.findFirst\",\"ContaReceber.findFirstOrThrow\",\"ContaReceber.findMany\",\"ContaReceber.createOne\",\"ContaReceber.createMany\",\"ContaReceber.createManyAndReturn\",\"ContaReceber.updateOne\",\"ContaReceber.updateMany\",\"ContaReceber.updateManyAndReturn\",\"ContaReceber.upsertOne\",\"ContaReceber.deleteOne\",\"ContaReceber.deleteMany\",\"ContaReceber.groupBy\",\"ContaReceber.aggregate\",\"PasswordResetToken.findUnique\",\"PasswordResetToken.findUniqueOrThrow\",\"PasswordResetToken.findFirst\",\"PasswordResetToken.findFirstOrThrow\",\"PasswordResetToken.findMany\",\"PasswordResetToken.createOne\",\"PasswordResetToken.createMany\",\"PasswordResetToken.createManyAndReturn\",\"PasswordResetToken.updateOne\",\"PasswordResetToken.updateMany\",\"PasswordResetToken.updateManyAndReturn\",\"PasswordResetToken.upsertOne\",\"PasswordResetToken.deleteOne\",\"PasswordResetToken.deleteMany\",\"PasswordResetToken.groupBy\",\"PasswordResetToken.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"userId\",\"codeHash\",\"expiresAt\",\"usedAt\",\"attempts\",\"createdAt\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"name\",\"amount\",\"dueDate\",\"BillStatus\",\"status\",\"updatedAt\",\"token\",\"username\",\"email\",\"password\",\"every\",\"some\",\"none\",\"is\",\"isNot\",\"connectOrCreate\",\"upsert\",\"createMany\",\"set\",\"disconnect\",\"delete\",\"connect\",\"updateMany\",\"deleteMany\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "qwIwUA0EAAClAQAgBQAApgEAIAYAAKcBACAHAACoAQAgYQAAoQEAMGIAABgAEGMAAKEBADBkAQAAAAFqQACkAQAhe0AApAEAIX0BAAAAAX4BAAAAAX8BAKMBACEBAAAAAQAgCgMAAK0BACBhAACyAQAwYgAAAwAQYwAAsgEAMGQBAKIBACFlAQCiAQAhZ0AApAEAIWpAAKQBACF7QACkAQAhfAEAowEAIQEDAACTAgAgCgMAAK0BACBhAACyAQAwYgAAAwAQYwAAsgEAMGQBAAAAAWUBAKIBACFnQACkAQAhakAApAEAIXtAAKQBACF8AQAAAAEDAAAAAwAgAQAABAAwAgAABQAgDAMAAK0BACBhAACxAQAwYgAABwAQYwAAsQEAMGQBAKIBACFlAQCiAQAhakAApAEAIXYBAKMBACF3EACvAQAheEAAqwEAIXoAALABeiJ7QACkAQAhAgMAAJMCACB4AACzAQAgDAMAAK0BACBhAACxAQAwYgAABwAQYwAAsQEAMGQBAAAAAWUBAKIBACFqQACkAQAhdgEAowEAIXcQAK8BACF4QACrAQAhegAAsAF6IntAAKQBACEDAAAABwAgAQAACAAwAgAACQAgDAMAAK0BACBhAACuAQAwYgAACwAQYwAArgEAMGQBAKIBACFlAQCiAQAhakAApAEAIXYBAKMBACF3EACvAQAheEAAqwEAIXoAALABeiJ7QACkAQAhAgMAAJMCACB4AACzAQAgDAMAAK0BACBhAACuAQAwYgAACwAQYwAArgEAMGQBAAAAAWUBAKIBACFqQACkAQAhdgEAowEAIXcQAK8BACF4QACrAQAhegAAsAF6IntAAKQBACEDAAAACwAgAQAADAAwAgAADQAgCwMAAK0BACBhAACqAQAwYgAADwAQYwAAqgEAMGQBAKIBACFlAQCiAQAhZgEAowEAIWdAAKQBACFoQACrAQAhaQIArAEAIWpAAKQBACECAwAAkwIAIGgAALMBACALAwAArQEAIGEAAKoBADBiAAAPABBjAACqAQAwZAEAAAABZQEAogEAIWYBAAAAAWdAAKQBACFoQACrAQAhaQIArAEAIWpAAKQBACEDAAAADwAgAQAAEAAwAgAAEQAgAQAAAAMAIAEAAAAHACABAAAACwAgAQAAAA8AIAEAAAABACANBAAApQEAIAUAAKYBACAGAACnAQAgBwAAqAEAIGEAAKEBADBiAAAYABBjAAChAQAwZAEAogEAIWpAAKQBACF7QACkAQAhfQEAowEAIX4BAKMBACF_AQCjAQAhBAQAAI8CACAFAACQAgAgBgAAkQIAIAcAAJICACADAAAAGAAgAQAAGQAwAgAAAQAgAwAAABgAIAEAABkAMAIAAAEAIAMAAAAYACABAAAZADACAAABACAKBAAAiwIAIAUAAIwCACAGAACNAgAgBwAAjgIAIGQBAAAAAWpAAAAAAXtAAAAAAX0BAAAAAX4BAAAAAX8BAAAAAQEOAAAdACAGZAEAAAABakAAAAABe0AAAAABfQEAAAABfgEAAAABfwEAAAABAQ4AAB8AMAEOAAAfADAKBAAA1wEAIAUAANgBACAGAADZAQAgBwAA2gEAIGQBALkBACFqQAC6AQAhe0AAugEAIX0BALkBACF-AQC5AQAhfwEAuQEAIQIAAAABACAOAAAiACAGZAEAuQEAIWpAALoBACF7QAC6AQAhfQEAuQEAIX4BALkBACF_AQC5AQAhAgAAABgAIA4AACQAIAIAAAAYACAOAAAkACADAAAAAQAgFQAAHQAgFgAAIgAgAQAAAAEAIAEAAAAYACADCAAA1AEAIBsAANYBACAcAADVAQAgCWEAAKABADBiAAArABBjAACgAQAwZAEAhwEAIWpAAIkBACF7QACJAQAhfQEAiAEAIX4BAIgBACF_AQCIAQAhAwAAABgAIAEAACoAMBoAACsAIAMAAAAYACABAAAZADACAAABACABAAAABQAgAQAAAAUAIAMAAAADACABAAAEADACAAAFACADAAAAAwAgAQAABAAwAgAABQAgAwAAAAMAIAEAAAQAMAIAAAUAIAcDAADTAQAgZAEAAAABZQEAAAABZ0AAAAABakAAAAABe0AAAAABfAEAAAABAQ4AADMAIAZkAQAAAAFlAQAAAAFnQAAAAAFqQAAAAAF7QAAAAAF8AQAAAAEBDgAANQAwAQ4AADUAMAcDAADSAQAgZAEAuQEAIWUBALkBACFnQAC6AQAhakAAugEAIXtAALoBACF8AQC5AQAhAgAAAAUAIA4AADgAIAZkAQC5AQAhZQEAuQEAIWdAALoBACFqQAC6AQAhe0AAugEAIXwBALkBACECAAAAAwAgDgAAOgAgAgAAAAMAIA4AADoAIAMAAAAFACAVAAAzACAWAAA4ACABAAAABQAgAQAAAAMAIAMIAADPAQAgGwAA0QEAIBwAANABACAJYQAAnwEAMGIAAEEAEGMAAJ8BADBkAQCHAQAhZQEAhwEAIWdAAIkBACFqQACJAQAhe0AAiQEAIXwBAIgBACEDAAAAAwAgAQAAQAAwGgAAQQAgAwAAAAMAIAEAAAQAMAIAAAUAIAEAAAAJACABAAAACQAgAwAAAAcAIAEAAAgAMAIAAAkAIAMAAAAHACABAAAIADACAAAJACADAAAABwAgAQAACAAwAgAACQAgCQMAAM4BACBkAQAAAAFlAQAAAAFqQAAAAAF2AQAAAAF3EAAAAAF4QAAAAAF6AAAAegJ7QAAAAAEBDgAASQAgCGQBAAAAAWUBAAAAAWpAAAAAAXYBAAAAAXcQAAAAAXhAAAAAAXoAAAB6AntAAAAAAQEOAABLADABDgAASwAwCQMAAM0BACBkAQC5AQAhZQEAuQEAIWpAALoBACF2AQC5AQAhdxAAxAEAIXhAALsBACF6AADFAXoie0AAugEAIQIAAAAJACAOAABOACAIZAEAuQEAIWUBALkBACFqQAC6AQAhdgEAuQEAIXcQAMQBACF4QAC7AQAhegAAxQF6IntAALoBACECAAAABwAgDgAAUAAgAgAAAAcAIA4AAFAAIAMAAAAJACAVAABJACAWAABOACABAAAACQAgAQAAAAcAIAYIAADIAQAgGwAAywEAIBwAAMoBACA9AADJAQAgPgAAzAEAIHgAALMBACALYQAAngEAMGIAAFcAEGMAAJ4BADBkAQCHAQAhZQEAhwEAIWpAAIkBACF2AQCIAQAhdxAAmAEAIXhAAIoBACF6AACZAXoie0AAiQEAIQMAAAAHACABAABWADAaAABXACADAAAABwAgAQAACAAwAgAACQAgAQAAAA0AIAEAAAANACADAAAACwAgAQAADAAwAgAADQAgAwAAAAsAIAEAAAwAMAIAAA0AIAMAAAALACABAAAMADACAAANACAJAwAAxwEAIGQBAAAAAWUBAAAAAWpAAAAAAXYBAAAAAXcQAAAAAXhAAAAAAXoAAAB6AntAAAAAAQEOAABfACAIZAEAAAABZQEAAAABakAAAAABdgEAAAABdxAAAAABeEAAAAABegAAAHoCe0AAAAABAQ4AAGEAMAEOAABhADAJAwAAxgEAIGQBALkBACFlAQC5AQAhakAAugEAIXYBALkBACF3EADEAQAheEAAuwEAIXoAAMUBeiJ7QAC6AQAhAgAAAA0AIA4AAGQAIAhkAQC5AQAhZQEAuQEAIWpAALoBACF2AQC5AQAhdxAAxAEAIXhAALsBACF6AADFAXoie0AAugEAIQIAAAALACAOAABmACACAAAACwAgDgAAZgAgAwAAAA0AIBUAAF8AIBYAAGQAIAEAAAANACABAAAACwAgBggAAL8BACAbAADCAQAgHAAAwQEAID0AAMABACA-AADDAQAgeAAAswEAIAthAACXAQAwYgAAbQAQYwAAlwEAMGQBAIcBACFlAQCHAQAhakAAiQEAIXYBAIgBACF3EACYAQAheEAAigEAIXoAAJkBeiJ7QACJAQAhAwAAAAsAIAEAAGwAMBoAAG0AIAMAAAALACABAAAMADACAAANACABAAAAEQAgAQAAABEAIAMAAAAPACABAAAQADACAAARACADAAAADwAgAQAAEAAwAgAAEQAgAwAAAA8AIAEAABAAMAIAABEAIAgDAAC-AQAgZAEAAAABZQEAAAABZgEAAAABZ0AAAAABaEAAAAABaQIAAAABakAAAAABAQ4AAHUAIAdkAQAAAAFlAQAAAAFmAQAAAAFnQAAAAAFoQAAAAAFpAgAAAAFqQAAAAAEBDgAAdwAwAQ4AAHcAMAgDAAC9AQAgZAEAuQEAIWUBALkBACFmAQC5AQAhZ0AAugEAIWhAALsBACFpAgC8AQAhakAAugEAIQIAAAARACAOAAB6ACAHZAEAuQEAIWUBALkBACFmAQC5AQAhZ0AAugEAIWhAALsBACFpAgC8AQAhakAAugEAIQIAAAAPACAOAAB8ACACAAAADwAgDgAAfAAgAwAAABEAIBUAAHUAIBYAAHoAIAEAAAARACABAAAADwAgBggAALQBACAbAAC3AQAgHAAAtgEAID0AALUBACA-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_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_gEAIAMAAAAJACAVAAD-AQAgFgAA_QEAIAEOAACVAgAwDAMAAK0BACBhAACxAQAwYgAABwAQYwAAsQEAMGQBAAAAAWUBAKIBACFqQACkAQAhdgEAowEAIXcQAK8BACF4QACrAQAhegAAsAF6IntAAKQBACECAAAACQAgDgAA_QEAIAIAAAD7AQAgDgAA_AEAIAthAAD6AQAwYgAA-wEAEGMAAPoBADBkAQCiAQAhZQEAogEAIWpAAKQBACF2AQCjAQAhdxAArwEAIXhAAKsBACF6AACwAXoie0AApAEAIQthAAD6AQAwYgAA-wEAEGMAAPoBADBkAQCiAQAhZQEAogEAIWpAAKQBACF2AQCjAQAhdxAArwEAIXhAAKsBACF6AACwAXoie0AApAEAIQdkAQC5AQAhakAAugEAIXYBALkBACF3EADEAQAheEAAuwEAIXoAAMUBeiJ7QAC6AQAhB2QBALkBACFqQAC6AQAhdgEAuQEAIXcQAMQBACF4QAC7AQAhegAAxQF6IntAALoBACEHZAEAAAABakAAAAABdgEAAAABdxAAAAABeEAAAAABegAAAHoCe0AAAAABBWQBAAAAAWdAAAAAAWpAAAAAAXtAAAAAAXwBAAAAAQIAAAAFACAVAACKAgAgAwAAAAUAIBUAAIoCACAWAACJAgAgAQ4AAJQCADAKAwAArQEAIGEAALIBADBiAAADABBjAACyAQAwZAEAAAABZQEAogEAIWdAAKQBACFqQACkAQAhe0AApAEAIXwBAAAAAQIAAAAFACAOAACJAgAgAgAAAIcCACAOAACIAgAgCWEAAIYCADBiAACHAgAQYwAAhgIAMGQBAKIBACFlAQCiAQAhZ0AApAEAIWpAAKQBACF7QACkAQAhfAEAowEAIQlhAACGAgAwYgAAhwIAEGMAAIYCADBkAQCiAQAhZQEAogEAIWdAAKQBACFqQACkAQAhe0AApAEAIXwBAKMBACEFZAEAuQEAIWdAALoBACFqQAC6AQAhe0AAugEAIXwBALkBACEFZAEAuQEAIWdAALoBACFqQAC6AQAhe0AAugEAIXwBALkBACEFZAEAAAABZ0AAAAABakAAAAABe0AAAAABfAEAAAABBBUAAP8BADCFAQAAgAIAMIcBAACCAgAgiwEAAIMCADAEFQAA8wEAMIUBAAD0AQAwhwEAAPYBACCLAQAA9wEAMAQVAADnAQAwhQEAAOgBADCHAQAA6gEAIIsBAADrAQAwBBUAANsBADCFAQAA3AEAMIcBAADeAQAgiwEAAN8BADAAAAAABAQAAI8CACAFAACQAgAgBgAAkQIAIAcAAJICACAFZAEAAAABZ0AAAAABakAAAAABe0AAAAABfAEAAAABB2QBAAAAAWpAAAAAAXYBAAAAAXcQAAAAAXhAAAAAAXoAAAB6AntAAAAAAQdkAQAAAAFqQAAAAAF2AQAAAAF3EAAAAAF4QAAAAAF6AAAAegJ7QAAAAAEGZAEAAAABZgEAAAABZ0AAAAABaEAAAAABaQIAAAABakAAAAABCQUAAIwCACAGAACNAgAgBwAAjgIAIGQBAAAAAWpAAAAAAXtAAAAAAX0BAAAAAX4BAAAAAX8BAAAAAQIAAAABACAVAACYAgAgAwAAABgAIBUAAJgCACAWAACcAgAgCwAAABgAIAUAANgBACAGAADZAQAgBwAA2gEAIA4AAJwCACBkAQC5AQAhakAAugEAIXtAALoBACF9AQC5AQAhfgEAuQEAIX8BALkBACEJBQAA2AEAIAYAANkBACAHAADaAQAgZAEAuQEAIWpAALoBACF7QAC6AQAhfQEAuQEAIX4BALkBACF_AQC5AQAhCQQAAIsCACAGAACNAgAgBwAAjgIAIGQBAAAAAWpAAAAAAXtAAAAAAX0BAAAAAX4BAAAAAX8BAAAAAQIAAAABACAVAACdAgAgAwAAABgAIBUAAJ0CACAWAAChAgAgCwAAABgAIAQAANcBACAGAADZAQAgBwAA2gEAIA4AAKECACBkAQC5AQAhakAAugEAIXtAALoBACF9AQC5AQAhfgEAuQEAIX8BALkBACEJBAAA1wEAIAYAANkBACAHAADaAQAgZAEAuQEAIWpAALoBACF7QAC6AQAhfQEAuQEAIX4BALkBACF_AQC5AQAhCQQAAIsCACAFAACMAgAgBwAAjgIAIGQBAAAAAWpAAAAAAXtAAAAAAX0BAAAAAX4BAAAAAX8BAAAAAQIAAAABACAVAACiAgAgAwAAABgAIBUAAKICACAWAACmAgAgCwAAABgAIAQAANcBACAFAADYAQAgBwAA2gEAIA4AAKYCACBkAQC5AQAhakAAugEAIXtAALoBACF9AQC5AQAhfgEAuQEAIX8BALkBACEJBAAA1wEAIAUAANgBACAHAADaAQAgZAEAuQEAIWpAALoBACF7QAC6AQAhfQEAuQEAIX4BALkBACF_AQC5AQAhCQQAAIsCACAFAACMAgAgBgAAjQIAIGQBAAAAAWpAAAAAAXtAAAAAAX0BAAAAAX4BAAAAAX8BAAAAAQIAAAABACAVAACnAgAgAwAAABgAIBUAAKcCACAWAACrAgAgCwAAABgAIAQAANcBACAFAADYAQAgBgAA2QEAIA4AAKsCACBkAQC5AQAhakAAugEAIXtAALoBACF9AQC5AQAhfgEAuQEAIX8BALkBACEJBAAA1wEAIAUAANgBACAGAADZAQAgZAEAuQEAIWpAALoBACF7QAC6AQAhfQEAuQEAIX4BALkBACF_AQC5AQAhBQQGAgUKAwYOBAcSBQgABgEDAAEBAwABAQMAAQEDAAEEBBMABRQABhUABxYAAAAAAwgACxsADBwADQAAAAMIAAsbAAwcAA0BAwABAQMAAQMIABIbABMcABQAAAADCAASGwATHAAUAQMAAQEDAAEFCAAZGwAcHAAdPQAaPgAbAAAAAAAFCAAZGwAcHAAdPQAaPgAbAQMAAQEDAAEFCAAiGwAlHAAmPQAjPgAkAAAAAAAFCAAiGwAlHAAmPQAjPgAkAQMAAQEDAAEFCAArGwAuHAAvPQAsPgAtAAAAAAAFCAArGwAuHAAvPQAsPgAtCQIBChcBCxoBDBsBDRwBDx4BECAHESEIEiMBEyUHFCYJFycBGCgBGSkHHSwKHi0OHy4CIC8CITACIjECIzICJDQCJTYHJjcPJzkCKDsHKTwQKj0CKz4CLD8HLUIRLkMVL0QDMEUDMUYDMkcDM0gDNEoDNUwHNk0WN08DOFEHOVIXOlMDO1QDPFUHP1gYQFkeQVoEQlsEQ1wERF0ERV4ERmAER2IHSGMfSWUESmcHS2ggTGkETWoETmsHT24hUG8nUXAFUnEFU3IFVHMFVXQFVnYFV3gHWHkoWXsFWn0HW34pXH8FXYABBV6BAQdfhAEqYIUBMA"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await __turbopack_context__.A("[externals]/node:buffer [external] (node:buffer, cjs, async loader)");
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async ()=>await __turbopack_context__.A("[externals]/@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs [external] (@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs, esm_import, [project]/node_modules/@prisma/client, async loader)"),
    getQueryCompilerWasmModule: async ()=>{
        const { wasm } = await __turbopack_context__.A("[externals]/@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs [external] (@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs, esm_import, [project]/node_modules/@prisma/client, async loader)");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["getPrismaClient"](config);
}
}),
"[project]/src/generated/prisma/internal/prismaNamespace.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnyNull",
    ()=>AnyNull,
    "ContaPagarScalarFieldEnum",
    ()=>ContaPagarScalarFieldEnum,
    "ContaReceberScalarFieldEnum",
    ()=>ContaReceberScalarFieldEnum,
    "DbNull",
    ()=>DbNull,
    "Decimal",
    ()=>Decimal,
    "JsonNull",
    ()=>JsonNull,
    "ModelName",
    ()=>ModelName,
    "NullTypes",
    ()=>NullTypes,
    "NullsOrder",
    ()=>NullsOrder,
    "PasswordResetTokenScalarFieldEnum",
    ()=>PasswordResetTokenScalarFieldEnum,
    "PrismaClientInitializationError",
    ()=>PrismaClientInitializationError,
    "PrismaClientKnownRequestError",
    ()=>PrismaClientKnownRequestError,
    "PrismaClientRustPanicError",
    ()=>PrismaClientRustPanicError,
    "PrismaClientUnknownRequestError",
    ()=>PrismaClientUnknownRequestError,
    "PrismaClientValidationError",
    ()=>PrismaClientValidationError,
    "QueryMode",
    ()=>QueryMode,
    "SessionScalarFieldEnum",
    ()=>SessionScalarFieldEnum,
    "SortOrder",
    ()=>SortOrder,
    "Sql",
    ()=>Sql,
    "TransactionIsolationLevel",
    ()=>TransactionIsolationLevel,
    "UserScalarFieldEnum",
    ()=>UserScalarFieldEnum,
    "defineExtension",
    ()=>defineExtension,
    "empty",
    ()=>empty,
    "getExtensionContext",
    ()=>getExtensionContext,
    "join",
    ()=>join,
    "prismaVersion",
    ()=>prismaVersion,
    "raw",
    ()=>raw,
    "sql",
    ()=>sql
]);
/* !!! This is code generated by Prisma. Do not edit directly. !!! */ /* eslint-disable */ // biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * WARNING: This is an internal file that is subject to change!
 *
 * 🛑 Under no circumstances should you import this file directly! 🛑
 *
 * All exports from this file are wrapped under a `Prisma` namespace object in the client.ts file.
 * While this enables partial backward compatibility, it is not part of the stable public API.
 *
 * If you are looking for your Models, Enums, and Input Types, please import them from the respective
 * model files in the `model` directory!
 */ var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client/runtime/client [external] (@prisma/client/runtime/client, cjs, [project]/node_modules/@prisma/client)");
;
const PrismaClientKnownRequestError = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClientKnownRequestError"];
const PrismaClientUnknownRequestError = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClientUnknownRequestError"];
const PrismaClientRustPanicError = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClientRustPanicError"];
const PrismaClientInitializationError = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClientInitializationError"];
const PrismaClientValidationError = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClientValidationError"];
const sql = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["sqltag"];
const empty = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["empty"];
const join = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["join"];
const raw = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["raw"];
const Sql = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["Sql"];
const Decimal = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["Decimal"];
const getExtensionContext = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["Extensions"].getExtensionContext;
const prismaVersion = {
    client: "7.10.1",
    engine: "d1b3f377ca835d73fd50954a5e22128b9ebdd6b8"
};
const NullTypes = {
    DbNull: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["NullTypes"].DbNull,
    JsonNull: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["NullTypes"].JsonNull,
    AnyNull: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["NullTypes"].AnyNull
};
const DbNull = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["DbNull"];
const JsonNull = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["JsonNull"];
const AnyNull = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["AnyNull"];
const ModelName = {
    User: 'User',
    Session: 'Session',
    ContaPagar: 'ContaPagar',
    ContaReceber: 'ContaReceber',
    PasswordResetToken: 'PasswordResetToken'
};
const TransactionIsolationLevel = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["makeStrictEnum"]({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
const UserScalarFieldEnum = {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
const SessionScalarFieldEnum = {
    id: 'id',
    token: 'token',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
const ContaPagarScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    name: 'name',
    amount: 'amount',
    dueDate: 'dueDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
const ContaReceberScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    name: 'name',
    amount: 'amount',
    dueDate: 'dueDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
const PasswordResetTokenScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    codeHash: 'codeHash',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt',
    attempts: 'attempts',
    createdAt: 'createdAt'
};
const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
const NullsOrder = {
    first: 'first',
    last: 'last'
};
const defineExtension = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client$2f$runtime$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2f$runtime$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["Extensions"].defineExtension;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0ozjtc7._.js.map