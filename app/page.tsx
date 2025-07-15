"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  GitBranch,
  FileSpreadsheet,
  Calendar,
  Send,
  ChevronDown,
  Sun,
  Moon,
} from "lucide-react";
import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "./actions";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import About from "@/components/About";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const { theme, setTheme } = useTheme();

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Intersection Observer for animations and active nav
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "HTML", icon: Code, category: "Frontend" },
    { name: "CSS", icon: Palette, category: "Frontend" },
    { name: "JavaScript", icon: Code, category: "Frontend" },
    { name: "React", icon: Code, category: "Frontend" },
    { name: "Next.js", icon: Code, category: "Frontend" },
    { name: "Tailwind CSS", icon: Palette, category: "Frontend" },
    { name: "Git", icon: GitBranch, category: "Tools" },
    { name: "Excel", icon: FileSpreadsheet, category: "Tools" },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform built with Next.js and Stripe integration.",
      image: "/images/ecommerce-project.png",
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates.",
      image: "/images/task-management-project.png",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing modern web development.",
      image: "/images/portfolio-project.png",
      link: "#",
    },
  ];

  const timeline = [
    {
      year: "2024",
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
    },
    {
      year: "2023",
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
    },
    { year: "2022", title: "Junior Developer", company: "StartUp Hub" },
    {
      year: "2021",
      title: "Web Development Bootcamp",
      company: "Code Academy",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Floating Navigation */}
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <Hero scrollToSection={scrollToSection} isVisible={isVisible} />

      {/* About Section */}
      <About isVisible={isVisible} />

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-32 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible.skills
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <Card
                    key={index}
                    className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-6 text-center">
                      <Icon className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                      <h3 className="text-white font-semibold mb-2">
                        {skill.name}
                      </h3>
                      <p className="text-white/60 text-sm">{skill.category}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-32 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible.projects
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-white/70 mb-4">
                        {project.description}
                      </p>
                      <Button
                        variant="outline"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 border-0 hover:from-blue-600 hover:to-purple-600"
                      >
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact isVisible={isVisible} />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            © 2024 Ohaeri Ekene Janua-Ceali. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
