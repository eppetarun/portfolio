import React from 'react';
import { ArrowUp, Leaf } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { PERSONAL_INFO } from '../../data/portfolioData';

const footerLinks = [
  { label: 'About',     href: '#about'       },
  { label: 'Projects',  href: '#projects'     },
  { label: 'Skills',    href: '#skills'       },
  { label: 'Timeline',  href: '#experience'   },
  { label: 'GitHub',    href: '#github-stats' },
  { label: 'Contact',   href: '#contact'      },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-lime-500/[0.10] bg-[#020603] overflow-hidden">
      {/* Gradient fade from body to footer */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(132,204,22,0.3) 30%, rgba(34,197,94,0.3) 70%, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-lime-500/[0.10]">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg"
                style={{ background: 'linear-gradient(135deg, #166534 0%, #15803d 45%, #4ade80 100%)' }}>
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-heading font-bold text-base text-[#f0fdf4]">{PERSONAL_INFO.name}</div>
                <div className="text-[10px] font-mono-tech text-[#4d7c55]">@{PERSONAL_INFO.handle}</div>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              Undergraduate CSE Engineer @ JNTU Hyderabad — designing and deploying production AI systems,
              full-stack web platforms, and open-source software.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-[10px] font-mono-tech text-lime-400 uppercase tracking-widest mb-4">Navigation</div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href}
                  className="text-sm text-slate-400 hover:text-lime-300 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <div className="text-[10px] font-mono-tech text-lime-400 uppercase tracking-widest mb-4">Connect</div>
            <div className="flex flex-col gap-2">
              <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-lime-300 transition-colors">
                <GithubIcon className="w-4 h-4" />
                <span>github.com/{PERSONAL_INFO.handle}</span>
              </a>
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-lime-300 transition-colors">
                <LinkedinIcon className="w-4 h-4" />
                <span>linkedin.com/in/eppetarun</span>
              </a>
              <a href={PERSONAL_INFO.socials.email}
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-lime-300 transition-colors">
                <span className="w-4 h-4 flex items-center justify-center">✉</span>
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}.</span>
            <span>Built with React, Vite &amp; Tailwind CSS.</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-slate-400">
              Made with <span className="text-lime-400">🌿</span> in Hyderabad
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2 rounded-xl glass-card border border-lime-500/[0.15] text-slate-400 hover:text-lime-300 hover:border-lime-400 transition-all"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
