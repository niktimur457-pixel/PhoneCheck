"use strict";

/* =========================================================
   PHONECHECK — APP.JS
   Каталог + поиск + фильтры + фото + подробнее
   + избранное + сравнение
   ========================================================= */


/* =========================================================
   1. ДАННЫЕ ТЕЛЕФОНОВ
   ========================================================= */

const phoneData = [

    /* ================= SAMSUNG ================= */

    {
        name: "Samsung Galaxy S25 Ultra",
        brand: "Samsung",
        year: 2025,
        price: 1299,
        rating: 9.7,
        camera: 9.8,
        display: 9.9,
        performance: 9.9,
        battery: 9.3,
        zoom: 9.9,
        storage: "256 / 512 ГБ / 1 ТБ",
        ram: "12 ГБ",
        screen: "6.9 AMOLED 120 Гц",
        processor: "Snapdragon 8 Elite",
        batteryMah: 5000,
        mainCamera: "200 МП",
        frontCamera: "12 МП",
        charging: "45 Вт"
    },

    {
        name: "Samsung Galaxy S25+",
        brand: "Samsung",
        year: 2025,
        price: 999,
        rating: 9.4,
        camera: 9.4,
        display: 9.8,
        performance: 9.8,
        battery: 9.2,
        zoom: 8.9,
        storage: "256 / 512 ГБ",
        ram: "12 ГБ",
        screen: "6.7 AMOLED 120 Гц",
        processor: "Snapdragon 8 Elite",
        batteryMah: 4900,
        mainCamera: "50 МП",
        frontCamera: "12 МП",
        charging: "45 Вт"
    },

    {
        name: "Samsung Galaxy S25",
        brand: "Samsung",
        year: 2025,
        price: 799,
        rating: 9.2,
        camera: 9.1,
        display: 9.5,
        performance: 9.7,
        battery: 8.9,
        zoom: 8.3,
        storage: "128 / 256 ГБ",
        ram: "12 ГБ",
        screen: "6.2 AMOLED 120 Гц",
        processor: "Snapdragon 8 Elite",
        batteryMah: 4000,
        mainCamera: "50 МП",
        frontCamera: "12 МП",
        charging: "25 Вт"
    },

    {
        name: "Samsung Galaxy Z Fold 7",
        brand: "Samsung",
        year: 2025,
        price: 1999,
        rating: 9.3,
        camera: 9.1,
        display: 9.8,
        performance: 9.8,
        battery: 8.7,
        zoom: 8.5,
        storage: "256 / 512 ГБ / 1 ТБ",
        ram: "12 ГБ",
        screen: "8.0 AMOLED 120 Гц",
        processor: "Snapdragon 8 Elite",
        batteryMah: 4400,
        mainCamera: "200 МП",
        frontCamera: "10 МП",
        charging: "25 Вт"
    },

    {
        name: "Samsung Galaxy Z Flip 7",
        brand: "Samsung",
        year: 2025,
        price: 1099,
        rating: 9.0,
        camera: 8.8,
        display: 9.5,
        performance: 9.5,
        battery: 8.5,
        zoom: 7.8,
        storage: "256 / 512 ГБ",
        ram: "12 ГБ",
        screen: "6.9 AMOLED 120 Гц",
        processor: "Exynos 2500",
        batteryMah: 4300,
        mainCamera: "50 МП",
        frontCamera: "10 МП",
        charging: "25 Вт"
    },


    /* ================= APPLE ================= */

    {
        name: "iPhone 17 Pro Max",
        brand: "Apple",
        year: 2025,
        price: 1499,
        rating: 9.8,
        camera: 9.8,
        display: 9.8,
        performance: 10,
        battery: 9.5,
        zoom: 9.2,
        storage: "256 / 512 ГБ / 1 ТБ / 2 ТБ",
        ram: "12 ГБ",
        screen: "6.9 OLED 120 Гц",
        processor: "Apple A19 Pro",
        batteryMah: 5000,
        mainCamera: "48 МП",
        frontCamera: "24 МП",
        charging: "40 Вт"
    },

    {
        name: "iPhone 17 Pro",
        brand: "Apple",
        year: 2025,
        price: 1199,
        rating: 9.7,
        camera: 9.7,
        display: 9.7,
        performance: 10,
        battery: 9.2,
        zoom: 9.1,
        storage: "256 / 512 ГБ / 1 ТБ",
        ram: "12 ГБ",
        screen: "6.3 OLED 120 Гц",
        processor: "Apple A19 Pro",
        batteryMah: 4200,
        mainCamera: "48 МП",
        frontCamera: "24 МП",
        charging: "40 Вт"
    },

    {
        name: "iPhone 17",
        brand: "Apple",
        year: 2025,
        price: 799,
        rating: 9.3,
        camera: 9.1,
        display: 9.5,
        performance: 9.8,
        battery: 9.0,
        zoom: 7.9,
        storage: "128 / 256 / 512 ГБ",
        ram: "8 ГБ",
        screen: "6.3 OLED",
        processor: "Apple A19",
        batteryMah: 3900,
        mainCamera: "48 МП",
        frontCamera: "24 МП",
        charging: "30 Вт"
    },

    {
        name: "iPhone 16 Pro Max",
        brand: "Apple",
        year: 2024,
        price: 1199,
        rating: 9.6,
        camera: 9.7,
        display: 9.8,
        performance: 9.9,
        battery: 9.5,
        zoom: 9.0,
        storage: "256 / 512 ГБ / 1 ТБ",
        ram: "8 ГБ",
        screen: "6.9 OLED 120 Гц",
        processor: "Apple A18 Pro",
        batteryMah: 4685,
        mainCamera: "48 МП",
        frontCamera: "12 МП",
        charging: "30 Вт"
    },

    {
        name: "iPhone 16 Pro",
        brand: "Apple",
        year: 2024,
        price: 999,
        rating: 9.5,
        camera: 9.6,
        display: 9.7,
        performance: 9.9,
        battery: 9.1,
        zoom: 8.9,
        storage: "128 / 256 / 512 ГБ / 1 ТБ",
        ram: "8 ГБ",
        screen: "6.3 OLED 120 Гц",
        processor: "Apple A18 Pro",
        batteryMah: 3582,
        mainCamera: "48 МП",
        frontCamera: "12 МП",
        charging: "30 Вт"
    },


    /* ================= XIAOMI ================= */

    {
        name: "Xiaomi 15 Ultra",
        brand: "Xiaomi",
        year: 2025,
        price: 1199,
        rating: 9.5,
        camera: 9.9,
        display: 9.7,
        performance: 9.7,
        battery: 9.7,
        zoom: 9.8,
        storage: "256 / 512 ГБ / 1 ТБ",
        ram: "12 / 16 ГБ",
        screen: "6.73 AMOLED 120 Гц",
        processor: "Snapdragon 8 Elite",
        batteryMah: 5410,
        mainCamera: "50 МП Leica",
        frontCamera: "32 МП",
        charging: "90 Вт"
    },

    {
        name: "Xiaomi 15 Pro",
        brand: "Xiaomi",
        year: 2024,
        price: 899,
        rating: 9.3,
        camera: 9.5,
        display: 9.7,
        performance: 9.7,
        battery: 9.7,
        zoom: 9.1,
        storage: "256 / 512 ГБ / 1 ТБ",
        ram: "12 / 16 ГБ",
        screen: "6.73 AMOLED 120 Гц",
        processor: "Snapdragon 8 Elite",
        batteryMah: 6100,
        mainCamera: "50 МП",
        frontCamera: "32 МП",
        charging: "90 Вт"
    },

    {
        name: "Xiaomi 15",
        brand: "Xiaomi",
        year: 2024,
        price: 699,
        rating: 9.2,
        camera: 9.2,
        display: 9.6,
        performance: 9.6,
        battery: 9.4,
        zoom: 8.7,
        storage: "256 / 512 ГБ",
        ram: "12 ГБ",
        screen: "6.36 AMOLED 120 Гц",
        processor: "Snapdragon 8 Elite",
        batteryMah: 5240,
        mainCamera: "50 МП",
        frontCamera: "32 МП",
        charging: "90 Вт"
    },

    {
        name: "Xiaomi 14 Ultra",
        brand: "Xiaomi",
        year: 2024,
        price: 1099,
        rating: 9.5,
        camera: 9.9,
        display: 9.7,
        performance: 9.5,
        battery: 9.3,
        zoom: 9.8,
        storage: "512 ГБ / 1 ТБ",
        ram: "16 ГБ",
        screen: "6.73 AMOLED 120 Гц",
        processor: "Snapdragon 8 Gen 3",
        batteryMah: 5000,
        mainCamera: "50 МП Leica",
        frontCamera: "32 МП",
        charging: "90 Вт"
    },


    /* ================= GOOGLE ================= */

    {
        name: "Google Pixel 10 Pro XL",
        brand: "Google",
        year: 2025,
        price: 1199,
        rating: 9.4,
        camera: 9.8,
        display: 9.6,
        performance: 9.2,
        battery: 9.4,
        zoom: 9.4,
        storage: "256 / 512 ГБ / 1 ТБ",
        ram: "16 ГБ",
        screen: "6.8 OLED 120 Гц",
        processor: "Google Tensor G5",
        batteryMah: 5200,
        mainCamera: "50 МП",
        frontCamera: "42 МП",
        charging: "45 Вт"
    },

    {
        name: "Google Pixel 10 Pro",
        brand: "Google",
        year: 2025,
        price: 999,
        rating: 9.3,
        camera: 9.8,
        display: 9.5,
        performance: 9.2,
        battery: 9.1,
        zoom: 9.3,
        storage: "128 / 256 / 512 ГБ",
        ram: "16 ГБ",
        screen: "6.3 OLED 120 Гц",
        processor: "Google Tensor G5",
        batteryMah: 4870,
        mainCamera: "50 МП",
        frontCamera: "42 МП",
        charging: "45 Вт"
    },

    {
        name: "Google Pixel 10",
        brand: "Google",
        year: 2025,
        price: 799,
        rating: 9.1,
        camera: 9.4,
        display: 9.3,
        performance: 9.0,
        battery: 9.1,
        zoom: 8.5,
        storage: "128 / 256 ГБ",
        ram: "12 ГБ",
        screen: "6.3 OLED 120 Гц",
        processor: "Google Tensor G5",
        batteryMah: 4970,
        mainCamera: "48 МП",
        frontCamera: "13 МП",
        charging: "30 Вт"
    },


    /* ================= ONEPLUS ================= */

    {
        name: "OnePlus 13",
        brand: "OnePlus",
        year: 2025,
        price: 899,
        rating: 9.3,
        camera: 9.3,
        display: 9.8,
        performance: 9.8,
        battery: 9.8,
        zoom: 8.8,
        storage: "256 / 512 ГБ / 1 ТБ",
        ram: "12 / 16 ГБ",
        screen: "6.82 AMOLED 120 Гц",
        processor: "Snapdragon 8 Elite",
        batteryMah: 6000,
        mainCamera: "50 МП Hasselblad",
        frontCamera: "32 МП",
        charging: "100 Вт"
    },

    {
        name: "OnePlus 13R",
        brand: "OnePlus",
        year: 2025,
        price: 599,
        rating: 8.9,
        camera: 8.6,
        display: 9.5,
        performance: 9.3,
        battery: 9.7,
        zoom: 7.9,
        storage: "256 ГБ",
        ram: "12 ГБ",
        screen: "6.78 AMOLED 120 Гц",
        processor: "Snapdragon 8 Gen 3",
        batteryMah: 6000,
        mainCamera: "50 МП",
        frontCamera: "16 МП",
        charging: "80 Вт"
    },


    /* ================= REALME ================= */

    {
        name: "Realme GT 7 Pro",
        brand: "Realme",
        year: 2024,
        price: 749,
        rating: 9.0,
        camera: 8.9,
        display: 9.5,
        performance: 9.7,
        battery: 9.8,
        zoom: 8.1,
        storage: "256 / 512 ГБ",
        ram: "12 / 16 ГБ",
        screen: "6.78 AMOLED 120 Гц",
        processor: "Snapdragon 8 Elite",
        batteryMah: 6500,
        mainCamera: "50 МП",
        frontCamera: "16 МП",
        charging: "120 Вт"
    },

    {
        name: "Realme GT 7",
        brand: "Realme",
        year: 2025,
        price: 549,
        rating: 8.9,
        camera: 8.7,
        display: 9.3,
        performance: 9.4,
        battery: 9.6,
        zoom: 7.9,
        storage: "256 / 512 ГБ",
        ram: "12 / 16 ГБ",
        screen: "6.78 AMOLED 120 Гц",
        processor: "Dimensity 9400e",
        batteryMah: 7000,
        mainCamera: "50 МП",
        frontCamera: "32 МП",
        charging: "120 Вт"
    },


    /* ================= HONOR ================= */

    {
        name: "Honor Magic7 Pro",
        brand: "Honor",
        year: 2025,
        price: 1099,
        rating: 9.4,
        camera: 9.6,
        display: 9.7,
        performance: 9.6,
        battery: 9.7,
        zoom: 9.7,
        storage: "512 ГБ",
        ram: "12 / 16 ГБ",
        screen: "6.8 OLED 120 Гц",
        processor: "Snapdragon 8 Elite",
        batteryMah: 5850,
        mainCamera: "50 МП",
        frontCamera: "50 МП",
        charging: "100 Вт"
    },

    {
        name: "Honor Magic7",
        brand: "Honor",
        year: 2025,
        price: 799,
        rating: 9.1,
        camera: 9.2,
        display: 9.5,
        performance: 9.5,
        battery: 9.4,
        zoom: 8.8,
        storage: "256 / 512 ГБ",
        ram: "12 ГБ",
        screen: "6.78 OLED 120 Гц",
        processor: "Snapdragon 8 Elite",
        batteryMah: 5650,
        mainCamera: "50 МП",
        frontCamera: "50 МП",
        charging: "100 Вт"
    },


    /* ================= OPPO ================= */

    {
        name: "OPPO Find X8 Ultra",
        brand: "OPPO",
        year: 2025,
        price: 1099,
        rating: 9.6,
        camera: 9.9,
        display: 9.8,
        performance: 9.7,
        battery: 9.8,
        zoom: 9.9,
        storage: "256 / 512 ГБ / 1 ТБ",
        ram: "12 / 16 ГБ",
        screen: "6.82 AMOLED 120 Гц",
        processor: "Snapdragon 8 Elite",
        batteryMah: 6100,
        mainCamera: "50 МП",
        frontCamera: "32 МП",
        charging: "100 Вт"
    },

    {
        name: "OPPO Find X8 Pro",
        brand: "OPPO",
        year: 2024,
        price: 999,
        rating: 9.3,
        camera: 9.6,
        display: 9.7,
        performance: 9.5,
        battery: 9.7,
        zoom: 9.5,
        storage: "512 ГБ",
        ram: "16 ГБ",
        screen: "6.78 AMOLED 120 Гц",
        processor: "Dimensity 9400",
        batteryMah: 5910,
        mainCamera: "50 МП",
        frontCamera: "32 МП",
        charging: "80 Вт"
    },


    /* ================= VIVO ================= */

    {
        name: "vivo X200 Ultra",
        brand: "vivo",
        year: 2025,
        price: 1099,
        rating: 9.7,
        camera: 10,
        display: 9.8,
        performance: 9.7,
        battery: 9.7,
        zoom: 10,
        storage: "256 / 512 ГБ / 1 ТБ",
        ram: "12 / 16 ГБ",
        screen: "6.82 AMOLED 120 Гц",
        processor: "Snapdragon 8 Elite",
        batteryMah: 6000,
        mainCamera: "200 МП",
        frontCamera: "50 МП",
        charging: "90 Вт"
    },

    {
        name: "vivo X200 Pro",
        brand: "vivo",
        year: 2024,
        price: 999,
        rating: 9.5,
        camera: 9.8,
        display: 9.7,
        performance: 9.6,
        battery: 9.7,
        zoom: 9.8,
        storage: "512 ГБ / 1 ТБ",
        ram: "16 ГБ",
        screen: "6.78 AMOLED 120 Гц",
        processor: "Dimensity 9400",
        batteryMah: 6000,
        mainCamera: "50 МП ZEISS",
        frontCamera: "32 МП",
        charging: "90 Вт"
    },


    /* ================= SONY ================= */

    {
        name: "Sony Xperia 1 VII",
        brand: "Sony",
        year: 2025,
        price: 1399,
        rating: 9.0,
        camera: 9.3,
        display: 9.8,
        performance: 9.5,
        battery: 9.2,
        zoom: 9.0,
        storage: "256 ГБ",
        ram: "12 ГБ",
        screen: "6.5 OLED 120 Гц",
        processor: "Snapdragon 8 Elite",
        batteryMah: 5000,
        mainCamera: "48 МП",
        frontCamera: "12 МП",
        charging: "30 Вт"
    },


    /* ================= ASUS ================= */

    {
        name: "ASUS ROG Phone 9 Pro",
        brand: "ASUS",
        year: 2024,
        price: 1199,
        rating: 9.2,
        camera: 8.7,
        display: 9.8,
        performance: 10,
        battery: 9.8,
        zoom: 7.9,
        storage: "512 ГБ / 1 ТБ",
        ram: "16 / 24 ГБ",
        screen: "6.78 AMOLED 185 Гц",
        processor: "Snapdragon 8 Elite",
        batteryMah: 5800,
        mainCamera: "50 МП",
        frontCamera: "32 МП",
        charging: "65 Вт"
    },


    /* ================= MOTOROLA ================= */

    {
        name: "Motorola Razr 60 Ultra",
        brand: "Motorola",
        year: 2025,
        price: 1199,
        rating: 9.0,
        camera: 9.0,
        display: 9.6,
        performance: 9.5,
        battery: 9.0,
        zoom: 7.8,
        storage: "512 ГБ / 1 ТБ",
        ram: "16 ГБ",
        screen: "7.0 LTPO AMOLED 165 Гц",
        processor: "Snapdragon 8 Elite",
        batteryMah: 4700,
        mainCamera: "50 МП",
        frontCamera: "50 МП",
        charging: "68 Вт"
    }

];


