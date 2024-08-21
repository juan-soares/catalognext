import { NextRequest, NextResponse } from "next/server";
import { IApiResponse, ICredentials } from "@/_interfaces";
import { getUser } from "@/_services/user";

export async function POST(req: NextRequest) {
  const { email, password }: ICredentials = await req.json();
  if (!email || !password) {
    return NextResponse.json(
      { data: null, error: "Credenciais não fornecidas" },
      { status: 400 }
    );
  }

  try {
    const user = await getUser({ email, password });

    if (user) {
      return NextResponse.json({ data: user, error: null }, { status: 200 });
    } else {
      return NextResponse.json(
        { data: null, error: "Usuário ou senha incorretos." },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Ops! Erro no arquivo route.ts:", error);
    return NextResponse.json(
      { data: null, error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
