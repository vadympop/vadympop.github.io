import { getCollection } from "astro:content";

export interface CaseStudyLink {
  href: string;
  title: string;
}

/** Every case-study page in reading order: featured projects first, then commercial work. */
export async function getCaseStudyLinks(): Promise<CaseStudyLink[]> {
  const projects = (await getCollection("projects", ({ data }) => data.caseStudy)).sort((a, b) => a.data.order - b.data.order);
  const experience = (await getCollection("experience", ({ data }) => data.caseStudy)).sort((a, b) => a.data.order - b.data.order);

  return [
    ...projects.map(({ id, data }) => ({ href: `/projects/${id}/`, title: data.title })),
    ...experience.map(({ id, data }) => ({ href: `/experience/${id}/`, title: data.title ?? data.company })),
  ];
}

export async function getNeighbours(href: string) {
  const links = await getCaseStudyLinks();
  const index = links.findIndex((link) => link.href === href);
  return {
    prev: index > 0 ? links[index - 1] : undefined,
    next: index >= 0 && index < links.length - 1 ? links[index + 1] : undefined,
  };
}
