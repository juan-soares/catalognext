import { NextResponse } from "next/server";

export async function DELETE() {
  return NextResponse.json(
    { message: "Sucesso no Logout!" },
    {
      headers: {
        "Set-Cookie":
          "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; HttpOnly; Secure;",
      },
    }
  );
}
