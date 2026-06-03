# Deploy checklist

## Před deployem

- `npm run validate`
- `npm run build`
- Otevřít homepage lokálně.
- Otevřít náhodný detail: `/mista/tower-of-london/`.
- Otevřít náhodnou landing page: `/landing/kontinent-evropa.html`.
- Zkontrolovat `sitemap.xml`.
- Zkontrolovat `robots.txt`.

## Cloudflare Pages nastavení

- Framework preset: none.
- Build command: `npm run build`.
- Output directory pro ruční Cloudflare Pages build: `/`.
- Output directory pro GitHub Actions deploy: `dist`.
- Node.js: aktuální LTS nebo default Cloudflare Pages runtime.

## GitHub Actions secrets

- `CLOUDFLARE_ACCOUNT_ID`: ID účtu, který vlastní Pages projekt.
- `CLOUDFLARE_API_TOKEN`: token s Pages deploy oprávněním.
- Workflow `.github/workflows/cloudflare-pages.yml` po pushi spustí build, připraví `dist/` a nasadí projekt `mysterymap-online`.

## Doména

- Primární doména: `mysterymap.online`.
- Přesměrovat `www.mysterymap.online` na hlavní doménu nebo přidat jako alias.
- SSL/TLS: Full nebo Cloudflare default pro Pages.

## Po deployi

- Ověřit `https://mysterymap.online/`.
- Ověřit `https://mysterymap.online/sitemap.xml`.
- Ověřit jednu detailní stránku.
- Ověřit jednu kategoriální landing page.
- Přidat web do Google Search Console.
- Odeslat sitemapu.
- Přidat Cloudflare Web Analytics.
