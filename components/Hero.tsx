"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

interface HeroProps {
  scrollToSection: (id: string) => void;
  isVisible: Record<string, boolean>;
}

export default function Hero({ scrollToSection, isVisible }: HeroProps) {
  return (
    <section
      id="home"
      className="scroll-mt-32 relative min-h-screen px-6 py-32 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden bg-background text-foreground transition-colors duration-500"
    >
      {/* Animated Gradient Layer */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 bg-200 animate-gradient-x opacity-10 blur-3xl" />

      {/* Glassy Gradient Blob Background */}
      <div className="absolute top-0 left-0 right-0 h-80 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl rounded-b-[100%] z-0" />

      {/* Profile Image - Top Right on Desktop, Top Center on Mobile */}
      <div className="absolute top-8 right-8 md:right-8 md:top-8 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1 mx-auto md:mx-0 md:absolute z-10">
        <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
          <img
            src="/my-image.jpg"
            alt="Ohaeri Ekene Janua-Ceali"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div
        className={`relative z-20 text-center max-w-3xl mt-40 md:mt-0 transition-all duration-1000 ${
          isVisible.home
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
          Ohaeri Ekene Janua-Ceali
        </h1>
        <h2 className="text-xl md:text-2xl text-white/80 mb-6">
          Front-End Developer
        </h2>
        <p className="text-white/60 mb-8 px-2">
          This is a responsive and modern developer portfolio. I designed this
          to give a, glassmorphic interface using React, Tailwind CSS, and
          shadcn UI components.
        </p>

        {/* Want to work on using icons instead of svg */}
        {/* Social Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          {/* github */}
          <a
            href="https://github.com/cheali-martins"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="icon"
              className="bg-white/10 border-white/20 hover:bg-white/20 hover:animate-bounce transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.091-.745.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.072 1.834 2.809 1.304 3.495.997.107-.776.42-1.305.762-1.604-2.665-.304-5.467-1.336-5.467-5.945 0-1.313.469-2.387 1.236-3.227-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 3.003-.403c1.02.005 2.045.137 3.003.403 2.291-1.552 3.297-1.23 3.297-1.23.656 1.653.244 2.873.12 3.176.77.84 1.235 1.914 1.235 3.227 0 4.62-2.807 5.637-5.48 5.935.431.372.815 1.103.815 2.222v3.293c0 .32.192.694.8.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </Button>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="icon"
              className="bg-white/10 border-white/20 hover:bg-white/20 hover:animate-bounce transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path d="M20.452 20.452H17.21V14.78c0-1.356-.026-3.101-1.891-3.101-1.892 0-2.183 1.478-2.183 3.003v5.77H9.01V9h3.106v1.561h.045c.433-.823 1.492-1.69 3.072-1.69 3.289 0 3.895 2.165 3.895 4.981v6.6zM5.337 7.433a1.804 1.804 0 1 1 0-3.608 1.804 1.804 0 0 1 0 3.608zM6.775 20.452H3.9V9H6.775v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.728v20.543C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.728C24 .774 23.2 0 22.225 0z" />
              </svg>
            </Button>
          </a>

          {/* (x) Twitter */}
          <a
            href="https://twitter.com/cheali-martins"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="icon"
              className="bg-white/10 border-white/20 hover:bg-white/20 hover:animate-bounce transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 1227"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M714.749 561.618L1169.73 0H1062.33L668.419 500.739L347.212 0H0L477.329 717.108L0 1227H107.419L524.829 695.935L874.943 1227H1200L714.749 561.618Z" />
              </svg>
            </Button>
          </a>

          {/* Email */}
          <a href="mailto:chealimartins@gmail.com">
            <Button
              variant="outline"
              size="icon"
              className="bg-white/10 border-white/20 hover:bg-white/20 hover:animate-bounce transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path d="M12 13.065 0 6V4l12 7 12-7v2zM0 8v12h24V8l-12 7z" />
              </svg>
            </Button>
          </a>
        </div>

        {/* Scroll Down Arrow */}
        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce text-white/60 hover:text-white transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}
