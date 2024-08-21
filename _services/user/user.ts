import { ICredentials, IUserLogged } from "@/_interfaces";
import { accessDatabase } from "@/_lib/database";
import { generateToken } from "@/_lib/jwt";

export async function getUser(
  credentials: ICredentials
): Promise<IUserLogged | null> {
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
        id: user.id,
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
