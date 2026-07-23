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
    id: "catacombes-de-paris",
    slug: "catacombes-de-paris",
    localizedSlugs: { cs: "katakomby-parize", en: "catacombs-of-paris", de: "katakomben-von-paris", es: "catacumbas-de-paris", fr: "catacombes-de-paris" },
    detailPath: "/mista/catacombes-de-paris/",
    nazev: "Pařížské katakomby",
    zeme: "Francie",
    kontinent: "Evropa",
    lead: "Šest milionů lidských koster přemístěných z přeplněných hřbitovů do bývalých vápencových lomů pod centrem Paříže.",
    gps: { lat: 48.83389, lon: 2.33222 },
    kategorie: ["podzemi", "historie"],
    indexTajemna: 84,
    paranormalniAktivita: "silná populární tradice, bez ověřených jevů",
    historickaDolozenost: "výborná",
    nebezpecnost: "nízká na oficiální trase, vysoká mimo ni (nelegální průzkum tunelů)",
    pristupnost: "placený vstup na oficiální trase, zbytek sítě je zakázaný",
    atmosfera: 4.5,
    nocniVhodnost: false,
    vhodneProDeti: false,
    popisy: {
      zahada: "Pod centrem Paříže se táhne stovky kilometrů opuštěných vápencových lomů, jejichž malou část proměnili osvícenští úředníci v největší podzemní kostnici na světě.",
      historie: "Lomy pod levým břehem Seiny zásobovaly kamenem stavbu Paříže už od dob Lutetie a ve středověku z nich vznikl rozsáhlý podzemní labyrint pod pláněmi Montrouge. Na konci 18. století vedly hygienické katastrofy přeplněných hřbitovů, především hřbitova Neviňátek, k rozhodnutí přemístit ostatky do bezpečné vzdálenosti od obydlené Paříže. Přenos probíhal v letech 1785-1787 v noci, aby nevyvolal pohoršení obyvatel a církve, a pokračoval po několik dalších desetiletí, dokud se do bývalých štol nepřesunulo přibližně šest milionů koster.",
      legenda: "Po roce 1809 nechal inspektor Héricart de Thury kosti uspořádat do dekorativních zdí a vzorů, čímž z prostého skladu ostatků udělal monumentální, téměř muzejní prostor - odtud pramení část mystiky, kterou katakomby dodnes mají.",
      paranormalni: "Kolem sítě kolují desítky historek o zabloudivších průzkumnících, tajemných hlasech a fenoménu takzvaných cataphiles, kteří do nepovolených částí systému pravidelně nelegálně pronikají navzdory zákazu a hrozícím pokutám.",
      skepticke: "Rozsáhlost, tma a naprosté ticho podzemního labyrinu spolehlivě vytvářejí dezorientaci a strach i bez nadpřirozeného vysvětlení - skutečné riziko představuje hlavně zabloudění v nezmapovaných částech sítě, ne cokoliv paranormálního."
    },
    praktickeInfo: "Oficiální prohlídková trasa vede jen malou částí sítě a vyžaduje rezervaci předem kvůli omezené kapacitě, teplota v podzemí je celoročně nízká, vstup mimo vyznačenou trasu je nelegální a nebezpečný kvůli nezmapovaným úsekům.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedia: Catacombs of Paris", url: "https://en.wikipedia.org/wiki/Catacombs_of_Paris", licence: "CC BY-SA" },
      { nazev: "Wikidata: Catacombs of Paris", url: "https://www.wikidata.org/wiki/Q28924", licence: "CC0" },
      { nazev: "Catacombes de Paris - oficiální web", url: "https://www.catacombes.paris.fr/en/history/ossuary", licence: "oficiální zdroj / návštěvní informace" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Catacombes%20de%20Paris", licence: "ODbL" }
    ],
    temata: ["podzemi", "umrti", "stredovek"],
    pribehy: [
      { nazev: "Noční přesun šesti milionů koster", text: "Aby se vyhnuli pohoršení, prováděli dělníci přenos ostatků z přeplněných pařížských hřbitovů do podzemních lomů v noci, po dobu několika desetiletí." },
      { nazev: "Cataphiles v zakázaných chodbách", text: "Naprostá většina rozsáhlé podzemní sítě zůstává veřejnosti uzavřená, přesto do ní pravidelně nelegálně proniká komunita takzvaných cataphiles." }
    ]
  },
  {
    id: "skull-tower-nis",
    slug: "skull-tower-nis",
    localizedSlugs: { cs: "vez-lebek-nis", en: "skull-tower-nis", de: "schaedelturm-nis", es: "torre-de-craneos-nis", fr: "tour-des-cranes-nis" },
    detailPath: "/mista/skull-tower-nis/",
    nazev: "Věž lebek (Ćele-kula)",
    zeme: "Srbsko",
    kontinent: "Evropa",
    lead: "Osmanská odvetná stavba z lebek padlých srbských povstalců se stala symbolem odporu, ne strachu, jak si zadavatel přál.",
    gps: { lat: 43.3122, lon: 21.9238 },
    kategorie: ["historie", "veznice"],
    indexTajemna: 85,
    paranormalniAktivita: "lidová tradice, bez ověřených jevů",
    historickaDolozenost: "výborná",
    nebezpecnost: "nízká",
    pristupnost: "celoroční provoz, placený vstup",
    atmosfera: 4.4,
    nocniVhodnost: false,
    vhodneProDeti: false,
    popisy: {
      zahada: "Věž u Niše je postavená z lebek padlých srbských povstalců na příkaz osmanského velitele - měla vyvolat strach, ale stala se přesným opakem: symbolem národního odporu.",
      historie: "Věž vznikla po bitvě u Čegaru v květnu 1809 během prvního srbského povstání. Když srbští povstalci pod velením Stevana Sinđeliće zjistili, že jsou obklíčeni přesilou osmanských vojsk, Sinđelić raději odpálil prachárnu a zahynul spolu se svými muži i útočícími Osmany, než aby se vzdal a čelil mučení.",
      legenda: "Osmanský vezír Huršid paša nechal jako odvetu a varování z lebek asi 952 padlých povstalců postavit věž vsazenou do čtyř stěn ve 14 řadách. Místo zastrašení ale věž posílila odhodlání Srbů k nezávislosti a stala se jedním z nejsilnějších národních symbolů.",
      paranormalni: "Kolem věže se tradičně vypráví o duších padlých povstalců, kteří prý dodnes hlídají místo své smrti - dnes je věž obklopena kaplí postavenou roku 1892 na jejich památku.",
      skepticke: "Historický kontext bitvy a stavby věže je podrobně doložený osmanskými i srbskými prameny, žádné nadpřirozené jevy nejsou zaznamenané - dnes z původních 952 lebek zůstává v památníku jen asi 59, zbytek byl postupně odebrán rodinami padlých nebo zničen povětrnostními vlivy."
    },
    praktickeInfo: "Věž je součástí památníku s kaplí na okraji Niše, přístupná celoročně s placeným vstupem, prohlídka je nenáročná a vhodná i pro krátkou zastávku při cestě městem.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedia: Skull Tower", url: "https://en.wikipedia.org/wiki/Skull_Tower", licence: "CC BY-SA" },
      { nazev: "Wikidata: Skull Tower", url: "https://www.wikidata.org/wiki/Q336310", licence: "CC0" },
      { nazev: "Visit Niš - Skull Tower", url: "https://visitnis.org/en/what-to-see/skull-tower/", licence: "oficiální zdroj / návštěvní informace" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Cele%20kula%20Nis", licence: "ODbL" }
    ],
    temata: ["valka", "umrti", "stredovek"],
    pribehy: [
      { nazev: "Sinđelićova poslední volba", text: "Velitel Stevan Sinđelić raději odpálil prachárnu a zemřel i se svými muži a útočícími Osmany, než aby padl do zajetí a čelil mučení." },
      { nazev: "Odveta, která posílila odpor", text: "Vezír Huršid paša nechal z lebek povstalců postavit varovnou věž - výsledkem ale bylo posílení srbské touhy po nezávislosti, ne zastrašení." }
    ]
  },
  {
    id: "devils-sea",
    slug: "devils-sea",
    localizedSlugs: { cs: "dabelske-more", en: "devils-sea", de: "teufelsmeer", es: "mar-del-diablo", fr: "mer-du-diable" },
    detailPath: "/mista/devils-sea/",
    nazev: "Ďábelské moře (Ma-no Umi)",
    zeme: "Japonsko",
    kontinent: "Asie",
    lead: "Tichomořská obdoba Bermudského trojúhelníku jižně od Tokia, kde ve 40. a 50. letech zmizely desítky rybářských lodí i výzkumné plavidlo.",
    gps: { lat: 25, lon: 137 },
    kategorie: ["legenda"],
    indexTajemna: 80,
    paranormalniAktivita: "silná populární tradice, bez ověřených nadpřirozených jevů",
    historickaDolozenost: "dobrá (zdokumentovaná ztráta lodí, geologický kontext)",
    nebezpecnost: "vysoká pro plavbu (aktivní sopečná a tektonická oblast)",
    pristupnost: "otevřené moře, bez turistické infrastruktury",
    atmosfera: 4.0,
    nocniVhodnost: false,
    vhodneProDeti: false,
    popisy: {
      zahada: "Oblast Tichého oceánu jižně od Tokia se v japonské tradici nazývá Ma-no Umi, tedy Ďábelské moře - a ve 20. století se stala tichomořskou obdobou Bermudského trojúhelníku kvůli sérii ztracených lodí.",
      historie: "Oblast leží zhruba mezi japonským pobřežím asi 100 km jižně od Tokia, východním pobřežím Filipín a západním pobřežím Guamu. Ve 40. a 50. letech 20. století zde zmizelo bezpočet rybářských lodí a roku 1952 vyslala japonská vláda na průzkum výzkumné plavidlo Kaijó Maru č. 5 - i to v oblasti zmizelo i s 31 členy posádky, kteří nebyli nikdy nalezeni.",
      legenda: "Ďábelské moře bývá řazeno mezi 'paranormální' lokality po vzoru Bermudského trojúhelníku a v populárních médiích se s ním pojí podobné teorie o nevysvětlitelných zmizeních lodí a letadel.",
      paranormalni: "Podobnost s Bermudským trojúhelníkem - včetně přezdívky Tichomořský Bermudský trojúhelník nebo Dračí trojúhelník - z oblasti udělala oblíbené téma paranormálních pořadů a knih o nevysvětlitelných jevech.",
      skepticke: "Oblast leží přímo na Tichomořském ohnivém kruhu, jedné z geologicky nejnestabilnějších částí planety s častou sopečnou a seizmickou aktivitou, prudkými bouřemi a nepředvídatelnými proudy - to samo o sobě dostatečně vysvětluje zvýšené riziko pro lodní dopravu bez nutnosti nadpřirozeného výkladu."
    },
    praktickeInfo: "Jde o otevřenou mořskou oblast bez turistické infrastruktury, komerční a rybářská plavba se řídí běžnými bezpečnostními pravidly japonských a mezinárodních úřadů.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedia: Devil's Sea", url: "https://en.wikipedia.org/wiki/Devil%27s_Sea", licence: "CC BY-SA" },
      { nazev: "Wikidata: Devil's Sea", url: "https://www.wikidata.org/wiki/Q252633", licence: "CC0" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Miyake%20Island%20Japan", licence: "ODbL" }
    ],
    temata: ["zmizeni", "oceany", "legenda"],
    pribehy: [
      { nazev: "Ztracené výzkumné plavidlo", text: "Když japonská vláda roku 1952 vyslala loď Kaijó Maru č. 5 prošetřit zmizení rybářských plavidel, zmizela beze stopy i ona sama i s celou posádkou." },
      { nazev: "Ohnivý kruh pod hladinou", text: "Oblast leží na Tichomořském ohnivém kruhu, takže sopečná a seizmická aktivita pod hladinou je pravděpodobnějším vysvětlením ztrát lodí než nadpřirozené síly." }
    ]
  },
  {
    id: "loftus-hall",
    slug: "loftus-hall",
    localizedSlugs: { cs: "loftus-hall", en: "loftus-hall", de: "loftus-hall", es: "loftus-hall", fr: "loftus-hall" },
    detailPath: "/mista/loftus-hall/",
    nazev: "Loftus Hall",
    zeme: "Irsko",
    kontinent: "Evropa",
    lead: "Irský dům, kde měl podle pověsti při karetní hře usednout ke stolu samotný ďábel - a skutečný nález v obývacím pokoji legendu ještě víc zamotal.",
    gps: { lat: 52.1487, lon: -6.9106 },
    kategorie: ["hrad", "legenda"],
    indexTajemna: 82,
    paranormalniAktivita: "silná lidová tradice, bez ověřených jevů",
    historickaDolozenost: "dobrá",
    nebezpecnost: "nízká",
    pristupnost: "placené prohlídky v sezóně",
    atmosfera: 4.3,
    nocniVhodnost: true,
    vhodneProDeti: false,
    popisy: {
      zahada: "Loftus Hall na odlehlém poloostrově Hook v hrabství Wexford platí za nejstrašidelnější dům v Irsku - podle nejslavnější historky tu při karetní partii seděl přímo ďábel.",
      historie: "Georgiánské sídlo na poloostrově Hook má kořeny už v roce 1350, dnešní podoba pochází z pozdější přestavby rodiny Tottenhamů. Izolovaná poloha na výběžku do moře dodává domu charakteristickou atmosféru už po staletí.",
      legenda: "Podle legendy z roku 1775 zaklepal jedné bouřlivé noci na dveře tajemný cizinec a rodina Tottenhamů ho pozvala dovnitř. Dcera Lady Anne Tottenhamová si k němu velmi rychle vytvořila náklonnost. Při karetní hře jí spadla karta na zem, a když se pro ni sehnula, všimla si, že má cizinec místo nohou rozeklaná kopyta. Ten se okamžitě vzňal a prorazil střechou ven - byl to sám ďábel.",
      paranormalni: "Anne Tottenhamová po zážitku už nikdy nebyla stejná a podle pověsti dodnes bloudí takzvaným Tapestry Room, který návštěvníci i personál označují za nejstrašidelnější místnost domu.",
      skepticke: "Během rekonstrukce v 60. a 70. letech 19. století byly v obývacím pokoji nalezeny ostatky kojence, což vedlo k alternativnímu výkladu: legenda o ďáblovi mohla sloužit k zakrytí skutečného skandálu, totiž že Anne otěhotněla mimo manželství a dítě zemřelo - příběh o ďáblu tak mohl být pozdější krycí historka, ne popis nadpřirozené události."
    },
    praktickeInfo: "Dům nabízí v sezóně placené prohlídky včetně tematických nočních prohlídek, nachází se na odlehlém poloostrově Hook, doporučuje se rezervace předem.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedia: Loftus Hall", url: "https://en.wikipedia.org/wiki/Loftus_Hall", licence: "CC BY-SA" },
      { nazev: "Wikidata: Loftus Hall", url: "https://www.wikidata.org/wiki/Q15242617", licence: "CC0" },
      { nazev: "Loftus Hall - oficiální web", url: "https://www.loftushall.ie/about", licence: "oficiální zdroj / návštěvní informace" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Loftus%20Hall%20Wexford", licence: "ODbL" }
    ],
    temata: ["duchove", "legenda", "umrti"],
    pribehy: [
      { nazev: "Kopyta pod stolem", text: "Ústřední obraz legendy: Anne Tottenhamová si při hře karet všimne, že tajemný host má místo nohou kopyta, a ten se vzápětí vzňa a prorazí střechou." },
      { nazev: "Kojenec v obývacím pokoji", text: "Nález ostatků dítěte během viktoriánské rekonstrukce otevřel alternativní výklad legendy jako krycího příběhu pro skutečný rodinný skandál." }
    ]
  },
  {
    id: "brabo-fountain-antwerp",
    slug: "brabo-fountain-antwerp",
    localizedSlugs: { cs: "kasna-brabo-antverpy", en: "brabo-fountain-antwerp", de: "brabobrunnen-antwerpen", es: "fuente-brabo-amberes", fr: "fontaine-brabo-anvers" },
    detailPath: "/mista/brabo-fountain-antwerp/",
    nazev: "Kašna Brabo",
    zeme: "Belgie",
    kontinent: "Evropa",
    lead: "Bronzová kašna na hlavním náměstí Antverp vypráví zakladatelský mýtus o hrdinovi, obru a uťaté ruce, ze kterého má město údajně i své jméno.",
    gps: { lat: 51.22118, lon: 4.39969 },
    kategorie: ["legenda"],
    indexTajemna: 68,
    paranormalniAktivita: "zakladatelský mýtus, bez ověřených jevů",
    historickaDolozenost: "dobrá (kašna samotná), legenda historicky nedoložitelná",
    nebezpecnost: "žádná",
    pristupnost: "volně přístupné veřejné náměstí",
    atmosfera: 3.6,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Na hlavním náměstí Antverp stojí kašna zachycující muže, jak právě hází useknutou ruku obra do řeky - výjev, který má podle legendy vysvětlovat i samotné jméno města.",
      historie: "Kašnu z kamene a bronzu navrhl sochař Jef Lambeaux a odhalena byla roku 1887 před antverpskou radnicí na náměstí Grote Markt. Zachycuje legendárního římského vojáka Silvia Braba uprostřed hodu useknutou rukou obra Druona Antigoona.",
      legenda: "Podle pověsti obr Druon Antigoon střežil most přes řeku Šeldu a vybíral clo od kolemjdoucích lodí; když někdo odmítl zaplatit, usekl mu ruku a hodil ji do řeky. Římský voják Silvius Brabo obra nakonec porazil, usekl ruku jemu a hodil ji do vody místo něj. Ve vlámštině 'hand werpen' znamená 'házet ruku' a z tohoto spojení má podle legendy pocházet i jméno Antverpy.",
      paranormalni: "Brabo a jeho čin jsou dodnes součástí městského znaku Antverp a legenda je natolik zakořeněná, že ji řada obyvatel i turistů bere jako doslovné vysvětlení jména města.",
      skepticke: "Jazykovědci považují spojení jména Antverpy se slovy 'házet ruku' spíš za lidovou etymologii než za skutečný historický nebo jazykový základ - přesnější odvození jména města souvisí pravděpodobně se starým výrazem pro nábřeží nebo náspy podél řeky, ne s legendárním hodem useknuté ruky."
    },
    praktickeInfo: "Kašna stojí na veřejném náměstí Grote Markt před radnicí, volně přístupná bez omezení, dobrá výchozí zastávka pro procházku historickým centrem Antverp.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedia: Brabo Fountain", url: "https://en.wikipedia.org/wiki/Brabo_Fountain", licence: "CC BY-SA" },
      { nazev: "Wikidata: Brabo Fountain", url: "https://www.wikidata.org/wiki/Q3911365", licence: "CC0" },
      { nazev: "Wikipedia: Silvius Brabo", url: "https://en.wikipedia.org/wiki/Silvius_Brabo", licence: "CC BY-SA" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Grote%20Markt%20Antwerp", licence: "ODbL" }
    ],
    temata: ["legenda", "mytologie", "symboly"],
    pribehy: [
      { nazev: "Uťatá ruka jako mýtus o jméně", text: "Vlámské spojení 'hand werpen' (házet ruku) mělo podle lidové etymologie dát vzniknout jménu Antverpy - odborníci ale tuto souvislost považují spíš za pověst než za jazykový fakt." },
      { nazev: "Obr, který si nechal platit useknutými rukama", text: "Druon Antigoon podle legendy trestal neplatiče na mostě přes Šeldu tím nejbrutálnějším způsobem - usekl jim ruku a hodil ji do řeky." }
    ]
  }
];

