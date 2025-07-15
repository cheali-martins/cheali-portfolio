"use client";

import { useState, useRef, useEffect } from "react";
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
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav
      className="
    fixed top-4 z-50
    bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 shadow-xl
    w-fit max-w-full left-4 md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-between"
    >
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
      <div className="md:hidden flex items-center justify-start w-full">
        <span className="text-sm font-medium pr-1">Menu</span>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white/70 hover:text-white transition-colors"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu (always rendered, animates in/out) */}
      <div
        ref={menuRef}
        className={`absolute top-full left-0 right-0 mt-2 p-4 md:hidden rounded-3xl border border-white/10 backdrop-blur-md bg-black/40 transition-all ease-in-out duration-700 transform ${
          isMenuOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        {["home", "about", "skills", "projects", "contact"].map((section) => (
          <button
            key={section}
            onClick={() => {
              scrollToSection(section);
              setIsMenuOpen(false);
            }}
            className={`block w-full text-left py-1.5 capitalize transition-colors ${
              activeSection === section
                ? "text-blue-400 font-semibold"
                : "text-white/70 hover:text-blue-400"
            }`}
          >
            {section}
          </button>
        ))}
        <button
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
            setIsMenuOpen(false);
          }}
          className="flex items-center w-full text-left py-2 text-white/70 hover:text-blue-400 transition-colors"
        >
          <Sun className="h-4 w-4 mr-2 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 ml-0 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          {/* <span className="ml-6">Toggle theme</span> */}
        </button>
      </div>
    </nav>
  );
}
