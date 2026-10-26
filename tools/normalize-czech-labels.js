const fs = require("node:fs");
const path = require("node:path");

// Doplní českou diakritiku do zobrazovaných názvů zemí, kontinentů a hodnocení.
// Slugy landing pages se nemění, protože slugify() diakritiku odstraňuje.
const root = path.resolve(__dirname, "..");
const dataPath = path.join(root, "data", "mista.json");
const places = JSON.parse(fs.readFileSync(dataPath, "utf8").replace(/^﻿/, ""));

const countries = {
  "Spojene staty": "Spojené státy",
  "USA": "Spojené státy",
  "Spojene kralovstvi": "Spojené království",
  "Australie": "Austrálie",
  "Cina": "Čína",
  "Italie": "Itálie",
  "Recko": "Řecko",
  "Novy Zeland": "Nový Zéland",
  "Etiopie": "Etiopie",
  "Cesko": "Česko",
  "Iran": "Írán",
  "Indonesie": "Indonésie",
  "Bolivie": "Bolívie",
  "Nemecko": "Německo",
  "Thajsko": "Thajsko",
  "Irsko": "Irsko",
  "Uzbekistan": "Uzbekistán",
  "Ekvador": "Ekvádor",
  "Turkmenistan": "Turkmenistán",
  "Pakistan": "Pákistán",
  "Namibie": "Namibie",
  "Saudska Arabie": "Saúdská Arábie",
  "Gruzie": "Gruzie",
  "Kambodza": "Kambodža",
  "Tanzanie": "Tanzanie",
  "Kazachstan": "Kazachstán",
  "Jizni Korea": "Jižní Korea",
  "Spanelsko": "Španělsko",
  "Svedsko": "Švédsko",
  "Francouzska Polynesie": "Francouzská Polynésie",
  "Kyrgyzstan": "Kyrgyzstán",
  "Kena": "Keňa",
  "Bosna a Hercegovina": "Bosna a Hercegovina",
  "Svycarsko": "Švýcarsko",
  "Syrie": "Sýrie",
  "Brazilie": "Brazílie",
  "Mikronesie": "Mikronésie",
  "Libye": "Libye",
  "Azerbajdzan": "Ázerbájdžán",
  "Oman": "Omán",
  "Ukrajina": "Ukrajina",
  "Severni Makedonie": "Severní Makedonie",
  "Afghanistan": "Afghánistán",
  "Armenie": "Arménie",
  "Senegal": "Senegal",
  "Nepal": "Nepál",
  "Banglades": "Bangladéš",
  "Mauritanie": "Mauritánie",
  "Libanon": "Libanon",
  "Nigerie": "Nigérie",
  "Albanie": "Albánie",
  "Papua-Nova Guinea": "Papua-Nová Guinea",
  "Malajsie": "Malajsie",
  "Dansko": "Dánsko",
  "Alzirsko": "Alžírsko",
  "Jizni Afrika": "Jihoafrická republika",
  "Jihoafricka republika": "Jihoafrická republika",
  "Cerna Hora": "Černá Hora",
  "Tchaj-wan": "Tchaj-wan",
  "Kamerun": "Kamerun",
  "Fidzi": "Fidži",
  "Nikaragua": "Nikaragua",
  "Spojene arabske emiraty": "Spojené arabské emiráty",
  "Marshallovy ostrovy": "Marshallovy ostrovy",
  "Lotyssko": "Lotyšsko",
  "Severni Irsko": "Severní Irsko",
  "Bahrajn": "Bahrajn",
  "Sudan": "Súdán",
  "Zambie": "Zambie",
  "Bhutan": "Bhútán",
  "Tadzikistan": "Tádžikistán",
  "Kostarika": "Kostarika",
  "Portoriko": "Portoriko",
  "Gambie": "Gambie",
  "Cookovy ostrovy": "Cookovy ostrovy",
  "Salomounovy ostrovy": "Šalamounovy ostrovy",
  "Belgie": "Belgie",
  "Svaty Tomas a Principuv ostrov": "Svatý Tomáš a Princův ostrov",
  "Rovnikova Guinea": "Rovníková Guinea",
  "Pitcairnovy ostrovy": "Pitcairnovy ostrovy",
  "Svaty Vincenc": "Svatý Vincenc a Grenadiny",
  "Svaty Krystof a Nevis": "Svatý Kryštof a Nevis",
  "Mauricius": "Mauricius",
  "Seychely": "Seychely",
  "Nova Kaledonie": "Nová Kaledonie",
  "Stredoafricka republika": "Středoafrická republika",
  "Severni Korea": "Severní Korea",
  "Kolumbie": "Kolumbie",
  "Rumunsko": "Rumunsko",
  "Turecko": "Turecko",
  "Izrael": "Izrael",
  "Filipiny": "Filipíny",
  "Rusko": "Rusko",
  "Tunisko": "Tunisko",
  "Portugalsko": "Portugalsko",
  "Irak": "Irák",
  "Skotsko": "Skotsko",
  "Slovensko": "Slovensko",
  "Finsko": "Finsko",
  "Rakousko": "Rakousko",
  "Chorvatsko": "Chorvatsko",
  "Litva": "Litva",
  "Estonsko": "Estonsko",
  "Maroko": "Maroko",
  "Slovinsko": "Slovinsko",
  "Moldavsko": "Moldavsko",
  "Mongolsko": "Mongolsko",
  "Lucembursko": "Lucembursko"
};

