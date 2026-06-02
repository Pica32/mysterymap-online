const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const dataPath = path.join(root, "data", "mista.json");
const places = JSON.parse(fs.readFileSync(dataPath, "utf8").replace(/^\uFEFF/, ""));

const enrichments = {
  "hrad-houska": {
    temata: ["dabel", "prokleti", "duchove"],
    pribehy: [
      { nazev: "Kaple nad propastí", text: "Hlavní příběh Housky stojí na napětí mezi sakrálním prostorem a pověstí o nebezpečné díře v zemi." },
      { nazev: "Brána, kterou nikdo neměl otevřít", text: "Legenda dává místu výrazný motiv ďábla a uzavřeného průchodu do jiného světa." }
    ]
  },
  "tower-of-london": {
    temata: ["vrazdy", "duchove", "prokleti"],
    pribehy: [
      { nazev: "Královna bez klidu", text: "Vyprávění o Anně Boleynové spojuje politickou vraždu, popraviště a motiv návratu mrtvých." },
      { nazev: "Princové v Toweru", text: "Zmizení princů vytváří jeden z nejsilnějších britských příběhů o moci, vině a tajemství." }
    ]
  },
  "edinburgh-vaults": {
    temata: ["duchove", "vrazdy", "podzemi"],
    pribehy: [
      { nazev: "Město pod městem", text: "Podzemní prostory fungují jako temná vrstva Edinburghu, kde se chudoba a strach mění v legendu." },
      { nazev: "Hlasy ve sklepení", text: "Akustika, tma a uzavřený prostor dávají svědectvím o hlasech mimořádně silný rámec." }
    ]
  },
  "chateau-de-brissac": {
    temata: ["duchove", "vrazdy", "prokleti"],
    pribehy: [
      { nazev: "Zelená dáma", text: "Příběh šlechtické tragédie se v zámku proměnil v motiv přízraku, který připomíná dávnou zradu." }
    ]
  },
  "poveglia": {
    temata: ["karantena", "duchove", "prokleti"],
    pribehy: [
      { nazev: "Ostrov izolace", text: "Poveglia je silná tím, že téma nemoci, izolace a zákazu vstupu spojuje do jedné temné krajiny." },
      { nazev: "Ruiny, které mlčí", text: "Nepřístupnost ostrova dělá z každého příběhu silnější mýtus než běžně navštěvovaná památka." }
    ]
  },
  "aokigahara": {
    temata: ["duchove", "prokleti", "prirodni-labyrint"],
    pribehy: [
      { nazev: "Les bez ozvěny", text: "Hustý porost, lávové podloží a ticho vytvářejí pocit, že les pohlcuje orientaci i zvuk." },
      { nazev: "Citlivé místo", text: "Aokigahara vyžaduje zvlášť opatrnou redakci, protože moderní tragédie nesmí být proměněny v atrakci." }
    ]
  },
  "isla-de-las-munecas": {
    temata: ["duchove", "prokleti", "ritual"],
    pribehy: [
      { nazev: "Panenky jako ochrana", text: "Pověst ostrova stojí na představě, že hromadění panenek mělo utišit neklidného ducha." },
      { nazev: "Pohledy z větví", text: "Síla místa je vizuální: stovky opotřebovaných panenek vytvářejí pocit sledování." }
    ]
  },
  "eastern-state-penitentiary": {
    temata: ["veznice", "duchove", "vrazdy"],
    pribehy: [
      { nazev: "Samota jako trest", text: "Architektura věznice připomíná systém, který pracoval s izolací jako s nástrojem změny člověka." },
      { nazev: "Ozvěny cel", text: "Zvuky v ruině se snadno mění v příběhy o vězních, kteří místo neopustili." }
    ]
  },
  "winchester-mystery-house": {
    temata: ["prokleti", "duchove", "tajne-spolecnosti"],
    pribehy: [
      { nazev: "Dům, který neměl skončit", text: "Nekonečné přestavby proměnily rezidenci v příběh o vině, strachu a chodbách bez smyslu." },
      { nazev: "Schody do nikam", text: "Architektonické zvláštnosti fungují jako fyzické důkazy záhady, i když mohou mít praktická vysvětlení." }
    ]
  },
  "port-arthur": {
    temata: ["veznice", "duchove", "valka"],
    pribehy: [
      { nazev: "Kolonie trestu", text: "Port Arthur spojuje odlehlost, státní moc a trestanecký režim do silného místa temné historie." },
      { nazev: "Noční prohlídky", text: "Po setmění se ruiny mění v prostor, kde vyprávění průvodce pracuje s tichem a očekáváním." }
    ]
  }
};

const enriched = places.map((place) => ({
  ...place,
  temata: enrichments[place.id]?.temata || place.temata || [],
  pribehy: enrichments[place.id]?.pribehy || place.pribehy || []
}));

fs.writeFileSync(dataPath, `${JSON.stringify(enriched, null, 2)}\n`, "utf8");
console.log(`Enriched ${enriched.length} places with themes and story hooks.`);
