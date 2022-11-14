const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/renderTemplate');
const Registration = require('../views/Registr');
const { User } = require('../../db/models');

const renderReg = (req, res) => {
  // const user = req.session?.user;
  renderTemplate(Registration, null, res);
};

const addUser = async (req, res) => {
  const { login, email, password } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.findOne({ where: { email: req.body.email } });
    if (newUser) {
      res.send('Такой пользователь уже существует');
    } else {
      const userHash = await User.create({ login, email, password: hash });
      req.session.newUser = userHash.email;
    }
    res.redirect('/main');
  } catch (err) {
    console.log('catch');
  }
};

module.exports = { renderReg, addUser };