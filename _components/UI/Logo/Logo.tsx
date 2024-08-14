import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/">
      <Image
        width={50}
        height={50}
        src="/assets/img/logo.png"
        alt="Logotipo do site Catalog."
      />
    </Link>
  );
}
