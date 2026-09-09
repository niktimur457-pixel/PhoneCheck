"use strict";

/* =========================================================
   PHONECHECK — APP.JS
   Каталог + поиск + фильтры + рейтинг + сравнение
   + избранное + история + авторизация
========================================================= */


/* =========================================================
   1. ДАННЫЕ СМАРТФОНОВ
========================================================= */

const phoneData = [

    {
        name: "Samsung Galaxy S25 Ultra",
        brand: "Samsung",
        year: 2025,
        price: 1299,
        rating: 4.9,
        camera: 200,
        display: '6.9" AMOLED 120 Гц',
        processor: "Snapdragon 8 Elite",
        battery: 5000,
        zoom: 100,
        storage: "256 ГБ",
        ram: "12 ГБ",
        charging: 45
    },

    {
        name: "Samsung Galaxy S25+",
        brand: "Samsung",
        year: 2025,
        price: 999,
        rating: 4.8,
        camera: 50,
        display: '6.7" AMOLED 120 Гц',
        processor: "Snapdragon 8 Elite",
        battery: 4900,
        zoom: 30,
        storage: "256 ГБ",
        ram: "12 ГБ",
        charging: 45
    },

    {
        name: "Samsung Galaxy S25",
        brand: "Samsung",
        year: 2025,
        price: 799,
        rating: 4.7,
        camera: 50,
        display: '6.2" AMOLED 120 Гц',
        processor: "Snapdragon 8 Elite",
        battery: 4000,
        zoom: 30,
        storage: "128 ГБ",
        ram: "12 ГБ",
        charging: 25
    },

    {
        name: "Samsung Galaxy Z Fold 7",
        brand: "Samsung",
        year: 2025,
        price: 1999,
        rating: 4.8,
        camera: 200,
        display: '8.0" AMOLED 120 Гц',
        processor: "Snapdragon 8 Elite",
        battery: 4400,
        zoom: 30,
        storage: "512 ГБ",
        ram: "12 ГБ",
        charging: 45
    },

    {
        name: "Samsung Galaxy Z Flip 7",
        brand: "Samsung",
        year: 2025,
        price: 1099,
        rating: 4.6,
        camera: 50,
        display: '6.9" AMOLED 120 Гц',
        processor: "Snapdragon",
        battery: 4300,
        zoom: 10,
        storage: "256 ГБ",
        ram: "12 ГБ",
        charging: 25
    },

    {
        name: "iPhone 17 Pro Max",
        brand: "Apple",
        year: 2025,
        price: 1399,
        rating: 4.9,
        camera: 48,
        display: '6.9" OLED 120 Гц',
        processor: "Apple A19 Pro",
        battery: 5000,
        zoom: 10,
        storage: "256 ГБ",
        ram: "12 ГБ",
        charging: 45
    },

    {
        name: "iPhone 17 Pro",
        brand: "Apple",
        year: 2025,
        price: 1199,
        rating: 4.9,
        camera: 48,
        display: '6.3" OLED 120 Гц',
        processor: "Apple A19 Pro",
        battery: 4400,
        zoom: 10,
        storage: "256 ГБ",
        ram: "12 ГБ",
        charging: 45
    },

    {
        name: "iPhone 17",
        brand: "Apple",
        year: 2025,
        price: 899,
        rating: 4.7,
        camera: 48,
        display: '6.3" OLED 120 Гц',
        processor: "Apple A19",
        battery: 4000,
        zoom: 5,
        storage: "128 ГБ",
        ram: "8 ГБ",
        charging: 35
    },

    {
        name: "iPhone 16 Pro Max",
        brand: "Apple",
        year: 2024,
        price: 1199,
        rating: 4.9,
        camera: 48,
        display: '6.9" OLED 120 Гц',
        processor: "Apple A18 Pro",
        battery: 4685,
        zoom: 25,
        storage: "256 ГБ",
        ram: "8 ГБ",
        charging: 30
    },

    {
        name: "iPhone 16 Pro",
        brand: "Apple",
        year: 2024,
        price: 999,
        rating: 4.8,
        camera: 48,
        display: '6.3" OLED 120 Гц',
        processor: "Apple A18 Pro",
        battery: 3582,
        zoom: 25,
        storage: "128 ГБ",
        ram: "8 ГБ",
        charging: 30
    },

    {
        name: "Xiaomi 15 Ultra",
        brand: "Xiaomi",
        year: 2025,
        price: 1199,
        rating: 4.9,
        camera: 200,
        display: '6.73" AMOLED 120 Гц',
        processor: "Snapdragon 8 Elite",
        battery: 5410,
        zoom: 120,
        storage: "512 ГБ",
        ram: "16 ГБ",
        charging: 90
    },

    {
        name: "Xiaomi 15 Pro",
        brand: "Xiaomi",
        year: 2025,
        price: 999,
        rating: 4.8,
        camera: 50,
        display: '6.73" AMOLED 120 Гц',
        processor: "Snapdragon 8 Elite",
        battery: 6100,
        zoom: 120,
        storage: "256 ГБ",
        ram: "12 ГБ",
        charging: 90
    },

    {
        name: "Xiaomi 15",
        brand: "Xiaomi",
        year: 2025,
        price: 799,
        rating: 4.7,
        camera: 50,
        display: '6.36" AMOLED 120 Гц',
        processor: "Snapdragon 8 Elite",
        battery: 5240,
        zoom: 60,
        storage: "256 ГБ",
        ram: "12 ГБ",
        charging: 90
    },

    {
        name: "Xiaomi 14 Ultra",
        brand: "Xiaomi",
        year: 2024,
        price: 1099,
        rating: 4.8,
        camera: 50,
        display: '6.73" AMOLED 120 Гц',
        processor: "Snapdragon 8 Gen 3",
        battery: 5000,
        zoom: 120,
        storage: "512 ГБ",
        ram: "16 ГБ",
        charging: 90
    },

    {
        name: "Google Pixel 10 Pro XL",
        brand: "Google",
        year: 2025,
        price: 1199,
        rating: 4.8,
        camera: 50,
        display: '6.8" OLED 120 Гц',
        processor: "Tensor G5",
        battery: 5200,
        zoom: 100,
        storage: "256 ГБ",
        ram: "16 ГБ",
        charging: 45
    },

    {
        name: "Google Pixel 10 Pro",
        brand: "Google",
        year: 2025,
        price: 999,
        rating: 4.8,
        camera: 50,
        display: '6.3" OLED 120 Гц',
        processor: "Tensor G5",
        battery: 4700,
        zoom: 100,
        storage: "256 ГБ",
        ram: "16 ГБ",
        charging: 45
    },

    {
        name: "Google Pixel 10",
        brand: "Google",
        year: 2025,
        price: 799,
        rating: 4.7,
        camera: 48,
        display: '6.3" OLED 120 Гц',
        processor: "Tensor G5",
        battery: 4970,
        zoom: 30,
        storage: "128 ГБ",
        ram: "12 ГБ",
        charging: 30
    },

    {
        name: "OnePlus 13",
        brand: "OnePlus",
        year: 2025,
        price: 899,
        rating: 4.8,
        camera: 50,
        display: '6.82" AMOLED 120 Гц',
        processor: "Snapdragon 8 Elite",
        battery: 6000,
        zoom: 120,
        storage: "256 ГБ",
        ram: "12 ГБ",
        charging: 100
    },

    {
        name: "OnePlus 13R",
        brand: "OnePlus",
        year: 2025,
        price: 599,
        rating: 4.6,
        camera: 50,
        display: '6.78" AMOLED 120 Гц',
        processor: "Snapdragon 8 Gen 3",
        battery: 6000,
        zoom: 20,
        storage: "256 ГБ",
        ram: "12 ГБ",
        charging: 80
    },

    {
        name: "Realme GT 7 Pro",
        brand: "Realme",
        year: 2024,
        price: 799,
        rating: 4.7,
        camera: 50,
        display: '6.78" AMOLED 120 Гц',
        processor: "Snapdragon 8 Elite",
        battery: 6500,
        zoom: 30,
        storage: "256 ГБ",
        ram: "12 ГБ",
        charging: 120
    },

    {
        name: "Realme GT 7",
        brand: "Realme",
        year: 2025,
        price: 599,
        rating: 4.6,
        camera: 50,
        display: '6.78" AMOLED 120 Гц',
        processor: "Dimensity 9400e",
        battery: 7000,
        zoom: 20,
        storage: "256 ГБ",
        ram: "12 ГБ",
        charging: 120
    },

    {
        name: "Honor Magic7 Pro",
        brand: "Honor",
        year: 2025,
        price: 1099,
        rating: 4.8,
        camera: 200,
        display: '6.8" OLED 120 Гц',
        processor: "Snapdragon 8 Elite",
        battery: 5850,
        zoom: 100,
        storage: "512 ГБ",
        ram: "12 ГБ",
        charging: 100
    },

    {
        name: "Honor Magic7",
        brand: "Honor",
        year: 2025,
        price: 799,
        rating: 4.7,
        camera: 50,
        display: '6.78" OLED 120 Гц',
        processor: "Snapdragon 8 Elite",
        battery: 5650,
        zoom: 50,
        storage: "256 ГБ",
        ram: "12 ГБ",
        charging: 100
    },

    {
        name: "OPPO Find X8 Ultra",
        brand: "OPPO",
        year: 2025,
        price: 1199,
        rating: 4.9,
        camera: 50,
        display: '6.82" AMOLED 120 Гц',
        processor: "Snapdragon 8 Elite",
        battery: 6100,
        zoom: 120,
        storage: "512 ГБ",
        ram: "16 ГБ",
        charging: 100
    },

    {
        name: "OPPO Find X8 Pro",
        brand: "OPPO",
        year: 2024,
        price: 999,
        rating: 4.8,
        camera: 50,
        display: '6.78" AMOLED 120 Гц',
        processor: "Dimensity 9400",
        battery: 5910,
        zoom: 120,
        storage: "512 ГБ",
        ram: "16 ГБ",
        charging: 80
    },

    {
        name: "vivo X200 Ultra",
        brand: "vivo",
        year: 2025,
        price: 1099,
        rating: 4.9,
        camera: 200,
        display: '6.82" AMOLED 120 Гц',
        processor: "Snapdragon 8 Elite",
        battery: 6000,
        zoom: 200,
        storage: "512 ГБ",
        ram: "16 ГБ",
        charging: 90
    },

    {
        name: "vivo X200 Pro",
        brand: "vivo",
        year: 2024,
        price: 999,
        rating: 4.8,
        camera: 200,
        display: '6.78" AMOLED 120 Гц',
        processor: "Dimensity 9400",
        battery: 6000,
        zoom: 100,
        storage: "512 ГБ",
        ram: "16 ГБ",
        charging: 90
    },

    {
        name: "Sony Xperia 1 VII",
        brand: "Sony",
        year: 2025,
        price: 1399,
        rating: 4.6,
        camera: 48,
        display: '6.5" OLED 120 Гц',
        processor: "Snapdragon 8 Elite",
        battery: 5000,
        zoom: 15,
        storage: "256 ГБ",
        ram: "12 ГБ",
        charging: 30
    },

    {
        name: "ASUS ROG Phone 9 Pro",
        brand: "ASUS",
        year: 2024,
        price: 1199,
        rating: 4.7,
        camera: 50,
        display: '6.78" AMOLED 185 Гц',
        processor: "Snapdragon 8 Elite",
        battery: 5800,
        zoom: 30,
        storage: "512 ГБ",
        ram: "16 ГБ",
        charging: 65
    },

    {
        name: "Motorola Razr 60 Ultra",
        brand: "Motorola",
        year: 2025,
        price: 999,
        rating: 4.7,
        camera: 50,
        display: '7.0" pOLED 165 Гц',
        processor: "Snapdragon 8 Elite",
        battery: 4700,
        zoom: 30,
        storage: "512 ГБ",
        ram: "16 ГБ",
        charging: 68
    }

];


