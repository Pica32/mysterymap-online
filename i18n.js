const SUPPORTED_LANGUAGES = ["cs", "en", "de", "es", "fr"];
const DEFAULT_LANGUAGE = "cs";

const I18N = {
  cs: {
    "language.label": "Jazyk",
    "nav.map": "Mapa",
    "nav.places": "Místa",
    "nav.rankings": "Žebříčky",
    "nav.profile": "Profil",
    "nav.method": "Metodika",
    "hero.eyebrow": "Světové legendy, fakta a terénní výpravy",
    "hero.title": "Tajemná místa světa v jedné mapě",
    "hero.copy": "Objevuj hrady, věznice, ostrovy, lesy, katakomby a pověsti s citovanými zdroji, skeptickým vysvětlením a praktickou navigací.",
    "hero.openMap": "Otevřít mapu",
    "hero.browse": "Prohlížet lokace",
    "filters.searchLabel": "Hledat místo",
    "filters.searchPlaceholder": "Hrad, ostrov, země, legenda...",
    "filters.categories": "Kategorie",
    "filters.themes": "Motivy",
    "filters.mysteryIndex": "Index tajemna",
    "category.hrad": "Hrady",
    "category.hradLong": "Hrady a zámky",
    "category.podzemi": "Podzemí",
    "category.priroda": "Příroda",
    "category.prirodaLong": "Přírodní místa",
    "category.legenda": "Legendy",
    "category.veznice": "Věznice",
    "category.ostrov": "Ostrovy",
    "category.katastrofa": "Katastrofy",
    "map.title": "Světová mapa výprav",
    "places.eyebrow": "Databáze",
    "places.title": "Vybrané světové lokace pro MVP",
    "rankings.title": "Žebříčky a vstupní stránky",
    "rankings.top": "Nejtajemnější místa",
    "rankings.continents": "Podle kontinentu",
    "rankings.categories": "Podle kategorie",
    "rankings.themes": "Podle motivu",
    "rankings.countries": "Podle země",
    "profile.title": "Sbírej odznaky za ověřené návštěvy po světě",
    "profile.copy": "Check-in funguje jako návrh budoucí funkce: GPS poloha, fotka z místa a geofence kontrola. V MVP je připravený frontendový prototyp.",
    "method.eyebrow": "Právní a redakční základ",
    "method.title": "Obsah bez kopírování cizích databází",
    "method.sourcesTitle": "Otevřené zdroje",
    "method.sourcesCopy": "Každé místo drží vlastní texty a pole zdroje. Základní fakta se ověřují přes Wikidata, OSM, Wikipedii, Wikimedia Commons, oficiální web lokality a veřejné památkové databáze.",
    "method.editorialTitle": "Redakční kvalita",
    "method.editorialCopy": "Legenda a atmosféra jsou oddělené od historie. Každá záhada má skeptické vysvětlení, aby web nepůsobil jako nekritický katalog pověstí.",
    "method.seoTitle": "SEO struktura",
    "method.seoCopy": "Detail místa má stabilní slug, citace, GPS, praktické info a hodnoticí metriky. To vytváří dobrý základ pro landing pages podle zemí, kontinentů a kategorií.",
    "stats.places": "Míst v databázi",
    "stats.countries": "Zemí",
    "stats.continents": "Kontinentů",
    "stats.average": "Průměr tajemna",
    "metric.mystery": "Index tajemna",
    "metric.activity": "Aktivita",
    "metric.evidence": "Doloženost",
    "metric.danger": "Nebezpečnost",
    "metric.access": "Přístupnost",
    "metric.atmosphere": "Atmosféra",
    "metric.night": "Noční vhodnost",
    "metric.kids": "Vhodné pro děti",
    "detail.mystery": "Záhada místa",
    "detail.history": "Historie",
    "detail.legend": "Legenda",
    "detail.paranormal": "Paranormální svědectví",
    "detail.skeptic": "Skeptické vysvětlení",
    "detail.practical": "Praktické info",
    "detail.mapGps": "Mapa a GPS",
    "detail.navigate": "Navigovat",
    "detail.backMap": "Zpět na mapu",
    "detail.openPage": "Otevřít vlastní stránku",
    "detail.sources": "Zdroje",
    "detail.storyHooks": "Příběhy a motivy",
    "theme.dabel": "Ďábel",
    "theme.vrazdy": "Vraždy",
    "theme.duchove": "Duchové",
    "theme.prokleti": "Prokletí",
    "theme.tajneSpolecnosti": "Tajné společnosti",
    "theme.templari": "Templáři",
    "theme.iluminati": "Ilumináti",
    "theme.alchymie": "Alchymie",
    "theme.karantena": "Karanténa",
    "theme.valka": "Válka",
    "theme.zemetreseni": "Zemětřesení",
    "theme.kosmickaAnomalie": "Kosmická anomálie",
    "theme.impakt": "Impakty",
    "theme.sopky": "Sopky",
    "theme.plochaZeme": "Plochá Země",
    "theme.konspirace": "Konspirace",
    "theme.antiteorie": "Antiteorie",
    "theme.pseudoveda": "Pseudověda",
    "theme.ritual": "Rituály",
    "theme.prirodniLabyrint": "Přírodní labyrint",
    "theme.veznice": "Věznice",
    "theme.podzemi": "Podzemí",
    "community.eyebrow": "Komunita",
    "community.title": "Navrhni tajemné místo",
    "community.placeName": "Název místa",
    "community.country": "Země",
    "community.story": "Krátký příběh nebo důvod",
    "community.source": "Zdroj / odkaz",
    "community.submit": "Uložit návrh lokálně",
    "community.status": "Návrhy se zatím ukládají do prohlížeče. Produkčně půjdou do moderace.",
    "community.saved": "Návrh je uložený lokálně a v produkci by šel do moderace.",
    "common.yes": "ano",
    "common.no": "ne",
    "common.notReally": "spíše ne",
    "checkin.ready": "GPS ověření bude napojeno na POST /api/checkin.",
    "checkin.unsupported": "Prohlížeč nepodporuje GPS. Použije se foto fallback.",
    "checkin.waiting": "Čekám na polohu...",
    "checkin.success": "Poloha načtena. V produkci se odešle spolu s fotkou na POST /api/checkin.",
    "checkin.failed": "GPS se nepodařilo načíst. V produkci nabídneme ruční ověření fotkou.",
    "badge.first": "První stopa",
    "badge.firstMeta": "1 ověřená návštěva",
    "badge.night": "Noční hlídka",
    "badge.nightMeta": "Check-in po setmění",
    "badge.skeptic": "Skeptik v terénu",
    "badge.skepticMeta": "3 místa se zdroji",
    "badge.cartographer": "Kartograf záhad",
    "badge.cartographerMeta": "10 krajů v profilu"
  },
  en: {
    "language.label": "Language",
    "nav.map": "Map",
    "nav.places": "Places",
    "nav.rankings": "Rankings",
    "nav.profile": "Profile",
    "nav.method": "Method",
    "hero.eyebrow": "World legends, facts and field trips",
    "hero.title": "Mysterious places of the world on one map",
    "hero.copy": "Explore castles, prisons, islands, forests, catacombs and legends with cited sources, skeptical explanations and practical navigation.",
    "hero.openMap": "Open map",
    "hero.browse": "Browse places",
    "filters.searchLabel": "Search place",
    "filters.searchPlaceholder": "Castle, island, country, legend...",
    "filters.categories": "Categories",
    "filters.themes": "Themes",
    "filters.mysteryIndex": "Mystery index",
    "category.hrad": "Castles",
    "category.hradLong": "Castles and chateaus",
    "category.podzemi": "Underground",
    "category.priroda": "Nature",
    "category.prirodaLong": "Natural places",
    "category.legenda": "Legends",
    "category.veznice": "Prisons",
    "category.ostrov": "Islands",
    "category.katastrofa": "Disasters",
    "map.title": "World expedition map",
    "places.eyebrow": "Database",
    "places.title": "Selected world locations for the MVP",
    "rankings.title": "Rankings and landing pages",
    "rankings.top": "Most mysterious places",
    "rankings.continents": "By continent",
    "rankings.categories": "By category",
    "rankings.themes": "By theme",
    "rankings.countries": "By country",
    "profile.title": "Collect badges for verified visits worldwide",
    "profile.copy": "Check-in is a future feature concept: GPS position, on-site photo and geofence verification. The MVP includes a frontend prototype.",
    "method.eyebrow": "Legal and editorial foundation",
    "method.title": "Content without copying third-party databases",
    "method.sourcesTitle": "Open sources",
    "method.sourcesCopy": "Each place keeps original text and source fields. Core facts are verified through Wikidata, OSM, Wikipedia, Wikimedia Commons, official location websites and public heritage databases.",
    "method.editorialTitle": "Editorial quality",
    "method.editorialCopy": "Legend and atmosphere are separated from history. Every mystery includes a skeptical explanation so the site does not become an uncritical folklore catalog.",
    "method.seoTitle": "SEO structure",
    "method.seoCopy": "Each detail has a stable slug, citations, GPS, practical info and rating metrics. This creates a strong base for country, continent and category landing pages.",
    "stats.places": "Places in database",
    "stats.countries": "Countries",
    "stats.continents": "Continents",
    "stats.average": "Average mystery",
    "metric.mystery": "Mystery index",
    "metric.activity": "Activity",
    "metric.evidence": "Evidence",
    "metric.danger": "Danger",
    "metric.access": "Access",
    "metric.atmosphere": "Atmosphere",
    "metric.night": "Night suitability",
    "metric.kids": "Suitable for kids",
    "detail.mystery": "Mystery of the place",
    "detail.history": "History",
    "detail.legend": "Legend",
    "detail.paranormal": "Paranormal reports",
    "detail.skeptic": "Skeptical explanation",
    "detail.practical": "Practical info",
    "detail.mapGps": "Map and GPS",
    "detail.navigate": "Navigate",
    "detail.backMap": "Back to map",
    "detail.openPage": "Open full page",
    "detail.sources": "Sources",
    "detail.storyHooks": "Stories and motifs",
    "theme.dabel": "Devil",
    "theme.vrazdy": "Murders",
    "theme.duchove": "Ghosts",
    "theme.prokleti": "Curses",
    "theme.tajneSpolecnosti": "Secret societies",
    "theme.templari": "Templars",
    "theme.iluminati": "Illuminati",
    "theme.alchymie": "Alchemy",
    "theme.karantena": "Quarantine",
    "theme.valka": "War",
    "theme.zemetreseni": "Earthquakes",
    "theme.kosmickaAnomalie": "Cosmic anomaly",
    "theme.impakt": "Impacts",
    "theme.sopky": "Volcanoes",
    "theme.plochaZeme": "Flat Earth",
    "theme.konspirace": "Conspiracies",
    "theme.antiteorie": "Counter-theories",
    "theme.pseudoveda": "Pseudoscience",
    "theme.ritual": "Rituals",
    "theme.prirodniLabyrint": "Natural labyrinth",
    "theme.veznice": "Prisons",
    "theme.podzemi": "Underground",
    "community.eyebrow": "Community",
    "community.title": "Suggest a mysterious place",
    "community.placeName": "Place name",
    "community.country": "Country",
    "community.story": "Short story or reason",
    "community.source": "Source / link",
    "community.submit": "Save suggestion locally",
    "community.status": "Suggestions are stored in this browser for now. In production they will go to moderation.",
    "community.saved": "The suggestion is saved locally; in production it would go to moderation.",
    "common.yes": "yes",
    "common.no": "no",
    "common.notReally": "not really",
    "checkin.ready": "GPS verification will connect to POST /api/checkin.",
    "checkin.unsupported": "This browser does not support GPS. Photo fallback will be used.",
    "checkin.waiting": "Waiting for location...",
    "checkin.success": "Location loaded. In production it will be sent with a photo to POST /api/checkin.",
    "checkin.failed": "GPS could not be loaded. In production we will offer manual photo verification.",
    "badge.first": "First trace",
    "badge.firstMeta": "1 verified visit",
    "badge.night": "Night watch",
    "badge.nightMeta": "Check-in after dark",
    "badge.skeptic": "Field skeptic",
    "badge.skepticMeta": "3 places with sources",
    "badge.cartographer": "Mystery cartographer",
    "badge.cartographerMeta": "10 regions in profile"
  },
  de: {
    "language.label": "Sprache",
    "nav.map": "Karte",
    "nav.places": "Orte",
    "nav.rankings": "Rankings",
    "nav.profile": "Profil",
    "nav.method": "Methodik",
    "hero.eyebrow": "Legenden, Fakten und Reisen weltweit",
    "hero.title": "Mysteriöse Orte der Welt auf einer Karte",
    "hero.copy": "Entdecke Burgen, Gefängnisse, Inseln, Wälder, Katakomben und Legenden mit Quellen, skeptischen Erklärungen und Navigation.",
    "hero.openMap": "Karte öffnen",
    "hero.browse": "Orte ansehen",
    "filters.searchLabel": "Ort suchen",
    "filters.searchPlaceholder": "Burg, Insel, Land, Legende...",
    "filters.categories": "Kategorien",
    "filters.themes": "Motive",
    "filters.mysteryIndex": "Mystery-Index",
    "map.title": "Weltkarte der Entdeckungen",
    "places.title": "Ausgewählte Orte weltweit",
    "rankings.title": "Rankings und Landingpages",
    "rankings.top": "Mysteriöseste Orte",
    "rankings.continents": "Nach Kontinent",
    "rankings.categories": "Nach Kategorie",
    "rankings.themes": "Nach Motiv",
    "rankings.countries": "Nach Land"
  },
  es: {
    "language.label": "Idioma",
    "nav.map": "Mapa",
    "nav.places": "Lugares",
    "nav.rankings": "Rankings",
    "nav.profile": "Perfil",
    "nav.method": "Método",
    "hero.eyebrow": "Leyendas, hechos y viajes por el mundo",
    "hero.title": "Lugares misteriosos del mundo en un mapa",
    "hero.copy": "Explora castillos, prisiones, islas, bosques, catacumbas y leyendas con fuentes citadas, explicaciones escépticas y navegación práctica.",
    "hero.openMap": "Abrir mapa",
    "hero.browse": "Ver lugares",
    "filters.searchLabel": "Buscar lugar",
    "filters.searchPlaceholder": "Castillo, isla, país, leyenda...",
    "filters.categories": "Categorías",
    "filters.themes": "Motivos",
    "filters.mysteryIndex": "Índice de misterio",
    "map.title": "Mapa mundial de expediciones",
    "places.title": "Lugares mundiales seleccionados",
    "rankings.title": "Rankings y páginas de entrada",
    "rankings.top": "Lugares más misteriosos",
    "rankings.continents": "Por continente",
    "rankings.categories": "Por categoría",
    "rankings.themes": "Por motivo",
    "rankings.countries": "Por país"
  },
  fr: {
    "language.label": "Langue",
    "nav.map": "Carte",
    "nav.places": "Lieux",
    "nav.rankings": "Classements",
    "nav.profile": "Profil",
    "nav.method": "Méthode",
    "hero.eyebrow": "Légendes, faits et voyages dans le monde",
    "hero.title": "Les lieux mystérieux du monde sur une seule carte",
    "hero.copy": "Explorez châteaux, prisons, îles, forêts, catacombes et légendes avec sources citées, explications sceptiques et navigation pratique.",
    "hero.openMap": "Ouvrir la carte",
    "hero.browse": "Voir les lieux",
    "filters.searchLabel": "Rechercher un lieu",
    "filters.searchPlaceholder": "Château, île, pays, légende...",
    "filters.categories": "Catégories",
    "filters.themes": "Motifs",
    "filters.mysteryIndex": "Indice de mystère",
    "map.title": "Carte mondiale des expéditions",
    "places.title": "Lieux mondiaux sélectionnés",
    "rankings.title": "Classements et pages d’entrée",
    "rankings.top": "Lieux les plus mystérieux",
    "rankings.continents": "Par continent",
    "rankings.categories": "Par catégorie",
    "rankings.themes": "Par motif",
    "rankings.countries": "Par pays"
  }
};

