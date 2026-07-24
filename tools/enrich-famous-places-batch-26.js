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
    id: "mehrangarh-fort",
    patch: {
      lead: "Pevnost postavená na kopci prokletém poustevníkem, který vládci předpověděl věčný nedostatek vody - kletbu, kterou král zmírnil jen vystavěním chrámu na jeho počest.",
      atmosfera: 4.1,
      popisy: {
        zahada: "Nad rádžputským Džódhpurem se tyčí jedna z nejmohutnějších pevností Indie, jejíž založení je spjato s legendou o vyhnaném poustevníkovi a jeho kletbě, kterou vládce dodnes připomíná chrám uvnitř hradeb.",
        historie: "Rádžputský vládce z rodu Ráthaurů Rao Jodha založil Mehrangarh roku 1459 jako nové hlavní město Marváru poté, co přesídlil z tisíc let staré pevnosti Mandaur. Základní kámen byl položen 12. května 1459, přestože většina dnešní podoby pevnosti pochází z období vlády mahárádži Jasvanta Singha (1638-1678).",
        legenda: "Vrchol kopce před stavbou obýval poustevník jménem Čhírija Náthdží, považovaný za duchovního strážce hory a vlivnou osobu s vlastními stoupenci mezi místním obyvatelstvem. Když Rao Jodha žádal, aby místo uvolnil, poustevník opakovaně odmítal. Král se nakonec obrátil o pomoc na mocnější světici Karni Mátu - po jejím zásahu poustevník odešel, ale vyslovil kletbu: 'Jodho! Kéž tvá pevnost navždy trpí nedostatkem vody!' Rao Jodha ho usmířil postavením domu a chrámu přímo uvnitř pevnosti.",
        paranormalni: "Navzdory kletbě se pevnost stala jedním z nejvýznamnějších symbolů rádžputské architektury a moci v celé Indii - vodní nedostatek v suché oblasti Marváru je ale i dnes reálným problémem regionu, ať kletbu vezmeme jako historku, nebo jako výstižný popis místního klimatu.",
        skepticke: "Legenda o poustevníkově kletbě je tradiční zakladatelský příběh typický pro rádžputská města, ne historicky doložená událost - nedostatek vody v suchém regionu Marváru má ale zcela přirozené klimatické vysvětlení nezávislé na jakékoli kletbě."
      },
      praktickeInfo: "Pevnost je veřejně přístupná s placeným vstupem a rozsáhlým muzeem, výtahy usnadňují výstup na vrchol kopce.",
      zdroje: [
        { nazev: "Wikipedia: Mehrangarh Fort", url: "https://en.wikipedia.org/wiki/Mehrangarh_Fort", licence: "CC BY-SA" },
        { nazev: "Wikidata: Mehrangarh Fort", url: "https://www.wikidata.org/wiki/Q1483099", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Mehrangarh%20Fort%20Jodhpur", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Kletba za vyhnaného poustevníka", text: "Poustevník vyhnaný ze svého kopce před stavbou pevnosti proklel zakladatele věčným nedostatkem vody - kletbu král zmírnil postavením chrámu na jeho počest přímo uvnitř hradeb." },
        { nazev: "Pomoc mocnější světice", text: "Teprve zásah světice Karni Máty, mocnější než vzdorující poustevník, umožnil Rao Jodhovi získat kopec pro stavbu pevnosti." }
      ]
    }
  },
  {
    id: "otrar",
    patch: {
      lead: "Město, jehož guvernér popravil mongolskou obchodní karavanu - a rozpoutal tím invazi Čingischána, která změnila dějiny Asie.",
      atmosfera: 3.8,
      popisy: {
        zahada: "V jižním Kazachstánu leží ruiny starobylého města na Hedvábné stezce, kde jediné rozhodnutí jednoho guvernéra spustilo jednu z nejničivějších vojenských odvet v dějinách.",
        historie: "Otrar bylo založeno před 8. stoletím a sloužilo jako klíčový uzel spojující Kazachstán s Čínou, Evropou, Blízkým východem, Sibiří a Uralem. Roku 1218 dorazila do města mongolská obchodní karavana čítající kolem 450 mužů. Guvernér Inalčuk je obvinil ze špionáže a se souhlasem sultána Muhammada II. je nechal popravit.",
        legenda: "Když diplomatické úsilí selhalo - sultán Muhammad nechal setnout mongolského vyslance a ponížil dva další diplomaty - zahájil Čingischán odvetnou invazi. Město obléhal pět měsíců roku 1219, nakonec prolomil hradby, popravil Inalčuka a nechal vyvraždit obyvatelstvo.",
        paranormalni: "Historické prameny zmiňují zvěsti o pokladech starověkých vládců a o zakopaných hromadách zlatých mincí a šperků, přestože jejich pravdivost zůstává neověřená.",
        skepticke: "Přestože bylo město roku 1219 téměř zničeno, ve 13. století se vzpamatovalo - hospodářský úpadek přišel až s postupným zánikem významu Hedvábné stezky v 17.-18. století, kdy do roku 1800 zůstalo jen 40 rodin. Zkáza a znovuzrození Otraru jsou tedy historicky dobře doloženy, na rozdíl od nepotvrzených legend o zakopaných pokladech."
      },
      praktickeInfo: "Naleziště Otrar tobe leží asi 120 km severozápadně od Šymkentu a je veřejně přístupné.",
      zdroje: [
        { nazev: "Wikipedia: Otrar", url: "https://en.wikipedia.org/wiki/Otrar", licence: "CC BY-SA" },
        { nazev: "Wikidata: Otrar", url: "https://www.wikidata.org/wiki/Q956911", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Otrar%20Kazakhstan", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Karavana, která spustila invazi", text: "Poprava mongolské obchodní karavany guvernérem Inalčukem roku 1218 se stala záminkou pro pětiměsíční obléhání a zkázu města Čingischánem." },
        { nazev: "Pověsti o zakopaném zlatě", text: "Historické prameny dodnes zmiňují neověřené zvěsti o pokladech starověkých vládců, ukrytých kdesi pod ruinami zničeného města." }
      ]
    }
  },
  {
    id: "erbil-citadel",
    patch: {
      lead: "Podle NASA možná nejdéle nepřetržitě obývané lidské sídlo na Zemi - obývané už od 5. tisíciletí před naším letopočtem.",
      atmosfera: 3.9,
      popisy: {
        zahada: "Nad iráckým Kurdistánem se zvedá umělý pahorek, který podle hodnocení NASA z roku 2019 může být nejdéle nepřetržitě obývaným lidským sídlem na Zemi - archeologické důkazy naznačují osídlení sahající až do 5. tisíciletí před naším letopočtem.",
        historie: "Poprvé je citadela zdokumentována v eblaitských tabulkách kolem roku 2000 př. n. l. pod jménem 'Irbilum'. Za novoasyrské éry byla známá jako 'Arbi-Ilu' (Čtyři bohové) a sloužila jako významné náboženské centrum. Po muslimském dobytí v 7. století zůstala křesťanským centrem až do 9. století. Za sultána Gökböriho (1190-1233) citadela vzkvétala jako nezávislý městský stát s trhy, nemocnicemi a školami.",
        legenda: "Citadela přežila brutální šestiměsíční obléhání roku 1258 po pádu Bagdádu Mongolům. Následný masakr roku 1310 zdecimoval křesťanskou populaci, která zde hledala útočiště.",
        paranormalni: "Roku 2008 byla u paty pahorku objevena novoasyrská komorová hrobka s keramikou z 8.-7. století př. n. l. Vykopávky z let 2013-2015 odhalily dosud neznámé pozůstatky hradebních zdí citadely, potvrzující historické zmínky o obranných opevněních.",
        skepticke: "Tvrzení o nepřetržitém osídlení po tisíce let je založeno na archeologických vrstvách a historických záznamech, ne na jediném nesporném důkazu - i tak zůstává citadela jedním z nejsilnějších kandidátů na titul nejdéle obývaného města světa, podepřeným rozsáhlým výzkumem vrstvy po vrstvě."
      },
      praktickeInfo: "Citadela v Erbílu je veřejně přístupná, součástí komplexu je i textilní muzeum a rekonstruované historické domy.",
      zdroje: [
        { nazev: "Wikipedia: Erbil Citadel", url: "https://en.wikipedia.org/wiki/Erbil_Citadel", licence: "CC BY-SA" },
        { nazev: "Wikidata: Erbil Citadel", url: "https://www.wikidata.org/wiki/Q206236", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Erbil%20Citadel%20Iraq", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Nejstarší nepřetržitě obývané město", text: "Podle hodnocení NASA z roku 2019 může jít o nejdéle nepřetržitě obývané lidské sídlo na světě, osídlené už od 5. tisíciletí před naším letopočtem." },
        { nazev: "Útočiště, které se stalo hrobem", text: "Masakr roku 1310 zdecimoval křesťanskou populaci, jež v citadele hledala útočiště - tragická připomínka toho, že ani nejstarší pevnosti nenabízely vždy bezpečí." }
      ]
    }
  },
  {
    id: "moray",
    patch: {
      lead: "Kruhové terasy s teplotním rozdílem 15 stupňů mezi vrchem a dnem - incká zemědělská laboratoř, kam se dovážela půda z odlišných regionů říše.",
      atmosfera: 4.0,
      popisy: {
        zahada: "Nedaleko vesnice Maras, asi 50 kilometrů severozápadně od Cusca, leží terasovité kruhové prohlubně, jejichž skutečný účel zůstává předmětem badatelské diskuse - většina vědců se ale shoduje, že šlo o zemědělské výzkumné centrum bez obdoby ve starověkém světě.",
        historie: "Inkové vybudovali terasovité kruhové prohlubně, z nichž největší dosahuje hloubky až 30 metrů. Analýzy půdy odhalily, že do jednotlivých teras byla dovážena zemina z odlišných regionů říše, aby bylo možné testovat pěstování plodin v různých podmínkách na jednom místě.",
        legenda: "Hloubka a orientace teras vytváří výrazné mikroklima simulující vyšší nadmořské výšky - rozdíl teploty mezi vrcholem a dnem prohlubně dosahuje až 15 °C. To umožňovalo inckým agronomům testovat plodiny při různých simulovaných výškách na jediném místě s konzistentní experimentální kontrolou.",
        paranormalni: "Přestože teorie o zemědělské experimentální stanici v odborné obci převažuje, přesná stavební historie a možný těžební původ prohlubní zůstávají předmětem debaty - ne každý detail účelu stavby je dodnes jistý.",
        skepticke: "Dešťová sezóna 2009-2010 způsobila vážné poškození naleziště, když se v únoru 2010 zřítila východní strana hlavního kruhu - reálná, dobře zdokumentovaná hrozba pro tento významný kulturní památník, ne přehnaná obava."
      },
      praktickeInfo: "Naleziště leží ve výšce 3385 metrů poblíž vesnice Maras a je snadno přístupné ze Svatého údolí Inků.",
      zdroje: [
        { nazev: "Wikipedia: Moray (Inca ruin)", url: "https://en.wikipedia.org/wiki/Moray_(Inca_ruin)", licence: "CC BY-SA" },
        { nazev: "Wikidata: Moray", url: "https://www.wikidata.org/wiki/Q1814201", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Moray%20Peru", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Laboratoř s dovezenou půdou", text: "Inčtí agronomové dováželi do jednotlivých teras zeminu z odlišných regionů říše, aby otestovali pěstování plodin v podmínkách vzdálených krajů na jediném místě." },
        { nazev: "Patnáct stupňů rozdílu v jedné prohlubni", text: "Hloubka a tvar kruhových teras vytváří teplotní rozdíl až 15 °C mezi vrcholem a dnem - umožňující simulovat různé nadmořské výšky bez nutnosti cestovat." }
      ]
    }
  },
  {
    id: "ciudad-sagrada-de-quilmes",
    patch: {
      lead: "Sto třicet let odporu proti Inkům i Španělům, ukončených smrtícím pochodem, který přežila jen šestina deportovaných obyvatel.",
      atmosfera: 4.1,
      popisy: {
        zahada: "V argentinské provincii Tucumán leží ruiny opevněného města lidu Quilmes, kmene Diaguitů, který vzdoroval dobyvatelům déle než téměř kterýkoli jiný domorodý národ jižní Ameriky.",
        historie: "Kmen Quilmes obýval podhorská údolí dnešní provincie Tucumán a urputně vzdoroval inckým invazím v 15. století, poté pokračoval v odporu proti Španělům dalších 130 let, než byl roku 1667 poražen. Roku 1667 obléhalo pevnost asi 400 španělských vojáků pod velením Alonsa Mercada y Villacorty proti více než 6000 domorodým obyvatelům.",
        legenda: "Španělé zvolili strategii obléhání - nejprve odřízli obyvatele od úrodné planiny řeky Santa María a poté otrávili vodní zdroj přitékající z hor. Quilmesové bojovali tradičními zbraněmi - luky, praky, oštěpy a sekerami s kamennými hlavicemi - proti španělským střelným zbraním a brnění. Po zhruba měsíčním obléhání vyjednal domorodý vůdce Martín Iquín kapitulaci.",
        paranormalni: "Po kapitulaci donutili Španělé přeživší Quilmesy na brutální pochod dlouhý přes 1000 kilometrů do bažinaté oblasti poblíž dnešního Buenos Aires. Z přibližně 2600 lidí, kteří vyrazili, dorazilo jen něco přes 400 - většina zemřela na respirační nemoci kvůli neznalosti místních léčivých rostlin a nedostupnosti posvátných stromů algarrobo.",
        skepticke: "Vyhlášení vyhynutí lidu Quilmes vládou 12. února 1812 bylo administrativním aktem uznávajícím drastický populační úbytek, ne důkazem úplného zániku - úřady samy tehdy potvrdily existenci potomků smíšeného původu. Archeologické naleziště objevil etnograf a historik Samuel Alejandro Lafone Quevedo roku 1888 a bylo restaurováno roku 1978."
      },
      praktickeInfo: "Ruiny leží 182 kilometrů od San Miguel de Tucumán na cestě do Cafayate, naleziště je v soukromém vlastnictví s hotelem v areálu.",
      zdroje: [
        { nazev: "Wikipedia: Quilmes people", url: "https://en.wikipedia.org/wiki/Quilmes_people", licence: "CC BY-SA" },
        { nazev: "Wikipedia (es): Ruinas de Quilmes", url: "https://es.wikipedia.org/wiki/Ruinas_de_Quilmes", licence: "CC BY-SA" },
        { nazev: "Wikidata: Ruinas de Quilmes", url: "https://www.wikidata.org/wiki/Q735774", licence: "CC0" }
      ],
      pribehy: [
        { nazev: "Sto třicet let odporu", text: "Lid Quilmes vzdoroval nejprve inckým invazím a poté 130 let i španělským dobyvatelům, než byl roku 1667 konečně poražen po měsíčním obléhání." },
        { nazev: "Pochod, který přežila jen šestina", text: "Z přibližně 2600 deportovaných Quilmesů dorazilo na místo nuceného přesídlení u Buenos Aires jen něco přes 400 lidí - většina zemřela cestou na respirační nemoci." }
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
