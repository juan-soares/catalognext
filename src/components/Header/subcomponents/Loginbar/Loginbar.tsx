import Image from "next/image";
import Link from "next/link";
import { Auth } from "@/src/interfaces";

export function Loginbar() {
  const userInfo: Auth.IUserInfo | null = null;

  if (!userInfo) {
    return (
      <div>
        <Link href="/login">Entrar</Link>
      </div>
    );
  } else {
    const { avatar, nickname } = userInfo;

    return (
      <div>
        <Image
          src={avatar}
          alt={`Avatar do usuário ${nickname}.`}
          width={40}
          height={40}
        />
        <label>{nickname}</label>
        <Link href="/">Voltar</Link>
      </div>
    );
  }
}
