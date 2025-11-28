import React from 'react';

const navItems = [
  { id: 'home', label: '~/home' },
  { id: 'experience', label: '~/experience' },
  { id: 'projects', label: '~/projects' },
  { id: 'publications', label: '~/research' },
  { id: 'education', label: '~/education' },
  { id: 'contact', label: '~/contact' },
];

const Navigation: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[98%] max-w-4xl">
      <div className="bg-space-900 border border-space-700 shadow-[0_0_20px_rgba(0,0,0,0.8)] px-3 py-2 flex flex-wrap justify-center items-center gap-2 md:gap-6">
        <span className="hidden lg:block text-terminal-dark font-mono text-xs select-none">
          [MENU]
        </span>

        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="group px-2 md:px-3 py-1.5 font-mono text-[10px] md:text-xs lg:text-sm text-slate-500 hover:text-terminal transition-all relative whitespace-nowrap"
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-0 text-terminal">&gt;</span>
            <span className="group-hover:translate-x-2 transition-transform inline-block">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navigation;