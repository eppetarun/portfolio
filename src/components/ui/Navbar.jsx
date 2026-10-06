import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About',     href: '#about'       },
    { label: 'Projects',  href: '#projects'     },
    { label: 'Skills',    href: '#skills'       },
    { label: 'Timeline',  href: '#experience'   },
    { label: 'GitHub',    href: '#github-stats' },
    { label: 'Contact',   href: '#contact'      },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'py-2.5 bg-[#05080f]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
        : 'py-4 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center font-heading font-bold text-white text-sm shadow-lg shadow-indigo-500/20 transition-transform group-hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #9333ea 100%)' }}>
              TE
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-heading font-bold text-sm text-white group-hover:text-indigo-300 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] font-mono-tech text-slate-500">
                @{PERSONAL_INFO.handle}
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 bg-white/[0.03] border border-white/[0.07] p-1 rounded-2xl backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-white/[0.07] transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost text-xs py-2 px-3.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <span className="px-1.5 py-0.5 rounded-md bg-indigo-500/15 text-indigo-400 text-[10px] font-mono-tech border border-indigo-500/20">
                33+
              </span>
            </a>

            <a
              href="#contact"
              className="btn-primary text-xs py-2 px-4"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/[0.05] border border-white/[0.08] text-slate-300 hover:text-white transition-all"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-3 rounded-2xl bg-[#0a0e1a]/95 border border-white/[0.08] shadow-2xl backdrop-blur-2xl flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 mt-1 border-t border-white/[0.06] flex flex-col gap-2">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-medium bg-white/[0.05] border border-white/[0.08] text-white"
              >
                <GithubIcon className="w-4 h-4" />
                <span>github.com/eppetarun</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary text-xs py-2.5 justify-center"
              >
                <span>Get In Touch</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
