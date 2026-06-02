# Redakční workflow pro MysteryMap.online

## Cíl

Každá stránka místa musí být lepší než běžný katalog: vlastní text, jasné oddělení faktů od legend, GPS, praktické info, skeptické vysvětlení a citované zdroje.

## Minimální kvalita místa

- 2 až 4 nezávislé zdroje.
- Aspoň jeden otevřený strukturovaný zdroj: Wikidata nebo OpenStreetMap.
- Aspoň jeden obsahový zdroj: oficiální web, památkový web, Wikipedie nebo důvěryhodný turistický portál.
- Vlastní český text, žádné kopírování cizích odstavců.
- Praktické info musí obsahovat i varování, pokud je místo nepřístupné nebo citlivé.

## Stav obsahu

Doporučené interní stavy pro budoucí admin:

- `candidate` - místo je jen návrh.
- `researched` - zdroje jsou nalezené.
- `draft` - text je napsaný.
- `fact_checked` - souřadnice, historie a praktické info jsou ověřené.
- `published` - stránka může být ve veřejné sitemapě.
- `needs_update` - praktické info je staré nebo zdroj zmizel.

## Rozšiřování databáze

1. Přidat objekt do `data/mista.json`.
2. Spustit `npm run validate`.
3. Spustit `npm run build`.
4. Zkontrolovat novou URL `/mista/<slug>/`.
5. Zkontrolovat zemskou, kontinentní a kategoriální landing page.
6. Zkontrolovat `sitemap.xml` a `data/search-index.json`.

## Překlady

- UI se překládá v `i18n.js`.
- Obsah místa se překládá přes volitelné pole `i18n`.
- Pokud překlad chybí, web zobrazí český originál.
- Překlady se musí kontrolovat stejně jako český text, hlavně u citlivých míst a historických tvrzení.
