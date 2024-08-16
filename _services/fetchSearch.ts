import { ICollectionData } from "@/_interfaces";
import { fetchCategories, fetchData } from "./";

async function fetchCollections(): Promise<ICollectionData[]> {
  try {
    const categories = await fetchCategories();
    const collectionsDataPromises = categories.map(({ collection }) =>
      fetchData<ICollectionData[]>(collection)
    );
    const collectionsData = await Promise.all(collectionsDataPromises);

    return collectionsData.flat();
  } catch (error) {
    console.error("Ops! Erro na operação fetchCategories: ", error);
    return [];
  }
}

export async function filteredResults(
  query: string
): Promise<ICollectionData[]> {
  try {
    const allResults = await fetchCollections();
    const filteredResults = allResults.filter(
      ({ title, translatedTitle }) =>
        title === query || translatedTitle === query
    );

    return filteredResults;
  } catch (error) {
    console.error("Ops! Erro na operação fetchCollections: ", error);
    return [];
  }
}
