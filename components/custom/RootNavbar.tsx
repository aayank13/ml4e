'use client'

import Link from "next/link"
import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { Search, EllipsisVertical } from "lucide-react"
import ThemeToggleButton from "./ThemeToggleButton"

interface NavbarProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

function Navbar({ isOpen, setIsOpen }: NavbarProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault()
        setIsOpen(true)
      }
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    },
    [setIsOpen]
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/learn", label: "Learn" },
    { href: "/community", label: "Community" },
    { href: "/datasets", label: "Datasets" },
    { href: "/models", label: "Models" },
    { href: "/about", label: "About" },
  ]

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex justify-center items-center max-w-7xl mx-auto py-2 md:py-3 px-3">
        <div className="flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              src="/logo.png"
              width={32}
              height={32}
              alt="ML4E"
              className="rounded-full"
            />
            <span className="font-bold">ML4E</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
  
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
  <Button
    variant="outline"
    className="inline-flex items-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start text-sm text-muted-foreground md:w-40 lg:w-64"
    onClick={() => setIsOpen(true)}
  >
    <Search className="mr-2 h-4 w-4" />
    <span className="hidden lg:inline-flex">Search documentation...</span>
    <span className="inline-flex lg:hidden">Search...</span>
    <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
      <span className="text-xs">⌘</span>K
    </kbd>
  </Button>
</DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogTitle className="sr-only">Search</DialogTitle>{" "}
              {/* Hidden title for accessibility */}
              <div className="flex items-center border-b px-3">
                <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                <Input
                  className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Search documentation..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </DialogContent>
          </Dialog>
  
          <div className="items-center space-x-2 hidden md:flex">
            <ThemeToggleButton />
            <Link
              href="https://github.com/aayank13/ml4e"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <svg role="img" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger
            asChild
            className="pr-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          >
            <Button variant="ghost" className="flex items-center">
              <EllipsisVertical />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="w-full">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-4 pt-4 pb-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium hover:text-foreground/80 text-foreground/60"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            <div className="flex justify-between items-center pb-5">
            <Link
              href="https://github.com/aayank13/ml4e"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <svg role="img" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                </svg>
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            
            <ThemeToggleButton />
          </div>
            
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );  
}

export default function RootNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  return <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
}