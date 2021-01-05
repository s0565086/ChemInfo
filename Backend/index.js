const express = require('express');
const routes = require('./routes/routes');
const {openDatabaseConnection} = require('./database');
const {Substance} = require('./model/Substance');

const app = express();
const PORT = 3001;

(async () => {
  const connection = await openDatabaseConnection();

  routes(app);

  app.get('/:query', async (req, res) => {
    const query = req.params.query.toLowerCase();
    const substances = await connection.manager.find(Substance);

    const filteredSubstances = substances.filter((substance) => {
      return substance.casRn.toLowerCase().startsWith(query) || substance.names.some((name) => {
        return name.Name.toLowerCase().startsWith(query);
      });
    });

    res.json(filteredSubstances);
  });


  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
})();