/* =========================================================
   2. СОСТОЯНИЕ
========================================================= */

let currentPhones = [...phoneData];

let comparePhones = [];

let favorites = [];

try {
    favorites = JSON.parse(
        localStorage.getItem("phonecheck_favorites") || "[]"
    );
} catch {
    favorites = [];
}


/* =========================================================
   3. ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
========================================================= */

function $(selector) {
    return document.querySelector(selector);
}


function escapeHTML(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function money(value) {
    return "$" + Number(value).toLocaleString("en-US");
}


function getCurrentUser() {
    try {
        return JSON.parse(
            localStorage.getItem("phonecheck_current_user")
        );
    } catch {
        return null;
    }
}


function getUsers() {
    try {
        return JSON.parse(
            localStorage.getItem("phonecheck_users") || "[]"
        );
    } catch {
        return [];
    }
}


function saveUsers(users) {
    localStorage.setItem(
        "phonecheck_users",
        JSON.stringify(users)
    );
}


/* =========================================================
   4. ИКОНКИ БРЕНДОВ
========================================================= */

function brandIcon(brand) {

    const icons = {
        Samsung: "S",
        Apple: "",
        Xiaomi: "X",
        Google: "G",
        OnePlus: "1+",
        Realme: "R",
        Honor: "H",
        OPPO: "O",
        vivo: "V",
        Sony: "S",
        ASUS: "A",
        Motorola: "M"
    };

    return icons[brand] || "📱";
}


/* =========================================================
   5. БРЕНД-ФИЛЬТР
========================================================= */

function setupBrandFilter() {

    const select = $("#brandFilter");

    if (!select) return;

    const brands = [...new Set(
        phoneData.map(phone => phone.brand)
    )].sort();

    select.innerHTML = `
        <option value="all">Все бренды</option>

        ${brands.map(brand => `
            <option value="${escapeHTML(brand)}">
                ${escapeHTML(brand)}
            </option>
        `).join("")}
    `;
}


/* =========================================================
   6. РЕНДЕР КАТАЛОГА
========================================================= */

function renderPhones(list = currentPhones) {

    const grid = $("#phoneGrid");

    if (!grid) return;

    const noResults = $("#noResults");

    grid.innerHTML = "";

    if (!list.length) {

        if (noResults) {
            noResults.classList.remove("hidden");
            noResults.style.display = "block";
        }

        updateCounters(0);

        return;
    }

    if (noResults) {
        noResults.classList.add("hidden");
        noResults.style.display = "none";
    }

    list.forEach(phone => {

        const isFavorite =
            favorites.includes(phone.name);

        const card =
            document.createElement("article");

        card.className = "phone-card";

        card.innerHTML = `

            <div class="phone-card-visual">

                <div class="phone-brand-icon">
                    ${brandIcon(phone.brand)}
                </div>

                <div class="phone-visual-brand">
                    ${escapeHTML(phone.brand)}
                </div>

                <div class="phone-visual-model">
                    ${escapeHTML(phone.name)}
                </div>

                <div class="phone-card-year">
                    ${phone.year}
                </div>

            </div>


            <div class="phone-card-body">

                <div class="phone-card-header">

                    <div>

                        <div class="phone-card-brand">
                            ${escapeHTML(phone.brand)}
                        </div>

                        <h3>
                            ${escapeHTML(phone.name)}
                        </h3>

                    </div>

                    <button
                        type="button"
                        class="favorite-button ${isFavorite ? "active" : ""}"
                        data-favorite="${escapeHTML(phone.name)}"
                        title="Избранное"
                    >
                        ${isFavorite ? "♥" : "♡"}
                    </button>

                </div>


                <div class="phone-rating-line">

                    <span>
                        ⭐ ${phone.rating}
                    </span>

                    <span>
                        ${phone.year}
                    </span>

                </div>


                <div class="phone-spec-grid">

                    <div class="phone-spec">
                        <span>📷 Камера</span>
                        <b>${phone.camera} МП</b>
                    </div>

                    <div class="phone-spec">
                        <span>🔭 Зум</span>
                        <b>${phone.zoom}x</b>
                    </div>

                    <div class="phone-spec">
                        <span>🔋 Батарея</span>
                        <b>${phone.battery} мАч</b>
                    </div>

                    <div class="phone-spec">
                        <span>🧠 RAM</span>
                        <b>${escapeHTML(phone.ram)}</b>
                    </div>

                </div>


                <div class="phone-card-footer">

                    <div class="phone-price">
                        ${money(phone.price)}
                    </div>

                    <button
                        type="button"
                        class="details-button"
                        data-details="${escapeHTML(phone.name)}"
                    >
                        Подробнее →
                    </button>

                </div>

            </div>

        `;

        grid.appendChild(card);
    });

    updateCounters(list.length);
}


/* =========================================================
   7. СОБЫТИЯ КАРТОЧЕК
   ВАЖНО: один обработчик на весь phoneGrid.
========================================================= */

function setupPhoneGridEvents() {

    const grid = $("#phoneGrid");

    if (!grid) return;

    if (grid.dataset.eventsReady === "true") {
        return;
    }

    grid.dataset.eventsReady = "true";

    grid.addEventListener("click", function(event) {

        const detailsButton =
            event.target.closest(".details-button");

        if (detailsButton) {

            event.preventDefault();
            event.stopPropagation();

            const name =
                detailsButton.getAttribute("data-details");

            if (name) {
                openDetails(name);
            }

            return;
        }


        const favoriteButton =
            event.target.closest(".favorite-button");

        if (favoriteButton) {

            event.preventDefault();
            event.stopPropagation();

            const name =
                favoriteButton.getAttribute("data-favorite");

            if (name) {
                toggleFavorite(name);
            }

        }

    });
}


/* =========================================================
   8. СЧЁТЧИКИ
========================================================= */

function updateCounters(count) {

    const phoneCount = $("#phoneCount");

    const visibleCount =
        $("#visiblePhoneCount");

    if (phoneCount) {
        phoneCount.textContent =
            phoneData.length;
    }

    if (visibleCount) {
        visibleCount.textContent =
            count;
    }
}


/* =========================================================
   9. ИЗБРАННОЕ
========================================================= */

function toggleFavorite(name) {

    if (favorites.includes(name)) {

        favorites =
            favorites.filter(item => item !== name);

        notify("Удалено из избранного");

    } else {

        favorites.push(name);

        notify("Добавлено в избранное");
    }

    localStorage.setItem(
        "phonecheck_favorites",
        JSON.stringify(favorites)
    );

    renderPhones(currentPhones);
}


/* =========================================================
   10. ФИЛЬТРЫ
========================================================= */

function applyFilters() {

    const brand =
        $("#brandFilter")
            ? $("#brandFilter").value
            : "all";

    const sort =
        $("#sortFilter")
            ? $("#sortFilter").value
            : "rating";

    const search =
        $("#phoneSearch")
            ? $("#phoneSearch").value
                .trim()
                .toLowerCase()
            : "";


    let result = phoneData.filter(phone => {

        const matchesBrand =
            brand === "all" ||
            phone.brand === brand;

        const matchesSearch =
            !search ||
            phone.name.toLowerCase().includes(search) ||
            phone.brand.toLowerCase().includes(search);

        return matchesBrand && matchesSearch;
    });


    switch (sort) {

        case "rating":
            result.sort(
                (a, b) => b.rating - a.rating
            );
            break;

        case "camera":
            result.sort(
                (a, b) => b.camera - a.camera
            );
            break;

        case "performance":
            result.sort(
                (a, b) =>
                    performanceScore(b) -
                    performanceScore(a)
            );
            break;

        case "battery":
            result.sort(
                (a, b) => b.battery - a.battery
            );
            break;

        case "zoom":
            result.sort(
                (a, b) => b.zoom - a.zoom
            );
            break;

        case "name":
            result.sort(
                (a, b) =>
                    a.name.localeCompare(
                        b.name,
                        "ru"
                    )
            );
            break;
    }


    currentPhones = result;

    renderPhones(result);
}


/* =========================================================
   11. ПРОИЗВОДИТЕЛЬНОСТЬ
========================================================= */

function performanceScore(phone) {

    let score = 0;

    if (phone.processor.includes("8 Elite")) {
        score += 100;
    } else if (phone.processor.includes("8 Gen 3")) {
        score += 90;
    } else if (phone.processor.includes("A19")) {
        score += 100;
    } else if (phone.processor.includes("A18")) {
        score += 95;
    } else if (phone.processor.includes("9400")) {
        score += 90;
    } else if (phone.processor.includes("Tensor G5")) {
        score += 85;
    }

    score += parseInt(phone.ram) * 2;

    return score;
}


/* =========================================================
   12. ПОИСК
========================================================= */

function searchPhones() {

    const input = $("#phoneSearch");

    if (!input) return;

    const query =
        input.value.trim().toLowerCase();

    const result = $("#searchResult");

    if (!query) {

        if (result) {
            result.innerHTML = "";
        }

        applyFilters();
        return;
    }


    const matches = phoneData.filter(phone =>
        phone.name.toLowerCase().includes(query) ||
        phone.brand.toLowerCase().includes(query)
    );


    if (result) {

        if (matches.length) {

            result.innerHTML = `
                Найдено:
                <strong>${matches.length}</strong>
                ${matches.length === 1
                    ? "устройство"
                    : "устройства"}
            `;

        } else {

            result.innerHTML =
                "Ничего не найдено";
        }
    }


    applyFilters();
}


/* =========================================================
   13. TOP 10
========================================================= */

function renderTop() {

    const container = $("#topList");

    if (!container) return;

    const top =
        [...phoneData]
            .sort((a, b) => {

                const scoreA =
                    a.rating * 100 +
                    a.camera * 0.03 +
                    a.zoom * 0.02;

                const scoreB =
                    b.rating * 100 +
                    b.camera * 0.03 +
                    b.zoom * 0.02;

                return scoreB - scoreA;
            })
            .slice(0, 10);


    container.innerHTML =
        top.map((phone, index) => `

            <div class="top-item">

                <div class="top-rank">
                    ${index + 1}
                </div>

                <div class="top-icon">
                    ${brandIcon(phone.brand)}
                </div>

                <div class="top-name">

                    <strong>
                        ${escapeHTML(phone.name)}
                    </strong>

                    <span>
                        ${escapeHTML(phone.brand)}
                        · ⭐ ${phone.rating}
                    </span>

                </div>

                <div class="top-price">
                    ${money(phone.price)}
                </div>

            </div>

        `).join("");
}


/* =========================================================
   14. ИСТОРИЯ
========================================================= */

function addToHistory(name) {

    const user = getCurrentUser();

    if (!user || !user.username) return;

    const key =
        "phonecheck_history_" +
        user.username;

    let history = [];

    try {

        history =
            JSON.parse(
                localStorage.getItem(key) || "[]"
            );

    } catch {

        history = [];
    }


    history =
        history.filter(item => item !== name);

    history.unshift(name);

    history =
        history.slice(0, 20);


    localStorage.setItem(
        key,
        JSON.stringify(history)
    );
}


function getHistory() {

    const user = getCurrentUser();

    if (!user || !user.username) {
        return [];
    }

    try {

        return JSON.parse(
            localStorage.getItem(
                "phonecheck_history_" +
                user.username
            ) || "[]"
        );

    } catch {

        return [];
    }
}


/* =========================================================
   15. DETAILS MODAL
========================================================= */

function ensureDetailsModal() {

    let modal = $("#phoneDetailsModal");

    if (modal) return modal;


    modal =
        document.createElement("div");

    modal.id =
        "phoneDetailsModal";

    modal.className =
        "phone-details-modal hidden";


    modal.innerHTML = `

        <div
            class="details-overlay"
            data-details-close
        ></div>

        <div class="details-window">

            <button
                type="button"
                class="details-close"
                id="detailsClose"
                aria-label="Закрыть"
            >
                ×
            </button>

            <div id="detailsContent"></div>

        </div>

    `;


    document.body.appendChild(modal);


    const overlay =
        modal.querySelector(
            "[data-details-close]"
        );

    const closeButton =
        modal.querySelector("#detailsClose");


    if (overlay) {
        overlay.addEventListener(
            "click",
            closeDetails
        );
    }


    if (closeButton) {
        closeButton.addEventListener(
            "click",
            closeDetails
        );
    }


    return modal;
}


function openDetails(name) {

    console.log(
        "PhoneCheck: открываем Подробнее:",
        name
    );


    const phone =
        phoneData.find(
            item => item.name === name
        );


    if (!phone) {

        console.error(
            "PhoneCheck: телефон не найден:",
            name
        );

        return;
    }


    const modal =
        ensureDetailsModal();

    const content =
        modal.querySelector("#detailsContent");


    if (!content) return;


    addToHistory(name);


    content.innerHTML = `

        <div class="details-hero">

            <div class="details-big-icon">
                ${brandIcon(phone.brand)}
            </div>

            <div>

                <div class="details-brand">
                    ${escapeHTML(phone.brand)}
                </div>

                <h2>
                    ${escapeHTML(phone.name)}
                </h2>

                <div class="details-rating">
                    ⭐ ${phone.rating} / 5
                </div>

            </div>

        </div>


        <div class="details-price">
            ${money(phone.price)}
        </div>


        <p class="details-description">
            ${escapeHTML(phone.name)}
            — смартфон ${phone.year} года.
            Здесь собраны основные характеристики
            устройства: камера, экран, процессор,
            батарея и память.
        </p>


        <div class="details-specs">

            <div class="detail-spec">
                <span>📷 Камера</span>
                <b>${phone.camera} МП</b>
            </div>

            <div class="detail-spec">
                <span>🔭 Зум</span>
                <b>${phone.zoom}x</b>
            </div>

            <div class="detail-spec">
                <span>🖥️ Экран</span>
                <b>${escapeHTML(phone.display)}</b>
            </div>

            <div class="detail-spec">
                <span>🧠 Процессор</span>
                <b>${escapeHTML(phone.processor)}</b>
            </div>

            <div class="detail-spec">
                <span>🔋 Батарея</span>
                <b>${phone.battery} мАч</b>
            </div>

            <div class="detail-spec">
                <span>💾 Память</span>
                <b>${escapeHTML(phone.storage)}</b>
            </div>

            <div class="detail-spec">
                <span>🧠 RAM</span>
                <b>${escapeHTML(phone.ram)}</b>
            </div>

            <div class="detail-spec">
                <span>⚡ Зарядка</span>
                <b>${phone.charging} Вт</b>
            </div>

            <div class="detail-spec">
                <span>📅 Год</span>
                <b>${phone.year}</b>
            </div>

        </div>


        <button
            type="button"
            class="details-compare-button"
            id="detailsCompareButton"
        >
            Добавить к сравнению
        </button>

    `;


    modal.classList.remove("hidden");

    modal.style.display = "flex";

    modal.style.visibility = "visible";

    modal.style.opacity = "1";

    document.body.style.overflow = "hidden";


    const compareButton =
        content.querySelector(
            "#detailsCompareButton"
        );


    if (compareButton) {

        compareButton.addEventListener(
            "click",
            function() {

                addToCompare(phone.name);

            }
        );

    }
}


function closeDetails() {

    const modal =
        $("#phoneDetailsModal");

    if (!modal) return;


    modal.classList.add("hidden");

    modal.style.display = "none";

    modal.style.visibility = "hidden";

    modal.style.opacity = "0";


    if (
        !$("#compareModal") ||
        $("#compareModal").classList.contains("hidden")
    ) {
        document.body.style.overflow = "";
    }
}


/* =========================================================
   16. COMPARE
========================================================= */

function addToCompare(name) {

    const phone =
        phoneData.find(
            item => item.name === name
        );

    if (!phone) return;


    if (
        comparePhones.some(
            item => item.name === name
        )
    ) {

        notify(
            "Этот смартфон уже добавлен"
        );

        return;
    }


    if (comparePhones.length >= 3) {

        notify(
            "Можно сравнить максимум 3 смартфона"
        );

        return;
    }


    comparePhones.push(phone);


    notify(
        `${phone.name} добавлен к сравнению`
    );


    closeDetails();

    updateCompareButton();
}


function removeFromCompare(name) {

    comparePhones =
        comparePhones.filter(
            phone => phone.name !== name
        );

    updateCompareButton();

    renderCompare();
}


function updateCompareButton() {

    const button =
        $("#compareButton");

    if (!button) return;


    button.innerHTML = `
        Сравнить телефоны
        ${comparePhones.length
            ? `(${comparePhones.length})`
            : ""}
        <span>→</span>
    `;
}


/* =========================================================
   17. COMPARE MODAL
========================================================= */

function ensureCompareModal() {

    let modal =
        $("#compareModal");

    if (modal) return modal;


    modal =
        document.createElement("div");

    modal.id =
        "compareModal";

    modal.className =
        "compare-modal hidden";


    modal.innerHTML = `

        <div
            class="compare-overlay"
        ></div>

        <div class="compare-window">

            <button
                type="button"
                class="details-close"
                id="compareClose"
            >
                ×
            </button>

            <h2 class="compare-title">
                Сравнение смартфонов
            </h2>

            <div
                class="compare-columns"
                id="compareColumns"
            ></div>

        </div>

    `;


    document.body.appendChild(modal);


    const overlay =
        modal.querySelector(
            ".compare-overlay"
        );

    const close =
        modal.querySelector(
            "#compareClose"
        );


    if (overlay) {
        overlay.addEventListener(
            "click",
            closeCompare
        );
    }


    if (close) {
        close.addEventListener(
            "click",
            closeCompare
        );
    }


    return modal;
}


function openCompare() {

    const modal =
        ensureCompareModal();

    renderCompare();


    modal.classList.remove("hidden");

    modal.style.display = "flex";

    modal.style.visibility = "visible";

    modal.style.opacity = "1";

    document.body.style.overflow = "hidden";
}


function closeCompare() {

    const modal =
        $("#compareModal");

    if (!modal) return;


    modal.classList.add("hidden");

    modal.style.display = "none";

    modal.style.visibility = "hidden";

    modal.style.opacity = "0";

    document.body.style.overflow = "";
}


function renderCompare() {

    const columns =
        $("#compareColumns");

    if (!columns) return;


    if (!comparePhones.length) {

        columns.innerHTML = `

            <div class="compare-empty">

                <h3>
                    Пока нечего сравнивать
                </h3>

                <p>
                    Открой смартфон в каталоге
                    и добавь его к сравнению.
                </p>

            </div>

        `;

        return;
    }


    columns.innerHTML =
        comparePhones.map(phone => `

            <div class="compare-column">

                <div class="compare-phone-header">

                    <div class="compare-icon">
                        ${brandIcon(phone.brand)}
                    </div>

                    <strong>
                        ${escapeHTML(phone.name)}
                    </strong>

                    <button
                        type="button"
                        class="compare-remove"
                        data-remove-compare="${escapeHTML(phone.name)}"
                    >
                        ×
                    </button>

                </div>


                <div class="compare-row">
                    <span>Рейтинг</span>
                    <b>⭐ ${phone.rating}</b>
                </div>

                <div class="compare-row">
                    <span>Цена</span>
                    <b>${money(phone.price)}</b>
                </div>

                <div class="compare-row">
                    <span>Камера</span>
                    <b>${phone.camera} МП</b>
                </div>

                <div class="compare-row">
                    <span>Зум</span>
                    <b>${phone.zoom}x</b>
                </div>

                <div class="compare-row">
                    <span>Экран</span>
                    <b>${escapeHTML(phone.display)}</b>
                </div>

                <div class="compare-row">
                    <span>Процессор</span>
                    <b>${escapeHTML(phone.processor)}</b>
                </div>

                <div class="compare-row">
                    <span>Батарея</span>
                    <b>${phone.battery} мАч</b>
                </div>

                <div class="compare-row">
                    <span>RAM</span>
                    <b>${escapeHTML(phone.ram)}</b>
                </div>

                <div class="compare-row">
                    <span>Память</span>
                    <b>${escapeHTML(phone.storage)}</b>
                </div>

            </div>

        `).join("");


    columns
        .querySelectorAll(
            "[data-remove-compare]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                function() {

                    removeFromCompare(
                        this.dataset.removeCompare
                    );

                }
            );

        });
}


