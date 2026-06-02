const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const inputPath = process.argv[2] ? path.resolve(process.argv[2]) : null;
const outputPath = path.join(root, "data", "drafts.json");
const candidatesDir = path.join(root, "data", "candidates");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8").replace(/^\uFEFF/, ""));
}

const candidates = inputPath
  ? readJson(inputPath)
  : fs.readdirSync(candidatesDir)
    .filter((file) => file.endsWith(".json"))
    .flatMap((file) => readJson(path.join(candidatesDir, file)));

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const seen = new Set();
const drafts = candidates.map((candidate) => {
  const slug = slugify(candidate.nazev);
  return {
    status: "candidate",
    id: slug,
    slug,
    detailPath: `/mista/${slug}/`,
    nazev: candidate.nazev,
    zeme: candidate.zeme,
    kontinent: candidate.kontinent,
    kategorie: candidate.kategorie || ["legenda"],
    temata: candidate.temata || [],
    sensitive: Boolean(candidate.sensitive),
    sourceHints: candidate.sourceHints || [],
    editorialChecklist: {
      coordinatesChecked: false,
      sourcesChecked: false,
      textWritten: false,
      sensitiveReviewed: false,
      readyToPublish: false
    }
  };
}).filter((draft) => {
  if (seen.has(draft.id)) return false;
  seen.add(draft.id);
  return true;
});

fs.writeFileSync(outputPath, `${JSON.stringify(drafts, null, 2)}\n`, "utf8");
console.log(`Imported ${drafts.length} candidates into data/drafts.json`);
