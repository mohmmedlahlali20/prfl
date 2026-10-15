import { ArrowUp, Mail, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 bg-dark-950/80 backdrop-blur-md relative py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-dark-850 border border-white/10 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-accent-cyan" />
            </div>
            <div>
              <span className="font-bold text-sm tracking-tight text-white">
                {personalInfo.name}
              </span>
              <span className="text-xs text-slate-400 block -mt-0.5 font-mono">
                {t.footer.subtitle}
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <a href="#about" className="hover:text-accent-cyan transition-colors">
              {t.nav.about}
            </a>
            <a href="#skills" className="hover:text-accent-cyan transition-colors">
              {t.nav.skills}
            </a>
            <a href="#projects" className="hover:text-accent-cyan transition-colors">
              {t.nav.projects}
            </a>
            <a href="#experience" className="hover:text-accent-cyan transition-colors">
              {t.nav.experience}
            </a>
            <a href="#contact" className="hover:text-accent-cyan transition-colors">
              {t.nav.contact}
            </a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 border border-white/5 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 border border-white/5 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 border border-white/5 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-dark-850 hover:bg-dark-800 text-slate-300 border border-white/10 hover:border-white/20 active:scale-95 transition-all"
              aria-label="Scroll to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4 text-accent-cyan" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. {t.footer.rights}
          </p>
          <p className="flex items-center gap-1.5 font-mono">
            <span>{t.footer.builtWith}</span>
            <span>•</span>
            <span className="text-accent-emerald">{t.footer.vercelReady}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
