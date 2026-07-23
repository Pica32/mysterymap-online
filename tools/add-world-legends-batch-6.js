const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const placesPath = path.join(root, "data", "mista.json");
const articlesPath = path.join(root, "data", "articles.json");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8").replace(/^﻿/, ""));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

const newPlaces = [
  {
    id: "cellular-jail-andaman",
    slug: "cellular-jail-andaman",
    localizedSlugs: { cs: "cellular-jail-andaman", en: "cellular-jail-andaman", de: "cellular-jail-andaman", es: "cellular-jail-andaman", fr: "cellular-jail-andaman" },
    detailPath: "/mista/cellular-jail-andaman/",
    nazev: "Cellular Jail (Kala Pani)",
    zeme: "Indie",
    kontinent: "Asie",
    lead: "Britská kolonialní věznice na odlehlých Andamanských ostrovech, kde 'černá voda' znamenala pro indické vězně ztrátu kasty i naděje na návrat.",
    gps: { lat: 11.675, lon: 92.748 },
    kategorie: ["veznice", "historie"],
    indexTajemna: 84,
    paranormalniAktivita: "lidová tradice o utrpení vězňů, historicky doložené kruté podmínky",
    historickaDolozenost: "výborná",
    nebezpecnost: "nízká",
    pristupnost: "placený vstup, večerní zvukově-světelná show",
    atmosfera: 4.3,
    nocniVhodnost: true,
    vhodneProDeti: false,
    popisy: {
      zahada: "Na odlehlých Andamanských ostrovech postavili Britové mezi lety 1890 a 1906 věznici s 696 samostatnými celami uspořádanými do sedmi křídel do hvězdy - stavbu, jejíž samotné jméno v hindštině znamenalo pro indické vězně horší trest než smrt.",
      historie: "Cellular Jail v Port Blairu sloužila britské koloniální správě k věznění a trestání politických vězňů a bojovníků za nezávislost Indie. Radiální sedmikřídlá konstrukce s naprosto izolovanými celami měla znemožnit jakoukoli komunikaci mezi vězni. Mezi vězněnými byli i významní bojovníci za nezávislost, včetně bratrů Savarkarových, Batukéšvara Dutta nebo Fazl-e-Haq Khairabadiho.",
      legenda: "Přezdívka 'Kala Pani', tedy 'černá voda', odkazovala na hinduistickou představu, že překročení moře znamená ztrátu kasty a společenského postavení - pro řadu indických vězňů tak bylo samotné poslání na ostrovy trestem horším než poprava, protože znamenalo definitivní vyloučení z domovské komunity.",
      paranormalni: "Vězni čelili nucené práci, samovazbě v klaustrofobických celách, okovům a krutým tělesným trestům - mezi lety 1932 a 1937 zde proběhly opakované hromadné hladovky jako forma odporu proti podmínkám věznice.",
      skepticke: "Utrpení vězňů je historicky podrobně zdokumentované dobovými záznamy, nejde o žádnou zveličenou pověst - dnes věznice slouží jako národní památník připomínající oběti a odhodlání bojovníků za indickou nezávislost, ne jako pouhá strašidelná atrakce."
    },
    praktickeInfo: "Věznice je přístupná s placeným vstupem, večer se koná zvukově-světelná show vyprávějící historii místa, doporučuje se počítat s emocionálně náročnou návštěvou vzhledem k historii krutého zacházení.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedia: Cellular Jail", url: "https://en.wikipedia.org/wiki/Cellular_Jail", licence: "CC BY-SA" },
      { nazev: "Wikidata: Cellular Jail", url: "https://www.wikidata.org/wiki/Q3345501", licence: "CC0" },
      { nazev: "UNESCO Tentative List - Cellular Jail", url: "https://whc.unesco.org/en/tentativelists/5888/", licence: "oficiální zdroj / UNESCO dokumentace" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Cellular%20Jail%20Port%20Blair", licence: "ODbL" }
    ],
    temata: ["veznice", "politika", "valka"],
    pribehy: [
      { nazev: "Trest horší než smrt", text: "Přezdívka 'černá voda' odkazovala na hinduistickou víru, že překročení moře znamená ztrátu kasty - pro mnohé vězně byl proto samotný převoz na ostrovy horším trestem než poprava." },
      { nazev: "Hladovky jako odpor", text: "Mezi lety 1932 a 1937 vězni opakovaně vyhlašovali hromadné hladovky jako formu protestu proti krutým podmínkám a zacházení." }
    ]
  },
  {
    id: "karni-mata-temple",
    slug: "karni-mata-temple",
    localizedSlugs: { cs: "chram-karni-mata", en: "karni-mata-temple", de: "karni-mata-tempel", es: "templo-karni-mata", fr: "temple-karni-mata" },
    detailPath: "/mista/karni-mata-temple/",
    nazev: "Chrám Karni Mata",
    zeme: "Indie",
    kontinent: "Asie",
    lead: "Rádžastánský chrám, kde se o dvacet tisíc posvátných krys stará jako o vlastní předky - protože podle legendy jsou to právě oni.",
    gps: { lat: 27.79056, lon: 73.34083 },
    kategorie: ["legenda"],
    indexTajemna: 77,
    paranormalniAktivita: "silná náboženská tradice, bez ověřených nadpřirozených jevů",
    historickaDolozenost: "dobrá (chrám sám je datovaný do 14.-20. století)",
    nebezpecnost: "nízká",
    pristupnost: "volně přístupný aktivní chrám",
    atmosfera: 4.1,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Chrám v rádžastánské Deshnoke je domovem asi dvaceti tisíc krys, které se po jeho mramorových podlahách volně pohybují mezi věřícími - a místní komunita je nekrmí jako škůdce, ale uctívá je jako vlastní předky.",
      historie: "Chrám zasvěcený bohyni Karni Matě, uctívané jako vtělení bohyně Durgy, pochází původně ze 14. století a byl v rádžastánském stylu bohatě přestavěn s mramorovým zdobením a stříbrnými dveřmi.",
      legenda: "Podle legendy požádala Karni Mata boha smrti Jamu, aby vrátil život synovi jednoho z jejích oddaných. Když Jama odmítl, Karni Mata slíbila, že žádný člen jejího klanu (komunity Charan) už nikdy nepadne do Jamovy moci - místo smrti se její příslušníci po smrti znovu narodí jako krysy, takzvaní kabbové, dokud se nakonec znovu nenarodí jako lidé v jejím rodu.",
      paranormalni: "Spatřit mezi tisíci černými krysami vzácnou bílou krysu je považováno za mimořádně příznivé znamení a projev přímého požehnání Karni Maty - věřící se snaží bílou krysu vypátrat a věnují jí zvláštní pozornost.",
      skepticke: "Jde o živou, hluboce zakořeněnou náboženskou tradici komunity Charan, ne o turistickou kuriozitu vytvořenou pro návštěvníky - z hlediska veřejného zdraví chrám krysí populaci reguluje a krmí v rámci vlastní správy, což pomáhá udržet místo funkční navzdory vysoké hustotě zvířat."
    },
    praktickeInfo: "Chrám je volně přístupný, návštěvníci obvykle vstupují bosí jako věřící do jiných hinduistických svatyní, doporučuje se respektovat, že jde o aktivní posvátné místo, ne turistickou atrakci.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedia: Karni Mata Temple", url: "https://en.wikipedia.org/wiki/Karni_Mata_Temple", licence: "CC BY-SA" },
      { nazev: "Wikidata: Karni Mata Temple", url: "https://www.wikidata.org/wiki/Q15233884", licence: "CC0" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Karni%20Mata%20Temple%20Deshnoke", licence: "ODbL" }
    ],
    temata: ["ritual", "zvirata", "mytologie"],
    pribehy: [
      { nazev: "Slib, který porazil smrt", text: "Podle legendy Karni Mata slíbila bohu smrti Jamovi, že se její komunita už nikdy nedostane do jeho moci - místo toho se po smrti znovu rodí jako posvátné krysy." },
      { nazev: "Vzácná bílá krysa", text: "Mezi dvaceti tisíci černými krysami žije i několik vzácných bílých - jejich spatření je považováno za mimořádné požehnání Karni Maty." }
    ]
  }
];

