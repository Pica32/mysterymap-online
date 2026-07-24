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
    id: "waqrapukara",
    patch: {
      lead: "'Rohatá pevnost' na okraji strmého kaňonu v peruánských Andách, kterou Inkové převzali od původních obyvatel a proměnili ve svatyni.",
      gps: { lat: -14.02286, lon: -71.69361 },
      atmosfera: 4.0,
      popisy: {
        zahada: "Ve výšce přes 4300 metrů nad mořem, na okraji strmého kaňonu poblíž řeky Apurímac, stojí komplex, jehož kečuánské jméno v překladu znamená 'rohatá pevnost' - podle dvou skalních výběžků připomínajících rohy nad okolní krajinou.",
        historie: "Kruhové stavby na místě původně vybudoval lid Kančis, než místo dobyli a obsadili Inkové a začlenili ho do své říše.",
        legenda: "Přestože nese jméno 'pevnost', místo je označováno jako incká svatyně - sloužilo náboženským nebo obřadním účelům v širším kontextu inckého osídlení regionu, ne jen jako vojenské opevnění.",
        paranormalni: "Dramatická poloha na okraji kaňonu, s příkrými srázy na několika stranách, dodává místu i dnes silně obřadní, téměř nadpozemský dojem, díky kterému patří mezi méně známé, ale vizuálně nejpůsobivější incké lokality.",
        skepticke: "V červenci 2017 ministerstvo kultury Peru oficiálně vyhlásilo Waqrapukaru národní kulturní památkou, čímž formálně uznalo její archeologický význam - status založený na solidním výzkumu, ne na turistické legendě."
      },
      praktickeInfo: "K místu vede náročnější treková stezka z okolních andských vesnic, doporučuje se počítat s vysokou nadmořskou výškou a fyzicky náročným terénem.",
      zdroje: [
        { nazev: "Wikipedia: Waqrapukara", url: "https://en.wikipedia.org/wiki/Waqrapukara", licence: "CC BY-SA" },
        { nazev: "Wikidata: Waqrapukara", url: "https://www.wikidata.org/wiki/Q15949935", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Waqrapukara%20Peru", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Rohy nad kaňonem", text: "Jméno místa odkazuje na dva skalní výběžky připomínající rohy, které se tyčí nad dramatickým kaňonem řeky Apurímac." },
        { nazev: "Od pevnosti Kančisů ke svatyni Inků", text: "Kruhové stavby původně vybudoval lid Kančis, teprve po incké invazi se místo proměnilo v součást náboženského a obřadního systému říše." }
      ]
    }
  },
  {
    id: "fort-samaipata",
    patch: {
      lead: "Obří vytesaná skála, kterou postupně přetvářely tři odlišné kultury - a jejíž přesný obřadní účel dodnes badatelé plně nerozklíčovali.",
      atmosfera: 4.1,
      popisy: {
        zahada: "V bolivijských horách leží obří skalní sedlo téměř kompletně pokryté rytinami inckého i předinckého původu - a přestože se místu říká 'pevnost', jeho skutečný účel zůstává jen částečně objasněný.",
        historie: "Lokalitu jako první osídlil kolem roku 300 n. l. arawacký lid Čané v období Mojocoyas a začal tvarovat obřadní skálu. Inkové místo začlenili do své říše až pozdě, za vlády Tupaca Yupanquiho (1471-1493), a proměnili ho ve správní a náboženské centrum ve výšce asi 1900 metrů. Španělé sem formálně dorazili roku 1615, postavili zde budovy, ale pevnost opustili už roku 1618 a založili blízké město Samaipata.",
        legenda: "Obřadní sektor zahrnuje rytiny geometrických a zvířecích motivů, zdi, výklenky a charakteristické kanálkovité rytiny zvané 'páteř hada'. Nejvýznamnějším prvkem je 18 vytesaných výklenků na nejvyšším bodě, označovaných jako 'sbor kněží' - pravděpodobně sloužily jako obřadní sezení.",
        paranormalni: "Navzdory názvu 'pevnost' fungovalo místo jako mnohostranný obřadní, správní a obytný komplex - náměstí, velká obřadní budova kallanka a dům žen Acllahuasi naznačují, že šlo o skutečné provinční hlavní město, ne jen vojenskou stavbu.",
        skepticke: "Přesný obřadní účel mnoha vytesaných prvků zůstává badateli jen částečně pochopený, ne definitivně vyřešený - to ale nesnižuje solidnost archeologického datování tří po sobě jdoucích kulturních vrstev, jen ukazuje, že interpretace symbolického významu je náročnější než datování samotné stavby."
      },
      praktickeInfo: "Naleziště je přístupné s placeným vstupem nedaleko města Samaipata, doporučuje se místní průvodce pro plné pochopení komplexní historie tří kultur.",
      zdroje: [
        { nazev: "Wikipedia: El Fuerte de Samaipata", url: "https://en.wikipedia.org/wiki/El_Fuerte_de_Samaipata", licence: "CC BY-SA" },
        { nazev: "Wikidata: El Fuerte de Samaipata", url: "https://www.wikidata.org/wiki/Q876451", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=El%20Fuerte%20de%20Samaipata", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Tři kultury, jedna skála", text: "Obřadní skálu postupně tvarovaly tři odlišné kultury - Čané, Inkové a nakonec Španělé - každá zanechala vlastní stopu na stejném místě." },
        { nazev: "Sbor kněží vytesaný do kamene", text: "Osmnáct výklenků na nejvyšším bodě skály, nazývaných 'sbor kněží', pravděpodobně sloužilo jako obřadní sezení, jehož přesný účel badatelé stále zkoumají." }
      ]
    }
  },
  {
    id: "sulaiman-too-sacred-mountain",
    patch: {
      lead: "Posvátná hora, kde ženy dodnes prolézají otvorem ve skále, aby počaly zdravé dítě - a která mohla být Ptolemaiovou bájnou 'Kamennou věží' na Hedvábné stezce.",
      atmosfera: 4.3,
      popisy: {
        zahada: "Nad kyrgyzským městem Oš se zvedá hora, kterou UNESCO označuje za nejúplnější příklad posvátné hory kdekoli ve Střední Asii, uctívanou po několik tisíciletí - a badatelé se domnívají, že jde možná o Ptolemaiovu proslulou 'Kamennou věž', starověký milník na Hedvábné stezce označující polovinu cesty mezi Evropou a Asií.",
        historie: "Hora nese islámský náboženský význam jako svatyně proroka Sulejmana (Šalomouna), uctívaného v Koránu. Na nejvyšším vrcholu stojí malá mešita, kterou nechal roku 1510 postavit Bábur.",
        legenda: "Podle místní tradice ženy, které vystoupí ke svatyni a prolezou otvorem v posvátné skále, porodí zdravé dítě. Stromy a keře po celé hoře zdobí modlitební praporky - kousky látky sloužící jako duchovní obětiny.",
        paranormalni: "Areál zahrnuje i Národní historicko-archeologické muzeum postavené v sovětské éře, které prezentuje regionální historii a archeologické nálezy z hory i okolí.",
        skepticke: "Spojení s Ptolemaiovou 'Kamennou věží' zůstává badatelskou hypotézou založenou na starověkých záznamech, ne definitivně potvrzeným faktem - jistá je ale mnohatisíciletá kontinuita náboženského uctívání hory napříč různými érami a náboženstvími, potvrzená zápisem na seznam UNESCO v roce 2009."
      },
      praktickeInfo: "Hora je součástí města Oš a snadno přístupná pěší stezkou, na vrcholu stojí malá mešita, areál zahrnuje i muzejní komplex.",
      zdroje: [
        { nazev: "Wikipedia: Sulayman Mountain", url: "https://en.wikipedia.org/wiki/Sulayman_Mountain", licence: "CC BY-SA" },
        { nazev: "Wikidata: Sulaiman-Too", url: "https://www.wikidata.org/wiki/Q750190", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Sulaiman-Too%20Osh%20Kyrgyzstan", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Otvor ve skále pro plodnost", text: "Podle místní tradice ženy, které prolezou úzkým otvorem v posvátné skále na vrcholu, mají počít a porodit zdravé dítě." },
        { nazev: "Možná bájná Kamenná věž", text: "Badatelé spekulují, že hora může odpovídat Ptolemaiově proslulé 'Kamenné věži', starověkému milníku označujícímu polovinu cesty mezi Evropou a Asií na Hedvábné stezce." }
      ]
    }
  },
  {
    id: "ait-benhaddou",
    patch: {
      lead: "Hliněné pevnostní město, kde natočili přes třicet filmů včetně Gladiátora - postavené technikou, kterou déšť pomalu rozpouští už osm století.",
      atmosfera: 4.2,
      popisy: {
        zahada: "V marockém údolí Ounila stojí opevněné hliněné město ksar, strategicky umístěné na starých saharských obchodních trasách od dob almorávidské éry v 11. století - a jeho autentická architektura z ním udělala jednu z nejoblíbenějších filmových kulis světa.",
        historie: "Dnešní stavby pocházejí ze 17. století a dál, přestože využívají stavební techniky staré staletí. Osada sloužila jako klíčový bod na cestě mezi Saharou a Marrákeší, po ztrátě strategického významu ve 20. století populace klesla a většina obyvatel dnes žije v moderní vesnici na druhém břehu řeky.",
        legenda: "Ksar zahrnuje obydlí různé velikosti od skromných domů po vysoké stavby, spolu s mešitami, kasbami a karavanserajemi. Charakteristickým rysem je stavba z nabíjené hlíny, cihel a dřeva - materiálů vyžadujících neustálou údržbu, protože je déšť postupně rozpouští. Vyšší budovy používaly nabíjenou hlínu v nižších patrech a lehčí cihly nahoře, aby snížily zatížení stěn.",
        paranormalni: "Přes 30 filmových produkcí využilo tuto lokalitu, včetně Lawrence z Arábie (1962), Gladiátora (2000), Království nebeského (2005) a seriálu Hra o trůny - autentická hliněná architektura poskytla věrohodné prostředí pro historické velkofilmy napříč desetiletími.",
        skepticke: "Nutnost neustálé údržby proti erozi deštěm je reálný, dobře zdokumentovaný technický problém tradiční hliněné architektury, ne mýtus - od roku 1987 je ksar na seznamu UNESCO, což pomáhá financovat opravy a udržet stavbu při životě navzdory přirozenému chátrání materiálu."
      },
      praktickeInfo: "Areál je volně přístupný, doporučuje se počítat s vyšší turistickou návštěvností kvůli filmové slávě, nejlepší světlo pro fotografování bývá při ranním nebo večerním slunci.",
      zdroje: [
        { nazev: "Wikipedia: Aït Benhaddou", url: "https://en.wikipedia.org/wiki/Ait_Benhaddou", licence: "CC BY-SA" },
        { nazev: "Wikidata: Aït Benhaddou", url: "https://www.wikidata.org/wiki/Q309436", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Ait%20Benhaddou%20Morocco", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Hliněné město proti dešti", text: "Stavba z nabíjené hlíny a cihel vyžaduje neustálou údržbu, protože ji déšť postupně rozpouští - výzva, které čelí obyvatelé i restaurátoři už po staletí." },
        { nazev: "Filmová kulisa přes 30 produkcí", text: "Autentická hliněná architektura posloužila jako kulisa pro přes třicet filmových a televizních produkcí, od Lawrence z Arábie po Hru o trůny." }
      ]
    }
  },
  {
    id: "jokhang-temple",
    patch: {
      lead: "Chrám postavený tam, kam dopadl králův klobouk - podle legendy přesně na místě, kde se z jezera vynořila bílá stúpa.",
      gps: { lat: 29.65306, lon: 91.0475 },
      atmosfera: 4.4,
      popisy: {
        zahada: "V srdci tibetské Lhasy stojí nejposvátnější buddhistický chrám celého Tibetu - a podle legendy vznikl přesně na místě, kam král hodil svůj klobouk se slibem, že tam postaví svatyni.",
        historie: "Král Songcän Gampo nechal Jókhang postavit kolem roku 652 n. l. jako součást plánu na výstavbu dvanácti chrámů napříč Tibetem. Chrám měl ukrýt posvátné buddhistické sochy přivezené dvěma královými manželkami - Džowo Mikjö Dordže (sochu Buddhy Akšóbhji) od nepálské princezny Bhrikuti a Džowo Šákjamuni (sochu mladého Buddhy Šákjamuniho) od čínské princezny Wen-čcheng.",
        legenda: "Podle tradice král Songcän Gampo hodil před sebe svůj klobouk se slibem, že tam, kam dopadne, postaví chrám. Klobouk dopadl do jezera, kde se náhle vynořila bílá stúpa, nad kterou pak chrám vznikl. Alternativní verze legendy připisuje založení stavby přímo královně Bhrikuti, která chtěla uctít svou sochu.",
        paranormalni: "Jókhang představuje 'srdce Lhasy' a je považován za nejposvátnější buddhistické místo Tibetu - poutníci sem putují z velkých vzdáleností, aby se zde modlili. Chrám ukrývá přes 3000 zobrazení Buddhy a rozsáhlé sbírky buddhistických rukopisů a umění.",
        skepticke: "Legenda o hozeném klobouku a vynořivší se stúpě je tradiční zakladatelský mýtus, ne historický záznam - samotné založení chrámu králem Songcän Gampem kolem roku 652 n. l. je ale historicky doložené. Od roku 2000 je chrám na seznamu UNESCO jako součást komplexu Potálského paláce."
      },
      praktickeInfo: "Chrám je aktivním poutním místem s placeným vstupem pro turisty, doporučuje se respektovat probíhající náboženský provoz a počítat s velkým množstvím poutníků.",
      zdroje: [
        { nazev: "Wikipedia: Jokhang", url: "https://en.wikipedia.org/wiki/Jokhang", licence: "CC BY-SA" },
        { nazev: "Wikidata: Jokhang", url: "https://www.wikidata.org/wiki/Q735914", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Jokhang%20Temple%20Lhasa", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Klobouk, který určil místo chrámu", text: "Podle legendy král hodil svůj klobouk se slibem postavit chrám tam, kam dopadne - klobouk skončil v jezeře, ze kterého se vzápětí vynořila bílá stúpa." },
        { nazev: "Sochy od dvou zahraničních manželek", text: "Chrám vznikl, aby ukryl dvě posvátné sochy Buddhy přivezené králově nepálskou a čínskou manželkou - dar, který spojil tibetskou dynastii se sousedními říšemi." }
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
