import { connetDB } from "@/_lib";
import { NextResponse } from "next/server";
import Category from "../models/Category";

export async function GET() {
  await connetDB();

  try {
    const categories = await Category.find({});
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json("Houve um erro: " + error);
  }
}
