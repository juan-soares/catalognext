export interface IApiResponse<T> {
  status: 200 | 201 | 400 | 401 | 403 | 404 | 500;
  data: T | null;
  errorMessage: string | null;
}
