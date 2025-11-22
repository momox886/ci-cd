const blogs = [
    { title: "Le blog de Clara", description: "Astuces DevOps et web.", tags: ["DevOps","Web"], likes: 0 },
    { title: "Voyage & Code", description: "Voyages et projets tech.", tags: ["Voyage","Tech"], likes: 0 },
    { title: "Cuisiner & Programmer", description: "Recettes et tutoriels code.", tags: ["Cuisine","Code"], likes: 0 },
    { title: "Musique et Dev", description: "Musique et projets open-source.", tags: ["Musique","Open-source"], likes: 0 },
    { title: "Tech pour tous", description: "Conseils et tutoriels tech.", tags: ["Tech","Tutoriel"], likes: 0 },
];

const blogList = document.getElementById('blogList');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');

function displayBlogs(filteredBlogs) {
    blogList.innerHTML = '';
    filteredBlogs.forEach((blog, index) => {
        const card = document.createElement('div');
        card.className = 'blog-card';

        // Contenu HTML
        card.innerHTML = `
            <h3>${blog.title}</h3>
            <p>${blog.description}</p>
            <div class="tags">${blog.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
            <button class="like-btn" data-index="${index}">👍 ${blog.likes}</button>
        `;
        blogList.appendChild(card);
    });

    // Ajouter les événements "like"
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const i = e.target.dataset.index;
            blogs[i].likes += 1;
            displayBlogs(filteredBlogs); // Redessine les blogs pour mettre à jour le like
        });
    });
}

// Filtrer les blogs
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = blogs.filter(blog => blog.title.toLowerCase().includes(query));
    displayBlogs(filtered);
});

// Trier les blogs
sortSelect.addEventListener('change', (e) => {
    let sortedBlogs = [...blogs];
    if (e.target.value === 'title-asc') sortedBlogs.sort((a,b) => a.title.localeCompare(b.title));
    if (e.target.value === 'title-desc') sortedBlogs.sort((a,b) => b.title.localeCompare(a.title));
    displayBlogs(sortedBlogs);
});

// Affichage initial
displayBlogs(blogs);
