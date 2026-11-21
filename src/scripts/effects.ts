/**
 * Decorative effects. Content never depends on this script: without it everything is simply static.
 */

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/* Scroll reveal: [data-reveal] elements fade up once they enter the viewport */
function initReveal() {
  const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );
  items.forEach((el) => observer.observe(el));
}

/* Counters: [data-count] elements count up to their own text ("500+", "2,000+", "5.0") when visible */
function initCounters() {
  const items = document.querySelectorAll<HTMLElement>("[data-count]");
  if (reduceMotion || !("IntersectionObserver" in window)) return;

  const run = (el: HTMLElement) => {
    const final = el.textContent ?? "";
    const match = final.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
    if (!match) return;
    const [, prefix, numeric, suffix] = match;
    const target = Number(numeric.replace(/,/g, ""));
    const decimals = numeric.includes(".") ? numeric.split(".")[1].length : 0;
    const format = (value: number) =>
      value.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    const duration = 1200;
    const start = performance.now();

    const frame = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = `${prefix}${format(target * eased)}${suffix}`;
      if (t < 1) requestAnimationFrame(frame);
      else el.textContent = final;
    };
    requestAnimationFrame(frame);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        run(entry.target as HTMLElement);
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.6 },
  );
  items.forEach((el) => observer.observe(el));
}

/* Pointer-follow effects (desktop only): hero dot grid and project card spotlights */
function initPointerEffects() {
  if (!finePointer || reduceMotion) return;

  const hero = document.querySelector<HTMLElement>("[data-hero]");
  const grid = hero?.querySelector<HTMLElement>(".hero-grid-spot");
  if (hero && grid) {
    let frame = 0;
    hero.addEventListener("pointermove", (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        grid.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        grid.style.setProperty("--my", `${event.clientY - rect.top}px`);
        grid.style.setProperty("--spot-opacity", "1");
      });
    });
    hero.addEventListener("pointerleave", () => grid.style.setProperty("--spot-opacity", "0"));
  }

  for (const card of document.querySelectorAll<HTMLElement>(".spotlight")) {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--sx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--sy", `${event.clientY - rect.top}px`);
    });
  }
}

/* Sticky header: slides in once the hero's own navigation bar has scrolled out of view */
function initStickyHeader() {
  const header = document.querySelector<HTMLElement>("[data-sticky-header]");
  const heroNav = document.querySelector<HTMLElement>("[data-hero-nav]");
  if (!header || !heroNav || !("IntersectionObserver" in window)) return;

  new IntersectionObserver(([entry]) => {
    const scrolledPast = !entry.isIntersecting && entry.boundingClientRect.top < 0;
    header.toggleAttribute("data-visible", scrolledPast);
    header.toggleAttribute("inert", !scrolledPast);
  }).observe(heroNav);
}

initReveal();
initCounters();
initPointerEffects();
initStickyHeader();
