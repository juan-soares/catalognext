import { NextRequest, NextResponse } from "next/server";
import { fetchUsersAPI } from "@/_services";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) throw new Error("Usuário e senha não fornecidos.");

    const usersList = await fetchUsersAPI();

    if (!usersList) {
      return null;
    } else {
      const { avatar, nickname } = usersList[0];
      return NextResponse.json({ avatar: avatar, nickname: nickname });
    }
  } catch (error) {
    console.error("Ops! Erro na operação GET no endpoint /users: ", error);
    return null;
  }
}
