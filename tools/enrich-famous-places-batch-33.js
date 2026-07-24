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
    id: "cerro-tololo-observatory",
    patch: {
      lead: "Observatoř, kde astronomové objevili supernovu v galaxii vzdálené 370 milionů světelných let - a mladou hvězdu obklopenou protoplanetárním diskem přezdívanou 'Hamburger'.",
      atmosfera: 3.4,
      popisy: {
        zahada: "Ve výšce 2207 metrů v chilském regionu Coquimbo stojí observatoř, jejíž umístění vybral německý astronom Jürgen Stock po systematickém průzkumu regionu specializovanými přístroji - jedno z nejlepších míst na jižní polokouli pro pozorování noční oblohy.",
        historie: "Stock dorazil do Santiaga roku 1959 a po průzkumu vybral horu Cerro Tololo roku 1962. Stavba začala roku 1963 se Stockem jako prvním ředitelem, pravidelná astronomická pozorování začala roku 1965.",
        legenda: "Observatoř provozuje NOIRLab pod Asociací univerzit pro astronomický výzkum (AURA) a hostí několik dalekohledů o průměru od 0,4 do 4,1 metru, podporujících výzkum od detekce exoplanet po studium Slunce.",
        paranormalni: "Mezi objevy observatoře patří šest asteroidů a supernova zachycená 7. prosince 2013 robotickým dalekohledem CATA 500 v galaxii ESO 365-G16, vzdálené 370 milionů světelných let. Roku 1985 astronomové objevili i takzvaný 'Gomezův hamburger' - mladou hvězdu obklopenou protoplanetárním diskem, jehož tvar připomíná právě tento pokrm.",
        skepticke: "Objevy jako 'Gomezův hamburger' mají neformální přezdívku odvozenou od vizuálního tvaru pozorovaného objektu, ne od jeho vědecké podstaty - jde o seriózně zdokumentovaný protoplanetární disk, jehož neobvyklý název jen usnadňuje komunikaci mezi vědci a veřejností."
      },
      praktickeInfo: "Observatoř nabízí omezené veřejné prohlídky po předchozí rezervaci, leží asi 80 km východně od města La Serena.",
      zdroje: [
        { nazev: "Wikipedia: Cerro Tololo Inter-American Observatory", url: "https://en.wikipedia.org/wiki/Cerro_Tololo_Inter-American_Observatory", licence: "CC BY-SA" },
        { nazev: "Wikidata: Cerro Tololo Observatory", url: "https://www.wikidata.org/wiki/Q1056113", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Cerro%20Tololo%20Observatory%20Chile", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Supernova z 370 milionů světelných let", text: "Robotický dalekohled observatoře zachytil 7. prosince 2013 supernovu v galaxii vzdálené 370 milionů světelných let od Země." },
        { nazev: "Hvězda přezdívaná hamburger", text: "Objekt objevený roku 1985 - mladá hvězda obklopená protoplanetárním diskem - získal přezdívku 'Gomezův hamburger' podle svého charakteristického vizuálního tvaru." }
      ]
    }
  },
  {
    id: "tichitt",
    patch: {
      lead: "Nejstarší kamenná sídla subsaharské Afriky, kde zemědělci pěstovali proso už 2000 let před naším letopočtem - staletí předtím, než vzniklo Ghanské impérium.",
      atmosfera: 3.8,
      popisy: {
        zahada: "U paty náhorní plošiny Tagant v centrální Mauritánii leží vesnice, jejíž okolí ukrývá jeden z nejpozoruhodnějších archeologických komplexů celé západní Afriky - nejstarší dochovaná kamenná sídla jižně od Sahary.",
        historie: "Kolem roku 2000 př. n. l. založily zemědělsko-pastevecké komunity, známé jako kultura Tichitt, osady na pískovcových útesech Dhar Tichitt. Tato sídla pravděpodobně předcházela Ghanskému impériu a mohla je vybudovat protosoninkská populace. Osídlení bylo opuštěno kolem roku 500 př. n. l., pravděpodobně kvůli narůstajícímu suchu.",
        legenda: "Podle místní tradice bylo na tomto místě postaveno 'sedm měst jedno na druhém' - vrstvení osad odrážející tisíciletí nepřetržitého osídlení. Samotné město Tichit bylo založeno ve 12. století jako karavanní stanice na transsaharských obchodních trasách spojujících Oualátu a Chinguetti.",
        paranormalni: "Archeologické výzkumy odhalily stovky skalních maleb zobrazujících faunu a lovecké aktivity, spolu s důkazy pěstování prosa už od samého počátku osídlení - jeden z nejstarších dokladů zemědělství v širším regionu.",
        skepticke: "Označení sídel Dhar Tichitt za nejstarší kamenná sídla subsaharské Afriky je založeno na archeologickém datování, ne na tradiční legendě - katastrofální povodeň roku 1999 nicméně poškodila asi 80 % staveb moderní vesnice, což je reálná a dobře zdokumentovaná hrozba pro dědictví zapsané na seznam UNESCO od roku 1996."
      },
      praktickeInfo: "Vesnice je odlehlá a vyžaduje organizovaný transport terénním vozidlem, doporučuje se ověřit aktuální stav přístupových cest před cestou.",
      zdroje: [
        { nazev: "Wikipedia: Tichit", url: "https://en.wikipedia.org/wiki/Tichitt", licence: "CC BY-SA" },
        { nazev: "Wikidata: Tichitt", url: "https://www.wikidata.org/wiki/Q985527", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Tichitt%20Mauritania", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Sedm měst jedno na druhém", text: "Podle místní tradice bylo na místě dnešní vesnice postaveno sedm měst jedno na druhém - vrstvení odrážející tisíciletí nepřetržitého osídlení." },
        { nazev: "Proso staré čtyři tisíciletí", text: "Archeologické důkazy naznačují pěstování prosa v osadách Dhar Tichitt už od jejich založení kolem roku 2000 př. n. l., staletí před vznikem Ghanského impéria." }
      ]
    }
  },
  {
    id: "qalhat",
    patch: {
      lead: "Město, které obdivoval Marco Polo i Ibn Battúta - dokud ho nezničilo zemětřesení, jak nedávno prokázal geoarcheologický výzkum poruchy přímo pod městem.",
      atmosfera: 3.8,
      popisy: {
        zahada: "Na pobřeží dnešního Ománu leží ruiny středověkého obchodního uzlu Indického oceánu, druhého města Hormuzského království - místa, které navštívili a obdivovali jedni z nejproslulejších cestovatelů historie.",
        historie: "Starověké město pokrývalo přes 60 akrů, obehnané opevněnými hradbami s domy a obchody uvnitř. Marco Polo město navštívil ve 13. století a nazval ho 'Calatu'. Ibn Battúta dorazil ve 14. století a chválil ho pro 'krásná tržiště a jednu z nejkrásnějších mešit'. Ve 15. století sem dorazil i čínský admirál Čeng Che, jehož posádka zaznamenala jméno města znaky 加剌哈.",
        legenda: "Vládkyně Bibi Marjam nechala postavit proslulou mešitu města se stěnami zdobenými keramikou kašání. Po smrti svého manžela Ajáze kolem let 1311-1312 vládla jak Qalhatu, tak Hormuzu. Její mauzoleum zůstává nejzachovalejší stavbou města, byť přišlo o svou kopuli.",
        paranormalni: "Nedávný geoarcheologický výzkum badatelů z Bonnské univerzity naznačuje, že seizmická aktivita podél zlomu Qalhat výrazně přispěla k opuštění středověkého města - fyzické vysvětlení zániku, které dlouho zůstávalo záhadou.",
        skepticke: "Zánik města byl dlouho připisován především portugalskému dobytí roku 1507 a přesunu obchodu do Muskatu - moderní geoarcheologický výzkum ale ukazuje, že zemětřesení podél místního zlomu hrálo v opuštění města významnější roli, než se dříve předpokládalo."
      },
      praktickeInfo: "Naleziště bylo zapsáno na seznam UNESCO roku 2018 a je veřejně přístupné s dobře udržovanou infrastrukturou pro návštěvníky.",
      zdroje: [
        { nazev: "Wikipedia: Qalhat", url: "https://en.wikipedia.org/wiki/Qalhat", licence: "CC BY-SA" },
        { nazev: "Wikidata: Qalhat", url: "https://www.wikidata.org/wiki/Q680322", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Qalhat%20Oman", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Město očima Marca Pola", text: "Marco Polo navštívil město ve 13. století a nazval ho 'Calatu' - jeden z prvních evropských popisů tohoto významného obchodního přístavu Indického oceánu." },
        { nazev: "Zemětřesení jako skutečný viník", text: "Nedávný geoarcheologický výzkum ukázal, že seizmická aktivita podél místního zlomu výrazně přispěla k zániku města - vysvětlení objevené teprve moderní vědou." }
      ]
    }
  },
  {
    id: "qalat-al-bahrain",
    patch: {
      lead: "Sedm archeologických vrstev na jednom pahorku - hlavní město civilizace Dilmun, kterou Epos o Gilgamešovi popisuje jako 'zemi nesmrtelnosti'.",
      atmosfera: 3.9,
      popisy: {
        zahada: "Na severním pobřeží Bahrajnu se zvedá 12metrový umělý pahorek o rozloze 17,5 hektaru, obývaný nepřetržitě po dobu zhruba 5000 let - jedno z nejstarších opevnění celého Perského zálivu.",
        historie: "Původní stavba vznikla kolem roku 2300 př. n. l., místo zůstalo osídlené až do 18. století. Dnešní portugalská pevnost pochází ze 6. století n. l. Archeologické vykopávky odhalily sedm vrstvených období osídlení od roku 2300 př. n. l. až po 16. století n. l.",
        legenda: "Místo sloužilo jako hlavní město civilizace Dilmun a obsahuje nejbohatší dochované pozůstatky této starověké kultury. Podle legendy zaznamenané v Eposu o Gilgamešovi byl Dilmun popisován jako 'země nesmrtelnosti', představující prapůvodní místo Sumerů a místo setkání božstev.",
        paranormalni: "Vykopávky od roku 1954 pod vedením Geoffreyho Bibbyho a pokračující dánskými a francouzskými expedicemi odhalily klínopisné tabulky, měděné artefakty, keramiku, pečetě a obchodní zboží spojující místo s Mezopotámií, Ománem a civilizací údolí Indu.",
        skepticke: "Popis Dilmunu jako 'země nesmrtelnosti' v Eposu o Gilgamešovi je literární mytologický motiv, ne historický zeměpisný popis - archeologické vrstvy samotné pevnosti jsou ale hmatatelným, systematicky zdokumentovaným důkazem reálné civilizace, jejíž obchodní síť sahala až k Mezopotámii a údolí Indu."
      },
      praktickeInfo: "Naleziště je veřejně přístupné s přidruženým muzeem vystavujícím nálezy z vykopávek, UNESCO ho zapsalo na seznam světového dědictví roku 2005.",
      zdroje: [
        { nazev: "Wikipedia: Qal'at al-Bahrain", url: "https://en.wikipedia.org/wiki/Qal%27at_al-Bahrain", licence: "CC BY-SA" },
        { nazev: "Wikidata: Qal'at al-Bahrain", url: "https://www.wikidata.org/wiki/Q740104", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Qalat%20al-Bahrain", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Země nesmrtelnosti z Gilgameše", text: "Epos o Gilgamešovi popisuje Dilmun, jehož hlavním městem byla tato pevnost, jako 'zemi nesmrtelnosti' a místo setkání božstev." },
        { nazev: "Sedm vrstev na jednom pahorku", text: "Archeologické vykopávky odhalily sedm po sobě jdoucích vrstev osídlení sahajících od roku 2300 př. n. l. až po 16. století n. l. na jediném místě." }
      ]
    }
  },
  {
    id: "pamukkale-travertines",
    patch: {
      lead: "Brána do podsvětí, kterou kněží vstupovali beztrestně - zatímco zvířata určená k obětem u vchodu okamžitě padala mrtvá k zemi.",
      atmosfera: 4.0,
      popisy: {
        zahada: "V tureckém Denizli se táhnou zářivě bílé terasy vytvořené horkými prameny - a přímo v srdci starověkého Hierapolisu ležela jeskyně považovaná za skutečnou bránu do podsvětí, kde toxický plyn zabíjel na místě.",
        historie: "Hierapolis vznikl jako termální lázně na počátku 2. století př. n. l. za seleukovské nadvlády. Do roku 62 př. n. l. zde žila židovská komunita čítající asi 50 000 lidí. Za římské éry město zasáhlo ničivé zemětřesení roku 17 n. l. Později zde poslední léta svého života strávil apoštol Filip, na jehož počest bylo vybudováno martyrium na místě jeho údajného ukřižování roku 80 n. l.",
        legenda: "Ploutonion, svatyně zasvěcená bohu podsvětí Plutovi, sestávala z malé jeskyně sotva dost velké pro jednoho člověka, odkud unikal smrtící oxid uhličitý. Podle starověkých pramenů jako Strabón, Cassius Dio a Damaskios sestupovali do toxické komory kastrovaní kněží bohyně Kybelé zvaní Galli a údajně vycházeli nezraněni, což mělo dokazovat božskou ochranu. Chrám prodával návštěvníkům zvířata, aby na vlastní oči viděli, jak plyn zabíjí tvory, než se sami odvážili zeptat na věštbu Pluta - výnosný obchodní model postavený na demonstraci údajné imunity kněží.",
        paranormalni: "Sedmnáct horkých pramenů o teplotě 35 až 100 °C nese vápník rozpuštěný ve vodě 320 metrů po svahu, kde se z ní uvolňuje oxid uhličitý a ukládá se uhličitan vápenatý, který postupně krystalizuje do dnes viditelných travertinových útvarů.",
        skepticke: "Moderní věda odhaluje skutečné vysvětlení jevu: oxid uhličitý, těžší než vzduch, se hromadí v nízko položených místech. Kněží pravděpodobně přežívali plazením po podlaze ke kapsám kyslíku nebo zadržováním dechu, ne díky nadpřirozené ochraně - před vchodem stála ohrazená plocha o rozloze asi 2000 čtverečních metrů, zcela smrtící pro kohokoli, kdo by do ní vstoupil bez znalosti triku. Raní křesťané vchod ve 4. století zazdili a teprve nedávno byl znovu vykopán."
      },
      praktickeInfo: "Návštěvníci mohou chodit bosí po vlhkých travertinových terasách, doporučuje se navštívit i přidružené ruiny Hierapolisu včetně Ploutonionu.",
      zdroje: [
        { nazev: "Wikipedia: Pamukkale", url: "https://en.wikipedia.org/wiki/Pamukkale", licence: "CC BY-SA" },
        { nazev: "Wikipedia: Hierapolis", url: "https://en.wikipedia.org/wiki/Hierapolis", licence: "CC BY-SA" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Pamukkale%20Turkey", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Kněží, kteří přežili bránu pekla", text: "Kastrovaní kněží bohyně Kybelé údajně sestupovali do toxické jeskyně Ploutonionu a vycházeli nezraněni, zatímco obětovaná zvířata u vchodu okamžitě padala mrtvá." },
        { nazev: "Vědecké vysvětlení starověkého zázraku", text: "Moderní věda odhalila, že kněží přežívali díky fyzikálním vlastnostem oxidu uhličitého - plazením ke kapsám kyslíku nebo zadržováním dechu, ne díky božské ochraně." }
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
