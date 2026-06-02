# Source Database

The structured source registry lives in:

```text
data/source-catalog.json
```

Reusable import/query recipes live in:

```text
data/source-queries.json
```

## Source Tiers

### Tier 1: Publishable authority sources

Use these for published facts and public pages:

- Wikidata for IDs and cross-links.
- OpenStreetMap for map/nav verification with attribution.
- Official site pages for practical info.
- USGS for earthquakes.
- NOAA/NCEI for hazards and tsunamis.
- Smithsonian Global Volcanism Program for volcanoes.
- NASA for impact/cosmic anomaly context.
- UNESCO and official heritage bodies for protected sites.

### Tier 2: Enrichment and reconciliation

Use these to dedupe, enrich, and reconcile:

- GeoNames.
- Who's On First.
- Getty TGN.
- World Historical Gazetteer.
- Natural Earth.

### Tier 3: Media and archival discovery

Use these for images, documents and historical context:

- Wikimedia Commons.
- National Archives.
- Library of Congress.
- Europeana.
- DPLA.

Each media asset must store its own license, author, source URL and attribution text.

### Tier 4: Leads only

Use these only as leads, never as final authority:

- Community submissions.
- Blogs.
- YouTube/TikTok/social posts.
- Travel listicles.
- Paranormal forums.

## Import Rules

1. Candidate source can create a draft, not a published page.
2. A published page needs at least two sources.
3. At least one source must be authoritative for the place type:
   - disaster: USGS/NOAA/NASA/Smithsonian/official archive,
   - heritage: official site/UNESCO/national heritage database,
   - map location: OSM/Wikidata/GeoNames,
   - media: Commons/National Archives/Europeana/DPLA/LOC with item-level rights.
4. Never copy prose from source pages.
5. Store source license/provenance per fact group where possible.
6. Community reports must be moderated and deduplicated.

## Database Fields

Each catalog entry has:

- `id`
- `name`
- `url`
- `type`
- `license`
- `bestFor`
- `useInMysteryMap`
- `risk`
- `priority`

## Next Automation Step

Build a source scoring script:

- prefer priority 1 and 2 sources,
- require at least one authority source per page,
- flag pages that rely only on Wikipedia/community/blog sources,
- flag missing licenses or missing attribution.

Then build import adapters for:

- Wikidata SPARQL,
- USGS GeoJSON,
- OSM Overpass,
- Smithsonian GVP exports,
- NOAA/NCEI hazard records,
- Commons image metadata.
