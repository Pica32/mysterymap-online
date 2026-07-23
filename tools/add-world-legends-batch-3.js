const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const placesPath = path.join(root, "data", "mista.json");
const articlesPath = path.join(root, "data", "articles.json");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8").replace(/^﻿/, ""));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

const newPlaces = [
  {
    id: "maunsell-forts-shivering-sands",
    slug: "maunsell-forts-shivering-sands",
    localizedSlugs: { cs: "maunsell-forts-shivering-sands", en: "maunsell-forts-shivering-sands", de: "maunsell-forts-shivering-sands", es: "maunsell-forts-shivering-sands", fr: "maunsell-forts-shivering-sands" },
    detailPath: "/mista/maunsell-forts-shivering-sands/",
    nazev: "Maunsellovy pevnosti (Shivering Sands)",
    zeme: "Spojene kralovstvi",
    kontinent: "Evropa",
    lead: "Protiletadlové pevnosti uprostřed ústí Temže, které po vyřazení z vojenské služby na čas obsadilo pirátské rádio.",
    gps: { lat: 51.4992, lon: 1.0747 },
    kategorie: ["opustene", "historie"],
    indexTajemna: 75,
    paranormalniAktivita: "žádná, jde o zdokumentovanou vojenskou a mediální historii",
    historickaDolozenost: "výborná",
    nebezpecnost: "vysoká (nestabilní konstrukce, nepřístupné bez povolení)",
    pristupnost: "nepřístupné, jen z lodi na dálku nebo se specializovanou plavbou",
    atmosfera: 4.1,
    nocniVhodnost: false,
    vhodneProDeti: false,
    popisy: {
      zahada: "Uprostřed ústí Temže stále trčí z moře skupina opuštěných protiletadlových věží z druhé světové války - a jedna z nich se na pár let stala nelegálním vysílačem rockové hudby.",
      historie: "Pevnosti navrhl britský stavební inženýr Guy Maunsell a postavily se v roce 1942 jako součást obrany ústí Temže. Každá sestávala ze sedmi věží na pilotech kolem centrální velitelské věže a společně sestřelily přes 30 létajících pum V1 a 22 nepřátelských letadel. Po válce byly v 50. letech vyřazeny z provozu a ponechány svému osudu, mořská voda postupně rozežírala jejich ocelové nohy.",
      legenda: "V 60. letech obsadili opuštěné věže provozovatelé nelegálního pirátského rádia - stanice Radio City, kterou roku 1964 založil Reginald Calvert, vysílala rock and roll z pevnosti Shivering Sands, dokud britský zákon o námořních přestupcích z roku 1967 podobné stanice nezakázal.",
      paranormalni: "Zchátralé věže dnes připomínají spíš postapokalyptickou kulisu než vojenskou stavbu a jejich siluetu na obzoru fotografové i cestovatelé často popisují jako jednu z nejpodivnějších v celé Anglii.",
      skepticke: "Chátrání konstrukcí je čistě materiálový proces koroze a podemílání mořským dnem, ne nic záhadného - dnes zůstávají stát jen dvě z původních pevností, Red Sands a Shivering Sands, a vstup na ně je kvůli zchátralé konstrukci prakticky vyloučen."
    },
    praktickeInfo: "Pevnosti nejsou veřejnosti přístupné kvůli nebezpečnému stavu konstrukce, prohlédnout si je lze jen z paluby specializovaných vyhlídkových plaveb kolem ústí Temže.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedia: Maunsell Forts", url: "https://en.wikipedia.org/wiki/Maunsell_Forts", licence: "CC BY-SA" },
      { nazev: "Wikidata: Shivering Sands Army Fort", url: "https://www.wikidata.org/wiki/Q1268270", licence: "CC0" },
      { nazev: "Wikipedia: Radio City (pirate radio station)", url: "https://en.wikipedia.org/wiki/Radio_City_(pirate_radio_station)", licence: "CC BY-SA" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Shivering%20Sands%20Fort", licence: "ODbL" }
    ],
    temata: ["valka", "media", "opustene"],
    pribehy: [
      { nazev: "Rádio z vojenské věže", text: "Reginald Calvert proměnil opuštěnou pevnost Shivering Sands ve vysílač stanice Radio City, dokud novému zákonu z roku 1967 neučinil přítrž." },
      { nazev: "Přeživší dvojice pevností", text: "Z celé sítě protiletadlových věží zůstávají stát jen dvě - Red Sands a Shivering Sands - zbytek podlehl korozi a mořskému proudu." }
    ]
  },
  {
    id: "holland-island-maryland",
    slug: "holland-island-maryland",
    localizedSlugs: { cs: "holland-island-maryland", en: "holland-island-maryland", de: "holland-island-maryland", es: "holland-island-maryland", fr: "holland-island-maryland" },
    detailPath: "/mista/holland-island-maryland/",
    nazev: "Holland Island",
    zeme: "USA",
    kontinent: "Severni Amerika",
    lead: "Rušný ostrovní ostrov v Chesapeake Bay se zemědělci, školou a baseballovým týmem, který moře po sto letech eroze úplně pohltilo.",
    gps: { lat: 38.1195, lon: -76.0883 },
    kategorie: ["opustene", "ostrov"],
    indexTajemna: 77,
    paranormalniAktivita: "žádná, jde o zdokumentovaný proces eroze a zániku",
    historickaDolozenost: "výborná",
    nebezpecnost: "žádná (ostrov dnes leží pod hladinou)",
    pristupnost: "fyzicky neexistuje, zbylo jen mělčí moře",
    atmosfera: 4.0,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Holland Island v Chesapeake Bay měl kolem roku 1910 přes 360 obyvatel, dva obchody, školu i baseballový tým - dnes z něj nezůstalo vůbec nic, protože ho moře doslova rozpustilo.",
      historie: "Ostrov osídlili kolonisté v 17. století a pojmenovali ho po prvním majiteli, Danielu Hollandovi. Protože byl tvořen měkkým bahnem a jílem, ne skálou, byl od přírody mimořádně náchylný k erozi - první výrazné ztráty pobřeží se objevily už roku 1914.",
      legenda: "Obyvatelé se pokoušeli ostrov zachránit dovážením kamenů na hráze a dokonce potápěním lodí, aby zpomalili erozi, žádný z pokusů ale dlouhodobě nezabral. Kolem roku 1920 se většina obyvatel odstěhovala a svých asi 60 domů si s sebou rozebraných odvezla na pevninu do měst jako Cambridge nebo Crisfield.",
      paranormalni: "Poslední zbylý dům z roku 1888 koupil bývalý námořník a metodistický kazatel v roce 1995 a roky se ho snažil sám opravovat a udržet - stal se symbolem marného boje s mořem, dokud bouře dům definitivně nezlomila.",
      skepticke: "Zánik ostrova je čistě geologický a klimatický jev: měkké bahnité podloží, stoupající hladina moře a tisíce let trvající sesedání půdy po ústupu ledovců z poslední doby ledové - poslední dům se zhroutil roku 2010 a ostrov jako celek zmizel pod hladinou definitivně roku 2012."
    },
    praktickeInfo: "Ostrov dnes fyzicky neexistuje a leží pod hladinou Chesapeake Bay, místo lze navštívit jen symbolicky lodí nad bývalou polohou ostrova.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedia: Holland Island", url: "https://en.wikipedia.org/wiki/Holland_Island", licence: "CC BY-SA" },
      { nazev: "Wikidata: Holland Island", url: "https://www.wikidata.org/wiki/Q5880990", licence: "CC0" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Holland%20Island%20Maryland", licence: "ODbL" }
    ],
    temata: ["opustene", "voda", "prirodni-anomalie"],
    pribehy: [
      { nazev: "Baseballový tým, který jezdil lodí", text: "Ostrov měl kolem roku 1910 přes 360 obyvatel a vlastní baseballový tým, který na zápasy s jinými ostrovy dojížděl lodí po zálivu." },
      { nazev: "Poslední dům proti moři", text: "Bývalý námořník koupil poslední zbylý dům roku 1995 a řadu let ho sám opravoval, než ho bouře definitivně zlomila a ostrov zmizel úplně." }
    ]
  },
  {
    id: "ryugyong-hotel",
    slug: "ryugyong-hotel",
    localizedSlugs: { cs: "ryugyong-hotel", en: "ryugyong-hotel", de: "ryugyong-hotel", es: "ryugyong-hotel", fr: "ryugyong-hotel" },
    detailPath: "/mista/ryugyong-hotel/",
    nazev: "Ryugyong Hotel",
    zeme: "Severni Korea",
    kontinent: "Asie",
    lead: "Pyramidová věž nad Pchjongjangem, kterou stavěli přes tři desetiletí a která je dodnes největší neobsazenou budovou na světě.",
    gps: { lat: 39.03667, lon: 125.73083 },
    kategorie: ["opustene"],
    indexTajemna: 76,
    paranormalniAktivita: "žádná, jde o zdokumentovanou stavební historii",
    historickaDolozenost: "dobrá, ačkoli mnoho detailů zůstává mimo veřejný přístup",
    nebezpecnost: "nízká pro pozorování zvenčí, budova je nepřístupná",
    pristupnost: "veřejnosti nepřístupná, viditelná jen zvenčí",
    atmosfera: 3.9,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "105patrová pyramidová věž nad Pchjongjangem stojí už skoro čtyři desetiletí - a přesto do ní dodnes nikdy nebyl vpuštěn jediný hotelový host.",
      historie: "Stavba began v roce 1987 z rozhodnutí Kim Ir-sona, který chtěl budovou zastínit vše, co do té doby postavili jihokorejští sousedé. Hrubá stavba dosáhla plánované výšky už v roce 1992, ale kvůli rozpadu Sovětského svazu a následné severokorejské hospodářské krizi zůstala dalších 16 let stát jako holá betonová konstrukce bez oken.",
      legenda: "Stavba se obnovila až v roce 2008 poté, co se na ní spolu s instalací severokorejské 3G sítě podílel egyptský konglomerát - budova pak dostala skleněný a kovový plášť a později i LED osvětlení, které z ní v noci dělá barevné divadlo nad hlavním městem.",
      paranormalni: "Novinářům i cestovatelům se budova vžila pod přezdívkou 'Hotel zkázy' a bývá řazena mezi nejpodivnější stavby světa právě kvůli kontrastu mezi monumentální velikostí a tím, že zůstává prázdná.",
      skepticke: "Zpoždění stavby má jasné a zdokumentované ekonomické a politické příčiny - kolaps sovětské podpory a následná severokorejská krize, ne nic záhadného - budova dodnes zůstává největší trvale neobsazenou stavbou na světě, ne kvůli kletbě, ale kvůli reálným finančním a technickým limitům."
    },
    praktickeInfo: "Budova je veřejnosti a turistům nepřístupná zevnitř, prohlédnout si ji lze jen zvenčí v rámci organizovaného turistického zájezdu do Pchjongjangu.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedia: Ryugyong Hotel", url: "https://en.wikipedia.org/wiki/Ryugyong_Hotel", licence: "CC BY-SA" },
      { nazev: "Wikidata: Ryugyong Hotel", url: "https://www.wikidata.org/wiki/Q29272", licence: "CC0" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Ryugyong%20Hotel%20Pyongyang", licence: "ODbL" }
    ],
    temata: ["opustene", "politika", "technologie"],
    pribehy: [
      { nazev: "16 let jako holý beton", text: "Po dosažení plánované výšky v roce 1992 stála budova dalších 16 let jako prázdná betonová konstrukce bez oken, než se stavba znovu rozeběhla." },
      { nazev: "Prázdná věž s LED divadlem", text: "Přes moderní skleněný plášť a barevné LED osvětlení zůstává budova dodnes bez jediného hosta - největší neobsazená stavba na světě." }
    ]
  },
  {
    id: "wat-rong-khun",
    slug: "wat-rong-khun",
    localizedSlugs: { cs: "wat-rong-khun", en: "wat-rong-khun", de: "wat-rong-khun", es: "wat-rong-khun", fr: "wat-rong-khun" },
    detailPath: "/mista/wat-rong-khun/",
    nazev: "Wat Rong Khun (Bílý chrám)",
    zeme: "Thajsko",
    kontinent: "Asie",
    lead: "Zářivě bílý thajský chrám, jehož most k nebi vede přes moře prosících rukou vystupujících z pekla.",
    gps: { lat: 19.82478, lon: 99.75778 },
    kategorie: ["legenda"],
    indexTajemna: 71,
    paranormalniAktivita: "náboženská symbolika, bez ověřených jevů",
    historickaDolozenost: "výborná (moderní stavba se zdokumentovaným autorem)",
    nebezpecnost: "žádná",
    pristupnost: "placený vstup, aktivní buddhistický chrám",
    atmosfera: 4.2,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Bílý chrám u Chiang Rai vypadá zdálky jako křehká ledová stavba, ale cesta k jeho vstupu vede přes symbolické moře rukou natažených z pekla - a uvnitř na diváka čekají malby s Michaelem Jacksonem i Terminátorem vedle buddhistických motivů.",
      historie: "Stavbu v roce 1997 založil thajský umělec Chalermchai Kositpipat na místě staršího zchátralého chrámu a dodnes ji vlastním nákladem rozšiřuje. Komplex ztělesňuje umělcovu osobní vizi nebe, pekla a nirvány a je stále nedokončeným, živým uměleckým dílem, ne historickou památkou.",
      legenda: "Návštěvníci přicházejí k hlavní síni přes most, který symbolicky překonává 'moře utrpení' - stovky sepjatých a prosících rukou vystupujících ze země představují zatracené duše hnané neukojenou touhou a chamtivostí. Most hlídají brány s hrozivými strážci, kteří mají oddělit svět touhy od cesty k očistě.",
      paranormalni: "Interiér hlavní síně přechází z čisté bílé barvy vstupu do plamenných maleb pekla plných démonických tváří a překvapivě i popkulturních postav, což z návštěvy dělá spíš umělecký zážitek než klasickou náboženskou pouť.",
      skepticke: "Celý komplex je transparentně moderní umělecké dílo jednoho žijícího autora s jasně zdokumentovaným záměrem, ne starobylá posvátná stavba opředená tajemstvím - jeho síla spočívá v promyšlené symbolice a vizuálním kontrastu, ne v skutečné nadpřirozené události."
    },
    praktickeInfo: "Chrám je aktivním turistickým i náboženským místem s placeným vstupem, doporučuje se slušné oblečení zakrývající ramena a kolena, fotografování uvnitř hlavní síně bývá omezené.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedia: Wat Rong Khun", url: "https://en.wikipedia.org/wiki/Wat_Rong_Khun", licence: "CC BY-SA" },
      { nazev: "Wikidata: Wat Rong Khun", url: "https://www.wikidata.org/wiki/Q496543", licence: "CC0" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Wat%20Rong%20Khun%20Chiang%20Rai", licence: "ODbL" }
    ],
    temata: ["ritual", "symboly", "popkultura"],
    pribehy: [
      { nazev: "Most přes moře rukou", text: "Cesta k hlavní síni vede přes most nad stovkami sepjatých rukou vystupujících ze země - symbol zatracených duší hnaných chamtivostí a touhou." },
      { nazev: "Terminátor vedle Buddhy", text: "Vnitřní malby překvapivě kombinují tradiční buddhistické motivy pekla s postavami popkultury, včetně Michaela Jacksona a Terminátora." }
    ]
  }
];

