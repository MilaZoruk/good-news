const express = require('express');
const { renderReg, addUser} = require('../controllers/regController');

const router = express.Router();

router.get('/', renderReg);
router.post('/', addUser);

module.exports = router;