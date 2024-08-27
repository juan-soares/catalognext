import { Database } from "@/src/interfaces";
import { connectDB } from "@/src/lib/db";

export async function getUser(
  reqEmail: string
): Promise<Database.IUser | undefined> {
  try {
    const userCollection = await connectDB<Database.IUser>("users");
    const user = userCollection.find(({ email }) => email === reqEmail);

    return user;
  } catch (error) {
    console.error("Falha em getUser:", error);
    throw new Error("Falha inesperada em getUser.");
  }
}