const newArticle = {
  id: "indie-vezeni-a-chram-krys",
  slug: "indie-vezeni-a-chram-krys",
  localizedSlugs: {
    cs: "indie-vezeni-a-chram-krys",
    en: "india-prison-and-rat-temple",
    de: "indien-gefaengnis-und-rattentempel",
    es: "india-prision-y-templo-de-ratas",
    fr: "inde-prison-et-temple-des-rats"
  },
  title: "Dvě indická místa, kde se víra a utrpení potkávají úplně jinak",
  description: "Cellular Jail na Andamanech, kde koloniální Británie věznila bojovníky za nezávislost, a chrám Karni Mata, kde se posvátné krysy uctívají jako reinkarnovaní předkové.",
  category: "legenda",
  themes: ["legenda", "indie", "ritual"],
  relatedPlaceIds: ["cellular-jail-andaman", "karni-mata-temple"],
  sections: [
    {
      heading: "Utrpení jako historický fakt, ne legenda",
      body: "Cellular Jail nepotřebuje žádnou nadstavbu legendy - kruté podmínky vězňů jsou podrobně zdokumentované dobovými záznamy a místo dnes slouží především jako památník obětem koloniální nadvlády, ne jako strašidelná atrakce."
    },
    {
      heading: "Živá víra, ne turistická kuriozita",
      body: "Chrám Karni Mata je naopak především aktivním posvátným místem komunity Charan - dvacet tisíc krys tu nežije kvůli turistům, ale kvůli staleté náboženské tradici, kterou je třeba respektovat jako živou víru, ne jako exotickou podívanou."
    },
    {
      heading: "Dvě různé podoby indické paměti",
      body: "Obě místa spolu netvoří tematický pár náhodou - ukazují dvě odlišné vrstvy indické historické paměti: politický boj za nezávislost na jedné straně a hlubokou náboženskou tradici na straně druhé, obě stejně důležité pro pochopení země."
    }
  ],
  sources: ["wikidata", "wikipedia", "openstreetmap", "unesco-whc"]
};

const places = readJson(placesPath);
const byId = new Map(places.map((place) => [place.id, place]));
let inserted = 0;
newPlaces.forEach((place) => {
  if (!byId.has(place.id)) inserted += 1;
  byId.set(place.id, place);
});
writeJson(placesPath, Array.from(byId.values()));

const articles = readJson(articlesPath);
const articlesById = new Map(articles.map((item) => [item.id, item]));
articlesById.set(newArticle.id, newArticle);
writeJson(articlesPath, Array.from(articlesById.values()));

console.log(`Upserted ${inserted} new places and 1 article.`);
