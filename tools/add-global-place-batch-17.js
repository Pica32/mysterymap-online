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
      zahada: `${item.name} rozsiruje sedmnactou vlnu MysteryMap jako overitelny bod s GPS, tematem a vlastnim redakcnim seedem: ${item.lead}`,
      historie: "Historicka vrstva popisuje zakladni identitu mista a slouzi jako podklad pro pozdejsi lokalni overeni. Profil ma stabilni URL, zdroje a strukturu pro dalsi praci.",
      legenda: "Legendova vrstva ukazuje, proc se misto dostava do mapy: poustni pevnost, skalni chram, podzemni prostor, pamatka konfliktu, ostrovni izolace nebo prirodni anomalie.",
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
  { name: "Fasil Ghebbi", country: "Etiopie", continent: "Afrika", lat: 12.6080, lon: 37.4690, score: 80, category: "hrad", themes: ["hrad", "politika"], lead: "Opevneny kralovsky komplex v Gondaru, africka hradni krajina s etiopskou imperialni pameti." },
  { name: "Debre Damo Monastery", country: "Etiopie", continent: "Afrika", lat: 14.3730, lon: 39.2860, score: 81, category: "legenda", themes: ["ritual", "prirodni-anomalie"], lead: "Klaster na stolove hore pristupny po lane, kde izolace sama vytvari silny ritualni prah." },
  { name: "Abuna Yemata Guh", country: "Etiopie", continent: "Afrika", lat: 13.9060, lon: 39.3610, score: 83, category: "podzemi", themes: ["ritual", "prirodni-anomalie"], lead: "Skalni kostel vysoko ve stene, kde vystup k mistu patri k nejdramatictejsim poutnim zkusenostem." },
  { name: "Bete Giyorgis Lalibela", country: "Etiopie", continent: "Afrika", lat: 12.0315, lon: 39.0415, score: 84, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Samostatny profil krizoveho skalniho chramu v Lalibele, ikona vytesane architektury pod urovni terenu." },
  { name: "Debre Libanos Gorge", country: "Etiopie", continent: "Afrika", lat: 9.7180, lon: 38.8660, score: 77, category: "legenda", themes: ["ritual", "prirodni-labyrint"], lead: "Klaster a rokle severne od Addis Abeby, kde duchovni tradice stoji na hrane dramaticke krajiny." },
  { name: "Sof Omar Caves", country: "Etiopie", continent: "Afrika", lat: 6.9000, lon: 40.7700, score: 80, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Rozsahly jeskynni system s poutni tradici, kde reka a skala vytvareji prirodni podzemni chram." },
  { name: "Laas Geel", country: "Somaliland", continent: "Afrika", lat: 9.7800, lon: 44.4400, score: 82, category: "legenda", themes: ["archeologie", "zvirata"], lead: "Skalni malby u Hargeisy, vyrazny praveky obraz dobytka a lidske pritomnosti v suchych kopcich." },
  { name: "Dhulbahante Taleh Fort", country: "Somaliland", continent: "Afrika", lat: 9.1550, lon: 48.4120, score: 76, category: "hrad", themes: ["hrad", "politika"], lead: "Pevnostni ruiny dervisskeho statu, poustni pamet odporu, konfliktu a zanikle moci." },
  { name: "Fort Jesus Mombasa", country: "Kena", continent: "Afrika", lat: -4.0620, lon: 39.6790, score: 80, category: "hrad", themes: ["hrad", "oceany"], lead: "Portugalska pevnost v Mombase, kamenny uzel Indickeho oceanu, obchodu a kolonialni kontroly." },
  { name: "Lamu Old Town", country: "Kena", continent: "Afrika", lat: -2.2690, lon: 40.9020, score: 78, category: "ztracena-mesta", themes: ["oceany", "ztracena-mesta"], lead: "Svahilske ostrovni mesto, kde uzke ulice, more a obchodni pamet vytvareji pomaly labyrint." },
  { name: "Kondoa Rock Art", country: "Tanzanie", continent: "Afrika", lat: -4.7240, lon: 35.8340, score: 79, category: "legenda", themes: ["archeologie", "ritual"], lead: "Skalni malby ve stredni Tanzanii, rozsahla galerie lidskych a zvirrecich motivu v suchych kopcich." },
  { name: "Amboni Caves", country: "Tanzanie", continent: "Afrika", lat: -5.0200, lon: 39.0600, score: 76, category: "podzemi", themes: ["podzemi", "mytologie"], lead: "Vapencove jeskyne u Tangy, misto lokalnich pover, ukrytu a prirodniho labyrintu." },
  { name: "Isimila Stone Age Site", country: "Tanzanie", continent: "Afrika", lat: -7.7000, lon: 35.7500, score: 75, category: "legenda", themes: ["archeologie", "prirodni-anomalie"], lead: "Erozni sloupy a nalezy kamennych nastroju, kde geologie a praveka pritomnost sdileji jedno udoli." },
  { name: "Kasubi Tombs", country: "Uganda", continent: "Afrika", lat: 0.3480, lon: 32.5530, score: 78, category: "legenda", themes: ["umrti", "ritual"], lead: "Kralovske hrobky Bugandy, citlive misto identity, ritualu a obnovovane materialni pameti." },
  { name: "Nyero Rock Paintings", country: "Uganda", continent: "Afrika", lat: 1.4700, lon: 33.7800, score: 76, category: "legenda", themes: ["archeologie", "ritual"], lead: "Skalni malby ve vychodni Ugande, geometricke motivy s nejasnym vyznamem a dlouhou lokalni pameti." },
  { name: "Amabeere Caves", country: "Uganda", continent: "Afrika", lat: 0.6550, lon: 30.2750, score: 75, category: "podzemi", themes: ["podzemi", "mytologie"], lead: "Jeskynni a vodopadova krajina spojena s ugandskou legendou o Nyinamwiru a kamennych prsou." },
  { name: "Nyiragongo Lava Lake", country: "Kongo", continent: "Afrika", lat: -1.5220, lon: 29.2490, score: 86, category: "katastrofa", themes: ["sopky", "dabel"], lead: "Aktivni sopka nad Goma, lavove jezero a realne riziko v huste obydlene sopecne krajine." },
  { name: "Lola ya Bonobo Forest", country: "Kongo", continent: "Afrika", lat: -4.4890, lon: 15.2660, score: 73, category: "priroda", themes: ["zvirata", "prirodni-anomalie"], lead: "Lesni utociste bonobu u Kinshasy, biologicky jedinecny bod pro tematiku zvlastnich zvirat." },
  { name: "Kahuzi Biega Gorilla Forest", country: "Kongo", continent: "Afrika", lat: -2.5000, lon: 28.7500, score: 78, category: "priroda", themes: ["zvirata", "prirodni-labyrint"], lead: "Horsky a nizinny prales s gorilami, prirodni prostor mezi ochranou, konfliktem a obtiznou pristupnosti." },
  { name: "Loango Ghost Coast", country: "Gabon", continent: "Afrika", lat: -2.2200, lon: 9.5800, score: 76, category: "priroda", themes: ["oceany", "zvirata"], lead: "Pobrezni prales a plaze Loanga, kde se zvirata, ocean a mlha potkavaji v neobvyklem obrazu." },
  { name: "Kong Lor Cave", country: "Laos", continent: "Asie", lat: 17.9500, lon: 104.8100, score: 80, category: "podzemi", themes: ["podzemi", "prirodni-labyrint"], lead: "Ricni jeskynni tunel v Laosu, dlouha plavba temnotou skrze vapencovou horu." },
  { name: "Son Doong Cave", country: "Vietnam", continent: "Asie", lat: 17.4570, lon: 106.2870, score: 86, category: "podzemi", themes: ["podzemi", "prirodni-anomalie"], lead: "Obri vietnamska jeskyne s vlastnim mikroklimatem, lesem a meritkem, ktere presahuje bezne podzemi." },
  { name: "Hang En Cave", country: "Vietnam", continent: "Asie", lat: 17.4720, lon: 106.2880, score: 80, category: "podzemi", themes: ["podzemi", "prirodni-anomalie"], lead: "Velka jeskyne v Phong Nha s plazi a kolonii ptaku, prah k vetsim podzemnim systemum." },
  { name: "Tam Coc Karst", country: "Vietnam", continent: "Asie", lat: 20.2150, lon: 105.9370, score: 77, category: "priroda", themes: ["prirodni-labyrint", "podzemi"], lead: "Ricni kras u Ninh Binh, lodni cesta mezi vapencovymi vezemi a kratkymi tunely." },
  { name: "Trang An Grottoes", country: "Vietnam", continent: "Asie", lat: 20.2500, lon: 105.9170, score: 79, category: "podzemi", themes: ["podzemi", "prirodni-labyrint"], lead: "Krajina vodnich jeskyni a chramu, kde se krasove podzemi proplouva jako pomaly labyrint." },
  { name: "Po Nagar Cham Towers", country: "Vietnam", continent: "Asie", lat: 12.2650, lon: 109.1950, score: 76, category: "legenda", themes: ["ritual", "archeologie"], lead: "Camske veze nad Nha Trangem, sakralni vrstva pobrezi, kde hinduisticka a lokalni tradice pretrvavaji." },
  { name: "Cuc Phuong Ancient Cave", country: "Vietnam", continent: "Asie", lat: 20.3170, lon: 105.6080, score: 75, category: "podzemi", themes: ["podzemi", "archeologie"], lead: "Jeskynni naleziste v narodnim parku, kde prales a praveka stopa lezi velmi blizko sebe." },
  { name: "Po Klong Garai Towers", country: "Vietnam", continent: "Asie", lat: 11.6020, lon: 108.9520, score: 75, category: "legenda", themes: ["ritual", "archeologie"], lead: "Camske cihlove veze v suche krajine Ninh Thuan, misto stale zive ritualni tradice." },
  { name: "Plain of Reeds Tram Chim", country: "Vietnam", continent: "Asie", lat: 10.7160, lon: 105.5330, score: 73, category: "priroda", themes: ["zvirata", "oceany"], lead: "Mokrady delty Mekongu, prirodni krajina ptaku a zaplav, ktera kontrastuje s chramovymi lokalitami." },
  { name: "Kbal Spean", country: "Kambodza", continent: "Asie", lat: 13.6040, lon: 104.0060, score: 79, category: "legenda", themes: ["ritual", "prirodni-anomalie"], lead: "Ritualni skalni koryto s lingamy v Kambodzi, kde voda prechazi pres vytesany mytologicky povrch." },
  { name: "Sambor Prei Kuk", country: "Kambodza", continent: "Asie", lat: 12.8730, lon: 105.0450, score: 80, category: "ztracena-mesta", themes: ["archeologie", "ritual"], lead: "Predangkorske chramove mesto v lese, cihlove veze a ticha vrstva starsi khmerske moci." },
  { name: "Ta Prohm Angkor", country: "Kambodza", continent: "Asie", lat: 13.4350, lon: 103.8890, score: 84, category: "ztracena-mesta", themes: ["archeologie", "prirodni-labyrint"], lead: "Chram propleteny koreny stromu, ikonicky obraz napeti mezi archeologii a pralesem." },
  { name: "Angkor Thom Bayon", country: "Kambodza", continent: "Asie", lat: 13.4410, lon: 103.8590, score: 84, category: "legenda", themes: ["mytologie", "ritual"], lead: "Chram tvari v centru Angkor Thom, monumentalni pohled kamene, krale a kosmickeho mesta." },
  { name: "Phnom Bakheng", country: "Kambodza", continent: "Asie", lat: 13.4240, lon: 103.8560, score: 77, category: "legenda", themes: ["ritual", "kosmicka-anomalie"], lead: "Chramova hora nad Angkorem, kde urbanisticka osa, zapad slunce a davna kosmologie tvori jeden bod." },
  { name: "Ban Chiang Archaeological Site", country: "Thajsko", continent: "Asie", lat: 17.4070, lon: 103.2360, score: 78, category: "legenda", themes: ["archeologie", "technologie"], lead: "Archeologicke naleziste v Isanu, keramika, bronz a dlouha debata o ranych technologiich." },
  { name: "Muang Tam Sanctuary", country: "Thajsko", continent: "Asie", lat: 14.4970, lon: 102.9830, score: 76, category: "legenda", themes: ["ritual", "archeologie"], lead: "Khmerska svatyne s vodnimi nadrzemi, symetricky sakralni prostor v thajskem vnitrozemi." },
  { name: "Prasat Hin Phimai", country: "Thajsko", continent: "Asie", lat: 15.2190, lon: 102.4940, score: 78, category: "legenda", themes: ["ritual", "archeologie"], lead: "Khmersky chram v Phimai, severozapadni odraz angkorske ritualni krajiny a cest." },
  { name: "Khao Luang Cave Phetchaburi", country: "Thajsko", continent: "Asie", lat: 13.1240, lon: 99.9470, score: 76, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Jeskynni chram se svetelnymi paprsky a sochami, kde denni svet vytvari teatralni poutni scenu." },
  { name: "Lopburi Monkey Temples", country: "Thajsko", continent: "Asie", lat: 14.8020, lon: 100.6110, score: 75, category: "legenda", themes: ["zvirata", "ritual"], lead: "Chramy v Lopburi obyvane opicemi, zivy stret mytologie, mesta a zvireci pritomnosti." },
  { name: "Bokeo Treehouse Gibbon Forest", country: "Laos", continent: "Asie", lat: 20.5000, lon: 100.6500, score: 74, category: "priroda", themes: ["zvirata", "prirodni-labyrint"], lead: "Lesni koruny a gibboni v severnim Laosu, prirodni labyrint vysoko nad zemi." },
  { name: "Hoi An Japanese Bridge", country: "Vietnam", continent: "Asie", lat: 15.8770, lon: 108.3260, score: 75, category: "legenda", themes: ["stredovek", "oceany"], lead: "Most ve starem Hoi Anu, maly, ale silny symbol obchodniho mesta a mezikulturni pameti." },
  { name: "Hue Imperial Tombs", country: "Vietnam", continent: "Asie", lat: 16.4330, lon: 107.5670, score: 79, category: "legenda", themes: ["umrti", "politika"], lead: "Kralovske hrobky u Hue, krajina vod, zahrad a moci, kde smrt dostala ceremonialni architekturu." },
  { name: "Cu Chi Tunnels", country: "Vietnam", continent: "Asie", lat: 11.1420, lon: 106.4640, score: 82, category: "podzemi", themes: ["podzemi", "valka"], lead: "Tunelovy system vietnamske valky, kde podzemi fungovalo jako taktika, ukryt i psychologicky prostor." },
  { name: "Vinh Moc Tunnels", country: "Vietnam", continent: "Asie", lat: 17.0780, lon: 107.1080, score: 81, category: "podzemi", themes: ["podzemi", "valka"], lead: "Podzemni vesnice u demilitarizovane zony, civilni odpoved na bombardovani a dlouhy konflikt." },
  { name: "Con Dao Prison", country: "Vietnam", continent: "Asie", lat: 8.6860, lon: 106.6080, score: 82, category: "veznice", themes: ["veznice", "politika"], lead: "Ostrovni veznice Con Dao, misto kolonialni a valecne represe s velmi citlivou pameti." },
  { name: "Cat Ba Hospital Cave", country: "Vietnam", continent: "Asie", lat: 20.7850, lon: 106.9920, score: 77, category: "podzemi", themes: ["podzemi", "valka"], lead: "Nemocnicni jeskyne na Cat Ba, valecne podzemi ukryte v krasovem ostrove." },
  { name: "Ba Be Lake Caves", country: "Vietnam", continent: "Asie", lat: 22.4070, lon: 105.6230, score: 75, category: "podzemi", themes: ["podzemi", "oceany"], lead: "Jezerni a jeskynni krajina severniho Vietnamu, kde voda prochazi mezi vapencem a vesnicemi." },
  { name: "Ha Long Dau Go Cave", country: "Vietnam", continent: "Asie", lat: 20.9080, lon: 107.0320, score: 76, category: "podzemi", themes: ["podzemi", "oceany"], lead: "Jeskyne v zatoce Ha Long, prirodni dutina v ikonicke krajine ostrovnich vapencovych vezi." },
  { name: "Sra Morakot Emerald Pool", country: "Thajsko", continent: "Asie", lat: 7.9230, lon: 99.2690, score: 73, category: "priroda", themes: ["prirodni-anomalie", "ritual"], lead: "Mineralni bazen v krabijske dzungli, barevny vodni bod mezi termalnim jevem a turistickym ritualem." },
  { name: "Khao Sok Cheow Lan Lake", country: "Thajsko", continent: "Asie", lat: 8.9860, lon: 98.6890, score: 76, category: "priroda", themes: ["prirodni-labyrint", "oceany"], lead: "Jezero mezi vapencovymi vezemi a pralesem, umele zatopena krajina s pusobivym tichem." },
  { name: "Langkawi Pregnant Maiden Lake", country: "Malajsie", continent: "Asie", lat: 6.1830, lon: 99.8000, score: 75, category: "ostrov", themes: ["ostrov", "mytologie"], lead: "Jezero na ostrove Dayang Bunting, prirodni tvar a legenda o tehotne divce v jednom prostoru." },
  { name: "Shali Fortress Siwa", country: "Egypt", continent: "Afrika", lat: 29.2030, lon: 25.5200, score: 78, category: "hrad", themes: ["hrad", "poust"], lead: "Hlinena pevnost v oaze Siwa, rozpadajici se labyrint soli, blata a poustni komunity." },
  { name: "Qasr Dakhla Old Town", country: "Egypt", continent: "Afrika", lat: 25.6950, lon: 28.8830, score: 76, category: "ztracena-mesta", themes: ["poust", "ztracena-mesta"], lead: "Stare oazove mesto v Dachle, uzke ulice, hlinene domy a pamet obchodnich cest." },
  { name: "Kharga Hibis Temple", country: "Egypt", continent: "Afrika", lat: 25.4500, lon: 30.5500, score: 76, category: "legenda", themes: ["ritual", "poust"], lead: "Chram v oaze Charga, izolovany sakralni bod mezi perskou vrstvou Egypta a poustni krajinou." },
  { name: "Makhtesh Ramon Crater", country: "Izrael", continent: "Asie", lat: 30.5830, lon: 34.8000, score: 78, category: "priroda", themes: ["poust", "prirodni-anomalie"], lead: "Obri erozni krater v Negevu, geologicky amfiteatr, ktery vypada jako impakt, ale vznikl jinak." },
  { name: "Avdat Nabatean City", country: "Izrael", continent: "Asie", lat: 30.7930, lon: 34.7720, score: 77, category: "ztracena-mesta", themes: ["poust", "archeologie"], lead: "Nabatejske mesto na kadidlove stezce, poustni ruiny mezi obchodem, vodou a pozdejsi pevnosti." },
  { name: "Umm ar Rasas", country: "Jordansko", continent: "Asie", lat: 31.5000, lon: 35.9200, score: 76, category: "ztracena-mesta", themes: ["archeologie", "ritual"], lead: "Ruiny a mozaiky v jordanske stepi, krestanska a rimska vrstva opusteneho poustniho osidleni." }
];

const places = readJson(placesPath);
const byId = new Map(places.map((place) => [place.id, place]));
rawPlaces.map(profile).forEach((place) => byId.set(place.id, place));
writeJson(placesPath, Array.from(byId.values()));

const articles = readJson(articlesPath);
const article = {
  id: "sedmnacta-vlna-afrika-mekong-podzemi",
  slug: "sedmnacta-vlna-afrika-mekong-podzemi",
  localizedSlugs: {
    cs: "sedmnacta-vlna-afrika-mekong-podzemi",
    en: "seventeenth-wave-africa-mekong-underground",
    de: "siebzehnte-welle-afrika-mekong-untergrund",
    es: "decimoseptima-ola-africa-mekong-subterraneo",
    fr: "dix-septieme-vague-afrique-mekong-souterrains"
  },
  title: "Sedmnacta vlna: Afrika, Mekong a podzemni krajiny",
  description: "Sedmnacta vlna pridava africke skalni kostely, pevnosti a pralesy spolu s mekongskymi jeskynemi, khmerskymi chramy a vietnamskymi tunely.",
  category: "podzemi",
  themes: ["podzemi", "ritual", "valka", "prirodni-labyrint"],
  relatedPlaceIds: rawPlaces.slice(0, 30).map((item) => slugify(item.name)),
  sections: [
    {
      heading: "Proc Afrika a Mekong",
      body: "Africke lokace pridavaji pevnosti, skalni chramy, praveke obrazy a prirodni rizika. Mekong a jihovychodni Asie zase rozsiruji mapu o jeskynni, ricni a pralesni systemy."
    },
    {
      heading: "Podzemi a konflikty",
      body: "Tunely, kryty a valecne prostory maji silny potencial pro mapu, ale vyzaduji respekt k utrpeni a jasne oddeleni historie od senzace."
    },
    {
      heading: "Dalsi krok",
      body: "U sedmnacte vlny bude vhodne doplnit lokalni spravcovske zdroje, aktualni pristupnost a bezpecnostni varovani pro jeskyne, sopky a citlive pamatky konfliktu."
    }
  ],
  sources: ["wikidata", "wikipedia", "openstreetmap", "wikimedia-commons"]
};

const articlesById = new Map(articles.map((item) => [item.id, item]));
articlesById.set(article.id, article);
writeJson(articlesPath, Array.from(articlesById.values()));

console.log(`Upserted ${rawPlaces.length} seventeenth-wave places and 1 article.`);
