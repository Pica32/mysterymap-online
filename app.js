const state = {
  places: [],
  activeId: null,
  query: "",
  minMystery: 50,
  mapMode: "all",
  mapZoom: 3,
  mapCenter: { lat: 22, lon: 10 },
  mapDrag: null,
  categories: new Set(),
  themes: new Set()
};

const mapBounds = {
  latMin: -85.05112878,
  latMax: 85.05112878,
  lonMin: -180,
  lonMax: 180
};

const badges = [
  ["badge.first", "badge.firstMeta"],
  ["badge.night", "badge.nightMeta"],
  ["badge.skeptic", "badge.skepticMeta"],
  ["badge.cartographer", "badge.cartographerMeta"]
];

const localeRoutes = {
  cs: { placePrefix: "mista" },
  en: { placePrefix: "places" },
  de: { placePrefix: "orte" },
  es: { placePrefix: "lugares" },
  fr: { placePrefix: "lieux" }
};

const els = {
  search: document.querySelector("#search"),
  controls: document.querySelector(".control-band"),
  categoryFilters: document.querySelector(".filters:not(.theme-filters)"),
  themeFilters: document.querySelector(".theme-filters"),
  range: document.querySelector("#mysteryRange"),
  rangeValue: document.querySelector("#rangeValue"),
  mapModes: document.querySelector(".map-modes"),
  map: document.querySelector("#mapStage"),
  detail: document.querySelector("#detail"),
  grid: document.querySelector("#placesGrid"),
  stats: document.querySelector("#statsGrid"),
  ranking: document.querySelector("#rankingGrid"),
  continents: document.querySelector("#continentGrid"),
  categories: document.querySelector("#categoryGrid"),
  themes: document.querySelector("#themeGrid"),
  countries: document.querySelector("#countryGrid"),
  badges: document.querySelector("#badges")
};

init();

async function init() {
  const response = await fetch("data/mista.json");
  state.places = await response.json();
  state.categories = new Set(uniqueFlat(state.places, "kategorie"));
  state.themes = new Set(uniqueFlat(state.places, "temata"));
  state.activeId = state.places[0]?.id;
  renderFilterControls();
  bindEvents();
  bindCommunityForm();
  renderBadges();
  renderOverview();
  render();
  document.addEventListener("mysterymap:language-change", () => {
    renderFilterControls();
    renderBadges();
    renderOverview();
    render();
  });
}

function bindCommunityForm() {
  const form = document.querySelector("#communityForm");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const submission = {
      id: `community-${Date.now()}`,
      status: "candidate",
      createdAt: new Date().toISOString(),
      nazev: formData.get("nazev"),
      zeme: formData.get("zeme"),
      pribeh: formData.get("pribeh"),
      zdroj: formData.get("zdroj")
    };
    const stored = JSON.parse(localStorage.getItem("mysterymap-community-submissions") || "[]");
    stored.push(submission);
    localStorage.setItem("mysterymap-community-submissions", JSON.stringify(stored));
    form.reset();
    document.querySelector("#communityStatus").textContent = t("community.saved", "Návrh je uložený lokálně a v produkci by šel do moderace.");
  });
}

function bindEvents() {
  els.search.addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    render();
  });

  els.range.addEventListener("input", (event) => {
    state.minMystery = Number(event.target.value);
    els.rangeValue.textContent = `${state.minMystery}+`;
    render();
  });

  els.controls.addEventListener("change", (event) => {
    if (!event.target.matches("input[type='checkbox']")) return;
    const targetSet = event.target.closest(".theme-filters") ? state.themes : state.categories;
    if (event.target.checked) targetSet.add(event.target.value);
    else targetSet.delete(event.target.value);
    render();
  });

  els.mapModes?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-map-mode]");
    if (!button) return;
    state.mapMode = button.dataset.mapMode || "all";
    render();
  });

  els.map?.addEventListener("click", (event) => {
    const zoomButton = event.target.closest("[data-map-zoom]");
    if (!zoomButton) return;
    const delta = Number(zoomButton.dataset.mapZoom);
    zoomMap(delta);
  });

  els.map?.addEventListener("wheel", (event) => {
    event.preventDefault();
    zoomMap(event.deltaY < 0 ? 1 : -1);
  }, { passive: false });

  els.map?.addEventListener("pointerdown", (event) => {
    if (event.target.closest(".map-pin, .map-zoom-controls")) return;
    els.map.setPointerCapture(event.pointerId);
    state.mapDrag = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      center: { ...state.mapCenter }
    };
    els.map.classList.add("is-dragging");
  });

  els.map?.addEventListener("pointermove", (event) => {
    if (!state.mapDrag || state.mapDrag.pointerId !== event.pointerId) return;
    const zoom = state.mapZoom;
    const start = projectToWorldPixel(state.mapDrag.center.lat, state.mapDrag.center.lon, zoom);
    const nextX = start.x - (event.clientX - state.mapDrag.x);
    const nextY = start.y - (event.clientY - state.mapDrag.y);
    state.mapCenter = worldPixelToLatLon(nextX, nextY, zoom);
    render();
  });

  els.map?.addEventListener("pointerup", endMapDrag);
  els.map?.addEventListener("pointercancel", endMapDrag);

  document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-place-id]");
    if (!link) return;
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || link.target === "_blank") return;
    event.preventDefault();
    selectPlace(link.dataset.placeId || link.dataset.id);
  });
}

