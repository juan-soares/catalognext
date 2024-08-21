import { NextRequest, NextResponse } from "next/server";
import { getUser } from "@/_services/user";
import { ICredentials } from "@/_interfaces";

export async function POST(req: NextRequest) {
  const { email, password }: ICredentials = await req.json();

  if (!email || !password) {
    throw new Error("Credenciais não fornecidas.");
  }

  try {
    const user = await getUser({ email, password });
    return NextResponse.json(user);
  } catch (error) {
    console.error("Ops! Erro no arquivo route.ts:" + error);
    return null;
  }
}
