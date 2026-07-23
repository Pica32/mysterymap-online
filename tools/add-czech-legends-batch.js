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
    id: "blanik",
    slug: "blanik",
    localizedSlugs: { cs: "blanik", en: "blanik", de: "blanik", es: "blanik", fr: "blanik" },
    detailPath: "/mista/blanik/",
    nazev: "Blaník",
    zeme: "Cesko",
    kontinent: "Evropa",
    lead: "Hora, ve které prý dodnes čekají rytíři, až bude českému národu nejhůř.",
    gps: { lat: 49.642222, lon: 14.872778 },
    kategorie: ["priroda", "legenda"],
    indexTajemna: 87,
    paranormalniAktivita: "silná lidová tradice, žádná ověřená pozorování",
    historickaDolozenost: "dobrá (samotná hora), legenda historicky nedoložitelná",
    nebezpecnost: "nízká",
    pristupnost: "volně přístupné, značené turistické trasy",
    atmosfera: 4.4,
    nocniVhodnost: true,
    vhodneProDeti: true,
    popisy: {
      zahada: "Blaník je obyčejný zalesněný vrchol Českomoravské vrchoviny, ale drží nejsilnější národní legendu v celých Čechách: uvnitř hory má spát vojsko, které vyrazí ven ve chvíli, kdy zemi hrozí zánik.",
      historie: "Blaník leží ve Středočeském kraji poblíž Vlašimi a dosahuje 638 metrů nad mořem. Historici spojují vznik pověsti s koncem 15. století, kdy o skrytém vojsku v hoře kázal vizionář Mikuláš z Vlásenice, zřejmě pod dojmem porážky cizího vojska u Býkovic na úpatí Blaníku. Legenda pak zesílila během národního obrození v 19. století, kdy se stala jedním ze symbolů české státnosti.",
      legenda: "Podle pověsti v hoře spí rytíři pod velením svatého Václava. Až bude národu nejhůře, uschlý dub na vrcholu znovu vypučí, otevře se Vysoká brána ve skále a ozbrojení jezdci vyjedou bránit zemi.",
      paranormalni: "V lidovém podání se traduje, že se pod horou ozývá dunění, jako by kovali koně, a že v mlze prý lidé zahlédli jezdce mezi stromy. Jde o ústní tradici, ne o zdokumentovaná pozorování.",
      skepticke: "Legendy o spícím vojsku v hoře jsou rozšířený středoevropský motiv, který se váže na období ohrožení a slouží jako symbol naděje, ne jako historický záznam. Dunění lze vysvětlit geologií kopce i běžnou akustikou lesa."
    },
    praktickeInfo: "Na vrchol vede turistická značená trasa z Louňovic pod Blaníkem nebo od Ostrova, přírodní rezervace má běžný lesní provoz bez vstupného, mimo značené cesty platí ochrana přírody.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedie: Blaník", url: "https://cs.wikipedia.org/wiki/Blan%C3%ADk", licence: "CC BY-SA" },
      { nazev: "Wikidata: Blaník", url: "https://www.wikidata.org/wiki/Q881713", licence: "CC0" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Blan%C3%ADk", licence: "ODbL" }
    ],
    temata: ["legenda", "mytologie", "stredovek"],
    pribehy: [
      { nazev: "Uschlý dub a Vysoká brána", text: "Ústřední obraz legendy: dub na vrcholu znovu vypučí a ve skále se otevře brána, kterou rytíři vyjedou ven." },
      { nazev: "Kázání Mikuláše z Vlásenice", text: "Historický zárodek pověsti: koncem 15. století šířil vizionář zprávu o skrytém vojsku v hoře, krátce po vojenské porážce u paty Blaníku." }
    ]
  },
  {
    id: "propast-macocha",
    slug: "propast-macocha",
    localizedSlugs: { cs: "propast-macocha", en: "propast-macocha", de: "propast-macocha", es: "propast-macocha", fr: "propast-macocha" },
    detailPath: "/mista/propast-macocha/",
    nazev: "Propast Macocha",
    zeme: "Cesko",
    kontinent: "Evropa",
    lead: "Nejhlubší propast svého druhu ve střední Evropě nese jméno podle pověsti o zlé maceše.",
    gps: { lat: 49.373236, lon: 16.729817 },
    kategorie: ["priroda", "legenda"],
    indexTajemna: 84,
    paranormalniAktivita: "lidová tradice, žádná ověřená aktivita",
    historickaDolozenost: "dobrá geologická a historická dokumentace, pověst nedoložena",
    nebezpecnost: "střední (strmé srázy mimo vyhlídky)",
    pristupnost: "placený vstup, lanovka i turistická trasa",
    atmosfera: 4.6,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Macocha je 138,4 metru hluboká propadlina v Moravském krasu, vzniklá zřícením stropu obří jeskyně - ale její jméno pochází z lidového příběhu o vraždě, ne z geologie.",
      historie: "Propast leží u obce Vilémovice v Moravském krasu a je s hloubkou přes 138 metrů největší propadlinou svého typu ve střední Evropě. Na jejím dně teče řeka Punkva a vytváří dvě jezírka. Nejstarší dochovaná písemná zmínka o propasti pochází z roku 1663 od tamního mnicha.",
      legenda: "Podle pověsti macecha nejprve svrhla do propasti svého nevlastního syna, aby zdědil majetek jen její vlastní dítě, a když si po činu uvědomila hrůzu toho, co udělala, sama do propasti skočila. Chlapec podle pověsti pád zázračně přežil, macecha nikoliv.",
      paranormalni: "Místní podání někdy propast spojuje s neklidnými hlasy nebo pláčem, který prý je slyšet z hloubky za mlhavých rán. Jde o folklorní motiv doprovázející temnou pověst, ne o doložený jev.",
      skepticke: "Motiv macechy, která ubližuje nevlastnímu dítěti, je běžný evropský pohádkový a pověstní archetyp, takže pověst pravděpodobně dramatizuje starší lidový motiv na konkrétní působivé místo. Zvuky z hloubky lze vysvětlit prouděním vzduchu a vody v jeskynním systému pod propastí."
    },
    praktickeInfo: "Propast je přístupná od parkoviště u Skalního mlýna, na dno vede lanovka a turistická trasa, propojena je s prohlídkou Punkevních jeskyní. Vyhlídkové plošiny mají zábradlí, mimo ně hrozí reálné riziko pádu.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedie: Propast Macocha", url: "https://cs.wikipedia.org/wiki/Propast_Macocha", licence: "CC BY-SA" },
      { nazev: "Wikidata: Macocha Gorge", url: "https://www.wikidata.org/wiki/Q673317", licence: "CC0" },
      { nazev: "Správa jeskyní České republiky", url: "https://moravsky-kras.caves.cz/propast-macocha", licence: "oficiální zdroj / návštěvní informace" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Propast%20Macocha", licence: "ODbL" }
    ],
    temata: ["legenda", "umrti", "prirodni-anomalie"],
    pribehy: [
      { nazev: "Pád, který chlapec přežil", text: "Jádro pověsti: macecha srazí nevlastního syna do propasti, on zázračně přežije, ona po činu skočí sama." },
      { nazev: "Punkva na dně propasti", text: "Řeka Punkva vytváří na dně propasti dvě jezírka a spojuje Macochu s rozsáhlým jeskynním systémem Moravského krasu." }
    ]
  },
  {
    id: "hrad-bezdez",
    slug: "hrad-bezdez",
    localizedSlugs: { cs: "hrad-bezdez", en: "hrad-bezdez", de: "hrad-bezdez", es: "hrad-bezdez", fr: "hrad-bezdez" },
    detailPath: "/mista/hrad-bezdez/",
    nazev: "Hrad Bezděz",
    zeme: "Cesko",
    kontinent: "Evropa",
    lead: "Královský hrad, který měl nahradit nebezpečně útulnou Housku, a pověst o tajné chodbě mezi oběma pevnostmi.",
    gps: { lat: 50.539044, lon: 14.7197 },
    kategorie: ["hrad", "legenda"],
    indexTajemna: 81,
    paranormalniAktivita: "lidová tradice o tajné chodbě, bez ověřených jevů",
    historickaDolozenost: "výborná (jeden z nejlépe zachovaných hradů 13. století)",
    nebezpecnost: "nízká",
    pristupnost: "sezónní provoz s průvodcem",
    atmosfera: 4.3,
    nocniVhodnost: true,
    vhodneProDeti: true,
    popisy: {
      zahada: "Bezděz nechal postavit král Přemysl Otakar II. jako náhradu za nedaleký hrad Housku - a lidová tradice mezi oběma pevnostmi vypráví o dlouhé podzemní chodbě, kterou se dodnes nikomu nepodařilo najít.",
      historie: "Hrad založil Přemysl Otakar II. ve druhé polovině 13. století na vrcholu Bezdězu (606 m) v Dokeské pahorkatině. Královský palác, věž a opevnění byly hotové kolem roku 1278-1279, kapli později dostavěl Václav II., který zde byl jako dítě krátce vězněn. Bezděz patří k nejlépe dochovaným hradům z 13. století v Česku.",
      legenda: "Podle místní pověsti vede od Bezdězu k Bělé pod Bezdězem, případně až k hradu Housce, dlouhá podzemní chodba, která měla hrad zásobovat při obležení. Nejznámější podání vypráví, jak se do ní roku 1810 měl s koňským povozem propadnout sedlák, ale druhý den po vchodu do chodby nebylo v terénu ani stopy.",
      paranormalni: "Chodba mezi Bezdězem a Houskou je oblíbený motiv i v moderních vyprávěních o záhadách severních Čech, často se zmiňuje společně s pověstmi o pekelné bráně na Housce, přestože obě místa dělí vzdušnou čarou přes 20 kilometrů.",
      skepticke: "Žádná tak dlouhá chodba nebyla nikdy archeologicky doložena a na vzdálenost přes 20 km by středověká technika stěží stačila; pověsti o propadlých selských vozech jsou v Česku běžný motiv vysvětlující zavalené staré štoly nebo sklepy, ne důkaz existence tajné trasy."
    },
    praktickeInfo: "Hrad je v sezóně přístupný s průvodcem, výstup je strmý lesní pěšinou z obce Bezděz nebo od parkoviště pod hradem, mimo sezónu je přístup omezen.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedie: Bezděz (hrad)", url: "https://cs.wikipedia.org/wiki/Bezd%C4%9Bz_(hrad)", licence: "CC BY-SA" },
      { nazev: "Wikidata: Bezděz Castle", url: "https://www.wikidata.org/wiki/Q1186381", licence: "CC0" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Hrad%20Bezd%C4%9Bz", licence: "ODbL" }
    ],
    temata: ["legenda", "podzemi", "stredovek"],
    pribehy: [
      { nazev: "Sedlák, který se propadl do chodby", text: "Nejznámější epizoda pověsti: podle záznamu z roku 1810 se do domnělé podzemní chodby měl i s povozem propadnout místní sedlák, druhý den však po otvoru nebyla stopa." },
      { nazev: "Král, který si vybral vrchol", text: "Přemysl Otakar II. dal přednost vzdušnému vrcholu Bezdězu před stísněnou Houskou - rozhodnutí, ze kterého později vzešla legenda o spojení obou míst." }
    ]
  },
  {
    id: "hrad-spilberk",
    slug: "hrad-spilberk",
    localizedSlugs: { cs: "hrad-spilberk", en: "hrad-spilberk", de: "hrad-spilberk", es: "hrad-spilberk", fr: "hrad-spilberk" },
    detailPath: "/mista/hrad-spilberk/",
    nazev: "Hrad Špilberk",
    zeme: "Cesko",
    kontinent: "Evropa",
    lead: "Barokní pevnost, která si v habsburské monarchii vysloužila pověst nejtěžšího žaláře říše.",
    gps: { lat: 49.194444, lon: 16.598889 },
    kategorie: ["hrad", "veznice"],
    indexTajemna: 85,
    paranormalniAktivita: "lidová tradice o duších vězňů, bez ověřených jevů",
    historickaDolozenost: "výborná, rozsáhle zdokumentovaná vězeňská historie",
    nebezpecnost: "nízká",
    pristupnost: "celoroční provoz, placený vstup",
    atmosfera: 4.5,
    nocniVhodnost: true,
    vhodneProDeti: false,
    popisy: {
      zahada: "Špilberk nad Brnem začínal jako královský hrad a skončil jako vězení, o kterém psal po celé Evropě italský básník ve své knize Mé žaláře - jak se z reprezentativního sídla stal symbol utrpení?",
      historie: "Hrad založil ve 13. století Přemysl Otakar II., ve 14.-15. století sloužil jako hlavní sídlo moravských markrabat. Po roce 1740 byl přestavěn na mohutnou barokní pevnost s kasematami, odolal švédskému obléhání v roce 1645 i pruskému útoku v roce 1742. Od roku 1783, po reformách Josefa II., sloužily kasematy jako státní vězení pro nejtěžší zločince z celé monarchie.",
      legenda: "Špilberské žaláře platily v první polovině 19. století za nejtvrdší vězení habsburské monarchie - vězni tu byli drženi v temných celách připoutaní ke zdi. Mezi vězni byl i italský básník Silvio Pellico, jehož kniha Mé žaláře udělala z pevnosti symbol politické perzekuce po celé Evropě.",
      paranormalni: "Kolem kasemat koluje od otevření veřejnosti v roce 1880 řada pověstí o neklidných duších bývalých vězňů a zvucích řetězů v nejtemnějších chodbách - historikové města je řadí spíš k lidové fantazii doprovázející skutečně drsnou historii místa.",
      skepticke: "Reálná krutost vězeňského provozu 18.-19. století dostatečně vysvětluje ponurou pověst místa bez nutnosti nadpřirozeného výkladu; akustika dlouhých kamenných chodeb navíc snadno zkresluje běžné zvuky provozu na zdánlivé kroky nebo řinčení."
    },
    praktickeInfo: "Kasematy i hradní expozice jsou přístupné celoročně s placeným vstupem, prohlídka podzemí je fyzicky nenáročná, ale doporučuje se teplejší oblečení kvůli nižší teplotě v chodbách.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedie: Špilberk", url: "https://cs.wikipedia.org/wiki/%C5%A0pilberk", licence: "CC BY-SA" },
      { nazev: "Wikidata: Špilberk Castle", url: "https://www.wikidata.org/wiki/Q118256", licence: "CC0" },
      { nazev: "Muzeum města Brna - Špilberk", url: "https://www.spilberk.cz/", licence: "oficiální zdroj / návštěvní informace" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=%C5%A0pilberk%20Brno", licence: "ODbL" }
    ],
    temata: ["veznice", "stredovek", "valka"],
    pribehy: [
      { nazev: "Mé žaláře Silvia Pellica", text: "Kniha italského básníka a politického vězně z 19. století proslavila špilberské kasematy po celé Evropě jako symbol nejtvrdšího vězení monarchie." },
      { nazev: "Z markraběcího sídla pevností", text: "Přestavba na barokní pevnost po roce 1740 změnila reprezentativní hrad v nedobytnou vojenskou stavbu, která později posloužila jako vězení." }
    ]
  },
  {
    id: "zamek-cesky-krumlov",
    slug: "zamek-cesky-krumlov",
    localizedSlugs: { cs: "zamek-cesky-krumlov", en: "zamek-cesky-krumlov", de: "zamek-cesky-krumlov", es: "zamek-cesky-krumlov", fr: "zamek-cesky-krumlov" },
    detailPath: "/mista/zamek-cesky-krumlov/",
    nazev: "Zámek Český Krumlov",
    zeme: "Cesko",
    kontinent: "Evropa",
    lead: "Druhý největší hradní komplex v Čechách hlídá bílá paní, jejíž skutečný lidský příběh je smutnější než kterákoli strašidelná historka.",
    gps: { lat: 48.8125, lon: 14.315278 },
    kategorie: ["hrad", "legenda"],
    indexTajemna: 82,
    paranormalniAktivita: "silná lidová tradice o bílé paní, historicky doložen jen lidský příběh předlohy",
    historickaDolozenost: "výborná",
    nebezpecnost: "nízká",
    pristupnost: "placené prohlídkové okruhy, historické centrum volně přístupné",
    atmosfera: 4.6,
    nocniVhodnost: true,
    vhodneProDeti: true,
    popisy: {
      zahada: "Český Krumlov je po Pražském hradě druhý největší hradní a zámecký komplex v Česku - a jeho chodbami má podle pověsti bloudit bílá paní, kterou historikové ztotožnili s konkrétní, doloženou ženou z rodu Rožmberků.",
      historie: "Hrad vznikl v první třetině 13. století, poprvé je písemně doložen roku 1253. Od roku 1302 jej vlastnil rod Rožmberků, který ve 14. století vybudoval Horní hrad na skalním ostrohu. Pozdější majitelé Eggenbergové a Schwarzenbergové areál rozšířili o barokní prvky včetně jednoho z nejlépe dochovaných barokních divadel na světě. Od roku 1992 je historické centrum Českého Krumlova na seznamu UNESCO.",
      legenda: "Bílá paní je jedna z nejznámějších českých strašidelných postav a na rožmberských a pernštejnských sídlech se s ní pojí konkrétní historická žena - Perchta z Rožmberka (kolem 1429-1476), kterou otec proti její vůli provdal za Jana z Lichtenštejna. Manžel ji podle dochovaných dopisů celý život psychicky i hmotně týral. Legenda říká, že se bílá paní zjevuje s bílými rukavicemi před šťastnými událostmi a s černými před neštěstím.",
      paranormalni: "Spojení Perchty s bílou paní poprvé navrhl v 17. století jezuitský historik Bohuslav Balbín, který v třeboňském archivu našel její dopisy plné stížností na manžela - moderní podání toto spojení dál rozvíjí do podoby zjevení na zámeckých chodbách.",
      skepticke: "Historicky je doložené jen Perchtino nešťastné manželství a její dopisy, nikoli žádné nadpřirozené zjevení - spojení s duchem je interpretace až o dvě století mladší než sama Perchta, typická pro to, jak si baroko oblíbilo dávat konkrétní tváře anonymním strašidelným pověstem."
    },
    praktickeInfo: "Zámek nabízí několik prohlídkových okruhů s placeným vstupem a průvodcem, historické centrum je volně přístupné, v sezóně bývá velmi navštěvované kvůli statusu UNESCO.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedie: Český Krumlov (hrad a zámek)", url: "https://cs.wikipedia.org/wiki/%C4%8Cesk%C3%BD_Krumlov_(hrad_a_z%C3%A1mek)", licence: "CC BY-SA" },
      { nazev: "Wikidata: Český Krumlov Castle", url: "https://www.wikidata.org/wiki/Q2164919", licence: "CC0" },
      { nazev: "Státní hrad a zámek Český Krumlov", url: "https://castle.ckrumlov.cz/cz/zamek_oinf_bilpan/", licence: "oficiální zdroj / návštěvní informace" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Z%C3%A1mek%20%C4%8Cesk%C3%BD%20Krumlov", licence: "ODbL" }
    ],
    temata: ["duchove", "legenda", "stredovek"],
    pribehy: [
      { nazev: "Dopisy z třeboňského archivu", text: "Jezuita Bohuslav Balbín v 17. století objevil Perchtiny dopisy plné stížností na chování manžela a jako první ji spojil s pověstí o bílé paní." },
      { nazev: "Bílé a černé rukavice", text: "Podle pověsti bílá paní před šťastnou událostí nosí bílé rukavice, před neštěstím černé - jeden z nejrozšířenějších detailů české strašidelné tradice." }
    ]
  },
  {
    id: "hrad-pernstejn",
    slug: "hrad-pernstejn",
    localizedSlugs: { cs: "hrad-pernstejn", en: "hrad-pernstejn", de: "hrad-pernstejn", es: "hrad-pernstejn", fr: "hrad-pernstejn" },
    detailPath: "/mista/hrad-pernstejn/",
    nazev: "Hrad Pernštejn",
    zeme: "Cesko",
    kontinent: "Evropa",
    lead: "Gotický hrad, který prý bude stát tak dlouho, dokud poroste tis zasazený jako poutnická hůl.",
    gps: { lat: 49.450833, lon: 16.318889 },
    kategorie: ["hrad", "legenda"],
    indexTajemna: 80,
    paranormalniAktivita: "rodová tradice o bílé paní, bez ověřených jevů",
    historickaDolozenost: "výborná",
    nebezpecnost: "nízká",
    pristupnost: "sezónní provoz, placený vstup",
    atmosfera: 4.5,
    nocniVhodnost: true,
    vhodneProDeti: true,
    popisy: {
      zahada: "Pernštejn na hranici Českomoravské vrchoviny je jeden z nejlépe dochovaných gotických hradů v zemi - a jeho osud je podle pověsti svázaný s jediným stromem na nádvoří.",
      historie: "Hrad založili páni z Medlova, kteří si podle sídla začali říkat páni z Pernštejna, nejpozději kolem roku 1270-1285. Jméno pravděpodobně vychází z německého Bärenstein (medvědí kámen), což podporují i názvy blízkého potoka Nedvědičky a města Nedvědice. Ve 15.-16. století prošel hrad velkou přestavbou na reprezentativní šlechtické sídlo, roku 1645 odolal švédskému obléhání. Od roku 1945 je v majetku státu a od 1995 je národní kulturní památkou.",
      legenda: "Podle pověsti zabodl při stavbě hradu poutník vracející se z křížové výpravy do země svou tisovou hůl a prohlásil, že z ní vyroste strom dřív, než bude hrad dostavěn. Hůl skutečně zazelenala a vyrostl z ní vzrostlý tis, který stojí na nádvoří dodnes - a lidé věří, že hrad bude stát, dokud bude strom žít. Pernštejn má stejně jako Český Krumlov i vlastní bílou paní, kterou tradice rovněž spojuje s Perchtou z Rožmberka.",
      paranormalni: "Zjevení bílé paní na Pernštejně je součástí širší rodové tradice více šlechtických sídel spojených s rožmberským a pernštejnským rodem, moderní návštěvnická vyprávění ji líčí jako varovnou postavu ohlašující smrt v rodě.",
      skepticke: "Historický tis na nádvoří skutečně roste, ale spojení jeho stáří s legendou o poutnické holi nelze ověřit - jde o typický pověstný motiv 'stromu osudu' vázaný na starý strom, ne o doložený historický fakt. Podobně jako u Českého Krumlova jde u bílé paní o pozdější literární spojení konkrétní historické ženy s obecnou strašidelnou tradicí."
    },
    praktickeInfo: "Hrad je přístupný v sezóně s několika prohlídkovými okruhy a placeným vstupem, k hradu vede zpevněná cesta od parkoviště v obci Nedvědice.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedie: Pernštejn (hrad)", url: "https://cs.wikipedia.org/wiki/Pern%C5%A1tejn_(hrad)", licence: "CC BY-SA" },
      { nazev: "Wikidata: Pernštejn Castle", url: "https://www.wikidata.org/wiki/Q655633", licence: "CC0" },
      { nazev: "Státní hrad Pernštejn", url: "https://www.hrad-pernstejn.cz/cs", licence: "oficiální zdroj / návštěvní informace" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Hrad%20Pern%C5%A1tejn", licence: "ODbL" }
    ],
    temata: ["duchove", "legenda", "stredovek"],
    pribehy: [
      { nazev: "Tisová hůl poutníka", text: "Pověst o stromu osudu: poutník vracející se z křížové výpravy zabodl do země tisovou hůl, ze které vyrostl strom stojící na nádvoří dodnes." },
      { nazev: "Druhá bílá paní rodu", text: "Stejně jako Český Krumlov si i Pernštejn nárokuje zjevení bílé paní spojované s Perchtou z Rožmberka - doklad, jak se jeden lidský příběh rozšířil na více šlechtických sídel." }
    ]
  },
  {
    id: "hradek-kutna-hora",
    slug: "hradek-kutna-hora",
    localizedSlugs: { cs: "hradek-kutna-hora", en: "hradek-kutna-hora", de: "hradek-kutna-hora", es: "hradek-kutna-hora", fr: "hradek-kutna-hora" },
    detailPath: "/mista/hradek-kutna-hora/",
    nazev: "Hrádek - České muzeum stříbra Kutná Hora",
    zeme: "Cesko",
    kontinent: "Evropa",
    lead: "Středověký stříbrný důl pod městem, které bohatstvím z podzemí platilo války - a jednou prý podzemí použilo jako zbraň.",
    gps: { lat: 49.9475, lon: 15.2654 },
    kategorie: ["podzemi", "historie"],
    indexTajemna: 79,
    paranormalniAktivita: "tradiční důlní folklor, bez ověřených jevů",
    historickaDolozenost: "výborná",
    nebezpecnost: "nízká (vedená prohlídka), střední mimo trasu",
    pristupnost: "placený vstup s průvodcem, nutná rezervace",
    atmosfera: 4.3,
    nocniVhodnost: false,
    vhodneProDeti: false,
    popisy: {
      zahada: "Pod Kutnou Horou se táhnou desítky kilometrů středověkých důlních chodeb, ze kterých pocházelo stříbro pro pražské groše - a podle historické tradice měli havíři jednou použít samotné podzemí k obraně města.",
      historie: "Hrádek vznikl jako malé dřevěné opevnění na přelomu 13. a 14. století k ochraně rostoucí hornické osady, první písemná zmínka je z roku 1312. Bohatý těžař stříbra Jan Smíšek z Vrchoviště jej koncem 15. století přestavěl na pozdně gotický měšťanský palác. Od roku 1996 sídlí v Hrádku České muzeum stříbra se dvěma prohlídkovými trasami: Město stříbra a Cesta stříbra vedoucí přímo do středověkého dolu. Kutná Hora je od roku 1995 na seznamu UNESCO.",
      legenda: "Podle historické tradice zaznamenané v místních kronikách havíři během obléhání města králem Albrechtem otrávili řeku Vrchlici jedovatou hlinkou z kutnohorských dolů, což mělo způsobit onemocnění obléhajících koní a vojáků - historikové to popisují jako jednu z prvních dochovaných zmínek o použití 'chemické' zbraně v evropské historii.",
      paranormalni: "Kolem hlubokých štol koluje mezi průvodci i návštěvníky řada historek o zabloudivších hornících a zvucích krumpáčů v opuštěných chodbách - jde o tradiční důlní folklor, který provázel havířské řemeslo po celé Evropě, ne o specifika Kutné Hory.",
      skepticke: "Zpráva o otrávení řeky je dobová kronikářská tradice, ne archeologicky nebo lékařsky ověřený incident, ale zapadá do reálného kontextu středověkého obléhání, kdy se kontaminace vodních zdrojů běžně používala jako taktika. Zvuky v opuštěných štolách vysvětluje proudění vzduchu a podzemní voda v rozsáhlém důlním systému."
    },
    praktickeInfo: "Prohlídka trasy Cesta stříbra vyžaduje helmu a plášť, které muzeum půjčuje, trasa zahrnuje sestup do úzkých štol a není vhodná pro lidi s klaustrofobií nebo omezenou pohyblivostí, rezervace prohlídky předem se doporučuje.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedie: Hrádek (Kutná Hora)", url: "https://cs.wikipedia.org/wiki/Hr%C3%A1dek_(Kutn%C3%A1_Hora)", licence: "CC BY-SA" },
      { nazev: "Wikidata: Czech Museum of Silver", url: "https://www.wikidata.org/wiki/Q11084250", licence: "CC0" },
      { nazev: "České muzeum stříbra Kutná Hora", url: "https://www.cms-kh.cz/hradek-muzeum-a-stredoveky-dul", licence: "oficiální zdroj / návštěvní informace" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Hr%C3%A1dek%20Kutn%C3%A1%20Hora", licence: "ODbL" }
    ],
    temata: ["podzemi", "valka", "stredovek"],
    pribehy: [
      { nazev: "Otrávená řeka Vrchlice", text: "Kronikářská tradice o obraně města: havíři měli během obléhání krále Albrechta otrávit řeku jedovatou hlinkou z dolů a nakazit obléhající vojsko a koně." },
      { nazev: "Cesta stříbra do skutečné štoly", text: "Muzejní trasa vede návštěvníky přímo do autentické středověké důlní chodby, kde se dodnes těžilo stříbro pro pražské groše." }
    ]
  },
  {
    id: "rabstejn-nad-strelou",
    slug: "rabstejn-nad-strelou",
    localizedSlugs: { cs: "rabstejn-nad-strelou", en: "rabstejn-nad-strelou", de: "rabstejn-nad-strelou", es: "rabstejn-nad-strelou", fr: "rabstejn-nad-strelou" },
    detailPath: "/mista/rabstejn-nad-strelou/",
    nazev: "Rabštejn nad Střelou",
    zeme: "Cesko",
    kontinent: "Evropa",
    lead: "Nejmenší historické město Evropy s necelými dvaceti obyvateli skrývá i vlastní zakladatelskou pověst o havranovi a prstenu.",
    gps: { lat: 50.042222, lon: 13.289444 },
    kategorie: ["hrad", "legenda"],
    indexTajemna: 73,
    paranormalniAktivita: "lokální folklor, bez ověřených jevů",
    historickaDolozenost: "dobrá",
    nebezpecnost: "nízká",
    pristupnost: "sezónní provoz, částečně volně přístupné",
    atmosfera: 4.2,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Rabštejn nad Střelou má podle dostupných údajů jen kolem dvaceti stálých obyvatel, přesto má hrad, barokní zámek, klášter i vlastní historické městské právo - odkud se vzalo tak malé, a přitom plnohodnotné historické město?",
      historie: "První písemná zmínka o Rabštejnu pochází z roku 1269, kdy patřil rodu Milhosticů. Po roce 1321 koupil panství Oldřich Pluh, královský podkomoří a oblíbenec Jana Lucemburského, který zpustlý hrádek přestavěl na významné šlechtické sídlo a na předhradí založil opevněné městečko. Roku 1337 Rabštejnu vymohl pražské městské právo. Dnes patří pod město Manětín a je nejmenším historickým městem v Česku i v Evropě.",
      legenda: "Podle místní pověsti souvisí založení hradu a městečka s havranem, který na skalním ostrohu upustil nebo objevil vzácný prsten - odtud prý pochází i německé jméno Rabenstein, tedy 'havraní kámen'. Pověst dává jinak strategickému opevnění na skále romantický zakladatelský mýtus vázaný na konkrétní přírodní útvar.",
      paranormalni: "V místním podání se traduje, že se nad skalním ostrohem havrani drží dodnes a jejich přítomnost je místními vykládána jako připomínka staré pověsti - jde o folklorní interpretaci běžného výskytu ptáků na skalnatém terénu.",
      skepticke: "Motiv ptáka, který založení sídla nějak zprostředkuje nebo předpoví, je běžný evropský toponymický mýtus - pravděpodobněji jde o lidové vysvětlení již existujícího německého názvu skály, ne o historickou událost."
    },
    praktickeInfo: "Městečko leží v přírodním parku Horní Střela na pomezí čtyř krajů, přístup je autem nebo pěšky z Manětína, zřícenina hradu i zámek jsou v sezóně částečně přístupné, mimo sezónu je vhodné ověřit otevírací dobu.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedie: Rabštejn nad Střelou", url: "https://cs.wikipedia.org/wiki/Rab%C5%A1tejn_nad_St%C5%99elou", licence: "CC BY-SA" },
      { nazev: "Wikidata: Rabštejn nad Střelou", url: "https://www.wikidata.org/wiki/Q5103812", licence: "CC0" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Rab%C5%A1tejn%20nad%20St%C5%99elou", licence: "ODbL" }
    ],
    temata: ["legenda", "zvirata", "stredovek"],
    pribehy: [
      { nazev: "Havran a prsten", text: "Zakladatelská pověst: havran na skalním ostrohu upustil nebo objevil vzácný prsten, což dalo vzniknout jménu Rabštejn (Rabenstein, havraní kámen)." },
      { nazev: "Nejmenší město s vlastním právem", text: "Přestože má jen kolem dvaceti obyvatel, získal Rabštejn už roku 1337 pražské městské právo - vzácná kombinace maloobecní velikosti a plnohodnotného městského statusu." }
    ]
  }
];

