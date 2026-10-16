export const personalInfo = {
  name: "Mohammed Lahlali",
  role: "Full-Stack & Software Engineer",
  tagline: "Architecting high-performance web applications, scalable backend systems, and smooth mobile experiences.",
  email: "mohmmedlaeh81@gmail.com",
  github: "https://github.com/mohmmedlahlali20",
  linkedin: "https://www.linkedin.com/in/mohammed-lahlali-a80996266/",
  resumeUrl: "/CV_Mohammed_LAHLALI_FR.pdf",
  resumeFileName: "CV_Mohammed_LAHLALI_FR.pdf",
  location: "Safi, Morocco",
  status: "Available for new opportunities & high-impact contracts",
  bio: "Passionate Software Engineer with hands-on experience in full-stack architecture, real-time distributed applications, and modern mobile development. Specialized in the JavaScript/TypeScript ecosystem (React, Next.js, NestJS, React Native) and dedicated to building resilient, performant products that drive real business value.",
};

export const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "GitHub Repositories", value: "80+" },
  { label: "Production Projects", value: "15+" },
  { label: "Client Satisfaction", value: "100%" },
];

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Building responsive, accessible, and reactive user interfaces with modern toolchains.",
    skills: [
      { name: "React 18+", level: "Expert", tags: ["Hooks", "Context", "Performance"] },
      { name: "Next.js", level: "Advanced", tags: ["SSR", "App Router", "API Routes"] },
      { name: "TypeScript", level: "Advanced", tags: ["Strict Typing", "Generics"] },
      { name: "React Native", level: "Advanced", tags: ["Expo", "Mobile Architecture"] },
      { name: "Tailwind CSS", level: "Expert", tags: ["Design Systems", "Dark Mode"] },
      { name: "Redux Toolkit", level: "Advanced", tags: ["Global State", "RTK Query"] },
      { name: "HTML5 & CSS3", level: "Expert", tags: ["Semantic HTML", "Modern Layouts"] },
      { name: "Vite & Tooling", level: "Advanced", tags: ["HMR", "Build Optimization"] },
    ],
  },
  {
    id: "backend",
    title: "Backend & Architecture",
    description: "Designing robust REST/WebSocket APIs, scalable microservices, and secure backends.",
    skills: [
      { name: "Node.js", level: "Advanced", tags: ["Event Loop", "Streams", "Async"] },
      { name: "NestJS", level: "Advanced", tags: ["Dependency Injection", "Modules", "Guards"] },
      { name: "Express.js", level: "Expert", tags: ["Middleware", "REST", "Routing"] },
      { name: "Python", level: "Intermediate", tags: ["FastAPI", "Data Scraping"] },
      { name: "WebSockets & Socket.io", level: "Advanced", tags: ["Real-Time", "Bi-directional"] },
      { name: "WebRTC", level: "Proficient", tags: ["P2P", "Voice & Video Streaming"] },
      { name: "REST APIs", level: "Expert", tags: ["Swagger", "OpenAPI", "Specs"] },
      { name: "JWT & OAuth2", level: "Advanced", tags: ["Auth", "Role-Based Access"] },
    ],
  },
  {
    id: "database",
    title: "Databases & Cloud",
    description: "High-integrity relational & NoSQL databases with resilient storage and containerization.",
    skills: [
      { name: "PostgreSQL", level: "Advanced", tags: ["Relational", "Indexing", "ACID"] },
      { name: "MongoDB", level: "Advanced", tags: ["Aggregation", "Mongoose", "NoSQL"] },
      { name: "Redis", level: "Proficient", tags: ["Caching", "Pub/Sub", "Sessions"] },
      { name: "Docker", level: "Advanced", tags: ["Containers", "Multi-stage Builds"] },
      { name: "MinIO & S3", level: "Advanced", tags: ["Object Storage", "File Pipelines"] },
      { name: "Supabase & Firebase", level: "Advanced", tags: ["Realtime DB", "Auth", "Storage"] },
      { name: "Linux & Shell", level: "Advanced", tags: ["Bash", "Server Administration"] },
      { name: "Vercel & Netlify", level: "Expert", tags: ["Edge", "Zero-Config Deployments"] },
    ],
  },
  {
    id: "workflow",
    title: "Workflow & Engineering",
    description: "Modern engineering culture prioritizing testability, code quality, and fast shipping.",
    skills: [
      { name: "Git & GitHub", level: "Expert", tags: ["Branching", "Actions", "CI/CD"] },
      { name: "Agile / Scrum", level: "Advanced", tags: ["Sprints", "Jira", "Standups"] },
      { name: "Postman & Insomnia", level: "Expert", tags: ["API Testing", "Collections"] },
      { name: "Jest & RTL", level: "Intermediate", tags: ["Unit Tests", "Integration"] },
      { name: "Clean Architecture", level: "Advanced", tags: ["SOLID", "Design Patterns"] },
      { name: "CI/CD Pipelines", level: "Advanced", tags: ["Automated Lint & Deploy"] },
    ],
  },
];

