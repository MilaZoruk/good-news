const container = document.querySelector('.container');

const req = async () => { // ! Прикепел, оказывается гугл блочит запрос
  try {
    const url = 'https://newsapi.org/v2/top-headlines?country=ru&apiKey=69f4633ca37b401eab74f2217a474d14';
    const response = await fetch(url);
    console.log(response);
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
    // container.innerHTML = result.info;
  } catch (error) {
    console.log('Error', error);
  }
};
