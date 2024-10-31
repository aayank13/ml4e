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

  return (
    <nav
      className={`border-gray-400 p-2 fixed w-full z-10 shadow-lg ${
        darkMode ? "bg-[#020611] text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
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

        <div className="flex items-center justify-start space-x-4">
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
              className={`p-6 rounded-lg shadow-lg w-full max-w-2xl outline-none border-none mb-12 max-h-full ${
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
            <MoreVertical className="text-black" />
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
                <button
                  onClick={() => {
                    handleDropdownItemClick();
                    toggleDarkMode();
                  }}
                  className="p-1"
                >
                  {darkMode ? (
                    <Sun className="text-yellow-500" />
                  ) : (
                    <Moon className="text-blue-500" />
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Theme Toggle Button for Large Screens */}
          <button
            onClick={toggleDarkMode}
            className="hidden md:flex items-center p-2 rounded-full hover:bg-gray-200 focus:outline-none"
          >
            <span className="mr-2">Theme</span>
            {darkMode ? (
              <Sun className="text-yellow-500" />
            ) : (
              <Moon className="text-blue-500" />
            )}
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
      } ${isOpen ? "blur-sm" : ""} relative`}
      style={{ overflowX: "hidden" }} // Prevent horizontal overflow
    >
      <div className="grid-background"></div> {/* Add the grid background */}
      <div
        className={`flare-effect ${darkMode ? "dark-flare" : "light-flare"}`}
      ></div>
      <div
        className={`flare-effect-1 ${darkMode ? "dark-flare" : "light-flare"}`}
      ></div>
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
        <section className="custom-grid w-full flex justify-center items-center flex-col h-[75vh] relative">
          <p className="font-bold">The road to knowledge starts from here.</p>
          <div className="relative grid grid-cols-1 grid-rows-1 p-4 text-center z-10">
            <p className="font-bold text-6xl mt-4 ">
              Learn in-depth Machine Learning with ML4E
            </p>
          </div>
          <Link href="/learn">
            <Button
              className={`learn-button mt-8 z-10 hover:shadow-2xl ${
                darkMode ? "bg-[#020617] text-white" : "bg-[#28292d] text-white"
              } text-lg px-8 py-4 rounded-lg`}
            >
              Start Learning
            </Button>
          </Link>
        </section>
      </main>
    </div>
  );
}
