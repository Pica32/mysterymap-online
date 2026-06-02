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
  const themes = item.themes || ["archeologie", "legenda"];
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
      zahada: `${item.name} rozsiruje triadvacatou vlnu MysteryMap jako mapovy bod s jasnou polohou a motivem: ${item.lead}`,
      historie: "Historicka vrstva popisuje zakladni identitu mista, kontinent, stat, GPS a tematicke zarazeni. Profil je seed pro dalsi lokalni zdroje a presnejsi navstevnicke informace.",
      legenda: "Legendova vrstva vysvetluje, proc se misto dostava do mapy: muze jit o zanikle mesto, observator, hrobku, posvatnou horu, jezero, ruinu nebo ritualni krajinu.",
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
  { name: "Sipan Tombs", country: "Peru", continent: "Jizni Amerika", lat: -6.798, lon: -79.602, score: 79, category: "legenda", themes: ["archeologie", "umrti"], lead: "Mochicke hrobky u Huaca Rajada, kde zlato, moc a pohrebni ritualy ukazuji komplexni svet pred Inky.", kids: false },
  { name: "Quito Catacombs", country: "Ekvador", continent: "Jizni Amerika", lat: -0.220, lon: -78.512, score: 75, category: "podzemi", themes: ["podzemi", "umrti"], lead: "Podzemni pohrebni prostory historickeho Quita, ticha vrstva kolonialniho mesta a nabozenstvi." },
  { name: "Guatavita Lake", country: "Kolumbie", continent: "Jizni Amerika", lat: 4.977, lon: -73.774, score: 80, category: "legenda", themes: ["poklad", "ritual"], lead: "Jezero spojovane s legendou El Dorada, obetmi zlata a hranici mezi archeologii a hledanim pokladu." },
  { name: "Lost City of Z Colombia", country: "Kolumbie", continent: "Jizni Amerika", lat: 11.038, lon: -73.925, score: 78, category: "ztracena-mesta", themes: ["ztracena-mesta", "prales"], lead: "Pralesni motiv ztraceneho mesta, ktery propojuje expedicni mytus, archeologii a predstavu neprobadanosti." },
  { name: "Teyuna", country: "Kolumbie", continent: "Jizni Amerika", lat: 11.038, lon: -73.925, score: 80, category: "ztracena-mesta", themes: ["archeologie", "prales"], lead: "Ciudad Perdida v Sierra Nevada de Santa Marta, terasy a kamenne cesty skryte v tropickem lese." },
  { name: "Tulum Ruins", country: "Mexiko", continent: "Severni Amerika", lat: 20.214, lon: -87.429, score: 77, category: "ztracena-mesta", themes: ["archeologie", "oceany"], lead: "Mayske mesto na utesu nad Karibikem, kde opevneni, more a chramy vytvareji silnou hranicni scenu." },
  { name: "Coba Ruins", country: "Mexiko", continent: "Severni Amerika", lat: 20.491, lon: -87.738, score: 77, category: "ztracena-mesta", themes: ["archeologie", "prales"], lead: "Mayske mesto se sitmi cest sacbe, pyramidami a pralesni krajinou mezi jezery." },
  { name: "Mitla", country: "Mexiko", continent: "Severni Amerika", lat: 16.923, lon: -96.359, score: 78, category: "ztracena-mesta", themes: ["archeologie", "ritual"], lead: "Zapotecke a mixtecke ritualni misto s geometrickymi mozaikami, spojovane s pohrebni symbolikou." },
  { name: "El Tajin", country: "Mexiko", continent: "Severni Amerika", lat: 20.448, lon: -97.379, score: 79, category: "ztracena-mesta", themes: ["archeologie", "ritual"], lead: "Mesto s pyramidou nik, hriste pro micovou hru a silnou ritualni vrstvou pobrezi Mexickeho zalivu." },
  { name: "Tula Atlanteans", country: "Mexiko", continent: "Severni Amerika", lat: 20.064, lon: -99.342, score: 78, category: "legenda", themes: ["archeologie", "mytologie"], lead: "Toltecke sochy bojovniku na pyramide v Tule, monumentalni obraz moci, mytu a militarni symboliky." },
  { name: "Teotihuacan Pyramid of the Moon", country: "Mexiko", continent: "Severni Amerika", lat: 19.699, lon: -98.833, score: 82, category: "legenda", themes: ["archeologie", "ritual"], lead: "Pyramida Mesice v Teotihuacanu, osa ceremonialniho prostoru, obeti a mestskych kosmologii." },
  { name: "Bonampak", country: "Mexiko", continent: "Severni Amerika", lat: 16.705, lon: -91.065, score: 77, category: "ztracena-mesta", themes: ["archeologie", "ritual"], lead: "Mayske misto v Chiapasu zname nastennymi malbami, ktere ukazuji dvur, konflikt a ritual." },
  { name: "Yaxchilan", country: "Mexiko", continent: "Severni Amerika", lat: 16.899, lon: -90.966, score: 79, category: "ztracena-mesta", themes: ["archeologie", "prales"], lead: "Mayske mesto na rece Usumacinta, pralesni ruiny s reliefy, labyrinty a hranicni atmosferou." },
  { name: "Caral Supe", country: "Peru", continent: "Jizni Amerika", lat: -10.893, lon: -77.520, score: 81, category: "ztracena-mesta", themes: ["archeologie", "poust"], lead: "Jedno z nejstarsich mest Ameriky v udoli Supe, monumentalni platformy v suche pobrezni krajine." },
  { name: "Sechin Bajo", country: "Peru", continent: "Jizni Amerika", lat: -9.464, lon: -78.236, score: 77, category: "ztracena-mesta", themes: ["archeologie", "poust"], lead: "Stare ceremonialni centrum v udoli Casma, kamenne vrstvy velmi rane andske architektury." },
  { name: "Wari Ruins", country: "Peru", continent: "Jizni Amerika", lat: -13.063, lon: -74.203, score: 77, category: "ztracena-mesta", themes: ["archeologie", "ztracena-mesta"], lead: "Pozustatky predinckeho mesta Wari u Ayacucha, sit moci, cest a urbanisticke organizace." },
  { name: "Pikillacta", country: "Peru", continent: "Jizni Amerika", lat: -13.615, lon: -71.714, score: 76, category: "ztracena-mesta", themes: ["archeologie", "ztracena-mesta"], lead: "Wari komplex v udoli Cuzca, pravouhla urbanisticka stopa pred pozdejsi inckou dominanci." },
  { name: "Pachacamac", country: "Peru", continent: "Jizni Amerika", lat: -12.256, lon: -76.900, score: 80, category: "legenda", themes: ["ritual", "archeologie"], lead: "Pobrezni svatyne boha Pachacamaca, poutni centrum, pyramidy a proroctvi pred i po prichodu Inku." },
  { name: "Huaca Pucllana", country: "Peru", continent: "Jizni Amerika", lat: -12.111, lon: -77.033, score: 75, category: "legenda", themes: ["archeologie", "ritual"], lead: "Hlinena pyramida uprostred Limy, ritualni jadro kultury Lima uveznene v modernim meste." },
  { name: "Cahuachi", country: "Peru", continent: "Jizni Amerika", lat: -14.826, lon: -75.125, score: 79, category: "ztracena-mesta", themes: ["archeologie", "poust"], lead: "Ceremonialni centrum kultury Nazca, hlinene pyramidy a poutni krajina nedaleko geoglyfu." },
  { name: "Huaca del Sol", country: "Peru", continent: "Jizni Amerika", lat: -8.135, lon: -78.994, score: 78, category: "legenda", themes: ["archeologie", "ritual"], lead: "Monumentalni adobe pyramida Moche, spojena s mocenskou a ritualni krajinou udoli Moche." },
  { name: "Tucume Pyramids", country: "Peru", continent: "Jizni Amerika", lat: -6.509, lon: -79.858, score: 78, category: "ztracena-mesta", themes: ["archeologie", "poust"], lead: "Udoli pyramid u Tucume, rozsahla krajina hlinenych monumentu, legend a panovnicke pameti." },
  { name: "Chankillo Solar Observatory", country: "Peru", continent: "Jizni Amerika", lat: -9.556, lon: -78.235, score: 81, category: "legenda", themes: ["archeologie", "kosmicka-anomalie"], lead: "Trinact vezi Chankilla, staroveka slunecni observator v pousti a presna krajinna astronomie." },
  { name: "Sayhuite Stone", country: "Peru", continent: "Jizni Amerika", lat: -13.544, lon: -72.816, score: 77, category: "legenda", themes: ["symboly", "archeologie"], lead: "Vyrezavany kamen s miniaturami kanalu a staveb, casto vykladany jako ritualni model krajiny." },
  { name: "Valle de las Animas", country: "Bolivie", continent: "Jizni Amerika", lat: -16.552, lon: -68.011, score: 76, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Udoli skalnich jehel u La Pazu, erozni tvar pripominajici procesi duchu a kamennych postav." },
  { name: "Cerro Torre", country: "Argentina", continent: "Jizni Amerika", lat: -49.292, lon: -73.099, score: 77, category: "priroda", themes: ["hory", "nebezpeci"], lead: "Patagonska skalni jehla s dramatickou horolezeckou historii, vetrem a spory o vystupy.", kids: false },
  { name: "Fitz Roy", country: "Argentina", continent: "Jizni Amerika", lat: -49.271, lon: -73.044, score: 76, category: "priroda", themes: ["hory", "prirodni-anomalie"], lead: "Zubata hora nad El Chaltenem, patagonsky symbol oblaku, vetru a obtiznych pristupu." },
  { name: "Easter Island Ahu Tongariki", country: "Chile", continent: "Oceanie", lat: -27.125, lon: -109.276, score: 83, category: "legenda", themes: ["archeologie", "ostrov"], lead: "Nejvetsi obnoveny ahu Rapa Nui, rada moai mezi oceanem, kamenolomem a pameti ostrova." },
  { name: "Ahu Akivi", country: "Chile", continent: "Oceanie", lat: -27.116, lon: -109.395, score: 80, category: "legenda", themes: ["archeologie", "ostrov"], lead: "Sedm moai obracenych k mori, casto vykladanych pres navigaci, predky a ostrovni mytologii." },
  { name: "Ana Kai Tangata", country: "Chile", continent: "Oceanie", lat: -27.169, lon: -109.425, score: 77, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Pobrezni jeskyne na Rapa Nui se skalnimi malbami a temnym folklornim nazvem spojovanym s lidskymi pribehy." }
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
  id: "triadvacata-vlna-latinska-amerika-archeologie",
  slug: "triadvacata-vlna-latinska-amerika-archeologie",
  localizedSlugs: {
    cs: "triadvacata-vlna-latinska-amerika-archeologie",
    en: "twenty-third-wave-latin-america-archaeology",
    de: "dreiundzwanzigste-welle-lateinamerika-archaeologie",
    es: "vigesimotercera-ola-america-latina-arqueologia",
    fr: "vingt-troisieme-vague-amerique-latine-archeologie"
  },
  title: "Triadvacata vlna: Latinska Amerika, observatore a ztracena mesta",
  description: "Triadvacata vlna rozsiruje mapu o mayske a andske ruiny, poustni observatore, pohrebni krajiny, posvatna jezera, pralesni mesta a ostrovni moai.",
  category: "ztracena-mesta",
  themes: ["archeologie", "ritual", "ztracena-mesta", "poust"],
  relatedPlaceIds: rawPlaces.slice(0, 30).map((item) => slugify(item.name)),
  sections: [
    {
      heading: "Proc Latinska Amerika",
      body: "Tato vlna doplnuje lokality, ktere maji silnou mapovou logiku: ruiny, observatore, chramy, pohrebiste, horske dominanty i ostrovni sochy, ktere dobre funguji v detailu i tematickych filtrech."
    },
    {
      heading: "Archeologie bez senzace",
      body: "Mista jako Chankillo, Caral, Pachacamac nebo Yaxchilan ukazuji, ze zahada nemusi stat na pseudovede. Casto staci presne oddelit overitelnou archeologii, legendu a moderni cestovatelsky mytus."
    },
    {
      heading: "Dalsi krok",
      body: "Prioritou bude doplnit oficialni spravcovske zdroje, lokalni nazvy, navstevnicka pravidla a licencovane fotografie u mist s nejvyssi hledanosti a nejsilnejsim vizualnim potencialem."
    }
  ],
  sources: ["wikidata", "wikipedia", "openstreetmap", "wikimedia-commons"]
};

const articles = readJson(articlesPath);
const articlesById = new Map(articles.map((item) => [item.id, item]));
articlesById.set(article.id, article);
writeJson(articlesPath, Array.from(articlesById.values()));

console.log(`Upserted ${inserted.length} new places (${rawPlaces.length} raw) and article ${article.id}.`);
