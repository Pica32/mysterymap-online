const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const places = JSON.parse(fs.readFileSync(path.join(root, "data", "mista.json"), "utf8").replace(/^\uFEFF/, ""));
const articles = JSON.parse(fs.readFileSync(path.join(root, "data", "articles.json"), "utf8").replace(/^\uFEFF/, ""));
const sources = JSON.parse(fs.readFileSync(path.join(root, "data", "source-catalog.json"), "utf8").replace(/^\uFEFF/, ""));
const siteUrl = "https://mysterymap.online";
const locales = {
  cs: { placePrefix: "mista", articlePrefix: "clanky", label: "Čeština" },
  en: { placePrefix: "places", articlePrefix: "articles", label: "English" },
  de: { placePrefix: "orte", articlePrefix: "artikel", label: "Deutsch" },
  es: { placePrefix: "lugares", articlePrefix: "articulos", label: "Español" },
  fr: { placePrefix: "lieux", articlePrefix: "articles", label: "Français" }
};

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeFile(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, "utf8");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function absoluteUrl(url) {
  return `${siteUrl}${url}`;
}

function localizedSlug(item, language) {
  return item.localizedSlugs?.[language] || item.slug;
}

function placePath(place, language = "cs") {
  const locale = locales[language] || locales.cs;
  return `/${language}/${locale.placePrefix}/${localizedSlug(place, language)}/`;
}

function articlePath(article, language = "cs") {
  const locale = locales[language] || locales.cs;
  return `/${language}/${locale.articlePrefix}/${localizedSlug(article, language)}/`;
}

function hreflangLinks(item, kind) {
  const pathFn = kind === "article" ? articlePath : placePath;
  return `${Object.keys(locales).map((language) => `<link rel="alternate" hreflang="${language}" href="${escapeHtml(absoluteUrl(pathFn(item, language)))}">`).join("\n    ")}
    <link rel="alternate" hreflang="x-default" href="${escapeHtml(absoluteUrl(pathFn(item, "en")))}">`;
}

