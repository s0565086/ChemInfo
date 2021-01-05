const typeorm = require('typeorm');
const Substance = require('../model/Substance').Substance;

module.exports = new typeorm.EntitySchema({
  name: 'Substance',
  tableName: 'substances',
  target: Substance,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    names: {
      type: 'json',
    },
    casRn: {
      type: "varchar"
    }
  }
});