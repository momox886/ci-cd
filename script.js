const blogs = [
    { title: "Clara DevOps", description: "Astuces DevOps, pipelines CI/CD et Kubernetes.", tags:["DevOps", "Web"], likes:0, avatar:"https://i.pravatar.cc/100?img=1" },
    { title: "Voyage & Code", description: "Voyages, nomadisme digital, projets tech.", tags:["Voyage", "Tech"], likes:0, avatar:"https://i.pravatar.cc/100?img=2" },
    { title: "Cuisiner & Programmer", description: "Recettes + programmation moderne.", tags:["Cuisine", "Code"], likes:0, avatar:"https://i.pravatar.cc/100?img=3" },
    { title: "Musique et Dev", description: "Musique, dev et open-source.", tags:["Musique", "Open-source"], likes:0, avatar:"https://i.pravatar.cc/100?img=4" },
    { title: "Tech pour tous", description: "Guides tech simples et efficaces.", tags:["Tech", "Tutoriel"], likes:0, avatar:"https://i.pravatar.cc/100?img=5" },

    { title: "Analyse IA", description: "Articles sur l'IA moderne, LLMs, ML.", tags:["IA", "Machine Learning"], likes:0, avatar:"https://i.pravatar.cc/100?img=6" },
    { title: "Fitness & Code", description: "Optimiser son temps entre sport et dev.", tags:["Sport", "Lifestyle"], likes:0, avatar:"https://i.pravatar.cc/100?img=7" },
    { title: "Backend Mastery", description: "API, Node.js, SQL, optimisation backend.", tags:["Backend", "API"], likes:0, avatar:"https://i.pravatar.cc/100?img=8" },
    { title: "UI Design Pro", description: "Design moderne, UI/UX, tendances web.", tags:["Design", "UI/UX"], likes:0, avatar:"https://i.pravatar.cc/100?img=9" },
    { title: "Crypto Zen", description: "Crypto, blockchain et sécurité web3.", tags:["Crypto", "Blockchain"], likes:0, avatar:"https://i.pravatar.cc/100?img=10" },

    { title: "Python Lab", description: "Expériences Python, data science et scripts.", tags:["Python", "Data"], likes:0, avatar:"https://i.pravatar.cc/100?img=11" },
    { title: "Linux Universe", description: "Linux, self-hosting, serveurs perso.", tags:["Linux", "SysAdmin"], likes:0, avatar:"https://i.pravatar.cc/100?img=12" },
    { title: "Dev Mobile", description: "Android, iOS, Flutter, mobile moderne.", tags:["Mobile", "Flutter"], likes:0, avatar:"https://i.pravatar.cc/100?img=13" },
    { title: "Cloud Simplifié", description: "AWS, GCP, Azure expliqué simplement.", tags:["Cloud", "DevOps"], likes:0, avatar:"https://i.pravatar.cc/100?img=14" },
    { title: "Front-End Art", description: "JS moderne, CSS animations, React.", tags:["Frontend", "React"], likes:0, avatar:"https://i.pravatar.cc/100?img=15" },

    { title: "Tutos Cybersécurité", description: "Sécurité web, attaques, prévention.", tags:["Security", "Cyber"], likes:0, avatar:"https://i.pravatar.cc/100?img=16" },
    { title: "Automobile & Tech", description: "Électrique, IA embarquée, futur auto.", tags:["Auto", "Tech"], likes:0, avatar:"https://i.pravatar.cc/100?img=17" },
    { title: "Jeux Vidéo Studio", description: "Dev jeux vidéo, Unreal, Unity.", tags:["Games", "Unity"], likes:0, avatar:"https://i.pravatar.cc/100?img=18" },
    { title: "Streaming Setup", description: "Setups streaming, caméras et audio.", tags:["Streaming", "Setup"], likes:0, avatar:"https://i.pravatar.cc/100?img=19" },
    { title: "Productivité 2.0", description: "Astuces productivité, organisation.", tags:["Productivité", "Lifestyle"], likes:0, avatar:"https://i.pravatar.cc/100?img=20" },

    { title: "Arduino Lab", description: "Robots, électronique, IoT facile.", tags:["IoT", "Arduino"], likes:0, avatar:"https://i.pravatar.cc/100?img=21" },
    { title: "Photo Créative", description: "Techniques photo modernes, retouche.", tags:["Photo", "Art"], likes:0, avatar:"https://i.pravatar.cc/100?img=22" },
    { title: "Marketing Web", description: "SEO, ads, réseaux sociaux.", tags:["Marketing", "SEO"], likes:0, avatar:"https://i.pravatar.cc/100?img=23" },
    { title: "Hacking Éthique", description: "Pentest, tests de sécurité.", tags:["Hacking", "Security"], likes:0, avatar:"https://i.pravatar.cc/100?img=24" },
    { title: "Robotique Moderne", description: "Robotique simple & avancée.", tags:["Robotique", "Tech"], likes:0, avatar:"https://i.pravatar.cc/100?img=25" },

    { title: "Nature & Code", description: "Équilibre nature / technologie.", tags:["Nature", "Lifestyle"], likes:0, avatar:"https://i.pravatar.cc/100?img=26" },
    { title: "Finance & Data", description: "Data science appliquée aux finances.", tags:["Finance", "Data"], likes:0, avatar:"https://i.pravatar.cc/100?img=27" },
    { title: "Automatisation Pro", description: "Ansible, scripts, tâches auto.", tags:["Automation", "DevOps"], likes:0, avatar:"https://i.pravatar.cc/100?img=28" },
    { title: "Web Performance", description: "Optimisation vitesse, SEO technique.", tags:["Web", "Performance"], likes:0, avatar:"https://i.pravatar.cc/100?img=29" },
    { title: "Eco Tech", description: "Tech durable, low-carbon computing.", tags:["Développement durable", "Tech"], likes:0, avatar:"https://i.pravatar.cc/100?img=30" },

    { title: "Machine Learning Core", description: "ML avancé, modèles, dataset.", tags:["ML", "Data"], likes:0, avatar:"https://i.pravatar.cc/100?img=31" },
    { title: "Crypto Mining", description: "Mining GPU/CPU, rentabilité.", tags:["Crypto", "Mining"], likes:0, avatar:"https://i.pravatar.cc/100?img=32" },
    { title: "Startups & Tech", description: "Créer une startup tech.", tags:["Startup", "Entrepreneur"], likes:0, avatar:"https://i.pravatar.cc/100?img=33" },
    { title: "Batteries & Science", description: "Énergie, batteries, innovations.", tags:["Science", "Énergie"], likes:0, avatar:"https://i.pravatar.cc/100?img=34" },
    { title: "Serveur Maison", description: "Homelab, Proxmox, Docker, NAS.", tags:["Self-hosting", "Proxmox"], likes:0, avatar:"https://i.pravatar.cc/100?img=35" },

    { title: "Keyboard Lovers", description: "Claviers custom, switches, keycaps.", tags:["Hardware", "Keyboards"], likes:0, avatar:"https://i.pravatar.cc/100?img=36" },
    { title: "Retro Gaming", description: "Émulation, consoles rétro.", tags:["Retro", "Gaming"], likes:0, avatar:"https://i.pravatar.cc/100?img=37" },
    { title: "Streaming IA", description: "IA générative pour streamers.", tags:["IA", "Streaming"], likes:0, avatar:"https://i.pravatar.cc/100?img=38" },
    { title: "3D Creation", description: "Modélisation 3D, Blender.", tags:["3D", "Blender"], likes:0, avatar:"https://i.pravatar.cc/100?img=39" },
    { title: "Séries & Tech", description: "Analyse tech dans les séries.", tags:["Séries", "Culture"], likes:0, avatar:"https://i.pravatar.cc/100?img=40" }
];

