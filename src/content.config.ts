import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/** Month precision dates: "2025-03" */
const month = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/, 'Use "YYYY-MM"');

const period = z.object({
  start: month,
  /** Omitted = ongoing */
  end: month.optional(),
  /** Overrides the formatted range, e.g. "May 8–10, 2026" */
  label: z.string().optional(),
});

const credit = z.object({
  name: z.string(),
  github: z.string().url().optional(),
});

const links = z
  .object({
    repo: z.string().url().optional(),
    repos: z.array(z.object({ label: z.string(), url: z.string().url() })).optional(),
    org: z.string().url().optional(),
    site: z.string().url().optional(),
    pypi: z.string().url().optional(),
    profile: z.string().url().optional(),
  })
  .default({});

/** A body of Markdown in either collection becomes a case-study page once `caseStudy` is true. */
const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    companyUrl: z.string().url().optional(),
    location: z.string(),
    employment: z.string(),
    period,
    stack: z.array(z.string()),
    summary: z.string().optional(),
    highlights: z.array(z.string()).default([]),
    /** Products built inside this role (client names withheld) */
    projects: z
      .array(
        z.object({
          title: z.string(),
          period: z.string().optional(),
          summary: z.string(),
          highlights: z.array(z.string()).default([]),
          stack: z.array(z.string()).default([]),
          caseStudy: z.string().optional(),
        }),
      )
      .default([]),
    stats: z.string().optional(),
    quotes: z.array(z.string()).default([]),
    links,
    order: z.number(),
    caseStudy: z.boolean().default(false),
    /** For case-study-only entries that belong to another role (e.g. Oblik → Automation Aspects) */
    parent: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    period,
    kind: z.enum(["product", "personal", "university", "hackathon", "client", "open-source"]),
    team: z
      .object({
        size: z.number().int().positive(),
        credits: z.array(credit).default([]),
      })
      .optional(),
    role: z.string().optional(),
    stack: z.array(z.string()),
    highlights: z.array(z.string()).default([]),
    links,
    featured: z.boolean().default(false),
    order: z.number(),
    caseStudy: z.boolean().default(false),
  }),
});

export const collections = { experience, projects };
