import React from "react";
import { Metadata } from "next";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/components/dashboard/Header";

export const metadata: Metadata = {
  title: "Dashboard - ML4E",
  description:
    "ML4E - Machine Learning for Everyone is a collection of resources to help you learn machine learning.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <SidebarProvider>
        <DashboardSidebar />
        <SidebarInset>
          <Header />
          {/* page main content */}
          {children}
          {/* page main content ends */}
        </SidebarInset>
      </SidebarProvider>
  );
}
