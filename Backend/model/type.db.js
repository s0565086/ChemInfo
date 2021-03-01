const db = require('../database');

module.exports = {
    getAllTypes: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT types.type_name ' +
                'FROM types ' +
                'ORDER BY type_name ASC;', (err, rows) => {
                if (err) {
                    reject(err)
                } else {
                    let arr1 = rows.rows;
                    let results = [];
                    arr1.map(row => {
                        results.push({
                            type_name:row.type_name
                        })
                    })
                    resolve(results)
                }
            })
        })
    }
}