"use client";

import Link from "next/link";
import { useAuth } from "@/_hooks/useAuth";
import Image from "next/image";

export function Loginbar() {
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
        <Image
          width={30}
          height={30}
          src={avatar}
          alt={`Avatar representando o usuário ${nickname}`}
        />
        <span>{nickname}</span>
        <button onClick={logOut}>Sair</button>
      </div>
    );
  }
}
