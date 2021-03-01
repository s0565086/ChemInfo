const chemModel = require('../model/chems.db');
const logUpdateModel = require('../model/logUpdate.db');

module.exports = {
    insertChemical: (chem) => {
        return new Promise(async (resolve, reject) => {
            try{
                await chemModel.insertChemical(chem);
                resolve()
            }catch(e) {
                reject(e)
            }
        })
    },
    updateChem: (chem) => {
        // console.log(chem)
        return new Promise( async (resolve, reject) => {
            try{
                await chemModel.updateChem(chem);
                await logUpdateModel.logUpdate(chem);
                resolve()
            }catch(e) {
                reject(e)
            }
        })
    },
    getChemByNameID: (nameID) => {
        return new Promise(async (resolve, reject) => {
            const chem = await chemModel.getChemByNameId(nameID)
            if (chem === undefined) {
                reject('Could not read...')
            }
            resolve(chem)
        })
    },
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