const continents = {
  "Severni Amerika": "Severní Amerika",
  "Jizni Amerika": "Jižní Amerika",
  "Oceanie": "Oceánie"
};

const values = {
  "kulturni, prirodni nebo historicka tvrzeni": "kulturní, přírodní nebo historická tvrzení",
  "kulturni, medialni nebo historicka tvrzeni": "kulturní, mediální nebo historická tvrzení",
  "kulturni a lokalni tvrzeni": "kulturní a místní tvrzení",
  "kulturni, medialni nebo lokalni tvrzeni": "kulturní, mediální nebo místní tvrzení",
  "kulturni, historicka nebo lokalni tvrzeni": "kulturní, historická nebo místní tvrzení",
  "stredni": "střední",
  "nizka": "nízká",
  "vysoka": "vysoká",
  "kulturni aura": "kulturní aura",
  "overitelna zakladni identita": "ověřitelná základní identita",
  "overit lokalne": "ověřit na místě",
  "overit pred cestou": "ověřit před cestou",
  "dobra": "dobrá",
  "velmi dobra": "velmi dobrá",
  "omezena": "omezená",
  "nizka az stredni": "nízká až střední",
  "stredni az vysoka": "střední až vysoká",
  "volne pristupne": "volně přístupné",
  "omezeny pristup": "omezený přístup",
  "nepristupne": "nepřístupné",
  "nizka pri oficialni trase": "nízká při oficiální trase",
  "vysoka pri neopravnenem vstupu": "vysoká při neoprávněném vstupu",
  "vysoka podle zony a pravidel": "vysoká podle zóny a pravidel",
  "overit lokalne, misty zvysene riziko": "ověřit na místě, místy zvýšené riziko",
  "vysoka podle aktivity a logistiky": "vysoká podle aktivity a logistiky",
  "oficialni prohlidkova trasa": "oficiální prohlídková trasa",
  "placeny vstup a chranena krajina": "placený vstup a chráněná krajina",
  "muzejni provoz": "muzejní provoz",
  "odlehla poustni lokalita": "odlehlá pouštní lokalita",
  "nepristupna vojenska oblast": "nepřístupná vojenská oblast",
  "placeny vstup": "placený vstup",
  "denni navstevni rezim": "denní návštěvní režim",
  "regulovana oblast": "regulovaná oblast",
  "overit aktualni omezeni": "ověřit aktuální omezení",
  "omezeny vstup podle povoleni": "omezený vstup podle povolení",
  "silne omezeny pristup": "silně omezený přístup",
  "silne regulovany pristup": "silně regulovaný přístup"
};

const fixField = (map) => (value) => (typeof value === "string" && map[value]) || value;
const country = fixField(countries);
const continent = fixField(continents);
const value = fixField(values);

let changed = 0;
for (const place of places) {
  const before = JSON.stringify(place);
  place.zeme = country(place.zeme);
  place.kontinent = continent(place.kontinent);
  for (const field of ["paranormalniAktivita", "historickaDolozenost", "nebezpecnost", "pristupnost"]) {
    place[field] = value(place[field]);
  }
  if (JSON.stringify(place) !== before) changed += 1;
}

fs.writeFileSync(dataPath, `${JSON.stringify(places, null, 2)}\n`, "utf8");
console.log(`Normalized Czech labels for ${changed} places.`);
