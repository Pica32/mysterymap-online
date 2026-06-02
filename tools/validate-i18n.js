const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const source = fs.readFileSync(path.join(root, "i18n.js"), "utf8");
const match = source.match(/const I18N = (\{[\s\S]*?\n\});\n\n(?:const FILTER_I18N|function getInitialLanguage)/);

if (!match) {
  console.error("Could not locate I18N object in i18n.js");
  process.exit(1);
}

const i18n = vm.runInNewContext(`(${match[1]})`);
const requiredLanguages = ["cs", "en", "de", "es", "fr"];
const requiredKeys = [
  "language.label",
  "nav.map",
  "nav.places",
  "nav.rankings",
  "hero.title",
  "hero.copy",
  "filters.searchLabel",
  "filters.categories",
  "filters.themes",
  "filters.mysteryIndex",
  "map.title",
  "places.title",
  "rankings.title",
  "rankings.top",
  "rankings.continents",
  "rankings.categories",
  "rankings.themes",
  "rankings.countries"
];

const errors = [];

requiredLanguages.forEach((language) => {
  if (!i18n[language]) {
    errors.push(`Missing language pack: ${language}`);
    return;
  }
  requiredKeys.forEach((key) => {
    if (!i18n[language][key]) errors.push(`${language}: missing required UI key ${key}`);
  });
});

Object.entries(i18n).forEach(([language, pack]) => {
  Object.entries(pack).forEach(([key, value]) => {
    if (typeof value !== "string" || !value.trim()) {
      errors.push(`${language}: invalid value for ${key}`);
    }
  });
});

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${requiredLanguages.length} language packs.`);
