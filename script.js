const problemsData = {
  debt: {
    icon: "05",
    title: "Задолженность за коммуналку",
    steps: [
      "Запросите детализацию начислений в УК или ЕИРЦ",
      "Проверьте правильность тарифов (ПП РФ №354)",
      "Подайте письменную претензию в УК",
      "Обратитесь в ГЖИ при бездействии",
      "При необходимости — обращение в суд",
    ],
    docs: [
      "Заявление о детализации",
      "Претензия в УК",
      "Жалоба в ГЖИ",
      "Исковое заявление",
    ],
    laws: ["ЖК РФ ст. 153-157", "ПП РФ №354", "ГК РФ ст. 196"],
    where: ["УК", "ГЖИ", "Мировой суд", "Районный суд"],
  },
  roof: {
    icon: "01",
    title: "Течь в крыше",
    steps: [
      "Зафиксируйте повреждения (фото/видео)",
      "Подайте заявку в УК письменно",
      "Потребуйте акт обследования",
      "Жалоба в ГЖИ при бездействии",
      "Возмещение ущерба через суд",
    ],
    docs: [
      "Заявление в УК",
      "Акт обследования",
      "Претензия о возмещении",
      "Исковое заявление",
    ],
    laws: ["ЖК РФ ст. 161-162", "ПП РФ №491 п. 10-11", "ГК РФ ст. 1064"],
    where: ["УК", "ГЖИ", "Прокуратура", "Районный суд"],
  },
  trash: {
    icon: "02",
    title: "Мусор не вывозят",
    steps: [
      "Зафиксируйте нарушение (фото с датой)",
      "Позвоните в УК, зафиксируйте обращение",
      "Письменная жалоба в УК",
      "Обращение в Роспотребнадзор",
      "Жалоба в ГЖИ",
    ],
    docs: ["Жалоба в УК", "Жалоба в Роспотребнадзор", "Обращение в ГЖИ"],
    laws: ["ФЗ-89", "СанПиН 2.1.3684-21", "ПП РФ №491"],
    where: ["УК", "Роспотребнадзор", "ГЖИ"],
  },
  repair_e: {
    icon: "08",
    title: "Плохой ремонт подъезда",
    steps: [
      "Изучите план работ УК",
      "Коллективное заявление в УК",
      "Собрание собственников",
      "Жалоба в ГЖИ",
      "Обращение в суд",
    ],
    docs: ["Коллективное заявление", "Протокол собрания", "Жалоба в ГЖИ"],
    laws: ["ЖК РФ ст. 161-162", "ПП РФ №491 п. 10", "ПП РФ №416"],
    where: ["УК", "ГЖИ", "Районный суд"],
  },
  uk: {
    icon: "03",
    title: "УК не отчитывается",
    steps: [
      "Письменный запрос в УК",
      "УК обязана ответить за 10 рабочих дней",
      "Проверьте ГИС ЖКХ",
      "Жалоба в ГЖИ",
      "Обращение в прокуратуру",
    ],
    docs: ["Запрос информации", "Жалоба в ГЖИ", "Заявление в прокуратуру"],
    laws: ["ЖК РФ ст. 162", "ПП РФ №416 п. 31", "ФЗ-209"],
    where: ["УК", "ГИС ЖКХ", "ГЖИ", "Прокуратура"],
  },
  water: {
    icon: "06",
    title: "Нет горячей воды",
    steps: [
      "Позвоните в аварийную службу",
      "Зафиксируйте факт (акт)",
      "Заявление на перерасчёт",
      "Жалоба в ГЖИ",
      "Неустойка через суд",
    ],
    docs: [
      "Акт об отсутствии услуги",
      "Заявление на перерасчёт",
      "Жалоба в ГЖИ",
    ],
    laws: ["ПП РФ №354 п. 5", "СанПиН (ГВС ≥ 60°C)", "ЗоЗПП"],
    where: ["Аварийная служба", "УК", "ГЖИ"],
  },
  heating: {
    icon: "07",
    title: "Перерасчёт за отопление",
    steps: [
      "Замерьте температуру (акт)",
      "Норма: ≥ +18°C (угловые ≥ +20°C)",
      "Заявление в УК",
      "Жалоба в ГЖИ",
      "Обращение в суд",
    ],
    docs: ["Акт замера", "Заявление на перерасчёт", "Претензия в УК"],
    laws: ["ПП РФ №354 Прил. 1", "ГОСТ 30494-2011", "ЖК РФ ст. 157"],
    where: ["УК", "ГЖИ", "Суд"],
  },
  yard: {
    icon: "04",
    title: "Снег и грязь во дворе",
    steps: [
      "Определите ответственного",
      "Заявление в организацию",
      "Фиксация (фото)",
      "Жалоба в администрацию",
      "Обращение в ГЖИ",
    ],
    docs: ["Заявление в УК", "Жалоба в администрацию", "Обращение в ГЖИ"],
    laws: ["ПП РФ №491", "Правила благоустройства", "КоАП ст. 7.22"],
    where: ["УК", "Администрация", "ГЖИ"],
  },
  neighbors: {
    icon: "09",
    title: "Споры с соседями",
    steps: [
      "Попробуйте договориться мирно",
      "Зафиксируйте нарушения (фото/видео/аудио)",
      "Письменная жалоба в УК",
      "Обращение к участковому",
      "Исковое заявление в суд",
    ],
    docs: ["Жалоба в УК", "Заявление участковому", "Исковое заявление"],
    laws: ["ЖК РФ ст. 17", "ГК РФ ст. 304", "КоАП ст. 6.3-6.4"],
    where: ["УК", "Участковый", "Мировой суд", "Районный суд"],
  },
};

let currentObj = null;
let currentCat = "all";

const objNames = {
  house: "Дом",
  apartment: "Квартира",
  entrance: "Подъезд",
};

function applyFilters() {
  return;
}

function selectObject(el, obj) {
  const wasActive = el.classList.contains("active");
  document
    .querySelectorAll(".object-card")
    .forEach((c) => c.classList.remove("active"));

  if (wasActive) {
    currentObj = null;
  } else {
    el.classList.add("active");
    currentObj = obj;
  }
  document
    .getElementById("usefulTips")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
  loadUsefulTips(currentObj ? objNames[obj] : null);
}

function clearObjectFilter() {
  currentObj = null;
  document
    .querySelectorAll(".object-card")
    .forEach((c) => c.classList.remove("active"));
  loadUsefulTips(null);
}

function filterByCategory(cat, btn) {
  currentCat = cat;
}

function openModal(id) {
  document.getElementById(id).classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeModal(id) {
  document.getElementById(id).classList.remove("active");
  document.body.style.overflow = "";
}
document.querySelectorAll(".modal-overlay").forEach((o) => {
  o.addEventListener("click", (e) => {
    if (e.target === o) {
      closeModal(o.id);
    }
  });
});

function renderLegacyProblem(problem) {
  return `
        <div style="text-align:center;margin-bottom:1.2rem;">
            <div style="width:54px;height:54px;margin:0 auto 0.65rem;border-radius:18px;display:flex;align-items:center;justify-content:center;background:linear-gradient(145deg, rgba(18, 59, 54, 0.1), rgba(184, 135, 70, 0.18));border:1px solid rgba(18, 59, 54, 0.08);font-size:0.82rem;font-weight:800;letter-spacing:0.12em;color:var(--primary);">${problem.icon}</div>
            <h2 style="font-family:'Playfair Display',serif;font-size:1.3rem;">${escapeHtml(problem.title)}</h2>
        </div>
        <div style="margin-bottom:1.2rem;">
            <h3 style="color:var(--primary);margin-bottom:0.5rem;font-size:0.92rem;font-weight:700;">Пошаговое решение</h3>
            <ol style="padding-left:1.2rem;display:flex;flex-direction:column;gap:0.3rem;font-size:0.86rem;">
                ${problem.steps.map((s) => `<li style="line-height:1.5;">${escapeHtml(s)}</li>`).join("")}
            </ol>
        </div>
        <div style="margin-bottom:1.2rem;">
            <h3 style="color:var(--primary);margin-bottom:0.5rem;font-size:0.92rem;font-weight:700;">Документы</h3>
            <div style="display:flex;flex-direction:column;gap:0.3rem;">
                ${problem.docs
                  .map(
                    (
                      doc,
                    ) => `<div style="display:flex;align-items:center;gap:0.5rem;padding:0.5rem 0.7rem;background:var(--bg);border-radius:6px;cursor:pointer;font-size:0.84rem;">
                    <span style="width:22px;height:22px;border-radius:999px;background:rgba(18,59,54,0.08);display:inline-flex;align-items:center;justify-content:center;color:var(--primary);font-size:0.62rem;font-weight:800;">D</span><span style="flex:1;font-weight:500;">${escapeHtml(doc)}</span><span style="color:var(--primary);font-size:0.76rem;font-weight:700;">Скачать</span>
                </div>`,
                  )
                  .join("")}
            </div>
        </div>
        <div>
            <h3 style="color:var(--primary);margin-bottom:0.5rem;font-size:0.92rem;font-weight:700;">Контактная информация</h3>
            <div style="display:flex;flex-wrap:wrap;gap:0.35rem;">
                ${problem.where.map((place) => `<span style="background:var(--bg);padding:0.3rem 0.7rem;border-radius:50px;font-size:0.78rem;font-weight:500;">${escapeHtml(place)}</span>`).join("")}
            </div>
        </div>`;
}

function setSearch(t) {
  document.getElementById("searchInput").value = t;
  performSearch();
}
async function performSearch() {
  const q = document.getElementById("searchInput").value.trim();
  if (!q) {
    return;
  }

  try {
    openModal("searchResultsModal");
    renderSearchResultsState("Ищем совпадения по базе знаний...");
    const response = await fetchSearchResults(q, 6);
    renderSearchResults(response, q);
  } catch (error) {
    renderSearchResultsState(
      error.message || "Не удалось выполнить поиск",
      true,
    );
  }
}

function setMenuState(isOpen) {
  const nav = document.getElementById("mainNav");
  const burger = document.querySelector(".burger");

  if (!nav) {
    return;
  }

  nav.classList.toggle("active", isOpen);
  burger?.setAttribute("aria-expanded", String(isOpen));
}

function closeMenu() {
  setMenuState(false);
}

function toggleMenu() {
  const nav = document.getElementById("mainNav");
  if (!nav) {
    return;
  }

  setMenuState(!nav.classList.contains("active"));
}

const API_BASE_URL = "/api/v1";
const NEWS_PAGE = 1;
const NEWS_LIMIT = 4;
const NEWS_ALL_LIMIT = 20;
const TOKEN_STORAGE_KEY = "vesta_auth_token_session";
const ACCOUNT_EMAIL_STORAGE_KEY = "vesta_account_email_session";
const SHOW_OTHERS_STORAGE_KEY = "vesta_map_show_others";
const MAP_MARKER_FETCH_DEBOUNCE_MS = 350;
const DEFAULT_MAP_CENTER = [56.0106, 92.8526];

let currentDocumentType = "application";
let currentAreaScope = "Квартира";
let currentDocumentsMode = "application";
let currentHouseDocumentGroup = "housing_inspection";
const allNewsState = {
  nextPage: 1,
  totalPages: 1,
  hasMore: true,
  loading: false,
  items: [],
};
const managementCompaniesState = {
  nextPage: 1,
  totalPages: 1,
  hasMore: true,
  loading: false,
  items: [],
};
const tariffsState = {
  loading: false,
  items: [],
  loaded: false,
};
const emergencyServicesState = {
  loading: false,
  loaded: false,
  items: [],
};
const usefulTipsState = {
  scope: null,
  loading: false,
  items: [],
  allPopularItems: [],
  detailCache: new Map(),
  currentPage: 0,
  pageSize: 3,
};
const USEFUL_TIP_RELEVANCE_DATE = "14.04.2026";
let allNewsObserver = null;
let managementCompaniesObserver = null;
let previewMapInstance = null;
let modalMapInstance = null;
let previewMarkersLayer = null;
let modalMarkersLayer = null;
let createMarkerLayer = null;
let lastMapPageTrigger = null;
let districtCourtMapInstance = null;
let districtCourtMapLayer = null;
let districtCourtRouteLayer = null;

const districtCourtState = {
  result: null,
  loading: false,
};

const mapState = {
  markerTypes: [],
  markerTypesLoaded: false,
  markers: [],
  markersById: new Map(),
  visibleMarkers: [],
  selectedMarkerId: null,
  isCreateMode: false,
  selectedPoint: null,
  loadingMarkers: false,
  loadingTypes: false,
  lastModalBoundsKey: "",
  modalFetchTimer: null,
  showOthers: localStorage.getItem(SHOW_OTHERS_STORAGE_KEY) !== "0",
  lastMarkerClickAt: 0,
};

const MAP_ICON_LABELS = {
  bolt: "EL",
  droplet: "WA",
  flame: "HT",
  alert_triangle: "AL",
  trash: "TR",
  leak: "LK",
  elevator: "LV",
  broom: "CL",
  shield: "HZ",
  map_pin: "MP",
};

const calendarState = {
  currentDate: new Date(),
  selectedDate: null,
  monthItems: [],
  dayItems: [],
  loadingMonth: false,
  loadingDay: false,
  isCreateFormOpen: false,
  mobilePanel: "events",
};

const localUsefulTipsByScope = {
  Дом: {
    popular: [
      {
        slug: "house-season-check",
        title: "Проверьте дом перед сезоном",
        preview_text: "Что проверить в общедомовом имуществе до осени и зимы.",
        area_scope: "Дом",
        documents_count: 2,
        regulatory_documents_count: 3,
        management_companies_count: 1,
      },
      {
        slug: "house-meeting-prep",
        title: "Как подготовить собрание собственников",
        preview_text:
          "Минимальный набор шагов и документов перед проведением ОСС.",
        area_scope: "Дом",
        documents_count: 3,
        regulatory_documents_count: 2,
        management_companies_count: 0,
      },
    ],
    items: [
      {
        slug: "house-season-check",
        title: "Проверьте дом перед сезоном",
        preview_text: "Что проверить в общедомовом имуществе до осени и зимы.",
        area_scope: "Дом",
        documents_count: 2,
        regulatory_documents_count: 3,
        management_companies_count: 1,
      },
      {
        slug: "house-meeting-prep",
        title: "Как подготовить собрание собственников",
        preview_text:
          "Минимальный набор шагов и документов перед проведением ОСС.",
        area_scope: "Дом",
        documents_count: 3,
        regulatory_documents_count: 2,
        management_companies_count: 0,
      },
      {
        slug: "house-claims-log",
        title: "Ведите журнал обращений в УК",
        preview_text:
          "Одна таблица помогает видеть сроки, номера заявок и ответы.",
        area_scope: "Дом",
        documents_count: 1,
        regulatory_documents_count: 1,
        management_companies_count: 1,
      },
    ],
  },
  Подъезд: {
    popular: [
      {
        slug: "entrance-photo-fix",
        title: "Сначала фиксируйте нарушения",
        preview_text: "Фото и даты сильно повышают шанс на быстрый результат.",
        area_scope: "Подъезд",
        documents_count: 1,
        regulatory_documents_count: 2,
        management_companies_count: 1,
      },
      {
        slug: "entrance-collective-claim",
        title: "Коллективное обращение работает лучше",
        preview_text:
          "Для подъезда обычно лучше сразу собирать несколько подписей.",
        area_scope: "Подъезд",
        documents_count: 2,
        regulatory_documents_count: 2,
        management_companies_count: 1,
      },
    ],
    items: [
      {
        slug: "entrance-photo-fix",
        title: "Сначала фиксируйте нарушения",
        preview_text: "Фото и даты сильно повышают шанс на быстрый результат.",
        area_scope: "Подъезд",
        documents_count: 1,
        regulatory_documents_count: 2,
        management_companies_count: 1,
      },
      {
        slug: "entrance-collective-claim",
        title: "Коллективное обращение работает лучше",
        preview_text:
          "Для подъезда обычно лучше сразу собирать несколько подписей.",
        area_scope: "Подъезд",
        documents_count: 2,
        regulatory_documents_count: 2,
        management_companies_count: 1,
      },
      {
        slug: "entrance-cleaning-check",
        title: "Проверяйте график уборки",
        preview_text:
          "Сверьте фактическую уборку с графиком и фиксируйте отступления.",
        area_scope: "Подъезд",
        documents_count: 1,
        regulatory_documents_count: 1,
        management_companies_count: 1,
      },
    ],
  },
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function setStatus(elementId, text, type = "info") {
  const el = document.getElementById(elementId);
  if (!el) return;
  if (!text) {
    el.className = "form-status";
    el.textContent = "";
    return;
  }
  el.className = `form-status show ${type}`;
  el.textContent = text;
}

function buildUserErrorMessage(status, path, apiError = "") {
  const normalizedPath = String(path || "");
  const normalizedError = String(apiError || "")
    .trim()
    .toLowerCase();

  if (
    normalizedError.includes("failed to fetch") ||
    normalizedError.includes("networkerror")
  ) {
    return "Не удалось связаться с сервером. Проверьте интернет-соединение и попробуйте еще раз.";
  }

  if (normalizedPath.includes("/auth/login")) {
    if (status === 400) return "Проверьте email и пароль и попробуйте снова.";
    if (status === 401) return "Неверный пароль. Попробуйте еще раз.";
    if (status === 403)
      return "Аккаунт временно недоступен. Обратитесь к администратору или попробуйте позже.";
    if (status === 404) return "Пользователь с таким email не найден.";
  }

  if (normalizedPath.includes("/auth/register")) {
    if (status === 400)
      return "Не удалось создать аккаунт. Проверьте правильность email и длину пароля.";
    if (status === 409)
      return "Аккаунт с таким email уже существует. Попробуйте войти.";
  }

  if (normalizedPath.includes("/auth/introspect")) {
    if (status === 400) return "Сессия истекла. Войдите в аккаунт еще раз.";
  }

  if (normalizedPath.includes("/map-markers")) {
    if (status === 400)
      return "Не удалось обработать данные метки. Проверьте введенную информацию.";
    if (status === 401)
      return "Чтобы работать с метками, нужно войти в аккаунт.";
    if (status === 403) return "Эта метка вам недоступна.";
    if (status === 404) return "Метка не найдена. Возможно, она уже удалена.";
    if (status === 422)
      return "Лимит активных меток исчерпан. Удалите старую метку или подождите.";
    if (status === 429)
      return "Слишком много действий за короткое время. Попробуйте через минуту.";
  }

  if (normalizedPath.includes("/calendar/notes")) {
    if (status === 400)
      return "Не удалось сохранить данные календаря. Проверьте заполненные поля.";
    if (status === 401)
      return "Чтобы пользоваться календарем, нужно войти в аккаунт.";
    if (status === 403) return "Эта заметка вам недоступна.";
    if (status === 404)
      return "Заметка не найдена. Возможно, она уже была удалена.";
  }

  if (normalizedPath.includes("/send-question")) {
    if (status === 400)
      return "Проверьте имя и описание проблемы, затем попробуйте еще раз.";
    if (status === 401) return "Чтобы отправить вопрос, нужно войти в аккаунт.";
  }

  if (normalizedPath.includes("/district-courts/nearest")) {
    if (status === 400)
      return "Введите адрес в Красноярске, чтобы мы смогли найти районный суд.";
    if (status === 404)
      return "По этому адресу не удалось определить районный суд. Попробуйте указать адрес точнее.";
  }

  if (normalizedPath.includes("/files")) {
    if (status === 400)
      return "Не удалось обработать документ. Проверьте параметры и попробуйте снова.";
    if (status === 404) return "Документ не найден или больше недоступен.";
  }

  if (normalizedPath.includes("/search")) {
    if (status === 400) return "Введите более точный поисковый запрос.";
  }

  if (status === 400)
    return "Не удалось обработать запрос. Проверьте введенные данные.";
  if (status === 401) return "Нужно войти в аккаунт, чтобы продолжить.";
  if (status === 403) return "У вас нет доступа к этому действию.";
  if (status === 404) return "Нужные данные не найдены.";
  if (status === 409)
    return "Такое действие сейчас недоступно из-за конфликта данных. Попробуйте обновить страницу.";
  if (status === 422)
    return "Не удалось выполнить действие из-за ограничений по данным.";
  if (status === 429)
    return "Слишком много запросов. Подождите немного и попробуйте снова.";
  if (status >= 500)
    return "На сервере произошла ошибка. Мы уже получили запрос, попробуйте немного позже.";

  return "Произошла ошибка. Попробуйте еще раз.";
}

function createUserFacingError(message, details = "") {
  const error = new Error(message);
  error.details = details;
  return error;
}

async function apiRequest(path, options = {}) {
  const {
    method = "GET",
    body = null,
    headers = {},
    isFormData = false,
    credentials = "omit",
    auth = false,
  } = options;

  const finalHeaders = { ...headers };
  const finalCredentials =
    auth && credentials === "omit" ? "include" : credentials;
  const hasBody = body !== null && body !== undefined;
  if (!isFormData && hasBody) {
    finalHeaders["Content-Type"] = "application/json";
  }
  if (auth) {
    const token = sessionStorage.getItem(TOKEN_STORAGE_KEY);
    if (token) {
      finalHeaders.Authorization = `Bearer ${token}`;
    }
  }

  let response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      method,
      headers: finalHeaders,
      body: body ? (isFormData ? body : JSON.stringify(body)) : null,
      credentials: finalCredentials,
    });
  } catch (error) {
    throw createUserFacingError(
      buildUserErrorMessage(0, path, error?.message || ""),
      error?.message || "",
    );
  }

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw createUserFacingError(
      buildUserErrorMessage(response.status, path, payload?.error || ""),
      payload?.error || `HTTP ${response.status}`,
    );
  }
  return payload;
}