export const featuredProjects = [
  {
    id: "petswave",
    title: "PetsWave - E-Commerce Mobile & Backend",
    category: "Full-Stack",
    badge: "Full-Stack & Mobile",
    summary: "Full-scale pet e-commerce mobile application and high-performance microservice backend. Empowers pet parents to discover, order, and track supplies seamlessly with real-time cart synchronization.",
    techStack: ["React Native", "Expo", "NestJS", "MongoDB", "MinIO", "JWT"],
    github: "https://github.com/mohmmedlahlali20/PetsWave_mobile_app",
    secondaryGithub: "https://github.com/mohmmedlahlali20/PETSWAVE",
    liveDemo: "https://github.com/mohmmedlahlali20/PetsWave_mobile_app",
    achievements: [
      "Engineered decoupled NestJS backend with MinIO self-hosted S3-compatible asset storage.",
      "Integrated secure JWT auth, product catalog caching, and smooth checkout animations on React Native Expo.",
      "Optimized query performance on MongoDB indexing, lowering API response times by 35%."
    ],
  },
  {
    id: "p2p-discord",
    title: "P2P Stream & Voice Hub (Discord Clone)",
    category: "Real-Time",
    badge: "WebRTC & WebSockets",
    summary: "Real-time communication platform enabling peer-to-peer audio/video streaming and low-latency instant messaging. Engineered with resilient connection negotiation and channel management.",
    techStack: ["React", "Node.js", "WebRTC", "Socket.io", "Tailwind CSS"],
    github: "https://github.com/mohmmedlahlali20/discord",
    liveDemo: "https://github.com/mohmmedlahlali20/discord",
    achievements: [
      "Built mesh P2P WebRTC media pipeline with STUN/TURN fallback for reliable peer connectivity.",
      "Implemented Socket.io event-driven signaling channels for real-time presence and message delivery.",
      "Delivered a responsive Discord-inspired dark UI with custom voice activity indicators."
    ],
  },
  {
    id: "cin-manager",
    title: "Cin-Manager & Cinimaty Careers",
    category: "Full-Stack",
    badge: "Next.js & NestJS",
    summary: "Comprehensive cinema screening booking engine and recruitment platform. Features an interactive 2D seat reservation grid with real-time seat lockouts and role-based managerial dashboards.",
    techStack: ["Next.js", "NestJS", "MongoDB", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/mohmmedlahlali20/Cin-Manager-FullStack-",
    secondaryGithub: "https://github.com/mohmmedlahlali20/Cinimaty-Careers-FullStack-",
    liveDemo: "https://github.com/mohmmedlahlali20/Cin-Manager-FullStack-",
    achievements: [
      "Constructed interactive seat selection canvas preventing race-condition double bookings.",
      "Engineered NestJS REST APIs with secondary DB support for recruitment and applicant tracking.",
      "Built multi-role authentication (Viewer, Ticket Inspector, Theater Admin) with granular permissions."
    ],
  },
  {
    id: "warehouse-management",
    title: "Warehouse Management System",
    category: "Mobile",
    badge: "React Native Mobile",
    summary: "Enterprise inventory tracking and stock optimization mobile app. Empowers warehouse crews to audit pallets, manage incoming/outgoing logistics, and monitor threshold alerts in real time.",
    techStack: ["React Native", "TypeScript", "Node.js", "REST APIs", "Tailwind"],
    github: "https://github.com/mohmmedlahlali20/Warehouse_Management",
    liveDemo: "https://github.com/mohmmedlahlali20/Warehouse_Management",
    achievements: [
      "Streamlined warehouse barcode workflow, cutting stock reconciliation time by 40%.",
      "Designed offline-first local state caching that syncs automatically when connection restores.",
      "Built inventory movement analytics and automated alert triggers for low-stock SKUs."
    ],
  },
  {
    id: "event-manager",
    title: "Event Manager Distributed Platform",
    category: "Full-Stack",
    badge: "Enterprise SaaS",
    summary: "Multi-tenant event scheduling and ticket management platform for virtual and in-person conferences. Features QR-code badge verification, attendee RSVPs, and live metric tracking.",
    techStack: ["React", "NestJS", "TypeScript", "PostgreSQL", "JWT", "Docker"],
    github: "https://github.com/mohmmedlahlali20/Systeme_Gestion_event",
    liveDemo: "https://github.com/mohmmedlahlali20/Systeme_Gestion_event",
    achievements: [
      "Engineered cryptographic QR code ticketing system for instant on-site check-in verification.",
      "Implemented PostgreSQL relational schema with transactional seat allocations and attendee records.",
      "Containerized full stack using Docker Compose for reproducible local and staging environments."
    ],
  },
  {
    id: "photoshare",
    title: "PhotoShare Mobile App",
    category: "Mobile",
    badge: "React Native & Firebase",
    summary: "Community-driven photo sharing application with real-time feeds, instant reactions, threaded discussions, and profile customization optimized for quick media caching.",
    techStack: ["React Native", "Firebase Auth", "Cloud Firestore", "Cloud Storage"],
    github: "https://github.com/mohmmedlahlali20/PhotoShare",
    liveDemo: "https://github.com/mohmmedlahlali20/PhotoShare",
    achievements: [
      "Engineered instant client-side image compression and background upload pipeline.",
      "Implemented real-time reactive feed updates via Cloud Firestore snapshot listeners.",
      "Added social engagement features including like counters, bookmarked collections, and follower feeds."
    ],
  },
];

export const professionalExperiences = [
  {
    id: "telus",
    role: "Software Engineer / Développeur Full Stack",
    company: "TELUS CRC MAROC",
    location: "Casablanca, Morocco",
    duration: "Janv. 2026 - Sept. 2026",
    period: "Janv. 2026 - Sept. 2026 (9 mos)",
    type: "Full-Time",
    projects: [
      {
        name: "eSurvey.cx",
        subtitle: "CX & Automated Feedback Platform",
        bullets: [
          "Architected and deployed an automated customer survey and feedback collection engine integrated with the WhatsApp Business API (via 360Dialog).",
          "Built real-time analytics dashboards to track key customer engagement metrics and satisfaction scores.",
        ],
      },
      {
        name: "dataScrapper",
        subtitle: "Ingestion Pipeline & Data Aggregation",
        bullets: [
          "Engineered a high-throughput distributed scraping engine in Python extracting 75,000+ automotive listings (Avito, Wandaloo, Moteur.ma).",
          "Implemented automated data cleaning, deduplication, and normalization pipelines, reducing overall system latency by 40%.",
        ],
      },
    ],
  },
  {
    id: "arias",
    role: "Développeur Full Stack",
    company: "ARIAS TECH SOLUTIONS",
    location: "Marrakech, Morocco",
    duration: "Juil. 2025 - Déc. 2025",
    period: "Juil. 2025 - Déc. 2025 (6 mos)",
    type: "Full-Time",
    projects: [
      {
        name: "UXV Fleet Management",
        subtitle: "Drone & Autonomous Vehicle Telemetry Supervision",
        bullets: [
          "Designed and developed a real-time telemetry supervision platform for mission-critical UXV fleet operations.",
          "Implemented the interactive operator dashboard (Next.js, NestJS, Supabase) with instant alert webhooks and real-time mission status tracking.",
        ],
      },
      {
        name: "HAB Tracking",
        subtitle: "Airspace Surveillance & No-Fly Zones",
        bullets: [
          "Engineered a critical flight authorization and automated intrusion detection engine for restricted airspaces.",
          "Delivered high-performance geospatial rendering using Mapbox GL JS and GeoJSON to map authorized aerial corridors and no-fly zones.",
        ],
      },
    ],
  },
];

export const educationData = [
  {
    degree: "Développement Web Full Stack",
    institution: "YouCode (UM6P)",
    location: "Safi, Morocco",
    duration: "2023 - 2025",
    description: "Project-based active pedagogy, focusing on production-grade web applications, agile practices, and full-stack software architecture.",
    tags: ["Full-Stack Architecture", "Agile & Scrum", "React / Next.js", "NestJS", "Clean Code"],
  },
  {
    degree: "Baccalauréat Sciences & Technologies Électriques",
    institution: "Lycée Charif El Idrissi",
    location: "Safi, Morocco",
    duration: "2022 - 2023",
    description: "Foundation in electrical systems, algorithmic logic, physics, and applied technological sciences.",
    tags: ["Electrical Sciences", "Logic Systems", "Engineering Foundations"],
  },
];

export const certificationsData = [
  {
    id: "typescript",
    title: "TypeScript 5+ Fundamentals, v4",
    issuer: "Frontend Masters",
    instructor: "Mike North",
    date: "Mar 29, 2025",
    duration: "5h 12m",
    badge: "Strict Typing & Generics",
    image: "/certificates/cert-typescript.png",
  },
  {
    id: "nextjs",
    title: "Next.js Fundamentals, v4",
    issuer: "Frontend Masters",
    instructor: "Scott Moss",
    date: "Jun 9, 2025",
    duration: "6h 41m",
    badge: "App Router & SSR",
    image: "/certificates/cert-nextjs.png",
  },
  {
    id: "fullstack",
    title: "Full Stack for Front-End Engineers, v3",
    issuer: "Frontend Masters",
    instructor: "Jem Young",
    date: "Jun 25, 2025",
    duration: "8h 12m",
    badge: "Servers, HTTP & Architecture",
    image: "/certificates/cert-fullstack.png",
  },
  {
    id: "reactnative",
    title: "React Native, v3",
    issuer: "Frontend Masters",
    instructor: "Kadi Kraman",
    date: "Apr 3, 2025",
    duration: "4h 35m",
    badge: "Cross-Platform Mobile",
    image: "/certificates/cert-reactnative.png",
  },
  {
    id: "redux",
    title: "Redux Fundamentals (feat. React)",
    issuer: "Frontend Masters",
    instructor: "Steve Kinney",
    date: "May 1, 2025",
    duration: "4h 41m",
    badge: "Predictable State Management",
    image: "/certificates/cert-redux.png",
  },
];

// Backward-compatible export
export const experienceData = professionalExperiences;

export const principles = [
  {
    title: "Performance & Scalability First",
    description: "Every line of code is optimized for minimal bundle weight, rapid initial paint, and resilient backend throughput under load.",
    icon: "Zap",
  },
  {
    title: "Clean & Maintainable Architecture",
    description: "Advocate of modular structures, strong typing, reusable design systems, and readable code that stands the test of time.",
    icon: "Layers",
  },
  {
    title: "End-to-End Product Ownership",
    description: "From database modeling and API contracts to pixel-perfect UI and deployment pipelines, ensuring quality at every layer.",
    icon: "ShieldCheck",
  },
];
