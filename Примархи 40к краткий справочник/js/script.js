
// Primarchs data
const primarchs = [
    {
        name: "Робаут Жиллиман",
        legion: "XIII Ультрамарины",
        status: "Лоялист",
        liveStatus: "Жив",
        description: "Родной мир - Макрагг. Был тяжело ранен Фулгримом, долго находился в стазисе, по актуальному лору из него вышел и пытается разгрести все, что накопилось за это время.",
        image: "images/XIII.JPG"
    },
    {
        name: "Лев Эль Джонсон",
        legion: " I Темные Ангелы",
        status: "Лоялист",
        liveStatus: "Жив",
        description: "Родной мир - Калибан. Недавно пробудился после 10 000 лет сна.",
        image: "images/lion.jpg"
    },
    {
        name: "Джагатай Хан",
        legion: "V Белые Шрамы",
        status: "Лоялист",
        liveStatus: "Пропал",
        description: "Родной мир - Чогорис (Мундус Планус). Исчез в Пустоте во время погони за трейторами.",
        image: "images/V.jpg"
    },
    {
        name: "Леман Русс",
        legion: "VI Космические Волки",
        status: "Лоялист",
        liveStatus: "Пропал",
        description: "Родной мир - Фенрис. Исчез, иногда является в видениях своим сынам.",
        image: "images/VI.jpg"
    },
    {
        name: "Рогал Дорн",
        legion: "VII Имперские Кулаки",
        status: "Лоялист",
        liveStatus: "Мертв",
        description: "Родной мир - Инвит. Мертв, убит во время боя на палубе линкора «Меч Святотатства» во время первого Черного Крестового Похода.",
        image: "images/VII.jpg"
    },
    {
        name: "Сангвиний",
        legion: "IX Кровавые Ангелы",
        status: "Лоялист",
        liveStatus: "Мертв",
        description: "Родной мир - Баал Секундус. Мертв, убит Хорусом во время битвы за Императорский дворец.",
        image: "images/IX.jpg"
    },
    {
        name: "Феррус Манус",
        legion: "X Железные Руки",
        status: "Лоялист",
        liveStatus: "Мертв",
        description: "Родной мир - Медуза. Мертв, убит Фулгримом на Исстване V.",
        image: "images/X.jpg"
    },
    {
        name: "Вулкан",
        legion: "XVIII Саламандры",
        status: "Лоялист",
        liveStatus: "Пропал",
        description: "Родной мир - Ноктюрн. Исчез во время битвы за Истваан V.",
        image: "images/XVIII.jpg"
    },
    {
        name: "Корвус Коракс",
        legion: "XIX Гвардия Ворона",
        status: "Лоялист",
        liveStatus: "Пропал",
        description: "Родной мир Освобождение (первоначально-Ликей, луна Киавара). Судя по всему странствует по Оку Ужаса, пытаясь выручить своих воинов",
        image: "images/XIX.jpg"
    },
    {
        name: "Хорус Луперкаль",
        legion: "XVI Лунные Волки/Сыны Хоруса/Черный легион",
        status: "Трейтор",
        liveStatus: "Мертв",
        description: "Родной мир - Хтония. Демон-примарх Хаоса Неделимого. Мертв, убит Императором в схватке на борту «Мстительного духа».",
        image: "images/XVI.jpg"
    },
    {
        name: "Конрад Керз",
        legion: "VIII Повелители ночи",
        status: "Трейтор",
        liveStatus: "Мертв",
        description: "Родной мир - Нострамо. Сейчас поклоняется Хаосу Неделимому. Мертв, Позволил себя убить ассасину Храма Каллидуса, М’Шен.",
        image: "images/VIII.jpg"
    },
    {
        name: "Фулгрим",
        legion: "III Дети Императора",
        status: "Трейтор",
        liveStatus: "Жив",
        description: "Родной мир - Кемос. Демон-примарх Слаанеш. Жив, правит на собственной планете в Оке Ужаса.",
        image: "images/III.jpg"
    },
    {
        name: "Пертурабо",
        legion: "IV Железные Воины",
        status: "Трейтор",
        liveStatus: "Жив",
        description: "Родной мир - Олимпия. Демон-примарх Хаоса Неделимого. Жив, правит планетой Медренгард в Оке Ужаса.",
        image: "images/IV.jpg"
    },
    {
        name: "Ангрон",
        legion: "XII Пожиратели Миров",
        status: "Трейтор",
        liveStatus: "Жив",
        description: "Родной мир - Нуцерия. Демон-примарх Кхорна. Изгнан в варп (не оставляет попыток прорваться в реальность).",
        image: "images/XII.jpg"
    },
    {
        name: "Магнус Красный",
        legion: "XV Тысяча Сынов",
        status: "Трейтор",
        liveStatus: "Жив",
        description: "Родной мир - Просперо. Демон-примарх Тзинча. Правит планетой Волшебников в Оке Ужаса.",
        image: "images/XV.jpg"
    },
    {
        name: "Мортарион",
        legion: "XIV Гвардия Смерти",
        status: "Трейтор",
        liveStatus: "Жив",
        description: "Родной мир - Барбарус. Демон-примарх. Жив, правит Чумной планетой в Оке Ужаса.",
        image: "images/XIV.jpg"
    },
    {
        name: "Лоргар Аврелиан",
        legion: "XVII Несущие слово",
        status: "Трейтор",
        liveStatus: "Жив",
        description: "Родной мир - Колхис. Демон-примарх Хаоса Неделимого. Жив, правит планетой Сикарус в Оке Ужаса.",
        image: "images/XVII.jpg"
    },
    {
        name: "Альфарий/Омегон",
        legion: "XX Альфа Легион",
        status: "Трейтор",
        liveStatus: "Мертв",
        description: "Родной мир - неизвестен. Омегон – убит Рогалом Дорном на Плутоне (возможно), Альфарий – убит Жиллиманом на Эскрадоре (возможно).",
        image: "images/XX.jpg"
    }
];

