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
    id: "hoia-baciu-forest",
    patch: {
      nazev: "Les Hoia-Baciu",
      lead: "Les na okraji Kluže v Transylvánii s pokroucenými stromy a kruhovou mýtinou - podle místních nejzáhadnější les Rumunska a dějiště slavné fotografie UFO z roku 1968.",
      atmosfera: 4.6,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "střední",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Les má stromy podivně zkroucené a ohnuté. Uprostřed je téměř kruhová mýtina Poiana Rotundă, na které podle místních nerostou stromy. Návštěvníci hlásí bolesti hlavy, poruchy elektroniky a ztrátu času.",
        historie: "Les se proslavil v 50. a 60. letech, kdy ho zkoumal biolog Alexandru Sift. V srpnu 1968 vyfotografoval vojenský technik Emil Barnea nad mýtinou diskovitý objekt - snímek obletěl svět. Od té doby les přitahuje ufology a lovce duchů.",
        legenda: "Nejznámější pověst vypráví o pastýři, který vešel do lesa s dvěma sty ovcemi a už nikdy se nevrátil. Jiný příběh mluví o dívce, která se ztratila a po pěti letech se vrátila ve stejném oblečení, bez vzpomínek.",
        paranormalni: "Lidé popisují světla mezi stromy, pocit úzkosti a vybité baterie. V lese se pořádají noční prohlídky s průvodcem.",
        skepticke: "Zkroucení stromů lze vysvětlit větrem, půdou a sesuvy svahu. Holá mýtina má nejspíš příčinu ve složení půdy. Fotografie z roku 1968 nebyla nikdy nezávisle ověřena."
      },
      praktickeInfo: "Les leží na západním okraji města Kluž (Cluj-Napoca), z centra je to taxíkem asi 15 minut. Vstup je zdarma. Na noční procházky využij místní průvodce. Vezmi si baterku a pevnou obuv, v lese se snadno ztratíš.",
      pribehy: [
        { nazev: "Pastýř a dvě stě ovcí", text: "Pastýř se stádem podle pověsti vešel do lesa a už nikdy nikdo nespatřil ani jeho, ani ovce." },
        { nazev: "Fotka z roku 1968", text: "Emil Barnea vyfotil nad mýtinou diskovitý objekt - jeden z nejznámějších snímků UFO východní Evropy." }
      ]
    }
  },
  {
    id: "burg-eltz",
    patch: {
      nazev: "Hrad Eltz",
      lead: "Pohádkový hrad v lesním údolí nad Moselou, který patří stejnému rodu přes 850 let - nikdy nebyl zničen a podle pověsti v něm bdí duch rytířské dcery Anežky.",
      atmosfera: 4.8,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup, sezónně",
      popisy: {
        zahada: "Hrad Eltz se tyčí na skále obtékané potokem Elzbach, skrytý v lese. Má osm věží a desítky místností s původním nábytkem. Je jedním z mála hradů na Rýně a Mosele, které nebyly nikdy zničeny.",
        historie: "Hrad je poprvé zmíněn v roce 1157 a dodnes patří rodu Eltzů. V letech 1331-1336 vedli Eltzové spor s trevírským arcibiskupem Balduinem, který naproti postavil obléhací hrad Trutzeltz. Hrad byl vyobrazen na staré německé bankovce 500 marek.",
        legenda: "Pověst vypráví o Anežce z Eltzu, která oblékla zbroj a bránila hrad proti útočníkovi, ale padla. Její duch prý chrání hrad dodnes a v hradě se ukazuje její zbroj.",
        paranormalni: "Návštěvníci hrad popisují spíše jako pohádku. Pověst o Anežce je oblíbená u průvodců.",
        skepticke: "Příběh Anežky nemá historický doklad. Hrad unikl zničení díky diplomacii rodu a skryté poloze."
      },
      praktickeInfo: "Hrad je otevřen od dubna do října. Z parkoviště u Wierschem vede kyvadlový autobus nebo 15minutová procházka. Krásnější je pěší cesta údolím z obce Moselkern (asi 1 hodina). Z Koblenze je to autem asi 40 minut. Prohlídka interiérů je jen s průvodcem.",
      pribehy: [
        { nazev: "Anežka ve zbroji", text: "Rytířská dcera prý padla při obraně hradu a její duch ho střeží dodnes." },
        { nazev: "Hrad z bankovky", text: "Hrad Eltz byl zobrazen na staré německé pětisetmarkové bankovce." }
      ]
    }
  },
  {
    id: "poenari-castle",
    patch: {
      nazev: "Hrad Poenari",
      lead: "Skutečná pevnost Vlada III. Napichovače vysoko nad údolím Argeș - k ruinám vede asi 1 480 schodů a podle pověsti z věže skočila jeho žena do řeky.",
      atmosfera: 4.7,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "střední",
      pristupnost: "placený vstup, schody",
      popisy: {
        zahada: "Na rozdíl od hradu Bran, který se běžně spojuje s Drákulou, je Poenari místem, které Vlad III. skutečně používal. Zřícenina stojí na skalním hřebeni nad Transfăgărășanskou silnicí.",
        historie: "Hrad vznikl ve 13. nebo 14. století a v 15. století ho Vlad III. Țepeș nechal obnovit jako jednu ze svých pevností. Později byl opuštěn a zemětřesení v 19. století zničilo část zdí.",
        legenda: "Podle pověsti Vlad za trest donutil bojary, kteří se podíleli na vraždě jeho otce, pracovat na hradě, dokud jim nerozpadly šaty. Když se blížili Osmané, jeho žena prý skočila z věže do řeky, které se dnes říká Râul Doamnei - Řeka paní.",
        paranormalni: "Turisté hlásí pocit, že je někdo sleduje, a vítr, který zní jako nářek. Hrad se vyskytuje v mnoha pořadech o Drákulovi.",
        skepticke: "Pověsti o bojarech a manželce jsou známy hlavně z lidové tradice, nikoli ze současných pramenů. Spojení s upírem Drákulou pochází z románu Brama Stokera."
      },
      praktickeInfo: "Hrad leží na Transfăgărășanské silnici asi 25 km od města Curtea de Argeș. K hradu vede asi 1 480 schodů (30-45 minut). V sezóně je přístup občas omezen kvůli medvědům v okolí - dodržuj pokyny. Vezmi vodu. Transfăgărășan je otevřený obvykle od července do října.",
      pribehy: [
        { nazev: "Řeka paní", text: "Žena Vlada III. prý raději skočila z věže, než by padla do rukou Osmanů." },
        { nazev: "Bojaři na lešení", text: "Podle pověsti Vlad nechal bojary stavět hrad tak dlouho, až z nich spadly šaty." }
      ]
    }
  },
  {
    id: "predjama-castle",
    patch: {
      nazev: "Hrad Predjama",
      lead: "Hrad vestavěný do ústí jeskyně ve 123metrové skalní stěně - sídlo loupežného rytíře Erazma, který podle pověsti zemřel po ročním obléhání na záchodě.",
      atmosfera: 4.8,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Predjama vypadá, jako by hrad vyrůstal ze skály. Za ním se otevírá systém jeskyní s tajnou chodbou, kterou se podle pověsti hrad zásoboval během obléhání.",
        historie: "Hrad je poprvé zmíněn ve 13. století. V 15. století v něm sídlil rytíř Erazem z Predjamy, který se znelíbil Habsburkům. Po dlouhém obléhání zemřel v roce 1484. Dnešní renesanční podobu získal hrad v roce 1570.",
        legenda: "Erazmus se podle pověsti vysmíval obléhatelům tím, že jim házel čerstvé třešně. Nakonec ho zradil sluha, který dal signál, když šel rytíř na záchod - a dělová koule ho tam zasáhla.",
        paranormalni: "S hradem se nepojí četná hlášení duchů. Podle místních se v noci v jeskyni ozývají kroky.",
        skepticke: "Detaily o záchodu a třešních pocházejí z pověstí a jejich přesnost nelze ověřit. Erazmus je historická postava, ale jeho příběh byl v průběhu staletí přikrášlen."
      },
      praktickeInfo: "Predjama je asi 10 km od Postojenské jeskyně a hodinu autem z Lublaně. Existuje kombinovaná vstupenka s Postojenskou jeskyní. Jeskyně pod hradem je v zimě uzavřena kvůli netopýrům. V červenci se tu koná rytířský turnaj.",
      pribehy: [
        { nazev: "Třešně pro obléhatele", text: "Erazem prý házel obléhatelům čerstvé třešně, aby ukázal, že má zásoby z tajné chodby." },
        { nazev: "Nejpotupnější smrt", text: "Sluha dal znamení, když šel rytíř na záchod - a dělová koule ho zasáhla." }
      ]
    }
  },
  {
    id: "buzludzha-monument",
    patch: {
      nazev: "Památník Buzludža",
      lead: "Opuštěný komunistický památník ve tvaru „létajícího talíře“ na vrcholu bulharského pohoří Stara planina - ikona opuštěných míst Evropy.",
      atmosfera: 4.8,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "střední",
      pristupnost: "jen zvenku, vstup dovnitř zakázán",
      popisy: {
        zahada: "Betonový kruh se 70metrovou věží s rudými hvězdami stojí na vrcholu ve výšce 1 441 metrů. Uvnitř se rozpadají obrovské mozaiky komunistických hrdinů. Často je zahalen v mlze, což mu dodává mimozemský vzhled.",
        historie: "V roce 1891 se zde tajně sešli bulharští socialisté a založili stranu, ze které později vzešla komunistická strana. Památník byl otevřen v roce 1981. Po pádu komunismu v roce 1989 byl opuštěn a vyrabován. Projekt Buzludža pod vedením architektky Dory Ivanové se snaží o jeho záchranu.",
        legenda: "Místní vyprávějí o hlasech v prázdném sále a o světlech, které se v noci objevují ve věži. Podle některých se zde konaly tajné rituály.",
        paranormalni: "Fotografové a urbexoví nadšenci hlásí zvuky, které připomínají kroky a hlasy - většinou jde o vítr v rozbitých oknech.",
        skepticke: "Zvuky způsobuje silný vítr v rozpadající se konstrukci. Památník je skutečně nebezpečný kvůli padajícím částem, ne kvůli duchům."
      },
      praktickeInfo: "Buzludža je asi 12 km od průsmyku Šipka a 30 km od Kazanlaku. Dojedeš autem po horské silnici až k parkovišti. Vstup dovnitř je zakázán a hlídán - konstrukce je nebezpečná. Počasí na vrcholu se rychle mění, vezmi si bundu i v létě.",
      pribehy: [
        { nazev: "Talíř v mlze", text: "V mlze se kruhová budova jeví jako přistálé UFO - proto se jí přezdívá létající talíř." },
        { nazev: "Mozaiky v troskách", text: "Uvnitř se pomalu rozpadají obří mozaiky s portréty Marxe, Engelse a Lenina." }
      ]
    }
  },
  {
    id: "wolf-s-lair",
    patch: {
      nazev: "Vlčí doupě (Wolfsschanze)",
      lead: "Hitlerův hlavní stan ukrytý v mazurských lesích - obří zničené bunkry a místo, kde 20. července 1944 vybuchla Stauffenbergova bomba.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "střední",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "V lese u vesnice Gierłoż leží desítky rozmetaných bunkrů se stěnami silnými až 8 metrů. Mnohé jsou zarostlé mechem a stromy. Les tak skrývá jedno z nejtemnějších míst 20. století.",
        historie: "Hitler zde pobýval s přestávkami v letech 1941-1944. Dne 20. července 1944 tu plukovník Claus von Stauffenberg odpálil bombu ve snaze Hitlera zabít - ten přežil s lehkými zraněními. V lednu 1945 Němci komplex vyhodili do povětří. Okolí bylo odminováváno až do 50. let.",
        legenda: "Vypráví se o tajných chodbách a ukrytých dokumentech pod bunkry. Místní hovoří o vojácích, kteří se v noci objevují mezi ruinami.",
        paranormalni: "Návštěvníci hlásí tíživou atmosféru a pocit, že je někdo sleduje - ale konkrétní doložené jevy chybí.",
        skepticke: "Historie místa je plně doložená, žádné tajné podzemní město neexistuje. Atmosféru vytváří skutečná tragédie, ne duchové."
      },
      praktickeInfo: "Vlčí doupě je asi 8 km od Kętrzyna na Mazursku, ze Varšavy je to asi 3,5 hodiny autem. Vstup je placený, k dispozici jsou audioprůvodci. Do bunkrů nelez - hrozí pád betonu. Vezmi si repelent, v lese je hodně komárů.",
      pribehy: [
        { nazev: "Aktovka pod stolem", text: "Stauffenbergova bomba byla v aktovce pod stolem - masivní noha stolu odklonila výbuch a Hitler přežil." },
        { nazev: "Odminování", text: "Po válce trvalo odminování lesa kolem bunkrů téměř deset let a sapéři tu našli desítky tisíc min." }
      ]
    }
  },
  {
    id: "maeshowe",
    patch: {
      nazev: "Maeshowe",
      lead: "Neolitická komorová hrobka na Orknejích stará asi 5 000 let - při zimním slunovratu do ní dopadá slunce a na stěnách jsou vikingské runy.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "jen s průvodcem, rezervace",
      popisy: {
        zahada: "Hrobka je pokryta travnatou mohylou. Dlouhá chodba vede do centrální komory. Při zimním slunovratu zapadající slunce osvětlí zadní stěnu komory - podobně jako u Newgrange v Irsku.",
        historie: "Maeshowe byla postavena kolem roku 2800 př. n. l. Ve 12. století do ní vnikli Vikingové a vyryli na stěny přes 30 runových nápisů - jednu z největších sbírek run mimo Skandinávii. Je součástí památky UNESCO Neolitické srdce Orknejí.",
        legenda: "Podle orknejských pověstí v mohyle žije hogboon - duch mohyly, který chrání hrobku. Vikingské runy mluví o pokladu, který byl prý ukryt nedaleko.",
        paranormalni: "Paranormální jevy nejsou běžně hlášeny. Návštěvníci mluví spíš o silném dojmu ze stavby.",
        skepticke: "Runy o pokladu jsou spíše vikingské vtipy a graffiti. Orientace na slunovrat je úmyslná architektonická volba, ne nadpřirozený jev."
      },
      praktickeInfo: "Maeshowe je na pevnině Orknejí, asi 15 km od Kirkwallu. Vstup je jen s průvodcem, rezervuj předem u Historic Environment Scotland. V prosinci si můžeš prohlédnout živý přenos ze slunovratu. Kombinuj s Ring of Brodgar a kameny ve Stenness.",
      pribehy: [
        { nazev: "Slunce na zadní stěně", text: "Při zimním slunovratu zapadající slunce osvítí zadní stěnu komory." },
        { nazev: "Vikingské graffiti", text: "Vikingové na stěny vyryli nápisy, včetně chvály krásných žen a zmínek o pokladu." }
      ]
    }
  },
  {
    id: "sassi-di-matera",
    patch: {
      nazev: "Sassi di Matera",
      lead: "Jeskynní město v Basilicatě, obývané od pravěku - kdysi „hanba Itálie“, dnes památka UNESCO a kulisa filmů jako Umučení Krista.",
      atmosfera: 4.8,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Sassi jsou domy a kostely vytesané do vápencové skály nad roklí Gravina. Mnohé obydlí jsou jeskyně. Večer, když se rozsvítí světla, vypadá město jako betlém.",
        historie: "Oblast byla osídlena už v pravěku. V roce 1945 Carlo Levi v knize Kristus se zastavil v Eboli popsal bídu jeskynních obyvatel. V roce 1952 byl přijat zákon, na jehož základě bylo obyvatelstvo vystěhováno. Od roku 1993 je město na seznamu UNESCO a v roce 2019 bylo Evropským hlavním městem kultury.",
        legenda: "Místní vyprávějí o duchu Monacello - malém skřítkovi v mnišském oblečení, který dělá nepořádek v domech a ukazuje ukryté poklady.",
        paranormalni: "Jeskynní kostely s freskami vyvolávají silné pocity. Paranormální jevy jsou spíše součástí folkloru.",
        skepticke: "Monacello je postava z jihoitalského folkloru. Atmosféra města vychází z jeho skutečné historie."
      },
      praktickeInfo: "Matera je asi 1,5 hodiny vlakem (Ferrovie Appulo Lucane) z Bari. Staré město je pěší, ulice jsou strmé a kamenité. Navštiv jeskynní kostely a Casa Grotta - rekonstruovaný jeskynní dům. Nejkrásnější výhled je z vyhlídky Belvedere naproti přes rokli.",
      pribehy: [
        { nazev: "Hanba Itálie", text: "V 50. letech bylo město považováno za národní ostudu - dnes je to jedno z nejnavštěvovanějších míst jihu." },
        { nazev: "Skřítek Monacello", text: "Malý skřítek v mnišském oblečení prý v noci sedá spícím na hrudi a ukazuje poklady." }
      ]
    }
  },
  {
    id: "mycenae",
    patch: {
      nazev: "Mykény",
      lead: "Pevnost bájného krále Agamemnona s Lví bránou a „kyklopskými“ hradbami - Schliemann tu našel zlatou masku, kterou nazval Agamemnonovou.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Mykény jsou obklopeny hradbami z obrovských kamenů, které podle starých Řeků mohli postavit jen Kyklopové. Lví brána z doby kolem roku 1250 př. n. l. je jednou z nejstarších monumentálních soch Evropy.",
        historie: "Mykény byly centrem mykénské civilizace v době bronzové. V roce 1876 zde vykopával Heinrich Schliemann a v hrobech našel zlatou masku, kterou nazval Agamemnonovou. Ta je dnes v Národním archeologickém muzeu v Athénách. Mykény jsou na seznamu UNESCO od roku 1999.",
        legenda: "Mykény jsou spojeny s prokletím rodu Átreovců - příběhem vražd, zrady a pomsty, který zpracovali řečtí tragédové. Agamemnon byl podle mýtu zavražděn manželkou Klytaimnéstrou po návratu z Tróje.",
        paranormalni: "S místem se nepojí hojná hlášení duchů. Návštěvníci mluví spíše o síle mýtu.",
        skepticke: "Maska je pravděpodobně starší než trojská válka, takže nemůže patřit Agamemnonovi. Kyklopské hradby postavili lidé pomocí ramp a pák."
      },
      praktickeInfo: "Mykény jsou asi 2 hodiny autem z Athén a 25 km od Nafplia. Součástí návštěvy je muzeum a Átreova pokladnice (tholos). V létě přijď brzy ráno, chybí stín. Kombinuj s Epidaurem a Nafpliem.",
      pribehy: [
        { nazev: "Tvář Agamemnona", text: "Schliemann podle známé, ale nedoložené historky prohlásil, že pohlédl do tváře Agamemnona - maska je ale starší." },
        { nazev: "Hradby obrů", text: "Staří Řekové věřili, že kameny hradeb mohli zvednout jen jednoocí obři." }
      ]
    }
  },
  {
    id: "czocha-castle",
    patch: {
      nazev: "Hrad Czocha",
      lead: "Hrad nad jezerem Leśnia v Dolním Slezsku s tajnými chodbami a pověstí o studni nevěrných manželek - dnes dějiště larpového „Kouzelnického kolegia“.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup, hotel",
      popisy: {
        zahada: "Hrad je plný tajných chodeb, skrytých dveří a schodišť. Za jednou ze skříní se skrývá průchod, za jiným krbem tajná místnost. Atmosféru dotváří jezero pod hradem.",
        historie: "Hrad vznikl ve 13. století na hranici Lužice a Slezska. V letech 1909-1914 ho nechal přestavět architekt Bodo Ebhardt pro výrobce doutníků Ernsta Gütschowa. Po válce byl vyrabován a dlouho ho využívala armáda. Od roku 2014 se tu konají larpové akce College of Wizardry.",
        legenda: "Pověst vypráví o studni, do které byly házeny nevěrné manželky. Další příběhy hovoří o ukrytém nacistickém pokladu a tajné škole kódování.",
        paranormalni: "Hosté hotelu hlásí kroky a ozvěny v chodbách. Na hradě se konají noční prohlídky s pověstmi.",
        skepticke: "Pověsti o nacistickém pokladu nejsou doložené. Tajné chodby jsou z velké části romantickou výzdobou z přestavby počátku 20. století."
      },
      praktickeInfo: "Czocha je u vesnice Sucha poblíž Leśné, asi 2,5 hodiny autem z Vratislavi a kousek od české hranice u Frýdlantu. Prohlídky jsou s průvodcem, k dispozici jsou i noční prohlídky. Na hradě je hotel a restaurace.",
      pribehy: [
        { nazev: "Studna nevěrných manželek", text: "Podle pověsti se do studny na nádvoří házely nevěrné manželky." },
        { nazev: "Škola čar", text: "Larpové akce College of Wizardry proměňují hrad v kouzelnickou školu pro hráče z celého světa." }
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
