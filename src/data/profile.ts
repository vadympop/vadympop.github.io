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
} as const;

export const CONTACTS: Contact[] = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vadym-popovych-29a687240",
    icon: "mdi:linkedin",
  },
  { name: "Github", link: "https://github.com/vadympop", icon: "mdi:github" },
  { name: "Email", link: "mailto:popovych.vadim.dev@gmail.com", icon: "mdi:email" },
];
