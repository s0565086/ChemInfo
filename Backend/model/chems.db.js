const db = require('../database');

module.exports = {
    insertChemical: (chem) => {
        return new Promise((resolve, reject) => {
            db.query('WITH ins1 AS (' +
                'INSERT INTO identifications (cas_rn, gsbl_rn, chem_description, creation_time) ' +
                'VALUES ($1, $2, $3, $7) ' +
                'RETURNING chem_id AS chemical) ' +
                'INSERT INTO names (chemical, name_name, language, type, creation_time) ' +
                'SELECT chemical, $4, $5, $6, $7 FROM ins1;', [chem.cas_rn, chem.gsbl_rn, chem.chem_description, chem.name_name,
                chem.language, chem.type, chem.creation_time], (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    },
    updateChem: (chem) => {
        return new Promise(((resolve, reject) => {
            db.query('WITH upt AS(' +
                'UPDATE identifications SET cas_rn = $1, gsbl_rn = $2, chem_description = $3 ' +
                'WHERE chem_id = $4) ' +
                'UPDATE names SET name_name = $5, language = $6 ' +
                'WHERE chemical = $4', [chem.cas_rn, chem.gsbl_rn, chem.chem_description, chem.chem_id, chem.name_name, chem.language], (err, results) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(results)
                }
            })
        }))
    },
    // updateNames: (chem) => {
    //     return new Promise((resolve, reject) => {
    //         db.query('UPDATE names SET name_name = $1, language = $2 ' +
    //             'WHERE chemical = $3', [chem.name_name, chem.language, chem.chem_id], (err, results) => {
    //             if (err) {
    //                 reject(err)
    //             }else{
    //                 resolve(results)
    //             }
    //         })
    //     })
    // },
    // updateIdentifications: (chem) => {
    //     return new Promise((resolve, reject) => {
    //         db.query('UPDATE identifications SET cas_rn = $1, gsbl_rn = $2, chem_description = $3 ' +
    //             'WHERE chem_id= $4', [chem.cas_rn, chem.gsbl_rn, chem.chem_description, chem.chem_id], (err, results) => {
    //             if (err) {
    //                 reject(err)
    //             } else {
    //                 resolve(results)
    //             }
    //         })
    //         })
    // },
    getChemByNameId: (nameID) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT identifications.chem_id, identifications.gsbl_rn, identifications.cas_rn, identifications.creation_time, identifications.chem_description, names.name_id, names.name_name, names.type, names.language ' +
                'FROM identifications ' +
                'INNER JOIN names ON identifications.chem_id = names.chemical ' +
                'WHERE names.name_id = $1 ', [nameID], (err, rows) => {
                if (err) {
                    reject(err)
                } else {
                    let results = rows.rows
                    resolve(results[0])
                    console.log(results[0])
                }
            })
        })
    },
    getChemsByID: (id) => {
        return new Promise((resolve, reject) => {
            const query = '%' + id + '%';
            db.query('SELECT identifications.chem_id, identifications.cas_rn, names.name_id, names.name_name, names.language ' +
                'FROM identifications ' +
                'INNER JOIN names ON identifications.chem_id = names.chemical ' +
                'WHERE identifications.cas_rn LIKE $1 ' +
                'OR UPPER(names.name_name) LIKE UPPER($1)', [query], (err, rows) => {
                if (err) {
                    reject(err)
                } else {
                    let arr1 = rows.rows
                    let results = []
                    arr1.map((row) => {
                        results.push({
                            chem_id:row.chem_id,
                            cas_rn:row.cas_rn,
                            name_id:row.name_id,
                            name_name:row.name_name,
                            language:row.language
                        })
                    })
                    resolve(results)

                }
            })
        })
    },
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
                    let results = []
                    arr1.map((row) => {
                        results.push({
                            chem_id:row.chem_id,
                            cas_rn:row.cas_rn,
                            name_name:row.name_name,
                            language:row.language
                        })
                    })
                    resolve(results)
                }
            })
        })
    }
}