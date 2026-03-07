// LANGUAGE SWITCHER
document.getElementById("language").addEventListener("change", function() {
  const lang = this.value;
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if(translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
});

