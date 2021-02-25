const chemsService = require('../services/chems.service');

module.exports = {
    chemsById: async (req, res) => {
      const chems = await chemsService.getChemsByID(req.params.param)
        res.render('allChemicals', {
            chems
        })
    },
    allChems: async (req, res) => {
        const allChems = await chemsService.getAllChems();
        res.render('allChemicals', {
            allChems
        })
    }
}