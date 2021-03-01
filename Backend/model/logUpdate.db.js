const db = require('../database');
const moment = require('moment');

module.exports = {
    logUpdate: (chem) => {
        const timeStamp = moment.utc().format()
        return new Promise(((resolve, reject) => {
            db.query('UPDATE updated SET denomination = $1, update_time = $2, update_user = $1', [chem.name_id, timeStamp, chem.user_id], (err, results) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(results)
                }
            })
        }))
    },
}