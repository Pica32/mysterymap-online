# Zdroje informací pro globální MysteryMap.online

Strukturovaný katalog zdrojů je v `data/source-catalog.json`. Pro importy a kontroly používej i `docs/source-database.md`.

## Hlavní zdroje

- Wikidata: základní identifikátory, souřadnice, země, typ objektu. Licence CC0.
- OpenStreetMap: mapové body, navigace, lokální názvy, okolní infrastruktura. Licence ODbL, nutná atribuce.
- Wikipedie: přehled historie a odkazy na další literaturu. Licence CC BY-SA, text nepřebírat doslovně.
- Wikimedia Commons: obrázky s licencemi CC, public domain nebo jinou explicitní licencí.
- Oficiální weby lokalit: otevírací doba, vstupné, pravidla návštěvy, bezpečnost.
- Veřejné památkové a turistické databáze: UNESCO, národní památkové úřady, městské turistické portály.

## Katastrofy a anomálie

- NASA: kosmické dopady, Tunguska, impakty, planetární obrana.
- USGS: zemětřesení, sopečná aktivita, geologická rizika.
- NOAA: tsunami, historické přírodní katastrofy, oceánské jevy.
- Smithsonian Global Volcanism Program: sopky a erupce.
- Národní archivy a oficiální paměťové instituce: historické katastrofy a městská paměť.

U katastrof je nutné jasně oddělit vědecké vysvětlení od legend, konspiračních teorií a komunitních svědectví.

## Co nepoužívat jako zdroj dat

- Nekopírovat databáze komerčních haunted/ghost webů.
- Nepřebírat texty z Atlas Obscura ani podobných katalogů.
- Nepřebírat celé seznamy míst bez ověření licence databáze.
- Paranormální blogy používat maximálně jako stopu pro redakční rešerši, ne jako autoritativní zdroj.

## Doporučený redakční postup

1. Najít kandidáta přes Wikidata, Wikipedii, OSM nebo oficiální turistický zdroj.
2. Ověřit souřadnice minimálně ve dvou zdrojích.
3. Rozdělit fakta, legendu a svědectví do samostatných polí.
4. Dopsat vlastní český text.
5. Přidat skeptické vysvětlení.
6. Zapsat licenci a datum kontroly ke každému zdroji.

## Datové dotazy pro škálování

Wikidata SPARQL je vhodná pro seed kandidátů, ne pro hotový redakční obsah. Hledat lze například:

- hrady, věznice, katakomby a ostrovy s koordináty,
- místa s článkem na Wikipedii a turistickou významností,
- UNESCO a významné památky,
- objekty s kategoriemi typu castle, prison, catacombs, cave, forest, island.

Každý import musí projít ruční nebo poloautomatickou kontrolou, protože samotný fakt, že místo existuje, neříká nic o kvalitě legendy.
