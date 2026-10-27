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
    id: "thrihnukagigur-volcano",
    patch: {
      nazev: "Sopka Þríhnúkagígur",
      lead: "Jediná sopka na světě, kde můžete sjet výtahem 120 metrů dolů do prázdného magmatického krbu.",
      atmosfera: 4.8,
      paranormalniAktivita: "žádná",
      historickaDolozenost: "výborná",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup, jen s průvodcem, sezónně",
      popisy: {
        zahada: "Uvnitř spící sopky je obrovská dutina, kudy kdysi proudilo magma. Stěny září červenou, žlutou a zelenou barvou minerálů. Do nitra se sjíždí otevřeným výtahem kráterem.",
        historie: "Sopka naposledy vybuchla asi před 4 000 lety. Obvykle magma po výbuchu ztuhne, tady ale odteklo a zůstala prázdná komora. Speleolog Árni B. Stefánsson ji prozkoumal v roce 1974 a od roku 2012 sem jezdí turisté.",
        legenda: "Islanďané věřili, že v sopkách sídlí síly podsvětí. Krátery považovali za brány do jiného světa.",
        paranormalni: "Nadpřirozené jevy se nepopisují. Pocit, že stojíte uvnitř sopky, je sám o sobě neskutečný.",
        skepticke: "Sopka je spící a vědci ji sledují. Prázdná komora je vzácný, ale vysvětlitelný jev."
      },
      praktickeInfo: "Sopka je v oblasti Bláfjöll asi 30 km od Reykjavíku. Výpravy s odvozem z Reykjavíku jezdí zhruba od května do října. K sopce se jde asi 45 minut lávovým polem. Rezervujte předem.",
      pribehy: [
        { nazev: "Prázdná komora", text: "Magma po výbuchu odteklo pryč, a tak zůstala obří prázdná dutina, do které se dá sjet výtahem." },
        { nazev: "Barvy podzemí", text: "Stěny magmatické komory hrají červenou, žlutou a zelenou barvou minerálů." }
      ]
    }
  },
  {
    id: "kerid-crater",
    patch: {
      nazev: "Kráter Kerið",
      lead: "Sopečný kráter s rudými svahy a tyrkysovým jezerem na trase Zlatého okruhu - je starý asi 3 000 let.",
      atmosfera: 4.4,
      paranormalniAktivita: "islandské lidové pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "malé vstupné",
      popisy: {
        zahada: "Oválný kráter má rudé a černé svahy porostlé mechem. Na dně je jezero, jehož barva se mění od tyrkysové po tmavě zelenou podle světla.",
        historie: "Kráter vznikl asi před 3 000 lety. Je hluboký kolem 55 metrů. Je to jeden z nejlépe zachovaných kráterů na Islandu a součást trasy Zlatý okruh.",
        legenda: "Podle islandských pověstí v lávových polích kolem žijí elfové a skrytý lid. Hladina jezera prý klesá a stoupá spolu s okolními jezery.",
        paranormalni: "Nadpřirozené jevy se nepopisují. Islanďané berou skrytý lid jako součást krajiny.",
        skepticke: "Hladina jezera souvisí s hladinou podzemní vody. Pověsti o elfech jsou součástí islandského folkloru."
      },
      praktickeInfo: "Kerið je u silnice 35 na Zlatém okruhu, asi hodinu jízdy od Reykjavíku. Stezka vede kolem okraje i dolů k jezeru. Platí se malé vstupné. Kombinujte s Gullfossem a Geysirem.",
      pribehy: [
        { nazev: "Barva jezera", text: "Voda v kráteru mění barvu od tyrkysové po tmavě zelenou podle minerálů a světla." },
        { nazev: "Skrytý lid", text: "Podle islandské víry v lávových polích kolem kráteru žijí elfové a skrytý lid." }
      ]
    }
  },
  {
    id: "glymur-waterfall",
    patch: {
      nazev: "Vodopád Glymur",
      lead: "Druhý nejvyšší vodopád Islandu (198 m) - podle pověsti sem připlula zlá velryba a zahynula v jezeře nad ním.",
      atmosfera: 4.7,
      paranormalniAktivita: "islandské lidové pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "střední (náročná túra, počasí)",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Voda padá do úzkého kaňonu porostlého mechem, v mlze ptáků a duh. Cesta k vodopádu vede jeskyní a přes řeku po kládě.",
        historie: "Glymur byl dlouho považován za nejvyšší vodopád Islandu. Vodopád je v oblasti fjordu Hvalfjörður, jehož jméno znamená „Velrybí fjord“.",
        legenda: "Podle pověsti byl muž proměněn v zlou velrybu s rudou hlavou, která potápěla lodě a zabila syny kněze. Kněz ji lstí vylákal z fjordu proti proudu až přes vodopád do jezera Hvalvatn, kde zahynula. U jezera prý našli obří velrybí kosti.",
        paranormalni: "Nadpřirozené jevy se nepopisují. Pověst vysvětluje jména fjordu a jezera.",
        skepticke: "Velryba nemůže vyplout proti proudu přes vodopád. Kosti u jezera mohou být fosilní."
      },
      praktickeInfo: "Glymur je asi hodinu jízdy od Reykjavíku. Túra tam a zpět trvá 3–4 hodiny, je strmá a místy podél srázu. Kláda přes řeku je jen v létě. Za deště a v zimě se túra nedoporučuje.",
      pribehy: [
        { nazev: "Rudohlavá velryba", text: "Zlá velryba prý připlula fjordem až pod vodopád. Kněz ji vylákal nahoru a v jezeře zahynula." },
        { nazev: "Kláda přes řeku", text: "Cesta k vodopádu vede přes řeku po kládě a lanu - jen v létě." }
      ]
    }
  },
  {
    id: "hraunfossar",
    patch: {
      nazev: "Hraunfossar a Barnafoss",
      lead: "Desítky pramínků vytékají přímo z lávového pole - a vedlejší vodopád Barnafoss nese jméno po dvou dětech, které zde zahynuly.",
      atmosfera: 4.6,
      paranormalniAktivita: "islandské lidové pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Voda prosakuje lávou a vytéká v desítkách malých vodopádů na kilometr dlouhém úseku řeky. Řeka má tyrkysovou barvu ledovcové vody.",
        historie: "Láva pochází z výbuchu sopky pod ledovcem Langjökull. Voda protéká pórovitou lávou a vytéká na povrch až u řeky Hvítá.",
        legenda: "Podle pověsti se dvě děti rozběhly přes přírodní kamenný most nad vodopádem Barnafoss a spadly do vody. Jejich matka nechala most zbořit, aby už nikdo nezahynul. Odtud jméno „Dětský vodopád“.",
        paranormalni: "Nadpřirozené jevy se nepopisují. Pověst varuje před nebezpečnou řekou.",
        skepticke: "Kamenný most mohla zbořit i voda. Pověst se těžko ověřuje, ale řeka je skutečně divoká."
      },
      praktickeInfo: "Hraunfossar je v západním Islandu, asi 2 hodiny jízdy od Reykjavíku. Vyhlídky jsou zdarma u parkoviště. Kombinujte s lávovou jeskyní Víðgelmir a horkým pramenem Deildartunguhver.",
      pribehy: [
        { nazev: "Dětský vodopád", text: "Dvě děti spadly z kamenného mostu do vody. Matka pak most zbořila - odtud jméno Barnafoss." },
        { nazev: "Voda z lávy", text: "Voda prosakuje lávovým polem a vytéká z něj v desítkách malých vodopádů." }
      ]
    }
  },
  {
    id: "raufarholshellir-lava-tunnel",
    patch: {
      nazev: "Lávový tunel Raufarhólshellir",
      lead: "Jeden z nejdelších lávových tunelů Islandu, jen 30 minut od Reykjavíku - chodbou kdysi tekla žhavá láva.",
      atmosfera: 4.5,
      paranormalniAktivita: "islandské lidové pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup s průvodcem",
      popisy: {
        zahada: "Tunel je dlouhý asi 1 360 metrů. Na stěnách jsou barevné vrstvy a krápníky z lávy. Světlo dovnitř padá zřícenými otvory ve stropě.",
        historie: "Tunel vznikl při výbuchu před asi 5 200 lety, když se láva na povrchu ochladila a pod ní dál tekla. Prohlídky s průvodcem se konají od roku 2017.",
        legenda: "Islanďané věřili, že v jeskyních žijí trolové a psanci. V jeskyních se ve skutečnosti skrývali lidé vyhnaní ze společnosti.",
        paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou.",
        skepticke: "Lávové tunely vznikají přirozeně. Trolové jsou součástí islandského folkloru."
      },
      praktickeInfo: "Tunel je asi 30 minut jízdy od Reykjavíku u silnice na Þorlákshöfn. Prohlídky s průvodcem trvají asi hodinu, jsou celoročně. Uvnitř je chladno a kluzko, vezměte si pevné boty.",
      pribehy: [
        { nazev: "Řeka lávy", text: "Před tisíci lety tekla tunelem žhavá láva. Když odtekla, zůstala dlouhá chodba." },
        { nazev: "Úkryt psanců", text: "V islandských jeskyních se kdysi skrývali lidé vyhnaní ze společnosti - a z nich vznikly pověsti o trolech." }
      ]
    }
  },
  {
    id: "fagradalsfjall-lava-field",
    patch: {
      nazev: "Lávové pole Fagradalsfjall",
      lead: "Nejmladší lávové pole Islandu nedaleko letiště Keflavík - od roku 2021 zde opakovaně vybuchují sopky.",
      atmosfera: 4.7,
      paranormalniAktivita: "žádná",
      historickaDolozenost: "výborná",
      nebezpecnost: "vysoká podle zóny a pravidel",
      pristupnost: "volně přístupné podle aktuální situace",
      popisy: {
        zahada: "Černá láva ještě kouří a mění krajinu. Na poloostrově Reykjanes se po téměř 800 letech probudily sopky.",
        historie: "V březnu 2021 začala erupce u hory Fagradalsfjall, následovaly další v letech 2022 a 2023. Od konce roku 2023 vybuchují sopky u Sundhnúkuru a ohrožují městečko Grindavík.",
        legenda: "Islanďané odedávna žijí se sopkami. Ve starých pověstech jsou sopky branou do pekla.",
        paranormalni: "Nadpřirozené jevy se nepopisují. Pohled na žhavou lávu je sám o sobě neskutečný.",
        skepticke: "Erupce jsou sledované vědci. Hrozby jsou skutečné - plyny, láva a praskliny."
      },
      praktickeInfo: "Oblast je asi 40 minut od Reykjavíku a kousek od letiště. Před cestou vždy zkontrolujte safetravel.is a pokyny úřadů - oblast se uzavírá. Nechoďte na čerstvou lávu a dávejte pozor na sopečné plyny.",
      pribehy: [
        { nazev: "Probuzení po 800 letech", text: "V roce 2021 se poloostrov Reykjanes probudil po téměř 800 letech klidu." },
        { nazev: "Láva u letiště", text: "Erupce jsou tak blízko letiště, že je někdy vidět i z letadla." }
      ]
    }
  },
  {
    id: "snaefellsjokull",
    patch: {
      nazev: "Snæfellsjökull",
      lead: "Ledovcová sopka, kde podle Julese Verna začíná Cesta do středu Země - v roce 1993 tu stovky lidí čekaly na přistání mimozemšťanů.",
      atmosfera: 4.8,
      paranormalniAktivita: "konspirační a esoterické teorie",
      historickaDolozenost: "výborná",
      nebezpecnost: "střední",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Bílý kužel ledovce na konci poloostrova Snæfellsnes je za jasného dne vidět i z Reykjavíku. Esoterici ho považují za jedno z energetických center Země.",
        historie: "Sopka je vysoká asi 1 446 metrů a je součástí národního parku. Jules Verne v románu Cesta do středu Země (1864) umístil vstup do podzemí do jejího kráteru.",
        legenda: "Podle ságy na hoře žije Bárður, napůl obr, napůl člověk, který chrání kraj. 5. listopadu 1993 se pod ledovcem shromáždily stovky lidí, protože se šířila zpráva o přistání UFO. Nic nepřiletělo.",
        paranormalni: "Ezoterici mluví o zvláštní energii a světlech nad ledovcem. Konkrétní doložené jevy nejsou.",
        skepticke: "„Přistání UFO“ v roce 1993 se nekonalo. Energie hory není vědecky doložena."
      },
      praktickeInfo: "Poloostrov Snæfellsnes je asi 2 hodiny jízdy od Reykjavíku. Na ledovec jen s průvodcem. Kolem vede okruh s vesnicemi Arnarstapi a Hellnar, horou Kirkjufell a černými plážemi.",
      pribehy: [
        { nazev: "Cesta do středu Země", text: "Verneovi hrdinové sestupují do nitra Země právě kráterem Snæfellsjökullu." },
        { nazev: "Čekání na UFO", text: "V listopadu 1993 čekaly pod ledovcem stovky lidí na mimozemšťany. Nepřišli." }
      ]
    }
  },
  {
    id: "leidarendi-lava-cave",
    patch: {
      nazev: "Lávová jeskyně Leiðarendi",
      lead: "Malá lávová jeskyně u Reykjavíku, jejíž jméno znamená „konec cesty“ - našli v ní kostru ovce, která sem zabloudila.",
      atmosfera: 4.3,
      paranormalniAktivita: "islandské lidové pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "střední",
      pristupnost: "jen s průvodcem doporučeno",
      popisy: {
        zahada: "Jeskyně je lávový tunel s barevnými stěnami, lávovými krápníky a místy úzkými průchody, kde se musí lézt.",
        historie: "Jeskyně vznikla při výbuchu asi před 2 000 lety. Jméno dostala podle kostry ovce, kterou zde našli - pro ni to byl skutečně konec cesty.",
        legenda: "Podle islandských pověstí jeskyně ukrývají trolly a psance. Na ovci si prý počkal trol.",
        paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou.",
        skepticke: "Ovce zabloudila a nenašla cestu ven. Trolové jsou folklor."
      },
      praktickeInfo: "Jeskyně je u silnice do lyžařského areálu Bláfjöll, asi 30 minut od Reykjavíku. Doporučuje se jít s průvodcem, který zapůjčí helmu a světlo. Uvnitř je chladno a kluzko.",
      pribehy: [
        { nazev: "Konec cesty", text: "Jeskyně se jmenuje „konec cesty“ podle ovce, která v ní zabloudila a zahynula." },
        { nazev: "Lezení tmou", text: "Některé průchody jsou tak nízké, že se musí lézt po čtyřech." }
      ]
    }
  },
  {
    id: "gjain",
    patch: {
      nazev: "Gjáin",
      lead: "Skryté zelené údolí s vodopády uprostřed pouště z popela pod sopkou Hekla - natáčela se tu Hra o trůny.",
      atmosfera: 4.6,
      paranormalniAktivita: "islandské lidové pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Uprostřed černé pouště je malé údolí s malými vodopády, jezírky a zeleným mechem. Působí jako tajná zahrada.",
        historie: "Údolí leží v Þjórsárdaluru. Nedaleko je vikinská farma Stöng, kterou v roce 1104 zasypal popel ze sopky Hekla. Ve středověku se Hekle říkalo brána do pekla.",
        legenda: "Podle pověstí v údolí žijí elfové. Hekla byla podle středověkých autorů místem, kudy duše odcházejí do pekla.",
        paranormalni: "Nadpřirozené jevy se nepopisují. Kouzlo údolí tvoří ticho, vodopády a kontrast s černou pouští.",
        skepticke: "Údolí je přirozená oáza vzniklá vodou a lávou. Hekla je skutečná aktivní sopka."
      },
      praktickeInfo: "Gjáin je v údolí Þjórsárdalur, asi 2 hodiny od Reykjavíku. Poslední úsek je štěrková cesta, pro auta 4x4. Kombinujte s farmou Stöng a vodopádem Háifoss.",
      pribehy: [
        { nazev: "Hra o trůny", text: "V údolí Gjáin se natáčely scény seriálu Hra o trůny." },
        { nazev: "Brána do pekla", text: "Středověcí Evropané věřili, že sopka Hekla nad údolím je bránou do pekla." }
      ]
    }
  },
  {
    id: "helgafell-iceland",
    patch: {
      nazev: "Helgafell - kopec tří přání",
      lead: "Malý svatý kopec na Snæfellsnesu - kdo na něj vystoupí mlčky a bez ohlédnutí, tomu se prý splní tři přání.",
      atmosfera: 4.4,
      paranormalniAktivita: "islandské lidové pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "malé vstupné",
      popisy: {
        zahada: "Nízký kopec má výhled na fjord a ostrovy. Na vrcholu jsou zbytky malé kaple.",
        historie: "Helgafell znamená „svatá hora“. Pohané věřili, že se na ni duše po smrti uchylují. Pod kopcem je hrob Guðrún Ósvífursdóttir, hrdinky Ságy o lidech z Lososího údolí.",
        legenda: "Kdo vystoupí na kopec od Guðrúnina hrobu, nepromluví a neohlédne se, a nahoře se otočí na východ, smí si přát tři přání. Musí být dobrá a nesmí je nikomu prozradit.",
        paranormalni: "Mnozí návštěvníci věří, že se jim přání splnila. Doložit to nelze.",
        skepticke: "Rituál je lidová tradice. Splnění přání nelze ověřit."
      },
      praktickeInfo: "Helgafell je kousek od městečka Stykkishólmur na poloostrově Snæfellsnes. Výstup trvá jen asi 10 minut. U farmy se platí malé vstupné. Kombinujte s Kirkjufellem.",
      pribehy: [
        { nazev: "Tři přání", text: "Kdo vystoupí mlčky a bez ohlédnutí, smí si na vrcholu přát tři dobrá přání." },
        { nazev: "Hrob Guðrún", text: "Pod kopcem je hrob hrdinky ságy Guðrún, které je kopec zasvěcen." }
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
