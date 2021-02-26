const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const BikeSchema = new Schema({
    tripduration: String,
    starttime: String,
    stoptime: String,
    startstationid: String,
    startstationname: String,
    startstationlatitude: String,
    startstationlongitude: String,
    endstationid: String,
    endstationname: String,
    endstationlatitude: String,
    endstationlongitude: String,
    bikeid: String,
    usertype: String,
    birthyear: String,
    gender: String,
});

// Model
const Bike = mongoose.model('bike', BikeSchema);

module.exports =  Bike;