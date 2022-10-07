
const searchForm = document.querySelector('.search');
const inputGood = document.querySelector('input');
const newsMainDiv = document.querySelector('.news-container');
const spinner = document.querySelector("#spinner");


// newsList.style.listStyle = 'none';
searchForm.addEventListener('submit', async (e) => {
  if (inputGood.value === '' || inputGood.value === 'смерть' || inputGood.value === 'убийство' || inputGood.value === 'война' || inputGood.value === 'тоска' || inputGood.value === 'болезнь') {
    alert('Нееее, введи что нибудь хорошее');
    return;
  }
  e.preventDefault();
  spinner.style.visibility = 'visible';
  try {
    const apiKey = '6b352aada06441d18359493c93757e14';

    //const apiKey = '69f4633ca37b401eab74f2217a474d14';
    const topic = inputGood.value;
    const url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`;

    // https://newsapi.org/v2/top-headlines?q=${topic}&category=entertainment,technology,science,sports&apiKey=${apiKey}`;

    const response = await fetch(url);
    const result = await response.json();
    result.articles.length = 25;
   

    const negativeWords = ['смерт', 'боль', 'войн', 'печал', 'болезн', 'ран', 'кров', 'героин', 'убийств', 'могил', 'страх', 'труп', 'выброс', 'кокаи', 'застрели', 'Казахста', 'уби', 'кровь', 'Зеленский', 'хабиб', 'мобилизаци', 'ган'];

    const displayArticles = [];
    for (let i = 0; i < result.articles.length; i++) {
      let boo = true;
      for (let j = 0; j < negativeWords.length; j++) {
        if (result.articles[i].title.toLowerCase().includes(negativeWords[j].toLowerCase())) {
          boo = false;
          break;
        }
      }
      if (boo) {
        displayArticles.push(result.articles[i]);
      }
    }

    //console.log({displayArticles});



    displayArticles.length = 15;

    displayArticles.forEach((article) => {
      const newsDiv = document.createElement('div');
      newsDiv.setAttribute('className', 'news-div');
      newsDiv.innerHTML = `
      <div id="card" className="card" >
      <a href="${article.url}">
         <img src="${article.urlToImage}" class="card-img-main" alt="picture">
      </a>
      <div id="btnPos">
      <a href="${article.url}" className="title">
      ${article.title}
      </a>
      </div>
     <button id="btn-like">LIKE</button>
     </div>
       `;
      newsMainDiv.appendChild(newsDiv);
      inputGood.value = '';
      spinner.style.visibility = 'hidden';
    });
  } catch (error) {
    console.error(error);
  }
});

{/* <button><a className="btn-like">LIKE</a></button> */}


