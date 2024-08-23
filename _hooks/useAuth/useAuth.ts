import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { IUserSession } from "@/_interfaces";

const SECRET_KEY = process.env.JWT_SECRET as string;

export const useAuth = () => {
  const validateUserSession = (): IUserSession | null => {
    return null;
  };

  const logIn = async (formData: FormData) => {
    "use server";

    const credentials = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    if (!credentials.email || !credentials.password) {
      console.log("Usuário ou senha em branco.");
      return;
    }

    const token = generateToken({ avatar: "admin", nickname: "avatar" });

    try {
      cookies().set("session", token, {
        httpOnly: true,
        secure: true,
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        sameSite: "lax",
        path: "/",
      });
      console.log("Sucesso!");
    } catch (error) {
      console.log(error);
      console.log("Usuário ou senha inválidos!");
    }

    redirect("/");
  };

  const logOut = () => {
    const confirm = window.confirm("Deseja realmente sair?");
    if (!confirm) return;
    redirect("/");
  };

  return { logIn, logOut, validateUserSession };
};