const newArticle = {
  id: "ceske-mistni-legendy-nova-mista",
  slug: "ceske-mistni-legendy-nova-mista",
  localizedSlugs: {
    cs: "ceske-mistni-legendy-nova-mista",
    en: "czech-local-legends-new-places",
    de: "tschechische-lokale-legenden-neue-orte",
    es: "leyendas-locales-checas-nuevos-lugares",
    fr: "legendes-locales-tcheques-nouveaux-lieux"
  },
  title: "Osm českých pověstí, které jsme přidali na mapu: od Blaníku po havrana z Rabštejna",
  description: "Blaník, Macocha, bílá paní z Rožmberka i havíři, kteří otrávili řeku: osm ověřených českých míst s místními legendami, historií a skeptickým vysvětlením.",
  category: "legenda",
  themes: ["legenda", "cesko", "duchove"],
  relatedPlaceIds: [
    "blanik",
    "propast-macocha",
    "hrad-bezdez",
    "hrad-spilberk",
    "zamek-cesky-krumlov",
    "hrad-pernstejn",
    "hradek-kutna-hora",
    "rabstejn-nad-strelou"
  ],
  sections: [
    {
      heading: "Proč zrovna tahle místa",
      body: "Česká databáze MysteryMap měla dosud jen čtrnáct míst, přestože je jasné, že místních pověstí je v zemi mnohem víc. Vybrali jsme osm lokalit, které mají zdokumentovanou historii i živou ústní tradici zároveň: horu se spícím vojskem, propast s pověstí o vraždě, hrad s legendou o tajné chodbě, žalář, dva zámky s bílou paní, středověký důl a nejmenší historické město Evropy."
    },
    {
      heading: "Kde končí historie a začíná pověst",
      body: "U každého místa jsme se drželi stejného pravidla jako u zbytku mapy: nejdřív ověřitelná historie z Wikidat, Wikipedie a oficiálních zdrojů, teprve pak samotná legenda a nakonec racionální vysvětlení. U bílé paní to znamená rozlišit doloženou Perchtu z Rožmberka a její dopisy od pozdější barokní pověsti o duchu. U Macochy zase oddělit geologicky doloženou propadlinu od lidového příběhu o maceše."
    },
    {
      heading: "Co bude dál",
      body: "Osm míst je začátek, ne konec: český podíl na mapě je pořád malý ve srovnání se zbytkem světa. Další vlny budou cíleně hledat regionální pověsti mimo velká turistická centra, aby mapa lépe pokrývala i méně známá místní vyprávění."
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