const uiText = {
  cs: {
    mystery: "Záhada místa",
    history: "Historie",
    legend: "Legenda",
    paranormal: "Paranormální svědectví",
    skeptic: "Skeptické vysvětlení",
    practical: "Praktické info",
    gps: "Mapa a GPS",
    sources: "Zdroje a licence",
    sourceIntro: "Zdroje slouží k ověření faktů a orientace. Text stránky není kopie zdrojových textů.",
    trustTitle: "Ověřený redakční profil místa",
    trustCopy: "Text je vlastní redakční zpracování. Fakta, GPS a praktické informace jsou oddělené od legend a interpretací. Každá stránka obsahuje skeptické vysvětlení a explicitní zdroje.",
    contentType: "Typ obsahu",
    themes: "Motivy",
    sourceCount: "Počet zdrojů",
    lastBuild: "Poslední build",
    storyHooks: "Příběhy a motivy",
    paranormalLayer: "Paranormální vrstva",
    paranormalClaims: "Co se o místě paranormálně tvrdí",
    legendClaims: "Co se píše v legendách",
    verifyClaims: "Jak to ověřujeme",
    mysteryIndex: "Index tajemna",
    activity: "Aktivita",
    evidence: "Doloženost",
    danger: "Nebezpečnost",
    access: "Přístupnost",
    atmosphere: "Atmosféra",
    night: "Noční vhodnost",
    kids: "Vhodné pro děti",
    yes: "ano",
    no: "ne",
    notReally: "spíše ne",
    navigate: "Otevřít navigaci",
    backMap: "Zpět na mapu",
    continueTitle: "Pokračovat v objevování",
    continueCopy: "Porovnej podobná místa, otevři mapu nebo si z lokace udělej další bod výpravy.",
    moreInCountry: "Další místa v zemi",
    moreInCategory: "Podobná kategorie"
  },
  en: {
    mystery: "Mystery of the Place",
    history: "History",
    legend: "Legend",
    paranormal: "Paranormal Claims",
    skeptic: "Skeptical Explanation",
    practical: "Practical Information",
    gps: "Map and GPS",
    sources: "Sources and Licenses",
    sourceIntro: "Sources are used to verify facts, orientation and provenance. The page text is original editorial work, not copied source prose.",
    trustTitle: "Verified Editorial Place Profile",
    trustCopy: "This is original editorial writing. Facts, GPS and practical information are separated from legends and interpretations. Each page includes skeptical context and explicit sources.",
    contentType: "Content type",
    themes: "Themes",
    sourceCount: "Source count",
    lastBuild: "Last build",
    storyHooks: "Stories and Motifs",
    paranormalLayer: "Paranormal Layer",
    paranormalClaims: "What people claim happens here",
    legendClaims: "What the legends say",
    verifyClaims: "How we verify it",
    mysteryIndex: "Mystery index",
    activity: "Activity",
    evidence: "Evidence",
    danger: "Risk",
    access: "Access",
    atmosphere: "Atmosphere",
    night: "Night suitability",
    kids: "Suitable for children",
    yes: "yes",
    no: "no",
    notReally: "not really",
    navigate: "Open navigation",
    backMap: "Back to map",
    continueTitle: "Continue exploring",
    continueCopy: "Compare related places, open the map or turn this location into the next point of a trip.",
    moreInCountry: "More places in this country",
    moreInCategory: "Similar category"
  },
  de: {
    mystery: "Rätsel des Ortes",
    history: "Geschichte",
    legend: "Legende",
    paranormal: "Paranormale Behauptungen",
    skeptic: "Skeptische Erklärung",
    practical: "Praktische Informationen",
    gps: "Karte und GPS",
    sources: "Quellen und Lizenzen",
    sourceIntro: "Quellen dienen zur Prüfung von Fakten, Orientierung und Herkunft. Der Seitentext ist eigenständige Redaktion, keine Kopie fremder Texte.",
    trustTitle: "Geprüftes redaktionelles Ortsprofil",
    trustCopy: "Fakten, GPS und praktische Informationen werden von Legenden und Interpretationen getrennt. Jede Seite enthält skeptischen Kontext und klare Quellen.",
    contentType: "Inhaltstyp",
    themes: "Motive",
    sourceCount: "Quellenanzahl",
    lastBuild: "Letzter Build",
    storyHooks: "Geschichten und Motive",
    paranormalLayer: "Paranormale Ebene",
    paranormalClaims: "Was Menschen hier behaupten",
    legendClaims: "Was die Legenden sagen",
    verifyClaims: "Wie wir es prüfen",
    mysteryIndex: "Mystery-Index",
    activity: "Aktivität",
    evidence: "Beleglage",
    danger: "Risiko",
    access: "Zugang",
    atmosphere: "Atmosphäre",
    night: "Nachttauglichkeit",
    kids: "Für Kinder geeignet",
    yes: "ja",
    no: "nein",
    notReally: "eher nicht",
    navigate: "Navigation öffnen",
    backMap: "Zurück zur Karte",
    continueTitle: "Weiter entdecken",
    continueCopy: "Vergleiche verwandte Orte, öffne die Karte oder nutze diesen Ort als nächsten Tourpunkt.",
    moreInCountry: "Weitere Orte im Land",
    moreInCategory: "Ähnliche Kategorie"
  },
  es: {
    mystery: "Misterio del lugar",
    history: "Historia",
    legend: "Leyenda",
    paranormal: "Afirmaciones paranormales",
    skeptic: "Explicación escéptica",
    practical: "Información práctica",
    gps: "Mapa y GPS",
    sources: "Fuentes y licencias",
    sourceIntro: "Las fuentes sirven para verificar hechos, orientación y procedencia. El texto de la página es redacción original, no copia de fuentes.",
    trustTitle: "Perfil editorial verificado del lugar",
    trustCopy: "Los hechos, GPS e información práctica se separan de leyendas e interpretaciones. Cada página incluye contexto escéptico y fuentes explícitas.",
    contentType: "Tipo de contenido",
    themes: "Motivos",
    sourceCount: "Número de fuentes",
    lastBuild: "Última compilación",
    storyHooks: "Historias y motivos",
    paranormalLayer: "Capa paranormal",
    paranormalClaims: "Qué se afirma que ocurre aquí",
    legendClaims: "Qué dicen las leyendas",
    verifyClaims: "Cómo lo verificamos",
    mysteryIndex: "Índice de misterio",
    activity: "Actividad",
    evidence: "Evidencia",
    danger: "Riesgo",
    access: "Acceso",
    atmosphere: "Atmósfera",
    night: "Apto de noche",
    kids: "Apto para niños",
    yes: "sí",
    no: "no",
    notReally: "no del todo",
    navigate: "Abrir navegación",
    backMap: "Volver al mapa",
    continueTitle: "Seguir explorando",
    continueCopy: "Compara lugares relacionados, abre el mapa o convierte esta ubicación en el siguiente punto de una ruta.",
    moreInCountry: "Más lugares del país",
    moreInCategory: "Categoría similar"
  },
  fr: {
    mystery: "Mystère du lieu",
    history: "Histoire",
    legend: "Légende",
    paranormal: "Affirmations paranormales",
    skeptic: "Explication sceptique",
    practical: "Informations pratiques",
    gps: "Carte et GPS",
    sources: "Sources et licences",
    sourceIntro: "Les sources servent à vérifier les faits, l'orientation et la provenance. Le texte de la page est une rédaction originale, pas une copie.",
    trustTitle: "Profil éditorial vérifié du lieu",
    trustCopy: "Les faits, le GPS et les informations pratiques sont séparés des légendes et interprétations. Chaque page inclut un contexte sceptique et des sources explicites.",
    contentType: "Type de contenu",
    themes: "Motifs",
    sourceCount: "Nombre de sources",
    lastBuild: "Dernier build",
    storyHooks: "Histoires et motifs",
    paranormalLayer: "Couche paranormale",
    paranormalClaims: "Ce que l'on affirme ici",
    legendClaims: "Ce que disent les légendes",
    verifyClaims: "Comment nous vérifions",
    mysteryIndex: "Indice de mystère",
    activity: "Activité",
    evidence: "Niveau de preuve",
    danger: "Risque",
    access: "Accès",
    atmosphere: "Atmosphère",
    night: "Adapté la nuit",
    kids: "Adapté aux enfants",
    yes: "oui",
    no: "non",
    notReally: "plutôt non",
    navigate: "Ouvrir la navigation",
    backMap: "Retour à la carte",
    continueTitle: "Continuer l'exploration",
    continueCopy: "Compare des lieux proches, ouvre la carte ou transforme ce lieu en prochain point de parcours.",
    moreInCountry: "Autres lieux du pays",
    moreInCategory: "Catégorie similaire"
  }
};

function tt(language, key) {
  return uiText[language]?.[key] || uiText.en[key] || uiText.cs[key] || key;
}

function placeField(place, field, language) {
  if (language === "cs") return place[field];
  return place.i18n?.[language]?.[field] || generatedPlaceField(place, field, language);
}

function placeDescription(place, field, language) {
  if (language === "cs") return place.popisy[field];
  return place.i18n?.[language]?.popisy?.[field] || generatedPlaceDescription(place, field, language);
}

