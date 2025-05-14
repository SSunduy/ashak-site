document.addEventListener("DOMContentLoaded", () => {
  fetch("offers.json")
    .then(res => res.json())
    .then(data => {
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

      Object.keys(data).forEach(key => {
        const section = document.createElement("section");
        section.classList.add("category-section");

        const title = document.createElement("h2");
        title.textContent = titleMap[key];
        section.appendChild(title);

        data[key].forEach(item => {
          const card = document.createElement("a");
          card.href = item.link;
          card.target = "_blank";
          card.className = "card button-link";
          card.textContent = item.title;
          section.appendChild(card);
        });

        content.appendChild(section);
      });
    })
    .catch(err => {
      console.error("Ошибка загрузки offers.json:", err);
    });
});
