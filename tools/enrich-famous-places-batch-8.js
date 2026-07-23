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
    id: "enewetak-atoll",
    patch: {
      lead: "Ostrov, kde je 120 000 tun radioaktivního odpadu zality do betonové kupole s prasklinami - a nikdo neví, jak dlouho ještě vydrží.",
      atmosfera: 4.3,
      popisy: {
        zahada: "Na tichomořském atolu Enewetak provedly USA mezi lety 1947 a 1958 desítky jaderných testů, včetně prvního testu vodíkové bomby - dnes je jejich pozůstatek zalitý v praskající betonové kupoli, kterou vědci označují za 'jednu bouři od úplného protržení'.",
        historie: "Na Enewetaku a sousedním Bikini proběhlo dohromady 67 jaderných výbuchů. Test s krycím názvem Ivy Mike z konce roku 1952, první test vodíkové bomby na světě, doslova vypařil ostrůvek Elugelab.",
        legenda: "Radioaktivní materiál byl v letech 1977-1980 shromážděn do 110metrového kráteru po testu Cactus na ostrově Runit a smíchán s více než 80 000 metry krychlovými portlandského cementu. Nad materiálem, obsahujícím smrtelné množství plutonia, postavili vojáci kupoli ze 358 betonových panelů.",
        paranormalni: "Kupole dnes drží přes 120 000 tun kontaminovaného materiálu, ale protože kráter nikdy nebyl vyložen nepropustnou vrstvou, vědci se obávají, že radioaktivní látky prosakují pórovitou korálovou skálou přímo do oceánu - a samotná betonová konstrukce už začala praskat.",
        skepticke: "Riziko je čistě technické a inženýrské, ne nadpřirozené - jde o rozpadající se provizorní stavbu z konce 70. let, která nebyla navržena na sedm desetiletí životnosti, a mezinárodní odborníci na jaderný odpad opakovaně upozorňují na nutnost trvalejšího řešení."
      },
      praktickeInfo: "Ostrov Runit je veřejnosti nepřístupný kvůli kontaminaci, zbytek atolu je řídce osídlený a návštěva vyžaduje speciální povolení.",
      zdroje: [
        { nazev: "Wikipedia: Enewetak Atoll", url: "https://en.wikipedia.org/wiki/Enewetak_Atoll", licence: "CC BY-SA" },
        { nazev: "Wikidata: Enewetak Atoll", url: "https://www.wikidata.org/wiki/Q649190", licence: "CC0" },
        { nazev: "ScienceAlert - Leaking Radioactive Tomb", url: "https://www.sciencealert.com/this-infamous-radioactive-tomb-is-leaking-and-experts-are-worried", licence: "novinářský zdroj" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Enewetak%20Atoll", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Ostrov, který zmizel", text: "První test vodíkové bomby na světě, Ivy Mike z roku 1952, doslova vypařil celý ostrůvek Elugelab, který je od té doby jednoduše pryč z mapy." },
        { nazev: "Bouři od katastrofy", text: "Odborníci opakovaně varují, že praskající betonová kupole nad 120 000 tunami radioaktivního odpadu je jen jednu silnou bouři od úplného protržení." }
      ]
    }
  },
  {
    id: "leptis-magna",
    patch: {
      lead: "Rodné město římského císaře, které díky jeho investicím zastínilo skoro celou severní Afriku - a upadlo do zapomnění po arabském dobytí.",
      atmosfera: 3.9,
      popisy: {
        zahada: "Na libyjském pobřeží Středomoří stálo starověké přístavní město, které díky jednomu rodákovi na římském trůnu vyrostlo do jednoho z nejvýznamnějších měst severní Afriky - a po staletí pak leželo zapomenuté v písku.",
        historie: "Leptis Magna založili Féničané z Tyru v 7. století př. n. l. a stalo se největším městem Tripolitánie a významným středomořským a transsaharským obchodním centrem. Bylo rodištěm císaře Septimia Severa (vládl 193-211 n. l.).",
        legenda: "Septimius Severus svému rodnému městu udělil takzvané jus Italicum, tedy osvobození od majetkových a pozemkových daní, a stal se jeho velkým mecenášem. Díky jeho investicím se z Leptis Magna stalo druhé nejvýznamnější město římské severní Afriky hned po Kartágu, s honosným divadlem, fórem a čtyřbokým vítězným obloukem tetrapylonem postaveným na počest jeho návštěvy roku 203 n. l.",
        paranormalni: "Většina dochovaných staveb na nalezišti pochází právě z období vlády Septimia Severa - hmatatelný důkaz, jak moc dokázala jediná osoba na trůně změnit osud svého rodného města.",
        skepticke: "Úpadek města má jasné historické příčiny - rostoucí nejistotu na hranicích říše, ničivý vpád roku 363 a sílící hospodářské potíže Říma, ne kletbu. Po arabském dobytí roku 642 městský život v Leptis Magna prakticky zanikl a naleziště upadlo do zapomnění, dnes je chráněno jako UNESCO."
      },
      praktickeInfo: "Naleziště je jedním z nejlépe dochovaných římských měst na světě, přístupnost pro zahraniční návštěvníky je nutné ověřit vzhledem k bezpečnostní situaci v Libyi.",
      zdroje: [
        { nazev: "Wikipedia: Leptis Magna", url: "https://en.wikipedia.org/wiki/Leptis_Magna", licence: "CC BY-SA" },
        { nazev: "Wikidata: Leptis Magna", url: "https://www.wikidata.org/wiki/Q191504", licence: "CC0" },
        { nazev: "UNESCO World Heritage - Leptis Magna", url: "https://whc.unesco.org/en/list/183/", licence: "oficiální zdroj / UNESCO dokumentace" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Leptis%20Magna", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Císař, který zbohatl vlastní město", text: "Septimius Severus zahrnul své rodné Leptis Magna daňovými úlevami a monumentálními stavbami, čímž z něj udělal druhé nejvýznamnější město římské Afriky hned po Kartágu." },
        { nazev: "Zapomenuté po arabském dobytí", text: "Po roce 642 městský život v Leptis Magna prakticky zanikl a naleziště zůstalo v písku zapomenuté po staletí, než ho znovu objevili moderní archeologové." }
      ]
    }
  },
  {
    id: "loulan",
    patch: {
      lead: "Zaniklé město na Hedvábné stezce, jehož nejslavnější obyvatelkou je 3800 let stará mumie se světlými vlasy a evropskými rysy.",
      atmosfera: 4.2,
      popisy: {
        zahada: "Na okraji pouště Taklamakan leží ruiny města, které bývalo rušnou křižovatkou Hedvábné stezky - a jeho nejznámější 'obyvatelkou' je dodnes mumie ženy s blonďatými vlasy a evropskými rysy, stará téměř 4000 let.",
        historie: "Loulan, přezdívané 'orientální Pompeje', leželo na křižovatce jižní a severní větve Hedvábné stezky a bylo pravděpodobně hlavním městem stejnojmenného království. Ruiny se rozkládají na východním okraji pouště Taklamakan poblíž dnes vyschlého slaného jezera Lop Nur.",
        legenda: "V roce 1980 archeologové objevili takzvanou 'Krásku z Loulanu' - mumii starou asi 3800 let s pozoruhodně zachovanými rysy tváře, vysokými lícními kostmi, výraznou nosní kostí a blonďatými vlasy naznačujícími kavkazský původ. Zemřela kolem čtyřicítky, oblečená ve svém červeném rouchu, s vlasy stále spletenými do módního účesu své doby.",
        paranormalni: "Kráska z Loulanu je jednou z více než dvou set mumií nalezených v západních pouštích Sin-ťiangu, které díky přirozenému suchu a slanému podloží zůstaly pozoruhodně zachovány po tisíce let.",
        skepticke: "Přítomnost kavkazských rysů u tak staré mumie na místě, kde bylo dlouho předpokládáno jen čínské osídlení, je vědecky zajímavým, ale vysvětlitelným dokladem raného pohybu národů po Hedvábné stezce - jediné muzeum věnované Loulanu na světě otevřeli v roce 2011 v čínském Žokchiangu."
      },
      praktickeInfo: "Samotné naleziště leží v odlehlé a přísně kontrolované vojenské oblasti poblíž Lop Nuru s omezeným přístupem, mumie a artefakty jsou vystaveny v Loulan Museum.",
      zdroje: [
        { nazev: "Wikipedia: Beauty of Loulan", url: "https://en.wikipedia.org/wiki/Beauty_of_Loulan", licence: "CC BY-SA" },
        { nazev: "Wikidata: Loulan Kingdom", url: "https://www.wikidata.org/wiki/Q1057551", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Loulan%20ruins%20Xinjiang", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Krásný účes po 3800 letech", text: "Mumie nalezená roku 1980 měla vlasy stále spletené do módního účesu své doby - detail, který dodnes fascinuje badatele i návštěvníky muzea." },
        { nazev: "Evropská tvář uprostřed Asie", text: "Vysoké lícní kosti, výrazná nosní kost a blonďaté vlasy mumie naznačují kavkazský původ - nečekaný doklad raného míšení národů na Hedvábné stezce." }
      ]
    }
  },
  {
    id: "aleppo-citadel",
    patch: {
      lead: "Dvoutisíciletá pevnost nad Aleppem, kterou nedokázaly zničit dobyvatelé po staletí - ale málem se to podařilo občanské válce.",
      atmosfera: 4.0,
      popisy: {
        zahada: "Nad syrským Aleppem se tyčí pevnost s historií sahající téměř dva tisíce let - a přestože přečkala nespočet dobyvatelů, jen tak tak unikla zkáze během nedávné občanské války.",
        historie: "Spodní část hlavního vstupu citadely pochází ze 3. století n. l., horní přístavby ze 15. století, většina věží a hradeb byla postavena nebo rozšířena mezi 13. a 16. stoletím. Od roku 1986 je na seznamu UNESCO.",
        legenda: "Během bitvy o Aleppo obsadily citadelu vládní síly a stavba utrpěla vážné poškození - vnější brána byla poškozena roku 2012 a v roce 2015 explodovala nálož v tunelu pod jednou z vnějších zdí. Okolí citadely bylo zasaženo ostřelováním, leteckým bombardováním a tunelovými výbuchy.",
        paranormalni: "Celkem 60 procent staré části Aleppa bylo během konfliktu vážně poškozeno a 30 procent úplně zničeno - citadela samotná ale díky mohutné konstrukci přežila i přes přímé útoky.",
        skepticke: "Poškození má jasnou, zdokumentovanou příčinu ve vojenském konfliktu, ne v přírodním chátrání - po letech uzavření, zanedbání a válečných škod se citadela po rozsáhlé obnově znovu otevřela návštěvníkům, důkaz, že fyzická odolnost stavby dokázala přežít i moderní válku."
      },
      praktickeInfo: "Citadela je po obnově opět přístupná návštěvníkům, doporučuje se ověřit aktuální bezpečnostní situaci v regionu před plánováním cesty.",
      zdroje: [
        { nazev: "Wikipedia: Citadel of Aleppo", url: "https://en.wikipedia.org/wiki/Citadel_of_Aleppo", licence: "CC BY-SA" },
        { nazev: "Wikidata: Citadel of Aleppo", url: "https://www.wikidata.org/wiki/Q206231", licence: "CC0" },
        { nazev: "Arab News - Aleppo Citadel witness to history", url: "https://www.arabnews.com/node/2628100/middle-east", licence: "novinářský zdroj" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Aleppo%20Citadel", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Nálož v tunelu pod zdmi", text: "V roce 2015 odpálili útočníci výbušninu v tunelu vyhloubeném pod jednou z vnějších zdí citadely - moderní forma obléhání staré tisíce let staré pevnosti." },
        { nazev: "60 procent starého města poškozeno", text: "Zatímco samotná citadela díky mohutné konstrukci přežila, celých 60 procent okolní staré čtvrti Aleppa utrpělo vážné škody a 30 procent bylo zcela zničeno." }
      ]
    }
  },
  {
    id: "arecibo-observatory",
    patch: {
      lead: "Obří radioteleskop, který 57 let poslouchal vesmír a jednou mu i sám poslal vzkaz - než se v roce 2020 sesul sám do sebe.",
      atmosfera: 4.0,
      popisy: {
        zahada: "V portorických horách stál 57 let druhý největší jednomíškový radioteleskop na světě - dokud se roku 2020 jeho 817 tunová přijímací plošina nezřítila přímo do talíře pod sebou.",
        historie: "Observatoř sloužila vědě od svého otevření po více než půl století, prováděla objevy napříč celým vesmírem. Potíže začaly hurikánem Maria v roce 2017, který utrhl jednu z 29metrových antén zavěšených nad talířem a padající trosky poškodily talíř na několika místech.",
        legenda: "V srpnu 2020 prasklo pomocné lano, které způsobilo 30metrovou trhlinu v 305metrovém talíři a poškodilo přijímací plošinu, začátkem listopadu pak prasklo hlavní nosné lano. Sled selhání lan nakonec 1. prosince 2020 způsobil zřícení celé přijímací plošiny do talíře.",
        paranormalni: "Observatoř se proslavila hlavně vysláním slavné zprávy SETI z roku 1974 směrem ke kulové hvězdokupě M13 v pokusu o kontakt s mimozemskou inteligencí - dodnes symbol lidské snahy najít společnost ve vesmíru.",
        skepticke: "Zřícení mělo jasnou, technicky zdokumentovanou příčinu - postupné selhání nosných lan urychlené poškozením z hurikánu, ne žádnou záhadu. Národní vědecká nadace v roce 2022 navzdory širokému tlaku astronomické komunity oznámila, že ikonický teleskop nebude znovu postaven."
      },
      praktickeInfo: "Areál observatoře zůstává částečně přístupný jako návštěvnické centrum s expozicí o historii vědeckého pracoviště, samotný talíř a přijímací plošina byly po zřícení odstraněny.",
      zdroje: [
        { nazev: "Wikipedia: Arecibo Observatory", url: "https://en.wikipedia.org/wiki/Arecibo_Observatory", licence: "CC BY-SA" },
        { nazev: "Wikidata: Arecibo Observatory", url: "https://www.wikidata.org/wiki/Q102327045", licence: "CC0" },
        { nazev: "Smithsonian Magazine - Arecibo Telescope Collapse", url: "https://www.smithsonianmag.com/smart-news/massive-arecibo-telescope-collapses-puerto-rico-180976443/", licence: "novinářský zdroj" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Arecibo%20Observatory", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Vzkaz pro mimozemšťany z roku 1974", text: "Observatoř vyslala slavnou zprávu SETI směrem ke vzdálené hvězdokupě M13 v pokusu navázat kontakt s mimozemskou inteligencí - poselství dodnes putuje vesmírem." },
        { nazev: "Tři roky od hurikánu ke zřícení", text: "Od poškození hurikánem Maria v roce 2017 po definitivní zřícení v prosinci 2020 uplynuly tři roky postupného chátrání nosných lan, než observatoř definitivně podlehla." }
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
