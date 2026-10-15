import { useState, useEffect } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  X, 
  Eye, 
  Clock, 
  UserCheck 
} from 'lucide-react';
import { professionalExperiences, educationData, certificationsData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'experience' | 'education'
  const [selectedCert, setSelectedCert] = useState(null);
  const { t, language } = useLanguage();

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getRoleTitle = (role) => {
    if (language === 'ar') {
      if (role.id === 'telus') return 'مهندس برمجيات / مطور Full Stack';
      if (role.id === 'arias') return 'مطور Full Stack';
    }
    return role.role;
  };

  const getRolePeriod = (role) => {
    if (language === 'fr') {
      if (role.id === 'telus') return 'Janv. 2026 - Sept. 2026 (9 mois)';
      if (role.id === 'arias') return 'Juil. 2025 - Déc. 2025 (6 mois)';
    }
    if (language === 'ar') {
      if (role.id === 'telus') return 'يناير 2026 - سبتمبر 2026 (9 أشهر)';
      if (role.id === 'arias') return 'يوليو 2025 - ديسمبر 2025 (6 أشهر)';
    }
    return role.period;
  };

  const getLocation = (loc) => {
    if (language === 'fr') {
      if (loc.includes('Casablanca')) return 'Casablanca, Maroc';
      if (loc.includes('Marrakech')) return 'Marrakech, Maroc';
      if (loc.includes('Safi')) return 'Safi, Maroc';
    }
    if (language === 'ar') {
      if (loc.includes('Casablanca')) return 'الدار البيضاء، المغرب';
      if (loc.includes('Marrakech')) return 'مراكش، المغرب';
      if (loc.includes('Safi')) return 'آسفي، المغرب';
    }
    return loc;
  };

  const getProjectSubtitle = (proj) => {
    if (language === 'fr') {
      if (proj.name === 'eSurvey.cx') return 'Plateforme CX & Sondages Automatisés';
      if (proj.name === 'dataScrapper') return "Pipeline d'Ingestion & Agrégation de Données";
      if (proj.name === 'UXV Fleet Management') return 'Supervision Télémétrique de Flottes de Drones';
      if (proj.name === 'HAB Tracking') return "Surveillance d'Espace Aérien & Zones d'Interdiction";
    }
    if (language === 'ar') {
      if (proj.name === 'eSurvey.cx') return 'منصة تجربة العملاء والاستطلاعات الآلية';
      if (proj.name === 'dataScrapper') return 'محرك استخراج ومعالجة البيانات الضخمة';
      if (proj.name === 'UXV Fleet Management') return 'إدارة ومراقبة أساطيل الطائرات المسيرة في الوقت الفعلي';
      if (proj.name === 'HAB Tracking') return 'تتبع المجال الجوي ومناطق حظر الطيران';
    }
    return proj.subtitle;
  };

  const getProjectBullets = (proj) => {
    if (language === 'fr') {
      if (proj.name === 'eSurvey.cx') return [
        "Architecture et déploiement d'un moteur de sondages automatisé intégré à l'API WhatsApp Business (via 360Dialog).",
        "Conception de tableaux de bord analytiques en temps réel pour mesurer la satisfaction et l'engagement client.",
      ];
      if (proj.name === 'dataScrapper') return [
        "Développement d'un scraper distribué à haut débit en Python extrayant plus de 75 000 annonces automobiles (Avito, Wandaloo, Moteur.ma).",
        "Mise en place de pipelines de nettoyage, déduplication et normalisation des données, réduisant la latence globale de 40%.",
      ];
      if (proj.name === 'UXV Fleet Management') return [
        "Conception et développement d'une plateforme de supervision télémétrique en temps réel pour les opérations critiques de drones UXV.",
        "Développement du tableau de bord opérateur (Next.js, NestJS, Supabase) avec webhooks d'alerte instantanée et suivi de mission en direct.",
      ];
      if (proj.name === 'HAB Tracking') return [
        "Développement d'un moteur d'autorisation de vol et de détection automatique des intrusions dans les zones aériennes protégées.",
        "Rendu géospatial haute performance utilisant Mapbox GL JS et GeoJSON pour cartographier les couloirs aériens et zones d'interdiction.",
      ];
    }
    if (language === 'ar') {
      if (proj.name === 'eSurvey.cx') return [
        "تصميم وبناء محرك آلي لجمع استطلاعات الرأي وملاحظات العملاء متكامل مع WhatsApp Business API (عبر 360Dialog).",
        "إنشاء لوحات معلومات تفاعلية في الوقت الفعلي لتتبع مؤشرات رضا العملاء ومعدلات التفاعل.",
      ];
      if (proj.name === 'dataScrapper') return [
        "هندسة محرك كشط بيانات موزع بلغة Python واستخراج أكثر من 75,000 إعلان سيارات (Avito, Wandaloo, Moteur.ma).",
        "تنفيذ خوارزميات تنظيف وإزالة التكرارات وتوحيد البيانات مما ساهم في خفض زمن استجابة النظام بنسبة 40%.",
      ];
      if (proj.name === 'UXV Fleet Management') return [
        "تصميم وتطوير منصة لمراقبة القياسات عن بُعد لعمليات الطائرات المسيرة والمركبات ذاتية القيادة في الوقت الفعلي.",
        "بناء لوحة تحكم تفاعلية للمشغلين باستخدام (Next.js, NestJS, Supabase) مع تنبيهات فورية عبر Webhooks وتتبع المهام.",
      ];
      if (proj.name === 'HAB Tracking') return [
        "تطوير محرك برمجيات لإدارة تصاريح الطيران والكشف الآلي عن اختراقات المناطق المحظورة جوياً.",
        "عرض جغرافي عالي الدقة للخرائط عبر Mapbox GL JS و GeoJSON لتحديد الممرات الجوية ومناطق حظر الطيران.",
      ];
    }
    return proj.bullets;
  };

  const getEduDegree = (edu) => {
    if (language === 'ar') {
      if (edu.institution.includes('YouCode')) return 'تطوير الويب الشامل (Full Stack)';
      if (edu.institution.includes('Charif')) return 'بكالوريا في العلوم والتكنولوجيات الكهربائية';
    }
    return edu.degree;
  };

  const getEduDesc = (edu) => {
    if (language === 'fr') {
      if (edu.institution.includes('YouCode')) return "Pédagogie active par projets, axée sur les applications web de production, les méthodes agiles et l'architecture logicielle full-stack.";
      if (edu.institution.includes('Charif')) return "Fondamentaux des systèmes électriques, logique algorithmique, physique et sciences appliquées de l'ingénieur.";
    }
    if (language === 'ar') {
      if (edu.institution.includes('YouCode')) return "بيداغوجيا نشطة قائمة على المشاريع العملية الواقعية، وتطوير تطبيقات الإنتاج، والممارسات الرشيقة، وهندسة البرمجيات.";
      if (edu.institution.includes('Charif')) return "دراسة الأنظمة الكهربائية، المنطق الخوارزمي، الفيزياء، والعلوم الهندسية والتكنولوجية التطبيقية.";
    }
    return edu.description;
  };

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/20 text-accent-violet text-xs font-mono mb-3">
            <span>{t.experience.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.experience.titlePrefix} <span className="text-gradient-indigo">{t.experience.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-base text-slate-400 max-w-2xl">
            {t.experience.subtitle}
          </p>

          {/* Filter Bar */}
          <div className="mt-8 inline-flex flex-wrap justify-center p-1.5 rounded-2xl bg-dark-900 border border-white/5 backdrop-blur-md gap-1">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeFilter === 'all'
                  ? 'bg-accent-cyan text-dark-950 shadow-glow-cyan'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {t.experience.tabAll}
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('experience')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeFilter === 'experience'
                  ? 'bg-gradient-to-r from-accent-cyan to-teal-400 text-dark-950 shadow-glow-cyan'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>{t.experience.tabExp} ({professionalExperiences.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('education')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeFilter === 'education'
                  ? 'bg-gradient-to-r from-accent-violet to-accent-indigo text-white shadow-glow-indigo'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{t.experience.tabEdu} ({educationData.length + certificationsData.length})</span>
            </button>
          </div>
        </div>

        <div className="space-y-16 max-w-5xl mx-auto">
          {/* SECTION 1: Professional Experience */}
          {(activeFilter === 'all' || activeFilter === 'experience') && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex items-center gap-3 pb-3 border-b border-white/5">
                <div className="w-9 h-9 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-accent-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t.experience.expSectionTitle}</h3>
                  <p className="text-xs text-slate-400">{t.experience.expSectionSub}</p>
                </div>
              </div>

              <div className="space-y-8">
                {professionalExperiences.map((role) => (
                  <div
                    key={role.id}
                    className="glass-card rounded-3xl p-6 sm:p-8 border border-white/5 glass-card-hover relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-cyan via-teal-400 to-accent-indigo" />

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-white/5">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono font-semibold mb-2">
                          <Briefcase className="w-3.5 h-3.5" />
                          <span>{role.company}</span>
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {getRoleTitle(role)}
                        </h4>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                          <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
                          <span>{getLocation(role.location)}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 sm:self-start">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-xl bg-dark-900 border border-white/10 text-slate-200">
                          <Calendar className="w-3.5 h-3.5 text-accent-cyan" />
                          <span>{getRolePeriod(role)}</span>
                        </span>
                      </div>
                    </div>

                    {/* Key Projects */}
                    <div className="mt-6 space-y-5">
                      {role.projects.map((proj, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-5 rounded-2xl bg-dark-900/60 border border-white/5 hover:border-white/10 transition-colors"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-accent-cyan" />
                              <h5 className="text-base font-bold text-white tracking-tight">
                                {proj.name}
                              </h5>
                            </div>
                            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/5 self-start sm:self-auto">
                              {getProjectSubtitle(proj)}
                            </span>
                          </div>

                          <ul className="space-y-2">
                            {getProjectBullets(proj).map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                                <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 2: Education */}
          {(activeFilter === 'all' || activeFilter === 'education') && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex items-center gap-3 pb-3 border-b border-white/5">
                <div className="w-9 h-9 rounded-xl bg-accent-violet/10 border border-accent-violet/20 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-accent-violet" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t.experience.eduSectionTitle}</h3>
                  <p className="text-xs text-slate-400">{t.experience.eduSectionSub}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {educationData.map((edu, idx) => (
                  <div
                    key={idx}
                    className="glass-card rounded-3xl p-6 sm:p-7 border border-white/5 glass-card-hover flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-lg bg-dark-900 border border-white/10 text-accent-violet">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{edu.duration}</span>
                        </span>
                        <div className="flex items-center gap-1 text-xs text-slate-400">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          <span>{getLocation(edu.location)}</span>
                        </div>
                      </div>

                      <h4 className="text-lg font-bold text-white mt-1 mb-1">
                        {getEduDegree(edu)}
                      </h4>

                      <div className="text-xs font-semibold text-teal-400 mb-3">
                        {edu.institution}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {getEduDesc(edu)}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                      {edu.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-[10px] font-mono rounded-md bg-white/[0.03] text-slate-300 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 3: Official Certifications with Images */}
          {(activeFilter === 'all' || activeFilter === 'education') && (
            <div className="space-y-8 animate-fadeIn pt-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5 flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-accent-emerald/10 border border-accent-emerald/20 flex items-center justify-center">
                    <Award className="w-4 h-4 text-accent-emerald" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{t.experience.certSectionTitle}</h3>
                    <p className="text-xs text-slate-400">{t.experience.certSectionSub}</p>
                  </div>
                </div>

                <div className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.experience.verifiedCount}</span>
                </div>
              </div>

              {/* Certificates Grid with Direct Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificationsData.map((cert) => (
                  <div
                    key={cert.id}
                    className="glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-accent-cyan/40 transition-all flex flex-col group"
                  >
                    {/* Certificate Image Preview Container */}
                    <div 
                      className="relative h-44 bg-dark-900 cursor-pointer overflow-hidden"
                      onClick={() => setSelectedCert(cert)}
                    >
                      <img
                        src={cert.image}
                        alt={`${cert.title} Certificate`}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      
                      {/* Hover Overlay with Inspect Button */}
                      <div className="absolute inset-0 bg-dark-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-semibold text-white backdrop-blur-[2px]">
                        <Eye className="w-4 h-4 text-accent-cyan" />
                        <span>{t.experience.clickInspect}</span>
                      </div>

                      {/* Pill Badge */}
                      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-dark-900/90 text-[10px] font-mono text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                        {t.experience.verified}
                      </div>
                    </div>

                    {/* Certificate Details */}
                    <div className="p-4 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                          <span className="text-teal-400 font-medium">{cert.issuer}</span>
                          <span>{cert.date}</span>
                        </div>
                        <h4 className="text-sm font-bold text-white mb-2 leading-snug group-hover:text-accent-cyan transition-colors">
                          {cert.title}
                        </h4>
                      </div>

                      <div className="pt-3 border-t border-white/5 space-y-1.5 text-xs text-slate-400">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="flex items-center gap-1 text-slate-300">
                            <UserCheck className="w-3 h-3 text-accent-cyan" />
                            <span>{cert.instructor}</span>
                          </span>
                          <span className="flex items-center gap-1 font-mono text-slate-400">
                            <Clock className="w-3 h-3" />
                            <span>{cert.duration}</span>
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => setSelectedCert(cert)}
                          className="w-full mt-2 py-2 px-3 rounded-xl text-xs font-semibold bg-dark-850 hover:bg-dark-800 text-slate-200 border border-white/10 hover:border-accent-cyan/30 flex items-center justify-center gap-1.5 transition-all"
                        >
                          <Eye className="w-3.5 h-3.5 text-accent-cyan" />
                          <span>{t.experience.viewCert}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* High-Resolution Certificate Modal / Lightbox */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-4xl w-full glass-card rounded-3xl overflow-hidden border border-white/15 shadow-2xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block">
                  {t.experience.modalSubtitle}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                  {selectedCert.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-xl bg-dark-850 hover:bg-dark-800 text-slate-300 hover:text-white border border-white/10 transition-colors"
                aria-label="Close certificate modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-Res Image Display */}
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-dark-900 max-h-[70vh] flex items-center justify-center">
              <img
                src={selectedCert.image}
                alt={`${selectedCert.title} Full Certificate`}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>

            {/* Modal Footer info */}
            <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-slate-300 gap-2">
              <div className="flex items-center gap-4">
                <span>{t.experience.instructor}: <strong className="text-white">{selectedCert.instructor}</strong></span>
                <span>{t.experience.completed}: <strong className="text-white">{selectedCert.date}</strong></span>
                <span>{t.experience.courseLength}: <strong className="text-white">{selectedCert.duration}</strong></span>
              </div>
              <a
                href={selectedCert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-accent-cyan hover:underline text-xs font-semibold"
              >
                <span>{t.experience.openRaw}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
