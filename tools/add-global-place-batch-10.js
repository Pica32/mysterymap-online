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
      zahada: `${item.name} doplnuje desatou vlnu MysteryMap jako overitelny bod s GPS, tematem a vlastnim redakcnim seedem: ${item.lead}`,
      historie: "Historicka vrstva popisuje zakladni identitu mista a slouzi jako podklad pro pozdejsi lokalni overeni. Profil ma stabilni URL, zdroje a strukturu pro dalsi praci.",
      legenda: "Legendova vrstva ukazuje, proc se misto dostava do mapy: praveke stavby, podzemi, sopecna krajina, posvatna hora, zanikle mesto nebo neobvykly prirodni jev.",
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
  { name: "Derinkuyu Underground City", country: "Turecko", continent: "Asie", lat: 38.3750, lon: 34.7340, score: 86, category: "podzemi", themes: ["podzemi", "ztracena-mesta"], lead: "Vicepatrove podzemni mesto v Kapadokii, kde se obrana, ukryt a legenda spojuji pod zemi." },
  { name: "Kaymakli Underground City", country: "Turecko", continent: "Asie", lat: 38.4620, lon: 34.7510, score: 82, category: "podzemi", themes: ["podzemi", "ztracena-mesta"], lead: "Rozsahle kapadocke podzemi s chodbami, skladisti a obytnymi prostory vytesanymi do tufu." },
  { name: "Cappadocia Fairy Chimneys", country: "Turecko", continent: "Asie", lat: 38.6420, lon: 34.8330, score: 80, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Skalni veze a tufove kuzele, ktere priroda i lidske obyvani promenuji v pohadkovou krajinu." },
  { name: "Gobekli Tepe", country: "Turecko", continent: "Asie", lat: 37.2230, lon: 38.9220, score: 88, category: "legenda", themes: ["archeologie", "ritual"], lead: "Praveky monumentalni areal, ktery meni predstavy o ritualu, lovcich a zacatcich stavebni kultury." },
  { name: "Karahan Tepe", country: "Turecko", continent: "Asie", lat: 37.1000, lon: 39.0500, score: 84, category: "legenda", themes: ["archeologie", "ritual"], lead: "Megaliticke naleziste u Sanliurfy, cast sirsiho pravekeho sveta kamennych sloupu a symbolu." },
  { name: "Mount Nemrut", country: "Turecko", continent: "Asie", lat: 37.9800, lon: 38.7410, score: 85, category: "legenda", themes: ["umrti", "mytologie"], lead: "Vrchol s obrovskymi hlavami soch a kralovskym kultem, kde se politika zmenila v horsky ritual." },
  { name: "Ani Ruins", country: "Turecko", continent: "Asie", lat: 40.5070, lon: 43.5720, score: 83, category: "ztracena-mesta", themes: ["ztracena-mesta", "stredovek"], lead: "Pohranicni ruiny nekdejsiho armenskeho mesta, silna krajina zdi, kostelu a opustene moci." },
  { name: "Sumela Monastery", country: "Turecko", continent: "Asie", lat: 40.6900, lon: 39.6580, score: 80, category: "legenda", themes: ["ritual", "prirodni-anomalie"], lead: "Klaster prilepeny ke skalni stene Pontskych hor, kde vira ziskala dramatickou vyskovou kulisu." },
  { name: "Mount Ararat", country: "Turecko", continent: "Asie", lat: 39.7020, lon: 44.2990, score: 84, category: "legenda", themes: ["mytologie", "pseudoveda"], lead: "Sopka spojovana s biblickym pribehem archy, vedeckymi expedicemi i dlouhou linii spornych tvrzeni." },
  { name: "Pamukkale Travertines", country: "Turecko", continent: "Asie", lat: 37.9130, lon: 29.1180, score: 76, category: "priroda", themes: ["prirodni-anomalie", "ritual"], lead: "Bile travertinove terasy a termalni voda, kde geologie vytvari iluzi zmrzleho vodopadu." },
  { name: "Lalibela Rock Churches", country: "Etiopie", continent: "Afrika", lat: 12.0310, lon: 39.0470, score: 86, category: "podzemi", themes: ["ritual", "podzemi"], lead: "Chramy vytesane do skaly pod uroven terenu, jedna z nejsilnejsich duchovnich krajin Afriky." },
  { name: "Axum Stelae Field", country: "Etiopie", continent: "Afrika", lat: 14.1310, lon: 38.7190, score: 82, category: "legenda", themes: ["archeologie", "umrti"], lead: "Pole monumentalnich stel v Axumu, kde kralovska pamet vystupuje jako kamenny vertikalni kod." },
  { name: "Danakil Depression", country: "Etiopie", continent: "Afrika", lat: 14.2410, lon: 40.3000, score: 84, category: "katastrofa", themes: ["prirodni-anomalie", "sopky"], lead: "Extremni solna a geotermalni krajina, kde barvy, horko a kyseliny pripominaji jinou planetu." },
  { name: "Erta Ale Lava Lake", country: "Etiopie", continent: "Afrika", lat: 13.6000, lon: 40.6700, score: 86, category: "katastrofa", themes: ["sopky", "dabel"], lead: "Aktivni sopka s lavovym jezerem, jeden z nejdramatictejsich obrazu otevrene zeme." },
  { name: "Tiya Stelae", country: "Etiopie", continent: "Afrika", lat: 8.4350, lon: 38.6120, score: 78, category: "legenda", themes: ["archeologie", "umrti"], lead: "Megaliticke stely s vyrytymi symboly, archeologicka krajina pameti a ne zcela jasnych vyznamu." },
  { name: "Lake Natron", country: "Tanzanie", continent: "Afrika", lat: -2.4220, lon: 36.0000, score: 82, category: "priroda", themes: ["prirodni-anomalie", "zvirata"], lead: "Alkalicke jezero s cervenymi odstiny a mineralnim prostredim, ktere zivym tvorum klade tvrde limity." },
  { name: "Ol Doinyo Lengai", country: "Tanzanie", continent: "Afrika", lat: -2.7640, lon: 35.9140, score: 81, category: "katastrofa", themes: ["sopky", "ritual"], lead: "Posvatna sopka Masaju s neobvyklou karbonatitovou lavou, prirodni i kulturni anomalie v jednom." },
  { name: "Great Zimbabwe Ruins", country: "Zimbabwe", continent: "Afrika", lat: -20.2670, lon: 30.9340, score: 83, category: "ztracena-mesta", themes: ["archeologie", "ztracena-mesta"], lead: "Kamenny komplex a centrum nekdejsi moci, ktere dlouho pritahovalo i zkreslene kolonialni vyklady." },
  { name: "Khami Ruins", country: "Zimbabwe", continent: "Afrika", lat: -20.1570, lon: 28.3760, score: 76, category: "ztracena-mesta", themes: ["archeologie", "ztracena-mesta"], lead: "Ruiny naslednickeho mesta po Great Zimbabwe, tichy system kamennych teras a elitni pameti." },
  { name: "Tsodilo Hills", country: "Botswana", continent: "Afrika", lat: -18.7500, lon: 21.7330, score: 82, category: "legenda", themes: ["archeologie", "ritual"], lead: "Skalni umeni a posvatne kopce v Kalahari, misto s dlouhou duchovni a vizualni kontinuitou." },
  { name: "Tassili n'Ajjer", country: "Alzirsko", continent: "Afrika", lat: 25.5000, lon: 8.0000, score: 85, category: "legenda", themes: ["archeologie", "poust"], lead: "Saharstke skalni malby a labyrint piskovcovych forem, casto obalene modernimi spekulacemi." },
  { name: "Hoggar Mountains", country: "Alzirsko", continent: "Afrika", lat: 23.2890, lon: 5.5330, score: 77, category: "priroda", themes: ["poust", "prirodni-anomalie"], lead: "Sopecne hory v Sahare, kde izolace a tvar krajiny vytvareji dojem davne poustni pevnosti." },
  { name: "Richat Structure", country: "Mauritanie", continent: "Afrika", lat: 21.1240, lon: -11.4020, score: 84, category: "priroda", themes: ["kosmicka-anomalie", "prirodni-anomalie"], lead: "Oko Sahary, kruhova geologicka struktura viditelna z vesmiru a casty magnet pseudovedeckych tvrzeni." },
  { name: "Ait Benhaddou", country: "Maroko", continent: "Afrika", lat: 31.0470, lon: -7.1290, score: 78, category: "ztracena-mesta", themes: ["film", "poust"], lead: "Hlinene opevnene sidlo a filmova kulisa, kde historicka architektura prechazi do globalni obrazove pameti." },
  { name: "Volubilis Ruins", country: "Maroko", continent: "Afrika", lat: 34.0710, lon: -5.5540, score: 76, category: "ztracena-mesta", themes: ["archeologie", "ztracena-mesta"], lead: "Rimske ruiny v Maroku, kde mozaiky a sloupy pripominaji posun hranic starovekeho sveta." },
  { name: "Siwa Oracle Temple", country: "Egypt", continent: "Afrika", lat: 29.2030, lon: 25.5190, score: 83, category: "legenda", themes: ["ritual", "poust"], lead: "Oazovy chram spojeny s vestirnou a Alexandrem, silny bod mezi pousti, politikou a proroctvim." },
  { name: "White Desert Egypt", country: "Egypt", continent: "Afrika", lat: 27.3000, lon: 28.2000, score: 78, category: "priroda", themes: ["poust", "prirodni-anomalie"], lead: "Kridove skalni tvary v Zapadni pousti, kde vitr vytvari skoro socharskou mimozemskou krajinu." },
  { name: "Wadi al-Hitan", country: "Egypt", continent: "Afrika", lat: 29.3300, lon: 30.1800, score: 80, category: "priroda", themes: ["archeologie", "oceany"], lead: "Udoli velryb s fosiliemi, ktere uprostred pouste odhaluji davnou promenu more v pevninu." },
  { name: "Bandiagara Escarpment", country: "Mali", continent: "Afrika", lat: 14.3500, lon: -3.6100, score: 82, category: "legenda", themes: ["mytologie", "prirodni-anomalie"], lead: "Skalni stena a dogonska krajina, kde architektura, kosmologie a moderni myty vytvareji husty pribeh." },
  { name: "Timbuktu Manuscript Quarter", country: "Mali", continent: "Afrika", lat: 16.7730, lon: -3.0070, score: 79, category: "legenda", themes: ["politika", "archeologie"], lead: "Mesto rukopisu a poustni ucene pameti, citlive misto mezi historii, konfliktem a zachranou textu." },
  { name: "Djinguereber Mosque", country: "Mali", continent: "Afrika", lat: 16.7737, lon: -3.0086, score: 77, category: "legenda", themes: ["ritual", "poust"], lead: "Hlinena mesita v Timbuktu, kde sakralni architektura drzi tvar navzdory poustnimu klimatu." },
  { name: "Sukur Cultural Landscape", country: "Nigerie", continent: "Afrika", lat: 10.7400, lon: 13.5710, score: 76, category: "legenda", themes: ["archeologie", "ritual"], lead: "Horska kulturni krajina s terasami a pameti moci, mene zname, ale silne mapove misto." },
  { name: "Osun Osogbo Sacred Grove", country: "Nigerie", continent: "Afrika", lat: 7.7550, lon: 4.5520, score: 81, category: "legenda", themes: ["ritual", "mytologie"], lead: "Posvatny haj bohyne Osun, kde se priroda, sochy a zivy ritual setkavaji v chranenem prostoru." },
  { name: "Lope Stone Circles", country: "Gabon", continent: "Afrika", lat: -0.5000, lon: 11.5000, score: 75, category: "legenda", themes: ["archeologie", "prirodni-anomalie"], lead: "Krajina Lope kombinuje prales, savanu a archeologicke stopy dlouheho osidleni." },
  { name: "Meroe Pyramids", country: "Sudan", continent: "Afrika", lat: 16.9370, lon: 33.7490, score: 84, category: "legenda", themes: ["umrti", "archeologie"], lead: "Nubijske pyramidy v pousti, kralovska nekropole s jinou mirou a rytmem nez slavnejsi Egypt." },
  { name: "Jebel Barkal", country: "Sudan", continent: "Afrika", lat: 18.5350, lon: 31.8290, score: 82, category: "legenda", themes: ["ritual", "mytologie"], lead: "Posvatna hora a chramovy komplex, kde skala fungovala jako prirodni symbol bozi pritomnosti." },
  { name: "Sabratha Ruins", country: "Libye", continent: "Afrika", lat: 32.8050, lon: 12.4850, score: 77, category: "ztracena-mesta", themes: ["archeologie", "oceany"], lead: "Rimske pristavni ruiny u Stredozemniho more, kde divadlo a more tvori silnou antickou kulisu." },
  { name: "Leptis Magna", country: "Libye", continent: "Afrika", lat: 32.6390, lon: 14.2910, score: 83, category: "ztracena-mesta", themes: ["archeologie", "ztracena-mesta"], lead: "Velkolepe ruiny rimskeho mesta, jeden z nejpusobivejsich, ale geopoliticky citlivych antickych arealu." },
  { name: "Cyrene Ruins", country: "Libye", continent: "Afrika", lat: 32.8250, lon: 21.8580, score: 79, category: "ztracena-mesta", themes: ["archeologie", "mytologie"], lead: "Recke a rimske ruiny v Kyrenaice, misto filozofie, kultu a postupneho rozpadu anticke vrstvy." },
  { name: "Ghadames Old Town", country: "Libye", continent: "Afrika", lat: 30.1330, lon: 9.5000, score: 78, category: "ztracena-mesta", themes: ["poust", "ztracena-mesta"], lead: "Oazove stare mesto s krytymi ulicemi, kde architektura chrani pred svetlem, horkem a casem." },
  { name: "Socotra Dragon Blood Forest", country: "Jemen", continent: "Asie", lat: 12.4990, lon: 53.9200, score: 82, category: "priroda", themes: ["zvirata", "prirodni-anomalie"], lead: "Endemicka krajina Sokotry s dracincem, ktera vypada jako izolovana evolucni laborator prirody." },
  { name: "Qalat al Bahrain", country: "Bahrajn", continent: "Asie", lat: 26.2330, lon: 50.5210, score: 76, category: "ztracena-mesta", themes: ["archeologie", "ztracena-mesta"], lead: "Archeologicka pevnost a vrstvy Dilmunu, kde obchodni pamet Perzskeho zalivu vystupuje z pisku." },
  { name: "Dilmun Burial Mounds", country: "Bahrajn", continent: "Asie", lat: 26.1300, lon: 50.5200, score: 78, category: "legenda", themes: ["umrti", "archeologie"], lead: "Rozsahla pole mohyl spojena s civilizaci Dilmun, ticha topografie davneho pohrebniho sveta." },
  { name: "Bahla Fort", country: "Oman", continent: "Asie", lat: 22.9640, lon: 57.3000, score: 77, category: "hrad", themes: ["hrad", "poust"], lead: "Hlinena pevnost v Omanu s povestmi o dzinech a silnou obranou siluetou nad oazou." },
  { name: "Al Ula Hegra Tombs", country: "Saudska Arabie", continent: "Asie", lat: 26.8050, lon: 37.9550, score: 84, category: "legenda", themes: ["umrti", "archeologie"], lead: "Nabatejske skalni hrobky v pousti, monumentalni sestra Petry s vlastni tichou nekropoli." },
  { name: "Al Naslaa Rock", country: "Saudska Arabie", continent: "Asie", lat: 26.6500, lon: 37.9170, score: 79, category: "priroda", themes: ["prirodni-anomalie", "pseudoveda"], lead: "Skalni blok rozdeleny presnou puklinou, oblibeny priklad prirodniho jevu obaleny spekulacemi." },
  { name: "Jubbah Rock Art", country: "Saudska Arabie", continent: "Asie", lat: 28.0300, lon: 40.9250, score: 78, category: "legenda", themes: ["archeologie", "poust"], lead: "Skalni umeni v poustni krajine, ktere zachycuje starou pamet lidi, zvirat a zmeneneho klimatu." },
  { name: "Ubar Shisr Ruins", country: "Oman", continent: "Asie", lat: 18.2550, lon: 53.6500, score: 80, category: "ztracena-mesta", themes: ["ztracena-mesta", "poust"], lead: "Ruiny spojovane s legendou o ztracenem meste pouste a obchodnich cestach kadidla." },
  { name: "Bimmah Sinkhole", country: "Oman", continent: "Asie", lat: 23.0360, lon: 59.0710, score: 73, category: "priroda", themes: ["prirodni-anomalie", "podzemi"], lead: "Krasovy zavrt s tyrkysovou vodou, kde mistni legenda i geologie nabizeji dve ruzna vysvetleni." },
  { name: "Jeita Grotto", country: "Libanon", continent: "Asie", lat: 33.9430, lon: 35.6420, score: 78, category: "podzemi", themes: ["podzemi", "prirodni-anomalie"], lead: "Jeskynni system s podzemni rekou a saly, prirodni katedralou v libanonskych horach." },
  { name: "Baalbek Trilithon", country: "Libanon", continent: "Asie", lat: 34.0060, lon: 36.2040, score: 85, category: "legenda", themes: ["archeologie", "pseudoveda"], lead: "Obri kamenne bloky v Baalbeku, kde realne rimske stavitelstvi pritahuje moderni alternativni vyklady." },
  { name: "Byblos Old City", country: "Libanon", continent: "Asie", lat: 34.1230, lon: 35.6510, score: 76, category: "ztracena-mesta", themes: ["archeologie", "oceany"], lead: "Jedno z nejstarsich mest Stredomori, pristavni vrstva pisma, obchodu a dlouhe pameti." },
  { name: "Shibam Wadi Hadhramaut", country: "Jemen", continent: "Asie", lat: 15.9260, lon: 48.6260, score: 80, category: "ztracena-mesta", themes: ["poust", "ztracena-mesta"], lead: "Hlinene vysinne mesto v Hadramautu, casto vnimane jako poustni vertikalni labyrint." },
  { name: "Marib Dam Ruins", country: "Jemen", continent: "Asie", lat: 15.4210, lon: 45.3270, score: 79, category: "ztracena-mesta", themes: ["archeologie", "katastrofa"], lead: "Pozustatky stare prehrady, ktera nesla zemedelskou moc a v legendach i obraz zhrouceni." },
  { name: "Band e Amir Lakes", country: "Afghanistan", continent: "Asie", lat: 34.8400, lon: 67.2300, score: 78, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Modra travertinova jezera v Hindukusi, kde prirodni barva a izolace vytvareji posvatny dojem." },
  { name: "Minaret of Jam", country: "Afghanistan", continent: "Asie", lat: 34.3960, lon: 64.5150, score: 81, category: "ztracena-mesta", themes: ["archeologie", "stredovek"], lead: "Osamely stredoveky minaret v horskem udoli, zbytek moci a pismove ornamentiky na hranici rizika." },
  { name: "Bamiyan Cliffs", country: "Afghanistan", continent: "Asie", lat: 34.8320, lon: 67.8260, score: 83, category: "ztracena-mesta", themes: ["umrti", "archeologie"], lead: "Skalni vyseky a prazdna mista po sochach Buddhu, krajina pameti, niceni a kulturni ztraty." },
  { name: "Takht e Soleyman", country: "Iran", continent: "Asie", lat: 36.6040, lon: 47.2350, score: 82, category: "legenda", themes: ["ritual", "mytologie"], lead: "Posvatny komplex u krateroveho jezera, kde zoroastrijska, sasanska a lidova vrstva drzi jedno misto." },
  { name: "Lut Desert Yardangs", country: "Iran", continent: "Asie", lat: 30.5000, lon: 58.5000, score: 80, category: "priroda", themes: ["poust", "prirodni-anomalie"], lead: "Vetrne hrebety v Dasht-e Lut, prirodni labyrint horka a tvaru na okraji lidske snesitelnosti." },
  { name: "Merv Ruins", country: "Turkmenistan", continent: "Asie", lat: 37.6650, lon: 62.1740, score: 82, category: "ztracena-mesta", themes: ["ztracena-mesta", "stredovek"], lead: "Rozlehle ruiny hedvabne stezky, kde vrstvy mest ukazuji vzestup, obchod i nasilny zlom dejin." },
  { name: "Sulaiman Too Sacred Mountain", country: "Kyrgyzstan", continent: "Asie", lat: 40.5280, lon: 72.7830, score: 79, category: "legenda", themes: ["ritual", "mytologie"], lead: "Posvatna hora nad Osem, poutni krajina jeskyni, vyhlidek a vrstev stredasijske duchovni pameti." }
];

const places = readJson(placesPath);
const byId = new Map(places.map((place) => [place.id, place]));
rawPlaces.map(profile).forEach((place) => byId.set(place.id, place));
writeJson(placesPath, Array.from(byId.values()));

const articles = readJson(articlesPath);
const article = {
  id: "desata-vlna-podzemi-poust-pravek",
  slug: "desata-vlna-podzemi-poust-pravek",
  localizedSlugs: {
    cs: "desata-vlna-podzemi-poust-pravek",
    en: "tenth-wave-underground-desert-prehistory",
    de: "zehnte-welle-untergrund-wueste-vorgeschichte",
    es: "decima-ola-subterraneo-desierto-prehistoria",
    fr: "dixieme-vague-souterrains-desert-prehistoire"
  },
  title: "Desata vlna: podzemi, poust a praveke ritualy",
  description: "Desata vlna rozsiruje mapu o podzemni mesta, saharske anomalie, africke archeologicke lokality, sopecne krajiny a posvatna mista.",
  category: "podzemi",
  themes: ["podzemi", "poust", "archeologie", "ritual"],
  relatedPlaceIds: rawPlaces.slice(0, 30).map((item) => slugify(item.name)),
  sections: [
    {
      heading: "Proc pravek a poust",
      body: "Poustni a praveke lokace dobre nesou napeti mezi overitelnou archeologii a modernimi spekulacemi. Mapa je proto vede oddelene od senzace a dava jim stabilni zdrojovy ramec."
    },
    {
      heading: "Podzemi a sopky",
      body: "Podzemni mesta, kaldery a geotermalni krajiny posiluji tematicke trasy pro navstevniky, kteri hledaji mista s fyzicky citelnou atmosferou a jasnym geografickym bodem."
    },
    {
      heading: "Dalsi krok",
      body: "U techto mist bude nejdulezitejsi doplnit lokalni pravidla pristupu, bezpecnostni upozorneni, puvodni nazvy a licencovane fotografie z otevrenych zdroju."
    }
  ],
  sources: ["wikidata", "wikipedia", "openstreetmap", "wikimedia-commons"]
};

const articlesById = new Map(articles.map((item) => [item.id, item]));
articlesById.set(article.id, article);
writeJson(articlesPath, Array.from(articlesById.values()));

console.log(`Upserted ${rawPlaces.length} tenth-wave places and 1 article.`);
