import React from 'react';
import { ArrowUpRight, MapPin, GraduationCap, Zap, ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { PERSONAL_INFO } from '../../data/portfolioData';

export default function HeroSection() {
  const pills = [
    'Python & FastAPI', 'React & Next.js', 'Java & Spring Boot',
    'Vector RAG', 'Flutter', 'MySQL & PostgreSQL', 'LangChain', 'Computer Vision',
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-grid noise-overlay">
      {/* Ambient gradient orbs */}
      <div className="orb orb-blue  animate-float-slow   w-[700px] h-[700px] top-[-100px] left-[-200px] opacity-60" />
      <div className="orb orb-violet animate-float-medium w-[500px] h-[500px] top-[20%]   right-[-150px] opacity-50" />
      <div className="orb orb-cyan  animate-float-slow   w-[400px] h-[400px] bottom-[5%]  left-[30%]    opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── Left: Content ─────────────────────────────── */}
          <div className="lg:col-span-7 space-y-7 text-left">

            {/* Status badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-xs font-medium text-emerald-400">
              <span className="pulse-dot" />
              <span>Open to SWE &amp; AI Roles · 2026 / 2027</span>
            </div>

            {/* Main headline */}
            <div className="space-y-2">
              <h1 className="font-heading text-5xl sm:text-7xl font-extrabold tracking-tighter text-white leading-[1.0]">
                Hi, I'm{' '}
                <span className="text-shimmer">{PERSONAL_INFO.name}</span>.
              </h1>
              <p className="font-heading text-2xl sm:text-4xl font-semibold text-slate-400 leading-snug tracking-tight">
                Software Engineer &amp; AI Systems Builder.
              </p>
            </div>

            {/* Elevator pitch */}
            <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
              B.Tech CSE student at{' '}
              <span className="text-white font-semibold">JNTU Hyderabad</span>{' '}
              (2023–2027). Creator of{' '}
              <span className="text-white font-semibold">33+ open-source repositories</span>{' '}
              spanning full-stack platforms, biometric vision, vector RAG engines, and enterprise microservices.
            </p>

            {/* Pill cloud */}
            <div className="flex flex-wrap gap-2 pt-1">
              {pills.map((p) => (
                <span key={p} className="tech-tag">{p}</span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="#projects" className="btn-primary">
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                <GithubIcon className="w-4 h-4" />
                <span>@{PERSONAL_INFO.handle}</span>
              </a>
              <a href="#contact" className="text-sm text-slate-400 hover:text-white transition-colors underline underline-offset-4 decoration-slate-700 hover:decoration-indigo-500">
                Contact Me
              </a>
            </div>

            {/* Meta info row */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 pt-2 border-t border-white/[0.05]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-violet-400" />
                B.Tech CSE · JNTUH 2023–2027
              </span>
              <span className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                33+ GitHub Repositories
              </span>
            </div>
          </div>

          {/* ── Right: Profile Card ───────────────────────── */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px]">

              {/* Glow ring behind card */}
              <div className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
                style={{ background: 'linear-gradient(135deg, #4f46e5, #8b5cf6, #22d3ee)' }} />

              {/* Card */}
              <div className="relative glass-card rounded-3xl p-5 border border-white/[0.07] shadow-2xl">

                {/* Avatar with gradient ring */}
                <div className="relative mb-5">
                  <div className="avatar-ring rounded-3xl overflow-hidden">
                    <div className="rounded-[20px] overflow-hidden m-[2px] aspect-square bg-[#0a0e1a]">
                      <img
                        src={PERSONAL_INFO.avatar}
                        alt={`${PERSONAL_INFO.name} – GitHub Profile`}
                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  {/* Active badge */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#05080f]/80 backdrop-blur-xl border border-emerald-500/25 text-[10px] font-mono-tech text-emerald-400">
                    <span className="pulse-dot scale-75" />
                    Active Developer
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-white">{PERSONAL_INFO.name}</h3>
                      <p className="text-[11px] font-mono-tech text-slate-500 mt-0.5">
                        @{PERSONAL_INFO.handle} · JNTU Hyderabad
                      </p>
                    </div>
                    <a
                      href={PERSONAL_INFO.socials.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-xl bg-white/[0.04] hover:bg-indigo-500/20 border border-white/[0.07] hover:border-indigo-500/30 text-slate-400 hover:text-indigo-400 transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { val: '33+', label: 'Repos'      },
                      { val: '8+',  label: 'Deployed'   },
                      { val: '18+', label: 'Languages'  },
                    ].map(({ val, label }) => (
                      <div key={label} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center">
                        <div className="text-base font-bold text-white font-mono-tech">{val}</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">{label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Target companies */}
                  <div className="px-4 py-3 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                    <div className="text-[10px] font-mono-tech text-slate-500 uppercase tracking-widest mb-1.5">
                      Target Companies
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple'].map((co) => (
                        <span key={co} className="px-2 py-0.5 rounded-md text-[10px] font-medium text-slate-300 bg-white/[0.05] border border-white/[0.08]">
                          {co}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specialization */}
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Zap className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>Full-Stack · AI/RAG Systems · Computer Vision</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
