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
    id: "chateau-de-montsegur",
    slug: "chateau-de-montsegur",
    localizedSlugs: { cs: "hrad-montsegur", en: "chateau-de-montsegur", de: "burg-montsegur", es: "castillo-de-montsegur", fr: "chateau-de-montsegur" },
    detailPath: "/mista/chateau-de-montsegur/",
    nazev: "Hrad Montségur",
    zeme: "Francie",
    kontinent: "Evropa",
    lead: "Poslední katarská pevnost, kde po pádu obléhání dobrovolně vstoupilo do hranice přes dvě stě lidí - a odkud podle legendy čtyři uprchlíci odnesli tajemný poklad.",
    gps: { lat: 42.87556, lon: 1.8325 },
    kategorie: ["hrad", "legenda"],
    indexTajemna: 87,
    paranormalniAktivita: "silná esoterická tradice z počátku 20. století, bez historického potvrzení",
    historickaDolozenost: "výborná (obležení je podrobně doložené inkvizičními záznamy)",
    nebezpecnost: "nízká",
    pristupnost: "placený vstup, náročnější výstup",
    atmosfera: 4.7,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Na vrcholu strmého kopce v Pyrenejích stojí ruina poslední katarské pevnosti, kde se roku 1244 po dlouhém obléhání přes dvě stě lidí dobrovolně upálilo, než by se vzdalo víry - a legenda tvrdí, že těsně předtím z hradu unikl tajemný poklad.",
      historie: "Roku 1243 oblehla Montségur královská armáda o síle asi 10 000 vojáků. Malá posádka kladla odpor deset měsíců, než byla donucena v březnu 1244 kapitulovat. Ráno 16. března sešlo z hradu na pláň pod kopcem přes 200 katarů vedených biskupem Bertrandem Martym a dobrovolně vstoupilo do připravené hranice, aniž by museli být ke kůlu přivázáni.",
      legenda: "Podle inkvizičních záznamů z Carcassonne měli v posledních dnech obléhání čtyři takzvaní 'perfecti' slézt po lanech zahalení do vlněných přikrývek dolů do rokle Lasset a předat tam ukrytý poklad katarů muži jménem Pons-Arnaud de Castellum Verdunum. Na počátku 20. století francouzský esoterický spisovatel Joséphin Péladan tento poklad ztotožnil se samotným Svatým grálem, s odkazem na středověký román Parzival, kde se hrad grálu jmenuje Montsalvat.",
      paranormalni: "Spojení Montségur se Svatým grálem se stalo populární součástí esoterických a okultních kruhů 20. století a přitahuje badatele i dnes, přestože jde o výklad vzniklý téměř 700 let po samotné události.",
      skepticke: "Pro spojení Montségur se Svatým grálem neexistuje žádný středověký historický pramen - teorie vznikla až na přelomu 19. a 20. století z literární spekulace, ne z dobových záznamů. Skutečný poklad katarů byl pravděpodobně jen církevní pokladnice nebo listiny, samotné hromadné upálení je naopak historicky nezpochybnitelně doložené inkvizičními protokoly."
    },
    praktickeInfo: "K ruinám hradu vede strmá turistická stezka od parkoviště pod kopcem, výstup trvá zhruba 30-40 minut a vyžaduje pevnou obuv, vstup do areálu je zpoplatněný.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedia: Château de Montségur", url: "https://en.wikipedia.org/wiki/Ch%C3%A2teau_de_Monts%C3%A9gur", licence: "CC BY-SA" },
      { nazev: "Wikidata: Château de Montségur", url: "https://www.wikidata.org/wiki/Q1013191", licence: "CC0" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Chateau%20de%20Montsegur", licence: "ODbL" }
    ],
    temata: ["legenda", "umrti", "stredovek"],
    pribehy: [
      { nazev: "Dobrovolná hranice", text: "Přes 200 katarů vedených biskupem Bertrandem Martym sešlo z hradu na pláň a dobrovolně vstoupilo do ohně, aniž by museli být ke kůlu přivazováni." },
      { nazev: "Poklad spuštěný po laně", text: "Podle inkvizičních záznamů měli čtyři katarští 'perfecti' těsně před pádem hradu slézt po lanech do rokle a odnést odtud tajemný poklad, který o staletí později spisovatelé ztotožnili se Svatým grálem." }
    ]
  },
  {
    id: "cite-de-carcassonne",
    slug: "cite-de-carcassonne",
    localizedSlugs: { cs: "pevnost-carcassonne", en: "cite-de-carcassonne", de: "cite-de-carcassonne", es: "ciudadela-de-carcasona", fr: "cite-de-carcassonne" },
    detailPath: "/mista/cite-de-carcassonne/",
    nazev: "Pevnostní město Carcassonne",
    zeme: "Francie",
    kontinent: "Evropa",
    lead: "Největší dochované opevněné středověké město Evropy nese jméno po ženě, která podle legendy obelstila samotného Karla Velikého jediným prasetem.",
    gps: { lat: 43.20644, lon: 2.36379 },
    kategorie: ["hrad", "legenda"],
    indexTajemna: 75,
    paranormalniAktivita: "zakladatelský mýtus, historicky nedoložitelný",
    historickaDolozenost: "výborná (opevnění samotné)",
    nebezpecnost: "nízká",
    pristupnost: "volně přístupné historické město, placené vstupy do hradu",
    atmosfera: 4.3,
    nocniVhodnost: false,
    vhodneProDeti: true,
    popisy: {
      zahada: "Dvojitý prstenec hradeb obklopující Carcassonne tvoří největší dochované opevněné středověké město v Evropě - a jeho jméno má podle legendy pocházet z vynalézavosti jedné ženy, ne z vojenského vítězství.",
      historie: "Opevněné jádro Carcassonne prošlo vrstvami galsko-římského, vizigótského a středověkého osídlení a dnešní dvojitý hradební okruh je z velké části výsledkem rozsáhlé restaurace v 19. století. Od roku 1997 je na seznamu UNESCO jako výjimečně dochovaný příklad středověkého opevněného města.",
      legenda: "Podle legendy z 8. století vládla městu po smrti manžela saracénská princezna jménem Carcas v době, kdy je obléhalo vojsko Karla Velikého. Obležení trvalo pět let a zásoby docházely - Carcas proto nechala z hradeb spustit posledního vykrmeného prasete napůl plného obilí, aby útočníkům předstírala, že město má jídla nadbytek. Karel Veliký si díky tomu myslel, že obyvatelé nikdy nekapitulují, a obležení zrušil. Carcas pak na oslavu nechala rozeznít městské zvony - odtud má podle legendy pocházet i jméno města, z okcitánského 'Carcas sona', tedy 'Carcas zvoní'.",
      paranormalni: "Legenda o Dame Carcas je dodnes hluboce zakořeněná v místní identitě a slaví se každoročně při místních folklórních akcích a festivalech.",
      skepticke: "Historicky je příběh neudržitelný: Karel Veliký nemohl Carcassonne obléhat, protože město už předtím dobyl jeho otec Pipin Krátký roku 759 - o existenci samotné Dame Carcas navíc neexistuje žádný nezávislý historický doklad, jde tedy o pozdější lidovou etymologii jména města, ne o zaznamenanou historickou událost."
    },
    praktickeInfo: "Historické jádro města je volně přístupné, samotný hrad (Château Comtal) a hradby vyžadují placený vstup, v sezóně bývá mimořádně vysoká turistická návštěvnost.",
    obrazky: [],
    audio: [],
    zdroje: [
      { nazev: "Wikipedia: Lady Carcas", url: "https://en.wikipedia.org/wiki/Lady_Carcas", licence: "CC BY-SA" },
      { nazev: "Wikidata: Cité de Carcassonne", url: "https://www.wikidata.org/wiki/Q389269", licence: "CC0" },
      { nazev: "UNESCO World Heritage - Historic Fortified City of Carcassonne", url: "https://www.visit-occitanie.com/en/discovering/unesco-classified-sites/medieval-city-carcassonne/", licence: "oficiální zdroj / UNESCO dokumentace" },
      { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Cite%20de%20Carcassonne", licence: "ODbL" }
    ],
    temata: ["legenda", "pevnost", "stredovek"],
    pribehy: [
      { nazev: "Prase, které zachránilo město", text: "Dame Carcas nechala spustit z hradeb posledního vykrmeného prasete, aby obléhající vojsko uvěřilo, že město má jídla nadbytek - lest, která podle legendy obležení ukončila." },
      { nazev: "Zvon, který dal jméno městu", text: "Legenda odvozuje jméno Carcassonne od okcitánského spojení 'Carcas sona' - Carcas zvoní - podle zvonění, kterým princezna oslavila konec obléhání." }
    ]
  }
];

