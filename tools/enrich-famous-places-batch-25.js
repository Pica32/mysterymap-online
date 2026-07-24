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
    id: "white-desert-egypt",
    patch: {
      lead: "Poušť, kde vítr a písek za tisíciletí vytesaly z bílé křídy tvary hub, velbloudů a ledovců - krajina tak nezemská, že ji beduínští průvodci pojmenovávají jako sochařskou galerii.",
      atmosfera: 3.9,
      popisy: {
        zahada: "V egyptské depresi Farafra, 570 kilometrů jihozápadně od Káhiry, se rozkládá poušť s bílými křídovými útvary, které vítr a písek vytvarovaly do podob připomínajících houby, ledovce i zvířata - krajina tak neobvyklá, že návštěvníkům připadá spíš mimozemská než pozemská.",
        historie: "Oblast byla vyhlášena chráněným územím roku 2002. Rozlehlá poušť o rozloze 300 čtverečních kilometrů zahrnuje písečné duny (součást Velkého písečného moře), útesy, vádí a oázy, s nejvyšším bodem El Qess Abú Said (353 m) a nejnižším Vádí Hennis (32 m).",
        legenda: "Beduínští průvodci neformálně pojmenovávají nejvýraznější skalní útvary podle jejich tvarů - připomínajících houby, kuřata, velbloudy nebo ledovce -, čímž vytvářejí neoficiální 'galerii' přírodních soch, kterou návštěvníci procházejí při nočních táborech pod hvězdami.",
        paranormalni: "Charakteristické tvary hub a ledovců vznikají diferenciální erozí napříč vrstvami křídových usazenin - měkčí vrstvy mizí rychleji než tvrdší, čímž vznikají dramaticky převislé a nestabilní siluety.",
        skepticke: "Bílé útvary jsou přírodní geologický jev vzniklý erozí větrem a pískem, ne pozůstatek starověké civilizace ani nadpřirozeného zásahu - poušť ale slouží jako útočiště pro ohrožené druhy včetně gazel rhim, gazel dorkas, berberských ovcí a několika druhů lišek, což z ní dělá stejně cennou přírodní rezervaci jako vizuální atrakci."
      },
      praktickeInfo: "Návštěva vyžaduje organizovaný výlet terénním vozidlem z Bahríja nebo Farafry, noční kempování mezi bílými skalami patří mezi nejoblíbenější zážitky návštěvníků.",
      zdroje: [
        { nazev: "Wikipedia: White Desert National Park", url: "https://en.wikipedia.org/wiki/White_Desert_National_Park", licence: "CC BY-SA" },
        { nazev: "Wikidata: White Desert National Park", url: "https://www.wikidata.org/wiki/Q2556953", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=White%20Desert%20Egypt", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Galerie soch z křídy", text: "Beduínští průvodci neformálně pojmenovávají nejvýraznější skalní útvary podle jejich tvarů - houby, kuřata, velbloudi či ledovce - a vytvářejí tak přírodní galerii uprostřed pouště." },
        { nazev: "Útočiště pro ohrožené druhy", text: "Navzdory extrémnímu prostředí poušť hostí několik ohrožených druhů včetně gazel rhim a dorkas, berberských ovcí a pouštních lišek." }
      ]
    }
  },
  {
    id: "ghadames-old-town",
    patch: {
      lead: "Město, kde se dá projít celou starou čtvrtí, aniž by člověk vyšel na slunce - díky krytým uličkám vedeným pod obytnými patry a terasám vyhrazeným jen pro ženy.",
      atmosfera: 3.8,
      popisy: {
        zahada: "Na hranici libyjské Sahary leží jedno z nejstarších předsaharských sídel na světě - archeologické důkazy naznačují osídlení už od 4. tisíciletí př. n. l., v místech, které Římané znali pod jménem Cydamus.",
        historie: "Prokonzul Lucius Cornelius Balbus město dobyl v 1. století př. n. l., stálou posádku zde zřídil císař Septimius Severus kolem roku 202 n. l. Po byzantské christianizaci v 6. století převzali kontrolu koncem 7. století muslimští Arabové a město se stalo klíčovým uzlem transsaharského obchodu i obchodu s otroky až do 19. století. Italská okupace trvala 1911-1951, poté následovala francouzská správa. Během libyjské občanské války roku 2011 utrpěla komunita Tuaregů etnické čistky.",
        legenda: "Městská architektura má pozoruhodné vertikální funkční rozdělení: přízemí sloužilo ke skladování zásob, první patro rodině, s převislými krytými uličkami vytvářejícími téměř podzemní síť průchodů, a nejvýše otevřené terasy vyhrazené pro ženy - systém navržený pro ochranu před spalujícím saharským létem.",
        paranormalni: "Díky krytým uličkám propojujícím obytná patra mohli obyvatelé procházet velkou částí staré čtvrti, aniž by museli vystoupit na přímé slunce - jedinečné urbanistické řešení extrémního pouštního klimatu.",
        skepticke: "Poškození během občanské války a pokračující chátrání kvůli vylidnění vedlo k zařazení na seznam Světového dědictví v ohrožení od roku 2016 - reálný, dobře zdokumentovaný problém, ne přehnaná obava, který ohrožuje jedinečnou architekturu zapsanou na seznam UNESCO už v roce 1986."
      },
      praktickeInfo: "Vzhledem k nestabilní bezpečnostní situaci v Libyi je nutné před cestou pečlivě ověřit aktuální doporučení ministerstva zahraničí.",
      zdroje: [
        { nazev: "Wikipedia: Ghadames", url: "https://en.wikipedia.org/wiki/Ghadames", licence: "CC BY-SA" },
        { nazev: "Wikidata: Ghadames", url: "https://www.wikidata.org/wiki/Q192237", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Ghadames%20Libya", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Město bez slunce", text: "Kryté uličky vedené pod obytnými patry umožňovaly obyvatelům procházet velkou částí staré čtvrti, aniž by museli vystoupit na přímé sluneční záření." },
        { nazev: "Terasy jen pro ženy", text: "Nejvyšší patro domů tvořily otevřené terasy vyhrazené výhradně pro ženy - vlastní prostor oddělený od uličního života dole." }
      ]
    }
  },
  {
    id: "band-e-amir-lakes",
    patch: {
      lead: "Šest jezer pojmenovaných po meči a otrokovi chalífy Alího, vzniklých přirozenými hrázemi, které si voda sama postavila z rozpuštěného vápence.",
      atmosfera: 4.0,
      popisy: {
        zahada: "V afghánské provincii Bamján leží šest jezer oddělených přírodními hrázemi z travertinu - vzácný typ jezerního systému, kde minerálně bohatá voda sama postavila stěny, které ji dnes zadržují.",
        historie: "Snahy o ochranu oblasti začaly v 70. letech 20. století, ale přerušil je konflikt. Park byl oficiálně vyhlášen prvním národním parkem Afghánistánu 22. května 2009 poté, co aktivista Abdullah Barat přesvědčil úředníky upřednostnit ochranu před plánovaným projektem vodní přehrady.",
        legenda: "Jméno 'Band-e Amir' znamená v darí 'Vládcova hráz' a podle některých odkazuje na Alího, čtvrtého chalífu islámu. Šest jezer nese jména z hazárského folklóru: Band-e Kambar (jezero Alího otroka), Band-e Zulfikár (jezero Alího meče), Band-e Gholaman (jezero otroků), Band-e Haibat, Band-e Panír a Band-e Pudina.",
        paranormalni: "Jezera vznikla, když voda s rozpuštěnými minerály prosakovala zlomy a puklinami a ukládala uhličitan vápenatý - postupně tak vybudovala travertinové stěny, které dnes tvoří přírodní hráze mezi jednotlivými jezery.",
        skepticke: "Spojení názvu s chalífou Alím je lidová etymologie typická pro region s hlubokou islámskou tradicí, ne historicky doložený fakt - geologický proces vzniku travertinových hrází je ale dobře zdokumentovaný a činí z Band-e Amir jeden ze světově vzácných příkladů přirozeně vzniklého jezerního systému tohoto typu."
      },
      praktickeInfo: "Park leží asi 75 km severozápadně od města Bamján poblíž Jakawlangu ve výšce kolem 2900 metrů, doporučuje se ověřit aktuální bezpečnostní situaci před cestou.",
      zdroje: [
        { nazev: "Wikipedia: Band-e Amir National Park", url: "https://en.wikipedia.org/wiki/Band-e_Amir_National_Park", licence: "CC BY-SA" },
        { nazev: "Wikidata: Band-e Amir National Park", url: "https://www.wikidata.org/wiki/Q613251", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Band-e%20Amir%20Afghanistan", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Hráze, které si postavila voda sama", text: "Šest jezer Band-e Amir odděluje přírodní travertinové hráze, které za tisíciletí vybudovala voda ukládající rozpuštěný vápenec ve zlomech skal." },
        { nazev: "Jezera pojmenovaná po chalífovi", text: "Podle hazárského folklóru nesou jednotlivá jezera jména odkazující na chalífu Alího, jeho meč a jeho otroka." }
      ]
    }
  },
  {
    id: "fushimi-inari-taisha",
    patch: {
      lead: "Svatyně s deseti tisíci branami torii, kde lišky slouží jako poslové bohyně rýže - a kde bohatství firem, které brány darovaly, lemuje celou horskou stezku.",
      atmosfera: 4.1,
      popisy: {
        zahada: "Nad Kjótem se táhne 233metrová hora protkaná tunelem z tisíců červených bran torii - svatyně založená roku 711 n. l. klanem Hata, přistěhovalců z korejských království Silla nebo Paekče, která postupem staletí proměnila místní božstvo Inari v celonárodního ochránce úrody.",
        historie: "Podle legendy vystřelil bohatý statkář šíp na mochi (rýžový koláček), který se proměnil v bílého ptáka - to vedlo k pěstování rýže na vrcholu hory. Svatyně získala císařský patronát během raného období Heian a od roku 1871 do 1946 měla nejvyšší vládní status mezi svatyněmi.",
        legenda: "Nejznámějším prvkem je Senbon Torii ('tisíc torii') - podél hlavní stezky stojí kolem 800 bran, v celém areálu jich je přibližně 10 000. Každou bránu darovala japonská firma jako vděčnou obětinu, čímž vznikly tunelovité průchody vedoucí vzhůru horou. Zvyk se rozšířil během období Edo (1603-1868).",
        paranormalni: "Lišky slouží jako poslové bohyně Inari a objevují se po celé svatyni jako sochy, často držící v tlamě klíč (symbolizující rýžové sýpky) nebo drahokam - ztělesnění hlubokého spojení mezi uctíváním Inari a zemědělskou prosperitou.",
        skepticke: "Inari zůstává především kami rýže a zemědělství, ačkoli ho jako patrona obchodu uctívají i obchodníci - toto rozšíření významu je historicky doložený vývoj kultu, ne pozdější mýtus. Svatyně dodnes stojí v čele přibližně 32 000 poboček po celém Japonsku, propojených praxí božského šíření kultu."
      },
      praktickeInfo: "Areál je volně přístupný nepřetržitě, výstup na vrchol hory trvá zhruba 2-3 hodiny, doporučuje se navštívit brzy ráno nebo večer kvůli menšímu davu.",
      zdroje: [
        { nazev: "Wikipedia: Fushimi Inari-taisha", url: "https://en.wikipedia.org/wiki/Fushimi_Inari-taisha", licence: "CC BY-SA" },
        { nazev: "Wikidata: Fushimi Inari-taisha", url: "https://www.wikidata.org/wiki/Q714828", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Fushimi%20Inari%20Taisha%20Kyoto", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Deset tisíc bran od vděčných firem", text: "Každou z přibližně 10 000 bran torii ve svatyni darovala japonská firma jako vděčnou obětinu za obchodní úspěch - zvyk trvající od období Edo dodnes." },
        { nazev: "Lišky nesoucí klíče od sýpek", text: "Sochy lišek, poslů bohyně Inari, po celé svatyni drží v tlamě klíče symbolizující rýžové sýpky nebo drahokamy představující prosperitu." }
      ]
    }
  },
  {
    id: "golconda-fort",
    patch: {
      lead: "Pevnost, jejíž trezor kdysi hostil diamanty Koh-i-noor i Hope - a kde tlesknutí u brány je slyšet varovně o kilometr dál díky dokonalé akustice.",
      atmosfera: 4.0,
      popisy: {
        zahada: "Nedaleko Hajdarábádu stojí pevnost, jejíž jméno se v angličtině 19. století stalo synonymem pro nesmírné bohatství - díky sousedství s dolem Kollur, odkud pocházely jedny z nejproslulejších diamantů světa.",
        historie: "Pevnost původně postavil ve 11. století kákatíjský vládce Pratáparudra jako malý hliněný hrad. Později ji získalo Bahmanské království a sultán Kulí Kutb Šáh ji kolem roku 1518 opevnil a učinil hlavním městem sultanátu Golkonda. Zůstala regionálním sídlem až do roku 1590, kdy se hlavní město přesunulo do Hajdarábádu. Padla mughalskému císaři Aurangzébovi po osmiměsíčním obléhání roku 1687.",
        legenda: "Pevnost měla trezor, kde byly kdysi uloženy proslulé diamanty Koh-i-noor a Hope spolu s dalšími drahokamy. Mezi vzácné kameny, o nichž se věří, že byly vytěženy v regionu, patří Hope Diamond, Koh-i-noor i Regent Diamond. Do 80. let 19. století se slovo 'Golconda' stalo obecným anglickým výrazem pro jakýkoli mimořádně bohatý zdroj či důl.",
        paranormalni: "U brány Fateh Darwaza funguje pozoruhodný akustický jev: tlesknutí rukou na určitém místě pod kupolí u vchodu se odráží a je zřetelně slyšet v pavilonu Bala Hisar téměř kilometr daleko - důmyslný stavební prvek sloužící jako varovný systém proti útokům.",
        skepticke: "Přesný původ nejproslulejších diamantů připisovaných regionu Golkonda je založen na historických obchodních záznamech a tradici, ne na jistém geologickém dokladu pro každý jednotlivý kámen - akustický jev u brány Fateh Darwaza je ale ověřitelný fyzikální fenomén, který si návštěvníci mohou sami vyzkoušet dodnes."
      },
      praktickeInfo: "Pevnost je veřejně přístupná s placeným vstupem, večerní light show vypráví historii pevnosti a diamantového obchodu.",
      zdroje: [
        { nazev: "Wikipedia: Golconda", url: "https://en.wikipedia.org/wiki/Golconda", licence: "CC BY-SA" },
        { nazev: "Wikidata: Golconda Fort", url: "https://www.wikidata.org/wiki/Q4141623", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Golconda%20Fort%20Hyderabad", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Trezor s Koh-i-noorem", text: "Trezor pevnosti kdysi hostil proslulé diamanty Koh-i-noor a Hope, než byly odvezeny a staly se součástí korunovačních klenotů a sbírek po celém světě." },
        { nazev: "Tlesknutí slyšet o kilometr dál", text: "Akustická konstrukce brány Fateh Darwaza dokáže přenést zvuk tlesknutí až do pavilonu vzdáleného téměř kilometr - důmyslný obranný varovný systém." }
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
