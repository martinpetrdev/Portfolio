import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(req: Request) {
  (await cookies()).set("bypass-redirect", "true", {
    path: "/",
  });

  redirect("/");
}
