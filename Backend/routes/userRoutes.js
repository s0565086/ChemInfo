const express = require('express');
const router = express.Router();
const pool = require('../config/database');

//GET user list
router.get('/', async (req, res) => {
    try {
        const users = await pool.query('SELECT * FROM users')
        res.json(users.rows);
    }catch (err) {
        console.error(err.message);
    }
});
// GET user by id
router.get('/:id', async (req, res) => {
    const userid = req.params.id;
    try {
        const user = await pool.query('SELECT * FROM users WHERE user_id = $1', [userid]);
        res.json(user.rows);
    }catch (err) {
        console.error(err.message);
    }
});
// POST new user
router.post('/new', async (req, res) => {
    const { user_username, user_password, user_firstname, user_lastname, user_role, user_key, user_description } = req.body;
    try {
        const newUser = await pool.query('INSERT INTO users (user_username, user_password, user_firstname, user_lastname, user_role, user_key, user_description) ' +
            'VALUES ($1, $2, $3, $4, $5, $6, $7)', [user_username, user_password, user_firstname, user_lastname, user_role, user_key, user_description]);
        res.json(newUser.rows);
    }catch (err) {
        console.log(err);
    }
});
//UPDATE user
router.put('/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const { user_username, user_password, user_firstname, user_lastname, user_role, user_key, user_description } = req.body;
        const updateUser = await pool.query('UPDATE users SET user_username = $1, user_password = $2, user_firstname = $3, ' +
            'user_lastname = $4, user_role = $5 , user_key = $6, user_description = $7 ' +
            'WHERE user_id = $8', [user_username, user_password, user_firstname, user_lastname, user_role, user_key, user_description, userId]);
        res.json('User was updated!');

    }catch (err) {
        console.log(err);
    }
});
//DELETE user
router.delete('/:id', async  (req, res) => {
    try {
        const userId = req.params.id;
        await pool.query('DELETE FROM users WHERE user_id = $1', [userId]);
        res.json('User was deleted!')

    }catch (err) {
        console.log(err);
    }
})
module.exports = router;