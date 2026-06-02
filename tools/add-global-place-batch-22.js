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
  const themes = item.themes || ["legenda", "prirodni-anomalie"];
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
    paranormalniAktivita: item.activity || "kulturni, prirodni nebo historicka tvrzeni",
    historickaDolozenost: item.evidence || "overitelna zakladni identita",
    nebezpecnost: item.risk || "overit lokalne",
    pristupnost: item.access || "overit pred cestou",
    atmosfera: item.atmosphere || 4.1,
    nocniVhodnost: Boolean(item.night),
    vhodneProDeti: item.kids !== false,
    popisy: {
      zahada: `${item.name} rozsiruje dvaadvacatou vlnu MysteryMap jako mapovy bod s jasnou polohou a motivem: ${item.lead}`,
      historie: "Historicka vrstva popisuje zakladni identitu mista, kontinent, stat, GPS a tematicke zarazeni. Profil je seed pro dalsi lokalni zdroje a presnejsi navstevnicke informace.",
      legenda: "Legendova vrstva vysvetluje, proc se misto dostava do mapy: muze jit o klaster, pevnost, jeskyne, ritualni krajinu, horskou oblast nebo prirodni anomalni tvar.",
      paranormalni: "Zahadova tvrzeni jsou uvedena jako folklor, cestovatelska tradice, medialni asociace nebo lokalni vypraveni. Nejsou zamichana do overitelne historie.",
      skepticke: "Skepticky ramec prednostne hleda geologicke, archeologicke, klimaticke, historicke a medialni vysvetleni. Profil tak muze zustat zajimavy bez prehnanych tvrzeni."
    },
    praktickeInfo: `Pred navstevou ${item.name} over aktualni pristup, mistni pravidla, povoleni, dopravu a ochranu lokality. GPS je orientacni a u odlehlych mist vyzaduje lokalni overeni.`,
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: `Wikipedia search: ${item.name}`, url: `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(item.name)}`, licence: "CC BY-SA / reference discovery" },
      { nazev: `Wikidata search: ${item.name}`, url: `https://www.wikidata.org/w/index.php?search=${encodeURIComponent(item.name)}`, licence: "CC0 / entity discovery" },
      { nazev: "OpenStreetMap search", url: `https://www.openstreetmap.org/search?query=${encodeURIComponent(`${item.name} ${item.country}`)}`, licence: "ODbL / map verification" }
    ],
    pribehy: [
      { nazev: "Duvod zarazeni", text: `${item.name} posiluje geograficke pokryti mapy motivy ${themes.join(", ")} a vytvari dalsi samostatny detail pro sitemap, hledani a tematicke prolinkovani.` },
      { nazev: "Dalsi prace", text: "Seed je pripraveny na doplneni lokalnich spravcovskych zdroju, puvodnich nazvu, licencovanych fotografii a jazykovych detailu podle priority navstevnosti." }
    ]
  };
}

