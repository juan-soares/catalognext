import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import { fetchLogin } from "@/_utils";
import { IUserSession } from "@/_interfaces";

const SECRET_KEY = process.env.JWT_SECRET as string;

export const useAuth = () => {
  const validateUserSession = (): IUserSession | null => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      console.log("Não há token.");
      return null;
    } else {
      return jwt.verify(token, SECRET_KEY) as IUserSession;
    }
  };

  const logIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const credentials = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    try {
      const userSession = await fetchLogin(credentials);

      if (userSession) {
        window.alert("Olá, " + userSession.nickname);
        redirect("/");
      } else {
        window.alert("Usuário ou senha incorretos.");
      }
    } catch (error) {
      console.error("Não foi possível completar a operação: " + error);
      window.alert(
        "Ocorreu um erro ao tentar fazer login. Tente novamente mais tarde."
      );
    }
  };

  const logOut = () => {
    const confirm = window.confirm("Deseja realmente sair?");
    if (!confirm) return;
    redirect("/");
  };

  return { logIn, logOut, validateUserSession };
};
