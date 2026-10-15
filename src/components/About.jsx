import { Zap, Layers, ShieldCheck, MapPin, GraduationCap, Briefcase, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono mb-3">
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.about.titlePrefix} <span className="text-gradient-accent">{t.about.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-base text-slate-400 max-w-2xl">
            {t.about.subtitle}
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          {/* Left: Biography Narrative */}
          <div className="lg:col-span-7 glass-card p-8 rounded-3xl flex flex-col justify-between">
            <div className="space-y-4 text-slate-300 leading-relaxed text-base">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            {/* Quick Facts Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-white/5">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-accent-cyan shrink-0" />
                <span>{t.about.facts.location}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <GraduationCap className="w-4 h-4 text-accent-indigo shrink-0" />
                <span>{t.about.facts.education}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Briefcase className="w-4 h-4 text-accent-emerald shrink-0" />
                <span>{t.about.facts.experience}</span>
              </div>
            </div>
          </div>

          {/* Right: Core Engineering Highlights */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className={`glass-card p-6 rounded-2xl ${isRTL ? 'border-r-4 border-r-accent-cyan' : 'border-l-4 border-l-accent-cyan'}`}>
              <h3 className="text-lg font-bold text-white mb-2">{t.about.highlights.h1Title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.about.highlights.h1Desc}
              </p>
            </div>

            <div className={`glass-card p-6 rounded-2xl ${isRTL ? 'border-r-4 border-r-accent-indigo' : 'border-l-4 border-l-accent-indigo'}`}>
              <h3 className="text-lg font-bold text-white mb-2">{t.about.highlights.h2Title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.about.highlights.h2Desc}
              </p>
            </div>

            <div className={`glass-card p-6 rounded-2xl ${isRTL ? 'border-r-4 border-r-accent-emerald' : 'border-l-4 border-l-accent-emerald'}`}>
              <h3 className="text-lg font-bold text-white mb-2">{t.about.highlights.h3Title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.about.highlights.h3Desc}
              </p>
            </div>
          </div>
        </div>

        {/* 3 Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl glass-card-hover flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-accent-cyan" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t.about.principles.p1Title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {t.about.principles.p1Desc}
              </p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl glass-card-hover flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5 text-accent-indigo" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t.about.principles.p2Title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {t.about.principles.p2Desc}
              </p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl glass-card-hover flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-accent-emerald" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{t.about.principles.p3Title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {t.about.principles.p3Desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
