const problemsData = {
  debt: {
    icon: "💰",
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
    icon: "🏚️",
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
    icon: "🗑️",
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
    icon: "🔧",
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
    icon: "📋",
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
    icon: "🚿",
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
    icon: "🌡️",
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
    icon: "🌨️",
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
    icon: "🤝",
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
  house: "🏠 Дом",
  apartment: "🚪 Квартира",
  entrance: "🏢 Подъезд",
};

function applyFilters() {
  const cards = document.querySelectorAll(".problem-card");
  let visible = 0;
  cards.forEach((c) => {
    const matchObj = !currentObj || c.dataset.obj === currentObj;
    const matchCat = currentCat === "all" || c.dataset.cat === currentCat;
    if (matchObj && matchCat) {
      c.classList.remove("hidden");
      visible++;
    } else {
      c.classList.add("hidden");
    }
  });
  document
    .getElementById("noResults")
    .classList.toggle("visible", visible === 0);
}

function selectObject(el, obj) {
  const wasActive = el.classList.contains("active");
  document
    .querySelectorAll(".object-card")
    .forEach((c) => c.classList.remove("active"));

  if (wasActive) {
    currentObj = null;
    document.getElementById("objectFilterBadge").classList.remove("visible");
  } else {
    el.classList.add("active");
    currentObj = obj;
    document.getElementById("objectFilterText").textContent = objNames[obj];
    document.getElementById("objectFilterBadge").classList.add("visible");
    document
      .getElementById("problems")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }
  applyFilters();
}

function clearObjectFilter() {
  currentObj = null;
  document
    .querySelectorAll(".object-card")
    .forEach((c) => c.classList.remove("active"));
  document.getElementById("objectFilterBadge").classList.remove("visible");
  applyFilters();
}

function filterByCategory(cat, btn) {
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  currentCat = cat;
  applyFilters();
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
      o.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});

function openProblem(key) {
  const d = problemsData[key];
  if (!d) return;
  document.getElementById("problemContent").innerHTML = `
        <div style="text-align:center;margin-bottom:1.2rem;">
            <div style="font-size:2.5rem;margin-bottom:0.3rem;">${d.icon}</div>
            <h2 style="font-family:'Playfair Display',serif;font-size:1.3rem;">${d.title}</h2>
        </div>
        <div style="margin-bottom:1.2rem;">
            <h3 style="color:var(--primary);margin-bottom:0.5rem;font-size:0.92rem;font-weight:700;">📋 Пошаговое решение</h3>
            <ol style="padding-left:1.2rem;display:flex;flex-direction:column;gap:0.3rem;font-size:0.86rem;">
                ${d.steps.map((s) => `<li style="line-height:1.5;">${s}</li>`).join("")}
            </ol>
        </div>
        <div style="margin-bottom:1.2rem;">
            <h3 style="color:var(--primary);margin-bottom:0.5rem;font-size:0.92rem;font-weight:700;">📄 Документы</h3>
            <div style="display:flex;flex-direction:column;gap:0.3rem;">
                ${d.docs
                  .map(
                    (
                      doc,
                    ) => `<div style="display:flex;align-items:center;gap:0.5rem;padding:0.5rem 0.7rem;background:var(--bg);border-radius:6px;cursor:pointer;font-size:0.84rem;">
                    <span>📎</span><span style="flex:1;font-weight:500;">${doc}</span><span style="color:var(--primary);font-size:0.76rem;font-weight:700;">Скачать</span>
                </div>`,
                  )
                  .join("")}
            </div>
        </div>
        <div style="margin-bottom:1.2rem;">
            <h3 style="color:var(--primary);margin-bottom:0.5rem;font-size:0.92rem;font-weight:700;">⚖️ Нормативная база</h3>
            <ul style="padding-left:1.2rem;font-size:0.84rem;color:var(--text-light);">
                ${d.laws.map((l) => `<li>${l}</li>`).join("")}
            </ul>
        </div>
        <div>
            <h3 style="color:var(--primary);margin-bottom:0.5rem;font-size:0.92rem;font-weight:700;">🏛️ Куда обращаться</h3>
            <div style="display:flex;flex-wrap:wrap;gap:0.35rem;">
                ${d.where.map((w) => `<span style="background:var(--bg);padding:0.3rem 0.7rem;border-radius:50px;font-size:0.78rem;font-weight:500;">${w}</span>`).join("")}
            </div>
        </div>`;
  openModal("problemModal");
}

function setSearch(t) {
  document.getElementById("searchInput").value = t;
  performSearch();
}
function performSearch() {
  const q = document.getElementById("searchInput").value.toLowerCase();
  if (!q) return;
  for (const [k, d] of Object.entries(problemsData)) {
    if (
      d.title.toLowerCase().includes(q) ||
      d.steps.some((s) => s.toLowerCase().includes(q))
    ) {
      openProblem(k);
      return;
    }
  }
  openModal("questionModal");
}

function toggleMenu() {
  document.getElementById("mainNav").classList.toggle("active");
}
