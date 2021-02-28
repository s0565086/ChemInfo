const router = require('express').Router();

const chemsController = require('../controller/chems.controller');

router.get('/', chemsController.allChems);

router.get('/search/:param', chemsController.chemsById);

router.get('/addChemical', chemsController.add_chem);

router.get('/details/:param', chemsController.chemByNameID);

router.get('/edit/:param', chemsController.edit_Chem);

router.post('/edited', chemsController.updateChem);

router.post('/added', chemsController.insertChem);

module.exports = router;