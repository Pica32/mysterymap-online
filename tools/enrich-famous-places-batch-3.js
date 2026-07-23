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
    id: "lalibela-rock-churches",
    patch: {
      lead: "Jedenáct kostelů vytesaných z jednoho kusu skály, které měli podle legendy za jedinou noc dokončit andělé.",
      atmosfera: 4.7,
      popisy: {
        zahada: "V etiopských horách stojí jedenáct monolitických kostelů, z nichž každý je vytesaný z jediného kusu skály shora dolů - podle legendy je za pouhou jednu noc dokončili andělé, kteří pracovali souběžně s lidmi.",
        historie: "Kostely nechal ve 12. nebo 13. století vybudovat král Gebre Meskel Lalibela, který podle svého životopisu (gadl) na díle pracoval 24 let s pomocí andělů. Stavby stojí na svém místě už nejméně 800 let a patří k největším monolitickým stavbám svého druhu na světě.",
        legenda: "Podle legendy měl Lalibela sen, ve kterém mu Bůh přikázal postavit v Etiopii nový Jeruzalém. Různé části komplexu doslova napodobují konkrétní místa skutečného Jeruzaléma - jedna stavba odkazuje na Adamův hrob, okolní kopce nesou jména Kalvárie a Golgota, místní potok se jmenuje Jordán a olivové háje měly být osázeny z olivovníků přímo z Getsemanské zahrady.",
        paranormalni: "Přestože je historie stavby dobře doložená, přesný způsob, jak byly kostely vytesány s takovou přesností do skály bez moderních nástrojů, zůstává předmětem odborného obdivu i spekulací.",
        skepticke: "I bez andělské pomoci jde o mimořádný lidský inženýrský výkon - vytesání kostela z jediného kusu skály shora dolů vyžadovalo careful plánování a roky práce zkušených kameníků, ne nadpřirozený zásah, přestože motiv 'stavby dokončené přes noc' je oblíbený hagiografický prvek i u jiných světců."
      },
      praktickeInfo: "Komplex je aktivním poutním místem etiopské pravoslavné církve s placeným vstupem pro turisty, doporučuje se respektovat probíhající bohoslužby a náboženský provoz.",
      zdroje: [
        { nazev: "Wikipedia: Rock-Hewn Churches, Lalibela", url: "https://en.wikipedia.org/wiki/Rock-Hewn_Churches,_Lalibela", licence: "CC BY-SA" },
        { nazev: "Wikidata: Monolithic churches in Lalibela", url: "https://www.wikidata.org/wiki/Q642979", licence: "CC0" },
        { nazev: "UNESCO World Heritage - Rock-Hewn Churches, Lalibela", url: "https://whc.unesco.org/en/list/18/", licence: "oficiální zdroj / UNESCO dokumentace" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Lalibela%20rock%20churches", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Andělé pracující v noci", text: "Podle hagiografie krále Lalibely pracovali na kostelech ve dne lidé a v noci andělé, díky čemuž se celé dílo podařilo dokončit za pouhých 24 let." },
        { nazev: "Etiopský Nový Jeruzalém", text: "Jednotlivé části komplexu přímo napodobují konkrétní místa Jeruzaléma - od Adamova hrobu po potok pojmenovaný Jordán - takže poutníci mohli 'navštívit' svatá místa bez cesty do skutečné Palestiny." }
      ]
    }
  },
  {
    id: "taktsang-monastery",
    patch: {
      lead: "Klášter přilepený na skále 900 metrů nad údolím, kam měl gurua dopravit létající tygr, aby tu vyhnal démony.",
      atmosfera: 4.7,
      popisy: {
        zahada: "Na téměř kolmé skalní stěně přes 900 metrů nad údolím Paro se v Bhútánu drží klášter, ke kterému se podle legendy jeden z nejvýznamnějších učitelů tibetského buddhismu dopravil na hřbetě tygřice.",
        historie: "Chrám postavený kolem jeskyně, Guru mCchan-brgjad Lhakang, dal vybudovat Gjalse Tenzin Rabgje roku 1692. Místo je od té doby jedním z nejposvátnějších poutních míst bhútánského buddhismu.",
        legenda: "Podle tradice přiletěl osmý buddhistický mistr Guru Rinpočhe (Padmasambhava) na hřbetě tygřice z Tibetu přímo do jeskyně, kde poté přes tři roky meditoval, aby z okolí vyhnal démony bránící šíření buddhismu. Tygřice byla podle legendy převtělením jeho společnice Ješe Cchogjal, která se do zvířete dobrovolně proměnila, aby gurua unesla.",
        paranormalni: "Klášter zůstává živým centrem bhútánské duchovní tradice, ne jen turistickou atrakcí - jméno Taktsang v překladu znamená přímo 'tygří doupě', odkaz na zakladatelskou legendu.",
        skepticke: "Legenda o létající tygřici je součástí bohaté tibetsko-bhútánské hagiografické tradice spojené s Guru Rinpočhem, který skutečně historicky přispěl k šíření buddhismu v regionu - dramatický obraz létajícího tygra symbolizuje duchovní překonání překážek, ne doslovnou fyzickou událost."
      },
      praktickeInfo: "K místu vede náročnější horský výstup trvající obvykle 2-3 hodiny každým směrem, doporučuje se dobrá fyzická kondice a aklimatizace na nadmořskou výšku.",
      zdroje: [
        { nazev: "Wikipedia: Paro Taktsang", url: "https://en.wikipedia.org/wiki/Paro_Taktsang", licence: "CC BY-SA" },
        { nazev: "Wikidata: Paro Taktsang", url: "https://www.wikidata.org/wiki/Q2209873", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Paro%20Taktsang%20Bhutan", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Let na hřbetě tygřice", text: "Guru Rinpočhe měl podle legendy přiletět z Tibetu na hřbetě tygřice, do níž se proměnila jeho společnice Ješe Cchogjal, aby ho dopravila k jeskyni pro meditaci." },
        { nazev: "Tři roky boje s démony", text: "V jeskyni pod dnešním klášterem měl guru strávit přes tři roky meditací, aby z okolí vyhnal démony bránící šíření buddhismu v regionu." }
      ]
    }
  },
  {
    id: "ciudad-blanca-mosquitia",
    patch: {
      lead: "Bájné Bílé město v honduraském pralese, které lidé hledali od dob dobyvatelů - a jehož skutečné objevení v roce 2015 provázela zvláštní shoda nešťastných událostí.",
      atmosfera: 4.5,
      popisy: {
        zahada: "Hluboko v honduraském pralese Mosquitia se po staletí traduje legenda o Bílém městě zasvěceném opičímu bohu - a když ho archeologové v roce 2015 konečně skutečně objevili, řada členů expedice onemocněla vzácnou parazitární nemocí.",
        historie: "Zprávy o bílých kamenných věžích v pralese hlásil už španělský dobyvatel Hernán Cortés, který ale lokalitu nikdy sám nenašel. V roce 1927 hlásil monumentální bílé stavby při přeletu regionu i letec Charles Lindbergh. Ve 30. letech se šířily zprávy o takzvaném 'Městě opičího boha' ztotožňovaném s Ciudad Blanca a roku 1939 dobrodruh Theodore Morde tvrdil, že místo našel a přivezl odtud tisíce artefaktů.",
        legenda: "Místní tradice vypráví, že obyvatelé bájného města ho v 16. století opustili poté, co uvěřili, že ho bohové prokleli nemocí. Skutečný, nezávisle ověřený objev přišel až v roce 2015, kdy expedice s pomocí LiDAR technologie odhalila v hustém pralese náměstí, násypy, mohyly a zemní pyramidu neznámé kultury spolu s kešem kamenných soch u její paty.",
        paranormalni: "Řada členů expedice, včetně novináře Douglase Prestona, se během výpravy nakazila leishmaniózou, parazitárním onemocněním poškozujícím kůži a tkáně - shoda okolností, která vedla některé k otázce, zda na staré kletbě přece jen něco není.",
        skepticke: "Leishmanióza je běžné riziko práce v tropickém pralese přenášené bodnutím hmyzu, ne nadpřirozený trest - a proslulá 'kletba' je pravděpodobně jen dramatizace reálného zdravotního rizika, které provází terénní archeologický výzkum v tomto typu prostředí odjakživa."
      },
      praktickeInfo: "Lokalita leží v jedné z nejodlehlejších a nejhůře přístupných částí Střední Ameriky bez turistické infrastruktury, návštěva je prakticky vyhrazená vědeckým expedicím.",
      zdroje: [
        { nazev: "Wikipedia: La Ciudad Blanca", url: "https://en.wikipedia.org/wiki/La_Ciudad_Blanca", licence: "CC BY-SA" },
        { nazev: "National Geographic - Lost City Discovery", url: "https://www.nationalgeographic.com/adventure/article/150302-honduras-lost-city-monkey-god-maya-ancient-archaeology", licence: "novinářský zdroj" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=La%20Mosquitia%20Honduras", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Lindberghův přelet", text: "Legendární letec Charles Lindbergh v roce 1927 hlásil, že při přeletu honduraského pralesa spatřil monumentální bílé kamenné stavby - jeden z mnoha dobových svědectví předcházejících skutečnému objevu." },
        { nazev: "Nemoc, která přišla s objevem", text: "Krátce po ověřeném objevu města v roce 2015 se řada členů expedice nakazila vzácnou parazitární nemocí - shoda, kterou legenda o prokletí okamžitě vstřebala." }
      ]
    }
  },
  {
    id: "cerro-rico",
    patch: {
      lead: "Hora, která od 16. století spolykala miliony horníků, a démon jménem El Tío, kterému dodnes horníci nosí cigarety a alkohol výměnou za ochranu.",
      atmosfera: 4.4,
      popisy: {
        zahada: "Nad bolivijským městem Potosí se tyčí hora, které místní říkají 'hora, co požírá muže' - a hluboko v jejích štolách sedí démonická socha, které horníci dodnes nosí dary výměnou za bezpečí.",
        historie: "Cerro Rico objevil roku 1545 kečuánský horník Diego de Huallpa pracující pro Španěly. Mezi 16. a 18. stoletím pocházelo z hory až 80 % celosvětové produkce stříbra. Za 500 let těžby zde podle odhadů zahynulo až osm milionů zotročených domorodých a afrických dělníků.",
        legenda: "Hluboko ve štolách sedí sochy El Tío ('strýček') - démonického pána podzemí zpodobněného v červené barvě s rohy, ovinutého pestrými stuhami. Horníci mu pravidelně nosí koka listy, cigarety a alkohol: pokud horník narazí na bohatou žílu stříbra, je to dílo El Tía, pokud ho zabije padající kámen, je to jeho dílo také.",
        paranormalni: "Hora je stále aktivním nalezištěm s téměř 20 000 pracujícími horníky denně, přičemž měsíčně v jejích štolách zemře v průměru 14 lidí a průměrná délka života horníků je jen kolem 40 let.",
        skepticke: "Vysoká úmrtnost má jasné, doložené příčiny - zával, otrava plynem, křemičité prachové onemocnění plic z dlouhodobé práce v nebezpečných podmínkách, ne hněv podzemního démona - kult El Tía nicméně zůstává hluboce zakořeněnou kulturní praxí, která horníkům pomáhá psychologicky zvládat mimořádně nebezpečnou práci."
      },
      praktickeInfo: "Prohlídky aktivních štol nabízejí bývalí horníci jako průvodci, návštěva zahrnuje fyzicky náročný sestup do úzkých a prašných tunelů a nese reálné zdravotní riziko, doporučuje se zvážit etickou stránku turistiky v aktivním nebezpečném dole.",
      zdroje: [
        { nazev: "Wikipedia: Cerro Rico", url: "https://en.wikipedia.org/wiki/Cerro_Rico", licence: "CC BY-SA" },
        { nazev: "Wikidata: Cerro Rico", url: "https://www.wikidata.org/wiki/Q1055970", licence: "CC0" },
        { nazev: "CNN Travel - The Mountain that Eats Men", url: "https://www.cnn.com/travel/potosi-bolivia-town-silver-mining-dynamite", licence: "novinářský zdroj" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Cerro%20Rico%20Potosi", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Osm milionů obětí", text: "Za pět století těžby stříbra a cínu si hora podle odhadů vyžádala životy až osmi milionů zotročených a najatých horníků - odtud přezdívka 'hora, co požírá muže'." },
        { nazev: "Dary pro pána podzemí", text: "Horníci dodnes nosí soškám El Tía koka listy, cigarety a alkohol výměnou za ochranu před nehodami a naději na bohatou žílu rudy." }
      ]
    }
  },
  {
    id: "chavin-de-huantar",
    patch: {
      lead: "Andský chrám starý 3000 let, který ovládal poutníky posvátnou hrůzou v temných kamenných chodbách - beze zbraně a beze armády.",
      atmosfera: 4.3,
      popisy: {
        zahada: "V peruánských Andách, dva tisíce let před Inky, postavila kultura bez vlastního písma a bez armády chrám protkaný temnými kamennými tunely - a v jeho srdci, hluboko v naprosté tmě, umístila vyřezávané žulové božstvo s tesáky.",
        historie: "Chavín de Huántar bylo náboženským centrem kultury Chavín, existující zhruba mezi lety 900 a 200 př. n. l. Komplex se skládá ze Starého chrámu z doby kolem roku 900 př. n. l. a Nového chrámu přidaného kolem roku 400 př. n. l., tvořeného masivní plochou pyramidou obklopenou nižšími plošinami a propadlým kruhovým nádvořím.",
        legenda: "V samém srdci stavby, na křížení úzké chodby ve tvaru kříže hluboko v jádru chrámu, stojí dodnes přesně na svém původním místě socha zvaná Lanzón - patrně nejvyšší božstvo Chavínu. Vědci se domnívají, že sloužila jako věštírna: kněží zde dělali klimatické předpovědi a poutníci sem přicházeli s prosbami a dary.",
        paranormalni: "Poutníci putovali i stovky kilometrů, aby se zúčastnili obřadů - výzkumy naznačují, že Chavín ovládal široké okolí čistě prostřednictvím náboženských rituálů a psychologického efektu architektury, ne vojenskou silou.",
        skepticke: "Archeologické studie ukazují, že tmavé, klikaté kamenné chodby, ozvěny mušlových trubek a skryté vodní kanály byly promyšleně navrženy tak, aby v poutnících vyvolávaly úctu a dezorientaci - architektura samotná fungovala jako nástroj náboženské autority, ne skutečná nadpřirozená síla."
      },
      praktickeInfo: "Areál je přístupný s placeným vstupem, prohlídka zahrnuje sestup do úzkých podzemních galerií, doporučuje se počítat s vysokou nadmořskou výškou peruánských And.",
      zdroje: [
        { nazev: "Wikipedia: Chavín de Huántar", url: "https://en.wikipedia.org/wiki/Chav%C3%ADn_de_Hu%C3%A1ntar", licence: "CC BY-SA" },
        { nazev: "Wikidata: Chavín de Huántar", url: "https://www.wikidata.org/wiki/Q732554", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Chavin%20de%20Huantar", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Lanzón na svém místě 2500 let", text: "Socha zvaná Lanzón stojí přesně tam, kam ji stavitelé umístili před zhruba 2500 lety, na křižovatce úzkých kamenných chodeb v samém jádru chrámu." },
        { nazev: "Moc bez armády", text: "Výzkumy naznačují, že kultura Chavín ovládala široké okolí čistě silou náboženských rituálů a architektury, ne vojenským dobýváním - poutníci přicházeli dobrovolně ze vzdálenosti až 500 kilometrů." }
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
