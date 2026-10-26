const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const places = JSON.parse(fs.readFileSync(path.join(root, "data", "mista.json"), "utf8").replace(/^\uFEFF/, ""));
const articles = JSON.parse(fs.readFileSync(path.join(root, "data", "articles.json"), "utf8").replace(/^\uFEFF/, ""));
const sources = JSON.parse(fs.readFileSync(path.join(root, "data", "source-catalog.json"), "utf8").replace(/^\uFEFF/, ""));

// Překlady pro asijské jazyky jsou v data/i18n-asia/<jazyk>.json, aby nenafukovaly mista.json pro mapu.
const asiaDir = path.join(root, "data", "i18n-asia");
if (fs.existsSync(asiaDir)) {
  const byId = new Map(places.map((place) => [place.id, place]));
  fs.readdirSync(asiaDir).filter((file) => file.endsWith(".json")).forEach((file) => {
    const language = path.basename(file, ".json");
    const translations = JSON.parse(fs.readFileSync(path.join(asiaDir, file), "utf8"));
    Object.entries(translations).forEach(([id, translation]) => {
      const place = byId.get(id);
      if (!place) throw new Error(`data/i18n-asia/${file}: unknown place ${id}`);
      place.i18n = { ...place.i18n, [language]: translation };
    });
  });
}
const siteUrl = "https://mysterymap.online";
const buildDate = process.env.BUILD_DATE || "2026-06-01";
const locales = {
  cs: { placePrefix: "mista", articlePrefix: "clanky", label: "Čeština" },
  en: { placePrefix: "places", articlePrefix: "articles", label: "English" },
  de: { placePrefix: "orte", articlePrefix: "artikel", label: "Deutsch" },
  es: { placePrefix: "lugares", articlePrefix: "articulos", label: "Español" },
  fr: { placePrefix: "lieux", articlePrefix: "articles", label: "Français" },
  // Asijské jazyky: stránky vznikají jen pro místa se skutečným překladem a mají vlastní rozcestník.
  zh: { placePrefix: "places", articlePrefix: "articles", label: "中文", htmlLang: "zh-Hans", hreflang: "zh-Hans", onlyTranslated: true },
  ja: { placePrefix: "places", articlePrefix: "articles", label: "日本語", htmlLang: "ja", hreflang: "ja", onlyTranslated: true },
  ko: { placePrefix: "places", articlePrefix: "articles", label: "한국어", htmlLang: "ko", hreflang: "ko", onlyTranslated: true }
};

function hasPage(item, language) {
  return !locales[language].onlyTranslated || Boolean(item.i18n?.[language]);
}

function hreflangCode(language) {
  return locales[language].hreflang || language;
}

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

// Šablonové texty z hromadného importu se opakují u mnoha míst (liší se jen názvem).
// Takové profily zůstávají na mapě, ale neindexují se, dokud nedostanou vlastní text.
const templateTextCounts = new Map();
places.forEach((place) => {
  ["historie", "legenda", "paranormalni", "skepticke"].forEach((field) => {
    const key = `${field}:${String(place.popisy?.[field] || "").replaceAll(place.nazev, "")}`;
    templateTextCounts.set(key, (templateTextCounts.get(key) || 0) + 1);
  });
});

function isTemplatePlace(place) {
  const repeated = ["historie", "legenda", "paranormalni", "skepticke"].filter((field) => {
    const key = `${field}:${String(place.popisy?.[field] || "").replaceAll(place.nazev, "")}`;
    return templateTextCounts.get(key) >= 3;
  });
  return repeated.length >= 2;
}

// Jazykové verze bez skutečného překladu jsou jen šablona kolem českého textu.
function hasRealLanguage(item, language) {
  return language === "cs" || Boolean(item.i18n?.[language]);
}

function isIndexable(item, kind, language) {
  if (!hasRealLanguage(item, language)) return false;
  return kind === "article" || !isTemplatePlace(item);
}

function hreflangLinks(item, kind) {
  const pathFn = kind === "article" ? articlePath : placePath;
  const languages = Object.keys(locales).filter((language) => isIndexable(item, kind, language));
  if (!languages.length) return "";
  const defaultLanguage = languages.includes("en") ? "en" : "cs";
  return `${languages.map((language) => `<link rel="alternate" hreflang="${hreflangCode(language)}" href="${escapeHtml(absoluteUrl(pathFn(item, language)))}">`).join("\n    ")}
    <link rel="alternate" hreflang="x-default" href="${escapeHtml(absoluteUrl(pathFn(item, defaultLanguage)))}">`;
}

