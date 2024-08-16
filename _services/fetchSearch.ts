import { ICollectionData } from "@/_interfaces";
import { fetchCategories, fetchData } from "./";

async function fetchCollections(): Promise<ICollectionData[]> {
  const categories = await fetchCategories();

  const collectionsDataPromises = categories.map(({ collection }) =>
    fetchData<ICollectionData[]>(collection)
  );

  const collectionsData = await Promise.all(collectionsDataPromises);

  const unifiedCollectionsData = collectionsData.flat();

  return unifiedCollectionsData;
}

export async function filteredResults(query: string) {
  const allResults = await fetchCollections();

  const filteredResults = allResults.filter(
    ({ title, translatedTitle }) => title === query || translatedTitle === query
  );

  return filteredResults;
}
