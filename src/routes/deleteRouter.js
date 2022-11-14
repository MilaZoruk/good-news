const router = require('express').Router();

const { NewsSave, Connect, User  } = require('../../db/models');

router.delete('/', async (req, res) => {
  const { id } = req.body;

  try {
    await Connect.destroy({where: {newsId: id}});
    await NewsSave.destroy(({where: {id}}));
    res.json({destroy: 'OK'});
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;