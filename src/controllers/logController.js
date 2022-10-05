const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/renderTemplate');
const Login = require('../views/Login');
const { User } = require('../../db/models');

const renderLogin = (req, res) => {
  renderTemplate(Login, null, res);
};

const checkUser = async (req, res) => {
  try {
    const checkEmail = await User.findOne({ where: { email: req.body.email } });
    if (checkEmail) {
      const checkPass = await bcrypt.compare(req.body.password, checkEmail.password);
      if (checkPass) {
      // if (req.body.password === checkEmail.password) {
        req.session.newUser = checkEmail.email;
        res.redirect('/main');
      } else {
        res.alert('Пароль не верный');
      }
    } else {
      res.alert('Пользователь не найден');
    }
  } catch (err) {
    console.log('catch');
  }
};

module.exports = { renderLogin, checkUser };
