const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const placesPath = path.join(root, "data", "mista.json");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8").replace(/^﻿/, ""));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

const enrichedPlaces = [
  {
    id: "kandovan",
    patch: {
      lead: "Vesnice vytesaná do sopečného popela, kde rodiny dodnes bydlí uvnitř kuželovitých skalních útvarů podobných turecké Kappadokii.",
      atmosfera: 3.8,
      popisy: {
        zahada: "V íránské provincii Východní Ázerbájdžán stojí vesnice s kuželovitými obydlími zvanými místně 'karaan', vytesanými přímo do sopečného ignimbritu z hory Sahand - obydlí, která připomínají jeskynní domy turecké Kappadokie.",
        historie: "Kuželovité útvary vznikly erozí pórovitých pemzových vrstev po pyroklastických proudech z erupce hory Sahand, s vrstvou přesahující místy 100 metrů tloušťky. Přirozené vodní kanály následně vytvořily uličky vesnice, některé kužely dosahují výšky 30 až 40 metrů.",
        legenda: "O původu vesnice existují tři vyprávění: kočovníci zvaní 'Condon' zpočátku využívali skalní obydlí jen sezónně, než se usadili natrvalo; obyvatelé prchající před mongolskými útoky ze zničené vesnice Hilevar vzdálené asi 2 km; nebo dávní bojovníci, kteří místo vybrali pro jeho obrannou topografickou polohu.",
        paranormalni: "Populace vesnice trvale klesá - z 601 obyvatel roku 2006 na 450 obyvatel roku 2016 - odrážejíc tlak modernizace na tradiční jeskynní komunity, jejichž způsob života se za staletí téměř nezměnil.",
        skepticke: "Tři odlišné legendy o původu vesnice odrážejí typickou různorodost ústní tradice u dlouho osídlených míst, ne jednoznačně prokázaný historický fakt - geologický původ samotných kuželovitých útvarů erozí sopečného popela je naproti tomu vědecky nesporný a dobře zdokumentovaný."
      },
      praktickeInfo: "Vesnice je veřejně přístupná, některá obydlí dnes fungují jako hotely nabízející návštěvníkům nocleh přímo uvnitř skalních kuželů.",
      zdroje: [
        { nazev: "Wikipedia: Kandovan, Osku", url: "https://en.wikipedia.org/wiki/Kandovan,_Osku", licence: "CC BY-SA" },
        { nazev: "Wikidata: Kandovan", url: "https://www.wikidata.org/wiki/Q1818028", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Kandovan%20Iran", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Tři legendy o jednom původu", text: "O založení vesnice koluje hned několik vyprávění - od kočovníků přes uprchlíky před Mongoly až po bojovníky hledající obrannou pozici." },
        { nazev: "Domy staré jako sopka sama", text: "Kuželovitá obydlí vznikla erozí sopečného popela z hory Sahand a jejich stavební materiál je tak starý jako samotná sopečná erupce, která region zformovala." }
      ]
    }
  },
  {
    id: "caesarea-maritima",
    patch: {
      lead: "Přístavní město Heroda Velikého, kde archeologové objevili jediný známý artefakt s vyrytým jménem Pontia Piláta.",
      atmosfera: 3.9,
      popisy: {
        zahada: "Na pobřeží Izraele stojí ruiny přístavního města, které Herodes Veliký vybudoval na troskách Strabónovy věže a přejmenoval na počest císaře Augusta - město, jež se stalo správním centrem římské Judeje místo Jeruzaléma.",
        historie: "Herodes postavil přístav Sebastos v letech 22-15 př. n. l. s inovativním dvoumolovým designem, s použitím dovezeného italského pucolánového betonu. Když se Judea roku 6 n. l. stala římskou provincií, Caesarea nahradila Jeruzalém jako civilní i vojenské hlavní město a vyrostla na přibližně 125 000 obyvatel na ploše 3,7 čtverečního kilometru. Za byzantské éry (390-640 n. l.) sloužila jako hlavní město provincie Palaestina Prima a stala se intelektuálním centrem s církevní knihovnou obsahující přes 30 000 rukopisů, kde studovali učenci jako Jeroným a Basil Veliký.",
        legenda: "Křižáci dobyli město roku 1101 po patnáctidenním obléhání, poté několikrát změnilo majitele, než ho sultán Bajbars roku 1265 úplně zničil, aby zabránil jeho znovuobsazení křižáky.",
        paranormalni: "Mezi nejvýznamnější archeologické nálezy patří 'Pilátův kámen' - vápencový blok nesoucí jméno a titul Pontia Piláta, jediný známý archeologický nález s jeho jménem a titulem. Vykopávky odhalily i byzantskou mozaiku z roku 2018 se skleněnými a zlatými tesserami, poklad asi 2000 zlatých mincí z fátimovského období (2015) a mramorový sarkofág zobrazující Dionýsa a Herkula, starý asi 1700 let (2025).",
        skepticke: "Existence Pontia Piláta jako historické postavy byla dlouho doložena jen biblickými a historickými texty - Pilátův kámen z Caesareje poskytl první a dosud jediný přímý archeologický důkaz jeho úřadu, čímž proměnil dříve čistě textovou postavu v archeologicky potvrzenou historickou osobu."
      },
      praktickeInfo: "Naleziště je součástí národního parku Caesarea zřízeného roku 2011, s dobře vybudovanou infrastrukturou pro návštěvníky včetně římského divadla a přístavu.",
      zdroje: [
        { nazev: "Wikipedia: Caesarea Maritima", url: "https://en.wikipedia.org/wiki/Caesarea_Maritima", licence: "CC BY-SA" },
        { nazev: "Wikidata: Caesarea Maritima", url: "https://www.wikidata.org/wiki/Q319242", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Caesarea%20Maritima%20Israel", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Jediný kámen s jménem Piláta", text: "Pilátův kámen objevený v Caesareji je dodnes jediným známým archeologickým nálezem nesoucím jméno a titul Pontia Piláta, muže známého hlavně z biblických textů." },
        { nazev: "Knihovna s třiceti tisíci rukopisy", text: "Byzantská Caesarea hostila církevní knihovnu s více než 30 000 rukopisy, kde studovali významní křesťanští učenci jako Jeroným a Basil Veliký." }
      ]
    }
  },
  {
    id: "qobustan-mud-volcanoes",
    patch: {
      lead: "Region, kde vybuchla bahenní sopka s plameny sahajícími 500 metrů do vzduchu - viditelnými až z Baku, 74 kilometrů daleko.",
      atmosfera: 3.7,
      popisy: {
        zahada: "Ázerbájdžán hostí kolem 400 bahenních sopek - přes polovinu z celkového počtu na celém světě - soustředěných hlavně v oblasti Kobustánu a Kaspického moře.",
        historie: "Bahenní sopky ázerbájdžánského regionu emitují metan a další uhlovodíky, přičemž některé dosahují výšky přes 200 metrů a produkují velké erupce, občas doprovázené plameny podobného rozsahu.",
        legenda: "Roku 2001 jedna bahenní sopka 15 kilometrů od Baku upoutala pozornost celého světa, když začala vyvrhovat plameny vysoké 15 metrů. Ještě dramatičtější byla erupce bahenní sopky na ostrově Dašli 4. července 2021, kdy plameny vyšlehly do výšky 500 metrů a byly viditelné z Baku vzdáleného 74 kilometrů. Předchozí erupce proběhly v letech 1945 a 1920.",
        paranormalni: "Návštěvníci regionu praktikují bahenní koupele, kterým se připisují léčivé účinky. V červnu 2024 byl otevřen rozsáhlý turistický komplex bahenních sopek s terapeutickými koupelemi, pozorovacími věžemi a přírodovědnými expozicemi.",
        skepticke: "Erupce s plameny sahajícími stovky metrů do vzduchu jsou reálný, dobře zdokumentovaný geologický jev způsobený hořením unikajícího metanu, ne mýtus - většina ázerbájdžánských bahenních sopek zůstává aktivní a některé jsou z bezpečnostních důvodů chráněny vládou s omezeným přístupem."
      },
      praktickeInfo: "Region je přístupný z Baku po přibližně 20kilometrové silnici od rezervace Kobustán, doporučuje se navštívit s organizovaným výletem kvůli bezpečnosti u aktivních sopek.",
      zdroje: [
        { nazev: "Wikipedia: Gobustan National Park", url: "https://en.wikipedia.org/wiki/Gobustan_National_Park", licence: "CC BY-SA" },
        { nazev: "Wikipedia: Mud volcano", url: "https://en.wikipedia.org/wiki/Mud_volcano", licence: "CC BY-SA" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Gobustan%20mud%20volcanoes%20Azerbaijan", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Plameny vysoké 500 metrů", text: "Erupce bahenní sopky na ostrově Dašli roku 2021 vyvrhla plameny do výšky 500 metrů, viditelné až z Baku vzdáleného 74 kilometrů." },
        { nazev: "Polovina bahenních sopek světa", text: "Ázerbájdžán hostí kolem 400 bahenních sopek, což představuje více než polovinu z celkového počtu známého na celém světě." }
      ]
    }
  },
  {
    id: "pisac",
    patch: {
      lead: "Rozsáhlý incký komplex, o kterém španělští kronikáři navzdory jeho velikosti a blízkosti Cusca nikdy nenapsali ani slovo.",
      atmosfera: 4.0,
      popisy: {
        zahada: "Na hřebeni nad Posvátným údolím Inků leží komplex o rozloze přes 65,5 hektaru, který navzdory své velikosti a blízkosti Cusca nikdy nezaznamenali žádní španělští kronikáři - jako by o jeho existenci vůbec nevěděli.",
        historie: "Území bylo osídleno už v obdobích Lucre a Killke, s předinckou osadou na svazích mezi přítoky řeky Vilcanota. Když Inkové region dobyli, postavili na vyvýšeném hřebeni rozsáhlý komplex - badatelé se shodují, že stavbu nechal postavit císař Pačakutek (1438-1471/1472), pravděpodobně po roce 1440.",
        legenda: "Komplex sloužil více účelům zároveň: jako rezidenční palác, vojenská pevnost, astronomická observatoř i náboženské centrum podporující císařskou rodinu mezi vojenskými taženími. Zahrnoval propracované zemědělské terasy, obytné sektory i obřadní prostor Intiwatana s náboženským a astronomickým významem s výhledem na Posvátné údolí.",
        paranormalni: "Skalní útvar zvaný Ňusta Encantada připomíná legendu o princezně Inquill Chumpi, které bylo předpovězeno, že se provdá jen za prince schopného postavit most přes řeku Vilcanota za jedinou noc. Když se to Astovi Rimaqovi podařilo kouzelnými prostředky, Inquill neuposlechla zákaz ohlédnout se při nesení posvátných obětin koky vzhůru do kopce - proměnila se v kámen, zatímco Asto Rimaq se utopil v řece.",
        skepticke: "Absence jakékoli zmínky o komplexu ve španělských kronikách je zvláštní historická anomálie, ne důkaz, že místo bylo objeveno později - přesto Pizarrovy síly komplex zničily už na počátku 30. let 16. století, což naznačuje, že o jeho existenci Španělé přinejmenším vojensky věděli, i když ho písemně nezaznamenali."
      },
      praktickeInfo: "Naleziště leží ve výšce 2972 metrů nad moderním městem Pisac, přístupné pěší stezkou nebo silnicí s placeným vstupem.",
      zdroje: [
        { nazev: "Wikipedia: Pisac", url: "https://en.wikipedia.org/wiki/Pisac", licence: "CC BY-SA" },
        { nazev: "Wikidata: Pisac", url: "https://www.wikidata.org/wiki/Q950398", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Pisac%20Peru", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Komplex, o kterém Španělé mlčeli", text: "Navzdory své velikosti a blízkosti Cusca nezaznamenali komplex v Pisacu žádní španělští kronikáři - jako by o jeho existenci vůbec nevěděli." },
        { nazev: "Princezna proměněná v kámen", text: "Podle legendy se princezna Inquill Chumpi neuposlechla zákaz ohlédnout se při obřadním výstupu a proměnila se v kámen, zatímco její nápadník se utopil v řece." }
      ]
    }
  },
  {
    id: "qenko",
    patch: {
      lead: "Jedna z největších posvátných huaka Cusca, kde stříbrná deska odrážela sluneční paprsky do obřadní místnosti plné lidských kostí.",
      atmosfera: 3.9,
      popisy: {
        zahada: "Asi 6 kilometrů severovýchodně od Cusca leží incký chrám vytesaný do skály, jehož kečuánské jméno Q'enqo znamená 'klikatý' podle propletených vzorů vyrytých do kamene - jedno z největších posvátných míst (huaka) celého regionu.",
        historie: "Naleziště se považuje za místo, kde probíhaly oběti a mumifikace - jednu z klíčových náboženských funkcí incké posvátné geografie kolem Cusca.",
        legenda: "Místo obsahuje vytesané monolity a podzemní svatyni. Tunel prochází stavbou s velkým žlábkem na jedné straně, vedoucím do místnosti s obřadním stolem a výklenky po obou stranách.",
        paranormalni: "Nálezy uvnitř žlábku - konkrétně množství kostí - vedly badatele k závěru, že komora sloužila jako místo rituálních obětí. Jeden výklenek obsahoval mumie, druhý velkou stříbrnou desku, která odrážela sluneční paprsky do místnosti - důkaz propracované obřadní manipulace se světlem.",
        skepticke: "Závěr o rituálních obětech je založen na konkrétním archeologickém nálezu kostí uvnitř žlábku, ne na pouhé spekulaci - přesný rozsah a frekvence takových obětí ale zůstává badateli rekonstruován nepřímo, z fyzických stop spíše než z písemných záznamů, protože Inkové neměli písmo v evropském smyslu."
      },
      praktickeInfo: "Naleziště je veřejně přístupné a snadno kombinovatelné s návštěvou blízkých lokalit Sacsayhuamán a Tambomachay.",
      zdroje: [
        { nazev: "Wikipedia: Q'enqo", url: "https://en.wikipedia.org/wiki/Q%27enqo", licence: "CC BY-SA" },
        { nazev: "Wikidata: Q'enqo", url: "https://www.wikidata.org/wiki/Q2351926", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Qenko%20Cusco%20Peru", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Stříbrná deska odrážející slunce", text: "V jednom z výklenků obřadní komory ležela velká stříbrná deska, která odrážela sluneční paprsky přímo do místnosti - propracovaný obřadní efekt světla." },
        { nazev: "Kosti ve žlábku", text: "Archeologové nalezli ve žlábku procházejícím tunelem množství lidských kostí, což je vedlo k závěru, že místo sloužilo rituálním obětem." }
      ]
    }
  }
];

const places = readJson(placesPath);
const byId = new Map(places.map((place) => [place.id, place]));

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

console.log(`Enriched ${enriched} existing places.`);
