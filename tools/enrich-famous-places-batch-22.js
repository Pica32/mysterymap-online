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
    id: "khiva-itchan-kala",
    patch: {
      lead: "Opevněné vnitřní město uzbeckého Chívy, jehož posvátné jezero mělo podle legendy vzniknout hlínou z míst, kudy chodil sám prorok Mohamed.",
      atmosfera: 4.0,
      popisy: {
        zahada: "Za mohutnými hliněnými hradbami starobylé Chívy se skrývá vnitřní pevnostní město s více než 50 historickými památkami a 250 starými domy, obklopené hradbami vysokými 8 až 10 metrů a dlouhými 6250 metrů.",
        historie: "Výstavba Ičan Kaly probíhala ve čtyřech historických obdobích: předmongolská éra, obnova po roce 1220, rozvoj v 16.-17. století a rozšíření mezi 18. a 20. stoletím. Mezi nejvýznamnější stavby patří pevnost Kunja Ark, mešita Džuma (přestavěná 1788-1789 se 112 znovupoužitými sloupy), Bílá mešita, mauzoleum Pahlavan Mahmuda a nedokončený minaret Kalta Minor.",
        legenda: "Podle místní tradice hlína z tohoto regionu údajně posloužila ke stavbám v Medíně za života proroka Mohameda, a jezero, které z ní následně vzniklo, je považováno za posvátné. Jiná legenda připisuje vykopání posvátného kanálu Xejvak i založení samotného Chorezmu Šémovi, synovi Noema, který kanál vyhloubil kouzelnou lopatou.",
        paranormalni: "Obranný systém zahrnoval vodou naplněné příkopy, hliněné potrubí a čtyři brány (Bogča, Polvon, Toš, Ota), strážní věže vystupovaly z hradeb v pravidelných 30metrových odstupech a cimbuří umožňovalo obráncům palbu.",
        skepticke: "Legendy o Šémovi a posvátné hlíně z Medíny jsou tradiční zakladatelské příběhy typické pro islámské město s dlouhou historií, ne historicky doložené události - solidně doloženo je ale rozsáhlé stavební dědictví z 18.-19. století, které UNESCO chrání od roku 1990 na ploše 37,5 hektaru."
      },
      praktickeInfo: "Celé opevněné město je pěší zónou s placeným jednotným vstupem k památkám, doporučuje se vystoupat na hradby za soumraku pro nejlepší výhled.",
      zdroje: [
        { nazev: "Wikipedia: Itchan Kala", url: "https://en.wikipedia.org/wiki/Itchan_Kala", licence: "CC BY-SA" },
        { nazev: "Wikidata: Itchan Kala", url: "https://www.wikidata.org/wiki/Q535577", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Itchan%20Kala%20Khiva", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Posvátné jezero z medínské hlíny", text: "Podle legendy hlína z tohoto regionu posloužila ke stavbám v Medíně za života proroka Mohameda a jezero, které z ní vzniklo, je dodnes považováno za posvátné." },
        { nazev: "Kanál vykopaný Noemovým synem", text: "Místní tradice připisuje vykopání posvátného kanálu Xejvak i založení Chorezmu samotnému Šémovi, synovi biblického Noema." }
      ]
    }
  },
  {
    id: "takht-i-sangin",
    patch: {
      lead: "Řecko-baktrijský chrám boha řeky Oxus, jehož tisíce votivních darů mohou být klíčem k záhadě proslulého Oxuského pokladu.",
      gps: { lat: 37.09889, lon: 68.285 },
      atmosfera: 3.9,
      popisy: {
        zahada: "Na soutoku řek Vachš a Pandž v jižním Tádžikistánu leží naleziště, jehož tádžický název znamená 'Kamenný trůn' - centrum uctívání říčního boha Oxus, které fungovalo jako město od helénistické éry až do doby Kušánské říše ve 3. století n. l.",
        historie: "Kolem roku 300 př. n. l. zde vznikl monumentální chrám zasvěcený Oxovi, božstvu řeky Vachš, s masivní nepálenou hliněnou zdí silnou 6 metrů, širokou 85 metrů (sever-jih) a dlouhou 100 metrů (východ-západ). Kolem roku 130 př. n. l. bylo město vyplundrováno, pravděpodobně Kušány, po čemž byla většina areálu opuštěna - chrám ale zůstal v provozu i poté.",
        legenda: "Vykopávky odhalily 5000 až 8000 votivních darů z drahých i obyčejných materiálů: portréty řecko-baktrijských vládců, zbraně a zbroj (zejména kušánské hroty šípů), bronzovou sošku Siléna/Marsya s řeckým věnováním 'Atrosokes věnoval [toto] Oxovi', šperky, nábytek a ozdobné destičky.",
        paranormalni: "Naleziště je podezřelé jako původní místo proslulého Oxuského pokladu, dnes uloženého v Britském muzeu a Victoria and Albert Museu - spojení mezi místem vykopávek a rozptýleným pokladem zůstává předmětem badatelské debaty.",
        skepticke: "Přesné spojení s Oxuským pokladem je archeologická hypotéza podložená podobností nálezů a polohou, ne definitivně prokázaný fakt - jistá je ale existence chrámu samotného a jeho dlouhé užívání od helénistické éry po dobu kušánskou, doložená tisíci votivních předmětů nalezených přímo na místě."
      },
      praktickeInfo: "Naleziště je odlehlé a vyžaduje organizovaný transport, hlavní nálezy jsou dnes vystaveny v muzeích v Dušanbe, Londýně a jinde.",
      zdroje: [
        { nazev: "Wikipedia: Takht-i Sangin", url: "https://en.wikipedia.org/wiki/Takht-i_Sangin", licence: "CC BY-SA" },
        { nazev: "Wikidata: Takht-i Sangin", url: "https://www.wikidata.org/wiki/Q6554804", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Takht-i%20Sangin%20Tajikistan", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Chrám boha řeky", text: "Monumentální chrám zasvěcený říčnímu bohu Oxovi fungoval na soutoku dvou řek nepřetržitě od helénistické éry až do doby kušánské." },
        { nazev: "Stopa k Oxuskému pokladu", text: "Tisíce votivních darů nalezených na místě z něj dělají hlavního podezřelého jako původní lokalitu proslulého Oxuského pokladu, dnes rozptýleného mezi britská muzea." }
      ]
    }
  },
  {
    id: "taq-kasra",
    patch: {
      lead: "Největší volně stojící cihlová klenba postavená lidskou rukou před moderní dobou - vztyčená bez lešení nakláněním cihel o 18 stupňů.",
      atmosfera: 3.7,
      popisy: {
        zahada: "V ruinách starověké Ktésifóntu, hlavního města Parthské i Sásánovské říše, se tyčí obří cihlová klenba, jejíž inženýrské provedení předstihlo svou dobu o staletí - a badatelé se dodnes přou, kdo přesně a kdy ji nechal postavit.",
        historie: "Taq Kasra sloužila jako hlavní palácová fasáda starověkého Ktésifóntu od 2. století př. n. l. do 7. století n. l. Přesné datování stavby zůstává sporné - někteří badatelé ji připisují Šápúrovi I. (242-272 n. l.), jiní Chusrauovi I. po jeho byzantském tažení roku 540 n. l. Stavbu dobyli Arabové při dobytí roku 637, později sloužila jako mešita, než byla opuštěna. Ve 10. století abbásovský chalífa al-Muktafí nechal část stavby rozebrat, aby získal cihly pro palác Tádž v Bagdádu.",
        legenda: "Klenutý ajvan měřil přibližně 37 metrů na výšku, 26 metrů na šířku a 50 metrů na délku, což z něj dělá největší volně stojící klenbu postavenou lidskou rukou před moderní dobou - druhou největší jednorozponovou cihlovou klenbu světa po íránském mostě Gavmišán.",
        paranormalni: "Ruiny inspirovaly proslulé básníky - arabský básník al-Buhturí v 9. století i perský básník Chákání ve 12. století jim věnovali známé verše, v nichž stavbu opěvují jako symbol pomíjivosti moci a slávy.",
        skepticke: "Přesné datum stavby a jméno stavitele zůstávají mezi historiky sporné kvůli protichůdným pramenům, ne kvůli nedostatku důkazů o samotné existenci stavby - inženýrský úspěch náklonu cihel o 18 stupňů od svislice a použití rychle schnoucí cementové malty bez centrování je dobře zdokumentovaný a obdivovaný i moderními staviteli."
      },
      praktickeInfo: "Naleziště leží v Al-Madá'inu nedaleko Bagdádu, doporučuje se ověřit aktuální bezpečnostní a přístupovou situaci před návštěvou.",
      zdroje: [
        { nazev: "Wikipedia: Taq Kasra", url: "https://en.wikipedia.org/wiki/Taq_Kasra", licence: "CC BY-SA" },
        { nazev: "Wikidata: Taq Kasra", url: "https://www.wikidata.org/wiki/Q1486703", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Taq%20Kasra%20Iraq", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Klenba postavená bez lešení", text: "Sásánovští stavitelé dokázali vztyčit obří cihlovou klenbu bez centrování - nakláněním cihel o 18 stupňů od svislice a použitím rychle schnoucí malty." },
        { nazev: "Básníci nad ruinami slávy", text: "Ruiny paláce inspirovaly slavné básníky napříč staletími - arabský al-Buhturí i perský Chákání v nich viděli symbol pomíjivosti moci a lidské slávy." }
      ]
    }
  },
  {
    id: "bosra",
    patch: {
      lead: "Nabatejské město, kde se podle islámské tradice křesťanský mnich Bahíra setkal s mladým prorokem Mohamedem - a rozpoznal v něm budoucího posla božího.",
      atmosfera: 3.8,
      popisy: {
        zahada: "V jižní Sýrii leží město, které se postupně stalo nabatejským centrem, římskou provinční metropolí, byzantským křesťanským střediskem i důležitou branou raného islámu - a jehož římské divadlo je jediným svého druhu s kompletně dochovanou horní krytou galerií.",
        historie: "Bosra vznikla jako nabatejské město ve 2. století př. n. l. a stala se prvním významným sídlem v regionu. Římané ji dobyli roku 106 n. l. pod velením Cornelia Palmy, přejmenovali na Nova Trajana Bostra a učinili hlavním městem provincie Arabia Petraea. Od 5. století zde za byzantské éry vzkvétalo křesťanství. Islámské síly město dobyly roku 634 n. l., poté zůstalo strategickou jižní branou Sýrie.",
        legenda: "Město figuruje v islámské tradici díky mnichu Bahírovi, jehož setkání s mladým prorokem Mohamedem je zaznamenáno v islámských pramenech - mnich měl v chlapci rozpoznat znamení budoucího proroctví. Místní tradice uctívá i svatyni 'mabrak an-naqa', označující místo, kde poklekla velbloudice, na níž prorok Mohamed vjel do Bosry.",
        paranormalni: "Římské divadlo ze 2. století n. l. je jediným svého druhu s kompletně dochovanou horní galerií v podobě krytého portiku - později bylo opevněno (481-1231 n. l.) a přeměněno na pevnost s přidanými obrannými prvky.",
        skepticke: "Legenda o mnichu Bahírovi je součástí islámské hagiografické tradice, ne nezávisle doloženou historickou událostí - solidně doložené jsou ale vrstvy nabatejské, římské, byzantské a islámské historie města, potvrzené archeologickými nálezy napříč všemi obdobími. UNESCO zapsalo Bosru na seznam světového dědictví v roce 1980."
      },
      praktickeInfo: "Vzhledem k probíhajícímu konfliktu v Sýrii je nutné před cestou pečlivě ověřit aktuální bezpečnostní situaci a doporučení ministerstva zahraničí.",
      zdroje: [
        { nazev: "Wikipedia: Bosra", url: "https://en.wikipedia.org/wiki/Bosra", licence: "CC BY-SA" },
        { nazev: "Wikidata: Bosra", url: "https://www.wikidata.org/wiki/Q272680", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Bosra%20Syria", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Mnich, který rozpoznal proroka", text: "Podle islámské tradice se v Bosře mladý Mohamed setkal s křesťanským mnichem Bahírou, jenž v něm měl rozpoznat znamení budoucího prorockého poslání." },
        { nazev: "Jediné plně dochované divadlo svého druhu", text: "Římské divadlo v Bosře je jediným příkladem svého typu s kompletně zachovanou horní galerií v podobě krytého portiku - unikát mezi antickými divadly." }
      ]
    }
  },
  {
    id: "ollantaytambo",
    patch: {
      lead: "Jediné místo, kde Inkové roku 1537 porazili španělskou výpravu v otevřené bitvě - než i tak museli ustoupit do horské pevnosti Vilcabamba.",
      atmosfera: 4.2,
      popisy: {
        zahada: "V posvátném údolí Inků stojí město s pravidelným mřížovým půdorysem, které mohlo být osídleno už před 3500 lety - a které se na krátkou chvíli stalo posledním bojištěm, kde Inkové vzdorovali španělským dobyvatelům z pozice síly.",
        historie: "Kultura Huari (600-1000 n. l.) zde zanechala první osady. Kolem poloviny 15. století místo dobyl císař Pačakutek a začlenil ho do svého osobního panství, přestavěl město s propracovanou architekturou a rozsáhlým terasovým zemědělstvím. Během španělského dobývání zde Manko Inka na krátko zřídil dočasné hlavní město.",
        legenda: "Roku 1537 na planině Mascabamba poblíž Ollantaytamba Manko Inka porazil španělskou výpravu - jednu z mála otevřených bitev, které Inkové proti dobyvatelům vyhráli. Přesto se později musel stáhnout do vzdálenější horské pevnosti Vilcabamba.",
        paranormalni: "Chrámový vrch obsahuje proslulou 'Zeď šesti monolitů' a nedokončený Sluneční chrám, doplněné vysoce prestižními terasami z tesaného kamene, vyvýšenými sýpkami Pinkuylluna s promyšleným větracím systémem a lomy, odkud se růžové ryolitové bloky dopravovaly propracovaným systémem cest.",
        skepticke: "Vítězná bitva u Ollantaytamba roku 1537 je historicky dobře doložená událost, ne legenda - byla to však jen dočasná taktická výhra: navzdory vítězství se Manko Inka nakonec musel stáhnout do odlehlejší Vilcabamby, kde inckému odporu odzvonilo o několik desetiletí později."
      },
      praktickeInfo: "Město je živoucí - dodnes obydlené podle původního inckého mřížového půdorysu, patří mezi nejlépe zachovalá incká urbanistická díla a je běžnou zastávkou na cestě do Machu Picchu.",
      zdroje: [
        { nazev: "Wikipedia: Ollantaytambo", url: "https://en.wikipedia.org/wiki/Ollantaytambo", licence: "CC BY-SA" },
        { nazev: "Wikidata: Ollantaytambo", url: "https://www.wikidata.org/wiki/Q916382", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Ollantaytambo%20Peru", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Bitva, kterou Inkové vyhráli", text: "Roku 1537 Manko Inka na planině poblíž Ollantaytamba porazil španělskou výpravu - vzácný případ otevřeného vítězství Inků nad dobyvateli." },
        { nazev: "Město, které dodnes žije podle inckého plánu", text: "Ollantaytambo patří mezi jediná místa, kde obyvatelé dodnes žijí podle původního inckého mřížového urbanistického plánu, nepřerušeně od dob císaře Pačakuteka." }
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
