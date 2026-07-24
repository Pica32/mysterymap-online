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
    id: "dilmun-burial-mounds",
    patch: {
      lead: "Jedno z největších pohřebišť starověkého světa - přes 350 000 mohyl na severu Bahrajnu, které dodnes vyvolávají spory mezi archeology a náboženskými konzervativci.",
      atmosfera: 3.8,
      popisy: {
        zahada: "Na severu ostrova Bahrajn se rozkládá pohřebiště, které patřilo k největším na celém starověkém světě - odhaduje se, že zde vzniklo přes 350 000 hrobových mohyl, nahromaděných v kamenitých oblastech severního Bahrajnu během tisíciletí.",
        historie: "Mohyly patří kultuře Dilmun a Umm an-Nar. První vykopávky provedl roku 1889 J. Theodore Bent se svou ženou - nalezli úlomky slonoviny, dřevěné uhlí a skořápky pštrosích vajec, dnes uložené v Britském muzeu. Dánští badatelé v 50. letech 20. století objevili předměty datované zhruba na 4100-3700 let před současností.",
        legenda: "Mohyly odhalují propracované pohřební zvyky: obdélníkové kamenné komory s výklenky, obvykle o rozměrech 15 na 30 stop, obsahující jeden nebo více pohřbů doprovázených keramikou, pečetěmi a měděnými předměty. Analýza koster ukazuje průměrnou délku života kolem 40 let a průměr 1,6 dítěte na rodinu.",
        paranormalni: "Rozsah pohřebiště - stovky tisíc mohyl soustředěných na relativně malém ostrově - z něj dělá jedno z nejhustších starověkých pohřebišť na světě, svědectví o dlouhé kontinuitě osídlení v oblasti Perského zálivu.",
        skepticke: "Zachování mohyl vyvolalo v roce 2005 politický spor - během parlamentní debaty se proti ochraně naleziště postavili náboženští konzervativci prosazující rozvojovou výstavbu před archeologickou ochranou. Přesto UNESCO v roce 2019 zapsalo lokalitu o rozloze 168,45 hektaru (s ochrannou zónou 383,46 hektaru) na seznam světového dědictví."
      },
      praktickeInfo: "Část mohyl je veřejně přístupná v rámci archeologického parku, doporučuje se navštívit i přidružené muzeum s nálezy z vykopávek.",
      zdroje: [
        { nazev: "Wikipedia: Dilmun Burial Mounds", url: "https://en.wikipedia.org/wiki/Dilmun_Burial_Mounds", licence: "CC BY-SA" },
        { nazev: "Wikidata: Dilmun Burial Mounds", url: "https://www.wikidata.org/wiki/Q5276996", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Dilmun%20Burial%20Mounds%20Bahrain", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "350 000 mohyl na jednom ostrově", text: "Severní Bahrajn hostí odhadem přes 350 000 hrobových mohyl - jedno z nejrozsáhlejších pohřebišť starověkého světa na tak malém území." },
        { nazev: "Spor mezi archeology a konzervativci", text: "V roce 2005 se v bahrajnském parlamentu střetli zastánci ochrany mohyl s náboženskými konzervativci, kteří upřednostňovali developerskou výstavbu - lokalita nakonec přesto získala status UNESCO." }
      ]
    }
  },
  {
    id: "meenakshi-temple",
    patch: {
      lead: "Chrám bohyně, které se ze tří ňader stalo dvě ve chvíli, kdy potkala svého budoucího manžela Šivu.",
      atmosfera: 4.5,
      popisy: {
        zahada: "V srdci jihoindického Madurai stojí chrámový komplex zasvěcený bohyni s třemi ňadry, jejíž setkání s bohem Šivou proměnilo nejen ji, ale i celé město postavené kolem jejího chrámu podle posvátného mandaly.",
        historie: "Tamilské texty zmiňují chrám v Madurai už v polovině 6. století n. l., město samo se objevuje v literatuře Sangam (1.-4. století n. l.) jako centrum uspořádané kolem svatyně. Nejstarší dochované zděné stavby vznikly za vlády pándijského císaře Sadajavarmana Kulasekarana I. (1190-1216). Roku 1311 chrám vyplenil Malik Kafur z Dillíckého sultanátu, roku 1378 ho dobyla zpět Vidžajanagarská říše a nechala obnovit. Dnešní podobu chrám v podstatě získal do 17. století.",
        legenda: "Podle tamilského textu Thiruvilaiyadal Puranam ze 16. století král Malajadhvadža Pándja a jeho žena vykonali obětní rituál s prosbou o syna. Z plamenů ale vzešla dcera se třemi ňadry. Když se setkala se Šivou v podobě Sundaréšvara, proměnila se v Mínákší, vtělení bohyně Párvatí, a třetí ňadro zmizelo. Jejich svatba, zvaná Meenakshi Tirukalyanam, se stala velkolepou nebeskou událostí, jíž se účastnila řada božstev.",
        paranormalni: "Každý večer chrámoví služebníci obřadně přenášejí kovové stopy představující Šivu (zvané 'Čokkar') z jeho svatyně do komnaty Mínákší, aby božský pár symbolicky strávil noc spolu - ráno se rituál obrátí zpět. Mimo tisíc-sloupovou síň stojí také 'hudební sloupy', které při úderu vydávají odlišné tóny.",
        skepticke: "Genealogie a přesné datování nejstarších fází chrámu jsou rekonstruovány z textových zmínek a stavebních fází, ne z jediného nálezu - historicky doložené jsou ale zásadní milníky: zničení Malikem Kafurem roku 1311 a obnova Vidžajanagarskou říší od roku 1378. Chrám roku 1939 zažil i společensky přelomovou událost, kdy skupina dalitů vedená A. Vaidjanathou Iyerem vstoupila dovnitř navzdory historickým zákazům - čin, který předcházel legislativě rušící diskriminaci marginalizovaných komunit."
      },
      praktickeInfo: "Areál o rozloze 5,7 hektaru má 14 zdobených bran (gopuramů), nejvyšší jižní věž měří 52 metrů; vstup je zdarma, ale fotografování a vstup do vnitřních svatyní mohou mít omezení pro nehinduisty.",
      zdroje: [
        { nazev: "Wikipedia: Meenakshi Amman Temple", url: "https://en.wikipedia.org/wiki/Meenakshi_Amman_Temple", licence: "CC BY-SA" },
        { nazev: "Wikidata: Meenakshi Amman Temple", url: "https://www.wikidata.org/wiki/Q1424358", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Meenakshi%20Amman%20Temple%20Madurai", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Bohyně se třemi ňadry", text: "Podle legendy se dcera krále narozená z obětního ohně měla tři ňadra - třetí zmizelo teprve ve chvíli, kdy potkala svého budoucího manžela Šivu." },
        { nazev: "Noční setkání božského páru", text: "Každý večer chrámoví služebníci obřadně přenášejí symbol boha Šivy do komnaty bohyně Mínákší, aby pár strávil noc spolu, a ráno rituál obrátí zpět." }
      ]
    }
  },
  {
    id: "sundarbans",
    patch: {
      lead: "Největší mangrovový les světa, kde místní uctívají lesní bohyni Bonbibi na ochranu před tygry lidojedy - a útoky tygrů na lidi tu nejsou legendou, ale realitou.",
      atmosfera: 4.0,
      popisy: {
        zahada: "Na hranici Indie a Bangladéše se rozkládá bludiště mangrovových lesů a vodních kanálů o rozloze přes 10 000 čtverečních kilometrů - největší mangrovový les na světě, domov populace tygrů, kteří si zde na rozdíl od jiných míst osvojili útoky na člověka.",
        historie: "Lidské osídlení oblasti sahá až do doby maurjovské říše (4.-2. století př. n. l.). Britská Východoindická společnost získala vlastnická práva roku 1757, první správa lesů vznikla roku 1869 a formální status chráněného lesa byl vyhlášen roku 1875.",
        legenda: "Ústřední postavou místního folklóru je lesní bohyně Bonbibi, uctívaná místními hinduisty i muslimy jako ochránkyně před tygry a nebezpečími lesa. Region se objevuje i v bengálském lidovém eposu Manasamangal, v příběhu hrdinky Behuly hledající způsob, jak vzkřísit svého manžela.",
        paranormalni: "Ekosystém hostí 453 druhů fauny včetně 290 druhů ptáků, 120 druhů ryb, 42 druhů savců, 35 druhů plazů a 8 druhů obojživelníků. Žije zde odhadem 180 bengálských tygrů - populace, jejíž útoky na lidi jsou zde neobvykle časté ve srovnání s jinými tygřími oblastmi světa.",
        skepticke: "Na rozdíl od romantizovaných představ o 'tygrech lidožroutech' jsou útoky v Sundarbans dobře zdokumentovaným jevem s konkrétními čísly - záznamy uvádějí kolem 40 usmrcených lidí v letech 2000-2010, což odráží reálný konflikt mezi rostoucí lidskou populací a tygřím teritoriem, ne pouhou legendu."
      },
      praktickeInfo: "Návštěva vyžaduje organizovaný výlet lodí s licencovaným průvodcem, samostatné pěší vstupy do rezervace nejsou z bezpečnostních důvodů možné.",
      zdroje: [
        { nazev: "Wikipedia: Sundarbans", url: "https://en.wikipedia.org/wiki/Sundarbans", licence: "CC BY-SA" },
        { nazev: "Wikidata: Sundarbans", url: "https://www.wikidata.org/wiki/Q4526", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Sundarbans", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Bonbibi, ochránkyně lesa", text: "Místní hinduisté i muslimové uctívají lesní bohyni Bonbibi, k níž se obracejí o ochranu před tygry a nebezpečími hlubokého mangrovového lesa." },
        { nazev: "Tygři, kteří loví lidi", text: "Sundarbans patří mezi několik málo míst na světě, kde si tygři osvojili opakované útoky na člověka - jen mezi lety 2000 a 2010 si vyžádaly kolem 40 obětí." }
      ]
    }
  },
  {
    id: "polonnaruwa",
    patch: {
      lead: "Druhé starověké hlavní město Srí Lanky, které dobyla čólská dynastie z jižní Indie, než ho po sedmiměsíčním obléhání znovu získal král Vidžajabáhu I.",
      atmosfera: 3.9,
      popisy: {
        zahada: "Ve vnitrozemí Srí Lanky leží rozsáhlé ruiny druhého velkého starověkého hlavního města ostrova - pečlivě naplánované město, které dnes obývají spíše makakové než lidé.",
        historie: "Polonnaruwa vznikla původně jako vojenská základna sinhálského království. Čólská dynastie z jižní Indie město po invazi v 10. století přejmenovala na Džananáthamangalam. Po konci čólské nadvlády kolem roku 1070 dobyl město po sedmiměsíčním obléhání král Vidžajabáhu I. a učinil z něj hlavní město království, které vzkvétalo téměř dvě století.",
        legenda: "Za vlády krále Parakramabáhua I., nejproslulejšího vládce království, dosáhlo město pozoruhodné prosperity díky vyspělým zavlažovacím systémům - nejvýznamnějším pozůstatkem je obří nádrž Parakrama Samudra, dodnes zásobující okolní zemědělství.",
        paranormalni: "Mezi nejpůsobivější stavby patří kruhová relikviářová svatyně Vatadage, královský palác Parakramabáhua I., skalní budhistické sochy Gal Vihara a stúpy Hatadage a Rankoth Vehera - komplex považovaný za jedno z nejlépe naplánovaných starověkých měst na Srí Lance.",
        skepticke: "Historie dobytí a znovudobytí města je dobře doložena nápisy a kronikami, ne jen legendou - UNESCO zapsalo Polonnaruwu na seznam světového dědictví v roce 1982 právě pro její archeologickou a urbanistickou hodnotu."
      },
      praktickeInfo: "Areál je rozlehlý, doporučuje se prohlídka na kole nebo s tuk-tukem, pozor na skupiny toque makaků obývající ruiny.",
      zdroje: [
        { nazev: "Wikipedia: Polonnaruwa", url: "https://en.wikipedia.org/wiki/Polonnaruwa", licence: "CC BY-SA" },
        { nazev: "Wikidata: Polonnaruwa", url: "https://www.wikidata.org/wiki/Q394443", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Polonnaruwa%20Sri%20Lanka", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Sedmiměsíční obléhání", text: "Král Vidžajabáhu I. dobyl město zpět od čólské dynastie po sedmiměsíčním obléhání a učinil z něj hlavní město království na téměř dvě staletí." },
        { nazev: "Nádrž, která zavlažuje dodnes", text: "Obří vodní nádrž Parakrama Samudra, postavená za krále Parakramabáhua I., dodnes zásobuje okolní zemědělskou půdu vodou." }
      ]
    }
  },
  {
    id: "kalash-valleys",
    patch: {
      lead: "Poslední animistický kmen Hindúkuše, o kterém koluje legenda, že pochází od vojáků Alexandra Velikého - genetické studie ji ale definitivně vyvrátily.",
      atmosfera: 4.1,
      popisy: {
        zahada: "V odlehlých údolích pákistánského Čitrálu žije poslední malá komunita, která si navzdory staletím islamizace okolí zachovala starobylé animistické náboženství s prvky připomínajícími védskou tradici.",
        historie: "Podle vlastní tradice předkové Kalašů migrovali z údolí Waigal v afghánském Núristánu, případně z jižnější oblasti zvané 'Tsiyam' poblíž Džalálábádu. Poprvé jsou písemně doloženi roku 1339 během Timúrových invazí. Většina obyvatel regionu konvertovala k islámu po nastolení muslimské vlády ve 14. století, jen malá menšina si udržela tradiční praktiky ve třech údolích.",
        legenda: "Rozšířená lidová tradice tvrdí, že Kalašové jsou potomky vojáků, které v regionu zanechal Alexandr Veliký při svém tažení - avšak 'neexistuje žádný důkaz, že by touto oblastí vůbec prošel', a genetické studie tuto legendu definitivně vyvrátily.",
        paranormalni: "Kalašské náboženství kombinuje animismus a uctívání předků se starobylými indoíránskými (védě podobnými) prvky. Mezi hlavní božstva patří stvořitel Imra/Dezau, bůh hromu Indr, bůh války a úrody Mahandeo a bohyně domácího života Jestak. Rok člení tři velké svátky: jarní Chilam Joshi, podzimní Uchau a zimní slunovrat Chawmos (7.-22. prosince).",
        skepticke: "Legenda o původu od Alexandrových vojáků je typickým příkladem lidové etymologie spojující izolovanou komunitu se slavnou historickou postavou - genetické studie ji jednoznačně vyvrátily. Podle sčítání lidu Pákistánu z roku 2023 zůstává už jen 7466 rodilých mluvčích kalašského jazyka, což řadí komunitu mezi ohrožené."
      },
      praktickeInfo: "Údolí Bumburet, Rumbur a Birir jsou přístupná z města Čitrál, doporučuje se respektovat místní zvyky včetně menstruační segregace a nefotografovat lidi bez souhlasu.",
      zdroje: [
        { nazev: "Wikipedia: Kalash people", url: "https://en.wikipedia.org/wiki/Kalash_people", licence: "CC BY-SA" },
        { nazev: "Wikidata: Kalash people", url: "https://www.wikidata.org/wiki/Q845748", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Kalash%20Valleys%20Chitral%20Pakistan", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Legenda o vojácích Alexandra Velikého", text: "Kalašové jsou podle rozšířené legendy potomky vojáků Alexandra Velikého - genetické studie ale tuto teorii definitivně vyvrátily." },
        { nazev: "Poslední animisté Hindúkuše", text: "Zatímco okolní obyvatelstvo konvertovalo k islámu už ve 14. století, malá kalašská komunita si dodnes uchovává starobylé animistické náboženství se svátky vázanými na sluneční cyklus." }
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
