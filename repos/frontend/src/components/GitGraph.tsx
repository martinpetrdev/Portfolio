"use client";

import { GitHubCalendar } from "react-github-calendar";

export function GitGraph() {
  return (
    <div
      className="w-screen h-max flex flex-row overflow-x-hidden justify-end opacity-50"
      suppressHydrationWarning={true}
    >
      <GitHubCalendar
        username="martinpetrdev"
        colorScheme="dark"
        showMonthLabels={false}
        showColorLegend={false}
        showTotalCount={false}
        className="w-screen translate-x-6"
        theme={{
          light: ["#181825", "#fab387"],
          dark: ["#181825", "#fab387"],
        }}
        weekStart={1}
        year={2024}
      />
      <GitHubCalendar
        username="martinpetrdev"
        colorScheme="dark"
        showMonthLabels={false}
        showColorLegend={false}
        showTotalCount={false}
        className="w-screen translate-x-3"
        theme={{
          light: ["#181825", "#fab387"],
          dark: ["#181825", "#fab387"],
        }}
        weekStart={1}
        year={2025}
      />
      <GitHubCalendar
        username="martinpetrdev"
        colorScheme="dark"
        showMonthLabels={false}
        showColorLegend={false}
        showTotalCount={false}
        className="w-screen"
        theme={{
          light: ["#181825", "#fab387"],
          dark: ["#181825", "#fab387"],
        }}
        weekStart={1}
        year={2026}
        transformData={(d) => d.filter((a) => new Date(a.date) < new Date())}
      />
    </div>
  );
}
