"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Loginbar() {
  const [user, setUser] = useState({ nickname: "" });
  const router = useRouter();

  const logOut = () => {
    const confirm = window.confirm("Deseja realmente sair?");

    if (!confirm) return;

    setUser(null);
    router.push("/");
  };

  if (!user) {
    return (
      <div>
        <Link href="/login">Entrar</Link>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={logOut}>Sair</button>
      </div>
    );
  }
}
