(function () {
  const storageKey = "mysterymap-expedition-plan";
  const labels = {
    cs: {
      navTrip: "Výprava", fast: "Rychlé vstupy", title: "Najdi trasu podle toho, co tě přitahuje",
      surprise: "Náhodný objev", openPlan: "Otevřít plán výpravy", plan: "Plán výpravy",
      planTitle: "Ulož si místa a poskládej vlastní trasu", planCopy: "Plán funguje lokálně v prohlížeči: vyber místa, ulož je do trasy a sdílej odkaz na aktuální výběr.",
      save: "Uložit vybrané místo", share: "Sdílet aktuální výběr", clear: "Vymazat plán", saved: "uložených míst",
      empty: "Zatím nemáš uložené žádné místo.", copied: "Odkaz zkopírován", remove: "Odebrat z plánu",
      weekend: ["Víkendové výpravy", "Hrady, legendy a místa s dobrou atmosférou pro první cestu."],
      skeptics: ["Skeptici a badatelé", "Lokace, kde se dobře oddělují fakta, legenda a vysvětlení."],
      film: ["Film a popkultura", "Místa spojená s natáčením, ikonami a příběhy médií."],
      dark: ["Temná historie", "Věznice, podzemí, zakázané zóny a paměť těžkých událostí."]
    },
    en: {
      navTrip: "Trip", fast: "Fast paths", title: "Find a route by what pulls you in",
      surprise: "Random discovery", openPlan: "Open trip plan", plan: "Trip plan",
      planTitle: "Save places and build your own route", planCopy: "The plan works locally in your browser: pick places, save them to a route and share the current selection.",
      save: "Save selected place", share: "Share current selection", clear: "Clear plan", saved: "saved places",
      empty: "No saved places yet.", copied: "Link copied", remove: "Remove from plan",
      weekend: ["Weekend expeditions", "Castles, legends and atmospheric places for a first trip."],
      skeptics: ["Skeptics and researchers", "Places where facts, legends and explanations can be compared."],
      film: ["Film and pop culture", "Locations connected to filming, icons and media stories."],
      dark: ["Dark history", "Prisons, underground sites, forbidden zones and difficult memory."]
    },
    de: {
      navTrip: "Tour", fast: "Schnelle Einstiege", title: "Finde eine Route nach deinem Interesse",
      surprise: "Zufällige Entdeckung", openPlan: "Tourplan öffnen", plan: "Tourplan",
      planTitle: "Orte speichern und eigene Route bauen", planCopy: "Der Plan läuft lokal im Browser: Orte auswählen, zur Route speichern und die Auswahl teilen.",
      save: "Ausgewählten Ort speichern", share: "Aktuelle Auswahl teilen", clear: "Plan löschen", saved: "gespeicherte Orte",
      empty: "Noch keine Orte gespeichert.", copied: "Link kopiert", remove: "Aus Plan entfernen", places: "Orte",
      weekend: ["Wochenendtouren", "Burgen, Legenden und atmosphärische Orte für die erste Reise."],
      skeptics: ["Skeptiker und Recherche", "Orte, an denen Fakten, Legenden und Erklärungen vergleichbar sind."],
      film: ["Film und Popkultur", "Drehorte, Ikonen und Geschichten aus den Medien."],
      dark: ["Dunkle Geschichte", "Gefängnisse, Untergrund, Sperrzonen und schwierige Erinnerung."]
    },
    es: {
      navTrip: "Ruta", fast: "Accesos rápidos", title: "Encuentra una ruta según lo que te atrae",
      surprise: "Descubrimiento aleatorio", openPlan: "Abrir plan de ruta", plan: "Plan de ruta",
      planTitle: "Guarda lugares y crea tu propia ruta", planCopy: "El plan funciona localmente en el navegador: elige lugares, guárdalos en una ruta y comparte la selección.",
      save: "Guardar lugar elegido", share: "Compartir selección", clear: "Borrar plan", saved: "lugares guardados",
      empty: "Todavía no hay lugares guardados.", copied: "Enlace copiado", remove: "Quitar del plan", places: "lugares",
      weekend: ["Escapadas de fin de semana", "Castillos, leyendas y lugares con atmósfera para empezar."],
      skeptics: ["Escépticos e investigadores", "Lugares donde comparar hechos, leyendas y explicaciones."],
      film: ["Cine y cultura pop", "Localizaciones vinculadas a rodajes, iconos e historias mediáticas."],
      dark: ["Historia oscura", "Prisiones, subsuelo, zonas prohibidas y memoria difícil."]
    },
    fr: {
      navTrip: "Parcours", fast: "Accès rapides", title: "Trouve un parcours selon ce qui t'attire",
      surprise: "Découverte aléatoire", openPlan: "Ouvrir le plan", plan: "Plan de parcours",
      planTitle: "Enregistre des lieux et compose ton parcours", planCopy: "Le plan fonctionne localement dans le navigateur : choisis des lieux, enregistre-les et partage la sélection.",
      save: "Enregistrer le lieu choisi", share: "Partager la sélection", clear: "Effacer le plan", saved: "lieux enregistrés",
      empty: "Aucun lieu enregistré pour l'instant.", copied: "Lien copié", remove: "Retirer du plan", places: "lieux",
      weekend: ["Week-ends d'exploration", "Châteaux, légendes et lieux d'ambiance pour une première sortie."],
      skeptics: ["Sceptiques et enquête", "Lieux où comparer faits, légendes et explications."],
      film: ["Film et culture pop", "Lieux liés aux tournages, icônes et récits médiatiques."],
      dark: ["Histoire sombre", "Prisons, souterrains, zones interdites et mémoire difficile."]
    }
  };
  labels.cs.places = "míst";
  labels.en.places = "places";
  const routes = { cs: "mista", en: "places", de: "orte", es: "lugares", fr: "lieux" };
  const segments = [
    ["weekend", ["hrad", "legenda", "priroda"], ["duchove", "prokleti"], 70],
    ["skeptics", ["historie", "priroda", "katastrofa"], ["skeptic", "pseudoveda", "prirodni-anomalie"], 55],
    ["film", ["filmova-lokace", "hrad", "priroda"], ["film", "nataceni", "popkultura"], 45],
    ["dark", ["veznice", "podzemi", "zakazane-zony"], ["vrazdy", "umrti", "valka"], 65]
  ];
  let places = [];
  let activeId = null;
  let saved = new Set(JSON.parse(localStorage.getItem(storageKey) || "[]"));

  const lang = () => labels[document.documentElement.lang] ? document.documentElement.lang : "en";
  const tx = (key) => labels[lang()][key] || labels.en[key] || key;
  const byId = (id) => document.getElementById(id);
  const savePlan = () => localStorage.setItem(storageKey, JSON.stringify([...saved]));

  document.addEventListener("DOMContentLoaded", init);
  document.addEventListener("mysterymap:language-change", renderAll);
  document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-place-id]");
    if (link) activeId = link.dataset.placeId || link.dataset.id || activeId;
  });

  async function init() {
    places = await fetch("data/mista.json").then((response) => response.json());
    activeId = places[0]?.id || null;
    hydrateUrl();
    bind();
    renderAll();
    new MutationObserver(renderDetailSave).observe(byId("detail"), { childList: true, subtree: true });
  }

  function bind() {
    byId("audienceGrid")?.addEventListener("click", (event) => {
      const card = event.target.closest("[data-audience]");
      if (card) applySegment(card.dataset.audience);
    });
    byId("surpriseButton")?.addEventListener("click", () => {
      const visible = document.querySelectorAll("[data-place-id]");
      const target = visible[Math.floor(Math.random() * visible.length)];
      target?.click();
    });
    byId("plannerShare")?.addEventListener("click", share);
    byId("plannerClear")?.addEventListener("click", () => {
      saved.clear();
      savePlan();
      renderPlanner();
      renderDetailSave();
    });
  }

  function renderAll() {
    const l = tx;
    document.querySelector('[href="#vyprava"][data-i18n]')?.replaceChildren(l("navTrip"));
    document.querySelector("#audience-title")?.replaceChildren(l("title"));
    document.querySelector("#objevovat .eyebrow")?.replaceChildren(l("fast"));
    byId("surpriseButton")?.replaceChildren(l("surprise"));
    document.querySelector('[href="#vyprava"].button')?.replaceChildren(l("openPlan"));
    document.querySelector("#vyprava .eyebrow")?.replaceChildren(l("plan"));
    byId("planner-title")?.replaceChildren(l("planTitle"));
    document.querySelector(".planner-copy p")?.replaceChildren(l("planCopy"));
    byId("plannerShare")?.replaceChildren(l("share"));
    byId("plannerClear")?.replaceChildren(l("clear"));
    renderAudience();
    renderPlanner();
    renderDetailSave();
  }

  function renderAudience() {
    const grid = byId("audienceGrid");
    if (!grid) return;
    grid.innerHTML = segments.map(([key, cats, themes, min]) => {
      const count = places.filter((place) => place.indexTajemna >= min && (place.kategorie.some((cat) => cats.includes(cat)) || (place.temata || []).some((theme) => themes.includes(theme)))).length;
      return `<button class="audience-card" type="button" data-audience="${key}"><strong>${tx(key)[0]}</strong><span>${tx(key)[1]}</span><small>${count} ${tx("places")}</small></button>`;
    }).join("");
  }

  function renderPlanner() {
    const list = byId("plannerList");
    if (!list) return;
    byId("savedCount").textContent = saved.size;
    document.querySelector('[data-i18n="planner.saved"]')?.replaceChildren(tx("saved"));
    const items = [...saved].map((id) => places.find((place) => place.id === id)).filter(Boolean);
    list.innerHTML = items.length ? items.map((place) => `<a class="compact-link" href="${placeUrl(place)}" data-place-id="${place.id}"><strong>${placeName(place)}</strong><span>${place.indexTajemna}/100 · ${placeCountry(place)}</span></a>`).join("") : `<p class="form-status">${tx("empty")}</p>`;
  }

  function renderDetailSave() {
    const detail = byId("detail");
    if (!detail || byId("detailSaveButton")) return;
    const section = detail.querySelector(".detail-section");
    if (!section) return;
    const button = document.createElement("button");
    button.className = "button secondary";
    button.type = "button";
    button.id = "detailSaveButton";
    button.textContent = saved.has(activeId) ? tx("remove") : tx("save");
    button.addEventListener("click", () => toggle(activeId));
    section.append(button);
  }

  function toggle(id) {
    if (!id) return;
    if (saved.has(id)) saved.delete(id);
    else saved.add(id);
    savePlan();
    renderPlanner();
    byId("detailSaveButton")?.remove();
    renderDetailSave();
  }

  function applySegment(key) {
    const segment = segments.find((item) => item[0] === key);
    if (!segment) return;
    const [, cats, themes, min] = segment;
    byId("search").value = "";
    byId("search").dispatchEvent(new Event("input", { bubbles: true }));
    byId("mysteryRange").value = min;
    byId("mysteryRange").dispatchEvent(new Event("input", { bubbles: true }));
    document.querySelectorAll(".filters:not(.theme-filters) input").forEach((input) => setChecked(input, cats.includes(input.value)));
    document.querySelectorAll(".theme-filters input").forEach((input) => setChecked(input, themes.includes(input.value)));
    byId("mapa").scrollIntoView({ block: "start", behavior: "smooth" });
  }

  function setChecked(input, checked) {
    if (input.checked === checked) return;
    input.checked = checked;
    input.dispatchEvent(new Event("change", { bubbles: true }));
  }

  function hydrateUrl() {
    const params = new URLSearchParams(location.search);
    if (params.get("plan")) {
      saved = new Set(params.get("plan").split(",").filter(Boolean));
      savePlan();
    }
    if (params.get("q")) {
      setTimeout(() => {
        byId("search").value = params.get("q");
        byId("search").dispatchEvent(new Event("input", { bubbles: true }));
      }, 300);
    }
  }

  async function share() {
    const params = new URLSearchParams();
    if (saved.size) params.set("plan", [...saved].join(","));
    const url = `${location.origin}${location.pathname}${params.toString() ? `?${params}` : ""}#vyprava`;
    if (navigator.share) return navigator.share({ title: "MysteryMap.online", url }).catch(() => {});
    await navigator.clipboard?.writeText(url);
    byId("plannerShare").textContent = tx("copied");
    setTimeout(() => byId("plannerShare").textContent = tx("share"), 1600);
  }

  function placeUrl(place) {
    const language = lang();
    const slug = place.localizedSlugs?.[language] || place.slug;
    return `/${language}/${routes[language] || routes.cs}/${slug}/`;
  }

  function placeName(place) {
    return place.i18n?.[lang()]?.nazev || place.nazev;
  }

  function placeCountry(place) {
    return place.i18n?.[lang()]?.zeme || place.zeme;
  }
}());
