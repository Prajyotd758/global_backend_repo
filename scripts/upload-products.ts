/**
 * One-off seed script: uploads PRODUCTS into the MongoDB `products` collection,
 * one document at a time.
 *
 * Run (from the backend project root):
 *   npx tsx scripts/upload-products.ts --dry-run   # validate + print, no writes
 *   npx tsx scripts/upload-products.ts             # real upload
 *   npx tsx scripts/upload-products.ts --include-placeholder-stats
 *
 * Env:
 *   MONGODB_URI   required
 *   MONGODB_DB    optional (falls back to the db name in the URI)
 *
 * Install: npm i mongodb dotenv && npm i -D tsx
 *
 * Re-running is safe: documents are upserted by `slug`, so nothing is duplicated.
 */
import "dotenv/config";
import { MongoClient } from "mongodb";

// Adjust this path to wherever you copy the frontend data file in the backend repo.
// (The file's `import type ... from "@/lib/types"` is erased by tsx, so no alias setup is needed.)
import { PRODUCTS, CATEGORIES } from "../data/products";

const COLLECTION = "products";

// These are generated placeholders in the data file (derived from the array index),
// not real store data. Left out unless you pass --include-placeholder-stats.
const PLACEHOLDER_FIELDS = ["rating", "reviews", "sold"] as const;

const args = new Set(process.argv.slice(2));
const DRY_RUN = args.has("--dry-run");
const KEEP_PLACEHOLDERS = args.has("--include-placeholder-stats");

type Doc = Record<string, any>;

function validate(p: Doc): string[] {
  const errs: string[] = [];
  if (!p.title || typeof p.title !== "string") errs.push("missing title");
  if (!p.slug || typeof p.slug !== "string") errs.push("missing slug");
  if (!p.category || typeof p.category !== "string") errs.push("missing category");
  if (typeof p.price !== "number") errs.push("price is not a number");
  if (!Array.isArray(p.images) || p.images.length === 0) errs.push("no images");
  return errs;
}

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not set");

  // 1. Prepare: dedupe by slug (keep the first), validate, strip placeholders
  const seen = new Set<string>();
  const docs: Doc[] = [];
  const skipped: string[] = [];

  for (const raw of PRODUCTS as Doc[]) {
    if (seen.has(raw.slug)) {
      skipped.push(`"${raw.title}" (duplicate slug: ${raw.slug})`);
      continue;
    }
    seen.add(raw.slug);

    const doc: Doc = { ...raw };
    if (!KEEP_PLACEHOLDERS) for (const f of PLACEHOLDER_FIELDS) delete doc[f];

    const errs = validate(doc);
    if (errs.length) {
      skipped.push(`"${raw.title}" (${errs.join(", ")})`);
      continue;
    }
    docs.push(doc);
  }

  // 2. Warn about categories that are not in CATEGORIES
  const known = new Set(CATEGORIES.map((c: Doc) => c.id));
  const unknown = [...new Set(docs.map((d) => d.category))].filter((c) => !known.has(c));

  console.log(`Prepared ${docs.length} products (${PRODUCTS.length} in file).`);
  if (skipped.length) {
    console.warn(`\nSkipped ${skipped.length}:`);
    skipped.forEach((s) => console.warn("  - " + s));
  }
  if (unknown.length) {
    console.warn(`\nCategories used by products but missing from CATEGORIES: ${unknown.join(", ")}`);
  }
  console.log(KEEP_PLACEHOLDERS ? "\nPlaceholder rating/reviews/sold: INCLUDED" : "\nPlaceholder rating/reviews/sold: omitted");

  if (DRY_RUN) {
    console.log("\n--dry-run: nothing written.");
    return;
  }

  // 3. Upload one by one
  const client = new MongoClient(uri);
  await client.connect();
  try {
    const col = client.db(process.env.MONGODB_DB).collection(COLLECTION);
    await col.createIndex({ slug: 1 }, { unique: true });
    await col.createIndex({ category: 1 });

    let inserted = 0;
    let updated = 0;
    let failed = 0;

    for (const [i, doc] of docs.entries()) {
      const label = `[${i + 1}/${docs.length}] ${doc.title}`;
      try {
        const now = new Date();
        const res = await col.updateOne(
          { slug: doc.slug },
          { $set: { ...doc, updatedAt: now }, $setOnInsert: { createdAt: now } },
          { upsert: true }
        );
        if (res.upsertedCount) {
          inserted++;
          console.log(`${label} -> inserted`);
        } else {
          updated++;
          console.log(`${label} -> updated`);
        }
      } catch (err) {
        failed++;
        console.error(`${label} -> FAILED:`, (err as Error).message);
      }
    }

    console.log(`\nDone. inserted: ${inserted}, updated: ${updated}, failed: ${failed}`);
    if (failed) process.exitCode = 1;
  } finally {
    await client.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
