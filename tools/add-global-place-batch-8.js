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
    indexTajemna: item.score || 73,
    paranormalniAktivita: "kulturni, medialni nebo lokalni tvrzeni",
    historickaDolozenost: "overitelna zakladni identita",
    nebezpecnost: item.risk || "overit lokalne",
    pristupnost: item.access || "overit pred cestou",
    atmosfera: item.atmosphere || 4.0,
    nocniVhodnost: Boolean(item.night),
    vhodneProDeti: item.kids !== false,
    popisy: {
      zahada: `${item.name} je dalsi bod osmého importu MysteryMap: ${item.lead} Profil je vlastni redakcni seed s GPS, zdroji a tematy pro dalsi rozsireni.`,
      historie: "Historicka vrstva slouzi jako zakladni orientace a nema nahrazovat lokalni archivni praci. U velkeho katalogu je dulezite nejprve vytvorit stabilni strukturu a pote ji prohlubovat.",
      legenda: "Legendova vrstva vysvetluje, proc misto pritahuje pozornost: UFO, zakazana zona, nehoda, opustena stavba, filmova krajina, ztracene mesto, ritual nebo prirodni jev.",
      paranormalni: "Paranormalni tvrzeni jsou uvedena jako folklor, popkulturni interpretace nebo medialni narativ. Stranka je oddeluje od historie a praktickych informaci.",
      skepticke: "Skepticky ramec hleda prirodni, historicka, psychologicka, politicka a medialni vysvetleni. To je dulezite hlavne u UFO, katastrof a konspiracnich temat."
    },
    praktickeInfo: `Pred navstevou ${item.name} over aktualni pristup, povoleni, bezpecnost, mistni pravidla a pravni omezeni. GPS je pouze orientacni.`,
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: `Wikipedia: ${item.name}`, url: `https://en.wikipedia.org/wiki/${encodeURIComponent(item.name.replaceAll(" ", "_"))}`, licence: "CC BY-SA / reference discovery" },
      { nazev: `Wikidata search: ${item.name}`, url: `https://www.wikidata.org/w/index.php?search=${encodeURIComponent(item.name)}`, licence: "CC0 / entity discovery" },
      { nazev: "OpenStreetMap search", url: `https://www.openstreetmap.org/search?query=${encodeURIComponent(`${item.name} ${item.country}`)}`, licence: "ODbL / map verification" }
    ],
    pribehy: [
      {
        nazev: "Proc je v osme vlne",
        text: `${item.name} pridava motivy ${themes.join(", ")} a rozsiruje katalog o dalsi samostatnou URL s mapou, zdroji a strukturou pro vyhledavace.`
      },
      {
        nazev: "Dalsi redakcni prace",
        text: "Profil ceka na lokalni zdroje, licencovane fotografie, presnejsi navstevnicke informace a kvalitnejsi lokalizaci pro jazyky mimo cestinu."
      }
    ]
  };
}

