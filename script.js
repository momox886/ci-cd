const blogs = [
    { title: "Clara DevOps", description: "Astuces DevOps et web.", tags: ["DevOps","Web"], likes:0, avatar:"https://i.pravatar.cc/100?img=1" },
    { title: "Voyage & Code", description: "Voyages et projets tech.", tags:["Voyage","Tech"], likes:0, avatar:"https://i.pravatar.cc/100?img=2" },
    { title: "Cuisiner & Programmer", description: "Recettes et tutoriels code.", tags:["Cuisine","Code"], likes:0, avatar:"https://i.pravatar.cc/100?img=3" },
    { title: "Musique et Dev", description: "Musique et projets open-source.", tags:["Musique","Open-source"], likes:0, avatar:"https://i.pravatar.cc/100?img=4" },
    { title: "Tech pour tous", description: "Conseils et tutoriels tech.", tags:["Tech","Tutoriel"], likes:0, avatar:"https://i.pravatar.cc/100?img=5" },
];

const blogList = document.getElementById('blogList');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const tagFilters = document.getElementById('tagFilters');
const toggleThemeBtn = document.getElementById('toggleTheme');
const body = document.body;

// Fonction pour créer les filtres tags
const allTags = [...new Set(blogs.flatMap(blog => blog.tags))];
allTags.forEach(tag => {
    const btn = document.createElement('button');
    btn.className = 'tag';
    btn.textContent = tag;
    btn.addEventListener('click', () => {
        searchInput.value = tag;
        filterAndDisplay();
    });
    tagFilters.appendChild(btn);
});

// Fonction pour afficher blogs
function displayBlogs(filteredBlogs){
    blogList.innerHTML = '';
    filteredBlogs.forEach((blog,index) => {
        const card = document.createElement('div');
        card.className='blog-card';
        card.innerHTML=`
            <img class="avatar" src="${blog.avatar}" alt="Avatar ${blog.title}">
            <h3>${blog.title}</h3>
            <p>${blog.description}</p>
            <div class="tags">${blog.tags.map(tag=>`<span class="tag">${tag}</span>`).join('')}</div>
            <button class="like-btn" data-index="${index}">👍 ${blog.likes}</button>
        `;
        blogList.appendChild(card);
    });

    // Like button events
    document.querySelectorAll('.like-btn').forEach(btn=>{
        btn.addEventListener('click',(e)=>{
            const i = e.target.dataset.index;
            blogs[i].likes +=1;
            displayBlogs(filteredBlogs);
        });
    });
}

// Fonction de filtrage et tri
function filterAndDisplay(){
    let filtered = blogs.filter(blog=>blog.title.toLowerCase().includes(searchInput.value.toLowerCase()));
    if(sortSelect.value==='title-asc') filtered.sort((a,b)=>a.title.localeCompare(b.title));
    if(sortSelect.value==='title-desc') filtered.sort((a,b)=>b.title.localeCompare(a.title));
    displayBlogs(filtered);
}

// Events recherche et tri
searchInput.addEventListener('input', filterAndDisplay);
sortSelect.addEventListener('change', filterAndDisplay);

// Dark mode toggle
toggleThemeBtn.addEventListener('click',()=>{
    body.classList.toggle('dark');
    body.classList.toggle('light');
    toggleThemeBtn.textContent = body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Affichage initial
filterAndDisplay();
