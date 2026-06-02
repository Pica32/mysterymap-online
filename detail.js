const detailRoot = document.querySelector("#placeDetail");
const pathMatch = location.pathname.match(/\/mista\/([^/]+)\/?$/);
const pageId = document.body.dataset.placeId || new URLSearchParams(location.search).get("id") || pathMatch?.[1];

loadDetail();

async function loadDetail() {
  const response = await fetch("../../data/mista.json").catch(() => fetch("data/mista.json"));
  const places = await response.json();
  const place = places.find((item) => item.id === pageId) || places[0];

  document.title = `${localPlace(place, "nazev")} | MysteryMap.online`;
  document.querySelector("meta[name='description']")?.setAttribute("content", localPlace(place, "lead"));
  detailRoot.innerHTML = renderPlace(place);
  injectStructuredData(place);
  document.addEventListener("mysterymap:language-change", () => {
    document.title = `${localPlace(place, "nazev")} | MysteryMap.online`;
    document.querySelector("meta[name='description']")?.setAttribute("content", localPlace(place, "lead"));
    detailRoot.innerHTML = renderPlace(place);
  });
}

function renderPlace(place) {
  return `
    <section class="detail-hero">
      <p class="eyebrow">${localPlace(place, "kontinent")} · ${localPlace(place, "zeme")}</p>
      <h1>${localPlace(place, "nazev")}</h1>
      <p class="hero-copy">${localPlace(place, "lead")}</p>
      <div class="hero-actions">
        <a class="button primary" target="_blank" rel="noreferrer" href="https://www.google.com/maps?q=${place.gps.lat},${place.gps.lon}">${t("detail.navigate", "Navigovat")}</a>
        <a class="button secondary" href="/index.html#mapa">${t("detail.backMap", "Zpět na mapu")}</a>
      </div>
    </section>
    <section class="places-section detail-page-body">
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
      ${section(t("detail.mystery", "Záhada místa"), localDescription(place, "zahada"))}
      ${section(t("detail.history", "Historie"), localDescription(place, "historie"))}
      ${section(t("detail.legend", "Legenda"), localDescription(place, "legenda"))}
      ${section(t("detail.paranormal", "Paranormální svědectví"), localDescription(place, "paranormalni"))}
      ${section(t("detail.skeptic", "Skeptické vysvětlení"), localDescription(place, "skepticke"))}
      ${section(t("detail.practical", "Praktické info"), localPlace(place, "praktickeInfo"))}
      <article class="detail-section">
        <h2>${t("detail.mapGps", "Mapa a GPS")}</h2>
        <p>${place.gps.lat.toFixed(5)}, ${place.gps.lon.toFixed(5)}</p>
      </article>
      <article class="detail-section">
        <h2>${t("detail.sources", "Zdroje")}</h2>
        <p>${place.zdroje.map((source) => `<a target="_blank" rel="noreferrer" href="${source.url}">${source.nazev}</a>`).join(" · ")}</p>
      </article>
    </section>
  `;
}

function metric(label, value) {
  return `<div class="metric"><span>${label}</span><strong>${value}</strong></div>`;
}

function section(title, text) {
  return `<article class="detail-section"><h2>${title}</h2><p>${text}</p></article>`;
}

function t(key, fallback) {
  return window.MysteryMapI18n?.translate(key) || fallback || key;
}

function localPlace(place, field) {
  const language = window.MysteryMapI18n?.language || "cs";
  return place.i18n?.[language]?.[field] || place[field];
}

function localDescription(place, field) {
  const language = window.MysteryMapI18n?.language || "cs";
  return place.i18n?.[language]?.popisy?.[field] || place.popisy[field];
}

function injectStructuredData(place) {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": localPlace(place, "nazev"),
    "description": localPlace(place, "lead"),
    "url": `https://mysterymap.online${place.detailPath}`,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": place.gps.lat,
      "longitude": place.gps.lon
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": place.zeme
    }
  });
  document.head.append(script);
}
