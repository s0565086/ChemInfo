const router = require('express').Router();
const homeController = require('../controller/home.controller')

router.get('/', homeController.index)

router.use('/chemicals', require('./chems.router'))

router.use('/aboutus', require('./aboutus.router'))

module.exports = router;