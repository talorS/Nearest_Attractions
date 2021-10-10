const atrModel = require('../models/attractionsModel');

exports.countAttractions = function () {
    return new Promise((resolve, reject) => {
        atrModel.count({}, function (err, counter) {
            if (err) {
                reject(err);
            }
            else {
                resolve(counter);
            }
        })
    });
}

exports.insertAttractions = function (arr) {
    return new Promise((resolve, reject) => {
        atrModel.insertMany(arr, function (err, docs) {
            if (err) {
                reject(err);
            }
            else {
                resolve(docs);
            }
        })
    });
}

exports.getAttractions = function () {
    return new Promise((resolve, reject) => {
        atrModel.find({}, function (err, docs) {
            if (err) {
                reject(err);
            }
            else {
                resolve(docs);
            }
        })
    });
}

exports.getAttractionsType = function(){
    return new Promise((resolve, reject) => {
        atrModel.find().distinct('Attraction_Type', function (err, docs) {
            if (err) {
                reject(err);
            }
            else {
                resolve(docs);
            }
        })
    });
}