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

function row(line) {
  const [name, country, continent, lat, lon, score, category, themes, lead] = line.split("|");
  return {
    name,
    country,
    continent,
    lat: Number(lat),
    lon: Number(lon),
    score: Number(score),
    category,
    themes: themes.split(","),
    lead
  };
}

function profile(item) {
  const id = slugify(item.name);
  const themes = item.themes || ["legenda", "prirodni-anomalie"];
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
    kategorie: Array.from(new Set([item.category || "legenda"])),
    temata: themes,
    indexTajemna: item.score || 76,
    paranormalniAktivita: "kulturni, prirodni nebo historicka tvrzeni",
    historickaDolozenost: "overitelna zakladni identita",
    nebezpecnost: item.themes?.includes("nebezpeci") ? "overit lokalne, misty zvysene riziko" : "overit lokalne",
    pristupnost: "overit pred cestou",
    atmosfera: 4.1,
    nocniVhodnost: item.themes?.includes("duchove") || item.themes?.includes("ufo"),
    vhodneProDeti: !(item.themes?.includes("nebezpeci") || item.themes?.includes("umrti")),
    popisy: {
      zahada: `${item.name} rozsiruje petadvacatou vlnu MysteryMap jako mapovy bod s jasnou polohou a motivem: ${item.lead}`,
      historie: "Historicka vrstva popisuje zakladni identitu mista, kontinent, stat, GPS a tematicke zarazeni. Profil je seed pro dalsi lokalni zdroje a presnejsi navstevnicke informace.",
      legenda: "Legendova vrstva vysvetluje, proc se misto dostava do mapy: muze jit o ruinu, poutni trasu, prirodni anomalni tvar, podzemi, opustenou infrastrukturu nebo ritualni krajinu.",
      paranormalni: "Zahadova tvrzeni jsou uvedena jako folklor, cestovatelska tradice, medialni asociace nebo lokalni vypraveni. Nejsou zamichana do overitelne historie.",
      skepticke: "Skepticky ramec prednostne hleda geologicke, archeologicke, klimaticke, historicke a medialni vysvetleni. Profil tak muze zustat zajimavy bez prehnanych tvrzeni."
    },
    praktickeInfo: `Pred navstevou ${item.name} over aktualni pristup, mistni pravidla, povoleni, dopravu a ochranu lokality. GPS je orientacni a u odlehlych mist vyzaduje lokalni overeni.`,
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: `Wikipedia search: ${item.name}`, url: `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(item.name)}`, licence: "CC BY-SA / reference discovery" },
      { nazev: `Wikidata search: ${item.name}`, url: `https://www.wikidata.org/w/index.php?search=${encodeURIComponent(item.name)}`, licence: "CC0 / entity discovery" },
      { nazev: "OpenStreetMap search", url: `https://www.openstreetmap.org/search?query=${encodeURIComponent(`${item.name} ${item.country}`)}`, licence: "ODbL / map verification" }
    ],
    pribehy: [
      { nazev: "Duvod zarazeni", text: `${item.name} posiluje geograficke pokryti mapy motivy ${themes.join(", ")} a vytvari dalsi samostatny detail pro sitemap, hledani a tematicke prolinkovani.` },
      { nazev: "Dalsi prace", text: "Seed je pripraveny na doplneni lokalnich spravcovskych zdroju, puvodnich nazvu, licencovanych fotografii a jazykovych detailu podle priority navstevnosti." }
    ]
  };
}

