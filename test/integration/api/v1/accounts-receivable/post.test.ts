import { beforeAll, describe, expect, test } from "vitest";
import orchestrator from "../../../../orchestrator";
import { prisma } from "../../../../../lib/prisma";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
  await orchestrator.runPendingMigrations();
});

describe("POST /api/v1/accounts-receivable", () => {
  test("Creates an accounts payable record for the authenticated user", async () => {
    const createdUser = await orchestrator.createUser({});
    const createdSession = await orchestrator.createSession(createdUser.id);

    const response = await fetch(
      "http://localhost:3000/api/v1/accounts-receivable",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: `session_id=${createdSession.token}`,
        },
        body: JSON.stringify({
          name: "Fornecedor de Madeira",
          amount: 1500.5,
          dueDate: "2026-12-10",
          status: "PENDING",
        }),
      },
    );

    expect(response.status).toBe(200);

    const responseBody = await response.json();

    expect(responseBody).toEqual({
      status: 200,
      message: "Solicitação processada com sucesso",
      data: {
        id: responseBody.data.id,
        userId: createdUser.id,
        name: "Fornecedor de Madeira",
        amount: "1500.5",
        dueDate: "2026-12-10T00:00:00.000Z",
        status: "PENDING",
        createdAt: responseBody.data.createdAt,
        updatedAt: responseBody.data.updatedAt,
      },
    });

    const accountInDatabase = await prisma.contaReceber.findUnique({
      where: { id: responseBody.data.id },
    });

    expect(accountInDatabase).not.toBeNull();
    expect(accountInDatabase?.userId).toBe(createdUser.id);
  });

  test("Returns 401 for an anonymous request", async () => {
    const response = await fetch(
      "http://localhost:3000/api/v1/accounts-receivable",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Conta sem sessão",
          amount: 100,
        }),
      },
    );

    expect(response.status).toBe(401);

    const responseBody = await response.json();

    expect(responseBody).toEqual({
      name: "UnauthorizedError",
      message: "Usuário não possui sessão ativa.",
      action: "Verifique se este usuário está logado e tente novamente.",
      status_code: 401,
    });
  });
});
