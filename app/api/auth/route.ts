import { NextRequest, NextResponse } from "next/server";
import { loginPost, loginDelete } from "@/_services/auth";

export async function POST(req: NextRequest, res: NextResponse) {
  const { credentials } = await req.json();

  if (!credentials.email || !credentials.password) {
    console.error("Erro em /auth ao POST: Credenciais não fornecidas.");
    return NextResponse.json(
      { error: "Credenciais não fornecidas." },
      { status: 500 }
    );
  }

  try {
    const session = await loginPost(credentials);
    console.log("Sucesso ao realizar o login!");
    console.log(session);

    return NextResponse.json(
      { message: "Sucesso ao realizar o login!" },
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
