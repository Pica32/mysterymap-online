const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const placesPath = path.join(root, "data", "mista.json");
const articlesPath = path.join(root, "data", "articles.json");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8").replace(/^\uFEFF/, ""));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function slugify(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function profile(item) {
  const id = slugify(item.name);
  const themes = item.themes || ["legenda", "duchove"];
  return {
    id,
    slug: id,
    localizedSlugs: { cs: id, en: id, de: id, es: id, fr: id },
    detailPath: `/mista/${id}/`,
    nazev: item.name,
    zeme: item.country,
    kontinent: item.continent,
    lead: item.lead,
    gps: { lat: item.lat, lon: item.lon },
    kategorie: Array.from(new Set([item.category || "legenda", ...(item.categories || [])])),
    temata: themes,
    indexTajemna: item.score || 76,
    paranormalniAktivita: item.activity || "kulturni, medialni nebo lokalni tvrzeni",
    historickaDolozenost: item.evidence || "overitelna zakladni identita",
    nebezpecnost: item.risk || "overit lokalne",
    pristupnost: item.access || "overit pred cestou",
    atmosfera: item.atmosphere || 4.1,
    nocniVhodnost: Boolean(item.night),
    vhodneProDeti: item.kids !== false,
    popisy: {
      zahada: `${item.name} rozsiruje osmnactou vlnu MysteryMap jako bod s jasnou polohou, tematickou vrstvou a samostatnym profilem: ${item.lead}`,
      historie: "Historicka vrstva slouzi jako zakladni orientace v identite mista. Profil je pripraveny pro doplneni presnejsich lokalnich zdroju, spravcovskych pravidel a licencovanych fotografii.",
      legenda: "Legendova vrstva vysvetluje, proc se misto objevuje v mapach zahad: muze jit o hrad, hbitov, podzemi, ostrov, opustenou vesnici, pamatku konfliktu nebo prirodni anomalni krajinu.",
      paranormalni: "Zahadova tvrzeni jsou uvedena jako lokalni vypraveni, turisticka tradice, medialni stopa nebo folklor. Nejsou prezentovana jako overena skutecnost.",
      skepticke: "Skepticky ramec hleda prirodni, historicka, architektonicka, psychologicka a medialni vysvetleni. To pomaha drzet profil pouzitelny pro ctenare i vyhledavace."
    },
    praktickeInfo: `Pred navstevou ${item.name} over aktualni pristup, vstupne, pravidla fotografovani, mistni bezpecnost a ochranu pamatky. GPS je orientacni.`,
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: `Wikipedia search: ${item.name}`, url: `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(item.name)}`, licence: "CC BY-SA / reference discovery" },
      { nazev: `Wikidata search: ${item.name}`, url: `https://www.wikidata.org/w/index.php?search=${encodeURIComponent(item.name)}`, licence: "CC0 / entity discovery" },
      { nazev: "OpenStreetMap search", url: `https://www.openstreetmap.org/search?query=${encodeURIComponent(`${item.name} ${item.country}`)}`, licence: "ODbL / map verification" }
    ],
    pribehy: [
      { nazev: "Duvod zarazeni", text: `${item.name} pridava na mapu motivy ${themes.join(", ")} a vytvari dalsi samostatnou vstupni stranku pro hledani, sitemap a tematicke prolinkovani.` },
      { nazev: "Dalsi prace", text: "Seed je pripraveny na lokalni prameny, presne navstevnicke informace, fotografie s jasnou licenci a jazykove varianty detailu podle priority navstevnosti." }
    ]
  };
}

