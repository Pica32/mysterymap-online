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
    id: "machu-picchu",
    patch: {
      lead: "Incké sídlo na hřebeni nad řekou Urubambou, které Španělé nikdy nenašli - a o jehož skutečném účelu se vedou spory dodnes.",
      atmosfera: 4.8,
      paranormalniAktivita: "kulturní a duchovní tradice",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká při oficiální trase",
      pristupnost: "placený vstup s časovými okny",
      popisy: {
        zahada: "Machu Picchu leží v nadmořské výšce kolem 2 430 metrů na hřebeni mezi dvěma vrcholy And. Stavitelé bez železných nástrojů, kola a tažných zvířat opracovali žulové bloky tak přesně, že mezi ně v nejlepších zdech nevsunete ani čepel nože. Dodnes není jisté, zda šlo o panovnické sídlo, náboženské centrum, nebo obojí.",
        historie: "Většina badatelů spojuje vznik sídla s inckým panovníkem Pačakutim kolem poloviny 15. století. Místo bylo obydlené jen asi sto let a opuštěné v době španělské conquisty. Mezinárodní pozornost mu roku 1911 přinesl Hiram Bingham, místní zemědělci o ruinách ale věděli dávno předtím. Od roku 1983 je na seznamu světového dědictví UNESCO.",
        legenda: "Bingham byl přesvědčen, že objevil Vilcabambu - poslední útočiště Inků před Španěly. Tato teorie se nepotvrdila, ale představa „ztraceného města Inků“ v populární kultuře přetrvala. Kámen Intihuatana bývá spojován s rituálním „uvazováním slunce“ při slunovratu.",
        paranormalni: "Návštěvníci často popisují zvláštní energii místa, zejména u Intihuatany a na vrcholu Huayna Picchu. Esoterické skupiny Machu Picchu řadí mezi „energetická centra“ planety. Tato tvrzení nemají žádné měřitelné podklady.",
        skepticke: "Že Španělé Machu Picchu nenašli, vysvětluje odlehlá poloha a rychlé opuštění sídla, ne nadpřirozená ochrana. Přesné zdivo je výsledkem zručnosti, času a obrovského množství pracovní síly, kterou incký stát organizoval systémem povinné práce mit'a. Pocity „energie“ snadno vyvolá vysoká nadmořská výška, únava a silný vizuální zážitek."
      },
      praktickeInfo: "Vstupenky se prodávají na konkrétní časová okna a okruhy a v sezóně se rychle vyprodávají. Ze základny v Aguas Calientes jezdí autobusy, alternativou je pěší Inka trail s povinným licencovaným průvodcem. Počítej s výškovou nemocí a rychlými změnami počasí.",
      pribehy: [
        { nazev: "Město, které nebylo ztracené", text: "Hiram Bingham Machu Picchu proslavil, ale k ruinám ho dovedl místní farmář Melchor Arteaga a na terasách v té době žily rodiny, které místo dobře znaly." },
        { nazev: "Zdi, které přežijí zemětřesení", text: "Incké zdivo bez malty s mírně lichoběžníkovými otvory dokáže při otřesech „tančit“ a kameny se pak vrátí na místo - proto stojí i v seismicky aktivní oblasti." }
      ]
    }
  },
  {
    id: "nazca-lines",
    patch: {
      nazev: "Obrazce na planině Nazca",
      lead: "Kolibřík, opice a pavouk dlouzí desítky metrů, které celé uvidíš jen z letadla - vyškrábané do pouště před víc než 1 500 lety.",
      atmosfera: 4.3,
      paranormalniAktivita: "konspirační a mediální teorie",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "vyhlídkové lety a vyhlídková věž",
      popisy: {
        zahada: "Na náhorní plošině v jižním Peru leží stovky přímých linií, geometrických tvarů a desítky obrazců zvířat a rostlin. Některé linie jsou dlouhé kilometry a vedou přes nerovný terén téměř dokonale rovně. Hlavní otázka nezní „jak“, ale „proč“ vznikly kresby, které tvůrci sami nikdy celé neviděli.",
        historie: "Obrazce vytvořila převážně kultura Nazca zhruba mezi lety 500 př. n. l. a 500 n. l. Stačilo odstranit tmavé, oxidované kameny z povrchu a odkrýt světlejší podloží. Suché a bezvětrné klima je zakonzervovalo na staletí. Systematicky je od 40. let 20. století zkoumala Maria Reiche, která věnovala jejich ochraně život. Od roku 1994 jsou zapsány v UNESCO a díky dronům a umělé inteligenci se dodnes objevují nové obrazce.",
        legenda: "Nejslavnější výklad pochází od Ericha von Dänikena, který v 60. letech tvrdil, že linie sloužily jako přistávací dráhy pro mimozemšťany. Jiné teorie v nich vidí astronomický kalendář nebo mapu podzemních vod.",
        paranormalni: "Kolem planiny se šíří historky o světlech nad pouští a o „energii“ podél linií. Zprávy o neidentifikovaných objektech nad Nazcou se objevují spíše v televizních dokumentech než v ověřitelných záznamech.",
        skepticke: "Experimenty ukázaly, že malá skupina lidí s kolíky, provázky a jednoduchým zvětšováním z náčrtu dokáže obří obrazec vytvořit za několik dní. Teorie přistávacích drah neobstojí - měkký povrch by letadlo neunesl. Archeologové linie nejčastěji spojují s rituály vody a plodnosti a s procesními cestami, po kterých se chodilo."
      },
      praktickeInfo: "Nejlepší výhled nabízejí krátké vyhlídkové lety z letiště v Nazce nebo z Pisca. U Panamericany stojí vyhlídková věž s výhledem na několik obrazců. Na samotnou planinu je vstup zakázán - stopy by obrazce nevratně poškodily.",
      pribehy: [
        { nazev: "Žena, která zametala poušť", text: "Maria Reiche strávila desítky let měřením linií a sama zametala jejich okraje. Bez jejího úsilí by část obrazců zničila stavba silnic a osadníci." },
        { nazev: "Nové obrazce díky AI", text: "Japonští vědci s pomocí umělé inteligence a dronů nedávno identifikovali desítky dosud neznámých menších obrazců - planina stále nevydala všechna tajemství." }
      ]
    }
  },
  {
    id: "great-sphinx-of-giza",
    patch: {
      nazev: "Velká sfinga v Gíze",
      lead: "Lev s lidskou tváří vytesaný přímo z vápencové skály - nejstarší monumentální socha Egypta, o jejímž stáří se vedou ostré spory.",
      atmosfera: 4.6,
      paranormalniAktivita: "konspirační a esoterické teorie",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Sfinga je dlouhá asi 73 metrů a vysoká kolem 20 metrů. Nebyla postavena z bloků, ale vytesána z vápencového podloží. Chybí jí nos a kdo ji vytvořil a proč, nedokládá žádný dobový nápis. Tato mezera v pramenech živí teorie o „ztracené civilizaci“.",
        historie: "Většina egyptologů připisuje Sfingu faraonovi Rachefovi (Chefrénovi) ze 4. dynastie, kolem roku 2500 př. n. l. Socha leží u jeho údolního chrámu a vzestupné cesty k jeho pyramidě. Většinu dějin ji zasypával písek. Mezi tlapami stojí stéla Thutmose IV., podle níž mu Sfinga ve snu slíbila trůn, když ji vyprostí z písku.",
        legenda: "Okultní tradice a jasnovidec Edgar Cayce mluvili o „Síni záznamů“ ukryté pod Sfingou s věděním z Atlantidy. Populární je i tvrzení, že nos ustřelili Napoleonovi vojáci.",
        paranormalni: "Kolem Sfingy se šíří tvrzení o tajných komorách, energetických polích a astronomickém zarovnání se souhvězdím Lva v roce 10 500 př. n. l. Skutečné geofyzikální průzkumy našly jen přírodní dutiny a několik nevelkých tunelů.",
        skepticke: "Geolog Robert Schoch tvrdí, že eroze Sfingy ukazuje na dlouhé působení deště, a tedy na mnohem vyšší stáří. Většina geologů a egyptologů ale tuto erozi vysvětluje jinak: krystalizací solí, větrem a slabšími vrstvami vápence. Napoleonova historka neplatí - kresby z 18. století zachycují Sfingu bez nosu už před jeho výpravou. Arabský historik al-Makrízí uvádí, že nos poškodil v 14. století súfijský fanatik."
      },
      praktickeInfo: "Sfinga je součástí areálu pyramid v Gíze na okraji Káhiry. Vstupenky se kupují do celého areálu. Ke Sfinze se jde od údolního chrámu, samotné tělo sochy je oplocené. Nejlepší světlo a nejméně lidí bývá hned po otevření.",
      pribehy: [
        { nazev: "Stéla snu", text: "Princ Thutmose usnul ve stínu zasypané Sfingy a ve snu mu slíbila královskou korunu, pokud ji osvobodí z písku. Žulovou desku s tímto příběhem nechal postavit mezi její tlapy." },
        { nazev: "Kdo vzal Sfinze nos", text: "Napoleonovi dělostřelci jsou nevinní. Stopy dlát na obličeji ukazují na úmyslné poškození a středověký kronikář al-Makrízí ho připisuje súfijskému kazateli ze 14. století." }
      ]
    }
  },
  {
    id: "valley-of-the-kings",
    patch: {
      nazev: "Údolí králů",
      lead: "Skryté pohřebiště faraonů Nové říše, kde roku 1922 vyšla na světlo nedotčená Tutanchamonova hrobka - a s ní legenda o kletbě.",
      atmosfera: 4.6,
      paranormalniAktivita: "legenda o kletbě",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká (horko)",
      pristupnost: "placený vstup, rotace otevřených hrobek",
      popisy: {
        zahada: "Faraoni Nové říše se vzdali viditelných pyramid a nechali se pohřbívat do skalních hrobek v odlehlém údolí na západním břehu Nilu u Luxoru. Nad údolím se tyčí přirozený vrchol al-Qurn ve tvaru pyramidy. Přesto byly téměř všechny hrobky už ve starověku vyloupeny.",
        historie: "Údolí sloužilo jako královské pohřebiště zhruba v letech 1550-1070 př. n. l. Dosud tu bylo nalezeno přes 60 hrobek a jam. Roku 1922 objevil Howard Carter s podporou lorda Carnarvona hrobku KV62 Tutanchamona - jedinou královskou hrobku zachovanou téměř neporušenou. Papyry z konce Nové říše popisují soudní procesy s vykradači hrobek.",
        legenda: "Když lord Carnarvon roku 1923 zemřel v Káhiře, noviny rozšířily příběh o „kletbě faraonů“, která má stíhat každého, kdo naruší klid Tutanchamona. Údajný nápis s kletbou nad vchodem nikdy neexistoval.",
        paranormalni: "Vyprávění o kletbě uvádějí řadu úmrtí spojených s výpravou a podivné události, například zhasnutí světel v Káhiře v okamžiku Carnarvonovy smrti. Turisté hlásí tíseň v úzkých chodbách hrobek.",
        skepticke: "Carnarvon zemřel na otravu krve poté, co si při holení pořezal infikované štípnutí od komára. Statistická studie z roku 2002 v British Medical Journal nenašla u účastníků otevření hrobky kratší délku života. Howard Carter, který byl u všeho nejdéle, zemřel až roku 1939. Kletbu z velké části vytvořily noviny soupeřící s deníkem The Times, který měl na výpravu exkluzivní práva."
      },
      praktickeInfo: "Základní vstupenka zahrnuje tři hrobky z aktuálně otevřených, Tutanchamonova a Setiho I. hrobka se platí zvlášť. Hrobky se střídají kvůli ochraně maleb. V údolí je přes den velké horko - jeď brzy ráno a měj dost vody. Fotografování může vyžadovat zvláštní vstupenku.",
      pribehy: [
        { nazev: "„Vidím úžasné věci“", text: "Když Carter poprvé posvítil svíčkou do Tutanchamonovy hrobky a Carnarvon se zeptal, zda něco vidí, údajně odpověděl: „Ano, úžasné věci.“" },
        { nazev: "Kletba, kterou napsaly noviny", text: "Konkurenční listy bez přístupu k výpravě zaplnily stránky tajemnem. Příběh o kletbě se prodával lépe než archeologické zprávy - a přežil dodnes." }
      ]
    }
  },
  {
    id: "pompeii",
    patch: {
      nazev: "Pompeje",
      lead: "Římské město zasypané Vesuvem roku 79 - zastavené v jediném dni, s chlebem v pecích a obrysy lidí zachycenými v popelu.",
      atmosfera: 4.7,
      paranormalniAktivita: "kulturní a místní tvrzení",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Pompeje jsou jediné místo, kde je běžný římský den zachycený tak úplně: graffiti na zdech, volební plakáty, pekárny, nevěstince i fresky v obytných domech. Nejsilnější dojem nedělají chrámy, ale sádrové odlitky lidí v okamžiku smrti.",
        historie: "Vesuv vybuchl roku 79 n. l. Tradičně se uvádí 24. srpen, nálezy podzimního ovoce a nápis objevený roku 2018 ale ukazují spíše na říjen. Město nejprve zasypaly pemza a popel, pak ho zasáhly pyroklastické proudy horkých plynů. Systematické vykopávky začaly roku 1748. Giuseppe Fiorelli v 19. století vymyslel metodu, při níž se dutiny po rozložených tělech v popelu vyplní sádrou.",
        legenda: "Pozdější křesťanská tradice viděla v zániku Pompejí trest za nemravnost - zčásti kvůli erotickým freskám, které byly dlouho zavřené v „tajném kabinetu“ neapolského muzea. Plinius mladší popsal erupci v dopisech Tacitovi, v nichž líčí i smrt svého strýce Plinia staršího.",
        paranormalni: "Turisté, kteří si z Pompejí odvezli kamínky nebo střepy, je dodnes posílají zpět s omluvnými dopisy a tvrdí, že jim předměty přinesly neštěstí. Park takové zásilky skutečně dostává.",
        skepticke: "„Kletba ukradených kamínků“ je typický případ, kdy si lidé dodatečně spojí náhodné neštěstí s předmětem, který jim vadí na svědomí. Většina obyvatel Pompejí nezemřela, protože město opustila při první fázi erupce. Oběti, které po sobě zanechaly odlitky, zabil hlavně žár pyroklastických proudů, ne pomalé zasypání."
      },
      praktickeInfo: "Areál je rozlehlý, na hlavní okruh počítej se 4-6 hodinami. Vstupenky je lepší kupovat online, v létě je denní počet návštěvníků omezený. Nejbližší vlaková zastávka je Pompei Scavi - Villa dei Misteri na trati Circumvesuviana z Neapole. Sousední Herculaneum je menší, ale zachovalejší.",
      pribehy: [
        { nazev: "Dopisy Plinia mladšího", text: "Osmnáctiletý Plinius pozoroval erupci z Misena a jeho popis mraku ve tvaru pinie dal jméno celému typu sopečných výbuchů - pliniovská erupce." },
        { nazev: "Balíčky s omluvou", text: "Správa parku eviduje desítky zásilek s ukradenými kamínky a dopisy plnými lítosti. Odesílatelé věří, že jim suvenýr přinesl smůlu." }
      ]
    }
  },
  {
    id: "easter-island",
    patch: {
      nazev: "Velikonoční ostrov (Rapa Nui)",
      lead: "Nejodlehlejší obydlený ostrov světa a skoro tisíc kamenných soch moai - které podle místní tradice „došly“ na svá místa samy.",
      atmosfera: 4.8,
      paranormalniAktivita: "kulturní a mytologická tradice",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "vstup do národního parku placený",
      popisy: {
        zahada: "Rapa Nui leží v Tichém oceánu přes 3 500 km od chilského pobřeží. Polynéští osadníci tu vytesali téměř tisíc soch moai, některé přes deset metrů vysoké a desítky tun těžké. Jak je bez kol a tažných zvířat přesunuli přes ostrov, byla po staletí největší záhada ostrova.",
        historie: "Ostrov osídlili Polynésané pravděpodobně kolem 12.-13. století. Sochy vznikaly hlavně v lomu na svahu sopky Rano Raraku a představovaly zbožštěné předky. Roku 1722 ostrov pojmenoval Jacob Roggeveen podle dne, kdy ho spatřil. V 19. století obyvatelstvo zdecimovaly peruánské otrokářské nájezdy a nemoci, z původních tisíců zbylo jen něco přes sto lidí.",
        legenda: "Podle tradice Rapanujců sochy „chodily“ díky maně, duchovní síle náčelníků a kněží. Ostrov je spojen i s kultem Ptačího muže v Orongu a s písmem rongorongo na dřevěných destičkách, které dodnes nikdo nerozluštil.",
        paranormalni: "Populární knihy připisovaly sochy mimozemšťanům nebo pozůstatkům potopeného kontinentu. Návštěvníci popisují zvláštní pocit pod pohledem soch v Ahu Tongariki při východu slunce.",
        skepticke: "Experimenty z roku 2012 ukázaly, že skupina asi 18 lidí s lany dokáže vzpřímenou repliku moai „vést“ kolébavým pohybem dopředu - přesně jak popisuje legenda o chodících sochách. Teorie o „ekologické sebevraždě“ ostrova je dnes zpochybněná. Novější výzkumy kladou větší váhu na krysy, které ničily semena palem, a na dopad evropského kontaktu."
      },
      praktickeInfo: "Na ostrov se létá ze Santiaga de Chile nebo z Tahiti. Vstup do národního parku Rapa Nui je zpoplatněný a některé lokality smíš navštívit jen s licencovaným místním průvodcem. Na sochy a ahu (kamenné plošiny) se nesmí lézt ani sahat.",
      pribehy: [
        { nazev: "Sochy, které chodily", text: "Rapanujci tvrdili, že moai došly z lomu samy. Archeologové pak ukázali, že kolébáním s pomocí lan opravdu „kráčejí“ - legenda tak popisovala skutečnou techniku." },
        { nazev: "Nerozluštěné rongorongo", text: "Na ostrově se zachovalo jen asi dvě desítky dřevěných destiček se znaky rongorongo. Jde o jeden z mála systémů písma na světě, které zatím nikdo spolehlivě nepřečetl." }
      ]
    }
  },
  {
    id: "chichen-itza",
    patch: {
      nazev: "Chichén Itzá",
      lead: "Mayské město, kde se při rovnodennosti po schodech pyramidy plazí stínový had - a kde posvátná cenota přijímala oběti.",
      atmosfera: 4.5,
      paranormalniAktivita: "kulturní a astronomická tradice",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Pyramida El Castillo (chrám Kukulkána) má na každé straně 91 schodů. Spolu s horní plošinou dávají 365, počet dní v roce. Při jarní a podzimní rovnodennosti vrhají terasy na boky schodiště stín, který vypadá jako had sestupující k hlavě opeřeného hada u paty pyramidy.",
        historie: "Chichén Itzá byla jedním z největších mayských měst na Yucatánu s rozkvětem zhruba v 9.-12. století. V architektuře se mísí mayský styl s prvky typickými pro střední Mexiko, což dlouho vedlo k teoriím o toltéckém vpádu. Dnes se spíš uvažuje o obchodních a politických vazbách. Areál je od roku 1988 v UNESCO a roku 2007 byl zvolen mezi „nové divy světa“.",
        legenda: "Do posvátné cenoty se podle zpráv biskupa Diega de Landy vhazovali lidé i dary bohu deště Chaakovi. Pod pyramidou El Castillo se našla starší pyramida a v ní trůn ve tvaru jaguára.",
        paranormalni: "Tleskneš-li před schodištěm El Castillo, ozvěna zní jako cvrlikání ptáka quetzala. Někteří v tom vidí záměrnou akustickou konstrukci a spojení s posvátným ptákem.",
        skepticke: "Stínový had je skutečný a předvídatelný jev, není ale jisté, zda ho stavitelé navrhli záměrně, nebo jde o šťastnou náhodu orientace stavby. U ozvěny „quetzala“ akustici ukázali, že vzniká přirozeně odrazem zvuku od stupňovitého schodiště. Zda to Mayové plánovali, zůstává otevřené. Ze dna cenoty vylovili archeologové lidské kosti i dary, oběti tedy nejsou jen legenda."
      },
      praktickeInfo: "Areál leží asi 2 hodiny autem od Cancúnu nebo Méridy. Na pyramidu se už nesmí lézt. Při rovnodennosti se sjíždějí desetitisíce lidí, ale stín je viditelný i několik dní před a po ní. Přijeď hned po otevření, kvůli horku i davům.",
      pribehy: [
        { nazev: "Pyramida v pyramidě", text: "Archeologové v 30. letech prokopali tunel do El Castilla a našli uvnitř starší chrám s červeným trůnem ve tvaru jaguára vykládaným nefritem. Novější průzkumy naznačují i třetí, ještě starší vrstvu." },
        { nazev: "Zlato z posvátné studny", text: "Americký konzul Edward Thompson na počátku 20. století bagroval cenotu a vytáhl zlato, nefrit i kosti. Většinu předmětů vyvezl do USA a Mexiko o jejich návrat vedlo dlouhý spor." }
      ]
    }
  },
  {
    id: "teotihuacan",
    patch: {
      nazev: "Teotihuacán",
      lead: "Metropole se Sluneční a Měsíční pyramidou, kterou Aztékové našli už opuštěnou - a pojmenovali ji „místem, kde se rodí bohové“.",
      atmosfera: 4.5,
      paranormalniAktivita: "kulturní a esoterická tradice",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Ve svém vrcholu kolem roku 450 n. l. měl Teotihuacán odhadem 100 000 i více obyvatel a patřil k největším městům světa. Nevíme, jakým jazykem mluvili jeho obyvatelé ani jak se město samo jmenovalo. Jméno Teotihuacán mu dali o staletí později Aztékové.",
        historie: "Město rostlo od 1. století př. n. l. podle promyšleného plánu kolem osy Cesta mrtvých. Sluneční pyramida patří k největším stavbám předkolumbovské Ameriky. Kolem 6. století n. l. postihl centrum požár a město upadlo, příčiny se dodnes diskutují. Aztékové sem později putovali jako na posvátné místo stvoření.",
        legenda: "Podle aztéckého mýtu se tu bohové sešli, aby stvořili páté slunce. Bůh Nanahuatzin se vrhl do ohně a stal se sluncem, Tecciztecatl ho následoval a stal se měsícem.",
        paranormalni: "Při jarní rovnodennosti stoupají na Sluneční pyramidu tisíce lidí v bílém, aby „nabrali energii“. V roce 2003 archeologové pod Chrámem opeřeného hada objevili tunel. Na jeho konci našli tisíce darů a v horninách kovový pyrit, který odráží světlo jako hvězdy.",
        skepticke: "Jméno Cesta mrtvých dali ulici Aztékové, kteří mylně považovali okolní plošiny za hrobky. Moderní „energetické“ rituály při rovnodennosti nemají oporu v doloženém náboženství teotihuacánské kultury. Tunel pod chrámem je skutečný, jeho výklad jako symbolického podsvětí je však interpretace archeologů, ne přímé svědectví."
      },
      praktickeInfo: "Areál leží asi hodinu autobusem severovýchodně od Ciudad de México. Na Sluneční pyramidu se v posledních letech většinou nesmí, pravidla se mění - ověř aktuální stav. Vezmi pokrývku hlavy, opalovací krém a vodu. Nad areálem ráno startují horkovzdušné balóny.",
      pribehy: [
        { nazev: "Tunel plný pyritu", text: "Archeolog Sergio Gómez dvanáct let prokopával tunel pod Chrámem opeřeného hada. Na jeho konci našel tisíce obětin, sošky a stěny posypané minerálem, který při světle pochodní zářil jako hvězdná obloha." },
        { nazev: "Město bez jména", text: "Jedno z největších měst starověku zůstává anonymní - jeho obyvatelé nezanechali čitelné texty a nevíme ani, jak sami sebe nazývali." }
      ]
    }
  },
  {
    id: "angkor-wat",
    patch: {
      nazev: "Angkor Vat",
      lead: "Největší náboženská stavba světa, chrám zasvěcený Višnuovi a orientovaný na západ - ke straně, kterou hinduisté spojují se smrtí.",
      atmosfera: 4.7,
      paranormalniAktivita: "kulturní a duchovní tradice",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placená vstupenka do parku Angkor",
      popisy: {
        zahada: "Angkor Vat je obklopen vodním příkopem širokým 190 metrů a jeho pět věží představuje vrcholy posvátné hory Méru. Na rozdíl od většiny khmerských chrámů hledí na západ. To vedlo k domněnce, že šlo o pohřební chrám krále.",
        historie: "Chrám dal postavit král Súrjavarman II. v první polovině 12. století jako hinduistickou svatyni zasvěcenou Višnuovi. Koncem 13. století se změnil v buddhistický chrám a jako takový funguje dodnes. Angkor byl hlavním městem Khmerské říše, ale nikdy nebyl úplně „ztracen“ - mniši v chrámu žili nepřetržitě. Evropě ho v 19. století zpopularizoval Henri Mouhot.",
        legenda: "Místní legendy připisují stavbu chrámu bohu Indrovi nebo nebeskému architektovi, který ho postavil za jedinou noc. Reliéfy na zdech zachycují mýtus o stloukání mléčného oceánu, kdy bohové a démoni přetahují obřího hada.",
        paranormalni: "Turisté vyprávějí o duchu khmerských tanečnic apsar, kterých je na zdech vytesáno přes 1 800, a o tíživé atmosféře v noci. Ozvěnové komnaty, kde se člověk tluče do hrudi a ozvěna zesiluje úder, místní spojují s modlitbami za uzdravení.",
        skepticke: "Orientace na západ se dá vysvětlit zasvěcením Višnuovi, se kterým je západ spojen, nejen pohřební funkcí - obě teorie mají zastánce. Lidarové snímkování po roce 2012 odhalilo, že kolem chrámů ležela rozlehlá síť ulic, kanálů a čtvrtí. Angkor byl tedy obří nízkozastavěné město, ne jen soubor osamělých chrámů v džungli."
      },
      praktickeInfo: "Vstupenky na 1, 3 nebo 7 dní se kupují v oficiálním centru u Siem Reapu, v chrámech se vyžaduje oblečení zakrývající ramena a kolena. Východ slunce nad Angkor Vatem je velmi oblíbený, počítej s davy u odrazové nádrže. Ta Prohm a Bayon jsou v ceně stejné vstupenky.",
      pribehy: [
        { nazev: "Město, které ukázal laser", text: "Letecký lidar „prosvítil“ džungli a odhalil pod stromy pravidelnou síť ulic a vodních děl - Angkor byl jedním z největších předindustriálních městských celků světa." },
        { nazev: "Chrám na státní vlajce", text: "Silueta Angkor Vatu je hlavním motivem vlajky Kambodže - patří k velmi malému počtu národních vlajek, na kterých je vyobrazená skutečná stavba." }
      ]
    }
  },
  {
    id: "petra-treasury",
    patch: {
      nazev: "Petra: Pokladnice (Al-Chazna)",
      lead: "Fasáda vytesaná do růžového pískovce na konci soutěsky Sík - podle beduínů skrývá kamenná urna na jejím vrcholu faraonův poklad.",
      atmosfera: 4.8,
      paranormalniAktivita: "kulturní a místní tvrzení",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká (horko, bleskové povodně v Síku)",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Pokladnice se otevře najednou na konci více než kilometr dlouhé úzké soutěsky Sík. Fasáda vysoká asi 40 metrů není postavená, ale vytesaná shora dolů přímo do skály. Za ní je jen několik prostých místností - honosná průčelí Petry skrývají překvapivě strohé interiéry.",
        historie: "Petra byla hlavním městem Nabatejců, kteří zbohatli na obchodu s kadidlem a kořením. Pokladnice vznikla pravděpodobně v 1. století n. l. a nejspíš šlo o hrobku krále, často se uvádí Aretas IV. Roku 106 Petru připojili Římané k provincii Arábie. Po zemětřeseních a přesunu obchodních tras upadla. Evropě ji roku 1812 znovu „objevil“ Johann Ludwig Burckhardt v přestrojení za muslimského poutníka.",
        legenda: "Jméno Al-Chazna („Pokladnice“) pochází z beduínské pověsti, že kamenná urna na vrcholu fasády skrývá poklad egyptského faraona. Urna je dodnes poďobaná stopami kulek - lidé do ní stříleli, aby poklad vysypali.",
        paranormalni: "V noci, při programu Petra by Night s tisíci svíček, popisují návštěvníci silnou, téměř posvátnou atmosféru. Místní příběhy mluví o džinech, kteří obývají opuštěné hrobky v okolních skalách.",
        skepticke: "Urna je z pevného kamene a žádný poklad v ní nikdy nebyl. Vykopávky před fasádou v roce 2003 odhalily pod úrovní terénu další hrobky s lidskými ostatky, což podporuje výklad stavby jako hrobky. Barva fasády se mění během dne podle úhlu slunce, ne kvůli nějakému tajemnému jevu."
      },
      praktickeInfo: "Vstup je z městečka Wadi Musa, výhodný je Jordan Pass, který zahrnuje vstupné i vízum. Pokladnice je asi 2 km od brány. Klášter (Ad-Deir) vyžaduje dalších zhruba 800 schodů. V Síku hrozí při dešti bleskové povodně, dbej pokynů strážců.",
      pribehy: [
        { nazev: "Muž, který předstíral pouť", text: "Švýcarský cestovatel Burckhardt se vydával za muslimského učence Šajcha Ibrahima a do Petry se dostal pod záminkou oběti u hrobu proroka Árona. Po staletích byl prvním Evropanem, který město popsal." },
        { nazev: "Poklad v urně", text: "Beduíni věřili, že faraon ukryl zlato v urně na vrcholu fasády. Stopy po kulkách, kterými se ho snažili vysypat, jsou na kameni vidět dodnes." }
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
