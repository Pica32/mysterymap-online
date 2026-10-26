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
    id: "hellfire-club-dublin",
    patch: {
      nazev: "Hellfire Club (Dublin)",
      lead: "Kamenná lovecká chata z 18. století na vrcholu Montpelier Hill nad Dublinem - postavená z kamenů pravěké mohyly a opředená pověstmi o ďáblovi u karetního stolu.",
      atmosfera: 4.4,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné, lesní stezka",
      popisy: {
        zahada: "Na vrcholu Montpelier Hill stojí bez střechy jen kamenné zdi lovecké chaty. Pod ní a kolem ní jsou zbytky pravěké mohyly s chodbovým hrobem. Jméno Hellfire Club („Klub pekelného ohně“) dostala chata podle společnosti dublinských šlechticů, která se proslavila výstřednostmi.",
        historie: "Chatu nechal kolem roku 1725 postavit William Conolly, předseda irské Dolní sněmovny. Na stavbu se použily kameny z mohyly. Dublinský Hellfire Club založili kolem roku 1735 Richard Parsons, hrabě z Rosse, a malíř James Worsdale. Zda se členové skutečně scházeli právě v chatě, není jisté.",
        legenda: "Nejznámější pověst vypráví o neznámém hostovi, který hrál s členy klubu karty. Když jeden z hráčů upustil kartu a sehnul se pro ni, uviděl pod stolem kopyto místo nohy. Host prý zmizel v plamenech. Další příběhy mluví o černé kočce a obětovaných zvířatech.",
        paranormalni: "Návštěvníci popisují náhlý chlad, pocit, že je někdo sleduje, a postavy v okenních otvorech. Chata se objevuje v irských pořadech o duchách a na Halloween sem chodí skupiny nadšenců.",
        skepticke: "Pro černé mše ani ďábelské hry nejsou spolehlivé doklady. Většina příběhů vznikla až v 19. století. Stavba na pravěkém hrobě a holé zdi na osamělém kopci strašidelnou atmosféru přirozeně podporují."
      },
      praktickeInfo: "Montpelier Hill je asi 15 km jižně od centra Dublinu v Dublinských horách. Z parkoviště Hellfire Club u silnice R115 (Killakee) vede lesní stezka, výstup trvá 20-30 minut. Vstup je zdarma. Nahoře je výhled na celý Dublin a záliv. Vezmi pevnou obuv, stezka bývá blátivá.",
      pribehy: [
        { nazev: "Kopyto pod stolem", text: "Hráč, který se sehnul pro upuštěnou kartu, prý uviděl, že jeho spoluhráč má místo nohy kopyto." },
        { nazev: "Chata z kamenů hrobu", text: "Stavitelé použili kameny pravěké mohyly - podle pověsti hned první bouře strhla střechu." }
      ]
    }
  },
  {
    id: "borley-rectory",
    patch: {
      nazev: "Borley Rectory",
      lead: "Fara v Essexu, kterou spisovatel Harry Price proslavil jako „nejstrašidelnější dům Anglie“ - shořela v roce 1939 a dnes z ní nezbylo nic než příběh.",
      atmosfera: 4.0,
      paranormalniAktivita: "slavný případ",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "jen kostel, fara neexistuje",
      popisy: {
        zahada: "Na faře v Borley se podle svědků objevovala jeptiška, bezhlavý kočí s kočárem, zvonily zvonky a na zdech se objevovaly nápisy. Žádný jiný anglický dům nevyvolal tolik knih, sporů a vyšetřování.",
        historie: "Faru postavil v roce 1862 reverend Henry Dawson Ellis Bull. Příběhy o jeptišce se v rodině Bullů vyprávěly už v 19. století. V letech 1930-1935 tu žil reverend Lionel Foyster s manželkou Marianne a právě tehdy přišly nápisy na zdech. Harry Price vydal v roce 1940 knihu The Most Haunted House in England. Fara vyhořela v únoru 1939 a v roce 1944 byla zbourána.",
        legenda: "Podle pověsti se jeptiška z kláštera zamilovala do mnicha a chtěli spolu utéct kočárem. Byli chyceni, mnich popraven a jeptiška zazděna zaživa. Její duch prý chodí po zahradě po „Jeptiščině stezce“.",
        paranormalni: "Price a jeho dobrovolníci zaznamenali stovky jevů: přemisťování předmětů, kroky, pachy a světla. Někteří svědci tvrdili, že při požáru viděli v oknech postavy.",
        skepticke: "Společnost pro psychický výzkum v roce 1956 vydala zprávu, která Priceovi vyčítala zveličování a možné podvody. Marianne Foysterová byla podezřívána, že nápisy psala sama. Klášter v Borley nikdy neexistoval."
      },
      praktickeInfo: "Borley je malá vesnice v Essexu u hranic se Suffolkem, asi 3 km od města Sudbury (vlak z Londýna přes Marks Tey). Fara ani její zahrada už neexistují, na místě stojí soukromé domy - respektuj soukromí obyvatel. Vidět lze kostel Panny Marie naproti, o němž se rovněž vyprávějí příběhy.",
      pribehy: [
        { nazev: "Nápisy pro Marianne", text: "Na zdech se objevovaly neuměle tužkou psané prosby adresované Marianne - dodnes se neví, kdo je psal." },
        { nazev: "Dům, který zmizel", text: "Nejslavnější strašidelný dům Anglie shořel v roce 1939 a byl zbourán. Zůstal jen příběh a desítky knih." }
      ]
    }
  },
  {
    id: "pendle-hill",
    patch: {
      nazev: "Pendle Hill",
      lead: "Holý kopec v Lancashiru spojený s nejslavnějším anglickým čarodějnickým procesem z roku 1612 - a zároveň místo, kde vzniklo hnutí kvakerů.",
      atmosfera: 4.3,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné, turistický výstup",
      popisy: {
        zahada: "Pendle Hill (557 m) se zvedá osaměle nad krajinou východního Lancashiru. V okolních vesnicích žily rodiny obviněné z čarodějnictví. Kopec je dodnes spojen s tímto příběhem a na Halloween se na něj vydávají stovky lidí.",
        historie: "V roce 1612 obvinila mladá Alizon Deviceová podomního obchodníka z toho, že ho očarovala, když ho po jejím prokletí ranila mrtvice. Vyšetřování zasáhlo dvě znepřátelené rodiny - Demdikeových a Chattoxových. V Lancasteru bylo oběšeno deset lidí. Klíčovou svědkyní byla devítiletá Jennet Deviceová. Průběh procesu popsal soudní úředník Thomas Potts. V roce 1652 tu George Fox zažil vizi, která vedla ke vzniku kvakerů.",
        legenda: "Pověst vypráví o setkání čarodějnic ve Velký pátek ve věži Malkin Tower, kde prý plánovaly vyhodit do povětří lancasterský hrad. Říká se, že duchové odsouzených se na kopci zjevují dodnes.",
        paranormalni: "Turisté na Halloween hlásí pocit tíže, hlasy ve větru a náhlé mlhy. V okolních vesnicích se konají strašidelné prohlídky a festival čarodějnic.",
        skepticke: "Proces byl založen na výpovědích dítěte, přiznáních pod nátlakem a strachu z katolických spiknutí. Dnešní historici obviněné vnímají jako oběti chudoby, nevzdělanosti a politického tlaku."
      },
      praktickeInfo: "Nejlepší výchozí bod je vesnice Barley s parkovištěm a kavárnou. Výstup na vrchol trvá 1-1,5 hodiny, poslední úsek je strmý. Ve vesnici Newchurch-in-Pendle je u kostela hrob přezdívaný „Witch's Grave“ a obchod s čarodějnickými suvenýry. Nejbližší větší města jsou Clitheroe a Burnley, z Manchesteru je to autem asi 1 hodina.",
      pribehy: [
        { nazev: "Prokletí obchodníka", text: "Celý proces začal hádkou dívky Alizon s podomním obchodníkem, kterého hned poté ranila mrtvice." },
        { nazev: "Vize George Foxe", text: "Na vrcholu Pendle Hill zažil George Fox v roce 1652 vizi, z níž vzešlo hnutí kvakerů." }
      ]
    }
  },
  {
    id: "lascaux-cave",
    patch: {
      nazev: "Jeskyně Lascaux",
      lead: "„Sixtinská kaple pravěku“ v údolí Vézère - malby býků, koní a jelenů staré asi 17 000 let, které objevili čtyři chlapci v roce 1940.",
      atmosfera: 4.7,
      paranormalniAktivita: "žádná",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "jen replika Lascaux IV",
      popisy: {
        zahada: "Jeskyně skrývá stovky maleb a přes tisíc rytin. Největší záhadou je „scéna ze šachty“: muž s ptačí hlavou leží před zraněným bizonem a vedle něj je pták na tyči. Dodnes se neví, zda jde o lov, rituál, nebo šamanský příběh.",
        historie: "Jeskyni objevili v září 1940 čtyři dospívající chlapci v čele s Marcelem Ravidatem. Po válce byla otevřena veřejnosti a ročně přišly tisíce návštěvníků. Dech a světlo poškodily malby, objevily se plísně a řasy, a proto byla v roce 1963 uzavřena. Údolí Vézère je na seznamu UNESCO od roku 1979.",
        legenda: "Podle vyprávění chlapce na jeskyni přivedl pes Robot, který spadl do díry po vyvráceném stromu. Tato verze se ale v různých podáních liší.",
        paranormalni: "S Lascaux se nepojí strašidelné příběhy. Tajemná je spíše otázka, proč lidé malovali v hlubokých tmavých prostorách, kam denní světlo nikdy nedosáhne.",
        skepticke: "Teorie o „hvězdných mapách“ v malbách jsou sporné a vědci je obecně nepřijímají. Malby jsou datované do magdalénienu metodami radiokarbonového datování nalezených předmětů."
      },
      praktickeInfo: "Originální jeskyně je pro veřejnost trvale uzavřená. Navštívit lze věrnou repliku Lascaux IV (Mezinárodní centrum jeskynního umění) v Montignacu, otevřenou v roce 2016. Montignac je asi 2 hodiny autem z Bordeaux. Lístky v létě rezervuj předem. V údolí Vézère jsou i další jeskyně s originálními malbami, např. Font-de-Gaume (omezený počet návštěvníků).",
      pribehy: [
        { nazev: "Pes Robot", text: "Podle známé verze objevu chlapce k jeskyni přivedl pes, který zapadl do díry pod vyvráceným stromem." },
        { nazev: "Muž s ptačí hlavou", text: "Nejzáhadnější malbou je postava muže s ptačí hlavou před raněným bizonem - její význam nikdo s jistotou nezná." }
      ]
    }
  },
  {
    id: "broceliande-forest",
    patch: {
      nazev: "Les Brocéliande (Paimpont)",
      lead: "Bretaňský les spojený s artušovskými legendami - Merlinův hrob, pramen Barenton a Údolí bez návratu, kde podle pověsti víla Morgana věznila nevěrné milence.",
      atmosfera: 4.6,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "střední",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Les Paimpont západně od Rennes je ztotožňován s legendární Brocéliandou. Najdeš tu Merlinův hrob, pramen Barenton, kde se podle legendy dalo vyvolat bouři, a Údolí bez návratu se Zlatým stromem.",
        historie: "Brocéliandu poprvé zmiňuje ve 12. století normanský básník Wace, který psal o zázračném prameni Barenton. Spojení lesa s Paimpontem se ustálilo ve středověku a znovu v 19. století, kdy romantici hledali místa artušovských příběhů. Zlatý strom vytvořil umělec François Davin v roce 1991 po ničivém požáru lesa v roce 1990.",
        legenda: "Víla Viviana tu podle legendy uvěznila čaroděje Merlina do neviditelné věže ze vzduchu. Víla Morgana prý v Údolí bez návratu uvěznila nevěrné rytíře, dokud je neosvobodil Lancelot. Kdo nalije vodu z pramene Barenton na kámen, vyvolá prý bouři.",
        paranormalni: "Návštěvníci zanechávají u Merlinova hrobu vzkazy a přání. V suchých letech místní dodnes chodí k prameni Barenton „přivolat déšť“.",
        skepticke: "Merlinův hrob tvoří zbytky neolitického hrobu, který byl v 19. století zčásti zničen. Ztotožnění Brocéliandy s Paimpontem je pozdější tradice, nikoli historický doklad."
      },
      praktickeInfo: "Paimpont je asi 40 km západně od Rennes, autem cca 40 minut. Informační centrum je ve vesnici Paimpont, odkud vedou značené trasy. Na zámku Comper je Centrum artušovské imaginace. Údolí bez návratu je u vesnice Tréhorenteuc. Kostel v Tréhorenteuc má artušovské vitráže.",
      pribehy: [
        { nazev: "Pramen bouří", text: "Kdo nalije vodu z pramene Barenton na kamennou desku, vyvolá prý bouři - místní to zkoušeli při suchu." },
        { nazev: "Zlatý strom", text: "Po velkém požáru v roce 1990 se uprostřed spáleniště objevil zlatem pokrytý strom jako symbol obnovy." }
      ]
    }
  },
  {
    id: "gouffre-de-padirac",
    patch: {
      nazev: "Propast Padirac",
      lead: "Obrovská propast v Lotu, kde se 100 metrů pod zemí plavíš lodí po podzemní řece - podle pověsti ji vykopl sám ďábel.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Ústí propasti má průměr asi 35 metrů a padá do hloubky kolem 75 metrů. Pod ním začíná systém chodeb s podzemní řekou, jezery a obrovskými krápníky. Sál velkého dómu je vysoký kolem 90 metrů.",
        historie: "Propast systematicky prozkoumal speleolog Édouard-Alfred Martel v roce 1889. Pro veřejnost byla otevřena v roce 1899. Dodnes se zde objevují nové chodby a podzemní řeka je známa na desítky kilometrů.",
        legenda: "Podle pověsti se svatý Martin setkal s ďáblem, který nesl duše do pekla. Ďábel ho vyzval, ať jeho mula přeskočí díru, kterou kopnutím vytvoří. Mula přeskočila a ďábel se vrátil do pekla - propast zůstala.",
        paranormalni: "S propastí se pojí příběh o pokladu ukrytém v dutinách. Paranormální hlášení prakticky neexistují - tajemná je spíše atmosféra podzemí.",
        skepticke: "Propast vznikla zřícením stropu krasové jeskyně, kterou vyhloubila voda ve vápenci. Ďábel je jen lidové vysvětlení obřího otvoru."
      },
      praktickeInfo: "Padirac je asi 15 km od poutního místa Rocamadour v departementu Lot. Prohlídka trvá asi 1,5 hodiny včetně plavby lodí. Uvnitř je kolem 13 °C - vezmi si mikinu. V létě rezervuj lístky online, fronty bývají dlouhé. Kombinuj s Rocamadourem.",
      pribehy: [
        { nazev: "Kopanec ďábla", text: "Ďábel prý vykopl propast, aby svatý Martin nemohl projet - mula ale díru přeskočila." },
        { nazev: "Martel v podzemí", text: "Zakladatel moderní speleologie Martel sjel do propasti v roce 1889 a otevřel cestu k podzemní řece." }
      ]
    }
  },
  {
    id: "cuenca-hanging-houses",
    patch: {
      nazev: "Visuté domy v Cuence",
      lead: "Domy přilepené na hraně skály nad roklí Huécar - symbol středověkého města Cuenca, kde se vypráví pověst o ďáblovi v podobě krásné ženy.",
      atmosfera: 4.4,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné, muzeum placené",
      popisy: {
        zahada: "Casas Colgadas visí nad roklí s dřevěnými balkony nad prázdnem. Patří ke zbytku řady domů, které kdysi lemovaly celý okraj skály. Odpoledne se jejich silueta odráží proti útesům.",
        historie: "Domy pocházejí z 15. století. Ve 20. století byly restaurovány a od roku 1966 v nich sídlí Muzeum španělského abstraktního umění. Historické město Cuenca je na seznamu UNESCO od roku 1996.",
        legenda: "Pověst o Ďáblově kříži vypráví o mladém šlechtici, který svedl dívku a po hostině s ní šel ke kostelu. Když na ni posvítil světlem, uviděl, že místo nohou má kopyta. Na místě setkání prý dnes stojí kamenný kříž.",
        paranormalni: "Ve starém městě se pořádají noční prohlídky s legendami. Některé uličky prý vyhledávají duchové - ale většinou jde o folklor.",
        skepticke: "Domy nejsou „zavěšené“ - stojí na pevných základech ve skále. Pověsti jsou součástí místního folkloru, bez historického podkladu."
      },
      praktickeInfo: "Cuenca je asi hodinu rychlovlakem AVE z Madridu (stanice Cuenca Fernando Zóbel, odtud autobusem do starého města). Nejlepší výhled na domy je z mostu San Pablo přes rokli. Ulice starého města jsou strmé. Muzeum abstraktního umění je zavřené v pondělí.",
      pribehy: [
        { nazev: "Ďábel na hostině", text: "Mladý šlechtic si všiml kopyt své společnice teprve u kostela - pak zmizela v plamenech." },
        { nazev: "Muzeum na skále", text: "V jednom z visutých domů je dnes muzeum abstraktního umění - galerie nad propastí." }
      ]
    }
  },
  {
    id: "belchite-ruins",
    patch: {
      nazev: "Zříceniny Belchite",
      lead: "Vesnice v Aragonii zničená v bitvě roku 1937 během španělské občanské války - ruiny ponechané jako pomník a místo, kde se podle lovců duchů nahrávají hlasy.",
      atmosfera: 4.7,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "střední",
      pristupnost: "jen s průvodcem",
      popisy: {
        zahada: "Ve starém Belchite stojí rozbité kostely, prázdné ulice a zdi s otvory po střelách. Vesnice zůstala přesně tak, jak ji zanechala válka. Mnoho lidí sem jezdí kvůli nahrávkám, na kterých prý slyšet hlasy a výstřely.",
        historie: "V srpnu a září 1937 se o Belchite tvrdě bojovalo mezi republikány a frankisty. Vesnice byla téměř zcela zničena. Franco rozhodl, že ruiny zůstanou jako pomník. Nová vesnice Belchite byla postavena vedle, částečně za pomoci politických vězňů, a obyvatelé se do ní přestěhovali v 50. letech.",
        legenda: "Vypráví se o vojácích, kteří stále bojují v ulicích, a o zvonech, které zvoní v prázdném kostele. Někteří říkají, že na ruinách je slyšet v noci pláč.",
        paranormalni: "Belchite proslavily španělské pořady o záhadách. Nadšenci tu nahrávají „psychofonie“ - zvuky, které připomínají hlasy, výstřely a letadla. Pořádají se i noční prohlídky.",
        skepticke: "Psychofonie lze vysvětlit rušením, větrem v ruinách a sklonem mozku slyšet řeč v šumu. Skutečná tragédie Belchite je doložená historie války, ne duchové."
      },
      praktickeInfo: "Belchite je asi 45 km jihovýchodně od Zaragozy. Staré město je oplocené a lze ho navštívit jen s průvodcem (prohlídky organizuje obec, i noční). Rezervace je doporučena. Kvůli rozpadajícím se zdem dodržuj pokyny průvodce. V létě je zde velké horko.",
      pribehy: [
        { nazev: "Město jako pomník", text: "Ruiny byly záměrně ponechány - nová vesnice vyrostla hned vedle." },
        { nazev: "Hlasy v nahrávkách", text: "Návštěvníci tvrdí, že na nahrávkách z ruin zachytili hlasy, výstřely i hukot letadel." }
      ]
    }
  },
  {
    id: "spinalonga",
    patch: {
      nazev: "Spinalonga",
      lead: "Ostrůvek s benátskou pevností u Kréty, který byl v letech 1903-1957 kolonií malomocných - dnes jedno z nejsilnějších míst ostrova.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup, loď",
      popisy: {
        zahada: "Na ostrůvku v zálivu Elounda stojí opuštěné domy, kostelík a mohutné benátské hradby. Nemocní sem přicházeli tunelem, kterému se říkalo „Dantova brána“ - pro mnohé to byla cesta, ze které se už nevrátili.",
        historie: "Benátčané tu postavili pevnost v roce 1579. Osmané ji ovládli až v roce 1715, déle než zbytek Kréty. Od roku 1903 sem byli posíláni lidé nemocní leprou a fungovala zde kolonie až do roku 1957. Nemocní tu měli obchody, kavárnu i školu. Kolonie byla uzavřena poté, co byl objeven lék na lepru.",
        legenda: "Místní vyprávějí o duších nemocných, které v noci chodí po ulicích. Román Ostrov (The Island) britské spisovatelky Victorie Hislop z roku 2005 udělal ze Spinalongy turistický symbol.",
        paranormalni: "Turisté popisují tíživou atmosféru u hřbitova a v opuštěných domech. Ostrov se uzavírá večer, a tak přímé noční zážitky jsou vzácné.",
        skepticke: "Atmosféra je dána skutečnou historií izolace a utrpení, ne nadpřirozenými jevy. Pověsti o duchách se rozšířily hlavně po úspěchu románu."
      },
      praktickeInfo: "Loďky na Spinalongu jezdí z vesnice Plaka (cca 10 minut), z Eloundy a z Agios Nikolaos. Na ostrově je placený vstup. Nejsou tu stíny ani obchody, vezmi si vodu a pokrývku hlavy. Na prohlídku počítej s 1,5-2 hodinami.",
      pribehy: [
        { nazev: "Dantova brána", text: "Tunelem do kolonie procházeli nemocní, kteří věděli, že se už nevrátí domů." },
        { nazev: "Ostrov z románu", text: "Román Victorie Hislop proměnil zapomenutý ostrov v jedno z nejnavštěvovanějších míst Kréty." }
      ]
    }
  },
  {
    id: "mystras",
    patch: {
      nazev: "Mystras",
      lead: "Byzantské město na svahu nad Spartou - poslední centrum byzantské kultury, kde byl podle tradice korunován poslední císař Konstantin XI.",
      atmosfera: 4.7,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Na strmém svahu Taygetu leží opuštěné město s kostely, paláci a klášterem. Nástěnné malby uvnitř kostelů patří k vrcholům pozdně byzantského umění. Nahoře je hrad, odkud je vidět celé údolí Sparty.",
        historie: "Hrad postavil v roce 1249 francouzský kníže Vilém II. z Villehardouin. Později se Mystras stal hlavním městem byzantského despotátu Morea. Působil tu filozof Georgios Gemistos Plethon. Konstantin XI. Palaiologos tu byl v roce 1449 podle tradice korunován. V roce 1460 město dobyli Osmané. Opuštěno bylo v 19. století po založení nové Sparty. Na seznamu UNESCO je od roku 1989.",
        legenda: "Řecká pověst vypráví o „mramorovém císaři“ - Konstantin XI. prý nezemřel, ale anděl ho proměnil v mramor a jednou se probudí a znovu dobude Konstantinopol.",
        paranormalni: "V klášteře Pantanassa dodnes žijí jeptišky. Návštěvníci mluví o hlubokém klidu, který místo vyzařuje - spíše duchovní než strašidelný zážitek.",
        skepticke: "Korunovace Konstantina XI. v Mystrasu je doložena jen v pozdějších pramenech. Pověst o mramorovém císaři je lidová tradice z doby osmanské nadvlády."
      },
      praktickeInfo: "Mystras je asi 5 km od moderní Sparty. Má dva vstupy (dolní a horní) - nejpohodlnější je začít nahoře a jít dolů. Prohlídka trvá 3-4 hodiny. V létě je horko, přijď brzy ráno. Vezmi vodu a pevnou obuv. V klášteře Pantanassa je nutné zakryté oblečení.",
      pribehy: [
        { nazev: "Mramorový císař", text: "Poslední byzantský císař prý nezemřel, ale spí proměněný v mramor a jednou se vrátí." },
        { nazev: "Jeptišky v mrtvém městě", text: "V klášteře Pantanassa uprostřed opuštěného města dodnes žijí jeptišky." }
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
