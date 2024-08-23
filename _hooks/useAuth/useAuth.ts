"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import { fetchLogin } from "@/_utils";
import { IUserSession } from "@/_interfaces";

const SECRET_KEY = process.env.JWT_SECRET as string;

export const useAuth = () => {
  const validateUserSession = (): IUserSession | null => {
    return null;
  };

  const logIn = async (formData: FormData) => {
    const hashedPassword = await bcrypt.hash("justatest", 10);
    console.log(hashedPassword);

    const credentials = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    if (!credentials.email || !credentials.password) {
      window.alert("Usuário ou senha em branco.");
      return;
    }

    window.alert("Sucesso!");
    window.alert("Usuário ou senha inválidos!");
  };

  const logOut = () => {
    const confirm = window.confirm("Deseja realmente sair?");
    if (!confirm) return;
    redirect("/");
  };

  return { logIn, logOut, validateUserSession };
};
