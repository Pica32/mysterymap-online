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
    id: "chateau-de-brissac",
    patch: {
      nazev: "Zámek Brissac",
      lead: "Nejvyšší zámek Francie, „obr Loiry“, kde podle pověsti bloudí Zelená paní - královská dcera zavražděná manželem i s milencem v roce 1477.",
      atmosfera: 4.6,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Zámek má sedm pater a říká se mu obr Loiry. Uvnitř jsou bohaté sály, divadlo a vinné sklepy. V kapli ve věži se prý zjevuje žena v zeleném.",
        historie: "Zámek od roku 1502 patří rodu Cossé-Brissac. Na místě stál středověký hrad rodu Brézé. V roce 1477 zde Jacques de Brézé přistihl svou ženu Charlotte, nemanželskou dceru krále Karla VII. a Agnès Sorel, s milencem a oba zabil.",
        legenda: "Duch Charlotte, Zelená paní (La Dame Verte), se podle pověsti zjevuje v zelených šatech. Místo očí a nosu má prý jen prázdné otvory. Nejčastěji ji prý potkávají v pokoji v kapli ve věži.",
        paranormalni: "Zámek se s pověstí o Zelené paní netají a hosté i zaměstnanci vyprávějí o sténání a krocích. Brissac se objevuje v pořadech o nejstrašidelnějších zámcích Francie.",
        skepticke: "Vražda z roku 1477 je historicky doložená. Zjevení jsou součástí ústní tradice a turistické prezentace zámku."
      },
      praktickeInfo: "Brissac je asi 20 km jihovýchodně od Angers v údolí Loiry. Prohlídky s průvodcem trvají asi hodinu, součástí je i degustace ve vinných sklepích. Zámek je otevřen od dubna do října. Kombinujte s Angers a Saumurem.",
      pribehy: [
        { nazev: "Královská dcera", text: "Charlotte byla dcerou krále Karla VII. a jeho milenky Agnès Sorel - a přesto ji manžel zabil." },
        { nazev: "Obr Loiry", text: "Se sedmi patry je Brissac nejvyšším zámkem Francie." }
      ]
    }
  },
  {
    id: "monastery-of-saint-naum",
    patch: {
      nazev: "Klášter svatého Nauma",
      lead: "Klášter na břehu Ohridského jezera založený žákem Cyrila a Metoděje - podle pověsti stačí přiložit ucho k hrobu světce a uslyšíte tlukot jeho srdce.",
      atmosfera: 4.6,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné, kostel placený",
      popisy: {
        zahada: "Klášter stojí na skalce nad jezerem, kousek od albánské hranice. Na nádvoří se procházejí pávi. Pod klášterem vyvěrají průzračné prameny, které napájejí Ohridské jezero.",
        historie: "Klášter založil v roce 905 svatý Naum, žák Cyrila a Metoděje, který šířil slovanské písmo a vzdělanost. Dnešní kostel pochází hlavně z 16. století, uvnitř jsou fresky a hrob světce.",
        legenda: "Podle pověsti stačí přiložit ucho k Naumovu hrobu a uslyšíte tlukot jeho srdce. Světec prý zapřáhl medvěda do pluhu, když mu medvěd sežral vola.",
        paranormalni: "Poutníci k hrobu přicházejí s prosbami o uzdravení a vyprávějí o zázracích. Klášter je důležité poutní místo.",
        skepticke: "Tlukot srdce je pověst, kterou si poutníci předávají. Zvuk může být vlastní tep poslouchajícího."
      },
      praktickeInfo: "Klášter je asi 30 km jižně od Ohridu, dojedete autobusem nebo lodí po jezeře (v létě). Z kláštera se můžete projet loďkou po pramenech Černého Drinu. Vstup do kostela je za malý poplatek, oblečení by mělo zakrývat ramena.",
      pribehy: [
        { nazev: "Srdce v hrobě", text: "Kdo přiloží ucho k hrobu svatého Nauma, prý uslyší tlukot jeho srdce." },
        { nazev: "Medvěd u pluhu", text: "Podle legendy světec zapřáhl do pluhu medvěda, který mu předtím sežral vola." }
      ]
    }
  },
  {
    id: "srebrna-gora-fortress",
    patch: {
      nazev: "Pevnost Srebrna Góra",
      lead: "Největší horská pevnost Evropy, kterou nechal vybudovat Fridrich Veliký v Sovích horách - Napoleonovi vojáci ji obléhali, ale nikdy ji nedobyli.",
      atmosfera: 4.5,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Pevnost tvoří soustava bastionů, příkopů a kasemat rozložených na hřebenech nad průsmykem. Ústřední donžon má mohutné zdi a labyrint chodeb.",
        historie: "Pevnost nechal pruský král Fridrich II. Veliký postavit v letech 1765-1777 jako ochranu Slezska. V roce 1807 ji obléhala vojska Napoleonových spojenců, ale nebyla dobyta - obléhání ukončilo příměří. Ve druhé světové válce zde byl zajatecký tábor pro polské důstojníky.",
        legenda: "Místní vyprávějí o Bílé paní, která se zjevuje na hradbách, a o pokladu ukrytém v podzemních chodbách. Pevnost se pojí i s pověstmi o nacistických pokladech v Sovích horách.",
        paranormalni: "Návštěvníci noční prohlídky popisují v kasematách kroky a zvuky. Pevnost je oblíbená na akce s historickou rekonstrukcí.",
        skepticke: "Pověsti o pokladech nejsou doloženy. Zvuky v kasematách způsobuje vítr a ozvěna."
      },
      praktickeInfo: "Srebrna Góra je asi 1,5 hodiny autem z Vratislavi, nedaleko českých hranic u Broumova. Donžon je přístupný s průvodcem. Kombinujte s komplexy projektu Riese (Osówka, Włodarz) a hradem Książ.",
      pribehy: [
        { nazev: "Pevnost, která odolala", text: "Napoleonova spojenecká vojska ji v roce 1807 obléhala, ale nedobyla." },
        { nazev: "Král a hory", text: "Fridrich Veliký nechal postavit pevnost přímo na hřebenech, aby chránila průsmyk do Slezska." }
      ]
    }
  },
  {
    id: "damanhur-temples",
    patch: {
      nazev: "Chrámy Damanhur",
      lead: "Podzemní chrámy, které členové alternativní komunity u Turína tajně kopali do hory přes deset let - úřady se o nich dozvěděly až v roce 1992.",
      atmosfera: 4.5,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "jen s průvodcem",
      popisy: {
        zahada: "Pod horou je soustava sálů zdobených vitrážemi, mozaikami, malbami a zrcadly: Sál zrcadel, Sál vody, Sál Země a Labyrint. Chrámy působí jako podzemní katedrála.",
        historie: "Komunitu Damanhur založil v roce 1975 Oberto Airaudi. Od roku 1978 její členové tajně ručně kopali podzemní chrámy. V roce 1992 se o nich úřady dozvěděly od bývalého člena a hrozilo zbourání. Nakonec byly stavby dodatečně legalizovány.",
        legenda: "Komunita tvrdí, že chrámy stojí na průsečíku „synchronických linií“, energetických proudů Země. Členové přijímají zvířecí a rostlinná jména.",
        paranormalni: "Návštěvníci popisují silné pocity v sálech. Komunita pořádá meditace a duchovní programy.",
        skepticke: "Synchronické linie nemají vědecké potvrzení. Chrámy jsou ale skutečným, pozoruhodným uměleckým a technickým dílem."
      },
      praktickeInfo: "Damanhur je ve Valchiusella u Baldissero Canavese, asi hodinu autem z Turína. Prohlídky chrámů jsou jen s průvodcem a nutno je rezervovat předem. Fotografování uvnitř bývá omezené.",
      pribehy: [
        { nazev: "Tajná katedrála", text: "Přes deset let kopali členové komunity chrámy tajně, aniž by o tom věděly úřady." },
        { nazev: "Sál zrcadel", text: "Strop ze skleněných mozaik a zrcadla vytvářejí iluzi nekonečného prostoru." }
      ]
    }
  },
  {
    id: "nemea",
    patch: {
      nazev: "Nemea",
      lead: "Místo, kde podle mýtu Hérakles zabil nemejského lva - antický stadion s tunelem plným nápisů sportovců a obnovené hry, kde se běží naboso.",
      atmosfera: 4.3,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Ve svatyni stojí Diův chrám s několika obnovenými sloupy. Nedaleko je stadion s klenutým tunelem, kterým vstupovali běžci. Na stěnách tunelu jsou dodnes vyryté nápisy sportovců.",
        historie: "Nemejské hry patřily ke čtyřem velkým panhelénským hrám. Tunel ke stadionu pochází z doby kolem roku 320 př. n. l. V roce 1996 byly hry obnoveny a koná se jich každé čtyři roky, závodníci běží naboso v tunice.",
        legenda: "Podle mýtu Hérakles v jeskyni u Nemey uškrtil lva s neprůstřelnou kůží. Byl to první z jeho dvanácti úkolů. Kůži lva pak nosil jako brnění.",
        paranormalni: "Paranormální jevy nejsou hlášeny. Síla místa je v mýtu a v nápisech dávných sportovců.",
        skepticke: "Lev je mytická postava. Hry a stadion jsou skutečné a dobře prozkoumané."
      },
      praktickeInfo: "Nemea je asi 30 km od Korintu, asi 1,5 hodiny autem z Athén. Areál svatyně a stadion jsou vzdálené asi 500 m. Kombinujte s vinařskou oblastí Nemea (odrůda Agiorgitiko) a Mykénami.",
      pribehy: [
        { nazev: "Lev s neprůstřelnou kůží", text: "Hérakles musel lva uškrtit holýma rukama, protože jeho kůži neprorazila žádná zbraň." },
        { nazev: "Nápisy v tunelu", text: "Antičtí běžci vyryli do stěn tunelu svá jména a vtipy - dodnes čitelné." }
      ]
    }
  },
  {
    id: "dun-aonghasa",
    patch: {
      nazev: "Dún Aonghasa",
      lead: "Kamenná pevnost na okraji útesu ostrova Inis Mór, kde hradby končí nad téměř stometrovým srázem do Atlantiku - bez zábradlí.",
      atmosfera: 4.7,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "střední",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Pevnost tvoří tři půlkruhové kamenné valy, které končí přímo na okraji útesu. Před nimi je pás ostrých zapíchnutých kamenů - obranná překážka zvaná chevaux-de-frise.",
        historie: "Nejstarší části pevnosti pocházejí z doby bronzové, asi z let kolem 1100 př. n. l. Později byla rozšiřována. Je jednou z nejvýznamnějších prehistorických pevností Evropy.",
        legenda: "Podle tradice pevnost postavil král Aonghus z mytického národa Fir Bolg, který prchal před nepřáteli na okraj světa.",
        paranormalni: "Paranormální jevy nejsou hlášeny. Návštěvníky ohromuje vítr, prázdný horizont a pocit konce světa.",
        skepticke: "Fir Bolg jsou mytický národ irských legend. Pevnost postavili prehistoričtí obyvatelé ostrova."
      },
      praktickeInfo: "Na Inis Mór jezdí trajekt z Rossaveal (asi 40 minut) nebo z Doolinu. Z přístavu Kilronan dojedete na kole nebo minibusem k návštěvnickému centru, odkud vede asi 1 km strmá cesta. Na okraji útesu nejsou zábradlí - buďte velmi opatrní, zvláště ve větru.",
      pribehy: [
        { nazev: "Hradby nad propastí", text: "Kamenné valy končí přímo na okraji útesu, kde pod vámi hučí Atlantik." },
        { nazev: "Útěk na kraj světa", text: "Mytický národ Fir Bolg prý na okraji útesu hledal poslední útočiště." }
      ]
    }
  },
  {
    id: "lagarfljot",
    patch: {
      nazev: "Jezero Lagarfljót",
      lead: "Dlouhé ledovcové jezero na východě Islandu, kde od středověku žije Lagarfljótský červ - a kde v roce 2012 natočené video obletělo svět.",
      atmosfera: 4.4,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Jezero je dlouhé asi 25 km, úzké a hluboké, s kalnou ledovcovou vodou. Nad ním se tyčí vodopád Hengifoss. V kalné vodě je těžké cokoli rozeznat.",
        historie: "Zmínky o tvorovi v jezeře se objevují v islandských letopisech už ze 14. století. V roce 2012 natočil místní farmář video, na kterém se ve vodě vlní dlouhý tvar. Video se rozšířilo po celém světě a místní komise ho v roce 2014 s humorem uznala za pravé.",
        legenda: "Podle pověsti dívka dostala zlatý prsten a položila na něj malého červa, aby zlato rostlo. Červ ale rostl s ním, až byl obrovský, a dívka ho vyhodila do jezera. Tam žije dodnes.",
        paranormalni: "Pozorování hadovitého tvora se opakují po staletí. Turisté se u jezera dívají po hladině.",
        skepticke: "Video může ukazovat zamrzlou rybářskou síť nebo plastovou fólii pohybovanou proudem. Kalná voda a vlny vytvářejí iluze."
      },
      praktickeInfo: "Lagarfljót je u města Egilsstaðir na východě Islandu, asi 9 hodin autem z Reykjavíku nebo hodina letadlem. Kombinujte s vodopádem Hengifoss (pěšky asi hodina) a lesem Hallormsstaður.",
      pribehy: [
        { nazev: "Červ ze zlata", text: "Malý červ položený na zlatý prsten prý rostl spolu se zlatem, až musel být vhozen do jezera." },
        { nazev: "Video z roku 2012", text: "Farmář natočil vlnící se tvar v jezeře a video obletělo svět." }
      ]
    }
  },
  {
    id: "almourol-castle",
    patch: {
      nazev: "Hrad Almourol",
      lead: "Templářský hrad na ostrůvku uprostřed řeky Tejo - k jeho hradbám se dostanete jen loďkou a podle pověsti tu v noci bloudí maurská princezna.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "loďka, placený vstup",
      popisy: {
        zahada: "Hrad stojí na skalním ostrůvku uprostřed řeky. Jeho věže a hradby se odrážejí ve vodě a vypadají jako z rytířského románu.",
        historie: "Hrad v roce 1171 přestavěl templářský mistr Gualdim Pais jako součást obrany hranice proti Maurům. Templáři zde měli silnou přítomnost, než byl řád zrušen. V 19. století byl hrad romanticky obnoven.",
        legenda: "Podle pověsti se maurská princezna zamilovala do křesťanského rytíře, a když byl hrad dobyt, vrhla se z věže. Za úplňku prý chodí po hradbách. Jiná pověst vypráví o pokladu templářů ukrytém pod hradem.",
        paranormalni: "Místní a turisté vyprávějí o postavě na hradbách. Doložené jevy nejsou.",
        skepticke: "Pověsti o princeznách a pokladech templářů jsou častým romantickým motivem. Romantická obnova hradu v 19. století je podpořila."
      },
      praktickeInfo: "Almourol je u obce Vila Nova da Barquinha, asi 1,5 hodiny autem z Lisabonu. Na ostrov vozí loďky z břehu, plavba trvá pár minut. Kombinujte s městem Tomar a templářským klášterem Convento de Cristo.",
      pribehy: [
        { nazev: "Princezna na hradbách", text: "Maurská princezna se prý vrhla z věže a za úplňku se vrací na hradby." },
        { nazev: "Hrad na řece", text: "K hradu se dostanete jen loďkou, protože stojí na skalnatém ostrůvku uprostřed Teja." }
      ]
    }
  },
  {
    id: "san-juan-de-la-pena",
    patch: {
      nazev: "Klášter San Juan de la Peña",
      lead: "Klášter ukrytý pod obrovským skalním převisem v Aragonii, kde odpočívají aragonští králové - a kde byl podle tradice uchováván svatý grál.",
      atmosfera: 4.8,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Starý klášter stojí pod gigantickým skalním převisem, který tvoří jeho střechu. Románský ambit má hlavice sloupů s biblickými výjevy. Je tu i panteon aragonských králů.",
        historie: "Klášter byl centrem rodícího se Aragonského království. Ambit pochází z 12. století. Po požáru v 17. století byl vedle postaven nový barokní klášter, ale starý klášter pod skálou zůstal zachován.",
        legenda: "Podle tradice zde mniši uchovávali kalich, ze kterého pil Kristus při poslední večeři. Dnes je kalich považovaný za tento grál v katedrále ve Valencii. Zakládající legenda vypráví o šlechtici Votovi, jehož kůň při honu na jelena spadl ze skály, ale Voto byl zázračně zachráněn a našel tu poustevnu.",
        paranormalni: "Návštěvníci mluví o silné, až mystické atmosféře pod skálou. Klášter je častým cílem hledačů grálu.",
        skepticke: "Pravost grálu nelze prokázat. Kalich ve Valencii je římská kamenná nádoba s pozdějšími úpravami."
      },
      praktickeInfo: "Klášter je asi 20 km od města Jaca v Aragonii, autem po horské silnici. Mezi starým a novým klášterem jezdí kyvadlový autobus. Prohlídka trvá 1-2 hodiny. Kombinujte s Jacou a Pyrenejemi.",
      pribehy: [
        { nazev: "Grál pod skálou", text: "Podle tradice zde mniši ukrývali kalich z poslední večeře, dnes uchovávaný ve Valencii." },
        { nazev: "Pád z útesu", text: "Šlechtic Voto prý při honu spadl i s koněm ze skály a zázračně přežil." }
      ]
    }
  },
  {
    id: "ochate-ghost-village",
    patch: {
      nazev: "Opuštěná vesnice Ochate",
      lead: "Vesnice v enklávě Treviño, kterou v 19. století vyhubily epidemie - v 80. letech se stala „prokletou vesnicí“ španělských časopisů o UFO a záhadách.",
      atmosfera: 4.6,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Z vesnice zbyla jen románská věž kostela a několik rozpadlých zdí v poli. Místo je tiché a opuštěné, obklopené lesem a kopci.",
        historie: "Ochate leží v enklávě Treviño, která patří provincii Burgos, ale je obklopena Baskickem. V 19. století vesnici postihly epidemie neštovic, tyfu a cholery a v 70. letech 19. století zůstala opuštěná.",
        legenda: "V 80. letech 20. století španělský časopis o záhadách popsal Ochate jako prokletou vesnici. Objevily se příběhy o UFO, světlech, zvířatech, která se tu chovají divně, a o lidech, kteří zmizeli.",
        paranormalni: "Fanoušci záhad sem jezdí natáčet a nahrávat. Hlášení o světlech a zvucích se opakují.",
        skepticke: "Skutečnou příčinou opuštění vesnice byly epidemie. Většina záhadných příběhů vznikla až v 80. letech díky médiím."
      },
      praktickeInfo: "Ochate je asi 30 km jižně od Vitorie-Gasteiz. Z vesnice Imíruri vede ke zbytkům Ochate pěší cesta (asi 30 minut). Místo je volně přístupné, nejsou tu žádné služby. Vezměte pevnou obuv a vodu.",
      pribehy: [
        { nazev: "Tři epidemie", text: "Neštovice, tyfus a cholera vyhubily vesnici během několika let." },
        { nazev: "Časopis udělal z vesnice legendu", text: "Prokletou vesnicí se Ochate stalo až díky článkům v 80. letech 20. století." }
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