function formatNewsDate(dateValue) {
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return "Дата не указана";
  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function renderNewsState(message, isError = false) {
  const newsList = document.getElementById("newsList");
  if (!newsList) return;
  newsList.innerHTML = `<div class="news-state ${isError ? "error" : ""}">${escapeHtml(message)}</div>`;
}

function renderNews(items) {
  const newsList = document.getElementById("newsList");
  if (!newsList) return;
  if (!items.length) {
    renderNewsState("Пока нет новостей");
    return;
  }

  newsList.innerHTML = items
    .map((item) => {
      const hasImage =
        typeof item.image_url === "string" && item.image_url.length > 0;
      const description =
        typeof item.description === "string" &&
        item.description.trim().length > 0
          ? `<p class="news-description">${escapeHtml(item.description)}</p>`
          : "";
      const source = item.source_name || item.channel_title || "Источник";
      return `
        <article class="news-item">
          <a class="news-link ${hasImage ? "" : "no-image"}" href="${escapeHtml(item.link || "#")}" target="_blank" rel="noopener noreferrer">
            ${hasImage ? `<img class="news-thumb" src="${escapeHtml(item.image_url)}" alt="${escapeHtml(item.title || "Новость")}" loading="lazy">` : ""}
            <div>
              <div class="news-date">${escapeHtml(formatNewsDate(item.pub_date))}</div>
              <h4>${escapeHtml(item.title || "Без заголовка")}</h4>
              ${description}
              <span class="news-tag">${escapeHtml(source)}</span>
            </div>
          </a>
        </article>
      `;
    })
    .join("");
}

async function loadNews() {
  const params = new URLSearchParams({
    page: String(NEWS_PAGE),
    limit: String(NEWS_LIMIT),
  });
  renderNewsState("Загрузка новостей...");
  try {
    const data = await apiRequest(`/news?${params.toString()}`);
    const items = Array.isArray(data.items) ? data.items : [];
    items.sort((a, b) => new Date(b.pub_date) - new Date(a.pub_date));
    renderNews(items);
  } catch (error) {
    renderNewsState(error.message || "Ошибка загрузки новостей", true);
  } finally {
    syncNewsAreaHeight();
  }
}

function syncNewsAreaHeight() {
  const topLeft = document.querySelector(".top-left");
  const newsArea = document.querySelector(".news-area");

  if (!topLeft || !newsArea) {
    return;
  }

  if (window.innerWidth <= 1180) {
    newsArea.style.height = "";
    newsArea.style.minHeight = "";
    newsArea.style.maxHeight = "";
    return;
  }

  const targetHeight = Math.ceil(topLeft.getBoundingClientRect().height);
  if (!targetHeight) {
    return;
  }

  const syncedHeight = `${targetHeight}px`;
  newsArea.style.height = syncedHeight;
  newsArea.style.minHeight = syncedHeight;
  newsArea.style.maxHeight = syncedHeight;
}

function formatUsefulTipsMeta(items) {
  if (!Array.isArray(items) || !items.length) return "";
  return `${items.length} карточек`;
}

function getUsefulTipsPageSize() {
  if (window.innerWidth <= 700) return 1;
  if (window.innerWidth <= 1080) return 2;
  return 3;
}

function syncUsefulTipsLayout() {
  const grid = document.getElementById("usefulTipsGrid");
  usefulTipsState.pageSize = getUsefulTipsPageSize();

  if (grid) {
    grid.style.setProperty(
      "--useful-tips-page-size",
      String(usefulTipsState.pageSize),
    );
  }

  if (!usefulTipsState.scope) {
    renderUsefulTipsCards(usefulTipsState.items, "usefulTipsGrid");
    return;
  }

  const pageCount = Math.max(
    1,
    Math.ceil(usefulTipsState.items.length / usefulTipsState.pageSize),
  );
  if (usefulTipsState.currentPage > pageCount - 1) {
    usefulTipsState.currentPage = pageCount - 1;
  }

  renderUsefulTipsCards(usefulTipsState.items, "usefulTipsGrid");
}

function getUsefulTipsPageItems(items) {
  if (!usefulTipsState.scope) {
    return items.slice(0, 6);
  }
  const start = usefulTipsState.currentPage * usefulTipsState.pageSize;
  return items.slice(start, start + usefulTipsState.pageSize);
}

function updateUsefulTipsPager(items) {
  const nav = document.getElementById("usefulTipsNav");
  const prevBtn = document.getElementById("usefulTipsPrevBtn");
  const nextBtn = document.getElementById("usefulTipsNextBtn");
  const title = document.getElementById("usefulTipsSectionTitle");
  const subtitle = document.getElementById("usefulTipsSubtitle");
  const meta = document.getElementById("usefulTipsMeta");
  const pageCount = Math.max(
    1,
    Math.ceil(items.length / usefulTipsState.pageSize),
  );

  if (title) {
    title.textContent = usefulTipsState.scope
      ? `${usefulTipsState.scope}: полезные советы`
      : "Популярные советы";
  }
  if (subtitle) {
    subtitle.textContent = usefulTipsState.scope
      ? "Показаны советы по выбранному объекту. Листайте карточки стрелками."
      : "Самые популярные советы по квартире, дому и подъезду.";
  }
  if (nav) {
    nav.style.display = usefulTipsState.scope ? "flex" : "none";
  }
  if (prevBtn) {
    prevBtn.disabled = usefulTipsState.currentPage <= 0;
  }
  if (nextBtn) {
    nextBtn.disabled = usefulTipsState.currentPage >= pageCount - 1;
  }
}

function renderUsefulTipsCards(items, targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.style.setProperty(
    "--useful-tips-page-size",
    String(usefulTipsState.pageSize),
  );

  if (!items.length) {
    el.innerHTML = `<div class="news-state">Советы пока не найдены.</div>`;
    updateUsefulTipsPager([]);
    return;
  }

  const pageItems = getUsefulTipsPageItems(items);
  updateUsefulTipsPager(items);

  el.classList.toggle(
    "useful-tips-grid--paged",
    Boolean(usefulTipsState.scope),
  );
  el.style.setProperty(
    "--useful-tips-visible-count",
    String(Math.max(1, pageItems.length)),
  );

  el.innerHTML = pageItems
    .map((item) => {
      const sectionTitles = Array.isArray(item.section_titles)
        ? item.section_titles.slice(0, 4)
        : [];
      const outline = sectionTitles.length ? sectionTitles.join(", ") : "";
      return `
        <article class="useful-tip-card" data-tip-slug="${escapeHtml(item.slug)}">
          <div class="useful-tip-card-body">
            <div class="useful-tip-card-top">
              <div class="useful-tip-badge">${escapeHtml(item.area_scope || usefulTipsState.scope)}</div>
            </div>
            <h3>${escapeHtml(item.title || "Полезный совет")}</h3>
            <p>${escapeHtml(item.preview_text || item.intro_text || "")}</p>
            ${outline ? `<div class="useful-tip-outline">${escapeHtml(outline)}</div>` : ""}
          </div>
          <div class="useful-tip-card-footer">
            <span class="useful-tip-card-meta">Актуален на ${USEFUL_TIP_RELEVANCE_DATE}</span>
            <button type="button" class="useful-tip-open-btn">Открыть</button>
          </div>
        </article>
      `;
    })
    .join("");

  el.querySelectorAll("[data-tip-slug]").forEach((card) => {
    card.addEventListener("click", () => {
      const slug = card.getAttribute("data-tip-slug");
      if (slug) {
        openUsefulTip(slug);
      }
    });
  });
}

function renderUsefulTipDetail(detail) {
  const container = document.getElementById("usefulTipContent");
  if (!container) return;

  const sections = Array.isArray(detail?.sections) ? detail.sections : [];
  const documents = Array.isArray(detail?.documents) ? detail.documents : [];
  const legalLinks = Array.isArray(detail?.legal_links)
    ? detail.legal_links.filter(
        (item) =>
          item &&
          typeof item.title === "string" &&
          item.title.trim() &&
          typeof item.url === "string" &&
          item.url.trim(),
      )
    : [];
  const managementCompanies = Array.isArray(detail?.management_companies)
    ? detail.management_companies
    : [];
  const hasLegalLinks = legalLinks.length > 0;
  const hasDocuments = documents.length > 0;
  const hasManagementCompanies = managementCompanies.length > 0;

  container.innerHTML = `
    <div class="useful-tip-detail-head">
      <div class="useful-tip-badge">${escapeHtml(detail?.area_scope || usefulTipsState.scope)}</div>
      <h2>${escapeHtml(detail?.title || "Полезный совет")}</h2>
      <p class="useful-tip-detail-intro">${escapeHtml(detail?.intro_text || detail?.preview_text || "")}</p>
    </div>
    <div class="useful-tip-detail-layout">
      <div class="useful-tip-detail-sections">
        ${sections
          .map(
            (section) => `
              <section class="useful-tip-detail-section">
                <h3>${escapeHtml(section.title || "Раздел")}</h3>
                ${section.body ? `<p>${escapeHtml(section.body)}</p>` : ""}
                ${
                  Array.isArray(section.items) && section.items.length
                    ? `<ul>${section.items
                        .map(
                          (item) =>
                            `<li>${escapeHtml(item.content || "")}</li>`,
                        )
                        .join("")}</ul>`
                    : ""
                }
              </section>
            `,
          )
          .join("")}
      </div>
      <div class="useful-tip-detail-grid">
        ${
          hasLegalLinks
            ? `<section class="useful-tip-side-block useful-tip-legal-block">
        <h3>Нормативная база</h3>
        <div class="useful-tip-legal-list">
          ${legalLinks
            .map(
              (item) => `
                      <a
                        href="${escapeHtml(item.url)}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="useful-tip-legal-link"
                      >
                        <span class="useful-tip-legal-link-title">${escapeHtml(item.title)}</span>
                        <span class="useful-tip-legal-link-meta">Открыть источник</span>
                      </a>
                    `,
            )
            .join("")}
        </div>
        </section>`
            : ""
        }
        ${
          hasDocuments
            ? `<section class="useful-tip-side-block">
        <h3>Документы</h3>
        <div class="useful-tip-side-list">
          ${documents
            .map(
              (doc) => `
                      <button
                        type="button"
                        class="useful-side-item"
                        data-useful-doc-id="${escapeHtml(doc.id)}"
                        data-useful-doc-title="${escapeHtml(doc.title || "Документ")}"
                        data-useful-doc-original="${escapeHtml(doc.original_name || "")}"
                      >
                        <span>${escapeHtml(doc.title || doc.original_name || "Документ")}</span>
                        <strong>Скачать</strong>
                      </button>
                    `,
            )
            .join("")}
        </div>
        </section>`
            : ""
        }
        ${
          hasManagementCompanies
            ? `<section class="useful-tip-side-block">
        <h3>Управляющие компании</h3>
        <div class="useful-tip-side-list">
          ${managementCompanies
            .map(
              (company) => `
                      <div class="useful-side-item useful-side-static">
                        <span>${escapeHtml(company.name || "УК")}</span>
                        <strong>${escapeHtml(company.address || "Адрес не указан")}</strong>
                        ${
                          company?.phone?.raw
                            ? `<a href="tel:${escapeHtml(company.phone.normalized || company.phone.raw)}">${escapeHtml(company.phone.raw)}</a>`
                            : ""
                        }
                      </div>
                    `,
            )
            .join("")}
        </div>
        </section>
            `
            : ""
        }
      </div>
    </div>
  `;

  container.querySelectorAll("[data-useful-doc-id]").forEach((button) => {
    button.addEventListener("click", handleUsefulTipDocumentDownload);
  });
}

async function handleUsefulTipDocumentDownload(event) {
  event.preventDefault();
  event.stopPropagation();

  const button = event.currentTarget?.closest?.("[data-useful-doc-id]");
  if (!button) return;

  const fileId = button.getAttribute("data-useful-doc-id");
  const title = button.getAttribute("data-useful-doc-title") || "Документ";
  const originalName = button.getAttribute("data-useful-doc-original") || "";
  if (!fileId) return;

  try {
    const url = await getDocumentDownloadUrl(fileId);
    if (url) {
      try {
        await forceDownloadByTitle(url, title, originalName);
      } catch (_downloadError) {
        window.open(url, "_blank", "noopener,noreferrer");
      }
    }
  } catch (error) {
    setStatus(
      "usefulTipsStatus",
      error.message || "Не удалось скачать документ",
      "error",
    );
  }
}

function renderAllNewsState(message, isError = false) {
  setStatus("allNewsStatus", message, isError ? "error" : "info");
}

function renderSearchResultsState(message, isError = false) {
  setStatus("searchResultsStatus", message, isError ? "error" : "info");
  const content = document.getElementById("searchResultsContent");
  const meta = document.getElementById("searchResultsMeta");
  if (meta && message) {
    meta.textContent = message;
  }
  if (content) {
    content.innerHTML = "";
  }
}

function renderSearchSection(title, count, content) {
  return `
    <section class="search-result-section">
      <div class="search-result-section-head">
        <h3>${escapeHtml(title)}</h3>
        <span>${escapeHtml(String(count))}</span>
      </div>
      <div class="search-result-list">
        ${content}
      </div>
    </section>
  `;
}

function getSearchGroupTitle(type, fallbackLabel = "") {
  if (type === "useful_tip") return "Полезные советы";
  if (type === "template_file") return "Шаблоны документов";
  if (type === "regulatory_document") return "Нормативные документы";
  return fallbackLabel || "Результаты";
}

function getSearchActionLabel(actionType) {
  if (actionType === "download") return "Скачать";
  if (actionType === "external") return "Открыть ссылку";
  return "Открыть";
}

function getSearchActionMetaLabel(actionType) {
  if (actionType === "download") return "Шаблон документа";
  if (actionType === "external") return "Внешний источник";
  return "Материал базы";
}

function resolveSearchActionUrl(url, actionType = "navigate") {
  if (!url) return "";
  if (/^https?:\/\//i.test(url)) return url;
  if (url.startsWith("/") && actionType === "download") {
    return `${API_BASE_URL}${url}`;
  }
  return url;
}

function getUsefulTipSlugFromSearchUrl(url) {
  if (!url) return "";
  const hashMatch = url.match(/#tip\/([^/?#]+)/i);
  if (hashMatch?.[1]) {
    return decodeURIComponent(hashMatch[1]);
  }

  const pathMatch = url.match(/\/useful-tips\/([^/?#]+)/i);
  if (pathMatch?.[1]) {
    return decodeURIComponent(pathMatch[1]);
  }

  return "";
}

function groupSearchItems(items) {
  return items.reduce((groups, item) => {
    const key = item?.type || "other";
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {});
}

function getApiPathFromUrl(url) {
  if (!url) return "";
  if (url.startsWith("/")) return url;

  try {
    const parsedUrl = new URL(url, window.location.origin);
    const apiBase = new URL(API_BASE_URL, window.location.origin);
    if (parsedUrl.origin === apiBase.origin) {
      return `${parsedUrl.pathname}${parsedUrl.search}`;
    }
  } catch (_error) {
    return "";
  }

  return "";
}

async function resolveDownloadTarget(actionUrl) {
  const apiPath = getApiPathFromUrl(actionUrl);
  if (!apiPath) {
    return {
      url: resolveSearchActionUrl(actionUrl, "download"),
      originalName: "",
    };
  }

  const payload = await apiRequest(apiPath);
  return {
    url: payload?.url || resolveSearchActionUrl(actionUrl, "download"),
    originalName: payload?.original_name || payload?.file_name || "",
  };
}

async function handleSearchResultAction(button) {
  if (!button) return;

  const actionType =
    button.getAttribute("data-search-action-type") || "navigate";
  const actionUrl = button.getAttribute("data-search-action-url") || "";
  const resultType = button.getAttribute("data-search-result-type") || "";
  if (!actionUrl) return;

  if (actionType === "download") {
    try {
      const title =
        button.getAttribute("data-search-result-title") || "Документ";
      const downloadTarget = await resolveDownloadTarget(actionUrl);
      await forceDownloadByTitle(
        downloadTarget.url,
        title,
        downloadTarget.originalName,
      );
    } catch (_downloadError) {
      window.open(
        resolveSearchActionUrl(actionUrl, actionType),
        "_blank",
        "noopener,noreferrer",
      );
    }
    return;
  }

  if (resultType === "useful_tip" || actionType === "navigate") {
    const slug = getUsefulTipSlugFromSearchUrl(actionUrl);
    if (slug) {
      closeModal("searchResultsModal");
      await openUsefulTip(slug);
      return;
    }
  }

  const finalUrl = resolveSearchActionUrl(actionUrl, actionType);
  if (!finalUrl) return;

  if (actionType === "external") {
    window.open(finalUrl, "_blank", "noopener,noreferrer");
    return;
  }

  window.open(finalUrl, "_blank", "noopener,noreferrer");
}

function renderSearchResults(response, rawQuery) {
  const content = document.getElementById("searchResultsContent");
  const meta = document.getElementById("searchResultsMeta");
  if (!content || !meta) return;

  const items = Array.isArray(response?.items) ? response.items : [];
  const total = Number(response?.total) || items.length;
  const query = String(response?.query || rawQuery || "").trim();

  meta.textContent = total
    ? `По запросу «${query}» найдено ${total} ${total === 1 ? "совпадение" : total < 5 ? "совпадения" : "совпадений"}.`
    : `По запросу «${query}» ничего не найдено.`;

  renderSearchResultsState("", false);

  if (!total) {
    content.innerHTML = `
      <div class="search-empty-state">
        <h3>Ничего не найдено</h3>
        <p>Попробуйте другую формулировку: например, «отключили воду», «перерасчёт» или «заявление в УК».</p>
      </div>
    `;
    return;
  }

  const listMarkup = items
    .map((item) => {
      const actionType = item?.action?.type || "navigate";
      const actionLabel = getSearchActionLabel(actionType);
      const typeLabel =
        item?.type_label ||
        getSearchGroupTitle(item?.type || "other", "Результат");
      return `
        <button
          type="button"
          class="search-result-card"
          data-search-result-type="${escapeHtml(item?.type || "")}"
          data-search-result-title="${escapeHtml(item?.title || "Результат поиска")}"
          data-search-action-type="${escapeHtml(actionType)}"
          data-search-action-url="${escapeHtml(item?.action?.url || "")}"
        >
          <div class="search-result-card-top">
            <div class="search-result-card-meta">
              <span class="search-result-badge">${escapeHtml(typeLabel)}</span>
              ${
                item?.area_scope
                  ? `<span class="search-result-tag">${escapeHtml(item.area_scope)}</span>`
                  : ""
              }
            </div>
            <span class="search-result-action">${escapeHtml(actionLabel)}</span>
          </div>
          <h4>${escapeHtml(item?.title || "Результат поиска")}</h4>
          <p>${escapeHtml(item?.snippet || "Открыть найденный материал.")}</p>
          <div class="search-result-footer">
            <span class="search-result-kind">${escapeHtml(getSearchActionMetaLabel(actionType))}</span>
          </div>
        </button>
      `;
    })
    .join("");

  content.innerHTML = `
    <div class="search-results-list">
      ${listMarkup}
    </div>
  `;

  content.querySelectorAll("[data-search-action-url]").forEach((button) => {
    button.addEventListener("click", async () => {
      try {
        await handleSearchResultAction(button);
      } catch (error) {
        renderSearchResultsState(
          error.message || "Не удалось открыть результат поиска",
          true,
        );
      }
    });
  });
}

function updateAllNewsControls() {
  const pageInfo = document.getElementById("allNewsPageInfo");
  const moreBtn = document.getElementById("allNewsMoreBtn");
  if (!pageInfo || !moreBtn) return;

  const loadedPages = Math.max(0, allNewsState.nextPage - 1);
  pageInfo.textContent =
    loadedPages > 0
      ? `Страница ${loadedPages} из ${allNewsState.totalPages}`
      : "";

  moreBtn.style.display = allNewsState.hasMore ? "inline-flex" : "none";
  moreBtn.disabled = allNewsState.loading;
  moreBtn.textContent = allNewsState.loading ? "Загрузка..." : "Загрузить ещё";
}

function renderAllNews(items) {
  const listEl = document.getElementById("allNewsList");
  if (!listEl) return;
  if (!items.length) {
    listEl.innerHTML = `<div class="news-state">Новостей пока нет</div>`;
    return;
  }

  listEl.innerHTML = items
    .map((item) => {
      const hasImage =
        typeof item.image_url === "string" && item.image_url.length > 0;
      const description =
        typeof item.description === "string" &&
        item.description.trim().length > 0
          ? `<p class="news-description">${escapeHtml(item.description)}</p>`
          : "";
      const source = item.source_name || item.channel_title || "Источник";
      return `
        <article class="news-item">
          <a class="news-link ${hasImage ? "" : "no-image"}" href="${escapeHtml(item.link || "#")}" target="_blank" rel="noopener noreferrer">
            ${hasImage ? `<img class="news-thumb" src="${escapeHtml(item.image_url)}" alt="${escapeHtml(item.title || "Новость")}" loading="lazy">` : ""}
            <div>
              <div class="news-date">${escapeHtml(formatNewsDate(item.pub_date))}</div>
              <h4>${escapeHtml(item.title || "Без заголовка")}</h4>
              ${description}
              <span class="news-tag">${escapeHtml(source)}</span>
            </div>
          </a>
        </article>
      `;
    })
    .join("");
}

function mergeUniqueNews(existing, incoming) {
  const seen = new Set(existing.map((item) => item.id));
  const result = [...existing];
  incoming.forEach((item) => {
    if (!seen.has(item.id)) {
      result.push(item);
      seen.add(item.id);
    }
  });
  return result;
}

async function loadAllNews(reset = false) {
  if (allNewsState.loading) return;
  if (reset) {
    allNewsState.nextPage = 1;
    allNewsState.totalPages = 1;
    allNewsState.hasMore = true;
    allNewsState.items = [];
    renderAllNews([]);
  }
  if (!allNewsState.hasMore && !reset) return;

  allNewsState.loading = true;
  updateAllNewsControls();

  const params = new URLSearchParams({
    page: String(allNewsState.nextPage),
    limit: String(NEWS_ALL_LIMIT),
  });

  if (allNewsState.nextPage === 1) {
    renderAllNewsState("Загружаем все новости...");
  }
  try {
    const data = await apiRequest(`/news?${params.toString()}`);
    const incomingItems = Array.isArray(data.items) ? data.items : [];
    incomingItems.sort((a, b) => new Date(b.pub_date) - new Date(a.pub_date));

    allNewsState.totalPages = Number(data.total_pages) || 1;
    allNewsState.items = mergeUniqueNews(allNewsState.items, incomingItems);
    renderAllNews(allNewsState.items);

    allNewsState.hasMore = allNewsState.nextPage < allNewsState.totalPages;
    if (allNewsState.hasMore) {
      allNewsState.nextPage += 1;
    }
    setStatus("allNewsStatus", "", "info");
  } catch (error) {
    renderAllNewsState(error.message || "Ошибка загрузки новостей", true);
  } finally {
    allNewsState.loading = false;
    updateAllNewsControls();
  }
}

function initAllNewsPagination() {
  const moreBtn = document.getElementById("allNewsMoreBtn");
  const sentinel = document.getElementById("allNewsSentinel");
  const modal = document.getElementById("allNewsModal");
  if (!moreBtn || !sentinel || !modal) return;

  moreBtn.addEventListener("click", () => loadAllNews(false));

  if (allNewsObserver) return;
  allNewsObserver = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (!entry?.isIntersecting) return;
      if (!modal.classList.contains("active")) return;
      if (!allNewsState.hasMore || allNewsState.loading) return;
      loadAllNews(false);
    },
    { root: document.getElementById("allNewsList"), threshold: 0.1 },
  );
  allNewsObserver.observe(sentinel);
}

function updateAuthUI(email) {
  const accountWidget = document.getElementById("accountWidget");
  const accountPopover = document.getElementById("accountPopover");
  const trigger = document.getElementById("authTrigger");
  const logoutBtn = document.getElementById("logoutBtn");
  if (!accountWidget || !accountPopover || !trigger || !logoutBtn) return;

  const isAuthenticated = Boolean(email);
  accountWidget.classList.toggle("is-authenticated", isAuthenticated);
  accountWidget.classList.remove("open");
  accountPopover.setAttribute("aria-hidden", "true");
  trigger.setAttribute("aria-expanded", "false");

  if (isAuthenticated) {
    trigger.classList.add("authenticated");
    trigger.setAttribute("aria-label", "Аккаунт");
  } else {
    trigger.classList.remove("authenticated");
    trigger.setAttribute("aria-label", "Войти в аккаунт");
  }
  updateMapPanelNote();
}

function closeAccountMenu() {
  const accountWidget = document.getElementById("accountWidget");
  const accountPopover = document.getElementById("accountPopover");
  const trigger = document.getElementById("authTrigger");
  if (!accountWidget || !accountPopover || !trigger) return;
  accountWidget.classList.remove("open");
  accountPopover.setAttribute("aria-hidden", "true");
  trigger.setAttribute("aria-expanded", "false");
}

function toggleAccountMenu() {
  const accountWidget = document.getElementById("accountWidget");
  const accountPopover = document.getElementById("accountPopover");
  const trigger = document.getElementById("authTrigger");
  if (!accountWidget || !accountPopover || !trigger) return;
  if (!accountWidget.classList.contains("is-authenticated")) {
    openModal("loginModal");
    return;
  }

  const isOpen = accountWidget.classList.toggle("open");
  accountPopover.setAttribute("aria-hidden", isOpen ? "false" : "true");
  trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

function setMapFallbackText(id, text) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = text;
  el.style.display = "flex";
}

function hideMapFallback(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = "none";
}

function debounce(callback, delay) {
  let timerId = null;
  return (...args) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => callback(...args), delay);
  };
}

function getMapBounds(instance) {
  if (!instance || typeof instance.getBounds !== "function") return null;
  const bounds = instance.getBounds();
  if (!bounds) return null;

  const southWest =
    typeof bounds.getSouthWest === "function"
      ? bounds.getSouthWest()
      : bounds._southWest;
  const northEast =
    typeof bounds.getNorthEast === "function"
      ? bounds.getNorthEast()
      : bounds._northEast;

  if (!southWest || !northEast) return null;
  return {
    min_lat: Number(southWest.lat),
    max_lat: Number(northEast.lat),
    min_lon: Number(southWest.lng),
    max_lon: Number(northEast.lng),
  };
}

function serializeBounds(bounds) {
  if (!bounds) return "";
  return [
    bounds.min_lat.toFixed(5),
    bounds.max_lat.toFixed(5),
    bounds.min_lon.toFixed(5),
    bounds.max_lon.toFixed(5),
  ].join(":");
}

function getVisibleMarkers() {
  return mapState.showOthers
    ? mapState.markers
    : mapState.markers.filter((marker) => marker.is_mine);
}

function getMapSourceForBounds() {
  const mapPage = document.getElementById("mapPage");
  if (mapPage?.classList.contains("active") && modalMapInstance) {
    return modalMapInstance;
  }
  return previewMapInstance || modalMapInstance;
}

function openMapPage() {
  const page = document.getElementById("mapPage");
  if (!page) return;
  lastMapPageTrigger =
    document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
  page.classList.add("active");
  page.setAttribute("aria-hidden", "false");
  document.body.classList.add("map-page-open");
  document.body.style.overflow = "hidden";
  window.setTimeout(() => {
    page.querySelector(".map-page-close")?.focus();
  }, 0);
  refreshModalMapSize();
}

function closeMapPage() {
  const page = document.getElementById("mapPage");
  if (!page) return;
  const fallbackTrigger =
    document.querySelector(".map-preview-card") || lastMapPageTrigger;
  if (fallbackTrigger instanceof HTMLElement) {
    fallbackTrigger.focus();
  }
  page.classList.remove("active");
  page.setAttribute("aria-hidden", "true");
  document.body.classList.remove("map-page-open");
  document.body.style.overflow = "";
  resetMarkerForm();
  closeMarkerCard();
  lastMapPageTrigger = null;
}

function updateVisibleMarkers() {
  mapState.visibleMarkers = getVisibleMarkers();
}

function getMarkerTypeByCode(typeCode) {
  return mapState.markerTypes.find((item) => item.code === typeCode) || null;
}

function getMarkerTypeById(typeId) {
  return mapState.markerTypes.find((item) => item.id === typeId) || null;
}

function getWorkflowStatusMeta(workflowStatus) {
  if (workflowStatus === "resolved") {
    return { label: "Решенный", color: "#1f9d55" };
  }
  if (workflowStatus === "in_progress") {
    return { label: "В работе", color: "#f08c2e" };
  }
  return { label: "Новый", color: "#d64545" };
}

function getMarkerVisual(marker) {
  const type =
    getMarkerTypeByCode(marker?.type_code) ||
    getMarkerTypeById(marker?.type_id);
  const workflowMeta = getWorkflowStatusMeta(marker?.workflow_status);
  return {
    color: workflowMeta.color,
    iconCode: marker?.icon || type?.icon || "map_pin",
    label: marker?.type_label || type?.label || "Метка",
    workflowLabel: workflowMeta.label,
  };
}

function getMarkerIconLabel(iconCode) {
  if (!iconCode) return "MK";
  return MAP_ICON_LABELS[iconCode] || iconCode.slice(0, 2).toUpperCase();
}

function createMarkerHtml(marker) {
  const visual = getMarkerVisual(marker);
  const iconLabel = getMarkerIconLabel(visual.iconCode);
  const ownClass = marker?.is_mine ? " is-mine" : "";
  return `
    <div class="map-user-marker${ownClass}" style="--marker-color:${escapeHtml(visual.color)};">
      <span>${escapeHtml(iconLabel)}</span>
    </div>
  `;
}

function createDgisDivIcon(marker) {
  return window.DG.divIcon({
    className: "map-user-marker-wrap",
    html: createMarkerHtml(marker),
    iconSize: [34, 34],
    iconAnchor: [17, 34],
    popupAnchor: [0, -30],
  });
}

function clearMapLayers() {
  if (previewMarkersLayer?.clearLayers) previewMarkersLayer.clearLayers();
  if (modalMarkersLayer?.clearLayers) modalMarkersLayer.clearLayers();
}

function ensureMapLayers() {
  if (window.DG && previewMapInstance && !previewMarkersLayer) {
    previewMarkersLayer = window.DG.featureGroup().addTo(previewMapInstance);
  }
  if (window.DG && modalMapInstance && !modalMarkersLayer) {
    modalMarkersLayer = window.DG.featureGroup().addTo(modalMapInstance);
  }
}

function renderMarkersOnMap(instance, layer, interactive = false) {
  if (!instance || !layer || !window.DG) return;
  layer.clearLayers();

  mapState.visibleMarkers.forEach((marker) => {
    const markerLayer = window.DG.marker([marker.lat, marker.lon], {
      icon: createDgisDivIcon(marker),
      riseOnHover: true,
      keyboard: interactive,
    });
    if (interactive) {
      markerLayer.on("click", () => {
        mapState.lastMarkerClickAt = Date.now();
        openMarkerCard(marker.id);
      });
    }
    layer.addLayer(markerLayer);
  });
}

function renderMapMarkers() {
  updateVisibleMarkers();
  ensureMapLayers();
  renderMarkersOnMap(previewMapInstance, previewMarkersLayer, false);
  renderMarkersOnMap(modalMapInstance, modalMarkersLayer, true);
}

function syncPreviewMapToModal() {
  if (!previewMapInstance || !modalMapInstance) return;
  const center = previewMapInstance.getCenter?.();
  const zoom = previewMapInstance.getZoom?.();
  if (center && typeof zoom === "number") {
    modalMapInstance.setView([center.lat, center.lng], Math.max(zoom, 13), {
      animate: false,
    });
  }
}

function formatRelativeDate(dateValue) {
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return "Не указано";
  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function formatMarkerPoint(point) {
  if (!point) return "Точка не выбрана";
  return `${point.lat.toFixed(5)}, ${point.lon.toFixed(5)}`;
}

function setMapStatus(elementId, text, type = "info") {
  setStatus(elementId, text, type);
}

async function fetchMapMarkerTypes() {
  const response = await apiRequest("/map-marker-types");
  const items = Array.isArray(response?.items) ? response.items : [];
  return items
    .filter((item) => item?.is_active !== false)
    .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));
}

async function fetchMapMarkersByBounds(bounds) {
  const params = new URLSearchParams({
    min_lat: String(bounds.min_lat),
    max_lat: String(bounds.max_lat),
    min_lon: String(bounds.min_lon),
    max_lon: String(bounds.max_lon),
  });
  const response = await apiRequest(`/map-markers?${params.toString()}`, {
    auth: true,
    credentials: "include",
  });
  return Array.isArray(response?.items) ? response.items : [];
}

async function fetchMapMarkerById(markerId) {
  return apiRequest(`/map-markers/${encodeURIComponent(markerId)}`, {
    auth: true,
    credentials: "include",
  });
}

async function createMapMarker(payload) {
  return apiRequest("/map-markers", {
    method: "POST",
    body: payload,
    auth: true,
    credentials: "include",
  });
}

async function deleteMapMarker(markerId) {
  return apiRequest(`/map-markers/${encodeURIComponent(markerId)}`, {
    method: "DELETE",
    auth: true,
    credentials: "include",
  });
}

async function fetchCalendarNotesByRange(from, to) {
  const params = new URLSearchParams({
    from,
    to,
  });

  return apiRequest(`/calendar/notes/range?${params.toString()}`, {
    auth: true,
    credentials: "include",
  });
}

async function fetchCalendarNotesByDay(date) {
  const params = new URLSearchParams({
    date,
  });

  return apiRequest(`/calendar/notes/day?${params.toString()}`, {
    auth: true,
    credentials: "include",
  });
}

async function createCalendarNote(payload) {
  return apiRequest("/calendar/notes", {
    method: "POST",
    body: payload,
    auth: true,
    credentials: "include",
  });
}

async function updateCalendarNoteStatus(noteId, isDone) {
  return apiRequest(`/calendar/notes/${encodeURIComponent(noteId)}/status`, {
    method: "PATCH",
    body: { is_done: isDone },
    auth: true,
    credentials: "include",
  });
}

async function deleteCalendarNote(noteId) {
  return apiRequest(`/calendar/notes/${encodeURIComponent(noteId)}`, {
    method: "DELETE",
    auth: true,
    credentials: "include",
  });
}

function fillMarkerTypeSelect() {
  const select = document.getElementById("markerTypeSelect");
  if (!select) return;
  const currentValue = select.value;
  const options = mapState.markerTypes
    .map(
      (type) =>
        `<option value="${escapeHtml(type.code)}">${escapeHtml(type.label)}</option>`,
    )
    .join("");
  select.innerHTML = `<option value="">Выберите тип</option>${options}`;
  if (
    currentValue &&
    mapState.markerTypes.some((type) => type.code === currentValue)
  ) {
    select.value = currentValue;
  }
}

function renderMarkerTypeMeta() {
  const meta = document.getElementById("markerTypeMeta");
  const select = document.getElementById("markerTypeSelect");
  if (!meta || !select) return;
  const type = getMarkerTypeByCode(select.value);
  if (!type) {
    meta.innerHTML = "";
    return;
  }
  meta.innerHTML = `
    <div class="map-type-pill">
      <span class="map-type-pill-dot" style="background:${escapeHtml(type.color || "#24675e")};"></span>
      <span>${escapeHtml(type.label)}</span>
    </div>
    <div class="map-type-caption">
      ${type.description_required ? "Описание обязательно" : "Описание необязательно"} • живет ${escapeHtml(String(type.ttl_hours))} ч.
    </div>
  `;
}

function updateDescriptionCounter() {
  const input = document.getElementById("markerDescriptionInput");
  const counter = document.getElementById("markerDescriptionCounter");
  if (!input || !counter) return;
  counter.textContent = `${input.value.length} / 500`;
}

function setCreateMode(active) {
  mapState.isCreateMode = active;
  if (!active) {
    mapState.selectedPoint = null;
    if (createMarkerLayer && modalMapInstance) {
      modalMapInstance.removeLayer(createMarkerLayer);
      createMarkerLayer = null;
    }
    setMapStatus("mapCreateStatus", "", "info");
  }

  const form = document.getElementById("mapMarkerForm");
  const pointEl = document.getElementById("mapSelectedPoint");
  const card = document.getElementById("mapMarkerCard");
  if (form) form.classList.toggle("hidden", !active);
  if (card && active) card.classList.add("hidden");
  if (pointEl) {
    pointEl.textContent = formatMarkerPoint(mapState.selectedPoint);
  }
}

function setSelectedPoint(lat, lon) {
  mapState.selectedPoint = { lat, lon };
  const pointEl = document.getElementById("mapSelectedPoint");
  if (pointEl) {
    pointEl.textContent = formatMarkerPoint(mapState.selectedPoint);
  }
  if (!window.DG || !modalMapInstance) return;

  if (createMarkerLayer) {
    modalMapInstance.removeLayer(createMarkerLayer);
  }
  createMarkerLayer = window.DG.marker([lat, lon], {
    icon: window.DG.divIcon({
      className: "map-create-marker-wrap",
      html: '<div class="map-create-marker"></div>',
      iconSize: [28, 28],
      iconAnchor: [14, 28],
    }),
  }).addTo(modalMapInstance);
}

function resetMarkerForm() {
  const select = document.getElementById("markerTypeSelect");
  const description = document.getElementById("markerDescriptionInput");
  if (select) select.value = "";
  if (description) description.value = "";
  updateDescriptionCounter();
  renderMarkerTypeMeta();
  setCreateMode(false);
}

function upsertMarker(marker) {
  if (!marker?.id) return;
  mapState.markersById.set(marker.id, marker);
  const items = Array.from(mapState.markersById.values());
  mapState.markers = items.filter((item) => item.status === "active");
}

function replaceMarkers(items) {
  mapState.markersById = new Map();
  items.forEach((item) => {
    if (item?.id) {
      mapState.markersById.set(item.id, item);
    }
  });
  mapState.markers = Array.from(mapState.markersById.values()).filter(
    (item) => item.status === "active",
  );
}

function removeMarkerFromState(markerId) {
  mapState.markersById.delete(markerId);
  mapState.markers = Array.from(mapState.markersById.values()).filter(
    (item) => item.status === "active",
  );
  if (mapState.selectedMarkerId === markerId) {
    mapState.selectedMarkerId = null;
  }
}

function renderMarkerCard(marker) {
  const card = document.getElementById("mapMarkerCard");
  const title = document.getElementById("mapMarkerCardTitle");
  const meta = document.getElementById("mapMarkerCardMeta");
  const description = document.getElementById("mapMarkerCardDescription");
  const grid = document.getElementById("mapMarkerCardGrid");
  const deleteBtn = document.getElementById("deleteMarkerBtn");
  if (!card || !title || !meta || !description || !grid || !deleteBtn) return;

  const visual = getMarkerVisual(marker);
  title.textContent = marker?.type_label || "Метка";
  meta.innerHTML = `
    <span class="map-type-pill">
      <span class="map-type-pill-dot" style="background:${escapeHtml(visual.color)};"></span>
      <span>${escapeHtml(visual.workflowLabel)}</span>
    </span>
    <span class="map-type-pill">
      <span>${escapeHtml(marker?.is_mine ? "Моя метка" : "Метка пользователя")}</span>
    </span>
    <span class="map-marker-author">${escapeHtml(marker?.author?.label || "Пользователь")}</span>
  `;
  description.textContent = marker?.description?.trim()
    ? marker.description
    : "Описание не указано.";
  grid.innerHTML = `
    <div>
      <dt>Статус</dt>
      <dd>${escapeHtml(visual.workflowLabel)}</dd>
    </div>
    <div>
      <dt>Создана</dt>
      <dd>${escapeHtml(formatRelativeDate(marker?.created_at))}</dd>
    </div>
    <div>
      <dt>Координаты</dt>
      <dd>${escapeHtml(formatMarkerPoint({ lat: marker?.lat || 0, lon: marker?.lon || 0 }))}</dd>
    </div>
  `;
  deleteBtn.classList.toggle("hidden", !marker?.is_mine);
  deleteBtn.dataset.markerId = marker?.id || "";
  card.classList.remove("hidden");
}

function closeMarkerCard() {
  mapState.selectedMarkerId = null;
  const card = document.getElementById("mapMarkerCard");
  const status = document.getElementById("mapMarkerCardStatus");
  if (card) card.classList.add("hidden");
  if (status) setStatus("mapMarkerCardStatus", "", "info");
}

async function openMarkerCard(markerId) {
  if (!markerId) return;
  mapState.selectedMarkerId = markerId;
  setCreateMode(false);
  setMapStatus("mapMarkerCardStatus", "", "info");
  try {
    const marker = await fetchMapMarkerById(markerId);
    upsertMarker(marker);
    renderMapMarkers();
    renderMarkerCard(marker);
    setMapStatus("mapMarkerCardStatus", "", "info");
  } catch (error) {
    const fallback = mapState.markersById.get(markerId);
    if (fallback) {
      renderMarkerCard(fallback);
    }
    setMapStatus(
      "mapMarkerCardStatus",
      error.message || "Не удалось загрузить карточку метки",
      "error",
    );
  }
}

async function loadMarkerTypes() {
  if (mapState.loadingTypes || mapState.markerTypesLoaded) return;
  mapState.loadingTypes = true;
  setMapStatus("mapTypesStatus", "", "info");
  try {
    mapState.markerTypes = await fetchMapMarkerTypes();
    mapState.markerTypesLoaded = true;
    fillMarkerTypeSelect();
    renderMarkerTypeMeta();
    setMapStatus("mapTypesStatus", "", "info");
  } catch (error) {
    setMapStatus(
      "mapTypesStatus",
      error.message || "Не удалось загрузить типы меток",
      "error",
    );
  } finally {
    mapState.loadingTypes = false;
  }
}

async function loadMarkersForCurrentBounds(force = false) {
  const bounds = getMapBounds(getMapSourceForBounds());
  if (!bounds) return;
  const key = serializeBounds(bounds);
  if (
    !force &&
    key === mapState.lastModalBoundsKey &&
    mapState.markers.length
  ) {
    renderMapMarkers();
    return;
  }
  mapState.lastModalBoundsKey = key;
  mapState.loadingMarkers = true;
  setMapStatus("mapMarkersStatus", "", "info");
  try {
    const items = await fetchMapMarkersByBounds(bounds);
    replaceMarkers(items);
    renderMapMarkers();
    setMapStatus("mapMarkersStatus", "", "info");
  } catch (error) {
    setMapStatus(
      "mapMarkersStatus",
      error.message || "Не удалось загрузить метки",
      "error",
    );
  } finally {
    mapState.loadingMarkers = false;
  }
}

const debouncedLoadMarkers = debounce(() => {
  loadMarkersForCurrentBounds();
}, MAP_MARKER_FETCH_DEBOUNCE_MS);

function handleMapViewportChanged() {
  debouncedLoadMarkers();
}

function updateShowOthersToggle() {
  const toggle = document.getElementById("showOthersToggle");
  if (!toggle) return;
  toggle.checked = mapState.showOthers;
}

function isAuthenticated() {
  return Boolean(sessionStorage.getItem(TOKEN_STORAGE_KEY));
}

function updateMapPanelNote() {
  return;
}

async function handleMarkerSubmit() {
  const typeSelect = document.getElementById("markerTypeSelect");
  const descriptionInput = document.getElementById("markerDescriptionInput");
  const type = getMarkerTypeByCode(typeSelect?.value || "");
  const description = descriptionInput?.value?.trim() || "";

  if (!isAuthenticated()) {
    setMapStatus("mapCreateStatus", "Сначала войдите в аккаунт", "error");
    openModal("loginModal");
    return;
  }
  if (!mapState.selectedPoint) {
    setMapStatus("mapCreateStatus", "Сначала выберите точку на карте", "error");
    return;
  }
  if (!type) {
    setMapStatus("mapCreateStatus", "Выберите тип метки", "error");
    return;
  }
  if (type.description_required && !description) {
    setMapStatus(
      "mapCreateStatus",
      "Для этого типа описание обязательно",
      "error",
    );
    return;
  }
  if (description.length > 500) {
    setMapStatus(
      "mapCreateStatus",
      "Описание не должно превышать 500 символов",
      "error",
    );
    return;
  }

  setMapStatus("mapCreateStatus", "Сохраняем метку...", "info");
  try {
    const created = await createMapMarker({
      type_code: type.code,
      description: description || null,
      lat: mapState.selectedPoint.lat,
      lon: mapState.selectedPoint.lon,
    });
    upsertMarker(created);
    renderMapMarkers();
    resetMarkerForm();
    await openMarkerCard(created.id);
    setMapStatus("mapMarkersStatus", "Метка добавлена на карту", "success");
  } catch (error) {
    setMapStatus(
      "mapCreateStatus",
      error.message || "Не удалось создать метку",
      "error",
    );
  }
}

async function handleMarkerDelete() {
  const deleteBtn = document.getElementById("deleteMarkerBtn");
  const markerId = deleteBtn?.dataset?.markerId;
  if (!markerId) return;
  setMapStatus("mapMarkerCardStatus", "Удаляем метку...", "info");
  try {
    await deleteMapMarker(markerId);
    removeMarkerFromState(markerId);
    renderMapMarkers();
    closeMarkerCard();
    setMapStatus("mapMarkersStatus", "Метка удалена", "success");
  } catch (error) {
    setMapStatus(
      "mapMarkerCardStatus",
      error.message || "Не удалось удалить метку",
      "error",
    );
  }
}

function initMapMarkerBindings() {
  updateShowOthersToggle();
  updateMapPanelNote();
  fillMarkerTypeSelect();
  renderMarkerTypeMeta();
  updateDescriptionCounter();

  document
    .getElementById("cancelMarkerCreateBtn")
    ?.addEventListener("click", () => resetMarkerForm());

  document
    .getElementById("markerTypeSelect")
    ?.addEventListener("change", renderMarkerTypeMeta);

  document
    .getElementById("markerDescriptionInput")
    ?.addEventListener("input", updateDescriptionCounter);

  document
    .getElementById("submitMarkerBtn")
    ?.addEventListener("click", handleMarkerSubmit);

  document
    .getElementById("closeMarkerCardBtn")
    ?.addEventListener("click", closeMarkerCard);

  document
    .getElementById("deleteMarkerBtn")
    ?.addEventListener("click", handleMarkerDelete);

  document
    .getElementById("showOthersToggle")
    ?.addEventListener("change", (event) => {
      mapState.showOthers = Boolean(event.target.checked);
      localStorage.setItem(
        SHOW_OTHERS_STORAGE_KEY,
        mapState.showOthers ? "1" : "0",
      );
      renderMapMarkers();
      setMapStatus("mapMarkersStatus", "", "info");
    });
}

function initDgisMaps() {
  if (!window.DG || typeof window.DG.then !== "function") {
    setMapFallbackText(
      "mapPreviewFallback",
      "Не удалось загрузить 2ГИС API. Проверьте интернет или блокировщик.",
    );
    setMapFallbackText(
      "mapModalFallback",
      "Не удалось загрузить 2ГИС API. Проверьте интернет или блокировщик.",
    );
    return;
  }

  window.DG.then(() => {
    try {
      if (!previewMapInstance) {
        previewMapInstance = window.DG.map("mapPreviewCanvas", {
          center: DEFAULT_MAP_CENTER,
          zoom: 12,
          zoomControl: false,
          fullscreenControl: false,
        });
        previewMapInstance.scrollWheelZoom.disable();
        previewMapInstance.on("moveend", handleMapViewportChanged);
      }
      hideMapFallback("mapPreviewFallback");
    } catch (_error) {
      setMapFallbackText(
        "mapPreviewFallback",
        "Ошибка инициализации превью карты.",
      );
    }

    try {
      if (!modalMapInstance) {
        modalMapInstance = window.DG.map("mapModalCanvas", {
          center: DEFAULT_MAP_CENTER,
          zoom: 13,
          zoomControl: true,
          fullscreenControl: false,
        });
        modalMapInstance.on("moveend", handleMapViewportChanged);
        modalMapInstance.on("click", (event) => {
          if (Date.now() - mapState.lastMarkerClickAt < 250) return;
          const latlng = event?.latlng || event;
          if (!latlng) return;
          if (!isAuthenticated()) {
            setMapStatus(
              "mapMarkersStatus",
              "Чтобы ставить метки, нужно войти или зарегистрироваться.",
              "info",
            );
            return;
          }
          loadMarkerTypes().then(() => {
            closeMarkerCard();
            setCreateMode(true);
            setSelectedPoint(Number(latlng.lat), Number(latlng.lng));
            setMapStatus("mapCreateStatus", "", "info");
            setMapStatus("mapMarkersStatus", "", "info");
          });
        });
      }
      hideMapFallback("mapModalFallback");
    } catch (_error) {
      setMapFallbackText(
        "mapModalFallback",
        "Ошибка инициализации большой карты.",
      );
    }

    ensureMapLayers();
    loadMarkerTypes();
    loadMarkersForCurrentBounds(true);
  });
}

function refreshModalMapSize() {
  if (
    !modalMapInstance ||
    typeof modalMapInstance.invalidateSize !== "function"
  ) {
    return;
  }
  setTimeout(() => {
    modalMapInstance.invalidateSize();
    syncPreviewMapToModal();
    loadMarkersForCurrentBounds(true);
  }, 150);
}

async function handleLogin() {
  const email = document.getElementById("loginEmail")?.value?.trim();
  const password = document.getElementById("loginPassword")?.value ?? "";

  if (!email || !password) {
    setStatus("authStatus", "Введите email и пароль", "error");
    return;
  }

  setStatus("authStatus", "Выполняем вход...", "info");
  try {
    const data = await apiRequest("/auth/login", {
      method: "POST",
      body: { email, password },
      credentials: "include",
    });
    if (data?.token) {
      sessionStorage.setItem(TOKEN_STORAGE_KEY, data.token);
    }
    const accountEmail = data?.account?.email || email;
    sessionStorage.setItem(ACCOUNT_EMAIL_STORAGE_KEY, accountEmail);
    updateAuthUI(accountEmail);
    setStatus("authStatus", `Вход выполнен: ${accountEmail}`, "success");
    setMapStatus("mapCreateStatus", "", "info");
    loadMarkersForCurrentBounds(true);
    setTimeout(() => closeModal("loginModal"), 700);
  } catch (error) {
    setStatus("authStatus", error.message || "Не удалось войти", "error");
  }
}

async function handleRegister() {
  const email = document.getElementById("loginEmail")?.value?.trim();
  const password = document.getElementById("loginPassword")?.value ?? "";
  if (!email || !password) {
    setStatus(
      "authStatus",
      "Для регистрации заполните email и пароль",
      "error",
    );
    return;
  }
  if (password.length < 8) {
    setStatus("authStatus", "Пароль должен быть не короче 8 символов", "error");
    return;
  }

  setStatus("authStatus", "Создаем аккаунт...", "info");
  try {
    await apiRequest("/auth/register", {
      method: "POST",
      body: { email, password },
    });
    setStatus("authStatus", "Аккаунт создан. Выполняем вход...", "info");
    await handleLogin();
  } catch (error) {
    setStatus("authStatus", error.message || "Ошибка регистрации", "error");
  }
}

async function introspectToken() {
  const token = sessionStorage.getItem(TOKEN_STORAGE_KEY);
  const cachedEmail = sessionStorage.getItem(ACCOUNT_EMAIL_STORAGE_KEY);
  if (cachedEmail) {
    updateAuthUI(cachedEmail);
  }
  if (!token) return;
  try {
    const data = await apiRequest("/auth/introspect", {
      method: "POST",
      body: { token },
      credentials: "include",
    });
    if (!data?.valid) {
      logout(false);
      return;
    }
    sessionStorage.setItem(ACCOUNT_EMAIL_STORAGE_KEY, data.email);
    updateAuthUI(data.email);
    setStatus("authStatus", `Вы авторизованы: ${data.email}`, "success");
    loadMarkersForCurrentBounds(true);
  } catch (_error) {
    logout(false);
  }
}

async function logout(showStatus = true) {
  try {
    // Primary path: clear httpOnly Bearer cookie on backend.
    await fetch(`${API_BASE_URL}/logout`, {
      method: "POST",
      credentials: "include",
    });
  } catch (_error) {
    // Fallback for strict CORS setups where credentials are blocked.
    try {
      await fetch(`${API_BASE_URL}/logout`, {
        method: "POST",
        credentials: "omit",
      });
    } catch (_ignored) {}
  }

  sessionStorage.removeItem(TOKEN_STORAGE_KEY);
  sessionStorage.removeItem(ACCOUNT_EMAIL_STORAGE_KEY);
  updateAuthUI("");
  closeMarkerCard();
  resetMarkerForm();
  loadMarkersForCurrentBounds(true);
  if (showStatus) {
    setStatus("authStatus", "Вы вышли из аккаунта", "info");
  }
}

async function fetchDocuments() {
  const params = new URLSearchParams({
    document_type: currentDocumentType,
    area_scope: currentAreaScope,
    page: "1",
    limit: "20",
  });
  const houseGroupCode = getCurrentHouseGroupCode();
  if (houseGroupCode) {
    params.set("group_code", houseGroupCode);
  }

  const response = await apiRequest(`/files?${params.toString()}`);
  return Array.isArray(response.items) ? response.items : [];
}

function getCurrentHouseGroupCode() {
  if (currentAreaScope !== "Дом") return "";
  if (currentDocumentType === "claim") return "claims";
  if (currentDocumentsMode === "application") return currentHouseDocumentGroup;
  return "";
}

function getHouseDocumentGroupMeta(groupCode) {
  if (groupCode === "prosecutor") {
    return "Заявления и жалобы для случаев, когда нужен надзор прокуратуры.";
  }
  if (groupCode === "control_bodies") {
    return "Обращения в профильные органы контроля и надзорные инстанции.";
  }
  return "Жалобы и заявления по дому для направления в жилищную инспекцию.";
}

function updateDocumentFiltersVisibility() {
  const docScopeTabs = document.getElementById("docScopeTabs");
  const houseGroupTabs = document.getElementById("docHouseGroupTabs");
  const houseGroupMeta = document.getElementById("docHouseGroupMeta");
  const isCourtMode = currentDocumentsMode === "court";
  const showHouseGroups =
    !isCourtMode &&
    currentAreaScope === "Дом" &&
    currentDocumentType === "application";

  if (docScopeTabs) {
    docScopeTabs.hidden = isCourtMode;
    docScopeTabs.style.display = isCourtMode ? "none" : "";
  }

  if (houseGroupTabs) {
    houseGroupTabs.hidden = !showHouseGroups;
    houseGroupTabs.style.display = showHouseGroups ? "" : "none";
  }

  if (houseGroupMeta) {
    houseGroupMeta.textContent = getHouseDocumentGroupMeta(
      currentHouseDocumentGroup,
    );
  }
}

async function fetchNearestDistrictCourt(address) {
  const params = new URLSearchParams({ address });
  return apiRequest(`/district-courts/nearest?${params.toString()}`);
}

async function fetchUsefulTipsList(
  scope,
  page = 1,
  limit = 12,
  sort = "newest",
) {
  const params = new URLSearchParams();
  if (scope) {
    params.set("area_scope", scope);
  }
  params.set("sort", sort);
  params.set("page", String(page));
  params.set("limit", String(limit));
  return apiRequest(`/useful-tips?${params.toString()}`);
}

async function fetchPopularUsefulTips(scope, limit = 4) {
  const params = new URLSearchParams();
  if (scope) {
    params.set("area_scope", scope);
  }
  params.set("limit", String(limit));
  return apiRequest(`/useful-tips/popular?${params.toString()}`);
}

async function fetchUsefulTipDetail(slug) {
  return apiRequest(`/useful-tips/${encodeURIComponent(slug)}`);
}

async function fetchManagementCompanies(page = 1, limit = 20) {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });
  return apiRequest(`/management-companies?${params.toString()}`);
}

