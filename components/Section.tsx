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
    <section id={id} className={`min-h-screen py-24 px-6 md:px-12 flex flex-col justify-center ${className}`}>
      <div className="max-w-7xl mx-auto w-full">
        {(title || subtitle) && (
          <div className="mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                {title}
                <span className="text-primary">.</span>
              </h2>
            )}
            {subtitle && (
              <p className="text-text-secondary text-lg max-w-2xl">{subtitle}</p>
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