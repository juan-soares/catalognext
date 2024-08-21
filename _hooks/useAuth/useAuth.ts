import { useEffect, useState } from "react";
import { ICredentials, IUserSession } from "@/_interfaces";
import { useNavigation } from "../useNavigation";
import { fetchUser } from "@/_components/ultils";

export const useAuth = () => {
  const [user, setUser] = useState<IUserSession | null>(null);
  const [credentials, setCredentials] = useState<ICredentials>({
    email: "",
    password: "",
  });
  const { backToHomePage } = useNavigation();

  useEffect(() => {}, []);

  const handleCredentials = (id: string, value: string) => {
    setCredentials((prevState) => ({ ...prevState, [id]: value }));
  };

  const logIn = async (form: React.FormEvent<HTMLFormElement>) => {
    form.preventDefault();

    try {
      const user = await fetchUser(credentials);

      if (user) {
        setUser(user);
        window.alert("Olá, " + user.nickname);
        backToHomePage();
      } else {
        window.alert("Usuário ou senha incorretos.");
      }
    } catch (error) {
      console.error("Não foi possível completar a operação: " + error);
    }
  };

  return { user, credentials, handleCredentials, logIn };
};
