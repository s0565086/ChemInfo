const chemModel = require('../model/chems.db');

module.exports = {
    getChemsByID: (id) => {
      return new Promise(async (resolve, reject) => {
          const chems = await chemModel.getChemsByID(id)
          if (chems === undefined) {
              reject('Could not read...')
          }
          resolve(chems)
      })
    },
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