const uiText = {
  cs: {
    nextSteps: "Další kroky",
    trip: "Výprava",
    languageLabel: "Jazyk",
    mainNav: "Hlavní navigace",
    breadcrumb: "Drobečková navigace",
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
    nextSteps: "Next steps",
    trip: "Trip",
    languageLabel: "Language",
    mainNav: "Main navigation",
    breadcrumb: "Breadcrumb",
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
    nextSteps: "Nächste Schritte",
    trip: "Reise",
    languageLabel: "Sprache",
    mainNav: "Hauptnavigation",
    breadcrumb: "Brotkrumen-Navigation",
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
    nextSteps: "Siguientes pasos",
    trip: "Ruta",
    languageLabel: "Idioma",
    mainNav: "Navegación principal",
    breadcrumb: "Ruta de navegación",
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
    nextSteps: "Étapes suivantes",
    trip: "Itinéraire",
    languageLabel: "Langue",
    mainNav: "Navigation principale",
    breadcrumb: "Fil d'Ariane",
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
  },
  zh: {
    mystery: "地点之谜",
    history: "历史",
    legend: "传说",
    paranormal: "灵异说法",
    skeptic: "理性解释",
    practical: "游客实用信息",
    gps: "地图与GPS坐标",
    sources: "资料来源",
    sourceIntro: "以下来源用于核实事实与位置。页面文字为本站原创编辑内容，并非复制来源原文。",
    trustTitle: "经过核实的编辑档案",
    trustCopy: "本页为原创编辑内容。我们把可考证的历史、GPS和实用信息与传说、解读分开呈现，并为每个地点提供理性解释和明确来源。",
    contentType: "类型",
    themes: "主题",
    sourceCount: "来源数量",
    lastBuild: "更新日期",
    storyHooks: "故事与看点",
    paranormalLayer: "灵异层面",
    paranormalClaims: "人们声称在这里发生了什么",
    legendClaims: "传说怎么讲",
    verifyClaims: "我们如何核实",
    mysteryIndex: "神秘指数",
    activity: "灵异传闻",
    evidence: "史料可信度",
    danger: "危险程度",
    access: "开放情况",
    atmosphere: "氛围",
    night: "适合夜访",
    kids: "适合儿童",
    yes: "是",
    no: "否",
    notReally: "不太适合",
    navigate: "Google 地图导航",
    backMap: "返回欧洲神秘地点",
    continueTitle: "继续探索",
    continueCopy: "看看附近或同类型的神秘地点，把它们排进你的欧洲行程。",
    moreInCountry: "同一国家",
    moreInCategory: "同类地点",
    nextSteps: "下一站",
    trip: "行程",
    languageLabel: "语言",
    mainNav: "主导航",
    breadcrumb: "页面路径",
    hubTitleShort: "欧洲神秘地点",
    placeTitleTail: "欧洲神秘地点旅游指南 | MysteryMap",
    search: "搜索",
    worldMap: "世界地图",
    hubTitle: "欧洲神秘地点旅游指南",
    hubEyebrow: "为中文游客精选",
    hubIntro: "城堡、地下墓穴、骨堂、古老的石阵和传说中的湖泊——我们用中文介绍欧洲最神秘的地方：真实的历史、流传的传说、理性的解释，以及门票、交通和参观时间等实用信息。",
    hubSearchLabel: "搜索地点、国家或城市",
    hubSearchPlaceholder: "例如：城堡、巴黎、布拉格、吸血鬼……",
    hubResults: "个地点",
    hubNoResults: "没有找到匹配的地点。试试国家名称或“城堡”“地下”等关键词。",
    hubCountries: "按国家浏览",
    hubWhyTitle: "为什么用 MysteryMap",
    hubWhy1: "史实、传说和理性解释分开写，不夸大、不猎奇。",
    hubWhy2: "每个地点都有GPS坐标、Google 地图和 Apple 地图导航。",
    hubWhy3: "注明门票预约、开放情况和安全提示，方便规划行程。",
    readMore: "查看详情",
    categories: { hrad: "城堡", podzemi: "地下空间", priroda: "自然奇观", legenda: "传说", veznice: "监狱", ostrov: "岛屿", katastrofa: "灾难遗址", historie: "历史遗迹", "filmova-lokace": "影视取景地", "zakazane-zony": "禁区", "ztracena-mesta": "失落之城", opustene: "废墟", tragedie: "悲剧遗址", anomalie: "异常现象" }
  },
  ja: {
    mystery: "この場所の謎",
    history: "歴史",
    legend: "伝説",
    paranormal: "心霊・怪異の噂",
    skeptic: "合理的な解説",
    practical: "旅行者向け実用情報",
    gps: "地図とGPS",
    sources: "参考資料",
    sourceIntro: "事実と位置の確認に使った資料です。本文は資料の転載ではなく、編集部によるオリジナル記事です。",
    trustTitle: "検証済みの編集記事",
    trustCopy: "本ページはオリジナルの編集記事です。史実・GPS・実用情報を伝説や解釈と分けて掲載し、すべての場所に合理的な解説と出典を添えています。",
    contentType: "種類",
    themes: "テーマ",
    sourceCount: "出典の数",
    lastBuild: "更新日",
    storyHooks: "エピソード",
    paranormalLayer: "心霊・怪異",
    paranormalClaims: "ここで起きると言われていること",
    legendClaims: "伝説の内容",
    verifyClaims: "検証の視点",
    mysteryIndex: "ミステリー指数",
    activity: "怪異の噂",
    evidence: "史料の確かさ",
    danger: "危険度",
    access: "アクセス",
    atmosphere: "雰囲気",
    night: "夜の訪問",
    kids: "子ども連れ",
    yes: "可",
    no: "不可",
    notReally: "あまり向かない",
    navigate: "Google マップで開く",
    backMap: "ヨーロッパのミステリースポット一覧へ",
    continueTitle: "さらに探す",
    continueCopy: "同じ国や同じ種類のスポットを見て、ヨーロッパ旅行の計画に加えましょう。",
    moreInCountry: "同じ国のスポット",
    moreInCategory: "似た種類のスポット",
    nextSteps: "次の目的地",
    trip: "旅程",
    languageLabel: "言語",
    mainNav: "メインメニュー",
    breadcrumb: "現在地",
    hubTitleShort: "ヨーロッパのミステリースポット",
    placeTitleTail: "ヨーロッパ・ミステリースポット旅行ガイド | MysteryMap",
    search: "検索",
    worldMap: "世界地図",
    hubTitle: "ヨーロッパのミステリースポット旅行ガイド",
    hubEyebrow: "日本の旅行者のために",
    hubIntro: "古城、地下墓地、骸骨の礼拝堂、謎の巨石、伝説の湖。ヨーロッパの不思議な場所を、史実・伝説・合理的な解説に分けて日本語で紹介します。チケット予約、行き方、所要時間など旅行に役立つ情報も掲載。",
    hubSearchLabel: "スポット・国・都市を検索",
    hubSearchPlaceholder: "例：城、パリ、プラハ、ドラキュラ…",
    hubResults: "件のスポット",
    hubNoResults: "該当するスポットが見つかりません。国名や「城」「地下」などで検索してください。",
    hubCountries: "国から探す",
    hubWhyTitle: "MysteryMap の特徴",
    hubWhy1: "史実と伝説と合理的な解説を分けて紹介。誇張はしません。",
    hubWhy2: "すべてのスポットにGPS座標、Google マップと Apple マップのリンク付き。",
    hubWhy3: "予約の要否、開館状況、安全上の注意など旅の計画に役立つ情報を掲載。",
    readMore: "詳しく見る",
    categories: { hrad: "城", podzemi: "地下", priroda: "自然の神秘", legenda: "伝説", veznice: "監獄", ostrov: "島", katastrofa: "災害の跡", historie: "史跡", "filmova-lokace": "ロケ地", "zakazane-zony": "立入禁止区域", "ztracena-mesta": "失われた都市", opustene: "廃墟", tragedie: "悲劇の地", anomalie: "怪現象" }
  },
  ko: {
    mystery: "이곳의 미스터리",
    history: "역사",
    legend: "전설",
    paranormal: "초자연 현상 이야기",
    skeptic: "합리적인 설명",
    practical: "여행자를 위한 실용 정보",
    gps: "지도와 GPS",
    sources: "참고 자료",
    sourceIntro: "사실과 위치 확인에 사용한 자료입니다. 본문은 자료를 복사한 것이 아니라 편집팀이 직접 작성한 글입니다.",
    trustTitle: "검증된 편집 프로필",
    trustCopy: "이 페이지는 직접 작성한 편집 콘텐츠입니다. 역사적 사실, GPS, 실용 정보를 전설이나 해석과 구분해 소개하며, 모든 장소에 합리적인 설명과 출처를 함께 제공합니다.",
    contentType: "유형",
    themes: "테마",
    sourceCount: "출처 수",
    lastBuild: "업데이트",
    storyHooks: "이야기와 볼거리",
    paranormalLayer: "초자연 현상",
    paranormalClaims: "이곳에서 일어난다고 전해지는 일",
    legendClaims: "전설의 내용",
    verifyClaims: "검증해 보면",
    mysteryIndex: "미스터리 지수",
    activity: "괴담",
    evidence: "기록의 신뢰도",
    danger: "위험도",
    access: "방문 방법",
    atmosphere: "분위기",
    night: "야간 방문",
    kids: "아이 동반",
    yes: "가능",
    no: "불가",
    notReally: "추천하지 않음",
    navigate: "Google 지도로 길찾기",
    backMap: "유럽 미스터리 명소 목록으로",
    continueTitle: "계속 둘러보기",
    continueCopy: "같은 나라나 비슷한 유형의 명소를 살펴보고 유럽 여행 일정에 넣어 보세요.",
    moreInCountry: "같은 나라의 명소",
    moreInCategory: "비슷한 유형",
    nextSteps: "다음 목적지",
    trip: "여행 일정",
    languageLabel: "언어",
    mainNav: "주 메뉴",
    breadcrumb: "현재 위치",
    hubTitleShort: "유럽 미스터리 명소",
    placeTitleTail: "유럽 미스터리 여행 가이드 | MysteryMap",
    search: "검색",
    worldMap: "세계 지도",
    hubTitle: "유럽 미스터리 명소 여행 가이드",
    hubEyebrow: "한국 여행자를 위한 큐레이션",
    hubIntro: "고성, 지하 묘지, 해골 성당, 수수께끼의 거석, 전설의 호수까지. 유럽의 신비로운 장소를 역사·전설·합리적인 설명으로 나누어 한국어로 소개합니다. 예약, 가는 방법, 소요 시간 등 여행에 바로 쓸 수 있는 정보도 담았습니다.",
    hubSearchLabel: "장소, 나라, 도시 검색",
    hubSearchPlaceholder: "예: 성, 파리, 프라하, 드라큘라…",
    hubResults: "곳",
    hubNoResults: "검색 결과가 없습니다. 나라 이름이나 '성', '지하' 같은 단어로 검색해 보세요.",
    hubCountries: "나라별 보기",
    hubWhyTitle: "MysteryMap이 다른 점",
    hubWhy1: "역사, 전설, 합리적인 설명을 나누어 과장 없이 소개합니다.",
    hubWhy2: "모든 장소에 GPS 좌표와 Google 지도·Apple 지도 링크가 있습니다.",
    hubWhy3: "예약 필요 여부, 운영 상황, 안전 수칙 등 일정 계획에 필요한 정보를 담았습니다.",
    readMore: "자세히 보기",
    categories: { hrad: "성", podzemi: "지하", priroda: "자연의 신비", legenda: "전설", veznice: "감옥", ostrov: "섬", katastrofa: "재난의 현장", historie: "유적", "filmova-lokace": "촬영지", "zakazane-zony": "출입 금지 구역", "ztracena-mesta": "잃어버린 도시", opustene: "폐허", tragedie: "비극의 현장", anomalie: "이상 현상" }
  }
};

