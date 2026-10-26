const fs = require("node:fs");
const path = require("node:path");

// Kontrola úplnosti překladů v data/i18n-asia/<jazyk>.json.
const root = path.resolve(__dirname, "..");
const dir = path.join(root, "data", "i18n-asia");
const places = JSON.parse(fs.readFileSync(path.join(root, "data", "mista.json"), "utf8").replace(/^﻿/, ""));
const ids = new Set(places.map((place) => place.id));
const fields = ["nazev", "zeme", "kontinent", "lead", "paranormalniAktivita", "historickaDolozenost", "nebezpecnost", "pristupnost", "praktickeInfo"];
const descriptions = ["zahada", "historie", "legenda", "paranormalni", "skepticke"];
const errors = [];
let count = 0;

if (fs.existsSync(dir)) {
  fs.readdirSync(dir).filter((file) => file.endsWith(".json")).forEach((file) => {
    const translations = JSON.parse(fs.readFileSync(path.join(dir, file), "utf8"));
    Object.entries(translations).forEach(([id, translation]) => {
      count += 1;
      const label = `${file}:${id}`;
      if (!ids.has(id)) errors.push(`${label}: unknown place`);
      fields.forEach((field) => {
        if (typeof translation[field] !== "string" || !translation[field].trim()) errors.push(`${label}: missing ${field}`);
      });
      descriptions.forEach((field) => {
        if (!translation.popisy?.[field]?.trim()) errors.push(`${label}: missing popisy.${field}`);
      });
      (translation.pribehy || []).forEach((story, index) => {
        if (!story.nazev?.trim() || !story.text?.trim()) errors.push(`${label}: incomplete pribehy[${index}]`);
      });
    });
  });
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${count} Asian-language place translations.`);
