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
      zahada: `${item.name} rozsiruje jedenactou vlnu MysteryMap jako overitelny bod s GPS, tematem a vlastnim redakcnim seedem: ${item.lead}`,
      historie: "Historicka vrstva popisuje zakladni identitu mista a slouzi jako podklad pro pozdejsi lokalni overeni. Profil ma stabilni URL, zdroje a strukturu pro dalsi praci.",
      legenda: "Legendova vrstva ukazuje, proc se misto dostava do mapy: ostrovni ritual, skalni umeni, zanikle mesto, prirodni anomalie, trestanecka pamet nebo poustni archeologie.",
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
  { name: "Nan Madol", country: "Mikronesie", continent: "Oceanie", lat: 6.8440, lon: 158.3310, score: 88, category: "ztracena-mesta", themes: ["ostrov", "archeologie"], lead: "Megaliticke mesto na umelych ostruvcich, casto popisovane jako tichy pacificky labyrint kamene a vody." },
  { name: "Leluh Ruins", country: "Mikronesie", continent: "Oceanie", lat: 5.3260, lon: 163.0180, score: 80, category: "ztracena-mesta", themes: ["ostrov", "archeologie"], lead: "Ruiny kralovskeho centra na Kosrae, mene slavna, ale silna ostrovni vrstva kamenne moci." },
  { name: "Taputapuatea Marae", country: "Francouzska Polynesie", continent: "Oceanie", lat: -16.8360, lon: -151.3660, score: 84, category: "legenda", themes: ["ritual", "ostrov"], lead: "Posvatny polynesky komplex na Raiatee, uzel plaveb, genealogii a ostrovni duchovni pameti." },
  { name: "Marae Arahurahu", country: "Francouzska Polynesie", continent: "Oceanie", lat: -17.6960, lon: -149.5890, score: 76, category: "legenda", themes: ["ritual", "ostrov"], lead: "Obnovene tahitske marae, kde kamenne terasy a ceremonie zviditelnuji zivy kulturni ramec." },
  { name: "Orongo Ceremonial Village", country: "Chile", continent: "Oceanie", lat: -27.1870, lon: -109.4450, score: 85, category: "legenda", themes: ["ritual", "ostrov"], lead: "Rapa Nui vesnice spojena s kultem ptaciho muze, kraterem Rano Kau a dramatickou hranou oceanu." },
  { name: "Ahu Tongariki", country: "Chile", continent: "Oceanie", lat: -27.1250, lon: -109.2760, score: 84, category: "legenda", themes: ["ostrov", "umrti"], lead: "Nejvetsi rad moai na Rapa Nui, monumentalni pobrezi pred vulkanickou krajinou a Pacifikem." },
  { name: "Rano Raraku Quarry", country: "Chile", continent: "Oceanie", lat: -27.1210, lon: -109.2890, score: 86, category: "legenda", themes: ["ostrov", "archeologie"], lead: "Sopecny lom, kde vznikaly moai a kde nedokoncene sochy pusobi jako zamrzla pracovni pamet." },
  { name: "Lake Hillier", country: "Australie", continent: "Oceanie", lat: -34.0950, lon: 123.2020, score: 78, category: "priroda", themes: ["prirodni-anomalie", "ostrov"], lead: "Ruzove jezero na Middle Islandu, prirodni barevny jev s jednoduchym obrazem a silnou viralni stopou." },
  { name: "Pinnacles Desert", country: "Australie", continent: "Oceanie", lat: -30.6000, lon: 115.1600, score: 77, category: "priroda", themes: ["poust", "prirodni-anomalie"], lead: "Pousti krajina vapencovych jehel, ktera pri nizkem svetle pripomina pole zkameneleho ritu." },
  { name: "Wolfe Creek Crater", country: "Australie", continent: "Oceanie", lat: -19.1720, lon: 127.7960, score: 80, category: "katastrofa", themes: ["impakt", "kosmicka-anomalie"], lead: "Vyrazny impaktni krater v zapadni Australii, fyzicky dukaz padu telesa a kulturni misto krajiny." },
  { name: "Henbury Meteorites Craters", country: "Australie", continent: "Oceanie", lat: -24.5750, lon: 133.1470, score: 75, category: "katastrofa", themes: ["impakt", "kosmicka-anomalie"], lead: "Pole mensich impaktnich krateru v pousti, kde se astronomicka udalost cte primo v terenu." },
  { name: "Karlu Karlu Devils Marbles", country: "Australie", continent: "Oceanie", lat: -20.5700, lon: 134.2630, score: 79, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Obri zuly balancujici v krajine, posvatne misto a prirodni forma s okamzitou vizualni silou." },
  { name: "Bungle Bungle Range", country: "Australie", continent: "Oceanie", lat: -17.4500, lon: 128.4500, score: 78, category: "priroda", themes: ["prirodni-labyrint", "prirodni-anomalie"], lead: "Pruhovane piskovcove kuzele v Purnululu, prirodni labyrint, ktery z dalky vypada skoro umele." },
  { name: "Lake Mungo Ancient Burials", country: "Australie", continent: "Oceanie", lat: -33.7100, lon: 143.0000, score: 82, category: "legenda", themes: ["umrti", "archeologie"], lead: "Stare pohrebni a archeologicke stopy u vyschleho jezera, klicovy bod lidske pameti Australie." },
  { name: "Port Arthur Penal Site", country: "Australie", continent: "Oceanie", lat: -43.1470, lon: 147.8500, score: 81, category: "veznice", themes: ["veznice", "duchove"], lead: "Trestanecka kolonie v Tasmanii, kde institucionalni pamet, izolace a ducharske prohlidky vytvareji silny profil." },
  { name: "Kingston Norfolk Penal Settlement", country: "Australie", continent: "Oceanie", lat: -29.0550, lon: 167.9590, score: 79, category: "veznice", themes: ["veznice", "ostrov"], lead: "Trestanecke ruiny na Norfolk Islandu, izolovany ostrovni archiv tvrdosti a kolonialni kontroly." },
  { name: "Balls Pyramid", country: "Australie", continent: "Oceanie", lat: -31.7540, lon: 159.2510, score: 77, category: "ostrov", themes: ["ostrov", "zvirata"], lead: "Uzka sopecna jehla v oceanu u Lord Howe, extremni ostrovni forma a pribeh znovuobjeveneho hmyzu." },
  { name: "Waitomo Glowworm Caves", country: "Novy Zeland", continent: "Oceanie", lat: -38.2610, lon: 175.1030, score: 78, category: "podzemi", themes: ["podzemi", "zvirata"], lead: "Jeskynni reka osvetlena svitici larvou, prirodni nocni obloha ukryta pod zemi." },
  { name: "Moeraki Boulders", country: "Novy Zeland", continent: "Oceanie", lat: -45.3460, lon: 170.8270, score: 76, category: "priroda", themes: ["prirodni-anomalie", "oceany"], lead: "Kulovite konkrece na pobrezi, kde geologie vytvari objekty pripominajici vejce nebo ztracene artefakty." },
  { name: "Pancake Rocks Punakaiki", country: "Novy Zeland", continent: "Oceanie", lat: -42.1140, lon: 171.3270, score: 74, category: "priroda", themes: ["oceany", "prirodni-anomalie"], lead: "Vrstvene vapencove utvary a morska dychadla, kde pobrezi zni a rozpada se v rytmu priboje." },
  { name: "Ciudad Perdida Colombia", country: "Kolumbie", continent: "Jizni Amerika", lat: 11.0370, lon: -73.9250, score: 85, category: "ztracena-mesta", themes: ["archeologie", "prirodni-labyrint"], lead: "Ztracene mesto v Sierra Nevada de Santa Marta, kam vede vlhka cesta pralesem a kamennymi terasami." },
  { name: "Tierradentro Tombs", country: "Kolumbie", continent: "Jizni Amerika", lat: 2.5830, lon: -76.0330, score: 82, category: "podzemi", themes: ["umrti", "archeologie"], lead: "Podzemni hrobky s malbami a sloupy, kde se smrt uklada do skryte architektury pod kopci." },
  { name: "San Agustin Statues", country: "Kolumbie", continent: "Jizni Amerika", lat: 1.8870, lon: -76.2960, score: 83, category: "legenda", themes: ["archeologie", "umrti"], lead: "Socharska krajina tajemnych postav a hrobek, jeden z nejsilnejsich archeologickych obrazu And." },
  { name: "Cahuachi Pyramids", country: "Peru", continent: "Jizni Amerika", lat: -14.8250, lon: -75.1260, score: 80, category: "ztracena-mesta", themes: ["archeologie", "poust"], lead: "Ceremonialni centrum kultury Nazca, kde poust uchovala platformy, textilie a ritualni pamet." },
  { name: "Chauchilla Cemetery", country: "Peru", continent: "Jizni Amerika", lat: -14.9720, lon: -74.9400, score: 81, category: "legenda", themes: ["umrti", "poust"], lead: "Pousti pohrebiste s mumiemi a otevrenou smrti, citlive misto mezi archeologii a temnou turistikou." },
  { name: "Chan Chan", country: "Peru", continent: "Jizni Amerika", lat: -8.1110, lon: -79.0750, score: 84, category: "ztracena-mesta", themes: ["archeologie", "ztracena-mesta"], lead: "Rozsahle hlinene mesto kultury Chimu, monumentalni labyrint zdobi, sten a rozpadajiciho se klimatu." },
  { name: "Caral Sacred City", country: "Peru", continent: "Jizni Amerika", lat: -10.8930, lon: -77.5200, score: 84, category: "ztracena-mesta", themes: ["archeologie", "ritual"], lead: "Jedno z nejstarsich mest Ameriky, kde pyramidy a namesti posouvaji pribeh andske civilizace hluboko do minulosti." },
  { name: "Kuelap Fortress", country: "Peru", continent: "Jizni Amerika", lat: -6.4170, lon: -77.9230, score: 82, category: "hrad", themes: ["archeologie", "prirodni-labyrint"], lead: "Vysokohorska pevnost Chachapoyas, kamenne zdi nad mraky a mene znamy protipol Machu Picchu." },
  { name: "Marcahuasi Plateau", country: "Peru", continent: "Jizni Amerika", lat: -11.7720, lon: -76.5830, score: 80, category: "priroda", themes: ["prirodni-anomalie", "pseudoveda"], lead: "Skalni plato s tvary, ktere lide ctu jako tvare a zvirata, prirodni pareidolie s ezoterickou povesti." },
  { name: "Moray Terraces", country: "Peru", continent: "Jizni Amerika", lat: -13.3290, lon: -72.1960, score: 78, category: "legenda", themes: ["archeologie", "prirodni-anomalie"], lead: "Kruhove incke terasy, kde zemedelstvi, mikroklima a geometrie vytvareji skoro laboratorni krajinu." },
  { name: "Toro Muerto Petroglyphs", country: "Peru", continent: "Jizni Amerika", lat: -16.2380, lon: -72.5140, score: 79, category: "legenda", themes: ["archeologie", "poust"], lead: "Rozsahle pole petroglyfu v jiznim Peru, tisice znaku rozesetych v suche kamenne krajine." },
  { name: "Cueva de las Manos", country: "Argentina", continent: "Jizni Amerika", lat: -47.1560, lon: -70.6570, score: 81, category: "legenda", themes: ["archeologie", "ritual"], lead: "Jeskynni steny s otisky rukou, pravy lidsky podpis na okraji patagonske krajiny." },
  { name: "Ischigualasto Moon Valley", country: "Argentina", continent: "Jizni Amerika", lat: -30.1600, lon: -67.8400, score: 79, category: "priroda", themes: ["prirodni-anomalie", "poust"], lead: "Mesicni udoli s fosiliemi a geologickymi tvary, kde se poust meni v casovou vrstvu planety." },
  { name: "Talampaya Canyon", country: "Argentina", continent: "Jizni Amerika", lat: -29.8000, lon: -67.8500, score: 78, category: "priroda", themes: ["prirodni-labyrint", "archeologie"], lead: "Cervene steny, petroglyfy a fosilni krajina, prirodni koridor s dlouhou lidskou i geologickou stopou." },
  { name: "Humberstone Ghost Town", country: "Chile", continent: "Jizni Amerika", lat: -20.2050, lon: -69.7950, score: 80, category: "ztracena-mesta", themes: ["ztracena-mesta", "poust"], lead: "Ledkove mesto v Atacame, opusteny prumyslovy svet sucha, prace a socialni pameti." },
  { name: "Sewell Mining Town", country: "Chile", continent: "Jizni Amerika", lat: -34.0830, lon: -70.3830, score: 77, category: "ztracena-mesta", themes: ["ztracena-mesta", "technologie"], lead: "Horske dulni mesto schodu a barev, prumyslova utopie vysoko nad udolim." },
  { name: "Nabta Playa", country: "Egypt", continent: "Afrika", lat: 22.5100, lon: 30.7300, score: 82, category: "legenda", themes: ["archeologie", "kosmicka-anomalie"], lead: "Praveke kamenne usporadani v pousti, casto spojovane s astronomii, pastevectvim a promenou klimatu." },
  { name: "Wadi Mathendous Rock Art", country: "Libye", continent: "Afrika", lat: 25.0000, lon: 12.0000, score: 78, category: "legenda", themes: ["archeologie", "poust"], lead: "Saharstke skalni rytiny se zviraty a lidskymi scenami, obraz sveta pred uplnou suchosti pouste." },
  { name: "Namib Fairy Circles", country: "Namibie", continent: "Afrika", lat: -24.0000, lon: 15.5000, score: 80, category: "priroda", themes: ["prirodni-anomalie", "poust"], lead: "Kruhove hole plochy v pousti Namib, prirodni vzor, ktery dlouho vyvolava vedecke i lidove vysvetleni." },
  { name: "Kolmanskop Ghost Town", country: "Namibie", continent: "Afrika", lat: -26.7040, lon: 15.2330, score: 82, category: "ztracena-mesta", themes: ["ztracena-mesta", "poust"], lead: "Opustene diamantove mesto, kde poust postupne vyplnuje domy a meni luxus v surrealni ruinu." },
  { name: "Twyfelfontein Engravings", country: "Namibie", continent: "Afrika", lat: -20.5950, lon: 14.3720, score: 79, category: "legenda", themes: ["archeologie", "zvirata"], lead: "Skalni rytiny zvirat a stop, jedna z nejhustsich galerii pravekeho obrazu v jizni Africe." },
  { name: "Brandberg White Lady", country: "Namibie", continent: "Afrika", lat: -21.0830, lon: 14.6500, score: 78, category: "legenda", themes: ["archeologie", "poust"], lead: "Skalni malba v Brandbergu, znamy obraz, jehoz vyklad ukazuje rizika romantickych interpretaci." },
  { name: "Rujm el Hiri", country: "Izrael", continent: "Asie", lat: 32.9080, lon: 35.8010, score: 80, category: "legenda", themes: ["archeologie", "kosmicka-anomalie"], lead: "Kruhove kamenne usporadani na Golanech, casto prirovnavane k levantinskemu megalitickemu kalendari." },
  { name: "Beit Shearim Necropolis", country: "Izrael", continent: "Asie", lat: 32.7030, lon: 35.1280, score: 77, category: "podzemi", themes: ["umrti", "podzemi"], lead: "Podzemni pohrebni komplex s katakombami, napisy a zpusobem, jak komunita uchovavala pamet mrtvych." },
  { name: "Timna Valley", country: "Izrael", continent: "Asie", lat: 29.7860, lon: 34.9730, score: 78, category: "priroda", themes: ["poust", "technologie"], lead: "Pousti udoli medenych dolu a skalnich tvaru, kde prumysl, Egypt a priroda vytvari jeden soubor." },
  { name: "Petra High Place of Sacrifice", country: "Jordansko", continent: "Asie", lat: 30.3240, lon: 35.4500, score: 81, category: "legenda", themes: ["ritual", "poust"], lead: "Vyvysene ritualni misto nad Petrou, kam cesta stoupa mezi skalou, vyhledem a nabatejskou pameti." },
  { name: "Wadi Rum Seven Pillars", country: "Jordansko", continent: "Asie", lat: 29.5760, lon: 35.4200, score: 77, category: "priroda", themes: ["poust", "film"], lead: "Skalni masiv ve Wadi Rum, kde prirodni monumentalita nese beduinskou, literarni i filmovou vrstvu." },
  { name: "Qasr Amra Desert Castle", country: "Jordansko", continent: "Asie", lat: 31.8010, lon: 36.5870, score: 76, category: "hrad", themes: ["poust", "archeologie"], lead: "Pousti zamek s freskami, necekane intimni obrazovy svet uprostred suche krajiny." },
  { name: "Dholavira", country: "Indie", continent: "Asie", lat: 23.8870, lon: 70.2140, score: 83, category: "ztracena-mesta", themes: ["archeologie", "poust"], lead: "Harappske mesto v Kacchhu, kde vodni systemy, planovani a poust vytvareji silny archeologicky profil." },
  { name: "Bhimbetka Rock Shelters", country: "Indie", continent: "Asie", lat: 22.9390, lon: 77.6130, score: 82, category: "legenda", themes: ["archeologie", "ritual"], lead: "Skalni pristresky s malbami, dlouhy archiv lidske pritomnosti od praveku po historicke vrstvy." },
  { name: "Rani ki Vav Stepwell", country: "Indie", continent: "Asie", lat: 23.8580, lon: 72.1010, score: 80, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Bohate zdobena stupnovita studna, kde voda, sestup a socharsky program tvori podzemni ritualni osu." },
  { name: "Living Root Bridges Meghalaya", country: "Indie", continent: "Asie", lat: 25.2160, lon: 91.6810, score: 78, category: "priroda", themes: ["prirodni-labyrint", "technologie"], lead: "Mosty pestovane z korenu, ziva infrastruktura vlhke krajiny a priklad dlouhe spoluprace s rostlinami." },
  { name: "Plain of Jars Site One", country: "Laos", continent: "Asie", lat: 19.4260, lon: 103.1510, score: 84, category: "legenda", themes: ["umrti", "archeologie"], lead: "Pole obrich kamennych nadob v Laosu, archeologicka zahada spojovana s pohrebnim krajinotvornym systemem." },
  { name: "Vat Phou", country: "Laos", continent: "Asie", lat: 14.8480, lon: 105.8220, score: 79, category: "legenda", themes: ["ritual", "mytologie"], lead: "Khmersky chramovy komplex pod horou, kde voda, osa a posvatna krajina predchazeji Angkoru." },
  { name: "Bagan Temple Plain", country: "Myanmar", continent: "Asie", lat: 21.1710, lon: 94.8580, score: 85, category: "legenda", themes: ["ritual", "ztracena-mesta"], lead: "More pagod na planine Bagan, monumentalni duchovni krajina s promenlivym svetlem a politickou citlivosti." },
  { name: "Kakku Pagoda Forest", country: "Myanmar", continent: "Asie", lat: 20.4280, lon: 97.0360, score: 78, category: "legenda", themes: ["ritual", "mytologie"], lead: "Huste pole stup a pagod, kde opakovani tvaru vytvari skoro kamenny les sakralni pameti." },
  { name: "Mrauk U Temples", country: "Myanmar", continent: "Asie", lat: 20.5940, lon: 93.1940, score: 81, category: "ztracena-mesta", themes: ["ztracena-mesta", "ritual"], lead: "Byvale kralovske mesto Rakhine, mlzne chramy a opevneni v krajine mezi delty a kopci." },
  { name: "Mount Yasur Volcano", country: "Vanuatu", continent: "Oceanie", lat: -19.5320, lon: 169.4470, score: 82, category: "katastrofa", themes: ["sopky", "ritual"], lead: "Pristupna aktivni sopka na Tanne, kde nocni erupce vytvareji silny ritualni i geologicky obraz." },
  { name: "Ambrym Volcano Caldera", country: "Vanuatu", continent: "Oceanie", lat: -16.2500, lon: 168.1200, score: 81, category: "katastrofa", themes: ["sopky", "ostrov"], lead: "Sopecny ostrov s velkou kalderou a kulturni pameti ohne, masek a neklidne zeme." },
  { name: "Chief Roi Mata Domain", country: "Vanuatu", continent: "Oceanie", lat: -17.6300, lon: 168.2600, score: 78, category: "legenda", themes: ["umrti", "ostrov"], lead: "Krajina spojena s ustni tradici, pohrebem a spolecenskou pameti vlivneho tichomorskeho vudce." },
  { name: "Kuk Early Agricultural Site", country: "Papua-Nova Guinea", continent: "Oceanie", lat: -5.7800, lon: 144.3300, score: 79, category: "legenda", themes: ["archeologie", "prirodni-anomalie"], lead: "Mokriny s dukazy velmi stareho zemedelstvi, kde krajina uchovala technickou pamet pestovani." },
  { name: "Kokoda Track", country: "Papua-Nova Guinea", continent: "Oceanie", lat: -9.0000, lon: 147.7300, score: 77, category: "katastrofa", themes: ["valka", "prirodni-labyrint"], lead: "Horska a pralesni trasa valecne pameti, fyzicky narocny koridor mezi historii a terenem." },
  { name: "Sigatoka Sand Dunes", country: "Fidzi", continent: "Oceanie", lat: -18.1700, lon: 177.4900, score: 75, category: "priroda", themes: ["poust", "archeologie"], lead: "Pobrezni duny s archeologickymi nalezy, kde vitr, more a stara pohrebni pamet lezi na jednom miste." },
  { name: "Bikini Atoll Nuclear Test Site", country: "Marshallovy ostrovy", continent: "Oceanie", lat: 11.6000, lon: 165.4000, score: 86, category: "zakazane-zony", themes: ["katastrofa", "politika"], lead: "Atol poznamenany jadernymi testy, ostrovni raj prepsany radiaci, vysidlenim a studenovalecnou pameti." },
  { name: "Rennell East Lake Tegano", country: "Salomounovy ostrovy", continent: "Oceanie", lat: -11.6660, lon: 160.3330, score: 77, category: "ostrov", themes: ["ostrov", "oceany"], lead: "Velke lagunove jezero na vyvysenem koralovem ostrove, izolovana vodni krajina na okraji Pacifiku." }
];

const places = readJson(placesPath);
const byId = new Map(places.map((place) => [place.id, place]));
rawPlaces.map(profile).forEach((place) => byId.set(place.id, place));
writeJson(placesPath, Array.from(byId.values()));

const articles = readJson(articlesPath);
const article = {
  id: "jedenacta-vlna-ostrovy-pralesy-pouste",
  slug: "jedenacta-vlna-ostrovy-pralesy-pouste",
  localizedSlugs: {
    cs: "jedenacta-vlna-ostrovy-pralesy-pouste",
    en: "eleventh-wave-islands-jungles-deserts",
    de: "elfte-welle-inseln-dschungel-wuesten",
    es: "undecima-ola-islas-selvas-desiertos",
    fr: "onzieme-vague-iles-jungles-deserts"
  },
  title: "Jedenacta vlna: ostrovy, pralesy a poustni mesta",
  description: "Jedenacta vlna posiluje Oceanii, Jizni Ameriku a Afriku o ostrovni ritualy, skalni umeni, impaktni kratery, zanikla mesta a trestanecke krajiny.",
  category: "ztracena-mesta",
  themes: ["ostrov", "archeologie", "poust", "prirodni-anomalie"],
  relatedPlaceIds: rawPlaces.slice(0, 30).map((item) => slugify(item.name)),
  sections: [
    {
      heading: "Proc ostrovy a pralesy",
      body: "Ostrovni a pralesni lokace doplnuji mapu o mista, kde izolace, pristupnost a kulturni pamet meni obycejny bod na silny pribeh. U techto mist je dulezite oddelit respekt k mistnim komunitam od turisticke senzace."
    },
    {
      heading: "Poust a zanikla mesta",
      body: "Poustni mesta, petroglyfy a archeologicke komplexy dobre propojuji overitelne zdroje, mapu a tematicke landing pages. Zaroven vyzaduji opatrny jazyk, protoze cast techto mist byva casto zneuzivana pseudovedou."
    },
    {
      heading: "Dalsi krok",
      body: "U jedenacte vlny je priorita doplnit mistni nazvy, citlive navstevnicke limity, otevrene fotografie a presnejsi popisy podle odbornych nebo spravcovskych zdroju."
    }
  ],
  sources: ["wikidata", "wikipedia", "openstreetmap", "wikimedia-commons"]
};

const articlesById = new Map(articles.map((item) => [item.id, item]));
articlesById.set(article.id, article);
writeJson(articlesPath, Array.from(articlesById.values()));

console.log(`Upserted ${rawPlaces.length} eleventh-wave places and 1 article.`);
