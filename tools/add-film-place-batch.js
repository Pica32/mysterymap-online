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

function filmPlace({
  id,
  name,
  country,
  continent,
  lat,
  lon,
  lead,
  film,
  officialUrl,
  wikiUrl,
  wikidataUrl,
  extraSource,
  index = 74,
  image
}) {
  return {
    id,
    slug: id,
    localizedSlugs: {
      cs: id,
      en: id,
      de: id,
      es: id,
      fr: id
    },
    detailPath: `/mista/${id}/`,
    nazev: name,
    zeme: country,
    kontinent: continent,
    lead,
    gps: { lat, lon },
    kategorie: ["filmova-lokace", "legenda"],
    temata: ["film", "nataceni", "popkultura"],
    indexTajemna: index,
    paranormalniAktivita: "kulturni aura",
    historickaDolozenost: "velmi dobra",
    nebezpecnost: "nizka",
    pristupnost: "overit pred cestou",
    atmosfera: 4.2,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: `${name} je misto, kde se realna krajina premenila v obraz, ktery lide poznavaji z filmu ${film}. Tajemstvi tady nestoji na dukazu nadprirozena, ale na silnem posunu mezi skutecnym prostorem a filmovou pameti.`,
      historie: `Lokalita existovala davno pred natacenim a ma vlastni kulturni nebo prirodni kontext. Filmova vrstva je proto popsana oddelene od dolozene historie mista, aby bylo jasne, co patri k realnemu mistu a co k produkcni interpretaci.`,
      legenda: `Fanousci si misto spojuji se scenami, rekvizitami, uhly kamery a atmosferou filmu ${film}. V popularni kulture se tak z obycejne navstevy stava hledani konkretniho zaberu a pocitu, ktery si divak pamatuje.`,
      paranormalni: `Paranormalni vrstva je zde chapana jako kulturni a emocni ozvena: pocit vstupu do fikcniho sveta, silna deja-vu zkusenost, fanouskovske ritualy a opakovane vypraveni o tom, ze misto pusobi jinak nez bezna turisticka lokace.`,
      skepticke: `Skepticke vysvetleni je prime: dojem vytvari filmova hudba, strih, kompozice obrazu, opakovane sledovani a ocekavani navstevnika. Stranka proto netvrdi nadprirozeno, ale mapuje, proc je misto kulturne magneticke.`
    },
    praktickeInfo: `Pred navstevou ${name} over aktualni pristup, vstupne, mistni pravidla a sezonni omezeni. GPS souradnice slouzi k orientaci, ne jako povoleni vstupu do soukromych nebo chranenych casti.`,
    obrazky: image ? [image] : [],
    audio: [],
    zdroje: [
      { nazev: `Official / authority source: ${name}`, url: officialUrl, licence: "official website" },
      { nazev: `Wikipedia: ${name}`, url: wikiUrl, licence: "CC BY-SA" },
      { nazev: `Wikidata: ${name}`, url: wikidataUrl, licence: "CC0" },
      ...(extraSource ? [extraSource] : [])
    ],
    pribehy: [
      {
        nazev: "Zaber, ktery zmenil misto",
        text: `Hlavni pribeh lokace stoji na tom, ze divak pozna krajinu podle filmove pameti. ${name} tak funguje jako brana mezi realnou mapou a vypravenim filmu ${film}.`
      },
      {
        nazev: "Jak misto overovat",
        text: "U filmovych mist je dulezite oddelit skutecne dolozene nataceni od fanouskovskych domnenek. Proto stranka drzi zdroje, GPS a prakticke informace vedle interpretace."
      }
    ]
  };
}

