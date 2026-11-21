export interface Contact {
  name: string;
  link: string;
  icon: string;
}

export const PROFILE = {
  firstName: "Vadym",
  fullName: "Vadym Popovych",
  position: "Python Backend Developer",
  location: "Slovakia, Bratislava",
  cvPath: "/vadym_popovych_cv.pdf",
  briefStack: ["FastApi", "Redis", "Postgres", "RabbitMQ"],
  email: "popovych.vadim.dev@gmail.com",
  availability: "Open to full-time and part-time roles",
  about: [
    "Python backend developer with 3+ years of commercial experience. I build backends end to end: data models and APIs, real-time features, payments and third-party integrations, CI/CD and deployment.",
    "At Hypefood I designed and built the core of a food delivery platform that grew to 500+ daily orders across franchise locations. Since then I have shipped AI sales funnels, payment systems and a custom ERP for clients, and I study Computer Science at STU FIIT in Bratislava.",
  ],
  facts: [
    { value: "3+", label: "years of commercial backend work" },
    { value: "500+", label: "daily orders on a platform I built" },
    { value: "2,000+", label: "users of a public API I ran" },
    { value: "5.0", label: "client rating across 8 freelance projects" },
  ],
} as const;

export const FREELANCEHUNT_URL = "https://freelancehunt.com/freelancer/vadim_popovych.html";

export const CONTACTS: Contact[] = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vadym-popovych-29a687240",
    icon: "mdi:linkedin",
  },
  { name: "Github", link: "https://github.com/vadympop", icon: "mdi:github" },
  { name: "Email", link: "mailto:popovych.vadim.dev@gmail.com", icon: "mdi:email" },
];
