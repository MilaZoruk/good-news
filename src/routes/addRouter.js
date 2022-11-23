const express = require('express');

const router = express.Router();
const userLog = require('../controllers/logController');
const userReg = require('../controllers/regController');
const { NewsSave, Connect, User } = require('../../db/models');
const renderTemplate = require('../lib/renderTemplate');

router.post('/', async (req, res) => {
  const { title, imageUrl, newsUrl } = req.body;

  try {
    const email = req.session.newUser;
    const newsSave = await NewsSave.create({ title, imageUrl, newsUrl });
    const currentUserId = await User.findOne({ where: { email } });
    const userId = currentUserId.id;
    const newsId = newsSave.id;

    const connectDb = await Connect.findOrCreate({ where: { userId, newsId }, defaults: { userId, newsId } });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
