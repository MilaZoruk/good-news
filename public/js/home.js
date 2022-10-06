const container = document.querySelector('.home-news-box');

const req = async () => { // ! Прикепел, оказывается гугл блочит запрос
  try {
    const apiKey = '69f4633ca37b401eab74f2217a474d14';
    const url = `
    https://newsapi.org/v2/top-headlines?country=ru&apiKey=${apiKey}`;
    const response = await fetch(url);
    const result = await response.json();

    const filterBy = ['смерт', 'боль', 'войн', 'печал', 'болезн', 'ран', 'кров', 'героин', 'убийств', 'могил', 'страх', 'труп', 'выброс', 'санкци', 'херсон', 'киев'];

    const filteredObj = result.articles.filter((emp) => Boolean(!filterBy.some((v) => emp.title.toLowerCase().includes(v.toLowerCase()))));

    console.log(filteredObj);

    // const negativeWords = ['смерт', 'боль', 'войн', 'печал', 'болезн', 'ран', 'кров', 'героин', 'убийств', 'могил', 'страх', 'труп', 'выброс', 'Херсон', 'херсон'];

    // const displayArticles = [];
    // for (let i = 0; i < result.articles.length; i++) {
    //   let boo = true;
    //   for (let j = 0; j < negativeWords.length; j++) {
    //     if (result.articles[i].title.includes(negativeWords[j])) {
    //       boo = false;
    //       break;
    //     }
    //   }
    //   if (boo) {
    //     displayArticles.push(result.articles[i]);
    //   }
    // }
    // console.log(displayArticles);

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
         <h1> ${article.title} </h1>
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
