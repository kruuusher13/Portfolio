import React from 'react';
import UniverseBackground from './components/UniverseBackground';
import Navigation from './components/Navigation';
import Section from './components/Section';
import SkillsGraph from './components/SkillsGraph';
import { EXPERIENCE, EDUCATION, PROJECTS, PUBLICATIONS, SOCIAL_LINKS } from './constants';
import { Github, Linkedin, Mail, FileText, ExternalLink } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="relative text-slate-300 font-mono antialiased overflow-x-hidden selection:bg-terminal/20 selection:text-terminal-light">
      <UniverseBackground />
      <Navigation />

      {/* Hero Section */}
      <Section id="home" className="pt-20 md:pt-0 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Column: Terminal Intro */}
          <div className="space-y-6 z-10">
            <div className="text-xs md:text-sm text-slate-500 mb-2">
              <span className="text-terminal">root@romir-malik</span>:<span className="text-blue-400">~/portfolio</span>$ ./init_profile.sh
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 tracking-tighter">
              ROMIR MALIK
            </h1>
            <h2 className="text-xl md:text-2xl text-terminal-dim">
              &lt;DataScientist /&gt;
            </h2>
            
            <p className="max-w-md text-sm md:text-base leading-relaxed text-slate-400 border-l border-terminal/30 pl-4 py-1">
              Extracting actionable intelligence from high-dimensional datasets through <span className="text-terminal">Computer Vision</span>, <span className="text-terminal">Probabilistic Modeling</span>, and <span className="text-terminal">Spatial Analytics</span>.
            </p>

            <div className="flex gap-6 pt-4">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-terminal transition-all hover:-translate-y-1">
                <Github size={20} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-terminal transition-all hover:-translate-y-1">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-slate-500 hover:text-terminal transition-all hover:-translate-y-1">
                <Mail size={20} />
              </a>
            </div>

            {/* Quick Status Log */}
            <div className="pt-8 text-[10px] text-slate-600 space-y-1 font-mono">
               <p>[SYS] Loading modules...</p>
               <p>[SYS] Visualizing Neural/Skill Network...</p>
               <p className="text-terminal">[OK] Interactive Graph Ready.</p>
            </div>
          </div>

          {/* Right Column: The Skills Graph (Main Feature) */}
          <div className="h-[400px] md:h-[500px] w-full relative border-t border-b border-terminal/20 bg-space-900/30 backdrop-blur-sm lg:border-none lg:bg-transparent">
             <div className="absolute top-2 right-2 text-[10px] text-terminal/50 z-20">
               Fig 1.0: Knowledge_Graph
             </div>
             <SkillsGraph />
          </div>

        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="tree ./career_history">
        <div className="space-y-16">
          
          <div className="space-y-4">
             <div className="text-sm text-slate-500 border-b border-space-700 pb-2 mb-6">
                <span className="text-terminal">.</span>
                <br />
                <span className="text-terminal">└──</span> professional_experience/
             </div>
             
             <div className="ml-2 md:ml-6 border-l border-space-700 space-y-12">
               {EXPERIENCE.map((exp, index) => (
                <div key={exp.id} className="relative pl-8">
                  {/* Branch Connector */}
                  <div className="absolute left-0 top-3 w-6 h-px bg-space-700"></div>
                  
                  <div className="group">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
                       <h3 className="text-lg font-bold text-terminal group-hover:text-terminal-light transition-colors">
                          {exp.company}
                       </h3>
                       <span className="text-xs text-slate-600">[{exp.period}]</span>
                    </div>
                    
                    <div className="ml-4 border-l border-space-700 pl-6 py-1 space-y-3">
                       <div className="relative">
                          <div className="absolute -left-6 top-3 w-4 h-px bg-space-700"></div>
                          <h4 className="text-sm font-bold text-slate-300">role: "{exp.role}"</h4>
                       </div>
                       
                       <div className="relative">
                          <div className="absolute -left-6 top-3 w-4 h-px bg-space-700"></div>
                          <div className="text-xs text-slate-500 mb-1">log_entries:</div>
                          <ul className="space-y-1">
                            {exp.description.map((item, i) => (
                              <li key={i} className="text-xs md:text-sm text-slate-400 leading-relaxed pl-2 border-l-2 border-transparent hover:border-terminal/50 transition-colors">
                                <span className="text-terminal-dim mr-2">></span> {item}
                              </li>
                            ))}
                          </ul>
                       </div>
                    </div>
                  </div>
                </div>
              ))}
             </div>
          </div>

          <div className="space-y-4">
            <div className="text-sm text-slate-500 border-b border-space-700 pb-2 mb-6">
                <span className="text-terminal">└──</span> academic_background/
            </div>

            <div className="ml-2 md:ml-6 border-l border-space-700 space-y-12">
              {EDUCATION.map((edu) => (
                 <div key={edu.id} className="relative pl-8">
                   <div className="absolute left-0 top-3 w-6 h-px bg-space-700"></div>
                   
                   <div className="group">
                     <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
                         <h3 className="text-lg font-bold text-terminal group-hover:text-terminal-light transition-colors">
                            {edu.institution}
                         </h3>
                         <span className="text-xs text-slate-600">[{edu.period}]</span>
                     </div>

                     <div className="ml-4 border-l border-space-700 pl-6 py-1 space-y-3">
                        <div className="relative">
                           <div className="absolute -left-6 top-3 w-4 h-px bg-space-700"></div>
                           <p className="text-sm text-slate-300">degree: "{edu.degree}"</p>
                        </div>
                        {edu.gpa && (
                           <div className="relative">
                              <div className="absolute -left-6 top-3 w-4 h-px bg-space-700"></div>
                              <p className="text-xs text-terminal/80">stat_gpa: {edu.gpa}</p>
                           </div>
                        )}
                        <div className="relative">
                            <div className="absolute -left-6 top-3 w-4 h-px bg-space-700"></div>
                            <div className="space-y-1 mt-1">
                              {edu.details.map((detail, i) => (
                                <p key={i} className="text-xs text-slate-500 italic"># {detail}</p>
                              ))}
                            </div>
                        </div>
                     </div>
                   </div>
                 </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="ls -la ./projects/">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative flex flex-col bg-space-900 border border-space-700 hover:border-terminal transition-all duration-300">
              <div className="px-4 py-3 border-b border-space-700 bg-space-800/50 flex justify-between items-center">
                <span className="text-xs text-terminal truncate max-w-[70%]">./{project.id}</span>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-terminal">
                    <Github size={14} />
                  </a>
                )}
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-base font-bold text-slate-200 mb-1 group-hover:text-terminal transition-colors">{project.title}</h3>
                <p className="text-[10px] text-slate-600 mb-3">{project.date}</p>
                
                <div className="space-y-2 mb-4 text-xs text-slate-400 leading-relaxed flex-1">
                  {project.description.map((d, i) => (
                    <p key={i} className="line-clamp-3">> {d}</p>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-space-700/30">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-[10px] text-terminal-dim border border-space-700 px-1.5 py-0.5">
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
      <Section id="publications" title="cat ./research/publications.md">
        <div className="space-y-8">
            <div className="text-xs text-slate-500 font-mono mb-4">
                <p># Research Papers and Articles</p>
                <p># Click to access external resources</p>
            </div>
            
            {PUBLICATIONS.map((pub) => (
                <div key={pub.id} className="border border-space-700 p-6 md:p-8 hover:border-terminal/50 transition-colors bg-space-900/30 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-50">
                        <FileText size={48} className="text-space-700 group-hover:text-terminal/10 transition-colors" />
                    </div>
                    
                    <div className="relative z-10">
                        <div className="flex flex-wrap gap-3 mb-4 text-xs font-bold font-mono">
                            <span className="bg-terminal/10 text-terminal px-2 py-1 border border-terminal/20">CONF: {pub.conference}</span>
                            <span className="bg-space-800 text-slate-400 px-2 py-1 border border-space-700">DATE: {pub.date}</span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-4 leading-tight group-hover:text-terminal-light transition-colors">
                            {pub.title}
                        </h3>

                        <p className="text-sm text-slate-400 mb-8 max-w-3xl leading-relaxed border-l-2 border-space-700 pl-4">
                            {pub.description}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {pub.paperLink && (
                                <a 
                                    href={pub.paperLink} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-xs font-bold bg-terminal text-space-900 px-4 py-2 hover:bg-terminal-light transition-colors"
                                >
                                    <ExternalLink size={14} />
                                    READ PAPER
                                </a>
                            )}
                            {pub.blogLink && (
                                <a 
                                    href={pub.blogLink} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-xs font-bold border border-terminal text-terminal px-4 py-2 hover:bg-terminal/10 transition-colors"
                                >
                                    <FileText size={14} />
                                    READ BLOG
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="sudo ./contact_me" className="pb-24">
        <div className="max-w-3xl mx-auto border border-terminal/30 bg-space-900/80 p-8 md:p-12 text-center relative">
          {/* Decorative Corner Borders */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-terminal"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-terminal"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-terminal"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-terminal"></div>

          <h3 className="text-xl md:text-2xl font-bold text-slate-200 mb-2">ESTABLISH CONNECTION</h3>
          <p className="text-xs text-terminal-dim mb-8">Ready for data stream initialization.</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
             <a 
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="w-full md:w-auto border border-slate-700 hover:border-terminal hover:bg-terminal/5 text-slate-300 px-6 py-3 text-sm transition-all"
              >
                EMAIL: {SOCIAL_LINKS.email}
              </a>
              <a 
                href={`tel:${SOCIAL_LINKS.phone}`}
                className="w-full md:w-auto border border-slate-700 hover:border-terminal hover:bg-terminal/5 text-slate-300 px-6 py-3 text-sm transition-all"
              >
                PHONE: {SOCIAL_LINKS.phone}
              </a>
          </div>

          <div className="flex justify-center gap-8">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="opacity-60 hover:opacity-100 hover:text-terminal transition-all">
              <Github size={24} />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="opacity-60 hover:opacity-100 hover:text-terminal transition-all">
              <Linkedin size={24} />
            </a>
          </div>
          
          <div className="mt-12 pt-6 border-t border-space-700 flex justify-between items-center text-[10px] text-slate-600">
            <span>© 2025 ROMIR MALIK</span>
            <span className="animate-pulse text-terminal">● SYSTEM ONLINE</span>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default App;