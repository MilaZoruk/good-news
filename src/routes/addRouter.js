const express = require('express');

const router = express.Router();


router.post('/', (req, res) => {
  const { title, articleUrl, imageUrl } = req.body;
  console.log(title, articleUrl, imageUrl);
  res.json( {sent: 'OK!'} )
})

module.exports = router;