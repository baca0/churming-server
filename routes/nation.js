module.exports = function (app, Nation) {
    app.get('/nations', function (req, res) {
        Nation.find(function (err, countries) {
            if (err) {
                return res.status(500).send({error: 'database failure'});
            }
            res.send(countries);
        })
    });

    app.get('/nations/:nationId', function (req, res) {
        console.log('nationId is ' + req.params.nationId);
        Nation.find({_id: req.params.nationId}, function (err, nation) {
            if (err) {
                return res.status(500).json({error: err});
            }

            if (!nation) {
                return res.status(404).json({error: 'nation not found'});
            }

            res.send(nation);
        });
    });

    // app.post('/nations', function (req, res) {
    //     var nation = new Nation();
    //     nation.name = req.body.name;
    //
    //     nation.save(function (err) {
    //         if (err) {
    //             console.error(err);
    //             res.send({result: 0});
    //             return;
    //         }
    //
    //         res.send({result: 1});
    //     });
    // });
};
