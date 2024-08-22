import { ICredentials, IUserSession } from "@/_interfaces";
import { useAuth } from "@/_hooks/useAuth";

export async function fetchLogin(
  credentials: ICredentials
): Promise<IUserSession | null> {
  const { validateUserSession } = useAuth();

  try {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const data = await res.json();
    if (res.status !== 200) throw new Error(data.message);
    return validateUserSession();
  } catch (error) {
    console.log(error);
    return null;
  }
}
