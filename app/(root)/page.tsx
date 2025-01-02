import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col justify-center items-center min-h-screen text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to ML4E</h1>
        <p className="text-lg mb-6">
          Discover learning resources, datasets, and a vibrant community for
          machine learning enthusiasts.
        </p>

        <Link
          href="/learn"
          className="px-6 py-3 bg-violet-700 text-white rounded-lg hover:bg-violet-900"
        >
          Get Started
        </Link>
      </section>
    </main>
  );
}
