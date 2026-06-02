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
    paranormalniAktivita: "kulturni, medialni nebo historicka tvrzeni",
    historickaDolozenost: "overitelna zakladni identita",
    nebezpecnost: item.risk || "overit lokalne",
    pristupnost: item.access || "overit pred cestou",
    atmosfera: item.atmosphere || 4.0,
    nocniVhodnost: Boolean(item.night),
    vhodneProDeti: item.kids !== false,
    popisy: {
      zahada: `${item.name} rozsiruje MysteryMap jako dalsi overitelny bod s GPS, tematem a vlastnim redakcnim seedem: ${item.lead}`,
      historie: "Historicka vrstva popisuje zakladni identitu mista a slouzi jako podklad pro pozdejsi lokalni overeni. Profil ma stabilni URL, zdroje a strukturu pro dalsi praci.",
      legenda: "Legendova vrstva ukazuje, proc se misto dostava do mapy: filmova pamet, podzemi, zanikle mesto, ritual, katastrofa, okultni vyklad nebo prirodni anomalie.",
      paranormalni: "Zahadova tvrzeni jsou uvedena jako folklor, svedectvi, popkulturni asociace nebo medialni vrstva. Nejsou michana s overenou historii a praktickymi informacemi.",
      skepticke: "Skepticky ramec hleda prirodni, historicka, psychologicka, politicka a medialni vysvetleni. To udrzuje obsah pouzitelny pro ctenare i vyhledavace."
    },
    praktickeInfo: `Pred navstevou ${item.name} over aktualni pristup, povoleni, bezpecnost, mistni pravidla a ochranu pamatky. GPS je orientacni.`,
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: `Wikipedia: ${item.name}`, url: `https://en.wikipedia.org/wiki/${encodeURIComponent(item.name.replaceAll(" ", "_"))}`, licence: "CC BY-SA / reference discovery" },
      { nazev: `Wikidata search: ${item.name}`, url: `https://www.wikidata.org/w/index.php?search=${encodeURIComponent(item.name)}`, licence: "CC0 / entity discovery" },
      { nazev: "OpenStreetMap search", url: `https://www.openstreetmap.org/search?query=${encodeURIComponent(`${item.name} ${item.country}`)}`, licence: "ODbL / map verification" }
    ],
    pribehy: [
      { nazev: "Duvod zarazeni", text: `${item.name} pridava motivy ${themes.join(", ")} a vytvari dalsi samostatnou vstupni stranku pro mapu, sitemap, hledani a tematicke prolinkovani.` },
      { nazev: "Dalsi prace", text: "Seed je pripraveny na lokalni zdroje, licencovane fotografie, puvodni nazvy, presnejsi navstevnicka pravidla a kvalitni preklady do vsech jazykovych verzi." }
    ]
  };
}

