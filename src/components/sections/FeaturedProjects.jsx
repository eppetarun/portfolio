import React, { useState } from 'react';
import { ExternalLink, Eye, Layers, ArrowUpRight, Star } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { PROJECTS } from '../../data/portfolioData';

const FILTER_CATEGORIES = ['ALL', 'AI & ML', 'FULL-STACK', 'MOBILE', 'ENTERPRISE'];

function matchesFilter(project, filter) {
  if (filter === 'ALL') return true;
  if (filter === 'AI & ML')    return project.category.includes('AI') || project.category.includes('Vision');
  if (filter === 'FULL-STACK') return project.category.includes('Full-Stack') || project.category.includes('Web');
  if (filter === 'MOBILE')     return project.category.includes('Mobile') || project.tags.includes('Flutter');
  if (filter === 'ENTERPRISE') return project.category.includes('Enterprise') || project.tags.includes('Spring Boot');
  return true;
}

export default function FeaturedProjects({ onSelectProject }) {
  const [filter, setFilter] = useState('ALL');

  const filtered = PROJECTS.filter((p) => matchesFilter(p, filter));

  return (
    <section id="projects" className="relative py-24 overflow-hidden bg-dots">
      {/* Ambient glow */}
      <div className="orb orb-forest w-[550px] h-[550px] top-1/3 left-[-100px] opacity-30 pointer-events-none" />
      <div className="orb orb-lime   w-[400px] h-[400px] bottom-10 right-[-100px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="text-left">
            <div className="section-label mb-4">
              <Layers className="w-3.5 h-3.5" />
              GitHub Codebases &amp; Architectures
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tighter text-[#f0fdf4] mb-3">
              Featured{' '}
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-slate-300 text-base max-w-xl leading-relaxed">
              Real-world systems with open-source repositories, live demos,
              scalable architectures, and measurable engineering impact.
            </p>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {FILTER_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-lime-400 to-lime-500 text-[#030a04] font-bold shadow-lg shadow-lime-500/25'
                    : 'glass-card border border-lime-500/[0.12] text-[#86efac] hover:text-[#f0fdf4] hover:border-lime-500/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {filtered.map((project, idx) => {
            const hasDemo = project.liveUrl && !project.liveUrl.includes('github.com');
            const isFeature = idx === 0; // First card gets featured treatment

            return (
              <div
                key={project.id}
                className={`project-card glass-card rounded-3xl overflow-hidden border border-lime-500/[0.12] flex flex-col group hover:border-lime-500/40 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(132,204,22,0.12)] ${
                  isFeature ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Thumbnail */}
                <div
                  className={`relative w-full overflow-hidden cursor-pointer bg-[#060e07] ${
                    isFeature ? 'aspect-[21/9]' : 'aspect-[16/9]'
                  }`}
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030a04] via-[#030a04]/40 to-transparent opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#030a04]/50 to-transparent" />

                  {/* Top badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1.5 rounded-xl bg-[#030a04]/80 backdrop-blur-xl border border-lime-500/25 text-[11px] font-mono-tech text-lime-300">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-xl bg-[#030a04]/80 backdrop-blur-xl border border-white/10 text-[11px] font-mono-tech text-slate-300">
                        {project.year}
                      </span>
                      <span className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#030a04]/80 backdrop-blur-xl border border-lime-500/30 text-[11px] font-mono-tech text-lime-300 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Eye className="w-3 h-3" />
                        Details
                      </span>
                    </div>
                  </div>

                  {/* Metrics bar */}
                  <div className="absolute bottom-0 left-0 right-0 px-5 py-3 z-10">
                    <div className="text-[11px] font-mono-tech text-lime-200/90 truncate">
                      ⚡ {project.metrics}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Title row */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="font-heading font-bold text-xl text-[#f0fdf4] hover:text-lime-300 cursor-pointer transition-colors leading-tight flex-1"
                    >
                      {project.title}
                    </h3>
                    {isFeature && (
                      <div className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-lime-500/15 border border-lime-500/30 text-lime-400 text-[10px] font-mono-tech shrink-0">
                        <Star className="w-3 h-3 fill-current" />
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="text-xs font-mono-tech text-lime-400 mb-3">{project.subtitle}</div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4 flex-1">{project.description}</p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>

                  {/* Footer actions */}
                  <div className="flex items-center justify-between gap-3 pt-4 border-t border-lime-500/[0.10]">
                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-ghost text-xs py-2 px-3.5"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                      {hasDemo && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-lime-500/10 text-lime-300 hover:bg-lime-400 hover:text-[#030a04] border border-lime-500/30 transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => onSelectProject(project)}
                      className="flex items-center gap-1 text-xs text-slate-400 hover:text-lime-300 transition-colors"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
