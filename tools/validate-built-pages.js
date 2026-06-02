const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const places = JSON.parse(fs.readFileSync(path.join(root, "data", "mista.json"), "utf8").replace(/^\uFEFF/, ""));
const articles = JSON.parse(fs.readFileSync(path.join(root, "data", "articles.json"), "utf8").replace(/^\uFEFF/, ""));
const errors = [];

places.forEach((place) => {
  const filePath = path.join(root, place.detailPath, "index.html");
  if (!fs.existsSync(filePath)) {
    errors.push(`${place.id}: missing generated page`);
    return;
  }
  const html = fs.readFileSync(filePath, "utf8");
  const checks = [
    ["title", /<title>[^<]{20,}<\/title>/],
    ["description", /<meta name="description" content="[^"]{50,}"/],
    ["canonical", /<link rel="canonical" href="https:\/\/mysterymap\.online\/(cs\/mista|en\/places|de\/orte|es\/lugares|fr\/lieux)\//],
    ["hreflang", /rel="alternate" hreflang="en"/],
    ["jsonld", /application\/ld\+json/],
    ["breadcrumb", /BreadcrumbList|Drobečková navigace/],
    ["tourist-attraction", /TouristAttraction/],
    ["trust-panel", /Ověřený redakční profil místa/],
    ["sources", /Zdroje a licence/],
    ["skeptical", /Skeptické vysvětlení/],
    ["gps", /Mapa a GPS/]
  ];

  checks.forEach(([name, pattern]) => {
    if (!pattern.test(html)) errors.push(`${place.id}: missing ${name}`);
  });
});

articles.forEach((article) => {
  const filePath = path.join(root, "clanky", article.slug, "index.html");
  if (!fs.existsSync(filePath)) {
    errors.push(`${article.id}: missing generated article page`);
    return;
  }
  const html = fs.readFileSync(filePath, "utf8");
  if (!/<script type="application\/ld\+json">/.test(html)) errors.push(`${article.id}: missing Article JSON-LD`);
  if (!/<link rel="canonical" href="https:\/\/mysterymap\.online\/(clanky|cs\/clanky|en\/articles|de\/artikel|es\/articulos|fr\/articles)\//.test(html)) {
    errors.push(`${article.id}: missing article canonical`);
  }
  if (!/Redakční průvodce s ověřitelnými zdroji/.test(html)) errors.push(`${article.id}: missing article trust panel`);
});

if (!fs.existsSync(path.join(root, "llms.txt"))) errors.push("missing llms.txt");
if (!fs.existsSync(path.join(root, "sitemap.xml"))) errors.push("missing sitemap.xml");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${places.length} built place pages and ${articles.length} articles for SEO/GEO/LLM basics.`);
