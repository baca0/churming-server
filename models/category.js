var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    name: String,
    englishName: String,
    order: {type: Number, default: 0},
    published_date: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('category', categorySchema);
