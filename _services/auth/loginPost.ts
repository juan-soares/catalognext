import { ICredentials, IUser } from "@/_interfaces";
import { accessDatabase } from "@/_lib/database";
import { generateToken } from "@/_lib/jwt";

export async function loginPost(credentials: ICredentials): Promise<string> {
  try {
    const users = (await accessDatabase("users")) as IUser[];
    const user = users.find(
      ({ email, password }) =>
        email === credentials.email && password === credentials.password
    );
    if (!user) throw new Error("Usuário ou senha não encontrados.");

    const { avatar, nickname } = user;

    const token = generateToken({ avatar, nickname });

    return token;
  } catch (error) {
    console.error("Erro em loginPost: " + error);
    return "";
  }
}
