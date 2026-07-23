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
    id: "obelisk-of-axum",
    slug: "obelisk-of-axum",
    localizedSlugs: { cs: "obelisk-axum", en: "obelisk-of-axum", de: "obelisk-von-axum", es: "obelisco-de-axum", fr: "obelisque-d-axoum" },
    detailPath: "/mista/obelisk-of-axum/",
    nazev: "Obelisk z Axumu",
    zeme: "Etiopie",
    kontinent: "Afrika",
    lead: "Čtyřiadvacetimetrový monolit staré etiopské říše stojí kousek od kostela, který podle etiopské tradice ukrývá samotnou Archu úmluvy.",
    gps: { lat: 14.13222, lon: 38.71972 },
    kategorie: ["historie", "legenda"],
    indexTajemna: 79,
    paranormalniAktivita: "silná náboženská tradice, bez archeologického potvrzení",
    historickaDolozenost: "výborná (samotné stély), legenda o Arše nepotvrzena",
    nebezpecnost: "nízká",
    pristupnost: "volně přístupné historické pole, kostel má omezený přístup",
    atmosfera: 4.2,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Na poli u etiopského města Axum stojí přes 120 kamenných stél ze 4. století, z nichž největší dochovaný obelisk měří 24 metrů a váží 160 tun - jen pár set metrů od kostela, kde má být podle místní tradice ukrytá biblická Archa úmluvy.",
      historie: "Severní stélové pole v Axumu je pozůstatkem staré Axumské říše a obsahuje více než 120 monolitů datovaných většinou do let 300-500 n. l. Obelisk z Axumu, vytesaný z jediného kusu kamene podobného žule, je jedním z nejzachovalejších a měří 24 metrů. Kostel Panny Marie Sionské v současné podobě pochází ze 17. století a stojí na místě staršího svatostánku.",
      legenda: "Podle etiopské kroniky Kebra Nagast (Sláva králů) se v Axumu ukrývá biblická Archa úmluvy, kterou měl do Etiopie přinést Menelik I., syn královny ze Sáby a krále Šalamouna. Archa má být uložena v malé, bezoké kapli v areálu kostela, kam nesmí vstoupit nikdo kromě jednoho pověřeného strážce po celý jeho život.",
      paranormalni: "Tradice o Arše je pro etiopskou pravoslavnou církev živou a hluboce ctěnou vírou, ne pouhou turistickou legendou - strážce Archy žije v izolaci u kaple a veřejnosti se nikdy neukazuje.",
      skepticke: "Pro přítomnost Archy úmluvy v Axumu neexistuje žádný archeologický důkaz a historikové ji považují za nábožensky motivovaný mýtus spojující etiopskou církev se starozákonní tradicí - samotné stély a Axumská říše jsou naopak historicky i archeologicky bohatě doložené bez ohledu na legendu o Arše."
    },
    praktickeInfo: "Stélové pole je volně přístupné jako archeologický park, kaple s údajnou Archou je uzavřená veřejnosti a přístupná jen jmenovanému strážci, návštěva kostela vyžaduje respekt k aktivnímu náboženskému provozu.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedia: Obelisk of Axum", url: "https://en.wikipedia.org/wiki/Obelisk_of_Axum", licence: "CC BY-SA" },
      { nazev: "Wikidata: Obelisk of Axum", url: "https://www.wikidata.org/wiki/Q2308606", licence: "CC0" },
      { nazev: "UNESCO World Heritage - Aksum", url: "https://whc.unesco.org/en/list/15/", licence: "oficiální zdroj / UNESCO dokumentace" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Axum%20Stelae%20Field", licence: "ODbL" }
    ],
    temata: ["legenda", "ritual", "stredovek"],
    pribehy: [
      { nazev: "Strážce, který nikdy neodejde", text: "Podle etiopské tradice hlídá Archu úmluvy jediný pověřený mnich, který zbytek života stráví v izolaci u kaple a veřejnosti se nikdy neukazuje." },
      { nazev: "Menelikova cesta ze Sáby", text: "Kronika Kebra Nagast vypráví, jak syn královny ze Sáby a krále Šalamouna přinesl Archu úmluvy z Jeruzaléma do Etiopie - základní kámen celé tradice." }
    ]
  },
  {
    id: "fingals-cave",
    slug: "fingals-cave",
    localizedSlugs: { cs: "fingalova-jeskyne", en: "fingals-cave", de: "fingals-hoehle", es: "cueva-de-fingal", fr: "grotte-de-fingal" },
    detailPath: "/mista/fingals-cave/",
    nazev: "Fingalova jeskyně",
    zeme: "Skotsko",
    kontinent: "Evropa",
    lead: "Přírodní jeskyně z čedičových sloupů na skotském ostrově Staffa, kterou legenda spojuje s obřím mostem přes moře do Irska.",
    gps: { lat: 56.43389, lon: -6.33611 },
    kategorie: ["priroda", "legenda"],
    indexTajemna: 78,
    paranormalniAktivita: "keltská mytologie, bez ověřených jevů",
    historickaDolozenost: "výborná geologická dokumentace",
    nebezpecnost: "střední (přístup lodí, kluzké skály, závislé na počasí)",
    pristupnost: "sezónní lodní výlety, bez trvalé infrastruktury",
    atmosfera: 4.4,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Na neobydleném ostrově Staffa se tyčí 69 metrů nad mořem jeskyně vytvořená z dokonale pravidelných šestibokých čedičových sloupů - a keltská legenda tvrdí, že jde o zbytek mostu, po kterém měl kdysi přejít obr.",
      historie: "Jeskyně vznikla asi před 60 miliony let stejným tokem lávy, který vytvořil i severoirský Giant's Causeway - obě lokality sdílejí naprosto stejnou geologickou strukturu šestibokých čedičových sloupů.",
      legenda: "Podle legendy postavil irský obr Fionn mac Cumhaill (jehož jméno se zkráceně vykládá jako Fingal, 'bílý cizinec') přes moře do Skotska kamenný most, aby mohl vyzvat na souboj svého skotského rivala. Fingalova jeskyně je podle pověsti skotský konec tohoto mostu, jehož zbytek na irské straně tvoří Giant's Causeway.",
      paranormalni: "Jeskyně je proslulá i neobvyklou akustikou - odražené vlny a vítr v ní vytvářejí zvláštní tóny, které jí vynesly skotské jméno 'jeskyně melodie' a inspirovaly i slavnou hudební skladbu 19. století.",
      skepticke: "Šestiboké sloupy v obou lokalitách vznikly identickým geologickým procesem prudkého chladnutí a smršťování lávy, ne stavební činností obrů - shoda tvarů na obou březích Severního kanálu legendu jen posílila, protože přirozeně vypadá jako přerušený most."
    },
    praktickeInfo: "Ostrov Staffa je bez trvalého osídlení a přístupný jen sezónními vyhlídkovými plavbami z Mullu nebo Oban, návštěva závisí na počasí a stavu moře, uvnitř jeskyně je kluzký terén.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedia: Fingal's Cave", url: "https://en.wikipedia.org/wiki/Fingal%27s_Cave", licence: "CC BY-SA" },
      { nazev: "Wikidata: Fingal's Cave", url: "https://www.wikidata.org/wiki/Q403134", licence: "CC0" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Fingal%27s%20Cave%20Staffa", licence: "ODbL" }
    ],
    temata: ["legenda", "mytologie", "prirodni-anomalie"],
    pribehy: [
      { nazev: "Zbořený most obrů", text: "Legenda tvrdí, že Fingalova jeskyně a severoirský Giant's Causeway jsou dva konce jednoho mostu, který přes moře postavil irský obr Fionn mac Cumhaill." },
      { nazev: "Jeskyně, která zpívá", text: "Neobvyklá akustika jeskyně vytvářená odrazem vln a prouděním vzduchu jí vynesla přezdívku 'jeskyně melodie' a inspirovala i slavnou hudební skladbu." }
    ]
  },
  {
    id: "crooked-forest-poland",
    slug: "crooked-forest-poland",
    localizedSlugs: { cs: "krivy-les-polsko", en: "crooked-forest-poland", de: "krummer-wald-polen", es: "bosque-torcido-polonia", fr: "foret-tordue-pologne" },
    detailPath: "/mista/crooked-forest-poland/",
    nazev: "Křivý les (Krzywy Las)",
    zeme: "Polsko",
    kontinent: "Evropa",
    lead: "Skupina borovic u polského Gryfina roste s podivným obloukovým ohybem u kořenů, jehož příčinu se dodnes nepodařilo s jistotou vysvětlit.",
    gps: { lat: 53.21389, lon: 14.475 },
    kategorie: ["priroda", "legenda"],
    indexTajemna: 74,
    paranormalniAktivita: "žádná, jde o nevyřešenou přírodní anomálii",
    historickaDolozenost: "dobrá (výsadba je datovaná, příčina ohybu ne)",
    nebezpecnost: "nízká",
    pristupnost: "volně přístupné",
    atmosfera: 4.0,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Přibližně 400 borovic vysazených kolem roku 1930 u obce Nowe Czarnowo poblíž Gryfina roste s téměř identickým obloukovým ohybem těsně nad zemí, než pokračují rovně vzhůru - a nikdo si není jistý, co ohyb způsobilo.",
      historie: "Lesníci vysadili borovice v pravidelných řadách kolem roku 1930 v tehdejším Německu, dnešním severozápadním Polsku. Podle odborných odhadů k deformaci došlo, když bylo stromům pouhých 5 až 7 let.",
      legenda: "Kolem ohybu koluje řada teorií: že šlo o záměrnou lidskou techniku ohýbání dřeva pro výrobu nábytku nebo lodních trupů, že za ním stojí sněhová bouře, která stromky v mládí přitlačila k zemi, nebo že jde o důsledek nějakého neznámého přírodního tlaku působícího jen na tuto skupinu.",
      paranormalni: "Přesně stejný směr a tvar ohybu u všech postižených stromů dodává lesu silně nadpřirozenou atmosféru, přestože jde nejspíš o kombinaci lidského zásahu a přírodních podmínek v raném stádiu růstu.",
      skepticke: "Nejpravděpodobnějším vysvětlením zůstává záměrná lesnická technika k získání přirozeně zakřiveného dřeva pro nábytkářství nebo stavbu lodí, podobný postup je historicky doložený i jinde v Evropě - přesný mechanismus se ale nikdy nepodařilo definitivně potvrdit a čas na jeho objasnění se krátí, protože z původních 400 stromů dnes přežívá jen asi 100."
    },
    praktickeInfo: "Les je volně přístupný bez vstupného, nachází se u vesnice Nowe Czarnowo poblíž Gryfina v severozápadním Polsku, doporučuje se pohybovat jen po vyznačených cestách kvůli ochraně stárnoucích stromů.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedia: Crooked Forest", url: "https://en.wikipedia.org/wiki/Crooked_Forest", licence: "CC BY-SA" },
      { nazev: "Wikidata: Crooked Forest", url: "https://www.wikidata.org/wiki/Q1602409", licence: "CC0" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Krzywy%20Las%20Gryfino", licence: "ODbL" }
    ],
    temata: ["prirodni-anomalie", "legenda", "pseudoveda"],
    pribehy: [
      { nazev: "Dřevo pro lodě, nebo sníh?", text: "Dvě hlavní teorie si konkurují dodnes: záměrná lesnická technika pro získání zakřiveného dřeva, nebo náhodná deformace způsobená sněhovou bouří v raném věku stromů." },
      { nazev: "Závod s časem", text: "Z původních asi 400 pokřivených borovic dnes přežívá jen čtvrtina, což vědce nutí hledat vysvětlení dřív, než zbylé stromy zaniknou přirozeným stárnutím." }
    ]
  },
  {
    id: "dark-hedges",
    slug: "dark-hedges",
    localizedSlugs: { cs: "temna-zivotplot", en: "dark-hedges", de: "dark-hedges", es: "dark-hedges", fr: "dark-hedges" },
    detailPath: "/mista/dark-hedges/",
    nazev: "Dark Hedges",
    zeme: "Severni Irsko",
    kontinent: "Evropa",
    lead: "Alej starých buků v Severním Irsku, kterou proslavil seriál Game of Thrones - a dávno předtím legenda o Šedé dámě mizející u posledního stromu.",
    gps: { lat: 55.1344, lon: -6.3806 },
    kategorie: ["priroda", "legenda"],
    indexTajemna: 76,
    paranormalniAktivita: "silná lidová tradice, bez ověřených jevů",
    historickaDolozenost: "dobrá (výsadba je historicky doložená)",
    nebezpecnost: "nízká (pozor na provoz na úzké silnici)",
    pristupnost: "veřejná silnice, volně přístupné",
    atmosfera: 4.5,
    nocniVhodnost: true,
    vhodneProDeti: true,
    popisy: {
      zahada: "Alej přes 150 buků podél cesty Bregagh Road v hrabství Antrim vytváří tunel propletených větví, kterým má za soumraku procházet tichá přízračná postava mizející u posledního stromu.",
      historie: "Stromy nechal na konci 18. století vysadit James Stuart jako honosnou přístupovou cestu ke svému georgiánskému sídlu Gracehill House. Přes 150 buků postupně srostlo do charakteristického propleteného tunelu, který je dnes chráněnou přírodní i kulturní památkou.",
      legenda: "Podle místní pověsti se alejí za soumraku prochází takzvaná Šedá dáma, přízračná postava zahalená v bílém nebo šedém, která tiše klouže mezi kmeny a mizí přesně u posledního stromu na kraji aleje. Různé verze legendy ji ztotožňují buď s dcerou Jamese Stuarta přezdívanou Cross Peggy, se služebnou, která v sídle záhadně zemřela, nebo s duchem ze zaniklého hřbitova pod okolními poli.",
      paranormalni: "Podle tradice se o Halloweenu k Šedé dámě přidávají další duchové ze zaniklého hřbitova, takže alej bývá v tento večer spojována se zesíleným výskytem zjevení.",
      skepticke: "Žádná z verzí legendy nemá dobově doložený zdroj a Šedá dáma je typický druh 'aleje duchů' vázaný na staré, esteticky nápadné stromořadí - v posledních letech navíc alej proslavila úplně jiná, zcela pozemská věc: seriál Game of Thrones, kde posloužila jako Královská cesta."
    },
    praktickeInfo: "Alej vede po veřejné, ale úzké silnici s omezeným provozem aut, doporučuje se dbát zvýšené opatrnosti při chůzi po vozovce, nejlepší světlo pro fotografování bývá brzy ráno nebo za soumraku.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedia: Dark Hedges", url: "https://en.wikipedia.org/wiki/Dark_Hedges", licence: "CC BY-SA" },
      { nazev: "Wikidata: Dark Hedges", url: "https://www.wikidata.org/wiki/Q28842723", licence: "CC0" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Dark%20Hedges%20Bregagh%20Road", licence: "ODbL" }
    ],
    temata: ["duchove", "legenda", "popkultura"],
    pribehy: [
      { nazev: "Šedá dáma u posledního stromu", text: "Podle pověsti přízračná postava tiše prochází alejí za soumraku a mizí přesně u posledního stromu na jejím konci." },
      { nazev: "Od strašidelné aleje ke Královské cestě", text: "Dávno předtím, než se alej proslavila jako Královská cesta v seriálu Game of Thrones, byla známá hlavně díky pověsti o Šedé dámě." }
    ]
  }
];