/* =========================================================
   2. ГЕНЕРАЦИЯ БОЛЬШОГО КАТАЛОГА
   ========================================================= */

const brands = [
    "Samsung",
    "Apple",
    "Xiaomi",
    "Google",
    "OnePlus",
    "Realme",
    "Honor",
    "OPPO",
    "vivo",
    "Sony",
    "ASUS",
    "Motorola"
];

const generatedSeries = [
    "Pro",
    "Pro Max",
    "Ultra",
    "Plus",
    "Max",
    "SE",
    "Lite",
    "Neo",
    "GT",
    "Note",
    "Power"
];


for (let i = phoneData.length; i < 520; i++) {

    const brand = brands[i % brands.length];

    const series =
        generatedSeries[i % generatedSeries.length];

    const number = 20 + (i % 80);

    const price =
        249 + ((i * 37) % 1150);

    const rating =
        Number(
            (
                7.2 +
                ((i * 13) % 28) / 10
            ).toFixed(1)
        );

    const camera =
        Number(
            Math.min(
                9.9,
                rating - 0.1 + ((i % 5) / 10)
            ).toFixed(1)
        );

    const display =
        Number(
            Math.min(
                9.9,
                rating + ((i % 3) / 10)
            ).toFixed(1)
        );

    const performance =
        Number(
            Math.min(
                10,
                rating + ((i % 4) / 10)
            ).toFixed(1)
        );

    const battery =
        Number(
            Math.min(
                9.9,
                rating - 0.2 + ((i % 6) / 10)
            ).toFixed(1)
        );

    const zoom =
        Number(
            Math.min(
                9.9,
                rating - 0.5 + ((i % 7) / 10)
            ).toFixed(1)
        );

    const screenSize =
        (6.3 + ((i % 5) / 10)).toFixed(1);

    phoneData.push({

        name:
            `${brand} ${series} ${number}`,

        brand,

        year:
            2022 + (i % 4),

        price,

        rating,

        camera,

        display,

        performance,

        battery,

        zoom,

        storage:
            "128 / 256 / 512 ГБ",

        ram:
            `${8 + ((i % 3) * 4)} ГБ`,

        screen:
            `${screenSize} AMOLED 120 Гц`,

        processor:
            i % 2 === 0
                ? "Snapdragon 8 Series"
                : "MediaTek Dimensity",

        batteryMah:
            4000 + ((i * 137) % 2800),

        mainCamera:
            `${48 + ((i * 7) % 153)} МП`,

        frontCamera:
            `${12 + ((i * 3) % 32)} МП`,

        charging:
            `${25 + ((i * 5) % 125)} Вт`
    });
}


