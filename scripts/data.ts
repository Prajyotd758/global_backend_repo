const mw = (model: string, ...files: string[]) =>
  files.map(
    (f) =>
      `https://makerworld.bblmw.com/makerworld/model/${model}/design/${f}?x-oss-process=image/resize,w_1000/format,webp`
  );

export const seeds = [
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
  // in seeds:
  {
    title: "Modular Shoe Rack / Wall Shelf",
    category: "home-decor",
    price: 0, // TODO
    images: mw(
      "US84e4784439f5ca",
      "2025-02-08_e41d0c6df1e51.jpg",
      "2025-02-08_e93d418cb6186.jpg",
      "2025-02-08_dc0ff2aec3867.jpg",
      "2025-02-08_73a540eb19957.jpg",
      "2025-02-08_da267bde29a4a.jpg"
    ),
    description:
      "A compact, space-saving shoe rack with a flowing design that also works as a wall shelf. It's built from just two parts that push together with printed pins, so you can make it any height or length. An optional wall mount is included.",
    materials: ["PLA"],
    sizes: ["Small", "Medium", "Large"],
    specs: [
      ["Print time", "8.4 hrs (2 plates)"],
      ["Layer height", "0.2 mm"],
      ["Infill", "5% (8–15% for heavy use)"],
      ["Assembly", "Push-fit pins, no glue"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Mechanical Desk Phone Holder Arm",
    category: "phone-gadgets",
    price: 0, // TODO
    images: mw(
      "US3e09becace8daf",
      "2025-01-29_250cf6e8889f2.jpg",
      "2025-01-29_3f06170c4d829.png",
      "2025-01-29_5817a81a0eff1.png",
      "2025-01-29_61bf92cb89a3b.png",
      "2025-01-29_6fa7b50551082.jpg"
    ),
    description:
      "A desk-mounted phone arm that holds your phone in any position using a gravity mechanism. All joints are adjustable and it clamps to desks up to 50 mm thick.",
    materials: ["PLA"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "6.2–7.1 hrs (3–4 plates)"],
      ["Desk thickness", "Up to 50 mm"],
      ["Hardware", "8 self-tapping screws + 1 rubber band"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Auto-Locking Ball Hanger",
    category: "functional",
    price: 0, // TODO
    images: mw(
      "US7ea63c10a0d61",
      "2025-01-11_5ce5dca9bbdb6.jpeg",
      "2025-01-11_29da85c9d2136.jpeg",
      "2025-01-11_0e796118ecd7e.jpeg",
      "2025-01-11_a6901416731dc.jpeg",
      "2025-01-11_c0fa7c46d4faf.jpeg"
    ),
    description:
      "A print-in-place wall hanger with a ball that locks the hook automatically. Mount it with double-sided tape or with 3 mm screws. The ball can be printed in a contrasting colour.",
    materials: ["PLA"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "1.3–5.9 hrs"],
      ["Mounting", "Tape or 3 mm screws"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "T-Rex Pencil Holder",
    category: "desk-organizers",
    price: 0, // TODO
    images: mw(
      "US8779fef0a2305",
      "2024-07-15_05bc33c09ed44.jpeg",
      "2024-07-15_882874ed060af.jpeg",
      "2024-07-15_8d92bee5a562f.jpeg",
      "2024-07-15_478bd684623ce.jpeg",
      "2024-07-15_0cb9478d4095e.jpeg"
    ),
    description:
      "A T-Rex desk pencil holder that adds a playful touch to a desk or kids' study corner. Printed in one piece.",
    materials: ["PLA"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "5.3 hrs"],
      ["Dimensions", "16.5 × 16 × 13"], // unit not stated on the page
      ["Supports", "Tree supports recommended"],
      ["Dispatch", "2–3 business days"],
    ],
  },

  {
    title: "iPad / Tablet Stand Riser",
    category: "phone-gadgets",
    price: 0, // TODO
    images: mw(
      "USed8466018779e1",
      "2024-12-22_f5db8e93c19e4.jpg",
      "2024-12-22_c5f5e870c5ee2.jpg",
      "2024-12-22_5ba025ed4571b.jpg",
      "2024-12-22_2e8dc035a49ee.jpg",
      "2024-12-21_103a38716e856.jpg"
    ),
    description:
      "A desktop stand for iPad or tablet with a built-in charging cable passthrough and a storage tray to keep your desk organised. Designed for the iPad Pro 12.9-inch, with a maximum device thickness of 15 mm.",
    materials: ["PLA"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "6.7–8 hrs"],
      ["Layer height", "0.2 mm"],
      ["Infill", "10%"],
      ["Fits", 'iPad Pro 12.9" (max 15 mm thick)'],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Modular Desk Shelf",
    category: "desk-organizers",
    price: 0,
    images: [
      "https://makerworld.bblmw.com/makerworld/model/US38eae433bf24d0/design/2025-02-25_d73fe63c2d0e6.png?x-oss-process=image/resize,w_1000/format,webp",
      "https://makerworld.bblmw.com/makerworld/model/US38eae433bf24d0/design/2025-02-25_6968aff3a4459.png?x-oss-process=image/resize,w_1000/format,webp",
      "https://makerworld.bblmw.com/makerworld/model/US38eae433bf24d0/design/2025-02-25_afbfa9deb86408.png?x-oss-process=image/resize,w_1000/format,webp",
      "https://makerworld.bblmw.com/makerworld/model/US38eae433bf24d0/design/2025-02-25_4b737c84dda0a8.png?x-oss-process=image/resize,w_1000/format,webp",
      "https://makerworld.bblmw.com/makerworld/model/US38eae433bf24d0/design/2025-02-25_cc1f7cf94f6f9.png?x-oss-process=image/resize,w_1000/format,webp",
    ], // page returned no image URLs, add real ones
    description:
      "A fully 3D printed modular desk shelf that you configure with clip-in drawers, shelves and add-ons for phones, headphones and accessories. Parts snap together, and rubber pads keep it non-slip.",
    materials: ["PLA"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "5.7–7.7 hrs per set"],
      ["Assembly", "Clip-in modules, no screws"],
      ["Extras", "10×3 mm rubber pads"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Stackable Dual-Colour Shoe Rack",
    category: "home-decor",
    price: 0,
    images: mw(
      "USae6f41de3b641",
      "2025-01-23_4bd72e79a5af28.jpg",
      "2025-01-22_b6a857f2bc37c8.jpeg",
      "2025-01-22_4fe59e4993535.jpeg",
      "2025-01-22_8ffef336f04d.jpeg",
      "2025-01-22_b3f49f6c0a33f8.jpeg"
    ),
    description:
      "A stackable two-colour shoe rack with a clean look and a honeycomb infill. Posts push into the next level for a snug, wobble-free fit. Available in standard, short and heavy-duty versions.",
    materials: ["PLA"],
    sizes: ["Short", "Standard", "Heavy Duty"],
    specs: [
      ["Print time", "6.2–8.8 hrs (2 plates)"],
      ["Layer height", "0.2 mm"],
      ["Infill", "10%"],
      ["Colours", "Two-colour (filament change)"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Alien Desk Mug Holder",
    category: "desk-organizers",
    price: 0, // TODO
    images: mw(
      "US5d321e7c9002f5",
      "2024-10-16_6c7526e98670c.png",
      "2024-10-16_87aba856ffa65.jpg",
      "2024-10-16_4c87794eb3047.jpg",
      "2024-10-16_3c802def5932e.jpg",
      "2024-10-16_f1585902be6b5.jpg"
    ),
    description:
      "A futuristic, alien-styled mug holder that clamps to your desk so you never knock over a coffee again. Fits mugs up to 95 mm across and desks 12–40 mm thick. Four parts with a screw-clamp system.",
    materials: ["PLA", "PETG"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "8.1 hrs (PLA) / 13.2 hrs (PETG)"],
      ["Mug diameter", "Up to 95 mm"],
      ["Desk thickness", "12–40 mm"],
      ["Infill", "40% in clamp area"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Single-Hand Bottle Cap Shooter",
    category: "toys-games",
    price: 0, // TODO
    images: mw(
      "UScefa610fff8083",
      "2f1d3a7b3fed346a.png",
      "3caa786973aec5e3.png",
      "da3111fee82b79ac.jpeg",
      "230b4e81d6d00cb4.jpeg"
    ),
    description:
      "A one-handed bottle opener that pops the cap off with a satisfying launch. Comes in left- and right-handed versions and must match your bottle shape. Best printed in standard PLA.",
    materials: ["PLA"],
    sizes: ["Right-handed", "Left-handed"],
    specs: [
      ["Print time", "1 hr 7 min – 1 hr 15 min"],
      ["Filament", "About 30 g"],
      ["Parts", "Base, lever, cover, nut"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Ghost with Balloon",
    category: "festive",
    price: 0, // TODO
    images: mw(
      "USc8d7fe1ccf0b6",
      "2025-10-21_a3b32cee1e5f1.jpg",
      "2025-10-21_c999691c1d3ca8.jpg",
      "2025-12-05_47281e7a072fa8.jpg",
      "2025-10-21_3bcea9f0e9d058.jpg",
      "2025-10-21_bfbad1e7daceb8.jpg"
    ),
    description:
      "A little ghost holding a red balloon and floating above the ground. A cute Halloween decoration that can also hold an LED tea light. Simple glue assembly.",
    materials: ["PLA"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "1.2–2 hrs"],
      ["Layer height", "0.2 mm"],
      ["Infill", "15%"],
      ["Assembly", "Glue"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Desk Cable Holder with Clamp",
    category: "desk-organizers",
    price: 0, // TODO
    images: mw(
      "US603a5520109477",
      "2025-11-16_ad36ae6dfc124.jpeg",
      "2025-11-16_210221e05a9a68.jpeg",
      "2025-11-16_2b2d9f91b21e48.jpeg",
      "2025-11-15_4e94a4bb7519b.jpeg",
      "2025-11-15_c0a16a325015e.jpeg"
    ),
    description:
      "A clamp-on desk cable holder that keeps charging cables in reach. Drop a cable into a tube, slide it in, and a spring lock holds it. Pull the slider to release. Clamps to the desk with a screw, no adhesive needed.",
    materials: ["PLA", "PETG"],
    sizes: ["1 cable", "3 cables", "5 cables"],
    specs: [
      ["Print time", "1.9–3.2 hrs"],
      ["Desk thickness", "Up to 30 mm or 50 mm"],
      ["Cable diameter", "3.5 / 5.5 / 7.5 mm tubes"],
      ["Mounting", "Screw clamp"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Balancing Goose Wine Bottle Holder",
    category: "kitchen",
    price: 0, // TODO
    images: mw(
      "US30bc20addf76b4",
      "79d9b20100fcba1b.jpg",
      "79c0a0e5b05339a6.jpg",
      "50bd679c689e6cf6.jpg",
      "5ea2bb0bf6d178cf.jpg"
    ),
    description:
      "A mischievous goose that balances a standard wine bottle. It's a fun conversation piece and gift for wine lovers and gamers. Printed in parts, so a multi-colour look is possible without an AMS.",
    materials: ["PLA", "Wood PLA"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "6.6–8 hrs (4–5 plates)"],
      ["Layer height", "0.28 mm"],
      ["Infill", "5%"],
      ["Assembly", "Parts joined with epoxy"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Modern Two-Tier Bathroom Organizer",
    category: "home-decor",
    price: 0, // TODO
    images: mw(
      "US95e1b0a8c1f8ad",
      "2025-02-05_2c663f44c88c1.jpg",
      "2025-02-20_225ce91d4d28.jpg"
    ),
    description:
      "A two-tier countertop organizer with a minimalist ribbed texture and matte finish. Holds toiletries, skincare products and towels, and suits modern and Scandinavian interiors.",
    materials: ["PLA"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "8.4–13.9 hrs"],
      ["Layer height", "0.16–0.2 mm"],
      ["Infill", "5–15%"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Candy Ghost Bowl",
    category: "festive",
    price: 0, // TODO
    images: mw(
      "US1474dde1b39b95",
      "2023-10-08_624b952db99cc.webp",
      "2023-10-08_d2e90a19e512d.webp",
      "2023-10-08_267e2b1574238.webp",
      "2023-10-08_88877f9965c74.webp"
    ),
    description:
      "A ghost-shaped bowl for candy and sweets. A fun Halloween centrepiece for parties and trick-or-treat.",
    materials: ["PLA"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "5.7–7.1 hrs"],
      ["Layer height", "0.2 mm"],
      ["Infill", "10% gyroid"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Under-Monitor Pen & Sticky Note Holder",
    category: "desk-organizers",
    price: 0, // TODO
    images: mw(
      "USf5e3c51f146b23",
      "2025-01-22_e8e79de11c31c.jpeg",
      "2025-01-22_32afe0c8a31f4.jpeg",
      "2025-01-22_d7a6394bd458b.jpeg",
      "2025-01-22_f063362ad53a4.jpeg"
    ),
    description:
      "A holder that mounts under your monitor and stores a full pad of sticky notes plus pens and pencils. Fits most monitors, with a variant for thicker ones under 50 mm. Prints without supports.",
    materials: ["PLA"],
    sizes: ["Standard", "Thick monitor (<50 mm)"],
    specs: [
      ["Print time", "3.7 hrs"],
      ["Layer height", "0.2 mm"],
      ["Infill", "25%"],
      ["Supports", "None needed"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Foldable Under-Desk Cup Holder",
    category: "desk-organizers",
    price: 0, // TODO
    images: mw(
      "US7dba467c4c9033",
      "395147b589704367.jpeg",
      "1265b7f34637bf0e.png",
      "1a9dbb8acc3c1d1c.jpeg",
      "b3eaa2b0a3a6c1f1.jpeg"
    ),
    description:
      "A fully 3D printed foldable cup holder that mounts under a desk, table or shelf. It has a print-in-place moving section and mounts with screws or strong double-sided tape. Available for different mug diameters.",
    materials: ["PLA"],
    sizes: ["85 mm", "95 mm", "105 mm"],
    specs: [
      ["Print time", "3.7–4.6 hrs (3 plates)"],
      ["Walls / infill", "4 walls, 20%"],
      ["Mounting", "Screws or double-sided tape"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Super Saiyan Figurine",
    category: "miniatures",
    price: 0,
    images: mw(
      "USc3e5c4e30677e",
      "2025-10-28_8ee7a01314de58.png",
      "2025-10-28_8df0e7a296687.png",
      "2025-10-28_2b1b12a1e7de48.png"
    ),
    description:
      "A spiky-haired anime warrior figurine, printed in one piece with optional dowels for a clean fit. Available in single-colour and multi-colour versions.",
    materials: ["PLA"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "2.3–4.1 hrs"],
      ["Layer height", "0.16 mm"],
      ["Infill", "7%"],
      ["Colours", "Single or multi-colour"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "X-Wing Kit Card Model",
    category: "miniatures",
    price: 0,
    images: mw(
      "US7e691af03593cd",
      "2025-08-15_d0b4c8cd4e4d98.png",
      "2025-08-15_b3b065ea61957.png",
      "2025-08-15_7d28c773309fb.png",
      "2025-08-15_3ba84b7ce79378.png",
      "2025-08-15_42ea99939b969.jpg"
    ),
    description:
      "A desk-sized 1:60 scale starfighter kit. Wings open and close, all parts press-fit together without glue, and it comes with a display stand and base.",
    materials: ["PLA"],
    sizes: ["75% (A1 mini)", "Full size"],
    specs: [
      ["Print time", "6.3–17.4 hrs"],
      ["Scale", "1:60"],
      ["Layer height", "0.2 mm"],
      ["Infill", "15%"],
      ["Assembly", "Press-fit, no glue"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "USB Cable & Charger Organizer Tray",
    category: "phone-gadgets",
    price: 0,
    images: mw(
      "US308523116a62c2",
      "05bde317d1901863.png",
      "ee00dc679e1c6e3c.jpeg",
      "ea73b531f8337dc5.jpeg",
      "2026-01-19_37e09651dfa658.jpeg",
      "2026-01-19_5b5b3a2817c298.jpeg"
    ),
    description:
      "A grid organizer with fixed compartments for USB cables, adapters, chargers and power banks, so nothing slides or tangles. Made for drawers, cabinets or desks.",
    materials: ["PLA"],
    sizes: ["Half (96×130 mm)", "Full (192×130 mm)"],
    specs: [
      ["Print time", "4.5–7.5 hrs"],
      ["Compartments", "16 small + 6 medium (or 12 large)"],
      ["Height", "75 mm"],
      ["Layer height", "0.28 mm"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Flexi Skeleton T-Rex",
    category: "toys-games",
    price: 0,
    images: mw(
      "UScad4f84b36c974",
      "2025-07-24_dd8326393ae9b8.png",
      "2025-08-05_3b3da268764958.png",
      "2025-08-05_eed877decd268.png",
      "2025-08-05_6b4d78d3648ed8.png"
    ),
    description:
      "A cute, fully articulated skeleton T-Rex that prints in place with no supports. A fun desk toy and gift for dino fans.",
    materials: ["PLA"],
    sizes: ["Small (15 cm)", "Big (22 cm)"],
    specs: [
      ["Print time", "1.2–3.6 hrs"],
      ["Layer height", "0.2 mm"],
      ["Infill", "5%"],
      ["Supports", "None needed"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Flexi Holding Cat",
    category: "toys-games",
    price: 0,
    images: mw(
      "US3468788e15f281",
      "2024-08-12_15f8412dc5052.jpg",
      "2024-08-12_f214d813eb4de.jpg",
      "2024-08-12_8uia99xtgaw6.jpg",
      "2024-08-12_kuzgbwevrfsk.jpg",
      "2024-08-12_d6o06n726tb2.jpg"
    ),
    description:
      "A very bendy print-in-place cat that stretches and curls like a real cat being held. Comes in standard and long lengths. No supports or assembly needed.",
    materials: ["PLA"],
    sizes: ["Standard", "Long"],
    specs: [
      ["Print time", "42 min – 6.5 hrs"],
      ["Length", "11.5 cm (single colour)"],
      ["Layer height", "0.2 mm"],
      ["Infill", "15–20%"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Articulated Cute Octopus",
    category: "toys-games",
    price: 0,
    images: mw(
      "USa9623939ffc422",
      "2025-04-13_fd5cc2d17224f8.jpg",
      "2025-04-13_fa96f2aa165e98.jpg",
      "2025-04-13_59d86af3115ff8.jpg",
      "2025-04-13_8522d377e301a8.jpg",
      "2025-04-13_61d2fb56c695.jpg"
    ),
    description:
      "An articulated octopus with wiggly, flexible legs and a cute face. Available as a multicolour print or in parts with plug-in legs.",
    materials: ["PLA"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "6.3–11.2 hrs"],
      ["Layer height", "0.2 mm"],
      ["Infill", "15%"],
      ["Supports", "None needed"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Modular Flexi Crab",
    category: "toys-games",
    price: 0,
    images: mw(
      "US2dbeb7d4f7a650",
      "2149c394c41ca4ff.jpg",
      "f4be01783e32fd6f.jpg",
      "f29e8894178ad166.jpg",
      "59765eb75659c91d.jpg",
      "f112963cda88845d.jpg"
    ),
    description:
      "A flexible, articulated crab made of modular parts, so you can mix and match colours. Quick to print and needs no AMS.",
    materials: ["PLA"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "1.3–1.8 hrs"],
      ["Colours", "1, 2 or 3-colour profiles"],
      ["Layer height", "0.24 mm"],
      ["Infill", "5%"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Oriental Wish Dragon Statue",
    category: "miniatures",
    price: 0,
    images: mw(
      "USb2b077bef9d4f6",
      "2026-01-18_f3a1274e31e488.png",
      "2026-01-18_661bfd1bd120c8.png",
      "26f013106c1fd0e2.webp"
    ),
    description:
      "A detailed oriental dragon sculpture printed as a single solid piece with a stable base. Ready to display or paint.",
    materials: ["PLA", "PLA+"],
    sizes: ["Small (10 cm)", "Standard (20 cm)"],
    specs: [
      ["Print time", "2.9–16.1 hrs"],
      ["Layer height", "0.16–0.2 mm"],
      ["Infill", "10–15%"],
      ["Supports", "Tree supports required"],
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
  {
    title: "Detailed Robotic Scorpion",
    category: "home-decor",
    price: 0,
    images: mw(
      "US7fbc77e08df1d9",
      "2025-06-20_374dc15305c288.jpg",
      "2025-06-19_9b337640a3fe28.jpg",
      "2025-06-19_a01c6bdb9164a8.jpg",
      "2025-06-19_71dc23a1d9fe28.jpg",
      "2025-06-19_be7858ae089678.jpg"
    ),
    description:
      "A decorative mechanical scorpion with a very high level of detail. A static collector's piece, pre-oriented for easy printing.",
    materials: ["PLA"],
    sizes: ["Small", "Large"],
    specs: [
      ["Print time", "1.5–4.1 hrs"],
      ["Layer height", "0.2 mm"],
      ["Infill", "15%"],
      ["Supports", "Required"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Laptop Stand",
    category: "desk-organizers",
    price: 0,
    images: mw(
      "US18fa3160d05e02",
      "2023-12-20_b6167af2159c9.jpg",
      "2023-12-20_4ac097a4ef272.jpg",
      "2023-12-20_979ef7d42c4cc.png",
      "2023-12-20_5fa2b2a07e341.png"
    ),
    description:
      "A sturdy raised laptop stand with an upgraded look and better airflow, printed in four parts.",
    materials: ["PLA", "PETG"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "3.5–4.7 hrs (3–4 plates)"],
      ["Layer height", "0.28 mm"],
      ["Infill", "15%"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Foldable Wing Dragon Figure",
    category: "miniatures",
    price: 0,
    images: mw(
      "US160281c5744f63",
      "2025-07-08_264687a245f62.jpg",
      "2025-07-08_a2bc37a78f35e.jpg",
      "2025-07-08_a7b108d3d260c.jpg",
      "2025-07-08_f811d2a8954f3.jpg",
      "2025-07-08_6ce46821c2179.jpg"
    ),
    description:
      "A dragon figure with foldable wings that prints with no supports. Available in single-colour, dual-colour and painted-eye versions.",
    materials: ["PLA"],
    sizes: ["Standard", "Enlarged"],
    specs: [
      ["Print time", "3.3–6.6 hrs"],
      ["Layer height", "0.24 mm"],
      ["Supports", "None needed"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Fire Dragon Voronoi Sculpture",
    category: "home-decor",
    price: 0,
    images: mw(
      "USd3dfee7605db2b",
      "19e3073e678b356a.jpeg",
      "04ca715762744c42.jpg",
      "78319c6e2b673a1e.jpg",
      "0a9144eea116e88e.png"
    ),
    description:
      "A lattice-structured dragon sculpture that looks like living flames. It works as a display piece, or as a mood lamp when backlit.",
    materials: ["PLA"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "2.7–9.5 hrs"],
      ["Layer height", "0.2 mm"],
      ["Infill", "10–15%"],
      ["Supports", "Tree supports required"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Articulated Little White Dragon",
    category: "toys-games",
    price: 0,
    images: mw(
      "USccf2ae3472211b",
      "2024-10-07_6b65dee2424b2.jpg",
      "2024-10-07_6bb65d614cc82.jpg",
      "02ed9cca-282f-4762-8415-6b1d07f84cd3.webp",
      "2f3236c4-045d-461b-a7d7-7e9da405ad75.webp",
      "4df293d1-eeb8-4d02-94aa-bde30eb04e21.webp"
    ),
    description:
      "A long articulated dragon with reinforced joints, improved horns and a heavier feel. Prints in one piece.",
    materials: ["PLA"],
    sizes: ["31.5 cm (mini)", "37 cm", "42 cm"],
    specs: [
      ["Print time", "2.2–5 hrs"],
      ["Walls", "2–3"],
      ["Infill", "15%"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Flexi Winged Creature",
    category: "toys-games",
    price: 0,
    images: mw(
      "US866ae4487c227c",
      "2025-12-19_e54da8c3f24de8.jpg",
      "2025-12-19_2f65d6d9833a38.jpg",
      "2025-12-19_a6e9c2ec73ff98.jpg",
      "2025-12-19_64499b5cc300b.jpg",
      "2025-12-19_e5ed71649baa68.jpg"
    ),
    description:
      "A flexible flying creature with bendy wings, built from 6 parts that fit together with tenons and glue. It's compatible with A1 mini.",
    materials: ["PLA"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "7.1–9.6 hrs"],
      ["Parts", "6"],
      ["Assembly", "Tenons + glue"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Mecha Psychic Statue",
    category: "miniatures",
    price: 0,
    images: mw(
      "USb02517fc05d469",
      "2025-08-23_2f0e90ea65a608.jpg",
      "2025-08-23_83b4ed5c0d63e8.jpg",
      "2025-08-23_eeb3dd644d0978.jpg",
      "2025-08-23_f293d0a9f56c38.jpg",
      "2025-08-23_df219aec50bcc8.jpg"
    ),
    description:
      "A full-body armoured mecha statue with a sweeping tail that acts as a counterbalance, and heel claws for a stable stance. Ready for display or painting.",
    materials: ["PLA"],
    sizes: ["11 cm", "15 cm", "25 cm"],
    specs: [
      ["Print time", "2.1–14.7 hrs"],
      ["Layer height", "0.12–0.2 mm"],
      ["Supports", "Required"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Caped Vigilante Skyscraper Statue",
    category: "miniatures",
    price: 0,
    images: mw(
      "USda18f1d32f32f6",
      "b1c7eabc776597b1.png",
      "172fc8b0f57898d6.png",
      "b1a238a6b093d9b2.jpeg",
      "2a4992e701007f5e.jpeg",
      "2e287ad62a6c7258.jpeg"
    ),
    description:
      "A detailed vigilante figure crouched on a gothic ledge, with a wind-swept cape and a sculpted base. Printed as a solid piece.",
    materials: ["PLA", "PLA Tough+"],
    sizes: ["Standard", "250 mm"],
    specs: [
      ["Print time", "2.7–12.2 hrs"],
      ["Layer height", "0.16–0.2 mm"],
      ["Infill", "15%"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Black Hole Lamp V2",
    category: "lighting",
    price: 0,
    images: mw(
      "US3946ac792b3170",
      "b3d8f06276a6ce8a.png",
      "8a1beb238687a085.png",
      "81f8bf28cbe09b14.jpeg",
      "c7973a5ddb8d850a.jpeg",
      "b4d2106c2a3a2036.jpeg"
    ),
    description:
      "A light-up display lamp shaped like a black hole, with a one-piece glowing disc and a stand. Needs an LED lamp kit and two filament colours.",
    materials: ["PLA"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "10.2–15.3 hrs (3 plates)"],
      ["Build volume needed", "156 × 156 × 220 mm"],
      ["Assembly", "Glue"],
      ["Light source", "LED lamp kit"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Hot Air Balloon Lamp Shade",
    category: "lighting",
    price: 0,
    images: mw(
      "USf585f4cabdba0f",
      "2025-01-16_14e7c8d5cb2e38.jpg",
      "2025-01-16_f21a43152bb288.jpg",
      "2025-01-16_a3b765d7abecb8.jpg",
      "2025-01-16_4f47c321126098.jpg",
      "2025-01-15_e8ac340bbe3678.jpg"
    ),
    description:
      "A cute hot air balloon lamp shade, 18 cm across, printed in vase mode for a soft glow. Several sizes make a matching set.",
    materials: ["PLA Matte"],
    sizes: ["75%", "100%", "120%", "150%"],
    specs: [
      ["Print time", "3.6–4.2 hrs"],
      ["Diameter", "18 cm"],
      ["Bulb opening", "Under 50 mm"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Pixel Block Lantern Lamp",
    category: "lighting",
    price: 0,
    images: mw(
      "US591df2517b8c57",
      "e1e45238da27138a.jpg",
      "f8cc22ede2277e1b.jpg",
      "1fd146485c54e443.jpg",
      "5e8b91ebbc2bccf0.jpg",
      "b60dba7234edf66b.jpg"
    ),
    description:
      "A game-inspired pixel lantern that holds a tealight for warm decorative light. Quick assembly, no AMS needed.",
    materials: ["PLA"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "4.9–9.9 hrs"],
      ["Layer height", "0.16 mm"],
      ["Infill", "15%"],
      ["Light source", "LED tealight"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Dragon Breathing Fire Lamp",
    category: "lighting",
    price: 0,
    images: mw(
      "US92df35eb770b87",
      "2025-09-10_469570298244a.jpg",
      "2025-09-10_541759791099a8.jpg",
      "2025-09-10_ac6db820ca3028.jpg",
      "2025-09-10_4df82d6b056048.jpg",
      "2025-09-10_ae7eac9fd69218.jpg"
    ),
    description:
      "A flying dragon whose fiery breath is the light source, with thick and thin flame sections for a realistic glow. Needs an LED lamp kit.",
    materials: ["PLA"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "2.4–5.2 hrs"],
      ["Variants", "Zero-glue option available"],
      ["Light source", "LED lamp kit"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Prism Table Lamp",
    category: "lighting",
    price: 0,
    images: mw(
      "US17fd49eace981d",
      "2025-08-15_1ae3ae9604637.jpg",
      "2025-08-15_e1f59748f6e978.jpg",
      "2025-08-15_8f57e8e8835908.jpg",
      "2025-08-15_c5589957f5a308.jpg",
      "2025-08-15_2ac9d8c18d189.jpg"
    ),
    description:
      "A minimalist, futuristic table lamp with pixel-like cutouts and an inner glow. Printed in separate parts with no AMS, and works with RGBW puck lights.",
    materials: ["PLA Matte", "PETG Translucent"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "9.1–10.8 hrs (2–4 plates)"],
      ["Dimensions", "73 × 73 × 218 mm"],
      ["Layer height", "0.28 mm"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Threaded Vase-Mode Table Lamp",
    category: "lighting",
    price: 0,
    images: mw(
      "USc54fb50f0d5c19",
      "2025-06-05_26880da676e9.jpg",
      "2025-05-26_df8f1f073c227.jpg",
      "2025-05-26_d60c93e509603.jpg",
      "2025-05-26_63533ed5a16d8.jpg",
      "2025-05-26_078ff765a001c.jpg"
    ),
    description:
      "A designer-style vase-mode lamp where the shade screws into the base. Fits an LED lamp kit, and the base can be modified for an E14 or E27 socket.",
    materials: ["PETG", "PLA"],
    sizes: ["LED kit base", "E27 base"],
    specs: [
      ["Print time", "Shade 2.1 hrs, base 1.2 hrs"],
      ["Layer height", "0.2 mm"],
      ["Assembly", "Screw-in shade"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Magic Campfire LED Lamp",
    category: "lighting",
    price: 0,
    images: mw(
      "US43c5454060b55f",
      "2026-01-12_86681aa349be18.jpg",
      "2026-01-11_ddacb52e180528.jpg",
      "2026-01-11_1559ef011e8208.jpg",
      "2026-01-11_baa6cfa305696.jpg",
      "2026-01-11_572b47f1a861.jpg"
    ),
    description:
      "A campfire-shaped lamp with a glowing body, 21 × 21 × 26 cm when finished. Works with an LED lamp kit or an E27 plug.",
    materials: ["PLA", "PETG"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "26.1 hrs (3 plates)"],
      ["Dimensions", "21 × 21 × 26 cm"],
      ["Tip", "Milky white filament for the body"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Turbocharger Desk Lamp",
    category: "lighting",
    price: 0,
    images: mw(
      "US169953286e3116",
      "7edcef75bad3b835.png",
      "25ad9a38e9c9f964.jpg",
      "7f4f3285c807c9bd.jpg",
      "1b33f217adbb8383.png",
      "a784b9c3440ba708.png"
    ),
    description:
      "A desk lamp shaped like a turbo housing, with a spinning compressor wheel and a glowing air filter. The nameplate can be personalised with your own text.",
    materials: ["PLA"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "16 hrs (8 plates)"],
      ["Hardware", "2 × M4×25 screws and nuts"],
      ["Light source", "LED lamp kit"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Cloud Table Lamp",
    category: "lighting",
    price: 0,
    images: mw(
      "US785629d640df37",
      "2025-11-18_fc807149f6f17.webp",
      "2025-11-18_04892ba5a95468.webp",
      "2025-11-18_4e2e3008af2718.webp",
      "2025-11-18_4ef0ad1cd37bd8.webp",
      "2025-11-18_19d636c83adc7.webp"
    ),
    description:
      "A pleated, cloud-inspired shade with a soft glow, paired with a minimalist or ribbed base. Also works as a pendant light.",
    materials: ["PLA", "PLA Matte"],
    sizes: ["Peak base", "Ridge base"],
    specs: [
      ["Print time", "Shade 3.9 hrs, bases 6.5 hrs"],
      ["Shade size", "160 × 200 mm"],
      ["Bulb", "LED, 9W or less"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Engine Piston Lamp",
    category: "lighting",
    price: 0,
    images: mw(
      "US9440c73a680139",
      "2025-01-12_b1f16ced8c35f.jpg",
      "2025-01-12_446100cca9c6a.jpg",
      "2025-01-12_7bf4eb58a23c3.jpg",
      "2025-01-12_0fe38460ece04.jpg"
    ),
    description:
      "A mechanical engine-style LED lamp with a rotating wheel. Prints without supports and assembles with printed screws and threads.",
    materials: ["PLA"],
    sizes: ["Standard", "A1 mini strength"],
    specs: [
      ["Print time", "15.1–23.4 hrs (4–7 plates)"],
      ["Supports", "None needed"],
      ["Light source", "LED lamp kit"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Wavy Table Lamp",
    category: "lighting",
    price: 0,
    images: mw(
      "US47c2e40a869ac9",
      "d7797ddba8c41acb.jpg",
      "81f4f7242fee6062.jpg",
      "3c0cb8495926e847.jpg",
      "a40d2fab0b3b6a48.jpg",
      "cb549479ffce698f.jpg"
    ),
    description:
      "A smooth, flowing lamp with soft curves that looks good lit or unlit. Comes with a base for an LED lamp kit and one for a standard E27 bulb.",
    materials: ["PLA"],
    sizes: ["LED kit base", "E27 base"],
    specs: [
      ["Print time", "Shade 4.2 hrs, base 2.5 hrs"],
      ["Layer height", "0.2 mm"],
      ["Bulb", "LED only"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Coral Lamp",
    category: "lighting",
    price: 0,
    images: mw(
      "US81b201d5241104",
      "2025-08-23_8280735c3f12b.png",
      "2025-08-23_329de136e80a7.png",
      "2025-08-08_66af506ab6a608.png",
      "2025-08-08_e852a768e7fdf.jpg",
      "2025-08-08_be119130073ab.jpg"
    ),
    description:
      "A decorative lamp inspired by coral growth. Its organic structure creates a lively play of light and shadow.",
    materials: ["PLA"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "22.2 hrs (2 plates)"],
      ["Filament", "About 358 g"],
      ["Supports", "Tree supports"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Snail Lamp",
    category: "lighting",
    price: 0,
    images: mw(
      "US9bcfd41aaf737e",
      "2026-01-03_3da568319e06a8.jpg",
      "2026-01-03_31269656e0ec3.jpg",
      "2026-01-03_c2a29ff4c0ffc8.jpg",
      "2026-01-03_d83e4b2cca53d.jpg",
      "2026-01-03_c3708220a41e1.jpg"
    ),
    description:
      "A realistic snail lamp with a ribbed shell that diffuses the light from a tealight or LED strip. Cosy for shelves, nightstands and desks.",
    materials: ["PLA"],
    sizes: ["Right-facing", "Left-facing"],
    specs: [
      ["Print time", "Body 3.5 hrs, shell 5.6 hrs"],
      ["Layer height", "0.2 mm"],
      ["Fits", "A1 mini and larger"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Large Illuminated Moon Wall Lamp",
    category: "lighting",
    price: 0,
    images: mw(
      "USe770d4f948eabb",
      "2024-10-25_92baa45f669e5.png",
      "2026-01-12_6a0657540f4c78.jpg",
      "d54188b3eae7b014.jpg",
      "2026-01-12_e05b6a143b5748.jpg",
      "2026-01-12_5ee941edd941a8.jpg"
    ),
    description:
      "A large moon wall lamp about 50 cm across, made from four pieces on a subtle frame. Lit with an LED strip behind it.",
    materials: ["PLA"],
    sizes: ["25 cm", "50 cm", "60% (A1 mini)"],
    specs: [
      ["Print time", "12–62 hrs"],
      ["Layer height", "0.16–0.2 mm"],
      ["Supports", "None needed"],
      ["Light source", "COB LED strip"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Tripod Table Lamp",
    category: "lighting",
    price: 0,
    images: mw(
      "US6acbe7f28bf395",
      "8aa1045f114f9851.png",
      "2025-06-19_17e91217ec664.png",
      "23c911d8d4ba38b1.jpg",
      "fb384df9b9430003.png",
      "ff677f38f5b5df38.png"
    ),
    description:
      "A stylish tripod-stand table lamp with six interchangeable shade designs. Works with an LED lamp kit or an E27 bulb.",
    materials: ["PLA"],
    sizes: [
      "Hex Big",
      "Hex Small",
      "Triangle",
      "Voronoi",
      "Diamond Big",
      "Diamond Horizontal",
    ],
    specs: [
      ["Print time", "Shades ~1 hr, tripod ~3.5 hrs"],
      ["Assembled height", "230 mm"],
      ["Shade", "130 × 150 mm"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Reactor Core Lamp",
    category: "lighting",
    price: 0,
    images: mw(
      "US6c138be50013ec",
      "2024-05-26_4308335db0309.jpg",
      "2024-05-26_86fc1928e696e.jpg",
      "2024-05-18_c4a3bd96812c1.jpg",
      "2024-05-26_13cfc31cf7aad.jpg",
      "2024-05-18_f217488e86f98.jpg"
    ),
    description:
      "A detailed multi-part reactor-core lamp with copper coils, rings and a display base. Prints in several colours with no supports.",
    materials: ["PLA"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "3.1–4.3 hrs per set"],
      ["Layer height", "0.2 mm"],
      ["Colours", "Black, white, grey, copper"],
      ["Light source", "LED lamp kit"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Lush Leaf Pendant Lamp",
    category: "lighting",
    price: 0,
    images: mw(
      "US23e095dc27bee7",
      "2025-10-23_40d0dc7bd1da2.jpg",
      "2025-10-21_e825cc208942d.jpg",
      "2025-10-20_f9613bc04ac5f8.jpg",
      "2025-10-20_3f2110c0a661f.jpg",
      "2025-10-20_5d5a73bbee6f88.jpg"
    ),
    description:
      "A large lamp built from layered leaves on a push-fit frame, 455 mm wide. Use it as a hanging pendant or on the matching base.",
    materials: ["PLA"],
    sizes: ["Pendant", "Standing"],
    specs: [
      ["Print time", "11–11.4 hrs (6–7 plates)"],
      ["Dimensions", "455 × 333 mm"],
      ["Assembly", "Push-fit, no glue"],
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
    title: "Armored Hero Helmet MK3/MK7",
    category: "cosplay",
    price: 0,
    images: mw(
      "US84179b916f071d",
      "2024-03-05_476b423077a26.jpeg",
      "2024-03-05_a67ddee1c05e1.jpeg",
      "2024-03-05_206514b05181.jpeg",
      "2024-03-05_5d58666374ae6.jpeg",
      "2024-03-05_ffd1e98f1e3f.jpeg"
    ),
    description:
      "A wearable armored-hero helmet with easy-attach ears and an eye mask, built from several parts that join with glue or PLA welding. Add LED eyes for a glowing cosplay finish.",
    materials: ["PLA"],
    sizes: ["Standard", "110% (A1 mini)"],
    specs: [
      ["Print time", "21–36 hrs (4–6 plates)"],
      ["Layer height", "0.2 mm"],
      ["Infill", "15%"],
      ["Assembly", "Glue or PLA welding"],
      ["Extras", "Optional LED eyes"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Futuristic Pistol Prop Replica",
    category: "cosplay",
    price: 0,
    images: mw(
      "USdd55592b9f8a34",
      "2025-05-27_635d75e39c107.jpg",
      "2025-05-27_d876466ded81b.jpg",
      "2025-05-27_4bd82f61f0caa.jpg",
      "2025-05-27_a558debba6a51.jpg",
      "2025-05-27_e8c7212bd30eb.jpg"
    ),
    description:
      "A detailed non-functional prop replica for display and cosplay. It has a moving slide, a working trigger mechanism and a removable magazine. Snap-fit assembly with no glue, and only a rubber band is needed.",
    materials: ["PLA", "PLA Matte"],
    sizes: ["77% (A1 mini)", "90%", "100%"],
    specs: [
      ["Print time", "11–16 hrs (5–6 plates)"],
      ["Layer height", "0.2 mm"],
      ["Infill", "15%"],
      ["Assembly", "Snap-fit + rubber band"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  {
    title: "Book Page Holder",
    category: "functional",
    price: 0,
    images: mw("US1a1df6a86ce156", "2025-08-11_d26cc1043c92e.jpg"),
    description:
      "A thumb ring that holds your book open one-handed. It has a fully rotating inner ring for comfort and prints in place with no assembly.",
    materials: ["PLA"],
    sizes: ["22 mm ring", "25 mm ring"],
    specs: [
      ["Print time", "27–31 min"],
      ["Layer height", "0.2 mm"],
      ["Infill", "5–15%"],
      ["Assembly", "Print-in-place"],
      ["Dispatch", "2–3 business days"],
    ],
  },
  // Paste these into your existing `seeds` array.
  // Uses your existing mw() helper. Categories used: "lighting", "gaming", "rc" — rename to match your catalog.

  // ───────────── GAMING ─────────────

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
      "A geometric desk lamp made of stacked cubes that look like they float, joined by thin 2 mm blades. Prints with no glue and no supports and takes an LED lamp kit. Height is adjustable by printing the middle part more times.",
    materials: ["PLA"],
    sizes: ["122 mm version", "117 mm all-in-one plate"],
    specs: [
      ["Print time", "7.4 hrs (4 plates) / 7.8 hrs (1 plate)"],
      ["Supports", "None needed"],
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
    title: "Honeycomb Xbox Controller Stand",
    category: "gaming",
    price: 0,
    images: mw(
      "USef28c5841d323a",
      "2025-11-16_bf3fd60cdf60f8.jpg",
      "2025-11-16_46fdaca70d4a5.jpg"
    ),
    description:
      "A minimal Xbox controller stand with a honeycomb pattern. Prints fast on a single plate with low infill.",
    materials: ["PLA"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "1.2–1.6 hrs (1 plate)"],
      ["Controller", "Xbox"],
      ["Dispatch", "2–3 business days"],
    ],
  },

  {
    title: "Wolverine Universal Controller Stand",
    category: "gaming",
    price: 0,
    images: mw(
      "US1c1d26dc0e8e68",
      "3f368669995d91b6.jpeg",
      "da9fe1ffc6eac4b2.jpeg",
      "bd155f5528f59498.jpeg",
      "0c68445540933ea0.jpeg",
      "ac38ce92e8aef59b.jpeg"
    ),
    description:
      "A life-size Wolverine claw hand that holds any common gaming controller. No supports and no AMS needed, with low 5–10% gyroid infill.",
    materials: ["PLA", "Matte PLA"],
    sizes: ["Universal"],
    specs: [
      ["Print time", "23.4 hrs (6 plates)"],
      ["Supports", "None needed"],
      ["Controller", "All common gaming controllers"],
      ["Dispatch", "2–3 business days"],
    ],
  },

  {
    title: "Gaming Chopsticks",
    category: "gaming",
    price: 0,
    images: mw(
      "DSM00000003339870",
      "3b1533bca386ac63.png",
      "d45a63404f60079c.png",
      "618f444afbf82b25.png",
      "43f6d9dfd9f877f8.png"
    ),
    description:
      "Gaming-inspired chopsticks designed as a fun novelty for gamers at mealtime.",
    materials: ["PLA"],
    sizes: ["Standard"],
    specs: [
      ["Type", "Novelty chopsticks"],
      ["Dispatch", "2–3 business days"],
    ],
  },

  {
    title: "Xbox Series Controller Stand",
    category: "gaming",
    price: 0,
    images: mw(
      "US1eda674df9e1a8",
      "2025-09-05_ad4068cef85608.jpg",
      "2025-09-05_299459eb6bf108.jpg",
      "2025-09-05_2843ae584e4b18.jpg",
      "2025-09-05_c58d19f915c7d.jpg"
    ),
    description:
      "A simple, quick-to-print stand for the Xbox Series controller.",
    materials: ["PLA"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "1.7–2 hrs (1 plate)"],
      ["Controller", "Xbox Series X|S"],
      ["Dispatch", "2–3 business days"],
    ],
  },

  {
    title: "Xbox Controller Steering Wheel",
    category: "gaming",
    price: 0,
    images: mw(
      "US5ef2e8c92e7e04",
      "2024-12-09_1fb16bab67fdb.gif",
      "2024-12-09_2a88fbd8656a5.gif"
    ),
    description:
      "A mini steering wheel frame that fits an Xbox controller, spinning on a 608 bearing. Needs a 608 bearing (22 mm) and superglue. Over time the frame can leave shiny patches on the controller (cosmetic only).",
    materials: ["PLA"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "42 min (1 plate)"],
      ["Filament", "About 12 g"],
      ["Extra parts", "608 bearing, superglue"],
      ["Dispatch", "2–3 business days"],
    ],
  },

  {
    title: "Titan God Atlas Controller Stand",
    category: "gaming",
    price: 0,
    images: mw(
      "USfdb316aa76a565",
      "fd58f97ae3b93da8.jpeg",
      "fe046b066b6cd967.webp",
      "b4d05e456744699f.webp",
      "fb978fdf01e91645.webp",
      "e421b7c5ac6b53c6.jpeg"
    ),
    description:
      "The Greek Titan Atlas, burdened with holding up your controller instead of the globe. Separate profiles for Xbox One and PS5 controllers.",
    materials: ["PLA"],
    sizes: ["Xbox One", "PS5"],
    specs: [
      ["Print time", "12.2 hrs Xbox One / 8 hrs PS5"],
      ["Plates", "1"],
      ["Dispatch", "2–3 business days"],
    ],
  },

  {
    title: "Night Fury Xbox Controller Stand",
    category: "gaming",
    price: 0,
    images: mw(
      "USc16c9ea7215125",
      "78c925f87e4de7df.png",
      "3ea36cf3c86b1bf2.jpg",
      "de7a685a8d337ec1.jpg",
      "a74c5e53eec12a2c.jpg",
      "887a2d7019eca997.jpg"
    ),
    description:
      "A Night Fury dragon holding an Xbox controller. Supports are needed under the claws.",
    materials: ["PETG"],
    sizes: ["Xbox"],
    specs: [
      ["Print time", "9.6 hrs (1 plate)"],
      ["Filament", "About 235 g"],
      ["Supports", "Needed under the claws"],
      ["Dispatch", "2–3 business days"],
    ],
  },

  {
    title: "Organic Controller Support",
    category: "gaming",
    price: 0,
    images: mw(
      "US5016e20ca339de",
      "86bed7fa004e97fb.png",
      "932019a09f16187f.jpg",
      "063fbc2f69ead662.jpeg",
      "87f587f898ab95bb.jpeg",
      "926994978a12cee0.jpeg"
    ),
    description:
      "A modern controller stand with an organic lattice (voronoi) design. Curved contact surfaces cradle the controller and keep pressure off the analog sticks. Single-piece print with separate Xbox, PS5 and A1 mini profiles.",
    materials: ["PLA", "PETG"],
    sizes: ["Xbox", "PS5", "A1 mini"],
    specs: [
      ["Print time", "5 hrs Xbox / 5.4 hrs PS5 / 3.8 hrs A1 mini"],
      ["Plates", "1"],
      ["Controller", "Xbox Series X|S, Xbox One, PS5"],
      ["Dispatch", "2–3 business days"],
    ],
  },

  {
    title: "Crystal Xbox One Controller Holder",
    category: "gaming",
    price: 0,
    images: mw(
      "US2340f268188466",
      "2024-08-03_15430807768ad.jpg",
      "2024-08-03_a34c7a3db0f49.jpg",
      "2024-08-03_2578065dc65e2.jpg"
    ),
    description:
      "A crystal-shaped holder for the Xbox One controller. Prints without supports at 10% infill. Also available as a split-crystal version and an A1 mini profile.",
    materials: ["PLA"],
    sizes: ["Standard", "Split crystal", "A1 mini"],
    specs: [
      ["Print time", "8.4 hrs (1 plate)"],
      ["Supports", "None needed"],
      ["Controller", "Xbox One"],
      ["Dispatch", "2–3 business days"],
    ],
  },

  {
    title: "Articulated PlayStation Shelf Buddies",
    category: "gaming",
    price: 0,
    images: mw(
      "US9e39f812d4b507",
      "2026-01-13_b462e433a621e.png",
      "2025-10-16_a60cc81fa1515.jpg",
      "2025-10-16_7b65ae9cb673a8.jpg",
      "2025-10-16_0c74d48fb7c69.jpg",
      "2025-10-16_5090329b2115c8.jpg"
    ),
    description:
      "Four poseable shelf buddies based on the PlayStation button symbols. Supports are needed for the triangle and the square.",
    materials: ["PLA"],
    sizes: ["Set of 4"],
    specs: [
      ["Print time", "7.2 hrs (4 plates)"],
      ["Filament", "About 112 g"],
      ["Supports", "Triangle and square"],
      ["Dispatch", "2–3 business days"],
    ],
  },

  {
    title: "PS5 Custom Front Plates (Anime, Games, Movies)",
    category: "gaming",
    price: 0,
    images: mw(
      "USed49dbb19707d4",
      "2ec6364e3d222df7.png",
      "51f52e3bcded811c.jpg",
      "8524f2e783668765.jpg",
      "9e70786b3faaa035.jpg",
      "8ef9195f9f407448.jpg"
    ),
    description:
      "Multicolor custom centre panels for the PS5, with designs from anime, games and movies. No supports needed. For the Slim, scale X to 70% and Y to 85%.",
    materials: ["PLA", "PETG"],
    sizes: ["PS5 standard", "PS5 Slim (rescaled)"],
    specs: [
      ["Print time", "18.3 hrs (11 plates, base profile)"],
      ["Supports", "None needed"],
      ["Colors", "Multicolor / AMS ready"],
      ["Dispatch", "2–3 business days"],
    ],
  },

  {
    title: "PS5 DualSense Controller Stand",
    category: "gaming",
    price: 0,
    images: mw("USfdc1476726b55", "17630cc3f21ca9d9.jpg"),
    description:
      "A stylish stand for the PS5 DualSense controller, printed in 5 colors on a single AMS with a pause added for the color swap.",
    materials: ["PLA"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "2.5–2.8 hrs (1 plate)"],
      ["Colors", "5 (one AMS, pause to swap)"],
      ["Controller", "PS5 DualSense"],
      ["Dispatch", "2–3 business days"],
    ],
  },

  {
    title: "Cubone Skull Universal Controller Holder",
    category: "gaming",
    price: 0,
    images: mw(
      "US29321c5b72e0d0",
      "f76e81ae33a8c45e.png",
      "07c6b13d923f0e01.png",
      "40ee1a31d78302ac.png",
      "cfbaebf717841eb3.png",
      "7a4e699da94096e3.png"
    ),
    description:
      "A Cubone skull that holds most gaming controllers. No post-processing needed. Users also report it fitting Machenike G1, Switch 1 Joy-Cons, EasySMX S10 and the NVIDIA Shield controller.",
    materials: ["PLA"],
    sizes: ["Universal"],
    specs: [
      ["Print time", "3.9 hrs (1 plate)"],
      ["Controller", "Universal"],
      ["Post-processing", "None needed"],
      ["Dispatch", "2–3 business days"],
    ],
  },

  {
    title: "Xbox Controller Pillow Stand",
    category: "gaming",
    price: 0,
    images: mw(
      "USa825f17aa9d46a",
      "2025-09-28_53bb2612e152.jpg",
      "2025-09-27_24ac3be3971878.jpg",
      "2025-09-27_507dc953a0d0d.jpg",
      "2025-09-27_5804375c0bd09.jpg",
      "2025-09-27_fc592f01e23bf8.jpg"
    ),
    description:
      "A pillow-shaped stand for the Xbox wireless controller, printable without supports even on small printers like the A1 mini. Fast and lightweight profiles are available.",
    materials: ["PLA"],
    sizes: ["Standard", "Fast lightweight"],
    specs: [
      ["Print time", "5.3 hrs standard / 3.4 hrs fast"],
      ["Supports", "None needed"],
      ["Controller", "Xbox wireless (3rd and 4th gen)"],
      ["Dispatch", "2–3 business days"],
    ],
  },

  {
    title: "Special Ops Soldier Controller Stand",
    category: "gaming",
    price: 0,
    images: mw(
      "USad7bc6e761a49e",
      "da52d9cb0f9eadbb.jpeg",
      "903a50bc546916c1.jpeg",
      "0830258485e1afd2.jpeg",
      "ec639fa0b3915090.jpeg",
      "73fdd067a4fb55a2.jpeg"
    ),
    description:
      "A special ops soldier holding your controller, made as a controller-stand version of the designer's pen holders. The Xbox One and PS5 versions are not interchangeable.",
    materials: ["PLA"],
    sizes: ["Xbox One", "PS5"],
    specs: [
      ["Print time", "8.9 hrs (1 plate)"],
      ["Controller", "Xbox One or PS5 (separate files)"],
      ["Dispatch", "2–3 business days"],
    ],
  },

  {
    title: "Dual Xbox Controller and Headset Holder",
    category: "gaming",
    price: 0,
    images: mw(
      "USb914795af49710",
      "66b976ed7515515b.jpg",
      "356ed204eb03409a.jpeg",
      "8a54f4cf53993978.jpeg",
      "927399a3a2a1e646.jpeg",
      "c631871bb7817af7.jpeg"
    ),
    description:
      "A compact desk organizer with a spot for two Xbox controllers and a gaming headset.",
    materials: ["PLA"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "4.3 hrs (1 plate)"],
      ["Filament", "About 285 g"],
      ["Holds", "2 controllers + 1 headset"],
      ["Dispatch", "2–3 business days"],
    ],
  },

  {
    title: "Symbiote Controller Stand",
    category: "gaming",
    price: 0,
    images: mw(
      "USc50e673826ea28",
      "2025-08-11_9e3776c8c9e08.png",
      "2025-08-11_b1b847f22c3c98.png"
    ),
    description:
      "A Venom-inspired stand of symbiote tendrils rising from a pool of goo. Fits PS5, Xbox and Switch Pro controllers. No supports, with an optional two-color print for the eyes.",
    materials: ["PLA"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "17.5 hrs (1 plate)"],
      ["Filament", "About 190 g"],
      ["Supports", "None needed"],
      ["Controller", "PS5, Xbox, Switch Pro"],
      ["Dispatch", "2–3 business days"],
    ],
  },

  {
    title: "Baby Groot Xbox Controller Stand",
    category: "gaming",
    price: 0,
    images: mw(
      "US6dd9ef75fc368f",
      "7e38271353cc04c9.png",
      "7a56f1a3225dd684.jpeg",
      "1ad0ec0112a4da36.jpeg",
      "db011d7b592d2f84.png"
    ),
    description:
      "A Baby Groot stand for the Xbox controller. A remix of an earlier Thingiverse design.",
    materials: ["PLA"],
    sizes: ["Xbox"],
    specs: [
      ["Print time", "5.5 hrs (1 plate)"],
      ["Filament", "About 177 g"],
      ["Controller", "Xbox"],
      ["Dispatch", "2–3 business days"],
    ],
  },

  // ───────────── RC CAR / PARTS ─────────────

  {
    title: "RC Traffic Cones",
    category: "rc",
    price: 0,
    images: mw(
      "USe0b75a067322ce",
      "2024-03-01_dfd25149b4549.jpg",
      "2024-03-01_a364ce5627bcc8.jpg"
    ),
    description:
      "Mini traffic cones for RC cars and toy cars, ideal as track markers, obstacles or training cones. Light, stable and printed without supports.",
    materials: ["PLA"],
    sizes: ["Standard", "200 mm"],
    specs: [
      ["Print time", "32 min (1 plate) / 42 min for 5"],
      ["Supports", "None needed"],
      ["Use", "RC tracks and toy cars"],
      ["Dispatch", "2–3 business days"],
    ],
  },

  {
    title: "Functional RC Jackstands",
    category: "rc",
    price: 0,
    images: mw(
      "US7c9529be2f41d6",
      "2024-11-23_82fdfe8480d48.jpg",
      "2024-11-23_0ea459ec60df8.jpg",
      "2024-11-23_58caf54fb4f4.jpg",
      "2024-11-23_669b03e369c5.jpg",
      "2024-11-23_998bf33904d43.jpg"
    ),
    description:
      "A pair of print-in-place jackstands with swiveling arms and an adjustable center column. The small one is about 50 mm tall (roughly 1/10 scale); the large one is about 100 mm for real use as RC car stands.",
    materials: ["PLA"],
    sizes: ["1/10 scale (~50 mm)", "Oversized (~100 mm)"],
    specs: [
      ["Print time", "About 40 min per 1/10 pair (bottom + top)"],
      ["Type", "Print in place"],
      ["Scale", "1/10 and oversized"],
      ["Dispatch", "2–3 business days"],
    ],
  },

  {
    title: "Jerry Can Miniature",
    category: "rc",
    price: 0,
    images: mw(
      "USd7f34eb331ae91",
      "2024-01-19_2b2f9e6b21dfc.png",
      "2024-01-18_384de2bb9b7de.jpg"
    ),
    description:
      "A miniature jerry can for a garage diorama or an RC car expedition.",
    materials: ["PLA"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "45 min (1 plate)"],
      ["Filament", "About 9 g"],
      ["Supports", "One tree support"],
      ["Dispatch", "2–3 business days"],
    ],
  },

  {
    title: "SCX30 Trailer with Ramps",
    category: "rc",
    price: 0,
    images: mw(
      "USaaaf577ae653a5",
      "df7c545a96befd55.jpg",
      "e8292a840e2482d9.jpg",
      "5eb1d87d68886ed3.jpg",
      "36c975c33ebb8732.jpg",
      "fca7c2ff6607195f.jpg"
    ),
    description:
      "A small trailer with ramps for the Axial SCX30 and similar crawlers. Uses M2×40 mm screws for the ramps and M2×25 or 30 mm screws for the axles. Works with Injora wheels, or stock Jeep, Bronco and K10 wheels and tires.",
    materials: ["PLA"],
    sizes: ["Standard"],
    specs: [
      ["Print time", "5.1 hrs (1 plate)"],
      ["Filament", "About 107 g"],
      ["Hardware", "M2 screws (ramps and axles)"],
      ["Dispatch", "2–3 business days"],
    ],
  },

  {
    title: "RC Trailer Tow Bar",
    category: "rc",
    price: 0,
    images: mw(
      "DSM00000001202172",
      "2025-03-12_526ncbytgvp27_img_20220825_184049.jpg",
      "2025-03-12_axu5sh5g7hxmw_img_20220825_184049.jpg",
      "2025-03-12_3gmpazm7skghj_img_20220825_184134.jpg",
      "2025-03-12_hookmeu4ermy1_20240313_124150jpg_compressed.jpeg"
    ),
    description: "A functional trailer tow bar for 1/10 scale RC cars.",
    materials: ["PLA"],
    sizes: ["1/10 scale"],
    specs: [
      ["Print time", "31 min (1 plate)"],
      ["Filament", "About 4 g"],
      ["Scale", "1/10"],
      ["Dispatch", "2–3 business days"],
    ],
  },

  {
    title: "RC Crawler Trailer 1:10",
    category: "rc",
    price: 0,
    images: mw(
      "USbd3f59a302aac5",
      "2025-01-19_2188f18d5e34f.webp",
      "2025-01-19_04a9eb0e5586d.webp"
    ),
    description:
      "A ready-to-print 1:10 scale trailer for RC crawlers. Needs 4× 6700 bearings (15×10×4), 1:10 tires, and screws: M3×25 ×1, M3×16 ×12, M3×20 ×16, M4×30 ×2, M4×8 ×2.",
    materials: ["PLA"],
    sizes: ["1:10 scale"],
    specs: [
      ["Print time", "9.1 hrs (8 plates)"],
      ["Filament", "About 281 g"],
      ["Extra parts", "Bearings, screws, 1:10 tires"],
      ["Dispatch", "2–3 business days"],
    ],
  },

  {
    title: "RC Parts Tray (1:18 / 1:24)",
    category: "rc",
    price: 0,
    images: mw(
      "US830e0f414391b2",
      "2025-06-21_0c927734133f5.png",
      "2025-06-21_151aca9269c81.jpg",
      "2025-06-21_3fb60a4c7d765.jpg",
      "2025-06-21_2e4dea09c27f18.jpg",
      "2025-06-21_c12abda1a2aa2.jpg"
    ),
    description:
      "A modular, customizable parts tray for 1/18, 1/24 or smaller RC vehicles. Trays join together with included joiners, and some parts carry editable text. The large main tray can warp, so use a clean bed and glue.",
    materials: ["PLA"],
    sizes: ["Full set", "A1 mini set"],
    specs: [
      ["Print time", "22.9 hrs (12 plates) / 9 hrs A1 mini (6 plates)"],
      ["Scale", "1/18, 1/24 and smaller"],
      ["Style", "Modular, joiners included"],
      ["Dispatch", "2–3 business days"],
    ],
  },

  {
    title: "Obstacle Course for 1:18 Crawlers",
    category: "rc",
    price: 0,
    images: mw(
      "US9d8f265879dcbe",
      "86294ee99787355d.jpg",
      "1deba5705e6026a7.jpg",
      "1e79c2273f2e5b79.jpeg",
      "96548332dd3bb74e.jpeg",
      "5a7ee3ccee7242ff.jpeg"
    ),
    description:
      "A compact obstacle course for 1:18 crawlers, about 40 × 18 cm. Includes screw-in lawn feet to anchor it in the ground outdoors, and an optional medium-difficulty middle extension.",
    materials: ["PLA"],
    sizes: ["Base course (40 × 18 cm)", "With extension"],
    specs: [
      ["Print time", "11.2 hrs (3 plates) + 15.4 hrs extension (2 plates)"],
      ["Scale", "1:18 crawlers"],
      ["Outdoor use", "Lawn feet included"],
      ["Dispatch", "2–3 business days"],
    ],
  },

  {
    title: "2026 Formula 1 Calendar",
    category: "rc",
    price: 0,
    images: mw(
      "USe9cd152becb0ef",
      "ea10420f610bc16d.png",
      "4fc49d5d60c35cdc.png",
      "2025-06-12_0241e6438874c8.jpeg",
      "2025-06-12_96a603f0d6d14.jpeg",
      "2025-06-17_a6a8e51c82ebe.webp"
    ),
    description:
      "A wall calendar with elevated circuit tracks for every grand prix of the 2026 F1 season. Shows either race dates and venues or countries and venues. Prints in black, red and white.",
    materials: ["PLA"],
    sizes: ["Standard", "A1 mini (17.5 × 15.4 cm)"],
    specs: [
      ["Print time", "3.2–3.5 hrs (1 plate)"],
      ["Filament", "About 110 g (45 g for A1 mini)"],
      ["Colors", "Black, red, white"],
      ["Dispatch", "2–3 business days"],
    ],
  },

  {
    title: "F1 Tyre Pen Pot (Pirelli)",
    category: "rc",
    price: 0,
    images: mw(
      "US4dffbac36494a5",
      "d08a2a4f21a8552d.webp",
      "94d55b6e322aa2e8.webp",
      "86e2b97dec26c402.webp",
      "34b41c3f8af9d94f.webp",
      "4af1fa0cd5437b85.webp"
    ),
    description:
      "A desk pen organizer shaped like a Pirelli F1 tyre, available in soft (red), medium (yellow), hard (white), intermediate (green) and wet (blue) compounds. Needs only one color change from black.",
    materials: ["PLA"],
    sizes: ["Soft", "Medium", "Hard", "Intermediate", "Wet"],
    specs: [
      ["Print time", "16.1 hrs (5 plates)"],
      ["Filament", "About 527 g black plus small amounts of color"],
      ["Prime tower", "Not required"],
      ["Dispatch", "2–3 business days"],
    ],
  },
];

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
