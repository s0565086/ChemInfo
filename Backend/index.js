const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser");
const session = require('express-session');
const flash = require('express-flash');
const passport = require('passport');
const path = require('path')
const initializePassport = require('./config/passport.config');
const methodOverride = require('method-override')
const app = express();
const PORT = 3001;

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
      extended: false,
    })
);
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    helpers: require('./config/handlebarHelpers')
}))
app.set('view engine', 'handlebars')
initializePassport(
    passport
)
app.use(flash())
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.use('/', require('./routes/index.router'))

app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});





