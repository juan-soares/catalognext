"use client";

import { useAuth } from "@/_hooks/useAuth";

export default function Login() {
  const { credentials, handleChange, logIn, redirectToHomePage } = useAuth();

  return (
    <div>
      <form onSubmit={(e) => logIn(e, credentials)}>
        <label htmlFor="email">Usuário: </label>
        <input
          id="email"
          type="email"
          required
          placeholder="Email"
          value={credentials.email}
          onChange={({ target: { id, value } }) => handleChange(id, value)}
        />
        <label htmlFor="password">Senha: </label>
        <input
          id="password"
          type="password"
          required
          placeholder="***"
          value={credentials.password}
          onChange={({ target: { id, value } }) => handleChange(id, value)}
        />
        <button>Enviar</button>
        <button type="button" onClick={redirectToHomePage}>
          Voltar
        </button>
      </form>
    </div>
  );
}
