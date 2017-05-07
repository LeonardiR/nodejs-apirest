var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require("method-override");
var app = express();

// Connection to DB
mongoose.connect('mongodb://localhost/user', function(err, res) {
    if(err) throw err;
    console.log('Connected to Database');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());


var models = require('./models/user')(app, mongoose);
var UserCtrl = require('./controllers/user');

var router = express.Router();

// Index
router.get('/', function(req, res) {
    res.send("working");
});

app.use(router);

// API routes
var api = express.Router();

api.route('/user')
    .get(UserCtrl.findAll)
    .post(UserCtrl.add);

api.route('/user/:id')
    .get(UserCtrl.findById)
    .put(UserCtrl.update)
    .delete(UserCtrl.delete);

app.use('/rest', api);

// Start server
app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
});

