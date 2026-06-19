"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#0d11171a] backdrop-blur-xl px-4 md:px-8">
      <div className="max-w-[1100px] mx-auto flex items-center justify-between h-[60px]">
        
        {/* Logo */}
        <div className="flex flex-col">
          <h3 className="text-[16px] md:text-[18px] font-bold text-gray-300">
            Muhammad{" "}
            <span className="font-extrabold bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent">
              Nur
            </span>
          </h3>

          <span className="font-mono text-[7px] md:text-[8px] text-gray-400 tracking-[2px] uppercase">
            Personal Portfolio
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-3 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`
                  px-5 py-2 rounded-full
                  transition-all duration-300
                  ${
                    active === link.href
                      ? "bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-lg shadow-violet-500/30"
                      : "text-gray-400 hover:text-white"
                  }
                `}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-[60px] left-0 w-full bg-[#0d1117f0] backdrop-blur-xl border-t border-white/10">
          <ul className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    block px-4 py-3 rounded-lg transition-all
                    ${
                      active === link.href
                        ? "bg-gradient-to-r from-violet-600 to-purple-500 text-white"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }
                  `}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}