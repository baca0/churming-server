var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    name: String,
    foodIds: [],
    imageName: String,
    published_date: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('category', categorySchema);
