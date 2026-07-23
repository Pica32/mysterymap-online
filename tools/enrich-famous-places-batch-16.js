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
    id: "stone-circles-of-senegambia",
    patch: {
      lead: "Přes tisíc kamenných kruhů rozesetých po západní Africe - a žádný dnešní národ si k nim netroufá přiznat, že by je stavěli jejich předkové.",
      atmosfera: 3.9,
      popisy: {
        zahada: "Napříč pásem Senegalu a Gambie o rozloze 350 na 100 kilometrů se nachází přes tisíc kamenných kruhů - největší koncentrace tohoto typu monumentů na světě - a žádná dnešní etnická skupina ve svých ústních tradicích netvrdí, že by je stavěli právě její předkové.",
        historie: "Kruhy vznikaly postupně od zhruba 3. století př. n. l. do 16. století n. l., pohřební mohyly u Wassu jsou datovány mezi lety 927 a 1305 n. l. Rozsah práce potřebné k jejich vybudování naznačuje prosperující a dobře organizovanou společnost.",
        legenda: "U lokality Sine Ngayène archeologové zjistili posun od pohřebních míst k širším rituálním prostorům, kde od zhruba roku 900-1000 n. l. začaly pohřby nahrazovat obětiny. O skutečných stavitelích panuje mezi badateli neshoda - teorie zahrnují lid Serer, mandsky mluvící lid Soos prchající před suchem kolem roku 1000 n. l., nebo lid Bassari a Konyagui na základě podobných pohřebních zvyklostí.",
        paranormalni: "Nejpozoruhodnějším faktem zůstává, že žádná dnešní skupina si ve svých dochovaných ústních dějinách nenárokuje, že by kruhy postavili jejich předkové - záhada autorství přetrvává i po rozsáhlém archeologickém výzkumu.",
        skepticke: "Absence ústní tradice o stavitelích neznamená nadpřirozený původ, jen ztrátu historické paměti během staletí migrací a společenských proměn regionu - od roku 2006 jsou kruhy na seznamu UNESCO jako rozsáhlá posvátná krajina využívaná déle než 1500 let."
      },
      praktickeInfo: "Nejznámější a nejpřístupnější skupina kruhů leží u Wassu v Gambii, přístupná s placeným vstupem a malým místním muzeem.",
      zdroje: [
        { nazev: "Wikipedia: Stone Circles of Senegambia", url: "https://en.wikipedia.org/wiki/Stone_Circles_of_Senegambia", licence: "CC BY-SA" },
        { nazev: "Wikidata: Stone Circles of Senegambia", url: "https://www.wikidata.org/wiki/Q846901", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Wassu%20Stone%20Circles%20Gambia", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Stavitelé bez jména", text: "Žádná dnešní etnická skupina regionu si ve svých ústních dějinách nenárokuje stavbu kruhů - autorství zůstává otevřenou otázkou i po staletích archeologického bádání." },
        { nazev: "Od pohřbů k obětinám", text: "Archeologové zaznamenali postupný posun v účelu míst - starší kruhy sloužily jako pohřebiště, mladší kolem roku 900-1000 n. l. přešly na obětní rituály bez skutečných pohřbů." }
      ]
    }
  },
  {
    id: "wadi-al-hitan",
    patch: {
      lead: "Poušť s 1500 kosterami velryb, které měly ještě zadní nohy a chodidla - živý (byť zkamenělý) důkaz, jak se savci vrátili zpátky do moře.",
      atmosfera: 3.8,
      popisy: {
        zahada: "V egyptské poušti asi 150 kilometrů jihozápadně od Káhiry leží údolí posázené kosterami dávných velryb - a některé z nich mají malé zadní nohy, chodidla a prsty, rys, o kterém se dřív u velryb vůbec nevědělo.",
        historie: "První fosilní kostry zde objevili v zimě 1902-1903, ale kvůli obtížné dostupnosti terénu jim badatelé osmdesát let nevěnovali velkou pozornost. Zájem se obnovil až v 80. letech s rozšířením terénních vozidel s pohonem všech kol.",
        legenda: "Lokalita obsahuje asi 1500 fosilních koster mořských obratlovců na ploše 200 čtverečních kilometrů - podle UNESCO jde o nejvýznamnější místo na světě dokládající jednu z klíčových proměn v historii života na Zemi: evoluci velryb ze suchozemských savců.",
        paranormalni: "Dávné druhy archeocetů (prvotních velryb) měly už zjednodušené, hydrodynamické tělo moderních velryb, přesto si podržely primitivní stavbu lebky a zubů - a co je nejpřekvapivější, i drobné zadní nohy, chodidla a prsty, rysy dosud u zkamenělin velryb neznámé.",
        skepticke: "Nálezy druhů jako Basilosaurus (dlouhý až 21 metrů) a Dorudon (3-5 metrů) poskytují nezpochybnitelný fosilní důkaz evoluce, ne spekulaci - odstraňování kostí sběrateli vedlo k ochranným opatřením a v roce 2005 k zápisu na seznam UNESCO."
      },
      praktickeInfo: "Návštěva vyžaduje terénní vozidlo a obvykle organizovaný výlet z Káhiry nebo oázy Fajjúm, doporučuje se ochrana proti slunci kvůli odkryté poušti bez stínu.",
      zdroje: [
        { nazev: "Wikipedia: Wadi Al-Hitan", url: "https://en.wikipedia.org/wiki/Wadi_Al-Hitan", licence: "CC BY-SA" },
        { nazev: "Wikidata: Wadi Al-Hitan", url: "https://www.wikidata.org/wiki/Q501833", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Wadi%20Al-Hitan%20Egypt", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Velryba s nohama", text: "Některé zkamenělé velryby z údolí měly zachované malé zadní nohy, chodidla i prsty - rysy dosud u velrybích fosilií neznámé, dokládající jejich suchozemský původ." },
        { nazev: "80 let přehlížený objev", text: "První kostry objevili už na počátku 20. století, ale kvůli obtížné dostupnosti terénu se skutečný vědecký zájem probudil až s příchodem terénních vozidel v 80. letech." }
      ]
    }
  },
  {
    id: "ubar-shisr-ruins",
    patch: {
      lead: "'Atlantida písků' zmíněná v Koránu - a nález, který jeden amatérský archeolog prohlásil za její objev, než ho sám později odvolal.",
      atmosfera: 4.0,
      popisy: {
        zahada: "V ománské poušti leží archeologické naleziště Šisr, které bylo koncem 90. let prohlášeno za ztracenou koránskou metropoli Iram sloupů, přezdívanou 'Atlantida písků' - identifikace, kterou vědecká obec nikdy plně nepřijala a kterou nakonec zpochybnil i sám autor teorie.",
        historie: "Iram sloupů se zmiňuje v súře al-Fadžr (89:6-14) jako ztracené město spojené se starověkým lidem Ád, popsané jako místo 'velké postavy, nemající obdoby v žádné jiné zemi', zničené jako trest za jeho provinění.",
        legenda: "Roku 1998 navrhl amatérský archeolog Nicholas Clapp, že Iram odpovídá bájnému městu Ubar, a ztotožnil ho s archeologickým nalezištěm Šisr v Ománu. Tato hypotéza ale mezi odborníky nezískala všeobecné přijetí.",
        paranormalni: "Identifikace Ubaru se Šisrem zůstává problematická natolik, že ji později zpochybnil dokonce sám Clapp. Středověké prameny navíc popisují Ubar spíš jako region než jako jedno konkrétní město, a jako alternativní lokality byly navrženy třeba Wadi Rum v Jordánsku.",
        skepticke: "Legenda zůstává živá v populární kultuře (objevuje se například ve hrách Uncharted 3 nebo Sunless Sea), vědecký konsenzus se ale nikdy nesjednotil kolem jediné konkrétní identifikace - Šisr samotný je reálné a zajímavé archeologické naleziště, i bez ohledu na to, zda skutečně jde o bájný Ubar."
      },
      praktickeInfo: "Naleziště je přístupné veřejnosti v ománském vnitrozemí, doporučuje se místní průvodce kvůli odlehlosti pouštního terénu.",
      zdroje: [
        { nazev: "Wikipedia: Iram of the Pillars", url: "https://en.wikipedia.org/wiki/Iram_of_the_Pillars", licence: "CC BY-SA" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Shisr%20Oman", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Objevitel, který svůj objev zpochybnil", text: "Amatérský archeolog Nicholas Clapp roku 1998 prohlásil, že objevil ztracené město Ubar - o řadu let později ale svou vlastní identifikaci sám zpochybnil." },
        { nazev: "Trest zmíněný v Koránu", text: "Iram sloupů je v Koránu popsán jako mimořádně velkolepé město zničené jako boží trest za provinění jeho obyvatel z lidu Ád." }
      ]
    }
  },
  {
    id: "shibam-wadi-hadhramaut",
    patch: {
      lead: "'Manhattan pouště' s bahenními mrakodrapy vysokými přes 30 metrů, postavenými 500 let před newyorskými.",
      atmosfera: 4.1,
      popisy: {
        zahada: "V jemenském údolí Hadramaut stojí město, jehož asi 500 hliněných věží dosahujících výšky 5 až 11 pater, některé přes 30 metrů, mu vyneslo přezdívku 'nejstarší mrakodrapové město na světě'.",
        historie: "Šibám vznikl jako významné sídlo kolem 3. století n. l. a stal se hlavním městem Hadramautského království roku 300 n. l. po zničení Šabwy. Dnešní podoba města pochází z roku 1533, samotné osídlení je ale nepřetržité už asi 1700 let.",
        legenda: "Strategická poloha na starověkých obchodních trasách přinesla městu prosperitu. Ve 20. století patřil mezi tři hlavní města sultanátu Qu'ajtí spolu s Mukallou a Aš-Šihrem.",
        paranormalni: "Vertikální stavební styl měl jasně praktický, obranný účel - koncentrace obyvatel do vysokých věží chránila obyvatele před nájezdy beduínů, aniž by bylo nutné budovat rozlehlé městské opevnění.",
        skepticke: "Město čelí reálným moderním hrozbám: cyklon roku 2008 způsobil vážné škody, útok Al-Káidy roku 2009 si vyžádal pět obětí, a probíhající jemenská občanská válka od roku 2015 vedla UNESCO k zařazení Šibámu mezi ohrožené kulturní dědictví - žádná z těchto hrozeb ale nesouvisí s architekturou samotnou, jen s bezpečnostní situací regionu. Od roku 1982 je na seznamu UNESCO."
      },
      praktickeInfo: "Bezpečnostní situace v Jemenu vyžaduje důkladné ověření aktuálního stavu před jakoukoli cestou, město zůstává obydlené a funkční navzdory konfliktu.",
      zdroje: [
        { nazev: "Wikipedia: Shibam", url: "https://en.wikipedia.org/wiki/Shibam", licence: "CC BY-SA" },
        { nazev: "Wikidata: Shibam", url: "https://www.wikidata.org/wiki/Q192518", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Shibam%20Yemen", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Věže místo hradeb", text: "Namísto rozsáhlého městského opevnění zvolili obyvatelé Šibámu vertikální stavbu - koncentrace do vysokých věží je ochránila před nájezdy beduínů efektivněji než klasické hradby." },
        { nazev: "1700 let nepřetržitého osídlení", text: "Přestože dnešní podoba města pochází z roku 1533, samotné osídlení lokality je nepřetržité už asi 1700 let, což ho řadí mezi nejdéle obydlená místa Arabského poloostrova." }
      ]
    }
  },
  {
    id: "kowloon-walled-city-park",
    patch: {
      lead: "Na ploše menší než dva fotbalové stadiony žilo 33 000 lidí bez policejní kontroly - nejhustěji obydlené místo na Zemi, dnes proměněné v klidný park.",
      atmosfera: 4.3,
      popisy: {
        zahada: "V Hong Kongu stávala čtvrť, kterou díky mezeře v koloniálních smlouvách neovládala ani britská, ani čínská správa - výsledkem bylo nejhustěji obydlené místo na světě, kam se policie odvažovala jen ve velkých skupinách.",
        historie: "Místo začínalo jako vojenská základna dynastie Song pro správu solného obchodu, roku 1847 se stalo pobřežní pevností posilující čínskou autoritu po odstoupení Hongkongského ostrova Británii. Úmluva z roku 1898 čtvrť vyjmula z britsky pronajatého území, čímž vznikla unikátní exteritoriální enkláva. Po druhé světové válce ji uprchlíci před čínskou občanskou válkou proměnili v obří slumovou osadu.",
        legenda: "Od 50. do 70. let ovládaly enklávu triády, což z ní udělalo útočiště zločinu a drog - policie sem vstupovala jen ve velkých skupinách. Intenzivní razie mezi lety 1973 a 1974 (přes 3500 zásahů, 2500 zatčení, 1800 kilogramů zabavených drog) postupně organizovaný zločin omezily, neregistrovaní lékaři ale ve čtvrti zůstávali běžní i později.",
        paranormalni: "V roce 1987 žilo na ploše pouhých 2,6 hektaru asi 33 000 obyvatel - hustota kolem 1 255 000 lidí na čtvereční kilometr, jedna z nejvyšších na Zemi. Kvůli blízkosti letiště Kai Tak nesměly budovy přesáhnout 14 pater, úzké uličky (1-2 metry) postrádaly osvětlení i odvodnění a obyvatelé se běžně pohybovali sítí horních pater, aniž by se dotkli země.",
        skepticke: "Po Společné čínsko-britské deklaraci z roku 1984 začala demolice 23. března 1993 a skončila v dubnu 1994, vláda vyplatila kompenzace ve výši 2,7 miliardy hongkongských dolarů. Park Kowloon Walled City otevřený 22. prosince 1995 je navržený podle raných zahrad dynastie Čching - proměna z právního vakua v pečlivě spravovaný veřejný prostor je zdokumentovaným historickým procesem, ne legendou."
      },
      praktickeInfo: "Dnešní park je volně přístupný zdarma, zahrnuje rekonstruované historické stavby a informační tabule o historii bývalé čtvrti.",
      zdroje: [
        { nazev: "Wikipedia: Kowloon Walled City", url: "https://en.wikipedia.org/wiki/Kowloon_Walled_City", licence: "CC BY-SA" },
        { nazev: "Wikidata: Kowloon Walled City", url: "https://www.wikidata.org/wiki/Q1022918", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Kowloon%20Walled%20City%20Park", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Město v mezeře zákona", text: "Kvůli výjimce v koloniálních smlouvách čtvrť neovládala ani britská, ani čínská správa - právní vakuum, které umožnilo vznik jedné z nejhustěji obydlených a nejméně kontrolovaných čtvrtí na světě." },
        { nazev: "Život, aniž by se nohy dotkly země", text: "Obyvatelé se běžně pohybovali propletenou sítí horních pater budov po celé čtvrti, aniž by museli sestoupit až na úroveň ulice." }
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