async function fetchTariffs() {
  return apiRequest("/tariffs");
}

async function fetchEmergencyServices() {
  return apiRequest("/emergency-services");
}

async function fetchSearchResults(query, limit = 6) {
  const params = new URLSearchParams({
    q: query,
    limit: String(limit),
  });
  return apiRequest(`/search?${params.toString()}`);
}

async function sendUserQuestion(payload) {
  return apiRequest("/send-question", {
    method: "POST",
    body: payload,
    auth: true,
    credentials: "include",
  });
}

async function getDocumentDownloadUrl(fileId) {
  const response = await apiRequest(`/files/${fileId}/download`);
  return response?.url;
}

function getFileExtension(fileName) {
  if (!fileName || typeof fileName !== "string") return "";
  const idx = fileName.lastIndexOf(".");
  if (idx <= 0 || idx === fileName.length - 1) return "";
  return fileName.slice(idx);
}

async function forceDownloadByTitle(url, title, originalName) {
  const extension = getFileExtension(originalName);
  const safeTitle = (title || "document").trim();
  const finalName = `${safeTitle}${extension}`;

  const a = document.createElement("a");
  a.href = url;
  a.download = finalName;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function renderDocuments(items) {
  const documentsList = document.getElementById("documentsList");
  if (!documentsList) return;
  if (!items.length) {
    documentsList.innerHTML = `<div class="news-state">Документов пока нет для выбранного фильтра.</div>`;
    return;
  }

  documentsList.innerHTML = items
    .map(
      (doc) => `
        <article class="doc-card">
          <div>
            <div class="doc-card-title">${escapeHtml(doc.title || doc.original_name || "Документ")}</div>
            <div class="doc-card-meta">${escapeHtml(doc.document_type === "claim" ? "Иск" : "Заявление")} • ${escapeHtml(doc.area_scope || "Квартира")}${doc.group_label ? ` • ${escapeHtml(doc.group_label)}` : ""}</div>
          </div>
          <div class="doc-card-actions">
            <a href="#" data-doc-download="${escapeHtml(doc.id)}">Скачать</a>
          </div>
        </article>
      `,
    )
    .join("");

  documentsList.querySelectorAll("[data-doc-download]").forEach((el) => {
    el.addEventListener("click", async (event) => {
      event.preventDefault();
      const fileId = el.getAttribute("data-doc-download");
      if (!fileId) return;
      const doc = items.find((item) => item.id === fileId);
      try {
        const url = await getDocumentDownloadUrl(fileId);
        if (url) {
          try {
            await forceDownloadByTitle(
              url,
              doc?.title || doc?.original_name || "Документ",
              doc?.original_name || "",
            );
          } catch (_downloadError) {
            window.open(url, "_blank", "noopener,noreferrer");
          }
        }
      } catch (error) {
        setStatus(
          "docsStatus",
          error.message || "Не удалось получить файл",
          "error",
        );
      }
    });
  });
}

function setDocumentsMode(mode) {
  const normalizedMode =
    mode === "claim" || mode === "court" ? mode : "application";
  currentDocumentsMode = normalizedMode;
  if (normalizedMode !== "court") {
    currentDocumentType = normalizedMode;
  }

  const docTypeTabs = document.getElementById("docTypeTabs");
  const docsStatus = document.getElementById("docsStatus");
  const documentsList = document.getElementById("documentsList");
  const districtCourtPanel = document.getElementById("districtCourtPanel");

  docTypeTabs?.querySelectorAll("button[data-doc-mode]").forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.docMode === normalizedMode,
    );
  });

  const isCourtMode = normalizedMode === "court";

  updateDocumentFiltersVisibility();
  if (docsStatus) {
    docsStatus.hidden = isCourtMode;
    docsStatus.style.display = isCourtMode ? "none" : "";
  }
  if (documentsList) {
    documentsList.hidden = isCourtMode;
    documentsList.style.display = isCourtMode ? "none" : "";
  }
  if (districtCourtPanel) {
    districtCourtPanel.hidden = !isCourtMode;
    districtCourtPanel.style.display = isCourtMode ? "block" : "none";
  }

  if (!isCourtMode) {
    loadDocuments();
    return;
  }

  setStatus("docsStatus", "", "info");
  ensureDistrictCourtMap();
  renderDistrictCourtResult(districtCourtState.result);
}

