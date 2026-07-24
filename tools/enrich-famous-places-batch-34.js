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
    id: "khami-ruins",
    patch: {
      lead: "Nástupnické hlavní město po pádu Velké Zimbabwe, dobyté rebely, kteří pak svou vlastní metropoli přesunuli jinam - a nechali Khami napospas budoucím nájezdníkům Ndebele.",
      atmosfera: 3.8,
      popisy: {
        zahada: "Asi 22 kilometrů západně od Bulawaya leží ruiny hlavního města království Butua, které převzalo roli regionální metropole poté, co upadla proslulá Velká Zimbabwe.",
        historie: "Khami sloužilo jako hlavní město dynastie Torwa a království Butua zhruba 200 let počínaje rokem 1450 - vzniklo přesně v době úpadku Velké Zimbabwe a představuje architektonický vývoj starších zimbabwských stylů kombinovaných s místní technikou stavby Leopard's Kopje. Vláda skončila kolem roku 1683, kdy Changamire Dombo dobyl místo v čele armády rozvijských rebelů ze státu Mwenemutapa - Rozviové poté přesunuli své hlavní město do Danamombe. Ve 30. letech 19. století vytlačili nájezdníci Ndebele Rozvie z Khami i souvisejících sídel.",
        legenda: "Naleziště zahrnuje sedm královských platforem s výraznými architektonickými prvky, včetně 6metrové vysoké a 68metrové dlouhé opěrné zdi zdobené šachovnicovým vzorem. Terasovité platformy ve výšce 2 až 7 metrů nesou dekorace v podobě šachovnice, rybí kosti nebo provazového vzoru.",
        paranormalni: "V areálu se nachází i křesťanský kříž, o němž se předpokládá, že ho umístili dobově soudobí misionáři - neobvyklý prvek uprostřed jinak čistě domorodého architektonického komplexu.",
        skepticke: "Dobytí Khami rebely vedenými Changamirem Dombem je historicky doloženo, ne pouhá legenda - stejně jako pozdější vytlačení Rozviů nájezdníky Ndebele ve 30. letech 19. století, což ukazuje kontinuální řetězec mocenských změn v regionu napříč staletími. UNESCO zapsalo Khami na seznam světového dědictví roku 1986."
      },
      praktickeInfo: "Naleziště je veřejně přístupné s malým muzeem, doporučuje se kombinovat návštěvu s prohlídkou Bulawaya.",
      zdroje: [
        { nazev: "Wikipedia: Khami", url: "https://en.wikipedia.org/wiki/Khami", licence: "CC BY-SA" },
        { nazev: "Wikidata: Khami", url: "https://www.wikidata.org/wiki/Q938685", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Khami%20Ruins%20Zimbabwe", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Nástupce Velké Zimbabwe", text: "Khami převzalo roli hlavního města regionu přesně v době, kdy upadala proslulá Velká Zimbabwe, a stalo se sídlem dynastie Torwa na dvě století." },
        { nazev: "Řetěz dobyvatelů", text: "Khami postupně dobyli rozvijští rebelové vedení Changamirem Dombem a později nájezdníci Ndebele - nepřerušená řada mocenských zvratů táhnoucí se přes staletí." }
      ]
    }
  },
  {
    id: "volubilis-ruins",
    patch: {
      lead: "'Faraonův palác', jak místní tradice nazývala římské ruiny a připisovala je starým Egypťanům - ve skutečnosti sídlo mauretánských králů a později kolébka islámské dynastie.",
      atmosfera: 3.9,
      popisy: {
        zahada: "V severním Maroku leží výjimečně dobře dochované římské město na samém okraji impéria - a místní tradice mu dlouho říkala 'Qasr Fara'on' (Faraonův palác), v mylném přesvědčení, že ho postavili staří Egypťané.",
        historie: "Osada vznikla ve 3. století př. n. l. jako berberské město s kartáginskou přítomností, doloženou zbytky chrámu a nápisy na kamenech. Kolem roku 25 př. n. l. se stalo hlavním městem Mauretánského království za krále Juby II. Po anexi Mauretánie Claudiem roku 44 n. l. Volubilis vzkvétal jako významné provinční město s asi 20 000 obyvateli na vrcholu slávy, rozkládající se na 42 hektarech s akvaduktem, veřejnými lázněmi a 2,6kilometrovým okruhem obranných hradeb.",
        legenda: "Po římském stažení kolem roku 285 n. l. zůstalo město obydlené berberskými kmeny a později Araby. Roku 787-788 zde Idris I. založil dynastii Idrísovců, než přesunul hlavní město do Fezu, což nakonec vedlo k opuštění Volubilis do 11. století.",
        paranormalni: "Elitní rezidence ukrývají dochované mozaiky in situ - Dům Orfea s Orfeem hrajícím zvířatům, Dům rytíře se scénou Bakcha objevujícího spící Ariadnu, Dům Venuše s Dianou překvapenou Aktaeonem a závodícími vozy, a Dům Herkulových prací zobrazující dvanáct mytologických úkolů.",
        skepticke: "Přesvědčení, že místo postavili staří Egypťané, je lidová etymologie odrážející působivost římských staveb na pozdější obyvatele, ne historický fakt - zemětřesení roku 1755 ruiny poškodilo, francouzské vykopávky v letech 1887-1941 ale odhalily propracované mozaiky a potvrdily skutečný římský původ města. Roku 1918 zde byla nalezena i bronzová busta Catona Mladšího."
      },
      praktickeInfo: "Naleziště je veřejně přístupné s placeným vstupem, nejlépe kombinovatelné s výletem z Meknesu nebo Fezu.",
      zdroje: [
        { nazev: "Wikipedia: Volubilis", url: "https://en.wikipedia.org/wiki/Volubilis", licence: "CC BY-SA" },
        { nazev: "Wikidata: Volubilis", url: "https://www.wikidata.org/wiki/Q391215", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Volubilis%20Morocco", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Faraonův palác, který postavili Římané", text: "Místní tradice dlouho nazývala ruiny 'Faraonovým palácem' a připisovala je starým Egypťanům, přestože jde ve skutečnosti o římské město." },
        { nazev: "Kolébka islámské dynastie", text: "Roku 787-788 zde Idris I. založil dynastii Idrísovců, než přesunul hlavní město do Fezu - rozhodnutí, které nakonec vedlo k opuštění Volubilis." }
      ]
    }
  },
  {
    id: "byblos-old-city",
    patch: {
      lead: "Snad nejstarší nepřetržitě obydlené město na světě - a podle egyptské mytologie místo, kde bohyně Eset našla tělo svého manžela Usira ukryté ve sloupu paláce.",
      atmosfera: 4.0,
      popisy: {
        zahada: "Na libanonském pobřeží leží město považované za jedno z nejstarších na světě, možná vůbec nejstarší nepřetržitě obydlené - archeologické záznamy naznačují první osídlení mezi lety 8800 a 7000 př. n. l., s doloženým nepřetržitým osídlením od zhruba 5000 př. n. l.",
        historie: "Urbanizace začala během třetího tisíciletí př. n. l. Byblos se stal 'předním městem Fénicie' po pádu egyptské Nové říše v 11. století př. n. l. Foiničtí obchodníci z Byblosu zásadně přispěli k vývoji písma a obchodu - archeologické důkazy odhalují fénickou abecedu o dvaceti dvou znacích datovanou kolem let 1150-950 př. n. l.",
        legenda: "Podle Plútarchovy verze egyptské mytologie se bohyně Eset (Isis) setkala se služebníky u Královského pramene v Byblosu. Následně 'nalezla tělo svého manžela Usira (Osirida) zapuštěné v jednom ze sloupů paláce' v královské rezidenci - jeden z nejpozoruhodnějších příkladů propojení egyptské mytologie s konkrétním foiníckým městem.",
        paranormalni: "Foiničtí obchodníci šířili svůj abecední systém po celém středomořském obchodním prostoru díky námořnímu obchodu, čímž Byblos sehrál klíčovou roli v šíření gramotnosti napříč starověkým světem.",
        skepticke: "Tvrzení o nejstarším nepřetržitě obydleném městě světa je založeno na archeologickém datování prvního osídlení, ne na jediném nesporném důkazu - konkurenční nároky vznášejí i další starověká města, což z tohoto titulu činí spíše předmět odborné debaty než definitivně uzavřenou otázku. UNESCO zapsalo Byblos na seznam světového dědictví roku 1984."
      },
      praktickeInfo: "Staré město je veřejně přístupné s placeným vstupem k archeologickému nalezišti, doporučuje se kombinovat s procházkou po malebném přístavu.",
      zdroje: [
        { nazev: "Wikipedia: Byblos", url: "https://en.wikipedia.org/wiki/Byblos", licence: "CC BY-SA" },
        { nazev: "Wikidata: Byblos", url: "https://www.wikidata.org/wiki/Q173532", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Byblos%20Lebanon", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Bohyně, která našla manžela ve sloupu", text: "Podle egyptské mytologie zaznamenané Plútarchem nalezla bohyně Eset tělo svého manžela Usira zapuštěné v jednom ze sloupů královského paláce v Byblosu." },
        { nazev: "Abeceda, která dobyla svět", text: "Fénická abeceda o dvaceti dvou znacích, vzniklá právě v Byblosu, se díky námořnímu obchodu rozšířila po celém Středomoří a položila základ mnoha pozdějším písmům." }
      ]
    }
  },
  {
    id: "jiuzhaigou",
    patch: {
      lead: "Barevná jezera, kde podle legendy bohyně Semo denně myla vlasy, zatímco jí bůh Dage nosil vodu - vědec, který místo objevil pro svět, ho nazval krásnějším než cokoli v Evropě či Americe.",
      atmosfera: 4.1,
      popisy: {
        zahada: "V čínské provincii S'čchuan leží údolí devíti vesnic s jezery zbarvenými do modré, zelené a tyrkysové - krajina, která zůstala vnějšímu světu prakticky neznámá až do roku 1975.",
        historie: "Lesnický vědec Wu Zhonglun region zmapoval roku 1975 a důrazně prosazoval jeho ochranu se slovy: 'Navštívil jsem několik zemí Evropy a Ameriky, ale nikdy jsem neviděl tak dechberoucí přírodní krásu.' Přírodní rezervace byla založena roku 1980, otevřena turistice roku 1984 a zapsána na seznam UNESCO roku 1992.",
        legenda: "Podle místního folklóru bylo Pětibarevné jezero místem, kde si 'bohyně Semo myla vlasy a bůh Dage jí denně nosil vodu' - romantický mýtus vysvětlující krásu a barevnost vody na tomto konkrétním místě.",
        paranormalni: "Výrazně modrá, zelená a tyrkysová barva jezer vznikla ledovcovou činností a přirozeným hrázováním. Vysoká koncentrace uhličitanu vápenatého činí vodu mimořádně čirou, region obsahuje i významné ložiska travertinu vznikajícího rychlým srážením vápníku ve sladké vodě.",
        skepticke: "Barva jezer má plně vysvětlitelný geologický původ v minerálním složení vody, ne nadpřirozený - legenda o bohyni Semo je krásný lidový příběh dodávající místu poetický rozměr, ne konkurenční vysvětlení skutečného přírodního jevu."
      },
      praktickeInfo: "Park je přístupný po vyznačených dřevěných chodnících a autobusové dopravě uvnitř areálu, doporučuje se návštěva mimo hlavní turistickou sezónu kvůli velké návštěvnosti.",
      zdroje: [
        { nazev: "Wikipedia: Jiuzhaigou", url: "https://en.wikipedia.org/wiki/Jiuzhaigou", licence: "CC BY-SA" },
        { nazev: "Wikidata: Jiuzhaigou", url: "https://www.wikidata.org/wiki/Q4111", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Jiuzhaigou%20China", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Bohyně myjící si vlasy v jezeře", text: "Podle místního folklóru si bohyně Semo myla vlasy v Pětibarevném jezeře, zatímco jí bůh Dage denně nosil vodu." },
        { nazev: "Krása objevená teprve v roce 1975", text: "Údolí zůstalo vnějšímu světu prakticky neznámé, dokud ho roku 1975 nezmapoval lesnický vědec Wu Zhonglun, který ho prohlásil za krásnější než cokoli, co viděl v Evropě či Americe." }
      ]
    }
  },
  {
    id: "yehliu-geopark",
    patch: {
      lead: "Skalní hlava královny, na jejíž vytvoření si příroda vzala přes 4000 let - a která se dnes ztenčuje o půl centimetru ročně kvůli dotekům návštěvníků.",
      atmosfera: 3.7,
      popisy: {
        zahada: "Na severním pobřeží Tchaj-wanu vybíhá do oceánu asi 1700metrový mys plný bizarních skalních útvarů, vytvarovaných tektonickými silami, které vytlačily pohoří Ta-tun vzhůru.",
        historie: "Formace je součástí miocénního souvrství Ta-liao. Nejikoničtějším prvkem je skalní útvar Hlava královny, neoficiální symbol regionu Wan-li, jehož vytvoření trvalo přes 4000 let a jehož 'krk' měří 125 centimetrů na délku.",
        legenda: "Kvůli erozi způsobené i dotekem návštěvníků se Hlava královny ztenčuje rychlostí 0,2 až 0,5 centimetru ročně. Úřady proto vyhlásily nástupnický útvar zvaný Hlava princezny, aby odklonily pozornost návštěvníků od Hlavy královny a zpomalily její další chátrání.",
        paranormalni: "Geopark nabízí i další pozoruhodné hoodoo útvary s obraznými jmény jako Vílina bota, Úl, Zázvorové skály a Mořské svíce - galerie přírodních soch podél celého mysu.",
        skepticke: "Rychlost eroze Hlavy královny (0,2 až 0,5 cm ročně) je přesně měřený, dobře zdokumentovaný jev způsobený kombinací přirozeného zvětrávání a lidského dotyku, ne přehnaná obava - správa oblasti proto vědomě přesměrovává pozornost na náhradní útvar, aby prodloužila životnost originálu."
      },
      praktickeInfo: "Geopark je veřejně přístupný s placeným vstupem, doporučuje se přijet brzy ráno kvůli velké návštěvnosti u Hlavy královny.",
      zdroje: [
        { nazev: "Wikipedia: Yehliu Geopark", url: "https://en.wikipedia.org/wiki/Yehliu_Geopark", licence: "CC BY-SA" },
        { nazev: "Wikidata: Yehliu Geopark", url: "https://www.wikidata.org/wiki/Q101252426", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Yehliu%20Geopark%20Taiwan", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Čtyři tisíciletí na jednu skálu", text: "Vytvoření ikonického útvaru Hlava královny trvalo přírodě přes 4000 let - a dnes se ztenčuje o půl centimetru ročně kvůli erozi a dotekům návštěvníků." },
        { nazev: "Princezna, která odvádí pozornost", text: "Úřady vyhlásily nový skalní útvar Hlava princezny, aby odklonily davy návštěvníků od chátrající Hlavy královny a prodloužily její životnost." }
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
