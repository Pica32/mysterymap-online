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
    id: "trosky-castle",
    patch: {
      nazev: "Hrad Trosky",
      lead: "Zřícenina se dvěma věžemi na čedičových sopouchách - Baba a Panna - symbol Českého ráje, viditelný z desítek kilometrů.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup, sezónně",
      popisy: {
        zahada: "Trosky stojí na dvou čedičových sopouchách, zbytcích třetihorní sopky. Na vyšší je věž Panna (57 m), na nižší Baba (47 m). Silueta je symbolem Českého ráje.",
        historie: "Hrad postavil Čeněk z Vartenberka ve druhé polovině 14. století. Za husitských válek ho držela katolická strana. Za třicetileté války byl dobyt a vypálen a od té doby je zříceninou. V 19. století se stal oblíbeným cílem romantických výletníků.",
        legenda: "Pověst vypráví o Ofce z Bukovan, šlechtičně, která po smrti manžela proměnila hrad v loupežnické hnízdo. Jiné pověsti mluví o pokladu ukrytém ve skále mezi věžemi.",
        paranormalni: "Místní tvrdí, že za bouřek lze na věžích spatřit bílou postavu. Vrchol Panny je nepřístupný a čarovný už svou nedostupností.",
        skepticke: "Názvy věží jsou lidové, nemají spojení s konkrétními ženami. Pověst o loupežnicích má nejasné historické jádro. Sopouchy jsou geologický útvar, vznik vysvětluje vulkanismus."
      },
      praktickeInfo: "Trosky jsou asi 1,5 hodiny autem z Prahy, nejbližší železniční zastávka je Ktová nebo Borek pod Troskami. Pěšky se na hrad jde asi 20 minut od parkoviště. Otevřeno je od jara do podzimu, na nádvoří a na věž Baba je přístup. Výhled sahá až ke Krkonoším.",
      pribehy: [
        { nazev: "Panna a Baba", text: "Vyšší věž se jmenuje Panna, nižší Baba - podle lidového vyprávění se vyšší věž nikdy nevzdala." },
        { nazev: "Sopka pod hradem", text: "Hrad stojí na pozůstatcích sopky staré miliony let - čedičové sloupy dávají Troskám jejich nezaměnitelný tvar." }
      ]
    }
  },
  {
    id: "kost-castle",
    patch: {
      nazev: "Hrad Kost",
      lead: "Jeden z nejzachovalejších gotických hradů v Česku, ukrytý v údolí Českého ráje - s mučírnou a pověstí o Bílé paní z rodu Šelmberků.",
      atmosfera: 4.5,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup s průvodcem",
      popisy: {
        zahada: "Hrad Kost stojí na pískovcové skále v Plakánkově údolí. Na rozdíl od jiných hradů nikdy nebyl dobyt a nikdy úplně nezpustl. Jméno má prý podle toho, že je pevný „jako kost“.",
        historie: "Hrad vznikl ve 14. století za pánů z Vartenberka. Později patřil Šelmberkům, Biberštejnům a Lobkovicům. Dnes ho vlastní rod Kinských. V hradní věži je hluboká hladomorna.",
        legenda: "Pověst vypráví o Bílé paní, šlechtičně, která byla krutá k poddaným a po smrti nenachází klid. Další pověsti mluví o pokladu ukrytém v pískovcových skalách pod hradem.",
        paranormalni: "Na hradě se konají noční prohlídky s historkami o duchu Bílé paní. V mučírně jsou repliky mučicích nástrojů.",
        skepticke: "Pověsti o Bílých paních jsou běžné na českých hradech. Kost nebyl dobyt pravděpodobně proto, že nebyl strategicky důležitý."
      },
      praktickeInfo: "Kost je asi 1,5 hodiny autem z Prahy, blízko Sobotky a Jičína. Prohlídky s průvodcem jsou v sezóně (duben-říjen). Kolem vede turistická trasa Plakánkovým údolím. Kombinuj s Troskami a Prachovskými skalami.",
      pribehy: [
        { nazev: "Pevný jako kost", text: "Hrad nikdy nikdo nedobyl - lidová etymologie z toho udělala základ jeho jména." },
        { nazev: "Krutá Bílá paní", text: "Bílá paní z Kosti je podle pověsti duchem šlechtičny, která trýznila poddané." }
      ]
    }
  },
  {
    id: "loket-castle",
    patch: {
      nazev: "Hrad Loket",
      lead: "Gotický hrad nad meandrem Ohře, kde se natáčela bondovka Casino Royale - a kde je uložen „zakletý purkrabí“, meteorit, který podle pověsti spadl z nebe.",
      atmosfera: 4.5,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Hrad Loket stojí na skále nad řekou Ohří, která město obtéká jako loket. V hradě je uložen železný meteorit „Zakletý purkrabí“, který podle pověsti spadl z nebe a měl v sobě uvězněného krutého purkrabího.",
        historie: "Hrad založili ve 12. století Přemyslovci. Jako malý byl tu prý vězněn budoucí císař Karel IV. jeho otcem Janem Lucemburským. V letech 1822-1948 sloužil hrad jako vězení. Goethe sem často jezdil.",
        legenda: "Purkrabí, který týral poddané, byl potrestán tím, že se proměnil v kus železa - nebo ho do železa zaklel čaroděj. Meteorit vážil přes 100 kg, jeho větší část byla roku 1811 odvezena do Vídně.",
        paranormalni: "Na hradě se vypráví o duchu purkrabího a v mučírně je výstava s figurínami. Návštěvníci hledají v hradních sklepích stopy po bývalém vězení.",
        skepticke: "Meteorit je skutečný - jde o železný meteorit, který skutečně spadl z vesmíru, jen ne s purkrabím uvnitř. Historka o malém Karlovi je doložená pouze částečně."
      },
      praktickeInfo: "Loket je asi 20 minut autem z Karlových Varů, jezdí sem vlaky i autobusy. Hrad je otevřený celoročně, prohlídka trvá kolem hodiny. Na nádvoří se natáčel Casino Royale (2006). Kolem vede naučná stezka podél Ohře.",
      pribehy: [
        { nazev: "Zakletý purkrabí", text: "Kus železa z nebe podle pověsti ukrývá krutého purkrabího. Ve skutečnosti jde o meteorit z vesmíru." },
        { nazev: "Bond v Lokti", text: "Hrad hrál v Casino Royale lázně Hotel Splendide v Černé Hoře." }
      ]
    }
  },
  {
    id: "zvikov-castle",
    patch: {
      nazev: "Hrad Zvíkov",
      lead: "„Král českých hradů“ na soutoku Vltavy a Otavy - s věží Markomankou, kde podle pověsti sídlí skřítek Zvíkovský rarášek, který mate a straší.",
      atmosfera: 4.7,
      paranormalniAktivita: "silná místní tradice",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Hrad Zvíkov stojí na ostrohu nad soutokem Vltavy a Otavy. Jeho nejstarší věž Markomanka je postavena z obrovských kamenných kvádrů. Hrad patří k nejstrašidelnějším místům v Česku.",
        historie: "Zvíkov založil ve 13. století Přemysl Otakar I. nebo Václav I. jako královský hrad. Později patřil Rožmberkům. Dnes je státním hradem a díky přehradě Orlík je obklopen vodou.",
        legenda: "Zvíkovský rarášek je malý skřítek, který způsobuje nehody, smrt a zmatky. Kdo přenocuje ve věži Markomance, má podle pověsti do roka zemřít. Proto se tam traduje „zákaz spaní“.",
        paranormalni: "Mnoho příběhů o rarášku zaznamenali i průvodci: zhasínající světla, padající předměty a nesrozumitelné hlasy. Klicperova hra a film Zvíkovský rarášek (1957) z něj udělaly národní postavu.",
        skepticke: "Rarášek je lidová postava, kterou proslavila Klicperova hra. Nehody na hradech lze vysvětlit starými konstrukcemi a nevhodným chováním návštěvníků."
      },
      praktickeInfo: "Zvíkov je asi 1,5 hodiny autem z Prahy, blízko Písku. Prohlídka je s průvodcem nebo samostatná podle sezóny. Na hrad vede most přes Otavu. Kombinuj se zámkem Orlík, kam lze dojet i lodí.",
      pribehy: [
        { nazev: "Noc v Markomance", text: "Podle pověsti, kdo přespí ve věži Markomance, do roka zemře - nikdo to už dlouho nezkoušel." },
        { nazev: "Rarášek z divadla", text: "Klicperova veselohra Zvíkovský rarášek udělala ze skřítka slavnou postavu české kultury." }
      ]
    }
  },
  {
    id: "bojnice-castle",
    patch: {
      nazev: "Zámek Bojnice",
      lead: "Pohádkový zámek na Slovensku přestavěný podle francouzských zámků na Loiře - kde se každé jaro koná Mezinárodní festival duchů a strašidel.",
      atmosfera: 4.6,
      paranormalniAktivita: "silná místní tradice",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup s průvodcem",
      popisy: {
        zahada: "Bojnický zámek na středním Slovensku vypadá jako zámek z pohádky. Pod ním je přírodní jeskyně a v hradním nádvoří roste prastará lípa, kterou podle pověsti zasadil Matyáš Korvín.",
        historie: "Původní hrad je doložen od roku 1113. Na přelomu 19. a 20. století ho hrabě Ján Pálffy přestavěl v romantickém stylu podle zámků na Loiře. Dnes je pobočkou Slovenského národního muzea.",
        legenda: "Mezi duchy patří Bílá paní, nešťastně zamilovaná dívka, která podle pověsti zemřela na zámku, a duch hraběte Pálffyho, který prý nechce opustit své sbírky.",
        paranormalni: "Každý rok v květnu se koná Mezinárodní festival duchů a strašidel, kdy zámek obsadí herci v kostýmech. Návštěvníci hlásí zjevení v hradní jeskyni.",
        skepticke: "Festival je divadelní akce, ne paranormální jev. Pověsti o otrávené ženě a zakletých pokladech jsou typické pro šlechtická sídla."
      },
      praktickeInfo: "Bojnice jsou asi 2,5 hodiny autem z Bratislavy, blízko Prievidze. Prohlídky jsou s průvodcem celoročně (kromě pondělí). Festival duchů je v květnu a vstupenky se rychle vyprodávají. Vedle zámku je zoo a lázně.",
      pribehy: [
        { nazev: "Festival duchů", text: "Každý květen zámek ožívá desítkami duchů, čarodějnic a strašidel - jedna z nejoblíbenějších akcí na Slovensku." },
        { nazev: "Lípa krále Matyáše", text: "Prastará lípa u zámku je podle pověsti stará přes 600 let a pamatuje uherského krále." }
      ]
    }
  },
  {
    id: "trakai-island-castle",
    patch: {
      nazev: "Hrad Trakai",
      lead: "Jediný hrad na ostrově ve východní Evropě, z červených cihel uprostřed jezera Galvė - sídlo litevských velkoknížat a karaimských stráží.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Ostrovní hrad Trakai stojí na ostrůvku v jezeře Galvė asi 30 km od Vilniusu. K hradu vede dřevěný most.",
        historie: "Hrad začal stavět velkokníže Kęstutis ve 14. století a dokončil jeho syn Vytautas Veliký. Po bitvě u Grunwaldu (1410) ztratil vojenský význam a zchátral. V 20. století byl rekonstruován. Okolní Trakai je domovem Karaimů, turkického národa, kterého Vytautas přivedl z Krymu jako stráž.",
        legenda: "Pověst vypráví o Vytautově pokladu ukrytém na dně jezera a o tom, že velkokníže zemřel v hradě roku 1430, když mu nedorazila královská koruna.",
        paranormalni: "Za mlhavých rán vypadá hrad, jako by se vznášel nad jezerem. Místní vyprávějí o duchu velkoknížete na hradbách.",
        skepticke: "Vytautova smrt v Trakai je doložená, ale spojení s nedoručenou korunou je zjednodušení. Hrad je z velké části rekonstrukcí z 20. století."
      },
      praktickeInfo: "Trakai je asi 40 minut autobusem nebo vlakem z Vilniusu. Hrad je placený, v jeho muzeu je historie Litvy. Ochutnej karaimské pirožky kibinai v místních restauracích. Kolem jezera lze půjčit loďky.",
      pribehy: [
        { nazev: "Karaimští strážci", text: "Velkokníže Vytautas přivedl z Krymu Karaimy, kteří tu žijí dodnes - jejich dřevěné domy mají tři okna do ulice." },
        { nazev: "Koruna, která nedorazila", text: "Vytautas měl být korunován králem, ale korunu zadrželi Poláci. Zemřel krátce poté v Trakai." }
      ]
    }
  },
  {
    id: "rasnov-citadel",
    patch: {
      nazev: "Pevnost Râșnov",
      lead: "Rolnická pevnost na kopci v Transylvánii, kde se obyvatelé při obléhání skrývali s dobytkem - a kde studnu kopali dva turečtí zajatci 17 let.",
      atmosfera: 4.5,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Citadela Râșnov stojí na kopci nad městem Râșnov kousek od Branu. Jde o rolnickou pevnost, kam se ukrývali obyvatelé okolních vesnic s rodinami a dobytkem. Na kopci je velký nápis RÂȘNOV ve stylu Hollywoodu.",
        historie: "Pevnost vznikla ve 13.-14. století, podle části historiků ji založili řádoví rytíři a rozšířili místní obyvatelé. Byla dobyta jen jednou, roku 1612, když nepřítel našel tajnou cestu k vodě. Ve 30. letech 20. století byla restaurována.",
        legenda: "Podle pověsti studnu hlubokou asi 146 metrů kopali dva turečtí zajatci 17 let za slib svobody. Po dokončení byli prý stejně popraveni. Na stěně studny mají být vyryté verše z Koránu.",
        paranormalni: "Návštěvníci zmiňují ozvěny ve studni a tísnivou atmosféru v ruinách. V pevnosti se natáčel film Návrat do Cold Mountain.",
        skepticke: "Pověst o zajatcích je podobná jiným transylvánským legendám (např. Corvin). Hloubka studny a délka kopání jsou spíše tradice než doložená fakta."
      },
      praktickeInfo: "Râșnov je asi 20 minut autem z Brašova a 15 minut od Branu - ideální kombinace na jeden den. Na kopec vede cesta pěšky nebo vláček. Citadela je otevřená celoročně. Výhled sahá na hory Bucegi.",
      pribehy: [
        { nazev: "Studna zajatců", text: "Dva zajatci kopali skrze skálu 17 let s nadějí na svobodu - pověst o hořkém konci se vypráví dodnes." },
        { nazev: "Pevnost pro vesničany", text: "Ne rytíři, ale rolníci se tu bránili - za hradbami měli domy, školu i kapli." }
      ]
    }
  },
  {
    id: "patarei-sea-fortress-prison",
    patch: {
      nazev: "Vězení Patarei v Tallinnu",
      lead: "Námořní pevnost z 19. století, z níž se stalo sovětské vězení - fungovalo až do roku 2002 a dodnes v ní zůstaly cely, jak je opustili poslední vězni.",
      atmosfera: 4.8,
      paranormalniAktivita: "pietní místo s temnou atmosférou",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká na trase",
      pristupnost: "placený vstup, sezónně",
      popisy: {
        zahada: "Patarei je komplex budov na pobřeží Tallinnu. Opuštěné cely, oprýskané zdi a popravčí místnost vytvářejí jednu z nejtemnějších atmosfér v Evropě.",
        historie: "Pevnost postavil car Mikuláš I. v letech 1828-1840 jako námořní dělostřeleckou pevnost. Od roku 1920 sloužila jako vězení. Za sovětské a nacistické okupace v ní byly vězněny a popravovány tisíce lidí. Vězení se uzavřelo až roku 2002. Dnes v něm vzniká Mezinárodní muzeum obětí komunismu.",
        legenda: "Opuštěné cely s nástěnnými kresbami vězňů a lékařské místnosti dodávají místu mrazivou atmosféru. Patarei je oblíbené místo festivalů a výstav.",
        paranormalni: "Návštěvníci hovoří o tíze v popravčí cele a o pocitu přítomnosti. Patarei se objevuje v pořadech o opuštěných místech.",
        skepticke: "Síla místa vychází z historie skutečného utrpení. Jde o pietní místo, ne o atrakci se strašidly."
      },
      praktickeInfo: "Patarei je asi 15 minut chůze od Starého Města Tallinnu, kousek od přístavu Seaplane Harbour (Lennusadam). Areál je v rekonstrukci, otevírací doby se mění - ověř online. Chovej se s respektem.",
      pribehy: [
        { nazev: "Vězení do roku 2002", text: "Poslední vězni odešli teprve v roce 2002 - opuštěné cely tak působí, jako by se zastavil čas." },
        { nazev: "Muzeum obětí", text: "V pevnosti vzniká muzeum věnované obětem komunistických režimů." }
      ]
    }
  },
  {
    id: "kaunas-ninth-fort",
    patch: {
      nazev: "Devátá pevnost v Kaunasu",
      lead: "Carská pevnost, která se za druhé světové války stala místem vyvraždění desítek tisíc lidí - dnes muzeum a monumentální památník.",
      atmosfera: 5,
      paranormalniAktivita: "pietní místo",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup do muzea",
      popisy: {
        zahada: "Devátá pevnost na okraji Kaunasu je součástí carského opevnění z počátku 20. století. Dnes nad ní ční 32 metrů vysoký betonový památník obětem.",
        historie: "Za sovětské okupace sloužila jako vězení NKVD. Po nacistické invazi roku 1941 zde nacisté a jejich kolaboranti zavraždili kolem 50 000 lidí, především Židů z Kaunasu a z celé Evropy. Roku 1943 se skupině vězňů podařilo z pevnosti uprchnout.",
        legenda: "Útěk 64 vězňů o Vánocích 1943 se stal symbolem odporu. Vězni měli za úkol vykopávat a pálit těla obětí, aby nacisté zahladili stopy.",
        paranormalni: "Návštěvníci popisují tíhu a ticho. Místo slouží k připomínce obětí.",
        skepticke: "Místo nemá paranormální rozměr - je svědectvím o genocidě. Chovej se s úctou."
      },
      praktickeInfo: "Devátá pevnost je asi 15 minut autem nebo autobusem z centra Kaunasu, kousek od dálnice do Vilniusu. Muzeum je placené a v pondělí zavřené. Prohlídka trvá 2 hodiny. Prosíme, nefoť se pro zábavu.",
      pribehy: [
        { nazev: "Vánoční útěk", text: "O Vánocích 1943 se 64 vězňům podařilo uprchnout. Jejich svědectví odhalila, co se v pevnosti dělo." },
        { nazev: "Památník", text: "Obří betonový památník z roku 1984 připomíná oběti a je viditelný z velké dálky." }
      ]
    }
  },
  {
    id: "olavinlinna-castle",
    patch: {
      nazev: "Hrad Olavinlinna",
      lead: "Nejsevernější středověký kamenný hrad světa na ostrůvku v jezerech Savonlinny - s pověstí o dívce zazděné ve zdi, na jejímž místě vyrostla jeřabina.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Olavinlinna stojí na skalním ostrůvku mezi jezery Haukivesi a Pihlajavesi ve městě Savonlinna. Každé léto se tu koná slavný operní festival.",
        historie: "Hrad založil roku 1475 dánský šlechtic Erik Axelsson Tott ve službách Švédska na ochranu hranice s Ruskem. Několikrát změnil majitele mezi Švédskem a Ruskem. Operní festival se tu koná od roku 1912.",
        legenda: "Podle pověsti byla dívka zazděna do zdi hradu za to, že zradila. Z místa, kde zemřela, vyrostla jeřabina s bílými květy jako symbol její nevinnosti.",
        paranormalni: "Místní tvrdí, že v noci lze na hradbách spatřit dívku v bílém. Jezera kolem jsou podle pověstí domovem vodníků.",
        skepticke: "Pověsti o zazděných dívkách jsou běžné po celé Evropě. Jeřabiny rostou na hradbách díky ptákům, kteří roznášejí semena."
      },
      praktickeInfo: "Savonlinna je asi 4 hodiny vlakem nebo autem z Helsinek. Na hrad vede pontonový most. Prohlídky s průvodcem jsou v angličtině a dalších jazycích. Operní festival se koná v červenci, vstupenky je nutné rezervovat měsíce předem.",
      pribehy: [
        { nazev: "Jeřabina u zdi", text: "Bílé květy jeřabiny na hradbách jsou podle pověsti znamením nevinnosti zazděné dívky." },
        { nazev: "Opera na hradě", text: "Každý červenec zní nádvořím opera - festival patří k nejznámějším v Evropě." }
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
