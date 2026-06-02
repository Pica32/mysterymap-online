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
    paranormalniAktivita: item.activity || "kulturni a lokalni tvrzeni",
    historickaDolozenost: "overitelna zakladni identita",
    nebezpecnost: item.risk || "overit lokalne",
    pristupnost: item.access || "overit pred cestou",
    atmosfera: item.atmosphere || 4.0,
    nocniVhodnost: Boolean(item.night),
    vhodneProDeti: item.kids !== false,
    popisy: {
      zahada: `${item.name} rozsiruje MysteryMap jako dalsi overitelny bod s GPS a jasnou verejnou asociaci: ${item.lead} Profil neni kopie cizi databaze, ale vlastni redakcni seed.`,
      historie: "Historicka vrstva uvadi zakladni identitu mista a drzi zdrojovou stopu pro dalsi overovani. U velke expanze je dulezite, aby kazdy bod mel stabilni URL, souradnice a kontrolovatelne zdroje.",
      legenda: "Legendova vrstva zachycuje, proc misto pritahuje vypraveni: ztracene mesto, posvatny prostor, katastrofa, anomalie, popkulturni obraz, opustena stavba nebo spor o vyklad.",
      paranormalni: "Paranormalni nebo zahadova vrstva je prezentovana jako tvrzeni a kulturni interpretace. Muze zahrnovat zjeveni, svetla, prokleti, posvatnou atmosferu, zmizeni, zakazane vstupy nebo silny psychologicky dojem.",
      skepticke: "Skepticky ramec oddeluje fakta od legend. Pocita s geologii, archeologii, optikou, medialnim opakovanim, turistickym marketingem, historickou traumou a lidskou predstavivosti."
    },
    praktickeInfo: `Pred navstevou ${item.name} over aktualni pristup, bezpecnost, ochranu pamatky, mistni pravidla a povoleni. Souradnice slouzi k orientaci, ne jako pravo vstupu.`,
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: `Wikipedia: ${item.name}`, url: `https://en.wikipedia.org/wiki/${encodeURIComponent(item.name.replaceAll(" ", "_"))}`, licence: "CC BY-SA / reference discovery" },
      { nazev: `Wikidata search: ${item.name}`, url: `https://www.wikidata.org/w/index.php?search=${encodeURIComponent(item.name)}`, licence: "CC0 / entity discovery" },
      { nazev: "OpenStreetMap search", url: `https://www.openstreetmap.org/search?query=${encodeURIComponent(`${item.name} ${item.country}`)}`, licence: "ODbL / map verification" }
    ],
    pribehy: [
      {
        nazev: "Dalsi globalni bod",
        text: `${item.name} pridava do mapy dalsi region a motivy ${themes.join(", ")}. Je to zaklad pro vyhledavani, tematicke landing pages a pozdejsi lokalni clanek.`
      },
      {
        nazev: "Redakcni dalsi krok",
        text: "U dalsi editace se doplni lokalni zdroje, fotky s jasnou licenci, presna pravidla navstevy, alternativni nazvy a lepsi preklady pro vsechny jazykove verze."
      }
    ]
  };
}

