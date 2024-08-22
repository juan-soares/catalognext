import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { IAuthContext, ICredentials, IUserSession } from "@/_interfaces";

interface IProps {
  children: ReactNode;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export function AuthProvider({ children }: IProps) {
  const [user, setUser] = useState<IUserSession | null>(null);
  const [credentials, setCredentials] = useState<ICredentials>({
    email: "",
    password: "",
  });

  useEffect(() => {
    const localUser = localStorage.getItem("user");
    if (localUser) {
      try {
        setUser(JSON.parse(localUser));
      } catch (error) {
        console.error("Erro ao analisar o usuário do localStorage:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ user, setUser, credentials, setCredentials }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = (): IAuthContext => {
  const context = useContext(AuthContext);
  if (context === null)
    throw new Error("useAuthContext deve ser usado dentro do AuthProvider.");
  return context;
};
