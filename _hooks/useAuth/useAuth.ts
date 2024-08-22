import { useAuthContext } from "@/_contexts";
import { fetchUser } from "@/_components/ultils";
import { useNavigation } from "../useNavigation";

export const useAuth = () => {
  const { user, setUser, credentials, setCredentials } = useAuthContext();

  const { backToHomePage } = useNavigation();

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
      window.alert(
        "Ocorreu um erro ao tentar fazer login. Tente novamente mais tarde."
      );
    }
  };

  const logOut = () => {
    const confirm = window.confirm("Deseja realmente sair?");
    if (!confirm) return;
    setUser(null);
    backToHomePage();
  };

  return { user, credentials, handleCredentials, logIn, logOut };
};