/* =========================================================
   18. ПРОФИЛЬ
========================================================= */

function ensureProfileModal() {

    let modal =
        $("#profileModal");

    if (modal) return modal;


    modal =
        document.createElement("div");

    modal.id =
        "profileModal";

    modal.className =
        "profile-modal hidden";


    modal.innerHTML = `

        <div
            class="profile-overlay"
        ></div>

        <div class="profile-window">

            <button
                type="button"
                class="profile-close"
                id="profileClose"
            >
                ×
            </button>

            <div id="profileContent"></div>

        </div>

    `;


    document.body.appendChild(modal);


    modal.querySelector(
        ".profile-overlay"
    ).addEventListener(
        "click",
        closeProfile
    );


    modal.querySelector(
        "#profileClose"
    ).addEventListener(
        "click",
        closeProfile
    );


    return modal;
}


function openProfile() {

    const user =
        getCurrentUser();

    if (!user) {

        window.location.href =
            "login.html";

        return;
    }


    const modal =
        ensureProfileModal();

    const content =
        $("#profileContent");


    if (!content) return;


    const history =
        getHistory();


    content.innerHTML = `

        <div class="profile-top">

            <div class="profile-avatar-large">
                ${escapeHTML(
                    user.username
                        .charAt(0)
                        .toUpperCase()
                )}
            </div>

            <div>

                <div class="profile-name">
                    ${escapeHTML(user.username)}
                </div>

                <div class="profile-email">
                    Пользователь PhoneCheck
                </div>

            </div>

        </div>


        <div class="profile-stats">

            <div class="profile-stat">
                <strong>
                    ${favorites.length}
                </strong>
                <span>Избранное</span>
            </div>

            <div class="profile-stat">
                <strong>
                    ${history.length}
                </strong>
                <span>История</span>
            </div>

            <div class="profile-stat">
                <strong>
                    ${comparePhones.length}
                </strong>
                <span>Сравнение</span>
            </div>

        </div>


        <div class="profile-actions">

            <button
                type="button"
                class="profile-action logout"
                id="profileLogout"
            >
                Выйти из аккаунта
            </button>

        </div>

    `;


    modal.classList.remove("hidden");

    modal.style.display = "flex";

    modal.style.visibility = "visible";

    modal.style.opacity = "1";

    document.body.style.overflow = "hidden";


    const logoutButton =
        $("#profileLogout");

    if (logoutButton) {
        logoutButton.addEventListener(
            "click",
            logout
        );
    }
}