const rawPlaces = [
  { name: "Cinecitta Studios", country: "Italie", continent: "Evropa", lat: 41.8500, lon: 12.5740, score: 74, category: "filmova-lokace", themes: ["film", "popkultura"], lead: "Rimske filmove studio, kde vznikala cast evropske i svetove filmove mytologie." },
  { name: "Matera Film Caves", country: "Italie", continent: "Evropa", lat: 40.6660, lon: 16.6040, score: 78, category: "filmova-lokace", themes: ["film", "podzemi"], lead: "Skalni mesto Matera jako opakovana filmova kulisa biblickych, historickych i akcnich pribehu." },
  { name: "Ouarzazate Atlas Studios", country: "Maroko", continent: "Afrika", lat: 30.9200, lon: -6.9100, score: 79, category: "filmova-lokace", themes: ["film", "poust"], lead: "Pouštní filmovy uzel u Ouarzazate, kde se Afrika a Blizky vychod opakovane meni ve filmove svety." },
  { name: "Wadi Musa Film Gateway", country: "Jordansko", continent: "Asie", lat: 30.3210, lon: 35.4800, score: 76, category: "filmova-lokace", themes: ["film", "mytologie"], lead: "Brana k Petre a filmovemu obrazu dobrodruzstvi, kde turisticka cesta navazuje na slavne sceny." },
  { name: "Tatooine Star Wars Sets", country: "Tunisko", continent: "Afrika", lat: 33.9000, lon: 10.1000, score: 82, category: "filmova-lokace", themes: ["film", "poust"], lead: "Tuniska poustni mista spojena s planetou Tatooine a jednou z nejsilnejsich sci-fi krajin." },
  { name: "Mos Espa Set", country: "Tunisko", continent: "Afrika", lat: 33.9940, lon: 7.8420, score: 80, category: "filmova-lokace", themes: ["film", "ztracena-mesta"], lead: "Dochovana filmova osada v tuniske pousti, kde se kulisa sama stala opustenym poutnim mistem fanousku." },
  { name: "Vasquez Rocks", country: "Spojene staty", continent: "Severni Amerika", lat: 34.4880, lon: -118.3160, score: 76, category: "filmova-lokace", themes: ["film", "prirodni-anomalie"], lead: "Skalni formace v Kalifornii slavna jako filmova a televizni krajina mimozemskych planet." },
  { name: "Monument Valley Film View", country: "Spojene staty", continent: "Severni Amerika", lat: 36.9980, lon: -110.0980, score: 79, category: "filmova-lokace", themes: ["film", "mytologie"], lead: "Krajina westernu a monumentalnich skal, kde film vytvoril globalni predstavu americkeho Zapadu." },
  { name: "Dead Horse Point", country: "Spojene staty", continent: "Severni Amerika", lat: 38.4700, lon: -109.7400, score: 74, category: "filmova-lokace", themes: ["film", "prirodni-anomalie"], lead: "Vyhlidka v Utahu znama i z filmu, kde propasti a poust vytvareji dramaticky konec sveta." },
  { name: "Redwood National Park Film Forest", country: "Spojene staty", continent: "Severni Amerika", lat: 41.2130, lon: -124.0040, score: 75, category: "filmova-lokace", themes: ["film", "mytologie"], lead: "Les obrich sekvoji, ktery ve filmu casto nahrazuje praveke, mimozemske nebo mytologicke prostredi." },
  { name: "Mordor Tongariro", country: "Novy Zeland", continent: "Oceanie", lat: -39.1570, lon: 175.6320, score: 82, category: "filmova-lokace", themes: ["film", "sopky"], lead: "Sopecna krajina Tongariro proslavena filmovym obrazem Mordoru a temne fantazie." },
  { name: "Mount Sunday Edoras", country: "Novy Zeland", continent: "Oceanie", lat: -43.5700, lon: 170.9000, score: 80, category: "filmova-lokace", themes: ["film", "mytologie"], lead: "Vetrny kopec v Canterbury spojeny s filmovym Edorasem, kde prazdna krajina nese epicky pribeh." },
  { name: "Milford Sound Film Fjord", country: "Novy Zeland", continent: "Oceanie", lat: -44.6410, lon: 167.8970, score: 76, category: "filmova-lokace", themes: ["film", "oceany"], lead: "Fjordova krajina, ktera se ve filmu snadno meni v mýtický konec sveta." },
  { name: "Puzzlewood Fantasy Forest", country: "Spojene kralovstvi", continent: "Evropa", lat: 51.7890, lon: -2.6090, score: 76, category: "filmova-lokace", themes: ["film", "mytologie"], lead: "Lesni labyrint kořenu a skal, oblibena fantasy inspirace i skutecna krajina bloudeni." },
  { name: "Hatfield House Film Rooms", country: "Spojene kralovstvi", continent: "Evropa", lat: 51.7600, lon: -0.2100, score: 72, category: "filmova-lokace", themes: ["film", "hrad"], lead: "Historicky dum casto vyuzivany pro filmove interiery moci, aristokracie a temnych palacu." },
  { name: "Alnwick Castle Film Grounds", country: "Spojene kralovstvi", continent: "Evropa", lat: 55.4156, lon: -1.7064, score: 78, category: "filmova-lokace", themes: ["film", "hrad"], lead: "Hrad znamy z filmove magie i realne historie, kde popkultura posilila stredovekou identitu." },
  { name: "Lacock Abbey Film Cloisters", country: "Spojene kralovstvi", continent: "Evropa", lat: 51.4140, lon: -2.1160, score: 75, category: "filmova-lokace", themes: ["film", "ritual"], lead: "Klaster a chodby spojene s filmovou skolou magie i dlouhou naboženskou historii." },
  { name: "Oxford Christ Church Film Hall", country: "Spojene kralovstvi", continent: "Evropa", lat: 51.7500, lon: -1.2550, score: 74, category: "filmova-lokace", themes: ["film", "ritual"], lead: "Univerzitni interiery a saly, ktere se staly soucasti globalni filmove predstavy kouzelnicke skoly." },
  { name: "Rosslyn Chapel", country: "Spojene kralovstvi", continent: "Evropa", lat: 55.8550, lon: -3.1600, score: 84, category: "legenda", themes: ["templari", "tajne-spolecnosti"], lead: "Kaple ve Skotsku spojovana s templarskymi a symbolickymi interpretacemi i popkulturnim mytem." },
  { name: "Sintra Quinta da Regaleira", country: "Portugalsko", continent: "Evropa", lat: 38.7960, lon: -9.3970, score: 85, category: "legenda", themes: ["tajne-spolecnosti", "podzemi"], lead: "Palacovy areal se zasvecovaci studnou, symboly a podzemnim systemem, idealni pro esoterickou mapu." },
  { name: "Pena Palace Sintra", country: "Portugalsko", continent: "Evropa", lat: 38.7870, lon: -9.3900, score: 75, category: "hrad", themes: ["hrad", "mytologie"], lead: "Romanticky palac nad Sintrou, kde barvy a mlha vytvareji pohadkovou, skoro neskutecnou siluetu." },
  { name: "Almourol Castle", country: "Portugalsko", continent: "Evropa", lat: 39.4620, lon: -8.3830, score: 78, category: "hrad", themes: ["templari", "ostrov"], lead: "Templarsky hrad na ostrove v Teju, spojeni vody, radu a stredoveke straze." },
  { name: "Tomar Convent of Christ", country: "Portugalsko", continent: "Evropa", lat: 39.6040, lon: -8.4180, score: 82, category: "legenda", themes: ["templari", "tajne-spolecnosti"], lead: "Centrum templarske a Kristovy rady v Portugalsku, silny historicky uzel radu a symbolu." },
  { name: "Evora Chapel of Bones", country: "Portugalsko", continent: "Evropa", lat: 38.5710, lon: -7.9080, score: 81, category: "podzemi", themes: ["umrti", "ritual"], lead: "Kaple kosti v Evoře, kde smrt neni skryta, ale primo vystavena jako moralni architektura." },
  { name: "Batalha Monastery", country: "Portugalsko", continent: "Evropa", lat: 39.6590, lon: -8.8250, score: 74, category: "legenda", themes: ["ritual", "umrti"], lead: "Klaster a kralovske hrobky, kde nedokoncene kaple posiluji motiv otevrene pameti." },
  { name: "Montserrat Monastery Spain", country: "Spanelsko", continent: "Evropa", lat: 41.5930, lon: 1.8370, score: 79, category: "priroda", themes: ["ritual", "mytologie"], lead: "Klaster v neobvyklych skalach nad Katalanskem, posvatny bod s prirodni monumentalitou." },
  { name: "San Juan de la Pena", country: "Spanelsko", continent: "Evropa", lat: 42.5080, lon: -0.6670, score: 77, category: "podzemi", themes: ["ritual", "mytologie"], lead: "Klaster pod skalnim previsem, kde architektura doslova zaleha pod horu." },
  { name: "Cuenca Hanging Houses", country: "Spanelsko", continent: "Evropa", lat: 40.0780, lon: -2.1310, score: 72, category: "legenda", themes: ["prirodni-anomalie", "ztracena-mesta"], lead: "Domy na hrane rokli, mestska krajina, kde architektura vypada jako vzdor gravitaci." },
  { name: "Belchite Ruins", country: "Spanelsko", continent: "Evropa", lat: 41.3050, lon: -0.7550, score: 82, category: "katastrofa", themes: ["valka", "duchove"], lead: "Ruiny mesta zniceneho behem spanelske obcanske valky, silna a ticha valecna pamet." },
  { name: "Ochate Ghost Village", country: "Spanelsko", continent: "Evropa", lat: 42.7100, lon: -2.8300, score: 80, category: "legenda", themes: ["duchove", "ufo"], lead: "Opustena vesnice v Baskicku spojovana s ducharskymi i UFO pribehem." },
  { name: "Zugarramurdi Caves", country: "Spanelsko", continent: "Evropa", lat: 43.2670, lon: -1.5410, score: 81, category: "podzemi", themes: ["carodejnictvi", "ritual"], lead: "Jeskyně spojovane s baskickymi carodejnickymi procesy a folklorem akelarre." },
  { name: "Dolmens of Antequera", country: "Spanelsko", continent: "Evropa", lat: 37.0240, lon: -4.5480, score: 80, category: "podzemi", themes: ["ritual", "kosmicka-anomalie"], lead: "Megaliticke hrobky v Andalusii, kde orientace a skala vytvareji silny praveky system." },
  { name: "Mina de Sao Domingos", country: "Portugalsko", continent: "Evropa", lat: 37.6720, lon: -7.5000, score: 76, category: "katastrofa", themes: ["ztracena-mesta", "katastrofa"], lead: "Opustene dulni mesto a kysela krajina, kde tezba zanechala barevnou ekologickou jizvu." },
  { name: "Hashima Film Island", country: "Japonsko", continent: "Asie", lat: 32.6278, lon: 129.7381, score: 82, category: "filmova-lokace", themes: ["film", "ztracena-mesta"], lead: "Rozsirujici filmovy profil Hashimy jako industriálního ostrova a temne popkulturni kulisy." },
  { name: "Horyu-ji", country: "Japonsko", continent: "Asie", lat: 34.6140, lon: 135.7350, score: 76, category: "legenda", themes: ["ritual", "mytologie"], lead: "Jeden z nejstarsich drevenych chramovych komplexu sveta, kde material a vira vzdoruji casu." },
  { name: "Nikko Toshogu", country: "Japonsko", continent: "Asie", lat: 36.7580, lon: 139.5990, score: 78, category: "legenda", themes: ["ritual", "umrti"], lead: "Okazala svatyne Tokugawy Ieyasu, kde politika, pohrebni kult a symbolika vytvareji husty vizualni svet." },
  { name: "Gunkanjima Sea Walls", country: "Japonsko", continent: "Asie", lat: 32.6278, lon: 129.7381, score: 79, category: "ostrov", themes: ["oceany", "ztracena-mesta"], lead: "Morske zdi Hashimy jako samostatny motiv ostrova-lode a opustene prumyslove pevnosti." },
  { name: "Sado Gold Mine", country: "Japonsko", continent: "Asie", lat: 38.0400, lon: 138.2500, score: 76, category: "podzemi", themes: ["podzemi", "umrti"], lead: "Dulni krajina ostrova Sado, kde zlato, nucena prace a podzemi vytvareji slozitou pamet." },
  { name: "Iwami Ginzan Silver Mine", country: "Japonsko", continent: "Asie", lat: 35.1080, lon: 132.4380, score: 76, category: "podzemi", themes: ["podzemi", "ztracena-mesta"], lead: "Historicke stribrne doly a cesty, kde globalni obchod zanechal tiche podzemni stopy." },
  { name: "Mount Aso Caldera", country: "Japonsko", continent: "Asie", lat: 32.8840, lon: 131.1040, score: 80, category: "katastrofa", themes: ["sopky", "prirodni-anomalie"], lead: "Obri sopecna kaldera na Kjusú, kde mereni krajiny presahuje bezny lidsky rozmer." },
  { name: "Sakurajima", country: "Japonsko", continent: "Asie", lat: 31.5850, lon: 130.6570, score: 80, category: "katastrofa", themes: ["sopky", "katastrofa"], lead: "Aktivni sopka u Kagoshimy, neustala pritomnost popela a rizika ve meste." },
  { name: "Aogashima", country: "Japonsko", continent: "Asie", lat: 32.4580, lon: 139.7600, score: 79, category: "ostrov", themes: ["sopky", "oceany"], lead: "Ostrov uvnitr sopecne kaldery v Pacifiku, izolovana geologicka mapa v mape." },
  { name: "Gates of Hell Beppu", country: "Japonsko", continent: "Asie", lat: 33.3160, lon: 131.4740, score: 77, category: "priroda", themes: ["dabel", "prirodni-anomalie"], lead: "Geotermalni pekla v Beppu, turisticky citelny priklad barevne a varici zeme." },
  { name: "Seikan Tunnel", country: "Japonsko", continent: "Asie", lat: 41.2550, lon: 140.3500, score: 72, category: "podzemi", themes: ["podzemi", "technologie"], lead: "Podmorsky tunel mezi Honshu a Hokkaidem, moderni inzenyrske podzemi pod morem." },
  { name: "Kola Superdeep Borehole", country: "Rusko", continent: "Evropa", lat: 69.3960, lon: 30.6080, score: 84, category: "podzemi", themes: ["podzemi", "dabel"], lead: "Nejhlubsi vrt sve doby, zdroj modernich legend o zvucich z pekla a skutecne vedecke hranice." },
  { name: "Chernobyl Duga Radar", country: "Ukrajina", continent: "Evropa", lat: 51.3050, lon: 30.0660, score: 84, category: "zakazane-zony", themes: ["zakazane-zony", "valka"], lead: "Obri radar v Cernobylske zone, studenovalecna konstrukce s mimozemskou siluetou." },
  { name: "Buzludzha Interior", country: "Bulharsko", continent: "Evropa", lat: 42.7358, lon: 25.3936, score: 79, category: "ztracena-mesta", themes: ["ztracena-mesta", "politika"], lead: "Vnitrni mozaikovy svet opusteneho monumentu, samostatny motiv rozpadu ideologie." },
  { name: "Petrova Gora Monument", country: "Chorvatsko", continent: "Evropa", lat: 45.2700, lon: 15.8000, score: 78, category: "ztracena-mesta", themes: ["valka", "politika"], lead: "Futuristicky pamatnik partyzanu, dnes poskozeny a opusteny jako kovova ruina pameti." },
  { name: "Spomenik Tjentiste", country: "Bosna a Hercegovina", continent: "Evropa", lat: 43.3500, lon: 18.6900, score: 77, category: "ztracena-mesta", themes: ["valka", "politika"], lead: "Monument v Tjentisti, betonova forma valecne pameti zasazena do horske krajiny." },
  { name: "Kosmaj Monument", country: "Srbsko", continent: "Evropa", lat: 44.4550, lon: 20.5600, score: 76, category: "ztracena-mesta", themes: ["valka", "politika"], lead: "Abstraktni spomenik na Kosmaji, kde socialisticka pamet ziskala skoro sci-fi podobu." },
  { name: "Kadinjača Memorial", country: "Srbsko", continent: "Evropa", lat: 43.8600, lon: 19.7600, score: 75, category: "ztracena-mesta", themes: ["valka", "politika"], lead: "Jugoslavsky pamatnik s dramatickou betonovou krajinou odporu a obeti." },
  { name: "Ilinden Makedonium", country: "Severni Makedonie", continent: "Evropa", lat: 41.3660, lon: 21.2490, score: 77, category: "ztracena-mesta", themes: ["politika", "mytologie"], lead: "Makedonsky futuristicky pamatnik, kde narodní mytus dostal podivnou organickou architekturu." },
  { name: "UFO Monument Shumen", country: "Bulharsko", continent: "Evropa", lat: 43.2700, lon: 26.9300, score: 74, category: "legenda", themes: ["ufo", "politika"], lead: "Monument u Šumenu, jehoz brutalistni forma casto pusobi jako opustena kosmicka stavba." }
];

