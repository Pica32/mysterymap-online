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
    id: "cachtice-castle",
    patch: {
      nazev: "Čachtický hrad",
      lead: "Zřícenina hradu Alžběty Báthoryové, „krvavé grófky“, obviněné z vraždy desítek dívek - a podle pověsti z koupelí v jejich krvi.",
      atmosfera: 4.8,
      paranormalniAktivita: "silná lidová tradice",
      historickaDolozenost: "dobrá (proces), legenda nedoložená",
      nebezpecnost: "nízká",
      pristupnost: "malé vstupné, výstup pěšky",
      popisy: {
        zahada: "Čachtický hrad je zřícenina na vápencovém kopci nad obcí Čachtice na západě Slovenska. Proslavila ho Alžběta Báthoryová (1560-1614), uherská šlechtična, kterou Guinnessova kniha rekordů dlouho uváděla jako nejplodnější vražedkyni historie.",
        historie: "Hrad vznikl ve 13. století na obranu uherské hranice. Alžběta Báthoryová ho získala jako svatební dar. Roku 1610 byla na příkaz palatina Jiřího Thurza zatčena a obviněna z mučení a zabíjení služebných a dívek ze šlechtických rodin. Její pomocníci byli popraveni, ona sama zůstala bez soudu uvězněna v zazděných komnatách hradu až do smrti roku 1614. Od roku 1708 je hrad zříceninou.",
        legenda: "Pověst tvrdí, že se Báthoryová koupala v krvi panen, aby si zachovala mládí. Svědkové hovořili až o 650 obětech. Postava „krvavé grófky“ se stala vzorem pro upírské příběhy a filmy, například Bathory (2008) Juraje Jakubiska.",
        paranormalni: "Místní tvrdí, že za nocí se v ruinách objevuje žena v bílém a ozývají se výkřiky. Kolem hradu se konají noční prohlídky s historkami o grófce.",
        skepticke: "Koupele v krvi se v soudních výpovědích neobjevují - legenda vznikla až v 18. století. Někteří historici upozorňují, že proces mohl být i politicky motivovaný: šlo o majetek a vliv bohaté vdovy. Násilí na služebných je ale doložené desítkami svědectví."
      },
      praktickeInfo: "Čachtice jsou asi 1,5 hodiny autem z Bratislavy, nejbližší větší vlakové nádraží je Nové Mesto nad Váhom. Na hrad vede pěší stezka z obce (asi 30-40 minut) nebo kratší cesta z parkoviště u Višňového. Vstupné je malé. Kopec je chráněnou přírodní rezervací.",
      pribehy: [
        { nazev: "Zazděná grófka", text: "Alžběta Báthoryová strávila poslední čtyři roky života v komnatě se zazděnými okny a dveřmi, kudy jí podávali jen jídlo." },
        { nazev: "Krev a mládí", text: "Legenda o koupelích v krvi vznikla až dlouho po její smrti - a z Báthoryové udělala jednu z nejslavnějších temných postav Evropy." }
      ]
    }
  },
  {
    id: "spis-castle",
    patch: {
      nazev: "Spišský hrad",
      lead: "Jeden z největších hradních komplexů střední Evropy, rozkládající se na celém vrcholu travertinového kopce - kde se natáčel film Dračí srdce.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Spišský hrad pokrývá asi 4 hektary na vrcholu kopce nad městečkem Spišské Podhradie. Jeho zříceniny jsou viditelné z velké dálky a patří k nejfotografovanějším místům Slovenska.",
        historie: "Hrad vznikl ve 12. století jako sídlo uherských králů a správní středisko Spiše. Po požáru roku 1780 byl opuštěn a zchátral. Spolu se Spišskou Kapitulou a kostelem v Žehře je od roku 1993 na seznamu UNESCO.",
        legenda: "Pověst vypráví o Tatarech, kteří obléhali hrad ve 13. století, a o pokladu, který mají střežit duchové. Ve zříceninách se natáčely filmy Dračí srdce (1996) a Poslední legie.",
        paranormalni: "Návštěvníci zmiňují vítr hvízdající v ruinách, který zní jako hlasy. Ve sklepích je výstava mučících nástrojů.",
        skepticke: "Pověsti o pokladech jsou typické pro velké hrady. Hrad nikdy nedobyli Tataři - odolal i jejich vpádu roku 1241."
      },
      praktickeInfo: "Hrad je asi 15 minut autem od Levoče a 1 hodinu od Popradu (Vysoké Tatry). Vstupné je placené, prohlídka trvá 1,5-2 hodiny. Nahoře hodně fouká. Nejlepší výhled na hrad je od Spišské Kapituly nebo z Dreveníku.",
      pribehy: [
        { nazev: "Hrad, který neporazili Tataři", text: "Při mongolském vpádu roku 1241 hrad odolal - a stal se symbolem síly Spiše." },
        { nazev: "Filmový drak", text: "Ve filmu Dračí srdce létá drak nad hradbami Spišského hradu." }
      ]
    }
  },
  {
    id: "wawel-dragon-s-den",
    patch: {
      nazev: "Dračí sluj pod Wawelem",
      lead: "Vápencová jeskyně pod královským hradem v Krakově, kde podle legendy žil drak - a kde dnes u řeky stojí kovový drak, který každých pár minut chrlí oheň.",
      atmosfera: 4.4,
      paranormalniAktivita: "slavná legenda",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "malé vstupné, sezónně",
      popisy: {
        zahada: "Smocza Jama (Dračí sluj) je jeskyně ve vápencové skále Wawel nad řekou Vislou. Prohlídková trasa vede jeskyní dolů a ústí na nábřeží u sochy draka.",
        historie: "Jeskyně byla v historii obývaná, sloužila i jako krčma. Kovovou sochu draka od Bronisława Chromého instalovali roku 1972 a od té doby plive plyn zapálený v plamen. Wawel s královským hradem a katedrálou je součástí UNESCO.",
        legenda: "Drak terorizoval Krakov a požíral dobytek i panny. Chytrý švec Skuba mu podstrčil ovci nacpanou sírou. Drak ji sežral, dostal žízeň, pil vodu z Visly, až praskl. Švec si vzal za ženu královu dceru.",
        paranormalni: "Krakované věří, že drak je ochráncem města. Obchody jsou plné plyšových draků.",
        skepticke: "Legenda o drakovi je zapsána už ve 13. století v kronice Wincenta Kadłubka. V jeskyni se našly kosti pravěkých zvířat, které mohly pověst inspirovat."
      },
      praktickeInfo: "Vstup do jeskyně je z nádvoří Wawelu, prohlídka trvá asi 15 minut a je jednosměrná - končí na nábřeží Visly. Otevřeno je zhruba od dubna do října. Drak chrlí oheň každých několik minut. Kombinuj s prohlídkou Wawelu a katedrály, kde jsou nad vchodem kosti, které měly patřit drakovi.",
      pribehy: [
        { nazev: "Švec a ovce se sírou", text: "Švec Skuba porazil draka lstí: ovce plná síry draka tak vysušila, že vypil půl Visly a praskl." },
        { nazev: "Dračí kosti u katedrály", text: "U vchodu do katedrály na Wawelu visí obrovské kosti - podle legendy z draka, ve skutečnosti z pravěkých zvířat." }
      ]
    }
  },
  {
    id: "ksiaz-castle",
    patch: {
      nazev: "Zámek Książ",
      lead: "Třetí největší zámek Polska, pod kterým nacisté začali hloubit tajné tunely projektu Riese - a kde se dodnes hledá „zlatý vlak“.",
      atmosfera: 4.6,
      paranormalniAktivita: "konspirační teorie",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup, podzemí s prohlídkou",
      popisy: {
        zahada: "Książ (německy Fürstenstein) stojí na skále nad roklí u Valbřichu v Dolním Slezsku. Pod zámkem jsou chodby vyražené za druhé světové války v rámci tajného projektu Riese.",
        historie: "Zámek vlastnil rod Hochbergů. Jeho nejslavnější obyvatelkou byla princezna Daisy, anglická aristokratka a hvězda společnosti počátku 20. století. Roku 1941 zámek zabavili nacisté a začali ho přestavovat, možná jako jedno ze sídel Hitlera. Podzemí razili vězni koncentračního tábora Gross-Rosen.",
        legenda: "Okolo projektu Riese kolují teorie o ukrytých pokladech a o „zlatém vlaku“ nacistů naloženém zlatem, který měl zmizet v tunelu u Valbřichu na konci války.",
        paranormalni: "Návštěvníci zmiňují ducha princezny Daisy v komnatách a tísnivou atmosféru v podzemí.",
        skepticke: "V roce 2015 hlásili dva hledači objev zlatého vlaku pod zemí. Vykopávky v roce 2016 nic nenašly. Účel tunelů zůstává nejasný, ale nejde o nadpřirozenou záhadu - spíše o nedokončený válečný projekt."
      },
      praktickeInfo: "Książ je asi 1 hodinu autem z Vratislavi, nejbližší město je Valbřich. Zámek a zahrady jsou placené, podzemní trasa je zvlášť a jen s průvodcem. V okolí jsou další podzemní komplexy Riese (Osówka, Włodarz).",
      pribehy: [
        { nazev: "Princezna Daisy", text: "Anglická šlechtična Daisy z Plessu byla hvězdou evropské smetánky. Její deníky dnes čtou lidé po celém světě." },
        { nazev: "Zlatý vlak", text: "Legenda o nacistickém vlaku plném zlata v tunelu u Valbřichu vzbudila v roce 2015 mezinárodní pozornost - zatím bez nálezu." }
      ]
    }
  },
  {
    id: "tomar-convent-of-christ",
    patch: {
      nazev: "Klášter Krista v Tomaru",
      lead: "Hrad templářů s kruhovou kaplí podle chrámu v Jeruzalémě, kde rytíři prý mohli poslouchat mši přímo z koní - a kde templáři přežili zrušení řádu pod novým jménem.",
      atmosfera: 4.7,
      paranormalniAktivita: "templářská legenda",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Convento de Cristo v Tomaru ve středním Portugalsku je hradní a klášterní komplex, který postavili templáři. Jeho srdcem je Charola, šestnáctiboká rotunda inspirovaná chrámem Božího hrobu v Jeruzalémě.",
        historie: "Templáři pod vedením Gualdima Paise založili hrad roku 1160. Když papež roku 1312 řád zrušil, portugalský král Diniz z templářů a jejich majetku vytvořil Kristův řád. Ten pak financoval portugalské zámořské objevy - kříž řádu byl na plachtách lodí Vasca da Gamy. Od roku 1983 je klášter na seznamu UNESCO.",
        legenda: "Podle tradice byla rotunda Charola postavena tak, aby rytíři mohli sledovat mši ze sedla. Templáři prý v Tomaru ukryli poklad a tajemství, které unikly pronásledování ve Francii.",
        paranormalni: "Okno kapituly v manuelském stylu je plné symbolů - lan, korálů, mořských řas - a lidé v nich hledají šifry. Tomar je centrem templářských legend v Portugalsku.",
        skepticke: "Přechod templářů do Kristova řádu je doložený, poklad nikoli. Historka o mši z koňského sedla je spíše oblíbená legenda než doložený zvyk."
      },
      praktickeInfo: "Tomar je asi 1,5-2 hodiny vlakem z Lisabonu. Klášter je na kopci nad městem, asi 15 minut chůze. Prohlídka trvá 2 hodiny. V červenci se každé 4 roky koná slavnost Festa dos Tabuleiros. Kombinuj s Fátimou a Batalhou.",
      pribehy: [
        { nazev: "Templáři pod novým jménem", text: "Portugalský král templáře nezničil, ale přejmenoval na Kristův řád - a jejich kříž pak doplul až do Indie." },
        { nazev: "Mše ze sedla", text: "Kruhová Charola měla podle legendy umožnit rytířům sledovat mši, aniž by sesedli z koní." }
      ]
    }
  },
  {
    id: "carnac-stones",
    patch: {
      nazev: "Kamenné řady v Carnacu",
      lead: "Přes 3 000 menhirů seřazených do kilometrových řad v Bretani - podle legendy zkamenělá římská armáda, kterou proklel svatý Kornelius.",
      atmosfera: 4.6,
      paranormalniAktivita: "mytologie a esoterika",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "v létě s prohlídkou, v zimě volněji",
      popisy: {
        zahada: "V okolí Carnacu v Bretani stojí přes 3 000 vztyčených kamenů v řadách dlouhých až kilometr. Jde o největší soubor menhirů na světě. Proč je pravěcí lidé postavili, zůstává záhadou.",
        historie: "Kameny vztyčili neolitičtí obyvatelé zhruba mezi 4500 a 3300 př. n. l. Hlavní skupiny jsou Le Ménec, Kermario a Kerlescan. Nedaleko jsou mohyly jako Tumulus Saint-Michel.",
        legenda: "Podle pověsti římští vojáci pronásledovali svatého Kornelia (Cornély) a ten je proměnil v kámen. Proto stojí kameny v řadách jako vojáci. Kornelius je patronem dobytka v Carnacu.",
        paranormalni: "Esoterici tu hledají energetické linie a kalendář sladěný se sluncem. Místní věří, že kameny v noc Vánoc jdou k moři napít se.",
        skepticke: "Teorie o kalendáři mají jen částečnou oporu - některé řady jsou orientovány podle slunovratů, jiné ne. Kameny pocházejí z místní žuly a mohly sloužit k rituálům nebo vymezení území."
      },
      praktickeInfo: "Carnac je v Bretani, asi 2 hodiny autem z Nantes a 30 minut od Vannes. Od dubna do září je vstup do řad omezený na prohlídky s průvodcem (kvůli ochraně), z cest kolem je ale vidět vše. Informační centrum Maison des Mégalithes je u Le Ménec.",
      pribehy: [
        { nazev: "Zkamenělá armáda", text: "Římští vojáci honili svatého Kornelia, až je proklel - dodnes prý stojí v řadách jako kamenní vojáci." },
        { nazev: "Kameny, které chodí pít", text: "Bretaňská pověst praví, že o Vánocích kameny odcházejí k moři napít se a nechávají za sebou poklady." }
      ]
    }
  },
  {
    id: "rennes-le-chateau",
    patch: {
      nazev: "Rennes-le-Château",
      lead: "Vesnička v Pyrenejích, kde chudý farář Saunière náhle zbohatl - a z jehož tajemství vznikla legenda o pokladu templářů a pokrevní linii Ježíše.",
      atmosfera: 4.5,
      paranormalniAktivita: "konspirační teorie",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "vesnice volně, muzeum placené",
      popisy: {
        zahada: "Rennes-le-Château je malá vesnice v departementu Aude. Farář Bérenger Saunière, který sem přišel roku 1885, za několik let postavil vilu, věž Magdala a vyzdobil kostel - za peníze, jejichž původ byl záhadou.",
        historie: "Saunière renovoval kostel Máří Magdalény a nad vchod nechal napsat „Terribilis est locus iste“ (Toto místo je hrozné). U vchodu stojí socha démona Asmodea. Roku 1910 byl biskupem potrestán za obchod s mešemi.",
        legenda: "V 50.-60. letech 20. století rozšířili Noël Corbu a Pierre Plantard příběh o pokladu, který Saunière našel. Později z toho vznikla kniha Svatá krev, svatý grál a román Šifra mistra Leonarda.",
        paranormalni: "Hledači pokladů po desetiletí kopali ve vesnici, až obec kopání zakázala. Esoterici v kostele hledají šifry a symboly.",
        skepticke: "Historici doložili, že Saunière zbohatl prodejem mší (přijímal peníze za tisíce mší, které nesloužil). Dokumenty „Převorství Sionu“ byly podvrhem Pierra Plantarda, který to sám přiznal u soudu."
      },
      praktickeInfo: "Rennes-le-Château je asi 1 hodinu autem z Carcassonne. Kostel a muzeum Saunièrovy vily jsou otevřené po většinu roku. Kopání je zakázané. Výhled z věže Magdala na Pyreneje je nádherný.",
      pribehy: [
        { nazev: "Farář, který zbohatl", text: "Saunière místo pokladu nabízel věřícím po celé Evropě mše - a za peníze postavil vilu s věží." },
        { nazev: "Démon u vchodu", text: "Socha démona Asmodea u vstupu do kostela je jednou z nejzvláštnějších výzdob francouzských kostelů." }
      ]
    }
  },
  {
    id: "tintagel-castle",
    patch: {
      nazev: "Hrad Tintagel",
      lead: "Zřícenina na útesu v Cornwallu, kde se podle legendy narodil král Artuš - a pod kterou je Merlinova jeskyně, do níž vtéká moře.",
      atmosfera: 4.7,
      paranormalniAktivita: "artušovská legenda",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká (vítr, schody)",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Tintagel leží na skalnatém poloostrově na severním pobřeží Cornwallu. Most otevřený roku 2019 spojuje pevninu s ostrovní částí hradu. Na útesu stojí bronzová socha „Gallos“, připomínající Artuše.",
        historie: "Ruiny hradu jsou ze 13. století, postavil ho Richard, hrabě z Cornwallu - pravděpodobně právě kvůli slávě artušovské legendy. Archeologové však našli doklady osídlení z 5.-7. století, kdy tu bylo bohaté obchodní středisko s dovozem keramiky ze Středomoří.",
        legenda: "Geoffrey z Monmouthu ve 12. století napsal, že Artuš byl počat v Tintagelu, když Merlin proměnil krále Uthera v podobu manžela Ygerny. Merlinova jeskyně pod hradem je s legendou spojována.",
        paranormalni: "Návštěvníci popisují v Merlinově jeskyni pocit kouzla a v ruinách mlhu, která přichází od moře během minut.",
        skepticke: "Artuš je pravděpodobně legendární postava. Geoffrey z Monmouthu psal příběhy, ne historii. Skutečná historie Tintagelu je ale zajímavá - šlo o významné sídlo raného středověku."
      },
      praktickeInfo: "Tintagel je asi 1 hodinu autem z Newquay a 4,5 hodiny z Londýna. Vstupenky na čas je vhodné rezervovat u English Heritage. Cesta na hrad má mnoho schodů a za větru je nepříjemná. Merlinova jeskyně je přístupná jen při odlivu.",
      pribehy: [
        { nazev: "Most přes propast", text: "Moderní most vede přes mezeru mezi útesy, kterou kdysi spojovala úzká šíje. Uprostřed je mezera 4 cm jako symbol hranice mezi pevninou a ostrovem." },
        { nazev: "Merlinova jeskyně", text: "Do jeskyně pod hradem při přílivu vtéká moře. Tennyson v ní umístil scénu, kdy Merlin najde malého Artuše." }
      ]
    }
  },
  {
    id: "highgate-cemetery",
    patch: {
      nazev: "Hřbitov Highgate v Londýně",
      lead: "Viktoriánský hřbitov plný zarostlých hrobek, egyptské avenue a hrobu Karla Marxe - a místo, kde v 70. letech začal hon na „Highgatského upíra“.",
      atmosfera: 4.8,
      paranormalniAktivita: "silná mediální tradice",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup, západní část jen s prohlídkou",
      popisy: {
        zahada: "Highgate Cemetery na severu Londýna byl otevřen roku 1839 jako jeden z „Velkolepé sedmičky“ viktoriánských hřbitovů. Západní část s Egyptskou alejí a Libanonským kruhem patří k nejatmosféričtějším místům Londýna.",
        historie: "Po druhé světové válce hřbitov zarostl a chátral. Od roku 1975 ho spravuje dobrovolnický spolek Friends of Highgate Cemetery. Ve východní části je pohřben Karel Marx, George Eliot či Douglas Adams.",
        legenda: "Roku 1970 vyvolaly zprávy o „Highgatském upírovi“ mediální šílenství. Dva samozvaní lovci upírů, Seán Manchester a David Farrant, vedli rivalitu, která skončila soudy. Na hřbitov tehdy vtrhly davy s kůly.",
        paranormalni: "Mezi hlášenými jevy jsou vysoká postava v kloboučku, duch ženy hledající své děti a stíny mezi hroby.",
        skepticke: "Upír byl produktem mediální hysterie a soupeření dvou mužů. Zarostlý hřbitov s mlhou a tmou svádí k představivosti. Skutečně byly v té době poškozovány hroby vandaly."
      },
      praktickeInfo: "Highgate je u stanice metra Archway (asi 15 minut chůze). Východní část lze navštívit samostatně, západní jen s prohlídkou s průvodcem, kterou je třeba rezervovat. Je to stále činný hřbitov - chovej se s respektem. Kombinuj s parkem Hampstead Heath.",
      pribehy: [
        { nazev: "Upír z Highgate", text: "V roce 1970 vyrazily do Highgate davy lovců upírů po televizní reportáži - jeden z nejzvláštnějších mediálních příběhů Londýna." },
        { nazev: "Egyptská alej", text: "Vstup do západní části vede branou ve stylu starověkého Egypta, oblíbeného ve viktoriánské době." }
      ]
    }
  },
  {
    id: "delphi",
    patch: {
      nazev: "Delfy",
      lead: "Svatyně Apollóna na svahu Parnasu, kde Pýthie v transu věštila králům osud - a kde podle Řeků ležel „pupek světa“.",
      atmosfera: 4.7,
      paranormalniAktivita: "starověká věštírna",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká (horko, svah)",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Delfy byly nejvýznamnější věštírnou antického světa. Pýthie, Apollónova kněžka, seděla na trojnožce v chrámu a pronášela věštby, které kněží vykládali. Ptali se jí králové i obyčejní lidé.",
        historie: "Svatyně vzkvétala od 8. století př. n. l. a fungovala až do konce 4. století n. l., kdy ji zavřel císař Theodosius. Kromě chrámu Apollóna tu je divadlo, stadion a pokladnice řeckých městských států. Od roku 1987 je na seznamu UNESCO.",
        legenda: "Zeus vypustil dva orly z opačných konců světa a v Delfách se setkali. Proto zde ležel omfalos, kámen „pupku světa“. Apollón tu měl zabít draka Pýthóna.",
        paranormalni: "Starověké prameny popisují, že Pýthie věštila v omamném stavu. Kroisovi prý věštba řekla, že zničí velkou říši - a zničil tu svou.",
        skepticke: "Geologové objevili pod chrámem zlom a uvažují o výronech plynů, jako je etylen, které mohly vyvolat trans. Teorie je sporná. Věštby byly často dvojznačné, takže „vždy platily“."
      },
      praktickeInfo: "Delfy jsou asi 2,5 hodiny autem z Atén, jezdí sem autobusy i jednodenní zájezdy. Archeologické naleziště a muzeum mají společnou vstupenku. Svah je strmý a v létě velmi horký - přijď ráno. Svatyně Athény Pronaie s tholem je kousek pod hlavním areálem a je zdarma.",
      pribehy: [
        { nazev: "Věštba pro Kroisa", text: "Lýdský král se zeptal, zda má napadnout Persii. Věštba řekla, že zničí velkou říši - a zničila se jeho vlastní." },
        { nazev: "Pupek světa", text: "Kámen omfalos v muzeu v Delfách označoval místo, kde se podle Řeků setkali Diovi orli - střed světa." }
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