const FILTER_I18N = {
  cs: {
    categories: {
      hrad: "Hrady a zamky", podzemi: "Podzemi", priroda: "Prirodni mista", legenda: "Legendy", veznice: "Veznice", ostrov: "Ostrovy", katastrofa: "Katastrofy", historie: "Historie", "filmova-lokace": "Filmove lokace", "zakazane-zony": "Zakazane zony", "ztracena-mesta": "Ztracena mista"
    },
    themes: {
      archeologie: "Archeologie", carodejnictvi: "Carodejnictvi", dabel: "Dabel", duchove: "Duchove", film: "Film", hrad: "Hrad", impakt: "Impakty", karantena: "Karantena", katastrofa: "Katastrofa", konspirace: "Konspirace", "kosmicka-anomalie": "Kosmicka anomalie", legenda: "Legenda", media: "Media", more: "More", mytologie: "Mytologie", nataceni: "Nataceni", nebezpeci: "Nebezpeci", oceany: "Oceany", okultismus: "Okultismus", ostrov: "Ostrov", pirati: "Pirati", podzemi: "Podzemi", poklad: "Poklad", politika: "Politika", popkultura: "Popkultura", poust: "Poust", "prirodni-anomalie": "Prirodni anomalie", "prirodni-labyrint": "Prirodni labyrint", prokleti: "Prokleti", pseudoveda: "Pseudoveda", ritual: "Ritualy", skeptic: "Skeptik", sopky: "Sopky", stredovek: "Stredovek", "tajne-spolecnosti": "Tajne spolecnosti", technologie: "Technologie", templari: "Templari", ufo: "UFO", umrti: "Smrt a pamet", valka: "Valka", veznice: "Veznice", vrazdy: "Vrazdy", "zakazane-zony": "Zakazane zony", zemetreseni: "Zemetreseni", zmizeni: "Zmizeni", "ztracena-mesta": "Ztracena mista", "ztracena-mista": "Ztracena mista", zvirata: "Zvirata"
    }
  },
  en: {
    categories: {
      hrad: "Castles and chateaus", podzemi: "Underground", priroda: "Natural places", legenda: "Legends", veznice: "Prisons", ostrov: "Islands", katastrofa: "Disasters", historie: "History", "filmova-lokace": "Film locations", "zakazane-zony": "Forbidden zones", "ztracena-mesta": "Lost places"
    },
    themes: {
      archeologie: "Archaeology", carodejnictvi: "Witchcraft", dabel: "Devil", duchove: "Ghosts", film: "Film", hrad: "Castle", impakt: "Impacts", karantena: "Quarantine", katastrofa: "Disaster", konspirace: "Conspiracy", "kosmicka-anomalie": "Cosmic anomaly", legenda: "Legend", media: "Media", more: "Sea", mytologie: "Mythology", nataceni: "Filming", nebezpeci: "Danger", oceany: "Oceans", okultismus: "Occultism", ostrov: "Island", pirati: "Pirates", podzemi: "Underground", poklad: "Treasure", politika: "Politics", popkultura: "Pop culture", poust: "Desert", "prirodni-anomalie": "Natural anomaly", "prirodni-labyrint": "Natural labyrinth", prokleti: "Curse", pseudoveda: "Pseudoscience", ritual: "Rituals", skeptic: "Skeptic", sopky: "Volcanoes", stredovek: "Middle Ages", "tajne-spolecnosti": "Secret societies", technologie: "Technology", templari: "Templars", ufo: "UFO", umrti: "Death and memory", valka: "War", veznice: "Prisons", vrazdy: "Murders", "zakazane-zony": "Forbidden zones", zemetreseni: "Earthquakes", zmizeni: "Disappearances", "ztracena-mesta": "Lost places", "ztracena-mista": "Lost places", zvirata: "Animals"
    }
  },
  de: {
    categories: {
      hrad: "Burgen und Schlosser", podzemi: "Untergrund", priroda: "Naturorte", legenda: "Legenden", veznice: "Gefangnisse", ostrov: "Inseln", katastrofa: "Katastrophen", historie: "Geschichte", "filmova-lokace": "Filmorte", "zakazane-zony": "Sperrzonen", "ztracena-mesta": "Verlorene Orte"
    },
    themes: {
      archeologie: "Archaologie", carodejnictvi: "Hexerei", dabel: "Teufel", duchove: "Geister", film: "Film", hrad: "Burg", impakt: "Einschlage", karantena: "Quarantane", katastrofa: "Katastrophe", konspirace: "Verschworung", "kosmicka-anomalie": "Kosmische Anomalie", legenda: "Legende", media: "Medien", more: "Meer", mytologie: "Mythologie", nataceni: "Drehorte", nebezpeci: "Gefahr", oceany: "Ozeane", okultismus: "Okkultismus", ostrov: "Insel", pirati: "Piraten", podzemi: "Untergrund", poklad: "Schatz", politika: "Politik", popkultura: "Popkultur", poust: "Wuste", "prirodni-anomalie": "Naturliche Anomalie", "prirodni-labyrint": "Naturliches Labyrinth", prokleti: "Fluch", pseudoveda: "Pseudowissenschaft", ritual: "Rituale", skeptic: "Skeptik", sopky: "Vulkane", stredovek: "Mittelalter", "tajne-spolecnosti": "Geheimgesellschaften", technologie: "Technologie", templari: "Templer", ufo: "UFO", umrti: "Tod und Erinnerung", valka: "Krieg", veznice: "Gefangnisse", vrazdy: "Morde", "zakazane-zony": "Sperrzonen", zemetreseni: "Erdbeben", zmizeni: "Verschwinden", "ztracena-mesta": "Verlorene Orte", "ztracena-mista": "Verlorene Orte", zvirata: "Tiere"
    }
  },
  es: {
    categories: {
      hrad: "Castillos y palacios", podzemi: "Subterraneo", priroda: "Lugares naturales", legenda: "Leyendas", veznice: "Prisiones", ostrov: "Islas", katastrofa: "Desastres", historie: "Historia", "filmova-lokace": "Localizaciones de cine", "zakazane-zony": "Zonas prohibidas", "ztracena-mesta": "Lugares perdidos"
    },
    themes: {
      archeologie: "Arqueologia", carodejnictvi: "Brujeria", dabel: "Diablo", duchove: "Fantasmas", film: "Cine", hrad: "Castillo", impakt: "Impactos", karantena: "Cuarentena", katastrofa: "Catastrofe", konspirace: "Conspiracion", "kosmicka-anomalie": "Anomalia cosmica", legenda: "Leyenda", media: "Medios", more: "Mar", mytologie: "Mitologia", nataceni: "Rodaje", nebezpeci: "Peligro", oceany: "Oceanos", okultismus: "Ocultismo", ostrov: "Isla", pirati: "Piratas", podzemi: "Subterraneo", poklad: "Tesoro", politika: "Politica", popkultura: "Cultura pop", poust: "Desierto", "prirodni-anomalie": "Anomalia natural", "prirodni-labyrint": "Laberinto natural", prokleti: "Maldicion", pseudoveda: "Pseudociencia", ritual: "Rituales", skeptic: "Esceptico", sopky: "Volcanes", stredovek: "Edad Media", "tajne-spolecnosti": "Sociedades secretas", technologie: "Tecnologia", templari: "Templarios", ufo: "OVNI", umrti: "Muerte y memoria", valka: "Guerra", veznice: "Prisiones", vrazdy: "Asesinatos", "zakazane-zony": "Zonas prohibidas", zemetreseni: "Terremotos", zmizeni: "Desapariciones", "ztracena-mesta": "Lugares perdidos", "ztracena-mista": "Lugares perdidos", zvirata: "Animales"
    }
  },
  fr: {
    categories: {
      hrad: "Chateaux et palais", podzemi: "Souterrains", priroda: "Lieux naturels", legenda: "Legendes", veznice: "Prisons", ostrov: "Iles", katastrofa: "Catastrophes", historie: "Histoire", "filmova-lokace": "Lieux de tournage", "zakazane-zony": "Zones interdites", "ztracena-mesta": "Lieux perdus"
    },
    themes: {
      archeologie: "Archeologie", carodejnictvi: "Sorcellerie", dabel: "Diable", duchove: "Fantomes", film: "Film", hrad: "Chateau", impakt: "Impacts", karantena: "Quarantaine", katastrofa: "Catastrophe", konspirace: "Conspiration", "kosmicka-anomalie": "Anomalie cosmique", legenda: "Legende", media: "Medias", more: "Mer", mytologie: "Mythologie", nataceni: "Tournage", nebezpeci: "Danger", oceany: "Oceans", okultismus: "Occultisme", ostrov: "Ile", pirati: "Pirates", podzemi: "Souterrain", poklad: "Tresor", politika: "Politique", popkultura: "Culture pop", poust: "Desert", "prirodni-anomalie": "Anomalie naturelle", "prirodni-labyrint": "Labyrinthe naturel", prokleti: "Malediction", pseudoveda: "Pseudoscience", ritual: "Rituels", skeptic: "Sceptique", sopky: "Volcans", stredovek: "Moyen Age", "tajne-spolecnosti": "Societes secretes", technologie: "Technologie", templari: "Templiers", ufo: "OVNI", umrti: "Mort et memoire", valka: "Guerre", veznice: "Prisons", vrazdy: "Meurtres", "zakazane-zony": "Zones interdites", zemetreseni: "Seismes", zmizeni: "Disparitions", "ztracena-mesta": "Lieux perdus", "ztracena-mista": "Lieux perdus", zvirata: "Animaux"
    }
  }
};

