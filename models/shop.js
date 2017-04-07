var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shopSchema = new Schema({
    name: String,
    location: String,
    createDate: {type: Date, default: Date.now}
});

module.exports = mongoose.model('shop', shopSchema);
