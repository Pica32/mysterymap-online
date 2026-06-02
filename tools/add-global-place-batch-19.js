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
      zahada: `${item.name} rozsiruje devatenactou vlnu MysteryMap jako geograficky vyrazny bod: ${item.lead}`,
      historie: "Historicka vrstva drzi zakladni identitu mista, kontinent, stat, GPS a tematicke zarazeni. Profil je seed pro dalsi lokalni overeni a rozsahlejsi redakcni dopracovani.",
      legenda: "Legendova vrstva vysvetluje, proc misto patri do mapy zahad: muze jit o poustni mesto, oazu, jeskyni, ostrov, ritus, sopecny jev, ztracene osidleni nebo vyraznou prirodni anomalii.",
      paranormalni: "Zahadova tvrzeni jsou zapsana jako folklor, turisticka tradice, medialni asociace nebo lokalni svedectvi. Nejsou michana s overitelnou historii.",
      skepticke: "Skepticky ramec prednostne hleda geologicke, archeologicke, klimaticke, historicke a medialni vysvetleni. Profil tak zustava citelny i bez senzacechtivych tvrzeni."
    },
    praktickeInfo: `Pred navstevou ${item.name} over povoleni, pristupnost, dopravu, bezpecnost a ochranu lokality. U poustnich, horskych, ostrovnich a konfliktne citlivych mist je GPS pouze orientacni.`,
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: `Wikipedia search: ${item.name}`, url: `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(item.name)}`, licence: "CC BY-SA / reference discovery" },
      { nazev: `Wikidata search: ${item.name}`, url: `https://www.wikidata.org/w/index.php?search=${encodeURIComponent(item.name)}`, licence: "CC0 / entity discovery" },
      { nazev: "OpenStreetMap search", url: `https://www.openstreetmap.org/search?query=${encodeURIComponent(`${item.name} ${item.country}`)}`, licence: "ODbL / map verification" }
    ],
    pribehy: [
      { nazev: "Duvod zarazeni", text: `${item.name} doplnuje mapu o motivy ${themes.join(", ")} a posiluje geograficke pokryti mimo nejhusteji zpracovanou Evropu a Severni Ameriku.` },
      { nazev: "Dalsi prace", text: "Seed je pripraveny na doplneni lokalnich spravcovskych zdroju, presnych nazvu, licencovanych fotografii a jazykovych detailu podle priority navstevnosti." }
    ]
  };
}