/* =========================================================
   3. СОСТОЯНИЕ
   ========================================================= */

let currentPhones = [...phoneData];

let visibleCount = 24;

let comparePhones = [];

let selectedBrand = "all";

let selectedSort = "rating";

let searchQuery = "";


/* =========================================================
   4. КЭШ ФОТО
   ========================================================= */

let phoneImageCache = {};

try {

    phoneImageCache =
        JSON.parse(
            localStorage.getItem(
                "phonecheck_images"
            ) || "{}"
        );

} catch {

    phoneImageCache = {};

}


/* =========================================================
   5. DOM READY
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    initPhoneCheck
);


/* =========================================================
   6. INIT
   ========================================================= */

function initPhoneCheck() {

    createCatalogControls();

    renderPhones();

    setupSearch();

    setupNavigation();

    setupStartButtons();

    setupCompareSection();

    setupGlobalClicks();

    setupScrollAnimations();

    updateCatalogCounter();

    updateTopList();

    showSearchResult(
        currentPhones.length
    );

}


/* =========================================================
   7. АВТОМАТИЧЕСКИЙ ПОИСК ФОТО
   ========================================================= */

/*
 * Ищем фотографию модели автоматически через
 * Wikimedia Commons API.
 *
 * Никаких путей к картинкам вручную прописывать
 * не нужно.
 */

