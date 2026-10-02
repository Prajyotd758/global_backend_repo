import type { Category, Product, ProductImages, Seed } from "@/lib/types";

export const CATEGORIES: Category[] = [
  { id: "household", name: "Household" },
  { id: "toys-games", name: "Toys & Games" },
  { id: "miniatures", name: "Miniatures & Tabletop" },
  { id: "art", name: "Art" },
  { id: "education", name: "Education" },
  { id: "fashion", name: "Fashion" },
  { id: "hobby-diy", name: "Hobby & DIY" },
  { id: "props-cosplay", name: "Props & Cosplay" },
  { id: "tools", name: "Tools" },
];

const mw = (model: string, ...files: string[]) =>
  files.map(
    (f) =>
      `https://makerworld.bblmw.com/makerworld/model/${model}/design/${f}?x-oss-process=image/resize,w_1000/format,webp`
  ) as ProductImages;

// TEST FILE: 4 products only (one with raw image URLs, one with custom colors)
const seeds: Seed[] = [
  {
    title: "HydroBowl Fruit & Veggie Washer",
    category: "kitchen",
    price: 0, // TODO: set your price
    images: [
      "https://makerworld.bblmw.com/makerworld/model/US5d826ff8eb029d/design/2025-06-10_9d9a809064185.png?x-oss-process=image/resize,w_1000/format,webp",
      "https://makerworld.bblmw.com/makerworld/model/US5d826ff8eb029d/design/2025-06-10_d5813b289efba8.jpg?x-oss-process=image/resize,w_1000/format,webp",
      "https://makerworld.bblmw.com/makerworld/model/US5d826ff8eb029d/design/2025-06-10_d3b3df45fd184.jpg?x-oss-process=image/resize,w_1000/format,webp",
      "https://makerworld.bblmw.com/makerworld/model/US5d826ff8eb029d/design/2025-06-10_b7a67d6329344.jpg?x-oss-process=image/resize,w_1000/format,webp",
      "https://makerworld.bblmw.com/makerworld/model/US5d826ff8eb029d/design/2025-06-10_8deec9d3f6b3a.jpg?x-oss-process=image/resize,w_1000/format,webp",
    ],
    description:
      "A sink-side produce washer with an angled water inlet that creates a vortex, gently spinning fruits and vegetables for a thorough rinse without scrubbing. Place it in the sink, turn on the tap, and let the flow do the work. Prints with easily removable supports.",
    materials: ["PLA"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "6.6–15.4 hrs"],
      ["Plates", "1"],
      ["Material", "PLA"],
      ["Supports", "Easily removable"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "CubeStack Desk Lamp",
    category: "lighting",
    price: 0,
    images: mw(
      "US6c3bed6239fb56",
      "2025-01-31_b98e7be190c99.jpg",
      "2025-01-31_ec47fdbe68644.jpg",
      "2025-02-06_8ad8ec3be532a.jpg"
    ),
    description:
      "A geometric desk lamp of stacked cubes that seem to float, with a warm glow and a height you can extend. No glue or supports needed.",
    materials: ["PLA"],
    sizes: ["122 mm", "117 mm (single plate)"],
    specs: [
      ["Print time", "7.4–7.8 hrs"],
      ["Layer height", "0.2 mm"],
      ["Assembly", "Pin-fit, no glue"],
      ["Light source", "LED lamp kit"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Iron Throne PS5 Controller Stand",
    category: "gaming",
    price: 0,
    images: mw(
      "US7bdc40ca4836d5",
      "2025-11-21_30b2e60ea8736.jpg",
      "2025-11-21_fe42e48b0c5188.jpg",
      "2025-11-21_835afeb5000af8.jpg"
    ),
    description:
      "A Game of Thrones Iron Throne stand for the PS5 DualSense controller. Infill can be dropped to 10% to keep some weight in the base.",
    materials: ["PLA"],
    sizes: ["PS5 DualSense"],
    specs: [
      ["Print time", "16.8 hrs (1 plate)"],
      ["Controller", "PS5 DualSense"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Bulbasaur Multicolor Figurine",
    category: "miniatures",
    price: 0,
    images: mw(
      "US17cf8a95553c06",
      "2024-02-01_28f95695f8f78.png",
      "2024-02-01_9b310e6f43d46.png",
      "2024-02-01_3f2fff19cffc4.png",
      "2024-02-01_270115063f6ce.png",
      "2024-02-01_485ecca0e0554.png"
    ),
    description:
      "A multicolour figurine of a green bulb-backed creature, printed in 4 to 5 colours with fine details on the eyes, claws and tongue.",
    materials: ["PLA"],
    sizes: ["Small (4 cm)", "Standard"],
    colors: [
      { name: "Teal", hex: "#4fa89a" },
      { name: "Green", hex: "#2f7d3a" },
    ],
    specs: [
      ["Print time", "6.2–23.7 hrs"],
      ["Colours", "4 or 5"],
      ["Layer height", "0.2 mm"],
      ["Infill", "10%"],
      ["Supports", "Required"],
      ["Dispatch", "2–3 business days"],
    ],
  },
];

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const PRODUCTS: Product[] = seeds.map((s, i) => ({
  // fallbacks (same as before)
  mrp: Math.round(s.price * 1.25),
  rating: +(4 + ((i * 7) % 10) / 10).toFixed(1),
  reviews: 12 + ((i * 37) % 300),
  sold: 20 + ((i * 53) % 900),
  inStock: true,
  materials: ["PLA", "PETG", "Silk PLA"],
  colors: [
    { name: "Black", hex: "#1c1c1c" },
    { name: "White", hex: "#f2f2f2" },
    { name: "Orange", hex: "#ff6a1a" },
    { name: "Blue", hex: "#2f6fed" },
  ],
  sizes: ["Small", "Medium", "Large"],
  description:
    "Precision 3D printed at 0.16mm layer height with a smooth finish. Designed and printed in-house at Make It Print.",
  specs: [
    ["Print time", `${4 + (i % 12)} hrs`],
    ["Layer height", "0.16 mm"],
    ["Infill", "15–20%"],
    ["Weight", `${40 + i * 6} g`],
    ["Dispatch", "2–3 business days"],
  ],
  // real data overrides the fallbacks above
  ...s,
  id: i + 1,
  slug: slugify(s.title),
  hue: (i * 37) % 360,
}));