function closeProfile() {

    const modal =
        $("#profileModal");

    if (!modal) return;


    modal.classList.add("hidden");

    modal.style.display = "none";

    modal.style.visibility = "hidden";

    modal.style.opacity = "0";

    document.body.style.overflow = "";
}


function logout() {

    localStorage.removeItem(
        "phonecheck_current_user"
    );

    notify(
        "Вы вышли из аккаунта"
    );

    setTimeout(() => {
        window.location.reload();
    }, 400);
}


/* =========================================================
   19. AUTH UI
========================================================= */

function updateAuthUI() {

    const loginButton =
        $("#loginButton");

    const registerButton =
        $("#registerButton");

    const user =
        getCurrentUser();


    if (!loginButton || !registerButton) {
        return;
    }


    if (user && user.username) {

        loginButton.textContent =
            user.username;

        loginButton.classList.add(
            "profile-button"
        );


        registerButton.textContent =
            "Выйти";


        loginButton.onclick =
            openProfile;

        registerButton.onclick =
            logout;

    } else {

        loginButton.textContent =
            "Войти";

        registerButton.textContent =
            "Регистрация";


        loginButton.onclick = () => {

            window.location.href =
                "login.html";

        };


        registerButton.onclick = () => {

            window.location.href =
                "register.html";

        };
    }
}


