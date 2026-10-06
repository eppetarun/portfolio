import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
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
    <footer className="relative border-t border-white/[0.06] bg-[#030508] overflow-hidden">
      {/* Gradient fade from body to footer */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(99,102,241,0.3) 30%, rgba(139,92,246,0.3) 70%, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/[0.05]">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center font-heading font-bold text-white text-sm"
                style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #9333ea 100%)' }}>
                TE
              </div>
              <div>
                <div className="font-heading font-bold text-base text-white">{PERSONAL_INFO.name}</div>
                <div className="text-[10px] font-mono-tech text-slate-500">@{PERSONAL_INFO.handle}</div>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              Undergraduate CSE Engineer @ JNTU Hyderabad — designing and deploying production AI systems,
              full-stack web platforms, and open-source software.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-[10px] font-mono-tech text-slate-600 uppercase tracking-widest mb-4">Navigation</div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href}
                  className="text-sm text-slate-500 hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <div className="text-[10px] font-mono-tech text-slate-600 uppercase tracking-widest mb-4">Connect</div>
            <div className="flex flex-col gap-2">
              <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-white transition-colors">
                <GithubIcon className="w-4 h-4" />
                <span>github.com/{PERSONAL_INFO.handle}</span>
              </a>
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-white transition-colors">
                <LinkedinIcon className="w-4 h-4" />
                <span>linkedin.com/in/eppetarun</span>
              </a>
              <a href={PERSONAL_INFO.socials.email}
                className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-white transition-colors">
                <span className="w-4 h-4 flex items-center justify-center">✉</span>
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}.</span>
            <span>Built with React, Vite &amp; Tailwind CSS.</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-slate-600">
              Made with <Heart className="w-3 h-3 text-red-500 fill-current" /> in Hyderabad
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2 rounded-xl glass-card border border-white/[0.08] text-slate-500 hover:text-white hover:border-indigo-500/30 transition-all"
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
