const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
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
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    helpers: require('./config/handlebarHelpers')
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index.router'));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});
