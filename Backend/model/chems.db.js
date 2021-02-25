const db = require('../database');

module.exports = {
    getAllChems: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT identifications.chem_id, identifications.cas_rn, names.name_name, names.language ' +
                'FROM identifications INNER JOIN names ON identifications.chem_id = names.chemical ' +
                'WHERE identifications.chem_id = 2' +
                'ORDER BY chem_id ASC;', (err, rows) => {
                if (err) {
                    reject(err)
                } else {
                    let arr1 = rows.rows
                    // let arr2 = []
                    // arr1.forEach((eintrag) => {
                    //     console.log(eintrag.chem_id)
                    // })
                    let results = []
                    arr1.map((row) => {
                        results.push({
                            chem_id:row.chem_id,
                            cas_rn:row.cas_rn,
                            name_name:row.name_name,
                            language:row.language
                        })
                    })
                    console.log(results)
                    resolve(results)
                }
            })
        })
    }
}