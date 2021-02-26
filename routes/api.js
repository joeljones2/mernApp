const express = require('express');

const router = express.Router();

const Bike = require('../models/bike');


router.post('/save',(req, res) => {
    console.log('Query: ', req.body);
    res.json({
        msg: 'We received data'
    });
});

router.get('/q1',(req, res) => {
    Bike.find({ })
    .sort({ tripduration: 1 })
    .limit(1)
    .then((data) => {
        console.log('Data: ', data);
        res.json(data);
    })
    .catch((error) => {
        console.log('error: ', daerrorta)
    });
});


router.get('/q2',(req, res) => {
    Bike.find({ })
    .sort({ tripduration: -1 })
    .limit(1)
    .then((data) => {
        console.log('Data: ', data);
        res.json(data);
    })
    .catch((error) => {
        console.log('error: ', daerrorta)
    });
});


router.get('/q3',(req, res) => {
    Bike.aggregate([{"$group": {"id": "$bikeid", "value": {"$sum": 1}}},
    {"sort": {"$sum": -1}},
    {"$limit": 1}
])
    .then((data) => {
        console.log('Data: ', data);
        res.json(data);
    })
    .catch((error) => {
        console.log('error: ', daerrorta)
    });
});


router.get('/q4',(req, res) => {
    Bike.find({ })
    .then((data) => {
        console.log('Data: ', data);
        res.json(data);
    })
    .catch((error) => {
        console.log('error: ', daerrorta)
    });
});


router.get('/q5',(req, res) => {
    Bike.find({ })
    .then((data) => {
        console.log('Data: ', data);
        res.json(data);
    })
    .catch((error) => {
        console.log('error: ', daerrorta)
    });
});

module.exports = router;