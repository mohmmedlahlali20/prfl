import { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Code2, Server, Database, GitBranch, Cpu, Check, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { t, language } = useLanguage();

  const getCategoryTitle = (cat) => {
    if (language === 'fr') {
      if (cat.id === 'frontend') return 'Ingénierie Frontend';
      if (cat.id === 'backend') return 'Backend & Architecture';
      if (cat.id === 'database') return 'Bases de Données & Cloud';
      if (cat.id === 'workflow') return 'Workflow & Méthodologie';
    }
    if (language === 'ar') {
      if (cat.id === 'frontend') return 'هندسة واجهات المستخدم';
      if (cat.id === 'backend') return 'الخوادم والبنية المعمارية';
      if (cat.id === 'database') return 'قواعد البيانات والحوسبة السحابية';
      if (cat.id === 'workflow') return 'سير العمل والأدوات الهندسية';
    }
    return cat.title;
  };

  const getCategoryDesc = (cat) => {
    if (language === 'fr') {
      if (cat.id === 'frontend') return 'Interfaces réactives, accessibles et performantes.';
      if (cat.id === 'backend') return 'APIs REST/WebSockets robustes, microservices et sécurité.';
      if (cat.id === 'database') return 'Bases relationnelles & NoSQL, stockage d\'objets et conteneurs.';
      if (cat.id === 'workflow') return 'Culture du test, intégration continue et livraison rapide.';
    }
    if (language === 'ar') {
      if (cat.id === 'frontend') return 'واجهات تفاعلية وسلسة تركز على سرعة الاستجابة وسهولة الاستخدام.';
      if (cat.id === 'backend') return 'بناء واجهات برمجية متينة، خدمات مصغرة، وأنظمة حماية موثوقة.';
      if (cat.id === 'database') return 'قواعد بيانات علائقية وغير علائقية، تخزين كائني وحاويات Docker.';
      if (cat.id === 'workflow') return 'ثقافة هندسية تركز على جودة الكود والاختبارات والنشر السريع.';
    }
    return cat.description;
  };

  const getLevelLabel = (level) => {
    if (level === 'Expert') return t.skills.expertBadge;
    if (level === 'Advanced') return t.skills.advancedBadge;
    if (level === 'Proficient') return t.skills.proficientBadge;
    return t.skills.intermediateBadge;
  };

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'frontend':
        return <Code2 className="w-4 h-4 text-accent-cyan" />;
      case 'backend':
        return <Server className="w-4 h-4 text-accent-indigo" />;
      case 'database':
        return <Database className="w-4 h-4 text-accent-emerald" />;
      case 'workflow':
        return <GitBranch className="w-4 h-4 text-accent-violet" />;
      default:
        return <Cpu className="w-4 h-4" />;
    }
  };

  const displayedCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-indigo/10 border border-accent-indigo/20 text-accent-indigo text-xs font-mono mb-3">
            <span>{t.skills.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.skills.titlePrefix} <span className="text-gradient-indigo">{t.skills.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-base text-slate-400 max-w-2xl">
            {t.skills.subtitle}
          </p>

          {/* Category Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-dark-900 border border-white/5 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                selectedCategory === 'all'
                  ? 'bg-accent-cyan text-dark-950 shadow-glow-cyan'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {t.skills.all}
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{getCategoryTitle(cat)}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Categories & Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedCategories.map((category) => (
            <div
              key={category.id}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center">
                      {getCategoryIcon(category.id)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {getCategoryTitle(category)}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {getCategoryDesc(category)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills Badges Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-dark-900/60 border border-white/5 hover:border-accent-cyan/30 transition-all group"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-semibold text-xs sm:text-sm text-slate-200 group-hover:text-white font-mono">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                            skill.level === 'Expert'
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                              : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                          }`}
                        >
                          {getLevelLabel(skill.level)}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1 mt-1">
                        {skill.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono text-slate-400 bg-white/[0.03] px-1.5 py-0.5 rounded border border-white/[0.04]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy Banner */}
        <div className="mt-12 glass-card p-6 rounded-2xl border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5 text-accent-cyan" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">{t.skills.bannerTitle}</h4>
              <p className="text-xs text-slate-400">{t.skills.bannerDesc}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 shrink-0">
            <Check className="w-3.5 h-3.5" />
            <span>{t.skills.productionReady}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
