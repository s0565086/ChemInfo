const express = require('express');
const router = express.Router();
const pool = require('../database');

//get user list
router.get('/', async (req, res) => {
    try {
        const users = await pool.query('SELECT * FROM users')
        res.json(users.rows);
    }catch (err) {
        console.error(err.message);
    }
});
// get user by id
router.get('/:id', async (req, res) => {
    const userid = req.params.id;
    try {
        const user = await pool.query('SELECT * FROM users WHERE user_id = $1', [userid])
        res.json(user.rows);
    }catch (err) {
        console.error(err.message);
    }
});
// post new user
router.post('/new', async (req, res) => {
    const { user_id, user_username, user_password, user_firstname, user_lastname, user_role, user_key, user_description } = req.body;
    try {
        const newUser = await pool.query('INSERT INTO users (user_id, user_username, user_password, user_firstname, user_lastname, user_role, user_key, user_description) ' +
            'VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [user_id, user_username, user_password, user_firstname, user_lastname, user_role, user_key, user_description]);
        res.json(newUser);
    }catch (err) {
        console.log(err);
    }
});
//update user
//delete user
module.exports = router;