async function findPhoneImage(phone) {

    const cacheKey = phone.name;

    if (phoneImageCache[cacheKey]) {

        return phoneImageCache[cacheKey];

    }

    try {

        const searchText =
            `"${phone.name}"`;

        const params =
            new URLSearchParams({

                action: "query",

                generator: "search",

                gsrsearch: searchText,

                gsrnamespace: "6",

                gsrlimit: "10",

                prop: "imageinfo",

                iiprop: "url",

                iiurlwidth: "700",

                format: "json",

                origin: "*"

            });


        const response =
            await fetch(
                "https://commons.wikimedia.org/w/api.php?" +
                params.toString()
            );


        if (!response.ok) {

            throw new Error(
                "Wikimedia API error"
            );

        }


        const data =
            await response.json();


        const pages =
            data.query?.pages;


        if (!pages) {

            return null;

        }


        const pageList =
            Object.values(pages);


        const modelWords =
            phone.name
                .toLowerCase()
                .split(/\s+/)
                .filter(
                    word =>
                        word.length > 2
                );


        let bestPage = null;

        let bestScore = -1;


        for (
            const page of pageList
        ) {

            const title =
                String(
                    page.title || ""
                ).toLowerCase();


            let score = 0;


            for (
                const word of modelWords
            ) {

                if (
                    title.includes(word)
                ) {

                    score++;

                }

            }


            if (
                title.includes(
                    phone.brand.toLowerCase()
                )
            ) {

                score += 3;

            }


            if (
                title.includes("phone") ||
                title.includes("smartphone") ||
                title.includes("mobile")
            ) {

                score += 2;

            }


            if (
                score > bestScore
            ) {

                bestScore = score;

                bestPage = page;

            }

        }


        if (!bestPage) {

            return null;

        }


        const imageInfo =
            bestPage.imageinfo?.[0];


        if (!imageInfo) {

            return null;

        }


        const image =
            imageInfo.thumburl ||
            imageInfo.url ||
            null;


        if (image) {

            phoneImageCache[cacheKey] =
                image;


            try {

                localStorage.setItem(
                    "phonecheck_images",
                    JSON.stringify(
                        phoneImageCache
                    )
                );

            } catch {

                /* localStorage может быть переполнен */

            }

        }


        return image;

    } catch (error) {

        console.warn(
            "Фото не найдено:",
            phone.name,
            error
        );

        return null;

    }

}


/* =========================================================
   8. ЗАПАСНОЕ ИЗОБРАЖЕНИЕ
   ========================================================= */

function getPhonePlaceholder(phone) {

    return `

        <div class="phone-image-placeholder">

            <div class="placeholder-icon">

                ${getBrandIcon(phone.brand)}

            </div>

            <span>

                ${escapeHtml(phone.brand)}

            </span>

        </div>

    `;

}


/* =========================================================
   9. ЗАГРУЗКА ФОТО В КАРТОЧКУ
   ========================================================= */

async function loadPhoneImage(
    card,
    phone
) {

    const container =
        card.querySelector(
            ".card-image"
        );


    if (!container) {

        return;

    }


    const image =
        await findPhoneImage(phone);


    const loading =
        container.querySelector(
            ".image-loading"
        );


    if (loading) {

        loading.remove();

    }


    if (!image) {

        container.insertAdjacentHTML(
            "afterbegin",
            getPhonePlaceholder(phone)
        );

        return;

    }


    const img =
        document.createElement("img");


    img.className =
        "phone-photo";

    img.alt =
        phone.name;

    img.loading =
        "lazy";

    img.decoding =
        "async";

    img.src =
        image;


    img.onerror = () => {

        img.remove();

        container.insertAdjacentHTML(
            "afterbegin",
            getPhonePlaceholder(phone)
        );

    };


    container.insertBefore(
        img,
        container.firstChild
    );

}


/* =========================================================
   10. КАТАЛОГ
   ========================================================= */

