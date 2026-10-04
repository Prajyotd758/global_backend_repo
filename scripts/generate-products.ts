import { writeFileSync } from "fs";
import { seeds } from "./data"; // adjust path

const HUES: Record<string, number> = {
  kitchen: 140,
  lighting: 45,
  gaming: 260,
  miniatures: 160,
  "home-decor": 30,
  "phone-gadgets": 210,
  functional: 190,
  "desk-organizers": 55,
  "toys-games": 330,
  festive: 20,
  cosplay: 280,
  rc: 0,
};

const slugify = (t: string) =>
  t
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const seen = new Set<string>();

const PRODUCTS = (seeds as any[]).flatMap((s) => {
  const slug = slugify(s.title);
  if (seen.has(slug)) {
    console.warn(`Skipped duplicate: ${s.title}`);
    return [];
  }
  seen.add(slug);

  return [
    {
      title: s.title,
      slug,
      category: s.category,
      price: s.price ?? 0,
      images: [...s.images], // mw() already resolved to full URLs
      description: s.description,
      materials: s.materials,
      sizes: s.sizes,
      colors: s.colors ?? [],
      specs: Object.fromEntries(s.specs),
      hue: HUES[s.category] ?? 45,
      sold: 0,
      rating: 0,
      reviews: 0,
      inStock: true,
    },
  ];
});

writeFileSync(
  "scripts/products.test.ts", // the file your upload script imports
  `export const PRODUCTS = ${JSON.stringify(PRODUCTS, null, 2)};\n`
);
console.log(`Wrote ${PRODUCTS.length} products`);
