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
// router.post('/new', async (req, res) => {
//     const { cas_rn, gsbl_rn, chem_description } = req.body;
//     try {
//         const newUser = await pool.query('INSERT INTO users (user_id, user_username, user_password, user_firstname, user_lastname, role, user_key, user_description) ' +
//             'VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [user_id, user_username, user_password, user_firstname, user_lastname, role, user_key, user_description]);
//         res.json(newUser);
//     }catch (err) {
//         console.log(err);
//     }
// });
//update chem
module.exports = router;