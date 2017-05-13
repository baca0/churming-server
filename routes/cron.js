module.exports = function (app, cron, Category, Food) {
    var mongoose = require('mongoose');

    cron.schedule('29 19 * * *', function () {
        console.log("category order sync batch START");

        Category.find(function (err, categories) {
            if (err) {
                console.log("ERROR: category order sync batch - find");
            }


            categories.forEach(function (category) {
                Food.count({
                    categoryIds: category._id
                }).exec(function (err, count) {
                    Category.update({_id: mongoose.Types.ObjectId(category._id)}, {$set: {order: count}}, function(err, output) {
                        if (err) {
                            console.log("ERROR: category order sync batch - update");
                        }

                        console.log(output);
                    });
                });
            });
        });

        console.log("category order sync batch END");
    });
};
