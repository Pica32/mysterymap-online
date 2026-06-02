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
    paranormalniAktivita: item.activity || "kulturni, prirodni nebo historicka tvrzeni",
    historickaDolozenost: "overitelna zakladni identita",
    nebezpecnost: item.risk || "overit lokalne",
    pristupnost: item.access || "overit pred cestou",
    atmosfera: item.atmosphere || 4.0,
    nocniVhodnost: Boolean(item.night),
    vhodneProDeti: item.kids !== false,
    popisy: {
      zahada: `${item.name} doplnuje globalni katalog MysteryMap jako overitelny bod s GPS a jasnym motivem: ${item.lead} Text je vlastni seed, ne prevzaty popis z cizi databaze.`,
      historie: "Historicka vrstva slouzi jako zakladni orientace: stabilni identita mista, region, dohledatelny kontext a prostor pro doplneni lokalnich zdroju v dalsi redakci.",
      legenda: "Legendova vrstva vysvetluje, proc misto pritahuje pozornost: posvatny pribeh, ruina, zmizeni, katastrofa, prirodni anomalie, filmovy obraz nebo spor o interpretaci.",
      paranormalni: "Paranormalni a zahadova tvrzeni jsou oddelena od faktu. Profil je uvadi jako folklor, popularni vypraveni, psychologicky dojem nebo kulturni pamet, nikoli jako dokaz nadprirozena.",
      skepticke: "Skepticka cast drzi geologii, archeologii, historii, optiku, medialni vliv a turisticky marketing jako mozna vysvetleni. To pomaha udrzet duveryhodnost pri velkem objemu."
    },
    praktickeInfo: `Pred navstevou ${item.name} over aktualni pristup, povoleni, ochranu pamatky, mistni pravidla a bezpecnost. GPS souradnice jsou orientacni.`,
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: `Wikipedia: ${item.name}`, url: `https://en.wikipedia.org/wiki/${encodeURIComponent(item.name.replaceAll(" ", "_"))}`, licence: "CC BY-SA / reference discovery" },
      { nazev: `Wikidata search: ${item.name}`, url: `https://www.wikidata.org/w/index.php?search=${encodeURIComponent(item.name)}`, licence: "CC0 / entity discovery" },
      { nazev: "OpenStreetMap search", url: `https://www.openstreetmap.org/search?query=${encodeURIComponent(`${item.name} ${item.country}`)}`, licence: "ODbL / map verification" }
    ],
    pribehy: [
      {
        nazev: "Rozsireni svetove mapy",
        text: `${item.name} posiluje mapu v motivech ${themes.join(", ")} a pomaha vytvaret globalni objem samostatnych stranek s GPS, zdroji a internim prolinkovanim.`
      },
      {
        nazev: "Dalsi redakcni vrstva",
        text: "Profil je pripraveny k prohloubeni: lokalni prameny, fotografie s licenci, presne navstevnicke podminky, vicejazycne nazvy a lepsi regionální kontext."
      }
    ]
  };
}

