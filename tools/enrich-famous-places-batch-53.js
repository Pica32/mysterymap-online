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
    id: "salona",
    patch: {
      nazev: "Salona",
      lead: "Ruiny hlavního města římské Dalmácie u Splitu - amfiteátr, raně křesťanské hřbitovy a město, jehož uprchlíci se usadili v Diokleciánově paláci a založili Split.",
      atmosfera: 4.3,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Mezi olivovníky a vinicemi leží zbytky hradeb, bazilik, lázní a amfiteátru pro zhruba 18 000 diváků. Na hřbitově Manastirine jsou hroby raných křesťanských mučedníků.",
        historie: "Salona byla jedním z největších měst římské Dalmácie. Nedaleko se pravděpodobně narodil císař Dioklecián, který si poblíž postavil palác. Na počátku 7. století město zpustošili Avaři a Slované a jeho obyvatelé utekli do paláce - tak vznikl Split.",
        legenda: "Místní tradice vypráví o mučednících pronásledovaných za Diokleciána, jejichž ostatky byly později přeneseny do Splitu a Říma. Podle pověsti jsou v ruinách dodnes ukryté poklady uprchlíků.",
        paranormalni: "Paranormální hlášení nejsou běžná. Návštěvníci mluví o klidné atmosféře rozlehlého mrtvého města.",
        skepticke: "Pověsti o pokladech jsou typické pro každé opuštěné antické město. Archeologové zde pracují od 19. století."
      },
      praktickeInfo: "Salona leží v Solinu, asi 5 km od centra Splitu, dojedete městským autobusem. Areál je rozlehlý, počítejte se 2 hodinami a vezměte si vodu - stín je málo. Kombinujte s Diokleciánovým palácem a pevností Klis.",
      pribehy: [
        { nazev: "Město, které dalo vznik Splitu", text: "Uprchlíci ze Salony se usadili v Diokleciánově paláci a z jeho zdí vyrostlo dnešní město Split." },
        { nazev: "Amfiteátr v polích", text: "Amfiteátr pro tisíce diváků dnes stojí na kraji vinic a sadů." }
      ]
    }
  },
  {
    id: "fort-lovrijenac",
    patch: {
      nazev: "Pevnost Lovrijenac",
      lead: "Dubrovnická pevnost na 37metrové skále s nápisem o svobodě, kterou podle pověsti postavili za tři měsíce, aby předběhli Benátčany - a filmový Rudý hrad ze Hry o trůny.",
      atmosfera: 4.5,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Pevnost stojí na útesu za západní branou města. Zdi do moře jsou silné až 12 metrů, ale zeď obrácená k městu má jen asi 60 centimetrů - aby se pevnost nedala obrátit proti Dubrovníku, kdyby ji ovládl zrádný velitel.",
        historie: "Podle tradice pevnost vznikla v 11. století, písemně je doložena ze 14. století a dnešní podobu získala v 16. století. Nad branou je nápis Non bene pro toto libertas venditur auro - Svoboda se neprodává ani za všechno zlato. V létě zde Dubrovnické letní hry uvádějí Hamleta.",
        legenda: "Podle pověsti chtěli Benátčané na skále postavit vlastní pevnost a ovládnout město. Obyvatelé Dubrovníku je předběhli a postavili Lovrijenac za tři měsíce.",
        paranormalni: "Paranormální jevy nejsou hlášeny. Večer, když se scéna mění v divadlo, má místo silnou atmosféru.",
        skepticke: "Pověst o třech měsících je zjednodušení - pevnost se stavěla a přestavovala po staletí."
      },
      praktickeInfo: "Lovrijenac je asi 5 minut pěšky od brány Pile. Vstupenka na městské hradby platí i pro pevnost. Nejlepší výhled na pevnost je z hradeb nebo z pláže Šulići. V létě přijďte brzy ráno - dav z výletních lodí je velký.",
      pribehy: [
        { nazev: "Tenká zeď k městu", text: "Zeď směrem k Dubrovníku je záměrně slabá, aby se pevnost nedala použít proti městu." },
        { nazev: "Svoboda za zlato", text: "Nápis nad branou připomíná, že svoboda se neprodává ani za všechno zlato světa." }
      ]
    }
  },
  {
    id: "jajce-catacombs",
    patch: {
      nazev: "Katakomby v Jajci",
      lead: "Podzemní kostel vytesaný do skály v posledním hlavním městě bosenského království - se symboly Slunce a Měsíce a pověstí o pohřbu velmože Hrvoje.",
      atmosfera: 4.5,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Ve skále pod hradem je vytesaný dvoupatrový prostor s oltářem, výklenky pro hroby a reliéfy kříže, Slunce a půlměsíce. Význam symbolů a přesné využití prostoru jsou předmětem dohadů.",
        historie: "Katakomby nechal zřejmě kolem roku 1400 vytesat bosenský velmož Hrvoje Vukčić Hrvatinić. Jajce bylo posledním sídlem bosenských králů do pádu Osmanům v roce 1463. Uprostřed města padá vodopád řeky Plivy.",
        legenda: "Podle pověsti si Hrvoje nechal katakomby vytesat jako svou hrobku, ale nikdy v nich nebyl pohřben. Symboly Slunce a Měsíce bývají spojovány s bosenskou církví a jejími tajemstvími.",
        paranormalni: "Paranormální hlášení nejsou častá. Chladné, tiché podzemí však vyvolává silný pocit.",
        skepticke: "Výklady o tajných kultech bosenské církve nejsou spolehlivě doložené. Symboly jsou běžné ve středověkém umění."
      },
      praktickeInfo: "Jajce je asi 2,5 hodiny autem ze Sarajeva. Katakomby jsou ve starém městě, vstupné je symbolické. Kombinujte s pevností, vodopádem Plivy a mlýnky na Plivských jezerech. Prohlídka zabere asi 20 minut.",
      pribehy: [
        { nazev: "Hrob, který zůstal prázdný", text: "Velmož Hrvoje si podle pověsti nechal vytesat hrobku, ale pohřben v ní nikdy nebyl." },
        { nazev: "Vodopád uprostřed města", text: "Řeka Pliva padá vodopádem přímo pod starým městem Jajce." }
      ]
    }
  },
  {
    id: "pyramid-of-the-sun-bosnia",
    patch: {
      nazev: "„Bosenská pyramida“ Visočica",
      lead: "Kopec u Visoka, který v roce 2005 jeden podnikatel prohlásil za největší pyramidu světa - vědci to odmítají jako přírodní útvar, ale tunely a turismus vzkvétají.",
      atmosfera: 4.0,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné, tunely placené",
      popisy: {
        zahada: "Visočica má z některých úhlů pravidelný trojúhelníkový tvar. Pod ní vedou tunely Ravne, ve kterých se podle příznivců teorie nachází „léčivá energie“.",
        historie: "V roce 2005 Semir Osmanagić prohlásil, že kopec je pyramida starší než egyptské. Evropská asociace archeologů a další odborníci to v roce 2006 označili za podvod. Na vrcholu kopce ve skutečnosti stálo středověké královské město Visoki.",
        legenda: "Příznivci tvrdí, že pod pyramidou jsou komory s ultrazvukovým paprskem a energetickým polem. Kolem se rozvinula celá síť dalších „pyramid“ - Měsíce, Draka a Lásky.",
        paranormalni: "Návštěvníci tunelů popisují pocity uvolnění a energie. Měření „energetických polí“ nebyla nikdy nezávisle potvrzena.",
        skepticke: "Geologové vysvětlují tvar kopce jako přírodní flatiron, vrstvy zvětralých hornin. Tunely jsou převážně novodobé. Místo je zajímavým příkladem pseudoarcheologie a jejího vlivu na místní ekonomiku."
      },
      praktickeInfo: "Visoko je asi 30 km od Sarajeva. Výstup na Visočici a výhled jsou zdarma, tunely Ravne jsou placené. Starší středověké město Visoki je na vrcholu kopce. Berte místo jako zajímavost o tom, jak vzniká moderní mýtus.",
      pribehy: [
        { nazev: "Pyramida z kopce", text: "Kopec s ruinami středověkého města se v roce 2005 přes noc stal „největší pyramidou světa“." },
        { nazev: "Energie v tunelu", text: "Turisté chodí do tunelů Ravne pro údajnou léčivou energii, kterou vědci nikdy nenaměřili." }
      ]
    }
  },
  {
    id: "carnuntum",
    patch: {
      nazev: "Carnuntum",
      lead: "Římské město na Dunaji u Vídně, kde Marcus Aurelius psal Hovory k sobě, kde byl prohlášen císař Septimius Severus - a kde radar našel celou gladiátorskou školu.",
      atmosfera: 4.3,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "V Carnuntu stojí rekonstruované římské domy, lázně a městská čtvrť postavené původními technikami. Nad polem se tyčí Pohanská brána (Heidentor), monumentální oblouk ze 4. století.",
        historie: "Carnuntum bylo vojenským táborem a hlavním městem provincie Horní Panonie s desítkami tisíc obyvatel. Marcus Aurelius zde během markomanských válek psal část Hovorů k sobě. V roce 193 tu byl prohlášen císařem Septimius Severus a v roce 308 se tu sešla konference císařů. V roce 2011 radar odhalil pod zemí gladiátorskou školu.",
        legenda: "Lidé ve středověku považovali Pohanskou bránu za hrob obra nebo pohanského krále. Podle pověsti pod ní leží poklad.",
        paranormalni: "Paranormální hlášení nejsou běžná. Zajímavý je spíše pocit, že se městem dá skutečně projít.",
        skepticke: "Pohanská brána je triumfální památník, ne hrob. Pověst vznikla, protože středověcí lidé nevěděli, co oblouk znamená."
      },
      praktickeInfo: "Carnuntum je asi 40 km východně od Vídně, dojedete vlakem S7 do Petronell-Carnuntum. Archeologický park má více částí: římské město, amfiteátr a muzeum v Bad Deutsch-Altenburgu. Otevřeno od března do listopadu. Počítejte s půl dnem.",
      pribehy: [
        { nazev: "Filozof na frontě", text: "Marcus Aurelius psal Hovory k sobě ve vojenském táboře na Dunaji." },
        { nazev: "Škola gladiátorů", text: "Radar v roce 2011 odhalil pod polem celou gladiátorskou školu s cvičištěm." }
      ]
    }
  },
  {
    id: "val-camonica-rock-drawings",
    patch: {
      nazev: "Skalní rytiny ve Val Camonica",
      lead: "Údolí v Lombardii s desítkami tisíc pravěkých rytin, vytvářených po tisíce let - první italská památka UNESCO a zdroj symbolu Lombardie, kamunské růže.",
      atmosfera: 4.4,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Na vyhlazených skalách ledovcem jsou vyryté lovecké scény, bojovníci, zvířata, domy, mapy polí i záhadné postavy. Nejznámější je kamunská růže - čtyřlistý symbol, jehož význam nikdo přesně nezná.",
        historie: "Rytiny vznikaly od pozdního paleolitu přes dobu železnou až po římskou dobu, tedy během několika tisíc let. Počet rytin se odhaduje na více než sto tisíc. V roce 1979 se údolí stalo první italskou památkou UNESCO.",
        legenda: "Místní pověsti mluví o kouzelných znacích a skalách, kde se scházely čarodějnice. Někteří zastánci alternativních teorií tu vidí „astronauty“ - postavy s kruhovými hlavami.",
        paranormalni: "Paranormální jevy nejsou hlášeny. Tajemství je v tom, co lidé po tisíce let chtěli sdělit.",
        skepticke: "Postavy s kruhovými hlavami jsou běžnou stylizací. Výklady o astronautech nemají oporu v archeologii."
      },
      praktickeInfo: "Hlavní park Naquane je v Capo di Ponte, asi 2 hodiny autem z Milána nebo Bergama. Do údolí jezdí i vlak z Brescie. V údolí je několik parků, počítejte s celým dnem. Nejlepší světlo pro rytiny je ráno a večer.",
      pribehy: [
        { nazev: "Kamunská růže", text: "Pravěký symbol z kamene se stal oficiálním znakem regionu Lombardie." },
        { nazev: "Pravěké mapy", text: "Některé rytiny jsou považovány za nejstarší mapy polí a sídel v Evropě." }
      ]
    }
  },
  {
    id: "nuraghe-su-nuraxi",
    patch: {
      nazev: "Nuraghe Su Nuraxi",
      lead: "Kamenná pevnost z doby bronzové na Sardinii, kterou odkryla až silná bouře - nejznámější z tisíců záhadných věží nuragické civilizace.",
      atmosfera: 4.5,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "jen s průvodcem",
      popisy: {
        zahada: "Uprostřed stojí centrální věž obklopená čtyřmi menšími věžemi a hradbami. Kolem leží vesnice kruhových chýší. Uvnitř se prochází úzkými chodbami a po strmých schodech.",
        historie: "Nejstarší část vznikla přibližně v 16. století př. n. l. Na Sardinii je přes 7 000 nuraghů, ale jejich účel - pevnosti, chrámy, sídla náčelníků - je stále předmětem debat. Su Nuraxi odkryl archeolog Giovanni Lilliu v 50. letech. Na seznamu UNESCO je od roku 1997.",
        legenda: "Místní vyprávějí, že nuraghy stavěli obři nebo že je postavili mytičtí Šardanové - jeden z „mořských národů“, kteří útočili na Egypt.",
        paranormalni: "Paranormální jevy nejsou hlášeny. Tajemná je kultura, která nezanechala písmo.",
        skepticke: "Spojení s mořskými národy je hypotéza. Obři jsou typické lidové vysvětlení megalitů."
      },
      praktickeInfo: "Su Nuraxi je u vesnice Barumini, asi hodinu autem z Cagliari. Prohlídky jsou jen s průvodcem, trvají asi hodinu a vedou i dovnitř věží - vezměte si pevnou obuv. V létě přijďte ráno, je tu velké horko.",
      pribehy: [
        { nazev: "Bouře odkryla pevnost", text: "Pevnost byla schovaná pod kopcem, dokud ji silné deště nezačaly odkrývat." },
        { nazev: "Sedm tisíc věží", text: "Na Sardinii je přes 7 000 nuraghů - tolik, že stojí skoro v každém údolí." }
      ]
    }
  },
  {
    id: "bodmin-moor",
    patch: {
      nazev: "Bodmin Moor",
      lead: "Cornwallské vřesoviště s „bestií z Bodminu“, kamennými kruhy zkamenělých hráčů a jezírkem, do kterého prý byl vržen meč Excalibur.",
      atmosfera: 4.4,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Vřesoviště se rozkládá na žulové vysočině s mlhou, pustými pastvinami a pravěkými kameny. Nejvyšším bodem Cornwallu je vrch Brown Willy (420 m).",
        historie: "Na vřesovišti jsou stovky pravěkých památek, kamenných kruhů a chýší. Hostinec Jamaica Inn proslavil román Daphne du Maurier z roku 1936. V 80. a 90. letech se množila hlášení o velké kočce, takzvané bestii z Bodminu.",
        legenda: "Kamenné kruhy The Hurlers jsou podle pověsti hráči, kteří zkameněli za trest, že hráli v neděli. Podle artušovské tradice vrhl rytíř Bedivere meč Excalibur do jezírka Dozmary Pool, kde ho převzala Paní jezera.",
        paranormalni: "Hlášení o velké černé kočce pokračují dodnes. Jamaica Inn je oblíbeným cílem lovců duchů.",
        skepticke: "Vládní šetření z roku 1995 nenašlo žádné ověřitelné důkazy o šelmě. Pozorování mohou být velké kočky domácí nebo psi, případně uprchlé šelmy."
      },
      praktickeInfo: "Bodmin Moor je na A30 mezi Launcestonem a Bodminem. Jamaica Inn je u silnice, Dozmary Pool asi 2 km od něj. The Hurlers jsou u vesnice Minions. Počasí se rychle mění, vezměte nepromokavou bundu a mapu.",
      pribehy: [
        { nazev: "Zkamenělí hráči", text: "Muži, kteří hráli míčovou hru hurling v neděli, se podle pověsti proměnili v kámen." },
        { nazev: "Meč v jezírku", text: "Do Dozmary Pool byl podle legendy vržen Excalibur a Paní jezera ho odnesla pod hladinu." }
      ]
    }
  },
  {
    id: "men-an-tol",
    patch: {
      nazev: "Men-an-Tol",
      lead: "Kámen s kruhovým otvorem mezi dvěma stojícími kameny v Cornwallu - kdo jím prolezl, měl se podle pověsti uzdravit nebo otěhotnět.",
      atmosfera: 4.4,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Na vřesovišti stojí tři kameny - dva svislé a mezi nimi kruhový kámen s otvorem, kterým může prolézt dospělý člověk. Původní uspořádání ani účel nejsou jisté.",
        historie: "Památka je pravděpodobně z doby bronzové, může být zbytkem hrobky nebo kamenného kruhu. Kameny byly v minulosti nejspíš přemístěny.",
        legenda: "Podle lidové tradice se děti s křivicí protahovaly otvorem devětkrát proti směru slunce. Ženy, které chtěly otěhotnět, jím prolézaly za úplňku. Kameny prý střeží skřítek pixie, který dokáže zázračně léčit.",
        paranormalni: "Návštěvníci dodnes otvorem prolézají a nechávají u kamenů drobné dary. Místo je oblíbené mezi příznivci novopohanství.",
        skepticke: "Léčivé účinky nejsou doložené. Původní uspořádání kamenů bylo patrně jiné, než jak je vidíme dnes."
      },
      praktickeInfo: "Men-an-Tol je na poloostrově Penwith, asi 15 minut autem z Penzance. U silnice mezi Madronem a Morvah je malé parkoviště, ke kamenům vede asi 20minutová cesta po polní stezce. Nedaleko je dolmen Lanyon Quoit.",
      pribehy: [
        { nazev: "Devětkrát otvorem", text: "Děti nemocné křivicí prý musely kamenem prolézt devětkrát proti směru slunce." },
        { nazev: "Skřítek u kamenů", text: "Podle pověsti kameny střeží pixie, který dokáže zázračně léčit." }
      ]
    }
  },
  {
    id: "puzzlewood",
    patch: {
      nazev: "Puzzlewood",
      lead: "Starý les ve Forest of Dean, kde se mezi mechem porostlými skalami a kořeny vinou stezky staré těžby železa - kulisa Star Wars i Doctora Who.",
      atmosfera: 4.7,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Les tvoří prohlubně a rokle zvané scowles, porostlé mechem, kapradím a kořeny. Stezky se kroutí přes můstky a mezi skalami, takže se snadno ztratíte. Atmosféra připomíná pohádkový les.",
        historie: "Scowles jsou pozůstatky povrchové těžby železné rudy z doby železné a římské. V 19. století majitel vybudoval stezky, aby les zpřístupnil. Natáčely se zde scény pro Star Wars: Síla se probouzí, Doctor Who a Merlin.",
        legenda: "Místní vyprávějí, že les inspiroval J. R. R. Tolkiena při psaní o Fangornu. Podle jiné pověsti v něm žijí víly a lesní duchové.",
        paranormalni: "Návštěvníci popisují pocit, že jsou v jiném světě. Paranormální jevy nejsou hlášeny.",
        skepticke: "Tolkienova návštěva není doložena, je to spíš místní legenda. Les je ve skutečnosti krajinou staré průmyslové těžby."
      },
      praktickeInfo: "Puzzlewood je u Colefordu v hrabství Gloucestershire, asi 1 hodinu autem z Bristolu. Vstupné je placené, okruh trvá asi hodinu. Po dešti je terén kluzký, vezměte pevnou obuv. Areál je vhodný pro děti.",
      pribehy: [
        { nazev: "Les ze Star Wars", text: "Scény z planety Takodana ze Star Wars: Síla se probouzí se natáčely právě tady." },
        { nazev: "Tolkien v lese?", text: "Místní tvrdí, že les inspiroval Tolkiena - ověřené to ale není." }
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