function renderDistrictCourtResult(result) {
  const container = document.getElementById("districtCourtResult");
  if (!container) return;

  if (!result) {
    container.innerHTML = `<div class="news-state">Введите адрес, и мы определим районный суд.</div>`;
    return;
  }

  const address = result.address || {};
  const court = result.court || {};
  const distanceKm = getDistrictCourtDistanceKm(address, court);
  const mapsLink = `https://2gis.ru/krasnoyarsk/search/${encodeURIComponent(
    court.address || court.name || "",
  )}`;

  container.innerHTML = `
    <article class="district-court-card">
      <div class="district-court-card-head">
        <span class="district-court-card-label">Точка поиска</span>
        <span class="district-court-card-icon" aria-hidden="true">A</span>
      </div>
      <div class="district-court-card-title">${escapeHtml(
        address.resolved_address || result.query || "Адрес",
      )}</div>
      <div class="district-court-card-meta">Район: ${escapeHtml(
        address.district_name || "Не определен",
      )}</div>
    </article>

    <article class="district-court-card district-court-card--accent">
      <div class="district-court-card-head">
        <span class="district-court-card-label">Районный суд</span>
        <span class="district-court-card-icon district-court-card-icon--accent" aria-hidden="true">С</span>
      </div>
      <div class="district-court-card-title">${escapeHtml(court.name || "Суд не найден")}</div>
      <div class="district-court-card-meta">Район: ${escapeHtml(
        court.district_name || "Не определен",
      )}</div>
      <div class="district-court-card-address">${escapeHtml(
        court.address || "Адрес суда не указан",
      )}</div>
      ${
        distanceKm
          ? `<div class="district-court-card-distance">Примерное расстояние: ${escapeHtml(distanceKm)}</div>`
          : ""
      }
      <div class="district-court-card-actions">
        <a href="${mapsLink}" target="_blank" rel="noopener noreferrer">Открыть в 2ГИС</a>
      </div>
    </article>
  `;
}

