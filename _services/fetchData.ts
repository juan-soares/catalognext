export async function fetchData<T>(endpoint: string): Promise<T | []> {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_DB_URL + endpoint);
    if (!res.ok) throw new Error(`Não foi possível consultar ${endpoint}.`);

    return await res.json();
  } catch (error) {
    console.error("Ops! Erro na operação fetchData: ", error);
    return [];
  }
}
