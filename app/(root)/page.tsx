"use client";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Search, Moon, Sun, MoreVertical } from "lucide-react";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

function Navbar({ darkMode, toggleDarkMode, isOpen, setIsOpen }: NavbarProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setDropdownOpen(false);
      }
    },
    [setIsOpen, setDropdownOpen]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleDropdownItemClick = () => {
    setDropdownOpen(false);
  };

  const handleToggleDarkMode = () => {
    if (!darkMode) {
      toggleDarkMode(); // Only toggle if currently light mode
    }
  };

  const handleToggleLightMode = () => {
    if (darkMode) {
      toggleDarkMode(); // Only toggle if currently dark mode
    }
  };

  return (
    <nav
      className={`p-2 fixed w-full flex z-10 shadow-lg ${
        darkMode ? "bg-[#020611] text-white" : "bg-white text-black"
      }`}
    >
      <div className="container justify-between items-center w-full">
        {/* logo */}
        <div className="flex items-center space-x-6">
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
          <Link href="/learn" className="hidden md:block">
            Learn
          </Link>
          <Link href="/datasets" className="hidden md:block">
            Datasets
          </Link>
          <Link href="/community" className="hidden md:block">
            Community
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-end space-x-4">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className={`hidden md:flex items-center w-full max-w-xs h-10 rounded-2xl ${
                darkMode ? "bg-[#1f2937]" : "bg-[#f0f0f0]"
              } border-none outline-none hover:bg-[#425167]`}
              onClick={() => setIsOpen(true)}
            >
              <Search className={darkMode ? "text-gray-400" : "text-black"} />
              <span className="ml-2 text-[#999595]">Search</span>
              <span className="ml-24 text-gray-400 text-sm">Command + K</span>
            </Button>
          </DialogTrigger>
          <DialogContent
            className={`[&>button]:hidden p-6 rounded-lg shadow-lg w-full max-w-2xl outline-none border-none mb-12 max-h-full ${
              darkMode ? "bg-[#020611]" : "bg-white"
            }`}
            style={{ marginTop: "20px", position: "absolute", top: "60px" }}
          >
            <DialogTitle className="sr-only">Search</DialogTitle>
            <div className="relative flex items-center w-full">
              <button className="absolute left-3 text-gray-400">
                <Search />
              </button>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                ref={searchInputRef}
                className={`w-[95%] pl-10 pr-12 ml-2 border rounded-lg focus:outline-none focus:ring-0 bg-inherit text-lg ${
                  darkMode
                    ? "text-white bg-[#1f2937] border-gray-600"
                    : "text-black bg-white border-gray-300"
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
          onClick={() => setIsOpen(true)}
          className={`md:hidden p-2 rounded-full ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          <Search />
        </button>
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleDropdown}
        >
          <MoreVertical className={darkMode ? "text-white" : "text-black"} />
        </button>
        {/* Dropdown Menu for Small Screens */}
        {dropdownOpen && (
          <div
            className={`absolute right-1 top-12 w-48 rounded-lg shadow-lg z-20 p-2 ${
              darkMode ? "bg-[#1f2937] text-white" : "bg-white text-black"
            }`}
          >
            <Link
              href="/"
              onClick={handleDropdownItemClick}
              className="block w-full px-4 py-2 hover:bg-gray-200 rounded-lg"
            >
              Home
            </Link>
            <Link
              href="/learn"
              onClick={handleDropdownItemClick}
              className="block w-full px-4 py-2 hover:bg-gray-200 rounded-lg"
            >
              Learn
            </Link>
            <Link
              href="/about"
              onClick={handleDropdownItemClick}
              className="block w-full px-4 py-2 hover:bg-gray-200 rounded-lg"
            >
              About
            </Link>
            <div className="flex items-center justify-between w-full px-4 py-2">
              <span>Theme</span>
              <div className="flex space-x-2">
                {/* Sun Button for Light Mode */}
                <button
                  onClick={handleToggleLightMode}
                  className={`p-2 rounded-full ${
                    !darkMode ? "bg-[#e4e0e0]" : ""
                  }`}
                  aria-label="Switch to Light Mode"
                >
                  <Sun />
                </button>

                {/* Moon Button for Dark Mode */}
                <button
                  onClick={handleToggleDarkMode}
                  className={`p-2 rounded-full ${
                    darkMode ? "bg-[#686868]" : ""
                  }`}
                  aria-label="Switch to Dark Mode"
                >
                  <Moon />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Theme Toggle Button for Large Screens */}
        <div className="hidden md:flex items-center space-x-0.5">
          {/* Sun Button for Light Mode */}
          <button
            onClick={handleToggleLightMode}
            className={`p-2 rounded-full ${!darkMode ? "bg-[#e4e0e0]" : ""}`}
            aria-label="Switch to Light Mode"
          >
            <Sun />
          </button>

          {/* Moon Button for Dark Mode */}
          <button
            onClick={handleToggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? "bg-[#686868]" : ""}`}
            aria-label="Switch to Dark Mode"
          >
            <Moon />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  // Toggle theme and save it to localStorage
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  return (
    <div
      className={darkMode ? "bg-[#020611] text-white" : "bg-white text-black"}
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
        } pt-20 transition-colors duration-300 `}
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Add your main content here */}
        <div className="p-4 text-center max-w-2xl">
          <h1 className="text-4xl font-bold">Welcome to ML4E</h1>
          <p className="mt-4">
            Explore the world of Machine Learning with easy-to-understand
            tutorials, datasets, and a vibrant community.
          </p>
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
        </div>
      </main>
    </div>
  );
}