/* =========================================================
   20. ПОИСК INPUT В ФОРМЕ
========================================================= */

function findFormInput(
    form,
    ids,
    names
) {

    for (const id of ids) {

        const element =
            form.querySelector("#" + id);

        if (element) return element;
    }


    for (const name of names) {

        const element =
            form.querySelector(
                `[name="${name}"]`
            );

        if (element) return element;
    }


    return null;
}


/* =========================================================
   21. РЕГИСТРАЦИЯ
========================================================= */

function setupRegisterForm() {

    const form =
        $("#registerForm");

    if (!form) return;


    if (
        form.dataset.phonecheckAuthBound ===
        "true"
    ) {
        return;
    }


    form.dataset.phonecheckAuthBound =
        "true";


    const usernameInput =
        findFormInput(
            form,
            [
                "username",
                "registerUsername",
                "regUsername"
            ],
            [
                "username",
                "login"
            ]
        );


    const passwordInput =
        findFormInput(
            form,
            [
                "password",
                "registerPassword",
                "regPassword"
            ],
            [
                "password"
            ]
        );


    const confirmInput =
        findFormInput(
            form,
            [
                "confirmPassword",
                "passwordConfirm",
                "registerConfirmPassword",
                "confirm"
            ],
            [
                "confirmPassword",
                "password_confirmation",
                "passwordConfirm"
            ]
        );


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const username =
                usernameInput
                    ? usernameInput.value.trim()
                    : "";


            const password =
                passwordInput
                    ? passwordInput.value
                    : "";


            const confirm =
                confirmInput
                    ? confirmInput.value
                    : "";


            if (username.length < 3) {

                alert(
                    "Логин должен содержать минимум 3 символа."
                );

                return;
            }


            if (password.length < 6) {

                alert(
                    "Пароль должен содержать минимум 6 символов."
                );

                return;
            }


            if (
                confirmInput &&
                password !== confirm
            ) {

                alert(
                    "Пароли не совпадают."
                );

                return;
            }


            const users =
                getUsers();


            const exists =
                users.some(
                    user =>
                        user.username.toLowerCase() ===
                        username.toLowerCase()
                );


            if (exists) {

                alert(
                    "Такой пользователь уже существует."
                );

                return;
            }


            users.push({
                username,
                password
            });


            saveUsers(users);


            localStorage.setItem(
                "phonecheck_current_user",
                JSON.stringify({
                    username
                })
            );


            alert(
                "Регистрация успешно завершена!"
            );


            window.location.href =
                "index.html";

        }
    );
}


