import { beforeAll, describe, expect, test } from "vitest";
import orchestrator from "../../../../orchestrator";
import { prisma } from "../../../../../lib/prisma";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await orchestrator.clearDatabase();
  await orchestrator.runPendingMigrations();
});

describe("DELETE /api/v1/accounts-payable", () => {
  test("Deletes an account belonging to the authenticated user", async () => {
    const createdUser = await orchestrator.createUser({});
    const createdSession = await orchestrator.createSession(createdUser.id);
    const account = await prisma.contaPagar.create({
      data: {
        userId: createdUser.id,
        name: "Conta para excluir",
        amount: 75,
        status: "PENDING",
      },
    });

    const response = await fetch(
      `http://localhost:3000/api/v1/accounts-payable?id=${account.id}`,
      {
        method: "DELETE",
        headers: {
          Cookie: `session_id=${createdSession.token}`,
        },
      },
    );

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      message: "Conta a pagar excluída com sucesso.",
    });

    const accountInDatabase = await prisma.contaPagar.findUnique({
      where: { id: account.id },
    });
    expect(accountInDatabase).toBeNull();
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
        method: "DELETE",
        headers: {
          Cookie: `session_id=${otherSession.token}`,
        },
      },
    );

    expect(response.status).toBe(404);

    expect(
      await prisma.contaPagar.findUnique({ where: { id: account.id } }),
    ).not.toBeNull();
  });
});
