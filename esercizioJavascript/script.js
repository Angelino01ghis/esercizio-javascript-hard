
const newsContainer = document.getElementById('news-container');
const loadMoreBtn = document.getElementById('news-loaded');

let newsIds = []; 
let currentIndex = 0; 

async function fetchNewsIds() {
  try {
    const response = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json');
    newsIds = await response.json();
    loadNews(); 
  } catch (error) {
    console.error('Errore nel recupero degli ID delle notizie:', error);
    newsContainer.innerHTML = '<p>Errore nel caricamento delle notizie. Riprova più tardi.</p>';
  }
}

async function loadNews() {
  const newsBatch = newsIds.slice(currentIndex, currentIndex + 10);
  const newsPromises = newsBatch.map(async (id) => {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    return response.json();
  });

  try {
    const newsDetails = await Promise.all(newsPromises);
    displayNews(newsDetails); 
    currentIndex += 10; 
  } catch (error) {
    console.error('Errore nel caricamento delle notizie:', error);
  }
}

function displayNews(newsDetails) {
  newsDetails.forEach((news) => {
    const newsElement = document.createElement('div');
    newsElement.classList.add('news-item');
    newsElement.innerHTML = `
      <h3><a href="${news.url}" target="_blank">${news.title}</a></h3>
      <p>Data: ${new Date(news.time * 1000).toLocaleDateString()}</p>
    `;
    newsContainer.appendChild(newsElement);
  });
}

loadMoreBtn.addEventListener('click', () => {
  loadNews();
});

fetchNewsIds();