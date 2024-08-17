import { useState } from "react";
import { useRouter } from "next/navigation";
import { ICredentials, IUser } from "@/_interfaces";
import { fetchUser } from "@/_services";

export function useAuth() {
  const [user, setUser] = useState<IUser | null>(null);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleChange = (input: string, value: string) => {
    setCredentials((prevState) => ({ ...prevState, [input]: value }));
  };

  const redirectToHomePage = () => router.push("/");

  const logIn = async (
    e: React.FormEvent<HTMLFormElement>,
    credentials: ICredentials
  ): Promise<void> => {
    e.preventDefault();

    try {
      const user = await fetchUser(credentials);
      if (!user) return window.alert("Usuário ou senha inválidos.");
      window.alert("Bem-vindo!");
      setUser(user);
      setCredentials({ email: "", password: "" });
      redirectToHomePage();
    } catch (error) {
      console.error("Ops! Erro na operação logIn: ", error);
    }
  };

  const logOut = () => {
    const confirm = window.confirm("Deseja realmente sair?");
    if (!confirm) return;
    setUser(null);
  };

  return { credentials, handleChange, user, logIn, logOut, redirectToHomePage };
}
