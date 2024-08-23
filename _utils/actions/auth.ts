import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { generateToken } from "@/_lib/jwt";

export async function logIn(formData: FormData) {
  "use server";

  const credentials = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  if (!credentials.email || !credentials.password) {
    console.log("Usuário ou senha em branco.");
  }

  try {
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const data = await res.json();

    console.log(data);

    if (res.status !== 200) {
      console.log(data.errorMessage);
      return;
    }

    const token = generateToken(data.userInfo);

    cookies().set("session", token, {
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      sameSite: "lax",
      path: "/",
    });

    console.log("Sucesso!");
  } catch (error) {
    console.log(error);
  }

  redirect("/");
}

export async function logOut() {
  const cookieStore = cookies();
  cookieStore.delete("session");

  console.log("Deslogado com sucesso!");

  redirect("/");
}
