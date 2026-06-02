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
      zahada: `${item.name} rozsiruje trinactou vlnu MysteryMap jako overitelny bod s GPS, tematem a vlastnim redakcnim seedem: ${item.lead}`,
      historie: "Historicka vrstva popisuje zakladni identitu mista a slouzi jako podklad pro pozdejsi lokalni overeni. Profil ma stabilni URL, zdroje a strukturu pro dalsi praci.",
      legenda: "Legendova vrstva ukazuje, proc se misto dostava do mapy: ostrovni izolace, poustni archeologie, horsky ritual, podzemni system, pevnost nebo zanikla komunita.",
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
  { name: "Rapa Iti Fortified Villages", country: "Francouzska Polynesie", continent: "Oceanie", lat: -27.6000, lon: -144.3330, score: 78, category: "ztracena-mesta", themes: ["ostrov", "hrad"], lead: "Ostrovni opevnena sidla na odlehle Rape, kde izolace a obrana vytvorily neobvykly pacificky profil." },
  { name: "Taveuni Lavena Coastal Walk", country: "Fidzi", continent: "Oceanie", lat: -16.8500, lon: -179.8800, score: 74, category: "priroda", themes: ["ostrov", "oceany"], lead: "Pobrezni krajina vodopadu, pralesa a oceanu, silny ostrovni bod pro tematiku izolace a pristupu." },
  { name: "Nanumea Atoll", country: "Tuvalu", continent: "Oceanie", lat: -5.6700, lon: 176.1200, score: 73, category: "ostrov", themes: ["ostrov", "oceany"], lead: "Nizky atol v Pacifiku, kde geografie, more a klimaticke riziko tvori krehkou mapovou stopu." },
  { name: "Funafuti Conservation Area", country: "Tuvalu", continent: "Oceanie", lat: -8.5330, lon: 179.0830, score: 74, category: "ostrov", themes: ["ostrov", "oceany"], lead: "Laguna a chranena cast atolu Funafuti, misto, kde se prirodni krasa prekryva s obavou z hladiny more." },
  { name: "Tarawa Battle Sites", country: "Kiribati", continent: "Oceanie", lat: 1.4300, lon: 173.0000, score: 78, category: "katastrofa", themes: ["valka", "ostrov"], lead: "Atolova krajina druhe svetove valky, kde plaze a opevneni nesou pamet velmi kratke, ale tvrde bitvy." },
  { name: "Nauru Phosphate Pinnacles", country: "Nauru", continent: "Oceanie", lat: -0.5330, lon: 166.9330, score: 78, category: "katastrofa", themes: ["technologie", "katastrofa"], lead: "Vytezene fosfatove vnitrozemi ostrova, varovny obraz bohatstvi, ekologicke ztraty a geopoliticke zavislosti." },
  { name: "Bougainville Panguna Mine", country: "Papua-Nova Guinea", continent: "Oceanie", lat: -6.3200, lon: 155.5000, score: 82, category: "zakazane-zony", themes: ["katastrofa", "politika"], lead: "Obri opusteny dul na Bougainville, misto ekologicke zateze, konfliktu a slozite ostrovni politiky." },
  { name: "Lake Kutubu", country: "Papua-Nova Guinea", continent: "Oceanie", lat: -6.4000, lon: 143.3330, score: 75, category: "priroda", themes: ["zvirata", "prirodni-anomalie"], lead: "Izolovane jezero s endemickymi druhy, prirodni bod, kde biologicka zvlastnost drzi vlastni tajemnou vrstvu." },
  { name: "Bora Bora WWII Cannons", country: "Francouzska Polynesie", continent: "Oceanie", lat: -16.5000, lon: -151.7420, score: 75, category: "katastrofa", themes: ["valka", "ostrov"], lead: "Pozustatky americke obrany na ostrove, kde rajska krajina nese necekane valecnou infrastrukturu." },
  { name: "Tonga Haamonga Trilithon", country: "Tonga", continent: "Oceanie", lat: -21.1390, lon: -175.0470, score: 79, category: "legenda", themes: ["archeologie", "ostrov"], lead: "Kamenny trilithon na Tongatapu, monumentalni brana spojovana s kralovskou moci a astronomickymi vyklady." },
  { name: "Samoa Pulemelei Mound", country: "Samoa", continent: "Oceanie", lat: -13.7050, lon: -172.3940, score: 80, category: "ztracena-mesta", themes: ["archeologie", "ostrov"], lead: "Velka kamena pyramidalni mohyla na Savaii, jedna z nejpusobivejsich archeologickych forem Polynesie." },
  { name: "Alofaaga Blowholes", country: "Samoa", continent: "Oceanie", lat: -13.7600, lon: -172.5380, score: 73, category: "priroda", themes: ["oceany", "prirodni-anomalie"], lead: "Morske dychadlo v lavove pobrezi, kde tlak oceanu vytvari opakovany zvukovy a vodni efekt." },
  { name: "Choquequirao", country: "Peru", continent: "Jizni Amerika", lat: -13.3920, lon: -72.8720, score: 84, category: "ztracena-mesta", themes: ["archeologie", "prirodni-labyrint"], lead: "Odlehle incke mesto nad hlubokymi udolimi, namahavy protipol znamejsich andskych ikon." },
  { name: "Vilcabamba Espiritu Pampa", country: "Peru", continent: "Jizni Amerika", lat: -12.9100, lon: -73.2200, score: 82, category: "ztracena-mesta", themes: ["archeologie", "ztracena-mesta"], lead: "Misto spojovane s poslednim inckym odporem, pralesni vrstva dejin mezi utokem, ustupem a padem." },
  { name: "Sacsayhuaman Walls", country: "Peru", continent: "Jizni Amerika", lat: -13.5090, lon: -71.9820, score: 84, category: "legenda", themes: ["archeologie", "pseudoveda"], lead: "Monumentalni kamenne zdi nad Cuskem, realne stavitelstvi, ktere pravidelne pritahuje prehnane alternativni vyklady." },
  { name: "Ollantaytambo Fortress", country: "Peru", continent: "Jizni Amerika", lat: -13.2580, lon: -72.2630, score: 82, category: "hrad", themes: ["archeologie", "hrad"], lead: "Incka pevnost a mesto v Posvatnem udoli, kde terasa, skala a obrana tvori jeden dramaticky celek." },
  { name: "Pisac Terraces", country: "Peru", continent: "Jizni Amerika", lat: -13.4210, lon: -71.8480, score: 78, category: "legenda", themes: ["archeologie", "prirodni-anomalie"], lead: "Terasy a ruiny nad udolim Urubamby, geometricka krajina pestovani, pozorovani a kontroly." },
  { name: "Qenko Ritual Rock", country: "Peru", continent: "Jizni Amerika", lat: -13.5080, lon: -71.9700, score: 77, category: "legenda", themes: ["ritual", "podzemi"], lead: "Skalni ritualni komplex u Cuska, kde vytesane chodby a lavice davaji mista temny ceremonialni charakter." },
  { name: "Sillustani Tomb Towers", country: "Peru", continent: "Jizni Amerika", lat: -15.7230, lon: -70.1580, score: 79, category: "legenda", themes: ["umrti", "archeologie"], lead: "Pohrebni veze nad jezerem Umayo, kde smrt a vysoka andska krajina tvori silnou vertikalni siluetu." },
  { name: "Tiwanaku Kalasasaya", country: "Bolivie", continent: "Jizni Amerika", lat: -16.5540, lon: -68.6730, score: 85, category: "ztracena-mesta", themes: ["archeologie", "kosmicka-anomalie"], lead: "Andsky ceremonialni komplex u Titicacy, casto spojovany s astronomii, mocenskym radem a modernimi spekulacemi." },
  { name: "Samaipata Fort", country: "Bolivie", continent: "Jizni Amerika", lat: -18.1800, lon: -63.8200, score: 81, category: "legenda", themes: ["archeologie", "ritual"], lead: "Vytesana skalni plocha a pevnostni krajina, kde se misi predincka, incka a kolonialni vrstva." },
  { name: "Pumapunku", country: "Bolivie", continent: "Jizni Amerika", lat: -16.5610, lon: -68.6790, score: 84, category: "legenda", themes: ["archeologie", "pseudoveda"], lead: "Kamenne bloky Tiwanaku, ktere jsou kvuli presnosti opracovani oblibenym cilem pseudovedeckych tvrzeni." },
  { name: "Jesuit Missions of Chiquitos", country: "Bolivie", continent: "Jizni Amerika", lat: -16.3800, lon: -60.9600, score: 76, category: "legenda", themes: ["ritual", "politika"], lead: "Misie v bolivijske nizine, kde hudba, kolonialni sprava a mistni remeslo vytvorily neobvyklou kulturni krajinu." },
  { name: "Rupac Cloud Citadel", country: "Peru", continent: "Jizni Amerika", lat: -11.3100, lon: -76.8700, score: 79, category: "ztracena-mesta", themes: ["ztracena-mesta", "hrad"], lead: "Kamene stavby vysoko v mlhach nad Limou, mensi, ale vizualne silne andske ztracene misto." },
  { name: "Quilmes Ruins", country: "Argentina", continent: "Jizni Amerika", lat: -26.4670, lon: -66.0500, score: 79, category: "ztracena-mesta", themes: ["archeologie", "poust"], lead: "Ruiny sidla lidu Quilmes v suchych horach, pamet odporu i nuceneho presunu po kolonialnim zlomu." },
  { name: "Pucara de Tilcara", country: "Argentina", continent: "Jizni Amerika", lat: -23.5780, lon: -65.3970, score: 77, category: "hrad", themes: ["archeologie", "hrad"], lead: "Predhispanska pevnost v quebrade Humahuaca, kamenne zdi nad krajinou barevnych svahu." },
  { name: "La Cueva de los Tayos", country: "Ekvador", continent: "Jizni Amerika", lat: -3.0500, lon: -78.2000, score: 82, category: "podzemi", themes: ["podzemi", "pseudoveda"], lead: "Jeskynni system spojovany s expedicemi a alternativnimi teoriemi, misto, kde skutecne podzemi prerostlo v mytus." },
  { name: "Ingapirca Ruins", country: "Ekvador", continent: "Jizni Amerika", lat: -2.5450, lon: -78.8710, score: 78, category: "legenda", themes: ["archeologie", "ritual"], lead: "Incko-canarsky komplex v Andach, kde kamenne zdivo a slunecni symbolika drzi regionalni pamet." },
  { name: "Ciudad Mitad del Mundo", country: "Ekvador", continent: "Jizni Amerika", lat: -0.0020, lon: -78.4550, score: 73, category: "legenda", themes: ["kosmicka-anomalie", "pseudoveda"], lead: "Rovnikovy monument u Quita, popularni misto mezi geodezii, turistickym ritualem a opravami mereni." },
  { name: "Mount Roraima Tepui", country: "Venezuela", continent: "Jizni Amerika", lat: 5.1430, lon: -60.7620, score: 84, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Stolova hora na hranici tri statu, izolovana krajina mlhy, endemitu a literarni imaginace." },
  { name: "Canaima Lagoon", country: "Venezuela", continent: "Jizni Amerika", lat: 6.2400, lon: -62.8500, score: 78, category: "priroda", themes: ["oceany", "prirodni-anomalie"], lead: "Laguna, vodopady a stolove hory v Canaime, prirodni amfiteatr s mytickym horizontem." },
  { name: "Kaieteur Falls", country: "Guyana", continent: "Jizni Amerika", lat: 5.1760, lon: -59.4800, score: 81, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Mohutny vodopad v guayanske vysocine, odlehle misto s pralesni silou a ustnimi pribehy." },
  { name: "Gebel el Silsila", country: "Egypt", continent: "Afrika", lat: 24.6500, lon: 32.9300, score: 78, category: "podzemi", themes: ["archeologie", "podzemi"], lead: "Staroveke kamenolomy u Nilu, kde steny nesou stopy tezby, chramku a pracovni pameti Egypta." },
  { name: "Dendera Temple Complex", country: "Egypt", continent: "Afrika", lat: 26.1420, lon: 32.6700, score: 82, category: "legenda", themes: ["ritual", "kosmicka-anomalie"], lead: "Chramovy komplex bohyne Hathor, znamy reliefy, astronomickymi motivy a modernimi spornymi vyklady." },
  { name: "Abydos Osireion", country: "Egypt", continent: "Afrika", lat: 26.1840, lon: 31.9190, score: 83, category: "podzemi", themes: ["umrti", "mytologie"], lead: "Podzemne pusobici stavba u Abydu, misto spojene s Osiridem, vodou a kralovskou smrti." },
  { name: "Saqqara Serapeum", country: "Egypt", continent: "Afrika", lat: 29.8710, lon: 31.2160, score: 85, category: "podzemi", themes: ["podzemi", "umrti"], lead: "Podzemni galerie s masivnimi sarkofagy byku Apis, realny archeologicky prostor s temnou monumentalitou." },
  { name: "Bent Pyramid Dahshur", country: "Egypt", continent: "Afrika", lat: 29.7900, lon: 31.2090, score: 80, category: "legenda", themes: ["archeologie", "umrti"], lead: "Lomena pyramida v Dahshuru, prechodovy experiment kralovske architektury s okamzite rozpoznatelnym profilem." },
  { name: "Temple of Kalabsha", country: "Egypt", continent: "Afrika", lat: 23.9600, lon: 32.8670, score: 76, category: "legenda", themes: ["ritual", "oceany"], lead: "Presunuty nubijsky chram u Asuanu, kde pamatkova zachrana sama vytvorila dalsi vrstvu pribehu." },
  { name: "Ksar Ouled Soltane", country: "Tunisko", continent: "Afrika", lat: 32.7880, lon: 10.5150, score: 77, category: "ztracena-mesta", themes: ["poust", "film"], lead: "Berberske opevnene skladiste v jihotuniske krajine, dnes spojene i s filmovou predstavou poustniho sveta." },
  { name: "Matmata Underground Houses", country: "Tunisko", continent: "Afrika", lat: 33.5440, lon: 9.9670, score: 79, category: "podzemi", themes: ["podzemi", "film"], lead: "Podzemni domy v Matmate, kde obrana pred horkem a filmova slava vytvorily dvojitou identitu mista." },
  { name: "Dougga Ruins", country: "Tunisko", continent: "Afrika", lat: 36.4230, lon: 9.2200, score: 78, category: "ztracena-mesta", themes: ["archeologie", "ztracena-mesta"], lead: "Rimske a numidske ruiny na kopci, zachovane mesto, ktere ukazuje vrstvy severoafricke antiky." },
  { name: "Bulla Regia Underground Villas", country: "Tunisko", continent: "Afrika", lat: 36.5580, lon: 8.7570, score: 79, category: "podzemi", themes: ["podzemi", "archeologie"], lead: "Anticke domy s podzemnimi patry, prakticka odpoved na klima a necekane intimni archeologicky prostor." },
  { name: "Chebika Mountain Oasis", country: "Tunisko", continent: "Afrika", lat: 34.3180, lon: 7.9430, score: 75, category: "priroda", themes: ["poust", "prirodni-anomalie"], lead: "Horska oaza na okraji pouste, kde voda, ruiny a filmova krajina vytvareji kontrastni zastavku." },
  { name: "Thimlich Ohinga", country: "Kena", continent: "Afrika", lat: -0.9300, lon: 34.3260, score: 78, category: "hrad", themes: ["archeologie", "hrad"], lead: "Kamenne opevnene sidlo u Viktoriina jezera, doklad obrany, organizace a mistni stavebni tradice." },
  { name: "Gede Ruins", country: "Kena", continent: "Afrika", lat: -3.3100, lon: 40.0160, score: 79, category: "ztracena-mesta", themes: ["ztracena-mesta", "oceany"], lead: "Ruiny svahilskeho mesta v lese u pobrezi, kde obchodni sit Indickeho oceanu zmizela pod korunami stromu." },
  { name: "Kilwa Kisiwani", country: "Tanzanie", continent: "Afrika", lat: -8.9580, lon: 39.5220, score: 83, category: "ztracena-mesta", themes: ["ztracena-mesta", "oceany"], lead: "Ostrovni ruiny mocneho svahilskeho mesta, kde obchod, islam a more vytvorily vyznamny uzel." },
  { name: "Songo Mnara", country: "Tanzanie", continent: "Afrika", lat: -9.0660, lon: 39.6000, score: 78, category: "ztracena-mesta", themes: ["ztracena-mesta", "oceany"], lead: "Kamene ruiny svahilskeho sidla, mene slavny soused Kilwy s citelnou ostrovni izolaci." },
  { name: "Mapungubwe Hill", country: "Jihoafricka republika", continent: "Afrika", lat: -22.1920, lon: 29.2380, score: 82, category: "ztracena-mesta", themes: ["archeologie", "ztracena-mesta"], lead: "Kralovsky kopec a krajina obchodu na jihu Afriky, dulezity uzel predkolonialni moci a symboliky." },
  { name: "Sterkfontein Caves", country: "Jihoafricka republika", continent: "Afrika", lat: -26.0160, lon: 27.7340, score: 80, category: "podzemi", themes: ["podzemi", "archeologie"], lead: "Jeskynni naleziste homininu v kolibce lidstva, kde podzemi slouzi jako archiv velmi stare pritomnosti." },
  { name: "Robben Island Prison", country: "Jihoafricka republika", continent: "Afrika", lat: -33.8060, lon: 18.3670, score: 82, category: "veznice", themes: ["veznice", "politika"], lead: "Ostrovni veznice spojena s apartheidem, kde izolace a odpor tvori politicky silnou pamet." },
  { name: "Su Nuraxi Barumini", country: "Italie", continent: "Evropa", lat: 39.7060, lon: 8.9910, score: 82, category: "legenda", themes: ["archeologie", "hrad"], lead: "Nuragsky komplex na Sardinii, kamenne veze a dvory z doby bronzove se zvlastni ostrovni logikou." },
  { name: "Tarxien Temples", country: "Malta", continent: "Evropa", lat: 35.8690, lon: 14.5120, score: 80, category: "legenda", themes: ["archeologie", "ritual"], lead: "Megaliticke chramy na Malte, kde spiralove motivy a bloky vytvareji praveky ritualni celek." },
  { name: "Hypogeum of Hal Saflieni", country: "Malta", continent: "Evropa", lat: 35.8690, lon: 14.5070, score: 86, category: "podzemi", themes: ["podzemi", "umrti"], lead: "Podzemni nekropole na Malte, mnohovrstevny prostor smrti, akustiky a praveke architektury." },
  { name: "Skara Brae", country: "Spojene kralovstvi", continent: "Evropa", lat: 59.0480, lon: -3.3430, score: 82, category: "ztracena-mesta", themes: ["archeologie", "oceany"], lead: "Neoliticka vesnice na Orknejich, kde pisecny odkryv zachoval intimni obraz pravekeho bydleni." },
  { name: "Maeshowe Chambered Cairn", country: "Spojene kralovstvi", continent: "Evropa", lat: 58.9960, lon: -3.1880, score: 81, category: "podzemi", themes: ["umrti", "kosmicka-anomalie"], lead: "Komorova mohyla na Orknejich, zimni slunce, vikingske runy a podzemni prostor v jednom miste." },
  { name: "Newgrange Passage Tomb", country: "Irsko", continent: "Evropa", lat: 53.6940, lon: -6.4750, score: 85, category: "podzemi", themes: ["umrti", "kosmicka-anomalie"], lead: "Neoliticka chodbova hrobka s vazbou na zimni slunovrat, jeden z nejsilnejsich evropskych pravekych bodu." },
  { name: "Knowth Passage Tombs", country: "Irsko", continent: "Evropa", lat: 53.7010, lon: -6.4920, score: 82, category: "podzemi", themes: ["umrti", "archeologie"], lead: "Soubor chodbovych hrobek v Bru na Boinne, kde kamenne umeni a podzemni architektura rozsiruje pribeh Newgrange." }
];

const places = readJson(placesPath);
const byId = new Map(places.map((place) => [place.id, place]));
rawPlaces.map(profile).forEach((place) => byId.set(place.id, place));
writeJson(placesPath, Array.from(byId.values()));

const articles = readJson(articlesPath);
const article = {
  id: "trinacta-vlna-ostrovy-andy-afrika",
  slug: "trinacta-vlna-ostrovy-andy-afrika",
  localizedSlugs: {
    cs: "trinacta-vlna-ostrovy-andy-afrika",
    en: "thirteenth-wave-islands-andes-africa",
    de: "dreizehnte-welle-inseln-anden-afrika",
    es: "decimotercera-ola-islas-andes-africa",
    fr: "treizieme-vague-iles-andes-afrique"
  },
  title: "Trinacta vlna: ostrovy, Andy a africke podzemi",
  description: "Trinacta vlna posiluje Oceanii, Jizni Ameriku a Afriku o ostrovni ritualy, andske pevnosti, poustni archeologii, svahilska mesta a podzemni nekropole.",
  category: "legenda",
  themes: ["ostrov", "archeologie", "podzemi", "ztracena-mesta"],
  relatedPlaceIds: rawPlaces.slice(0, 30).map((item) => slugify(item.name)),
  sections: [
    {
      heading: "Proc ostrovy",
      body: "Ostrovni lokace casto spojuji izolaci, vojenskou historii, ekologicke riziko a ritualni pamet. V katalogu pomahaji rozsirit mapu mimo kontinentalni centra."
    },
    {
      heading: "Andy a Afrika",
      body: "Andske a africke lokace pridavaji vice archeologickych, podzemnich a zaniklych mest. U techto mist je dulezite drzet zdroje, lokalni citlivost a skepticky ramec oddelene od popularnich zkratek."
    },
    {
      heading: "Dalsi krok",
      body: "U trinacte vlny bude vhodne doplnit presnejsi spravcovske zdroje, mistni nazvy, fotky s jasnou licenci a bezpecnostni informace pro odlehle nebo citlive lokality."
    }
  ],
  sources: ["wikidata", "wikipedia", "openstreetmap", "wikimedia-commons"]
};

const articlesById = new Map(articles.map((item) => [item.id, item]));
articlesById.set(article.id, article);
writeJson(articlesPath, Array.from(articlesById.values()));

console.log(`Upserted ${rawPlaces.length} thirteenth-wave places and 1 article.`);
