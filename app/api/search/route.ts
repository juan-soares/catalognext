import { connectDB } from "@/_lib";
import Category from "../models/Category";

export async function GET() {
  await connectDB();

  try {
    const categories = await Category.find({});

    console.log(categories);

    return Response.json(categories);
  } catch (error) {
    return Response.json({
      error: "Erro ao consultar:" + error,
    });
  }
}
