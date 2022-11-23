const express = require('express');
const { renderAcc } = require('../controllers/accController');

const router = express.Router();

router.get('/', renderAcc);

module.exports = router;
