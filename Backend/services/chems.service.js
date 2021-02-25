const chemModel = require('../model/chems.db');

module.exports = {
    getAllChems: () => {
        return new Promise(async (resolve, reject) => {
            const allChems = await chemModel.getAllChems()
            if (allChems === undefined) {
                reject('Could not read...')
            }
            resolve(allChems)
        })
    }
}