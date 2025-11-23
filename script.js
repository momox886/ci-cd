/* ========== DATASET (40 items) ========== */
const blogs = [
  { title: "Clara DevOps", description: "Astuces DevOps, pipelines CI/CD et Kubernetes.", tags:["DevOps","Web"], likes:0, avatar:"https://i.pravatar.cc/100?img=1" },
  { title: "Voyage & Code", description: "Voyages, nomadisme digital, projets tech.", tags:["Voyage","Tech"], likes:0, avatar:"https://i.pravatar.cc/100?img=2" },
  { title: "Cuisiner & Programmer", description: "Recettes + programmation moderne.", tags:["Cuisine","Code"], likes:0, avatar:"https://i.pravatar.cc/100?img=3" },
  { title: "Musique et Dev", description: "Musique, dev et open-source.", tags:["Musique","Open-source"], likes:0, avatar:"https://i.pravatar.cc/100?img=4" },
  { title: "Tech pour tous", description: "Guides tech simples et efficaces.", tags:["Tech","Tutoriel"], likes:0, avatar:"https://i.pravatar.cc/100?img=5" },
  { title: "Analyse IA", description: "Articles sur l'IA moderne, LLMs, ML.", tags:["IA","Machine Learning"], likes:0, avatar:"https://i.pravatar.cc/100?img=6" },
  { title: "Fitness & Code", description: "Optimiser son temps entre sport et dev.", tags:["Sport","Lifestyle"], likes:0, avatar:"https://i.pravatar.cc/100?img=7" },
  { title: "Backend Mastery", description: "API, Node.js, SQL, optimisation backend.", tags:["Backend","API"], likes:0, avatar:"https://i.pravatar.cc/100?img=8" },
  { title: "UI Design Pro", description: "Design moderne, UI/UX, tendances web.", tags:["Design","UI/UX"], likes:0, avatar:"https://i.pravatar.cc/100?img=9" },
  { title: "Crypto Zen", description: "Crypto, blockchain et sécurité web3.", tags:["Crypto","Blockchain"], likes:0, avatar:"https://i.pravatar.cc/100?img=10" },
  { title: "Python Lab", description: "Expériences Python, data science et scripts.", tags:["Python","Data"], likes:0, avatar:"https://i.pravatar.cc/100?img=11" },
  { title: "Linux Universe", description: "Linux, self-hosting, serveurs perso.", tags:["Linux","SysAdmin"], likes:0, avatar:"https://i.pravatar.cc/100?img=12" },
  { title: "Dev Mobile", description: "Android, iOS, Flutter, mobile moderne.", tags:["Mobile","Flutter"], likes:0, avatar:"https://i.pravatar.cc/100?img=13" },
  { title: "Cloud Simplifié", description: "AWS, GCP, Azure expliqué simplement.", tags:["Cloud","DevOps"], likes:0, avatar:"https://i.pravatar.cc/100?img=14" },
  { title: "Front-End Art", description: "JS moderne, CSS animations, React.", tags:["Frontend","React"], likes:0, avatar:"https://i.pravatar.cc/100?img=15" },
  { title: "Tutos Cybersécurité", description: "Sécurité web, attaques, prévention.", tags:["Security","Cyber"], likes:0, avatar:"https://i.pravatar.cc/100?img=16" },
  { title: "Automobile & Tech", description: "Électrique, IA embarquée, futur auto.", tags:["Auto","Tech"], likes:0, avatar:"https://i.pravatar.cc/100?img=17" },
  { title: "Jeux Vidéo Studio", description: "Dev jeux vidéo, Unreal, Unity.", tags:["Games","Unity"], likes:0, avatar:"https://i.pravatar.cc/100?img=18" },
  { title: "Streaming Setup", description: "Setups streaming, caméras et audio.", tags:["Streaming","Setup"], likes:0, avatar:"https://i.pravatar.cc/100?img=19" },
  { title: "Productivité 2.0", description: "Astuces productivité, organisation.", tags:["Productivité","Lifestyle"], likes:0, avatar:"https://i.pravatar.cc/100?img=20" },
  { title: "Arduino Lab", description: "Robots, électronique, IoT facile.", tags:["IoT","Arduino"], likes:0, avatar:"https://i.pravatar.cc/100?img=21" },
  { title: "Photo Créative", description: "Techniques photo modernes, retouche.", tags:["Photo","Art"], likes:0, avatar:"https://i.pravatar.cc/100?img=22" },
  { title: "Marketing Web", description: "SEO, ads, réseaux sociaux.", tags:["Marketing","SEO"], likes:0, avatar:"https://i.pravatar.cc/100?img=23" },
  { title: "Hacking Éthique", description: "Pentest, tests de sécurité.", tags:["Hacking","Security"], likes:0, avatar:"https://i.pravatar.cc/100?img=24" },
  { title: "Robotique Moderne", description: "Robotique simple & avancée.", tags:["Robotique","Tech"], likes:0, avatar:"https://i.pravatar.cc/100?img=25" },
  { title: "Nature & Code", description: "Équilibre nature / technologie.", tags:["Nature","Lifestyle"], likes:0, avatar:"https://i.pravatar.cc/100?img=26" },
  { title: "Finance & Data", description: "Data science appliquée aux finances.", tags:["Finance","Data"], likes:0, avatar:"https://i.pravatar.cc/100?img=27" },
  { title: "Automatisation Pro", description: "Ansible, scripts, tâches auto.", tags:["Automation","DevOps"], likes:0, avatar:"https://i.pravatar.cc/100?img=28" },
  { title: "Web Performance", description: "Optimisation vitesse, SEO technique.", tags:["Web","Performance"], likes:0, avatar:"https://i.pravatar.cc/100?img=29" },
  { title: "Eco Tech", description: "Tech durable, low-carbon computing.", tags:["Développement durable","Tech"], likes:0, avatar:"https://i.pravatar.cc/100?img=30" },
  { title: "Machine Learning Core", description: "ML avancé, modèles, dataset.", tags:["ML","Data"], likes:0, avatar:"https://i.pravatar.cc/100?img=31" },
  { title: "Crypto Mining", description: "Mining GPU/CPU, rentabilité.", tags:["Crypto","Mining"], likes:0, avatar:"https://i.pravatar.cc/100?img=32" },
  { title: "Startups & Tech", description: "Créer une startup tech.", tags:["Startup","Entrepreneur"], likes:0, avatar:"https://i.pravatar.cc/100?img=33" },
  { title: "Batteries & Science", description: "Énergie, batteries, innovations.", tags:["Science","Énergie"], likes:0, avatar:"https://i.pravatar.cc/100?img=34" },
  { title: "Serveur Maison", description: "Homelab, Proxmox, Docker, NAS.", tags:["Self-hosting","Proxmox"], likes:0, avatar:"https://i.pravatar.cc/100?img=35" },
  { title: "Keyboard Lovers", description: "Claviers custom, switches, keycaps.", tags:["Hardware","Keyboards"], likes:0, avatar:"https://i.pravatar.cc/100?img=36" },
  { title: "Retro Gaming", description: "Émulation, consoles rétro.", tags:["Retro","Gaming"], likes:0, avatar:"https://i.pravatar.cc/100?img=37" },
  { title: "Streaming IA", description: "IA générative pour streamers.", tags:["IA","Streaming"], likes:0, avatar:"https://i.pravatar.cc/100?img=38" },
  { title: "3D Creation", description: "Modélisation 3D, Blender.", tags:["3D","Blender"], likes:0, avatar:"https://i.pravatar.cc/100?img=39" },
  { title: "Séries & Tech", description: "Analyse tech dans les séries.", tags:["Séries","Culture"], likes:0, avatar:"https://i.pravatar.cc/100?img=40" }
];

