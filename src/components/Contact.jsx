import { useState } from 'react';
import { Mail, Copy, CheckCircle2, Send, Clock, MapPin, Sparkles } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t, isRTL } = useLanguage();

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono mb-3">
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.contact.titlePrefix} <span className="text-gradient-accent">{t.contact.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-base text-slate-400 max-w-2xl">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="glass-card p-8 rounded-3xl border border-white/5 space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {t.contact.directChannels}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {t.contact.channelsSub}
              </p>

              {/* Copy Email Box */}
              <div className="p-4 rounded-2xl bg-dark-900 border border-white/10 flex flex-col gap-2">
                <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                  {t.contact.primaryEmail}
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-white truncate" dir="ltr">
                    {personalInfo.email}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="p-2 rounded-xl bg-accent-cyan/10 hover:bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30 active:scale-95 transition-all shrink-0"
                    title="Copy Email"
                  >
                    {copied ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copied && (
                  <span className="text-xs text-emerald-400 font-medium">
                    {t.hero.copied}
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold bg-accent-cyan text-dark-950 hover:brightness-110 active:scale-95 transition-all shadow-glow-cyan"
                >
                  <Mail className="w-4 h-4" />
                  <span>{t.contact.sendDirect}</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold bg-dark-850 hover:bg-dark-800 text-slate-200 border border-white/10 hover:border-white/20 active:scale-95 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-accent-cyan" />
                  <span>{t.contact.linkedInMsg}</span>
                </a>
              </div>
            </div>

            {/* Quick Commitments Box */}
            <div className="glass-card p-6 rounded-2xl border border-white/5 space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-accent-cyan shrink-0" />
                <span>{t.contact.responseTime}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-accent-emerald shrink-0" />
                <span>{t.contact.location}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Sparkles className="w-4 h-4 text-accent-indigo shrink-0" />
                <span>{t.contact.availability}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-3xl border border-white/5 relative">
              <h3 className="text-xl font-bold text-white mb-2">
                {t.contact.sendMsg}
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                {t.contact.formDesc}
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">{t.contact.successTitle}</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    {t.contact.successDesc}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                        {t.contact.nameLabel}
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder={t.contact.namePlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent-cyan transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                        {t.contact.emailLabel}
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder={t.contact.emailPlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent-cyan transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      {t.contact.subjectLabel}
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder={t.contact.subjectPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent-cyan transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      {t.contact.msgLabel}
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder={t.contact.msgPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-accent-cyan transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-accent-cyan via-teal-400 to-accent-emerald text-dark-950 hover:brightness-110 active:scale-[0.99] transition-all shadow-glow-cyan disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="animate-spin w-4 h-4 border-2 border-dark-950 border-t-transparent rounded-full" />
                    ) : (
                      <>
                        <Send className={`w-4 h-4 stroke-[2.5] ${isRTL ? 'rotate-180' : ''}`} />
                        <span>{t.contact.sendBtn}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