function createCatalogControls() {

    const section =
        document.getElementById(
            "phones"
        );


    if (!section) {

        return;

    }


    const grid =
        section.querySelector(
            ".phone-grid"
        );


    if (!grid) {

        return;

    }


    /*
     * Если фильтры уже есть в index.html —
     * используем их.
     *
     * Если их нет — создаём автоматически.
     */

    let controls =
        section.querySelector(
            ".catalog-controls"
        );


    if (!controls) {

        controls =
            document.createElement(
                "div"
            );

        controls.className =
            "catalog-controls";


        const heading =
            section.querySelector(
                ".section-heading"
            );


        if (heading) {

            heading.appendChild(
                controls
            );

        }

    }


    let brandFilter =
        document.getElementById(
            "brandFilter"
        );


    let sortSelect =
        document.getElementById(
            "sortPhones"
        );


    /*
     * Если в HTML старый sortFilter —
     * тоже используем его.
     */

    if (!sortSelect) {

        sortSelect =
            document.getElementById(
                "sortFilter"
            );

    }


    if (!brandFilter) {

        brandFilter =
            document.createElement(
                "select"
            );

        brandFilter.id =
            "brandFilter";

        brandFilter.innerHTML = `

            <option value="all">
                Все бренды
            </option>

            ${brands.map(
                brand => `
                    <option value="${escapeHtml(brand)}">
                        ${escapeHtml(brand)}
                    </option>
                `
            ).join("")}

        `;

        controls.appendChild(
            brandFilter
        );

    }


    if (!sortSelect) {

        sortSelect =
            document.createElement(
                "select"
            );

        sortSelect.id =
            "sortPhones";

        sortSelect.innerHTML = `

            <option value="rating">
                По рейтингу
            </option>

            <option value="priceLow">
                Цена: сначала дешевле
            </option>

            <option value="priceHigh">
                Цена: сначала дороже
            </option>

            <option value="camera">
                По камере
            </option>

            <option value="zoom">
                По зуму
            </option>

            <option value="performance">
                По производительности
            </option>

        `;

        controls.appendChild(
            sortSelect
        );

    }


    /*
     * Удаляем старые обработчики через
     * замену элементов.
     */

    brandFilter.onchange = () => {

        selectedBrand =
            brandFilter.value;

        visibleCount = 24;

        applyFilters();

    };


    sortSelect.onchange = () => {

        selectedSort =
            sortSelect.value;

        visibleCount = 24;

        applyFilters();

    };


    /*
     * Кнопка сброса.
     */

    const resetButton =
        document.getElementById(
            "resetFilters"
        );


    if (resetButton) {

        resetButton.onclick = event => {

            event.preventDefault();

            selectedBrand = "all";

            selectedSort = "rating";

            searchQuery = "";

            visibleCount = 24;

            brandFilter.value =
                "all";

            sortSelect.value =
                "rating";


            const input =
                document.getElementById(
                    "phoneSearch"
                );


            if (input) {

                input.value = "";

            }


            applyFilters();

            showNotification(
                "Фильтры сброшены"
            );

        };

    }


    /*
     * Убираем старую кнопку "Показать ещё".
     */

    const oldLoadMore =
        document.getElementById(
            "loadMorePhones"
        );


    if (oldLoadMore) {

        oldLoadMore.remove();

    }


    const loadMore =
        document.createElement(
            "button"
        );


    loadMore.id =
        "loadMorePhones";

    loadMore.className =
        "load-more-button";

    loadMore.textContent =
        "Показать ещё";


    loadMore.addEventListener(
        "click",
        () => {

            visibleCount += 24;

            renderPhones();

        }
    );


    section.appendChild(
        loadMore
    );

}


/* =========================================================
   11. RENDER КАРТОЧЕК
   ========================================================= */

function renderPhones() {

    const grid =
        document.querySelector(
            ".phone-grid"
        );


    if (!grid) {

        return;

    }


    grid.innerHTML = "";


    const list =
        currentPhones.slice(
            0,
            visibleCount
        );


    list.forEach(
        (phone, index) => {

            const card =
                createPhoneCard(
                    phone,
                    index
                );


            grid.appendChild(
                card
            );


            /*
             * Фото загружается отдельно,
             * поэтому страница не ждёт все 24 фото.
             */

            loadPhoneImage(
                card,
                phone
            );

        }
    );


    const loadMore =
        document.getElementById(
            "loadMorePhones"
        );


    if (loadMore) {

        if (
            visibleCount >=
            currentPhones.length
        ) {

            loadMore.style.display =
                "none";

        } else {

            loadMore.style.display =
                "block";

            const remaining =
                currentPhones.length -
                visibleCount;


            loadMore.textContent =
                `Показать ещё (${Math.min(
                    24,
                    remaining
                )})`;

        }

    }


    updateCatalogCounter();

    setupCardButtons();

    setupCardAnimations();

}


/* =========================================================
   12. КАРТОЧКА ТЕЛЕФОНА
   ========================================================= */

function createPhoneCard(
    phone,
    index
) {

    const card =
        document.createElement(
            "article"
        );


    card.className =
        "phone-card";


    card.dataset.phone =
        phone.name;


    card.dataset.brand =
        phone.brand;


    const imageClass =
        phone.brand
            .toLowerCase()
            .replace(
                /[^a-zа-яё]/gi,
                ""
            );


    const favorite =
        isFavorite(
            phone.name
        );


    card.innerHTML = `

        <div class="
            card-image
            ${imageClass}
        ">

            <div class="image-loading">

                <div class="loading-spinner"></div>

                <span>
                    Загрузка фото...
                </span>

            </div>


            <button
                class="favorite-button ${
                    favorite
                        ? "active"
                        : ""
                }"
                data-favorite="${escapeHtml(
                    phone.name
                )}"
                title="Добавить в избранное"
            >
                ${
                    favorite
                        ? "♥"
                        : "♡"
                }
            </button>

        </div>


        <div class="card-content">

            <span class="brand">
                ${escapeHtml(
                    phone.brand.toUpperCase()
                )}
            </span>


            <h3>
                ${escapeHtml(
                    phone.name
                )}
            </h3>


            <p>
                ${getShortDescription(
                    phone
                )}
            </p>


            <div class="mini-specs">

                <span>
                    📸 ${phone.camera}
                </span>

                <span>
                    ⚡ ${phone.performance}
                </span>

                <span>
                    🔋 ${phone.battery}
                </span>

            </div>


            <div class="card-bottom">

                <div class="rating">
                    ⭐ ${phone.rating}
                </div>


                <button
                    class="details-button"
                    data-details="${escapeHtml(
                        phone.name
                    )}"
                >
                    Подробнее →
                </button>

            </div>

        </div>

    `;


    return card;

}


/* =========================================================
   13. ОПИСАНИЕ
   ========================================================= */

function getShortDescription(phone) {

    if (phone.camera >= 9.7) {

        return "Флагман с отличной камерой";

    }


    if (phone.performance >= 9.8) {

        return "Мощный смартфон для высокой нагрузки";

    }


    if (phone.battery >= 9.7) {

        return "Большая батарея и быстрая зарядка";

    }


    if (phone.display >= 9.7) {

        return "Яркий дисплей с высокой частотой";

    }


    return "Современный смартфон";

}


/* =========================================================
   14. ИКОНКИ
   ========================================================= */

