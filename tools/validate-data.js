const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const places = JSON.parse(fs.readFileSync(path.join(root, "data", "mista.json"), "utf8").replace(/^\uFEFF/, ""));

const requiredTopLevel = [
  "id",
  "slug",
  "detailPath",
  "nazev",
  "zeme",
  "kontinent",
  "lead",
  "gps",
  "kategorie",
  "temata",
  "indexTajemna",
  "paranormalniAktivita",
  "historickaDolozenost",
  "nebezpecnost",
  "pristupnost",
  "atmosfera",
  "nocniVhodnost",
  "vhodneProDeti",
  "popisy",
  "praktickeInfo",
  "pribehy",
  "zdroje"
];

const requiredDescriptions = ["zahada", "historie", "legenda", "paranormalni", "skepticke"];
const seenIds = new Set();
const seenSlugs = new Set();
const errors = [];

places.forEach((place, index) => {
  const label = place.id || `item-${index}`;

  requiredTopLevel.forEach((field) => {
    if (place[field] === undefined || place[field] === null || place[field] === "") {
      errors.push(`${label}: missing field ${field}`);
    }
  });

  if (seenIds.has(place.id)) errors.push(`${label}: duplicate id`);
  if (seenSlugs.has(place.slug)) errors.push(`${label}: duplicate slug`);
  seenIds.add(place.id);
  seenSlugs.add(place.slug);

  if (!place.detailPath?.startsWith(`/mista/${place.slug}/`)) {
    errors.push(`${label}: detailPath must be /mista/${place.slug}/`);
  }

  if (!Number.isFinite(place.gps?.lat) || place.gps.lat < -90 || place.gps.lat > 90) {
    errors.push(`${label}: invalid gps.lat`);
  }
  if (!Number.isFinite(place.gps?.lon) || place.gps.lon < -180 || place.gps.lon > 180) {
    errors.push(`${label}: invalid gps.lon`);
  }

  if (!Number.isInteger(place.indexTajemna) || place.indexTajemna < 0 || place.indexTajemna > 100) {
    errors.push(`${label}: indexTajemna must be integer 0-100`);
  }
  if (!Number.isFinite(place.atmosfera) || place.atmosfera < 0 || place.atmosfera > 5) {
    errors.push(`${label}: atmosfera must be number 0-5`);
  }

  if (!Array.isArray(place.kategorie) || place.kategorie.length === 0) {
    errors.push(`${label}: kategorie must be a non-empty array`);
  }

  if (!Array.isArray(place.temata) || place.temata.length === 0) {
    errors.push(`${label}: temata must be a non-empty array`);
  }

  if (!Array.isArray(place.pribehy) || place.pribehy.length === 0) {
    errors.push(`${label}: pribehy must be a non-empty array`);
  } else {
    place.pribehy.forEach((story, storyIndex) => {
      if (!story.nazev || !story.text || story.text.length < 50) {
        errors.push(`${label}: story ${storyIndex + 1} must include nazev and text with at least 50 chars`);
      }
    });
  }

  requiredDescriptions.forEach((field) => {
    if (!place.popisy?.[field] || place.popisy[field].length < 40) {
      errors.push(`${label}: popisy.${field} is too short or missing`);
    }
  });

  if (!Array.isArray(place.zdroje) || place.zdroje.length < 2) {
    errors.push(`${label}: at least 2 sources are required`);
  } else {
    place.zdroje.forEach((source, sourceIndex) => {
      if (!source.nazev || !source.url || !source.licence) {
        errors.push(`${label}: source ${sourceIndex + 1} must include nazev, url and licence`);
      }
    });
  }
});

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${places.length} places.`);
