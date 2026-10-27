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
    id: "ancient-ram-inn",
    patch: {
      nazev: "Ancient Ram Inn",
      lead: "Středověký hostinec v anglickém Gloucestershiru, o kterém jeho dlouholetý majitel tvrdil, že je nejstrašidelnějším domem Anglie - s čarodějnickým pokojem a údajným pohanským pohřebištěm pod podlahou.",
      atmosfera: 4.7,
      paranormalniAktivita: "známé případy",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "jen s průvodcem",
      popisy: {
        zahada: "Křivý hrázděný dům stojí pod kostelem ve městečku Wotton-under-Edge. Místnosti mají jména podle příběhů, které se v nich prý staly: Biskupův pokoj, Čarodějnický pokoj nebo Barnabášův pokoj.",
        historie: "Dům je doložen jako stará stavba z pozdního středověku, tradice uvádí až 12. století. Sloužil jako hostinec pro kněze a pocestné. V roce 1968 ho koupil John Humphries, který zde žil až do své smrti v roce 2017 a proslavil dům příběhy o duších.",
        legenda: "Podle pověsti se v Čarodějnickém pokoji ukrývala žena obviněná z čarodějnictví, než ji chytili a upálili. Humphries tvrdil, že dům stojí na pohanském pohřebišti a že pod schody našel kosti dětí - nezávisle to doloženo není.",
        paranormalni: "Hosté a štáby televizních pořadů jako Most Haunted nebo Ghost Adventures popisovaly tlak na hrudi, kroky a pocit, že je někdo vytahuje z postele. Dům je oblíbený u lovců duchů.",
        skepticke: "Většina příběhů pochází od samotného majitele a z televize. Archeologický průzkum, který by potvrdil pohřebiště nebo dětské kosti, nebyl zveřejněn."
      },
      praktickeInfo: "Wotton-under-Edge leží asi 30 km severně od Bristolu. Dům je soukromý, návštěva je možná jen na předem domluvené prohlídky nebo noční lovy duchů. Uvnitř je tma a nerovné podlahy, vezměte si baterku.",
      pribehy: [
        { nazev: "Čarodějnický pokoj", text: "V jednom z pokojů se podle pověsti skrývala žena obviněná z čarodějnictví, než ji odvedli k upálení." },
        { nazev: "Majitel a jeho duchové", text: "John Humphries v domě žil téměř půl století a o duších vyprávěl každému, kdo přišel - z domu tak udělal legendu." }
      ]
    }
  },
  {
    id: "pluckley-village",
    patch: {
      nazev: "Pluckley",
      lead: "Kentská vesnice, kterou Guinnessova kniha rekordů v roce 1989 označila za nejstrašidelnější vesnici Anglie - s dvanácti a více duchy od lupiče u stromu po Rudou paní na hřbitově.",
      atmosfera: 4.4,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Na první pohled obyčejná vesnice s kostelem, hospodou a sady. Domy mají zvláštní půlkruhová okna Deringů. Každá zatáčka, les a cihelna tu ale má svého ducha.",
        historie: "Pluckley je stará vesnice v hrabství Kent, po staletí patřila rodu Deringů. Guinnessova kniha rekordů ji v roce 1989 zapsala jako nejstrašidelnější vesnici Anglie. Od té doby sem jezdí lovci duchů, hlavně o Halloweenu.",
        legenda: "Mezi místní duchy patří lupič přibodnutý mečem ke stromu na Fright Corner, Rudá paní z rodu Deringů na hřbitově u kostela sv. Mikuláše, křičící dělník z cihelny, oběšený učitel a stará žena prodávající řeřichu, která prý uhořela u mostu.",
        paranormalni: "Návštěvníci hlásí výkřiky v noci, světla v lese a postavy na hřbitově. Vesnice se objevuje v mnoha pořadech a knihách o anglických duších.",
        skepticke: "Příběhy duchů jsou z velké části folklor, který se rozrostl s turistickou slávou. Pro většinu jmenovaných postav chybí historické záznamy."
      },
      praktickeInfo: "Pluckley leží asi 10 km severozápadně od Ashfordu, má vlakovou zastávku. Obyvatelé jsou unavení z nočních návštěvníků - buďte tiší a nevstupujte na soukromé pozemky. Kostel sv. Mikuláše je přes den otevřený.",
      pribehy: [
        { nazev: "Fright Corner", text: "Na křižovatce Fright Corner prý zabili lupiče, kterého přibodli mečem ke stromu - jeho duch se zjevuje v noci." },
        { nazev: "Rudá paní", text: "Na hřbitově u kostela prý bloudí žena z rodu Deringů, která hledá hrob svého zemřelého dítěte." }
      ]
    }
  },
  {
    id: "raynham-hall",
    patch: {
      nazev: "Raynham Hall",
      lead: "Norfolkské sídlo, kde v roce 1936 vznikla nejslavnější fotografie ducha - Hnědá paní sestupující po schodech.",
      atmosfera: 4.6,
      paranormalniAktivita: "známé případy",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "jen s průvodcem",
      popisy: {
        zahada: "Na fotografii z roku 1936 je na dubovém schodišti průsvitná postava v závoji. Snímek otiskl časopis Country Life a dodnes se o něm vedou spory.",
        historie: "Sídlo ze 17. století patří rodu Townshendů. Hnědá paní je spojována s Dorothy Walpole, sestrou premiéra Roberta Walpolea a manželkou vikomta Townshenda. Zemřela v roce 1726, podle záznamů na neštovice.",
        legenda: "Podle pověsti manžel Dorothy zavřel v domě kvůli podezření z nevěry a už ji nepustil k dětem. Kapitán Frederick Marryat, autor dobrodružných románů, na ni prý v roce 1836 vystřelil z pistole - kulka prošla postavou.",
        paranormalni: "Fotografii pořídili fotografové kapitán Provand a Indre Shira, kteří pro Country Life fotili interiéry. Shira tvrdil, že postavu viděl a zavolal na kolegu, aby zmáčkl spoušť.",
        skepticke: "Kritici považují snímek za dvojitou expozici nebo úpravu negativu. Postava připomíná sochu Panny Marie. Věrohodnost svědectví nelze ověřit."
      },
      praktickeInfo: "Raynham Hall je soukromé sídlo asi 6 km jihozápadně od Fakenhamu v Norfolku. Pro veřejnost je otevřené jen několik dní v roce nebo pro skupiny po domluvě - termíny ověřte předem.",
      pribehy: [
        { nazev: "Fotografie z roku 1936", text: "Fotografové z Country Life zachytili na schodišti průsvitnou postavu v závoji - snímek obletěl svět." },
        { nazev: "Marryatův výstřel", text: "Spisovatel Frederick Marryat prý na Hnědou paní vystřelil, kulka ale skončila ve dveřích za ní." }
      ]
    }
  },
  {
    id: "hellfire-caves",
    patch: {
      nazev: "Jeskyně Hellfire",
      lead: "Křídové tunely pod kopcem ve West Wycombe, kde se v 18. století scházel aristokratický Hellfire Club - u podzemní řeky Styx a s duchem zavražděné dívky.",
      atmosfera: 4.6,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Úzké chodby vedou hluboko pod kopec ke komnatám s gotickými oblouky. Na konci je přes „řeku Styx“ Vnitřní chrám. Nad jeskyněmi stojí kostel se zlatou koulí na věži a šestiboké mauzoleum.",
        historie: "Tunely nechal vykopat sir Francis Dashwood v letech 1748–1752. Křída posloužila na stavbu silnice a místní dostali práci po neúrodě. Dashwood zde pořádal setkání Hellfire Clubu, spolku politiků a šlechticů.",
        legenda: "Podle pověsti v jeskyních zemřela služka Sukie, kterou sem vylákali místní mladíci. Členové klubu prý v podzemí slavili černé mše a pořádali orgie.",
        paranormalni: "Zaměstnanci a návštěvníci hlásí bílou postavu v chodbách, kroky a hlasy. V mauzoleu prý bloudí duch Paula Whiteheada, jehož srdce zde bylo uloženo v urně, dokud ho v roce 1829 neukradli.",
        skepticke: "Co se na setkáních klubu přesně dělo, se neví - dobová pověst byla nejspíš přehnaná. Příběh Sukie je místní folklor bez doložení."
      },
      praktickeInfo: "West Wycombe leží asi 50 km západně od Londýna u High Wycombe. Jeskyně jsou otevřené hlavně o víkendech a prázdninách, prohlídka trvá asi 45 minut. Uvnitř je chladno, vezměte si bundu. Nahoře je kostel sv. Vavřince.",
      pribehy: [
        { nazev: "Řeka Styx", text: "Hluboko v jeskyních přechází chodba přes podzemní „řeku Styx“ k Vnitřnímu chrámu, kde se prý scházeli členové klubu." },
        { nazev: "Ukradené srdce", text: "Srdce básníka Paula Whiteheada bylo uloženo v urně v mauzoleu nad jeskyněmi. V roce 1829 ho ukradli." }
      ]
    }
  },
  {
    id: "mary-kings-close",
    patch: {
      nazev: "Mary King's Close",
      lead: "Ulička ze 17. století zakopaná pod radnicí na edinburské Royal Mile - morová historie, podzemní byty a pokojík plný hraček pro duch holčičky Annie.",
      atmosfera: 4.7,
      paranormalniAktivita: "známé případy",
      historickaDolozenost: "výborná",
      nebezpecnost: "nízká",
      pristupnost: "jen s průvodcem",
      popisy: {
        zahada: "Pod budovou městských komor se zachovaly strmé uličky a byty, kde lidé žili v 17. století. Do podzemí se sestupuje schodištěm a prohlídka vede tmou mezi zdmi starých domů.",
        historie: "Ulička nese jméno Mary King, obchodnice ze 17. století. V roce 1645 zasáhl Edinburgh mor. V roce 1753 začala nad uličkami stavba Královské burzy, dnešní radnice. Spodní patra domů zůstala pod ní jako sklepy.",
        legenda: "Podle pověsti nemocné obyvatele uličky zazdili, aby mor nešířili. V jednom pokoji prý bloudí duch holčičky Annie, která tu zemřela a ztratila panenku.",
        paranormalni: "V roce 1992 japonská médium Aiko Gibo prý v pokoji ucítila smutnou dívku a nechala jí tam panenku. Návštěvníci od té doby nosí hračky, z nichž je dnes velká hromada.",
        skepticke: "Zazdění nemocných je mýtus - úřady sice nemocné izolovaly, ale ne takto. Příběh Annie vznikl až v 90. letech."
      },
      praktickeInfo: "Vstup je z Royal Mile naproti katedrále sv. Jiljí. Prohlídky jen s průvodcem, asi hodinu, vstupenky je dobré koupit předem. Uvnitř se nesmí fotografovat. Schody jsou strmé.",
      pribehy: [
        { nazev: "Pokoj Annie", text: "Návštěvníci nechávají v pokoji hračky pro duch holčičky Annie - dnes je tam velká hromada panenek a plyšáků." },
        { nazev: "Město pod radnicí", text: "Když v roce 1753 stavěli nad uličkou novou budovu, spodní patra domů zůstala pod ní jako zapomenuté podzemí." }
      ]
    }
  },
  {
    id: "ballygally-castle",
    patch: {
      nazev: "Hrad Ballygally",
      lead: "Hrad ze 17. století na pobřeží Severního Irska, dnes hotel, kde ve věži straší Lady Isabella - a hosté mohou navštívit „pokoj duchů“.",
      atmosfera: 4.4,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné, hotel",
      popisy: {
        zahada: "Hrad stojí přímo u moře na pobřežní silnici Causeway Coastal Route. Úzké točité schodiště vede do malé místnosti ve věži, které se říká Ghost Room.",
        historie: "Hrad postavil v roce 1625 skotský šlechtic James Shaw. Patří k nejlépe zachovaným stavbám z období plantáží v Ulsteru. Dnes je součástí hotelu.",
        legenda: "Podle pověsti James Shaw zavřel svou ženu Isabellu do věže, protože mu neporodila syna. Isabella prý vypadla nebo vyskočila z okna. Její duch klepe na dveře hostů.",
        paranormalni: "Hosté hlásí klepání, kroky a dětský smích na chodbách. Hotel o duších otevřeně mluví a pokoj ve věži nechává volně přístupný.",
        skepticke: "Isabella Shaw historicky existovala, ale příběh o jejím uvěznění a pádu není doložený. Hotel z legendy dělá součást své nabídky."
      },
      praktickeInfo: "Ballygally leží asi 6 km severně od Larne a 40 km od Belfastu. Pokoj duchů je přístupný i těm, kdo v hotelu nebydlí. Spojte s výletem po pobřeží k Obrově cestě.",
      pribehy: [
        { nazev: "Lady Isabella", text: "Žena zavřená ve věži prý vypadla z okna. Dodnes klepe na dveře hostů a pak zmizí." },
        { nazev: "Pokoj duchů", text: "Hotel nechává malou místnost ve věži otevřenou, aby si ji mohl prohlédnout každý, kdo se nebojí." }
      ]
    }
  },
  {
    id: "dragsholm-castle",
    patch: {
      nazev: "Hrad Dragsholm",
      lead: "Jeden z nejstarších dánských hradů, kde zemřel uvězněný manžel skotské královny Marie Stuartovny - a kde prý straší Bílá i Šedá paní.",
      atmosfera: 4.5,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné, hotel",
      popisy: {
        zahada: "Bílý hrad stojí na severozápadě Sjællandu u krajiny Odsherred. Dnes je to hotel a restaurace. Chodby se starými portréty jsou podle pověstí plné duchů.",
        historie: "Hrad postavili biskupové z Roskilde kolem roku 1215. Později sloužil jako vězení. Byl zde vězněn James Hepburn, hrabě Bothwell, třetí manžel Marie Stuartovny, který zde v roce 1578 zemřel.",
        legenda: "Bílá paní byla prý dcera majitele, která se zamilovala do prostého muže a otec ji za trest zazdil. Šedá paní je služebná, která za uzdravení vděčně dodnes chodí kontrolovat pokoje. Bothwell prý projíždí nádvořím v kočáře.",
        paranormalni: "Hosté hlásí kroky, bouchání dveří a ženskou postavu na chodbách. Hrad se s duchy chlubí a pořádá prohlídky s jejich příběhy.",
        skepticke: "Bothwellovo věznění a smrt jsou doložené. Příběh o zazděné dívce je legenda - zpráva o nalezené kostře ve zdi se opakuje, ale zdroj je nejasný."
      },
      praktickeInfo: "Dragsholm je asi 1 hodinu a 15 minut jízdy autem od Kodaně, u obce Hørve. Hrad je hotel s vyhlášenou restaurací, do parku se můžete podívat i bez ubytování. V létě jsou prohlídky s průvodcem.",
      pribehy: [
        { nazev: "Vězeň Bothwell", text: "Třetí manžel Marie Stuartovny strávil poslední roky v dánském vězení a zemřel na Dragsholmu v roce 1578." },
        { nazev: "Zazděná dívka", text: "Dceru majitele, která milovala prostého muže, prý otec zazdil v hradě. Od té doby bloudí chodbami jako Bílá paní." }
      ]
    }
  },
  {
    id: "moosham-castle",
    patch: {
      nazev: "Hrad Moosham",
      lead: "Hrad v rakouském Lungau, kde v 17. století probíhaly čarodějnické procesy a kde se později vyprávělo o vlkodlacích, kteří trhali dobytek.",
      atmosfera: 4.6,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "jen s průvodcem",
      popisy: {
        zahada: "Hrad stojí na kopci nad údolím Lungau. Uvnitř jsou staré sály, kaple a mučírna s nástroji, kterými vyslýchali obviněné z čarodějnictví.",
        historie: "Hrad z 12. století sloužil arcibiskupům ze Salcburku jako sídlo soudu. V 17. století zde probíhaly čarodějnické procesy, které skončily popravami. V roce 1886 hrad koupil hrabě Hans Wilczek a nechal ho opravit.",
        legenda: "Podle pověsti v okolí v 19. století nacházeli roztrhaný dobytek a srnčí. Lidé obviňovali vlkodlaky a podezřelé prý vyslýchali na hradě. Duchové obětí procesů prý bloudí chodbami.",
        paranormalni: "Návštěvníci a průvodci hlásí kroky, dotyky a studená místa, hlavně v mučírně. Hrad se objevil v pořadech o strašidelných místech.",
        skepticke: "Čarodějnické procesy v Salcbursku jsou dobře doložené. Vlkodlačí příběhy jsou nejspíš lidová reakce na útoky vlků nebo psů."
      },
      praktickeInfo: "Moosham leží u Unternbergu v Lungau, asi 1 hodinu a 30 minut jízdy od Salcburku. Vstup je jen s průvodcem, prohlídky probíhají hlavně v létě. Termíny ověřte předem.",
      pribehy: [
        { nazev: "Mučírna", text: "V hradní mučírně vyslýchali v 17. století lidi obviněné z čarodějnictví. Nástroje jsou vystavené dodnes." },
        { nazev: "Vlkodlaci z Lungau", text: "Když v okolí nacházeli roztrhaná zvířata, lidé obviňovali vlkodlaky - podezřelé prý odváděli na hrad." }
      ]
    }
  },
  {
    id: "krzyztopor-castle",
    patch: {
      nazev: "Hrad Krzyżtopór",
      lead: "Obří zřícenina polského paláce-pevnosti postaveného podle kalendáře - s okny, pokoji a sály podle dnů, týdnů a měsíců roku.",
      atmosfera: 4.7,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Ruiny stojí v obci Ujazd ve Svatokřížském vojvodství. Nad branou jsou vytesané symboly kříže a sekery, podle kterých má hrad jméno. Obrovské zdi a nádvoří působí jako kulisa z filmu.",
        historie: "Palác-pevnost dal postavit vojvoda Krzysztof Ossoliński v letech 1621–1644. Krátce po dokončení ho v roce 1655 poničili Švédové během takzvané potopy. Od 18. století je zříceninou.",
        legenda: "Podle tradice měl hrad tolik oken, kolik má rok dní, tolik pokojů, kolik týdnů, tolik sálů, kolik měsíců, a čtyři věže jako roční období. Strop jednoho sálu prý tvořilo akvárium s rybami a koně měli mramorové žlaby a křišťálová zrcadla.",
        paranormalni: "Místní vyprávějí o duchu rytíře, který se prochází ruinami. Na hradě se konají noční prohlídky a rytířské slavnosti.",
        skepticke: "Kalendářní počty a akvárium ve stropě jsou spíš tradice než doložený fakt. Stavba a zničení paláce jsou ale dobře doložené."
      },
      praktickeInfo: "Ujazd leží asi 15 km jižně od Opatówa a 40 km od Sandoměře. Ruiny jsou přístupné celoročně za vstupné. V létě se konají rytířské akce. Spojte s návštěvou Sandoměře.",
      pribehy: [
        { nazev: "Hrad jako kalendář", text: "Podle tradice měl hrad 365 oken, 52 pokojů, 12 sálů a 4 věže - jako dny, týdny, měsíce a roční období." },
        { nazev: "Akvárium ve stropě", text: "Strop jednoho ze sálů prý tvořila skleněná nádrž s exotickými rybami. Jestli to byla pravda, se neví." }
      ]
    }
  },
  {
    id: "dargavs-city-of-the-dead",
    patch: {
      nazev: "Dargavs - Město mrtvých",
      lead: "Téměř stovka kamenných hrobek na svahu v horách Severní Osetie - podle pověsti sem za morové epidemie odcházeli nemocní, aby zemřeli.",
      atmosfera: 4.8,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "střední",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Na svahu nad údolím stojí bílé kamenné domky se špičatými střechami. Uvnitř jsou police s ostatky a dřevěné rakve ve tvaru lodí. Údolí je často zahalené mlhou.",
        historie: "Hrobky stavěly osetské rodiny přibližně od 14. do 18. století, každá rodina měla vlastní. Vyšší hrobka znamenala bohatší rod. Ostatky se díky suchému vzduchu částečně mumifikovaly.",
        legenda: "Podle pověsti za epidemie moru v 18. století odcházeli nemocní do hrobek sami a čekali tam na smrt. Kdo do hrobek vstoupí, ten se prý už nevrátí živý.",
        paranormalni: "Místní se hrobkám vyhýbají a návštěvníci popisují tíživý pocit. O nadpřirozených jevech nejsou známé konkrétní zprávy.",
        skepticke: "Pověst o prokletí slouží spíš k ochraně hrobek před vykrádáním. Rakve ve tvaru lodí souvisejí s představou cesty duše přes řeku do záhrobí."
      },
      praktickeInfo: "Dargavs leží asi 40 km od Vladikavkazu v Severní Osetii, cesta vede přes horské průsmyky. Do hrobek nevstupujte a ostatky nefoťte zblízka - je to hřbitov. Před cestou do Ruska ověřte aktuální cestovní doporučení.",
      pribehy: [
        { nazev: "Odchod do hrobek", text: "Za epidemie moru prý nemocní odcházeli do rodinných hrobek sami a zůstávali tam, aby nenakazili ostatní." },
        { nazev: "Rakve jako lodě", text: "Dřevěné rakve mají tvar lodí - podle jednoho výkladu měly duši převézt přes řeku do světa mrtvých." }
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
