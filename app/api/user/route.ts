import { NextRequest, NextResponse } from "next/server";
import { getUser } from "@/_services/user";

export async function POST(req: NextRequest) {
  const reqCredentials = await req.json();

  try {
    const user = await getUser(reqCredentials);
    return NextResponse.json(user);
  } catch (error) {
    console.error("Ops! Erro no arquivo route.ts:" + error);
    return null;
  }
}