const rawPlaces = [
  { name: "Door to Hell Darvaza", country: "Turkmenistan", continent: "Asie", lat: 40.2526, lon: 58.4392, score: 86, category: "katastrofa", themes: ["sopky", "dabel", "prirodni-anomalie"], lead: "Horic krater v Karakumu, moderni industriální nehoda premenena v ikonickou branu do pekla.", night: true },
  { name: "Yangykala Canyon", country: "Turkmenistan", continent: "Asie", lat: 40.522, lon: 55.034, score: 77, category: "priroda", themes: ["poust", "prirodni-anomalie"], lead: "Barevny poustni kanon v zapadnim Turkmenistanu, krajina davneho more a eroze." },
  { name: "Shahrisabz", country: "Uzbekistan", continent: "Asie", lat: 39.0578, lon: 66.8342, score: 77, category: "ztracena-mesta", themes: ["stredovek", "politika"], lead: "Rodne mesto Timura se zbytky monumentalni architektury, pamet moci a rozpadu impéria." },
  { name: "Itchan Kala Khiva", country: "Uzbekistan", continent: "Asie", lat: 41.3784, lon: 60.3593, score: 81, category: "ztracena-mesta", themes: ["ztracena-mesta", "poust"], lead: "Hradbami uzavrene stare mesto Chivy, poustni labyrint medres, minaretu a obchodnich cest." },
  { name: "Moynaq Ship Cemetery", country: "Uzbekistan", continent: "Asie", lat: 43.768, lon: 59.03, score: 83, category: "katastrofa", themes: ["oceany", "katastrofa"], lead: "Lode uvizle v pousti po ustupu Aralskeho more, jedno z nejsilnejsich mist ekologicke pameti." },
  { name: "Karakalpakstan Mizdakhan Necropolis", country: "Uzbekistan", continent: "Asie", lat: 42.456, lon: 59.616, score: 78, category: "legenda", themes: ["umrti", "ritual"], lead: "Rozsahla nekropole u Nukusu, pohrebni krajina mezi pousti, islamem a staršími vrstvami pameti." },
  { name: "Sarmishsay Petroglyphs", country: "Uzbekistan", continent: "Asie", lat: 40.110, lon: 65.590, score: 76, category: "legenda", themes: ["archeologie", "zvirata"], lead: "Skalni rytiny v udoli Sarmishsay, tisice obrazu zvirat, lovu a davnych znaku." },
  { name: "Tash Rabat Caravanserai", country: "Kyrgyzstan", continent: "Asie", lat: 40.822, lon: 75.288, score: 77, category: "podzemi", themes: ["stredovek", "poust"], lead: "Kamenny karavanseraj v horach Tian Shan, osamela stavba hedvabne stezky a horske izolace." },
  { name: "Burana Tower", country: "Kyrgyzstan", continent: "Asie", lat: 42.746, lon: 75.250, score: 75, category: "ztracena-mesta", themes: ["stredovek", "archeologie"], lead: "Minaret zanikleho mesta Balasagun, zbytek moci Karachanu v stepni krajine." },
  { name: "Song Kol Stone Circles", country: "Kyrgyzstan", continent: "Asie", lat: 41.833, lon: 75.133, score: 74, category: "legenda", themes: ["ritual", "archeologie"], lead: "Vysokohorske kamenité kruhy a pastevecka krajina u jezera Song Kol, archeologie v prostoru nomadu." },
  { name: "Bektau Ata", country: "Kazachstan", continent: "Asie", lat: 47.430, lon: 74.770, score: 76, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Granitem rozbita hora a jeskyne ve stepi, misto prirodnich tvaru, pouti a lokalnich pover." },
  { name: "Ustyurt Plateau Chinks", country: "Kazachstan", continent: "Asie", lat: 44.000, lon: 56.000, score: 77, category: "priroda", themes: ["poust", "prirodni-anomalie"], lead: "Ustyurtske srazy nad pustou krajinou, dramaticka hrana stepi, solnych panvi a starych cest." },
  { name: "Mangystau Underground Mosques", country: "Kazachstan", continent: "Asie", lat: 43.640, lon: 51.170, score: 78, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Podzemni a skalni svatyne Mangystau, poutni krajina mezi pousti, sufijskou tradici a skalou." },
  { name: "Karkaraly Kent Ruins", country: "Kazachstan", continent: "Asie", lat: 49.410, lon: 75.480, score: 74, category: "ztracena-mesta", themes: ["archeologie", "ztracena-mesta"], lead: "Bronzove a staroveke stopy v Karkaralinsku, mene znama vrstva kazašske archeologicke mapy." },
  { name: "Yazd Towers of Silence", country: "Iran", continent: "Asie", lat: 31.817, lon: 54.370, score: 82, category: "legenda", themes: ["umrti", "ritual"], lead: "Zoroastrijske veze ticha nad Yazdem, pohrebni krajina mezi pousti, ohnem a cistotou." },
  { name: "Qeshm Valley of Stars", country: "Iran", continent: "Asie", lat: 26.820, lon: 56.060, score: 79, category: "priroda", themes: ["prirodni-anomalie", "kosmicka-anomalie"], lead: "Erozni udoli na ostrove Qeshm, jehoz tvary mistni tradice spojuje s padem hvezdy." },
  { name: "Kandovan Rock Village", country: "Iran", continent: "Asie", lat: 37.795, lon: 46.249, score: 77, category: "ztracena-mesta", themes: ["podzemi", "prirodni-anomalie"], lead: "Skalni vesnice v tufovych kuzelich, obydlene prirodni architektury podobne kapadockym formam." },
  { name: "Meymand Troglodyte Village", country: "Iran", continent: "Asie", lat: 30.224, lon: 55.376, score: 78, category: "podzemi", themes: ["podzemi", "archeologie"], lead: "Skalni vesnice Meymand, dlouhodobe obyvany troglodytni prostor v suchych horach." },
  { name: "Kharanaq Ghost Village", country: "Iran", continent: "Asie", lat: 32.336, lon: 54.664, score: 78, category: "ztracena-mesta", themes: ["ztracena-mista", "poust"], lead: "Opustena hlinena vesnice u Yazdu, labyrint zricenych ulic, vetru a poustni pameti." },
  { name: "Bam Citadel", country: "Iran", continent: "Asie", lat: 29.106, lon: 58.368, score: 82, category: "ztracena-mesta", themes: ["ztracena-mesta", "zemetreseni"], lead: "Arg-e Bam, obrovska hlinena citadela poznamenana zemetresenim, obnovou a pameti Hedvabne stezky." },
  { name: "Harrat Khaybar", country: "Saudska Arabie", continent: "Asie", lat: 25.000, lon: 39.920, score: 79, category: "priroda", themes: ["sopky", "poust"], lead: "Cer­na lavova pole v Arabii, sopecna krajina kontrastujici s pousti a starymi cestami." },
  { name: "Madain Saleh", country: "Saudska Arabie", continent: "Asie", lat: 26.800, lon: 37.950, score: 84, category: "ztracena-mesta", themes: ["archeologie", "poust"], lead: "Nabatejske hrobky Hegra v pousti, sestra Petry s vlastni monumentalni tichou topografii." },
  { name: "Al Ula Old Town", country: "Saudska Arabie", continent: "Asie", lat: 26.617, lon: 37.915, score: 80, category: "ztracena-mesta", themes: ["ztracena-mesta", "poust"], lead: "Stare mesto Al Ula, hlineny labyrint opusteny ve stinu oazy a archeologickeho boomu." },
  { name: "Farasan Islands", country: "Saudska Arabie", continent: "Asie", lat: 16.700, lon: 41.980, score: 75, category: "ostrov", themes: ["ostrov", "oceany"], lead: "Ostrovy v Rudém moři s opustenymi domy, koralovou krajinou a okrajovou namorni pameti." },
  { name: "Jubbah Rock Art", country: "Saudska Arabie", continent: "Asie", lat: 28.010, lon: 40.920, score: 78, category: "legenda", themes: ["archeologie", "poust"], lead: "Skalni umeni v poustni oblasti Hail, stopy lidi a zvirat v krajine davnych jezer." },
  { name: "Socotra Hoq Cave", country: "Jemen", continent: "Asie", lat: 12.590, lon: 54.000, score: 78, category: "podzemi", themes: ["podzemi", "ostrov"], lead: "Jeskyně Hoq na Sokotre, podzemni vrstva ostrova znamého podivnou florou a izolaci." },
  { name: "Wadi Rum Seven Pillars", country: "Jordansko", continent: "Asie", lat: 29.576, lon: 35.420, score: 79, category: "priroda", themes: ["poust", "film"], lead: "Poustni masiv u Wadi Rum, monumentalni krajina filmu, beduinske pameti a geologickeho divadla." },
  { name: "Umm Al Jimal", country: "Jordansko", continent: "Asie", lat: 32.328, lon: 36.369, score: 76, category: "ztracena-mesta", themes: ["ztracena-mesta", "archeologie"], lead: "Cerne bazaltove ruiny na severu Jordanska, opustene mesto na hranici pouste a obchodu." },
  { name: "Shobak Castle", country: "Jordansko", continent: "Asie", lat: 30.531, lon: 35.560, score: 78, category: "hrad", themes: ["templari", "hrad"], lead: "Krizacka pevnost nad jordanskou krajinou, strategicky bod mezi pouti, valkou a pousti." },
  { name: "Qasr Amra", country: "Jordansko", continent: "Asie", lat: 31.801, lon: 36.587, score: 76, category: "legenda", themes: ["poust", "ritual"], lead: "Umajjovsky poustni zamek s freskami, necekane intimni obraz sveta na okraji stepi." },
  { name: "Danakil Salt Caravans", country: "Etiopie", continent: "Afrika", lat: 14.250, lon: 40.300, score: 80, category: "priroda", themes: ["poust", "prirodni-anomalie"], lead: "Solne karavany v Danakilu, lidska trasa pres extremni krajinu horka, soli a sopek.", risk: "vysoka podle zony a pravidel", kids: false },
  { name: "Tiya Stelae Field", country: "Etiopie", continent: "Afrika", lat: 8.434, lon: 38.613, score: 79, category: "legenda", themes: ["archeologie", "umrti"], lead: "Pole stel v Tiya, vyryte znaky a pohrebni archeologie s nejasnymi vyznamy." },
  { name: "Aksum Obelisks", country: "Etiopie", continent: "Afrika", lat: 14.132, lon: 38.719, score: 82, category: "legenda", themes: ["archeologie", "politika"], lead: "Obelisky v Aksumu, monumentalni pamet stare rise, hrobek a kralovske symboliky." },
  { name: "Lake Turkana Koobi Fora", country: "Kena", continent: "Afrika", lat: 3.950, lon: 36.200, score: 79, category: "legenda", themes: ["archeologie", "poust"], lead: "Paleoantropologicka krajina u Turkany, kde poust, jezero a fosilie vytvareji dlouhou lidskou stopu." },
  { name: "Hell's Gate Kenya", country: "Kena", continent: "Afrika", lat: -0.900, lon: 36.330, score: 76, category: "priroda", themes: ["prirodni-anomalie", "dabel"], lead: "Soutěsky a geotermalni krajina v Keni, nazev i tvar podnecuji pekelne prirodni asociace." },
  { name: "Ol Doinyo Lengai", country: "Tanzanie", continent: "Afrika", lat: -2.764, lon: 35.914, score: 82, category: "katastrofa", themes: ["sopky", "ritual"], lead: "Sopka Maasaju a vzacne natrokarbonatitove lavove proudy, prirodni anomálie s ritualni krajinou." },
  { name: "Matobo Hills", country: "Zimbabwe", continent: "Afrika", lat: -20.500, lon: 28.500, score: 80, category: "priroda", themes: ["archeologie", "ritual"], lead: "Granite kopce Matobo se skalnim umenim, posvatnymi misty a krajinou politicke pameti." },
  { name: "Namib Skeleton Coast", country: "Namibie", continent: "Afrika", lat: -20.000, lon: 13.000, score: 83, category: "priroda", themes: ["oceany", "umrti"], lead: "Pobrezni pustina vraku, mlhy a kosti, prirodni hranice mezi oceanem a pousti." },
  { name: "Makgadikgadi Salt Pans", country: "Botswana", continent: "Afrika", lat: -20.800, lon: 25.300, score: 78, category: "priroda", themes: ["poust", "prirodni-anomalie"], lead: "Obrovske solne pane Botswany, zbytky davneho jezera a krajina optickych klamu." },
  { name: "Kubu Island", country: "Botswana", continent: "Afrika", lat: -20.897, lon: 25.823, score: 79, category: "ostrov", themes: ["ostrov", "ritual"], lead: "Skalni ostrov v solne pani s baobaby a archeologickymi stopami, izolace bez more." },
  { name: "Tsingy de Bemaraha", country: "Madagaskar", continent: "Afrika", lat: -18.667, lon: 44.750, score: 82, category: "priroda", themes: ["prirodni-labyrint", "zvirata"], lead: "Ostra vapencova jehlova krajina na Madagaskaru, prirodni labyrint, kde se pohyb meni v vyzvu." },
  { name: "Avenue of the Baobabs", country: "Madagaskar", continent: "Afrika", lat: -20.250, lon: 44.419, score: 75, category: "priroda", themes: ["zvirata", "mytologie"], lead: "Alej baobabu u Morondavy, ikonicky stromovy koridor, ktery pusobi jako prirodni ceremonialni cesta." },
  { name: "Ankarana Tsingy Caves", country: "Madagaskar", continent: "Afrika", lat: -12.900, lon: 49.100, score: 79, category: "podzemi", themes: ["podzemi", "prirodni-labyrint"], lead: "Kras, jeskyně a tsingy v severnim Madagaskaru, podzemni i povrchovy labyrint v jedne rezervaci." },
  { name: "Le Morne Brabant", country: "Mauricius", continent: "Afrika", lat: -20.455, lon: 57.318, score: 80, category: "priroda", themes: ["umrti", "ostrov"], lead: "Hora na Mauriciu spojena s pameti otroctvi, uniku a tragickeho ostrovniho symbolu." },
  { name: "Sri Pada Adam's Peak Shadow", country: "Sri Lanka", continent: "Asie", lat: 6.8096, lon: 80.4994, score: 78, category: "legenda", themes: ["ritual", "prirodni-anomalie"], lead: "Doplnkovy profil Adamovy hory zamerene na poutni stin a svitani nad posvatnou krajinou." },
  { name: "Ram Setu Shoals", country: "Indie", continent: "Asie", lat: 9.083, lon: 79.533, score: 80, category: "priroda", themes: ["mytologie", "oceany"], lead: "Reťez melcin mezi Indií a Sri Lankou, kde geologie, mytologie Ramajany a politika sdileji jeden pas." },
  { name: "Elephanta Caves", country: "Indie", continent: "Asie", lat: 18.963, lon: 72.931, score: 80, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Ostrovni skalni chramy u Bombaje, sakralni podzemi a morske priblizeni k hinduisticke ikonografii." },
  { name: "Meghalaya Root Bridges", country: "Indie", continent: "Asie", lat: 25.245, lon: 91.727, score: 78, category: "priroda", themes: ["zvirata", "prirodni-labyrint"], lead: "Zive korenove mosty v Meghalaji, biologicka architektura rostouci pres rokle a monzunove lesy." },
  { name: "Krem Liat Prah", country: "Indie", continent: "Asie", lat: 25.350, lon: 92.500, score: 77, category: "podzemi", themes: ["podzemi", "prirodni-labyrint"], lead: "Dlouhy jeskynni system v Meghalaji, jeden z nejdulezitejsich podzemnich labyrintu indickeho severovychodu." },
  { name: "Bhimbetka Rock Shelters", country: "Indie", continent: "Asie", lat: 22.939, lon: 77.613, score: 81, category: "legenda", themes: ["archeologie", "zvirata"], lead: "Skalni pristresky s pravekymi malbami, dlouha obrazova pamet lidske pritomnosti v centralni Indii." },
  { name: "Rani ki Vav", country: "Indie", continent: "Asie", lat: 23.858, lon: 72.101, score: 78, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Stupnovita studna v Patanu, architektura sestupu, vody a socharskeho podzemniho prostoru." }
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
  id: "devatenacta-vlna-pouste-oazy-a-anomalie",
  slug: "devatenacta-vlna-pouste-oazy-a-anomalie",
  localizedSlugs: {
    cs: "devatenacta-vlna-pouste-oazy-a-anomalie",
    en: "nineteenth-wave-deserts-oases-and-anomalies",
    de: "neunzehnte-welle-wuesten-oasen-und-anomalien",
    es: "decimonovena-ola-desiertos-oasis-y-anomalias",
    fr: "dix-neuvieme-vague-deserts-oasis-et-anomalies"
  },
  title: "Devatenacta vlna: pouste, oazy, ostrovy a prirodni anomalie",
  description: "Devatenacta vlna rozsiruje mapu o Stredni Asii, Arabsky poloostrov, Afriku, ostrovy, solne pane, poustni ruiny a jeskynni systemy.",
  category: "priroda",
  themes: ["poust", "prirodni-anomalie", "archeologie", "podzemi"],
  relatedPlaceIds: rawPlaces.slice(0, 30).map((item) => slugify(item.name)),
  sections: [
    {
      heading: "Proc pouste a oazy",
      body: "Pouste a oazy maji silnou mapovou hodnotu: jsou ridce osidlene, plne prerusenych cest, opustenych mest, extremni geologie a legend, ktere vznikaji z izolace."
    },
    {
      heading: "Anomalie bez senzace",
      body: "Mnoho mist v teto vlne vypada nadprirozene, ale ma geologicke, klimaticke nebo historicke vysvetleni. Profil proto spojuje atmosferu s jasnym skeptickym ramcem."
    },
    {
      heading: "Dalsi krok",
      body: "U devatenacte vlny bude vhodne doplnit lokalni spravcovske zdroje, presna pravidla vstupu a bezpecnostni upozorneni pro poustni, horska a politicky citliva uzemi."
    }
  ],
  sources: ["wikidata", "wikipedia", "openstreetmap", "wikimedia-commons"]
};

const articles = readJson(articlesPath);
const articlesById = new Map(articles.map((item) => [item.id, item]));
articlesById.set(article.id, article);
writeJson(articlesPath, Array.from(articlesById.values()));

console.log(`Upserted ${inserted.length} new places (${rawPlaces.length} raw) and article ${article.id}.`);
