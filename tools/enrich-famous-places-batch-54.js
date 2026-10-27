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
    id: "wistman-s-wood",
    patch: {
      nazev: "Wistman's Wood",
      lead: "Prastarý zakrslý dubový les na Dartmooru, kde zkroucené stromy rostou mezi balvany pokrytými mechem - a podle pověsti tudy štve ďábel své přízračné psy.",
      atmosfera: 4.8,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Duby jsou nízké a pokroucené, jejich větve visí mechem a lišejníky. Rostou mezi žulovými balvany ve výšce kolem 400 metrů na holém vřesovišti. Les působí, jako by se v něm zastavil čas.",
        historie: "Jde o pozůstatek lesa, který kdysi pokrýval část Dartmooru. Vzácné mechy a lišejníky z něj dělají chráněnou přírodní rezervaci. V 18. století romantici tvrdili, že jde o posvátný háj druidů.",
        legenda: "Podle pověsti vyrážejí z lesa wisht hounds - přízrační černí psi, které vede ďábel na divokém honu přes vřesoviště. Kdo je potká, prý do roka zemře. Mezi balvany se údajně plazí neobvykle mnoho zmijí.",
        paranormalni: "Návštěvníci popisují náhlou mlhu, ticho a pocit, že je někdo sleduje. Les se objevuje v mnoha knihách o strašidelné Anglii.",
        skepticke: "Spojení s druidy nemá archeologický podklad. Atmosféru vytváří mlha, zkroucené stromy a izolace vřesoviště."
      },
      praktickeInfo: "Les je asi 2,5 km od parkoviště Two Bridges na Dartmooru, cesta trvá asi 40 minut po kamenité stezce. Nelezte po balvanech - poškozujete vzácné mechy. Počasí na Dartmooru se rychle mění, vezměte mapu a nepromokavé oblečení.",
      pribehy: [
        { nazev: "Divoký hon", text: "Ďábel prý z lesa vyráží se smečkou přízračných psů a štve je přes Dartmoor." },
        { nazev: "Háj druidů", text: "Romantici v 18. století tu viděli posvátný háj druidů - archeologie to nepotvrzuje." }
      ]
    }
  },
  {
    id: "dartmoor-prison",
    patch: {
      nazev: "Věznice Dartmoor",
      lead: "Žulová věznice v mlhou zahaleném Princetownu, postavená pro francouzské zajatce Napoleonových válek - s krvavým incidentem z roku 1815 a pověstí o duchách vězňů.",
      atmosfera: 4.6,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "jen muzeum",
      popisy: {
        zahada: "Věznice stojí v jednom z nejvýše položených a nejmlžnějších míst Anglie. Šedé žulové budovy uprostřed vřesoviště vytvářejí pochmurný obraz izolace, který inspiroval i Arthura Conana Doyla.",
        historie: "Věznice byla postavena v letech 1806-1809 pro francouzské válečné zajatce, později v ní byli i Američané z války roku 1812. V dubnu 1815 stráže střílely do amerických zajatců a několik jich zabily. Od roku 1850 sloužila jako trestnice. V roce 2024 byla kvůli zvýšené hladině radonu vyklizena.",
        legenda: "Vypráví se o duších francouzských a amerických zajatců, které je vidět v mlze kolem zdí. Na hřbitově zajatců u věznice prý v noci zní kroky.",
        paranormalni: "Návštěvníci muzea a bývalí zaměstnanci popisují zvuky a stíny. Princetown je oblíbený cíl duchařských prohlídek.",
        skepticke: "Mlha, izolace a smutná historie místa přirozeně podporují duchařské příběhy. Doložené jevy chybí."
      },
      praktickeInfo: "Princetown je uprostřed Dartmooru, asi 40 minut autem z Plymouthu. Věznici samotnou navštívit nelze, ale Dartmoor Prison Museum v Princetownu ukazuje její historii. V Princetownu je i informační centrum národního parku.",
      pribehy: [
        { nazev: "Zajatci z dvou válek", text: "V jedné věznici byli zavřeni francouzští vojáci Napoleona i američtí námořníci z války roku 1812." },
        { nazev: "Sherlock v mlze", text: "Ponurá krajina kolem věznice inspirovala Arthura Conana Doyla v Psu baskervillském." }
      ]
    }
  },
  {
    id: "ouvrage-hackenberg",
    patch: {
      nazev: "Pevnost Hackenberg (Maginotova linie)",
      lead: "Největší pevnost Maginotovy linie - podzemní město s kilometry chodeb, elektrickým vláčkem a kasárnami pro více než tisíc vojáků ukryté v kopci v Lotrinsku.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup s průvodcem",
      popisy: {
        zahada: "Pod kopcem vede asi 10 km chodeb, které spojují bojové bloky, elektrárnu, kuchyně, nemocnici a muniční sklady. Po hlavní chodbě jezdí elektrický vláček.",
        historie: "Pevnost byla postavena v letech 1929-1935 jako součást francouzské Maginotovy linie. V roce 1940 ji Němci obešli přes Belgii, a tak skutečnému útoku nečelila. V listopadu 1944 o ni bojovaly americké jednotky s Němci, kteří ji drželi.",
        legenda: "Místní vyprávějí o zapomenutých chodbách a o vojácích, kteří v pevnosti zůstali. Pevnost je symbolem hesla „neprojdou“, které se nikdy nenaplnilo.",
        paranormalni: "Návštěvníci popisují v dlouhých tichých chodbách pocit tísně. Doložené jevy nejsou.",
        skepticke: "Maginotova linie nebyla prolomena, ale obejita - pevnost tedy fungovala technicky, selhala strategie."
      },
      praktickeInfo: "Hackenberg je u vesnice Veckring, asi 30 km severně od Met. Prohlídky pořádá místní spolek, trvají asi 2 hodiny a zahrnují jízdu vláčkem. Uvnitř je kolem 12 °C. Termíny prohlídek ověřte předem.",
      pribehy: [
        { nazev: "Vláček v kopci", text: "Po hlavní chodbě dlouhé několik kilometrů jezdí dodnes elektrický vláček." },
        { nazev: "Pevnost, kterou obešli", text: "Němci v roce 1940 pevnost obešli přes Belgii, a tak nikdy nečelila útoku, pro který byla postavena." }
      ]
    }
  },
  {
    id: "fort-vaux",
    patch: {
      nazev: "Pevnost Vaux",
      lead: "Malá pevnost u Verdunu, kde se v červnu 1916 posádka bránila týden v podzemí bez vody - a poslední zprávu odnesl poštovní holub Vaillant.",
      atmosfera: 4.7,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "V úzkých chodbách pevnosti se v červnu 1916 bojovalo granáty a plamenomety. Na stěnách zůstaly stopy po boji a pamětní desky.",
        historie: "Od 1. do 7. června 1916 bránil major Sylvain-Eugène Raynal pevnost proti německému útoku. Posádka bojovala v chodbách a nakonec se vzdala kvůli žízni. Poslední zprávu do Verdunu odnesl holub Vaillant, který po přeletu přes plyn zemřel. Raynal byl za obranu oceněn i nepřítelem - německý korunní princ mu prý jako projev úcty daroval šavli.",
        legenda: "Vypráví se, že v chodbách je slyšet kroky a hlasy vojáků. Holub Vaillant se stal symbolem Verdunu.",
        paranormalni: "Návštěvníci popisují v nejhlubších částech pevnosti chlad a tíseň.",
        skepticke: "Chlad je dán betonovým podzemím. Pocity odpovídají znalosti tragického boje."
      },
      praktickeInfo: "Pevnost Vaux leží asi 10 km severovýchodně od Verdunu, kousek od pevnosti Douaumont. Prohlídka trvá asi hodinu. Kombinujte s Douaumontem, kostnicí a Mémorial de Verdun.",
      pribehy: [
        { nazev: "Poslední holub", text: "Holub Vaillant odnesl poslední zprávu z obklíčené pevnosti a po přeletu přes plyn zemřel." },
        { nazev: "Kapitulace z žízně", text: "Posádka bojovala v chodbách celý týden a vzdala se, až když jí úplně došla pitná voda." }
      ]
    }
  },
  {
    id: "vauquois-mine-craters",
    patch: {
      nazev: "Krátery u Vauquois",
      lead: "Kopec v Argonnách, pod nímž Francouzi a Němci tři roky hloubili tunely a odpálili stovky min - vesnice zmizela a zůstala jen řada obřích kráterů.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné, tunely občas",
      popisy: {
        zahada: "Hřeben kopce je rozdělen řadou obrovských kráterů, které oddělovaly francouzské a německé linie. Pod zemí vedou kilometry chodeb, kde se bojovalo dynamitem.",
        historie: "V letech 1915-1918 zde probíhala minová válka. Obě strany odpálily přes 500 min. V květnu 1916 německá mina zabila 108 francouzských vojáků. Vesnice Vauquois byla zcela zničena a nikdy nebyla obnovena na původním místě.",
        legenda: "Místní vyprávějí o vojácích, kteří zůstali pohřbeni v tunelech a jejichž ostatky nebyly nikdy nalezeny.",
        paranormalni: "Návštěvníci popisují tíživou atmosféru nad krátery a v tunelech. Doložené jevy nejsou.",
        skepticke: "Tíseň vyvolává skutečná tragédie a představa tisíců mužů pod zemí."
      },
      praktickeInfo: "Vauquois je asi 25 km severozápadně od Verdunu. Krátery jsou volně přístupné. Tunely zpřístupňuje spolek Les Amis de Vauquois obvykle první neděli v měsíci. Vezměte pevnou obuv a nepohybujte se mimo cesty.",
      pribehy: [
        { nazev: "Vesnice, která zmizela", text: "Pod kopcem bylo odpáleno tolik min, že z vesnice nezůstal ani kámen." },
        { nazev: "Válka pod zemí", text: "Vojáci kopali tunely tak blízko nepříteli, že slyšeli jeho krumpáče." }
      ]
    }
  },
  {
    id: "la-coupole-bunker",
    patch: {
      nazev: "La Coupole",
      lead: "Obří betonová kupole u Saint-Omer, odkud chtěli nacisté odpalovat rakety V-2 na Londýn - nikdy nebyla dokončena a dnes je v ní muzeum a planetárium.",
      atmosfera: 4.5,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Kupole má průměr 71 metrů a silnou betonovou vrstvu. Pod ní jsou tunely a sály, kde se měly připravovat rakety V-2 k odpalu.",
        historie: "Nacisté začali bunkr stavět v roce 1943 s pomocí nucených pracovníků. Spojenecké bombardování stavbu poškodilo, takže nikdy nebyla dokončena a rakety odsud nevzlétly. Dnes je v La Coupole muzeum o válce, raketách a dobývání vesmíru, včetně planetária.",
        legenda: "Místní vyprávějí o tajných chodbách, které vedou dál, než ukazuje muzeum. Spekulace o ukrytých raketách nejsou podložené.",
        paranormalni: "Paranormální jevy nejsou hlášeny. Silný je kontrast mezi válkou a pozdějším vesmírným programem.",
        skepticke: "Muzeum ukazuje i nucenou práci a souvislost s pozdějším vesmírným výzkumem bez mýtů."
      },
      praktickeInfo: "La Coupole je u Helfautu, asi 5 km od Saint-Omer a hodinu autem z Calais. Prohlídka trvá 2-3 hodiny. Kombinujte s Blockhaus d'Éperlecques nedaleko.",
      pribehy: [
        { nazev: "Kupole, která neodpálila", text: "Spojenecké nálety bunkr poškodily tak, že z něj nikdy nevzlétla ani jedna raketa." },
        { nazev: "Od války ke hvězdám", text: "Muzeum ukazuje, jak raketová technika nacistů vedla k pozdějším vesmírným letům." }
      ]
    }
  },
  {
    id: "bunker-valentin",
    patch: {
      nazev: "Bunkr Valentin",
      lead: "Obří nedokončený bunkr na montáž ponorek u Brém, který stavěly tisíce nuceně nasazených - dnes památník jejich utrpení.",
      atmosfera: 4.7,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "zdarma",
      popisy: {
        zahada: "Betonová hala na břehu Vesery je dlouhá přes 400 metrů. Strop je silný až 7 metrů. Uvnitř je obrovský prázdný prostor, který měl sloužit jako montážní linka pro ponorky.",
        historie: "Stavba začala v roce 1943. Pracovalo na ní na 10 000 nuceně nasazených, válečných zajatců a vězňů koncentračních táborů. Při stavbě zemřelo podle odhadů přes tisíc lidí. Bunkr nebyl nikdy dokončen. V roce 2015 zde byl otevřen památník.",
        legenda: "Místní vyprávějí o pohřbených dělnících v betonu. Žádné nálezy to nepotvrzují, ale smrt při stavbě je doložená.",
        paranormalni: "Návštěvníci popisují v obrovské hale tíživé ticho.",
        skepticke: "Památník se drží historických faktů - utrpení nuceně nasazených je dostatečně doložené."
      },
      praktickeInfo: "Bunkr je v Bremen-Farge, asi 40 minut autem nebo vlakem z centra Brém. Vstup je zdarma, k dispozici je audio průvodce. Prohlídka trvá 1-2 hodiny.",
      pribehy: [
        { nazev: "Továrna, která nevyrobila nic", text: "Bunkr měl vyrábět ponorky, ale nikdy nebyl dokončen." },
        { nazev: "Tisíce rukou", text: "Na stavbě pracovalo kolem deseti tisíc lidí z celé Evropy." }
      ]
    }
  },
  {
    id: "prora",
    patch: {
      nazev: "Prora",
      lead: "Čtyři a půl kilometru dlouhý nacistický rekreační kolos na Rujáně, kde měly dovolenkovat desítky tisíc dělníků - nikdy neviděl jediného rekreanta.",
      atmosfera: 4.4,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné, muzeum placené",
      popisy: {
        zahada: "Podél pláže se táhne šest stejných šestipatrových bloků. Monotónní řada budov působí jako zastavená vize masové turistiky totalitního státu.",
        historie: "Komplex začal stavět nacistický program Kraft durch Freude (Síla skrze radost) v roce 1936. Měl nabídnout tisíce lůžek s výhledem na moře. Válka stavbu zastavila. Po válce areál využívala východoněmecká armáda. Dnes jsou části přestavěné na byty, hotely a ubytovnu mládeže.",
        legenda: "Místní vyprávějí o prázdných chodbách a přízračných rekreantech, kteří nikdy nepřijeli.",
        paranormalni: "Prázdné bloky za šera vytvářejí silnou atmosféru opuštění. Doložené jevy chybí.",
        skepticke: "Atmosféra vychází z architektury a historie, ne z paranormálních jevů."
      },
      praktickeInfo: "Prora je na ostrově Rujána u Binzu, asi 3 hodiny autem z Berlína. Dokumentační centrum ukazuje historii areálu. Pláž je volně přístupná. Nejlépe se to dá spojit s křídovými útesy v NP Jasmund.",
      pribehy: [
        { nazev: "Dovolená, která nikdy nebyla", text: "Komplex postavený pro dovolenou dělníků nikdy nepřivítal ani jednoho rekreanta." },
        { nazev: "Kasárna místo hotelu", text: "Po válce areál obsadila armáda a místo turistů tu bydleli vojáci." }
      ]
    }
  },
  {
    id: "branitz-pyramids",
    patch: {
      nazev: "Pyramidy v Branitz",
      lead: "Zemní pyramidy v parku knížete Pücklera u Chotěbuzi - jedna stojí uprostřed jezera a skrývá hrob výstředního cestovatele a zahradního umělce.",
      atmosfera: 4.4,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "park zdarma, zámek placený",
      popisy: {
        zahada: "V krajinářském parku stojí dvě zemní pyramidy. Jezerní pyramida (Tumulus) vystupuje z vody, zemní pyramida má vyhlídkovou plošinu. Severoevropský park s egyptskými tvary působí neobvykle.",
        historie: "Kníže Hermann von Pückler-Muskau byl cestovatel, spisovatel a zahradní architekt, který procestoval Egypt a Blízký východ. Park v Branitz budoval od 50. let 19. století. Po smrti v roce 1871 byl pohřben v jezerní pyramidě, kam byly později uloženy i ostatky jeho manželky Lucie.",
        legenda: "Vypráví se, že si Pückler přál, aby jeho tělo bylo v rakvi rozpuštěno chemikáliemi a nic z něj nezůstalo. Pověsti o egyptských rituálech jsou spíše fantazií.",
        paranormalni: "Paranormální jevy nejsou hlášeny. Zvláštní je kontrast mezi parkem a egyptskou symbolikou.",
        skepticke: "Pyramidy jsou romantický prvek krajinářského parku 19. století, ne tajemné stavby. Pověsti o rituálech nejsou doložené."
      },
      praktickeInfo: "Park Branitz je na okraji Chotěbuzi (Cottbus), asi 1,5 hodiny autem z Berlína a 2,5 hodiny z Prahy. Park je volně přístupný, zámek a muzeum jsou placené. Na jezerní pyramidu se nevstupuje.",
      pribehy: [
        { nazev: "Hrob v jezeře", text: "Kníže Pückler odpočívá v pyramidě, která vystupuje přímo z vody." },
        { nazev: "Egypt v Lužici", text: "Cestovatel si z Egypta přivezl inspiraci pro pyramidy uprostřed německého parku." }
      ]
    }
  },
  {
    id: "sphinx-observatory",
    patch: {
      nazev: "Observatoř Sphinx (Jungfraujoch)",
      lead: "Vědecká observatoř na skále ve výšce 3 571 metrů nad Aletschským ledovcem - nejvyšší vyhlídka „Top of Europe“, kam vede železnice tunelem skrz Eiger.",
      atmosfera: 4.6,
      paranormalniAktivita: "žádná",
      historickaDolozenost: "vynikající",
      nebezpecnost: "střední",
      pristupnost: "placený vstup, vlak",
      popisy: {
        zahada: "Observatoř stojí na skalním vrcholu jako stanice na hranici světa. Z vyhlídkové terasy je vidět Aletschský ledovec, nejdelší v Alpách. Vzduch je řídký a počasí se mění během minut.",
        historie: "Železnice Jungfraubahn byla dokončena v roce 1912 a vede tunelem skrz Eiger a Mönch. Observatoř Sphinx byla otevřena v roce 1937 a dodnes slouží výzkumu atmosféry a klimatu.",
        legenda: "Horské pověsti vyprávějí o duchu, který straží ledovec, a o lidech, kteří se v mlze ztratili. Severní stěna Eigeru je známá jako jedna z nejnebezpečnějších horolezeckých stěn.",
        paranormalni: "Paranormální jevy nejsou hlášeny. Výška může způsobit závratě a únavu.",
        skepticke: "Výšková nemoc a rychle se měnící počasí jsou skutečná rizika, nikoli záhady."
      },
      praktickeInfo: "Na Jungfraujoch jezdí vlak z Interlakenu přes Grindelwald nebo Lauterbrunnen a Kleine Scheidegg. Cesta trvá asi 2 hodiny a jízdenka je drahá. Vezměte teplé oblečení, sluneční brýle a pohybujte se pomalu kvůli výšce. Zkontrolujte předem počasí - v mlze není nic vidět.",
      pribehy: [
        { nazev: "Vlak skrz Eiger", text: "Železnice vede tunelem uvnitř hory Eiger a zastavuje u oken ve skalní stěně." },
        { nazev: "Laboratoř v oblacích", text: "Vědci tu desítky let měří změny atmosféry a klimatu." }
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
