var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foodiSchema  = new Schema({
    name: String,
    foodId: Schema.Types.ObjectId,
    shopId: Schema.Types.ObjectId,
    userId: Schema.Types.ObjectId, // 대표 foodi가 되면 뱃지 같은게 있으면 좋겠네
    taste: Number,
    price: Number,
    likeUsers: [], //userIds
    imageName: String,
    tag: [], // metarial 추가 되면 좋겠다. tag 정보로 사용할 수 있을 것 같기도!!!
    createDate: {type: Date, default: Date.now}
});

module.exports = mongoose.model('foodi', foodiSchema);
