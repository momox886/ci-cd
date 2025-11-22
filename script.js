// Exemple de blogs utilisateurs
const blogs = [
    { title: "Le blog de Clara", description: "Partage d'astuces DevOps et développement web." },
    { title: "Voyage & Code", description: "Blog sur les voyages et projets tech autour du monde." },
    { title: "Cuisiner & Programmer", description: "Recettes et tutoriels de code pour tous." },
    { title: "Musique et Dev", description: "Découvertes musicales et projets open-source." },
    { title: "Tech pour tous", description: "Conseils, tutoriels et avis tech." },
];

// Référence à la section blog
const blogList = document.getElementById('blogList');
const searchInput = document.getElementById('searchInput');

// Fonction pour afficher les blogs
function displayBlogs(filteredBlogs) {
    blogList.innerHTML = '';
    filteredBlogs.forEach(blog => {
        const card = document.createElement('div');
        card.className = 'blog-card';
        card.innerHTML = `
            <h3>${blog.title}</h3>
            <p>${blog.description}</p>
        `;
        blogList.appendChild(card);
    });
}

// Filtrer les blogs
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = blogs.filter(blog => blog.title.toLowerCase().includes(query));
    displayBlogs(filtered);
});

// Affichage initial
displayBlogs(blogs);