function ensureDistrictCourtMap() {
  if (!window.DG || typeof window.DG.then !== "function") {
    setMapFallbackText(
      "districtCourtMapFallback",
      "Не удалось загрузить карту. Проверьте интернет или блокировщик.",
    );
    return;
  }

  window.DG.then(() => {
    try {
      if (!districtCourtMapInstance) {
        districtCourtMapInstance = window.DG.map("districtCourtMapCanvas", {
          center: DEFAULT_MAP_CENTER,
          zoom: 12,
          zoomControl: true,
          fullscreenControl: false,
        });
      }
      if (!districtCourtMapLayer) {
        districtCourtMapLayer = window.DG.featureGroup().addTo(
          districtCourtMapInstance,
        );
      }
      if (!districtCourtRouteLayer) {
        districtCourtRouteLayer = window.DG.featureGroup().addTo(
          districtCourtMapInstance,
        );
      }
      hideMapFallback("districtCourtMapFallback");
      window.setTimeout(() => {
        districtCourtMapInstance?.invalidateSize?.();
      }, 80);
    } catch (_error) {
      setMapFallbackText(
        "districtCourtMapFallback",
        "Не удалось инициализировать карту суда.",
      );
    }
  });
}

function renderDistrictCourtMarkers(result) {
  ensureDistrictCourtMap();

  if (districtCourtMapLayer?.clearLayers) {
    districtCourtMapLayer.clearLayers();
  }
  if (districtCourtRouteLayer?.clearLayers) {
    districtCourtRouteLayer.clearLayers();
  }

  if (
    !result ||
    !districtCourtMapLayer ||
    !districtCourtMapInstance ||
    !window.DG
  ) {
    return;
  }

  const address = result.address || {};
  const court = result.court || {};
  if (
    !isFiniteDistrictCourtPoint(address?.lat, address?.lon) ||
    !isFiniteDistrictCourtPoint(court?.lat, court?.lon)
  ) {
    return;
  }

  const addressMarker = window.DG.marker([address.lat, address.lon], {
    icon: createDistrictCourtMarkerIcon({
      variant: "address",
      label: "Адрес",
      code: "A",
    }),
    riseOnHover: true,
  });
  const courtMarker = window.DG.marker([court.lat, court.lon], {
    icon: createDistrictCourtMarkerIcon({
      variant: "court",
      label: "Суд",
      code: "С",
    }),
    riseOnHover: true,
  });
  const routeLine = window.DG.polyline(
    [
      [address.lat, address.lon],
      [court.lat, court.lon],
    ],
    {
      color: "#c46b3f",
      weight: 4,
      opacity: 0.72,
      dashArray: "10,8",
      lineCap: "round",
    },
  );

  districtCourtRouteLayer.addLayer(routeLine);
  districtCourtMapLayer.addLayer(addressMarker);
  districtCourtMapLayer.addLayer(courtMarker);

  const bounds = window.DG.latLngBounds(
    [address.lat, address.lon],
    [court.lat, court.lon],
  );
  districtCourtMapInstance.fitBounds(bounds, {
    padding: [52, 52],
    maxZoom: 15,
  });
}

