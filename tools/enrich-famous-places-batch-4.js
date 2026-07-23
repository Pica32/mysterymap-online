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
    id: "tassili-n-ajjer",
    patch: {
      lead: "Saharská plošina s tisíci pravěkými malbami dokládá dobu, kdy tuto dnešní pustinu obývala zelená savana plná života.",
      atmosfera: 4.2,
      popisy: {
        zahada: "Na náhorní plošině v jihovýchodním Alžírsku, jejíž skalní útvary vypadají tak mimozemsky, že je návštěvníci opakovaně popisují jako marťanskou krajinu, se ukrývá jedno z největších muzeí pravěkého umění pod širým nebem na světě.",
        historie: "Tassili n'Ajjer pokrývá přes 72 000 čtverečních kilometrů a obsahuje více než 15 000 jednotlivých maleb a rytin. Nejstarší z nich jsou staré asi 7000 let a zachycují proměnu krajiny i způsobu života lidí na okraji Sahary od roku 6000 př. n. l. až po první století našeho letopočtu.",
        legenda: "Malby dokládají takzvanou 'zelenou Saharu' - období, kdy dnešní hyperaridní poušť byla svěží savanou plnou divoké zvěře a komplexních lidských společenství. Časný badatel Henri Lhote přezdil jednu z osmnáct metrů vysokých postav v oblasti Džabaren 'Velký marťanský bůh' kvůli jejímu podivnému, robustnímu vzhledu a helmovité hlavě.",
        paranormalni: "Moderní archeologové interpretují takzvaného 'marťanského boha' jako mocné božstvo nebo předka, ne mimozemskou bytost - Lhoteho přezdívka ale přežila v populární kultuře dodnes a dál živí spekulace o starověkém kontaktu s mimozemšťany.",
        skepticke: "Vzhled krajiny připomínající jinou planetu je čistě výsledkem eroze pískovce do skalních 'lesů', ne dokladem mimozemského vlivu - samotné malby jsou naopak cenným a důkladně zdokumentovaným archeologickým záznamem skutečné klimatické proměny Sahary, od 1982 chráněným jako UNESCO."
      },
      praktickeInfo: "Návštěva vyžaduje organizovanou expedici s místním průvodcem kvůli odlehlosti a náročnému terénu, doporučuje se vícedenní trekking s velbloudím nebo terénním doprovodem.",
      zdroje: [
        { nazev: "Wikipedia: Tassili n'Ajjer", url: "https://en.wikipedia.org/wiki/Tassili_n%27Ajjer", licence: "CC BY-SA" },
        { nazev: "Wikidata: Tassili n'Ajjer", url: "https://www.wikidata.org/wiki/Q190048", licence: "CC0" },
        { nazev: "UNESCO World Heritage - Tassili n'Ajjer", url: "https://whc.unesco.org/en/list/179", licence: "oficiální zdroj / UNESCO dokumentace" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Tassili%20n%27Ajjer", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Marťanský bůh z pískovce", text: "Objevitel Henri Lhote přezdil osmnáctimetrovou malovanou postavu 'Velkým marťanským bohem' kvůli jejímu podivnému vzhledu - přezdívka, kterou moderní archeologie odmítá, ale popularita si ji podržela." },
        { nazev: "Záznam zelené Sahary", text: "Tisíce maleb zachycují proměnu krajiny ze svěží savany plné zvěře na dnešní pustinu - unikátní vizuální kronika klimatické změny během tisíců let." }
      ]
    }
  },
  {
    id: "mount-roraima",
    patch: {
      lead: "Stolová hora na pomezí tří zemí, kterou spisovatel Arthur Conan Doyle proměnil ve Ztracený svět plný dinosaurů - aniž by ji kdy sám navštívil.",
      atmosfera: 4.5,
      popisy: {
        zahada: "Nejvyšší z jihoamerických stolových hor zvaných tepui se strmě zvedá na hranici Venezuely, Brazílie a Guyany - a přestože žádný dinosaurus na jejím vrcholu nikdy nebyl nalezen, inspirovala jeden z nejslavnějších dobrodružných románů historie.",
        historie: "Roraima dosahuje výšky 2810 metrů a je zhruba osm kilometrů široká. Slovo 'tepui' pochází z jazyka domorodého lidu Pemon a zhruba znamená 'dům bohů'. Jde o jednu z nejstarších plošin na světě, staré asi dvě miliardy let.",
        legenda: "Britský botanik Everard Im Thurn vystoupal na vrchol hory v prosinci 1884 a jeho vyprávění fascinovalo spisovatele Arthura Conana Doylea natolik, že na jeho základě napsal roku 1912 román Ztracený svět o profesoru Challengerovi objevujícím na vrcholu izolované plošiny dinosaury - Doyle přitom horu sám nikdy nenavštívil a vycházel jen z cizích vyprávění.",
        paranormalni: "Izolace vrcholu po miliony let vedla ke skutečné evoluční zvláštnosti: až 35 procent druhů žijících na Roraimě jsou endemické, tedy nikde jinde na světě se nevyskytující, což hoře dodává punc skutečně 'ztraceného světa', byť bez dinosaurů.",
        skepticke: "Od dob Doylova románu bylo okolí hory důkladně prozkoumáno a žádné stopy dinosaurů se nenašly, jak se dalo čekat - skutečná biologická jedinečnost hory (vysoký podíl endemických druhů) je ale vědecky doložená a sama o sobě dostatečně pozoruhodná bez nutnosti fikce."
      },
      praktickeInfo: "Výstup na vrchol trvá obvykle několik dní pěšky s místním průvodcem, jde o středně náročný trek vyžadující dobrou kondici a odolnost vůči častým dešťům.",
      zdroje: [
        { nazev: "Wikipedia: Mount Roraima", url: "https://en.wikipedia.org/wiki/Mount_Roraima", licence: "CC BY-SA" },
        { nazev: "Wikidata: Mount Roraima", url: "https://www.wikidata.org/wiki/Q4777", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Mount%20Roraima", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Román z cizích vyprávění", text: "Arthur Conan Doyle napsal Ztracený svět inspirovaný vyprávěním botanika Everarda Im Thurna, aniž by horu Roraima kdy sám navštívil." },
        { nazev: "35 procent unikátních druhů", text: "Dlouhá izolace vrcholu vedla ke vzniku pozoruhodného množství endemických druhů rostlin a živočichů, které se nikde jinde na světě nevyskytují." }
      ]
    }
  },
  {
    id: "ellora-caves",
    patch: {
      lead: "Chrám vytesaný shora dolů z jediné skály - technika tak náročná, že se jí od 8. století prakticky nikdo neodvážil zopakovat.",
      atmosfera: 4.4,
      popisy: {
        zahada: "Uvnitř komplexu jeskynních chrámů Ellora se skrývá stavba, která se od ostatních chrámů liší jedním zásadním detailem: nebyla postavena zdola nahoru jako všechny ostatní, ale vytesána shora dolů z jediného kusu čedičové skály.",
        historie: "Kailásanátha chrám, označovaný jako Jeskyně 16 komplexu Ellora, dal postavit král Krišna I. z dynastie Ráštrakúta mezi lety 756 a 773 n. l. Podle dobových záznamů měl být dokončen za pouhých 18 let - téměř neuvěřitelný výkon vzhledem k přesnosti a objemu odtěženého kamene.",
        legenda: "Chrám je největší monolitickou stavbou na světě vytesanou z jediného kusu skály a je zasvěcený bohu Šivovi. Řemeslníci ho tesali vertikálně do tvrdého čediče pohoří Sahjadri jen kladivy a dláty, bez moderních nástrojů, přes 1200 let před naší dobou.",
        paranormalni: "Technika stavby shora dolů je v dějinách chrámové architektury mimořádně vzácná, protože vyžaduje dokonalé předběžné plánování - jediná chyba v odtěžování kamene by mohla znamenat nenávratné poškození celé stavby.",
        skepticke: "Přestože je výkon stavitelů mimořádný, nejde o žádnou nevysvětlitelnou záhadu - je to jasný doklad výjimečné dovednosti starověkých indických architektů, těžařů kamene a sochařů, dobře zdokumentovaný v odborné literatuře a chráněný od roku 1983 jako UNESCO."
      },
      praktickeInfo: "Areál je přístupný s placeným vstupem jako součást širšího komplexu jeskyní Ellora, doporučuje se počítat s celodenní návštěvou kvůli rozsahu lokality.",
      zdroje: [
        { nazev: "Wikipedia: Kailasa Temple, Ellora", url: "https://en.wikipedia.org/wiki/Kailasa_Temple,_Ellora", licence: "CC BY-SA" },
        { nazev: "Wikidata: Kailasa Temple, Ellora", url: "https://www.wikidata.org/wiki/Q1268562", licence: "CC0" },
        { nazev: "UNESCO World Heritage - Ellora Caves", url: "https://whc.unesco.org/en/list/243/", licence: "oficiální zdroj / UNESCO dokumentace" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Ellora%20Caves%20Kailasa%20Temple", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Stavba naruby", text: "Na rozdíl od téměř všech ostatních chrámů světa nebyl Kailásanátha postaven zdola nahoru, ale vytesán shora dolů z jediné skály - technika vyžadující dokonalé předběžné plánování bez možnosti opravy chyb." },
        { nazev: "18 let ručního tesání", text: "Podle dobových záznamů dokázali řemeslníci dokončit celý monumentální chrám za pouhých 18 let, jen kladivy a dláty, bez jakýchkoli moderních nástrojů." }
      ]
    }
  },
  {
    id: "great-zimbabwe-ruins",
    patch: {
      lead: "Kamenné město, jehož africký původ koloniální badatelé přes sto let popírali - a jehož jméno dalo název celé moderní zemi.",
      atmosfera: 4.3,
      popisy: {
        zahada: "Rozsáhlé kamenné ruiny v srdci jižní Afriky byly po více než sto let předmětem záměrného historického popírání - koloniální badatelé odmítali uvěřit, že tak sofistikované město mohli postavit sami Afričané.",
        historie: "Great Zimbabwe postavili předkové lidu Šona mezi 11. a 15. stoletím. Důkazy o tom poskytují styly keramiky, tradice zpracování železa, vzorce osídlení, ústní tradice, radiokarbonové datování i kulturní kontinuita s dnešními obyvateli regionu.",
        legenda: "Koloniální archeologové a badatelé po dlouhá desetiletí připisovali ruiny Egypťanům, Féničanům, Babyloňanům, samotnému králi Šalomounovi nebo královně ze Sáby - teorie, které se šířily ne kvůli důkazům, ale kvůli hlubokým rasovým předsudkům doby, podle nichž Afričané nemohli sami vybudovat sofistikované kamenné město ani řídit mocné království.",
        paranormalni: "Britský archeolog James Theodore Bent při vykopávkách roku 1881 vyhazoval artefakty, které označil za 'nevýznamné', ale které by ve skutečnosti prokázaly africký původ stavby - lokalita byla navíc systematicky vykrádána o zlato a další cennosti, zatímco keramika a železné nástroje byly ničeny.",
        skepticke: "Moderní archeologie tuto koloniální dezinterpretaci jednoznačně vyvrátila - Great Zimbabwe je nezpochybnitelně africkým dílem lidu Šona, a když v roce 1980 vznikla nezávislá země, zvolila si jméno Zimbabwe právě podle těchto ruin jako symbolický návrat k dědictví, které jí kolonialismus po generace upíral."
      },
      praktickeInfo: "Areál je přístupný s placeným vstupem jako národní historická památka a symbol moderního Zimbabwe, doporučuje se místní průvodce pro plné pochopení historického i symbolického významu místa.",
      zdroje: [
        { nazev: "Wikipedia: Great Zimbabwe", url: "https://en.wikipedia.org/wiki/Great_Zimbabwe", licence: "CC BY-SA" },
        { nazev: "Wikidata: Great Zimbabwe", url: "https://www.wikidata.org/wiki/Q209217", licence: "CC0" },
        { nazev: "World History Encyclopedia - Impact of Prejudice on Great Zimbabwe", url: "https://www.worldhistory.org/article/1429/the-impact-of-prejudice-on-the-history-of-great-zi/", licence: "vzdělávací zdroj" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Great%20Zimbabwe", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Sto let popírání", text: "Koloniální badatelé přes sto let odmítali uznat, že ruiny postavili předkové místního lidu Šona, a místo toho je připisovali vzdáleným starověkým civilizacím kvůli rasovým předsudkům doby." },
        { nazev: "Jméno pro novou zemi", text: "Když roku 1980 vznikla nezávislá africká země, zvolila si jméno Zimbabwe přímo podle těchto ruin - symbolické přihlášení se k dědictví, které kolonialismus dlouho popíral." }
      ]
    }
  },
  {
    id: "siwa-oracle-temple",
    patch: {
      lead: "Odlehlá egyptská oáza, kam se roku 331 př. n. l. vydal Alexandr Veliký zeptat věštírny, jestli je synem boha.",
      atmosfera: 4.1,
      popisy: {
        zahada: "V odlehlé oáze uprostřed Libyjské pouště stojí věštírna, která byla ve starověkém světě proslulá stejně jako řecké Delfy - a kterou v roce 331 př. n. l. navštívil sám Alexandr Veliký, aby se zeptal na svůj božský původ.",
        historie: "Chrám boha Amona v oáze Síwa byl postaven v 6. století př. n. l., pravděpodobně na místě ještě staršího svatostánku, a stojí dodnes na kopci Aghurmi asi 4 kilometry od města Síwa.",
        legenda: "Alexandr Veliký podnikl během svého egyptského tažení nebezpečnou cestu pouští do Síwy, aby si u věštírny zajistil legitimitu vládce v očích Egypťanů - doufal, že mu věštírna potvrdí faraonský původ. Podle dochovaných zpráv, které zaznamenal řecký historik Kallisthenés z Olynthu, kněz Amona skutečně potvrdil, že je Alexandr synem boha Amona-Dia.",
        paranormalni: "Zpráva o božském potvrzení se rychle rozšířila mezi Alexandrovými vojáky i spojenci a posílila jeho pověst neporazitelného vládce vyvoleného bohy - epizoda, která výrazně přispěla k mytizaci Alexandrovy osobnosti během jeho života i v pozdějších dějinách.",
        skepticke: "Historicky doložené je, že Alexandr věštírnu navštívil a že kněží jeho božský původ potvrdili - motivace obou stran je ale zřejmá: Alexandr potřeboval politickou legitimitu a kněží věštírny získali mocného ochránce, ne že by šlo o nezpochybnitelný důkaz nadpřirozeného zjevení."
      },
      praktickeInfo: "Chrám je přístupný s placeným vstupem, oáza Síwa je odlehlá lokalita vyžadující delší cestu pouští z Káhiry nebo pobřežních měst, doporučuje se plánovat návštěvu s dostatečnou časovou rezervou.",
      zdroje: [
        { nazev: "Wikipedia: Oracle of Amun", url: "https://en.wikipedia.org/wiki/Oracle_of_Amun", licence: "CC BY-SA" },
        { nazev: "Wikidata: Oracle of Amun", url: "https://www.wikidata.org/wiki/Q958997", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Temple%20of%20Amun%20Siwa", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Nebezpečná pouť dobyvatele", text: "Alexandr Veliký podnikl riskantní cestu pouští, aby se u věštírny v Síwě dozvěděl, zda je synem boha - potvrzení, které mu pomohlo upevnit vládu nad Egyptem." },
        { nazev: "Věštírna na úrovni Delf", text: "Chrám Amona v Síwě měl ve starověkém světě srovnatelnou prestiž jako proslulá řecká věštírna v Delfách, přestože ležel v jedné z nejodlehlejších oáz Sahary." }
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
