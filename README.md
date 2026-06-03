# MysteryMap.online

Globální katalog tajemných míst s mapou, detailními stránkami, zdroji a redakčně oddělenou historií, legendou, paranormálním svědectvím a skeptickým vysvětlením.

## Lokální spuštění

```bash
npm run build
python -m http.server 8099 --bind 127.0.0.1
```

Web potom běží na:

```text
http://127.0.0.1:8099/
```

## Práce s daty

Hlavní obsah je v:

```text
data/mista.json
```

Po každé změně dat spustit:

```bash
npm run validate
npm run build
```

Build vygeneruje:

- detailní stránky v `mista/<slug>/`,
- kontinentní, zemské a kategoriální landing pages v `landing/`,
- `sitemap.xml`,
- `data/search-index.json`.

Kandidáti pro budoucí objemový import jsou v:

```text
data/candidates/seed-candidates.json
```

Převod kandidátů do redakčních draftů:

```bash
npm run import:candidates
npm run analyze:drafts
```

## Obsahová pravidla

- Nekopírovat cizí katalogy ani chráněné texty.
- Psát vlastní české texty.
- Každé místo musí mít nejméně 2 zdroje.
- Oddělovat historii, legendu, svědectví a skeptické vysvětlení.
- U nepřístupných nebo citlivých míst jasně uvádět bezpečnostní a právní upozornění.
- Vícejazyčný obsah patří do volitelného pole `i18n`; pokud chybí, web použije český originál.

Podrobněji:

- `docs/content-policy.md`
- `docs/sources.md`
- `docs/source-database.md`
- `docs/editorial-workflow.md`
- `docs/scaling-to-30000.md`
- `docs/seo-geo-llm.md`

## Deploy směr

Doporučený hosting: Cloudflare Pages.

Build command:

```bash
npm run build
```

Output directory:

```text
/
```

Doména:

```text
mysterymap.online
```

## GitHub automatizace

Repo obsahuje dvě GitHub Actions:

- `.github/workflows/ci.yml` spouští `npm run build`, připraví `dist/` a uloží deploy artefakt.
- `.github/workflows/cloudflare-pages.yml` nasazuje `dist/` do Cloudflare Pages projektu `mysterymap-online`.

Pro produkční deploy nastav v GitHub repository secrets:

```text
CLOUDFLARE_ACCOUNT_ID
CLOUDFLARE_API_TOKEN
```

Token musí mít oprávnění pro Cloudflare Pages deploy v účtu, kde existuje projekt `mysterymap-online`.
