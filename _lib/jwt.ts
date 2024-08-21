import jwt, { JwtPayload } from "jsonwebtoken";
import { IUserAPI } from "@/_interfaces";

const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET não foi definida.");
}

export function generateToken(user: IUserAPI): string {
  try {
    return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "1h",
    });
  } catch (error) {
    console.error("Erro ao gerar o token JWT:", error);
    throw new Error("Não foi possível gerar o token.");
  }
}

export function verifyToken(token: string): JwtPayload | string {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log("Token validado com sucesso!");
    return decoded;
  } catch (error) {
    console.error("Erro ao validar o token JWT:", error);
    throw new Error("Token inválido ou expirado.");
  }
}
