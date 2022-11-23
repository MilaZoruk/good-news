const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Main');

const renderMain = (req, res) => {
  const newUser = req.session?.newUser;
  renderTemplate(Main, { newUser }, res);
};

module.exports = { renderMain };
