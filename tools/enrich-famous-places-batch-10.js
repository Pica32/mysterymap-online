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
    id: "tsodilo-hills",
    patch: {
      lead: "Poušť Kalahari skrývá 'Louvre pouště' - přes 4000 skalních maleb a legendu o rodině zkamenělé do čtyř kopců.",
      atmosfera: 4.3,
      popisy: {
        zahada: "V severozápadní Botswaně se zvedají čtyři kopce, které lid San po generace uctívá jako posvátné místo prvního stvoření - a jejichž skály pokrývá na 4000 malovaných obrazů dokládajících lidské osídlení staré až 100 000 let.",
        historie: "Tsodilo Hills obsahují kolem 400 lokalit skalního umění s více než 4000 jednotlivými malbami, což jim vyneslo přezdívku 'Louvre pouště'. V roce 2001 se staly památkou UNESCO pro svůj duchovní význam i jedinečný záznam lidského osídlení v průběhu tisíciletí.",
        legenda: "Podle legendy lidu San představují čtyři kopce manžela (největší), manželku (menší) a jejich dvě děti. Manželka měla manžela opustit a vzít si obě děti s sebou, ale starší dítě se nakonec vrátilo zpět k otci, zatímco mladší zůstalo s matkou. San navíc věří, že právě zde došlo k prvnímu stvoření a že duch každé rostliny a zvířete vznikl v Tsodilu.",
        paranormalni: "Komunita Ju/'hoansi San dodnes na místě provozuje tradiční obřady, sbírá vodu z posvátných tůní a předává příběhy o duších, které mají obývat samotné skály.",
        skepticke: "Na rozdíl od typického kartáčovaného stylu, kterým jsou skalní malby lidu San po jižní Africe proslulé, jsou malby v Tsodilu malovány prsty - detail, který archeology i badatele skalního umění zajímá stejně jako samotný náboženský význam místa."
      },
      praktickeInfo: "Návštěva vyžaduje delší cestu odlehlou oblastí severozápadní Botswany, doporučuje se místní průvodce a respekt k probíhajícím duchovním praktikám komunity San.",
      zdroje: [
        { nazev: "Wikipedia: Tsodilo", url: "https://en.wikipedia.org/wiki/Tsodilo", licence: "CC BY-SA" },
        { nazev: "Wikidata: Tsodilo Hills", url: "https://www.wikidata.org/wiki/Q916776", licence: "CC0" },
        { nazev: "British Museum - African Rock Art Botswana", url: "https://africanrockart.britishmuseum.org/country/botswana/tsodilo/", licence: "vzdělávací zdroj" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Tsodilo%20Hills%20Botswana", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Zkamenělá rodina", text: "Legenda lidu San vysvětluje čtyři kopce jako manžela, manželku a jejich dvě děti - příběh o odchodu a návratu zachycený v samotném tvaru krajiny." },
        { nazev: "Malby prsty, ne štětcem", text: "Na rozdíl od většiny jihoafrických skalních maleb malovaných štětcem jsou obrazy v Tsodilu vytvořeny prsty - detail, který lokalitu odlišuje od zbytku regionu." }
      ]
    }
  },
  {
    id: "bandiagara-escarpment",
    patch: {
      lead: "Domy vytesané do skály 500 metrů nad zemí, o kterých si lid Dogonů myslel, že je stavěli lidé schopní létat.",
      atmosfera: 4.4,
      popisy: {
        zahada: "Podél 150 kilometrů dlouhého pískovcového srázu v Mali se tyčí obydlí zavěšená přímo ve skalní stěně vysoko nad údolím - a obyvatelé, kteří po nich zdědili krajinu, byli přesvědčeni, že jejich stavitelé museli umět létat.",
        historie: "Útes Bandiagara se zvedá asi 500 metrů nad okolní pláně. Jeho úpatí i samotnou skalní stěnu osídlil lid Tellem, drobní 'malí rudí lidé', kteří zde žili od 11. do 16. století, pěstovali plodiny a své mrtvé pohřbívali vysoko ve skalních jeskyních - v některých bylo nalezeno až 3000 ostatků.",
        legenda: "Zdánlivě nedosažitelná poloha obydlí vedla lid Dogonů, kteří do oblasti přišli kolem 15. století, k přesvědčení, že Tellemové museli umět létat. Jiná teorie tvrdí, že Tellemové na skálu vystupovali po liánách v době, kdy bylo údolí mnohem zelenější.",
        paranormalni: "Dogonové zpočátku sdíleli útes s Tellemy, postupně ale původní obyvatele vytlačili - Tellemové buď splynuli s dogonskou kulturou, nebo se přesunuli do sousední Burkiny Faso, a jejich civilizace jako samostatná entita zmizela.",
        skepticke: "Skutečné vysvětlení nedosažitelných obydlí spočívá pravděpodobně v jednodušší, ale klimaticky odlišné krajině minulosti - liánách nebo dřevěných žebřících využívaných v zelenějším období, ne v doslovné schopnosti létat. Od roku 1989 je útes na seznamu UNESCO."
      },
      praktickeInfo: "Návštěva vyžaduje trekking s místním průvodcem po dogonských vesnicích podél útesu, doporučuje se ověřit aktuální bezpečnostní situaci v regionu před cestou.",
      zdroje: [
        { nazev: "Wikipedia: Bandiagara Escarpment", url: "https://en.wikipedia.org/wiki/Bandiagara_Escarpment", licence: "CC BY-SA" },
        { nazev: "Wikidata: Bandiagara Escarpment", url: "https://www.wikidata.org/wiki/Q650546", licence: "CC0" },
        { nazev: "Amusing Planet - Dogon Villages of Bandiagara", url: "https://www.amusingplanet.com/2018/07/the-dogon-villages-of-bandiagara.html", licence: "vzdělávací zdroj" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Bandiagara%20Escarpment%20Mali", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Lid, o kterém se věřilo, že létá", text: "Dogonové byli přesvědčeni, že Tellemové, kteří obývali skálu před nimi, museli umět létat - jinak si nedokázali vysvětlit jejich zdánlivě nedosažitelná obydlí." },
        { nazev: "3000 těl v jedné jeskyni", text: "Archeologové našli v některých skalních jeskyních útesu ostatky až 3000 lidí pohřbených lidem Tellem během staletí jejich osídlení." }
      ]
    }
  },
  {
    id: "merv-ruins",
    patch: {
      lead: "'Perla Východu' a jedno z největších měst světa své doby, kde Mongolové roku 1221 vyvraždili téměř všechny obyvatele.",
      atmosfera: 4.2,
      popisy: {
        zahada: "Ve středoasijské poušti leží pozůstatky města, které bylo kdysi jedním z největších na světě a centrem obchodu, kultury i vědy po dobu více než dvou tisíc let - dokud ho v jediném roce nezničila mongolská armáda.",
        historie: "Merv, přezdívaný 'Perla Východu', ležel na strategické křižovatce Hedvábné stezky. Do 8. století n. l. z něj islámský Abbásovský chalífát udělal své východní hlavní město a jedno z největších urbanistických center světa.",
        legenda: "Roku 1221 otevřel Merv brány Tuluiovi, synovi Čingischána - podle dochovaných zpráv byla při této příležitosti povražděna většina obyvatel města. Merv je nejstarší a nejúplněji dochované z oázových měst podél Hedvábné stezky, se stopami sahajícími do hloubky 4000 let lidské historie.",
        paranormalni: "Přestože bylo město částečně obnoveno, nikdy nezískalo zpět svou dřívější prosperitu - na sklonku středověku navíc námořní obchod postupně nahradil suchozemské trasy Hedvábné stezky, což vedlo k jeho pomalému, definitivnímu úpadku.",
        skepticke: "Zkáza Merva je historicky detailně zdokumentovaná vojenská katastrofa, ne přírodní pohroma nebo kletba - od roku 1999 je 'Starověký Merv' na seznamu UNESCO jako mimořádně významné svědectví historie a kultury regionu."
      },
      praktickeInfo: "Naleziště je rozsáhlé a vyžaduje motorizovaný přesun mezi jednotlivými vzdálenými sektory, přístupné s doprovodem místního průvodce z blízkého města Mary.",
      zdroje: [
        { nazev: "Wikipedia: Merv", url: "https://en.wikipedia.org/wiki/Merv", licence: "CC BY-SA" },
        { nazev: "Wikidata: Merv", url: "https://www.wikidata.org/wiki/Q193325", licence: "CC0" },
        { nazev: "Archaeology Magazine - Merv Turkmenistan", url: "https://archaeology.org/issues/july-august-2019/off-the-grid/trenches-turkmenistan-merv/", licence: "vzdělávací zdroj" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Merv%20Turkmenistan", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Brány otevřené synovi Čingischána", text: "Když Merv roku 1221 otevřel brány Tuluiovi, synovi Čingischána, následovalo masové vyvraždění téměř všech obyvatel - jedna z nejtragičtějších epizod mongolských výbojů." },
        { nazev: "4000 let na jednom místě", text: "Stopy osídlení v Merv sahají do hloubky 4000 let lidské historie, což z něj dělá jedno z nejstarších a nejúplněji dochovaných oázových měst celé Hedvábné stezky." }
      ]
    }
  },
  {
    id: "minaret-of-jam",
    patch: {
      lead: "Druhý nejvyšší cihlový minaret na světě stojí osaměle v afghánských horách - u zaniklého hlavního města, které Mongolové srovnali se zemí.",
      atmosfera: 4.3,
      popisy: {
        zahada: "Hluboko v odlehlých afghánských horách stojí 65 metrů vysoký cihlový minaret zcela osamocený, bez jakýchkoli přilehlých budov - připomínka ztraceného hlavního města, které zmizelo tak důkladně, že jeho polohu badatelé objevili až nedávno.",
        historie: "Minaret nechal roku 1194 postavit velký ghúridský sultán Ghijás od-dín. V době svého vzniku byl nejvyšším minaretem světa a až do 20. století ho svou výškou překonal jen Qutub Minar v Dillí - dodnes zůstává druhým nejvyšším cihlovým minaretem na světě.",
        legenda: "Odlehlá poloha bez okolních staveb dlouho vedla badatele k domněnce, že šlo o osamocenou monumentální věž demonstrující politickou moc, možná na oslavu vítězství nad pohanským obyvatelstvem. Dnes je uznáváno, že Jam je místem ztraceného města Firúzkóh, ghúridského hlavního města zničeného Mongoly.",
        paranormalni: "Minaret zdobí střídající se pásy kúfského a naschí kaligrafického písma, geometrické vzory a verše z Koránu, konkrétně súra o Marii, matce Ježíšově - neobvyklá volba dekorace pro islámskou stavbu této doby.",
        skepticke: "Zánik okolního města má jasnou historickou příčinu - mongolské zničení Firúzkóhu, ne tajemné zmizení. Minaret jako jediná dochovaná stavba ghúridské říše přežil právě díky své odlehlé, těžko dostupné poloze v horách, což ho ochránilo před stejným osudem jako zbytek hlavního města."
      },
      praktickeInfo: "Lokalita leží v extrémně odlehlé a těžko přístupné hornaté oblasti provincie Ghór, návštěva vyžaduje značné logistické úsilí a ověření aktuální bezpečnostní situace.",
      zdroje: [
        { nazev: "Wikipedia: Minaret of Jam", url: "https://en.wikipedia.org/wiki/Minaret_of_Jam", licence: "CC BY-SA" },
        { nazev: "Wikidata: Minaret of Jam", url: "https://www.wikidata.org/wiki/Q192981", licence: "CC0" },
        { nazev: "UNESCO World Heritage - Minaret and Archaeological Remains of Jam", url: "https://whc.unesco.org/en/list/211/", licence: "oficiální zdroj / UNESCO dokumentace" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Minaret%20of%20Jam%20Afghanistan", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Poslední svědek zaniklého hlavního města", text: "Minaret je jedinou dochovanou stavbou po Firúzkóhu, ghúridském hlavním městě, které Mongolové zcela zničili - přežil jen díky své odlehlé horské poloze." },
        { nazev: "Verše o Marii na islámské věži", text: "Minaret zdobí súra Koránu věnovaná Marii, matce Ježíšově - neobvyklý výběr textu, který badatelé dodnes zkoumají v kontextu ghúridské náboženské politiky." }
      ]
    }
  },
  {
    id: "konark-sun-temple",
    patch: {
      lead: "Chrám ve tvaru obřího kamenného vozu s 24 koly, o kterém legenda tvrdí, že jeho hlavní socha levitovala díky magnetickému kameni.",
      atmosfera: 4.1,
      popisy: {
        zahada: "Na odlehlém pobřeží indického Urísá stojí chrám navržený jako monumentální kamenný vůz boha Slunce s 24 vyřezávanými koly - a podle legendy měla jeho hlavní socha kdysi levitovat ve vzduchu díky tajemnému magnetickému kameni.",
        historie: "Chrám nechal kolem roku 1250 n. l. postavit král Narasimhadéva I. z dynastie Východních Gangů, aby oslavil svá vojenská vítězství nad muslimskými útočníky. Protože byl sám ctitelem boha Slunce Súrji, nechal chrám postavit v podobě jeho vozu.",
        legenda: "Chrám má celkem 24 vyřezávaných kol na severní a jižní straně, každé o průměru zhruba 3 metry s osmi paprsky fungujícími jako plně funkční sluneční hodiny. Podle hinduistické mytologie měl chrám postavit Samba, syn boha Krišny, aby uctil sluneční božstvo za své uzdravení.",
        paranormalni: "Jedna z neověřených legend vypráví o monumentální soše Súrji vznášející se ve vzduchu díky magnetickému efektu lodestonu - magnetické pole mělo být tak silné, že rušilo kompasy projíždějících lodí, což prý přimělo portugalské námořníky chrám rozebrat a magnetický kámen odnést.",
        skepticke: "Legenda o levitující soše a magnetickém kameni nemá archeologické potvrzení a je typickým příkladem pověsti vysvětlující zchátralý stav chrámu - jeho hlavní věž se skutečně zřítila, pravděpodobněji kvůli strukturálním problémům nebo přírodním vlivům než kvůli odstranění tajemného kamene. Od roku 1984 je chrám na seznamu UNESCO."
      },
      praktickeInfo: "Chrám je přístupný s placeným vstupem, leží asi 35 kilometrů severovýchodně od města Puri, patří mezi nejnavštěvovanější památky indického státu Urísá.",
      zdroje: [
        { nazev: "Wikipedia: Konark Sun Temple", url: "https://en.wikipedia.org/wiki/Konark_Sun_Temple", licence: "CC BY-SA" },
        { nazev: "Wikidata: Konark Sun Temple", url: "https://www.wikidata.org/wiki/Q752091", licence: "CC0" },
        { nazev: "UNESCO World Heritage - Sun Temple, Konârak", url: "https://whc.unesco.org/en/list/246/", licence: "oficiální zdroj / UNESCO dokumentace" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Konark%20Sun%20Temple", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "24 kol jako sluneční hodiny", text: "Chrám má 24 vyřezávaných kamenných kol, z nichž každé funguje jako plně přesné sluneční hodiny s osmi paprsky odpovídajícími různým denním úsekům." },
        { nazev: "Levitující socha a ztracený magnet", text: "Legenda o soše vznášející se díky magnetickému kameni, který měl rušit kompasy lodí, patří k nejpopulárnějším a zároveň nejméně ověřeným částem chrámové tradice." }
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
