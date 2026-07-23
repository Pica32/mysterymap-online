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
    id: "ani-ruins",
    patch: {
      lead: "Bývalé hlavní město arménské říše se sto tisíci obyvateli, kterému se přezdívalo Město 1001 kostelů - dnes tu nežije nikdo.",
      atmosfera: 4.4,
      popisy: {
        zahada: "Na turecko-arménské hranici leží rozsáhlé ruiny středověkého města, které bylo ve svém rozkvětu soupeřem Konstantinopole i Káhiry - dnes je naprosto opuštěné a jeho jméno 'Město 1001 kostelů' je poetickou nadsázkou nad skutečným, přesto pozoruhodným počtem svatostánků.",
        historie: "Ani založili arménští Bagratovci v 9. století a v 10. a 11. století dosáhlo město vrcholu jako jejich hlavní město s více než 100 000 obyvateli žijícími uvnitř hradeb. Leželo na staré hedvábné obchodní stezce.",
        legenda: "Přestože skutečný počet nikdy nedosáhl tisíce, archeologové zdokumentovali přes 40 kostelů, kaplí a mauzoleí navržených nejlepšími architekty a umělci své doby - přezdívka 'Město 1001 kostelů' tak odráží spíš dojem z hustoty sakrálních staveb než doslovný fakt.",
        paranormalni: "Město upadalo postupně: dobytí Seldžuky roku 1064 znamenalo začátek konce, následovaly mongolské nájezdy, zemětřesení a proměny obchodních cest - do 17. století bylo Ani zcela opuštěno a ponecháno napospas živlům.",
        skepticke: "Zánik města má jasně zdokumentovanou kombinaci historických příčin - vojenské dobytí, přírodní katastrofy a ekonomický úpadek, ne tajemnou kletbu. Od roku 2016 je komplex na seznamu UNESCO jako svědectví arménské středověké architektury a městské kultury."
      },
      praktickeInfo: "Naleziště je přístupné s placeným vstupem nedaleko města Kars, leží těsně u uzavřené hranice s Arménií, doporučuje se počítat s celodenní návštěvou kvůli rozsahu areálu.",
      zdroje: [
        { nazev: "Wikipedia: Ani", url: "https://en.wikipedia.org/wiki/Ani", licence: "CC BY-SA" },
        { nazev: "Wikidata: Ani", url: "https://www.wikidata.org/wiki/Q546010", licence: "CC0" },
        { nazev: "National Geographic - City of 1001 Churches", url: "https://www.nationalgeographic.com/history/history-magazine/article/abandoned-ani-once-city-1001-churches", licence: "novinářský zdroj" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Ani%20Ruins%20Kars", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Sto tisíc lidí za hradbami", text: "Ve svém vrcholu žilo uvnitř městských hradeb Ani přes 100 000 lidí - metropole srovnatelná se soudobou Konstantinopolí nebo Káhirou." },
        { nazev: "Poetická nadsázka, ne fakt", text: "Přestože archeologové napočítali jen kolem 40 sakrálních staveb, přezdívka 'Město 1001 kostelů' vyjadřuje spíš dojem hustoty svatostánků než doslovné číslo." }
      ]
    }
  },
  {
    id: "nan-madol-pohnpei-reef",
    patch: {
      lead: "Kamenné 'Benátky Pacifiku' postavené na korálovém útesu z čedičových sloupů vážících přes 45 tun - podle legendy přenesených magií.",
      atmosfera: 4.5,
      popisy: {
        zahada: "U pobřeží mikronéského ostrova Pohnpei leží síť 92 umělých ostrůvků propojených kanály, postavená na korálovém útesu z čedičových sloupů, z nichž některé váží přes 45 tun - a nikdo si není jistý, jak je tehdejší obyvatelé bez moderní techniky dokázali přemístit a naskládat.",
        historie: "Stavba ostrůvků začala v 8. nebo 9. století, charakteristický megalitický styl se rozvinul mezi lety 1180 a 1200. Dynastie Saudeleurů vládla z Nan Madolu od zhruba roku 1100 do roku 1628, kdy je svrhl bojovník Isokelekel.",
        legenda: "Podle ústní tradice ostrova postavili Nan Madol dva bratři, Olisihpa a Olosohpa, kteří připluli kánoí a s pomocí bohů ovládali magii - právě tou měli podle legendy přemístit obří čedičové sloupy na místo stavby.",
        paranormalni: "Komplex o rozloze 1,5 na 0,5 kilometru zahrnuje hradbu, 92 ostrůvků, kanály, zavlažovací systém, obřadní i obytné části, hrobky a dokonce vězení - jeden z nejsložitějších stavebních počinů tichomořských ostrovních kultur.",
        skepticke: "Přesný způsob přepravy stotunových čedičových sloupů zůstává předmětem archeologického výzkumu, ne magie - pravděpodobně šlo o kombinaci vorů, pák a organizované lidské síly, i když detaily dosud nejsou plně objasněné. Od roku 2016 je lokalita na seznamu UNESCO jako obřadní centrum východní Mikronésie."
      },
      praktickeInfo: "Návštěva vyžaduje loďku z ostrova Pohnpei a často i místního průvodce, přístup závisí na přílivu, protože část kanálů je přístupná jen za nízké vody.",
      zdroje: [
        { nazev: "Wikipedia: Nan Madol", url: "https://en.wikipedia.org/wiki/Nan_Madol", licence: "CC BY-SA" },
        { nazev: "UNESCO World Heritage - Nan Madol", url: "https://whc.unesco.org/en/list/1503/", licence: "oficiální zdroj / UNESCO dokumentace" },
        { nazev: "Smithsonian Magazine - City Built on Coral Reefs", url: "https://www.smithsonianmag.com/history/nan-madol-the-city-built-on-coral-reefs-147288758/", licence: "novinářský zdroj" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Nan%20Madol%20Pohnpei", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Bratři s magickou mocí", text: "Ústní tradice ostrova připisuje stavbu dvěma bratrům, Olisihpovi a Olosohpovi, kteří měli s pomocí bohů a magie přemístit obří čedičové sloupy na místo stavby." },
        { nazev: "Sto tun kamene bez jeřábu", text: "Některé z čedičových sloupů použitých při stavbě váží přes 45 tun - přesný způsob jejich přepravy bez moderní techniky zůstává předmětem archeologického bádání." }
      ]
    }
  },
  {
    id: "citadelle-laferriere",
    patch: {
      lead: "Největší pevnost obou Amerik, kterou nechal postavit haitský král rukama 20 000 nedávno osvobozených otroků - proti invazi, která nikdy nepřišla.",
      atmosfera: 4.2,
      popisy: {
        zahada: "Na vrcholu haitské hory stojí obří pevnost postavená krátce po jediném úspěšném otrockém povstání v dějinách, které vedlo k založení samostatného státu - a jejíž stavba nakonec vyžadovala práci tisíců čerstvě osvobozených otroků.",
        historie: "Pevnost nechal roku 1805 zahájit Henri Christophe, klíčový vůdce haitského povstání otroků, tehdy generál a správce severních oblastí země. Roku 1811 založil na severu království a byl korunován jako Henry I., král Haiti.",
        legenda: "Masivní kamennou stavbu budovalo mezi lety 1805 a 1820 až 20 000 dělníků jako součást obranného systému proti případné francouzské invazi po úspěšném vyhlášení haitské nezávislosti. Haiti je jedinou zemí na světě, jejíž vznik byl přímým výsledkem úspěšného otrockého povstání.",
        paranormalni: "Ironií osudu Christophe k stavbě donutil pracovat tisíce nedávno osvobozených otroků s malou nebo žádnou odměnou - stejné lidi, jejichž svobodu měla pevnost bránit.",
        skepticke: "Francouzská invaze, které se Christophe obával, nikdy nepřišla, takže pevnost nikdy nebyla vyzkoušena v boji - přesto zůstává mohutným symbolem odhodlání bránit nově získanou nezávislost. Od roku 1982 je na seznamu UNESCO jako největší pevnost celé Ameriky."
      },
      praktickeInfo: "K pevnosti vede pěší nebo koňský výstup od blízkého paláce Sans-Souci, doporučuje se místní průvodce, přístupnost může kolísat podle aktuální bezpečnostní situace v zemi.",
      zdroje: [
        { nazev: "Wikipedia: Citadelle Laferrière", url: "https://en.wikipedia.org/wiki/Citadelle_Laferri%C3%A8re", licence: "CC BY-SA" },
        { nazev: "Wikidata: Citadelle Laferrière", url: "https://www.wikidata.org/wiki/Q206194", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Citadelle%20Laferriere%20Haiti", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Otroci stavějící pevnost svobody", text: "Ironií osudu nutil král Henri Christophe k stavbě pevnosti proti bývalým utlačovatelům právě nedávno osvobocené otroky, s malou nebo žádnou odměnou za jejich práci." },
        { nazev: "Invaze, která nikdy nepřišla", text: "Přestože pevnost vznikla jako obrana proti očekávanému francouzskému protiútoku, k žádné invazi nakonec nikdy nedošlo a stavba nebyla nikdy vyzkoušena v boji." }
      ]
    }
  },
  {
    id: "mount-yasur",
    patch: {
      lead: "Sopka, které kapitán Cook přezdíval 'maják Pacifiku' - a která od jeho objevu roku 1774 nepřestala ani na den chrlit oheň.",
      atmosfera: 4.3,
      popisy: {
        zahada: "Na ostrově Tanna ve Vanuatu stojí snad nejpřístupnější aktivní sopka na světě - k jejímu kráteru mohou návštěvníci dojet autem a nahlédnout do žhnoucích jícnů z pouhých pár set metrů.",
        historie: "Sopka je aktivní nepřetržitě minimálně od roku 1774, kdy ji objevil kapitán James Cook. Podle Global Volcanism Program funguje prakticky bez přestávky už přes 800 let.",
        legenda: "Když se Cookova loď přibližovala k ostrovu Tanna, záře z erupcí sopky sloužila jako přirozený maják ve tmě, což jí vyneslo přezdívku 'maják Pacifiku'. Přístav Port Resolution, kde Cook roku 1774 zakotvil, leží jen kousek od sopky dodnes.",
        paranormalni: "Sopka vybuchuje několikrát za hodinu, každou hodinu, každý den - návštěvníci mohou dojet až k okraji kráteru a sledovat výbuchy jen z bezpečné, ale velmi blízké vzdálenosti.",
        skepticke: "Nepřetržitá aktivita po staletí je vědecky dobře zdokumentovaný vulkanologický jev, ne zázrak - přístup je řízený licencovanými průvodci ve skupinách kvůli reálnému riziku padajících sopečných bomb, ne pověrčivé opatrnosti."
      },
      praktickeInfo: "Návštěva vyžaduje licencovaného průvodce a skupinovou organizaci, cesta zahrnuje jízdu terénním vozidlem a asi 15minutový pěší výstup k okraji kráteru.",
      zdroje: [
        { nazev: "Wikipedia: Mount Yasur", url: "https://en.wikipedia.org/wiki/Mount_Yasur", licence: "CC BY-SA" },
        { nazev: "Wikidata: Mount Yasur", url: "https://www.wikidata.org/wiki/Q392766", licence: "CC0" },
        { nazev: "Global Volcanism Program - Yasur", url: "https://volcano.si.edu/volcano.cfm?vn=257100", licence: "vědecká dokumentace" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Mount%20Yasur%20Tanna%20Vanuatu", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Maják, který přivedl Cooka k ostrovu", text: "Záře z erupcí sopky posloužila kapitánu Cookovi jako přirozený orientační bod při přibližování k ostrovu Tanna v roce 1774." },
        { nazev: "800 let bez přestávky", text: "Podle vulkanologů je Yasur aktivní prakticky nepřetržitě už přes 800 let - jedna z nejdéle nepřetržitě činných sopek na světě." }
      ]
    }
  },
  {
    id: "kaymakli-underground-city",
    patch: {
      lead: "Osmipatrové podzemní město, kde křesťané po staletí přežívali nájezdy - a kde se ještě na počátku 20. století skrývali místní Řekové.",
      atmosfera: 4.2,
      popisy: {
        zahada: "Pod kapadockou krajinou se rozprostírá další z rozsáhlých podzemních měst regionu - komplex, který posloužil jako úkryt před náboženským pronásledováním i vojenskými nájezdy po více než tisíc let.",
        historie: "Kořeny podzemního města sahají až k Chetitům ve 2. tisíciletí př. n. l., ale skutečný rozmach přišel za byzantské éry mezi 4. a 10. stoletím, kdy sloužilo jako útočiště křesťanům prchajícím před pronásledováním.",
        legenda: "Křesťané město využívali až do 14. století, a když region padl do rukou seldžuckých Turků, obyvatelé se do podzemního útočiště znovu uchýlili - záznamy dokládají, že kappadočtí Řekové ho používali ještě na počátku 20. století.",
        paranormalni: "Komplex se rozprostírá na ploše asi 8 čtverečních kilometrů a zahrnuje kuchyně, vinné sklepy, chlévy, studny i modlitebny rozmístěné napříč několika patry - široké vzduchové kanály zajišťovaly cirkulaci vzduchu i pro dlouhodobý pobyt.",
        skepticke: "Rozsah a technická vyspělost podzemního města jsou dobře zdokumentovanou archeologickou realitou, ne legendou - veřejnosti se otevřelo v roce 1964 a je součástí UNESCO chráněného regionu Kapadokie."
      },
      praktickeInfo: "Areál je přístupný s placeným vstupem, chodby jsou místy nízké a úzké, návštěva se nedoporučuje lidem s klaustrofobií nebo omezenou pohyblivostí.",
      zdroje: [
        { nazev: "Wikipedia: Kaymaklı underground city", url: "https://en.wikipedia.org/wiki/Kaymakli_underground_city", licence: "CC BY-SA" },
        { nazev: "Wikidata: Kaymaklı Underground City", url: "https://www.wikidata.org/wiki/Q118948370", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Kaymakli%20Underground%20City", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Útočiště používané do 20. století", text: "Záznamy dokládají, že kappadočtí Řekové se do podzemního města uchylovali před nebezpečím ještě na počátku 20. století - tisíce let po jeho prvním využití." },
        { nazev: "8 čtverečních kilometrů pod zemí", text: "Podzemní komplex se rozprostírá na ploše asi 8 čtverečních kilometrů s kuchyněmi, vinnými sklepy, chlévy i studnami rozmístěnými napříč několika patry." }
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
