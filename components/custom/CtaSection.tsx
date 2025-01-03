import { BackgroundLines } from "../ui/background-lines";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <div className="max-w-7xl min-h-fit relative mx-auto">

    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Start exploring today! <br /> What will you discover?
      </h2>
      <Button size="lg" variant="secondary" className="mt-8">
        Get started for free
      </Button>
    </BackgroundLines>
    </div>
  );
}


