import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "ML4E - Machine Learning for Everyone",
  description:
    "ML4E - Machine Learning for Everyone is a collection of resources to help you learn machine learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
