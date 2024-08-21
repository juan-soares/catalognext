import { ICredentials, IUserSession } from "@/_interfaces";

export async function fetchUser(
  credentials: ICredentials
): Promise<IUserSession | null> {
  try {
    const res = await fetch("/api/user", {
      method: "POST",
      headers: { "content-type": "application-json" },
      body: JSON.stringify(credentials),
    });
    const apiRes = await res.json();

    if (apiRes.error) throw new Error(apiRes.error);

    return apiRes.data;
  } catch (error) {
    console.log("Falha em fetchUser: " + error);
    return null;
  }
}