function isFiniteDistrictCourtPoint(lat, lon) {
  return Number.isFinite(Number(lat)) && Number.isFinite(Number(lon));
}

function createDistrictCourtMarkerIcon({ variant, label, code }) {
  const safeVariant = variant === "court" ? "court" : "address";
  return window.DG.divIcon({
    className: "district-court-marker-wrap",
    html: `
      <div class="district-court-marker district-court-marker--${safeVariant}">
        <span class="district-court-marker-code">${escapeHtml(code || "")}</span>
        <span class="district-court-marker-label">${escapeHtml(label || "")}</span>
      </div>
    `,
    iconSize: [108, 50],
    iconAnchor: [54, 50],
  });
}

function getDistrictCourtDistanceKm(address, court) {
  const lat1 = Number(address?.lat);
  const lon1 = Number(address?.lon);
  const lat2 = Number(court?.lat);
  const lon2 = Number(court?.lon);
  if (
    !Number.isFinite(lat1) ||
    !Number.isFinite(lon1) ||
    !Number.isFinite(lat2) ||
    !Number.isFinite(lon2)
  ) {
    return "";
  }

  const toRadians = (value) => (value * Math.PI) / 180;
  const earthRadiusKm = 6371;
  const deltaLat = toRadians(lat2 - lat1);
  const deltaLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(deltaLon / 2) ** 2;
  const distance = 2 * earthRadiusKm * Math.asin(Math.sqrt(a));
  if (!Number.isFinite(distance) || distance <= 0) return "";
  return `${distance.toFixed(distance < 10 ? 1 : 0)} км`;
}

async function handleDistrictCourtSearch() {
  const input = document.getElementById("districtCourtAddressInput");
  const rawAddress = input?.value?.trim() || "";

  if (!rawAddress) {
    setStatus(
      "districtCourtStatus",
      "Введите адрес для поиска районного суда.",
      "error",
    );
    return;
  }

  districtCourtState.loading = true;
  setStatus(
    "districtCourtStatus",
    "Определяем адрес и районный суд...",
    "info",
  );

  try {
    const response = await fetchNearestDistrictCourt(rawAddress);
    districtCourtState.result = response;
    renderDistrictCourtResult(response);
    renderDistrictCourtMarkers(response);
    setStatus("districtCourtStatus", "", "info");
  } catch (error) {
    districtCourtState.result = null;
    renderDistrictCourtResult(null);
    renderDistrictCourtMarkers(null);
    setMapFallbackText(
      "districtCourtMapFallback",
      error.message || "Не удалось определить районный суд по этому адресу.",
    );
    setStatus(
      "districtCourtStatus",
      error.message || "Не удалось определить районный суд по этому адресу.",
      "error",
    );
  } finally {
    districtCourtState.loading = false;
  }
}

function renderManagementCompanies(items) {
  const list = document.getElementById("managementCompaniesList");
  if (!list) return;
  if (!items.length) {
    list.innerHTML = `<div class="news-state">Список управляющих компаний пока пуст.</div>`;
    return;
  }

  list.innerHTML = items
    .map(
      (company) => `
        <article class="doc-card management-card">
          <div>
            <div class="doc-card-title">${escapeHtml(company.name || "Управляющая компания")}</div>
            <div class="doc-card-meta">Адрес: ${escapeHtml(company.address || "Не указан")}</div>
            <div class="doc-card-meta">Домов в управлении: ${escapeHtml(String(company.houses_count ?? "—"))}</div>
          </div>
          <div class="doc-card-actions">
            ${
              company?.phone?.raw
                ? `<a href="tel:${escapeHtml(company.phone.normalized || company.phone.raw)}">${escapeHtml(company.phone.raw)}</a>`
                : `<span class="management-phone-empty">Телефон не указан</span>`
            }
          </div>
        </article>
      `,
    )
    .join("");
}

function renderTariffs(items) {
  const list = document.getElementById("tariffsList");
  if (!list) return;
  if (!items.length) {
    list.innerHTML = `<div class="news-state">Тарифы пока не найдены.</div>`;
    return;
  }

  list.innerHTML = items
    .map(
      (tariff) => `
        <article class="doc-card regulatory-card">
          <div>
            <div class="regulatory-badge">${escapeHtml(tariff.service_name || "Услуга")}</div>
            <div class="doc-card-title">${escapeHtml(tariff.provider_name || "Поставщик не указан")}</div>
            ${
              tariff.consumer_category
                ? `<div class="doc-card-meta">Категория: ${escapeHtml(tariff.consumer_category)}</div>`
                : ""
            }
            <div class="doc-card-meta">С января: ${escapeHtml(tariff.tariff_from_january || "—")}</div>
            <div class="doc-card-meta">С октября: ${escapeHtml(tariff.tariff_from_october || "—")}</div>
            ${
              tariff.note
                ? `<div class="doc-card-meta">${escapeHtml(tariff.note)}</div>`
                : ""
            }
          </div>
        </article>
      `,
    )
    .join("");
}

function renderEmergencyServices(items) {
  const list = document.getElementById("emergencyServicesList");
  if (!list) return;
  if (!items.length) {
    list.innerHTML = `<div class="news-state">Контакты пока недоступны.</div>`;
    return;
  }

  list.innerHTML = items
    .map((group) => {
      const contacts = Array.isArray(group?.contacts) ? group.contacts : [];
      const groupNote = group?.note
        ? `<div class="emergency-group-note">${escapeHtml(group.note)}</div>`
        : "";

      const contactsMarkup = contacts.length
        ? contacts
            .map((contact) => {
              const note = contact?.note
                ? `<div class="emergency-contact-note">${escapeHtml(contact.note)}</div>`
                : "";
              const phoneRaw = contact?.phone?.raw || "Телефон не указан";
              const phoneValue =
                contact?.phone?.normalized || contact?.phone?.raw || "";
              const phoneBlock = phoneValue
                ? `<a class="emergency-phone-link" href="tel:${escapeHtml(phoneValue)}">${escapeHtml(phoneRaw)}</a>`
                : `<span class="management-phone-empty">${escapeHtml(phoneRaw)}</span>`;

              return `
                <article class="emergency-contact">
                  <div class="emergency-contact-head">
                    <div class="doc-card-title">${escapeHtml(contact?.type_label || "Служба")}</div>
                    ${phoneBlock}
                  </div>
                  ${note}
                </article>
              `;
            })
            .join("")
        : `<div class="news-state">Контакты не указаны.</div>`;

      return `
        <section class="doc-card emergency-group-card">
          <div class="emergency-group-head">
            <div class="doc-card-title">${escapeHtml(group?.name || "Район")}</div>
            ${groupNote}
          </div>
          <div class="emergency-contacts-list">
            ${contactsMarkup}
          </div>
        </section>
      `;
    })
    .join("");
}

function mergeUniqueManagementCompanies(existing, incoming) {
  const seen = new Set(existing.map((item) => item.id));
  const result = [...existing];
  incoming.forEach((item) => {
    if (!seen.has(item.id)) {
      result.push(item);
      seen.add(item.id);
    }
  });
  return result;
}

function mergeUniqueTariffs(existing, incoming) {
  const seen = new Set(existing.map((item) => item.id));
  const result = [...existing];
  incoming.forEach((item) => {
    if (!seen.has(item.id)) {
      result.push(item);
      seen.add(item.id);
    }
  });
  return result;
}

function updateManagementCompaniesControls() {
  const moreBtn = document.getElementById("managementCompaniesMoreBtn");
  if (!moreBtn) return;

  moreBtn.style.display = managementCompaniesState.hasMore
    ? "inline-flex"
    : "none";
  moreBtn.disabled = managementCompaniesState.loading;
  moreBtn.textContent = managementCompaniesState.loading
    ? "Загрузка..."
    : "Загрузить ещё";
}

async function loadDocuments() {
  setStatus("docsStatus", "Загружаем документы...", "info");
  try {
    const items = await fetchDocuments();
    renderDocuments(items);
    setStatus("docsStatus", "", "info");
  } catch (error) {
    setStatus(
      "docsStatus",
      error.message || "Ошибка загрузки документов",
      "error",
    );
  }
}

async function loadUsefulTips(scope = usefulTipsState.scope) {
  usefulTipsState.scope = scope;
  usefulTipsState.currentPage = 0;
  usefulTipsState.loading = true;
  setStatus("usefulTipsStatus", "Загружаем советы...", "info");

  try {
    if (scope) {
      const response = await fetchUsefulTipsList(scope, 1, 24, "popular");
      usefulTipsState.items = Array.isArray(response?.items)
        ? response.items
        : [];
    } else {
      const response = await fetchPopularUsefulTips(null, 6);
      usefulTipsState.items = Array.isArray(response?.items)
        ? response.items
        : [];
    }

    renderUsefulTipsCards(usefulTipsState.items, "usefulTipsGrid");
    setStatus("usefulTipsStatus", "", "info");
  } catch (error) {
    usefulTipsState.items = [];
    renderUsefulTipsCards([], "usefulTipsGrid");
    setStatus(
      "usefulTipsStatus",
      error.message || "Ошибка загрузки советов",
      "error",
    );
  } finally {
    usefulTipsState.loading = false;
  }
}

async function openUsefulTip(slug) {
  if (!slug) return;
  const nextHash = `#tip/${encodeURIComponent(slug)}`;
  if (window.location.hash === nextHash) {
    await loadUsefulTipRoute(slug);
    return;
  }
  window.location.hash = nextHash;
}

async function loadManagementCompanies(reset = false) {
  if (managementCompaniesState.loading) return;
  if (reset) {
    managementCompaniesState.nextPage = 1;
    managementCompaniesState.totalPages = 1;
    managementCompaniesState.hasMore = true;
    managementCompaniesState.items = [];
    renderManagementCompanies([]);
  }
  if (!managementCompaniesState.hasMore && !reset) return;

  managementCompaniesState.loading = true;
  updateManagementCompaniesControls();
  setStatus(
    "managementCompaniesStatus",
    managementCompaniesState.nextPage === 1 ? "Загружаем список УК..." : "",
    "info",
  );
  try {
    const data = await fetchManagementCompanies(
      managementCompaniesState.nextPage,
      20,
    );
    const incomingItems = Array.isArray(data?.items) ? data.items : [];
    managementCompaniesState.totalPages = Number(data?.total_pages) || 1;
    managementCompaniesState.items = mergeUniqueManagementCompanies(
      managementCompaniesState.items,
      incomingItems,
    );
    renderManagementCompanies(managementCompaniesState.items);
    managementCompaniesState.hasMore =
      managementCompaniesState.nextPage < managementCompaniesState.totalPages;
    if (managementCompaniesState.hasMore) {
      managementCompaniesState.nextPage += 1;
    }
    setStatus("managementCompaniesStatus", "", "info");
  } catch (error) {
    setStatus(
      "managementCompaniesStatus",
      error.message || "Ошибка загрузки управляющих компаний",
      "error",
    );
  } finally {
    managementCompaniesState.loading = false;
    updateManagementCompaniesControls();
  }
}

