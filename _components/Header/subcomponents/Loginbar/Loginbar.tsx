"use client";

import { useAuth } from "@/_hooks/useAuth";
import Link from "next/link";

export default function Loginbar() {
  const { user } = useAuth();

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
        <button>Sair</button>
      </div>
    );
  }
}
