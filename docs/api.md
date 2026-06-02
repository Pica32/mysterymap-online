# API návrh

Základní zdroj pravdy je objekt `misto` v `data/mista.json`. Produkční API by mělo vracet stejný tvar dat a podporovat globální filtrování podle země, kontinentu, kategorie a bezpečnostních pravidel.

## Endpointy

- `GET /api/mista` - vyhledávání, filtrování podle kategorií, země, kontinentu, indexu tajemna a přístupnosti.
- `GET /api/misto/{id}` - detail jedné lokace.
- `POST /api/misto` - vytvoření nové lokace pro redakci.
- `PUT /api/misto/{id}` - úprava lokace.
- `DELETE /api/misto/{id}` - skrytí nebo odstranění lokace.
- `POST /api/checkin` - GPS + foto ověření návštěvy.
- `GET /api/uzivatel/{id}/odznaky` - profil, XP, odznaky a navštívená místa.
- `POST /api/uzivatel/auth` - registrace a login.
- `GET /api/odznaky` - katalog odznaků.
- `GET /api/sitemap.xml` - sitemap pro SEO.
- `GET /data/search-index.json` - statický vyhledávací index pro frontend, později nahradit API endpointem.
- `POST /api/community/submission` - komunitní návrh místa do moderace.
- `POST /api/community/submission/{id}/promote` - převod schváleného návrhu na redakční draft.

## Doporučený backend

- Postgres + PostGIS pro geografické dotazy.
- Tabulky: `places`, `place_sources`, `users`, `checkins`, `badges`, `user_badges`.
- Indexy: `places(gps)`, `places(country)`, `places(continent)`, `places(index_tajemna)`, fulltext nad názvem a leadem.
- Přesné otevírací doby, vstupné a právní přístup držet jako redakčně ověřovaná pole s datem poslední kontroly.
