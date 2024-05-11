const  main = document.getElementById('main-content');

let data;
let dataLength=0;



async function getData(){
    const res = await fetch('https://newsapi.org/v2/top-headlines?country=kr&apiKey=48d85ecb6b1a44d9a65176f5447c2032 ');
    const result = await res.json();
    data = result.articles;
    dataLength = data.length;
    console.log(data);
    renderUI();
  }

  getData();

  function renderUI(){
   for(let i = 0; i < dataLength; i++){
       // Check if the description is not null or empty
       if (data[i].description&&data[i].author) {
           const article = document.createElement('article');
           article.innerHTML = `
              <img class="article-image" src="${data[i].urlToImage}" alt="News Image 1"/>
              <div class="article-content">
                 <h2 id="heading-${i}">${data[i].title}</h2>
                 <p>
                    ${data[i].description}
                 </p>
                 <p class="author-content">
                 ${data[i].publishedAt} · ${data[i].author}
             </p>
              </div>
            `;
            article.classList.add('clickable'); 
            article.addEventListener('click', () => openArticle(data[i].url));
 
            
           main.appendChild(article);
       }
   }
}
function openArticle(url) {
   
    window.open(url, '_blank');
 }
 