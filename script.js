function speakName() {
  const utterance = new SpeechSynthesisUtterance("Aadhith");
  utterance.lang = "en-US";
  speechSynthesis.speak(utterance);
}

const translations = {
  en: {
    build: "Build",
    with: "with",
    name: "Aadhith",
    desc: `Through data, finance, and technology, I aim to drive<br />efficient markets and help build the businesses shaping<br />the future economy.`,
    myExperience: "My Experience",
    heading: "Delivering with Impact",
    subheading: "Unmatched Experience",
    detail: `With hands-on roles across capital markets, hedge fund research, and academic leadership,
    I've contributed to portfolios exceeding $5B AUM, led structured trades, and mentored engineering teams.
    My work spans equity, derivatives, and data automation — always focused on precision and performance.`,
    aum: "Assets Analyzed & Supported<br />Across Equities, Fixed Income & ETFs",
    langLabel: "FR"
  },
  fr: {
    build: "Construire",
    with: "avec",
    name: "Aadhith",
    desc: `Grâce aux données, à la finance et à la technologie, je vise à favoriser<br />
    l'efficacité des marchés et à contribuer à bâtir les entreprises qui<br />
    façonnent l'économie de demain.`,
    myExperience: "Mon Expérience",
    heading: "Un Impact Réel",
    subheading: "Expérience Inégalée",
    detail: `Grâce à des rôles pratiques sur les marchés de capitaux, la recherche en hedge funds et le leadership académique,
    j'ai contribué à des portefeuilles dépassant 5B$, dirigé des transactions structurées et encadré des équipes d'ingénierie.`,
    aum: "Actifs analysés & soutenus<br />Actions, obligations, FNB",
    langLabel: "EN"
  }
};

let currentLang = "en";

document.getElementById("langToggle").addEventListener("click", (e) => {
  e.preventDefault();
  currentLang = currentLang === "en" ? "fr" : "en";
  const t = translations[currentLang];
  document.getElementById("build").textContent = t.build;
  document.getElementById("with").textContent = t.with;
  document.getElementById("name").textContent = t.name;
  document.getElementById("hero-description").innerHTML = t.desc;
  document.getElementById("exp-title").textContent = t.myExperience;
  document.getElementById("exp-heading").textContent = t.heading;
  document.getElementById("exp-subheading").textContent = t.subheading;
  document.getElementById("exp-details").innerHTML = t.detail;
  document.getElementById("aum-desc").innerHTML = t.aum;
  document.getElementById("langToggle").innerHTML = `<img src="images/image.png" height="18" style="margin-right: 6px; vertical-align: middle;" />${t.langLabel}`;
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  mobileMenuToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!mainNav.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
      mainNav.classList.remove('active');
    }
  });
});