function categoryText(language, category) {
  return uiText[language]?.categories?.[category] || category;
}

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

function photoCredit(image, language = "cs") {
  if (!image?.url) return "";
  const label = { cs: "Foto", en: "Photo", de: "Foto", es: "Foto", fr: "Photo", zh: "图片", ja: "写真", ko: "사진" }[language] || "Foto";
  return `<p class="photo-credit">${label}: <a href="${escapeHtml(image.sourceUrl || image.url)}" target="_blank" rel="noreferrer">${escapeHtml(image.author || "autor neuveden")}</a> · ${escapeHtml(image.license || "licence neuvedena")}</p>`;
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
  const stories = place.i18n?.[language]?.pribehy || place.pribehy;
  if (!stories?.length) return "";
  return `
    <section class="detail-section" id="pribehy">
      <h2>${escapeHtml(tt(language, "storyHooks"))}</h2>
      <div class="compact-list">
        ${stories.map((story) => `
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
    .filter((item) => item.id !== place.id && item.zeme === place.zeme && hasPage(item, language))
    .sort((a, b) => b.indexTajemna - a.indexTajemna)
    .slice(0, 3);
  const categoryItems = places
    .filter((item) => item.id !== place.id && hasPage(item, language) && item.kategorie.some((category) => place.kategorie.includes(category)))
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
        <p class="eyebrow">${escapeHtml(tt(language, "nextSteps"))}</p>
        <h2>${escapeHtml(tt(language, "continueTitle"))}</h2>
        <p>${escapeHtml(tt(language, "continueCopy"))}</p>
        <div class="hero-actions">
          <a class="button primary" href="${homeHref(language)}">${escapeHtml(tt(language, "backMap"))}</a>
          <a class="button secondary" href="/index.html#vyprava">${escapeHtml(tt(language, "trip"))}</a>
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

function homeHref(language) {
  return locales[language].onlyTranslated ? `/${language}/` : "/index.html#mapa";
}

function countryAnchor(place) {
  return `zeme-${slugify(place.zeme)}`;
}

function breadcrumbItems(place, language) {
  const name = placeField(place, "nazev", language);
  if (locales[language].onlyTranslated) {
    return [
      { name: tt(language, "hubTitleShort"), href: `/${language}/` },
      { name: placeField(place, "zeme", language), href: `/${language}/#${countryAnchor(place)}` },
      { name, href: placePath(place, language) }
    ];
  }
  return [
    { name: "MysteryMap.online", href: "/" },
    { name: placeField(place, "kontinent", language), href: `/landing/kontinent-${slugify(place.kontinent)}.html` },
    { name: placeField(place, "zeme", language), href: `/landing/zeme-${slugify(place.zeme)}.html` },
    { name, href: placePath(place, language) }
  ];
}

function jsonLd(place, language = "cs") {
  const currentPath = placePath(place, language);
  const name = placeField(place, "nazev", language);
  const lead = placeField(place, "lead", language);
  const graph = [
    {
      "@type": "WebPage",
      "@id": `${absoluteUrl(currentPath)}#webpage`,
      "url": absoluteUrl(currentPath),
      "name": `${name} | MysteryMap.online`,
      "description": lead,
      "inLanguage": hreflangCode(language),
      "isPartOf": { "@id": `${siteUrl}/#website` },
      "dateModified": buildDate,
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
      "name": name,
      "description": lead,
      "url": absoluteUrl(currentPath),
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": place.gps.lat,
        "longitude": place.gps.lon
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": placeField(place, "zeme", language)
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
      "itemListElement": breadcrumbItems(place, language).map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": absoluteUrl(item.href)
      }))
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
    "dateModified": buildDate,
    "publisher": {
      "@type": "Organization",
      "name": "MysteryMap.online",
      "url": siteUrl
    },
    "mainEntityOfPage": absoluteUrl(currentPath),
    "about": article.themes
  })}</script>`;
}

function navigation(language) {
  if (locales[language]?.onlyTranslated) {
    return `<nav class="nav-menu" aria-label="${escapeHtml(tt(language, "mainNav"))}">
        <a href="/${language}/">${escapeHtml(tt(language, "hubTitleShort"))}</a>
        <a href="/${language}/#search">${escapeHtml(tt(language, "search"))}</a>
        <a href="/index.html#mapa">${escapeHtml(tt(language, "worldMap"))}</a>
      </nav>`;
  }
  return `<nav class="nav-menu" aria-label="${escapeHtml(tt(language, "mainNav"))}">
        <a href="/index.html#mapa" data-i18n="nav.map">Mapa</a>
        <a href="/index.html#mista" data-i18n="nav.places">Místa</a>
        <a href="/index.html#zebricky" data-i18n="nav.rankings">Žebříčky</a>
        <a href="/index.html#vyprava">${escapeHtml(tt(language, "trip"))}</a>
        <a href="/docs/sources.md" data-i18n="detail.sources">Zdroje</a>
      </nav>`;
}

function pageShell({ title, description, body, script = "", canonical = "/", structuredData = "", ogType = "website", alternates = "", bodyClass = "", language = "cs", indexable = true }) {
  return `<!doctype html>