const groups = [
  {
    id: "petadvacata-vlna-himalaj-jizni-asie",
    slug: "petadvacata-vlna-himalaj-jizni-asie",
    title: "Petadvacata vlna A: Himalaj, Indie a jizni Asie",
    description: "Prvni cast petadvacate vlny pridava himalajske klastery, indicke pevnosti, posvatne hory, jeskynni chramy a citlive poutni krajiny jizni Asie.",
    category: "legenda",
    themes: ["ritual", "hory", "podzemi", "archeologie"],
    rows: `
Hemis Monastery|Indie|Asie|33.985|77.704|77|legenda|ritual,hory|Ladacky klaster vysoko v horach, poutni bod mezi tibetskou tradici, maskami a suchou krajinou.
Lamayuru Moonland|Indie|Asie|34.282|76.773|76|priroda|hory,prirodni-anomalie|Erozni krajina Ladakhu pripominajici mesicni povrch, spojena s klasterem a horskou cestou.
Tso Moriri Lake|Indie|Asie|32.930|78.300|75|priroda|hory,voda|Vysokohorske jezero Changthangu, odlehla krajina ptaku, soli, vetru a citliveho pristupu.
Magnetic Hill Ladakh|Indie|Asie|34.176|77.585|73|legenda|pseudoveda,hory|Silnicni opticka iluze v Ladakhu, kde sklon krajiny vytvari dojem gravitacni anomalii.
Roopkund Lake|Indie|Asie|30.262|79.732|82|legenda|umrti,hory|Ledovcove jezero s lidskymi ostatky, citlive misto mezi archeologii, forenzni vedou a legendou.
Jatinga Bird Mystery|Indie|Asie|25.117|93.029|78|priroda|zvirata,prirodni-anomalie|Vesnice v Assamu spojovana s nocnim padanim ptaku, kde prirodni chovani vytvorilo zahadu.
Lonar Crater Lake|Indie|Asie|19.976|76.508|80|priroda|impakt,voda|Impaktni krater v Dekanske plosine, slane jezero a geologicka stopa kosmicke srazky.
Ajanta Caves|Indie|Asie|20.552|75.703|82|podzemi|podzemi,ritual|Buddhisticke jeskynni chramy s malbami, kamenny archiv viry a obchodnich cest.
Elephanta Caves|Indie|Asie|18.963|72.932|79|podzemi|podzemi,ritual|Skalni chramy na ostrove u Bombaje, sochy Sivy a posvatny prostor vytesany do kamene.
Badami Cave Temples|Indie|Asie|15.914|75.683|78|podzemi|podzemi,ritual|Jeskynni chramy v cervenem piskovci, hinduisticka a dzinisticka vrstva dynastie Chalukya.
Bhimbetka Rock Shelters|Indie|Asie|22.939|77.612|81|podzemi|skalni-umeni,archeologie|Skalni pristresky s pravekymi malbami, dlouha pamet lidske pritomnosti v Indii.
Chittorgarh Fort|Indie|Asie|24.888|74.646|80|legenda|pevnost,umrti|Rozsahla pevnost Radzastanu, spojovana s oblehanimi, obetmi a kralovskou pameti.
Kumbhalgarh Fort|Indie|Asie|25.148|73.584|78|legenda|pevnost,hory|Horska pevnost s dlouhymi hradbami, obranny labyrint v Aravalli.
Jaisalmer Fort|Indie|Asie|26.912|70.913|78|legenda|pevnost,poust|Ziva poustni pevnost v Tharu, zluty kamen, karavanni pamet a uzke ulice.
Rani ki Vav|Indie|Asie|23.858|72.101|79|podzemi|podzemi,voda|Stepwell v Patanu, sestupna architektura vody, soch a ritualniho prostoru.
Lothal Dockyard|Indie|Asie|22.522|72.249|77|ztracena-mesta|archeologie,voda|Harappske pristavni sidlo, kde archeologie ukazuje davny obchod a vodni infrastrukturu.
Dholavira|Indie|Asie|23.887|70.214|80|ztracena-mesta|archeologie,poust|Harappske mesto v Kutch, urbanismus, voda a sucha krajina zanikle civilizace.
Mandu Ruins|Indie|Asie|22.333|75.395|77|ztracena-mesta|archeologie,pevnost|Ruiny pevnostniho mesta na plosine, palacova romantika, voda a opustene stavby.
Mahabalipuram Shore Temple|Indie|Asie|12.617|80.199|78|legenda|ritual,oceany|Pobrezni chram Pallavu, kde more, kamenny relief a mytologie tvori hranicni scenu.
Lepakshi Temple|Indie|Asie|13.803|77.607|76|legenda|ritual,symboly|Chram s legendou o visicim piliri, malbami a ritualni vrstvou jizni Indie.
Mawlynnong Living Root Bridge|Indie|Asie|25.202|91.916|76|priroda|prirodni-anomalie,les|Zive korenove mosty Meghalaye, spojeni stromu, vody a lidske trpelivosti.
Mawsmai Cave|Indie|Asie|25.244|91.727|74|podzemi|podzemi,voda|Krasova jeskyne u Cherrapunji, vlhke podzemi v jedne z nejdestivejsich krajin sveta.
Sigiriya Mirror Wall|Sri Lanka|Asie|7.957|80.760|79|legenda|archeologie,hory|Skalni pevnost Sigiriya se zrcadlovou stenou, freskami a kralovskou dramatickou polohou.
Dambulla Cave Temple|Sri Lanka|Asie|7.856|80.650|80|podzemi|podzemi,ritual|Jeskynni buddhisticky komplex se sochami a malbami v posvatne skale.
Mihintale|Sri Lanka|Asie|8.350|80.516|77|legenda|ritual,hory|Poutni hora povazovana za klicove misto prichodu buddhismu na ostrov.
Yapahuwa Rock Fortress|Sri Lanka|Asie|7.816|80.312|76|legenda|pevnost,hory|Skalni pevnost a kratkodobe kralovske sidlo s monumentalnim schodistem.
Rani Kot Fort|Pakistan|Asie|25.894|67.900|78|legenda|pevnost,poust|Obrovska pevnost v Sindhu, casto zminovana pro meritko hradeb v suche krajine.
Mohenjo Daro Granary|Pakistan|Asie|27.329|68.138|82|ztracena-mesta|archeologie,ztracena-mesta|Harappske mesto Indu, urbanisticka zahada hygieny, planu a zanikle civilizace.
Makli Necropolis|Pakistan|Asie|24.746|67.900|80|legenda|umrti,archeologie|Rozsahla nekropole u Thatty, kamenne hrobky a dlouha pamet dynastii Sindhu.
Katas Raj Temples|Pakistan|Asie|32.724|72.951|77|legenda|ritual,voda|Chramovy komplex u posvatneho jezera, hinduisticka mytologie a vrstvy pouti.
`.trim().split("\n").map(row)
  },
  {
    id: "petadvacata-vlna-severni-evropa",
    slug: "petadvacata-vlna-severni-evropa",
    title: "Petadvacata vlna B: severni Evropa, runy a ledove krajiny",
    description: "Druha cast petadvacate vlny pridava skandinavske runove kameny, pevnosti, doly, opustene arkticke lokality, fjordy a prirodni anomalie severu.",
    category: "legenda",
    themes: ["mytologie", "hory", "opustene", "archeologie"],
    rows: `
Jelling Stones|Dansko|Evropa|55.756|9.419|80|legenda|archeologie,symboly|Runove kameny Jellingu, zakladni politicky a mytologicky symbol vikinskeho Danska.
Trelleborg Viking Fortress|Dansko|Evropa|55.394|11.264|77|legenda|pevnost,archeologie|Kruhova vikinska pevnost, geometrie moci a vojenske organizace v krajine.
Lindholm Hoje|Dansko|Evropa|57.078|9.912|78|legenda|umrti,archeologie|Vikinske pohrebiste s kamennymi lodemi, smrt a more symbolicky propojene v poli.
Moesgaard Grauballe Man|Dansko|Evropa|56.087|10.223|77|legenda|umrti,archeologie|Muzejni kontext raselinne mumie, citlive okno do zelezneho veku a ritualni smrti.
Ale Stones|Svedsko|Evropa|55.383|14.054|80|legenda|archeologie,kosmicka-anomalie|Kamena lod na pobreznim utesu Skane, ceremonialni tvar mezi morem a nebem.
Anundshog|Svedsko|Evropa|59.630|16.643|78|legenda|umrti,archeologie|Velka mohyla a kamenne lode u Vasterasu, krajina moci, pohrebu a cest.
Birka Black Earth|Svedsko|Evropa|59.335|17.545|79|ztracena-mesta|archeologie,ostrov|Vikinske obchodni centrum na Bjorko, ostrovni vrstva obchodu, hrobu a remesel.
Gamla Uppsala Mounds|Svedsko|Evropa|59.899|17.633|81|legenda|mytologie,umrti|Kralovske mohyly stare Uppsaly, mytologicka a politicka pamet severu.
Visby City Walls|Svedsko|Evropa|57.640|18.296|77|legenda|pevnost,ostrov|Stredoveke hradby Gotlandu, obchodni slava, ruiny kostelu a balticka izolace.
Falun Copper Mine|Svedsko|Evropa|60.604|15.616|78|podzemi|podzemi,dolovani|Historicky medeny dul, obrovska jama a prumyslova krajina, ktera menila Evropu.
Kiruna Mine|Svedsko|Evropa|67.855|20.225|76|podzemi|podzemi,dolovani|Arkticky zelezny dul a mesto v pohybu, technicka krajina pod severnim svetlem.
Sala Silver Mine|Svedsko|Evropa|59.923|16.606|75|podzemi|podzemi,dolovani|Stribrny dul s hlubokymi sachty, podzemni pracovni svet a turisticky sestup.
Borgund Stave Church|Norsko|Evropa|61.047|7.812|79|legenda|ritual,mytologie|Dreveny sloupovy kostel, kde krestanska architektura nese ozveny severskych tvaru.
Urnes Stave Church|Norsko|Evropa|61.298|7.322|78|legenda|ritual,symboly|Stary dreveny kostel u fjordu, propletene ornamenty a prechod mezi epochami.
Kjeragbolten|Norsko|Evropa|59.033|6.593|76|priroda|hory,nebezpeci|Balvan zaklineny nad Lysefjordem, ikonicky a rizikovy obraz norske vysky.
Trolltunga|Norsko|Evropa|60.124|6.740|77|priroda|hory,nebezpeci|Skalni jazyk nad jezerem Ringedalsvatnet, turisticky magnet s realnym horskym rizikem.
Torghatten Hole|Norsko|Evropa|65.398|12.091|77|priroda|prirodni-anomalie,mytologie|Hora s prirodnim tunelem, vysvetlovana geologii i legendou o trollim sipu.
Nidaros Cathedral Crypt|Norsko|Evropa|63.427|10.396|76|podzemi|ritual,umrti|Poutni katedrala v Trondheimu, sakralni centrum spojene se svatym Olafem.
Svalbard Pyramiden|Norsko|Evropa|78.655|16.326|82|opustene|opustene,led|Opustene sovetske hornicke mesto na Svalbardu, arkticka izolace a ztuhla ideologie.
Svalbard Global Seed Vault|Norsko|Evropa|78.235|15.491|78|zakazane-zony|technologie,led|Arkticky trezor semen, moderni apokalypticka infrastruktura vytesana do permafrostu.
Alta Rock Carvings|Norsko|Evropa|69.947|23.188|79|legenda|skalni-umeni,archeologie|Praveke rytiny v severnim Norsku, lov, lode a zvirata v arkticke pameti.
Kastelholm Castle|Finsko|Evropa|60.232|20.079|74|legenda|pevnost,ostrov|Hrad na Alandech, balticka mocenska stopa mezi Svedskem, Finskem a morem.
Suomenlinna Tunnels|Finsko|Evropa|60.145|24.988|77|podzemi|pevnost,podzemi|Morska pevnost Helsinek s tunely, bastiony a vojenskou pameti ostrovu.
Olavinlinna Castle|Finsko|Evropa|61.864|28.901|76|legenda|pevnost,voda|Jezerni hrad Savonlinny, kamenne veze mezi vodou, hranici a severskou legendou.
Rapola Hill Fort|Finsko|Evropa|61.170|24.030|74|legenda|archeologie,pevnost|Praveke hradiste v Tavastii, vysinny bod s dlouhou obrannou a lokalni pameti.
Astuvansalmi Rock Paintings|Finsko|Evropa|61.442|27.543|78|legenda|skalni-umeni,voda|Skalni malby u jezera Saimaa, lov, voda a praveka symbolika na stene.
Kummakivi Balancing Rock|Finsko|Evropa|61.492|28.430|75|priroda|prirodni-anomalie,mytologie|Balancujici balvan v lese, geologicky vysvetlitelny tvar s folklorni silou.
Kaali Meteorite Crater|Estonsko|Evropa|58.372|22.670|80|priroda|impakt,kosmicka-anomalie|Impaktni krater na Saaremaa, jezero a archetyp nebeske srazky v baltske krajine.
Salaspils Memorial|Lotyssko|Evropa|56.873|24.302|78|legenda|umrti,valka|Memorialni areal na miste nacistickeho taboroveho utrpeni, velmi citliva pamet valky.
Hill of Crosses Siauliai|Litva|Evropa|56.015|23.416|80|legenda|ritual,symboly|Poutni hora krizu, kde nabozenstvi, odpor a opakovane niceni vytvorily silny symbol.
`.trim().split("\n").map(row)
  },
  {
    id: "petadvacata-vlna-afrika-ostrovy",
    slug: "petadvacata-vlna-afrika-ostrovy",
    title: "Petadvacata vlna C: Afrika, ostrovy, pralesy a sopky",
    description: "Treti cast petadvacate vlny pridava africke ostrovy, sopky, vodopady, pralesni svatyne, kralovske palace, ruiny a citlive lokality obchodu s lidmi.",
    category: "ostrov",
    themes: ["ostrov", "sopky", "prales", "umrti"],
    rows: `
Goree Island Door of No Return|Senegal|Afrika|14.667|-17.398|82|legenda|umrti,ostrov|Ostrovni misto pameti obchodu s lidmi, kde architektura nese citlivou globalni historii.
Djoudj Bird Sanctuary|Senegal|Afrika|16.417|-16.233|74|priroda|zvirata,voda|Mokrady u reky Senegal, ptaci migrace a sezonni krajina mezi Saharou a vodou.
Saloum Shell Mounds|Senegal|Afrika|13.835|-16.498|76|legenda|archeologie,voda|Muslove mohyly delty Saloum, dlouha lidska stopa, pohrebni krajina a mangrovy.
Kunta Kinteh Island|Gambie|Afrika|13.317|-16.363|80|legenda|umrti,ostrov|Maly ostrov v rece Gambii, silne citlive misto obchodni, pevnostni a otrokarske pameti.
Kakum Forest Shrine Trails|Ghana|Afrika|5.350|-1.383|74|priroda|prales,ritual|Pralesni stezky Kakumu, koruny stromu, lokalni ochrana a duchovni vztah ke krajine.
Nzulezo Stilt Village|Ghana|Afrika|5.022|-2.606|75|legenda|voda,opustene|Vesnice na kulech v lagune, vodni osidleni mezi tradici, turismem a krehkym prostredim.
Larabanga Mystic Stone|Ghana|Afrika|9.221|-1.861|76|legenda|ritual,symboly|Kamen spojovany s lokalni legendou o nehybnosti a stavbe mesity v Larabanze.
Benin Royal Palaces Abomey|Benin|Afrika|7.186|1.991|80|legenda|archeologie,ritual|Kralovske palace Abomey, moc Dahome, ritualni historie a citlive vrstvy nasili.
Ganvie Lake Village|Benin|Afrika|6.467|2.417|74|legenda|voda,opustene|Jezerni vesnice na Nokoue, vodni urbanismus vznikly take jako obranna strategie.
Ouidah Python Temple|Benin|Afrika|6.363|2.085|77|legenda|ritual,zvirata|Chram krajt ve Ouidah, vodun tradice, ziva symbolika a citlivy kulturni kontext.
Pendjari Cliffs|Benin|Afrika|11.333|1.500|74|priroda|prirodni-anomalie,zvirata|Savanna a skalni hrany Pendjari, krajina zvirat, rizika a ochrany.
Sukur Cultural Landscape|Nigerie|Afrika|10.740|13.570|78|legenda|archeologie,hory|Horska kulturni krajina Sukur, terasy, zelezarska pamet a ritualni moc.
Osun Osogbo Sacred Grove|Nigerie|Afrika|7.755|4.552|80|legenda|ritual,les|Posvatny haj Osun, ziva jorubska tradice, sochy a ritualni vztah k rece.
Idanre Hills|Nigerie|Afrika|7.112|5.121|76|legenda|hory,archeologie|Skalni kopce s opustenym sidlem, schody, svatyne a vyhledy na jorubskou krajinu.
Awhum Waterfall Cave|Nigerie|Afrika|6.300|7.450|75|podzemi|voda,ritual|Vodopad a jeskynni prostory spojovane s pouti, modlitbou a prirodni scenografii.
Mount Cameroon Lava Fields|Kamerun|Afrika|4.217|9.172|79|katastrofa|sopky,nebezpeci|Aktivni sopecna hora nad Guinejskym zalivem, lava, mlha a realne horske riziko.
Lake Nyos|Kamerun|Afrika|6.438|10.300|84|katastrofa|voda,katastrofa|Kraterove jezero katastrofy z roku 1986, kde unik plynu zabil tisice lidi i zvirat.
Korup Forest|Kamerun|Afrika|5.050|8.850|74|priroda|prales,prirodni-labyrint|Stary prales jihozapadniho Kamerunu, biodiverzita, vlhkost a obtizny teren.
Sao Tome Pico Cao Grande|Svaty Tomas a Principuv ostrov|Afrika|0.117|6.567|78|priroda|ostrov,prirodni-anomalie|Jehla sopecneho puvodu stoupajici z pralesa, jeden z nejdramatictejsich tvaru ostrova.
Sao Tome Roca Agua Ize|Svaty Tomas a Principuv ostrov|Afrika|0.233|6.750|75|opustene|opustene,ostrov|Opustene plantazni stavby, kolonialni pamet kakaa a citliva ostrovni historie.
Annobon Crater Lake|Rovnikova Guinea|Afrika|-1.432|5.621|75|priroda|ostrov,sopky|Kraterove jezero odlehleho ostrova Annobon, izolace, voda a vulkanicky puvod.
Pico Basile|Rovnikova Guinea|Afrika|3.588|8.762|76|priroda|sopky,ostrov|Nejvyssi hora Bioka, sopecna dominanta nad pralesem a mlhou Guinejskeho zalivu.
Loango Surfing Hippos Coast|Gabon|Afrika|-2.300|9.600|74|priroda|oceany,zvirata|Pobrezi Loanga, kde prales, plaze a velka zvirata vytvareji nezvyklou hranici.
Ivindo Blackwater Rapids|Gabon|Afrika|0.650|12.750|75|priroda|voda,prales|Temne reky a pereje Ivinda, pralesni izolace a zvuk vody v zelene krajine.
Dzanga Bai|Stredoafricka republika|Afrika|2.963|16.365|76|priroda|prales,zvirata|Lesni mytina slonu, vzacny bod pozorovani zvirat v hloubce konzsko-pralesni krajiny.
Boyoma Falls|DR Kongo|Afrika|0.518|25.208|75|priroda|voda,prirodni-anomalie|Soustava pereji na rece Kongo, mohutny tok, rybarske konstrukce a sila vody.
Nyiragongo Volcano Rim|DR Kongo|Afrika|-1.522|29.249|84|katastrofa|sopky,nebezpeci|Aktivni sopka nad Goma, znama lavovym jezerem a realnym rizikem erupci.
Lola ya Bonobo Forest|DR Kongo|Afrika|-4.490|15.260|72|priroda|prales,zvirata|Lesni utociste bonobu u Kinshasy, mene temne, ale biologicky silne misto mapy.
Tsingy Rouge|Madagaskar|Afrika|-12.556|49.452|76|priroda|prirodni-anomalie,poust|Cervene erozni jehly severniho Madagaskaru, krehka geologie vytvarena destem.
Ankarana Caves|Madagaskar|Afrika|-12.950|49.133|78|podzemi|podzemi,prirodni-labyrint|Krasovy labyrint, tsingy a jeskyne s netopyry, vodou a sakralni lokalni vrstvou.
`.trim().split("\n").map(row)
  },
  {
    id: "petadvacata-vlna-ameriky-podzemi-a-svetla",
    slug: "petadvacata-vlna-ameriky-podzemi-a-svetla",
    title: "Petadvacata vlna D: Ameriky, podzemi, svetla a zanikle cesty",
    description: "Ctvrta cast petadvacate vlny pridava americke jeskynni systemy, poustni svetelne legendy, ostrovni pevnosti, doly, vodopady a archeologicke krajiny.",
    category: "podzemi",
    themes: ["podzemi", "ufo", "archeologie", "prirodni-anomalie"],
    rows: `
Marfa Lights Viewing Area|Spojene staty|Severni Amerika|30.275|-103.879|78|legenda|ufo,prirodni-anomalie|Pousterna oblast Texasu spojovana se svetelnymi jevy, folklorem a dlouhym skeptickym vysvetlovanim.
Brown Mountain Lights|Spojene staty|Severni Amerika|35.913|-81.755|77|legenda|ufo,hory|Svetelna legenda Apalacu, kde pozorovani v horach vytvorila moderni i starsi vypraveni.
Spooklight Hornet|Spojene staty|Severni Amerika|36.947|-94.639|76|legenda|ufo,duchove|Svetelny jev na hranici Missouri a Oklahomy, silnicni folklor a opticke teorie.
Bell Witch Cave|Spojene staty|Severni Amerika|36.530|-87.126|78|podzemi|duchove,podzemi|Jeskyne spojovana s legendou Bell Witch, lokalni ducharska tradice a turisticky pribeh.
Moundsville Penitentiary|Spojene staty|Severni Amerika|39.918|-80.744|78|veznice|veznice,duchove|Byvala veznice v Zapadni Virginii, gotizujici architektura a silna ghost-tour povest.
Old Idaho Penitentiary|Spojene staty|Severni Amerika|43.602|-116.161|76|veznice|veznice,duchove|Historicka veznice v Boise, popravy, kamenne bloky a temna pamet trestu.
Alcatraz Cellhouse|Spojene staty|Severni Amerika|37.827|-122.423|82|veznice|veznice,ostrov|Cela a chodby Alcatrazu, ostrovni izolace, unikove pribehy a statni moc.
Fort Jefferson Dry Tortugas|Spojene staty|Severni Amerika|24.628|-82.873|78|legenda|pevnost,ostrov|Obri morska pevnost v Mexickem zalivu, izolace, vezneni a tropicka ruina.
Cumberland Gap Tunnel Area|Spojene staty|Severni Amerika|36.604|-83.676|74|legenda|hory,prirodni-labyrint|Historicky pruchod Apalacem, hranicni cesta, migrace a horsky koridor.
Natural Bridge Virginia|Spojene staty|Severni Amerika|37.628|-79.545|75|priroda|prirodni-anomalie,mytologie|Vapencovy prirodni most, krajinna brana s dlouhou turistickou a symbolickou historii.
Luray Caverns|Spojene staty|Severni Amerika|38.664|-78.483|76|podzemi|podzemi,voda|Velke turisticke jeskyne Virginie, stalaktity, podzemni sale a akusticka show.
Shenandoah Dark Hollow Falls|Spojene staty|Severni Amerika|38.518|-78.436|73|priroda|voda,les|Vodopad v Blue Ridge, prirodni bod pro mapu horskych legend a turistickych cest.
Devils Tower|Spojene staty|Severni Amerika|44.590|-104.715|82|priroda|mytologie,prirodni-anomalie|Cedicova vez Wyomingu, posvatna krajina puvodnich narodu a ikona filmoveho udivu.
Medicine Wheel Bighorn|Spojene staty|Severni Amerika|44.826|-107.921|80|legenda|ritual,hory|Kamenny kruh v Bighorn Mountains, citlive posvatne misto a astronomicka krajina.
Chaco Wijiji Ruin|Spojene staty|Severni Amerika|36.061|-107.961|77|ztracena-mesta|archeologie,poust|Mene navstevovana velka stavba Chaco, ticha cast poustni anasazijske krajiny.
Hovenweep Castle|Spojene staty|Severni Amerika|37.385|-109.080|77|ztracena-mesta|archeologie,poust|Kamene veze na okrajich kanonu, obranna a ritualni stopa predkolumbovskeho jihozapadu.
Canyon de Chelly Spider Rock|Spojene staty|Severni Amerika|36.106|-109.348|80|legenda|mytologie,prirodni-anomalie|Skalni jehla Navajo krajiny, spojovana s vypravenim o Spider Woman a kanonovou pameti.
Montezuma Castle|Spojene staty|Severni Amerika|34.612|-111.839|76|ztracena-mesta|archeologie,skala|Skalni sidlo Sinagua v Arizone, chranena obytna architektura ve svisle stene.
Casa Grande Ruins|Spojene staty|Severni Amerika|32.995|-111.536|76|ztracena-mesta|archeologie,poust|Velka hlinena stavba Hohokam, poustni urbanismus a otazky po ucelu monumentu.
Bandelier Alcove House|Spojene staty|Severni Amerika|35.779|-106.271|76|podzemi|archeologie,skala|Skalni obydli v kanonu Noveho Mexika, zebriky, tufa a predkolumbovska stopa.
El Morro Inscription Rock|Spojene staty|Severni Amerika|35.039|-108.349|75|legenda|symboly,poust|Skalni stena s napisy cestovatelu, vrstvy pouti, kolonie a vody v pousti.
Great Serpent Mound Ontario|Kanada|Severni Amerika|44.190|-78.240|76|legenda|archeologie,symboly|Kanadska mohyla ve tvaru hada, mene znama ritualni krajina u jezera Rice.
Head Smashed In Buffalo Jump|Kanada|Severni Amerika|49.705|-113.654|79|legenda|archeologie,zvirata|Utes lovu bizonu v Alberte, krajina spoluprace, smrti zvirat a puvodnich technologii.
Writing on Stone Hoodoos|Kanada|Severni Amerika|49.083|-111.617|78|legenda|skalni-umeni,prirodni-anomalie|Piskovcove tvary a skalni umeni Alberty, posvatna krajina u Milk River.
Nahanni Headless Valley|Kanada|Severni Amerika|61.000|-124.000|82|legenda|zmizeni,prirodni-labyrint|Odlehla oblast Nahanni spojovana s legendami o zmizenich, zlate horecce a divocine.
Dawson City Dredge No 4|Kanada|Severni Amerika|64.041|-139.436|75|opustene|opustene,zlato|Obri zlatokopecka dredge u Dawsonu, prumyslova stopa klondikeske horecky.
Lanse aux Meadows Norse Site|Kanada|Severni Amerika|51.596|-55.533|81|ztracena-mesta|archeologie,oceany|Severske sidliste na Newfoundlandu, hmatatelna stopa vikinske pritomnosti v Americe.
Mistaken Point Fossils|Kanada|Severni Amerika|46.635|-53.184|78|priroda|fosilie,oceany|Pobrezni naleziste ediakarskych fosilii, kamenny archiv velmi stareho zivota.
Sable Island Wreck Coast|Kanada|Severni Amerika|43.934|-60.012|80|legenda|zmizeni,ostrov|Pisecny ostrov vraku v Atlantiku, kone, mlha a dlouha historie ztroskotani.
Burgess Shale Walcott Quarry|Kanada|Severni Amerika|51.434|-116.474|80|priroda|fosilie,hory|Fosilni naleziste v kanadskych Skalistych horach, okno do kambricke exploze zivota.
`.trim().split("\n").map(row)
  }
];

