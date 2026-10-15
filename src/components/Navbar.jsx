import { useState, useEffect } from 'react';
import { Menu, X, FileDown, Terminal } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { t, isRTL } = useLanguage();

  const navLinks = [
    { name: t.nav.about, href: '#about', id: 'about' },
    { name: t.nav.skills, href: '#skills', id: 'skills' },
    { name: t.nav.projects, href: '#projects', id: 'projects' },
    { name: t.nav.experience, href: '#experience', id: 'experience' },
    { name: t.nav.contact, href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scrollspy detection
      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3.5 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Mohammed Lahlali - Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-cyan via-teal-500 to-accent-indigo p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-glow-cyan">
              <div className="w-full h-full bg-dark-900 rounded-[10px] flex items-center justify-center">
                <Terminal className="w-5 h-5 text-accent-cyan transition-transform duration-300 group-hover:rotate-6" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-white group-hover:text-accent-cyan transition-colors">
                Mohammed<span className="text-accent-cyan">.dev</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 -mt-1 tracking-wider uppercase">
                {t.nav.brandSubtitle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-dark-900/60 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <LanguageSelector />

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 border border-white/5 transition-all hover:border-white/10"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href={personalInfo.resumeUrl}
              download={personalInfo.resumeFileName || "CV_Mohammed_LAHLALI_FR.pdf"}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-accent-cyan to-teal-400 text-dark-950 hover:brightness-110 active:scale-95 transition-all shadow-glow-cyan"
            >
              <FileDown className="w-4 h-4 stroke-[2.5]" />
              <span>{t.nav.resume}</span>
            </a>
          </div>

          {/* Mobile Menu Button & Mobile Lang Selector */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSelector />

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 border border-white/10 focus:outline-none"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden glass-nav border-b border-white/10 px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-accent-cyan transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeFileName || "CV_Mohammed_LAHLALI_FR.pdf"}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-accent-cyan text-dark-950 hover:brightness-110 transition-all shadow-glow-cyan"
              >
                <FileDown className="w-4 h-4" />
                <span>{t.nav.downloadResume}</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/5 border border-white/10"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