/* =========================================================
   22. ВХОД
========================================================= */

function setupLoginForm() {

    const form =
        $("#loginForm");

    if (!form) return;


    if (
        form.dataset.phonecheckAuthBound ===
        "true"
    ) {
        return;
    }


    form.dataset.phonecheckAuthBound =
        "true";


    const usernameInput =
        findFormInput(
            form,
            [
                "username",
                "loginUsername",
                "login"
            ],
            [
                "username",
                "login"
            ]
        );


    const passwordInput =
        findFormInput(
            form,
            [
                "password",
                "loginPassword"
            ],
            [
                "password"
            ]
        );


    form.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const username =
                usernameInput
                    ? usernameInput.value.trim()
                    : "";


            const password =
                passwordInput
                    ? passwordInput.value
                    : "";


            if (!username || !password) {

                alert(
                    "Заполни логин и пароль."
                );

                return;
            }


            const users =
                getUsers();


            const user =
                users.find(
                    item =>
                        item.username.toLowerCase() ===
                        username.toLowerCase() &&
                        item.password === password
                );


            if (!user) {

                alert(
                    "Неверный логин или пароль."
                );

                return;
            }


            localStorage.setItem(
                "phonecheck_current_user",
                JSON.stringify({
                    username: user.username
                })
            );


            alert(
                "Вы успешно вошли!"
            );


            window.location.href =
                "index.html";

        }
    );
}


