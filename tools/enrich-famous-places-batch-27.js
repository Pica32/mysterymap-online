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
    id: "ometepe-island",
    patch: {
      lead: "Ostrov ze dvou sopek uprostřed sladkovodního jezera, kde téměř 1700 vytesaných obrazců spirál zobrazuje samotné vulkány, na nichž vznikly.",
      atmosfera: 3.9,
      popisy: {
        zahada: "Uprostřed jezera Nikaragua leží ostrov tvořený dvěma sopkami spojenými úzkou šíjí - aktivní Concepción na severozápadě a vyhaslá či dřímající Maderas na jihovýchodě, jejichž úbočí pokrývají tisíce prehistorických vyrytých obrazců.",
        historie: "Ostrov byl poprvé osídlen v období Dinarte (kolem 2000-500 př. n. l.) mluvčími makro-čibčských jazyků. Později zde svou kulturní stopu zanechali Čorotegové a Nikarové. Období zvané 'Ometepe' (1350-1550 n. l.) zaznamenává významnou migraci národa Nahua do regionu.",
        legenda: "Projekt dokumentace petroglyfů Ometepe (1995-1999) zaznamenal téměř 1700 vyrytých panelů na 1400 balvanech napříč 73 archeologickými lokalitami. Mezi nejčastější motivy patří spirály představující obě sopky ostrova, stylizované želvy a antropomorfní postavy - spirály se objevují i jako zobrazení hlav lidských postav, což odráží mezoamerické duchovní praktiky.",
        paranormalni: "Sopka Concepción zůstává aktivní a od holocénu prošla řadou erupcí, včetně let 1880, 1883, 1889, 1902, 1907, 1924, 1999, 2005 a 2010 - ostrov tak žije v neustálém sousedství s živou geologickou silou, kterou dávní obyvatelé zobrazovali ve svém umění.",
        skepticke: "Přesný symbolický význam jednotlivých petroglyfů zůstává částečně otevřený interpretaci, ne definitivně rozluštěný - solidně zdokumentované jsou ale počty a rozmístění samotných rytin díky systematickému archeologickému průzkumu koncem 90. let 20. století."
      },
      praktickeInfo: "Ostrov je přístupný trajektem z pevniny, doporučuje se výstup na sopku Maderas s průvodcem kvůli hustému pralesu a proměnlivému počasí.",
      zdroje: [
        { nazev: "Wikipedia: Ometepe", url: "https://en.wikipedia.org/wiki/Ometepe", licence: "CC BY-SA" },
        { nazev: "Wikidata: Ometepe", url: "https://www.wikidata.org/wiki/Q950875", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Ometepe%20Island%20Nicaragua", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Tisíce rytin na dvou sopkách", text: "Téměř 1700 petroglyfových panelů na 1400 balvanech zdobí úbočí ostrova, přičemž spirály na mnoha z nich symbolizují samotné dvě sopky, na kterých vznikly." },
        { nazev: "Ostrov v neustálé proměně", text: "Sopka Concepción zůstává aktivní dodnes a od 19. století zaznamenala řadu erupcí, díky čemuž ostrov nikdy nepřestal geologicky žít." }
      ]
    }
  },
  {
    id: "morne-trois-pitons",
    patch: {
      lead: "Vroucí jezero, kde voda u okraje dosahuje přes 80 stupňů Celsia a uprostřed vře přímo z hlubin - druhé největší svého druhu na světě.",
      atmosfera: 4.0,
      popisy: {
        zahada: "V karibské Dominice leží první oficiálně vyhlášený národní park země, jehož nejproslulejší atrakcí je jezero naplněné vroucí vodou - vzácný přírodní jev zvaný fumarola zaplavená vodou.",
        historie: "Park byl založen v červenci 1975 jako první legálně ustanovený národní park v zemi a roku 1997 získal status UNESCO. Zabírá plochu asi 7000 hektarů plnou vulkanických jevů.",
        legenda: "Vroucí jezero (Boiling Lake) dosahuje teploty 82 až 92 °C u okraje, se středem, kde vroucí voda vyvěrá přímo z hlubin. Nedaleké Údolí zkázy (Valley of Desolation) je oblastí vroucích bahenních jezírek a malých gejzírů, kde sirné plyny omezují růst vegetace na minimum.",
        paranormalni: "Park zahrnuje i další pozoruhodné lokality - soutěsku Titou Gorge, Smaragdový bazén, vodopády Middleham a Sladkovodní jezero, obklopené rozmanitými vulkanickými jevy včetně fumarol a horkých pramenů.",
        skepticke: "Vroucí jezero je dobře zdokumentovaný geotermální jev, ne mytologický výmysl - jde o druhé největší jezero svého druhu na světě po Frying Pan Lake na Novém Zélandu, jehož teplota a chemické složení jsou pravidelně vědecky monitorovány."
      },
      praktickeInfo: "Výstup k Vroucímu jezeru trvá celý den a vyžaduje zkušeného místního průvodce kvůli náročnému terénu a proměnlivému počasí.",
      zdroje: [
        { nazev: "Wikipedia: Morne Trois Pitons National Park", url: "https://en.wikipedia.org/wiki/Morne_Trois_Pitons_National_Park", licence: "CC BY-SA" },
        { nazev: "Wikidata: Morne Trois Pitons National Park", url: "https://www.wikidata.org/wiki/Q629436", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Morne%20Trois%20Pitons%20Dominica", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Jezero, které vře samo od sebe", text: "Vroucí jezero dosahuje teploty přes 80 °C u okraje a ještě vyšší uprostřed, kde voda vyvěrá přímo z geotermálních hlubin - druhé největší jezero svého druhu na světě." },
        { nazev: "Údolí, kde nic neroste", text: "Údolí zkázy plné vroucích bahenních jezírek a gejzírů je díky sirným plynům téměř bez vegetace - měsíční krajina uprostřed karibského deštného pralesa." }
      ]
    }
  },
  {
    id: "pampa-del-tamarugal-geoglyphs",
    patch: {
      lead: "Přes 450 obřích obrazců vyškrábaných do pouštních svahů - a badatelé dodnes nevědí jistě, zda šlo o rituál, orientační body pro karavany, nebo znamení kulturní identity.",
      gps: { lat: -20.6192, lon: -69.6736 },
      atmosfera: 3.7,
      popisy: {
        zahada: "V chilské poušti Pampa del Tamarugal, asi 95 kilometrů od Iquique, se táhne přes 3 kilometry pahorků pokrytých téměř 450 obřími obrazci vyškrábanými do povrchu pouště - a jejich skutečný účel zůstává i po desetiletích bádání nejasný.",
        historie: "Obrazce vytvořili předhispánští andští obyvatelé mezi lety 700 a 1500 n. l. odstraněním povrchové vrstvy půdy, čímž vznikl kontrast mezi odkrytou a okolní zeminou. Některé motivy nesou zřetelný vliv kultury Tiwanaku.",
        legenda: "Mezi navrhovaná vysvětlení patří značení vodních tras pro karavany, místní rituální praktiky nebo vyjádření kulturní identity komunit, které geoglyfy vytvořily - žádná z teorií ale nebyla definitivně potvrzena.",
        paranormalni: "Rozsah díla - téměř 450 samostatných obrazců rozprostřených přes tři kilometry svahů - naznačuje dlouhodobé, generacemi udržované úsilí, ne jednorázový výtvor jediné skupiny lidí.",
        skepticke: "Přiznání, že 'neexistuje jistota ohledně významu nebo účelu těchto obrazců', je poctivým vědeckým postojem, ne důkazem nadpřirozeného původu - vážnějším problémem zůstává fyzická ochrana naleziště, které od roku 2024 čelí poškození motorovými vozidly projíždějícími přes tisíce let staré dědictví."
      },
      praktickeInfo: "Naleziště je přístupné z obce Pozo Almonte, doporučuje se dodržovat vyznačené stezky a nevjíždět motorovými vozidly mimo cesty kvůli ochraně křehkých obrazců.",
      zdroje: [
        { nazev: "Wikipedia (es): Geoglifos de Pintados", url: "https://es.wikipedia.org/wiki/Geoglifos_de_Pintados", licence: "CC BY-SA" },
        { nazev: "Wikidata: Geoglifos de Pintados", url: "https://www.wikidata.org/wiki/Q5839946", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Geoglifos%20de%20Pintados%20Chile", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "450 obrazců bez jistého významu", text: "Téměř 450 geoglyfů roztroušených přes tři kilometry pouštních svahů dodnes nemá jednoznačně potvrzený účel - od rituálních značek po orientační body karavan." },
        { nazev: "Tisícileté dědictví ohrožené vozidly", text: "Od roku 2024 čelí naleziště poškození motorovými vozidly projíždějícími přes obrazce staré až 1300 let." }
      ]
    }
  },
  {
    id: "nahuelito-lake-nahuel-huapi",
    patch: {
      lead: "Jihoamerický bratranec Lochnesské příšery, kterého argentinské námořnictvo v roce 1960 osmnáct dní pronásledovalo pod hladinou patagonského jezera.",
      atmosfera: 3.8,
      popisy: {
        zahada: "V patagonském jezeře Nahuel Huapi žije podle mnoha svědectví záhadný tvor přezdívaný Nahuelito - obří had nebo obrovský hrb připomínající plesiosaura, jihoamerická obdoba proslulé Lochnesské příšery.",
        historie: "Jméno tvora pochází z domorodého jazyka odkazujícího na jaguára. Domorodé obyvatelstvo si údajně předávalo příběhy o vodních setkáních dávno před evropskou kolonizací. Roku 1897 začal dr. Clemente Onelli z buenosaireské zoo systematicky dokumentovat občasná hlášení.",
        legenda: "Roku 1910 George Garret spatřil tvora, který podle jeho odhadu měřil 5 až 7 metrů a vyčníval asi 2 metry nad hladinu ve vzdálenosti kolem 400 metrů. Jeho svědectví bylo zveřejněno až roku 1922, což podnítilo organizované expedice.",
        paranormalni: "Roku 1960 argentinské námořnictvo údajně pronásledovalo neidentifikovaný podvodní objekt po dobu 18 dní. Roku 1988 časopis zveřejnil fotografie objektu poblíž pobřeží Bariloche pořízené u Río Negro. Menší jezero, kde bylo hlášeno pozorování, dnes nese jméno 'Laguna del Plesiosaurio' (Plesiosauří laguna).",
        skepticke: "Žádné z hlášených pozorování nebylo nikdy vědecky potvrzeno biologickým důkazem - přesto legenda o Nahuelitovi přetrvává už přes sto let a jezero samotné, hluboké a chladné patagonské vody, poskytuje dostatek prostoru pro představivost i skeptickou opatrnost zároveň."
      },
      praktickeInfo: "Jezero Nahuel Huapi je oblíbenou turistickou destinací poblíž města Bariloche s možností lodních výletů a vodních sportů.",
      zdroje: [
        { nazev: "Wikipedia: Nahuelito", url: "https://en.wikipedia.org/wiki/Nahuelito", licence: "CC BY-SA" },
        { nazev: "Wikidata: Nahuelito", url: "https://www.wikidata.org/wiki/Q926429", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Nahuel%20Huapi%20Lake%20Argentina", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Osmnáct dní pronásledování", text: "Roku 1960 mělo argentinské námořnictvo pronásledovat neidentifikovaný podvodní objekt v jezeře po dobu osmnácti dní, aniž by ho kdy definitivně identifikovalo." },
        { nazev: "Plesiosauří laguna", text: "Menší jezero, kde bylo hlášeno jedno z nejznámějších pozorování, nese dodnes jméno 'Laguna del Plesiosaurio' na počest domnělého tvora." }
      ]
    }
  },
  {
    id: "ambohimanga",
    patch: {
      lead: "Zakázané město, kam po celé 19. století nesměl vkročit žádný cizinec - duchovní hlavní město malgašské monarchie dodnes obestřené tajemstvím předků Vazimba.",
      atmosfera: 4.1,
      popisy: {
        zahada: "Necelých 24 kilometrů severovýchodně od Antananariva se zvedá posvátný kopec, který zůstával zakázaným městem pro cizince po celé 19. století - duchovní srdce království Merina a nejvýznamnější symbol kulturní identity jeho lidu.",
        historie: "Ambohimanga se stalo politickým centrem na počátku 18. století, když král Andriamasinavalona (1675-1710) rozdělil království Imerina na čtyři části. Jeho syn Andriantsimitoviaminiandriana se stal prvním králem severovýchodního regionu a kolem roku 1710 založil opevněné sídlo přímo zde. Největšího významu dosáhlo místo za krále Andrianampoinimeriny (1787-1810), který odsud vedl úspěšné tažení za znovusjednocení království po 77 letech občanské války.",
        legenda: "Místní tradice připisuje první osídlení kolem roku 1700 sesazenému princi Andriamboronovi. Podle legendy král Andriamasinavalona spatřil ze svého vzdáleného hlavního města táborový oheň na tomto kopci 24 kilometrů daleko, což v něm vzbudilo zájem o místo jako sídlo pro jeho syna.",
        paranormalni: "V blízkosti leží pohřebiště lidu Vazimba, nejstarších obyvatel ostrova, které posiluje duchovní autoritu kopce - poutníci sem dodnes přicházejí komunikovat s předky a hledat požehnání. Komplex zahrnuje královské hrobky, paláce a obřadní prostory uspořádané podle kosmologických zásad zdůrazňujících světové strany a uctívání předků.",
        skepticke: "Status 'zakázaného města' pro cizince po celé 19. století je historicky doložený fakt, ne přehnaná legenda - král Andrianampoinimerina po dobytí Antananariva roku 1793 vědomě prohlásil Ambohimangu duchovním hlavním městem, zatímco politické funkce přesunul do nížinného města, čímž záměrně oddělil posvátnou a správní moc."
      },
      praktickeInfo: "Areál je veřejně přístupný s placeným vstupem, od roku 2001 je zapsán na seznam UNESCO, doporučuje se návštěva s místním průvodcem pro pochopení kosmologického uspořádání komplexu.",
      zdroje: [
        { nazev: "Wikipedia: Ambohimanga", url: "https://en.wikipedia.org/wiki/Ambohimanga", licence: "CC BY-SA" },
        { nazev: "Wikidata: Ambohimanga", url: "https://www.wikidata.org/wiki/Q458167", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Ambohimanga%20Madagascar", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Zakázané město cizinců", text: "Po celé 19. století platil pro Ambohimangu přísný zákaz vstupu cizincům - status, který pomohl zachovat jeho posvátnou mystiku dodnes." },
        { nazev: "Oheň, který přivedl krále", text: "Podle legendy si král Andriamasinavalona všiml táborového ohně na vzdáleném kopci a rozhodl se tam usadit svého syna - rozhodnutí, které nakonec vytvořilo duchovní hlavní město celé monarchie." }
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
