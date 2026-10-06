import React from 'react';
import { Briefcase, Calendar, GraduationCap, Building2 } from 'lucide-react';
import { TIMELINE } from '../../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden bg-dots">
      <div className="orb orb-forest w-[400px] h-[400px] top-1/4 right-[-80px] opacity-25 pointer-events-none" />
      <div className="orb orb-lime   w-[300px] h-[300px] bottom-10 left-[-60px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="section-label mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            Career &amp; Academic Path
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tighter text-[#f0fdf4] mb-3">
            Experience &amp;{' '}
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Academic milestones, technical specialization, and open-source engineering history.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">

          {/* Vertical gradient line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px timeline-line" />

          <div className="space-y-8">
            {TIMELINE.map((item, idx) => {
              const isEducation = item.role.includes('B.Tech') || item.role.includes('Secondary');
              const isLatest = idx === 0;

              return (
                <div key={idx} className="relative flex gap-6 sm:gap-10">

                  {/* Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-lg border transition-all ${
                      isLatest
                        ? 'border-lime-400 glow-lime'
                        : 'glass-card border-lime-500/[0.15]'
                    }`}
                    style={isLatest ? { background: 'linear-gradient(135deg, #166534 0%, #65a30d 50%, #a3e635 100%)' } : {}}>
                      {isEducation
                        ? <GraduationCap className={`w-5 h-5 ${isLatest ? 'text-[#030a04]' : 'text-lime-400'}`} />
                        : <Building2    className={`w-5 h-5 ${isLatest ? 'text-[#030a04]' : 'text-emerald-400'}`} />
                      }
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`flex-1 glass-card rounded-2xl p-6 border transition-all hover:border-lime-500/35 ${
                    isLatest ? 'border-lime-500/30' : 'border-lime-500/[0.10]'
                  }`}>

                    {/* Top row */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <div className="flex items-center gap-1.5 text-xs font-mono-tech text-lime-400 font-semibold">
                        <Calendar className="w-3 h-3" />
                        {item.year}
                      </div>
                      <span className="text-[11px] font-medium text-[#86efac] bg-lime-950/30 border border-lime-500/20 px-2.5 py-0.5 rounded-lg">
                        {item.company}
                      </span>
                      {isLatest && (
                        <span className="flex items-center gap-1 text-[10px] font-mono-tech text-lime-400 bg-lime-500/10 border border-lime-500/25 px-2 py-0.5 rounded-lg">
                          <span className="pulse-dot scale-75" />
                          Current
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading font-bold text-base sm:text-lg text-[#f0fdf4] mb-2">
                      {item.role}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