function getBrandIcon(brand) {

    const icons = {

        Samsung: "📱",

        Apple: "🍎",

        Xiaomi: "⚡",

        Google: "📸",

        OnePlus: "🚀",

        Realme: "🔥",

        Honor: "💎",

        OPPO: "🟢",

        vivo: "🔵",

        Sony: "🎧",

        ASUS: "🎮",

        Motorola: "⚡"

    };


    return (
        icons[brand] ||
        "📱"
    );

}


/* =========================================================
   15. ПОИСК
   ========================================================= */

function setupSearch() {

    const input =
        document.getElementById(
            "phoneSearch"
        );


    const button =
        document.getElementById(
            "searchButton"
        );


    if (!input) {

        return;

    }


    const performSearch =
        () => {

            searchQuery =
                input.value
                    .trim()
                    .toLowerCase();


            visibleCount = 24;

            applyFilters();

        };


    input.addEventListener(
        "input",
        performSearch
    );


    input.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter"
            ) {

                event.preventDefault();

                performSearch();

            }

        }
    );


    if (button) {

        button.addEventListener(
            "click",
            event => {

                event.preventDefault();

                performSearch();


                document
                    .getElementById(
                        "phones"
                    )
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    }

}


/* =========================================================
   16. ФИЛЬТРЫ
   ========================================================= */

function applyFilters() {

    let result =
        [...phoneData];


    if (
        selectedBrand !== "all"
    ) {

        result =
            result.filter(
                phone =>
                    phone.brand ===
                    selectedBrand
            );

    }


    if (searchQuery) {

        result =
            result.filter(
                phone => {

                    const text =
                        [
                            phone.name,
                            phone.brand,
                            phone.processor,
                            phone.storage
                        ]
                            .join(" ")
                            .toLowerCase();


                    return text.includes(
                        searchQuery
                    );

                }
            );

    }


    switch (
        selectedSort
    ) {

        case "priceLow":

            result.sort(
                (a, b) =>
                    a.price - b.price
            );

            break;


        case "priceHigh":

            result.sort(
                (a, b) =>
                    b.price - a.price
            );

            break;


        case "camera":

            result.sort(
                (a, b) =>
                    b.camera - a.camera
            );

            break;


        case "zoom":

            result.sort(
                (a, b) =>
                    b.zoom - a.zoom
            );

            break;


        case "performance":

            result.sort(
                (a, b) =>
                    b.performance -
                    a.performance
            );

            break;


        default:

            result.sort(
                (a, b) =>
                    b.rating - a.rating
            );

    }


    currentPhones =
        result;


    renderPhones();

    showSearchResult(
        result.length
    );

}


/* =========================================================
   17. СЧЁТЧИК
   ========================================================= */

function updateCatalogCounter() {

    const heading =
        document.querySelector(
            "#phones h2"
        );


    if (!heading) {

        return;

    }


    let count =
        document.getElementById(
            "catalogCount"
        );


    if (!count) {

        count =
            document.createElement(
                "span"
            );

        count.id =
            "catalogCount";

        count.style.fontSize =
            "13px";

        count.style.color =
            "#888";

        count.style.marginLeft =
            "10px";


        heading.appendChild(
            count
        );

    }


    count.textContent =
        ` ${currentPhones.length} моделей`;

}


/* =========================================================
   18. РЕЗУЛЬТАТ ПОИСКА
   ========================================================= */

function showSearchResult(
    count
) {

    const message =
        document.getElementById(
            "searchResult"
        );


    if (!message) {

        return;

    }


    if (!searchQuery) {

        message.textContent =
            `В каталоге ${phoneData.length} смартфонов`;

        return;

    }


    if (count === 0) {

        message.textContent =
            `Ничего не найдено по запросу «${searchQuery}»`;

    } else {

        message.textContent =
            `Найдено смартфонов: ${count}`;

    }

}


/* =========================================================
   19. КНОПКИ КАРТОЧЕК
   ========================================================= */

function setupCardButtons() {

    document
        .querySelectorAll(
            ".details-button"
        )
        .forEach(button => {

            button.onclick =
                event => {

                    event.preventDefault();

                    openPhoneModal(
                        button.dataset.details
                    );

                };

        });


    document
        .querySelectorAll(
            ".favorite-button"
        )
        .forEach(button => {

            button.onclick =
                event => {

                    event.preventDefault();

                    event.stopPropagation();

                    toggleFavorite(
                        button.dataset.favorite
                    );

                };

        });

}


/* =========================================================
   20. GLOBAL CLICKS
   ========================================================= */

function setupGlobalClicks() {

    document.addEventListener(
        "click",
        event => {

            const compareButton =
                event.target.closest(
                    "[data-compare]"
                );


            if (compareButton) {

                addToCompare(
                    compareButton.dataset.compare
                );

            }

        }
    );

}


/* =========================================================
   21. MODAL ТЕЛЕФОНА
   ========================================================= */

function openPhoneModal(
    name
) {

    const phone =
        phoneData.find(
            item =>
                item.name === name
        );


    if (!phone) {

        showNotification(
            "Телефон не найден"
        );

        return;

    }


    closeModal();


    const modal =
        document.createElement(
            "div"
        );


    modal.className =
        "phone-modal";


    const cachedImage =
        phoneImageCache[
            phone.name
        ];


    modal.innerHTML = `

        <div class="modal-overlay"></div>


        <div class="modal-window">

            <button
                class="modal-close"
                aria-label="Закрыть"
            >
                ×
            </button>


            <div class="modal-phone-image">

                ${
                    cachedImage
                        ? `
                            <img
                                src="${escapeHtml(
                                    cachedImage
                                )}"
                                alt="${escapeHtml(
                                    phone.name
                                )}"
                            >
                        `
                        : `
                            <div class="modal-icon">
                                ${getBrandIcon(
                                    phone.brand
                                )}
                            </div>
                        `
                }

            </div>


            <div class="modal-brand">

                ${escapeHtml(
                    phone.brand.toUpperCase()
                )}

            </div>


            <h2>

                ${escapeHtml(
                    phone.name
                )}

            </h2>


            <div class="modal-rating">

                ⭐ ${phone.rating}/10

            </div>


            <div class="phone-price">

                От $${phone.price}

            </div>


            <div class="modal-specs">

                ${modalSpec(
                    "📸 Камера",
                    phone.camera + "/10"
                )}

                ${modalSpec(
                    "🖥️ Экран",
                    phone.display + "/10"
                )}

                ${modalSpec(
                    "⚡ Производительность",
                    phone.performance + "/10"
                )}

                ${modalSpec(
                    "🔋 Батарея",
                    phone.battery + "/10"
                )}

                ${modalSpec(
                    "🔭 Зум",
                    phone.zoom + "/10"
                )}

                ${modalSpec(
                    "💾 Память",
                    phone.storage
                )}

                ${modalSpec(
                    "🧠 ОЗУ",
                    phone.ram
                )}

                ${modalSpec(
                    "🔲 Дисплей",
                    phone.screen
                )}

                ${modalSpec(
                    "🚀 Процессор",
                    phone.processor
                )}

                ${modalSpec(
                    "🔋 Ёмкость",
                    phone.batteryMah +
                    " мА·ч"
                )}

                ${modalSpec(
                    "📷 Основная камера",
                    phone.mainCamera
                )}

                ${modalSpec(
                    "🤳 Фронтальная камера",
                    phone.frontCamera
                )}

                ${modalSpec(
                    "⚡ Зарядка",
                    phone.charging
                )}

            </div>


            <button
                class="modal-compare"
                data-modal-compare="${escapeHtml(
                    phone.name
                )}"
            >
                ⚔️ Добавить к сравнению
            </button>


            <button
                class="modal-favorite"
                data-modal-favorite="${escapeHtml(
                    phone.name
                )}"
            >
                ${
                    isFavorite(
                        phone.name
                    )
                        ? "♥ Убрать из избранного"
                        : "♡ Добавить в избранное"
                }
            </button>

        </div>

    `;


    document.body.appendChild(
        modal
    );


    requestAnimationFrame(
        () => {

            modal.classList.add(
                "show"
            );

        }
    );


    modal
        .querySelector(
            ".modal-close"
        )
        .addEventListener(
            "click",
            closeModal
        );


    modal
        .querySelector(
            ".modal-overlay"
        )
        .addEventListener(
            "click",
            closeModal
        );


    modal
        .querySelector(
            "[data-modal-compare]"
        )
        .addEventListener(
            "click",
            () => {

                addToCompare(
                    phone.name
                );

            }
        );


    modal
        .querySelector(
            "[data-modal-favorite]"
        )
        .addEventListener(
            "click",
            () => {

                toggleFavorite(
                    phone.name
                );

                closeModal();

            }
        );


    /*
     * Если фото ещё не найдено —
     * ищем его прямо сейчас.
     */

    if (!cachedImage) {

        findPhoneImage(
            phone
        ).then(
            image => {

                if (!image) {

                    return;

                }


                const imageBox =
                    modal.querySelector(
                        ".modal-phone-image"
                    );


                if (!imageBox) {

                    return;

                }


                imageBox.innerHTML = `

                    <img
                        src="${escapeHtml(
                            image
                        )}"
                        alt="${escapeHtml(
                            phone.name
                        )}"
                    >

                `;

            }
        );

    }


    document.addEventListener(
        "keydown",
        escapeClose
    );

}


