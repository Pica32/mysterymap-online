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
    id: "flannan-isles-eilean-mor",
    slug: "flannan-isles-eilean-mor",
    localizedSlugs: { cs: "flannan-isles-eilean-mor", en: "flannan-isles-eilean-mor", de: "flannan-isles-eilean-mor", es: "flannan-isles-eilean-mor", fr: "flannan-isles-eilean-mor" },
    detailPath: "/mista/flannan-isles-eilean-mor/",
    nazev: "Flannan Isles (Eilean Mòr)",
    zeme: "Skotsko",
    kontinent: "Evropa",
    lead: "Tři strážci majáku zmizeli beze stopy z odlehlého skotského ostrova - a záznam v jejich denníku záhadu spíš prohloubil, než vysvětlil.",
    gps: { lat: 58.3, lon: -7.6 },
    kategorie: ["ostrov", "legenda"],
    indexTajemna: 88,
    paranormalniAktivita: "žádná, jde o skutečný nevyřešený případ zmizení",
    historickaDolozenost: "výborná (úřední vyšetřování z roku 1900)",
    nebezpecnost: "vysoká (nepřístupný skalnatý ostrov, silné vlny)",
    pristupnost: "nepřístupné veřejnosti, maják je automatizovaný",
    atmosfera: 4.7,
    nocniVhodnost: false,
    vhodneProDeti: false,
    popisy: {
      zahada: "V prosinci 1900 zmizeli beze stopy tři strážci majáku na ostrově Eilean Mòr v souostroví Flannan Isles - jejich poslední zápisky v deníku jsou stejně znepokojivé jako samotné zmizení.",
      historie: "Maják na Eilean Mòr, nejvyšším z ostrovů Flannan asi 32 km západně od ostrova Lewis, spravovala Northern Lighthouse Board. Když 15. prosince 1900 kolemjedoucí loď Archtor nahlásila, že maják nesvítí, trvalo kvůli počasí do 26. prosince, než tam dorazila zásobovací loď Hesperus. Náhradní strážce Joseph Moore vystoupal sám 160 schodů a našel maják prázdný.",
      legenda: "Ve stanici chyběli všichni tři strážci - Thomas Marshall, James Ducat a Donald MacArthur. Postele byly nedoloženy, hodiny na kuchyňské zdi stály, stůl byl prostřený k jídlu, kterého se nikdo nedotkl, a jedna židle byla převrácená. Jediným živým tvorem v místnosti byl kanárek v kleci.",
      paranormalni: "Zmizení inspirovalo mimo jiné slavnou básnickou baladu a desítky populárních teorií od nadpřirozených bytostí po zahraniční agenty - žádná z nich ale nemá oporu v dobovém vyšetřování.",
      skepticke: "Úřední vyšetřování dospělo k závěru, že šlo o nešťastnou náhodu: dva muži pravděpodobně šli zajistit vybavení na přístavišti při silném počasí a mimořádně velká vlna je strhla do moře, třetí muž je následoval bez svrchního oblečení a byl stržen také. Přesný průběh se nikdy nepodařilo ověřit, protože žádní svědci nepřežili."
    },
    praktickeInfo: "Ostrov je neobydlený a nepřístupný běžným návštěvníkům, maják je dnes plně automatizovaný, k ostrovu se lze dostat jen specializovanou lodní exkurzí za dobrého počasí.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedia: Flannan Isles", url: "https://en.wikipedia.org/wiki/Flannan_Isles", licence: "CC BY-SA" },
      { nazev: "Wikidata: Flannan Isles", url: "https://www.wikidata.org/wiki/Q1427154", licence: "CC0" },
      { nazev: "Northern Lighthouse Board - Flannan Isles", url: "https://www.nlb.org.uk/history/flannan-isles/", licence: "oficiální zdroj / historická dokumentace" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Eilean%20Mor%20Flannan%20Isles", licence: "ODbL" }
    ],
    temata: ["zmizeni", "ostrov", "more"],
    pribehy: [
      { nazev: "Prostřený stůl a převrácená židle", text: "Nejznámější detail případu: strážci zmizeli uprostřed běžné činnosti, jídlo zůstalo netknuté a jedna židle byla převrácená, jako by někdo v spěchu vyběhl ven." },
      { nazev: "Kanárek jako jediný svědek", text: "Jediným živým tvorem, kterého náhradní strážce ve stanici našel, byl kanárek v kleci - zbytek majáku byl dokonale opuštěný." }
    ]
  },
  {
    id: "balete-drive",
    slug: "balete-drive",
    localizedSlugs: { cs: "balete-drive", en: "balete-drive", de: "balete-drive", es: "balete-drive", fr: "balete-drive" },
    detailPath: "/mista/balete-drive/",
    nazev: "Balete Drive",
    zeme: "Filipiny",
    kontinent: "Asie",
    lead: "Obyčejná ulice v Quezon City, kde si podle nejrozšířenější filipínské městské legendy taxikáři dodnes dávají pozor na bílou dámu na zadním sedadle.",
    gps: { lat: 14.620333, lon: 121.0375 },
    kategorie: ["legenda"],
    indexTajemna: 74,
    paranormalniAktivita: "silná městská legenda, žádná ověřená pozorování",
    historickaDolozenost: "dobrá (jde o doloženou ulici a městskou legendu, ne o historickou událost)",
    nebezpecnost: "nízká",
    pristupnost: "veřejná ulice, volně průjezdná",
    atmosfera: 3.9,
    nocniVhodnost: true,
    vhodneProDeti: true,
    popisy: {
      zahada: "Balete Drive je obyčejná dvouproudá ulice ve čtvrti New Manila v Quezon City - a zároveň nejznámější adresa filipínského strašidelného folkloru, kde má dodnes bloudit bílá dáma.",
      historie: "Ulice, pojmenovaná po stromech baletí, které ji dřív lemovaly, se stala centrem legendy už v polovině 50. let 20. století. Postupem času byly balete stromy z velké části vykáceny kvůli rozšíření silnice, samotná pověst ale přežila.",
      legenda: "Nejrozšířenější verze vypráví o dívce, kterou v noci na ulici srazil a zabil taxikář - pochovaná pod stromem balete pak její duch bloudí ulicí. Jiné varianty mluví o studentce znásilněné a zavražděné taxikářem, nebo o ženě z jednoho z okolních sídel, kterou zabila vlastní rodina. Taxikáři podle tradice hlásí, že dámu v bílém vidí uprostřed silnice, nebo že se náhle objeví na zadním sedadle.",
      paranormalni: "Historky o bílé dámě z Balete Drive patří k nejcitovanějším filipínským městským legendám a opakovaně inspirovaly filmy, knihy i televizní pořady - řidiči v okolí se ulici v noci raději vyhýbají dodnes.",
      skepticke: "Motiv bílé dámy zabité na silnici je běžný typ moderní městské legendy rozšířený po celé jihovýchodní Asii, který se váže k tmavým, stromy lemovaným ulicím vyvolávajícím pocit nejistoty za volantem v noci - žádná z variant příběhu nemá dohledatelný policejní záznam."
    },
    praktickeInfo: "Ulice je běžně průjezdná osobním autem i pěšky, jde o obytnou čtvrť bez turistické infrastruktury, návštěva v noci je spíš zážitkem z legendy než z něčeho, co je vidět.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedia: Balete Drive", url: "https://en.wikipedia.org/wiki/Balete_Drive", licence: "CC BY-SA" },
      { nazev: "Wikidata: Balete Drive", url: "https://www.wikidata.org/wiki/Q4850729", licence: "CC0" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Balete%20Drive%20Quezon%20City", licence: "ODbL" }
    ],
    temata: ["duchove", "media", "umrti"],
    pribehy: [
      { nazev: "Dáma na zadním sedadle", text: "Nejcitovanější detail legendy: taxikáři hlásí, že se bílá dáma náhle objeví na zadním sedadle jejich vozu uprostřed jízdy ulicí." },
      { nazev: "Stromy, které legendu přežily", text: "Ulice dostala jméno po stromech balete, které ji lemovaly - většina z nich byla později vykácena, pověst o duchu pod nimi ale zůstala živá dodnes." }
    ]
  },
  {
    id: "ilha-da-queimada-grande",
    slug: "ilha-da-queimada-grande",
    localizedSlugs: { cs: "ilha-da-queimada-grande", en: "ilha-da-queimada-grande", de: "ilha-da-queimada-grande", es: "ilha-da-queimada-grande", fr: "ilha-da-queimada-grande" },
    detailPath: "/mista/ilha-da-queimada-grande/",
    nazev: "Ilha da Queimada Grande (Hadí ostrov)",
    zeme: "Brazilie",
    kontinent: "Jizni Amerika",
    lead: "Ostrov u brazilského pobřeží, kam brazilské námořnictvo od 20. let 20. století zakazuje civilistům vstup - kvůli tisícům jedovatých hadů, které tam žijí jen na jednom místě světa.",
    gps: { lat: -24.486111, lon: -46.675 },
    kategorie: ["ostrov", "priroda"],
    indexTajemna: 83,
    paranormalniAktivita: "žádná, riziko je čistě biologické a reálné",
    historickaDolozenost: "výborná, vědecky zdokumentováno",
    nebezpecnost: "velmi vysoká (endemický jedovatý had, vstup zakázán)",
    pristupnost: "veřejnosti zakázáno, jen výzkum s povolením brazilské armády",
    atmosfera: 4.4,
    nocniVhodnost: false,
    vhodneProDeti: false,
    popisy: {
      zahada: "Na ostrůvku o rozloze necelého půl kilometru čtverečního u pobřeží státu São Paulo žije podle odhadů až několik tisíc jedovatých hadů jediného druhu, který se nikde jinde na světě nevyskytuje - a lidem je vstup na ostrov už sto let zakázán.",
      historie: "Ilha da Queimada Grande leží asi 33 km od pobřeží Brazílie a spravuje ji Chico Mendesův institut ochrany biodiverzity. Brazilské námořnictvo uzavřelo ostrov civilistům ve 20. letech 20. století a od té doby jej nikdy znovu neotevřelo - výzkumníci se na ostrov dostávají jen s federálním povolením a v doprovodu lékaře.",
      legenda: "Podle starého brazilského podání měli místní piráti na ostrov záměrně vysadit hady, aby odradili každého, kdo by chtěl hledat jejich zakopaný poklad.",
      paranormalni: "Ostrov se pravidelně objevuje v žebříčcích 'nejnebezpečnějších míst na Zemi' a v populárních médiích bývá líčen jako téměř mytické zakázané území.",
      skepticke: "Skutečné vysvětlení je čistě evoluční, ne pirátské: asi před 11 000 lety oddělilo stoupající moře ostrov od pevniny a izolovaní hadi štítohlavci ostrovní (Bothrops insularis) se bez predátorů vyvinuli do unikátního endemického druhu živícího se především tažnými ptáky. Zdokumentovaných úmrtí lidí je přitom minimum a hadi nejsou vůči člověku agresivní, pokud nejsou vyprovokováni."
    },
    praktickeInfo: "Ostrov je pro veřejnost trvale uzavřený a nelegální vstup je trestný čin, jedinou legální možností přiblížení je komerční vyhlídková plavba kolem ostrova bez přistání.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedia: Ilha da Queimada Grande", url: "https://en.wikipedia.org/wiki/Ilha_da_Queimada_Grande", licence: "CC BY-SA" },
      { nazev: "Wikidata: Ilha da Queimada Grande", url: "https://www.wikidata.org/wiki/Q181544", licence: "CC0" },
      { nazev: "Smithsonian Magazine - Snake Island", url: "https://www.smithsonianmag.com/science-nature/snake-infested-island-deadliest-place-brazil-180951782/", licence: "novinářský zdroj / vědecký kontext" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Ilha%20da%20Queimada%20Grande", licence: "ODbL" }
    ],
    temata: ["zvirata", "ostrov", "nebezpeci"],
    pribehy: [
      { nazev: "Piráti a zakopaný poklad", text: "Lidová verze původu hadů: piráti je měli na ostrov vysadit schválně, aby ochránili své zakopané poklady před hledači." },
      { nazev: "11 000 let izolace", text: "Skutečný původ endemického druhu sahá do konce poslední doby ledové, kdy stoupající hladina moře oddělila ostrov od pevniny a uvěznila na něm populaci hadů." }
    ]
  },
  {
    id: "marid-castle",
    slug: "marid-castle",
    localizedSlugs: { cs: "marid-castle", en: "marid-castle", de: "marid-castle", es: "marid-castle", fr: "marid-castle" },
    detailPath: "/mista/marid-castle/",
    nazev: "Hrad Marid (Dumat al-Džandal)",
    zeme: "Saudska Arabie",
    kontinent: "Asie",
    lead: "Pevnost stará skoro dva tisíce let nese jméno, které v arabštině znamená 'vzbouřenec' - a stejné slovo označuje i nejmocnější a nejnezkrotnější druh džina v arabské mytologii.",
    gps: { lat: 29.81139, lon: 39.86735 },
    kategorie: ["hrad", "legenda"],
    indexTajemna: 78,
    paranormalniAktivita: "kulturní a jazyková tradice, bez ověřených jevů",
    historickaDolozenost: "dobrá (archeologicky datováno do 1. století n. l.)",
    nebezpecnost: "nízká",
    pristupnost: "veřejně přístupné, nutné ověřit aktuální podmínky před cestou",
    atmosfera: 4.0,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Hrad Marid v oáze Dumat al-Džandal patří k nejstarším dochovaným pevnostem na Arabském poloostrově a jeho jméno je zároveň názvem pro nejmocnější třídu duchů v arabské lidové tradici.",
      historie: "Pevnost stojí na návrší přes 600 metrů nad mořem v regionu Al-Džauf v dnešní Saúdské Arábii, asi 50 km od města Sakáka. Archeologické nálezy římsko-nabatejské keramiky datují její jádro do 1. století n. l. Nejstarší písemná zmínka pochází ze 3. století a spojuje hrad s obléháním královny Zenobie z Palmýry, jejíž vojska pevnost nedokázala dobýt.",
      legenda: "Podle dochované tradice měla Zenobia po neúspěšném obléhání prohlásit, že 'Marid se vzbouřil a Ablak se oslavil' - odtud jméno hradu, odvozené z arabského kořene znamenajícího 'vzbouřenec' nebo 'nezkrotný'. Stejné slovo, marid, zároveň v arabské lidové tradici a v Tisíci a jedné noci označuje nejmocnější a nejobtížněji ovladatelnou třídu džinů.",
      paranormalni: "Shoda jména hradu se jménem mocného džina občas vede k lidovým spekulacím o nadpřirozeném původu pevnosti, historické prameny ale spojení hradu s džiny nikde přímo nedokládají - jde o jazykovou souvislost, ne o zaznamenanou legendu.",
      skepticke: "Historicky doložené je jen to, že se hrad ubránil Zenobiinu obléhání a že arabský kořen slova skutečně znamená 'vzbouřenec' - spojení s džiny je pravděpodobně až moderní asociace založená na shodě slov, ne na starověké tradici vázané přímo k tomuto místu."
    },
    praktickeInfo: "Pevnost je součástí historického jádra Dumat al-Džandal, doporučuje se ověřit aktuální otevírací dobu a přístupová pravidla před cestou, oblast má pouštní klima s velkými teplotními rozdíly.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedia: Marid Castle", url: "https://en.wikipedia.org/wiki/Marid_Castle", licence: "CC BY-SA" },
      { nazev: "Wikidata: Marid Castle", url: "https://www.wikidata.org/wiki/Q4117141", licence: "CC0" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Marid%20Castle%20Dumat%20al-Jandal", licence: "ODbL" }
    ],
    temata: ["legenda", "stredovek", "mytologie"],
    pribehy: [
      { nazev: "Zenobiin neúspěšný útok", text: "Podle tradice po neúspěšném obléhání palmýrská královna Zenobia prohlásila větu o vzbouřeném Maridu a oslaveném Ablaku, ze které pochází jméno pevnosti dodnes." },
      { nazev: "Slovo, které znamená i džina", text: "Arabské slovo marid neoznačuje jen 'vzbouřenec' - ve stejném jazyce je to také jméno nejmocnější a nejnezkrotnější třídy džinů z lidové tradice a Tisíce a jedné noci." }
    ]
  },
  {
    id: "skirrid-fawr",
    slug: "skirrid-fawr",
    localizedSlugs: { cs: "skirrid-fawr", en: "skirrid-fawr", de: "skirrid-fawr", es: "skirrid-fawr", fr: "skirrid-fawr" },
    detailPath: "/mista/skirrid-fawr/",
    nazev: "Skirrid Fawr (Svatá hora)",
    zeme: "Wales",
    kontinent: "Evropa",
    lead: "Velšská hora s rozeklaným severním svahem, o kterém pověst tvrdí, že se odlomil v okamžiku Kristovy smrti na kříži.",
    gps: { lat: 51.858386, lon: -2.970816 },
    kategorie: ["priroda", "legenda"],
    indexTajemna: 76,
    paranormalniAktivita: "lidová tradice, bez ověřených jevů",
    historickaDolozenost: "dobrá (geologie hory je zdokumentovaná)",
    nebezpecnost: "nízká",
    pristupnost: "volně přístupné, značená turistická trasa",
    atmosfera: 4.2,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Skirrid Fawr, velšsky Ysgyryd Fawr, je 486 metrů vysoký vrchol v Monmouthshiru s dramatickým sesuvem na severní straně - a lidová tradice tento sesuv spojuje s okamžikem Kristova ukřižování.",
      historie: "Hora tvoří východní výběžek pohoří Black Mountains na okraji národního parku Brecon Beacons, asi 16 km od anglických hranic u města Abergavenny. Její jméno pochází z velšského slova pro chvění nebo otřes a od roku 1939 ji spravuje National Trust. Na svazích se dodnes občas objevují menší sesuvy půdy.",
      legenda: "Podle místní tradice se masivní sesuv na severním svahu hory zřítil v okamžiku, kdy na kříži zemřel Ježíš Kristus - otřes měl být způsoben zemětřesením nebo bleskem doprovázejícím tuto událost. Proto se hoře přezdívá Svatá hora a stala se cílem křesťanských poutí.",
      paranormalni: "K úpatí hory se váže i hostinec Skirrid Mountain Inn, který si podle pověsti drží duchy lidí popravených oběšením v místnosti, jež kdysi sloužila jako soudní síň.",
      skepticke: "Geologicky jde o běžný typ sesuvu půdy na nestabilním podloží, jaký se na kopci opakuje dodnes - spojení s biblickou událostí je typický středověký a raně novověký způsob, jak dát nápadnému přírodnímu jevu posvátný, snadno zapamatovatelný výklad."
    },
    praktickeInfo: "Na vrchol vede značená turistická trasa od parkoviště National Trust u silnice B4521, výstup je nenáročný a vhodný i pro rodiny s dětmi, počasí na hřebeni se může rychle měnit.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedia: Skirrid Fawr", url: "https://en.wikipedia.org/wiki/Skirrid_Fawr", licence: "CC BY-SA" },
      { nazev: "Wikidata: Skirrid Fawr", url: "https://www.wikidata.org/wiki/Q24638641", licence: "CC0" },
      { nazev: "National Trust - Skirrid history and legends", url: "https://www.nationaltrust.org.uk/visit/wales/sugar-loaf-skirrid-and-usk-valley/skirrid-history-and-legends", licence: "oficiální zdroj / návštěvní informace" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Skirrid%20Fawr", licence: "ODbL" }
    ],
    temata: ["legenda", "duchove", "mytologie"],
    pribehy: [
      { nazev: "Sesuv v okamžiku ukřižování", text: "Ústřední obraz pověsti: masivní sesuv na severním svahu hory se měl zřítit přesně ve chvíli Kristovy smrti na kříži, odtud přezdívka Svatá hora." },
      { nazev: "Soudní síň v hostinci pod horou", text: "Hostinec Skirrid Mountain Inn u paty hory si drží pověst o duchách popravených, kteří straší v bývalé soudní místnosti se stopami po katovském provaze." }
    ]
  },
  {
    id: "ogopogo-okanagan-lake",
    slug: "ogopogo-okanagan-lake",
    localizedSlugs: { cs: "ogopogo-okanagan-lake", en: "ogopogo-okanagan-lake", de: "ogopogo-okanagan-lake", es: "ogopogo-okanagan-lake", fr: "ogopogo-okanagan-lake" },
    detailPath: "/mista/ogopogo-okanagan-lake/",
    nazev: "Jezero Okanagan (Ogopogo)",
    zeme: "Kanada",
    kontinent: "Severni Amerika",
    lead: "Dlouhé kanadské jezero, kde domorodý lid Syilx po staletí uctíval posvátného strážce vod - než z něj turistický průmysl 20. let udělal příšeru se žertovným jménem.",
    gps: { lat: 49.74778, lon: -119.71722 },
    kategorie: ["priroda", "legenda"],
    indexTajemna: 77,
    paranormalniAktivita: "dlouhodobá domorodá a lidová tradice, fotografické důkazy neprůkazné",
    historickaDolozenost: "dobrá (jezero a jeho geografie), tvor nedoložen",
    nebezpecnost: "nízká",
    pristupnost: "volně přístupné jezero, běžný rekreační provoz",
    atmosfera: 3.9,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Okanagan Lake v Britské Kolumbii je téměř 130 km dlouhé fjordové jezero, se kterým je spojena jedna z nejstarších a nejznámějších severoamerických legend o jezerní příšeře.",
      historie: "Jezero je největší z pěti propojených jezer v údolí Okanagan a dosahuje hloubky přes 230 metrů. Domorodý lid Syilx tradici o strážci jezera vypráví po staletí, dávno před příchodem evropských osadníků, kteří první novodobá pozorování zaznamenali v polovině 19. století.",
      legenda: "V jazyce Syilx se bytost nazývá n'ha-a-itk, posvátný duch jezera, tradičně spojovaný s ostrovem Rattlesnake Island a místem zvaným Squally Point u Peachlandu. Podle starších podání si duch žádal oběti od těch, kdo se k jeho místu příliš přiblížili, a dokázal vyvolat náhlé bouře. Ve 20. letech 20. století místní turistický průmysl bytost přejmenoval na Ogopogo podle popřipěvky z tehdy populární tanční písně - jméno se ujalo a zastínilo původní domorodý význam.",
      paranormalni: "Od 20. let 20. století přibyly desítky hlášených pozorování, včetně známého případu z roku 1926, kdy mělo tvora najednou spatřit asi třicet lidí na pláži Okanagan Mission.",
      skepticke: "Naprostá většina moderních pozorování se dá vysvětlit vlnobitím, plovoucími kmeny, jeseterem nebo jinými velkými rybami a optickým klamem na hladině dlouhého jezera - žádný fyzický důkaz tvora nikdy nebyl potvrzen. Domorodá tradice n'ha-a-itk navíc má úplně jiný, duchovní význam než pozdější turistická příšera Ogopogo, se kterou bývá zjednodušeně ztotožňována."
    },
    praktickeInfo: "Jezero je celoročně přístupné veřejnosti s pláněmi, přístavišti a rekreační infrastrukturou kolem Kelowny a Peachlandu, k pozorování 'domova' legendy slouží vyhlídka na Squally Point.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedia: Ogopogo", url: "https://en.wikipedia.org/wiki/Ogopogo", licence: "CC BY-SA" },
      { nazev: "Wikipedia: Rattlesnake Island (Okanagan Lake)", url: "https://en.wikipedia.org/wiki/Rattlesnake_Island_(Okanagan_Lake)", licence: "CC BY-SA" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Okanagan%20Lake%20Rattlesnake%20Island", licence: "ODbL" }
    ],
    temata: ["legenda", "zvirata", "mytologie"],
    pribehy: [
      { nazev: "N'ha-a-itk, posvátný duch vody", text: "Před turistickým jménem Ogopogo měl tvor v jazyce lidu Syilx jméno n'ha-a-itk a byl uctíván jako posvátný strážce jezera, ne jako děsivá příšera." },
      { nazev: "Třicet svědků na pláži", text: "Jedno z nejcitovanějších pozorování z roku 1926 popisuje, jak tvora na pláži Okanagan Mission současně vidělo asi třicet lidí po dobu bezmála dvaceti minut." }
    ]
  },
  {
    id: "lake-kariba-nyaminyami",
    slug: "lake-kariba-nyaminyami",
    localizedSlugs: { cs: "lake-kariba-nyaminyami", en: "lake-kariba-nyaminyami", de: "lake-kariba-nyaminyami", es: "lake-kariba-nyaminyami", fr: "lake-kariba-nyaminyami" },
    detailPath: "/mista/lake-kariba-nyaminyami/",
    nazev: "Jezero Kariba a duch Nyaminyami",
    zeme: "Zimbabwe",
    kontinent: "Afrika",
    lead: "Největší umělé jezero světa vzniklo přehrazením řeky, kterou podle lidu Tonga obývá hadí říční bůh - a stavbu přehrady prý dodnes provázel jeho hněv.",
    gps: { lat: -16.52222, lon: 28.76167 },
    kategorie: ["priroda", "legenda"],
    indexTajemna: 79,
    paranormalniAktivita: "silná tradice lidu Tonga, bez ověřených jevů",
    historickaDolozenost: "výborná (stavba přehrady je podrobně zdokumentovaná)",
    nebezpecnost: "nízká pro návštěvníky, střední pro vodní aktivity mimo vyznačené oblasti",
    pristupnost: "volně přístupné, turistická a rekreační oblast",
    atmosfera: 4.1,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Jezero Kariba na hranici Zimbabwe a Zambie je největší umělá vodní nádrž na světě podle objemu - a jeho vznik provázely povodně a úmrtí dělníků, které lid Tonga vykládal jako hněv říčního boha Nyaminyamiho.",
      historie: "Přehrada Kariba na řece Zambezi byla postavena mezi lety 1955 a 1959 a jezero se plnilo v letech 1958 až 1963. Stavba si vyžádala rozsáhlé přesídlení desítek tisíc příslušníků lidu Tonga, kteří v údolí žili po generace, a během výstavby zahynulo při povodních a nehodách několik desítek dělníků.",
      legenda: "Podle tradice lidu Tonga žije v řece Zambezi hadí říční bůh Nyaminyami s hlavou ryby, který ovládá povodně, plodnost a osud říčních komunit. Stavba přehrady měla podle legendy oddělit Nyaminyamiho od jeho družky na opačné straně vznikající hráze, což vyvolalo jeho hněv - opakované ničivé povodně během výstavby v letech 1957 a 1958 byly místními vykládány jako jeho snaha hráz zbořit a se svou družkou se opět spojit.",
      paranormalni: "Socha a symbol Nyaminyamiho jsou dodnes běžnou součástí místního umění a suvenýrů v oblasti Kariby a legenda zůstává živou součástí identity lidu Tonga i po desítkách let od dokončení přehrady.",
      skepticke: "Povodně během stavby velkých přehrad na tropických řekách jsou statisticky očekávatelný jev daný sezónními srážkami a nedokonalým odhadem průtoku v 50. letech, ne nadpřirozeným zásahem - legenda o Nyaminyamim ale zůstává kulturně významná jako vyjádření skutečné ztráty domova a řeky, kterou stavba přehrady lidu Tonga způsobila."
    },
    praktickeInfo: "Oblast kolem jezera a přehrady je turisticky rozvinutá s hotely, safari a vyhlídkou na hráz, plavání mimo vyznačené a hlídané zóny se nedoporučuje kvůli krokodýlům a hrochům.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedia: Lake Kariba", url: "https://en.wikipedia.org/wiki/Lake_Kariba", licence: "CC BY-SA" },
      { nazev: "Wikidata: Lake Kariba", url: "https://www.wikidata.org/wiki/Q1047206", licence: "CC0" },
      { nazev: "Wikipedia: Nyami Nyami", url: "https://en.wikipedia.org/wiki/Nyami_Nyami", licence: "CC BY-SA" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Kariba%20Dam", licence: "ODbL" }
    ],
    temata: ["legenda", "mytologie", "zvirata"],
    pribehy: [
      { nazev: "Rozdělený hadí pár", text: "Jádro legendy: stavba hráze měla natrvalo oddělit Nyaminyamiho od jeho družky, a jeho zoufalá snaha se s ní spojit prý stála za ničivými povodněmi během výstavby." },
      { nazev: "Přesídlení lidu Tonga", text: "Za mytologickým příběhem stojí reálná ztráta: kvůli zatopení údolí muselo být přesídleno desítky tisíc příslušníků lidu Tonga, kteří v oblasti žili po generace." }
    ]
  },
  {
    id: "hanging-rock-victoria",
    slug: "hanging-rock-victoria",
    localizedSlugs: { cs: "hanging-rock-victoria", en: "hanging-rock-victoria", de: "hanging-rock-victoria", es: "hanging-rock-victoria", fr: "hanging-rock-victoria" },
    detailPath: "/mista/hanging-rock-victoria/",
    nazev: "Hanging Rock",
    zeme: "Australie",
    kontinent: "Oceanie",
    lead: "Posvátná skála domorodých národů jihovýchodní Austrálie, kterou slavný román a film o zmizelých školačkách proslavily jako záhadu - přestože se ono zmizení nikdy doopravdy nestalo.",
    gps: { lat: -37.330222, lon: 144.595083 },
    kategorie: ["priroda", "legenda"],
    indexTajemna: 81,
    paranormalniAktivita: "fiktivní literární legenda, žádná skutečná záhadná událost",
    historickaDolozenost: "výborná geologická dokumentace, žádný reálný případ zmizení",
    nebezpecnost: "nízká",
    pristupnost: "placený vstup, značené stezky",
    atmosfera: 4.3,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Hanging Rock je sopečný útvar starý přes 6 milionů let asi 70 km severozápadně od Melbourne - posvátné místo domorodých národů, které se díky jednomu románu z roku 1967 stalo synonymem nevyřešeného zmizení, jež se nikdy nestalo.",
      historie: "Skála, vysoká 718 metrů nad mořem, je takzvaný mamelon vzniklý ztuhnutím tuhé magmy vystupující z sopečného komína. Je v opatrovnictví národa Wurundjeri a posvátným místem i pro sousední národy Dja Dja Wurrung a Taungurung, kteří ji po generace využívali k obřadům, iniciacím a setkáním - někteří domorodí lidé na skálu dodnes odmítají vystoupit z úcty k jejímu významu.",
      legenda: "Slávu záhadného místa Hanging Rocku přinesl román Joan Lindsayové Piknik na Hanging Rock z roku 1967 a jeho filmová adaptace z roku 1975 - vyprávějí smyšlený příběh o školačkách a učitelce, které při valentýnském výletu roku 1900 beze stopy zmizely na skále. Kniha byla napsána jako fikce, ale nejednoznačný tón a smyšlené 'dobové' detaily vedly generace čtenářů k přesvědčení, že jde o skutečnou historickou událost.",
      paranormalni: "Popularita příběhu je tak silná, že návštěvníci na vrcholu skály dodnes volají jméno fiktivní hrdinky Miranda, a legenda místy zcela zastínila skutečnou domorodou historii místa.",
      skepticke: "Neexistuje žádný policejní ani novinový záznam o zmizení školaček, protože se nikdy nestalo - jde o čistě literární fikci, kterou realističtější styl vyprávění proměnil v populární městskou legendu. Australští domorodí aktivisté a badatelé v posledních letech upozorňují, že tato smyšlená 'bílá' legenda dlouhodobě zastiňuje skutečný a mnohem starší domorodý význam místa."
    },
    praktickeInfo: "Rezervace má placený vstup a značené turistické trasy k vrcholu, návštěvníkům se doporučuje respektovat domorodou posvátnost místa a nevystupovat mimo vyznačené cesty.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedia: Hanging Rock, Victoria", url: "https://en.wikipedia.org/wiki/Hanging_Rock,_Victoria", licence: "CC BY-SA" },
      { nazev: "Wikidata: Hanging Rock", url: "https://www.wikidata.org/wiki/Q1319209", licence: "CC0" },
      { nazev: "State Library Victoria - Picnic at Hanging Rock", url: "https://blogs.slv.vic.gov.au/our-stories/ask-a-librarian/picnic-at-hanging-rock/", licence: "oficiální zdroj / knihovní dokumentace" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Hanging%20Rock%20Victoria%20Australia", licence: "ODbL" }
    ],
    temata: ["legenda", "media", "mytologie"],
    pribehy: [
      { nazev: "Fikce, které lidé uvěřili", text: "Joan Lindsayová napsala Piknik na Hanging Rock jako smyšlený příběh, ale realistický tón knihy vedl generace čtenářů k přesvědčení, že popisuje skutečnou nevyřešenou událost z roku 1900." },
      { nazev: "Posvátné místo před legendou", text: "Dlouho před literární slávou byla skála posvátným místem národů Wurundjeri, Dja Dja Wurrung a Taungurung, kteří ji využívali k obřadům a iniciacím - historie, kterou populární legenda o zmizení dlouho zastiňovala." }
    ]
  },
  {
    id: "gonjiam-psychiatric-hospital",
    slug: "gonjiam-psychiatric-hospital",
    localizedSlugs: { cs: "gonjiam-psychiatric-hospital", en: "gonjiam-psychiatric-hospital", de: "gonjiam-psychiatric-hospital", es: "gonjiam-psychiatric-hospital", fr: "gonjiam-psychiatric-hospital" },
    detailPath: "/mista/gonjiam-psychiatric-hospital/",
    nazev: "Gonjiam Psychiatric Hospital",
    zeme: "Jizni Korea",
    kontinent: "Asie",
    lead: "Psychiatrická nemocnice, kterou personál jedné noci opustil uprostřed práce - postele nedoloženy, karty pacientů rozházené po podlaze - a ze které se stala nejznámější jihokorejská strašidelná legenda.",
    gps: { lat: 37.362433, lon: 127.33474 },
    kategorie: ["legenda"],
    indexTajemna: 78,
    paranormalniAktivita: "silná městská legenda, žádné doložené jevy",
    historickaDolozenost: "dobrá, ačkoli přesné datum otevření se v pramenech liší",
    nebezpecnost: "žádná (budova byla zbourána)",
    pristupnost: "budova byla v roce 2018 zbourána, na místě dnes fyzicky nic nezbylo",
    atmosfera: 4.0,
    nocniVhodnost: false,
    vhodneProDeti: false,
    popisy: {
      zahada: "Psychiatrická nemocnice Gonjiam v jihokorejské provincii Kjonggi fungovala necelých patnáct let, než byla ze dne na den opuštěná - a stala se tak nejznámější asijskou 'strašidelnou nemocnicí', o které natočili celovečerní horor.",
      historie: "Nemocnice stála v Gonjiam-eup nedaleko města Kwangdžu v provincii Kjonggi. Podle strukturovaných záznamů byla otevřena na počátku 90. let 20. století a provoz ukončila v roce 1996, oficiální důvody uváděly ekonomický úpadek, hygienické problémy a poruchy kanalizace. Budova zůstala opuštěná přes dvacet let, než byla v květnu 2018 zbourána.",
      legenda: "Krátce po uzavření se mezi místními rozšířily fámy o tom, co se v nemocnici doopravdy dělo - někteří tvrdili, že pacienti tajemně umírali, jiní že se zbláznil a zmizel sám ředitel nemocnice. Historky o zakletých pokojích a záhadných úmrtích se šířily rychleji než ověřitelná fakta.",
      paranormalni: "Pověst inspirovala korejský horor Gonjiam: Haunted Asylum z roku 2018 o filmařích natáčejících v opuštěné budově, díky kterému se místo dostalo i do zahraničních médií, v roce 2012 jej stanice CNN zařadila mezi nejděsivější místa světa.",
      skepticke: "Přes rozšířené fámy o vraždách a šíleném řediteli neexistují žádné doložené důkazy o týrání pacientů - dostupné informace ukazují na mnohem prozaičtější historii ekonomického úpadku, opuštění, vloupání zvědavců, mediálního zveličení a nakonec právního sporu, který skončil demolicí budovy."
    },
    praktickeInfo: "Budova byla v roce 2018 zbourána a na místě dnes není co navštívit - místo zůstává jen jako mediální a folklórní fenomén, ne jako fyzická destinace.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikidata: Gonjiam Psychiatric Hospital", url: "https://www.wikidata.org/wiki/Q18880552", licence: "CC0" },
      { nazev: "Wikipedia: Gonjiam: Haunted Asylum (film)", url: "https://en.wikipedia.org/wiki/Gonjiam:_Haunted_Asylum", licence: "CC BY-SA" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Gonjiam-eup%20Gwangju%20Gyeonggi", licence: "ODbL" }
    ],
    temata: ["duchove", "media", "popkultura"],
    pribehy: [
      { nazev: "Nemocnice opuštěná přes noc", text: "Podle svědectví návštěvníků zůstaly po uzavření postele nedoloženy a lékařské karty rozházené po podlaze, jako by personál odešel uprostřed směny." },
      { nazev: "Z fámy filmový hit", text: "Legenda o nemocnici inspirovala korejský horor z roku 2018, který místo proslavil po celém světě - krátce předtím, než byla budova skutečně zbourána." }
    ]
  }
];

