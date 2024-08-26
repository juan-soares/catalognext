import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <Image
        priority={true}
        src="/img/icons/logo.png"
        alt="Logotipo do site Catalog."
        width={60}
        height={60}
      />
    </Link>
  );
}
