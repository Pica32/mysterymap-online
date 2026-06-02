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
      zahada: `${item.name} rozsiruje ctrnactou vlnu MysteryMap jako overitelny bod s GPS, tematem a vlastnim redakcnim seedem: ${item.lead}`,
      historie: "Historicka vrstva popisuje zakladni identitu mista a slouzi jako podklad pro pozdejsi lokalni overeni. Profil ma stabilni URL, zdroje a strukturu pro dalsi praci.",
      legenda: "Legendova vrstva ukazuje, proc se misto dostava do mapy: podzemni infrastruktura, pohranicni pevnost, opusteny dul, praveka krajina, ritual nebo zanikla komunita.",
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
  { name: "Dover Western Heights", country: "Spojene kralovstvi", continent: "Evropa", lat: 51.1260, lon: 1.3050, score: 77, category: "hrad", themes: ["hrad", "valka"], lead: "Rozsahly system opevneni nad Doverem, kde tunely, prikopy a pobrezi vytvareji vojensky labyrint." },
  { name: "Dover Fan Bay Deep Shelter", country: "Spojene kralovstvi", continent: "Evropa", lat: 51.1360, lon: 1.3630, score: 78, category: "podzemi", themes: ["podzemi", "valka"], lead: "Podzemni kryt ve skalach bilych utesu, valecna infrastruktura ukryta pod ikonickym pobrezi." },
  { name: "Drakelow Tunnels", country: "Spojene kralovstvi", continent: "Evropa", lat: 52.3860, lon: -2.2360, score: 80, category: "podzemi", themes: ["podzemi", "valka"], lead: "Podzemni tovarna a pozdejsi bunkr, kde se prumysl, studena valka a opustene chodby potkavaji v jednom miste." },
  { name: "Kelvedon Hatch Nuclear Bunker", country: "Spojene kralovstvi", continent: "Evropa", lat: 51.6700, lon: 0.2700, score: 79, category: "zakazane-zony", themes: ["podzemi", "politika"], lead: "Studenovalecny bunkr pod nenapadnym venkovem, pripraveny pro krizove rizeni po jadernem utoku." },
  { name: "Hack Green Secret Bunker", country: "Spojene kralovstvi", continent: "Evropa", lat: 53.0550, lon: -2.5750, score: 77, category: "zakazane-zony", themes: ["podzemi", "politika"], lead: "Byvale radarove a jaderne velitelske misto, dnes muzeum skryte infrastruktury studene valky." },
  { name: "Ramsgate Tunnels", country: "Spojene kralovstvi", continent: "Evropa", lat: 51.3350, lon: 1.4190, score: 76, category: "podzemi", themes: ["podzemi", "valka"], lead: "Civilni krytove tunely pod mestem, kde valecny strach vytvoril paralelni podzemni urbanismus." },
  { name: "Capel Battery", country: "Spojene kralovstvi", continent: "Evropa", lat: 51.0950, lon: 1.2050, score: 73, category: "hrad", themes: ["valka", "oceany"], lead: "Pobrezni baterie u Folkestone, mensi vojensky bod v siti obrany Lamanskeho prulivu." },
  { name: "Ouvrage Hackenberg", country: "Francie", continent: "Evropa", lat: 49.3850, lon: 6.3470, score: 82, category: "podzemi", themes: ["podzemi", "valka"], lead: "Obri pevnost Maginotovy linie, podzemni vlak, kasarny a delostrelectvo jako mesto ukryte v kopci." },
  { name: "Ouvrage Schoenenbourg", country: "Francie", continent: "Evropa", lat: 48.9660, lon: 7.9130, score: 80, category: "podzemi", themes: ["podzemi", "valka"], lead: "Zachovana pevnost Maginotovy linie, kde se betonova obrana meni v podzemni technicky svet." },
  { name: "Fort de Mutzig", country: "Francie", continent: "Evropa", lat: 48.5320, lon: 7.4520, score: 78, category: "hrad", themes: ["hrad", "valka"], lead: "Nemecka pevnost v Alsasku, prechod mezi klasickym opevnenim a moderni industrialni valkou." },
  { name: "Fort Douaumont", country: "Francie", continent: "Evropa", lat: 49.2160, lon: 5.4380, score: 81, category: "hrad", themes: ["valka", "umrti"], lead: "Pevnost u Verdunu, betonovy symbol opotrebovaci valky, hrdinstvi i masove smrti." },
  { name: "Fort Vaux", country: "Francie", continent: "Evropa", lat: 49.2010, lon: 5.4660, score: 79, category: "hrad", themes: ["valka", "umrti"], lead: "Mensi pevnost u Verdunu, kde tunely, zizen a oblehani vytvorily komorni obraz valecne krajnosti." },
  { name: "Vauquois Mine Craters", country: "Francie", continent: "Evropa", lat: 49.2040, lon: 5.0690, score: 80, category: "katastrofa", themes: ["podzemi", "valka"], lead: "Kopec roztrhany minovou valkou, kde podzemni exploze prepsaly vesnici i relief." },
  { name: "La Coupole Bunker", country: "Francie", continent: "Evropa", lat: 50.7060, lon: 2.2430, score: 81, category: "zakazane-zony", themes: ["technologie", "valka"], lead: "Obri nacisticky bunkr pro rakety V2, temna technologicka krajina mezi okupaci a kosmickym vekem." },
  { name: "Blockhaus d Eperlecques", country: "Francie", continent: "Evropa", lat: 50.8060, lon: 2.1470, score: 79, category: "zakazane-zony", themes: ["technologie", "valka"], lead: "Masivni betonovy blokhaus pro zbrane V, kde brutalni logistika zustala jako surova ruina." },
  { name: "Wolfsschlucht II", country: "Francie", continent: "Evropa", lat: 49.4350, lon: 3.5560, score: 78, category: "zakazane-zony", themes: ["valka", "politika"], lead: "Hitleruv polni velitelsky areal u Margivalu, opustena infrastruktura moci ukryta v lesich." },
  { name: "Bunker Valentin", country: "Nemecko", continent: "Evropa", lat: 53.2210, lon: 8.5050, score: 82, category: "zakazane-zony", themes: ["valka", "technologie"], lead: "Nedokoncena ponorkova tovarna u Brem, masivni betonovy doklad nucene prace a pozdni valecne logistiky." },
  { name: "Mittelwerk Dora Tunnels", country: "Nemecko", continent: "Evropa", lat: 51.5350, lon: 10.7480, score: 86, category: "podzemi", themes: ["podzemi", "umrti"], lead: "Podzemni tovarna na rakety V2 spojena s koncentracnim taborem, jedno z nejtemnejsich technickych podzemi Evropy." },
  { name: "Wewelsburg North Tower", country: "Nemecko", continent: "Evropa", lat: 51.6060, lon: 8.6500, score: 83, category: "legenda", themes: ["okultismus", "politika"], lead: "Hrad spojeny s nacistickou symbolikou SS, kde realna historie vyzaduje opatrny a nesenzacni vyklad." },
  { name: "Seelow Heights", country: "Nemecko", continent: "Evropa", lat: 52.5330, lon: 14.3830, score: 77, category: "katastrofa", themes: ["valka", "umrti"], lead: "Bojiste pred Berlinem, otevrena krajina zaverecneho stretnuti, kde vojenska mapa prechazi v pamet ztrat." },
  { name: "Beelitz Heilstatten", country: "Nemecko", continent: "Evropa", lat: 52.2620, lon: 12.9180, score: 80, category: "ztracena-mesta", themes: ["umrti", "duchove"], lead: "Rozsahly nemocnicni areal u Berlina, mezi lecebnou, valecnou historii a opustenou architekturou." },
  { name: "Teufelsberg Listening Station", country: "Nemecko", continent: "Evropa", lat: 52.4970, lon: 13.2410, score: 80, category: "zakazane-zony", themes: ["technologie", "politika"], lead: "Odposlechova stanice na umele hore v Berline, studenovalecny relikt postaveny na troskach mesta." },
  { name: "Project Riese Wlodarz", country: "Polsko", continent: "Evropa", lat: 50.6900, lon: 16.4150, score: 84, category: "podzemi", themes: ["podzemi", "valka"], lead: "Cast podzemniho komplexu Riese v Sovich horach, kde nedokoncene tunely posiluji povalecne spekulace." },
  { name: "Osowka Underground City", country: "Polsko", continent: "Evropa", lat: 50.6670, lon: 16.4270, score: 82, category: "podzemi", themes: ["podzemi", "valka"], lead: "Podzemni chodby Osowky, jedna z nejpusobivejsich casti tajemneho nacistickeho projektu Riese." },
  { name: "Ksiaz Castle Tunnels", country: "Polsko", continent: "Evropa", lat: 50.8420, lon: 16.2920, score: 82, category: "podzemi", themes: ["hrad", "podzemi"], lead: "Tunely pod hradem Ksiaz, kde aristokraticka architektura narazi na valecne plany a nedokoncene podzemi." },
  { name: "Wolfsschanze", country: "Polsko", continent: "Evropa", lat: 54.0790, lon: 21.4930, score: 83, category: "zakazane-zony", themes: ["valka", "politika"], lead: "Vlci doupe ve vychodnim Prusku, betonove ruiny centra nacistickeho rozhodovani a atentatu." },
  { name: "Mamerki Bunkers", country: "Polsko", continent: "Evropa", lat: 54.1470, lon: 21.6810, score: 77, category: "zakazane-zony", themes: ["valka", "politika"], lead: "Zachovaly bunkrovy areal vrchniho veleni, mene znamy soused slavnejsi Wolfsschanze." },
  { name: "Borne Sulinowo Ghost Base", country: "Polsko", continent: "Evropa", lat: 53.5760, lon: 16.5330, score: 78, category: "ztracena-mesta", themes: ["valka", "zakazane-zony"], lead: "Byvale tajne sovetske mesto a vojensky prostor, dlouho vymazany z beznych map." },
  { name: "Patarei Sea Fortress Prison", country: "Estonsko", continent: "Evropa", lat: 59.4510, lon: 24.7380, score: 81, category: "veznice", themes: ["veznice", "politika"], lead: "Pobrezni pevnost a veznice v Tallinnu, kde carsky, nacisticky i sovetsky rezim zanechaly tvrdou stopu." },
  { name: "Rummu Quarry Prison", country: "Estonsko", continent: "Evropa", lat: 59.2260, lon: 24.2050, score: 80, category: "veznice", themes: ["veznice", "oceany"], lead: "Zatopeny lom a byvala veznice, surrealni krajina potopenych budov a tyrkysove vody." },
  { name: "Karosta Prison", country: "Lotyssko", continent: "Evropa", lat: 56.5520, lon: 21.0120, score: 79, category: "veznice", themes: ["veznice", "duchove"], lead: "Vojenska veznice v Liepaji, znama temnou historii, inscenovanymi prohlidkami a ducharskou povesti." },
  { name: "Liepaja Northern Forts", country: "Lotyssko", continent: "Evropa", lat: 56.5860, lon: 21.0100, score: 77, category: "hrad", themes: ["valka", "oceany"], lead: "Rozpadle pobrezni pevnosti u Baltskeho more, betonova obrana postupne pohlcovana vodou a piskem." },
  { name: "Kaunas Ninth Fort", country: "Litva", continent: "Evropa", lat: 54.9430, lon: 23.8700, score: 82, category: "veznice", themes: ["umrti", "valka"], lead: "Pevnost, veznice a misto masovych vrazd u Kaunasu, kde vojenska architektura nese memorialni tihou." },
  { name: "Plokstine Missile Base", country: "Litva", continent: "Evropa", lat: 56.0380, lon: 21.8730, score: 80, category: "zakazane-zony", themes: ["technologie", "politika"], lead: "Sovetska podzemni raketova zakladna v lesich, dnes muzeum studene valky a skryte infrastruktury." },
  { name: "Linnahall Tallinn", country: "Estonsko", continent: "Evropa", lat: 59.4440, lon: 24.7530, score: 76, category: "ztracena-mesta", themes: ["politika", "ztracena-mesta"], lead: "Monumentalni sovetska stavba u more, mezi olympijskou ambici, brutalismem a postupnym chatranim." },
  { name: "Houska Castle Chapel", country: "Cesko", continent: "Evropa", lat: 50.4900, lon: 14.6240, score: 83, category: "hrad", themes: ["dabel", "podzemi"], lead: "Kaple a legenda Housky jako samostatny symbol brany do pekla, kde hradni prostor ziskava myticky stred." },
  { name: "Jihlava Underground", country: "Cesko", continent: "Evropa", lat: 49.3950, lon: 15.5910, score: 78, category: "podzemi", themes: ["podzemi", "duchove"], lead: "Rozsahle historicke chodby pod Jihlavou, spojovane s luminiscencni stenou a mestskymi povestmi." },
  { name: "Znojmo Underground", country: "Cesko", continent: "Evropa", lat: 48.8550, lon: 16.0480, score: 77, category: "podzemi", themes: ["podzemi", "stredovek"], lead: "Stredoveky labyrint chodeb pod Znojmem, obranny a hospodarsky system ukryty pod mestem." },
  { name: "Slavonice Underground", country: "Cesko", continent: "Evropa", lat: 48.9970, lon: 15.3520, score: 75, category: "podzemi", themes: ["podzemi", "stredovek"], lead: "Mestske chodby pod Slavonicemi, mensi podzemni vrstva renesancniho mesta u hranice." },
  { name: "Petrovaradin Fortress Tunnels", country: "Srbsko", continent: "Evropa", lat: 45.2520, lon: 19.8620, score: 80, category: "podzemi", themes: ["hrad", "podzemi"], lead: "Tunelovy system pod pevnosti nad Dunajem, balkanska obranna krajina s podzemnim rozmerem." },
  { name: "Kalemegdan Roman Well", country: "Srbsko", continent: "Evropa", lat: 44.8230, lon: 20.4500, score: 78, category: "podzemi", themes: ["podzemi", "legenda"], lead: "Hluboka studna v belehradske pevnosti, opredena povestmi a mylnym nazvem rimskeho puvodu." },
  { name: "Kotor Fortress Trail", country: "Cerna Hora", continent: "Evropa", lat: 42.4240, lon: 18.7710, score: 78, category: "hrad", themes: ["hrad", "oceany"], lead: "Pevnostni cesta nad Kotorem, kde kamenne zdi, fjordovy zaliv a vycerpavajici vystup tvori jeden obraz." },
  { name: "Rozafa Castle", country: "Albanie", continent: "Evropa", lat: 42.0470, lon: 19.4940, score: 79, category: "hrad", themes: ["hrad", "mytologie"], lead: "Hrad nad Skadarem spojeny s balkanskou legendou o zazdeni, kde pevnost ziskava obetni pribeh." },
  { name: "Butrint Ancient City", country: "Albanie", continent: "Evropa", lat: 39.7460, lon: 20.0200, score: 80, category: "ztracena-mesta", themes: ["archeologie", "oceany"], lead: "Anticke a stredoveke vrstvy u laguny, mesto na hranici vody, obchodu a politickych zmen." },
  { name: "Gjirokaster Fortress", country: "Albanie", continent: "Evropa", lat: 40.0750, lon: 20.1390, score: 78, category: "hrad", themes: ["hrad", "politika"], lead: "Kamenny hrad nad mestem, kde osmanska pevnost, zbrojnice a moderni pamet tvori tvrdou siluetu." },
  { name: "Diros Caves", country: "Recko", continent: "Evropa", lat: 36.6410, lon: 22.3830, score: 78, category: "podzemi", themes: ["podzemi", "prirodni-anomalie"], lead: "Jezerni jeskynni system na Mani, kde lod proplouva podzemnim krajinotvornym tichem." },
  { name: "Franchthi Cave", country: "Recko", continent: "Evropa", lat: 37.4210, lon: 23.1270, score: 78, category: "podzemi", themes: ["podzemi", "archeologie"], lead: "Jeskynni naleziste s dlouhou lidskou pritomnosti, archeologicky archiv pri pobrezi Argolidy." },
  { name: "Mycenae Grave Circle", country: "Recko", continent: "Evropa", lat: 37.7300, lon: 22.7560, score: 82, category: "legenda", themes: ["umrti", "mytologie"], lead: "Kralovske hroby v Mykenach, kde archeologie a homerska imaginace sdileji stejne kamenne pole." },
  { name: "Tiryns Cyclopean Walls", country: "Recko", continent: "Evropa", lat: 37.5990, lon: 22.7990, score: 79, category: "hrad", themes: ["hrad", "mytologie"], lead: "Mohutne mykenske zdi, ktere pozdejsi tradice vysvetlovala praci kyklopu." },
  { name: "Derbent Fortress", country: "Rusko", continent: "Evropa", lat: 42.0520, lon: 48.2970, score: 80, category: "hrad", themes: ["hrad", "stredovek"], lead: "Kaspicka brana a pevnostni system Derbentu, uzky pruchod mezi horami a morem s dlouhou strategickou pameti." },
  { name: "Stac Pollaidh Ridge", country: "Spojene kralovstvi", continent: "Evropa", lat: 58.0450, lon: -5.2090, score: 74, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Zubaty hreben v severnim Skotsku, kde eroze, mlha a keltska krajina vytvareji dramaticky prirodni profil." },
  { name: "Cwmystwyth Mines", country: "Spojene kralovstvi", continent: "Evropa", lat: 52.3520, lon: -3.8000, score: 76, category: "ztracena-mesta", themes: ["podzemi", "technologie"], lead: "Opustene velsske doly v horskem udoli, ticha industrialni krajina stol a ruin." },
  { name: "Fort Eben Emael", country: "Belgie", continent: "Evropa", lat: 50.7970, lon: 5.6810, score: 80, category: "podzemi", themes: ["hrad", "valka"], lead: "Belgicka pevnost u Albertova kanalu, podzemni obranny komplex spojeny s dramatickym zacatkem valky na zapade." }
];

