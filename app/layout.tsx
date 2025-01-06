import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import SupabaseProvider from "@/components/providers/SupabaseProvider";

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
        <SupabaseProvider>
          <ThemeProvider>{children}</ThemeProvider>
          <Toaster />
        </SupabaseProvider>
        <Analytics />
      </body>
    </html>
  );
}