/* =========================================================
   23. МОБИЛЬНОЕ МЕНЮ
========================================================= */

function setupMobileMenu() {

    const button =
        $("#mobileMenuButton");

    const menu =
        $("#mobileMenu");


    if (!button || !menu) return;


    button.addEventListener(
        "click",
        () => {

            menu.classList.toggle(
                "active"
            );

        }
    );


    menu.querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    menu.classList.remove(
                        "active"
                    );

                }
            );

        });
}


/* =========================================================
   24. START
========================================================= */

function setupStartButton() {

    const button =
        $("#startButton");

    if (!button) return;


    button.addEventListener(
        "click",
        () => {

            const phones =
                $("#phones");

            if (phones) {

                phones.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }
    );
}


/* =========================================================
   25. УВЕДОМЛЕНИЯ
========================================================= */

function ensureNotificationContainer() {

    let container =
        $("#notificationContainer");


    if (container) {
        return container;
    }


    container =
        document.createElement("div");

    container.id =
        "notificationContainer";


    Object.assign(
        container.style,
        {
            position: "fixed",
            right: "20px",
            bottom: "20px",
            zIndex: "99999",
            display: "flex",
            flexDirection: "column",
            gap: "10px"
        }
    );


    document.body.appendChild(
        container
    );


    return container;
}


function notify(message) {

    const container =
        ensureNotificationContainer();


    const notification =
        document.createElement("div");


    notification.className =
        "phonecheck-notification";

    notification.textContent =
        message;


    Object.assign(
        notification.style,
        {
            padding: "14px 18px",
            borderRadius: "14px",
            background: "rgba(25,10,10,.95)",
            border: "1px solid rgba(255,90,40,.5)",
            color: "#fff",
            boxShadow: "0 10px 35px rgba(0,0,0,.4)",
            transition: "all .25s ease"
        }
    );


    container.appendChild(
        notification
    );


    setTimeout(() => {

        notification.style.opacity =
            "0";

        notification.style.transform =
            "translateY(10px)";


        setTimeout(() => {

            notification.remove();

        }, 250);

    }, 2200);
}


/* =========================================================
   26. НАВИГАЦИЯ
========================================================= */

function setupNavigation() {

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const id =
                    link.getAttribute("href");


                if (
                    !id ||
                    id === "#"
                ) {
                    return;
                }


                const element =
                    document.querySelector(id);


                if (!element) return;


                event.preventDefault();


                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });
}


