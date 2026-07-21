export const personalInfo = {
  name: "Pradeep Madhusanka",
  initials: "KAP",
  fullName: "Karuna Arachchige Pradeep Madhusanka",
  title: "Senior Frontend Architect",
  tagline: "Crafting High-Performance Web Experiences & Next-Gen Digital Products.",
  email: "kapmadusanka95@gmail.com",
  phone: "+94 77-562-7722",
  location: "Moratuwa, Sri Lanka",
  github: "https://github.com/kapmadusanka",
  linkedin: "https://linkedin.com/in/kapmadusanka",
  availability: "Available for High-Impact Projects / Full-time Roles",
};

export interface Project {
  title: string;
  client: string;
  company: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "LodgePro — Tax Lodgement Platform",
    client: "Australian Tax Office Integration",
    company: "Growth Prof (PVT) Ltd",
    problem: "Complex individual tax lodgement process requiring streamlined digital workflows.",
    solution: "Built a full-stack tax lodgement WebApp and public-facing Next.js site with modern state management.",
    impact: "Simplified tax filing for Australian individuals with real-time validation and secure submissions.",
    tech: ["React", "TypeScript", "Next.js", "Zustand", "Tailwind CSS", "Azure AD", "Material UI"],
    featured: true,
  },
  {
    title: "ConstructPro ERP",
    client: "UPrince — Belgian Construction Firm",
    company: "Mickiesoft (Private) Limited",
    problem: "Large-scale construction firms needed a unified cloud ERP for inventory and fleet management.",
    solution: "Led development of a cutting-edge ERP system with reusable React components, Azure AD auth, and .NET APIs.",
    impact: "Deployed to production for major Belgian construction companies, managing real-time inventory and fleet ops.",
    tech: ["React", "TypeScript", "Redux", "Azure AD", "Fluent UI", ".NET", "MSAL"],
    featured: true,
  },
  {
    title: "HRIS — Goddeeris Belgium",
    client: "Goddeeris — Belgian Construction",
    company: "Mickiesoft (Private) Limited",
    problem: "No centralized HR system with time and location tracking for field construction workers.",
    solution: "Built a cutting-edge HRIS with real-time location tracking, calendar scheduling, and DnD interfaces.",
    impact: "Enabled Goddeeris to manage 500+ field workers with real-time attendance and location data.",
    tech: ["React", "TypeScript", "Redux Toolkit", "React DnD", "Fluent UI", ".NET", "Azure AD"],
    featured: true,
  },
  {
    title: "Business Procurement Add-ins",
    client: "UPrince — Excel & Outlook Add-ins",
    company: "Mickiesoft (Private) Limited",
    problem: "Manual procurement tendering and mail management slowing down enterprise workflows.",
    solution: "Developed Microsoft Office add-ins using OfficeJs and React for Excel and Outlook automation.",
    impact: "Automated tendering processes and email management, saving 20+ hours per week in manual work.",
    tech: ["OfficeJs", "React", "TypeScript", "Microsoft Graph API", "MSAL", "Azure AD"],
  },
  {
    title: "Zoomit by DomexTech",
    client: "DomexTech Logistics",
    company: "Mickiesoft (Private) Limited",
    problem: "No digital waybill tracking or rider management system for logistics operations.",
    solution: "Built a web-based tracking system with React and a companion mobile app using React Native + Laravel APIs.",
    impact: "Digitized logistics operations with real-time tracking across web and mobile platforms.",
    tech: ["React", "React Native", "TypeScript", "Redux Toolkit", "AWS Cognito", "PHP", "Laravel"],
  },
  {
    title: "DRES — Wayamba University",
    client: "Wayamba University of Sri Lanka",
    company: "Mickiesoft (Private) Limited",
    problem: "University needed a digital system for recording and evaluating internship programs.",
    solution: "Built an internship management system with React frontend and Laravel API backend.",
    impact: "Streamlined internship evaluation for the university with digital records replacing paper-based processes.",
    tech: ["React", "TypeScript", "Redux Toolkit", "RTK Query", "PHP", "Laravel"],
  },
];

