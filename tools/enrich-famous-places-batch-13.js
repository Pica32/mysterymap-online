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
    id: "murujuga-rock-art",
    patch: {
      lead: "Milion rytin starých až 50 000 let - největší sbírka skalního umění na světě, kterou ještě donedávna ničil průmysl, dnes chráněný jako UNESCO.",
      atmosfera: 4.2,
      popisy: {
        zahada: "Na poloostrově Burrup v severozápadní Austrálii leží největší sbírka petroglyfů na světě - asi milion rytin starých 40 000 až 50 000 let, přičemž některé mohou být staré přes 45 000 let. Místo domorodý název Murujuga znamená v jazycích Ngajarda 'vyčnívající kyčelní kost'.",
        historie: "Lokalita zahrnuje kolem 2500 archeologických nalezišť včetně lomů, skořápkových středisek a táborů. Původními strážci území byl lid Yaburara, po zdrcujícím masakru Flying Foam roku 1869 převzalo tradiční správu pět klanů: Yaburara, Ngarluma, Mardudhunera, Yindjibarndi a Wong-Goo-Tt-Oo.",
        legenda: "Skalní rytiny uchovávají posvátné příběhy a písňové stezky domorodých obyvatel. Tradiční strážkyně Raelene Cooper to v roce 2022 vyjádřila slovy, že skalní umění 'archivuje naše zákony. Není psáno na kamenné desce, ale vyryto do ngurra, které uchovává naše Dreaming příběhy a Songlines.'",
        paranormalni: "Mezi lety 1963 a 2006 bylo kvůli průmyslovému rozvoji zničeno podle odhadů asi 24,4 procenta skalního umění, přestože státní vláda toto číslo zpochybňovala a tvrdila, že od roku 1972 bylo zasaženo jen 4 procenta. Vědci dále dokumentovali kyselé emise poškozující petroglyfy, což vyvolalo ostrý spor mezi odborníky a úřady o kvalitě ovzduší.",
        skepticke: "Spor o míru poškození i o kvalitu ovzduší zůstává vědecky i politicky kontroverzní, ale samotná existence a stáří rytin jsou archeologicky nezpochybnitelné - v červenci 2025 UNESCO oficiálně zapsalo Murujugu na seznam světového dědictví jako 21. australskou lokalitu a teprve druhou uznávající domorodé kulturní hodnoty."
      },
      praktickeInfo: "Návštěva je možná s doprovodem tradičních strážců území nebo v rámci organizovaných prohlídek, doporučuje se respektovat posvátnost místa a probíhající domorodou správu.",
      zdroje: [
        { nazev: "Wikipedia: Murujuga", url: "https://en.wikipedia.org/wiki/Murujuga", licence: "CC BY-SA" },
        { nazev: "Wikidata: Murujuga", url: "https://www.wikidata.org/wiki/Q269163", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Murujuga%20Burrup%20Peninsula", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Miliony let vyprávění vyrytého do kamene", text: "Podle tradiční strážkyně Raelene Cooper skalní umění uchovává posvátné zákony a příběhy jejího lidu - psané ne na kamenné desce, ale přímo do samotné krajiny." },
        { nazev: "UNESCO uznání po desetiletích sporu", text: "V červenci 2025 UNESCO konečně zapsalo Murujugu na seznam světového dědictví, po letech sporů o průmyslové poškozování skalního umění." }
      ]
    }
  },
  {
    id: "pashupatinath-temple",
    patch: {
      lead: "Jeden z nejposvátnějších hinduistických chrámů světa nad řekou Bagmatí, kde se kremační žehřiště nachází jen pár kroků od modliteb.",
      atmosfera: 4.3,
      popisy: {
        zahada: "Nad břehem posvátné řeky Bagmatí v Káthmándú stojí komplex, jehož existence je doložena už kolem roku 400 n. l. - jeden z nejstarších a nejvýznamnějších hinduistických náboženských komplexů jižní Asie, kde se dodnes provádí veřejné kremace jen kroky od modlitebních obřadů.",
        historie: "Dnešní architektonickou podobu chrám získal v roce 1692 po poškození termity a zemětřeseními, po předchozích přestavbách včetně té od vládce Šivadévy (1099-1126). Komplex zasvěcený Pašupatimu, projevu boha Šivy, se rozkládá na ploše 246 hektarů a zahrnuje 518 menších svatyní. Od roku 1979 je na seznamu UNESCO.",
        legenda: "Podle hinduistické mytologie se po velkém pokání Pánduovců Šiva znovu objevil s hlavou v Pašupatinátu, hrbem v Kédárnátu, tváří v Rudranátu, pažemi v Tunganátu a pupkem v Madhjaméšvaru - pět míst propojených jedním božským tělem. Jiná tradice vypráví, jak se Šiva a Párvatí proměnili v antilopy, a když je bohové zajali, ulomený roh se stal uctívaným lingamem, který později objevil pastevec.",
        paranormalni: "V tibetském vadžrajánovém buddhismu je místo považováno za jedno z osmi velkých pohřebišť, kde duchovní mistři meditovali a dosahovali osvícení - meditační jeskyně spojené s praktikujícími jako Tilopa a Naropa zůstávají posvátnými poutními místy dodnes.",
        skepticke: "Kremační žehřiště je aktivní součástí náboženského provozu, ne turistickou atrakcí - komplex funguje jako živé místo hinduistické i buddhistické duchovní praxe současně, s dlouhou, dobře zdokumentovanou historií sahající přes 1600 let."
      },
      praktickeInfo: "Přístup do vnitřního chrámu je vyhrazen hinduistům, veřejnost může sledovat kremace a náboženský provoz z okolních teras, doporučuje se respektovat probíhající obřady a citlivost místa.",
      zdroje: [
        { nazev: "Wikipedia: Pashupatinath Temple", url: "https://en.wikipedia.org/wiki/Pashupatinath_Temple", licence: "CC BY-SA" },
        { nazev: "Wikidata: Pashupatinath Temple", url: "https://www.wikidata.org/wiki/Q380384", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Pashupatinath%20Temple%20Kathmandu", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Pět míst jednoho těla", text: "Podle legendy se Šivovo tělo po jeho zjevení rozdělilo mezi pět posvátných míst - hlava v Pašupatinátu, hrb, tvář, paže a pupek jinde v Himálaji." },
        { nazev: "Osm velkých pohřebišť buddhismu", text: "Vadžrajánová tradice řadí kremační žehřiště chrámu mezi osm nejposvátnějších míst, kde duchovní mistři dosahovali osvícení meditací mezi mrtvými." }
      ]
    }
  },
  {
    id: "chogha-zanbil",
    patch: {
      lead: "Nejzachovalejší stupňovitá pyramida na světě mimo Mezopotámii, kterou postavil král, aby sjednotil bohy dvou znepřátelených elamských krajů.",
      atmosfera: 3.9,
      popisy: {
        zahada: "V íránském Chúzestánu leží pozůstatky obřího posvátného komplexu, který kolem roku 1250 př. n. l. postavil elamský král Untaš-Napiriša - a jehož skutečným cílem nebylo obydlené město, ale sjednocení bohů dvou soupeřících elamských oblastí na jednom místě.",
        historie: "Původní název komplexu byl Dur Untaš, tedy 'město Untaše', dnešní jméno Čoga Zanbíl znamená 'košíkovitá mohyla'. Ziggurat měřil původně 105,2 metru na stranu a dosahoval výšky asi 53 metrů v pěti patrech - dnes stojí už jen do výšky 24,75 metru, přesto zůstává podle UNESCO nejlépe dochovaným příkladem stupňovité pyramidové stavby a největším zikkuratem mimo Mezopotámii.",
        legenda: "Král nechal komplex postavit především na počest velkého boha Inšušinaka ve snaze vytvořit nové náboženské centrum, které by sjednotilo bohy vysočinného i nížinného Elamu na jediném místě - politicko-náboženský projekt sjednocení dvou částí říše.",
        paranormalni: "Komplex obklopovaly tři soustředné ochranné hradby zahrnující chrámové stavby, královské paláce a pět podzemních královských hrobek - rozsáhlé opevnění odpovídající významu místa jako náboženského i mocenského centra.",
        skepticke: "Zánik komplexu má jasnou historickou příčinu - novoasyrský vládce Aššurbanipal ho kolem roku 645 př. n. l. zničil, ne přírodní katastrofa nebo kletba. Roku 1979 se Čoga Zanbíl stal vůbec prvním íránským zápisem na seznam UNESCO."
      },
      praktickeInfo: "Naleziště leží asi 30 kilometrů jihovýchodně od města Súsa, přístupné s placeným vstupem, doporučuje se ochrana proti slunci kvůli odkryté poloze v poušti.",
      zdroje: [
        { nazev: "Wikipedia: Chogha Zanbil", url: "https://en.wikipedia.org/wiki/Chogha_Zanbil", licence: "CC BY-SA" },
        { nazev: "Wikidata: Chogha Zanbil", url: "https://www.wikidata.org/wiki/Q4523", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Chogha%20Zanbil%20Iran", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Chrám pro sjednocení dvou zemí", text: "Král Untaš-Napiriša nepostavil komplex jako obydlené město, ale jako náboženský projekt, který měl sjednotit bohy vysočinného a nížinného Elamu na jediném místě." },
        { nazev: "Nejlépe dochovaný zikkurat na světě", text: "Přestože dnes dosahuje jen necelé poloviny své původní výšky, zůstává Čoga Zanbíl podle UNESCO nejlépe dochovaným příkladem stupňovité pyramidové stavby a největším zikkuratem mimo Mezopotámii." }
      ]
    }
  },
  {
    id: "cerro-sechin",
    patch: {
      lead: "300 kamenných reliéfů znázorňujících rozčtvrcené válečníky - a nikdo si není jistý, jestli jde o oslavu vítězství, nebo anatomickou učebnici.",
      atmosfera: 4.0,
      popisy: {
        zahada: "V peruánském regionu Ancash stojí naleziště starší než proslulejší Chavín de Huántar - a jeho stěny zdobí přes 300 kamenných reliéfů zobrazujících useknuté hlavy, končetiny, oči a vnitřnosti, jejichž skutečný účel zůstává mezi archeology sporný.",
        historie: "Lokalitu objevili 1. července 1937 archeologové Julio C. Tello a Toribio Mejía Xesspe. Datování ukazuje vznik kolem roku 1600 př. n. l., dokončena byla před rokem 2000 př. n. l. a užívána zůstala až do roku 1500 př. n. l. - předchází tak proslulejší kulturu Chavín. Skuteční stavitelé i způsob výstavby zůstávají nejasní, přestože místo zjevně sloužilo jako správní i obřadní centrum.",
        legenda: "Reliéfy zobrazují takzvané 'válečníky-kněze' vedle rozčtvrcených obětí - hlav, končetin, očí, střev i páteří. Drápovité nohy kočkovitých postav lemujících centrální schodiště naznačují ranou tradici 'kultu felida', která později dosáhla vrcholu v Chavín de Huántaru.",
        paranormalni: "Badatelé nabízejí několik konkurenčních teorií výkladu: rituál lidských obětí bohům, oslavu vítězství nad sousedním lidem Casma, jakousi anatomickou 'laboratoř' pro studium lidského těla, nebo vizuální varování vládnoucí elity před povstáním.",
        skepticke: "Přesný účel reliéfů zůstává otevřenou archeologickou otázkou bez definitivní odpovědi - žádná z teorií zatím nezískala jednoznačnou převahu, což z místa dělá skutečně zajímavý předmět odborné debaty, ne jen turistickou záhadu."
      },
      praktickeInfo: "Naleziště leží asi 5 kilometrů od města Casma a 13 kilometrů od pobřeží Tichého oceánu, přístupné s placeným vstupem.",
      zdroje: [
        { nazev: "Wikipedia: Cerro Sechín", url: "https://en.wikipedia.org/wiki/Cerro_Sech%C3%ADn", licence: "CC BY-SA" },
        { nazev: "Wikidata: Cerro Sechín", url: "https://www.wikidata.org/wiki/Q2045790", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Cerro%20Sechin%20Peru", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Čtyři konkurenční teorie", text: "Archeologové nabízejí čtyři odlišné výklady krvavých reliéfů - lidskou oběť, oslavu vítězství, anatomickou studii nebo varování před vzpourou - a žádná z nich zatím nezvítězila jednoznačně." },
        { nazev: "Starší než slavnější Chavín", text: "Cerro Sechín předchází proslulejší kulturu Chavín de Huántar a jeho drápovité kočkovité motivy naznačují ranou verzi kultu, který tam později dosáhl vrcholu." }
      ]
    }
  },
  {
    id: "rabaul-caldera",
    patch: {
      lead: "Sopečná kaldera, jejíž město po katastrofě roku 1937 vybudovalo plán, díky kterému erupce z roku 1994 přežilo skoro celé.",
      atmosfera: 4.1,
      popisy: {
        zahada: "Na papuánském poloostrově Gazelle leží sopečná kaldera stará asi 1400 let, uvnitř které stojí samotné město Rabaul - a jeho obyvatelé se dvakrát v historii ocitli přímo v epicentru současné erupce dvou sopek najednou.",
        historie: "Kaldera vznikla subdukční vulkanickou aktivitou zhruba před 1400 lety a zahrnuje několik dílčích jícnů, z nichž nejaktivnější je stratovulkán Tavurvur. Nejvyšší bod dosahuje 688 metrů.",
        legenda: "Roku 1937 způsobila současná erupce sopek Tavurvur a Vulcan katastrofu s 507 oběťmi - tragédie, která vedla k založení Rabaulské vulkanologické observatoře, dodnes monitorující sopečnou aktivitu Papuy-Nové Guineje.",
        paranormalni: "Když roku 1994 obě sopky vybuchly znovu současně, zničily letiště a zasypaly město popelem - díky plánování založenému na zkušenosti z roku 1937 ale zahynulo jen pět lidí, z toho jeden neobvyklým způsobem: bleskem uvnitř sopečného popelového mraku.",
        skepticke: "Dramatický rozdíl v počtu obětí mezi lety 1937 a 1994 (507 versus 5) je přímým důsledkem systematické přípravy a evakuačních plánů vybudovaných po první katastrofě, ne štěstí - od roku 1994 zůstává Tavurvur pravidelně aktivní s dalšími erupcemi v letech 2006, 2009, 2010 a 2014."
      },
      praktickeInfo: "Oblast zůstává aktivní vulkanickou zónou pod stálým monitoringem, návštěva vyžaduje ověření aktuální sopečné aktivity a doporučení místních úřadů.",
      zdroje: [
        { nazev: "Wikipedia: Rabaul caldera", url: "https://en.wikipedia.org/wiki/Rabaul_caldera", licence: "CC BY-SA" },
        { nazev: "Wikidata: Rabaul Caldera", url: "https://www.wikidata.org/wiki/Q1320298", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Rabaul%20Caldera%20Papua%20New%20Guinea", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "507 obětí, které změnily přípravu na katastrofy", text: "Ničivá erupce roku 1937 s 507 mrtvými vedla k založení vulkanologické observatoře a evakuačním plánům, které o 57 let později zachránily téměř celé město." },
        { nazev: "Zabit bleskem v popelovém mraku", text: "Při erupci roku 1994 zahynul jeden člověk vzácným způsobem - bleskem vzniklým přímo uvnitř sopečného popelového mraku, jevem, který doprovází jen některé velké erupce." }
      ]
    }
  },
  {
    id: "sumela-monastery",
    patch: {
      lead: "Klášter přilepený na skalní stěně, který založili mniši kvůli obrazu Panny Marie namalovanému údajně samotným apoštolem Lukášem.",
      atmosfera: 4.4,
      popisy: {
        zahada: "Na příkré skalní stěně v tureckých horách nad Trabzonem se drží klášter založený už kolem roku 386 n. l. - podle legendy kvůli ikoně, kterou měl namalovat přímo apoštol Lukáš.",
        historie: "Klášter založili podle historika Williama Millera dva athénští mniši, Barnabáš a Sofronios. Svou dnešní podobu získal ve 13. století za rozkvětu Trapezuntského císařství, nejvýznamnější podporu mu poskytl císař Alexios III. (1349-1390), který nechal klášter obnovit po tom, co ho podle legendy zachránila Bohorodička během bouře na moři.",
        legenda: "Proslulost klášteru přinesla ikona Panny Marie zvaná Panagia Gorgoepekoos, o které se traduje, že ji namaloval sám apoštol Lukáš. Chrysobulla z roku 1365 potvrdila klášteru svobodu a daňové úlevy, po osmanském dobytí roku 1461 si klášter podržel ochranu a výsady.",
        paranormalni: "Od roku 1682 v klášteře sídlila i Frontistérion Trapezúntu, proslulá řecká vzdělávací instituce - klášter tak fungoval nejen jako duchovní, ale i vzdělávací centrum regionu po staletí.",
        skepticke: "Klášter zůstal aktivní až do roku 1923, kdy řecko-turecká výměna obyvatelstva vedla k jeho opuštění - historicky doložený politický proces, ne tajemný zánik. Dnes funguje jako muzeum a turistická atrakce v národním parku Altındere a je na předběžném seznamu UNESCO, momentálně prochází obnovou tureckou vládou."
      },
      praktickeInfo: "Klášter je přístupný s placeným vstupem, k vchodu vede strmá horská stezka, doporučuje se pevná obuv a počítat s vyšší nadmořskou výškou kolem 1200 metrů.",
      zdroje: [
        { nazev: "Wikipedia: Sumela Monastery", url: "https://en.wikipedia.org/wiki/Sumela_Monastery", licence: "CC BY-SA" },
        { nazev: "Wikidata: Sumela Monastery", url: "https://www.wikidata.org/wiki/Q1419157", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Sumela%20Monastery%20Trabzon", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Ikona od apoštola Lukáše", text: "Klášter proslavila ikona Panny Marie, o které se tradovalo, že ji namaloval přímo apoštol Lukáš - relikvie, která z odlehlého horského místa udělala významný poutní cíl." },
        { nazev: "Císař zachráněný z bouře", text: "Císař Alexios III. nechal klášter rozsáhle obnovit poté, co ho podle legendy během bouře na moři zachránila sama Bohorodička." }
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
