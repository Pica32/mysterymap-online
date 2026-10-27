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
    id: "dachstein-ice-cave",
    patch: {
      nazev: "Obří ledová jeskyně Dachstein",
      lead: "Ledový palác v hoře nad Hallstattem - místní se jeskyni dlouho vyhýbali, protože v ní prý sídlili zlí duchové.",
      atmosfera: 4.7,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup s průvodcem, sezónně",
      popisy: {
        zahada: "Uvnitř hory jsou sály plné ledových sloupů, ledopádů a zamrzlých jezer. Led je místy starý stovky let. Sály nesou jména z artušovských pověstí - Parsifalův dóm nebo Dóm krále Artuše.",
        historie: "Jeskyni prozkoumali speleologové v roce 1910 a brzy ji zpřístupnili. Je součástí oblasti UNESCO Hallstatt-Dachstein. Nedaleko je i Mamutí jeskyně a vyhlídka Five Fingers.",
        legenda: "Místní pastevci se vchodu do jeskyně vyhýbali, protože z něj vane ledový vítr. Věřili, že v hoře sídlí zlí duchové a obři, kteří střeží poklady.",
        paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou. Ledová tma a ozvěna tvoří tajemnou atmosféru.",
        skepticke: "Led vzniká, protože studený vzduch v zimě klesá do jeskyně a v létě v ní zůstává. Studený průvan vysvětluje pověsti o duších."
      },
      praktickeInfo: "Jeskyně je u Obertraunu, kousek od Hallstattu. Z údolí jede lanovka Krippenstein, od stanice je to asi 15 minut pěšky. Prohlídka trvá asi hodinu, uvnitř je kolem 0 °C, vezměte si bundu. Otevřeno zhruba od května do října.",
      pribehy: [
        { nazev: "Dech hory", text: "Z jeskyně vane ledový vítr, a pastevci proto věřili, že uvnitř dýchají zlí duchové." },
        { nazev: "Dóm krále Artuše", text: "Objevitelé dali ledovým sálům jména podle artušovských pověstí - Parsifal a král Artuš." }
      ]
    }
  },
  {
    id: "aletsch-glacier",
    patch: {
      nazev: "Aletschský ledovec",
      lead: "Největší ledovec Alp, dlouhý asi 20 kilometrů - podle vallisských pověstí v jeho ledu bloudí „ubohé duše“, které si odpykávají své hříchy.",
      atmosfera: 4.8,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "výborná",
      nebezpecnost: "střední",
      pristupnost: "volně přístupné, lanovky placené",
      popisy: {
        zahada: "Obrovská řeka ledu se táhne od Jungfrau dolů údolím. Na povrchu jsou vidět tmavé pruhy - morény. Ledovec se zmenšuje a každý rok ustupuje.",
        historie: "Ledovec je jádrem oblasti UNESCO Jungfrau-Aletsch. V minulosti se led rozšiřoval a ohrožoval vesnice, lidé se modlili za jeho zastavení. Dnes kvůli oteplování rychle taje.",
        legenda: "Podle vallisských pověstí jsou v ledu uvězněny „ubohé duše“ hříšníků. V noci prý z ledovce slyšet nářek a vzdechy. Místní věřili, že s modlitbami se duše vysvobodí.",
        paranormalni: "Zvuky z ledovce lidé dodnes popisují jako sténání. Ledovec skutečně praská a vydává zvuky.",
        skepticke: "Zvuky vydává pohybující se led a voda. Pověsti o duších vysvětlovaly hrozivý jev, kterému lidé nerozuměli."
      },
      praktickeInfo: "Nejlepší výhled je z Eggishornu, Bettmerhornu nebo Moosfluh, kam vedou lanovky z Fiesch, Bettmeralpu a Riederalpu. Začátek ledovce uvidíte z Jungfraujochu. Na ledovec choďte jen s horským vůdcem.",
      pribehy: [
        { nazev: "Ubohé duše v ledu", text: "V ledu prý bloudí duše hříšníků. V noci je slyšet jejich nářek." },
        { nazev: "Ustupující ledovec", text: "Kdysi se lidé modlili, aby ledovec přestal růst. Dnes se modlí, aby přestal tát." }
      ]
    }
  },
  {
    id: "trummelbach-falls",
    patch: {
      nazev: "Vodopády Trümmelbach",
      lead: "Deset ledovcových vodopádů hřmí uvnitř hory v údolí Lauterbrunnen - údolí, které prý inspirovalo Tolkiena k Roklince.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup, sezónně",
      popisy: {
        zahada: "Voda z ledovců Eigeru, Mönchu a Jungfrau se prodírá skalou v úzkých soutěskách. Výtah vyveze návštěvníky do nitra hory, kde řev vody přehluší hlas.",
        historie: "Vodopády byly zpřístupněny koncem 19. století a výtah v hoře přibyl později. Údolí Lauterbrunnen má 72 vodopádů. J. R. R. Tolkien zde v roce 1911 putoval a údolí ho prý inspirovalo k Roklince.",
        legenda: "Místní pověsti vyprávějí o horských skřítcích, kteří v soutěskách kovají. Hukot vody prý zní jako buchary trpaslíků.",
        paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou.",
        skepticke: "Hukot je zvuk tisíců litrů vody za sekundu v úzké soutěsce. Tolkienova inspirace je pravděpodobná, ale nepotvrdil ji přímo v díle."
      },
      praktickeInfo: "Vodopády jsou v údolí Lauterbrunnen, z Interlakenu jede vlak do Lauterbrunnenu a pak autobus. Otevřeno zhruba od dubna do listopadu. Uvnitř je vlhko a chladno, vezměte si bundu. Kombinujte s Jungfraujochem a Mürrenem.",
      pribehy: [
        { nazev: "Roklinka", text: "Tolkien putoval údolím Lauterbrunnen v roce 1911 - podle mnohých odtud pochází Roklinka z Pána prstenů." },
        { nazev: "Hora, která hřmí", text: "Uvnitř hory teče až 20 000 litrů vody za sekundu a hukot je slyšet zdaleka." }
      ]
    }
  },
  {
    id: "holloch-cave",
    patch: {
      nazev: "Jeskyně Hölloch",
      lead: "Jedna z nejdelších jeskyní světa ve švýcarském údolí Muotatal - v roce 1952 v ní povodeň uvěznila badatele na deset dní.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "střední",
      pristupnost: "jen s průvodcem",
      popisy: {
        zahada: "Chodby jeskyně jsou dlouhé přes 200 kilometrů a stále se objevují nové. Uvnitř jsou propasti, podzemní řeky a obří sály.",
        historie: "Jeskyni objevil v roce 1875 místní zemědělec Alois Ulrich. V roce 1952 badatele Alfreda Bögliho a jeho druhy uvěznila v jeskyni povodeň na deset dní. Přežili a později pokračovali v průzkumu.",
        legenda: "Jméno Hölloch znamená „pekelná díra“. Místní věřili, že jeskyně vede do pekla, a vyhýbali se jí.",
        paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou. Tma a délka jeskyně tvoří tajemnou atmosféru.",
        skepticke: "Jméno pochází nejspíš od slova pro kluzký vstup, ne od pekla. Jeskyně je dílem vody ve vápenci."
      },
      praktickeInfo: "Jeskyně je v údolí Muotatal, asi hodinu jízdy od Luzernu. Nabízejí se krátké prohlídky i vícedenní výpravy s přespáním v jeskyni. Je nutná rezervace a vhodné oblečení.",
      pribehy: [
        { nazev: "Deset dní ve tmě", text: "V roce 1952 povodeň zatarasila badatelům cestu ven. Deset dní čekali v jeskyni, než voda opadla." },
        { nazev: "Pekelná díra", text: "Místní věřili, že jeskyně vede do pekla - odtud její jméno Hölloch." }
      ]
    }
  },
  {
    id: "cinecitta-studios",
    patch: {
      nazev: "Studia Cinecittà",
      lead: "Filmové město v Římě, které založil Mussolini - natáčel se tu Ben Hur, Felliniho filmy i scény z Prázdnin v Římě.",
      atmosfera: 4.3,
      paranormalniAktivita: "filmová legenda",
      historickaDolozenost: "výborná",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup s průvodcem",
      popisy: {
        zahada: "Za branou studia stojí kulisy starověkého Říma, středověké ulice a renesanční náměstí. Ve studiu č. 5 natáčel Federico Fellini.",
        historie: "Studia založil v roce 1937 Mussolini, podle hesla „Film je nejsilnější zbraň“. Po válce sloužila několik let jako tábor pro uprchlíky. V 50. letech se tu natáčely americké velkofilmy jako Ben Hur, říkalo se jim „Hollywood na Tibeře“.",
        legenda: "Podle filmařských historek v kulisách bloudí duch Felliniho. Herci prý ve studiu 5 cítí jeho přítomnost.",
        paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou. Kouzlo místa je filmové.",
        skepticke: "Historky o duších jsou filmařská legenda. Historie studií je dobře zdokumentovaná."
      },
      praktickeInfo: "Cinecittà je na jihovýchodě Říma, metro linky A, stanice Cinecittà. Výstava Cinecittà si Mostra a prohlídky kulis s průvodcem. Ověřte otevírací dobu.",
      pribehy: [
        { nazev: "Hollywood na Tibeře", text: "V 50. letech sem přijížděli americké hvězdy a natáčel se tu Ben Hur s velkým závodem vozů." },
        { nazev: "Felliniho studio", text: "Ve studiu č. 5 natáčel Fellini své filmy, včetně slavného Sladkého života." }
      ]
    }
  },
  {
    id: "hatfield-house-film-rooms",
    patch: {
      nazev: "Hatfield House",
      lead: "Sídlo, kde se Alžběta I. dozvěděla, že je královnou - podle pověsti ji zpráva zastihla pod dubem v parku. Dnes oblíbená filmová kulisa.",
      atmosfera: 4.4,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "výborná",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup, sezónně",
      popisy: {
        zahada: "Jakobovský palác z červených cihel stojí v rozlehlém parku. Vedle něj je starý královský palác, kde vyrůstala princezna Alžběta.",
        historie: "Alžběta zde žila jako mladá princezna. V roce 1558 se tu dozvěděla o smrti své sestry Marie a o tom, že se stala královnou. Dnešní dům postavil v roce 1611 Robert Cecil a rodina Cecilů zde žije dodnes. Natáčely se zde filmy jako Favoritka nebo Shakespeare v lásce.",
        legenda: "Podle pověsti Alžběta seděla pod dubem v parku a četla, když jí přinesli zprávu o korunovaci. V domě prý straší Alžbětin duch.",
        paranormalni: "Zaměstnanci prý vídají ženskou postavu v chodbách starého paláce. Konkrétní doložené zprávy nejsou.",
        skepticke: "Příběh o dubu je tradice. Dub, který tu stál, uschl a dnes je zde jen jeho nástupce."
      },
      praktickeInfo: "Hatfield je asi 30 km severně od Londýna, vlak z King's Cross jede asi 20 minut. Dům je otevřen zhruba od dubna do září. Park je vhodný na procházku.",
      pribehy: [
        { nazev: "Zpráva pod dubem", text: "Princezna Alžběta prý četla pod dubem, když jí přinesli zprávu, že je královnou Anglie." },
        { nazev: "Filmová kulisa", text: "V sídle se natáčela řada filmů a seriálů, například Favoritka nebo Shakespeare v lásce." }
      ]
    }
  },
  {
    id: "lacock-abbey-film-cloisters",
    patch: {
      nazev: "Opatství Lacock",
      lead: "Středověké opatství, jehož chodby hrály Bradavice v Harrym Potterovi - a kde vznikla nejstarší dochovaná fotografie na negativu.",
      atmosfera: 4.5,
      paranormalniAktivita: "filmová a místní legenda",
      historickaDolozenost: "výborná",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Gotické ambity s klenbami působí jako z pohádky. V místnostech se natáčely scény Bradavic, například Zrcadlo z Erisedu a Snapeova učebna.",
        historie: "Opatství založila v roce 1232 Ela, hraběnka ze Salisbury. Po zrušení klášterů se stalo domovem. William Henry Fox Talbot zde v roce 1835 vyfotografoval okno - jde o nejstarší dochovaný negativ na světě. Vesnice Lacock je jako ze 18. století.",
        legenda: "Podle pověsti v opatství bloudí duch abatyše Ely. Návštěvníci rádi hledají místa, kde chodil Harry Potter.",
        paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou. Tajemství je filmové.",
        skepticke: "Opatství je dobře zdokumentované. Duch abatyše je místní tradice."
      },
      praktickeInfo: "Lacock je ve Wiltshiru, asi 20 km od Bathu. Opatství patří National Trust. Vesnice se objevila i ve filmech a seriálech. Kombinujte s Bathem a Stonehenge.",
      pribehy: [
        { nazev: "Bradavice", text: "V ambitech a místnostech opatství se natáčely chodby a učebny Bradavic z prvních filmů o Harrym Potterovi." },
        { nazev: "První negativ", text: "Fox Talbot zde v roce 1835 vyfotografoval okno - nejstarší dochovaný negativ fotografie." }
      ]
    }
  },
  {
    id: "oxford-christ-church-film-hall",
    patch: {
      nazev: "Christ Church v Oxfordu",
      lead: "Kolej, jejíž jídelna inspirovala Velkou síň v Bradavicích - a kde vznikla Alenka v říši divů.",
      atmosfera: 4.5,
      paranormalniAktivita: "literární legenda",
      historickaDolozenost: "výborná",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Velká síň s dlouhými stoly a portréty pod dřevěným stropem je předlohou filmové Velké síně v Bradavicích. Na schodišti se natáčelo uvítání prváků profesorkou McGonagallovou.",
        historie: "Kolej založil kardinál Wolsey v roce 1525, později ji obnovil Jindřich VIII. Učil zde matematik Charles Dodgson, který jako Lewis Carroll napsal Alenku v říši divů pro dceru děkana Alici Liddellovou.",
        legenda: "Podle tradice postavy Alenky vycházejí z koleje - králík, dveře a zahrada. V síni je okno s Alenkou a postavami z knihy.",
        paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou.",
        skepticke: "Síň ve filmu byla postavena ve studiu podle oxfordské předlohy, schodiště je skutečné."
      },
      praktickeInfo: "Christ Church je v centru Oxfordu, asi hodinu vlakem z Londýna. Síň bývá kvůli jídlu studentů v poledne zavřená, ověřte otevírací dobu. Kombinujte s knihovnou Bodleian.",
      pribehy: [
        { nazev: "Velká síň", text: "Jídelna koleje se stala předlohou pro Velkou síň v Bradavicích." },
        { nazev: "Alenka", text: "Charles Dodgson zde vyprávěl dceři děkana Alici příběhy, ze kterých vznikla Alenka v říši divů." }
      ]
    }
  },
  {
    id: "alnwick-castle-film-grounds",
    patch: {
      nazev: "Hrad Alnwick",
      lead: "Hrad, který v prvních filmech o Harrym Potterovi hrál Bradavice - a kde podle kroniky z 12. století řádil upír.",
      atmosfera: 4.5,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "výborná",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup, sezónně",
      popisy: {
        zahada: "Na nádvoří hradu se natáčely lekce létání na koštěti. Hrad je dodnes sídlem vévodů z Northumberlandu.",
        historie: "Hrad stojí od 11. století a od roku 1309 patří rodu Percyů. V prvních dvou filmech o Harrym Potterovi hrál Bradavice, objevil se i v seriálu Panství Downton.",
        legenda: "Kronikář William z Newburghu ve 12. století zapsal příběh o mrtvém muži, který vstával z hrobu a šířil nákazu. Lidé ho vykopali, probodli a spálili.",
        paranormalni: "Upír z Alnwicku je jeden z nejstarších zapsaných příběhů o upírech v Anglii.",
        skepticke: "Příběh odráží strach z epidemie. Šlo o lidovou víru, ne o skutečného upíra."
      },
      praktickeInfo: "Alnwick je v Northumberlandu, asi 55 km severně od Newcastlu. Hrad je otevřen od jara do podzimu. Na hradě si můžete vyzkoušet lekci létání na koštěti. Kombinujte s Alnwickou zahradou.",
      pribehy: [
        { nazev: "Lekce létání", text: "Na hradním nádvoří se Harry učil létat na koštěti - dnes si to tu mohou zkusit i návštěvníci." },
        { nazev: "Upír z kroniky", text: "Podle středověké kroniky mrtvý muž vstával z hrobu, dokud ho lidé nespálili." }
      ]
    }
  },
  {
    id: "longleat-hedge-maze",
    patch: {
      nazev: "Bludiště Longleat",
      lead: "Jedno z nejdelších živých bludišť světa u renesančního sídla, kde podle pověsti bloudí Zelená paní.",
      atmosfera: 4.3,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Bludiště z tisíců tisů má cestičky dlouhé skoro 3 kilometry a dřevěné mosty, ze kterých je vidět cíl. Najít cestu trvá i hodinu.",
        historie: "Bludiště vytvořil Greg Bright v roce 1975. Sídlo Longleat je renesanční dům ze 16. století. Jako první v Británii zde v roce 1966 otevřeli safari park.",
        legenda: "Podle pověsti v sídle bloudí Zelená paní - Louisa Carteret, jejíhož milence prý zabil žárlivý manžel a pohřbil ve sklepě.",
        paranormalni: "Zaměstnanci prý cítí v jedné chodbě chlad. Konkrétní doložené zprávy nejsou.",
        skepticke: "Příběh Zelené paní je rodová tradice. Bludiště je moderní zahradní dílo."
      },
      praktickeInfo: "Longleat je ve Wiltshiru, asi 30 km jižně od Bathu. Vstupenka zahrnuje dům, bludiště a safari park. Kombinujte s Bathem a Stonehenge.",
      pribehy: [
        { nazev: "Zelená paní", text: "Manžel lady Louisy prý zabil jejího milence a ona bloudí chodbou jako Zelená paní." },
        { nazev: "Bludiště z tisů", text: "Tisíce tisů tvoří bludiště, ve kterém hledání cíle může trvat i hodinu." }
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
