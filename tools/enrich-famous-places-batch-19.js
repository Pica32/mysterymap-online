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
    id: "jeju-lava-tubes",
    patch: {
      lead: "Skoro devítikilometrová lávová jeskyně s největším známým lávovým sloupem na světě - a domovem 30 000 netopýrů, největší kolonie v celé Koreji.",
      atmosfera: 4.0,
      popisy: {
        zahada: "Na jihokorejském ostrově Čedžu se táhne téměř devítikilometrová lávová jeskyně Mandžanggul, jejíž nejvyšší lávový sloup dosahuje výšky 7,6 metru - podle dostupných záznamů největší svého druhu na světě.",
        historie: "Jeskyně dosahuje délky 8,928 kilometru a šířky až 23 metrů, výšky až 30 metrů - řadí se mezi 12. nejdelší lávové tunely na světě a druhý nejdelší na samotném ostrově Čedžu.",
        legenda: "Mandžanggul je jedinou jeskyní v systému Geomunoreum, který je popisován jako jeden z nejlepších lávových tunelových systémů na světě. Jeskyně obsahuje charakteristické lávové stalaktity, stalagmity a rekordní lávový sloup.",
        paranormalni: "Jeskyně hostí největší kolonii netopýrů v Koreji - asi 30 000 netopýrů rodu Miniopterus schreibersii - a podporuje rozmanitou jeskynní faunu včetně endemického jeskynního pavouka žijícího jen na Čedžu.",
        skepticke: "Vznik jeskyně má jasné vulkanické vysvětlení - protékající láva vytvořila tunel, jehož povrch ztuhl, zatímco vnitřek dál odtékal, ne nadpřirozený proces. Od roku 2007 je součástí lokality UNESCO 'Sopečný ostrov Čedžu a lávové tunely'."
      },
      praktickeInfo: "Podstatná část jeskyně je veřejnosti pravidelně přístupná s placeným vstupem, zbytek zůstává chráněný kvůli ochraně netopýří kolonie a jeskynní fauny.",
      zdroje: [
        { nazev: "Wikipedia: Manjanggul", url: "https://en.wikipedia.org/wiki/Manjanggul", licence: "CC BY-SA" },
        { nazev: "Wikidata: Manjanggul", url: "https://www.wikidata.org/wiki/Q6750353", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Manjanggul%20Cave%20Jeju", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Největší lávový sloup na světě", text: "Uvnitř jeskyně stojí lávový sloup vysoký 7,6 metru, který je podle dosavadních záznamů největším svého druhu na celé planetě." },
        { nazev: "30 000 netopýrů v jedné jeskyni", text: "Mandžanggul hostí největší kolonii netopýrů v celé Koreji, čítající asi 30 000 jedinců druhu netopýr dlouhokřídlý." }
      ]
    }
  },
  {
    id: "rano-kau",
    patch: {
      lead: "Sopečný kráter, jehož jméno v jazyce místních doslova znamená 'široká sopka plná vody' - a jehož poslední divoký strom toromiro padl na otop teprve v roce 1960.",
      atmosfera: 4.1,
      popisy: {
        zahada: "Na jihozápadním výběžku Velikonočního ostrova se zvedá vyhaslá sopka Rano Kau vysoká 324 metrů, jejíž kráterové jezero je jedním z pouhých tří přírodních zdrojů sladké vody na celém ostrově.",
        historie: "Sopka vznikla čedičovými lávovými proudy během pleistocénu, nejmladší horniny jsou datovány mezi 150 000 a 210 000 lety. Kráter obsahuje různé druhy vyvřelých hornin včetně čediče, obsidiánu (důležitého zdroje surovin pro starověké kameníky) a pemzy.",
        legenda: "Rapanuiský název místa výstižně popisuje jeho charakter - 'rano' označuje sopku naplněnou vodou, 'kau' vyjadřuje 'hojnost vody' a 'velikost', dohromady tedy 'širokou sopku plnou vody'. Kráter, široký téměř míli, vytváří vlastní mikroklima, které chrání fíkovníky a liány před ostrovními větry.",
        paranormalni: "Na vnitřním svahu kráteru rostl až do roku 1960 poslední divoký exemplář stromu toromiro na světě, než byl pokácen na otop. Na místě, kde se sopečná stěna a mořské útesy setkávají, leží obřadní vesnice Orongo - na útesech ještě v 80. letech 19. století stála kamenná plošina ahu se sochou moai, do roku 1914 ale spadla na pláž.",
        skepticke: "Vznik kráteru je čistě geologický proces vulkanické činnosti, ne mystický - stejně jako u zbytku ostrova je i zde třeba oddělovat skutečnou geologii od kulturního a duchovního významu, který místu dodala rapanuiská tradice a obřadní vesnice Orongo."
      },
      praktickeInfo: "Kráter je součástí národního parku Rapa Nui s placeným vstupem, přístupný pěší stezkou vedoucí i k vesnici Orongo na jeho okraji.",
      zdroje: [
        { nazev: "Wikipedia: Rano Kau", url: "https://en.wikipedia.org/wiki/Rano_Kau", licence: "CC BY-SA" },
        { nazev: "Wikidata: Rano Kau", url: "https://www.wikidata.org/wiki/Q1340624", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Rano%20Kau%20Easter%20Island", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Poslední strom svého druhu na světě", text: "Na svahu kráteru rostl až do roku 1960 poslední divoký exemplář stromu toromiro na celém světě, než ho místní pokáceli na otop." },
        { nazev: "Socha, která spadla na pláž", text: "Kamenná plošina se sochou moai stála na útesech kráteru ještě v 80. letech 19. století, do roku 1914 ale spadla dolů na pláž." }
      ]
    }
  },
  {
    id: "cyrene-ruins",
    patch: {
      lead: "Řecká kolonie založená uprchlíky ze Sparty, která zbohatla na léčivé rostlině dnes už vyhynulé - a stala se druhým domovem filozofické školy kyrénaiků.",
      atmosfera: 3.9,
      popisy: {
        zahada: "V libyjském vnitrozemí leží ruiny starověkého města, které založili řečtí osadníci z ostrova Théra kolem roku 631 př. n. l. - a které vyrostlo v nejmocnější sídlo celé Kyrenaiky díky obchodu s dnes vyhynulou léčivou rostlinou silfium.",
        historie: "Podle tradice založila Kyrénu skupina krétských Řeků, kteří byli vyhnáni ze Sparty a usadili se na ostrově Théra, pod vedením Batta I. Archeologické doklady potvrzují řecké osídlení už v polovině 7. století př. n. l. - na místě se našla keramika z Théry, Sparty, Samu i Rhodu.",
        legenda: "Do 6. století př. n. l. se město stalo nejmocnějším sídlem celé Kyrenaiky, bohatnoucím díky exportu léčivé rostliny silfium a chovu koní. Ve městě vznikla i proslulá filozofická kyrénská škola založená Aristippem, žákem Sokrata.",
        paranormalni: "Město prosperovalo přes helénistické období, kdy střídalo nezávislost a ptolemaiovskou egyptskou nadvládu, než roku 96 př. n. l. připadlo Římu po smrti bezdětného Ptolemaia Apiona. Roku 115 n. l. téměř zaniklo během ničivého Diasporského povstání.",
        skepticke: "Historie Kyrény je podrobně zdokumentovaná archeologickými nálezy i písemnými prameny - město se po povstání znovu obnovilo a přežilo až do byzantské éry, než ho kolem roku 643 n. l. dobyli Arabové. Stalo se také důležitým židovským a raně křesťanským centrem."
      },
      praktickeInfo: "Naleziště je přístupné veřejnosti, doporučuje se ověřit aktuální bezpečnostní situaci v Libyi před cestou a najmout místního průvodce.",
      zdroje: [
        { nazev: "Wikipedia: Cyrene, Libya", url: "https://en.wikipedia.org/wiki/Cyrene,_Libya", licence: "CC BY-SA" },
        { nazev: "Wikidata: Cyrene", url: "https://www.wikidata.org/wiki/Q44112", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Cyrene%20Libya", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Bohatství z vyhynulé rostliny", text: "Město zbohatlo na exportu léčivé rostliny silfium, která byla ve starověku natolik ceněná, že ji lidé přesbytečně sklidili k vyhynutí - dnes už neexistuje." },
        { nazev: "Filozofická škola vedle obchodní velmoci", text: "Kromě obchodního významu se Kyréna stala domovem vlastní filozofické školy, kterou založil Aristippos, žák samotného Sokrata." }
      ]
    }
  },
  {
    id: "al-naslaa-rock",
    patch: {
      lead: "Skála rozpůlená tak dokonale rovnou čarou, že internet dodnes debatuje, jestli za tím nestojí laser - geologové ale mají mnohem prozaičtější vysvětlení.",
      gps: { lat: 27.22945, lon: 38.57158 },
      atmosfera: 4.0,
      popisy: {
        zahada: "V saúdskoarabské poušti stojí pískovcová skála rozdělená přesně uprostřed na dvě části, obě balancující na drobných podstavcích - a přesnost řezu je natolik dokonalá, že vyvolává spekulace o laseru nebo starověké technologii.",
        historie: "Skála se nachází asi 50 kilometrů jižně od oázy Tajmá a měří přibližně 6 metrů na výšku a 9 metrů na šířku.",
        legenda: "Skalní stěna na jihovýchodní straně je pokrytá četnými petroglyfy včetně zobrazení koní a kozorožců - dokládá to, že místo mělo pro starověké obyvatele regionu význam dávno předtím, než se stalo internetovou senzací.",
        paranormalni: "Popularita skály v posledních letech explodovala díky sociálním sítím, kde se šíří spekulace o tom, zda dokonalý řez mohl vzniknout laserem nebo vyspělou starověkou technologií, ne přirozenou erozí.",
        skepticke: "Odborné geologické vysvětlení připisuje rozštěpení skály přirozenému geologickému spoji kombinovanému s větrnou erozí a chemickým zvětráváním umožněným vlhkými podmínkami na chráněné spodní straně skály - přirozený proces, ne technologický zásah, přestože přesnost výsledku skutečně působí nápadně pravidelně."
      },
      praktickeInfo: "Skála je volně přístupná v odlehlé pouštní oblasti, doporučuje se místní průvodce a vlastní vozidlo kvůli vzdálenosti od civilizace.",
      zdroje: [
        { nazev: "Wikipedia: Al Naslaa", url: "https://en.wikipedia.org/wiki/Al_Naslaa", licence: "CC BY-SA" },
        { nazev: "Wikidata: Al Naslaa", url: "https://www.wikidata.org/wiki/Q108586048", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Al%20Naslaa%20Saudi%20Arabia", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Petroglyfy starší než internetová sláva", text: "Skalní stěna nese petroglyfy koní a kozorožců dokládající, že místo mělo pro starověké obyvatele význam dávno předtím, než se stalo populárním internetovým fenoménem." },
        { nazev: "Laser, nebo eroze?", text: "Dokonalá přesnost řezu vedla k rozšířeným spekulacím o laserové nebo vyspělé starověké technologii - geologové ale přesvědčivě vysvětlují jev přirozenou erozí podél geologického spoje." }
      ]
    }
  },
  {
    id: "marib-dam-ruins",
    patch: {
      lead: "Přehrada stará 2800 let, jejíž definitivní protržení kolem roku 570 n. l. vyhnalo z Jemenu na 50 000 lidí - a Korán to připisuje trestající potopě.",
      gps: { lat: 15.39639, lon: 45.24361 },
      atmosfera: 4.0,
      popisy: {
        zahada: "V jemenské provincii Ma'rib stojí ruiny starověké přehrady, kterou budovalo sabejské království od 8. století př. n. l. - a jejíž definitivní protržení kolem roku 570 n. l. vyhnalo z regionu podle odhadů až 50 000 lidí.",
        historie: "Jednoduché zemní hráze a zavlažovací kanály existovaly už kolem roku 1750 př. n. l., samotnou přehradu ale vybudovalo bohaté obchodní království ovládající kadidlové a kořeněné stezky. Původní konstrukce měřila 580 metrů na délku a 4 metry na výšku, kolem roku 500 př. n. l. Sabejci zvýšili hráz na 7 metrů se zpevněnou kamennou stěnou.",
        legenda: "Pod himjaritskou nadvládou (kolem roku 115 př. n. l.) dosáhla přehrada výšky 14 metrů s rozsáhlými vodními díly na obou koncích, pěti přepadovými kanály a dvěma kamennými stavidly - systém dokázal zavlažovat plochu 100 čtverečních kilometrů.",
        paranormalni: "Přehrada zažila první velké protržení kolem roku 145 př. n. l. a opakovaně selhávala v letech 449, 450, 542 a 548 n. l. Definitivní kolaps přišel kolem let 570-575 n. l. a už nebyl nikdy opraven. Podle lidové tradice za tím stály obří krysy, islámská tradice ale spojuje událost se 'Sajl al-Arim' (potopou Arimu) zmíněnou v Koránu (34:15-17), popisující, jak povodňové vody 'nahradily jejich dvě zahrady zahradami hořkého ovoce'.",
        skepticke: "Kolaps má reálné inženýrské příčiny - opakované selhávání konstrukce po staletí eroze a nedostatečné údržby, ne trest obřích krys nebo výhradně náboženský zázrak, přestože náboženská interpretace v Koránu odráží skutečnou historickou katastrofu s obrovskými sociálními dopady. Moderní přehradu na místě postavila roku 1986 firma Doğuş Group financovaná šejkem Zajídem bin Sultánem Al Nahjánem."
      },
      praktickeInfo: "Ruiny starověké přehrady i moderní náhrada jsou přístupné veřejnosti, doporučuje se ověřit aktuální bezpečnostní situaci v Jemenu před cestou.",
      zdroje: [
        { nazev: "Wikipedia: Marib Dam", url: "https://en.wikipedia.org/wiki/Marib_Dam", licence: "CC BY-SA" },
        { nazev: "Wikidata: Marib Dam", url: "https://www.wikidata.org/wiki/Q2303666", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Marib%20Dam%20Yemen", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Potopa zmíněná v Koránu", text: "Islámská tradice spojuje definitivní protržení přehrady s koránskou 'potopou Arimu', trestající povodní, která proměnila úrodné zahrady v hořkou pustinu." },
        { nazev: "50 000 lidí na útěku", text: "Konečný kolaps přehrady kolem roku 570 n. l. vyvolal masovou migraci až 50 000 lidí z Jemenu do dalších částí Arabského poloostrova." }
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
