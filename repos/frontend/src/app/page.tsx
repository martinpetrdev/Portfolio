import { AppShell } from "@/components/AppShell";
import { Hero } from "@/components/hero/Hero";
import { redirect } from "next/navigation";

export default function Page() {
  if (process.env.NODE_ENV == "production") redirect("/coming-soon");

  return (
    <AppShell>
      <Hero />
    </AppShell>
  );
}
