"use client";

import { useEffect, useState } from "react";

export function DynamicYear() {
  const [year, setYear] = useState<number>(0);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  return <span suppressHydrationWarning>{year}</span>;
}
