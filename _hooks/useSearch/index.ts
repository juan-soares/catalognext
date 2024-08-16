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
      const newResultsFromAPI = await filteredResults(queryValue);
      setResultsList(newResultsFromAPI);
    };

    updateResults();
  }, [queryValue]);

  return { queryValue, updateQueryValue, resultsList };
};
