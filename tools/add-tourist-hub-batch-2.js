const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const placesPath = path.join(root, "data", "mista.json");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8").replace(/^﻿/, ""));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function sources(wiki, query) {
  return [
    { nazev: `Wikipedia: ${wiki.replace(/_/g, " ")}`, url: `https://en.wikipedia.org/wiki/${wiki}`, licence: "CC BY-SA / reference discovery" },
    { nazev: `Wikidata search: ${query}`, url: `https://www.wikidata.org/w/index.php?search=${encodeURIComponent(query)}`, licence: "CC0 / entity discovery" },
    { nazev: "OpenStreetMap search", url: `https://www.openstreetmap.org/search?query=${encodeURIComponent(query)}`, licence: "ODbL / map verification" }
  ];
}

function place(id, data) {
  return {
    id,
    slug: id,
    localizedSlugs: { cs: id, en: id, de: id, es: id, fr: id },
    detailPath: `/mista/${id}/`,
    kontinent: "Evropa",
    obrazky: [],
    audio: [],
    ...data
  };
}

const newPlaces = [
  place("stephansdom-catacombs", {
    nazev: "Katakomby pod katedrálou sv. Štěpána",
    zeme: "Rakousko",
    lead: "Pod nejslavnějším kostelem Vídně leží kosti tisíců obětí moru - a urny s vnitřnostmi habsburských panovníků.",
    gps: { lat: 48.20849, lon: 16.37312 },
    kategorie: ["podzemi"],
    temata: ["umrti", "podzemi", "ritual"],
    indexTajemna: 80,
    paranormalniAktivita: "místní pověsti",
    historickaDolozenost: "výborná",
    nebezpecnost: "nízká",
    pristupnost: "jen s průvodcem",
    atmosfera: 4.7,
    nocniVhodnost: false,
    vhodneProDeti: false,
    popisy: {
      zahada: "Pod katedrálou se táhnou chodby a komory. Mřížemi je vidět hromady lebek a kostí naskládaných až ke stropu. Ve vévodské kryptě stojí rakve a urny Habsburků.",
      historie: "Kolem katedrály býval hřbitov. Když ho v roce 1732 zrušili, kosti přenesli do podzemí. Během morových epidemií sem házeli i těla mrtvých. V kryptě jsou uloženy urny s vnitřnostmi Habsburků - jejich srdce leží v Augustiniánském kostele a těla v Kapucínské kryptě.",
      legenda: "Podle vídeňských pověstí v katakombách bloudí duše obětí moru. Vypráví se také o lidech, kteří se v podzemí ztratili a už nikdy nevyšli.",
      paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou. Tíživou atmosféru vytváří pohled na tisíce lebek.",
      skepticke: "Katakomby jsou historicky dobře zdokumentované. Pověsti o ztracených lidech nejsou doložené."
    },
    praktickeInfo: "Prohlídky s průvodcem začínají uvnitř katedrály na Stephansplatz a trvají asi 30 minut, fotografovat se nesmí. Pro děti mohou být kosti děsivé. Kombinujte s výstupem na jižní věž.",
    zdroje: sources("St._Stephen's_Cathedral,_Vienna", "Stephansdom Katakomben"),
    pribehy: [
      { nazev: "Tělo na třech místech", text: "Habsburkové byli pohřbíváni rozděleně: srdce, vnitřnosti a tělo leží ve třech různých kostelech Vídně." },
      { nazev: "Kosti až ke stropu", text: "Když zrušili hřbitov u katedrály, kosti tisíců lidí naskládali do podzemních komor až ke stropu." }
    ]
  }),
  place("narrenturm-vienna", {
    nazev: "Narrenturm - Věž bláznů",
    zeme: "Rakousko",
    lead: "Kruhová věž, kterou dal v roce 1784 postavit císař Josef II. pro duševně nemocné - dnes ukrývá sbírku anatomických preparátů a zrůd.",
    gps: { lat: 48.22132, lon: 16.35374 },
    kategorie: ["legenda"],
    temata: ["symboly", "technologie", "umrti"],
    indexTajemna: 78,
    paranormalniAktivita: "místní pověsti",
    historickaDolozenost: "výborná",
    nebezpecnost: "nízká",
    pristupnost: "placený vstup",
    atmosfera: 4.5,
    nocniVhodnost: false,
    vhodneProDeti: false,
    popisy: {
      zahada: "Válcová budova má pět pater a v každém malé cely s okénky. Vídeňáci jí přezdívají bábovka. Dnes jsou v ní tisíce preparátů lidských orgánů, kostí a znetvoření.",
      historie: "Věž dal postavit císař Josef II. v roce 1784 jako jedno z prvních zařízení v Evropě určených jen pro duševně nemocné. Sloužila do roku 1869. Od roku 1971 je zde patologicko-anatomická sbírka, dnes součást Přírodovědného muzea.",
      legenda: "Josef II. se prý zajímal o alchymii a zednářství a věž měla odpovídat tajné číselné symbolice. Na střeše byl hromosvod a vypráví se, že měl elektřinou léčit pacienty.",
      paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou. Atmosféru tvoří cely a vitríny s preparáty.",
      skepticke: "Číselná symbolika věže je spekulace. Léčení bleskem není doložené."
    },
    praktickeInfo: "Narrenturm je v areálu Starého AKH v 9. vídeňském obvodu, poblíž zastávky Lazarettgasse. Expozice není vhodná pro citlivé povahy a malé děti. Otevírací dny jsou omezené, ověřte je předem.",
    zdroje: sources("Narrenturm", "Narrenturm Wien"),
    pribehy: [
      { nazev: "Bábovka", text: "Vídeňané kruhové budově přezdívají bábovka. Uvnitř bývaly cely pro duševně nemocné." },
      { nazev: "Císařova věž", text: "Josef II. nechal věž postavit podle vlastních představ a prý ji v noci sám navštěvoval." }
    ]
  }),
  place("untersberg", {
    nazev: "Untersberg",
    zeme: "Rakousko",
    lead: "Hora nad Salcburkem, ve které podle pověsti spí císař a ve které lidé mizí a vracejí se po letech, aniž by zestárli.",
    gps: { lat: 47.72281, lon: 12.99695 },
    kategorie: ["priroda", "legenda"],
    temata: ["mytologie", "zmizeni", "hory"],
    indexTajemna: 84,
    paranormalniAktivita: "silné pověsti",
    historickaDolozenost: "dobrá",
    nebezpecnost: "střední",
    pristupnost: "lanovka placená, turistika zdarma",
    atmosfera: 4.7,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Vápencový masiv na hranici Rakouska a Německa je plný jeskyní a propastí. Z vrcholu je vidět Salcburk a Alpy. Lidé mu říkají „zázračná hora“.",
      historie: "Pověsti o Untersbergu se zapisují od 16. století. Hora je oblíbená turistická oblast, z obce Grödig na ni jezdí lanovka. V masivu je jeskyně Schellenberger Eishöhle s ledem.",
      legenda: "V hoře prý spí císař Karel Veliký nebo Fridrich Barbarossa a čeká, až havrani přestanou kroužit kolem vrcholu. Hora je plná trpaslíků a obrů. Kdo do ní vstoupí, může se vrátit po mnoha letech, ale bude mu připadat, že uběhlo jen pár hodin.",
      paranormalni: "Ezoterici mluví o „časových anomáliích“ a v médiích se opakuje, že Untersberg je energetickým centrem Evropy. Občas se objevují zprávy o ztracených turistech.",
      skepticke: "Ztracení turisté se většinou najdou - hora je členitá a nebezpečná. Časové anomálie nejsou vědecky doložené."
    },
    praktickeInfo: "Lanovka Untersbergbahn jezdí ze St. Leonhard u Grödigu, asi 15 minut autobusem ze Salcburku. Z horní stanice vedou stezky na vrcholy. Počasí se mění rychle, vezměte si teplé oblečení a nescházejte ze značených cest.",
    zdroje: sources("Untersberg", "Untersberg"),
    pribehy: [
      { nazev: "Spící císař", text: "V hoře prý spí císař. Až havrani přestanou kroužit nad vrcholem, probudí se a vyjede do poslední bitvy." },
      { nazev: "Ztracený čas", text: "Kdo vstoupí do hory, vrátí se prý po letech, ale sám si myslí, že tam byl jen chvíli." }
    ]
  }),
  place("lake-starnberg-ludwig-ii", {
    nazev: "Starnberské jezero - smrt krále Ludvíka II.",
    zeme: "Německo",
    lead: "Kříž v mělké vodě u břehu označuje místo, kde v roce 1886 zemřel „pohádkový král“ Ludvík II., stavitel Neuschwansteinu. Jak, se neví dodnes.",
    gps: { lat: 47.97125, lon: 11.35228 },
    kategorie: ["legenda"],
    temata: ["umrti", "konspirace", "voda"],
    indexTajemna: 82,
    paranormalniAktivita: "místní pověsti",
    historickaDolozenost: "výborná",
    nebezpecnost: "nízká",
    pristupnost: "volně přístupné",
    atmosfera: 4.6,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Na břehu jezera u obce Berg stojí votivní kaple a ve vodě nedaleko břehu dřevěný kříž. Místo je klidné, ale spojené s jednou z největších záhad Bavorska.",
      historie: "Ludvík II. byl v červnu 1886 prohlášen za duševně nemocného a sesazen. 13. června se šel večer projít s psychiatrem Bernhardem von Guddenem. Oba byli nalezeni mrtví v mělké vodě u břehu. Oficiálně šlo o sebevraždu.",
      legenda: "Podle mnoha teorií byl král zavražděn, zastřelen při útěku nebo se pokusil utéct na loď. Někteří věří, že ho jeho nepřátelé chtěli umlčet.",
      paranormalni: "Každý rok 13. června se zde koná vzpomínka. Návštěvníci popisují smutnou atmosféru.",
      skepticke: "Okolnosti smrti nebyly nikdy jasně vysvětleny a hrob nebyl otevřen. Teorie o vraždě nejsou prokázané."
    },
    praktickeInfo: "Berg je na východním břehu Starnberského jezera, asi 30 km jižně od Mnichova. Z vlaku ve Starnbergu vede k místu cesta podél jezera. Kombinujte s výletem lodí po jezeře.",
    zdroje: sources("Ludwig_II_of_Bavaria", "Votivkapelle Berg"),
    pribehy: [
      { nazev: "Večerní procházka", text: "Král a jeho psychiatr odešli na procházku k jezeru. Za několik hodin oba našli mrtvé v mělké vodě." },
      { nazev: "Kříž ve vodě", text: "Dřevěný kříž ve vodě označuje místo, kde krále našli. Každý rok k němu lidé nosí květiny." }
    ]
  }),
  place("rothenburg-crime-museum", {
    nazev: "Muzeum středověké kriminality v Rothenburgu",
    zeme: "Německo",
    lead: "Pohádkové městečko na Romantické cestě skrývá muzeum mučicích nástrojů, masek hanby a železné panny.",
    gps: { lat: 49.37637, lon: 10.17887 },
    kategorie: ["legenda", "veznice"],
    temata: ["veznice", "stredovek", "vrazdy"],
    indexTajemna: 72,
    paranormalniAktivita: "místní pověsti",
    historickaDolozenost: "výborná",
    nebezpecnost: "nízká",
    pristupnost: "placený vstup",
    atmosfera: 4.4,
    nocniVhodnost: true,
    vhodneProDeti: false,
    popisy: {
      zahada: "Muzeum vystavuje mučicí nástroje, masky hanby, klece a staré zákony. Mezi exponáty je i železná panna. Večer městem chodí ponocný a vypráví příběhy.",
      historie: "Rothenburg ob der Tauber je středověké město s hradbami, jedno z nejnavštěvovanějších v Německu. Muzeum otevřelo v roce 1977 a ukazuje právo a tresty od středověku do 19. století.",
      legenda: "Podle pověsti zachránil město starosta Nusch v roce 1631 tím, že na jeden zátah vypil velký pohár vína. Generál Tilly pak ušetřil město. Příběh se každý rok hraje na slavnosti.",
      paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou. Prohlídka s ponocným vypráví strašidelné příběhy.",
      skepticke: "Železné panny jsou z velké části výmysly 19. století. Pití poháru vína je pověst, ne doložená událost."
    },
    praktickeInfo: "Rothenburg je na Romantické cestě, asi 1 hodinu a 15 minut autem od Norimberku. Muzeum je v centru, prohlídka trvá asi 1–2 hodiny. Večerní procházku s ponocným v angličtině nevynechejte.",
    zdroje: sources("Medieval_Crime_Museum", "Mittelalterliches Kriminalmuseum Rothenburg"),
    pribehy: [
      { nazev: "Masky hanby", text: "Lidé, kteří pomlouvali nebo podváděli, museli nosit železné masky se zvířecími tvářemi a stát na náměstí." },
      { nazev: "Pohár vína", text: "Starosta prý vypil obří pohár vína naráz, a tak zachránil město před vypálením." }
    ]
  }),
  place("hamelin-pied-piper", {
    nazev: "Hameln - Krysař",
    zeme: "Německo",
    lead: "Město, ze kterého v roce 1284 zmizelo 130 dětí - podle pověsti je odvedl krysař s kouzelnou flétnou. Na jedné ulici se dodnes nesmí hrát hudba.",
    gps: { lat: 52.10364, lon: 9.35703 },
    kategorie: ["legenda"],
    temata: ["zmizeni", "mytologie", "stredovek"],
    indexTajemna: 85,
    paranormalniAktivita: "silné pověsti",
    historickaDolozenost: "dobrá",
    nebezpecnost: "nízká",
    pristupnost: "volně přístupné",
    atmosfera: 4.5,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "V historickém centru jsou renesanční domy. Na Krysařově domě je nápis z roku 1602 o zmizení dětí. Ulice Bungelosenstraße je ulicí bez bubnů.",
      historie: "Městská kronika uvádí, že 26. června 1284 zmizelo z Hamelnu 130 dětí. Co se skutečně stalo, nevíme. Pověst zapsali bratři Grimmové a proslavila se po celém světě.",
      legenda: "Krysař vylákal flétnou krysy z města do řeky. Měšťané mu nezaplatili, a tak se vrátil a flétnou odvedl děti. Zmizely v hoře a už je nikdo neviděl. Ulicí, kudy šly, se nesmí hrát hudba.",
      paranormalni: "Nadpřirozené jevy se nepopisují. Záhada je historická - co se stalo s dětmi.",
      skepticke: "Historici uvažují o vystěhování mladých lidí na východ, o dětské křížové výpravě nebo o epidemii. Krysy se do pověsti dostaly až později."
    },
    praktickeInfo: "Hameln je asi 45 km jihozápadně od Hannoveru. V létě se v neděli hraje na náměstí představení o krysaři. Ulici bez bubnů najdete v centru. Městem vede značená krysaří stezka.",
    zdroje: sources("Pied_Piper_of_Hamelin", "Hameln Rattenfänger"),
    pribehy: [
      { nazev: "130 dětí", text: "V roce 1284 zmizelo z Hamelnu 130 dětí. Kronika to zaznamenala, ale neví se, proč." },
      { nazev: "Ulice bez hudby", text: "Ulicí, kudy děti odešly s krysařem, se dodnes nesmí hrát hudba ani tančit." }
    ]
  }),
  place("heidelberg-castle", {
    nazev: "Heidelberský zámek",
    zeme: "Německo",
    lead: "Romantická zřícenina nad Neckarem s obřím sudem na víno - a se stopou rytíře, který prý vyskočil z okna hořícího paláce.",
    gps: { lat: 49.41056, lon: 8.71528 },
    kategorie: ["hrad"],
    temata: ["hrad", "stredovek", "legenda"],
    indexTajemna: 70,
    paranormalniAktivita: "místní pověsti",
    historickaDolozenost: "výborná",
    nebezpecnost: "nízká",
    pristupnost: "placený vstup",
    atmosfera: 4.6,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Zřícenina z červeného pískovce stojí na svahu nad starým městem. Ve sklepě je Velký sud, do kterého se vejde přes 200 000 litrů vína. Hlídá ho socha dvorního šaška Perkea.",
      historie: "Zámek byl sídlem falckých kurfiřtů. Zničili ho Francouzi v letech 1689 a 1693, později ho zasáhl blesk. Od 19. století je symbolem romantismu a láká návštěvníky z celého světa.",
      legenda: "Na terase je v kameni otisk nohy. Podle pověsti rytíř skočil z okna paláce, když se vrátil manžel jeho milenky. Šašek Perkeo prý pil jen víno, a když jednou vypil sklenici vody, zemřel.",
      paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou. Atmosféru tvoří zřícenina a mlha nad řekou.",
      skepticke: "Otisk v kameni je přirozený nebo vytesaný útvar. Příběh o Perkeovi je anekdota."
    },
    praktickeInfo: "Na zámek jezdí z Kornmarktu lanovka Bergbahn, vstupenka zahrnuje zámek, sud a lékárenské muzeum. Pěšky to je asi 15 minut do kopce. Výhled z terasy na Neckar a Starý most je nejlepší při západu slunce.",
    zdroje: sources("Heidelberg_Castle", "Heidelberger Schloss"),
    pribehy: [
      { nazev: "Rytířův skok", text: "Rytíř prý vyskočil z okna, když přišel manžel jeho milenky. Jeho stopa zůstala otištěná v kameni terasy." },
      { nazev: "Šašek a voda", text: "Dvorní šašek Perkeo prý celý život pil jen víno. Když se jednou napil vody, zemřel." }
    ]
  }),
  place("loreley", {
    nazev: "Lorelei",
    zeme: "Německo",
    lead: "Skála nad Rýnem, kde podle pověsti sedávala krásná dívka se zlatými vlasy a svým zpěvem lákala lodníky do záhuby.",
    gps: { lat: 50.13944, lon: 7.72889 },
    kategorie: ["priroda", "legenda"],
    temata: ["mytologie", "voda", "umrti"],
    indexTajemna: 76,
    paranormalniAktivita: "silné pověsti",
    historickaDolozenost: "dobrá",
    nebezpecnost: "nízká",
    pristupnost: "volně přístupné",
    atmosfera: 4.6,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Břidlicová skála je vysoká přes 130 metrů a Rýn se pod ní zužuje a stáčí. Proud je zde silný a pod hladinou jsou skály. Kdysi tu bývala ozvěna.",
      historie: "Úsek Rýna mezi Bingenem a Koblencí je na seznamu UNESCO. Básník Clemens Brentano vymyslel příběh o Lorelei v roce 1801 a Heinrich Heine z něj v roce 1824 udělal slavnou báseň, která byla zhudebněna.",
      legenda: "Dívka Lorelei sedí na skále, češe si zlaté vlasy a zpívá. Lodníci se zahledí nahoru a jejich lodě narazí na skály. Píseň o Lorelei se zpívá v mnoha zemích.",
      paranormalni: "Nadpřirozené jevy se nepopisují. Kouzlo místa tvoří řeka a příběh.",
      skepticke: "Lorelei je literární postava. Lodě se zde opravdu potápěly - kvůli úzkému korytu, proudu a skalám."
    },
    praktickeInfo: "Skála je u městečka St. Goarshausen. Na vrchol vede cesta s vyhlídkou a návštěvnickým centrem. Nejlepší pohled je z lodi po Rýně. Kombinujte s hrady Katz a Rheinfels.",
    zdroje: sources("Lorelei", "Loreley"),
    pribehy: [
      { nazev: "Zpěv nad řekou", text: "Lodníci se zaposlouchali do zpěvu dívky na skále a zapomněli kormidlovat - jejich lodě se roztříštily." },
      { nazev: "Heineho píseň", text: "Báseň Heinricha Heineho o Lorelei byla zhudebněna a zpívají ji lidé na celém světě." }
    ]
  }),
  place("san-bernardino-alle-ossa", {
    nazev: "San Bernardino alle Ossa",
    zeme: "Itálie",
    lead: "Kaple v centru Milána, jejíž stěny jsou vyskládané z lidských lebek a kostí - podle pověsti v noci na Dušičky ožije kostra holčičky a tančí.",
    gps: { lat: 45.46268, lon: 9.19384 },
    kategorie: ["legenda", "podzemi"],
    temata: ["umrti", "ritual", "duchove"],
    indexTajemna: 80,
    paranormalniAktivita: "silné pověsti",
    historickaDolozenost: "velmi dobrá",
    nebezpecnost: "nízká",
    pristupnost: "volně přístupné",
    atmosfera: 4.6,
    nocniVhodnost: false,
    vhodneProDeti: false,
    popisy: {
      zahada: "Malá barokní kaple má stěny pokryté lebkami a kostmi uspořádanými do ornamentů a křížů. Strop pokrývá malba nebes s anděly.",
      historie: "Kostnice vznikla ve 13. století u nemocnice a hřbitova. Po zřícení zvonice v roce 1642 a požáru v roce 1712 byla kaple přestavěna a kosti z hřbitovů použity k výzdobě.",
      legenda: "Podle pověsti v noci na Dušičky ožije kostra holčičky, jejíž ostatky jsou ve zdi u oltáře, a s ostatními kostlivci tančí. Kaple prý zaujala portugalského krále Jana V.",
      paranormalni: "Někteří návštěvníci popisují zvláštní pocit, když stojí mezi lebkami. Konkrétní doložené jevy nejsou.",
      skepticke: "Tanec kostlivců je pověst. Kostnice jsou v katolické Evropě běžné - připomínají smrt."
    },
    praktickeInfo: "Kaple je kousek od katedrály Duomo na náměstí Santo Stefano. Vstup je zdarma, buďte potichu - je to místo modlitby. Kombinujte s Duomem a Poslední večeří Leonarda da Vinci (rezervujte měsíce předem).",
    zdroje: sources("San_Bernardino_alle_Ossa", "San Bernardino alle Ossa Milano"),
    pribehy: [
      { nazev: "Tanec na Dušičky", text: "Podle pověsti každý rok na Dušičky ožije kostra holčičky a tančí s ostatními kostlivci kaple." },
      { nazev: "Kosti jako ornament", text: "Lebky a kosti ze starých hřbitovů vytvořily na stěnách vzory, kříže a srdce." }
    ]
  }),
  place("sagrada-familia", {
    nazev: "Sagrada Família",
    zeme: "Španělsko",
    lead: "Gaudího chrám, který se staví od roku 1882 - s magickým čtvercem na fasádě a japonským sochařem, který na něm pracuje přes čtyřicet let.",
    gps: { lat: 41.40363, lon: 2.17436 },
    kategorie: ["legenda"],
    temata: ["symboly", "tajne-spolecnosti", "technologie"],
    indexTajemna: 72,
    paranormalniAktivita: "náboženská symbolika, bez ověřených jevů",
    historickaDolozenost: "výborná",
    nebezpecnost: "nízká",
    pristupnost: "placený vstup",
    atmosfera: 4.8,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Věže chrámu připomínají kapky vosku nebo termitiště. Uvnitř sloupy rostou jako stromy a barevná okna malují světlem. Na fasádě Utrpení je magický čtverec, kde součet čísel dává vždy 33.",
      historie: "Stavba začala v roce 1882. Antoni Gaudí na ní pracoval přes 40 let. V roce 1926 ho srazila tramvaj a zemřel. Je pohřben v kryptě chrámu. Stavba pokračuje z darů a vstupného. Japonský sochař Etsuro Sotoo zde pracuje od roku 1978.",
      legenda: "Číslo 33 na magickém čtverci je věk Ježíše při smrti. Někteří hledají v chrámu zednářské symboly. Gaudí prý řekl: „Můj klient nespěchá.“",
      paranormalni: "Nadpřirozené jevy se nepopisují. Chrám působí jako les z kamene.",
      skepticke: "Zednářské výklady nejsou doložené - symbolika chrámu je křesťanská. Gaudího výrok je pravděpodobně apokryf."
    },
    praktickeInfo: "Chrám je ve čtvrti Eixample, metro Sagrada Família. Vstupenky kupte online předem, často se vyprodají. Výstup na věže je za příplatek. Ráno a pozdě odpoledne svítí okna nejkrásněji.",
    zdroje: sources("Sagrada_Família", "Sagrada Família"),
    pribehy: [
      { nazev: "Magický čtverec", text: "Na fasádě Utrpení je čtverec čísel. V každém řádku, sloupci i úhlopříčce je součet 33 - věk Krista." },
      { nazev: "Japonský sochař", text: "Etsuro Sotoo z Japonska pracuje na chrámu od roku 1978 a vytvořil sochy andělů na fasádě Narození." }
    ]
  })
];

const places = readJson(placesPath);
const byId = new Map(places.map((item) => [item.id, item]));
let inserted = 0;
newPlaces.forEach((item) => {
  if (!byId.has(item.id)) inserted += 1;
  byId.set(item.id, item);
});
writeJson(placesPath, Array.from(byId.values()));

console.log(`Upserted ${inserted} new places.`);
