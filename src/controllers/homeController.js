const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/Home');

// const container = document.querySelector('.container');

const renderHome = (req, res) => {
  const newUser = req.session?.newUser;
  renderTemplate(Home, { newUser }, res);
};

// const req = async () => { // ! Прикепел, оказывается гугл блочит запрос
//   try {
//     const url = 'https://newsapi.org/v2/top-headlines?country=ru&apiKey=69f4633ca37b401eab74f2217a474d14';
//     const response = await fetch(url);
//     console.log(response);
//     const result = await response.json();
//     console.log(result);
//     // container.innerHTML = result.info;
//   } catch (error) {
//     console.log('Error', error);
//   }
// };

module.exports = { renderHome };
