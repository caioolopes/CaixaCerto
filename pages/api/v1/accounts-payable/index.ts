import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import { prisma } from "../../../../lib/prisma";
import controller from "../../../../infra/controller";
import session from "../../../../models/session";
import { NotFoundError, ValidationError } from "../../../../infra/errors";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(postHandler);
router.get(getHandler);
router.patch(patchHandler);
router.delete(deleteHandler);

export default router.handler(controller.errorHandlers);

// Cria uma nova conta a pagar (POST /api/v1/accounts-payable)
async function postHandler(request: NextApiRequest, response: NextApiResponse) {
  const sessionObject = await session.findOneValidByToken(
    request.cookies.session_id,
  );

  const { name, amount, dueDate, status } = request.body;

  if (!name || amount === undefined || amount === null) {
    return response.status(400).json({
      message: "Os campos 'name' e 'amount' são obrigatórios.",
    });
  }

  const result = await createAccountPayable({
    userId: sessionObject.user_id,
    name,
    amount: Number(amount),
    dueDate,
    status,
  });

  return response.status(200).json({
    status: 200,
    message: "Solicitação processada com sucesso",
    data: result,
  });
}

// Lista todas as contas a pagar do usuário (GET /api/v1/accounts-payable)
async function getHandler(request: NextApiRequest, response: NextApiResponse) {
  const sessionObject = await session.findOneValidByToken(
    request.cookies.session_id,
  );

  const result = await prisma.contaPagar.findMany({
    where: {
      userId: sessionObject.user_id,
    },
    orderBy: {
      dueDate: "asc",
    },
  });

  return response.status(200).json(result);
}

async function patchHandler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const sessionObject = await session.findOneValidByToken(
    request.cookies.session_id,
  );
  const id = String(request.query.id || request.body?.id || "");

  if (!id) {
    throw new ValidationError({
      cause: null,
      message: "O id da conta a pagar é obrigatório.",
      action: "Informe o id da conta que deseja atualizar.",
    });
  }

  const existingAccount = await prisma.contaPagar.findFirst({
    where: { id, userId: sessionObject.user_id },
  });

  if (!existingAccount) {
    throw new NotFoundError({
      cause: null,
      message: "Conta a pagar não encontrada.",
      action: "Verifique o id informado e tente novamente.",
    });
  }

  const { name, amount, dueDate, status } = request.body;
  const result = await prisma.contaPagar.update({
    where: { id },
    data: {
      ...(name !== undefined ? { name } : {}),
      ...(amount !== undefined ? { amount: Number(amount) } : {}),
      ...(dueDate !== undefined
        ? { dueDate: dueDate ? new Date(dueDate) : null }
        : {}),
      ...(status !== undefined ? { status } : {}),
    },
  });

  return response.status(200).json(result);
}

async function deleteHandler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const sessionObject = await session.findOneValidByToken(
    request.cookies.session_id,
  );
  const id = String(request.query.id || request.body?.id || "");

  if (!id) {
    throw new ValidationError({
      cause: null,
      message: "O id da conta a pagar é obrigatório.",
      action: "Informe o id da conta que deseja excluir.",
    });
  }

  const existingAccount = await prisma.contaPagar.findFirst({
    where: { id, userId: sessionObject.user_id },
  });

  if (!existingAccount) {
    throw new NotFoundError({
      cause: null,
      message: "Conta a pagar não encontrada.",
      action: "Verifique o id informado e tente novamente.",
    });
  }

  await prisma.contaPagar.delete({ where: { id } });

  return response.status(200).json({
    message: "Conta a pagar excluída com sucesso.",
  });
}

interface CreateAccountPayableInput {
  userId: string;
  name: string;
  amount: number;
  dueDate?: string | Date | null;
  status?: "PENDING" | "PAID" | "CANCELLED";
}

export async function createAccountPayable(data: CreateAccountPayableInput) {
  return prisma.contaPagar.create({
    data: {
      userId: data.userId,
      name: data.name,
      amount: data.amount,
      dueDate: data.dueDate ? new Date(data.dueDate) : null,
      status: data.status ?? "PENDING",
    },
  });
}
