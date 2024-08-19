import { ICredentials, IUser, IUserAPI } from "@/_interfaces";

export async function fetchUser(
  credentials: ICredentials
): Promise<IUser | null> {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_APP_API + "user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!res.ok) throw new Error(`Não foi possível consultar /api/user.`);

    return await res.json();
  } catch (error) {
    console.error("Ops! Erro na operação fetchUser: ", error);
    return null;
  }
}

export async function fetchUsersAPI(): Promise<IUserAPI[]> {
  try {
    const res = await fetch(process.env.JSONDB_URL + "users");
    if (!res.ok) throw new Error(`Não foi possível consultar users.`);
    return await res.json();
  } catch (error) {
    console.error("Ops! Erro na operação fetchUser: ", error);
    return [];
  }
}
