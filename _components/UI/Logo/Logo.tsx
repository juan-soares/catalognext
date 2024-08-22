import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <Image
        src="/assets/img/logo.png"
        alt="Logotipo do site."
        width={60}
        height={60}
      />
    </Link>
  );
}