const newArticle = {
  id: "svetove-prirodni-a-posvatna-mista",
  slug: "svetove-prirodni-a-posvatna-mista",
  localizedSlugs: {
    cs: "svetove-prirodni-a-posvatna-mista",
    en: "world-natural-and-sacred-places",
    de: "weltweite-natuerliche-und-heilige-orte",
    es: "lugares-naturales-y-sagrados-del-mundo",
    fr: "lieux-naturels-et-sacres-du-monde"
  },
  title: "Obelisk, jeskyně, les a alej: čtyři místa, kde si příroda a legenda podávají ruce",
  description: "Etiopský obelisk vedle údajné Archy úmluvy, skotská Fingalova jeskyně spojená s irským obrem, polský Křivý les s nevyřešenou záhadou ohnutých kmenů a severoirská alej se Šedou dámou.",
  category: "priroda",
  themes: ["priroda", "legenda", "svet"],
  relatedPlaceIds: [
    "obelisk-of-axum",
    "fingals-cave",
    "crooked-forest-poland",
    "dark-hedges"
  ],
  sections: [
    {
      heading: "Když se geologie a mytologie shodnou náhodou",
      body: "Fingalova jeskyně a Giant's Causeway vznikly identickým geologickým procesem na opačných březích téhož mořského průlivu - shoda, která lidem po staletí dávala dokonalý základ pro legendu o mostu mezi nimi. Křivý les v Polsku ukazuje opačný případ: nápadný přírodní jev, u kterého ani moderní věda nedokázala jednoznačně potvrdit příčinu."
    },
    {
      heading: "Živá víra vedle turistické pověsti",
      body: "Obelisk z Axumu jsme záměrně zařadili vedle keltských a lesních legend, abychom ukázali rozdíl: tradice o Arše úmluvy v Etiopii není folklórní kuriozita pro turisty, ale živá, hluboce ctěná součást etiopské pravoslavné víry dodnes praktikovaná strážcem svatyně."
    },
    {
      heading: "Od strašidelné pověsti k filmové kulise",
      body: "Dark Hedges ukazuje, jak se stará lidová legenda o Šedé dámě může v jedné generaci přeznačit na populární filmovou lokaci - obě vrstvy, strašidelná i popkulturní, dnes existují vedle sebe a přitahují různé typy návštěvníků ze zcela odlišných důvodů."
    }
  ],
  sources: ["wikidata", "wikipedia", "openstreetmap", "unesco-whc"]
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
