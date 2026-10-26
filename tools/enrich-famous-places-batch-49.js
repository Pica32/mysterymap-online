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
    id: "butrint",
    patch: {
      nazev: "Butrint",
      lead: "Antické město na jihu Albánie obklopené lagunou a lesem - podle Vergilia ho založili uprchlíci z Tróje a vrstvy řecké, římské, byzantské i benátské historie tu leží na jednom místě.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Butrint leží na poloostrově obklopeném jezerem Butrint a kanálem Vivari. V lese se skrývá divadlo, Asklépiova svatyně, raně křesťanská baptisterie s mozaikovou podlahou a Lví brána. Kvůli vysoké hladině vody jsou části města napůl zatopené.",
        historie: "Město založili Řekové a v římské době se rozrostlo jako kolonie. Následovala byzantská, benátská a osmanská etapa, než bylo město opuštěno kvůli bažinám a malárii. Na seznamu UNESCO je od roku 1992.",
        legenda: "Podle Vergiliovy Aeneidy město založil Helenos, syn trojského krále Priama, a Aeneas ho tu na své cestě navštívil. Římané tento mýtus rádi připomínali jako důkaz vznešeného původu.",
        paranormalni: "Paranormální hlášení jsou vzácná. Návštěvníci mluví spíše o zvláštním tichu lesa, žabím kvákání v zatopeném divadle a pocitu, že se ocitli v jiném čase.",
        skepticke: "Trojský původ je literární mýtus. Archeologie ukazuje řecké osídlení, nikoli uprchlíky z Tróje."
      },
      praktickeInfo: "Butrint je asi 20 km jižně od Sarandy, jezdí sem místní autobus. Na prohlídku počítej se 2-3 hodinami. Vezmi repelent - u laguny je hodně komárů. Mozaika baptisterie je většinou zakrytá pískem kvůli ochraně. Ze Sarandy je dostupný i trajekt z Korfu.",
      pribehy: [
        { nazev: "Trojané v Albánii", text: "Podle Vergilia tu Aeneas na své pouti potkal Helena a Andromaché, kteří zde založili malou Tróju." },
        { nazev: "Žáby v divadle", text: "Antické divadlo je částečně zatopené a v jeho orchestře dnes žijí želvy a žáby." }
      ]
    }
  },
  {
    id: "gjirokaster-castle",
    patch: {
      nazev: "Hrad Gjirokastër",
      lead: "Mohutná pevnost nad „kamenným městem“ jižní Albánie - s vězením, americkým letadlem z doby studené války a pověstí o princezně Argjiro.",
      atmosfera: 4.5,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Hrad se tyčí nad městem s domy krytými kamennými deskami. Uvnitř jsou dlouhé klenuté chodby, muzeum zbraní a americké vojenské letadlo, které v roce 1957 nouzově přistálo v Albánii a komunistický režim ho vystavoval jako ukořistěné špionážní letadlo.",
        historie: "Pevnost vznikla nejpozději ve 12. století a rozšiřovali ji Osmané, zejména Ali Paša z Tepeleny v 19. století. Za krále Zoga a později za komunistů sloužila jako vězení. Město je rodištěm diktátora Envera Hodži i spisovatele Ismaila Kadareho. Historické centrum je na seznamu UNESCO od roku 2005.",
        legenda: "Podle pověsti nese město jméno princezny Argjiro, která raději skočila i se synem z hradeb, než by se vzdala Osmanům.",
        paranormalni: "V bývalých celách vězení prý někteří návštěvníci cítí tíseň a chlad. Pod městem je i protiatomový kryt z doby studené války, otevřený pro prohlídky.",
        skepticke: "Pověst o Argjiro je pozdější lidová etymologie. Pocity v celách odpovídají spíše znalosti krutých dějin vězení."
      },
      praktickeInfo: "Gjirokastër je asi hodinu autem od Sarandy a 3,5 hodiny od Tirany. Z centra ke hradu vede strmá kamenná ulice. Kombinuj s muzeem Kadareho domu a krytem ze studené války. Některé roky se na hradě koná Národní folklorní festival.",
      pribehy: [
        { nazev: "Letadlo na hradě", text: "Americké letadlo, které v roce 1957 nouzově přistálo, vystavoval komunistický režim jako trofej." },
        { nazev: "Skok princezny", text: "Princezna Argjiro prý raději skočila z hradeb, než by padla do zajetí." }
      ]
    }
  },
  {
    id: "rozafa-castle",
    patch: {
      nazev: "Hrad Rozafa",
      lead: "Pevnost nad Skadarským jezerem v Shkodëru s jednou z nejsilnějších balkánských pověstí - o ženě zazděné do hradeb, která prosila, aby mohla dál kojit své dítě.",
      atmosfera: 4.5,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Hrad stojí na skalnatém návrší nad soutokem řek Buna a Drin a Skadarským jezerem. U vstupu je kámen, ze kterého prosakuje vápenitá voda - místní ji nazývají Rozafiným mlékem.",
        historie: "Návrší bylo opevněno už Ilyry. Dnešní hradby jsou z velké části benátské. V letech 1478-1479 hrad odolával dlouhému osmanskému obléhání, než byl předán Osmanům. Od té doby zde vládli místní pašové.",
        legenda: "Tři bratři stavěli hrad, ale co postavili za den, v noci se zbořilo. Moudrý stařec jim poradil zazdít do hradeb ženu, která jim druhý den přinese oběd. Byla to Rozafa, žena nejmladšího. Souhlasila, ale prosila, aby jí nechali volný prs, oko, ruku a nohu, aby mohla kojit, vidět, hladit a kolébat své dítě.",
        paranormalni: "Kojící matky sem dodnes chodí a potírají se vodou ze „zdi Rozafy“ v naději, že budou mít dost mléka.",
        skepticke: "Motiv ženy zazděné do stavby se objevuje v mnoha balkánských pověstech. Bílá voda je vápenec rozpuštěný v prosakující vodě."
      },
      praktickeInfo: "Hrad je asi 2 km od centra Shkodëru, pěšky nahoru je to 20-30 minut. Ze Shkodëru je to 2 hodiny autem do Tirany a 30 minut na hranici s Černou Horou. Nejkrásnější je výhled při západu slunce nad jezerem. V hradě je malé muzeum.",
      pribehy: [
        { nazev: "Mléko Rozafy", text: "Ze zdi u vchodu prosakuje bílá voda, kterou místní nazývají mlékem zazděné matky." },
        { nazev: "Tři bratři", text: "Jen nejmladší bratr dodržel slib a nevaroval svou ženu - a proto zemřela právě ona." }
      ]
    }
  },
  {
    id: "ostrog-monastery",
    patch: {
      nazev: "Klášter Ostrog",
      lead: "Bílý klášter vestavěný do kolmé skalní stěny v Černé Hoře - nejvýznamnější poutní místo pravoslavného Balkánu, kam přicházejí věřící všech vyznání.",
      atmosfera: 4.8,
      paranormalniAktivita: "zázraky",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "zdarma",
      popisy: {
        zahada: "Horní klášter je přilepený k útesu asi 900 metrů nad mořem. V jeskynních kaplích leží ostatky svatého Basila Ostrožského. Poutníci tvrdí, že u nich došlo k zázračnému uzdravení.",
        historie: "Klášter založil v 17. století biskup Vasilije (svatý Basil Ostrožský), který zde žil a zemřel. Horní klášter s jeskynními kaplemi je ze 17. století, dnešní fasáda je z 20. let 20. století po požáru.",
        legenda: "Vypráví se, že za druhé světové války dopadl ke klášteru granát, který nevybuchl. Poutníci věří, že ostatky svatého chrání klášter i ty, kdo se k němu modlí.",
        paranormalni: "Klášter navštěvují pravoslavní, katolíci i muslimové. Mnozí poutníci zde přespávají na terase a modlí se za uzdravení.",
        skepticke: "Uzdravení nejsou lékařsky doložena. Síla místa je v jeho víře a dechberoucí poloze."
      },
      praktickeInfo: "Ostrog je asi 50 km od Podgorice a 20 km od Nikšiće. Silnice k Hornímu klášteru je úzká a strmá. Vstup je zdarma, vyžaduje se ale slušné oblečení (zakrytá ramena a kolena, ženy sukně). Mnoho poutníků jde pěšky z Dolního kláštera (asi 30 minut).",
      pribehy: [
        { nazev: "Granát, který nevybuchl", text: "Podle vyprávění dopadl za války ke klášteru granát a nevybuchl - věřící v tom vidí ochranu svatého." },
        { nazev: "Všechna vyznání", text: "K ostatkům svatého Basila chodí pravoslavní, katolíci i muslimové z celého Balkánu." }
      ]
    }
  },
  {
    id: "lovcen-mausoleum",
    patch: {
      nazev: "Njegošovo mauzoleum na Lovćenu",
      lead: "Hrobka básníka a vladyky Petra II. Petroviće-Njegoše na vrcholu Jezerski vrh ve výšce 1 657 m - po 461 schodech tunelem k výhledu na „Černou horu“.",
      atmosfera: 4.7,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "K mauzoleu vede 461 schodů, z velké části tunelem ve skále. Uvnitř střeží vstup dvě kamenné karyatidy a pod orlem sedí žulová socha Njegoše. Za jasného dne je vidět skoro celá Černá Hora i Kotorská zátoka.",
        historie: "Njegoš byl vladykou (knížetem-biskupem) a autorem eposu Horský věnec (1847). Přál si být pohřben na vrcholu Lovćenu. Původní kaple byla poškozena za první světové války. Dnešní mauzoleum navrhl sochař Ivan Meštrović a bylo dokončeno v roce 1974.",
        legenda: "Lidé věří, že Lovćen je posvátná hora Černohorců a že jeho tmavé lesy daly zemi jméno. Njegoš prý chtěl odpočívat tam, odkud uvidí celou svou zemi.",
        paranormalni: "Paranormální jevy nejsou běžně hlášeny. Návštěvníci popisují spíše silný dojem z místa mezi mraky.",
        skepticke: "Původ jména Černá Hora se připisuje tmavým lesům, ale přesný původ není jistý. Mauzoleum je národní symbol, ne místo záhad."
      },
      praktickeInfo: "Lovćen je asi 20 km od Cetinje a dosažitelný po serpentinách z Kotoru. Vstup do národního parku a do mauzolea je placený. Nahoře je často vítr a mlha, vezmi si bundu. Kombinuj s Cetinje a vesnicí Njeguši (pršut a sýr).",
      pribehy: [
        { nazev: "Hrob nad mraky", text: "Njegoš chtěl odpočívat na vrcholu hory, odkud vidí celou zemi - jeho přání bylo splněno." },
        { nazev: "461 schodů", text: "K mauzoleu vede 461 schodů, z velké části tunelem vyraženým ve skále." }
      ]
    }
  },
  {
    id: "necromanteion-of-acheron",
    patch: {
      nazev: "Nekromanteion u Acherontu",
      lead: "Antická „věštírna mrtvých“ u řeky Acheron v Epiru, kde se podle Hérodota vyvolávali duchové zemřelých - a vědci se dodnes přou, zda jde opravdu o věštírnu.",
      atmosfera: 4.6,
      paranormalniAktivita: "silné pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Na pahorku nad soutokem řek Acheron a Kokytos stojí komplex s labyrintem chodeb a podzemní klenutou místností. Staří Řekové věřili, že tudy vede brána do podsvětí.",
        historie: "Hérodotos píše o věštírně mrtvých u Acherontu, kde korintský tyran Periandros vyvolal ducha své ženy Melissy. Komplex vykopával archeolog Sotirios Dakaris v letech 1958-1964 a ztotožnil ho s věštírnou.",
        legenda: "Podle Homéra Odysseus na cestě do podsvětí přišel právě k řekám Acheron a Kokytos. Poutníci prý postili, jedli zvláštní jídlo a v temných chodbách se setkávali s dušemi zemřelých.",
        paranormalni: "Návštěvníci popisují v podzemní místnosti zvláštní akustiku a pocit tísně. Místo je oblíbené mezi milovníky mýtů.",
        skepticke: "Někteří moderní archeologové soudí, že budova byla spíše opevněný helénistický statek a ne věštírna. Předpokládané „mechanismy“ pro zjevování duchů jsou sporné."
      },
      praktickeInfo: "Nekromanteion je u vesnice Mesopotamos, asi 20 km od Pargy. Prohlídka trvá asi hodinu. Kombinuj s pramenem Acherontu u vesnice Glyki, kde se můžeš brodit řekou soutěskou - podle mýtu „branou do Hádu“.",
      pribehy: [
        { nazev: "Duch Melissy", text: "Tyran Periandros podle Hérodota vyvolal ducha své ženy, aby zjistil, kde ukryla poklad." },
        { nazev: "Brána do podsvětí", text: "Řeka Acheron byla pro staré Řeky řekou, přes kterou převozník Charón převáží mrtvé." }
      ]
    }
  },
  {
    id: "akrotiri-santorini",
    patch: {
      nazev: "Akrotiri (Santorini)",
      lead: "Mínojské město pohřbené sopečnou erupcí před více než 3 500 lety - „řecké Pompeje“, kde nebyla nalezena těla, a místo spojované s mýtem o Atlantidě.",
      atmosfera: 4.6,
      paranormalniAktivita: "žádná",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Pod obrovskou střechou jsou zachovány vícepatrové domy, ulice a schodiště. Na rozdíl od Pompejí zde archeologové nenašli těla obyvatel ani mnoho cenností - zdá se, že lidé stihli uprchnout před erupcí.",
        historie: "Město zničila jedna z největších sopečných erupcí v historii lidstva, datovaná do 17. nebo 16. století př. n. l. Vykopávky zahájil v roce 1967 Spyridon Marinatos, který zde v roce 1974 zemřel a je pohřben na místě. Fresky z Akrotiri jsou v muzeích ve Fiře a v Athénách.",
        legenda: "Erupce Théry a zánik mínojské kultury bývají spojovány s Platónovým příběhem o Atlantidě, ostrově, který se ponořil do moře za jediný den.",
        paranormalni: "Místo nemá strašidelné příběhy. Tajemná je otázka, kam obyvatelé odešli.",
        skepticke: "Spojení s Atlantidou je jen hypotéza. Platónův příběh je filozofická alegorie a nezmiňuje Théru."
      },
      praktickeInfo: "Akrotiri leží na jihu Santorini, asi 15 km od Firy, jezdí sem autobus. Prohlídka trvá asi hodinu. Nedaleko je Červená pláž. Kombinuj s Muzeem prehistorické Théry ve Fiře, kde jsou originální fresky.",
      pribehy: [
        { nazev: "Město bez těl", text: "Obyvatelé Akrotiri zřejmě uprchli před erupcí - archeologové nenašli žádné oběti." },
        { nazev: "Archeolog navždy", text: "Spyridon Marinatos zemřel při vykopávkách a byl pohřben přímo v městě, které objevil." }
      ]
    }
  },
  {
    id: "monemvasia",
    patch: {
      nazev: "Monemvasia",
      lead: "Opevněné město na skalním ostrově u Peloponésu, kam vede jen jedna cesta - dolní město žije, horní je v ruinách a nad útesem stojí byzantský kostel.",
      atmosfera: 4.7,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "vynikající",
      nebezpecnost: "nízká",
      pristupnost: "volně přístupné",
      popisy: {
        zahada: "Ze strany pevniny vypadá ostrov jako holá skála - město je ukryté na jeho mořské straně. Jméno znamená „jediný vstup“. Ulice jsou tak úzké, že sem nemohou auta.",
        historie: "Město vzniklo v 6. století jako útočiště před nájezdníky. Vystřídali se tu Byzantinci, Benátčané a Osmané. Během řecké revoluce v roce 1821 bylo osvobozeno po obléhání. Horní město s kostelem Hagia Sofia je dnes v ruinách. Narodil se zde básník Jannis Ritsos.",
        legenda: "Místní vyprávějí o duchu, který v noci hlídá brány města, a o pokladu ukrytém v horním městě.",
        paranormalni: "Opuštěné horní město za šera vytváří silnou atmosféru, ale doložené jevy chybí.",
        skepticke: "Pověsti o pokladech jsou běžné v každém starém opevněném městě."
      },
      praktickeInfo: "Monemvasia je asi 4 hodiny autem z Athén. Auto nech na hrázi nebo v nové vesnici Gefyra. Do horního města vede strmá cesta (20-30 minut). V dolním městě jsou hotely v historických domech. Večer je město nejkrásnější.",
      pribehy: [
        { nazev: "Jediný vstup", text: "Jméno Monemvasia znamená jediný vstup - z pevniny vede na skálu jen úzká hráz a jedna brána." },
        { nazev: "Básník ze skály", text: "Básník Jannis Ritsos se narodil v Monemvasii a jeho dům stojí u vstupní brány dolního města." }
      ]
    }
  },
  {
    id: "cumae-sybil-cave",
    patch: {
      nazev: "Jeskyně Sibyly v Kúmách",
      lead: "Lichoběžníková chodba vytesaná do tufové skály u Neapole, kterou archeologové ztotožnili s jeskyní věštkyně Sibyly z Vergiliovy Aeneidy.",
      atmosfera: 4.6,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Chodba dlouhá přes 130 metrů má lichoběžníkový průřez a světlo do ní proniká bočními otvory. Na konci je místnost, kde podle tradice Sibyla pronášela proroctví.",
        historie: "Kúmy byly nejstarší řeckou kolonií na italské pevnině, založenou v 8. století př. n. l. Chodbu objevil v roce 1932 archeolog Amedeo Maiuri a ztotožnil ji s Vergiliovým popisem jeskyně Sibyly.",
        legenda: "Podle Vergilia sem Aeneas přišel za Sibylou, která ho provedla podsvětím - vstup byl u blízkého jezera Avernus. Jiná legenda vypráví, že Sibyla prodala římskému králi Tarquiniovi Sibyllinské knihy proroctví.",
        paranormalni: "Návštěvníci mluví o zvláštní akustice chodby a o tom, jak se hlasy ozývají. Místo dodnes přitahuje esoteriky.",
        skepticke: "Někteří archeologové soudí, že chodba měla i vojenský nebo obranný účel. Ztotožnění s Vergiliovou jeskyní není jisté."
      },
      praktickeInfo: "Kúmy jsou v oblasti Flegrejských polí asi 25 km západně od Neapole. Dojedeš vlakem Cumana do Fusara nebo autem. Archeologický park má i akropoli s chrámy. Kombinuj s Pozzuoli a jezerem Avernus.",
      pribehy: [
        { nazev: "Sibyliny knihy", text: "Sibyla prý nabídla králi devět knih proroctví, a když odmítl, spálila jich šest." },
        { nazev: "Vstup do podsvětí", text: "U nedalekého jezera Avernus byl podle Římanů vchod do podsvětí." }
      ]
    }
  },
  {
    id: "villa-palagonia",
    patch: {
      nazev: "Villa Palagonia",
      lead: "„Vila příšer“ v Bagherii u Palerma - barokní sídlo s desítkami groteskních soch obludných postav, které šokovaly i Goetha.",
      atmosfera: 4.4,
      paranormalniAktivita: "místní pověsti",
      historickaDolozenost: "velmi dobrá",
      nebezpecnost: "nízká",
      pristupnost: "placený vstup",
      popisy: {
        zahada: "Na zdech zahrady stojí desítky soch draků, trpaslíků, zvířat s lidskými tvářemi a podivných hudebníků. Uvnitř je sál se zrcadlovým stropem, který zkresluje odraz návštěvníků.",
        historie: "Vilu postavil v roce 1715 kníže z Palagonie Francesco Ferdinando Gravina. Groteskní sochy přidal v polovině 18. století jeho vnuk Ferdinando Francesco II. Gravina. Goethe ji v roce 1787 navštívil a vysmál se „palagonijskému šílenství“.",
        legenda: "Podle pověsti byl kníže znetvořený nebo jeho žena nevěrná, a sochy měly karikovat její milence. Jiná verze tvrdí, že se těhotné ženy sochám vyhýbaly ze strachu, aby neporodily znetvořené dítě.",
        paranormalni: "Zrcadlový sál a sochy vytvářejí znepokojivou atmosféru. Doložené jevy nejsou.",
        skepticke: "Pověsti o knížeti nejsou podložené. Groteskní sochy jsou součástí barokního vkusu pro bizarní."
      },
      praktickeInfo: "Bagheria je asi 15 km od Palerma, dostupná vlakem. Vstup je placený. Prohlídka trvá asi hodinu. V Bagherii je i Villa Cattolica s muzeem malíře Renata Guttusa.",
      pribehy: [
        { nazev: "Goethe a příšery", text: "Goethe navštívil vilu v roce 1787 a sochy označil za šílenství." },
        { nazev: "Zrcadlový strop", text: "Zrcadlový strop v sále knížete zkresluje odrazy návštěvníků." }
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
