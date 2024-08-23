import { IUser } from "@/_interfaces";
import { accessDatabase } from "@/_lib/database";
import { generateToken } from "@/_lib/jwt";

export async function loginPost(
  reqEmail: string,
  reqPassword: string
): Promise<{ avatar: string; nickname: string } | null> {
  try {
    const users = (await accessDatabase("users")) as IUser[];
    const user = users.find(
      ({ email, password }) => email === reqEmail && password === reqPassword
    );
    if (!user) throw new Error("Usuário ou senha não encontrados.");

    const { avatar, nickname } = user;

    return { avatar, nickname };
  } catch (error) {
    console.error("Erro em loginPost: " + error);
    return null;
  }
}
