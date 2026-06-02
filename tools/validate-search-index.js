const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const index = JSON.parse(fs.readFileSync(path.join(root, "data", "search-index.json"), "utf8").replace(/^\uFEFF/, ""));
const languages = ["cs", "en", "de", "es", "fr"];
const errors = [];

index.forEach((item, indexPosition) => {
  const label = item.id || `search-item-${indexPosition}`;
  if (!item.type) errors.push(`${label}: missing type`);
  if (!item.url?.startsWith("/")) errors.push(`${label}: missing legacy url`);
  if (!item.urls || typeof item.urls !== "object") {
    errors.push(`${label}: missing localized urls`);
    return;
  }
  languages.forEach((language) => {
    const url = item.urls[language];
    if (!url?.startsWith(`/${language}/`)) errors.push(`${label}: missing ${language} localized url`);
  });
});

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${index.length} search index records with localized URLs.`);
