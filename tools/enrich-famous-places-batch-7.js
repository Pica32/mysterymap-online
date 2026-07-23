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
    id: "al-ula-hegra-tombs",
    patch: {
      lead: "Nabatejské skalní hrobky, kterým se cestovatelé po staletí vyhýbali kvůli prokletí lidu Thamúd zmíněného přímo v Koránu.",
      atmosfera: 4.4,
      popisy: {
        zahada: "V severozápadní Saúdské Arábii leží přes sto monumentálních hrobek vytesaných do červeného pískovce - a celý region kolem nich měl po staletí pověst prokletého místa strašeného zlovolným duchem džinem.",
        historie: "Hegra, známá také jako Madá'in Sálih, vzkvétala v 1. století n. l. pod nabatejským lidem a stala se druhým největším městem této civilizace po Petře v dnešním Jordánsku. Město mělo přes 130 studní, zavlažovací kanály a nádrže na dešťovou vodu a leželo na křižovatce hlavní severojižní kadidlové stezky s cestou od Rudého moře k Perskému zálivu.",
        legenda: "Hegra je spojována s lidem Thamúd, předislámským kmenem zmíněným v Koránu, který měl být potrestán za svou neposlušnost. Po generace se cestovatelům doporučovalo v regionu se nezdržovat, nepít místní vodu a neusazovat se zde - pověst o kletbě a džinovi udržovala oblast dlouho mimo dosah turistů i badatelů.",
        paranormalni: "Místo upadlo do zapomnění po římské okupaci nabatejského království roku 106 n. l., protože Římané dávali přednost přístavům podél Rudého moře před suchozemskými karavanními trasami - opuštění tak mělo přinejmenším částečně praktické, obchodní důvody, ne jen kletbu.",
        skepticke: "Moderní archeologie a saúdskoarabská turistická politika region v posledních letech otevřely veřejnosti a legenda o kletbě dnes slouží spíš jako koloritní součást návštěvnického vyprávění než jako skutečná překážka - Hegra je od roku 2008 první saúdskoarabskou památkou na seznamu UNESCO s více než stovkou monumentálních hrobek nesoucích dochovaná jména a data z 1. století."
      },
      praktickeInfo: "Areál je přístupný s placeným vstupem a organizovanými prohlídkami, region AlUla prošel v posledních letech výraznou turistickou infrastrukturní modernizací.",
      zdroje: [
        { nazev: "Wikipedia: Hegra", url: "https://en.wikipedia.org/wiki/Hegra", licence: "CC BY-SA" },
        { nazev: "Wikidata: Hegra", url: "https://www.wikidata.org/wiki/Q27356", licence: "CC0" },
        { nazev: "UNESCO World Heritage - Hegra Archaeological Site", url: "https://whc.unesco.org/en/list/1293/", licence: "oficiální zdroj / UNESCO dokumentace" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Hegra%20AlUla", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Prokletí zmíněné v Koránu", text: "Region byl po staletí spojován s lidem Thamúd, jehož trest za neposlušnost je zmíněn přímo v Koránu, a cestovatelům se doporučovalo se zde nezdržovat." },
        { nazev: "Druhé město Nabatejců", text: "Po proslulé Petře v Jordánsku byla Hegra druhým největším městem nabatejské civilizace, s vlastní rozvinutou vodohospodářskou infrastrukturou uprostřed pouště." }
      ]
    }
  },
  {
    id: "krak-des-chevaliers",
    patch: {
      lead: "Nejlépe dochovaný křižácký hrad na světě, který dokázal odolat útokům po století - a nakonec padl jen díky lsti, ne dobytí.",
      atmosfera: 4.5,
      popisy: {
        zahada: "V syrských horách stojí hrad, který byl ve své době považován za prakticky nedobytný - a přesto dnes patří mezi nejlépe zachované příklady středověké vojenské architektury na světě, přestože leží v zemi zmítané desetiletími konfliktů.",
        historie: "Původní pevnost pro emíra z Aleppa vznikla roku 1031, křižáci ji dobyli poprvé roku 1099, trvalou kontrolu ale získali až roku 1110. Roku 1144 předal Raymond II. z Tripolisu hrad rytířskému řádu johanitů, kteří ho přestavěli na téměř nedobytnou pevnost schopnou pojmout až 2000 vojáků.",
        legenda: "Hrad byl součástí sítě opevnění chránících strategický průsmyk Homs Gap, klíčový pro obchod i vojenské přesuny mezi pobřežím a vnitrozemím Sýrie. Johanité z pevnosti dokonce vybírali roční tribut od muslimské sekty asasínů výměnou za ochranu.",
        paranormalni: "Hrad odolával muslimským útokům po více než sto let a byl považován za symbol křižácké vojenské moci ve Svaté zemi - jeho pověst nedobytnosti byla v regionu legendární.",
        skepticke: "Hrad nakonec padl roku 1271 do rukou mamlúckého sultanátu ne přímým vojenským dobytím, ale lstí - obléhatelé použili padělaný dopis údajně od velmistra řádu johanitů, který posádku přesvědčil ke kapitulaci. Od roku 2006 je na seznamu UNESCO jako jeden z nejvýznamnějších příkladů křižácké architektury na světě."
      },
      praktickeInfo: "Hrad je fyzicky dobře dochovaný, ale aktuální bezpečnostní situaci a přístupnost pro návštěvníky je nutné ověřit před cestou vzhledem k dlouhodobému konfliktu v Sýrii.",
      zdroje: [
        { nazev: "Wikipedia: Krak des Chevaliers", url: "https://en.wikipedia.org/wiki/Krak_des_Chevaliers", licence: "CC BY-SA" },
        { nazev: "Wikidata: Krak des Chevaliers", url: "https://www.wikidata.org/wiki/Q177549", licence: "CC0" },
        { nazev: "World History Encyclopedia - Krak des Chevaliers", url: "https://www.worldhistory.org/Krak_Des_Chevaliers/", licence: "vzdělávací zdroj" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Krak%20des%20Chevaliers", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Padělaný dopis místo obléhací věže", text: "Hrad, který odolával přímým útokům po celá staletí, nakonec padl roku 1271 díky padělanému dopisu, který posádku přesvědčil ke kapitulaci - lest zvítězila tam, kde selhala síla." },
        { nazev: "Tribut od asasínů", text: "Johanité byli natolik mocní, že od nich dokonce muslimská sekta asasínů vybírala roční tribut výměnou za ochranu - neobvyklé uspořádání mezi znepřátelenými stranami." }
      ]
    }
  },
  {
    id: "megiddo",
    patch: {
      lead: "Starověké město na křižovatce obchodních cest, jehož jméno se stalo synonymem pro poslední bitvu na konci světa.",
      atmosfera: 4.1,
      popisy: {
        zahada: "Pahorek v izraelském údolí Jizreel byl osídlen od roku 7000 př. n. l. do roku 300 př. n. l. - a jeho jméno dalo vzniknout slovu Armageddon, biblickému synonymu pro poslední bitvu na konci časů.",
        historie: "Megiddo leželo na křižovatce obchodních a vojenských cest spojujících Egypt, Evropu a Mezopotámii - kdokoli ovládal Megiddo, ovládal tuto klíčovou trasu. Postupně ho obývali Kananejci, Izraelité, Asyřané, Egypťané i Peršané, archeologové zde odkryli přes 20 vrstev osídlení.",
        legenda: "V Knize zjevení Nového zákona je Megiddo označeno jako místo poslední bitvy dobra proti zlu na konci světa - volba, která dávala smysl, protože se místo stalo epicentrem ozbrojených konfliktů po celé délce izraelské historie, včetně atentátu na krále Achazjáše a tragické smrti krále Jóšijáše.",
        paranormalni: "Slovo Armageddon je dodnes v populární kultuře i náboženském diskurzu synonymem pro apokalyptický konečný střet - odkaz, který přežil tisíce let od doby, kdy bylo samotné město naposledy obydlené.",
        skepticke: "Historická role Megidda jako strategického vojenského křižovatce je archeologicky bohatě zdokumentovaná - jeho volba jako symbolu 'poslední bitvy' odráží spíš dlouhou historii skutečných konfliktů na tomto místě než jakoukoli nadpřirozenou vlastnost lokality samotné. Od roku 2005 je součástí seznamu UNESCO jako jeden z 'biblických pahorků'."
      },
      praktickeInfo: "Naleziště je přístupné s placeným vstupem a návštěvnickým centrem, prohlídka zahrnuje sestup do starověkého vodního systému vytesaného do skály.",
      zdroje: [
        { nazev: "Wikipedia: Tel Megiddo", url: "https://en.wikipedia.org/wiki/Tel_Megiddo", licence: "CC BY-SA" },
        { nazev: "Wikidata: Tel Megiddo", url: "https://www.wikidata.org/wiki/Q208379", licence: "CC0" },
        { nazev: "Live Science - Welcome to Armageddon", url: "https://www.livescience.com/megiddo-armageddon.html", licence: "novinářský zdroj" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Tel%20Megiddo%20Israel", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Slovo, které přežilo město", text: "Přestože bylo Megiddo obydlené naposledy kolem roku 300 př. n. l., jeho jméno žije dál jako Armageddon - biblický symbol poslední bitvy na konci světa." },
        { nazev: "20 vrstev historie", text: "Archeologové odkryli na pahorku přes 20 vrstev postupného osídlení - fyzický záznam tisíců let bojů o kontrolu nad strategickou křižovatkou cest." }
      ]
    }
  },
  {
    id: "caral",
    patch: {
      lead: "Nejstarší město obou Amerik, staré jako egyptské pyramidy, ale objevené teprve nedávno a bez jediné zbraně či opevnění.",
      atmosfera: 3.9,
      popisy: {
        zahada: "V peruánském údolí Supe leží pozůstatky nejstaršího známého města celé Ameriky, staré přes 4000 let - civilizace, která byla současníkem starověkého Egypta a Mezopotámie, ale o svém objevu musela čekat až do konce 20. století.",
        historie: "Caral objevila v říjnu 1994 peruánská archeoložka Ruth Shady Solísová, přestože první náznaky jeho existence zaznamenal už německý archeolog Max Uhle o téměř sto let dřív. Radiokarbonové datování ukázalo osídlení mezi lety 2600 a 2000 př. n. l. - Velká pyramida v Gíze vznikla přibližně ve stejné době kolem roku 2600 př. n. l.",
        legenda: "Rozsáhlý komplex monumentální architektury na ploše přes 600 hektarů zahrnuje šest pyramid, propadlá kruhová náměstí a monumentální schodiště. Roku 2001 UNESCO označilo Caral za nejstarší město obou Amerik.",
        paranormalni: "Na rozdíl od mnoha jiných starověkých civilizací nebyly v Caralu nalezeny žádné důkazy opevnění, zbraní nebo válečných konfliktů - naznačuje to společnost, která svou složitou sociální organizaci budovala bez nutnosti vojenské síly.",
        skepticke: "Práce doktorky Shady odhalila civilizaci, která byla nejen současníkem velkých starověkých kultur Egypta a Mezopotámie, ale v mnoha ohledech i vyspělejší ve své společenské organizaci - jde o solidně datovaný archeologický nález, ne spekulativní tvrzení, potvrzený od roku 2009 statusem UNESCO."
      },
      praktickeInfo: "Naleziště leží asi 200 kilometrů severně od Limy, přístupné s placeným vstupem a doporučeným místním průvodcem, návštěva je nenáročná díky rovinatému terénu.",
      zdroje: [
        { nazev: "Wikipedia: Caral", url: "https://en.wikipedia.org/wiki/Caral", licence: "CC BY-SA" },
        { nazev: "Wikidata: Caral", url: "https://www.wikidata.org/wiki/Q219279", licence: "CC0" },
        { nazev: "History.com - Caral Peru Oldest Civilization", url: "https://www.history.com/articles/caral-peru-norte-chico-oldest-civilization-western-hemisphere", licence: "novinářský zdroj" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Caral%20Peru", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Objev o sto let opožděný", text: "První stopy Caralu zaznamenal už německý archeolog Max Uhle koncem 19. století, ale skutečný objev a docenění významu města přišly až s prací Ruth Shady Solísové v roce 1994." },
        { nazev: "Město bez zbraní", text: "Na rozdíl od mnoha současných civilizací nenašli archeologové v Caralu žádné důkazy opevnění ani válčení - společnost, která svou složitost budovala jinými prostředky než silou." }
      ]
    }
  },
  {
    id: "nimrud",
    patch: {
      lead: "Druhé hlavní město Asyrské říše s okřídlenými strážnými sochami starými tři tisíce let, které nedokázal zničit čas - jen kladiva.",
      atmosfera: 4.2,
      popisy: {
        zahada: "Na břehu Tigridu stálo tři tisíce let staré město, které přežilo pád Asyrské říše i staletí zapomnění - jen aby bylo za pár týdnů roku 2015 systematicky zdemolováno kladivy, vrtačkami a buldozerem.",
        historie: "Nimrud založili ve 13. století př. n. l. a stalo se druhým hlavním městem Asyrské říše za vlády krále Ašurnasirpala II. Ve městě stál jeho palác zdobený obřími okřídlenými strážnými sochami zvanými lamassu a chrámy zasvěcené božstvům Ninurtovi a Enlilovi.",
        legenda: "Nimrud patřil mezi nejvýznamnější archeologická naleziště Mezopotámie a jeho paláce a reliéfy poskytovaly badatelům jedny z nejbohatších dokladů asyrského umění a moci.",
        paranormalni: "V polovině roku 2014 obsadila město teroristická organizace Islámský stát, která považuje vše předcházející islámské éře za modlářské - militanti systematicky ničili obří alabastrové reliéfy zobrazující asyrské krále a božstva kladivy, vrtacím nářadím a pilami, zatímco buldozer bořil zdi a exploze zničily tři samostatné části lokality.",
        skepticke: "Generální tajemník OSN Pan Ki-mun označil zničení Nimrudu za válečný zločin - jde o zdokumentovaný, záměrný akt kulturní destrukce, ne přírodní úpadek. Irácké síly město znovu dobyly zpět 13. listopadu 2016 v rámci operace na osvobození Mosulu, poslední islamistické bašty v zemi."
      },
      praktickeInfo: "Lokalita je po vytlačení Islámského státu z regionu opět přístupná, probíhá mezinárodně podporovaná obnova poškozených částí, doporučuje se ověřit aktuální bezpečnostní doporučení před cestou.",
      zdroje: [
        { nazev: "Wikipedia: Nimrud", url: "https://en.wikipedia.org/wiki/Nimrud", licence: "CC BY-SA" },
        { nazev: "Wikidata: Nimrud", url: "https://www.wikidata.org/wiki/Q237614", licence: "CC0" },
        { nazev: "Al Jazeera - How ISIL destroyed Nimrud", url: "https://www.aljazeera.com/features/2016/12/1/how-isil-destroyed-nimrud", licence: "novinářský zdroj" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Nimrud%20Iraq", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Tři tisíce let přežily, pár týdnů ne", text: "Reliéfy a sochy Nimrudu přežily tři tisíce let přírodních vlivů a historických zvratů, jen aby je za pár týdnů roku 2015 zničili militanti kladivy a výbušninami." },
        { nazev: "Válečný zločin podle OSN", text: "Generální tajemník OSN oficiálně označil systematické ničení Nimrudu za válečný zločin - jedno z mála podobných prohlášení týkajících se ničení kulturního dědictví." }
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
