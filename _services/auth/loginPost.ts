import { accessDatabase } from "@/_lib/database";
import { generateToken } from "@/_lib/jwt";

export async function loginPost(reqEmail: string, reqPassword: string) {
  const { users } = await accessDatabase();

  const user = users.find(
    ({ email, password }) => email === reqEmail && password === reqPassword
  );

  if (!user) throw new Error("Usuário ou senha inválidos.");

  const { id, email, password, ...userInfo } = user;

  const token = generateToken(userInfo);

  return token;
}