function generatedPlaceField(place, field, language) {
  if (field === "nazev") return place.nazev;
  if (field === "zeme" || field === "kontinent") return place[field];
  const topic = (place.temata || []).slice(0, 3).join(", ");
  const templates = {
    lead: {
      en: `${place.nazev} is a MysteryMap profile in ${place.zeme}, focused on ${topic || "legends, history and disputed claims"}. The page separates facts, legends, paranormal reports and skeptical context.`,
      de: `${place.nazev} ist ein MysteryMap-Profil in ${place.zeme} mit Fokus auf ${topic || "Legenden, Geschichte und umstrittene Behauptungen"}. Die Seite trennt Fakten, Legenden, paranormale Berichte und skeptischen Kontext.`,
      es: `${place.nazev} es un perfil de MysteryMap en ${place.zeme}, centrado en ${topic || "leyendas, historia y afirmaciones discutidas"}. La página separa hechos, leyendas, relatos paranormales y contexto escéptico.`,
      fr: `${place.nazev} est un profil MysteryMap en ${place.zeme}, consacré à ${topic || "des légendes, de l'histoire et des affirmations discutées"}. La page sépare les faits, les légendes, les récits paranormaux et le contexte sceptique.`
    },
    praktickeInfo: {
      en: `Check current access rules, safety restrictions and official local information before visiting ${place.nazev}. Use the GPS coordinates as orientation, not as permission to enter restricted areas.`,
      de: `Prüfe vor einem Besuch von ${place.nazev} aktuelle Zugangsregeln, Sicherheitsbeschränkungen und offizielle lokale Informationen. GPS-Koordinaten dienen der Orientierung, nicht als Erlaubnis für gesperrte Bereiche.`,
      es: `Antes de visitar ${place.nazev}, comprueba las normas de acceso, restricciones de seguridad e información oficial local. Las coordenadas GPS orientan, pero no autorizan el acceso a zonas restringidas.`,
      fr: `Avant de visiter ${place.nazev}, vérifiez les règles d'accès, les restrictions de sécurité et les informations officielles locales. Les coordonnées GPS servent d'orientation, pas d'autorisation d'entrer dans des zones interdites.`
    }
  };
  return templates[field]?.[language] || place[field];
}

function generatedPlaceDescription(place, field, language) {
  const theme = (place.temata || []).slice(0, 3).join(", ");
  const base = {
    en: {
      zahada: `${place.nazev} is treated as a mystery location because its public story combines place, atmosphere and recurring claims around ${theme}. MysteryMap presents the location as a layered profile rather than a single sensational answer.`,
      historie: `The historical layer records what can be described from published sources and stable place data. It gives the reader context before moving into folklore, witness reports or later internet interpretations.`,
      legenda: `The legend layer collects what people say, repeat or associate with the place. These claims are presented as legend and cultural memory, not as verified fact.`,
      paranormalni: `Paranormal claims around ${place.nazev} are shown as reports and interpretations: unusual feelings, sounds, apparitions, lights or stories depending on the location. They are visible because readers look for them, but they remain separated from documented history.`,
      skepticke: `The skeptical layer looks for natural, historical, psychological or media-based explanations. It does not erase the legend; it shows which parts are documented and which parts need caution.`
    },
    de: {
      zahada: `${place.nazev} gilt hier als rätselhafter Ort, weil seine öffentliche Erzählung Ort, Atmosphäre und wiederkehrende Behauptungen rund um ${theme} verbindet.`,
      historie: `Die historische Ebene sammelt, was aus veröffentlichten Quellen und stabilen Ortsdaten beschrieben werden kann. Sie gibt Kontext, bevor Folklore oder spätere Internetdeutungen folgen.`,
      legenda: `Die Legendenebene zeigt, was über den Ort erzählt, wiederholt oder mit ihm verbunden wird. Diese Aussagen werden als Legende und kulturelle Erinnerung markiert, nicht als gesicherte Tatsache.`,
      paranormalni: `Paranormale Behauptungen zu ${place.nazev} erscheinen als Berichte und Deutungen: ungewöhnliche Gefühle, Geräusche, Erscheinungen, Lichter oder ortsabhängige Geschichten.`,
      skepticke: `Die skeptische Ebene sucht natürliche, historische, psychologische oder mediale Erklärungen. Sie löscht die Legende nicht, sondern trennt Belegtes von Vorsichtspflichtigem.`
    },
    es: {
      zahada: `${place.nazev} se trata como lugar misterioso porque su relato público combina ubicación, atmósfera y afirmaciones recurrentes sobre ${theme}.`,
      historie: `La capa histórica reúne lo que puede describirse con fuentes publicadas y datos estables del lugar. Aporta contexto antes de pasar al folclore o a interpretaciones modernas.`,
      legenda: `La capa legendaria recoge lo que se cuenta, repite o asocia con el lugar. Estas afirmaciones se presentan como leyenda y memoria cultural, no como hecho verificado.`,
      paranormalni: `Las afirmaciones paranormales sobre ${place.nazev} se muestran como relatos e interpretaciones: sensaciones extrañas, sonidos, apariciones, luces o historias según el lugar.`,
      skepticke: `La capa escéptica busca explicaciones naturales, históricas, psicológicas o mediáticas. No borra la leyenda; separa lo documentado de lo que exige cautela.`
    },
    fr: {
      zahada: `${place.nazev} est traité comme un lieu mystérieux parce que son récit public combine lieu, atmosphère et affirmations récurrentes autour de ${theme}.`,
      historie: `La couche historique rassemble ce qui peut être décrit à partir de sources publiées et de données stables. Elle donne le contexte avant le folklore ou les interprétations modernes.`,
      legenda: `La couche légendaire présente ce que l'on raconte, répète ou associe au lieu. Ces affirmations sont marquées comme légende et mémoire culturelle, pas comme fait vérifié.`,
      paranormalni: `Les affirmations paranormales autour de ${place.nazev} sont présentées comme des récits et interprétations : sensations étranges, sons, apparitions, lumières ou histoires selon le lieu.`,
      skepticke: `La couche sceptique cherche des explications naturelles, historiques, psychologiques ou médiatiques. Elle ne supprime pas la légende ; elle sépare le documenté de ce qui demande prudence.`
    }
  };
  return base[language]?.[field] || place.popisy[field];
}

function visualKey(value) {
  const key = slugify(value || "mystery");
  const aliases = {
    "kosmicka-anomalie": "cosmic",
    "impakt": "cosmic",
    "ufo": "cosmic",
    "zemetreseni": "disaster",
    "sopky": "disaster",
    "oceany": "ocean",
    "zmizeni": "vanishings",
    "umrti": "crime",
    "vrazdy": "crime",
    "dabel": "occult",
    "prokleti": "occult",
    "duchove": "haunting",
    "templari": "orders",
    "tajne-spolecnosti": "orders",
    "iluminati": "orders",
    "plocha-zeme": "skeptic",
    "antiteorie": "skeptic",
    "pseudoveda": "skeptic",
    "komunita": "community",
    "zdroje": "community",
    "mytologie": "myth",
    "ztracena-mesta": "myth",
    "podzemi": "haunting",
    "zakazane-zony": "skeptic",
    "prirodni-anomalie": "disaster",
    "svedectvi": "vanishings",
    "film": "film",
    "nataceni": "film",
    "filmova-lokace": "film"
  };
  return aliases[key] || key;
}

