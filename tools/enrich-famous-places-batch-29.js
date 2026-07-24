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
    id: "mount-wutai",
    patch: {
      lead: "Posvátná hora, kde podle věřících bódhisattva moudrosti Maňdžuší dodnes obchází v obyčejné podobě žebráka nebo se zjevuje jako pětibarevný oblak.",
      atmosfera: 3.9,
      popisy: {
        zahada: "Nejvyšší hora severní Číny, dosahující 3061 metrů, je jednou ze čtyř posvátných hor čínského buddhismu, uctívaná jako duchovní sídlo bódhisattvy moudrosti Maňdžušího.",
        historie: "Wutai byla první ze čtyř velkých buddhistických hor Číny, která byla formálně identifikována jako posvátné místo. Do 7. století sem putovali poutníci z Indie i Střední Asie. Přestože ji čchanský mistr z 9. století kritizoval za přehnanou proslulost, hora zůstala pravděpodobně nejslavnějším buddhistickým poutním místem Číny i po skončení dynastie Tchang.",
        legenda: "Spojení Maňdžušího s horou Wutai bylo podle klasických textů známé už ve starověké Indii. Hora získala alternativní jméno 'Chladná čistá hora' (Čching-liang šan) podle popisu 'jasné studené hory' na severovýchodě v sútře Avatamsaka, kde má Maňdžuší sídlit. Věřící tvrdí, že se bódhisattva často zjevuje v obyčejných podobách nebo jako neobvyklé pětibarevné oblaky.",
        paranormalni: "Hora hostí přes 53 posvátných klášterů, včetně staveb pocházejících z dynastie Tchang - zejména chrámů Nanč'an a Fokuang, objevených architektonickými historiky v letech 1937-1938.",
        skepticke: "Zjevení bódhisattvy jako pětibarevných oblaků jsou součástí náboženské tradice založené na staletích poutnických svědectví, ne ověřitelným fyzikálním jevem - historická existence a stáří klášterů samotných, včetně staveb z dynastie Tchang objevených ve 30. letech 20. století, jsou naopak archeologicky nesporné. UNESCO horu zapsalo na seznam světového dědictví roku 2009."
      },
      praktickeInfo: "Areál zahrnuje přes 53 klášterů rozptýlených po celém pohoří, doporučuje se počítat s několikadenní návštěvou pro prohlídku nejvýznamnějších chrámů.",
      zdroje: [
        { nazev: "Wikipedia: Mount Wutai", url: "https://en.wikipedia.org/wiki/Mount_Wutai", licence: "CC BY-SA" },
        { nazev: "Wikidata: Mount Wutai", url: "https://www.wikidata.org/wiki/Q120314", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Mount%20Wutai%20China", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Bódhisattva v podobě žebráka", text: "Podle tradice se Maňdžuší na hoře Wutai často zjevuje v obyčejných lidských podobách, aby vyzkoušel soucit a víru poutníků, kteří ho nepoznají." },
        { nazev: "Klášter objevený po staletích", text: "Chrámy Nanč'an a Fokuang, pocházející z dynastie Tchang, objevili architektonickí historikové teprve v letech 1937-1938, po staletích, kdy zůstávaly téměř zapomenuté." }
      ]
    }
  },
  {
    id: "mount-emei",
    patch: {
      lead: "Hora, kde stál první buddhistický chrám v celé Číně - a kde mniši podle historických pramenů cvičili bojová umění, jež mohla inspirovat i slavné šaolinské tradice.",
      atmosfera: 3.9,
      popisy: {
        zahada: "V S'čchuanu se zvedá hora, na níž v 1. století n. l. vznikl první buddhistický chrám v celé Číně - místo, které se postupem staletí stalo jednou ze čtyř posvátných buddhistických hor země.",
        historie: "Za dynastií Ming a Čching se na hoře nashromáždilo sedmdesát šest klášterů. Historické prameny ze 16.-17. století zmiňují cvičení bojových umění v těchto klášterech, přičemž některé je považují za raný zdroj šaolinských tradic.",
        legenda: "Hora Emei se řadí mezi 'Čtyři posvátné buddhistické hory Číny' a slouží jako bódhimanda (místo osvícení) bódhisattvy Samantabhadry (Pchu-sien). Čínští buddhisté sem pravidelně putují a při obřadech pálí santalové dřevo, aby 'poslali své modlitby k nebi'.",
        paranormalni: "Na Zlatém vrcholu (Ťin-ting, 3077 m) korunuje vrchol masivní zlatá socha Samantabhadry - lanovky usnadňují výstup ke dvěma chrámům umístěným zhruba hodinu pěší chůze pod samotným 3099metrovým vrcholem, odkud lze za vhodných podmínek pozorovat vzácný jev zvaný Buddhovo světlo.",
        skepticke: "Spojení kláštera s počátky šaolinských bojových tradic je historická hypotéza podložená dobovými texty ze 16.-17. století, ne jednoznačně prokázaný fakt - existence prvního buddhistického chrámu v Číně na této hoře v 1. století n. l. je naproti tomu široce přijímaným historickým poznatkem. UNESCO zapsalo horu na seznam světového dědictví roku 1996 společně s obřím Buddhou v Le-šanu."
      },
      praktickeInfo: "Lanovka usnadňuje výstup na Zlatý vrchol, doporučuje se vzít teplé oblečení i v létě kvůli nadmořské výšce a proměnlivému počasí.",
      zdroje: [
        { nazev: "Wikipedia: Mount Emei", url: "https://en.wikipedia.org/wiki/Mount_Emei", licence: "CC BY-SA" },
        { nazev: "Wikidata: Mount Emei", url: "https://www.wikidata.org/wiki/Q134927", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Mount%20Emei%20China", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "První chrám celé Číny", text: "Na hoře Emei vznikl v 1. století n. l. vůbec první buddhistický chrám v celé Číně, který položil základ staletí trvající poutní tradice." },
        { nazev: "Mniši, kteří možná inspirovali Šaolin", text: "Historické prameny ze 16.-17. století zaznamenávají cvičení bojových umění v klášterech na hoře Emei, které některé badatele vedou ke spekulacím o vlivu na pozdější šaolinské tradice." }
      ]
    }
  },
  {
    id: "gyeongju-tumuli",
    patch: {
      lead: "Pohřebiště korejských králů, kde archeologové v jedné z mohyl objevili malbu okřídleného koně na březové kůře sedlové chlopně.",
      atmosfera: 4.0,
      popisy: {
        zahada: "V jihokorejském Kjongdžu leží rozsáhlý pás královských mohyl dochovaný z království Silla, existujícího od roku 57 př. n. l. do roku 935 n. l. - unikátní pohřebiště, kde tvary hrobek sahají od kupolí přes tykve až po půlměsíce.",
        historie: "Pás mohyl Tumuli Park zahrnuje tři skupiny královských hrobů s odlišnými charakteristikami. Vykopávky odhalily dřevěné rakve pokryté štěrkem a pohřební výbavu zahrnující zlato, sklo a keramiku.",
        legenda: "Nejproslulejším nálezem je Hrobka nebeského koně (Čchonmačchong), obsahující nástěnnou malbu na březové kůře sedlové chlopně zobrazující okřídleného koně - jeden z nejvýznamnějších uměleckých objevů celé korejské archeologie.",
        paranormalni: "Chráněná oblast zabírá 2880 hektarů s 350hektarovou ochrannou zónou, rozdělenou do pěti podoblastí zahrnujících chrámy, pevnosti, paláce i posvátnou horu Namsan, fungující jako 'muzeum pod širým nebem' plné buddhistických artefaktů.",
        skepticke: "Malba okřídleného koně na sedlové chlopni je hmotný archeologický nález, ne pouhá legenda - byla objevena systematickými vykopávkami a dnes patří mezi národní poklady, dokládající vyspělost umění království Silla. UNESCO zapsalo historické oblasti Kjongdžu na seznam světového dědictví roku 2000."
      },
      praktickeInfo: "Tumuli Park je veřejně přístupný s placeným vstupem, hrobka Čchonmačchong je jednou z mála otevřených návštěvníkům zevnitř.",
      zdroje: [
        { nazev: "Wikipedia: Gyeongju Historic Areas", url: "https://en.wikipedia.org/wiki/Gyeongju_Historic_Areas", licence: "CC BY-SA" },
        { nazev: "Wikidata: Gyeongju Historic Areas", url: "https://www.wikidata.org/wiki/Q495241", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Gyeongju%20Tumuli%20Park%20South%20Korea", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Okřídlený kůň na kůře", text: "V Hrobce nebeského koně objevili archeologové nástěnnou malbu okřídleného koně na březové kůře - jeden z nejvýznamnějších uměleckých objevů korejské archeologie." },
        { nazev: "Mohyly ve tvaru tykví a půlměsíců", text: "Královské mohyly Kjongdžu mají neobvykle rozmanité tvary - od klasických kupolí až po tvary tykví nebo půlměsíců, odrážející staletí pohřebních tradic království Silla." }
      ]
    }
  },
  {
    id: "himeji-castle",
    patch: {
      lead: "Hrad s duchem služebné, která dodnes v noci počítá talíře ve studni - a s yókai obývajícím věž, jenž prý dokáže číst myšlenky.",
      atmosfera: 4.2,
      popisy: {
        zahada: "Nad japonským Himedži se tyčí nejzachovalejší samurajský hrad země - komplex 83 staveb, který přežil bombardování za druhé světové války i velké zemětřesení Hanšin roku 1995 prakticky nedotčený.",
        historie: "Hrad začal roku 1333, kdy Akamacu Norimura postavil pevnost na kopci Himejama. Stavba se postupně vyvíjela: přestavěna na hrad Himejama roku 1346, přebudována klanem Kuroda kolem roku 1561 a dramaticky rozšířena Tojotomi Hidejošim roku 1581 o třípatrovou věž. Po bitvě u Sekigahary daroval Tokugawa Iejasu hrad Ikedovi Terumasovi roku 1600, který ho kompletně přestavěl v letech 1601-1609 do dnešní podoby.",
        legenda: "Hrad hostí proslulou 'Okikuinu studnu', spojenou s příběhem duchů Bančo sarajašiki - podle tradice byla služebná falešně obviněná ze ztráty vzácných talířů zabita a hozena do studny, kde její duch každou noc žalostně počítal talíře.",
        paranormalni: "Podle legendy obývá věž yókai jménem Osakabehime, který se vyhýbá lidem, jež nenávidí, a zjevuje se jako stará žena ve dvanáctivrstvém obřadním kimonu se schopností číst myšlenky. Jiná legenda vypráví o staré ženě, která darovala svůj ruční mlýnský kámen Hidejošimu, když při stavbě došly kameny, a inspirovala tak ostatní k dalším darům.",
        skepticke: "Legendy o Okikuině studni a duchu Osakabehime jsou tradiční japonské strašidelné příběhy (kaidan), ne historicky doložené události - fyzická existence a stavební historie hradu jsou naproti tomu bohatě zdokumentovány, včetně přesných dat rekonstrukcí pod jednotlivými vládci. UNESCO zapsalo hrad na seznam světového dědictví roku 1993."
      },
      praktickeInfo: "Hrad je veřejně přístupný s placeným vstupem, hlavní věž nabízí šest podlaží s expozicemi o obranné architektuře.",
      zdroje: [
        { nazev: "Wikipedia: Himeji Castle", url: "https://en.wikipedia.org/wiki/Himeji_Castle", licence: "CC BY-SA" },
        { nazev: "Wikidata: Himeji Castle", url: "https://www.wikidata.org/wiki/Q188754", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Himeji%20Castle%20Japan", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Duch počítající talíře", text: "Podle legendy o Okikuině studni byla nespravedlivě obviněná služebná zabita a hozena do studny, kde její duch dodnes každou noc žalostně počítá talíře." },
        { nazev: "Tesař, který skočil z věže", text: "Podle pověsti hlavní tesař Sakurai Genbei skočil z vrcholu věže s dlátem v ústech, nespokojen s výsledkem vlastní práce na stavbě hradu." }
      ]
    }
  },
  {
    id: "punakha-dzong",
    patch: {
      lead: "Pevnost postavená bez jediného písemného plánu - architekt ji podle legendy postavil přesně podle snu seslaného mocí zakladatele Bhútánu.",
      atmosfera: 4.1,
      popisy: {
        zahada: "Na soutoku dvou řek v nadmořské výšce 1200 metrů stojí šestipatrová pevnost, která sloužila jako správní centrum Bhútánu až do roku 1955 a dodnes je místem konání všech královských korunovací od roku 1907.",
        historie: "Punakha Dzong nechal postavit v letech 1637-1638 Ngawang Namgjal, první Zhabdrung Rinpočhe a sjednotitel Bhútánu. Architektem byl Zowe Palep.",
        legenda: "Podle tradice měl architekt Palep vizionářský sen poté, co usnul pod malou svatyní Buddhovy sošky. Podnícen psychickými schopnostmi Zhabdrunga měl jasnou vizi paláce pro Guru Rinpočheho, kterou pak postavil bez jakýchkoli písemných plánů.",
        paranormalni: "Stavba ukrývá posvátné ostatky linie Drukpa Kagjü, včetně tělesných pozůstatků samotného Ngawang Namgjala a tertöna Pemy Lingpy, uložených ve třetím nádvoří ve svatyni Mačhey Lakhang, kam chodí král i nejvyšší duchovní hodnostář Bhútánu hledat požehnání.",
        skepticke: "Legenda o vizionářském snu architekta je tradiční náboženský příběh vysvětlující nedostatek dochovaných písemných plánů, ne ověřitelný historický fakt - fyzická existence stavby, její přesné rozměry (590 stop na délku, 236 stop na šířku) a použité materiály jsou ale hmatatelně doloženy a dodnes obdivovány jako vrchol bhútánské architektury."
      },
      praktickeInfo: "Pevnost je veřejně přístupná, doporučuje se navštívit i za období monzunů, kdy jsou řeky kolem dzongu nejplnější a nejmalebnější.",
      zdroje: [
        { nazev: "Wikipedia: Punakha Dzong", url: "https://en.wikipedia.org/wiki/Punakha_Dzong", licence: "CC BY-SA" },
        { nazev: "Wikidata: Punakha Dzong", url: "https://www.wikidata.org/wiki/Q4383728", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Punakha%20Dzong%20Bhutan", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Palác postavený podle snu", text: "Architekt Palep měl podle legendy vizionářský sen o podobě stavby a postavil celou pevnost bez jediného písemného plánu." },
        { nazev: "Místo všech korunovací", text: "Punakha Dzong zůstává dodnes místem konání všech královských korunovací Bhútánu od roku 1907, přestože přestal být hlavním správním centrem už v roce 1955." }
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
