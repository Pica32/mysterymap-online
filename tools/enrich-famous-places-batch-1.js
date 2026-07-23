const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const placesPath = path.join(root, "data", "mista.json");
const articlesPath = path.join(root, "data", "articles.json");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8").replace(/^﻿/, ""));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

const enrichedPlaces = [
  {
    id: "gobekli-tepe",
    patch: {
      lead: "Nejstarší známý chrámový komplex na světě, starší než zemědělství i keramika - a důkaz, že lidé stavěli monumentální svatyně dřív, než se usadili.",
      atmosfera: 4.5,
      popisy: {
        zahada: "Na hřebeni v jihovýchodním Turecku leží kruhové stavby s T-shaped kamennými sloupy staré přes 11 000 let - starší než Stonehenge, starší než pyramidy, a podle archeologů starší než samotné zemědělství.",
        historie: "Göbekli Tepe poprvé zaznamenali badatelé v 60. letech, ale jeho význam přehlíželi až do roku 1994, kdy lokalitu navštívil německý archeolog Klaus Schmidt. Okamžitě rozpoznal vyčnívající vápencové desky jako záměrně tesané sloupy do tvaru písmene T, zdobené reliéfy zvířat - gazel, hadů, lišek a lvů - i abstraktními symboly. Nejstarší vrstvy jsou datovány do doby kolem 10 000 let př. n. l.",
        legenda: "Objev převrátil zaběhnutou archeologickou teorii, podle níž teprve zemědělství umožnilo vznik komplexní společnosti. Göbekli Tepe naznačuje opak: masivní pracovní síla potřebná ke stavbě chrámu mohla naopak vést lidi k rozvoji zemědělství, aby dokázali stavební dělníky uživit. Klaus Schmidt to shrnul větou 'nejdřív přišel chrám, pak teprve město'.",
        paranormalni: "Přesný účel kruhových svatyní zůstává předmětem debat - jde pravděpodobně o rituální nebo shromažďovací prostor lovecko-sběračských komunit, ne o trvalé obydlí, což z místa dělá jeden z nejvýznamnějších hlavolamů rané lidské historie.",
        skepticke: "Přestože zůstává řada otázek o přesném společenském uspořádání stavitelů otevřená, samotné datování i technika stavby jsou archeologicky pevně doložené - Göbekli Tepe je od roku 2018 na seznamu UNESCO a probíhá zde další systematický výzkum, ne spekulativní záhadologie."
      },
      praktickeInfo: "Lokalita je přístupná jako archeologický park s návštěvnickým centrem, doporučuje se ochrana proti slunci kvůli odkryté poloze na hřebeni, probíhající vykopávky mohou částečně omezovat přístup do některých sektorů.",
      zdroje: [
        { nazev: "Wikipedia: Göbekli Tepe", url: "https://en.wikipedia.org/wiki/G%C3%B6bekli_Tepe", licence: "CC BY-SA" },
        { nazev: "Wikidata: Göbekli Tepe", url: "https://www.wikidata.org/wiki/Q214944", licence: "CC0" },
        { nazev: "UNESCO World Heritage - Göbekli Tepe", url: "https://whc.unesco.org/en/list/1572/", licence: "oficiální zdroj / UNESCO dokumentace" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Gobekli%20Tepe", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Nejdřív chrám, pak město", text: "Klaus Schmidt argumentoval, že stavba monumentálního chrámu mohla předcházet a dokonce vyvolat vznik zemědělství, ne naopak - obrácení dosavadní archeologické teorie." },
        { nazev: "Sloupy s tvářemi zvířat", text: "Vápencové sloupy do tvaru T jsou zdobené reliéfy gazel, hadů, lišek a lvů, jejichž přesný symbolický význam archeologové stále zkoumají." }
      ]
    }
  },
  {
    id: "derinkuyu-underground-city",
    patch: {
      lead: "Podzemní město v kapadocké sopečné hornině s kapacitou pro 20 000 lidí, které se skrývalo pod jedním obyčejným domovním sklepem až do roku 1963.",
      atmosfera: 4.4,
      popisy: {
        zahada: "Pod obyčejným domem v turecké Kapadokii objevil roku 1963 muž při demolici sklepní zdi skrytou komnatu - a za ní se otevřel labyrint tunelů a místností vedoucí osm pater hluboko do měkké sopečné horniny.",
        historie: "Jádro jeskynních prostor v regionu pravděpodobně vytesali Frygové v 8.-7. století př. n. l. Do dnešní rozsáhlé podoby ale město dobudovali raní křesťané prchající před náboženským pronásledováním, a za byzantské éry sloužilo jako útočiště před arabsko-byzantskými válkami mezi lety 780 a 1180. Tunely propojovaly Derinkuyu s dalšími podzemními městy jako Kaymaklı a poskytovaly úkryt i během mongolské invaze Timura ve 14. století.",
        legenda: "Kromě vojenské obrany nabízelo podzemí i praktickou výhodu: stálou, mírnou teplotu bez ohledu na drsná kapadocká léta a zimy. Komplex zahrnoval obytné prostory, sklady potravin, stáje, vinné lisy i kostel rozprostřené do osmi pater.",
        paranormalni: "Než bylo město v 60. letech znovu objeveno, existovalo v místní paměti jen jako matná legenda o tajemných podzemních prostorách - realita ukázala, že šlo o skutečnost mnohem rozsáhlejší, než jakákoli pověst naznačovala.",
        skepticke: "Rozsah a technická vyspělost Derinkuyu jsou dobře zdokumentované archeologickým výzkumem po roce 1963 - jde o funkční inženýrské dílo přizpůsobené měkké sopečné hornině a reálným hrozbám doby, ne o tajemství bez vysvětlení."
      },
      praktickeInfo: "Zhruba polovina města je od roku 1969 přístupná veřejnosti s placeným vstupem, chodby jsou místy nízké a úzké, návštěva se nedoporučuje lidem s klaustrofobií.",
      zdroje: [
        { nazev: "Wikipedia: Derinkuyu underground city", url: "https://en.wikipedia.org/wiki/Derinkuyu_underground_city", licence: "CC BY-SA" },
        { nazev: "Wikidata: Derinkuyu underground city", url: "https://www.wikidata.org/wiki/Q1328958", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Derinkuyu%20Underground%20City", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Objev za sklepní zdí", text: "Roku 1963 narazil místní muž při demolici sklepa na skrytou komnatu, za kterou se otevřel celý labyrint podzemního města - náhodný objev, který ohromil archeology." },
        { nazev: "Osm pater pro 20 000 lidí", text: "Komplex mohl v případě potřeby ukrýt až 20 000 lidí i s jejich zásobami a dobytkem, rozprostřený do osmi propojených podzemních pater." }
      ]
    }
  },
  {
    id: "mount-kailash",
    patch: {
      lead: "Jedna z mála velkých hor světa, kterou nikdo nikdy oficiálně nezdolal - protože je posvátná hned pro čtyři náboženství zároveň.",
      atmosfera: 4.8,
      popisy: {
        zahada: "Hora Kailás v tibetské části Himálaje dosahuje jen mírných 6 638 metrů, technicky by tedy výstup nebyl nijak mimořádně obtížný - a přesto na jejím vrcholu podle dostupných záznamů nikdy nestál žádný horolezec.",
        historie: "Sanskrtské jméno hory znamená 'obydlí Šivy' a odráží její posvátný status hned ve čtyřech náboženstvích. Hinduisté ji uctívají jako věčné sídlo boha Šivy a jeho manželky Párvatí, buddhisté, džinisté a stoupenci tibetského náboženství bön ji po staletí považují za duchovní osu světa a spojnici mezi nebem a zemí.",
        legenda: "Podle jedné z legend na vrchol jednou vystoupil jen tibetský buddhistický mnich Milarepa - v proslulém souboji s rivalem Narem, který se snažil vyšplhat pomocí magického bubnu, zatímco Milarepa meditoval u paty hory. Když přišlo ráno, Milarepa vyjel na vrchol po paprsku slunečního světla a vyhrál horu pro buddhismus.",
        paranormalni: "Návštěvníci mohou horu obejít při tradiční poutní cestě kolem úpatí, ale samotné vystoupání na vrchol je oficiálně zakázáno a horolezecká komunita ho dodnes respektuje jako tabu, které by rozhněvalo bohy.",
        skepticke: "Z čistě technického hlediska by hora pravděpodobně šla zdolat, absence výstupů ale není náhoda ani nadpřirozená překážka - jde o vědomé rozhodnutí úřadů i samotných horolezců respektovat posvátnost místa pro miliony věřících čtyř náboženství před sportovním rekordem."
      },
      praktickeInfo: "Poutní okruh (kóra) kolem hory trvá obvykle tři dny pěšky ve vysoké nadmořské výšce, vyžaduje aklimatizaci a povolení k cestě do Tibetu, samotný výstup na vrchol je zakázán.",
      zdroje: [
        { nazev: "Wikipedia: Mount Kailash", url: "https://en.wikipedia.org/wiki/Mount_Kailash", licence: "CC BY-SA" },
        { nazev: "Wikidata: Mount Kailash", url: "https://www.wikidata.org/wiki/Q229107", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Mount%20Kailash%20Tibet", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Souboj o horu paprskem slunce", text: "Legenda vypráví, jak mnich Milarepa porazil rivala Nara v souboji o horu tím, že na vrchol vyjel po paprsku slunečního světla, zatímco jeho protivník marně šplhal s magickým bubnem." },
        { nazev: "Posvátná pro čtyři náboženství", text: "Hinduisté, buddhisté, džinisté i stoupenci tibetského bönu nezávisle na sobě považují Kailás za duchovní osu světa - vzácná shoda napříč zcela odlišnými tradicemi." }
      ]
    }
  },
  {
    id: "mount-nemrut",
    patch: {
      lead: "Zapomenutý král si nechal na vrcholu hory postavit vlastní hrobku a obklopit ji obřími sochami bohů - dnes z nich zbyly jen useknuté hlavy rozeseté po terasách.",
      atmosfera: 4.3,
      popisy: {
        zahada: "Na vrcholu hory v jihovýchodním Turecku leží desítky obřích kamenných hlav vážících kolem dvou tun každá, oddělených od svých těl a rozesetých po terasách - pozůstatky hrobky-svatyně jednoho zapomenutého krále.",
        historie: "Roku 62 př. n. l. nechal král Antiochos I. Theos z malého nárazníkového království Kommagéné postavit na vrcholu hory Nemrut hrobku-svatyni. Dělníci navršili obrovské množství drceného kamene do umělého pahorku vysokého přes 48 metrů nad jeho pohřební komorou. Kommagéné přežívalo právě díky tomu, že Řím i Parthská říše preferovaly slabé nárazníkové království mezi sebou před přímým sousedstvím.",
        legenda: "Kolosální sochy, původně vysoké 8 až 9 metrů, zobrazovaly boha Dia-Oromasda, Apollóna-Mithru-Hélia-Herma, Hérakla-Artagna-Area, bohyni Kommagéné spojovanou s plodností a hojností - a samotného krále Antiocha, který se tak stavěl po bok bohům.",
        paranormalni: "Hlavy soch dnes leží oddělené od těl v terasovitém uspořádání, což společně s dramatickými horskými východy a západy slunce vytváří jedno z nejvíc fotografovaných a filmově působivých míst Turecka.",
        skepticke: "Oddělení hlav od těl pravděpodobně způsobila zemětřesení a erozí za dva tisíce let, ne záměrné zničení nebo kletba - archeologický a historický kontext memoriálu je dobře doložený od jeho znovuobjevení německým inženýrem Karlem Sesterem v roce 1881, místo je od roku 1987 na seznamu UNESCO."
      },
      praktickeInfo: "K vrcholu vede zpevněná cesta a poté kratší pěší výstup, nejoblíbenější je návštěva při východu nebo západu slunce, v zimě může být vrchol kvůli nadmořské výšce nepřístupný sněhem.",
      zdroje: [
        { nazev: "Wikipedia: Mount Nemrut", url: "https://en.wikipedia.org/wiki/Mount_Nemrut", licence: "CC BY-SA" },
        { nazev: "Wikidata: Mount Nemrut", url: "https://www.wikidata.org/wiki/Q207917", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Mount%20Nemrut%20Turkey", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Král mezi bohy", text: "Antiochos I. nechal svou sochu postavit vedle soch velkých bohů řecké, perské a anatolské tradice - gesto, kterým se symbolicky stavěl na jejich úroveň." },
        { nazev: "Nárazníkové království mezi impérii", text: "Kommagéné přežilo jako samostatný stát jen díky tomu, že Řím i Parthská říše preferovaly slabého souseda mezi sebou před přímou hranicí." }
      ]
    }
  },
  {
    id: "richat-structure",
    patch: {
      lead: "Čtyřicetikilometrové kamenné oko uprostřed Sahary, které si internet oblíbil jako 'ztracenou Atlantidu' - geologové ale mají mnohem prozaičtější vysvětlení.",
      atmosfera: 4.1,
      popisy: {
        zahada: "Hluboko v mauritánské poušti se rozprostírá téměř dokonalý soustředný kruh o průměru přes 40 kilometrů, viditelný i z vesmíru - a v posledních letech se stal oblíbeným kandidátem na skutečné umístění bájné Atlantidy.",
        historie: "Richat Structure, přezdívaná Oko Sahary, leží v západo-centrální Mauritánii. Z vesmíru připomíná obří terč nebo síť soustředných prstenů vyrytých přímo do pouštní země.",
        legenda: "Popularita teorie o Atlantidě v posledních letech explodovala napříč digitálními médii - zastánci poukazují na téměř dokonalé soustředné prstence připomínající Platónův popis kruhových kanálů, na čtyřicetikilometrový rozměr odpovídající velké metropoli a na saharskou polohu, která by se dala spojit s někdejší zelenou krajinou pohlcenou postupující pouští na konci poslední doby ledové.",
        paranormalni: "Teorie o Atlantidě se šíří hlavně díky sociálním sítím a videím zaměřeným na záhady, ne díky odborné archeologické nebo historické práci.",
        skepticke: "Když strukturu zkoumají geologové, teorie o Atlantidě se rozpadá: jde o erodovaný geologický útvar, takzvanou kupolovitou antiklinálu, vzniklou vyzdvižením vrstev hornin během milionů let a jejich následným obroušením erozí až na původně ploché vrstvy - žádná Atlantida nebyla objevena, přestože citovaní 'badatelé' toto tvrzení šíří dál."
      },
      praktickeInfo: "Struktura je nejlépe patrná z letadla nebo na satelitních snímcích, pozemní návštěva vyžaduje expedici do odlehlé pouštní oblasti a místního průvodce.",
      zdroje: [
        { nazev: "Wikipedia: Richat Structure", url: "https://en.wikipedia.org/wiki/Richat_Structure", licence: "CC BY-SA" },
        { nazev: "Wikidata: Richat Structure", url: "https://www.wikidata.org/wiki/Q744591", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Richat%20Structure%20Mauritania", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Terč viditelný z vesmíru", text: "Soustředné prstence struktury jsou natolik pravidelné a rozsáhlé, že patří mezi nejnápadnější geologické útvary viditelné na satelitních snímcích Sahary." },
        { nazev: "Atlantida, která se rozplynula pod mikroskopem", text: "Strukturní geologové jednoznačně vysvětlili útvar jako erodovanou kupolovitou antiklinálu - teorie o Atlantidě neobstála při odborném zkoumání." }
      ]
    }
  },
  {
    id: "potala-palace",
    patch: {
      lead: "Nejvýše položený palác světa, zasvěcený mytické zemi bódhisattvy soucitu, a zimní sídlo dalajlamů po tři století.",
      atmosfera: 4.6,
      popisy: {
        zahada: "Nad tibetskou Lhasou se na Rudém vrchu tyčí palác, jehož jméno odkazuje na mytické obydlí bódhisattvy soucitu - a který tři století sloužil jako zimní rezidence duchovních vůdců tibetského buddhismu.",
        historie: "Historie paláce má dvě vrstvy. První sahá do 7. století, kdy tibetský král Songcän Gampo postavil na Rudém vrchu sídlo ke svému sňatku s čínskou princeznou Wenčcheng - tato stavba ale zanikla během občanské války v 9. století. Dnešní podoba pochází z roku 1645, kdy stavbu zahájil pátý dalajlama, a palác sloužil jako zimní sídlo dalajlamů od roku 1649 až do roku 1959.",
        legenda: "Jméno Potala pochází ze sanskrtského slova Potalaka, mytického obydlí bódhisattvy Avalókitéšvary (Čänräziga), bódhisattvy soucitu. Volbou tohoto místa a jména pátý dalajlama symbolicky ustanovil palác jako ráj na zemi a sebe sama jako vtělení tibetského ochranného bódhisattvy.",
        paranormalni: "Červený palác uvnitř komplexu ukrývá kaple, posvátné sochy a hrobky osmi dalajlamů a zůstává důležitým poutním místem tibetských buddhistů dodnes.",
        skepticke: "Historie stavby, jejích přestaveb i náboženský význam jsou podrobně zdokumentované - palác je od roku 1994 součástí seznamu UNESCO společně se sousedním klášterem Jókhang a letním palácem Norbulingka jako historický komplex, ne jako místo opředené nevysvětlitelnými jevy."
      },
      praktickeInfo: "Palác je přístupný s placeným vstupem a omezeným denním počtem návštěvníků kvůli ochraně památky, nachází se ve vysoké nadmořské výšce přes 3 700 metrů, doporučuje se počítat s aklimatizací.",
      zdroje: [
        { nazev: "Wikipedia: Potala Palace", url: "https://en.wikipedia.org/wiki/Potala_Palace", licence: "CC BY-SA" },
        { nazev: "Wikidata: Potala Palace", url: "https://www.wikidata.org/wiki/Q71229", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Potala%20Palace%20Lhasa", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Palác pojmenovaný po mýtu", text: "Jméno Potala odkazuje na sanskrtskou mytickou horu Potalaka, obydlí bódhisattvy soucitu - volba jména, kterou pátý dalajlama symbolicky spojil sám sebe s touto tradicí." },
        { nazev: "Nejvýše položený palác světa", text: "Ve výšce přes 3 700 metrů nad mořem drží Potala titul nejvýše položeného paláce na světě, postaveného na místě staršího královského sídla ze 7. století." }
      ]
    }
  },
  {
    id: "meroe-pyramids",
    patch: {
      lead: "Súdánské pyramidy núbijského království Kuš, kterým italský dobrodruh v 19. století odstřelil vrcholy při honbě za zlatem.",
      atmosfera: 4.2,
      popisy: {
        zahada: "V súdánské poušti severovýchodně od Chartúmu stojí přes 200 strmých núbijských pyramid - a mnohým z nich chybí vrchol, protože je v 19. století odstřelil evropský hledač pokladů.",
        historie: "Meroë bylo hlavní město núbijského království Kuš zhruba od roku 591 př. n. l. do roku 350 n. l., kdy Kušitská kultura spojovala vlastní núbijskou tradici s vlivy starověkého Egypta a vytvořila si tak výrazný, samostatný umělecký styl s charakteristickými strmými pyramidami.",
        legenda: "Roku 1834 dorazil do Meroë italský dobrodruh a lékař Giuseppe Ferlini a začal drancovat hrobky ve snaze najít zlato a šperky. Při hledání pokladu odstřelil vrcholy řady pyramid výbušninami, včetně Velké pyramidy královny Amanišachety, jedné z nejvýznamnějších vládkyň Súdánu. Několik cenných artefaktů, které při tom skutečně našel, dnes leží v muzeích v Mnichově a Berlíně.",
        paranormalni: "Poškození, které Ferlini způsobil, archeologové dodnes litují jako jednu z nejhorších ztrát núbijského kulturního dědictví, přestože paradoxně právě jeho nálezy poprvé upozornily evropské badatele na existenci této dosud opomíjené civilizace.",
        skepticke: "Zkáza pyramid má jasně zdokumentovanou lidskou příčinu - kořistnické drancování 19. století, ne přírodní katastrofu nebo kletbu - archeologické naleziště je od roku 2011 na seznamu UNESCO jako pozůstatek jádra království Kuš."
      },
      praktickeInfo: "Lokalita je volně přístupná, leží v odlehlé poušti asi 200 km severovýchodně od Chartúmu, doporučuje se cestovat s místním průvodcem a počítat s minimální turistickou infrastrukturou.",
      zdroje: [
        { nazev: "Wikipedia: Pyramids of Meroë", url: "https://en.wikipedia.org/wiki/Pyramids_of_Mero%C3%AB", licence: "CC BY-SA" },
        { nazev: "Wikidata: Pyramids of Meroe", url: "https://www.wikidata.org/wiki/Q456939", licence: "CC0" },
        { nazev: "UNESCO World Heritage - Archaeological Sites of the Island of Meroe", url: "https://whc.unesco.org/en/list/1336/", licence: "oficiální zdroj / UNESCO dokumentace" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Pyramids%20of%20Meroe%20Sudan", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Dobrodruh s výbušninami", text: "Giuseppe Ferlini v roce 1834 odstřelil vrcholy řady pyramid při hledání zlata - zkáza, kterou archeologové dodnes litují, přestože jeho nálezy Evropu s núbijskou kulturou poprvé seznámily." },
        { nazev: "Vlastní styl mezi Egyptem a Núbií", text: "Kušitská kultura si vytvořila výrazný, samostatný vizuální styl kombinující núbijské tradice s egyptskými vlivy, jehož nejviditelnějším odkazem jsou právě strmé meroejské pyramidy." }
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
