# Komunitní základ

## Princip

Komunita může navrhovat místa, ale nic nesmí jít rovnou do publikované databáze. Každý návrh jde do moderace.

## Stav návrhu

- `candidate` - uživatel poslal návrh.
- `triaged` - redakce rozhodla, že dává smysl.
- `duplicate` - stejné místo už existuje.
- `needs_sources` - chybí zdroje.
- `draft` - redakce píše text.
- `rejected` - mimo téma, nebezpečné nebo právně problematické.
- `published` - zkontrolováno a zveřejněno.

## Produkční API

- `POST /api/community/submission` - vytvoření návrhu.
- `GET /api/community/submissions` - moderátorský seznam.
- `PUT /api/community/submission/{id}` - změna stavu.
- `POST /api/community/submission/{id}/promote` - převod do redakčního draftu.

## Povinná pole návrhu

- název místa,
- země nebo oblast,
- krátký popis,
- alespoň jeden zdroj nebo stopa,
- volitelně GPS,
- volitelně fotka,
- souhlas s tím, že text může redakce upravit.

## Kategorie komunitních návrhů

- místo,
- legenda,
- katastrofa,
- svědectví,
- fotografie,
- oprava existující stránky,
- bezpečnostní upozornění.

## Moderace

Citlivá místa jako války, genocidy, nehody, sebevraždy a nedávné tragédie musí mít zvláštní kontrolu tónu. Web nemá dělat senzaci z utrpení.