const FILTER_I18N_KEYS = {
  categories: {
    hrad: ["category.hrad", "category.hradLong"],
    podzemi: ["category.podzemi"],
    priroda: ["category.priroda", "category.prirodaLong"],
    legenda: ["category.legenda"],
    veznice: ["category.veznice"],
    ostrov: ["category.ostrov"],
    katastrofa: ["category.katastrofa"],
    historie: ["category.historie"],
    "filmova-lokace": ["category.filmovaLokace"],
    "zakazane-zony": ["category.zakazaneZony"],
    "ztracena-mesta": ["category.ztracenaMesta"]
  },
  themes: {
    archeologie: ["theme.archeologie"], carodejnictvi: ["theme.carodejnictvi"], dabel: ["theme.dabel"], duchove: ["theme.duchove"], film: ["theme.film"], hrad: ["theme.hrad"], impakt: ["theme.impakt"], karantena: ["theme.karantena"], katastrofa: ["theme.katastrofa"], konspirace: ["theme.konspirace"], "kosmicka-anomalie": ["theme.kosmickaAnomalie"], legenda: ["theme.legenda"], media: ["theme.media"], more: ["theme.more"], mytologie: ["theme.mytologie"], nataceni: ["theme.nataceni"], nebezpeci: ["theme.nebezpeci"], oceany: ["theme.oceany"], okultismus: ["theme.okultismus"], ostrov: ["theme.ostrov"], pirati: ["theme.pirati"], podzemi: ["theme.podzemi"], poklad: ["theme.poklad"], politika: ["theme.politika"], popkultura: ["theme.popkultura"], poust: ["theme.poust"], "prirodni-anomalie": ["theme.prirodniAnomalie"], "prirodni-labyrint": ["theme.prirodniLabyrint"], prokleti: ["theme.prokleti"], pseudoveda: ["theme.pseudoveda"], ritual: ["theme.ritual"], skeptic: ["theme.skeptic"], sopky: ["theme.sopky"], stredovek: ["theme.stredovek"], "tajne-spolecnosti": ["theme.tajneSpolecnosti"], technologie: ["theme.technologie"], templari: ["theme.templari"], ufo: ["theme.ufo"], umrti: ["theme.umrti"], valka: ["theme.valka"], veznice: ["theme.veznice"], vrazdy: ["theme.vrazdy"], "zakazane-zony": ["theme.zakazaneZony"], zemetreseni: ["theme.zemetreseni"], zmizeni: ["theme.zmizeni"], "ztracena-mesta": ["theme.ztracenaMesta"], "ztracena-mista": ["theme.ztracenaMista"], zvirata: ["theme.zvirata"]
  }
};

