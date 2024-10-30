'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { Search, Moon, Sun, Menu } from "lucide-react"; // Import Menu icon from Lucide

const commands = [
  { label: "Home", href: "/" },
  { label: "Datasets", href: "/datasets" },
  { label: "Models", href: "/models" },
  { label: "Learn", href: "/learn" },
  { label: "Community", href: "/community" },
  { label: "About", href: "/about" },
];

// Define props type for Navbar
interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for keydown
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      // Cleanup the event listener
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <nav className={`p-4 fixed w-full z-10 shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-violet-700'} text-white`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/icon.ico" 
            width={40}
            height={40}
            alt="ML4E"
            priority
            quality={90}
          />
          <span className="text-2xl font-bold tracking-wider">ML4E</span>
        </Link>

        {/* Right Section: Search, Dark Mode Toggle, Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* ShadCN Search Dialog */}
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="hidden md:flex items-center w-full max-w-xs w-60 h-10 rounded-lg" onClick={() => setIsOpen(true)}>
                <Search className="text-violet-700" />
                <span className="ml-auto text-gray-400">Command + K</span>
              </Button>
            </DialogTrigger>
            <DialogContent className={`bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto ${isOpen ? 'backdrop-blur-md' : ''}`}>
              {/* Dialog Title for Accessibility */}
              <DialogTitle className="sr-only">Search</DialogTitle>

              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-700"
                />
                <button className="absolute right-3 top-3 text-violet-700">
                  <Search />
                </button>
              </div>
    
              {/* Command List */}
              <ul className="mt-4 w-full">
                {commands.map(command => (
                  <li key={command.label} className="p-2 hover:bg-gray-200 rounded">
                    <Link href={command.href}>{command.label}</Link>
                  </li>
                ))}
              </ul>
            </DialogContent>
          </Dialog>

          {/* Dark/Light Mode Toggle */}
          <button 
            onClick={toggleDarkMode}
            className="hidden md:flex p-2 rounded-full hover:bg-violet-500 focus:outline-none"
          >
            {darkMode ? <Sun className="text-yellow-500" /> : <Moon className="text-blue-500" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="text-white" /> {/* Menu icon from Lucide */}
          </button>
        </div>
      </div>
    </nav>
  );
}

// Define props type for Home
export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false); // To control the dialog state
  const [darkMode, setDarkMode] = useState<boolean>(false); // State for dark mode

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} ${isOpen ? 'blur-sm' : ''}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex justify-center items-center flex-col min-h-screen pt-16">
        <h1 className="font-bold text-4xl pb-3 tracking-wide">
          ML4E
        </h1>
        <p className="font-light text-2xl px-4 text-center">
          Machine Learning for Everyone is a collection of resources to help you
          learn machine learning.
        </p>
        <Link href="/learn">
          <Button className="mt-5">Start Learning</Button>
        </Link>
      </main>
    </div>
  );
}
