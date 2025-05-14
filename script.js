document.addEventListener("DOMContentLoaded", () => {
  fetch("offers.json")
    .then(res => res.json())
    .then(data => {
      const mainMenu = document.getElementById("main-menu");
      const content = document.getElementById("content");

      const titleMap = {
        cards: "💳 Дебетовые карты",
        stickers: "🔖 Платежные стикеры",
        deposits: "🧾 Вклады",
        loans: "💸 Займы",
        auto_loans: "🚗 Автокредиты",
        cash_loans: "💰 Кредиты наличными",
        bank_jobs: "💼 Работа в банках"
      };

      // Создаем главное меню
      Object.keys(data).forEach(key => {
        const btn = document.createElement("button");
        btn.textContent = titleMap[key] || key;
        btn.onclick = () => showCategory(data[key], titleMap[key]);
        mainMenu.appendChild(btn);
      });

      function showCategory(items, title) {
        content.innerHTML = `<h2>${title}</h2>`;
        items.forEach(item => {
          const link = document.createElement("a");
          link.href = item.link;
          link.target = "_blank";
          link.className = "button-link";
          link.textContent = item.title;
          content.appendChild(link);
        });

        const backBtn = document.createElement("button");
        backBtn.textContent = "⬅ Назад";
        backBtn.className = "back-btn";
        backBtn.onclick = () => {
          content.innerHTML = "";
        };
        content.appendChild(backBtn);
      }
    })
    .catch(err => {
      console.error("Ошибка загрузки offers.json:", err);
    });
});