export interface TechCategory {
  category: string;
  skills: { name: string; level: number }[];
}

export const techStack: TechCategory[] = [
  {
    category: "Frontend Core",
    skills: [
      { name: "React", level: 98 },
      { name: "TypeScript", level: 95 },
      { name: "JavaScript", level: 97 },
      { name: "Next.js", level: 88 },
    ],
  },
  {
    category: "Styling & UI",
    skills: [
      { name: "Tailwind CSS", level: 92 },
      { name: "Fluent UI", level: 88 },
      { name: "Material UI", level: 90 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    category: "State & Architecture",
    skills: [
      { name: "Redux Toolkit", level: 94 },
      { name: "Zustand", level: 88 },
      { name: "RTK Query", level: 90 },
      { name: "React Hook Form", level: 87 },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "PHP / Laravel", level: 90 },
      { name: ".NET", level: 78 },
      { name: "REST APIs", level: 95 },
      { name: "MySQL", level: 85 },
    ],
  },
  {
    category: "Cloud & Auth",
    skills: [
      { name: "Azure AD / MSAL", level: 90 },
      { name: "AWS Cognito", level: 80 },
      { name: "Microsoft Graph", level: 85 },
      { name: "OfficeJs", level: 88 },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "Vite", level: 90 },
      { name: "CI/CD Pipelines", level: 82 },
      { name: "Agile / Scrum", level: 90 },
    ],
  },
];

export interface MetricItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const metrics: MetricItem[] = [
  { value: 9, suffix: "+", label: "Years Experience", description: "Building production-grade web applications" },
  { value: 100, suffix: "%", label: "On-Time Delivery", description: "Consistently meeting project deadlines" },
  { value: 99, suffix: "+", label: "Performance Score", description: "Lighthouse-optimized web applications" },
  { value: 15, suffix: "+", label: "Projects Delivered", description: "Enterprise apps across 4 countries" },
];

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Senior Front-End Developer",
    company: "Growth Prof (PVT) Ltd",
    period: "May 2024 — Present",
    description: "Leading frontend architecture for Australian tax technology products.",
    highlights: [
      "Architected LodgePro tax lodgement WebApp with React, Next.js, and Zustand",
      "Built public-facing website with Next.js and Tailwind CSS",
      "Implemented Azure AD authentication and secure API integrations",
    ],
  },
  {
    role: "Senior Front-End Developer",
    company: "Mickiesoft (Private) Limited",
    period: "Jul 2020 — May 2024",
    description: "Led frontend development for enterprise solutions serving Belgian construction firms.",
    highlights: [
      "Built ConstructPro ERP — cloud inventory & fleet management system",
      "Developed Microsoft Office add-ins (Excel, Outlook) using OfficeJs",
      "Created HRIS with real-time location tracking for 500+ field workers",
      "Built Zoomit waybill tracking system with React Native mobile app",
    ],
  },
  {
    role: "Software Engineer",
    company: "Lanka Communication Services (PVT) Ltd",
    period: "Oct 2018 — Jul 2020",
    description: "Full-stack development of enterprise systems and government projects.",
    highlights: [
      "Developed and maintained in-house ERP using PHP CodeIgniter",
      "Built reporting and event management systems for Ceylon Chamber of Commerce",
      "Contributed to World Bank Sri Lanka project approval system",
    ],
  },
  {
    role: "PHP Developer",
    company: "IT Mart Lanka (Private) Limited",
    period: "Mar 2017 — Oct 2018",
    description: "Web application development for small and medium business clients.",
    highlights: [
      "Developed and deployed websites and web applications using PHP CodeIgniter",
      "Built MySQL-backed dynamic web solutions",
    ],
  },
  {
    role: "PHP Developer",
    company: "Lily Digital (Private) Limited",
    period: "Jan 2016 — Mar 2017",
    description: "Built e-commerce and POS solutions for retail clients.",
    highlights: [
      "Developed OzoneDesk POS System with integrated online store",
      "Built new features for point-of-sale and inventory management",
    ],
  },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
