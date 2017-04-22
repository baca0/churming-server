// [LOAD PACKAGES]
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');

mongoose.Promise = global.Promise;

// [ CONFIGURE mongoose ]

// CONNECT TO MONGODB SERVER
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function () {
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});


// Set the configuration for your app
mongoose.connect(config.prop.uri, config.prop.options);

// DEFINE MODEL
// var Book = require('./models/book');
var Food = require('./models/food');
var Shop = require('./models/shop');
var Foodi = require('./models/foodi');
var Nation = require('./models/nation');
var Category = require('./models/category');

// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// cross domain
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    next();
});

// image
app.use('/images', express.static(config.prop.imgPath));

// [CONFIGURE SERVER PORT]
var port = process.env.PORT || 8000;

// [CONFIGURE ROUTER]
//var router = require('./routes/index')(app, Book);
// var routes = require('./routes/index')(app, Book);
var food = require('./routes/food')(app, Food);
var nation = require('./routes/nation')(app, Nation);
var shop = require('./routes/shop')(app, Shop);
var category = require('./routes/category')(app, Category);
// var foodi = require('./routes')(app, Foodi);

// [RUN SERVER]
var server = app.listen(port, function () {
    console.log("Express server has started on port " + port);
});

//module.exports = app;