/* =========================================================
   22. MODAL SPEC
   ========================================================= */

function modalSpec(
    title,
    value
) {

    return `

        <div class="modal-spec">

            <span>
                ${escapeHtml(title)}
            </span>

            <strong>
                ${escapeHtml(
                    String(value)
                )}
            </strong>

        </div>

    `;

}


/* =========================================================
   23. ЗАКРЫТИЕ MODAL
   ========================================================= */

function closeModal() {

    const modal =
        document.querySelector(
            ".phone-modal"
        );


    if (modal) {

        modal.remove();

    }


    document.removeEventListener(
        "keydown",
        escapeClose
    );

}


function escapeClose(
    event
) {

    if (
        event.key === "Escape"
    ) {

        closeModal();

    }

}


/* =========================================================
   24. ИЗБРАННОЕ
   ========================================================= */

function getFavorites() {

    try {

        return (
            JSON.parse(
                localStorage.getItem(
                    "phonecheck_favorites"
                )
            ) || []
        );

    } catch {

        return [];

    }

}


function isFavorite(
    name
) {

    return getFavorites()
        .includes(name);

}


function toggleFavorite(
    name
) {

    let favorites =
        getFavorites();


    if (
        favorites.includes(name)
    ) {

        favorites =
            favorites.filter(
                item =>
                    item !== name
            );


        showNotification(
            "Удалено из избранного"
        );

    } else {

        favorites.push(name);


        showNotification(
            "Добавлено в избранное ❤️"
        );

    }


    localStorage.setItem(
        "phonecheck_favorites",
        JSON.stringify(
            favorites
        )
    );


    renderPhones();

}


/* =========================================================
   25. СРАВНЕНИЕ
   ========================================================= */

function setupCompareSection() {

    document
        .querySelectorAll(
            ".compare-section .primary-button"
        )
        .forEach(button => {

            button.onclick =
                event => {

                    event.preventDefault();

                    document
                        .getElementById(
                            "phones"
                        )
                        ?.scrollIntoView({
                            behavior: "smooth"
                        });


                    showNotification(
                        "Открой «Подробнее» и добавь телефон к сравнению ⚔️"
                    );

                };

        });

}


/* =========================================================
   26. ДОБАВИТЬ К СРАВНЕНИЮ
   ========================================================= */

function addToCompare(
    name
) {

    if (
        comparePhones.includes(name)
    ) {

        showNotification(
            "Этот телефон уже выбран"
        );

        return;

    }


    if (
        comparePhones.length >= 2
    ) {

        comparePhones = [];

    }


    comparePhones.push(name);


    if (
        comparePhones.length === 1
    ) {

        showNotification(
            "Первый телефон выбран. Выбери второй."
        );

        closeModal();

        return;

    }


    if (
        comparePhones.length === 2
    ) {

        showCompareModal();

    }

}


/* =========================================================
   27. СРАВНЕНИЕ
   ========================================================= */

function showCompareModal() {

    const first =
        phoneData.find(
            phone =>
                phone.name ===
                comparePhones[0]
        );


    const second =
        phoneData.find(
            phone =>
                phone.name ===
                comparePhones[1]
        );


    if (
        !first ||
        !second
    ) {

        comparePhones = [];

        return;

    }


    closeModal();


    const modal =
        document.createElement(
            "div"
        );


    modal.className =
        "phone-modal";


    modal.innerHTML = `

        <div class="modal-overlay"></div>


        <div class="
            modal-window
            compare-window
        ">

            <button
                class="modal-close"
            >
                ×
            </button>


            <div class="compare-title">

                ⚔️ СРАВНЕНИЕ

            </div>


            <h2>

                ${escapeHtml(
                    first.name
                )}

                <span>
                    VS
                </span>

                ${escapeHtml(
                    second.name
                )}

            </h2>


            <div class="compare-table">

                ${compareRow(
                    "📸 Камера",
                    first.camera,
                    second.camera
                )}

                ${compareRow(
                    "🖥️ Экран",
                    first.display,
                    second.display
                )}

                ${compareRow(
                    "⚡ Производительность",
                    first.performance,
                    second.performance
                )}

                ${compareRow(
                    "🔋 Батарея",
                    first.battery,
                    second.battery
                )}

                ${compareRow(
                    "🔭 Зум",
                    first.zoom,
                    second.zoom
                )}

                ${compareRow(
                    "💰 Цена",
                    "$" + first.price,
                    "$" + second.price
                )}

                ${compareRow(
                    "⭐ Общая оценка",
                    first.rating,
                    second.rating
                )}

            </div>


            <button
                class="modal-compare"
                id="resetCompare"
            >
                🔄 Выбрать другие телефоны
            </button>

        </div>

    `;


    document.body.appendChild(
        modal
    );


    requestAnimationFrame(
        () => {

            modal.classList.add(
                "show"
            );

        }
    );


    modal
        .querySelector(
            ".modal-close"
        )
        .addEventListener(
            "click",
            closeModal
        );


    modal
        .querySelector(
            ".modal-overlay"
        )
        .addEventListener(
            "click",
            closeModal
        );


    modal
        .querySelector(
            "#resetCompare"
        )
        .addEventListener(
            "click",
            () => {

                comparePhones = [];

                closeModal();

                showNotification(
                    "Можно выбрать два новых телефона"
                );

            }
        );

}


