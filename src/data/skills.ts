export interface SkillGroup {
  label: string;
  items: string[];
}

export const SKILLS: SkillGroup[] = [
  { label: "Languages", items: ["Python", "SQL", "TypeScript / JavaScript", "Rust", "Kotlin", "Solidity", "Java"] },
  {
    label: "Backend",
    items: ["FastAPI", "SQLAlchemy 2 (async)", "Alembic", "Pydantic", "Flask", "Django", "aiogram", "discord.py", "Frappe / ERPNext", "pytest"],
  },
  { label: "Messaging & async", items: ["RabbitMQ", "NATS", "Redis pub/sub", "Taskiq", "WebSocket"] },
  { label: "Databases", items: ["PostgreSQL", "Redis", "MySQL / MariaDB", "MongoDB"] },
  {
    label: "Integrations",
    items: ["Stripe", "LiqPay", "Checkbox", "Syrve / iiko", "Glovo", "Firebase / FCM", "OpenAI", "AWS S3", "Google APIs"],
  },
  { label: "Infra & tools", items: ["Docker", "AWS (EC2, ECS, S3)", "GitHub Actions", "Nginx", "ELK", "Git", "Claude Code"] },
  { label: "Frontend & mobile", items: ["Vue.js", "Nuxt.js", "Quasar", "Tailwind", "Kotlin Multiplatform / Compose"] },
];

export const SPOKEN_LANGUAGES = [
  { name: "Ukrainian", level: "native" },
  { name: "Slovak", level: "C1" },
  { name: "English", level: "B2" },
];
