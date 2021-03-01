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
        res.render('edited')
    },
    add_chem: async (req, res) => {
        const types = await typeServie.getAllTypes();
        const languages = await languageService.getAllLanguages();
      res.render('addChemical', {
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
        chemical.gsbl_rn = req.body.gsbl_rn
        chemical.cas_rn = req.body.cas_rn
        chemical.language = req.body.language
        chemical.type = req.body.type
        chemical.chem_description= req.body.chem_description
        res.render('editChemicals', {
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
            language:req.body.language,
            type:req.body.type
        })
        console.log(req.body.type)
        res.render('edited')
    },
    chemByNameID: async (req, res) => {
        const chem = await chemsService.getChemByNameID(req.params.param)
        res.render('detailChemical', {
            chem
        })
    },
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