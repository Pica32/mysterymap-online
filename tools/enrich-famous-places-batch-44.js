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
    id: "avebury",
    patch: {
      nazev: "Avebury",
      lead: "Největší kamenný kruh na světě, uvnitř kterého stojí celá vesnice s hospodou - a jehož kameny středověcí vesničané pohřbívali ze strachu před ďáblem.",
      atmosfera: 4.6,
      paranormalniAktivita: "mytologie a esoterika",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Avebury ve Wiltshiru tvoří obrovský kruhový val s příkopem a uvnitř velký vnější kruh kamenů a dva menší vnitřní. Mezi kameny se dá volně chodit a sahat na ně - na rozdíl od Stonehenge.",
        historie: "Monument vznikal zhruba v letech 2850-2200 př. n. l. Ve středověku vesničané kameny strhávali a pohřbívali, později je rozbíjeli ohněm a vodou na stavební materiál. Ve 30. letech 20. století koupil Avebury Alexander Keiller, dědic marmeládové firmy, a kameny znovu vztyčil. Spolu se Stonehenge je od roku 1986 na seznamu UNESCO.",
        legenda: "Pod jedním z povalených kamenů našli roku 1938 kostru muže s nůžkami a mincemi ze 14. století, přezdívaného „holič-chirurg“. Pověst říká, že ho kámen zabil, když ho pomáhal pohřbívat.",
        paranormalni: "V Avebury se hlásí světla mezi kameny a postavy, které zmizí. Vesnice je oblíbená mezi esoteriky a v okolí se objevují obrazce v obilí.",
        skepticke: "Holičova smrt pod kamenem je jen jedna z možných interpretací - mohlo jít o nehodu nebo pohřeb. Obrazce v obilí jsou dílem lidí, jak přiznali jejich tvůrci."
      },
      praktickeInfo: "Avebury je asi 1,5 hodiny autem z Londýna nebo 40 minut od Stonehenge. Vstup do kruhu je zdarma, muzeum Alexandra Keillera a panský dům Avebury Manor jsou placené (National Trust). V kruhu je hospoda The Red Lion se studnou uvnitř. Kombinuj se Silbury Hill a West Kennet Long Barrow.",
      pribehy: [
        { nazev: "Holič pod kamenem", text: "Pod povaleným kamenem našli kostru muže se středověkými nůžkami - snad zahynul, když kámen vesničané pohřbívali." },
        { nazev: "Marmeládový zachránce", text: "Archeolog a dědic marmeládové firmy Alexander Keiller utratil jmění, aby Avebury koupil a kameny znovu postavil." }
      ]
    }
  },
  {
    id: "callanish-stones",
    patch: {
      nazev: "Kameny v Callanish",
      lead: "Kamenný kříž s kruhem na ostrově Lewis, starší než Stonehenge - podle pověsti zkamenělí obři, kteří odmítli přijmout křesťanství.",
      atmosfera: 4.8,
      paranormalniAktivita: "mytologie a astronomie",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Calanais (Callanish) na ostrově Lewis ve Vnějších Hebridách tvoří kruh 13 kamenů s monolitem uprostřed a řady kamenů ve tvaru kříže. Kameny jsou ze 3 miliardy let staré ruly.",
        historie: "Kameny byly vztyčeny kolem roku 2900 př. n. l. Byly částečně zasypány rašelinou a odkryty roku 1857. Uvnitř kruhu je malá komorová hrobka přidaná později.",
        legenda: "Podle pověsti jsou kameny obři, které sv. Kiarán proměnil v kámen, protože odmítli křtít se. Jiná pověst mluví o „Lesklém“, který přichází o slunovratu mezi kameny s kukačkou.",
        paranormalni: "Každých 18,6 roku, při tzv. velkém lunárním zastavení, se Měsíc z kamenů zdá „tančit“ nízko nad kopci, které připomínají ležící ženu - Spící krásku. Lidé se sem sjíždějí ze světa.",
        skepticke: "Astronomické zarovnání s lunárním cyklem je předmětem debat - některé výpočty ho podporují, jiné ho považují za náhodu. Pověsti o obrech jsou křesťanské vysvětlení pohanské památky."
      },
      praktickeInfo: "Ostrov Lewis je dostupný trajektem z Ullapoolu do Stornoway (asi 2,5 hodiny) nebo letadlem. Z Stornoway je to asi 30 minut autem. Vstup je zdarma, u kamenů je návštěvnické centrum. Na Hebridách se v neděli často nic nedělá - ověř trajekty a obchody.",
      pribehy: [
        { nazev: "Spící kráska", text: "Kopce na obzoru připomínají ležící ženu. Při velkém lunárním zastavení Měsíc vychází z jejího těla - jev, který se opakuje jen jednou za 18,6 roku." },
        { nazev: "Zkamenělí obři", text: "Obři, kteří odmítli křest, se podle pověsti proměnili v kameny, aby připomínali sílu nové víry." }
      ]
    }
  },
  {
    id: "skara-brae",
    patch: {
      nazev: "Skara Brae",
      lead: "Neolitická vesnice na Orknejích, kterou bouře roku 1850 odkryla z písku - s kamennými postelemi a policemi, starší než pyramidy.",
      atmosfera: 4.6,
      paranormalniAktivita: "atmosféra pravěku",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Skara Brae na západním pobřeží hlavního ostrova Orkneje je nejlépe zachovaná neolitická vesnice v Evropě. Osm domů spojených chodbami má kamenný nábytek: postele, krby, police a nádrže.",
        historie: "Vesnice byla obydlena zhruba v letech 3180-2500 př. n. l. Pak ji zasypal písek. Roku 1850 silná bouře strhla dunu a odhalila domy. Spolu s Ring of Brodgar a Maeshowe tvoří od roku 1999 památku UNESCO Srdce neolitických Orknejí.",
        legenda: "Neví se, proč obyvatelé vesnici opustili. Starší výklad mluvil o náhlé písečné bouři, při které utíkali tak rychle, že žena ztratila korálky.",
        paranormalni: "Návštěvníci popisují pocit, že obyvatelé odešli právě před chvílí. Kamenné kuličky s rytinami nalezené na Orknejích dodnes nikdo nevysvětlil.",
        skepticke: "Dnešní archeologové předpokládají spíše postupné opuštění kvůli změně klimatu a pobřeží, ne náhlou katastrofu. Příběh o korálcích je pravděpodobně přikrášlený."
      },
      praktickeInfo: "Na Orkneje se jezdí trajektem ze Scrabsteru nebo Gills Bay nebo se letí z Edinburghu či Aberdeenu. Skara Brae je asi 30 minut autem od Stromness. Vstupenka zahrnuje i Skaill House. Na místě je replika domu, do které se dá vstoupit. Fouká tu silný vítr.",
      pribehy: [
        { nazev: "Bouře, která odkryla dějiny", text: "Roku 1850 vichřice strhla písečnou dunu a odhalila vesnici, která ležela skrytá 4 500 let." },
        { nazev: "Kamenný nábytek", text: "V každém domě je kamenná „komoda“ naproti vchodu - možná místo pro vystavení nejcennějších předmětů." }
      ]
    }
  },
  {
    id: "glamis-castle",
    patch: {
      nazev: "Hrad Glamis",
      lead: "Rodové sídlo hrabat ze Strathmore, kde vyrůstala královna matka - a hrad s tajnou komnatou, v níž měl být ukrýván „netvor z Glamis“.",
      atmosfera: 4.7,
      paranormalniAktivita: "silná místní tradice",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup s průvodcem, sezónně",
      popisy: {
        zahada: "Glamis Castle v Angusu je pohádkový zámek s věžičkami. Shakespeare v něm umístil hrad Macbetha, thane z Glamis. Dětství tu prožila královna matka Elizabeth Bowes-Lyon a narodila se tu princezna Margaret.",
        historie: "Panství patří rodině Lyonů od roku 1372. Hrad byl v 17. století přestavěn do dnešní podoby. Je stále obýván hrabaty ze Strathmore a Kinghorne.",
        legenda: "Nejznámější pověst mluví o „netvoru z Glamis“, znetvořeném dědici rodu, který měl žít v tajné komnatě. Jiný příběh vypráví o lordu Beardiem, který hrál s ďáblem karty a dodnes je slyšet jeho hlas.",
        paranormalni: "Hlášena je Šedá paní v kapli, kde je vždy volné jedno místo. Hosté údajně počítali okna zvenku a zevnitř a vyšlo jim jiné číslo.",
        skepticke: "Netvor z Glamis je pověst bez dokladů. Rozdíl v počtu oken lze vysvětlit složitým stavebním vývojem hradu. Spojení s Macbethem je literární - skutečný Macbeth s Glamis nesouvisel."
      },
      praktickeInfo: "Glamis je asi 25 minut autem od Dundee a 1,5 hodiny od Edinburghu. Prohlídky jsou s průvodcem, otevřeno je zhruba od dubna do října. Uvnitř se často nesmí fotit. Kolem je velký park a zahrady.",
      pribehy: [
        { nazev: "Tajná komnata", text: "Pověst o netvorovi tvrdí, že rodina ukrývala znetvořeného dědice v tajné místnosti. Jen hlava rodu a dědic znali pravdu." },
        { nazev: "Karty s ďáblem", text: "Lord Beardie odmítl přestat hrát karty v neděli - a podle pověsti s ním začal hrát sám ďábel." }
      ]
    }
  },
  {
    id: "chillingham-castle",
    patch: {
      nazev: "Hrad Chillingham",
      lead: "Hrad v Northumberlandu, často označovaný za nejstrašidelnější v Anglii - s mučírnou a „Modrým chlapcem“, jehož kosti našli zazděné ve zdi.",
      atmosfera: 4.7,
      paranormalniAktivita: "silná místní tradice",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup, noční prohlídky",
      popisy: {
        zahada: "Chillingham Castle leží blízko skotských hranic a byl pevností v neustálých bojích. Dnes je známý duchařskými prohlídkami, mučírnou a kobkami.",
        historie: "Hrad vznikl ve 12.-13. století a od 13. století patřil rodině Greyů. Ve 20. století chátral, od roku 1982 ho obnovuje sir Humphry Wakefield. V parku žije unikátní stádo divokého skotu Chillingham.",
        legenda: "„Modrý chlapec“ se objevoval v Růžovém pokoji jako modré světlo a ozýval se pláč. Při opravách prý ve zdi našli kosti chlapce a útržky modré látky. Po jejich pohřbení zjevení údajně ustala.",
        paranormalni: "Hrad je pravidelnou zastávkou televizních pořadů o lovení duchů. Návštěvníci popisují studená místa a hlasy v kobkách.",
        skepticke: "Příběh o nalezených kostech nemá veřejně doložený archeologický záznam. Hrad aktivně staví na duchařské pověsti, což ovlivňuje očekávání návštěvníků."
      },
      praktickeInfo: "Chillingham je asi 1 hodinu autem z Newcastlu a 1,5 hodiny z Edinburghu. Hrad je otevřený v sezóně, večerní duchařské prohlídky je nutné rezervovat. Na hradě je i ubytování. Kombinuj s ostrovem Lindisfarne a hradem Bamburgh.",
      pribehy: [
        { nazev: "Modrý chlapec", text: "Modré světlo v Růžovém pokoji a dětský pláč patřily k nejznámějším duchům Anglie." },
        { nazev: "Divoký skot", text: "V parku hradu žije stádo bílého skotu, které je přes 300 let izolované a geneticky unikátní." }
      ]
    }
  },
  {
    id: "leap-castle",
    patch: {
      nazev: "Hrad Leap",
      lead: "Irský hrad s „Krvavou kaplí“, kde bratr zabil bratra kněze u oltáře - a s kobkou plnou kostí, kterou našli až v roce 1922.",
      atmosfera: 4.8,
      paranormalniAktivita: "silná místní tradice",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "soukromý majetek, návštěvy po domluvě",
      popisy: {
        zahada: "Leap Castle v hrabství Offaly bývá označován za jeden z nejstrašidelnějších hradů světa. Je soukromým sídlem a majitelé návštěvníky občas přijímají.",
        historie: "Hrad postavil klan O'Bannon a později ho ovládal klan O'Carroll, známý krutými spory. Roku 1922 byl během irské občanské války vypálen. Od 70. let ho obnovují soukromí majitelé.",
        legenda: "Roku 1532 měl jeden z bratrů O'Carroll zabít druhého, kněze, přímo při mši v kapli - od té doby se jí říká Krvavá kaple. Při opravách po požáru se našla kobka (oubliette) s mnoha lidskými kostmi.",
        paranormalni: "Nejslavnější je „Elementál“ - páchnoucí bytost velikosti ovce. Okultistka Mildred Darby o něm psala v časopisech na počátku 20. století.",
        skepticke: "Kosti v oubliette mohou mít řadu vysvětlení, včetně starých pohřbů. Popisy Elementála pocházejí hlavně od Mildred Darby, která psala gotické romány."
      },
      praktickeInfo: "Leap Castle je asi 1,5-2 hodiny autem z Dublinu. Jde o soukromý dům, návštěvy je třeba domluvit předem - majitel občas pořádá prohlídky a hudební večery. Nerozhoduj se přijet bez ohlášení.",
      pribehy: [
        { nazev: "Krvavá kaple", text: "Bratr zabil bratra přímo u oltáře. Mše se v kapli už nikdy nesloužila." },
        { nazev: "Elementál", text: "Mildred Darby popsala bytost s prázdnýma očima a pachem rozkladu - její texty z hradu udělaly legendu." }
      ]
    }
  },
  {
    id: "hill-of-tara",
    patch: {
      nazev: "Pahorek Tara",
      lead: "Sídlo vysokých králů Irska, kde stojí Kámen osudu, který prý vykřikl pod pravým králem - a kde sv. Patrik údajně zapálil velikonoční oheň.",
      atmosfera: 4.6,
      paranormalniAktivita: "mytologie",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Hill of Tara v hrabství Meath je nevelký pahorek s valy, mohylami a kamenem Lia Fáil. V irské tradici je posvátným srdcem země a sídlem vysokých králů.",
        historie: "Nejstarší památkou je mohyla Mound of the Hostages z doby kolem 3000 př. n. l. Pahorek sloužil k obřadům po tisíce let. Roku 1843 tu Daniel O'Connell uspořádal shromáždění za zrušení unie s Británií, kterého se údajně zúčastnilo statisíce lidí.",
        legenda: "Lia Fáil, Kámen osudu, měl vykřiknout, když se ho dotkl pravý král. Podle tradice sv. Patrik zapálil na sousedním kopci Slane velikonoční oheň dřív než královský oheň v Taře, a tím vyzval pohanského krále.",
        paranormalni: "Tara je pro mnohé Iry duchovním místem, kde se konají slavnosti slunovratu. Pověsti spojují Taru s bohy Tuatha Dé Danann.",
        skepticke: "Většina historek o vysokých králích je středověká literatura. Kámen dnes stojí na jiném místě, než kde byl původně. Patrikova historka je pozdější legenda."
      },
      praktickeInfo: "Tara je asi 45 minut autem z Dublinu. Vstup na pahorek je zdarma, ve staré církvi je návštěvnické centrum (sezónně). Kombinuj s Newgrange a s kopcem Slane. Ze stavby je výhled do pěti hrabství.",
      pribehy: [
        { nazev: "Kámen, který křičí", text: "Lia Fáil měl vykřiknout pod nohou pravého krále - zkouška, kterou podle pověsti prošli jen vyvolení." },
        { nazev: "Patrikův oheň", text: "Svatý Patrik zapálil velikonoční oheň dřív než královský - příběh, který symbolizuje příchod křesťanství do Irska." }
      ]
    }
  },
  {
    id: "kjeragbolten",
    patch: {
      nazev: "Kjeragbolten",
      lead: "Balvan zaklíněný ve skalní puklině nad propastí 984 metrů hlubokou, na který si lidé stoupají kvůli fotce - jeden z nejodvážnějších snímků Norska.",
      atmosfera: 4.8,
      paranormalniAktivita: "lidové pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "střední až vysoká (výška, počasí)",
      pristupnost: "volně přístupné, náročná túra",
      popisy: {
        zahada: "Kjeragbolten je kamenný balvan zaklíněný mezi dvěma skalními stěnami na hoře Kjerag nad fjordem Lysefjord. Návštěvníci na něj šplhají a nechávají se fotit nad propastí.",
        historie: "Balvan se do pukliny zaklínil po ústupu ledovce. Kjerag je známý i jako místo pro BASE jumping. Túra na Kjeragbolten měří asi 11 km tam a zpět s převýšením kolem 800 metrů.",
        legenda: "Norské pověsti mluví o trollech, kteří balvan hodili do pukliny. Místní považují Kjerag za jeden z nejmagičtějších bodů Lysefjordu.",
        paranormalni: "Mlha, která se rychle valí z fjordu, mění horu během minut. Mnozí popisují, že na balvanu zažili nejsilnější adrenalin života.",
        skepticke: "Balvan je stabilní díky tlaku stěn, ale samotný krok na něj nad propastí je skutečné riziko - pád je smrtelný. Nikdo není povinen na kámen vstupovat."
      },
      praktickeInfo: "Túra začíná u restaurace Øygardstøl na silnici z Lysebotnu, asi 2,5-3 hodiny autem ze Stavangeru. Výstup trvá 2,5-3 hodiny jedním směrem a vede po strmých skalách s řetězy. Doporučená sezóna je červen-září. Za deště a větru na balvan nechoď.",
      pribehy: [
        { nazev: "Krok nad propastí", text: "Na balvan se vstupuje jedním krokem z římsy. Pod ním je téměř kilometr prázdna až k hladině fjordu." },
        { nazev: "Hora skokanů", text: "Kjerag patří k nejoblíbenějším místům BASE jumpingu na světě." }
      ]
    }
  },
  {
    id: "borgund-stave-church",
    patch: {
      nazev: "Roubený kostel v Borgundu",
      lead: "Dřevěný kostel z doby kolem roku 1180 s dračími hlavami na štítech - polovikingská stavba, kde se setkává křesťanství s pohanskými symboly.",
      atmosfera: 4.6,
      paranormalniAktivita: "staroseverská symbolika",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup, sezónně",
      popisy: {
        zahada: "Borgund stavkirke je jedním z nejlépe zachovaných roubených (sloupových) kostelů v Norsku. Jeho stupňovité střechy pokryté šindelem zdobí dračí hlavy, podobné přídím vikingských lodí.",
        historie: "Kostel byl postaven kolem roku 1180-1250 ze dřeva borovice. Celá konstrukce stojí na sloupech a obejde se bez hřebíků. Ve středověku stálo v Norsku přes tisíc takových kostelů, dochovalo se jich jen asi 28.",
        legenda: "Dračí hlavy podle výkladu měly odhánět zlé duchy - jde o pozůstatek předkřesťanských představ. Runové nápisy na stěnách obsahují modlitby i obyčejné vzkazy, například „Thorir napsal tyto runy“.",
        paranormalni: "V tmavém interiéru bez oken, osvětleném jen malými otvory, panuje zvláštní atmosféra. Lidé popisují pocit, jako by vešli do vikingské doby.",
        skepticke: "Dračí hlavy jsou dekorativní a ochranný prvek, ne doklad, že kostel byl pohanským chrámem. Kostel je v plně křesťanském kontextu."
      },
      praktickeInfo: "Borgund leží v údolí Lærdal na silnici E16 mezi Oslem a Bergenem, asi 4-5 hodin autem z Osla. U kostela je návštěvnické centrum s výstavou. Otevřeno je zhruba od května do září. Kombinuj s nejdelším silničním tunelem světa Lærdal (24,5 km).",
      pribehy: [
        { nazev: "Draci na střeše", text: "Dračí hlavy na štítech připomínají vikingské lodě - most mezi starou a novou vírou." },
        { nazev: "Runy na zdech", text: "Návštěvníci ve středověku vyrývali do dřeva runové vzkazy, z nichž některé jsou čitelné dodnes." }
      ]
    }
  },
  {
    id: "visby-city-walls",
    patch: {
      nazev: "Hradby Visby",
      lead: "Středověké hanzovní město na ostrově Gotland obehnané 3,4 km hradeb s desítkami věží - a s pověstí o zrazeném městě, které vydala zamilovaná dívka.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní legenda",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Visby je hlavní město ostrova Gotland ve Švédsku. Jeho hradby z 13. století patří k nejlépe zachovaným ve Skandinávii. Uvnitř jsou ruiny desítek středověkých kostelů.",
        historie: "Visby bylo ve středověku bohatým centrem obchodu Hanzy. Roku 1361 ho dobyl dánský král Valdemar IV. Atterdag. Před branami se odehrála bitva, ve které zahynuly stovky gotlandských sedláků. Od roku 1995 je Visby na seznamu UNESCO.",
        legenda: "Podle pověsti se zlatníkova dcera zamilovala do krále Valdemara a v noci mu otevřela bránu. Za trest ji měšťané zazdili zaživa do věže, které se dnes říká Jungfrutornet (Panenská věž).",
        paranormalni: "Místní tvrdí, že z Panenské věže je za nocí slyšet pláč. Visby je dějištěm mnoha strašidelných historek.",
        skepticke: "Historici považují pověst o zradě za pozdější legendu - král město nemusel dobývat, protože se vzdalo. Hromadné hroby z bitvy roku 1361 jsou však archeologicky doložené."
      },
      praktickeInfo: "Na Gotland jezdí trajekty z Nynäshamnu (asi 3 hodiny, 1 hodina autem od Stockholmu) nebo se letí. Visby je pěšky přístupné, hradby jsou zdarma. V srpnu se koná Středověký týden s kostýmy a trhy. Ruiny kostela Sankt Karin jsou nejfotografovanější.",
      pribehy: [
        { nazev: "Panenská věž", text: "Dívka, která otevřela bránu nepříteli, prý zemřela zazděná ve věži - pověst dala věži jméno." },
        { nazev: "Bitva před branami", text: "Roku 1361 padly před hradbami stovky gotlandských sedláků. Jejich kostry s brněním byly vykopány ve 20. století." }
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
