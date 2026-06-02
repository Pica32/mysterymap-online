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
      zahada: `${item.name} rozsiruje patnactou vlnu MysteryMap jako overitelny bod s GPS, tematem a vlastnim redakcnim seedem: ${item.lead}`,
      historie: "Historicka vrstva popisuje zakladni identitu mista a slouzi jako podklad pro pozdejsi lokalni overeni. Profil ma stabilni URL, zdroje a strukturu pro dalsi praci.",
      legenda: "Legendova vrstva ukazuje, proc se misto dostava do mapy: klaster, poustni ruina, posvatna hora, podzemni prostor, opustena komunita nebo prirodni anomalie.",
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
  { name: "Alamut Castle", country: "Iran", continent: "Asie", lat: 36.4450, lon: 50.5860, score: 84, category: "hrad", themes: ["hrad", "tajne-spolecnosti"], lead: "Horska pevnost spojovana s asasiny, kde realna politika a pozdejsi legenda vytvorily silny mytus." },
  { name: "Rudkhan Castle", country: "Iran", continent: "Asie", lat: 37.0510, lon: 49.2400, score: 77, category: "hrad", themes: ["hrad", "prirodni-labyrint"], lead: "Lesni pevnost v Gilanu, dlouhe schody, vlhka krajina a kamenne zdi ukryte v horach." },
  { name: "Qeshm Valley of Stars", country: "Iran", continent: "Asie", lat: 26.7570, lon: 56.0640, score: 79, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Erozni krajina na ostrove Qeshm, mistni vyklady ji spojuji s padlymi hvezdami a nocnim tichem." },
  { name: "Kandovan Rock Village", country: "Iran", continent: "Asie", lat: 37.7950, lon: 46.2490, score: 78, category: "podzemi", themes: ["podzemi", "prirodni-anomalie"], lead: "Obydlene skalni vesnicke kuzele, kde geologie a kazdodenni zivot splyvaji do jednoho prostoru." },
  { name: "Meymand Rock Village", country: "Iran", continent: "Asie", lat: 30.2230, lon: 55.3750, score: 79, category: "podzemi", themes: ["podzemi", "ztracena-mesta"], lead: "Skalni obydli v Kermanu, dlouha kontinuita zivota vytesaneho do suchych kopcu." },
  { name: "Shushtar Historical Hydraulic System", country: "Iran", continent: "Asie", lat: 32.0450, lon: 48.8560, score: 80, category: "legenda", themes: ["technologie", "archeologie"], lead: "Staroveky vodni system, kde kanaly, mlyny a prehrady meni mesto v technickou krajinu." },
  { name: "Rayen Citadel", country: "Iran", continent: "Asie", lat: 29.5960, lon: 57.4370, score: 77, category: "hrad", themes: ["hrad", "poust"], lead: "Hlinena citadela v poustni oblasti Kermanu, mensi paralela slavneho Bamu s pevnostni siluetou." },
  { name: "Takht e Rostam Afghanistan", country: "Afghanistan", continent: "Asie", lat: 36.0830, lon: 68.9000, score: 78, category: "legenda", themes: ["podzemi", "mytologie"], lead: "Buddhisticky skalni komplex spojovany s Rostamovou legendou, kde podzemi prechazi do epicke pameti." },
  { name: "Ai Khanoum", country: "Afghanistan", continent: "Asie", lat: 37.1670, lon: 69.4080, score: 81, category: "ztracena-mesta", themes: ["archeologie", "ztracena-mesta"], lead: "Helenisticke mesto u soutoku rek, doklad necekaneho propojeni Recka a Stredni Asie." },
  { name: "Gonur Tepe", country: "Turkmenistan", continent: "Asie", lat: 38.0000, lon: 62.0000, score: 82, category: "ztracena-mesta", themes: ["archeologie", "poust"], lead: "Archeologicke centrum Margiany v pousti Karakum, zanikly svet opevneni, ritualu a vodnich systemu." },
  { name: "Nisa Parthian Fortresses", country: "Turkmenistan", continent: "Asie", lat: 37.9510, lon: 58.2110, score: 80, category: "hrad", themes: ["hrad", "archeologie"], lead: "Parthske pevnosti u Aschabadu, ruiny moci na rozhrani iranske a stredoasijske historie." },
  { name: "Darvaza Gas Crater Camp", country: "Turkmenistan", continent: "Asie", lat: 40.2520, lon: 58.4390, score: 84, category: "katastrofa", themes: ["dabel", "technologie"], lead: "Horici plynovy krater v Karakumu, moderni technicka nehoda promenena v turistickou branu pekla." },
  { name: "Sarmyshsay Petroglyphs", country: "Uzbekistan", continent: "Asie", lat: 40.6000, lon: 65.7000, score: 78, category: "legenda", themes: ["archeologie", "ritual"], lead: "Rokle s tisici petroglyfu, skalni archiv lovu, zvirat a symbolu ve stredoasijske krajine." },
  { name: "Mizdakhan Necropolis", country: "Uzbekistan", continent: "Asie", lat: 42.4200, lon: 59.6000, score: 79, category: "legenda", themes: ["umrti", "mytologie"], lead: "Rozsahla nekropole u Nukusu, kde hroby, ruiny a legendy vytvareji tichou krajinu zanikani." },
  { name: "Ayaz Kala Fortresses", country: "Uzbekistan", continent: "Asie", lat: 42.0000, lon: 61.0330, score: 80, category: "hrad", themes: ["hrad", "poust"], lead: "Pousti pevnosti Chorezmu, zdi na okraji Kyzylkumu s vyhledem do sucheho prostoru." },
  { name: "Toprak Kala", country: "Uzbekistan", continent: "Asie", lat: 41.9170, lon: 61.1170, score: 79, category: "ztracena-mesta", themes: ["archeologie", "poust"], lead: "Hlinene ruiny stareho chorezmskeho palacoveho mesta, kde vitr odkryva vrstvy opustene moci." },
  { name: "Tash Rabat Caravanserai", country: "Kyrgyzstan", continent: "Asie", lat: 40.8200, lon: 75.2860, score: 78, category: "podzemi", themes: ["stredovek", "podzemi"], lead: "Kamenny karavanseraj v horske samote, temne komory a hedvabna stezka ve vysoke krajine." },
  { name: "Burana Tower", country: "Kyrgyzstan", continent: "Asie", lat: 42.7460, lon: 75.2500, score: 76, category: "legenda", themes: ["stredovek", "mytologie"], lead: "Minaret a balbaly v Cujskem udoli, zbytek zanikleho mesta Balasagun a turkicke pameti." },
  { name: "Tamgaly Petroglyphs", country: "Kazachstan", continent: "Asie", lat: 43.8030, lon: 75.5360, score: 80, category: "legenda", themes: ["archeologie", "ritual"], lead: "Skalni obrazce v kazasske stepi, slunecni postavy a zvirata jako praveky symbolicky archiv." },
  { name: "Otrar Ruins", country: "Kazachstan", continent: "Asie", lat: 42.8500, lon: 68.3000, score: 78, category: "ztracena-mesta", themes: ["ztracena-mesta", "stredovek"], lead: "Ruiny mesta na hedvabne stezce, spojene s obchodem, ucenci a mongolskym zlomem." },
  { name: "Dmanisi Hominin Site", country: "Gruzie", continent: "Asie", lat: 41.3330, lon: 44.3420, score: 81, category: "legenda", themes: ["archeologie", "prirodni-anomalie"], lead: "Paleoantropologicke naleziste v Gruzii, kde fosilie posouvaji pribeh raneho cloveka mimo Afriku." },
  { name: "Uplistsikhe Cave Town", country: "Gruzie", continent: "Asie", lat: 41.9670, lon: 44.2080, score: 80, category: "podzemi", themes: ["podzemi", "ztracena-mesta"], lead: "Skalni mesto u Gori, vytesane saly, ulice a svatyne v krajine dlouheho osidleni." },
  { name: "Vardzia Cave Monastery", country: "Gruzie", continent: "Asie", lat: 41.3810, lon: 43.2840, score: 83, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Skalni klaster ve stene udoli, kde nabozenstvi, obrana a katastrofa odhaleni vytvorily jedinecny profil." },
  { name: "David Gareja Monastery", country: "Gruzie", continent: "Asie", lat: 41.4470, lon: 45.3760, score: 81, category: "legenda", themes: ["ritual", "poust"], lead: "Klaster v polosuche hranicni krajine, skalni cely, fresky a politicky citlive uzemi." },
  { name: "Karahunj Zorats Karer", country: "Armenie", continent: "Asie", lat: 39.5510, lon: 46.0280, score: 80, category: "legenda", themes: ["archeologie", "kosmicka-anomalie"], lead: "Megaliticke kamenne usporadani v Armenii, spojovane s astronomickymi interpretacemi a pravekou krajinou." },
  { name: "Geghard Monastery", country: "Armenie", continent: "Asie", lat: 40.1400, lon: 44.8180, score: 82, category: "podzemi", themes: ["ritual", "podzemi"], lead: "Klaster castecne vytesany do skaly, kde liturgie, akustika a horske udoli vytvareji uzavreny svet." },
  { name: "Khor Virap Monastery", country: "Armenie", continent: "Asie", lat: 39.8780, lon: 44.5760, score: 80, category: "legenda", themes: ["ritual", "mytologie"], lead: "Klaster s podzemni vezi a pohledem na Ararat, politicko-nabozensky symbol armenske pameti." },
  { name: "Gobustan Mud Volcanoes", country: "Azerbajdzan", continent: "Asie", lat: 40.0900, lon: 49.4000, score: 79, category: "priroda", themes: ["prirodni-anomalie", "sopky"], lead: "Bahenni sopky a skalni umeni u Kaspiku, prirodni jev i archeologicka krajina vedle sebe." },
  { name: "Ateshgah Fire Temple", country: "Azerbajdzan", continent: "Asie", lat: 40.4150, lon: 50.0080, score: 78, category: "legenda", themes: ["ritual", "dabel"], lead: "Ohnovy chram u Baku, kde prirodni plyn, zoroastrijske a hinduisticke vrstvy vytvorily ritualni bod." },
  { name: "Yanar Dag", country: "Azerbajdzan", continent: "Asie", lat: 40.5020, lon: 49.8910, score: 77, category: "priroda", themes: ["dabel", "prirodni-anomalie"], lead: "Horici svah s uniky plynu, jednoducha, ale pusobiva ukazka zeme, ktera sama hori." },
  { name: "Shahr e Sukhteh", country: "Iran", continent: "Asie", lat: 30.5960, lon: 61.3280, score: 82, category: "ztracena-mesta", themes: ["archeologie", "poust"], lead: "Spalene mesto v Sistan, rozsahle naleziste bronzove doby na okraji poustni krajiny." },
  { name: "Bishapur Ruins", country: "Iran", continent: "Asie", lat: 29.7800, lon: 51.5700, score: 79, category: "ztracena-mesta", themes: ["archeologie", "mytologie"], lead: "Sasanske mesto s reliefy a palacem, kde rimske zajeti, moc a obrazova propaganda zanechaly stopu." },
  { name: "Persian Qanat of Gonabad", country: "Iran", continent: "Asie", lat: 34.3520, lon: 58.6830, score: 80, category: "podzemi", themes: ["podzemi", "technologie"], lead: "Stary podzemni vodni system, kde lidska technika prenasi vodu suchou krajinou po mnoho generaci." },
  { name: "Jiaohe Ruins", country: "Cina", continent: "Asie", lat: 42.9500, lon: 89.0600, score: 81, category: "ztracena-mesta", themes: ["ztracena-mesta", "poust"], lead: "Hlinene ruiny mesta v Turfanske prolakline, prirozena pevnost mezi skalnimi stenami a pousti." },
  { name: "Bezeklik Thousand Buddha Caves", country: "Cina", continent: "Asie", lat: 42.9500, lon: 89.5400, score: 80, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Jeskynni buddhisticke chramy v Sin-tiangu, poskozena, ale stale citelna vrstva hedvabne stezky." },
  { name: "Gaochang Ruins", country: "Cina", continent: "Asie", lat: 42.8500, lon: 89.5300, score: 79, category: "ztracena-mesta", themes: ["ztracena-mesta", "poust"], lead: "Zanikle oazove mesto u Turfanu, kde hedvabna stezka zanechala hlinene zdi a prazdne ulice." },
  { name: "Yumen Pass", country: "Cina", continent: "Asie", lat: 40.3500, lon: 93.8500, score: 77, category: "ztracena-mesta", themes: ["poust", "stredovek"], lead: "Jadeitova brana na okraji pouste Gobi, kontrolni bod cest a hranic stare Ciny." },
  { name: "Longmen Grottoes", country: "Cina", continent: "Asie", lat: 34.5550, lon: 112.4670, score: 84, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Tisice buddhistickych soch ve skalnich stenach u Luoyangu, monumentalni galerie viry a moci." },
  { name: "Yungang Grottoes", country: "Cina", continent: "Asie", lat: 40.1100, lon: 113.1200, score: 83, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Skalni jeskynni chramy u Datongu, kde cisarska podpora promenila skalu v buddhisticky svet." },
  { name: "Hanging Temple Hengshan", country: "Cina", continent: "Asie", lat: 39.6570, lon: 113.7060, score: 80, category: "legenda", themes: ["ritual", "prirodni-anomalie"], lead: "Chram prilepeny ke skalni stene, architektura balancujici mezi propasti, drevem a posvatnym mistem." },
  { name: "Mati Temple Grottoes", country: "Cina", continent: "Asie", lat: 38.5200, lon: 100.4000, score: 78, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Jeskynni chramy v Gansu, kde buddhisticke prostory sleduji skalni stenu a horske pruchody." },
  { name: "Bingling Temple Caves", country: "Cina", continent: "Asie", lat: 35.8000, lon: 103.3300, score: 79, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Skalni buddhisticke sochy u Zlute reky, chramova krajina pristupna pres vodu a kanon." },
  { name: "Houtouwan Abandoned Village", country: "Cina", continent: "Asie", lat: 30.7300, lon: 122.8200, score: 79, category: "ztracena-mesta", themes: ["ztracena-mesta", "ostrov"], lead: "Opustena rybarska vesnice pohlcena zeleni na ostrove Shengshan, priroda pomalu prebira domy." },
  { name: "Hashima Coal Mine Tunnels", country: "Japonsko", continent: "Asie", lat: 32.6278, lon: 129.7381, score: 80, category: "podzemi", themes: ["podzemi", "ztracena-mesta"], lead: "Podzemni tezebni vrstva Hashimy, mene viditelny, ale zasadni duvod existence betonoveho ostrova." },
  { name: "Sado Kitazawa Flotation Plant", country: "Japonsko", continent: "Asie", lat: 38.0300, lon: 138.2400, score: 77, category: "ztracena-mesta", themes: ["technologie", "ztracena-mesta"], lead: "Opusteny prumyslovy areal na Sadu, betonova krajina zpracovani rudy obrustana vegetaci." },
  { name: "Oya Stone Quarry", country: "Japonsko", continent: "Asie", lat: 36.5950, lon: 139.8200, score: 78, category: "podzemi", themes: ["podzemi", "technologie"], lead: "Obri podzemni kamenolom u Ucunomije, technicky prostor s atmosferou katedraly pod zemi." },
  { name: "Matsushiro Underground Imperial Headquarters", country: "Japonsko", continent: "Asie", lat: 36.5630, lon: 138.2050, score: 80, category: "podzemi", themes: ["podzemi", "valka"], lead: "Nedokoncene valecne tunely pro cisarske veleni, citlive podzemi posledni faze druhe svetove valky." },
  { name: "Aokigahara Lava Caves", country: "Japonsko", continent: "Asie", lat: 35.4770, lon: 138.6240, score: 81, category: "podzemi", themes: ["podzemi", "sopky"], lead: "Lavove jeskyne v lese pod Fudzi, prirodni podzemi spojene s ledem, tichem a opatrnou navstevnosti." },
  { name: "Iya Valley Vine Bridges", country: "Japonsko", continent: "Asie", lat: 33.8700, lon: 133.8400, score: 76, category: "priroda", themes: ["prirodni-labyrint", "mytologie"], lead: "Horske udoli s lanovymi mosty, krajina ukrytu, legend rodu Heike a hlubokych roklin." },
  { name: "Seongsan Ilchulbong", country: "Jizni Korea", continent: "Asie", lat: 33.4590, lon: 126.9420, score: 77, category: "priroda", themes: ["sopky", "oceany"], lead: "Sopecny tufovy kuzel na Jeju, vychod slunce, krater a more v jednom snadno citelnem tvaru." },
  { name: "Manjanggul Lava Tube", country: "Jizni Korea", continent: "Asie", lat: 33.5290, lon: 126.7710, score: 79, category: "podzemi", themes: ["podzemi", "sopky"], lead: "Lavovy tunel na Jeju, dlouhy podzemni prostor, kde sopecna minulost zustava citelna v chladne skale." },
  { name: "Seokguram Grotto", country: "Jizni Korea", continent: "Asie", lat: 35.7950, lon: 129.3490, score: 82, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Umela buddhisticka jeskyne nad Gyeongju, kde geometrie, socharstvi a vyhled k mori tvori jeden ritualni prostor." },
  { name: "Hahoe Mask Village", country: "Jizni Korea", continent: "Asie", lat: 36.5390, lon: 128.5180, score: 76, category: "legenda", themes: ["ritual", "mytologie"], lead: "Tradicni vesnice spojena s maskami a performanci, misto, kde spolecenska satira drzi ritualni pamet." },
  { name: "Tainan Anping Tree House", country: "Tchaj-wan", continent: "Asie", lat: 23.0000, lon: 120.1600, score: 76, category: "ztracena-mesta", themes: ["ztracena-mesta", "prirodni-anomalie"], lead: "Byvaly sklad pohlceny koreny banyanu, mestsky priklad prirody, ktera prepisuje kolonialni budovu." },
  { name: "Yehliu Queen Head", country: "Tchaj-wan", continent: "Asie", lat: 25.2070, lon: 121.6900, score: 75, category: "priroda", themes: ["prirodni-anomalie", "oceany"], lead: "Pobrezni geologicke tvary u Yehliu, kde eroze vytvorila slavnou hlavu a cele pole kamennych postav." },
  { name: "Longyou Caves", country: "Cina", continent: "Asie", lat: 29.0500, lon: 119.1800, score: 82, category: "podzemi", themes: ["podzemi", "pseudoveda"], lead: "Velke umele jeskyne v Zhejiang, technicky zahadny prostor casto obklopeny spornymi interpretacemi." },
  { name: "Shimao Ruins", country: "Cina", continent: "Asie", lat: 38.5600, lon: 110.3200, score: 81, category: "ztracena-mesta", themes: ["archeologie", "ztracena-mesta"], lead: "Velke opevnene naleziste v severni Cine, kde kamenne zdi posouvaji predstavu rane urbanizace." },
  { name: "Liangzhu City Ruins", country: "Cina", continent: "Asie", lat: 30.3900, lon: 119.9800, score: 82, category: "ztracena-mesta", themes: ["archeologie", "technologie"], lead: "Praveke mesto s vodnim systemem a jadeitovou kulturou, doklad slozite organizace v deltove krajine." },
  { name: "Plain of Reeds Kofun", country: "Japonsko", continent: "Asie", lat: 34.5630, lon: 135.4880, score: 77, category: "legenda", themes: ["umrti", "archeologie"], lead: "Mohylova krajina u Sakai, kde obri klicove hrobky ukazuji moc raneho japonskeho statu." },
  { name: "Iwami Ginzan Omori Town", country: "Japonsko", continent: "Asie", lat: 35.1090, lon: 132.4460, score: 76, category: "ztracena-mesta", themes: ["technologie", "ztracena-mesta"], lead: "Historicke hornicke mesto u stribrnych dolu, klidna povrchova vrstva rozsahle tezebni krajiny." },
  { name: "Phong Nha Paradise Cave", country: "Vietnam", continent: "Asie", lat: 17.5180, lon: 106.2250, score: 80, category: "podzemi", themes: ["podzemi", "prirodni-anomalie"], lead: "Mohutna krasova jeskyne v Phong Nha, turisticky pristupna cast obriho podzemniho systemu." },
  { name: "My Son Sanctuary", country: "Vietnam", continent: "Asie", lat: 15.7650, lon: 108.1240, score: 80, category: "ztracena-mesta", themes: ["ritual", "archeologie"], lead: "Camske chramove ruiny v zelenem udoli, kde hinduisticky ritual a valecne poskozeni sdileji jednu krajinu." },
  { name: "Hoa Lu Ancient Capital", country: "Vietnam", continent: "Asie", lat: 20.2530, lon: 105.9060, score: 77, category: "ztracena-mesta", themes: ["ztracena-mesta", "prirodni-labyrint"], lead: "Stare hlavni mesto mezi vapencovymi kopci, kde politika, chramy a krasova krajina tvori jeden uzavreny prostor." }
];

const places = readJson(placesPath);
const byId = new Map(places.map((place) => [place.id, place]));
rawPlaces.map(profile).forEach((place) => byId.set(place.id, place));
writeJson(placesPath, Array.from(byId.values()));

const articles = readJson(articlesPath);
const article = {
  id: "patnacta-vlna-stredni-asie-kavkaz-jeskyne",
  slug: "patnacta-vlna-stredni-asie-kavkaz-jeskyne",
  localizedSlugs: {
    cs: "patnacta-vlna-stredni-asie-kavkaz-jeskyne",
    en: "fifteenth-wave-central-asia-caucasus-caves",
    de: "fuenfzehnte-welle-zentralasien-kaukasus-hoehlen",
    es: "decimoquinta-ola-asia-central-caucaso-cuevas",
    fr: "quinzieme-vague-asie-centrale-caucase-grottes"
  },
  title: "Patnacta vlna: Stredni Asie, Kavkaz a jeskynni chramy",
  description: "Patnacta vlna pridava pevnosti, poustni ruiny, kavkazske klastery, ohnove chramy, jeskynni komplexy a prumyslova podzemi Asie.",
  category: "podzemi",
  themes: ["podzemi", "archeologie", "poust", "ritual"],
  relatedPlaceIds: rawPlaces.slice(0, 30).map((item) => slugify(item.name)),
  sections: [
    {
      heading: "Proc Stredni Asie",
      body: "Stredni Asie a Kavkaz davaji mape pevnosti, karavanseraje, oazova mesta a skalni klastery. Jsou to body, ktere rozsiruji katalog mimo obvykle evropske a americke dominanty."
    },
    {
      heading: "Jeskynni chramy",
      body: "Cinske a japonske podzemni lokality pridavaji velke sakralni i technicke prostory. U techto mist je dulezite odlisit skutecnou historii od exotizujicich nebo pseudovedeckych zkratek."
    },
    {
      heading: "Dalsi krok",
      body: "U patnacte vlny bude vhodne doplnit mistni nazvy, spravcovske zdroje, pristupnost a otevrene fotografie, protoze cast mist lezi v odlehlych nebo politicky citlivych regionech."
    }
  ],
  sources: ["wikidata", "wikipedia", "openstreetmap", "wikimedia-commons"]
};

const articlesById = new Map(articles.map((item) => [item.id, item]));
articlesById.set(article.id, article);
writeJson(articlesPath, Array.from(articlesById.values()));

console.log(`Upserted ${rawPlaces.length} fifteenth-wave places and 1 article.`);