// DOM Elements
        const searchInput = document.getElementById('searchInput');
        const searchButton = document.getElementById('searchButton');
        const resultDiv = document.getElementById('result');
        const backToTopButton = document.getElementById('back-to-top');
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function () {
            // Mobile menu toggle
            mobileMenuButton.addEventListener('click', function () {
                mobileMenu.classList.toggle('hidden');
            });
        });
            // Back to top button
            window.addEventListener('scroll', function () {
                if (window.pageYOffset > 300) {
                    backToTopButton.classList.remove('opacity-0', 'invisible');
                    backToTopButton.classList.add('opacity-100', 'visible');
                } else {
                    backToTopButton.classList.remove('opacity-100', 'visible');
                    backToTopButton.classList.add('opacity-0', 'invisible');
                };
            });

            backToTopButton.addEventListener('click', function () {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });

            // Search functionality
            searchButton.addEventListener('click', searchPrimarch);
            searchInput.addEventListener('keyup', function (event) {
                if (event.key === 'Enter') {
                    searchPrimarch();
                };
            });
    

        // Search function
        function searchPrimarch() {
            const searchTerm = searchInput.value.trim().toLowerCase();
            if (searchTerm === '') {
                resultDiv.innerHTML = '<p class="text-red-400">Пожалуйста, введите имя примарха</p>';
                return;
            }

            const foundPrimarchs = primarchs.filter(primarch =>
                primarch.name.toLowerCase().includes(searchTerm) ||
                primarch.legion.toLowerCase().includes(searchTerm)
            );

            if (foundPrimarchs.length === 0) {
                resultDiv.innerHTML = `<p class="text-red-400">Примарх "${searchTerm}" не найден. Попробуйте другое имя.</p>`;
                return;
            }

            resultDiv.innerHTML = '';
            foundPrimarchs.forEach(primarch => {
                resultDiv.appendChild(createPrimarchCard(primarch));
            });
        }

