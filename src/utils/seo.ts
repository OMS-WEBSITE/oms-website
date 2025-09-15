export function buildSEO(Astro: any, overrides: Record<string, any> = {}) {
  const site = (Astro?.site ?? '') + (Astro?.url?.pathname ?? '');
  const base = {
    title: 'OMS Software',
    description: 'Workflow & TIC compliance platform for testing, inspection, and certification.',
    image: '/og-image.png',
    canonicalURL: site || undefined,
  };
  return { ...base, ...overrides };
}
