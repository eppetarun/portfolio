import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Layers, Calendar, Tag } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  const hasDemo = project.liveUrl && !project.liveUrl.includes('github.com');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
      style={{ background: 'rgba(3,5,8,0.88)' }}
      onClick={onClose}
    >
      {/* Backdrop blur */}
      <div className="absolute inset-0 backdrop-blur-xl" />

      {/* Modal card */}
      <div
        className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl glass-card border border-white/[0.10] shadow-[0_40px_80px_rgba(0,0,0,0.7),0_0_60px_rgba(99,102,241,0.08)] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gradient header bar */}
        <div className="h-1 w-full rounded-t-3xl"
          style={{ background: 'linear-gradient(90deg, #4f46e5, #8b5cf6, #22d3ee)' }} />

        <div className="p-6 sm:p-8">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-10 p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.08] text-slate-400 hover:text-white transition-all"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-lg text-xs font-mono-tech text-indigo-300 bg-indigo-500/10 border border-indigo-500/20">
              {project.category}
            </span>
            <span className="flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-mono-tech text-slate-400 bg-white/[0.04] border border-white/[0.08]">
              <Calendar className="w-3 h-3" />
              {project.year}
            </span>
          </div>

          {/* Title */}
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1">
            {project.title}
          </h2>
          <p className="text-sm font-mono-tech text-indigo-400 mb-6">{project.subtitle}</p>

          {/* Thumbnail */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 border border-white/[0.06] bg-[#0a0e1a]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05080f]/60 to-transparent" />
          </div>

          {/* Content sections */}
          <div className="space-y-7">

            {/* Overview */}
            <div>
              <h3 className="flex items-center gap-2 text-xs font-mono-tech text-slate-500 uppercase tracking-widest mb-3">
                <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                System &amp; Architectural Overview
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>
            </div>

            {/* Metrics */}
            <div className="px-4 py-3 rounded-xl bg-indigo-500/[0.06] border border-indigo-500/15">
              <div className="text-[10px] font-mono-tech text-indigo-500 uppercase tracking-widest mb-1">Performance Metrics</div>
              <div className="text-sm font-mono-tech text-indigo-300">⚡ {project.metrics}</div>
            </div>

            {/* Features */}
            <div>
              <h3 className="flex items-center gap-2 text-xs font-mono-tech text-slate-500 uppercase tracking-widest mb-4">
                <Layers className="w-3.5 h-3.5 text-violet-400" />
                Key Capabilities &amp; Implementations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-xl glass-card border border-white/[0.06]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="text-xs text-slate-300 leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="flex items-center gap-2 text-xs font-mono-tech text-slate-500 uppercase tracking-widest mb-3">
                <Tag className="w-3.5 h-3.5 text-cyan-400" />
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.05]">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-sm"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>
              {hasDemo && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Live Demo</span>
                </a>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