// Show loyalists
function showLoyalists() {
    const filtered = primarchs.filter(p => p.status === "Лоялист");
    displayResults(filtered, "ЛОЯЛИСТЫ", "Лоялисты");
}

// Show traitors
function showTraitors() {
    const filtered = primarchs.filter(p => p.status === "Трейтор");
    displayResults(filtered, "ТРЕЙТОРЫ", "Трейторы");
}

// Show alive
function showAlive() {
    const filtered = primarchs.filter(p => p.liveStatus === "Жив");
    displayResults(filtered, "ЖИВЫЕ", "Живые примархи");
}

// Show dead
function showDead() {
    const filtered = primarchs.filter(p => p.liveStatus === "Мертв");
    displayResults(filtered, "МЕРТВЫЕ", "Мертвые примархи");
}

// Show lost
function showLost() {
    const filtered = primarchs.filter(p => p.liveStatus === "Пропал");
    displayResults(filtered, "ПРОПАВШИЕ", "Пропавшие");
}

// Show all
function showAll() {
    displayResults(primarchs, "Все");
}

// Display results in specified section
function displayResults(primarchsList, sectionId, title) {
    // Hide all sections first
    document.querySelectorAll('#menu > div.container > div[id]:not(.grid)').forEach(div => {
        div.classList.add('hidden');
    });

    // Get the target section and content div
    const sectionDiv = document.getElementById(sectionId);
    const contentDiv = document.querySelector(`#${sectionId} > div`);

    // Clear and populate content
    contentDiv.innerHTML = '';
    if (primarchsList.length === 0) {
        contentDiv.innerHTML = '<p class="text-gray-400 col-span-3">Ничего не найдено</p>';
    } else {
        primarchsList.forEach(primarch => {
            contentDiv.appendChild(createPrimarchCard(primarch));
        });
    }

    // Update title
    const titleElement = sectionDiv.querySelector('h3');
    titleElement.textContent = title;

    // Show the section
    sectionDiv.classList.remove('hidden');
    sectionDiv.scrollIntoView({ behavior: 'smooth' });
}

// Create primarch card
function createPrimarchCard(primarch) {
    const card = document.createElement('div');
    card.className = 'primarch-card rounded-lg p-6 transition duration-300 hover:shadow-lg';

    // Определяем цвет для статуса лояльности
    const statusColor = primarch.status === 'Лоялист' ? 'bg-blue-900' : 'bg-red-900';

    // Определяем текст и цвет для статуса жизни на основе liveStatus
    let statusTextColor;
    switch (primarch.liveStatus) {
        case "Жив":
            statusTextColor = 'text-green-400';
            break;
        case "Мертв":
            statusTextColor = 'text-gray-400';
            break;
        case "Пропал":
            statusTextColor = 'text-yellow-400'; // желтый цвет для пропавших
            break;
        default:
            statusTextColor = 'text-gray-400';
    }

    card.innerHTML = `
        <div class="flex flex-col md:flex-row gap-4">
            <div class="w-full md:w-1/3">
                <img src="${primarch.image}" alt="${primarch.name}" class="w-full h-48 object-cover rounded-lg mb-4">
            </div>
            <div class="w-full md:w-2/3">
                <h3 class="text-2xl font-bold text-amber-300 mb-2">${primarch.name}</h3>
                <div class="flex flex-wrap gap-2 mb-3">
                    <span class="${statusColor} text-white px-3 py-1 rounded-full text-sm">${primarch.status}</span>
                    <span class="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">${primarch.legion}</span>
                    <span class="${statusTextColor} px-3 py-1 rounded-full text-sm border border-current">${primarch.liveStatus}</span>
                </div>
                <p class="text-gray-300">${primarch.description}</p>
            </div>
        </div>
    `;

    return card;
}
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
