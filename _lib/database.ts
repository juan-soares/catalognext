import fs from "fs/promises";
import path from "path";
import { IDatabase } from "@/_interfaces";

const filePath = path.resolve(process.cwd(), "_lib", "db.json");

export const accessDatabase = async (): Promise<IDatabase> => {
  try {
    const stringDatabase = await fs.readFile(filePath, "utf8");
    const jsonDatabase: IDatabase = JSON.parse(stringDatabase);

    console.log("Leitura do Banco de Dados com sucesso!");

    return jsonDatabase;
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
