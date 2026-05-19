// Resume data — matches the source PDF (CV.pdf) line-for-line.
// No additions, no Tech Lab role here (not on the CV) — that lives on the site/journey only.
window.RESUME = {
  en: {
    name: "Youssef Abdelhedi",
    title: "Data Scientist & AI Engineer",
    contact: [
      { label: "abdelhedi.youssef8@gmail.com", href: "mailto:abdelhedi.youssef8@gmail.com" },
      { label: "+216 92 959 206", href: "tel:+21692959206" },
      { label: "github.com/ChocNote224674", href: "https://github.com/ChocNote224674" },
      { label: "linkedin / Youssef Abdelhedi", href: "https://www.linkedin.com/in/youssef-abdelhedi-893441159" },
      { label: "medium / @abdelhedi.youssef8", href: "https://medium.com/@abdelhedi.youssef8" },
    ],
    summary: "Data scientist with hands-on experience in Python, deep learning and machine learning frameworks. I have developed analytical tools and real-time data pipelines as part of several projects, notably the design of a voice assistant and research internships in artificial intelligence. I have acquired solid expertise in statistical analysis and code development. I am passionate about advancing artificial intelligence and data science through research, with a strong interest in exploring new methodologies and their applications in emerging technologies. I want to pursue research work that combines theoretical innovation and practical implementation in order to contribute to major advances in these fields.",
    education: [
      {
        when: "2023 \u2014 2025",
        where: "Universit\u00e9 Paris-Dauphine \u2014 Tunis",
        what: "Master in Data Science and Artificial Intelligence",
        details: "Key subjects: Optimisation for machine learning, advanced databases (non-classical DBMS), deep learning, graph exploration, data visualisation, reinforcement learning, natural language processing (NLP), knowledge graphs and description logic, reasoning on data, computer vision, data streams, Monte Carlo search and games, data quality.",
      },
      {
        when: "2020 \u2014 2023",
        where: "Universit\u00e9 Paris-Dauphine \u2014 Tunis",
        what: "Bachelor's in Applied Mathematics",
        details: "Key subjects: Statistical modelling, integration, probability, differential calculus, databases, optimisation by numerical methods, theory of languages and compilation.",
      },
    ],
    experience: [
      {
        where: "PwC Tunisia",
        when: "Feb 2025 \u2014 Jul 2025",
        what: "Data Scientist & AI Engineer Intern",
        bullets: [
          "Development of an intelligent chatbot with voice recognition capabilities using the ML frameworks TensorFlow / Keras and the integration of Azure Speech Services.",
          "Implementation of an innovative Cache Augmented Generation approach hybridised with Retrieval Augmented Generation, equipped with a semantic conversational caching system featuring an intelligent scoring system, enabling a significant reduction in response time through adaptive similarity thresholds.",
          "Design of an automated eviction system with composite scoring metrics (recency, frequency, context and semantics) enabling dynamic cache optimisation with real-time performance analytics and adaptive recommendations for continuous system improvement.",
        ],
      },
      {
        where: "Wimbee",
        when: "Jun 2024 \u2014 Sep 2024",
        what: "Data Scientist & AI Engineer Intern",
        bullets: [
          "Design and implementation of an internal voice assistant using TAPAS models to query multi-department databases (Finance, HR, Management) with Python, facilitating efficient data exploration and initial data collection.",
          "Integration of NLP tools, Voice-to-Text features and custom query optimisation algorithms to establish real-time data processing pipelines, improving overall operational performance.",
        ],
      },
      {
        where: "Campusna",
        when: "Mar 2024 \u2014 May 2024",
        what: "Research Intern",
        bullets: [
          "Validation and verification of research results for an academic article on cybersecurity focused on cyber-attack detection.",
          "Implementation and testing of machine learning algorithms to identify different types of cyber threats, analysis of performance metrics and comparison of detection accuracy across different attacks.",
        ],
      },
    ],
    projects: [
      {
        name: "Few-Shot Learning for Face Recognition",
        link: { label: "GitHub Project", href: "https://github.com/ChocNote224674/Face-Recognition-using-Few-Shot-Learning" },
        desc: "This project uses siamese neural networks for few-shot face recognition, requiring only three reference images per identity. The model learns a similarity function via metric learning over thousands of facial identities, enabling it to distinguish identical and different faces by projecting features into an optimised embedding space where similar faces cluster together and dissimilar faces are separated.",
      },
      {
        name: "Parkinson's Disease Detection",
        link: { label: "GitHub Project", href: "https://github.com/ChocNote224674" },
        desc: "This project uses machine learning algorithms including K-Nearest Neighbors (KNN), logistic regression, Naive Bayes classifier and neural networks to detect Parkinson's disease from biomedical voice measurements. The study pre-processes data through feature selection, correlation analysis and standardisation, then evaluates several classification models on a dataset of voice recordings from healthy people and Parkinson's patients.",
      },
      {
        name: "Medium Article on Graph Neural Networks",
        link: { label: "Medium Article", href: "https://medium.com/@abdelhedi.youssef8" },
        desc: "This article explores Graph Neural Networks (GNN) as an integration of graph theory, big data and deep learning to analyse complex relational datasets. The work traces the evolution from traditional graph representations to diverse neural network architectures including Recurrent Neural Networks, Convolutional Neural Networks and Graph Convolutional Networks, addressing scalability challenges in high-dimensional graph data. The article examines advanced techniques such as Graph Attention Networks for weighted node relationships and DeepWalk for node embedding, while highlighting computational limitations and generalisation challenges in current graph representation learning methods.",
      },
    ],
    skills: {
      "Languages": "Arabic: Fluent, French: Fluent, English: Good level",
      "Programming Languages": "Python, Java, R, C",
      "Libraries & Frameworks": "Pandas, NumPy, Sci-Kit Learn, TensorFlow, PyTorch, NLTK, Streamlit, Spark, Hadoop, Redis",
      "Data Skills": "Databases, Statistical Analysis, Machine Learning, Big Data, Data Processing, Data Quality, Deep Learning, Computer Vision, LLM, Voice Recognition, Voice Synthesis",
    },
    leadership: [
      {
        where: "IT LAB",
        when: "2022 \u2014 Present",
        what: "Founder and President",
        bullets: [
          "Founding and leading an association dedicated to helping individuals understand computer science concepts while actively working on specific projects, enabling students to practice self-learning and collaborative work.",
          "Development of technical and soft skills programs combining hands-on project experience and theoretical learning, fostering both individual growth and team collaboration capabilities.",
          "Establishment of sustainable learning frameworks and mentorship programs to support continuous development of skills in computer science and technologies.",
        ],
      },
      {
        where: "Universit\u00e9 Paris-Dauphine Hackathons, Tunis",
        when: "2024",
        what: "Organiser and Participant",
        bullets: [
          "Event organisation: Co-organisation of several university hackathons through the IT LAB club including the AI Hackathon (health and culture, 24h), the MSI Hackathon (Information Systems, Networks and Digital Technologies) in collaboration with PwC (AirBnB data and Paris Olympic Games, 48h), and the 'Hack for Good with Gen AI' hackathon in partnership with Expensya and ThunderCode.",
          "Competitive success: Won the best pitch award in the final competition, demonstrating strong presentation skills and innovative problem-solving abilities in competitive environments under pressure.",
          "Technical leadership: Leading cross-functional teams in the development of AI-powered solutions under tight deadlines, showcasing project management and technical expertise in real-world scenarios.",
        ],
      },
    ],
    sections: {
      summary: "Summary",
      edu: "Education",
      xp: "Professional Experience",
      proj: "Projects",
      skills: "Technical Skills",
      lead: "Community Involvement",
    },
  },

  fr: {
    name: "Youssef Abdelhedi",
    title: "Data Scientist & Ing\u00e9nieur IA",
    contact: [
      { label: "abdelhedi.youssef8@gmail.com", href: "mailto:abdelhedi.youssef8@gmail.com" },
      { label: "+216 92 959 206", href: "tel:+21692959206" },
      { label: "github.com/ChocNote224674", href: "https://github.com/ChocNote224674" },
      { label: "linkedin / Youssef Abdelhedi", href: "https://www.linkedin.com/in/youssef-abdelhedi-893441159" },
      { label: "medium / @abdelhedi.youssef8", href: "https://medium.com/@abdelhedi.youssef8" },
    ],
    summary: "Data scientist avec une exp\u00e9rience pratique en Python, en apprentissage profond et en frameworks de machine learning. J'ai d\u00e9velopp\u00e9 des outils d'analyse et des pipelines de donn\u00e9es en temps r\u00e9el dans le cadre de plusieurs projets, notamment la conception d'un assistant vocal et des stages de recherche en intelligence artificielle. J'ai acquis une solide expertise en analyse statistique et en d\u00e9veloppement de code. Je suis passionn\u00e9 par l'avancement de l'intelligence artificielle et de la science des donn\u00e9es \u00e0 travers la recherche, avec un fort int\u00e9r\u00eat pour l'exploration de nouvelles m\u00e9thodologies et leurs applications dans les technologies \u00e9mergentes. Je souhaite poursuivre des travaux de recherche qui allient innovation th\u00e9orique et mise en \u0153uvre pratique afin de contribuer \u00e0 des avanc\u00e9es majeures dans ces domaines.",
    education: [
      {
        when: "2023 \u2014 2025",
        where: "Universit\u00e9 Paris-Dauphine \u2014 Tunis",
        what: "Master en Science des Donn\u00e9es et Intelligence Artificielle",
        details: "Mati\u00e8res cl\u00e9s : Optimisation pour l'apprentissage automatique, bases de donn\u00e9es avanc\u00e9es (SGBD non classiques), apprentissage profond, exploration de graphes, visualisation de donn\u00e9es, apprentissage par renforcement, traitement du langage naturel (NLP), graphes de connaissances et logique de description, raisonnement sur les donn\u00e9es, vision par ordinateur, flux de donn\u00e9es, recherche Monte Carlo et jeux, qualit\u00e9 des donn\u00e9es.",
      },
      {
        when: "2020 \u2014 2023",
        where: "Universit\u00e9 Paris-Dauphine \u2014 Tunis",
        what: "Licence en Math\u00e9matiques Appliqu\u00e9es",
        details: "Mati\u00e8res cl\u00e9s : Mod\u00e9lisation statistique, int\u00e9gration, probabilit\u00e9s, calcul diff\u00e9rentiel, bases de donn\u00e9es, optimisation par m\u00e9thodes num\u00e9riques, th\u00e9orie des langages et compilation.",
      },
    ],
    experience: [
      {
        where: "PwC Tunisie",
        when: "F\u00e9v 2025 \u2014 Juil 2025",
        what: "Stagiaire Data Scientist & Ing\u00e9nieur IA",
        bullets: [
          "D\u00e9veloppement d'un chatbot intelligent avec capacit\u00e9s de reconnaissance vocale en utilisant les frameworks ML TensorFlow / Keras et l'int\u00e9gration d'Azure Speech Services.",
          "Mise en \u0153uvre d'une approche innovante de Cache Augmented Generation hybrid\u00e9e avec Retrieval Augmented Generation, dot\u00e9e d'un syst\u00e8me de mise en cache conversationnel s\u00e9mantique avec syst\u00e8me de notation intelligent, permettant une r\u00e9duction significative du temps de r\u00e9ponse gr\u00e2ce \u00e0 des seuils de similarit\u00e9 adaptatifs.",
          "Conception d'un syst\u00e8me d'\u00e9viction automatis\u00e9 avec des m\u00e9triques de notation composites (r\u00e9cence, fr\u00e9quence, contexte et s\u00e9mantique) permettant l'optimisation dynamique du cache avec des analyses de performance en temps r\u00e9el et des recommandations adaptatives pour l'am\u00e9lioration continue du syst\u00e8me.",
        ],
      },
      {
        where: "Wimbee",
        when: "Juin 2024 \u2014 Sept 2024",
        what: "Stagiaire Data Scientist & Ing\u00e9nieur IA",
        bullets: [
          "Conception et mise en \u0153uvre d'un assistant vocal interne utilisant des mod\u00e8les TAPAS pour interroger les bases de donn\u00e9es multi-d\u00e9partements (Finance, RH, Management) avec Python, facilitant l'exploration efficace des donn\u00e9es et la collecte initiale de donn\u00e9es.",
          "Int\u00e9gration d'outils NLP, de fonctionnalit\u00e9s Voice-to-Text et d'algorithmes d'optimisation de requ\u00eates personnalis\u00e9s pour \u00e9tablir des pipelines de traitement de donn\u00e9es en temps r\u00e9el am\u00e9liorant les performances op\u00e9rationnelles globales.",
        ],
      },
      {
        where: "Campusna",
        when: "Mars 2024 \u2014 Mai 2024",
        what: "Stagiaire en Recherche",
        bullets: [
          "Validation et v\u00e9rification des r\u00e9sultats de recherche pour un article acad\u00e9mique sur la cybers\u00e9curit\u00e9 ax\u00e9 sur la d\u00e9tection des cyberattaques.",
          "Mise en \u0153uvre et test d'algorithmes d'apprentissage automatique pour identifier diff\u00e9rents types de menaces cybern\u00e9tiques, analyse des m\u00e9triques de performance et comparaison de la pr\u00e9cision de d\u00e9tection entre diff\u00e9rentes attaques.",
        ],
      },
    ],
    projects: [
      {
        name: "Apprentissage Few-Shot pour la Reconnaissance Faciale",
        link: { label: "Projet GitHub", href: "https://github.com/ChocNote224674/Face-Recognition-using-Few-Shot-Learning" },
        desc: "Ce projet utilise des r\u00e9seaux de neurones siamois pour la reconnaissance faciale few-shot, ne n\u00e9cessitant que trois images de r\u00e9f\u00e9rence par identit\u00e9. Le mod\u00e8le apprend une fonction de similarit\u00e9 par apprentissage m\u00e9trique sur des milliers d'identit\u00e9s faciales, lui permettant de distinguer les visages identiques et diff\u00e9rents en projetant les caract\u00e9ristiques dans un espace d'embedding optimis\u00e9 o\u00f9 les visages similaires se regroupent et les visages dissemblables sont s\u00e9par\u00e9s.",
      },
      {
        name: "D\u00e9tection de la Maladie de Parkinson",
        link: { label: "Projet GitHub", href: "https://github.com/ChocNote224674" },
        desc: "Ce projet utilise des algorithmes d'apprentissage automatique incluant K-Nearest Neighbors (KNN), r\u00e9gression logistique, classificateur Naive Bayes et r\u00e9seaux de neurones pour d\u00e9tecter la maladie de Parkinson \u00e0 partir de mesures vocales biom\u00e9dicales. L'\u00e9tude pr\u00e9traite les donn\u00e9es par s\u00e9lection de caract\u00e9ristiques, analyse de corr\u00e9lation et standardisation, puis \u00e9value plusieurs mod\u00e8les de classification sur un ensemble de donn\u00e9es d'enregistrements vocaux de personnes saines et de patients atteints de Parkinson.",
      },
      {
        name: "Article Medium sur les R\u00e9seaux de Neurones de Graphes",
        link: { label: "Article Medium", href: "https://medium.com/@abdelhedi.youssef8" },
        desc: "Cet article explore les R\u00e9seaux de Neurones de Graphes (GNN) comme une int\u00e9gration de la th\u00e9orie des graphes, du big data et de l'apprentissage profond pour analyser des ensembles de donn\u00e9es relationnelles complexes. Le travail retrace l'\u00e9volution depuis les repr\u00e9sentations graphiques traditionnelles jusqu'aux diverses architectures de r\u00e9seaux de neurones incluant les R\u00e9seaux de Neurones R\u00e9currents, les R\u00e9seaux de Neurones Convolutifs et les R\u00e9seaux de Neurones Convolutifs de Graphes, en abordant les d\u00e9fis de scalabilit\u00e9 dans les donn\u00e9es graphiques de haute dimension. L'article examine des techniques avanc\u00e9es telles que les Graph Attention Networks pour les relations de n\u0153uds pond\u00e9r\u00e9es et DeepWalk pour l'embedding de n\u0153uds, tout en mettant en \u00e9vidence les limitations computationnelles et les d\u00e9fis de g\u00e9n\u00e9ralisation dans les m\u00e9thodes actuelles d'apprentissage de repr\u00e9sentation de graphes.",
      },
    ],
    skills: {
      "Langues": "Arabe : Courant, Fran\u00e7ais : Courant, Anglais : Bon niveau",
      "Langages de Programmation": "Python, Java, R, C",
      "Biblioth\u00e8ques & Frameworks": "Pandas, NumPy, Sci-Kit Learn, TensorFlow, PyTorch, NLTK, Streamlit, Spark, Hadoop, Redis",
      "Comp\u00e9tences en Donn\u00e9es": "Bases de donn\u00e9es, Analyse statistique, Machine Learning, Big Data, Traitement de donn\u00e9es, Qualit\u00e9 des donn\u00e9es, Deep Learning, Vision par ordinateur, LLM, Reconnaissance vocale, Synth\u00e8se vocale",
    },
    leadership: [
      {
        where: "IT LAB",
        when: "2022 \u2014 Pr\u00e9sent",
        what: "Pr\u00e9sident et Fondateur",
        bullets: [
          "Fondation et direction d'une association d\u00e9di\u00e9e \u00e0 aider les individus \u00e0 comprendre les concepts de l'informatique tout en travaillant activement sur des projets sp\u00e9cifiques, permettant aux \u00e9tudiants de pratiquer l'auto-apprentissage et le travail collaboratif.",
          "D\u00e9veloppement de programmes de comp\u00e9tences techniques et soft skills combinant exp\u00e9rience pratique de projets et apprentissage th\u00e9orique, favorisant \u00e0 la fois la croissance individuelle et les capacit\u00e9s de collaboration en \u00e9quipe.",
          "\u00c9tablissement de cadres d'apprentissage durables et de programmes de mentorat pour soutenir le d\u00e9veloppement continu des comp\u00e9tences en informatique et technologies.",
        ],
      },
      {
        where: "Hackathons de l'Universit\u00e9 Paris-Dauphine, Tunis",
        when: "2024",
        what: "Organisateur et Participant",
        bullets: [
          "Organisation d'\u00e9v\u00e9nements : Co-organisation de plusieurs hackathons universitaires \u00e0 travers le club IT LAB incluant le Hackathon IA (sant\u00e9 et culture, 24h), le Hackathon MSI (Syst\u00e8mes d'Information, R\u00e9seaux et Technologies Num\u00e9riques) en collaboration avec PwC (donn\u00e9es AirBnB et Jeux Olympiques de Paris, 48h), et le hackathon 'Hack for Good with Gen AI' en partenariat avec Expensya et ThunderCode.",
          "R\u00e9ussite comp\u00e9titive : Remport\u00e9 le prix du meilleur pitch lors de la comp\u00e9tition finale, d\u00e9montrant de solides comp\u00e9tences en pr\u00e9sentation et des capacit\u00e9s innovantes de r\u00e9solution de probl\u00e8mes dans des environnements comp\u00e9titifs sous pression.",
          "Leadership technique : Direction d'\u00e9quipes transversales dans le d\u00e9veloppement de solutions aliment\u00e9es par l'IA sous des d\u00e9lais serr\u00e9s, mettant en valeur la gestion de projet et l'expertise technique dans des sc\u00e9narios du monde r\u00e9el.",
        ],
      },
    ],
    sections: {
      summary: "R\u00e9sum\u00e9",
      edu: "Formation",
      xp: "Exp\u00e9rience Professionnelle",
      proj: "Projets",
      skills: "Comp\u00e9tences Techniques",
      lead: "Vie Associative",
    },
  },
};

