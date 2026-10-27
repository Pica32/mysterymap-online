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
    id: "cerveteri-necropolis",
    patch: {
      nazev: "Nekropole Banditaccia (Cerveteri)",
      lead: "Etruské „město mrtvých“ u Říma - stovky mohyl a hrobek tesaných do tufu jako domy živých, s ulicemi, místnostmi a lůžky pro zemřelé.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Nekropole Banditaccia vypadá jako opuštěné město: mezi travnatými mohylami vedou ulice a uvnitř hrobek jsou dveře, sloupy, stropy s trámy i kamenná lůžka. Etruskové věřili, že mrtví v hrobce dál žijí.",
        historie: "Hrobky vznikaly od 9. do 3. století př. n. l. Nejznámější je Hrobka reliéfů, jejíž stěny zdobí štukové reliéfy nástrojů, zbraní a domácích předmětů. Z Cerveteri pochází i slavný Sarkofág manželů, dnes v muzeu Villa Giulia v Římě. Nekropole je spolu s Tarquinií na seznamu UNESCO od roku 2004.",
        legenda: "Etruskové jsou dodnes zahaleni tajemstvím - jejich jazyk umíme přečíst, ale rozumíme mu jen zčásti. Místní vyprávějí o hlasech, které se ozývají z tmavých hrobek.",
        paranormalni: "Návštěvníci popisují v hrobkách ticho, chlad a pocit, že vstupují do cizího domu. Doložené jevy chybí.",
        skepticke: "Atmosféru vytváří architektura a chlad podzemí. Hrobky byly ve starověku i v novověku vykradeny, takže poklady tu nejsou."
      },
      praktickeInfo: "Cerveteri je asi 45 km severozápadně od Říma, dojedeš autobusem Cotral (asi hodina) a od centra je to 2 km pěšky. Vezmi baterku do tmavých hrobek. Kombinuj s muzeem v Cerveteri a s nekropolí v Tarquinii.",
      pribehy: [
        { nazev: "Dům pro věčnost", text: "Hrobky mají dveře, lůžka i stropy s trámy - mrtví měli bydlet stejně jako za života." },
        { nazev: "Usměvaví manželé", text: "Slavný sarkofág zobrazuje manžele ležící na hostině, s úsměvem, který je dodnes záhadou." }
      ]
    }
  },
  {
    id: "tarquinia-necropolis",
    patch: {
      nazev: "Nekropole Monterozzi (Tarquinia)",
      lead: "Etruské pohřebiště s tisíci hrobek a malovanými stěnami - tanečníci, hostiny, maskovaný Phersu a démoni podsvětí, kteří přežili 2 500 let.",
      atmosfera: 4.7,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Pod nenápadnými pahorky se skrývá kolem 6 000 hrobek, z nichž asi 200 má malby. Sestupuješ po schodech do tmy a za sklem se rozsvítí barvy - leopardi, muzikanti, hostiny i postava v masce zvaná Phersu.",
        historie: "Tarquinia byla jedním z nejmocnějších etruských měst. Malované hrobky vznikaly hlavně od 7. do 2. století př. n. l. Mezi nejznámější patří Hrobka leopardů, Hrobka augurů a Hrobka Orcus s démonem Charunem. Na seznamu UNESCO je od roku 2004.",
        legenda: "Podle etruské legendy se u Tarquinie z brázdy vyorané pluhem vynořilo dítě s moudrostí starce jménem Tages. Naučilo Etrusky věštit z vnitřností zvířat a z blesků - a zase zmizelo.",
        paranormalni: "Malby démonů podsvětí na návštěvníky silně působí. Paranormální jevy nejsou doloženy.",
        skepticke: "Démoni jako Charun jsou součástí etruských představ o posmrtném životě. Příběh o Tagovi je mýtus o původu věšteckého umění."
      },
      praktickeInfo: "Tarquinia je asi 1 hodinu 20 minut vlakem z Říma, od nádraží jede do města autobus. Do hrobek se sestupuje po strmých schodech. Kombinuj s Národním muzeem v paláci Vitelleschi, kde jsou okřídlení koně z Tarquinie.",
      pribehy: [
        { nazev: "Dítě z brázdy", text: "Z brázdy vyorané u Tarquinie se prý vynořil chlapec Tages a naučil Etrusky věštit." },
        { nazev: "Muž v masce", text: "Postava Phersu v masce je jedním z nejzáhadnějších motivů etruského umění." }
      ]
    }
  },
  {
    id: "epidaurus-theatre",
    patch: {
      nazev: "Divadlo v Epidauru",
      lead: "Antické divadlo s legendární akustikou - šepot ze scény je slyšet až v poslední řadě - a svatyně boha léčitelství Asklépia, kde se nemocní léčili ve snech.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Divadlo pro zhruba 13 000-14 000 diváků má tak dokonalou akustiku, že je v horních řadách slyšet upuštěná mince. Ve svatyni je navíc Tholos - kruhová stavba s labyrintem pod podlahou, jejíž účel není jasný.",
        historie: "Divadlo vzniklo ve 4. století př. n. l. a připisuje se architektovi Polykleitovi mladšímu. Svatyně Asklépia byla jedním z nejslavnějších léčebných míst antiky. Na seznamu UNESCO je od roku 1988. V létě se tu dodnes hrají antické tragédie.",
        legenda: "Nemocní spali v posvátné budově zvané abaton. Ve snu je navštívil Asklépios nebo jeho posvátní hadi a ráno kněží vykládali, jak se léčit. Podle labyrintu v Tholu se spekuluje, že tam žili posvátní hadi.",
        paranormalni: "Návštěvníci zkoušejí akustiku: šeptají, tleskají a pouštějí mince. Pocit, že stojíš v místě léčení, je silný.",
        skepticke: "Výzkum ukázal, že řady sedadel filtrují nízké frekvence šumu a zvýrazňují hlas. Léčení ve snech kombinovalo odpočinek, dietu a placebo."
      },
      praktickeInfo: "Epidauros je asi 30 km od Nafplia a 2 hodiny autem z Athén. V létě se konají večerní představení v rámci festivalu Athény-Epidauros. Kombinuj s muzeem svatyně a s Mykénami.",
      pribehy: [
        { nazev: "Mince v poslední řadě", text: "Průvodci pouštějí na scéně minci a turisté ji slyší až v horních řadách." },
        { nazev: "Léčba ve snu", text: "Nemocní spali v abatonu a čekali, až jim bůh ve snu poradí, jak se uzdravit." }
      ]
    }
  },
  {
    id: "phaistos",
    patch: {
      nazev: "Faistos",
      lead: "Mínojský palác na jihu Kréty, kde byl v roce 1908 nalezen Faistoský disk - hliněný kotouč se spirálou neznámých znaků, který dodnes nikdo nerozluštil.",
      atmosfera: 4.6,
      paranormalniAktivita: "žádná",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Faistoský disk má na obou stranách spirálu 241 znaků vytlačených razítky - jde o jeden z nejstarších příkladů „tisku“. Obsahuje postavy, ryby, lodě a hlavy s chocholy, ale jejich význam neznáme.",
        historie: "Palác byl centrem mínojské moci na planině Mesara. Disk objevil italský archeolog Luigi Pernier v roce 1908. Datuje se zhruba do 2. tisíciletí př. n. l. Dnes je vystaven v Archeologickém muzeu v Heraklionu.",
        legenda: "Podle mýtů vládl Faistu Rhadamanthys, bratr krále Mínóa, který se po smrti stal soudcem v podsvětí. Disk bývá vykládán jako modlitba, kalendář, hymnus nebo dokonce „mimozemská“ zpráva.",
        paranormalni: "Paranormální jevy nejsou hlášeny. Záhadou je sám disk, kolem kterého vzniklo nespočet amatérských „rozluštění“.",
        skepticke: "Text je příliš krátký na spolehlivé rozluštění. Někteří badatelé dokonce zpochybnili pravost disku, většina ho ale považuje za autentický."
      },
      praktickeInfo: "Faistos je asi 60 km od Heraklionu, autem 1-1,5 hodiny. Je odtud krásný výhled na planinu Mesara a horu Ida. Disk uvidíš v muzeu v Heraklionu. Kombinuj s Agia Triada a jeskyněmi v Matale.",
      pribehy: [
        { nazev: "Nerozluštěný disk", text: "Více než sto let se lingvisté marně snaží přečíst 241 znaků Faistoského disku." },
        { nazev: "Soudce mrtvých", text: "Mýtický král Rhadamanthys z Faistu se po smrti stal soudcem v podsvětí." }
      ]
    }
  },
  {
    id: "samothrace-sanctuary",
    patch: {
      nazev: "Svatyně Velkých bohů (Samothráké)",
      lead: "Svatyně tajných mystérií na odlehlém ostrově v Egejském moři - zde se podle tradice poznali Filip Makedonský a Olympias a zde byla nalezena Níké Samothrácká.",
      atmosfera: 4.7,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup, trajekt",
      popisy: {
        zahada: "Ve svatyni probíhalo zasvěcení do mystérií Velkých bohů. Účastníci museli zachovat mlčení, a tak dodnes nevíme, co přesně se při obřadech dělo. Svatyně leží v zeleném údolí pod horou Fengari.",
        historie: "Kult je starší než řecká kolonizace ostrova. Podle Plútarcha se při zasvěcení na Samothráké poznali mladý Filip II. Makedonský a Olympias, rodiče Alexandra Velikého. V roce 1863 zde francouzský konzul Charles Champoiseau objevil sochu okřídlené Níké, dnes jednu z hvězd Louvru. Na místě je replika.",
        legenda: "Podle Homérovy Íliady sledoval z vrcholu hory Fengari bitvu u Tróje bůh Poseidon. Zasvěcení věřili, že je Velcí bohové chrání před ztroskotáním na moři.",
        paranormalni: "Návštěvníci mluví o zvláštní síle místa obklopeného horami a lesem. Doložené jevy nejsou.",
        skepticke: "Mlčení zasvěcených bylo dodržováno tak dobře, že o obsahu mystérií jen spekulujeme. Nejde o paranormální tajemství, ale o mezeru v pramenech."
      },
      praktickeInfo: "Na Samothráké jede trajekt z Alexandroupoli (asi 2-2,5 hodiny). Svatyně je u vesnice Paleopoli. Na ostrově je málo turistů, hodně vodopádů a horských stezek. Lodě jezdí méně často mimo sezónu - zkontroluj jízdní řád.",
      pribehy: [
        { nazev: "Rodiče Alexandra", text: "Filip Makedonský a Olympias se podle Plútarcha poznali při zasvěcení na Samothráké." },
        { nazev: "Okřídlená Níké", text: "Socha bohyně vítězství byla objevena v roce 1863 a dnes stojí na schodišti Louvru." }
      ]
    }
  },
  {
    id: "osowka-underground-city",
    patch: {
      nazev: "Podzemní město Osówka",
      lead: "Největší přístupný komplex nacistického projektu Riese v Sovích horách - kilometry tunelů vyražených nuceně nasazenými, jejichž skutečný účel dodnes nikdo nezná.",
      atmosfera: 4.7,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "střední",
      pristupnost: "placený vstup s průvodcem",
      popisy: {
        zahada: "Osówka má přes 1,7 km chodeb, obrovské sály a nedokončené šachty. Dokumentace se nedochovala, a tak se spekuluje o Hitlerově hlavním stanu, podzemních továrnách na zbraně i tajných laboratořích.",
        historie: "Projekt Riese („obr“) začal v roce 1943 v Sovích horách v Dolním Slezsku. Pracovali na něm vězni z koncentračního tábora Gross-Rosen a nuceně nasazení - tisíce z nich zemřely. Na konci války zůstaly všechny komplexy nedokončené.",
        legenda: "Vypráví se o tajných tunelech, které dosud nebyly objeveny, o ukrytých pokladech a o „zlatém vlaku“, který měl zmizet v horách u Valbřichu.",
        paranormalni: "Návštěvníci hlásí pocit tísně, zvuky a kroky v chodbách. Některé prohlídky probíhají po tmě s baterkami.",
        skepticke: "Hledání „zlatého vlaku“ v roce 2016 nic nenašlo. Skutečná tragédie Riese je v utrpení tisíců dělníků, ne v legendách o pokladech."
      },
      praktickeInfo: "Osówka je u městečka Głuszyca, asi 1,5 hodiny autem z Vratislavi a kousek od českých hranic u Broumova. Prohlídky jsou s průvodcem, k dispozici jsou i extrémní trasy. V podzemí je chladno, vezmi si bundu. Kombinuj s komplexem Włodarz a hradem Książ.",
      pribehy: [
        { nazev: "Obr bez plánů", text: "Žádný dochovaný dokument neříká, k čemu měly kilometry tunelů v Sovích horách sloužit." },
        { nazev: "Zlatý vlak", text: "Pověst o vlaku plném nacistického zlata vedla v roce 2016 k vykopávkám, které nic nenašly." }
      ]
    }
  },
  {
    id: "wlodarz-complex",
    patch: {
      nazev: "Komplex Włodarz",
      lead: "Zatopené tunely projektu Riese pod horou Włodarz v Sovích horách - prohlídka zčásti probíhá na loďce po podzemní vodě.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "střední",
      pristupnost: "placený vstup s průvodcem",
      popisy: {
        zahada: "Włodarz patří k největším komplexům projektu Riese. Část chodeb je zatopená a nikdo neví, kam přesně vedou. Na stěnách jsou dosud vidět stopy po vrtání.",
        historie: "Tunely vznikaly v letech 1943-1945 jako součást projektu Riese. Pracovali na nich vězni a nuceně nasazení. Po válce byly komplexy opuštěny a částečně vyrabovány. Dnes jsou zpřístupněné jako muzeum.",
        legenda: "Místní vyprávějí o zatopených chodbách, kde jsou ukryty nacistické dokumenty a poklady. Podle jiných pověstí se tu ozývají hlasy zemřelých dělníků.",
        paranormalni: "Plavba po tmavé vodě v podzemí patří k nejsilnějším zážitkům v regionu. Návštěvníci hlásí zvuky a ozvěny.",
        skepticke: "Pátrání po pokladech v Sovích horách nikdy nic neprokázalo. Ozvěny v zatopených tunelech jsou přirozený jev."
      },
      praktickeInfo: "Włodarz je u vesnice Jugowice v Sovích horách, nedaleko obce Walim. Prohlídka trvá asi hodinu a půl včetně plavby lodí. V podzemí je kolem 7 °C. Kombinuj s Osówkou a Rzeczkou.",
      pribehy: [
        { nazev: "Lodí pod horou", text: "Část prohlídky vede po zatopených chodbách na loďce - kam voda pokračuje, se neví." },
        { nazev: "Stopy po vrtání", text: "Na stěnách jsou dodnes vidět otvory po vrtání, jako by práce skončila včera." }
      ]
    }
  },
  {
    id: "belogradchik-rocks",
    patch: {
      nazev: "Belogradčické skály",
      lead: "Rudé skalní věže až 200 metrů vysoké v severozápadním Bulharsku - Madona, Mniši a Jezdec, zkamenělé postavy z pověsti o zakázané lásce jeptišky.",
      atmosfera: 4.7,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup do pevnosti",
      popisy: {
        zahada: "Skály z červeného pískovce a slepence vytvářejí tvary, které připomínají postavy, zvířata a hrady. Mezi nimi je zabudovaná Belogradčická pevnost, jejíž zdi využívají skály jako přirozené hradby.",
        historie: "Pevnost založili Římané, rozšířil ji bulharský car Ivan Sracimir ve 14. století a Osmané ji přestavěli ve 30. letech 19. století. Skály byly kandidátem soutěže Sedm nových divů přírody.",
        legenda: "Podle pověsti se mladá jeptiška Valentina zamilovala do jezdce a porodila dítě. Mniši ji chtěli potrestat, ale přišla bouře a všichni zkameněli - jeptiška jako „Madona“, mniši jako „Mniši“ a její milý jako „Jezdec“.",
        paranormalni: "Při západu slunce skály rudě žhnou a vypadají jako živé postavy. Návštěvníci mluví o magické atmosféře.",
        skepticke: "Tvary vznikly erozí měkkých hornin během milionů let. Pověst je lidové vysvětlení podivných tvarů."
      },
      praktickeInfo: "Belogradčik je asi 3 hodiny autem ze Sofie a hodinu od Vidinu. Pevnost je placená, skály lze obdivovat i z vyhlídek zdarma. Kombinuj s jeskyní Magura s pravěkými malbami z netopýřího guána (asi 20 km).",
      pribehy: [
        { nazev: "Zkamenělá jeptiška", text: "Jeptiška Valentina a mniši, kteří ji chtěli potrestat, se prý během bouře proměnili v kámen." },
        { nazev: "Hradby ze skal", text: "Pevnost využívá rudé skály jako přirozené hradby - postavit ji bylo snazší, než dobýt." }
      ]
    }
  },
  {
    id: "devil-s-throat-cave",
    patch: {
      nazev: "Ďáblovo hrdlo",
      lead: "Jeskyně v Rodopech, do které mizí celá řeka a padá 42metrovým podzemním vodopádem - podle pověsti tudy sestoupil Orfeus do podsvětí za Eurydikou.",
      atmosfera: 4.8,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "střední",
      pristupnost: "placený vstup s průvodcem",
      popisy: {
        zahada: "Řeka Trigradska vtéká do jeskyně a padá vodopádem vysokým asi 42 metrů do obrovského sálu - je to jeden z nejvyšších podzemních vodopádů na Balkáně. Voda se pak ztrácí v sifonech a vynořuje se o kus dál. Předměty, které do ní spadnou, se podle místních nikdy neobjeví.",
        historie: "Jeskyně je prozkoumávána od 20. století. Při pokusu proplout podzemními sifony zahynuli v roce 1970 dva potápěči. Dnes je jeskyně zpřístupněna umělým tunelem a návštěvníci vystupují ven po schodišti podél vodopádu.",
        legenda: "Podle pověsti tudy thrácký pěvec Orfeus sestoupil do podsvětí, aby přivedl zpět svou ženu Eurydiku. Rodopy jsou podle tradice Orfeovou vlastí.",
        paranormalni: "Hukot vodopádu ve tmě vyvolává silné pocity. Místní tvrdí, že v jeskyni slyší hlasy.",
        skepticke: "Ztracené předměty rozdrtí nebo zachytí sifony. Spojení s Orfeem je mýtus, který si region přisvojil."
      },
      praktickeInfo: "Ďáblovo hrdlo je u vesnice Trigrad v Rodopech, asi 3,5-4 hodiny autem z Plovdivu nebo Sofie. Prohlídka trvá asi 30-40 minut, na výstupu je asi 300 schodů. Uvnitř je vlhko a kluzko, vezmi pevnou obuv. Kombinuj s Trigradskou soutěskou.",
      pribehy: [
        { nazev: "Cesta Orfea", text: "Podle pověsti právě tudy sestoupil Orfeus do podsvětí za svou Eurydikou." },
        { nazev: "Řeka, která nevrací", text: "Co spadne do vodopádu, se podle místních už nikdy nevynoří." }
      ]
    }
  },
  {
    id: "devil-s-town",
    patch: {
      nazev: "Đavolja Varoš (Ďáblovo město)",
      lead: "Přes 200 zemních pyramid s kamennými čepicemi na jihu Srbska a prameny s extrémně kyselou vodou - podle pověsti zkamenělí svatebčané.",
      atmosfera: 4.7,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Na svahu hory Radan stojí přes 200 zemních pyramid vysokých 2-15 metrů, z nichž mnohé mají na vrcholu kamennou „čepici“. Pod nimi vytékají dva prameny - Ďáblova voda a Červený pramen - s velmi kyselou vodou bohatou na minerály.",
        historie: "Pyramidy vznikly erozí sopečné půdy, kterou chránily kameny na vrcholu. Útvar je chráněnou přírodní památkou a byl kandidátem soutěže Sedm nových divů přírody. Nedaleko jsou zbytky středověkého kostela a důlních šachet.",
        legenda: "Podle pověsti se bratr chtěl oženit se sestrou. Ďábel nebo víla svatbu proklel a všechny svatebčany proměnil v kámen. Jiná verze vypráví o kletbě čarodějnice nad vesnicí.",
        paranormalni: "Ve větru pyramidy „sténají“ - zvuky připomínají nářek. Místní věří, že v noci je slyšet svatební hudba.",
        skepticke: "Zvuky vytváří vítr v pyramidách a v erodovaných stěnách. Kyselost vody je dána sulfidy a kovy z vulkanických hornin."
      },
      praktickeInfo: "Đavolja Varoš je asi 27 km od Kuršumlije, z Niše je to asi 2 hodiny autem. Vstup je placený, od pokladny vede ke pyramidám stezka (asi 20 minut). Vodu z pramenů nepij. Nejlepší je ráno nebo za soumraku.",
      pribehy: [
        { nazev: "Zkamenělá svatba", text: "Svatebčané, kteří slavili zakázanou svatbu sourozenců, se podle pověsti proměnili v kamenné pyramidy." },
        { nazev: "Ďáblova voda", text: "Pramen pod pyramidami má tak kyselou vodu, že se nedá pít - místní ho pojmenovali po ďáblovi." }
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
