const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const errors = [];
const warnings = [];

const budgets = [
  ["assets/hero-mystery-map-1600.webp", 180_000],
  ["assets/hero-mystery-map-1000.webp", 90_000],
  ["styles.css", 30_000],
  ["app.js", 38_000],
  ["engage.js", 16_000],
  ["i18n.js", 30_000],
  ["data/search-index.json", 1_320_000]
];

budgets.forEach(([relative, maxBytes]) => {
  const filePath = path.join(root, relative);
  if (!fs.existsSync(filePath)) {
    errors.push(`${relative}: missing`);
    return;
  }
  const size = fs.statSync(filePath).size;
  if (size > maxBytes) errors.push(`${relative}: ${size} bytes exceeds budget ${maxBytes}`);
});

const legacyPng = fs.statSync(path.join(root, "assets", "hero-mystery-map.png")).size;
if (legacyPng > 1_000_000) warnings.push("hero PNG fallback is large; keep WebP preload active and use PNG only as social/fallback image.");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

if (warnings.length) console.warn(warnings.join("\n"));
console.log("Performance budgets validated.");