const newArticle = {
  id: "svetove-opustena-mista-a-stavby",
  slug: "svetove-opustena-mista-a-stavby",
  localizedSlugs: {
    cs: "svetove-opustena-mista-a-stavby",
    en: "world-abandoned-places-and-buildings",
    de: "weltweite-verlassene-orte-und-bauten",
    es: "lugares-y-construcciones-abandonados-del-mundo",
    fr: "lieux-et-batiments-abandonnes-du-monde"
  },
  title: "Pevnost, ostrov, mrakodrap a chrám: čtyři různé tváře opuštění a nedokončenosti",
  description: "Britské protiletadlové věže s pirátským rádiem, mizející ostrov v Chesapeake Bay, nikdy neotevřený severokorejský mrakodrap a thajský chrám plný pekelných rukou.",
  category: "opustene",
  themes: ["opustene", "svet", "legenda"],
  relatedPlaceIds: [
    "maunsell-forts-shivering-sands",
    "holland-island-maryland",
    "ryugyong-hotel",
    "wat-rong-khun"
  ],
  sections: [
    {
      heading: "Čtyři různé důvody, proč místo skončí prázdné",
      body: "Maunsellovy pevnosti opustila armáda, protože je nahradila lepší technologie. Holland Island pohltilo moře kvůli erozi měkkého podloží. Ryugyong Hotel zůstal prázdný kvůli zhroucené ekonomice. Žádný z těchto příběhů nepotřebuje nadpřirozené vysvětlení - síla místa je právě v tom, jak jasně dokládá skutečnou historickou, ekonomickou nebo geologickou příčinu opuštění."
    },
    {
      heading: "Wat Rong Khun jako výjimka z pravidla",
      body: "Na rozdíl od zbytku vlny není Bílý chrám opuštěný ani starobylý - je to živé, stále rostoucí umělecké dílo jednoho žijícího autora. Zařadili jsme ho vedle opuštěných míst schválně, aby bylo jasné, že motiv pekla a soudu může být i moderní, transparentně autorský umělecký záměr, ne jen stará lidová pověst."
    },
    {
      heading: "Co všechna čtyři místa spojuje",
      body: "Ať jde o vojenskou pevnost, mizející ostrov, nedokončený mrakodrap nebo živý chrám, každé z míst ukazuje jinou stránku toho, jak lidé zacházejí s velkými stavebními nebo přírodními projekty, které se nakonec vymkly původnímu plánu - opuštěním, zánikem, zpožděním nebo nekonečným rozšiřováním."
    }
  ],
  sources: ["wikidata", "wikipedia", "openstreetmap"]
};

const places = readJson(placesPath);
const byId = new Map(places.map((place) => [place.id, place]));
let inserted = 0;
newPlaces.forEach((place) => {
  if (!byId.has(place.id)) inserted += 1;
  byId.set(place.id, place);
});
writeJson(placesPath, Array.from(byId.values()));

const articles = readJson(articlesPath);
const articlesById = new Map(articles.map((item) => [item.id, item]));
articlesById.set(newArticle.id, newArticle);
writeJson(articlesPath, Array.from(articlesById.values()));

console.log(`Upserted ${inserted} new places and 1 article.`);
