const express = require('express');
const router = express.Router();
const pool = require('../database');

//GET ROUTES
// get chem list
router.get('/', async (req, res) => {
    try {
        const chems = await pool.query('SELECT identifications.chem_id, identifications.cas_rn, names.name_name ' +
            'FROM identifications ' +
            'INNER JOIN names ON identifications.chem_id = names.chemical');
        res.json(chems.rows);
    }catch (err) {
        console.log(err);
    }
});

// get chem by cas-rn
router.get('/cas/:cas', async (req, res) => {
    const cas = req.params.cas;
    try {
        const chems = await pool.query('SELECT identifications.chem_id, identifications.cas_rn, names.name_name ' +
            'FROM identifications ' +
            'INNER JOIN names ON identifications.chem_id = names.chemical ' +
            'WHERE identifications.cas_rn = $1', [cas]);
        res.json(chems.rows);

    }catch (err) {
        console.log(err);
    }
});

// get chem by name
router.get('/name/:name', async (req, res) => {
    const name = req.params.name;
    const nameQuery = '%' + name + '%';
    try {
        const chems = await pool.query('SELECT identifications.chem_id, identifications.cas_rn, names.name_name ' +
            'FROM identifications ' +
            'INNER JOIN names ON identifications.chem_id = names.chemical ' +
            'WHERE names.name_name LIKE $1', [nameQuery]);
        res.json(chems.rows);

    }catch (err) {
        console.log(err)
    }
});
//new chem
router.post('/new', async (req, res) => {
     const { chem_id, cas_rn, gsbl_rn, chem_description,
         name_id, name_name, language, type, creation_time, supplement, name_description  } = req.body;
     try {
         const newIdentifications = await pool.query('INSERT INTO identifications (chem_id, cas_rn, gsbl_rn, creation_time, chem_description) ' +
             'VALUES ($1, $2, $3, $4, $5)', [chem_id, cas_rn, gsbl_rn, creation_time, chem_description]);
         const newName = await pool.query('INSERT INTO names (name_id, chemical, name_name, language, type, creation_time, supplement, name_description) ' +
             'VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [name_id, chem_id, name_name, language, type, creation_time, supplement, name_description]);
         res.json(newIdentifications);
         res.json(newName);
     }catch (err) {
         console.log(err);
     }
});
//update chem
module.exports = router;