const places = readJson(placesPath);
const byId = new Map(places.map((place) => [place.id, place]));
rawPlaces.map(profile).forEach((place) => byId.set(place.id, place));
writeJson(placesPath, Array.from(byId.values()));

const articles = readJson(articlesPath);
const article = {
  id: "ctrnacta-vlna-podzemi-pevnosti-studena-valka",
  slug: "ctrnacta-vlna-podzemi-pevnosti-studena-valka",
  localizedSlugs: {
    cs: "ctrnacta-vlna-podzemi-pevnosti-studena-valka",
    en: "fourteenth-wave-underground-fortresses-cold-war",
    de: "vierzehnte-welle-untergrund-festungen-kalter-krieg",
    es: "decimocuarta-ola-subterraneos-fortalezas-guerra-fria",
    fr: "quatorzieme-vague-souterrains-forteresses-guerre-froide"
  },
  title: "Ctrnacta vlna: podzemi, pevnosti a studena valka",
  description: "Ctrnacta vlna pridava evropske pevnosti, bunkry, podzemni tovarny, mestske chodby, pobrezni baterie a citliva mista valecne i povalecne pameti.",
  category: "podzemi",
  themes: ["podzemi", "hrad", "valka", "technologie"],
  relatedPlaceIds: rawPlaces.slice(0, 30).map((item) => slugify(item.name)),
  sections: [
    {
      heading: "Proc podzemi",
      body: "Podzemni a pevnostni mista jsou pro mapu cenne, protoze kombinuji presny fyzicky prostor, silnou atmosferu a overitelne zdroje. Zaroven vyzaduji strizlivy jazyk u mist spojovanych s utrpenim."
    },
    {
      heading: "Studena valka a pevnosti",
      body: "Bunkry, raketove zakladny a pobrezni opevneni ukazuji, jak politika a technologie formovaly krajinu. V katalogu davaji protivahu klasickym legendam a prirodnim anomalim."
    },
    {
      heading: "Dalsi krok",
      body: "U ctrnacte vlny bude vhodne doplnit spravcovske zdroje, aktualni pristupnost a lokalni varovani, protoze cast mist je v ruinach, lesich nebo technicky narocnem podzemi."
    }
  ],
  sources: ["wikidata", "wikipedia", "openstreetmap", "wikimedia-commons"]
};

const articlesById = new Map(articles.map((item) => [item.id, item]));
articlesById.set(article.id, article);
writeJson(articlesPath, Array.from(articlesById.values()));

console.log(`Upserted ${rawPlaces.length} fourteenth-wave places and 1 article.`);
