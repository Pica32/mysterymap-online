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
    id: "lop-nur",
    patch: {
      lead: "Zaniklé jezero, na jehož dně Čína odpálila desítky jaderných náloží - a jehož okolní vesnice byly vystěhovány bez jakékoli náhrady.",
      atmosfera: 4.0,
      popisy: {
        zahada: "V odlehlé čínské poušti leží pozůstatky slaného jezera, které podle radiokarbonových datování existovalo ve svém regionu proměnlivě po dobu asi 20 000 let - než ho definitivně vysušila kombinace klimatu a lidského zásahu, a jeho dno se stalo jedním z největších jaderných zkušebních polygonů na světě.",
        historie: "Roku 1964 zde Čína úspěšně odpálila svou první atomovou nálož a mezi lety 1964 a 1996 sloužila oblast přerušovaně jako testovací polygon pro podzemní i atmosférické jaderné výbuchy. Testovací zóna Lop Nur o rozloze asi 100 000 čtverečních kilometrů patří k největším na světě.",
        legenda: "Kdysi rozlehlé slané jezero mapované starověkými čínskými zeměpisci dnes z většiny vyschlo a proměnilo se v bažiny a malá, přesouvající se jezírka napájená řekou Tarim. Od zmizení vody z jezera region zažívá zesílenou větrnou erozi - solný příkrov dnes pokrývá přes 21 000 čtverečních kilometrů a nepravidelné solné hřbety takzvané yardangy zabírají dalších přibližně 3100 čtverečních kilometrů.",
        paranormalni: "Vesnice v okolí Lop Nuru byly kvůli testům přesídleny bez jakékoli kompenzace a mnoho obyvatel se do svých domovů už nikdy nevrátilo - zemědělství v ozářených zónách zůstává dodnes nemožné.",
        skepticke: "Zánik jezera je kombinací dlouhodobých klimatických změn a lidského odklonu vody z řeky Tarim pro zavlažování, ne záhadou - jaderné testování oblast dál znečistilo, ale samotné vysychání začalo z přirozených příčin dávno předtím, než sem dorazily první jaderné nálože."
      },
      praktickeInfo: "Oblast zůstává vojensky kontrolovanou zónou s omezeným přístupem, návštěva vyžaduje speciální povolení čínských úřadů.",
      zdroje: [
        { nazev: "Wikipedia: Lop Nur", url: "https://en.wikipedia.org/wiki/Lop_Nur", licence: "CC BY-SA" },
        { nazev: "Wikidata: Lop Nur", url: "https://www.wikidata.org/wiki/Q319412", licence: "CC0" },
        { nazev: "Britannica - Lop Nur", url: "https://www.britannica.com/place/Lop-Nur", licence: "vzdělávací zdroj" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Lop%20Nur%20China", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "20 000 let vody, pak nic", text: "Radiokarbonové datování ukázalo, že jezero v nějaké podobě existovalo v regionu asi 20 000 let, než ho definitivně vysušila kombinace klimatu a odklonu vody pro zavlažování." },
        { nazev: "Vystěhování bez náhrady", text: "Vesnice v blízkosti testovacího polygonu byly přesídleny bez jakékoli kompenzace a řada obyvatel se do svých domovů už nikdy nevrátila." }
      ]
    }
  },
  {
    id: "takht-e-soleyman",
    patch: {
      lead: "Zoroastriánská svatyně, kde hořel jeden ze tří nejposvátnějších ohňů zaratustrismu - a vedle ní kráter, do kterého prý král Šalomoun věznil démony.",
      atmosfera: 4.2,
      popisy: {
        zahada: "V horách íránského Ázerbájdžánu leží 3000 let stará svatyně, jejíž jméno v překladu znamená 'Trůn Šalomounův' - přestože s biblickým králem nemá nic společného, kromě legendy, která mu připisuje moc nad kráterem vedle chrámu.",
        historie: "Místo bylo za sásánovské éry centrem zoroastriánského uctívání s chrámem a posvátným ohněm. Chrám ukrýval Ádur Gušnasp, jeden ze tří velkých ohňů zoroastrismu nejvyššího řádu, o kterém se věřilo, že hoří od úsvitu stvoření. Svatyně sloužila jako královská zoroastriánská svatyně za vlády Chosrova I. a Chosrova II.",
        legenda: "Biblické jméno místo dostalo až po arabské invazi do Íránu v 7. století. Lidová tradice vypráví, že král Šalomoun věznil obludy v nedalekém kráteru hlubokém 100 metrů, zvaném Zendán-e Solejmán, tedy 'Šalomounovo vězení'. Podle jiné verze legendy měl Šalomoun na tuto horu vystoupit a shlížet odtud přes celou Jižní Asii.",
        paranormalni: "Kombinace posvátného ohně, hlubokého přírodního kráteru a biblické legendy vytváří na místě neobvyklé prolnutí zoroastriánské a islámské tradice - dvou zcela odlišných náboženských vrstev na jednom místě.",
        skepticke: "Historicky doloženým jádrem místa je sásánovská zoroastriánská svatyně s posvátným ohněm, ne Šalomounovo vězení pro démony - biblické jméno je pozdější interpretace přidaná až po arabském dobytí, kdy islámská tradice hledala způsob, jak dát starému místu nový, srozumitelný význam. Od roku 2003 je na seznamu UNESCO."
      },
      praktickeInfo: "Naleziště je přístupné s placeným vstupem, zahrnuje i přírodní jezero uvnitř starého kráteru s výrazně vysokým obsahem minerálů.",
      zdroje: [
        { nazev: "Wikipedia: Takht-e Soleymān", url: "https://en.wikipedia.org/wiki/Takht-e_Soleym%C4%81n", licence: "CC BY-SA" },
        { nazev: "Wikidata: Takht-e Soleyman", url: "https://www.wikidata.org/wiki/Q5827147", licence: "CC0" },
        { nazev: "UNESCO World Heritage - Takht-e Soleyman", url: "https://whc.unesco.org/en/list/1077/", licence: "oficiální zdroj / UNESCO dokumentace" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Takht-e%20Soleyman%20Iran", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Oheň hořící od stvoření světa", text: "Chrám ukrýval Ádur Gušnasp, jeden ze tří nejposvátnějších ohňů zoroastrismu, o kterém věřící tvrdili, že hoří nepřetržitě od samotného počátku stvoření." },
        { nazev: "Vězení pro obludy", text: "Podle lidové tradice měl král Šalomoun věznit nadpřirozené obludy v nedalekém stometrovém kráteru zvaném 'Šalomounovo vězení'." }
      ]
    }
  },
  {
    id: "kuelap",
    patch: {
      lead: "Pevnost 'válečníků z oblak', kterou Inkové na rozdíl od zbytku říše nikdy nedobyli - a která přežila i dobu, kdy zbytek civilizace zanikl.",
      atmosfera: 4.1,
      popisy: {
        zahada: "V peruánském mračném lese na strmých horách stojí pevnost s hradbami vysokými až 20 metrů, kterou postavil lid nazývaný 'válečníci z oblak' - a kterou na rozdíl od téměř celé zbytku regionu nikdy nedobyli Inkové.",
        historie: "Kultura Čačapoja se rozvíjela v krajině mračných lesů, strmých hor a hlubokých kaňonů, což jí vyneslo přezdívku 'Válečníci z oblak'. Radiokarbonové datování ukazuje, že stavba pevnosti Kuélap začala už v 6. století n. l. Komplex zabírá plochu téměř 65 000 čtverečních metrů a v době svého rozkvětu měl až 3000 obyvatel - nejen válečníky, ale i obchodníky, šamany a zemědělce.",
        legenda: "Kultura Čačapoja přežívala od zhruba roku 500 n. l. až do porážky Inky roku 1470 a konečného zániku po příchodu Španělů roku 1570, kdy bylo místo úplně opuštěno a pohltil ho les. Zajímavé je, že Inkové Kuélap po svém dobytí regionu nechali na pokoji a Čačapojové zde mohli dál žít.",
        paranormalni: "Místo znovu objevil až v roce 1843 náhodou soudce z Chačapojas Juan Crisóstomo Nieto, když řešil místní pozemkový spor - stovky let po opuštění pevnosti zůstávala prakticky zapomenutá.",
        skepticke: "Historie pevnosti je dobře zdokumentovaná archeologickým výzkumem a radiokarbonovým datováním, ne legendou - fakt, že ji Inkové ponechali bez zásahu, zatímco jinde v Peru téměř vždy přestavovali dobytá místa podle vlastního vzoru, je zajímavou historickou zvláštností, ne tajemstvím."
      },
      praktickeInfo: "K pevnosti vede lanovka od blízkého městečka Nuevo Tingo, což výrazně zkrátilo dřívější několikahodinový pěší výstup, doporučuje se počítat s chladnějším horským počasím.",
      zdroje: [
        { nazev: "Wikipedia: Kuélap", url: "https://en.wikipedia.org/wiki/Ku%C3%A9lap", licence: "CC BY-SA" },
        { nazev: "Wikidata: Kuelap", url: "https://www.wikidata.org/wiki/Q1361820", licence: "CC0" },
        { nazev: "Ancient Origins - Kuelap Cloud Warriors", url: "https://www.ancient-origins.net/ancient-places-americas/kuelap-peru-ancient-fortress-cloud-warriors-002915", licence: "vzdělávací zdroj" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Kuelap%20Peru", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Pevnost, kterou Inkové nechali být", text: "Na rozdíl od téměř všech ostatních dobytých regionů Peru nechali Inkové pevnost Kuélap i její obyvatele po svém dobytí bez zásahu - výjimečné gesto, jehož důvody archeologové stále zkoumají." },
        { nazev: "Objev při pozemkovém sporu", text: "Pevnost znovu objevil v roce 1843 čirou náhodou místní soudce, který v oblasti řešil obyčejný spor o pozemek." }
      ]
    }
  },
  {
    id: "masaya-volcano",
    patch: {
      lead: "Sopku, kterou domorodí obyvatelé krmili pannami a Španělé se ji pokusili exorcizovat obřím křížem, dodnes zdobí ona stejná Bobadillova kříž.",
      atmosfera: 4.5,
      popisy: {
        zahada: "Nad nikaragujskou krajinou se dýmá sopka, kterou od první chvíle, kdy ji Španělé spatřili, nazývali 'ústa pekla' - a kterou se pokusili roku 1529 vymýtit obřím křížem dodnes stojícím na jejím okraji.",
        historie: "Španělští dobyvatelé narazili na sopku brzy po příchodu do Nikaraguy, přibližně 30 let po objevení Ameriky Kolumbem, a hned ji nazvali 'Peklem Masaya'. Roku 1529 nechali na vrcholu postavit obří kříž zvaný Cruz de Bobadilla, aby z kráteru vymýtili ďábla, o kterém věřili, že tam sídlí.",
        legenda: "Domorodé obyvatelstvo mělo o sopce vlastní, ještě starší tradici: věřili, že jde o boha, kterému přinášeli oběti - během období sucha do žhnoucího kráteru házeli mladé dívky, aby prý 'přinesly vodu'. Podle legendy je házeli bohyni ohně Chaciutique jako oběť za usmíření.",
        paranormalni: "Kříž Cruz de Bobadilla zůstává výrazným symbolem na okraji kráteru dodnes - viditelný důkaz koloniálního pokusu podřídit domorodou i křesťanskou představu o pekle jedné fyzické hoře.",
        skepticke: "Intenzivní vulkanická aktivita, kterou Španělé i domorodé obyvatelstvo nezávisle na sobě interpretovali jako doklad nadpřirozeného zla nebo boha, má čistě geologické vysvětlení - sopka byla ve skutečnosti v době příchodu Španělů aktivní současně se sopkou Momotombo, což byl první zážitek raných Evropanů s vulkanickou aktivitou v Novém světě."
      },
      praktickeInfo: "Národní park nabízí přístup autem až k okraji kráteru, noční prohlídky umožňují pozorovat žhnoucí lávu, doporučuje se dbát pokynů kvůli jedovatým sopečným plynům.",
      zdroje: [
        { nazev: "Wikipedia: Masaya Volcano", url: "https://en.wikipedia.org/wiki/Masaya_Volcano", licence: "CC BY-SA" },
        { nazev: "Wikidata: Masaya Volcano National Park", url: "https://www.wikidata.org/wiki/Q1969102", licence: "CC0" },
        { nazev: "VolcanoCafe - Masaya Mouth of Hell", url: "https://www.volcanocafe.org/masaya-volcano-the-mouth-of-hell/", licence: "vzdělávací zdroj" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Masaya%20Volcano%20Nicaragua", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Kříž proti ďáblu z roku 1529", text: "Španělé nechali na okraji kráteru postavit obří kříž Cruz de Bobadilla, aby exorcizovali ďábla, o kterém věřili, že v sopce sídlí - kříž stojí na místě dodnes." },
        { nazev: "Oběti bohyni ohně", text: "Domorodé obyvatelstvo dlouho před příchodem Španělů házelo do kráteru mladé dívky jako oběť bohyni ohně Chaciutique, aby usmířilo sucho." }
      ]
    }
  },
  {
    id: "mungo-man-site",
    patch: {
      lead: "Kostra stará 62 000 let přepsala historii lidského osídlení Austrálie - a jeho žena o dvacet tisíciletí mladší je nejstarším dokladem kremace na světě.",
      atmosfera: 4.0,
      popisy: {
        zahada: "V australském vyschlém jezeře objevili geologové ostatky, které o desítky tisíc let posunuly dosavadní představu o tom, jak dávno lidé osídlili kontinent - a jeden z nálezů je zároveň nejstarším známým dokladem obřadní kremace na světě.",
        historie: "Jezero Mungo vyschlo asi před 14 000 lety. Roku 1968 zde geolog Jim Bowler objevil ostatky mladé domorodé ženy, dnes známé jako 'Paní z Munga', a v roce 1974 kompletní kostru muže, 'Muže z Munga'.",
        legenda: "Paní z Munga je stará asi 40 000 až 42 000 let a patří mezi vůbec nejstarší nalezené ostatky anatomicky moderního člověka na světě, Muž z Munga je odhadován na asi 62 000 let - obě datování výrazně předcházejí dřívější předpoklad, že lidé osídlili Austrálii teprve před 20 000 lety.",
        paranormalni: "Kosti Paní z Munga byly před pohřbením spáleny, což z ní činí nejstarší doložený případ kremace na světě. Muž z Munga byl podobně rituálně pohřben na zádech se zkříženýma rukama v klíně a tělem posypaným červeným okrem.",
        skepticke: "Sofistikovaný pohřební rituál u obou nálezů naznačuje mnohem starší a propracovanější sociální strukturu i systém víry, než se dříve předpokládalo - objev má pro domorodé Australany hluboký kulturní význam jako doklad kontinuity jejich přítomnosti na kontinentu po desítky tisíc let, potvrzený moderní vědou, ne pouhou legendou."
      },
      praktickeInfo: "Lokalita je součástí národního parku Mungo, přístupná s návštěvnickým centrem, ostatky byly po letech ve výzkumných institucích navráceny a znovu pohřbeny na místě jejich původního nálezu v roce 2022 podle přání domorodé komunity.",
      zdroje: [
        { nazev: "Wikipedia: Lake Mungo remains", url: "https://en.wikipedia.org/wiki/Lake_Mungo_remains", licence: "CC BY-SA" },
        { nazev: "Wikidata: Lake Mungo", url: "https://www.wikidata.org/wiki/Q452812", licence: "CC0" },
        { nazev: "Smithsonian Magazine - Mungo Man Goes Home", url: "https://www.smithsonianmag.com/history/mungo-man-finally-goes-home-180972835/", licence: "novinářský zdroj" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Lake%20Mungo%20Australia", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Nejstarší kremace na světě", text: "Paní z Munga, stará 40 000 až 42 000 let, byla před pohřbením rituálně spálena - nejstarší dosud známý doklad obřadní kremace na celé planetě." },
        { nazev: "62 000 let staré ruce v klíně", text: "Muž z Munga byl pohřben na zádech se zkříženýma rukama v klíně a tělem posypaným červeným okrem - propracovaný rituál starý desítky tisíc let." }
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
