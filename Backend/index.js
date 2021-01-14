const express = require('express');
//const routes = require('./routes/routes');
const bodyParser = require("body-parser");
const app = express();
const PORT = 3001;

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
);
const chemRouter = require('./routes/chemRoutes');
app.use('/chems', chemRouter);

const userRouter = require('./routes/userRoutes');
app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});





