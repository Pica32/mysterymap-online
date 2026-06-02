const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const placesPath = path.join(root, "data", "mista.json");
const places = JSON.parse(fs.readFileSync(placesPath, "utf8").replace(/^\uFEFF/, ""));

const continentMap = new Map([
  ["SevernĂ­ Amerika", "Severni Amerika"],
  ["Severní Amerika", "Severni Amerika"],
  ["OceĂˇnie", "Oceanie"],
  ["Oceánie", "Oceanie"]
]);

const countryMap = new Map([
  ["USA", "Spojene staty"],
  ["Spojené státy", "Spojene staty"],
  ["Česko", "Cesko"],
  ["ÄŚesko", "Cesko"],
  ["SpojenĂ© krĂˇlovstvĂ­", "Spojene kralovstvi"],
  ["Spojené království", "Spojene kralovstvi"]
]);

let changed = 0;
places.forEach((place) => {
  if (continentMap.has(place.kontinent)) {
    place.kontinent = continentMap.get(place.kontinent);
    changed += 1;
  }
  if (countryMap.has(place.zeme)) {
    place.zeme = countryMap.get(place.zeme);
    changed += 1;
  }
});

fs.writeFileSync(placesPath, `${JSON.stringify(places, null, 2)}\n`, "utf8");
console.log(`Normalized ${changed} region fields.`);
