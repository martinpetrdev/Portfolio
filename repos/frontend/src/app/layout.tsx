import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Martin Petr",
  description: "Portfolio of Martin Petr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${firaCode.variable} dark antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <body className="dark mocha">{children}</body>
    </html>
  );
}