<html lang="${escapeHtml(locales[language]?.htmlLang || language)}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}">
    <meta name="robots" content="${indexable ? "index,follow,max-image-preview:large" : "noindex,follow"}">
    <meta name="mysterymap-page-language" content="${escapeHtml(language)}">
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
    <link rel="stylesheet" href="/styles.css?v=20261026-asia1">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5944037956815415" crossorigin="anonymous"></script>
    ${structuredData}
  </head>
  <body class="${escapeHtml(bodyClass)}">
    <header class="site-header">
      <a class="brand" href="/index.html">
        <span class="brand-mark" aria-hidden="true">?</span>
        <span>MysteryMap.online</span>
      </a>
      ${navigation(language)}
      <label class="language-select" for="languageSelect">
        <span${locales[language]?.onlyTranslated ? "" : ' data-i18n="language.label"'}>${escapeHtml(tt(language, "languageLabel"))}</span>
        <select id="languageSelect" aria-label="${escapeHtml(tt(language, "languageLabel"))}">
          ${Object.entries(locales).map(([code, locale]) => `<option value="${code}" lang="${locale.htmlLang || code}"${code === language ? " selected" : ""}>${locale.label}</option>`).join("\n          ")}
        </select>
      </label>
    </header>
    ${body}
    <script src="/i18n.js?v=20261026-asia1" defer></script>
    ${script}
  </body>