const places = readJson(placesPath);
const byId = new Map(places.map((place) => [place.id, place]));
rawPlaces.map(profile).forEach((place) => byId.set(place.id, place));
writeJson(placesPath, Array.from(byId.values()));

const articles = readJson(articlesPath);
const article = {
  id: "devata-vlna-film-podzemi-symboly",
  slug: "devata-vlna-film-podzemi-symboly",
  localizedSlugs: {
    cs: "devata-vlna-film-podzemi-symboly",
    en: "ninth-wave-film-underground-symbols",
    de: "neunte-welle-film-untergrund-symbole",
    es: "novena-ola-cine-subterraneo-simbolos",
    fr: "neuvieme-vague-film-souterrains-symboles"
  },
  title: "Devata vlna: filmove lokace, podzemi a symbolicka mista",
  description: "Devata vlna pridava filmove krajiny, kaple, podzemi, monumenty, ztracena mista a dalsi lokace, ktere dobre posiluji tematicke landing pages.",
  category: "filmova-lokace",
  themes: ["film", "podzemi", "tajne-spolecnosti", "ztracena-mesta"],
  relatedPlaceIds: rawPlaces.slice(0, 30).map((item) => slugify(item.name)),
  sections: [
    {
      heading: "Proc film a symboly",
      body: "Filmove a symbolicke lokace lide aktivne hledaji, proto patri do mapy vedle klasickych zahad. Text ale nesmi kopirovat filmove snimky ani cizi databaze; musi stavet vlastni popis a odkazy."
    },
    {
      heading: "Podzemi a monumenty",
      body: "Podzemni a brutalistni mista maji silnou vizualni identitu. V katalogu pomahaji vytvorit tematicke trasy pro katakomby, studenou valku, okultni symboliku i opustene stavby."
    },
    {
      heading: "Dalsi krok",
      body: "U filmovych mist je potreba doplnit fotky jen tam, kde je jasna licence. U symbolickych a kontroverznich mist je priorita presnost, skepticky ramec a nesenzacni ton."
    }
  ],
  sources: ["wikidata", "wikipedia", "openstreetmap", "wikimedia-commons"]
};

const articlesById = new Map(articles.map((item) => [item.id, item]));
articlesById.set(article.id, article);
writeJson(articlesPath, Array.from(articlesById.values()));

console.log(`Upserted ${rawPlaces.length} ninth-wave places and 1 article.`);
