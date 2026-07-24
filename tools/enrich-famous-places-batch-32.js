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
    id: "talampaya",
    patch: {
      lead: "Kaňon se stěnami vysokými 143 metrů, zužujícími se na pouhých 80 metrů - vytesaný tisíciletími větru a vody mezi dvěma pohořími argentinské pouště.",
      atmosfera: 3.8,
      popisy: {
        zahada: "Mezi pahorkatinou Cerro Los Colorados a pohořím Sierra de Sañagasta leží pánev formovaná erozí v extrémně suchém prostředí - oblast s palčivým vedrem ve dne, nočními mrazy, letními lijáky a silným jarním větrem.",
        historie: "Suché říční koryto v parku obsahuje zkameněliny z éry dinosaurů, byť méně pozoruhodné než nález v nedalekém parku Ischigualasto. Region zahrnuje i domorodé dědictví, včetně petroglyfů Puerta del Cañón a pozůstatky osad.",
        legenda: "Nejpůsobivější součástí parku je soutěska Talampaya s výškou stěn dosahující 143 metrů, zužující se v jednom místě na pouhých 80 metrů - útvary formované vodní a větrnou erozí napříč tisíciletími.",
        paranormalni: "Dramatické rozměry a tvary skalních stěn vytvářejí v soutěsce jedinečnou akustiku a atmosféru, díky nimž patří Talampaya mezi nejnavštěvovanější přírodní památky severozápadní Argentiny.",
        skepticke: "Zkameněliny z doby dinosaurů v parku jsou vědecky doložené, byť méně významné než v sousedním Ischigualastu - společně obě lokality tvoří od roku 2000 jeden zápis UNESCO, oceňující jejich propojenou geologickou a paleontologickou hodnotu, ne jednotlivé rekordy."
      },
      praktickeInfo: "Návštěva kaňonu je možná pouze s licencovaným průvodcem v rámci organizovaných prohlídek, doporučuje se rezervace předem kvůli omezené kapacitě.",
      zdroje: [
        { nazev: "Wikipedia: Talampaya National Park", url: "https://en.wikipedia.org/wiki/Talampaya_National_Park", licence: "CC BY-SA" },
        { nazev: "Wikidata: Talampaya National Park", url: "https://www.wikidata.org/wiki/Q398108", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Talampaya%20National%20Park%20Argentina", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Soutěska zužující se na 80 metrů", text: "Stěny kaňonu Talampaya dosahují výšky 143 metrů a v jednom místě se zužují na pouhých 80 metrů - dramatický produkt tisíciletí vodní a větrné eroze." },
        { nazev: "Petroglyfy uprostřed pouště", text: "Domorodé petroglyfy u Puerta del Cañón dokládají, že tuto extrémní krajinu obývali a zdobili lidé dávno předtím, než se stala národním parkem." }
      ]
    }
  },
  {
    id: "gran-cocle-sitio-conte",
    patch: {
      lead: "Pohřebiště kultury, jejíž zlaté šperky obchodníci donesli až do mayského Chichén Itzá vzdáleného přes 1500 kilometrů.",
      atmosfera: 3.8,
      popisy: {
        zahada: "V panamské provincii Coclé leží naleziště kultury Gran Coclé, jež vzkvétala od zhruba 1200 př. n. l. až do 16. století - civilizace proslulá propracovaným zpracováním zlata, které se obchodně šířilo po celé střední Americe.",
        historie: "Kultura se dělí na období La Mula (150 př. n. l. - 300 n. l.), Tonosí (300-550 n. l.) a Cubitá (550-700 n. l.). Sitio Conte objevili archeologové ve 20. letech 20. století, přičemž první neprofesionální vykopávky naleziště poškodily. Rozsáhlý systematický výzkum provedli ve 30. a 40. letech harvardský archeolog Samuel K. Lothrop a archeolog J. Alden Mason z Pensylvánské univerzity.",
        legenda: "Zlaté práce kultury Coclé se obchodně šířily po celém regionu, dokonce až do mayského města Chichén Itzá na Yucatánu. Mezi nejvýznamnější nálezy patří zlatá destička ze Sitio Conte datovaná kolem roku 700 n. l., dnes uložená v Peabodyho muzeu Harvardovy univerzity.",
        paranormalni: "Keramika kultury Gran Coclé je pozoruhodná silným strukturálním designem a použitím rybích, ptačích, zvířecích a lidských postav jako dekorace - vedle zlata zahrnují nálezy i vyřezávanou kost, mušle, slonovinu, textilie a šperky s polodrahokamy.",
        skepticke: "Rozsah obchodu se zlatem Coclé až po mayský Yucatán je doložen archeologickými nálezy podobných artefaktů na obou místech, ne pouhou spekulací - přesné obchodní trasy a mechanismy výměny ale zůstávají badateli rekonstruovány nepřímo z rozptýlených nálezů."
      },
      praktickeInfo: "Na místě naleziště funguje skromné muzeum vystavující artefakty a historii vykopávek.",
      zdroje: [
        { nazev: "Wikipedia: Gran Coclé", url: "https://en.wikipedia.org/wiki/Gran_Cocl%C3%A9", licence: "CC BY-SA" },
        { nazev: "Wikidata: Gran Coclé", url: "https://www.wikidata.org/wiki/Q2590372", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Sitio%20Conte%20Panama", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Zlato až k Mayům", text: "Zlaté šperky kultury Coclé se obchodně šířily až k mayskému městu Chichén Itzá na Yucatánu, vzdálenému přes 1500 kilometrů od Panamy." },
        { nazev: "Poškozené první vykopávky", text: "Naleziště Sitio Conte poprvé objevili ve 20. letech 20. století, ale neprofesionální rané vykopávky ho poškodily dřív, než dorazili systematičtí archeologové z Harvardu a Pensylvánské univerzity." }
      ]
    }
  },
  {
    id: "cerro-negro",
    patch: {
      lead: "Nejmladší sopka Střední Ameriky, narozená v roce 1850 - dnes proslulá tím, že po jejích černých svazích návštěvníci sjíždějí na speciálních prknech.",
      atmosfera: 3.7,
      popisy: {
        zahada: "V nikaragujském departementu León se zvedá 'Černý vrch' - nejmladší sopka celé Střední Ameriky, která se poprvé vynořila teprve v dubnu 1850 a od té doby vybuchla asi 23krát.",
        historie: "Jméno sopky odkazuje na její výraznou tmavou čedičovou strusku, kontrastující s okolní vegetací. Mezi nejvýznamnější erupce patří ta z roku 1923 (největší v historii sopky), erupce roku 1947 vyžadující evakuaci vesnice Malpaisillo, vznik kráteru Cristo Rey roku 1968 a erupce roku 1971 s popelovým sloupcem vysokým asi 10 km.",
        legenda: "Erupce roku 1992 patřila mezi největší v historii sopky a vyžádala si evakuaci přes 20 000 lidí i několik obětí na životech. Poslední zaznamenaná aktivita proběhla v srpnu 1999, kdy malou erupci vyvolaly tři zemětřesení o síle 5,2.",
        paranormalni: "Sopka se stala turistickou destinací nabízející 'volcano boarding' - sjíždění po popelem pokrytých svazích na speciálně upravených prknech, adrenalinovou aktivitu přitahující dobrodruhy z celého světa.",
        skepticke: "Erupce sopky jsou přesně zdokumentovány vulkanology s daty, sílou (VEI) i dopady na okolní vesnice - Cerro Negro tak patří mezi nejlépe monitorované sopky Nikaragui, což činí i turistickou aktivitu 'volcano boarding' relativně předvídatelnou z hlediska bezpečnosti."
      },
      praktickeInfo: "Výstup na sopku trvá asi hodinu, volcano boarding vyžaduje speciální vybavení dostupné u organizovaných výletů z Leónu.",
      zdroje: [
        { nazev: "Wikipedia: Cerro Negro (volcano)", url: "https://en.wikipedia.org/wiki/Cerro_Negro_(volcano)", licence: "CC BY-SA" },
        { nazev: "Wikidata: Cerro Negro", url: "https://www.wikidata.org/wiki/Q607078", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Cerro%20Negro%20Nicaragua", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Sopka narozená v roce 1850", text: "Cerro Negro je nejmladší sopkou celé Střední Ameriky - vynořila se teprve v dubnu 1850 a od té doby vybuchla už asi 23krát." },
        { nazev: "Sjezd na prkně po sopečném popelu", text: "Turisté dnes sjíždějí černé svahy sopky na speciálních prknech při aktivitě zvané volcano boarding, která z kdysi nebezpečné sopky udělala dobrodružnou atrakci." }
      ]
    }
  },
  {
    id: "isla-de-la-luna",
    patch: {
      lead: "Posvátný ostrov měsíční bohyně, který se ve 20. století proměnil v 'Alcatraz Andes' - vězení, z něhož přesto uprchlo přes 50 politických vězňů najednou.",
      atmosfera: 4.0,
      popisy: {
        zahada: "Na jezeře Titicaca leží ostrov, který podle incké mytologie Viracocha vybral jako místo, odkud přikázal vycházet měsíci - a jehož východní pobřeží skrývá ruiny inckého kláštera zasvěceného měsíčnímu kultu.",
        historie: "Archeologické nálezy podporují náboženský význam místa - na východním pobřeží byly nalezeny ruiny inckého 'kláštera žen' (akllawasi), naznačující, že místo sloužilo jako chrám nebo klášter zasvěcený uctívání měsíce.",
        legenda: "Ve 20. století Bolívie ostrov proměnila ve vězeňské zařízení. Vězení mělo impozantní obranu s 30 stop vysokými hliněnými zdmi postavenými v letech 1932-1935 paraguayskými válečnými zajatci z Chackské války. Izolované, mrazivé prostředí a nebezpečné vody jezera Titicaca vynesly místu přezdívku 'Alcatraz And'.",
        paranormalni: "Navzdory pověsti nedobytného vězení zažil ostrov několik útěků. V září 1949 získali Hernán Siles Zuazo a Emilio Sfeir politický azyl v Peru. Dramatičtější byl útěk 2. listopadu 1972, kdy 50 až 60 politických vězňů uprchlo z ostrova a úspěšně dorazilo do Peru během vojenského režimu Huga Banzera.",
        skepticke: "Přezdívka 'Alcatraz Andes' odráží reálnou geografickou izolaci ostrova uprostřed vysokohorského jezera, ne jen marketingovou nadsázku - přesto ji hromadný útěk přes 50 vězňů roku 1972 přesvědčivě vyvrátil jako mýtus o absolutní nedobytnosti."
      },
      praktickeInfo: "Ostrov je přístupný lodí z bolivijské strany jezera Titicaca, obývá ho kolem 80 stálých obyvatel žijících z rybolovu a zemědělství.",
      zdroje: [
        { nazev: "Wikipedia: Isla de la Luna", url: "https://en.wikipedia.org/wiki/Isla_de_la_Luna", licence: "CC BY-SA" },
        { nazev: "Wikidata: Isla de la Luna", url: "https://www.wikidata.org/wiki/Q2303940", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Isla%20de%20la%20Luna%20Titicaca", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Klášter měsíční bohyně", text: "Ruiny inckého 'kláštera žen' na východním pobřeží ostrova naznačují, že místo sloužilo jako chrám zasvěcený uctívání měsíce podle incké mytologie." },
        { nazev: "Hromadný útěk z Alcatrazu And", text: "Roku 1972 uprchlo z údajně nedobytného vězeňského ostrova 50 až 60 politických vězňů najednou a úspěšně dorazilo do sousedního Peru." }
      ]
    }
  },
  {
    id: "aldabra-atoll",
    patch: {
      lead: "Atol se 100 000 obřími želvami - kde mezinárodní protest vědců ve 60. letech zabránil britské armádě postavit vojenskou základnu.",
      atmosfera: 3.6,
      popisy: {
        zahada: "V Indickém oceánu leží jeden z nejizolovanějších atolů světa, pojmenovaný arabskými mořeplavci podle jeho drsného, sluncem vyprahlého prostředí - dnes domov největší populace obřích želv na Zemi.",
        historie: "Portugalští mořeplavci atol navštívili roku 1511, francouzská koloniální exploatace v 18. století se zaměřila zejména na obří želvy. Britská kontrola přišla roku 1810, první osídlení bylo založeno roku 1888. Klíčovým okamžikem byla 60. léta 20. století, kdy Britové plánovali vojenskou základnu - mezinárodní vědecký protest, známý jako 'Aldabrská aféra', ale výstavbě úspěšně zabránil.",
        legenda: "Královská společnost v Londýně zahájila výzkum na atolu roku 1970, Seychelská nadace ostrovů převzala správu roku 1979 a UNESCO atol zapsalo na seznam světového dědictví roku 1982.",
        paranormalni: "Aldabra hostí přibližně 100 000 obřích želv aldabrských - největší populaci obřích želv na světě, přičemž dospělí jedinci váží až 350 kilogramů. Atol podporuje 307 druhů zvířat a rostlin celkem, včetně endemických ptáků jako chřástal bělohrdlý a ploskozobka aldabrská, spolu s koloniemi mořských ptáků čítajícími desítky tisíc jedinců.",
        skepticke: "'Aldabrská aféra' je dobře zdokumentovaný příklad úspěšného vědeckého aktivismu, ne jen ekologická legenda - mezinárodní protest skutečně zastavil konkrétní vojenský stavební projekt, což z Aldabry udělalo raný a vlivný precedens pro ochranu přírody proti vojenským zájmům."
      },
      praktickeInfo: "Atol nemá přistávací dráhy ani přístavní mola, zásobovací lodě z Mahé jezdí jen dvakrát ročně; turistika je přísně regulována a možná jen s organizovanými prohlídkami.",
      zdroje: [
        { nazev: "Wikipedia: Aldabra", url: "https://en.wikipedia.org/wiki/Aldabra", licence: "CC BY-SA" },
        { nazev: "Wikidata: Aldabra", url: "https://www.wikidata.org/wiki/Q272768", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Aldabra%20Atoll%20Seychelles", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Aféra, která zastavila armádu", text: "Mezinárodní protest vědců ve 20. století, známý jako 'Aldabrská aféra', úspěšně zabránil britskému plánu postavit na atolu vojenskou základnu." },
        { nazev: "Sto tisíc obřích želv", text: "Atol hostí přibližně 100 000 obřích želv aldabrských - největší populaci svého druhu na celém světě, s dospělými jedinci vážícími až 350 kilogramů." }
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
