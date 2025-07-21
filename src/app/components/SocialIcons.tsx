'use client';

import { useState } from 'react';
import { Github, Linkedin, Youtube, Code, Mail, ChevronRight } from 'lucide-react';

const SocialIcons = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:atharvapatange07@gmail.com",
      color: "hover:bg-emerald-500",
      bgColor: "bg-emerald-500",
      label: "Email",
      username: "atharvapatange07@gmail.com"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/AtharvaPatange",
      color: "hover:bg-slate-700",
      bgColor: "bg-slate-700",
      label: "GitHub",
      username: "@AtharvaPatange"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/atharva-patange-7596092a1/",
      color: "hover:bg-blue-600",
      bgColor: "bg-blue-600",
      label: "LinkedIn",
      username: "Atharva Patange"
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      href: "https://www.youtube.com/@-AtharvaPatange",
      color: "hover:bg-red-500",
      bgColor: "bg-red-500",
      label: "YouTube",
      username: "@AtharvaPatange"
    },
    {
      icon: <Code className="w-5 h-5" />,
      href: "https://leetcode.com/u/Atharva__93/",
      color: "hover:bg-orange-500",
      bgColor: "bg-orange-500",
      label: "LeetCode",
      username: "Atharva__93"
    }
  ];

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="relative">
        {/* Main Social Icons Container */}
        <div className="modern-card rounded-2xl p-3 space-y-3 shadow-xl border border-slate-200/50">
          {socialLinks.map((social, index) => (
            <div key={index} className="relative group">
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  relative flex items-center justify-center w-12 h-12 rounded-xl
                  text-slate-600 bg-slate-50 border border-slate-200
                  ${social.color} hover:text-white hover:border-transparent
                  transition-all duration-300 transform hover:scale-110 hover:shadow-lg
                  group-hover:shadow-xl
                `}
                aria-label={social.label}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative z-10">
                  {social.icon}
                </div>
                
                {/* Animated background */}
                <div className={`
                  absolute inset-0 rounded-xl ${social.bgColor} 
                  transform scale-0 group-hover:scale-100 
                  transition-transform duration-300 ease-out
                `} />
              </a>

              {/* Tooltip */}
              <div className={`
                absolute left-16 top-1/2 transform -translate-y-1/2
                bg-slate-800 text-white px-3 py-2 rounded-lg text-sm font-medium
                whitespace-nowrap shadow-lg border border-slate-700
                transition-all duration-300 pointer-events-none
                ${hoveredIndex === index 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-2'
                }
              `}>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">{social.label}</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
                <div className="text-xs text-slate-300 mt-1">
                  {social.username}
                </div>
                
                {/* Tooltip arrow */}
                <div className="absolute right-full top-1/2 transform -translate-y-1/2">
                  <div className="w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-slate-800"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Connecting line to show it's interactive */}
      <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
        <div className="w-6 h-px bg-gradient-to-r from-slate-300 to-transparent"></div>
      </div>
    </div>
  );
};

export default SocialIcons;