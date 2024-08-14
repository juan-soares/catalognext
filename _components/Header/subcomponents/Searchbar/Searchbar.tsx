"use client";

import { ResultsList } from "./subcomponents";

export function Searchbar() {
  return (
    <div>
      <input type="search" placeholder="Pesquisar..." onChange={} />
      <span>0-</span>
      <ResultsList />
    </div>
  );
}