for (const [language, labels] of Object.entries(FILTER_I18N)) {
  for (const [slug, keys] of Object.entries(FILTER_I18N_KEYS.categories)) {
    keys.forEach((key) => {
      I18N[language][key] = labels.categories[slug];
    });
  }
  for (const [slug, keys] of Object.entries(FILTER_I18N_KEYS.themes)) {
    keys.forEach((key) => {
      I18N[language][key] = labels.themes[slug];
    });
  }
}

Object.assign(I18N.de, {
  "places.eyebrow": "Datenbank",
  "stats.places": "Orte in der Datenbank",
  "stats.countries": "Lander",
  "stats.continents": "Kontinente",
  "stats.average": "Durchschnittliches Mysterium",
  "metric.mystery": "Mystery-Index",
  "metric.activity": "Aktivitat",
  "metric.evidence": "Belege",
  "metric.danger": "Gefahr",
  "metric.access": "Zugang",
  "metric.atmosphere": "Atmosphare",
  "metric.night": "Nachttauglichkeit",
  "metric.kids": "Geeignet fur Kinder",
  "detail.mystery": "Mysterium des Ortes",
  "detail.history": "Geschichte",
  "detail.legend": "Legende",
  "detail.paranormal": "Paranormale Berichte",
  "detail.skeptic": "Skeptische Erklarung",
  "detail.practical": "Praktische Infos",
  "detail.mapGps": "Karte und GPS",
  "detail.navigate": "Navigieren",
  "detail.openPage": "Vollstandige Seite offnen",
  "detail.sources": "Quellen",
  "detail.paranormalLayer": "Paranormale Ebene",
  "detail.paranormalClaims": "Was paranormal behauptet wird",
  "detail.legendClaims": "Was in den Legenden steht",
  "detail.verifyClaims": "Wie wir es prufen",
  "detail.storyHooks": "Geschichten und Motive",
  "common.yes": "ja",
  "common.no": "nein",
  "common.notReally": "eher nicht"
});