const rawPlaces = [
  { name: "Mount Athos", country: "Recko", continent: "Evropa", lat: 40.157, lon: 24.326, score: 82, category: "legenda", themes: ["ritual", "hory"], lead: "Mnissky poloostrov s prisnym rezimem vstupu, klastery a dlouhou vrstvou pravoslavne izolace.", access: "omezeny vstup podle povoleni" },
  { name: "Epidaurus Sanctuary", country: "Recko", continent: "Evropa", lat: 37.596, lon: 23.075, score: 77, category: "legenda", themes: ["ritual", "archeologie"], lead: "Asklepiova svatyne a divadlo, kde se leceni, sen a ritual potkavaly s antickou architekturou." },
  { name: "Kotor Fortress", country: "Cerna Hora", continent: "Evropa", lat: 42.425, lon: 18.773, score: 76, category: "legenda", themes: ["pevnost", "hory"], lead: "Pevnostni cesta nad Kotorem, kamenne zdi stoupajici po skalach nad zalivem a mestskou pameti." },
  { name: "Perperikon", country: "Bulharsko", continent: "Evropa", lat: 41.716, lon: 25.466, score: 79, category: "ztracena-mesta", themes: ["archeologie", "ritual"], lead: "Skalni archeologicky komplex v Rodopach, spojovany s thrackymi svatynemi a dlouhou vrstvou kultu." },
  { name: "Rila Monastery", country: "Bulharsko", continent: "Evropa", lat: 42.134, lon: 23.340, score: 78, category: "legenda", themes: ["ritual", "hory"], lead: "Horsky klaster v Rile, symbol duchovni odolnosti, izolace a barevne sakralni architektury." },
  { name: "Seven Rila Lakes", country: "Bulharsko", continent: "Evropa", lat: 42.204, lon: 23.320, score: 75, category: "priroda", themes: ["hory", "prirodni-anomalie"], lead: "Ledovcova jezera v Rile, poutni horska krajina kruhu, vody a sezonni mlhy." },
  { name: "Orheiul Vechi", country: "Moldavsko", continent: "Evropa", lat: 47.305, lon: 28.972, score: 76, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Skalni klasterni a archeologicka krajina nad rekou Raut, kde se jeskyne potkavaji s opevnenim." },
  { name: "Cricova Wine Cellars", country: "Moldavsko", continent: "Evropa", lat: 47.139, lon: 28.861, score: 73, category: "podzemi", themes: ["podzemi", "prirodni-labyrint"], lead: "Podzemni mesto vinnych chodeb u Chisinau, labyrint galerii, sklepu a lidske organizace pod zemi." },
  { name: "Kamianets Podilskyi Castle", country: "Ukrajina", continent: "Evropa", lat: 48.673, lon: 26.563, score: 78, category: "legenda", themes: ["pevnost", "archeologie"], lead: "Pevnost na skalnim ostrohu v kanonu Smotryce, dramaticky uzel hranic, legend a oblehani." },
  { name: "Chufut Kale", country: "Ukrajina", continent: "Evropa", lat: 44.741, lon: 33.924, score: 77, category: "ztracena-mesta", themes: ["archeologie", "podzemi"], lead: "Skalni pevnostni mesto na Krymu, s jeskynemi, karaitskou pameti a vrstevnatou historii hranice." },
  { name: "Mangup Kale", country: "Ukrajina", continent: "Evropa", lat: 44.595, lon: 33.807, score: 78, category: "ztracena-mesta", themes: ["archeologie", "hory"], lead: "Stolova hora s ruinami pevnosti a jeskynemi, citliva krajina byzantskych i mistnich vrstev." },
  { name: "Solovetsky Monastery", country: "Rusko", continent: "Evropa", lat: 65.025, lon: 35.710, score: 81, category: "legenda", themes: ["ostrov", "veznice"], lead: "Klaster na Bilem mori s tezkou pameti taboroveho systemu, izolace a severni poutni krajiny.", kids: false },
  { name: "Kizhi Pogost", country: "Rusko", continent: "Evropa", lat: 62.067, lon: 35.225, score: 76, category: "legenda", themes: ["ostrov", "ritual"], lead: "Drevene kostely na ostrove Kizi, architektura bez hrebiku v jezerni severni krajine." },
  { name: "Manpupuner Rock Formations", country: "Rusko", continent: "Evropa", lat: 62.258, lon: 59.302, score: 79, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Sedm kamennych obru na odlehle plosine Uralu, erozni tvary se silnou mytologickou aurou." },
  { name: "Kungur Ice Cave", country: "Rusko", continent: "Evropa", lat: 57.437, lon: 57.006, score: 75, category: "podzemi", themes: ["podzemi", "led"], lead: "Ledova jeskynni soustava u Kunguru, podzemni komory, krystaly a sezonni krajina chladu." },
  { name: "Arkaim", country: "Rusko", continent: "Evropa", lat: 52.638, lon: 59.544, score: 79, category: "ztracena-mesta", themes: ["archeologie", "ritual"], lead: "Kruhove opevnene sidliste v jihouralske stepi, kde archeologie casto pritahuje ezotericke vyklady." },
  { name: "Elbrus", country: "Rusko", continent: "Evropa", lat: 43.355, lon: 42.439, score: 77, category: "priroda", themes: ["hory", "nebezpeci"], lead: "Nejvyssi hora Kavkazu a Evropy podle casti deleni, ledova dominanta s mytologii i realnym rizikem.", kids: false },
  { name: "Dargavs City of the Dead", country: "Rusko", continent: "Evropa", lat: 42.841, lon: 44.444, score: 82, category: "legenda", themes: ["umrti", "hory"], lead: "Horske pohrebiste v Severni Osetii, kamenne hrobky v mlze a citliva pamet smrti.", kids: false },
  { name: "Katskhi Pillar", country: "Gruzie", continent: "Asie", lat: 42.288, lon: 43.215, score: 78, category: "legenda", themes: ["ritual", "hory"], lead: "Vapencovy sloup s klasterni tradici, vertikalni symbol samoty a duchovni izolace." },
  { name: "Tsminda Sameba Kazbegi", country: "Gruzie", continent: "Asie", lat: 42.663, lon: 44.620, score: 79, category: "legenda", themes: ["ritual", "hory"], lead: "Kostel nad Stepancmindou s vyhledem na Kazbek, jedna z ikon kavkazske poutni scenografie." },
  { name: "Ananuri Fortress", country: "Gruzie", continent: "Asie", lat: 42.164, lon: 44.703, score: 75, category: "legenda", themes: ["pevnost", "ritual"], lead: "Pevnostni komplex nad prehradou Zhinvali, kamenne veze, kostely a pamet horske cesty." },
  { name: "Svaneti Towers", country: "Gruzie", continent: "Asie", lat: 43.043, lon: 42.730, score: 80, category: "legenda", themes: ["hory", "pevnost"], lead: "Stredoveke obranne veze Svanetie, vesnice v horach s pocitem rodove izolace a straze." },
  { name: "Shatili Towers", country: "Gruzie", continent: "Asie", lat: 42.657, lon: 45.153, score: 78, category: "legenda", themes: ["hory", "pevnost"], lead: "Kamenny komplex horske vesnice Shatili, hranicni architektura mezi domem, vezi a pevnosti." },
  { name: "Prometheus Cave Georgia", country: "Gruzie", continent: "Asie", lat: 42.376, lon: 42.601, score: 75, category: "podzemi", themes: ["podzemi", "prirodni-anomalie"], lead: "Krasova jeskynni trasa u Cchaltuba, podzemni sale, voda a turisticky vypravena mytologie." },
  { name: "Tskaltubo Sanatoriums", country: "Gruzie", continent: "Asie", lat: 42.327, lon: 42.600, score: 77, category: "legenda", themes: ["opustene", "media"], lead: "Lazenske sanatorni komplexy sovetske ery, opustena monumentalita, termalni mesto a pamet rozpadu." },
  { name: "Ateshgah of Baku", country: "Azerbajdzan", continent: "Asie", lat: 40.415, lon: 50.008, score: 78, category: "legenda", themes: ["ohen", "ritual"], lead: "Chram ohne na Apsheronu, spojeny s plynovymi vyvery, zoroastrijskou a poutni tradici." },
  { name: "Mud Volcanoes Azerbaijan", country: "Azerbajdzan", continent: "Asie", lat: 40.090, lon: 49.390, score: 76, category: "priroda", themes: ["prirodni-anomalie", "sopky"], lead: "Pole bahennich sopek u Kaspiku, kde geologie vytvari studene kratory, plyny a mimozemsky povrch." },
  { name: "Haghpat Monastery", country: "Armenie", continent: "Asie", lat: 41.096, lon: 44.711, score: 77, category: "legenda", themes: ["ritual", "hory"], lead: "Stredoveky klaster nad Debedskym kanonem, kamenny uzel uceni, pouti a horskeho ticha." },
  { name: "Tatev Monastery", country: "Armenie", continent: "Asie", lat: 39.379, lon: 46.250, score: 78, category: "legenda", themes: ["ritual", "hory"], lead: "Klaster na hrane rokle Vorotan, spojeny s pouti, obrannou polohou a dramatickou horskou cestou." },
  { name: "Ihlara Valley", country: "Turecko", continent: "Asie", lat: 38.253, lon: 34.305, score: 77, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Kanon s byzantskymi skalnimi kostely v Kapadokii, kde voda, tuf a malby tvori skrytou poutni trasu." }
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
  id: "dvaadvacata-vlna-kavkaz-vychodni-evropa",
  slug: "dvaadvacata-vlna-kavkaz-vychodni-evropa",
  localizedSlugs: {
    cs: "dvaadvacata-vlna-kavkaz-vychodni-evropa",
    en: "twenty-second-wave-caucasus-eastern-europe",
    de: "zweiundzwanzigste-welle-kaukasus-osteuropa",
    es: "vigesimosegunda-ola-caucaso-europa-oriental",
    fr: "vingt-deuxieme-vague-caucase-europe-orientale"
  },
  title: "Dvaadvacata vlna: Kavkaz, Balkan a vychodni Evropa",
  description: "Dvaadvacata vlna rozsiruje mapu o klastery, pevnosti, jeskynni komplexy, horske veze, sopecne anomalie a citlive pametove krajiny Kavkazu a vychodni Evropy.",
  category: "legenda",
  themes: ["ritual", "hory", "podzemi", "archeologie"],
  relatedPlaceIds: rawPlaces.slice(0, 30).map((item) => slugify(item.name)),
  sections: [
    {
      heading: "Proc Kavkaz a vychodni Evropa",
      body: "Tato cast mapy dobre propojuje hranicni pevnosti, klastery, hory, jeskynni systemy a lokality, kde se historicka pamet potkava s folklorem i modernim cestovanim."
    },
    {
      heading: "Vertikalni krajiny",
      body: "Opakovanym motivem jsou vysoko polozena mista: klastery na skalach, horske veze, pevnosti nad kanony a poutni cesty, ktere maji silny vizualni i vypravecsky potencial."
    },
    {
      heading: "Dalsi krok",
      body: "U mist s citlivym politickym nebo pristupovym kontextem bude treba doplnit aktualni lokalni pravidla, oficialni spravcovske zdroje a presne navstevnicke poznamky."
    }
  ],
  sources: ["wikidata", "wikipedia", "openstreetmap", "wikimedia-commons"]
};

const articles = readJson(articlesPath);
const articlesById = new Map(articles.map((item) => [item.id, item]));
articlesById.set(article.id, article);
writeJson(articlesPath, Array.from(articlesById.values()));

console.log(`Upserted ${inserted.length} new places (${rawPlaces.length} raw) and article ${article.id}.`);
