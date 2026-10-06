import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Leaf } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { label: 'About',    href: '#about'       },
    { label: 'Projects', href: '#projects'     },
    { label: 'Skills',   href: '#skills'       },
    { label: 'Timeline', href: '#experience'   },
    { label: 'GitHub',   href: '#github-stats' },
    { label: 'Contact',  href: '#contact'      },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'py-2.5 bg-[#030a04]/85 backdrop-blur-xl border-b border-lime-500/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
        : 'py-4 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #166534 0%, #15803d 45%, #4ade80 100%)' }}>
              <Leaf className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-heading font-bold text-sm text-[#f0fdf4] group-hover:text-lime-400 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] font-mono-tech text-[#4d7c55]">@{PERSONAL_INFO.handle}</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 rounded-2xl p-1 backdrop-blur-xl"
            style={{ background: 'rgba(132,204,22,0.04)', border: '1px solid rgba(132,204,22,0.10)' }}>
            {links.map((link) => (
              <a key={link.label} href={link.href}
                className="px-4 py-1.5 rounded-xl text-xs font-medium text-[#86efac] hover:text-[#f0fdf4] hover:bg-lime-500/[0.08] transition-all duration-200">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="btn-ghost text-xs py-2 px-3.5">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono-tech"
                style={{ background: 'rgba(132,204,22,0.12)', color: '#a3e635', border: '1px solid rgba(132,204,22,0.20)' }}>
                33+
              </span>
            </a>
            <a href="#contact" className="btn-primary text-xs py-2 px-4">
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl text-[#86efac] hover:text-[#f0fdf4] transition-all"
            style={{ background: 'rgba(132,204,22,0.06)', border: '1px solid rgba(132,204,22,0.12)' }}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="lg:hidden mt-3 p-3 rounded-2xl shadow-2xl backdrop-blur-2xl flex flex-col gap-1"
            style={{ background: 'rgba(6,14,7,0.97)', border: '1px solid rgba(132,204,22,0.12)' }}>
            {links.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-[#86efac] hover:text-[#f0fdf4] hover:bg-lime-500/[0.08] transition-all">
                {link.label}
              </a>
            ))}
            <div className="pt-2 mt-1 flex flex-col gap-2" style={{ borderTop: '1px solid rgba(132,204,22,0.10)' }}>
              <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-medium text-[#f0fdf4]"
                style={{ background: 'rgba(132,204,22,0.07)', border: '1px solid rgba(132,204,22,0.14)' }}>
                <GithubIcon className="w-4 h-4" /> github.com/eppetarun
              </a>
              <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary text-xs py-2.5 justify-center">
                Get In Touch
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
