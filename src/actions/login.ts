"use server";

import { redirect } from "next/navigation";
import { getUser } from "../services";
import { createUserSession } from "../utils";

export async function login(prevState: string, formData: FormData) {
  try {
    const reqEmail = formData.get("email") as string;
    const reqPassword = formData.get("password") as string;

    if (!reqEmail || !reqPassword) {
      throw new Error("Credenciais não fornecidas");
    }

    const user = await getUser(reqEmail);
    if (!user) throw new Error("Usuário não encontrado.");

    const passwordMatch = user.password === reqPassword;
    if (!passwordMatch) throw new Error("Senha inválida.");

    await createUserSession({
      nickname: user.nickname,
      avatar: user.avatar,
    });
  } catch (error) {
    console.error("Server error: " + error);
    return "Ops! Ocorreu um erro: " + error;
  }

  redirect("/");
}
