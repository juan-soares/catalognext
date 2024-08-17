import { useEffect, useState } from "react";
import { ICollectionData as ISearchResult } from "@/_interfaces";
import { filteredResults } from "@/_services";

export const useSearch = () => {
  const [queryValue, setQueryValue] = useState<string>("");
  const [resultsList, setResultsList] = useState<ISearchResult[]>([]);

  const updateQueryValue = (newQueryValue: string) => {
    setQueryValue(newQueryValue);
  };

  useEffect(() => {
    if (!queryValue) return;

    const updateResults = async () => {
      try {
        const newResults = await filteredResults(queryValue);
        setResultsList(newResults);
      } catch (error) {
        console.error("Erro ao atualizar a lista de resultados:", error);
      }
    };

    updateResults();
  }, [queryValue]);

  return { queryValue, updateQueryValue, resultsList };
};
