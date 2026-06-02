const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const placesPath = path.join(root, "data", "mista.json");
const articlesPath = path.join(root, "data", "articles.json");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8").replace(/^\uFEFF/, ""));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function slugify(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function profile(item) {
  const id = slugify(item.name);
  const themes = item.themes || ["legenda", "mytologie"];
  const category = item.category || "legenda";
  return {
    id,
    slug: id,
    localizedSlugs: { cs: id, en: id, de: id, es: id, fr: id },
    detailPath: `/mista/${id}/`,
    nazev: item.name,
    zeme: item.country,
    kontinent: item.continent,
    lead: item.lead,
    gps: { lat: item.lat, lon: item.lon },
    kategorie: Array.from(new Set([category, ...(item.categories || [])])),
    temata: themes,
    indexTajemna: item.score || 73,
    paranormalniAktivita: item.activity || "kulturni, historicka nebo lokalni tvrzeni",
    historickaDolozenost: "overitelna zakladni identita",
    nebezpecnost: item.risk || "overit lokalne",
    pristupnost: item.access || "overit pred cestou",
    atmosfera: item.atmosphere || 4.0,
    nocniVhodnost: Boolean(item.night),
    vhodneProDeti: item.kids !== false,
    popisy: {
      zahada: `${item.name} je dalsi vlastni seed MysteryMap s overitelnou polohou a jasnou verejnou asociaci: ${item.lead} Profil je pripraveny pro dalsi lokalni zdroje, fotky a jazykove rozsireni.`,
      historie: "Historicka vrstva zatim drzi stabilni identitu mista, jeho geografii a dohledatelny kontext. Cilem je mit mnoho samostatnych stranek, ktere lze postupne prohlubovat bez kopirovani cizi databaze.",
      legenda: "Legendova vrstva popisuje, proc se misto vypravi: ruina, posvatny prostor, zanikle mesto, katakomba, opticka iluze, UFO pribeh, filmovy obraz nebo prirodni anomalie.",
      paranormalni: "Paranormalni vrstva je viditelne oddelena jako tvrzeni, folklor nebo popularni interpretace. Muze jit o zjeveni, zvuky, svetla, prokleti, pocit sledovani, zmizeni nebo posvatnou auru.",
      skepticke: "Skepticky ramec hleda geologii, historii, psychologii, architekturu, medialni opakovani a cestovatelsky marketing. Tim profil zustava citelny pro lidi, Google i LLM vyhledavani."
    },
    praktickeInfo: `Pred navstevou ${item.name} over aktualni pristup, mistni pravidla, vlastnictvi pozemku, bezpecnost a ochranu pamatky. GPS je orientacni bod, ne povoleni vstupu.`,
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: `Wikipedia: ${item.name}`, url: `https://en.wikipedia.org/wiki/${encodeURIComponent(item.name.replaceAll(" ", "_"))}`, licence: "CC BY-SA / reference discovery" },
      { nazev: `Wikidata search: ${item.name}`, url: `https://www.wikidata.org/w/index.php?search=${encodeURIComponent(item.name)}`, licence: "CC0 / entity discovery" },
      { nazev: "OpenStreetMap search", url: `https://www.openstreetmap.org/search?query=${encodeURIComponent(`${item.name} ${item.country}`)}`, licence: "ODbL / map verification" }
    ],
    pribehy: [
      {
        nazev: "Proc je v pate vlne",
        text: `${item.name} rozsiruje mapu o motivy ${themes.join(", ")} a pomaha vytvaret hustsi globalni katalog mist, ktera lze dale overovat a propojovat.`
      },
      {
        nazev: "Co doplnit pozdeji",
        text: "Dalsi redakcni krok ma pridat lokalni zdroje, presne navstevnicke informace, kvalitni licencovane fotografie a lepsi texty pro konkretni jazykove publikum."
      }
    ]
  };
}

