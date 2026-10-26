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
    id: "frankenstein-castle",
    patch: {
      nazev: "Hrad Frankenstein",
      lead: "Zřícenina nad Darmstadtem, kde se v 17. století narodil alchymista Johann Dippel - a kterou mnozí spojují s románem Mary Shelleyové.",
      atmosfera: 4.5,
      paranormalniAktivita: "literární legenda",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Burg Frankenstein stojí na kopci nad Darmstadtem v Hesensku. Jméno hradu a jeho slavný rodák lákají k domněnce, že inspiroval Mary Shelleyovou k románu Frankenstein (1818).",
        historie: "Hrad založili páni z Frankensteinu ve 13. století. Johann Konrad Dippel, který se tu narodil roku 1673, byl teolog, lékař a alchymista. Pokoušel se vyrobit „elixír života“ a vynalezl pruskou modř a „Dippelův olej“ z destilace zvířecích kostí.",
        legenda: "Podle pověsti Dippel prováděl na hradě pokusy s mrtvolami, aby je oživil. Další legendy mluví o rytíři Jiřím, který zabil draka u hradní studny.",
        paranormalni: "Hrad je proslulý halloweenskými slavnostmi, které patří k největším v Německu. Lovci duchů tu natáčeli televizní pořady.",
        skepticke: "Mary Shelleyová hrad pravděpodobně nikdy nenavštívila a přímé doklady o inspiraci chybí. Dippel hrad nevlastnil a o pokusech s mrtvolami na hradě nejsou historické záznamy."
      },
      praktickeInfo: "Hrad je asi 20 minut autem z Darmstadtu a 45 minut z Frankfurtu nad Mohanem. Zřícenina je zdarma, nahoře je restaurace. Na Halloween (říjen-listopad) se konají placené noční akce, vstupenky se rychle vyprodávají.",
      pribehy: [
        { nazev: "Alchymista z hradu", text: "Johann Dippel se narodil na hradě Frankenstein a hledal elixír nesmrtelnosti - postava jako stvořená pro gotický román." },
        { nazev: "Halloween na hradě", text: "Každý podzim se zřícenina mění v jednu z největších halloweenských akcí v Evropě." }
      ]
    }
  },
  {
    id: "wewelsburg-castle",
    patch: {
      nazev: "Hrad Wewelsburg",
      lead: "Jediný trojúhelníkový hrad v Německu, který Heinrich Himmler chtěl přestavět na ideologické centrum SS - s kryptou a mozaikou „černého slunce“.",
      atmosfera: 4.5,
      paranormalniAktivita: "esoterické teorie",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placené muzeum",
      popisy: {
        zahada: "Wewelsburg u Paderbornu v Severním Porýní-Vestfálsku má neobvyklý trojúhelníkový půdorys. Ve 30. letech ho Heinrich Himmler pronajal pro SS a začal ho přestavovat na kultovní centrum.",
        historie: "Renesanční hrad postavili paderbornští knížata-biskupové v letech 1603-1609. Za nacismu na přestavbě pracovali vězni koncentračního tábora Niederhagen, z nichž stovky zemřely. Dnes je zde Památník a muzeum Wewelsburg, které dokumentuje zločiny SS.",
        legenda: "V Severní věži je mozaika „Schwarze Sonne“ (černé slunce) se 12 paprsky a krypta s kruhovým prostorem. Esoterici a neonacisté si tato místa mytologizovali.",
        paranormalni: "Kolem hradu kolují teorie o okultních rituálech SS. Návštěvníci popisují tísnivou atmosféru v kryptě.",
        skepticke: "Historici zdůrazňují, že většina „okultních“ příběhů je přehnaná - SS sloužila spíše ideologii než skutečné magii. Muzeum se záměrně zaměřuje na oběti a zločiny, ne na mýty."
      },
      praktickeInfo: "Wewelsburg je asi 20 minut autem od Paderbornu. Muzeum je placené a otevřené většinu roku (kromě pondělí). Výstava je velmi podrobná a vyžaduje čas. Chovej se s respektem - jde o pamětní místo obětí nacismu.",
      pribehy: [
        { nazev: "Trojúhelníkový hrad", text: "Neobvyklý půdorys hradu je dílem renesančních biskupů - ne nacistické ideologie, jak tvrdí některé teorie." },
        { nazev: "Památník obětí", text: "V sousedství stával tábor Niederhagen. Muzeum připomíná jména vězňů, kteří při přestavbě zemřeli." }
      ]
    }
  },
  {
    id: "beelitz-heilstatten",
    patch: {
      nazev: "Beelitz-Heilstätten",
      lead: "Obrovské opuštěné sanatorium u Berlína, kde se léčil mladý Hitler po zranění v první světové válce - a kde dnes vede vyhlídková stezka korunami stromů nad ruinami.",
      atmosfera: 4.7,
      paranormalniAktivita: "atmosféra opuštěného místa",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká na stezce, vysoká mimo ni",
      pristupnost: "stezka placená, ruiny jen s prohlídkou",
      popisy: {
        zahada: "Beelitz-Heilstätten je komplex více než 60 budov v lesích jihozápadně od Berlína. Postupně ho pohlcuje příroda: na střechách rostou stromy a chodby jsou plné listí.",
        historie: "Sanatorium pro nemocné tuberkulózou postavila berlínská pojišťovna v letech 1898-1930. V první světové válce sloužilo jako vojenská nemocnice - roku 1916 se tu léčil Adolf Hitler. Po roce 1945 ho převzala sovětská armáda, která tu měla největší vojenskou nemocnici mimo SSSR (léčil se tu i Erich Honecker). Po odchodu Sovětů roku 1994 začalo chátrat.",
        legenda: "Opuštěné chirurgické sály a pokoje se objevily ve filmech jako Pianista. Na přelomu 80. a 90. let v okolí řádil sériový vrah, což přispělo k pověsti temného místa.",
        paranormalni: "Mezi průzkumníky opuštěných míst (urbex) je Beelitz legendou - hlásí kroky, hlasy a dveře, které se samy zavírají.",
        skepticke: "Zvuky v opuštěných budovách způsobuje vítr, ptáci a uvolněné části staveb. Skutečným nebezpečím jsou propadlé podlahy a ostré předměty, ne duchové."
      },
      praktickeInfo: "Beelitz-Heilstätten je asi 40 minut vlakem z Berlína (stanice Beelitz-Heilstätten). Vyhlídková stezka Baumkronenpfad je placená a vede nad ruinami ženského pavilonu. Prohlídky vybraných budov s průvodcem je nutné rezervovat. Nevstupuj do budov bez povolení - je to nebezpečné a nelegální.",
      pribehy: [
        { nazev: "Les na střeše", text: "Na střeše ženského pavilonu vyrostl les. Ze stezky v korunách stromů je vidět, jak příroda přebírá stavby." },
        { nazev: "Sovětská nemocnice", text: "Téměř 50 let tu sídlila největší sovětská vojenská nemocnice mimo SSSR." }
      ]
    }
  },
  {
    id: "drachenfels",
    patch: {
      nazev: "Drachenfels (Dračí skála)",
      lead: "Kopec nad Rýnem se zříceninou hradu, kde podle Písně o Nibelunzích zabil Siegfried draka a vykoupal se v jeho krvi.",
      atmosfera: 4.5,
      paranormalniAktivita: "germánská mytologie",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "zubačka placená, cesta pěšky zdarma",
      popisy: {
        zahada: "Drachenfels je vrch v pohoří Siebengebirge u Königswinteru nad Rýnem. Na vrcholu je zřícenina hradu z 12. století, na svahu novogotický zámek Drachenburg.",
        historie: "Trachyt z Drachenfelsu se ve středověku těžil na stavbu kolínské katedrály. Ozubnicová dráha Drachenfelsbahn jezdí od roku 1883 a je nejstarší v Německu. Lord Byron oslavil Drachenfels ve své poezii.",
        legenda: "Podle Písně o Nibelunzích zabil hrdina Siegfried draka Fafnira a vykoupal se v jeho krvi, která ho učinila nezranitelným - až na místo mezi lopatkami, kam mu spadl lipový list.",
        paranormalni: "V jeskyni na svahu, „Nibelungenhalle“, je kamenný drak. Místní pověsti mluví o dračím pokladu ukrytém ve skále.",
        skepticke: "Píseň o Nibelunzích je středověký epos a spojení s konkrétním kopcem je romantická tradice 19. století. Nibelungenhalle byla postavena v roce 1913 k výročí Richarda Wagnera."
      },
      praktickeInfo: "Königswinter je asi 30 minut vlakem z Kolína nad Rýnem nebo Bonnu. Na vrchol jede zubačka nebo vede stezka (asi 45 minut). Kombinuj se zámkem Drachenburg a Nibelungenhalle. Z vrcholu je výhled na údolí Rýna.",
      pribehy: [
        { nazev: "Lipový list", text: "Siegfried se stal nezranitelným díky dračí krvi - jen lipový list, který mu spadl na záda, mu nechal jedno slabé místo." },
        { nazev: "Kámen pro katedrálu", text: "Ze skály Drachenfels se těžil kámen na stavbu kolínské katedrály." }
      ]
    }
  },
  {
    id: "bomarzo-monster-park",
    patch: {
      nazev: "Park netvorů v Bomarzu (Sacro Bosco)",
      lead: "Renesanční zahrada plná obřích kamenných netvorů, včetně otevřené tlamy, do které se dá vejít - vytvořená knížetem ze zármutku po smrti manželky.",
      atmosfera: 4.7,
      paranormalniAktivita: "manýristická symbolika",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Sacro Bosco (Posvátný háj) u Bomarza v Laziu je park s obřími sochami vytesanými přímo z balvanů: draky, obry, slona s věží, želvou a nakloněným domem. Nejslavnější je Orcus, obří tlama s nápisem „Všechny myšlenky odlétají“.",
        historie: "Park nechal vytvořit kníže Pier Francesco „Vicino“ Orsini od roku 1552, po válce a smrti své ženy Giulie Farnese. Po jeho smrti park zarostl a byl zapomenut. Znovuobjeven byl kolem poloviny 20. století, kdy ho navštívil i Salvador Dalí.",
        legenda: "Nápisy v parku vyzývají návštěvníky, aby hledali smysl: „Vy, kteří cestujete světem a chcete vidět divy, pojďte sem.“ Výklad jeho alegorií zůstává nejistý.",
        paranormalni: "Nakloněný dům vyvolává závrať a dezorientaci. Návštěvníci popisují zvláštní, snový dojem z parku.",
        skepticke: "Park je umělecké dílo manýrismu, ne okultní místo. Nakloněný dům je záměrně postaven tak, aby klamal smysly."
      },
      praktickeInfo: "Bomarzo je asi 1,5 hodiny autem severně od Říma, blízko Viterba. Veřejná doprava je omezená, nejsnazší je auto. Park je otevřený celoročně, prohlídka trvá 1-2 hodiny. Kombinuj s Civitou di Bagnoregio.",
      pribehy: [
        { nazev: "Tlama Orka", text: "Do obří kamenné tlamy se dá vejít - uvnitř je stůl. Ozvěna zesiluje hlas, takže šepot zní jako hlas obra." },
        { nazev: "Dalí v háji", text: "Salvador Dalí byl parkem tak nadšený, že ho natáčel a inspiroval se jím." }
      ]
    }
  },
  {
    id: "castel-del-monte",
    patch: {
      nazev: "Castel del Monte",
      lead: "Osmiboký hrad císaře Fridricha II. s osmi osmibokými věžemi na kopci v Apulii - stavba, jejíž účel dodnes nikdo nevysvětlil.",
      atmosfera: 4.6,
      paranormalniAktivita: "esoterická a matematická symbolika",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Castel del Monte má dokonale osmiúhelníkový půdorys, osm osmibokých věží a osm místností v každém patře. Nemá příkop ani padací most, takže zřejmě nesloužil k obraně. Jeho skutečný účel zůstává záhadou.",
        historie: "Hrad dal postavit císař Fridrich II. Hohenštaufský kolem roku 1240. Fridrich byl vzdělanec zajímající se o matematiku, astronomii a sokolnictví. Hrad je od roku 1996 na seznamu UNESCO a je vyobrazen na italské euro minci 1 cent.",
        legenda: "Hrad se spojuje s legendou o svatém grálu a templářích. Číslo osm symbolizuje spojení země (čtverec) a nebe (kruh).",
        paranormalni: "Esoterici tvrdí, že hrad je zarovnán se sluncem při slunovratech a rovnodennostech a že jde o „kamenný kalendář“.",
        skepticke: "Astronomické teorie jsou spekulativní. Hrad mohl sloužit jako lovecký zámeček nebo reprezentativní sídlo. Spojení s grálem je romantický výklad."
      },
      praktickeInfo: "Castel del Monte je asi 1 hodinu autem z Bari, nejbližší město je Andria. Od parkoviště jezdí kyvadlový autobus. Prohlídka trvá kolem hodiny. Kombinuj s Alberobellem a jeho domky trulli.",
      pribehy: [
        { nazev: "Hrad na euru", text: "Osmiboký hrad je na italské minci 1 euro cent - každý Ital ho má v peněžence." },
        { nazev: "Císař, který psal o sokolech", text: "Fridrich II. napsal knihu o sokolnictví. Hrad mohl sloužit jako jeho lovecký zámeček." }
      ]
    }
  },
  {
    id: "orvieto-underground",
    patch: {
      nazev: "Podzemí Orvieta",
      lead: "Město na tufové skále, pod kterým je přes 1 200 jeskyní, holubníků a studní - včetně Studny sv. Patrika s dvojitým točitým schodištěm pro osly.",
      atmosfera: 4.5,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "prohlídky s průvodcem",
      popisy: {
        zahada: "Orvieto v Umbrii stojí na vysoké tufové plošině. Pod jeho ulicemi Etruskové a pozdější obyvatelé vyhloubili přes 1 200 jeskyní: sklepy, olivové lisy, holubníky a studny.",
        historie: "Pozzo di San Patrizio (Studna sv. Patrika) nechal vyhloubit papež Klement VII. v letech 1527-1537, aby město mělo vodu při obléhání. Studna je hluboká 54 metrů a má dvě samostatná točitá schodiště, takže osli nesoucí vodu nahoru a dolů se nikdy nesetkali.",
        legenda: "Jméno studně dala legenda o jeskyni sv. Patrika v Irsku, kterou považovali za vstup do očistce. V Itálii se dodnes říká „bezedná jako studna sv. Patrika“ o někom, kdo utrácí bez konce.",
        paranormalni: "Etruské hrobky v okolí a tmavé chodby dodávají městu tajemný ráz. Holubníky v tufových stěnách sloužily k chovu holubů na maso.",
        skepticke: "Podzemí je převážně praktické - vznikalo těžbou kamene a jako sklady. Spojení studně s očistcem je jen přirovnání."
      },
      praktickeInfo: "Orvieto je asi 1 hodinu vlakem z Říma nebo Florencie, z nádraží vede lanovka do města. Prohlídky Orvieto Underground jsou s průvodcem a trvají asi hodinu. Studna sv. Patrika je samostatně placená - čeká tě 248 schodů dolů a zpět. Katedrála v Orvietu patří k nejkrásnějším v Itálii.",
      pribehy: [
        { nazev: "Schodiště pro osly", text: "Dvojité točité schodiště ve studni umožnilo oslům jít dolů a nahoru, aniž by se potkali." },
        { nazev: "Město holubů", text: "Ve stěnách tufu jsou tisíce otvorů pro holuby, kteří kdysi zásobovali město masem." }
      ]
    }
  },
  {
    id: "sacra-di-san-michele",
    patch: {
      nazev: "Sacra di San Michele",
      lead: "Opatství na vrcholu hory nad údolím Susa, které inspirovalo Umberta Eca k Jménu růže - s „Schodištěm mrtvých“, lemovaným kdysi kostrami mnichů.",
      atmosfera: 4.8,
      paranormalniAktivita: "náboženská legenda",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Sacra di San Michele stojí na vrcholu hory Pirchiriano ve výšce 962 metrů nad údolím Susa u Turína. Klášter vyrůstá přímo ze skály - skalní vrchol je zapuštěn do podlahy kostela.",
        historie: "Opatství bylo založeno koncem 10. století a stalo se významnou zastávkou na poutní cestě Via Francigena. Leží na linii, která spojuje Skellig Michael v Irsku, Mont-Saint-Michel a další svatyně archanděla Michaela. Je symbolem regionu Piemont.",
        legenda: "Podle legendy dívka Alda skočila z věže, aby unikla vojákům, a andělé ji zachránili. Když chtěla skok zopakovat z pýchy, zahynula. Věži se proto říká „Věž krásné Aldy“.",
        paranormalni: "Schodiště mrtvých (Scalone dei Morti) bylo kdysi lemováno ostatky mnichů. Linie svatyní sv. Michaela je pro esoteriky „mečem archanděla“.",
        skepticke: "Zarovnání svatyní na jedné linii je spíše zajímavost, protože vzdálenosti jsou obrovské a odchylky velké. Umberto Eco se Sacrou inspiroval, ale děj románu se odehrává v jiném, fiktivním klášteře."
      },
      praktickeInfo: "Sacra je asi 40 minut autem z Turína. Vlakem se dojede do Sant'Ambrogio di Torino, odkud vede strmá pěší stezka (1,5 hodiny). Z parkoviště nahoře je to 15 minut pěšky. Otevřeno je téměř celoročně, v pondělí a mimo sezónu zkrácené hodiny.",
      pribehy: [
        { nazev: "Krásná Alda", text: "Dívka přežila skok z věže díky andělům - podruhé, když skákala z pýchy, už zachráněna nebyla." },
        { nazev: "Inspirace pro Jméno růže", text: "Umberto Eco přiznal, že ho klášter na hoře inspiroval při tvorbě opatství z románu." }
      ]
    }
  },
  {
    id: "zugarramurdi-caves",
    patch: {
      nazev: "Čarodějnické jeskyně v Zugarramurdi",
      lead: "Jeskyně v Baskicku, kde se podle inkvizice konaly čarodějnické sabaty - proces z roku 1610 skončil upálením několika lidí.",
      atmosfera: 4.6,
      paranormalniAktivita: "historie čarodějnických procesů",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup, muzeum čarodějnic",
      popisy: {
        zahada: "Cueva de Zugarramurdi je velká vápencová jeskyně, kterou protéká potok „Pekelný potok“ (Infernuko erreka). Navarrská vesnice Zugarramurdi u francouzských hranic je spojena s nejslavnějším čarodějnickým procesem Španělska.",
        historie: "Roku 1610 inkvizice v Logroñu odsoudila přes 30 obyvatel Zugarramurdi a okolí z čarodějnictví. Šest jich bylo upáleno na hranici a dalších pět upáleno v podobě figurín, protože zemřeli ve vězení. Inkvizitor Alonso de Salazar Frías pak vyšetřoval další obvinění a dospěl k závěru, že čarodějnice neexistují - jeho zpráva přispěla k ukončení honů na čarodějnice ve Španělsku.",
        legenda: "Lidé podle obvinění v jeskyni uctívali ďábla v podobě kozla (Akelarre), tančili a připravovali lektvary. Slovo „akelarre“ (kozí louka) se stalo španělským slovem pro sabat.",
        paranormalni: "Každý rok v létě se tu koná Den čarodějnic s ohni a jídlem. Film Čarodějnice ze Zugarramurdi (2013) místo proslavil.",
        skepticke: "Přiznání byla získána pod nátlakem a ze strachu. Salazarova zpráva je jedním z prvních skeptických dokumentů své doby."
      },
      praktickeInfo: "Zugarramurdi je asi 1 hodinu autem z Pamplony nebo 40 minut z francouzského Biarritzu. Jeskyně a Muzeum čarodějnic (Museo de las Brujas) jsou placené. Okolní Baskicko nabízí turistiku a skvělou kuchyni. Jeskyně v Sare na francouzské straně jsou nedaleko.",
      pribehy: [
        { nazev: "Inkvizitor skeptik", text: "Alonso de Salazar Frías vyslechl stovky obviněných a nenašel jediný důkaz - jeho zpráva zachránila mnoho životů." },
        { nazev: "Kozí louka", text: "Baskické slovo akelarre (kozí louka) se stalo názvem čarodějnického sabatu ve španělštině." }
      ]
    }
  },
  {
    id: "oradour-sur-glane",
    patch: {
      nazev: "Oradour-sur-Glane",
      lead: "Vesnice, kterou jednotka SS 10. června 1944 vyvraždila - 643 obyvatel - a kterou Francie zachovala v troskách jako trvalý památník.",
      atmosfera: 5,
      paranormalniAktivita: "pietní místo",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "vstup do ruin zdarma, Centre de la mémoire placené",
      popisy: {
        zahada: "Oradour-sur-Glane v regionu Nouvelle-Aquitaine je vesnice zachovaná přesně tak, jak ji zanechali vrazi: ohořelé domy, rezavá auta, šicí stroje, kostel. Není to záhada, ale svědectví.",
        historie: "10. června 1944 obklíčila vesnici rota divize SS Das Reich. Muži byli postříleni ve stodolách, ženy a děti zavřeny do kostela, který vojáci zapálili. Zahynulo 643 lidí, přežilo jen několik. Generál de Gaulle rozhodl, že ruiny zůstanou jako památník. Nová vesnice byla postavena vedle.",
        legenda: "Proč jednotka vyvraždila právě tuto vesnici, je předmětem diskusí - mohla jít o odvetu za akce odboje, zaměnu s jinou obcí nebo teror. Jedinou přeživší z kostela byla Marguerite Rouffanche.",
        paranormalni: "Návštěvníci popisují hluboké ticho a tíhu. Na vstupu je nápis „Souviens-toi“ - Pamatuj.",
        skepticke: "Místo nemá paranormální rozměr - jeho síla spočívá v historické pravdě. Prosíme o respektování pietní povahy místa."
      },
      praktickeInfo: "Oradour-sur-Glane je asi 25 minut autem z Limoges. Do ruin se vstupuje přes Centre de la mémoire (muzeum s výstavou), samotné ruiny jsou zdarma. Prohlídka trvá 2-3 hodiny. Chovej se tiše a uctivě, nefoť se pro zábavu.",
      pribehy: [
        { nazev: "Pamatuj", text: "U vstupu do ruin stojí jediné slovo - Souviens-toi. Vesnice je zachovaná, aby se na oběti nezapomnělo." },
        { nazev: "Jediná přeživší z kostela", text: "Marguerite Rouffanche utekla z hořícího kostela oknem za oltářem. Její svědectví se stalo klíčovým důkazem." }
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
