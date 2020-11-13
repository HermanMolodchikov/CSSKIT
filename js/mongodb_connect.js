// const { MongoClient } = require('mongodb');
// MongoClient.connect('mongodb://localhost:27017/herman')
//     .then(db => {
//         console.log('Client ready');
//         db.close();
//     }, console.error);

const { MongoClient, ObjectID } = require('mongodb');
let db;

module.exports = () => {
    return MongoClient.connect('mongodb://localhost:27017/herman')
        .then((client) => {
            db = client;
        });
};

module.exports.Herman