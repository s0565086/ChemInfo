const typeorm = require('typeorm')

function openDatabaseConnection() {
  return typeorm.createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "cheminfo",
    synchronize: true,
    logging: true,
    entities: [
      require('./entity/SubstanceSchema')
    ]
  })
}


module.exports = {
  openDatabaseConnection
}