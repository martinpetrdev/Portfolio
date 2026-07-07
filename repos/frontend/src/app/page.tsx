import { AppShell } from "@/components/AppShell";
import { GitGraph } from "@/components/GitGraph";
import { About } from "@/components/sections/about/About";
import { Contact } from "@/components/sections/contact/Contact";
import { Experience } from "@/components/sections/experience/Experience";
import { Hero } from "@/components/sections/hero/Hero";
import { MyWork } from "@/components/sections/my-work/MyWork";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { GitHubCalendar } from "react-github-calendar";

export default async function Page() {
  const cookie = (await cookies()).get("bypass-redirect");

  if (process.env.NODE_ENV == "production" && !cookie) redirect("/coming-soon");

  return (
    <AppShell>
      <Hero />
      <About />
      <GitGraph />
      <Experience />
      <MyWork />
      <Contact />
    </AppShell>
  );
}
