const mongoose = require("mongoose");

const uri = process.env.DB_ATLAS_URL;

let isConnected = false;

export async function connectDB() {
  if (isConnected) {
    console.log("Conexao já realizada.");
    return;
  }

  try {
    await mongoose.connect(uri);
    isConnected = true;
    console.log("Conexão com o MongoDB Atlas estabelecida com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar com o MongoDB Atlas:", error);
    throw error;
  }
}
