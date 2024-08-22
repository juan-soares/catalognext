import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const method = req.method;

  const allowedRoutes: { [key: string]: string[] } = {
    "/api/auth/login": ["POST"],
  };

  const url = new URL(req.url);
  const path = url.pathname;

  if (allowedRoutes[path]) {
    if (!allowedRoutes[path].includes(method)) {
      console.log(
        `Não há metodo ${method} implementado no endpoint "${path}".`
      );
      return NextResponse.json(
        { data: null, errorMessage: "Método não existente neste endpoint." },
        { status: 405 }
      );
    }
  } else {
    return NextResponse.json(
      { data: null, errorMessage: "Caminho não encontrado." },
      { status: 404 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
