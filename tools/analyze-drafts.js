const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const draftPath = path.join(root, "data", "drafts.json");
const outPath = path.join(root, "data", "draft-summary.json");
const drafts = JSON.parse(fs.readFileSync(draftPath, "utf8").replace(/^\uFEFF/, ""));

function countBy(values) {
  const counts = new Map();
  values.flat().filter(Boolean).forEach((value) => counts.set(value, (counts.get(value) || 0) + 1));
  return Object.fromEntries(Array.from(counts.entries()).sort((a, b) => b[1] - a[1]));
}

const summary = {
  generatedAt: new Date().toISOString(),
  total: drafts.length,
  sensitive: drafts.filter((draft) => draft.sensitive).length,
  byStatus: countBy(drafts.map((draft) => draft.status)),
  byContinent: countBy(drafts.map((draft) => draft.kontinent)),
  byCountry: countBy(drafts.map((draft) => draft.zeme)),
  byCategory: countBy(drafts.map((draft) => draft.kategorie)),
  byTheme: countBy(drafts.map((draft) => draft.temata)),
  topSourceHints: countBy(drafts.map((draft) => draft.sourceHints || []))
};

fs.writeFileSync(outPath, `${JSON.stringify(summary, null, 2)}\n`, "utf8");
console.log(`Analyzed ${drafts.length} drafts into data/draft-summary.json`);
