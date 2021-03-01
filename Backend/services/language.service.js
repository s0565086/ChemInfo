const languageModel = require('../model/language.db');

module.exports = {
    getAllLanguages: () => {
        return new Promise(async (resolve, reject) => {
            const languages = await languageModel.getAllLanguages()
            if (languages === undefined) {
                reject('Could not read...')
            } else {
                resolve(languages)
            }
        })
    }
}