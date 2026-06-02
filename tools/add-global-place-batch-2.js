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
    historickaDolozenost: item.evidence || "overitelna zakladni identita",
    nebezpecnost: item.risk || "overit lokalne",
    pristupnost: item.access || "overit pred cestou",
    atmosfera: item.atmosphere || 4.0,
    nocniVhodnost: Boolean(item.night),
    vhodneProDeti: item.kids !== false,
    popisy: {
      zahada: `${item.name} rozsiruje svetovou databazi MysteryMap jako misto s jasnou polohou a silnou verejnou asociaci: ${item.lead} Profil je postaveny jako overitelny seed pro dalsi redakcni praci.`,
      historie: "Historicka vrstva popisuje stabilni identitu mista a jeho verejne dohledatelny kontext. U velkeho globalniho importu je hlavni udrzet souradnice, zakladni popis a zdroje pripravené k dalsimu overovani.",
      legenda: "Legendova vrstva zachycuje kulturni pamet, opakovane vypraveni, cestovatelskou reputaci nebo spornou interpretaci. Tvrzeni nejsou prezentovana jako dukaz, ale jako tema k overeni.",
      paranormalni: "Paranormalni cast zviditelnuje to, co lide s mistem spojuji: stiny, zjeveni, prokleti, anomalie, ritualy, opustene stavby, zahadne zvuky nebo pocit posvatneho prostoru podle typu lokace.",
      skepticke: "Skepticky ramec drzi prirodni, historicka, psychologicka, turisticka a medialni vysvetleni oddelene od legend. To pomaha ctenarum i vyhledavacum pochopit, co je fakt a co interpretace."
    },
    praktickeInfo: `Pred navstevou ${item.name} over aktualni pristup, pravni omezeni, mistni pravidla, sezonu, bezpecnost a respekt k lokalni kulture. GPS neni povoleni ke vstupu.`,
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: `Wikipedia: ${item.name}`, url: `https://en.wikipedia.org/wiki/${encodeURIComponent(item.name.replaceAll(" ", "_"))}`, licence: "CC BY-SA / reference discovery" },
      { nazev: `Wikidata search: ${item.name}`, url: `https://www.wikidata.org/w/index.php?search=${encodeURIComponent(item.name)}`, licence: "CC0 / entity discovery" },
      { nazev: "OpenStreetMap search", url: `https://www.openstreetmap.org/search?query=${encodeURIComponent(`${item.name} ${item.country}`)}`, licence: "ODbL / map verification" }
    ],
    pribehy: [
      {
        nazev: "Globalni uzel",
        text: `${item.name} je vhodny uzel pro mapu diky kombinaci verejne dohledatelne polohy, silneho motivu ${themes.join(", ")} a potencialu pro dalsi lokalni zdroje.`
      },
      {
        nazev: "Dalsi overeni",
        text: "Seedovy profil je zaklad. Dalsi redakcni kolo ma doplnit mistni instituce, presnejsi historii, licencovane fotografie, alternativni nazvy a jazykove nuance."
      }
    ]
  };
}