</html>
`;
}

function placePage(place, language = "cs") {
  const canonicalPath = placePath(place, language);
  const themeClass = placeThemeClass(place);
  const heroImage = place.obrazky?.[0];
  const title = locales[language].onlyTranslated
    ? `${placeField(place, "nazev", language)} | ${tt(language, "placeTitleTail")}`
    : `${placeField(place, "nazev", language)}: ${tt(language, "mystery").toLowerCase()}, GPS, ${tt(language, "sources").toLowerCase()}`;
  const mapLinks = `<a class="button primary" target="_blank" rel="noreferrer" href="https://www.google.com/maps?q=${place.gps.lat},${place.gps.lon}">${escapeHtml(tt(language, "navigate"))}</a>${locales[language].onlyTranslated ? `
            <a class="button secondary" target="_blank" rel="noreferrer" href="https://maps.apple.com/?ll=${place.gps.lat},${place.gps.lon}&amp;q=${encodeURIComponent(placeField(place, "nazev", language))}">Apple Maps</a>` : ""}`;
  const description = `${placeField(place, "lead", language)} ${tt(language, "history")}, ${tt(language, "legend").toLowerCase()}, ${tt(language, "skeptic").toLowerCase()}, GPS.`;
  const body = `
    <main>
      <article>
        <section class="detail-hero ${themeClass}" ${heroBackgroundStyle(heroImage)}>
          <p class="eyebrow">${escapeHtml(placeField(place, "kontinent", language))} · ${escapeHtml(placeField(place, "zeme", language))}</p>
          <h1>${escapeHtml(placeField(place, "nazev", language))}</h1>
          <p class="hero-copy">${escapeHtml(placeField(place, "lead", language))}</p>
          ${photoCredit(heroImage, language)}
          <div class="hero-actions">
            ${mapLinks}
            <a class="button secondary" href="${homeHref(language)}">${escapeHtml(tt(language, "backMap"))}</a>
          </div>
        </section>
        <section class="places-section detail-page-body">
          <nav class="breadcrumb" aria-label="${escapeHtml(tt(language, "breadcrumb"))}">
            ${breadcrumbItems(place, language).map((item, index, items) => index === items.length - 1
              ? `<span aria-current="page">${escapeHtml(item.name)}</span>`
              : `<a href="${escapeHtml(item.href)}">${escapeHtml(item.name)}</a>
            <span aria-hidden="true">›</span>`).join("\n            ")}
          </nav>
          <section class="trust-panel" aria-labelledby="trust-title">
            <div>
              <p class="eyebrow">E-E-A-T</p>
              <h2 id="trust-title">${escapeHtml(tt(language, "trustTitle"))}</h2>
              <p>${escapeHtml(tt(language, "trustCopy"))}</p>
            </div>
            <dl>
              <div><dt>${escapeHtml(tt(language, "contentType"))}</dt><dd>${escapeHtml(place.kategorie.map((category) => categoryText(language, category)).join(", "))}</dd></div>
              ${locales[language].onlyTranslated ? "" : `<div><dt>${escapeHtml(tt(language, "themes"))}</dt><dd>${escapeHtml((place.temata || []).join(", "))}</dd></div>`}
              <div><dt>${escapeHtml(tt(language, "sourceCount"))}</dt><dd>${place.zdroje.length}</dd></div>
              <div><dt>${escapeHtml(tt(language, "lastBuild"))}</dt><dd>${buildDate}</dd></div>
            </dl>
          </section>
          <div class="metric-grid">
            ${metric(tt(language, "mysteryIndex"), `${place.indexTajemna}/100`)}
            ${metric(tt(language, "activity"), placeField(place, "paranormalniAktivita", language))}
            ${metric(tt(language, "evidence"), placeField(place, "historickaDolozenost", language))}
            ${metric(tt(language, "danger"), placeField(place, "nebezpecnost", language))}
            ${metric(tt(language, "access"), placeField(place, "pristupnost", language))}
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
            <p class="hero-actions">${mapLinks}</p>
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
    indexable: isIndexable(place, "place", language)
  });
}

