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

const enrichedPlaces = [
  {
    id: "bikini-atoll",
    patch: {
      lead: "Tichomořský atol, kde USA odpálily 23 jaderných náloží a jehož obyvatele slíbená návratnost domů dodnes nedostihla.",
      atmosfera: 4.3,
      popisy: {
        zahada: "Bikini Atoll v Marshallových ostrovech vypadá na fotografiích jako tyrkysový tichomořský ráj - ve skutečnosti šlo v letech 1946 až 1958 o místo 23 jaderných testů, včetně jednoho z nejsilnějších výbuchů v historii lidstva.",
        historie: "V únoru 1946 oznámil americký vojenský guvernér zhruba 167 obyvatelům atolu, že se musí dočasně vystěhovat kvůli testům, které mají 'zabránit budoucím válkám'. Obyvatelé byli přesunuti na atol Rongerik, kde ale chyběly dostatečné zdroje potravy a pitné vody.",
        legenda: "Nejničivější byl test Castle Bravo z 1. března 1954 o síle tisíckrát převyšující bombu svrženou na Hirošimu - hřibovitý mrak dosáhl výšky přes 39 kilometrů a vypařil tři ostrovy. Radioaktivní spad z drceného korálu a vody dopadl i na obydlené atoly v okolí.",
        paranormalni: "Obyvatelé se na Bikini krátce vrátili roku 1969, ale byli znovu evakuováni roku 1978 kvůli nepřijatelně vysoké radiaci, a další obavy z přetrvávajícího záření vedly k evakuaci lodí Rainbow Warrior organizace Greenpeace v roce 1985.",
        skepticke: "Podle Národního onkologického institutu USA je až 55 % veškerých případů rakoviny na severních atolech přímým důsledkem radioaktivního spadu z testu Castle Bravo - jde o vědecky měřitelný, tragický dopad jaderných zbraní, ne o nadpřirozenou kletbu místa."
      },
      praktickeInfo: "Atol zůstává řídce osídlený kvůli přetrvávající radiaci, návštěva je možná jen v omezené míře organizovanými potápěčskými expedicemi k vrakům lodí z testů, trvalé znovuosídlení domácí populace se dosud nepodařilo bezpečně obnovit.",
      zdroje: [
        { nazev: "Wikipedia: Bikini Atoll", url: "https://en.wikipedia.org/wiki/Bikini_Atoll", licence: "CC BY-SA" },
        { nazev: "Wikidata: Bikini Atoll", url: "https://www.wikidata.org/wiki/Q152225", licence: "CC0" },
        { nazev: "National Security Archive - Castle Bravo at 70", url: "https://nsarchive.gwu.edu/briefing-book/nuclear-vault/2024-02-29/castle-bravo-70-worst-nuclear-test-us-history", licence: "novinářský a archivní zdroj" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Bikini%20Atoll", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Slib, který se nikdy nesplnil", text: "Obyvatelům bylo v roce 1946 řečeno, že jde jen o dočasné vystěhování - dodnes, o desítky let později, se na atol nemohou natrvalo a bezpečně vrátit." },
        { nazev: "Výbuch tisíckrát silnější než Hirošima", text: "Test Castle Bravo z roku 1954 byl tisíckrát silnější než bomba svržená na Hirošimu a vypařil tři celé ostrovy atolu." }
      ]
    }
  },
  {
    id: "erta-ale-lava-lake",
    patch: {
      lead: "Etiopská sopka, které místní lid Afar říká 'kouřící hora' a 'brána do pekla' - a jejíž lávové jezero bublá nepřetržitě už přes sto let.",
      atmosfera: 4.6,
      popisy: {
        zahada: "V jedné z nejsušších, nejníže položených a nejžhavějších oblastí planety bublá už déle než sto let žhavé lávové jezero - místní lid Afar mu říká 'brána do podsvětí'.",
        historie: "Erta Ale leží v Danakilské (Afarské) proláklině východní Afriky, kde se od sebe rozestupují tři tektonické desky. Je nejaktivnější etiopskou sopkou a jednou z hrstky sopek na světě s trvale aktivním lávovým jezerem - to bublá přinejmenším od roku 1967, možná už od roku 1906.",
        legenda: "V jazyce Afar znamená jméno sopky doslova 'kouřící hora' a pro místní lid, který v oblasti žije po staletí, představuje posvátné místo - bránu do podsvětí. Erta Ale patří mezi jen pět sopek světa s aktivním lávovým jezerem a často má dokonce dvě jezera zároveň.",
        paranormalni: "Teplota lávy v jezeře přesahuje 1 100 stupňů Celsia a jeho nepřetržité bublání a záře v noci vytváří dramatickou, téměř nadpozemskou podívanou, která přitahuje dobrodružné cestovatele z celého světa.",
        skepticke: "Trvalá aktivita lávového jezera je dobře zdokumentovaný geologický jev spojený s tenkou zemskou kůrou v místě rozestupujících se tektonických desek, ne nadpřirozený portál - poslední boční erupce byla zaznamenána v roce 2017 a sopka je pod nepřetržitým vědeckým dohledem."
      },
      praktickeInfo: "Výstup k kráteru vyžaduje vícedenní expedici s místním průvodcem a ozbrojeným doprovodem kvůli bezpečnostní situaci v regionu, extrémní vedro a nedostatek vody vyžadují důkladnou přípravu.",
      zdroje: [
        { nazev: "Wikipedia: Erta Ale", url: "https://en.wikipedia.org/wiki/Erta_Ale", licence: "CC BY-SA" },
        { nazev: "Wikidata: Erta Ale", url: "https://www.wikidata.org/wiki/Q903", licence: "CC0" },
        { nazev: "NASA Earth Observatory - The Smoking Mountain", url: "https://science.nasa.gov/earth/earth-observatory/the-smoking-mountain-152150/", licence: "oficiální zdroj / vědecká dokumentace" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Erta%20Ale%20Ethiopia", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Sto let nepřetržitého bublání", text: "Lávové jezero na vrcholu Erta Ale je aktivní minimálně od roku 1967, možná už od roku 1906 - jedno z mála trvale aktivních lávových jezer na světě." },
        { nazev: "Posvátná brána lidu Afar", text: "Pro místní lid Afar, který v jedné z nejdrsnějších krajin planety žije po staletí, představuje sopka posvátnou bránu do podsvětí, ne jen geologický jev." }
      ]
    }
  },
  {
    id: "sanxingdui",
    patch: {
      lead: "Bronzové masky s vypoulenýma očima a křídlovitýma ušima patřily civilizaci, o jejíž existenci nevěděl žádný starověký čínský text - a nikdo neví, jak si sama sebe nazývala.",
      atmosfera: 4.5,
      popisy: {
        zahada: "V čínské provincii S'-čchuan objevili archeologové stovky bronzových artefaktů zcela neznámého stylu - obří masky s vypoulenýma očima a křídlovitýma ušima, jaké svět předtím nikdy neviděl, patřící civilizaci bez jména.",
        historie: "První nález učinil náhodou sečuánský farmář Jen Tao-čcheng už na jaře 1929, kdy narazil na jeskyni s více než 300 nefritovými artefakty. Skutečně monumentální objev ale přišel až v roce 1986, kdy archeologové odkryli dvě obětní jámy plné záměrně rozbitých nebo spálených nefritových, bronzových a slonovinových předmětů.",
        legenda: "Artefakty patřily dosud neznámé bronzové civilizaci Šu, která existovala zhruba mezi lety 1250 a 1100 př. n. l. a pak náhle zmizela - v době, kdy se předpokládalo, že kolébka čínské civilizace leží o 1200 kilometrů severovýchodněji na řece Chuang-che. Největší nalezená maska měří 1,32 metru na šířku a je největší dosud objevenou bronzovou maskou na světě.",
        paranormalni: "Záhadu prohlubuje absence jakýchkoli lidských ostatků, textů nebo historických záznamů o civilizaci na místě samém i v okolních lokalitách - masky nemají jména ani žádné nápisy, takže nevíme, kdo je vytvořil ani proč.",
        skepticke: "Přestože zůstává mnoho otázek o smyslu a jméně civilizace nezodpovězeno, samotné artefakty jsou archeologicky nezpochybnitelné a datovatelné - výzkum navíc pokračuje, mezi lety 2020 a 2022 objevili archeologové šest dalších jam se zlomky zlaté masky, hedvábí a slonovinových řezeb."
      },
      praktickeInfo: "Artefakty jsou vystavené v Sanxingdui Museum poblíž nalezišť, muzeum nabízí placený vstup a je dobře přizpůsobené turistickým prohlídkám.",
      zdroje: [
        { nazev: "Wikipedia: Sanxingdui", url: "https://en.wikipedia.org/wiki/Sanxingdui", licence: "CC BY-SA" },
        { nazev: "Wikidata: Sanxingdui", url: "https://www.wikidata.org/wiki/Q929072", licence: "CC0" },
        { nazev: "Smithsonian Magazine - Sanxingdui artifacts", url: "https://www.smithsonianmag.com/smart-news/trove-of-13000-artifacts-sheds-light-on-enigmatic-chinese-civilization-180980254/", licence: "novinářský zdroj" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Sanxingdui%20Museum", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Civilizace bez jména", text: "Přestože jde o vyspělou bronzovou kulturu s unikátním stylem, nemáme žádný text ani záznam, jak sama sebe nazývala - jméno Šu jí přiřadili až moderní historikové." },
        { nazev: "Největší bronzová maska na světě", text: "Jedna z nalezených masek měří 1,32 metru na šířku a zůstává největší dosud objevenou bronzovou maskou na světě." }
      ]
    }
  },
  {
    id: "mausoleum-of-the-first-qin-emperor",
    patch: {
      lead: "Hrobka prvního čínského císaře s modelem celé říše zalitým tekutou rtutí zůstává nedotčená - archeologové ji záměrně neotevírají, dokud na to nebudou mít bezpečnou technologii.",
      atmosfera: 4.4,
      popisy: {
        zahada: "Terakotová armáda objevená náhodou farmáři v roce 1974 je jen předsíní mnohem většího tajemství: samotná hlavní pohřební komora prvního čínského císaře Čchin Š'-chuanga nebyla nikdy otevřena a podle starých záznamů ji zaplavují řeky tekuté rtuti.",
        historie: "Farmáři kopající studnu v roce 1974 narazili na terakotové vojáky - během následujícího desetiletí archeologové odkryli nejméně 8000 kdysi barevně natřených soch se svými koňmi a vozy. Samotná hlavní hrobka, větší než fotbalové hřiště, ale zůstává uzavřená dodnes.",
        legenda: "Podle starověkého historika Sima Qiana ukrývá podzemní palác zmenšený model tehdy známé Číny se stovkou řek, jezer a moří vytvořených z tekuté rtuti místo vody. Čínská vláda na doporučení archeologů odmítá komoru otevřít, dokud nebude mít technologii, která by bezpečně ochránila obsah před poškozením.",
        paranormalni: "Průzkumy půdy kolem hrobky v 80. letech skutečně potvrdily výrazně vyšší koncentrace rtuti než ve zbytku regionu, což starověké záznamy o rtuťových řekách nečekaně podpořilo vědeckým měřením.",
        skepticke: "Opatrnost při neotevření hrobky není pověrčivá bázeň, ale racionální vědecké rozhodnutí: podobné případy uspěchaného otevření starověkých hrobek jinde ve světě vedly k nenávratnému poškození obsahu kontaktem se vzduchem - čínští archeologové proto čekají na lepší konzervační technologie, ne na zažehnání kletby."
      },
      praktickeInfo: "Muzeum terakotové armády je plně přístupné s placeným vstupem a patří mezi nejnavštěvovanější památky Číny, samotná hlavní hrobka není a nebude v dohledné době přístupná veřejnosti ani badatelům.",
      zdroje: [
        { nazev: "Wikipedia: Mausoleum of Qin Shi Huang", url: "https://en.wikipedia.org/wiki/Mausoleum_of_Qin_Shi_Huang", licence: "CC BY-SA" },
        { nazev: "Wikidata: Mausoleum of the First Qin Emperor", url: "https://www.wikidata.org/wiki/Q910180", licence: "CC0" },
        { nazev: "UNESCO World Heritage - Mausoleum of the First Qin Emperor", url: "https://whc.unesco.org/en/list/441/", licence: "oficiální zdroj / UNESCO dokumentace" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Mausoleum%20of%20Qin%20Shi%20Huang", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Řeky rtuti pod zemí", text: "Podle starověkého historika Sima Qiana ukrývá hrobka model tehdejší Číny se stovkou řek a moří vytvořených z tekuté rtuti - tvrzení, které moderní měření půdy překvapivě podpořilo." },
        { nazev: "Hrobka, kterou nikdo neotevře", text: "Čínská vláda záměrně odmítá hlavní komoru otevřít, dokud věda nezaručí bezpečnou konzervaci obsahu - opatrnost založená na zkušenosti s poškozením podobných nálezů jinde ve světě." }
      ]
    }
  },
  {
    id: "mount-ararat",
    patch: {
      lead: "Nejvyšší hora Turecka, kterou už od středověku lidé spojují s místem, kde po potopě přistála Noemova archa.",
      atmosfera: 4.2,
      popisy: {
        zahada: "Sněhem pokrytý vrchol na hranici Turecka, Arménie a Íránu je už od středověku spojován s biblickým příběhem o Noemově arše, která tu měla přistát po ustoupení potopy - a desítky expedic od 19. století dodnes hledají jakoukoli hmatatelnou stopu.",
        historie: "První zaznamenaný výstup na horu vedl Friedrich Parrot v roce 1829, který ve svém zápisu poznamenal, že místní Arméni jsou pevně přesvědčeni, že archa na vrcholu Araratu zůstává dodnes. Od té doby horu zdolaly desítky expedic, včetně rozsáhlé výpravy z roku 1974 s 200 účastníky z asi 20 zemí.",
        legenda: "Silné deště v roce 1948 odkryly asi 15 kilometrů od vrcholu útvar připomínající tvarem loď, který od té doby přitahuje badatele i amatérské hledače. V roce 1952 francouzský průzkumník Fernand Navarra tvrdil, že o samotě zahlédl temnou hmotu, kterou označil za jedině možnou archu.",
        paranormalni: "Přestože žádná expedice nikdy nepřinesla přesvědčivý archeologický důkaz, zprávy o dřevěných strukturách a neobvyklých útvarech se stále objevují a udržují legendu při životě už téměř dvě staletí systematického hledání.",
        skepticke: "Navzdory rozsáhlému a dlouhodobému pátrání se nikdy nepodařilo najít jednoznačný archeologický důkaz existence archy na hoře - takzvaná 'archová anomálie' zůstává nejpravděpodobněji přirozeným geologickým útvarem, ne pozůstatkem starověké lodi."
      },
      praktickeInfo: "Výstup na horu vyžaduje speciální povolení tureckých úřadů kvůli poloze v citlivé pohraniční oblasti a obvykle i najatého horského průvodce, jde o technicky náročný vysokohorský výstup.",
      zdroje: [
        { nazev: "Wikipedia: Mount Ararat", url: "https://en.wikipedia.org/wiki/Mount_Ararat", licence: "CC BY-SA" },
        { nazev: "Wikidata: Mount Ararat", url: "https://www.wikidata.org/wiki/Q72303", licence: "CC0" },
        { nazev: "Wikipedia: Searches for Noah's Ark", url: "https://en.wikipedia.org/wiki/Searches_for_Noah%27s_Ark", licence: "CC BY-SA" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Mount%20Ararat%20Turkey", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Dvě století hledání", text: "Od první zdokumentované výpravy v roce 1829 zdolaly horu desítky expedic hledajících stopy Noemovy archy, žádná z nich ale nepřinesla jednoznačný archeologický důkaz." },
        { nazev: "Útvar odkrytý deštěm", text: "Silné deště v roce 1948 odkryly útvar tvarem připomínající loď asi 15 kilometrů od vrcholu, který od té doby přitahuje badatele i amatérské hledače archy." }
      ]
    }
  }
];

const places = readJson(placesPath);
const byId = new Map(places.map((place) => [place.id, place]));

let enriched = 0;
enrichedPlaces.forEach(({ id, patch }) => {
  const existing = byId.get(id);
  if (!existing) {
    console.warn(`Skipped enrichment, not found: ${id}`);
    return;
  }
  byId.set(id, { ...existing, ...patch, popisy: { ...existing.popisy, ...patch.popisy } });
  enriched += 1;
});

writeJson(placesPath, Array.from(byId.values()));

console.log(`Enriched ${enriched} existing places.`);
