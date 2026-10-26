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
    id: "plitvice-lakes",
    patch: {
      nazev: "Plitvická jezera",
      lead: "Šestnáct tyrkysových jezer spojených stovkami vodopádů, která si příroda sama staví z vápence - a o nichž legenda tvrdí, že je přivolala Černá královna.",
      atmosfera: 4.7,
      paranormalniAktivita: "místní legenda",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká (kluzké dřevěné chodníky)",
      pristupnost: "placený vstup, v létě časová okna",
      popisy: {
        zahada: "Plitvická jezera tvoří kaskádu 16 jezer, která přepadají jedno do druhého přes travertinové hráze a vodopády. Voda mění barvu od azurové po smaragdovou podle minerálů, mechů a úhlu slunce.",
        historie: "Jezera vznikla tak, že se uhličitan vápenatý z vody usazuje na mechu a řasách a vytváří travertinové bariéry, které stále rostou. Národní park byl založen roku 1949 a roku 1979 patřil k prvním přírodním památkám zapsaným na seznam UNESCO. Na začátku války v roce 1991 tu padly první oběti bojů v Chorvatsku.",
        legenda: "Podle legendy kraj trpěl velkým suchem. Lidé se modlili a Černá královna (Crna kraljica) se jim zjevila a seslala déšť, který trval tak dlouho, až vznikla jezera.",
        paranormalni: "Místní vyprávějí o vílách, které tančí v mlze nad vodopády. Ráno, kdy mlha leží nad hladinou, mluví návštěvníci o snovém, téměř nereálném dojmu.",
        skepticke: "Barvy jezer i jejich vznik vysvětluje geologie a biologie: travertin roste asi o 1 cm za rok a jezera se tak stále proměňují. Tím, že se příroda „staví sama“, je park unikátní, ne kvůli nadpřirozenu."
      },
      praktickeInfo: "Park je asi 2 hodiny autem nebo autobusem ze Záhřebu i ze Zadaru. V létě se vstupenky prodávají na časová okna a je nutné je rezervovat online. Okruhy trvají 2-8 hodin, součástí vstupu je loďka přes jezero Kozjak a vláček. Koupání je zakázané. Dřevěné chodníky jsou kluzké, choď v pevné obuvi a nezastavuj se v úzkých místech.",
      pribehy: [
        { nazev: "Jezera, která rostou", text: "Travertinové hráze přibývají každý rok. Některé vodopády jsou tedy mladší než okolní vesnice." },
        { nazev: "Černá královna a déšť", text: "Legenda o královně, která ukončila sucho deštěm, vysvětluje vznik jezer - vědci ho popisují o něco pomaleji, ale stejně kouzelně." }
      ]
    }
  },
  {
    id: "postojna-cave",
    patch: {
      nazev: "Postojenská jeskyně",
      lead: "Jedna z největších krasových jeskyní Evropy, kterou se jezdí podzemním vláčkem - a kde žije „dračí mládě“, slepý mlok, který vydrží roky bez jídla.",
      atmosfera: 4.6,
      paranormalniAktivita: "lidové pověsti o dracích",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup, prohlídky na čas",
      popisy: {
        zahada: "Postojenská jeskyně má přes 24 km chodeb a sálů s krápníky. Prohlídka začíná jízdou podzemním vláčkem. V jeskynních vodách žije macarát jeskynní (Proteus anguinus), bledý obojživelník bez očí, který se může dožít přes 100 let.",
        historie: "Návštěvníci sem chodí od 13. století, jak dokládají nápisy na stěnách. Moderní turismus začal roku 1818, kdy místní Luka Čeč objevil nové rozsáhlé části jeskyně. Podzemní železnice jezdí od roku 1872. Za druhé světové války tu Němci skladovali palivo, které partyzáni roku 1944 zapálili - stopy sazí jsou dodnes vidět.",
        legenda: "Když po povodních vyplavovala voda z jeskyní bledé tvory, lidé věřili, že jsou to mláďata draka, který žije v hlubinách. Proto se macarátům ve Slovinsku přezdívá „dračí mláďata“.",
        paranormalni: "Ve tmě jeskyně, kde je slyšet jen kapání vody, popisují lidé pocit nadčasovosti. Pověsti mluví o pokladech skrytých v nepřístupných chodbách.",
        skepticke: "Macarát je skutečný živočich, dokonale přizpůsobený životu ve tmě: nemá oči, zpomalený metabolismus mu umožňuje hladovět i několik let. S draky nemá nic společného, ale je stejně neobyčejný."
      },
      praktickeInfo: "Postojna je asi 50 minut autem z Lublaně, jezdí sem autobusy i vlaky (z nádraží je to asi 20 minut pěšky). Prohlídky začínají v pevných časech a trvají asi 1,5 hodiny, audioprůvodce je ve více jazycích. Uvnitř je celoročně kolem 10 °C. Vstupenky lze kombinovat s hradem Predjama, který stojí ve skále asi 10 km odtud.",
      pribehy: [
        { nazev: "Dračí mláďata", text: "Slovinci kdysi věřili, že bledí mloci z jeskyně jsou mláďata draka. Dnes jsou symbolem slovinské přírody." },
        { nazev: "Vláček do podzemí", text: "Podzemní železnice vozí návštěvníky do jeskyně už od roku 1872 - dnes je to jeden z nejoblíbenějších zážitků ve Slovinsku." }
      ]
    }
  },
  {
    id: "evora-chapel-of-bones",
    patch: {
      nazev: "Kostnice v Évoře (Capela dos Ossos)",
      lead: "Kaple, jejíž stěny jsou obložené kostmi asi 5 000 mnichů a měšťanů - nad vchodem vítá nápis: „My kosti, co jsme tady, čekáme na ty vaše.“",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "malé vstupné",
      popisy: {
        zahada: "Kaple kostí je součástí kostela sv. Františka v Évoře v portugalském Alenteju. Stěny a sloupy pokrývají lebky a kosti uspořádané do vzorů. U stěny visely dvě vysušené mrtvoly, muž a dítě.",
        historie: "Kapli vytvořili františkánští mniši koncem 16. století. Hřbitovy ve městě byly přeplněné a mniši chtěli kostmi věřícím připomenout pomíjivost života. Historické centrum Évory je od roku 1986 na seznamu UNESCO.",
        legenda: "Podle pověsti jsou vysušená těla otce a syna, které proklela matka - prý kvůli jejich hříchům je země nechtěla přijmout. Nad vchodem je nápis „Nós ossos que aqui estamos, pelos vossos esperamos“.",
        paranormalni: "Návštěvníci popisují tíseň a chlad. Místní věří, že kletba drží vysušená těla nerozložená.",
        skepticke: "Kaple byla zamýšlena jako meditace o smrti, ne jako strašidelné místo. Vysušení těl lze vysvětlit suchým vzduchem a podmínkami, ne kletbou."
      },
      praktickeInfo: "Évora je asi 1,5 hodiny vlakem nebo autobusem z Lisabonu, vhodná na jednodenní výlet. Kaple je v centru, prohlídka trvá kolem 30 minut, vstupenka zahrnuje i střechu kostela s výhledem. Kombinuj s římským chrámem a katedrálou.",
      pribehy: [
        { nazev: "Pozdrav kostí", text: "Nápis nad vchodem varuje návštěvníky, že jednou skončí stejně - přesně o to mnichům šlo." },
        { nazev: "Otec a syn", text: "Pověst o kletbě matky dodává kapli temný příběh, který si návštěvníci vyprávějí dodnes." }
      ]
    }
  },
  {
    id: "capuchin-crypt-palermo",
    patch: {
      nazev: "Kapucínské katakomby v Palermu",
      lead: "Chodby, ve kterých visí a leží asi 8 000 mumifikovaných těl v šatech - a malá Rosalia Lombardo, „nejkrásnější mumie světa“, která vypadá, jako by spala.",
      atmosfera: 4.9,
      paranormalniAktivita: "silná místní tradice",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "malé vstupné, focení zakázáno",
      popisy: {
        zahada: "V podzemí kapucínského kláštera v Palermu jsou tisíce mumií rozdělené podle pohlaví, povolání a společenského postavení: kněží, mniši, muži, ženy, panny, děti. Mnoho z nich je oblečených ve svém nejlepším oblečení.",
        historie: "Kapucíni začali mrtvé mumifikovat koncem 16. století, když zjistili, že těla mnichů v kryptě se přirozeně vysušila. Později si tuto „poctu“ přáli i bohatí měšťané a rodiny platily za údržbu těl. Pohřbívání skončilo v 80. letech 19. století, poslední byla roku 1920 dvouletá Rosalia Lombardo.",
        legenda: "Rosalia Lombardo je zachovaná tak dokonale, že se o ní říká, že „otevírá a zavírá oči“. Návštěvníci tvrdí, že sledovali, jak se její víčka pohnula.",
        paranormalni: "Kromě „mrkající“ Rosalie se vypráví o šepotu v chodbách. Někteří návštěvníci odcházejí s pocitem, že je mrtví sledují.",
        skepticke: "Rosaliu zabalzamoval lékař Alfredo Salafia speciální směsí, jejíž recept se našel až v roce 2009. Iluze otevírání očí vzniká měnícím se světlem: oči nejsou úplně zavřené. Šepot vysvětluje akustika chodeb a hlasy ostatních návštěvníků."
      },
      praktickeInfo: "Katakomby jsou asi 20 minut chůze nebo krátká jízda autobusem od katedrály v Palermu. Vstupné je malé, uvnitř je zakázané fotografovat. Prohlídka trvá kolem 30-45 minut. Návštěva je pro citlivé lidi náročná - mumie jsou velmi blízko. Chovej se uctivě, jsou to pohřebiště.",
      pribehy: [
        { nazev: "Spící kráska", text: "Dvouletá Rosalia zemřela roku 1920 na zápal plic. Její tělo vypadá i po sto letech jako spící dítě." },
        { nazev: "Tajemství balzamovače", text: "Receptura doktora Salafii byla dlouho záhadou. Až v roce 2009 našla historička jeho rukopis: formalín, zinkové soli, alkohol, kyselina salicylová a glycerin." }
      ]
    }
  },
  {
    id: "naples-underground",
    patch: {
      nazev: "Podzemní Neapol (Napoli Sotterranea)",
      lead: "Labyrint řeckých lomů, římských akvaduktů a protileteckých krytů 40 metrů pod ulicemi Neapole - a domov skřítka Munaciella, který lidem schovává věci.",
      atmosfera: 4.5,
      paranormalniAktivita: "místní lidová tradice",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká (úzké průchody)",
      pristupnost: "jen s prohlídkou",
      popisy: {
        zahada: "Pod historickým centrem Neapole je síť tunelů, cisteren a lomů dlouhá desítky kilometrů. Řekové tu těžili tufový kámen na stavbu města, Římané z dutin udělali cisterny pro akvadukt, ve 2. světové válce sloužily jako kryty.",
        historie: "Neapol založili Řekové jako Neapolis kolem 470 př. n. l. Podzemní nádrže zásobovaly město vodou až do epidemie cholery roku 1884, kdy se přestaly používat. Za války se v nich ukrývaly tisíce lidí před bombardováním - na zdech se dochovaly nápisy a kresby.",
        legenda: "„Munaciello“ (mníšek) je neapolský skřítek v kápi. Podle tradice byli munacielli studnaři, kteří se dostali tunely do domů a buď nechávali drobné mince, nebo věci kradli. Někomu přináší štěstí, jinému škodí.",
        paranormalni: "Neapolští si dodnes vyprávějí o munaciellovi, který schovává klíče a posílá štěstí do loterie. Neapolský folklor zná i Bellu 'Mbrianu, laskavého ducha, který chrání domácnost.",
        skepticke: "Munaciello měl pravděpodobně skutečný původ ve studnařích, kteří znali podzemí a mohli se přes šachty dostat do domů. Duchové jsou součástí bohatého neapolského folkloru."
      },
      praktickeInfo: "Vstup Napoli Sotterranea je na náměstí San Gaetano v historickém centru, prohlídky jsou v italštině a angličtině a trvají asi 1,5 hodiny. Některé průchody jsou velmi úzké (přes 50 cm) a nesou se v nich svíčky - pro lidi s klaustrofobií lze úsek vynechat. Pod zemí je kolem 15-18 °C. V okolí jsou i další podzemní trasy (Galleria Borbonica).",
      pribehy: [
        { nazev: "Skřítek z vodovodu", text: "Neapolská pověst o munaciellovi vznikla podle historiků ze studnařů, kteří uměli nečekaně vylézt v cizím domě." },
        { nazev: "Kryt pro celé město", text: "Za války se do podzemí uchylovaly tisíce lidí. Na stěnách zůstaly kresby letadel a jména dětí." }
      ]
    }
  },
  {
    id: "corvin-castle",
    patch: {
      nazev: "Hrad Corvin (Hunyad)",
      lead: "Gotický hrad v Transylvánii, kde byl podle tradice vězněn Vlad Dracula - a jehož studnu prý vykopali tři Turci za slib svobody, který nebyl dodržen.",
      atmosfera: 4.8,
      paranormalniAktivita: "silná místní tradice",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Hrad Corvin v Hunedoaře je jedním z největších hradů ve střední a východní Evropě. Stojí na skále nad řekou, přístupný přes vysoký dřevěný most, a má věže, zdobené síně a hluboké sklepy.",
        historie: "Hrad v 15. století přestavěl Jan Hunyadi, uherský vojevůdce a regent, otec krále Matyáše Korvína. Přestavba z něj udělala reprezentativní sídlo s rytířským sálem. V 19. století hrad poničil požár a byl romanticky restaurován.",
        legenda: "Podle pověsti tři turečtí zajatci kopali studnu 15 let s příslibem svobody, když najdou vodu. Když ji našli, slib nebyl dodržen a na zdi studny měli vyrýt „Máte vodu, ale nemáte duši“. Vlad III. Dracula byl podle tradice v hradu vězněn Hunyadim.",
        paranormalni: "Hrad je často označován za jedno z nejstrašidelnějších míst Rumunska, objevil se v pořadech o lovení duchů. Návštěvníci zmiňují pocit v medvědí jámě a ve sklepech mučírny.",
        skepticke: "Nápis ve studni je ve skutečnosti mnohem kratší a jeho překlad je sporný - pověst ho rozšířila. Uvěznění Vlada III. na tomto hradě nemá jednoznačné doklady. Mučicí nástroje ve výstavě jsou z velké části moderní rekonstrukce."
      },
      praktickeInfo: "Hunedoara leží asi 2,5 hodiny autem z Kluže nebo 4 hodiny z Brašova, nejbližší velké nádraží je Deva. Prohlídka hradu je samostatná a trvá 1-2 hodiny. Večer bývá hrad nasvícený. Dobře se kombinuje s římskými ruinami Sarmizegetusa.",
      pribehy: [
        { nazev: "Studna bez duše", text: "Tři zajatci kopali skrz skálu 15 let. Pověst praví, že místo svobody dostali smrt - a svou hořkost vyryli do kamene." },
        { nazev: "Draculův vězeň", text: "Tradice spojuje hrad s mladým Vladem Draculou, který tu měl být držen Hunyadim. Historici k tomu zůstávají opatrní." }
      ]
    }
  },
  {
    id: "rosslyn-chapel",
    patch: {
      nazev: "Kaple Rosslyn",
      lead: "Skotská kaple z 15. století s tisíci vyřezávaných symbolů - od „Šifry mistra Leonarda“ ji svět spojuje s templáři a svatým grálem.",
      atmosfera: 4.7,
      paranormalniAktivita: "konspirační a esoterické teorie",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup, focení uvnitř zakázáno",
      popisy: {
        zahada: "Kaple Rosslyn je nedaleko Edinburghu. Její kamenné řezby zobrazují anděly, draky, rostliny, přes sto „zelených mužů“ a záhadné krychličky na stropě, v nichž někteří vidí zakódovanou hudbu.",
        historie: "Kapli založil roku 1446 William Sinclair, 1. hrabě z Caithness. Stavba nebyla nikdy dokončena - měla být jen částí většího kostela. Po reformaci chátrala, v 19. století byla opravena. Dodnes je činným kostelem Skotské episkopální církve.",
        legenda: "Román Šifra mistra Leonarda (2003) a film (2006) z ní udělaly místo spojené s templáři a svatým grálem. Pověst vypráví o „Učňově sloupu“: učeň vyřezal sloup tak krásný, že ho žárlivý mistr zabil kladivem.",
        paranormalni: "Mezi esoterické teorie patří tvrzení, že pod kaplí jsou ukryty templářské poklady, grál nebo hlava Jana Křtitele. Některé řezby prý zobrazují americké rostliny, kukuřici či aloe, ještě před Kolumbovou plavbou.",
        skepticke: "Templáři byli zrušeni roku 1312, více než 130 let před stavbou kaple. „Kukuřice“ v řezbách je podle většiny odborníků stylizované obilí nebo jiný rostlinný ornament. Průzkumy pod kaplí nic takového nenašly. Spojení s grálem je literární fikce."
      },
      praktickeInfo: "Rosslyn je asi 45 minut autobusem (linka 37) z centra Edinburghu do vesnice Roslin. Vstupné je placené, uvnitř se nefotí. Průvodci mají krátké výklady během dne. Kaple je stále kostelem - o nedělích jsou bohoslužby a otevírací doba se liší.",
      pribehy: [
        { nazev: "Učňův sloup", text: "Spirálovitě vyřezávaný sloup má podle legendy na svědomí zavražděného učně - na stropě je i hlava „mistra“ a „učně“." },
        { nazev: "Hudba v kamenu", text: "Hudebníci Stuart a Thomas Mitchellovi tvrdili, že ve vzorech krychliček na stropě je zakódovaná skladba. Jejich interpretace je ale velmi volná." }
      ]
    }
  },
  {
    id: "greyfriars-kirkyard",
    patch: {
      nazev: "Hřbitov Greyfriars v Edinburghu",
      lead: "Starý edinburský hřbitov s věrným psem Bobbym, hroby, které inspirovaly jména v Harrym Potterovi - a mauzoleem, kde má strašit „Mackenzieho poltergeist“.",
      atmosfera: 4.7,
      paranormalniAktivita: "silná místní tradice",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "hřbitov zdarma, Black Mausoleum jen s prohlídkou",
      popisy: {
        zahada: "Greyfriars Kirkyard je hřbitov ve starém Edinburghu, používaný od 16. století. V jeho rohu je takzvané Covenanters' Prison, kde byli roku 1679 v drsných podmínkách drženi stovky odpůrců královy církevní politiky.",
        historie: "U hřbitova je pohřben George Mackenzie, „Krvavý Mackenzie“, státní zástupce, který pronásledoval presbyteriánské covenantery. Na hřbitově je i hrob psa Bobbyho, který podle tradice 14 let hlídal hrob svého pána, až do smrti v roce 1872.",
        legenda: "Mezi hroby jsou i jména jako Thomas Riddell, které podle fanoušků inspirovalo Tom Riddle (Voldemort) v Harrym Potterovi. J. K. Rowlingová psala v kavárnách nedaleko a připustila, že si jména mohla nevědomky zapamatovat.",
        paranormalni: "Od roku 1999, kdy bezdomovec pronikl do Mackenzieho hrobky, se hlásí „Mackenzieho poltergeist“: škrábance, modřiny a omdlévání návštěvníků nočních prohlídek do zamčeného „Black Mausoleum“.",
        skepticke: "Zážitky z nočních prohlídek se dají vysvětlit tmou, chladem, sugescí a očekáváním. Příběh o Bobbym je skutečný, ale historici upozorňují, že pes mohl být „udržován“ místními kvůli turistům. Shoda jmen s Harrym Potterem je nepotvrzená."
      },
      praktickeInfo: "Hřbitov je kousek od Royal Mile, za sochou psa Bobbyho na George IV Bridge, a přes den je vstup zdarma. Do Covenanters' Prison a Black Mausoleum se dostaneš jen s večerní prohlídkou (City of the Dead Tours). Uvnitř hřbitova se chovej s úctou, stále je to pohřebiště. Kavárna The Elephant House, kde se psaly kapitoly Harryho Pottera, je kousek odtud.",
      pribehy: [
        { nazev: "Věrný Bobby", text: "Skye teriér Bobby měl prý 14 let ležet na hrobě svého pána. Jeho socha je jedna z nejfotografovanějších v Edinburghu - lidé mu hladí nos pro štěstí." },
        { nazev: "Hrob, který dal jméno Voldemortovi", text: "Fanoušci hledají na hřbitově hrob Thomase Riddella. Jméno se nápadně podobá Tomu Raddlovi z Harryho Pottera." }
      ]
    }
  },
  {
    id: "bastei-bridge",
    patch: {
      nazev: "Most Bastei v Saském Švýcarsku",
      lead: "Kamenný most mezi pískovcovými věžemi 194 metrů nad Labem, kde stál středověký skalní hrad - a kam jezdí romantici malovat od 19. století.",
      atmosfera: 4.5,
      paranormalniAktivita: "romantická tradice",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká (výška)",
      pristupnost: "most zdarma, skalní hrad Neurathen za malý poplatek",
      popisy: {
        zahada: "Bastei je skupina pískovcových skal nad řekou Labe v Saském Švýcarsku. Kamenný most s oblouky spojuje skalní věže, kde stával středověký hrad Neurathen.",
        historie: "Skalní hrad Neurathen pocházel z 13. století a v 15. století byl dobyt a zničen. V 19. století sem začali jezdit romantičtí malíři, včetně Caspara Davida Friedricha. Dřevěný most z roku 1824 nahradil roku 1851 kamenný. Území je národním parkem od roku 1990.",
        legenda: "Lidové pověsti spojují skály s obry a rytíři z Neurathenu, kteří se ze skal vrhli, aby se nevzdali. Romantici v krajině viděli pohádkové kulisy.",
        paranormalni: "Ráno, kdy mlha zaplní údolí Labe, vypadají skály jako ostrovy v moři mraků. Návštěvníci mluví o pocitu, že se dívají do jiného světa.",
        skepticke: "Pískovcové věže vznikly erozí mořských usazenin z doby křídy. Pověsti o rytířích nemají historické doklady, ale skutečný hrad Neurathen je archeologicky doložen."
      },
      praktickeInfo: "Z Drážďan jede vlak S1 do Kurortu Rathen (asi 40 minut), přes Labe se přepluje přívozem a na Bastei se vystoupá asi za 30-45 minut. Autem lze dojet na parkoviště nahoře. Na skalní hrad Neurathen je malý poplatek. Kdo jede z Prahy, je to asi 2 hodiny. Nejméně lidí je brzy ráno.",
      pribehy: [
        { nazev: "Most malířů", text: "Caspar David Friedrich a další romantici z Bastei udělali symbol německé krajinomalby." },
        { nazev: "Hrad ve skále", text: "Ze středověkého hradu Neurathen zůstaly jen tesané místnosti a schody ve skále - procházka po něm připomíná pohádku." }
      ]
    }
  },
  {
    id: "turda-salt-mine",
    patch: {
      nazev: "Solný důl Turda",
      lead: "Opuštěný solný důl v Transylvánii proměněný v podzemní park s ruským kolem a jezírkem, po kterém se dá jezdit na loďkách - 120 metrů pod zemí.",
      atmosfera: 4.6,
      paranormalniAktivita: "atmosféra místa",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Salina Turda je solný důl u města Turda v Rumunsku. Obrovské sály se stěnami ze solných vrstev jsou osvětlené futuristickými světly a na dně dolu je jezírko s loďkami a ruským kolem.",
        historie: "Sůl se tu těžila od středověku, až do roku 1932. Za 2. světové války důl sloužil jako protiletecký kryt. Od roku 1992 je otevřený veřejnosti a v roce 2010 byl přebudován na turistický park.",
        legenda: "Solné vrstvy se v sálech skládají do vzorů, které připomínají letokruhy. Místní tvrdí, že vzduch v dole léčí.",
        paranormalni: "Podzemní sály s lampami vyvolávají dojem filmové kulisy nebo vesmírné stanice. Návštěvníci popisují zvláštní klid a ticho.",
        skepticke: "Solný vzduch se používá v haloterapii, ale její účinky jsou vědecky omezeně prokázané. Futuristická atmosféra je dílem moderní architektury a osvětlení."
      },
      praktickeInfo: "Turda je asi 30-40 minut autem z Kluže (Cluj-Napoca), jezdí sem i autobusy. Prohlídka je samostatná a trvá 1,5-2 hodiny. Uvnitř je kolem 10-12 °C, vezmi si teplé oblečení. Atrakce jako loďky a ruské kolo se platí zvlášť. V létě a o víkendech bývá fronta.",
      pribehy: [
        { nazev: "Ruské kolo v podzemí", text: "120 metrů pod zemí se točí ruské kolo - jedna z nejneobvyklejších atrakcí Evropy." },
        { nazev: "Kryt pro město", text: "Za války se sem ukrývali obyvatelé Turdy před bombardováním." }
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
