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
    paranormalniAktivita: "kulturni, prirodni nebo historicka tvrzeni",
    historickaDolozenost: "overitelna zakladni identita",
    nebezpecnost: item.risk || "overit lokalne",
    pristupnost: item.access || "overit pred cestou",
    atmosfera: item.atmosphere || 4.0,
    nocniVhodnost: Boolean(item.night),
    vhodneProDeti: item.kids !== false,
    popisy: {
      zahada: `${item.name} doplnuje dalsi cast svetove MysteryMap jako overitelne misto s GPS a silnym motivem: ${item.lead} Text je vlastni redakcni seed pripraveny k dalsimu prohloubeni.`,
      historie: "Historicka cast drzi zakladni identitu mista, geografii a dohledatelny kontext. Pri velkem objemu je hlavni mit stabilni URL, zdroje, souradnice a jasnou kategorizaci.",
      legenda: "Legendova vrstva ukazuje, proc misto zije v pameti: posvatna krajina, ztracene mesto, opustena osada, katastrofa, podivna geologie, filmovy obraz nebo lokalni folklor.",
      paranormalni: "Zahadova tvrzeni jsou uvedena jako kulturni vrstva, ne jako dokaz. Muze jit o zjeveni, svetla, prokleti, zmizeni, ritualni auru, zakazane zony nebo silny psychologicky efekt mista.",
      skepticke: "Skepticky ramec oddeluje zdroje, prirodni vysvetleni, archeologii, historii, optiku, media a turistickou interpretaci. To drzi katalog pouzitelny pro SEO, GEO i LLM vyhledavani."
    },
    praktickeInfo: `Pred navstevou ${item.name} over aktualni pristup, povoleni, mistni pravidla, ochranu pamatky a bezpecnost. GPS souradnice jsou orientacni.`,
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: `Wikipedia: ${item.name}`, url: `https://en.wikipedia.org/wiki/${encodeURIComponent(item.name.replaceAll(" ", "_"))}`, licence: "CC BY-SA / reference discovery" },
      { nazev: `Wikidata search: ${item.name}`, url: `https://www.wikidata.org/w/index.php?search=${encodeURIComponent(item.name)}`, licence: "CC0 / entity discovery" },
      { nazev: "OpenStreetMap search", url: `https://www.openstreetmap.org/search?query=${encodeURIComponent(`${item.name} ${item.country}`)}`, licence: "ODbL / map verification" }
    ],
    pribehy: [
      {
        nazev: "Proc je v sedme vlne",
        text: `${item.name} posiluje mene zastoupene regiony a motivy ${themes.join(", ")}. Dava webu dalsi samostatnou URL pro mapu, sitemap, vyhledavani a tematicke prolinkovani.`
      },
      {
        nazev: "Dalsi overeni",
        text: "Dalsi redakcni prace ma doplnit lokalni zdroje, fotografie s licenci, presne navstevnicke informace, puvodni nazvy a kvalitnejsi preklady."
      }
    ]
  };
}

