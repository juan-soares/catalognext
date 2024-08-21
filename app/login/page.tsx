"use client";

import { useAuth } from "@/_hooks/useAuth";
import { useNavigation } from "@/_hooks/useNavigation";

export default function Login() {
  const { credentials, handleCredentials, logIn } = useAuth();
  const { backToHomePage } = useNavigation();

  return (
    <div>
      <form onSubmit={(e) => logIn(e)}>
        <label htmlFor="email">Usuário: </label>
        <input
          type="email"
          id="email"
          placeholder="E-mail"
          value={credentials.email}
          onChange={({ target: { id, value } }) => handleCredentials(id, value)}
          required
        />
        <label htmlFor="password">Senha: </label>
        <input
          type="password"
          id="password"
          placeholder="***"
          value={credentials.password}
          onChange={({ target: { id, value } }) => handleCredentials(id, value)}
          required
        />
        <button>Enviar</button>
        <button type="button" onClick={backToHomePage}>
          Voltar
        </button>
      </form>
    </div>
  );
}
