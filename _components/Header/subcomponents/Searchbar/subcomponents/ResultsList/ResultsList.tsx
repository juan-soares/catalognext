import Link from "next/link";
import Image from "next/image";
import { useSearch } from "@/_hooks";

export function ResultsList() {
  const { resultsList } = useSearch();

  if (!resultsList.length) {
    return (
      <ul>
        <li>Sem resultados encontrados.</li>
      </ul>
    );
  } else {
    return (
      <ul>
        {resultsList.map(
          ({
            _id,
            slug,
            cover,
            title,
            release,
            category: { label: categoryLabel },
          }) => (
            <li key={_id}>
              <Link href={slug}>
                <Image
                  width={80}
                  height={80}
                  src={cover}
                  alt={`Capa do resultado ${title}.`}
                />
                <strong>{`${title} (${release})`}</strong>
                <span>{categoryLabel}</span>
              </Link>
            </li>
          )
        )}
      </ul>
    );
  }
}
