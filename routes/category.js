module.exports = function (app, Category) {
    app.get('/categories', function (req, res) {
        Category.find(function (err, categories) {
            if (err) {
                return res.status(500).send({error: 'database failure'});
            }
            res.send(categories);
        })
    });

    app.get('/categories/:categoryId', function (req, res) {
        Category.findOne({_id: req.params.categoryId}, function (err, category) {
            if (err) {
                return res.status(500).json({error: err});
            }

            if (!category) {
                return res.status(404).json({error: 'food not found'});
            }

            res.send(category);
        })
    });
};