function articleThemeClass(article) {
  return `theme-${visualKey(article.themes?.[0] || article.category)}`;
}

function placeThemeClass(place) {
  return `theme-${visualKey(place.temata?.[0] || place.kategorie?.[0])}`;
}

function sourceLinks(place) {
  return place.zdroje
    .map((source) => `<li><a href="${escapeHtml(source.url)}" rel="nofollow noopener" target="_blank">${escapeHtml(source.nazev)}</a> <span>${escapeHtml(source.licence || "licence neuvedena")}</span></li>`)
    .join("");
}

function metric(label, value) {
  return `<div class="metric"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`;
}

function heroBackgroundStyle(image) {
  if (!image?.url) return "";
  return `style="background-image: linear-gradient(90deg, rgba(17, 23, 19, 0.95) 0%, rgba(17, 23, 19, 0.68) 52%, rgba(17, 23, 19, 0.22) 100%), linear-gradient(0deg, var(--bg) 0%, rgba(17, 23, 19, 0) 35%), url('${escapeHtml(image.url)}'), image-set(url('/assets/hero-mystery-map-1000.webp') type('image/webp') 1x, url('/assets/hero-mystery-map-1600.webp') type('image/webp') 2x, url('/assets/hero-mystery-map.png') type('image/png') 2x);"`;
}

function photoCredit(image) {
  if (!image?.url) return "";
  return `<p class="photo-credit">Foto: <a href="${escapeHtml(image.sourceUrl || image.url)}" target="_blank" rel="noreferrer">${escapeHtml(image.author || "autor neuveden")}</a> · ${escapeHtml(image.license || "licence neuvedena")}</p>`;
}

function paranormalClaimPanel(place, language = "cs") {
  return `
    <section class="paranormal-claims" aria-labelledby="paranormal-claims-title">
      <div>
        <p class="eyebrow">${escapeHtml(tt(language, "paranormalLayer"))}</p>
        <h2 id="paranormal-claims-title">${escapeHtml(tt(language, "paranormalClaims"))}</h2>
        <p>${escapeHtml(placeDescription(place, "paranormalni", language))}</p>
      </div>
      <div class="claim-grid">
        <article>
          <strong>${escapeHtml(tt(language, "legendClaims"))}</strong>
          <span>${escapeHtml(placeDescription(place, "legenda", language))}</span>
        </article>
        <article>
          <strong>${escapeHtml(tt(language, "verifyClaims"))}</strong>
          <span>${escapeHtml(placeDescription(place, "skepticke", language))}</span>
        </article>
      </div>
    </section>`;
}

function storyList(place, language = "cs") {
  if (!place.pribehy?.length) return "";
  return `
    <section class="detail-section" id="pribehy">
      <h2>${escapeHtml(tt(language, "storyHooks"))}</h2>
      <div class="compact-list">
        ${place.pribehy.map((story) => `
          <article class="compact-link">
            <strong>${escapeHtml(story.nazev)}</strong>
            <span>${escapeHtml(story.text)}</span>
          </article>
        `).join("")}
      </div>
    </section>`;
}

function continueDiscovery(place, language = "cs") {
  const countryItems = places
    .filter((item) => item.id !== place.id && item.zeme === place.zeme)
    .sort((a, b) => b.indexTajemna - a.indexTajemna)
    .slice(0, 3);
  const categoryItems = places
    .filter((item) => item.id !== place.id && item.kategorie.some((category) => place.kategorie.includes(category)))
    .sort((a, b) => b.indexTajemna - a.indexTajemna)
    .slice(0, 3);
  const links = [
    ...countryItems.map((item) => discoveryLink(item, language, tt(language, "moreInCountry"))),
    ...categoryItems.map((item) => discoveryLink(item, language, tt(language, "moreInCategory")))
  ].slice(0, 6);
  if (!links.length) return "";
  return `
    <section class="detail-section continue-panel" id="dalsi-objevovani">
      <div>
        <p class="eyebrow">Next steps</p>
        <h2>${escapeHtml(tt(language, "continueTitle"))}</h2>
        <p>${escapeHtml(tt(language, "continueCopy"))}</p>
        <div class="hero-actions">
          <a class="button primary" href="/index.html#mapa">${escapeHtml(tt(language, "backMap"))}</a>
          <a class="button secondary" href="/index.html#vyprava">Výprava</a>
        </div>
      </div>
      <div class="compact-list">${links.join("")}</div>
    </section>`;
}

function discoveryLink(place, language, label) {
  return `
    <a class="compact-link" href="${escapeHtml(placePath(place, language))}">
      <strong>${escapeHtml(placeField(place, "nazev", language))}</strong>
      <span>${escapeHtml(label)} · ${place.indexTajemna}/100 · ${escapeHtml(placeField(place, "zeme", language))}</span>
    </a>`;
}

