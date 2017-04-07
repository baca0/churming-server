var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foodSchema = new Schema({
    name: String,
    englishName: String,
    description: String,
    nationIds: [],
    originNationId: Schema.Types.ObjectId,
    famousIndex: {type: Number, default: 0}, // foodi 수로 산정 예정
    bestFoodiId: Schema.Types.ObjectId, // 이게 있으면 그 이미지를 쓰고, 없으면 대표 이미지를 써야곘네.
    createDate: {type: Date, default: Date.now}
});

module.exports = mongoose.model('food', foodSchema);
