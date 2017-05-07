var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type: String },
    id : {type: Number},
    alias: {type: String},
    surname: {type: String},
    age: {type: Number},
    phone: {type: Number}
});

module.exports = mongoose.model('User', userSchema);
