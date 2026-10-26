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
    id: "newgrange",
    patch: {
      nazev: "Newgrange",
      lead: "Mohyla starší než egyptské pyramidy, do jejíž chodby vnikne sluneční paprsek jen několik rán v roce - o zimním slunovratu.",
      atmosfera: 4.7,
      paranormalniAktivita: "mytologie a astronomie",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "jen s prohlídkou z návštěvnického centra",
      popisy: {
        zahada: "Newgrange v irském údolí Boyne je obrovská kruhová mohyla s kamennou chodbou a komorou. Nad vchodem je „střešní okénko“, kterým o zimním slunovratu proniká sluneční paprsek až na podlahu komory asi na 17 minut.",
        historie: "Mohyla vznikla kolem roku 3200 př. n. l., je tedy starší než Stonehenge i Velká pyramida v Gíze. Vstupní kámen zdobí spirály. Archeolog Michael O'Kelly roku 1967 jako první v moderní době pozoroval paprsek slunovratu. Údolí Boyne je od roku 1993 na seznamu UNESCO.",
        legenda: "V irské mytologii je Newgrange sídlem bohů Tuatha Dé Danann a domovem boha Aenguse. Hrdina Cú Chulainn byl podle některých příběhů počat právě zde.",
        paranormalni: "Lidé, kteří v komoře zažili úsvit slunovratu, popisují silný duchovní zážitek. Mýty o „vílích kopcích“ (sídhe) spojují mohylu s jiným světem.",
        skepticke: "Orientace na slunovrat je doložená a záměrná. Bílá křemenná fasáda je ale sporná moderní rekonstrukce z 70. let - archeologové se přou, jak mohyla původně vypadala."
      },
      praktickeInfo: "Newgrange je asi 50 minut autem severně od Dublinu. Vstup je jen přes návštěvnické centrum Brú na Bóinne, odkud vozí autobus. Vstupenky jsou omezené, v létě je lepší přijet brzy. Na místa uvnitř o slunovratu se losuje - při běžné prohlídce průvodce paprsek simuluje světlem.",
      pribehy: [
        { nazev: "Paprsek slunovratu", text: "Jen několik rán kolem 21. prosince projde slunce střešním okénkem a osvětlí komoru, jak to stavitelé plánovali před 5 000 lety." },
        { nazev: "Losování o úsvit", text: "Každý rok se o místo v komoře uchází desetitisíce lidí, vylosováno je jen několik desítek." }
      ]
    }
  },
  {
    id: "trolltunga",
    patch: {
      nazev: "Trolltunga (Trollí jazyk)",
      lead: "Skalní jazyk trčící 700 metrů nad jezerem Ringedalsvatnet - podle pověsti zkamenělý jazyk trolla, který vystrčil hlavu na slunce.",
      atmosfera: 4.8,
      paranormalniAktivita: "norská lidová pověst",
      historickaDolozenost: "dobrá",
      nebezpecnost: "střední (náročná túra, počasí)",
      pristupnost: "volně přístupné, náročný výstup",
      popisy: {
        zahada: "Trolltunga je vodorovný skalní výběžek nad propastí v jižním Norsku. Fotka na jeho konci patří k nejikoničtějším obrázkům norské přírody.",
        historie: "Skála vznikla při době ledové, kdy ledovec odlamoval bloky podél puklin. Velkou popularitu získala až v 2010. letech díky sociálním sítím. Túra má kolem 20-28 km tam a zpět podle zvoleného startu.",
        legenda: "Podle norských pověstí trollové zkamení, když na ně dopadne sluneční světlo. Troll, který ze zvědavosti vystrčil jazyk, tak zůstal navždy kamenný.",
        paranormalni: "Norský folklór je plný trollů ve skalách a horách. Mlha nad jezerem dodává místu pohádkovou atmosféru.",
        skepticke: "Výběžek je výsledek mrazového zvětrávání žuly. Skutečné nebezpečí představuje počasí a délka túry - záchranáři každoročně pomáhají nepřipraveným turistům."
      },
      praktickeInfo: "Výchozím místem je Odda v regionu Hardanger, asi 3 hodiny autem z Bergenu. Túra trvá 7-12 hodin; od června do září je nejbezpečnější, mimo sezónu jen s průvodcem. Vezmi si teplé a nepromokavé oblečení, jídlo, čelovku a pevné boty. Parkování je placené, horní parkoviště se rezervuje.",
      pribehy: [
        { nazev: "Troll na slunci", text: "Zvědavý troll vystrčil jazyk ze skály ve chvíli, kdy vyšlo slunce - a zkameněl navždy." },
        { nazev: "Fronta na fotku", text: "V létě čekají turisté u skály na fotku i hodinu. Klidnější je brzy ráno nebo po západu slunce." }
      ]
    }
  },
  {
    id: "hypogeum-of-hal-saflieni",
    patch: {
      nazev: "Hypogeum Ħal Saflieni",
      lead: "Jediný známý podzemní chrám z doby kamenné na světě, vytesaný do skály před 5 000 lety - s komorou, kde hluboký mužský hlas rezonuje celým prostorem.",
      atmosfera: 4.8,
      paranormalniAktivita: "záhadná akustika",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "jen 80 návštěvníků denně, rezervace týdny předem",
      popisy: {
        zahada: "Hypogeum v Paoli na Maltě je trojpatrový podzemní komplex sálů a chodeb vytesaných do vápence. Komora „Věštírna“ má zvláštní akustiku: hluboký hlas o frekvenci kolem 110 Hz se v ní rozléhá celým hypogeem.",
        historie: "Hypogeum bylo objeveno roku 1902 při stavbě domů. Používalo se zhruba v letech 4000-2500 př. n. l. jako svatyně a pohřebiště - našly se ostatky asi 7 000 lidí. Proslulou soškou je „Spící paní“. Od roku 1980 je na seznamu UNESCO.",
        legenda: "Spící paní, soška ležící ženy, se vykládá jako bohyně plodnosti nebo symbol věčného spánku zemřelých. Kolem hypogea kolovaly pověsti o dětech, které se v tunelech ztratily.",
        paranormalni: "Mnoho návštěvníků i výzkumníků popisuje, že rezonance hlasu v komoře vyvolává fyzické pocity. Někteří spekulují o „změněném stavu vědomí“.",
        skepticke: "Rezonance je skutečná a měřitelná, není ale jisté, že ji stavitelé navrhli záměrně. Příběh o ztracených dětech se opírá o novinové historky bez důkazů."
      },
      praktickeInfo: "Hypogeum je v Paoli, asi 20 minut autobusem z Valletty. Kvůli ochraně mikroklimatu je denně jen 80 míst (po 10 lidech za hodinu) a vstupenky se vyprodávají týdny i měsíce dopředu - rezervuj co nejdřív na webu Heritage Malta. Fotografování je zakázané. Kombinuj s chrámy Tarxien kousek odtud.",
      pribehy: [
        { nazev: "Objev při stavbě", text: "Dělníci prorazili strop hypogea při kopání cisterny pro nové domy. Zprvu se objev snažili utajit." },
        { nazev: "Hlas, který chvěje kamenem", text: "Mluvíš-li v komoře Věštírny hlubokým hlasem, zvuk se rozezní celým podzemím." }
      ]
    }
  },
  {
    id: "rila-monastery",
    patch: {
      nazev: "Rilský klášter",
      lead: "Největší pravoslavný klášter Bulharska v horách Rila, se zdobenými arkádami a freskami Posledního soudu - založený poustevníkem, který žil v jeskyni.",
      atmosfera: 4.7,
      paranormalniAktivita: "duchovní tradice",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "klášter zdarma, muzeum placené",
      popisy: {
        zahada: "Rilský klášter leží v údolí v pohoří Rila v nadmořské výšce asi 1 150 metrů. Jeho černobílo-červené pruhované arkády a pestré fresky z něj dělají jeden z nejkrásnějších klášterů na Balkáně.",
        historie: "Klášter založili žáci poustevníka sv. Jana Rilského v 10. století. Během osmanské nadvlády byl ostrovem bulharské kultury a jazyka. Většina dnešních budov vznikla po požáru roku 1833. Od roku 1983 je na seznamu UNESCO.",
        legenda: "Svatý Jan Rilský žil jako poustevník v jeskyni nedaleko kláštera. Podle tradice kdo projde úzkou skulinou v jeho jeskyni, má čisté svědomí - hříšník se prý zasekne.",
        paranormalni: "Fresky Posledního soudu zobrazují démony a hříšníky v pekle. Poutníci popisují hluboký klid v horském prostředí.",
        skepticke: "Skulina v jeskyni je těsná pro každého, kdo je robustnější - nejde o zkoušku hříchu, ale o tradici. Fresky jsou ze 19. století, ne středověké."
      },
      praktickeInfo: "Klášter je asi 2 hodiny autem jižně od Sofie, jednodenní zájezdy jezdí denně. Vstup na nádvoří a do kostela je zdarma, muzeum a věž jsou placené. Oblékni se slušně (zakrytá ramena a kolena). Jeskyně sv. Jana je asi 4 km od kláštera, vede k ní stezka.",
      pribehy: [
        { nazev: "Zkouška v jeskyni", text: "Poutníci se protahují skulinou v jeskyni sv. Jana. Podle tradice projde jen ten, kdo nemá těžké hříchy." },
        { nazev: "Ostrov kultury", text: "Za osmanské vlády tu mniši uchovávali bulharské knihy a jazyk - proto je klášter národním symbolem." }
      ]
    }
  },
  {
    id: "kotor-fortress",
    patch: {
      nazev: "Pevnost sv. Jana nad Kotorem",
      lead: "Hradby šplhající 1 350 schody po strmé hoře nad Kotorskou zátokou - a výhled, který stojí za každý krok.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká až střední (horko, kluzké schody)",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Hradby Kotoru vedou ze starého města po strmém svahu hory sv. Jana až do výšky asi 260 metrů k pevnosti. Pod nimi leží Kotorská zátoka, často přirovnávaná k fjordu.",
        historie: "Opevnění se budovalo od 9. století, rozhodující podobu mu dali Benátčané v 15.-18. století. Kotor je od roku 1979 na seznamu UNESCO. V roce 1979 ho poškodilo zemětřesení.",
        legenda: "Kostelík Panny Marie Zdraví v polovině výstupu postavili podle tradice obyvatelé, kteří přežili morovou epidemii. Kotor má také tradici koček, které jsou symbolem města a podle místních přinášejí štěstí.",
        paranormalni: "Za soumraku, kdy se hradby rozsvítí, vypadají jako zlatý had. Kostelík Panny Marie Zdraví v polovině cesty je oblíbeným místem modliteb.",
        skepticke: "Hradby nejsou dílem žádného zázraku, ale staletí práce a benátského vojenského inženýrství. Kočky se ve městě rozšířily díky přístavu, kde chránily zásoby před krysami."
      },
      praktickeInfo: "Výstup začíná ve starém městě, trvá asi 1-1,5 hodiny tam. Jdi brzy ráno nebo před západem slunce kvůli horku a vezmi vodu. Schody jsou kluzké a nerovné. Kotor je asi 1,5 hodiny z letiště Podgorica nebo 2 hodiny z Dubrovníku. Když kotví výletní lodě, je staré město přeplněné.",
      pribehy: [
        { nazev: "Město koček", text: "Kotor je proslulý kočkami, které jsou všude. Má dokonce Muzeum koček." },
        { nazev: "Zlatý had", text: "Večer nasvícené hradby vypadají jako zlatý had plazící se horou nad městem." }
      ]
    }
  },
  {
    id: "mostar-bridge",
    patch: {
      nazev: "Starý most v Mostaru",
      lead: "Osmanský kamenný most z 16. století, zničený ve válce roku 1993 a znovu postavený z kamenů vylovených z řeky - skáčou z něj potápěči 24 metrů do Neretvy.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní legenda",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká (kluzký most)",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Stari most klene jediný kamenný oblouk přes řeku Neretvu v Mostaru. Na svou dobu byl technickým zázrakem: oblouk dlouhý asi 29 metrů bez středních podpěr.",
        historie: "Most postavil osmanský architekt Mimar Hajrudin roku 1566 na objednávku sultána Sulejmana Nádherného. Přežil 427 let, než ho 9. listopadu 1993 zničila dělostřelba během války. Byl obnoven za pomoci UNESCO a otevřen roku 2004, s použitím kamenů vylovených z řeky. Od roku 2005 je na seznamu UNESCO.",
        legenda: "Podle pověsti se Hajrudin tak bál, že most při odstranění lešení spadne, že si předem vykopal hrob. Most ale vydržel.",
        paranormalni: "Skoky z mostu mají staletou tradici - místní skokani předvádějí skok výměnou za příspěvky od turistů. Každé léto se koná soutěž.",
        skepticke: "Pověst o hrobě je typický příběh o strachu stavitele. Skutečně působivá je moderní historie mostu jako symbolu zničení i smíření."
      },
      praktickeInfo: "Mostar je asi 2,5 hodiny z Sarajeva a 3 hodiny z Dubrovníku, často jako jednodenní výlet. Most je zdarma, ale kamenný povrch je kluzký - choď opatrně. Skokani skáčou, když se vybere dost peněz. Nejlepší výhled je z břehu pod mostem nebo z minaretu mešity Koski Mehmed-paši.",
      pribehy: [
        { nazev: "Stavitel a jeho hrob", text: "Mimar Hajrudin si prý vykopal hrob pro případ, že most spadne. Most stál přes 400 let." },
        { nazev: "Kameny z řeky", text: "Po válce potápěči vylovili z Neretvy původní kameny a most byl postaven znovu - jako symbol smíření." }
      ]
    }
  },
  {
    id: "orava-castle",
    patch: {
      nazev: "Oravský hrad",
      lead: "Hrad na skále 112 metrů nad řekou Oravou, kde se natáčel film Nosferatu z roku 1922 - a kde se upír poprvé objevil na filmovém plátně.",
      atmosfera: 4.6,
      paranormalniAktivita: "filmová a místní legenda",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup s průvodcem",
      popisy: {
        zahada: "Oravský hrad se tyčí na úzkém vápencovém útesu v obci Oravský Podzámok na severu Slovenska. Vypadá, jako by vyrůstal přímo ze skály, a tvoří ho dolní, střední a horní hrad.",
        historie: "Hrad se připomíná od 13. století a sloužil jako ochrana obchodní cesty do Polska. Rozšiřovali ho Thurzové v 16.-17. století. Roku 1800 vyhořel a později byl obnoven. Dnes je v něm Oravské muzeum.",
        legenda: "Ve filmu F. W. Murnaua Nosferatu (1922), prvním velkém upírském filmu, hrál hrad sídlo hraběte Orloka. Tak se stal filmovým „Drákulovým hradem“ dřív než Bran.",
        paranormalni: "Mezi místními pověstmi je Bílá paní a duch Thurzovy rodiny. Během letních nocí se konají noční prohlídky s „duchy“.",
        skepticke: "Natáčení Nosferatu je doložené, ale hrad nemá spojení se skutečným Vladem III. Duchové jsou součástí turistických programů."
      },
      praktickeInfo: "Oravský Podzámok je asi 3 hodiny autem z Bratislavy a 2,5 hodiny z Krakova. Prohlídky jsou jen s průvodcem (ve více jazycích v sezóně), trvají kolem 2 hodin a vedou po mnoha schodech. Nejlepší fotka hradu je z mostu přes Oravu.",
      pribehy: [
        { nazev: "První filmový upír", text: "Hrabě Orlok z Nosferatu kráčel po hradbách Oravského hradu už v roce 1922 - o deset let dřív než Drákula Bély Lugosiho." },
        { nazev: "Hrad ze skály", text: "Stavitelé využili tvar útesu tak, že hrad vypadá jako jeho přirozené pokračování." }
      ]
    }
  },
  {
    id: "knossos",
    patch: {
      nazev: "Knóssos",
      lead: "Palác krále Mínóa na Krétě, kde podle mýtu stál labyrint s Mínótaurem - a jehož zbarvené sloupy jsou dílem sporné rekonstrukce archeologa Evanse.",
      atmosfera: 4.5,
      paranormalniAktivita: "mytologická tradice",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká (horko)",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Knóssos je největší archeologické naleziště minojské civilizace, nejstarší vyspělé kultury v Evropě. Spleť místností, chodeb a schodišť paláce mohla dát vzniknout mýtu o labyrintu.",
        historie: "Palác vzkvétal zhruba v letech 1900-1350 př. n. l. Na začátku 20. století ho vykopal britský archeolog Arthur Evans, který části paláce zrekonstruoval z betonu a nechal je natřít. Minojské písmo Lineární A dodnes nikdo nerozluštil.",
        legenda: "Podle mýtu nechal král Mínós vystavět labyrint pro Mínótaura, napůl býka a napůl člověka. Hrdina Théseus ho zabil a z labyrintu ho vyvedla nit Ariadny.",
        paranormalni: "Fresky s býky, přes které skáčou akrobaté, spojují mýtus s rituály minojské kultury. Návštěvníci hledají, kde by mohl být „skutečný labyrint“.",
        skepticke: "Evansovy rekonstrukce jsou dnes kritizovány jako příliš fantazijní - některé barvy a tvary jsou jeho představou. Labyrint je mýtus, ale býčí kult minojské kultury je doložený."
      },
      praktickeInfo: "Knóssos je asi 20 minut autobusem z Heraklionu. Přijď hned ráno kvůli horku a davům. Prohlídka trvá 1,5-2 hodiny, průvodci jsou u vstupu. Originály fresek jsou v Archeologickém muzeu v Heraklionu - kombinovaná vstupenka se vyplatí.",
      pribehy: [
        { nazev: "Ariadnina nit", text: "Princezna Ariadna dala Théseovi klubko nitě, aby trefil z labyrintu ven - jeden z nejslavnějších příběhů o lásce a lsti." },
        { nazev: "Nepřečtené písmo", text: "Minojské tabulky v Lineárním A čekají na rozluštění už přes sto let." }
      ]
    }
  },
  {
    id: "eisriesenwelt",
    patch: {
      nazev: "Eisriesenwelt (Svět ledových obrů)",
      lead: "Největší ledová jeskyně na světě vysoko v Alpách, kde se prochází jen se svítilnou nebo karbidovou lampou mezi ledovými vodopády a sály.",
      atmosfera: 4.7,
      paranormalniAktivita: "lidové pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká (chlad, schody)",
      pristupnost: "placený vstup s průvodcem, sezónně",
      popisy: {
        zahada: "Eisriesenwelt v pohoří Tennengebirge u Werfenu má přes 40 km chodeb, z nichž první kilometr je pokrytý ledem. Prohlídka vede mezi ledovými útvary osvětlenými jen lampami v rukou průvodců a návštěvníků.",
        historie: "Jeskyni objevil roku 1879 přírodovědec Anton von Posselt-Czorich. Systematicky ji prozkoumal Alexander von Mörk od roku 1912. Led vzniká, protože do jeskyně proudí v zimě studený vzduch a jarní tající voda v ní zamrzá.",
        legenda: "Místní kdysi věřili, že jeskyně je vstupem do pekla, a báli se do ní vstoupit. Jména útvarů jako Hymirův hrad odkazují na severskou mytologii o ledových obrech.",
        paranormalni: "V úplné tmě a mrazu, kde jediné světlo dává plamen lampy, popisují návštěvníci pocit vstupu do jiného světa.",
        skepticke: "Led je výsledkem „komínového efektu“ cirkulace vzduchu. Strach z pekla měl přirozený původ ve studeném proudu vzduchu, který z jeskyně vane."
      },
      praktickeInfo: "Werfen je asi 40 minut vlakem ze Salcburku, dál autobus k parkovišti. Následuje 20 minut chůze, lanovka a dalších 20 minut ke vchodu. Prohlídka trvá kolem 75 minut a vede přes 700 schodů. Uvnitř je pod nulou - teplé oblečení i v létě. Otevřeno je přibližně od května do října, fotografování je zakázané.",
      pribehy: [
        { nazev: "Brána do pekla", text: "Místní se jeskyně báli a říkali jí brána do pekla. Ledový vzduch, který z ní fouká, ten dojem posiloval." },
        { nazev: "Světlo lampy", text: "Uvnitř není elektrické osvětlení - ledové sály vidíš jen ve světle lamp, což dodává prohlídce dobrodružný charakter." }
      ]
    }
  },
  {
    id: "bock-casemates",
    patch: {
      nazev: "Kasematy Bock v Lucemburku",
      lead: "Labyrint 17 km tunelů vytesaných do skály pod městem, které kdysi přezdívali „Gibraltar severu“ - a kde se za války ukrývaly desítky tisíc lidí.",
      atmosfera: 4.4,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup, sezónně",
      popisy: {
        zahada: "Kasematy Bock jsou podzemní chodby a dělostřelecká postavení vytesaná do skály Bock, kde stál původní hrad Lucemburků. Z oken ve skále je výhled na údolí řeky Alzette.",
        historie: "Na skále Bock postavil hrabě Siegfried roku 963 hrad, z něhož vyrostlo město Lucemburk. Kasematy začali budovat Španělé roku 1644, rozšiřovali je Francouzi a Rakušané. Po roce 1867 byla pevnost většinou zbořena, ale část tunelů zůstala. Za světových válek sloužily jako kryt pro až 35 000 lidí. Od roku 1994 jsou součástí UNESCO.",
        legenda: "Podle pověsti si hrabě Siegfried vzal vílu Melusinu, která ho požádala, aby ji v sobotu nikdy nespatřil. Když ji tajně uviděl v lázni s rybím ocasem, zmizela do skály Bock - a pokaždé po sedmi letech se vynoří.",
        paranormalni: "Místní tvrdí, že Melusina šije pod skálou nekonečnou košili. Pokud ji dokončí, Lucemburk zmizí ve skále.",
        skepticke: "Příběh o Melusině je evropská pověst známá z Francie i dalších zemí, kterou si lucemburská tradice přisvojila. Kasematy jsou vojenská stavba, žádná víla tu nebydlí."
      },
      praktickeInfo: "Kasematy jsou v centru Lucemburku, kousek od mostu Pont du Château. Otevřeny jsou zhruba od března do listopadu, prohlídka trvá asi 45 minut. Uvnitř je chladno a schody jsou strmé. Kombinuj s procházkou po promenádě Chemin de la Corniche, „nejkrásnějším balkonem Evropy“.",
      pribehy: [
        { nazev: "Víla Melusina", text: "Zakladatel Lucemburku si podle legendy vzal vílu, kterou ztratil, když porušil zákaz a podíval se na ni v sobotu." },
        { nazev: "Kryt pro celé město", text: "Za světových válek se do tunelů ukrývaly desítky tisíc obyvatel před bombardováním." }
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