/* Elements */
const blogList = document.getElementById('blogList');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const tagFilters = document.getElementById('tagFilters');
const toggleThemeBtn = document.getElementById('toggleTheme');
const body = document.body;

/* ---- TAGS DYNAMIQUES ---- */
const allTags = [...new Set(blogs.flatMap(blog => blog.tags))];

allTags.forEach(tag => {
    const btn = document.createElement('span');
    btn.className = "tag";
    btn.textContent = tag;
    btn.addEventListener('click', () => {
        searchInput.value = tag;
        filterAndDisplay();
    });
    tagFilters.appendChild(btn);
});

/* ---- AFFICHAGE ---- */
function displayBlogs(filteredBlogs) {
    blogList.innerHTML = "";

    filteredBlogs.forEach((blog, index) => {
        const card = document.createElement("div");
        card.className = "blog-card";
        card.style.animationDelay = `${index * 0.12}s`;

        card.innerHTML = `
            <img src="${blog.avatar}" />
            <h3>${blog.title}</h3>
            <p>${blog.description}</p>
            <div class="tags">${blog.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
            <button class="like-btn" data-index="${index}">👍 ${blog.likes}</button>
        `;

        blogList.appendChild(card);
    });

    document.querySelectorAll(".like-btn").forEach(btn => {
        btn.addEventListener("click", e => {
            const i = e.target.dataset.index;
            filteredBlogs[i].likes++;
            filterAndDisplay();
        });
    });
}

/* ---- FILTRAGE ---- */
function filterAndDisplay() {
    let filtered = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchInput.value.toLowerCase())
    );

    if (sortSelect.value === "title-asc") filtered.sort((a,b)=>a.title.localeCompare(b.title));
    if (sortSelect.value === "title-desc") filtered.sort((a,b)=>b.title.localeCompare(a.title));
    if (sortSelect.value === "likes") filtered.sort((a,b)=>b.likes - a.likes);

    displayBlogs(filtered);
}

/* ---- DARK MODE ---- */
toggleThemeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");
    toggleThemeBtn.textContent = body.classList.contains("dark") ? "☀️ Mode Clair" : "🌙 Mode Sombre";
});

/* ---- INITIAL ---- */
filterAndDisplay();