const rawPlaces = [
  { name: "Orava Castle", country: "Slovensko", continent: "Evropa", lat: 49.2610, lon: 19.3580, score: 78, category: "hrad", themes: ["hrad", "film", "duchove"], lead: "Dramaticky hrad nad Oravou, ktery se zapsal i do filmove historie Nosferatu a stredoevropskych legend." },
  { name: "Cachtice Castle", country: "Slovensko", continent: "Evropa", lat: 48.7240, lon: 17.7600, score: 84, category: "hrad", themes: ["vrazdy", "duchove"], lead: "Zricenina spojovana s Alzbetou Bathory, kde realna historie a krvava legenda tezko oddeluji hranice." },
  { name: "Trencin Castle", country: "Slovensko", continent: "Evropa", lat: 48.8948, lon: 18.0445, score: 73, category: "hrad", themes: ["hrad", "legenda"], lead: "Vyrazny hrad nad Vahom s rimskym napisem, studnou lasky a silnou krajinnou dominantou." },
  { name: "Devin Castle", country: "Slovensko", continent: "Evropa", lat: 48.1740, lon: 16.9780, score: 75, category: "hrad", themes: ["hrad", "mytologie"], lead: "Ruina nad soutokem Dunaje a Moravy, kde hranice, voda a historie vytvareji symbolicky uzel." },
  { name: "Trosky Castle", country: "Cesko", continent: "Evropa", lat: 50.5150, lon: 15.2300, score: 78, category: "hrad", themes: ["hrad", "dabel"], lead: "Dve veze na sopecnych sukach v Ceskem raji, prirozene dramaticke misto pro legendy a temnou siluetu." },
  { name: "Karlstejn Castle", country: "Cesko", continent: "Evropa", lat: 49.9394, lon: 14.1883, score: 74, category: "hrad", themes: ["hrad", "ritual"], lead: "Kralovsky hrad s kapli svateho Krize, kde moc, relikvie a ochrana pokladu tvori jasny tematicky profil." },
  { name: "Loket Castle", country: "Cesko", continent: "Evropa", lat: 50.1865, lon: 12.7546, score: 76, category: "hrad", themes: ["hrad", "veznice"], lead: "Kamenny hrad nad Ohri s vezenim a stredovekou tvrdosti, vhodny pro temnou i filmovou vrstvu." },
  { name: "Zvikov Castle", country: "Cesko", continent: "Evropa", lat: 49.4380, lon: 14.1980, score: 77, category: "hrad", themes: ["duchove", "hrad"], lead: "Hrad na soutoku Vltavy a Otavy s povestmi o Zvikovskem raraskovi a silnou nocni atmosferou." },
  { name: "Bled Castle", country: "Slovinsko", continent: "Evropa", lat: 46.3692, lon: 14.1000, score: 73, category: "hrad", themes: ["hrad", "mytologie"], lead: "Hrad nad jezerem Bled, kde pohled na ostrov a skalu vytvari prirozeny pohadkovo-myticky obraz." },
  { name: "Trakai Island Castle", country: "Litva", continent: "Evropa", lat: 54.6528, lon: 24.9347, score: 74, category: "hrad", themes: ["hrad", "ostrov"], lead: "Ostrovni hrad v jezerni krajine, kde voda a cihlová architektura posiluji izolovany historicky dojem." },
  { name: "Malbork Castle", country: "Polsko", continent: "Evropa", lat: 54.0397, lon: 19.0275, score: 80, category: "hrad", themes: ["templari", "tajne-spolecnosti"], lead: "Obrovska pevnost nemeckych rytiru, kde radova moc a monumentalni architektura tvori silny historicky uzel." },
  { name: "Ksiaz Castle", country: "Polsko", continent: "Evropa", lat: 50.8422, lon: 16.2925, score: 81, category: "hrad", themes: ["tajne-spolecnosti", "valka"], lead: "Zamek v Dolnim Slezsku spojovany s podzemnim projektem Riese a valecnymi tajemstvimi." },
  { name: "Osowka Underground City", country: "Polsko", continent: "Evropa", lat: 50.6690, lon: 16.4140, score: 82, category: "podzemi", themes: ["podzemi", "tajne-spolecnosti", "valka"], lead: "Podzemni komplex projektu Riese, kde nedokoncene tunely posiluji sporne a tajemne interpretace." },
  { name: "Wlodarz Complex", country: "Polsko", continent: "Evropa", lat: 50.6750, lon: 16.4400, score: 80, category: "podzemi", themes: ["podzemi", "valka"], lead: "Cast tajemneho nacistickeho podzemi v Sovich horach, dulezita pro mapu valecnych zahad." },
  { name: "Srebrna Gora Fortress", country: "Polsko", continent: "Evropa", lat: 50.5740, lon: 16.6500, score: 73, category: "hrad", themes: ["hrad", "valka"], lead: "Mohutna horska pevnost v Dolnim Slezsku, kde vojenska architektura vytvari labyrint a strategickou auru." },
  { name: "Czocha Castle", country: "Polsko", continent: "Evropa", lat: 51.0300, lon: 15.3030, score: 77, category: "hrad", themes: ["duchove", "tajne-spolecnosti"], lead: "Hrad s tajnymi chodbami, legendami a popularni filmovou atmosferou na hranici historie a atrakce." },
  { name: "Eltz Castle", country: "Nemecko", continent: "Evropa", lat: 50.2056, lon: 7.3367, score: 72, category: "hrad", themes: ["hrad", "mytologie"], lead: "Zachovany hrad v udoli Mosely, kde izolace a rodova kontinuita vytvareji klasicky stredoveky obraz." },
  { name: "Neuschwanstein Castle", country: "Nemecko", continent: "Evropa", lat: 47.5576, lon: 10.7498, score: 76, category: "hrad", themes: ["hrad", "mytologie"], lead: "Romanticky zamek Ludvika II., kde fantazie, politika a horska krajina splynuly v globalni pohadkovy symbol." },
  { name: "Frankenstein Castle", country: "Nemecko", continent: "Evropa", lat: 49.7931, lon: 8.6680, score: 82, category: "hrad", themes: ["dabel", "popkultura", "duchove"], lead: "Hrad s nazvem, alchymistickymi pribehy a popkulturni ozvenou, prirozeny kandidat pro hororovou mapu." },
  { name: "Wewelsburg Castle", country: "Nemecko", continent: "Evropa", lat: 51.6060, lon: 8.6510, score: 84, category: "hrad", themes: ["tajne-spolecnosti", "valka", "okultismus"], lead: "Hrad spojeny s nacistickou symbolikou SS, kde je nutna presna historicka a nesenzacni interpretace." },
  { name: "Teufelsberg", country: "Nemecko", continent: "Evropa", lat: 52.4970, lon: 13.2410, score: 78, category: "legenda", themes: ["tajne-spolecnosti", "valka"], lead: "Berlinsky kopec z trosek s opustenou odposlechovou stanici, moderni ruina studene valky." },
  { name: "Beelitz-Heilstatten", country: "Nemecko", continent: "Evropa", lat: 52.2610, lon: 12.9200, score: 80, category: "legenda", themes: ["duchove", "umrti"], lead: "Rozsahly areal byvalych sanatorii, kde medicinska historie a opustena architektura vytvari silnou urban exploration auru." },
  { name: "Prora", country: "Nemecko", continent: "Evropa", lat: 54.4370, lon: 13.5740, score: 76, category: "legenda", themes: ["valka", "politika"], lead: "Obri nacisticky rekreacni komplex na Rujane, kde meritko propagandy zustalo zapsane do pobrezni architektury." },
  { name: "Drachenfels", country: "Nemecko", continent: "Evropa", lat: 50.6650, lon: 7.2100, score: 74, category: "priroda", themes: ["dabel", "mytologie"], lead: "Kopec nad Rynem spojovany s draci legendou a romantickou krajinou ruin." },
  { name: "Hohenzollern Castle", country: "Nemecko", continent: "Evropa", lat: 48.3233, lon: 8.9678, score: 72, category: "hrad", themes: ["hrad", "mytologie"], lead: "Hrad na vyraznem kopci, kde dynasticka pamet a pohadkova silueta vytvari silny vizualni profil." },
  { name: "Maus Castle", country: "Nemecko", continent: "Evropa", lat: 50.1530, lon: 7.7040, score: 70, category: "hrad", themes: ["hrad", "legenda"], lead: "Rynsky hrad s vyraznym jmenem a polohou v krajine povesti, vhodny pro hustsi hradni vrstvu mapy." },
  { name: "Branitz Pyramids", country: "Nemecko", continent: "Evropa", lat: 51.7430, lon: 14.3670, score: 73, category: "legenda", themes: ["umrti", "mytologie"], lead: "Parkove pyramidy v Branitz, neobvykle evropske sepulkralni misto s egyptizujici symbolikou." },
  { name: "Carnuntum", country: "Rakousko", continent: "Evropa", lat: 48.1120, lon: 16.8650, score: 73, category: "ztracena-mesta", themes: ["ztracena-mesta", "ritual"], lead: "Rimske mesto u Dunaje, kde vojenska hranice imperia zanechala rekonstruovatelnou archeologickou krajinu." },
  { name: "Hallstatt Ossuary", country: "Rakousko", continent: "Evropa", lat: 47.5620, lon: 13.6490, score: 78, category: "legenda", themes: ["umrti", "ritual"], lead: "Kostnice v Hallstattu s malovanymi lebkami, kde nedostatek mista vytvoril zvlastni ritual pameti." },
  { name: "Hochosterwitz Castle", country: "Rakousko", continent: "Evropa", lat: 46.7550, lon: 14.4510, score: 74, category: "hrad", themes: ["hrad", "legenda"], lead: "Hrad na vapencove skale s dlouhou pristupovou cestou branami, prirozena lekce obrany a symboliky." },
  { name: "Eisriesenwelt", country: "Rakousko", continent: "Evropa", lat: 47.5020, lon: 13.1890, score: 80, category: "podzemi", themes: ["podzemi", "prirodni-anomalie"], lead: "Ledova jeskynni soustava u Werfenu, kde podzemi a led vytvareji monumentalni prirodni chram." },
  { name: "Burg Kreuzenstein", country: "Rakousko", continent: "Evropa", lat: 48.3790, lon: 16.3080, score: 71, category: "hrad", themes: ["hrad", "film"], lead: "Romanticky rekonstruovany hrad u Vidne, casto pouzivany jako vizualni stredoveka kulisa." },
  { name: "Chateau de Gruyeres", country: "Svycarsko", continent: "Evropa", lat: 46.5830, lon: 7.0830, score: 72, category: "hrad", themes: ["hrad", "mytologie"], lead: "Hrad nad mesteckem Gruyeres, kde alpska krajina a stredoveka estetika vytvari silnou pohadkovou vrstvu." },
  { name: "HR Giger Museum", country: "Svycarsko", continent: "Evropa", lat: 46.5832, lon: 7.0827, score: 79, category: "filmova-lokace", themes: ["film", "ufo", "popkultura"], lead: "Muzeum biomechanicke imaginace H. R. Gigera, propojeni hororu, sci-fi a surrealniho prostoru." },
  { name: "Sphinx Observatory", country: "Svycarsko", continent: "Evropa", lat: 46.5475, lon: 7.9850, score: 76, category: "priroda", themes: ["kosmicka-anomalie", "prirodni-anomalie"], lead: "Vysokohorska observator na Jungfraujoch, kde vedecky objekt pusobi jako stanice na hranici sveta." },
  { name: "Val Camonica Rock Drawings", country: "Italie", continent: "Evropa", lat: 45.9570, lon: 10.3000, score: 80, category: "priroda", themes: ["ritual", "mytologie"], lead: "Jedna z nejvetsich evropskych koncentraci skalnich rytin, kamenny archiv dlouhe lidske imaginace." },
  { name: "Cerveteri Necropolis", country: "Italie", continent: "Evropa", lat: 42.0000, lon: 12.1000, score: 79, category: "legenda", themes: ["umrti", "podzemi"], lead: "Etruske mesto mrtvych s hrobkami jako domy, kde podsveti napodobuje svet zivych." },
  { name: "Tarquinia Necropolis", country: "Italie", continent: "Evropa", lat: 42.2500, lon: 11.7560, score: 79, category: "legenda", themes: ["umrti", "ritual"], lead: "Malovane etruske hrobky, kde barvy a sceny zivota prezivaji v podzemnich komorach smrti." },
  { name: "Bomarzo Monster Park", country: "Italie", continent: "Evropa", lat: 42.4900, lon: 12.2500, score: 80, category: "legenda", themes: ["dabel", "mytologie"], lead: "Manýristicky park obrich monster, naklonenych staveb a symbolu, kde zahrada funguje jako zamerna zahada." },
  { name: "Villa Palagonia", country: "Italie", continent: "Evropa", lat: 38.0780, lon: 13.5070, score: 76, category: "legenda", themes: ["mytologie", "dabel"], lead: "Sicilska vila monster, kde groteskni sochy vytvareji podivny aristokraticky svet." },
  { name: "Castel del Monte", country: "Italie", continent: "Evropa", lat: 41.0847, lon: 16.2700, score: 83, category: "hrad", themes: ["templari", "kosmicka-anomalie"], lead: "Osmiboky hrad Fridricha II., magnet pro geometricke, symbolicke a templarske interpretace." },
  { name: "Cumae Sybil Cave", country: "Italie", continent: "Evropa", lat: 40.8480, lon: 14.0540, score: 81, category: "podzemi", themes: ["mytologie", "ritual"], lead: "Jeskynni chodba spojovana se Sybilou v Kumach, klasicky motiv vestby a sestupu do skryteho prostoru." },
  { name: "Orvieto Underground", country: "Italie", continent: "Evropa", lat: 42.7180, lon: 12.1110, score: 78, category: "podzemi", themes: ["podzemi", "ztracena-mesta"], lead: "Podzemni sit pod Orvietem, kde etruské a stredoveke vrstvy vytvareji druhe mesto pod mestem." },
  { name: "Damanhur Temples", country: "Italie", continent: "Evropa", lat: 45.4300, lon: 7.8500, score: 82, category: "podzemi", themes: ["tajne-spolecnosti", "ritual"], lead: "Podzemni chramy moderni komunity Damanhur, na hrane umeni, spirituality a utajene vystavby." },
  { name: "Necromanteion of Acheron", country: "Recko", continent: "Evropa", lat: 39.2370, lon: 20.5250, score: 82, category: "podzemi", themes: ["umrti", "mytologie"], lead: "Anticke misto spojovane s komunikaci s mrtvymi a krajinou reky Acheron." },
  { name: "Meteora", country: "Recko", continent: "Evropa", lat: 39.7217, lon: 21.6306, score: 80, category: "priroda", themes: ["ritual", "mytologie"], lead: "Klastery na skalnich sloupech, kde izolace, vyska a vira tvori skoro nadpozemsky prostor." },
  { name: "Epidaurus Theatre", country: "Recko", continent: "Evropa", lat: 37.5960, lon: 23.0790, score: 74, category: "legenda", themes: ["ritual", "mytologie"], lead: "Anticke divadlo s vyhlasenou akustikou, kde architektura sama pusobi jako technicka zahada." },
  { name: "Samothrace Sanctuary", country: "Recko", continent: "Evropa", lat: 40.4730, lon: 25.5310, score: 78, category: "legenda", themes: ["ritual", "tajne-spolecnosti"], lead: "Svatyne Velkych bohu na Samothrace, kde mysterni kulty a ostrovni izolace vytvareji silny ritualni profil." },
  { name: "Nemea", country: "Recko", continent: "Evropa", lat: 37.8070, lon: 22.7110, score: 72, category: "legenda", themes: ["mytologie", "ritual"], lead: "Misto spojene s Heraklovym lvem a antickymi hrami, vhodne pro mytologickou mapu Recka." },
  { name: "Phaistos", country: "Recko", continent: "Evropa", lat: 35.0510, lon: 24.8140, score: 80, category: "ztracena-mesta", themes: ["mytologie", "konspirace"], lead: "Minojsky palac spojovany s diskem z Faistu, jednim z nejznamejsich nerozlustěnych artefaktu." },
  { name: "Akrotiri Santorini", country: "Recko", continent: "Evropa", lat: 36.3510, lon: 25.4030, score: 83, category: "katastrofa", themes: ["sopky", "ztracena-mesta"], lead: "Minojske mesto zachovane sopecnym popelem, casto spojovane s debatami o Atlantide." },
  { name: "Monemvasia", country: "Recko", continent: "Evropa", lat: 36.6870, lon: 23.0550, score: 75, category: "hrad", themes: ["hrad", "ztracena-mesta"], lead: "Skalni pevnostni mesto spojene s pevninou uzkou cestou, prirozeny obraz izolovaneho sveta." },
  { name: "Butrint", country: "Albanie", continent: "Evropa", lat: 39.7450, lon: 20.0200, score: 78, category: "ztracena-mesta", themes: ["ztracena-mesta", "mytologie"], lead: "Vrstvene archeologicke mesto v mokradni krajine, kde recke, rimske a byzantske deje sedi nad sebou." },
  { name: "Rozafa Castle", country: "Albanie", continent: "Evropa", lat: 42.0470, lon: 19.4930, score: 79, category: "hrad", themes: ["prokleti", "mytologie"], lead: "Hrad ve Skadaru spojeny s legendou o zazdene zene, silny motiv obeti a stavby." },
  { name: "Gjirokaster Castle", country: "Albanie", continent: "Evropa", lat: 40.0740, lon: 20.1390, score: 75, category: "hrad", themes: ["hrad", "valka"], lead: "Kamenny hrad nad mestem, kde osmanska, vezenska a valecna historie vytvari tvrdou atmosferu." },
  { name: "Ostrog Monastery", country: "Cerna Hora", continent: "Evropa", lat: 42.6750, lon: 19.0290, score: 78, category: "legenda", themes: ["ritual", "mytologie"], lead: "Klaster vestaveny do bile skaly, poutni misto s dramatickou polohou a silnym nabozenskym vyznamem." },
  { name: "Lovcen Mausoleum", country: "Cerna Hora", continent: "Evropa", lat: 42.3990, lon: 18.8370, score: 74, category: "legenda", themes: ["umrti", "mytologie"], lead: "Mauzoleum na horskem vrcholu, kde narodni pamet a krajina vytvareji monumentalni symbol." },
  { name: "Mostar Bridge", country: "Bosna a Hercegovina", continent: "Evropa", lat: 43.3370, lon: 17.8150, score: 76, category: "katastrofa", themes: ["valka", "mytologie"], lead: "Most obnoveni a valecne pameti, kde zniceni i rekonstrukce tvori silny pribeh mista." },
  { name: "Pyramid of the Sun Bosnia", country: "Bosna a Hercegovina", continent: "Evropa", lat: 43.9880, lon: 18.1780, score: 81, category: "priroda", themes: ["konspirace", "pseudoveda"], lead: "Kopec Visocica spojovany se spornou pyramidovou teorii, vhodny pro jasny skepticky ramec." },
  { name: "Jajce Catacombs", country: "Bosna a Hercegovina", continent: "Evropa", lat: 44.3420, lon: 17.2700, score: 76, category: "podzemi", themes: ["podzemi", "umrti"], lead: "Podzemni hrobka ve stredovekem Jajci, kde se kralovska pamet uklada do skaly." },
  { name: "Plitvice Lakes", country: "Chorvatsko", continent: "Evropa", lat: 44.8650, lon: 15.5820, score: 73, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Kaskadova jezera a travertinove bariery, prirodni system pusobici jako vodni labyrint." },
  { name: "Diocletian's Palace", country: "Chorvatsko", continent: "Evropa", lat: 43.5080, lon: 16.4400, score: 75, category: "ztracena-mesta", themes: ["film", "ztracena-mesta"], lead: "Rimsky palac v zivem meste Split, kde imperium, soucasny zivot a filmova popkultura sdileji stejne zdi." },
  { name: "Salona", country: "Chorvatsko", continent: "Evropa", lat: 43.5410, lon: 16.4870, score: 74, category: "ztracena-mesta", themes: ["ztracena-mesta", "umrti"], lead: "Ruiny hlavniho mesta rimske Dalmacie, kde amfiteatr a nekropole tvori rozsahlou mrtvou mapu." },
  { name: "Fort Lovrijenac", country: "Chorvatsko", continent: "Evropa", lat: 42.6410, lon: 18.1050, score: 75, category: "filmova-lokace", themes: ["film", "hrad"], lead: "Dubrovnicka pevnost na skale, v popkulture znama jako filmove ztelesneni moci a oblehani." },
  { name: "Longleat Hedge Maze", country: "Spojene kralovstvi", continent: "Evropa", lat: 51.1850, lon: -2.2750, score: 70, category: "priroda", themes: ["prirodni-labyrint", "mytologie"], lead: "Velky zivý labyrint u Longleat, civilizovana verze motivu bloudeni a ztraty orientace." },
  { name: "Puzzlewood", country: "Spojene kralovstvi", continent: "Evropa", lat: 51.7890, lon: -2.6090, score: 74, category: "priroda", themes: ["film", "mytologie"], lead: "Les ve Forest of Dean s koreny, skalami a cestami, casto pusobici jako fantasy krajina." },
  { name: "Wistman's Wood", country: "Spojene kralovstvi", continent: "Evropa", lat: 50.5780, lon: -3.9610, score: 77, category: "priroda", themes: ["duchove", "mytologie"], lead: "Prastary dubovy les na Dartmooru, kde pokroucene stromy a mlha vytvareji silnou folklorni atmosferu." },
  { name: "Dartmoor Prison", country: "Spojene kralovstvi", continent: "Evropa", lat: 50.5480, lon: -3.9950, score: 78, category: "veznice", themes: ["veznice", "duchove"], lead: "Veznice v drsne krajine Dartmooru, kde izolace a mlha pridavaji mistu temny psychologicky profil." },
  { name: "Bodmin Moor", country: "Spojene kralovstvi", continent: "Evropa", lat: 50.5740, lon: -4.6030, score: 79, category: "priroda", themes: ["mytologie", "duchove"], lead: "Cornwallske vresoviste spojovane s legendami, bestii z Bodminu a opustenymi kamennymi stopami." },
  { name: "Men-an-Tol", country: "Spojene kralovstvi", continent: "Evropa", lat: 50.1580, lon: -5.6050, score: 76, category: "legenda", themes: ["ritual", "mytologie"], lead: "Kamen s kruhovym otvorem v Cornwallu, spojovany s lecivymi a pruchodovymi ritualy." },
  { name: "St Michael's Mount", country: "Spojene kralovstvi", continent: "Evropa", lat: 50.1170, lon: -5.4770, score: 77, category: "ostrov", themes: ["mytologie", "hrad"], lead: "Prilivovy ostrov s hradem a legendami o obrech, britsky protiklad Mont Saint-Michel." },
  { name: "Dunmore Cave", country: "Irsko", continent: "Evropa", lat: 52.7320, lon: -7.2460, score: 78, category: "podzemi", themes: ["podzemi", "vrazdy"], lead: "Jeskyně spojovana s historickym masakrem a archeologickymi nalezy, kde podzemi nese realnou temnou pamet." },
  { name: "Rathcroghan", country: "Irsko", continent: "Evropa", lat: 53.7980, lon: -8.3160, score: 81, category: "legenda", themes: ["mytologie", "ritual"], lead: "Krajina Connachtskych kralu a vstupu do podsveti Oweynagat, silne misto irske mytologie." },
  { name: "Oweynagat Cave", country: "Irsko", continent: "Evropa", lat: 53.8030, lon: -8.3100, score: 82, category: "podzemi", themes: ["dabel", "mytologie"], lead: "Jeskyně kocek u Rathcroghan, tradicne vnímana jako brana do jineho sveta." },
  { name: "Poulnabrone Dolmen", country: "Irsko", continent: "Evropa", lat: 53.0480, lon: -9.1400, score: 76, category: "legenda", themes: ["umrti", "ritual"], lead: "Megaliticka hrobka v Burrenu, kde kamenny portal vystupuje z krasove krajiny jako pradávny znak." },
  { name: "Dun Aonghasa", country: "Irsko", continent: "Evropa", lat: 53.1250, lon: -9.7670, score: 77, category: "hrad", themes: ["mytologie", "oceany"], lead: "Praveka pevnost na utesech Aranu, kde obrana konci primo nad Atlantikem." },
  { name: "Svalbard Global Seed Vault", country: "Norsko", continent: "Evropa", lat: 78.2357, lon: 15.4910, score: 80, category: "podzemi", themes: ["zakazane-zony", "katastrofa"], lead: "Arkticky trezor semen, moderni apokalypticky symbol ochrany zivota pod permafrostem." },
  { name: "Vardo Witch Trials Memorial", country: "Norsko", continent: "Evropa", lat: 70.3700, lon: 31.1100, score: 81, category: "katastrofa", themes: ["vrazdy", "carodejnictvi"], lead: "Pametni misto severskych carodejnickych procesu, kde architektura pripomina socialni a naboženskou paniku." },
  { name: "Borgund Stave Church", country: "Norsko", continent: "Evropa", lat: 61.0470, lon: 7.8120, score: 75, category: "legenda", themes: ["mytologie", "ritual"], lead: "Dreveny kostel s dračími motivy, kde krestanska architektura nese ozveny severske imaginace." },
  { name: "Rjukan Sun Mirrors", country: "Norsko", continent: "Evropa", lat: 59.8780, lon: 8.5940, score: 71, category: "priroda", themes: ["prirodni-anomalie", "skeptic"], lead: "Mesto v udoli s obri zrcadly, ktera privadeji zimni slunce na namesti a pusobi jako moderni svetelna magie." },
  { name: "Silfra Fissure", country: "Island", continent: "Evropa", lat: 64.2550, lon: -21.1230, score: 78, category: "priroda", themes: ["prirodni-anomalie", "oceany"], lead: "Trhlina mezi tektonickymi deskami v Thingvelliru, kde lze doslova videt hranici kontinentu." },
  { name: "Hekla", country: "Island", continent: "Evropa", lat: 63.9920, lon: -19.6660, score: 80, category: "katastrofa", themes: ["sopky", "dabel"], lead: "Islandská sopka historicky prezdivana brana do pekla, klasicke spojeni geologie a strachu." },
  { name: "Dimmuborgir", country: "Island", continent: "Evropa", lat: 65.5910, lon: -16.9130, score: 78, category: "priroda", themes: ["dabel", "mytologie"], lead: "Lavove formace u Myvatnu, kde cerny hrad z kamene prirozene pritahuje pekelne a trolli legendy." },
  { name: "Lagarfljot", country: "Island", continent: "Evropa", lat: 65.2500, lon: -14.6500, score: 77, category: "priroda", themes: ["mytologie", "oceany"], lead: "Jezero spojovane s islandskym hadim tvorem, lokalni obdoba jezernich nestvur." },
  { name: "Thingvellir", country: "Island", continent: "Evropa", lat: 64.2559, lon: -21.1295, score: 76, category: "priroda", themes: ["mytologie", "ritual"], lead: "Krajina parlamentu a tektonicke trhliny, kde politika, priroda a mytologie sedi v jednom prostoru." }
];

const places = readJson(placesPath);
const byId = new Map(places.map((place) => [place.id, place]));
rawPlaces.map(profile).forEach((place) => byId.set(place.id, place));
writeJson(placesPath, Array.from(byId.values()));

const articles = readJson(articlesPath);
const article = {
  id: "pata-vlna-evropske-hrady-podzemi-anomalie",
  slug: "pata-vlna-evropske-hrady-podzemi-anomalie",
  localizedSlugs: {
    cs: "pata-vlna-evropske-hrady-podzemi-anomalie",
    en: "fifth-wave-european-castles-underground-anomalies",
    de: "fuenfte-welle-europaeische-burgen-untergrund-anomalien",
    es: "quinta-ola-castillos-subterraneos-anomalias-europa",
    fr: "cinquieme-vague-chateaux-souterrains-anomalies-europe"
  },
  title: "Pata vlna: evropske hrady, podzemi, anomalie a temne pribehy",
  description: "Pata vlna zvetsuje MysteryMap o dalsi evropske hrady, podzemi, valecne ruiny, opticke a prirodni anomalie, posvatna mista a filmove lokace.",
  category: "hrad",
  themes: ["hrad", "podzemi", "duchove", "prirodni-anomalie"],
  relatedPlaceIds: rawPlaces.slice(0, 30).map((item) => slugify(item.name)),
  sections: [
    {
      heading: "Proc pata vlna posiluje Evropu",
      body: "Evropa ma mimoradne hustou sit hradu, katakomb, pohrebnich mist, valecnych ruin a folklornich lokalit. Tyto body dobre vytvareji interni prolinkovani a tematicke vstupni stranky."
    },
    {
      heading: "Seed neni konecny clanek",
      body: "Kazdy profil uz ma URL, GPS, zdroje, kategorie a strukturu. Dalsi redakce muze vybrat nejdulezitejsi mista a doplnit hlubsi lokalni zdroje, fotky a vlastni styl."
    },
    {
      heading: "Dalsi smer",
      body: "Po teto vlne je vhodne pokracovat ve specializovanych balicich: UFO mista, filmove lokace, katakomby, katastrofy, ztracena mesta a mista s overenymi fotografiemi."
    }
  ],
  sources: ["wikidata", "wikipedia", "openstreetmap", "unesco-whc"]
};

const articlesById = new Map(articles.map((item) => [item.id, item]));
articlesById.set(article.id, article);
writeJson(articlesPath, Array.from(articlesById.values()));

console.log(`Upserted ${rawPlaces.length} fifth-wave places and 1 article.`);
