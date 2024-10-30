"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react"; // Import useRef
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Search, Moon, Sun, Menu } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

function Navbar({ darkMode, toggleDarkMode, isOpen, setIsOpen }: NavbarProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const searchInputRef = useRef<HTMLInputElement | null>(null); // Create a ref for the input

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Effect to autofocus the input when the modal opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus(); // Autofocus the input
    }
  }, [isOpen]);

  return (
    <nav
      className={`border-gray-400 p-2 fixed w-full z-10 shadow-lg ${
        darkMode ? "bg-[#020611]" : "bg-violet-700"
      } text-white`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/icon.ico"
            width={40}
            height={40}
            alt="ML4E"
            priority
            quality={90}
          />
          <span className="text-xl font-bold tracking-wider">ML4E</span>
        </Link>

        <div className="flex items-center space-x-4">
          {/* New navigation links */}
          <Link href="/about" className="hidden md:block">About</Link>
          <Link href="/community" className="hidden md:block">Community</Link>
          <Link href="/datasets" className="hidden md:block">Datasets</Link>
          <Link href="/learn" className="hidden md:block">Learn</Link>
          <Link href="/models" className="hidden md:block">Models</Link>

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="hidden md:flex items-center w-full max-w-xs h-10 rounded-2xl bg-[#1f2937] border-none outline-none hover:bg-[#425167]"
                onClick={() => setIsOpen(true)}
              >
                <Search
                  className={darkMode ? "text-gray-400" : "text-violet-700"}
                />
                <span className="ml-2 text-[#999595]">Search</span>
                <span className="ml-24 text-gray-400 text-sm">Command + K</span>
              </Button>
            </DialogTrigger>
            <DialogContent
              className={`p-6 rounded-lg shadow-lg w-full max-w-2xl outline-none border-none mb-12 max-h-full ${
                darkMode ? "bg-[#020611]" : "bg-white"
              }`}
              style={{ marginTop: "20px", position: "absolute", top: "60px" }} // Adjust top position
            >
              <DialogTitle className="sr-only">Search</DialogTitle>
              <div className="relative flex items-center w-full ">
                <button className="absolute left-3 text-gray-400">
                  <Search />
                </button>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  ref={searchInputRef}
                  className={`w-[95%] pl-10 pr-12 ml-2 border rounded-lg focus:outline-none focus:ring-0 bg-inherit outline-none border-none text-lg ${
                    darkMode
                      ? "text-white bg-[#1f2937] border-gray-600"
                      : "text-gray-900 bg-white border-gray-300"
                  }`}
                  style={{
                    transition: "color 0.3s ease, background-color 0.3s ease",
                  }}
                />
                <button
                  className="w-[5%] p-2 text-gray-400 hover:text-gray-500"
                  onClick={() => setIsOpen(false)}
                >
                  Esc
                </button>
              </div>
            </DialogContent>
          </Dialog>

          <button
            onClick={toggleDarkMode}
            className="hidden md:flex p-2 rounded-full hover:bg-violet-500 focus:outline-none"
          >
            {darkMode ? (
              <Sun className="text-yellow-500" />
            ) : (
              <Moon className="text-blue-500" />
            )}
          </button>

          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="text-white" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`${
        darkMode ? "bg-[#030712] text-white" : "bg-white text-gray-900"
      } ${isOpen ? "blur-sm" : ""}`}
    >
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <main
        className={`${
          darkMode ? "bg-[#030712] text-white" : "bg-white text-gray-900"
        } flex justify-center items-center flex-col min-h-screen pt-16`}
      >
        {/* Hero Section with Grid Background */}
        <section className="custom-grid w-full flex justify-center items-center flex-col h-[75vh] relative">
          <p className="font-bold">The road to knowledge starts from here.</p>
          <div className="relative grid grid-cols-1 grid-rows-1 p-4 text-center z-10">
            <p className="font-bold text-6xl mt-4 ">
              Learn in-depth Machine Learning with ML4E
            </p>
          </div>
          <Link href="/learn">
            <Button className="learn-button mt-8 z-10 p-6 bg-white text-black text-2xl relative overflow-hidden">
              <span className="learn-text transition-transform duration-300">
                Learn Now
              </span>
              <span className="learn-emoji absolute inset-0 flex items-center justify-center transition-transform duration-300 transform translate-x-full opacity-0">
                👨‍💻
              </span>
            </Button>
          </Link>

          {/* Dark/Light mode background grid */}
          <div className="absolute inset-0 pointer-events-none grid-background"></div>
          {/* Flare Effect */}
          <div className="flare-effect"></div>
          <div className="flare-effect-1"></div>
        </section>
      </main>
    </div>
  );
}