async function loadTariffs(forceReload = false) {
  if (tariffsState.loading) return;
  if (tariffsState.loaded && !forceReload) {
    renderTariffs(tariffsState.items);
    return;
  }

  tariffsState.loading = true;
  setStatus("tariffsStatus", "Загружаем тарифы...", "info");
  try {
    const data = await fetchTariffs();
    const incomingItems = Array.isArray(data?.items) ? data.items : [];
    tariffsState.items = mergeUniqueTariffs([], incomingItems);
    tariffsState.loaded = true;
    renderTariffs(tariffsState.items);
    setStatus("tariffsStatus", "", "info");
  } catch (error) {
    setStatus(
      "tariffsStatus",
      error.message || "Ошибка загрузки тарифов",
      "error",
    );
  } finally {
    tariffsState.loading = false;
  }
}

async function loadEmergencyServices(forceReload = false) {
  if (emergencyServicesState.loading) return;
  if (emergencyServicesState.loaded && !forceReload) {
    renderEmergencyServices(emergencyServicesState.items);
    return;
  }

  emergencyServicesState.loading = true;
  setStatus("emergencyServicesStatus", "Загружаем контакты...", "info");
  try {
    const data = await fetchEmergencyServices();
    emergencyServicesState.items = Array.isArray(data?.items) ? data.items : [];
    emergencyServicesState.loaded = true;
    renderEmergencyServices(emergencyServicesState.items);
    setStatus("emergencyServicesStatus", "", "info");
  } catch (error) {
    setStatus(
      "emergencyServicesStatus",
      error.message || "Ошибка загрузки контактной информации",
      "error",
    );
  } finally {
    emergencyServicesState.loading = false;
  }
}

function initDocumentsBindings() {
  const openDocsBtn = document.getElementById("openDocsPage");
  const openDocsFooter = document.getElementById("openDocsFooter");
  const openManagementCompanies = document.getElementById(
    "openManagementCompanies",
  );
  const openTariffs = document.getElementById("openTariffs");
  const openTariffsFooter = document.getElementById("openTariffsFooter");
  const openEmergencyServices = document.getElementById(
    "openEmergencyServices",
  );
  const managementCompaniesMoreBtn = document.getElementById(
    "managementCompaniesMoreBtn",
  );
  const managementCompaniesSentinel = document.getElementById(
    "managementCompaniesSentinel",
  );
  const managementCompaniesModal = document.getElementById(
    "managementCompaniesModal",
  );
  const docTypeTabs = document.getElementById("docTypeTabs");
  const docScopeTabs = document.getElementById("docScopeTabs");
  const docHouseGroupTabs = document.getElementById("docHouseGroupTabs");
  const districtCourtForm = document.getElementById("districtCourtForm");
  const districtCourtInput = document.getElementById(
    "districtCourtAddressInput",
  );

  const openDocs = (event) => {
    event.preventDefault();
    openModal("documentsModal");
    setDocumentsMode(currentDocumentsMode);
  };

  openDocsBtn?.addEventListener("click", openDocs);
  openDocsFooter?.addEventListener("click", openDocs);
  openManagementCompanies?.addEventListener("click", (event) => {
    event.preventDefault();
    openModal("managementCompaniesModal");
    loadManagementCompanies(true);
  });
  const openTariffsModal = (event) => {
    event.preventDefault();
    openModal("tariffsModal");
    loadTariffs(true);
  };
  openTariffs?.addEventListener("click", openTariffsModal);
  openTariffsFooter?.addEventListener("click", openTariffsModal);
  openEmergencyServices?.addEventListener("click", (event) => {
    event.preventDefault();
    openModal("emergencyServicesModal");
    loadEmergencyServices();
  });
  managementCompaniesMoreBtn?.addEventListener("click", () =>
    loadManagementCompanies(false),
  );

  if (
    managementCompaniesSentinel &&
    managementCompaniesModal &&
    !managementCompaniesObserver
  ) {
    managementCompaniesObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;
        if (!managementCompaniesModal.classList.contains("active")) return;
        if (
          !managementCompaniesState.hasMore ||
          managementCompaniesState.loading
        )
          return;
        loadManagementCompanies(false);
      },
      { root: managementCompaniesModal, threshold: 0.1 },
    );
    managementCompaniesObserver.observe(managementCompaniesSentinel);
  }

  docTypeTabs?.querySelectorAll("button[data-doc-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      setDocumentsMode(button.dataset.docMode);
    });
  });

  docScopeTabs
    ?.querySelectorAll("button[data-area-scope]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        if (button.disabled) return;
        docScopeTabs
          .querySelectorAll("button[data-area-scope]")
          .forEach((b) => b.classList.remove("active"));
        button.classList.add("active");
        currentAreaScope = button.dataset.areaScope;
        updateDocumentFiltersVisibility();
        if (currentDocumentsMode !== "court") {
          loadDocuments();
        }
      });
    });

  docHouseGroupTabs
    ?.querySelectorAll("button[data-house-group]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        docHouseGroupTabs
          .querySelectorAll("button[data-house-group]")
          .forEach((b) => b.classList.remove("active"));
        button.classList.add("active");
        currentHouseDocumentGroup =
          button.dataset.houseGroup || "housing_inspection";
        if (currentDocumentsMode !== "court" && currentAreaScope === "Дом") {
          loadDocuments();
        }
      });
    });

  districtCourtForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    await handleDistrictCourtSearch();
  });

  districtCourtInput?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleDistrictCourtSearch();
    }
  });
}

function initUsefulTipsBindings() {
  const prevBtn = document.getElementById("usefulTipsPrevBtn");
  const nextBtn = document.getElementById("usefulTipsNextBtn");

  prevBtn?.addEventListener("click", () => {
    if (usefulTipsState.currentPage <= 0) return;
    usefulTipsState.currentPage -= 1;
    renderUsefulTipsCards(usefulTipsState.items, "usefulTipsGrid");
  });

  nextBtn?.addEventListener("click", () => {
    const pageCount = Math.ceil(
      usefulTipsState.items.length / usefulTipsState.pageSize,
    );
    if (usefulTipsState.currentPage >= pageCount - 1) return;
    usefulTipsState.currentPage += 1;
    renderUsefulTipsCards(usefulTipsState.items, "usefulTipsGrid");
  });

  window.addEventListener("resize", syncUsefulTipsLayout);
  syncUsefulTipsLayout();
  loadUsefulTips(null);
}

function openUsefulTipPage() {
  const page = document.getElementById("usefulTipPage");
  if (!page) return;
  document.body.classList.add("tip-page-active");
  page.classList.add("active");
  page.setAttribute("aria-hidden", "false");
  window.scrollTo({ top: 0, behavior: "auto" });
}

function closeUsefulTipPage() {
  const page = document.getElementById("usefulTipPage");
  if (!page) return;
  document.body.classList.remove("tip-page-active");
  page.classList.remove("active");
  page.setAttribute("aria-hidden", "true");
}

function goBackFromUsefulTipPage() {
  if ((window.location.hash || "").startsWith("#tip/")) {
    window.location.hash = "#usefulTips";
    return;
  }
  closeUsefulTipPage();
}

async function loadUsefulTipRoute(slug) {
  if (!slug) return;
  openUsefulTipPage();
  const content = document.getElementById("usefulTipContent");
  if (!content) return;
  content.innerHTML = `<div class="news-state">Загружаем совет...</div>`;

  try {
    if (usefulTipsState.detailCache.has(slug)) {
      renderUsefulTipDetail(usefulTipsState.detailCache.get(slug));
    }

    const detail = await fetchUsefulTipDetail(slug);
    usefulTipsState.detailCache.set(slug, detail);
    renderUsefulTipDetail(detail);
  } catch (error) {
    content.innerHTML = `<div class="news-state error">${escapeHtml(
      error.message || "Не удалось загрузить совет",
    )}</div>`;
  }
}

function handleUsefulTipRoute() {
  const hash = window.location.hash || "";
  if (!hash.startsWith("#tip/")) {
    closeUsefulTipPage();
    return;
  }

  const slug = decodeURIComponent(hash.slice(5)).trim();
  if (!slug) {
    closeUsefulTipPage();
    return;
  }
  loadUsefulTipRoute(slug);
}

async function handleQuestionSubmit() {
  const name = document.getElementById("questionName")?.value?.trim();
  const text = document.getElementById("questionText")?.value?.trim();
  const submitButton = document.getElementById("questionSubmitBtn");

  if (!name || !text) {
    setStatus("questionStatus", "Заполните обязательные поля формы", "error");
    return;
  }

  setStatus("questionStatus", "Отправляем вопрос...", "info");
  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = "Отправляем...";
  }

  try {
    await sendUserQuestion({
      name,
      question: text,
    });
    setStatus(
      "questionStatus",
      "Вопрос отправлен. Мы рассмотрим обращение и вернемся с ответом.",
      "success",
    );
    const nameInput = document.getElementById("questionName");
    const textInput = document.getElementById("questionText");
    if (nameInput) nameInput.value = "";
    if (textInput) textInput.value = "";
    setTimeout(() => closeModal("questionModal"), 900);
  } catch (error) {
    setStatus(
      "questionStatus",
      error.message || "Не удалось отправить вопрос",
      "error",
    );
    if (error.message === "Чтобы отправить вопрос, нужно войти в аккаунт.") {
      closeModal("questionModal");
      openModal("loginModal");
    }
  } finally {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = "Отправить";
    }
  }
}

function padCalendarNumber(value) {
  return String(value).padStart(2, "0");
}

function formatCalendarDate(date) {
  const year = date.getFullYear();
  const month = padCalendarNumber(date.getMonth() + 1);
  const day = padCalendarNumber(date.getDate());
  return `${year}-${month}-${day}`;
}

function parseCalendarDate(dateString) {
  if (!dateString || typeof dateString !== "string") return null;
  const [year, month, day] = dateString.split("-").map(Number);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day);
}

function getCalendarMonthRange(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  const from = new Date(year, month, 1);
  const to = new Date(year, month + 1, 0);

  return {
    from: formatCalendarDate(from),
    to: formatCalendarDate(to),
  };
}

function getCalendarMonthTitle(date) {
  return new Intl.DateTimeFormat("ru-RU", {
    month: "long",
    year: "numeric",
  })
    .format(date)
    .replace(/^\p{L}/u, (m) => m.toUpperCase());
}

function getCalendarDayTitle(date) {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function getCalendarDayBadge(date) {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
  }).format(date);
}

function getCalendarWeekdayTitle(date) {
  return new Intl.DateTimeFormat("ru-RU", {
    weekday: "long",
  })
    .format(date)
    .replace(/^\p{L}/u, (m) => m.toUpperCase());
}

function isSameCalendarDay(a, b) {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function getCalendarItemsMap(items) {
  const map = new Map();
  items.forEach((item) => {
    const key = String(item.note_date || "");
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(item);
  });
  return map;
}

function getCalendarItemDotClass(item) {
  if (item?.is_done) return "done";
  return "planned";
}

function getCalendarDayItems(date) {
  if (!date) return [];
  const dateKey = formatCalendarDate(date);
  return calendarState.monthItems.filter((item) => item.note_date === dateKey);
}

function getCalendarStats() {
  const total = calendarState.monthItems.length;
  const done = calendarState.monthItems.filter((item) => item.is_done).length;
  const planned = total - done;
  const selectedTotal = getCalendarDayItems(calendarState.selectedDate).length;

  return { total, done, planned, selectedTotal };
}

function getCalendarEventCountLabel(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) return `${count} заметка`;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14))
    return `${count} заметки`;
  return `${count} заметок`;
}

function setCalendarCreateFormOpen(isOpen) {
  calendarState.isCreateFormOpen = Boolean(isOpen);
  const openBtn = document.getElementById("calendarOpenCreateBtn");
  if (openBtn) {
    openBtn.textContent = "Добавить заметку";
    openBtn.setAttribute(
      "aria-expanded",
      calendarState.isCreateFormOpen ? "true" : "false",
    );
  }
}

function closeCalendarCreateModal({
  resetFields = false,
  clearStatus = true,
} = {}) {
  if (clearStatus) {
    setStatus("calendarStatus", "", "info");
  }
  if (resetFields) {
    const titleInput = document.getElementById("calendarNoteTitle");
    const descriptionInput = document.getElementById("calendarNoteDescription");
    if (titleInput) titleInput.value = "";
    if (descriptionInput) descriptionInput.value = "";
  }
  closeModal("calendarCreateModal");
  setCalendarCreateFormOpen(false);
}

function openCalendarCreateModal() {
  openModal("calendarCreateModal");
  setCalendarCreateFormOpen(true);

  const titleInput = document.getElementById("calendarNoteTitle");
  window.setTimeout(() => titleInput?.focus(), 0);
}

const calendarCreateModalEl = document.getElementById("calendarCreateModal");
calendarCreateModalEl?.addEventListener("click", (event) => {
  if (event.target === calendarCreateModalEl) {
    closeCalendarCreateModal({ resetFields: false, clearStatus: true });
  }
});

function renderCalendarMeta() {
  const monthMeta = document.getElementById("calendarMonthMeta");
  const statsEl = document.getElementById("calendarStats");
  const eventsCountEl = document.getElementById("calendarEventsCount");
  if (!monthMeta || !statsEl || !eventsCountEl) return;

  const stats = getCalendarStats();
  monthMeta.textContent =
    stats.total > 0
      ? `В этом месяце ${getCalendarEventCountLabel(stats.total)}: ${stats.planned} в работе и ${stats.done} выполнено.`
      : "";

  statsEl.innerHTML = `
    <div class="calendar-stat-card">
      <span class="calendar-stat-value">${stats.selectedTotal}</span>
      <span class="calendar-stat-label">На выбранный день</span>
    </div>
    <div class="calendar-stat-card">
      <span class="calendar-stat-value">${stats.planned}</span>
      <span class="calendar-stat-label">Активных</span>
    </div>
    <div class="calendar-stat-card">
      <span class="calendar-stat-value">${stats.done}</span>
      <span class="calendar-stat-label">Выполнено</span>
    </div>
  `;

  eventsCountEl.textContent = getCalendarEventCountLabel(
    calendarState.dayItems.length,
  );
}

