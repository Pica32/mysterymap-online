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
    id: "ring-of-brodgar",
    patch: {
      nazev: "Kruh Brodgar",
      lead: "Obří kamenný kruh na Orknejích mezi dvěma jezery - podle pověsti obři, kteří tančili celou noc a ráno je proměnilo slunce v kámen.",
      atmosfera: 4.8,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Kruh má průměr asi 104 metrů a obklopuje ho příkop vytesaný do skály. Z původních zhruba šedesáti kamenů jich stojí asi třicet. Leží na úzké šíji mezi jezery Stenness a Harray.",
        historie: "Kruh vznikl přibližně mezi lety 2500 a 2000 př. n. l. Patří k památce UNESCO Srdce neolitických Orknejí spolu s Maeshowe a vesnicí Skara Brae. Nedaleko se odkrývá obří chrámový komplex Ness of Brodgar.",
        legenda: "Podle orknejské pověsti jsou kameny obři, kteří v noci tančili a zapomněli na čas. Když vyšlo slunce, zkameněli. Kámen Comet Stone stranou kruhu je prý houslista, který jim hrál.",
        paranormalni: "O duších se tu nevypráví. Návštěvníci mluví hlavně o zvláštním klidu a světle za letního slunovratu, kdy na Orknejích skoro nepadne tma.",
        skepticke: "K čemu kruh sloužil, se přesně neví - nabízí se obřady, sledování nebe nebo shromáždění. Pověst o obrech vysvětluje kameny lidovým jazykem."
      },
      praktickeInfo: "Kruh je asi 8 km severovýchodně od Stromness na pevninském Orkneji, u silnice B9055. Vstup je zdarma a kdykoli. V létě bývá na místě strážce s výkladem. Fouká tu silný vítr, vezměte si bundu. Kombinujte s Maeshowe a kameny Stenness.",
      pribehy: [
        { nazev: "Tančící obři", text: "Obři tančili celou noc v kruhu, a když vyšlo slunce, proměnili se v kameny, které tu stojí dodnes." },
        { nazev: "Chrám vedle kruhu", text: "Archeologové kousek od kruhu odkrývají Ness of Brodgar - komplex budov starší než mnohé pyramidy." }
      ]
    }
  },
  {
    id: "silbury-hill",
    patch: {
      nazev: "Silbury Hill",
      lead: "Největší pravěká mohyla Evropy u Avebury - 30 metrů vysoký kopec postavený lidmi, uvnitř kterého nikdo nenašel hrob ani poklad.",
      atmosfera: 4.4,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné, bez výstupu",
      popisy: {
        zahada: "Kopec z křídy a hlíny je vysoký asi 30 metrů a má plochý vrchol. Stavba vyžadovala miliony hodin práce. Přesto v něm nebyl nalezen žádný hrob a jeho účel zůstává záhadou.",
        historie: "Mohyla vznikla kolem roku 2400 př. n. l. a patří k památkám UNESCO Stonehenge a Avebury. Do kopce kopali hledači pokladů v roce 1776, později archeologové v 19. století a v roce 1968 televize BBC. Po propadu vrcholu v roce 2000 byly tunely zasypány.",
        legenda: "Podle pověsti je tu pohřben král Sil na koni ze zlata. Jiná pověst tvrdí, že čert nesl pytel hlíny na Marlborough, ale kněží z Avebury ho zastavili a on hlínu upustil.",
        paranormalni: "V okolí se často objevují kruhy v obilí, proto sem jezdí lidé hledající záhady. Nadpřirozené jevy přímo na kopci ale nejsou známé.",
        skepticke: "Kruhy v obilí jsou dílem lidí. Účel mohyly je nejasný, ale archeologie ukazuje, že ji stavěli postupně a že stavba sama mohla být obřadem."
      },
      praktickeInfo: "Silbury Hill stojí u silnice A4 asi 1,5 km jižně od Avebury. Na kopec je zakázáno vystupovat. Dobrý výhled je z vyhlídky u parkoviště. Kombinujte s kamenným kruhem v Avebury a West Kennet Long Barrow.",
      pribehy: [
        { nazev: "Král na zlatém koni", text: "Pod kopcem je prý pohřben král Sil na koni ze zlata. Kopáči ho hledali staletí, ale nic nenašli." },
        { nazev: "Čertův pytel", text: "Čert chtěl zasypat Marlborough, ale kněží ho zastavili - pytel hlíny upustil a vznikl Silbury Hill." }
      ]
    }
  },
  {
    id: "west-kennet-long-barrow",
    patch: {
      nazev: "West Kennet Long Barrow",
      lead: "Kamenná hrobka starší než Stonehenge, do které můžete vejít - podle pověsti do ní za letního slunovratu vchází kněz s bílým psem.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Hliněná mohyla je dlouhá asi 100 metrů. Na jejím konci stojí obří kameny, za kterými je chodba s pěti komorami. Uvnitř je ticho a šero.",
        historie: "Hrobka vznikla kolem roku 3650 př. n. l. Archeologové v ní našli ostatky desítek lidí. Hrobka se používala asi tisíc let. Pak byl vchod zatarasen obřími kameny.",
        legenda: "Podle místní pověsti do hrobky za úsvitu o letním slunovratu vchází kněz s bílým psem s červenýma ušima. Ve velšských a anglických pověstech bývají takoví psi znamením záhrobí.",
        paranormalni: "Někteří návštěvníci hrobku vyhledávají na meditaci a za slunovratu sem chodí pohanské skupiny. Konkrétní zprávy o zjeveních neexistují.",
        skepticke: "Pověst o knězi s psem je folklor. Hrobka sama je jednou z nejlépe prozkoumaných v Británii."
      },
      praktickeInfo: "Hrobka je asi 1 km jižně od silnice A4 naproti Silbury Hill. Od parkoviště vede polní cesta do kopce asi 15 minut. Vstup zdarma. Uvnitř je tma, hodí se baterka.",
      pribehy: [
        { nazev: "Kněz s bílým psem", text: "Za úsvitu o letním slunovratu prý do hrobky vchází kněz s bílým psem s červenýma ušima." },
        { nazev: "Zavřené dveře", text: "Po tisíci letech používání lidé hrobku uzavřeli obřími kameny, které u vchodu stojí dodnes." }
      ]
    }
  },
  {
    id: "rollright-stones",
    patch: {
      nazev: "Rollright Stones",
      lead: "Kamenný kruh, který nelze spočítat - podle pověsti král a jeho vojsko, které proměnila v kámen čarodějnice.",
      atmosfera: 4.5,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "dobrovolné vstupné",
      popisy: {
        zahada: "Na hranici hrabství Oxfordshire a Warwickshire stojí tři památky: kruh Královi muži, osamělý Králův kámen a skupina Šeptající rytíři. Kameny jsou rozpadlé a pokroucené.",
        historie: "Šeptající rytíři jsou zbytek hrobky z doby kolem 3800 př. n. l. Kruh vznikl kolem roku 2500 př. n. l. a Králův kámen později. O místo se dnes stará nadace.",
        legenda: "Král táhl s vojskem dobýt Anglii a čarodějnice mu řekla: „Když uvidíš Long Compton, budeš anglickým králem.“ Ve výhledu mu ale stál kopec a čarodějnice krále i vojsko proměnila v kámen. Kameny prý nikdo nespočítá dvakrát stejně.",
        paranormalni: "Podle pověstí kameny o půlnoci chodí pít k potoku. Místo je oblíbené u pohanských skupin a proutkařů.",
        skepticke: "Kameny jsou zvětralé a rozlámané, proto každý napočítá jiný počet. Pověst o čarodějnici vznikla dávno po stavbě kruhu."
      },
      praktickeInfo: "Kameny jsou u vesnice Long Compton, asi 5 km severně od Chipping Norton. U vstupu je kasička na dobrovolné vstupné. Parkování u silnice. Kruh a Králův kámen jsou na opačných stranách silnice.",
      pribehy: [
        { nazev: "Král proměněný v kámen", text: "Čarodějnice slíbila králi korunu, pokud uvidí Long Compton. Neviděl - a i s vojskem zkameněl." },
        { nazev: "Kameny nelze spočítat", text: "Podle pověsti nikdo nenapočítá kameny dvakrát stejně. Kdo by to dokázal, tomu se prý splní přání." }
      ]
    }
  },
  {
    id: "drombeg-stone-circle",
    patch: {
      nazev: "Kamenný kruh Drombeg",
      lead: "Kamenný kruh v irském hrabství Cork zvaný Druidův oltář - nasměrovaný k západu slunce o zimním slunovratu, s urnou s ostatky uprostřed.",
      atmosfera: 4.5,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Kruh tvoří sedmnáct kamenů na svahu s výhledem k moři. Osa kruhu míří k místu, kde o zimním slunovratu zapadá slunce mezi kopci.",
        historie: "Při výzkumu v roce 1957 archeologové uprostřed kruhu našli urnu se spálenými ostatky mladého člověka. Radiokarbonové datování ukazuje do pozdní doby bronzové. Vedle kruhu jsou zbytky chat a starobylého vařiště.",
        legenda: "Místní kruhu říkají Druidův oltář a podle tradice tu druidové obětovali. Ve skutečnosti je kruh starší než keltští druidové.",
        paranormalni: "Za zimního slunovratu se sem schází lidé pozorovat západ slunce. Nadpřirozené jevy nejsou hlášené.",
        skepticke: "Ostatky v urně svědčí spíš o pohřbu než o oběti. Název Druidův oltář je pozdější romantický výmysl."
      },
      praktickeInfo: "Drombeg je asi 3 km východně od Glandore v západním Corku, k parkovišti vede úzká silnice. Vstup zdarma. Prohlédněte si i vařiště, kde se kameny rozpálené v ohni vařila voda.",
      pribehy: [
        { nazev: "Zimní slunce", text: "O zimním slunovratu zapadá slunce přesně v ose kruhu mezi kopci na obzoru." },
        { nazev: "Urna uprostřed", text: "Archeologové našli uprostřed kruhu urnu se spálenými ostatky mladého člověka zabalenými do látky." }
      ]
    }
  },
  {
    id: "knowth-passage-tomb",
    patch: {
      nazev: "Knowth",
      lead: "Obří pravěká mohyla v údolí Boyne starší než pyramidy - s největší sbírkou megalitického umění v západní Evropě.",
      atmosfera: 4.7,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "výborná",
      nebezpecnost: "nízká",
      pristupnost: "jen s průvodcem",
      popisy: {
        zahada: "Hlavní mohylu obklopuje 127 obrubníkových kamenů, mnohé s vyrytými spirálami, kruhy a vlnovkami. Kolem stojí menší satelitní hrobky. Mohylou procházejí dvě dlouhé chodby.",
        historie: "Mohyla vznikla kolem roku 3200 př. n. l. a patří k památce UNESCO Brú na Bóinne spolu s Newgrange a Dowth. V Knowthu je asi třetina veškerého megalitického umění západní Evropy. Později na mohyle sídlili raní irští králové a Normané.",
        legenda: "V irské mytologii je údolí Boyne sídlem bohů Tuatha Dé Danann. Knowth bývá spojován s bohyní Buí.",
        paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou. Tajemství místa spočívá v rytinách, jejichž význam nikdo nezná.",
        skepticke: "Rytiny mohou být mapy, kalendáře nebo symboly. Spojení s bohy je pozdější mytologie."
      },
      praktickeInfo: "Knowth se navštěvuje jen s průvodcem z návštěvnického centra Brú na Bóinne u Donore, odkud jezdí kyvadlový autobus. Do chodeb se nevstupuje. Vstupenky v létě rychle mizí, přijeďte brzy ráno. Centrum je asi 50 km severně od Dublinu.",
      pribehy: [
        { nazev: "Kameny se spirálami", text: "Na kamenech kolem mohyly jsou spirály a vlnovky - třetina veškerého megalitického umění západní Evropy." },
        { nazev: "Sídlo králů", text: "Na mohyle později stála sídla raných irských králů a Normané z ní udělali opevnění." }
      ]
    }
  },
  {
    id: "gavrinis-passage-tomb",
    patch: {
      nazev: "Gavrinis",
      lead: "Hrobka na ostrůvku v zálivu Morbihan, jejíž stěny pokrývají zakroucené rytiny - jeden ze stropních kamenů je kus menhiru, jehož druhá část leží na pevnině.",
      atmosfera: 4.7,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup, loď",
      popisy: {
        zahada: "Uvnitř mohyly vede chodba dlouhá asi 14 metrů ke komoře. Většina kamenů ve stěnách je pokrytá vlnovkami, spirálami a obloukovými liniemi, které připomínají otisky prstů.",
        historie: "Hrobka vznikla kolem roku 3500 př. n. l. Stropní kámen komory je částí obrovského zdobeného menhiru. Jeho další kusy jsou v hrobce Table des Marchand v Locmariaqueru. Lidé starší menhir rozbili a použili ve stavbách.",
        legenda: "Místní tradice tu viděla hrobku dávného náčelníka. Rytiny prý obsahují poselství, které ještě nikdo nerozluštil.",
        paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou. Tajemství tvoří rytiny a ostrov, na který se dostanete jen lodí.",
        skepticke: "Rytiny jsou nejspíš symboly spojené s vírou stavitelů. Jejich význam neznáme, ale jde o lidské dílo."
      },
      praktickeInfo: "Na ostrov jezdí loď z přístavu Larmor-Baden, plavba trvá asi 15 minut. Prohlídka s průvodcem, vstupenku rezervujte předem. Otevřeno hlavně od jara do podzimu. Kombinujte s menhiry v Carnacu.",
      pribehy: [
        { nazev: "Rozlámaný menhir", text: "Stropní kámen hrobky a kameny v Locmariaqueru jsou kusy jednoho obřího menhiru, který lidé rozbili." },
        { nazev: "Kamenné otisky prstů", text: "Rytiny na stěnách tvoří soustředné linie, které připomínají obří otisky prstů." }
      ]
    }
  },
  {
    id: "chauvet-cave",
    patch: {
      nazev: "Jeskyně Chauvet",
      lead: "Jeskyně s nejstaršími známými malbami ve Francii, starými asi 36 000 let - lvi, nosorožci a koně, které nikdo neviděl až do roku 1994.",
      atmosfera: 4.8,
      paranormalniAktivita: "žádná",
      historickaDolozenost: "výborná",
      nebezpecnost: "nízká",
      pristupnost: "jen replika",
      popisy: {
        zahada: "Na stěnách jsou stovky zvířat: lvi, nosorožci, mamuti, medvědi, koně. Malíři využili tvar skály, aby zvířata působila jako v pohybu. Na zemi zůstaly kosti medvědů jeskynních a jejich lebka položená na kameni.",
        historie: "Jeskyni objevili v prosinci 1994 tři jeskyňáři v čele s Jean-Marie Chauvetem. Vchod se kdysi zřítil a jeskyně zůstala neporušená. Malby jsou staré přes 30 000 let. Od roku 2014 jsou na seznamu UNESCO.",
        legenda: "Lebka medvěda položená na kameni uprostřed jeskyně vedla k úvahám o medvědím kultu. Režisér Werner Herzog o jeskyni natočil film Jeskyně zapomenutých snů.",
        paranormalni: "Nadpřirozené jevy se tu nepopisují. Úžas vzbuzuje stáří maleb a jejich kvalita.",
        skepticke: "Medvědí kult není prokázaný - lebka mohla na kámen spadnout nebo ji tam někdo položil bez obřadu. Datování maleb je potvrzené mnoha vzorky."
      },
      praktickeInfo: "Originální jeskyně je pro veřejnost uzavřená. Navštívit můžete věrnou repliku Grotte Chauvet 2 u Vallon-Pont-d'Arc v Ardèche, vstupenky rezervujte předem. Kousek odtud je skalní most Pont d'Arc.",
      pribehy: [
        { nazev: "Objev roku 1994", text: "Tři jeskyňáři ucítili proudění vzduchu za kamením, odkopali průchod a jako první lidé po desítkách tisíc let spatřili malby." },
        { nazev: "Lebka na kameni", text: "Uprostřed jeskyně leží na kameni lebka medvěda jeskynního - někteří v tom vidí stopu dávného obřadu." }
      ]
    }
  },
  {
    id: "antequera-dolmens",
    patch: {
      nazev: "Dolmeny v Antequeře",
      lead: "Obří kamenné hrobky v Andalusii - dolmen Menga míří k hoře ve tvaru lidské tváře, ze které podle pověsti skočili milenci.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Dolmen Menga je komora z obřích kamenů, největší z nich váží snad přes 150 tun. Uvnitř je hluboká studna. Vchod nemíří ke slunci, ale k hoře Peña de los Enamorados, která připomíná ležící tvář.",
        historie: "Menga a Viera vznikly zhruba ve 4. tisíciletí př. n. l., hrobka El Romeral s kruhovou kopulí později. Od roku 2016 jsou spolu s horou a skalami El Torcal na seznamu UNESCO.",
        legenda: "Podle pověsti se křesťanský mladík a maurská princezna milovali, ale rodina jim to zakázala. Když je pronásledovali, skočili spolu z hory. Proto se jmenuje Skála milenců.",
        paranormalni: "Nadpřirozené jevy se tu nepopisují. Tajemství tvoří velikost kamenů a jejich zarovnání s horou.",
        skepticke: "Pověst o milencích je mnohem mladší než dolmeny. Zarovnání s horou ale bylo nejspíš záměrné."
      },
      praktickeInfo: "Dolmeny jsou na okraji Antequery, asi 50 km severně od Málagy. Menga a Viera jsou vedle sebe, El Romeral asi 4 km dál. Vstup je zdarma pro občany EU. Kombinujte s krasem El Torcal.",
      pribehy: [
        { nazev: "Skála milenců", text: "Křesťanský mladík a maurská princezna prý skočili z hory, aby je nikdo nerozdělil. Dolmen Menga hledí přímo k ní." },
        { nazev: "Studna v hrobce", text: "Uvnitř dolmenu Menga archeologové objevili hlubokou studnu - v podobné stavbě něco neobvyklého." }
      ]
    }
  },
  {
    id: "almendres-cromlech",
    patch: {
      nazev: "Cromlech dos Almendres",
      lead: "Jeden z nejstarších kamenných kruhů Evropy uprostřed korkových dubů u Évory - starší než Stonehenge o tisíce let.",
      atmosfera: 4.5,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Na svahu mezi korkovými duby stojí přes devadesát kamenů v oválu. Některé mají vyryté kruhy a čáry. Asi kilometr odtud stojí osamělý menhir.",
        historie: "Nejstarší část kruhu vznikla podle archeologů už v 6. tisíciletí př. n. l., další kameny přibývaly po staletí. Kruh znovu objevili až v roce 1964.",
        legenda: "Místní tradice spojovala kameny s Maury a zakopanými poklady. Někteří badatelé spojují uspořádání kamenů se sledováním slunce a měsíce.",
        paranormalni: "Nadpřirozené jevy se tu nepopisují. Místo láká klidem a soumrakem mezi duby.",
        skepticke: "Astronomické teorie nejsou jednoznačně prokázané. Stáří kruhu je ale archeologicky doložené."
      },
      praktickeInfo: "Kruh je asi 15 km západně od Évory u vesnice Guadalupe, poslední úsek je prašná cesta. Vstup zdarma. Nejhezčí je při západu slunce. V létě je velké horko, vezměte vodu.",
      pribehy: [
        { nazev: "Starší než Stonehenge", text: "Nejstarší kameny tu stály možná o tři tisíce let dříve, než vznikl Stonehenge." },
        { nazev: "Osamělý menhir", text: "Kousek od kruhu stojí menhir, který podle některých výkladů souvisí se slunovratem." }
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
