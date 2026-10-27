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
    id: "petrova-gora-monument",
    patch: {
      nazev: "Památník Petrova Gora",
      lead: "Futuristická věž v chorvatském lese, kdysi pokrytá lesklou ocelí - dnes vykradená kovová kostra, která připomíná vrak vesmírné lodi.",
      atmosfera: 4.7,
      paranormalniAktivita: "žádná",
      historickaDolozenost: "výborná",
      nebezpecnost: "střední (rozpadlé budovy)",
      pristupnost: "volně přístupné, dovnitř nevstupovat",
      popisy: {
        zahada: "Na vrcholu kopce v lese stojí vlnitá betonová stavba vysoká přes 30 metrů. Kdysi byla obložená nerezovou ocelí a uvnitř bylo muzeum. Dnes zůstala jen kostra s otvory.",
        historie: "Památník připomíná partyzánskou nemocnici, která se v lesích Petrovy Gory skrývala za druhé světové války, a oběti z regionu Kordun. Navrhli ho Vojin Bakić a Berislav Šerbetić, dokončen byl v roce 1981. Po válce v 90. letech zůstal opuštěný a lidé z něj odnesli ocel.",
        legenda: "Místní vyprávějí o tajné nemocnici, kterou Němci nikdy nenašli, a o podzemních bunkrech v lese. Nemocnice byla skutečná, ukrytá v zemljankách.",
        paranormalni: "Nadpřirozené jevy se nepopisují. Atmosféru tvoří opuštěnost a vítr hvízdající v kostře stavby.",
        skepticke: "Stavba je dílem modernistické architektury a historie partyzánské nemocnice je dobře doložená."
      },
      praktickeInfo: "Petrova Gora je asi 70 km jižně od Záhřebu, poblíž Vojniće. Na vrchol vede úzká silnice. Dovnitř nevstupujte - hrozí pád trosek. V lese jsou stezky k zemljankám nemocnice.",
      pribehy: [
        { nazev: "Nemocnice v lese", text: "Za války se v lesích ukrývala partyzánská nemocnice, kterou nepřítel nikdy nenašel." },
        { nazev: "Vykradená ocel", text: "Po válce v 90. letech lidé z památníku sundali ocelové obložení, zůstala jen kostra." }
      ]
    }
  },
  {
    id: "spomenik-tjentiste",
    patch: {
      nazev: "Spomenik Tjentište",
      lead: "Dva obří betonové bloky v Údolí hrdinů v národním parku Sutjeska - připomínají jednu z nejkrvavějších bitev partyzánů v roce 1943.",
      atmosfera: 4.7,
      paranormalniAktivita: "žádná",
      historickaDolozenost: "výborná",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Na louce mezi horami stojí dvě rozevřené betonové skály. Mezi nimi vede cesta, jako by se horská krajina rozestoupila. Kolem jsou kamenné bloky se jmény padlých.",
        historie: "V červnu 1943 se partyzáni vedení Titem probíjeli z obklíčení německých a italských vojsk. Bitva na Sutjesce stála život tisíce partyzánů. Památník podle návrhu sochaře Miodraga Živkoviće byl odhalen v roce 1971.",
        legenda: "Podle místních vyprávění se na louce v noci ozývají kroky a hlasy. Památník měl připomínat průlom skrz skály.",
        paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou. Tajemství tvoří rozměr stavby a ticho hor.",
        skepticke: "Bitva je historicky doložená. Památník je umělecké dílo jugoslávské modernistické architektury."
      },
      praktickeInfo: "Tjentište je v národním parku Sutjeska u silnice z Foči do Gacka. Vstup je zdarma. Nedaleko je muzeum bitvy a vyhlídky na vodopád Skakavac a horu Maglić.",
      pribehy: [
        { nazev: "Průlom", text: "Dvě betonové skály symbolizují průlom, kterým se partyzáni probili z obklíčení." },
        { nazev: "Údolí hrdinů", text: "V údolí jsou pohřbeny tisíce padlých, jejich jména jsou na kamenných blocích kolem." }
      ]
    }
  },
  {
    id: "kosmaj-monument",
    patch: {
      nazev: "Památník na Kosmaji",
      lead: "Pět 40 metrů vysokých betonových hrotů v lese nad Bělehradem - spomenik, který vypadá jako přistávající kosmická loď.",
      atmosfera: 4.6,
      paranormalniAktivita: "žádná",
      historickaDolozenost: "výborná",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Na vrcholu hory Kosmaj stojí pět spojených betonových křídel, která se rozevírají ke středu. Z některých úhlů připomínají hvězdu, z jiných raketu.",
        historie: "Památník byl odhalen v roce 1971 na počest partyzánského oddílu z Kosmaje. Navrhli ho sochař Vojin Stojić a architekt Gradimir Medaković.",
        legenda: "Lidé o památníku vyprávějí jako o místě, kde se scházeli UFO nadšenci. Jeho tvar inspiroval sci-fi příběhy.",
        paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou.",
        skepticke: "Památník je ukázkou jugoslávské abstraktní architektury, nemá nic společného s mimozemšťany."
      },
      praktickeInfo: "Kosmaj je asi 50 km jižně od Bělehradu u Sopotu. K památníku vede lesní cesta od parkoviště asi 10 minut. Vstup zdarma.",
      pribehy: [
        { nazev: "Hvězda v lese", text: "Pět betonových křídel tvoří z výšky hvězdu - symbol partyzánů." },
        { nazev: "Kosmická loď", text: "Návštěvníci často říkají, že památník vypadá jako kosmická loď, která přistála v lese." }
      ]
    }
  },
  {
    id: "kadinjaca-memorial",
    patch: {
      nazev: "Památník Kadinjača",
      lead: "Betonová krajina u Užice připomínající Dělnický prapor, který v listopadu 1941 bojoval do posledního muže.",
      atmosfera: 4.5,
      paranormalniAktivita: "žádná",
      historickaDolozenost: "výborná",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Na kopci stojí řada betonových kvádrů a stél, které vedou k ostrým tvarům připomínajícím skály. Cesta mezi nimi stoupá k vrcholu.",
        historie: "V listopadu 1941 zde Dělnický prapor z Užice kryl ústup partyzánů z takzvané Užické republiky. Většina bojovníků padla. Památník podle návrhu sochaře Miodraga Živkoviće byl odhalen v roce 1979.",
        legenda: "Podle vyprávění bojovníci zpívali, když šli do posledního boje. Památník vyjadřuje jejich odvahu.",
        paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou.",
        skepticke: "Bitva je historicky doložená. Památník je modernistická socha v krajině."
      },
      praktickeInfo: "Kadinjača je asi 14 km západně od Užice u silnice na Bajinu Baštu. Vstup zdarma. Kombinujte s Užicem a národním parkem Tara.",
      pribehy: [
        { nazev: "Dělnický prapor", text: "Bojovníci z Užice kryli ústup partyzánů a většina z nich padla." },
        { nazev: "Cesta k vrcholu", text: "Návštěvník stoupá mezi betonovými bloky jako bojovníci k poslednímu boji." }
      ]
    }
  },
  {
    id: "ilinden-makedonium",
    patch: {
      nazev: "Makedonium v Kruševu",
      lead: "Kulovitý památník nad Kruševem, který vypadá jako přistávající mimozemská loď - připomíná Ilindenské povstání z roku 1903.",
      atmosfera: 4.6,
      paranormalniAktivita: "žádná",
      historickaDolozenost: "výborná",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Bílá kopule je pokrytá hroty a okny z barevného skla. Uvnitř je kruhový prostor se světlem, které padá dolů z okének. Kolem jsou betonové tvary jako přetržené řetězy.",
        historie: "Památník byl postaven v roce 1974 podle návrhu Jordana a Iskry Grabulových. Připomíná Ilindenské povstání proti Osmanům v roce 1903, kdy povstalci vyhlásili v Kruševu krátce trvající republiku.",
        legenda: "Kruševská republika trvala jen deset dní, než ji Osmané potlačili. Památník je pro Makedonce symbolem svobody.",
        paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou. Lidé památníku přezdívají UFO.",
        skepticke: "Stavba je umělecké dílo jugoslávské architektury. Historie povstání je dobře doložená."
      },
      praktickeInfo: "Kruševo je horské město asi 50 km od Bitoly. Památník je nad městem, vstup do kopule je placený. Kruševo je také známé tradiční architekturou a lyžováním.",
      pribehy: [
        { nazev: "Desetidenní republika", text: "V roce 1903 vyhlásili povstalci v Kruševu republiku, která trvala jen deset dní." },
        { nazev: "UFO nad městem", text: "Díky kulatému tvaru s hroty se památníku mezi místními i turisty přezdívá UFO." }
      ]
    }
  },
  {
    id: "ufo-monument-shumen",
    patch: {
      nazev: "Památník Tvůrcům bulharského státu",
      lead: "Gigantický betonový monument na plošině nad Šumenem, postavený k 1300. výročí Bulharska - z dálky připomíná přistávající kosmickou stavbu.",
      atmosfera: 4.5,
      paranormalniAktivita: "žádná",
      historickaDolozenost: "výborná",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Na plošině nad městem se zvedají obří betonové postavy chánů a carů středověkého Bulharska. Uvnitř jsou mozaiky. Ke stavbě vede dlouhé schodiště.",
        historie: "Památník byl dokončen v roce 1981 k 1300. výročí založení bulharského státu. Je to jeden z největších monumentů socialistického Bulharska.",
        legenda: "Lidé památníku přezdívají UFO, protože z dálky vypadá jako přistávající kosmická loď. Podobně se mluví i o Buzludže.",
        paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou.",
        skepticke: "Památník je socialistická architektura a s UFO nemá nic společného."
      },
      praktickeInfo: "Šumen je na severovýchodě Bulharska, asi 90 km od Varny. K památníku vede schodiště z města nebo silnice. Vstup je placený. Kombinujte s pevností Šumen a Madarským jezdcem.",
      pribehy: [
        { nazev: "1300 let Bulharska", text: "Monument vznikl k oslavě 1300. výročí založení bulharského státu v roce 681." },
        { nazev: "UFO nad Šumenem", text: "Z dálky působí jako kosmická stavba, a tak se mu přezdívá UFO." }
      ]
    }
  },
  {
    id: "kokino-observatory",
    patch: {
      nazev: "Kokino",
      lead: "Pravěká observatoř z doby bronzové na skalním vrcholu v Severní Makedonii - kamenné značky sledovaly východ slunce a měsíce.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Na vrcholu sopečného kopce jsou skály se zářezy. Z vyrytých sedátek je vidět, jak slunce v určité dny vychází přesně ve značkách na obzoru.",
        historie: "Naleziště objevil archeolog Jovica Stankovski v roce 2001. Podle výzkumu bylo využíváno zhruba od roku 1800 př. n. l. Archeologové zde našli střepy nádob, které sem lidé nosili jako dary.",
        legenda: "Lidé věří, že zde starověcí kněží sledovali slunovraty a určovali čas setí a sklizně.",
        paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou.",
        skepticke: "Interpretace jako observatoř je podložená měřením, ale někteří odborníci ji považují za přehnanou."
      },
      praktickeInfo: "Kokino je asi 30 km severovýchodně od Kumanova. K nalezišti vede polní cesta a pak krátký výstup. Vstup zdarma. Nejzajímavější je při východu slunce o slunovratu.",
      pribehy: [
        { nazev: "Sluneční značky", text: "V určité dny slunce vychází přesně v zářezech skal - podle archeologů záměrně." },
        { nazev: "Dary bohům", text: "Archeologové našli spousty střepů nádob, které sem lidé nosili jako dary." }
      ]
    }
  },
  {
    id: "markovi-kuli-prilep",
    patch: {
      nazev: "Markovy věže v Prilepu",
      lead: "Zříceniny pevnosti krále Marka mezi obřími žulovými balvany nad Prilepem - hrdina balkánských písní prý házel kameny jako oblázky.",
      atmosfera: 4.5,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Na kopci nad městem leží obrovské oblé balvany, mezi kterými jsou zdi a věže pevnosti. Zdá se, že balvany někdo rozházel.",
        historie: "Pevnost ve 14. století patřila králi Markovi, synovi krále Vukašina. Marko byl vazalem Osmanů a zemřel v bitvě v roce 1395.",
        legenda: "V balkánských písních je Marko obr s nadlidskou silou, který jezdí na koni Šarcovi. Balvany prý rozházel, když si hrál. Podle pověsti Marko nezemřel, ale spí v jeskyni a jednou se vrátí.",
        paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou.",
        skepticke: "Balvany jsou přírodní útvary vzniklé zvětráváním žuly. Skutečný Marko se od legendárního hrdiny liší."
      },
      praktickeInfo: "Markovy věže jsou nad Prilepem, cesta pěšky z města trvá asi 40 minut. Vstup zdarma. Nejhezčí je při západu slunce. Kombinujte s klášterem Treskavec.",
      pribehy: [
        { nazev: "Obrovy oblázky", text: "Král Marko prý házel balvany jako oblázky - proto jich je kolem pevnosti tolik." },
        { nazev: "Spící král", text: "Podle pověsti Marko nezemřel, ale spí v jeskyni a jednou se vrátí." }
      ]
    }
  },
  {
    id: "blagaj-tekija",
    patch: {
      nazev: "Tekija v Blagaji",
      lead: "Dervišský dům pod 200 metrů vysokou skálou u vývěru řeky Buny - jednoho z největších krasových pramenů Evropy.",
      atmosfera: 4.8,
      paranormalniAktivita: "duchovní tradice",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Bílý dům s dřevěnými balkony stojí na břehu průzračné řeky, která vytéká přímo z jeskyně pod skálou. Voda je ledová a tmavě modrá.",
        historie: "Tekiju - dům dervišů - postavili v 16. století. Sloužila súfijskému řádu k modlitbám a meditaci. Na skále nad ní stojí zřícenina hradu Stjepan Grad.",
        legenda: "Podle pověsti v jeskyni žil drak, kterého zabil hrdina. Derviši věřili, že místo je posvátné kvůli síle vody.",
        paranormalni: "Poutníci zde vyprávějí o pocitu klidu. Jde o duchovní tradici, ne o nadpřirozené jevy.",
        skepticke: "Drak je legenda. Pramen je krasový jev, kde podzemní voda vyvěrá na povrch."
      },
      praktickeInfo: "Blagaj je asi 12 km jižně od Mostaru. Vstup do tekiji je placený, ženy dostanou šátek. Na řece můžete jet lodičkou ke vchodu do jeskyně. Na břehu jsou restaurace s pstruhy.",
      pribehy: [
        { nazev: "Drak v jeskyni", text: "Podle pověsti v jeskyni pod skálou žil drak, kterého zabil hrdina." },
        { nazev: "Řeka ze skály", text: "Řeka Buna vytéká přímo ze skály a hned je dost velká, aby po ní jezdily lodě." }
      ]
    }
  },
  {
    id: "vjetrenica-cave",
    patch: {
      nazev: "Jeskyně Vjetrenica",
      lead: "Největší jeskyně Bosny a Hercegoviny, ze které neustále vane vítr - patří k místům s nejbohatší podzemní faunou na světě.",
      atmosfera: 4.5,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "jen s průvodcem",
      popisy: {
        zahada: "U vchodu do jeskyně fouká silný vítr, který podle ročního období proudí ven nebo dovnitř. Chodby jsou dlouhé přes 7 kilometrů s jezírky a krápníky.",
        historie: "Jeskyni zmiňoval již římský autor Plinius starší. Moderní průzkum začal v 19. století. Žije v ní velké množství endemických živočichů, například macarát jeskynní.",
        legenda: "Místní věřili, že vítr přichází z moře podzemními chodbami. Podle pověsti jeskyně vede až k Jadranu.",
        paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou.",
        skepticke: "Vítr způsobuje rozdíl teplot uvnitř a venku. Spojení s mořem není prokázané."
      },
      praktickeInfo: "Vjetrenica je u vesnice Zavala v Popově poli, asi 60 km od Dubrovníku. Prohlídky s průvodcem trvají asi hodinu. Uvnitř je chladno.",
      pribehy: [
        { nazev: "Dech jeskyně", text: "U vchodu fouká vítr tak silný, že zhasne svíčka - jeskyně jako by dýchala." },
        { nazev: "Cesta k moři", text: "Místní věřili, že chodby vedou až k Jadranu, odkud přichází vítr." }
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
