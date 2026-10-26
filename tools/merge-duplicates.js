const fs = require("node:fs");
const path = require("node:path");

// Sloučí duplicitní profily míst. Šablonový profil ležící na stejném místě jako jiný profil
// se odstraní a jeho URL se přesměrují na ponechaný profil (data/place-redirects.json).
// Profily s vlastním textem se mažou jen podle ručního seznamu forcedMerges.
const root = path.resolve(__dirname, "..");
const placesPath = path.join(root, "data", "mista.json");
const redirectsPath = path.join(root, "data", "place-redirects.json");
const places = JSON.parse(fs.readFileSync(placesPath, "utf8").replace(/^﻿/, ""));
const redirects = fs.existsSync(redirectsPath) ? JSON.parse(fs.readFileSync(redirectsPath, "utf8")) : {};

const forcedMerges = {
  "paris-catacombs": "catacombes-de-paris",
  "isla-de-las-munecas": "island-of-the-dolls",
  poveglia: "poveglia-island"
};
// Obecně známý název má přednost před dílčím objektem stejného místa.
const preferred = new Set(["thingvellir", "victoria-falls", "chateau-de-gruyeres", "wieliczka-salt-mine", "sassi-di-matera", "matera-sassi-caves", "epidaurus-theatre"]);
// Různá místa, která jen leží blízko sebe a mají podobný název.
const distinctPairs = [["huaca-de-la-luna", "huaca-del-sol"], ["orongo", "rano-kau"]];

const textCounts = new Map();
const textKey = (place, field) => `${field}:${String(place.popisy?.[field] || "").replaceAll(place.nazev, "")}`;
places.forEach((place) => ["historie", "legenda", "paranormalni", "skepticke"].forEach((field) => {
  textCounts.set(textKey(place, field), (textCounts.get(textKey(place, field)) || 0) + 1);
}));
const isTemplate = (place) => ["historie", "legenda", "paranormalni", "skepticke"].filter((field) => textCounts.get(textKey(place, field)) >= 3).length >= 2;

const rad = (value) => (value * Math.PI) / 180;
function distanceKm(a, b) {
  const dLat = rad(b.gps.lat - a.gps.lat);
  const dLon = rad(b.gps.lon - a.gps.lon);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.gps.lat)) * Math.cos(rad(b.gps.lat)) * Math.sin(dLon / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(h));
}
const tokens = (id) => new Set(id.split("-").filter((word) => word.length > 3));
const shareToken = (a, b) => [...tokens(a.id)].some((word) => tokens(b.id).has(word));
const isDistinct = (a, b) => distinctPairs.some(([x, y]) => (a.id === x && b.id === y) || (a.id === y && b.id === x));

// Union-find nad dvojicemi duplicit.
const parent = new Map(places.map((place) => [place.id, place.id]));
const find = (id) => (parent.get(id) === id ? id : find(parent.get(id)));
const union = (a, b) => parent.set(find(a), find(b));

for (let i = 0; i < places.length; i += 1) {
  for (let j = i + 1; j < places.length; j += 1) {
    const a = places[i];
    const b = places[j];
    if (isDistinct(a, b) || (!isTemplate(a) && !isTemplate(b))) continue;
    const distance = distanceKm(a, b);
    if (distance < 0.1 || (distance < 0.7 && shareToken(a, b))) union(a.id, b.id);
  }
}

const clusters = new Map();
places.forEach((place) => {
  const key = find(place.id);
  if (!clusters.has(key)) clusters.set(key, []);
  clusters.get(key).push(place);
});

const removals = new Map(Object.entries(forcedMerges));
for (const members of clusters.values()) {
  if (members.length < 2) continue;
  const keeper = [...members].sort((a, b) =>
    Number(isTemplate(a)) - Number(isTemplate(b)) ||
    Number(preferred.has(b.id)) - Number(preferred.has(a.id)) ||
    a.id.length - b.id.length ||
    b.indexTajemna - a.indexTajemna ||
    a.id.localeCompare(b.id)
  )[0];
  members.filter((place) => place !== keeper && isTemplate(place)).forEach((place) => removals.set(place.id, keeper.id));
}

const byId = new Map(places.map((place) => [place.id, place]));
const resolve = (id) => (removals.has(id) ? resolve(removals.get(id)) : id);
for (const [from, to] of removals) {
  const place = byId.get(from);
  if (!place) continue;
  redirects[from] = { to: resolve(to), slugs: place.localizedSlugs || { cs: place.slug }, detailPath: place.detailPath };
}
// Starší přesměrování mohou mířit na právě odstraněné místo.
Object.values(redirects).forEach((entry) => {
  entry.to = resolve(entry.to);
});

const kept = places.filter((place) => !removals.has(place.id));

// Články odkazují na místa přes relatedPlaceIds; přesměruj je na ponechaná místa.
const articlesPath = path.join(root, "data", "articles.json");
const articles = JSON.parse(fs.readFileSync(articlesPath, "utf8").replace(/^\uFEFF/, ""));
articles.forEach((article) => {
  if (!article.relatedPlaceIds) return;
  article.relatedPlaceIds = Array.from(new Set(article.relatedPlaceIds.map((id) => redirects[id]?.to || id)));
});
fs.writeFileSync(articlesPath, `${JSON.stringify(articles, null, 2)}\n`, "utf8");
fs.writeFileSync(placesPath, `${JSON.stringify(kept, null, 2)}\n`, "utf8");
fs.writeFileSync(redirectsPath, `${JSON.stringify(redirects, null, 2)}\n`, "utf8");
console.log(`Merged ${places.length - kept.length} duplicate places, ${kept.length} remain.`);
