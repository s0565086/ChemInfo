const chemsService = require('../services/chems.service');
const typeServie = require('../services/type.service');
const languageService = require('../services/language.service');

module.exports = {
    insertChem: async (req, res) => {
        console.log(req.body)
        await chemsService.insertChemical({
            gsbl_rn:req.body.gsbl_rn,
            cas_rn:req.body.cas_rn,
            chem_description:req.body.chem_description,
            name_name:req.body.name_name,
            language:req.body.language,
            type:req.body.type
        })
        res.render('edited', {
            user: req.user
        })
    },
    add_chem: async (req, res) => {
        const types = await typeServie.getAllTypes();
        const languages = await languageService.getAllLanguages();
      res.render('addChemical', {
          user: req.user,
          types,
          languages
      })
    },
    edit_Chem: async (req, res) => {
        const types = await typeServie.getAllTypes();
        const languages = await languageService.getAllLanguages();
        const chemical = {}
        chemical.chem_id = req.body.chem_id
        chemical.name_name = req.body.name_name
        chemical.name_id = req.body.name_id
        chemical.gsbl_rn = req.body.gsbl_rn
        chemical.cas_rn = req.body.cas_rn
        chemical.language = req.body.language
        chemical.type = req.body.type
        chemical.chem_description= req.body.chem_description
        res.render('editChemicals', {
            user: req.user,
            chemical,
            types,
            languages
        })
    },
    updateChem: async (req, res) => {
        // console.log(req.body)
        await chemsService.updateChem({
            chem_id:req.body.chem_id,
            gsbl_rn:req.body.gsbl_rn,
            cas_rn:req.body.cas_rn,
            chem_description:req.body.chem_description,
            name_name:req.body.name_name,
            name_id:req.body.name_id,
            language:req.body.language,
            type:req.body.type,
            user_id:req.user.user_id
        })
        console.log(req.body.type)
        res.render('edited')
    },
    chemByNameID: async (req, res) => {
        const chem = await chemsService.getChemByNameID(req.params.param)
        res.render('detailChemical', {
            chem,
            user: req.user
        })
    },
    chemsById: async (req, res) => {
      const chems = await chemsService.getChemsByID(req.params.param)
        res.render('allChemicals', {
            user: req.user,
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