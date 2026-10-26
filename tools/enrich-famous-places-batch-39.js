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
    id: "dubrovnik-old-town",
    patch: {
      nazev: "Dubrovník: Staré Město",
      lead: "Hradbami obehnané město na Jadranu, které ve Hře o trůny hrálo Královo přístaviště - a jehož skutečná historie je stejně dramatická jako seriál.",
      atmosfera: 4.6,
      paranormalniAktivita: "filmová a místní legenda",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká (horko, davy)",
      pristupnost: "Staré Město volně, hradby placené",
      popisy: {
        zahada: "Dubrovník obklopují téměř 2 km dlouhé hradby, které nikdy nepadly nepříteli. Vznikl tu malý stát - Dubrovnická republika - který po staletí přežíval mezi Benátkami a Osmanskou říší díky diplomacii, obchodu a placení tributu.",
        historie: "Dubrovnická (Ragusská) republika existovala od 14. století do roku 1808, kdy ji zrušil Napoleon. Roku 1667 město zničilo zemětřesení, při němž zahynuly tisíce lidí, a velkou část baroka dnes vidíme z obnovy po něm. Roku 1416 tu jako v jednom z prvních států Evropy zakázali obchod s otroky. Během války v letech 1991-1992 bylo Staré Město ostřelováno; na mapě u brány jsou vyznačeny zásahy. Od roku 1979 je na seznamu UNESCO.",
        legenda: "Seriál Hra o trůny proměnil Dubrovník v Královo přístaviště. Schodiště u jezuitského kostela se stalo „Schodištěm hanby“, po kterém kráčela Cersei. Fanoušci dodnes opakují její pochod za zvuku imaginárního „Shame!“.",
        paranormalni: "Noční prohlídky vyprávějí o duších obětí zemětřesení z roku 1667 a o stínech na hradbách. Silnější než duchařské příběhy je ale pocit z města, které přežilo staletí obležení, katastrof i válku.",
        skepticke: "Filmová sláva přinesla Dubrovníku nadměrný turismus - město omezuje výletní lodě a prosí turisty, aby nesedali na památky. Duchařské příběhy jsou součástí nočních prohlídek, ne historických záznamů."
      },
      praktickeInfo: "Do Starého Města se vchází branou Pile, kde staví městské autobusy. Okruh po hradbách je placený a trvá 1,5-2 hodiny - jdi ráno nebo pozdě odpoledne, v poledne je velké horko. Stejná vstupenka platí do pevnosti Lovrijenac. Lanovka na horu Srđ nabízí výhled na celé město. V sezóně a když kotví výletní lodě je město přeplněné.",
      pribehy: [
        { nazev: "Schodiště hanby", text: "Barokní schody k jezuitskému kostelu proslavila scéna s Cersei. Průvodci tu nabízejí „Game of Thrones“ prohlídky a fanoušci se fotí na místě natáčení." },
        { nazev: "Svoboda za všechno zlato", text: "Nápis „Non bene pro toto libertas venditur auro“ nad branou pevnosti Lovrijenac shrnuje filozofii republiky, která přežila díky diplomacii." }
      ]
    }
  },
  {
    id: "bled-castle",
    patch: {
      nazev: "Hrad Bled",
      lead: "Hrad na útesu nad alpským jezerem s ostrůvkem a kostelem, kde podle pověsti zvonek splní přání - a kam se ženich nese nevěstu po 99 schodech.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup, ostrov jen loďkou pletna",
      popisy: {
        zahada: "Hrad Bled stojí na 130 metrů vysokém skalním útesu nad jezerem Bled v Julských Alpách. Pod ním leží jediný přírodní ostrov ve Slovinsku s kostelem Nanebevzetí Panny Marie. Zvonek „přání“ v kostele zvoní téměř nepřetržitě.",
        historie: "Hrad se poprvé připomíná roku 1011, kdy oblast daroval císař Jindřich II. biskupům z Brixenu. Patří k nejstarším hradům ve Slovinsku. Na ostrově stávala už předkřesťanská svatyně, dnešní barokní kostel pochází ze 17. století. Lodě pletna, které na ostrov vozí lidi, provozují rodiny s dědičnými licencemi od dob Marie Terezie.",
        legenda: "Podle pověsti vdova z hradu nechala ulít zvon pro kapli na památku manžela, kterého zabili lupiči. Loď se zvonem se v bouři potopila a zvon dodnes zvoní z hlubin jezera. Papež pak kostelu daroval nový zvon a kdo na něj zazvoní, tomu se splní přání.",
        paranormalni: "Místní tvrdí, že za tichých nocí lze z jezera slyšet potopený zvon. Ve slovanské mytologii bylo jezero sídlem bohyně Živy.",
        skepticke: "Potopený zvon nebyl nikdy nalezen. Jezero má ledovcový původ a v zimě občas zamrzá. Zvuky nad vodou se v klidné noci nesou daleko - zvony z okolních kostelů se snadno zamění s „hlasem z hlubin“."
      },
      praktickeInfo: "Bled je asi 50 minut autem nebo autobusem z Lublaně. Na hrad vede stezka z městečka (asi 15-20 minut). Na ostrov se dostaneš loďkou pletna (platí se na místě) nebo půjčenou veslicí. Na ostrově vede ke kostelu 99 schodů. Okruh kolem jezera je asi 6 km. Ochutnej místní krémové řezy kremšnita.",
      pribehy: [
        { nazev: "99 schodů pro nevěstu", text: "Podle tradice nese ženich nevěstu po 99 schodech ke kostelu na ostrově. Pokud to zvládne bez zastavení, manželství bude šťastné." },
        { nazev: "Zvon z hlubin", text: "Zvon, který měla vdova věnovat kapli, se potopil v bouři. Místní říkají, že ho za tichých nocí slyší zvonit z jezera." }
      ]
    }
  },
  {
    id: "wieliczka-salt-mine",
    patch: {
      nazev: "Solný důl Wieliczka",
      lead: "Podzemní město vytesané do soli, s kaplí 100 metrů pod zemí, kde jsou z kamenné soli vyřezané i lustry - a s legendou o prstenu uherské princezny.",
      atmosfera: 4.6,
      paranormalniAktivita: "hornické legendy",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká na trase",
      pristupnost: "jen s průvodcem, placený vstup",
      popisy: {
        zahada: "Důl ve Wieliczce u Krakova má přes 280 km chodeb ve 9 patrech. Turistická trasa vede jen jejich malou částí. Největším divem je kaple sv. Kingy, kde jsou ze soli vytesané podlahy, oltáře, reliéfy a dokonce lustry.",
        historie: "Sůl se tu těžila nepřetržitě od 13. století až do roku 1996. Důl přinášel polským králům velkou část příjmů. Horníci po staletí tesali do soli kaple a sochy. Kaple sv. Kingy vznikala od roku 1896 po několik desetiletí. Roku 1978 byl důl zapsán mezi první památky UNESCO na světě.",
        legenda: "Podle legendy uherská princezna Kinga, nevěsta krakovského knížete, hodila svůj zásnubní prsten do solného dolu v Uhrách. Po příjezdu do Polska nechala kopat ve Wieliczce - a v první vytěžené hroudě soli se našel její prsten. Kinga je dnes patronkou horníků.",
        paranormalni: "Horníci věřili v Skarbníka, ducha dolu, který chrání poctivé horníky a trestá ty, kdo se mu posmívají. Prý se ozývá klepáním před závaly.",
        skepticke: "Legenda o Kinze vysvětluje počátky těžby, ale sůl se v okolí získávala už v neolitu z pramenů. „Klepání“ v dolech mohlo souviset s pohyby hornin a dřevěných výztuží, které horníky skutečně varovaly před nebezpečím."
      },
      praktickeInfo: "Z Krakova jede vlak nebo autobus do Wieliczky asi 20-30 minut. Prohlídka je jen s průvodcem (k dispozici v řadě jazyků) a trvá asi 2-3 hodiny, sestupuje se po zhruba 800 schodech, nahoru jezdí výtah. Pod zemí je kolem 14-16 °C. Vstupenky je lepší rezervovat online na konkrétní čas.",
      pribehy: [
        { nazev: "Prsten v hroudě soli", text: "Princezna Kinga hodila prsten do dolu v Uhrách a našla ho v první hroudě soli vykopané v Polsku - podle legendy tak začala těžba ve Wieliczce." },
        { nazev: "Lustry ze soli", text: "V kapli sv. Kingy visí lustry z krystalů kamenné soli a celá výzdoba je vytesaná rukama horníků." }
      ]
    }
  },
  {
    id: "sintra-quinta-da-regaleira",
    patch: {
      nazev: "Sintra: Quinta da Regaleira a Iniciační studna",
      lead: "Zahrada plná tajných tunelů, jeskyní a „obrácené věže“ - studny se spirálovým schodištěm do hloubky 27 metrů, spojované se zednáři a templáři.",
      atmosfera: 4.8,
      paranormalniAktivita: "esoterická symbolika",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká (kluzké schody)",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Quinta da Regaleira je zámeček s rozsáhlou zahradou v Sintře, plnou symbolů alchymie, zednářství a templářů. Největší atrakcí je Iniciační studna: spirálové schodiště s devíti podestami vede do hloubky asi 27 metrů, kde je na dně vykládaná růžice s křížem.",
        historie: "Panství koupil roku 1892 bohatý obchodník António Augusto Carvalho Monteiro, přezdívaný „Monteiro Milionář“. Jeho podobu navrhl italský architekt Luigi Manini a stavba probíhala zhruba v letech 1904-1910. Studny nikdy nesloužily na vodu. Sintra je od roku 1995 na seznamu UNESCO jako kulturní krajina.",
        legenda: "Devět podest studny se vykládá jako odkaz na devět kruhů Dantova pekla, očistce a ráje. Kříž na dně připomíná řád templářů a Kristův řád. Průchod tunely z temnoty ke světlu měl symbolizovat iniciaci - znovuzrození.",
        paranormalni: "Návštěvníci popisují pocit, že sestupují do jiného světa. Tunely ústí u jezírka, přes které se jde po kamenech. Esoterické skupiny považují Sintru za „posvátné místo“ s mlhou, která tu často leží.",
        skepticke: "Monteirovy zednářské vazby nejsou zcela doložené, symbolika ale odpovídá romantickému zájmu o tajné nauky v jeho době. Studna je architektonické divadlo vytvořené pro zážitek, ne starobylý chrám. Mlha v Sintře je běžný jev díky blízkosti oceánu a kopcům."
      },
      praktickeInfo: "Sintra je 40 minut vlakem z lisabonského nádraží Rossio. Quinta da Regaleira je asi 10 minut pěšky z centra Sintry. Ke studni bývá fronta - přijď hned při otevření. Kombinuj s palácem Pena a Maurským hradem (shuttle bus 434). Schody ve studni a tunely jsou kluzké a tmavé, vezmi pevnou obuv.",
      pribehy: [
        { nazev: "Obrácená věž", text: "Iniciační studna je jako věž postavená dolů do země. Kdo stojí na dně a dívá se vzhůru, vidí kruh oblohy na konci spirály." },
        { nazev: "Milionářův sen", text: "Carvalho Monteiro vytvořil celé panství jako cestu duchovní proměny - od podsvětí tunelů až k vyhlídkovým věžím." }
      ]
    }
  },
  {
    id: "eilean-donan-castle",
    patch: {
      nazev: "Hrad Eilean Donan",
      lead: "Nejfotografovanější hrad Skotska na ostrůvku v místě, kde se setkávají tři mořská jezera - zničený roku 1719 a znovu postavený teprve ve 20. století.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Hrad stojí na malém ostrůvku, s pevninou je spojený kamenným mostem. Vypadá jako středověký, ale z velké části je to rekonstrukce z let 1912-1932. Přesto patří k ikonám Skotska a objevil se v mnoha filmech.",
        historie: "Opevnění tu stálo od 13. století a hrad byl spojen s klany Mackenzie a MacRae. Roku 1719, během jakobitského povstání, ho obsadili španělští vojáci podporující jakobity. Britské válečné lodě ho ostřelovaly a vojáci pak zbytek vyhodili do vzduchu. Téměř 200 let stál v troskách, než ho podle starých plánů obnovil podplukovník John MacRae-Gilstrap.",
        legenda: "Jméno ostrova se spojuje se sv. Donanem, irským mnichem ze 7. století. Hrad se objevil ve filmech jako Highlander (1986) nebo bondovka Jeden svět nestačí (1999).",
        paranormalni: "Říká se, že v hradě straší duch španělského vojáka z roku 1719, který nosí vlastní hlavu pod paží, a že v komnatách se zjevuje „Lady Mary“.",
        skepticke: "Duchové jsou typickou součástí skotských hradních příběhů a mají turistickou funkci. Skutečně dramatická je historie zničení roku 1719 - dělové koule a rozvaliny tehdejšího hradu jsou doložené."
      },
      praktickeInfo: "Hrad leží u silnice A87 na cestě na ostrov Skye, asi 2 hodiny autem z Inverness nebo Fort William. Bývá součástí vícedenních zájezdů z Edinburghu. Uvnitř se nefotí. Nejlepší výhled je ze silnice nad parkovištěm nebo z vyhlídky přes záliv, zvlášť při západu slunce.",
      pribehy: [
        { nazev: "Hrad vyhozený do vzduchu", text: "V roce 1719 našli britští vojáci v hradě 343 sudů střelného prachu a použili ho, aby hrad zničili." },
        { nazev: "Obnova podle snu", text: "Podle rodinné tradice se jednomu z obnovitelů zdálo, jak hrad kdysi vypadal - rekonstrukce ale ve skutečnosti vycházela hlavně z dochovaných plánů." }
      ]
    }
  },
  {
    id: "hohenzollern-castle",
    patch: {
      nazev: "Hrad Hohenzollern",
      lead: "Pohádkový hrad na vrcholu kopce nad mraky, kolébka pruských králů a německých císařů - nejlépe vypadá za podzimních ránů, kdy se vznáší nad mlhou.",
      atmosfera: 4.5,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Hrad Hohenzollern stojí na kopci ve výšce 855 metrů nad Švábskou Albou. Za inverzního počasí ho obklopí mlha a hrad vypadá, jako by se vznášel nad mraky.",
        historie: "První hrad tu stál už v 11. století, kdy odsud pocházel rod Hohenzollernů. Ten se stal vládnoucí dynastií Braniborska, Pruska a později německých císařů. Dnešní novogotický hrad nechal postavit pruský král Fridrich Vilém IV. v letech 1850-1867. Uvnitř je pokladnice s pruskou královskou korunou.",
        legenda: "Rodové pověsti mluví o Bílé paní Hohenzollernů, jejíž zjevení mělo předcházet smrti člena rodu. Vyprávěly se i v Berlíně.",
        paranormalni: "Příběhy o Bílé paní se spojují hlavně s berlínským zámkem, k hradu Hohenzollern je přenesla turistická tradice. Návštěvníci zmiňují tajemnou atmosféru v kasematech.",
        skepticke: "Dnešní hrad je romantická rekonstrukce 19. století, ne středověká stavba. Pověst o Bílé paní je typický šlechtický příběh, který posiloval vážnost rodu."
      },
      praktickeInfo: "Hrad je asi hodinu jízdy autem jižně od Stuttgartu, nejbližší nádraží je Hechingen. Od parkoviště vede kyvadlový autobus nebo stezka do kopce (asi 20 minut). Vnitřní prostory se prohlížejí s průvodcem nebo samostatně podle sezóny. Za podzimních ráno je nejlepší šance vidět hrad nad mlhou z vyhlídky Zeller Horn.",
      pribehy: [
        { nazev: "Hrad nad mraky", text: "Za inverze leží mlha v údolí a jen vrchol kopce s hradem vyčnívá - fotografové sem jezdí za úsvitu z vyhlídky Zeller Horn." },
        { nazev: "Koruna, která nebyla nošena", text: "V pokladnici je pruská královská koruna z roku 1889, kterou žádný panovník nikdy oficiálně neměl na hlavě." }
      ]
    }
  },
  {
    id: "herculaneum",
    patch: {
      nazev: "Herculaneum",
      lead: "Sousední město Pompejí, pohřbené pod 20 metry sopečného materiálu - se zachovalým dřevem, jídlem a stovkami koster lidí, kteří čekali na záchranu v přístavu.",
      atmosfera: 4.6,
      paranormalniAktivita: "kulturní a místní tvrzení",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Herculaneum (italsky Ercolano) bylo menší a bohatší než Pompeje. Zasypaly ho pyroklastické proudy do hloubky asi 20 metrů, které uchovaly i organické materiály: dřevěné trámy, dveře, nábytek, potraviny a papyry.",
        historie: "Město zničila erupce Vesuvu roku 79 n. l. Vykopávky začaly v 18. století tunely. Moderní město Ercolano stojí přímo nad částí antického města, která zůstává nevykopaná. V 80. letech 20. století archeologové objevili v lodních kůlnách u bývalého pobřeží přes 300 koster lidí, kteří marně čekali na záchranu.",
        legenda: "Ve Vile papyrů se našla jediná dochovaná antická knihovna - přes 1 800 zuhelnatělých svitků. Dlouho se zdálo, že je nelze přečíst.",
        paranormalni: "Návštěvníci popisují silný dojem z lodních kůlen s kostrami. Místní příběhy mluví o hlasech z tunelů pod moderním městem.",
        skepticke: "Kostry v lodních kůlnách nejsou záhadou, ale dokladem rychlé smrti teplem pyroklastického proudu. Papyry se dnes daří číst díky rentgenové tomografii a umělé inteligenci - v roce 2023 byla poprvé přečtena slova ze svitku, který se nikdy nerozvinul."
      },
      praktickeInfo: "Herculaneum je u stanice Ercolano Scavi na trati Circumvesuviana, asi 20 minut z Neapole. Je menší než Pompeje, prohlídka trvá 2-3 hodiny. Vstupenky lze koupit online. Dobře se kombinuje s výstupem na Vesuv nebo s návštěvou Pompejí. Vila papyrů je přístupná jen výjimečně.",
      pribehy: [
        { nazev: "Lidé v lodních kůlnách", text: "Stovky obyvatel se schovaly v kamenných kůlnách u moře a čekaly na lodě. Pyroklastický proud je zastihl dřív." },
        { nazev: "Čtení nerozvinutých svitků", text: "Zuhelnatělé svitky nelze rozvinout. Vědci je „prosvítili“ rentgenem a umělá inteligence v nich rozpoznala písmena - první slovo bylo řecké „purpurový“." }
      ]
    }
  },
  {
    id: "chateau-de-chillon",
    patch: {
      nazev: "Hrad Chillon",
      lead: "Vodní hrad na skále v Ženevském jezeře, jehož vězně proslavil lord Byron básní - a jehož jméno si do sloupu ve sklepení sám vyryl.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Hrad Chillon stojí na malém skalním ostrůvku u břehu Ženevského jezera u Montreux. Patří k nejnavštěvovanějším památkám Švýcarska. Jeho klenuté sklepení sloužilo jako vězení.",
        historie: "Hrad vznikal od 11.-12. století a od 13. století ho rozšiřovali savojští hrabata. Roku 1536 ho dobyli Bernští a osvobodili vězně, mezi nimi ženevského kněze Françoise Bonivarda, který tu byl čtyři roky připoutaný ke sloupu. Lord Byron navštívil hrad roku 1816 a napsal báseň Vězeň chillonský.",
        legenda: "Podle tradice Bonivard vyšlapal do kamenné podlahy kolem sloupu stopu, jak chodil v kruhu na řetězu. Sloupy ve sklepení nesou vyrytá jména mnoha návštěvníků - mezi nimi i „Byron“.",
        paranormalni: "Návštěvníci tvrdí, že ve sklepení cítí chlad a tíseň. Místní příběhy mluví o vězních, jejichž hlasy se nesou po vodě.",
        skepticke: "Není jisté, že podpis „Byron“ vyryl skutečně sám básník - mohl ho vytvořit i někdo jiný. Báseň romanticky zveličila Bonivardovo utrpení. Chlad ve sklepení je dán polohou pod hladinou jezera."
      },
      praktickeInfo: "Hrad je asi 3 km od Montreux - vede tam krásná procházka po nábřeží (45 minut), jezdí sem trolejbus i lodě po jezeře. Prohlídka je samostatná s audioprůvodcem a trvá 1,5-2 hodiny. Výhodné je spojit návštěvu s Lausanne nebo Montreux. Vstupenky lze koupit online.",
      pribehy: [
        { nazev: "Vězeň u sloupu", text: "François Bonivard strávil čtyři roky připoutaný v podzemí hradu. Jeho příběh dal vzniknout jedné z nejslavnějších romantických básní." },
        { nazev: "Byronův podpis", text: "Jméno „Byron“ vyryté do sloupu láká návštěvníky už dvě stě let, i když jeho pravost zůstává sporná." }
      ]
    }
  },
  {
    id: "hill-of-crosses",
    patch: {
      nazev: "Hora křížů",
      lead: "Kopec u litevských Šiauliai, na který lidé po staletí nosí kříže - sovětské úřady ho třikrát srovnaly se zemí, a kříže se vždy znovu objevily.",
      atmosfera: 4.7,
      paranormalniAktivita: "duchovní tradice",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Na nevelkém pahorku stojí odhadem přes 100 000 křížů, krucifixů, růženců a soch. Neustále přibývají, protože je sem přinášejí poutníci z Litvy i ze světa.",
        historie: "Tradice nošení křížů se často spojuje s povstáními proti carskému Rusku v letech 1831 a 1863, kdy rodiny neměly těla padlých a stavěly kříže na jejich památku. Za sovětské okupace byl kopec několikrát buldozery zničen, kříže spáleny nebo odvezeny. Lidé je přesto v noci znovu přinášeli. Roku 1993 navštívil horu papež Jan Pavel II.",
        legenda: "Podle jedné legendy se nemocnému otci ve snu zjevila žena, která mu řekla, aby na kopec postavil kříž - a jeho dcera se uzdravila. Jiné pověsti mluví o hradu, který se do kopce propadl.",
        paranormalni: "Poutníci popisují zvuky křížků cinkajících ve větru a silný pocit posvátna. Mnozí věří, že kříž přinesený s prosbou přinese pomoc.",
        skepticke: "Kopec je pravděpodobně hradiště z doby železné. Jeho síla nespočívá v nadpřirozenu, ale v tom, že se stal symbolem pokojného odporu litevského národa a víry."
      },
      praktickeInfo: "Hora křížů je asi 12 km severně od města Šiauliai, kam jezdí vlaky a autobusy z Vilniusu (asi 2-2,5 hodiny). Z Šiauliai se dostaneš taxíkem nebo autobusem směr Joniškis s vystoupením u odbočky. Vstup je zdarma, u parkoviště jsou stánky s kříži. Návštěva trvá kolem hodiny.",
      pribehy: [
        { nazev: "Kříže proti buldozerům", text: "Sovětské úřady kopec opakovaně srovnaly se zemí. Pokaždé se během několika týdnů objevily nové kříže - přinášeli je lidé tajně v noci." },
        { nazev: "Papežova návštěva", text: "Jan Pavel II. sloužil u hory v roce 1993 mši. Na památku jeho návštěvy tu dnes stojí velký krucifix od něj." }
      ]
    }
  },
  {
    id: "montserrat-monastery-spain",
    patch: {
      nazev: "Klášter Montserrat",
      lead: "Benediktinský klášter v „pilovitých horách“ u Barcelony s Černou Madonou, kterou podle legendy našli pastýři v jeskyni za zpěvu a světla z nebe.",
      atmosfera: 4.7,
      paranormalniAktivita: "náboženská legenda",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "klášter volně, lanovky placené",
      popisy: {
        zahada: "Montserrat znamená „pilovitá hora“. Skalní věže z konglomerátu se zvedají až do výšky 1 236 metrů a klášter je přilepený k jejich boku. Uvnitř baziliky je Černá Madona - La Moreneta, patronka Katalánska.",
        historie: "Benediktinský klášter byl založen v 11. století. Roku 1811 ho zničila napoleonská vojska a v 19. století byl obnoven. Za frankismu zůstal Montserrat symbolem katalánské kultury - mše se tu sloužily katalánsky, i když jazyk byl potlačován. Chlapecký sbor Escolania patří k nejstarším hudebním školám v Evropě.",
        legenda: "Podle legendy roku 880 pastýři viděli v horách záhadné světlo a slyšeli zpěv. Světlo je dovedlo do jeskyně, kde našli sošku Panny Marie. Když ji biskup chtěl odnést do města, socha byla náhle tak těžká, že ji nemohli pohnout - proto zde vznikla kaple a později klášter.",
        paranormalni: "Montserrat se spojuje s legendou o svatém grálu a údajně inspiroval Wagnerovu operu Parsifal. Esoterici tu hledají „energetické místo“, poutníci se dotýkají koule, kterou Madona drží v ruce.",
        skepticke: "Dřevěná socha Černé Madony pochází podle odborníků z 12. století, ne z doby legendy. Tmavá barva je zčásti způsobena stárnutím laku a kouřem svíček. Spojení s grálem je romantická interpretace 19. století."
      },
      praktickeInfo: "Z Barcelony (stanice Plaça d'Espanya) jede vlak R5 asi hodinu, pak lanovka Aeri nebo ozubnicová dráha Cremallera. Kombinované jízdenky zahrnují vlak i lanovku. K Madoně se stojí fronta, která se v poledne prodlužuje. Sbor Escolania obvykle zpívá ve všední dny kolem 13:00 (ověř program). Z kláštera vedou turistické stezky a lanovky na vyhlídky.",
      pribehy: [
        { nazev: "Socha, kterou nešlo odnést", text: "Biskup chtěl sošku odnést do města, ale najednou byla tak těžká, že s ní nikdo nepohnul. Pochopil to jako znamení, že má zůstat v horách." },
        { nazev: "Hora grálu", text: "Romantici 19. století viděli v Montserratu Montsalvat - hrad svatého grálu z artušovských legend." }
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
