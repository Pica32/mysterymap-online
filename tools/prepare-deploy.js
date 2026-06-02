const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");

const directories = ["assets", "clanky", "cs", "de", "docs", "en", "es", "fr", "landing", "mista"];
const files = [
  "_headers",
  "_redirects",
  "app.js",
  "detail.js",
  "engage.js",
  "i18n.js",
  "index.html",
  "llms.txt",
  "misto.html",
  "robots.txt",
  "sitemap.xml",
  "styles.css"
];
const dataFiles = ["articles.json", "mista.json", "search-index.json", "source-catalog.json", "source-queries.json"];

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

directories.forEach((dir) => {
  const source = path.join(root, dir);
  if (fs.existsSync(source)) fs.cpSync(source, path.join(dist, dir), { recursive: true });
});

files.forEach((file) => {
  const source = path.join(root, file);
  if (fs.existsSync(source)) fs.copyFileSync(source, path.join(dist, file));
});

fs.mkdirSync(path.join(dist, "data"), { recursive: true });
dataFiles.forEach((file) => {
  fs.copyFileSync(path.join(root, "data", file), path.join(dist, "data", file));
});

console.log(`Prepared Cloudflare deploy directory: ${dist}`);
