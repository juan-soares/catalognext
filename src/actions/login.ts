"use server";

import { SignJWT, jwtVerify } from "jose";

import { connectDB } from "../lib/db";
import { Database } from "../interfaces";

const secretKey = process.env.JWT_SECRET as string;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session");
  }
}

export async function login(prevState: string, formData: FormData) {
  try {
    const reqEmail = formData.get("email");
    const reqPassword = formData.get("password");
    if (!reqEmail || !reqPassword) {
      throw new Error("Credenciais não fornecidas");
    }

    const users = await connectDB<Database.IUser>("users");
    const user = users.find(
      ({ email, password }) => email === reqEmail && password === reqPassword
    );
    if (!user) {
      throw new Error("Usuário ou senha inválidos.");
    }

    return "Sucesso!";
  } catch (error) {
    console.error("Server error: " + error);
    return "Ops! Ocorreu um erro: " + error;
  }
}
