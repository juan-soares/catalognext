"use server";

import { IUser } from "@/_interfaces";
import { accessDatabase } from "@/_lib/database";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createCookies } from "../test";

export async function logIn(formData: FormData) {
  const credentials = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  if (!credentials.email || !credentials.password) {
    throw new Error("Usuário ou senha em branco.");
  }

  const users = (await accessDatabase("users")) as IUser[];
  const userInfo = users.find(
    ({ email, password }) =>
      email === credentials.email && password === credentials.password
  );

  if (!userInfo) throw new Error("Usuário não encontrado");

  createCookies(userInfo.avatar);

  console.log("Sucesso");
}

export async function logOut() {
  try {
    cookies().delete("session");
    console.log("Deslogado com sucesso!");
  } catch (error) {
    console.error("Falha: " + (error as Error).message);
    throw new Error((error as Error).message); // Lançar o erro para ser tratado pela UI
  }

  redirect("/");
}
