import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features", hasDropdown: true },
  { href: "/learn", label: "Learn" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 justify-between items-center max-w-7xl mx-auto px-4">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              width={32}
              height={32}
              alt="ML4E"
              className="rounded-full"
            />
            <span className="font-semibold text-xl">ML4E</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <nav className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {item.label}
                {item.hasDropdown && (
                  <svg
                    className="ml-1 h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right side items */}
        <div className="flex items-center space-x-4">
          {/* <Link href="/auth">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              Login
            </Button>
          </Link> */}
          <Link href="/dashboard">
            <Button
              size="sm"
              className="hidden md:flex bg-indigo-600 hover:bg-indigo-900"
            >
              Get Started
            </Button>
          </Link>

          {/* Mobile menu button */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-foreground/70 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
                {/* <Link href="/auth">
                  <Button
                    size="sm"
                    className="bg-gray-100 hover:bg-gray-200 text-black"
                  >
                    Login
                  </Button>
                </Link> */}
                <Link href="/dashboard">
                  <Button
                    size="sm"
                    className="w-full bg-indigo-600 hover:bg-indigo-900"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
