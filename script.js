const blogs = [
    { title: "Clara DevOps", description: "Astuces DevOps et pipelines CI/CD.", tags:["DevOps", "Web"], likes:0, avatar:"https://i.pravatar.cc/100?img=1" },
    { title: "Voyage & Code", description: "Voyages, nomadisme digital et projets tech.", tags:["Voyage", "Tech"], likes:0, avatar:"https://i.pravatar.cc/100?img=2" },
    { title: "Cuisiner & Programmer", description: "Recettes + tutoriels programmation.", tags:["Cuisine", "Code"], likes:0, avatar:"https://i.pravatar.cc/100?img=3" },
    { title: "Musique et Dev", description: "Musique, dev et open-source.", tags:["Musique", "Open-source"], likes:0, avatar:"https://i.pravatar.cc/100?img=4" },
    { title: "Tech pour tous", description: "Guides simples et efficaces.", tags:["Tech", "Tutoriel"], likes:0, avatar:"https://i.pravatar.cc/100?img=5" },
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
