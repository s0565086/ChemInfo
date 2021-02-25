const chemsService = require('../services/chems.service');

module.exports = {
    allChems: async (req, res) => {
        const allChems = await chemsService.getAllChems();
        res.render('allChemicals', {
            allChems
        })
    }
}