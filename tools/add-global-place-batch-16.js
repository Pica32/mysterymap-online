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
  const themes = item.themes || ["legenda", "mytologie"];
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
    indexTajemna: item.score || 74,
    paranormalniAktivita: "kulturni, medialni nebo historicka tvrzeni",
    historickaDolozenost: "overitelna zakladni identita",
    nebezpecnost: item.risk || "overit lokalne",
    pristupnost: item.access || "overit pred cestou",
    atmosfera: item.atmosphere || 4.0,
    nocniVhodnost: Boolean(item.night),
    vhodneProDeti: item.kids !== false,
    popisy: {
      zahada: `${item.name} rozsiruje sestnactou vlnu MysteryMap jako overitelny bod s GPS, tematem a vlastnim redakcnim seedem: ${item.lead}`,
      historie: "Historicka vrstva popisuje zakladni identitu mista a slouzi jako podklad pro pozdejsi lokalni overeni. Profil ma stabilni URL, zdroje a strukturu pro dalsi praci.",
      legenda: "Legendova vrstva ukazuje, proc se misto dostava do mapy: chramova krajina, podzemni prostor, opustena pevnost, posvatna hora, pralesni ruina nebo prirodni anomalie.",
      paranormalni: "Zahadova tvrzeni jsou uvedena jako folklor, svedectvi, popkulturni asociace nebo medialni vrstva. Nejsou michana s overenou historii a praktickymi informacemi.",
      skepticke: "Skepticky ramec hleda prirodni, archeologicka, historicka, psychologicka a medialni vysvetleni. To udrzuje obsah pouzitelny pro ctenare i vyhledavace."
    },
    praktickeInfo: `Pred navstevou ${item.name} over aktualni pristup, povoleni, bezpecnost, mistni pravidla a ochranu pamatky. GPS je orientacni.`,
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: `Wikipedia: ${item.name}`, url: `https://en.wikipedia.org/wiki/${encodeURIComponent(item.name.replaceAll(" ", "_"))}`, licence: "CC BY-SA / reference discovery" },
      { nazev: `Wikidata search: ${item.name}`, url: `https://www.wikidata.org/w/index.php?search=${encodeURIComponent(item.name)}`, licence: "CC0 / entity discovery" },
      { nazev: "OpenStreetMap search", url: `https://www.openstreetmap.org/search?query=${encodeURIComponent(`${item.name} ${item.country}`)}`, licence: "ODbL / map verification" }
    ],
    pribehy: [
      { nazev: "Duvod zarazeni", text: `${item.name} pridava motivy ${themes.join(", ")} a vytvari dalsi samostatnou vstupni stranku pro mapu, sitemap, hledani a tematicke prolinkovani.` },
      { nazev: "Dalsi prace", text: "Seed je pripraveny na lokalni zdroje, licencovane fotografie, puvodni nazvy, presnejsi navstevnicka pravidla a kvalitni preklady do vsech jazykovych verzi." }
    ]
  };
}

