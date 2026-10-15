import { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const languages = [
  { code: 'en', label: 'English', flag: '🇺🇸', short: 'EN' },
  { code: 'fr', label: 'Français', flag: '🇫🇷', short: 'FR' },
  { code: 'ar', label: 'العربية', flag: '🇲🇦', short: 'العربية' },
];

export default function LanguageSelector({ isMobile = false }) {
  const { language, setLanguage, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (isMobile) {
    return (
      <div className="flex items-center justify-between p-2 rounded-xl bg-dark-900 border border-white/10">
        <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-accent-cyan" />
          <span>Language / Langue / اللغة</span>
        </span>
        <div className="flex items-center gap-1">
          {languages.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => setLanguage(l.code)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 ${
                language === l.code
                  ? 'bg-accent-cyan text-dark-950 shadow-glow-cyan'
                  : 'text-slate-300 hover:bg-white/5'
              }`}
            >
              <span>{l.flag}</span>
              <span>{l.short}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-dark-900/80 hover:bg-dark-850 text-slate-200 border border-white/10 hover:border-white/20 transition-all text-xs font-medium backdrop-blur-md"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span className="text-sm">{currentLang.flag}</span>
        <span className="font-semibold text-white">{currentLang.short}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className={`absolute top-full mt-2 w-36 glass-nav rounded-2xl border border-white/10 shadow-2xl p-1.5 z-50 animate-fadeIn ${
            isRTL ? 'left-0' : 'right-0'
          }`}
        >
          {languages.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => {
                setLanguage(l.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                language === l.code
                  ? 'bg-accent-cyan/15 text-accent-cyan font-bold border border-accent-cyan/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-2">
                <span>{l.flag}</span>
                <span>{l.label}</span>
              </div>
              {language === l.code && <Check className="w-3.5 h-3.5 text-accent-cyan" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
