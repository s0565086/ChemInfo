const express = require('express');
const router = express.Router();
const pool = require('../database');

// GET chemical list
router.get('/', async (req, res) => {
    try {
        const chems = await pool.query('SELECT identifications.chem_id, identifications.cas_rn, names.name_id, names.chemical, names.name_name, names.language, names.type, names.supplement, names.name_description  ' +
            'FROM identifications ' +
            'INNER JOIN names ON identifications.chem_id = names.chemical ' +
            'ORDER BY chem_id ASC;');
        res.json(chems.rows);
    }catch (err) {
        console.log(err);
    }
});

// GET chemical by param
router.get('/:query', async (req, res) => {
    const param = req.params.query;
    const query = '%' + param + '%';
    try {
        const chems = await pool.query('SELECT identifications.chem_id, identifications.cas_rn, names.name_id, names.chemical, names.name_name ' +
            'FROM identifications ' +
            'INNER JOIN names ON identifications.chem_id = names.chemical ' +
            'WHERE identifications.cas_rn LIKE $1 ' +
            'OR names.name_name LIKE $1', [query]);
        res.json(chems.rows);

    }catch (err) {
        console.log(err);
    }
});

// POST new chemical
router.post('/new', async (req, res) => {
    const { cas_rn, gsbl_rn, chem_description, name_name, language, type, creation_time, supplement, name_description  } = req.body;
    try {
        //set id values to max
        const setID = await pool.query("SELECT setval('identifications_chem_id_seq', (SELECT MAX(chem_id) FROM identifications));");
        const setID2 = await pool.query("SELECT setval('names_name_id_seq', (SELECT MAX(name_id) FROM names));");
        const newChem = await pool.query('WITH ins1 AS (' +
            'INSERT INTO identifications (cas_rn, gsbl_rn, creation_time, chem_description) ' +
            'VALUES ($1, $2, $7, $3) ' +
            'RETURNING chem_id AS chemical) ' +
            'INSERT INTO names (chemical, name_name, language, type, creation_time, supplement, name_description) ' +
            'SELECT chemical, $4, $5, $6, $7, $8, $9 FROM ins1;', [cas_rn, gsbl_rn, chem_description, name_name,
            language, type, creation_time, supplement, name_description])
        res.json(newChem);
    }catch (err) {
        console.log(err);
    }
});
//UPDATE chemical
router.put('/:id', async (req, res) => {
    try {
        const chemId = req.params.id;
        const { cas_rn, gsbl_rn, chem_description, name_name, language, type, creation_time, supplement, name_description } = req.body;
        const updateIdentification = await pool.query('UPDATE identifications SET cas_rn = $1, gsbl_rn = $2, creation_time = $3, chem_description = $4 ' +
            'WHERE chem_id= $5', [cas_rn, gsbl_rn, creation_time, chem_description, chemId]);
        const updateName = await pool.query('UPDATE names SET name_name = $1, language = $2, type = $3, creation_time = $4, supplement = $5, name_description = $6 ' +
            'WHERE chemical= $7', [name_name, language, type, creation_time, supplement, name_description, chemId]);
        res.json('Chemical was updated!');

    }catch (err) {
        console.log(err);
    }
});
module.exports = router;