/* ========== CONFIG & STATE ========== */
const PAGE_SIZE = 9;
let currentPage = 1;
let activeList = []; // array of {item, idx}
let isListView = false;
let infinite = false;
let showOnlyFavs = false;

/* ========== DOM ========= */
const blogList = document.getElementById('blogList');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const tagFilters = document.getElementById('tagFilters');
const prevPage = document.getElementById('prevPage');
const nextPage = document.getElementById('nextPage');
const pageNumbers = document.getElementById('pageNumbers');
const pagination = document.getElementById('pagination');
const infiniteToggle = document.getElementById('infiniteToggle');
const toggleView = document.getElementById('toggleView');
const toggleTheme = document.getElementById('toggleTheme');
const showFavsBtn = document.getElementById('showFavs');
const loader = document.getElementById('loader');

/* favorites in localStorage */
const FAV_KEY = 'bc3_favs';
let favs = JSON.parse(localStorage.getItem(FAV_KEY) || '[]');
function saveFavs(){ localStorage.setItem(FAV_KEY, JSON.stringify(favs)); }

/* Build tag filters (unique) */
const allTags = [...new Set(blogs.flatMap(b => b.tags))];
allTags.forEach(t => {
  const btn = document.createElement('button');
  btn.className = 'tag';
  btn.textContent = t;
  btn.addEventListener('click', () => {
    searchInput.value = t;
    currentPage = 1;
    render();
  });
  tagFilters.appendChild(btn);
});

