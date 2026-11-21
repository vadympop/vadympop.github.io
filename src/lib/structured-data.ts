import { CONTACTS, FREELANCEHUNT_URL, PROFILE } from "../data/profile";
import { EDUCATION } from "../data/education";
import { SPOKEN_LANGUAGES } from "../data/skills";

const SITE = "https://vadym.work";
const PERSON_ID = `${SITE}/#person`;

/** schema.org Person + WebSite for the home page */
export function homeStructuredData(): Record<string, unknown>[] {
  const sameAs = [...CONTACTS.filter((c) => c.link.startsWith("http")).map((c) => c.link), FREELANCEHUNT_URL];

  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": PERSON_ID,
      name: PROFILE.fullName,
      givenName: PROFILE.firstName,
      familyName: PROFILE.fullName.split(" ").slice(1).join(" "),
      jobTitle: PROFILE.position,
      description: PROFILE.about[0],
      url: `${SITE}/`,
      image: `${SITE}/og.png`,
      email: `mailto:${PROFILE.email}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bratislava",
        addressCountry: "SK",
      },
      alumniOf: EDUCATION.map((edu) => ({
        "@type": "CollegeOrUniversity",
        name: "Slovak University of Technology in Bratislava",
        department: { "@type": "Organization", name: edu.faculty },
      })),
      knowsAbout: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "RabbitMQ",
        "WebSocket",
        "Docker",
        "AWS",
        "Backend development",
        "API design",
        "Rust",
      ],
      knowsLanguage: SPOKEN_LANGUAGES.map((lang) => lang.name),
      sameAs,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: `${SITE}/`,
      name: PROFILE.fullName,
      inLanguage: "en",
      publisher: { "@id": PERSON_ID },
    },
  ];
}
