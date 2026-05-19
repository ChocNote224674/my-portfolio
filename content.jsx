// Bilingual content + LaTeX sources
window.CONTENT = {
  en: {
    nav: { about: "About", academic: "Academic", work: "Work", research: "Research", projects: "Projects", publications: "Writing", community: "Community", resume: "Resume", contact: "Contact" },
    hero: {
      status: "Open to research & AI roles",
      title1: "Youssef",
      title2: "Abdelhedi",
      role: "AI Engineer · Data Scientist",
      tagline: <><p>Data scientist with practical experience in Python, deep learning, and machine learning frameworks. I've developed analytical tools and real-time data pipelines across multiple projects, including designing voice assistants and conducting AI research internships.</p><p>I hold a Master's in Data Science and Artificial Intelligence from Université Paris-Dauphine, where I specialized in optimization for machine learning, deep learning, computer vision, natural language processing, and reinforcement learning.</p><p>Currently working as an AI Consultant at PwC, I combine theoretical innovation with practical implementation to contribute to major advances in AI and data science.</p></>,
      cta1: "Read the journey",
      cta2: "Open resume",
      stats: [
      { k: "Current", v: "PwC", small: "AI Consultant · Digital Coach" },
      { k: "Specialty", v: "Applied ML & LLMs", small: "Voice · RAG · Vision" }]

    },
    about: {
      eyebrow: "About",
      title: <>A data scientist who builds <em>systems</em>, not just notebooks.</>,
      body: [
      <>I trained at <strong>Université Paris-Dauphine</strong> in Applied Mathematics and then a Master's in Data Science and AI, focusing on optimisation, deep learning, NLP, computer vision and reinforcement learning.</>,
      <>Across three internships and a consulting role, I've shipped real systems — a voice-enabled chatbot using TAPAS to query enterprise databases, a hybrid CAG/RAG pipeline with semantic conversational caching, and ML detectors for cybersecurity research.</>,
      <>I write on Medium about the math underneath deep learning — interpretability, CNN vs RNN, graph neural networks — and lead <strong>IT LAB</strong>, a student association I founded in 2022.</>],

      sidebar: [
      { k: "Education", v: "M.Sc. Data Science & AI", small: "Paris-Dauphine, 2023–2025" },
      { k: "Languages", v: "AR · FR · EN", small: "Native · Native · Proficient" },
      { k: "Stack", v: "Python · PyTorch · TF", small: "Azure · Spark · Redis" },
      { k: "Writing", v: "4 essays on Medium", small: "Interpretability · GNN · NLP" }]

    },
    research: {
      eyebrow: "Research interests",
      title: <>Four threads I keep <em>pulling on</em>.</>,
      cells: [
      { icon: "△", title: "Deep architectures", body: "Graph neural networks, Siamese networks, few-shot learning and embedding geometries." },
      { icon: "◯", title: "Language & voice", body: "LLMs, retrieval-augmented generation, voice-to-text, conversational caching." },
      { icon: "◇", title: "Vision", body: "Face recognition with metric learning, real-time video analytics, sports analysis." },
      { icon: "□", title: "Real-time systems", body: "Streaming pipelines, eviction policies, semantic similarity thresholds, perf engineering." }]

    },
    journey: {
      academic: {
        eyebrow: "Academic journey",
        title: <>The schools that <em>shaped me</em>.</>,
        lede: "From the Bac to a master's in AI — scroll the timeline, the character moves with you.",
      },
      work: {
        eyebrow: "Work experience",
        title: <>The places I <em>shipped</em>.</>,
        lede: "Internships, hackathons and consulting roles — where the math gets used.",
      },
      milestones: [
      {
        kind: "academic",
        year: "2020", short: "Bac", pose: "study",
        title: "Baccalauréat",
        org: "Pierre Mendès France High school",
        body: "Finished high school and chose to keep mathematics as the spine of everything that came next.",
        tags: ["High school", "Math focus"]
      },
      {
        kind: "academic",
        year: "2020 → 2023", short: "Licence", pose: "study",
        title: "Bachelor's in Applied Mathematics",
        org: "Université Paris-Dauphine",
        body: "Three years of statistical modelling, integration, probability, differential calculus, databases, optimisation by numerical methods, and theory of languages and compilation. The math that everything else stands on.",
        tags: ["Statistics", "Probability", "Optimisation", "Databases", "Compilation"]
      },
      {
        kind: "academic",
        year: "2023 → 2025", short: "M.Sc.", pose: "study",
        title: "Master in Data Science & AI",
        org: "Université Paris-Dauphine",
        body: "Optimisation for ML, advanced (NoSQL) databases, deep learning, graph mining, data visualisation, reinforcement learning, NLP, knowledge graphs and description logic, reasoning on data, computer vision, data streams, Monte Carlo search and games, data quality.",
        tags: ["Deep Learning", "NLP", "CV", "RL", "Knowledge Graphs", "Monte Carlo"]
      },
      {
        kind: "work",
        year: "Mar — May 2024", short: "Campusna", pose: "research",
        title: "Research intern — Cybersecurity ML",
        org: "Campusna",
        body: "Validated and verified research results for an academic article on cybersecurity focused on cyber-attack detection. Implemented and tested machine learning algorithms to identify different types of cyber threats, analysed performance metrics and compared detection accuracy across different attacks.",
        tags: ["Research", "ML", "Cybersecurity", "Validation"]
      },
      {
        kind: "work",
        year: "Jun — Sep 2024", short: "Wimbee", pose: "voice",
        title: "Data Scientist & AI Engineer intern",
        org: "Wimbee",
        body: "Designed and implemented an internal voice assistant using TAPAS models to query multi-department databases (Finance, HR, Management) with Python, facilitating efficient data exploration. Integrated NLP tools, Voice-to-Text features and custom query optimisation to establish real-time data processing pipelines.",
        tags: ["TAPAS", "Voice-to-Text", "NLP", "Python", "Real-time"]
      },
      {
        kind: "work",
        year: "Feb — Jul 2025", short: "PwC intern", pose: "code",
        title: "Data Scientist & AI Engineer intern",
        org: "PwC - Tunisia",
        body: "Developed an intelligent voice-capable chatbot with TensorFlow/Keras and Azure Speech Services. Built a hybrid Cache-Augmented + Retrieval-Augmented Generation system with semantic conversational caching and adaptive similarity thresholds, significantly reducing response time. Designed an automated eviction system with composite metrics (recency, frequency, context, semantics) for dynamic cache optimisation.",
        tags: ["RAG", "CAG", "TensorFlow", "Azure", "Redis"]
      },
      {
        kind: "work",
        year: "2025+", short: "Tech Lab", pose: "vr",
        title: "Data & AI Consultant · Digital Coach",
        org: "PwC — Tunisia",
        image: { light: "images/vr-experience.jpg", dark: "images/vr-experience.jpg", alt: "VR experience at the PwC Tech Lab" },
        body: "Data & AI Consultant at PwC and Digital Coach at the Tech Lab — a PwC unit that develops solutions with emerging technologies (AI, VR) across healthcare, industry, finance and insurance. Working on a governmental mission supporting the operationalisation and digitalisation of municipalities across Tunisia with the Ministry of Communication Technologies and the Presidency of Government; data scientist on an evaluation mission for World Bank Group programs. Appeared as Digital Coach at the AI Forward Summit and trained a telecom operator's teams on machine learning.",
        tags: ["AI", "VR", "Consulting", "Gov. Tech", "Workshops", "Training"]
      }]

    },
    publications: {
      eyebrow: "Writing",
      title: <>Four essays on the <em>math</em> behind deep learning.</>,
      lede: "Long-form work on Medium — interpretability, architectures, graph data, OLTP vs OLAP.",
      items: [
      {
        n: "01",
        title: "Rethinking the Black Box",
        subtitle: "Neural Network Interpretability",
        desc: "Why neural networks behave like black boxes, and the techniques — saliency maps, SHAP, LIME, attention rollout — that crack them open.",
        tags: ["Interpretability", "XAI", "Deep Learning"],
        url: "https://medium.com/@abdelhedi.youssef8"
      },
      {
        n: "02",
        title: "CNN vs RNN",
        subtitle: "Two Architectures, Two Visions of Intelligence",
        desc: "A side-by-side reading of convolutional and recurrent networks — what each one was built to see, and where they meet today.",
        tags: ["CNN", "RNN", "Architectures"],
        url: "https://medium.com/@abdelhedi.youssef8"
      },
      {
        n: "03",
        title: "Graph Neural Networks",
        subtitle: "Graph Theory meets Deep Learning",
        desc: "From classical graph representations to GCNs, Graph Attention Networks and DeepWalk — and the scalability frontier they bump into.",
        tags: ["GNN", "GCN", "GAT", "DeepWalk"],
        url: "https://medium.com/@abdelhedi.youssef8"
      },
      {
        n: "04",
        title: "Data Mining: OLTP vs OLAP",
        subtitle: "Two regimes for the same data",
        desc: "Transactional vs analytical systems — schemas, workloads, freshness windows — and why most pipelines end up reconciling both.",
        tags: ["OLTP", "OLAP", "Data Warehousing"],
        url: "https://medium.com/@abdelhedi.youssef8"
      }]

    },
    community: {
      eyebrow: "Leadership & community",
      title: <>The work I do <em>outside</em> the screen.</>,
      lede: "Founded and run a student association, organised hackathons, won the best pitch — the bits of the journey that aren't on a server somewhere.",
      itlab: {
        title: "IT LAB",
        sub: "Founder & President · 2022 → present",
        body: "Founded and lead a student association dedicated to helping individuals understand computer-science concepts while shipping real projects together. Built technical & soft-skills programs that blend project-based learning with theory, and durable mentorship frameworks for continuous skill development."
      },
      hackathons: {
        title: "Hackathon Organiser & Best Pitch Winner",
        sub: "Paris-Dauphine · with PwC, Expensya, ThunderCode · 2024",
        body: "Co-organised the AI Hackathon (health & culture, 24h), the MSI Hackathon with PwC (AirBnB + Paris Olympics data, 48h) and Hack for Good with Gen AI. Won Best Pitch in the final competition; led cross-functional teams shipping AI-powered prototypes under tight deadlines."
      }
    },
    projects: {
      eyebrow: "Selected projects",
      title: <>Six things I <em>built</em> and shipped.</>,
      lede: "Open-source experiments and coursework that doubled as labs for ideas in the journey.",
      items: [
      { n: "01", title: "Few-Shot Face Recognition", desc: "Siamese networks that learn a similarity function from three reference images per identity — metric learning in an embedding space.", tags: ["Siamese", "Few-Shot", "Metric Learning"], url: "https://github.com/ChocNote224674/Face-Recognition-using-Few-Shot-Learning" },
      { n: "02", title: "Parkinson's Disease Detection", desc: "KNN, logistic regression, Naive Bayes and a neural network detecting Parkinson's from biomedical voice features.", tags: ["Classification", "Healthcare", "Voice"], url: "https://github.com/ChocNote224674" },
      { n: "03", title: "Decision Under Uncertainty", desc: "Wald (Maximin), Maximax, Minimax regret, Hurwicz, Laplace — decision-making tools when the world refuses to be predictable.", tags: ["Decision Theory", "Python"], url: "https://github.com/ChocNote224674/decision-in-uncertainty" },
      { n: "04", title: "Used-Car Price Regression", desc: "A from-scratch linear regression for second-hand car pricing — features, multicollinearity, residuals, the whole walk.", tags: ["Regression", "EDA"], url: "https://github.com/ChocNote224674/Used-Car-Prediction-Linear-Regression-" },
      { n: "05", title: "PCA & MCA in R", desc: "Dimensionality reduction with Principal and Multiple Correspondence Analysis — exploring categorical structure visually.", tags: ["R", "PCA", "MCA"], url: "https://github.com/ChocNote224674/Data-Analysis-Using-PCA-and-MCA-with-R" },
      { n: "06", title: "Khawarzmi Hackathon", desc: "Hackathon entry — an AI prototype scoped under pressure and shipped on a deadline. Notebook + writeup.", tags: ["Hackathon", "Prototype"], url: "https://github.com/ChocNote224674/Khawarzmi-project-hackathon" }]

    },
    resume: {
      eyebrow: "Curriculum Vitae",
      title: <>A real, LaTeX-typeset resume — <em>in the browser</em>.</>,
      lede: "Rendered with LaTeX-style typography (Latin Modern, justified, hyphenated). Toggle EN/FR, print directly to PDF, or read the .tex source.",
      printBtn: "Print to PDF",
      sourceBtn: "View .tex source",
      copyBtn: "Copy source",
      copied: "Copied",
      summary: "Data scientist with hands-on experience in Python, deep learning and ML frameworks. I've shipped analytical tools and real-time data pipelines across multiple projects — including voice assistants and AI research internships. I want to keep doing research that joins theoretical innovation to practical implementation.",
      sections: {
        edu: "Education",
        xp: "Professional experience",
        proj: "Projects",
        skills: "Technical skills",
        lead: "Leadership & community"
      },
      labels: { lang: "Languages", prog: "Programming", libs: "Libraries & frameworks", data: "Data & AI" }
    },
    contact: {
      eyebrow: "Get in touch",
      title: <>I'm always up for a conversation about <em>research</em>, <em>AI</em>, or just a coffee.</>,
      cells: [
      { k: "Email", v: "abdelhedi.youssef8@gmail.com", href: "mailto:abdelhedi.youssef8@gmail.com" },
      { k: "Phone", v: "+216 92 959 206", href: "tel:+21692959206" },
      { k: "GitHub", v: "@ChocNote224674", href: "https://github.com/ChocNote224674" },
      { k: "LinkedIn", v: "Youssef Abdelhedi", href: "https://www.linkedin.com/in/youssef-abdelhedi-893441159" },
      { k: "Medium", v: "@abdelhedi.youssef8", href: "https://medium.com/@abdelhedi.youssef8" }]

    },
    footer: { left: "© 2026 Youssef Abdelhedi", right: "Hand-built · No template · Crimson Pro × JetBrains Mono" }
  },

  fr: {
    nav: { about: "À propos", academic: "Académique", work: "Expérience", research: "Recherche", projects: "Projets", publications: "Publications", community: "Asso.", resume: "CV", contact: "Contact" },
    hero: {
      status: "Ouvert aux postes en recherche & IA",
      title1: "Youssef",
      title2: "Abdelhedi",
      role: "Ingénieur IA · Data Scientist",
      tagline: <><p>Data scientist avec une expérience pratique en Python, deep learning et frameworks de machine learning. J'ai développé des outils d'analyse et des pipelines de données en temps réel sur plusieurs projets, notamment la conception d'assistants vocaux et des stages de recherche en IA.</p><p>Je suis titulaire d'un Master en Science des Données et Intelligence Artificielle de l'Université Paris-Dauphine, où je me suis spécialisé en optimisation pour le machine learning, deep learning, vision par ordinateur, traitement du langage naturel et apprentissage par renforcement.</p><p>Actuellement Consultant IA chez PwC, j'allie innovation théorique et mise en œuvre pratique pour contribuer à des avancées majeures en IA et en science des données.</p></>,
      cta1: "Lire le parcours",
      cta2: "Ouvrir le CV",
      stats: [
      { k: "Actuellement", v: "PwC", small: "Consultant IA · Digital Coach" },
      { k: "Spécialité", v: "ML & LLMs appliqués", small: "Voix · RAG · Vision" }]

    },
    about: {
      eyebrow: "À propos",
      title: <>Un data scientist qui construit des <em>systèmes</em>, pas seulement des notebooks.</>,
      body: [
      <>Formé à <strong>l'Université Paris-Dauphine — Tunis</strong> en Mathématiques Appliquées puis en Master Science des Données et IA, je me suis concentré sur l'optimisation, le deep learning, le NLP, la vision par ordinateur et l'apprentissage par renforcement.</>,
      <>À travers trois stages et un poste de consultant, j'ai livré des systèmes réels — un chatbot vocal utilisant TAPAS pour interroger des bases de données d'entreprise, une pipeline hybride CAG/RAG avec cache conversationnel sémantique, et des détecteurs ML pour la recherche en cybersécurité.</>,
      <>J'écris sur Medium à propos des fondations mathématiques du deep learning — interprétabilité, CNN vs RNN, réseaux de neurones de graphes — et je dirige <strong>IT LAB</strong>, une association étudiante que j'ai fondée en 2022.</>],

      sidebar: [
      { k: "Formation", v: "M.Sc. Science des Données & IA", small: "Paris-Dauphine, 2023–2025" },
      { k: "Langues", v: "AR · FR · EN", small: "Natif · Courant · Bon niveau" },
      { k: "Stack", v: "Python · PyTorch · TF", small: "Azure · Spark · Redis" },
      { k: "Publications", v: "4 articles sur Medium", small: "Interprétabilité · GNN · NLP" }]

    },
    research: {
      eyebrow: "Intérêts de recherche",
      title: <>Quatre fils que je continue de <em>tirer</em>.</>,
      cells: [
      { icon: "△", title: "Architectures profondes", body: "Graph Neural Networks, réseaux siamois, apprentissage few-shot et géométries d'embedding." },
      { icon: "◯", title: "Langage & voix", body: "LLMs, retrieval-augmented generation, voice-to-text, cache conversationnel." },
      { icon: "◇", title: "Vision", body: "Reconnaissance faciale par metric learning, analytique vidéo temps réel, analyse sportive." },
      { icon: "□", title: "Systèmes temps réel", body: "Pipelines de streaming, politiques d'éviction, seuils de similarité sémantique, ingénierie des perfs." }]

    },
    journey: {
      academic: {
        eyebrow: "Parcours académique",
        title: <>Les écoles qui m'ont <em>formé</em>.</>,
        lede: "Du Bac au master en IA — fais défiler, le personnage avance avec toi.",
      },
      work: {
        eyebrow: "Expérience pro",
        title: <>Les endroits où j'ai <em>livré</em>.</>,
        lede: "Stages, hackathons et postes de consultant — là où les maths servent.",
      },
      milestones: [
      {
        kind: "academic",
        year: "2020", short: "Bac", pose: "study",
        title: "Baccalauréat",
        org: "Lycée Pierre Mendès France",
        body: "Fin du secondaire. Choix de garder les mathématiques comme colonne vertébrale de tout ce qui suivra.",
        tags: ["Lycée", "Math"]
      },
      {
        kind: "academic",
        year: "2020 → 2023", short: "Licence", pose: "study",
        title: "Licence en Mathématiques Appliquées",
        org: "Université Paris-Dauphine",
        body: "Trois années de modélisation statistique, intégration, probabilités, calcul différentiel, bases de données, optimisation par méthodes numériques, théorie des langages et compilation. La base mathématique sur laquelle tout repose.",
        tags: ["Statistiques", "Probabilités", "Optimisation", "BDD", "Compilation"]
      },
      {
        kind: "academic",
        year: "2023 → 2025", short: "Master", pose: "study",
        title: "Master en Science des Données et IA",
        org: "Université Paris-Dauphine",
        body: "Optimisation pour le ML, bases de données avancées (SGBD non classiques), deep learning, exploration de graphes, visualisation, apprentissage par renforcement, NLP, graphes de connaissances et logique de description, raisonnement sur les données, vision par ordinateur, flux de données, recherche Monte Carlo et jeux, qualité des données.",
        tags: ["Deep Learning", "NLP", "Vision", "RL", "Graphes", "Monte Carlo"]
      },
      {
        kind: "work",
        year: "Mars — Mai 2024", short: "Campusna", pose: "research",
        title: "Stagiaire en Recherche — ML cybersécurité",
        org: "Campusna",
        body: "Validation et vérification des résultats de recherche pour un article académique sur la cybersécurité axé sur la détection des cyberattaques. Mise en œuvre et test d'algorithmes ML pour identifier différents types de menaces cybernétiques, analyse des métriques de performance et comparaison de la précision de détection entre différentes attaques.",
        tags: ["Recherche", "ML", "Cybersécurité", "Validation"]
      },
      {
        kind: "work",
        year: "Juin — Sept 2024", short: "Wimbee", pose: "voice",
        title: "Stagiaire Data Scientist & Ingénieur IA",
        org: "Wimbee",
        body: "Conception et mise en œuvre d'un assistant vocal interne utilisant des modèles TAPAS pour interroger les bases multi-départements (Finance, RH, Management) avec Python, facilitant l'exploration efficace des données. Intégration d'outils NLP, fonctionnalités Voice-to-Text et algorithmes d'optimisation de requêtes pour des pipelines temps réel.",
        tags: ["TAPAS", "Voice-to-Text", "NLP", "Python", "Temps réel"]
      },
      {
        kind: "work",
        year: "Fév — Juil 2025", short: "PwC stage", pose: "code",
        title: "Stagiaire Data Scientist & Ingénieur IA",
        org: "PwC Tunisie",
        body: "Développement d'un chatbot intelligent avec reconnaissance vocale (TensorFlow/Keras + Azure Speech Services). Approche hybride Cache-Augmented + Retrieval-Augmented Generation avec cache conversationnel sémantique et seuils de similarité adaptatifs, réduisant significativement le temps de réponse. Système d'éviction automatisé sur métriques composites (récence, fréquence, contexte, sémantique).",
        tags: ["RAG", "CAG", "TensorFlow", "Azure", "Redis"]
      },
      {
        kind: "work",
        year: "2025+", short: "Tech Lab", pose: "vr",
        title: "Consultant Data & IA · Digital Coach",
        org: "PwC — Tunisie · Tech Lab",
        image: { light: "images/vr-experience.jpg", dark: "images/vr-experience.jpg", alt: "Expérience VR au PwC Tech Lab" },
        body: "Consultant Data & IA chez PwC et Digital Coach au Tech Lab — une unité de PwC qui développe des solutions avec les technologies émergentes (IA, VR) dans la santé, l'industrie, la finance et l'assurance. Mission gouvernementale d'aide à l'opérationnalisation et à la digitalisation des municipalités à travers la Tunisie avec le Ministère des Technologies de la Communication et la Présidence du Gouvernement ; data scientist sur une mission d'évaluation de programmes du Groupe Banque Mondiale. Intervenu en tant que Digital Coach à l'AI Forward Summit et formateur en machine learning pour un opérateur télécom.",
        tags: ["IA", "VR", "Consulting", "Gov. Tech", "Ateliers", "Formation"]
      }]

    },
    publications: {
      eyebrow: "Publications",
      title: <>Quatre essais sur les <em>maths</em> derrière le deep learning.</>,
      lede: "Articles long-format sur Medium — interprétabilité, architectures, données en graphes, OLTP vs OLAP.",
      items: [
      {
        n: "01",
        title: "Repenser la boîte noire",
        subtitle: "L'interprétabilité des réseaux de neurones",
        desc: "Pourquoi les réseaux de neurones se comportent comme des boîtes noires, et les techniques — saliency maps, SHAP, LIME, attention rollout — qui les ouvrent.",
        tags: ["Interprétabilité", "XAI", "Deep Learning"],
        url: "https://medium.com/@abdelhedi.youssef8"
      },
      {
        n: "02",
        title: "CNN vs RNN",
        subtitle: "Deux architectures, deux visions de l'intelligence",
        desc: "Lecture côte-à-côte des réseaux convolutifs et récurrents — ce que chacun a été pensé pour voir, et où ils se rejoignent aujourd'hui.",
        tags: ["CNN", "RNN", "Architectures"],
        url: "https://medium.com/@abdelhedi.youssef8"
      },
      {
        n: "03",
        title: "Graph Neural Networks",
        subtitle: "Théorie des graphes & Deep Learning",
        desc: "Des représentations classiques aux GCN, Graph Attention Networks et DeepWalk — et la frontière de scalabilité qu'ils heurtent.",
        tags: ["GNN", "GCN", "GAT", "DeepWalk"],
        url: "https://medium.com/@abdelhedi.youssef8"
      },
      {
        n: "04",
        title: "Data Mining : OLTP vs OLAP",
        subtitle: "Deux régimes pour les mêmes données",
        desc: "Systèmes transactionnels vs analytiques — schémas, charges, fenêtres de fraîcheur — et pourquoi la plupart des pipelines finissent par les réconcilier.",
        tags: ["OLTP", "OLAP", "Data Warehousing"],
        url: "https://medium.com/@abdelhedi.youssef8"
      }]

    },
    community: {
      eyebrow: "Vie associative",
      title: <>Le travail que je fais <em>hors</em> écran.</>,
      lede: "Fondé et dirigé une association étudiante, organisé des hackathons, remporté le meilleur pitch — les morceaux du parcours qui ne sont pas sur un serveur quelque part.",
      itlab: {
        title: "IT LAB",
        sub: "Fondateur & Président · 2022 → présent",
        body: "Fondation et direction d'une association étudiante dédiée à aider les individus à comprendre les concepts d'informatique tout en menant des projets concrets ensemble. Construction de programmes techniques et soft-skills mêlant apprentissage par projet et théorie, et cadres de mentorat durables pour le développement continu des compétences."
      },
      hackathons: {
        title: "Organisation & Meilleur Pitch",
        sub: "Paris-Dauphine · avec PwC, Expensya, ThunderCode · 2024",
        body: "Co-organisation du Hackathon IA (santé & culture, 24h), du Hackathon MSI avec PwC (données AirBnB + JO de Paris, 48h) et de Hack for Good with Gen AI. Prix du meilleur pitch en finale ; direction d'équipes transversales livrant des prototypes IA sous délais serrés."
      }
    },
    projects: {
      eyebrow: "Projets choisis",
      title: <>Six choses que j'ai <em>construites</em>.</>,
      lede: "Expérimentations open-source et travaux de cours qui ont servi de laboratoire pour les idées du parcours.",
      items: [
      { n: "01", title: "Reconnaissance faciale Few-Shot", desc: "Réseaux siamois apprenant une fonction de similarité à partir de trois images de référence par identité — metric learning dans un espace d'embedding.", tags: ["Siamois", "Few-Shot", "Metric Learning"], url: "https://github.com/ChocNote224674/Face-Recognition-using-Few-Shot-Learning" },
      { n: "02", title: "Détection de la maladie de Parkinson", desc: "KNN, régression logistique, Naive Bayes et réseau de neurones détectant Parkinson à partir de caractéristiques vocales biomédicales.", tags: ["Classification", "Santé", "Voix"], url: "https://github.com/ChocNote224674" },
      { n: "03", title: "Décision sous incertitude", desc: "Wald (Maximin), Maximax, Minimax regret, Hurwicz, Laplace — outils de décision quand le monde refuse d'être prévisible.", tags: ["Théorie de la décision", "Python"], url: "https://github.com/ChocNote224674/decision-in-uncertainty" },
      { n: "04", title: "Régression prix voitures d'occasion", desc: "Régression linéaire from-scratch pour le prix des véhicules d'occasion — features, multicolinéarité, résidus, la promenade complète.", tags: ["Régression", "EDA"], url: "https://github.com/ChocNote224674/Used-Car-Prediction-Linear-Regression-" },
      { n: "05", title: "PCA & MCA en R", desc: "Réduction de dimension par analyses en composantes principales et correspondances multiples — exploration visuelle de structure catégorielle.", tags: ["R", "PCA", "MCA"], url: "https://github.com/ChocNote224674/Data-Analysis-Using-PCA-and-MCA-with-R" },
      { n: "06", title: "Hackathon Khawarzmi", desc: "Participation hackathon — prototype IA scopé sous pression et livré dans les délais. Notebook + writeup.", tags: ["Hackathon", "Prototype"], url: "https://github.com/ChocNote224674/Khawarzmi-project-hackathon" }]

    },
    resume: {
      eyebrow: "CV",
      title: <>Un vrai CV mis en forme LaTeX — <em>dans le navigateur</em>.</>,
      lede: "Rendu avec une typographie style LaTeX (Latin Modern, justifié, césure). Bascule EN/FR, impression directe en PDF, ou lecture de la source .tex.",
      printBtn: "Imprimer en PDF",
      sourceBtn: "Voir source .tex",
      copyBtn: "Copier source",
      copied: "Copié",
      summary: "Data scientist avec une expérience pratique en Python, en apprentissage profond et en frameworks de machine learning. J'ai développé des outils d'analyse et des pipelines de données en temps réel — y compris la conception d'assistants vocaux et des stages de recherche en IA. Je souhaite poursuivre des travaux de recherche qui allient innovation théorique et mise en œuvre pratique.",
      sections: {
        edu: "Formation",
        xp: "Expérience professionnelle",
        proj: "Projets",
        skills: "Compétences techniques",
        lead: "Vie associative"
      },
      labels: { lang: "Langues", prog: "Langages", libs: "Bibliothèques & frameworks", data: "Données & IA" }
    },
    contact: {
      eyebrow: "Me contacter",
      title: <>Toujours disponible pour parler <em>recherche</em>, <em>IA</em>, ou autour d'un café.</>,
      cells: [
      { k: "Email", v: "abdelhedi.youssef8@gmail.com", href: "mailto:abdelhedi.youssef8@gmail.com" },
      { k: "Téléphone", v: "+216 92 959 206", href: "tel:+21692959206" },
      { k: "GitHub", v: "@ChocNote224674", href: "https://github.com/ChocNote224674" },
      { k: "LinkedIn", v: "Youssef Abdelhedi", href: "https://www.linkedin.com/in/youssef-abdelhedi-893441159" },
      { k: "Medium", v: "@abdelhedi.youssef8", href: "https://medium.com/@abdelhedi.youssef8" }]

    },
    footer: { left: "© 2026 Youssef Abdelhedi", right: "Fait main · Sans template · Crimson Pro × JetBrains Mono" }
  }
};