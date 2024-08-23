import { cookies } from "next/headers";

export function createCookies(avatar: string) {
  cookies().set("session", avatar, { path: "/", httpOnly: true });
}
