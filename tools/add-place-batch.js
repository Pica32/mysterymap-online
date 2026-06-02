const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const filePath = path.join(root, "data", "mista.json");
const places = JSON.parse(fs.readFileSync(filePath, "utf8").replace(/^\uFEFF/, ""));

const batch = [
  {
    id: "bran-castle",
    slug: "bran-castle",
    localizedSlugs: { cs: "hrad-bran", en: "bran-castle", de: "schloss-bran", es: "castillo-de-bran", fr: "chateau-de-bran" },
    nazev: "Hrad Bran",
    zeme: "Rumunsko",
    kontinent: "Evropa",
    lead: "Transylvansky hrad, ktery turisticka predstavivost spojila s Draculou, prestoze skutecna historie je slozitejsi nez upiri legenda.",
    gps: { lat: 45.5153, lon: 25.367 },
    kategorie: ["hrad", "legenda"],
    temata: ["duchove", "prokleti", "mytologie"],
    indexTajemna: 86,
    paranormalniAktivita: "stredni",
    historickaDolozenost: "dobra",
    nebezpecnost: "nizka",
    pristupnost: "placeny vstup",
    atmosfera: 4.6,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Zahada Branu nelezi v tom, ze by dokazoval Draculu, ale v tom, jak se skutecny hrad stal globalnim symbolem upirske Transylvanie.",
      historie: "Hrad Bran ma stredovekou a novovekou historii spojenou s obranou prusmyku, regionalni mocenskou spravou a pozdejsi kralovskou vrstvou.",
      legenda: "Popularni legenda ho spojuje s Draculou a Vladem Tepesem, ale tato vazba je prevazne literarni, turisticka a popkulturni.",
      paranormalni: "Paranormalni tvrzeni mluvi o krocejich v chodbach, stinech, tisi v pokojich a upirske atmosfere, kterou navstevnici casto prichazeji predem ocekavat.",
      skepticke: "Silny efekt vysvetluje literatura, film, marketing Transylvanie, goticka architektura a ocekavani navstevniku, nikoli dolozene nadprirozeno."
    },
    praktickeInfo: "Navstevu planovat pres oficialni web a pocitat s vysokou turistickou navstevnosti. Dracula vrstva je kulturni motiv, ne historicky fakt.",
    pribehy: [
      { nazev: "Hrad, ktery zdedil Draculu", text: "Bran ukazuje, jak se misto muze stat symbolem pribehu, ktery s nim historicky souvisi jen volne." },
      { nazev: "Transylvanska kulisa", text: "Hory, veze a chodby vytvareji scenu, kde se literatura a turismus spojuji do jedne silne legendy." }
    ],
    obrazky: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bran_Castle_%281082183034%29.jpg", sourceUrl: "https://commons.wikimedia.org/wiki/File:Bran_Castle_(1082183034).jpg", author: "Aleksander Dragnes", license: "CC BY 2.0" }
    ],
    zdroje: [
      { nazev: "Official site: Bran Castle", url: "https://bran-castle.com/", licence: "oficialni web" },
      { nazev: "Wikidata: Bran Castle", url: "https://www.wikidata.org/wiki/Q45797", licence: "CC0" },
      { nazev: "Wikipedia: Bran Castle", url: "https://en.wikipedia.org/wiki/Bran_Castle", licence: "CC BY-SA" }
    ]
  },
  {
    id: "sedlec-ossuary",
    slug: "sedlec-ossuary",
    localizedSlugs: { cs: "kostnice-sedlec", en: "sedlec-ossuary", de: "sedletz-ossarium", es: "osario-de-sedlec", fr: "ossuaire-de-sedlec" },
    nazev: "Kostnice v Sedlci",
    zeme: "Cesko",
    kontinent: "Evropa",
    lead: "Kaple v Kutne Hore, kde se lidske ostatky staly mementem smrti i jednim z nejsilnejsich vizualnich symbolu stredni Evropy.",
    gps: { lat: 49.9619, lon: 15.2886 },
    kategorie: ["podzemi", "legenda"],
    temata: ["umrti", "prokleti", "zdroje"],
    indexTajemna: 82,
    paranormalniAktivita: "nizka",
    historickaDolozenost: "velmi dobra",
    nebezpecnost: "nizka",
    pristupnost: "placeny vstup",
    atmosfera: 4.7,
    nocniVhodnost: false,
    vhodneProDeti: false,
    popisy: {
      zahada: "Sedlec pusobi tajemne tim, ze z lidskych kosti vytvari esteticky a nabozenstky prostor, ktery je zaroven fascinujici i neprijemny.",
      historie: "Kostnice je soucasti historickeho arealu v Sedlci a souvisi s dlouhou pohrebni tradici, morem, valkami a pozdejsi upravou interieru.",
      legenda: "Vypraveni se soustredi na pomijivost, ticho pod kapli a predstavu, ze tisice ostatku vytvareji zvlastni duchovni tlak.",
      paranormalni: "Paranormalni vrstva je spise pocitova: navstevnici popisuji tisen, respekt, zvlastni klid a vedomi pritomnosti smrti.",
      skepticke: "Dojem mista je vysvetlitelny nabozenstvim, barokni symbolikou smrti, materialitou kosti a silnou vizualni kompozici."
    },
    praktickeInfo: "Fotografovani a provozni pravidla je nutne overit na oficialnim webu. Misto vyzaduje citlivy pristup.",
    pribehy: [
      { nazev: "Lustr z kosti", text: "Nejslavnejsi cast interieru prevadi memento mori do formy, kterou nelze ignorovat." },
      { nazev: "Smrt jako rad", text: "Sedlec nepracuje s chaosem smrti, ale s pokusem dat ostatkum strukturu, symbol a duchovni vyznam." }
    ],
    obrazky: [],
    zdroje: [
      { nazev: "Official site: Sedlec Ossuary", url: "https://sedlecossuary.com/", licence: "oficialni web" },
      { nazev: "Wikidata: Sedlec Ossuary", url: "https://www.wikidata.org/wiki/Q696761", licence: "CC0" },
      { nazev: "Wikipedia: Sedlec Ossuary", url: "https://en.wikipedia.org/wiki/Sedlec_Ossuary", licence: "CC BY-SA" }
    ]
  },
  {
    id: "bhangarh-fort",
    slug: "bhangarh-fort",
    localizedSlugs: { cs: "pevnost-bhangarh", en: "bhangarh-fort", de: "festung-bhangarh", es: "fuerte-bhangarh", fr: "fort-de-bhangarh" },
    nazev: "Bhangarh Fort",
    zeme: "Indie",
    kontinent: "Asie",
    lead: "Opevneny komplex v Radzastanu, casto oznacovany za jedno z nejstrasidelnejsich mist Indie, kde se legenda propojuje s ruinou a zakazem nocniho vstupu.",
    gps: { lat: 27.0968, lon: 76.2867 },
    kategorie: ["hrad", "legenda", "zakazane-zony"],
    temata: ["prokleti", "duchove", "zakazane-zony"],
    indexTajemna: 88,
    paranormalniAktivita: "vysoka",
    historickaDolozenost: "dobra",
    nebezpecnost: "stredni",
    pristupnost: "denni navstevni rezim",
    atmosfera: 4.8,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Bhangarh kombinuje opustene ruiny, horskou krajinu, mistni povesti a pravidla o vstupu tak, ze pusobi jako hotovy pribeh pro mapu zahad.",
      historie: "Pevnost a mesto vznikly v ranem novoveku a dnes jsou archeologickou lokalitou a turistickym cilem v Radzastanu.",
      legenda: "Nejznamejsi pribehy mluvi o kletbe, tantrikovi, princezne a meste, ktere nemelo prezit vlastni osud.",
      paranormalni: "Paranormalni tvrzeni se soustredi na zvuky po setmeni, pocit sledovani, stiny v ruinach a neklid spojovany se zakazem nocnich navstev.",
      skepticke: "Atmosferu vysvetluje ruina, izolace, divoka zver, mistni folklor, turisticka povest a realna bezpecnostni pravidla pro nocni pohyb."
    },
    praktickeInfo: "Respektovat mistni pravidla a nenavstevovat lokalitu mimo povoleny cas. Prakticke informace overit u oficialnich nebo lokalnich zdroju.",
    pribehy: [
      { nazev: "Kletba mesta", text: "Legenda o Bhangarhu je silna proto, ze vysvetluje opusteni lokality dramatickym moralnim pribehem." },
      { nazev: "Noc, ktera neni pro turisty", text: "Zakaz nocniho vstupu posiluje vypraveci ram: co se nesmi videt, to se snadneji meni v zahadu." }
    ],
    obrazky: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bhangarh%2C_Alwar.JPG", sourceUrl: "https://commons.wikimedia.org/wiki/File:Bhangarh,_Alwar.JPG", author: "Tapish2409", license: "CC BY-SA 3.0" }
    ],
    zdroje: [
      { nazev: "Wikidata: Bhangarh Fort", url: "https://www.wikidata.org/wiki/Q4900647", licence: "CC0" },
      { nazev: "Wikipedia: Bhangarh Fort", url: "https://en.wikipedia.org/wiki/Bhangarh_Fort", licence: "CC BY-SA" },
      { nazev: "OpenStreetMap: Bhangarh Fort", url: "https://www.openstreetmap.org/search?query=Bhangarh%20Fort", licence: "ODbL" }
    ]
  },
  {
    id: "chernobyl-exclusion-zone",
    slug: "chernobyl-exclusion-zone",
    localizedSlugs: { cs: "cernobylska-vyloucena-zona", en: "chernobyl-exclusion-zone", de: "tschernobyl-sperrzone", es: "zona-de-exclusion-de-chernobil", fr: "zone-dexclusion-de-tchernobyl" },
    nazev: "Cernobylska vyloucena zona",
    zeme: "Ukrajina",
    kontinent: "Evropa",
    lead: "Zona kolem jaderne havarie z roku 1986, kde katastrofa, opustena mesta, radiace a moderni myty vytvorily globalni misto pameti.",
    gps: { lat: 51.389, lon: 30.099 },
    kategorie: ["katastrofa", "zakazane-zony"],
    temata: ["karantena", "prirodni-anomalie", "zakazane-zony"],
    indexTajemna: 93,
    paranormalniAktivita: "nizka",
    historickaDolozenost: "velmi dobra",
    nebezpecnost: "vysoka podle zony a pravidel",
    pristupnost: "regulovana oblast",
    atmosfera: 4.9,
    nocniVhodnost: false,
    vhodneProDeti: false,
    popisy: {
      zahada: "Cernobyl neni paranormalni zahada, ale misto, kde neviditelna radiace a opustena infrastruktura pusobi temer nadprirozene.",
      historie: "Havarie v dubnu 1986 zasadne ovlivnila jadernou energetiku, politiku, evakuaci a dlouhodobou pamet Evropy.",
      legenda: "Moderni legendy mluvi o mutacich, zakazanych vesnicich, tajnych experimentech a mestech, kde se cas zastavil.",
      paranormalni: "Paranormalni tvrzeni jsou slabsi nez katastroficka vrstva; casta jsou spis svedectvi o tichu, pocitu prazdnoty a dojmu pritomnosti minulosti.",
      skepticke: "Dojem vysvetluje realna havarie, evakuace, propaganda, vizualni sila ruin a popularni kultura kolem Cernobylu."
    },
    praktickeInfo: "Aktualni pristupnost se meni podle bezpecnostni situace a oficialnich pravidel. Stranka nesmi navadet k nelegalnimu vstupu.",
    pribehy: [
      { nazev: "Mesto po evakuaci", text: "Cernobylska zona je silna tim, ze ukazuje bezny zivot preruseny naraz a ponechany casu." },
      { nazev: "Neviditelne riziko", text: "Radiace neni videt, a prave proto pusobi v predstavivosti temer jako kletba krajiny." }
    ],
    obrazky: [
      { url: "https://commons.wikimedia.org/wiki/Special:FilePath/%C4%8Cernobyl%2C_87.jpg", sourceUrl: "https://commons.wikimedia.org/wiki/File:%C4%8Cernobyl,_87.jpg", author: "Honza Groh (Jagro)", license: "CC BY-SA 3.0" }
    ],
    zdroje: [
      { nazev: "IAEA: Chernobyl accident", url: "https://www.iaea.org/topics/chornobyl", licence: "official site" },
      { nazev: "Wikidata: Chernobyl Exclusion Zone", url: "https://www.wikidata.org/wiki/Q83488", licence: "CC0" },
      { nazev: "Wikipedia: Chernobyl Exclusion Zone", url: "https://en.wikipedia.org/wiki/Chernobyl_Exclusion_Zone", licence: "CC BY-SA" }
    ]
  },
  {
    id: "salem-witch-trials-memorial",
    slug: "salem-witch-trials-memorial",
    localizedSlugs: { cs: "pamatnik-salemskych-procesu", en: "salem-witch-trials-memorial", de: "denkmal-salemer-hexenprozesse", es: "memorial-juicios-de-brujas-de-salem", fr: "memorial-des-proces-de-sorcieres-de-salem" },
    nazev: "Salem Witch Trials Memorial",
    zeme: "USA",
    kontinent: "Severni Amerika",
    lead: "Pamatnik honu na carodejnice v Salemu, kde realna pravni tragedie vytvorila globalni symbol strachu, obvineni a kolektivni hysterie.",
    gps: { lat: 42.5225, lon: -70.8907 },
    kategorie: ["legenda", "tragédie"],
    temata: ["vrazdy", "pseudoveda", "antiteorie"],
    indexTajemna: 80,
    paranormalniAktivita: "stredni",
    historickaDolozenost: "velmi dobra",
    nebezpecnost: "nizka",
    pristupnost: "verejny pamatnik",
    atmosfera: 4.3,
    nocniVhodnost: true,
    vhodneProDeti: true,
    popisy: {
      zahada: "Salem je tajemny ne proto, ze by dokazoval magii, ale proto, ze ukazuje, jak se strach muze stat systemem obvinovani.",
      historie: "Procesy z roku 1692 patrily k nejznamejsim epizodam kolonialni Ameriky a vedly k popravám a pozdejsimu dlouhemu prehodnocovani viny.",
      legenda: "Mesto se stalo symbolem carodejnic, okultismu a ducharske turistiky, i kdyz skutecny pribeh je pravni a spolecenska tragedie.",
      paranormalni: "Paranormalni tvrzeni se soustredi na duchy obeti, neklid kolem hrobu a nocni atmosferu stareho Salemu.",
      skepticke: "Klicove vysvetleni lezi v socialnim napeti, nabozenstvi, pravnim procesu, strachu a mechanismu kolektivniho obvineni."
    },
    praktickeInfo: "Misto je vhodne navstivit jako pamatnik a historicky kontext, ne jako atrakci zalozenou na utrpeni obeti.",
    pribehy: [
      { nazev: "Jmena v kameni", text: "Pamatnik vraci obetem individualitu a brzdi tendenci menit tragedii jen v carodejnickou kulisu." },
      { nazev: "Strach jako dukaz", text: "Salem ukazuje, co se stane, kdyz komunita zacne zaměňovat obavy, dohady a vypovedi za pevny dukaz." }
    ],
    obrazky: [],
    zdroje: [
      { nazev: "Official Salem Witch Museum", url: "https://salemwitchmuseum.com/", licence: "oficialni web" },
      { nazev: "Wikidata: Salem witch trials", url: "https://www.wikidata.org/wiki/Q193253", licence: "CC0" },
      { nazev: "Wikipedia: Salem witch trials", url: "https://en.wikipedia.org/wiki/Salem_witch_trials", licence: "CC BY-SA" }
    ]
  }
];

const byId = new Map(places.map((place) => [place.id, place]));
for (const place of batch) {
  const fullPlace = {
    detailPath: `/mista/${place.slug}/`,
    audio: [],
    ...place
  };
  fullPlace.detailPath = `/mista/${fullPlace.slug}/`;
  if (byId.has(fullPlace.id)) Object.assign(byId.get(fullPlace.id), fullPlace);
  else places.push(fullPlace);
}

fs.writeFileSync(filePath, `${JSON.stringify(places, null, 2)}\n`);
console.log(`Merged ${batch.length} places. Total: ${places.length}.`);
