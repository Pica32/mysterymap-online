# Plán škálování na 30 000 míst

## Realistický princip

30 000 míst nepůjde dělat ručně. Správný model je:

1. Seed kandidátů z otevřených zdrojů.
2. Automatická normalizace dat.
3. Skórování a deduplikace.
4. Strojový návrh textů pouze jako draft.
5. Redakční kontrola před publikací.
6. Postupná lokalizace podle prioritních jazyků.

## Zdrojová pipeline

### Kandidáti

- Wikidata: souřadnice, země, typ objektu, odkazy na Wikipedii.
- OpenStreetMap: navigace, lokální názvy, typ místa.
- Wikimedia Commons: obrázky s licencí.
- Oficiální weby a památkové databáze: praktické info.

### Kategorie pro import

- castles, ruins, chateaus,
- prisons, former prisons, penal colonies,
- caves, catacombs, underground structures,
- islands, abandoned settlements,
- forests, lakes, mountains with folklore,
- UNESCO / heritage sites with strong legends.

## Datový stav

Každé místo musí mít stav:

- `candidate`
- `deduped`
- `source_checked`
- `drafted`
- `translated`
- `fact_checked`
- `published`

Do veřejné sitemapy smí pouze `published`.

## Vícejazyčnost

Základní jazyk obsahu je čeština. Každé místo může mít objekt:

```json
{
  "i18n": {
    "en": {
      "nazev": "Tower of London",
      "lead": "A royal fortress...",
      "popisy": {
        "zahada": "...",
        "historie": "...",
        "legenda": "...",
        "paranormalni": "...",
        "skepticke": "..."
      },
      "praktickeInfo": "..."
    }
  }
}
```

Fallback pravidlo:

- Pokud existuje překlad pro zvolený jazyk, použije se.
- Pokud překlad neexistuje, zobrazí se český originál.
- UI prvky jsou přeložené samostatně v `i18n.js`.

## Priorita jazyků

1. Čeština
2. Angličtina
3. Němčina
4. Španělština
5. Francouzština

## Technické limity

Při 30 000 místech nebude vhodné renderovat všechny body najednou v DOM.

Potřebné úpravy před velkým importem:

- mapové clustery,
- stránkování seznamu,
- lazy loading detailů,
- fulltext index přes backend nebo statický rozdělený index,
- generování sitemapy po blocích (`sitemap-places-1.xml`, `sitemap-places-2.xml`),
- publikovat jen ověřené stránky.

## Další technický krok

Přidat importní skript, který z CSV/JSON kandidátů vyrobí normalizované objekty do `data/mista.json` nebo do budoucí databáze.
