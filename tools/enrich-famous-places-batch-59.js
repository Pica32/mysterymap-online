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
    id: "san-galgano-abbey",
    patch: {
      nazev: "Opatství San Galgano",
      lead: "Toskánské opatství bez střechy a kousek nad ním skutečný meč zaražený do kamene - rytíř Galgano jím v roce 1180 prý zřekl válčení.",
      atmosfera: 4.8,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup, kaple zdarma",
      popisy: {
        zahada: "Gotický kostel opatství nemá střechu, místo ní je nebe a v trávě rostou květiny. Na kopci nad ním stojí kruhová kaple Montesiepi a v jejím středu trčí z kamene rezavý jílec meče.",
        historie: "Galgano Guidotti byl rytíř, který se podle životopisu na Vánoce 1180 obrátil k víře a zarazil meč do skály na znamení, že odkládá zbraně. Žil zde jako poustevník a zemřel v roce 1181. Cisterciáci pak postavili opatství, které v 18. století chátralo, až se zřítila střecha.",
        legenda: "Podle pověsti meč vnikl do kamene jako do másla. Když se ho později pokusil ukrást závistivý mnich, vlci mu prý utrhli ruce. Mumifikované ruce jsou dodnes vystavené v kapli.",
        paranormalni: "Poutníci k meči přicházejí s modlitbami. Příběh bývá přirovnáván k artušovskému meči v kameni.",
        skepticke: "Rozbor kovu ukázal, že meč může pocházet z 12. století. Ruce v kapli nejsou zkoumané. Spojení s legendou o králi Artušovi je jen spekulace."
      },
      praktickeInfo: "San Galgano je asi 30 km jihozápadně od Sieny u obce Chiusdino. Vstup do opatství je placený, kaple s mečem na kopci je zdarma, vede k ní krátká cesta asi 10 minut. V létě se v opatství konají koncerty.",
      pribehy: [
        { nazev: "Meč v kameni", text: "Rytíř Galgano prý zarazil meč do skály, aby ukázal, že se vzdává války. Jílec trčí z kamene dodnes." },
        { nazev: "Ruce zloděje", text: "Mnich, který se pokusil meč ukrást, prý přišel o ruce - vlci mu je utrhli. Mumifikované ruce jsou v kapli." }
      ]
    }
  },
  {
    id: "rocca-calascio",
    patch: {
      nazev: "Rocca Calascio",
      lead: "Jedna z nejvýše položených pevností Itálie, 1 460 metrů nad mořem v pohoří Gran Sasso - kulisa filmu Jestřábí žena.",
      atmosfera: 4.8,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Kamenná pevnost se čtyřmi věžemi stojí na skalním hřebeni nad údolím. Pod ní leží malá vesnice a osmiboký kostel Santa Maria della Pietà.",
        historie: "Pevnost vznikla jako strážní věž kolem roku 1000 a později byla rozšířena. Sloužila ke kontrole cest pastevců s ovcemi. Zemětřesení v roce 1703 ji poškodilo a vesnice se vylidnila.",
        legenda: "Podle pověsti postavili kostel Santa Maria della Pietà na místě, kde místní porazili bandity. Pevnost se objevila ve filmech Jestřábí žena (1985) a Američan (2010).",
        paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou. Tajemství tvoří mlha, vítr a samota.",
        skepticke: "Pověst o kostele není doložená. Historie pevnosti a zemětřesení je dobře známá."
      },
      praktickeInfo: "Rocca Calascio je asi 30 km od L'Aquily. Z parkoviště vede strmá cesta pěšky asi 20 minut. Vstup zdarma. V zimě bývá sníh. Ve vesnici pod pevností jsou ubytování a restaurace.",
      pribehy: [
        { nazev: "Filmová pevnost", text: "Pevnost hrála ve filmu Jestřábí žena s Michelle Pfeiffer a Rutgerem Hauerem." },
        { nazev: "Zemětřesení 1703", text: "Silné zemětřesení pevnost poškodilo a obyvatelé vesnici postupně opustili." }
      ]
    }
  },
  {
    id: "monte-cristo-island",
    patch: {
      nazev: "Ostrov Monte Cristo",
      lead: "Žulový ostrov v Toskánsku, kde podle Dumasova románu ležel poklad hraběte Monte Christo - za rok se na něj dostane jen asi tisícovka návštěvníků.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "střední",
      pristupnost: "jen s povolením",
      popisy: {
        zahada: "Ostrov je skalnatý, strmý a téměř bez stromů. Je přírodní rezervací, kde žijí divoké kozy a vzácní ptáci. Na svahu jsou ruiny starého kláštera.",
        historie: "Na ostrově od středověku stál klášter svatého Mamiliána. V roce 1553 ho vyplenili piráti. Alexandre Dumas ostrov proslavil románem Hrabě Monte Christo (1844).",
        legenda: "Podle pověsti mniši ukryli na ostrově poklad, když na ně zaútočili piráti. Dumas tuto pověst použil v románu. Hledači pokladů ho prý hledali po staletí.",
        paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou. Tajemství tvoří nedostupnost ostrova.",
        skepticke: "Poklad mnichů nebyl nikdy nalezen a je nejspíš legendou. Dumasův poklad je smyšlený."
      },
      praktickeInfo: "Ostrov leží jižně od Elby. Návštěvy jsou možné jen s povolením správy parku Toskánského souostroví, roční kvóta je malá a čeká se dlouho. Výlet zahrnuje strmou túru. Bez povolení se můžete jen dívat z lodi.",
      pribehy: [
        { nazev: "Poklad mnichů", text: "Mniši prý před piráty ukryli poklad, který dodnes nikdo nenašel - a Dumas z něj udělal román." },
        { nazev: "Zakázaný ostrov", text: "Na ostrov se ročně dostane jen asi tisíc lidí, kteří čekají na povolení." }
      ]
    }
  },
  {
    id: "fort-boyard",
    patch: {
      nazev: "Fort Boyard",
      lead: "Kamenná pevnost uprostřed moře, kterou stavěli přes padesát let - a když ji dokončili, už nebyla potřeba. Dnes je známá z televizní soutěže.",
      atmosfera: 4.5,
      paranormalniAktivita: "žádná",
      historickaDolozenost: "výborná",
      nebezpecnost: "nízká",
      pristupnost: "jen z lodi",
      popisy: {
        zahada: "Oválná pevnost stojí na mělčině mezi ostrovy Aix a Oléron. Je dlouhá asi 70 metrů a vysoká přes 20 metrů. Z dálky vypadá jako kamenná loď.",
        historie: "Stavbu rozhodl Napoleon v roce 1801, aby chránila přístav Rochefort. Práce trvaly do roku 1857. Mezitím se zvětšil dostřel děl a pevnost byla zbytečná. Krátce sloužila jako vězení.",
        legenda: "Od roku 1990 se v pevnosti natáčí televizní soutěž Pevnost Boyard s tygry, hady a klíči. Mnozí diváci si myslí, že pevnost slouží jen jí.",
        paranormalni: "Nadpřirozené jevy se nepopisují. Pevnost je známá spíše jako televizní kulisa.",
        skepticke: "Pevnost je technicky zajímavá a historicky dobře doložená. Televizní záhady jsou zábavou."
      },
      praktickeInfo: "Do pevnosti se nevstupuje. Lodě s vyhlídkovými plavbami jezdí z La Rochelle, Île d'Aix nebo z Oléronu. Pevnost je dobře vidět i z pobřeží Fouras.",
      pribehy: [
        { nazev: "Zbytečná pevnost", text: "Stavba trvala tak dlouho, že než ji dokončili, děla už střílela dál a pevnost nebyla potřeba." },
        { nazev: "Televizní hvězda", text: "Od roku 1990 se v pevnosti natáčí soutěž, kde hráči hledají klíče mezi tygry a hady." }
      ]
    }
  },
  {
    id: "baba-vida-fortress",
    patch: {
      nazev: "Pevnost Baba Vida",
      lead: "Jediný úplně zachovaný středověký hrad v Bulharsku, na břehu Dunaje ve Vidinu - podle pověsti ho postavila princezna, která se nikdy nevdala.",
      atmosfera: 4.5,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Hrad má dvě obvodové hradby, věže a příkop. Z věží je výhled na Dunaj a Rumunsko na druhém břehu.",
        historie: "Hrad stojí na místě římské pevnosti Bononia. Nejstarší části pocházejí z 10. století, dnešní podobu získal ve 14. století. Turci ho později přestavěli a používali jako vězení a sklad.",
        legenda: "Podle pověsti měl bojar tři dcery: Vidu, Kulu a Gamzu. Mladší se vdaly a odešly, ale Vida zůstala svobodná a postavila hrad. Proto se jmenuje Baba Vida - babička Vida.",
        paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou. Hrad se používá jako kulisa pro filmy a historické slavnosti.",
        skepticke: "Pověst o třech sestrách vysvětluje jména měst. Stavební vývoj hradu je dobře zmapovaný."
      },
      praktickeInfo: "Vidin je na severozápadě Bulharska, u mostu přes Dunaj do Rumunska. Hrad je otevřený celoročně. V létě se konají slavnosti a koncerty. Kombinujte s skalním městem Belogradčik.",
      pribehy: [
        { nazev: "Tři sestry", text: "Vida, Kula a Gamza byly sestry. Kula a Gamza se vdaly a daly jména místům. Vida zůstala a postavila hrad." },
        { nazev: "Hrad na Dunaji", text: "Hrad stojí na místě římské pevnosti a hlídal řeku přes tisíc let." }
      ]
    }
  },
  {
    id: "ogrodzieniec-castle",
    patch: {
      nazev: "Hrad Ogrodzieniec",
      lead: "Obří zříceniny na vápencových skalách polské Jury, kde prý v noci obchází černý pes s řetězem - a kde se natáčela bitva ze seriálu Zaklínač.",
      atmosfera: 4.7,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Zdi hradu vyrůstají přímo ze skal a splývají s nimi. Hrad je největší na Stezce Orlích hnízd, která spojuje hrady na vápencových skalách mezi Krakovem a Čenstochovou.",
        historie: "Hrad dal v 16. století přestavět rod Bonerů na renesanční sídlo. V roce 1655 ho poškodili Švédové. Poslední majitelé ho opustili v 18. století a od té doby je zříceninou.",
        legenda: "Podle pověsti po hradě v noci obchází velký černý pes s řetězem. Je to prý duch kastelána Stanisława Warszyckiego, který byl krutý ke služebnictvu.",
        paranormalni: "Návštěvníci hlásí řinčení řetězu a stíny psa mezi skalami. Na hradě se pořádají noční prohlídky s duchy.",
        skepticke: "Černý pes je běžný motiv evropských pověstí. Hrad je dobře prozkoumaný a historie Warszyckého je reálná."
      },
      praktickeInfo: "Hrad je v obci Podzamcze, asi 60 km severozápadně od Krakova. Je otevřený celoročně za vstupné. V létě se konají rytířské turnaje. Pod hradem je zábavní park a stezky na skály.",
      pribehy: [
        { nazev: "Černý pes", text: "Po hradě prý v noci obchází černý pes s řetězem - duch krutého kastelána Warszyckého." },
        { nazev: "Zaklínač", text: "Na hradě se natáčela bitva o Sodden ze seriálu Zaklínač s Henrym Cavillem." }
      ]
    }
  },
  {
    id: "ojcow-castle",
    patch: {
      nazev: "Hrad Ojców",
      lead: "Zříceniny hradu krále Kazimíra Velikého nad krasovým údolím Ojcowa - kousek od jeskyně, kde se podle pověsti před nepřáteli ukryl král Vladislav Lokýtek.",
      atmosfera: 4.4,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Ze hradu zůstala vstupní brána, osmiboká věž a zbytky zdí. Pod ním se vine údolí řeky Prądnik s bílými vápencovými skalami a jeskyněmi.",
        historie: "Hrad dal ve 14. století postavit král Kazimír Veliký jako součást obrany Krakova. V 19. století byl opuštěný a rozebrán na stavební kámen.",
        legenda: "V nedaleké Lokýtkově jeskyni se podle pověsti král Vladislav Lokýtek skrýval před vojsky českého krále Václava II. Pavouk zatáhl vchod pavučinou a pronásledovatelé jeskyni minuli.",
        paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou. Tajemství tvoří skály a jeskyně kolem.",
        skepticke: "Pověst o pavučině se objevuje i u jiných postav a nelze ji ověřit. Hrad je historicky doložený."
      },
      praktickeInfo: "Ojców je v Ojcowském národním parku asi 25 km severně od Krakova. Hrad je přístupný v sezóně za malé vstupné. Kombinujte s Lokýtkovou jeskyní, Herkulovou palicí a zámkem Pieskowa Skała.",
      pribehy: [
        { nazev: "Pavučina u vchodu", text: "Pavouk zakryl vchod do jeskyně pavučinou a vojáci, kteří hledali krále Lokýtka, prošli kolem." },
        { nazev: "Hrad na stavební kámen", text: "V 19. století lidé hrad rozebrali a kameny použili na domy v okolí." }
      ]
    }
  },
  {
    id: "glen-coe",
    patch: {
      nazev: "Glen Coe",
      lead: "Skotské horské údolí, kde v únoru 1692 vojáci pobili hostitele, kteří je pohostili - podle pověsti se tu o výročí ozývají výkřiky.",
      atmosfera: 4.8,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "výborná",
      nebezpecnost: "střední",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Údolí je obklopené strmými horami, mezi nimi jsou Tři sestry. Za mlhy a deště působí krajina temně a ponuře.",
        historie: "13. února 1692 vojáci pod velením Roberta Campbella z Glenlyonu, kteří byli dva týdny hosty klanu MacDonaldů, ráno zaútočili na své hostitele. Zabili kolem 38 lidí, další zemřeli v mrazu na útěku. Masakr šokoval Skotsko, protože porušil zákon pohostinství.",
        legenda: "Podle pověsti se o výročí masakru v údolí ozývají výkřiky a zjevují postavy v plédech. Na skále Signal Rock prý dávali signál k útoku.",
        paranormalni: "Turisté a místní vyprávějí o pocitu smutku a zvucích v noci. Údolí se objevuje v knihách o skotských duších.",
        skepticke: "Masakr je historicky doložený, zjevení ne. Tradice o signálu ze Signal Rock je podle historiků nejistá."
      },
      praktickeInfo: "Glen Coe leží u silnice A82 asi 25 km jižně od Fort William. Návštěvnické centrum National Trust for Scotland vysvětluje historii masakru. Pro túry potřebujete dobré boty a mapu, počasí se mění rychle.",
      pribehy: [
        { nazev: "Zrada hostů", text: "Vojáci dva týdny jedli a pili s MacDonaldy - pak je jednoho únorového rána pobili." },
        { nazev: "Signal Rock", text: "Podle pověsti z této skály dali signál k útoku. Historici o tom pochybují." }
      ]
    }
  },
  {
    id: "housesteads-roman-fort",
    patch: {
      nazev: "Římská pevnost Housesteads",
      lead: "Nejlépe zachovaná pevnost na Hadriánově valu, s římskými latrínami - a s „domem vraždy“, kde archeologové našli dvě kostry pod podlahou.",
      atmosfera: 4.5,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "výborná",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Zbytky pevnosti stojí na hřebeni nad severní Anglií. Jsou zde kasárny, sýpky, nemocnice a slavné kamenné latríny.",
        historie: "Pevnost Vercovicium vznikla kolem roku 124 u Hadriánova valu. Žilo v ní asi 800 vojáků. Kolem vyrostla civilní osada s obchody a hostinci.",
        legenda: "Ve 30. letech archeologové našli pod podlahou jednoho domu v osadě kostry muže a ženy. V žebrech muže byl hrot nože. Domu se od té doby říká dům vraždy.",
        paranormalni: "Turisté vyprávějí o postavách římských vojáků na valu. Konkrétní doložené zprávy ale nejsou.",
        skepticke: "Kostry pod podlahou jsou skutečné a svědčí o zločinu, který pachatelé ukryli. Římští duchové jsou folklor."
      },
      praktickeInfo: "Housesteads je u silnice B6318 v Northumberlandu, asi 50 km západně od Newcastlu. Z parkoviště vede cesta do kopce asi 15 minut. Vstup je placený (English Heritage). Odtud můžete jít pěšky podél valu.",
      pribehy: [
        { nazev: "Dům vraždy", text: "Pod podlahou domu ležely dvě kostry. Hrot nože v žebrech ukazuje, že šlo o vraždu." },
        { nazev: "Římské latríny", text: "Vojáci tu sedávali vedle sebe na kamenných latrínách nad tekoucí vodou." }
      ]
    }
  },
  {
    id: "isle-of-skye-fairy-pools",
    patch: {
      nazev: "Vílí tůně na Skye",
      lead: "Průzračné modré tůně a vodopády pod horami Černého Cuillinu na ostrově Skye - podle skotských pověstí se v nich koupou víly.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "střední",
      pristupnost: "volně přístupné, parkování placené",
      popisy: {
        zahada: "Řeka Brittle stéká z hor přes kaskády a tůně. Voda je tak čistá, že kameny na dně svítí modře a zeleně. Nad tůněmi se zvedají ostré vrcholy Cuillinu.",
        historie: "Tůně byly dlouho známé jen místním a horolezcům. V posledních letech se staly jedním z nejnavštěvovanějších míst na Skye díky fotografiím na internetu.",
        legenda: "Skye je plné pověstí o vílách - je tu Vílí údolí, Vílí most a na hradě Dunvegan se uchovává Vílí vlajka. Podle pověstí se víly koupou v tůních a lákají pocestné.",
        paranormalni: "Nadpřirozené jevy se nepopisují. Kouzlo místa tvoří barva vody a hory v mlze.",
        skepticke: "Název Vílí tůně je moderní a souvisí s cestovním ruchem. Barvu vody způsobují kameny na dně a čistota."
      },
      praktickeInfo: "Tůně jsou v údolí Glen Brittle, cesta od parkoviště trvá asi 40 minut. Parkování je placené. Voda je velmi studená, koupání jen pro otužilé. Po dešti jsou brody přes řeku obtížné.",
      pribehy: [
        { nazev: "Koupel víl", text: "Podle pověsti se v tůních koupou víly a lákají pocestné do vody." },
        { nazev: "Vílí vlajka", text: "Na nedalekém hradě Dunvegan se uchovává Vílí vlajka, kterou prý rodu MacLeodů darovaly víly." }
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