// === LaTeX source builders ===
function escTex(s) {
  if (!s) return "";
  // Use placeholder chars (private-use Unicode) so escaping special chars doesn't
  // also break LaTeX commands we generate (e.g. \textbackslash{} contains {}).
  const PH_BACK = "\u0001"; // backslash placeholder
  const PH_TILDE = "\u0002"; // tilde placeholder
  const PH_CARET = "\u0003"; // caret placeholder
  let out = String(s)
    .replace(/\\/g, PH_BACK)
    .replace(/~/g, PH_TILDE)
    .replace(/\^/g, PH_CARET)
    .replace(/([&%$#_{}])/g, "\\$1")
    .replace(new RegExp(PH_BACK, "g"), "\\textbackslash{}")
    .replace(new RegExp(PH_TILDE, "g"), "\\textasciitilde{}")
    .replace(new RegExp(PH_CARET, "g"), "\\textasciicircum{}")
    .replace(/—/g, "---")
    .replace(/–/g, "--")
    .replace(/·/g, "$\\cdot$")
    .replace(/é/g, "\\'e").replace(/è/g, "\\`e").replace(/ê/g, "\\^e").replace(/ë/g, '\\"e')
    .replace(/à/g, "\\`a").replace(/â/g, "\\^a").replace(/ä/g, '\\"a')
    .replace(/î/g, "\\^i").replace(/ï/g, '\\"i')
    .replace(/ô/g, "\\^o").replace(/ö/g, '\\"o')
    .replace(/ù/g, "\\`u").replace(/û/g, "\\^u").replace(/ü/g, '\\"u')
    .replace(/ç/g, "\\c{c}")
    .replace(/É/g, "\\'E")
    .replace(/œ/g, "\\oe{}").replace(/Œ/g, "\\OE{}")
    .replace(/→/g, "$\\to$").replace(/←/g, "$\\leftarrow$");
  return out;
}

window.buildTex = function(lang) {
  const r = window.RESUME[lang];
  const isFr = lang === "fr";
  const L = isFr
    ? { babel: "french" }
    : { babel: "english" };

  const eduItems = r.education.map(e =>
    `  \\cventry{${escTex(e.when)}}{${escTex(e.what)}}{${escTex(e.where)}}{}{}{${escTex(e.details)}}`).join("\n");

  const xpItems = r.experience.map(e => {
    const items = e.bullets.map(b => `    \\item ${escTex(b)}`).join("\n");
    return `  \\cventry{${escTex(e.when)}}{${escTex(e.what)}}{${escTex(e.where)}}{}{}{\n    \\begin{itemize}\n${items}\n    \\end{itemize}}`;
  }).join("\n");

  const projItems = r.projects.map(p =>
    `  \\cvitem{\\textbf{${escTex(p.name)}}}{${escTex(p.desc)} \\href{${escTex(p.link.href)}}{(${escTex(p.link.label)})}}`
  ).join("\n");

  const skillItems = Object.entries(r.skills).map(([k, v]) =>
    `  \\cvitem{${escTex(k)}}{${escTex(v)}}`).join("\n");

  const leadItems = r.leadership.map(e => {
    const items = e.bullets.map(b => `    \\item ${escTex(b)}`).join("\n");
    return `  \\cventry{${escTex(e.when)}}{${escTex(e.what)}}{${escTex(e.where)}}{}{}{\n    \\begin{itemize}\n${items}\n    \\end{itemize}}`;
  }).join("\n");

  return `%% =========================================================
%% ${escTex(r.name)} --- Curriculum Vitae (${lang.toUpperCase()})
%% Compile: xelatex cv.tex
%% Class: moderncv (banking style)
%% =========================================================
\\documentclass[11pt,a4paper,sans]{moderncv}

\\moderncvstyle{banking}
\\moderncvcolor{blue}
\\usepackage[scale=0.82]{geometry}
\\usepackage[utf8]{inputenc}
\\usepackage[T1]{fontenc}
\\usepackage[${L.babel}]{babel}
\\usepackage{hyperref}

%% ---------- Personal data ----------
\\name{${escTex(r.name.split(" ")[0])}}{${escTex(r.name.split(" ").slice(1).join(" "))}}
\\title{${escTex(r.title)}}
\\email{abdelhedi.youssef8@gmail.com}
\\phone[mobile]{+216~92~959~206}
\\social[github]{ChocNote224674}
\\social[linkedin]{youssef-abdelhedi-893441159}

\\begin{document}
\\makecvtitle

%% ---------- Summary ----------
\\section{${escTex(r.sections.summary)}}
${escTex(r.summary)}

%% ---------- Education ----------
\\section{${escTex(r.sections.edu)}}
${eduItems}

%% ---------- Experience ----------
\\section{${escTex(r.sections.xp)}}
${xpItems}

%% ---------- Projects ----------
\\section{${escTex(r.sections.proj)}}
${projItems}

%% ---------- Skills ----------
\\section{${escTex(r.sections.skills)}}
${skillItems}

%% ---------- Leadership ----------
\\section{${escTex(r.sections.lead)}}
${leadItems}

\\end{document}
`;
};

// crude syntax highlighting for the modal
window.highlightTex = function(src) {
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return esc(src)
    .replace(/(%%[^\n]*)/g, '<span class="com">$1</span>')
    .replace(/(\\documentclass|\\usepackage|\\begin|\\end|\\section|\\subsection|\\name|\\title|\\email|\\phone|\\social|\\moderncvstyle|\\moderncvcolor|\\makecvtitle)/g, '<span class="kw">$1</span>')
    .replace(/(\\cventry|\\cvitem|\\item|\\textbf|\\textit|\\href)/g, '<span class="cmd">$1</span>')
    .replace(/(\{[^{}\n]{0,60}\})/g, (m) => '<span class="arg">' + m + '</span>');
};
