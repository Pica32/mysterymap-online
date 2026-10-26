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
    id: "pena-palace-sintra",
    patch: {
      nazev: "Palác Pena v Sintře",
      lead: "Pestrobarevný pohádkový palác na vrcholu kopce nad Sintrou, který si postavil „král-umělec“ Ferdinand II. - často zahalený v mlze přicházející od oceánu.",
      atmosfera: 4.6,
      paranormalniAktivita: "romantická atmosféra",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup s časovými okny",
      popisy: {
        zahada: "Palác Pena kombinuje gotiku, maurské prvky, renesanci i manuelský styl a je natřený na žluto a červeně. Stojí na skále přes 400 metrů nad mořem a mlha, která sem často stoupá od Atlantiku, ho dokáže během minut skrýt.",
        historie: "Na místě stál klášter sv. Jeronýma, který poničilo zemětřesení roku 1755. Roku 1838 ho koupil král Ferdinand II., manžel královny Marie II., a nechal postavit romantický palác podle plánů barona von Eschwege. Palác patří k nejvýznamnějším stavbám romantismu v Evropě a je součástí kulturní krajiny Sintry (UNESCO 1995).",
        legenda: "Nad vchodem do paláce sedí Triton, napůl muž a napůl ryba, který podle výkladu symbolizuje stvoření světa. Romantici považovali kopce Sintry za místo, kde se dotýká nebe a moře.",
        paranormalni: "Ve dnech, kdy palác zahalí mlha, popisují návštěvníci pocit, že se ocitli ve snu. Lesy kolem jsou plné jeskyní, kaplí a „poustevnických“ úkrytů.",
        skepticke: "Mlha v Sintře vzniká, když vlhký vzduch od oceánu stoupá na kopce a ochlazuje se. Pestré barvy byly obnoveny až koncem 20. století - dříve byl palác dlouho šedý."
      },
      praktickeInfo: "Z centra Sintry jezdí autobus 434 nebo se jde pěšky do kopce (asi 45 minut). Vstupenky na časová okna kupuj online. Okolní park je obrovský - počítej alespoň s 2-3 hodinami. Za mlhy výhled zmizí, za jasného dne je vidět až na oceán a Lisabon.",
      pribehy: [
        { nazev: "Král-umělec", text: "Ferdinand II. byl německý princ, který se stal portugalským králem-chotěm. Palác Pena je jeho uměleckým dílem." },
        { nazev: "Triton nad branou", text: "Kamenný mořský tvor nad vchodem patří k nejfotografovanějším detailům paláce." }
      ]
    }
  },
  {
    id: "malbork-castle",
    patch: {
      nazev: "Hrad Malbork",
      lead: "Největší cihlový hrad na světě, sídlo velmistrů řádu německých rytířů - zčásti zničený ve válce a znovu postavený do původní podoby.",
      atmosfera: 4.5,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup s audioprůvodcem",
      popisy: {
        zahada: "Malbork (německy Marienburg) leží na řece Nogat v severním Polsku. Je to největší hrad na světě podle plochy - komplex z červených cihel s vysokým, středním a dolním hradem.",
        historie: "Hrad začali stavět němečtí rytíři kolem roku 1274. Roku 1309 se sem přestěhoval velmistr řádu a Malbork se stal centrem jejich státu. Roku 1457 přešel hrad do rukou polských králů. Ve druhé světové válce byl těžce poškozen, poté obnoven. Od roku 1997 je na seznamu UNESCO.",
        legenda: "Pověsti mluví o zazděném rytíři, o duchovi velmistra a o pokladu řádu, který měl zmizet v podzemních chodbách.",
        paranormalni: "Návštěvníci popisují tíseň v dlouhých chodbách a ve sklepech. Místní příběhy zmiňují kroky rytířů na hradbách za mlhavých nocí.",
        skepticke: "Pověsti o pokladu jsou typické pro hrady řádu. Většina dnešního interiéru je pečlivá rekonstrukce po válce, opírající se o předválečné dokumenty."
      },
      praktickeInfo: "Malbork je asi 40 minut vlakem z Gdaňsku. Prohlídka s audioprůvodcem v mnoha jazycích trvá 3 hodiny i více. Nejhezčí pohled na hrad je z protějšího břehu řeky, zvlášť večer, kdy je nasvícený. V létě se konají rytířské slavnosti.",
      pribehy: [
        { nazev: "Hrad rytířů", text: "Odsud vládli velmistři řádu německých rytířů rozsáhlému státu u Baltu." },
        { nazev: "Obnova po válce", text: "Po roce 1945 ležela velká část hradu v sutinách. Restaurátoři jej obnovovali desítky let." }
      ]
    }
  },
  {
    id: "skocjan-caves",
    patch: {
      nazev: "Škocjanské jeskyně",
      lead: "Podzemní kaňon, kde řeka Reka mizí do hlubin pod jedním z největších podzemních sálů Evropy - most nad propastí visí 45 metrů nad dravou vodou.",
      atmosfera: 4.8,
      paranormalniAktivita: "mytologické představy o podsvětí",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká na trase",
      pristupnost: "jen s průvodcem, placený vstup",
      popisy: {
        zahada: "Ve Škocjanských jeskyních teče řeka Reka obrovským podzemním kaňonem. Martelova dvorana má objem přes 2 miliony krychlových metrů. Turistická stezka vede po úzké lávce Cerkvenik nad propastí.",
        historie: "Jeskyně byly obývány už v pravěku a archeologové našli předměty, které lidé obětovali do propasti. Moderní průzkum začal v 19. století. Roku 1986 byly jeskyně zapsány na seznam UNESCO.",
        legenda: "Pravěcí lidé považovali místo, kde řeka mizí pod zemí, za vstup do podsvětí. Obětiny v jeskyních ukazují, že šlo o posvátné místo.",
        paranormalni: "Hukot řeky v tmavém kaňonu dodává místu nadpozemský až děsivý charakter. Návštěvníci mluví o pocitu, že stojí na hraně jiného světa.",
        skepticke: "Kaňon vytvořila řeka, která se zařezávala do vápence. Představy o podsvětí jsou pochopitelné, ale vědecky jde o krasový jev."
      },
      praktickeInfo: "Jeskyně jsou asi 1 hodinu autem z Lublaně a 20 minut od Terstu. Prohlídka s průvodcem trvá asi 2 hodiny. Uvnitř je kolem 12 °C a vlhko. Fotografování v podzemí bývá zakázáno. Na rozdíl od Postojny tu nejezdí vláček - jde se pěšky.",
      pribehy: [
        { nazev: "Most nad propastí", text: "Lávka Cerkvenik visí 45 metrů nad řekou. Pro mnoho lidí je to nejsilnější zážitek ze slovinských jeskyní." },
        { nazev: "Brána do podsvětí", text: "Archeologické nálezy ukazují, že lidé do propasti obětovali předměty už před tisíci lety." }
      ]
    }
  },
  {
    id: "diocletian-s-palace",
    patch: {
      nazev: "Diokleciánův palác ve Splitu",
      lead: "Palác římského císaře, ve kterém dnes žije celé staré město - jeho sklepení hrála ve Hře o trůny dračí sídlo Daenerys.",
      atmosfera: 4.5,
      paranormalniAktivita: "filmová a místní legenda",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "palác volně, sklepení a katedrála placené",
      popisy: {
        zahada: "Císař Dioklecián si na přelomu 3. a 4. století nechal postavit palác u moře. Po pádu Říma se do jeho zdí nastěhovali obyvatelé a vytvořili z něj město. V jeho chodbách dnes stojí obchody, byty a kavárny.",
        historie: "Dioklecián vládl v letech 284-305 a jako jeden z mála římských císařů dobrovolně odstoupil. Palác byl dokončen kolem roku 305. Jeho mauzoleum se později stalo katedrálou sv. Dujma - ironií je, že právě Dioklecián krutě pronásledoval křesťany. Palác je od roku 1979 na seznamu UNESCO.",
        legenda: "Ve Hře o trůny se ve sklepení paláce natáčely scény, kde Daenerys drží své draky. Fanoušci dodnes hledají přesné místo.",
        paranormalni: "Místní vyprávějí, že Diokleciánův duch se prochází podzemím. Ve sfinze z egyptské žuly u peristylu vidí někteří ochranu paláce.",
        skepticke: "Duchařské historky jsou součástí nočních prohlídek. Skutečná zajímavost je historická: jeden z nejlépe dochovaných římských palácových komplexů na světě je stále obydlený."
      },
      praktickeInfo: "Palác je v centru Splitu u nábřeží Riva. Do uliček je vstup zdarma, sklepení, katedrála a zvonice jsou placené. Na zvonici vede úzké schodiště s výhledem na město. Z Splitu se jezdí lodí na ostrovy a do Dubrovníku.",
      pribehy: [
        { nazev: "Císař, který pěstoval zelí", text: "Když Diokleciána prosili, aby se vrátil k moci, odpověděl prý, že kdyby viděli zelí, které pěstuje, nikdy by ho o to nežádali." },
        { nazev: "Dračí sklepení", text: "Klenuté sály pod palácem hrály v seriálu místo, kde Daenerys věznila své draky." }
      ]
    }
  },
  {
    id: "sighisoara-clock-tower",
    patch: {
      nazev: "Sighișoara: rodiště Drákuly",
      lead: "Středověké opevněné město v Transylvánii s hodinovou věží - a s domem, kde se podle tradice narodil Vlad III., předobraz hraběte Drákuly.",
      atmosfera: 4.6,
      paranormalniAktivita: "drákulovská legenda",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "město volně, věž placená",
      popisy: {
        zahada: "Sighișoara je jedno z mála stále obydlených středověkých opevněných měst v Evropě. Hodinová věž s pohyblivými figurkami je jejím symbolem. Kousek od ní stojí dům, kde se kolem roku 1431 narodil Vlad III. Napichovač.",
        historie: "Město založili saští kolonisté ve 12.-13. století. Cechy řemeslníků postavily a udržovaly jednotlivé věže hradeb. Hodinová věž sloužila jako hlavní brána a radnice. Historické centrum je od roku 1999 na seznamu UNESCO.",
        legenda: "Vlad III. se stal předobrazem hraběte Drákuly z románu Brama Stokera. V jeho rodném domě je dnes restaurace a malá výstava. Každý rok se tu koná středověký festival.",
        paranormalni: "Turisté vyhledávají „Drákulův dům“ a noční procházky. Krytým dřevěným schodištěm na kopec ke kostelu a hřbitovu jde po setmění mrazení.",
        skepticke: "Vlad III. se tu podle tradice narodil, ale s literárním upírem nemá nic společného kromě jména. Stoker v Rumunsku nikdy nebyl. Skutečná historie Vladových válek je dostatečně krutá i bez upírů."
      },
      praktickeInfo: "Sighișoara je asi 2 hodiny autem z Brašova, jezdí sem vlaky i autobusy. Staré město se dá projít za půl dne. Na hodinovou věž je vstup placený a nahoře je muzeum s výhledem. Kryté schodiště má 176 schodů a vede k Horskému kostelu.",
      pribehy: [
        { nazev: "Rodný dům Napichovače", text: "Ve žlutém domě poblíž věže se měl narodit Vlad III. Dnes tu můžeš povečeřet pod jeho portrétem." },
        { nazev: "Figurky v hodinách", text: "Ve věži se o půlnoci střídají figurky dnů týdne - tradice z dob, kdy hodiny řídily život města." }
      ]
    }
  },
  {
    id: "reynisfjara-basalt-beach",
    patch: {
      nazev: "Reynisfjara: černá pláž",
      lead: "Černá sopečná pláž s čedičovými sloupy a skalními útesy, které podle legendy jsou zkamenělí trollové - a s vlnami, které už zabily neopatrné turisty.",
      atmosfera: 4.8,
      paranormalniAktivita: "islandské lidové pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "vysoká (nebezpečné vlny)",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Reynisfjara leží u vesnice Vík na jihu Islandu. Pláž z černého písku a oblázků, čedičové sloupy u jeskyně Hálsanefshellir a skalní útesy Reynisdrangar v moři tvoří jednu z nejfotografovanějších scenérií Islandu.",
        historie: "Černý písek vznikl z vulkanické horniny rozdrcené mořem. Čedičové sloupy jsou zchladlá láva. Pláž se proslavila na sociálních sítích a v seriálech a filmech.",
        legenda: "Podle pověsti útesy Reynisdrangar jsou trollové, kteří se v noci snažili vytáhnout loď na břeh, ale zastihlo je ranní slunce a proměnili se v kámen.",
        paranormalni: "Islanďané mají bohatou tradici o trollech a skrytém lidu (huldufólk). Mlha a hukot vln dodávají místu tajemný ráz.",
        skepticke: "Útesy jsou zbytky vulkanické horniny obroušené mořem. Hlavní nebezpečí je skutečné: takzvané sneaker waves - nečekaně velké vlny - strhly do moře už několik lidí."
      },
      praktickeInfo: "Reynisfjara je asi 2,5 hodiny autem z Reykjavíku po silnici č. 1 a bývá součástí jednodenních výletů na jižní pobřeží. Vstup je zdarma, u parkoviště je kavárna. Nikdy se neotáčej k moři zády a nechoď k vodě - semafor varování na pláži ukazuje míru nebezpečí. Za bouře na pláž vůbec nechoď.",
      pribehy: [
        { nazev: "Zkamenělí trollové", text: "Dva trollové táhli loď ke břehu a nestihli se schovat před sluncem - dnes z moře trčí jako skalní věže." },
        { nazev: "Vlny ze zálohy", text: "Vlny tu bez varování dosáhnou mnohem dál než ostatní. Proto mají Islanďané u pláže varovný semafor." }
      ]
    }
  },
  {
    id: "cueva-de-altamira",
    patch: {
      nazev: "Jeskyně Altamira",
      lead: "„Sixtinská kaple pravěkého umění“ - malby bizonů staré přes 14 000 let, kterým zpočátku nikdo nevěřil, že jsou pravé.",
      atmosfera: 4.6,
      paranormalniAktivita: "pravěké rituály",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "muzeum s replikou, originál jen výjimečně",
      popisy: {
        zahada: "V jeskyni Altamira u Santillana del Mar v Kantábrii jsou malby bizonů, koní a jelenů v červené a černé barvě. Umělci využili nerovnosti skály, aby zvířata vypadala plasticky.",
        historie: "Jeskyni objevil lovec roku 1868. Malby roku 1879 spatřila osmiletá Maria, dcera amatérského archeologa Marcelina Sanze de Sautuola. Odborníci dlouho tvrdili, že jsou podvrh - nevěřili, že pravěcí lidé uměli takto malovat. Uznány byly až počátkem 20. století. Nejstarší malby jsou datovány na více než 35 000 let, bizoni asi na 14 000-18 000 let. Od roku 1985 je jeskyně na seznamu UNESCO.",
        legenda: "Podle tradice Maria vykřikla „Tati, podívej, voli!“ - a otevřela tak novou kapitolu dějin umění.",
        paranormalni: "Vědci se dodnes přou, zda malby měly šamanský, loveckou magii či náboženský význam. Návštěvníci popisují silný dojem z blízkosti tak dávných lidí.",
        skepticke: "Malby jsou pravé a vědecky datované. Jejich účel neznáme s jistotou - výklady o šamanských transech jsou hypotézy, ne fakta."
      },
      praktickeInfo: "Altamira je asi 30 km od Santanderu. Originální jeskyně je kvůli ochraně maleb uzavřená, jednou týdně se losuje malý počet návštěvníků. Muzeum Altamira má věrnou repliku jeskyně (Neocueva) a výstavu. Kombinuj se středověkým městečkem Santillana del Mar.",
      pribehy: [
        { nazev: "Holčička, která viděla bizony", text: "Malby jako první spatřila osmiletá Maria. Její otec byl za ně obviněn z podvodu a uznání se nedožil." },
        { nazev: "Jeskyně, kterou zavřel dech", text: "Dech tisíců návštěvníků poškozoval malby, proto byla jeskyně uzavřena a vznikla přesná kopie." }
      ]
    }
  },
  {
    id: "rocamadour",
    patch: {
      lead: "Poutní vesnice přilepená ke skále 120 metrů nad údolím, s Černou Madonou a mečem zaraženým ve skále, který měl patřit rytíři Rolandovi.",
      atmosfera: 4.7,
      paranormalniAktivita: "náboženská legenda",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "vesnice volně, svatyně zdarma",
      popisy: {
        zahada: "Rocamadour je vesnice v departementu Lot, jejíž domy, kaple a hrad se drží útesu nad kaňonem řeky Alzou. Poutní cesta vede po 216 schodech, které poutníci dříve stoupali po kolenou.",
        historie: "Roku 1166 tu bylo nalezeno neporušené tělo, které bylo identifikováno jako sv. Amadour. Místo se stalo jedním z nejvýznamnějších poutních míst středověké Evropy, navštívili ho králové i svatí. Rocamadour leží na Svatojakubské cestě, která je součástí UNESCO.",
        legenda: "Ve skále nad kaplí je zaražený meč, o kterém se tvrdí, že je to Durandal, meč rytíře Rolanda. Podle legendy ho archanděl Michael vrhl až sem.",
        paranormalni: "Černá Madona z 12. století je spojována se zázraky a se zvonem, který prý sám zvoní při záchraně námořníků.",
        skepticke: "Meč ve skále nemohl patřit historickému Rolandovi - jde o mnohem pozdější kus, který byl v roce 2011 sejmut a převezen do Paříže. Tělo sv. Amadoura zničili protestanti za náboženských válek roku 1562 a jeho identita je nejistá."
      },
      praktickeInfo: "Rocamadour je asi 2,5 hodiny autem z Toulouse nebo Bordeaux, nejbližší nádraží je Rocamadour-Padirac. Nejlepší výhled je z vesničky L'Hospitalet nad údolím. V létě je vesnice přeplněná, výtah vede mezi úrovněmi. V okolí je propast Gouffre de Padirac.",
      pribehy: [
        { nazev: "Rolandův meč", text: "Meč ve skále nad kaplí lákal návštěvníky stovky let. V roce 2011 byl sejmut a převezen do Paříže." },
        { nazev: "Zázračný zvon", text: "Zvon v kapli prý sám zvonil, když Panna Maria zachránila námořníky z bouře." }
      ]
    }
  },
  {
    id: "glastonbury-tor",
    patch: {
      nazev: "Glastonbury Tor",
      lead: "Kopec s osamělou věží nad bažinatou rovinou, který legenda spojuje s ostrovem Avalon krále Artuše - a esoterici s branou do podsvětí.",
      atmosfera: 4.6,
      paranormalniAktivita: "mytologie a esoterika",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Glastonbury Tor se zvedá nad rovinou Somerset Levels. Na vrcholu stojí věž sv. Michala - jediný zbytek kostela zničeného zemětřesením roku 1275 a obnoveného, než ho ve 16. století zrušil Jindřich VIII. Svahy jsou zbrázděné terasami, jejichž původ je nejasný.",
        historie: "Ve středověku byl Tor pod správou opatství Glastonbury. Roku 1539 tu byl popraven poslední opat Richard Whiting. Opatství se odvolávalo na tradici, že ho založil Josef z Arimatie.",
        legenda: "Legendy tvrdí, že Glastonbury je bájný Avalon, kam byl odnesen umírající Artuš. Mniši roku 1191 oznámili, že v opatství našli hrob Artuše a Guinevery. Další pověst říká, že Josef z Arimatie sem přinesl svatý grál a ukryl ho u pramene Chalice Well.",
        paranormalni: "Esoterici považují Tor za průsečík leylines a vstup do říše víl a pána podsvětí Gwyna ap Nudda. Glastonbury je dnes centrem alternativní spirituality.",
        skepticke: "Objev Artušova hrobu roku 1191 historici považují za účelovou akci mnichů, kteří potřebovali peníze na opravy po požáru. Terasy jsou nejspíš zemědělské nebo přirozené. Leylines nejsou vědecky prokázány."
      },
      praktickeInfo: "Glastonbury je asi 1 hodinu autem od Bristolu nebo Bathu. Na Tor vede pěšina z města (asi 20-30 minut výstupu). Vstup je zdarma. Kombinuj s ruinami opatství, kde je označen údajný hrob Artuše, a se zahradou Chalice Well. Za mlhy vypadá Tor jako ostrov.",
      pribehy: [
        { nazev: "Hrob krále Artuše", text: "Mniši roku 1191 vykopali v opatství hrob s nápisem o Artušovi. Mnozí historici v tom vidí středověkou propagandu." },
        { nazev: "Ostrov v mlze", text: "Když mlha zaplaví roviny kolem, Tor vystupuje jako ostrov - snadno pochopíš, proč se mu říká Avalon." }
      ]
    }
  },
  {
    id: "st-michael-s-mount",
    patch: {
      nazev: "St Michael's Mount",
      lead: "Britské „dvojče“ Mont-Saint-Michel: ostrov s hradem v Cornwallu, ke kterému se při odlivu dojde po kamenné cestě - a kde podle legendy žil obr Cormoran.",
      atmosfera: 4.6,
      paranormalniAktivita: "lidová legenda",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká (příliv)",
      pristupnost: "hrad placený, při přílivu jen loďkou",
      popisy: {
        zahada: "St Michael's Mount je skalní ostrov v zátoce Mount's Bay. Při odlivu k němu vede kamenná hráz, při přílivu se tam jezdí loďkou. Na vrcholu stojí hrad a kostel, ve kterém dodnes žije rodina St Aubyn.",
        historie: "Podle tradice se tu roku 495 rybářům zjevil archanděl Michael. V 11. století tu vzniklo převorství spojené s francouzským Mont-Saint-Michel. Později se ostrov stal pevností a od 17. století rodovým sídlem St Aubynů. Dnes ho spravuje National Trust.",
        legenda: "Na ostrově žil obr Cormoran, který kradl dobytek. Chlapec Jack ho zabil tím, že vykopal jámu a obra do ní nalákal. Kamenné „obrovo srdce“ na cestě k hradu je podle legendy jeho srdce.",
        paranormalni: "Návštěvníci zkoušejí, zda na kameni „obrova srdce“ uslyší tlukot. Za mlhy se ostrov ztrácí a Cornwall je plný pověstí o mořských duších.",
        skepticke: "Příběh o Jackovi a obrovi je cornwallská lidová pohádka, podobná anglické Jack and the Beanstalk. „Srdce“ je obyčejný kámen ve tvaru srdce."
      },
      praktickeInfo: "Ostrov je u městečka Marazion, asi 10 minut od Penzance. Hráz je průchodná jen pár hodin kolem odlivu - sleduj tabulky. Vstupenky na hrad je vhodné rezervovat online. Uvnitř žije rodina, proto bývá v některých dnech zavřeno.",
      pribehy: [
        { nazev: "Jack zabiják obrů", text: "Nejslavnější cornwallská pověst vypráví, jak malý chlapec přelstil obra Cormorana." },
        { nazev: "Cesta, která mizí", text: "Kamenná hráz se dvakrát denně ponoří pod vodu. Kdo zaváhá, musí zpět loďkou." }
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
