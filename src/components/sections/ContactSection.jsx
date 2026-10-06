import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MapPin, Phone, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { PERSONAL_INFO } from '../../data/portfolioData';

const inputClass = 'w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.05] transition-all';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', subject: 'Software Engineering Opportunity', message: '',
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', email: '', subject: 'Software Engineering Opportunity', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-grid">
      <div className="orb orb-blue   w-[500px] h-[500px] top-[-50px]  right-[-100px] opacity-20 pointer-events-none" />
      <div className="orb orb-violet w-[400px] h-[400px] bottom-[-50px] left-[-80px]  opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="section-label mb-4">
            <Mail className="w-3.5 h-3.5" />
            Communication Channels
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold tracking-tighter text-white mb-3">
            Get In{' '}
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Interested in discussing full-time SWE roles, internships, or collaborative AI projects?
            Reach out directly — I respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ── Left: Contact Info ─────────────────────── */}
          <div className="lg:col-span-5 space-y-4">

            {/* Email card */}
            <div className="glass-card rounded-2xl p-5 border border-white/[0.07] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate min-w-0">
                  <div className="text-[10px] font-mono-tech text-slate-500 uppercase tracking-widest mb-0.5">Primary Email</div>
                  <a href={PERSONAL_INFO.socials.email} className="text-sm font-mono-tech text-white hover:text-indigo-400 transition-colors truncate block">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopy}
                className="px-3 py-2 rounded-xl text-xs font-medium bg-white/[0.05] hover:bg-indigo-500/20 border border-white/[0.08] hover:border-indigo-500/30 text-slate-300 hover:text-indigo-300 transition-all shrink-0 flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Phone / WhatsApp card */}
            <div className="glass-card rounded-2xl p-5 border border-white/[0.07] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="truncate min-w-0">
                  <div className="text-[10px] font-mono-tech text-slate-500 uppercase tracking-widest mb-0.5">Phone &amp; WhatsApp</div>
                  <div className="text-sm font-mono-tech text-white">{PERSONAL_INFO.phone}</div>
                </div>
              </div>
              <a
                href={PERSONAL_INFO.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-2 rounded-xl text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all shrink-0 flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat</span>
              </a>
            </div>

            {/* Location card */}
            <div className="glass-card rounded-2xl p-5 border border-white/[0.07] space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Undergraduate in CSE at DRK Institute / JNTUH.
                Available for on-site or remote engineering roles globally.
              </p>
            </div>

            {/* Social links */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { href: PERSONAL_INFO.socials.github,   icon: <GithubIcon className="w-4 h-4" />,   label: 'GitHub'   },
                { href: PERSONAL_INFO.socials.linkedin,  icon: <LinkedinIcon className="w-4 h-4" />,  label: 'LinkedIn' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card rounded-xl p-3.5 border border-white/[0.07] hover:border-indigo-500/30 text-slate-400 hover:text-white flex items-center justify-between text-xs font-medium transition-all group"
                >
                  <div className="flex items-center gap-2">
                    {icon}
                    <span>{label}</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-indigo-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: Contact Form ───────────────────── */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-7 sm:p-9 border border-white/[0.07]">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">Send a Direct Message</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Reaches my inbox at <span className="text-slate-300">{PERSONAL_INFO.email}</span>
                  </p>
                </div>
                <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              {sent ? (
                <div className="py-14 flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center glow-emerald"
                    style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(5,150,105,0.1))' }}>
                    <Check className="w-7 h-7 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-bold text-white mb-1">Message Sent!</h4>
                    <p className="text-xs text-slate-400">Thank you for reaching out. I'll get back to you shortly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono-tech text-slate-500 uppercase tracking-widest mb-1.5">Your Name</label>
                      <input type="text" required value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sundar Pichai" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono-tech text-slate-500 uppercase tracking-widest mb-1.5">Email Address</label>
                      <input type="email" required value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sundar@google.com" className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono-tech text-slate-500 uppercase tracking-widest mb-1.5">Subject</label>
                    <input type="text" required value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Software Engineer Role / Internship" className={inputClass} />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono-tech text-slate-500 uppercase tracking-widest mb-1.5">Message</label>
                    <textarea required rows={5} value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Tarun, we reviewed your GitHub repositories (MyPic & AgriPath/Orliv) and would like to discuss an opportunity..."
                      className={`${inputClass} resize-none`} />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center py-3.5 text-sm">
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
