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
    id: "suomenlinna",
    patch: {
      nazev: "Suomenlinna",
      lead: "Námořní pevnost na ostrovech před Helsinkami - postavená Švédy, záhadně vydaná Rusům v roce 1808 bez skutečného boje, dnes obydlená památka UNESCO.",
      atmosfera: 4.4,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné, trajekt",
      popisy: {
        zahada: "Pevnost se rozkládá na několika propojených ostrovech. Hradby, bastiony, tunely a děla vytvářejí labyrint, ve kterém dnes žije asi 800 obyvatel. Největší historickou záhadou je, proč se „Gibraltar severu“ vzdal téměř bez boje.",
        historie: "Švédsko začalo pevnost stavět v roce 1748 pod jménem Sveaborg. Stavbu vedl Augustin Ehrensvärd, který je zde pohřben. V roce 1808 ji velitel Carl Olof Cronstedt po obléhání vydal Rusům - dodnes se diskutuje, zda šlo o zradu, podplacení, nebo zoufalou situaci. V roce 1855 ji ostřelovala britsko-francouzská flotila. Jméno Suomenlinna dostala v roce 1918. Na seznamu UNESCO je od roku 1991.",
        legenda: "Místní vyprávějí o duchu, který chodí po hradbách, a o vojácích v tunelech. Část obyvatel tvrdí, že v kasematách je slyšet kroky.",
        paranormalni: "Kasematy a tunely za soumraku nabízejí silnou atmosféru. V létě se pořádají strašidelné prohlídky.",
        skepticke: "Kapitulace v roce 1808 se dnes vysvětluje hlavně nedostatkem zásob, ruskou propagandou a tlakem na velitele. Duchové patří k folkloru."
      },
      praktickeInfo: "Trajekt jezdí z Tržního náměstí (Kauppatori) v Helsinkách po celý rok, plavba trvá asi 15 minut a platí běžná jízdenka městské dopravy. Na prohlídku počítej s půl dnem. Vezmi baterku do tunelů. V zimě je ostrov klidný a zasněžený.",
      pribehy: [
        { nazev: "Gibraltar severu", text: "Pevnost, která se měla ubránit každé flotile, se v roce 1808 vzdala téměř bez výstřelu." },
        { nazev: "Hrob stavitele", text: "Augustin Ehrensvärd, který pevnost navrhl, je pohřben uprostřed svého díla." }
      ]
    }
  },
  {
    id: "kaali-crater",
    patch: {
      nazev: "Kráter Kaali",
      lead: "Meteoritický kráter s jezírkem na estonském ostrově Saaremaa - jedno z mála míst v Evropě, kde dopad meteoritu viděli lidé, a možná inspirace mýtu o „Thule“.",
      atmosfera: 4.4,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Hlavní kráter má průměr asi 110 metrů a hloubku kolem 22 metrů, na dně je jezírko. V okolí je dalších osm menších kráterů. Meteorit dopadl v době, kdy na ostrově už žili lidé.",
        historie: "Kráter vznikl dopadem železného meteoritu, který se rozpadl v atmosféře. Odhady stáří se výrazně liší - od zhruba 3 500 do více než 7 000 let. U kráteru bylo opevněné sídliště a v jezírku archeologové našli kosti obětovaných zvířat.",
        legenda: "Estonský prezident a spisovatel Lennart Meri navrhl, že dopad meteoritu mohl inspirovat antické zprávy o Thule, kde „slunce chodí spát“. Lidové pověsti vyprávějí o slunci, které spadlo na zem.",
        paranormalni: "Místo bylo podle archeologů posvátné. Dnešní návštěvníci popisují klidnou, téměř posvátnou atmosféru.",
        skepticke: "Spojení s Thule je hypotéza, ne doložený fakt. Datace dopadu se v odborné literatuře stále upřesňuje."
      },
      praktickeInfo: "Kaali je asi 18 km od Kuressaare, hlavního města ostrova Saaremaa. Na ostrov se dostaneš trajektem z Virtsu (asi 30 minut). U kráteru je malé návštěvnické centrum a muzeum meteoritů. Okolní menší krátery jsou označené na stezce.",
      pribehy: [
        { nazev: "Slunce spadlo na zem", text: "Pověsti mohly vzniknout ze vzpomínky na ohnivou kouli, která dopadla na ostrov." },
        { nazev: "Oběti v jezírku", text: "Archeologové našli v jezírku kosti zvířat - kráter byl zřejmě posvátným místem." }
      ]
    }
  },
  {
    id: "borgvattnet-vicarage",
    patch: {
      nazev: "Fara Borgvattnet",
      lead: "„Nejstrašidelnější dům Švédska“ v odlehlé vesnici v Jämtlandu - kdo tu přespí, dostane diplom.",
      atmosfera: 4.4,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "ubytování, sezónně",
      popisy: {
        zahada: "Žlutá dřevěná fara stojí ve vesnici s několika desítkami obyvatel. Faráři a hosté tu popisovali postavy v okně, strhávané prádlo, kroky a houpací křeslo, které se hýbe samo.",
        historie: "Fara byla postavena v roce 1876. První známé zprávy pocházejí z roku 1927, kdy farář Nils Hedlund popsal, jak mu neviditelná síla strhla prádlo. Později farář Erik Lindgren vyprávěl, že ho houpací křeslo vyhodilo. Švédské noviny a televize učinily z fary národní symbol strašidel.",
        legenda: "Vypráví se o služce, která na faře zemřela, a o třech ženách v šedém, které se zjevují v pokoji. Hosté prý cítí, že je někdo v noci sleduje.",
        paranormalni: "Fara dnes slouží jako penzion s kavárnou. Kdo přežije noc, zapíše se do knihy a dostane certifikát.",
        skepticke: "Většina svědectví pochází z vyprávění a médií. Starý dřevěný dům v mrazu praská, vrže a vydává zvuky."
      },
      praktickeInfo: "Borgvattnet je asi 1,5 hodiny autem z Östersundu. Penzion je otevřený hlavně v létě, ubytování je nutné rezervovat předem. Veřejná doprava je velmi omezená, počítej s autem.",
      pribehy: [
        { nazev: "Strhané prádlo", text: "Farář Hedlund v roce 1927 popsal, jak neviditelná síla strhla jeho prádlo ze šňůry." },
        { nazev: "Diplom za odvahu", text: "Kdo na faře přespí celou noc, dostane certifikát - pro mnoho hostů je to výzva." }
      ]
    }
  },
  {
    id: "dunwich",
    patch: {
      nazev: "Dunwich",
      lead: "Středověký přístav v Suffolku, který spolklo moře - z velkého města zbyla jen vesnice a podle pověsti pod vlnami dodnes zvoní kostelní zvony.",
      atmosfera: 4.4,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Dunwich byl ve středověku jedním z největších měst Východní Anglie s mnoha kostely a kláštery. Bouře a eroze útesů ho postupně spláchly do moře. Na okraji útesu zůstal poslední náhrobek ze hřbitova kostela Všech svatých.",
        historie: "Ničivé bouře ve 13. a 14. století zanesly přístav a strhly velkou část města. Kostel Všech svatých se do moře zřítil postupně v letech 1904-1919. Dnes zbývají zříceniny kláštera Greyfriars a malé muzeum s modelem původního města.",
        legenda: "Podle pověsti je za bouřlivých nocí slyšet zvony potopených kostelů pod vlnami. Na útesech se prý zjevují mniši a duch muže, který hledá svůj hrob.",
        paranormalni: "Místní a návštěvníci hlásí zvonění, světla na moři a postavy v klášteře Greyfriars.",
        skepticke: "Zvuky lze vysvětlit větrem, vlnami a zvony vzdálených kostelů. Skutečným příběhem je eroze, která odnesla celé město."
      },
      praktickeInfo: "Dunwich je na pobřeží Suffolku, asi 6 km od Southwoldu. Je tu parkoviště, kavárna na pláži a muzeum. Kombinuj s přírodní rezervací Dunwich Heath a s Southwoldem. Na útesy nechoď blízko okraje - stále se drolí.",
      pribehy: [
        { nazev: "Zvony pod mořem", text: "Za bouře prý zvoní zvony potopených kostelů hluboko pod vlnami." },
        { nazev: "Poslední hrob", text: "Na okraji útesu zůstal jediný náhrobek z hřbitova, který jinak zmizel v moři." }
      ]
    }
  },
  {
    id: "teufelsberg",
    patch: {
      nazev: "Teufelsberg",
      lead: "„Ďáblova hora“ v Berlíně, navršená z válečných trosek nad nedokončenou nacistickou školou - na vrcholu stojí opuštěná odposlechová stanice NSA z doby studené války.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "střední",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Kopec v lese Grunewald je umělý - tvoří ho trosky zbořeného Berlína. Pod nimi je pohřbena nedokončená vojenská technická fakulta, kterou navrhl Albert Speer. Na vrcholu stojí bílé radarové kopule bývalé americko-britské odposlechové stanice.",
        historie: "Po válce se sem navážely trosky z bombardovaného Berlína. Stavba fakulty byla tak pevná, že ji nešlo zbourat, a tak ji zasypali. Během studené války tu Američané a Britové odposlouchávali komunikaci východního bloku. Po roce 1991 byla stanice opuštěna a dnes je z ní galerie graffiti.",
        legenda: "Vypráví se o tajných tunelech pod horou, o tom, co NSA skutečně slyšela, a o zvláštních zvucích uvnitř kopulí.",
        paranormalni: "Uvnitř největší kopule je neobvyklá akustika - každý zvuk se mnohonásobně odráží. Návštěvníci to popisují jako mrazivý zážitek.",
        skepticke: "Ozvěna je fyzikální jev kulového prostoru. Tajné tunely nejsou doloženy."
      },
      praktickeInfo: "Teufelsberg je v západním Berlíně, od stanice S-Bahn Heerstraße je to asi 30 minut pěšky lesem. Vstup na stanici je placený. Nahoře je výhled na celý Berlín. Pozor na rozbité sklo a nezabezpečené části budov.",
      pribehy: [
        { nazev: "Škola pod horou", text: "Nacistickou školu nešlo zbourat, a tak ji zasypali troskami celého města." },
        { nazev: "Uši studené války", text: "Z kopulí na vrcholu Západ desítky let naslouchal komunikaci východního bloku." }
      ]
    }
  },
  {
    id: "hochosterwitz-castle",
    patch: {
      nazev: "Hrad Hochosterwitz",
      lead: "Hrad na osamělé skále v Korutanech, ke kterému vede cesta přes 14 bran - podle pověsti ho obránci zachránili tak, že obléhatelům hodili svého posledního býka.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Hrad korunuje vápencovou skálu, která se zvedá z roviny. Cesta k němu vede 14 branami, z nichž každá měla vlastní obranný systém. Z dálky vypadá jako hrad z pohádky.",
        historie: "Hrad získal v roce 1571 rod Khevenhüllerů, kterému patří dodnes. Georg Khevenhüller ho v letech 1570-1586 přestavěl na nedobytnou pevnost proti Osmanům a postavil většinu bran.",
        legenda: "Podle pověsti hrad v roce 1334 obléhala tyrolská hraběnka Markéta Pyskatá. Když obráncům docházely zásoby, hodili jí přes hradby posledního býka nacpaného obilím. Hraběnka usoudila, že hrad má zásob dost, a odtáhla.",
        paranormalni: "S hradem se nepojí četná hlášení duchů. Jeho síla je v legendách a dramatické poloze.",
        skepticke: "Pověst o býkovi se vypráví i o jiných hradech a nelze ji historicky doložit."
      },
      praktickeInfo: "Hochosterwitz je u města Sankt Veit an der Glan, asi 20 km od Klagenfurtu. Pěšky po cestě přes brány je to asi 30 minut, existuje i výtah. Hrad je otevřen od dubna do října.",
      pribehy: [
        { nazev: "Býk přes hradby", text: "Obránci prý hodili posledního býka nepříteli, aby předstírali hojnost - a obléhání skončilo." },
        { nazev: "Čtrnáct bran", text: "Každá ze 14 bran měla vlastní obranný mechanismus, takže útočník musel dobýt jednu po druhé." }
      ]
    }
  },
  {
    id: "burg-kreuzenstein",
    patch: {
      nazev: "Hrad Kreuzenstein",
      lead: "Romantický hrad u Vídně, postavený na troskách středověké pevnosti z kusů jiných hradů a kostelů z celé Evropy - sběratelský sen hraběte Wilczka.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup s průvodcem",
      popisy: {
        zahada: "Kreuzenstein vypadá jako dokonalý středověký hrad, ale je z velké části postaven v 19. století. Jeho stavitel do něj vložil autentické části staveb, nábytek a sbírky zbraní z mnoha zemí.",
        historie: "Původní hrad zničili Švédové v roce 1645 během třicetileté války. V letech 1874-1906 ho hrabě Johann Nepomuk Wilczek obnovil jako romantický hrad. Do stavby začlenil mimo jiné tzv. Košickou chodbu z Košic.",
        legenda: "Vypráví se o duchu, který se zjevuje v hradní kapli, a o pokladu ze středověké pevnosti, který nikdy nebyl nalezen.",
        paranormalni: "Hosté popisují spíše silnou atmosféru tmavých sálů s brněním a loveckými trofejemi.",
        skepticke: "Hrad je historická koláž 19. století. Pověsti jsou součástí jeho romantického kouzla."
      },
      praktickeInfo: "Kreuzenstein je u obce Leobendorf, asi 25 km severně od Vídně. Dojedeš vlakem S-Bahn do Leobendorfu a pak pěšky nahoru (asi 30 minut). Prohlídky jsou jen s průvodcem. Pod hradem je sokolnické představení.",
      pribehy: [
        { nazev: "Hrad z kousků", text: "Hrabě Wilczek skládal hrad z autentických částí staveb, které skupoval po celé Evropě." },
        { nazev: "Košická chodba", text: "Část hradu tvoří chodba přenesená z Košic na Slovensku." }
      ]
    }
  },
  {
    id: "chateau-de-gruyeres",
    patch: {
      nazev: "Zámek Gruyères",
      lead: "Středověký zámek nad švýcarským městečkem sýrů - a hned vedle muzeum H. R. Gigera, autora vetřelce z filmu Vetřelec.",
      atmosfera: 4.5,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Nad pohádkovým městečkem stojí zámek hrabat z Gruyères. O pár kroků dál je zámek St. Germain s muzeem švýcarského výtvarníka H. R. Gigera, jehož biomechanické bytosti vytvořily monstrum z filmu Vetřelec. Naproti je Giger Bar s kostrovitým interiérem.",
        historie: "Zámek patřil hrabatům z Gruyères od 11. do 16. století. Poslední hrabě Michel zbankrotoval a území si rozdělila Fribourg a Bern. V 19. století zámek koupily rodiny Bovy a Balland, které sem zvaly malíře, například Corota. Giger koupil zámek St. Germain v roce 1997.",
        legenda: "Pověsti vyprávějí o šašku Chalamalovi, který žertoval u hraběcího dvora, a o jeřábu, který je ve znaku Gruyères.",
        paranormalni: "Gigerovo muzeum s temnými obrazy vytváří silnou až znepokojivou atmosféru. Doložené paranormální jevy chybí.",
        skepticke: "Pověsti jsou součástí místního folkloru. Tajemno místa tvoří hlavně Gigerovo umění."
      },
      praktickeInfo: "Gruyères je asi 1 hodinu vlakem z Bernu nebo Lausanne, ze stanice je to 15 minut pěšky nahoru. Městečko je bez aut. Kombinuj s ochutnávkou sýra v La Maison du Gruyère u nádraží.",
      pribehy: [
        { nazev: "Vetřelec v zámku", text: "Autor Vetřelce H. R. Giger si vybral pro své muzeum středověký zámek v Gruyères." },
        { nazev: "Šašek Chalamala", text: "Dvorní šašek hrabat je postavou místních pověstí a slavností." }
      ]
    }
  },
  {
    id: "trencin-castle",
    patch: {
      nazev: "Trenčínský hrad",
      lead: "Hrad nad Váhem spojený s Matúšem Čákem Trenčianským, římským nápisem z roku 179 a pověstí o Studni lásky, kterou kopal zajatý Turek pro svou milou.",
      atmosfera: 4.5,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Hrad stojí na skále nad městem. Na skále pod ním je římský nápis z roku 179, který připomíná vítězství římských legií u Laugaricia - nejsevernější doklad přítomnosti římské armády ve střední Evropě.",
        historie: "Hrad dosáhl největší slávy na přelomu 13. a 14. století za Matúše Čáka Trenčianského, který ovládal velkou část dnešního Slovenska. V roce 1790 hrad poškodil velký požár a byl opuštěn. Dnes je částečně obnovený a slouží jako muzeum.",
        legenda: "Podle pověsti Turek Omar kopal tři roky studnu ve skále, aby vysvobodil svou milou Fatimu ze zajetí. Když narazil na vodu a pán hradu Fatimu propustil, Omar mu prý řekl: „Máš vodu, ale nemáš srdce.“ Studna se jmenuje Studňa lásky.",
        paranormalni: "Na hradě se konají noční prohlídky s pověstmi o Bílé paní a duchu Matúše Čáka.",
        skepticke: "Studna byla vykopána ve skutečnosti postupně a pověst o Omarovi je pozdější romantický příběh. Římský nápis je ale autentický."
      },
      praktickeInfo: "Trenčín je asi 1,5 hodiny vlakem z Bratislavy. Z centra vede ke hradu strmá cesta (15 minut). Římský nápis je vidět z hotelu Elizabeth nebo se k němu dá dostat se speciální prohlídkou. V létě se na hradě konají historické slavnosti.",
      pribehy: [
        { nazev: "Studna lásky", text: "Turek Omar prý tři roky kopal studnu, aby vysvobodil milovanou Fatimu." },
        { nazev: "Římané na Slovensku", text: "Nápis na skále připomíná zimování římských legií v roce 179." }
      ]
    }
  },
  {
    id: "devin-castle",
    patch: {
      nazev: "Hrad Devín",
      lead: "Zřícenina na skále nad soutokem Moravy a Dunaje u Bratislavy - velkomoravská pevnost, Panenská věž s pověstí o nešťastné lásce a památník obětem železné opony.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Na samém okraji skály stojí štíhlá Panenská věž, která jako by se vznášela nad řekou. Z hradu je vidět do Rakouska a hluboko do Podunajska.",
        historie: "Místo bylo osídleno už v pravěku a Římané tu měli vojenskou stanici. Za Velké Moravy zde stála pevnost Dowina, kterou v roce 864 obléhal Ludvík Němec. Hrad v roce 1809 vyhodila do povětří napoleonská vojska. Za komunismu ležel v pohraničním pásmu železné opony. Pod hradem je památník Brána svobody obětem, které zemřely při pokusu o útěk.",
        legenda: "Podle pověsti byla v Panenské věži zavřena dívka, která milovala chudého mladíka. Když ji chtěli odvést, skočila s ním ze skály do řeky.",
        paranormalni: "Někteří návštěvníci vidí za mlhavých večerů na věži postavu ženy. Na hradě se konají noční prohlídky.",
        skepticke: "Pověst o dívce je romantická lidová tradice, nikoli historický fakt."
      },
      praktickeInfo: "Devín je asi 25 minut autobusem č. 29 z Mostu SNP v Bratislavě. Hrad je otevřen většinu roku. Z Devína vede po proudu Dunaje cyklostezka. Kombinuj s Bránou svobody a pěším výletem na Devínskou Kobylu.",
      pribehy: [
        { nazev: "Skok z Panenské věže", text: "Zamilovaná dívka prý raději skočila do řeky, než by se vzdala své lásky." },
        { nazev: "Brána svobody", text: "Pod hradem stojí památník lidem, kteří zemřeli při pokusu překonat železnou oponu." }
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
