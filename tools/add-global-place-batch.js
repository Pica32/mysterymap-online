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
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function wikiUrl(name) {
  return `https://en.wikipedia.org/wiki/${encodeURIComponent(name.replaceAll(" ", "_"))}`;
}

function wikidataSearch(name) {
  return `https://www.wikidata.org/w/index.php?search=${encodeURIComponent(name)}`;
}

function osmSearch(name, country) {
  return `https://www.openstreetmap.org/search?query=${encodeURIComponent(`${name} ${country}`)}`;
}

function profile(item) {
  const id = slugify(item.name);
  const category = item.category || "legenda";
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
    kategorie: Array.from(new Set([category, ...(item.categories || [])])),
    temata: themes,
    indexTajemna: item.score || 72,
    paranormalniAktivita: item.activity || "stredni",
    historickaDolozenost: "overitelna zakladni identita",
    nebezpecnost: item.risk || "overit lokalne",
    pristupnost: item.access || "overit pred cestou",
    atmosfera: item.atmosphere || 4.1,
    nocniVhodnost: Boolean(item.night),
    vhodneProDeti: item.kids !== false,
    popisy: {
      zahada: `${item.name} patri do databaze MysteryMap jako globalni misto s opakovanou verejnou asociaci: ${item.lead} Profil oddeluje realnou polohu, overitelne zdroje a pribehovou vrstvu.`,
      historie: `Historicka cast vychazi ze stabilnich verejnych zdroju, geografickych dat a dohledatelnych popisu mista. U seedovych globalnich profilu je dulezite drzet jasnou stopu zdroju a pozdeji doplnovat mistni autority.`,
      legenda: `Legendova vrstva shrnuje, proc se misto objevuje v cestovatelskych seznamech, folkloru, popkulture nebo lokalnich vypravenich. Tvrzeni jsou oznacena jako kulturni pribeh, ne jako prokazany fakt.`,
      paranormalni: `Paranormalni vrstva zaznamenava to, co lide s mistem spojuji: zjeveni, zvuky, zvlastni atmosferu, zahadne zmizeni, posvatny respekt, anomalni krajinu nebo temnou historickou pamet podle typu lokace.`,
      skepticke: `Skepticky ramec pocita s prirodnimi jevy, architekturou, turismem, medialnim opakovanim, nepresnou pameti a silou ocekavani. Cilem neni legendu mazat, ale jasne ukazat hranici mezi zdrojem a interpretaci.`
    },
    praktickeInfo: `Pred navstevou ${item.name} over aktualni pristup, vlastnictvi pozemku, oteviraci dobu, pravidla foceni a bezpecnostni omezeni. Souradnice slouzi k orientaci, ne jako povoleni vstupu.`,
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: `Wikipedia: ${item.name}`, url: wikiUrl(item.name), licence: "CC BY-SA / reference discovery" },
      { nazev: `Wikidata search: ${item.name}`, url: wikidataSearch(item.name), licence: "CC0 / entity discovery" },
      { nazev: "OpenStreetMap search", url: osmSearch(item.name, item.country), licence: "ODbL / map verification" }
    ],
    pribehy: [
      {
        nazev: "Proc je misto na mape",
        text: `${item.name} ma silnou kombinaci dohledatelne lokace, verejne znameho pribehu a tematu ${themes.join(", ")}. To z nej dela vhodny uzel pro globální mapu zahad.`
      },
      {
        nazev: "Co doplnit v dalsi redakci",
        text: "Dalsi krok je pridat lokalni zdroje, fotografie s jasnou licenci, presne navstevnicke informace a jazykove lokalizovane texty podle regionu."
      }
    ]
  };
}

