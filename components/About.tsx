"use client";

import { useEffect, useState } from "react";
import { Calculator, Laptop, BadgeCheck, School, Code2 } from "lucide-react";

interface AboutProps {
  isVisible: Record<string, boolean>;
}

export default function About({ isVisible }: AboutProps) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (isVisible.about && !revealed) {
      setTimeout(() => setRevealed(true), 100);
    }
  }, [isVisible.about, revealed]);

  const timeline = [
    {
      year: "2024",
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      icon: BadgeCheck,
    },
    {
      year: "2023",
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      icon: Laptop,
    },
    {
      year: "2022",
      title: "Junior Developer",
      company: "StartUp Hub",
      icon: Code2,
    },
    {
      year: "2021",
      title: "Web Development Bootcamp",
      company: "Code Academy",
      icon: School,
    },
  ];

  return (
    <section id="about" className="scroll-mt-32 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading with animation */}
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent transition-all duration-700 ease-out ${
            isVisible.about
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          About Me
        </h2>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-36 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-lg text-white/80 leading-relaxed">
              I'm a passionate front-end developer with over 3 years of
              experience creating stunning, user-centric web applications. I
              specialize in React, Next.js, and modern CSS frameworks, always
              staying up-to-date with the latest web technologies and best
              practices.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              My journey in web development started with a curiosity about how
              websites work, and it has evolved into a career focused on
              creating seamless digital experiences that users love. I believe
              in writing clean, maintainable code and collaborating effectively
              with teams.
            </p>
          </div>

          {/* Right column - experience timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-400 mb-6">
              Experience Timeline
            </h3>

            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`flex items-start space-x-4 transition-all duration-700 ease-out transform ${
                    revealed
                      ? `opacity-100 translate-y-0`
                      : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-400 font-medium">
                      {item.year}
                    </div>
                    <div className="text-white font-semibold">{item.title}</div>
                    <div className="text-white/60">{item.company}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
