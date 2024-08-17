import { ICredentials, IUser } from "@/_interfaces";

export async function fetchUser({
  email,
  password,
}: ICredentials): Promise<IUser | null> {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_DB_URL +
        `users?email=${email}&password=${password}`
    );
    if (!res.ok) throw new Error(`Não foi possível consultar users.`);
    const userList: IUser[] = await res.json();

    if (!userList.length) {
      return null;
    } else {
      return userList[0];
    }
  } catch (error) {
    console.error("Ops! Erro na operação fetchUser: ", error);
    return null;
  }
}
