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
    kategorie: Array.from(new Set([item.category || "legenda", ...(item.categories || [])])),
    temata: themes,
    indexTajemna: item.score || 73,
    paranormalniAktivita: item.activity || "kulturni a lokalni tvrzeni",
    historickaDolozenost: "overitelna zakladni identita",
    nebezpecnost: item.risk || "overit lokalne",
    pristupnost: item.access || "overit pred cestou",
    atmosfera: item.atmosphere || 4.0,
    nocniVhodnost: Boolean(item.night),
    vhodneProDeti: item.kids !== false,
    popisy: {
      zahada: `${item.name} patri do dalsi expanzni vlny MysteryMap jako overitelne misto s GPS a silnou verejnou asociaci: ${item.lead} Profil je seed pro dalsi redakcni doplneni.`,
      historie: "Historicka vrstva zatim drzi zakladni popis mista, geografii a zdrojovou stopu. Pri dalsi editaci se maji doplnit lokalni instituce, pametove zdroje a presnejsi chronologie.",
      legenda: "Legendova vrstva zachycuje, proc se misto vraci v cestovatelskych seznamech, ustnim podani, archeologickych debatách, popkulture nebo lokalni identite.",
      paranormalni: "Paranormalni nebo zahadova vrstva je oznacena jako tvrzeni a interpretace: posvatna aura, opustena krajina, anomalie, prokleti, ztracena civilizace, tajny pribeh nebo silny psychologicky dojem.",
      skepticke: "Skepticky ramec oddeluje dolozitelna fakta od efektu turismu, optiky, geologie, medialniho opakovani a lidske predstavivosti. To je zaklad pro E-E-A-T i duveryhodne cteni."
    },
    praktickeInfo: `Pred navstevou ${item.name} over pristup, povoleni, mistni pravidla, ochranu pamatky a bezpecnost. Souradnice jsou orientacni a nejsou povolenim vstupu.`,
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: `Wikipedia: ${item.name}`, url: `https://en.wikipedia.org/wiki/${encodeURIComponent(item.name.replaceAll(" ", "_"))}`, licence: "CC BY-SA / reference discovery" },
      { nazev: `Wikidata search: ${item.name}`, url: `https://www.wikidata.org/w/index.php?search=${encodeURIComponent(item.name)}`, licence: "CC0 / entity discovery" },
      { nazev: "OpenStreetMap search", url: `https://www.openstreetmap.org/search?query=${encodeURIComponent(`${item.name} ${item.country}`)}`, licence: "ODbL / map verification" }
    ],
    pribehy: [
      {
        nazev: "Proc pribylo",
        text: `${item.name} doplnuje geografickou sirku webu a rozsiruje motivy ${themes.join(", ")}. Je to zakladni profil pro mapu, vyhledavani a budouci lokalni redakci.`
      },
      {
        nazev: "Co hlidat",
        text: "U dalsiho zpracovani je potreba doplnit presne licence fotografii, mistni autority, aktualni pristup a jazykove nuance, aby profil nebyl jen katalogovy bod."
      }
    ]
  };
}

