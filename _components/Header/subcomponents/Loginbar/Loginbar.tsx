import Link from "next/link";

export default function Loginbar() {
  const user = null;
  if (!user)
    return (
      <div>
        <Link href="/login">Entrar</Link>
      </div>
    );
}