/* =========================================================
   28. СТРОКА СРАВНЕНИЯ
   ========================================================= */

function compareRow(
    title,
    firstValue,
    secondValue
) {

    const firstNumber =
        parseFloat(firstValue);


    const secondNumber =
        parseFloat(secondValue);


    const firstWinner =
        !isNaN(firstNumber) &&
        !isNaN(secondNumber) &&
        firstNumber > secondNumber;


    const secondWinner =
        !isNaN(firstNumber) &&
        !isNaN(secondNumber) &&
        secondNumber > firstNumber;


    return `

        <div class="compare-row">

            <span>
                ${escapeHtml(title)}
            </span>


            <strong
                class="${
                    firstWinner
                        ? "winner"
                        : ""
                }"
            >
                ${escapeHtml(
                    String(firstValue)
                )}
            </strong>


            <strong
                class="${
                    secondWinner
                        ? "winner"
                        : ""
                }"
            >
                ${escapeHtml(
                    String(secondValue)
                )}
            </strong>

        </div>

    `;

}


/* =========================================================
   29. ТОП ТЕЛЕФОНОВ
   ========================================================= */

function updateTopList() {

    const container =
        document.getElementById(
            "topList"
        );


    if (!container) {

        return;

    }


    const top =
        [...phoneData]
            .sort(
                (a, b) =>
                    b.rating - a.rating
            )
            .slice(0, 10);


    container.innerHTML =
        top.map(
            (phone, index) => `

                <div
                    class="top-item"
                    data-details="${escapeHtml(
                        phone.name
                    )}"
                >

                    <span class="top-number">
                        ${index + 1}
                    </span>

                    <div class="top-info">

                        <strong>
                            ${escapeHtml(
                                phone.name
                            )}
                        </strong>

                        <small>
                            ${escapeHtml(
                                phone.brand
                            )}
                        </small>

                    </div>

                    <span class="top-rating">
                        ⭐ ${phone.rating}
                    </span>

                </div>

            `
        )
        .join("");


    container
        .querySelectorAll(
            "[data-details]"
        )
        .forEach(item => {

            item.addEventListener(
                "click",
                () => {

                    openPhoneModal(
                        item.dataset.details
                    );

                }
            );

        });

}


/* =========================================================
   30. НАВИГАЦИЯ
   ========================================================= */

function setupNavigation() {

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const href =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !href ||
                        href === "#"
                    ) {

                        return;

                    }


                    let target;


                    try {

                        target =
                            document.querySelector(
                                href
                            );

                    } catch {

                        return;

                    }


                    if (!target) {

                        return;

                    }


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });

}


/* =========================================================
   31. КНОПКИ HERO
   ========================================================= */

function setupStartButtons() {

    const buttons =
        document.querySelectorAll(
            ".hero .primary-button, " +
            ".hero-buttons .primary-button"
        );


    buttons.forEach(
        button => {

            button.addEventListener(
                "click",
                event => {

                    const href =
                        button.getAttribute(
                            "href"
                        );


                    if (
                        href ===
                        "/register.html"
                    ) {

                        event.preventDefault();


                        document
                            .getElementById(
                                "phones"
                            )
                            ?.scrollIntoView({
                                behavior:
                                    "smooth"
                            });


                        showNotification(
                            "Добро пожаловать в PhoneCheck 📱"
                        );

                    }

                }
            );

        }
    );

}


/* =========================================================
   32. УВЕДОМЛЕНИЯ
   ========================================================= */

function showNotification(
    text
) {

    const old =
        document.querySelector(
            ".phone-notification"
        );


    if (old) {

        old.remove();

    }


    const notification =
        document.createElement(
            "div"
        );


    notification.className =
        "phone-notification";


    notification.textContent =
        text;


    document.body.appendChild(
        notification
    );


    requestAnimationFrame(
        () => {

            notification.classList.add(
                "show"
            );

        }
    );


    setTimeout(
        () => {

            notification.classList.remove(
                "show"
            );


            setTimeout(
                () => {

                    notification.remove();

                },
                300
            );

        },
        3000
    );

}


/* =========================================================
   33. АНИМАЦИИ
   ========================================================= */

function setupScrollAnimations() {

    setupCardAnimations();


    const elements =
        document.querySelectorAll(
            ".top-item, .compare-section"
        );


    if (
        !("IntersectionObserver" in window)
    ) {

        elements.forEach(
            element =>
                element.classList.add(
                    "visible"
                )
        );

        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.08
            }
        );


    elements.forEach(
        element => {

            if (
                !element.classList.contains(
                    "scroll-hidden"
                )
            ) {

                element.classList.add(
                    "scroll-hidden"
                );

            }


            observer.observe(
                element
            );

        }
    );

}


function setupCardAnimations() {

    const cards =
        document.querySelectorAll(
            ".phone-card"
        );


    if (
        !("IntersectionObserver" in window)
    ) {

        cards.forEach(
            card =>
                card.classList.add(
                    "visible"
                )
        );

        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.05
            }
        );


    cards.forEach(
        card => {

            card.classList.add(
                "scroll-hidden"
            );

            observer.observe(
                card
            );

        }
    );

}


/* =========================================================
   34. ESCAPE HTML
   ========================================================= */

function escapeHtml(
    value
) {

    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================================
   35. КОНСОЛЬ
   ========================================================= */

console.log(
    "%cPhoneCheck",
    "font-size:24px;font-weight:900;color:#ff5500"
);

console.log(
    `Каталог загружен: ${phoneData.length} смартфонов`
);

console.log(
    "Фото, поиск, фильтры, подробнее, избранное и сравнение готовы."
);