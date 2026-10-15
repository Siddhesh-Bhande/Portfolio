export const projectsData = [
  {
    id: "sketch-party",
    title: "sketch-party: Real-Time Multiplayer Canvas Game",
    subtitle: "Low-Latency WebSockets & React 19",
    thumbnail: "/images/projects/sketch_party.png",
    description:
      "A high-concurrency multiplayer drawing and guessing party game delivering sub-50ms synchronized canvas strokes across concurrent client sessions.",
    problem:
      "Real-time collaborative canvas applications often suffer from stroke jitter, packet serialization overhead, and room desynchronization during high concurrency.",
    solution:
      "Architected an asynchronous Python FastAPI backend with native WebSockets for room orchestration and turn loops. Built the client in React 19 with direct HTML5 Canvas vector smoothing and delta compression.",
    impact:
      "Maintained sub-50ms synchronized stroke delivery across concurrent participants with zero frame drops and 100% automated test coverage.",
    technologies: [
      "React 19",
      "FastAPI",
      "WebSockets",
      "TypeScript",
      "Python",
      "HTML5 Canvas",
      "Docker"
    ],
    tags: ["Real-Time", "WebSockets", "Full Stack", "React 19"],
    featured: true,
    github: "https://github.com/Siddhesh-Bhande/sketch-party",
    hasLiveDemo: false,
    pythonProject: true
  },
  {
    id: "desertcharge",
    title: "desertcharge: EV Charging Desert Locator",
    subtitle: "Spatial GIS Analytics & Municipal Mapping",
    thumbnail: "/images/projects/desertcharge.png",
    description:
      "An interactive spatial GIS analytics engine identifying electric vehicle charging deserts and infrastructure dead zones across the US Southwest.",
    problem:
      "EV route planning tools identify existing stations but fail to analyze spatial coverage deficits or compute infrastructure gap scores over regional corridors.",
    solution:
      "Built a spatial analytics backend executing real PostGIS queries (buffer polygons, corridor density filters, and gap scoring) over municipal datasets, displayed via an interactive Leaflet and React client.",
    impact:
      "Processed thousands of geospatial nodes in sub-second queries, enabling spatial gap identification without relying on synthetic or mock data.",
    technologies: [
      "Python",
      "FastAPI",
      "PostGIS",
      "Leaflet",
      "React",
      "TypeScript",
      "Docker"
    ],
    tags: ["Spatial GIS", "PostGIS", "Python", "Mapping"],
    featured: true,
    github: "https://github.com/Siddhesh-Bhande/desertcharge",
    hasLiveDemo: false,
    pythonProject: true
  },
  {
    id: "retirement-simulator",
    title: "Monte Carlo Retirement Simulation Engine",
    subtitle: "High-Performance Web Workers & Canvas Dashboard",
    thumbnail: "/images/projects/retirement_simulator.png",
    description:
      "A compute-heavy stochastic financial simulator modeling 10,000 parallel market trajectories directly in the browser with canvas-optimized percentile fan charts.",
    problem:
      "Simulating 10,000 stochastic multi-decade market realities freezes the JavaScript UI thread, causing sluggish interactions and broken framerates.",
    solution:
      "Offloaded all stochastic matrix calculations to isolated Web Workers. Rendered thousands of path percentiles via uPlot Canvas rendering, with debounced inputs managed by Zustand.",
    impact:
      "Maintained butter-smooth 60fps animations and fluid slider responsiveness during continuous recalculations, achieving a 98+ Lighthouse performance score.",
    technologies: [
      "TypeScript",
      "React",
      "Web Workers",
      "uPlot",
      "Canvas API",
      "Zustand",
      "Playwright"
    ],
    tags: ["Data Visualization", "Web Workers", "Financial Modeling", "TypeScript"],
    featured: true,
    github: "https://github.com/Siddhesh-Bhande/retirement-simulator",
    liveDemo: "https://siddhesh-bhande.github.io/retirement-simulator/",
    hasLiveDemo: true,
    externalOnly: true
  },
  {
    id: "career-collab",
    title: "Career Collab: Recruitment & Talent Platform",
    subtitle: "Enterprise Talent Intake & Admin Control Center",
    thumbnail: "/images/projects/career_collab.png",
    description:
      "A dual-sided recruitment management platform featuring candidate application pipelines, employer intake, and role-based administrative analytics.",
    problem:
      "Recruiting workflows require synchronized candidate intake, employer requisitions, and placement metrics without complex backend server dependencies.",
    solution:
      "Engineered with React 19, TypeScript, and Vite. Designed an administrative dashboard managing full job CRUD, applicant stage tracking, and candidate conversion analytics.",
    impact:
      "Streamlined candidate tracking across multi-stage pipelines with zero-configuration client-side routing deployed automatically via GitHub Actions.",
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "React Router v7",
      "Tailwind CSS",
      "GitHub Actions"
    ],
    tags: ["Full Stack", "React 19", "TypeScript", "Recruitment"],
    featured: true,
    github: "https://github.com/Siddhesh-Bhande/career-collab-website",
    liveDemo: "https://siddhesh-bhande.github.io/career-collab-website/",
    hasLiveDemo: true,
    externalOnly: true
  },
  {
    id: "token-reducer",
    title: "AI Token Reducer",
    subtitle: "Cost-Saving NLP Tool for Chatbot APIs",
    thumbnail: "/images/projects/token_reducer.png",
    description:
      "A practical tool that reduces token count in text through natural language processing techniques, saving costs when using AI chatbot services like GPT-3.5 and GPT-4.",
    problem:
      "AI language model costs are directly proportional to token usage. Verbose text leads to higher API costs, especially when working with large volumes of text.",
    solution:
      "Developed a Python-based solution using NLTK and transformers to optimize text by removing stopwords and applying lemmatization. The tool calculates potential cost savings while preserving the core meaning of the text.",
    impact:
      "Reduces token count by 20-40% on average, translating to significant cost savings for businesses and developers who frequently use AI language model APIs.",
    technologies: [
      "Python",
      "NLTK",
      "Tiktoken",
      "Natural Language Processing",
      "React",
      "FastAPI",
    ],
    tags: ["Python", "NLP", "Cost Optimization"],
    featured: true,
    github: "https://github.com/Siddhesh-Bhande",
    liveDemo: "/token-reducer-component",
    pythonProject: true,
    hasLiveDemo: true,
  },
  {
    id: "energy-explorer",
    title: "Energy Explorer Dashboard",
    subtitle: "Interactive Data Visualization Platform",
    thumbnail: "/images/projects/energy_explorer.png",
    description:
      "A comprehensive dashboard that provides interactive visualizations of energy consumption and renewable energy generation data across different states and sources.",
    problem:
      "Understanding energy consumption patterns and renewable energy contributions is complex due to fragmented data sources and lack of intuitive visualization tools.",
    solution:
      "Developed a user-friendly dashboard with interactive charts and filters that allows users to explore energy data by state, source, and time period. The platform includes user authentication for saving personalized filter preferences.",
    impact:
      "Enables stakeholders to make data-driven decisions regarding energy policy and investments by providing clear visualizations of consumption trends and renewable energy adoption.",
    technologies: [
      "React.js",
      "FastAPI",
      "MySQL",
      "Data Visualization",
      "JWT Authentication",
      "Tailwind CSS",
    ],
    tags: ["Data Visualization", "Full Stack", "Energy"],
    featured: true,
    github: "https://github.com/Siddhesh-Bhande/EcoMeter_Analytics",
    hasLiveDemo: true,
    liveDemo: "/energy-explorer-component",
  },
  {
    id: "smart-health",
    title: "Intelligent Health Record System",
    subtitle: "Clinical Companion with ML Risk Modeling & Audit Hashing",
    thumbnail: "/images/projects/medical-health-system.jpg",
    description:
      "A comprehensive health analytics platform that leverages AI to transform raw medical telemetry into actionable insights with cryptographic audit hashing.",
    problem:
      "Healthcare data is often siloed and difficult to interpret, leading to missed opportunities for early intervention and lack of tamper-evident change logs.",
    solution:
      "Developed a modular Streamlit application with predictive cardiovascular risk modeling, NLP for doctor note clinical extraction, and SHA-256 cryptographic logging for health record mutations.",
    impact:
      "Enables data-driven healthcare decisions through visual analytics, early risk alerts, and verifiable medical audit trails.",
    technologies: [
      "Python",
      "Streamlit",
      "Machine Learning",
      "NLP",
      "Data Visualization",
      "Blockchain Auditing",
      "Pandas",
    ],
    tags: ["Healthcare", "AI/ML", "Data Analytics"],
    featured: true,
    github: "https://github.com/Siddhesh-Bhande/Intelligent-Health-Record-System",
    hasLiveDemo: false,
    pythonProject: true,
  },
  {
    id: "p2p-dfs",
    title: "Secured P2P Distributed File System",
    subtitle: "Hybrid Cryptographic Storage Platform in Java",
    thumbnail: "/images/projects/p2p-file-exchange.jpg",
    description:
      "A secure peer-to-peer distributed file system implemented in Java utilizing hybrid AES/RSA cryptography, master indexing, and peer storage nodes.",
    problem:
      "Centralized cloud file storage creates single points of failure and surveillance risks, while unstructured P2P systems lack access controls.",
    solution:
      "Designed and developed a P2P distributed file storage network using Java. Integrates AES-256 for symmetric chunk encryption and RSA for public key authentication handshakes.",
    impact:
      "Guaranteed confidentiality and integrity across decentralized peer nodes with master-tokenized access controls and latency benchmarks.",
    technologies: [
      "Java 11",
      "Distributed Systems",
      "AES-256",
      "RSA Encryption",
      "Socket Programming",
      "P2P Networking",
    ],
    tags: ["Security", "Java", "Distributed Systems", "Networking"],
    featured: true,
    github: "https://github.com/Siddhesh-Bhande/CMSC-626-Secured-Peer-to-Peer-DFS-",
    hasLiveDemo: false,
  },
  {
    id: "heart-disease-ml",
    title: "Heart Disease Prediction & Prevention System",
    subtitle: "Supervised Risk Classification Pipeline",
    thumbnail: "/images/projects/heart-attack-detection.jpg",
    description:
      "A supervised machine learning pipeline evaluating multiple classification algorithms for early detection and risk stratification of cardiovascular heart disease.",
    problem:
      "Heart disease remains a leading cause of death globally. Early detection is crucial, but clinical telemetry requires high-precision false-negative mitigation.",
    solution:
      "Developed an ML pipeline benchmarking Random Forest, Support Vector Machines, and Gradient Boosting on clinical datasets with SMOTE class imbalance compensation.",
    impact:
      "Achieved high sensitivity in cardiovascular risk classification across 3-fold cross-validation with ROC-AUC curve evaluation.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],
    tags: ["Machine Learning", "Healthcare", "Python"],
    featured: false,
    github: "https://github.com/Siddhesh-Bhande/MachineLearningProject",
    hasLiveDemo: false,
    pythonProject: true,
  },
  {
    id: "fraud-detection",
    title: "Fraudulent Job Detection System",
    subtitle: "AI-Powered Online Recruitment Scam Classifier",
    thumbnail: "/images/projects/fraudulent-job-detection.jpg",
    description:
      "An NLP and supervised machine learning classification pipeline identifying deceptive and fraudulent employment advertisements across recruitment boards.",
    problem:
      "The surge in online recruitment platforms has led to a rise in sophisticated phishing and fraudulent job listings targeting job seekers.",
    solution:
      "Implemented TF-IDF text feature vectorization over job descriptions, company profiles, and requirements, training ensemble classifiers to detect scam signals.",
    impact:
      "Achieved 92%+ accuracy in identifying fraudulent postings across 18,000+ job records with high precision-recall balance.",
    technologies: ["Python", "NLP", "Scikit-learn", "TF-IDF", "Pandas", "Matplotlib"],
    tags: ["Machine Learning", "NLP", "Python"],
    featured: false,
    github: "https://github.com/Siddhesh-Bhande/Fraulent_Job_Posting_Detection",
    hasLiveDemo: false,
    pythonProject: true,
  },
  {
    id: "cartridge-calc",
    title: "Cartridge Waste & Footprint Calculator",
    subtitle: "Industrial Environmental Modeling Tool",
    thumbnail: "/images/projects/cartridge_calc.png",
    description:
      "A zero-dependency client-side calculator modeling cumulative plastic displacement, decomposition trajectories, and municipal recycling economics.",
    problem:
      "Commercial facilities discard millions of consumable cartridges annually without quantifying cumulative polymer mass or lifecycle disposal costs.",
    solution:
      "Built a mathematical model calculating landfill volume displacement and CO2 emissions in pure vanilla JavaScript and CSS custom properties.",
    impact:
      "Delivered instant, client-side computations with zero external dependencies and sub-100ms load times.",
    technologies: ["JavaScript", "HTML5", "Vanilla CSS", "Green Suite Theme"],
    tags: ["Full Stack", "JavaScript", "Sustainability"],
    featured: false,
    github: "https://github.com/Siddhesh-Bhande/cartridge-waste-calc",
    liveDemo: "https://siddhesh-bhande.github.io/cartridge-waste-calc/",
    hasLiveDemo: true,
    externalOnly: true,
  },
  {
    id: "dwp-ux-redesign",
    title: "UI/UX Redesign for Child Maintenance Web App",
    subtitle: "Government Public Service Accessibility Overhaul",
    thumbnail: "/images/projects/child-maintenance-app.jpg",
    description:
      "A complete UI/UX and accessibility overhaul for the UK Department for Work and Pensions' child maintenance public web application.",
    problem:
      "The legacy child maintenance web interface had complex user flows, high abandonment rates, and accessibility barriers affecting service delivery.",
    solution:
      "Led a strategic UI/UX redesign streamlining information architecture, form step progression, keyboard focus traps, and WCAG AA accessibility standards.",
    impact:
      "Enhanced public service delivery for 846,000 children and reduced average user task completion time by 8 minutes.",
    technologies: [
      "React.js",
      "UX Design",
      "WCAG 2.2 AA",
      "Accessibility Standards",
      "Responsive Design",
    ],
    tags: ["UX/UI", "React", "Government", "Accessibility"],
    featured: true,
    github: "https://github.com/Siddhesh-Bhande",
    hasLiveDemo: false,
  },
  {
    id: "hostel-management",
    title: "Hostel Management System",
    subtitle: "Full-Stack Dormitory Administration Platform",
    thumbnail: "/images/projects/hostel_system.png",
    description:
      "A full-stack campus accommodation web application for student room allocations, booking verification, and administrative billing.",
    problem:
      "Campus housing departments require synchronized room inventory tracking, resident records, and payment logs without manual paperwork.",
    solution:
      "Developed a relational PHP and MySQL web application with role-based access control for students and administrators.",
    impact:
      "Automated room assignment status tracking, vacancy reporting, and resident record lookups across dormitories.",
    technologies: ["PHP", "MySQL", "Relational Database", "Web Development"],
    tags: ["Full Stack", "PHP", "MySQL", "Database"],
    featured: false,
    github: "https://github.com/Siddhesh-Bhande/Hostel-Management-System",
    hasLiveDemo: false,
  }
];
