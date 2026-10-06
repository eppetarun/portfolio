import React from 'react';
import { Terminal, Cpu, Database, BookOpen, Code2, Server, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      icon: <Code2 className="w-5 h-5" />,
      color: 'text-lime-400',
      bg: 'bg-lime-500/10 border-lime-500/20',
      title: 'Data Structures & Algorithms',
      desc: 'Strong grasp of computational complexity, tree/graph traversal, dynamic programming, and memory-efficient structures in C++, Python, and Java.',
    },
    {
      icon: <Server className="w-5 h-5" />,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20',
      title: 'Distributed Microservices & REST APIs',
      desc: 'Architecting modular backend services with FastAPI, Spring Boot, and PHP 8 — clean architecture, DB indexing, and connection pooling.',
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      color: 'text-teal-400',
      bg: 'bg-teal-500/10 border-teal-500/20',
      title: 'Production AI & Vector RAG Systems',
      desc: 'Building LangChain LCEL RAG pipelines with Pinecone, Gemini 2.0 Flash integrations, and browser-side CNN computer vision models.',
    },
    {
      icon: <Database className="w-5 h-5" />,
      color: 'text-green-300',
      bg: 'bg-green-500/10 border-green-500/20',
      title: 'Relational & Real-Time Cloud Databases',
      desc: 'Designing resilient schema structures, ACID transactions, and real-time sync across MySQL, PostgreSQL, Supabase, and Firebase.',
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="section-divider mb-0" />

      {/* Subtle forest background accent */}
      <div className="absolute inset-0 bg-[#060e07]/60 pointer-events-none" />
      <div className="orb orb-forest w-[450px] h-[450px] top-1/2 -translate-y-1/2 right-[-100px] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="section-label mb-4">
            <Terminal className="w-3.5 h-3.5" />
            Engineering Profile
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tighter text-[#f0fdf4] mb-4">
            About Me &amp;{' '}
            <span className="gradient-text">Technical Focus</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            I build software with a focus on clean code, strong architectural foundations, and measurable user impact.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left: Narrative */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I'm an undergraduate in{' '}
                <strong className="text-[#f0fdf4]">Computer Science &amp; Engineering</strong> at{' '}
                <strong className="text-[#a3e635]">JNTU Hyderabad</strong> (DRK Institute, 2023–2027).
                Over three years I've engineered and open-sourced{' '}
                <strong className="text-[#a3e635]">33+ repositories</strong> on GitHub — from AI
                knowledge engines and biometric vision systems to enterprise Spring Boot microservices.
              </p>
              <p>
                My engineering philosophy revolves around solving real problems: I design complete
                software products from schema modeling and API auth to real-time state management
                and production deployment.
              </p>
              <p>
                I'm actively targeting software engineering roles at{' '}
                <strong className="text-[#f0fdf4]">Google, Amazon, Microsoft, and Meta</strong>,
                where I can apply my skills in system design, algorithmic optimization, and
                high-performance full-stack architectures.
              </p>
            </div>

            {/* Education Card */}
            <div className="glass-card rounded-2xl p-5 border border-lime-500/[0.15]">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-lime-400 font-semibold mb-3">
                <BookOpen className="w-4 h-4" />
                <span>ACADEMIC INSTITUTION</span>
              </div>
              <div className="text-[#f0fdf4] font-heading font-semibold text-base mb-1">
                B.Tech — Computer Science &amp; Engineering
              </div>
              <div className="text-xs text-slate-300 leading-relaxed">
                DRK Institute of Science and Technology ·{' '}
                Jawaharlal Nehru Technological University Hyderabad
              </div>
              <div className="flex items-center gap-2 mt-3">
                <span className="flex items-center gap-1 text-[11px] font-mono-tech text-lime-400">
                  <Sparkles className="w-3 h-3" />
                  Expected Graduation: 2027
                </span>
                <span className="text-[#4d7c55]">·</span>
                <span className="text-[11px] text-slate-400">Hyderabad, Telangana</span>
              </div>
            </div>
          </div>

          {/* Right: Technical Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 border border-lime-500/[0.10] hover:border-lime-500/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2.5 rounded-xl border ${p.bg} ${p.color} shrink-0 group-hover:scale-105 transition-transform`}>
                    {p.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-sm text-[#f0fdf4] leading-tight">{p.title}</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
      <div className="section-divider mt-24" />
    </section>
  );
}
