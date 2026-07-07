import { AppShell } from "@/components/AppShell";
import { GitGraph } from "@/components/GitGraph";
import { About } from "@/components/sections/about/About";
import { Contact } from "@/components/sections/contact/Contact";
import { Experience } from "@/components/sections/experience/Experience";
import { Hero } from "@/components/sections/hero/Hero";
import { MyWork } from "@/components/sections/my-work/MyWork";
import { redirect } from "next/navigation";
import { GitHubCalendar } from "react-github-calendar";

export default function Page() {
  if (process.env.NODE_ENV == "production") redirect("/coming-soon");

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
