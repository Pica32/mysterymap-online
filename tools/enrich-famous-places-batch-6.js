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
    id: "demilitarized-zone-korea",
    patch: {
      lead: "Nejostřeji střežená hranice na světě se sedmdesát let bez lidí náhodou proměnila v jednu z nejcennějších přírodních rezervací Asie.",
      atmosfera: 4.0,
      popisy: {
        zahada: "Čtyři kilometry široký pás země napříč Korejským poloostrovem patří mezi nejvíce zaminovaná a střežená místa na planetě - a zároveň se díky sedmi desetiletím absence lidí náhodou proměnil v útočiště pro vzácná a ohrožená zvířata.",
        historie: "Demilitarizovanou zónu ustavili na konci korejské války (1950-1953) jako nárazníkové pásmo mezi Severní a Jižní Koreou. Táhne se napříč poloostrovem v délce asi 258 kilometrů, zhruba podél 38. rovnoběžky.",
        legenda: "Zóna zahrnuje pestrou škálu prostředí od skalnatých hor po řeky a přílivové bažiny. Nepřítomnost lidské činnosti umožnila přírodě a divoké zvěři nebývale vzkvétat - žijí zde tisíce druhů, které jinde na poloostrově vyhynuly nebo jsou ohrožené, včetně medvědů, jeřábů, jelenů a vyder.",
        paranormalni: "Podle nedávných pozorování se v zóně mohou vyskytovat i mimořádně vzácní sibiřští tygři a amurští levharti, kteří jinde v regionu prakticky vymizeli - paradoxní vedlejší efekt jednoho z nejnapjatějších míst světa.",
        skepticke: "Ekologický rozkvět zóny je přímým, dobře zdokumentovaným důsledkem sedmdesátileté absence lidského osídlení a zemědělství, ne žádného zázraku - stejná bezpečnostní opatření, která zónu učinila nehostinnou pro lidi, ji paradoxně učinila rájem pro přírodu."
      },
      praktickeInfo: "Návštěva vybraných částí zóny je možná jen v rámci organizovaných, přísně kontrolovaných prohlídek z jihokorejské strany, samostatný pohyb po zóně je zakázaný a nebezpečný kvůli minovým polím.",
      zdroje: [
        { nazev: "Wikipedia: Korean Demilitarized Zone", url: "https://en.wikipedia.org/wiki/Korean_Demilitarized_Zone", licence: "CC BY-SA" },
        { nazev: "Wikidata: Korean Demilitarized Zone", url: "https://www.wikidata.org/wiki/Q331990", licence: "CC0" },
        { nazev: "Smithsonian Magazine - DMZ Wildlife Paradise", url: "https://www.smithsonianmag.com/travel/wildlife-thrives-dmz-korea-risk-location-180967842/", licence: "novinářský zdroj" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Korean%20Demilitarized%20Zone", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Sedm desetiletí ticha", text: "Absence lidské činnosti po dobu sedmdesáti let proměnila jedno z nejnapjatějších míst světa v neplánovanou přírodní rezervaci plnou vzácných a ohrožených druhů." },
        { nazev: "Tygři na hranici konfliktu", text: "Podle pozorování se v zóně mohou skrývat i extrémně vzácní sibiřští tygři a amurští levharti - druhy, které jinde na poloostrově prakticky vymizely." }
      ]
    }
  },
  {
    id: "karahan-tepe",
    patch: {
      lead: "Sesterská lokalita Göbekli Tepe, možná ještě starší - a s mnohem temnějším, tělesnějším uměleckým jazykem plným falických rituálů.",
      atmosfera: 4.3,
      popisy: {
        zahada: "Jen 45 kilometrů od proslulého Göbekli Tepe leží další megalitická lokalita, která nejenže dokazuje, že Göbekli Tepe nebylo osamocené - podle datování mohla vzniknout ještě o několik století dřív.",
        historie: "Karahan Tepe bylo poprvé objeveno v roce 1997, ale k rozsáhlejším vykopávkám došlo až v posledních letech. Archeologové zde identifikovali 274 architektonických prvků, z toho nejméně 266 dosud stojících sloupů.",
        legenda: "Zatímco Göbekli Tepe je proslulé abstraktními sloupy do tvaru T zdobenými reliéfy nebezpečných zvířat, Karahan Tepe klade mnohem syrovější důraz na lidskou anatomii, šamanské zasvěcovací rituály a falickou symboliku - někteří badatelé lokalitu označují za pozůstatek toho, co by mohlo být první lidskou vesnicí na světě.",
        paranormalni: "Nálezy z Karahan Tepe naznačují, že Göbekli Tepe nebylo osamělým zázrakem, ale součástí rozsáhlé, vzájemně provázané sítě rituálních komplexů z doby konce poslední doby ledové, což zásadně mění dosavadní chápání raného lidského myšlení a společenské organizace.",
        skepticke: "Přestože zůstává mnoho otázek o přesném účelu a významu jednotlivých prvků otevřených, samotné datování a rozsah lokality jsou archeologicky solidně podložené - výzkum stále probíhá a nová zjištění mohou dosavadní chápání regionu dál měnit."
      },
      praktickeInfo: "Lokalita je součástí širšího archeologického regionu jihovýchodního Turecka, přístupná s omezenou návštěvnickou infrastrukturou, probíhající vykopávky mohou částečně omezovat přístup do některých sektorů.",
      zdroje: [
        { nazev: "Wikipedia: Karahan Tepe", url: "https://en.wikipedia.org/wiki/Karahan_Tepe", licence: "CC BY-SA" },
        { nazev: "Wikidata: Karahan Tepe", url: "https://www.wikidata.org/wiki/Q5996986", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Karahan%20Tepe%20Turkey", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Možná starší než slavnější sousedka", text: "Datování naznačuje, že stavby v Karahan Tepe mohly vzniknout o několik století dřív než proslulejší Göbekli Tepe - obrácení dosavadní představy, které z místa dělá ještě starší." },
        { nazev: "Síť, ne osamocený zázrak", text: "Objev Karahan Tepe ukázal, že Göbekli Tepe bylo součástí rozsáhlé sítě propojených rituálních center, ne izolovanou výjimkou raného lidstva." }
      ]
    }
  },
  {
    id: "lake-natron",
    patch: {
      lead: "Jezero, které mrtvá zvířata neproměňuje v kámen jako bájná Medúza - ale mumifikuje je stejnou solí, jakou používali staří Egypťané.",
      atmosfera: 4.0,
      popisy: {
        zahada: "V tanzanském úseku Velké příkopové propadliny leží jezero tak žíravé, že zvířata, která do něj spadnou, vycházejí ven zdánlivě proměněná v kámen - odtud přezdívka 'Medúzina voda'.",
        historie: "Jezero Natron je mělké, horké a extrémně zásadité, s pH kolem 10 až 12 - podobnou hodnotu má domácí bělicí prostředek. Jméno dostalo podle minerálu natronu, směsi uhličitanu sodného a dalších solí, které se v jezeře přirozeně vyskytují.",
        legenda: "Lidová i internetová tradice přirovnává efekt jezera k řecké bájné Medúze, jejíž pohled proměňoval muže v kámen - fotografie ztuhlých ptáků a netopýrů na březích jezera tuto asociaci jen posilují.",
        paranormalni: "Přes svou nehostinnost jezero hostí stabilní ekosystém - žije v něm populace plameňáků, alespoň jeden druh ryb a řasy, kterým extrémní podmínky naopak vyhovují.",
        skepticke: "Realita je méně mytická, ale stejně fascinující: natron, minerál dávající jezeru jméno, pohlcuje vlhkost a tuk natolik účinně, že ho staří Egypťané používali přímo k mumifikaci mrtvých - zvířata v jezeře se tedy doslova mumifikují stejným procesem, ne magicky zkameňují."
      },
      praktickeInfo: "Jezero je přístupné s místním průvodcem, oblíbenou aktivitou je pozorování hnízdících plameňáků, doporučuje se vyhnout přímému kontaktu s vodou kvůli vysoké alkalitě.",
      zdroje: [
        { nazev: "Wikipedia: Lake Natron", url: "https://en.wikipedia.org/wiki/Lake_Natron", licence: "CC BY-SA" },
        { nazev: "Wikidata: Lake Natron", url: "https://www.wikidata.org/wiki/Q838080", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Lake%20Natron%20Tanzania", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Stejná sůl jako u faraonů", text: "Minerál natron, který dal jezeru jméno, je totožný s látkou, kterou staří Egypťané používali k mumifikaci svých mrtvých - jezero tedy zvířata skutečně mumifikuje, ne mění v kámen." },
        { nazev: "Plameňáci v žíravé vodě", text: "Navzdory extrémní alkalitě jezero hostí stabilní populaci plameňáků, kteří se zde dokonce úspěšně rozmnožují - přizpůsobení, které z jezera dělá důležitou hnízdní lokalitu." }
      ]
    }
  },
  {
    id: "mount-osore",
    patch: {
      lead: "Sopečná hora, kam podle japonské tradice odcházejí duše zemřelých - a kde je slepé věštkyně dodnes dokážou přivolat zpět.",
      atmosfera: 4.5,
      popisy: {
        zahada: "Na severu Japonska se zvedá sopečná hora, jejíž pustá, sirná krajina tak věrně připomíná buddhistický popis pekla, že se v lidové tradici stala doslovnou branou mezi světem živých a mrtvých.",
        historie: "Podle legendy založil chrám Bodaidži na hoře v roce 862 mnich Ennin poté, co ho k místu dovedl prorocký sen. V období Edo se traduje rčení: 'Když lidé umřou, jdou na horu' - odkaz na Osore jako konečnou zastávku duší.",
        legenda: "Na horu se sjíždějí itako, ženské (původně výhradně nevidomé) médium vyškolená od dětství v tvrdé askezi ke komunikaci se zemřelými. Dvakrát ročně provádějí obřady kučijose - přivolávání duchů skřípavými výkřiky a nepřirozenými pozicemi, při kterých mají mrtví promlouvat jejich ústy.",
        paranormalni: "Během letního a podzimního poutního festivalu Osorezan se stovky poutníků scházejí, aby si u itako nechali 'promluvit' se zemřelými blízkými - dnes zůstává méně než dvě desítky těchto médií.",
        skepticke: "Vulkanická krajina s vroucími prameny, sirnými výpary a pustou, bezživotnou plání má čistě geologický původ, ne nadpřirozený - její vzhled ale natolik přesně odpovídá buddhistickým popisům podsvětí, že si tradici o bráně do zásvětí udržela po staletí bez ohledu na vědecké vysvětlení."
      },
      praktickeInfo: "Chrámový areál je přístupný s placeným vstupem v teplejších měsících, itako média jsou k zastižení hlavně během letního a podzimního poutního festivalu, konzultace vyžadují znalost japonštiny nebo tlumočníka.",
      zdroje: [
        { nazev: "Wikipedia: Mount Osore", url: "https://en.wikipedia.org/wiki/Mount_Osore", licence: "CC BY-SA" },
        { nazev: "Wikidata: Mount Osore", url: "https://www.wikidata.org/wiki/Q1377333", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Osorezan%20Mount%20Osore", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Sen, který založil chrám", text: "Podle legendy vedl mnicha Ennina k místu prorocký sen v roce 862, na jehož základě založil chrám Bodaidži přímo na sopečné hoře." },
        { nazev: "Poslední dvě desítky médií", text: "Tradice ženských věšteb itako, kdysi rozšířená po celém severním Japonsku, dnes přežívá jen v hrstce méně než dvaceti praktikujících médií." }
      ]
    }
  },
  {
    id: "hatra",
    patch: {
      lead: "Pevnostní město, které odolalo dvěma římským obléháním díky mohutným hradbám - a v roce 2015 padlo za oběť kladivům, ne armádám.",
      atmosfera: 4.2,
      popisy: {
        zahada: "V severním Iráku stálo přes dva tisíce let opevněné město s chrámy spojujícími helénistické, římské i orientální vlivy - přežilo dva pokusy o dobytí mocnou římskou armádou, ale nepřežilo pár měsíců pod nadvládou fanatiků s kladivy.",
        historie: "Hatra bylo velké opevněné město Parthské říše a hlavní město prvního arabského království, ležící asi 110 kilometrů jihozápadně od Mosulu. Mohutné, věžemi zesílené hradby městu umožnily odolat římským invazím v letech 116 a 198 n. l. Od roku 1985 bylo město na seznamu UNESCO.",
        legenda: "Město bylo proslulé svými dobře zachovanými chrámy kombinujícími architektonické styly z celého tehdejšího známého světa - dokladem kosmopolitní křižovatky kultur na hranici Parthské a Římské říše.",
        paranormalni: "V roce 2014 město obsadila teroristická organizace Islámský stát a v březnu 2015 zveřejnila video, na kterém militanti kladivy a střelnými zbraněmi ničí sochy a reliéfy s odůvodněním, že jsou 'uctívány místo Boha' a odporují jejich výkladu islámského práva.",
        skepticke: "Podle odhadů úřadů bylo během konfliktu zničeno kolem 15 procent města - jde o zdokumentovaný, záměrný akt ideologicky motivovaného ničení kulturního dědictví, ne o přírodní úpadek nebo kletbu. Od vytlačení Islámského státu z regionu je Hatra opět otevřená návštěvníkům."
      },
      praktickeInfo: "Lokalita je od nedávna opět přístupná turistům po zlepšení bezpečnostní situace v regionu, doporučuje se ověřit aktuální doporučení pro cestovatele a najmout místního průvodce.",
      zdroje: [
        { nazev: "Wikipedia: Hatra", url: "https://en.wikipedia.org/wiki/Hatra", licence: "CC BY-SA" },
        { nazev: "Wikidata: Hatra", url: "https://www.wikidata.org/wiki/Q466614", licence: "CC0" },
        { nazev: "The National - Iraq welcomes tourists to Hatra", url: "https://www.thenationalnews.com/travel/destinations/2022/09/12/iraq-welcomes-tourists-to-explore-the-ancient-ruins-of-hatra/", licence: "novinářský zdroj" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Hatra%20Iraq", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Hradby, které odolaly Římu dvakrát", text: "Mohutné opevnění umožnilo Hatře odrazit římské invaze v letech 116 a 198 n. l. - výkon, kterým se může pochlubit jen málo měst regionu." },
        { nazev: "Kladiva místo katapultů", text: "To, co nedokázala římská armáda za dva pokusy o dobytí, dokázali v roce 2015 militanti Islámského státu kladivy a střelnými zbraněmi během několika týdnů natáčeného ničení." }
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
