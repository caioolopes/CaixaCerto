import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import { prisma } from "../../../../../lib/prisma";
import controller from "../../../../../infra/controller";
import session from "../../../../../models/session";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.patch(patchHandler);

export default router.handler(controller.errorHandlers);

// Atualiza uma conta específica (PATCH /api/v1/accounts-payable/:id)
async function patchHandler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  // 1. Verifica se o usuário está logado
  const sessionObject = await session.findOneValidByToken(
    request.cookies.session_id,
  );

  // 2. Pega o ID que veio na URL
  const accountId = String(request.query.id);

  // 3. Pega os campos enviados no corpo (body) da requisição
  const { name, amount, dueDate, status } = request.body;

  // 4. Busca a conta garantindo que ela existe E pertence ao usuário logado
  const existingAccount = await prisma.contaPagar.findFirst({
    where: {
      id: accountId, // Se o id no seu schema.prisma for Int, troque por Number(accountId)
      userId: sessionObject.user_id,
    },
  });

  if (!existingAccount) {
    return response.status(404).json({
      message: "Conta a pagar não encontrada.",
    });
  }

  // 5. Atualiza somente os campos que foram enviados
  const updatedAccount = await prisma.contaPagar.update({
    where: {
      id: existingAccount.id,
    },
    data: {
      name: name !== undefined ? name : existingAccount.name,
      amount: amount !== undefined ? Number(amount) : existingAccount.amount,
      dueDate:
        dueDate !== undefined
          ? dueDate
            ? new Date(dueDate)
            : null
          : existingAccount.dueDate,
      status: status !== undefined ? status : existingAccount.status,
    },
  });

  return response.status(200).json(updatedAccount);
}
