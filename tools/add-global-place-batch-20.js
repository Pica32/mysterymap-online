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
      zahada: `${item.name} rozsiruje dvacatou vlnu MysteryMap jako mapovy bod s jasnou polohou a motivem: ${item.lead}`,
      historie: "Historicka vrstva popisuje zakladni identitu mista, kontinent, stat, GPS a tematicke zarazeni. Profil je seed pro dalsi lokalni zdroje a presnejsi navstevnicke informace.",
      legenda: "Legendova vrstva vysvetluje, proc se misto dostava do mapy: muze jit o poust, ostrov, zanikle mesto, ritualni krajinu, sopecny jev, jeskyni nebo prirodni anomalni tvar.",
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
  { name: "Huacachina Oasis", country: "Peru", continent: "Jizni Amerika", lat: -14.0875, lon: -75.7633, score: 76, category: "priroda", themes: ["poust", "prirodni-anomalie"], lead: "Oaza v dunach u Icy, misto mezi poustnim optickym snem, legendou o vode a modernim turismem." },
  { name: "Gocta Waterfall", country: "Peru", continent: "Jizni Amerika", lat: -6.023, lon: -77.887, score: 77, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Vysoky vodopad v mlznem lese, ktery lokalni vypraveni spojuji s ochranou, strachem a izolaci." },
  { name: "Isla del Sol", country: "Bolivie", continent: "Jizni Amerika", lat: -16.020, lon: -69.050, score: 80, category: "ostrov", themes: ["mytologie", "ritual"], lead: "Ostrov slunce na Titicace, posvatna krajina inckeho puvodu, pouti a vysokeho jezera." },
  { name: "Eduardo Avaroa Stone Tree", country: "Bolivie", continent: "Jizni Amerika", lat: -22.050, lon: -67.883, score: 78, category: "priroda", themes: ["poust", "prirodni-anomalie"], lead: "Kamenny strom v altiplanu, erozni socha mezi lagunami, vetrem a sopecnou pousti." },
  { name: "Laguna Colorada", country: "Bolivie", continent: "Jizni Amerika", lat: -22.200, lon: -67.783, score: 80, category: "priroda", themes: ["prirodni-anomalie", "zvirata"], lead: "Cervena laguna s plamenaky, mineralni barva a vysokohorska krajina pusobici skoro mimozemsky." },
  { name: "Tatacoa Desert", country: "Kolumbie", continent: "Jizni Amerika", lat: 3.233, lon: -75.170, score: 76, category: "priroda", themes: ["poust", "kosmicka-anomalie"], lead: "Sucha erozni krajina s astronomickou tradici, labyrint cervenych a sedych badlands." },
  { name: "Cano Cristales", country: "Kolumbie", continent: "Jizni Amerika", lat: 2.264, lon: -73.794, score: 77, category: "priroda", themes: ["prirodni-anomalie", "zvirata"], lead: "Barevna reka v Serrania de la Macarena, biologicky jev, ktery vypada jako legendarni paleta." },
  { name: "Galapagos Lava Tunnels", country: "Ekvador", continent: "Jizni Amerika", lat: -0.744, lon: -90.312, score: 76, category: "podzemi", themes: ["podzemi", "sopky"], lead: "Lávové tunely na Galapagach, podzemni stopa sopecneho puvodu ostrovu a evolucni krajiny." },
  { name: "Coiba Island", country: "Panama", continent: "Severni Amerika", lat: 7.466, lon: -81.766, score: 77, category: "ostrov", themes: ["ostrov", "veznice"], lead: "Tropicky ostrov s minulosti trestanecke kolonie, dnes prirodni rezervace s citlivou pameti izolace." },
  { name: "Darien Gap", country: "Panama", continent: "Severni Amerika", lat: 8.300, lon: -77.900, score: 82, category: "priroda", themes: ["prirodni-labyrint", "nebezpeci"], lead: "Pralesni a bazinaty predel mezi Amerikami, kde geografie, migrace a riziko vytvareji skutecny labyrint.", risk: "vysoka podle zony a pravidel", kids: false },
  { name: "Isla de la Plata", country: "Ekvador", continent: "Jizni Amerika", lat: -1.270, lon: -81.070, score: 74, category: "ostrov", themes: ["ostrov", "zvirata"], lead: "Ostrov s morskymi ptaky a legendou o stribre, mensi ekvador­sky protejsek galapazskeho motivu." },
  { name: "Chiloe Ghost Churches", country: "Chile", continent: "Jizni Amerika", lat: -42.620, lon: -73.780, score: 78, category: "legenda", themes: ["duchove", "ostrov"], lead: "Drevene kostely a ostrovni mytologie Chiloe, krajina mlhy, lodi duchu a synkretickych legend.", night: true },
  { name: "Marble Caves Chile", country: "Chile", continent: "Jizni Amerika", lat: -46.650, lon: -72.627, score: 78, category: "podzemi", themes: ["podzemi", "oceany"], lead: "Mramorove jeskyne na General Carrera, vodni labyrint modreho svetla a eroze." },
  { name: "Valley of the Moon Atacama", country: "Chile", continent: "Jizni Amerika", lat: -22.910, lon: -68.300, score: 79, category: "priroda", themes: ["poust", "kosmicka-anomalie"], lead: "Mesicni krajina Atacamy, sol, vitr a skalni tvary vyvolavajici predstavu jine planety." },
  { name: "Cemetery of Chauchilla", country: "Peru", continent: "Jizni Amerika", lat: -14.967, lon: -74.941, score: 79, category: "legenda", themes: ["umrti", "archeologie"], lead: "Otevrene pohrebiste kultury Nazca, kde poust uchovava mumie, textilie a velmi citlivou pamet smrti.", kids: false },
  { name: "Paititi Legend Zone", country: "Peru", continent: "Jizni Amerika", lat: -12.900, lon: -71.400, score: 78, category: "ztracena-mesta", themes: ["poklad", "ztracena-mesta"], lead: "Pralesni oblast spojovana s legendou Paititi, ztracenym mestem a hranici mezi archeologii a touhou po pokladu." },
  { name: "Cenote Sagrado", country: "Mexiko", continent: "Severni Amerika", lat: 20.684, lon: -88.570, score: 81, category: "podzemi", themes: ["ritual", "podzemi"], lead: "Posvatny cenote v Chichen Itza, vodni propast obeti, archeologie a mytologickeho podsveti." },
  { name: "Zone of Silence Mexico", country: "Mexiko", continent: "Severni Amerika", lat: 27.000, lon: -104.000, score: 79, category: "priroda", themes: ["ufo", "konspirace"], lead: "Pousterna oblast severniho Mexika spojovana s radiovymi anomaliemi, meteority a modernim folklorem." },
  { name: "Yaxha", country: "Guatemala", continent: "Severni Amerika", lat: 17.067, lon: -89.400, score: 78, category: "ztracena-mesta", themes: ["archeologie", "ritual"], lead: "Mayske mesto mezi jezery a pralesem, mene preplnena vrstva klasicke civilizace a ritualni krajiny." },
  { name: "Quetzaltenango Fuentes Georginas", country: "Guatemala", continent: "Severni Amerika", lat: 14.748, lon: -91.482, score: 74, category: "priroda", themes: ["sopky", "ritual"], lead: "Termalni prameny v sopecnych horach u Zunilu, voda, para a horska poutni atmosfera." },
  { name: "Orongo Easter Island", country: "Chile", continent: "Oceanie", lat: -27.187, lon: -109.435, score: 82, category: "legenda", themes: ["ritual", "ostrov"], lead: "Ritualni vesnice Orongo na Rapa Nui, krajina ptaciho muze, krateru a okraje oceanu." },
  { name: "Rano Raraku Quarry", country: "Chile", continent: "Oceanie", lat: -27.124, lon: -109.289, score: 83, category: "legenda", themes: ["archeologie", "ostrov"], lead: "Lom soch moai na Rapa Nui, misto nedokoncenych postav a otazek po praci, kultu a kolapsu." },
  { name: "Ball Pyramid", country: "Australie", continent: "Oceanie", lat: -31.754, lon: 159.252, score: 77, category: "ostrov", themes: ["ostrov", "zvirata"], lead: "Osamely skalni jehel v Pacifiku, extremni ostrovni biotop a symbol izolovane evoluce." },
  { name: "Lord Howe Island", country: "Australie", continent: "Oceanie", lat: -31.555, lon: 159.085, score: 76, category: "ostrov", themes: ["ostrov", "zvirata"], lead: "Izolovany ostrov s neobvyklou prirodou, endemity a dramatickou vulkanickou siluetou." },
  { name: "Waiotapu Thermal Wonderland", country: "Novy Zeland", continent: "Oceanie", lat: -38.358, lon: 176.369, score: 78, category: "priroda", themes: ["sopky", "prirodni-anomalie"], lead: "Geotermalni krajina barevnych pramenu, siry a paru, kde chemie vytvari skoro nerealne barvy." },
  { name: "Waimangu Volcanic Valley", country: "Novy Zeland", continent: "Oceanie", lat: -38.284, lon: 176.401, score: 79, category: "katastrofa", themes: ["sopky", "katastrofa"], lead: "Sopecne udoli vznikle erupci Tarawery, krajina mladych geotermalnich jevu a pameti katastrofy." },
  { name: "Rotorua Buried Village", country: "Novy Zeland", continent: "Oceanie", lat: -38.219, lon: 176.433, score: 80, category: "katastrofa", themes: ["sopky", "umrti"], lead: "Vesnice Te Wairoa zasypana erupci Tarawery, citlive misto pameti prirodni katastrofy." },
  { name: "Punakaiki Pancake Rocks", country: "Novy Zeland", continent: "Oceanie", lat: -42.116, lon: 171.327, score: 74, category: "priroda", themes: ["prirodni-anomalie", "oceany"], lead: "Vrstvene vapencove skaly a foukaci otvory na zapadnim pobrezi, rytmus oceanu a geologie." },
  { name: "Lifou Jokin Cliffs", country: "Nova Kaledonie", continent: "Oceanie", lat: -20.858, lon: 167.079, score: 73, category: "ostrov", themes: ["ostrov", "oceany"], lead: "Korálové utesy ostrova Lifou, oceanska hrana, jeskynni pobrezi a ticha izolace." },
  { name: "Tanna Yasur Volcano", country: "Vanuatu", continent: "Oceanie", lat: -19.532, lon: 169.447, score: 83, category: "katastrofa", themes: ["sopky", "ritual"], lead: "Aktivni sopka Yasur na Tanne, zive nocni svetlo, popel a ritualni krajina ostrova.", night: true },
  { name: "Ambrym Volcano", country: "Vanuatu", continent: "Oceanie", lat: -16.250, lon: 168.120, score: 82, category: "katastrofa", themes: ["sopky", "mytologie"], lead: "Sopecny ostrov Ambrym, kraterova krajina a silna tradice masek, duchu a ohnive zeme." },
  { name: "Savai'i Lava Fields", country: "Samoa", continent: "Oceanie", lat: -13.530, lon: -172.350, score: 77, category: "katastrofa", themes: ["sopky", "ostrov"], lead: "Lávová pole na Savai'i po erupcich 20. stoleti, vesnice, kostely a krajina pohlcena kamenem." },
  { name: "Alofaaga Blowholes", country: "Samoa", continent: "Oceanie", lat: -13.739, lon: -172.461, score: 74, category: "priroda", themes: ["oceany", "prirodni-anomalie"], lead: "Oceanske gejziru podobne prurvy v lave, kde vlna meni pobrezi v rytmicky vybuch." },
  { name: "To Sua Ocean Trench", country: "Samoa", continent: "Oceanie", lat: -14.043, lon: -171.566, score: 76, category: "podzemi", themes: ["podzemi", "oceany"], lead: "Propadla morska laguna s zebrikem, prirodni bazen mezi lavou, zahradou a oceanskym tunelem." },
  { name: "Lake Ballard Statues", country: "Australie", continent: "Oceanie", lat: -30.771, lon: 121.563, score: 75, category: "priroda", themes: ["poust", "media"], lead: "Solne jezero se sochami Antonyho Gormleyho, kde umeni meni pustinu v tajemnou lidskou mapu." },
  { name: "Devils Marbles Karlu Karlu", country: "Australie", continent: "Oceanie", lat: -20.567, lon: 134.267, score: 79, category: "priroda", themes: ["dabel", "mytologie"], lead: "Obri zuly Karlu Karlu, posvatna krajina a prirodni balvany s mytologickym i geologickym vyznamem." },
  { name: "Bungle Bungle Range", country: "Australie", continent: "Oceanie", lat: -17.500, lon: 128.500, score: 78, category: "priroda", themes: ["prirodni-anomalie", "poust"], lead: "Pruhovane piskovcove kuzele v Purnululu, izolovana krajina, ktera pusobi jako kamenne mesto." },
  { name: "Kakadu Ubirr Rock Art", country: "Australie", continent: "Oceanie", lat: -12.408, lon: 132.955, score: 80, category: "legenda", themes: ["archeologie", "ritual"], lead: "Skalni galerie Ubirr v Kakadu, krajina dlouhe aboriginske pameti, zvirat a duchovnich stop." }
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
  id: "dvacata-vlna-oceanie-latinska-amerika",
  slug: "dvacata-vlna-oceanie-latinska-amerika",
  localizedSlugs: {
    cs: "dvacata-vlna-oceanie-latinska-amerika",
    en: "twentieth-wave-oceania-latin-america",
    de: "zwanzigste-welle-ozeanien-lateinamerika",
    es: "vigesima-ola-oceania-america-latina",
    fr: "vingtieme-vague-oceanie-amerique-latine"
  },
  title: "Dvacata vlna: Oceanie, Latinska Amerika a ostrovni anomalie",
  description: "Dvacata vlna posiluje mapu o jihoamericke pouste, laguny, ostrovy, mayske a andske lokace, pacificke sopky a oceanske prirodni anomalie.",
  category: "ostrov",
  themes: ["ostrov", "prirodni-anomalie", "archeologie", "sopky"],
  relatedPlaceIds: rawPlaces.slice(0, 30).map((item) => slugify(item.name)),
  sections: [
    {
      heading: "Proc Latinska Amerika a Oceanie",
      body: "Obe oblasti maji silnou mapovou logiku: ostrovy, sopky, pouste, pralesy, ztracena mesta, ritualni krajiny a prirodni tvary, ktere dobre funguji jako samostatne body na MysteryMap."
    },
    {
      heading: "Ostrovy a izolace",
      body: "Ostrovni mista casto nesou legendy o puvodu, tabu, izolaci nebo katastrofe. Dvacata vlna proto propojuje Rapa Nui, Vanuatu, Samoa, Galapagy i mensi tiche oceanske lokace."
    },
    {
      heading: "Dalsi krok",
      body: "U teto vlny bude vhodne doplnit lokalni spravcovske zdroje, puvodni nazvy, vstupni pravidla a citlive vysvetleni tam, kde se prirodni nebo ritualni misto prekryva s turismem."
    }
  ],
  sources: ["wikidata", "wikipedia", "openstreetmap", "wikimedia-commons"]
};

const articles = readJson(articlesPath);
const articlesById = new Map(articles.map((item) => [item.id, item]));
articlesById.set(article.id, article);
writeJson(articlesPath, Array.from(articlesById.values()));

console.log(`Upserted ${inserted.length} new places (${rawPlaces.length} raw) and article ${article.id}.`);