const rawPlaces = [
  { name: "Rendlesham Forest", country: "Spojene kralovstvi", continent: "Evropa", lat: 52.0880, lon: 1.4300, score: 84, category: "priroda", themes: ["ufo", "valka"], lead: "Les u byvale vojenske zakladny, spojovany s jednim z nejslavnejsich britskych UFO incidentu." },
  { name: "Warminster Thing", country: "Spojene kralovstvi", continent: "Evropa", lat: 51.2040, lon: -2.1810, score: 78, category: "legenda", themes: ["ufo", "konspirace"], lead: "Mesto spojene s vlnou zvuku a pozorovani UFO v 60. letech, silny pripad medialniho tajemna." },
  { name: "Bonnybridge UFO Triangle", country: "Spojene kralovstvi", continent: "Evropa", lat: 56.0010, lon: -3.8870, score: 79, category: "legenda", themes: ["ufo", "konspirace"], lead: "Skotska oblast s castymi UFO hlasenimi, vhodna pro mapu modernich svedectvi a skeptickeho overovani." },
  { name: "Dulce Base", country: "Spojene staty", continent: "Severni Amerika", lat: 36.9330, lon: -106.9980, score: 83, category: "legenda", themes: ["ufo", "zakazane-zony", "konspirace"], lead: "Mesto spojovane s konspiracni legendou o podzemni zakladne, typicky priklad neovereneho UFO mytu." },
  { name: "Mount Weather", country: "Spojene staty", continent: "Severni Amerika", lat: 39.0640, lon: -77.8880, score: 81, category: "legenda", themes: ["zakazane-zony", "konspirace"], lead: "Vládní nouzove zarizeni, ktere se stalo symbolem skryte infrastruktury a katastrofickych scenaru." },
  { name: "Cheyenne Mountain Complex", country: "Spojene staty", continent: "Severni Amerika", lat: 38.7440, lon: -104.8480, score: 82, category: "podzemi", themes: ["zakazane-zony", "valka"], lead: "Podzemni vojensky komplex v Coloradu, kde studena valka a horske podzemi tvori silny obraz bunkru." },
  { name: "Dugway Proving Ground", country: "Spojene staty", continent: "Severni Amerika", lat: 40.1800, lon: -112.9200, score: 82, category: "legenda", themes: ["zakazane-zony", "konspirace"], lead: "Testovaci oblast v Utahu, casto obalena spekulacemi o chemii, vojenstvi a utajenych experimentech." },
  { name: "Nevada Test Site", country: "Spojene staty", continent: "Severni Amerika", lat: 37.1160, lon: -116.0500, score: 86, category: "katastrofa", themes: ["zakazane-zony", "kosmicka-anomalie"], lead: "Jaderna testovaci krajina Nevady, moderni poustni mapa explozi, radiace a politicke pameti." },
  { name: "Trinity Site", country: "Spojene staty", continent: "Severni Amerika", lat: 33.6773, lon: -106.4754, score: 88, category: "katastrofa", themes: ["kosmicka-anomalie", "valka"], lead: "Misto prvniho jaderneho vybuchu, kde zacal atomovy vek a nova forma lidske katastroficke sily." },
  { name: "Hanford Site", country: "Spojene staty", continent: "Severni Amerika", lat: 46.5500, lon: -119.5000, score: 84, category: "katastrofa", themes: ["zakazane-zony", "valka"], lead: "Jaderny komplex na Columbia River, krajina vyroby plutonia, kontaminace a technicke pameti." },
  { name: "Yucca Mountain", country: "Spojene staty", continent: "Severni Amerika", lat: 36.8530, lon: -116.4260, score: 81, category: "podzemi", themes: ["zakazane-zony", "katastrofa"], lead: "Kontroverzni uloziste jaderneho odpadu, moderni podzemni symbol dlouhodobeho rizika." },
  { name: "WIPP Carlsbad", country: "Spojene staty", continent: "Severni Amerika", lat: 32.3710, lon: -103.7930, score: 80, category: "podzemi", themes: ["zakazane-zony", "katastrofa"], lead: "Hlubinne uloziste jaderneho odpadu v soli, technicky podzemni svet planovany na tisice let." },
  { name: "SL-1 Reactor Site", country: "Spojene staty", continent: "Severni Amerika", lat: 43.5200, lon: -112.8300, score: 82, category: "katastrofa", themes: ["umrti", "technologie"], lead: "Misto smrtelne jaderne havarie v Idahu, temny bod pocatku reaktoroveho veku." },
  { name: "Love Canal", country: "Spojene staty", continent: "Severni Amerika", lat: 43.0800, lon: -78.9500, score: 80, category: "katastrofa", themes: ["katastrofa", "zakazane-zony"], lead: "Oblast chemicke kontaminace v Niagara Falls, symbol environmentálního probuzeni a toxicke pameti." },
  { name: "Times Beach", country: "Spojene staty", continent: "Severni Amerika", lat: 38.5090, lon: -90.6570, score: 79, category: "katastrofa", themes: ["katastrofa", "ztracena-mesta"], lead: "Mesto evakuovane kvuli dioxinu, moderni ztracene misto ekologicke katastrofy." },
  { name: "Waverly Hills Sanatorium", country: "Spojene staty", continent: "Severni Amerika", lat: 38.1300, lon: -85.8420, score: 82, category: "legenda", themes: ["duchove", "umrti"], lead: "Sanatorium v Kentucky s temnou zdravotnickou historii a silnou reputaci paranormalni turistiky." },
  { name: "Rolling Hills Asylum", country: "Spojene staty", continent: "Severni Amerika", lat: 43.0270, lon: -78.1800, score: 78, category: "legenda", themes: ["duchove", "umrti"], lead: "Byvaly ustav v New Yorku, kde socialni historie a opustene prostory tvori typicky strasidelny profil." },
  { name: "Lizzie Borden House", country: "Spojene staty", continent: "Severni Amerika", lat: 41.7010, lon: -71.1550, score: 81, category: "legenda", themes: ["vrazdy", "duchove"], lead: "Dum slavneho americkeho vrazedneho pripadu, kde kriminalni historie prerostla v turistickou legendu." },
  { name: "Bachelor's Grove Cemetery", country: "Spojene staty", continent: "Severni Amerika", lat: 41.6400, lon: -87.7700, score: 80, category: "legenda", themes: ["duchove", "umrti"], lead: "Hrbitov u Chicaga s reputaci zjeveni, svetel a silnym mestskym folklorem." },
  { name: "Clinton Road", country: "Spojene staty", continent: "Severni Amerika", lat: 41.1000, lon: -74.4000, score: 78, category: "legenda", themes: ["duchove", "konspirace"], lead: "Silnice v New Jersey spojovana s urban legends, podivnymi setkanimi a nocni atmosferou." },
  { name: "Bridgewater Triangle", country: "Spojene staty", continent: "Severni Amerika", lat: 41.9300, lon: -71.0500, score: 83, category: "priroda", themes: ["ufo", "duchove"], lead: "Oblast v Massachusetts spojovana s UFO, kryptidy, svetly a mnoha vrstvami folkloru." },
  { name: "Brown Mountain Lights", country: "Spojene staty", continent: "Severni Amerika", lat: 35.9000, lon: -81.8000, score: 80, category: "priroda", themes: ["ufo", "prirodni-anomalie"], lead: "Svetla v horach Severni Karoliny, kde se prirodni optika a folklor opakuji po generace." },
  { name: "Minerva Monster Site", country: "Spojene staty", continent: "Severni Amerika", lat: 40.7290, lon: -81.1060, score: 74, category: "legenda", themes: ["mytologie", "duchove"], lead: "Misto ohijske kryptidni legendy, drobne, ale vhodne pro rozsireni folklorni mapy." },
  { name: "Flatwoods Monster Site", country: "Spojene staty", continent: "Severni Amerika", lat: 38.7200, lon: -80.6500, score: 78, category: "legenda", themes: ["ufo", "mytologie"], lead: "Západovirginsky pripad z roku 1952, kde UFO svedectvi prerostlo v ikonickou lokalni postavu." },
  { name: "Kelly-Hopkinsville Encounter Site", country: "Spojene staty", continent: "Severni Amerika", lat: 36.8800, lon: -87.4900, score: 79, category: "legenda", themes: ["ufo", "konspirace"], lead: "Kentucky UFO incident z roku 1955, jeden z klasickych pripadu moderni mimozemske folklorni mapy." },
  { name: "Kecksburg UFO Site", country: "Spojene staty", continent: "Severni Amerika", lat: 40.1840, lon: -79.4610, score: 79, category: "legenda", themes: ["ufo", "konspirace"], lead: "Pensylvanske misto spojovane s udajnym padem objektu, casto oznacovane jako americky Roswell." },
  { name: "Shag Harbour UFO Site", country: "Kanada", continent: "Severni Amerika", lat: 43.4800, lon: -65.7300, score: 81, category: "legenda", themes: ["ufo", "oceany"], lead: "Kanadsky pobrezni UFO incident z roku 1967, kde svedectvi vstoupilo primo do morské krajiny." },
  { name: "Falcon Lake Incident Site", country: "Kanada", continent: "Severni Amerika", lat: 49.7000, lon: -95.2000, score: 80, category: "priroda", themes: ["ufo", "konspirace"], lead: "Misto kanadskeho UFO incidentu Stefana Michalaka, silny pripad fyzickeho svedectvi a skeptickych otazek." },
  { name: "Sable Island", country: "Kanada", continent: "Severni Amerika", lat: 43.9300, lon: -60.0100, score: 77, category: "ostrov", themes: ["oceany", "zmizeni"], lead: "Odlehla piskova kosa v Atlantiku, ostrov vraku, koni a neustale se meniciho pobrezi." },
  { name: "Frank Slide", country: "Kanada", continent: "Severni Amerika", lat: 49.5960, lon: -114.3900, score: 78, category: "katastrofa", themes: ["katastrofa", "prirodni-anomalie"], lead: "Obri sesuv v Albertě, kde hora pohřbila cast mesta a zanechala kamenne more." },
  { name: "Lituya Bay Megatsunami", country: "Spojene staty", continent: "Severni Amerika", lat: 58.6400, lon: -137.5700, score: 84, category: "katastrofa", themes: ["oceany", "katastrofa"], lead: "Aljasska zatoka s nejvyssim znamym run-up tsunami, priklad extremni prirodni sily." },
  { name: "Oklo Natural Reactor", country: "Gabon", continent: "Afrika", lat: -1.8830, lon: 13.1670, score: 85, category: "priroda", themes: ["kosmicka-anomalie", "prirodni-anomalie"], lead: "Prirodni jaderny reaktor v Gabonu, skutecna geologicka anomalie pusobici jako sci-fi fakt." },
  { name: "Lake Nyos", country: "Kamerun", continent: "Afrika", lat: 6.4380, lon: 10.3000, score: 86, category: "katastrofa", themes: ["katastrofa", "prirodni-anomalie"], lead: "Jezero, ktere uvolnilo smrtici oblak CO2, jedna z nejpodivnejsich prirodnich katastrof." },
  { name: "Lake Monoun", country: "Kamerun", continent: "Afrika", lat: 5.5830, lon: 10.5900, score: 81, category: "katastrofa", themes: ["katastrofa", "prirodni-anomalie"], lead: "Jezero s limnickou erupci pred Nyosem, tichy predobraz neviditelne plynove katastrofy." },
  { name: "Ngorongoro Crater", country: "Tanzanie", continent: "Afrika", lat: -3.1610, lon: 35.5870, score: 77, category: "priroda", themes: ["sopky", "mytologie"], lead: "Obri sopecna kaldera plna zivota, prirodni amfiteatr na hrane geologie a ekologie." },
  { name: "Mount Kilimanjaro", country: "Tanzanie", continent: "Afrika", lat: -3.0670, lon: 37.3550, score: 77, category: "priroda", themes: ["mytologie", "sopky"], lead: "Nejvyssi hora Afriky, sopecny masiv s ledem u rovniku a silnou kulturni symbolikou." },
  { name: "Ol Doinyo Lengai", country: "Tanzanie", continent: "Afrika", lat: -2.7640, lon: 35.9140, score: 82, category: "katastrofa", themes: ["sopky", "ritual"], lead: "Sopka Maasaiu, znama neobvyklou natrokarbonatitovou lavou a posvatnym vyznamem." },
  { name: "Erta Ale", country: "Etiopie", continent: "Afrika", lat: 13.6000, lon: 40.6700, score: 84, category: "katastrofa", themes: ["sopky", "dabel"], lead: "Etiopska sopka s lavovym jezerem, jedna z nejpekelnějších prirodnich scen na planete." },
  { name: "Danakil Depression", country: "Etiopie", continent: "Afrika", lat: 14.2410, lon: 40.3000, score: 86, category: "priroda", themes: ["prirodni-anomalie", "kosmicka-anomalie"], lead: "Extrémne horka a barevna krajina soli, kyselin a sopek, prirodni laboratoř hranic zivota." },
  { name: "Dallol", country: "Etiopie", continent: "Afrika", lat: 14.2420, lon: 40.3000, score: 85, category: "priroda", themes: ["prirodni-anomalie", "kosmicka-anomalie"], lead: "Hydrotermalni pole v Danakilu, jeho barvy a chemie pusobi jako mimozemska krajina." },
  { name: "Sossusvlei", country: "Namibie", continent: "Afrika", lat: -24.7330, lon: 15.3670, score: 76, category: "priroda", themes: ["poust", "prirodni-anomalie"], lead: "Duny a bile panve Namibu, kde stromove kostry a cerveny pisek vytvareji symbol prazdnoty." },
  { name: "Deadvlei", country: "Namibie", continent: "Afrika", lat: -24.7570, lon: 15.2920, score: 79, category: "priroda", themes: ["umrti", "poust"], lead: "Bila hlinena panev s mrtvymi stromy, jedna z nejikonictejsich krajin zastaveneho casu." },
  { name: "Skeleton Coast", country: "Namibie", continent: "Afrika", lat: -20.0000, lon: 13.0000, score: 82, category: "priroda", themes: ["oceany", "umrti"], lead: "Pobřezi vraku, mlhy a pouste, prirodni hranice s velmi temnym jmenem i historii." },
  { name: "Eye of the Sahara", country: "Mauritanie", continent: "Afrika", lat: 21.1242, lon: -11.3956, score: 82, category: "priroda", themes: ["konspirace", "prirodni-anomalie"], lead: "Richat Structure jako samostatny vstup pro konspiracni a geologickou vrstvu oka Sahary." },
  { name: "Ruwenzori Glaciers", country: "Uganda", continent: "Afrika", lat: 0.3860, lon: 29.8730, score: 76, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Ledovce v rovnikove Africe, prirodni paradox a ohrozena horska pamet." },
  { name: "Virunga Volcanoes", country: "DR Kongo", continent: "Afrika", lat: -1.5000, lon: 29.2000, score: 81, category: "katastrofa", themes: ["sopky", "mytologie"], lead: "Sopecny retezec v oblasti Velkych jezer, kde geologie, divocina a konflikt tvori napjatou krajinu." },
  { name: "Kawah Ijen", country: "Indonesie", continent: "Asie", lat: -8.0580, lon: 114.2420, score: 84, category: "katastrofa", themes: ["sopky", "prirodni-anomalie"], lead: "Sopka s modrymi plameny a kyselym jezerem, jedna z nejdrsnejsich prirodnich scen Asie." },
  { name: "Mount Merapi", country: "Indonesie", continent: "Asie", lat: -7.5400, lon: 110.4460, score: 82, category: "katastrofa", themes: ["sopky", "mytologie"], lead: "Aktivni javanska sopka s kralovskymi a ritualnimi vazbami, kde riziko a mytus existuji soucasne." },
  { name: "Krakatoa", country: "Indonesie", continent: "Asie", lat: -6.1020, lon: 105.4230, score: 87, category: "katastrofa", themes: ["sopky", "oceany"], lead: "Sopka slavne erupce roku 1883, globalni katastrofa hluku, tsunami a atmosferickych efektu." },
  { name: "Toba Caldera", country: "Indonesie", continent: "Asie", lat: 2.6840, lon: 98.8750, score: 86, category: "katastrofa", themes: ["sopky", "kosmicka-anomalie"], lead: "Obri sopecna kaldera na Sumatre, spojovana s jednou z nejvetsich erupci kvartéru." },
  { name: "Mount Bromo", country: "Indonesie", continent: "Asie", lat: -7.9420, lon: 112.9530, score: 79, category: "katastrofa", themes: ["sopky", "ritual"], lead: "Sopecna krajina vychodni Javy s morem pisku a ritualy Tenggeru." },
  { name: "Komodo Island", country: "Indonesie", continent: "Asie", lat: -8.5500, lon: 119.4500, score: 78, category: "ostrov", themes: ["mytologie", "prirodni-anomalie"], lead: "Ostrov varanu komodskych, kde realne zvíre pusobi jako draci legenda." },
  { name: "Lake Toba Batak Villages", country: "Indonesie", continent: "Asie", lat: 2.6800, lon: 98.8800, score: 74, category: "legenda", themes: ["mytologie", "sopky"], lead: "Vesnice kolem jezera Toba, kde obri sopecna krajina nese kulturni i katastrofickou vrstvu." },
  { name: "Mayon Volcano", country: "Filipiny", continent: "Asie", lat: 13.2570, lon: 123.6850, score: 80, category: "katastrofa", themes: ["sopky", "mytologie"], lead: "Dokonale kuzelovita filipinska sopka, kde estetika a nebezpeci stoji v jednom obrazu." },
  { name: "Taal Volcano", country: "Filipiny", continent: "Asie", lat: 14.0020, lon: 120.9930, score: 81, category: "katastrofa", themes: ["sopky", "oceany"], lead: "Sopka v jezere na ostrove, vrstvena geografie, ktera sama pusobi jako mapa v mape." },
  { name: "Batanes Stone Houses", country: "Filipiny", continent: "Asie", lat: 20.4500, lon: 121.9700, score: 72, category: "legenda", themes: ["oceany", "mytologie"], lead: "Kamene domy v Batanes, krajina vetru a izolace na hranici Filipin a Tichomori." },
  { name: "Tubbataha Reefs", country: "Filipiny", continent: "Asie", lat: 8.9500, lon: 119.9000, score: 74, category: "ostrov", themes: ["oceany", "prirodni-anomalie"], lead: "Odlehle utesy v Suluskom mori, podmorsky svet mimo beznou pevninskou mapu." },
  { name: "Plain of Reeds", country: "Vietnam", continent: "Asie", lat: 10.7000, lon: 105.7000, score: 70, category: "priroda", themes: ["oceany", "valka"], lead: "Mokrina v delte Mekongu, krajina vody, valecne pameti a obtizne orientace." },
  { name: "Cu Chi Tunnels", country: "Vietnam", continent: "Asie", lat: 11.1420, lon: 106.4640, score: 82, category: "podzemi", themes: ["podzemi", "valka"], lead: "Tunelovy system vietnamske valky, kde podzemi fungovalo jako skryta infrastruktura preziti." },
  { name: "Tam Coc", country: "Vietnam", continent: "Asie", lat: 20.2150, lon: 105.9370, score: 73, category: "priroda", themes: ["podzemi", "prirodni-anomalie"], lead: "Vapencova krajina a vodni jeskyně Ninh Binh, prirodni verze labyrintu na rece." },
  { name: "Bhangarh Fort Extension", country: "Indie", continent: "Asie", lat: 27.0960, lon: 76.2880, score: 84, category: "hrad", themes: ["duchove", "prokleti"], lead: "Samostatny rozsirujici uzel pro pevnost Bhangarh a jeji povest zakazaneho nocniho vstupu." },
  { name: "Dumas Beach", country: "Indie", continent: "Asie", lat: 21.0860, lon: 72.7080, score: 78, category: "legenda", themes: ["duchove", "umrti"], lead: "Plaz v Gudžaratu spojovana s ducharskymi pribehy a cernym piskem." },
  { name: "Dow Hill Kurseong", country: "Indie", continent: "Asie", lat: 26.8800, lon: 88.2800, score: 79, category: "priroda", themes: ["duchove", "mytologie"], lead: "Les a skola v Kurseongu spojovane s indickymi ducharskymi pribehy." },
  { name: "Jatinga Bird Mystery", country: "Indie", continent: "Asie", lat: 25.1627, lon: 93.0319, score: 79, category: "priroda", themes: ["prirodni-anomalie", "skeptic"], lead: "Rozsirujici profil zahady ptaku v Jatince, kde prirodni chovani vyzaduje presny skepticky vyklad." },
  { name: "Magnetic Hill Ladakh", country: "Indie", continent: "Asie", lat: 34.1670, lon: 77.5800, score: 74, category: "priroda", themes: ["prirodni-anomalie", "skeptic"], lead: "Opticka iluze v Ladakhu, kde silnice vypada, jako by odporovala gravitaci." },
  { name: "Lonar Crater Lake", country: "Indie", continent: "Asie", lat: 19.9750, lon: 76.5080, score: 82, category: "katastrofa", themes: ["impakt", "mytologie"], lead: "Impaktni kraterove jezero v čediči, kde kosmicka udalost a posvatne chramy sdileji krajinu." },
  { name: "Dzongri and Kanchenjunga Legends", country: "Indie", continent: "Asie", lat: 27.5000, lon: 88.2000, score: 75, category: "priroda", themes: ["mytologie", "ritual"], lead: "Himalajska oblast se silnou posvatnou krajinou kolem Kanchenjungy." },
  { name: "Mawsmai Cave", country: "Indie", continent: "Asie", lat: 25.2440, lon: 91.7240, score: 74, category: "podzemi", themes: ["podzemi", "prirodni-anomalie"], lead: "Krasova jeskyně v Meghalaya, mensi, ale dobre citelny podzemni bod pro severovychodni Indii." },
  { name: "Siju Cave", country: "Indie", continent: "Asie", lat: 25.3500, lon: 90.7000, score: 75, category: "podzemi", themes: ["podzemi", "prirodni-anomalie"], lead: "Netopyri jeskyně v Garo Hills, prirodni podzemni labyrint mimo hlavni turistickou mapu." },
  { name: "Yana Caves", country: "Indie", continent: "Asie", lat: 14.5900, lon: 74.5600, score: 76, category: "podzemi", themes: ["mytologie", "podzemi"], lead: "Cerne vapencove skaly a jeskyně v Karnatace spojovane s hinduistickou mytologii." }
];

const places = readJson(placesPath);
const byId = new Map(places.map((place) => [place.id, place]));
rawPlaces.map(profile).forEach((place) => byId.set(place.id, place));
writeJson(placesPath, Array.from(byId.values()));

const articles = readJson(articlesPath);
const article = {
  id: "osma-vlna-ufo-zakazane-zony-katastrofy",
  slug: "osma-vlna-ufo-zakazane-zony-katastrofy",
  localizedSlugs: {
    cs: "osma-vlna-ufo-zakazane-zony-katastrofy",
    en: "eighth-wave-ufo-forbidden-zones-disasters",
    de: "achte-welle-ufo-sperrzonen-katastrophen",
    es: "octava-ola-ufo-zonas-prohibidas-catastrofes",
    fr: "huitieme-vague-ovni-zones-interdites-catastrophes"
  },
  title: "Osma vlna: UFO, zakazane zony, katastrofy a prirodni anomalie",
  description: "Osma vlna pridava UFO mista, jaderne a toxicke zony, katastroficke krajiny, sopky, podzemi, opticke iluze a dalsi body s jasnym skeptickym ramcem.",
  category: "katastrofa",
  themes: ["ufo", "zakazane-zony", "katastrofa", "prirodni-anomalie"],
  relatedPlaceIds: rawPlaces.slice(0, 30).map((item) => slugify(item.name)),
  sections: [
    {
      heading: "Proc pridavat i sporna mista",
      body: "UFO a konspiracni lokality lide hledaji, ale prave proto musi byt zpracovane opatrne. MysteryMap oddeluje tvrzeni, popkulturu, historii, zdroje a skepticke vysvetleni."
    },
    {
      heading: "Katastrofy jako silna tematicka vrstva",
      body: "Jaderne testy, toxicke havarie, sopky a prirodni katastrofy vytvareji skutecna mista pameti. Nejsou potreba vymyslene senzace, protoze samotna historie je dost silna."
    },
    {
      heading: "Dalsi smer",
      body: "Po osme vlne ma smysl rozdelit index podle kontinentu nebo lazy-loadovat hledani, pokud katalog poroste k tisicum mist. Datova struktura je na to pripravena."
    }
  ],
  sources: ["wikidata", "wikipedia", "openstreetmap", "usgs-earthquakes"]
};

const articlesById = new Map(articles.map((item) => [item.id, item]));
articlesById.set(article.id, article);
writeJson(articlesPath, Array.from(articlesById.values()));

console.log(`Upserted ${rawPlaces.length} eighth-wave places and 1 article.`);
