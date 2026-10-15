import { useState } from 'react';
import { featuredProjects } from '../data/portfolioData';
import { ExternalLink, Sparkles, Smartphone, Globe, Radio, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const { t, language } = useLanguage();

  const categories = [
    { key: 'All', label: t.projects.filterAll },
    { key: 'Full-Stack', label: t.projects.filterFullStack },
    { key: 'Mobile', label: t.projects.filterMobile },
    { key: 'Real-Time', label: t.projects.filterRealTime },
  ];

  const filteredProjects =
    filter === 'All'
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === filter);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Mobile':
        return <Smartphone className="w-3.5 h-3.5 text-accent-cyan" />;
      case 'Real-Time':
        return <Radio className="w-3.5 h-3.5 text-accent-emerald" />;
      default:
        return <Globe className="w-3.5 h-3.5 text-accent-indigo" />;
    }
  };

  const getProjectSummary = (proj) => {
    if (language === 'fr') {
      if (proj.id === 'petswave') return "Application mobile e-commerce complète pour animaux et backend microservices haute performance. Permet aux propriétaires d'animaux de commander et suivre leurs achats avec synchronisation du panier en direct.";
      if (proj.id === 'p2p-discord') return "Plateforme de communication temps réel permettant le streaming audio/vidéo peer-to-peer et la messagerie instantanée à faible latence grâce à des canaux WebSockets et WebRTC.";
      if (proj.id === 'cin-manager') return "Moteur de réservation de séances de cinéma et plateforme de recrutement. Grille interactive de réservation 2D avec blocage de sièges en temps réel et tableaux de bord d'administration.";
      if (proj.id === 'warehouse-management') return "Application mobile de gestion des stocks et de logistique d'entrepôt. Permet aux équipes d'auditer les palettes, gérer les flux et surveiller les seuils d'alerte en direct.";
      if (proj.id === 'event-manager') return "Plateforme multi-tenant de planification d'événements et de billetterie pour conférences virtuelles et présentielles avec validation de badges par QR code.";
      if (proj.id === 'photoshare') return "Réseau social mobile de partage de photos avec flux en temps réel, interactions instantanées, commentaires imbriqués et mise en cache multimédia rapide.";
    }
    if (language === 'ar') {
      if (proj.id === 'petswave') return "تطبيق تجارة إلكترونية متكامل لمستلزمات الحيوانات الأليفة وخادم خدمات مصغرة فائق الأداء مع مزامنة فورية لسلة التسوق وتخزين سحابي للصور.";
      if (proj.id === 'p2p-discord') return "منصة اتصالات فورية تتيح البث الصوتي والمرئي بين النظراء (P2P) والدردشة الفورية بزمن استجابة أقل من 100 مللي ثانية.";
      if (proj.id === 'cin-manager') return "نظام متكامل لحجز تذاكر السينما وإدارة التوظيف مع خريطة مقاعد تفاعلية تمنع تضارب الحجوزات ولوحات تحكم إدارية.";
      if (proj.id === 'warehouse-management') return "تطبيق هاتف ذكي لإدارة وتتبع مخزون المستودعات وسلاسل التوريد في الوقت الفعلي مع مسح الباركود والمزامنة دون اتصال.";
      if (proj.id === 'event-manager') return "منصة لإدارة وتنظيم الفعاليات والمؤتمرات مع نظام إصدار تذاكر والتحقق الفوري عبر رموز QR الرقمية المشفرة.";
      if (proj.id === 'photoshare') return "تطبيق تواصل اجتماعي لمشاركة الصور مع تحديثات فورية للمنشورات والتفاعلات ونظام رفع وتخزين وسائط فائق السرعة.";
    }
    return proj.summary;
  };

  const getAchievements = (proj) => {
    if (language === 'fr') {
      if (proj.id === 'petswave') return [
        "Architecture backend découplée avec NestJS et stockage d'objets MinIO compatible S3.",
        "Authentification JWT sécurisée, mise en cache du catalogue et animations fluides sur React Native Expo.",
        "Optimisation des requêtes et indexation MongoDB, réduisant le temps de réponse API de 35%."
      ];
      if (proj.id === 'p2p-discord') return [
        "Pipeline multimédia WebRTC maillé avec serveurs STUN/TURN pour une connectivité fiable.",
        "Canaux de signalement Socket.io pour la présence en temps réel et la livraison instantanée des messages.",
        "Interface sombre responsive inspirée de Discord avec indicateurs d'activité vocale personnalisés."
      ];
      if (proj.id === 'cin-manager') return [
        "Canvas interactif de sélection de sièges éliminant les conflits de double réservation.",
        "APIs REST NestJS avec support de base de données secondaire pour le suivi des candidatures.",
        "Gestion d'accès basée sur les rôles (Spectateur, Contrôleur, Administrateur)."
      ];
      if (proj.id === 'warehouse-management') return [
        "Flux de scan de code-barres réduisant le temps de réconciliation des stocks de 40%.",
        "Architecture offline-first avec synchronisation automatique lors du rétablissement réseau.",
        "Alertes automatisées pour les articles en rupture de stock et métriques de rotation."
      ];
      if (proj.id === 'event-manager') return [
        "Système de billetterie par QR code cryptographique pour le check-in instantané sur site.",
        "Schéma relationnel PostgreSQL avec transactions ACID pour les réservations de places.",
        "Conteneurisation complète avec Docker Compose pour les environnements de staging et production."
      ];
      if (proj.id === 'photoshare') return [
        "Compression d'image côté client et pipeline de téléversement en arrière-plan.",
        "Mise à jour réactive des flux via écouteurs temps réel Cloud Firestore.",
        "Fonctionnalités sociales : mentions j'aime, favoris et flux d'abonnements."
      ];
    }
    if (language === 'ar') {
      if (proj.id === 'petswave') return [
        "بناء خادم NestJS مستقل مع تخزين كائني سحابي MinIO متوافق مع S3.",
        "تأمين الجلسات عبر JWT مع تخزين مؤقت للبيانات وتجربة تسوق سلسة على React Native.",
        "تحسين فهارس MongoDB مما خفض وقت استجابة الواجهات البرمجية بنسبة 35%."
      ];
      if (proj.id === 'p2p-discord') return [
        "بناء خط تدفق وسائط WebRTC شبكي مع خوادم STUN/TURN لضمان استقرار الاتصال.",
        "قنوات إشارات فورية عبر Socket.io لإدارة التواجد والرسائل المباشرة.",
        "واجهة داكنة متطورة مع مؤشرات بصرية لمستوى الصوت والنشاط."
      ];
      if (proj.id === 'cin-manager') return [
        "لوحة مقاعد تفاعلية تمنع تعارض الحجوزات المتزامنة في نفس اللحظة.",
        "واجهات RESTful عبر NestJS مع ربط قواعد بيانات فرعية لتتبع التوظيف.",
        "نظام مصادقة متعدد الصلاحيات (مشاهد، مفتش تذاكر، مدير صالة)."
      ];
      if (proj.id === 'warehouse-management') return [
        "أتمتة مسح الباركود مما قلص وقت جرد المخزون بنسبة 40%.",
        "تصميم يعتمد التخزين المحلي أولاً والمزامنة التلقائية عند عودة الاتصال.",
        "تنبيهات فورية عند وصول المنتجات للحد الأدنى من المخزون."
      ];
      if (proj.id === 'event-manager') return [
        "نظام تذاكر يعتمد رموز QR مشفرة لتسجيل الحضور الفوري في الفعاليات.",
        "مخطط PostgreSQL علائقي يضمن سلامة المعاملات المالية والمقاعد.",
        "تجهيز بيئة التشغيل بحاويات Docker Compose لسهولة الإطلاق."
      ];
      if (proj.id === 'photoshare') return [
        "ضغط الصور على جهاز العميل ورفع الملفات بسلاسة في الخلفية.",
        "تحديث فوري للمنشورات والتفاعلات عبر مراقبي Firestore.",
        "نظام تفاعلي متكامل يشمل الإعجابات، الحفظ، ومتابعة الحسابات."
      ];
    }
    return proj.achievements;
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-emerald/10 border border-accent-emerald/20 text-accent-emerald text-xs font-mono mb-3">
            <span>{t.projects.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.projects.titlePrefix} <span className="text-gradient-accent">{t.projects.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-base text-slate-400 max-w-2xl">
            {t.projects.subtitle}
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1 rounded-full bg-dark-900 border border-white/5 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setFilter(cat.key)}
                className={`px-5 py-2 text-xs font-semibold rounded-full transition-all ${
                  filter === cat.key
                    ? 'bg-gradient-to-r from-accent-cyan to-teal-400 text-dark-950 shadow-glow-cyan'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label} {cat.key === 'All' ? `(${featuredProjects.length})` : ''}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between glass-card-hover border border-white/5"
            >
              <div>
                {/* Header Tag & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-dark-850 border border-white/10">
                      {getCategoryIcon(project.category)}
                    </span>
                    <span className="text-xs font-mono font-medium text-slate-300">
                      {project.badge}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">
                  {project.title}
                </h3>

                {/* Impact-driven Summary */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {getProjectSummary(project)}
                </p>

                {/* Key Engineering Achievements */}
                <div className="mb-6 p-4 rounded-2xl bg-dark-900/60 border border-white/5">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-accent-cyan mb-2.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t.projects.highlightsTitle}</span>
                  </div>
                  <ul className="space-y-2">
                    {getAchievements(project).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/[0.03] text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-dark-850 hover:bg-dark-800 text-slate-200 border border-white/10 hover:border-white/20 active:scale-95 transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-slate-300" />
                  <span>{t.projects.viewRepo}</span>
                </a>

                {project.secondaryGithub && (
                  <a
                    href={project.secondaryGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-medium bg-dark-900 hover:bg-dark-850 text-slate-300 border border-white/5 hover:border-white/10 transition-all"
                  >
                    <Layers className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>{t.projects.backendRepo}</span>
                  </a>
                )}

                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-accent-cyan/10 hover:bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30 active:scale-95 transition-all ml-auto"
                >
                  <span>{t.projects.liveDemo}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repositories Callout */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400 mb-4">
            {t.projects.githubCallout}
          </p>
          <a
            href="https://github.com/mohmmedlahlali20?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs font-semibold bg-dark-900 hover:bg-dark-850 text-white border border-white/10 hover:border-accent-cyan/30 transition-all shadow-md"
          >
            <GithubIcon className="w-4 h-4 text-accent-cyan" />
            <span>{t.projects.exploreGitHub}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
