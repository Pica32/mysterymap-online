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
    id: "nourlangie-rock",
    patch: {
      lead: "Skalní galerie, kde bůh blesku Namarrgon dodnes podle domorodé víry přivolává bouře - a jeho portrét namaloval umělec evropskou modří teprve v moderní době.",
      atmosfera: 4.0,
      popisy: {
        zahada: "V pískovcovém masivu národního parku Kakadu leží skalní útvar Burrungkuy, který lid Gun-djeihmi podle svého vyprávění formoval už během Doby snění - útočiště plné maleb zobrazujících předky a duchy.",
        historie: "Evropané se v okolí skály poprvé objevili kolem roku 1845 po průzkumech Ludwiga Leichhardta. Do 80. let 19. století sem dorazili lovci buvolů - jméno 'Nourlangie' vzniklo z evropského zkomolení domorodého názvu 'Nawulandja'.",
        legenda: "Přístřešky ukrývají malby zobrazující příběhy Doby snění, duchy Namandi i postavu se šesti prsty na každé ruce. Pigmenty jsou převážně žluté, bílé a červené okrové, přičemž červená okrová sloužila jako křída ke kreslení přímo na skálu. Umělec Najombolmi namaloval pozoruhodné zobrazení předka Namarrgona (Muže blesku) stylem rentgenového zobrazení s použitím evropské modři.",
        paranormalni: "Přístřešek Anbangbang byl vykopán roku 1981 a odhalil osídlení staré přes 6000 let s intenzivnějším využitím před 800 až 1200 lety. Přístřešek Nangawulurr obsahuje otisky rukou, postavy duchů Mimi a zobrazení bílé plachetnice - svědectví kontaktu s cizinci zaznamenané přímo na skále.",
        skepticke: "Malby zobrazující tasmánského tygra (thylacina), vyhynulého v regionu už přes 3500 let, jsou vědecky ověřitelným dokladem stáří umění, ne pouhou legendou - kombinace stylů Mimi a rentgenového zobrazení navíc ukazuje kontinuitu malířské tradice napříč tisíciletími až do moderní doby, kdy umělci použili i importované pigmenty jako evropskou modř."
      },
      praktickeInfo: "Skála je přístupná po vyznačené stezce s informačními tabulemi, návštěva s domorodým průvodcem umožňuje hlubší pochopení duchovního významu maleb.",
      zdroje: [
        { nazev: "Wikipedia: Nourlangie Rock", url: "https://en.wikipedia.org/wiki/Nourlangie_Rock", licence: "CC BY-SA" },
        { nazev: "Wikidata: Nourlangie Rock", url: "https://www.wikidata.org/wiki/Q239684", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Nourlangie%20Rock%20Kakadu", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Muž blesku namalovaný evropskou modří", text: "Umělec Najombolmi zobrazil předka Namarrgona, Muže blesku, stylem rentgenového zobrazení a použil při tom i dovezený evropský modrý pigment." },
        { nazev: "Vyhynulé zvíře na skále", text: "Malby tasmánského tygra, vyhynulého v regionu už přes 3500 let, dokládají neuvěřitelné stáří malířské tradice na tomto místě." }
      ]
    }
  },
  {
    id: "ubirr",
    patch: {
      lead: "Skalní galerie malovaná a přemalovávaná nepřetržitě od 40 000 let před naším letopočtem - s galerií Duhového hada, kam směly vstoupit jen ženy.",
      atmosfera: 4.2,
      popisy: {
        zahada: "Ve výběžku Východního aligátořího regionu národního parku Kakadu leží skalní útvar, jehož stěny byly nepřetržitě malovány a přemalovávány od 40 000 let před naším letopočtem - jedna z nejdéle nepřetržitě zdobených galerií na světě.",
        historie: "Většina dochovaných maleb pochází z posledních zhruba 2000 let, některé byly přemalovány až do moderní doby. Malba tasmánského tygra dokládá stáří místa - tento druh v oblasti vyhynul asi před 2000 lety.",
        legenda: "Hlavní galerie ukazuje 'rentgenové umění' zobrazující tvory s viditelnou vnitřní kosterní strukturou - ryby, plazy i savce typické pro region. Galerie také obsahuje postavy bílých figur a duchů Mimi, štíhlých mytologických bytostí, které se podle víry malovaly samy na nedostupných výškách.",
        paranormalni: "Nejduchovnějším místem je galerie Duhového hada, tradičně vyhrazená pouze ženám. Podle domorodé víry had Garranga'rreli procházel Austrálií během Doby snění a 'zpíval' do existence krajinu, tvory i lidi prostřednictvím posvátných zpěvních cest.",
        skepticke: "Nepřetržitost malování od 40 000 let před naším letopočtem je založena na vrstvení pigmentů a stylistických změnách, ne na jediném izolovaném datování - vyobrazení vyhynulého tasmánského tygra ale poskytuje nezávislý biologický důkaz vysokého stáří přinejmenším některých vrstev umění."
      },
      praktickeInfo: "Skála je přístupná asi 40 km od Jabiru po zpevněné silnici, sezónní záplavy mohou omezit přístup; výhled ze skály na záplavovou pláň při západu slunce patří k nejproslulejším v celé Austrálii.",
      zdroje: [
        { nazev: "Wikipedia: Ubirr", url: "https://en.wikipedia.org/wiki/Ubirr", licence: "CC BY-SA" },
        { nazev: "Wikidata: Ubirr", url: "https://www.wikidata.org/wiki/Q1342756", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Ubirr%20Kakadu%20Australia", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Galerie jen pro ženy", text: "Galerie Duhového hada v Ubirru byla tradičně vyhrazena pouze ženám - místo spojené s příběhem hada, který podle domorodé víry zpíval krajinu do existence." },
        { nazev: "Čtyřicet tisíc let malování", text: "Skalní stěny Ubirru byly nepřetržitě malovány a přemalovávány od 40 000 let před naším letopočtem až do moderní doby." }
      ]
    }
  },
  {
    id: "hoggar-mountains",
    patch: {
      lead: "Domov tuarežské matriarchy Tin Hinan, jejíž hrobka stojí v horách staré 2 miliardy let - kde dodnes žijí katoličtí mniši v poustevně založené v roce 1911.",
      atmosfera: 3.9,
      popisy: {
        zahada: "Nad saharskými písky jižního Alžírska se zvedá pohoří tvořené metamorfovanou horninou starou přibližně 2 miliardy let - domovina tuarežského lidu Kel Ahaggar a místo, kde se protíná hluboká geologická i lidská historie.",
        historie: "Prehistorické osídlení dokládají skalní malby staré až 6000 let. Charles de Foucauld založil roku 1911 poustevnu na Assekremu, kterou dodnes obývají katoličtí mniši. Francie zde v 60. letech 20. století prováděla podzemní jaderné testy.",
        legenda: "Dramatické vrcholy jako Ilamen vznikly erozí vyhaslých sopečných dómů, po kterých zůstal odolnější zátkový materiál. Region je domovem Tin Hinan, ženy považované za tuarežskou matriarchu, jejíž hrobka se nachází v Abalesse poblíž Tamanrassetu.",
        paranormalni: "Pohoří Hoggar představuje domovinu tuarežského lidu Kel Ahaggar a nese hlubokou kulturní hodnotu jako předky odkázaná domovina tohoto domorodého saharského národa, rozprostírající se na ploše asi 550 000 čtverečních kilometrů podél obratníku Raka.",
        skepticke: "Historičnost postavy Tin Hinan jako skutečné zakladatelky tuarežského rodu je předmětem badatelské diskuse mezi legendou a historií, ne jednoznačně prokázaný fakt - geologické stáří hornin kolem 2 miliard let je naopak přesně datovatelný a nesporný vědecký fakt."
      },
      praktickeInfo: "Návštěva vyžaduje organizovaný výlet s místním průvodcem z Tamanrassetu, doporučuje se navštívit i poustevnu na Assekremu kvůli výhledu na východ slunce.",
      zdroje: [
        { nazev: "Wikipedia: Hoggar Mountains", url: "https://en.wikipedia.org/wiki/Hoggar_Mountains", licence: "CC BY-SA" },
        { nazev: "Wikidata: Hoggar Mountains", url: "https://www.wikidata.org/wiki/Q26399", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Hoggar%20Mountains%20Algeria", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Hrobka tuarežské matriarchy", text: "V Abalesse poblíž Tamanrassetu leží hrobka Tin Hinan, ženy považované za legendární zakladatelku tuarežského rodu Kel Ahaggar." },
        { nazev: "Poustevna nad saharskými písky", text: "Poustevna založená Charlesem de Foucauld roku 1911 na vrcholu Assekrem je dodnes obývána katolickými mnichy uprostřed jedné z nejodlehlejších krajin světa." }
      ]
    }
  },
  {
    id: "djinguereber-mosque",
    patch: {
      lead: "Mešita postavená ze zlata Mansy Músy, jejíž stavitel podle tradice dostal 12 000 zlatých mithkalů - příběh, který moderní badatelé považují spíše za mýtus než historický fakt.",
      atmosfera: 4.0,
      popisy: {
        zahada: "V srdci Timbuktu stojí hliněná mešita postavená roku 1327 z podnětu legendárního vládce Mansy Músy, jehož bohatství se stalo proslulým po celém středověkém světě - a jejíž skutečný stavitel zůstává předmětem badatelského sporu.",
        historie: "Stavba je tradičně připisována andaluskému učenci Abú Ishaqovi al-Sáhilímu, který podle Ibn Chaldúna obdržel za práci 12 000 zlatých mithkalů. Moderní bádání ale tuto tradici zpochybňuje - analýzy ukazují, že architektonický styl Džinguereberské mešity a dalších staveb v západní Africe vychází především z saharských mešit a tradiční africké architektury, takže al-Sáhilího vliv je považován spíše za mytický než historický.",
        legenda: "Stavba využívá hlínu kombinovanou s organickými materiály jako vlákna, sláma a dřevo. Návrh zahrnuje tři vnitřní nádvoří, dva minarety a dvacet pět řad sloupů orientovaných východ-západ, pojímající až 2000 věřících.",
        paranormalni: "Mešita funguje jako jedna ze tří madras tvořících Univerzitu v Timbuktu, čímž se řadí mezi hlavní středověké vzdělávací instituce západní Afriky.",
        skepticke: "Legenda o zaplacení 12 000 zlatých mithkalů andaluskému staviteli je tradiční příběh přenášený historickými prameny jako Ibn Chaldún, ne nezávisle ověřený fakt - moderní architektonická analýza ukazuje mnohem větší roli místní saharské a africké stavební tradice, než legenda naznačuje. Roku 2012 militanti Ansar Dine zničili motykami a krumpáči dvě svatyně uvnitř mešity, ačkoli strukturální poškození zůstalo minimální."
      },
      praktickeInfo: "Mešita je aktivním místem bohoslužeb, přístup nemuslimů do vnitřních prostor může být omezen; doporučuje se ověřit aktuální bezpečnostní situaci v regionu Timbuktu před cestou.",
      zdroje: [
        { nazev: "Wikipedia: Djinguereber Mosque", url: "https://en.wikipedia.org/wiki/Djinguereber_Mosque", licence: "CC BY-SA" },
        { nazev: "Wikidata: Djinguereber Mosque", url: "https://www.wikidata.org/wiki/Q2480949", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Djinguereber%20Mosque%20Timbuktu", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Zlato Mansy Músy pro stavitele", text: "Podle tradice dostal andaluský stavitel za návrh mešity 12 000 zlatých mithkalů od proslule bohatého vládce Mansy Músy - příběh, který moderní badatelé zpochybňují jako spíše mytický." },
        { nazev: "Zničené svatyně uvnitř mešity", text: "Roku 2012 militanti Ansar Dine zničili motykami a krumpáči dvě starobylé svatyně uvnitř mešity, přestože samotná stavba přežila s minimálním poškozením." }
      ]
    }
  },
  {
    id: "sabratha-ruins",
    patch: {
      lead: "Fénické obchodní přístaviště, které se za dynastie Seveřanů zdvojnásobilo - jeho třípatrové divadelní jeviště patří k nejlépe dochovaným v celém římském světě.",
      atmosfera: 3.8,
      popisy: {
        zahada: "Na pobřeží dnešní Libye, asi 70 kilometrů západně od Tripolisu, leží ruiny města, které prošlo fénickou, římskou i byzantskou érou - a jehož divadlo patří mezi nejpůsobivější dochované stavby antického světa.",
        historie: "Přístav Sabrathy vznikl kolem roku 500 př. n. l. jako fénická obchodní stanice Tsabratan, na místě původní berberské osady. Po punských válkách prošlo město numidskou nadvládou, než se stalo římskou provincií. Největšího rozkvětu dosáhlo za dynastie Seveřanů (2.-3. století n. l.), kdy zdvojnásobilo svou předchozí velikost - expanzi vedl přímo císař Septimius Severus, narozený v nedaleké Leptis Magně.",
        legenda: "Po zemětřesení ve 4. století a vandalské okupaci zažilo město za byzantské nadvlády skromné oživení - byly postaveny kostely a vztyčeny obranné hradby, byť v omezeném rozsahu.",
        paranormalni: "Nejvýznamnější dochovanou stavbou je starověké divadlo, které si zachovalo třípatrovou architektonickou kulisu jeviště - jedno z nejlépe zachovaných svého druhu v celém římském světě. Naleziště zahrnuje i chrámy zasvěcené Liberu Patru, Serapisovi a Isis, spolu s justiniánskou křesťanskou bazilikou.",
        skepticke: "Vrstvy fénické, numidské, římské, vandalské a byzantské historie jsou v Sabratě archeologicky dobře doloženy vrstvenými nálezy - město tak nabízí nezvykle úplný přehled staletí středomořské historie na jediném místě, ne jen fragment jedné éry. UNESCO zapsalo naleziště na seznam světového dědictví roku 1982."
      },
      praktickeInfo: "Vzhledem k nestabilní bezpečnostní situaci v Libyi je nutné před cestou pečlivě ověřit aktuální doporučení ministerstva zahraničí.",
      zdroje: [
        { nazev: "Wikipedia: Sabratha", url: "https://en.wikipedia.org/wiki/Sabratha", licence: "CC BY-SA" },
        { nazev: "Wikidata: Sabratha", url: "https://www.wikidata.org/wiki/Q192918", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Sabratha%20Libya", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Divadlo o třech patrech", text: "Starověké divadlo Sabrathy si zachovalo třípatrovou architektonickou kulisu jeviště - jedno z nejlépe dochovaných svého druhu v celém římském světě." },
        { nazev: "Město zdvojnásobené za jednoho vládce", text: "Za dynastie Seveřanů se Sabratha zdvojnásobila oproti své předchozí velikosti pod vedením císaře Septimia Severa, rodáka z nedaleké Leptis Magny." }
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
