const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('aboutus', {msg: null})
});

module.exports = router;