const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'kira',
  password: 'Passwort123',
  host: 'kalira.de',
  database: 'ChemInfo',
  port: 5432,
});

module.exports = pool;