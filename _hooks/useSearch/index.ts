import { useEffect, useState } from "react";
import { ICategory, ISearchResult } from "@/_interfaces";

const handleFetchError = (error: Error) => {
  console.error(`Ops! Ocorreu um erro: ${error.message}`);
};

const fetchData = async <T>(url: string): Promise<T | []> => {
  try {
    const res = await fetch("" + url);
    if (!res.ok) throw new Error(`Falha ao consultar ${url}.`);
    return res.json();
  } catch (error) {
    handleFetchError(error as Error);
    return [];
  }
};

const fetchCategories = async (): Promise<ICategory[]> => {
  const categories = await fetchData<ICategory[]>("categories");
  return categories || [];
};

const fetchCollections = async (): Promise<ISearchResult[]> => {
  const categories = await fetchCategories();

  const collectionsPromises = categories.map(({ collection }) =>
    fetchData<ISearchResult[]>(collection)
  );
  const collectionsResults = await Promise.all(collectionsPromises);

  return collectionsResults.flat();
};

const filterData = (results: ISearchResult[], queryValue: string) => {
  return results.filter(({ title, translatedTitle }) =>
    [title, translatedTitle].some((value) => value === queryValue)
  );
};

export const useSearch = () => {
  const [queryValue, setQueryValue] = useState<string>("");
  const [resultsList, setResultsList] = useState<ISearchResult[]>([]);

  const updateQueryValue = (newQueryValue: string) => {
    setQueryValue(newQueryValue);
  };

  useEffect(() => {
    if (!queryValue) return;

    const fetchAndFilterData = async () => {
      try {
        const allResults = await fetchCollections();
        const filteredResults = filterData(allResults, queryValue);
        setResultsList(filteredResults);
      } catch (error) {
        handleFetchError(error as Error);
      }
    };

    fetchAndFilterData();
  }, [queryValue]);

  return { queryValue, updateQueryValue, resultsList };
};
