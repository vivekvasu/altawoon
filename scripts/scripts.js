// =============================
// MOBILE MENU
// =============================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// =============================
// TRANSLATION DATA
// =============================
const translations = {
  en: {
    nav_products: "Products",
    nav_about: "About",
    nav_contact: "Contact",

    hero_title: "Premium Quality Chemical Products",
    hero_desc: "Reliable supply for industrial, cleaning, and manufacturing sectors across GCC.",
    hero_btn: "Request a Quote",

    about_title: "About Us",
    about_desc1: "Al Tawoon Chemicals FZE is a trusted industrial chemical supplier based in Hamriyah Free Zone, Sharjah, UAE.",
    about_desc2: "Our mission is to deliver consistent quality, competitive pricing, and reliable service.",

    contact_title: "Contact Us",

    footer_company: "Al Tawoon Chemicals FZE",
    footer_links: "Quick Links",
    footer_contact: "Contact Info",
    footer_rights: "All Rights Reserved"
  },

  sw: {
    nav_products: "Bidhaa",
    nav_about: "Kuhusu",
    nav_contact: "Mawasiliano",

    hero_title: "Bidhaa Bora za Kemikali",
    hero_desc: "Ugavi wa kuaminika kwa viwanda, usafi, na sekta za uzalishaji katika GCC.",
    hero_btn: "Omba Bei",

    about_title: "Kuhusu Sisi",
    about_desc1: "Al Tawoon Chemicals FZE ni muuzaji wa kemikali za viwandani aliyeko Hamriyah Free Zone, Sharjah, UAE.",
    about_desc2: "Lengo letu ni kutoa ubora wa kudumu, bei shindani, na huduma ya kuaminika.",

    contact_title: "Wasiliana Nasi",

    footer_company: "Al Tawoon Chemicals FZE",
    footer_links: "Viungo Muhimu",
    footer_contact: "Maelezo ya Mawasiliano",
    footer_rights: "Haki Zote Zimehifadhiwa"
  }
};

// =============================
// TRANSLATION FUNCTION
// =============================
function translatePage(language) {
  document.querySelectorAll("[data-translate]").forEach(element => {
    const key = element.getAttribute("data-translate");
    if (translations[language][key]) {
      element.innerText = translations[language][key];
    }
  });
}

// =============================
// LANGUAGE SWITCH HANDLER
// =============================
const languageSelectMobile = document.querySelector("#language");
const languageSelectDesktop = document.querySelector("#language-desktop");

if (languageSelectMobile) {
  languageSelectMobile.addEventListener("change", (e) => {
    translatePage(e.target.value);
  });
}

if (languageSelectDesktop) {
  languageSelectDesktop.addEventListener("change", (e) => {
    translatePage(e.target.value);
  });
}