const rawPlaces = [
  { name: "Choquequirao", country: "Peru", continent: "Jizni Amerika", lat: -13.3930, lon: -72.8730, score: 84, category: "ztracena-mesta", themes: ["ztracena-mesta", "mytologie"], lead: "Incke mesto vysoko v Andach, casto prirovnavane k Machu Picchu, ale mnohem odlehlejsi a tissi." },
  { name: "Kuelap", country: "Peru", continent: "Jizni Amerika", lat: -6.4170, lon: -77.9230, score: 81, category: "hrad", themes: ["ztracena-mesta", "mytologie"], lead: "Pevnost Chachapoya nad mraky, kamenne zdi a izolovana horska poloha vytvareji silny mytus." },
  { name: "Chan Chan", country: "Peru", continent: "Jizni Amerika", lat: -8.1110, lon: -79.0750, score: 80, category: "ztracena-mesta", themes: ["ztracena-mesta", "poust"], lead: "Obri hlinene mesto Chimú u pobřezi, kde se zanikla metropole pomalu rozpada v poustnim vzduchu." },
  { name: "Caral", country: "Peru", continent: "Jizni Amerika", lat: -10.8930, lon: -77.5200, score: 82, category: "ztracena-mesta", themes: ["ritual", "ztracena-mesta"], lead: "Jedno z nejstarsich mest Ameriky, kde pyramidy v poustnim udoli meni predstavu o pocatcich civilizace." },
  { name: "Marcahuasi", country: "Peru", continent: "Jizni Amerika", lat: -11.7600, lon: -76.5900, score: 82, category: "priroda", themes: ["konspirace", "prirodni-anomalie"], lead: "Andska plosina skalnich tvaru, casto spojovana s pareidolii, alternativnimi vyklady a nocni atmosferou." },
  { name: "Moray", country: "Peru", continent: "Jizni Amerika", lat: -13.3290, lon: -72.1950, score: 77, category: "legenda", themes: ["ritual", "prirodni-anomalie"], lead: "Kruhove incke terasy, kde zemedelsky experiment vypada jako krajinna geometricka zahada." },
  { name: "Ollantaytambo", country: "Peru", continent: "Jizni Amerika", lat: -13.2580, lon: -72.2640, score: 78, category: "hrad", themes: ["ztracena-mesta", "mytologie"], lead: "Incka pevnost a zive mesto, kde megaliticke bloky a horske steny zivi alternativni interpretace." },
  { name: "Pisac", country: "Peru", continent: "Jizni Amerika", lat: -13.4210, lon: -71.8500, score: 76, category: "legenda", themes: ["ritual", "ztracena-mesta"], lead: "Incky komplex nad Sacred Valley, kde terasy, hrobky a pevnost vytvareji vrstevnatou mapu." },
  { name: "Qenko", country: "Peru", continent: "Jizni Amerika", lat: -13.5080, lon: -71.9710, score: 76, category: "legenda", themes: ["ritual", "podzemi"], lead: "Ritualni skalni misto u Cuska, kde vytesane chodby a oltare pusobi jako maly labyrint." },
  { name: "Waqrapukara", country: "Peru", continent: "Jizni Amerika", lat: -14.0950, lon: -71.6830, score: 79, category: "hrad", themes: ["ztracena-mesta", "prirodni-anomalie"], lead: "Rohata pevnost nad kanonem Apurimac, dramaticka kombinace skaly, ruin a vysky." },
  { name: "Cerro Sechin", country: "Peru", continent: "Jizni Amerika", lat: -9.4660, lon: -78.2500, score: 81, category: "legenda", themes: ["vrazdy", "ritual"], lead: "Archeologicke misto s vyobrazenim roztrhanych tel, silny a neklidny obraz ritualniho nasili." },
  { name: "Chavin de Huantar", country: "Peru", continent: "Jizni Amerika", lat: -9.5940, lon: -77.1770, score: 83, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Chramovy labyrint chodeb, zvuku a obrazů, kde se ritualni prostor stava psychologickou technologii." },
  { name: "Paramonga Fortress", country: "Peru", continent: "Jizni Amerika", lat: -10.6750, lon: -77.8200, score: 74, category: "hrad", themes: ["ztracena-mesta", "mytologie"], lead: "Adobe pevnost na peruanskem pobrezi, kde zed a poust vytvareji opusteny strazni bod." },
  { name: "Puruchuco", country: "Peru", continent: "Jizni Amerika", lat: -12.0400, lon: -76.9350, score: 72, category: "ztracena-mesta", themes: ["umrti", "ztracena-mesta"], lead: "Incke spravni misto u Limy s pohrebni vrstvou, kde mesto prerostlo davnou krajinu." },
  { name: "El Brujo", country: "Peru", continent: "Jizni Amerika", lat: -7.9190, lon: -79.3070, score: 80, category: "legenda", themes: ["ritual", "umrti"], lead: "Moche komplex spojeny s Paní z Cao, kde moc, tetovani a pohrebni ritual tvori silny pribeh." },
  { name: "Huaca de la Luna", country: "Peru", continent: "Jizni Amerika", lat: -8.1350, lon: -78.9910, score: 80, category: "legenda", themes: ["ritual", "vrazdy"], lead: "Moche chram s barevnymi reliefy a obetni vrstvou, kde archeologie zachycuje temny ritual." },
  { name: "Ciudad Sagrada de Quilmes", country: "Argentina", continent: "Jizni Amerika", lat: -26.4660, lon: -66.0500, score: 77, category: "ztracena-mesta", themes: ["ztracena-mesta", "valka"], lead: "Ruiny mesta Quilmes v severozapadni Argentine, pamatka odporu a nuceneho presunu." },
  { name: "Talampaya", country: "Argentina", continent: "Jizni Amerika", lat: -29.8000, lon: -67.8500, score: 76, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Cervene kanony a skalni steny, kde eroze vytvari krajinu jako z jine planety." },
  { name: "Los Glaciares Perito Moreno", country: "Argentina", continent: "Jizni Amerika", lat: -50.4960, lon: -73.1370, score: 74, category: "priroda", themes: ["prirodni-anomalie", "katastrofa"], lead: "Ledovec Perito Moreno, kde praskani ledu a zive pohyby krajiny vytvareji dramatickou prirodni scenu." },
  { name: "Esteros del Ibera", country: "Argentina", continent: "Jizni Amerika", lat: -28.5000, lon: -57.0000, score: 72, category: "priroda", themes: ["oceany", "mytologie"], lead: "Mokrady plne vody a zvirat, kde plovouci krajina a mistni vypraveni tvori pomaly labyrint." },
  { name: "Moai Quarry Rano Raraku", country: "Chile", continent: "Jizni Amerika", lat: -27.1240, lon: -109.2890, score: 84, category: "legenda", themes: ["mytologie", "ztracena-mesta"], lead: "Lom soch moai na Rapa Nui, kde nedokoncene postavy zustaly jako zastavena vyroba obrazu predku." },
  { name: "Orongo", country: "Chile", continent: "Jizni Amerika", lat: -27.1860, lon: -109.4350, score: 82, category: "legenda", themes: ["ritual", "mytologie"], lead: "Ceremonialni vesnice kultu ptaciho muze, dramaticky ritualni bod na hrane krateru a oceanu." },
  { name: "Rano Kau", country: "Chile", continent: "Jizni Amerika", lat: -27.1860, lon: -109.4350, score: 79, category: "priroda", themes: ["sopky", "ritual"], lead: "Sopecny krater na Rapa Nui, kde prirodni tvar tvori scenu pro ritualni krajinu Oronga." },
  { name: "Sewell Mining Town", country: "Chile", continent: "Jizni Amerika", lat: -34.0830, lon: -70.3830, score: 76, category: "ztracena-mesta", themes: ["ztracena-mesta", "katastrofa"], lead: "Opustene hornicke mesto v Andach, schodiste a prumyslova pamet vysoko nad udolim." },
  { name: "Valparaiso Funiculars", country: "Chile", continent: "Jizni Amerika", lat: -33.0470, lon: -71.6120, score: 70, category: "legenda", themes: ["ztracena-mesta", "oceany"], lead: "Stare vytahy a kopce Valparaisa, mestska topografie s atmosferou labyrintu nad pristavem." },
  { name: "Cerro Rico", country: "Bolivie", continent: "Jizni Amerika", lat: -19.5880, lon: -65.7550, score: 85, category: "katastrofa", themes: ["umrti", "podzemi"], lead: "Hora stribra nad Potosi, kde bohatstvi, nucena prace a dulni podzemi vytvorily temnou svetovou pamet." },
  { name: "Valley of the Moon Bolivia", country: "Bolivie", continent: "Jizni Amerika", lat: -16.5670, lon: -68.0930, score: 74, category: "priroda", themes: ["prirodni-anomalie", "kosmicka-anomalie"], lead: "Erozni krajina u La Pazu, jejiz hlinene tvary pripominaji povrch jineho sveta." },
  { name: "Fort Samaipata", country: "Bolivie", continent: "Jizni Amerika", lat: -18.1790, lon: -63.8190, score: 79, category: "legenda", themes: ["ritual", "konspirace"], lead: "Skalni vytesany komplex El Fuerte, archeologicka i alternativne interpretovana zahada v Andach." },
  { name: "Madidi", country: "Bolivie", continent: "Jizni Amerika", lat: -14.0000, lon: -68.5000, score: 74, category: "priroda", themes: ["zmizeni", "mytologie"], lead: "Biodiverzitni amazonska krajina, kde odlehlost a prales podporuji pribehy o ztracenych trasach." },
  { name: "Noel Kempff Mercado National Park", country: "Bolivie", continent: "Jizni Amerika", lat: -14.2670, lon: -60.8670, score: 73, category: "priroda", themes: ["prirodni-anomalie", "ztracena-mesta"], lead: "Stolove hory, vodopady a prales na hranici Bolivie, krajina s motivem skryteho sveta." },
  { name: "Kaieteur Falls", country: "Guyana", continent: "Jizni Amerika", lat: 5.1750, lon: -59.4830, score: 78, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Izolovany vodopad s obrovskym skokem, kde prales a zvuk vody vytvareji prirodni monumentalitu." },
  { name: "Mount Roraima", country: "Venezuela", continent: "Jizni Amerika", lat: 5.1430, lon: -60.7620, score: 85, category: "priroda", themes: ["ztracena-mesta", "prirodni-anomalie"], lead: "Stolova hora tepui, klasicky obraz ztraceneho sveta, mlhy a izolovane evoluce." },
  { name: "Angel Falls", country: "Venezuela", continent: "Jizni Amerika", lat: 5.9675, lon: -62.5356, score: 78, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Nejvyssi vodopad sveta padajici z tepui, kde meritko meni krajinu v mytologicky obraz." },
  { name: "Canaima Lagoon", country: "Venezuela", continent: "Jizni Amerika", lat: 6.2410, lon: -62.8540, score: 74, category: "priroda", themes: ["oceany", "mytologie"], lead: "Laguny a vodopady v zemi tepui, krajina s opakujicim se motivem skrytych stolovych hor." },
  { name: "Sima Humboldt", country: "Venezuela", continent: "Jizni Amerika", lat: 5.6500, lon: -66.1500, score: 80, category: "podzemi", themes: ["podzemi", "prirodni-anomalie"], lead: "Obri propast na stolove hore Sarisarinama, izolovane vertikalni podzemi uprostred pralesa." },
  { name: "La Venta Cave", country: "Ekvador", continent: "Jizni Amerika", lat: -1.9000, lon: -77.9000, score: 76, category: "podzemi", themes: ["podzemi", "zmizeni"], lead: "Jeskynni oblast v amazonskem predhuri, dalsi podzemni uzel pro mapu jihoamerickych zahad." },
  { name: "El Infiernito", country: "Kolumbie", continent: "Jizni Amerika", lat: 5.6380, lon: -73.5500, score: 78, category: "legenda", themes: ["dabel", "kosmicka-anomalie"], lead: "Muisca archeologicke misto s kamennymi sloupy, prezdivane male peklo a spojovane s astronomii." },
  { name: "Ciudad Blanca Mosquitia", country: "Honduras", continent: "Severni Amerika", lat: 15.2000, lon: -84.7000, score: 84, category: "ztracena-mesta", themes: ["ztracena-mesta", "zmizeni"], lead: "Legendami opredena bila metropole v Mosquitii, moderni priklad touhy po ztracenem meste v dzungli." },
  { name: "Gran Cocle Sitio Conte", country: "Panama", continent: "Severni Amerika", lat: 8.4200, lon: -80.3200, score: 76, category: "legenda", themes: ["umrti", "poklad"], lead: "Archeologicke pohrebiste se zlatymi artefakty, kde bohatstvi a hroby vytvareji silny motiv." },
  { name: "Diquis Stone Spheres", country: "Kostarika", continent: "Severni Amerika", lat: 8.9000, lon: -83.4500, score: 82, category: "legenda", themes: ["prirodni-anomalie", "konspirace"], lead: "Kamene koule z delty Diquis, jejich presnost a nejasny ucel zivi archeologickou zahadu." },
  { name: "Ometepe Island", country: "Nikaragua", continent: "Severni Amerika", lat: 11.5000, lon: -85.5830, score: 77, category: "ostrov", themes: ["sopky", "mytologie"], lead: "Ostrov dvou sopek v jezeře Nicaragua, kde geologie a predkolumbovske petroglyfy tvori silnou krajinu." },
  { name: "Masaya Volcano", country: "Nikaragua", continent: "Severni Amerika", lat: 11.9840, lon: -86.1610, score: 81, category: "katastrofa", themes: ["sopky", "dabel"], lead: "Aktivni sopka prezdivana pekelna usta, klasicky priklad propojeni lavoveho jevu a nabozenskeho strachu." },
  { name: "Joya de Ceren", country: "Salvador", continent: "Severni Amerika", lat: 13.8280, lon: -89.3690, score: 80, category: "katastrofa", themes: ["sopky", "ztracena-mesta"], lead: "Vesnice zakonzervovana sopecnym popelem, stredoamericka obdoba Pompeji v mensim meritku." },
  { name: "Tazumal", country: "Salvador", continent: "Severni Amerika", lat: 13.9790, lon: -89.6730, score: 75, category: "ztracena-mesta", themes: ["mytologie", "ztracena-mesta"], lead: "Archeologicky komplex v Chalchuapě, dalsi uzel mayske a regionální pameti." },
  { name: "Cerro Negro", country: "Nikaragua", continent: "Severni Amerika", lat: 12.5060, lon: -86.7020, score: 76, category: "katastrofa", themes: ["sopky", "prirodni-anomalie"], lead: "Mlada cerna sopka, jejiz krajina vypada cerstve a neklidne i pri turistickem vyuziti." },
  { name: "Morne Trois Pitons", country: "Dominika", continent: "Severni Amerika", lat: 15.3200, lon: -61.3300, score: 77, category: "priroda", themes: ["sopky", "prirodni-anomalie"], lead: "Ostrovni vulkanicka krajina s varenymi jezery, fumarolami a tropickou verzi pekelne geologie." },
  { name: "Soufriere Hills", country: "Montserrat", continent: "Severni Amerika", lat: 16.7200, lon: -62.1800, score: 83, category: "katastrofa", themes: ["sopky", "ztracena-mesta"], lead: "Sopka, ktera zničila Plymouth a vytvorila moderni karibske mesto duchu." },
  { name: "La Soufriere Saint Vincent", country: "Svaty Vincenc", continent: "Severni Amerika", lat: 13.3300, lon: -61.1800, score: 78, category: "katastrofa", themes: ["sopky", "mytologie"], lead: "Aktivni sopka na ostrove, kde erupce a tropicka krajina drzi trvaly katastroficky potencial." },
  { name: "Blue Mountains Jamaica", country: "Jamajka", continent: "Severni Amerika", lat: 18.1000, lon: -76.6500, score: 72, category: "priroda", themes: ["mytologie", "ztracena-mesta"], lead: "Horska krajina Jamajky s mlhou, maroonskou historii a prirozenou atmosferou ukrytych tras." },
  { name: "Brimstone Hill Fortress", country: "Svaty Krystof a Nevis", continent: "Severni Amerika", lat: 17.3460, lon: -62.8370, score: 75, category: "hrad", themes: ["hrad", "valka"], lead: "Karibska pevnost na sopecnem kopci, kde kolonialni vojenska architektura dominuje oceanu." },
  { name: "Citadelle Laferriere", country: "Haiti", continent: "Severni Amerika", lat: 19.5730, lon: -72.2440, score: 82, category: "hrad", themes: ["hrad", "valka"], lead: "Obri horska pevnost Haiti, symbol obrany, revoluce a monumentalni stavby v tropicke krajine." },
  { name: "Sans-Souci Palace Haiti", country: "Haiti", continent: "Severni Amerika", lat: 19.6040, lon: -72.2180, score: 79, category: "ztracena-mesta", themes: ["ztracena-mesta", "katastrofa"], lead: "Ruiny paláce krale Henriho Christophe, kde zemetreseni a historie moci vytvorily karibskou ruinu." },
  { name: "El Yunque", country: "Portoriko", continent: "Severni Amerika", lat: 18.3000, lon: -65.7900, score: 74, category: "priroda", themes: ["mytologie", "prirodni-anomalie"], lead: "Horsky destny les Portorika s domorodou mytologii a mlznou tropickou atmosferou." },
  { name: "Arecibo Observatory", country: "Portoriko", continent: "Severni Amerika", lat: 18.3440, lon: -66.7520, score: 82, category: "katastrofa", themes: ["kosmicka-anomalie", "ufo"], lead: "Zricena radioteleskopicka ikona, kde veda, kosmos a kolaps konstrukce vytvorily moderni pamatnik." },
  { name: "Sacsayhuaman Rodadero", country: "Peru", continent: "Jizni Amerika", lat: -13.5080, lon: -71.9820, score: 76, category: "priroda", themes: ["prirodni-anomalie", "konspirace"], lead: "Hladke skalni skluzavky u Sacsayhuamanu, kde prirodni povrch a lidske upravy zivi sporne interpretace." },
  { name: "Puka Pukara", country: "Peru", continent: "Jizni Amerika", lat: -13.4820, lon: -71.9600, score: 72, category: "hrad", themes: ["hrad", "ztracena-mesta"], lead: "Incka cervena pevnost u Cuska, mensi, ale dulezity bod obrany a cestovni kontroly." },
  { name: "Tambomachay", country: "Peru", continent: "Jizni Amerika", lat: -13.4790, lon: -71.9630, score: 74, category: "legenda", themes: ["ritual", "prirodni-anomalie"], lead: "Vodní incke misto u Cuska, kde prameny a zdivo podporuji ritualni interpretace." },
  { name: "Tipon", country: "Peru", continent: "Jizni Amerika", lat: -13.5700, lon: -71.7900, score: 75, category: "legenda", themes: ["ritual", "prirodni-anomalie"], lead: "Incky vodni system a terasy, misto, kde technika vody vypada jako posvatna geometrie." },
  { name: "Koricancha", country: "Peru", continent: "Jizni Amerika", lat: -13.5200, lon: -71.9750, score: 78, category: "legenda", themes: ["ritual", "kosmicka-anomalie"], lead: "Slunecni chram v Cusku, kde incka sakralni geometrie zustava pod kolonialni vrstvou." },
  { name: "Vilcabamba Espiritu Pampa", country: "Peru", continent: "Jizni Amerika", lat: -12.9000, lon: -73.2000, score: 82, category: "ztracena-mesta", themes: ["ztracena-mesta", "zmizeni"], lead: "Posledni incke uzemi v dzungli, kde konec imperia mizi v tezko pristupne krajine." },
  { name: "Lake Titicaca Isla del Sol", country: "Bolivie", continent: "Jizni Amerika", lat: -16.0200, lon: -69.0700, score: 80, category: "ostrov", themes: ["mytologie", "ritual"], lead: "Ostrov slunce v jezeře Titicaca, mýtický pocatek inckeho pribehu v horske vodni krajině." },
  { name: "Isla de la Luna", country: "Bolivie", continent: "Jizni Amerika", lat: -16.0300, lon: -69.0700, score: 76, category: "ostrov", themes: ["mytologie", "ritual"], lead: "Ostrov mesice na Titicace, mensi, ale symbolicky doplnek slunecniho inckeho mytu." },
  { name: "Tiahuanaco Akapana", country: "Bolivie", continent: "Jizni Amerika", lat: -16.5540, lon: -68.6730, score: 80, category: "legenda", themes: ["konspirace", "ritual"], lead: "Pyramidalni platforma Akapana v Tiwanaku, kamenny uzel ritualu a alternativnich interpretaci." },
  { name: "Uros Floating Islands", country: "Peru", continent: "Jizni Amerika", lat: -15.8200, lon: -69.9700, score: 72, category: "ostrov", themes: ["oceany", "mytologie"], lead: "Plovouci rákosove ostrovy na Titicace, kde lidska krajina doslova lezi na vode." },
  { name: "Ahu Tongariki", country: "Chile", continent: "Jizni Amerika", lat: -27.1250, lon: -109.2760, score: 83, category: "legenda", themes: ["mytologie", "umrti"], lead: "Nejvetsi obnoveny ahu s radou moai, monumentalni rada predku na pobrezi Rapa Nui." },
  { name: "Anakena Beach", country: "Chile", continent: "Jizni Amerika", lat: -27.0730, lon: -109.3230, score: 74, category: "ostrov", themes: ["mytologie", "oceany"], lead: "Plaz na Rapa Nui spojovana s prichodem zakladatele, kde rajsky obraz nese mytickou vrstvu." },
  { name: "Cerro Tololo Observatory", country: "Chile", continent: "Jizni Amerika", lat: -30.1690, lon: -70.8060, score: 76, category: "priroda", themes: ["kosmicka-anomalie", "ufo"], lead: "Astronomicka observator v chilskych horach, kde poustni nebe prirozene patri do kosmicke mapy." },
  { name: "ALMA Observatory", country: "Chile", continent: "Jizni Amerika", lat: -23.0290, lon: -67.7550, score: 78, category: "priroda", themes: ["kosmicka-anomalie", "zakazane-zony"], lead: "Radioteleskopy na vysoke plosine Atacamy, moderni krajina hledani neviditelneho vesmiru." },
  { name: "Pampa del Tamarugal Geoglyphs", country: "Chile", continent: "Jizni Amerika", lat: -20.5000, lon: -69.6000, score: 77, category: "legenda", themes: ["kosmicka-anomalie", "ritual"], lead: "Geoglyfy v severnim Chile, kde poust, obchodni trasy a obrazce tvori mapu z vysky." },
  { name: "Quebrada de Humahuaca", country: "Argentina", continent: "Jizni Amerika", lat: -23.2000, lon: -65.3500, score: 73, category: "priroda", themes: ["mytologie", "ztracena-mesta"], lead: "Barevna andska soutezka s dlouhou kulturni trasou, prirodni koridor pameti a obchodu." },
  { name: "Cerro de los Siete Colores", country: "Argentina", continent: "Jizni Amerika", lat: -23.7460, lon: -65.4990, score: 72, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Sedmibarevny kopec u Purmamarcy, kde vrstvy hornin pusobi jako zjevna zemská kronika." },
  { name: "Nahuelito Lake Nahuel Huapi", country: "Argentina", continent: "Jizni Amerika", lat: -41.1000, lon: -71.4000, score: 77, category: "priroda", themes: ["mytologie", "oceany"], lead: "Jezero spojovane s argentinskou jezerni nestvurou Nahuelito, lokalni obdoba lochnesske legendy." },
  { name: "Cabo Polonio", country: "Uruguay", continent: "Jizni Amerika", lat: -34.4000, lon: -53.7800, score: 71, category: "ostrov", themes: ["oceany", "mytologie"], lead: "Odlehla pobrezni osada bez klasicke infrastruktury, kde majak, duny a more vytvari hraniční atmosferu." },
  { name: "Teyu Cuare", country: "Paraguay", continent: "Jizni Amerika", lat: -27.2800, lon: -56.0500, score: 75, category: "priroda", themes: ["tajne-spolecnosti", "valka"], lead: "Skalni oblast spojovana s legendami o ukrytech nacistech a izolovanych pevnostech u reky Parana." },
  { name: "Itaipu Dam", country: "Paraguay", continent: "Jizni Amerika", lat: -25.4080, lon: -54.5880, score: 70, category: "katastrofa", themes: ["prirodni-anomalie", "technologie"], lead: "Obri prehrada na Parane, technicky monument, ktery zmenil krajinu i predstavu lidske kontroly vody." },
  { name: "Jesuit Missions of La Santisima Trinidad", country: "Paraguay", continent: "Jizni Amerika", lat: -27.1300, lon: -55.7000, score: 75, category: "ztracena-mesta", themes: ["ritual", "ztracena-mesta"], lead: "Ruiny jezuitske misie, kde plan idealni komunity zustal jako kamenny a travnaty otisk." },
  { name: "Kaieteur Tepui Caves", country: "Guyana", continent: "Jizni Amerika", lat: 5.1800, lon: -59.4800, score: 74, category: "podzemi", themes: ["podzemi", "mytologie"], lead: "Jeskynni a stolova krajina kolem Kaieteuru, doplnek vodopadoveho mytu pralesni Guyany." },
  { name: "Stone Circles of Senegambia", country: "Gambie", continent: "Afrika", lat: 13.6910, lon: -15.5220, score: 80, category: "legenda", themes: ["umrti", "ritual"], lead: "Megaliticke kruhy Senegambie, rozsahla pohrebni krajina s opakovanym kamennym vzorcem." },
  { name: "Kunta Kinteh Island", country: "Gambie", continent: "Afrika", lat: 13.3170, lon: -16.3610, score: 82, category: "ostrov", themes: ["umrti", "valka"], lead: "Ostrovni pamet obchodu s lidmi, male misto s tezkou atlantickou historii." },
  { name: "Tichitt", country: "Mauritanie", continent: "Afrika", lat: 18.4500, lon: -9.5000, score: 76, category: "ztracena-mesta", themes: ["ztracena-mesta", "poust"], lead: "Oazove mesto v Mauritanii, kde kamenne domy a Sahara drzi pamet obchodnich tras." },
  { name: "Chinguetti", country: "Mauritanie", continent: "Afrika", lat: 20.4630, lon: -12.3620, score: 78, category: "ztracena-mesta", themes: ["tajne-spolecnosti", "poust"], lead: "Pouštni knihovni mesto, kde rukopisy a pisečne ulice vytvareji obraz krehke pameti." },
  { name: "Ksar Ouadane", country: "Mauritanie", continent: "Afrika", lat: 20.9300, lon: -11.6200, score: 75, category: "ztracena-mesta", themes: ["ztracena-mesta", "poust"], lead: "Stare karavanni mesto v pousti, kde ruiny a vitr pripominaji zanikly obchodni svet." },
  { name: "Tsingy de Bemaraha", country: "Madagaskar", continent: "Afrika", lat: -18.6670, lon: 44.7500, score: 82, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Vapencovy les ostrych skal, prirodni labyrint Madagaskaru vypadajici jako zakazana krajina." },
  { name: "Avenue of the Baobabs", country: "Madagaskar", continent: "Afrika", lat: -20.2500, lon: 44.4190, score: 74, category: "priroda", themes: ["mytologie", "prirodni-anomalie"], lead: "Alej obrich baobabu, kde stromy pusobi jako prehistoricke straze prázdne silnice." },
  { name: "Ambohimanga", country: "Madagaskar", continent: "Afrika", lat: -18.7590, lon: 47.5620, score: 77, category: "legenda", themes: ["ritual", "mytologie"], lead: "Kralovsky kopec Merina, posvatne misto moci, predku a madagaskarske identity." },
  { name: "Le Morne Brabant", country: "Mauricius", continent: "Afrika", lat: -20.4520, lon: 57.3170, score: 80, category: "priroda", themes: ["umrti", "valka"], lead: "Hora spojena s pribehem uprchlych otroku, kde krajina nese citlivou pamet svobody a tragedie." },
  { name: "Aldabra Atoll", country: "Seychely", continent: "Afrika", lat: -9.4200, lon: 46.3500, score: 76, category: "ostrov", themes: ["oceany", "prirodni-anomalie"], lead: "Odlehlý atol s obri biodiverzitou, prirodni svet skoro mimo beznou lidskou mapu." },
  { name: "Lamu Fort", country: "Kena", continent: "Afrika", lat: -2.2690, lon: 40.9020, score: 72, category: "hrad", themes: ["oceany", "hrad"], lead: "Pevnost v historickem Lamu, doplnek svahilske ostrovni mapy obchodu a moci." },
  { name: "Fort Jesus Mombasa", country: "Kena", continent: "Afrika", lat: -4.0620, lon: 39.6790, score: 78, category: "hrad", themes: ["valka", "oceany"], lead: "Portugalska pevnost v Mombase, kde Indicky ocean, obchod a oblehani vytvorily strategicky uzel." },
  { name: "Kondoa Rock Art", country: "Tanzanie", continent: "Afrika", lat: -4.7000, lon: 35.8500, score: 77, category: "priroda", themes: ["ritual", "mytologie"], lead: "Skalni malby v Tanzanii, dlouha obrazova pamet komunit a krajiny." },
  { name: "Laas Geel", country: "Somaliland", continent: "Afrika", lat: 9.7800, lon: 44.4600, score: 81, category: "priroda", themes: ["ritual", "mytologie"], lead: "Jeskynni malby se zviraty a postavami, jeden z nejsilnejsich obrazovych archivu Afriky." },
  { name: "Shibam", country: "Jemen", continent: "Asie", lat: 15.9210, lon: 48.6260, score: 79, category: "ztracena-mesta", themes: ["poust", "ztracena-mesta"], lead: "Hlinene vezove mesto v Hadramautu, prezdivane poustni Manhattan." },
  { name: "Marib Dam", country: "Jemen", continent: "Asie", lat: 15.4500, lon: 45.3300, score: 78, category: "katastrofa", themes: ["prirodni-anomalie", "ztracena-mesta"], lead: "Staroveka prehradni krajina Saby, kde technika vody a zanik kralovstvi vytvareji silny motiv." },
  { name: "Qalhat", country: "Oman", continent: "Asie", lat: 22.6950, lon: 59.3730, score: 76, category: "ztracena-mesta", themes: ["oceany", "ztracena-mesta"], lead: "Ruiny pristavniho mesta v Omanu, kde obchod Indického oceanu zustal v tichych zdech." },
  { name: "Bahla Fort", country: "Oman", continent: "Asie", lat: 22.9640, lon: 57.3000, score: 77, category: "hrad", themes: ["dabel", "hrad"], lead: "Hlinena pevnost v Omanu, spojovana s magickymi povestmi a obrannou krajinou oazy." },
  { name: "Jebel Shams", country: "Oman", continent: "Asie", lat: 23.2370, lon: 57.2640, score: 74, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Horska krajina a omanovsky Grand Canyon, kde hloubka a sucho vytvareji dramaticky prirodni profil." },
  { name: "Al Zubarah", country: "Katar", continent: "Asie", lat: 25.9780, lon: 51.0450, score: 75, category: "ztracena-mesta", themes: ["oceany", "ztracena-mesta"], lead: "Opevněne obchodni mesto perel, kde poust a more drzi pamet zanikle ekonomiky." },
  { name: "Qalat al-Bahrain", country: "Bahrajn", continent: "Asie", lat: 26.2330, lon: 50.5200, score: 76, category: "hrad", themes: ["mytologie", "ztracena-mesta"], lead: "Pevnost a tell Dilmunu, vrstvena pamet obchodu, opevneni a ostrovni identity." },
  { name: "Fujairah Fort", country: "Spojene arabske emiraty", continent: "Asie", lat: 25.1350, lon: 56.3390, score: 71, category: "hrad", themes: ["hrad", "poust"], lead: "Stara pevnost ve Fudzajre, kamenny uzel mezi horami, pousti a pobrezim." },
  { name: "Hili Archaeological Park", country: "Spojene arabske emiraty", continent: "Asie", lat: 24.2880, lon: 55.7900, score: 73, category: "legenda", themes: ["umrti", "ztracena-mesta"], lead: "Archeologicky park s hrobkami Umm an-Nar, staroveka vrstva pod moderni mapou Emiratu." },
  { name: "Sir Bani Yas Church", country: "Spojene arabske emiraty", continent: "Asie", lat: 24.3330, lon: 52.6000, score: 72, category: "ztracena-mesta", themes: ["ritual", "ztracena-mesta"], lead: "Raně krestanske ostrovni naleziste v Zálivu, tichy fragment prekvapive naboženske geografie." },
  { name: "Murujuga Rock Art", country: "Australie", continent: "Oceanie", lat: -20.6000, lon: 116.8000, score: 82, category: "priroda", themes: ["ritual", "mytologie"], lead: "Obrovska koncentrace skalniho umeni na Burrup Peninsula, citlive misto stare obrazove pameti." },
  { name: "Nourlangie Rock", country: "Australie", continent: "Oceanie", lat: -12.8610, lon: 132.8260, score: 77, category: "priroda", themes: ["ritual", "mytologie"], lead: "Skalni umeni v Kakadu, kde obraz, krajina a pribeh predku tvori jeden celek." },
  { name: "Ubirr", country: "Australie", continent: "Oceanie", lat: -12.4070, lon: 132.9570, score: 77, category: "priroda", themes: ["ritual", "mytologie"], lead: "Galerie skalniho umeni v Kakadu s vyhledem na zaplavove plane, ritualni i krajinny uzel." },
  { name: "Wave Rock", country: "Australie", continent: "Oceanie", lat: -32.4430, lon: 118.8970, score: 75, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Skalni vlna v Zapadni Australii, geologicky tvar pusobici jako zmrzly pohyb oceanu." },
  { name: "Wilpena Pound", country: "Australie", continent: "Oceanie", lat: -31.5260, lon: 138.6070, score: 75, category: "priroda", themes: ["mytologie", "prirodni-anomalie"], lead: "Obri prirodni amfiteatr ve Flinders Ranges, krajina s geologickou i domorodou pameti." },
  { name: "Mungo Man Site", country: "Australie", continent: "Oceanie", lat: -33.7500, lon: 143.0000, score: 81, category: "katastrofa", themes: ["umrti", "mytologie"], lead: "Misto nalezu Mungo Mana, velmi citlive archeologicke a kulturni misto hluboke lidske minulosti." },
  { name: "Tasmanian Devil's Kitchen", country: "Australie", continent: "Oceanie", lat: -43.0600, lon: 147.9500, score: 72, category: "priroda", themes: ["dabel", "oceany"], lead: "Pobrezni skalni utvar na Tasmanii, kde jmeno a eroze vytvareji pekelny morsky motiv." },
  { name: "Ball's Pyramid", country: "Australie", continent: "Oceanie", lat: -31.7540, lon: 159.2510, score: 78, category: "ostrov", themes: ["prirodni-anomalie", "oceany"], lead: "Osamely sopecny jehlan u Lord Howe Island, izolovany prirodni monument uprostred oceanu." },
  { name: "Nan Tien Temple", country: "Australie", continent: "Oceanie", lat: -34.4720, lon: 150.8470, score: 70, category: "legenda", themes: ["ritual", "mytologie"], lead: "Velky buddhisticky chram v Australii, moderni duchovni bod mimo tradicni asijskou mapu." },
  { name: "Aitutaki Lagoon", country: "Cookovy ostrovy", continent: "Oceanie", lat: -18.8500, lon: -159.7850, score: 72, category: "ostrov", themes: ["oceany", "mytologie"], lead: "Laguna ostrova Aitutaki, kde polyneska krajina a more vytvareji skoro mytickou izolaci." },
  { name: "Rarotonga Needle", country: "Cookovy ostrovy", continent: "Oceanie", lat: -21.2310, lon: -159.7760, score: 73, category: "priroda", themes: ["mytologie", "prirodni-anomalie"], lead: "Skalni jehla Te Rua Manga nad Rarotongou, prirodni dominanta s ostrovni aurou." },
  { name: "Ha'amonga a Maui", country: "Tonga", continent: "Oceanie", lat: -21.1390, lon: -175.0450, score: 78, category: "legenda", themes: ["mytologie", "ritual"], lead: "Megaliticka brana Tonga, casto spojovana s kralovskou moci, astronomii a mytem Mauiho." },
  { name: "Lapaha Royal Tombs", country: "Tonga", continent: "Oceanie", lat: -21.1800, lon: -175.1200, score: 74, category: "legenda", themes: ["umrti", "ritual"], lead: "Kralovske hrobky langi, kamenne stupne polyneske politicke a pohrebni pameti." },
  { name: "Nan Madol Pohnpei Reef", country: "Mikronesie", continent: "Oceanie", lat: 6.8430, lon: 158.3310, score: 82, category: "ostrov", themes: ["ztracena-mesta", "oceany"], lead: "Reefova krajina kolem Nan Madolu, kde mesto stoji na hranici vody, kamene a mytu." },
  { name: "Badrulchau Stone Monoliths", country: "Palau", continent: "Oceanie", lat: 7.7000, lon: 134.6200, score: 76, category: "legenda", themes: ["ritual", "mytologie"], lead: "Kamene monolity na Palau, jejich ucel a poloha zivi lokalni a archeologicke otazky." },
  { name: "Rock Islands Palau", country: "Palau", continent: "Oceanie", lat: 7.2500, lon: 134.3700, score: 74, category: "ostrov", themes: ["oceany", "prirodni-anomalie"], lead: "Vapencove ostrovy a laguny Palau, prirodni labyrint vody a zelenych skal." },
  { name: "Vanuatu Chief Roi Mata's Domain", country: "Vanuatu", continent: "Oceanie", lat: -17.7000, lon: 168.3000, score: 78, category: "legenda", themes: ["umrti", "ritual"], lead: "Krajina spojena s nacelnikem Roi Matou, pohrebni a ustni tradice v tichomorskem prostoru." },
  { name: "Mount Yasur", country: "Vanuatu", continent: "Oceanie", lat: -19.5320, lon: 169.4420, score: 82, category: "katastrofa", themes: ["sopky", "dabel"], lead: "Pristupna aktivni sopka na Tanně, kde nocni erupce vypadaji jako prirodni brana do ohne." },
  { name: "Ambrym Volcano", country: "Vanuatu", continent: "Oceanie", lat: -16.2500, lon: 168.1200, score: 81, category: "katastrofa", themes: ["sopky", "ritual"], lead: "Sopecny ostrov s kalderou a kulturni tradici, kde geologie a ritual sdileji stejny prostor." },
  { name: "Rennell East", country: "Salomounovy ostrovy", continent: "Oceanie", lat: -11.6500, lon: 160.3000, score: 74, category: "ostrov", themes: ["oceany", "prirodni-anomalie"], lead: "Izolovany koralovy ostrov s velkym jezerem, prirodni svet na okraji mapy." },
  { name: "Kuk Early Agricultural Site", country: "Papua-Nova Guinea", continent: "Oceanie", lat: -5.7830, lon: 144.3300, score: 76, category: "priroda", themes: ["ztracena-mesta", "ritual"], lead: "Doklad velmi stareho zemedelstvi v horach PNG, krajina, kde pocatky obdelavani zeme zustaly v terenu." },
  { name: "Rabaul Caldera", country: "Papua-Nova Guinea", continent: "Oceanie", lat: -4.2710, lon: 152.2030, score: 81, category: "katastrofa", themes: ["sopky", "ztracena-mesta"], lead: "Sopecna kaldera a mesto opakovane zasazene erupcemi, pacificka krajina katastrofy." },
  { name: "Bikini Atoll", country: "Marshallovy ostrovy", continent: "Oceanie", lat: 11.6000, lon: 165.4000, score: 86, category: "katastrofa", themes: ["zakazane-zony", "kosmicka-anomalie"], lead: "Atol jadernych testu, kde rajska laguna nese moderni radioaktivni a politickou pamet." },
  { name: "Enewetak Atoll", country: "Marshallovy ostrovy", continent: "Oceanie", lat: 11.5000, lon: 162.3330, score: 84, category: "katastrofa", themes: ["zakazane-zony", "katastrofa"], lead: "Atol jadernych testu a betonove kopule odpadu, moderni katastroficka krajina oceanu." }
];

const places = readJson(placesPath);
const byId = new Map(places.map((place) => [place.id, place]));
rawPlaces.map(profile).forEach((place) => byId.set(place.id, place));
writeJson(placesPath, Array.from(byId.values()));

const articles = readJson(articlesPath);
const article = {
  id: "sedma-vlna-jizni-amerika-oceanie-afrika",
  slug: "sedma-vlna-jizni-amerika-oceanie-afrika",
  localizedSlugs: {
    cs: "sedma-vlna-jizni-amerika-oceanie-afrika",
    en: "seventh-wave-south-america-oceania-africa",
    de: "siebte-welle-suedamerika-ozeanien-afrika",
    es: "septima-ola-sudamerica-oceania-africa",
    fr: "septieme-vague-amerique-du-sud-oceanie-afrique"
  },
  title: "Sedma vlna: Jizni Amerika, Oceanie a Afrika",
  description: "Sedma vlna vyrovnava mapu o andska ztracena mesta, tichomorske ostrovy, africka posvatna a poustni mista, sopky a katastroficke atoly.",
  category: "legenda",
  themes: ["ztracena-mesta", "oceany", "sopky", "ritual"],
  relatedPlaceIds: rawPlaces.slice(0, 30).map((item) => slugify(item.name)),
  sections: [
    {
      heading: "Proc tahle vlna vyrovnava katalog",
      body: "Evropa a Asie uz maji silne zastoupeni, proto sedma vlna prida Jizni Ameriku, Oceanii a Afriku. Diky tomu mapa lepe pokryva svet a neni jen soubor evropskych hradů."
    },
    {
      heading: "Jak se drzi kvalita pri objemu",
      body: "Kazde misto ma GPS, zdrojovou stopu, kategorii, temata a stranku ve vsech jazykovych cestach. Seed neni finalni clanek, ale je validni zaklad pro sitemap a dalsi redakci."
    },
    {
      heading: "Dalsi smer",
      body: "Dalsi davky muzou jit po statech a typech: andska archeologie, pacificke ostrovy, africke pamatky, jaderne zony, sopky, podzemi a filmove lokace."
    }
  ],
  sources: ["wikidata", "wikipedia", "openstreetmap", "unesco-whc"]
};

const articlesById = new Map(articles.map((item) => [item.id, item]));
articlesById.set(article.id, article);
writeJson(articlesPath, Array.from(articlesById.values()));

console.log(`Upserted ${rawPlaces.length} seventh-wave places and 1 article.`);
