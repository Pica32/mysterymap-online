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
    id: "mustang-caves",
    patch: {
      lead: "Deset tisíc jeskyní vytesaných do himálajských útesů, z nichž většina zůstává dodnes nepromzoumaná - a ty prozkoumané ukrývaly mumie a tibetské rukopisy staré tisíce let.",
      atmosfera: 4.4,
      popisy: {
        zahada: "V odlehlém nepálském regionu Mustang, mezi masivy Annapurny a Dhaulagiri, jsou do stěn údolí vytesány desítky tisíc jeskyní ve výšce přes 4000 metrů - a i po letech archeologického výzkumu zůstává drtivá většina z nich neprozkoumaná.",
        historie: "Badatelé v jeskyních objevili částečně mumifikovaná těla a kostry staré nejméně 2000 až 3000 let. Nálezy zahrnují buddhistické malby, sochy a rukopisy psané starou tibetštinou pocházející z 12. až 14. století.",
        legenda: "Mezi lety 2007 a 2012 prozkoumal tým vědců, horolezců a dokonce dvou dětí pod vedením badatele jménem Pete desítky obtížně přístupných jeskyní a objevil mumie, nástěnné malby, rukopisy i další neocenitelné artefakty. Jeden z výzkumníků, Charles Ramble, dokázal starou tibetštinu na nalezených textech přečíst.",
        paranormalni: "Jeskyně sloužily postupně jako obydlí, pohřební komory, meditační ústraní i kláštery - někteří badatelé se domnívají, že mohly fungovat i jako úkryty nebo nouzové vesnice během tibetsko-nepálských konfliktů, žádný přímý důkaz ale toto spojení s konkrétní válkou nepotvrzuje.",
        skepticke: "Přestože zůstává mnoho jeskyní neprobádaných a jejich přesný účel není vždy jasný, nálezy samotné jsou solidně datované a archeologicky doložené - tajemství spočívá spíš v obrovském rozsahu nepromzoumaného materiálu než v nadpřirozené záhadě."
      },
      praktickeInfo: "Návštěva regionu Horní Mustang vyžaduje speciální povolení a obvykle organizovaný trekking s průvodcem, jeskyně samotné jsou z velké části nepřístupné veřejnosti kvůli náročnému terénu a probíhajícímu výzkumu.",
      zdroje: [
        { nazev: "Wikipedia: Mustang Caves", url: "https://en.wikipedia.org/wiki/Mustang_Caves", licence: "CC BY-SA" },
        { nazev: "Wikidata: Mustang Caves", url: "https://www.wikidata.org/wiki/Q16935459", licence: "CC0" },
        { nazev: "Amusing Planet - Mysterious Caves of Mustang", url: "https://www.amusingplanet.com/2016/03/the-mysterious-caves-of-mustang-nepal.html", licence: "vzdělávací zdroj" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Mustang%20Caves%20Nepal", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Rukopisy, které dokázal přečíst jen jeden badatel", text: "Mezi nálezy byly i rukopisy psané starou tibetštinou - jazykem, který z celého výzkumného týmu dokázal přečíst jen badatel Charles Ramble." },
        { nazev: "Deset tisíc jeskyní, hrstka prozkoumaných", text: "Z odhadovaných deseti tisíc jeskyní ve stěnách údolí zůstává drtivá většina dodnes zcela neprobádaná." }
      ]
    }
  },
  {
    id: "marcahuasi",
    patch: {
      lead: "Kamenná náhorní plošina, kterou jeden mystik prohlásil za pozůstatek ztracené civilizace - a která se dodnes drží jako místo UFO pozorování.",
      atmosfera: 4.0,
      popisy: {
        zahada: "Ve výšce téměř 4000 metrů nad hladinou moře, východně od peruánské Limy, se rozkládá plošina s obřími žulovými skalami, jejichž neobvyklé tvary připomínají lidské tváře, zvířata i náboženské symboly.",
        historie: "Jedním z prvních moderních badatelů, kteří místo navštívili, byl samozvaný archeolog a mystik Daniel Ruzo, který sem přijel roku 1952 a dalších devět let region zkoumal. Tvrdil, že objevil stovky lidských soch i zvířecích figurek - velbloudů, lvů, tuleňů a žab.",
        legenda: "Na základě svých nálezů Ruzo popularizoval myšlenku, že Marcahuasi ukrývá sochy vytesané zaniklou civilizací nesoucí poselství pro lidstvo, a spojoval je se zmizelými kulturami i mimozemským kontaktem. Kulturu, kterou měl podle něj region obývat, pojmenoval 'masma'.",
        paranormalni: "Místo je od 70. let proslulé jako oblíbený cíl pozorovatelů UFO - poblíž vesnice San Pedro de Casta se šíří historky o tajemných světlech na obloze, mimotělních zážitcích, viděních duchů i setkáních s UFO, někteří návštěvníci považují oblast za energetický bod nebo mezidimenzionální portál.",
        skepticke: "Většina archeologů považuje skalní útvary za přirozený produkt eroze, ne za dílo starověkých sochařů - okrajoví teoretici a mystici nicméně trvají na tom, že jde o uměle upravené tvary, přestože pro toto tvrzení chybí vědecký konsenzus."
      },
      praktickeInfo: "K plošině vede pěší nebo mezková stezka od vesnice San Pedro de Casta, doporučuje se počítat s vysokou nadmořskou výškou a proměnlivým počasím.",
      zdroje: [
        { nazev: "Wikipedia: Marcahuasi", url: "https://en.wikipedia.org/wiki/Marcahuasi", licence: "CC BY-SA" },
        { nazev: "Wikidata: Marcahuasi", url: "https://www.wikidata.org/wiki/Q2778547", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Marcahuasi%20Peru", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Devět let hledání zaniklé civilizace", text: "Daniel Ruzo strávil devět let zkoumáním plošiny a přesvědčoval veřejnost, že jde o dílo zaniklé civilizace, kterou sám pojmenoval 'masma'." },
        { nazev: "Portál pro milovníky UFO", text: "Od 70. let se místo stalo magnetem pro pozorovatele UFO, kteří sem přijíždějí kvůli historkám o tajemných světlech a mezidimenzionálním jevům." }
      ]
    }
  },
  {
    id: "orongo",
    patch: {
      lead: "Vesnice na okraji sopečného kráteru, kde se dvě stě let rozhodovalo o vládci celého ostrova soutěží v plavání pro vejce mořského ptáka.",
      atmosfera: 4.3,
      popisy: {
        zahada: "Na jihozápadním cípu Velikonočního ostrova, na okraji sopečného kráteru Rano Kau, stojí kamenná vesnice, která byla centrem kultu ptačího muže - rituálu, jímž kmeny ostrova každoročně vybíraly svého vládce.",
        historie: "Kult ptačího muže (tangata manu) nahradil v 16. století předchozí zaměření ostrovní kultury na stavbu soch moai a stal se novým náboženským i politickým rámcem. Soutěž se konala přibližně 200 let, mezi lety 1680 a 1866, než ji ukončil příchod katolických misionářů.",
        legenda: "Kult vycházel z uctívání boha Makemake, boha plodnosti a stvoření. Vybraní bojovníci jednotlivých kmenů sestupovali po strmém útesu Rano Kau, plavali k malému skalnatému ostrůvku Motu Nui a snažili se odtud přinést nepoškozené vejce rackovitého ptáka zvaného stín - první, kdo se s vejcem vrátil ke svému náčelníkovi, se stal na rok tangata manu, ptačím mužem, tedy vládcem celého ostrova.",
        paranormalni: "V Orongu se dodnes dochovalo asi sto kamenných rytin ve tvaru ptačího muže - lidského těla s ptačí hlavou držící v zobáku vejce - hmatatelný pozůstatek dvě stě let trvající tradice.",
        skepticke: "Soutěž fungovala jako alternativa k násilnému boji o moc mezi kmeny - vítězství bylo založeno na dovednosti a odvaze jednotlivých bojovníků, ne na přímém konfliktu, což mohlo paradoxně snižovat míru násilí při předávání vlády nad ostrovem."
      },
      praktickeInfo: "Lokalita je součástí národního parku Rapa Nui s placeným vstupem, nabízí výhled na kráterové jezero i Tichý oceán, přístup je možný autem nebo pěšky od hlavního města Hanga Roa.",
      zdroje: [
        { nazev: "Wikipedia: Tangata manu", url: "https://en.wikipedia.org/wiki/Tangata_manu", licence: "CC BY-SA" },
        { nazev: "Wikidata: Orongo", url: "https://www.wikidata.org/wiki/Q1551834", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Orongo%20Easter%20Island", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Plavání pro vládu nad ostrovem", text: "Vítěz nebezpečného sestupu ze srázu a plavby k ostrůvku Motu Nui pro nepoškozené ptačí vejce se na rok stal vládcem celého ostrova - alternativa k násilnému boji o moc." },
        { nazev: "Sto kamenných tváří ptačího muže", text: "V Orongu se dodnes dochovalo přes sto kamenných rytin zobrazujících postavu s lidským tělem a ptačí hlavou svírající v zobáku vejce." }
      ]
    }
  },
  {
    id: "socotra-dragon-blood-forest",
    patch: {
      lead: "Ostrov izolovaný od pevniny 20 milionů let, kde deštníkovité stromy krvácejí rudou pryskyřici a 37 procent rostlin neroste nikde jinde na Zemi.",
      atmosfera: 4.2,
      popisy: {
        zahada: "V Indickém oceánu leží ostrov, který se od superkontinentu Gondwana odtrhl asi před 18 až 20 miliony let a od té doby driftoval v naprosté izolaci - výsledkem je krajina tak jedinečná, že se ostrovu přezdívá Galapágy Indického oceánu.",
        historie: "Socotra byla izolovaná od africké pevniny minimálně 6 milionů let a od Arabského poloostrova možná až 20 milionů let. Tato extrémní izolace umožnila vznik více než 800 endemických druhů, včetně nejslavnějšího symbolu ostrova, dračince socotrské.",
        legenda: "Charakteristický deštníkovitý strom může žít přes 1000 let a jeho jméno pochází od červené pryskyřice, takzvané 'dračí krve', používané po staletí v tradiční medicíně, barvivech i kosmetice. Podle jedné místní legendy strom vyrostl z krve dvou bratrů, kteří se utkali na život a na smrt, podle jiné z krve draka zraněného v souboji se slonem.",
        paranormalni: "Ostrov je domovem asi 825 druhů rostlin, z nichž 37 procent je endemických, a přes 90 procent zdejších plžů se nevyskytuje nikde jinde na světě - mimořádná koncentrace unikátního života na relativně malé ploše.",
        skepticke: "Skutečný původ jedinečné fauny a flóry ostrova je vědecky dobře vysvětlen dlouhou geologickou izolací, ne draky ani bratrovražednými spory - lidové legendy o dračí krvi jsou poetickým vysvětlením nápadné červené pryskyřice, ne doslovným popisem vzniku stromu."
      },
      praktickeInfo: "Ostrov je přístupný letecky přes jemenské úřady, doporučuje se místní průvodce kvůli odlehlosti terénu a citlivé politické situaci v regionu.",
      zdroje: [
        { nazev: "Wikipedia: Socotra", url: "https://en.wikipedia.org/wiki/Socotra", licence: "CC BY-SA" },
        { nazev: "Wikidata: Socotra", url: "https://www.wikidata.org/wiki/Q82859", licence: "CC0" },
        { nazev: "National Geographic - Socotra Dragon's Blood Island", url: "https://www.nationalgeographic.com/environment/article/socotra-yemen-biodiversity-photography", licence: "novinářský zdroj" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Socotra%20Yemen", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "20 milionů let o samotě", text: "Ostrov byl geologicky izolovaný od okolních pevnin až 20 milionů let, což z něj udělalo živou laboratoř evoluce s stovkami druhů, které nikde jinde na světě nenajdete." },
        { nazev: "Krev bratří, nebo draka?", text: "Místní legendy vysvětlují původ červené pryskyřice stromu dvěma verzemi - krví bratrů v souboji na život a na smrt, nebo krví draka zraněného v boji se slonem." }
      ]
    }
  },
  {
    id: "jebel-barkal",
    patch: {
      lead: "Hora, ve které staří Egypťané viděli tvar boha Amona - a na jejímž základě si núbijští králové po tisíc let nárokovali božské právo vládnout.",
      atmosfera: 4.1,
      popisy: {
        zahada: "Na ohbí Nilu v núbijské části severního Súdánu se zvedá 75metrová skalní věž, kterou staří Egypťané považovali za obydlí boha Amona - a jejíž tvar posloužil núbijským vládcům jako důkaz jejich božského práva vládnout téměř tisíc let.",
        historie: "Jebel Barkal je od dob Nové říše uctíván jako posvátné místo. Egypťané v hoře viděli gigantickou vizi samotného stvořitele - nadpřirozenou bytost spojující vztyčený falus, vzepjatou uraeus kobru a vysokou korunu. První chrám Amonovi zde pravděpodobně postavil faraon Thutmose III. z 18. dynastie krátce po egyptském vpádu do regionu.",
        legenda: "Faraoni Nové říše používali tento přírodní útvar jako důkaz pro Núbijce, že bůh v hoře od počátku času zamýšlel, aby oni, jeho 'tělesní synové', vládli Kuši jako součásti Horního Egypta. Po rozpadu jednoty Egypta zde kolem roku 750 př. n. l. vznikla linie domácích kušitských vládců, kteří tuto tradici oživili a po další téměř tisíciletí odvozovali svou královskou moc od Amona z Jebel Barkalu.",
        paranormalni: "Hora obsahuje kolem 13 chrámů, z nichž největší a nejznámější je právě Chrám Amonův - komplex, který propojuje egyptskou a núbijskou náboženskou tradici na jednom místě po tisíce let.",
        skepticke: "Politické využití přírodního útvaru jako božského ospravedlnění moci je historicky dobře zdokumentovaný fenomén, ne nadpřirozený jev - zajímavé je právě to, jak dlouho a jak důsledně různé vládnoucí linie tuto interpretaci hory využívaly k legitimizaci své vlády. Od roku 2003 je Jebel Barkal součástí núbijských lokalit na seznamu UNESCO."
      },
      praktickeInfo: "Lokalita je přístupná poblíž města Karima v severním Súdánu, doporučuje se místní průvodce a ověření aktuální bezpečnostní situace před cestou.",
      zdroje: [
        { nazev: "Wikipedia: Jebel Barkal", url: "https://en.wikipedia.org/wiki/Jebel_Barkal", licence: "CC BY-SA" },
        { nazev: "Wikidata: Jebel Barkal", url: "https://www.wikidata.org/wiki/Q499019", licence: "CC0" },
        { nazev: "Egypt Independent - Sudan's Jebel Barkal", url: "https://www.egyptindependent.com/exploring-sudans-jebel-barkal-home-to-ancient-egyptian-god-amun/", licence: "novinářský zdroj" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Jebel%20Barkal%20Sudan", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Skála jako tělo boha", text: "Staří Egypťané viděli v tvaru hory gigantickou vizi stvořitele spojující vztyčený falus, vzepjatou kobru a vysokou korunu - přírodní útvar interpretovaný jako doslovné zpodobnění božstva." },
        { nazev: "Tisíc let odvozené moci", text: "Núbijští vládci od roku 750 př. n. l. po další téměř tisíciletí odvozovali své právo vládnout přímo od boha Amona sídlícího v této hoře." }
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
