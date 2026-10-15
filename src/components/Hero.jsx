import { ArrowDownRight, ArrowDownLeft, Mail, FileDown, Sparkles, Terminal, CheckCircle2, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { useState } from 'react';
import { personalInfo, stats } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const { t, isRTL } = useLanguage();

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const statLabels = [
    t.hero.stats.years,
    t.hero.stats.repos,
    t.hero.stats.projects,
    t.hero.stats.satisfaction,
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradient glow & grid pattern */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Pitch */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t.hero.availability}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              {t.hero.greeting} <span className="text-gradient-accent">{personalInfo.name}</span>
              <br />
              <span className="text-slate-300 font-bold text-3xl sm:text-4xl lg:text-5xl">
                {t.hero.role}
              </span>
            </h1>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              {t.hero.pitch}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-accent-cyan via-teal-400 to-accent-emerald text-dark-950 shadow-glow-cyan hover:brightness-110 active:scale-95 transition-all w-full sm:w-auto"
              >
                <span>{t.hero.viewProjects}</span>
                {isRTL ? <ArrowDownLeft className="w-4 h-4 stroke-[2.5]" /> : <ArrowDownRight className="w-4 h-4 stroke-[2.5]" />}
              </a>

              <a
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeFileName || "CV_Mohammed_LAHLALI_FR.pdf"}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm bg-dark-850 hover:bg-dark-800 text-slate-200 border border-white/10 hover:border-white/20 active:scale-95 transition-all w-full sm:w-auto group"
              >
                <FileDown className="w-4 h-4 text-accent-cyan group-hover:translate-y-0.5 transition-transform" />
                <span>{t.hero.downloadCV}</span>
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm bg-dark-900 hover:bg-dark-850 text-slate-300 border border-white/5 hover:border-white/15 active:scale-95 transition-all w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>{t.hero.contact}</span>
              </a>
            </div>

            {/* Quick Contact & Socials Bar */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 pt-6 border-t border-white/5 w-full">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-500">{t.hero.connect}:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <span className="text-slate-700">•</span>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-accent-cyan transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <span className="text-slate-700">•</span>

              <button
                type="button"
                onClick={copyEmail}
                className="flex items-center gap-1.5 hover:text-accent-emerald transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-accent-emerald" />
                    <span className="text-accent-emerald font-medium">{t.hero.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span dir="ltr">{personalInfo.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Code Terminal Card (kept LTR font-mono for authentic developer code look) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative glow aura */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent-cyan/20 via-accent-indigo/20 to-accent-emerald/20 blur-xl opacity-75" />

              {/* Terminal Window */}
              <div className="relative rounded-2xl bg-dark-900 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl" dir="ltr">
                {/* Header bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-dark-850/80 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>{t.hero.terminal.filename}</span>
                  </div>
                  <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {t.hero.terminal.status}
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-slate-300">
                  <div className="text-slate-500 mb-2">{t.hero.terminal.comment}</div>
                  <p>
                    <span className="text-accent-indigo">const</span>{' '}
                    <span className="text-accent-cyan">engineer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    name: <span className="text-teal-300">'{personalInfo.name}'</span>,
                  </p>
                  <p className="pl-4">
                    location: <span className="text-teal-300">'Safi, Morocco'</span>,
                  </p>
                  <p className="pl-4">
                    focus: [
                    <span className="text-amber-300">'FullStack'</span>,{' '}
                    <span className="text-amber-300">'Microservices'</span>,{' '}
                    <span className="text-amber-300">'Mobile'</span>],
                  </p>
                  <p className="pl-4">
                    coreStack: &#123;
                  </p>
                  <p className="pl-8">
                    web: [<span className="text-cyan-300">'React 18'</span>, <span className="text-cyan-300">'Next.js'</span>, <span className="text-cyan-300">'Tailwind'</span>],
                  </p>
                  <p className="pl-8">
                    backend: [<span className="text-cyan-300">'NestJS'</span>, <span className="text-cyan-300">'Node.js'</span>, <span className="text-cyan-300">'WebSockets'</span>],
                  </p>
                  <p className="pl-8">
                    mobile: [<span className="text-cyan-300">'React Native'</span>, <span className="text-cyan-300">'Expo'</span>],
                  </p>
                  <p className="pl-8">
                    data: [<span className="text-cyan-300">'PostgreSQL'</span>, <span className="text-cyan-300">'MongoDB'</span>, <span className="text-cyan-300">'Supabase'</span>],
                  </p>
                  <p className="pl-4">&#125;,</p>
                  <p className="pl-4">
                    deployments: <span className="text-accent-emerald">['Docker', 'Vercel', 'Linux']</span>,
                  </p>
                  <p className="pl-4">
                    status: <span className="text-emerald-400">'Ready for Impact 🚀'</span>,
                  </p>
                  <p>&#125;;</p>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="text-accent-cyan flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> {t.hero.terminal.cardPill1}
                    </span>
                    <span>{t.hero.terminal.cardPill2}</span>
                    <span className="text-emerald-400">{t.hero.terminal.cardPill3}</span>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -bottom-5 -left-4 glass-card px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-lg border border-white/10 hidden sm:flex">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-xs font-mono font-medium text-slate-200">TypeScript & NestJS</span>
              </div>
              <div className="absolute -top-4 -right-3 glass-card px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-lg border border-white/10 hidden sm:flex">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono font-medium text-slate-200">React 18 & Next.js</span>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Metrics Grid */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="glass-card p-5 sm:p-6 rounded-2xl glass-card-hover text-center sm:text-left"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1 bg-clip-text text-transparent bg-gradient-to-r from-accent-cyan to-white">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">
                {statLabels[idx]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
