const typeModel = require('../model/type.db');

module.exports = {
    getAllTypes: () => {
        return new Promise(async (resolve, reject) => {
            const types = await typeModel.getAllTypes()
            if (types === undefined) {
                reject('Could not read...')
            } else {
                resolve(types)
            }
        })
    }
}