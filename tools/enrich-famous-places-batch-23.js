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
    id: "angel-falls",
    patch: {
      lead: "Nejvyšší vodopád světa, který domorodý lid Pemon odjakživa nazýval 'vodopádem nejhlubšího místa' - dlouho předtím, než ho pojmenovali po americkém pilotovi.",
      atmosfera: 4.3,
      popisy: {
        zahada: "Z náhorní plošiny Auyán-tepui ve venezuelském národním parku Canaima padá voda o výšce přes 979 metrů - nejvyšší vodopád světa, který zůstal vnějšímu světu neznámý až do 20. století, přestože domorodý lid Pemon ho znal a pojmenoval odjakživa.",
        historie: "Vodopád zůstal mimo povědomí vnějšího světa až do letu amerického pilota Jimmieho Angela 16. listopadu 1933. Někteří evropští badatelé ho možná zahlédli dříve - Walter Raleigh snad během své výpravy za Eldorádem, španělský průzkumník Fèlix Cardona údajně roku 1927 - tato tvrzení ale nejsou pevně doložena. První zdokumentovanou pozemní expedici k patě vodopádu vedla americká novinářka Ruth Robertsonová, jejíž tým dorazil na místo 13. května 1949 a stanovil oficiální naměřenou výšku.",
        legenda: "Domorodý lid Pemon nazývá vodopád 'Körepakupai Vená' (též 'Kerepakupai-Merú'), což znamená 'vodopád nejhlubšího místa'. Roku 2009 prezident Hugo Chávez navrhl oficiální přejmenování na tento domorodý název se slovy, že místo patřilo domorodým obyvatelům dávno předtím, než sem dorazil Angel - později ale upřesnil, že změnu nenařídí, jen bude prosazovat používání domorodého jména.",
        paranormalni: "Španělský název 'Salto Ángel' pochází od Jimmieho Angela, jehož jméno bylo poprvé zveřejněno na venezuelské vládní mapě v prosinci 1939 - anglosaské pojmenování podle jediného pilota tak nahradilo tisíce let starý domorodý název pro místo posvátné už dávno předtím.",
        skepticke: "Spor o pojmenování vodopádu je politicky i kulturně citlivá otázka koloniálního dědictví, ne spor o faktech - obě jména, domorodé i to po Angelovi, jsou dnes běžně používána souběžně, a vodopád samotný zůstává nesporně nejvyšším na světě bez ohledu na to, jak se mu říká."
      },
      praktickeInfo: "Vodopád je přístupný pouze lodí po řece Churún a následným treku, návštěva vyžaduje organizovaný výlet z Canaimy kvůli odlehlosti parku.",
      zdroje: [
        { nazev: "Wikipedia: Angel Falls", url: "https://en.wikipedia.org/wiki/Angel_Falls", licence: "CC BY-SA" },
        { nazev: "Wikidata: Angel Falls", url: "https://www.wikidata.org/wiki/Q80299", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Angel%20Falls%20Venezuela", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Vodopád nejhlubšího místa", text: "Domorodý lid Pemon nazývá vodopád 'Körepakupai Vená' - vodopád nejhlubšího místa - jméno používané dávno předtím, než ho objevil pilot Jimmie Angel." },
        { nazev: "Prezidentův spor o jméno", text: "Roku 2009 prezident Hugo Chávez navrhl přejmenovat vodopád na jeho domorodý název s odůvodněním, že místo patřilo domorodým obyvatelům dávno předtím, než sem dorazili cizinci." }
      ]
    }
  },
  {
    id: "el-infiernito",
    patch: {
      lead: "'Malé peklo', jak místo pojmenovali Španělé zděšení pohanskými obřady - ve skutečnosti šlo o propracovanou astronomickou observatoř kultury Muisca.",
      atmosfera: 3.7,
      popisy: {
        zahada: "V kolumbijském údolí Monquirá stojí desítky kamenných sloupů, které španělští dobyvatelé pojmenovali 'infiernito' (malé peklo), protože je považovali za ďábelské a spojovali je s pohanským uctíváním.",
        historie: "Geograf Joaquín Acosta místo poprvé zdokumentoval roku 1847 a zaznamenal 25 kamenných sloupů v údolí Monquirá. Alexander von Humboldt později nálezy studoval a rozpoznal jejich astronomický potenciál. Radiokarbonové datování ukazuje osídlení trvající zhruba od 2880 do 2180 let před současností, se stratifikovanými nálezy zahrnujícími zvířecí kosti, kukuřičné obětiny, červenou okr a rituální materiály.",
        legenda: "Místo náleželo předkolumbovské civilizaci Muisca na náhorní plošině Altiplano Cundiboyacense a fungovalo jako náboženské i astronomické centrum - sloužilo obřadům a duchovním očistným rituálům a zároveň jako observatoř. 109 vykopaných monolitů pravděpodobně představovalo kalendář Muisca.",
        paranormalni: "Hlavní sloupy jsou zarovnány v azimutu 91° směrem k pahorku Morro Negro, čímž označují východ slunce při rovnodennosti. Pozorování letního slunovratu bylo zarovnáno směrem k jezeru Iguaque, považovanému za místo zrození bohyně, od níž Muiskové odvozovali svůj původ.",
        skepticke: "Označení 'malé peklo' je koloniální nálepka odrážející španělské nepochopení cizího náboženství, ne skutečná povaha místa - moderní archeoastronomický výzkum ukazuje, že šlo o precizně propracovanou observatoř schopnou sledovat slunovraty i rovnodennosti, srovnatelnou svou sofistikovaností s jinými starověkými kalendářními stavbami světa."
      },
      praktickeInfo: "Naleziště leží nedaleko města Villa de Leyva a je veřejně přístupné s placeným vstupem.",
      zdroje: [
        { nazev: "Wikipedia: El Infiernito", url: "https://en.wikipedia.org/wiki/El_Infiernito", licence: "CC BY-SA" },
        { nazev: "Wikidata: El Infiernito", url: "https://www.wikidata.org/wiki/Q1987940", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=El%20Infiernito%20Villa%20de%20Leyva", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Malé peklo, které bylo observatoří", text: "Španělé pojmenovali kamenné sloupy 'infiernito' ze strachu z pohanských obřadů - ve skutečnosti šlo o propracovanou observatoř sledující slunovraty a rovnodennosti." },
        { nazev: "Kalendář ze 109 kamenů", text: "Sto devět vykopaných monolitů pravděpodobně tvořilo kalendářní systém kultury Muisca, zarovnaný podle pohybu slunce v průběhu roku." }
      ]
    }
  },
  {
    id: "la-soufriere-saint-vincent",
    patch: {
      lead: "Sopka, jejíž erupce roku 1902 vyhladila poslední zbytky domorodé kultury Kalinago na ostrově - hodiny předtím, než vybuchla i sesterská sopka na Martiniku.",
      atmosfera: 3.9,
      popisy: {
        zahada: "Nejvyšší vrchol ostrova Svatý Vincenc, aktivní stratovulkán vysoký 1235 metrů, zaznamenal od roku 1718 osm erupcí - a jedna z nich se zapsala do dějin karibské historie tragickým způsobem.",
        historie: "Sopka má zdokumentováno pět výbušných erupcí v historickém období: 1718, 1812, 1902, 1979 a 2021. Erupce ze 6. května 1902 zabila 1680 lidí jen několik hodin předtím, než vybuchla i hora Pelée na sousedním Martiniku - dalších 600 lidí utrpělo zranění nebo popáleniny a asi 4000 přišlo o domov.",
        legenda: "Zóna smrti při erupci roku 1902 ležela z velké části na území obývaném domorodým lidem Kalinago (Island Caribs) - katastrofa tak fakticky zničila poslední zbytek karibské domorodé kultury na ostrově, tragédii, na kterou místní dodnes vzpomínají jako na definitivní konec jedné éry.",
        paranormalni: "Erupce z prosince 2020 až dubna 2021 začala efuzivní fází budující lávový dóm, 8. dubna 2021 byl vyhlášen červený stupeň pohotovosti a následujícího dne došlo k výbušné erupci s oblakem popela dosahujícím výšky asi 8000 metrů - událost hodnocená stupněm VEI-4 na stupnici výbušnosti.",
        skepticke: "Zničení domorodé komunity Kalinago při erupci roku 1902 je historicky doložená tragédie, ne legenda - přesná čísla obětí a rozsah zóny zkázy jsou zaznamenány v dobových záznamech, což z události činí jeden z nejtemnějších okamžiků karibské koloniální historie."
      },
      praktickeInfo: "Po erupci v roce 2021 se doporučuje před návštěvou ověřit aktuální stupeň sopečné aktivity a případná omezení přístupu k vrcholu.",
      zdroje: [
        { nazev: "Wikipedia: La Soufrière (volcano)", url: "https://en.wikipedia.org/wiki/Soufri%C3%A8re_(volcano)", licence: "CC BY-SA" },
        { nazev: "Wikidata: La Soufrière", url: "https://www.wikidata.org/wiki/Q26544", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=La%20Soufriere%20Saint%20Vincent", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Dvě sopky, jeden den", text: "Erupce La Soufrière 6. května 1902 zabila 1680 lidí jen hodiny předtím, než vybuchla sesterská sopka Pelée na sousedním Martiniku." },
        { nazev: "Konec domorodé kultury ostrova", text: "Zóna zkázy při erupci roku 1902 zasáhla především území obývané domorodým lidem Kalinago a fakticky zničila poslední zbytky jejich kultury na ostrově." }
      ]
    }
  },
  {
    id: "koricancha",
    patch: {
      lead: "Chrám slunce, jehož zahradu ze zlata Španělé roztavili a jehož výkupné za císaře Atahualpu naplnilo celou místnost drahým kovem až ke stropu.",
      atmosfera: 4.4,
      popisy: {
        zahada: "V srdci Cuska stálo nejvýznamnější svatostánek celé Incké říše, původně nazývaný Intikancha nebo Intiwasi - chrám zasvěcený slunečnímu bohu Inti, jehož zlaté poklady patřily mezi nejobdivovanější a zároveň nejtragičtěji vyplundrované na celém americkém kontinentu.",
        historie: "Podle mytologie Manko Cápac vybral toto místo na soutoku dvou řek jako základ chrámu i celé říše. Chrám sloužil jako duchovní centrum Cuska, kde velekněz vedl běžné oběti a náboženské obřady. Španělští dobyvatelé stavbu v 16. století zdevastovali a její kameny použili na stavbu kostela a kláštera Santo Domingo, postaveného po zemětřesení roku 1650.",
        legenda: "Během slavností Inti Raymi seděl Sapa Inka mezi mumiemi předků ve sluneční síni a pomocí konkávního zrcadla zapaloval obětní ohně pro lamy a příležitostně i pro děti přivedené posvátnými poutními cestami. Španělské záznamy popisují nádheru chrámu jako 'pohádkovou nad veškerou představivost' - stěny pokryté zlatými pláty a přilehlá nádvoří plná zlatých soch.",
        paranormalni: "Pačakutek chrám obohatil jemnými zlatými plátěmi, zlatými vázami a vzácnými ozdobami zdobícími mumifikované vládce vystavené na zlatých lavicích - legendární 'zlatá zahrada' s uměle vytvořenými rostlinami a zvířaty ze zlata patřila k nejpozoruhodnějším pokladům, jaké kdy Evropané v Novém světě spatřili.",
        skepticke: "Výkupné za život císaře Atahualpy v roce 1533 bylo z velké části vybráno právě z pokladů Koricancha - z chrámu, jehož zlato Španělé následně roztavili do prutů, a jehož pečlivě otesané kamenné bloky, vyžadující obrovské pracovní úsilí, posloužily jako základy koloniálních staveb. Fyzická existence chrámu a jeho vyplenění jsou historicky nesporné, na rozdíl od přesného rozsahu legendárního zlatého bohatství, které známe hlavně ze španělských líčení."
      },
      praktickeInfo: "Dnešní klášter Santo Domingo v Cusku byl postaven přímo na inckých základech chrámu, které jsou dodnes viditelné a přístupné návštěvníkům.",
      zdroje: [
        { nazev: "Wikipedia: Coricancha", url: "https://en.wikipedia.org/wiki/Coricancha", licence: "CC BY-SA" },
        { nazev: "Wikidata: Coricancha", url: "https://www.wikidata.org/wiki/Q817594", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=Coricancha%20Cusco", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "Zlatá zahrada roztavená na pruty", text: "Chrám kdysi hostil legendární zahradu plnou rostlin a zvířat vyrobených ze zlata - poklad, který Španělé po dobytí roztavili do přenosných prutů." },
        { nazev: "Výkupné za císaře", text: "Většina zlatého výkupného, které měli Španělé vyměnit za život zajatého císaře Atahualpy roku 1533, pocházela právě z pokladů chrámu Koricancha." }
      ]
    }
  },
  {
    id: "alma-observatory",
    patch: {
      lead: "Observatoř ve výšce přes 5000 metrů, kde nedostatek vlhkosti vzduchu umožnil zachytit první snímek černé díry a nečekané planetární disky kolem mladých hvězd.",
      atmosfera: 3.5,
      popisy: {
        zahada: "Na náhorní plošině Chajnantor v chilské poušti Atacama, ve výšce 5058,7 metru nad mořem, stojí observatoř vzniklá spojením tří samostatných projektů - amerického Millimeter Array, evropského Large Southern Array a japonského Large Millimeter Array.",
        historie: "Národní radioastronomická observatoř USA a Evropská jižní observatoř zahájily spolupráci roku 1997 a spojily své koncepty. Oficiální název ALMA byl schválen v březnu 1999, základní kámen byl položen 6. listopadu 2003, pozorování začala koncem roku 2011 a plný provoz observatoř dosáhla v březnu 2013.",
        legenda: "Extrémní nadmořská výška a přirozeně nízká vlhkost regionu jsou klíčové pro snížení šumu a omezení útlumu signálu způsobeného zemskou atmosférou - podmínky, které z náhorní plošiny Chajnantor dělají jedno z nejlepších míst na Zemi pro pozorování v milimetrových a submilimetrových vlnových délkách.",
        paranormalni: "Observatoř přispěla k objevu tvorby protoplanet, pořídila detailní snímky protoplanetárního disku HL Tauri odhalující nečekanou tvorbu planet kolem mladých hvězd, zmapovala chemické složení komet a podílela se na projektu Event Horizon Telescope, který roku 2019 pořídil první snímek černé díry v historii.",
        skepticke: "Kontroverzní detekce fosfinu v atmosféře Venuše pomocí dat z ALMA v roce 2020 zůstává předmětem vědeckého sporu - následné analýzy zpochybnily původní interpretaci signálu, což je připomínkou, že i nejmodernější observatoře produkují data vyžadující opatrnou a opakovanou verifikaci, ne okamžité senzační závěry."
      },
      praktickeInfo: "Observatoř není běžně přístupná veřejnosti kvůli extrémní nadmořské výšce a citlivosti přístrojů, informační centrum ESO poskytuje omezené prohlídky pro návštěvníky v nižších nadmořských výškách.",
      zdroje: [
        { nazev: "Wikipedia: Atacama Large Millimeter Array", url: "https://en.wikipedia.org/wiki/Atacama_Large_Millimeter_Array", licence: "CC BY-SA" },
        { nazev: "Wikidata: ALMA Observatory", url: "https://www.wikidata.org/wiki/Q725364", licence: "CC0" },
        { nazev: "OpenStreetMap", url: "https://www.openstreetmap.org/search?query=ALMA%20Observatory%20Chile", licence: "ODbL" }
      ],
      pribehy: [
        { nazev: "První snímek černé díry", text: "ALMA se podílela na projektu Event Horizon Telescope, který v roce 2019 pořídil vůbec první fotografii černé díry v dějinách astronomie." },
        { nazev: "Sporný signál z Venuše", text: "Data z ALMA vedla roku 2020 k oznámení objevu fosfinu v atmosféře Venuše - kontroverzní zjištění, které následné analýzy zpochybnily a připomnělo potřebu opatrné vědecké verifikace." }
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