groups.forEach((group) => {
  group.localizedSlugs = {
    cs: group.slug,
    en: group.slug.replace("petadvacata-vlna", "twenty-fifth-wave"),
    de: group.slug.replace("petadvacata-vlna", "fuenfundzwanzigste-welle"),
    es: group.slug.replace("petadvacata-vlna", "vigesimoquinta-ola"),
    fr: group.slug.replace("petadvacata-vlna", "vingt-cinquieme-vague")
  };
});

const rawPlaces = groups.flatMap((group) => group.rows);
const places = readJson(placesPath);
const byId = new Map(places.map((place) => [place.id, place]));
const inserted = [];
rawPlaces.map(profile).forEach((place) => {
  if (!byId.has(place.id)) inserted.push(place.id);
  byId.set(place.id, place);
});
writeJson(placesPath, Array.from(byId.values()));

const articles = readJson(articlesPath);
const articlesById = new Map(articles.map((item) => [item.id, item]));
groups.forEach((group) => {
  articlesById.set(group.id, {
    id: group.id,
    slug: group.slug,
    localizedSlugs: group.localizedSlugs,
    title: group.title,
    description: group.description,
    category: group.category,
    themes: group.themes,
    relatedPlaceIds: group.rows.map((item) => slugify(item.name)),
    sections: [
      {
        heading: "Proc tahle oblast",
        body: "Petadvacata vlna pokracuje ve vetsim meritku, ale kazdy seed stale drzi jasnou polohu, tematicke zarazeni a zakladni zdroje pro dalsi overeni."
      },
      {
        heading: "Redakcni hodnota",
        body: "Bloky pridavaji mista, ktera se hodi pro mapu i pro tematicke filtry: podzemi, hory, opustene arealy, ritualni krajiny, prirodni anomalie a citlive pametove lokality."
      },
      {
        heading: "Dalsi krok",
        body: "Nejvyhledavanejsi profily bude vhodne rozpracovat o lokalni nazvy, oficialni pravidla pristupu, fotografie s licenci a presnejsi historicke zdroje."
      }
    ],
    sources: ["wikidata", "wikipedia", "openstreetmap", "wikimedia-commons"]
  });
});
writeJson(articlesPath, Array.from(articlesById.values()));

console.log(`Upserted ${inserted.length} new places (${rawPlaces.length} raw) and ${groups.length} articles.`);