const rawPlaces = [
  { name: "Greyfriars Kirkyard", country: "Skotsko", continent: "Evropa", lat: 55.9469, lon: -3.1927, score: 84, category: "legenda", themes: ["duchove", "umrti"], lead: "Edinburghsky hbitov spojovany s Mackenzieho poltergeistem, hrobkami a temnou mestskou turistikou.", night: true },
  { name: "Ancient Ram Inn", country: "Spojene kralovstvi", continent: "Evropa", lat: 51.6365, lon: -2.3481, score: 83, category: "legenda", themes: ["duchove", "okultismus"], lead: "Stary hostinec ve Wotton-under-Edge s reputaci jednoho z nejstrasidelnejsich domu v Anglii.", night: true, kids: false },
  { name: "Pluckley Village", country: "Spojene kralovstvi", continent: "Evropa", lat: 51.177, lon: 0.748, score: 79, category: "legenda", themes: ["duchove", "media"], lead: "Kenticka vesnice s dlouhym seznamem lokalnich zjeveni, vyuzivana jako model pro mapu vesnickeho folkloru.", night: true },
  { name: "Chillingham Castle", country: "Spojene kralovstvi", continent: "Evropa", lat: 55.525, lon: -1.906, score: 84, category: "hrad", themes: ["duchove", "hrad"], lead: "Severoanglicky hrad spojovany s modrym chlapcem, muzirnou a turistickou tradici nocnich prohlidek.", night: true },
  { name: "Glamis Castle", country: "Skotsko", continent: "Evropa", lat: 56.6206, lon: -3.0027, score: 82, category: "hrad", themes: ["hrad", "duchove"], lead: "Skotsky hrad s pribehy tajnych mistnosti, rodovych legend a literarni atmosfery.", night: false },
  { name: "Ballygally Castle", country: "Severni Irsko", continent: "Evropa", lat: 54.8985, lon: -5.8598, score: 77, category: "hrad", themes: ["hrad", "duchove"], lead: "Pobrezni hrad a hotel s legendou Lady Isabel, kde se turisticky provoz potkava s ghost-story tradici.", night: true },
  { name: "Dragsholm Castle", country: "Dansko", continent: "Evropa", lat: 55.7707, lon: 11.3905, score: 80, category: "hrad", themes: ["hrad", "duchove"], lead: "Dansky hrad s legendami bile damy, sede damy a vezneneho slechtice v historickem hotelu.", night: true },
  { name: "Capuchin Catacombs Palermo", country: "Italie", continent: "Evropa", lat: 38.1122, lon: 13.3392, score: 86, category: "podzemi", themes: ["podzemi", "umrti"], lead: "Katakomby s mumifikovanymi telami v Palermu, kde se pamatka smrti meni v velmi silny vizualni prostor.", kids: false },
  { name: "Moosham Castle", country: "Rakousko", continent: "Evropa", lat: 47.096, lon: 13.7006, score: 81, category: "hrad", themes: ["carodejnictvi", "hrad"], lead: "Rakousky hrad spojovany s carodejnickymi procesy a pozdejsi vlkodlaci legendou.", night: true },
  { name: "Rasnov Citadel", country: "Rumunsko", continent: "Evropa", lat: 45.5906, lon: 25.4676, score: 77, category: "hrad", themes: ["hrad", "stredovek"], lead: "Sedmohradska citadela nad mestem Rasnov, pevnostni bod pro doplneni rumunske hradni vrstvy mapy." },
  { name: "Baba Vida Fortress", country: "Bulharsko", continent: "Evropa", lat: 43.9944, lon: 22.8866, score: 75, category: "hrad", themes: ["hrad", "stredovek"], lead: "Stredoveka pevnost ve Vidinu na Dunaji, spojnice hranicni architektury a balkanske historicke pameti." },
  { name: "Bock Casemates", country: "Lucembursko", continent: "Evropa", lat: 49.6114, lon: 6.1364, score: 79, category: "podzemi", themes: ["podzemi", "valka"], lead: "Lucemburske kasematy, rozsahly podzemni obranny system vytesany do skaly nad mestem." },
  { name: "Fort Boyard", country: "Francie", continent: "Evropa", lat: 45.9997, lon: -1.2133, score: 76, category: "hrad", themes: ["oceany", "media"], lead: "Morska pevnost mezi ostrovy Aix a Oleron, vojensky projekt premeneny v televizni a popkulturni ikonu." },
  { name: "Isle of Skye Fairy Pools", country: "Skotsko", continent: "Evropa", lat: 57.2505, lon: -6.2729, score: 77, category: "priroda", themes: ["mytologie", "prirodni-anomalie"], lead: "Vodopady a modre tunky na Skye, kde prirodni krasa prirozene nese motiv vil a keltske krajiny." },
  { name: "Glen Coe", country: "Skotsko", continent: "Evropa", lat: 56.6825, lon: -5.1023, score: 80, category: "priroda", themes: ["umrti", "prirodni-labyrint"], lead: "Dramaticke skotske udoli spojene s masakrem, krajinou pameti a silnou horskou atmosferou." },
  { name: "Eilean Donan Castle", country: "Skotsko", continent: "Evropa", lat: 57.2739, lon: -5.5163, score: 78, category: "hrad", themes: ["hrad", "film"], lead: "Hrad na ostrove pri soutoku jezer, ikonicka skotska silueta a filmova krajina mlhy a vody." },
  { name: "San Galgano Abbey", country: "Italie", continent: "Evropa", lat: 43.1494, lon: 11.1547, score: 79, category: "legenda", themes: ["templari", "legenda"], lead: "Toskanske opatstvi bez strechy a blizky mec v kameni, kde stredoveka legenda pripomina artusovsky motiv." },
  { name: "Civita di Bagnoregio", country: "Italie", continent: "Evropa", lat: 42.6278, lon: 12.1131, score: 78, category: "ztracena-mesta", themes: ["ztracena-mesta", "zemetreseni"], lead: "Erozni mesto na tufovem ostrohu, casto nazyvane umirajicim mestem kvuli rozpadajici se krajine." },
  { name: "Bomarzo Monster Park", country: "Italie", continent: "Evropa", lat: 42.4917, lon: 12.2461, score: 78, category: "legenda", themes: ["okultismus", "mytologie"], lead: "Manieristicky park oblud v Laziu, kamenne bestie a symboly, ktere svadi k tajnym vykladum." },
  { name: "Sacra di San Michele", country: "Italie", continent: "Evropa", lat: 45.0989, lon: 7.3422, score: 79, category: "legenda", themes: ["ritual", "stredovek"], lead: "Opatstvi na hore v Piemontu, dramaticky poutni bod spojovany s michaelickou linii a vysokou krajinou." },
  { name: "Monte Cristo Island", country: "Italie", continent: "Evropa", lat: 42.3333, lon: 10.3167, score: 77, category: "ostrov", themes: ["poklad", "ostrov"], lead: "Toskansky ostrov proslaveny literarni predstavou pokladu, dnes prisne chranena prirodni rezervace." },
  { name: "Rocca Calascio", country: "Italie", continent: "Evropa", lat: 42.3272, lon: 13.6889, score: 80, category: "hrad", themes: ["hrad", "film"], lead: "Vysokohorska pevnost v Abruzzu, filmova ruina na vetru, ktera pusobi jako konec stredoveke cesty." },
  { name: "Mystras", country: "Recko", continent: "Evropa", lat: 37.074, lon: 22.369, score: 82, category: "ztracena-mesta", themes: ["ztracena-mesta", "stredovek"], lead: "Byzantske mesto ve svahu Tajgetu, opustene palacove, klasterni a ulicni vrstvy nad Spartou." },
  { name: "Spinalonga", country: "Recko", continent: "Evropa", lat: 35.297, lon: 25.738, score: 80, category: "ostrov", themes: ["karantena", "umrti"], lead: "Ostrovni pevnost a leprosarium u Krety, citlive misto izolace, nemoci a pameti." },
  { name: "Aokigahara Forest", country: "Japonsko", continent: "Asie", lat: 35.473, lon: 138.624, score: 82, category: "priroda", themes: ["umrti", "prirodni-labyrint"], lead: "Les u Fuji s velmi citlivou reputaci, kde musi byt obsah psan s durazem na prevenci a respekt.", kids: false },
  { name: "Raynham Hall", country: "Spojene kralovstvi", continent: "Evropa", lat: 52.793, lon: 0.789, score: 78, category: "hrad", themes: ["duchove", "media"], lead: "Norfolkske sidlo spojovane se slavnou fotografii Brown Lady a debatou o obrazu jako dukazu." },
  { name: "Hellfire Caves", country: "Spojene kralovstvi", continent: "Evropa", lat: 51.667, lon: -0.802, score: 81, category: "podzemi", themes: ["podzemi", "okultismus"], lead: "Jeskynni komplex u West Wycombe spojovany s Hellfire Clubem, podzemnim ritualem a aristokratickou provokaci.", night: true },
  { name: "Queen Mary Long Beach", country: "USA", continent: "Severni Amerika", lat: 33.7528, lon: -118.1906, score: 81, category: "legenda", themes: ["duchove", "oceany"], lead: "Historicky ocean liner v Long Beach, hotel a muzeum s rozsahlou tradici namornich ghost tours.", night: true },
  { name: "Salem Witch House", country: "USA", continent: "Severni Amerika", lat: 42.5212, lon: -70.8995, score: 80, category: "legenda", themes: ["carodejnictvi", "umrti"], lead: "Dum soudce Jonathana Corwina v Salemu, fyzicka kotva pro vyklad carodejnickych procesu." },
  { name: "Gettysburg Battlefield", country: "USA", continent: "Severni Amerika", lat: 39.8309, lon: -77.2311, score: 83, category: "legenda", themes: ["valka", "duchove"], lead: "Bojiště americke obcanske valky s obrovskou pameti obeti a dlouhou tradici svedectvi o zjevenich." },
  { name: "Hoosac Tunnel", country: "USA", continent: "Severni Amerika", lat: 42.675, lon: -73.028, score: 78, category: "podzemi", themes: ["podzemi", "umrti"], lead: "Massachusettsky zeleznicni tunel spojovany s nehodami pri stavbe a povestmi o hlasech v podzemi.", kids: false },
  { name: "Shanghai Tunnels Portland", country: "USA", continent: "Severni Amerika", lat: 45.523, lon: -122.675, score: 77, category: "podzemi", themes: ["podzemi", "media"], lead: "Portlandske podzemni chodby s legendami o nasilnych naborech namorniku a mestskym folklorem." },
  { name: "Bobby Mackeys Music World", country: "USA", continent: "Severni Amerika", lat: 39.0415, lon: -84.4693, score: 80, category: "legenda", themes: ["duchove", "media"], lead: "Hudebni klub v Kentucky s intenzivni paranormalni reputaci a silnou televizni stopou.", night: true, kids: false },
  { name: "LaLaurie Mansion", country: "USA", continent: "Severni Amerika", lat: 29.9613, lon: -90.0609, score: 82, category: "legenda", themes: ["vrazdy", "duchove"], lead: "Neworleansky dum spojeny s krutosti Delphine LaLaurie, kde je nutny citlivy pristup k obetem.", kids: false },
  { name: "Sultans Palace New Orleans", country: "USA", continent: "Severni Amerika", lat: 29.9601, lon: -90.0633, score: 76, category: "legenda", themes: ["vrazdy", "legenda"], lead: "Francouzska ctvrt a pribeh takzvaneho Sultanova palace, kde se legenda micha s mestskou brutalitou." },
  { name: "Moon River Brewing Company", country: "USA", continent: "Severni Amerika", lat: 32.0807, lon: -81.0912, score: 76, category: "legenda", themes: ["duchove", "media"], lead: "Savannahsky podnik v historicke budove s povestmi o agresivnich projevech a ghost-tour kulturou." },
  { name: "Bonaventure Cemetery", country: "USA", continent: "Severni Amerika", lat: 32.0453, lon: -81.0509, score: 78, category: "legenda", themes: ["umrti", "duchove"], lead: "Hbitov v Savannah s gotickou krajinou dubu, soch a literarni turisticke pameti." },
  { name: "Whaley House", country: "USA", continent: "Severni Amerika", lat: 32.752, lon: -117.196, score: 79, category: "legenda", themes: ["duchove", "vrazdy"], lead: "Historicky dum v San Diegu s povestmi o rodinne tragedii, soudu a opakovanych ghost tours.", night: true },
  { name: "Amityville House", country: "USA", continent: "Severni Amerika", lat: 40.6669, lon: -73.414, score: 78, category: "legenda", themes: ["vrazdy", "film"], lead: "Soukromy dum proslaveny skutecnou vrazdou a naslednou hororovou medialni vrstvou.", kids: false },
  { name: "Kuldhara Village", country: "Indie", continent: "Asie", lat: 26.867, lon: 70.79, score: 79, category: "ztracena-mesta", themes: ["ztracena-mista", "prokleti"], lead: "Opustena radzastanska vesnice s legendou o hromadnem odchodu a prokleti mista." },
  { name: "Shaniwar Wada", country: "Indie", continent: "Asie", lat: 18.5195, lon: 73.8553, score: 80, category: "hrad", themes: ["hrad", "duchove"], lead: "Pevnost v Pune spojovana s politickou vraždou, nocnim volanim a marathskou pameti moci.", night: true },
  { name: "Savannah Sorrel Weed House", country: "USA", continent: "Severni Amerika", lat: 32.0738, lon: -81.0957, score: 77, category: "legenda", themes: ["duchove", "media"], lead: "Historicky dum v Savannah, ktery propojuje architekturu antebellum a moderni paranormalni prohlidky.", night: true },
  { name: "Cachtice Castle Ruins", country: "Slovensko", continent: "Evropa", lat: 48.7236, lon: 17.7619, score: 84, category: "hrad", themes: ["vrazdy", "hrad"], lead: "Ruiny hradu spojovane s Alzbetou Bathoryovou, kde se historie zlocinu a legenda dlouhodobe prekryvaji.", kids: false },
  { name: "Ojcow Castle", country: "Polsko", continent: "Evropa", lat: 50.2115, lon: 19.8294, score: 75, category: "hrad", themes: ["hrad", "legenda"], lead: "Hradni ruiny v krasove krajine Ojcowa, vhodne pro propojeni stredoveku, jeskyni a lokalnich povesti." },
  { name: "Ogrodzieniec Castle", country: "Polsko", continent: "Evropa", lat: 50.451, lon: 19.552, score: 80, category: "hrad", themes: ["hrad", "duchove"], lead: "Rozsahle zriceniny na Orlich hnizdech s legendou o cernem psu a silnou filmovou atmosferou." },
  { name: "Corvinesti Raven Legend Route", country: "Rumunsko", continent: "Evropa", lat: 45.748, lon: 22.888, score: 76, category: "hrad", themes: ["hrad", "legenda"], lead: "Tematicky doplnkovy bod pro hunedoarskou oblast, motiv havrana, rodu Hunyadi a sedmohradske hradni imaginace." },
  { name: "Poenari Citadel", country: "Rumunsko", continent: "Evropa", lat: 45.3534, lon: 24.6354, score: 82, category: "hrad", themes: ["hrad", "dabel"], lead: "Pevnost nad udolim Arges spojovana s Vladem Tepesem, vysoko polozeny bod drakulovske topografie." },
  { name: "Krzyztopor Castle", country: "Polsko", continent: "Evropa", lat: 50.714, lon: 21.308, score: 78, category: "hrad", themes: ["hrad", "okultismus"], lead: "Monumentalni ruiny palacove pevnosti s ciselne symbolickou architekturou a silnou atmosferou opusteni." },
  { name: "Housesteads Roman Fort", country: "Spojene kralovstvi", continent: "Evropa", lat: 55.013, lon: -2.331, score: 74, category: "hrad", themes: ["valka", "archeologie"], lead: "Rimska pevnost na Hadrianove valu, hranicni krajina duchu imperia, vojenske disciplíny a vetru." },
  { name: "Mary Kings Close", country: "Skotsko", continent: "Evropa", lat: 55.9504, lon: -3.1901, score: 80, category: "podzemi", themes: ["podzemi", "karantena"], lead: "Edinburghske uzavrene ulicky pod mestem, kde se morova pamet zmenila v podzemni prohlidkovy pribeh." }
];

