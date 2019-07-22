var express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const session = require('express-session');
var sqlite = require('sqlite3');
var cors = require('cors');

var app = express();

app.set('views', path.join(__dirname, 'views'));

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'public')));
var port = process.env.PORT || 3001;

// models
var models = require("./models");

// routes
var dicts = require('./routes/dictsVw');
var dict = require('./routes/dict');
var typ = require('./routes/typ');
var myPage = require('./routes/page');

//Sync Database
models.sequelize.sync({ force: false }).then(function() {
    console.log('connected to database')
}).catch(function(err) {
    console.log(err)
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());

// register routes
app.use('/',myPage);
app.use('/dicts', dicts);
app.use('/dict', dict);
app.use('/type', typ);

// index path
// app.get('/', function(req, res){
//     res.send('przełącznik między danymi:'
//     + '<br /><br /> słownik: ' +  ` <a  href="dict">dict</a>`
//     + '<br /><br /> typ słownika: ' +  ` <a  href="type">type</a>`

//     + '<br /><br /> cały słownik: ' +  ` <a  href="dicts">dicts</a>`
//     )
// });

app.listen(port, function(){
    console.log('app listening on port: '+port);
});

module.exports = app;