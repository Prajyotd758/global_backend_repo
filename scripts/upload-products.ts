/**
 * One-off seed script: uploads the plain PRODUCTS array into the MongoDB
 * `products` collection, one document at a time.
 *
 * Run (from the backend project root):
 *   npx tsx scripts/upload-products.ts --dry-run   # validate + print, no writes
 *   npx tsx scripts/upload-products.ts             # real upload
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

// Adjust this path to wherever the data file lives in the backend repo.
import { PRODUCTS } from "./products.test";

const COLLECTION = "products";
const DRY_RUN = process.argv.includes("--dry-run");

type Doc = Record<string, any>;

function validate(p: Doc): string[] {
  const errs: string[] = [];
  if (!p.title || typeof p.title !== "string") errs.push("missing title");
  if (!p.slug || typeof p.slug !== "string") errs.push("missing slug");
  if (!p.category || typeof p.category !== "string")
    errs.push("missing category");
  if (typeof p.price !== "number") errs.push("price is not a number");
  if (!Array.isArray(p.images) || p.images.length === 0) errs.push("no images");
  return errs;
}

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not set");

  // 1. Prepare: dedupe by slug (keep the first) and validate
  const seen = new Set<string>();
  const docs: Doc[] = [];
  const skipped: string[] = [];

  for (const p of PRODUCTS as Doc[]) {
    if (seen.has(p.slug)) {
      skipped.push(`"${p.title}" (duplicate slug: ${p.slug})`);
      continue;
    }
    seen.add(p.slug);

    const errs = validate(p);
    if (errs.length) {
      skipped.push(`"${p.title}" (${errs.join(", ")})`);
      continue;
    }
    docs.push({ ...p });
  }

  console.log(`Prepared ${docs.length} products (${PRODUCTS.length} in file).`);
  if (skipped.length) {
    console.warn(`\nSkipped ${skipped.length}:`);
    skipped.forEach((s) => console.warn("  - " + s));
  }

  if (DRY_RUN) {
    console.log("\n--dry-run: nothing written.");
    return;
  }

  // 2. Upload one by one
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
          {
            $set: { ...doc, updatedAt: now },
            $setOnInsert: { createdAt: now },
          },
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

    console.log(
      `\nDone. inserted: ${inserted}, updated: ${updated}, failed: ${failed}`
    );
    if (failed) process.exitCode = 1;
  } finally {
    await client.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
