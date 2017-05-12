var mongoose = require('mongoose');
var User = mongoose.model('User');

//GET
exports.findAll = function(req, res) {
    User.find(function(err, users) {
        if(err) res.send(500, err.message);
        console.log('GET /user');
        res.status(200).jsonp(users);
    });
};

//GET by id
exports.findById = function(req, res) {
    User.findOne({id: req.params.id}, function(err, user) {
        if(err) return res.send(500, err.message);
        console.log('GET /user/' + req.params.id);
        res.status(200).jsonp(user);
    });
};

//POST
exports.add = function(req, res) {
    console.log('POST');
    console.log(req.body);
    var user = new User({
        name: req.body.name,
        id: req.body.id,
        alias: req.body.alias,
        surname: req.body.surname,
        age: req.body.age,
        phone: req.body.phone,
        self: req.body.self
    });
    user.save(function(err, user) {
        if(err) return res.send(500, err.message);
        res.status(201).jsonp(user);
    });
};

//PUT
exports.update = function(req, res) {
    User.findOne({id: req.params.id}, function(err, user) {
        user.name = req.body.name;
        user.id = req.body.id;
        user.alias = req.body.alias;
        user.surname = req.body.surname;
        user.age = req.body.age;
        user.phone = req.body.phone;
        user.self = req.body.self;
        user.save(function(err) {
            if(err) return res.send(500, err.message);
            res.status(200).jsonp(user);
        });
    });
};

//DELETE by id
exports.delete = function(req, res) {
    User.findOneAndRemove({id: req.params.id}, function(err) {
            if(err) return res.send(500, err.message);
            res.status(204);
        });
    };
