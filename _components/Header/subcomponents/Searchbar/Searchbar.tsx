"use client";

import { useSearch } from "@/_hooks";
import { ResultsList } from "./subcomponents";

export function Searchbar() {
  const { queryValue, updateQueryValue } = useSearch();

  return (
    <div>
      <input
        type="search"
        placeholder="Pesquisar..."
        value={queryValue}
        onChange={({ target: { value } }) => updateQueryValue(value)}
      />
      <span>0-</span>

      {queryValue && <ResultsList />}
    </div>
  );
}