/* UTIL: paginate array-of-objects */
function paginateArray(arr, page, size){
  const start = (page-1)*size;
  return arr.slice(start, start+size);
}

/* Render page numbers */
function renderPageNumbers(totalPages){
  pageNumbers.innerHTML = '';
  for(let i=1;i<=totalPages;i++){
    const b = document.createElement('button');
    b.textContent = i;
    if(i===currentPage) b.classList.add('active-page');
    b.addEventListener('click', ()=>{ currentPage = i; render(); window.scrollTo({top:120,behavior:'smooth'}); });
    pageNumbers.appendChild(b);
  }
}

/* Create a card for element of shape {item, idx} */
function createCardWrapper(wrapper, localIdx){
  const b = wrapper.item;
  const globalIndex = wrapper.idx;
  const card = document.createElement('div');
  card.className = 'blog-card';
  card.style.animationDelay = `${(localIdx % PAGE_SIZE) * 0.09}s`;

  const favMark = favs.includes(globalIndex) ? '★' : '☆';
  card.innerHTML = `
    <div class="fav-indicator" data-idx="${globalIndex}">${favMark}</div>
    <img alt="${b.title}" src="${b.avatar}" loading="lazy" />
    <h3>${b.title}</h3>
    <p>${b.description}</p>
    <div class="tags">${b.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    <div style="display:flex;justify-content:center;">
      <button class="like-btn" data-idx="${globalIndex}">👍 ${b.likes || 0}</button>
    </div>
  `;

  // open modal on card click (but not when clicking like/fav)
  card.addEventListener('click', (e)=>{
    if(e.target.closest('.like-btn') || e.target.closest('.fav-indicator')) return;
    openModal(b, globalIndex);
  });

  return card;
}

/* MAIN RENDER function */
function render(){
  // filter search & favs; build activeList as wrappers {item, idx}
  const q = searchInput.value.trim().toLowerCase();
  let filtered = blogs
    .map((item, idx) => ({item, idx}))
    .filter(wrapper => {
      if(showOnlyFavs && !favs.includes(wrapper.idx)) return false;
      if(!q) return true;
      const hay = (wrapper.item.title + ' ' + wrapper.item.tags.join(' ') + ' ' + wrapper.item.description).toLowerCase();
      return hay.includes(q);
    });

  // sort on wrapper.item
  if(sortSelect.value === 'title-asc') filtered.sort((a,b)=>a.item.title.localeCompare(b.item.title));
  if(sortSelect.value === 'title-desc') filtered.sort((a,b)=>b.item.title.localeCompare(a.item.title));
  if(sortSelect.value === 'likes') filtered.sort((a,b)=> (b.item.likes||0) - (a.item.likes||0));

  activeList = filtered;

  // clear
  blogList.innerHTML = '';

  if(infinite){
    // render up to currentPage * PAGE_SIZE items
    const toRender = filtered.slice(0, currentPage * PAGE_SIZE);
    toRender.forEach((wrapper, idx) => {
      const card = createCardWrapper(wrapper, idx);
      blogList.appendChild(card);
    });
    pagination.style.display = 'none';
  } else {
    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    currentPage = Math.min(currentPage, totalPages);
    const pageItems = paginateArray(filtered, currentPage, PAGE_SIZE);
    pageItems.forEach((wrapper, idx) => {
      const card = createCardWrapper(wrapper, idx);
      blogList.appendChild(card);
    });
    renderPageNumbers(totalPages);
    pagination.style.display = (totalPages > 1) ? 'flex' : 'none';
  }

  /* attach events */
  document.querySelectorAll('.like-btn').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.stopPropagation();
      const idx = Number(btn.dataset.idx);
      blogs[idx].likes = (blogs[idx].likes || 0) + 1;
      render();
    });
  });

  document.querySelectorAll('.fav-indicator').forEach(span=>{
    span.addEventListener('click', (e)=>{
      e.stopPropagation();
      const idx = Number(span.dataset.idx);
      if(favs.includes(idx)) favs = favs.filter(x=>x!==idx);
      else favs.push(idx);
      saveFavs();
      render();
    });
  });

  /* apply list view class */
  document.body.classList.toggle('list-view', isListView);

  /* GSAP entry animation */
  requestAnimationFrame(()=>{
    if(window.gsap){
      gsap.utils.toArray('.blog-card').forEach((el,i)=>{
        gsap.fromTo(el, {opacity:0, y:18, scale:0.995}, {opacity:1, y:0, scale:1, duration:0.45, delay: i*0.04, ease:'power2.out'});
      });
    } else {
      // fallback CSS animation: ensure opacity set
      document.querySelectorAll('.blog-card').forEach(el => { el.style.opacity = 1; el.style.transform = 'none'; });
    }
  });
}

