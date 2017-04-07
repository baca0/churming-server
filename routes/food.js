module.exports = function (app, Food) {
    app.get('/foods', function (req, res) {
        Food.find(function (err, foods) {
            if (err) {
                return res.status(500).send({error: 'database failure'});
            }
            res.send(foods);
        })
    });

    app.get('/foods/:foodId', function (req, res) {
        Food.findOne({_id: req.params.foodId}, function (err, food) {
            if (err) {
                return res.status(500).json({error: err});
            }

            if (!food) {
                return res.status(404).json({error: 'food not found'});
            }

            res.send(food);
        })
    });

    // app.post('/foods', function (req, res) {
    //     var food = new Food();
    //     food.name = req.body.name;
    //     food.taste = req.body.taste;
    //     food.price = req.body.price;
    //
    //     Food.save(function (err) {
    //         if (err) {
    //             console.error(err);
    //             res.json({result: 0});
    //             return;
    //         }
    //
    //         res.json({result: 1});
    //     });
    // });

    // app.put('/foods/:foodId', function (req, res) {
    //     Food.update({_id: req.params.foodId}, {$set: req.body}, function (err, output) {
    //         if (err) res.status(500).json({error: 'database failure'});
    //         console.log(output);
    //         if (!output.n) return res.status(404).json({error: 'food not found'});
    //         res.json({message: 'food updated'});
    //     });
    // });

    // app.delete('/foods/:foodId', function (req, res) {
    //     Food.remove({_id: req.params.foodId}, function (err, output) {
    //         if (err) return res.status(500).json({error: "database failure"});
    //
    //         res.status(204).end();
    //     })
    // });
};
