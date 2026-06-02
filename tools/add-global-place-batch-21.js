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
      zahada: `${item.name} rozsiruje jednadvacatou vlnu MysteryMap jako mapovy bod s jasnou polohou a motivem: ${item.lead}`,
      historie: "Historicka vrstva popisuje zakladni identitu mista, kontinent, stat, GPS a tematicke zarazeni. Profil je seed pro dalsi lokalni zdroje a presnejsi navstevnicke informace.",
      legenda: "Legendova vrstva vysvetluje, proc se misto dostava do mapy: muze jit o svatyni, jeskyni, skalni krajinu, zanikle mesto, prirodni anomalni tvar nebo citlivou pamet katastrofy.",
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
  { name: "Erta Ale Volcano", country: "Etiopie", continent: "Afrika", lat: 13.600, lon: 40.670, score: 84, category: "katastrofa", themes: ["sopky", "nebezpeci"], lead: "Stitova sopka v Danakilu, znama dlouhodobou lavovou aktivitou a drsnou poustni cestou.", night: true, kids: false, risk: "vysoka podle aktivity a logistiky" },
  { name: "Dallol Hydrothermal Field", country: "Etiopie", continent: "Afrika", lat: 14.241, lon: 40.300, score: 82, category: "priroda", themes: ["prirodni-anomalie", "poust"], lead: "Kysela geotermalni krajina barevnych solnych krust, siry a horka na okraji Danakilske prolakliny.", kids: false },
  { name: "Lake Tana Monasteries", country: "Etiopie", continent: "Afrika", lat: 11.850, lon: 37.300, score: 78, category: "legenda", themes: ["ritual", "ostrov"], lead: "Ostrovni klastery na etiopskem jezere, spojovane s pouti, ikonami a tradici skrytych pokladu." },
  { name: "Engaruka Ruins", country: "Tanzanie", continent: "Afrika", lat: -2.983, lon: 35.950, score: 76, category: "ztracena-mesta", themes: ["archeologie", "ztracena-mesta"], lead: "Zanikly system poli, kanalu a osidleni pod srazem Rift Valley, ticha stopa davne organizovane krajiny." },
  { name: "Wadi El Hitan", country: "Egypt", continent: "Afrika", lat: 29.333, lon: 30.183, score: 80, category: "priroda", themes: ["fosilie", "poust"], lead: "Udoli velryb v zapadni pousti, kde fosilie ukazuji davne more a evolucni prechod savcu." },
  { name: "Sine Ngayene Stone Circles", country: "Senegal", continent: "Afrika", lat: 13.683, lon: -15.533, score: 77, category: "legenda", themes: ["archeologie", "ritual"], lead: "Megaliticke kruhy Senegambie, pohrebni a ritualni krajina stojicich kamenu." },
  { name: "Sossusvlei Deadvlei", country: "Namibie", continent: "Afrika", lat: -24.758, lon: 15.292, score: 80, category: "priroda", themes: ["poust", "prirodni-anomalie"], lead: "Bila hlinena panev s mrtvymi akaciemi mezi rudymi dunami, obraz sucha a zastaveneho casu." },
  { name: "Fish River Canyon", country: "Namibie", continent: "Afrika", lat: -27.583, lon: 17.600, score: 76, category: "priroda", themes: ["prirodni-anomalie", "nebezpeci"], lead: "Obrovsky kanon jizni Namibie, kde meritko krajiny meni turistickou trasu v test odolnosti." },
  { name: "Richtersveld Cultural Landscape", country: "Jihoafricka republika", continent: "Afrika", lat: -28.600, lon: 17.200, score: 75, category: "priroda", themes: ["poust", "ritual"], lead: "Horska poust a kulturni krajina Nama, spojeni nomadske tradice, kamene a suche biodiverzity." },
  { name: "Kongou Falls", country: "Gabon", continent: "Afrika", lat: 0.550, lon: 12.867, score: 76, category: "priroda", themes: ["prirodni-anomalie", "prales"], lead: "Siroke vodopady v narodnim parku Ivindo, pralesni hranice vody, mlhy a izolace." },
  { name: "Lope Okanda", country: "Gabon", continent: "Afrika", lat: -0.200, lon: 11.600, score: 76, category: "priroda", themes: ["archeologie", "prales"], lead: "Krajina pralesa a savany s archeologickymi stopami migraci, kde priroda prekryva dlouhou lidskou pamet." },
  { name: "Kakum Forest Canopy", country: "Ghana", continent: "Afrika", lat: 5.350, lon: -1.383, score: 73, category: "priroda", themes: ["prales", "nebezpeci"], lead: "Visute lavky v korunach ghanskeho pralesa, zmena perspektivy mezi turistickou stezkou a hloubkou lesa." },
  { name: "Rocamadour", country: "Francie", continent: "Evropa", lat: 44.800, lon: 1.618, score: 77, category: "legenda", themes: ["ritual", "pout"], lead: "Poutni mesto prilepene ke skale, kde vertikalni architektura meni svatyni v dramatickou kulisu." },
  { name: "Gavrinis Passage Tomb", country: "Francie", continent: "Evropa", lat: 47.571, lon: -2.898, score: 78, category: "legenda", themes: ["archeologie", "ritual"], lead: "Neoliticka hrobka v bretonskem zalivu, znama rytinami a presnou kamennou chodbou." },
  { name: "Broceliande Forest", country: "Francie", continent: "Evropa", lat: 48.018, lon: -2.172, score: 78, category: "legenda", themes: ["mytologie", "les"], lead: "Les spojovany s artusovskymi pribehy, Merlinem a bretonskou vrstvou stredoveke imaginace." },
  { name: "Aletsch Glacier", country: "Svycarsko", continent: "Evropa", lat: 46.500, lon: 8.033, score: 75, category: "priroda", themes: ["led", "prirodni-anomalie"], lead: "Nejvetsi alpsky ledovec, mohutny pruh ledu ukazujici zmenu klimatu i horske meritko." },
  { name: "Trummelbach Falls", country: "Svycarsko", continent: "Evropa", lat: 46.571, lon: 7.913, score: 74, category: "podzemi", themes: ["podzemi", "voda"], lead: "Ledovcove vodopady uvnitr hory, kde voda buraci skalnim systemem Lauterbrunnenu." },
  { name: "Holloch Cave", country: "Svycarsko", continent: "Evropa", lat: 46.975, lon: 8.780, score: 76, category: "podzemi", themes: ["podzemi", "prirodni-labyrint"], lead: "Rozsahla jeskynni soustava v Muotathalu, podzemni labyrint chodbi, vody a speleologicke nejistoty." },
  { name: "Dachstein Ice Cave", country: "Rakousko", continent: "Evropa", lat: 47.545, lon: 13.716, score: 75, category: "podzemi", themes: ["podzemi", "led"], lead: "Ledova jeskynni krajina Dachsteinu, kde skala a mraz vytvareji sezonne menici se podzemni sceny." },
  { name: "Skocjan Caves", country: "Slovinsko", continent: "Evropa", lat: 45.667, lon: 14.000, score: 79, category: "podzemi", themes: ["podzemi", "prirodni-labyrint"], lead: "Monumentalni krasovy system s podzemnim kanonem Reky, mosty a hloubkou, ktera pusobi mytologicky." },
  { name: "Devil's Town Serbia", country: "Srbsko", continent: "Evropa", lat: 42.990, lon: 21.408, score: 78, category: "priroda", themes: ["dabel", "prirodni-anomalie"], lead: "Erozni skalni veze Dabelskeho mesta, spojene s mineralnimi prameny a lidovym pojmenovanim." },
  { name: "Rtanj Mountain", country: "Srbsko", continent: "Evropa", lat: 43.776, lon: 21.890, score: 77, category: "priroda", themes: ["konspirace", "hory"], lead: "Pyramidove pusobici hora ve vychodnim Srbsku, kolem niz se vrsi moderni ezotericke a folklorni vyklady." },
  { name: "Pobiti Kamani", country: "Bulharsko", continent: "Evropa", lat: 43.227, lon: 27.706, score: 76, category: "priroda", themes: ["prirodni-anomalie", "poust"], lead: "Kamenny les u Varny, prirodni sloupy v pisku s geologii, ktera dlouho svadela k legendam." },
  { name: "Sarmizegetusa Regia", country: "Rumunsko", continent: "Evropa", lat: 45.623, lon: 23.311, score: 80, category: "ztracena-mesta", themes: ["archeologie", "ritual"], lead: "Dacke horske sidlo a svatyne, kde se politicka moc potkavala s ritualni krajinou Karpat." },
  { name: "Meteora Monasteries", country: "Recko", continent: "Evropa", lat: 39.721, lon: 21.631, score: 80, category: "legenda", themes: ["ritual", "hory"], lead: "Klastery na skalnich vezich Thesalie, spojeni izolace, pouti a vertikalniho sakralniho prostoru." },
  { name: "Delphi Oracle", country: "Recko", continent: "Evropa", lat: 38.482, lon: 22.501, score: 83, category: "legenda", themes: ["mytologie", "ritual"], lead: "Anticke vestirne Apollonovy svatyne, misto politickych rozhodnuti, proroctvi a horske scenografie." },
  { name: "Dikteon Cave", country: "Recko", continent: "Evropa", lat: 35.163, lon: 25.446, score: 78, category: "podzemi", themes: ["mytologie", "podzemi"], lead: "Kretska jeskyne spojovana s narozenim Dia, podzemni svatyne mezi archeologii a mytem." },
  { name: "Knossos Palace", country: "Recko", continent: "Evropa", lat: 35.298, lon: 25.163, score: 81, category: "ztracena-mesta", themes: ["archeologie", "mytologie"], lead: "Minojsky palac u Heraklionu, vrstvy labyrintu, Minotaura, rekonstrukce a archeologicke interpretace." },
  { name: "Cave of the Apocalypse", country: "Recko", continent: "Evropa", lat: 37.309, lon: 26.548, score: 79, category: "podzemi", themes: ["ritual", "podzemi"], lead: "Jeskynni svatyne na Patmu spojovana s knihou Zjeveni, pouti a apokalyptickou symbolikou." },
  { name: "Giant's Causeway", country: "Severni Irsko", continent: "Evropa", lat: 55.240, lon: -6.511, score: 80, category: "priroda", themes: ["mytologie", "prirodni-anomalie"], lead: "Cedicove sloupy na pobrezni hrane, kde geologie sdili prostor s legendou o obrovi Finnovi." }
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
  id: "jednadvacata-vlna-afrika-evropa",
  slug: "jednadvacata-vlna-afrika-evropa",
  localizedSlugs: {
    cs: "jednadvacata-vlna-afrika-evropa",
    en: "twenty-first-wave-africa-europe",
    de: "einundzwanzigste-welle-afrika-europa",
    es: "vigesimoprimera-ola-africa-europa",
    fr: "vingt-et-unieme-vague-afrique-europe"
  },
  title: "Jednadvacata vlna: Afrika, Evropa a ritualni krajiny",
  description: "Jednadvacata vlna pridava africke pouste, sopecna pole, pralesni vodopady, evropske jeskyne, poutni mista, megality a mytologicke krajiny.",
  category: "legenda",
  themes: ["ritual", "podzemi", "prirodni-anomalie", "archeologie"],
  relatedPlaceIds: rawPlaces.slice(0, 30).map((item) => slugify(item.name)),
  sections: [
    {
      heading: "Proc Afrika a Evropa",
      body: "Dalsi rozsireni kombinuje africke extremni krajiny s evropskymi jeskynemi, poutnimi misty a archeologii. Vysledkem jsou body, ktere dobre nesou mapu, tematicke filtry i detailni stranky."
    },
    {
      heading: "Ritual, podzemi a prirodni tvary",
      body: "Spolecnym motivem vlny jsou mista, kde se prirodni scenografie potkava s vypravovanim: vestirny, hrobky, kamenne sloupy, pralesy, lavova pole a ledove nebo krasove jeskyne."
    },
    {
      heading: "Dalsi krok",
      body: "U techto seedu bude vhodne doplnit oficialni spravcovske stranky, puvodni lokalni nazvy, citlive poznamky ke vstupu a licencovane fotografie pro vybrane prioritni detaily."
    }
  ],
  sources: ["wikidata", "wikipedia", "openstreetmap", "wikimedia-commons"]
};

const articles = readJson(articlesPath);
const articlesById = new Map(articles.map((item) => [item.id, item]));
articlesById.set(article.id, article);
writeJson(articlesPath, Array.from(articlesById.values()));

console.log(`Upserted ${inserted.length} new places (${rawPlaces.length} raw) and article ${article.id}.`);
