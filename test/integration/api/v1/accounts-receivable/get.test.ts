import { beforeAll, describe, expect, test } from "vitest";
import orchestrator from "../../../../orchestrator";
import { prisma } from "../../../../../lib/prisma";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
  await orchestrator.runPendingMigrations();
});

describe("GET /api/v1/accounts-receivable", () => {
  test("Lists accounts payable for the authenticated user", async () => {
    const createdUser = await orchestrator.createUser({});
    const createdSession = await orchestrator.createSession(createdUser.id);

    await prisma.contaReceber.create({
      data: {
        userId: createdUser.id,
        name: "Fornecedor de Madeira",
        amount: 1500.5,
        dueDate: new Date("2026-12-10"),
        status: "PENDING",
      },
    });

    const response = await fetch(
      "http://localhost:3000/api/v1/accounts-receivable",
      {
        headers: {
          Cookie: `session_id=${createdSession.token}`,
        },
      },
    );

    expect(response.status).toBe(200);

    const responseBody = await response.json();

    expect(responseBody).toHaveLength(1);
    expect(responseBody[0]).toEqual({
      id: responseBody[0].id,
      userId: createdUser.id,
      name: "Fornecedor de Madeira",
      amount: "1500.5",
      dueDate: "2026-12-10T00:00:00.000Z",
      status: "PENDING",
      createdAt: responseBody[0].createdAt,
      updatedAt: responseBody[0].updatedAt,
    });
  });

  test("Returns 401 for an anonymous request", async () => {
    const response = await fetch(
      "http://localhost:3000/api/v1/accounts-receivable",
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