const places = readJson(placesPath);
const byId = new Map(places.map((place) => [place.id, place]));
const inserted = [];
rawPlaces.map(profile).forEach((place) => {
  if (!byId.has(place.id)) inserted.push(place.id);
  byId.set(place.id, place);
});
writeJson(placesPath, Array.from(byId.values()));

const article = {
  id: "osmnacta-vlna-hrady-duchove-podzemi",
  slug: "osmnacta-vlna-hrady-duchove-podzemi",
  localizedSlugs: {
    cs: "osmnacta-vlna-hrady-duchove-podzemi",
    en: "eighteenth-wave-castles-ghosts-underground",
    de: "achtzehnte-welle-burgen-geister-untergrund",
    es: "decimoctava-ola-castillos-fantasmas-subterraneo",
    fr: "dix-huitieme-vague-chateaux-fantomes-souterrains"
  },
  title: "Osmnacta vlna: hrady, duchove, podzemi a mista pameti",
  description: "Osmnacta vlna rozsiruje mapu o evropske hrady, hbitovy, katakomby, ostrovy, podzemi a americka mista s vyraznou ghost-tour tradici.",
  category: "legenda",
  themes: ["duchove", "hrad", "podzemi", "umrti"],
  relatedPlaceIds: rawPlaces.slice(0, 30).map((item) => slugify(item.name)),
  sections: [
    {
      heading: "Hustsi mapa Evropy a Ameriky",
      body: "Nova vlna pridava mista, ktera jsou vyhledavatelna, mapove srozumitelna a dobre propojuji motivy hradu, podzemi, hbitovu, pamatky smrti a medialni ghost-tour kultury."
    },
    {
      heading: "Proc prave tahle mista",
      body: "Vybrana mista maji jasnou polohu, stabilni nazev a dostatek verejnych stop pro dalsi overeni. Nejde o hotove finalni monografie, ale o kvalitni seed profily pro mapu, sitemap a tematicke landing pages."
    },
    {
      heading: "Dalsi redakcni prace",
      body: "U osmnacte vlny bude vhodne doplnit lokalni zdroje, presne vstupni pravidla, licencovane fotografie a citlive rozliseni mezi historickou udalosti, pameti obeti a turistickou legendou."
    }
  ],
  sources: ["wikidata", "wikipedia", "openstreetmap", "wikimedia-commons"]
};

const articles = readJson(articlesPath);
const articlesById = new Map(articles.map((item) => [item.id, item]));
articlesById.set(article.id, article);
writeJson(articlesPath, Array.from(articlesById.values()));

console.log(`Upserted ${inserted.length} new places (${rawPlaces.length} raw) and article ${article.id}.`);