function jsonLd(place, language = "cs") {
  const currentPath = placePath(place, language);
  const graph = [
    {
      "@type": "WebPage",
      "@id": `${absoluteUrl(currentPath)}#webpage`,
      "url": absoluteUrl(currentPath),
      "name": `${place.nazev} | MysteryMap.online`,
      "description": place.lead,
      "inLanguage": language,
      "isPartOf": { "@id": `${siteUrl}/#website` },
      "dateModified": new Date().toISOString().slice(0, 10),
      "about": { "@id": `${absoluteUrl(currentPath)}#place` },
      "breadcrumb": { "@id": `${absoluteUrl(currentPath)}#breadcrumb` }
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": "MysteryMap.online",
      "description": "Mapa tajemných míst, katastrof, legend a anomálií světa."
    },
    {
      "@type": "TouristAttraction",
      "@id": `${absoluteUrl(currentPath)}#place`,
      "name": place.nazev,
      "description": place.lead,
      "url": absoluteUrl(currentPath),
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": place.gps.lat,
        "longitude": place.gps.lon
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": place.zeme
      },
      "subjectOf": place.zdroje.map((source) => ({
        "@type": "CreativeWork",
        "name": source.nazev,
        "url": source.url,
        "license": source.licence
      }))
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${absoluteUrl(currentPath)}#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "MysteryMap.online", "item": siteUrl },
        { "@type": "ListItem", "position": 2, "name": place.kontinent, "item": absoluteUrl(`/landing/kontinent-${slugify(place.kontinent)}.html`) },
        { "@type": "ListItem", "position": 3, "name": place.zeme, "item": absoluteUrl(`/landing/zeme-${slugify(place.zeme)}.html`) },
        { "@type": "ListItem", "position": 4, "name": place.nazev, "item": absoluteUrl(currentPath) }
      ]
    }
  ];

  return `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}</script>`;
}

function articleJsonLd(article, language = "cs") {
  const currentPath = articlePath(article, language);
  return `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "url": absoluteUrl(currentPath),
    "inLanguage": language,
    "dateModified": new Date().toISOString().slice(0, 10),
    "publisher": {
      "@type": "Organization",
      "name": "MysteryMap.online",
      "url": siteUrl
    },
    "mainEntityOfPage": absoluteUrl(currentPath),
    "about": article.themes
  })}</script>`;
}

function pageShell({ title, description, body, script = "", canonical = "/", structuredData = "", ogType = "website", alternates = "", bodyClass = "", language = "cs" }) {
  return `<!doctype html>
<html lang="${escapeHtml(language)}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}">
    <meta name="robots" content="index,follow,max-image-preview:large">
    <link rel="canonical" href="${escapeHtml(absoluteUrl(canonical))}">
    ${alternates}
    <meta property="og:type" content="${escapeHtml(ogType)}">
    <meta property="og:site_name" content="MysteryMap.online">
    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:url" content="${escapeHtml(absoluteUrl(canonical))}">
    <meta property="og:image" content="${siteUrl}/assets/hero-mystery-map.png">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="preload" href="/assets/hero-mystery-map-1600.webp" as="image" type="image/webp">
    <link rel="stylesheet" href="/styles.css?v=20260527-map5">
    ${structuredData}
  </head>
  <body class="${escapeHtml(bodyClass)}">
    <header class="site-header">
      <a class="brand" href="/index.html">
        <span class="brand-mark" aria-hidden="true">?</span>
        <span>MysteryMap.online</span>
      </a>
      <nav class="nav-menu" aria-label="Hlavní navigace">
        <a href="/index.html#mapa" data-i18n="nav.map">Mapa</a>
        <a href="/index.html#mista" data-i18n="nav.places">Místa</a>
        <a href="/index.html#zebricky" data-i18n="nav.rankings">Žebříčky</a>
        <a href="/index.html#vyprava">Výprava</a>
        <a href="/docs/sources.md" data-i18n="detail.sources">Zdroje</a>
      </nav>
      <label class="language-select" for="languageSelect">
        <span data-i18n="language.label">Jazyk</span>
        <select id="languageSelect" aria-label="Jazyk webu">
          <option value="cs">Čeština</option>
          <option value="en">English</option>
          <option value="de">Deutsch</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
        </select>
      </label>
    </header>
    ${body}
    <script src="/i18n.js?v=20260527-map5" defer></script>
    ${script}
  </body>
</html>
`;
}

