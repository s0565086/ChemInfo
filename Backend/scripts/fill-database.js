// /*
// const fs = require('fs');
// const path = require('path');
// const database = require('C:/Users/Marian/WebstormProjects/ChemInfo/Backend/database.js');
// const {Substance} = require('C:/Users/Marian/WebstormProjects/ChemInfo/Backend/model/Substance');
//
//
// const dataPath = path.join(__dirname, 'data.json');
//
// (async () => {
//
//   const connection = await database.openDatabaseConnection();
//
//   const buffer = await fs.promises.readFile(dataPath);
//   const rawJson = buffer.toString();
//   const object = JSON.parse(rawJson);
//
//
//   const subsances = object['objekte'].filter((obj) => obj['Typ'] === 'Stoff');
//
//   const casRnSet = new Set();
//
//   const substanceEntities = [];
//   const duplicateCasRns = [];
//
//   for (let i = 0, len = subsances.length; i < len; i++) {
//     const casRnObject = subsances[i]['Sachverhalte'].find((obj) => obj['Merkmal'] === 'CASRN')
//     if (!casRnObject){
//       continue;
//     }
//     const casRnField = casRnObject['Werte'].find((obj) => obj['Feld'] === 'CASRN');
//     if (!casRnField){
//       continue;
//     }
//     if (casRnSet.has(casRnField['Wert'])) {
//       duplicateCasRns.push(casRnField['Wert']);
//     }
//
//     substanceEntities.push(new Substance(
//       undefined,
//       casRnField['Wert'],
//       subsances[i]['Namen']
//     ))
//
//     casRnSet.add(casRnField['Wert']);
//   }
//
//   const uniqueSubstanceEntities = substanceEntities.filter((entity) => {
//     return !duplicateCasRns.includes(entity.casRn);
//   })
//
//   await connection.manager.save(uniqueSubstanceEntities);
//
// })();*/
