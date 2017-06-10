'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CarSchema = new Schema({
    reg: {
        type: String,
        Required: 'Car reg number required'
    },
    name: {
        type: String,
        Required: 'Team name required'
    },
    start_time: {
        type: Number
    },
    finish_time: {
        type: Number
    },
    time: {
        type: Number
    },
    score: {
        type: Number
    }
});

module.exports = mongoose.model('Cars', CarSchema);