function placePage(place, language = "cs") {
  const canonicalPath = placePath(place, language);
  const themeClass = placeThemeClass(place);
  const heroImage = place.obrazky?.[0];
  const title = `${placeField(place, "nazev", language)}: ${tt(language, "mystery").toLowerCase()}, GPS, ${tt(language, "sources").toLowerCase()}`;
  const description = `${placeField(place, "lead", language)} ${tt(language, "history")}, ${tt(language, "legend").toLowerCase()}, ${tt(language, "skeptic").toLowerCase()}, GPS.`;
  const body = `
    <main>
      <article>
        <section class="detail-hero ${themeClass}" ${heroBackgroundStyle(heroImage)}>
          <p class="eyebrow">${escapeHtml(placeField(place, "kontinent", language))} · ${escapeHtml(placeField(place, "zeme", language))}</p>
          <h1>${escapeHtml(placeField(place, "nazev", language))}</h1>
          <p class="hero-copy">${escapeHtml(placeField(place, "lead", language))}</p>
          ${photoCredit(heroImage)}
          <div class="hero-actions">
            <a class="button primary" target="_blank" rel="noreferrer" href="https://www.google.com/maps?q=${place.gps.lat},${place.gps.lon}">${escapeHtml(tt(language, "navigate"))}</a>
            <a class="button secondary" href="/index.html#mapa">${escapeHtml(tt(language, "backMap"))}</a>
          </div>
        </section>
        <section class="places-section detail-page-body">
          <nav class="breadcrumb" aria-label="Drobečková navigace">
            <a href="/">MysteryMap.online</a>
            <span>›</span>
            <a href="/landing/kontinent-${slugify(place.kontinent)}.html">${escapeHtml(place.kontinent)}</a>
            <span>›</span>
            <a href="/landing/zeme-${slugify(place.zeme)}.html">${escapeHtml(place.zeme)}</a>
            <span>›</span>
            <span>${escapeHtml(place.nazev)}</span>
          </nav>
          <section class="trust-panel" aria-labelledby="trust-title">
            <div>
              <p class="eyebrow">E-E-A-T</p>
              <h2 id="trust-title">${escapeHtml(tt(language, "trustTitle"))}</h2>
              <p>${escapeHtml(tt(language, "trustCopy"))}</p>
            </div>
            <dl>
              <div><dt>${escapeHtml(tt(language, "contentType"))}</dt><dd>${escapeHtml(place.kategorie.join(", "))}</dd></div>
              <div><dt>${escapeHtml(tt(language, "themes"))}</dt><dd>${escapeHtml((place.temata || []).join(", "))}</dd></div>
              <div><dt>${escapeHtml(tt(language, "sourceCount"))}</dt><dd>${place.zdroje.length}</dd></div>
              <div><dt>${escapeHtml(tt(language, "lastBuild"))}</dt><dd>${new Date().toISOString().slice(0, 10)}</dd></div>
            </dl>
          </section>
          <div class="metric-grid">
            ${metric(tt(language, "mysteryIndex"), `${place.indexTajemna}/100`)}
            ${metric(tt(language, "activity"), place.paranormalniAktivita)}
            ${metric(tt(language, "evidence"), place.historickaDolozenost)}
            ${metric(tt(language, "danger"), place.nebezpecnost)}
            ${metric(tt(language, "access"), place.pristupnost)}
            ${metric(tt(language, "atmosphere"), `${place.atmosfera}/5`)}
            ${metric(tt(language, "night"), place.nocniVhodnost ? tt(language, "yes") : tt(language, "no"))}
            ${metric(tt(language, "kids"), place.vhodneProDeti ? tt(language, "yes") : tt(language, "notReally"))}
          </div>
          ${paranormalClaimPanel(place, language)}
          <section class="detail-section" id="zahada"><h2>${escapeHtml(tt(language, "mystery"))}</h2><p>${escapeHtml(placeDescription(place, "zahada", language))}</p></section>
          <section class="detail-section" id="historie"><h2>${escapeHtml(tt(language, "history"))}</h2><p>${escapeHtml(placeDescription(place, "historie", language))}</p></section>
          <section class="detail-section" id="legenda"><h2>${escapeHtml(tt(language, "legend"))}</h2><p>${escapeHtml(placeDescription(place, "legenda", language))}</p></section>
          <section class="detail-section" id="svedectvi"><h2>${escapeHtml(tt(language, "paranormal"))}</h2><p>${escapeHtml(placeDescription(place, "paranormalni", language))}</p></section>
          <section class="detail-section" id="skepticke-vysvetleni"><h2>${escapeHtml(tt(language, "skeptic"))}</h2><p>${escapeHtml(placeDescription(place, "skepticke", language))}</p></section>
          <section class="detail-section" id="prakticke-info"><h2>${escapeHtml(tt(language, "practical"))}</h2><p>${escapeHtml(placeField(place, "praktickeInfo", language))}</p></section>
          ${storyList(place, language)}
          <section class="detail-section" id="gps">
            <h2>${escapeHtml(tt(language, "gps"))}</h2>
            <p><strong>GPS:</strong> ${place.gps.lat.toFixed(5)}, ${place.gps.lon.toFixed(5)}</p>
            <p><a class="button secondary" target="_blank" rel="noreferrer" href="https://www.google.com/maps?q=${place.gps.lat},${place.gps.lon}">${escapeHtml(tt(language, "navigate"))}</a></p>
          </section>
          <section class="detail-section source-section" id="zdroje">
            <h2>${escapeHtml(tt(language, "sources"))}</h2>
            <p>${escapeHtml(tt(language, "sourceIntro"))}</p>
            <ul>${sourceLinks(place)}</ul>
          </section>
          ${continueDiscovery(place, language)}
        </section>
      </article>
    </main>`;

  return pageShell({
    title,
    description,
    body,
    canonical: canonicalPath,
    structuredData: jsonLd(place, language),
    alternates: hreflangLinks(place, "place"),
    ogType: "article",
    bodyClass: themeClass,
    language,
    script: `<script>document.body.dataset.placeId=${JSON.stringify(place.id)};</script><script src="/detail.js?v=20260527-map5" defer></script>`
  });
}

function landingPage(title, description, items, canonical) {
  const cards = items
    .sort((a, b) => b.indexTajemna - a.indexTajemna)
    .map((place) => `
      <a class="place-card" href="${place.detailPath}">
        <span class="score">${place.indexTajemna}</span>
        <h3>${escapeHtml(place.nazev)}</h3>
        <p>${escapeHtml(place.zeme)} · ${escapeHtml(place.lead)}</p>
        <span class="tags">${place.kategorie.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</span>
      </a>
    `)
    .join("");

  return pageShell({
    title: `${title} | MysteryMap.online`,
    description,
    canonical,
    body: `
      <main>
        <section class="detail-hero">
          <p class="eyebrow">MysteryMap landing page</p>
          <h1>${escapeHtml(title)}</h1>
          <p class="hero-copy">${escapeHtml(description)}</p>
          <div class="hero-actions">
            <a class="button primary" href="/index.html#mapa">Otevřít mapu</a>
            <a class="button secondary" href="/index.html#zebricky">Další žebříčky</a>
          </div>
        </section>
        <section class="places-section">
          <div class="places-grid">${cards}</div>
        </section>
      </main>`
  });
}

