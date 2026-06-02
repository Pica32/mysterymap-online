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
      zahada: `${item.name} rozsiruje ctyriadvacatou vlnu MysteryMap jako mapovy bod s jasnou polohou a motivem: ${item.lead}`,
      historie: "Historicka vrstva popisuje zakladni identitu mista, kontinent, stat, GPS a tematicke zarazeni. Profil je seed pro dalsi lokalni zdroje a presnejsi navstevnicke informace.",
      legenda: "Legendova vrstva vysvetluje, proc se misto dostava do mapy: muze jit o ruinu, podzemi, prirodni anomalni tvar, posvatnou krajinu, ostrov, pevnost, opustene misto nebo citlivou pamet katastrofy.",
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

const groups = [
  {
    id: "ctyriadvacata-vlna-severni-amerika",
    slug: "ctyriadvacata-vlna-severni-amerika",
    localizedSlugs: {
      cs: "ctyriadvacata-vlna-severni-amerika",
      en: "twenty-fourth-wave-north-america",
      de: "vierundzwanzigste-welle-nordamerika",
      es: "vigesimocuarta-ola-norteamerica",
      fr: "vingt-quatrieme-vague-amerique-du-nord"
    },
    title: "Ctyriadvacata vlna A: Severni Amerika, doly a opustena mista",
    description: "Prvni cast petinasobne vlny pridava severoamericke ghost towns, doly, kraterove krajiny, ostrovy, jeskynni systemy a mista moderniho folkloru.",
    category: "opustene",
    themes: ["opustene", "podzemi", "prirodni-anomalie", "veznice"],
    places: [
      { name: "Bodie Ghost Town", country: "Spojene staty", continent: "Severni Amerika", lat: 38.212, lon: -119.012, score: 80, category: "opustene", themes: ["opustene", "zlato"], lead: "Zachovane hornicke mesto v Kalifornii, kde zlatokopecka euforie ztuhla v prachu a dreve." },
      { name: "Rhyolite Ghost Town", country: "Spojene staty", continent: "Severni Amerika", lat: 36.904, lon: -116.828, score: 78, category: "opustene", themes: ["opustene", "poust"], lead: "Ruiny mesta u Death Valley, rychly boom a kolaps poustni spekulace s prazdnymi fasadami." },
      { name: "Kennecott Mines", country: "Spojene staty", continent: "Severni Amerika", lat: 61.485, lon: -142.889, score: 78, category: "opustene", themes: ["opustene", "hory"], lead: "Medeny dulni komplex na Aljasce, odlehla prumyslova architektura mezi ledovci a horami." },
      { name: "Centralia Pennsylvania", country: "Spojene staty", continent: "Severni Amerika", lat: 40.804, lon: -76.341, score: 82, category: "katastrofa", themes: ["opustene", "ohen"], lead: "Mesto poznamenane podzemnim uhlnym pozarem, kde geologie a prumysl vytvorily dlouhou katastrofu.", kids: false },
      { name: "Goldfield Nevada", country: "Spojene staty", continent: "Severni Amerika", lat: 37.708, lon: -117.235, score: 76, category: "opustene", themes: ["opustene", "duchove"], lead: "Byvale zlate mesto s hotely, legendami a poustni stopou rychleho bohatstvi." },
      { name: "Jerome Arizona", country: "Spojene staty", continent: "Severni Amerika", lat: 34.749, lon: -112.114, score: 77, category: "legenda", themes: ["opustene", "duchove"], lead: "Hornicke mesto na svahu nad Verde Valley, dnes spojovane s ghost tours a pameti dolu." },
      { name: "Bisbee Queen Mine", country: "Spojene staty", continent: "Severni Amerika", lat: 31.442, lon: -109.914, score: 75, category: "podzemi", themes: ["podzemi", "dolovani"], lead: "Dulni chodby v Bisbee, kde se prumyslova historie meni v podzemni turistickou trasu." },
      { name: "Kartchner Caverns", country: "Spojene staty", continent: "Severni Amerika", lat: 31.837, lon: -110.348, score: 74, category: "podzemi", themes: ["podzemi", "prirodni-anomalie"], lead: "Zive vapencove jeskyne Arizony, chraneny podzemni system s krehkou geologii." },
      { name: "Carlsbad Bat Flight", country: "Spojene staty", continent: "Severni Amerika", lat: 32.147, lon: -104.556, score: 78, category: "podzemi", themes: ["podzemi", "zvirata"], lead: "Jeskynni vstup v Carlsbadu, kde vecerni let netopyru meni geologii v ritual prirody." },
      { name: "Lechuguilla Cave", country: "Spojene staty", continent: "Severni Amerika", lat: 32.189, lon: -104.507, score: 80, category: "podzemi", themes: ["podzemi", "prirodni-labyrint"], lead: "Rozsahla a chranena jeskynni soustava s mineralnimi tvary, pristupna jen vyzkumne a regulovane.", access: "silne omezeny pristup" },
      { name: "Mammoth Cave Historic Entrance", country: "Spojene staty", continent: "Severni Amerika", lat: 37.187, lon: -86.102, score: 78, category: "podzemi", themes: ["podzemi", "prirodni-labyrint"], lead: "Historicky vstup do nejdelsi zname jeskynni soustavy sveta, labyrint vody, kamene a lidskych stop." },
      { name: "Crater Lake Wizard Island", country: "Spojene staty", continent: "Severni Amerika", lat: 42.944, lon: -122.109, score: 77, category: "priroda", themes: ["sopky", "ostrov"], lead: "Sopecny ostrov v jezeru po kolapsu Mazamy, krajina modre vody a hluboke geologicke pameti." },
      { name: "Mount St Helens Blast Zone", country: "Spojene staty", continent: "Severni Amerika", lat: 46.191, lon: -122.194, score: 81, category: "katastrofa", themes: ["sopky", "katastrofa"], lead: "Krajina erupce z roku 1980, kde se les, popel a sesuv staly otevrenou ucebnici katastrofy." },
      { name: "Lava Beds National Monument", country: "Spojene staty", continent: "Severni Amerika", lat: 41.714, lon: -121.508, score: 76, category: "podzemi", themes: ["podzemi", "sopky"], lead: "Lavove tunely severni Kalifornie, prirodni podzemi spojene i s konflikty a ukryty." },
      { name: "Ape Cave Lava Tube", country: "Spojene staty", continent: "Severni Amerika", lat: 46.108, lon: -122.211, score: 75, category: "podzemi", themes: ["podzemi", "sopky"], lead: "Lavovy tunel u Mount St Helens, temna trasa v kamenne reci ztuhleho ohniveho proudu." },
      { name: "Meteor Crater Arizona", country: "Spojene staty", continent: "Severni Amerika", lat: 35.027, lon: -111.022, score: 82, category: "priroda", themes: ["impakt", "kosmicka-anomalie"], lead: "Impaktni krater v Arizone, presny obraz kosmicke srazky a moderni planetarni vedy." },
      { name: "Mystery Spot Santa Cruz", country: "Spojene staty", continent: "Severni Amerika", lat: 37.017, lon: -121.999, score: 72, category: "legenda", themes: ["pseudoveda", "media"], lead: "Turisticka gravitacni atrakce v lesich Santa Cruz, kde perspektiva a show vytvareji pocit anomalii." },
      { name: "Coral Castle", country: "Spojene staty", continent: "Severni Amerika", lat: 25.500, lon: -80.445, score: 76, category: "legenda", themes: ["symboly", "pseudoveda"], lead: "Kamenny soubor na Floride spojovany s osamelym stavitelem, spekulacemi a romantizovanou mechanikou." },
      { name: "Waverly Hills Sanatorium", country: "Spojene staty", continent: "Severni Amerika", lat: 38.130, lon: -85.842, score: 80, category: "opustene", themes: ["duchove", "nemocnice"], lead: "Byvale tuberkulozni sanatorium v Louisville, silna ikona americke paranormalni turistiky.", kids: false },
      { name: "Trans Allegheny Lunatic Asylum", country: "Spojene staty", continent: "Severni Amerika", lat: 39.038, lon: -80.469, score: 79, category: "opustene", themes: ["nemocnice", "duchove"], lead: "Monumentalni psychiatricky areal ve West Virginii, kde architektura lecby nese temnou instituci pamet.", kids: false },
      { name: "Bannack Ghost Town", country: "Spojene staty", continent: "Severni Amerika", lat: 45.161, lon: -112.995, score: 76, category: "opustene", themes: ["opustene", "zlato"], lead: "Zlate mesto Montany, zachovale drevene ulice a pribeh rychleho hornickeho vzestupu." },
      { name: "Garnet Ghost Town", country: "Spojene staty", continent: "Severni Amerika", lat: 46.827, lon: -113.338, score: 74, category: "opustene", themes: ["opustene", "hory"], lead: "Horske ghost town v Montane, kde les pohlcuje sruby, obchody a stopu zlate horecky." },
      { name: "Terlingua Ghost Town", country: "Spojene staty", continent: "Severni Amerika", lat: 29.321, lon: -103.616, score: 75, category: "opustene", themes: ["opustene", "poust"], lead: "Rtutove hornicke mesto u Big Bendu, poustni hrbitov, ruiny a hranicni atmosfera." },
      { name: "Cahokia Woodhenge", country: "Spojene staty", continent: "Severni Amerika", lat: 38.655, lon: -90.059, score: 78, category: "legenda", themes: ["archeologie", "kosmicka-anomalie"], lead: "Rekonstruovany dreveny kruh u Cahokie, kalendarni krajina mississippskeho mesta." },
      { name: "Serpent Mound Ohio", country: "Spojene staty", continent: "Severni Amerika", lat: 39.027, lon: -83.431, score: 80, category: "legenda", themes: ["archeologie", "symboly"], lead: "Velky hadovity zemni val v Ohiu, krajinna figura mezi archeologii, symbolikou a modernimi vyklady." },
      { name: "Great Sand Dunes Star Dune", country: "Spojene staty", continent: "Severni Amerika", lat: 37.749, lon: -105.532, score: 74, category: "priroda", themes: ["poust", "prirodni-anomalie"], lead: "Vysoke duny pod horami Sangre de Cristo, kde vitr vytvari promennou poust uprostred Colorada." },
      { name: "Bonneville Salt Flats", country: "Spojene staty", continent: "Severni Amerika", lat: 40.762, lon: -113.895, score: 75, category: "priroda", themes: ["prirodni-anomalie", "poust"], lead: "Solna planina Utahu, opticky ploche misto rychlosti, zrcadel, sucha a bilych horizontu." },
      { name: "Mima Mounds", country: "Spojene staty", continent: "Severni Amerika", lat: 46.901, lon: -123.046, score: 74, category: "priroda", themes: ["prirodni-anomalie", "pseudoveda"], lead: "Pravidelne kopecky ve Washingtonu, prirodni vzor s debatami o puvodu a krajinnych procesech." },
      { name: "Okefenokee Swamp", country: "Spojene staty", continent: "Severni Amerika", lat: 30.740, lon: -82.140, score: 75, category: "priroda", themes: ["prirodni-labyrint", "mytologie"], lead: "Rozsahla bazina Georgie a Floridy, vodni labyrint mlhy, ohnu, aligatoru a mistnich vypraveni." },
      { name: "Oak Island Money Pit", country: "Kanada", continent: "Severni Amerika", lat: 44.513, lon: -64.295, score: 79, category: "legenda", themes: ["poklad", "konspirace"], lead: "Ostrovni pokladova legenda Noveho Skotska, kde vykopy, pasti a media vytvorily dlouhou zahadu." }
    ]
  },
  {
    id: "ctyriadvacata-vlna-vychodni-asie",
    slug: "ctyriadvacata-vlna-vychodni-asie",
    localizedSlugs: {
      cs: "ctyriadvacata-vlna-vychodni-asie",
      en: "twenty-fourth-wave-east-asia",
      de: "vierundzwanzigste-welle-ostasien",
      es: "vigesimocuarta-ola-asia-oriental",
      fr: "vingt-quatrieme-vague-asie-orientale"
    },
    title: "Ctyriadvacata vlna B: vychodni Asie, chramy a zakazana mesta",
    description: "Druha cast petinasobne vlny pridava japonske, korejske, cinske a mongolske lokace s motivy chramu, duchu, hor, jeskyni, hrobek a opustenych krajin.",
    category: "legenda",
    themes: ["ritual", "duchove", "archeologie", "hory"],
    places: [
      { name: "Hashima Island", country: "Japonsko", continent: "Asie", lat: 32.628, lon: 129.738, score: 82, category: "opustene", themes: ["opustene", "ostrov"], lead: "Betonovy dulni ostrov u Nagasaki, opustena prumyslova krajina spojovana s pameti nucene prace.", kids: false },
      { name: "Osorezan", country: "Japonsko", continent: "Asie", lat: 41.279, lon: 141.104, score: 82, category: "legenda", themes: ["umrti", "ritual"], lead: "Sopecna poutni krajina na severu Honshu, casto vnimana jako hranice mezi svetem zivych a mrtvych." },
      { name: "Aokigahara Ice Cave", country: "Japonsko", continent: "Asie", lat: 35.475, lon: 138.600, score: 77, category: "podzemi", themes: ["podzemi", "led"], lead: "Ledova jeskyne v lavovem lese u Fudzi, kde chlad, tma a vulkanicky puvod posiluji atmosferu." },
      { name: "Fugaku Wind Cave", country: "Japonsko", continent: "Asie", lat: 35.477, lon: 138.608, score: 75, category: "podzemi", themes: ["podzemi", "sopky"], lead: "Lavova jeskyne u Fudzi, drive prirodni sklad chladu, dnes kontrolovana trasa v sopecnem podzemi." },
      { name: "Tashirojima Cat Island", country: "Japonsko", continent: "Asie", lat: 38.300, lon: 141.420, score: 72, category: "ostrov", themes: ["ostrov", "zvirata"], lead: "Ostrov spojovany s kockami a rybarskymi zvyky, jemnejsi folklorni bod mezi morem a vesnici." },
      { name: "Miyajima Mount Misen", country: "Japonsko", continent: "Asie", lat: 34.279, lon: 132.319, score: 78, category: "legenda", themes: ["ritual", "hory"], lead: "Posvatna hora ostrova Itsukushima, les, chramy a vyhledy nad slavnou branou torii." },
      { name: "Koyasan Okunoin", country: "Japonsko", continent: "Asie", lat: 34.214, lon: 135.596, score: 82, category: "legenda", themes: ["umrti", "ritual"], lead: "Rozsahle pohrebiste a poutni cesta na Koya, kde cedry a kamenne lampy vytvareji silnou nocni atmosferu." },
      { name: "Iwami Ginzan Silver Mine", country: "Japonsko", continent: "Asie", lat: 35.112, lon: 132.444, score: 76, category: "podzemi", themes: ["podzemi", "dolovani"], lead: "Historicky stribrny dul v horach Shimane, tunely, les a globalni stopa obchodu se stribrem." },
      { name: "Tottori Sand Dunes", country: "Japonsko", continent: "Asie", lat: 35.539, lon: 134.228, score: 74, category: "priroda", themes: ["poust", "prirodni-anomalie"], lead: "Necekana dunova krajina u Japonskeho more, vitr, pisek a pobrezni opticka anomalie." },
      { name: "Oya Stone Museum", country: "Japonsko", continent: "Asie", lat: 36.598, lon: 139.822, score: 75, category: "podzemi", themes: ["podzemi", "opustene"], lead: "Podzemni kamenolom Oya, obrovske haly pod Utsunomiyou s filmovou a koncertni atmosferou." },
      { name: "Gunkanjima Coal Mine", country: "Japonsko", continent: "Asie", lat: 32.628, lon: 129.738, score: 80, category: "opustene", themes: ["ostrov", "dolovani"], lead: "Dulni srdce ostrova Hashima, prumyslova hustota, more a opustene bloky jako varovani modernity.", kids: false },
      { name: "Seodaemun Prison", country: "Jizni Korea", continent: "Asie", lat: 37.574, lon: 126.956, score: 78, category: "veznice", themes: ["veznice", "valka"], lead: "Byvala veznice v Soulu, citlive misto korejske kolonialni a odporove pameti.", kids: false },
      { name: "Hwanseongul Cave", country: "Jizni Korea", continent: "Asie", lat: 37.320, lon: 129.063, score: 75, category: "podzemi", themes: ["podzemi", "prirodni-anomalie"], lead: "Velka vapencova jeskyne v horach Gangwon, vodopady, chodby a turisticky zpristupneny kras." },
      { name: "Manjanggul Lava Tube", country: "Jizni Korea", continent: "Asie", lat: 33.528, lon: 126.771, score: 78, category: "podzemi", themes: ["podzemi", "sopky"], lead: "Lavovy tunel na Jeju, podzemni stopa vulkanickeho ostrova a jeho prirodni historie." },
      { name: "Jeju Stone Grandfather Shrines", country: "Jizni Korea", continent: "Asie", lat: 33.450, lon: 126.570, score: 74, category: "legenda", themes: ["symboly", "ostrov"], lead: "Kameni strazci dol hareubang na Jeju, folklorni symbol ostrova, ochrany a vulkanickeho kamene." },
      { name: "Haesindang Park", country: "Jizni Korea", continent: "Asie", lat: 37.287, lon: 129.318, score: 72, category: "legenda", themes: ["ritual", "symboly"], lead: "Pobrezni folklorni park s plodnostni symbolikou, kde mistni legenda presla do turisticke instalace." },
      { name: "Mogao Caves", country: "Cina", continent: "Asie", lat: 40.039, lon: 94.805, score: 82, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Buddhisticke jeskyne u Dunhuangu, malby Hedvabne stezky a duchovni archiv pouste." },
      { name: "Longmen Grottoes", country: "Cina", continent: "Asie", lat: 34.559, lon: 112.469, score: 80, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Skalni buddhisticke sochy u Luoyangu, monumentalni stena viry, moci a kamenne prace." },
      { name: "Yungang Grottoes", country: "Cina", continent: "Asie", lat: 40.109, lon: 113.122, score: 80, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Jeskynni chramy u Datongu, obri Buddhove vytesani do piskovce a historie severnich dynastii." },
      { name: "Hanging Temple Datong", country: "Cina", continent: "Asie", lat: 39.657, lon: 113.704, score: 79, category: "legenda", themes: ["hory", "ritual"], lead: "Chram prichyceny ke skalni stene Hengshanu, dramaticka architektura mezi nebem a roklinou." },
      { name: "Maijishan Grottoes", country: "Cina", continent: "Asie", lat: 34.348, lon: 106.010, score: 78, category: "podzemi", themes: ["podzemi", "hory"], lead: "Skalni chramy na hore podobne stohu, drevene lavky, sochy a poutni vertikala." },
      { name: "Zhangjiajie Avatar Mountains", country: "Cina", continent: "Asie", lat: 29.315, lon: 110.434, score: 78, category: "priroda", themes: ["prirodni-anomalie", "hory"], lead: "Piskovcove sloupy Zhangjiajie, krajina mlhy a vertikalnich tvaru popularizovana filmovou imaginaci." },
      { name: "Shilin Stone Forest", country: "Cina", continent: "Asie", lat: 24.817, lon: 103.323, score: 77, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Kamenny les v Yunnanu, krasove tvary, pruchody a legendy o zkamenelych postavach." },
      { name: "Fengdu Ghost City", country: "Cina", continent: "Asie", lat: 29.885, lon: 107.726, score: 80, category: "legenda", themes: ["umrti", "duchove"], lead: "Chramovy komplex na Jang-c, spojovany s cinskou predstavou podsveti a soudem mrtvych." },
      { name: "Huanglong Travertine Pools", country: "Cina", continent: "Asie", lat: 32.754, lon: 103.833, score: 76, category: "priroda", themes: ["prirodni-anomalie", "voda"], lead: "Barevne travertinove terasy v Sichuanu, voda, mineralni okraje a horska scenografie." },
      { name: "Leshan Giant Buddha", country: "Cina", continent: "Asie", lat: 29.544, lon: 103.773, score: 79, category: "legenda", themes: ["ritual", "voda"], lead: "Obri Buddha vytesany nad soutokem rek, sakralni odpoved na nebezpecnou vodni krajinu." },
      { name: "Ordos Ghost City", country: "Cina", continent: "Asie", lat: 39.608, lon: 109.781, score: 75, category: "opustene", themes: ["opustene", "media"], lead: "Moderni mesto s reputaci prazdne urbanisticke vize, kde planovani vytvorilo zvlastni mestsky mytus." },
      { name: "Khara Khoto", country: "Cina", continent: "Asie", lat: 41.766, lon: 101.143, score: 80, category: "ztracena-mesta", themes: ["ztracena-mesta", "poust"], lead: "Ruiny tangutskeho mesta v pousti Gobi, zdi pohlcovane piskem a pribehy zaniku." },
      { name: "Orkhon Valley", country: "Mongolsko", continent: "Asie", lat: 47.556, lon: 102.833, score: 77, category: "legenda", themes: ["archeologie", "step"], lead: "Kulturni krajina mongolske stepi, ruiny, pamet rise a dlouhy prostor nomadske historie." },
      { name: "Khamaryn Khiid", country: "Mongolsko", continent: "Asie", lat: 44.203, lon: 110.114, score: 76, category: "legenda", themes: ["ritual", "poust"], lead: "Poustevni klaster v Gobi, poutni energeticka krajina a moderni duchovni vypravy." }
    ]
  },
  {
    id: "ctyriadvacata-vlna-afrika-blizky-vychod",
    slug: "ctyriadvacata-vlna-afrika-blizky-vychod",
    localizedSlugs: {
      cs: "ctyriadvacata-vlna-afrika-blizky-vychod",
      en: "twenty-fourth-wave-africa-middle-east",
      de: "vierundzwanzigste-welle-afrika-naher-osten",
      es: "vigesimocuarta-ola-africa-oriente-medio",
      fr: "vingt-quatrieme-vague-afrique-moyen-orient"
    },
    title: "Ctyriadvacata vlna C: Afrika a Blizky vychod",
    description: "Treti cast petinasobne vlny posiluje Afriku a Blizky vychod o pouste, pevnosti, hrobky, skalni umeni, solne krajiny a citliva historicka mista.",
    category: "legenda",
    themes: ["poust", "archeologie", "ritual", "pevnost"],
    places: [
      { name: "Qasr al Farid", country: "Saudska Arabie", continent: "Asie", lat: 26.805, lon: 37.956, score: 80, category: "legenda", themes: ["archeologie", "poust"], lead: "Osamela nabatejska hrobka v Mada'in Salih, monumentalni fasada vytesana do poustni skaly." },
      { name: "Edge of the World Riyadh", country: "Saudska Arabie", continent: "Asie", lat: 24.950, lon: 45.997, score: 76, category: "priroda", themes: ["poust", "prirodni-anomalie"], lead: "Dramaticky sraz Tuwaiq, kde se plosina lomi do poustniho horizontu a pusobi jako kraj sveta." },
      { name: "Al Wahbah Crater", country: "Saudska Arabie", continent: "Asie", lat: 22.906, lon: 41.140, score: 77, category: "priroda", themes: ["sopky", "poust"], lead: "Sopecny krater s bilym solnym dnem, osamela anomalie v poustni lavove krajine." },
      { name: "Ubar Shisr", country: "Oman", continent: "Asie", lat: 18.250, lon: 53.650, score: 78, category: "ztracena-mesta", themes: ["ztracena-mesta", "poust"], lead: "Misto spojovane s legendou ztraceneho Ubaru, karavanni pamet a archeologie poustni cesty." },
      { name: "Bahla Fort", country: "Oman", continent: "Asie", lat: 22.965, lon: 57.300, score: 77, category: "legenda", themes: ["pevnost", "ritual"], lead: "Hlinena pevnost a oaza v Omanu, v mistnich vypravenich casto spojovana s dziny a magii." },
      { name: "Jebel Shams Balcony Walk", country: "Oman", continent: "Asie", lat: 23.237, lon: 57.263, score: 75, category: "priroda", themes: ["hory", "nebezpeci"], lead: "Stezka nad omanskym Velkym kanonem, vyska, opustene vesnice a drsna horska scenografie.", kids: false },
      { name: "Socotra Diksam Plateau", country: "Jemen", continent: "Asie", lat: 12.500, lon: 54.000, score: 80, category: "priroda", themes: ["ostrov", "prirodni-anomalie"], lead: "Plosina se stromy draci krve na Sokotre, ostrovni evoluce pusobici jako samostatny svet." },
      { name: "Shibam Hadramawt", country: "Jemen", continent: "Asie", lat: 15.926, lon: 48.626, score: 79, category: "ztracena-mesta", themes: ["poust", "architektura"], lead: "Hlinene veze poustniho mesta, casto nazyvane Manhattan pouste, citliva pamet karavannich cest." },
      { name: "Masada Snake Path", country: "Izrael", continent: "Asie", lat: 31.315, lon: 35.354, score: 80, category: "legenda", themes: ["pevnost", "umrti"], lead: "Pevnost nad Mrtvym morem, spojovana s oblehanim, odporem a dramatickou hranou pouste.", kids: false },
      { name: "Beit Shearim Necropolis", country: "Izrael", continent: "Asie", lat: 32.702, lon: 35.126, score: 77, category: "podzemi", themes: ["podzemi", "umrti"], lead: "Podzemni nekropole s chodbami a sarkofagy, dulezite misto zidovske pohrebni pameti." },
      { name: "Avdat Nabataean City", country: "Izrael", continent: "Asie", lat: 30.794, lon: 34.773, score: 76, category: "ztracena-mesta", themes: ["archeologie", "poust"], lead: "Nabatejske mesto na poustni ceste, ruiny obchodu, vody a odolnosti v Negevu." },
      { name: "Baalbek Trilithon", country: "Libanon", continent: "Asie", lat: 34.006, lon: 36.204, score: 82, category: "legenda", themes: ["archeologie", "pseudoveda"], lead: "Obri kamenne bloky v Baalbeku, kde rimska monumentalita dlouho pritahuje alternativni vyklady." },
      { name: "Jeita Grotto", country: "Libanon", continent: "Asie", lat: 33.944, lon: 35.641, score: 76, category: "podzemi", themes: ["podzemi", "voda"], lead: "Dvouurovnova krasova jeskyne u Bejrutu, podzemni reka a stalaktitove sale." },
      { name: "Palmyra Funerary Towers", country: "Syrie", continent: "Asie", lat: 34.550, lon: 38.267, score: 82, category: "legenda", themes: ["archeologie", "umrti"], lead: "Pohrebni veze Palmyry, citliva vrstva poustniho mesta, obchodu, smrti a zniceni.", kids: false },
      { name: "Crac des Chevaliers", country: "Syrie", continent: "Asie", lat: 34.756, lon: 36.294, score: 80, category: "legenda", themes: ["pevnost", "valka"], lead: "Krizacka pevnost na syrskem kopci, monumentalni obranny stroj a citlive misto moderniho konfliktu.", kids: false },
      { name: "Dead Cities of Syria", country: "Syrie", continent: "Asie", lat: 36.330, lon: 36.844, score: 78, category: "opustene", themes: ["opustene", "archeologie"], lead: "Skupina opustenych pozdne antickych vesnic, kamenne domy a ticha krajina severni Syrie." },
      { name: "Wadi Rum Lawrence Spring", country: "Jordansko", continent: "Asie", lat: 29.576, lon: 35.421, score: 76, category: "priroda", themes: ["poust", "media"], lead: "Poustni pramen ve Wadi Rum, kde prirodni krajina nese vrstvy beduinske historie a filmove pameti." },
      { name: "Little Petra Siq al Barid", country: "Jordansko", continent: "Asie", lat: 30.375, lon: 35.451, score: 77, category: "ztracena-mesta", themes: ["archeologie", "poust"], lead: "Mensi nabatejsky siq u Petry, karavanni zastavka, fasady a uzka poustni skala." },
      { name: "Umm er Rasas", country: "Jordansko", continent: "Asie", lat: 31.501, lon: 35.919, score: 75, category: "legenda", themes: ["archeologie", "ritual"], lead: "Ruiny byzantskeho a rane islamskeho sidla s mozaikami a osamelou vezi v poustni krajine." },
      { name: "Siwa Shali Fortress", country: "Egypt", continent: "Afrika", lat: 29.204, lon: 25.519, score: 77, category: "opustene", themes: ["opustene", "poust"], lead: "Hlinena pevnost stare Siwy, zborene solne zdi, oaza a pamet poustni izolace." },
      { name: "Cave of Swimmers", country: "Egypt", continent: "Afrika", lat: 23.950, lon: 25.500, score: 80, category: "legenda", themes: ["skalni-umeni", "poust"], lead: "Skalni malby v Gilf Kebir, obrazy vody a lidi v dnesni pousti jako stopa jineho klimatu." },
      { name: "Nabta Playa", country: "Egypt", continent: "Afrika", lat: 22.507, lon: 30.733, score: 80, category: "legenda", themes: ["archeologie", "kosmicka-anomalie"], lead: "Praveky kamenny kruh v Nubijske pousti, casto vykladany pres kalendar a rany ritual." },
      { name: "Qasr Ibrim", country: "Egypt", continent: "Afrika", lat: 22.650, lon: 31.990, score: 77, category: "ztracena-mesta", themes: ["archeologie", "pevnost"], lead: "Nubijska pevnostni lokalita nad Naserovym jezerem, ostrovni zbytek krajiny zatopene prehradou." },
      { name: "Dendera Crypts", country: "Egypt", continent: "Afrika", lat: 26.142, lon: 32.670, score: 79, category: "podzemi", themes: ["podzemi", "symboly"], lead: "Podzemni prostory chramu Hathor, reliefy a symbolika casto zneuzivana alternativnimi teoriemi." },
      { name: "Valley of the Nobles Luxor", country: "Egypt", continent: "Afrika", lat: 25.730, lon: 32.600, score: 77, category: "legenda", themes: ["umrti", "archeologie"], lead: "Hrobky hodnostaru v Thibach, barevna pohrebni pamet mimo nejznamejsi kralovske pribehy." },
      { name: "Ksar Ouled Soltane", country: "Tunisko", continent: "Afrika", lat: 32.789, lon: 10.515, score: 76, category: "legenda", themes: ["poust", "media"], lead: "Opevneny berbersky ksar s vicepatrovymi sypkami, pozdeji znamy i diky filmove imaginaci." },
      { name: "Dougga", country: "Tunisko", continent: "Afrika", lat: 36.423, lon: 9.220, score: 77, category: "ztracena-mesta", themes: ["archeologie", "ritual"], lead: "Rozsahle anticke mesto na kopci, kde punske, numidske a rimske vrstvy tvori otevrenou mapu dejin." },
      { name: "Timgad", country: "Alzirsko", continent: "Afrika", lat: 35.484, lon: 6.468, score: 77, category: "ztracena-mesta", themes: ["archeologie", "poust"], lead: "Rimske mesto v alzirskych horach, pravidelna sit ulic v krajine sucha a rozpadu." },
      { name: "Madracen", country: "Alzirsko", continent: "Afrika", lat: 35.707, lon: 6.470, score: 76, category: "legenda", themes: ["umrti", "archeologie"], lead: "Staroveka numidska hrobka, monumentalni kruh kamene spojeny s kralovskou pameti." },
      { name: "Lixus Morocco", country: "Maroko", continent: "Afrika", lat: 35.200, lon: -6.100, score: 76, category: "ztracena-mesta", themes: ["archeologie", "mytologie"], lead: "Anticke mesto u Larache, spojovane s fenickou, rimsko-mauretanskou i herkulovskou tradici." }
    ]
  },
  {
    id: "ctyriadvacata-vlna-evropa-megality-podzemi",
    slug: "ctyriadvacata-vlna-evropa-megality-podzemi",
    localizedSlugs: {
      cs: "ctyriadvacata-vlna-evropa-megality-podzemi",
      en: "twenty-fourth-wave-europe-megaliths-underground",
      de: "vierundzwanzigste-welle-europa-megalithen-untergrund",
      es: "vigesimocuarta-ola-europa-megalitos-subterraneo",
      fr: "vingt-quatrieme-vague-europe-megalithes-souterrains"
    },
    title: "Ctyriadvacata vlna D: Evropa, megality a podzemi",
    description: "Ctvrta cast petinasobne vlny pridava evropske megality, katakomby, jeskynni komplexy, pevnosti, opustena mesta a sakralni krajiny.",
    category: "podzemi",
    themes: ["podzemi", "archeologie", "ritual", "pevnost"],
    places: [
      { name: "Callanish Stones", country: "Spojene kralovstvi", continent: "Evropa", lat: 58.197, lon: -6.745, score: 81, category: "legenda", themes: ["archeologie", "kosmicka-anomalie"], lead: "Kamenny kruh na Lewis, veterny atlanticky horizont a praveka ceremonialni krajina." },
      { name: "Ring of Brodgar", country: "Spojene kralovstvi", continent: "Evropa", lat: 59.001, lon: -3.229, score: 80, category: "legenda", themes: ["archeologie", "ritual"], lead: "Neoliticky kruh na Orknejich, krajina mezi jezery, mohylami a davnou astronomii." },
      { name: "Maeshowe", country: "Spojene kralovstvi", continent: "Evropa", lat: 58.996, lon: -3.189, score: 80, category: "podzemi", themes: ["podzemi", "archeologie"], lead: "Komorova hrobka na Orknejich, slunovratovy pruchod svetla a vikingske runy ve tme." },
      { name: "Avebury Henge", country: "Spojene kralovstvi", continent: "Evropa", lat: 51.428, lon: -1.854, score: 80, category: "legenda", themes: ["archeologie", "ritual"], lead: "Obri kamenny kruh zahrnujici vesnici, kde praveka monumentalita zustala soucasti zive krajiny." },
      { name: "Silbury Hill", country: "Spojene kralovstvi", continent: "Evropa", lat: 51.416, lon: -1.857, score: 79, category: "legenda", themes: ["archeologie", "zeme"], lead: "Nejvetsi praveka umela mohyla Evropy, zdanlive jednoducha hora s nejasnym ucelem." },
      { name: "West Kennet Long Barrow", country: "Spojene kralovstvi", continent: "Evropa", lat: 51.409, lon: -1.850, score: 78, category: "podzemi", themes: ["umrti", "archeologie"], lead: "Neoliticka komorova hrobka u Avebury, uzky vstup do pohrebni pameti krajiny." },
      { name: "Rollright Stones", country: "Spojene kralovstvi", continent: "Evropa", lat: 51.975, lon: -1.570, score: 77, category: "legenda", themes: ["archeologie", "carodejnictvi"], lead: "Kamenny kruh a solitery na hranici hrabstvi, spojene s promenou lidi v kameny a folklorem." },
      { name: "Dun Aonghasa", country: "Irsko", continent: "Evropa", lat: 53.126, lon: -9.768, score: 78, category: "legenda", themes: ["pevnost", "oceany"], lead: "Prehistoricka pevnost na utesu Inis Mor, kamenne valy nad prudkym padem do Atlantiku." },
      { name: "Drombeg Stone Circle", country: "Irsko", continent: "Evropa", lat: 51.564, lon: -9.087, score: 76, category: "legenda", themes: ["archeologie", "ritual"], lead: "Kamenny kruh v Corku, mensi ceremonialni krajina s vyhledem na zapadni Irsko." },
      { name: "Hill of Tara", country: "Irsko", continent: "Evropa", lat: 53.578, lon: -6.611, score: 80, category: "legenda", themes: ["mytologie", "archeologie"], lead: "Kralovska a mytologicka krajina Irska, valy, mohyly a symbolicka moc v otevrenem poli." },
      { name: "Knowth Passage Tomb", country: "Irsko", continent: "Evropa", lat: 53.701, lon: -6.490, score: 79, category: "podzemi", themes: ["podzemi", "archeologie"], lead: "Velka neoliticka hrobka u Boyne, rytiny, chodby a vrstvy davne symboliky." },
      { name: "Lascaux Cave", country: "Francie", continent: "Evropa", lat: 45.053, lon: 1.170, score: 82, category: "podzemi", themes: ["podzemi", "skalni-umeni"], lead: "Jeskyne paleolitickych maleb v Dordogne, obraz zvireciho sveta zachovany ve tme." },
      { name: "Chauvet Cave", country: "Francie", continent: "Evropa", lat: 44.387, lon: 4.416, score: 82, category: "podzemi", themes: ["podzemi", "skalni-umeni"], lead: "Jedny z nejstarsich slavnych jeskynnich maleb, chraneny archiv paleoliticke imaginace." },
      { name: "Font de Gaume", country: "Francie", continent: "Evropa", lat: 44.936, lon: 1.015, score: 78, category: "podzemi", themes: ["podzemi", "skalni-umeni"], lead: "Jeskyne s polychromnimi malbami v Dordogne, vzacne zbytky pristupne paleoliticke galerie." },
      { name: "Aven Armand", country: "Francie", continent: "Evropa", lat: 44.222, lon: 3.358, score: 75, category: "podzemi", themes: ["podzemi", "prirodni-anomalie"], lead: "Podzemni sala plna stalagmitu v Lozere, prirodni katedrala vertikalnich kamennych tvaru." },
      { name: "Gouffre de Padirac", country: "Francie", continent: "Evropa", lat: 44.858, lon: 1.750, score: 77, category: "podzemi", themes: ["podzemi", "voda"], lead: "Propast a podzemni reka v Lotu, sestup do krasoveho sveta lodi a skaly." },
      { name: "Cueva de Altamira", country: "Spanelsko", continent: "Evropa", lat: 43.377, lon: -4.123, score: 82, category: "podzemi", themes: ["podzemi", "skalni-umeni"], lead: "Slavna paleoliticka galerie v Kantabrii, bizoni a barvy, ktere zmenily pohled na praveke umeni." },
      { name: "Atapuerca Caves", country: "Spanelsko", continent: "Evropa", lat: 42.350, lon: -3.520, score: 80, category: "podzemi", themes: ["podzemi", "archeologie"], lead: "Jeskynni naleziste lidske evoluce u Burgosu, dlouha stopa predku a archeologickych vrstev." },
      { name: "Drach Caves Mallorca", country: "Spanelsko", continent: "Evropa", lat: 39.535, lon: 3.330, score: 75, category: "podzemi", themes: ["podzemi", "voda"], lead: "Jeskyne s podzemnim jezerem na Mallorce, turisticka scenografie hudby, vody a stalaktitu." },
      { name: "Antequera Dolmens", country: "Spanelsko", continent: "Evropa", lat: 37.024, lon: -4.548, score: 79, category: "legenda", themes: ["archeologie", "ritual"], lead: "Megaliticke hrobky Andalusie, presne orientovane kamenne prostory v krajine skal a hor." },
      { name: "Almendres Cromlech", country: "Portugalsko", continent: "Evropa", lat: 38.557, lon: -8.061, score: 78, category: "legenda", themes: ["archeologie", "ritual"], lead: "Velky kamenny kruh u Evory, iberska neoliticka krajina s otevrenym nebem." },
      { name: "Quinta da Regaleira Initiation Well", country: "Portugalsko", continent: "Evropa", lat: 38.797, lon: -9.397, score: 80, category: "podzemi", themes: ["okultismus", "symboly"], lead: "Spiralova studna v Sintre, romanticka architektura plna iniciacni a esotericke symboliky." },
      { name: "Capuchin Crypt Palermo", country: "Italie", continent: "Evropa", lat: 38.111, lon: 13.340, score: 82, category: "podzemi", themes: ["umrti", "podzemi"], lead: "Katakomby s mumifikovanymi ostatky v Palermu, velmi citlive misto smrti a vystavene pameti.", kids: false },
      { name: "Cumae Sibyl Cave", country: "Italie", continent: "Evropa", lat: 40.847, lon: 14.054, score: 80, category: "podzemi", themes: ["mytologie", "podzemi"], lead: "Tunel spojovany se Sibylou v Kumach, anticka predstava vestby v kamennem koridoru." },
      { name: "Tarquinia Necropolis", country: "Italie", continent: "Evropa", lat: 42.254, lon: 11.756, score: 78, category: "podzemi", themes: ["umrti", "archeologie"], lead: "Etruske hrobky s malbami, podzemni svet hostin, tance a aristokraticke pameti." },
      { name: "Cerveteri Banditaccia", country: "Italie", continent: "Evropa", lat: 42.006, lon: 12.101, score: 78, category: "podzemi", themes: ["umrti", "archeologie"], lead: "Etruska nekropole jako mesto mrtvych, ulice, tumuly a domovni tvary vytesane pro pohreb." },
      { name: "Matera Sassi Caves", country: "Italie", continent: "Evropa", lat: 40.666, lon: 16.611, score: 78, category: "podzemi", themes: ["podzemi", "opustene"], lead: "Jeskyne a skalni domy Matery, krajina chudoby, obnovy a velmi stareho osidleni." },
      { name: "Naples Underground", country: "Italie", continent: "Evropa", lat: 40.852, lon: 14.257, score: 77, category: "podzemi", themes: ["podzemi", "valka"], lead: "Podzemni vrstvy Neapole, anticke akvadukty, valecne kryty a mestska historie pod ulicemi." },
      { name: "Wieliczka Salt Mine Chapel", country: "Polsko", continent: "Evropa", lat: 49.983, lon: 20.054, score: 80, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Solny dul s podzemnimi kaplemi, kde prace horniku vytvorila sakralni krajinu pod zemi." },
      { name: "Osowka Underground City", country: "Polsko", continent: "Evropa", lat: 50.670, lon: 16.432, score: 78, category: "podzemi", themes: ["podzemi", "valka"], lead: "Nedokoncene podzemni prostory projektu Riese, citliva stopa valecne prace a spekulaci.", kids: false }
    ]
  },
  {
    id: "ctyriadvacata-vlna-oceanie-ostrovy",
    slug: "ctyriadvacata-vlna-oceanie-ostrovy",
    localizedSlugs: {
      cs: "ctyriadvacata-vlna-oceanie-ostrovy",
      en: "twenty-fourth-wave-oceania-islands",
      de: "vierundzwanzigste-welle-ozeanien-inseln",
      es: "vigesimocuarta-ola-oceania-islas",
      fr: "vingt-quatrieme-vague-oceanie-iles"
    },
    title: "Ctyriadvacata vlna E: Oceanie, ostrovy a izolovane anomalie",
    description: "Pata cast petinasobne vlny pridava oceanske ostrovy, sopecne krajiny, laguny, jeskynni systemy, opustene trestanecke lokality a polyneske ritualni prostory.",
    category: "ostrov",
    themes: ["ostrov", "sopky", "oceany", "ritual"],
    places: [
      { name: "Norfolk Island Kingston Ruins", country: "Australie", continent: "Oceanie", lat: -29.056, lon: 167.958, score: 78, category: "veznice", themes: ["ostrov", "veznice"], lead: "Trestanecka krajina Norfolku, kamenne ruiny, more a izolovana pamet kolonialniho trestu.", kids: false },
      { name: "Maria Island Convict Probation Station", country: "Australie", continent: "Oceanie", lat: -42.585, lon: 148.065, score: 76, category: "veznice", themes: ["ostrov", "veznice"], lead: "Tasmansky ostrov s trestaneckou historii, opustenymi budovami a citlivou krajinou izolace." },
      { name: "Sarah Island Macquarie Harbour", country: "Australie", continent: "Oceanie", lat: -42.385, lon: 145.451, score: 78, category: "veznice", themes: ["ostrov", "veznice"], lead: "Drsna trestanecka kolonie v zapadni Tasmanii, voda, les a odlehlost jako soucast trestu.", kids: false },
      { name: "Cascades Female Factory", country: "Australie", continent: "Oceanie", lat: -42.899, lon: 147.297, score: 76, category: "veznice", themes: ["veznice", "umrti"], lead: "Byvala zenska trestanecka instituce v Hobartu, citliva pamet kolonialni disciplinace.", kids: false },
      { name: "Lake Mungo Walls of China", country: "Australie", continent: "Oceanie", lat: -33.736, lon: 143.049, score: 80, category: "legenda", themes: ["archeologie", "poust"], lead: "Erozni lunety a hluboka aboriginska pamet u jezera Mungo, krajina casu, vetru a predku." },
      { name: "Wilpena Pound", country: "Australie", continent: "Oceanie", lat: -31.527, lon: 138.615, score: 76, category: "priroda", themes: ["hory", "mytologie"], lead: "Prirodni amfiteatr Flinders Ranges, geologie a adnyamathanha pribehy v obrovske kamenne misce." },
      { name: "Kata Tjuta Valley of the Winds", country: "Australie", continent: "Oceanie", lat: -25.300, lon: 130.735, score: 80, category: "priroda", themes: ["ritual", "poust"], lead: "Skalni kupy Kata Tjuta, posvatna krajina Anangu a stezky mezi cervenymi stenami." },
      { name: "Kings Canyon Rim Walk", country: "Australie", continent: "Oceanie", lat: -24.260, lon: 131.566, score: 77, category: "priroda", themes: ["poust", "nebezpeci"], lead: "Okraj kanonu Watarrka, cervene steny, propady a centralni australska krajina vysky.", kids: false },
      { name: "Undara Lava Tubes", country: "Australie", continent: "Oceanie", lat: -18.254, lon: 144.612, score: 77, category: "podzemi", themes: ["podzemi", "sopky"], lead: "Rozsahle lavove tunely v Queenslandu, podzemni stopa davne sopecne reky." },
      { name: "Jenolan Caves", country: "Australie", continent: "Oceanie", lat: -33.820, lon: 150.020, score: 76, category: "podzemi", themes: ["podzemi", "voda"], lead: "Krasovy system Modrych hor, turisticke jeskyne s dlouhou historii a podzemni rekou." },
      { name: "Waitomo Ruakuri Cave", country: "Novy Zeland", continent: "Oceanie", lat: -38.261, lon: 175.104, score: 77, category: "podzemi", themes: ["podzemi", "zvirata"], lead: "Jeskyne se svitici larvami, vodou a maorskou vrstvou nazvu i posvatnosti." },
      { name: "Cathedral Caves Catlins", country: "Novy Zeland", continent: "Oceanie", lat: -46.583, lon: 169.096, score: 75, category: "podzemi", themes: ["podzemi", "oceany"], lead: "Pobrezni jeskyne pristupne podle prilivu, kde more meni vstup v casovane okno." },
      { name: "Moeraki Boulders", country: "Novy Zeland", continent: "Oceanie", lat: -45.346, lon: 170.826, score: 77, category: "priroda", themes: ["prirodni-anomalie", "oceany"], lead: "Kulovite konkrece na plazi Otago, geologicke koule, ktere vypadaji jako zamerne objekty." },
      { name: "Castle Hill Kura Tawhiti", country: "Novy Zeland", continent: "Oceanie", lat: -43.229, lon: 171.715, score: 77, category: "priroda", themes: ["prirodni-anomalie", "ritual"], lead: "Vapencove balvany Kura Tawhiti, posvatna maorska krajina a surrealni skalni pole." },
      { name: "Farewell Spit", country: "Novy Zeland", continent: "Oceanie", lat: -40.550, lon: 172.900, score: 74, category: "priroda", themes: ["oceany", "prirodni-anomalie"], lead: "Dlouha pisecna kosa na severu Jizniho ostrova, ptaci, prilis a promenlive bahnite okraje." },
      { name: "Cape Reinga", country: "Novy Zeland", continent: "Oceanie", lat: -34.429, lon: 172.681, score: 80, category: "legenda", themes: ["oceany", "mytologie"], lead: "Severni mys, kde se podle maorske tradice duchove vydavaji na cestu do Hawaiki." },
      { name: "Rangitoto Lava Caves", country: "Novy Zeland", continent: "Oceanie", lat: -36.786, lon: 174.860, score: 76, category: "podzemi", themes: ["podzemi", "sopky"], lead: "Lavove jeskyne mlade sopky Rangitoto u Aucklandu, tmave chodby pod ostrovnim lesem." },
      { name: "White Island Whakaari", country: "Novy Zeland", continent: "Oceanie", lat: -37.520, lon: 177.180, score: 84, category: "katastrofa", themes: ["sopky", "nebezpeci"], lead: "Aktivni sopecny ostrov Whakaari, dramaticke a citlive misto erupce a rizika.", kids: false, access: "silne regulovany pristup" },
      { name: "Mount Tarawera Crater", country: "Novy Zeland", continent: "Oceanie", lat: -38.221, lon: 176.510, score: 82, category: "katastrofa", themes: ["sopky", "umrti"], lead: "Kratery erupce Tarawery, krajina zniceni Pink and White Terraces a maorske pameti.", kids: false },
      { name: "Pink and White Terraces Site", country: "Novy Zeland", continent: "Oceanie", lat: -38.250, lon: 176.430, score: 80, category: "katastrofa", themes: ["ztracena-mista", "sopky"], lead: "Ztracene geotermalni terasy u jezera Rotomahana, legenda prirodniho divu zniceneho erupci." },
      { name: "Nan Madol Pahnwi", country: "Mikronesie", continent: "Oceanie", lat: 6.844, lon: 158.330, score: 84, category: "ztracena-mesta", themes: ["ostrov", "archeologie"], lead: "Megaliticke kanaly a ostruvky Nan Madol, kamenne mesto v lagune a ticha moc Saudeleur." },
      { name: "Lelu Ruins Kosrae", country: "Mikronesie", continent: "Oceanie", lat: 5.333, lon: 163.029, score: 78, category: "ztracena-mesta", themes: ["ostrov", "archeologie"], lead: "Kamene ruiny Lelu na Kosrae, ostrovni elita, zdi a kanaly tropickeho mesta." },
      { name: "Rai Stones Yap", country: "Mikronesie", continent: "Oceanie", lat: 9.514, lon: 138.129, score: 77, category: "legenda", themes: ["symboly", "ostrov"], lead: "Obri kamenne penize ostrova Yap, materialni symbol hodnoty, cesty a spolecenske pameti." },
      { name: "Taputapuatea Marae", country: "Francouzska Polynesie", continent: "Oceanie", lat: -16.836, lon: -151.368, score: 80, category: "legenda", themes: ["ritual", "ostrov"], lead: "Posvatny marae na Raiatea, navigacni a ritualni stred polyneskeho sveta." },
      { name: "Marae Arahurahu", country: "Francouzska Polynesie", continent: "Oceanie", lat: -17.645, lon: -149.581, score: 75, category: "legenda", themes: ["ritual", "ostrov"], lead: "Obnovene ceremonialni misto na Tahiti, kamenne plosiny, tanec a ritualni pamet ostrova." },
      { name: "Rurutu Limestone Caves", country: "Francouzska Polynesie", continent: "Oceanie", lat: -22.450, lon: -151.350, score: 75, category: "podzemi", themes: ["podzemi", "ostrov"], lead: "Vapencove jeskyne ostrova Rurutu, podzemni tvary v odlehle australske casti Polynesie." },
      { name: "Fiji Sawa i Lau Caves", country: "Fidzi", continent: "Oceanie", lat: -16.850, lon: -177.467, score: 76, category: "podzemi", themes: ["podzemi", "oceany"], lead: "Morske vapencove jeskyne Yasaw, voda, legenda a plavani v modrem podzemnim prostoru." },
      { name: "Sigatoka Sand Dunes", country: "Fidzi", continent: "Oceanie", lat: -18.165, lon: 177.485, score: 74, category: "priroda", themes: ["poust", "archeologie"], lead: "Pobrezni duny s archeologickymi stopami Lapita, kde vitr odkryva davne osidleni." },
      { name: "Roi Mata Domain", country: "Vanuatu", continent: "Oceanie", lat: -17.617, lon: 168.267, score: 79, category: "legenda", themes: ["umrti", "ritual"], lead: "Kulturni krajina spojena s nacelnikem Roi Mata, pohrebni pamet, tabu a ostrovni ustni tradice." },
      { name: "Bikini Atoll Nuclear Test Site", country: "Marshallovy ostrovy", continent: "Oceanie", lat: 11.606, lon: 165.376, score: 84, category: "katastrofa", themes: ["katastrofa", "zakazane-zony"], lead: "Atol poznamenany jadernymi testy, rajska geografie a hluboce citliva pamet vysidleni.", kids: false, access: "overit aktualni omezeni" }
    ]
  },
  {
    id: "ctyriadvacata-vlna-island-sopky-led",
    slug: "ctyriadvacata-vlna-island-sopky-led",
    localizedSlugs: {
      cs: "ctyriadvacata-vlna-island-sopky-led",
      en: "twenty-fourth-wave-iceland-volcanoes-ice",
      de: "vierundzwanzigste-welle-island-vulkane-eis",
      es: "vigesimocuarta-ola-islandia-volcanes-hielo",
      fr: "vingt-quatrieme-vague-islande-volcans-glace"
    },
    title: "Ctyriadvacata vlna F: Island, sopky, led a lavove podzemi",
    description: "Rezervni blok petinasobne vlny doplnuje Island o lavove jeskyne, kraterove krajiny, vodopady, utesy, ostrovy, ledove tunely a mista se silnou sagovou atmosferou.",
    category: "priroda",
    themes: ["sopky", "led", "podzemi", "prirodni-anomalie"],
    places: [
      { name: "Hvitserkur", country: "Island", continent: "Evropa", lat: 65.606, lon: -20.636, score: 75, category: "priroda", themes: ["prirodni-anomalie", "oceany"], lead: "Cedicovy monolit u severniho pobrezi Islandu, prirodni tvar casto prirovnavany ke zkamenelemu tvoru." },
      { name: "Namafjall Hverir", country: "Island", continent: "Evropa", lat: 65.641, lon: -16.808, score: 78, category: "priroda", themes: ["sopky", "prirodni-anomalie"], lead: "Geotermalni pole u Myvatnu, sycici fumaroly, sirne barvy a krajina, ktera pusobi mimozemsky." },
      { name: "Leidarendi Lava Cave", country: "Island", continent: "Evropa", lat: 63.997, lon: -21.610, score: 75, category: "podzemi", themes: ["podzemi", "sopky"], lead: "Lavova jeskyne na Reykjanesu, tmavy tunel a krehka stopa po ztuhle sopecne rece." },
      { name: "Surtshellir", country: "Island", continent: "Evropa", lat: 64.780, lon: -20.730, score: 77, category: "podzemi", themes: ["podzemi", "mytologie"], lead: "Velky lavovy tunel v zapadnim Islandu, spojovany se sagami, vyhnanci a temnym podzemim." },
      { name: "Thrihnukagigur Volcano", country: "Island", continent: "Evropa", lat: 63.998, lon: -21.699, score: 80, category: "podzemi", themes: ["podzemi", "sopky"], lead: "Sopecny krater pristupny sestupem do magmaticke komory, neobvykly pohled dovnitr sopky." },
      { name: "Kerid Crater", country: "Island", continent: "Evropa", lat: 64.041, lon: -20.885, score: 75, category: "priroda", themes: ["sopky", "voda"], lead: "Cerveny sopecny krater s jezerem v Golden Circle, barevna miska ohnive geologie." },
      { name: "Glymur Waterfall", country: "Island", continent: "Evropa", lat: 64.386, lon: -21.250, score: 75, category: "priroda", themes: ["voda", "hory"], lead: "Vysoky vodopad v uzkem kanonu Hvalfjorduru, turisticka trasa mezi mlhou a skalou." },
      { name: "Hraunfossar", country: "Island", continent: "Evropa", lat: 64.702, lon: -20.979, score: 74, category: "priroda", themes: ["voda", "sopky"], lead: "Vodopady vytekajici z lavoveho pole, kde podzemni voda meni cernou skalu v bilou sit pramenu." },
      { name: "Gjain", country: "Island", continent: "Evropa", lat: 64.148, lon: -19.738, score: 74, category: "priroda", themes: ["prirodni-anomalie", "voda"], lead: "Skryte udoli vodopadu, lavovych tvaru a zelene ve vnitrozemi, pusobici jako prirodni zahrada." },
      { name: "Raufarholshellir Lava Tunnel", country: "Island", continent: "Evropa", lat: 63.943, lon: -21.395, score: 76, category: "podzemi", themes: ["podzemi", "sopky"], lead: "Dlouhy lavovy tunel u Reykjaviku, barevne steny a pristupny prurez sopecnym proudem." },
      { name: "Cave of Vidgelmir", country: "Island", continent: "Evropa", lat: 64.750, lon: -20.787, score: 77, category: "podzemi", themes: ["podzemi", "sopky"], lead: "Jedna z nejvetsich islandskych lavovych jeskyni, prostor kamene, ledu a starych stop." },
      { name: "Latrabjarg Cliffs", country: "Island", continent: "Evropa", lat: 65.502, lon: -24.531, score: 76, category: "priroda", themes: ["oceany", "zvirata"], lead: "Mohutne utesy Zapadnich fjordu, hranice Atlantiku, ptacich kolonii a zavratne vysky.", kids: false },
      { name: "Snaefellsjokull", country: "Island", continent: "Evropa", lat: 64.805, lon: -23.776, score: 80, category: "priroda", themes: ["sopky", "media"], lead: "Ledovcova sopka na poloostrove Snaefellsnes, literarni brana do stredu Zeme a symbol zapadu." },
      { name: "Helgafell Iceland", country: "Island", continent: "Evropa", lat: 65.046, lon: -22.727, score: 76, category: "legenda", themes: ["mytologie", "hory"], lead: "Posvatna hora u Stykkisholmuru, spojovana se sagami, pranim a islandskou duchovni krajinou." },
      { name: "Borgarvirki", country: "Island", continent: "Evropa", lat: 65.532, lon: -20.594, score: 75, category: "legenda", themes: ["pevnost", "sopky"], lead: "Cedicovy prirodni val vyuzity jako pevnost, sagova krajina mezi geologii a obranou." },
      { name: "Arnarstapi Sea Arch", country: "Island", continent: "Evropa", lat: 64.766, lon: -23.622, score: 74, category: "priroda", themes: ["oceany", "prirodni-anomalie"], lead: "Pobrezni skalni brany a lavove utesy Arnarstapi, kde more vyrezava dramatickou hranici." },
      { name: "Hvannadalshnukur", country: "Island", continent: "Evropa", lat: 64.014, lon: -16.675, score: 77, category: "priroda", themes: ["led", "hory"], lead: "Nejvyssi vrchol Islandu na okraji Vatnajokullu, ledova dominanta s narocnym pristupem.", kids: false },
      { name: "Askja Caldera", country: "Island", continent: "Evropa", lat: 65.033, lon: -16.750, score: 82, category: "priroda", themes: ["sopky", "poust"], lead: "Odlehla kaldera ve vnitrozemi, jezero Oskjuvatn a dramaticka sopecna pust.", kids: false },
      { name: "Hekla Volcano", country: "Island", continent: "Evropa", lat: 63.992, lon: -19.666, score: 82, category: "katastrofa", themes: ["sopky", "mytologie"], lead: "Historicky obavana sopka, ve stredoveke Evrope spojovana s predstavou brany do pekla.", kids: false },
      { name: "Laki Craters", country: "Island", continent: "Evropa", lat: 64.070, lon: -18.240, score: 83, category: "katastrofa", themes: ["sopky", "katastrofa"], lead: "Rada krateru erupce z 18. stoleti, ktera zasahla Island i klima Evropy.", kids: false },
      { name: "Eldgja Canyon", country: "Island", continent: "Evropa", lat: 63.986, lon: -18.666, score: 80, category: "katastrofa", themes: ["sopky", "prirodni-anomalie"], lead: "Obri sopecna trhlina v jihu Islandu, jmeno Ohnivy kanon odpovida jejimu puvodu." },
      { name: "Thingvellir Silfra", country: "Island", continent: "Evropa", lat: 64.255, lon: -21.124, score: 78, category: "priroda", themes: ["prirodni-anomalie", "voda"], lead: "Trhlina mezi deskami v Thingvelliru, pruzracna voda a geologicky hranicni zazitek." },
      { name: "Grettislaug", country: "Island", continent: "Evropa", lat: 65.880, lon: -19.738, score: 74, category: "legenda", themes: ["mytologie", "voda"], lead: "Horky pramen spojovany se sagou o Grettirovi, male misto mezi koupanim a vypravenim." },
      { name: "Reynisfjara Basalt Beach", country: "Island", continent: "Evropa", lat: 63.405, lon: -19.045, score: 80, category: "priroda", themes: ["oceany", "nebezpeci"], lead: "Cerna plaz s cedikovymi sloupy a zradnymi vlnami, fotogenicka i realne nebezpecna.", kids: false },
      { name: "Fjadrargljufur Canyon", country: "Island", continent: "Evropa", lat: 63.771, lon: -18.172, score: 75, category: "priroda", themes: ["prirodni-anomalie", "voda"], lead: "Klikaty mechovy kanon jihu Islandu, krajina vody, turismu a krehke vegetace." },
      { name: "Studlagil Canyon", country: "Island", continent: "Evropa", lat: 65.164, lon: -15.307, score: 76, category: "priroda", themes: ["prirodni-anomalie", "voda"], lead: "Kanon cedikovych sloupu s modrou ledovcovou rekou, nedavno zpopularizovana geologicka scena." },
      { name: "Asbyrgi Canyon", country: "Island", continent: "Evropa", lat: 66.017, lon: -16.516, score: 78, category: "priroda", themes: ["mytologie", "prirodni-anomalie"], lead: "Podkovovity kanon spojovany v mytologii s kopytem Sleipnira, prirodni amfiteatr severu." },
      { name: "Dettifoss", country: "Island", continent: "Evropa", lat: 65.814, lon: -16.385, score: 77, category: "priroda", themes: ["voda", "prirodni-anomalie"], lead: "Mohutny vodopad ledovcove reky Jokulsa a Fjollum, syrova sila vody a cedicove krajiny." },
      { name: "Krafla Viti Crater", country: "Island", continent: "Evropa", lat: 65.717, lon: -16.754, score: 77, category: "priroda", themes: ["sopky", "voda"], lead: "Krater Viti u Krafly, tyrkysove jezero v sopecne oblasti s pekelnym jmenem." },
      { name: "Fagradalsfjall Lava Field", country: "Island", continent: "Evropa", lat: 63.888, lon: -22.270, score: 81, category: "katastrofa", themes: ["sopky", "media"], lead: "Nove lavove pole na Reykjanesu, moderni erupcni krajina sledovana online i v terenu.", kids: false },
      { name: "Litli Hrutur Lava Field", country: "Island", continent: "Evropa", lat: 63.917, lon: -22.200, score: 80, category: "katastrofa", themes: ["sopky", "nebezpeci"], lead: "Cerstva sopecna oblast Reykjanesu, kde se turistika potkava s plyny, lavou a omezenimi.", kids: false },
      { name: "Katla Ice Cave", country: "Island", continent: "Evropa", lat: 63.580, lon: -19.050, score: 78, category: "podzemi", themes: ["led", "sopky"], lead: "Ledova jeskyne v oblasti Katly, kde sopecny popel a led vytvareji temne pruhovane chodby.", kids: false },
      { name: "Langjokull Ice Cave", country: "Island", continent: "Evropa", lat: 64.656, lon: -20.224, score: 76, category: "podzemi", themes: ["led", "podzemi"], lead: "Tunel v ledovci Langjokull, umely vstup do modre a bile hmoty islandskeho ledu." },
      { name: "Vatnshellir Cave", country: "Island", continent: "Evropa", lat: 64.748, lon: -23.817, score: 75, category: "podzemi", themes: ["podzemi", "sopky"], lead: "Lavova jeskyne na Snaefellsnesu, spiralovy sestup do temne sopecne vrstvy." },
      { name: "Hella Caves", country: "Island", continent: "Evropa", lat: 63.835, lon: -20.400, score: 75, category: "podzemi", themes: ["podzemi", "archeologie"], lead: "Rucne vyhloubene jeskyne u Helly, nejasne stari a lokalni debaty o puvodu." },
      { name: "Papey Island", country: "Island", continent: "Evropa", lat: 64.600, lon: -14.170, score: 74, category: "ostrov", themes: ["ostrov", "mytologie"], lead: "Maly ostrov u vychodniho Islandu, spojovany s mnisskymi pribehy, ptaky a odlehlosti." },
      { name: "Drangey Island", country: "Island", continent: "Evropa", lat: 65.950, lon: -19.700, score: 76, category: "ostrov", themes: ["ostrov", "mytologie"], lead: "Skalni ostrov ve Skagafjorduru, znama kulisa Grettirovy sagy a ptacich utesu." },
      { name: "Kolugljufur Canyon", country: "Island", continent: "Evropa", lat: 65.333, lon: -20.579, score: 74, category: "priroda", themes: ["mytologie", "voda"], lead: "Kanon a vodopady spojovane s obryni Kolou, mensi misto, kde folklor sedi primo na krajine." },
      { name: "Aldeyjarfoss", country: "Island", continent: "Evropa", lat: 65.366, lon: -17.337, score: 75, category: "priroda", themes: ["voda", "prirodni-anomalie"], lead: "Vodopad padajici mezi tmave cedikove sloupy, kontrast bile vody a sopecne geometrie." }
    ]
  }
];

const rawPlaces = groups.flatMap((group) => group.places);
const places = readJson(placesPath);
const byId = new Map(places.map((place) => [place.id, place]));
const inserted = [];
rawPlaces.map(profile).forEach((place) => {
  if (!byId.has(place.id)) inserted.push(place.id);
  byId.set(place.id, place);
});
writeJson(placesPath, Array.from(byId.values()));

const articles = readJson(articlesPath);
const articlesById = new Map(articles.map((item) => [item.id, item]));
groups.forEach((group) => {
  articlesById.set(group.id, {
    id: group.id,
    slug: group.slug,
    localizedSlugs: group.localizedSlugs,
    title: group.title,
    description: group.description,
    category: group.category,
    themes: group.themes,
    relatedPlaceIds: group.places.map((item) => slugify(item.name)),
    sections: [
      {
        heading: "Proc tahle oblast",
        body: "Petinasobna vlna pridava vetsi blok mist najednou, ale drzi stejnou redakcni logiku: kazde misto ma jasnou polohu, motivy, zdroje pro dalsi overeni a oddeleni historie, legendy a skeptickeho ramce."
      },
      {
        heading: "Jak s obsahem pracovat",
        body: "Tato mista jsou seed profily. Jsou vhodna pro dalsi prioritizaci podle hledanosti, dostupnosti fotografii, kvality oficialnich zdroju a tematicke hodnoty pro mapu."
      },
      {
        heading: "Dalsi krok",
        body: "U vybranych mist bude vhodne doplnit oficialni spravcovske stranky, lokalni nazvy, bezpecnostni omezeni, citlive historicke poznamky a licencovane obrazky."
      }
    ],
    sources: ["wikidata", "wikipedia", "openstreetmap", "wikimedia-commons"]
  });
});
writeJson(articlesPath, Array.from(articlesById.values()));

console.log(`Upserted ${inserted.length} new places (${rawPlaces.length} raw) and ${groups.length} articles.`);
