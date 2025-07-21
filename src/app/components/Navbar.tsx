'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Section highlighting
      const sections = [
        'home',
        'about',
        'experience',
        'projects',
        'tech',
        'achievements',
        'contact',
      ];
      let current = 'home';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 80) {
          current = section;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Tech Stack', href: '#tech', id: 'tech' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-lg bg-white/80 shadow-xl border-b border-gray-200'
          : 'bg-white/60'
      }`}
      style={{ WebkitBackdropFilter: 'blur(16px)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 flex-shrink-0 select-none">
            <span className="text-cyan-400"><Sparkles size={28} /></span>
            <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">AP</h1>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group relative px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200
                    ${activeSection === item.id ? 'text-cyan-600' : 'text-gray-800 hover:text-cyan-600'}
                  `}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 right-0 bottom-0 mx-auto h-0.5 bg-cyan-600 rounded transition-all duration-300
                      ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    style={{ transitionProperty: 'width' }}
                  />
                </a>
              ))}
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-cyan-600 focus:outline-none focus:text-cyan-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200 transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-8 opacity-0 pointer-events-none'}`}
        style={{ WebkitBackdropFilter: 'blur(16px)' }}
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200
                ${activeSection === item.id ? 'text-cyan-600' : 'text-gray-800 hover:text-cyan-600'}
              `}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;