function articlePage(article, language = "cs") {
  const canonicalPath = articlePath(article, language);
  const themeClass = articleThemeClass(article);
  const relatedPlaces = (article.relatedPlaceIds || [])
    .map((id) => places.find((place) => place.id === id))
    .filter(Boolean);
  const relatedSources = (article.sources || [])
    .map((id) => sources.find((source) => source.id === id))
    .filter(Boolean);

  const body = `
    <main>
      <article>
        <section class="detail-hero article-hero ${themeClass}">
          <p class="eyebrow">${escapeHtml(article.category)} · ${escapeHtml(article.themes.join(", "))}</p>
          <h1>${escapeHtml(article.title)}</h1>
          <p class="hero-copy">${escapeHtml(article.description)}</p>
        </section>
        <section class="places-section detail-page-body">
          <nav class="breadcrumb" aria-label="Drobečková navigace">
            <a href="/">MysteryMap.online</a>
            <span>›</span>
            <a href="/${language}/${locales[language].articlePrefix}/">Články</a>
            <span>›</span>
            <span>${escapeHtml(article.title)}</span>
          </nav>
          <section class="trust-panel" aria-labelledby="article-trust-title">
            <div>
              <p class="eyebrow">E-E-A-T</p>
              <h2 id="article-trust-title">Redakční průvodce s ověřitelnými zdroji</h2>
              <p>Článek propojuje publikované stránky, autoritativní zdroje a redakční metodiku. Neslouží jako senzacechtivý seznam, ale jako orientační rozcestník pro čtenáře i vyhledávače.</p>
            </div>
            <dl>
              <div><dt>Téma</dt><dd>${escapeHtml(article.themes.join(", "))}</dd></div>
              <div><dt>Napojená místa</dt><dd>${relatedPlaces.length}</dd></div>
              <div><dt>Zdrojové registry</dt><dd>${relatedSources.length}</dd></div>
              <div><dt>Poslední build</dt><dd>${new Date().toISOString().slice(0, 10)}</dd></div>
            </dl>
          </section>
          ${article.sections.map((section) => `
            <section class="detail-section">
              <h2>${escapeHtml(section.heading)}</h2>
              <p>${escapeHtml(section.body)}</p>
            </section>
          `).join("")}
          <section class="detail-section">
            <h2>Související místa</h2>
            <div class="places-grid article-related-grid">
              ${relatedPlaces.map((place) => `
                <a class="place-card" href="${placePath(place, language)}">
                  <span class="score">${place.indexTajemna}</span>
                  <h3>${escapeHtml(place.nazev)}</h3>
                  <p>${escapeHtml(place.zeme)} · ${escapeHtml(place.lead)}</p>
                </a>
              `).join("")}
            </div>
          </section>
          <section class="detail-section source-section">
            <h2>Zdrojové registry</h2>
            <ul>
              ${relatedSources.map((source) => `
                <li><a href="${escapeHtml(source.url || "#")}" rel="nofollow noopener" target="_blank">${escapeHtml(source.name)}</a> <span>${escapeHtml(source.license)}</span></li>
              `).join("")}
            </ul>
          </section>
        </section>
      </article>
    </main>`;

  return pageShell({
    title: `${article.title} | MysteryMap.online`,
    description: article.description,
    body,
    canonical: canonicalPath,
    structuredData: articleJsonLd(article, language),
    alternates: hreflangLinks(article, "article"),
    ogType: "article",
    bodyClass: themeClass
  });
}

function articleIndexPage(language = "cs") {
  const body = `
    <main>
      <section class="detail-hero article-hero">
        <p class="eyebrow">MysteryMap magazín</p>
        <h1>Články o tajemných místech, katastrofách a legendách</h1>
        <p class="hero-copy">Redakční průvodce propojují místa, motivy, zdroje a skeptická vysvětlení do větších tematických celků.</p>
      </section>
      <section class="places-section">
        <div class="places-grid">
          ${articles.map((article) => `
            <a class="place-card" href="${articlePath(article, language)}">
              <span class="score">${article.sections.length}</span>
              <h3>${escapeHtml(article.title)}</h3>
              <p>${escapeHtml(article.description)}</p>
              <span class="tags">${article.themes.map((theme) => `<span class="tag theme-tag">${escapeHtml(theme)}</span>`).join("")}</span>
            </a>
          `).join("")}
        </div>
      </section>
    </main>`;

  return pageShell({
    title: "Články o tajemných místech | MysteryMap.online",
    description: "Redakční články a průvodce k tajemným místům, katastrofám, legendám, zdrojům a skeptickému ověřování.",
    body,
    canonical: `/${language}/${locales[language].articlePrefix}/`
  });
}

function groupBy(items, key) {
  const groups = new Map();
  items.forEach((item) => {
    const value = item[key];
    if (!groups.has(value)) groups.set(value, []);
    groups.get(value).push(item);
  });
  return groups;
}

function categoryLabel(category) {
  return {
    hrad: "Tajemné hrady a zámky",
    podzemi: "Tajemná podzemí",
    priroda: "Tajemná přírodní místa",
    legenda: "Místa opředená legendami",
    veznice: "Tajemné věznice",
    ostrov: "Tajemné ostrovy",
    katastrofa: "Katastrofy a anomálie"
  }[category] || `Tajemná místa: ${category}`;
}

function themeLabel(theme) {
  return {
    dabel: "Ďábel a pekelné motivy",
    vrazdy: "Vraždy a nevyřešené zločiny",
    duchove: "Duchové a přízraky",
    prokleti: "Prokletí a osudová místa",
    "tajne-spolecnosti": "Tajné společnosti",
    templari: "Templáři",
    iluminati: "Ilumináti",
    alchymie: "Alchymie",
    karantena: "Karanténa a izolace",
    valka: "Válka a násilné dějiny",
    zemetreseni: "Zemětřesení",
    "kosmicka-anomalie": "Kosmické anomálie",
    impakt: "Dopady a exploze z vesmíru",
    sopky: "Sopky a geologické katastrofy",
    ritual: "Rituály a ochranné předměty",
    "prirodni-labyrint": "Přírodní labyrinty",
    veznice: "Věznice jako temný motiv",
    podzemi: "Podzemí jako temný motiv"
  }[theme] || `Tajemný motiv: ${theme}`;
}

Object.keys(locales).forEach((language) => {
  places.forEach((place) => {
    writeFile(path.join(root, placePath(place, language), "index.html"), placePage(place, language));
  });
  writeFile(path.join(root, language, locales[language].articlePrefix, "index.html"), articleIndexPage(language));
  articles.forEach((article) => {
    writeFile(path.join(root, articlePath(article, language), "index.html"), articlePage(article, language));
  });
});

places.forEach((place) => {
  writeFile(path.join(root, place.detailPath, "index.html"), placePage(place, "cs"));
});
writeFile(path.join(root, "clanky", "index.html"), articleIndexPage("cs"));
articles.forEach((article) => {
  writeFile(path.join(root, "clanky", article.slug, "index.html"), articlePage(article, "cs"));
});

