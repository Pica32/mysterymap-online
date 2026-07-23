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
    id: "okinawa-himeyuri-monument",
    patch: {
      lead: "Studentky, kterým řekli, že jedou pracovat do bezpečné nemocnice - místo toho je poslali na frontovou linii, kde jich 80 procent zahynulo za jediný týden.",
      atmosfera: 4.3,
      popisy: {
        zahada: "V okinawském Itomanu stojí památník připomínající 222 studentek a 18 učitelek dvou okinawských škol, kterým během druhé světové války řekli, že budou pracovat v bezpečných nemocnicích Červeného kříže - místo toho je nasadili přímo do bojů bitvy o Okinawu.",
        historie: "Skupina, dnes známá jako Himeyuri, byla mobilizována 23. března 1945 jako ošetřovatelská jednotka japonské císařské armády. Dívky prováděly hrubé chirurgické zákroky a amputace, pohřbívaly mrtvé a přenášely munici pod nepřetržitou palbou.",
        legenda: "Po rozkazu k rozpuštění jednotky 18. června 1945 zahynulo asi 80 procent zbývajících dívek na ostrově během jediného týdne. Celkový počet obětí dosáhl 211 studentek a 16 učitelek. Některé ze strachu před znásilněním spáchaly sebevraždu kyanidem nebo granáty, které jim dali japonští vojáci.",
        paranormalni: "Památník Himeyuri byl postaven 7. dubna 1946 na památku všech zemřelých a uvádí jméno každé jedné oběti. Muzeum míru Himeyuri, obnovené v roce 2009, obsahuje šest výstavních místností se svědectvími přeživších, fotografiemi a životní velikosti diorama jeskyně, ve které dívky pracovaly.",
        skepticke: "Přeživší ošetřovatelky samy dlouhá léta sloužily jako průvodkyně a kurátorky muzea, aby zajistily, že se historie bude vyprávět přesně a bez idealizace - tragédie je podrobně historicky zdokumentovaná, ne legendou, a muzeum slouží především jako místo usmíření a připomínky, ne turistické senzace."
      },
      praktickeInfo: "Muzeum je přístupné s placeným vstupem, doporučuje se počítat s emocionálně náročnou návštěvou vzhledem k povaze vystavovaných svědectví.",
      zdroje: [
        { nazev: "Wikipedia: Himeyuri Student Corps", url: "https://en.wikipedia.org/wiki/Himeyuri_Student_Corps", licence: "CC BY-SA" },
        { nazev: "Wikidata: Himeyuri Student Corps", url: "https://www.wikidata.org/wiki/Q717158", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Himeyuri%20Peace%20Museum%20Itoman", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Lež o bezpečné nemocnici", text: "Dívkám bylo řečeno, že budou pracovat v bezpečných nemocnicích Červeného kříže - místo toho je nasadili přímo do bojové linie bitvy o Okinawu." },
        { nazev: "Přeživší jako průvodkyně vlastní tragédie", text: "Ženy, které přežily jako studentky Himeyuri, se později staly průvodkyněmi a kurátorkami muzea, aby osobně předávaly svědectví o tom, co se jim a jejich spolužačkám stalo." }
      ]
    }
  },
  {
    id: "lumbini",
    patch: {
      lead: "Místo, kde se podle buddhistické tradice narodil Buddha - a kde archeologové našli důkazy náboženské aktivity o 500 let starší, než byl on sám.",
      atmosfera: 4.0,
      popisy: {
        zahada: "V nepálském distriktu Rúpandéhí leží posvátné místo narození Siddhártha Gautamy, budoucího Buddhy - a archeologické vykopávky zde odhalily náboženskou aktivitu sahající stovky let před jeho narozením.",
        historie: "Podle buddhistické tradice zde kolem roku 563 př. n. l. porodila královna Máyá Siddhártha Gautamu. Lumbiní patří mezi čtyři nejposvátnější poutní místa buddhismu vedle Bódhgaji, Sárnáthu a Kušinagaru.",
        legenda: "Vykopávky u chrámu Máyádéví z roku 2013 odhalily řadu nejstarších buddhistických svatyní jižní Asie. Radiokarbonová analýza naznačuje, že lidská aktivita v Lumbiní začala kolem roku 1000 př. n. l. - stovky let před Buddhovým životem, což naznačuje existenci staršího stromového kultu na místě.",
        paranormalni: "V roce 1896 zde objevili monumentální sloup císaře Ašóky s nápisem v písmu bráhmí, který potvrzuje jeho návštěvu ve 3. století př. n. l. Nápis doslova říká: 'Když byl král Dévánamprija Prijadarsin dvacet let po korunovaci, přišel sem osobně a uctil toto místo, protože se zde narodil Buddha Šákjamuni.'",
        skepticke: "Sám Buddha před svou smrtí označil Lumbiní za jedno ze čtyř míst na zemi, která by si věřící měli po celý život připomínat - archeologické důkazy staršího uctívání na místě jsou vědecky doložené, ne legendou, a jen posilují mimořádný historický i duchovní význam lokality. Od roku 1997 je na seznamu UNESCO."
      },
      praktickeInfo: "Areál je přístupný s placeným vstupem, zahrnuje chrám Máyádéví, Ašókův sloup a posvátný rybník, doporučuje se počítat s celodenní návštěvou kvůli rozsahu poutního parku.",
      zdroje: [
        { nazev: "Wikipedia: Lumbini", url: "https://en.wikipedia.org/wiki/Lumbini", licence: "CC BY-SA" },
        { nazev: "Wikidata: Lumbini", url: "https://www.wikidata.org/wiki/Q9213", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Lumbini%20Nepal", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Sloup, který potvrdil legendu", text: "Ašókův sloup objevený roku 1896 nese nápis dokládající, že sám indický císař osobně navštívil místo Buddhova narození už ve 3. století př. n. l." },
        { nazev: "Kult starší než Buddha sám", text: "Radiokarbonové datování odhalilo náboženskou aktivitu na místě sahající až 500 let před narozením Buddhy - stopu staršího stromového kultu, který místu předcházel." }
      ]
    }
  },
  {
    id: "brihadeeswarar-temple",
    patch: {
      lead: "Chrám s 80tunovým žulovým blokem na vrcholu 63metrové věže, který postavili řemeslníci bez jeřábů a bez moderní techniky za pouhých sedm let.",
      atmosfera: 4.1,
      popisy: {
        zahada: "V jihoindickém Thandžávúru stojí chrám s jedním z největších monolitických lingamů Šivy v Indii a s věží vysokou 63,4 metru, na jejímž vrcholu spočívá 25tunová kupole posazená na 80tunovém žulovém bloku - dílo, které představovalo technický průlom ve schopnosti stavět do výšky s těžkým kamenem.",
        historie: "Chrám nechal postavit čólský císař Rádžarádža I. mezi lety 1003 a 1010 n. l. Komplex o rozměrech 240,79 na 121,92 metru zahrnuje svatyně věnované více božstvům a obsahuje asi 670 čtverečních metrů fresek z 11. století.",
        legenda: "Chrám ukrývá jeden z největších monolitických Šivových lingamů v Indii, vysoký téměř devět metrů, a monolitický býk Nandi vážící 25 tun. Stěny zdobí 81 vytesaných tanečních pozic z klasického textu Nátjašástra a chrám je proslulý i tím, že zde vznikl ikonický bronzový design Nataradži z 11. století.",
        paranormalni: "Technický výkon zvednutí 80tunového žulového bloku na vrchol 63metrové věže bez moderních jeřábů zůstává předmětem obdivu inženýrů i archeologů - přesná metoda, jakou to čólští stavitelé dokázali, je stále předmětem odborných diskuzí.",
        skepticke: "Přestože přesná stavební technika není plně zdokumentována, jde o historicky doložený a datovaný projekt čólské dynastie, ne o nadpřirozený jev - restaurátoři navíc pomocí inovativních technik zachovali jak původní čólské fresky, tak pozdější malby z období Nájaků, což z chrámu dělá i unikátní vrstvenou galerii historie indického malířství."
      },
      praktickeInfo: "Chrám je aktivním hinduistickým svatostánkem s volně přístupným areálem, doporučuje se skromné oblečení a respekt k probíhajícím bohoslužbám.",
      zdroje: [
        { nazev: "Wikipedia: Brihadeeswarar Temple", url: "https://en.wikipedia.org/wiki/Brihadeeswarar_Temple", licence: "CC BY-SA" },
        { nazev: "Wikidata: Brihadeeswarar Temple", url: "https://www.wikidata.org/wiki/Q916943", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Brihadeeswarar%20Temple%20Thanjavur", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "80 tun na vrcholu věže", text: "Stavitelé dokázali zvednout 80tunový žulový blok na vrchol 63metrové věže bez jeřábů a moderní techniky - výkon, jehož přesnou metodu dodnes zkoumají inženýři." },
        { nazev: "Sedm let na jeden z divů Indie", text: "Celý monumentální komplex postavil čólský císař Rádžarádža I. za pouhých sedm let mezi lety 1003 a 1010 n. l." }
      ]
    }
  },
  {
    id: "adam-s-peak",
    patch: {
      lead: "Otisk nohy na vrcholu srílanské hory, který čtyři náboženství nezávisle na sobě přiřazují čtyřem různým svatým postavám.",
      atmosfera: 4.2,
      popisy: {
        zahada: "Na vrcholu srílanské hory vysoké 2243 metrů leží 1,8metrový otisk v kameni, který čtyři odlišná náboženství interpretují čtyřmi zcela různými způsoby - a poutníci sem stoupají po staletí bez ohledu na to, čí otisk to podle nich vlastně je.",
        historie: "Poutní tradice se objevuje už v 5. století v kronice Mahávamsa, která zmiňuje Buddhovu návštěvu. Král Vidžajabáhu I. (1058-1114) měl na horu vystoupit a otisk uctít. Arabský cestovatel Ibn Battúta vystoupal na vrchol roku 1344 a popsal schodiště se železnými sloupky a řetězy pomáhajícími poutníkům.",
        legenda: "Buddhisté otisk uctívají jako levou nohu Buddhy, kterou tam zanechal při své třetí a poslední návštěvě Srí Lanky v 6. století př. n. l. Tamilští hinduisté ho označují za otisk Šivy a horu nazývají 'Hora Šivova světla'. Někteří muslimové a křesťané připisují otisk Adamovi nebo svatému Tomáši apoštolovi - odtud anglické jméno hory.",
        paranormalni: "Nejoblíbenější dobou pro výstup je duben, kdy poutníci míří k vrcholu, aby sledovali východ slunce - typický trojúhelníkový stín hory se pak vrhá přes okolní pláně v jednom z nejfotografovanějších přírodních úkazů Srí Lanky.",
        skepticke: "Skutečnost, že čtyři nezávislá náboženství přisuzují stejnému kamennému útvaru čtyři odlišné svaté postavy, je zajímavým dokladem toho, jak různé kultury interpretují stejný přírodní jev podle vlastní tradice - první zaznamenaný anglický výstup provedl poručík William Malcolm 26. dubna 1815."
      },
      praktickeInfo: "K vrcholu vede šest turistických tras, sezónní vrchol návštěvnosti je v dubnu kvůli sledování východu slunce, výstup je fyzicky náročný a obvykle se provádí v noci, aby poutníci dorazili na vrchol před rozedněním.",
      zdroje: [
        { nazev: "Wikipedia: Adam's Peak", url: "https://en.wikipedia.org/wiki/Adam%27s_Peak", licence: "CC BY-SA" },
        { nazev: "Wikidata: Adam's Peak", url: "https://www.wikidata.org/wiki/Q60789", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Adam%27s%20Peak%20Sri%20Lanka", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Jeden otisk, čtyři svatí", text: "Buddhisté, hinduisté, muslimové i křesťané nezávisle na sobě uctívají stejný kamenný otisk jako stopu jiné posvátné postavy své vlastní tradice." },
        { nazev: "Trojúhelníkový stín při východu slunce", text: "Za jasného rána v dubnu vrhá hora při východu slunce přes okolní krajinu výrazný trojúhelníkový stín, kvůli kterému sem míří tisíce poutníků ročně." }
      ]
    }
  },
  {
    id: "anuradhapura",
    patch: {
      lead: "Hlavní město staré 1500 let, kde roste nejstarší doloženě vysazený strom na světě - přímo z výhonku stromu, pod nímž Buddha dosáhl osvícení.",
      atmosfera: 4.0,
      popisy: {
        zahada: "Ve srílanském vnitrozemí leží starobylé hlavní město, které sloužilo jako centrum ostrova po neuvěřitelných 1500 let - a jehož nejposvátnějším pokladem je strom, o kterém se traduje, že vyrostl přímo z výhonku toho, pod nímž Buddha dosáhl osvícení.",
        historie: "Anuradhapura byla hlavním městem Srí Lanky přibližně od roku 437 př. n. l. do roku 1017 n. l. Podle kroniky Mahávamsa město založil ministr jménem Anuradha poblíž řeky Kadamba, formálně se stalo hlavním městem za vlády krále Pandukabhaji roku 377 př. n. l. a nakonec pokrylo plochu jednoho čtverečního kilometru, čímž patřilo mezi největší města tehdejší Asie.",
        legenda: "Město se stalo intelektuálním centrem buddhismu v jižní Asii. Nejvýznamnějším pokladem je Jaya Sri Maha Bódhi, popisovaný jako nejstarší dosud žijící, zdokumentovaný a záměrně vysazený strom na světě, o němž se věří, že pochází z původního stromu Bódhi, pod kterým Buddha dosáhl osvícení.",
        paranormalni: "Buddhistický klášterní komplex kolem posvátného stromu se rozprostírá na ploše přes 100 čtverečních kilometrů a zahrnuje velké chrámy jako Ruwanwelisaya a Jetavanaráma - jedno z největších náboženských center starověkého světa.",
        skepticke: "Zánik města má jasnou historickou příčinu - dobytí Čólskou dynastií z jižní Indie roku 993 n. l., ne kletbu nebo tajemný úpadek. Přestože politický význam Anuradhapury upadl, duchovní význam přetrval celý středověk, moderní obnova začala v 70. letech 19. století za britské koloniální správy a od roku 1949 vznikla samostatná 'Nová Anuradhapura', aby ochránila staré posvátné lokality."
      },
      praktickeInfo: "Areál je rozsáhlý a vyžaduje počítat s celodenní návštěvou nebo více dny, přístupný s placeným vstupem, doporučuje se skromné oblečení kvůli aktivnímu náboženskému provozu kolem posvátného stromu.",
      zdroje: [
        { nazev: "Wikipedia: Anuradhapura", url: "https://en.wikipedia.org/wiki/Anuradhapura", licence: "CC BY-SA" },
        { nazev: "Wikidata: Anuradhapura", url: "https://www.wikidata.org/wiki/Q5724", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Anuradhapura%20Sri%20Lanka", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Nejstarší vysazený strom na světě", text: "Posvátný strom Jaya Sri Maha Bódhi je podle dostupných záznamů nejstarším doloženě záměrně vysazeným stromem na světě, o kterém se věří, že pochází z výhonku stromu Buddhova osvícení." },
        { nazev: "1500 let jako hlavní město", text: "Anuradhapura sloužila jako hlavní město Srí Lanky nepřetržitě po dobu asi 1500 let, což z ní dělá jedno z nejdéle trvajících hlavních měst v historii lidstva." }
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
