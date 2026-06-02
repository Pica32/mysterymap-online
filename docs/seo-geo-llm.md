# SEO, GEO and LLM Search Rules

## Technical SEO

- Every public place page must be pre-rendered as full HTML.
- Each page needs a unique title, meta description and canonical URL.
- Each page needs visible breadcrumbs and `BreadcrumbList` JSON-LD.
- Each place page should include `TouristAttraction` JSON-LD when it represents a visitable location.
- Sources must be visible on the page, not hidden only in JSON.
- Public pages must appear in `sitemap.xml`.
- Drafts and unverified candidates must not appear in the public sitemap.

## E-E-A-T Signals

- Separate factual history from legends and paranormal reports.
- Add a skeptical explanation for every mystery claim.
- Show source list and license/provenance notes.
- Mark sensitive places and use non-sensational language.
- Do not copy source prose.
- Prefer official or scientific sources for disasters and hazards.

## GEO / AI Search

- Each page should answer direct questions clearly:
  - What is this place?
  - Where is it?
  - Why is it mysterious?
  - What is historically verified?
  - What is legend or testimony?
  - What is the skeptical explanation?
  - What are the sources?
- Keep headings explicit and stable.
- Maintain `llms.txt` as a curated machine-readable map.
- Keep `data/search-index.json` small enough for retrieval.

## Not Allowed

- Publishing unverified community submissions.
- Mass-importing pages with empty or near-duplicate text.
- Treating blogs/forums as authoritative sources.
- Hiding citations.
- Creating tragedy pages with sensational or exploitative copy.
