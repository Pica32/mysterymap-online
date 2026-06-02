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
  return { name, country, continent, lat: Number(lat), lon: Number(lon), score: Number(score), category, themes: themes.split(","), lead };
}

function profile(item) {
  const id = slugify(item.name);
  const themes = item.themes || ["legenda"];
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
    kategorie: [item.category || "legenda"],
    temata: themes,
    indexTajemna: item.score || 76,
    paranormalniAktivita: "kulturni, prirodni nebo historicka tvrzeni",
    historickaDolozenost: "overitelna zakladni identita",
    nebezpecnost: themes.includes("nebezpeci") ? "overit lokalne, misty zvysene riziko" : "overit lokalne",
    pristupnost: "overit pred cestou",
    atmosfera: 4.1,
    nocniVhodnost: themes.includes("duchove") || themes.includes("ufo"),
    vhodneProDeti: !(themes.includes("umrti") || themes.includes("nebezpeci")),
    popisy: {
      zahada: `${item.name} rozsiruje sestadvacatou vlnu MysteryMap jako mapovy bod s jasnou polohou a motivem: ${item.lead}`,
      historie: "Historicka vrstva popisuje zakladni identitu mista, kontinent, stat, GPS a tematicke zarazeni. Profil je seed pro dalsi lokalni zdroje a presnejsi navstevnicke informace.",
      legenda: "Legendova vrstva vysvetluje, proc se misto dostava do mapy: muze jit o pevnost, zanikle mesto, podzemi, posvatnou krajinu, prirodni anomalni tvar nebo opustenou infrastrukturu.",
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
    id: "sestadvacata-vlna-stredni-asie-step",
    slug: "sestadvacata-vlna-stredni-asie-step",
    title: "Sestadvacata vlna A: Stredni Asie, step a poustni mesta",
    description: "Prvni cast sestadvacate vlny pridava stepi, pevnosti, karavanni mesta, mauzolea, kraterove krajiny a vysinne svatyne Stredni Asie.",
    category: "ztracena-mesta",
    themes: ["poust", "archeologie", "ritual", "pevnost"],
    rows: `
Mizdakhan Necropolis|Uzbekistan|Asie|42.457|59.608|78|legenda|umrti,archeologie|Rozsahla nekropole u Nukusu, pohrebni krajina, ruiny a legendy o konci sveta.
Toprak Kala|Uzbekistan|Asie|41.920|60.827|77|ztracena-mesta|archeologie,poust|Hlinene ruiny chorasmske pevnosti v pousti, zbytky palacove moci a sucha.
Kyzyl Kala Khorezm|Uzbekistan|Asie|41.971|60.747|75|legenda|pevnost,poust|Rekonstruovana poustni pevnost Chorezmu, cervene zdi a stopa karavannich cest.
Sarmishsay Petroglyphs|Uzbekistan|Asie|40.410|65.640|78|legenda|skalni-umeni,poust|Udoli skalnich rytin, kde zvirata a lovci zustali v kameni stredni Asie.
Chor Bakr Necropolis|Uzbekistan|Asie|39.757|64.365|76|legenda|umrti,ritual|Pohrebni komplex u Buchary, mesto mrtvych s cestami, portaly a tichou pouti.
Gyaur Kala Merv|Turkmenistan|Asie|37.665|62.184|79|ztracena-mesta|archeologie,poust|Jedna z vrstev starovekeho Mervu, hlinene hradby a zanikla metropole oazy.
Gonur Depe|Turkmenistan|Asie|38.174|62.043|80|ztracena-mesta|archeologie,poust|Bronzove sidlo Margiany, palacove ruiny, ritual a davna oazova civilizace.
Nisa Parthian Fortress|Turkmenistan|Asie|37.950|58.212|78|legenda|pevnost,archeologie|Parthske kralovske sidlo u Aschabadu, hlinene zdi a pamet rise.
Kow Ata Cave Lake|Turkmenistan|Asie|38.050|57.488|76|podzemi|podzemi,voda|Tepla podzemni jezirni jeskyne, sirna voda a turisticka podzemni anomalie.
Yangykala Canyon|Turkmenistan|Asie|40.500|55.050|78|priroda|poust,prirodni-anomalie|Barevne poustni utesy zapadniho Turkmenistanu, prirodni pevnost vrstev a eroze.
Tamgaly Tas|Kazachstan|Asie|44.000|76.983|76|legenda|skalni-umeni,ritual|Skalni rytiny u Ili, buddhisticke obrazy a stepi pod sirym nebem.
Bozzhyra Tract|Kazachstan|Asie|43.409|54.073|79|priroda|poust,prirodni-anomalie|Bile utesy Mangystau, poustni amfiteatr s tvary jako z jine planety.
Sherkala Mountain|Kazachstan|Asie|44.230|52.010|76|priroda|hory,mytologie|Osamela hora Mangystau, prirodni pevnost a symbol stepni krajiny.
Beket Ata Underground Mosque|Kazachstan|Asie|43.594|54.086|78|podzemi|podzemi,ritual|Podzemni poutni mesita v Mangystau, ticha svatyne vytesana do skaly.
Otrar Ruins|Kazachstan|Asie|42.852|68.306|79|ztracena-mesta|archeologie,ztracena-mesta|Zanikle mesto Hedvabne stezky, spojene s obchodem, oblehanim a mongolskou expanzi.
Akyrtas Palace|Kazachstan|Asie|42.920|71.803|77|ztracena-mesta|archeologie,pseudoveda|Nedokonceny kamenny komplex u Tarazu, nejasny ucel a moderni spekulace.
Burana Tower Balasagun|Kyrgyzstan|Asie|42.746|75.250|77|legenda|archeologie,step|Minaret a balbaly zanikleho Balasagunu, stopa karachanskeho mesta v udoli.
Tash Rabat Caravanserai|Kyrgyzstan|Asie|40.823|75.288|78|legenda|hory,karavany|Kamenny karavanseraj v horach, odlehle utociste cest Hedvabne stezky.
Sulaiman Too Osh|Kyrgyzstan|Asie|40.528|72.783|80|legenda|ritual,hory|Posvatna hora nad Osem, jeskyne, poutni mista a dlouha vrstva islamske tradice.
Issyk Kul Sunken Settlements|Kyrgyzstan|Asie|42.450|77.200|77|legenda|voda,ztracena-mesta|Jezero spojovane se zatopenymi sidly a archeologii pod vodou vysokohorske panve.
`.trim().split("\n").map(row)
  },
  {
    id: "sestadvacata-vlna-karpaty-balkan",
    slug: "sestadvacata-vlna-karpaty-balkan",
    title: "Sestadvacata vlna B: Karpaty, Balkan a podzemni pevnosti",
    description: "Druha cast sestadvacate vlny pridava karpatske hrady, balkanske klastery, podzemni komplexy, mosty, hory a citlive pamatkove krajiny.",
    category: "legenda",
    themes: ["pevnost", "podzemi", "ritual", "hory"],
    rows: `
Poenari Fortress|Rumunsko|Evropa|45.353|24.635|80|legenda|pevnost,hory|Skalni pevnost spojovana s Vladem Tepesem, strme schody a dramaticka karpatska poloha.
Corvin Castle|Rumunsko|Evropa|45.749|22.888|79|legenda|pevnost,duchove|Goticky hrad v Hunedoare, legenda, vezneni a teatralni architektura.
Sighisoara Clock Tower|Rumunsko|Evropa|46.219|24.792|76|legenda|pevnost,media|Opevnene mesto s draculovskou turistikou, barvami a stredovekou pameti.
Turda Salt Mine|Rumunsko|Evropa|46.587|23.787|78|podzemi|podzemi,dolovani|Solny dul premeneny v podzemni atrakci, monumentalni komory a technicka historie.
Scarisoara Ice Cave|Rumunsko|Evropa|46.489|22.809|77|podzemi|podzemi,led|Ledova jeskyne v Apuseni, stary podzemni led a horsky kras.
Sarmizegetusa Ulpia Traiana|Rumunsko|Evropa|45.516|22.786|77|ztracena-mesta|archeologie,ritual|Rimske mesto po dobyti Dacie, ruiny moci a vrstvy kolonizace.
Devetashka Cave|Bulharsko|Evropa|43.235|24.883|77|podzemi|podzemi,zvirata|Obri jeskynni hala s otvory ve stropu, netopyry a archeologickou stopou.
Prohodna Eyes of God Cave|Bulharsko|Evropa|43.177|24.073|78|podzemi|podzemi,symboly|Jeskyne se dvema stropnimi okny, popularne ctenymi jako Oci Boha.
Madzharovo Vulture Cliffs|Bulharsko|Evropa|41.633|25.867|74|priroda|zvirata,prirodni-anomalie|Sopecne utesy a meandry Ardy, krajina dravcu, ruin a cervene skaly.
Asen Fortress|Bulharsko|Evropa|41.986|24.873|76|legenda|pevnost,hory|Pevnost nad Asenovgradem, horska brana, kostel a vyhledy na Rodopy.
Krusuna Waterfalls|Bulharsko|Evropa|43.245|25.034|74|priroda|voda,prirodni-anomalie|Travertinove vodopady a tyrkysove kaskady, jemnejsi prirodni anomalie severniho Bulharska.
Matka Canyon|Severni Makedonie|Evropa|41.951|21.299|76|priroda|voda,podzemi|Kanon u Skopje s klastery, jeskynemi a vodni hladinou mezi skalami.
Kokino Observatory|Severni Makedonie|Evropa|42.263|21.953|79|legenda|archeologie,kosmicka-anomalie|Bronzove horske naleziste vykladane jako praveka observator.
Markovi Kuli Prilep|Severni Makedonie|Evropa|41.370|21.553|76|legenda|pevnost,hory|Pevnostni ruiny nad Prilepem, balvany, legendy o kralu Markovi a vyhledy.
Ohrid Plaosnik|Severni Makedonie|Evropa|41.114|20.790|77|legenda|ritual,voda|Sakralni a archeologicka vrstva nad Ohridskym jezerem, klaster, skola a poutni pamet.
Mostar Old Bridge|Bosna a Hercegovina|Evropa|43.337|17.815|78|legenda|symboly,valka|Most jako symbol spojeni, zniceni a obnovy, citliva pamet mesta nad Neretvou.
Jajce Catacombs|Bosna a Hercegovina|Evropa|44.341|17.270|77|podzemi|podzemi,umrti|Podzemni kralovska kaple v Jajce, vytesana do skaly a spojena s bosenskou stredovekou moci.
Blagaj Tekija|Bosna a Hercegovina|Evropa|43.257|17.903|78|legenda|ritual,voda|Dervissky klaster u vyveru Buny, voda, skala a poutni ticho.
Vjetrenica Cave|Bosna a Hercegovina|Evropa|42.845|17.984|77|podzemi|podzemi,prirodni-anomalie|Dlouha krasova jeskyne Hercegoviny, vitr, voda a podzemni biodiverzita.
Daorson Megalithic Walls|Bosna a Hercegovina|Evropa|43.084|17.944|77|ztracena-mesta|archeologie,pevnost|Illyrske megaliticke zdi nad Stolacem, mene zname opevnene mesto kamenu.
`.trim().split("\n").map(row)
  },
  {
    id: "sestadvacata-vlna-jizni-amerika-prirodni-divy",
    slug: "sestadvacata-vlna-jizni-amerika-prirodni-divy",
    title: "Sestadvacata vlna C: Jizni Amerika, prirodni divy a hranicni krajiny",
    description: "Treti cast sestadvacate vlny pridava andske hory, ledovce, vodopady, solne plane, pralesni hranice, opustene trate a mista modernich expedicnich mytu.",
    category: "priroda",
    themes: ["hory", "voda", "poust", "prirodni-anomalie"],
    rows: `
Salar de Arizaro Cono de Arita|Argentina|Jizni Amerika|-25.000|-67.750|79|priroda|poust,prirodni-anomalie|Dokonaly kuzel v solne plani, prirodni geometrie, ktera vypada jako umely monument.
Campo de Piedra Pomez|Argentina|Jizni Amerika|-26.650|-67.500|78|priroda|poust,prirodni-anomalie|Pole pemzovych skal v Pune, bily labyrint vetru, sopek a vysoke pouste.
Tren a las Nubes Viaduct|Argentina|Jizni Amerika|-24.200|-66.417|75|legenda|hory,technologie|Vysokohorska zeleznice s viadukty, technicka stopa v andske krajine.
Salinas Grandes Argentina|Argentina|Jizni Amerika|-23.650|-65.950|76|priroda|poust,prirodni-anomalie|Solna plan mezi Jujuy a Saltou, bily horizont, voda a opticke iluze.
Ibera Wetlands|Argentina|Jizni Amerika|-28.600|-57.200|74|priroda|voda,zvirata|Rozsahle mokrady, navrat zvirat a vodni labyrint v severovychodni Argentine.
Mar Chiquita Lake|Argentina|Jizni Amerika|-30.350|-62.500|73|priroda|voda,zvirata|Velke slane jezero Cordoby, ptaci krajina a promenlivy vodni horizont.
Villarrica Volcano|Chile|Jizni Amerika|-39.420|-71.940|82|katastrofa|sopky,nebezpeci|Aktivni sopka nad jezery, lavove svetlo, snih a realne erupcni riziko.
Osorno Volcano|Chile|Jizni Amerika|-41.105|-72.496|78|priroda|sopky,hory|Symetricka sopka v jezerni oblasti, krajina ledu, lesu a turisticke ikony.
Pali Aike Volcanic Field|Chile|Jizni Amerika|-52.083|-69.700|78|priroda|sopky,poust|Patagonske lavove pole a kratery, syrova krajina ohnive minulosti.
Queulat Hanging Glacier|Chile|Jizni Amerika|-44.450|-72.550|77|priroda|led,hory|Visici ledovec v mlznem pralese, voda padajici ze zalednene vysky.
Ventisquero Colgante Trail|Chile|Jizni Amerika|-44.468|-72.553|75|priroda|led,voda|Stezka k visicimu ledovci Queulat, promenlive pocasi a horska voda.
Humberstone Saltpeter Works|Chile|Jizni Amerika|-20.205|-69.795|80|opustene|opustene,poust|Opustene salitrove mesto Atacamy, prumyslova pamet nitratu a socialni historie.
Santa Laura Saltpeter Works|Chile|Jizni Amerika|-20.208|-69.789|78|opustene|opustene,poust|Ruiny salitrove tovarny, rezave konstrukce a poustni obraz prumysloveho boomu.
Lauca Chungara Lake|Chile|Jizni Amerika|-18.250|-69.160|76|priroda|voda,hory|Vysokohorske jezero pod sopkami, altiplano, ptaci a hranice s Bolivii.
Licancabur Volcano|Chile|Jizni Amerika|-22.833|-67.883|80|priroda|sopky,ritual|Sopka nad Atacamou a hranici, posvatny tvar, vyska a kraterove jezero.
Cotopaxi Volcano|Ekvador|Jizni Amerika|-0.680|-78.437|82|katastrofa|sopky,nebezpeci|Ikonicka andska sopka s ledovcem, erupcni historii a silnou vizualni dominantou.
Quilotoa Crater Lake|Ekvador|Jizni Amerika|-0.850|-78.900|78|priroda|sopky,voda|Tyrkysove jezero v sopecne kaldere, vysoka krajina, vitr a strme okraje.
Pululahua Geobotanical Reserve|Ekvador|Jizni Amerika|0.050|-78.483|76|priroda|sopky,prirodni-anomalie|Obydlena sopecna kaldera u rovniku, pole, mlha a kruh krateru.
Cajas Lakes|Ekvador|Jizni Amerika|-2.840|-79.240|74|priroda|voda,hory|Vysokohorsky labyrint jezer a paramo, krehka vodni krajina nad Cuencou.
Kaieteur Falls|Guyana|Jizni Amerika|5.176|-59.480|81|priroda|voda,prales|Mohutny vodopad v pralesnim vnitrozemi, izolace, mlha a syrova sila vody.
`.trim().split("\n").map(row)
  },
  {
    id: "sestadvacata-vlna-tiche-ostrovy",
    slug: "sestadvacata-vlna-tiche-ostrovy",
    title: "Sestadvacata vlna D: Tiche ostrovy a ztracene moreplavecke krajiny",
    description: "Ctvrta cast sestadvacate vlny pridava polyneske a melaneske ostrovy, ritualni kamenne prostory, sopecne kratery, vraky, laguny a jaderne pametove krajiny.",
    category: "ostrov",
    themes: ["ostrov", "oceany", "ritual", "katastrofa"],
    rows: `
Haamonga a Maui|Tonga|Oceanie|-21.138|-175.049|79|legenda|archeologie,ritual|Kamenny trilithon Tongy, spojovany s kralovskou moci, astronomii a ustni tradici.
Mua Royal Tombs|Tonga|Oceanie|-21.162|-175.126|77|legenda|umrti,ritual|Kralovske hrobky langi, vrstvy kamennych platforem a pamet dynastii Tu'i Tonga.
Mapu a Vaea Blowholes|Tonga|Oceanie|-21.202|-175.331|74|priroda|oceany,prirodni-anomalie|Pobrezni lavove otvory, kde vlna meni skalu v radu morskych gejziru.
Tofua Caldera|Tonga|Oceanie|-19.750|-175.070|78|priroda|sopky,ostrov|Sopecny ostrov s kraterovym jezerem, izolace a dramaticky tvar v Pacifiku.
Lake Lanotoo|Samoa|Oceanie|-13.900|-171.833|75|priroda|voda,ostrov|Horske kraterove jezero Upolu, mlha, zlate ryby a ticha vnitroostrovni atmosfera.
Papaseea Sliding Rocks|Samoa|Oceanie|-13.870|-171.800|73|priroda|voda,prirodni-anomalie|Prirodni skluzavky na hladke skale, voda a hrava geologie ostrova.
Saleaula Lava Church|Samoa|Oceanie|-13.450|-172.350|79|katastrofa|sopky,ritual|Kostel pohlceny lavou na Savai'i, citelna stopa erupce a vesnicke pameti.
Piula Cave Pool|Samoa|Oceanie|-13.875|-171.682|74|podzemi|podzemi,voda|Sladkovodni jeskynni bazen u pobrezi, pruzracna voda a klidna podzemni vrstva.
Mele Cascades|Vanuatu|Oceanie|-17.690|168.265|74|priroda|voda,ostrov|Kaskady u Port Vily, tropicka voda, vapencove stupne a ostrovni turisticka trasa.
Millennium Cave Vanuatu|Vanuatu|Oceanie|-15.550|167.170|76|podzemi|podzemi,prirodni-labyrint|Jeskynni a kanonova trasa na Espiritu Santo, fyzicky narocne podzemi a voda.
Champagne Beach Santo|Vanuatu|Oceanie|-15.138|167.120|73|priroda|oceany,ostrov|Bila plaz ostrova Santo, mene temny, ale silny geograficky bod laguny a koralu.
Chief Roi Mata Cave|Vanuatu|Oceanie|-17.630|168.270|78|legenda|umrti,ritual|Jeskynni a pohrebni krajina spojena s Roi Matou, tabu, ustni tradice a ostrovni moc.
Lake Lalolalo|Wallis a Futuna|Oceanie|-13.306|-176.205|76|priroda|sopky,voda|Kruhove kraterove jezero Wallisu, strme zelene steny a posvatny dojem izolace.
Talietumu Fortress|Wallis a Futuna|Oceanie|-13.297|-176.176|77|legenda|pevnost,archeologie|Tongska pevnost na Wallisu, kamenne zdi a stopa regionalni moci.
Marae Taputapuatea Bora Bora|Francouzska Polynesie|Oceanie|-16.499|-151.741|75|legenda|ritual,ostrov|Mensi ritualni lokality Spolecenskych ostrovu, kamenne platformy a navigacni pamet.
Belvedere Moorea|Francouzska Polynesie|Oceanie|-17.539|-149.830|74|priroda|hory,ostrov|Vyhlidka do sopecneho nitra Moorey, ostre hrebene a zalivy jako prirodni mapa.
Fatu Hiva Hanavave Bay|Francouzska Polynesie|Oceanie|-10.465|-138.670|76|priroda|ostrov,oceany|Zaliv Panen na Markezach, dramaticke skalni tvary a odlehla moreplavecka krajina.
Ua Pou Basalt Spires|Francouzska Polynesie|Oceanie|-9.400|-140.050|77|priroda|prirodni-anomalie,ostrov|Cedicove spire ostrova Ua Pou, sopecne sloupy vystupujici nad tropickou zeleni.
Pitcairn Bounty Bay|Pitcairnovy ostrovy|Oceanie|-25.067|-130.100|79|legenda|ostrov,media|Odlehla kotva vzpoury na Bounty, mala komunita a izolovana historicka pamet.
Henderson Island|Pitcairnovy ostrovy|Oceanie|-24.367|-128.317|76|priroda|ostrov,opustene|Neobydleny koralovy ostrov, prirodni izolace a varovny obraz plastoveho znecisteni.
`.trim().split("\n").map(row)
  }
];

