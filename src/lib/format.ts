const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export interface Period {
  start: string;
  end?: string;
  label?: string;
}

/** "2025-03" → "Mar 2025" */
export function formatMonth(month: string): string {
  const [year, m] = month.split("-");
  return `${MONTHS[Number(m) - 1]} ${year}`;
}

/** "Mar 2025 – Sep 2026", "Sep 2026 – Present", or the explicit label */
export function formatPeriod(period: Period): string {
  if (period.label) return period.label;
  const start = formatMonth(period.start);
  if (!period.end) return `${start} – Present`;
  if (period.end === period.start) return start;
  return `${start} – ${formatMonth(period.end)}`;
}

export const startYear = (period: Period) => Number(period.start.slice(0, 4));

/** Newest first; ongoing entries before finished ones that started in the same month */
export function byStartDesc<T>(get: (item: T) => Period) {
  return (a: T, b: T) => {
    const pa = get(a);
    const pb = get(b);
    return pb.start.localeCompare(pa.start) || (pb.end ?? "9999").localeCompare(pa.end ?? "9999");
  };
}

export const PROJECT_KIND_LABELS: Record<string, string> = {
  product: "Product",
  personal: "Personal project",
  university: "University project",
  hackathon: "Hackathon",
  client: "Client project",
  "open-source": "Open source",
};
