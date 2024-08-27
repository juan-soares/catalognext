import { decrypt, encrypt } from "../lib/jose";

export async function createUserSession(userInfo: {
  nickname: string;
  avatar: string;
}): Promise<void> {
  const expirationTime = new Date(Date.now() * 10 * 100);

  const session = await encrypt(userInfo);
  const d = await decrypt(session);

  console.log(d);

  /*
    cookies().set("session", session, {
      expires: expirationTime,
      httpOnly: true,
      path: "/",
    });
    */
}
