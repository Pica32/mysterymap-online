// Doplní diakritiku do perexů starších míst, které vznikly bez háčků a čárek.
// Opravy jsou v data/lead-diacritics/*.json ({ id: "opravený perex" }) a nahrazují
// perex jen tehdy, když se po odstranění diakritiky shoduje s původním textem
// (drobné stylistické úpravy se jen vypíšou ke kontrole).
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const placesPath = path.join(root, "data", "mista.json");
const fixesDir = path.join(root, "data", "lead-diacritics");

const strip = (text) => text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

const places = JSON.parse(fs.readFileSync(placesPath, "utf8"));
const byId = new Map(places.map((place) => [place.id, place]));
let applied = 0;
const reworded = [];

fs.readdirSync(fixesDir).filter((file) => file.endsWith(".json")).sort().forEach((file) => {
  const fixes = JSON.parse(fs.readFileSync(path.join(fixesDir, file), "utf8"));
  Object.entries(fixes).forEach(([id, lead]) => {
    const place = byId.get(id);
    if (!place) throw new Error(`${file}: unknown place ${id}`);
    if (place.lead === lead) return;
    if (strip(place.lead) !== strip(lead)) reworded.push(`${id}\n  - ${place.lead}\n  + ${lead}`);
    place.lead = lead;
    applied += 1;
  });
});

fs.writeFileSync(placesPath, `${JSON.stringify(places, null, 2)}\n`, "utf8");
if (reworded.length) console.log(`Reworded (check):\n${reworded.join("\n")}`);
console.log(`Applied ${applied} lead diacritics fixes.`);
