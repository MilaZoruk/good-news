const container = document.querySelector('.container');
console.log('Privet');

const req = async () => { // ! Прикепел, оказывается гугл блочит запрос
  console.log('Poka');
  try {
    const apiKey = '69f4633ca37b401eab74f2217a474d14';
    const url = `
    https://newsapi.org/v2/top-headlines?country=ru&apiKey=${apiKey}`;
    const response = await fetch(url);
    console.log('Error ==> ', response);
    const result = await response.json();
    console.log(result);
    result.articles.length = 4;
    result.articles.forEach((article) => {
      const newsDiv = document.createElement('div');
      newsDiv.setAttribute('className', 'news-div');
      newsDiv.innerHTML = `
         <div className="card" style="width: 18rem;" >
         <img src="${article.urlToImage}" class="card-img-top" alt="picture">
         <div class="card-body">
           <p class="card-text">${article.title}</p>
         </div>
       </div>
         `;
      container.appendChild(newsDiv);
    });
  } catch (error) {
    console.log('Error', error);
  }
};

req();