const rawPlaces = [
  { name: "Timbuktu", country: "Mali", continent: "Afrika", lat: 16.7666, lon: -3.0026, score: 82, category: "ztracena-mesta", themes: ["ztracena-mesta", "tajne-spolecnosti"], lead: "Mesto rukopisu, obchodu a poustni ucene tradice, ktere nese auru vzdalenosti a ohrozene pameti." },
  { name: "Djenne", country: "Mali", continent: "Afrika", lat: 13.9061, lon: -4.5533, score: 76, category: "legenda", themes: ["ritual", "ztracena-mesta"], lead: "Hlinene mesto a velka mesita, kde architektura a komunitni obnova tvori zivou posvatnou krajinu." },
  { name: "Ait Benhaddou", country: "Maroko", continent: "Afrika", lat: 31.0470, lon: -7.1295, score: 77, category: "filmova-lokace", themes: ["film", "ztracena-mesta"], lead: "Ksar na obchodni trase, ktery funguje jako historicka pevnost i slavna filmova krajina." },
  { name: "Volubilis", country: "Maroko", continent: "Afrika", lat: 34.0739, lon: -5.5537, score: 75, category: "ztracena-mesta", themes: ["ztracena-mesta", "mytologie"], lead: "Rimske ruiny v Maroku, kde se imperium, mozaiky a prazdna krajina skladaji do citelne archeologicke vrstvy." },
  { name: "Siwa Oasis", country: "Egypt", continent: "Afrika", lat: 29.2032, lon: 25.5195, score: 81, category: "priroda", themes: ["mytologie", "ritual"], lead: "Oaza spojena s antickou vestirnou a poustni izolaci, ktera posiluje predstavu mista mimo cas." },
  { name: "Abu Simbel", country: "Egypt", continent: "Afrika", lat: 22.3372, lon: 31.6258, score: 80, category: "legenda", themes: ["ritual", "mytologie"], lead: "Chramy prestehovane kvuli prehrade, kde monumentalita a technicky zachranny pribeh tvori dvojitou zahadu." },
  { name: "Karnak Temple Complex", country: "Egypt", continent: "Afrika", lat: 25.7188, lon: 32.6573, score: 82, category: "legenda", themes: ["ritual", "mytologie"], lead: "Obrovsky chramovy komplex v Luxoru, kde se architektura stava mapou moci, bohu a casu." },
  { name: "Nabta Playa", country: "Egypt", continent: "Afrika", lat: 22.5070, lon: 30.7250, score: 79, category: "priroda", themes: ["ritual", "kosmicka-anomalie"], lead: "Pouštní archeologicke misto s kamennymi strukturami a debatami o praveke astronomii." },
  { name: "Meroe Pyramids", country: "Sudan", continent: "Afrika", lat: 16.9370, lon: 33.7490, score: 82, category: "legenda", themes: ["umrti", "mytologie"], lead: "Pyramidova nekropole kusitskych kralu v pousti, mene znama, ale mimoradne silna vizualne i historicky." },
  { name: "Gedi Ruins", country: "Kena", continent: "Afrika", lat: -3.3070, lon: 40.0180, score: 78, category: "ztracena-mesta", themes: ["ztracena-mesta", "mytologie"], lead: "Ruiny svahilskeho mesta v lese, kde zmizela obchodni komunita a zanechala tichou tropickou archeologii." },
  { name: "Kilwa Kisiwani", country: "Tanzanie", continent: "Afrika", lat: -8.9570, lon: 39.5220, score: 79, category: "ostrov", themes: ["ztracena-mesta", "oceany"], lead: "Ostrovni ruiny svahilskeho obchodu, kde more, islam a kamenne paláce vytvareji zapomenutou moc." },
  { name: "Rock-Hewn Churches of Lalibela", country: "Etiopie", continent: "Afrika", lat: 12.0317, lon: 39.0476, score: 83, category: "podzemi", themes: ["ritual", "mytologie"], lead: "Skalni chramy vytesane do zeme, kde pout a architektura vytvari dojem obraceneho mesta." },
  { name: "Lake Turkana", country: "Kena", continent: "Afrika", lat: 3.5000, lon: 36.0000, score: 76, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Velke jezero v drsne krajine spojene s paleontologii, pradavným osidlenim a silnou izolaci." },
  { name: "Namib Desert Fairy Circles", country: "Namibie", continent: "Afrika", lat: -24.0000, lon: 15.0000, score: 82, category: "priroda", themes: ["prirodni-anomalie", "skeptic"], lead: "Pravidelne kruhy v pousti Namib, kde se prirodni vysvetleni a vizualni zahada dlouho pretahuji." },
  { name: "Kolmanskop", country: "Namibie", continent: "Afrika", lat: -26.7047, lon: 15.2325, score: 80, category: "ztracena-mesta", themes: ["ztracena-mesta", "poust"], lead: "Opustene diamantove mesto pohlcovane piskem, idealni obraz pomijivosti bohatstvi." },
  { name: "Twyfelfontein", country: "Namibie", continent: "Afrika", lat: -20.5950, lon: 14.3720, score: 77, category: "priroda", themes: ["ritual", "mytologie"], lead: "Skalni rytiny v Damaralandu, kde krajina nese dlouhou pamet stop a symbolu." },
  { name: "Brandberg Mountain", country: "Namibie", continent: "Afrika", lat: -21.1500, lon: 14.5833, score: 76, category: "priroda", themes: ["mytologie", "ritual"], lead: "Nejvyssi hora Namibie a skalni umeni, kde prirodni dominanta funguje jako kulturni archiv." },
  { name: "Osun-Osogbo Sacred Grove", country: "Nigerie", continent: "Afrika", lat: 7.7556, lon: 4.5522, score: 79, category: "priroda", themes: ["ritual", "mytologie"], lead: "Posvatny haj jorubske tradice, kde ziva vira, sochy a les tvori chraneny ritualni prostor." },
  { name: "Benin City Walls", country: "Nigerie", continent: "Afrika", lat: 6.3333, lon: 5.6222, score: 78, category: "ztracena-mesta", themes: ["ztracena-mesta", "valka"], lead: "Pozustatky rozsahleho systemu valu a prikopu, ktery ukazuje velikost predkolonialni mestske moci." },
  { name: "Goree Island", country: "Senegal", continent: "Afrika", lat: 14.6670, lon: -17.3980, score: 82, category: "ostrov", themes: ["umrti", "valka"], lead: "Pametni ostrov spojeny s obchodem s lidmi, kde historie vyzaduje citlivost a presnost." },
  { name: "Elmina Castle", country: "Ghana", continent: "Afrika", lat: 5.0833, lon: -1.3500, score: 84, category: "hrad", themes: ["umrti", "valka"], lead: "Pevnost na pobrezi Ghany, kde kolonialni obchod a lidske utrpeni zustavaji fyzicky citelne." },
  { name: "Cape Coast Castle", country: "Ghana", continent: "Afrika", lat: 5.1036, lon: -1.2417, score: 84, category: "hrad", themes: ["umrti", "valka"], lead: "Pobrežní pevnost a pametni misto, kde architektura nese temnou vrstvu atlanticke historie." },
  { name: "Robben Island", country: "Jizni Afrika", continent: "Afrika", lat: -33.8067, lon: 18.3662, score: 80, category: "ostrov", themes: ["veznice", "politika"], lead: "Ostrovni veznice u Kapskeho Mesta, kde izolace a odpor vytvareji moderni pametni krajinu." },
  { name: "Sterkfontein Caves", country: "Jizni Afrika", continent: "Afrika", lat: -26.0150, lon: 27.7340, score: 78, category: "podzemi", themes: ["podzemi", "mytologie"], lead: "Jeskynni naleziste v Kolébce lidstva, kde podzemi uchovava hlubokou pamet lidske evoluce." },
  { name: "Tsodilo Hills", country: "Botswana", continent: "Afrika", lat: -18.7600, lon: 21.7400, score: 79, category: "priroda", themes: ["ritual", "mytologie"], lead: "Kopce se skalnim umenim v Kalahari, posvatny archiv obrazu a dlouhe lidske pritomnosti." },
  { name: "Lamu Old Town", country: "Kena", continent: "Afrika", lat: -2.2696, lon: 40.9020, score: 74, category: "ztracena-mesta", themes: ["oceany", "ztracena-mesta"], lead: "Svahilske mesto na ostrove, kde obchod, more a architektura vytvareji pomaly historicky rytmus." },
  { name: "Serra da Capivara", country: "Brazilie", continent: "Jizni Amerika", lat: -8.8333, lon: -42.5500, score: 82, category: "priroda", themes: ["ritual", "mytologie"], lead: "Narodni park se skalnim umenim a debatami o nejstarsim osidleni Ameriky." },
  { name: "Valongo Wharf", country: "Brazilie", continent: "Jizni Amerika", lat: -22.8975, lon: -43.1875, score: 82, category: "katastrofa", themes: ["umrti", "valka"], lead: "Pametni misto v Riu spojene s otroctvim a atlantickou historii, kde mesto odkrylo potlacenou vrstvu." },
  { name: "Pedra da Gavea", country: "Brazilie", continent: "Jizni Amerika", lat: -23.0000, lon: -43.2840, score: 78, category: "priroda", themes: ["konspirace", "prirodni-anomalie"], lead: "Skalni dominanta Ria, jejiz tvar dlouho zivi alternativni vyklady o obrich tvarich a napisech." },
  { name: "Chapada Diamantina", country: "Brazilie", continent: "Jizni Amerika", lat: -12.8000, lon: -41.4000, score: 75, category: "priroda", themes: ["prirodni-anomalie", "podzemi"], lead: "Krajina stolovych hor, jeskyni a vodopadu, kde geologie pusobi jako labyrint prirodnich zahad." },
  { name: "Lencois Maranhenses", country: "Brazilie", continent: "Jizni Amerika", lat: -2.5333, lon: -43.1167, score: 76, category: "priroda", themes: ["prirodni-anomalie", "oceany"], lead: "Bile duny a sezonni laguny, krajina vypadajici jako poust, ktera se na cast roku naplni vodou." },
  { name: "Serra do Roncador", country: "Brazilie", continent: "Jizni Amerika", lat: -13.0000, lon: -52.0000, score: 81, category: "priroda", themes: ["zmizeni", "konspirace"], lead: "Brazilsky horsky region spojovany s expedicemi, zmizenimi a legendami o skrytych mestech." },
  { name: "Cueva de las Manos", country: "Argentina", continent: "Jizni Amerika", lat: -47.1536, lon: -70.6556, score: 80, category: "podzemi", themes: ["ritual", "mytologie"], lead: "Jeskynni steny s otisky rukou, kde praveke gesto zustava prekvapive osobni i zahadne." },
  { name: "Ischigualasto", country: "Argentina", continent: "Jizni Amerika", lat: -30.1590, lon: -67.8420, score: 77, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Mesicni krajina v Argentine, kde eroze a fosilni historie vytvareji dojem jine planety." },
  { name: "Pucara de Tilcara", country: "Argentina", continent: "Jizni Amerika", lat: -23.5750, lon: -65.3980, score: 74, category: "legenda", themes: ["ztracena-mesta", "mytologie"], lead: "Pevnostni archeologicke misto nad quebradou, kde krajina a obranna poloha tvori andsky pribeh." },
  { name: "Cueva de los Tayos", country: "Ekvador", continent: "Jizni Amerika", lat: -3.0510, lon: -78.2060, score: 84, category: "podzemi", themes: ["konspirace", "podzemi"], lead: "Jeskynni system proslaveny expedicemi a spornymi teoriemi o kovove knihovne a ztracenych stopach." },
  { name: "Ingapirca", country: "Ekvador", continent: "Jizni Amerika", lat: -2.5442, lon: -78.8711, score: 76, category: "legenda", themes: ["ritual", "mytologie"], lead: "Incke a canarske archeologicke misto, kde se slunecni architektura propojuje s lokalni pameti." },
  { name: "Cochasqui", country: "Ekvador", continent: "Jizni Amerika", lat: 0.0500, lon: -78.3000, score: 75, category: "legenda", themes: ["ritual", "kosmicka-anomalie"], lead: "Pyramidove toly severne od Quita, casto spojovane s archeoastronomii a regionální identitou." },
  { name: "San Agustin Archaeological Park", country: "Kolumbie", continent: "Jizni Amerika", lat: 1.8833, lon: -76.2833, score: 81, category: "legenda", themes: ["umrti", "mytologie"], lead: "Socharska a pohrebni krajina s vyraznymi kamennymi postavami a tajemnym ikonografickym jazykem." },
  { name: "Tierradentro", country: "Kolumbie", continent: "Jizni Amerika", lat: 2.5667, lon: -76.0333, score: 80, category: "podzemi", themes: ["umrti", "podzemi"], lead: "Podzemni hrobky s malbami, kde sestup do zeme primo materializuje pohrebni predstavy." },
  { name: "Lake Guatavita", country: "Kolumbie", continent: "Jizni Amerika", lat: 5.2460, lon: -73.7740, score: 82, category: "priroda", themes: ["mytologie", "poklad"], lead: "Jezero spojene s legendou El Dorada, kde ritual a touha po zlate vytvorily globalni mytus." },
  { name: "Llanganates", country: "Ekvador", continent: "Jizni Amerika", lat: -1.0000, lon: -78.3000, score: 82, category: "priroda", themes: ["poklad", "zmizeni"], lead: "Horsky region spojovany s legendou o ukrytem inckem pokladu a nebezpecnym terenem." },
  { name: "Puma Punku", country: "Bolivie", continent: "Jizni Amerika", lat: -16.5619, lon: -68.6792, score: 84, category: "legenda", themes: ["konspirace", "ztracena-mesta"], lead: "Kamenny komplex u Tiwanaku, jehoz presne bloky jsou magnetem pro alternativni teorie." },
  { name: "Salar de Uyuni", country: "Bolivie", continent: "Jizni Amerika", lat: -20.1338, lon: -67.4891, score: 76, category: "priroda", themes: ["prirodni-anomalie", "kosmicka-anomalie"], lead: "Obri solna planina, kde zrcadleni a meritko vytvareji dojem nekonecne mimozemske krajiny." },
  { name: "Atacama Giant", country: "Chile", continent: "Jizni Amerika", lat: -19.9500, lon: -69.6333, score: 79, category: "legenda", themes: ["kosmicka-anomalie", "mytologie"], lead: "Obri geoglyf v pousti Atacama, kde zobrazeni na svahu vyvolava archeologicke i popkulturni interpretace." },
  { name: "Humberstone and Santa Laura", country: "Chile", continent: "Jizni Amerika", lat: -20.2070, lon: -69.7950, score: 77, category: "ztracena-mesta", themes: ["ztracena-mesta", "umrti"], lead: "Opustena saletrna mesta v pousti, kde prumyslova historie zustala jako sucha kulisa mesta duchu." },
  { name: "Port Royal", country: "Jamajka", continent: "Severni Amerika", lat: 17.9370, lon: -76.8400, score: 82, category: "katastrofa", themes: ["pirati", "zemetreseni"], lead: "Mesto piratu poskozene zemetresenim a morem, kde legenda hrichu splynula s katastrofou." },
  { name: "Tikal", country: "Guatemala", continent: "Severni Amerika", lat: 17.2220, lon: -89.6237, score: 84, category: "ztracena-mesta", themes: ["mytologie", "ztracena-mesta"], lead: "Mayske mesto v dzungli, kde pyramidy vystupuji z lesa jako obraz ztracene civilizace." },
  { name: "El Mirador", country: "Guatemala", continent: "Severni Amerika", lat: 17.7550, lon: -89.9200, score: 83, category: "ztracena-mesta", themes: ["ztracena-mesta", "mytologie"], lead: "Rozsahle predklasicke mayske centrum hluboko v dzungli, kde meritko stale prekvapuje." },
  { name: "Copan", country: "Honduras", continent: "Severni Amerika", lat: 14.8370, lon: -89.1420, score: 79, category: "legenda", themes: ["mytologie", "ztracena-mesta"], lead: "Mayske mesto se stelami a hieroglyfickym schodistem, kde texty i sochy nesou kodovanou pamet." },
  { name: "Caracol", country: "Belize", continent: "Severni Amerika", lat: 16.7639, lon: -89.1175, score: 79, category: "ztracena-mesta", themes: ["mytologie", "ztracena-mesta"], lead: "Velke mayske mesto v Belize, dlouho ukryte v lese a vhodne pro motiv ztracenych center." },
  { name: "Lubaantun", country: "Belize", continent: "Severni Amerika", lat: 16.2811, lon: -88.9592, score: 78, category: "legenda", themes: ["konspirace", "mytologie"], lead: "Mayske ruiny spojovane v populární kulture s legendou krystalove lebky." },
  { name: "Palenque", country: "Mexiko", continent: "Severni Amerika", lat: 17.4849, lon: -92.0460, score: 82, category: "ztracena-mesta", themes: ["mytologie", "konspirace"], lead: "Mayske mesto v Chiapasu, kde kralovske hrobky a ikonografie zivi archeologii i alternativni cteni." },
  { name: "Uxmal", country: "Mexiko", continent: "Severni Amerika", lat: 20.3599, lon: -89.7713, score: 78, category: "ztracena-mesta", themes: ["mytologie", "ritual"], lead: "Mayske mesto Puuc, kde geometrie fasad a legenda kouzelnikovy pyramidy tvori silny motiv." },
  { name: "Calakmul", country: "Mexiko", continent: "Severni Amerika", lat: 18.1050, lon: -89.8100, score: 82, category: "ztracena-mesta", themes: ["ztracena-mesta", "mytologie"], lead: "Velka mayska metropole v biosfericke rezervaci, kde dzungle skryva nekdejsi rivaly Tikalu." },
  { name: "Coba", country: "Mexiko", continent: "Severni Amerika", lat: 20.4920, lon: -87.7330, score: 76, category: "ztracena-mesta", themes: ["ztracena-mesta", "mytologie"], lead: "Mayske mesto mezi jezery a cestami sacbe, kde krajina i sit komunikaci posiluji pocit skryteho systemu." },
  { name: "Cave of the Crystals", country: "Mexiko", continent: "Severni Amerika", lat: 27.8500, lon: -105.5000, score: 85, category: "podzemi", themes: ["prirodni-anomalie", "podzemi"], lead: "Podzemni dutina s obrovskymi krystaly selenitu, jeden z nejvice mimozemsky pusobicich prirodnich prostoru." },
  { name: "Oak Island", country: "Kanada", continent: "Severni Amerika", lat: 44.5136, lon: -64.2947, score: 83, category: "ostrov", themes: ["poklad", "templari"], lead: "Ostrov v Nove Skotii proslaveny pokladovou legendou, vykopavkami a moderni televizni mytologii." },
  { name: "L'Anse aux Meadows", country: "Kanada", continent: "Severni Amerika", lat: 51.5966, lon: -55.5336, score: 78, category: "legenda", themes: ["ztracena-mesta", "mytologie"], lead: "Severske sidliste na Newfoundlandu, kde archeologie potvrzuje transatlantickou cestu Vikingů." },
  { name: "Nahanni Valley", country: "Kanada", continent: "Severni Amerika", lat: 61.5000, lon: -125.5000, score: 82, category: "priroda", themes: ["zmizeni", "prirodni-anomalie"], lead: "Odlehla kanadska divocina spojovana s legendami, zmizenimi a dramatickou krajinou." },
  { name: "Spotted Lake", country: "Kanada", continent: "Severni Amerika", lat: 49.0780, lon: -119.5660, score: 77, category: "priroda", themes: ["prirodni-anomalie", "ritual"], lead: "Mineralni jezero s teckovanou letni strukturou a silnym kulturnim vyznamem pro puvodni obyvatele." },
  { name: "Banff Springs Hotel", country: "Kanada", continent: "Severni Amerika", lat: 51.1667, lon: -115.5617, score: 79, category: "legenda", themes: ["duchove", "popkultura"], lead: "Velky horsky hotel s luxusni historii a opakovanou reputaci strasidelných chodeb." },
  { name: "Nan Madol", country: "Mikronesie", continent: "Oceanie", lat: 6.8440, lon: 158.3310, score: 87, category: "ztracena-mesta", themes: ["ztracena-mesta", "mytologie"], lead: "Kamene mesto na umelych ostrůvcich, casto prezdivane Benatky Pacifiku a opredene kralovskou legendou." },
  { name: "Rai Stones of Yap", country: "Mikronesie", continent: "Oceanie", lat: 9.5140, lon: 138.1290, score: 76, category: "legenda", themes: ["ritual", "mytologie"], lead: "Kamene penize ostrova Yap, kde hodnota, presun a pamet vlastnictvi tvori neobvykly socialni system." },
  { name: "Taputapuatea Marae", country: "Francouzska Polynesie", continent: "Oceanie", lat: -16.8350, lon: -151.3640, score: 80, category: "legenda", themes: ["ritual", "mytologie"], lead: "Posvatny polynesky ceremonialni komplex, ktery propojuje moreplavbu, rodove linie a ritualni geografii." },
  { name: "Te Pito Kura", country: "Chile", continent: "Oceanie", lat: -27.1000, lon: -109.2700, score: 76, category: "legenda", themes: ["mytologie", "ritual"], lead: "Misto na Rapa Nui spojovane s posvatnym kamenem a predstavou pupku sveta." },
  { name: "Port Arthur", country: "Australie", continent: "Oceanie", lat: -43.1470, lon: 147.8510, score: 81, category: "veznice", themes: ["veznice", "duchove"], lead: "Byvala trestanecka kolonie v Tasmanii, kde historie trestu a izolace vytvari silnou temnou atmosferu." },
  { name: "Fremantle Prison", country: "Australie", continent: "Oceanie", lat: -32.0550, lon: 115.7530, score: 77, category: "veznice", themes: ["veznice", "duchove"], lead: "Veznice v Zapadni Australii s podzemnimi tunely a dlouhou trestaneckou historii." },
  { name: "Lake Hillier", country: "Australie", continent: "Oceanie", lat: -34.0950, lon: 123.2020, score: 78, category: "priroda", themes: ["prirodni-anomalie", "oceany"], lead: "Ruzove jezero na Middle Islandu, jehoz barva pusobi jako umele vytvorena, ale ma prirodni priciny." },
  { name: "Pinnacles Desert", country: "Australie", continent: "Oceanie", lat: -30.6000, lon: 115.1560, score: 75, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Vapencove sloupy v pisecne krajine, kde geologie vypada jako tiche kamenne mesto." },
  { name: "Wolfe Creek Crater", country: "Australie", continent: "Oceanie", lat: -19.1667, lon: 127.8000, score: 80, category: "katastrofa", themes: ["impakt", "mytologie"], lead: "Meteoriticky krater v odlehle Australii, kde impakt a domoroda krajinna pamet tvori dvojity pribeh." },
  { name: "Min Min Lights", country: "Australie", continent: "Oceanie", lat: -22.7000, lon: 140.5000, score: 82, category: "priroda", themes: ["ufo", "prirodni-anomalie"], lead: "Svetelne jevy v australskem vnitrozemi, kde se optika, samota a legenda prirozene nasobi." },
  { name: "Kata Tjuta", country: "Australie", continent: "Oceanie", lat: -25.3000, lon: 130.7333, score: 79, category: "priroda", themes: ["mytologie", "ritual"], lead: "Skalni kupole nedaleko Uluru, posvatna krajina s pravidly respektu a silnym prostorovym dojmem." },
  { name: "Gunung Padang", country: "Indonesie", continent: "Asie", lat: -6.9947, lon: 107.0567, score: 83, category: "legenda", themes: ["konspirace", "ztracena-mesta"], lead: "Megaliticka lokalita na Jawe, ktera se stala centrem debat o stari a interpretaci vrstev." },
  { name: "Borobudur", country: "Indonesie", continent: "Asie", lat: -7.6079, lon: 110.2038, score: 82, category: "legenda", themes: ["ritual", "mytologie"], lead: "Monumentalni buddhisticky mandalovy chram, kde cesta vzhuru funguje jako duchovni mapa." },
  { name: "Prambanan", country: "Indonesie", continent: "Asie", lat: -7.7520, lon: 110.4910, score: 78, category: "legenda", themes: ["mytologie", "ritual"], lead: "Hinduisticky chramovy komplex s legendou a dramatickou siluetou kamennych vezi." },
  { name: "Tana Toraja", country: "Indonesie", continent: "Asie", lat: -2.9680, lon: 119.9000, score: 84, category: "legenda", themes: ["umrti", "ritual"], lead: "Horsky region Sulawesi prosluly pohrebnimi ritualy, domy tongkonan a silnou kulturou predku." },
  { name: "Kelimutu", country: "Indonesie", continent: "Asie", lat: -8.7650, lon: 121.8120, score: 80, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Sopka se tremi barevne promennymi jezery, ktera mistni tradice spojuje s dusemi zemrelych." },
  { name: "Plain of Jars Site 1", country: "Laos", continent: "Asie", lat: 19.4317, lon: 103.1589, score: 80, category: "legenda", themes: ["mytologie", "umrti"], lead: "Hlavni cast krajiny kamennych nadob, vhodna pro presnejsi rozvetveni uz existujiciho tematu." },
  { name: "Phnom Kulen", country: "Kambodza", continent: "Asie", lat: 13.5700, lon: 104.1000, score: 78, category: "priroda", themes: ["ritual", "mytologie"], lead: "Posvatna hora Khmeru s vodopady, lingamy v recisti a vazbou na pocatky Angkoru." },
  { name: "Angkor Wat", country: "Kambodza", continent: "Asie", lat: 13.4125, lon: 103.8670, score: 84, category: "legenda", themes: ["ritual", "mytologie"], lead: "Obri chramovy komplex, kde kosmologie, voda a imperium vytvareji jednu z nejvetsich sakralnich map sveta." },
  { name: "Ta Prohm", country: "Kambodza", continent: "Asie", lat: 13.4350, lon: 103.8890, score: 82, category: "filmova-lokace", themes: ["film", "ztracena-mesta"], lead: "Chram prorostly stromy, dnes znamy i jako ikonicka filmova lokace a obraz pralesa pohlcujiciho ruinu." },
  { name: "Bagan", country: "Myanmar", continent: "Asie", lat: 21.1717, lon: 94.8585, score: 83, category: "legenda", themes: ["ritual", "ztracena-mesta"], lead: "Plan tisicu pagod, kde meritko sakralni krajiny vytvari dojem nekonecneho ztraceneho mesta." }
];

const places = readJson(placesPath);
const byId = new Map(places.map((place) => [place.id, place]));
rawPlaces.map(profile).forEach((place) => byId.set(place.id, place));
writeJson(placesPath, Array.from(byId.values()));

const articles = readJson(articlesPath);
const article = {
  id: "afrika-ameriky-oceanie-treti-vlna",
  slug: "afrika-ameriky-oceanie-treti-vlna",
  localizedSlugs: {
    cs: "afrika-ameriky-oceanie-treti-vlna",
    en: "africa-americas-oceania-third-wave",
    de: "afrika-amerika-ozeanien-dritte-welle",
    es: "africa-americas-oceania-tercera-ola",
    fr: "afrique-ameriques-oceanie-troisieme-vague"
  },
  title: "Afrika, Ameriky a Oceanie: treti vlna expanze MysteryMap",
  description: "Treti vlna pridava africka pamatkova mista, jihoamericke archeologicke zahady, severoamericke legendy a oceanske posvatne i prirodni lokace.",
  category: "legenda",
  themes: ["mapa", "ztracena-mesta", "prirodni-anomalie", "ritual"],
  relatedPlaceIds: rawPlaces.slice(0, 30).map((item) => slugify(item.name)),
  sections: [
    {
      heading: "Proc tahle vlna vyrovnava mapu",
      body: "Predchozi expanze byla silna v Evrope a Asii. Treti vlna proto zamerne pridava Afriku, Jižní Ameriku, Oceanii a dalsi cast Severni Ameriky, aby mapa nebyla eurocentricka."
    },
    {
      heading: "Jak se pracuje s citlivymi misty",
      body: "U pametnich mist, kolonialnich pevnosti, otroctvi, valek a posvatnych tradic je dulezite drzet odstup od senzace. MysteryMap zde pouziva tajemno jako vstupni motiv, ale oddeluje fakta, legendu a respekt."
    },
    {
      heading: "Dalsi etapa",
      body: "Dalsi etapa muze pridavat stat po statu, doplnovat fotky s licenci a rozdelovat velke regiony na presnejsi lokalni profily. Seedove profily uz vytvari URL a interní propojeni."
    }
  ],
  sources: ["wikidata", "wikipedia", "openstreetmap", "unesco-whc"]
};

const articlesById = new Map(articles.map((item) => [item.id, item]));
articlesById.set(article.id, article);
writeJson(articlesPath, Array.from(articlesById.values()));

console.log(`Upserted ${rawPlaces.length} third-wave places and 1 article.`);
