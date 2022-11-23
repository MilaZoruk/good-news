const container = document.querySelector('.home-news-box');

const req = async () => { // ! Прикепел, оказывается гугл блочит запрос
  try {
    const apiKey = '69f4633ca37b401eab74f2217a474d14';
    const url = `
    https://newsapi.org/v2/everything?q=кино&sortBy=popularity&apiKey=${apiKey}`;
    // https://newsapi.org/v2/top-headlines?country=ru&category=positive&apiKey=${apiKey}`;
    const response = await fetch(url);
    const result = await response.json();

    console.log(result);

    const filterBy = ['смерт', 'боль', 'войн', 'печал', 'болезн', 'ран', 'кров', 'героин', 'убийств', 'могил', 'страх', 'труп', 'выброс', 'санкци', 'херсон', 'киев', 'драка'];

    const filteredObj = result.articles.filter((emp) => Boolean(!filterBy.some((v) => emp.title.toLowerCase().includes(v.toLowerCase()))));

    console.log(filteredObj);

    filteredObj.length = 4;
    filteredObj.forEach((article) => {
      const newsDiv = document.createElement('div');
      newsDiv.setAttribute('className', 'news-div');
      newsDiv.innerHTML = `
         <div id="div1" className="card" >
         <a href="${article.url}">
         <img src="${article.urlToImage}" class="card-img-top" alt="picture">
         </a>
         <a href="${article.url}">
         <h2> ${article.title} </h2>
         </a>
       </div>
         `;
      container.appendChild(newsDiv);
    });
  } catch (error) {
    console.log('Error', error);
  }
};

req();
