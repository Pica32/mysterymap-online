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
    id: "chinguetti",
    patch: {
      lead: "Poušť, kde stálo sedmé nejposvátnější město islámu - a kde se v pěti starobylých knihovnách dodnes prohýbají police pod středověkými rukopisy o matematice a astronomii.",
      atmosfera: 4.0,
      popisy: {
        zahada: "Uprostřed saharské pouště leží město, jehož jméno v zaniklém jazyce Azajr znamená 'pramen koní' - v místech, kde dnes vládne písek, se kdysi rozkládala zelená savana, jak dokládají skalní malby žiraf a dobytka poblíž Agrour Amogjaru.",
        historie: "Chinguetti bylo založeno roku 777 n. l. Do 11. století se stalo obchodním centrem berberských kmenů Sanhadža, později propojených s Almorávidy. Ve 13. století bylo znovu založeno jako opevněné centrum transsaharských obchodních tras spojujících Středomoří se subsaharskou Afrikou.",
        legenda: "Město sloužilo jako hlavní shromaždiště poutníků z Maghribu na cestě do Mekky a získalo status svatého města pro ty, kdo nemohli dokončit cestu až na Arabský poloostrov. V celém arabském světě se region proslavil jako 'Bilád Šinkít' (země Chinguetti) a město je někdy označováno za sedmé nejposvátnější v islámu.",
        paranormalni: "Staré čtvrti ukrývají pět významných knihoven rukopisů s vědeckými i koránskými texty ze středověku. Ulice učenců (Rue des Savants) sloužila historicky jako místo, kde se učenci scházeli k diskusím o islámském právu - vzdělávací instituce zde vyučovaly rétoriku, právo, astronomii, matematiku i medicínu vedle náboženské výuky.",
        skepticke: "Označení 'sedmé nejposvátnější město islámu' je tradiční poctou spíše než formálním teologickým titulem - nesporný je ale reálný vědecký a náboženský význam města, doložený stovkami dochovaných rukopisů a Páteční mešitou ze 13.-14. století se čtvercovým minaretem zdobeným pěti pštrosími vejci, kterou UNESCO obnovilo v 70. letech 20. století a kterou Mauritánci považují za národní symbol."
      },
      praktickeInfo: "Město je přístupné po saharských trasách ze Šingettí nebo Atáru, doporučuje se navštívit soukromé rukopisové knihovny s místním průvodcem.",
      zdroje: [
        { nazev: "Wikipedia: Chinguetti", url: "https://en.wikipedia.org/wiki/Chinguetti", licence: "CC BY-SA" },
        { nazev: "Wikidata: Chinguetti", url: "https://www.wikidata.org/wiki/Q312357", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Chinguetti%20Mauritania", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Pět knihoven uprostřed pouště", text: "Staré čtvrti Chinguetti ukrývají pět rukopisových knihoven se středověkými vědeckými a koránskými texty, přežívajícími navzdory saharskému vedru a písku." },
        { nazev: "Sedmé nejposvátnější město islámu", text: "Chinguetti je tradičně označováno za sedmé nejposvátnější město islámu díky roli hlavního shromaždiště poutníků z Maghribu na cestě do Mekky." }
      ]
    }
  },
  {
    id: "ball-s-pyramid",
    patch: {
      lead: "Nejvyšší sopečná skála světa, pod jejímž jediným keřem přežilo posledních 24 kusů hmyzu považovaného sedmdesát let za vyhynulý.",
      atmosfera: 4.0,
      popisy: {
        zahada: "Východně od Lord Howe Islandu se z oceánu zvedá 572 metrů vysoká skalní jehla, erodovaný zbytek sopky stará 6,4 milionu let - nejvyšší sopečný skalní útvar na světě, který dlouho skrýval jedno z nejpozoruhodnějších biologických překvapení posledních desetiletí.",
        historie: "Pojmenoval ji poručík Královského námořnictva Henry Lidgbird Ball, který ji objevil roku 1788. Poprvé ji zmapoval Henry Mangles Denham roku 1853, prvním zdokumentovaným návštěvníkem na pevnině byl geolog Henry Wilkinson roku 1882. Vrchol poprvé zdolal tým horolezců ze Sydney 14. února 1965.",
        legenda: "Strašidelný klacík (Dryococelus australis) z Lord Howe Islandu vymizel z hlavního ostrova do roku 1920 a byl považován za vyhynulý. Roku 2001 ochránci přírody objevili na Ball's Pyramid drobnou přeživší populaci - pouhých 24 jedinců žijících pod jediným keřem.",
        paranormalni: "Dva chovné páry byly přemístěny na australskou pevninu pro chovný program a plánovanou reintrodukci - objev proměnil hmyz, o kterém se sedmdesát let vědělo jen z fosilních záznamů, ve živoucí symbol naděje pro ohrožené druhy.",
        skepticke: "Horolezectví na skále bylo roku 1982 zakázáno novelou zákona o Lord Howe Islandu kvůli ochraně křehkého ekosystému, později byl přístup za přísných podmínek částečně uvolněn - opatrnost při ochraně místa se ukázala jako oprávněná právě díky objevu přeživší populace vzácného hmyzu."
      },
      praktickeInfo: "Skála je přístupná pouze lodí z Lord Howe Islandu, výstup na vrchol vyžaduje speciální povolení kvůli ochraně křehkého ekosystému.",
      zdroje: [
        { nazev: "Wikipedia: Ball's Pyramid", url: "https://en.wikipedia.org/wiki/Ball%27s_Pyramid", licence: "CC BY-SA" },
        { nazev: "Wikidata: Ball's Pyramid", url: "https://www.wikidata.org/wiki/Q152872", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Ball%27s%20Pyramid%20Australia", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "24 přeživších pod jedním keřem", text: "Hmyz považovaný sedmdesát let za vyhynulý přežil v koloni pouhých 24 jedinců pod jediným keřem na téměř kolmé skalní stěně." },
        { nazev: "Nejvyšší sopečná jehla světa", text: "Ball's Pyramid, erodovaný zbytek 6,4 milionu let staré sopky, je s výškou 572 metrů nejvyšším sopečným skalním útvarem na světě." }
      ]
    }
  },
  {
    id: "ha-amonga-a-maui",
    patch: {
      lead: "'Tichomořský Stonehenge' postavený z kamenů, které podle legendy přinesl polobůh Maui na obřím kánoi - protože byly příliš velké pro obyčejné lidi.",
      atmosfera: 3.9,
      popisy: {
        zahada: "Na ostrově Tongatapu stojí trilit ze tří vápencových desek, z nichž každá svislá váží 30 až 40 tun - stavba, kterou místní tradice přisuzuje polobohu Mauimu, protože kameny prý byly příliš velké na to, aby je zvládli obyčejní smrtelníci.",
        historie: "Monument nechal kolem roku 1200 n. l. postavit král Tu'itātui, jedenáctý Tu'i Tonga. Stavba měří 5,2 metru na výšku, 1,4 metru na šířku a 5,8 metru na délku a pravděpodobně sloužila jako brána do Heketā, královského sídelního komplexu, přičemž svislé kameny symbolizovaly králova dva syny.",
        legenda: "Podle legendy Maui přinesl kameny z ostrova 'Uvea a dopravil je pomocí obří kánoe - protože jejich velikost přesahovala možnosti běžných lidí, jen mýtický hrdina mohl takový úkol zvládnout.",
        paranormalni: "Roku 1967 král Taufa'ahau Tupou IV. navrhl, že stavba označuje východy slunce při slunovratech a rovnodennostech. Historik Tevita Fale tuto teorii podporuje a poukazuje na značku ve tvaru V na vrcholu překladu, která se zarovnává s východem slunce při slunovratech a rovnodennostech.",
        skepticke: "Astronom C. F. Velt teorii o astronomickém zarovnání zpochybňuje s argumentem, že značka ve tvaru V je s deseti centimetry příliš malá na spolehlivé směrové určení - spor mezi zastánci a odpůrci astronomické interpretace zůstává nevyřešený, přestože stavba je od roku 1972 chráněna jako národní park."
      },
      praktickeInfo: "Monument stojí ve vesnici Niutōua v oblasti Heketā na ostrově Tongatapu a je volně přístupný.",
      zdroje: [
        { nazev: "Wikipedia: Ha'amonga 'a Maui", url: "https://en.wikipedia.org/wiki/Ha%27amonga_%27a_Maui", licence: "CC BY-SA" },
        { nazev: "Wikidata: Ha'amonga 'a Maui", url: "https://www.wikidata.org/wiki/Q1433433", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Ha%27amonga%20%27a%20Maui%20Tonga", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Kameny příliš velké pro lidi", text: "Podle legendy dokázal masivní kamenné desky trilitu dopravit na místo jedině polobůh Maui na své obří kánoi - byly prý příliš velké pro obyčejné smrtelníky." },
        { nazev: "Spor o tichomořský Stonehenge", text: "Astronomové se dodnes přou, zda značka ve tvaru V na vrcholu trilitu skutečně označuje slunovraty a rovnodennosti, nebo je na přesné určení směru příliš malá." }
      ]
    }
  },
  {
    id: "vanuatu-chief-roi-mata-s-domain",
    patch: {
      lead: "Hromadný hrob náčelníka otráveného vlastním bratrem - místo, kde místní dodnes odmítají vyslovit jeho jméno ze strachu z jeho duše.",
      gps: { lat: -17.6281, lon: 168.1777 },
      atmosfera: 4.0,
      popisy: {
        zahada: "Na třech ostrovech středního Vanuatu leží místa spojená s legendárním náčelníkem, jehož jméno místní dodnes odmítají vyslovovat ze strachu, že by mohlo přivolat neštěstí způsobené jeho duchem.",
        historie: "Roi Mata byl náčelnický titul náležející dynastii, která vládla od 11. do 17. století. Nejproslulejší nositel titulu žil kolem roku 1600 a je obvykle označován prostě jako 'Roi Mata'.",
        legenda: "Podle místního folklóru bylo Roi Matovým hlavním úspěchem sjednocení ostrovních kmenů do jednotné armády a jeho éra je líčena jako výjimečně mírová. Legenda ale končí tragicky - Roi Mata byl smrtelně otráven vlastním bratrem. Ze strachu z duchovních důsledků se místní vyhýbali pohřbení jeho těla v jeho domovině i pozdějšímu vyslovování jeho jména.",
        paranormalni: "Francouzský archeolog José Garanger objevil roku 1967 na ostrově Eretoka Roi Matův propracovaný hrob obsahující ostatky více než 25 členů jeho družiny - nález odhalující rozsah jeho vlivu a rituální význam obklopující jeho smrt.",
        skepticke: "Hromadný pohřeb více než 25 lidí spolu s náčelníkem je archeologicky doložený fakt objevený systematickým výzkumem, ne pouhá legenda - roku 2008 získala tři místa spojená s Roi Matou (na ostrovech Efate, Lelepa a Eretoka) status UNESCO, zahrnující jeho sídlo, místo smrti i místo posledního odpočinku."
      },
      praktickeInfo: "Návštěva ostrova Eretoka a dalších míst spojených s Roi Matou vyžaduje doprovod místního průvodce a respektování duchovního významu lokality pro místní komunity.",
      zdroje: [
        { nazev: "Wikipedia: Chief Roi Mata's Domain", url: "https://en.wikipedia.org/wiki/Chief_Roi_Mata%27s_Domain", licence: "CC BY-SA" },
        { nazev: "Wikidata: Chief Roi Mata's Domain", url: "https://www.wikidata.org/wiki/Q558599", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Chief%20Roi%20Mata%27s%20Domain%20Vanuatu", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Jméno, které se nesmí vyslovit", text: "Ze strachu z duchovních následků se místní obyvatelé po smrti náčelníka Roi Maty dlouho vyhýbali vyslovování jeho jména." },
        { nazev: "Hrob s více než 25 průvodci na věčnost", text: "Archeolog José Garanger objevil roku 1967 hromadný hrob obsahující ostatky přes 25 členů náčelníkovy družiny, pohřbených společně s ním." }
      ]
    }
  },
  {
    id: "tiya-stelae",
    patch: {
      lead: "Čtyřicet šest kamenných stél nad prehistorickým pohřebištěm, jejichž vytesané meče a lidské postavy dodnes nikdo nedokázal spolehlivě přiřadit ke konkrétní kultuře.",
      atmosfera: 3.6,
      popisy: {
        zahada: "V etiopské vysočině stojí 46 kamenných stél označujících rozsáhlý prehistorický pohřební komplex - přestože stavba megalitů má v Etiopii velmi starou tradici sahající před náš letopočet, totožnost stavitelů právě tohoto pole zůstává nejasná.",
        historie: "Naleziště se datuje přibližně do 10.-15. století n. l. Stély pravděpodobně označují rozsáhlý prehistorický pohřební komplex a sloužily jako obřadní markery, přičemž 32 z nich nese vyryté symboly.",
        legenda: "Stély se dělí na tři typy: antropomorfní (lidské postavy), falické a neutrální tvary. Motivy zahrnují meče, rostlinné symboly, stojící lidskou postavu s rukama v bok a symboly ve tvaru T.",
        paranormalni: "Povrchové nálezy zahrnují nástroje ze střední doby kamenné, archeologové se dlouhodobě snaží rekonstruovat etnickou historii pomocí ústních tradic, které jsou ale v mnoha případech nedostupné nebo neinformativní.",
        skepticke: "Skutečnou identitu stavitelů megalitů nelze určit pouze na základě samotných kamenů - to je poctivé přiznání limitů archeologického bádání, ne důkaz nadpřirozeného původu. UNESCO přesto naleziště zapsalo na seznam světového dědictví už v roce 1980 pro jeho jedinečnou hodnotu v rámci etiopské megalitické tradice."
      },
      praktickeInfo: "Naleziště je veřejně přístupné nedaleko vesnice Tija jižně od Addis Abeby.",
      zdroje: [
        { nazev: "Wikipedia: Tiya (archaeological site)", url: "https://en.wikipedia.org/wiki/Tiya_(archaeological_site)", licence: "CC BY-SA" },
        { nazev: "Wikidata: Tiya", url: "https://www.wikidata.org/wiki/Q6130080", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Tiya%20Ethiopia", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Stavitelé bez jména", text: "Navzdory desetiletím výzkumu se archeologům nepodařilo spolehlivě určit, kteří konkrétní stavitelé stojí za 46 kamennými stélami z Tiji." },
        { nazev: "Meče vytesané do kamene", text: "Třicet dva stél nese vyryté symboly včetně mečů a rostlinných motivů, jejichž přesný obřadní význam zůstává předmětem archeologických spekulací." }
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