/* =========================================================
   27. ЗАПУСК ПРИ ЗАГРУЗКЕ
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        console.log(
            "PhoneCheck запускается..."
        );


        /* Каталог */

        setupBrandFilter();

        setupPhoneGridEvents();

        applyFilters();

        renderTop();


        /* Авторизация */

        updateAuthUI();

        setupRegisterForm();

        setupLoginForm();


        /* Поиск */

        const searchButton =
            $("#searchButton");


        if (searchButton) {

            searchButton.addEventListener(
                "click",
                searchPhones
            );

        }


        const searchInput =
            $("#phoneSearch");


        if (searchInput) {

            searchInput.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key ===
                        "Enter"
                    ) {
                        searchPhones();
                    }

                }
            );


            searchInput.addEventListener(
                "input",
                () => {

                    applyFilters();

                }
            );

        }


        /* Бренд */

        const brandFilter =
            $("#brandFilter");


        if (brandFilter) {

            brandFilter.addEventListener(
                "change",
                applyFilters
            );

        }


        /* Сортировка */

        const sortFilter =
            $("#sortFilter");


        if (sortFilter) {

            sortFilter.addEventListener(
                "change",
                applyFilters
            );

        }


        /* Сброс */

        const resetButton =
            $("#resetFilters");


        if (resetButton) {

            resetButton.addEventListener(
                "click",
                () => {

                    if (brandFilter) {
                        brandFilter.value =
                            "all";
                    }


                    if (sortFilter) {
                        sortFilter.value =
                            "rating";
                    }


                    if (searchInput) {
                        searchInput.value =
                            "";
                    }


                    const searchResult =
                        $("#searchResult");


                    if (searchResult) {
                        searchResult.innerHTML =
                            "";
                    }


                    applyFilters();

                }
            );

        }


        /* Start */

        setupStartButton();


        /* Mobile */

        setupMobileMenu();


        /* Navigation */

        setupNavigation();


        /* Compare */

        const compareButton =
            $("#compareButton");


        if (compareButton) {

            compareButton.addEventListener(
                "click",
                openCompare
            );

        }


        updateCompareButton();


        console.log(
            `PhoneCheck: загружено ${phoneData.length} смартфонов`
        );

    }
);