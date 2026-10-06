import React, { useState } from 'react';
import Navbar from './components/ui/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import FeaturedProjects from './components/sections/FeaturedProjects';
import SkillsSection from './components/sections/SkillsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import GithubStatsSection from './components/sections/GithubStatsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';
import ProjectModal from './components/ui/ProjectModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{
        backgroundColor: 'var(--bg-base)',
        color: 'var(--text-primary)',
        '--tw-selection-bg': 'rgba(99,102,241,0.25)',
      }}
    >
      {/* Global selection style via CSS var trick */}
      <style>{`
        ::selection { background: rgba(99,102,241,0.25); color: #e0e7ff; }
      `}</style>

      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <FeaturedProjects onSelectProject={(p) => setSelectedProject(p)} />
        <SkillsSection />
        <ExperienceSection />
        <GithubStatsSection />
        <ContactSection />
      </main>

      <Footer />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
