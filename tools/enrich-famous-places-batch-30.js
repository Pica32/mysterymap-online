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
    id: "swayambhunath",
    patch: {
      lead: "Chrám na kopci, který podle legendy vznikl na místě jezera vysušeného mečem bódhisattvy Maňdžušího - dnes hlídaný toulavými rodinami opic.",
      atmosfera: 4.0,
      popisy: {
        zahada: "Nad údolím Káthmándú se zvedá kopec s buddhistickou stúpou, přezdívaný 'opičí chrám' podle rodin toulavých opic, které ho obývají - jeho oči na všechny čtyři světové strany patří mezi nejrozpoznatelnější symboly Nepálu.",
        historie: "Místo navštívil ve 3. století př. n. l. císař Ašóka se svou rodinou, která zde nechala postavit chrámy. Vládci dynastie Ličhaviů stavby rozšířili, středověké renovace proběhly pod vedením postav jako Šáriputra v 15. století a Cangnjön Heruka roku 1504. Král Pratap Malla postavil východní schodiště v 17. století. Zemětřesení v Nepálu roku 2015 komplex poškodilo, velká renovace s použitím 20 kg zlata byla dokončena roku 2010.",
        legenda: "Podle Svajambhu Purány bylo údolí Káthmándú kdysi jezerem, do něhož Buddha Vipassí zasadil semínko lotosu, jenž vyrostl v tisícilistý květ vyzařující věčné zářivé světlo s Pěti velkými Buddhy zjevujícími se na paprscích různých barev. Buddha Maňdžuší později vysušil jezero, když mečem prosekl hory, čímž umožnil lidem dosáhnout a uctívat toto samovzniklé světlo.",
        paranormalni: "Stúpa má polokulovitou kopuli s krychlovou strukturou nahoře, pomalovanou 'Buddhovýma očima' hledícíma na všechny čtyři světové strany. Pozlacené bronzové prstence představují třináct stupňů před dosažením nirvány.",
        skepticke: "Legenda o vysušení jezera Maňdžušího mečem je tradiční buddhistický mýtus o stvoření, ne geologický popis - geologicky je ovšem prokázáno, že údolí Káthmándú bylo skutečně kdysi jezerem, což dodává legendě zajímavý, byť nezáměrný, symbolický odraz reálné geologické historie regionu."
      },
      praktickeInfo: "Vrchol je přístupný po 365 schodech nebo po přístupové silnici, doporučuje se dávat pozor na osobní věci kvůli přítomnosti opic.",
      zdroje: [
        { nazev: "Wikipedia: Swayambhunath", url: "https://en.wikipedia.org/wiki/Swayambhunath", licence: "CC BY-SA" },
        { nazev: "Wikidata: Swayambhunath", url: "https://www.wikidata.org/wiki/Q12946982", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Swayambhunath%20Kathmandu", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Jezero vysušené mečem", text: "Podle legendy bódhisattva Maňdžuší vysušil jezero v údolí Káthmándú prosekáním hor mečem, aby lidé mohli dosáhnout samovzniklého světla lotosového květu." },
        { nazev: "Chrám hlídaný opicemi", text: "Kopec obývají rodiny toulavých opic, díky nimž si stúpa vysloužila přezdívku 'opičí chrám' mezi návštěvníky z celého světa." }
      ]
    }
  },
  {
    id: "derawar-fort",
    patch: {
      lead: "Čtyřicet kruhových bašt vysokých 30 metrů, viditelných z pouště na míle daleko - pevnost, kterou lze spatřit dřív, než k ní člověk vůbec dorazí.",
      atmosfera: 3.9,
      popisy: {
        zahada: "V poušti Čolistán stojí impozantní čtvercová cihlová pevnost, jejíchž čtyřicet kruhových bašt - deset na každé straně - je vidět z okolní pouště na míle daleko, dávno předtím, než k ní poutník dorazí.",
        historie: "Pevnost původně postavil roku 858 n. l. hinduistický rádžputský vládce Rai Jadždža Bhátí z klanu Bhátí. Zpočátku byla známa jako 'Dera Rawal', později 'Dera Rawar', z čehož se postupem času vyvinulo dnešní jméno Derawar. V 18. století převzali kontrolu muslimští nawábové z bahávalpurského kmene Šahotra, velkou renovaci provedl roku 1732 nawáb Sádik Muhammad Chán Abbásí. Později pevnost obsadili Britové a využívali ji jako vězení.",
        legenda: "Archeologické důkazy naznačují, že poušť Čolistán kdysi hostila osady civilizace údolí Indu. Pevnost sloužila jako klíčový bod na obchodních trasách střední Asie směřujících na indický subkontinent a fungovala i jako poutní zastávka na cestě do Mekky.",
        paranormalni: "Hradby o obvodu 1500 metrů dosahují výšky až 30 metrů, každá ze čtyřiceti bašt nese propracované cihlové vzory. Pod pevností se táhne podzemní chodba se sofistikovaným pasivním větracím systémem spolu s podzemními ubikacemi.",
        skepticke: "Spojení s civilizací údolí Indu je založeno na archeologických nálezech v širším regionu pouště Čolistán, ne přímo pod samotnou pevností - historie stavby samotné od roku 858 n. l. přes rádžputské, muslimské i britské období je ale dobře doložena písemnými prameny a stavebními fázemi."
      },
      praktickeInfo: "Pevnost leží asi 20 km jižně od Ahmadpur East a je veřejně přístupná, doporučuje se navštívit i nedaleké královské hrobky Abbásíovců.",
      zdroje: [
        { nazev: "Wikipedia: Derawar Fort", url: "https://en.wikipedia.org/wiki/Derawar_Fort", licence: "CC BY-SA" },
        { nazev: "Wikidata: Derawar Fort", url: "https://www.wikidata.org/wiki/Q2474542", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Derawar%20Fort%20Pakistan", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Vidět na míle daleko", text: "Čtyřicet kruhových bašt vysokých 30 metrů je vidět z okolní pouště Čolistán na míle daleko, dávno předtím, než poutník k pevnosti vůbec dorazí." },
        { nazev: "Vězení uprostřed pouště", text: "Britové později využívali pevnost jako vězeňské zařízení, čímž přidali další kapitolu k tisícileté historii stavby postavené rádžputským vládcem." }
      ]
    }
  },
  {
    id: "shakhrisabz",
    patch: {
      lead: "Rodiště Tamerlána, který chtěl město udělat svým věčným odpočinkem - osud ho nakonec zavedl do hrobky v Samarkandu místo.",
      atmosfera: 4.0,
      popisy: {
        zahada: "V Uzbekistánu leží jedno z nejstarších měst střední Asie, založené před více než 2700 lety pod jménem Keš neboli Kiš ('potěšení srdce') - rodiště jednoho z nejobávanějších dobyvatelů dějin.",
        historie: "Město bylo součástí Achaimenovské říše a zůstalo významným městským centrem Sogdiany napříč tureckým, arabským i karachanidským obdobím. Právě zde se mezi koncem 20. a rokem 1336 narodil Timur (Tamerlán), syn náčelníka konfederace Barlasů.",
        legenda: "Timur považoval Keš za svoje 'rodné město' a plánoval, že se právě zde nakonec stane místem jeho hrobky - nakonec byl ale pohřben v Samarkandu. Nejgrandióznější z jeho staveb, palác Ak-Saraj, začal vznikat roku 1380. Dodnes se dochovaly jen části jeho obřích 65metrových vstupních věží zdobených modrými, bílými a zlatými mozaikami, nesoucími nápis: 'Pokud zpochybňuješ naši moc - podívej se na naše stavby!'",
        paranormalni: "Nápis na bráně Ak-Saraje představuje jeden z nejvýmluvnějších dokladů imperiální sebeprezentace ve středověké architektuře - přímou výzvu adresovanou budoucím generacím, aby posoudily moc vládce podle velikosti jeho staveb.",
        skepticke: "Zničení rozsáhlých částí středověké městské zástavby roku 2015 kvůli vybudování parku a turistické infrastruktury je dobře zdokumentovaný, ne přehnaně líčený problém - vyvolalo to vážné obavy UNESCO o možné vyřazení historického centra ze seznamu světového dědictví, kam bylo zapsáno roku 2000."
      },
      praktickeInfo: "Město je snadno dostupné ze Samarkandu, hlavní atrakcí jsou zbytky vstupních věží paláce Ak-Saraj a mauzoleum Dorut Tilavat.",
      zdroje: [
        { nazev: "Wikipedia: Shahrisabz", url: "https://en.wikipedia.org/wiki/Shakhrisabz", licence: "CC BY-SA" },
        { nazev: "Wikidata: Shahrisabz", url: "https://www.wikidata.org/wiki/Q569766", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Shakhrisabz%20Uzbekistan", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Hrobka, která nikdy nebyla použita", text: "Timur plánoval udělat ze svého rodného města místo svého věčného odpočinku, nakonec byl ale pohřben v Samarkandu." },
        { nazev: "Nápis vyzývající k obdivu moci", text: "Vstupní brána paláce Ak-Saraj nese nápis vyzývající každého pochybovače, aby posoudil vládcovu moc podle velikosti jeho staveb." }
      ]
    }
  },
  {
    id: "bukhara-ark",
    patch: {
      lead: "Pevnost, kterou dobyl sám Čingischán - a odkud později emír nechal popravit dva britské důstojníky obviněné ze špionáže.",
      atmosfera: 3.9,
      popisy: {
        zahada: "V srdci starobylé Buchary stojí pevnost datovaná do 5. století n. l., jejíž dnešní podoba se formovala v 16. století za dynastie Šajbánovců - sídlo vládců i vojenská bašta, která sloužila až do sovětské éry.",
        historie: "Pevnost padla vojskům Čingischána, jenž nechal obránce rozdrtit a pevnost vyplenit. Sloužila jako vojenská pevnost a královské sídlo až do roku 1920, kdy padla ruským silám. Během ruské občanské války roku 1920 Rudá armáda pod velením Michaila Frunzeho pevnost těžce poškodila leteckým bombardováním - poslední emír možná nařídil demolici, aby zabránil bolševické okupaci posvátných prostor.",
        legenda: "V areálu poblíž Arku se nacházel proslulý vězeňský 'zindán', kde byli roku 1842 na příkaz emíra Nasrulláha popraveni britští důstojníci Charles Stoddart a Arthur Conolly, obvinění ze špionáže ve prospěch Britského impéria - epizoda dobře zdokumentovaná v dobových pramenech jako Wolffovo vyprávění o misi do Buchary z roku 1845.",
        paranormalni: "Pevnost dnes zabírá plochu 3,96 hektaru s hradbami vysokými 16 až 20 metrů a funguje jako turistická atrakce s několika muzei uvnitř svých zdí.",
        skepticke: "Poprava britských důstojníků je historicky doložená událost potvrzená více nezávislými dobovými prameny, ne legenda - přesné podmínky jejich věznění v proslulé 'jámě s hmyzem' jsou popsány hlavně v dobových vyprávěních jako Wolffova zpráva, což znamená, že detaily jejich utrpení pocházejí z historických líčení, ne z archeologického průzkumu samotné cely."
      },
      praktickeInfo: "Pevnost je veřejně přístupná s placeným vstupem, uvnitř areálu se nachází několik muzeí věnovaných historii Buchary.",
      zdroje: [
        { nazev: "Wikipedia: Ark of Bukhara", url: "https://en.wikipedia.org/wiki/Ark_of_Bukhara", licence: "CC BY-SA" },
        { nazev: "Wikipedia: Charles Stoddart", url: "https://en.wikipedia.org/wiki/Charles_Stoddart", licence: "CC BY-SA" },
        { nazev: "Wikidata: Ark of Bukhara", url: "https://www.wikidata.org/wiki/Q4069358", licence: "CC0" }
      ],
      pribehy: [
        { nazev: "Poprava britských špionů", text: "Roku 1842 nechal emír Nasrulláh popravit britské důstojníky Charlese Stoddarta a Arthura Conollyho, obviněné ze špionáže ve prospěch Britského impéria." },
        { nazev: "Pevnost dobytá Čingischánem", text: "Ark padl vojskům Čingischána, který nechal obránce rozdrtit a pevnost vyplenit - jedna z mnoha kapitol dobyvatelské historie tohoto místa." }
      ]
    }
  },
  {
    id: "nisa",
    patch: {
      lead: "První sídlo Parthské říše, zničené zemětřesením - jehož poklad slonovinových rohů na pití dodnes patří k nejobdivovanějším nálezům střední Asie.",
      atmosfera: 3.7,
      popisy: {
        zahada: "Asi 18 kilometrů od Ašchabatu leží ruiny starověkého parthského sídla, které někteří badatelé označují za první sídlo Arsakovské říše, tradičně založené Arsakem I. kolem let 250-211 př. n. l.",
        historie: "Mithridatés I. Parthský (asi 171-138 př. n. l.) město přejmenoval na Mithradátkert. Nisa byla zcela zničena zemětřesením v první dekádě před naším letopočtem.",
        legenda: "Region se proslavil krásou, hbitostí a silou svých koní, díky čemuž se Nisa stala významným obchodním uzlem Parthské říše.",
        paranormalni: "Vykopávky odhalily rozsáhlé stavby, mauzolea a svatyně, četné popsané dokumenty a vyloupenou pokladnici. Mezi nejvýznamnější nálezy patří velké množství slonovinových rytonů (rohů na pití) a ozdobné mince zobrazující íránské motivy nebo scény z klasické mytologie.",
        skepticke: "Zničení zemětřesením je geologicky a archeologicky doložená událost datovaná do první dekády př. n. l., ne pouhá legenda - přesné datum založení města Arsakem I. zůstává o něco méně jisté, založené na tradičních historických pramenech spíše než na jednoznačném archeologickém důkazu prvního osídlení."
      },
      praktickeInfo: "Naleziště 'Parthské pevnosti Nisa' je veřejně přístupné nedaleko Ašchabatu a je zapsáno na seznamu UNESCO od roku 2007.",
      zdroje: [
        { nazev: "Wikipedia: Nisa, Turkmenistan", url: "https://en.wikipedia.org/wiki/Nisa,_Turkmenistan", licence: "CC BY-SA" },
        { nazev: "Wikidata: Nisa", url: "https://www.wikidata.org/wiki/Q854672", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Nisa%20Turkmenistan", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Poklad slonovinových rohů", text: "Vykopávky v Nise odhalily velké množství slonovinových rytonů (rohů na pití), dnes patřících mezi nejobdivovanější archeologické nálezy Parthské říše." },
        { nazev: "Město zničené zemětřesením", text: "Nisa byla zcela zničena zemětřesením v první dekádě před naším letopočtem, po čemž její význam jako parthského centra postupně vyprchal." }
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
