import { ICredentials, IUserSession } from "@/_interfaces";
import { accessDatabase } from "@/_lib/database";
import { generateToken } from "@/_lib/jwt";

export async function getUser(
  credentials: ICredentials
): Promise<IUserSession | null> {
  if (!credentials) {
    console.error("Ops! Credenciais não fornecidas.");
    return null;
  }

  const { email: reqEmail, password: reqPassword } = credentials;

  try {
    const database = await accessDatabase();

    const user = database.users.find(
      ({ email, password }) => email === reqEmail && password === reqPassword
    );

    if (user) {
      const token = generateToken(user);
      return {
        token,
        nickname: user.nickname,
        avatar: user.avatar,
      };
    } else {
      console.error("Usuário não encontrado.");
      return null;
    }
  } catch (error) {
    console.error("Ops! Erro no arquivo getUser.ts: ", error);
    return null;
  }
}
