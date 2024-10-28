import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ML4E - Machine Learning for Everyone",
  description: "Machine Learning for Everyone is a collection of resources to help you learn machine learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
