import { ICategory } from "@/_interfaces";
import { fetchData } from "./";

export async function fetchCategories(): Promise<ICategory[]> {
  const categories = await fetchData<ICategory[]>("categories");

  return categories;
}
