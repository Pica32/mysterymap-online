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
    id: "neuschwanstein-castle",
    patch: {
      nazev: "Zámek Neuschwanstein",
      lead: "Pohádkový zámek „šíleného“ krále Ludvíka II., který v něm strávil jen pár měsíců - a kterého po sesazení našli mrtvého v jezeře.",
      atmosfera: 4.7,
      paranormalniAktivita: "záhada smrti krále",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "jen s prohlídkou na čas, rezervace nutná",
      popisy: {
        zahada: "Neuschwanstein stojí na skále nad soutěskou Pöllat v bavorských Alpách a stal se předlohou pohádkových zámků po celém světě. Jeho stavitel, bavorský král Ludvík II., zemřel za nevyjasněných okolností pouhé dny poté, co ho prohlásili za duševně nemocného.",
        historie: "Ludvík II. začal stavět zámek roku 1869 jako romantickou poctu středověkým rytířským ságám a operám Richarda Wagnera. Stavba nebyla nikdy dokončena: hotových je jen asi 15 místností. Král tu bydlel jen přibližně 172 dní. V červnu 1886 ho vláda prohlásila za nesvéprávného a odvezla na zámek Berg. Následující večer ho našli utonulého v Starnberském jezeře spolu s jeho psychiatrem Bernhardem von Guddenem. Zámek se otevřel veřejnosti už několik týdnů po jeho smrti.",
        legenda: "Ludvík II. vstoupil do lidové paměti jako „pohádkový král“, osamělý snílek, kterého zničili úředníci. Bavorská lidová tradice odmítala věřit, že spáchal sebevraždu, a dodnes kolují teorie o vraždě - třeba o stopách po kulkách na jeho kabátě.",
        paranormalni: "Návštěvníci a průvodci vyprávějí o pocitu přítomnosti v nedokončených místnostech a o králově postavě u jezera. Pro většinu lidí je však tajemné hlavně to, že tak monumentální stavba vznikla pro jediného člověka, který v ní skoro nebydlel.",
        skepticke: "Diagnózu „duševní nemoci“ sestavili lékaři, kteří krále nikdy osobně nevyšetřili, a dnešní historici ji považují za politicky motivovanou. Smrt v jezeře zůstává nevyjasněná: možnou nehodu, útěk i násilí nelze s jistotou vyloučit ani potvrdit. Pro teorii vraždy ale neexistuje žádný ověřený důkaz."
      },
      praktickeInfo: "Zámek se navštěvuje jen s prohlídkou na přesný čas (asi 35 minut). Vstupenky je nutné rezervovat online předem, v létě se vyprodávají. Z Mnichova jede vlak do Füssenu (asi 2 hodiny) a odtud autobus do Hohenschwangau. Od pokladny je to do zámku asi 30-40 minut pěšky do kopce, nebo kočárem či autobusem. Nejslavnější výhled je z mostu Marienbrücke, který bývá v zimě uzavřen.",
      pribehy: [
        { nazev: "Král, který žil jen 172 dní ve svém snu", text: "Ludvík II. věnoval stavbě obrovské osobní dluhy, ale zámek nikdy nebyl hotový. Bydlel v něm necelého půl roku, než ho odvezli." },
        { nazev: "Předloha pohádek", text: "Silueta Neuschwansteinu inspirovala zámky z animovaných filmů a zábavních parků. Původní snílek tak nakonec ovlivnil představu o pohádkovém zámku na celém světě." }
      ]
    }
  },
  {
    id: "mont-saint-michel",
    patch: {
      lead: "Klášter na skalním ostrově, který dvakrát denně obklopí jeden z nejvyšších přílivů Evropy - a podle legendy ho založil biskup na rozkaz archanděla.",
      atmosfera: 4.8,
      paranormalniAktivita: "náboženská legenda",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká (nebezpečný příliv v zátoce)",
      pristupnost: "obec volně, opatství placené",
      popisy: {
        zahada: "Mont-Saint-Michel je žulový ostrůvek v zátoce mezi Normandií a Bretaní, na jehož vrcholu stojí gotické opatství. Rozdíl mezi přílivem a odlivem tu dosahuje až kolem 14 metrů a moře se při velkém přílivu vrací velmi rychle - ostrov se tak mění z pevniny v ostrov a zpět.",
        historie: "Svatyni tu podle tradice založil roku 708 biskup Aubert z Avranches. Benediktinský klášter vznikl v 10. století a stavba gotického souboru zvaného La Merveille pokračovala ve 13. století. Během stoleté války odolal Mont-Saint-Michel anglickému obléhání a stal se symbolem Francie. Po Velké francouzské revoluci sloužil jako vězení. Od roku 1979 je na seznamu UNESCO a v roce 2014 nahradil starou hráz nový most, aby se kolem ostrova znovu obnovilo moře.",
        legenda: "Podle legendy se biskupovi Aubertovi třikrát zjevil archanděl Michael a žádal, aby na skále postavil kostel. Když biskup otálel, archanděl mu prý prstem propálil díru do lebky - lebku s otvorem dnes ukazují v bazilice v Avranches.",
        paranormalni: "Poutníci odedávna popisují zvláštní atmosféru při přechodu písečné zátoky. Místní příběhy mluví o lidech, které pohltil tekutý písek nebo zastihl příliv - podle pověstí se ozývají mlhou.",
        skepticke: "Lebka v Avranches má otvor, který odborníci vysvětlují spíše chirurgickým zákrokem nebo jinou příčinou, ne prstem anděla. Nebezpečí v zátoce je ale skutečné: příliv a tekutý písek ohrožují lidi, kteří chodí po zátoce bez průvodce."
      },
      praktickeInfo: "Z Paříže se dá dojet vlakem do Rennes a odtud autobusem (celkem asi 4 hodiny), nebo s jednodenním zájezdem. Od parkoviště jezdí kyvadlový autobus Le Passeur. Do opatství je vstup placený, nahoru vedou stovky schodů. Přes zátoku choď jen s licencovaným průvodcem a sleduj tabulky přílivu. Nejhezčí je ostrov večer, kdy denní turisté odjedou.",
      pribehy: [
        { nazev: "Lebka s otvorem", text: "V bazilice v Avranches je uložena lebka sv. Auberta s otvorem, který měl podle legendy způsobit prst archanděla Michaela." },
        { nazev: "Příliv rychlý jako kůň", text: "Victor Hugo prý psal, že moře se tu vrací rychlostí cválajícího koně. Je to přehnané, ale příliv opravdu postupuje velmi rychle a zátoka je zrádná." }
      ]
    }
  },
  {
    id: "hallstatt-ossuary",
    patch: {
      nazev: "Hallstatt: kostnice s malovanými lebkami",
      lead: "V jedné z nejfotografovanějších vesnic světa leží kaple se stovkami lebek, na které rodiny malovaly jména, data a věnce z květin.",
      atmosfera: 4.5,
      paranormalniAktivita: "místní tradice",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "malé vstupné",
      popisy: {
        zahada: "Kostnice (Beinhaus) v kapli sv. Michala u farního kostela v Hallstattu ukrývá kolem 1 200 lebek, z nichž asi 600 je ručně malovaných. Na čele mají jména, data úmrtí a ozdoby - věnce z vavřínu, dubových listů nebo růží.",
        historie: "Hallstatt leží na úzkém pruhu mezi jezerem a horami, takže na hřbitově nebylo místo. Ostatky se proto po několika letech exhumovaly, bělely na slunci a ukládaly do kostnice. Tradice malování lebek se rozšířila od 18. století. Hallstatt je také jedním z nejstarších solných dolů světa a dal jméno celé halštatské kultuře doby železné. Oblast je od roku 1997 na seznamu UNESCO.",
        legenda: "Malování mělo zachovat identitu zemřelých a vztah k rodině: vavřín symbolizoval vítězství, břečťan život, růže lásku. Poslední lebka sem byla uložena v roce 1995 na přání ženy, která zemřela v roce 1983.",
        paranormalni: "Návštěvníci popisují silný dojem, když se na ně dívají stovky lebek se jmény. Kostnice je ale především místem úcty, ne strašení - místní k ní přistupují jako k rodinnému hrobu.",
        skepticke: "Kostnice je praktickým řešením nedostatku místa, které se změnilo v lidové umění. Tajemné na ní není nic nadpřirozeného: je to vzácně zachovaný příklad alpské tradice péče o mrtvé."
      },
      praktickeInfo: "Hallstatt je asi 1 hodinu autem nebo 2 hodiny vlakem a lodí ze Salcburku. Z vlakové zastávky Hallstatt se přeplouvá lodí přes jezero. Vesnice je v sezóně přeplněná turisty, obec zavedla omezení pro autobusy - přijeď brzy ráno. Kostnice je kousek nad kostelem, prohlídka trvá 15 minut. Uvnitř se chovej tiše, v obytných částech obce nefoť lidem do oken.",
      pribehy: [
        { nazev: "Poslední lebka z roku 1995", text: "Tradice ještě úplně neskončila: jedna obyvatelka si přála, aby i její lebka byla vymalována a uložena do kostnice. Stalo se tak v roce 1995." },
        { nazev: "Vesnice, kterou okopírovala Čína", text: "Hallstatt je tak populární, že v Číně postavili jeho kopii v provincii Kuang-tung. Původní Hallstatt má přitom jen kolem 800 obyvatel." }
      ]
    }
  },
  {
    id: "old-jewish-cemetery-prague",
    patch: {
      nazev: "Starý židovský hřbitov v Praze",
      lead: "Na malém pozemku se tisíce náhrobků tlačí přes sebe v až dvanácti vrstvách hrobů - a nedaleko odpočívá rabi Löw, tvůrce Golema.",
      atmosfera: 4.8,
      paranormalniAktivita: "silná legenda o Golemovi",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup (Židovské muzeum v Praze)",
      popisy: {
        zahada: "Starý židovský hřbitov v pražském Josefově patří k nejstarším dochovaným židovským hřbitovům na světě. Je na něm kolem 12 000 náhrobků, ale pohřbeno tu bylo odhadem mnohem víc lidí, protože židovské hroby se neruší a místo chybělo - nové vrstvy hlíny se navršovaly na staré.",
        historie: "Hřbitov sloužil od první poloviny 15. století do roku 1787. Nejstarší dochovaný náhrobek patří básníku Avigdoru Karovi z roku 1439. Pohřben je tu i Jehuda ben Becalel, rabi Löw (zemřel 1609), slavný učenec a pedagog. Hřbitov je součástí Židovského muzea v Praze, které spravuje také synagogy v Josefově.",
        legenda: "Podle legendy rabi Löw vytvořil z hlíny z Vltavy Golema, umělého obra, který měl chránit pražské židy. Oživoval ho šém - papírek s Božím jménem vložený do úst. Když se Golem vymkl kontrole, rabi ho zastavil a jeho tělo prý uložil na půdu Staronové synagogy, kde má ležet dodnes.",
        paranormalni: "Návštěvníci nechávají na hrobě rabiho Löwa kamínky a papírky s přáními. Vypráví se o nočních krocích na půdě Staronové synagogy, kam se nesmí, a o tom, že Golem se jednou vrátí.",
        skepticke: "Legenda o Golemovi v souvislosti s rabim Löwem se písemně objevuje až v 19. století, více než 200 let po jeho smrti. Půdu Staronové synagogy prozkoumali i novináři a nic tam nenašli. Silný dojem hřbitova vychází ze skutečné historie ghetta, ne z nadpřirozena."
      },
      praktickeInfo: "Hřbitov je na Josefově, 5 minut chůze od Staroměstského náměstí (metro Staroměstská). Vstupenka Židovského muzea platí pro hřbitov i několik synagog. V sobotu a o židovských svátcích je zavřeno. Muži musí mít v některých synagogách pokrývku hlavy, zapůjčí ji na místě. Počítej s 2 hodinami na celý okruh.",
      pribehy: [
        { nazev: "Hlína z Vltavy", text: "Podle legendy rabi Löw s učedníky v noci modeloval Golema z vltavské hlíny a oživil ho Božím jménem." },
        { nazev: "Kamínky místo květin", text: "Na židovské hroby se nekladou květiny, ale kamínky. Hrob rabiho Löwa jimi bývá pokrytý spolu s papírky s přáními." }
      ]
    }
  },
  {
    id: "karlstejn-castle",
    patch: {
      nazev: "Hrad Karlštejn",
      lead: "Gotický hrad císaře Karla IV., postavený jako trezor pro korunovační klenoty a svaté ostatky - s kaplí, jejíž stěny pokrývají drahé kameny.",
      atmosfera: 4.4,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "prohlídky s průvodcem, kaple sv. Kříže na rezervaci",
      popisy: {
        zahada: "Karlštejn nebyl obyčejným sídlem, ale pokladnicí říše. V jeho nejvyšší věži je kaple sv. Kříže se stěnami vykládanými asi 2 200 polodrahokamy a se 129 deskovými obrazy Mistra Theodorika. Mělo jít o obraz nebeského Jeruzaléma na zemi.",
        historie: "Hrad založil Karel IV., římský císař a český král, roku 1348. Sloužil k uložení císařských korunovačních klenotů a sbírky relikvií. Za husitských válek tu byly ukryty i české korunovační klenoty. V 19. století prošel hrad puristickou rekonstrukcí. Dnes ho spravuje Národní památkový ústav.",
        legenda: "Podle pověsti na hrad nesměly ženy, ani císařovna. Hra Jaroslava Vrchlického Noc na Karlštejně (1884) vypráví, jak se sem císařovna Eliška Pomořanská vplížila v převleku za pážete. Další legendy mluví o tajných chodbách a o pokladu ukrytém pod hradem.",
        paranormalni: "Mezi pověsti patří Bílá paní a duch purkrabího. Návštěvníci zmiňují chlad a tíseň ve věžích. Kaple sv. Kříže je tak výjimečná, že ji lidé popisují jako „místo síly“.",
        skepticke: "Zákaz vstupu žen platil podle historiků nejspíš jen pro nejposvátnější části hradu a sloužil k zachování posvátnosti, ne jako absolutní zákaz. Divadelní hra je fikce. Tajné chodby jsou běžný motiv českých hradních pověstí bez archeologického potvrzení."
      },
      praktickeInfo: "Z Prahy (hlavní nádraží nebo Smíchov) jede vlak do zastávky Karlštejn za necelou hodinu. Od nádraží se jde asi 30-40 minut přes obec do kopce. Prohlídky jsou s průvodcem v češtině a některých dalších jazycích, kaple sv. Kříže je přístupná jen v sezóně a na rezervaci s omezenou kapacitou. V pondělí bývá zavřeno.",
      pribehy: [
        { nazev: "Kaple z drahokamů", text: "Stěny kaple sv. Kříže jsou pokryté tisíci ametystů, jaspisů a achátů zasazených do zlaceného štuku. Strop připomíná hvězdné nebe." },
        { nazev: "Noc na Karlštejně", text: "Divadelní hra a pozdější muzikál vytvořily ze zákazu vstupu žen jednu z nejznámějších českých romantických komedií." }
      ]
    }
  },
  {
    id: "glenfinnan-viaduct",
    patch: {
      nazev: "Viadukt Glenfinnan",
      lead: "Obloukový železniční most ve skotské vysočině, přes který jezdí „Bradavický expres“ z filmů o Harrym Potterovi - a parní vlak tudy jede i dnes.",
      atmosfera: 4.3,
      paranormalniAktivita: "filmová legenda",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné vyhlídky",
      popisy: {
        zahada: "Viadukt Glenfinnan má 21 oblouků a vede ve tvaru křivky nad údolím u jezera Loch Shiel. Ve filmech o Harrym Potterovi se po něm řítí Bradavický expres. Fanoušci z celého světa čekají na kopci, až se objeví parní lokomotiva.",
        historie: "Viadukt postavila firma Roberta McAlpina a dokončen byl roku 1898 jako součást West Highland Line. Patří k prvním velkým stavbám z nevyztuženého betonu. Na začátku 21. století se proslavil ve filmech o Harrym Potterovi. U jezera stojí pomník Glenfinnan Monument z roku 1815 na místě, kde roku 1745 zahájil Bonnie Prince Charlie jakobitské povstání.",
        legenda: "Dlouho se tvrdilo, že v jednom z pilířů je zazděný kůň, který spadl do betonu během stavby. Pro skotskou vysočinu je to typický příběh o „oběti“ stavby.",
        paranormalni: "Kolem jezera Loch Shiel se vypráví o vodních duších a o jakobitských bojovnících, které lze vidět v mlze. Většina návštěvníků sem ale přichází kvůli filmové magii.",
        skepticke: "Průzkum v roce 1997 našel koně a vůz ne v Glenfinnanu, ale v sousedním viaduktu Loch nan Uamh. Legenda tedy měla pravdivé jádro, jen se vztahovala k jinému mostu. Vlak The Jacobite je skutečný parní vlak provozovaný pro turisty."
      },
      praktickeInfo: "Parní vlak The Jacobite jezdí od jara do podzimu mezi Fort William a Mallaig a přes viadukt přejíždí obvykle kolem 10:45 a 15:00 (ověř aktuální jízdní řád). Lístky na vlak je nutné rezervovat dlouho dopředu. Nejlepší výhled je z vyhlídky nad návštěvnickým centrem Glenfinnan, kam vede krátká stezka. Parkoviště je malé a v létě rychle plné. Z Edinburghu nebo Glasgow se sem jezdí na vícedenní zájezdy po vysočině.",
      pribehy: [
        { nazev: "Kůň v betonu", text: "Legenda o koni zazděném do pilíře se potvrdila - jen v jiném viaduktu na stejné trati." },
        { nazev: "Opravdový Bradavický expres", text: "Parní vlak The Jacobite, který hrál ve filmech, vozí turisty dodnes. Některé vagony připomínají filmové kupé." }
      ]
    }
  },
  {
    id: "civita-di-bagnoregio",
    patch: {
      lead: "„Umírající město“ na rozpadajícím se tufovém kopci, kam vede jen dlouhý pěší most - podle mnohých předloha pro Laputu z filmu Studia Ghibli.",
      atmosfera: 4.7,
      paranormalniAktivita: "atmosféra mizejícího města",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "malé vstupné za pěší most",
      popisy: {
        zahada: "Civita di Bagnoregio stojí na vrcholu tufového kopce, jehož okraje se po kouscích odlamují do údolí. Domy i ulice na okrajích už zmizely v propasti. Italové mu říkají „la città che muore“ - město, které umírá.",
        historie: "Město založili Etruskové před více než 2 500 lety. V 17. století ho zasáhlo silné zemětřesení a obyvatelé se přesunuli do sousedního Bagnoregia. Eroze měkkého tufu, déšť a vítr dál ukrajují okraje kopce. Z Civity zbyla malá obec s několika desítkami stálých obyvatel spojená s okolím pěším mostem z 60. let.",
        legenda: "Rodákem z Civity byl sv. Bonaventura, středověký teolog. Jeho rodný dům se podle tradice zřítil do propasti. Mezi fanoušky anime se rozšířilo, že Civita inspirovala Hayaa Mijazakiho při tvorbě Laputy - nebeského zámku.",
        paranormalni: "Za mlhavých rán, kdy údolí zaplní mlha, vypadá město, jako by se vznášelo na oblaku. Návštěvníci mluví o nadpozemském dojmu a o tichu v liduprázdných uličkách.",
        skepticke: "Studio Ghibli spojení s Laputou oficiálně nepotvrdilo. Laputa vychází z knihy Gulliverovy cesty a podobnost s Civitou je spíš interpretace fanoušků. „Umírání“ města je skutečné: vědci a obec monitorují erozi a kopec zpevňují."
      },
      praktickeInfo: "Civita leží asi 2 hodiny autem severně od Říma. Vlakem se jede z Říma do Orvieta a pak autobusem do Bagnoregia, odkud vede vyhlídková cesta k mostu. Za vstup na pěší most se platí malý poplatek. Most je strmý, počítej s výstupem. Nejkrásnější je město brzy ráno, v mlze nebo při západu slunce.",
      pribehy: [
        { nazev: "Město, které padá do údolí", text: "Okraje kopce se každoročně odlamují. Některé domy, které stály ještě v minulém století, už jsou v propasti." },
        { nazev: "Nebeský zámek", text: "Fanoušci Studia Ghibli sem jezdí hledat skutečnou Laputu. Za mlhy opravdu vypadá, jako by se město vznášelo." }
      ]
    }
  },
  {
    id: "meteora",
    patch: {
      lead: "Kláštery postavené na vrcholcích pískovcových věží až 400 metrů nad údolím - mniši do nich dlouho vytahovali lidi i zásoby v sítích na laně.",
      atmosfera: 4.9,
      paranormalniAktivita: "duchovní tradice",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "každý klášter má vlastní malé vstupné a otevírací dny",
      popisy: {
        zahada: "Meteora znamená „vznášející se ve vzduchu“. Na skalních pilířích nad městečkem Kalambaka v Thesálii stojí šest dosud obydlených pravoslavných klášterů. Jak se na kolmé skály dostali první poustevníci, je otázka, kterou si klade každý návštěvník.",
        historie: "Poustevníci žili v jeskyních skal od 11. století. Ve 14. století založil sv. Athanasios Meteorites klášter Velký Meteoron. V 15.-16. století tu stálo přes dvacet klášterů. Dlouho se do nich vstupovalo jen po žebřících a v sítích vytahovaných navijákem - schody byly do skal vytesány až ve 20. letech 20. století. Od roku 1988 je Meteora na seznamu UNESCO.",
        legenda: "Podle tradice vynesl Athanasia na vrchol orel. Mniši prý vyměňovali lano „až když se přetrhne, protože to Bůh dovolí“.",
        paranormalni: "Poutníci popisují hluboký klid a pocit oddělení od světa. Skály nad mlhou při východu slunce působí téměř nadpozemsky.",
        skepticke: "Geologové vysvětlují skalní věže jako zbytky delty pradávné řeky, které eroze během milionů let vymodelovala do pilířů. První poustevníci šplhali po přirozených římsách a používali dřevěné lešení zakotvené ve skále."
      },
      praktickeInfo: "Z Atén jede vlak do Kalambaky asi 4-5 hodin, mnoho lidí jezdí na dvoudenní zájezd. Mezi kláštery vede silnice a pěší stezky. Každý klášter má jiný den zavírací - ověř předem. Ženy musí mít sukni pod kolena a zakrytá ramena, muži dlouhé kalhoty; sukně se půjčují u vchodu. Nejlepší světlo je při západu slunce na vyhlídkách u silnice.",
      pribehy: [
        { nazev: "Síť na laně", text: "Ještě v 20. století vytahovali mniši návštěvníky v síti po svislé skále. Dnes se lano používá jen na zásoby." },
        { nazev: "Filmový klášter", text: "Klášter Agia Triada se objevil v bondovce Jen pro tvé oči (1981). Mniši na protest proti natáčení údajně vyvěšovali prádlo." }
      ]
    }
  },
  {
    id: "acropolis-of-athens",
    patch: {
      nazev: "Akropole v Aténách",
      lead: "Skalní pahorek nad Aténami s Parthenonem, chrámem bohyně Athény - a se spory o mramorové sochy, které jsou dodnes v Londýně.",
      atmosfera: 4.6,
      paranormalniAktivita: "mytologická tradice",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká (horko, kluzký mramor)",
      pristupnost: "placený vstup s časovými okny",
      popisy: {
        zahada: "Parthenon působí dokonale rovně, přestože v něm skoro žádná linie rovná není. Sloupy se mírně zužují a naklánějí dovnitř a podlaha je lehce vypouklá. Stavitelé tak korigovali optické klamy - tajemství, které architekti studují dodnes.",
        historie: "Současné stavby vznikly v 5. století př. n. l. za Perikla po zničení Akropole Peršany. Parthenon byl dokončen roku 432 př. n. l. Později sloužil jako kostel, mešita a turecký prachový sklad. Roku 1687 ho při obléhání Benátčany zasáhl dělostřelecký granát a exploze ho těžce poškodila. Na počátku 19. století odvezl lord Elgin velkou část vlysů do Británie, kde jsou v Britském muzeu. Řecko žádá jejich návrat.",
        legenda: "Podle mýtu se o vládu nad městem přeli Poseidon a Athéna. Poseidon nechal ze skály vytrysknout slaný pramen, Athéna dala olivovník - a vyhrála. Olivovník u Erechtheionu připomíná tento příběh.",
        paranormalni: "V Erechtheionu měla být stopa Poseidonova trojzubce ve skále. Návštěvníci se nechávají ohromit sílou místa. Řecké pověsti mluví o kletbě, která stíhá ty, kdo odnesou kámen z Akropole.",
        skepticke: "„Kletba“ je stejný jev jako u Pompejí - obchod s pocitem viny. Elginovy mramory jsou politický a kulturní spor, ne záhada. Optické korekce Parthenonu jsou doložené měřením a odpovídají antickým architektonickým spisům."
      },
      praktickeInfo: "Vstupenky s časovým oknem kup online, v létě jsou denní kvóty. Přijď hned při otevření nebo pozdě odpoledne kvůli horku a davům. Mramor je kluzký, vezmi pevnou obuv. Metro Akropoli je u jižního vstupu. Nové Muzeum Akropole pod kopcem stojí za návštěvu - jsou v něm originály soch a sál připravený na návrat vlysů z Londýna.",
      pribehy: [
        { nazev: "Exploze roku 1687", text: "Turci ukryli v Parthenonu střelný prach. Benátský granát ho zapálil a výbuch zničil střed chrámu, který stál více než 2 000 let." },
        { nazev: "Prázdná místa pro vlysy", text: "V Muzeu Akropole jsou vedle originálů bílé sádrové kopie dílů, které jsou v Londýně - tichý protest, který vidí každý návštěvník." }
      ]
    }
  },
  {
    id: "giant-s-causeway",
    patch: {
      nazev: "Obrův chodník (Giant's Causeway)",
      lead: "Asi 40 000 čedičových sloupů, převážně šestibokých, které podle irské legendy postavil obr Finn McCool, aby došel do Skotska.",
      atmosfera: 4.6,
      paranormalniAktivita: "mytologická legenda",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká (kluzké kameny, vlny)",
      pristupnost: "pobřeží volně, návštěvnické centrum placené",
      popisy: {
        zahada: "Na severním pobřeží Severního Irska vystupují z moře tisíce sloupů tak pravidelných, že vypadají jako dlažba vytvořená lidmi. Většina má šest stran, některé pět, sedm nebo osm.",
        historie: "Sloupy vznikly asi před 50-60 miliony let, když láva z vulkanické činnosti vyplnila údolí a pomalu chladla a praskala do pravidelných hranolů. Vědecký spor o jejich vznik v 18. století pomohl rozvoji geologie. Od roku 1986 je lokalita na seznamu UNESCO, spravuje ji National Trust.",
        legenda: "Obr Finn McCool postavil chodník přes moře, aby se utkal se skotským obrem Benandonnerem. Když uviděl, jak je soupeř obrovský, utekl domů. Jeho žena ho převlékla za miminko. Benandonner usoudil, že když je takhle velké dítě, otec musí být gigant - a utekl zpět, přičemž cestu za sebou rozbil. Podobné sloupy jsou na skotském ostrově Staffa ve Fingalově jeskyni.",
        paranormalni: "Skalní útvary dostaly jména jako Obrova bota, Varhany nebo Obrovo křeslo. Vypráví se, že kdo si sedne do Obrova křesla, tomu se splní přání.",
        skepticke: "Šestiúhelníky jsou fyzikálně nejúčinnější tvar pro uvolnění napětí při chladnutí lávy - stejný jev známe z vysychajícího bláta. Spojení se skotskou Staffou je skutečné: jde o stejný lávový proud."
      },
      praktickeInfo: "Z Belfastu se jezdí autem nebo zájezdem (asi 1,5 hodiny), často spolu s Dark Hedges a mostem Carrick-a-Rede. Na pobřeží se dá dojít pěšky zdarma, parkování a návštěvnické centrum jsou placené. Kameny jsou kluzké a na okraji moře hrozí silné vlny - nelez blízko vody. Pobřežní stezka nad útesy nabízí nejlepší výhled.",
      pribehy: [
        { nazev: "Obr převlečený za miminko", text: "Finnova žena Oonagh zachránila manžela lstí: když skotský obr uviděl obrovské „dítě“, usoudil, že s jeho otcem nechce bojovat." },
        { nazev: "Most do Skotska", text: "Podobné čedičové sloupy jsou na skotském ostrově Staffa. Legenda tak vysvětlovala, proč chodník „pokračuje“ na druhé straně moře." }
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
