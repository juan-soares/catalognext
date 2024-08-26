"use client";

import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { login } from "@/src/actions/login";

export default function Login() {
  const redirect = useRouter();
  const [submitMessage, formAction] = useFormState(login, "");

  return (
    <div>
      <form action={formAction}>
        <h1>Login</h1>
        <label htmlFor="email">Usuário: </label>
        <input type="email" name="email" required />
        <label htmlFor="password">Senha: </label>
        <input type="password" name="password" required />
        <p>{submitMessage}</p>
        <button>Enviar</button>
        <button onClick={() => redirect.push("/")}>Voltar</button>
      </form>
    </div>
  );
}
