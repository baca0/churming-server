module.exports = function (app, Shop) {
    app.get('/shops', function (req, res) {
        Shop.find(function (err, shops) {
            if (err) return res.status(500).send({error: 'database failure'});
            res.json(shops);
        })
    });

    app.get('/shops/:shopId', function (req, res) {
        Shop.findOne({_id: req.params.shopId}, function (err, shop) {
            if (err) return res.status(500).json({error: err});
            if (!shop) return res.status(404).json({error: 'shop not found'});
            res.json(shop);
        })
    });

    app.post('/shops', function (req, res) {
        var shop = new Shop();
        shop.name = req.body.name;
        shop.location = req.body.location;

        Shop.save(function (err) {
            if (err) {
                console.error(err);
                res.json({result: 0});
                return;
            }

            res.json({result: 1});
        });
    });

    app.put('/shops/:shopId', function (req, res) {
        Shop.update({_id: req.params.shopId}, {$set: req.body}, function (err, output) {
            if (err) res.status(500).json({error: 'database failure'});
            console.log(output);
            if (!output.n) return res.status(404).json({error: 'shop not found'});
            res.json({message: 'shop updated'});
        });
    });

    app.delete('/shops/:shopId', function (req, res) {
        Shop.remove({_id: req.params.shopId}, function (err, output) {
            if (err) return res.status(500).json({error: "database failure"});

            res.status(204).end();
        })
    });
};