/* PAGINATION controls */
prevPage.addEventListener('click', ()=>{ if(currentPage>1){ currentPage--; render(); window.scrollTo({top:120,behavior:'smooth'});} });
nextPage.addEventListener('click', ()=>{ const totalPages = Math.max(1, Math.ceil(activeList.length / PAGE_SIZE)); if(currentPage<totalPages){ currentPage++; render(); window.scrollTo({top:120,behavior:'smooth'});} });

/* infinite toggle */
infiniteToggle.addEventListener('change', ()=>{
  infinite = infiniteToggle.checked;
  currentPage = 1;
  if(infinite) window.addEventListener('scroll', handleInfiniteScroll);
  else window.removeEventListener('scroll', handleInfiniteScroll);
  render();
});

function handleInfiniteScroll(){
  const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 220;
  if(nearBottom){
    const maxPages = Math.ceil(activeList.length / PAGE_SIZE);
    if(currentPage < maxPages){
      currentPage++;
      render();
    }
  }
}

/* view toggle */
toggleView.addEventListener('click', ()=>{ isListView = !isListView; render(); });

/* theme toggle */
toggleTheme.addEventListener('click', ()=>{ document.body.classList.toggle('dark'); document.body.classList.toggle('light'); });

/* show favorites */
showFavsBtn.addEventListener('click', ()=>{
  showOnlyFavs = !showOnlyFavs;
  showFavsBtn.textContent = showOnlyFavs ? '✅ Favoris' : '⭐ Favoris';
  currentPage = 1;
  render();
});

/* search & sort */
searchInput.addEventListener('input', ()=>{ currentPage = 1; render(); });
sortSelect.addEventListener('change', ()=>{ currentPage = 1; render(); });

/* ========== MODAL ========== */
const modal = document.getElementById('modal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalAvatar = document.getElementById('modalAvatar');
const modalTags = document.getElementById('modalTags');
const modalLike = document.getElementById('modalLike');
const modalFav = document.getElementById('modalFav');
let modalIndex = null;

function openModal(blog, idx){
  modalIndex = idx;
  modalTitle.textContent = blog.title;
  modalDescription.textContent = blog.description + " — description étendue pour test d'UI.";
  modalAvatar.src = blog.avatar;
  modalTags.innerHTML = blog.tags.map(t=>`<span class="tag">${t}</span>`).join(' ');
  modalLike.textContent = `👍 ${blog.likes || 0}`;
  modalFav.textContent = favs.includes(idx) ? '★ Favori' : '☆ Ajouter aux favoris';
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden','false');
  if(window.gsap) gsap.fromTo('.modal-panel',{scale:0.96,opacity:0},{scale:1,opacity:1,duration:.35,ease:'back.out(1.2)'});
}
function closeModal(){ modal.style.display = 'none'; modal.setAttribute('aria-hidden','true'); }

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
window.addEventListener('keydown',(e)=>{ if(e.key==='Escape') closeModal(); });

modalLike.addEventListener('click', ()=>{
  if(modalIndex!==null){ blogs[modalIndex].likes = (blogs[modalIndex].likes || 0) + 1; modalLike.textContent = `👍 ${blogs[modalIndex].likes}`; render(); }
});
modalFav.addEventListener('click', ()=>{
  if(modalIndex!==null){
    if(favs.includes(modalIndex)) favs = favs.filter(x=>x!==modalIndex);
    else favs.push(modalIndex);
    saveFavs();
    modalFav.textContent = favs.includes(modalIndex) ? '★ Favori' : '☆ Ajouter aux favoris';
    render();
  }
});

/* INITIAL boot with small loader */
function boot(){
  setTimeout(()=>{
    loader.style.display = 'none';
    infinite = infiniteToggle.checked;
    render();
    try { if(window.gsap && window.gsap.registerPlugin) gsap.registerPlugin(ScrollTrigger); } catch(e){}
  }, 450);
}
document.addEventListener('DOMContentLoaded', boot);
