const renderTemplate = require('../lib/renderTemplate');
const Account = require('../views/Account');

const { User, NewsSave, Connect } = require('../../db/models');

const renderAcc = async (req, res) => {
  const newUser = req.session?.newUser;
  const email = req.session.newUser;
  const currentUserId = await User.findOne({ where: { email } });
  const userId = currentUserId.id;
  // console.log(userId);
  const userNewsConnect = await Connect.findAll({ where: { userId } });
  // console.log(userNewsConnect);
  const data = [];

  for (let i = 0; i < userNewsConnect.length; i++) {
    const a = await NewsSave.findOne({ raw: true, where: { id: userNewsConnect[i].newsId } });
    data.push(a);
  }

  renderTemplate(Account, { newUser, data }, res);
};

module.exports = { renderAcc };
