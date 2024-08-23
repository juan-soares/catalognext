import { NextRequest, NextResponse } from "next/server";
import { loginPost, loginDelete } from "@/_services/auth";

export async function POST(req: NextRequest, res: NextResponse) {
  const { email, password } = await req.json();

  if (!email || !password) {
    console.error("Erro em /auth ao POST: Credenciais não fornecidas.");
    return NextResponse.json(
      { error: "Credenciais não fornecidas." },
      { status: 500 }
    );
  }

  try {
    const userInfo = await loginPost(email, password);
    console.log("Sucesso ao realizar o login!");

    return NextResponse.json(
      { data: userInfo, message: "Sucesso ao realizar o login!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro em /auth ao POST: " + error);

    return NextResponse.json(
      { message: "Falha ao realizar o login!" },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  try {
    await loginDelete();
    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    return NextResponse.json({}, { status: 500 });
  }
}
