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
    id: "thingvellir",
    patch: {
      nazev: "Þingvellir",
      lead: "Údolí na hranici dvou kontinentálních desek, kde se od roku 930 scházel islandský parlament Althing - a kde se v trhlinách odehrávaly i popravy.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné, parkovné",
      popisy: {
        zahada: "Þingvellir leží v příkopové propadlině mezi severoamerickou a euroasijskou deskou, které se rozestupují o několik milimetrů ročně. Soutěskou Almannagjá se dá projít mezi skalními stěnami a v průzračné trhlině Silfra se potápí mezi kontinenty.",
        historie: "Roku 930 zde vznikl Althing, shromáždění svobodných mužů, které se sem každé léto vracelo až do roku 1798. Z Lögberg (Zákonné skály) se předčítalo právo. Kolem roku 1000 tu shromáždění přijalo křesťanství. Na seznamu UNESCO je od roku 2004.",
        legenda: "Ságy vyprávějí, že zákonopravce Þorgeir ležel den a noc pod pláštěm, než rozhodl o přijetí křesťanství. V tůni Drekkingarhylur byly v 17. a 18. století topeny ženy odsouzené za cizoložství a dětovraždu - místní říkají, že voda tam je i v létě studenější.",
        paranormalni: "Návštěvníci popisují u Drekkingarhyluru tíživý pocit. Islandský folklor sem umisťuje i skryté lidi (huldufólk) žijící ve skalách.",
        skepticke: "Popravy jsou historicky doložené, zvláštní chlad tůně je dán prameny z lávového podloží. Skrytí lidé jsou součástí islandské lidové tradice."
      },
      praktickeInfo: "Þingvellir je asi 45 minut autem z Reykjavíku a je součástí Zlatého okruhu. Parkování je placené. Potápění v Silfře je jen s licencovaným průvodcem a suchým oblekem. Nejlépe přijeďte brzy ráno, později bývá plno autobusů.",
      pribehy: [
        { nazev: "Muž pod pláštěm", text: "Zákonopravce Þorgeir prý den a noc přemýšlel pod pláštěm, než Island přijal křesťanství." },
        { nazev: "Tůň utopených", text: "V tůni Drekkingarhylur byly v 17. a 18. století topeny odsouzené ženy - dnes ji připomíná pamětní deska." }
      ]
    }
  },
  {
    id: "hekla",
    patch: {
      nazev: "Sopka Hekla",
      lead: "Jedna z nejaktivnějších sopek Islandu, kterou středověká Evropa považovala za bránu do pekla - a podle lidové tradice místo, kde se o Velikonocích slétají čarodějnice.",
      atmosfera: 4.5,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "střední",
      pristupnost: "volně přístupné, náročný výstup",
      popisy: {
        zahada: "Hekla (1 491 m) má protáhlý hřbet s trhlinou, ze které láva vytéká z mnoha míst najednou. Erupce přicházejí s velmi krátkým varováním, často kratším než hodina. Vrchol bývá zahalen v oblacích, odtud možná i její jméno (kápě).",
        historie: "Erupce roku 1104 zasypala popelem farmy v údolí Þjórsárdalur. Od té doby Hekla vybuchla více než dvacetkrát, naposledy v roce 2000. Středověcí autoři, například cisterciácký mnich Herbert z Clairvaux, ji popisovali jako vstup do pekla nebo očistce.",
        legenda: "Podle středověkých textů z ní stoupají duše odsouzených a ozývá se z ní nářek. Ve skandinávském folkloru se na Hekle o Velikonocích scházely čarodějnice.",
        paranormalni: "Hekla nemá novodobé hlášení duchů. Tajemná je spíše tím, jak silně se otiskla do evropské představy pekla.",
        skepticke: "Pekelné představy vznikly z opravdových erupcí, sirného zápachu a popela, které středověcí cestovatelé neuměli vysvětlit."
      },
      praktickeInfo: "Hekla je asi 2 hodiny autem z Reykjavíku, k výchozímu bodu vede štěrková cesta (vhodné auto 4×4). Výstup a sestup trvá 4-6 hodin. Před cestou zkontrolujte varování na safetravel.is a vedur.is - sopka je pod dohledem kvůli krátké době varování. V zimě jen s průvodcem.",
      pribehy: [
        { nazev: "Brána do očistce", text: "Středověcí mniši psali, že v kráteru Hekly slyší nářek duší." },
        { nazev: "Velikonoční čarodějnice", text: "Severský folklor posílal čarodějnice na Velikonoce na Heklu - tak jako české na Blaník nebo Brocken." }
      ]
    }
  },
  {
    id: "dimmuborgir",
    patch: {
      nazev: "Dimmuborgir",
      lead: "„Temné hrady“ u jezera Mývatn - lávové věže a jeskyně, kde podle islandského folkloru bydlí třináct vánočních skřítků a jejich matka, obryně Grýla.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Dimmuborgir je bludiště lávových sloupů, oblouků a jeskyní. Nejznámější je jeskyně Kirkjan (Kostel) s klenutým otvorem. Tvary připomínají zříceniny hradů, odtud jméno Temné hrady.",
        historie: "Útvary vznikly asi před 2 300 lety, kdy se láva rozlila do mokřadu, pára vytvořila komíny a láva z jezírka později odtekla. Zbyly stojící sloupy kolem bývalých parních průduchů.",
        legenda: "Podle islandských pověstí tu bydlí jólasveinar - třináct vánočních skřítků, kteří chodí do vesnic dělat neplechu, a jejich matka Grýla, která v lidové tradici jedla neposlušné děti. Jiná pověst tvrdí, že tudy vede cesta do pekla.",
        paranormalni: "V prosinci se tu konají akce s vánočními skřítky. Za šera se ve stínech sloupů snadno „objeví“ postavy.",
        skepticke: "Vznik útvarů je dobře vysvětlen geologicky. Skřítci jsou živou součástí islandské vánoční tradice, ne paranormální jev."
      },
      praktickeInfo: "Dimmuborgir leží asi 5 km od Reykjahlíðu u jezera Mývatn, z Akureyri je to zhruba hodina autem. Značené okruhy mají 1-3 km, vstup je zdarma. V zimě bývají stezky zledovatělé - vezměte nesmeky. Natáčela se tu i Hra o trůny.",
      pribehy: [
        { nazev: "Třináct skřítků", text: "Islandské děti dostávají 13 nocí před Vánocemi dárky od skřítků, kteří podle pověsti bydlí v Dimmuborgiru." },
        { nazev: "Kostel z lávy", text: "Jeskyně Kirkjan má klenbu tak pravidelnou, že jí místní dali jméno Kostel." }
      ]
    }
  },
  {
    id: "poulnabrone-dolmen",
    patch: {
      nazev: "Dolmen Poulnabrone",
      lead: "Přes 5 000 let stará portálová hrobka uprostřed vápencové pustiny Burren - jeden z nejfotografovanějších pravěkých monumentů Irska.",
      atmosfera: 4.4,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Na třech svislých kamenech leží šikmá krycí deska. Kolem se táhne holý vápencový povrch s puklinami, ve kterých rostou alpské i středomořské rostliny vedle sebe.",
        historie: "Hrobka vznikla v neolitu, zhruba mezi lety 3800 a 3200 př. n. l. Při výzkumu v letech 1985-1986, po prasknutí jednoho kamene, archeologové našli pozůstatky více než dvaceti lidí, dospělých i dětí.",
        legenda: "Lidová tradice nazývá podobné dolmeny lůžky Diarmuida a Gráinne, milenců z irské ságy, kteří prchali před králem a každou noc spali na jiném místě.",
        paranormalni: "Paranormální hlášení nejsou běžná. Návštěvníci mluví o tichu kamenné krajiny a o místě, kde se pohřbívalo po celá staletí.",
        skepticke: "Dolmen je pohřební stavba zemědělců doby kamenné. Spojení s Diarmuidem a Gráinne je pozdější folklor."
      },
      praktickeInfo: "Poulnabrone je v hrabství Clare, asi hodinu autem z Galway a 15 minut od vesnice Ballyvaughan. U silnice je malé parkoviště, k dolmenu vede krátká stezka. Na kameny nelezte - hrobka je chráněná. Kombinujte s Cliffs of Moher a jeskyní Aillwee.",
      pribehy: [
        { nazev: "Lůžko milenců", text: "Podle lidové tradice si v podobných dolmenech ustlali uprchlí milenci Diarmuid a Gráinne." },
        { nazev: "Prasklý kámen", text: "Výzkum v 80. letech umožnila až prasklina jednoho z kamenů - hrobka musela být opravena." }
      ]
    }
  },
  {
    id: "dunmore-cave",
    patch: {
      nazev: "Jeskyně Dunmore",
      lead: "Vápencová jeskyně u Kilkenny, kde podle letopisů Vikingové v roce 928 zabili tisíc lidí - archeologové tu našli kosti žen a dětí i ukrytý vikinský poklad.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup s průvodcem",
      popisy: {
        zahada: "Do jeskyně se sestupuje po strmých schodech do velké síně s krápníky, mezi nimiž vyniká obří Market Cross. Vlhké, chladné prostory nesou stopy jedné z nejkrvavějších epizod irských dějin.",
        historie: "Letopisy čtyř mistrů zapsaly, že v roce 928 Vikingové z Dublinu zabili v Dunmore tisíc lidí. Při výzkumech se našly kosti nejméně 44 lidí, většinou žen a dětí. V roce 1999 našel průvodce ve škvíře skrytý poklad stříbrných předmětů vikinského původu.",
        legenda: "Podle pověsti v jeskyni žila obludná kočka Luchtigern, kterou zabila žena bojovnice. Jeskyně je zmiňována jako jedno ze tří nejtemnějších míst Irska.",
        paranormalni: "Návštěvníci popisují tíživý pocit v hlubších částech, kde lidé zřejmě hledali úkryt. Průvodci vyprávějí o zvucích, které nikdo nedokáže vysvětlit.",
        skepticke: "Počet tisíc obětí z letopisů je pravděpodobně nadsazený, i když nálezy potvrzují tragédii. Zvuky způsobuje kapající voda a ozvěna."
      },
      praktickeInfo: "Jeskyně je asi 10 km severně od Kilkenny. Prohlídka s průvodcem trvá asi 45 minut a vede po strmých schodech dolů i zpět nahoru. Uvnitř je kolem 9 °C. Otevřeno je většinu roku, mimo sezónu jen o víkendech.",
      pribehy: [
        { nazev: "Stříbro ve škvíře", text: "V roce 1999 se ve skalní škvíře našel vikinský poklad stříbra, ukrytý zřejmě v den útoku." },
        { nazev: "Kočičí královna", text: "Pověst vypráví o obludné kočce Luchtigern, která v jeskyni vládla, dokud ji nezabila bojovnice." }
      ]
    }
  },
  {
    id: "oweynagat-cave",
    patch: {
      nazev: "Jeskyně Oweynagat",
      lead: "„Jeskyně koček“ v Rathcroghanu, vstup do keltského podsvětí, odkud podle mýtů o svátku Samhain vycházela Morrígan a nadpřirozené bytosti.",
      atmosfera: 4.8,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "střední",
      pristupnost: "jen s průvodcem",
      popisy: {
        zahada: "Úzký vstup pod polem vede do přírodní vápencové chodby. Nad vchodem leží kameny s ogamskými nápisy, mezi nimi jméno Fráech, syn Medb. Uvnitř je bláto, tma a těsný prostor.",
        historie: "Rathcroghan v hrabství Roscommon byl královským centrem provincie Connacht, sídlem legendární královny Medb. Oblast obsahuje desítky mohyl, valů a kruhových staveb. Jeskyně je zmiňována ve středověkých irských textech.",
        legenda: "V mýtech z jeskyně vycházela bohyně války Morrígan, divoká prasata, ptáci a další bytosti, které ničily úrodu. O svátku Samhain se tu otevírala hranice mezi světem živých a mrtvých. Proto bývá jeskyně označována za jedno z míst, kde vznikla tradice Halloweenu.",
        paranormalni: "Účastníci prohlídek popisují silný pocit, že vstupují do jiného světa. Na Samhain se tu konají slavnosti.",
        skepticke: "Spojení s počátky Halloweenu je zjednodušení - svátek má složitější vývoj. Pocity v jeskyni posiluje tma, úzký vstup a znalost mýtů."
      },
      praktickeInfo: "Jeskyně je na soukromém pozemku u vesnice Tulsk v hrabství Roscommon. Prohlídky pořádá Rathcroghan Visitor Centre, rezervace je nutná. Vezměte si staré oblečení, holinky a čelovku - lézt se musí po zemi. Z Dublinu je to asi 2 hodiny autem.",
      pribehy: [
        { nazev: "Brána o Samhainu", text: "Podle mýtů se o Samhainu otevírala brána a z jeskyně vycházela vojska podsvětí." },
        { nazev: "Jméno nad vchodem", text: "Ogamský nápis na kameni nad vchodem zmiňuje Fráecha, syna královny Medb." }
      ]
    }
  },
  {
    id: "vardo-witch-trials-memorial",
    patch: {
      nazev: "Památník Steilneset ve Vardø",
      lead: "Památník 91 obětem čarodějnických procesů v norském Finnmarku - dílo architekta Petera Zumthora a umělkyně Louise Bourgeois na arktickém pobřeží.",
      atmosfera: 4.7,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Na holém pobřeží stojí 125 metrů dlouhá dřevěná konstrukce s napnutou látkou. Uvnitř chodby visí 91 žárovek, každá u okna s příběhem jednoho odsouzeného. Vedle je skleněný pavilon s hořící židlí Louise Bourgeois.",
        historie: "V 17. století bylo ve Finnmarku popraveno za čarodějnictví 91 lidí - 77 žen a 14 mužů, mezi nimi mnoho Sámů. Obvinění se týkala hlavně bouří a ztroskotání lodí. Památník byl otevřen v roce 2011.",
        legenda: "Obžalované ženy podle záznamů „přiznaly“, že se slétaly na horu Domen u Vardø, kde tančily s ďáblem. Hora je dodnes místně označována jako vstup do pekla.",
        paranormalni: "Návštěvníci popisují v chodbě s žárovkami silný a dlouho doznívající pocit. Kombinace polárního světla a ticha dodává místu výjimečnou atmosféru.",
        skepticke: "„Přiznání“ byla vynucena mučením. Památník připomíná justiční vraždy, ne skutečné čarodějnictví."
      },
      praktickeInfo: "Vardø je ostrov na krajním severovýchodě Norska, spojený s pevninou podmořským tunelem. Zastavuje zde loď Hurtigruten, nejbližší letiště je ve Vardø a Vadsø. Památník je volně přístupný. Kombinujte s pevností Vardøhus.",
      pribehy: [
        { nazev: "91 světel", text: "Každá žárovka v chodbě patří jednomu odsouzenému a u ní visí krátký text o jeho osudu." },
        { nazev: "Bouře z lodí", text: "Většina obvinění se týkala bouří, které prý čarodějnice přivolaly na rybářské lodě." }
      ]
    }
  },
  {
    id: "tarxien-temples",
    patch: {
      nazev: "Chrámy Tarxien",
      lead: "Megalitické chrámy na Maltě starší než egyptské pyramidy - se spirálovými reliéfy, sochou obří „bohyně“ a oltářem, v němž ležel pazourkový nůž.",
      atmosfera: 4.4,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Komplex tvoří čtyři propojené chrámy s oltáři zdobenými spirálami a průvody zvířat. Stála tu socha mohutné postavy, z níž se dochovala jen spodní část - zřejmě symbol plodnosti.",
        historie: "Chrámy vznikly přibližně v letech 3150-2500 př. n. l. V roce 1914 na ně narazil zemědělec při orbě a v letech 1915-1919 je vykopal archeolog Themistocles Zammit. Na troskách chrámů později založili lidé doby bronzové pohřebiště žárových hrobů. Patří k památkám UNESCO Megalitické chrámy Malty.",
        legenda: "V jednom oltáři se našel pazourkový nůž a kosti zvířat, což vedlo ke spekulacím o obětech. Místní vyprávějí, že chrámy stavěli obři.",
        paranormalni: "Paranormální jevy nejsou hlášeny. Tajemství leží v tom, kdo chrámy stavěl a proč jejich kultura náhle zanikla.",
        skepticke: "Kosti patří obětovaným zvířatům, nikoli lidem. Pověst o obrech je běžné vysvětlení megalitů, archeologie ukazuje zemědělskou společnost."
      },
      praktickeInfo: "Tarxien leží v Paole, asi 5 km od Valletty, a je dostupný autobusem. Chrámy jsou chráněny střechou. Hned vedle je Hypogeum Ħal Saflieni - vstupenky do něj je nutné rezervovat týdny předem. Prohlídka Tarxienu trvá asi hodinu.",
      pribehy: [
        { nazev: "Pluh na chrámu", text: "Chrámy objevil zemědělec v roce 1914, když jeho pluh narážel na velké kameny." },
        { nazev: "Nůž v oltáři", text: "Ve výklenku oltáře ležel pazourkový nůž - jeden z nejznámějších nálezů maltské prehistorie." }
      ]
    }
  },
  {
    id: "fort-douaumont",
    patch: {
      nazev: "Pevnost Douaumont",
      lead: "Největší pevnost u Verdunu, kterou v roce 1916 obsadila hrstka německých vojáků téměř bez boje - a kde výbuch o několik měsíců později pohřbil stovky mužů ve zdech.",
      atmosfera: 4.8,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Betonové chodby pevnosti jsou vlhké, tmavé a studené. Na stěnách zůstaly nápisy vojáků. V jedné kasematě je zazděný hrob německých vojáků, kteří zemřeli při výbuchu.",
        historie: "25. února 1916 pevnost obsadila malá skupina německých vojáků, protože ji Francouzi skoro nebránili. 8. května 1916 zde výbuch munice zabil kolem 680 německých vojáků. Francouzi pevnost dobyli zpět 24. října 1916. Bitva u Verdunu si vyžádala statisíce obětí.",
        legenda: "Vypráví se, že v chodbách je dodnes slyšet kroky a hlasy vojáků. Nedaleké kostnice Douaumont uchovává ostatky asi 130 000 neidentifikovaných vojáků.",
        paranormalni: "Návštěvníci popisují náhlý chlad a pocit přítomnosti v zazděné kasematě. Pevnost se objevuje v pořadech o válečných duchách.",
        skepticke: "Chlad je dán betonovým podzemím a vlhkostí. Pocit tíživosti odpovídá znalosti historie místa."
      },
      praktickeInfo: "Pevnost leží asi 10 km severovýchodně od Verdunu. Prohlídka trvá asi hodinu, uvnitř je kolem 10 °C. Kombinujte s kostnicí Douaumont, Mémorial de Verdun a zaniklými vesnicemi, které nebyly obnoveny. Prosím chovejte se s respektem - jde o hrob.",
      pribehy: [
        { nazev: "Pevnost bez obránců", text: "Největší pevnost Verdunu obsadilo několik desítek Němců, protože ji Francouzi předtím odzbrojili." },
        { nazev: "Zazděný hrob", text: "Oběti výbuchu z května 1916 zůstaly pohřbeny v kasematě, která je dnes zazděná a slouží jako hrob." }
      ]
    }
  },
  {
    id: "mittelwerk-dora-tunnels",
    patch: {
      nazev: "Tunely Mittelbau-Dora",
      lead: "Podzemní továrna na rakety V-2 v hoře Kohnstein, kde vězni koncentračního tábora umírali po tisících - jedno z nejtemnějších technických podzemí Evropy.",
      atmosfera: 4.8,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "zdarma, tunely s průvodcem",
      popisy: {
        zahada: "Pod horou Kohnstein vede síť tunelů, ve kterých se montovaly rakety V-2. Část je zaplavená nebo zavalená. V přístupných chodbách leží zbytky raketových dílů.",
        historie: "Od srpna 1943 sem byli převezeni vězni, kteří tunely rozšiřovali a pracovali na raketách. Tábor Mittelbau-Dora prošlo kolem 60 000 vězňů a asi 20 000 z nich zemřelo. Na projektu se podíleli inženýři včetně Wernhera von Brauna, který později vedl americký vesmírný program.",
        legenda: "Mezi místními kolují příběhy o neprozkoumaných tunelech a ukrytých částech raket. Nejde ale o pověsti, které by měly podklad.",
        paranormalni: "Návštěvníci popisují v tunelech tíživou atmosféru. Památník klade důraz na úctu k obětem.",
        skepticke: "Skutečná historie místa je plně doložená a strašlivější než jakékoli pověsti. Zbytky raket jsou autentické válečné artefakty."
      },
      praktickeInfo: "Památník Mittelbau-Dora je u Nordhausenu v Durynsku, asi 1,5 hodiny autem z Erfurtu. Vstup je zdarma, do tunelů se chodí jen s průvodcem. Uvnitř je chladno. Je to místo paměti, ne turistická atrakce - chovejte se s respektem.",
      pribehy: [
        { nazev: "Rakety z podzemí", text: "V tunelech pod horou Kohnstein se montovaly rakety V-2, které dopadaly na Londýn a Antverpy." },
        { nazev: "Cena pokroku", text: "Na výrobě raket zemřelo víc lidí, než kolik jich zabily samotné rakety." }
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