const enrichedPlaces = [
  {
    id: "svalbard-global-seed-vault",
    patch: {
      lead: "Arktický trezor semen vytesaný do permafrostu na Špicberkách, který má přežít i to, co přežít nemusí nikdo z nás.",
      indexTajemna: 74,
      atmosfera: 4.0,
      popisy: {
        zahada: "Hluboko v hoře na norském souostroví Špicberky leží zařízení navržené tak, aby přežilo prakticky jakoukoli civilizační katastrofu - trezor s miliony semen zemědělských plodin z celého světa.",
        historie: "Myšlenka globálního semenného trezoru se začala formovat po roce 2001, kdy OSN stanovila pravidla pro sdílení genetických rostlinných zdrojů. Norská vláda následně prověřila technickou a politickou proveditelnost a stavba začala v červnu 2006. Trezor byl slavnostně otevřen s první zásilkou semen 26. února 2008 a dnes má kapacitu pro zhruba 4,5 milionu vzorků semen.",
        legenda: "Zařízení funguje jako záložní úložiště duplikátů semen z genových bank po celém světě, jejichž cílem je ochránit genetickou rozmanitost lidských plodin pro případ globální krize - jaderné války, klimatické katastrofy nebo nové rostlinné choroby. Médiím se proto vžila přezdívka 'trezor zkázy' nebo 'moderní Noemova archa'.",
        paranormalni: "Přestože médiím dominuje apokalyptický obraz, skutečným smyslem trezoru není 'znovuosídlit svět po katastrofě', ale běžněji sloužit jako pojistka pro zemědělský výzkum, když lokální genová banka někde ve světě přijde o svou sbírku kvůli válce, přírodní katastrofě nebo prostému nedostatku financí.",
        skepticke: "Volba Špicberků není náhodná ani mystická, ale čistě praktická: polární poušť s trvale zmrzlou půdou, minimem srážek a nízkou seismickou aktivitou vytváří ideální přirozené podmínky pro dlouhodobé, energeticky nenáročné uchování semen bez nutnosti spoléhat na nepřetržitý provoz chladicích systémů."
      },
      praktickeInfo: "Trezor není veřejnosti přístupný zevnitř kvůli ochraně biologického materiálu, návštěvníci mohou vidět jen charakteristický vchod v úbočí hory z bezpečné vzdálenosti.",
      temata: ["technologie", "katastrofa", "poust"],
      pribehy: [
        { nazev: "4,5 milionu vzorků v ledu", text: "Trezor má kapacitu pro miliony vzorků semen zemědělských plodin z genových bank celého světa, uložených jako záložní pojistka, ne jako plán na obnovu civilizace." },
        { nazev: "Proč právě Špicberky", text: "Trvale zmrzlá půda, minimální srážky a nízká seismická aktivita dělají z arktické polární pouště přirozeně ideální a energeticky nenáročné místo pro dlouhodobé uchování semen." }
      ],
      zdroje: [
        { nazev: "Wikipedia: Svalbard Global Seed Vault", url: "https://en.wikipedia.org/wiki/Svalbard_Global_Seed_Vault", licence: "CC BY-SA" },
        { nazev: "Wikidata: Svalbard Global Seed Vault", url: "https://www.wikidata.org/wiki/Q201013", licence: "CC0" },
        { nazev: "National Geographic - Svalbard Global Seed Vault", url: "https://www.nationalgeographic.com/environment/article/norway-svalbard-global-seed-vault", licence: "novinářský zdroj" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Svalbard%20Global%20Seed%20Vault", licence: "ODbL" }
      ]
    }
  }
];

const newArticle = {
  id: "francouzske-pevnosti-a-arkticky-trezor",
  slug: "francouzske-pevnosti-a-arkticky-trezor",
  localizedSlugs: {
    cs: "francouzske-pevnosti-a-arkticky-trezor",
    en: "french-fortresses-and-arctic-vault",
    de: "franzoesische-festungen-und-arktisches-tresor",
    es: "fortalezas-francesas-y-boveda-artica",
    fr: "forteresses-francaises-et-coffre-arctique"
  },
  title: "Katarská hranice, prase přes hradby a trezor na konci světa",
  description: "Montségur a poslední katarská hranice, Carcassonne a lest Dame Carcas, a přepsaný Svalbardský trezor semen - tři místa, kde se historie, legenda a moderní technologie potkávají na jedné mapě.",
  category: "legenda",
  themes: ["legenda", "svet", "historie"],
  relatedPlaceIds: [
    "chateau-de-montsegur",
    "cite-de-carcassonne",
    "svalbard-global-seed-vault"
  ],
  sections: [
    {
      heading: "Dvě pevnosti, dva odlišné typy legendy",
      body: "Montségur a Carcassonne leží ve stejném kraji jižní Francie, ale nabízí protikladné typy vyprávění: Montségur má tragicky doloženou historickou událost, ke které se až s odstupem staletí přilepila esoterická spekulace o grálu. Carcassonne má naopak od počátku čistě mýtický, nedoložitelný příběh o ženě, která možná nikdy neexistovala."
    },
    {
      heading: "Proč jsme přepsali Svalbardský trezor",
      body: "Stejně jako u předchozích vln jsme narazili na starší obecný redakční seed bez konkrétního obsahu - trezor semen jsme proto dohledali pořádně a nahradili obecnou šablonu skutečnou historií projektu a jasným vysvětlením, proč vůbec vznikl."
    },
    {
      heading: "Legenda jako nástroj přežití, ne děsu",
      body: "Na rozdíl od většiny míst na mapě není u Svalbardského trezoru cílem vyvolat hrůzu, ale ukázat klidnou, promyšlenou přípravu na nejhorší scénáře - zajímavý kontrast k tragickým a dramatickým příběhům Montségur nebo Carcassonne."
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

let enriched = 0;
enrichedPlaces.forEach(({ id, patch }) => {
  const existing = byId.get(id);
  if (!existing) {
    console.warn(`Skipped enrichment, not found: ${id}`);
    return;
  }
  byId.set(id, { ...existing, ...patch, popisy: { ...existing.popisy, ...patch.popisy } });
  enriched += 1;
});

writeJson(placesPath, Array.from(byId.values()));

const articles = readJson(articlesPath);
const articlesById = new Map(articles.map((item) => [item.id, item]));
articlesById.set(newArticle.id, newArticle);
writeJson(articlesPath, Array.from(articlesById.values()));

console.log(`Upserted ${inserted} new places, enriched ${enriched} existing places, and 1 article.`);
