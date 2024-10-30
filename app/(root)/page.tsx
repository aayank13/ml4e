import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col min-h-screen">
      <h1 className="font-bold text-violet-700 text-4xl pb-3 tracking-wide">ML4E</h1>
      <p className="font-light text-2xl">
        Machine Learning for Everyone is a collection of resources to help you learn machine learning.
      </p>
      <Link href="/learn">
        <Button className="mt-5">
          Start Learning
        </Button>
      </Link>
    </main>
  );
}
