const router = require('express').Router();

const chemsController = require('../controller/chems.controller');

router.get('/', chemsController.allChems);

module.exports = router;