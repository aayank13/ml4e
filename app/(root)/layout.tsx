import React from 'react';
import { Metadata } from 'next';
import RootNavbar from '@/components/custom/RootNavbar';

export const metadata: Metadata = {
    title: "ML4E - Machine Learning for Everyone",
    description: "ML4E - Machine Learning for Everyone is a collection of resources to help you learn machine learning.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <RootNavbar />
            {children}
        </main>
    )
}
  
