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
    id: "alcatraz-island",
    patch: {
      nazev: "Alcatraz",
      lead: "Ostrovní věznice v zátoce San Francisca, odkud podle oficiálních záznamů nikdo úspěšně neutekl - pokud nepočítáme tři muže, kteří zmizeli roku 1962.",
      atmosfera: 4.6,
      paranormalniAktivita: "silná místní tradice",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "trajekt a placený vstup",
      popisy: {
        zahada: "Alcatraz byl federální věznicí s nejpřísnějším režimem v USA. Byli tu vězněni Al Capone, George „Machine Gun“ Kelly nebo Robert Stroud, „ptáčník z Alcatrazu“. Ostrov obklopuje studená voda s prudkými proudy, takže útěk se považoval za téměř nemožný.",
        historie: "Ostrov sloužil nejprve jako pevnost a vojenská věznice. V letech 1934-1963 fungoval jako federální káznice. Uzavřen byl hlavně kvůli vysokým nákladům na provoz a chátrání budov. V letech 1969-1971 ho obsadili aktivisté hnutí Indians of All Tribes. Dnes ho spravuje National Park Service.",
        legenda: "V červnu 1962 utekli Frank Morris a bratři John a Clarence Anglinovi. Vyhloubili otvory za větracími mřížkami, do postelí nechali figuríny s hlavami z papírové hmoty a odpluli na voru ze slepených pláštěnek. Jejich těla se nikdy nenašla. FBI případ uzavřela s tím, že se nejspíš utopili, US Marshals ho ale vedou dál.",
        paranormalni: "Strážci i turisté hlásí rachot řetězů, kroky a výkřiky v bloku D, zejména v samotkách známých jako „díra“. Nejčastěji se zmiňuje cela 14-D, ve které má být neustále chladno.",
        skepticke: "Betonová budova na větrném ostrově je plná průvanu, ozvěn a teplotních rozdílů. Zvuky z přístavu a racků se v prázdných halách snadno zkreslí. Silný příběh místa a turistické prohlídky s nočními historkami vytvářejí očekávání, které vnímání ovlivňuje."
      },
      praktickeInfo: "Na ostrov jezdí jediný oficiální trajekt z mola Pier 33 v San Franciscu a lístky se v sezóně vyprodávají týdny dopředu. Součástí vstupu je audioprůvodce v celovém bloku, nabízené jsou i noční prohlídky. Počítej s větrem a chladem i v létě.",
      pribehy: [
        { nazev: "Útěk s figurínami", text: "Morris a Anglinové měsíce hloubili lžícemi a vrtáčkem z vysavače otvory ve zdi. Dozorce v noci oklamaly hlavy z mýdla, toaletního papíru a vlasů z vězeňského holičství." },
        { nazev: "Ostrov obsazený indiány", text: "Devatenáct měsíců drželi Alcatraz indiánští aktivisté a požadovali ho podle staré smlouvy zpět. Nápisy z té doby jsou na vodárenské věži vidět dodnes." }
      ]
    }
  },
  {
    id: "pripyat",
    patch: {
      nazev: "Pripjať",
      lead: "Město pro 49 000 lidí, evakuované 36 hodin po výbuchu černobylského reaktoru - s ruským kolem, které se nikdy neotočilo.",
      atmosfera: 4.9,
      paranormalniAktivita: "atmosféra opuštěného města",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "vysoká (radiace, válka)",
      pristupnost: "uzavřená zóna, momentálně nepřístupné",
      popisy: {
        zahada: "Pripjať bylo moderní město jaderných inženýrů s průměrným věkem obyvatel kolem 26 let. Po havárii zůstalo prázdné: v bytech hračky, ve třídách učebnice, v nemocnici vybavení. Od roku 1986 ho postupně pohlcuje les.",
        historie: "Město bylo založeno roku 1970 pro pracovníky Černobylské jaderné elektrárny. Při bezpečnostním testu 26. dubna 1986 explodoval reaktor č. 4. Obyvatelům Pripjati oznámili evakuaci až 27. dubna odpoledne s tím, že odjíždějí na tři dny. Nikdy se nevrátili. V roce 2022 zónu na několik týdnů obsadila ruská armáda.",
        legenda: "Mezi pamětníky koluje příběh o „černobylském ptákovi“, tmavé okřídlené postavě, kterou prý viděli dělníci před výbuchem. Ruské kolo v zábavním parku mělo být otevřeno 1. května 1986, pět dní po havárii.",
        paranormalni: "Návštěvníci zóny popisují tísnivé ticho, zvuky v prázdných budovách a pocit, že je někdo sleduje. Tyto zážitky se obvykle mísí s pověstmi o zmutovaných zvířatech.",
        skepticke: "„Černobylský pták“ je pozdější legenda podobná americkému Mothmanovi, pro kterou neexistuje dobový záznam. Hlavní nebezpečí zóny je skutečné a měřitelné: radioaktivní ohniska, zřícené budovy a po roce 2022 také miny. Divoká zvěř v zóně naopak prosperuje, protože tam chybí lidé."
      },
      praktickeInfo: "Vstup do černobylské uzavřené zóny je kvůli válce na Ukrajině dlouhodobě zakázán. Před válkou se jezdilo jen s licencovaným průvodcem a dozimetrem. Nepokoušej se o nelegální vstup - hrozí miny, radiace a trestní stíhání.",
      pribehy: [
        { nazev: "Ruské kolo, které se netočilo", text: "Zábavní park měl otevřít 1. května 1986. Ruské kolo se stalo symbolem zastaveného času - podle některých svědectví se ale krátce otáčelo 27. dubna, aby se lidé uklidnili před evakuací." },
        { nazev: "Les, který vrací město přírodě", text: "Třicet let po havárii prorůstají stromy chodníky i střechami a v ulicích žijí vlci, losi a koně Převalského. Zóna je nechtěnou přírodní rezervací." }
      ]
    }
  },
  {
    id: "aokigahara",
    patch: {
      nazev: "Aokigahara",
      lead: "Hustý les na lávovém poli pod horou Fudži, tichý tak, že slyšíš vlastní kroky - a místo, ke kterému se upínají smutné příběhy.",
      atmosfera: 4.7,
      paranormalniAktivita: "mytologická tradice yūrei",
      historickaDolozenost: "dobrá",
      nebezpecnost: "střední (snadné ztracení mimo stezky)",
      pristupnost: "volně přístupné značené stezky",
      popisy: {
        zahada: "Aokigahara roste na lávovém poli z erupce Fudži v roce 864. Kořeny stromů se plazí po holé vulkanické hornině, mech tlumí zvuky a hustý porost nepropouští vítr. Mnozí návštěvníci popisují les jako neobvykle tichý.",
        historie: "Les je součástí národního parku Fudži-Hakone-Izu. Jsou v něm přírodní lávové jeskyně jako Ledová jeskyně a Větrná jeskyně, které se dají navštívit. V japonské literatuře se les objevil hlavně díky románu Seičó Macumota z 60. let. Od té doby je bohužel spojován i se sebevraždami.",
        legenda: "Ve folkloru jsou stromy domovem yūrei, neklidných duší. Rozšířený příběh o ubasute, starém zvyku odnášet staré lidi do hor, nemá pro Aokigaharu historické doklady.",
        paranormalni: "Turisté hlásí zmatené kompasy, pocit, že je někdo sleduje, a hlasy mezi stromy. Les se stal motivem hororových filmů.",
        skepticke: "Kompasy u země mohou mírně odchylovat kvůli magnetické hornině, na stezkách ale fungují normálně, stejně jako GPS. Ticho vysvětluje hustá vegetace a porézní lávový podklad. Místní úřady i dobrovolníci v lese preventivně hlídkují a na začátku stezek jsou cedule s kontaktem na krizovou pomoc. Senzační videa jim práci ztěžují."
      },
      praktickeInfo: "Drž se značených stezek, mimo ně se v jednotvárném terénu snadno ztratíš. Oblíbený je okruh k Ledové a Větrné jeskyni. Chovej se s respektem: nefilmuj senzačně a nesahej na předměty v lese. Pokud prožíváš těžké období, v Česku můžeš nonstop volat Linku první psychické pomoci 116 123.",
      pribehy: [
        { nazev: "Moře stromů", text: "Japonci les nazývají Džukai, „moře stromů“. Při pohledu z Fudži vypadá jako nekonečná zelená hladina bez jediné mýtiny." },
        { nazev: "Ledová jeskyně", text: "V lávové jeskyni Narusawa Hyoketsu se led drží i v létě. Dříve sloužila jako přírodní lednice na skladování potravin a vajíček bource morušového." }
      ]
    }
  },
  {
    id: "bermuda-triangle",
    patch: {
      nazev: "Bermudský trojúhelník",
      lead: "Oblast Atlantiku mezi Miami, Bermudami a Portorikem, kde mají mizet lodě a letadla - a kterou pojišťovny ani námořnictvo nepovažují za zvláštní.",
      atmosfera: 4.1,
      paranormalniAktivita: "silná mediální tradice",
      historickaDolozenost: "střední",
      nebezpecnost: "běžné námořní riziko",
      pristupnost: "otevřené moře",
      popisy: {
        zahada: "Bermudský trojúhelník je jednou z nejproslulejších „záhad“ 20. století. Patří k ní zmizení Letu 19 roku 1945, nákladní lodi USS Cyclops roku 1918 i řady jachet a letadel. Trojúhelník přitom nemá žádné oficiální hranice.",
        historie: "Pojem „Bermudský trojúhelník“ poprvé použil Vincent Gaddis v časopisu Argosy roku 1964. Masově ho proslavila kniha Charlese Berlitze z roku 1974. Oblastí vedou velmi frekventované námořní a letecké trasy a protéká jí Golfský proud.",
        legenda: "Vysvětlení v populární kultuře zahrnují pozůstatky Atlantidy, mimozemské únosy, časové víry a magnetické anomálie. Let 19 - pět torpédových bombardérů Avenger - se ztratil při cvičném letu a pátrací hydroplán Mariner zmizel také.",
        paranormalni: "Piloti a námořníci vyprávějí o zbláznivších se kompasech, podivné mlze a výpadcích přístrojů. Kolem zmizení se šíří příběhy o posledních zvláštních rádiových hlášeních.",
        skepticke: "Lawrence Kusche v knize z roku 1975 prošel původní zdroje. Zjistil, že řada „záhadných“ případů se stala mimo trojúhelník, za bouře, nebo se vůbec nestala. Lloyd's of London ani americká pobřežní stráž nepovažují oblast za nebezpečnější než jiné rušné vody. Let 19 se podle vyšetřování ztratil kvůli dezorientaci a nedostatku paliva. Mariner patřil k typu známému únikem palivových par a posádka lodi poblíž hlásila výbuch."
      },
      praktickeInfo: "Trojúhelníkem běžně proplouvají výletní lodě a létají linky do Karibiku a na Bermudy. Pro návštěvníka je zajímavější námořní muzeum National Museum of Bermuda nebo potápění na vracích kolem Bermud.",
      pribehy: [
        { nazev: "Let 19", text: "Velitel letky Charles Taylor byl přesvědčen, že je nad Floridskými klíči, a vedl letadla špatným směrem nad otevřený oceán. Jeho rádiová hlášení zachycená na pevnině tento omyl dokládají." },
        { nazev: "Záhada vytvořená v redakci", text: "Termín vznikl v roce 1964 v článku pro pulpový časopis. Za deset let se z něj stala celosvětová legenda díky knize, která se prodala v milionech výtisků." }
      ]
    }
  },
  {
    id: "loch-ness",
    patch: {
      lead: "Hluboké skotské jezero s více sladké vody než všechna jezera Anglie a Walesu dohromady - a s nejslavnějším „netvorem“ na světě.",
      atmosfera: 4.5,
      paranormalniAktivita: "kryptozoologická tradice",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká (studená voda)",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Loch Ness je dlouhé asi 37 km a hluboké přes 220 metrů. Tmavá voda zbarvená rašelinou má viditelnost jen pár metrů. Od 30. let 20. století tu lidé hlásí pozorování velkého tvora s dlouhým krkem, přezdívaného Nessie.",
        historie: "Jezero leží ve zlomu Great Glen, který Skotsko protíná napříč. Moderní legenda začala roku 1933 po dokončení silnice podél severního břehu, když noviny Inverness Courier otiskly zprávu o „netvorovi“. Roku 1934 vyšla „fotografie chirurga“, která obletěla svět.",
        legenda: "Životopis sv. Kolumby ze 7. století popisuje, jak světec v roce 565 zahnal „vodní bestii“ v řece Ness. Skotský folklor zná také kelpie, vodní koně, kteří lákají lidi do hlubin.",
        paranormalni: "Pozorování popisují hrby nad vodou, vlnu bez lodi nebo dlouhý krk. Desítky výprav používaly sonary, ponorky i podvodní kamery. Na břehu stojí Loch Ness Centre a jezero každoročně hostí dobrovolná pátrání.",
        skepticke: "„Fotografie chirurga“ byla podvrh: Christian Spurling před smrtí přiznal, že šlo o hračkovou ponorku s nasazenou hlavou. Jezero vzniklo po poslední době ledové, asi před 10 000 lety, a bylo zamrzlé - plesiosaurus by v něm nepřežil. Analýza DNA z vody v roce 2018 nenašla plazí DNA, zato hojně DNA úhořů. Pozorování nejčastěji vysvětlují vlny po lodích, plovoucí kmeny, ptáci a vydry."
      },
      praktickeInfo: "Nejlepší výhledy jsou od hradu Urquhart na severozápadním břehu. Po jezeře jezdí výletní lodě z Inverness a Drumnadrochitu. Voda je i v létě kolem 5-6 °C, koupání je nebezpečné. Kolem jezera vede dálková trasa Great Glen Way.",
      pribehy: [
        { nazev: "Hračka, která oklamala svět", text: "Slavná fotka z roku 1934 vznikla podle zúčastněných jako pomsta deníku Daily Mail. Šedesát let se považovala za nejsilnější důkaz, než se zbylí aktéři přiznali." },
        { nazev: "Jezero plné úhořů", text: "Genetici odebrali přes 250 vzorků vody. Nejvýraznější stopu zanechali úhoři a vědci nevyloučili, že některá pozorování mohou být neobvykle velcí úhoři." }
      ]
    }
  },
  {
    id: "sedlec-ossuary",
    patch: {
      nazev: "Kostnice Sedlec",
      lead: "Kaple v Kutné Hoře vyzdobená kostmi asi 40 000 lidí - s lustrem obsahujícím každou kost lidského těla.",
      atmosfera: 4.8,
      paranormalniAktivita: "kulturní a místní tvrzení",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Pod hřbitovním kostelem Všech svatých v Sedlci jsou kosti uspořádány do pyramid, girland, kalichu a erbu Schwarzenbergů. Výzdoba nepůsobí morbidně náhodou: je to vědomé memento mori, připomínka smrti a pomíjivosti.",
        historie: "Podle tradice přinesl opat Jindřich ve 13. století ze Svaté země hrst hlíny z Golgoty a rozsypal ji na sedleckém hřbitově. Lidé se tu pak chtěli nechat pohřbít z celé střední Evropy. Mor a husitské války hřbitov zaplnily a kosti se ukládaly do kostnice. Současnou výzdobu vytvořil roku 1870 řezbář František Rint na zakázku Schwarzenbergů, svůj podpis vytvořil také z kostí.",
        legenda: "Podle vyprávění kosti zpočátku skládal do pyramid poloslepý mnich, který po dokončení práce prozřel. Hřbitov se díky svaté hlíně těšil pověsti, že tam pohřbení vstanou z mrtvých mezi prvními.",
        paranormalni: "Návštěvníci popisují tíhu a chlad, který prostor vyvolává, a někteří tvrdí, že se cítí pozorováni prázdnými očnicemi. Kostnice se objevila v řadě hororových filmů a pořadů.",
        skepticke: "Sklep z kamene je přirozeně chladný a vlhký. Silný psychologický dojem vyvolává pohled na tisíce lebek, ne nadpřirozený jev. Kostnice je památkou zemřelých a součástí památek UNESCO Kutné Hory, ne místem okultních rituálů."
      },
      praktickeInfo: "Kostnice je součástí okruhu po Kutné Hoře - kombinovaná vstupenka zahrnuje i katedrálu Nanebevzetí Panny Marie. Fotografování bývá omezeno nebo zpoplatněno. Chovej se tiše a s úctou, je to hrobové místo.",
      pribehy: [
        { nazev: "Podpis z kostí", text: "František Rint se do výzdoby podepsal - jméno a rok 1870 jsou na stěně poskládané z kostí." },
        { nazev: "Hlína z Golgoty", text: "Opat Jindřich údajně rozsypal po hřbitově hrst hlíny ze Svaté země a ze Sedlce se stalo jedno z nejvyhledávanějších pohřebišť střední Evropy." }
      ]
    }
  },
  {
    id: "edinburgh-vaults",
    patch: {
      nazev: "Edinburské podzemí (South Bridge Vaults)",
      lead: "Klenuté komory pod mostem South Bridge, kde se dřív pracovalo, pilo a přežívalo ve tmě - a které po desetiletí ležely zasypané sutí.",
      atmosfera: 4.6,
      paranormalniAktivita: "silná místní tradice",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "jen s prohlídkou",
      popisy: {
        zahada: "Pod most South Bridge v edinburském Starém Městě je vestavěno 19 oblouků s desítkami komor. Původně sloužily jako dílny a sklady obchodníků na mostě. Postupně se v nich usadili nejchudší obyvatelé a nelegální krčmy, pak byly zasypány a zapomenuty.",
        historie: "Most byl dokončen roku 1788. Komory pod ním kvůli zatékání brzy přestaly sloužit řemeslníkům a obsadili je lidé bez domova, včetně uprchlíků z irského hladomoru. Ve 20. století byly komory zasypané a znovu je otevřeli až v 80. letech.",
        legenda: "Ve městě se vypráví o tom, že podzemí využívali vrazi Burke a Hare, kteří v letech 1827-1828 zabíjeli lidi, aby prodávali těla anatomům. Žádný doklad o jejich činnosti přímo ve vaults ale není.",
        paranormalni: "V podzemí se hlásí doteky, kroky a postava zvaná „Pán z komory“. Roku 2001 v něm psycholog Richard Wiseman provedl rozsáhlý experiment se stovkami dobrovolníků.",
        skepticke: "Wisemanův experiment ukázal, že dobrovolníci hlásili „zážitky“ častěji v komorách, o kterých předem nevěděli, že by měly strašit. Hrály roli spíš chlad, tma, průvan a velikost prostoru. Historka o Burke a Harovi se do podzemí přenesla později s rozvojem prohlídek."
      },
      praktickeInfo: "Do podzemí se dostaneš jen s organizovanou prohlídkou, nabízí je několik firem v ulici Blair Street. Večerní „ghost tours“ jsou populární a rychle vyprodané. Uvnitř je chladno a nerovná podlaha.",
      pribehy: [
        { nazev: "Velký vědecký experiment s duchy", text: "Stovky dobrovolníků procházely komory a zaznamenávaly pocity. Pocity strachu se nejvíce shodovaly s fyzickými podmínkami komor, ne s jejich pověstí." },
        { nazev: "Město pod městem", text: "Edinburgh roste do výšky i do hloubky - most South Bridge nese nad sebou ulici, zatímco jeho klenby kdysi ukrývaly celé chudinské čtvrti." }
      ]
    }
  },
  {
    id: "poveglia-island",
    patch: {
      nazev: "Poveglia",
      lead: "Opuštěný ostrov v Benátské laguně s karanténní stanicí a pozdějším ústavem pro staré lidi - a s pověstí nejstrašidelnějšího místa Itálie.",
      atmosfera: 4.6,
      paranormalniAktivita: "silná mediální tradice",
      historickaDolozenost: "dobrá",
      nebezpecnost: "střední (rozpadlé budovy)",
      pristupnost: "vstup zakázán",
      popisy: {
        zahada: "Poveglia je malý ostrov mezi Benátkami a Lidem se zvonicí a polorozpadlými budovami. Od roku 1968 je opuštěný a nesmí se na něj bez povolení. Pověst ostrova roste spolu s tím, kolik lidí ho vidí jen zdálky.",
        historie: "V raném středověku byl ostrov osídlený, později opuštěný. Od 18. století sloužil jako karanténní stanice pro lodě a cestující podezřelé z nákazy. Ve 20. století v budovách sídlil ústav pro staré lidi a dlouhodobě nemocné, zavřený roku 1968. Roku 2014 italský stát nabídl ostrov k pronájmu, plán ale ztroskotal.",
        legenda: "Podle populární legendy na ostrově leží popel 160 000 obětí moru a půda má být z poloviny z lidských ostatků. Další historka mluví o psychiatrovi, který prováděl na pacientech kruté pokusy a skočil ze zvonice.",
        paranormalni: "Televizní pořady o lovení duchů představily Poveglii jako místo výkřiků, stínů a útoků neviditelných sil. Benátští rybáři se prý ostrovu raději vyhýbají.",
        skepticke: "Lazarety pro mor byly hlavně na ostrovech Lazzaretto Vecchio a Lazzaretto Nuovo, kde archeologové našli hromadné hroby. Poveglia sloužila karanténě později a o masových morových hrobech na ní nejsou spolehlivé doklady. Příběh o šíleném lékaři nemá oporu v archivech. Legenda se šířila hlavně internetem a televizí od 2000. let."
      },
      praktickeInfo: "Vstup na ostrov je bez povolení zakázaný a budovy hrozí zřícením. Ostrov uvidíš z lodi nebo z jižního konce Lida. Pro skutečnou historii karantény navštiv Lazzaretto Nuovo, kde se konají prohlídky.",
      pribehy: [
        { nazev: "Ostrov na prodej", text: "Když stát v roce 2014 nabídl Poveglii k pronájmu, benátští občané se složili, aby ostrov zůstal veřejnosti. Dražbu nakonec nikdo nedokončil." },
        { nazev: "Legenda z televize", text: "Pověst „nejstrašidelnějšího ostrova světa“ přišla teprve s pořady o lovení duchů. Benátské archivy popisují mnohem obyčejnější karanténní stanici." }
      ]
    }
  },
  {
    id: "hashima-island",
    patch: {
      nazev: "Hašima (Gunkandžima)",
      lead: "Betonový ostrov u Nagasaki, kde kdysi žilo nejhustěji osídlené společenství na Zemi - a od roku 1974 jen vítr a moře.",
      atmosfera: 4.7,
      paranormalniAktivita: "atmosféra opuštěného místa",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká na trase prohlídky",
      pristupnost: "jen organizované výlety lodí",
      popisy: {
        zahada: "Hašima je ostrov o rozloze 6 hektarů obehnaný mořskou zdí, takže z dálky připomíná válečnou loď - odtud přezdívka Gunkandžima, „ostrov válečná loď“. Na jeho povrchu stojí desítky betonových obytných bloků, škola, nemocnice a chrám.",
        historie: "Mitsubishi tu od roku 1890 těžilo podmořské uhlí. Roku 1916 zde vznikl první velký železobetonový obytný dům v Japonsku. Kolem roku 1959 žilo na ostrově přes 5 000 lidí. Za druhé světové války byli v dolech nuceně nasazeni Korejci a Číňané. Když japonská energetika přešla na ropu, důl roku 1974 zavřeli a obyvatelé odešli během několika týdnů. Od roku 2015 je ostrov součástí památky UNESCO.",
        legenda: "Ostrov se proslavil jako sídlo padoucha ve filmu o Jamesi Bondovi Skyfall (2012), přestože se tam skutečně nenatáčelo. Na sociálních sítích koluje řada historek o duších horníků.",
        paranormalni: "Návštěvníci zmiňují zvláštní ticho a pocit prázdnoty mezi zdmi bloků. Jihokorejská strana připomíná, že ostrov je pro ni místem utrpení nuceně nasazených.",
        skepticke: "Atmosféru „města duchů“ vytváří rychlé opuštění, mořská sůl a tajfuny, které beton rozkládají. Spor kolem zápisu do UNESCO se netýká duchů, ale historické paměti: Japonsko se zavázalo informovat o nucené práci, kritici tvrdí, že nedostatečně."
      },
      praktickeInfo: "Výlety lodí vyplouvají z Nagasaki a vystoupit je možné jen při klidném moři - za vyšších vln loď ostrov jen obepluje. Pohyb je omezen na vyhlídkové plošiny na jižní straně, do budov se nevstupuje.",
      pribehy: [
        { nazev: "Nejhustěji obydlené místo na Zemi", text: "Na konci 50. let žilo na ostrově přes 5 000 lidí, což odpovídá hustotě kolem 83 500 lidí na km². Děti si hrály na střechách, protože jinde nebylo místo." },
        { nazev: "Odvrácená strana Gunkandžimy", text: "Za války pracovaly v podmořských šachtách stovky nuceně nasazených Korejců a Číňanů. Jejich svědectví jsou důvodem sporu o to, jak se má o ostrově vyprávět." }
      ]
    }
  },
  {
    id: "island-of-the-dolls",
    patch: {
      nazev: "Ostrov panenek (Isla de las Muñecas)",
      lead: "Malý ostrůvek v kanálech Xochimilca v Mexiku, ověšený stovkami poškozených panenek - kvůli duchu utonulé dívky, kterou nikdo jiný neviděl.",
      atmosfera: 4.7,
      paranormalniAktivita: "silná místní tradice",
      historickaDolozenost: "střední",
      nebezpecnost: "nízká",
      pristupnost: "lodí trajinera, malý poplatek",
      popisy: {
        zahada: "Panenky visí na stromech, plotech a zdech chatrče. Sluncem vybledlé, bez očí a končetin, porostlé plísní. Místo vytvořil jediný muž, Don Julián Santana Barrera, který tu žil desítky let v ústraní.",
        historie: "Julián Santana se na ostrůvek v kanálech Xochimilca přestěhoval kolem 50. let 20. století. Začal sbírat a věšet panenky vylovené z vody a později i ty z odpadků. V roce 2001 byl nalezen mrtvý v kanálu, údajně na stejném místě, kde podle jeho vyprávění utonula dívka. Ostrov dnes spravuje jeho rodina a čtvrť Xochimilco je součástí památky UNESCO.",
        legenda: "Santana tvrdil, že v kanálu našel utonulou dívku a krátce poté panenku plující ve vodě. Pověsil ji na strom, aby uctil duši dívky. Duch ho ale podle jeho slov dál pronásledoval, a tak věšel další a další panenky.",
        paranormalni: "Návštěvníci tvrdí, že panenky v noci šeptají, otáčejí hlavy a otvírají oči. Někteří nechávají nové panenky a dary, aby se duchovi zavděčili.",
        skepticke: "Existenci utonulé dívky nepotvrzují žádné záznamy a příběh známe jen od samotného Santany. Místní rodiny nevylučují, že dívka byla smyšlená nebo symbolická. Pohyby panenek vysvětluje vítr a únava materiálu. Ostrov je spíš osobní pomník osamělého muže než paranormální jev."
      },
      praktickeInfo: "Na ostrov vedou výlety tradičními loďkami trajinera z přístavišť v Xochimilcu, cesta trvá zhruba hodinu až dvě tam i zpět - domluv cenu předem. Vstup na ostrov je za malý poplatek správcům. Je to rodinný majetek, chovej se uctivě.",
      pribehy: [
        { nazev: "Smrt na stejném místě", text: "Don Julián byl roku 2001 nalezen utonulý v kanálu blízko místa, kde podle svých slov kdysi našel tělo dívky. Tato shoda z ostrova udělala celosvětovou legendu." },
        { nazev: "Panenky od návštěvníků", text: "Sbírka dál roste - turisté přivážejí nové panenky jako dar. Jejich počet dnes jde do stovek až tisíců." }
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
