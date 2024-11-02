import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About - ML4E",
    description: "ML4E - Machine Learning for Everyone is a collection of resources to help you learn machine learning.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main>
          {children}
        </main>
    )
}
  