function getFilteredPlaces() {
  return state.places.filter((place) => {
    const isFilmLocation = place.kategorie.includes("filmova-lokace");
    const matchesMapMode =
      state.mapMode === "all" ||
      (state.mapMode === "film" && isFilmLocation) ||
      (state.mapMode === "mystery" && !isFilmLocation);
    const matchesQuery = [place.nazev, place.zeme, place.kontinent, place.lead, ...place.kategorie, ...(place.temata || [])]
      .join(" ")
      .toLowerCase()
      .includes(state.query);
    const matchesCategory = place.kategorie.some((category) => state.categories.has(category));
    const matchesTheme = !place.temata?.length || place.temata.some((theme) => state.themes.has(theme));
    return matchesMapMode && matchesQuery && matchesCategory && matchesTheme && place.indexTajemna >= state.minMystery;
  });
}

function render() {
  const places = getFilteredPlaces();
  if (!places.some((place) => place.id === state.activeId)) {
    state.activeId = places[0]?.id ?? null;
  }
  renderMap(places);
  renderMapModes();
  renderCards(places);
  renderDetail();
}

function renderMapModes() {
  const modeLabels = {
    all: t("map.modeAll", "All places"),
    mystery: t("map.modeMystery", "Mysteries"),
    film: t("map.modeFilm", "Film locations")
  };
  els.mapModes?.querySelectorAll("[data-map-mode]").forEach((button) => {
    const isActive = button.dataset.mapMode === state.mapMode;
    button.textContent = modeLabels[button.dataset.mapMode] || button.textContent;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderMap(places) {
  const visiblePlaces = places.slice().sort((a, b) => b.indexTajemna - a.indexTajemna).slice(0, 650);
  els.map.innerHTML = worldMapMarkup(places.length, visiblePlaces.length);
  const center = projectToWorldPixel(state.mapCenter.lat, state.mapCenter.lon, state.mapZoom);
  const width = els.map.clientWidth || 1000;
  const height = els.map.clientHeight || 600;
  visiblePlaces.forEach((place) => {
    const point = projectToWorldPixel(place.gps.lat, place.gps.lon, state.mapZoom);
    const button = document.createElement("button");
    button.className = `map-pin map-pin-${primaryCategory(place)} map-pin-${scoreBand(place.indexTajemna)}`;
    button.type = "button";
    button.style.left = `${width / 2 + point.x - center.x}px`;
    button.style.top = `${height / 2 + point.y - center.y}px`;
    button.style.setProperty("--pin-score", place.indexTajemna);
    button.title = `${localPlace(place, "nazev")} - ${localPlace(place, "zeme")} - ${place.indexTajemna}/100`;
    button.setAttribute("aria-label", `${localPlace(place, "nazev")}, ${localPlace(place, "zeme")}, ${place.indexTajemna}/100`);
    button.setAttribute("aria-pressed", String(place.id === state.activeId));
    button.innerHTML = `<span>${place.indexTajemna}</span>`;
    button.addEventListener("click", () => selectPlace(place.id));
    els.map.append(button);
  });
}

function renderFilterControls() {
  els.categoryFilters.innerHTML = `<legend data-i18n="filters.categories">${t("filters.categories", "Kategorie")}</legend>` + uniqueFlat(state.places, "kategorie")
    .map((category) => `<label><input type="checkbox" value="${category}" ${state.categories.has(category) ? "checked" : ""}> <span>${filterCategoryLabel(category)}</span></label>`)
    .join("");
  els.themeFilters.innerHTML = `<legend data-i18n="filters.themes">${t("filters.themes", "Motivy")}</legend>` + uniqueFlat(state.places, "temata")
    .map((theme) => `<label><input type="checkbox" value="${theme}" ${state.themes.has(theme) ? "checked" : ""}> <span>${filterThemeLabel(theme)}</span></label>`)
    .join("");
}

function worldMapMarkup(totalCount, shownCount) {
  const tileZoom = state.mapZoom;
  const tileCount = 2 ** tileZoom;
  const width = els.map?.clientWidth || 1000;
  const height = els.map?.clientHeight || 600;
  const center = projectToWorldPixel(state.mapCenter.lat, state.mapCenter.lon, tileZoom);
  const leftEdge = center.x - width / 2;
  const topEdge = center.y - height / 2;
  const startX = Math.floor(leftEdge / 256);
  const endX = Math.floor((leftEdge + width) / 256);
  const startY = Math.floor(topEdge / 256);
  const endY = Math.floor((topEdge + height) / 256);
  const tiles = [];
  for (let y = startY; y <= endY; y += 1) {
    if (y < 0 || y >= tileCount) continue;
    for (let x = startX; x <= endX; x += 1) {
      const wrappedX = ((x % tileCount) + tileCount) % tileCount;
      tiles.push(`<img class="osm-tile" src="https://tile.openstreetmap.org/${tileZoom}/${wrappedX}/${y}.png" alt="" loading="lazy" decoding="async" style="left:${Math.round(x * 256 - leftEdge)}px; top:${Math.round(y * 256 - topEdge)}px;">`);
    }
  }
  return `
    <div class="osm-map" role="img" aria-label="${t("map.osmLabel", "OpenStreetMap world basemap")}">${tiles.join("")}</div>
    <div class="map-zoom-controls" aria-label="Map zoom">
      <button type="button" data-map-zoom="1" aria-label="Zoom in">+</button>
      <button type="button" data-map-zoom="-1" aria-label="Zoom out">-</button>
    </div>
    <div class="map-density">${t("map.visiblePins", "Pins shown")}: ${shownCount}/${totalCount}</div>
    <div class="map-legend" aria-hidden="true">
      <span><i class="legend-pin"></i> ${t("map.legendPlace", "visible place")}</span>
      <span><i class="legend-pin active"></i> ${t("map.legendSelected", "selected place")}</span>
      <span class="osm-credit">© OpenStreetMap</span>
    </div>`;

}

function renderCards(places) {
  if (!places.length) {
    els.grid.innerHTML = "<p>Nenalezeno žádné místo. Zkus snížit index tajemna nebo zapnout další kategorii.</p>";
    return;
  }

  els.grid.innerHTML = places.map((place) => `
    <a class="place-card" href="${localizedPlacePath(place)}" data-id="${place.id}" data-place-id="${place.id}">
      <span class="score">${place.indexTajemna}</span>
      <h3>${localPlace(place, "nazev")}</h3>
      <p>${localPlace(place, "zeme")} · ${localPlace(place, "lead")}</p>
      <span class="tags">
        ${place.kategorie.map((tag) => `<span class="tag">${filterCategoryLabel(tag)}</span>`).join("")}
        ${(place.temata || []).slice(0, 2).map((tag) => `<span class="tag theme-tag">${filterThemeLabel(tag)}</span>`).join("")}
      </span>
    </a>
  `).join("");

}

function renderOverview() {
  const countries = new Set(state.places.map((place) => place.zeme));
  const continents = new Set(state.places.map((place) => place.kontinent));
  const avgMystery = Math.round(state.places.reduce((sum, place) => sum + place.indexTajemna, 0) / state.places.length);

  els.stats.innerHTML = [
    [t("stats.places", "Míst v databázi"), state.places.length],
    [t("stats.countries", "Zemí"), countries.size],
    [t("stats.continents", "Kontinentů"), continents.size],
    [t("stats.average", "Průměr tajemna"), `${avgMystery}/100`]
  ].map(([label, value]) => `
    <div class="stat">
      <strong>${value}</strong>
      <span>${label}</span>
    </div>
  `).join("");

  els.ranking.innerHTML = state.places
    .slice()
    .sort((a, b) => b.indexTajemna - a.indexTajemna)
    .slice(0, 6)
    .map((place, index) => compactLink(`${index + 1}. ${localPlace(place, "nazev")}`, `${place.indexTajemna}/100 · ${localPlace(place, "zeme")}`, localizedPlacePath(place), place.id))
    .join("");

  els.continents.innerHTML = groupBy(state.places, "kontinent")
    .map(([name, places]) => compactLink(name, countPlaces(places.length), `landing/kontinent-${slugify(name)}.html`))
    .join("");

  els.countries.innerHTML = groupBy(state.places, "zeme")
    .slice(0, 8)
    .map(([name, places]) => compactLink(name, countPlaces(places.length), `landing/zeme-${slugify(name)}.html`))
    .join("");

  const categoryMap = new Map();
  const themeMap = new Map();
  state.places.forEach((place) => {
    place.kategorie.forEach((category) => {
      categoryMap.set(category, (categoryMap.get(category) || 0) + 1);
    });
    (place.temata || []).forEach((theme) => {
      themeMap.set(theme, (themeMap.get(theme) || 0) + 1);
    });
  });
  els.categories.innerHTML = Array.from(categoryMap.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => compactLink(labelCategory(name), countPlaces(count), `landing/kategorie-${slugify(name)}.html`))
    .join("");

  els.themes.innerHTML = Array.from(themeMap.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => compactLink(labelTheme(name), countPlaces(count), `landing/tema-${slugify(name)}.html`))
    .join("");
}

function renderDetail() {
  const place = state.places.find((item) => item.id === state.activeId);
  if (!place) {
    els.detail.innerHTML = "<h2>Vyber místo</h2><p>Po výběru se zobrazí kompletní detail lokace.</p>";
    return;
  }

  els.detail.innerHTML = `
    <p class="eyebrow">MistoDetail</p>
    <h2>${localPlace(place, "nazev")}</h2>
    <p><strong>${localPlace(place, "zeme")} · ${localPlace(place, "kontinent")}</strong></p>
    <p><strong>${localPlace(place, "lead")}</strong></p>
    <div class="metric-grid">
      ${metric(t("metric.mystery", "Index tajemna"), `${place.indexTajemna}/100`)}
      ${metric(t("metric.activity", "Aktivita"), localPlace(place, "paranormalniAktivita"))}
      ${metric(t("metric.evidence", "Doloženost"), localPlace(place, "historickaDolozenost"))}
      ${metric(t("metric.danger", "Nebezpečnost"), localPlace(place, "nebezpecnost"))}
      ${metric(t("metric.access", "Přístupnost"), localPlace(place, "pristupnost"))}
      ${metric(t("metric.atmosphere", "Atmosféra"), `${place.atmosfera}/5`)}
      ${metric(t("metric.night", "Noční vhodnost"), place.nocniVhodnost ? t("common.yes", "ano") : t("common.no", "ne"))}
      ${metric(t("metric.kids", "Vhodné pro děti"), place.vhodneProDeti ? t("common.yes", "ano") : t("common.notReally", "spíše ne"))}
    </div>
    ${paranormalClaimPanel(place)}
    ${detailSection(t("detail.mystery", "Záhada místa"), localDescription(place, "zahada"))}
    ${detailSection(t("detail.history", "Historie"), localDescription(place, "historie"))}
    ${detailSection(t("detail.legend", "Legenda"), localDescription(place, "legenda"))}
    ${detailSection(t("detail.paranormal", "Paranormální svědectví"), localDescription(place, "paranormalni"))}
    ${detailSection(t("detail.skeptic", "Skeptické vysvětlení"), localDescription(place, "skepticke"))}
    ${detailSection(t("detail.practical", "Praktické info"), localPlace(place, "praktickeInfo"))}
    ${storySection(place)}
    <div class="detail-section">
      <h3>${t("detail.mapGps", "Mapa a GPS")}</h3>
      <p>${place.gps.lat.toFixed(5)}, ${place.gps.lon.toFixed(5)}</p>
      <a class="button secondary" target="_blank" rel="noreferrer" href="https://www.google.com/maps?q=${place.gps.lat},${place.gps.lon}">${t("detail.navigate", "Navigovat")}</a>
      <a class="button primary" href="${localizedPlacePath(place)}">${t("detail.openPage", "Otevřít vlastní stránku")}</a>
    </div>
    <div class="detail-section">
      <h3>${t("detail.sources", "Zdroje")}</h3>
      <p>${place.zdroje.map((source) => `<a target="_blank" rel="noreferrer" href="${source.url}">${source.nazev}</a>`).join(" · ")}</p>
    </div>
    <div class="detail-section">
      <button class="button primary" type="button" id="checkinButton">Check-in</button>
      <p id="checkinStatus">${t("checkin.ready", "GPS ověření bude napojeno na POST /api/checkin.")}</p>
    </div>
  `;

  document.querySelector("#checkinButton").addEventListener("click", handleCheckin);
}

function paranormalClaimPanel(place) {
  return `
    <div class="paranormal-claims compact-claims">
      <div>
        <p class="eyebrow">${t("detail.paranormalLayer", "Paranormální vrstva")}</p>
        <h3>${t("detail.paranormalClaims", "Co se o místě paranormálně tvrdí")}</h3>
        <p>${localDescription(place, "paranormalni")}</p>
      </div>
      <div class="claim-grid">
        <article>
          <strong>${t("detail.legendClaims", "Co se píše v legendách")}</strong>
          <span>${localDescription(place, "legenda")}</span>
        </article>
        <article>
          <strong>${t("detail.verifyClaims", "Jak to ověřujeme")}</strong>
          <span>${localDescription(place, "skepticke")}</span>
        </article>
      </div>
    </div>
  `;
}

function storySection(place) {
  if (!place.pribehy?.length) return "";
  return `
    <div class="detail-section">
      <h3>${t("detail.storyHooks", "Příběhy a motivy")}</h3>
      <div class="compact-list">
        ${place.pribehy.map((story) => `
          <div class="compact-link">
            <strong>${story.nazev}</strong>
            <span>${story.text}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function compactLink(title, meta, href, placeId = "") {
  return `
    <a class="compact-link" href="${href}" ${placeId ? `data-place-id="${placeId}"` : ""}>
      <strong>${title}</strong>
      <span>${meta}</span>
    </a>
  `;
}

function groupBy(items, key) {
  const groups = new Map();
  items.forEach((item) => {
    const value = item[key];
    if (!groups.has(value)) groups.set(value, []);
    groups.get(value).push(item);
  });
  return Array.from(groups.entries()).sort((a, b) => b[1].length - a[1].length);
}

function uniqueFlat(items, key) {
  return Array.from(new Set(items.flatMap((item) => item[key] || []))).sort((a, b) => String(a).localeCompare(String(b), "cs"));
}

const CATEGORY_LABELS = {
  cs: {
    hrad: "Hrady a zamky",
    podzemi: "Podzemi",
    priroda: "Prirodni mista",
    legenda: "Legendy",
    veznice: "Veznice",
    ostrov: "Ostrovy",
    katastrofa: "Katastrofy",
    historie: "Historie",
    "filmova-lokace": "Filmove lokace",
    "zakazane-zony": "Zakazane zony",
    "ztracena-mesta": "Ztracena mista"
  },
  en: {
    hrad: "Castles and chateaus",
    podzemi: "Underground",
    priroda: "Natural places",
    legenda: "Legends",
    veznice: "Prisons",
    ostrov: "Islands",
    katastrofa: "Disasters",
    historie: "History",
    "filmova-lokace": "Film locations",
    "zakazane-zony": "Forbidden zones",
    "ztracena-mesta": "Lost places"
  },
  de: {
    hrad: "Burgen und Schlosser",
    podzemi: "Untergrund",
    priroda: "Naturorte",
    legenda: "Legenden",
    veznice: "Gefangnisse",
    ostrov: "Inseln",
    katastrofa: "Katastrophen",
    historie: "Geschichte",
    "filmova-lokace": "Filmorte",
    "zakazane-zony": "Sperrzonen",
    "ztracena-mesta": "Verlorene Orte"
  },
  es: {
    hrad: "Castillos y palacios",
    podzemi: "Subterraneo",
    priroda: "Lugares naturales",
    legenda: "Leyendas",
    veznice: "Prisiones",
    ostrov: "Islas",
    katastrofa: "Desastres",
    historie: "Historia",
    "filmova-lokace": "Localizaciones de cine",
    "zakazane-zony": "Zonas prohibidas",
    "ztracena-mesta": "Lugares perdidos"
  },
  fr: {
    hrad: "Chateaux et palais",
    podzemi: "Souterrains",
    priroda: "Lieux naturels",
    legenda: "Legendes",
    veznice: "Prisons",
    ostrov: "Iles",
    katastrofa: "Catastrophes",
    historie: "Histoire",
    "filmova-lokace": "Lieux de tournage",
    "zakazane-zony": "Zones interdites",
    "ztracena-mesta": "Lieux perdus"
  }
};

const THEME_LABELS = {
  cs: {
    archeologie: "Archeologie", carodejnictvi: "Carodejnictvi", dabel: "Dabel", duchove: "Duchove", film: "Film", hrad: "Hrad", impakt: "Impakty", karantena: "Karantena", katastrofa: "Katastrofa", konspirace: "Konspirace", "kosmicka-anomalie": "Kosmicka anomalie", legenda: "Legenda", media: "Media", more: "More", mytologie: "Mytologie", nataceni: "Nataceni", nebezpeci: "Nebezpeci", oceany: "Oceany", okultismus: "Okultismus", ostrov: "Ostrov", pirati: "Pirati", podzemi: "Podzemi", poklad: "Poklad", politika: "Politika", popkultura: "Popkultura", poust: "Poust", "prirodni-anomalie": "Prirodni anomalie", "prirodni-labyrint": "Prirodni labyrint", prokleti: "Prokleti", pseudoveda: "Pseudoveda", ritual: "Ritualy", skeptic: "Skeptik", sopky: "Sopky", stredovek: "Stredovek", "tajne-spolecnosti": "Tajne spolecnosti", technologie: "Technologie", templari: "Templari", ufo: "UFO", umrti: "Smrt a pamet", valka: "Valka", veznice: "Veznice", vrazdy: "Vrazdy", "zakazane-zony": "Zakazane zony", zemetreseni: "Zemetreseni", zmizeni: "Zmizeni", "ztracena-mesta": "Ztracena mista", "ztracena-mista": "Ztracena mista", zvirata: "Zvirata"
  },
  en: {
    archeologie: "Archaeology", carodejnictvi: "Witchcraft", dabel: "Devil", duchove: "Ghosts", film: "Film", hrad: "Castle", impakt: "Impacts", karantena: "Quarantine", katastrofa: "Disaster", konspirace: "Conspiracy", "kosmicka-anomalie": "Cosmic anomaly", legenda: "Legend", media: "Media", more: "Sea", mytologie: "Mythology", nataceni: "Filming", nebezpeci: "Danger", oceany: "Oceans", okultismus: "Occultism", ostrov: "Island", pirati: "Pirates", podzemi: "Underground", poklad: "Treasure", politika: "Politics", popkultura: "Pop culture", poust: "Desert", "prirodni-anomalie": "Natural anomaly", "prirodni-labyrint": "Natural labyrinth", prokleti: "Curse", pseudoveda: "Pseudoscience", ritual: "Rituals", skeptic: "Skeptic", sopky: "Volcanoes", stredovek: "Middle Ages", "tajne-spolecnosti": "Secret societies", technologie: "Technology", templari: "Templars", ufo: "UFO", umrti: "Death and memory", valka: "War", veznice: "Prisons", vrazdy: "Murders", "zakazane-zony": "Forbidden zones", zemetreseni: "Earthquakes", zmizeni: "Disappearances", "ztracena-mesta": "Lost places", "ztracena-mista": "Lost places", zvirata: "Animals"
  },
  de: {
    archeologie: "Archaologie", carodejnictvi: "Hexerei", dabel: "Teufel", duchove: "Geister", film: "Film", hrad: "Burg", impakt: "Einschlage", karantena: "Quarantane", katastrofa: "Katastrophe", konspirace: "Verschworung", "kosmicka-anomalie": "Kosmische Anomalie", legenda: "Legende", media: "Medien", more: "Meer", mytologie: "Mythologie", nataceni: "Drehorte", nebezpeci: "Gefahr", oceany: "Ozeane", okultismus: "Okkultismus", ostrov: "Insel", pirati: "Piraten", podzemi: "Untergrund", poklad: "Schatz", politika: "Politik", popkultura: "Popkultur", poust: "Wuste", "prirodni-anomalie": "Naturliche Anomalie", "prirodni-labyrint": "Naturliches Labyrinth", prokleti: "Fluch", pseudoveda: "Pseudowissenschaft", ritual: "Rituale", skeptic: "Skeptik", sopky: "Vulkane", stredovek: "Mittelalter", "tajne-spolecnosti": "Geheimgesellschaften", technologie: "Technologie", templari: "Templer", ufo: "UFO", umrti: "Tod und Erinnerung", valka: "Krieg", veznice: "Gefangnisse", vrazdy: "Morde", "zakazane-zony": "Sperrzonen", zemetreseni: "Erdbeben", zmizeni: "Verschwinden", "ztracena-mesta": "Verlorene Orte", "ztracena-mista": "Verlorene Orte", zvirata: "Tiere"
  },
  es: {
    archeologie: "Arqueologia", carodejnictvi: "Brujeria", dabel: "Diablo", duchove: "Fantasmas", film: "Cine", hrad: "Castillo", impakt: "Impactos", karantena: "Cuarentena", katastrofa: "Catastrofe", konspirace: "Conspiracion", "kosmicka-anomalie": "Anomalia cosmica", legenda: "Leyenda", media: "Medios", more: "Mar", mytologie: "Mitologia", nataceni: "Rodaje", nebezpeci: "Peligro", oceany: "Oceanos", okultismus: "Ocultismo", ostrov: "Isla", pirati: "Piratas", podzemi: "Subterraneo", poklad: "Tesoro", politika: "Politica", popkultura: "Cultura pop", poust: "Desierto", "prirodni-anomalie": "Anomalia natural", "prirodni-labyrint": "Laberinto natural", prokleti: "Maldicion", pseudoveda: "Pseudociencia", ritual: "Rituales", skeptic: "Esceptico", sopky: "Volcanes", stredovek: "Edad Media", "tajne-spolecnosti": "Sociedades secretas", technologie: "Tecnologia", templari: "Templarios", ufo: "OVNI", umrti: "Muerte y memoria", valka: "Guerra", veznice: "Prisiones", vrazdy: "Asesinatos", "zakazane-zony": "Zonas prohibidas", zemetreseni: "Terremotos", zmizeni: "Desapariciones", "ztracena-mesta": "Lugares perdidos", "ztracena-mista": "Lugares perdidos", zvirata: "Animales"
  },
  fr: {
    archeologie: "Archeologie", carodejnictvi: "Sorcellerie", dabel: "Diable", duchove: "Fantomes", film: "Film", hrad: "Chateau", impakt: "Impacts", karantena: "Quarantaine", katastrofa: "Catastrophe", konspirace: "Conspiration", "kosmicka-anomalie": "Anomalie cosmique", legenda: "Legende", media: "Medias", more: "Mer", mytologie: "Mythologie", nataceni: "Tournage", nebezpeci: "Danger", oceany: "Oceans", okultismus: "Occultisme", ostrov: "Ile", pirati: "Pirates", podzemi: "Souterrain", poklad: "Tresor", politika: "Politique", popkultura: "Culture pop", poust: "Desert", "prirodni-anomalie": "Anomalie naturelle", "prirodni-labyrint": "Labyrinthe naturel", prokleti: "Malediction", pseudoveda: "Pseudoscience", ritual: "Rituels", skeptic: "Sceptique", sopky: "Volcans", stredovek: "Moyen Age", "tajne-spolecnosti": "Societes secretes", technologie: "Technologie", templari: "Templiers", ufo: "OVNI", umrti: "Mort et memoire", valka: "Guerre", veznice: "Prisons", vrazdy: "Meurtres", "zakazane-zony": "Zones interdites", zemetreseni: "Seismes", zmizeni: "Disparitions", "ztracena-mesta": "Lieux perdus", "ztracena-mista": "Lieux perdus", zvirata: "Animaux"
  }
};

function labelCategory(category) {
  const language = window.MysteryMapI18n?.language || "cs";
  return CATEGORY_LABELS[language]?.[category] || CATEGORY_LABELS.en[category] || category;
}

function labelTheme(theme) {
  const language = window.MysteryMapI18n?.language || "cs";
  return THEME_LABELS[language]?.[theme] || THEME_LABELS.en[theme] || theme;
}

function filterCategoryLabel(category) {
  const language = window.MysteryMapI18n?.language || "cs";
  return CATEGORY_LABELS[language]?.[category] || CATEGORY_LABELS.en[category] || category;
}

function filterThemeLabel(theme) {
  const language = window.MysteryMapI18n?.language || "cs";
  return THEME_LABELS[language]?.[theme] || THEME_LABELS.en[theme] || theme;
}

function primaryCategory(place) {
  return String(place.kategorie?.[0] || "legenda").replace(/[^a-z0-9-]/g, "");
}

function scoreBand(score) {
  if (score >= 90) return "critical";
  if (score >= 75) return "strong";
  return "standard";
}

const EXTRA_UI_LABELS = {
  cs: {
    "map.modeAll": "Vsechna mista",
    "map.modeMystery": "Zahady",
    "map.modeFilm": "Filmove lokace",
    "map.osmLabel": "Svetova mapa OpenStreetMap",
    "map.visiblePins": "Zobrazeno bodu",
    "map.legendPlace": "viditelne misto",
    "map.legendSelected": "vybrane misto"
  },
  en: {
    "map.modeAll": "All places",
    "map.modeMystery": "Mysteries",
    "map.modeFilm": "Film locations",
    "map.osmLabel": "OpenStreetMap world basemap",
    "map.visiblePins": "Pins shown",
    "map.legendPlace": "visible place",
    "map.legendSelected": "selected place"
  },
  de: {
    "map.modeAll": "Alle Orte",
    "map.modeMystery": "Mysterien",
    "map.modeFilm": "Filmorte",
    "map.osmLabel": "OpenStreetMap-Weltkarte",
    "map.visiblePins": "Angezeigte Punkte",
    "map.legendPlace": "sichtbarer Ort",
    "map.legendSelected": "ausgewahlter Ort"
  },
  es: {
    "map.modeAll": "Todos los lugares",
    "map.modeMystery": "Misterios",
    "map.modeFilm": "Lugares de cine",
    "map.osmLabel": "Mapa mundial de OpenStreetMap",
    "map.visiblePins": "Puntos visibles",
    "map.legendPlace": "lugar visible",
    "map.legendSelected": "lugar seleccionado"
  },
  fr: {
    "map.modeAll": "Tous les lieux",
    "map.modeMystery": "Mysteres",
    "map.modeFilm": "Lieux de tournage",
    "map.osmLabel": "Carte mondiale OpenStreetMap",
    "map.visiblePins": "Points affiches",
    "map.legendPlace": "lieu visible",
    "map.legendSelected": "lieu selectionne"
  }
};

function t(key, fallback) {
  const language = window.MysteryMapI18n?.language || "cs";
  const translated = window.MysteryMapI18n?.translate(key);
  if (translated && translated !== key) return translated;
  return EXTRA_UI_LABELS[language]?.[key] || EXTRA_UI_LABELS.en?.[key] || fallback || key;
}

function countPlaces(count) {
  const language = window.MysteryMapI18n?.language || "cs";
  if (language === "cs") return `${count} ${count === 1 ? "místo" : count < 5 ? "místa" : "míst"}`;
  if (language === "de") return `${count} ${count === 1 ? "Ort" : "Orte"}`;
  if (language === "es") return `${count} ${count === 1 ? "lugar" : "lugares"}`;
  if (language === "fr") return `${count} ${count === 1 ? "lieu" : "lieux"}`;
  return `${count} ${count === 1 ? "place" : "places"}`;
}

function localPlace(place, field) {
  const language = window.MysteryMapI18n?.language || "cs";
  if (!place.i18n?.[language]?.[field] && language === "de" && field === "lead") return generatedLead(place, language);
  if (!place.i18n?.[language]?.[field] && language === "de" && field === "praktickeInfo") return generatedDescription(place, "prakticke", language);
  return place.i18n?.[language]?.[field] || localValue(place[field], language);
}

function localDescription(place, field) {
  const language = window.MysteryMapI18n?.language || "cs";
  return place.i18n?.[language]?.popisy?.[field] || generatedDescription(place, field, language);
}

function localValue(value, language = window.MysteryMapI18n?.language || "cs") {
  if (value == null || language === "cs") return value;
  const normalized = String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const labels = {
    de: {
      cesko: "Tschechien",
      evropa: "Europa",
      afrika: "Afrika",
      asie: "Asien",
      "severni amerika": "Nordamerika",
      "jizni amerika": "Sudamerika",
      oceanie: "Ozeanien",
      vysoka: "hoch",
      stredni: "mittel",
      nizka: "niedrig",
      dobra: "gut",
      "velmi dobra": "sehr gut",
      "castecna": "teilweise",
      "placeny vstup": "kostenpflichtiger Eintritt",
      "oficialni prohlidkova trasa": "offizielle Besucherroute",
      "overit pred cestou": "vor der Reise prufen"
    }
  };
  return labels[language]?.[normalized] || value;
}

function generatedDescription(place, field, language = window.MysteryMapI18n?.language || "cs") {
  if (language === "de") {
    const name = localValue(place.nazev, language);
    const country = localValue(place.zeme, language);
    const themeList = (place.temata || []).slice(0, 3).map(filterThemeLabel).join(", ");
    const text = {
      zahada: `${name} ist ein Ort in ${country}, der auf MysteryMap wegen Themen wie ${themeList || "Legenden"} erfasst ist. Die Karte trennt lokale Erzahlungen von gesicherten Fakten und zeigt den Mystery-Index als Orientierung.`,
      historie: `${name} hat eine reale geografische und historische Grundlage. Fur die Bewertung werden Quellen, Lage, Zugang und bekannte Kontexte getrennt von modernen Legenden betrachtet.`,
      legenda: `Rund um ${name} werden lokale Geschichten und Motive wie ${themeList || "Legenden"} gesammelt. Sie werden als Erzahlungen dargestellt, nicht als bewiesene Tatsachen.`,
      paranormalni: `Paranormale Behauptungen zu ${name} werden als kulturelle oder lokale Berichte behandelt. Die Darstellung vermeidet, solche Aussagen als verifiziert auszugeben.`,
      skepticke: `Eine naheliegende skeptische Lesart sind Landschaft, Akustik, Geschichte, Medienwirkung und Erwartungshaltung der Besucher. MysteryMap markiert solche Punkte getrennt von der Legende.`,
      prakticke: `Prufe vor dem Besuch offizielle Regeln, Offnungszeiten, Zutritt und lokale Sicherheitshinweise. GPS: ${place.gps.lat.toFixed(5)}, ${place.gps.lon.toFixed(5)}.`
    };
    return text[field] || place.popisy?.[field] || "";
  }
  return place.popisy?.[field] || "";
}

function generatedLead(place, language = window.MysteryMapI18n?.language || "cs") {
  if (language === "de") {
    const country = localValue(place.zeme, language);
    const themes = (place.temata || []).slice(0, 2).map(filterThemeLabel).join(" und ");
    return `MysteryMap-Ort in ${country} mit Schwerpunkt ${themes || "Legenden"} und einem Mystery-Index von ${place.indexTajemna}/100.`;
  }
  return place.lead;
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function localizedPlacePath(place) {
  const language = window.MysteryMapI18n?.language || "cs";
  const route = localeRoutes[language] || localeRoutes.cs;
  const slug = place.localizedSlugs?.[language] || place.slug;
  return `/${language}/${route.placePrefix}/${slug}/`;
}

function renderBadges() {
  els.badges.innerHTML = badges.map(([title, text]) => `
    <div class="badge">
      <strong>${t(title, title)}</strong>
      <span>${t(text, text)}</span>
    </div>
  `).join("");
}

function selectPlace(id) {
  state.activeId = id;
  const place = state.places.find((item) => item.id === id);
  if (place?.gps) {
    state.mapCenter = { lat: place.gps.lat, lon: place.gps.lon };
    state.mapZoom = Math.max(state.mapZoom, 5);
  }
  render();
  document.querySelector("#mapa").scrollIntoView({ block: "start", behavior: "smooth" });
  document.querySelector("#detail").focus?.();
}

function zoomMap(delta) {
  state.mapZoom = clamp(state.mapZoom + delta, 2, 7);
  render();
}

function endMapDrag(event) {
  if (!state.mapDrag || state.mapDrag.pointerId !== event.pointerId) return;
  state.mapDrag = null;
  els.map.classList.remove("is-dragging");
}

function handleCheckin() {
  const status = document.querySelector("#checkinStatus");
  if (!navigator.geolocation) {
    status.textContent = t("checkin.unsupported", "Prohlížeč nepodporuje GPS. Použije se foto fallback.");
    return;
  }
  status.textContent = t("checkin.waiting", "Čekám na polohu...");
  navigator.geolocation.getCurrentPosition(
    () => {
      status.textContent = t("checkin.success", "Poloha načtena. V produkci se odešle spolu s fotkou na POST /api/checkin.");
    },
    () => {
      status.textContent = t("checkin.failed", "GPS se nepodařilo načíst. V produkci nabídneme ruční ověření fotkou.");
    },
    { enableHighAccuracy: true, timeout: 8000 }
  );
}

function metric(label, value) {
  return `<div class="metric"><span>${label}</span><strong>${value}</strong></div>`;
}

function detailSection(title, text) {
  return `<div class="detail-section"><h3>${title}</h3><p>${text}</p></div>`;
}

function projectLon(lon) {
  return clamp(((lon - mapBounds.lonMin) / (mapBounds.lonMax - mapBounds.lonMin)) * 100, 6, 94);
}

function projectLat(lat) {
  const mercatorLat = Math.log(Math.tan(Math.PI / 4 + (clamp(lat, -58, 72) * Math.PI / 180) / 2));
  const mercatorMin = Math.log(Math.tan(Math.PI / 4 + (mapBounds.latMin * Math.PI / 180) / 2));
  const mercatorMax = Math.log(Math.tan(Math.PI / 4 + (mapBounds.latMax * Math.PI / 180) / 2));
  return clamp((1 - ((mercatorLat - mercatorMin) / (mercatorMax - mercatorMin))) * 100, 8, 92);
}

function projectToWorldPixel(lat, lon, zoom) {
  const scale = 256 * (2 ** zoom);
  const safeLat = clamp(lat, -85.05112878, 85.05112878);
  const sin = Math.sin((safeLat * Math.PI) / 180);
  return {
    x: ((lon + 180) / 360) * scale,
    y: (0.5 - Math.log((1 + sin) / (1 - sin)) / (4 * Math.PI)) * scale
  };
}

function worldPixelToLatLon(x, y, zoom) {
  const scale = 256 * (2 ** zoom);
  const lon = ((x / scale) * 360 + 180) % 360 - 180;
  const n = Math.PI - (2 * Math.PI * clamp(y, 0, scale)) / scale;
  const lat = (180 / Math.PI) * Math.atan(Math.sinh(n));
  return { lat: clamp(lat, -85.05112878, 85.05112878), lon };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
