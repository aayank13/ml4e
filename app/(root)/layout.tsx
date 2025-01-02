import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/custom/Navbar';

export const metadata: Metadata = {
    title: "ML4E - Machine Learning for Everyone",
    description: "ML4E - Learn and master machine learning effortlessly with a comprehensive platform designed for collaboration and growth.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <Navbar />
            {children}
        </main>
    )
}
  
