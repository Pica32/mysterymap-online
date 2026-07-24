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
    id: "lut-desert-yardangs",
    patch: {
      lead: "Íránská poušť, kde satelity NASA naměřily nejvyšší povrchovou teplotu na celé planetě - přes 80 stupňů Celsia.",
      gps: { lat: 30.605, lon: 59.0678 },
      atmosfera: 4.0,
      popisy: {
        zahada: "V íránské poušti Dašt-e Lút se táhne přes 150 kilometrů řada rovnoběžných hřebenů a brázd zvaných jardangy, vysokých až 75 metrů - a přímo v této oblasti satelity naměřily nejvyšší povrchovou teplotu půdy, jaká byla kdy na Zemi zaznamenána.",
        historie: "Region byl v minulosti domovem vzkvétající kultury Jiroft kolem roku 2500 př. n. l. Archeologický průzkum identifikoval 87 starověkých nalezišť sahajících od 5. tisíciletí př. n. l. až po pozdní islámskou éru, včetně sídliště Šahdád na západním okraji a rozlehlého 200hektarového naleziště Šahr-e Sústa, zvaného 'Spálené město'.",
        legenda: "Satelitní měření NASA z družice Aqua zaznamenala roku 2005 povrchovou teplotu půdy dosahující 70,7 stupňů Celsia, přestože skutečná teplota vzduchu se pohybovala mezi 30 a 54 stupni. Novější data z roku 2019 zaznamenala povrchovou teplotu dokonce 80,83 stupňů Celsia.",
        paranormalni: "Charakteristické jardangy uprostřed pouště doprovázejí i rokle a propadliny, které dohromady vytvářejí geologicky mimořádně dynamickou krajinu tvarovanou tisíce let působením větru.",
        skepticke: "Extrémní teploty i neobvyklé skalní útvary mají čistě klimatické a geologické vysvětlení - kombinaci tmavého povrchu pohlcujícího sluneční záření, minimálních srážek a erozivního působení větru, ne nadpřirozený jev."
      },
      praktickeInfo: "Návštěva vyžaduje organizovanou expedici s místním průvodcem kvůli extrémnímu horku a odlehlosti terénu, doporučuje se vyhnout letním měsícům kvůli životu nebezpečným teplotám.",
      zdroje: [
        { nazev: "Wikipedia: Dasht-e Lut", url: "https://en.wikipedia.org/wiki/Dasht-e_Lut", licence: "CC BY-SA" },
        { nazev: "Wikidata: Dasht-e Lut", url: "https://www.wikidata.org/wiki/Q767128", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Dasht-e%20Lut%20Iran", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Nejvyšší teplota na Zemi", text: "Satelitní měření zaznamenala v poušti Lút povrchovou teplotu půdy přesahující 80 stupňů Celsia - nejvyšší dosud zdokumentovanou hodnotu na celé planetě." },
        { nazev: "150 kilometrů skalních vln", text: "Charakteristické jardangy se táhnou v souvislé řadě přes 150 kilometrů a dosahují výšky až 75 metrů - jeden z nejrozsáhlejších útvarů tohoto typu na světě." }
      ]
    }
  },
  {
    id: "zhangjiajie",
    patch: {
      lead: "Křemencové pilíře, které inspirovaly plovoucí hory ve filmu Avatar - vznikly ale ledem a mechem, ne mimozemskou magií.",
      atmosfera: 4.2,
      popisy: {
        zahada: "V čínské provincii Chu-nan se z krajiny zvedají tisíce úzkých křemencových pilířů, z nichž jeden, vysoký 1080 metrů, dal v roce 2010 vzniknout přezdívce 'Hora Avatar - Aleluja' po celosvětově úspěšném filmu.",
        historie: "Park Zhangjiajie vznikl roku 1982 jako první národní lesní park Číny na ploše 4810 hektarů. Širší oblast Wulingyuan získala status UNESCO v roce 1992, geoparkové označení následovalo v letech 2001-2004.",
        legenda: "Tvůrci filmu Avatar přiznali, že se při návrhu plovoucích hor inspirovali několika čínskými lokalitami, přičemž Zhangjiajie bylo jedním z hlavních vizuálních vzorů - pilíř Jižní nebeský sloup byl po premiéře filmu oficiálně přejmenován.",
        paranormalni: "Na rozdíl od typického vápencového krasu vznikly tyto pilíře fyzickým zvětráváním - sezónní roztahování ledu, růst vegetace, celoroční vlhké počasí a působení potoků společně vytesaly útvary, které inspirovaly generace čínských krajinářských malířů.",
        skepticke: "Geologický proces vzniku pilířů je dobře zdokumentovaný a nemá nic společného s filmovou fikcí - Zhangjiajie fascinovalo malíře i básníky staletí předtím, než ho objevil Hollywood, díky přirozené kráse, ne díky filmové slávě."
      },
      praktickeInfo: "Park je přístupný s placeným vstupem, nabízí skleněné chodníky a výtahy vedoucí na vrcholy pilířů, doporučuje se počítat s vysokou návštěvností v hlavní sezóně.",
      zdroje: [
        { nazev: "Wikipedia: Zhangjiajie National Forest Park", url: "https://en.wikipedia.org/wiki/Zhangjiajie_National_Forest_Park", licence: "CC BY-SA" },
        { nazev: "Wikidata: Zhangjiajie National Forest Park", url: "https://www.wikidata.org/wiki/Q3895620", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Zhangjiajie%20National%20Forest%20Park", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Hora přejmenovaná po filmu", text: "1080metrový pilíř Jižní nebeský sloup byl v lednu 2010 oficiálně přejmenován na 'Horu Avatar - Aleluja' po premiéře stejnojmenného filmu." },
        { nazev: "Krajina malovaná staletí před Hollywoodem", text: "Charakteristické pilíře inspirovaly čínské krajinářské malíře po staletí dávno předtím, než je proslavil moderní film." }
      ]
    }
  },
  {
    id: "ise-grand-shrine",
    patch: {
      lead: "Nejposvátnější šintoistická svatyně Japonska, kterou její strážci každých dvacet let záměrně zbourají a znovu postaví od základů.",
      atmosfera: 4.1,
      popisy: {
        zahada: "V japonské prefektuře Mie stojí nejposvátnější šintoistická svatyně země - a už přes tisíc let ji její strážci pravidelně každých dvacet let kompletně zboří a znovu postaví, aby zůstala navěky 'nová'.",
        historie: "Podle legendy svatyni založila kolem 4. roku př. n. l. princezna Jamatohime-no-mikoto, když hledala trvalé místo pro uctívání sluneční bohyně Amaterasu - její hledání ji dovedlo do Ise poté, co uslyšela hlas bohyně vyjadřující přání zde přebývat. První skutečnou budovu svatyně nechal postavit císař Temmu (678-686), obřadní přestavba začala roku 692.",
        legenda: "Svatynní komplex praktikuje unikátní cyklickou přestavbu každých dvacet let, zvanou Šikinen sengú, zakořeněnou v šintoistickém konceptu tokowaka - obnovování předmětů k udržení božské prestiže. Celý proces rekonstrukce trvá zhruba 17 let, posledních osm let se soustředí na samotnou fyzickou stavbu.",
        paranormalni: "Svatyně má chránit Jata no kagami, jedno ze tří císařských regálií Japonska. Během období Edo se poutě staly mimořádně populární - v roce 1625 navštívilo svatyni za pouhých 50 dní 3,62 milionu lidí.",
        skepticke: "Přestavba z roku 2013, v pořadí už 62. cyklus, stála 57 miliard jenů, financovaných výhradně ze soukromých darů - další přestavba je naplánovaná na rok 2033. Tradice pravidelné obnovy je záměrnou duchovní praxí, ne nutnou opravou chátrající stavby."
      },
      praktickeInfo: "Vnitřní svatyně je pro veřejnost z velké části nepřístupná zevnitř, návštěvníci mohou obdivovat komplex zvenčí, doporučuje se návštěva s dostatkem času na okolní posvátný les.",
      zdroje: [
        { nazev: "Wikipedia: Ise Grand Shrine", url: "https://en.wikipedia.org/wiki/Ise_Grand_Shrine", licence: "CC BY-SA" },
        { nazev: "Wikidata: Ise Grand Shrine", url: "https://www.wikidata.org/wiki/Q687168", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Ise%20Grand%20Shrine", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Bourání jako posvátný rituál", text: "Svatyně se každých dvacet let záměrně kompletně zbourá a znovu postaví od základů - ne kvůli chátrání, ale jako projev šintoistického konceptu věčné obnovy." },
        { nazev: "3,62 milionu poutníků za 50 dní", text: "V roce 1625 zaznamenala svatyně mimořádnou vlnu poutníků - přes tři a půl milionu lidí ji navštívilo v rozmezí pouhých padesáti dní." }
      ]
    }
  },
  {
    id: "sans-souci-palace-haiti",
    patch: {
      lead: "Palác pojmenovaný po popraveném rivalovi, postavený přesně na místě, kde ho král možná nechal zabít.",
      atmosfera: 4.0,
      popisy: {
        zahada: "V haitském Milotu stojí ruiny paláce, který si nechal postavit král Henri Christophe jako demonstraci černošské moci a schopností evropským a americkým pozorovatelům - a jehož jméno odkazuje na muže, kterého sám Christophe nechal popravit.",
        historie: "Sans-Souci vznikl mezi lety 1810 a 1813 jako hlavní královské sídlo Henriho Christopha, krále Henryho I. Haiti. Patřil mezi první velké stavby postavené ve svobodném Haiti po haitské revoluci.",
        legenda: "Christopheho poradce, architekt Pompée Valentin Vastey, vyjádřil hrdost nad stavbou slovy, že dokazuje, že 'jsme neztratili architektonický vkus a genialitu našich předků'. Palác dostal jméno po Jean-Baptiste Sans Souci, revolučním vůdci, kterého Christophe nechal popravit roku 1803 - možná přímo na místě, kde později palác vyrostl.",
        paranormalni: "Henri Christophe spáchal sebevraždu 8. října 1820 po prodělané mrtvici. Ničivé zemětřesení roku 1842 zdevastovalo velkou část paláce, který už nikdy nebyl obnoven.",
        skepticke: "Zánik paláce má jasnou historickou příčinu - přírodní katastrofu následující po smrti jeho stavitele, ne kletbu spojenou s jeho jménem. Od roku 1982 je na seznamu UNESCO, přestože kvůli politické nestabilitě Haiti zůstává jen málo navštěvovaný."
      },
      praktickeInfo: "Ruiny jsou přístupné s doprovodem místního průvodce, doporučuje se ověřit aktuální bezpečnostní situaci v Haiti před cestou.",
      zdroje: [
        { nazev: "Wikipedia: Sans-Souci Palace", url: "https://en.wikipedia.org/wiki/Sans-Souci_Palace", licence: "CC BY-SA" },
        { nazev: "Wikidata: Sans-Souci Palace", url: "https://www.wikidata.org/wiki/Q930795", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Sans-Souci%20Palace%20Milot%20Haiti", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Palác na místě popravy rivala", text: "Sans-Souci nese jméno muže, kterého král Christophe nechal popravit roku 1803 - podle tradice možná přesně na místě, kde palác později vyrostl." },
        { nazev: "Zemětřesení, které palác nikdy nedovolilo obnovit", text: "Ničivé zemětřesení roku 1842 zdevastovalo palác krátce po smrti jeho stavitele a stavba už nikdy nebyla znovu postavena." }
      ]
    }
  },
  {
    id: "timbuktu-manuscript-quarter",
    patch: {
      lead: "Statisíce rukopisů zachránili místní rodiny před džihádisty tak, že je pašovaly v pytlích na rýži přes celé Mali.",
      atmosfera: 4.2,
      popisy: {
        zahada: "V malijském Timbuktu se po staletí hromadily rukopisy dokládající, že Afrika měla vlastní bohatou písemnou vzdělaneckou kulturu dávno před koloniální érou - a v roce 2012 čelily tyto neocenitelné texty hrozbě úplného zničení.",
        historie: "Rukopisy pocházejí z období od konce 13. do počátku 20. století a zahrnují díla o medicíně, filozofii, vědě a islámských studiích, převážně psaná arabským písmem. Místní písaři překládali díla Platóna, Hippokrata a Avicenny, zatímco vlastní badatelé dokumentovali originální výzkum islámského práva, astronomie, medicíny i témat jako mnohoženství, půjčování peněz a otroctví - jedna kronika dokonce zaznamenala meteorický roj z roku 1593.",
        legenda: "Když islamističtí povstalci z hnutí Ansár Dín obsadili během konfliktu v severním Mali Timbuktu, hrozili zničením těchto nenahraditelných rukopisů. Ústav Ahmeda Baby a přidružené knihovny čelily zkáze, jak se militanti stahovali z města.",
        paranormalni: "Záchrannou operaci zorganizovali Dr. Abdel Kader Haidara, rodinný strážce rukopisů, a americká expertka na konzervaci Stephanie Diakitéová. Ve spolupráci s místními rodinami, které rukopisy schovávaly ve svých domovech, dokázali přepravit asi 350 000 textů na jih do Bamaka.",
        skepticke: "Navzdory úspěšné záchranné operaci bylo 4203 rukopisů spáleno nebo ukradeno - reálná, doložená ztráta, kterou nelze bagatelizovat. Rukopisy jsou nezpochybnitelným dokladem, že předkoloniální západní Afrika měla propracované intelektuální sítě zahrnující astronomii, medicínu, právo i teologii, což zpochybňuje eurocentrické historické narativy."
      },
      praktickeInfo: "Přístup k rukopisům je omezen kvůli konzervačním důvodům i bezpečnostní situaci v Mali, většina zachráněných textů zůstává uložena v Bamaku.",
      zdroje: [
        { nazev: "Wikipedia: Timbuktu Manuscripts", url: "https://en.wikipedia.org/wiki/Timbuktu_Manuscripts", licence: "CC BY-SA" },
        { nazev: "Wikidata: Timbuktu Manuscripts", url: "https://www.wikidata.org/wiki/Q2209578", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Timbuktu%20Mali", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "350 000 rukopisů v pytlích na rýži", text: "Místní rodiny propašovaly statisíce vzácných rukopisů z Timbuktu do bezpečí Bamaka, ukryté v obyčejných pytlích a osobních zavazadlech před zraky militantů." },
        { nazev: "Meteorický roj zaznamenaný v roce 1593", text: "Jedna z dochovaných kronik zachytila pozorování meteorického roje z roku 1593 - doklad propracovaných astronomických pozorování v předkoloniální západní Africe." }
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
