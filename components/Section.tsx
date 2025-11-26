import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`min-h-screen py-20 px-6 md:px-16 flex flex-col justify-center ${className}`}>
      <div className="max-w-7xl mx-auto w-full">
        {(title || subtitle) && (
          <div className="mb-12 animate-fade-in-up">
            {title && (
              <h2 className="text-2xl md:text-3xl font-bold text-slate-200 mb-2 font-mono flex items-center gap-3">
                <span className="text-terminal">$</span>
                {title}
                <span className="animate-pulse w-3 h-6 bg-terminal inline-block ml-2"></span>
              </h2>
            )}
            {subtitle && (
              <p className="text-terminal-dim font-mono text-sm mt-2">{subtitle}</p>
            )}
          </div>
        )}
        <div className="w-full">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;