import React from 'react';
import { GitBranch, ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { GITHUB_STATS } from '../../data/portfolioData';

const topRepos = [
  {
    name: 'ecommerce-llama',
    desc: 'AI-enhanced eCommerce platform with LLaMA API integration for smart product discovery & personalized recommendations.',
    lang: 'TypeScript', langColor: 'bg-blue-500',
    url: 'https://github.com/eppetarun/ecommerce-llama',
  },
  {
    name: 'mypic',
    desc: 'Biometric face recognition and event photo distribution platform using 128D Euclidean vector comparison.',
    lang: 'PHP / JS', langColor: 'bg-purple-500',
    url: 'https://github.com/eppetarun/mypic',
  },
  {
    name: 'agri-path-samadhan',
    desc: 'Intelligent agricultural advisory and crop diagnostic RAG platform built with Next.js, FastAPI & Gemini AI.',
    lang: 'TypeScript', langColor: 'bg-indigo-500',
    url: 'https://github.com/eppetarun/agri-path-samadhan',
  },
  {
    name: 'pushpa-spring',
    desc: 'Enterprise backend REST API microservices engineered with Java, Maven & Spring Boot layered architecture.',
    lang: 'Java', langColor: 'bg-amber-500',
    url: 'https://github.com/eppetarun/pushpa-spring',
  },
  {
    name: 'enigma-app',
    desc: 'Modern cross-platform mobile application built with Flutter, Dart & Firebase real-time cloud sync.',
    lang: 'Dart', langColor: 'bg-teal-500',
    url: 'https://github.com/eppetarun/enigma-app',
  },
  {
    name: 'college-result',
    desc: 'Academic syllabus tracking, departmental grade analytics, and student performance reporting portal.',
    lang: 'PHP / SQL', langColor: 'bg-emerald-500',
    url: 'https://github.com/eppetarun/college-result',
  },
];

const stats = [
  { val: '33+', label: 'Public Repositories'  },
  { val: '8+',  label: 'Deployed Platforms'   },
  { val: '18+', label: 'Languages & Frameworks'},
  { val: '3+',  label: 'Years Building'        },
];

export default function GithubStatsSection() {
  return (
    <section id="github-stats" className="relative py-24 overflow-hidden">
      <div className="section-divider mb-0" />
      <div className="absolute inset-0 bg-[#07091260] pointer-events-none" />
      <div className="orb orb-violet w-[450px] h-[450px] bottom-0 left-[-100px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="text-left">
            <div className="section-label mb-4">
              <GitBranch className="w-3.5 h-3.5" />
              Open Source &amp; Repositories
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tighter text-white mb-3">
              GitHub{' '}
              <span className="gradient-text">Activity</span>
            </h2>
            <p className="text-slate-400 text-base max-w-xl leading-relaxed">
              Consistently engineering and sharing open-source code across AI, full-stack web, and mobile systems.
            </p>
          </div>

          <a
            href={GITHUB_STATS.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost text-xs shrink-0"
          >
            <GithubIcon className="w-4 h-4" />
            <span>@{GITHUB_STATS.username}</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {stats.map(({ val, label }) => (
            <div key={label} className="glass-card rounded-2xl p-5 border border-white/[0.06] text-center hover:border-indigo-500/25 transition-all">
              <div className="text-3xl font-bold text-white font-mono-tech gradient-text">{val}</div>
              <div className="text-xs text-slate-400 mt-1.5">{label}</div>
            </div>
          ))}
        </div>

        {/* Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {topRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="glass-card rounded-2xl p-5 border border-white/[0.06] hover:border-indigo-500/30 flex flex-col justify-between group transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 transition-colors" />
                    <span className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors font-mono-tech">
                      {repo.name}
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-white transition-colors" />
                </div>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{repo.desc}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono-tech text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${repo.langColor}`} />
                  {repo.lang}
                </div>
                <span>Public Repository</span>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="relative glass-card rounded-3xl p-8 border border-white/[0.07] overflow-hidden">
          {/* Gradient background accent */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/[0.06] to-violet-600/[0.04] rounded-3xl" />
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 flex items-center justify-center shadow-lg shadow-indigo-500/25 shrink-0">
                <GithubIcon className="w-7 h-7 text-white" />
              </div>
              <div className="text-left">
                <div className="font-heading font-bold text-xl text-white">
                  33+ Public Open-Source Repositories
                </div>
                <div className="text-sm text-slate-400 mt-0.5">
                  Full-stack platforms, mobile apps, AI agents, and microservices — all on GitHub.
                </div>
              </div>
            </div>
            <a
              href={GITHUB_STATS.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary shrink-0"
            >
              <span>Explore All Repos</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
      <div className="section-divider mt-24" />
    </section>
  );
}
