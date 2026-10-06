import React, { useState } from 'react';
import { Cpu, CheckCircle2, ChevronRight } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

const levelMeta = {
  Expert:     { color: 'text-indigo-400',  border: 'border-indigo-500/30',  fill: 100 },
  Advanced:   { color: 'text-violet-400',  border: 'border-violet-500/30',  fill: 82  },
  Proficient: { color: 'text-cyan-400',    border: 'border-cyan-500/30',    fill: 65  },
  Learning:   { color: 'text-emerald-400', border: 'border-emerald-500/30', fill: 40  },
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(SKILL_CATEGORIES[0].id);

  const current = SKILL_CATEGORIES.find((c) => c.id === activeTab) || SKILL_CATEGORIES[0];

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="section-divider mb-0" />
      <div className="absolute inset-0 bg-[#07091260] pointer-events-none" />
      <div className="orb orb-cyan w-[400px] h-[400px] bottom-0 right-0 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="section-label mb-4">
            <Cpu className="w-3.5 h-3.5" />
            Technical Proficiencies
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tighter text-white mb-3">
            Skills &amp;{' '}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Categorized across programming languages, full-stack frameworks, production AI/RAG architectures,
            cloud systems, and core CS fundamentals.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-10">
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-medium transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/25'
                  : 'glass-card border border-white/[0.06] text-slate-400 hover:text-white hover:border-indigo-500/25'
              }`}
            >
              {activeTab === cat.id && <ChevronRight className="w-3 h-3" />}
              {cat.title}
            </button>
          ))}
        </div>

        {/* Category label */}
        <div className="mb-8 text-left">
          <h3 className="font-heading font-semibold text-xl text-white">{current.title}</h3>
          <p className="text-sm text-slate-400 mt-1">{current.description}</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {current.skills.map((skill, idx) => {
            const meta = levelMeta[skill.level] || levelMeta.Proficient;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 border border-white/[0.06] hover:border-indigo-500/25 flex flex-col gap-4 group transition-all"
              >
                {/* Skill name + level badge */}
                <div className="flex items-center justify-between">
                  <h4 className="font-heading font-semibold text-sm text-white group-hover:text-indigo-300 transition-colors">
                    {skill.name}
                  </h4>
                  <span className={`px-2.5 py-0.5 rounded-lg text-[10px] font-mono-tech font-medium border bg-transparent ${meta.color} ${meta.border}`}>
                    {skill.level}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="skill-bar">
                  <div
                    className="skill-bar-fill transition-all duration-700 ease-out"
                    style={{ width: `${meta.fill}%` }}
                  />
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed">{skill.desc}</p>

                {/* Verified footer */}
                <div className="pt-2 border-t border-white/[0.04] flex items-center gap-1.5 text-[10px] font-mono-tech text-emerald-400">
                  <CheckCircle2 className="w-3 h-3 shrink-0" />
                  <span>Production &amp; GitHub Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
      <div className="section-divider mt-24" />
    </section>
  );
}
