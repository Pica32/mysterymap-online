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
      zahada: `${item.name} rozsiruje dvanactou vlnu MysteryMap jako overitelny bod s GPS, tematem a vlastnim redakcnim seedem: ${item.lead}`,
      historie: "Historicka vrstva popisuje zakladni identitu mista a slouzi jako podklad pro pozdejsi lokalni overeni. Profil ma stabilni URL, zdroje a strukturu pro dalsi praci.",
      legenda: "Legendova vrstva ukazuje, proc se misto dostava do mapy: puvodni archeologie, kolonialni pamet, podzemi, impaktni krater, zanikle mesto nebo neobvykla prirodni forma.",
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
  { name: "L Anse aux Meadows", country: "Kanada", continent: "Severni Amerika", lat: 51.5960, lon: -55.5330, score: 84, category: "ztracena-mesta", themes: ["archeologie", "oceany"], lead: "Severske sidliste na Newfoundlandu, hmatatelny dukaz vikingske pritomnosti na okraji Ameriky." },
  { name: "Head Smashed In Buffalo Jump", country: "Kanada", continent: "Severni Amerika", lat: 49.7030, lon: -113.6470, score: 79, category: "legenda", themes: ["archeologie", "zvirata"], lead: "Skalni zlom a archeologicka krajina lovu bizonu, kde teren sam vypravi o technice preziti." },
  { name: "Writing on Stone", country: "Kanada", continent: "Severni Amerika", lat: 49.0830, lon: -111.6170, score: 80, category: "legenda", themes: ["archeologie", "ritual"], lead: "Piskovcove udoli s petroglyfy a posvatnou krajinou, kde obraz zustava vazany na mistni narody." },
  { name: "Dinosaur Provincial Park", country: "Kanada", continent: "Severni Amerika", lat: 50.7660, lon: -111.4920, score: 76, category: "priroda", themes: ["prirodni-anomalie", "archeologie"], lead: "Badlands s jednou z nejbohatsich fosilnich krajin, kde eroze otevira hluboky cas." },
  { name: "Nahanni Valley", country: "Kanada", continent: "Severni Amerika", lat: 61.5500, lon: -125.5900, score: 82, category: "priroda", themes: ["prirodni-labyrint", "zmizeni"], lead: "Divoke udoli v Severozapadnich teritoriich s kanony, prameny a povestmi o izolaci a ztracenych lidech." },
  { name: "Pingualuit Crater", country: "Kanada", continent: "Severni Amerika", lat: 61.2790, lon: -73.6570, score: 79, category: "katastrofa", themes: ["impakt", "kosmicka-anomalie"], lead: "Kruhovy krater s cistym jezerem v Nunaviku, impaktni oko v tundrove krajine." },
  { name: "Manicouagan Reservoir", country: "Kanada", continent: "Severni Amerika", lat: 51.3800, lon: -68.7000, score: 78, category: "katastrofa", themes: ["impakt", "kosmicka-anomalie"], lead: "Prstencove jezero po davnem impaktu, obri kruh citelny hlavne z mapy a vesmirnych snimku." },
  { name: "Mistaken Point Fossil Cliffs", country: "Kanada", continent: "Severni Amerika", lat: 46.6300, lon: -53.1800, score: 77, category: "priroda", themes: ["archeologie", "oceany"], lead: "Pobrezni uloziste ediacarskych fosilii, kde se na kameni objevuje velmi stary zivot." },
  { name: "Red Bay Basque Whaling Station", country: "Kanada", continent: "Severni Amerika", lat: 51.7330, lon: -56.4300, score: 75, category: "ztracena-mesta", themes: ["oceany", "technologie"], lead: "Pozustatky baskicke velrybarske stanice, zapomenuta industrialni vrstva severniho Atlantiku." },
  { name: "Sable Island Wreck Coast", country: "Kanada", continent: "Severni Amerika", lat: 43.9330, lon: -60.0000, score: 82, category: "ostrov", themes: ["oceany", "zmizeni"], lead: "Piskovy ostrov uprostred Atlantiku, znamy vraky, mlhou, konmi a krajinou, ktera se stale presouva." },
  { name: "Cahokia Mounds", country: "Spojene staty", continent: "Severni Amerika", lat: 38.6550, lon: -90.0610, score: 86, category: "ztracena-mesta", themes: ["archeologie", "ritual"], lead: "Monumentalni mohyly nekdejsiho mesta u Mississippi, jeden z nejvetsich predkolumbovskych urbanich uzlu severu." },
  { name: "Serpent Mound Ohio", country: "Spojene staty", continent: "Severni Amerika", lat: 39.0260, lon: -83.4300, score: 83, category: "legenda", themes: ["archeologie", "mytologie"], lead: "Zemni val ve tvaru hada, krajinna forma, kde archeologie a symbolika zustavaji silne propojene." },
  { name: "Chaco Canyon Great Houses", country: "Spojene staty", continent: "Severni Amerika", lat: 36.0600, lon: -107.9610, score: 85, category: "ztracena-mesta", themes: ["archeologie", "kosmicka-anomalie"], lead: "Puebloanske stavby v poustnim kanonu, kde architektura, cesty a obloha tvori jeden system." },
  { name: "Mesa Verde Cliff Palace", country: "Spojene staty", continent: "Severni Amerika", lat: 37.1670, lon: -108.4730, score: 83, category: "ztracena-mesta", themes: ["archeologie", "prirodni-labyrint"], lead: "Skalni obydli pod previsem, ikonicky obraz zivota v kanonove krajine a nasledneho opusteni." },
  { name: "Hovenweep Towers", country: "Spojene staty", continent: "Severni Amerika", lat: 37.3850, lon: -109.0800, score: 78, category: "ztracena-mesta", themes: ["archeologie", "poust"], lead: "Samotarske kamenne veze na okraji kanonu, kde presnost zdiva kontrastuje s prazdnou krajinou." },
  { name: "Bandelier Tsankawi", country: "Spojene staty", continent: "Severni Amerika", lat: 35.8750, lon: -106.2260, score: 77, category: "ztracena-mesta", themes: ["archeologie", "podzemi"], lead: "Stezky, vytesane mistnosti a stopy po puebloanske krajine, kde se clenity tuf menil v obydli." },
  { name: "Gila Cliff Dwellings", country: "Spojene staty", continent: "Severni Amerika", lat: 33.2270, lon: -108.2700, score: 78, category: "podzemi", themes: ["archeologie", "prirodni-labyrint"], lead: "Obydli skryta v jeskynnich previsech Noveho Mexika, mala, ale pusobiva ukazka skalniho sidleni." },
  { name: "Casa Grande Ruins", country: "Spojene staty", continent: "Severni Amerika", lat: 32.9950, lon: -111.5350, score: 77, category: "ztracena-mesta", themes: ["archeologie", "poust"], lead: "Velka hlinena stavba kultury Hohokam, soliterni archeologicky objekt v arizonske rovine." },
  { name: "Poverty Point Earthworks", country: "Spojene staty", continent: "Severni Amerika", lat: 32.6360, lon: -91.4080, score: 81, category: "legenda", themes: ["archeologie", "ritual"], lead: "Rozsahle zemni obrazce a mohyly v Louisiane, davny krajinny projekt s neobvyklym rozsahem." },
  { name: "Spiro Mounds", country: "Spojene staty", continent: "Severni Amerika", lat: 35.3120, lon: -94.5680, score: 80, category: "legenda", themes: ["archeologie", "umrti"], lead: "Mohylovy komplex s bohatymi nalezy, misto, kde obchod, smrt a ritual zanechaly silnou archeologickou stopu." },
  { name: "Effigy Mounds Iowa", country: "Spojene staty", continent: "Severni Amerika", lat: 43.0800, lon: -91.1960, score: 79, category: "legenda", themes: ["archeologie", "zvirata"], lead: "Krajina mohyl ve tvaru zvirat, kde se ritual a topografie spojuji do dlouhe linie nad rekou." },
  { name: "Blythe Intaglios", country: "Spojene staty", continent: "Severni Amerika", lat: 33.8000, lon: -114.5330, score: 78, category: "legenda", themes: ["archeologie", "poust"], lead: "Obri geoglyfy v kalifornske pousti, postavy citelne hlavne z vysky a z otevrene krajiny." },
  { name: "Racetrack Playa", country: "Spojene staty", continent: "Severni Amerika", lat: 36.6810, lon: -117.5620, score: 80, category: "priroda", themes: ["prirodni-anomalie", "poust"], lead: "Sucha jezerni plosina s pohybujicimi se kameny, klasicky pripad zahady vysvetlene kombinaci ledu a vetru." },
  { name: "Mono Lake Tufa Towers", country: "Spojene staty", continent: "Severni Amerika", lat: 38.0000, lon: -119.0000, score: 77, category: "priroda", themes: ["prirodni-anomalie", "oceany"], lead: "Slane jezero s tufovymi vezemi, kde chemie vody vytvari pobrezni architekturu bez lidi." },
  { name: "Fly Geyser", country: "Spojene staty", continent: "Severni Amerika", lat: 40.8590, lon: -119.3310, score: 76, category: "priroda", themes: ["prirodni-anomalie", "technologie"], lead: "Barevny geotermalni kuzel vznikly po vrtu, prirodni proces rozbehnuty lidskym zasahem." },
  { name: "Mammoth Cave", country: "Spojene staty", continent: "Severni Amerika", lat: 37.1870, lon: -86.1010, score: 81, category: "podzemi", themes: ["podzemi", "prirodni-labyrint"], lead: "Nejdelsi znamy jeskynni system sveta, podzemni labyrint, jehoz rozsah presahuje beznou predstavivost." },
  { name: "Carlsbad Caverns", country: "Spojene staty", continent: "Severni Amerika", lat: 32.1470, lon: -104.5560, score: 80, category: "podzemi", themes: ["podzemi", "zvirata"], lead: "Rozsahle jeskynni saly a netopyri v Novem Mexiku, prirodni katedrala pod pousti." },
  { name: "Wind Cave", country: "Spojene staty", continent: "Severni Amerika", lat: 43.5570, lon: -103.4780, score: 77, category: "podzemi", themes: ["podzemi", "prirodni-labyrint"], lead: "Jeskynni system s neobvyklou krabicovou vyzdobou a kulturni vazbou na pribehy Lakotu." },
  { name: "Lava Beds Caves", country: "Spojene staty", continent: "Severni Amerika", lat: 41.7140, lon: -121.5090, score: 78, category: "podzemi", themes: ["podzemi", "sopky"], lead: "Sit lavovych tunelu v severni Kalifornii, kde sopecna krajina vytvorila pruchodne podzemi." },
  { name: "Craters of the Moon Lava Field", country: "Spojene staty", continent: "Severni Amerika", lat: 43.4160, lon: -113.5160, score: 79, category: "katastrofa", themes: ["sopky", "prirodni-anomalie"], lead: "Rozsahla lavova krajina v Idahu, temny povrch, ktery inspiroval predstavu mimozemske planety." },
  { name: "Mount St Helens Blast Zone", country: "Spojene staty", continent: "Severni Amerika", lat: 46.1910, lon: -122.1940, score: 82, category: "katastrofa", themes: ["sopky", "katastrofa"], lead: "Krajina erupce z roku 1980, kde destrukce lesa a hory zustava citelna v samotnem reliefu." },
  { name: "Eastern State Penitentiary", country: "Spojene staty", continent: "Severni Amerika", lat: 39.9680, lon: -75.1720, score: 82, category: "veznice", themes: ["veznice", "duchove"], lead: "Opustena veznice ve Filadelfii, model izolace, reformy a dnes i silne ducharske turistiky." },
  { name: "Alcatraz Island Prison", country: "Spojene staty", continent: "Severni Amerika", lat: 37.8270, lon: -122.4230, score: 81, category: "veznice", themes: ["veznice", "ostrov"], lead: "Ostrovni veznice v zalivu San Francisca, kde izolace, uteky a popularni mytus tvori jeden obraz." },
  { name: "Bodie Ghost Town", country: "Spojene staty", continent: "Severni Amerika", lat: 38.2130, lon: -119.0150, score: 80, category: "ztracena-mesta", themes: ["ztracena-mesta", "poklad"], lead: "Zachovane hornicke mesto duchu v Kalifornii, zamrzly obraz zlate horecky a opusteneho boomu." },
  { name: "Centralia Mine Fire", country: "Spojene staty", continent: "Severni Amerika", lat: 40.8040, lon: -76.3400, score: 83, category: "katastrofa", themes: ["katastrofa", "ztracena-mesta"], lead: "Mesto nad horicim uhelnym podlozim, dlouha katastrofa, ktera zmenila mapu ulic v prazdny varovny priklad." },
  { name: "Salton Sea Ruins", country: "Spojene staty", continent: "Severni Amerika", lat: 33.3130, lon: -115.9660, score: 78, category: "ztracena-mesta", themes: ["katastrofa", "oceany"], lead: "Opustena rekreacni krajina u slaneho jezera, kde ekologicky problem prekryl americky sen o plazi." },
  { name: "Bell Witch Cave", country: "Spojene staty", continent: "Severni Amerika", lat: 36.5000, lon: -86.8700, score: 79, category: "legenda", themes: ["duchove", "podzemi"], lead: "Jeskynni bod spojovany s jednou z nejznamejsich americkych ducharskych legend." },
  { name: "Point Pleasant Mothman", country: "Spojene staty", continent: "Severni Amerika", lat: 38.8440, lon: -82.1370, score: 80, category: "legenda", themes: ["ufo", "media"], lead: "Mesto spojene s Mothmanem, kde lokalni svedectvi, katastrofa mostu a popkultura vytvorily trvaly mytus." },
  { name: "Marfa Lights Viewing Area", country: "Spojene staty", continent: "Severni Amerika", lat: 30.2750, lon: -103.8820, score: 78, category: "legenda", themes: ["ufo", "prirodni-anomalie"], lead: "Texaska vyhlidka na svetelne jevy, ktere balancuji mezi optikou, dopravou a folklorem pouste." },
  { name: "Devils Tower", country: "Spojene staty", continent: "Severni Amerika", lat: 44.5900, lon: -104.7150, score: 79, category: "legenda", themes: ["mytologie", "prirodni-anomalie"], lead: "Osamely skalni monolit ve Wyomingu, posvatne misto i popkulturni symbol kontaktu s necim cizim." },
  { name: "Teotihuacan Avenue of the Dead", country: "Mexiko", continent: "Severni Amerika", lat: 19.6920, lon: -98.8430, score: 88, category: "ztracena-mesta", themes: ["archeologie", "ritual"], lead: "Monumentalni osa a pyramidy u Mexico City, mesto, jehoz puvodci i socialni rad zustavaji predmetem debat." },
  { name: "Tula Atlantean Warriors", country: "Mexiko", continent: "Severni Amerika", lat: 20.0640, lon: -99.3420, score: 81, category: "legenda", themes: ["archeologie", "mytologie"], lead: "Toltecke sochy bojovniku na pyramide, obraz moci, zbrani a pozdejsi mytologizace Tuly." },
  { name: "El Tajin Niches", country: "Mexiko", continent: "Severni Amerika", lat: 20.4480, lon: -97.3780, score: 82, category: "ztracena-mesta", themes: ["archeologie", "ritual"], lead: "Mesto s pyramidou nik, kde architektura, hra a ritual vytvareji zvlastni rytmus kamene." },
  { name: "Monte Alban", country: "Mexiko", continent: "Severni Amerika", lat: 17.0430, lon: -96.7670, score: 84, category: "ztracena-mesta", themes: ["archeologie", "ritual"], lead: "Zapotecke mesto na zarovnane hore nad Oaxacou, krajina moci, hrobek a astronomickych os." },
  { name: "Mitla Mosaics", country: "Mexiko", continent: "Severni Amerika", lat: 16.9220, lon: -96.3600, score: 80, category: "legenda", themes: ["archeologie", "umrti"], lead: "Oaxacke misto s geometrickymi mozaikami a vazbou na smrt, podzemi a pozdni zapoteckou pamet." },
  { name: "Palenque Temple Inscriptions", country: "Mexiko", continent: "Severni Amerika", lat: 17.4840, lon: -92.0460, score: 85, category: "ztracena-mesta", themes: ["archeologie", "mytologie"], lead: "Mayske mesto v pralese s hrobkou Pakala, kde napisy a architektura nesou kralovsky kosmos." },
  { name: "Yaxchilan Ruins", country: "Mexiko", continent: "Severni Amerika", lat: 16.8980, lon: -90.9660, score: 82, category: "ztracena-mesta", themes: ["archeologie", "prirodni-labyrint"], lead: "Mayske ruiny u reky Usumacinta, pristupne skrze pralesni a ricni krajinu hranice." },
  { name: "Bonampak Murals", country: "Mexiko", continent: "Severni Amerika", lat: 16.7060, lon: -91.0660, score: 81, category: "legenda", themes: ["archeologie", "valka"], lead: "Mayske malby s konfliktem a dvorskym ritualem, vzacna barevna vrstva jinak kamenne minulosti." },
  { name: "Calakmul Biosphere Ruins", country: "Mexiko", continent: "Severni Amerika", lat: 18.1050, lon: -89.8100, score: 86, category: "ztracena-mesta", themes: ["archeologie", "prirodni-labyrint"], lead: "Velke mayske mesto pohlcene pralesem, kde archeologie a biosfericka rezervace tvori jeden celek." },
  { name: "Cenote Sagrado Chichen Itza", country: "Mexiko", continent: "Severni Amerika", lat: 20.6840, lon: -88.5690, score: 83, category: "legenda", themes: ["ritual", "podzemi"], lead: "Posvatny cenote u Chichen Itza, vodni propast spojena s obetinami, vodou a politickou moci." },
  { name: "Actun Tunichil Muknal", country: "Belize", continent: "Severni Amerika", lat: 17.1320, lon: -88.9550, score: 85, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Jeskynni mayske ritualni misto s lidskymi pozustatky, citliva kombinace archeologie a temneho podzemi." },
  { name: "Caracol Belize", country: "Belize", continent: "Severni Amerika", lat: 16.7630, lon: -89.1170, score: 82, category: "ztracena-mesta", themes: ["archeologie", "prirodni-labyrint"], lead: "Rozsahle mayske mesto v belizskem pralese, kde cesty, pyramidy a les vytvareji opustenou urbanitu." },
  { name: "Xunantunich", country: "Belize", continent: "Severni Amerika", lat: 17.0890, lon: -89.1410, score: 78, category: "ztracena-mesta", themes: ["archeologie", "mytologie"], lead: "Maysky komplex u reky Mopan, spojovany i s legendou o kamenne zene a bilych zjevenich." },
  { name: "Tikal Temple IV", country: "Guatemala", continent: "Severni Amerika", lat: 17.2220, lon: -89.6230, score: 87, category: "ztracena-mesta", themes: ["archeologie", "prirodni-labyrint"], lead: "Vrchol mayskeho Tikal nad korunami stromu, kde mesto vystupuje jako ostrovy kamene v pralese." },
  { name: "El Mirador Basin", country: "Guatemala", continent: "Severni Amerika", lat: 17.7540, lon: -89.9200, score: 86, category: "ztracena-mesta", themes: ["archeologie", "prirodni-labyrint"], lead: "Odlehla mayska panve s obrimi stavbami, kam cesta vede hluboko do nizinneho pralesa." },
  { name: "Quirigua Stelae", country: "Guatemala", continent: "Severni Amerika", lat: 15.2710, lon: -89.0400, score: 80, category: "legenda", themes: ["archeologie", "mytologie"], lead: "Mayske stely s dlouhymi texty, kde kamen slouzil jako politicka a kosmologicka pamet." },
  { name: "Copan Hieroglyphic Stairway", country: "Honduras", continent: "Severni Amerika", lat: 14.8370, lon: -89.1420, score: 84, category: "legenda", themes: ["archeologie", "mytologie"], lead: "Schodiste pokryte mayskymi znaky, monumentalni text, ktery meni architekturu v kamennou kroniku." },
  { name: "Joya de Ceren", country: "Salvador", continent: "Severni Amerika", lat: 13.8280, lon: -89.3690, score: 80, category: "ztracena-mesta", themes: ["sopky", "archeologie"], lead: "Vesnice zakonzervovana sopecnym popelem, kazdodenni stredni Amerika zachycena jako archeologicky okamzik." },
  { name: "Tazumal", country: "Salvador", continent: "Severni Amerika", lat: 13.9790, lon: -89.6740, score: 76, category: "legenda", themes: ["archeologie", "ritual"], lead: "Archeologicky komplex v Chalchuape, vrstvy pyramid, hrobek a regionalni moci na zapade Salvadoru." },
  { name: "Guayabo National Monument", country: "Kostarika", continent: "Severni Amerika", lat: 9.9710, lon: -83.6900, score: 77, category: "ztracena-mesta", themes: ["archeologie", "prirodni-labyrint"], lead: "Predkolumbovske sidliste s cestami a vodnim systemem, tichy archeologicky ostrov v kostarickem lese." },
  { name: "Diquis Stone Spheres", country: "Kostarika", continent: "Severni Amerika", lat: 8.9100, lon: -83.4700, score: 80, category: "legenda", themes: ["archeologie", "pseudoveda"], lead: "Dokonale pusobici kamenne koule, archeologicky jev casto obalovany prehnanymi spekulacemi." },
  { name: "Coiba Penal Colony", country: "Panama", continent: "Severni Amerika", lat: 7.4630, lon: -81.7700, score: 78, category: "veznice", themes: ["veznice", "ostrov"], lead: "Ostrovni trestanecka minulost Coiby, kde izolace chranila prirodu a zaroven nesla tvrdou lidskou historii." },
  { name: "Providence Canyon Georgia", country: "Spojene staty", continent: "Severni Amerika", lat: 32.0650, lon: -84.9200, score: 74, category: "priroda", themes: ["prirodni-anomalie", "katastrofa"], lead: "Barevne rokle vznikle zrychlenou erozi po spatnem hospodareni, prirodni divadlo s lidskou pricinou." },
  { name: "Mima Mounds Washington", country: "Spojene staty", continent: "Severni Amerika", lat: 46.9020, lon: -123.0480, score: 76, category: "priroda", themes: ["prirodni-anomalie", "pseudoveda"], lead: "Pole pravidelnych nizek v krajine Washingtonu, prirodni vzor s dlouhou historii vedeckych vysvetleni." },
  { name: "Pictograph Cave Montana", country: "Spojene staty", continent: "Severni Amerika", lat: 45.9160, lon: -108.3820, score: 75, category: "legenda", themes: ["archeologie", "ritual"], lead: "Jeskynni ukryt s malbami u Billings, kde skalni stena nese stopy dlouhe lidske pritomnosti." }
];

