import { NextRequest, NextResponse } from "next/server";
import { loginPost } from "@/_services/auth";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  try {
    const userSession = await loginPost(email, password);

    return NextResponse.json(
      { userSession, message: "Sucesso na autenticação!" },
      {
        status: 200,
        headers: {
          "Set-Cookie": `token=${userSession}; path=/; HttpOnly; Secure;`,
        },
      }
    );
  } catch (error) {
    console.error("Ops! Ocorreu um erro em login/post: " + error);
    return NextResponse.json(
      { message: "Falha na autenticação." },
      { status: 401 }
    );
  }
}
