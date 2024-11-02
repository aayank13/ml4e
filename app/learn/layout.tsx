import React from "react";
import { Metadata } from "next";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/custom/AppSidebar";

export const metadata: Metadata = {
  title: "Learn - ML4E",
  description:
    "ML4E - Machine Learning for Everyone is a collection of resources to help you learn machine learning.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main>{children}</main>
      </SidebarProvider>
    </>
  );
}