const filmPlaces = [
  filmPlace({
    id: "hobbiton-movie-set",
    name: "Hobbiton Movie Set",
    country: "Novy Zeland",
    continent: "Oceanie",
    lat: -37.8721,
    lon: 175.6829,
    lead: "Zeleny filmovy Shire u Matamaty, kde se Tolkienuv svet zmenil v turisticky citelnou krajinu.",
    film: "The Lord of the Rings a The Hobbit",
    officialUrl: "https://www.hobbitontours.com/",
    wikiUrl: "https://en.wikipedia.org/wiki/Hobbiton_Movie_Set",
    wikidataUrl: "https://www.wikidata.org/wiki/Q5864281",
    index: 78
  }),
  filmPlace({
    id: "skellig-michael",
    name: "Skellig Michael",
    country: "Irsko",
    continent: "Evropa",
    lat: 51.7711,
    lon: -10.5400,
    lead: "Klaster na skalnim ostrove, ktery moderni publikum zna take jako filmovy obraz Ahch-To.",
    film: "Star Wars",
    officialUrl: "https://whc.unesco.org/en/list/757/",
    wikiUrl: "https://en.wikipedia.org/wiki/Skellig_Michael",
    wikidataUrl: "https://www.wikidata.org/wiki/Q193358",
    index: 83
  }),
  filmPlace({
    id: "dubrovnik-old-town",
    name: "Dubrovnik Old Town",
    country: "Chorvatsko",
    continent: "Evropa",
    lat: 42.6403,
    lon: 18.1105,
    lead: "Historicke hradby a ulice, ktere se pro mnoho divaku spojily s Kralovym pristavistem.",
    film: "Game of Thrones",
    officialUrl: "https://whc.unesco.org/en/list/95/",
    wikiUrl: "https://en.wikipedia.org/wiki/Dubrovnik",
    wikidataUrl: "https://www.wikidata.org/wiki/Q1722",
    index: 76
  }),
  filmPlace({
    id: "petra-treasury",
    name: "Al-Khazneh, Petra",
    country: "Jordansko",
    continent: "Asie",
    lat: 30.3285,
    lon: 35.4444,
    lead: "Skalni fasada Petry, kterou popkultura silne propojila s dobrodruznym hledanim ztracene relikvie.",
    film: "Indiana Jones and the Last Crusade",
    officialUrl: "https://whc.unesco.org/en/list/326/",
    wikiUrl: "https://en.wikipedia.org/wiki/Al-Khazneh",
    wikidataUrl: "https://www.wikidata.org/wiki/Q118138",
    index: 84,
    image: {
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Al_Khazneh_Petra_edit_2.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Al_Khazneh_Petra_edit_2.jpg",
      author: "Bernard Gagnon",
      license: "CC BY-SA 3.0"
    }
  }),
  filmPlace({
    id: "kualoa-ranch",
    name: "Kualoa Ranch",
    country: "Spojene staty",
    continent: "Severni Amerika",
    lat: 21.5200,
    lon: -157.8370,
    lead: "Udoli na Oahu, kde se tropicka krajina opakovane menila ve filmovy svet dinosauru a dobrodruzstvi.",
    film: "Jurassic Park a Jurassic World",
    officialUrl: "https://www.kualoa.com/",
    wikiUrl: "https://en.wikipedia.org/wiki/Kualoa_Ranch",
    wikidataUrl: "https://www.wikidata.org/wiki/Q6444382",
    index: 75
  }),
  filmPlace({
    id: "glenfinnan-viaduct",
    name: "Glenfinnan Viaduct",
    country: "Spojene kralovstvi",
    continent: "Evropa",
    lat: 56.8763,
    lon: -5.4316,
    lead: "Skotsky viadukt, ktery se diky filmum stal symbolem cesty vlakem do kouzelnickeho sveta.",
    film: "Harry Potter",
    officialUrl: "https://www.nts.org.uk/visit/places/glenfinnan-monument",
    wikiUrl: "https://en.wikipedia.org/wiki/Glenfinnan_Viaduct",
    wikidataUrl: "https://www.wikidata.org/wiki/Q559062",
    index: 79
  })
];

const article = {
  id: "filmove-lokace-mapa-slavnych-zaberu",
  slug: "filmove-lokace-mapa-slavnych-zaberu",
  localizedSlugs: {
    cs: "filmove-lokace-mapa-slavnych-zaberu",
    en: "movie-locations-map-famous-scenes",
    de: "filmorte-karte-beruehmte-szenen",
    es: "mapa-lugares-cine-escenas-famosas",
    fr: "carte-lieux-tournage-scenes-cultes"
  },
  title: "Filmove lokace na mape: kde se realna mista zmenila ve slavne zabery",
  description: "Mapa filmovych lokaci propojuje skutecna mista, filmovou pamet, GPS, zdroje a prakticke informace bez kopirovani cizich databazi.",
  category: "filmova-lokace",
  themes: ["film", "nataceni", "mapa"],
  relatedPlaceIds: filmPlaces.map((place) => place.id),
  sections: [
    {
      heading: "Proc filmove lokace patri na MysteryMap",
      body: "Filmove misto neni jen turisticky bod. Je to prostor, kde se realna geografie potkava s pameti divaka. MysteryMap proto drzi vedle sebe skutecne souradnice, kulturni pribeh, prakticky pristup a jasne oddelene zdroje."
    },
    {
      heading: "Jak overovat slavny zaber",
      body: "U kazde lokace je nutne rozlisit oficialni informaci o nataceni, fanouskovsky odhad a obecnou popularni asociaci. Stranka ma fungovat jako mapa a rozcestnik, ne jako neovereny seznam scen."
    },
    {
      heading: "Fotografie a filmove zabery",
      body: "Samotne filmove snimky jsou vetsinou chranene autorskym pravem. Proto web preferuje vlastni texty, volne licencovane fotografie mista, odkazy na zdroje a zalozni hero vizual, pokud neni k dispozici bezpecne pouzitelna fotografie."
    },
    {
      heading: "Dalsi rozsireni",
      body: "Databazi lze rozsirovat pres Wikidata, UNESCO, oficialni turisticke weby, OpenStreetMap a licencovane fotografie z Wikimedia Commons. Priorita je kvalita, licence, jazykove slugy a pevna SEO struktura."
    }
  ],
  sources: ["wikidata", "wikipedia", "wikimedia-commons", "unesco-whc", "official-site"]
};

const places = readJson(placesPath);
const byId = new Map(places.map((place) => [place.id, place]));
filmPlaces.forEach((place) => byId.set(place.id, place));
writeJson(placesPath, Array.from(byId.values()));

const articles = readJson(articlesPath);
const articlesById = new Map(articles.map((item) => [item.id, item]));
articlesById.set(article.id, article);
writeJson(articlesPath, Array.from(articlesById.values()));

console.log(`Upserted ${filmPlaces.length} film places and 1 film article.`);
