export interface IErrorMessage {
  message: string;
}

export const handleFetchError = (error: Error) => {
  console.error(`Ocorreu um erro: ${(error as Error).message}`);
};

export async function fetchData<T>(endpoint: string): Promise<T | []> {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_DB_URL + endpoint);
    if (!res.ok) throw new Error(`Não foi possível consultar ${endpoint}.`);
    return await res.json();
  } catch (error) {
    handleFetchError(error as Error);
    return [];
  }
}
