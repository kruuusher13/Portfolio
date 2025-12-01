import React from 'react';
import Navigation from './components/Navigation';
import Section from './components/Section';
import SkillsGraph from './components/SkillsGraph';
import { EXPERIENCE, EDUCATION, PROJECTS, PUBLICATIONS, SOCIAL_LINKS } from './constants';
import { Github, Linkedin, Mail, FileText, ExternalLink, ArrowRight } from 'lucide-react';
import ScrambleText from './components/ScrambleText';

const App: React.FC = () => {
  return (
    <div className="relative text-text-primary font-sans antialiased overflow-x-hidden selection:bg-primary/30 selection:text-white">
      {/* Optimized Background: Static color instead of large gradient */}
      <div className="fixed inset-0 bg-background -z-10"></div>
      <Navigation />

      {/* Hero Section */}
      <Section id="home" className="pt-32 md:pt-0 min-h-screen flex items-center relative overflow-hidden">
        {/* Background Glow - Simplified */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 blur-[80px] rounded-full -z-10 pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

          {/* Left Column: Intro */}
          <div className="space-y-8 z-10">
            <div className="space-y-2">
              <h2 className="text-primary font-medium tracking-wide text-sm uppercase">Data Scientist & Engineer</h2>
              <ScrambleText
                text="ROMIR MALIK"
                className="text-5xl md:text-7xl font-bold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 animate-gradient-x"
              />
            </div>

            <p className="max-w-lg text-lg text-text-secondary leading-relaxed">
              Leveraging high-dimensional data to map the unseen. Expert in problem solving, extracting insights, and predicting outcomes.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
              >
                View Work
                <ArrowRight size={18} />
              </a>
              <a
                href="/Portfolio/media/romir_cv.pdf"
                download="Romir_Malik_CV.pdf"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-3.5 rounded-full font-medium transition-all"
              >
                <FileText size={18} />
                Download CV
              </a>
            </div>

            <div className="flex gap-6 pt-8 border-t border-white/5">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-text-muted hover:text-white transition-colors">
                <Github size={22} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-text-muted hover:text-white transition-colors">
                <Linkedin size={22} />
              </a>
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-text-muted hover:text-white transition-colors">
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Right Column: The Skills Graph (Main Feature) */}
          <div className="h-[400px] md:h-[500px] w-full relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full blur-3xl -z-10"></div>
            <SkillsGraph />
          </div>

        </div>
      </Section>

      {/* Professional Experience Section */}
      <Section id="experience" title="Experience">
        <div className="space-y-12">
          {EXPERIENCE.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 md:pl-0">
              <div className="md:flex gap-8 group">
                {/* Timeline Date (Left on desktop) */}
                <div className="md:w-1/4 mb-2 md:mb-0 md:text-right relative">
                  <span className="text-sm font-medium text-text-muted group-hover:text-primary transition-colors">{exp.period}</span>
                  {/* Timeline dot */}
                  <div className="absolute right-[-37px] top-1.5 w-3 h-3 rounded-full bg-background border-2 border-text-muted group-hover:border-primary transition-colors hidden md:block z-10"></div>
                </div>

                {/* Content (Right on desktop) */}
                <div className="md:w-3/4 relative md:pl-8 md:border-l border-white/10 pb-12 last:pb-0">
                  {/* Mobile Timeline line */}
                  <div className="absolute left-[-21px] top-2 bottom-0 w-px bg-white/10 md:hidden"></div>
                  <div className="absolute left-[-25px] top-2 w-2 h-2 rounded-full bg-primary md:hidden"></div>

                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.company}
                    </h3>
                    <h4 className="text-base font-medium text-primary">{exp.role}</h4>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-text-secondary text-sm leading-relaxed flex gap-3">
                        <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-primary/50"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* View Projects Link */}
                  {exp.link && (
                    <a
                      href={exp.link}
                      className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-primary transition-colors"
                    >
                      View Related Projects
                      <ArrowRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Selected Work">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative flex flex-col bg-white/5 border border-white/5 hover:border-primary/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">

              {/* Media Section */}
              {project.media && (
                <div className="relative w-full h-48 overflow-hidden bg-background-tertiary">
                  {project.media.endsWith('.mp4') || project.media.endsWith('.webm') ? (
                    <video
                      src={project.media}
                      className="w-full h-full object-cover"
                      controls
                      loop
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <img
                      src={project.media}
                      alt={project.title}
                      className={`w-full h-full object-cover ${project.media.endsWith('.gif')
                        ? 'opacity-90 group-hover:opacity-100 transition-opacity'
                        : 'opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500'
                        }`}
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-text-muted hover:text-white transition-colors">
                      <Github size={18} />
                    </a>
                  )}
                </div>

                <p className="text-xs text-primary font-medium mb-3 uppercase tracking-wider">{project.date}</p>

                <div className="space-y-2 mb-6 text-sm text-text-secondary leading-relaxed flex-1">
                  {project.description.map((d, i) => (
                    <p key={i} className="line-clamp-3">{d}</p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-[10px] font-medium text-text-muted bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Publications Section */}
      <Section id="publications" title="Research & Publications">
        <div className="space-y-6">
          {PUBLICATIONS.map((pub) => (
            <div key={pub.id} className="border border-white/10 p-8 rounded-2xl bg-white/5 hover:bg-white/[0.07] transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <FileText size={100} className="text-white" />
              </div>

              <div className="relative z-10">
                <div className="flex flex-wrap gap-3 mb-4 text-xs font-bold uppercase tracking-wider">
                  <span className="text-primary">{pub.conference}</span>
                  <span className="text-text-muted">•</span>
                  <span className="text-text-muted">{pub.date}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                  {pub.title}
                </h3>

                <p className="text-text-secondary mb-8 max-w-3xl leading-relaxed">
                  {pub.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  {pub.paperLink && (
                    <a
                      href={pub.paperLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
                    >
                      Read Paper
                      <ExternalLink size={14} />
                    </a>
                  )}
                  {pub.blogLink && (
                    <a
                      href={pub.blogLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
                    >
                      Read Blog
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" title="Education">
        <div className="space-y-8">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="relative pl-8 border-l border-white/10">
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-background border-2 border-text-muted"></div>

              <div className="group">
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {edu.institution}
                  </h3>
                  <span className="text-sm text-text-muted">{edu.period}</span>
                </div>

                <div className="space-y-2">
                  <p className="text-base text-primary font-medium">{edu.degree}</p>
                  {edu.gpa && (
                    <p className="text-sm text-text-secondary">GPA: {edu.gpa}</p>
                  )}
                  <div className="pt-2 space-y-1">
                    {edu.details.map((detail, i) => (
                      <p key={i} className="text-sm text-text-muted italic">{detail}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get in Touch" className="pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
          <p className="text-text-secondary mb-12 text-lg">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="w-full md:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-medium transition-all"
            >
              {SOCIAL_LINKS.email}
            </a>
            <a
              href={`tel:${SOCIAL_LINKS.phone}`}
              className="w-full md:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-medium transition-all"
            >
              {SOCIAL_LINKS.phone}
            </a>
          </div>

          <div className="flex justify-center gap-8">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-text-muted hover:text-white transition-all hover:scale-110">
              <Github size={32} />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-text-muted hover:text-white transition-all hover:scale-110">
              <Linkedin size={32} />
            </a>
          </div>

          <div className="mt-24 pt-8 border-t border-white/5 flex justify-between items-center text-sm text-text-muted">
            <span>© 2025 Romir Malik</span>
            <span>Designed & Built with AI</span>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default App;