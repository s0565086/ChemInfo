const router = require('express').Router();

const chemsController = require('../controller/chems.controller');

router.get('/', chemsController.allChems);

router.get('/:param', chemsController.chemsById);

module.exports = router;