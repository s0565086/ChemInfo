const db = require('../config/database');

module.exports = {
    getAllLanguages: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT languages.language_name, languages.language_abbreviation ' +
                'FROM languages ' +
                'ORDER BY language_name ASC;', (err, rows) => {
                if (err) {
                    reject(err)
                } else {
                    let arr1 = rows.rows;
                    let results = [];
                    arr1.map(row => {
                        results.push({
                            language_name:row.language_name,
                            language_abbreviation:row.language_abbreviation
                        })
                    })
                    resolve(results)
                }
            })
        })
    }
}