function landingPage(title, description, items, canonical) {
  const cards = items
    .sort((a, b) => b.indexTajemna - a.indexTajemna)
    .map((place) => `
      <a class="place-card" href="${placePath(place, "cs")}">
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
        <section class="places-section" aria-labelledby="landing-list-title">
          <h2 id="landing-list-title">${escapeHtml(title)} (${items.length})</h2>
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
              <div><dt>Poslední build</dt><dd>${buildDate}</dd></div>
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
    bodyClass: themeClass,
    language,
    indexable: isIndexable(article, "article", language)
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
      <section class="places-section" aria-labelledby="article-list-title">
        <h2 id="article-list-title">Všechny články (${articles.length})</h2>
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
    canonical: `/${language}/${locales[language].articlePrefix}/`,
    language,
    indexable: language === "cs"
  });
}

// Rozcestník pro asijské jazyky: vyhledávání mezi přeloženými místy, seskupené podle zemí.
function hubPage(language) {
  const items = places.filter((place) => hasPage(place, language));
  const hubLanguages = Object.keys(locales).filter((code) => locales[code].onlyTranslated && places.some((place) => hasPage(place, code)));
  const alternates = hubLanguages.map((code) => `<link rel="alternate" hreflang="${hreflangCode(code)}" href="${absoluteUrl(`/${code}/`)}">`).join("\n    ");
  const countries = Array.from(groupBy(items, "zeme").entries())
    .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));
  const card = (place) => {
    const name = placeField(place, "nazev", language);
    const country = placeField(place, "zeme", language);
    const categories = place.kategorie.map((category) => categoryText(language, category));
    const searchText = [name, place.nazev, place.slug.replaceAll("-", " "), country, place.zeme, placeField(place, "lead", language), ...categories, ...(place.i18n[language].hledat || [])].join(" ").toLowerCase();
    return `
          <a class="place-card" href="${placePath(place, language)}" data-search="${escapeHtml(searchText)}">
            <span class="score" aria-label="${escapeHtml(tt(language, "mysteryIndex"))}">${place.indexTajemna}</span>
            <h3>${escapeHtml(name)}</h3>
            <p>${escapeHtml(country)} · ${escapeHtml(placeField(place, "lead", language))}</p>
            <span class="tags">${categories.map((category) => `<span class="tag">${escapeHtml(category)}</span>`).join("")}</span>
          </a>`;
  };
  const body = `
    <main>
      <section class="detail-hero hub-hero">
        <p class="eyebrow">${escapeHtml(tt(language, "hubEyebrow"))}</p>
        <h1>${escapeHtml(tt(language, "hubTitle"))}</h1>
        <p class="hero-copy">${escapeHtml(tt(language, "hubIntro"))}</p>
        <ul class="hub-why" aria-label="${escapeHtml(tt(language, "hubWhyTitle"))}">
          <li>${escapeHtml(tt(language, "hubWhy1"))}</li>
          <li>${escapeHtml(tt(language, "hubWhy2"))}</li>
          <li>${escapeHtml(tt(language, "hubWhy3"))}</li>
        </ul>
      </section>
      <section class="places-section hub-search" id="search" aria-labelledby="hub-search-title">
        <h2 id="hub-search-title">${escapeHtml(tt(language, "hubSearchLabel"))}</h2>
        <label class="visually-hidden" for="hubSearch">${escapeHtml(tt(language, "hubSearchLabel"))}</label>
        <input id="hubSearch" class="hub-search-input" type="search" autocomplete="off" placeholder="${escapeHtml(tt(language, "hubSearchPlaceholder"))}">
        <p class="hub-count" aria-live="polite"><span id="hubCount">${items.length}</span> ${escapeHtml(tt(language, "hubResults"))}</p>
        <p class="hub-empty" id="hubEmpty" hidden>${escapeHtml(tt(language, "hubNoResults"))}</p>
        <nav class="hub-countries" aria-label="${escapeHtml(tt(language, "hubCountries"))}">
          ${countries.map(([country, list]) => `<a href="#${countryAnchor(list[0])}">${escapeHtml(placeField(list[0], "zeme", language))} <span>${list.length}</span></a>`).join("\n          ")}
        </nav>
      </section>
      ${countries.map(([country, list]) => `
      <section class="places-section hub-country" id="${countryAnchor(list[0])}" aria-labelledby="${countryAnchor(list[0])}-title">
        <h2 id="${countryAnchor(list[0])}-title">${escapeHtml(placeField(list[0], "zeme", language))}</h2>
        <div class="places-grid">${list.sort((a, b) => b.indexTajemna - a.indexTajemna).map(card).join("")}
        </div>
      </section>`).join("")}
    </main>`;
  const script = `<script>
(() => {
  const input = document.getElementById("hubSearch");
  const count = document.getElementById("hubCount");
  const empty = document.getElementById("hubEmpty");
  const cards = Array.from(document.querySelectorAll(".hub-country .place-card"));
  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    let visible = 0;
    cards.forEach((card) => {
      const match = !query || query.split(/\\s+/).every((word) => card.dataset.search.includes(word));
      card.hidden = !match;
      if (match) visible += 1;
    });
    document.querySelectorAll(".hub-country").forEach((section) => {
      section.hidden = !section.querySelector(".place-card:not([hidden])");
    });
    count.textContent = visible;
    empty.hidden = visible > 0;
  });
})();
</script>`;
  return pageShell({
    title: `${tt(language, "hubTitle")} | MysteryMap`,
    description: tt(language, "hubIntro"),
    body,
    canonical: `/${language}/`,
    alternates,
    language,
    indexable: items.length > 0,
    script,
    structuredData: `<script type="application/ld+json">${JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": tt(language, "hubTitle"),
      "description": tt(language, "hubIntro"),
      "url": absoluteUrl(`/${language}/`),
      "inLanguage": hreflangCode(language),
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": items.length,
        "itemListElement": items.map((place, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": placeField(place, "nazev", language),
          "url": absoluteUrl(placePath(place, language))
        }))
      }
    })}</script>`
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
    if (!hasPage(place, language)) return;
    writeFile(path.join(root, placePath(place, language), "index.html"), placePage(place, language));
  });
  if (locales[language].onlyTranslated) {
    writeFile(path.join(root, language, "index.html"), hubPage(language));
    return;
  }
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

// Sitemap obsahuje jen kanonické a indexovatelné URL.
const sitemapUrls = [
  "/",
  "/cs/clanky/",
  ...Object.keys(locales).filter((language) => locales[language].onlyTranslated && places.some((place) => hasPage(place, language))).map((language) => `/${language}/`),
  ...Object.keys(locales).flatMap((language) => [
    ...articles.filter((article) => isIndexable(article, "article", language)).map((article) => articlePath(article, language)),
    ...places.filter((place) => isIndexable(place, "place", language)).map((place) => placePath(place, language))
  ]),
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
  urls: Object.fromEntries(Object.keys(locales).filter((language) => hasPage(place, language)).map((language) => [language, placePath(place, language)])),
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
  urls: Object.fromEntries(Object.keys(locales).filter((language) => !locales[language].onlyTranslated).map((language) => [language, articlePath(article, language)])),
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
