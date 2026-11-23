export interface MemoryPhoto {
  id: string;
  src: string;
  title: string;
  category: 'events' | 'community' | 'team' | 'workshops';
  location: string;
  caption: string;
}

export const MEMORIES_PHOTOS: MemoryPhoto[] = [
  {
    id: "mem-1",
    src: "/assets/memories/IMG20250719105458.jpg",
    title: "Pune Professional Summit & Keynote",
    category: "events",
    location: "Pune Executive Hub",
    caption: "Senior Chartered Accountants and delegates convening for the Visionary Women national expansion symposium."
  },
  {
    id: "mem-2",
    src: "/assets/memories/IMG20250719151818.jpg",
    title: "Women Leadership Panel Discussion",
    category: "community",
    location: "Conference Hall",
    caption: "Panelists addressing remote-first career architecture and flexible advisory opportunities for certified professionals."
  },
  {
    id: "mem-3",
    src: "/assets/memories/MONIKA___SWATI___1_.jpeg",
    title: "Executive Members Spotlight — Monika & Swati",
    category: "team",
    location: "Pune Operations Hub",
    caption: "Certified professionals driving core compliance, financial modeling, and outsourced client advisory."
  },
  {
    id: "mem-4",
    src: "/assets/memories/IMG20250719152302.jpg",
    title: "Strategic Financial Advisory Workshop",
    category: "workshops",
    location: "Seminar Room A",
    caption: "Hands-on masterclass on Ind AS implementation, CMA reporting, and bank credit syndication."
  },
  {
    id: "mem-5",
    src: "/assets/memories/IMG20250719152400.jpg",
    title: "Visionary Women Community Assembly",
    category: "community",
    location: "Pune Chapter",
    caption: "Empowering qualified women CAs, CSs, and CMAs to build cohesive peer-mentorship networks."
  },
  {
    id: "mem-6",
    src: "/assets/memories/IMG20250719152720.jpg",
    title: "Institutional Collaboration Dialogue",
    category: "events",
    location: "Convention Hall",
    caption: "Building sustainable outsourcing pipelines with prominent CA practices and industry leaders."
  },
  {
    id: "mem-7",
    src: "/assets/memories/IMG20250719152826.jpg",
    title: "Career Returnee Mentorship Session",
    category: "workshops",
    location: "Interactive Suite",
    caption: "Mentorship guidance for women re-entering high-stakes finance after career sabbaticals."
  },
  {
    id: "mem-8",
    src: "/assets/memories/IMG20250719152929.jpg",
    title: "National Milestone Celebration",
    category: "events",
    location: "Grand Ballroom",
    caption: "Celebrating platform growth, pan-India client engagements, and our Top-4 CA firm aspiration."
  },
  {
    id: "mem-9",
    src: "/assets/memories/MONIKA___SWATI___2_.jpeg",
    title: "Professional Fellowship & Co-Leadership",
    category: "team",
    location: "Corporate Suite",
    caption: "Dedicated leadership driving daily tax filings, secretarial governance, and audit precision."
  },
  {
    id: "mem-10",
    src: "/assets/memories/IMG20250719153200.jpg",
    title: "Taxation & Regulatory Masterclass",
    category: "workshops",
    location: "Training Center",
    caption: "Deep dive into recent GST case laws, advance rulings, and dispute defense strategies."
  },
  {
    id: "mem-11",
    src: "/assets/memories/IMG20250719153341.jpg",
    title: "Peer Networking & Best Practice Exchange",
    category: "community",
    location: "Networking Lounge",
    caption: "Fostering authentic sisterhood and professional collaboration among female finance specialists."
  },
  {
    id: "mem-12",
    src: "/assets/memories/IMG20250719153527.jpg",
    title: "Women in Board Leadership Forum",
    category: "events",
    location: "Executive Boardroom",
    caption: "Advancing certified women CAs and CSs into independent director and Virtual CFO appointments."
  },
  {
    id: "mem-13",
    src: "/assets/memories/IMG20250718135705.jpg",
    title: "Surat & Pune Joint Delegate Session",
    category: "events",
    location: "Inter-City Summit",
    caption: "Connecting dual operating hubs to power seamless pan-India outsourced financial services."
  },
  {
    id: "mem-14",
    src: "/assets/memories/IMG20250718151556.jpg",
    title: "Annual Governance Review",
    category: "workshops",
    location: "Pune Auditorium",
    caption: "Reviewing ROC compliance automation, statutory audit standards, and data confidentiality protocols."
  },
  {
    id: "mem-15",
    src: "/assets/memories/MONIKA___SWATI___3_.jpeg",
    title: "Practice Leads in Focus",
    category: "team",
    location: "Advisory Wing",
    caption: "Championing client relationships with personalized attention and strict deadline adherence."
  },
  {
    id: "mem-16",
    src: "/assets/memories/IMG20250720144657.jpg",
    title: "Closing Plenary & Leadership Address",
    category: "events",
    location: "Main Stage",
    caption: "Reiterating our foundational pledge: We Rise by Lifting Others."
  },
  {
    id: "mem-17",
    src: "/assets/memories/IMG20250720144903.jpg",
    title: "Fellowship & Recognition Awards",
    category: "community",
    location: "Honors Banquet",
    caption: "Recognizing outstanding contributions by female professionals in accounting and secretarial compliance."
  },
  {
    id: "mem-18",
    src: "/assets/memories/IMG20250720145038.jpg",
    title: "Delegates Assembly & Future Horizons",
    category: "community",
    location: "Convention Hall",
    caption: "Charting the future roadmap: global accounting partnerships and ICAI/ICSI alliances."
  },
  {
    id: "mem-19",
    src: "/assets/memories/MONIKA___SWATI___4_.jpeg",
    title: "Collaborative Practice Synergy",
    category: "team",
    location: "Client Operations Desk",
    caption: "Executing institutional-grade solutions with transparency, accuracy, and diligence."
  },
  {
    id: "mem-20",
    src: "/assets/memories/IMG20250720145150.jpg",
    title: "Community Commemoration & Group Portrait",
    category: "community",
    location: "Convention Pavilion",
    caption: "The growing national community of Visionary Women professionals."
  },
  {
    id: "mem-21",
    src: "/assets/memories/IMG-20250717-WA0073.jpg",
    title: "Pre-Summit Strategic Briefing",
    category: "workshops",
    location: "Briefing Suite",
    caption: "Aligning service scopes and NDA security frameworks for enterprise outsourcing."
  },
  {
    id: "mem-22",
    src: "/assets/memories/IMG-20250719-WA0008.jpg",
    title: "Interactive Roundtable Dialogue",
    category: "community",
    location: "Discussion Terrace",
    caption: "Sharing real-world experiences on balancing career ambitions with family life."
  },
  {
    id: "mem-23",
    src: "/assets/memories/IMG-20250719-WA0157.jpg",
    title: "Technical Excellence Workshop",
    category: "workshops",
    location: "Pune Learning Center",
    caption: "Specialized training on financial forecasting, ROC filing automation, and due diligence."
  },
  {
    id: "mem-24",
    src: "/assets/memories/IMG20250305141415.jpg",
    title: "Spring Advisory Symposium",
    category: "events",
    location: "Conference Pavilion",
    caption: "Quarterly review of client engagements and national expansion milestones."
  }
];
