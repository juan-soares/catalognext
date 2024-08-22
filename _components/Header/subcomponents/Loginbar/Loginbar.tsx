import Link from "next/link";
import { useAuth } from "@/_hooks/useAuth";

export default async function Loginbar() {
  const { validateUserSession, logOut } = useAuth();

  const user = validateUserSession();

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