const rawPlaces = [
  { name: "Mount Kailash", country: "Tibet", continent: "Asie", lat: 31.0675, lon: 81.3119, score: 86, category: "priroda", themes: ["ritual", "mytologie"], lead: "Posvatna hora pro vice tradic, kde se geografie, pout a zakaz vystupu meni v silny myticky stred sveta." },
  { name: "Potala Palace", country: "Tibet", continent: "Asie", lat: 29.6578, lon: 91.1169, score: 80, category: "legenda", themes: ["ritual", "mytologie"], lead: "Palac nad Lhasou, kde duchovni moc, politika a horska poloha tvori monumentalni symbol." },
  { name: "Jokhang Temple", country: "Tibet", continent: "Asie", lat: 29.6520, lon: 91.1300, score: 78, category: "legenda", themes: ["ritual", "mytologie"], lead: "Jeden z nejdulezitejsich tibetskych chramu, jadro poutniho okruhu a zive posvatne geografie." },
  { name: "Mount Wutai", country: "Cina", continent: "Asie", lat: 39.0000, lon: 113.6000, score: 76, category: "priroda", themes: ["ritual", "mytologie"], lead: "Buddhisticka posvatna hora, kde krajina, klastery a poutni tradice vytvareji rozsahlou duchovni mapu." },
  { name: "Longmen Grottoes", country: "Cina", continent: "Asie", lat: 34.5555, lon: 112.4670, score: 79, category: "podzemi", themes: ["ritual", "mytologie"], lead: "Skalni jeskynni chramy u Luoyangu, tisice soch jako kamenny archiv viry a moci." },
  { name: "Mogao Caves", country: "Cina", continent: "Asie", lat: 40.0370, lon: 94.8040, score: 83, category: "podzemi", themes: ["ritual", "tajne-spolecnosti"], lead: "Jeskynni knihovna a chramy u Dunhuangu, uzel Hedvabne stezky, umeni a skrytych rukopisu." },
  { name: "Yungang Grottoes", country: "Cina", continent: "Asie", lat: 40.1090, lon: 113.1220, score: 78, category: "podzemi", themes: ["ritual", "mytologie"], lead: "Monumentalni buddhisticke jeskyně s obrovskymi sochami, kde skala slouzi jako sakralni medium." },
  { name: "Sanxingdui", country: "Cina", continent: "Asie", lat: 30.9970, lon: 104.2100, score: 84, category: "legenda", themes: ["ztracena-mesta", "konspirace"], lead: "Archeologicke naleziste s bronzovymi maskami, ktere pusobi cize a pritahuje alternativni vyklady." },
  { name: "Lop Nur", country: "Cina", continent: "Asie", lat: 40.5000, lon: 90.5000, score: 82, category: "priroda", themes: ["zmizeni", "zakazane-zony"], lead: "Vyschle jezero a odlehla oblast spojena s expedicemi, jadernymi testy a zaniklymi cestami." },
  { name: "Loulan", country: "Cina", continent: "Asie", lat: 40.5000, lon: 89.9000, score: 83, category: "ztracena-mesta", themes: ["ztracena-mesta", "zmizeni"], lead: "Ztracene mesto v pousti Taklamakan, kde Hedvabna stezka zmizela pod piskem a solnou krajinou." },
  { name: "Jiuzhaigou", country: "Cina", continent: "Asie", lat: 33.2600, lon: 103.9180, score: 75, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Barevna jezera a travertinove kaskady, kde prirodni chemie vypada jako umele nasvicena krajina." },
  { name: "Zhangjiajie", country: "Cina", continent: "Asie", lat: 29.3150, lon: 110.4340, score: 79, category: "filmova-lokace", themes: ["film", "prirodni-anomalie"], lead: "Piskovcove sloupy v Hunanu, ktere se v popkulture staly inspiraci pro plovouci filmove hory." },
  { name: "Mount Emei", country: "Cina", continent: "Asie", lat: 29.5200, lon: 103.3330, score: 76, category: "priroda", themes: ["ritual", "mytologie"], lead: "Posvatna buddhisticka hora s mlhou, chramy a poutnimi cestami do vysoke krajiny." },
  { name: "Mausoleum of the First Qin Emperor", country: "Cina", continent: "Asie", lat: 34.3840, lon: 109.2540, score: 84, category: "legenda", themes: ["umrti", "tajne-spolecnosti"], lead: "Hrobka prvniho cisare s terakotovou armadou a predstavou podzemniho imperia." },
  { name: "Kowloon Walled City Park", country: "Hongkong", continent: "Asie", lat: 22.3320, lon: 114.1900, score: 79, category: "ztracena-mesta", themes: ["ztracena-mesta", "zakazane-zony"], lead: "Park na miste nekdejsiho hyperhusteho mesta bezne spojovaneho s labyrintem a pravnim stinem." },
  { name: "Taroko Gorge", country: "Tchaj-wan", continent: "Asie", lat: 24.1580, lon: 121.6210, score: 74, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Mramorova soutezka, kde skala, voda a chramy tvori dramaticky krajiny profil." },
  { name: "Yehliu Geopark", country: "Tchaj-wan", continent: "Asie", lat: 25.2070, lon: 121.6900, score: 75, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Pobrezni skalni utvary s ikonickou kralovninou hlavou, prirodni socharstvi na hrane eroze." },
  { name: "Jeju Lava Tubes", country: "Jizni Korea", continent: "Asie", lat: 33.5280, lon: 126.7700, score: 79, category: "podzemi", themes: ["sopky", "podzemi"], lead: "Lavove tunely na ostrove Jeju, kde vulkanicka krajina pokracuje jako temny system pod povrchem." },
  { name: "Gyeongju Tumuli", country: "Jizni Korea", continent: "Asie", lat: 35.8350, lon: 129.2120, score: 76, category: "legenda", themes: ["umrti", "ritual"], lead: "Kralovske mohyly Silla, zelene kopce ve meste jako viditelna pamet mrtvych vladcu." },
  { name: "Demilitarized Zone Korea", country: "Korea", continent: "Asie", lat: 38.2500, lon: 127.0000, score: 84, category: "legenda", themes: ["zakazane-zony", "valka"], lead: "Hranicni pas mezi Korejemi, moderni zakazana zona, kde politika vytvorila nechtenou divokou krajinu." },
  { name: "Seongsan Ilchulbong", country: "Jizni Korea", continent: "Asie", lat: 33.4580, lon: 126.9420, score: 74, category: "priroda", themes: ["sopky", "mytologie"], lead: "Sopecny tufovy kuzel na Jeju, kde tvar krateru a vychod slunce vytvareji posvatne prirodni divadlo." },
  { name: "Mount Osore", country: "Japonsko", continent: "Asie", lat: 41.3270, lon: 141.0930, score: 82, category: "priroda", themes: ["umrti", "mytologie"], lead: "Japonska hora spojovana s predstavou podsveti, sirnymi vyvery a pouti k mrtvym." },
  { name: "Ise Grand Shrine", country: "Japonsko", continent: "Asie", lat: 34.4550, lon: 136.7250, score: 79, category: "legenda", themes: ["ritual", "mytologie"], lead: "Svatyne obnovovana v cyklu, kde tradice, pomijivost a posvatna architektura tvori jedinecny ritual." },
  { name: "Koyasan Okunoin", country: "Japonsko", continent: "Asie", lat: 34.2130, lon: 135.5840, score: 81, category: "legenda", themes: ["umrti", "ritual"], lead: "Lesni hrbitov a poutni cesta na Koyasanu, kde tisice kamennych pamatek vytvareji duchovni krajinu." },
  { name: "Fushimi Inari Taisha", country: "Japonsko", continent: "Asie", lat: 34.9670, lon: 135.7727, score: 77, category: "legenda", themes: ["ritual", "mytologie"], lead: "Hora torii bran u Kjóta, kde opakovany pruchod cervenymi branami vytvari ritualni labyrint." },
  { name: "Himeji Castle", country: "Japonsko", continent: "Asie", lat: 34.8394, lon: 134.6939, score: 76, category: "hrad", themes: ["hrad", "duchove"], lead: "Bily hrad s legendami a obrannym labyrintem, jeden z nejcistsich obrazu japonske hradni architektury." },
  { name: "Okinawa Himeyuri Monument", country: "Japonsko", continent: "Asie", lat: 26.0950, lon: 127.6900, score: 80, category: "katastrofa", themes: ["valka", "umrti"], lead: "Pametni misto bitvy o Okinawu, kde studentsky pribeh a valecna trauma vyzaduji citlivy ton." },
  { name: "Shirakawa-go", country: "Japonsko", continent: "Asie", lat: 36.2570, lon: 136.9070, score: 72, category: "legenda", themes: ["mytologie", "ztracena-mesta"], lead: "Horska vesnice strech gassho-zukuri, kde izolace a snih vytvareji silnou kulturni atmosféru." },
  { name: "Taktsang Monastery", country: "Bhutan", continent: "Asie", lat: 27.4910, lon: 89.3630, score: 84, category: "legenda", themes: ["ritual", "mytologie"], lead: "Tygri hnizdo na utesu, jedna z nejdramatictejsich posvatnych staveb Asie." },
  { name: "Punakha Dzong", country: "Bhutan", continent: "Asie", lat: 27.5910, lon: 89.8760, score: 76, category: "hrad", themes: ["ritual", "hrad"], lead: "Dzong u soutoku rek, kde obrana, sprava a buddhisticka symbolika tvori jeden celek." },
  { name: "Lumbini", country: "Nepal", continent: "Asie", lat: 27.4690, lon: 83.2750, score: 80, category: "legenda", themes: ["ritual", "mytologie"], lead: "Poutni misto spojovane s narozenim Buddhy, kde historie a globalni vira sdileji krajinu." },
  { name: "Mustang Caves", country: "Nepal", continent: "Asie", lat: 29.1830, lon: 83.9670, score: 82, category: "podzemi", themes: ["podzemi", "tajne-spolecnosti"], lead: "Tisice skalnich jeskyni v Mustangu, casto tezko pristupny archiv obydli, ritualu a rukopisu." },
  { name: "Pashupatinath Temple", country: "Nepal", continent: "Asie", lat: 27.7100, lon: 85.3480, score: 81, category: "legenda", themes: ["umrti", "ritual"], lead: "Chramovy komplex u Bagmati, kde pohrebni ritualy a posvatny prostor stoji vedle kazdodenniho zivota." },
  { name: "Swayambhunath", country: "Nepal", continent: "Asie", lat: 27.7149, lon: 85.2900, score: 76, category: "legenda", themes: ["ritual", "mytologie"], lead: "Stupa na kopci nad Kathmandu, kde symbol oci a opice vytvareji snadno rozpoznatelny posvatny obraz." },
  { name: "Rani ki Vav", country: "Indie", continent: "Asie", lat: 23.8580, lon: 72.1010, score: 79, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Schodistova studna v Gudžaratu, kde voda, sochy a sestup tvori podzemni chram." },
  { name: "Ellora Caves", country: "Indie", continent: "Asie", lat: 20.0268, lon: 75.1791, score: 84, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Skalni chramy ruznych tradic a Kailasa vytesana shora dolu, technicky i duchovni zazrak." },
  { name: "Ajanta Caves", country: "Indie", continent: "Asie", lat: 20.5519, lon: 75.7033, score: 82, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Buddhisticke jeskynni chramy s malbami, kde podzemi uchovava barvu a vypraveni." },
  { name: "Hampi", country: "Indie", continent: "Asie", lat: 15.3350, lon: 76.4600, score: 84, category: "ztracena-mesta", themes: ["ztracena-mesta", "mytologie"], lead: "Ruiny Vijayanagary v balvanove krajine, jedno z nejpusobivejsich ztracenych mest Indie." },
  { name: "Konark Sun Temple", country: "Indie", continent: "Asie", lat: 19.8876, lon: 86.0945, score: 81, category: "legenda", themes: ["kosmicka-anomalie", "ritual"], lead: "Slunecni chram jako kamenny vuz, kde architektura slouzi kosmologicke symbolice." },
  { name: "Meenakshi Temple", country: "Indie", continent: "Asie", lat: 9.9195, lon: 78.1193, score: 78, category: "legenda", themes: ["ritual", "mytologie"], lead: "Chramovy komplex v Madurai, kde barevne gopuramy tvori hustou mapu bohu a pribehu." },
  { name: "Brihadeeswarar Temple", country: "Indie", continent: "Asie", lat: 10.7828, lon: 79.1318, score: 80, category: "legenda", themes: ["ritual", "mytologie"], lead: "Velky chram v Thanjavuru, monumentalni kamenny projev moci, geometrie a ritualu." },
  { name: "Charminar", country: "Indie", continent: "Asie", lat: 17.3616, lon: 78.4747, score: 72, category: "legenda", themes: ["mytologie", "ztracena-mesta"], lead: "Symbol Hyderabadu spojeny s urbanistickou pameti, epidemiemi a obchodnim mestem." },
  { name: "Golconda Fort", country: "Indie", continent: "Asie", lat: 17.3833, lon: 78.4011, score: 77, category: "hrad", themes: ["hrad", "poklad"], lead: "Pevnost diamantoveho bohatstvi a akustickych triku, kde moc a poklad tvori prirozenou legendu." },
  { name: "Mehrangarh Fort", country: "Indie", continent: "Asie", lat: 26.2980, lon: 73.0180, score: 77, category: "hrad", themes: ["hrad", "duchove"], lead: "Obri pevnost nad Jodhpurem, kde vyska, modre mesto a krvave dejiny vytvareji dramaticky obraz." },
  { name: "Chittorgarh Fort", country: "Indie", continent: "Asie", lat: 24.8870, lon: 74.6450, score: 81, category: "hrad", themes: ["umrti", "hrad"], lead: "Rozsahla pevnost spojena s oblehanimi a ritualem jauhar, misto vyzadujici citlivy historicky ramec." },
  { name: "Jaisalmer Fort", country: "Indie", continent: "Asie", lat: 26.9124, lon: 70.9127, score: 76, category: "hrad", themes: ["hrad", "poust"], lead: "Ziva pevnost v pousti Thar, kde zluty kamen a obchodni stezky pusobi jako mesto z legendy." },
  { name: "Mawlynnong Living Root Bridge", country: "Indie", continent: "Asie", lat: 25.2010, lon: 91.9160, score: 75, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Zive korenove mosty v Meghalaya, kde biologie a lidska trpelivost vytvareji funkcni organickou architekturu." },
  { name: "Sundarbans", country: "Banglades", continent: "Asie", lat: 21.9497, lon: 89.1833, score: 78, category: "priroda", themes: ["mytologie", "oceany"], lead: "Mangrovovy labyrint tygru, pribehu a nebezpecne vody, kde hranice pevniny a more zustava nejista." },
  { name: "Paharpur", country: "Banglades", continent: "Asie", lat: 25.0310, lon: 88.9770, score: 75, category: "ztracena-mesta", themes: ["ritual", "ztracena-mesta"], lead: "Ruiny buddhistickeho klastera Somapura Mahavihara, velky plan ztraceneho uceneho centra." },
  { name: "Bagerhat Mosque City", country: "Banglades", continent: "Asie", lat: 22.6740, lon: 89.7410, score: 74, category: "ztracena-mesta", themes: ["ritual", "ztracena-mesta"], lead: "Historicke mesto mesit a vodnich systemu, kde architektura drzi pamet stredovekeho Bengalu." },
  { name: "Adam's Peak", country: "Sri Lanka", continent: "Asie", lat: 6.8096, lon: 80.4994, score: 80, category: "priroda", themes: ["ritual", "mytologie"], lead: "Poutni hora s posvatnou stopou, kde ruzne tradice sdileji jeden vrchol a nocni vystup." },
  { name: "Dambulla Cave Temple", country: "Sri Lanka", continent: "Asie", lat: 7.8567, lon: 80.6492, score: 79, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Jeskynni chramy s malbami a sochami, kde skala funguje jako dlouhy archiv viry." },
  { name: "Anuradhapura", country: "Sri Lanka", continent: "Asie", lat: 8.3114, lon: 80.4037, score: 80, category: "ztracena-mesta", themes: ["ritual", "mytologie"], lead: "Stare kralovske a poutni mesto, kde stupy, nadrze a strom Bodhi vytvareji sakralni urbanismus." },
  { name: "Polonnaruwa", country: "Sri Lanka", continent: "Asie", lat: 7.9403, lon: 81.0188, score: 78, category: "ztracena-mesta", themes: ["ztracena-mesta", "ritual"], lead: "Stredoveke ruiny a sochy v srdci Sri Lanky, kde mesto zustava citelne jako kamenny plan." },
  { name: "Shalimar Gardens Lahore", country: "Pakistan", continent: "Asie", lat: 31.5880, lon: 74.3820, score: 73, category: "legenda", themes: ["ritual", "mytologie"], lead: "Mughalske zahrady v Lahore, kde voda, osa a terasa vytvareji idealizovanou rajskou krajinu." },
  { name: "Taxila", country: "Pakistan", continent: "Asie", lat: 33.7458, lon: 72.7875, score: 79, category: "ztracena-mesta", themes: ["ztracena-mesta", "ritual"], lead: "Archeologicka krajina stareho uceneho centra, krizovatka kultur, buddhismu a dobyvani." },
  { name: "Baltit Fort", country: "Pakistan", continent: "Asie", lat: 36.3265, lon: 74.6690, score: 74, category: "hrad", themes: ["hrad", "mytologie"], lead: "Horska pevnost v Hunze, kde izolace, drevena architektura a pohled na Karakoram vytvareji silny dojem." },
  { name: "Kalash Valleys", country: "Pakistan", continent: "Asie", lat: 35.7000, lon: 71.7000, score: 78, category: "priroda", themes: ["ritual", "mytologie"], lead: "Udoli s zivou kulturni tradici Kalashu, kde je nutny respekt k mistnim lidem a presna interpretace." },
  { name: "Makli Necropolis", country: "Pakistan", continent: "Asie", lat: 24.7560, lon: 67.9050, score: 80, category: "legenda", themes: ["umrti", "ritual"], lead: "Obrovska nekropole v Sindhu, mesto mrtvych s kamennymi hroby a zdobenou pameti." },
  { name: "Derawar Fort", country: "Pakistan", continent: "Asie", lat: 28.7680, lon: 71.3340, score: 76, category: "hrad", themes: ["hrad", "poust"], lead: "Pousti pevnost v Cholistan, jejiz valcove bastiony pusobi jako geometricka mira v prazdne krajine." },
  { name: "Shakhrisabz", country: "Uzbekistan", continent: "Asie", lat: 39.0578, lon: 66.8342, score: 76, category: "ztracena-mesta", themes: ["ztracena-mesta", "tajne-spolecnosti"], lead: "Rodne mesto Timura s monumentalnimi ruinami, kde imperiální ambice zustala jako rozbita architektura." },
  { name: "Khiva Itchan Kala", country: "Uzbekistan", continent: "Asie", lat: 41.3780, lon: 60.3630, score: 78, category: "ztracena-mesta", themes: ["ztracena-mesta", "poust"], lead: "Opevnena oaza Hedvabne stezky, kde cele mesto pusobi jako zachovana kulisa obchodni minulosti." },
  { name: "Bukhara Ark", country: "Uzbekistan", continent: "Asie", lat: 39.7770, lon: 64.4110, score: 76, category: "hrad", themes: ["hrad", "tajne-spolecnosti"], lead: "Citadela v Buchare, kde moc emiratu a vrstvy vezneni tvori tvrdy historicky profil." },
  { name: "Gonur Tepe", country: "Turkmenistan", continent: "Asie", lat: 38.1900, lon: 62.0400, score: 81, category: "ztracena-mesta", themes: ["ztracena-mesta", "ritual"], lead: "Archeologicke misto BMAC v pousti Karakum, cast malo zname civilizacni mapy stredni Asie." },
  { name: "Nisa", country: "Turkmenistan", continent: "Asie", lat: 37.9500, lon: 58.2000, score: 76, category: "ztracena-mesta", themes: ["ztracena-mesta", "mytologie"], lead: "Parthske pevnostni mesto u Ašchabadu, kde zanikla moc zustava ve fragmentu hradeb." },
  { name: "Otrar", country: "Kazachstan", continent: "Asie", lat: 42.8500, lon: 68.3000, score: 77, category: "ztracena-mesta", themes: ["ztracena-mesta", "valka"], lead: "Mesto Hedvabne stezky spojovane s mongolskym vpadem a zanikem obchodniho sveta." },
  { name: "Tamgaly Petroglyphs", country: "Kazachstan", continent: "Asie", lat: 43.8040, lon: 75.5360, score: 78, category: "priroda", themes: ["ritual", "mytologie"], lead: "Skalni rytiny se slunecnimi postavami, kde stepni krajina uchovava obrazovou pamet." },
  { name: "Burana Tower", country: "Kyrgyzstan", continent: "Asie", lat: 42.7470, lon: 75.2500, score: 74, category: "legenda", themes: ["mytologie", "ztracena-mesta"], lead: "Minaret a balbaly v Chuy Valley, zbytek mesta Balasagun a karachánske pameti." },
  { name: "Petroglyphs of Cholpon-Ata", country: "Kyrgyzstan", continent: "Asie", lat: 42.6500, lon: 77.0900, score: 75, category: "priroda", themes: ["ritual", "mytologie"], lead: "Kamenne pole petroglyfu u Issyk Kulu, kde zvireci motivy vytvareji stepni galerii." },
  { name: "Takht-i Sangin", country: "Tadzikistan", continent: "Asie", lat: 37.1000, lon: 68.1000, score: 78, category: "legenda", themes: ["ritual", "ztracena-mesta"], lead: "Hellenisticke svatynni misto u Amudarji, kde Oxus Treasure a hranice kultur tvori silny pribeh." },
  { name: "Yamchun Fortress", country: "Tadzikistan", continent: "Asie", lat: 36.9700, lon: 72.2800, score: 75, category: "hrad", themes: ["hrad", "mytologie"], lead: "Pevnost nad Pamirem, kde horska izolace a Hedvabna stezka vytvareji pocit strazniho mista." },
  { name: "Takht-e Soleyman", country: "Iran", continent: "Asie", lat: 36.6040, lon: 47.2350, score: 82, category: "legenda", themes: ["ritual", "mytologie"], lead: "Sopecna sakralni krajina s jezerem a zoroastrijskou vrstvou, silny uzel mytu a moci." },
  { name: "Chogha Zanbil", country: "Iran", continent: "Asie", lat: 32.0080, lon: 48.5200, score: 81, category: "legenda", themes: ["ritual", "ztracena-mesta"], lead: "Elamsky zikkurat v Khuzestanu, monumentalni pamet stareho kultu a mesta." },
  { name: "Shushtar Historical Hydraulic System", country: "Iran", continent: "Asie", lat: 32.0450, lon: 48.8560, score: 77, category: "legenda", themes: ["prirodni-anomalie", "ztracena-mesta"], lead: "Staroveky vodni system, kde technicka infrastruktura pusobi jako skryta hydrologicka mapa." },
  { name: "Kandovan", country: "Iran", continent: "Asie", lat: 37.7930, lon: 46.2480, score: 76, category: "podzemi", themes: ["podzemi", "prirodni-anomalie"], lead: "Skalni vesnice v sopecnych kuzelich, kde obydli a geologie tvori jeden organicky celek." },
  { name: "Taq Kasra", country: "Irak", continent: "Asie", lat: 33.0930, lon: 44.5800, score: 78, category: "ztracena-mesta", themes: ["ztracena-mesta", "mytologie"], lead: "Obrovsky klenuty zbytek sasanovskeho paláce, osamely fragment imperiální architektury." },
  { name: "Nineveh", country: "Irak", continent: "Asie", lat: 36.3600, lon: 43.1500, score: 83, category: "ztracena-mesta", themes: ["mytologie", "valka"], lead: "Asyrska metropole u Mosulu, biblicky i archeologicky silne mesto padu a pameti." },
  { name: "Hatra", country: "Irak", continent: "Asie", lat: 35.5880, lon: 42.7180, score: 82, category: "ztracena-mesta", themes: ["valka", "mytologie"], lead: "Pousti opevnené mesto s chramy, poskozene moderni valkou a dulezite pro citlivou pamet dedictvi." },
  { name: "Erbil Citadel", country: "Irak", continent: "Asie", lat: 36.1910, lon: 44.0090, score: 77, category: "hrad", themes: ["hrad", "ztracena-mesta"], lead: "Citadela na tellu v centru Erbilu, jeden z nejdele osidlenych mestskych uzlu." },
  { name: "Aleppo Citadel", country: "Syrie", continent: "Asie", lat: 36.1990, lon: 37.1620, score: 82, category: "hrad", themes: ["hrad", "valka"], lead: "Mohutna citadela v Aleppu, kde stredoveka pevnost a moderni valka vytvareji tezkou pamet." },
  { name: "Krak des Chevaliers", country: "Syrie", continent: "Asie", lat: 34.7560, lon: 36.2940, score: 82, category: "hrad", themes: ["templari", "hrad"], lead: "Krizacky hrad s vyjimecnou obrannou architekturou a spletitou historii valek." },
  { name: "Bosra", country: "Syrie", continent: "Asie", lat: 32.5170, lon: 36.4820, score: 78, category: "ztracena-mesta", themes: ["ztracena-mesta", "ritual"], lead: "Cerne bazaltove mesto s rimskym divadlem, kde vrstvy Nabatejcu, Rimu a islamu drzi jedinecnou podobu." },
  { name: "Umm er-Rasas", country: "Jordansko", continent: "Asie", lat: 31.5000, lon: 35.9200, score: 75, category: "ztracena-mesta", themes: ["ritual", "ztracena-mesta"], lead: "Archeologicke misto s mozaikami a poustni vezi, tichy bod krestanske a rimske krajiny." },
  { name: "Wadi Rum", country: "Jordansko", continent: "Asie", lat: 29.5760, lon: 35.4200, score: 80, category: "filmova-lokace", themes: ["film", "prirodni-anomalie"], lead: "Pouštní krajina skal, petroglyfu a filmovych planet, kde priroda opakovane nahrazuje Mars." },
  { name: "Ajloun Castle", country: "Jordansko", continent: "Asie", lat: 32.3260, lon: 35.7270, score: 74, category: "hrad", themes: ["hrad", "templari"], lead: "Stredoveka pevnost v jordanskych horach, vazana na krizacke konflikty a kontrolu cest." },
  { name: "Caesarea Maritima", country: "Izrael", continent: "Asie", lat: 32.5000, lon: 34.8920, score: 76, category: "ztracena-mesta", themes: ["oceany", "ztracena-mesta"], lead: "Herodovo pobrezni mesto s pristavem, amfiteatrem a vrstvami moci na hrane more." },
  { name: "Acre Old City", country: "Izrael", continent: "Asie", lat: 32.9220, lon: 35.0710, score: 79, category: "podzemi", themes: ["templari", "podzemi"], lead: "Krizacke a osmanske mesto s podzemnimi saly, tunely a dlouhou vrstvou obchodu a oblehani." },
  { name: "Beit She'an", country: "Izrael", continent: "Asie", lat: 32.5000, lon: 35.5000, score: 75, category: "ztracena-mesta", themes: ["katastrofa", "ztracena-mesta"], lead: "Anticke mesto poskozene zemetresenimi, kde sloupy a divadlo zustaly jako kamenny otisk katastrofy." },
  { name: "Megiddo", country: "Izrael", continent: "Asie", lat: 32.5840, lon: 35.1830, score: 82, category: "legenda", themes: ["mytologie", "katastrofa"], lead: "Tell spojovany s Armagedonem, strategii a dlouhou archeologickou pameti vrstev mest." },
  { name: "Nimrud", country: "Irak", continent: "Asie", lat: 36.0980, lon: 43.3300, score: 82, category: "katastrofa", themes: ["valka", "ztracena-mesta"], lead: "Asyrske mesto poskozene modernim nicenim, silny symbol zranitelnosti kulturni pameti." },
  { name: "Gobustan Rock Art", country: "Azerbajdzan", continent: "Asie", lat: 40.1030, lon: 49.3830, score: 79, category: "priroda", themes: ["ritual", "mytologie"], lead: "Skalni rytiny a bahenni sopky, kde praveke obrazy a geologie vytvareji neobvykly dvojity profil." },
  { name: "Ateshgah Fire Temple", country: "Azerbajdzan", continent: "Asie", lat: 40.4140, lon: 50.0080, score: 78, category: "legenda", themes: ["ritual", "dabel"], lead: "Chram ohne u Baku, kde prirodni plyn a nabozenstvi vytvareji posvatny plamen." },
  { name: "Yanar Dag", country: "Azerbajdzan", continent: "Asie", lat: 40.4920, lon: 50.1400, score: 77, category: "priroda", themes: ["prirodni-anomalie", "dabel"], lead: "Hori_sci svah s prirodnim plynem, jednoduchy a silny obraz vecneho ohne." },
  { name: "Qobustan Mud Volcanoes", country: "Azerbajdzan", continent: "Asie", lat: 40.1000, lon: 49.4000, score: 76, category: "priroda", themes: ["prirodni-anomalie", "sopky"], lead: "Bahenni sopky v krajine Qobustanu, kde geologie pusobi jako mala verze planetarniho povrchu." }
];

const places = readJson(placesPath);
const byId = new Map(places.map((place) => [place.id, place]));
rawPlaces.map(profile).forEach((place) => byId.set(place.id, place));
writeJson(placesPath, Array.from(byId.values()));

const articles = readJson(articlesPath);
const article = {
  id: "sesta-vlna-asie-posvatna-mista-ztracena-mesta",
  slug: "sesta-vlna-asie-posvatna-mista-ztracena-mesta",
  localizedSlugs: {
    cs: "sesta-vlna-asie-posvatna-mista-ztracena-mesta",
    en: "sixth-wave-asia-sacred-sites-lost-cities",
    de: "sechste-welle-asien-heilige-orte-verlorene-staedte",
    es: "sexta-ola-asia-lugares-sagrados-ciudades-perdidas",
    fr: "sixieme-vague-asie-lieux-sacres-cites-perdues"
  },
  title: "Sesta vlna: Asie, posvatna mista, ztracena mesta a podzemi",
  description: "Sesta vlna posiluje Asii o chramy, jeskynni komplexy, ztracena mesta, horska poutni mista, geologicke anomalie a filmove krajiny.",
  category: "legenda",
  themes: ["ritual", "podzemi", "ztracena-mesta", "mytologie"],
  relatedPlaceIds: rawPlaces.slice(0, 30).map((item) => slugify(item.name)),
  sections: [
    {
      heading: "Proc posilovat Asii",
      body: "Asie ma obrovskou hustotu posvatnych hor, jeskynnich chramu, ztracenych mest, poutnich center a archeologickych lokalit. Tyto profily tvori pevny zaklad pro globalni mapu."
    },
    {
      heading: "Jak je drzeny skepticky ramec",
      body: "U posvatnych a zive uctivanych mist je nutne respektovat lokalni tradici a jasne rozlisovat popis, legendu a sporne interpretace. Proto ma kazdy profil samostatnou skeptickou cast."
    },
    {
      heading: "Co se bude doplnovat",
      body: "Dalsi kroky jsou fotografie s licenci, lokalni zdroje, puvodni nazvy mist a hlubsi clanky pro nejdulezitejsi uzly jako Kailash, Mogao, Ellora, Hampi nebo Chaco podobne lokality."
    }
  ],
  sources: ["wikidata", "wikipedia", "openstreetmap", "unesco-whc"]
};

const articlesById = new Map(articles.map((item) => [item.id, item]));
articlesById.set(article.id, article);
writeJson(articlesPath, Array.from(articlesById.values()));

console.log(`Upserted ${rawPlaces.length} sixth-wave places and 1 article.`);