const places = readJson(placesPath);
const byId = new Map(places.map((place) => [place.id, place]));
rawPlaces.map(profile).forEach((place) => byId.set(place.id, place));
writeJson(placesPath, Array.from(byId.values()));

const articles = readJson(articlesPath);
const article = {
  id: "dvanacta-vlna-severni-amerika-archeologie-podzemi",
  slug: "dvanacta-vlna-severni-amerika-archeologie-podzemi",
  localizedSlugs: {
    cs: "dvanacta-vlna-severni-amerika-archeologie-podzemi",
    en: "twelfth-wave-north-america-archaeology-underground",
    de: "zwoelfte-welle-nordamerika-archaeologie-untergrund",
    es: "duodecima-ola-norteamerica-arqueologia-subterraneo",
    fr: "douzieme-vague-amerique-nord-archeologie-souterrains"
  },
  title: "Dvanacta vlna: Severni Amerika, archeologie a podzemi",
  description: "Dvanacta vlna pridava predkolumbovska mesta, kanadske a americke prirodni anomalie, jeskynni systemy, veznice, opustena mesta a mayske lokality.",
  category: "ztracena-mesta",
  themes: ["archeologie", "podzemi", "prirodni-anomalie", "veznice"],
  relatedPlaceIds: rawPlaces.slice(0, 30).map((item) => slugify(item.name)),
  sections: [
    {
      heading: "Proc Severni Amerika",
      body: "Severni Amerika ma mnoho mist, ktera byva zjednodusena na legendy nebo turisticke ikony. V katalogu je uzitecne propojit je s archeologii, mapou, pristupnosti a skeptickym popisem."
    },
    {
      heading: "Mayske a puebloanske vrstvy",
      body: "Mayska, puebloanska a mohylova mista tvori samostatnou sit predkolumbovske pameti. Krome dramatickeho obrazu potrebuji presny jazyk, aby se nemichala archeologie s modernimi spekulacemi."
    },
    {
      heading: "Dalsi krok",
      body: "U dvanacte vlny bude vhodne doplnit spravcovske zdroje, mistni nazvy, varovani u citlivych archeologickych mist a licencovane fotografie z otevrenych katalogu."
    }
  ],
  sources: ["wikidata", "wikipedia", "openstreetmap", "wikimedia-commons"]
};

const articlesById = new Map(articles.map((item) => [item.id, item]));
articlesById.set(article.id, article);
writeJson(articlesPath, Array.from(articlesById.values()));

console.log(`Upserted ${rawPlaces.length} twelfth-wave places and 1 article.`);
