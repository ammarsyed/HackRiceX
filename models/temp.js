const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Bike = new Schema({
    bike_name: {
        type: String
    }
});

module.exports = mongoose.model('Bike', Bike);