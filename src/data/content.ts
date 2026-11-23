export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  shortDesc: string;
  iconName: string;
  accentColor: string;
  features: string[];
  deliverables: string[];
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  badge?: string;
  iconName: string;
}

export interface GoalItem {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export interface FuturePlanItem {
  step: string;
  title: string;
  description: string;
  tag: string;
}

export const BRAND_INFO = {
  name: "VISIONARY WOMEN",
  tagline: "We Rise by Lifting Others",
  eyebrow: "WOMEN-LED PROFESSIONAL SERVICES",
  phone: "+91 9408967987",
  email: "visionarywomen1809@gmail.com",
  locations: ["Surat", "Pune"],
  address: "408-415, Homeland City, Piplod, Surat 395007",
  combinedExperience: "125+ Years",
  founder: {
    name: "CA Crispee Morakhiya",
    title: "Founder & Chartered Accountant",
    quote: "My journey began with a passion for business, balancing CA and CS studies. Beyond numbers, I mentor at ICAI Surat, publish on Tax Guru, and empower people to reach their potential, approaching every challenge with dedication and resilience.",
    visionQuote: "A vision of a dynamic, global, women-led platform that will be recognized as one of the top 4 CA firms in India.",
    bioDetails: [
      "Chartered Accountant & Company Secretary qualification background",
      "Active Mentor at ICAI Surat Chapter",
      "Published Author & Thought Leader on Tax Guru",
      "Pioneer in remote-first women financial empowerment in India"
    ],
    image: "/assets/founder-crispee-morakhiya.png"
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "accounting",
    category: "Accounting Services",
    title: "Accounting & Financial Operations",
    shortDesc: "End-to-end bookkeeping, payroll management, and institutional office support designed for scaling enterprises.",
    iconName: "Calculator",
    accentColor: "#47C8BF",
    features: [
      "Bookkeeping & Ledger Maintenance",
      "Payroll Processing & HR Support",
      "Office Support & Invoicing Management",
      "Monthly & Quarterly Financial Reporting"
    ],
    deliverables: [
      "Bank Reconciliation Statements",
      "Real-time Cloud Bookkeeping",
      "Compliant Salary Slip Generations",
      "Vendor & Accounts Receivable Auditing"
    ]
  },
  {
    id: "compliance",
    category: "Secretarial Compliance",
    title: "Corporate & Secretarial Governance",
    shortDesc: "Comprehensive ROC compliance, entity registration, board governance, and statutory secretarial filings.",
    iconName: "Building2",
    accentColor: "#FF8F00",
    features: [
      "Corporate & Secretarial Compliance",
      "Business Setup Services & Incorporation",
      "All Types of ROC Compliance & Filings",
      "Director KYC & Annual Return Filings"
    ],
    deliverables: [
      "Private & Public Limited Incorporation",
      "LLP Formations & Partnership Deeds",
      "Statutory Registers Maintenance",
      "Share Transfer & Capital Structuring"
    ]
  },
  {
    id: "taxation",
    category: "Tax, Regulatory & Advisory",
    title: "Taxation & Institutional Auditing",
    shortDesc: "Strategic direct and indirect tax management, GST reconciliation, audit readiness, assessments, and appeals.",
    iconName: "Scale",
    accentColor: "#FFDE59",
    features: [
      "Income Tax, GST and TDS Filing",
      "PAN, TAN, 12A, 80G and GST Formations",
      "PT, PF and ESIC Compliance",
      "Tax Planning, Advisory & Due Diligence",
      "Advance Rulings, Assessments and Appeals",
      "Tax, GST, Internal, Statutory, Stock, Bank & System Audits"
    ],
    deliverables: [
      "Comprehensive GST Input Tax Credit Audits",
      "Direct Tax Dispute Representation",
      "Trust & NGO 12A / 80G Registrations",
      "Multi-jurisdictional Tax Optimizations"
    ]
  },
  {
    id: "advisory",
    category: "Financial & Business Advisory",
    title: "Strategic Advisory & Virtual CFO",
    shortDesc: "Board-level virtual CFO services, complex financial modeling, project funding, and Ind AS technical advisory.",
    iconName: "Briefcase",
    accentColor: "#47C8BF",
    features: [
      "Financial Modelling & Forecasting",
      "Management & Virtual CFO Services",
      "Project Finance & Bank Project Reports (CMA)",
      "Startup Advisory & Venture Consultancy",
      "Ind AS Implementation & Advisory"
    ],
    deliverables: [
      "5-Year Dynamic Financial Projections",
      "Unit Economics & Cash Burn Optimization",
      "Debt Syndication & Bank Term Loan Dossiers",
      "Board Deck & Investor Financial Preparation"
    ]
  },
  {
    id: "legal",
    category: "Legal & Regulatory Services",
    title: "Legal, RERA & Regulatory Defense",
    shortDesc: "Direct tax litigation, RERA real estate adherence, FEMA foreign exchange compliance, and IP protection.",
    iconName: "Gavel",
    accentColor: "#FF8F00",
    features: [
      "Litigation under Direct Taxation",
      "RERA, FEMA, IEC and ICEGATE Services",
      "Drafting of Commercial Deeds & Agreements",
      "Trademark and Copyright Registrations",
      "Cross-border Trade & Regulatory Clearances"
    ],
    deliverables: [
      "High-stakes CIT(Appeals) & ITAT Representation",
      "Shareholders' Agreements & NDAs",
      "FDI / ODI Reporting via RBI Portals",
      "Intellectual Property Trademark Protection"
    ]
  },
  {
    id: "digital",
    category: "Branding & Digital Services",
    title: "Corporate Identity & Executive Digital",
    shortDesc: "Executive branding, LinkedIn authority building, corporate presentations, and strategic content creation.",
    iconName: "Megaphone",
    accentColor: "#FFDE59",
    features: [
      "Executive & Corporate Branding Services",
      "Social Media Marketing for B2B & Firms",
      "Authoritative Content Writing & Thought Leadership",
      "Executive LinkedIn Profile Creation",
      "Corporate Pitch Decks & Company Profiles",
      "Executive Resume Making Services"
    ],
    deliverables: [
      "Polished Corporate Capability Statements",
      "C-Suite Personal Branding Strategies",
      "Whitepapers & Industry Analysis Articles",
      "Investor-Ready Pitch Decks"
    ]
  }
];

export const BENEFITS_DATA: BenefitItem[] = [
  {
    id: "exp",
    title: "Women-Led Expertise",
    badge: "125+ Years",
    description: "Led by seasoned qualified women professionals with 125+ years of combined experience across corporate finance and advisory.",
    iconName: "Users"
  },
  {
    id: "presence",
    title: "Pan-India Presence",
    badge: "Surat & Pune Hubs",
    description: "Serving marquee enterprises, startups, and CA firms across India with dual physical hubs and remote execution.",
    iconName: "MapPin"
  },
  {
    id: "track",
    title: "Proven Track Record",
    badge: "Precision & Speed",
    description: "Delivering institutional-grade services with immaculate precision, strict deadline adherence, and zero tolerance for error.",
    iconName: "Award"
  },
  {
    id: "personalized",
    title: "Personalized Service",
    badge: "Dedicated Lead",
    description: "Every client gets direct access to senior professionals who tailor solutions to their unique business ecosystem.",
    iconName: "UserCheck"
  },
  {
    id: "guidance",
    title: "Strategic Guidance",
    badge: "Proactive Advisory",
    description: "We don't merely crunch numbers; we provide proactive strategic counsel that shapes high-impact leadership decisions.",
    iconName: "Compass"
  },
  {
    id: "reliable",
    title: "Reliable & Efficient",
    badge: "Ironclad NDAs",
    description: "Trustworthy service delivery with rigorous confidentiality protocols maintained through binding NDAs and secure data systems.",
    iconName: "ShieldCheck"
  },
  {
    id: "innovative",
    title: "Innovative Solutions",
    badge: "Growth Catalyst",
    description: "Forward-thinking methodologies and modern technological toolchains tailored to unlock business scalability.",
    iconName: "Lightbulb"
  },
  {
    id: "technical",
    title: "Technical Expertise",
    badge: "CA / CS / CMA",
    description: "In-depth, up-to-the-minute mastery of Indian accounting standards, GST case laws, direct tax codes, and ROC regulations.",
    iconName: "FileCheck2"
  }
];

export const GOALS_DATA: GoalItem[] = [
  {
    number: "01",
    title: "Establish Strong Industry Collaborations",
    description: "Build long-term partnerships with leading CA firms, global accounting practices, and commercial industries to drive high-value outsourcing projects and establish a steady stream of flexible opportunities for women professionals.",
    highlight: "Creating sustainable outsourcing pipelines for certified professionals"
  },
  {
    number: "02",
    title: "Provide Equal Opportunities for Professional Growth",
    description: "Create an empowering launchpad where women professionals can access modern career advancement tools, executive mentorship, and continuous learning resources to excel in their chosen financial disciplines.",
    highlight: "Equal access to marquee engagements without compromising personal life"
  },
  {
    number: "03",
    title: "Build a Thriving Community",
    description: "Develop an authentic, supportive sisterhood offering women in the profession emotional backing, upskilling workshops, and technical guidance while promoting cross-city networking and best-practice exchanges.",
    highlight: "Mentorship, peer support, and holistic career resilience"
  }
];

export const FUTURE_PLAN_DATA: FuturePlanItem[] = [
  {
    step: "01",
    title: "Expanding the Network",
    description: "Partnering with global CA firms, overseas consulting practices, and diverse industry verticals to create international outsourcing opportunities for women professionals.",
    tag: "Global Footprint"
  },
  {
    step: "02",
    title: "Skills Development Programs",
    description: "Rolling out specialized training curricula in international taxation, algorithmic audit, advanced financial modeling, and AI-assisted compliance.",
    tag: "Future-Ready Talent"
  },
  {
    step: "03",
    title: "Collaborate with ICAI, ICSI & ICWAI",
    description: "Establishing formal strategic alliances with premier statutory bodies (ICAI, ICSI, and ICWAI) to integrate on-the-go digital networking and career returnee programs.",
    tag: "Institutional Alliance"
  },
  {
    step: "04",
    title: "Advancing Women in Leadership",
    description: "Empowering qualified women CAs, CSs, and CMAs to ascend into Board Member, Independent Director, and Virtual CFO leadership roles across India Inc.",
    tag: "C-Suite Impact"
  }
];
