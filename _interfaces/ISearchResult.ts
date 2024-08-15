export interface ISearchResult {
  _id: string;
  slug: string;
  cover: string;
  title: string;
  translatedTitle: string;
  release: string;
  category: { label: string };
}
