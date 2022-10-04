const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/Home');

const container = document.querySelector('.container');

const renderHome = (req, res) => {
  const newUser = req.session?.newUser;
  renderTemplate(Home, { newUser }, res);
};

const url = 'https://newsapi.org/v2/top-headlines?country=ru&apiKey=69f4633ca37b401eab74f2217a474d14';

const req = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  container.innerHTML = result.info;
};

module.exports = { renderHome };
