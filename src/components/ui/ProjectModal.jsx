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
      style={{ background: 'rgba(2,6,3,0.92)' }}
      onClick={onClose}
    >
      {/* Backdrop blur */}
      <div className="absolute inset-0 backdrop-blur-xl" />

      {/* Modal card */}
      <div
        className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl glass-card border border-lime-500/[0.20] shadow-[0_40px_80px_rgba(0,0,0,0.8),0_0_60px_rgba(132,204,22,0.12)] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gradient header bar */}
        <div className="h-1.5 w-full rounded-t-3xl"
          style={{ background: 'linear-gradient(90deg, #166534, #84cc16, #a3e635, #14b8a6)' }} />

        <div className="p-6 sm:p-8">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-10 p-2 rounded-xl bg-lime-950/40 hover:bg-lime-900/60 border border-lime-500/20 hover:border-lime-400 text-slate-300 hover:text-lime-300 transition-all"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-lg text-xs font-mono-tech text-lime-300 bg-lime-500/10 border border-lime-500/25">
              {project.category}
            </span>
            <span className="flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-mono-tech text-slate-300 bg-white/[0.04] border border-lime-500/[0.12]">
              <Calendar className="w-3 h-3 text-lime-400" />
              {project.year}
            </span>
          </div>

          {/* Title */}
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#f0fdf4] tracking-tight mb-1">
            {project.title}
          </h2>
          <p className="text-sm font-mono-tech text-lime-400 mb-6">{project.subtitle}</p>

          {/* Thumbnail */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 border border-lime-500/[0.15] bg-[#060e07]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030a04]/80 to-transparent" />
          </div>

          {/* Content sections */}
          <div className="space-y-7">

            {/* Overview */}
            <div>
              <h3 className="flex items-center gap-2 text-xs font-mono-tech text-lime-400 uppercase tracking-widest mb-3">
                <Cpu className="w-3.5 h-3.5 text-lime-400" />
                System &amp; Architectural Overview
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>
            </div>

            {/* Metrics */}
            <div className="px-4 py-3 rounded-xl bg-lime-950/30 border border-lime-500/25">
              <div className="text-[10px] font-mono-tech text-lime-400 uppercase tracking-widest mb-1">Performance Metrics</div>
              <div className="text-sm font-mono-tech text-lime-200">⚡ {project.metrics}</div>
            </div>

            {/* Features */}
            <div>
              <h3 className="flex items-center gap-2 text-xs font-mono-tech text-lime-400 uppercase tracking-widest mb-4">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                Key Capabilities &amp; Implementations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-xl glass-card border border-lime-500/[0.12]">
                    <CheckCircle2 className="w-4 h-4 text-lime-400 mt-0.5 shrink-0" />
                    <span className="text-xs text-slate-300 leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="flex items-center gap-2 text-xs font-mono-tech text-lime-400 uppercase tracking-widest mb-3">
                <Tag className="w-3.5 h-3.5 text-teal-400" />
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-lime-500/[0.12]">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-sm"
              >
                <GithubIcon className="w-4 h-4 text-[#030a04]" />
                <span>View GitHub Repository</span>
              </a>
              {hasDemo && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost text-sm"
                >
                  <ExternalLink className="w-4 h-4 text-lime-400" />
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