groups.forEach((group) => {
  group.localizedSlugs = {
    cs: group.slug,
    en: group.slug.replace("sestadvacata-vlna", "twenty-sixth-wave"),
    de: group.slug.replace("sestadvacata-vlna", "sechsundzwanzigste-welle"),
    es: group.slug.replace("sestadvacata-vlna", "vigesimosexta-ola"),
    fr: group.slug.replace("sestadvacata-vlna", "vingt-sixieme-vague")
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
        body: "Sestadvacata vlna rozsiruje mapu o dalsi regiony, ktere dobre funguji jako samostatne body: maji jasnou polohu, silny motiv a prostor pro presnejsi lokalni zdroje."
      },
      {
        heading: "Jak s obsahem pracovat",
        body: "Profily jsou seed vrstva pro dalsi redakcni rozvoj. U kazdeho mista je potreba casem doplnit lepsi lokalni zdroj, pristupova pravidla a pripadne licencovanou fotografii."
      },
      {
        heading: "Dalsi krok",
        body: "Prioritu maji mista s vysokym indexem tajemna, citlivou historii nebo dobrym tematickym napojenim na podzemi, pevnosti, ztracena mesta a prirodni anomalie."
      }
    ],
    sources: ["wikidata", "wikipedia", "openstreetmap", "wikimedia-commons"]
  });
});
writeJson(articlesPath, Array.from(articlesById.values()));

console.log(`Upserted ${inserted.length} new places (${rawPlaces.length} raw) and ${groups.length} articles.`);
