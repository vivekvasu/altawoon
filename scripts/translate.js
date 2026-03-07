const translations = {
  en: {
    // Navigation
    nav_products: "Products",
    nav_about: "About",
    nav_contact: "Contact",

    // Hero
    hero_title: "Premium Industrial Chemicals for Every Need",
    hero_desc: "Trusted supplier across GCC for industrial, manufacturing, and cleaning sectors—delivering quality, reliability, and excellence.",
    hero_btn: "Get Your Quote Today",

    // About Us Tiles
    about_title: "About Us",
    about_overview_title: "Overview",
    about_desc1: "Al Tawoon Chemicals FZE is a leading industrial chemical supplier, strategically located in Hamriyah Free Zone, Sharjah, UAE.",
    about_para1_detailed: "With over 25 years of expertise, we deliver superior chemical solutions backed by personalized service and expert technical support.",
    about_para2_detailed: "We specialize in premium solutions for the detergent and cosmetic industries, tailored to meet the needs of clients across Africa and the Middle East.",

    about_why_title_detailed: "Why Choose Us?",
    about_why1_detailed: "Unmatched Quality: Every product meets rigorous standards for performance and reliability.",
    about_why2_detailed: "Industry Expertise: Deep knowledge of detergent and cosmetic manufacturing processes.",
    about_why3_detailed: "Proven Experience & Support: 25+ years guiding clients with technical expertise and professional consultation.",

    about_services_title_detailed: "Our Services & Global Reach",
    about_service1_detailed: "Bulk supply of premium chemical raw materials",
    about_service2_detailed: "Tailored solutions for specific industry requirements",
    about_service3_detailed: "Market-focused logistics for Africa and the Middle East",
    about_global_desc_detailed: "Serving clients across Africa and the Middle East, we provide reliable supply chains and tailored logistics to ensure your business runs smoothly.",

    about_products_title_detailed: "Product Portfolio",
    about_product1_detailed: "Detergent Manufacturing: Surfactants, builders, and performance additives",
    about_product2_detailed: "Cosmetic Production: Specialty ingredients for skincare and personal care",
    about_product3_detailed: "(Detailed product list available upon request)",

    // Contact
    contact_title: "Contact Us",
    footer_rights: "All Rights Reserved"
  },

  sw: {
    // Navigation
    nav_products: "Bidhaa",
    nav_about: "Kuhusu",
    nav_contact: "Mawasiliano",

    // Hero
    hero_title: "Kemikali za Viwandani za Ubora wa Juu kwa Mahitaji Yote",
    hero_desc: "Mtoaji anayeaminika katika GCC kwa viwanda, utengenezaji, na usafi—ukitoa ubora, uhakika, na ubora wa huduma.",
    hero_btn: "Pata Nukuu Leo",

    // About Us Tiles
    about_title: "Kuhusu Sisi",
    about_overview_title: "Muhtasari",
    about_desc1: "AL TAWOON CHEMICALS FZE ni mtoaji wa kemikali za viwandani ulio kwenye Hamriyah Free Zone, Sharjah, UAE.",
    about_para1_detailed: "Kwa zaidi ya miaka 25 ya uzoefu, tunatoa suluhisho bora za kemikali zikiwa na huduma binafsi na msaada wa kiufundi wa kitaalamu.",
    about_para2_detailed: "Tunajikita katika suluhisho za kiwango cha juu kwa viwanda vya sabuni na vipodozi, zilizobinafsishwa kwa wateja katika Afrika na Mashariki ya Kati.",

    about_why_title_detailed: "Kwa Nini Utuchague?",
    about_why1_detailed: "Ubora Usiofananishwa: Kila bidhaa inakidhi viwango mkali vya utendaji na uaminifu.",
    about_why2_detailed: "Utaalamu wa Sekta: Uelewa wa kina wa michakato ya utengenezaji wa sabuni na vipodozi.",
    about_why3_detailed: "Uzoefu na Msaada Ulio Thibitishwa: Zaidi ya miaka 25 tukiongoza wateja kwa ujuzi wa kiufundi na ushauri wa kitaalamu.",

    about_services_title_detailed: "Huduma Zetu & Ufikiaji wa Kimataifa",
    about_service1_detailed: "Usambazaji mkubwa wa malighafi za kemikali",
    about_service2_detailed: "Suluhisho maalum kwa mahitaji ya viwanda",
    about_service3_detailed: "Usambazaji maalum kwa masoko ya Afrika na Mashariki ya Kati",
    about_global_desc_detailed: "Tunatoa huduma kwa wateja katika Afrika na Mashariki ya Kati, tukihakikisha usambazaji wa bidhaa na suluhisho maalum za mnyororo wa usambazaji unaofaa.",

    about_products_title_detailed: "Orodha ya Bidhaa",
    about_product1_detailed: "Uzalishaji wa Sabuni: Surfactants, builders, na viambajengo vya utendaji",
    about_product2_detailed: "Uzalishaji wa Vipodozi: Viambajengo maalum kwa utunzaji wa ngozi na huduma binafsi",
    about_product3_detailed: "(Orodha ya bidhaa kwa undani inapatikana kwa ombi)",

    // Contact
    contact_title: "Wasiliana Nasi",
    footer_rights: "Haki Zote Zimehifadhiwa"
  }
};

// ===============================
// LANGUAGE SWITCHER
// ===============================
document.getElementById("language").addEventListener("change", function() {
  const lang = this.value;
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if(translations[lang][key]) el.textContent = translations[lang][key];
  });
});