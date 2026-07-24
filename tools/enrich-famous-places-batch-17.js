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
    id: "lake-titicaca-isla-del-sol",
    patch: {
      lead: "Ostrov, kde se podle inckého mýtu poprvé objevilo slunce - a odkud měl vzejít i první vládce celé říše.",
      gps: { lat: -16.02056, lon: -69.17639 },
      atmosfera: 4.2,
      popisy: {
        zahada: "Na jezeře Titicaca leží ostrov nepřetržitě osídlený minimálně od roku 2200 př. n. l. - a podle inckého mýtu o stvoření právě odtud poprvé vyšlo slunce a odtud pocházel i první vládce incké říše.",
        historie: "Ostrov hostil postupně několik civilizací: rané formativní období (1800-1100 př. n. l.), střední formativní (1100-500 př. n. l.), pozdní formativní (500 př. n. l. - 500 n. l.) a významné osídlení kultury Tiwanaku. Inkové z něj později udělali poutní místo srovnatelné významem s Pachacamacem.",
        legenda: "Podle kronikáře Bernabé Coba existovaly dvě verze inckého mýtu o stvoření spojené se severní částí ostrova. V obou hraje ústřední roli sluneční bůh Inti - v jedné verzi se dávní lidé báli trvající temnoty, dokud 'lidé neviděli Slunce vystupovat ze skály' u místa Titi Qala, v druhé se slunce skrývalo pod skálou během velké potopy a vynořilo se, když voda ustoupila, přičemž Isla del Sol byl prvním souší, která se znovu objevila.",
        paranormalni: "Inkové věřili, že jejich první vládce Manco Cápac, syn boha Inti, se zrodil právě z výrazného pískovcového výstupku zvaného Titi Qala. Na tomto místě postavili chrám, který později rozšířil desátý Inka Tupac Inca Yupanqui o zázemí pro poutníky a vyvolené ženy.",
        skepticke: "Dlouhodobé archeologické osídlení ostrova od roku 2200 př. n. l. je vědecky dobře doložené, mýtus o stvoření slunce je naopak čistě náboženskou tradicí, kterou Inkové postavili na již existující posvátnosti místa uctívané předchozími kulturami po tisíce let."
      },
      praktickeInfo: "K ostrovu vedou lodní spojení z bolivijského města Copacabana, na ostrově je možné přenocovat v místních guesthousech, doporučuje se počítat s vysokou nadmořskou výškou jezera Titicaca.",
      zdroje: [
        { nazev: "Wikipedia: Isla del Sol", url: "https://en.wikipedia.org/wiki/Isla_del_Sol", licence: "CC BY-SA" },
        { nazev: "Wikidata: Isla del Sol", url: "https://www.wikidata.org/wiki/Q600282", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Isla%20del%20Sol%20Titicaca", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Skála, ze které se zrodil vládce", text: "Podle inckého mýtu se z pískovcového výstupku Titi Qala zrodil Manco Cápac, syn boha slunce a první vládce celé incké říše." },
        { nazev: "Dvě verze jednoho mýtu", text: "Dochovaly se dvě odlišné verze mýtu o stvoření slunce na ostrově - v jedné slunce prostě vystoupilo ze skály, v druhé se skrývalo před velkou potopou a ostrov byl prvním souší, které se znovu vynořilo." }
      ]
    }
  },
  {
    id: "cappadocia-fairy-chimneys",
    patch: {
      lead: "Skalní komíny, do kterých křesťané tesali kostely a domovy - a kterým dalo jméno slovní spojení znamenající 'tohle místo nemůžeš vidět'.",
      atmosfera: 4.4,
      popisy: {
        zahada: "V tureckém Göreme se zvedají z krajiny stovky přírodních skalních věží zvaných 'víly komíny', do kterých lidé už od 3. století tesali obydlí, kostely i celé kláštery - a jejichž jméno v původní podobě znamenalo doslova 'tohle místo nemůžeš vidět'.",
        historie: "Göreme se stalo významným raně křesťanským centrem už mezi 6. a 9. stoletím. Byzantské záznamy dokládají dvě sousední osady, Koramu a Matianu, zmíněné na Chalcedonském koncilu roku 451 n. l.",
        legenda: "Jméno 'Korama' pochází ze spojení 'gor emi', tedy 'tohle místo nemůžeš vidět' - odkaz na to, jak křesťané využívali skryté doliny jako úkryt během náboženského pronásledování. Poddajná povaha místní horniny umožnila rozsáhlé vytesávání obydlí, kostelů i klášterů přímo do skalních komínů.",
        paranormalni: "Z skromné zemědělské osady se Göreme po 70. letech 20. století dramaticky proměnilo - do roku 2000 se stalo 'turistickou metropolí Kappadokie', dnes region pohání turistika horkovzdušnými balóny a butikové hotely přestavěné z bývalých jeskynních obydlí.",
        skepticke: "Charakteristický tvar skalních komínů vzniká erozí měkkých vulkanických usazenin pod tvrdší čedičovou čepicí, ne magií - stejný geologický proces, který kdysi poskytoval úkryt pronásledovaným křesťanům, dnes přitahuje miliony turistů kvůli čistě estetické, ne duchovní hodnotě krajiny."
      },
      praktickeInfo: "Oblast je přístupná celoročně, nejoblíbenější aktivitou je let horkovzdušným balónem při východu slunce, mnoho bývalých jeskynních obydlí bylo přestavěno na hotely a restaurace.",
      zdroje: [
        { nazev: "Wikipedia: Göreme", url: "https://en.wikipedia.org/wiki/G%C3%B6reme", licence: "CC BY-SA" },
        { nazev: "Wikidata: Göreme", url: "https://www.wikidata.org/wiki/Q6710593", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Goreme%20Cappadocia", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Jméno znamenající úkryt", text: "Původní název Korama pochází ze slovního spojení znamenajícího 'tohle místo nemůžeš vidět' - odkaz na to, jak skryté doliny sloužily pronásledovaným křesťanům jako úkryt." },
        { nazev: "Z vesnice turistickou metropolí", text: "Ještě v 70. letech šlo o skromnou zemědělskou osadu, do roku 2000 se ale Göreme stalo hlavním turistickým centrem celé Kappadokie." }
      ]
    }
  },
  {
    id: "taxila",
    patch: {
      lead: "Univerzitní město, kam přicházeli studovat synové králů i rybářů - dokud ho ve stoletích po sobě nezničily čtyři různé vlny nájezdníků.",
      atmosfera: 3.9,
      popisy: {
        zahada: "V pákistánském Paňdžábu leží pozůstatky města, které bylo přes tisíc let jedním z nejvýznamnějších center vzdělanosti starověkého světa - a jehož brány byly otevřené synům králů i rybářů stejně.",
        historie: "Taxila vznikla kolem roku 1000 př. n. l. na východním břehu Indu a stala se hlavním městem království Gándhára. Postupně jí vládly různé říše - Achaimenovci (550-326 př. n. l.), Alexandr Veliký (326 př. n. l.), Maurjové (asi 317-200 př. n. l.), indo-řecké, indo-skythské, kušánské a guptovské dynastie.",
        legenda: "Město se proslavilo jako intelektuální centrum, kde studenti studovali u jednotlivých učitelů, ne v institucionalizovaných školách, obory sahaly od náboženských nauk přes osmnáct umění (včetně lukostřelby a vojenské vědy) po medicínu a právo. Mezi absolventy patřil i Čánakja (Kautilja), rádce Čandragupty Maurji, a gramatik Pánini. Přijímáni byli 'synové králů, šlechticů, obchodníků, krejčích a dokonce rybářů', obvykle v šestnácti letech po dokončení základního vzdělání jinde.",
        paranormalni: "Od 5. století začal nezvratný úpadek: kolem roku 450 n. l. město napadli Kidarité, kolem roku 470 n. l. následovaly ničivé nájezdy Bílých Hunů a Alchonských Hunů, které zničily kláštery i stúpy. Definitivní konec přišel roku 712 n. l., kdy město dobyli Umajjovci pod vedením Muhammada ibn al-Kásima.",
        skepticke: "Úpadek Taxily je historicky přesně zdokumentovanou sérií vojenských invazí, ne tajemným zmizením - od roku 1980 je archeologické naleziště na seznamu UNESCO jako doklad městské evoluce na indickém subkontinentu v průběhu více než pěti staletí."
      },
      praktickeInfo: "Naleziště je přístupné s placeným vstupem a muzeem, nachází se v distriktu Rávalpindí, doporučuje se počítat s rozsáhlým areálem vyžadujícím více hodin prohlídky.",
      zdroje: [
        { nazev: "Wikipedia: Taxila", url: "https://en.wikipedia.org/wiki/Taxila", licence: "CC BY-SA" },
        { nazev: "Wikidata: Taxila", url: "https://www.wikidata.org/wiki/Q156093", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Taxila%20Pakistan", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Vzdělání bez ohledu na původ", text: "Do Taxily přicházeli studovat synové králů, šlechticů, obchodníků, krejčích i rybářů - neobvykle otevřený přístup k vzdělání jako ve starověkém světě." },
        { nazev: "Čtyři vlny zkázy", text: "Město postupně zdolaly čtyři odlišné invazní vlny - Kidarité, Bílí Hunové, Alchonští Hunové a nakonec Umajjovci, kteří roku 712 n. l. definitivně ukončili jeho slávu." }
      ]
    }
  },
  {
    id: "acre-old-city",
    patch: {
      lead: "Přístavní město bohatší než anglická koruna za časů křižáků - a osm metrů pod jeho dnešními ulicemi se dodnes skrývá celá podzemní pevnost johanitů.",
      atmosfera: 4.1,
      popisy: {
        zahada: "Na izraelském pobřeží leží jedno z nejdéle nepřetržitě obydlených míst na Zemi, osídlené už od doby bronzové - a osm metrů pod dnešní úrovní ulic se skrývá rozsáhlý podzemní komplex pevnosti johanitského řádu z dob křižáckých válek.",
        historie: "Akko bylo osídleno nepřetržitě od střední doby bronzové (asi 2000-1550 př. n. l.). Během křižáckých válek se stalo klíčovým 'námořním předmostím' na středomořském pobřeží, ve 30. letech 12. století dosáhlo populace kolem 25 000 lidí, srovnatelné s Jeruzalémem v křižáckém království.",
        legenda: "Podle dobového zdroje přinášelo Akko křižácké koruně víc peněz, než dosahovaly celkové příjmy anglického krále. Město padlo do rukou muslimských sil Saladina roku 1187, ale bylo znovu dobyto po proslulém obležení 1189-1191 vedeném Richardem I. a Filipem II. Akko zůstalo poslední křižáckou baštou až do dobytí mamlúckými silami roku 1291.",
        paranormalni: "Pod moderní úrovní ulic, zhruba 8 metrů hluboko, leží rozsáhlý podzemní komplex johanitské pevnosti - šest propojených síní s desetimetrovými valenými klenbami, refektář, žalář, obří Sloupová síň o rozloze 1400 čtverečních metrů sloužící k rytířským obřadům a sofistikovaný vodohospodářský systém s cisternami.",
        skepticke: "Podzemní komplex je archeologicky přesně zdokumentovaný a představuje jedno z nejvýznamnějších středověkých evropských nalezišť v regionu, ne tajemství - od roku 2001 je staré město Akko na seznamu UNESCO jako mimořádně dobře dochované středověké přístavní město."
      },
      praktickeInfo: "Staré město je volně přístupné, podzemní johanitská pevnost nabízí placené prohlídky, doporučuje se kombinovat s procházkou po hradbách a přístavu.",
      zdroje: [
        { nazev: "Wikipedia: Acre, Israel", url: "https://en.wikipedia.org/wiki/Acre,_Israel", licence: "CC BY-SA" },
        { nazev: "Wikidata: Acre", url: "https://www.wikidata.org/wiki/Q126084", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Old%20City%20Acre%20Israel", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Bohatší než anglická koruna", text: "Podle dobového pramene přinášelo samotné Akko křižácké koruně víc příjmů, než dosahovaly celkové daňové výnosy anglického krále." },
        { nazev: "Pevnost osm metrů pod ulicemi", text: "Rozsáhlý podzemní komplex johanitské pevnosti se šesti propojenými síněmi zůstal skrytý osm metrů pod dnešní úrovní města po staletí." }
      ]
    }
  },
  {
    id: "gobustan-rock-art",
    patch: {
      lead: "Šest tisíc rytin starých až 20 000 let vedle bahenních sopek, kde v 1. století zanechala nápis nejvýchodnější římská legie na světě.",
      atmosfera: 4.0,
      popisy: {
        zahada: "V ázerbájdžánském Gobustanu se na jednom místě potkávají dvě zcela odlišné záhady: přes 6000 pravěkých skalních rytin starých 5000 až 20 000 let a stovky bahenních sopek, které dělají z regionu jednu z nejaktivnějších oblastí tohoto jevu na světě.",
        historie: "Gobustan byl poprvé vyhlášen státní historicko-uměleckou rezervací v roce 1966 rozhodnutím rady ministrů Ázerbájdžánu. V roce 2007 získal status UNESCO a byl prezidentským dekretem přeznačen na národní rezervaci.",
        legenda: "Rytiny zobrazují lidi, zvířata, bitvy, rituální tance, býčí zápasy, lodě s ozbrojenými veslaři i nebeské symboly a dokládají pravěký způsob života na Kavkaze včetně důkazů, že se lovu účastnily i ženy. Norský antropolog Thor Heyerdahl místo studoval opakovaně mezi lety 1981 a 2002.",
        paranormalni: "V roce 1948 zde objevili významný latinský nápis z doby kolem let 84-96 n. l., zmiňující dvanáctou legii za vlády císaře Domitiána - nejvýchodnější dosud známý latinský nápis na světě, doklad římské vojenské přítomnosti tak daleko od centra impéria.",
        skepticke: "Asi 300 ze 700 bahenních sopek světa se koncentruje právě v Gobustanu a oblasti Kaspického moře - přírodní jev vysvětlitelný geologicky, ne mysticky. V červnu 2024 zde otevřeli turistický komplex bahenních sopek na ploše 12 hektarů s léčebnými lázněmi, vyhlídkovou věží a přírodním muzeem."
      },
      praktickeInfo: "Rezervace je přístupná s placeným vstupem a moderním návštěvnickým centrem, kombinuje prohlídku petroglyfů s návštěvou bahenních sopek, doporučuje se pevná obuv kvůli skalnatému terénu.",
      zdroje: [
        { nazev: "Wikipedia: Gobustan National Park", url: "https://en.wikipedia.org/wiki/Gobustan_National_Park", licence: "CC BY-SA" },
        { nazev: "Wikidata: Gobustan", url: "https://www.wikidata.org/wiki/Q318181", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Gobustan%20Azerbaijan", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Nejvýchodnější latinský nápis na světě", text: "Římská dvanáctá legie zanechala v Gobustanu kolem let 84-96 n. l. nápis, který je dodnes nejvýchodnějším dosud známým latinským nápisem na světě." },
        { nazev: "300 bahenních sopek na jednom místě", text: "Region koncentruje asi 300 ze 700 bahenních sopek celé planety, což z něj dělá jedno z geologicky nejaktivnějších míst tohoto vzácného přírodního jevu." }
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