const rawPlaces = [
  { name: "Chateau de Chillon", country: "Svycarsko", continent: "Evropa", lat: 46.4142, lon: 6.9275, score: 74, category: "hrad", themes: ["hrad", "legenda"], lead: "Jezerni hrad u Montreux, kde romanticka literatura a stredoveka architektura vytvorily silny genius loci." },
  { name: "Predjama Castle", country: "Slovinsko", continent: "Evropa", lat: 45.8150, lon: 14.1289, score: 83, category: "hrad", themes: ["hrad", "podzemi", "legenda"], lead: "Hrad vestaveny do skalni steny nad jeskyni, idealni spojeni obrany, labyrintu a loupeznicke legendy." },
  { name: "Postojna Cave", country: "Slovinsko", continent: "Evropa", lat: 45.7829, lon: 14.2036, score: 76, category: "podzemi", themes: ["podzemi", "prirodni-anomalie"], lead: "Rozsahly krasovy system se silnou podzemni atmosferou a dlouhou navstevnickou historii." },
  { name: "Buzludzha Monument", country: "Bulharsko", continent: "Evropa", lat: 42.7358, lon: 25.3936, score: 80, category: "legenda", themes: ["ztracena-mesta", "valka", "politika"], lead: "Futuristicka opustena stavba na horach, kde propaganda, ruina a postapokalypticky obraz splynuly dohromady." },
  { name: "Belogradchik Rocks", country: "Bulharsko", continent: "Evropa", lat: 43.6236, lon: 22.6836, score: 75, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Skalni formace a pevnost, kde priroda sama vytvari postavy vhodne pro mistni legendy." },
  { name: "Devil's Throat Cave", country: "Bulharsko", continent: "Evropa", lat: 41.6153, lon: 24.3797, score: 81, category: "podzemi", themes: ["dabel", "podzemi", "mytologie"], lead: "Jeskynni propast spojovana s orfickou symbolikou a predstavou vstupu do podsveti." },
  { name: "Monastery of Saint Naum", country: "Severni Makedonie", continent: "Evropa", lat: 40.9138, lon: 20.7417, score: 73, category: "legenda", themes: ["ritual", "mytologie"], lead: "Klaster u Ohridskeho jezera, kde poutni tradice a legenda svetce vytvareji posvatny bod mapy." },
  { name: "Devil's Town", country: "Srbsko", continent: "Evropa", lat: 42.9986, lon: 21.4075, score: 81, category: "priroda", themes: ["dabel", "prirodni-anomalie"], lead: "Erozni skalni veze s pekelnym nazvem a lokalni povesti o zkamenelych lidech." },
  { name: "Ossuary of Saint James Church Brno", country: "Cesko", continent: "Evropa", lat: 49.1967, lon: 16.6078, score: 78, category: "podzemi", themes: ["umrti", "podzemi"], lead: "Jedna z nejvetsich evropskych kostnic, kde se mestske podzemi meni v tichou pamet mrtvych." },
  { name: "Kost Castle", country: "Cesko", continent: "Evropa", lat: 50.4907, lon: 15.1357, score: 72, category: "hrad", themes: ["hrad", "legenda"], lead: "Goticky hrad v Ceskem raji s pevnostni atmosferou a dobrym napojenim na legendy krajiny." },
  { name: "Spiš Castle", country: "Slovensko", continent: "Evropa", lat: 49.0006, lon: 20.7683, score: 78, category: "hrad", themes: ["hrad", "mytologie"], lead: "Rozsahla zricenina na kopci, kde monumentalni ruina prirozene nese historicke i legendarni vrstvy." },
  { name: "Bojnice Castle", country: "Slovensko", continent: "Evropa", lat: 48.7797, lon: 18.5778, score: 74, category: "hrad", themes: ["duchove", "legenda"], lead: "Romanticky zamek s festivalovou a pohadkovou reputaci, vhodny pro jemnejsi tajemnou vrstvu." },
  { name: "Wawel Dragon's Den", country: "Polsko", continent: "Evropa", lat: 50.0540, lon: 19.9350, score: 78, category: "podzemi", themes: ["mytologie", "dabel"], lead: "Jeskyně pod Wawelem spojena s draci legendou a identitou Krakova." },
  { name: "Wieliczka Salt Mine", country: "Polsko", continent: "Evropa", lat: 49.9833, lon: 20.0547, score: 79, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Solny dul s podzemnimi kaplemi, kde prace, vira a hloubka vytvorily samostatny svet." },
  { name: "Wolf's Lair", country: "Polsko", continent: "Evropa", lat: 54.0797, lon: 21.4939, score: 82, category: "legenda", themes: ["valka", "tajne-spolecnosti"], lead: "Ruiny Hitlerova hlavniho stanu, kde betonova krajina nese temnou pamet valky a spiknuti." },
  { name: "Hill of Crosses", country: "Litva", continent: "Evropa", lat: 56.0153, lon: 23.4161, score: 76, category: "legenda", themes: ["ritual", "prokleti"], lead: "Poutni vrch tisicu krizu, kde odpor, vira a opakovany ritual vytvareji silne misto." },
  { name: "Kaali Crater", country: "Estonsko", continent: "Evropa", lat: 58.3725, lon: 22.6697, score: 79, category: "katastrofa", themes: ["impakt", "mytologie"], lead: "Meteoriticky krater na Saaremaa, kde vedecka udalost pronika do mytologicke pameti." },
  { name: "Suomenlinna", country: "Finsko", continent: "Evropa", lat: 60.1458, lon: 24.9875, score: 71, category: "legenda", themes: ["valka", "ostrov"], lead: "Ostrovni pevnost u Helsinek s vojenskou historii, tunely a dobrou strukturou pro tematicke mapy." },
  { name: "Borgvattnet Vicarage", country: "Svedsko", continent: "Evropa", lat: 63.4268, lon: 15.8275, score: 80, category: "legenda", themes: ["duchove", "prokleti"], lead: "Svedska fara s povesti jednoho z nejstrasidelnejsich domu Skandinavie." },
  { name: "Houska-like Ale's Stones", country: "Svedsko", continent: "Evropa", lat: 55.3829, lon: 14.0548, score: 73, category: "legenda", themes: ["ritual", "mytologie"], lead: "Kamenny lodni monument Ales Stenar s archeoastronomickou aurou a mytologickymi vyklady." },
  { name: "Trolltunga", country: "Norsko", continent: "Evropa", lat: 60.1240, lon: 6.7400, score: 72, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Skalni jazyk nad jezerem Ringedalsvatnet, dramaticka prirodni forma s mytickym nazvem." },
  { name: "Maeshowe", country: "Spojene kralovstvi", continent: "Evropa", lat: 58.9961, lon: -3.1889, score: 80, category: "podzemi", themes: ["ritual", "mytologie"], lead: "Neoliticka hrobka na Orknejich, kde zimni slunovrat a komorova architektura vytvareji presny ritualni prostor." },
  { name: "Callanish Stones", country: "Spojene kralovstvi", continent: "Evropa", lat: 58.1976, lon: -6.7451, score: 81, category: "legenda", themes: ["ritual", "mytologie"], lead: "Megaliticky komplex na ostrove Lewis, kde krajina, kameny a obloha vytvareji silny praveky motiv." },
  { name: "Dunwich", country: "Spojene kralovstvi", continent: "Evropa", lat: 52.2770, lon: 1.6310, score: 77, category: "katastrofa", themes: ["zmizeni", "oceany"], lead: "Ztracene stredoveke mesto na anglickem pobrezi, postupne pohlcene morem." },
  { name: "Carnac Stones", country: "Francie", continent: "Evropa", lat: 47.5926, lon: -3.0820, score: 80, category: "legenda", themes: ["ritual", "mytologie"], lead: "Obrovske rady menhiru v Bretani, kde pocet kamenu a nejistota ucelu vytvareji pravekou zahadu." },
  { name: "Mont Saint-Michel", country: "Francie", continent: "Evropa", lat: 48.6361, lon: -1.5115, score: 78, category: "legenda", themes: ["ritual", "mytologie"], lead: "Prilivovy ostrovni klaster, kde architektura, more a poutni tradice tvori ikonicke posvatne misto." },
  { name: "Lascaux Cave", country: "Francie", continent: "Evropa", lat: 45.0538, lon: 1.1700, score: 82, category: "podzemi", themes: ["ritual", "mytologie"], lead: "Jeskynni malby, kde se praveke umeni meni v jednu z nejstarsich zahad lidske predstavivosti." },
  { name: "Rennes-le-Chateau", country: "Francie", continent: "Evropa", lat: 42.9281, lon: 2.2633, score: 82, category: "legenda", themes: ["templari", "tajne-spolecnosti", "konspirace"], lead: "Vesnice proslavena modernimi teoriemi o pokladech, tajnych rodech a spornych historickych vazbach." },
  { name: "Glastonbury Tor", country: "Spojene kralovstvi", continent: "Evropa", lat: 51.1445, lon: -2.6997, score: 82, category: "priroda", themes: ["mytologie", "templari"], lead: "Kopec spjaty s artusovskymi legendami, krestanskou tradici i moderni spiritualitou." },
  { name: "Tintagel Castle", country: "Spojene kralovstvi", continent: "Evropa", lat: 50.6680, lon: -4.7590, score: 83, category: "hrad", themes: ["mytologie", "hrad"], lead: "Pobrezni hrad spojovany s krale Artusem, kde ruina a more posiluji legendu." },
  { name: "Avebury", country: "Spojene kralovstvi", continent: "Evropa", lat: 51.4286, lon: -1.8542, score: 80, category: "legenda", themes: ["ritual", "mytologie"], lead: "Megaliticky kruh a krajina, kde vesnice, valy a kameny tvori otevreny praveky komplex." },
  { name: "Newgrange", country: "Irsko", continent: "Evropa", lat: 53.6947, lon: -6.4755, score: 83, category: "podzemi", themes: ["ritual", "mytologie"], lead: "Praveka chodbova hrobka v Boyne Valley s presnym vztahem k zimnimu slunovratu." },
  { name: "Hill of Tara", country: "Irsko", continent: "Evropa", lat: 53.5780, lon: -6.6110, score: 78, category: "legenda", themes: ["mytologie", "ritual"], lead: "Krajina kralovske a mytologicke pameti, kde se politicka moc starych Irů spojuje s posvatnym prostorem." },
  { name: "Loch Ness", country: "Spojene kralovstvi", continent: "Evropa", lat: 57.3229, lon: -4.4244, score: 86, category: "priroda", themes: ["mytologie", "oceany"], lead: "Skotske jezero s nejslavnejsi moderni vodni nestvurou a vybornym skeptickym ramcem." },
  { name: "Oradour-sur-Glane", country: "Francie", continent: "Evropa", lat: 45.9333, lon: 1.0333, score: 84, category: "katastrofa", themes: ["valka", "umrti"], lead: "Zachovana zanikla obec jako pamatnik masakru, kde realna historie prebiji jakoukoli senzaci." },
  { name: "Pompeii", country: "Italie", continent: "Evropa", lat: 40.7507, lon: 14.4869, score: 84, category: "katastrofa", themes: ["sopky", "umrti"], lead: "Rimske mesto zachovane erupci Vesuvu, kde katastrofa doslova zakonzervovala kazdodenni zivot." },
  { name: "Herculaneum", country: "Italie", continent: "Evropa", lat: 40.8060, lon: 14.3482, score: 81, category: "katastrofa", themes: ["sopky", "umrti"], lead: "Mesto znicene Vesuvem, komornejsi a casto jeste intenzivnejsi protiklad k Pompejim." },
  { name: "Sassi di Matera", country: "Italie", continent: "Evropa", lat: 40.6664, lon: 16.6043, score: 76, category: "podzemi", themes: ["ztracena-mesta", "podzemi"], lead: "Skalni obydli a ulice Matery, kde se lidske osidleni zarezava primo do kamene." },
  { name: "Nuraghe Su Nuraxi", country: "Italie", continent: "Evropa", lat: 39.7050, lon: 8.9910, score: 78, category: "legenda", themes: ["mytologie", "ztracena-mesta"], lead: "Nuragsky kamenny komplex na Sardinii, kde lokalni civilizace zanechala monumentalni a stale tajemnou architekturu." },
  { name: "Delphi", country: "Recko", continent: "Evropa", lat: 38.4824, lon: 22.5010, score: 84, category: "legenda", themes: ["mytologie", "ritual"], lead: "Anticka vestirna, kde politicka rozhodnuti, posvatny prostor a prirodni krajina vytvorily centrum proroctvi." },
  { name: "Knossos", country: "Recko", continent: "Evropa", lat: 35.2989, lon: 25.1631, score: 82, category: "legenda", themes: ["mytologie", "ztracena-mesta"], lead: "Minojsky palac spojovany s labyrintem, Minotaurem a pocatky evropske mytologicke imaginace." },
  { name: "Mycenae", country: "Recko", continent: "Evropa", lat: 37.7308, lon: 22.7561, score: 80, category: "legenda", themes: ["mytologie", "umrti"], lead: "Kyklopske hradby a kralovske hroby, kde archeologie prirozene komunikuje s Homerskou legendou." },
  { name: "Acropolis of Athens", country: "Recko", continent: "Evropa", lat: 37.9715, lon: 23.7257, score: 78, category: "legenda", themes: ["mytologie", "ritual"], lead: "Vrchol atenske identity, kde chramova architektura a mytologie tvori jeden z nejctivejsich symbolu Evropy." },
  { name: "Kayakoy", country: "Turecko", continent: "Asie", lat: 36.5740, lon: 29.0910, score: 78, category: "ztracena-mesta", themes: ["zmizeni", "umrti"], lead: "Opustena vesnice v Lykii, kde historicky odchod obyvatel zanechal tiche kamenne mesto." },
  { name: "Ani", country: "Turecko", continent: "Asie", lat: 40.5064, lon: 43.5725, score: 83, category: "ztracena-mesta", themes: ["ztracena-mesta", "valka"], lead: "Ruiny nekdejsi armenske metropole na hranici, kde prazdnota a monumenty vytvareji velke mesto duchu." },
  { name: "Sumela Monastery", country: "Turecko", continent: "Asie", lat: 40.6890, lon: 39.6580, score: 77, category: "legenda", themes: ["ritual", "podzemi"], lead: "Klaster nalepeny na skale v Pontskych horach, kde izolace posiluje duchovni a vizualni dojem." },
  { name: "Masada", country: "Izrael", continent: "Asie", lat: 31.3156, lon: 35.3539, score: 82, category: "katastrofa", themes: ["valka", "umrti"], lead: "Pevnost nad Mrtvym morem spojena s oblehanim, odporem a dramatickou narodni pameti." },
  { name: "Dead Sea", country: "Izrael", continent: "Asie", lat: 31.5590, lon: 35.4732, score: 75, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Extrémne slane jezero spojene s geologii, biblickou krajinou a prirodni zvlastnosti." },
  { name: "Qumran Caves", country: "Palestina", continent: "Asie", lat: 31.7417, lon: 35.4583, score: 80, category: "podzemi", themes: ["ritual", "tajne-spolecnosti"], lead: "Jeskynni oblast spojena s nalezy svitku, kde archeologie, nabozenstvi a tajemstvi textu tvori silne tema." },
  { name: "Baalbek", country: "Libanon", continent: "Asie", lat: 34.0067, lon: 36.2039, score: 83, category: "legenda", themes: ["konspirace", "mytologie"], lead: "Monumentalni anticky komplex s obrovskymi kamennymi bloky, magnet pro archeologii i alternativni vyklady." },
  { name: "Byblos", country: "Libanon", continent: "Asie", lat: 34.1230, lon: 35.6519, score: 76, category: "legenda", themes: ["mytologie", "ztracena-mesta"], lead: "Jedno z nejstarsich trvale osidlenych mest, kde se pismo, obchod a mytologie setkavaji na pobrezi." },
  { name: "Palmyra", country: "Syrie", continent: "Asie", lat: 34.5500, lon: 38.2667, score: 85, category: "katastrofa", themes: ["valka", "ztracena-mesta"], lead: "Pousti mesto s antickou slávou a moderni destrukci, ktere vyzaduje presne a citlive zpracovani." },
  { name: "Hegra", country: "Saudska Arabie", continent: "Asie", lat: 26.8040, lon: 37.9550, score: 80, category: "legenda", themes: ["ztracena-mesta", "umrti"], lead: "Nabatejske hrobky v pousti, pribuzne Petre, ale s vlastni izolovanou monumentalitou." },
  { name: "Alamut Castle", country: "Iran", continent: "Asie", lat: 36.4450, lon: 50.5860, score: 84, category: "hrad", themes: ["tajne-spolecnosti", "vrazdy"], lead: "Horska pevnost spojovana s asasiny, strategii, legendami a deformovanou evropskou predstavivosti." },
  { name: "Persepolis", country: "Iran", continent: "Asie", lat: 29.9350, lon: 52.8916, score: 81, category: "ztracena-mesta", themes: ["ztracena-mesta", "mytologie"], lead: "Ceremonialni centrum Achajmenovcu, kde ruina imperia pusobi jako kamenny archiv moci." },
  { name: "Shahr-e Sukhteh", country: "Iran", continent: "Asie", lat: 30.5960, lon: 61.3280, score: 79, category: "ztracena-mesta", themes: ["ztracena-mesta", "umrti"], lead: "Spalene mesto v Sistanu, archeologicky uzel staroveke civilizace s vyraznym jmenem i atmosferou." },
  { name: "Tower of Silence Yazd", country: "Iran", continent: "Asie", lat: 31.8200, lon: 54.3430, score: 80, category: "legenda", themes: ["umrti", "ritual"], lead: "Zoroastrijske pohrebni veze u Yazdu, kde ritual smrti a poustni krajina vytvareji silny obraz." },
  { name: "Babylon", country: "Irak", continent: "Asie", lat: 32.5364, lon: 44.4208, score: 84, category: "ztracena-mesta", themes: ["mytologie", "ztracena-mesta"], lead: "Mesto biblicke i historicke imaginace, kde realna archeologie souperi s obrovskou mytologickou projekci." },
  { name: "Ur", country: "Irak", continent: "Asie", lat: 30.9631, lon: 46.1031, score: 80, category: "ztracena-mesta", themes: ["mytologie", "ritual"], lead: "Sumerske mesto a zikkurat, kde se pocatky urbanismu propojuji s nabozenstvim a kralovskou pameti." },
  { name: "Lalish", country: "Irak", continent: "Asie", lat: 36.7710, lon: 43.3050, score: 78, category: "legenda", themes: ["ritual", "mytologie"], lead: "Posvatne centrum jezidu, ktere vyzaduje respekt k zive tradici a presne oddeleni faktu od exotizace." },
  { name: "Minaret of Jam", country: "Afghanistan", continent: "Asie", lat: 34.3964, lon: 64.5158, score: 82, category: "ztracena-mesta", themes: ["ztracena-mesta", "valka"], lead: "Osamely minaret v horskem udoli, spojeny se ztracenou ghuridskou metropoli a ohrozenym dedictvim." },
  { name: "Bamiyan Buddhas", country: "Afghanistan", continent: "Asie", lat: 34.8320, lon: 67.8250, score: 86, category: "katastrofa", themes: ["valka", "ritual"], lead: "Prazdne niky po znicenych sochach Buddhu, kde absence sama nese pamet kulturni katastrofy." },
  { name: "Merv", country: "Turkmenistan", continent: "Asie", lat: 37.6642, lon: 62.1742, score: 80, category: "ztracena-mesta", themes: ["ztracena-mesta", "valka"], lead: "Ruiny velkeho mesta Hedvabne stezky, kde poust uchovala vrstvy imperii a zaniklych ulic." },
  { name: "Samarkand Registan", country: "Uzbekistan", continent: "Asie", lat: 39.6542, lon: 66.9750, score: 78, category: "legenda", themes: ["ritual", "tajne-spolecnosti"], lead: "Monumentalni namesti madras, kde geometrie, uceni a obchodni historie tvori symbol Stredni Asie." },
  { name: "Issyk Kul", country: "Kyrgyzstan", continent: "Asie", lat: 42.4540, lon: 77.2780, score: 75, category: "priroda", themes: ["oceany", "mytologie"], lead: "Velke horske jezero opredene pribehy o zatopenych sidlech, pokladech a neobvykle slane vode." },
  { name: "Uplistsikhe", country: "Gruzie", continent: "Asie", lat: 41.9675, lon: 44.2075, score: 78, category: "podzemi", themes: ["ztracena-mesta", "podzemi"], lead: "Skalni mesto v Gruzii, kde se cesty, chramy a obydli zarezavaji primo do kamene." },
  { name: "Vardzia", country: "Gruzie", continent: "Asie", lat: 41.3817, lon: 43.2844, score: 81, category: "podzemi", themes: ["podzemi", "ritual"], lead: "Jeskynni klasterni mesto v utesu, kde obrana, vira a skryta architektura tvori dramaticky celek." },
  { name: "Khor Virap", country: "Armenie", continent: "Asie", lat: 39.8783, lon: 44.5764, score: 77, category: "legenda", themes: ["ritual", "mytologie"], lead: "Klaster s pohledem na Ararat, spojeny s pocatky armenske krestanske identity a vezenskou legendou." },
  { name: "Geghard Monastery", country: "Armenie", continent: "Asie", lat: 40.1400, lon: 44.8186, score: 79, category: "podzemi", themes: ["ritual", "podzemi"], lead: "Klaster castecne vytesany do skaly, kde relikvie, zvuk a horske udoli vytvareji silny sakralni prostor." },
  { name: "Mada'in Saleh", country: "Saudska Arabie", continent: "Asie", lat: 26.8040, lon: 37.9550, score: 79, category: "legenda", themes: ["ztracena-mesta", "umrti"], lead: "Pouštní nekropole Hegra, kamenne hrobky a dlouha obchodni pamet Nabatejcu." },
  { name: "Sana'a Old City", country: "Jemen", continent: "Asie", lat: 15.3556, lon: 44.2081, score: 80, category: "legenda", themes: ["ztracena-mesta", "valka"], lead: "Historicke mesto s vezovymi domy, kde zive dedictvi stoji proti ohrozeni a izolaci." },
  { name: "Socotra Dragon Blood Trees", country: "Jemen", continent: "Asie", lat: 12.4634, lon: 53.8237, score: 83, category: "priroda", themes: ["prirodni-anomalie", "mytologie"], lead: "Ostrovni krajina se stromy draci krve, ktera vypada jako prirodni svet mimo beznou mapu." },
  { name: "Dilmun Burial Mounds", country: "Bahrajn", continent: "Asie", lat: 26.1600, lon: 50.5400, score: 76, category: "legenda", themes: ["umrti", "mytologie"], lead: "Rozsahle pohrebni mohyly spojene s civilizaci Dilmun a starovekou predstavou posvatne krajiny." }
];

const places = readJson(placesPath);
const byId = new Map(places.map((place) => [place.id, place]));
rawPlaces.map(profile).forEach((place) => byId.set(place.id, place));
writeJson(placesPath, Array.from(byId.values()));

const articles = readJson(articlesPath);
const article = {
  id: "evropa-asie-zahadna-mista-druha-vlna",
  slug: "evropa-asie-zahadna-mista-druha-vlna",
  localizedSlugs: {
    cs: "evropa-asie-zahadna-mista-druha-vlna",
    en: "europe-asia-mystery-places-second-wave",
    de: "europa-asien-raetselorte-zweite-welle",
    es: "europa-asia-lugares-misteriosos-segunda-ola",
    fr: "europe-asie-lieux-mysterieux-deuxieme-vague"
  },
  title: "Evropa a Asie: druha velka vlna zahadnych mist",
  description: "Druha velka davka pro MysteryMap pridava hrady, podzemi, ruiny, poutni mista, prirodni anomalie a katastroficka mista napric Evropou a Asii.",
  category: "legenda",
  themes: ["mapa", "podzemi", "mytologie", "ztracena-mesta"],
  relatedPlaceIds: rawPlaces.slice(0, 30).map((item) => slugify(item.name)),
  sections: [
    {
      heading: "Proc druha vlna miri na Evropu a Asii",
      body: "Evropa a Asie maji hustou sit hradu, ruin, podzemnich mist, poutnich center a archeologickych lokalit. To jsou mista, ktera se dobre propojuji s kategoriemi, tematy a jazykovymi landing pages."
    },
    {
      heading: "Co je hotove a co je seed",
      body: "Kazdy profil ma GPS, zdrojovou stopu, kategorie, temata a vlastni detail. Cast textu je seedovy redakcni zaklad, ktery se ma postupne vylepsovat lokalnimi zdroji a fotografiemi s jasnou licenci."
    },
    {
      heading: "Jak se bude zvetsovat objem bez kopirovani",
      body: "Objem se da zvetsovat po kontinentech a typech mist. Nebereme cizi databazi jako textovou kopii; stavime vlastni katalog z verejne overitelnych zdroju, strukturovanych dat a redakcnich sablon."
    }
  ],
  sources: ["wikidata", "wikipedia", "openstreetmap", "unesco-whc"]
};
const articlesById = new Map(articles.map((item) => [item.id, item]));
articlesById.set(article.id, article);
writeJson(articlesPath, Array.from(articlesById.values()));

console.log(`Upserted ${rawPlaces.length} second-wave places and 1 article.`);
