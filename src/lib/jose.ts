import { SignJWT, jwtVerify } from "jose";

const AUTH_SECRET = new TextEncoder().encode(process.env.AUTH_SECRET);

export async function encrypt(payload: any): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1000s")
    .sign(AUTH_SECRET);
}

export async function decrypt(session: string): Promise<any> {
  const { payload } = await jwtVerify(session, AUTH_SECRET, {
    algorithms: ["HS256"],
  });

  return payload;
}
