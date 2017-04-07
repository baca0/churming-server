var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nationSchema = new Schema({
    name: String,
    createDate: {type: Date, default: Date.now}
});

module.exports = mongoose.model('nation', nationSchema);
