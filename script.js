// =============================================
// UNIVERSITAS MUHAMMADIYAH SUMATERA UTARA — SCRIPT.JS
// =============================================

// Ambil elemen-elemen yang dibutuhkan
const navbar = document.querySelector("#navbar");
const darkToggle = document.querySelector("#dark-toggle");
const menuLinks = document.querySelectorAll(".menu-link");


// =============================================
// FITUR 1: DARK MODE TOGGLE + LOCALSTORAGE
// =============================================

// Cek apakah dark mode pernah disimpan sebelumnya
const modeTersimpan = localStorage.getItem("darkMode");

if (modeTersimpan === "aktif") {
    document.body.classList.add("dark-mode");
    darkToggle.textContent = "🌙 Light Mode";
}

// Jalankan saat tombol dark mode diklik
darkToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const aktif = document.body.classList.contains("dark-mode");

    // Ganti teks tombol sesuai kondisi
    darkToggle.textContent = aktif ? "☀️ Light Mode" : "🌙 Dark Mode";

    // Simpan ke localStorage
    localStorage.setItem("darkMode", aktif ? "aktif" : "nonaktif");

});


// =============================================
// FITUR 2: STICKY NAVBAR SAAT SCROLL
// =============================================

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        navbar.classList.add("navbar-scroll");
    } else {
        navbar.classList.remove("navbar-scroll");
    }

});


// =============================================
// FITUR 3: SMOOTH SCROLL DARI NAVBAR
// =============================================

menuLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const targetId = link.getAttribute("href");
        const targetEl = document.querySelector(targetId);

        if (targetEl) {
            targetEl.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// =============================================
// FITUR 4: ANIMASI ANGKA STATISTIK
// =============================================

const counters = document.querySelectorAll(".stat-angka");

counters.forEach((counter) => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {

            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});