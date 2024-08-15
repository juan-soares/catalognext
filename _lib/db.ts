import mongoose from "mongoose";

const ATLASDB_URL = process.env.DB_ATLAS_URL;

export async function connetDB() {
  if (!ATLASDB_URL) {
    throw new Error(
      "Define the MONGODB_URI environment variable inside .env.local"
    );
  }

  try {
    await mongoose.connect(ATLASDB_URL);
    console.log("AtlasDB conectado com sucesso!");
  } catch (error) {
    console.log(error);
  }
}
