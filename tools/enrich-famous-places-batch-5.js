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
    id: "hampi",
    patch: {
      lead: "Ruiny druhého největšího města světa 16. století, které armáda vyplenila po šest měsíců a od té doby zůstalo opuštěné.",
      atmosfera: 4.3,
      popisy: {
        zahada: "V jihoindické krajině plné obřích žulových balvanů leží víc než tisíc staveb - pozůstatky metropole, která byla v 16. století druhým největším městem světa s půl milionem obyvatel, než ji během šesti měsíců vyplenila spojená armáda sultanátů.",
        historie: "Říši Vidžajanagar založili roku 1336 bratři Harihara I. a Bukka Ráya. Během 16. století bylo hlavní město Vidžajanagar (dnešní Hampi) považováno za druhé největší město světa. Roku 1565 město dobylo spojenectví dekkánských muslimských sultanátů, kteří ho po dobu šesti měsíců plenili, než bylo definitivně opuštěno.",
        legenda: "Hampi se objevuje i v hinduistickém eposu Rámájana jako místo, kam Ráma a Lakšman dorazili do Země opic - v okolí se dodnes ukazují geografické útvary, které mají tuto mytologickou epizodu dokládat.",
        paranormalni: "Zbořené a vyplundrované město zůstalo skryté v hustém lese více než 200 let, než ho v letech 1799-1800 znovu objevil skotský plukovník a starožitník Colin Mackenzie, pozdější první generální zeměměřič Indie.",
        skepticke: "Zánik Hampi má jasně zdokumentovanou historickou příčinu - vojenské dobytí a systematické plenění spojeneckou armádou sultanátů, ne kletbu nebo nadpřirozenou událost. Od roku 1986 je komplex na seznamu UNESCO jako svědectví moci a významu říše Vidžajanagar."
      },
      praktickeInfo: "Areál je rozsáhlý a vyžaduje minimálně jeden celý den na prohlídku, doporučuje se kolo nebo motorka k přesunu mezi jednotlivými vzdálenými skupinami ruin, vstup do některých chrámů je placený.",
      zdroje: [
        { nazev: "Wikipedia: Hampi", url: "https://en.wikipedia.org/wiki/Hampi", licence: "CC BY-SA" },
        { nazev: "Wikidata: Hampi", url: "https://www.wikidata.org/wiki/Q48727106", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Hampi%20India", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Šest měsíců plenění", text: "Po vojenském dobytí roku 1565 plenila spojená armáda sultanátů bohaté hlavní město po dobu šesti měsíců, než ho definitivně opustila v troskách." },
        { nazev: "Skryté 200 let v lese", text: "Zbořené město zůstalo skryté v hustém lese víc než dvě staletí, než ho na přelomu 18. a 19. století znovu objevil skotský důstojník Colin Mackenzie." }
      ]
    }
  },
  {
    id: "moai-quarry-rano-raraku",
    patch: {
      lead: "Sopečný kráter, odkud pochází 95 % soch moai Velikonočního ostrova - a kde jich stovky zůstaly navždy nedokončené, přisáté ke skále.",
      atmosfera: 4.5,
      popisy: {
        zahada: "V kráteru vyhaslé sopky na Velikonočním ostrově leží stovky obřích kamenných hlav v různém stádiu rozpracování - od hotových soch po obry stále přirostlé ke skalní stěně, jako by řemeslníci uprostřed práce náhle odešli.",
        historie: "Rano Raraku sloužilo jako lom po dobu asi 500 let, až do počátku 18. století, a odtud pochází přibližně 95 % všech známých monolitických soch moai na ostrově. Dodnes se v kráteru nachází asi 400 soch, z nichž jen zhruba polovina je dokončená.",
        legenda: "Mnohé sochy zůstaly nedokončené kvůli prasklinám nebo vadám v kameni, jiné byly od počátku vytesány jen jako reliéf bez záměru je z lomu vůbec vytáhnout. Nikdy nedokončená socha zvaná Te Tokanga by po dokončení měřila asi 21 metrů a vážila kolem 270 tun - byla by zdaleka největší moai na ostrově.",
        paranormalni: "Podle domorodé tradice i moderní archeologické rekonstrukce se hotové sochy z lomu k místům určení nepřenášely ležmo, ale 'chodily' - jejich záměrně široká, do písmene D tvarovaná základna a předklon umožňovaly obyvatelům ostrova rozhoupat je do klikatého pohybu podobného chůzi.",
        skepticke: "Fyzikální analýza tvaru soch skutečně potvrdila, že 'chodící' přeprava byla realisticky možná a efektivní technika, ne mýtus - nedokončené sochy v lomu jsou zase přímým dokladem náhlého přerušení práce, jehož přesnou příčinu (nedostatek zdrojů, sociální zvraty, ekologická krize ostrova) archeologové stále zkoumají."
      },
      praktickeInfo: "Návštěva vyžaduje vstupenku do národního parku Rapa Nui a registrovaného průvodce, procházka mezi sochami je nenáročná, ale doporučuje se ochrana proti slunci.",
      zdroje: [
        { nazev: "Wikipedia: Rano Raraku", url: "https://en.wikipedia.org/wiki/Rano_Raraku", licence: "CC BY-SA" },
        { nazev: "Wikidata: Rano Raraku", url: "https://www.wikidata.org/wiki/Q937167", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Rano%20Raraku", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Největší socha, která nikdy nevznikla", text: "Nedokončená socha Te Tokanga by po dokončení měřila 21 metrů a vážila 270 tun - byla by suverénně největší moai na celém ostrově, kdyby ji řemeslníci dokončili." },
        { nazev: "Sochy, které 'chodily'", text: "Fyzikální rekonstrukce potvrdila domorodou tradici: díky specifickému tvaru základny mohli obyvatelé ostrova sochy přepravovat vzpřímeně klikatým pohybem podobným chůzi." }
      ]
    }
  },
  {
    id: "danakil-depression",
    patch: {
      lead: "Jedno z nejteplejších míst na Zemi, kde neonově žluté a tyrkysové jezírka síry vypadají spíš jako z jiné planety než z Afriky.",
      atmosfera: 4.4,
      popisy: {
        zahada: "Etiopská proláklina leží přes 100 metrů pod úrovní moře a patří mezi nejteplejší obydlené oblasti planety - a přesto (nebo právě proto) sem míří vědci, těžaři soli i cestovatelé kvůli krajině, která vypadá jako z jiného světa.",
        historie: "Průměrná roční teplota v Danakilské proláklině dosahuje kolem 36 stupňů Celsia, denní teploty přitom běžně přesahují 47 stupňů a v létě mohou vystoupat až k 50 stupňům. Oblast bývá označovaná i jako 'kolébka lidstva' díky významným archeologickým nálezům raných lidských předků.",
        legenda: "Nejpůsobivější částí je hydrotermální pole Dallol s jasně zbarvenými horkými prameny tvořenými solí, železem a sírou. V nejteplejších a nejkyselejších jezírkách vytváří síra téměř neonově žlutý odstín, chladnější měděná jezírka jsou tyrkysová, železo dodává oranžové tóny a sůl vytváří bílé krusty.",
        paranormalni: "Žhavé magma pod povrchem ohřívá vodu stékající z okolních vysočin, ta stoupá minerálními usazeninami vzhůru a vyvěrá jako slaný roztok otvory na dně sopečných kráterů, čímž vytváří tato barevná jezírka.",
        skepticke: "Mimozemský vzhled krajiny má čistě geologické vysvětlení v kombinaci sopečné aktivity, minerálních usazenin a extrémního podnebí - žádné nadpřirozené prvky nejsou potřeba k vysvětlení jedné z nejfotogeničtějších krajin planety."
      },
      praktickeInfo: "Návštěva vyžaduje organizovanou expedici s klimatizovaným vozidlem a místním průvodcem kvůli extrémnímu horku, doporučuje se vyhnout se poledním hodinám a nosit dostatek vody.",
      zdroje: [
        { nazev: "Wikipedia: Danakil Depression", url: "https://en.wikipedia.org/wiki/Danakil_Depression", licence: "CC BY-SA" },
        { nazev: "Wikidata: Danakil Depression", url: "https://www.wikidata.org/wiki/Q14213070", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Danakil%20Depression%20Dallol", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Barvy z chemie, ne z malby", text: "Neonově žlutá, tyrkysová i oranžová barva jezírek Dallolu vznikají čistě chemicky - sírou, mědí a železem rozpuštěnými v horkém slaném roztoku vyvěrajícím ze země." },
        { nazev: "Kolébka lidstva v pekelném vedru", text: "Přestože jde o jedno z nejnehostinnějších míst planety, region přinesl významné archeologické nálezy raných lidských předků, což mu vyneslo přezdívku kolébka lidstva." }
      ]
    }
  },
  {
    id: "bamiyan-cliffs",
    patch: {
      lead: "Dva monumentální Buddhové vytesaní do skály přežili patnáct staletí - než je Taliban během 25 dnů roku 2001 zničil jako 'modlářské'.",
      atmosfera: 4.2,
      popisy: {
        zahada: "Do pískovcových útesů afghánského údolí Bamján vytesali řemeslníci v 6. století dvě monumentální sochy Buddhy vysoké 38 a 53 metrů - patřily mezi největší stojící Buddhovy sochy na světě, dokud je v roce 2001 nezničila radikální islamistická vláda.",
        historie: "Bamján byl součástí říše Kušánů (1.-3. století n. l.), kteří pomohli šířit buddhismus v regionu, a ležel na Hedvábné stezce spojující Indii se Střední Asií a Čínou - stal se tak raným centrem obchodu i buddhismu.",
        legenda: "Sochy stály na svém místě přes 1500 let a byly součástí afghánské národní hrdosti bez ohledu na to, že se islám v regionu mezitím stal dominantním náboženstvím - připomínka dlouhé multikulturní a náboženské rozmanitosti údolí.",
        paranormalni: "V roce 2001 talibanský režim sochy odsoudil jako modlářské a v rozporu s islámským učením a zničil je během 25 dnů použitím výbušnin a dělostřelectva - akt, který svět vnímal jako brutální projev ikonoklasmu a nesnášenlivosti.",
        skepticke: "Zničení nebylo nešťastnou náhodou ani přírodní katastrofou, ale záměrným politickým a ideologickým rozhodnutím konkrétní vlády - ztráta zůstává dodnes bolestně vnímaná mnoha Afghánci jako útok na jejich historii a kulturní dědictví, ne jen na náboženský symbol."
      },
      praktickeInfo: "Prázdné výklenky po sochách jsou dnes přístupné návštěvníkům, v roce 2021 byla jedna ze soch dočasně obnovena jako 3D světelná projekce, fyzická rekonstrukce samotných soch se zatím neplánuje.",
      zdroje: [
        { nazev: "Wikipedia: Buddhas of Bamiyan", url: "https://en.wikipedia.org/wiki/Buddhas_of_Bamiyan", licence: "CC BY-SA" },
        { nazev: "Wikidata: Buddhas of Bamiyan", url: "https://www.wikidata.org/wiki/Q484458", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Bamiyan%20Buddhas%20Afghanistan", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "1500 let na jednom místě", text: "Sochy stály nezměněné na svém místě přes patnáct staletí a přežily i změnu dominantního náboženství regionu z buddhismu na islám, než je zničila konkrétní politická rozhodnutí roku 2001." },
        { nazev: "Světelný duch místo kamene", text: "V roce 2021 osvítili aktivisté prázdný výklenek 3D světelnou projekcí jedné ze zničených soch - symbolické, dočasné znovuvzkříšení bez fyzické rekonstrukce." }
      ]
    }
  },
  {
    id: "nineveh",
    patch: {
      lead: "Asyrské hlavní město tak obrovské a hříšné, že podle bible jen zázrak zachránil jeho obyvatele před zkázou - dokud o století později skutečně nepadlo.",
      atmosfera: 4.1,
      popisy: {
        zahada: "Na břehu Tigridu naproti dnešnímu Mosulu ležela metropole, která byla v 1. tisíciletí př. n. l. největším a nejmocnějším městem světa - a zároveň biblickým symbolem hříchu, do kterého měl podle Starého zákona kázat prorok Jonáš po útěku z útrob velké ryby.",
        historie: "Ninive bylo hlavním městem Asyrské říše od roku 705 do roku 612 př. n. l. a mohlo být osídlené už od 6. tisíciletí př. n. l. Výrazně se rozrostlo v 8. století, kdy sem král Senacherib přesunul své hlavní sídlo. Jeho takzvaný 'Palác bez soupeře' měl 80 místností a rozměry 512 na 247 metrů.",
        legenda: "V biblickém příběhu prorok Jonáš kázal Ninivanům soud za jejich hříchy, obyvatelé města ale činili pokání, a tak byli ušetřeni - epizoda, která z Ninive udělala trvalý symbol pokání a božího milosrdenství, ale i biblickou zkratku pro město propadlé hříchu.",
        paranormalni: "Prorok Nahum později předpověděl definitivní zkázu Ninive, která přišla v roce 612 př. n. l. - město bylo dobyto a zničeno a nikdy nebylo znovu vystavěno, čímž se biblické proroctví historicky naplnilo.",
        skepticke: "Pád Ninive v roce 612 př. n. l. je historicky nezpochybnitelná událost způsobená spojeným tažením Babylóňanů a Médů proti oslabené Asyrské říši, ne zázrak nebo kletba - vykopávky vedené od poloviny 19. století Austenem Henry Layardem a dalšími badateli podrobně zdokumentovaly Senacheribův palác i zbytky města."
      },
      praktickeInfo: "Naleziště leží na okraji Mosulu v severním Iráku, bezpečnostní situace v regionu se v posledních letech výrazně zlepšila, ale doporučuje se před cestou ověřit aktuální doporučení pro cestovatele.",
      zdroje: [
        { nazev: "Wikipedia: Nineveh", url: "https://en.wikipedia.org/wiki/Nineveh", licence: "CC BY-SA" },
        { nazev: "Wikidata: Nineveh", url: "https://www.wikidata.org/wiki/Q5680", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Nineveh%20Mosul%20Iraq", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Jonáš a kázání pokání", text: "Podle biblického příběhu prorok Jonáš po útěku z útrob velké ryby kázal v Ninive boží soud - obyvatelé města ale činili pokání a byli ušetřeni zkázy." },
        { nazev: "Palác bez soupeře", text: "Král Senacherib nechal postavit palác o rozměrech 512 na 247 metrů s 80 místnostmi - stavbu, kterou sám nazval 'Palácem bez soupeře'." }
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