function getInitialLanguage() {
  const urlLanguage = new URLSearchParams(location.search).get("lang");
  if (SUPPORTED_LANGUAGES.includes(urlLanguage)) return urlLanguage;
  const pathLanguage = location.pathname.split("/").filter(Boolean)[0];
  if (SUPPORTED_LANGUAGES.includes(pathLanguage)) return pathLanguage;
  const saved = localStorage.getItem("mysterymap-language");
  if (SUPPORTED_LANGUAGES.includes(saved)) return saved;
  const browserLanguage = navigator.language?.slice(0, 2);
  return SUPPORTED_LANGUAGES.includes(browserLanguage) ? browserLanguage : DEFAULT_LANGUAGE;
}

function translate(key, language = window.MysteryMapI18n?.language || DEFAULT_LANGUAGE) {
  return I18N[language]?.[key] || I18N.en?.[key] || I18N[DEFAULT_LANGUAGE][key] || key;
}

function setLanguage(language) {
  const nextLanguage = SUPPORTED_LANGUAGES.includes(language) ? language : DEFAULT_LANGUAGE;
  window.MysteryMapI18n.language = nextLanguage;
  localStorage.setItem("mysterymap-language", nextLanguage);
  document.documentElement.lang = nextLanguage;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = translate(node.dataset.i18n, nextLanguage);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.setAttribute("placeholder", translate(node.dataset.i18nPlaceholder, nextLanguage));
  });
  document.dispatchEvent(new CustomEvent("mysterymap:language-change", { detail: { language: nextLanguage } }));
}

window.MysteryMapI18n = {
  language: getInitialLanguage(),
  translate,
  setLanguage
};

document.addEventListener("DOMContentLoaded", () => {
  const select = document.querySelector("#languageSelect");
  if (select) {
    select.value = window.MysteryMapI18n.language;
    select.addEventListener("change", (event) => setLanguage(event.target.value));
  }
  setLanguage(window.MysteryMapI18n.language);
});