function renderCalendarGrid() {
  const grid = document.getElementById("calendarGrid");
  const title = document.getElementById("calendarMonthTitle");
  if (!grid || !title) return;

  title.textContent = getCalendarMonthTitle(calendarState.currentDate);

  const currentYear = calendarState.currentDate.getFullYear();
  const currentMonth = calendarState.currentDate.getMonth();

  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);

  let firstWeekDay = firstDay.getDay();
  if (firstWeekDay === 0) firstWeekDay = 7;

  const daysInMonth = lastDay.getDate();
  const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();

  const today = new Date();
  const itemsMap = getCalendarItemsMap(calendarState.monthItems);

  const dayNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const cells = [];

  dayNames.forEach((dayName) => {
    cells.push(`<div class="cal-dn">${escapeHtml(dayName)}</div>`);
  });

  for (let i = firstWeekDay - 1; i > 0; i -= 1) {
    const dayNumber = prevMonthLastDay - i + 1;
    cells.push(
      `<div class="cal-d muted" aria-hidden="true"><span class="cal-d-num">${dayNumber}</span></div>`,
    );
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const cellDate = new Date(currentYear, currentMonth, day);
    const cellKey = formatCalendarDate(cellDate);
    const items = itemsMap.get(cellKey) || [];
    const hasEvent = items.length > 0;
    const hasDoneEvent = items.some((item) => item.is_done);
    const isToday = isSameCalendarDay(cellDate, today);
    const isSelected =
      calendarState.selectedDate &&
      isSameCalendarDay(cellDate, calendarState.selectedDate);

    const classNames = ["cal-d"];
    if (hasEvent) classNames.push("has-event");
    if (hasDoneEvent) classNames.push("has-done-event");
    if (isToday) classNames.push("today");
    if (isSelected) classNames.push("selected");

    cells.push(`
      <button
        type="button"
        class="${classNames.join(" ")}"
        data-calendar-date="${escapeHtml(cellKey)}"
        aria-label="${escapeHtml(getCalendarDayTitle(cellDate))}"
      >
        <span class="cal-d-num">${day}</span>
        ${hasEvent ? `<span class="cal-d-meta">${items.length}</span>` : `<span class="cal-d-meta empty">-</span>`}
      </button>
    `);
  }

  const totalCells = 42;
  const nonDayCells = firstWeekDay - 1;
  const usedCells = nonDayCells + daysInMonth;
  const nextDaysCount = totalCells - usedCells;

  for (let day = 1; day <= nextDaysCount; day += 1) {
    cells.push(
      `<div class="cal-d muted" aria-hidden="true"><span class="cal-d-num">${day}</span></div>`,
    );
  }

  grid.innerHTML = cells.join("");

  grid.querySelectorAll("[data-calendar-date]").forEach((button) => {
    button.addEventListener("click", () => {
      const rawDate = button.getAttribute("data-calendar-date");
      const parsed = parseCalendarDate(rawDate);
      if (!parsed) return;
      selectCalendarDay(parsed);
    });
  });
}

function renderCalendarSelectedDayLabel() {
  const el = document.getElementById("calendarSelectedDayLabel");
  const meta = document.getElementById("calendarSelectedDayMeta");
  const chip = document.getElementById("calendarSelectedDayChip");
  const badge = document.getElementById("calendarDayBadge");
  if (!el || !meta || !chip || !badge) return;

  if (!calendarState.selectedDate) {
    el.textContent = "Выберите день";
    meta.textContent =
      "Выберите дату, чтобы увидеть список заметок и быстро добавить новую.";
    chip.textContent = "Выберите день";
    badge.textContent = "00";
    return;
  }

  const dayItems = getCalendarDayItems(calendarState.selectedDate);
  el.textContent = `Заметки на ${getCalendarDayTitle(calendarState.selectedDate)}`;
  meta.textContent = `${getCalendarWeekdayTitle(calendarState.selectedDate)} · ${getCalendarEventCountLabel(dayItems.length)}.`;
  chip.textContent = dayItems.length
    ? `${dayItems.length} в плане`
    : "День свободен";
  badge.textContent = getCalendarDayBadge(calendarState.selectedDate);
}

function renderCalendarEventsList() {
  const list = document.getElementById("calendarEventsList");
  if (!list) return;

  if (!calendarState.selectedDate) {
    list.innerHTML = `<div class="news-state">Выберите день, чтобы посмотреть заметки.</div>`;
    return;
  }

  if (calendarState.loadingDay) {
    list.innerHTML = `<div class="news-state">Загружаем заметки...</div>`;
    return;
  }

  if (!calendarState.dayItems.length) {
    list.innerHTML = `<div class="calendar-empty-state">На этот день заметок пока нет.</div>`;
    return;
  }

  list.innerHTML = calendarState.dayItems
    .map((item) => {
      const dotClass = getCalendarItemDotClass(item);
      const description = item.description
        ? `<p>${escapeHtml(item.description)}</p>`
        : `<p>Без описания</p>`;

      return `
        <div class="cal-ev ${item.is_done ? "done" : ""}" data-calendar-note-id="${escapeHtml(item.id)}">
          <div class="cal-ev-main">
            <div class="cal-ev-dot ${dotClass}"></div>
            <div class="cal-ev-content">
              <div class="cal-ev-topline">
                <h4>${escapeHtml(item.title || "Без названия")}</h4>
                <span class="cal-ev-state ${item.is_done ? "done" : "planned"}">${item.is_done ? "Выполнено" : "В работе"}</span>
              </div>
              ${description}
            </div>
          </div>

          <div class="cal-ev-actions">
            <button
              type="button"
              class="cal-ev-btn"
              data-calendar-toggle-id="${escapeHtml(item.id)}"
              title="${item.is_done ? "Снять выполнение" : "Отметить выполненной"}"
            >
              ${item.is_done ? "↺" : "✓"}
            </button>
            <button
              type="button"
              class="cal-ev-btn delete"
              data-calendar-delete-id="${escapeHtml(item.id)}"
              title="Удалить заметку"
            >
              ×
            </button>
          </div>
        </div>
      `;
    })
    .join("");

  list.querySelectorAll("[data-calendar-toggle-id]").forEach((button) => {
    button.addEventListener("click", async () => {
      const noteId = button.getAttribute("data-calendar-toggle-id");
      const item = calendarState.dayItems.find((note) => note.id === noteId);
      if (!item) return;
      await handleCalendarToggle(item.id, !item.is_done);
    });
  });

  list.querySelectorAll("[data-calendar-delete-id]").forEach((button) => {
    button.addEventListener("click", async () => {
      const noteId = button.getAttribute("data-calendar-delete-id");
      if (!noteId) return;
      await handleCalendarDelete(noteId);
    });
  });
}

function renderCalendarAll() {
  renderCalendarSelectedDayLabel();
  renderCalendarMeta();
  renderCalendarGrid();
  renderCalendarEventsList();
  syncCalendarMobilePanels();
}

function setCalendarMobilePanel(panel) {
  calendarState.mobilePanel = panel === "summary" ? "summary" : "events";
  syncCalendarMobilePanels();
}

function syncCalendarMobilePanels() {
  const tabs = document.querySelectorAll("[data-calendar-mobile-tab]");
  const panels = document.querySelectorAll("[data-calendar-mobile-panel]");
  const isCompactViewport = window.innerWidth <= 640;

  tabs.forEach((tab) => {
    const tabName = tab.getAttribute("data-calendar-mobile-tab");
    const isActive = tabName === calendarState.mobilePanel;
    tab.classList.toggle("active", isCompactViewport && isActive);
    tab.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  panels.forEach((panel) => {
    const panelName = panel.getAttribute("data-calendar-mobile-panel");
    const isActive =
      !isCompactViewport || panelName === calendarState.mobilePanel;
    panel.classList.toggle("is-active", isActive);
    panel.setAttribute("aria-hidden", isActive ? "false" : "true");
  });
}

async function loadCalendarMonth() {
  if (!isAuthenticated()) {
    calendarState.monthItems = [];
    calendarState.dayItems = [];
    renderCalendarAll();
    setStatus(
      "calendarStatus",
      "Чтобы пользоваться календарем, войдите в аккаунт.",
      "info",
    );
    return;
  }

  calendarState.loadingMonth = true;
  setStatus("calendarStatus", "Загружаем календарь...", "info");

  try {
    const range = getCalendarMonthRange(calendarState.currentDate);
    const response = await fetchCalendarNotesByRange(range.from, range.to);
    calendarState.monthItems = Array.isArray(response?.items)
      ? response.items
      : [];
    renderCalendarGrid();

    if (calendarState.selectedDate) {
      const selectedMonth = calendarState.selectedDate.getMonth();
      const currentMonth = calendarState.currentDate.getMonth();
      const selectedYear = calendarState.selectedDate.getFullYear();
      const currentYear = calendarState.currentDate.getFullYear();

      if (selectedMonth !== currentMonth || selectedYear !== currentYear) {
        calendarState.selectedDate = new Date(currentYear, currentMonth, 1);
      }
    } else {
      const now = new Date();
      if (
        now.getMonth() === currentMonth &&
        now.getFullYear() === currentYear
      ) {
        calendarState.selectedDate = new Date(
          currentYear,
          currentMonth,
          now.getDate(),
        );
      } else {
        calendarState.selectedDate = new Date(currentYear, currentMonth, 1);
      }
    }

    await loadCalendarDay();
    setStatus("calendarStatus", "", "info");
  } catch (error) {
    calendarState.monthItems = [];
    calendarState.dayItems = [];
    renderCalendarAll();
    setStatus(
      "calendarStatus",
      error.message || "Не удалось загрузить календарь",
      "error",
    );
  } finally {
    calendarState.loadingMonth = false;
  }
}

async function loadCalendarDay() {
  if (!calendarState.selectedDate) {
    calendarState.dayItems = [];
    renderCalendarEventsList();
    return;
  }

  if (!isAuthenticated()) {
    calendarState.dayItems = [];
    renderCalendarEventsList();
    return;
  }

  calendarState.loadingDay = true;
  renderCalendarEventsList();

  try {
    const date = formatCalendarDate(calendarState.selectedDate);
    const response = await fetchCalendarNotesByDay(date);
    calendarState.dayItems = Array.isArray(response?.items)
      ? response.items
      : [];
    renderCalendarAll();
  } catch (error) {
    calendarState.dayItems = [];
    renderCalendarEventsList();
    setStatus(
      "calendarStatus",
      error.message || "Не удалось загрузить заметки за день",
      "error",
    );
  } finally {
    calendarState.loadingDay = false;
    renderCalendarEventsList();
  }
}

async function selectCalendarDay(date) {
  calendarState.selectedDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );
  if (window.innerWidth <= 640) {
    setCalendarMobilePanel("events");
  }
  renderCalendarAll();
  await loadCalendarDay();
}

async function handleCalendarCreate() {
  if (!isAuthenticated()) {
    setStatus("calendarStatus", "Сначала войдите в аккаунт", "error");
    openModal("loginModal");
    return;
  }

  if (!calendarState.selectedDate) {
    setStatus("calendarStatus", "Сначала выберите день в календаре", "error");
    return;
  }

  const titleInput = document.getElementById("calendarNoteTitle");
  const descriptionInput = document.getElementById("calendarNoteDescription");

  const title = titleInput?.value?.trim() || "";
  const description = descriptionInput?.value?.trim() || "";

  if (!title) {
    setStatus("calendarStatus", "Введите название заметки", "error");
    return;
  }

  if (title.length > 120) {
    setStatus(
      "calendarStatus",
      "Название не должно превышать 120 символов",
      "error",
    );
    return;
  }

  if (description.length > 1000) {
    setStatus(
      "calendarStatus",
      "Описание не должно превышать 1000 символов",
      "error",
    );
    return;
  }

  setStatus("calendarStatus", "Сохраняем заметку...", "info");

  try {
    await createCalendarNote({
      title,
      description: description || null,
      note_date: formatCalendarDate(calendarState.selectedDate),
    });

    await loadCalendarMonth();
    closeCalendarCreateModal({ resetFields: true, clearStatus: true });
  } catch (error) {
    setStatus(
      "calendarStatus",
      error.message || "Не удалось создать заметку",
      "error",
    );
  }
}

async function handleCalendarToggle(noteId, isDone) {
  if (!noteId) return;

  try {
    await updateCalendarNoteStatus(noteId, isDone);
    await loadCalendarMonth();
    setStatus("calendarStatus", "", "info");
  } catch (error) {
    setStatus(
      "calendarStatus",
      error.message || "Не удалось обновить статус",
      "error",
    );
  }
}

async function handleCalendarDelete(noteId) {
  if (!noteId) return;

  try {
    await deleteCalendarNote(noteId);
    await loadCalendarMonth();
    setStatus("calendarStatus", "", "info");
  } catch (error) {
    setStatus(
      "calendarStatus",
      error.message || "Не удалось удалить заметку",
      "error",
    );
  }
}

function initCalendarBindings() {
  document.querySelectorAll("[data-calendar-mobile-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      setCalendarMobilePanel(button.getAttribute("data-calendar-mobile-tab"));
    });
  });

  window.addEventListener("resize", syncCalendarMobilePanels);

  document
    .getElementById("calendarPrevBtn")
    ?.addEventListener("click", async () => {
      const current = calendarState.currentDate;
      calendarState.currentDate = new Date(
        current.getFullYear(),
        current.getMonth() - 1,
        1,
      );
      await loadCalendarMonth();
    });

  document
    .getElementById("calendarNextBtn")
    ?.addEventListener("click", async () => {
      const current = calendarState.currentDate;
      calendarState.currentDate = new Date(
        current.getFullYear(),
        current.getMonth() + 1,
        1,
      );
      await loadCalendarMonth();
    });

  document
    .getElementById("calendarTodayBtn")
    ?.addEventListener("click", async () => {
      const now = new Date();
      calendarState.currentDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        1,
      );
      calendarState.selectedDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
      );
      await loadCalendarMonth();
    });

  document
    .getElementById("calendarOpenCreateBtn")
    ?.addEventListener("click", () => {
      if (!isAuthenticated()) {
        setStatus("calendarStatus", "Сначала войдите в аккаунт", "error");
        openModal("loginModal");
        return;
      }

      if (!calendarState.selectedDate) {
        setStatus(
          "calendarStatus",
          "Сначала выберите день в календаре",
          "error",
        );
        return;
      }

      setStatus("calendarStatus", "", "info");
      openCalendarCreateModal();
    });

  document
    .getElementById("calendarCancelCreateBtn")
    ?.addEventListener("click", () => {
      closeCalendarCreateModal({ resetFields: false, clearStatus: true });
    });

  document
    .getElementById("calendarCreateModalCloseBtn")
    ?.addEventListener("click", () => {
      closeCalendarCreateModal({ resetFields: false, clearStatus: true });
    });

  document
    .getElementById("calendarNoteTitle")
    ?.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleCalendarCreate();
      }
    });

  document
    .getElementById("calendarCreateBtn")
    ?.addEventListener("click", handleCalendarCreate);

  setCalendarCreateFormOpen(false);
  renderCalendarAll();
  loadCalendarMonth();
}

function initAuthBindings() {
  const accountWidget = document.getElementById("accountWidget");
  const trigger = document.getElementById("authTrigger");
  const logoutBtn = document.getElementById("logoutBtn");

  trigger?.addEventListener("click", (event) => {
    event.preventDefault();
    toggleAccountMenu();
  });

  logoutBtn?.addEventListener("click", async () => {
    closeAccountMenu();
    await logout();
  });

  document.addEventListener("click", (event) => {
    if (!accountWidget?.contains(event.target)) {
      closeAccountMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAccountMenu();
      const mapPage = document.getElementById("mapPage");
      if (mapPage?.classList.contains("active")) {
        closeMapPage();
      }
      const usefulTipPage = document.getElementById("usefulTipPage");
      if (usefulTipPage?.classList.contains("active")) {
        closeUsefulTipPage();
      }
    }
  });

  document
    .getElementById("loginSubmitBtn")
    ?.addEventListener("click", handleLogin);
  document
    .getElementById("registerSubmitBtn")
    ?.addEventListener("click", handleRegister);
}

function initResponsiveNavigation() {
  const burger = document.querySelector(".burger");
  const nav = document.getElementById("mainNav");

  if (!burger || !nav) {
    return;
  }

  burger.setAttribute("aria-controls", "mainNav");
  burger.setAttribute("aria-expanded", "false");

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 980) {
        closeMenu();
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) {
      closeMenu();
    }
    syncNewsAreaHeight();
  });
}

function initBackendBindings() {
  loadNews();
  introspectToken();
  initResponsiveNavigation();
  initAuthBindings();
  initDocumentsBindings();
  initUsefulTipsBindings();
  initAllNewsPagination();
  initMapMarkerBindings();
  initDgisMaps();
  initCalendarBindings();
  window.addEventListener("load", syncNewsAreaHeight);
  window.requestAnimationFrame(syncNewsAreaHeight);
  window.addEventListener("hashchange", handleUsefulTipRoute);
  handleUsefulTipRoute();
  document.getElementById("newsAllLink")?.addEventListener("click", (event) => {
    event.preventDefault();
    openModal("allNewsModal");
    loadAllNews(true);
  });

  document
    .getElementById("questionSubmitBtn")
    ?.addEventListener("click", handleQuestionSubmit);
}

window.logout = logout;
window.loadDocuments = loadDocuments;
window.loadAllNews = loadAllNews;
window.refreshModalMapSize = refreshModalMapSize;
window.openMapPage = openMapPage;
window.closeMapPage = closeMapPage;
window.closeUsefulTipPage = closeUsefulTipPage;
window.goBackFromUsefulTipPage = goBackFromUsefulTipPage;

initBackendBindings();
