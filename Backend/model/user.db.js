const db = require('../database');

module.exports = {
    getUserByUsername: (username) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT users.user_id, users.user_username, users.user_password, users.user_role ' +
                'FROM users ' +
                'WHERE user_username = $1;', [username], (err, rows) => {
                if (err) {
                    reject(err)
                } else {
                    let result = rows.rows;
                    resolve(result[0])
                }
            })
        })
    }
}