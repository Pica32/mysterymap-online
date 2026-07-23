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
    id: "wadi-rum",
    patch: {
      lead: "Poušť, kterou proslavil T. E. Lawrence za arabské revolty a dnes slouží jako filmová kulisa cizích planet - se skalními rytinami starými tisíce let.",
      atmosfera: 4.3,
      popisy: {
        zahada: "V jižním Jordánsku se rozprostírá poušť s masivními pískovcovými skalami, kterou obývaly lidské kultury už od pravěku - a jejíž kaňony dodnes nesou tisíce let staré rytiny lidí i antilop vytesané thamúdskými obyvateli.",
        historie: "Wadi Rum bylo mezi 13. a 6. stoletím př. n. l. součástí Edómského království a fungovalo jako klíčová obchodní tepna spojující Arábii s Levantou. Nabatejský chrám objevený roku 1933 kompletně vykopal francouzský archeologický tým až v roce 1997.",
        legenda: "Kaňon Chaz'álí obsahuje významné petroglyfy vyryté do jeskynních stěn, zobrazující lidi a antilopy z thamúdské éry, po celém údolí se navíc dochovaly nabatejské nápisy dokládající starověkou přítomnost a migrační vzorce.",
        paranormalni: "Britský důstojník T. E. Lawrence zdokumentoval Wadi Rum během arabské revolty 1917-18 a proslule popsal velkolepost krajiny - v 80. letech byl jeden skalní útvar přejmenován na 'Sedm pilířů moudrosti' podle jeho memoárů, přestože souvislost s knihou byla čistě symbolická.",
        skepticke: "Krajina, kterou dnes lidé znají hlavně jako filmovou kulisu z Duny, Marťana nebo Rogue One, má za sebou tisíce let reálného lidského osídlení doloženého petroglyfy a nápisy - filmová sláva je jen nejnovější vrstvou mnohem starší historie. Od roku 2011 je na seznamu UNESCO."
      },
      praktickeInfo: "Návštěva je možná s beduínským průvodcem, k dispozici jsou jeepové safari i velbloudí treky, doporučuje se přenocování v pouštním kempu pro zážitek z nočního nebe.",
      zdroje: [
        { nazev: "Wikipedia: Wadi Rum", url: "https://en.wikipedia.org/wiki/Wadi_Rum", licence: "CC BY-SA" },
        { nazev: "Wikidata: Wadi Rum", url: "https://www.wikidata.org/wiki/Q40729", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Wadi%20Rum%20Jordan", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Pilíře pojmenované podle knihy", text: "Skalní útvar dostal v 80. letech jméno 'Sedm pilířů moudrosti' podle Lawrencových memoárů, přestože žádná doslovná spojitost s obsahem knihy neexistuje." },
        { nazev: "Rytiny starší než římská Petra", text: "Petroglyfy v kaňonu Chaz'álí pocházejí z thamúdské éry, staletí předcházející nabatejskému rozkvětu regionu." }
      ]
    }
  },
  {
    id: "el-brujo",
    patch: {
      lead: "Mumie tetované vládkyně, která přepsala představu o tom, kdo mohl v předkolumbovském Peru vládnout - a byla to žena.",
      atmosfera: 4.2,
      popisy: {
        zahada: "V údolí Chicama severně od peruánského Trujilla objevili archeologové mumii bohatě tetované ženy pohřbené s královskými insigniemi - nález, který poskytl vůbec nejstarší dosud známý důkaz ženské vládkyně v dějinách Peru.",
        historie: "Komplex El Brujo zahrnuje stavby z několika period počínaje předkeramickou dobou. Kulturou Mochica (200 př. n. l. - 600 n. l.) vznikly tři hlavní pyramidové mohyly: Huaca Prieta, Huaca Cortada a Huaca Cao Viejo. Později lokalitu obývaly kultury Lambayeque a Chimú, než ji připojila Incká říše.",
        legenda: "V Huaca Cao Viejo objevili archeologové takzvanou Paní z Cao, jejíž ostatky představují nejstarší dosud známý doklad ženské vládkyně v peruánské historii. Nález doprovázely polychromní reliéfy a nástěnné malby dokládající vyspělé mochícké umění.",
        paranormalni: "Objev se dostal na stránky National Geographic v červenci 2004 i v červnu 2006 a vzbudil mezinárodní pozornost - důkaz, že předkolumbovské andské společnosti mohly být vedeny ženami stejně jako muži, což předchozí archeologické teorie většinou nepředpokládaly.",
        skepticke: "Nález Paní z Cao je vědecky ověřený a datovaný archeologický objev, ne legenda - jeho význam spočívá právě v tom, jak přepsal zavedené představy o genderové struktuře moci v předkolumbovském Peru. Areál byl veřejnosti otevřen v květnu 2006."
      },
      praktickeInfo: "Komplex je přístupný s placeným vstupem, zahrnuje muzeum s vystavenými nálezy včetně mumie Paní z Cao, nachází se blízko Trujilla na severním pobřeží Peru.",
      zdroje: [
        { nazev: "Wikipedia: El Brujo", url: "https://en.wikipedia.org/wiki/El_Brujo", licence: "CC BY-SA" },
        { nazev: "Wikidata: El Brujo", url: "https://www.wikidata.org/wiki/Q2603112", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=El%20Brujo%20Peru", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Vládkyně, kterou historie přehlížela", text: "Paní z Cao představuje nejstarší dosud doložený případ ženské vládkyně v peruánské historii - objev, který zpochybnil dřívější předpoklad, že moc v regionu drželi výhradně muži." },
        { nazev: "Tetování jako doklad postavení", text: "Bohatá tetování na mumii spolu s královskými insigniemi posloužila archeologům jako klíčový důkaz jejího výjimečného společenského postavení." }
      ]
    }
  },
  {
    id: "huaca-de-la-luna",
    patch: {
      lead: "Chrám Měsíce, kde archeologové našli důkazy obětí spojených s cykly El Niño - a který přežil španělské dobyvatele jen díky tomu, že ho ignorovali.",
      atmosfera: 4.1,
      popisy: {
        zahada: "Nedaleko peruánského Trujilla stojí cihlová stavba z nepálené hlíny, kterou postavil lid Mochica mezi 1. a 9. stoletím n. l. - a jejíž stěny skrývají rozsáhlé důkazy rituálních obětí spojovaných s klimatickými cykly El Niño.",
        historie: "Huaca de la Luna, tedy 'Chrám Měsíce', leží asi 5 kilometrů od Tichého oceánu a 4 kilometry od Trujilla, poblíž ústí řeky Moche jako součást starověkého hlavního města Cerro Blanco.",
        legenda: "Archeologické nálezy ukazují dva hlavní typy obětí: zemědělsky motivované, spojené s prosperitou úrody a přírodními katastrofami, a sociálně motivované oběti válečných zajatců nižšího postavení nesoucí stopy zlomenin a smrtelných úderů do hlavy.",
        paranormalni: "Druhá kategorie obětí koreluje s cykly El Niño - těla pohřbená v bahnitých podmínkách naznačují, že rituální zabíjení souviselo s tímto klimatickým jevem, přestože badatelé varují, že nelze zaměňovat korelaci za jistou příčinnou souvislost. Nálezy zahrnují i dětské oběti, možná zasvěcující dary po dokončení chrámu.",
        skepticke: "Přestože je Huaca de la Luna menší než sousední Huaca del Sol, poskytla archeologům mnohem více poznatků právě proto, že ji španělští dobyvatelé nechali relativně netknutou. Areál obsahuje přes 10 000 čtverečních metrů polychromních nástěnných maleb zobrazujících božstvo Ai-Apaec."
      },
      praktickeInfo: "Areál je přístupný s placeným vstupem a probíhajícím archeologickým výzkumem, podporovaným mimo jiné organizací World Monuments Fund od 90. let.",
      zdroje: [
        { nazev: "Wikipedia: Huaca de la Luna", url: "https://en.wikipedia.org/wiki/Huaca_de_la_Luna", licence: "CC BY-SA" },
        { nazev: "Wikidata: Huaca de la Luna", url: "https://www.wikidata.org/wiki/Q1544441", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Huaca%20de%20la%20Luna%20Peru", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Přežil, protože ho přehlédli", text: "Chrám Měsíce zůstal na rozdíl od sousedního Chrámu Slunce relativně nedotčený, protože ho španělští dobyvatelé při plenění regionu z velké části ignorovali." },
        { nazev: "Oběti spojené s El Niño", text: "Archeologické nálezy naznačují, že část rituálních obětí souvisela s klimatickými cykly El Niño, přestože přesná příčinná souvislost zůstává předmětem odborné opatrnosti." }
      ]
    }
  },
  {
    id: "sima-humboldt",
    patch: {
      lead: "Propast hluboká přes 300 metrů s vlastním pralesem na dně - jediná zalesněná tepui propast na světě, objevená náhodou z letadla.",
      gps: { lat: 4.6855, lon: -64.2185 },
      atmosfera: 4.4,
      popisy: {
        zahada: "Na stolové hoře Sarisariñama ve Venezuele leží obří propast s objemem 18 milionů krychlových metrů a hloubkou přes 300 metrů - a na jejím dně roste vlastní izolovaný prales, jediný svého druhu na jakékoli stolové hoře světa.",
        historie: "Propast poprvé identifikoval pilot Harry Gibson při leteckém průzkumu roku 1961. První sestup do propasti provedli badatelé až roku 1974, důkladnější průzkum následoval v roce 1976.",
        legenda: "Propast dosahuje maximální šířky 352 metrů u okraje, rozšiřující se na 502 metrů v hloubce, s celkovou hloubkou 314 metrů. Vznikla odlišným typem zvětrávání křemencové horniny, než je typické pro běžné jeskynní útvary.",
        paranormalni: "Izolovaný kus pralesa na dně propasti vytváří vlastní 'ztracený svět' uprostřed jinak bezlesé stolové hory - unikátní ekosystém odříznutý od okolní krajiny po tisíce let vlastní evoluce.",
        skepticke: "Vznik propasti má jasné geologické vysvětlení v erozi křemencové horniny, ne nadpřirozený původ - přístup je přísně omezený jen na výzkumníky se speciálním povolením kvůli ochraně tohoto vzácného, izolovaného ekosystému. Asi 700 metrů odtud leží další obří propast Sima Martel, na plošině Sarisariñama jsou celkem čtyři jeskynní útvary tohoto typu."
      },
      praktickeInfo: "Přístup je omezen jen na vědecké výzkumníky se speciálním povolením, veřejnosti propast není běžně přístupná.",
      zdroje: [
        { nazev: "Wikipedia: Sima Humboldt", url: "https://en.wikipedia.org/wiki/Sima_Humboldt", licence: "CC BY-SA" },
        { nazev: "Wikidata: Sima Humboldt", url: "https://www.wikidata.org/wiki/Q3484085", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Sima%20Humboldt%20Venezuela", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Objev z okna letadla", text: "Propast poprvé zaznamenal pilot Harry Gibson při běžném leteckém průzkumu roku 1961 - náhodný objev, který vědcům trval dalších 13 let, než ho dokázali skutečně prozkoumat." },
        { nazev: "Prales na dně propasti", text: "Sima Humboldt je jedinou zalesněnou propastí na jakékoli stolové hoře (tepui) na světě - izolovaný ekosystém uprostřed jinak strmé, bezlesé krajiny." }
      ]
    }
  },
  {
    id: "tiahuanaco-akapana",
    patch: {
      lead: "Pyramida ve tvaru poloviny andského kříže, jejíž stavební plán badatelé dodnes nedokázali rozklíčovat - ani po přiznání, že žádnou jednotnou míru nenašli.",
      atmosfera: 4.0,
      popisy: {
        zahada: "V bolivijském Tiwanaku stojí monumentální stavba ve tvaru poloviny andského kříže o rozměrech 257 na 197 metrů a výšce 16,5 metru - a přesný stavební princip, podle kterého ji stavitelé navrhli, se badatelům dosud nepodařilo jednoznačně rozklíčovat.",
        historie: "Pyramida Akapana vznikla kolem roku 110 n. l. a v centru měla propadlé nádvoří se západním schodištěm, v severovýchodním a jihovýchodním rohu pravděpodobně obsahovala obytné komplexy.",
        legenda: "Badatelé navrhli několik teorií o způsobu měření použitém při stavbě, včetně jednotky zvané luk'a (asi 60 centimetrů) - architekti Jean-Pierre Protzen a Stella Nairová ale při podrobném zkoumání nenašli žádnou přesvědčivou jednotnou míru, ze které by se odvozovaly ostatní rozměry stavby.",
        paranormalni: "Podle jedné z teorií mohla stavba sloužit jako astronomická observatoř zarovnaná s vrcholem hory Quimsačata, umožňující pozorovat rotaci Mléčné dráhy z jižního pólu - vykopávky navíc odhalily obětní ostatky lidí i lam, což naznačuje obřadní využití.",
        skepticke: "Absence jednotné stavební míry není důkazem nadpřirozeného původu, ale spíš dokladem, že stavitelé mohli používat kontextově závislé, proporčně škálované prvky bez potřeby jediné univerzální jednotky - vykrádání a amatérské vykopávky navíc stavbu vážně poškodily, což archeologickou interpretaci značně komplikuje."
      },
      praktickeInfo: "Naleziště je součástí rozsáhlejšího komplexu Tiwanaku přístupného s placeným vstupem, poblíž bolivijského města La Paz.",
      zdroje: [
        { nazev: "Wikipedia: Tiwanaku", url: "https://en.wikipedia.org/wiki/Tiwanaku", licence: "CC BY-SA" },
        { nazev: "Wikidata: Tiwanaku", url: "https://www.wikidata.org/wiki/Q61750", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Akapana%20Tiwanaku", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Míra, kterou nikdo nenašel", text: "Podrobný výzkum architektů Protzena a Nairové nedokázal najít žádnou jednotnou stavební míru, ze které by se odvozovaly ostatní rozměry pyramidy - záhada, která zůstává nevyřešená." },
        { nazev: "Observatoř zarovnaná s Mléčnou dráhou", text: "Podle jedné teorie byla stavba zarovnaná s vrcholem hory Quimsačata tak, aby umožňovala pozorovat rotaci Mléčné dráhy z jižního pólu." }
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