for (const [continent, items] of groupBy(places, "kontinent")) {
  writeFile(
    path.join(root, "landing", `kontinent-${slugify(continent)}.html`),
    landingPage(
      `Tajemná místa: ${continent}`,
      `Nejzajímavější tajemná místa v regionu ${continent}: legendy, historie, GPS a ověřené zdroje.`,
      items,
      `/landing/kontinent-${slugify(continent)}.html`
    )
  );
}

for (const [country, items] of groupBy(places, "zeme")) {
  writeFile(
    path.join(root, "landing", `zeme-${slugify(country)}.html`),
    landingPage(
      `Tajemná místa: ${country}`,
      `Mapa tajemných míst v zemi ${country}: legendy, historie, GPS, praktické informace a ověřené zdroje.`,
      items,
      `/landing/zeme-${slugify(country)}.html`
    )
  );
}

const categoryMap = new Map();
const themeMap = new Map();
places.forEach((place) => {
  place.kategorie.forEach((category) => {
    if (!categoryMap.has(category)) categoryMap.set(category, []);
    categoryMap.get(category).push(place);
  });
  (place.temata || []).forEach((theme) => {
    if (!themeMap.has(theme)) themeMap.set(theme, []);
    themeMap.get(theme).push(place);
  });
});

for (const [category, items] of categoryMap) {
  writeFile(
    path.join(root, "landing", `kategorie-${slugify(category)}.html`),
    landingPage(
      categoryLabel(category),
      `Přehled míst v kategorii ${categoryLabel(category).toLowerCase()} s mapou, GPS, legendami a zdroji.`,
      items,
      `/landing/kategorie-${slugify(category)}.html`
    )
  );
}

for (const [theme, items] of themeMap) {
  writeFile(
    path.join(root, "landing", `tema-${slugify(theme)}.html`),
    landingPage(
      themeLabel(theme),
      `Místa propojená motivem ${themeLabel(theme).toLowerCase()}: příběhy, historie, GPS, zdroje a skeptické vysvětlení.`,
      items,
      `/landing/tema-${slugify(theme)}.html`
    )
  );
}

const sitemapUrls = [
  "/",
  "/clanky/",
  ...Object.keys(locales).flatMap((language) => [
    `/${language}/${locales[language].articlePrefix}/`,
    ...articles.map((article) => articlePath(article, language)),
    ...places.map((place) => placePath(place, language))
  ]),
  ...articles.map((article) => `/clanky/${article.slug}/`),
  ...places.map((place) => place.detailPath),
  ...Array.from(groupBy(places, "kontinent").keys()).map((name) => `/landing/kontinent-${slugify(name)}.html`),
  ...Array.from(groupBy(places, "zeme").keys()).map((name) => `/landing/zeme-${slugify(name)}.html`),
  ...Array.from(categoryMap.keys()).map((name) => `/landing/kategorie-${slugify(name)}.html`),
  ...Array.from(themeMap.keys()).map((name) => `/landing/tema-${slugify(name)}.html`)
];

const searchIndex = places.map((place) => ({
  id: place.id,
  slug: place.slug,
  title: place.nazev,
  country: place.zeme,
  continent: place.kontinent,
  url: place.detailPath,
  urls: Object.fromEntries(Object.keys(locales).map((language) => [language, placePath(place, language)])),
  categories: place.kategorie,
  themes: place.temata || [],
  mysteryScore: place.indexTajemna,
  coordinates: place.gps,
  summary: place.lead
}));

const articleSearchIndex = articles.map((article) => ({
  id: article.id,
  slug: article.slug,
  title: article.title,
  url: `/clanky/${article.slug}/`,
  urls: Object.fromEntries(Object.keys(locales).map((language) => [language, articlePath(article, language)])),
  categories: [article.category],
  themes: article.themes,
  summary: article.description,
  type: "article"
}));

writeFile(path.join(root, "data", "search-index.json"), `${JSON.stringify([...searchIndex.map((item) => ({ ...item, type: "place" })), ...articleSearchIndex])}\n`);

writeFile(
  path.join(root, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map((url) => `  <url><loc>${siteUrl}${url}</loc></url>`).join("\n")}
</urlset>
`
);

writeFile(
  path.join(root, "llms.txt"),
  `# MysteryMap.online

MysteryMap.online is a multilingual map and editorial database of mysterious places, disasters, legends, anomalies and historically sensitive locations.

## Core Pages

- Home: ${siteUrl}/
- Sitemap: ${siteUrl}/sitemap.xml
- Robots: ${siteUrl}/robots.txt
- Source policy: ${siteUrl}/docs/source-database.md
- Editorial workflow: ${siteUrl}/docs/editorial-workflow.md
- Community rules: ${siteUrl}/docs/community.md
- Articles: ${siteUrl}/clanky/
- English articles: ${siteUrl}/en/articles/
- German articles: ${siteUrl}/de/artikel/
- Spanish articles: ${siteUrl}/es/articulos/
- French articles: ${siteUrl}/fr/articles/

## Important Landing Pages

${Array.from(categoryMap.keys()).map((name) => `- Category ${name}: ${siteUrl}/landing/kategorie-${slugify(name)}.html`).join("\n")}
${Array.from(themeMap.keys()).map((name) => `- Theme ${name}: ${siteUrl}/landing/tema-${slugify(name)}.html`).join("\n")}

## Representative Place Pages

${places.slice().sort((a, b) => b.indexTajemna - a.indexTajemna).slice(0, 20).map((place) => `- ${place.nazev}: ${siteUrl}${placePath(place, "en")} (CS: ${siteUrl}${placePath(place, "cs")})`).join("\n")}

## Editorial Articles

${articles.map((article) => `- ${article.title}: ${siteUrl}${articlePath(article, "en")} (CS: ${siteUrl}${articlePath(article, "cs")})`).join("\n")}

## Use Notes

Use MysteryMap pages as curated summaries with explicit citations. Treat legends, paranormal reports and skeptical explanations as separate sections. Do not merge speculation into factual history.
`
);

console.log(`Generated ${places.length} place pages, ${articles.length} articles, ${categoryMap.size} category pages, ${themeMap.size} theme pages, ${groupBy(places, "kontinent").size} continent pages and ${groupBy(places, "zeme").size} country pages.`);
