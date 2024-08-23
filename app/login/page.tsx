import { useAuth } from "@/_hooks/useAuth";

export default function Login() {
  const { logIn } = useAuth();

  return (
    <div>
      <form action={logIn}>
        <label htmlFor="email">Usuário: </label>
        <input type="email" name="email" placeholder="E-mail" required />
        <label htmlFor="password">Senha: </label>
        <input type="password" name="password" placeholder="***" required />
        <button>Enviar</button>
      </form>
    </div>
  );
}
