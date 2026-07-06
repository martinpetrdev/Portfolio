import { AppShell } from "@/components/AppShell";
import { Hero } from "@/components/hero/Hero";
import { redirect } from "next/navigation";
import { GitHubCalendar } from "react-github-calendar";

export default function Page() {
  if (process.env.NODE_ENV == "production") redirect("/coming-soon");

  return (
    <AppShell>
      <Hero />
      <GitHubCalendar
        username="martinpetrdev"
        colorScheme="dark"
        showMonthLabels={false}
        showColorLegend={false}
        showTotalCount={false}
        className="w-screen"
        theme={{
          dark: ["var(--color-ctp-mantle)", "var(--color-ctp-peach)"],
        }}
        weekStart={1}
      />
    </AppShell>
  );
}
