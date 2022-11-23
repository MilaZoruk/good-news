const express = require('express');
const { renderLogin, checkUser } = require('../controllers/logController');

const router = express.Router();

router.get('/', renderLogin);
router.post('/', checkUser);

module.exports = router;
