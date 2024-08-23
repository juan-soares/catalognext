import fs from "fs/promises";
import path from "path";
import { IDatabase, IUser } from "@/_interfaces";

const filePath = path.resolve(process.cwd(), "_lib", "db.json");

export const accessDatabase = async (
  collection?: keyof IDatabase
): Promise<IDatabase | IUser[]> => {
  try {
    const stringDatabase = await fs.readFile(filePath, "utf8");
    const jsonDatabase: IDatabase = JSON.parse(stringDatabase);
    console.log("Sucesso na leitura do banco de dados.");

    return collection ? jsonDatabase[collection] : jsonDatabase;
  } catch (error) {
    console.error("Ops! Erro no arquivo database.ts: ", error);
    throw new Error("Falha na leitura do banco de dados.");
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
