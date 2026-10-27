const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const placesPath = path.join(root, "data", "mista.json");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8").replace(/^﻿/, ""));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

const enrichedPlaces = [
  {
    id: "hrad-houska",
    patch: {
      lead: "Gotický hrad u Prahy, který podle pověsti postavili, aby zakryl díru do pekla - kaple prý stojí přímo nad propastí bez dna.",
      popisy: {
        zahada: "Hrad stojí v lesích Kokořínska mimo obchodní cesty, neměl zdroj vody ani kuchyni a jeho obranné prvky prý míří dovnitř, ne ven. Gotická kaple je vyzdobená freskami s podivnými bytostmi - napůl lidmi, napůl zvířaty.",
        historie: "Hrad vznikl ve druhé polovině 13. století za vlády Přemysla Otakara II. Během staletí se měnili majitelé a hrad byl přestavován. Dnes je soukromý a v sezóně otevřený pro veřejnost.",
        legenda: "Podle pověsti byla ve skále díra tak hluboká, že nikdo nedohlédl na dno, a v noci z ní vylézaly zrůdy. Odsouzenci na smrt prý nabídli milost, když se dají spustit dolů. První z nich začal po chvíli křičet; když ho vytáhli, měl bílé vlasy, jako by zestárl o třicet let, a za pár dní zemřel. Díru pak zakryli kaplí.",
        paranormalni: "Návštěvníci a zaměstnanci popisují kroky, stíny, zvuky zpod podlahy kaple a tísnivý pocit. Podle moderních pověstí na hradě za války působili nacisté a prováděli okultní pokusy.",
        skepticke: "Neobvyklou dispozici lze vysvětlit tím, že hrad sloužil spíš jako správní sídlo než pevnost. Pověst o díře do pekla je doložena až z novější doby a pověst o nacistech nemá oporu v pramenech."
      },
      praktickeInfo: "Houska je asi 50 km severně od Prahy, u obce Blatce na Kokořínsku. Hrad je otevřený v sezóně, prohlídky s průvodcem. Ověřte otevírací dobu. Kombinujte s Bezdězem a skalami Kokořínska.",
      pribehy: [
        { nazev: "Muž, který zešedivěl", text: "Odsouzený muž, kterého spustili do díry, se prý vrátil s bílými vlasy a za pár dní zemřel." },
        { nazev: "Kaple jako pečeť", text: "Kaple prý byla postavena jako pečeť, která uzavírá bránu do pekla pod hradem." }
      ]
    }
  }
];

const places = readJson(placesPath);
const byId = new Map(places.map((place) => [place.id, place]));

let enriched = 0;
enrichedPlaces.forEach(({ id, patch }) => {
  const existing = byId.get(id);
  if (!existing) {
    console.warn(`Skipped enrichment, not found: ${id}`);
    return;
  }
  byId.set(id, { ...existing, ...patch, popisy: { ...existing.popisy, ...patch.popisy } });
  enriched += 1;
});

writeJson(placesPath, Array.from(byId.values()));

console.log(`Enriched ${enriched} existing places.`);
