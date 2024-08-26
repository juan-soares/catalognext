import fs from "fs/promises";
import { Database } from "../interfaces";

const filePath = "./src/db/database.json";

export async function connectDB<T>(
  collection: keyof Database.IData
): Promise<T[]> {
  try {
    const readData = await fs.readFile(filePath, "utf-8");
    const fullDatabase = JSON.parse(readData) as Database.IData;

    if (!fullDatabase.hasOwnProperty(collection))
      throw new Error(
        "A Collection que você procura, não existe no Banco de Dados."
      );

    return fullDatabase[collection] as T[];
  } catch (error) {
    console.error("Erro ao consultar Banco de Dados: " + error);
    throw new Error("Erro ao consultar Banco de Dados: " + error);
  }
}