const enrichedPlaces = [
  {
    id: "le-morne-brabant",
    patch: {
      lead: "Osamělá hora na jihozápadě Mauricia, kam se v 18. a 19. století uchylovali uprchlí otroci a která se stala symbolem svobody i tragické oběti.",
      indexTajemna: 82,
      atmosfera: 4.5,
      popisy: {
        zahada: "Le Morne Brabant je strmá hora vybíhající do Indického oceánu, jejíž nepřístupné jeskyně a útesy sloužily po celé 18. a začátek 19. století jako úkryt uprchlým otrokům - a jejíž konec svobody přišel podle tradice v tragickém nedorozumění.",
        historie: "Hora leží v distriktu Rivière Noire na jihozápadě Mauricia a dosahuje výšky 556 metrů. Během francouzské a později britské koloniální nadvlády se stávala přirozeným útočištěm uprchlých otroků, takzvaných marronů, kteří v jejích těžko přístupných skalních dutinách a jeskyních vytvářeli vlastní komunity a udržovali si africké a malgašské kulturní kořeny. V nejsilnějším období tvořili marroni až desetinu otrocké populace ostrova. Od roku 2008 je Kulturní krajina Le Morne na seznamu UNESCO.",
        legenda: "Podle ústní tradice byli po zrušení otroctví Brity v roce 1835 na horu vysláni vojáci, aby marronům oznámili osvobození. Skrývající se lidé si ale výklad spletli - v domnění, že je jde vojsko znovu zajmout, se řada z nich raději vrhla ze skal do smrti, než aby se vrátila do otroctví.",
        paranormalni: "Le Morne je dodnes pro mauricijskou populaci a zejména pro potomky otroků silně symbolickým místem smutku, hrdosti a paměti - výroční akce a připomínkové obřady se u paty hory konají dodnes.",
        skepticke: "Přesný historický průběh tragédie na vrcholu není možné nezávisle doložit, protože se opírá čistě o ústně předávanou tradici bez dobových písemných záznamů - to ovšem nijak nesnižuje historickou realitu marronského osídlení hory, která je archeologicky i historicky dobře doložená."
      },
      praktickeInfo: "K vrcholu vede náročnější turistická trasa, doporučuje se místní průvodce kvůli strmému terénu, hora je součástí chráněné kulturní krajiny UNESCO a vyžaduje respekt k jejímu památkovému významu.",
      temata: ["umrti", "legenda", "ostrov"],
      pribehy: [
        { nazev: "Skok, který vznikl z omylu", text: "Podle tradice se marroni domnívající se, že je přicházejí vojáci znovu zotročit, raději vrhli ze skal do smrti - ve skutečnosti jim vojáci nesli zprávu o svobodě." },
        { nazev: "Desetina ostrova v úkrytu", text: "V nejsilnějším období tvořili marroni ukrytí na Le Morne a v jeho okolí až desetinu celkové otrocké populace Mauricia." }
      ],
      zdroje: [
        { nazev: "Wikipedia: Le Morne Brabant", url: "https://en.wikipedia.org/wiki/Le_Morne_Brabant", licence: "CC BY-SA" },
        { nazev: "Wikidata: Le Morne Brabant", url: "https://www.wikidata.org/wiki/Q1129992", licence: "CC0" },
        { nazev: "UNESCO World Heritage - Le Morne Cultural Landscape", url: "https://whc.unesco.org/en/list/1259", licence: "oficiální zdroj / UNESCO dokumentace" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Le%20Morne%20Brabant%20Mauritius", licence: "ODbL" }
      ]
    }
  },
  {
    id: "soufriere-hills",
    patch: {
      lead: "Sopka, která od roku 1995 zasypala hlavní město Montserratu a proměnila Plymouth v jediné trvale opuštěné hlavní město na světě.",
      indexTajemna: 85,
      atmosfera: 4.4,
      popisy: {
        zahada: "Sopka Soufrière Hills mlčela téměř čtyři století - než se v polovině 90. let znovu probudila a nenávratně pohřbila hlavní město karibského ostrova Montserrat pod několika metry popela.",
        historie: "Po sérii erupcí od července 1995 zasáhly nejničivější výbuchy ostrov v roce 1997: jediný den si vyžádal 19 obětí a srpnová erupce téhož roku zničila asi 80 % města Plymouth, které pak zůstalo pod vrstvou popela silnou přes metr. Plymouth je od té doby jediným hlavním městem na světě, které bylo takto trvale a fyzicky zasypáno.",
        legenda: "Plymouth zůstává oficiálně de jure hlavním městem Montserratu, přestože je fyzicky neobyvatelné a veškerá správa se dávno přesunula jinam - status, který z něj dělá jedinečný právní i symbolický přízrak mezi světovými hlavními městy.",
        paranormalni: "Médiím i cestovatelům se Plymouth přezdívá karibská Pompeje - opuštěné budovy zasypané popelem až po střechy vyvolávají silně apokalyptický dojem, který přitahuje pozornost po celém světě.",
        skepticke: "Jde o zdokumentovaný, vědecky sledovaný vulkanický jev bez jakéhokoli nadpřirozeného prvku - ostrovní úřady oblast trvale vyklidily a označily za vyloučenou zónu, nový správní střed se buduje v lokalitě Little Bay, zatímco Plymouth zůstává navštívitelný jen s licencovaným průvodcem."
      },
      praktickeInfo: "Vstup do vyloučené zóny kolem Plymouthu je povolen jen s licencovaným průvodcem kvůli přetrvávajícímu riziku sopečné aktivity a nestabilnímu terénu, samostatná návštěva bez povolení je zakázaná.",
      temata: ["sopky", "ztracena-mesta", "katastrofa"],
      pribehy: [
        { nazev: "Jediné zasypané hlavní město světa", text: "Plymouth zůstává jediným hlavním městem na světě, které bylo trvale fyzicky pohřbeno sopečnou erupcí, a přesto si oficiálně drží status de jure hlavního města." },
        { nazev: "Karibská Pompeje", text: "Přezdívka odkazuje na budovy zasypané popelem téměř po střechy - vizuálně nejsilnější připomínku toho, jak rychle dokáže sopka proměnit živé město v mrtvou krajinu." }
      ],
      zdroje: [
        { nazev: "Wikipedia: Plymouth, Montserrat", url: "https://en.wikipedia.org/wiki/Plymouth,_Montserrat", licence: "CC BY-SA" },
        { nazev: "Wikidata: Plymouth, Montserrat", url: "https://www.wikidata.org/wiki/Q30990", licence: "CC0" },
        { nazev: "Wikipedia: Soufrière Hills", url: "https://en.wikipedia.org/wiki/Soufri%C3%A8re_Hills", licence: "CC BY-SA" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Plymouth%20Montserrat", licence: "ODbL" }
      ]
    }
  }
];

const newArticle = {
  id: "svetove-legendy-mesta-a-symboly",
  slug: "svetove-legendy-mesta-a-symboly",
  localizedSlugs: {
    cs: "svetove-legendy-mesta-a-symboly",
    en: "world-legends-cities-and-symbols",
    de: "weltweite-legenden-staedte-und-symbole",
    es: "leyendas-mundiales-ciudades-y-simbolos",
    fr: "legendes-mondiales-villes-et-symboles"
  },
  title: "Od ďábla u karet po sopku, která pohřbila hlavní město: dalších sedm míst světa",
  description: "Pařížské katakomby, srbská Věž lebek, japonské Ďábelské moře, irský Loftus Hall, antverpská kašna Brabo a dvě přepsané mauricijsko-karibské kapitoly o marronech a zasypaném Plymouthu.",
  category: "legenda",
  themes: ["legenda", "svet", "podzemi"],
  relatedPlaceIds: [
    "catacombes-de-paris",
    "skull-tower-nis",
    "devils-sea",
    "loftus-hall",
    "brabo-fountain-antwerp",
    "le-morne-brabant",
    "soufriere-hills"
  ],
  sections: [
    {
      heading: "Zakladatelské mýty vedle skutečných tragédií",
      body: "Kašna Brabo v Antverpách je čistá lidová etymologie beze stopy historické události - a hned vedle ní na mapě stojí Le Morne Brabant, kde je ústní tradice jediným záznamem skutečné tragédie, kterou žádný dobový dokument nepotvrdil ani nevyvrátil. Cílem není tyhle dva typy vyprávění směšovat, ale ukázat vedle sebe, jak různě může legenda vznikat."
    },
    {
      heading: "Proč jsme přepsali dvě starší položky",
      body: "Le Morne Brabant a Soufrière Hills byly v databázi už dřív, ale jen jako obecný redakční seed bez konkrétního obsahu. Rozhodli jsme se je při této vlně dohledat pořádně a nahradit obecný text skutečnou historií marronů a zasypaného Plymouthu - stejný standard, jaký držíme u nových míst."
    },
    {
      heading: "Tři různé typy 'záhady' v jedné vlně",
      body: "Skutečný nevyřešený historický kontext (Věž lebek), silná populární pověra bez důkazů (Ďábelské moře, Loftus Hall) a čistě symbolický zakladatelský mýtus (kašna Brabo) - všechny tři patří na mapu, ale každý jinak a s jinou mírou důvěryhodnosti, kterou popis vždy otevřeně pojmenovává."
    }
  ],
  sources: ["wikidata", "wikipedia", "openstreetmap", "unesco-whc", "official-site"]
};

const places = readJson(placesPath);
const byId = new Map(places.map((place) => [place.id, place]));

let inserted = 0;
newPlaces.forEach((place) => {
  if (!byId.has(place.id)) inserted += 1;
  byId.set(place.id, place);
});

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

const articles = readJson(articlesPath);
const articlesById = new Map(articles.map((item) => [item.id, item]));
articlesById.set(newArticle.id, newArticle);
writeJson(articlesPath, Array.from(articlesById.values()));

console.log(`Upserted ${inserted} new places, enriched ${enriched} existing places, and 1 article.`);
