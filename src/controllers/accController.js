const renderTemplate = require('../lib/renderTemplate');
const Account = require('../views/Account');
const { User } = require('../../db/models');

const renderAcc = (req, res) => {
    const newUser = req.session?.newUser;
  renderTemplate(Account, { newUser }, res);
};

module.exports = { renderAcc };