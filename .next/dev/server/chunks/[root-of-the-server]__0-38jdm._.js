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
(()=>{
    const e = new Error("Cannot find module '../src/generated/prisma/client'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
const prisma = globalForPrisma.prisma ?? new PrismaClient({
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
"[project]/pages/api/v1/accounts-payable/index.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "createAccountPayable",
    ()=>createAccountPayable,
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
// Cria uma nova conta a pagar (POST /api/v1/accounts-payable)
async function postHandler(request, response) {
    const sessionObject = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$session$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].findOneValidByToken(request.cookies.session_id);
    const { name, amount, dueDate, status } = request.body;
    if (!name || amount === undefined || amount === null) {
        return response.status(400).json({
            message: "Os campos 'name' e 'amount' são obrigatórios."
        });
    }
    const result = await createAccountPayable({
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
// Lista todas as contas a pagar do usuário (GET /api/v1/accounts-payable)
async function getHandler(request, response) {
    const sessionObject = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$session$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["default"].findOneValidByToken(request.cookies.session_id);
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["prisma"].contaPagar.findMany({
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
            message: "O id da conta a pagar é obrigatório.",
            action: "Informe o id da conta que deseja atualizar."
        });
    }
    const existingAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["prisma"].contaPagar.findFirst({
        where: {
            id,
            userId: sessionObject.user_id
        }
    });
    if (!existingAccount) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$errors$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["NotFoundError"]({
            cause: null,
            message: "Conta a pagar não encontrada.",
            action: "Verifique o id informado e tente novamente."
        });
    }
    const { name, amount, dueDate, status } = request.body;
    const result = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["prisma"].contaPagar.update({
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
            message: "O id da conta a pagar é obrigatório.",
            action: "Informe o id da conta que deseja excluir."
        });
    }
    const existingAccount = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["prisma"].contaPagar.findFirst({
        where: {
            id,
            userId: sessionObject.user_id
        }
    });
    if (!existingAccount) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$infra$2f$errors$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["NotFoundError"]({
            cause: null,
            message: "Conta a pagar não encontrada.",
            action: "Verifique o id informado e tente novamente."
        });
    }
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["prisma"].contaPagar.delete({
        where: {
            id
        }
    });
    return response.status(200).json({
        message: "Conta a pagar excluída com sucesso."
    });
}
async function createAccountPayable(data) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["prisma"].contaPagar.create({
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0-38jdm._.js.map