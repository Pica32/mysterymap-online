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
  place("palazzo-vecchio-secret-passages", {
    nazev: "Tajné chodby Palazzo Vecchio",
    zeme: "Itálie",
    lead: "Radnice Florencie s tajnými chodbami Medicejských, skrytou alchymistickou pracovnou - a ztracenou Leonardovou freskou, kterou možná ukrývá stěna s nápisem „Hledej a najdeš“.",
    gps: { lat: 43.76931, lon: 11.25609 },
    kategorie: ["legenda"],
    temata: ["tajne-spolecnosti", "symboly", "politika"],
    indexTajemna: 80,
    paranormalniAktivita: "místní pověsti",
    historickaDolozenost: "výborná",
    nebezpecnost: "nízká",
    pristupnost: "placený vstup, tajné chodby s průvodcem",
    atmosfera: 4.6,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Za obrazy a skříněmi se otevírají tajné dveře. Malá pracovna Studiolo vévody Františka I. nemá okna a vede z ní skrytá chodba. V Sále pěti set je na Vasariho fresce drobný nápis CERCA TROVA - „hledej a najdeš“.",
      historie: "Palác byl sídlem florentské vlády a později rodu Medicejských. Leonardo da Vinci zde v roce 1505 začal malovat obří fresku Bitva u Anghiari, ale nedokončil ji. O půl století později Giorgio Vasari sál přestavěl a pomaloval.",
      legenda: "Podle jedné teorie Vasari Leonardovu fresku nezničil, ale postavil před ni novou zeď a nápisem CERCA TROVA na ni upozornil. František I. prý ve Studiolu tajně prováděl alchymistické pokusy. V paláci je i Dantova posmrtná maska.",
      paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou. Tajemství tvoří skryté dveře a ztracená freska.",
      skepticke: "Průzkum v roce 2012 našel za Vasariho zdí stopy pigmentů, ale výsledky nejsou jednoznačné a průzkum byl zastaven. Nápis může mít i jiný význam."
    },
    praktickeInfo: "Palác je na náměstí Piazza della Signoria. Prohlídka Tajných cest (Percorsi segreti) s průvodcem je v angličtině a italštině, rezervujte předem. Z věže je výhled na dóm. Kombinujte s galerií Uffizi.",
    zdroje: sources("Palazzo_Vecchio", "Palazzo Vecchio Firenze"),
    pribehy: [
      { nazev: "Hledej a najdeš", text: "Malý nápis CERCA TROVA na fresce prý ukazuje, kde se za zdí skrývá ztracená Leonardova Bitva u Anghiari." },
      { nazev: "Vévoda alchymista", text: "František I. Medicejský se zavíral v pracovně bez oken a podle pověsti tam hledal kámen mudrců." }
    ]
  }),
  place("pilatus-dragon-mountain", {
    nazev: "Pilatus - hora draků",
    zeme: "Švýcarsko",
    lead: "Hora nad Luzernem, kde podle pověstí žili draci a v horském jezeře ležel duch Piláta Pontského - vystupovat na ni bylo kdysi zakázané.",
    gps: { lat: 46.97898, lon: 8.25529 },
    kategorie: ["priroda", "legenda"],
    temata: ["mytologie", "hory", "zvirata"],
    indexTajemna: 78,
    paranormalniAktivita: "silné pověsti",
    historickaDolozenost: "dobrá",
    nebezpecnost: "nízká",
    pristupnost: "placená zubačka a lanovka",
    atmosfera: 4.6,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Skalnatý vrchol Pilatusu je vysoký 2 128 metrů. Často se kolem něj stahují mraky a bouřky. Na vrchol jezdí nejstrmější zubačka světa se sklonem až 48 %.",
      historie: "Ve středověku bylo vystupování na horu zakázáno, protože se lidé báli bouří. V roce 1585 luzernský farář hodil kameny do horského jezera, aby dokázal, že se nic nestane. Zubačka byla otevřena v roce 1889.",
      legenda: "Podle pověsti bylo tělo Piláta Pontského hozeno do jezírka na hoře a jeho duch způsoboval bouře, když ho někdo vyrušil. Na hoře žili draci. V luzernském muzeu je „dračí kámen“, který prý spadl s drakem z nebe v roce 1421 a léčil nemoci.",
      paranormalni: "Konkrétní zprávy o nadpřirozených jevech nejsou. Mlhy a bouřky však dodávají hoře tajemnost.",
      skepticke: "Jméno hory pochází nejspíš z latinského pileatus - „s kloboukem z mraků“. Dračí kámen je obyčejný meteorit nebo kámen."
    },
    praktickeInfo: "Z Luzernu jeďte lodí do Alpnachstadu a zubačkou na vrchol (jezdí v létě), zpět lanovkou do Kriens. Celý okruh trvá půl dne. Na vrcholu jsou stezky a dračí stezka skalními tunely.",
    zdroje: sources("Pilatus_(mountain)", "Pilatus Luzern"),
    pribehy: [
      { nazev: "Pilátův duch", text: "Tělo Piláta Pontského prý skončilo v jezírku na hoře. Kdo ho vyrušil, toho čekala bouře." },
      { nazev: "Dračí kámen", text: "V roce 1421 prý nad Pilatusem přeletěl drak a upustil kámen, který léčil. Kámen je dnes v luzernském muzeu." }
    ]
  }),
  place("matterhorn-first-ascent", {
    nazev: "Matterhorn - tragédie prvního výstupu",
    zeme: "Švýcarsko",
    lead: "Nejslavnější hora Alp, na které při sestupu z prvního výstupu v roce 1865 praskl provaz a čtyři horolezci zemřeli - tělo jednoho z nich se nikdy nenašlo.",
    gps: { lat: 45.97636, lon: 7.65861 },
    kategorie: ["priroda", "katastrofa"],
    temata: ["hory", "umrti", "nebezpeci"],
    indexTajemna: 74,
    paranormalniAktivita: "místní pověsti",
    historickaDolozenost: "výborná",
    nebezpecnost: "nízká",
    pristupnost: "placené lanovky a vlaky",
    atmosfera: 4.8,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Pyramida Matterhornu je vysoká 4 478 metrů. Z Zermattu, Gornergratu nebo jezera Riffelsee se zrcadlí ve vodě. Na hoře zemřelo přes 500 horolezců.",
      historie: "14. července 1865 vystoupila skupina Edwarda Whympera jako první na vrchol. Při sestupu uklouzl Douglas Hadow a strhl tři další. Provaz praskl a čtyři muži spadli do hlubiny. Tělo lorda Francise Douglase nebylo nikdy nalezeno.",
      legenda: "Po neštěstí se šířily pověsti, že provaz někdo přeřízl. Whymper prý po sestupu viděl na obloze kříže z mlhy. Místní dlouho věřili, že na vrcholu žijí duchové.",
      paranormalni: "Whympera vidění na obloze se vysvětluje jako přírodní jev - mlhová duha. Přeseknutý provaz vyšetřování nepotvrdilo.",
      skepticke: "Neštěstí způsobil uklouznutí a slabý provaz. Přetržený provaz je vystaven v Matterhornském muzeu v Zermattu."
    },
    praktickeInfo: "Zermatt je bez aut, přijedete vlakem z Täsch. Nejlepší výhled je z Gornergratu (zubačka) nebo z jezera Riffelsee při východu slunce. Matterhornské muzeum v Zermattu vystavuje přetržený provaz. Výstup na vrchol je jen pro zkušené horolezce s vůdcem.",
    zdroje: sources("Matterhorn", "Matterhorn Zermatt"),
    pribehy: [
      { nazev: "Přetržený provaz", text: "Při sestupu z prvního výstupu praskl provaz a čtyři muži zemřeli. Provaz je dnes vystaven v muzeu." },
      { nazev: "Kříže na obloze", text: "Whymper po neštěstí prý viděl na obloze kříže z mlhy - nejspíš vzácnou mlhovou duhu." }
    ]
  }),
  place("whitechapel-jack-the-ripper", {
    nazev: "Whitechapel - Jack Rozparovač",
    zeme: "Spojené království",
    lead: "Uličky londýnského East Endu, kde v roce 1888 vraždil Jack Rozparovač - nejslavnější nevyřešený případ v historii.",
    gps: { lat: 51.51940, lon: -0.07120 },
    kategorie: ["legenda"],
    temata: ["vrazdy", "media", "zmizeni"],
    indexTajemna: 84,
    paranormalniAktivita: "známé případy",
    historickaDolozenost: "výborná",
    nebezpecnost: "nízká",
    pristupnost: "volně přístupné, prohlídky placené",
    atmosfera: 4.4,
    nocniVhodnost: true,
    vhodneProDeti: false,
    popisy: {
      zahada: "Úzké uličky Whitechapelu a Spitalfields se dodnes zachovaly. Na rozích stojí staré hospody, plynové lampy nahradily moderní, ale atmosféra viktoriánského Londýna zůstala.",
      historie: "Mezi srpnem a listopadem 1888 zde vrah zabil pět žen - Mary Ann Nichols, Annie Chapman, Elizabeth Stride, Catherine Eddowes a Mary Jane Kelly. Policie dostávala dopisy podepsané „Jack the Ripper“. Vrah nebyl nikdy dopaden.",
      legenda: "Podezřelých bylo přes sto - od lékaře přes malíře až po člena královské rodiny. V hospodě The Ten Bells se prý scházely některé oběti.",
      paranormalni: "Na místech vražd prý lidé v noci vidí postavy a slyší kroky. Některé prohlídky pracují se strašidelnými příběhy.",
      skepticke: "Teorie o královské rodině jsou spekulace. Identita vraha zůstává neznámá a pravděpodobně se už nezjistí."
    },
    praktickeInfo: "Nejbližší metro je Aldgate East nebo Whitechapel. Večerní procházky po stopách Rozparovače nabízí mnoho průvodců. Respektujte, že šlo o skutečné oběti. Kombinujte s trhem Spitalfields a Brick Lane.",
    zdroje: sources("Jack_the_Ripper", "Whitechapel Jack the Ripper"),
    pribehy: [
      { nazev: "Dopis z pekla", text: "Policie dostala dopis s nadpisem „From Hell“ a s kouskem lidské ledviny. Pisatel nebyl nikdy nalezen." },
      { nazev: "Sto podezřelých", text: "Mezi podezřelými byli lékaři, malíř i vnuk královny Viktorie - žádné obvinění nebylo prokázáno." }
    ]
  }),
  place("oudewater-witches-weigh-house", {
    nazev: "Čarodějnická váha v Oudewateru",
    zeme: "Nizozemsko",
    lead: "Městská váha, kde se v 16. století vážili lidé obvinění z čarodějnictví - kdo byl dost těžký, dostal certifikát, že čarodějnicí není. Dostanete ho i dnes.",
    gps: { lat: 52.02467, lon: 4.86861 },
    kategorie: ["legenda"],
    temata: ["ritual", "stredovek", "symboly"],
    indexTajemna: 70,
    paranormalniAktivita: "historie čarodějnických procesů",
    historickaDolozenost: "velmi dobrá",
    nebezpecnost: "nízká",
    pristupnost: "placený vstup",
    atmosfera: 4.2,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "V malé budově s červenými okenicemi visí velká dřevěná váha. Návštěvníci se mohou zvážit a dostat certifikát, že nejsou čarodějnice.",
      historie: "Podle tradice dostal Oudewater od císaře Karla V. právo vážit lidi obviněné z čarodějnictví. Věřilo se, že čarodějnice jsou příliš lehké, aby mohly létat na koštěti. V Oudewateru nebyl nikdo odsouzen.",
      legenda: "Lidé z celé Evropy prý přicházeli do Oudewateru, protože zdejší váha byla poctivá. Jinde váhy upravovali, aby obviněný vážil málo.",
      paranormalni: "Nadpřirozené jevy se nepopisují. Muzeum vysvětluje historii pronásledování čarodějnic.",
      skepticke: "Jak často se zde lidé skutečně vážili, není jisté. Certifikát je dnes turistickou zábavou."
    },
    praktickeInfo: "Oudewater je asi 40 km jižně od Amsterdamu, mezi Utrechtem a Goudou. Vážení i certifikát jsou součástí vstupného. Kombinujte s Goudou, městem sýrů.",
    zdroje: sources("Heksenwaag", "Heksenwaag Oudewater"),
    pribehy: [
      { nazev: "Příliš lehká na čarodějnici", text: "Kdo vážil dost na to, aby nemohl létat na koštěti, dostal certifikát, že čarodějnicí není." },
      { nazev: "Poctivá váha", text: "Lidé z celé Evropy chodili do Oudewateru, protože tady se váha prý nikdy nepodváděla." }
    ]
  }),
  place("basilica-holy-blood-bruges", {
    nazev: "Bazilika svaté krve v Bruggách",
    zeme: "Belgie",
    lead: "Malá bazilika v Bruggách uchovává lahvičku, která podle tradice obsahuje Kristovu krev - každý rok s ní projde městem procesí.",
    gps: { lat: 51.20800, lon: 3.22680 },
    kategorie: ["legenda"],
    temata: ["ritual", "stredovek", "templari"],
    indexTajemna: 72,
    paranormalniAktivita: "náboženská legenda",
    historickaDolozenost: "velmi dobrá",
    nebezpecnost: "nízká",
    pristupnost: "volně přístupné",
    atmosfera: 4.5,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Bazilika má dvě kaple nad sebou - tmavou románskou dole a zdobenou gotickou nahoře. Relikvie je ve skleněné lahvičce v křišťálovém pouzdře.",
      historie: "Podle tradice přivezl relikvii hrabě Dětřich Alsaský z křížové výpravy v roce 1150. Doložená je v Bruggách od 13. století. Procesí svaté krve se koná každý rok na Nanebevstoupení Páně a je zapsáno na seznamu UNESCO.",
      legenda: "Krev v lahvičce prý ve středověku každý pátek zkapalněla. Podle pověsti ji Josef z Arimatie zachytil při ukřižování.",
      paranormalni: "Zázrak zkapalnění krve se podle záznamů přestal opakovat v 14. století.",
      skepticke: "Pravost relikvie není prokázaná. Lahvička je byzantská práce z 11. nebo 12. století."
    },
    praktickeInfo: "Bazilika je na náměstí Burg v centru Brugg. Vstup je zdarma, malé muzeum je placené. Relikvii lze uctít denně v určitou hodinu. Kombinujte s Belfortem a projížďkou lodí po kanálech.",
    zdroje: sources("Basilica_of_the_Holy_Blood", "Heilig-Bloedbasiliek Brugge"),
    pribehy: [
      { nazev: "Krev z Jeruzaléma", text: "Hrabě Dětřich Alsaský prý přivezl lahvičku s Kristovou krví z křížové výpravy." },
      { nazev: "Procesí", text: "Každý rok na Nanebevstoupení nese biskup relikvii ulicemi Brugg a tisíce lidí ji sledují." }
    ]
  }),
  place("little-mermaid-copenhagen", {
    nazev: "Malá mořská víla",
    zeme: "Dánsko",
    lead: "Bronzová socha z Andersenovy pohádky - dvakrát jí uřízli hlavu, jednou ruku a jednou ji vyhodili do vzduchu. Hlavu z roku 1964 nikdo nenašel.",
    gps: { lat: 55.69286, lon: 12.59927 },
    kategorie: ["legenda"],
    temata: ["mytologie", "media", "voda"],
    indexTajemna: 62,
    paranormalniAktivita: "žádná",
    historickaDolozenost: "výborná",
    nebezpecnost: "nízká",
    pristupnost: "volně přístupné",
    atmosfera: 4.0,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Socha mořské víly sedí na kameni u nábřeží Langelinie. Je překvapivě malá - asi 1,25 metru. Patří k nejfotografovanějším sochám světa.",
      historie: "Sochu vytvořil Edvard Eriksen v roce 1913 na objednávku pivovarníka Carla Jacobsena. Tělo prý modelovala sochařova manželka. V roce 1964 vandal sochu sťal a hlava se nikdy nenašla. V roce 1998 hlavu uřízli znovu, v roce 2003 sochu shodili výbuchem do vody.",
      legenda: "Andersenova víla obětovala hlas, aby získala lidské nohy a lásku prince. Princ si vzal jinou a víla se proměnila v mořskou pěnu. Pohádka je smutnější než filmové verze.",
      paranormalni: "Nadpřirozené jevy se nepopisují. Pověst o soše je spojená spíš s pohádkou a s útoky vandalů.",
      skepticke: "Útoky na sochu byly protesty a vandalismus. Pachatele z roku 1964 policie nikdy nenašla."
    },
    praktickeInfo: "Socha je na nábřeží Langelinie, asi 20 minut pěšky od Nyhavnu. Je volně přístupná. Ráno je méně lidí. Kombinujte s pevností Kastellet a královským palácem Amalienborg.",
    zdroje: sources("The_Little_Mermaid_(statue)", "Den lille Havfrue"),
    pribehy: [
      { nazev: "Ztracená hlava", text: "V roce 1964 někdo v noci uřízl soše hlavu. Ta se nikdy nenašla a musela být vytvořena nová." },
      { nazev: "Pěna na moři", text: "V Andersenově pohádce se víla na konci promění v mořskou pěnu, protože princ si vzal jinou." }
    ]
  }),
  place("rovaniemi-aurora-fox-fires", {
    nazev: "Polární kruh v Rovaniemi a liščí ohně",
    zeme: "Finsko",
    lead: "Na polárním kruhu u Rovaniemi tančí na obloze polární záře - Finové jí říkají „liščí ohně“ podle lišky, která ocasem zvedala jiskry ze sněhu.",
    gps: { lat: 66.54360, lon: 25.84730 },
    kategorie: ["priroda", "legenda"],
    temata: ["kosmicka-anomalie", "mytologie", "led"],
    indexTajemna: 70,
    paranormalniAktivita: "lidové pověsti",
    historickaDolozenost: "výborná",
    nebezpecnost: "nízká",
    pristupnost: "volně přístupné",
    atmosfera: 4.8,
    nocniVhodnost: true,
    vhodneProDeti: true,
    popisy: {
      zahada: "V zimních nocích se nad lesy a zamrzlými řekami vlní zelené, růžové a fialové pruhy světla. Na polárním kruhu je bílá čára, kterou návštěvníci překračují.",
      historie: "Rovaniemi je hlavní město Laponska. Za války bylo téměř úplně zničeno a znovu postaveno podle plánu architekta Alvara Aalta. Na polárním kruhu je dnes vesnice Santa Clause.",
      legenda: "Finské slovo pro polární záři revontulet znamená „liščí ohně“: liška běžela přes sněhové pláně a ocasem zvedala jiskry do nebe. Podle sámských pověstí se na polární záři nesmí pískat ani mávat - mohla by si člověka odnést.",
      paranormalni: "Někteří lidé tvrdí, že polární záři slyší - praskání nebo šumění. Vědci zkoumají, zda může vznikat zvuk v atmosféře.",
      skepticke: "Polární záře vzniká, když částice ze Slunce narážejí do atmosféry. Zprávy o zvuku jsou vzácné a vysvětlení není jisté."
    },
    praktickeInfo: "Polární záře je nejlépe vidět od září do března za jasných nocí mimo světla města. Nabízí se výlety na sněžnicích, se psím spřežením nebo se soby. V zimě bývá -20 °C i méně, oblečte se do vrstev. Na polární kruh jezdí autobus z centra.",
    zdroje: sources("Aurora", "Rovaniemi Arctic Circle"),
    pribehy: [
      { nazev: "Liška a jiskry", text: "Liška běžela přes sníh a ocasem zvedala jiskry až do nebe - tak podle Finů vzniká polární záře." },
      { nazev: "Nepískej na záři", text: "Podle sámských pověstí si polární záře může odnést toho, kdo na ni píská nebo mává." }
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
