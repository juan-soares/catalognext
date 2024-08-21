import fs from "fs/promises";
import path from "path";
import { IDatabase } from "@/_interfaces/IDatabase";

const filePath = path.resolve("./_lib/db.json");

export const accessDatabase = async (): Promise<IDatabase> => {
  try {
    const jsonData = await fs.readFile(filePath, "utf8");
    console.log("Leitura do Banco de Dados com sucesso!");
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Ops! Erro no arquivo database.ts: ", error);
    throw new Error("Erro no arquivo database.ts");
  }
};

export const writeData = async (updatedDatabase: IDatabase) => {
  try {
    await fs.writeFile(filePath, JSON.stringify(updatedDatabase, null, 2));
    console.log("Atualização do Banco de Dados com sucesso!");
  } catch (error) {
    console.error("Ops! Erro no arquivo database.ts: ", error);
    throw new Error("Erro no arquivo database.ts");
  }
};
