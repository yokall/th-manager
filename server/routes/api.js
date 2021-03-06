const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Car = mongoose.model('Cars');

router.get('/', (req, res) => {
    res.send('api works');
});

// car routes
router.get('/cars', (req, res) => {
    Car.find({}, function (err, car) {
        if (err)
            res.send(err);
        res.json(car);
    });
});

router.post('/cars', (req, res) => {
    console.log("Request:");
    console.log(req.body);
    var new_car = new Car(req.body);
    new_car.save(function (err, car) {
        if (err)
            res.send(err);
        res.json(car);
    });
});

router.put('/cars/:id', (req, res) => {
    const finish_time = req.body.finish_time || 0;
    const time = req.body.time || 0;
    const score = req.body.score || 0;

    Car.findOneAndUpdate({ "_id": req.params.id }, { "finish_time": finish_time, "time": time, "score": score }, { upsert: true }, function (err, car) {
        if (err)
            res.send(err);
        res.json(car);
    });
});

module.exports = router;