const rawPlaces = [
  { name: "Axum", country: "Etiopie", continent: "Afrika", lat: 14.1319, lon: 38.7192, score: 82, category: "ztracena-mesta", themes: ["mytologie", "ritual"], lead: "Stare kralovske mesto se stelami, hrobkami a naboženskou tradici, kde archeologie prechazi v posvatnou pamet." },
  { name: "Fasil Ghebbi", country: "Etiopie", continent: "Afrika", lat: 12.6073, lon: 37.4699, score: 77, category: "hrad", themes: ["hrad", "ztracena-mesta"], lead: "Gondarsky kralovsky komplex s pevnostmi a palaci, kde africka monarchicka architektura vytvari temer myticke mesto." },
  { name: "Olduvai Gorge", country: "Tanzanie", continent: "Afrika", lat: -2.9950, lon: 35.3530, score: 80, category: "priroda", themes: ["mytologie", "archeologie"], lead: "Rokle v oblasti Ngorongoro, kde nalezy lidskych predku davaji krajine hlubokou evolucni pamet." },
  { name: "Zanzibar Stone Town", country: "Tanzanie", continent: "Afrika", lat: -6.1622, lon: 39.1921, score: 75, category: "ztracena-mesta", themes: ["oceany", "umrti"], lead: "Historicke svahilske mesto, kde obchod, more, kolonialni pamet a uzke ulice tvori mnohovrstevny labyrint." },
  { name: "Great Mosque of Kairouan", country: "Tunisko", continent: "Afrika", lat: 35.6817, lon: 10.1047, score: 76, category: "legenda", themes: ["ritual", "mytologie"], lead: "Jedno z nejdulezitejsich islámských mist severni Afriky, kde architektura a poutni tradice tvori pevny duchovni uzel." },
  { name: "Carthage", country: "Tunisko", continent: "Afrika", lat: 36.8528, lon: 10.3233, score: 83, category: "ztracena-mesta", themes: ["ztracena-mesta", "valka"], lead: "Ruiny mocnosti zničene Rimem, kde historicka katastrofa a legenda Hannibala vytvareji velke tema padu." },
  { name: "Dougga", country: "Tunisko", continent: "Afrika", lat: 36.4236, lon: 9.2203, score: 75, category: "ztracena-mesta", themes: ["ztracena-mesta", "mytologie"], lead: "Zachovane anticke mesto v tuniske krajine, kde urbanismus a ruiny vytvareji citelny otisk minulosti." },
  { name: "Matmata", country: "Tunisko", continent: "Afrika", lat: 33.5444, lon: 9.9669, score: 77, category: "filmova-lokace", themes: ["film", "podzemi"], lead: "Podzemni obydli a slavna filmova krajina, kde realna architektura splynula s obrazem vzdalenych planet." },
  { name: "Leptis Magna", country: "Libye", continent: "Afrika", lat: 32.6381, lon: 14.2906, score: 82, category: "ztracena-mesta", themes: ["ztracena-mesta", "valka"], lead: "Monumentalni rimske mesto na pobrezi Libye, jehoz rozmer pusobi jako zachovany fragment zanikleho impéria." },
  { name: "Sabratha", country: "Libye", continent: "Afrika", lat: 32.8053, lon: 12.4850, score: 78, category: "ztracena-mesta", themes: ["ztracena-mesta", "oceany"], lead: "Pobrezni anticke ruiny s divadlem, kde more a architektura vytvareji silne obrazovou pamatku." },
  { name: "Tadrart Acacus", country: "Libye", continent: "Afrika", lat: 24.8333, lon: 10.3333, score: 81, category: "priroda", themes: ["ritual", "mytologie"], lead: "Saharska krajina skalniho umeni, kde obrazova pamet ukazuje davno odlisny svet pouste." },
  { name: "Bandiagara Escarpment", country: "Mali", continent: "Afrika", lat: 14.3333, lon: -3.4167, score: 80, category: "priroda", themes: ["mytologie", "ritual"], lead: "Dogonska krajina utesu, vesnic a posvatnych vypraveni, casto zkreslovana modernimi alternativnimi teoriemi." },
  { name: "Lake Retba", country: "Senegal", continent: "Afrika", lat: 14.8381, lon: -17.2347, score: 74, category: "priroda", themes: ["prirodni-anomalie", "oceany"], lead: "Ruzove slane jezero u Dakaru, kde prirodni chemie vytvari vizualne nepravdepodobny obraz." },
  { name: "Mount Nyiragongo", country: "DR Kongo", continent: "Afrika", lat: -1.5220, lon: 29.2490, score: 84, category: "katastrofa", themes: ["sopky", "prirodni-anomalie"], lead: "Aktivni sopka s lavovym jezerem, kde krasa a riziko existuji v tesne blizkosti osidlenych oblasti." },
  { name: "Rwenzori Mountains", country: "Uganda", continent: "Afrika", lat: 0.3860, lon: 29.8730, score: 76, category: "priroda", themes: ["mytologie", "prirodni-anomalie"], lead: "Mesični hory s ledovci u rovniku, mlhou a starou predstavou zdroju Nilu." },
  { name: "Mapungubwe", country: "Jizni Afrika", continent: "Afrika", lat: -22.2130, lon: 29.3760, score: 79, category: "ztracena-mesta", themes: ["ztracena-mesta", "mytologie"], lead: "Archeologicka krajina stareho kralovstvi, kde zlate artefakty a kopec moci tvori silny historicky motiv." },
  { name: "Thulamela", country: "Jizni Afrika", continent: "Afrika", lat: -22.4330, lon: 31.2000, score: 76, category: "ztracena-mesta", themes: ["ztracena-mesta", "mytologie"], lead: "Kamenny komplex v Krugerove oblasti, cast zapomenute site jihoafrickych kralovskych mist." },
  { name: "Makgadikgadi Pans", country: "Botswana", continent: "Afrika", lat: -20.5000, lon: 25.5000, score: 76, category: "priroda", themes: ["prirodni-anomalie", "kosmicka-anomalie"], lead: "Obrovske solne panve po davnem jezere, kde horizont a prazdnota vytvareji skoro mimozemsky prostor." },
  { name: "Vredefort Dome", country: "Jizni Afrika", continent: "Afrika", lat: -27.0000, lon: 27.5000, score: 82, category: "katastrofa", themes: ["impakt", "kosmicka-anomalie"], lead: "Jedna z nejvetsich znamych impaktnich struktur na Zemi, kosmicka katastrofa zapsana do krajiny." },
  { name: "Victoria Falls", country: "Zambie", continent: "Afrika", lat: -17.9243, lon: 25.8572, score: 77, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Vodopady na Zambezi s ohromujici mlhou a zvukem, prirodni hranice mezi krajinou a mytem." },
  { name: "Mesa Verde", country: "Spojene staty", continent: "Severni Amerika", lat: 37.2309, lon: -108.4618, score: 80, category: "ztracena-mesta", themes: ["ztracena-mesta", "mytologie"], lead: "Skalni obydli predku Pueblo, kde opustene stavby ve stene kanonu vytvareji velmi silny obraz zmizeni." },
  { name: "Chaco Canyon", country: "Spojene staty", continent: "Severni Amerika", lat: 36.0606, lon: -107.9617, score: 83, category: "ztracena-mesta", themes: ["kosmicka-anomalie", "ritual"], lead: "Krajina velkych domu, cest a astronomickych vazeb, jeden z nejsilnejsich archeologickych uzlu jihozapadu USA." },
  { name: "Cahokia Mounds", country: "Spojene staty", continent: "Severni Amerika", lat: 38.6608, lon: -90.0618, score: 81, category: "ztracena-mesta", themes: ["ztracena-mesta", "ritual"], lead: "Mohylove mesto u Mississippi, ktere ukazuje rozsah predkolumbovske urbanizace Severni Ameriky." },
  { name: "Serpent Mound", country: "Spojene staty", continent: "Severni Amerika", lat: 39.0267, lon: -83.4306, score: 80, category: "legenda", themes: ["ritual", "kosmicka-anomalie"], lead: "Hadovita zemni mohyla v Ohiu, kde tvar, krajina a mozne astronomicke vazby zivi interpretace." },
  { name: "Point Pleasant Mothman", country: "Spojene staty", continent: "Severni Amerika", lat: 38.8445, lon: -82.1371, score: 83, category: "legenda", themes: ["ufo", "prirodni-anomalie"], lead: "Mesto spojene s moderni legendou Mothmana, pozorovanimi a katastrofickou ozvenou mostu Silver Bridge." },
  { name: "Salem Witch Trials Memorial", country: "Spojene staty", continent: "Severni Amerika", lat: 42.5229, lon: -70.8913, score: 82, category: "katastrofa", themes: ["vrazdy", "carodejnictvi"], lead: "Pametni misto procesů v Salemu, kde strach, vira a socialni panika vytvorily trvale varovani." },
  { name: "Amityville Horror House", country: "Spojene staty", continent: "Severni Amerika", lat: 40.6668, lon: -73.4145, score: 78, category: "legenda", themes: ["vrazdy", "duchove"], lead: "Dum spojeny s realnou vrazdou i medialne silnou hororovou legendou, kde je nutny opatrny skepticky ramec." },
  { name: "Skinwalker Ranch", country: "Spojene staty", continent: "Severni Amerika", lat: 40.2580, lon: -109.8870, score: 86, category: "legenda", themes: ["ufo", "konspirace"], lead: "Soukromy ranč v Utahu spojovany s UFO, anomaliemi a moderni paranormalni popkulturou." },
  { name: "Roswell UFO Museum", country: "Spojene staty", continent: "Severni Amerika", lat: 33.3943, lon: -104.5229, score: 82, category: "legenda", themes: ["ufo", "konspirace"], lead: "Mesto a muzeum kolem roswellského incidentu, kde vojenska historie prešla v globalni UFO mytus." },
  { name: "Superstition Mountains", country: "Spojene staty", continent: "Severni Amerika", lat: 33.4283, lon: -111.3389, score: 82, category: "priroda", themes: ["poklad", "zmizeni"], lead: "Arizonske hory spojovane s legendou ztraceneho dolu Lost Dutchman a nebezpecnymi vypravami." },
  { name: "Blythe Intaglios", country: "Spojene staty", continent: "Severni Amerika", lat: 33.8000, lon: -114.5333, score: 77, category: "legenda", themes: ["ritual", "kosmicka-anomalie"], lead: "Obri geoglyfy v kalifornske pousti, kde obraz je citelny hlavne shora a prirozene pritahuje zahady." },
  { name: "Mystery Spot", country: "Spojene staty", continent: "Severni Amerika", lat: 37.0167, lon: -122.0028, score: 73, category: "legenda", themes: ["prirodni-anomalie", "skeptic"], lead: "Turisticka gravitacni atrakce u Santa Cruz, dobra pro vysvetleni optiky, naklonu a ocekavani." },
  { name: "Coral Castle", country: "Spojene staty", continent: "Severni Amerika", lat: 25.5007, lon: -80.4456, score: 79, category: "legenda", themes: ["konspirace", "mytologie"], lead: "Kamenny komplex na Floride vytvoreny Edwardem Leedskalninem, casto obaleny legendou o tajne sile." },
  { name: "Georgia Guidestones Site", country: "Spojene staty", continent: "Severni Amerika", lat: 34.2319, lon: -82.8942, score: 81, category: "legenda", themes: ["tajne-spolecnosti", "konspirace"], lead: "Misto po kontroverznim monumentu, ktery se stal magnetem konspiracnich teorii a byl znicen." },
  { name: "Helltown Ohio", country: "Spojene staty", continent: "Severni Amerika", lat: 41.2420, lon: -81.5460, score: 77, category: "legenda", themes: ["duchove", "konspirace"], lead: "Oblast kolem Boston Township opredena modernimi urban legends o opustenych cestach a zakazanych zonach." },
  { name: "Centralia", country: "Spojene staty", continent: "Severni Amerika", lat: 40.8034, lon: -76.3405, score: 83, category: "katastrofa", themes: ["ztracena-mesta", "dabel"], lead: "Pensylvanske mesto nad horicim dulnim pozarem, kde realna katastrofa vytvorila pekelnou krajinu." },
  { name: "Ringing Rocks Park", country: "Spojene staty", continent: "Severni Amerika", lat: 40.5635, lon: -75.1266, score: 76, category: "priroda", themes: ["prirodni-anomalie", "skeptic"], lead: "Balvanove pole v Pensylvanii, kde nektere kameny pri uderu zvoni a vyvolavaji dojem prirodni anomálie." },
  { name: "Medicine Wheel Wyoming", country: "Spojene staty", continent: "Severni Amerika", lat: 44.8266, lon: -107.9218, score: 79, category: "legenda", themes: ["ritual", "kosmicka-anomalie"], lead: "Kamenny kruh v Bighorn Mountains, posvatne misto s moznymi astronomickymi souvislostmi." },
  { name: "Hovenweep", country: "Spojene staty", continent: "Severni Amerika", lat: 37.3833, lon: -109.0800, score: 76, category: "ztracena-mesta", themes: ["ztracena-mesta", "mytologie"], lead: "Vezove ruiny predku Pueblo na hranici Utahu a Colorada, kde stavby hlidaji okraje kanonu." },
  { name: "Fajada Butte", country: "Spojene staty", continent: "Severni Amerika", lat: 36.0630, lon: -107.9670, score: 82, category: "priroda", themes: ["kosmicka-anomalie", "ritual"], lead: "Butte v Chaco Canyon spojovana se slunecnim daggerem a presnym vztahem svetla ke kameni." },
  { name: "Goblin Valley", country: "Spojene staty", continent: "Severni Amerika", lat: 38.5666, lon: -110.7070, score: 75, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Krajina piskovcovych hoodoo utvaru v Utahu, kde eroze vytvari postavy jako z jineho sveta." },
  { name: "Headless Valley", country: "Kanada", continent: "Severni Amerika", lat: 61.2500, lon: -124.5000, score: 82, category: "priroda", themes: ["zmizeni", "vrazdy"], lead: "Oblast v udoli Nahanni spojovana s drsnymi pribehy prospektoru, izolaci a tajemnymi smrtmi." },
  { name: "Screaming Tunnel", country: "Kanada", continent: "Severni Amerika", lat: 43.0900, lon: -79.0950, score: 76, category: "podzemi", themes: ["duchove", "legenda"], lead: "Tunel u Niagara Falls s moderni legendou o krici a ohni, typicky priklad lokalni urban legend." },
  { name: "Peggy's Point Lighthouse", country: "Kanada", continent: "Severni Amerika", lat: 44.4920, lon: -63.9189, score: 72, category: "legenda", themes: ["oceany", "duchove"], lead: "Majak v Nove Skotii, kde namorni krajina a tragicke pribehy vytvareji tiche pobrezni tajemno." },
  { name: "Great Serpent Mound Ontario", country: "Kanada", continent: "Severni Amerika", lat: 44.1700, lon: -78.1400, score: 74, category: "legenda", themes: ["ritual", "mytologie"], lead: "Mohylove misto v Ontariu spojovane s puvodni krajinou a hadim motivem." },
  { name: "Poverty Point", country: "Spojene staty", continent: "Severni Amerika", lat: 32.6367, lon: -91.4075, score: 79, category: "legenda", themes: ["ritual", "ztracena-mesta"], lead: "Staroveke zemni dilo v Louisiane, kde geometrie valu a obchodni site ukazuji slozitou predhistorickou spolecnost." },
  { name: "Watson Brake", country: "Spojene staty", continent: "Severni Amerika", lat: 32.3200, lon: -92.0500, score: 75, category: "legenda", themes: ["ritual", "mytologie"], lead: "Jeden z nejstarsich mohylovych komplexu v Severni Americe, silny bod pro hlubokou casovou mapu." },
  { name: "Mammoth Cave", country: "Spojene staty", continent: "Severni Amerika", lat: 37.1862, lon: -86.1005, score: 78, category: "podzemi", themes: ["podzemi", "prirodni-anomalie"], lead: "Nejdelsi znamy jeskynni system sveta, kde samotny rozsah vytvari pocit nekonecneho podzemi." },
  { name: "Ruby Falls", country: "Spojene staty", continent: "Severni Amerika", lat: 35.0192, lon: -85.3394, score: 73, category: "podzemi", themes: ["podzemi", "prirodni-anomalie"], lead: "Podzemni vodopad v Lookout Mountain, turisticky citelny priklad prirodniho divadla pod zemi." },
  { name: "Garden of the Gods", country: "Spojene staty", continent: "Severni Amerika", lat: 38.8738, lon: -104.8860, score: 74, category: "priroda", themes: ["mytologie", "prirodni-anomalie"], lead: "Rude skalni veze v Coloradu, kde geologie a jmeno vytvari prirozeny mytologicky ram." },
  { name: "Crater Lake", country: "Spojene staty", continent: "Severni Amerika", lat: 42.9446, lon: -122.1090, score: 77, category: "katastrofa", themes: ["sopky", "mytologie"], lead: "Jezero v kaldere sopky Mazama, kde obri erupce zanechala dokonaly modry kruh." },
  { name: "Lava Beds National Monument", country: "Spojene staty", continent: "Severni Amerika", lat: 41.7590, lon: -121.5170, score: 76, category: "podzemi", themes: ["sopky", "podzemi"], lead: "Lávove tunely v severni Kalifornii, kde podzemni vulkanicka krajina tvori prirodni labyrint." },
  { name: "Mauna Loa", country: "Spojene staty", continent: "Severni Amerika", lat: 19.4750, lon: -155.6080, score: 78, category: "katastrofa", themes: ["sopky", "mytologie"], lead: "Obri havajska sopka, kde geologie, posvatna krajina a moderni monitoring tvori silny profil." },
  { name: "Waipoua Forest", country: "Novy Zeland", continent: "Oceanie", lat: -35.6500, lon: 173.5500, score: 76, category: "priroda", themes: ["mytologie", "ritual"], lead: "Les obrich kauri stromu, kde Tane Mahuta a maorska tradice davaji krajine posvatny rozmer." },
  { name: "Rotorua Geothermal Fields", country: "Novy Zeland", continent: "Oceanie", lat: -38.1368, lon: 176.2497, score: 77, category: "priroda", themes: ["prirodni-anomalie", "sopky"], lead: "Geotermalni krajina pary, siry a barevnych jezirek, kde Zeme pusobi zive a neklidne." },
  { name: "White Island", country: "Novy Zeland", continent: "Oceanie", lat: -37.5200, lon: 177.1800, score: 84, category: "katastrofa", themes: ["sopky", "umrti"], lead: "Aktivni vulkanicky ostrov Whakaari, kde krasa sopky stoji vedle tragickeho rizika." },
  { name: "Lake Taupo", country: "Novy Zeland", continent: "Oceanie", lat: -38.8000, lon: 175.9000, score: 78, category: "katastrofa", themes: ["sopky", "prirodni-anomalie"], lead: "Jezero v obri sopecne kaldere, pamet jedne z nejvetsich erupci poslednich tisicileti." },
  { name: "Waimangu Volcanic Valley", country: "Novy Zeland", continent: "Oceanie", lat: -38.2850, lon: 176.4000, score: 77, category: "katastrofa", themes: ["sopky", "prirodni-anomalie"], lead: "Mlada geotermalni krajina vznikla po erupci Tarawery, kde je katastrofa citelna v terenu." },
  { name: "Lake Mungo", country: "Australie", continent: "Oceanie", lat: -33.7500, lon: 143.0000, score: 80, category: "priroda", themes: ["umrti", "mytologie"], lead: "Sucha jezerni krajina s jednymi z nejdulezitejsich dokladu davne lidske pritomnosti v Australii." },
  { name: "Bungle Bungle Range", country: "Australie", continent: "Oceanie", lat: -17.5000, lon: 128.5000, score: 76, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Pruhovane piskovcove kupole v Purnululu, krajina s geologickou i kulturni hloubkou." },
  { name: "Devil's Pool Victoria Falls", country: "Zambie", continent: "Afrika", lat: -17.9240, lon: 25.8570, score: 78, category: "priroda", themes: ["prirodni-anomalie", "nebezpeci"], lead: "Prirazena cast Viktoriinych vodopadu, kde hranice vody a propasti vytvari velmi fyzicke napeti." },
  { name: "Chocolate Hills", country: "Filipiny", continent: "Asie", lat: 9.9167, lon: 124.1667, score: 78, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Stovky kuzelovitych kopcu na Boholu, kde opakovany tvar krajiny vyvolava prirodni i legendární vysvetleni." },
  { name: "Banaue Rice Terraces", country: "Filipiny", continent: "Asie", lat: 16.9190, lon: 121.0590, score: 75, category: "legenda", themes: ["ritual", "mytologie"], lead: "Horske terasy Ifugao, kde krajina funguje jako monument prace, predku a vodniho systemu." },
  { name: "Sagada Hanging Coffins", country: "Filipiny", continent: "Asie", lat: 17.0833, lon: 120.9000, score: 81, category: "legenda", themes: ["umrti", "ritual"], lead: "Rakve pripevnene ke skalam, kde pohrebni praxe primo meni stenu utesu v pametni misto." },
  { name: "Mount Pinatubo", country: "Filipiny", continent: "Asie", lat: 15.1429, lon: 120.3496, score: 80, category: "katastrofa", themes: ["sopky", "katastrofa"], lead: "Sopka spojena s obri erupci roku 1991 a krajinou, kde katastrofa vytvorila kraterove jezero." },
  { name: "Phong Nha Cave", country: "Vietnam", continent: "Asie", lat: 17.5333, lon: 106.1500, score: 78, category: "podzemi", themes: ["podzemi", "prirodni-anomalie"], lead: "Krasovy jeskynni system ve Vietnamu, kde reka a vapencove prostory tvori podzemni svet." },
  { name: "Son Doong Cave", country: "Vietnam", continent: "Asie", lat: 17.4569, lon: 106.2871, score: 86, category: "podzemi", themes: ["podzemi", "prirodni-anomalie"], lead: "Obri jeskynni system s vlastnim mikroklimatem, jeden z nejpusobivejsich prirodnich podzemnich prostoru sveta." },
  { name: "My Son Sanctuary", country: "Vietnam", continent: "Asie", lat: 15.7650, lon: 108.1220, score: 78, category: "ztracena-mesta", themes: ["ritual", "ztracena-mesta"], lead: "Chamsky chramovy komplex v dzungli, kde ruiny a spiritualita prezily valecne i prirodni zasahy." },
  { name: "Ha Long Bay", country: "Vietnam", continent: "Asie", lat: 20.9101, lon: 107.1839, score: 77, category: "priroda", themes: ["mytologie", "oceany"], lead: "Zatoka vapencovych vezi, kde prirodni scenografie a draci legenda vytvareji silny obraz." },
  { name: "Ban Chiang", country: "Thajsko", continent: "Asie", lat: 17.4060, lon: 103.2380, score: 74, category: "legenda", themes: ["archeologie", "ztracena-mesta"], lead: "Archeologicke misto rane kultury v jihovychodni Asii, vyznamne pro praci s materialni pameti." },
  { name: "Ayutthaya", country: "Thajsko", continent: "Asie", lat: 14.3556, lon: 100.5650, score: 80, category: "ztracena-mesta", themes: ["ztracena-mesta", "ritual"], lead: "Ruiny byvale siamske metropole, kde hlavy soch, chramy a valecna destrukce tvori silny vizualni mytus." },
  { name: "Sukhothai", country: "Thajsko", continent: "Asie", lat: 17.0170, lon: 99.7040, score: 78, category: "ztracena-mesta", themes: ["ritual", "ztracena-mesta"], lead: "Historicky park stareho kralovstvi, kde vodni plochy a chramy udrzuji obraz zlateho veku." },
  { name: "Mount Popa", country: "Myanmar", continent: "Asie", lat: 20.9200, lon: 95.2500, score: 80, category: "priroda", themes: ["ritual", "mytologie"], lead: "Sopecna hora a poutni misto nat duchu, kde prirodni kuzel slouzi jako posvatny piedestal." },
  { name: "Mrauk U", country: "Myanmar", continent: "Asie", lat: 20.5910, lon: 93.1950, score: 80, category: "ztracena-mesta", themes: ["ztracena-mesta", "ritual"], lead: "Chramova krajina byvale arakanske metropole, mlhave ruiny mene zname nez Bagan, ale podobne silne." },
  { name: "Sigatoka Sand Dunes", country: "Fidzi", continent: "Oceanie", lat: -18.1560, lon: 177.4840, score: 73, category: "priroda", themes: ["umrti", "prirodni-anomalie"], lead: "Pobrezni duny a archeologicke nalezy na Fidzi, kde krajina uchovava stopy davneho osidleni." },
  { name: "Bora Bora Marae", country: "Francouzska Polynesie", continent: "Oceanie", lat: -16.5000, lon: -151.7400, score: 74, category: "legenda", themes: ["ritual", "mytologie"], lead: "Polyneska ceremonialni mista v ikonicke lagunove krajine, kde turismus prekryva starsi posvatnou mapu." }
];

const places = readJson(placesPath);
const byId = new Map(places.map((place) => [place.id, place]));
rawPlaces.map(profile).forEach((place) => byId.set(place.id, place));
writeJson(placesPath, Array.from(byId.values()));

const articles = readJson(articlesPath);
const article = {
  id: "ctvrta-vlna-afrika-amerika-pacifik",
  slug: "ctvrta-vlna-afrika-amerika-pacifik",
  localizedSlugs: {
    cs: "ctvrta-vlna-afrika-amerika-pacifik",
    en: "fourth-wave-africa-america-pacific",
    de: "vierte-welle-afrika-amerika-pazifik",
    es: "cuarta-ola-africa-america-pacifico",
    fr: "quatrieme-vague-afrique-amerique-pacifique"
  },
  title: "Ctvrtá vlna: Afrika, Amerika, Pacifik a dalsi zahadova archeologie",
  description: "Ctvrtá vlna rozsiruje MysteryMap o africka kralovska a poustni mista, americke zahady, pamatky predkolumbovskych kultur a pacificke posvatne lokace.",
  category: "legenda",
  themes: ["mapa", "archeologie", "ufo", "ztracena-mesta"],
  relatedPlaceIds: rawPlaces.slice(0, 30).map((item) => slugify(item.name)),
  sections: [
    {
      heading: "Proc pribyla dalsi vlna",
      body: "Cilem je priblizit MysteryMap objemem velkym svetovym databazim, ale stavet vlastni katalog s jasnou strukturou. Kazde misto ma detail, zdroje, GPS, temata a vlastni URL."
    },
    {
      heading: "Silnejsi Amerika a Afrika",
      body: "Ctvrtá vlna posiluje Afriku a Severni Ameriku o archeologii, pamatniky, UFO myty, podzemi a prirodni anomalie. Diky tomu mapa neni jen evropsky seznam hradu."
    },
    {
      heading: "Co bude pokracovat",
      body: "Dalsi vlny muzou jit stat po statu a postupne pridavat fotky s licenci, lokalni autority, presnejsi jazyky a clanky pro velka temata jako UFO, ztracena mesta, katakomby nebo filmove lokace."
    }
  ],
  sources: ["wikidata", "wikipedia", "openstreetmap", "unesco-whc"]
};

const articlesById = new Map(articles.map((item) => [item.id, item]));
articlesById.set(article.id, article);
writeJson(articlesPath, Array.from(articlesById.values()));

console.log(`Upserted ${rawPlaces.length} fourth-wave places and 1 article.`);
