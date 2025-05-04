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
    heading: "Delivering for Employers",
    subheading: "Unmatched Experience",
    detail: `With hands-on roles across capital markets, hedge fund research, and academic leadership,\nI've contributed to portfolios exceeding $5B AUM, led structured trades, and mentored engineering teams.\nMy work spans equity, derivatives, and data automation — always focused on precision and performance.`,
    aum: "Assets Analyzed & Supported<br />Across Equities, Fixed Income & ETFs",
    langLabel: "FR",
    nav: {
      experience: "My Experience",
      education: "Education",
      activity: "Activity",
      market: "Market Insights",
      book: "Book<br>Meeting"
    },
    educationTitle: "Education",
    activityTitle: "Activity",
    hackathonsTitle: "Hackathons Innovation Pitching",
    degreeBachelor: "<b>Bachelor</b> of Management specialization in Data and Information Systems",
    degreeMinor: "<b>Minor</b> in Computer Science",
    degreeCertificate: "<b>Certificate</b> in Quantitative Finance",
    eduDescriptionTitle: "Educated with skills to enhance business value",
    eduDescriptionBody: `My academic journey spans a diverse set of courses—ranging from Java development, web design, and data structures to financial management, derivatives, and quantitative research. This interdisciplinary training sharpens my ability to connect dots across domains, identify operational inefficiencies, and design tech-enabled solutions that create measurable business value. With a strong passion for AI tools and automation, I'm continually evolving—but above all, I learn fast.`,
    eduQuote: `"The most impactful innovators are not the ones who go deep in one thing — they are the ones who connect things no one else sees." — by Steve Jobs, 2005 Stanford Commencement`
  },
  fr: {
    build: "Construire",
    with: "avec",
    name: "Aadhith",
    desc: `Grâce aux données, à la finance et à la technologie, je vise à favoriser<br />l'efficacité des marchés et à contribuer à bâtir les entreprises qui<br />façonnent l'économie de demain.`,
    myExperience: "Mon Expérience",
    heading: "Livrer avec Impact",
    subheading: "Expérience Inégalée",
    detail: `Grâce à des rôles pratiques sur les marchés de capitaux, la recherche en hedge funds et le leadership académique,\nj'ai contribué à des portefeuilles dépassant 5B$, dirigé des transactions structurées et encadré des équipes d'ingénierie.\nMon travail couvre les actions, les dérivés et l'automatisation des données — toujours axé sur la précision et la performance.`,
    aum: "Actifs analysés & soutenus<br />Actions, obligations, FNB",
    langLabel: "EN",
    nav: {
      experience: "Mon Expérience",
      education: "Éducation",
      activity: "Activité",
      market: "Aperçus du Marché",
      book: "Réserver<br>une rencontre"
    },
    educationTitle: "Éducation",
    activityTitle: "Activité",
    hackathonsTitle: "Concours et Hackathons d'Innovation",
    degreeBachelor: "<b>Baccalauréat</b> en gestion, spécialisation en systèmes d'information",
    degreeMinor: "<b>Mineure</b> en informatique",
    degreeCertificate: "<b>Certificat</b> en finance quantitative",
    eduDescriptionTitle: "Formé avec des compétences pour valoriser l'entreprise",
    eduDescriptionBody: `Mon parcours académique couvre un ensemble diversifié de cours — du développement Java, du design web et des structures de données à la gestion financière, aux dérivés et à la recherche quantitative. Cette formation interdisciplinaire aiguise ma capacité à relier les domaines, à identifier les inefficacités opérationnelles et à concevoir des solutions technologiques qui créent de la valeur mesurable. Avec une forte passion pour l'IA et l'automatisation, j'évolue constamment — mais surtout, j'apprends vite.`,
    eduQuote: `"Les innovateurs les plus percutants ne sont pas ceux qui approfondissent un seul domaine — ce sont ceux qui relient des choses que personne d'autre ne voit." — Steve Jobs, discours de Stanford 2005`
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
  // Nav
  document.getElementById("nav-experience").textContent = t.nav.experience;
  document.getElementById("nav-education").textContent = t.nav.education;
  document.getElementById("nav-activity").textContent = t.nav.activity;
  document.getElementById("nav-market-insights").textContent = t.nav.market;
  document.getElementById("nav-book-meeting").innerHTML = t.nav.book;
  // Education
  document.getElementById("education-title").textContent = t.educationTitle;
  document.getElementById("degree-bachelor").innerHTML = t.degreeBachelor;
  document.getElementById("degree-minor").innerHTML = t.degreeMinor;
  document.getElementById("degree-certificate").innerHTML = t.degreeCertificate;
  document.getElementById("edu-description-title").textContent = t.eduDescriptionTitle;
  document.getElementById("edu-description-body").textContent = t.eduDescriptionBody;
  document.getElementById("edu-quote").textContent = t.eduQuote;
  // Activity
  document.getElementById("activity-title").textContent = t.activityTitle;
  document.getElementById("hackathons-title").textContent = t.hackathonsTitle;
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
