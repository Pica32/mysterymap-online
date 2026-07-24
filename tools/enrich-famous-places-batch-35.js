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
    id: "paharpur",
    patch: {
      lead: "Největší univerzita starověké Indie, kde tibetští mniši studovali po čtyři staletí - a jejíž architektura ovlivnila chrámy od Barmy po Kambodžu.",
      atmosfera: 3.9,
      popisy: {
        zahada: "V bangladéšském Naogaonu leží čtyřúhelníkový komplex o rozloze 11 hektarů se 177 klášterními celami kolem centrální stúpy - Sómapúra Mahávihára, jedna z pěti velkých mahávihár starověké Indie a snad největší buddhistická univerzita svého věku jižně od Himalájí.",
        historie: "Klášter vznikl za dynastie Pálů, vykopávky s pečetěmi ho spojují s králem Dharmapálou (asi 781-821 n. l.), druhým vládcem dynastie. Tibetské historické prameny ale naznačují, že stavbu mohl dokončit jeho nástupce Dévapála (asi 810-850 n. l.) po dobytí Varéndry. Klášter prošel opravami za vlády Mahipály (asi 995-1043 n. l.).",
        legenda: "Mezi 9. a 12. stoletím zde studovali proslulí učenci jako Atíša a Ratnákarašánti a klášter navštěvovali mniši z Tibetu. Sómapúra patřila mezi pět velkých mahávihár starověké Indie vedle Vikramašíly, Nálandy, Ódantapury a Džagaddaly a fungovala jako největší univerzita starověké Indie, podporující zároveň hinduistické a džinistické učence.",
        paranormalni: "Architektonický styl komplexu hluboce ovlivnil stavbu chrámů v jihovýchodní Asii, zejména v Barmě, na Jávě a v Kambodži - odkaz sahající daleko za hranice bengálského regionu, kde klášter stál.",
        skepticke: "Úpadek kláštera za dynastie Sénů ve 12. století byl pravděpodobně způsoben rozsáhlým společenským rozvratem, ne náhlým násilným zničením - archeologické důkazy naznačují postupný úpadek spíše než jedinou katastrofickou událost. UNESCO zapsalo naleziště na seznam světového dědictví roku 1985."
      },
      praktickeInfo: "Naleziště je veřejně přístupné s přidruženým muzeem vystavujícím nálezy z vykopávek.",
      zdroje: [
        { nazev: "Wikipedia: Somapura Mahavihara", url: "https://en.wikipedia.org/wiki/Somapura_Mahavihara", licence: "CC BY-SA" },
        { nazev: "Wikidata: Somapura Mahavihara", url: "https://www.wikidata.org/wiki/Q305044", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Paharpur%20Bangladesh", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Univerzita, kam putovali tibetští mniši", text: "Mezi 9. a 12. stoletím sem putovali mniši z Tibetu studovat u proslulých učenců jako Atíša - výměna, která propojila bengálský klášter s himalájským buddhismem." },
        { nazev: "Vliv sahající do jihovýchodní Asie", text: "Architektonický styl kláštera hluboce ovlivnil stavbu buddhistických chrámů v Barmě, na Jávě a v Kambodži, daleko za hranicemi Bengálska." }
      ]
    }
  },
  {
    id: "petroglyphs-of-cholpon-ata",
    patch: {
      lead: "Dva tisíce rytin v balvanech pod horami - zobrazujících lovecké scény se zvířaty, která dnes v regionu buď vyhynula, nebo jsou vzácná.",
      atmosfera: 3.7,
      popisy: {
        zahada: "Na severním pobřeží jezera Issyk-Kul leží svah posetý balvany s téměř 2000 vyrytými obrazci - muzeum v přírodě zachycující tisíciletí lovecké a duchovní tradice kyrgyzských horských kmenů.",
        historie: "Petroglyfy se datují od roku 800 př. n. l. do roku 1200 n. l., což z nich činí svědectví o kontinuální lidské přítomnosti v regionu napříč více než dvěma tisíciletími.",
        legenda: "Jméno města Cholpon-Ata se překládá jako 'Otec Venuše', odkazující na mytologický význam planety pro místní kosmologii.",
        paranormalni: "Mezi vyrytými scénami dominují lovecké výjevy zobrazující zvířata, která jsou dnes v regionu buď vyhynulá, nebo vzácná - rytiny tak nedokumentují jen lovecké techniky, ale i proměnu místní fauny za poslední dva tisíce let.",
        skepticke: "Datování petroglyfů do rozmezí 800 př. n. l. až 1200 n. l. je založeno na stylistické analýze a archeologickém kontextu, ne na přesném jednotném určení stáří každé jednotlivé rytiny - přesto zobrazení vyhynulé nebo vzácné fauny poskytuje nezávislý ekologický důkaz podporující starobylost přinejmenším části obrazců."
      },
      praktickeInfo: "Naleziště funguje jako muzeum v přírodě s volným přístupem, doporučuje se navštívit s místním průvodcem pro identifikaci nejvýznamnějších obrazců.",
      zdroje: [
        { nazev: "Wikipedia: Cholpon-Ata", url: "https://en.wikipedia.org/wiki/Cholpon-Ata", licence: "CC BY-SA" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Cholpon-Ata%20petroglyphs%20Kyrgyzstan", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Zvířata, která už nejsou", text: "Rytiny zachycují lovecké scény se zvířaty, která v regionu dnes buď vyhynula, nebo jsou vzácná - nedokumentovaný záznam proměny místní přírody za dva tisíce let." },
        { nazev: "Otec planety Venuše", text: "Jméno města Cholpon-Ata se překládá jako 'Otec Venuše', odkazující na mytologický a kosmologický význam, který planeta měla pro místní obyvatele." }
      ]
    }
  },
  {
    id: "beit-she-an",
    patch: {
      lead: "Osmnáct vrstev civilizací na jednom pahorku - od egyptské posádky přes biblické vyvěšení Saulova těla na hradbách až po zkázu jedním jediným zemětřesením roku 749.",
      atmosfera: 3.8,
      popisy: {
        zahada: "V izraelském údolí Jordánu leží pahorek s osmnácti po sobě jdoucími vrstvami starověkých měst - místo, kde se egyptská správa, kanaánské osídlení, řecko-římská Scythopolis a byzantské křesťanství vystřídaly na jediném místě napříč tisíciletími.",
        historie: "Za Nové říše se Bet Šean stal po dobytí faraonem Thutmosem III. v 15. století př. n. l. hlavním egyptským správním centrem regionu - archeologické nálezy zahrnují chrámy, stély Setiho I. a Ramesse II. a doklady egyptské posádky až do 20. dynastie. Kanaánské osídlení pokračovalo nepřetržitě od střední doby bronzové (asi 1820-1550 př. n. l.). V helénistické éře přijalo město řecké jméno Scythopolis ('město Skythů') a za římské nadvlády se stalo předním městem Dekapole s divadlem, hipodromem a akvadukty. Za byzantské éry dosáhlo města velikosti 40 000 obyvatel v 6. století.",
        legenda: "Podle biblické tradice vítězní Filištíni po bitvě na hoře Gilboa 'pověsili tělo krále Saula na hradby Bet Šeanu' spolu s těly tří jeho synů - žádné archeologické důkazy filištínské přítomnosti na místě ale nebyly nalezeny.",
        paranormalni: "18. ledna 749 n. l. zdevastovalo umajjovský Bajsán katastrofální zemětřesení, které natrvalo snížilo význam a prosperitu města - katastrofa, jež ukončila staletí kontinuálního růstu.",
        skepticke: "Absence archeologických důkazů filištínské přítomnosti navzdory biblickému vyprávění o Saulovi je významná diskrepance mezi textem a archeologií, ne důkaz, že se událost nestala - takové nesrovnalosti jsou běžné u starověkých textů popisujících události o staletí starší, než byly sepsány. Zemětřesení roku 749 je naproti tomu geologicky a archeologicky nesporně doloženo."
      },
      praktickeInfo: "Národní park nabízí rozsáhlé římské divadlo, byzantské mozaiky a dobře udržovanou infrastrukturu pro návštěvníky.",
      zdroje: [
        { nazev: "Wikipedia: Beit She'an", url: "https://en.wikipedia.org/wiki/Beit_She%27an", licence: "CC BY-SA" },
        { nazev: "Wikidata: Beit She'an", url: "https://www.wikidata.org/wiki/Q152368", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Beit%20She%27an%20Israel", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Saulovo tělo na hradbách", text: "Podle biblické tradice pověsili vítězní Filištíni tělo krále Saula na hradby Bet Šeanu po jeho porážce na hoře Gilboa, přestože archeologie po nich žádné stopy nenašla." },
        { nazev: "Zemětřesení, které ukončilo zlatý věk", text: "Katastrofální zemětřesení 18. ledna 749 n. l. natrvalo snížilo význam kdysi vzkvétajícího města, jehož populace v 6. století dosahovala 40 000 obyvatel." }
      ]
    }
  },
  {
    id: "brimstone-hill-fortress",
    patch: {
      lead: "'Gibraltar Karibiku', postavený otrockou prací afrických zajatců - francouzská armáda ho dobyla jednou, po roce 1783 už nikdy víc.",
      atmosfera: 3.9,
      popisy: {
        zahada: "Na západním pobřeží ostrova Svatý Kryštof stojí na strmém kopci vysokém 972 stop pevnost, kterou navrhli britští vojenští inženýři, ale postavili a udržovali zotročení Afričané - stavba, jež si vysloužila přezdívku 'Gibraltar Karibiku'.",
        historie: "Do roku 1780 pevnost získala pověst nedobytnosti díky svým 24librovým dělům a celkem 49 nasazeným zbraním do roku 1736.",
        legenda: "Nejvýznamnějším obléháním bylo to z roku 1782, kdy francouzský admirál François Joseph Paul de Grasse a markýz de Bouillé zahájili obléhání 11. ledna 1782. Po měsíci obléhání se početně výrazně slabší britská posádka vzdala. Pařížská smlouva z roku 1783 ale pevnost vrátila pod britskou kontrolu a od té doby 'nikdy znovu nepadla do rukou nepřítele' - francouzský pokus o dobytí roku 1806 selhal.",
        paranormalni: "Pevnost byla opuštěna roku 1853, obnovovací práce začaly na počátku 20. století. Princ Charles znovu otevřel baštu Prince Waleského roku 1973, královna Alžběta II. vyhlásila místo národním parkem roku 1985.",
        skepticke: "Tvrzení, že pevnost 'nikdy znovu nepadla do rukou nepřítele' po roce 1783, je historicky přesné navzdory jednomu úspěšnému francouzskému obležení roku 1782 - rozdíl je v tom, že diplomatické vyjednávání (Pařížská smlouva), ne vojenská porážka, vrátilo pevnost zpět Britům, takže vojenská 'nedobytnost' po roce 1783 zůstává technicky pravdivá."
      },
      praktickeInfo: "Pevnost je zapsána na seznamu UNESCO od roku 1999 a nabízí rozsáhlé prohlídky s výhledem na okolní Karibské moře.",
      zdroje: [
        { nazev: "Wikipedia: Brimstone Hill Fortress", url: "https://en.wikipedia.org/wiki/Brimstone_Hill_Fortress", licence: "CC BY-SA" },
        { nazev: "Wikidata: Brimstone Hill Fortress", url: "https://www.wikidata.org/wiki/Q200521", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Brimstone%20Hill%20Fortress%20Saint%20Kitts", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Postavena otrockou prací", text: "Pevnost navrhli britští vojenští inženýři, ale fyzicky ji postavili a udržovali zotročení Afričané - realita skrytá za honosnou přezdívkou 'Gibraltar Karibiku'." },
        { nazev: "Jediné obléhání, které nakonec nevyhrálo", text: "Francouzi pevnost dobyli obležením roku 1782, ale Pařížská smlouva z roku 1783 ji vrátila zpět Britům, po čemž už nikdy nepadla do rukou nepřítele vojenskou silou." }
      ]
    }
  },
  {
    id: "tipon",
    patch: {
      lead: "Incká vodní inženýrská soustava srovnatelná s Machu Picchu - kde monumentální fontána dodnes rozvádí vodu do systému kamenných kanálů starých přes 500 let.",
      atmosfera: 3.9,
      popisy: {
        zahada: "Nedaleko Cusca leží komplex nepřetržitě osídlený od roku 1000 př. n. l. až po dobu inckou - naleziště proslulé propracovaným vodohospodářským systémem srovnatelným svou sofistikovaností s proslulým Machu Picchu.",
        historie: "Před příchodem Inků místo, tehdy nazývané Muyna nebo Moyna, obývaly postupně kultury Marcavalle, Chanapata, Qotakalli, Huari a Killke a sloužilo jako důležité sídlo předinckého kmene Pinaguů. Pinaguové byli pravděpodobně podrobeni Pačakutekem v 15. století. Historické záznamy naznačují, že místo mohl jako rezidenci nechat postavit Viracocha Inka, byť se interpretace liší.",
        legenda: "Etymologie jména zůstává nejistá - možná odvozená z výrazu 'timpuee' (místo varu), odkazujícího na soustředěnou aktivitu. Prvek zvaný Intiwatana znamená 'místo, kde je uvázáno slunce' a představoval solární observatoř pro určování zemědělského kalendáře.",
        paranormalni: "Monumentální fontána svádí vodu z přirozeného pramene do sítě kanálů zásobujících terasy i obydlí. Inženýři použili kamenem obložené kanály, vertikální odtoky a zachytávací systémy pramenité vody - důkaz vyspělých hydraulických znalostí. Asi 100 hektarů teras (andénes) pokrývá park, přičemž 13 monumentálních teras v roklině má zdi ve tvaru písmene U s výškou 1 až 5 metrů.",
        skepticke: "Přesná role Viracochy Inky jako stavitele zůstává předmětem badatelské interpretace založené na historických záznamech, ne jednoznačně prokázaným faktem - hydraulická sofistikovanost samotného systému kanálů a fontán je ale hmatatelně doložena a obdivována jako jeden z nejpropracovanějších inckých vodních systémů vůbec."
      },
      praktickeInfo: "Naleziště leží v Posvátném údolí Inků a je veřejně přístupné s placeným vstupem, doporučuje se kombinovat s návštěvou Pisacu.",
      zdroje: [
        { nazev: "Wikipedia: Tipón", url: "https://en.wikipedia.org/wiki/Tip%C3%B3n", licence: "CC BY-SA" },
        { nazev: "Wikidata: Tipón", url: "https://www.wikidata.org/wiki/Q2003624", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Tipon%20Peru", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Fontána stará přes 500 let, funkční dodnes", text: "Monumentální incká fontána stále rozvádí vodu z přirozeného pramene do sítě kamenných kanálů, které zásobují terasy i obydlí přesně podle původního návrhu." },
        { nazev: "Místo, kde je uvázáno slunce", text: "Prvek Intiwatana, jehož jméno znamená 'místo, kde je uvázáno slunce', sloužil jako solární observatoř pro určování zemědělského kalendáře Inků." }
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
