import { beforeAll, describe, expect, test } from "vitest";
import orchestrator from "../../../../orchestrator";
import { prisma } from "../../../../../lib/prisma";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
  await orchestrator.runPendingMigrations();
});

describe("PATCH /api/v1/accounts-payable", () => {
  test("Updates an account belonging to the authenticated user", async () => {
    const createdUser = await orchestrator.createUser({});
    const createdSession = await orchestrator.createSession(createdUser.id);
    const account = await prisma.contaPagar.create({
      data: {
        userId: createdUser.id,
        name: "Conta antiga",
        amount: 100,
        dueDate: new Date("2026-12-10"),
        status: "PENDING",
      },
    });

    const response = await fetch(
      `http://localhost:3000/api/v1/accounts-payable?id=${account.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Cookie: `session_id=${createdSession.token}`,
        },
        body: JSON.stringify({
          name: "Conta atualizada",
          amount: 250.75,
          dueDate: "2026-12-20",
          status: "PAID",
        }),
      },
    );

    expect(response.status).toBe(200);

    const responseBody = await response.json();

    expect(responseBody).toEqual({
      id: account.id,
      userId: createdUser.id,
      name: "Conta atualizada",
      amount: "250.75",
      dueDate: "2026-12-20T00:00:00.000Z",
      status: "PAID",
      createdAt: responseBody.createdAt,
      updatedAt: responseBody.updatedAt,
    });

    const accountInDatabase = await prisma.contaPagar.findUnique({
      where: { id: account.id },
    });
    expect(accountInDatabase?.name).toBe("Conta atualizada");
  });

  test("Returns 404 for another user's account", async () => {
    const owner = await orchestrator.createUser({});
    const otherUser = await orchestrator.createUser({});
    const otherSession = await orchestrator.createSession(otherUser.id);
    const account = await prisma.contaPagar.create({
      data: {
        userId: owner.id,
        name: "Conta privada",
        amount: 50,
        status: "PENDING",
      },
    });

    const response = await fetch(
      `http://localhost:3000/api/v1/accounts-payable?id=${account.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Cookie: `session_id=${otherSession.token}`,
        },
        body: JSON.stringify({ name: "Alteração inválida" }),
      },
    );

    expect(response.status).toBe(404);
  });
});
