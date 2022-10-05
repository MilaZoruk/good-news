const searchForm = document.querySelector('.search');
const inputGood = document.querySelector('input');
const newsMainDiv = document.querySelector('.news-container');
// newsList.style.listStyle = 'none';

searchForm.addEventListener('submit', async (e) => {
  if (inputGood.value == '') {
    alert('Введите запрос');
    return;
  }
  // newsMainDiv.innerHTML = '';
  e.preventDefault();
  try {
    const apiKey = '6b352aada06441d18359493c93757e14';
    const topic = inputGood.value;
    const url = `
https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`;

    const response = await fetch(url);
    const result = await response.json();
    console.log(result);

    result.articles.forEach((article) => {
      const newsDiv = document.createElement('div');
      newsDiv.setAttribute('className', 'news-div');
      newsDiv.innerHTML = `
       <div className="card" style="width: 18rem;" >
       <img src="${article.urlToImage}" class="card-img-top" alt="picture">
       <div class="card-body">
         <p class="card-text">${article.title}</p>
         <button class="btn-secondary like-review">
         <i class="fa fa-heart" aria-hidden="true"></i> Like
        </button>
       </div>
     </div>
       `;
      // let li = document.createElement('li');
      // let a = document.createElement('a');
      // a.setAttribute('href', article.url);
      // a.setAttribute('target', '_blank');
      // a.textContent = article.title;
      // li.appendChild(a);
      // newsList.appendChild(li);
      newsMainDiv.appendChild(newsDiv);
      inputGood.value = '';
    });
  } catch (error) {
    console.error(error);
  }
});