const rawPlaces = [
  { name: "Winchester Mystery House", country: "Spojene staty", continent: "Severni Amerika", lat: 37.3184, lon: -121.9509, score: 86, category: "legenda", categories: ["hrad"], themes: ["duchove", "prokleti"], lead: "Labyrintovy dum v San Jose spojovany s rodinnou vinou, zbranemi a nekonecnou stavbou." },
  { name: "Stanley Hotel", country: "Spojene staty", continent: "Severni Amerika", lat: 40.3836, lon: -105.5193, score: 82, category: "legenda", themes: ["duchove", "popkultura"], lead: "Hotel v Coloradu proslaveny povestmi i literarni a filmovou ozvenou hororu." },
  { name: "Eastern State Penitentiary", country: "Spojene staty", continent: "Severni Amerika", lat: 39.9683, lon: -75.1727, score: 83, category: "veznice", themes: ["veznice", "duchove"], lead: "Byvala veznice ve Filadelfii, kde architektura izolace vytvari mimoradne silnou atmosferu." },
  { name: "Alcatraz Island", country: "Spojene staty", continent: "Severni Amerika", lat: 37.8267, lon: -122.4230, score: 84, category: "ostrov", categories: ["veznice"], themes: ["veznice", "zmizeni"], lead: "Ostrovni veznice v zalivu San Francisca spojena s uteky, izolaci a temnou pameti." },
  { name: "Villisca Axe Murder House", country: "Spojene staty", continent: "Severni Amerika", lat: 40.9290, lon: -94.9766, score: 85, category: "legenda", themes: ["vrazdy", "duchove"], lead: "Dum v Iowe spojeny s brutalni nevyresenou vrazdou a modernimi vypravami za duchy.", kids: false },
  { name: "Bell Witch Cave", country: "Spojene staty", continent: "Severni Amerika", lat: 36.5072, lon: -87.0925, score: 81, category: "priroda", themes: ["duchove", "prokleti"], lead: "Jeskynni lokalita spojovana s jednim z nejznamejsich americkych folklornich strasidelných pribehu." },
  { name: "St. Augustine Lighthouse", country: "Spojene staty", continent: "Severni Amerika", lat: 29.8850, lon: -81.2883, score: 78, category: "legenda", themes: ["duchove", "more"], lead: "Majak na Floride, kde se namorni historie prolina se svedectvimi o zvucich a stinech." },
  { name: "The Queen Mary", country: "Spojene staty", continent: "Severni Amerika", lat: 33.7526, lon: -118.1909, score: 80, category: "legenda", themes: ["duchove", "popkultura"], lead: "Historicka lod v Long Beach s povesti jednoho z nejstrasidelnejsich ubytovacich mist v USA." },
  { name: "Moundsville Penitentiary", country: "Spojene staty", continent: "Severni Amerika", lat: 39.9204, lon: -80.7439, score: 79, category: "veznice", themes: ["veznice", "duchove"], lead: "Mohutna byvala veznice v Zapadni Virginii s tvrdou historii a popularni paranormalni reputaci." },
  { name: "Trans-Allegheny Lunatic Asylum", country: "Spojene staty", continent: "Severni Amerika", lat: 39.0386, lon: -80.4673, score: 81, category: "legenda", themes: ["duchove", "umrti"], lead: "Rozsahly historicky ustav ve Westonu, kde se architektura lecebny meni v temnou pametni krajinu." },
  { name: "Lemp Mansion", country: "Spojene staty", continent: "Severni Amerika", lat: 38.5930, lon: -90.2165, score: 77, category: "legenda", themes: ["duchove", "umrti"], lead: "Dum pivovarnicke rodiny v St. Louis spojeny s tragediemi, sebevrazdami a povestmi o zjevenich." },
  { name: "Myrtles Plantation", country: "Spojene staty", continent: "Severni Amerika", lat: 30.8025, lon: -91.3875, score: 79, category: "legenda", themes: ["duchove", "vrazdy"], lead: "Plantazni dum v Louisiane, kde se komplikovana historie jihu michá s turistickou legendou." },
  { name: "Bodie State Historic Park", country: "Spojene staty", continent: "Severni Amerika", lat: 38.2122, lon: -119.0124, score: 76, category: "legenda", themes: ["ztracena-mesta", "prokleti"], lead: "Opustene hornicke mesto v Kalifornii, kde se dochovana ulice stala symbolem mesta duchu." },
  { name: "Sedlec Ossuary", country: "Cesko", continent: "Evropa", lat: 49.9619, lon: 15.2880, score: 82, category: "podzemi", themes: ["umrti", "ritual"], lead: "Kostnice u Kutne Hory, kde se nabozenstvi, smrt a estetika setkavaji v neobvykle silnem prostoru." },
  { name: "Old Jewish Cemetery Prague", country: "Cesko", continent: "Evropa", lat: 50.0899, lon: 14.4170, score: 80, category: "legenda", themes: ["umrti", "mytologie"], lead: "Vrstevnatý prazsky hrbitov spojeny s historii ghetta, rabinskych legend a kulturni pameti." },
  { name: "Edinburgh Vaults", country: "Spojene kralovstvi", continent: "Evropa", lat: 55.9497, lon: -3.1870, score: 84, category: "podzemi", themes: ["podzemi", "duchove"], lead: "Podzemni prostory pod Edinburghskym mostem, kde se mestska chudoba zmenila v hororovou legendu." },
  { name: "Mary King's Close", country: "Spojene kralovstvi", continent: "Evropa", lat: 55.9502, lon: -3.1900, score: 82, category: "podzemi", themes: ["karantena", "duchove"], lead: "Uzavrena ulicka pod starým mestem Edinburghu, spojovana s epidemiemi a temnou mestskou pameti." },
  { name: "Pendle Hill", country: "Spojene kralovstvi", continent: "Evropa", lat: 53.8685, lon: -2.2990, score: 80, category: "priroda", themes: ["carodejnictvi", "vrazdy"], lead: "Kopec v Lancashiru spojeny s procesy s carodejnicemi a jednim z nejsilnejsich anglickych folklornich pribehu." },
  { name: "Borley Rectory", country: "Spojene kralovstvi", continent: "Evropa", lat: 52.0520, lon: 0.6930, score: 81, category: "legenda", themes: ["duchove", "media"], lead: "Misto spojene s povesti nejslavnejsiho strasidelneho domu Anglie, i kdyz samotna stavba uz nestojí." },
  { name: "Highgate Cemetery", country: "Spojene kralovstvi", continent: "Evropa", lat: 51.5675, lon: -0.1483, score: 79, category: "legenda", themes: ["umrti", "mytologie"], lead: "Londynsky viktoriansky hrbitov, kde goticka architektura a vampyrska legenda vytvorily silny mytus." },
  { name: "Leap Castle", country: "Irsko", continent: "Evropa", lat: 53.0283, lon: -7.8086, score: 85, category: "hrad", themes: ["duchove", "vrazdy"], lead: "Irsky hrad s povesti krvave kaple, rodovych konfliktu a intenzivni paranormalni reputace." },
  { name: "Hellfire Club Dublin", country: "Irsko", continent: "Evropa", lat: 53.2511, lon: -6.3337, score: 82, category: "legenda", themes: ["dabel", "ritual"], lead: "Ruina na Montpelier Hill spojovana s tajnymi schuzkami, satanistickymi povestmi a nocnimi vypravami." },
  { name: "Chateau de Brissac", country: "Francie", continent: "Evropa", lat: 47.3552, lon: -0.4497, score: 75, category: "hrad", themes: ["duchove", "vrazdy"], lead: "Francouzsky zamek spojovany s legendou o zelene dame a tragickym pribehem zrady." },
  { name: "Catacombs of Kom el Shoqafa", country: "Egypt", continent: "Afrika", lat: 31.1784, lon: 29.8927, score: 81, category: "podzemi", themes: ["podzemi", "umrti"], lead: "Alexandrijske katakomby, kde se egyptsky, recky a rims_ký svet potkavaji v podzemni architekture smrti." },
  { name: "Valley of the Kings", country: "Egypt", continent: "Afrika", lat: 25.7402, lon: 32.6014, score: 83, category: "legenda", themes: ["prokleti", "mytologie"], lead: "Pohrebni krajina u Luxoru, kde archeologie a povest o faraonove kletbe vytvorily globalni mytus." },
  { name: "Great Sphinx of Giza", country: "Egypt", continent: "Afrika", lat: 29.9753, lon: 31.1376, score: 82, category: "legenda", themes: ["mytologie", "konspirace"], lead: "Monumentalni sfinga na Gize, magnet pro archeologii, symboliku i alternativni teorie." },
  { name: "Derinkuyu Underground City", country: "Turecko", continent: "Asie", lat: 38.3750, lon: 34.7347, score: 86, category: "podzemi", themes: ["podzemi", "ztracena-mesta"], lead: "Rozsahle podzemni mesto v Kappadokii, kde obrana, preziti a labyrint vytvareji jedinecnou zahadu." },
  { name: "Gobekli Tepe", country: "Turecko", continent: "Asie", lat: 37.2231, lon: 38.9225, score: 84, category: "legenda", themes: ["ritual", "mytologie"], lead: "Archeologicke misto, ktere zmenilo predstavy o ritualu, spolecnosti a praveku." },
  { name: "Mount Nemrut", country: "Turecko", continent: "Asie", lat: 37.9800, lon: 38.7410, score: 80, category: "priroda", themes: ["mytologie", "umrti"], lead: "Vrchol s obrovskymi hlavami soch a kralovskou pameti, ktery pusobi jako krajina po zaniklem kultu." },
  { name: "Aokigahara", country: "Japonsko", continent: "Asie", lat: 35.4779, lon: 138.6206, score: 82, category: "priroda", themes: ["umrti", "duchove"], lead: "Les u Fudzi s tragickou povesti, hustou prirodou a silnou potrebou citliveho zpracovani.", kids: false },
  { name: "Hashima Island", country: "Japonsko", continent: "Asie", lat: 32.6278, lon: 129.7381, score: 81, category: "ostrov", themes: ["ztracena-mesta", "valka"], lead: "Opusteny prumyslovy ostrov, kde betonove ruiny nesou pamet tezby, nucene prace a izolace." },
  { name: "Okunoshima", country: "Japonsko", continent: "Asie", lat: 34.3090, lon: 132.9930, score: 75, category: "ostrov", themes: ["valka", "tajne-spolecnosti"], lead: "Ostrov znamy dnes turismem, ale historicky spojeny s utajenou vyrobou chemickych zbrani." },
  { name: "Poveglia Island", country: "Italie", continent: "Evropa", lat: 45.3819, lon: 12.3316, score: 86, category: "ostrov", themes: ["karantena", "duchove"], lead: "Benatsky ostrov spojovany s karantenou, ustavem a jednou z nejsilnejsich evropskych temnych legend." },
  { name: "Capuchin Catacombs of Palermo", country: "Italie", continent: "Evropa", lat: 38.1111, lon: 13.3397, score: 82, category: "podzemi", themes: ["umrti", "ritual"], lead: "Katakomby s mumifikovanymi tel_y, kde se smrt ukazuje jako socialni i nabozensky ritual." },
  { name: "Burg Eltz", country: "Nemecko", continent: "Evropa", lat: 50.2056, lon: 7.3367, score: 71, category: "hrad", themes: ["legenda", "stredovek"], lead: "Ikonicky hrad v udoli Mosely vhodny pro stredoveke a templarske tematicke propojeni." },
  { name: "Bastei Bridge", country: "Nemecko", continent: "Evropa", lat: 50.9619, lon: 14.0733, score: 73, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Skalni most v Saskem Svycarsku, kde krajina pusobi jako kulisa pro romanticke a myticke pribehy." },
  { name: "Hoia Baciu Forest", country: "Rumunsko", continent: "Evropa", lat: 46.7670, lon: 23.5200, score: 84, category: "priroda", themes: ["ufo", "duchove"], lead: "Les u Kluze spojovany s neobvyklou atmosferou, UFO pribehem a moderni paranormalni reputaci." },
  { name: "Corvin Castle", country: "Rumunsko", continent: "Evropa", lat: 45.7492, lon: 22.8886, score: 80, category: "hrad", themes: ["vrazdy", "legenda"], lead: "Goticky hrad v Hunedoare, kde realna historie moci snadno prechazi do temnych legend." },
  { name: "Poenari Castle", country: "Rumunsko", continent: "Evropa", lat: 45.3533, lon: 24.6350, score: 82, category: "hrad", themes: ["vrazdy", "mytologie"], lead: "Hrad spojovany s Vladem III., horskou izolaci a brutalni historickou pameti." },
  { name: "Pripyat", country: "Ukrajina", continent: "Evropa", lat: 51.4055, lon: 30.0542, score: 88, category: "katastrofa", themes: ["katastrofa", "ztracena-mesta"], lead: "Opustene mesto u Cernobylu, kde moderni katastrofa vytvorila jednu z nejsilnejsich ruin 20. stoleti.", kids: false },
  { name: "Dargavs", country: "Rusko", continent: "Asie", lat: 42.8333, lon: 44.4333, score: 78, category: "legenda", themes: ["umrti", "mytologie"], lead: "Kavkazske mesto mrtvych, kde nekropole v horach pusobi jako samostatna krajina pameti." },
  { name: "Door to Hell", country: "Turkmenistan", continent: "Asie", lat: 40.2525, lon: 58.4396, score: 87, category: "priroda", themes: ["dabel", "prirodni-anomalie"], lead: "Hori_sci plynovy krater Darvaza, kde technicka nehoda ziskala myticky nazev brany do pekla." },
  { name: "Mohenjo-daro", country: "Pakistan", continent: "Asie", lat: 27.3294, lon: 68.1386, score: 82, category: "legenda", themes: ["ztracena-mesta", "konspirace"], lead: "Staroveke mesto civilizace Indu, ktere pritahuje archeologii i alternativni vyklady zanikle civilizace." },
  { name: "Roopkund", country: "Indie", continent: "Asie", lat: 30.2620, lon: 79.7310, score: 85, category: "priroda", themes: ["umrti", "prirodni-anomalie"], lead: "Himalajske jezero s lidskymi kostrami, kde prirodni podminky uchovaly silnou zahadu." },
  { name: "Kuldhara", country: "Indie", continent: "Asie", lat: 26.8713, lon: 70.8020, score: 80, category: "legenda", themes: ["ztracena-mesta", "prokleti"], lead: "Opustena vesnice v Radzasthanu spojovana s prokletim a nahlym odchodem obyvatel." },
  { name: "Jatinga", country: "Indie", continent: "Asie", lat: 25.1627, lon: 93.0319, score: 79, category: "priroda", themes: ["prirodni-anomalie", "zvirata"], lead: "Vesnice proslula podivnym chovanim ptaku, ktere vyzaduje prirodni a skepticke vysvetleni." },
  { name: "Sigiriya", country: "Sri Lanka", continent: "Asie", lat: 7.9570, lon: 80.7603, score: 80, category: "hrad", themes: ["mytologie", "ztracena-mesta"], lead: "Skalni pevnost a palac, kde krajina, moc a legenda vytvareji jeden z nejsilnejsich obrazu Jizni Asie." },
  { name: "Plain of Jars", country: "Laos", continent: "Asie", lat: 19.4317, lon: 103.1589, score: 83, category: "legenda", themes: ["mytologie", "umrti"], lead: "Krajina kamennych nadob, jejichz ucel a megaliticka atmosfera dlouho vyvolavaly otazky." },
  { name: "Leshan Giant Buddha", country: "Cina", continent: "Asie", lat: 29.5470, lon: 103.7690, score: 76, category: "legenda", themes: ["mytologie", "ritual"], lead: "Obri socha Buddhy vytesana do skaly, kde nabozenstvi, reka a monumentalita vytvareji posvatnou mapu." },
  { name: "Fengdu Ghost City", country: "Cina", continent: "Asie", lat: 29.8860, lon: 107.7300, score: 82, category: "legenda", themes: ["duchove", "mytologie"], lead: "Komplex chramu a vyobrazeni podsveti, ktery primo pracuje s predstavami o smrti a soudu." },
  { name: "Nazca Lines", country: "Peru", continent: "Jizni Amerika", lat: -14.7390, lon: -75.1300, score: 88, category: "priroda", themes: ["kosmicka-anomalie", "konspirace"], lead: "Geoglyfy v pousti, kde archeologie, pohled shora a alternativni teorie tvori globalni zahadu." },
  { name: "Machu Picchu", country: "Peru", continent: "Jizni Amerika", lat: -13.1631, lon: -72.5450, score: 82, category: "ztracena-mesta", themes: ["mytologie", "ztracena-mesta"], lead: "Andske mesto na hrebenu, ktere kombinuje archeologii, krajinu a predstavu ztracene civilizace." },
  { name: "Sacsayhuaman", country: "Peru", continent: "Jizni Amerika", lat: -13.5089, lon: -71.9824, score: 81, category: "legenda", themes: ["konspirace", "ztracena-mesta"], lead: "Megaliticky komplex nad Cuskem, jehoz kamenne zdivo pritahuje jak archeology, tak alternativni vyklady." },
  { name: "Easter Island", country: "Chile", continent: "Jizni Amerika", lat: -27.1127, lon: -109.3497, score: 87, category: "ostrov", themes: ["mytologie", "ztracena-mesta"], lead: "Ostrov Rapa Nui se sochami moai, kde izolace a monumentalita vytvorily svetovy symbol zahady." },
  { name: "Tiwanaku", country: "Bolivie", continent: "Jizni Amerika", lat: -16.5547, lon: -68.6733, score: 82, category: "legenda", themes: ["ztracena-mesta", "konspirace"], lead: "Andske archeologicke misto s monumentalni kamennou architekturou a silnym alternativnim zivotem." },
  { name: "Ciudad Perdida", country: "Kolumbie", continent: "Jizni Amerika", lat: 11.0370, lon: -73.9250, score: 81, category: "priroda", themes: ["ztracena-mesta", "mytologie"], lead: "Ztracene mesto v pohoři Sierra Nevada de Santa Marta, kde cesta dzungli zvysuje mytickou silu mista." },
  { name: "Island of the Dolls", country: "Mexiko", continent: "Severni Amerika", lat: 19.2900, lon: -99.0970, score: 84, category: "ostrov", themes: ["duchove", "ritual"], lead: "Ostrov v Xochimilcu pokryty panenkami, kde osobni ritual prerostl v jednu z nejznamejsich temnych atrakcí." },
  { name: "Teotihuacan", country: "Mexiko", continent: "Severni Amerika", lat: 19.6925, lon: -98.8438, score: 84, category: "legenda", themes: ["mytologie", "ztracena-mesta"], lead: "Mesto pyramid u Mexika, jehoz puvod, rozsah a pozdejsi mytologie tvori silny uzel zahad." },
  { name: "Chichen Itza", country: "Mexiko", continent: "Severni Amerika", lat: 20.6843, lon: -88.5678, score: 82, category: "legenda", themes: ["mytologie", "ritual"], lead: "Maysky komplex, kde kalendarni symbolika, obeti a architektura tvori vyrazne ritualni misto." },
  { name: "Actun Tunichil Muknal", country: "Belize", continent: "Severni Amerika", lat: 17.1435, lon: -88.8275, score: 85, category: "podzemi", themes: ["ritual", "umrti"], lead: "Jeskynni archeologicke misto s lidskymi ostatky a ritualni vrstvou, ktera vyzaduje citlive zpracovani." },
  { name: "Bermuda Triangle", country: "Atlantik", continent: "Severni Amerika", lat: 25.0000, lon: -71.0000, score: 86, category: "priroda", themes: ["zmizeni", "konspirace"], lead: "Morska oblast spojovana se zmizenimi lodi a letadel, kde je nutny silny skepticky ramec." },
  { name: "Yonaguni Monument", country: "Japonsko", continent: "Asie", lat: 24.4490, lon: 122.9330, score: 83, category: "priroda", themes: ["oceany", "konspirace"], lead: "Podmorska skalni formace u Yonaguni, kde se stretava geologie s predstavou zatopene civilizace." },
  { name: "Lake Natron", country: "Tanzanie", continent: "Afrika", lat: -2.4167, lon: 36.0000, score: 78, category: "priroda", themes: ["prirodni-anomalie", "umrti"], lead: "Alkalicke jezero s drsnou chemii a vizualne temnou povesti zkamenele krajiny." },
  { name: "Great Zimbabwe", country: "Zimbabwe", continent: "Afrika", lat: -20.2670, lon: 30.9330, score: 80, category: "legenda", themes: ["ztracena-mesta", "mytologie"], lead: "Kamenny komplex, ktery je klicem k dejinam regionu a zaroven casto trpel zkreslenymi kolonialnimi vyklady." },
  { name: "Lalibela", country: "Etiopie", continent: "Afrika", lat: 12.0317, lon: 39.0476, score: 82, category: "legenda", themes: ["ritual", "mytologie"], lead: "Skalni chramy v Etiopii, kde poutni tradice a architektura vytvareji mimoradne posvatne misto." },
  { name: "Richat Structure", country: "Mauritanie", continent: "Afrika", lat: 21.1242, lon: -11.3956, score: 81, category: "priroda", themes: ["prirodni-anomalie", "konspirace"], lead: "Geologicke oko Sahary, ktere diky tvaru pritahuje satelitni snimky i alternativni teorie." },
  { name: "Tassili n'Ajjer", country: "Alzirsko", continent: "Afrika", lat: 25.5000, lon: 9.0000, score: 82, category: "priroda", themes: ["mytologie", "konspirace"], lead: "Saharska krajina skalniho umeni, kde praveke malby casto vyvolavaji moderni sporne interpretace." },
  { name: "Great Blue Hole", country: "Belize", continent: "Severni Amerika", lat: 17.3156, lon: -87.5345, score: 78, category: "priroda", themes: ["oceany", "prirodni-anomalie"], lead: "Obri morska dira, kde geologie, hloubka a vizualni dokonaly kruh pusobi jako prirodni zahada." },
  { name: "Devils Tower", country: "Spojene staty", continent: "Severni Amerika", lat: 44.5902, lon: -104.7146, score: 80, category: "priroda", themes: ["mytologie", "ufo"], lead: "Skalni monolit ve Wyomingu, posvatny pro puvodni narody a zaroven silne zapsany v popkulture UFO." },
  { name: "Marfa Lights", country: "Spojene staty", continent: "Severni Amerika", lat: 30.2752, lon: -103.8568, score: 82, category: "priroda", themes: ["ufo", "prirodni-anomalie"], lead: "Svetla v texaske krajine, kde se pozorovani, optika a legenda opakuji po generace." },
  { name: "Racetrack Playa", country: "Spojene staty", continent: "Severni Amerika", lat: 36.6814, lon: -117.5620, score: 79, category: "priroda", themes: ["prirodni-anomalie", "skeptic"], lead: "Vyschle jezero v Death Valley se stopami samovolne se pohybujicich kamenu a dnes dobre vysvetlenou zahadou." },
  { name: "Mount Shasta", country: "Spojene staty", continent: "Severni Amerika", lat: 41.4092, lon: -122.1949, score: 81, category: "priroda", themes: ["ufo", "mytologie"], lead: "Hora v Kalifornii spojovana s domorodou spiritualitou, New Age myty, UFO a skrytymi civilizacemi." },
  { name: "Magnetic Hill Moncton", country: "Kanada", continent: "Severni Amerika", lat: 46.1340, lon: -64.8830, score: 72, category: "priroda", themes: ["prirodni-anomalie", "skeptic"], lead: "Opticka iluze gravitacniho kopce, vhodna pro jasne oddeleni dojmu a fyzikalniho vysvetleni." },
  { name: "Head-Smashed-In Buffalo Jump", country: "Kanada", continent: "Severni Amerika", lat: 49.7000, lon: -113.6500, score: 74, category: "legenda", themes: ["ritual", "mytologie"], lead: "Misto puvodnich lovu bizonu, kde krajina uchovava velmi dlouhou kulturni pamet." },
  { name: "Ninstints", country: "Kanada", continent: "Severni Amerika", lat: 52.0950, lon: -131.2180, score: 77, category: "ztracena-mesta", themes: ["mytologie", "umrti"], lead: "Opustena vesnice Haida na ostrovech Haida Gwaii, kde totemy a prazdne domy pusobi jako silna pametni krajina." },
  { name: "Uluru", country: "Australie", continent: "Oceanie", lat: -25.3444, lon: 131.0369, score: 83, category: "priroda", themes: ["mytologie", "ritual"], lead: "Posvatny monolit pro Anangu, ktery vyzaduje respekt k mistnim pravidlum a oddeleni turismu od kultury." },
  { name: "Devils Marbles", country: "Australie", continent: "Oceanie", lat: -20.5695, lon: 134.2639, score: 76, category: "priroda", themes: ["mytologie", "prirodni-anomalie"], lead: "Balvany Karlu Karlu, kde geologie a domorode pribehy vytvareji silne krajinne misto." },
  { name: "Monte Cristo Homestead", country: "Australie", continent: "Oceanie", lat: -34.8710, lon: 147.5830, score: 80, category: "legenda", themes: ["duchove", "umrti"], lead: "Historicky dum v Novem Jiznim Walesu s reputaci jedne z nejstrasidelnejsich australskych usedlosti." },
  { name: "Waitomo Glowworm Caves", country: "Novy Zeland", continent: "Oceanie", lat: -38.2609, lon: 175.1033, score: 74, category: "podzemi", themes: ["prirodni-anomalie", "podzemi"], lead: "Jeskynni system, kde bioluminiscence vytvari dojem hvezdne oblohy pod zemi." },
  { name: "Moeraki Boulders", country: "Novy Zeland", continent: "Oceanie", lat: -45.3470, lon: 170.8260, score: 74, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Kulovite balvany na pobrezi, kde prirodni procesy vypadaji jako vysledek zamerneho opracovani." }
];

const places = readJson(placesPath);
const byId = new Map(places.map((place) => [place.id, place]));
rawPlaces.map(profile).forEach((place) => byId.set(place.id, place));
writeJson(placesPath, Array.from(byId.values()));

const articles = readJson(articlesPath);
const articleId = "globalni-zahadna-mista-velky-seed";
const relatedPlaceIds = rawPlaces.slice(0, 30).map((item) => slugify(item.name));
const article = {
  id: articleId,
  slug: articleId,
  localizedSlugs: {
    cs: articleId,
    en: "global-mystery-places-large-seed",
    de: "globale-raetselorte-grosser-seed",
    es: "lugares-misteriosos-globales-seed",
    fr: "lieux-mysterieux-monde-grand-seed"
  },
  title: "Globalni zahadna mista: velky seed pro svetovou MysteryMap",
  description: "Redakcni rozcestnik k velke davce svetovych zahadnych mist: hrady, podzemi, ostrovy, prirodni anomalie, ruiny, filmove lokace a skepticky overitelne zdroje.",
  category: "legenda",
  themes: ["mapa", "zdroje", "komunita", "overovani"],
  relatedPlaceIds,
  sections: [
    {
      heading: "Proc vznikl velky seed",
      body: "Cilem je dostat MysteryMap bliz k objemu velkych cestovatelskych databazi, ale bez kopirovani ciziho textu nebo cizi databaze. Seed vytvari vlastni profily s GPS, zdroji, kategoriemi a redakcnim ramcem."
    },
    {
      heading: "Jak se bude overovat dal",
      body: "Kazde misto ma zakladni zdrojovou stopu. Dalsi redakcni kolo musi pridavat lokalni autority, oficialni weby, licencovane fotografie, presne navstevnicke informace a lepsi jazykove lokalizace."
    },
    {
      heading: "Proc to pomaha SEO, GEO a LLM vyhledavani",
      body: "Stabilni slugy, hreflang, sitemap, JSON-LD, jasne oddeleni faktu od legend a zdrojove odkazy davaji vyhledavacum i jazykovym modelum citelny, strukturovany a rozsirivatelny katalog."
    }
  ],
  sources: ["wikidata", "wikipedia", "openstreetmap", "geonames"]
};

const articleMap = new Map(articles.map((item) => [item.id, item]));
articleMap.set(article.id, article);
writeJson(articlesPath, Array.from(articleMap.values()));

console.log(`Upserted ${rawPlaces.length} global places and 1 article.`);
