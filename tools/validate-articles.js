const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const articles = JSON.parse(fs.readFileSync(path.join(root, "data", "articles.json"), "utf8").replace(/^\uFEFF/, ""));
const places = JSON.parse(fs.readFileSync(path.join(root, "data", "mista.json"), "utf8").replace(/^\uFEFF/, ""));
const sources = JSON.parse(fs.readFileSync(path.join(root, "data", "source-catalog.json"), "utf8").replace(/^\uFEFF/, ""));
const placeIds = new Set(places.map((place) => place.id));
const sourceIds = new Set(sources.map((source) => source.id));
const seen = new Set();
const errors = [];

articles.forEach((article, index) => {
  const label = article.id || `article-${index}`;
  ["id", "slug", "title", "description", "category", "themes", "relatedPlaceIds", "sections", "sources"].forEach((field) => {
    if (article[field] === undefined || article[field] === null || article[field] === "") errors.push(`${label}: missing ${field}`);
  });
  if (seen.has(article.id)) errors.push(`${label}: duplicate id`);
  seen.add(article.id);
  if (!Array.isArray(article.themes) || article.themes.length === 0) errors.push(`${label}: themes must be non-empty`);
  if (!Array.isArray(article.sections) || article.sections.length < 3) errors.push(`${label}: needs at least 3 sections`);
  if (article.description.length < 80) errors.push(`${label}: description too short`);
  (article.relatedPlaceIds || []).forEach((id) => {
    if (!placeIds.has(id)) errors.push(`${label}: related place ${id} missing`);
  });
  (article.sources || []).forEach((id) => {
    if (!sourceIds.has(id)) errors.push(`${label}: source ${id} missing`);
  });
});

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${articles.length} articles.`);
