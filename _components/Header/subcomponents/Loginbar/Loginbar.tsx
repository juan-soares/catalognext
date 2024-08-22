"use client";

import Link from "next/link";
import { useAuth } from "@/_hooks/useAuth";

export default function Loginbar() {
  const { user, logOut } = useAuth();

  if (!user) {
    return (
      <div>
        <Link href="/login">Entrar</Link>
      </div>
    );
  } else {
    const { avatar, nickname } = user;

    return (
      <div>
        <img src={avatar} alt={"Avatar do usuário" + nickname} />
        <span>{nickname}</span>
        <button onClick={logOut}>Sair</button>
      </div>
    );
  }
}
