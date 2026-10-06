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
      {/* Ambient forest green & lime gradient orbs */}
      <div className="orb orb-lime   animate-float-slow   w-[700px] h-[700px] top-[-100px] left-[-200px] opacity-50" />
      <div className="orb orb-forest animate-float-medium w-[550px] h-[550px] top-[20%]   right-[-150px] opacity-60" />
      <div className="orb orb-green  animate-float-slow   w-[400px] h-[400px] bottom-[5%]  left-[30%]    opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── Left: Content ─────────────────────────────── */}
          <div className="lg:col-span-7 space-y-7 text-left">

            {/* Status badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-lime-500/[0.08] border border-lime-500/20 text-xs font-medium text-lime-400">
              <span className="pulse-dot" />
              <span>Open to SWE &amp; AI Roles · 2026 / 2027</span>
            </div>

            {/* Main headline */}
            <div className="space-y-2">
              <h1 className="font-heading text-5xl sm:text-7xl font-extrabold tracking-tighter text-[#f0fdf4] leading-[1.0]">
                Hi, I'm{' '}
                <span className="text-shimmer">{PERSONAL_INFO.name}</span>.
              </h1>
              <p className="font-heading text-2xl sm:text-4xl font-semibold text-[#86efac] leading-snug tracking-tight">
                Software Engineer &amp; AI Systems Builder.
              </p>
            </div>

            {/* Elevator pitch */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              B.Tech CSE student at{' '}
              <span className="text-[#f0fdf4] font-semibold">JNTU Hyderabad</span>{' '}
              (2023–2027). Creator of{' '}
              <span className="text-[#a3e635] font-semibold">33+ open-source repositories</span>{' '}
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
                <ArrowUpRight className="w-4 h-4 text-[#030a04]" />
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
              <a href="#contact" className="text-sm text-[#86efac] hover:text-[#f0fdf4] transition-colors underline underline-offset-4 decoration-emerald-800 hover:decoration-lime-400">
                Contact Me
              </a>
            </div>

            {/* Meta info row */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-[#4d7c55] pt-2 border-t border-lime-500/[0.10]">
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-lime-400" />
                {PERSONAL_INFO.location}
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                B.Tech CSE · JNTUH 2023–2027
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Code2 className="w-3.5 h-3.5 text-lime-400" />
                33+ GitHub Repositories
              </span>
            </div>
          </div>

          {/* ── Right: Profile Card ───────────────────────── */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px]">

              {/* Glow ring behind card */}
              <div className="absolute -inset-4 rounded-3xl opacity-25 blur-2xl"
                style={{ background: 'linear-gradient(135deg, #166534, #84cc16, #a3e635)' }} />

              {/* Card */}
              <div className="relative glass-card rounded-3xl p-5 border border-lime-500/[0.15] shadow-2xl">

                {/* Avatar with gradient ring */}
                <div className="relative mb-5">
                  <div className="avatar-ring rounded-3xl overflow-hidden">
                    <div className="rounded-[20px] overflow-hidden m-[2px] aspect-square bg-[#060e07]">
                      <img
                        src={PERSONAL_INFO.avatar}
                        alt={`${PERSONAL_INFO.name} – GitHub Profile`}
                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  {/* Active badge */}
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#030a04]/90 backdrop-blur-xl border border-lime-500/30 text-[10px] font-mono-tech text-lime-400">
                    <span className="pulse-dot scale-75" />
                    Active Developer
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-[#f0fdf4]">{PERSONAL_INFO.name}</h3>
                      <p className="text-[11px] font-mono-tech text-[#86efac] mt-0.5">
                        @{PERSONAL_INFO.handle} · JNTU Hyderabad
                      </p>
                    </div>
                    <a
                      href={PERSONAL_INFO.socials.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-xl bg-white/[0.04] hover:bg-lime-500/20 border border-white/[0.07] hover:border-lime-500/40 text-slate-300 hover:text-lime-300 transition-all"
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
                      <div key={label} className="p-2.5 rounded-xl bg-lime-950/20 border border-lime-500/10 text-center">
                        <div className="text-base font-bold text-lime-300 font-mono-tech">{val}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Target companies */}
                  <div className="px-4 py-3 rounded-2xl bg-lime-950/20 border border-lime-500/10">
                    <div className="text-[10px] font-mono-tech text-lime-400 uppercase tracking-widest mb-1.5">
                      Target Companies
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple'].map((co) => (
                        <span key={co} className="px-2 py-0.5 rounded-md text-[10px] font-medium text-slate-200 bg-white/[0.05] border border-lime-500/20">
                          {co}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specialization */}
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Zap className="w-3.5 h-3.5 text-lime-400 shrink-0" />
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
