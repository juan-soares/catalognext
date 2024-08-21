import { ICredentials, IUser } from "@/_interfaces";
import { accessDatabase } from "@/_lib/database";

export async function getUser(
  credentials: ICredentials
): Promise<IUser | null> {
  if (!credentials) throw new Error("Ops! Credenciais não informadas.");

  try {
    const { email: reqEmail, password: reqPassword } = credentials;
    const database = await accessDatabase();

    const user = database.users.find(
      ({ email, password }) => email === reqEmail && password === reqPassword
    );

    return user || null;
  } catch (error) {
    console.error("Ops! Erro no arquivo getUser.ts: ", error);
    return null;
  }
}