const rawPlaces = [
  { name: "Banteay Chhmar", country: "Kambodza", continent: "Asie", lat: 14.0720, lon: 103.0990, score: 82, category: "ztracena-mesta", themes: ["archeologie", "prirodni-labyrint"], lead: "Rozsahle khmerske ruiny blizko thajske hranice, mene navstevovana pralesni krajina chramu a vodnich prikopu." },
  { name: "Preah Vihear Temple", country: "Kambodza", continent: "Asie", lat: 14.3910, lon: 104.6810, score: 84, category: "legenda", themes: ["ritual", "politika"], lead: "Chram na hrebeni Dangrek, dramaticky sakralni komplex s dlouhou hranicni a politickou citlivosti." },
  { name: "Koh Ker Prasat Thom", country: "Kambodza", continent: "Asie", lat: 13.7830, lon: 104.5370, score: 81, category: "ztracena-mesta", themes: ["archeologie", "ritual"], lead: "Byvale khmerske hlavni mesto s pyramidovym chramem, kde moc Angkoru na chvili zmenila stred." },
  { name: "Beng Mealea", country: "Kambodza", continent: "Asie", lat: 13.4730, lon: 104.2290, score: 82, category: "ztracena-mesta", themes: ["archeologie", "prirodni-labyrint"], lead: "Zborceny chram pohlceny vegetaci, klasicky obraz kamene, korenu a pralesniho rozpadu." },
  { name: "Phnom Kulen River Lingas", country: "Kambodza", continent: "Asie", lat: 13.5660, lon: 104.1000, score: 80, category: "legenda", themes: ["ritual", "prirodni-anomalie"], lead: "Ritualni rekalni koryto s vytesanymi symboly, kde voda protika pres posvatou kamennou vrstvu." },
  { name: "Plain of Jars Site Two", country: "Laos", continent: "Asie", lat: 19.4200, lon: 103.2050, score: 78, category: "legenda", themes: ["umrti", "archeologie"], lead: "Dalsi pole kamennych nadob v Laosu, tissi a rozptylenejsi varianta znamych megalitickych lokalit." },
  { name: "Vieng Xai Caves", country: "Laos", continent: "Asie", lat: 20.4070, lon: 104.2240, score: 80, category: "podzemi", themes: ["podzemi", "valka"], lead: "Jeskynni valecne mesto v horach, kde politicke vedeni a civilni zivot fungovaly ukryte ve skale." },
  { name: "Pak Ou Caves", country: "Laos", continent: "Asie", lat: 20.0550, lon: 102.2110, score: 77, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Jeskynni svatyne u Mekongu s tisici buddhistickych sosek, poutni prostor mezi rekou a skalou." },
  { name: "Bolaven Plateau Waterfalls", country: "Laos", continent: "Asie", lat: 15.1800, lon: 106.1500, score: 74, category: "priroda", themes: ["prirodni-anomalie", "prirodni-labyrint"], lead: "Vysocina vodopadu a sopecne pudy, prirodni trasa mlhy, pralesa a prudke vody." },
  { name: "Mekong 4000 Islands", country: "Laos", continent: "Asie", lat: 13.9500, lon: 105.9500, score: 75, category: "ostrov", themes: ["ostrov", "oceany"], lead: "Ricni ostrovy Si Phan Don, kde Mekong vytvari pomalou, roztristenou a tezko uchopitelnou krajinu." },
  { name: "Kyaiktiyo Golden Rock", country: "Myanmar", continent: "Asie", lat: 17.4810, lon: 97.0980, score: 82, category: "legenda", themes: ["ritual", "prirodni-anomalie"], lead: "Pozlaceny balvan balancujici na hrane skaly, poutni obraz mezi fyzikou, virou a podivanou." },
  { name: "Mount Popa Taung Kalat", country: "Myanmar", continent: "Asie", lat: 20.9200, lon: 95.2500, score: 80, category: "legenda", themes: ["sopky", "ritual"], lead: "Klaster na sopecnem kuzelu spojeny s naty, kde strmy vystup a mytologie tvori jedno misto." },
  { name: "Indein Pagoda Forest", country: "Myanmar", continent: "Asie", lat: 20.4590, lon: 96.8400, score: 78, category: "legenda", themes: ["ritual", "ztracena-mesta"], lead: "Pole pagod u jezera Inle, kde opakovani vezi vytvari pocit opustene sakralni krajiny." },
  { name: "Hpo Win Daung Caves", country: "Myanmar", continent: "Asie", lat: 22.1330, lon: 95.0830, score: 79, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Jeskynni buddhisticke prostory u Monywy, malby a sochy ukryte v piskovcovych stenach." },
  { name: "Shwedagon Pagoda", country: "Myanmar", continent: "Asie", lat: 16.7980, lon: 96.1490, score: 82, category: "legenda", themes: ["ritual", "politika"], lead: "Zlata pagoda v Rangunu, duchovni i politicky symbol, ktery dominuje mestu a verejne pameti." },
  { name: "Erawan Cave Temple", country: "Thajsko", continent: "Asie", lat: 17.3900, lon: 101.7930, score: 76, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Jeskynni chram v severovychodnim Thajsku, kde schody, sochy a skala tvori poutni vnitrek kopce." },
  { name: "Phu Phra Bat", country: "Thajsko", continent: "Asie", lat: 17.7240, lon: 102.3470, score: 78, category: "legenda", themes: ["archeologie", "prirodni-anomalie"], lead: "Skalni utvary, svatyne a malby, kde prirodni balvany slouzi jako mytologicka a ritualni krajina." },
  { name: "Phraya Nakhon Cave", country: "Thajsko", continent: "Asie", lat: 12.2030, lon: 100.0120, score: 79, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Jeskynni sal s kralovskym pavilonem osvetlenym shora, jeden z nejsilnejsich thajskych obrazu pod zemi." },
  { name: "Tham Luang Cave", country: "Thajsko", continent: "Asie", lat: 20.3730, lon: 99.8680, score: 81, category: "podzemi", themes: ["podzemi", "katastrofa"], lead: "Jeskynni system znamy zachrannou akci fotbaloveho tymu, kde prirodni riziko ziskalo globalni pozornost." },
  { name: "Ayutthaya Wat Mahathat", country: "Thajsko", continent: "Asie", lat: 14.3560, lon: 100.5680, score: 80, category: "ztracena-mesta", themes: ["ritual", "ztracena-mesta"], lead: "Ruiny chramu v Ayutthayi, slavna hlava Buddhy v korenech a pamet padleho kralovskeho mesta." },
  { name: "Sukhothai Wat Si Chum", country: "Thajsko", continent: "Asie", lat: 17.0230, lon: 99.7030, score: 79, category: "legenda", themes: ["ritual", "ztracena-mesta"], lead: "Sedici Buddha v uzavrenem mandapu, monumentalni ticho byvaleho hlavniho mesta Sukhothai." },
  { name: "Gunung Padang", country: "Indonesie", continent: "Asie", lat: -6.9950, lon: 107.0560, score: 83, category: "legenda", themes: ["archeologie", "pseudoveda"], lead: "Megaliticke terasy na Jave, misto, kde archeologie casto narazi na velmi odvazna tvrzeni." },
  { name: "Tana Toraja Graves", country: "Indonesie", continent: "Asie", lat: -2.9960, lon: 119.8990, score: 83, category: "legenda", themes: ["umrti", "ritual"], lead: "Pohrebni krajina Toraju se skalnimi hroby a podobiznami tau tau, silny ritualni svet smrti." },
  { name: "Bali Goa Gajah", country: "Indonesie", continent: "Asie", lat: -8.5230, lon: 115.2870, score: 78, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Sloni jeskyne na Bali, kratky, ale hutny ritualni prostor se vstupem ve tvaru tvare." },
  { name: "Besakih Mother Temple", country: "Indonesie", continent: "Asie", lat: -8.3730, lon: 115.4520, score: 81, category: "legenda", themes: ["ritual", "sopky"], lead: "Hlavni balijsky chramovy komplex na svazich Agungu, kde sopka a nabozenstvi sdileji jednu osu." },
  { name: "Kelimutu Crater Lakes", country: "Indonesie", continent: "Asie", lat: -8.7700, lon: 121.8170, score: 81, category: "priroda", themes: ["sopky", "mytologie"], lead: "Tri barevna sopecna jezera na Floresu, prirodni jev s vyraznou duchovni interpretaci." },
  { name: "Komodo Pink Beach", country: "Indonesie", continent: "Asie", lat: -8.6000, lon: 119.5100, score: 74, category: "ostrov", themes: ["ostrov", "zvirata"], lead: "Ruzovy pisek a ostrovni krajina Komoda, prirodni detail ve svete varanu a koralovych mori." },
  { name: "Lake Toba Samosir", country: "Indonesie", continent: "Asie", lat: 2.6100, lon: 98.8400, score: 80, category: "katastrofa", themes: ["sopky", "ostrov"], lead: "Obri sopecne jezero se Samosirem, klidna krajina nad jednou z nejvetsich erupcni historii planety." },
  { name: "Borobudur Hidden Foot", country: "Indonesie", continent: "Asie", lat: -7.6070, lon: 110.2030, score: 82, category: "legenda", themes: ["ritual", "podzemi"], lead: "Skryta zakladna Borobuduru jako samostatny motiv karmickych reliefu a zakryteho vykladu." },
  { name: "Lascaux of Sulawesi Leang Tedongnge", country: "Indonesie", continent: "Asie", lat: -4.9860, lon: 119.6500, score: 82, category: "legenda", themes: ["archeologie", "zvirata"], lead: "Jeskynni malby na Sulawesi, velmi stary obraz zvirat a lidske obrazotvornosti v tropech." },
  { name: "Mulu Deer Cave", country: "Malajsie", continent: "Asie", lat: 4.0430, lon: 114.8230, score: 80, category: "podzemi", themes: ["podzemi", "zvirata"], lead: "Obri jeskynni chodba v Sarawaku, netopyri a krasovy prostor v meritku, ktere pusobi neskutecne." },
  { name: "Niah Caves", country: "Malajsie", continent: "Asie", lat: 3.8170, lon: 113.7830, score: 80, category: "podzemi", themes: ["podzemi", "archeologie"], lead: "Jeskynni naleziste na Borneu, dlouha stopa lidske pritomnosti v tropickem krasu." },
  { name: "Kellies Castle", country: "Malajsie", continent: "Asie", lat: 4.4750, lon: 101.0900, score: 76, category: "hrad", themes: ["hrad", "duchove"], lead: "Nedokonceny kolonialni dum v Peraku, mistni legenda ho promenila v malajsijsky hrad duchu." },
  { name: "Gunung Mulu Pinnacles", country: "Malajsie", continent: "Asie", lat: 4.1160, lon: 114.9170, score: 79, category: "priroda", themes: ["prirodni-labyrint", "prirodni-anomalie"], lead: "Ostre vapencove vezicky v pralesni krajine Mulu, prirodni labyrint pristupny jen narocnou cestou." },
  { name: "Banaue Batad Rice Terraces", country: "Filipiny", continent: "Asie", lat: 16.9340, lon: 121.1370, score: 79, category: "legenda", themes: ["archeologie", "prirodni-anomalie"], lead: "Amfiteatr ryzovych teras v horach Luzonu, krajina lidske prace, vody a strmych svahu." },
  { name: "Sagada Hanging Coffins", country: "Filipiny", continent: "Asie", lat: 17.0850, lon: 120.9020, score: 81, category: "legenda", themes: ["umrti", "ritual"], lead: "Rakve upevnene na skalach u Sagady, pohrebni tradice, ktera meni utes v vertikalni pamet." },
  { name: "Callao Cave", country: "Filipiny", continent: "Asie", lat: 17.7040, lon: 121.8240, score: 78, category: "podzemi", themes: ["podzemi", "archeologie"], lead: "Jeskynni system na Luzonu s kapli a paleoantropologickym vyznamem, prirodni i kulturni prostor." },
  { name: "Chocolate Hills", country: "Filipiny", continent: "Asie", lat: 9.9170, lon: 124.1670, score: 78, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Pravidelne kupy na Boholu, krajina, ktera vypada umele, ale vznikla geologickymi procesy." },
  { name: "Tabon Caves", country: "Filipiny", continent: "Asie", lat: 9.2830, lon: 117.9830, score: 79, category: "podzemi", themes: ["podzemi", "archeologie"], lead: "Jeskynni naleziste na Palawanu, zasadni archiv rane lidske pritomnosti v ostrovni jihovychodni Asii." },
  { name: "Sigiriya Mirror Wall", country: "Sri Lanka", continent: "Asie", lat: 7.9570, lon: 80.7600, score: 82, category: "legenda", themes: ["hrad", "archeologie"], lead: "Samostatny motiv skalni pevnosti Sigiriya, kde zrcadlova zed a graffiti uchovavaji hlas davnych navstevniku." },
  { name: "Dambulla Cave Temple", country: "Sri Lanka", continent: "Asie", lat: 7.8560, lon: 80.6490, score: 82, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Jeskynni chramy s malbami a sochami, soustredeny buddhisticky prostor ve skalnim masivu." },
  { name: "Ritigala Monastery", country: "Sri Lanka", continent: "Asie", lat: 8.1200, lon: 80.6500, score: 78, category: "ztracena-mesta", themes: ["ritual", "prirodni-labyrint"], lead: "Ruiny lesniho klastera v horach, kde kamenne cesty a vegetace vytvareji tichou askezi." },
  { name: "Yapahuwa Rock Fortress", country: "Sri Lanka", continent: "Asie", lat: 7.8200, lon: 80.3100, score: 78, category: "hrad", themes: ["hrad", "ritual"], lead: "Skalni pevnost a kratkodobe hlavni mesto, kde schodiste, obrana a symbolika tvori jeden vystup." },
  { name: "Polonnaruwa Vatadage", country: "Sri Lanka", continent: "Asie", lat: 7.9470, lon: 81.0010, score: 79, category: "legenda", themes: ["ritual", "ztracena-mesta"], lead: "Kruhovy svatynovy objekt v Polonnaruwe, dokonaly kamenicky stred byvaleho kralovskeho mesta." },
  { name: "Mohenjo Daro Citadel", country: "Pakistan", continent: "Asie", lat: 27.3290, lon: 68.1380, score: 85, category: "ztracena-mesta", themes: ["archeologie", "ztracena-mesta"], lead: "Citadela harappskeho mesta, urbanisticky a vodni system jedne z nejstarsich civilizaci." },
  { name: "Taxila Sirkap", country: "Pakistan", continent: "Asie", lat: 33.7460, lon: 72.8390, score: 80, category: "ztracena-mesta", themes: ["archeologie", "stredovek"], lead: "Planovane mesto v Taxile, kde se setkavaji perske, recke, indicke a buddhisticke vrstvy." },
  { name: "Rohtas Fort Pakistan", country: "Pakistan", continent: "Asie", lat: 32.9630, lon: 73.5860, score: 80, category: "hrad", themes: ["hrad", "stredovek"], lead: "Mohutna pevnost Sher Shah Suriho, tvrdy kamen a strategie severoindickeho pohranici." },
  { name: "Katas Raj Temples", country: "Pakistan", continent: "Asie", lat: 32.7250, lon: 72.9510, score: 78, category: "legenda", themes: ["ritual", "mytologie"], lead: "Chramovy komplex u posvatneho jezera, kde hinduisticka mytologie zustava v dnes politicky citlive krajine." },
  { name: "Ranikot Fort", country: "Pakistan", continent: "Asie", lat: 25.8950, lon: 67.9000, score: 79, category: "hrad", themes: ["hrad", "poust"], lead: "Rozsahle zdi v Sindhu, casto popisovane jako obri pevnost v suche a kopcovite krajine." },
  { name: "Somapura Mahavihara", country: "Banglades", continent: "Asie", lat: 25.0310, lon: 88.9770, score: 80, category: "ztracena-mesta", themes: ["ritual", "archeologie"], lead: "Rozsahly buddhisticky klasterni komplex v Paharpuru, monumentalni ruina uceneho a poutniho sveta." },
  { name: "Bagerhat Sixty Dome Mosque", country: "Banglades", continent: "Asie", lat: 22.6740, lon: 89.7410, score: 78, category: "legenda", themes: ["ritual", "stredovek"], lead: "Stredoveke mesto mesit a vodnich nadrzi v delte, kde cihla a vlhka krajina tvori tichy sakralni celek." },
  { name: "Mahasthangarh Citadel", country: "Banglades", continent: "Asie", lat: 24.9610, lon: 89.3420, score: 77, category: "ztracena-mesta", themes: ["archeologie", "hrad"], lead: "Stare opevnene mesto v severnim Bangladesi, dlouha vrstva osidleni, valu a archeologicke pameti." },
  { name: "Mustang Sky Caves", country: "Nepal", continent: "Asie", lat: 29.1830, lon: 83.9500, score: 82, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Jeskynni obydli a svatyne ve stenach Mustangu, vysoka himalajska krajina plna vytesanych dutin." },
  { name: "Lumbini Sacred Garden", country: "Nepal", continent: "Asie", lat: 27.4690, lon: 83.2760, score: 80, category: "legenda", themes: ["ritual", "mytologie"], lead: "Poutni areal spojovany s narozenim Buddhy, misto, kde archeologie a ziva vira sdileji jeden prostor." }
];

const places = readJson(placesPath);
const byId = new Map(places.map((place) => [place.id, place]));
rawPlaces.map(profile).forEach((place) => byId.set(place.id, place));
writeJson(placesPath, Array.from(byId.values()));

const articles = readJson(articlesPath);
const article = {
  id: "sestnacta-vlna-jihovychodni-asie-chramy-jeskyne",
  slug: "sestnacta-vlna-jihovychodni-asie-chramy-jeskyne",
  localizedSlugs: {
    cs: "sestnacta-vlna-jihovychodni-asie-chramy-jeskyne",
    en: "sixteenth-wave-southeast-asia-temples-caves",
    de: "sechzehnte-welle-suedostasien-tempel-hoehlen",
    es: "decimosexta-ola-sudeste-asiatico-templos-cuevas",
    fr: "seizieme-vague-asie-sud-est-temples-grottes"
  },
  title: "Sestnacta vlna: jihovychodni Asie, chramy a jeskyne",
  description: "Sestnacta vlna pridava khmerske ruiny, laoske a thajske jeskyne, ostrovni ritualy, indoneske sopky, filipinske pohrebni krajiny a jihoasijske pevnosti.",
  category: "podzemi",
  themes: ["podzemi", "ritual", "archeologie", "prirodni-anomalie"],
  relatedPlaceIds: rawPlaces.slice(0, 30).map((item) => slugify(item.name)),
  sections: [
    {
      heading: "Proc jihovychodni Asie",
      body: "Jihovychodni Asie dava mape hustou sit chramu, jeskyni, pralesnich ruin a ostrovnich ritualu. Je to region, kde je potreba hlidat lokalni kontext a nepsat jen exotizujici popisy."
    },
    {
      heading: "Jeskyne a posvatne krajiny",
      body: "Mnoho mist v teto vlne propojuje krasove podzemi, poutni trasy a archeologii. To dobre posiluje tematicke landing pages pro podzemi, ritualy a prirodni anomalie."
    },
    {
      heading: "Dalsi krok",
      body: "U sestnacte vlny bude vhodne doplnit spravcovske zdroje, lokalni nazvy, aktualni pristupnost a fotografie s jasnou licenci."
    }
  ],
  sources: ["wikidata", "wikipedia", "openstreetmap", "wikimedia-commons"]
};

const articlesById = new Map(articles.map((item) => [item.id, item]));
articlesById.set(article.id, article);
writeJson(articlesPath, Array.from(articlesById.values()));

console.log(`Upserted ${rawPlaces.length} sixteenth-wave places and 1 article.`);
