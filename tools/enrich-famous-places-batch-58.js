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
    id: "jihlava-underground",
    patch: {
      nazev: "Jihlavské podzemí",
      lead: "Kilometry chodeb pod historickým centrem Jihlavy - se záhadnou „svítící chodbou“, objevenou v roce 1996, a pověstí o varhanách hrajících v podzemí.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "jen s průvodcem",
      popisy: {
        zahada: "Pod náměstím a domy se ve třech patrech táhnou chodby a sklepy dlouhé přes 20 kilometrů. Část trasy vede ke svítící chodbě, jejíž stěny po zhasnutí světla zeleně září.",
        historie: "Podzemí vzniklo hlavně ve 14. a 15. století jako sklepy měšťanských domů. Sloužilo ke skladování a v dobách válek k úkrytu. Chodby se postupně propojily pod celým centrem. Svítící chodbu objevili v roce 1996.",
        legenda: "Podle pověsti se v podzemí občas ozývají varhany, i když tam žádné nejsou. Jiné pověsti vyprávějí o ukrytých pokladech jihlavských horníků a stříbrných dolech.",
        paranormalni: "Návštěvníci popisují zvuky hudby a krok za zády. Svítící chodba vzbudila spekulace o neznámém přírodním jevu.",
        skepticke: "Rozbory svítící stěny nedaly jednoznačný výsledek. Podle jedné teorie byla na stěnu nanesena svítivá látka. Zvuky varhan mohou být ozvěny z ulice nebo kostela nad podzemím."
      },
      praktickeInfo: "Vstup je z Masarykova náměstí, prohlídky s průvodcem trvají asi hodinu. Jsou dvě trasy, jedna vede ke svítící chodbě. V podzemí je kolem 10 °C, vezměte si mikinu. Jihlava je na dálnici D1 mezi Prahou a Brnem.",
      pribehy: [
        { nazev: "Svítící chodba", text: "Když průvodce zhasne, stěny jedné chodby zeleně září. Proč, se dodnes přesně neví." },
        { nazev: "Varhany v podzemí", text: "V chodbách se prý ozývá hra varhan, i když žádné varhany v podzemí nikdy nebyly." }
      ]
    }
  },
  {
    id: "znojmo-underground",
    patch: {
      nazev: "Znojemské podzemí",
      lead: "Jeden z největších podzemních labyrintů ve střední Evropě - desítky kilometrů chodeb ve čtyřech patrech pod Znojmem, s trasou pro odvážné v kombinéze a s baterkou.",
      atmosfera: 4.5,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "jen s průvodcem",
      popisy: {
        zahada: "Pod historickým centrem se chodby a sklepy větví až ve čtyřech patrech nad sebou. Jejich celková délka se odhaduje na desítky kilometrů. Na prohlídce uvidíte studny, větrací šachty a strašidelné scény.",
        historie: "Chodby vznikaly od 14. století. Sloužily jako sklepy na víno a potraviny, propojení domů a úkryty při obléhání. Znojmo bylo pohraniční město a podzemí mu pomáhalo přežít války.",
        legenda: "Pověsti vyprávějí o rytířích a mniších, kteří v podzemí ukryli poklady, a o duších obránců z dob obléhání. Na prohlídce vás provede i postava čerta.",
        paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou. Prohlídka pracuje se strašidelnými efekty, které jsou součástí zážitku.",
        skepticke: "Strašidelné postavy na trase jsou divadlo. Podzemí je ale skutečné a historicky dobře zmapované."
      },
      praktickeInfo: "Vstup je ze Slepičího trhu v centru Znojma. Klasická prohlídka trvá asi 45 minut. Adrenalinová trasa se chodí v kombinéze, helmě a s baterkou, je nutná rezervace. Uvnitř je chladno.",
      pribehy: [
        { nazev: "Adrenalinová trasa", text: "Na speciální trase se plazíte úzkými chodbami v kombinéze a s čelovkou, jako první průzkumníci." },
        { nazev: "Město nad městem", text: "Podzemí pomáhalo Znojmu přežít obléhání - lidé se v něm schovávali a ukrývali zásoby." }
      ]
    }
  },
  {
    id: "slavonice-underground",
    patch: {
      nazev: "Slavonické podzemí",
      lead: "Chodby vytesané do skály pod renesančními domy Slavonic - nikdo přesně neví, k čemu sloužily a kam až vedou.",
      atmosfera: 4.5,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "jen s průvodcem",
      popisy: {
        zahada: "Pod domy na náměstí se ve dvou až třech úrovních táhnou úzké chodby a místnůstky vytesané do skály. Vstupuje se do nich ze sklepů měšťanských domů.",
        historie: "Slavonice zbohatly v 16. století na obchodní cestě z Prahy do Vídně. Z té doby pochází renesanční náměstí se sgrafity i podzemí pod ním. Chodby sloužily zřejmě ke skladování a úkrytu.",
        legenda: "Podle pověsti vedou tajné chodby až pod hradby nebo k okolním hradům. Lidé si vyprávějí o pokladech ukrytých za husitských válek a třicetileté války.",
        paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou. Záhadu tvoří účel chodeb a jejich neznámý rozsah.",
        skepticke: "Dlouhé chodby k hradům nejsou doložené. Většina podzemí jsou propojené sklepy a úkryty."
      },
      praktickeInfo: "Prohlídky podzemí začínají v informačním centru na náměstí, hlavně od jara do podzimu. Slavonice jsou kousek od rakouské hranice v jižních Čechách. Spojte s prohlídkou sgrafit a s bunkry linie opevnění v okolí.",
      pribehy: [
        { nazev: "Chodby pod náměstím", text: "Ze sklepů renesančních domů vedou úzké chodby vytesané do skály, které tvoří malý labyrint." },
        { nazev: "Poklady z válek", text: "Podle pověsti obyvatelé za válek ukryli v podzemí poklady, které nikdo nenašel." }
      ]
    }
  },
  {
    id: "mamerki-bunkers",
    patch: {
      nazev: "Bunkry Mamerki",
      lead: "Ukryté velitelství německé armády v mazurských lesích, jen 18 km od Vlčího doupěte - jeden z nejlépe zachovaných bunkrových komplexů v Evropě a místo, kde někteří hledají Jantarovou komnatu.",
      atmosfera: 4.5,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "výborná",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "V lese u jezera stojí desítky železobetonových bunkrů se stěnami silnými několik metrů. Na rozdíl od Vlčího doupěte nebyly vyhozeny do vzduchu, takže zůstaly skoro celé.",
        historie: "Komplex Mauerwald vznikl v letech 1940–1944 jako hlavní stan velení pozemního vojska (OKH). Sídlili tu nejvyšší důstojníci wehrmachtu. V roce 1945 ho Němci opustili bez boje.",
        legenda: "Podle jedné teorie mohla být v okolí ukryta Jantarová komnata, ukradená z Ruska. Hledači pokladů tu kopali a prozkoumávali okolí.",
        paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou. Atmosféru tvoří tmavé chodby bunkrů v lese.",
        skepticke: "Pro ukrytí Jantarové komnaty v Mamerkách nejsou důkazy. Historie velitelství je ale dobře doložená."
      },
      praktickeInfo: "Mamerki jsou u Węgorzewa v Mazursku. Areál je otevřený celoročně, je tu muzeum, rozhledna a model Jantarové komnaty. Do bunkrů si vezměte baterku. Kombinujte s Vlčím doupětem.",
      pribehy: [
        { nazev: "Velitelství v lese", text: "Zatímco Hitler sídlil ve Vlčím doupěti, hlavní velení armády se skrývalo v bunkrech v Mamerkách." },
        { nazev: "Hledání Jantarové komnaty", text: "Někteří hledači věří, že v okolí leží Jantarová komnata. Zatím ji nikdo nenašel." }
      ]
    }
  },
  {
    id: "borne-sulinowo-ghost-base",
    patch: {
      nazev: "Borne Sulinowo",
      lead: "Město, které padesát let nebylo na mapách - tajná sovětská posádka v polských lesích, dnes s opuštěnými kasárnami vedle obydlených ulic.",
      atmosfera: 4.4,
      paranormalniAktivita: "žádná",
      historickaDolozenost: "výborná",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Uprostřed lesů Západního Pomořanska leží město s kasárnami, cvičištěm a opuštěnými bloky. Některé budovy jsou opravené, jiné se rozpadají.",
        historie: "Ve 30. letech zde Němci postavili vojenskou posádku. Po roce 1945 ji převzala sovětská armáda a město zmizelo z map. Polští občané sem nesměli. Sověti odešli v roce 1992 a město se otevřelo.",
        legenda: "Místní vyprávějí o podzemních chodbách, skladech zbraní a tajných bunkrech, které armáda ukrývala. Část příběhů se týká nevyjasněných událostí z doby posádky.",
        paranormalni: "Nadpřirozené jevy se nepopisují. Záhadu tvoří život města, které oficiálně neexistovalo.",
        skepticke: "Mnoho pověstí o tajných podzemích je přehnaných. Historie posádky je ale dobře zdokumentovaná."
      },
      praktickeInfo: "Borne Sulinowo je asi 25 km od Szczecinku. Město je obydlené, opuštěné budovy jsou soukromé nebo nebezpečné - nevstupujte do nich. V létě se zde koná setkání milovníků vojenské techniky.",
      pribehy: [
        { nazev: "Město mimo mapy", text: "Padesát let bylo Borne Sulinowo na mapách jen lesem. Žily tu tisíce sovětských vojáků a jejich rodin." },
        { nazev: "Den odchodu", text: "V roce 1992 sovětští vojáci odešli a Poláci poprvé vstoupili do města, které celý život míjeli." }
      ]
    }
  },
  {
    id: "karosta-prison",
    patch: {
      nazev: "Věznice Karosta",
      lead: "Vojenská věznice v Liepāji, která sloužila carům, nacistům i sovětům až do roku 1997 - dnes si v ní můžete zažít noc jako vězeň.",
      atmosfera: 4.6,
      paranormalniAktivita: "známé případy",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Cihlová budova stojí ve čtvrti Karosta, bývalém námořním přístavu. Uvnitř jsou cely, samotky a chodby se zdmi poškrábanými vězni.",
        historie: "Věznice vznikla na začátku 20. století pro carské námořnictvo. Postupně ji využívala lotyšská armáda, nacisté a sovětská armáda. Poslední vězni odešli v roce 1997.",
        legenda: "Podle pověstí v celách bloudí duchové vězňů, kteří tu zemřeli. Nejznámější je prý žena v bílém, zahlédnutá na chodbě.",
        paranormalni: "Zaměstnanci a návštěvníci hlásí bouchání dveří a kroky. Věznici zkoumali lovci duchů z televizního pořadu Ghost Hunters International.",
        skepticke: "Zjevení nejsou doložená a věznice s duchařskou pověstí pracuje jako s turistickou atrakcí. Historie věznění je ale skutečná."
      },
      praktickeInfo: "Karosta je severní čtvrť Liepāji, asi 200 km od Rigy. Věznice nabízí prohlídky a interaktivní program, kde si na hodinu zahrajete na vězně. Odvážní mohou přespat v cele. Prohlídky hlavně v létě.",
      pribehy: [
        { nazev: "Noc v cele", text: "Návštěvníci mohou přespat v cele na kavalci a zažít drsné zacházení dozorců - jako v sovětské době." },
        { nazev: "Žena v bílém", text: "Na chodbách věznice prý zahlédli ženu v bílém, i když tu byli vězněni hlavně muži." }
      ]
    }
  },
  {
    id: "plokstine-missile-base",
    patch: {
      nazev: "Raketová základna Plokštinė",
      lead: "Tajná sovětská základna jaderných raket ukrytá v litevském lese - do jednoho ze sil můžete nahlédnout dodnes.",
      atmosfera: 4.6,
      paranormalniAktivita: "žádná",
      historickaDolozenost: "výborná",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Nad zemí jsou vidět jen betonové kopule a pahorky. Pod nimi jsou čtyři hluboká sila pro rakety a chodby s řídícími místnostmi.",
        historie: "Základnu postavila sovětská armáda tajně na začátku 60. let. Sila sloužila pro rakety R-12 s jadernými hlavicemi, které mohly zasáhnout západní Evropu. Základna fungovala do konce 70. let.",
        legenda: "Místní prý během stavby nesměli vědět, co se v lese staví. Vznikaly zvěsti o tajných podzemních městech.",
        paranormalni: "Nadpřirozené jevy se nepopisují. Strach budí to, co se tu mohlo stát.",
        skepticke: "Historie základny je dobře doložená. Dnes je v ní Muzeum studené války."
      },
      praktickeInfo: "Plokštinė je v Žemaitijském národním parku asi 25 km od Plungė. Muzeum studené války nabízí prohlídky s průvodcem. Kombinujte s jezerem Plateliai.",
      pribehy: [
        { nazev: "Pohled do sila", text: "Z ochozu můžete nahlédnout do hlubokého sila, kde kdysi stála jaderná raketa." },
        { nazev: "Tajná stavba", text: "Základnu stavěli vojáci tajně a místní obyvatelé nesměli vědět, co se v lese staví." }
      ]
    }
  },
  {
    id: "kola-superdeep-borehole",
    patch: {
      nazev: "Kolský superhluboký vrt",
      lead: "Nejhlubší díra, kterou kdy lidé vyvrtali - přes 12 kilometrů do země. Odtud pochází slavná fáma o křicích z pekla.",
      atmosfera: 4.5,
      paranormalniAktivita: "slavná legenda",
      historickaDolozenost: "výborná",
      nebezpecnost: "střední",
      pristupnost: "volně přístupné, odlehlé",
      popisy: {
        zahada: "Na poloostrově Kola za polárním kruhem stojí rozpadlá budova vrtné věže. Uprostřed je přivařený kovový poklop o průměru několika desítek centimetrů. Pod ním je díra hluboká přes 12 kilometrů.",
        historie: "Sovětští vědci začali vrtat v roce 1970. V roce 1989 dosáhli hloubky 12 262 metrů. Ve velké hloubce bylo kolem 180 °C a vrtání se zastavilo. Projekt skončil v 90. letech.",
        legenda: "Od roku 1989 koluje příběh, že vědci spustili do vrtu mikrofon a nahráli křik zatracených duší. Příběh se šířil křesťanským rádiem a později internetem jako „Studna do pekla“.",
        paranormalni: "Nahrávka „křiku z pekla“ je známý podvod, pravděpodobně upravený zvuk z hororového filmu. Vědci nic takového nehlásili.",
        skepticke: "Vrt je skutečný vědecký úspěch. Objevili v něm třeba mikroskopické fosilie v hloubce kilometrů a vodu v horninách."
      },
      praktickeInfo: "Vrt je u městečka Zapoljarnyj v Murmanské oblasti, blízko norské hranice. Areál je opuštěný a budovy se rozpadají. Před cestou do Ruska ověřte aktuální cestovní doporučení.",
      pribehy: [
        { nazev: "Studna do pekla", text: "Podle fámy vědci spustili do vrtu mikrofon a uslyšeli křik zatracených. Jde o známý podvod." },
        { nazev: "Fosilie z hlubin", text: "Vědci ve vrtu našli mikroskopické fosilie v hloubce několika kilometrů - skutečný objev." }
      ]
    }
  },
  {
    id: "chernobyl-duga-radar",
    patch: {
      nazev: "Radar Duga",
      lead: "Obří sovětská anténa u Černobylu, jejíž signál rušil rádia po celém světě - radioamatéři mu říkali „ruský datel“.",
      atmosfera: 4.7,
      paranormalniAktivita: "žádná",
      historickaDolozenost: "výborná",
      nebezpecnost: "vysoká",
      pristupnost: "uzavřeno",
      popisy: {
        zahada: "Ocelová konstrukce je vysoká asi 150 metrů a dlouhá několik set metrů. Stojí v lese v uzavřené zóně, nedaleko tajného města Černobyl-2.",
        historie: "Radar byl součástí sovětského systému včasného varování před raketami. Fungoval od 70. do konce 80. let. Po havárii jaderné elektrárny v roce 1986 byl opuštěn.",
        legenda: "Rytmický zvuk, který radar vysílal, rušil vysílání po celém světě. Lidé spekulovali o ovládání mysli nebo počasí.",
        paranormalni: "Teorie o ovládání mysli nemají žádný důkaz. Rušení bylo vedlejším efektem radaru.",
        skepticke: "Účel radaru je dnes známý - měl zachytit odpálené rakety. Klepání „ruského datla“ bylo technickým projevem jeho vysílání."
      },
      praktickeInfo: "Radar leží v černobylské uzavřené zóně. Od roku 2022 je zóna kvůli válce pro turisty uzavřená. Neplánujte návštěvu, dokud úřady návštěvy znovu nepovolí. Sledujte aktuální cestovní doporučení.",
      pribehy: [
        { nazev: "Ruský datel", text: "Radioamatéři po celém světě slyšeli rytmické klepání, které rušilo vysílání. Říkali mu ruský datel." },
        { nazev: "Tajné město", text: "U radaru stálo tajné město Černobyl-2, které nebylo na mapách. Oficiálně tu byl pionýrský tábor." }
      ]
    }
  },
  {
    id: "kalemegdan-roman-well",
    patch: {
      nazev: "Římská studna na Kalemegdanu",
      lead: "Desítky metrů hluboká studna v bělehradské pevnosti, která vůbec není římská - podle pověstí v ní mizeli vězni a ukrývali se poklady.",
      atmosfera: 4.4,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Studna je hluboká přes 50 metrů a po stěně vedou točitá schodiště. Dno je zaplavené. Studna vypadá jako vstup do podsvětí.",
        historie: "Studnu postavili Rakušané v 18. století, když drželi Bělehrad. Měla zásobovat pevnost vodou při obléhání. Název „římská“ vznikl omylem.",
        legenda: "Podle pověstí do studny shazovali vězně a v hloubce je ukrytý poklad. Mluví se i o vraždách a sebevraždách na dně.",
        paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou. Tajemství tvoří hloubka a tma.",
        skepticke: "Pověsti nejsou doložené. Studna je technickou památkou rakouského opevnění."
      },
      praktickeInfo: "Studna je v Horním městě bělehradské pevnosti Kalemegdan. Otevírá se jen občas a na prohlídky. Pevnost samotná je volně přístupná, nabízí výhled na soutok Sávy a Dunaje.",
      pribehy: [
        { nazev: "Omylem římská", text: "Studna se jmenuje římská, ale postavili ji Rakušané v 18. století." },
        { nazev: "Poklad na dně", text: "Podle pověsti je na zaplaveném dně studny ukrytý poklad. Nikdo ho nenašel." }
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
