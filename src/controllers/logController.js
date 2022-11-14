const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/renderTemplate');
const Login = require('../views/Login');
const { User } = require('../../db/models');
const Wrong = require('../views/Wrong')

const renderLogin = (req, res) => {
  renderTemplate(Login, null, res);
};

const checkUser = async (req, res) => {
  try {
    const checkEmail = await User.findOne({ where: { email: req.body.email } });
    if (checkEmail) {
      const checkPass = await bcrypt.compare(req.body.password, checkEmail.password);
      if (checkPass) {
        req.session.newUser = checkEmail.email;
        res.redirect('/main');
      } else {
        const wrong = { title: 'Wrong password' };
        renderTemplate(Login, wrong, res);
      }
    } else {
      const wrong = { title: 'User is not found' };
      renderTemplate(Login, wrong, res);
    }
  } catch (err) {
    console.log('catch');
  }
};

module.exports = { renderLogin, checkUser };