const newArticle = {
  id: "svetove-mistni-legendy-nova-mista",
  slug: "svetove-mistni-legendy-nova-mista",
  localizedSlugs: {
    cs: "svetove-mistni-legendy-nova-mista",
    en: "world-local-legends-new-places",
    de: "weltweite-lokale-legenden-neue-orte",
    es: "leyendas-locales-mundiales-nuevos-lugares",
    fr: "legendes-locales-mondiales-nouveaux-lieux"
  },
  title: "Devět míst světa, kde legenda a realita drží pohromadě jen tak tak",
  description: "Od skutečného zmizení tří strážců majáku ve Skotsku po fiktivní zmizení, kterému lidé věří dodnes v Austrálii: devět ověřených míst světa s jasně odděleným faktem, legendou a skeptickým vysvětlením.",
  category: "legenda",
  themes: ["legenda", "svet", "duchove"],
  relatedPlaceIds: [
    "flannan-isles-eilean-mor",
    "balete-drive",
    "ilha-da-queimada-grande",
    "marid-castle",
    "skirrid-fawr",
    "ogopogo-okanagan-lake",
    "lake-kariba-nyaminyami",
    "hanging-rock-victoria",
    "gonjiam-psychiatric-hospital"
  ],
  sections: [
    {
      heading: "Skutečná záhada, městská legenda a čistá fikce",
      body: "Tahle devítka není náhodný výběr strašidelných destinací - schválně kombinuje tři různé typy 'záhady'. Flannan Isles je doložený nevyřešený případ z roku 1900. Balete Drive nebo Gonjiam jsou moderní městské legendy bez policejního záznamu. Hanging Rock je čistě literární fikce, které generace čtenářů uvěřily jako historickému faktu. Rozlišit tyhle tři kategorie je přesně to, co dělá rozdíl mezi katalogem záhad a katalogem pověr."
    },
    {
      heading: "Legenda vedle vědy, ne místo ní",
      body: "U Hadího ostrova v Brazílii i u jezera Kariba v Zimbabwe stojí vedle sebe skutečné vědecké vysvětlení (izolovaný endemický druh hada, statisticky očekávatelné povodně při stavbě přehrady) a mnohem starší lidová interpretace stejného jevu. Obě vrstvy mají na mapě své místo, ale čtenář musí vždy vědět, která je která."
    },
    {
      heading: "Respekt k domorodým a místním tradicím",
      body: "U Hanging Rocku i u jezera Okanagan jsme schválně zdůraznili, že populární turistická legenda (Ogopogo, zmizení školaček) překryla starší a mnohem významnější domorodou tradici (n'ha-a-itk, posvátnost skály pro národy Wurundjeri, Dja Dja Wurrung a Taungurung). Cílem je legendu vyprávět, ne nechat ji nahradit skutečnou historii komunit, ke kterým místo patří."
    }
  ],
  sources: ["wikidata", "wikipedia", "openstreetmap", "official-site"]
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
