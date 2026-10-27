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

function sources(wiki, query) {
  return [
    { nazev: `Wikipedia: ${wiki.replace(/_/g, " ")}`, url: `https://en.wikipedia.org/wiki/${wiki}`, licence: "CC BY-SA / reference discovery" },
    { nazev: `Wikidata search: ${query}`, url: `https://www.wikidata.org/w/index.php?search=${encodeURIComponent(query)}`, licence: "CC0 / entity discovery" },
    { nazev: "OpenStreetMap search", url: `https://www.openstreetmap.org/search?query=${encodeURIComponent(query)}`, licence: "ODbL / map verification" }
  ];
}

function place(id, data) {
  return {
    id,
    slug: id,
    localizedSlugs: { cs: id, en: id, de: id, es: id, fr: id },
    detailPath: `/mista/${id}/`,
    kontinent: "Evropa",
    obrazky: [],
    audio: [],
    ...data
  };
}

const newPlaces = [
  place("prague-astronomical-clock", {
    nazev: "Pražský orloj",
    zeme: "Česko",
    lead: "Šest set let starý orloj na Staroměstské radnici - podle pověsti konšelé oslepili jeho tvůrce, aby už nikde jinde podobný nepostavil.",
    gps: { lat: 50.08697, lon: 14.42071 },
    kategorie: ["legenda"],
    temata: ["prokleti", "stredovek", "symboly"],
    indexTajemna: 80,
    paranormalniAktivita: "silné pověsti",
    historickaDolozenost: "výborná",
    nebezpecnost: "nízká",
    pristupnost: "volně přístupné, věž placená",
    atmosfera: 4.6,
    nocniVhodnost: true,
    vhodneProDeti: true,
    popisy: {
      zahada: "Každou celou hodinu se v okénkách nad ciferníkem objeví dvanáct apoštolů a kostlivec zatáhne za zvonec. Astronomický ciferník ukazuje polohu Slunce a Měsíce i čas podle staročeských hodin.",
      historie: "Orloj sestrojil kolem roku 1410 hodinář Mikuláš z Kadaně podle výpočtů astronoma Jana Šindela. Dnes je nejstarším dosud fungujícím orlojem svého typu na světě. Apoštolové přibyli až později, po požáru radnice v roce 1945 je znovu vyřezal Vojtěch Sucharda.",
      legenda: "Podle pověsti postavil orloj mistr Hanuš. Konšelé ho dali oslepit, aby podobné dílo nepostavil jinde. Slepý Hanuš sáhl do stroje a orloj zastavil. Říká se také, že když se orloj dlouho zastaví, čeká Prahu neštěstí.",
      paranormalni: "Kostlivec, který zvoní a kývá hlavou, je pro mnoho návštěvníků připomínkou smrti. Pověst o prokletí orloje se vypráví při každé jeho opravě.",
      skepticke: "Mistr Hanuš opravoval orloj až koncem 15. století a příběh o jeho oslepení není doložený. Původním tvůrcem byl Mikuláš z Kadaně."
    },
    praktickeInfo: "Orloj je na Staroměstském náměstí, figury se ukazují každou hodinu od 9 do 23 hodin. Před orlojem bývá velký dav, hlídejte si peněženku. Na věž radnice vede výtah, z ochozu je výhled na celé Staré Město. Kombinujte s Karlovým mostem a Josefovem.",
    zdroje: sources("Prague_astronomical_clock", "Pražský orloj"),
    pribehy: [
      { nazev: "Oslepený mistr", text: "Konšelé prý mistra Hanuše oslepili, aby nepostavil jiný orloj. On pak sáhl do stroje a orloj na dlouho zastavil." },
      { nazev: "Kostlivec u ciferníku", text: "Smrt v podobě kostlivce každou hodinu zatáhne za provaz a připomene všem, že čas běží pro každého." }
    ]
  }),
  place("golden-lane-daliborka", {
    nazev: "Zlatá ulička a Daliborka",
    zeme: "Česko",
    lead: "Domečky v hradbách Pražského hradu, kde podle pověsti pracovali alchymisté císaře Rudolfa II. - a hladomorna, ve které se vězeň Dalibor „naučil housti“.",
    gps: { lat: 50.09193, lon: 14.40491 },
    kategorie: ["hrad", "veznice", "legenda"],
    temata: ["tajne-spolecnosti", "veznice", "stredovek"],
    indexTajemna: 76,
    paranormalniAktivita: "místní pověsti",
    historickaDolozenost: "velmi dobrá",
    nebezpecnost: "nízká",
    pristupnost: "placený vstup (okruh Pražského hradu)",
    atmosfera: 4.5,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Malé barevné domky jsou postavené přímo do hradební zdi. Na konci uličky stojí věž Daliborka s hladomornou, kam vězně spouštěli otvorem ve stropě.",
      historie: "Domky vznikly koncem 16. století pro hradní střelce a strážné, později v nich bydleli zlatníci a řemeslníci. V domku č. 22 v letech 1916–1917 psal Franz Kafka. Věž Daliborka sloužila od roku 1496 jako vězení, prvním vězněm byl rytíř Dalibor z Kozojed, popravený v roce 1498.",
      legenda: "Podle pověsti v uličce bydleli alchymisté císaře Rudolfa II., kteří hledali kámen mudrců. Dalibor se prý ve vězení naučil hrát na housle a lidé pod věží poslouchali jeho hudbu. Odtud přísloví „Nouze naučila Dalibora housti“.",
      paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou. Záhadnou atmosféru tvoří alchymistická pověst a temná hladomorna.",
      skepticke: "Alchymisté v uličce nebydleli, pracovali jinde na hradě. „Housle“ v přísloví nejspíš znamenaly mučicí nástroj, ne hudbu."
    },
    praktickeInfo: "Zlatá ulička je součástí prohlídkového okruhu Pražského hradu, vstupenku koupíte v pokladnách hradu. Nejméně lidí je hned ráno nebo večer, kdy je ulička volně přístupná. Z Malé Strany vedou na hrad Zámecké schody.",
    zdroje: sources("Golden_Lane", "Zlatá ulička Praha"),
    pribehy: [
      { nazev: "Alchymisté císaře", text: "Rudolf II. na svém dvoře hostil alchymisty z celé Evropy. Pověst je přestěhovala do malých domků Zlaté uličky." },
      { nazev: "Daliborovy housle", text: "Vězeň Dalibor prý v hladomorně hrál na housle tak krásně, že pod věží stávali lidé a poslouchali." }
    ]
  }),
  place("old-new-synagogue-golem", {
    nazev: "Staronová synagoga a Golem",
    zeme: "Česko",
    lead: "Nejstarší dosud používaná synagoga v Evropě - na její půdě podle pověsti dodnes leží hliněný Golem rabiho Löwa.",
    gps: { lat: 50.09027, lon: 14.41879 },
    kategorie: ["legenda"],
    temata: ["mytologie", "ritual", "stredovek"],
    indexTajemna: 85,
    paranormalniAktivita: "silné pověsti",
    historickaDolozenost: "výborná",
    nebezpecnost: "nízká",
    pristupnost: "placený vstup, půda nepřístupná",
    atmosfera: 4.8,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Gotická synagoga se strmým cihlovým štítem stojí v Josefově od 13. století. Na vnější zdi vedou železné skoby ke dveřím na půdu, ale začínají několik metrů nad zemí.",
      historie: "Synagoga vznikla kolem roku 1270 a slouží věřícím dodnes. V 16. století zde působil rabi Jehuda Löw ben Becalel, slavný učenec a myslitel. Jeho hrob je na nedalekém Starém židovském hřbitově.",
      legenda: "Rabi Löw prý z vltavské hlíny vytvořil Golema a oživil ho šémem, papírkem s Božím jménem v ústech. Golem chránil ghetto, ale jednou se vymkl kontrole. Rabi ho zastavil a uložil na půdu synagogy, kde prý leží dodnes.",
      paranormalni: "Podle pověstí se každý, kdo se pokusil na půdu vylézt, vrátil vyděšený nebo vůbec ne. Vypráví se i o německém vojákovi za války, který na půdu vystoupal a zmizel.",
      skepticke: "Pověst o Golemovi se s rabim Löwem spojila až v 19. století. Půdu prozkoumali v roce 1883 a později i novináři - nic nenašli."
    },
    praktickeInfo: "Vstupenky prodává Židovské muzeum v Praze, synagoga je zavřená o sobotách a židovských svátcích. Muži si uvnitř zakryjí hlavu (kipu dostanete u vstupu). Kombinujte se Starým židovským hřbitovem a Pinkasovou synagogou.",
    zdroje: sources("Old_New_Synagogue", "Staronová synagoga"),
    pribehy: [
      { nazev: "Hliněný ochránce", text: "Rabi Löw prý stvořil z vltavské hlíny Golema, který chránil pražské ghetto, dokud se nevymkl kontrole." },
      { nazev: "Půda, kam se nechodí", text: "Železné skoby na zdi synagogy začínají vysoko nad zemí. Kdo se prý vydal na půdu, vrátil se vyděšený." }
    ]
  }),
  place("charles-bridge", {
    nazev: "Karlův most",
    zeme: "Česko",
    lead: "Gotický most, jehož základní kámen byl podle tradice položen v magickém okamžiku 1357, 9. 7., 5:31 - a kde dotek sochy svatého Jana Nepomuckého prý přináší štěstí.",
    gps: { lat: 50.08649, lon: 14.41143 },
    kategorie: ["legenda"],
    temata: ["symboly", "stredovek", "mytologie"],
    indexTajemna: 75,
    paranormalniAktivita: "silné pověsti",
    historickaDolozenost: "výborná",
    nebezpecnost: "nízká",
    pristupnost: "volně přístupné",
    atmosfera: 4.7,
    nocniVhodnost: true,
    vhodneProDeti: true,
    popisy: {
      zahada: "Most dlouhý přes 500 metrů zdobí třicet barokních soch. Na obou koncích stojí gotické věže. Ráno v mlze nad Vltavou působí jako cesta do jiného světa.",
      historie: "Stavbu zahájil Karel IV. v roce 1357, mistrem byl Petr Parléř. Most nahradil starší Juditin most zničený povodní. Sochy přibyly hlavně v 17. a 18. století, dnes jsou na mostě většinou kopie.",
      legenda: "Podle tradice byl základní kámen položen 9. července 1357 v 5:31 - čísla tvoří řadu 1-3-5-7-9-7-5-3-1. Do malty se prý přidávala vejce z celé země. V mostě je podle pověsti zazděn kouzelný meč rytíře Bruncvíka.",
      paranormalni: "Sv. Jan Nepomucký byl v roce 1393 svržen z mostu do Vltavy. Kdo se dotkne reliéfu na jeho soše nebo křížku na zábradlí, tomu se prý splní přání a vrátí se do Prahy.",
      skepticke: "Přesný čas položení kamene není v pramenech doložený, jde o pozdější výklad. Rozbory malty přítomnost vajec nepotvrdily."
    },
    praktickeInfo: "Most je volně přístupný ve dne i v noci. Přes den je zde velmi rušno - nejhezčí je za úsvitu, kdy je skoro prázdný. Na Staroměstskou mosteckou věž vede placený výstup s výhledem. Pozor na kapsáře.",
    zdroje: sources("Charles_Bridge", "Karlův most"),
    pribehy: [
      { nazev: "Magická čísla", text: "Základní kámen byl prý položen 9. 7. 1357 v 5:31. Čísla tvoří palindrom, který měl most ochránit." },
      { nazev: "Bruncvíkův meč", text: "Rytíř Bruncvík měl kouzelný meč, který sám usekl hlavy nepřátelům. Prý je zazděný v mostě." }
    ]
  }),
  place("pere-lachaise", {
    nazev: "Hřbitov Père-Lachaise",
    zeme: "Francie",
    lead: "Nejslavnější hřbitov Paříže, kde leží Chopin, Oscar Wilde i Jim Morrison - a kde ženy hladí bronzovou sochu novináře v naději na dítě.",
    gps: { lat: 48.86139, lon: 2.39333 },
    kategorie: ["legenda"],
    temata: ["umrti", "ritual", "duchove"],
    indexTajemna: 76,
    paranormalniAktivita: "místní pověsti",
    historickaDolozenost: "výborná",
    nebezpecnost: "nízká",
    pristupnost: "volně přístupné",
    atmosfera: 4.7,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Na svahu na východě Paříže je přes 70 000 hrobů a hrobek, mezi stromy vedou dlážděné uličky. Je to spíš město mrtvých než hřbitov.",
      historie: "Hřbitov byl otevřen v roce 1804. Aby přilákal Pařížany, přenesli sem ostatky Molièra a La Fontaina. Leží tu Chopin, Édith Piaf, Oscar Wilde a Jim Morrison. U Zdi komunardů bylo v roce 1871 zastřeleno 147 obránců Pařížské komuny.",
      legenda: "Socha novináře Victora Noira, zastřeleného v roce 1870, prý pomáhá ženám otěhotnět, a proto je na některých místech vyleštěná od doteků. Hrob Allana Kardeca, zakladatele spiritismu, je stále pokrytý květinami a lidé se ho dotýkají s prosbou.",
      paranormalni: "Spiritisté u Kardecova hrobu pořádají setkání a návštěvníci vyprávějí o zvláštní atmosféře mezi hroby. Konkrétní doložené jevy nejsou.",
      skepticke: "Rituály u hrobů jsou lidová tradice a turistický zvyk. Hrob Oscara Wilda musel být chráněn sklem, protože polibky s rtěnkou poškozovaly kámen."
    },
    praktickeInfo: "Hřbitov je ve 20. obvodu, nejbližší metro je Père Lachaise nebo Gambetta. Vstup je zdarma, u vchodů jsou mapy se slavnými hroby. Počítejte s 2–3 hodinami. Hřbitov zavírá v podvečer.",
    zdroje: sources("Père_Lachaise_Cemetery", "Père Lachaise"),
    pribehy: [
      { nazev: "Socha pro štěstí", text: "Bronzová socha Victora Noira je na několika místech vyleštěná od doteků žen, které věří, že jim pomůže otěhotnět." },
      { nazev: "Hrob za sklem", text: "Hrob Oscara Wilda pokrývaly tisíce polibků se rtěnkou, až ho musela chránit skleněná stěna." }
    ]
  }),
  place("notre-dame-de-paris", {
    nazev: "Notre-Dame de Paris",
    zeme: "Francie",
    lead: "Katedrála s chrliči a chimérami, která v roce 2019 hořela a v roce 2024 se znovu otevřela - podle pověsti kovář jejích dveří upsal duši ďáblu.",
    gps: { lat: 48.85296, lon: 2.34990 },
    kategorie: ["legenda"],
    temata: ["dabel", "stredovek", "symboly"],
    indexTajemna: 77,
    paranormalniAktivita: "místní pověsti",
    historickaDolozenost: "výborná",
    nebezpecnost: "nízká",
    pristupnost: "volně přístupné, věže placené",
    atmosfera: 4.8,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Z ochozů věží shlížejí kamenné chiméry, napůl démoni, napůl zvířata. Nejslavnější z nich, Stryge, si podpírá bradu a hledí na Paříž. Chrliči odvádějí dešťovou vodu.",
      historie: "Stavba začala v roce 1163 a trvala skoro dvě století. Román Victora Huga Chrám Matky Boží v Paříži (1831) pomohl katedrálu zachránit. Architekt Viollet-le-Duc ji v 19. století opravil a přidal chiméry. 15. dubna 2019 vyhořela střecha a zřítila se věžička, katedrála se znovu otevřela v prosinci 2024.",
      legenda: "Podle pověsti mladý kovář Biscornet nedokázal vykovat složité kování dveří, a tak upsal duši ďáblu. Kování bylo tak dokonalé, že se zámky nedaly otevřít bez svěcené vody. Biscornet brzy zemřel a tajemství si vzal do hrobu.",
      paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou. Chiméry a příběh Quasimoda vytvářejí tajemnou atmosféru.",
      skepticke: "Kování je dílem zručných středověkých řemeslníků. Chiméry nejsou středověké, ale z 19. století."
    },
    praktickeInfo: "Katedrála je na ostrově Île de la Cité. Vstup je zdarma, v sezóně se vyplatí rezervovat čas vstupu online. Výstup na věže je placený a vyžaduje rezervaci. Před katedrálou je bod nula, od kterého se měří vzdálenosti ve Francii.",
    zdroje: sources("Notre-Dame_de_Paris", "Notre-Dame de Paris"),
    pribehy: [
      { nazev: "Ďáblovo kování", text: "Kovář Biscornet prý upsal duši ďáblu, aby vykoval dokonalé kování dveří. Brzy nato zemřel." },
      { nazev: "Požár roku 2019", text: "Celý svět sledoval, jak hoří střecha katedrály. Po pěti letech oprav se Notre-Dame znovu otevřela." }
    ]
  }),
  place("doges-palace-prisons", {
    nazev: "Dóžecí palác a Most vzdechů",
    zeme: "Itálie",
    lead: "Palác benátských dóžat s tajnými chodbami a vězením pod olověnou střechou - odtud v roce 1756 utekl Giacomo Casanova.",
    gps: { lat: 45.43369, lon: 12.34037 },
    kategorie: ["veznice", "legenda"],
    temata: ["veznice", "tajne-spolecnosti", "politika"],
    indexTajemna: 74,
    paranormalniAktivita: "místní pověsti",
    historickaDolozenost: "výborná",
    nebezpecnost: "nízká",
    pristupnost: "placený vstup",
    atmosfera: 4.6,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Za zdobenými sály vede síť tajných chodeb, výslechových místností a cel. Most vzdechů spojuje palác s Novým vězením přes kanál.",
      historie: "Palác byl sídlem vlády Benátské republiky. Vězni seděli v Olovech pod olověnou střechou, kde bylo v létě horko, nebo ve vlhkých Studnách v přízemí. Most vzdechů vznikl kolem roku 1600, jméno mu dal až Lord Byron v 19. století.",
      legenda: "Podle pověsti vězni na mostě naposledy vzdychali, když okénkem viděli lagunu. V noci z 31. října na 1. listopadu 1756 utekl Giacomo Casanova z Olov otvorem ve střeše a celou příhodu později popsal.",
      paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou. Tajemství tvoří tajné chodby a příběhy vězňů.",
      skepticke: "Casanovův útěk známe hlavně z jeho vlastního vyprávění, které mohl přikrášlit. Jméno Mostu vzdechů je romantický výmysl."
    },
    praktickeInfo: "Palác je na náměstí sv. Marka. Běžná vstupenka zahrnuje Most vzdechů a cely. Prohlídka Tajné cesty (Itinerari Segreti) s průvodcem vede i do Olov - rezervujte předem. Most vzdechů je nejlépe vidět z mostu Ponte della Paglia.",
    zdroje: sources("Doge's_Palace", "Palazzo Ducale Venezia"),
    pribehy: [
      { nazev: "Casanovův útěk", text: "Casanova si vyrobil nástroj, prorazil strop cely a utekl přes olověnou střechu paláce." },
      { nazev: "Poslední pohled", text: "Z okének Mostu vzdechů prý vězni naposledy viděli lagunu, než zmizeli v celách." }
    ]
  }),
  place("ca-dario", {
    nazev: "Ca' Dario",
    zeme: "Itálie",
    lead: "Křivý renesanční palác na Canal Grande, kterému Benátčané říkají „palác, který zabíjí“ - jeho majitelé prý často umírali nebo přicházeli o majetek.",
    gps: { lat: 45.43072, lon: 12.33489 },
    kategorie: ["legenda"],
    temata: ["prokleti", "umrti", "vrazdy"],
    indexTajemna: 82,
    paranormalniAktivita: "silné pověsti",
    historickaDolozenost: "dobrá",
    nebezpecnost: "nízká",
    pristupnost: "soukromé, jen zvenčí",
    atmosfera: 4.5,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Úzký palác s fasádou z barevného mramoru a kruhů je viditelně nakloněný. Vypadá krásně, ale Benátčané kolem něj prý jezdí rychleji.",
      historie: "Palác dal v roce 1487 postavit Giovanni Dario, diplomat Benátské republiky. Během staletí se majitelé často střídali. Ve 20. století zde bydleli umělci a podnikatelé.",
      legenda: "Podle pověsti nápis na fasádě URBIS GENIO JOANNES DARIUS dává přesmyčkou větu SUB RUINA INSIDIOSA GENERO - „přináším zákeřnou zkázu“. Několik majitelů prý zemřelo násilnou smrtí, spáchalo sebevraždu nebo zkrachovalo.",
      paranormalni: "Seznam „obětí“ paláce se v médiích stále rozšiřuje. Někteří kupci od koupě prý ustoupili kvůli pověsti.",
      skepticke: "Neštěstí majitelů lze vysvětlit náhodou - za pět set let se majitelé změnili mnohokrát. Přesmyčka je pozdější hra se slovy."
    },
    praktickeInfo: "Palác je soukromý a nepřístupný. Nejlépe ho uvidíte z vaporetta linky 1 po Canal Grande nebo z protějšího břehu u Santa Maria del Giglio. Je kousek od sbírky Peggy Guggenheim.",
    zdroje: sources("Ca'_Dario", "Ca' Dario"),
    pribehy: [
      { nazev: "Tajný nápis", text: "Latinský nápis na fasádě prý skrývá přesmyčku: „přináším zákeřnou zkázu“." },
      { nazev: "Palác, který zabíjí", text: "Benátčané tvrdí, že kdo palác koupí, přijde o majetek nebo o život. Proto prý dlouho stál prázdný." }
    ]
  }),
  place("buda-castle-labyrinth", {
    nazev: "Labyrint pod Budínským hradem",
    zeme: "Maďarsko",
    lead: "Jeskyně a chodby pod hradním vrchem v Budapešti, kde byl podle pověsti vězněn Vlad Drákula.",
    gps: { lat: 47.50250, lon: 19.03470 },
    kategorie: ["podzemi", "legenda"],
    temata: ["podzemi", "veznice", "dabel"],
    indexTajemna: 78,
    paranormalniAktivita: "místní pověsti",
    historickaDolozenost: "dobrá",
    nebezpecnost: "nízká",
    pristupnost: "placený vstup",
    atmosfera: 4.5,
    nocniVhodnost: true,
    vhodneProDeti: true,
    popisy: {
      zahada: "Pod domy hradního vrchu se táhnou přírodní jeskyně vymleté termální vodou. Ve středověku je propojili a používali jako sklepy. Část prohlídky se chodí ve tmě s petrolejovou lampou.",
      historie: "Jeskyně využívali lidé už v pravěku. Ve středověku sloužily jako sklady a studny, za druhé světové války jako protiletecký kryt a nemocnice. Dnes je zde expozice.",
      legenda: "Podle pověsti král Matyáš Korvín věznil v podzemí Vlada III. Drákulu, valašského knížete. Drákula byl v Uhrách skutečně několik let držen jako zajatec.",
      paranormalni: "Návštěvníci popisují tíživý pocit ve tmě. Prohlídka pracuje s Drákulovou legendou a mlhou.",
      skepticke: "Drákula byl držen v Uhrách, nejspíš ve Višegrádu nebo v Budíně, ale že seděl právě v tomto podzemí, doloženo není."
    },
    praktickeInfo: "Vstup je na hradním vrchu v Budíně. Otevírací doba se v minulých letech měnila, ověřte ji předem. Uvnitř je chladno. Kombinujte s Rybářskou baštou a Matyášovým chrámem.",
    zdroje: sources("Buda_Castle_Labyrinth", "Budavári Labirintus"),
    pribehy: [
      { nazev: "Drákula v zajetí", text: "Valašský kníže Vlad Drákula strávil roky v uherském zajetí. Pověst ho umístila do podzemí pod Budínem." },
      { nazev: "Chůze tmou", text: "Část prohlídky se prochází v naprosté tmě, jen podél lana nebo s petrolejovou lampou." }
    ]
  }),
  place("bocca-della-verita", {
    nazev: "Ústa pravdy",
    zeme: "Itálie",
    lead: "Kamenná maska v Římě, která podle pověsti ukousne ruku každému lháři - proslavil ji film Prázdniny v Římě s Audrey Hepburn.",
    gps: { lat: 41.88813, lon: 12.48148 },
    kategorie: ["legenda", "filmova-lokace"],
    temata: ["mytologie", "film", "ritual"],
    indexTajemna: 68,
    paranormalniAktivita: "místní pověsti",
    historickaDolozenost: "dobrá",
    nebezpecnost: "nízká",
    pristupnost: "dobrovolný příspěvek",
    atmosfera: 4.2,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Mramorový kruh o průměru asi 1,75 metru zobrazuje tvář s otevřenými ústy. Je umístěn v předsíni kostela Santa Maria in Cosmedin.",
      historie: "Maska je římská, nejspíš z 1. století. Mohla sloužit jako kryt kanálu nebo kašna. Na současné místo se dostala v 17. století.",
      legenda: "Podle středověké pověsti ten, kdo lže a strčí ruku do úst, o ruku přijde. Maskou se prý zkoušela věrnost manželek. Ve filmu Prázdniny v Římě (1953) Gregory Peck předstírá, že mu ruku ukousla.",
      paranormalni: "Nadpřirozené jevy se nepopisují. Pověst je hra, kterou si zkouší každý návštěvník.",
      skepticke: "Maska je kus římské dekorace. Pověst o lhářích vznikla ve středověku."
    },
    praktickeInfo: "Maska je u kostela Santa Maria in Cosmedin poblíž Circu Maxima. U masky bývá fronta na fotografii, přijďte brzy ráno. Uvnitř kostela je relikvie připisovaná sv. Valentinovi.",
    zdroje: sources("Mouth_of_Truth", "Bocca della Verità"),
    pribehy: [
      { nazev: "Zkouška pravdy", text: "Kdo lže a vloží ruku do úst masky, ten o ni prý přijde - tak se ve středověku zkoušela věrnost." },
      { nazev: "Prázdniny v Římě", text: "Ve slavné scéně Gregory Peck schová ruku do rukávu a předstírá, že mu ji maska ukousla." }
    ]
  })
];

const places = readJson(placesPath);
const byId = new Map(places.map((item) => [item.id, item]));
let inserted = 0;
newPlaces.forEach((item) => {
  if (!byId.has(item.id)) inserted += 1;
  byId.set(item.id, item);
});
writeJson(placesPath, Array.from(byId.values()));

console.log(`Upserted ${inserted} new places.`);
