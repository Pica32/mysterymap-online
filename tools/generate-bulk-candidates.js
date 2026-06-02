const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const outPath = path.join(root, "data", "candidates", "bulk-candidates.json");

const commonSources = {
  hazard: ["Wikidata", "Wikipedia", "USGS", "NOAA/NCEI"],
  volcano: ["Wikidata", "Wikipedia", "Smithsonian Global Volcanism Program", "official local sources"],
  impact: ["Wikidata", "Wikipedia", "NASA", "USGS"],
  heritage: ["Wikidata", "Wikipedia", "OpenStreetMap", "official heritage/tourism source"],
  archive: ["Wikidata", "Wikipedia", "National Archives / Europeana / DPLA / LOC", "official memorial source"],
  occult: ["Wikidata", "Wikipedia", "OpenStreetMap", "official local source"],
  ocean: ["Wikidata", "Wikipedia", "NOAA", "OpenStreetMap"]
};

const packs = [
  {
    kategorie: ["katastrofa"],
    temata: ["zemetreseni"],
    sourceHints: commonSources.hazard,
    items: [
      ["Lisabonské zemětřesení 1755", "Portugalsko", "Evropa"],
      ["Tohoku earthquake and tsunami 2011", "Japonsko", "Asie"],
      ["Haiti earthquake 2010", "Haiti", "Severní Amerika"],
      ["Valdivia earthquake 1960", "Chile", "Jižní Amerika"],
      ["Tangshan earthquake 1976", "Čína", "Asie"],
      ["Great Kantō earthquake 1923", "Japonsko", "Asie"],
      ["Nepal earthquake 2015", "Nepál", "Asie"],
      ["Messina earthquake 1908", "Itálie", "Evropa"],
      ["Alaska earthquake 1964", "USA", "Severní Amerika"],
      ["Indian Ocean earthquake and tsunami 2004", "Indonésie", "Asie"],
      ["Christchurch earthquake 2011", "Nový Zéland", "Oceánie"],
      ["Mexico City earthquake 1985", "Mexiko", "Severní Amerika"]
    ]
  },
  {
    kategorie: ["katastrofa", "priroda"],
    temata: ["sopky"],
    sourceHints: commonSources.volcano,
    items: [
      ["Pompeje", "Itálie", "Evropa"],
      ["Krakatoa", "Indonésie", "Asie"],
      ["Tambora", "Indonésie", "Asie"],
      ["Mount St. Helens", "USA", "Severní Amerika"],
      ["Nevado del Ruiz", "Kolumbie", "Jižní Amerika"],
      ["Mount Pelée", "Martinik", "Severní Amerika"],
      ["Santorini / Théra", "Řecko", "Evropa"],
      ["Vesuv", "Itálie", "Evropa"],
      ["Etna", "Itálie", "Evropa"],
      ["Eyjafjallajökull", "Island", "Evropa"],
      ["Hunga Tonga-Hunga Haʻapai", "Tonga", "Oceánie"],
      ["Lake Nyos", "Kamerun", "Afrika"]
    ]
  },
  {
    kategorie: ["katastrofa", "priroda"],
    temata: ["impakt", "kosmicka-anomalie"],
    sourceHints: commonSources.impact,
    items: [
      ["Chicxulub crater", "Mexiko", "Severní Amerika"],
      ["Meteor Crater", "USA", "Severní Amerika"],
      ["Vredefort crater", "Jižní Afrika", "Afrika"],
      ["Sudbury Basin", "Kanada", "Severní Amerika"],
      ["Ries crater", "Německo", "Evropa"],
      ["Kaali crater", "Estonsko", "Evropa"],
      ["Sikhote-Alin meteorite fall", "Rusko", "Asie"],
      ["Chelyabinsk meteor", "Rusko", "Asie"],
      ["Campo del Cielo", "Argentina", "Jižní Amerika"],
      ["Lonar Lake", "Indie", "Asie"]
    ]
  },
  {
    kategorie: ["hrad", "legenda"],
    temata: ["duchove", "prokleti"],
    sourceHints: commonSources.heritage,
    items: [
      ["Hrad Bran", "Rumunsko", "Evropa"],
      ["Leap Castle", "Irsko", "Evropa"],
      ["Čachtický hrad", "Slovensko", "Evropa"],
      ["Hrad Červený Kameň", "Slovensko", "Evropa"],
      ["Predjamský hrad", "Slovinsko", "Evropa"],
      ["Hrad Moosham", "Rakousko", "Evropa"],
      ["Hrad Dragsholm", "Dánsko", "Evropa"],
      ["Hrad Eltz", "Německo", "Evropa"],
      ["Hrad Chillingham", "Spojené království", "Evropa"],
      ["Burg Frankenstein", "Německo", "Evropa"],
      ["Hrad Corvin", "Rumunsko", "Evropa"],
      ["Hrad Zvíkov", "Česko", "Evropa"]
    ]
  },
  {
    kategorie: ["legenda"],
    temata: ["templari", "tajne-spolecnosti"],
    sourceHints: commonSources.occult,
    items: [
      ["Rennes-le-Château", "Francie", "Evropa"],
      ["Rosslyn Chapel", "Spojené království", "Evropa"],
      ["Temple Church", "Spojené království", "Evropa"],
      ["Tomar Convent of Christ", "Portugalsko", "Evropa"],
      ["Chinon Castle", "Francie", "Evropa"],
      ["Laon Cathedral", "Francie", "Evropa"],
      ["Oak Island", "Kanada", "Severní Amerika"],
      ["Baphomet legend sites", "Francie", "Evropa"],
      ["Montségur", "Francie", "Evropa"],
      ["Glastonbury Tor", "Spojené království", "Evropa"]
    ]
  },
  {
    kategorie: ["podzemi", "legenda"],
    temata: ["podzemi", "duchove"],
    sourceHints: commonSources.heritage,
    items: [
      ["Pařížské katakomby", "Francie", "Evropa"],
      ["Kapucínská krypta v Palermu", "Itálie", "Evropa"],
      ["Sedlecká kostnice", "Česko", "Evropa"],
      ["Kostnice v Évoře", "Portugalsko", "Evropa"],
      ["Derinkuyu", "Turecko", "Asie"],
      ["Edinburgh Vaults", "Spojené království", "Evropa"],
      ["Jihlavské podzemí", "Česko", "Evropa"],
      ["Neapolské podzemí", "Itálie", "Evropa"],
      ["Oděské katakomby", "Ukrajina", "Evropa"],
      ["Basilica Cistern", "Turecko", "Asie"]
    ]
  },
  {
    kategorie: ["veznice", "legenda"],
    temata: ["veznice", "duchove", "vrazdy"],
    sourceHints: commonSources.heritage,
    items: [
      ["Alcatraz", "USA", "Severní Amerika"],
      ["Port Arthur Historic Site", "Austrálie", "Oceánie"],
      ["Eastern State Penitentiary", "USA", "Severní Amerika"],
      ["Kilmainham Gaol", "Irsko", "Evropa"],
      ["Old Melbourne Gaol", "Austrálie", "Oceánie"],
      ["Moundsville Penitentiary", "USA", "Severní Amerika"],
      ["Bodie Ghost Town Jail", "USA", "Severní Amerika"],
      ["Robben Island", "Jihoafrická republika", "Afrika"],
      ["Devil's Island", "Francouzská Guyana", "Jižní Amerika"],
      ["Hoa Lo Prison", "Vietnam", "Asie"]
    ]
  },
  {
    kategorie: ["ostrov", "legenda"],
    temata: ["duchove", "prokleti"],
    sourceHints: commonSources.ocean,
    items: [
      ["Poveglia", "Itálie", "Evropa"],
      ["Hashima Island", "Japonsko", "Asie"],
      ["Isla de las Muñecas", "Mexiko", "Severní Amerika"],
      ["Bermudský trojúhelník", "Atlantský oceán", "Severní Amerika"],
      ["Eilean Mòr", "Spojené království", "Evropa"],
      ["Roanoke Island", "USA", "Severní Amerika"],
      ["North Brother Island", "USA", "Severní Amerika"],
      ["Sable Island", "Kanada", "Severní Amerika"],
      ["Bouvet Island", "Norsko", "Antarktida"],
      ["Clipperton Island", "Francie", "Severní Amerika"]
    ]
  },
  {
    kategorie: ["priroda", "legenda"],
    temata: ["prokleti", "prirodni-labyrint"],
    sourceHints: commonSources.heritage,
    items: [
      ["Dyatlov Pass", "Rusko", "Asie"],
      ["Aokigahara", "Japonsko", "Asie"],
      ["Hoia Baciu Forest", "Rumunsko", "Evropa"],
      ["Bennington Triangle", "USA", "Severní Amerika"],
      ["Skinwalker Ranch", "USA", "Severní Amerika"],
      ["Nazca Lines", "Peru", "Jižní Amerika"],
      ["Plain of Jars", "Laos", "Asie"],
      ["Stonehenge", "Spojené království", "Evropa"],
      ["Carnac stones", "Francie", "Evropa"],
      ["Devil's Tower", "USA", "Severní Amerika"]
    ]
  },
  {
    kategorie: ["katastrofa"],
    temata: ["valka", "vrazdy"],
    sourceHints: commonSources.archive,
    sensitive: true,
    items: [
      ["Auschwitz-Birkenau", "Polsko", "Evropa"],
      ["Oradour-sur-Glane", "Francie", "Evropa"],
      ["Hiroshima Peace Memorial", "Japonsko", "Asie"],
      ["Nagasaki Peace Park", "Japonsko", "Asie"],
      ["Lidice", "Česko", "Evropa"],
      ["Khatyn Memorial", "Bělorusko", "Evropa"],
      ["Tuol Sleng", "Kambodža", "Asie"],
      ["Killing Fields of Choeung Ek", "Kambodža", "Asie"],
      ["Srebrenica Memorial", "Bosna a Hercegovina", "Evropa"],
      ["Ground Zero", "USA", "Severní Amerika"]
    ]
  }
];

const candidates = packs.flatMap((pack) => pack.items.map(([nazev, zeme, kontinent]) => ({
  nazev,
  zeme,
  kontinent,
  kategorie: pack.kategorie,
  temata: pack.temata,
  sourceHints: pack.sourceHints,
  sensitive: Boolean(pack.sensitive)
})));

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, `${JSON.stringify(candidates, null, 2)}\n`, "utf8");
console.log(`Generated ${candidates.length} bulk candidates at ${path.relative(root, outPath)}`);
