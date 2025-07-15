"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Sun, Moon, Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}
export default function Navbar({
  activeSection,
  scrollToSection,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-6 py-3">
      <div className="hidden md:flex items-center space-x-8">
        {["home", "about", "skills", "projects", "contact"].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`capitalize transition-all duration-300 hover:text-blue-400 ${
              activeSection === section ? "text-blue-400" : "text-white/70"
            }`}
          >
            {section}
          </button>
        ))}

        {/* Dark mode toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="hidden md:flex text-white/70 hover:text-white hover:bg-white/10"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center justify-between w-full">
        <span className="text-sm font-medium">Menu</span>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white/70 hover:text-white transition-colors"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:hidden">
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="block w-full text-left py-2 capitalize text-white/70 hover:text-blue-400 transition-colors"
            >
              {section}
            </button>
          ))}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center w-full text-left py-2 text-white/70 hover:text-blue-400 transition-colors"
          >
            <Sun className="h-4 w-4 mr-2 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 ml-0 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="ml-6">Toggle theme</span>
          </button>
        </div>
      )}
    </nav>
  );
}
