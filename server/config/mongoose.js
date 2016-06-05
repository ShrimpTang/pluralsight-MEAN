var mongoose = require('mongoose');
module.exports = function (config) {
    mongoose.connect(config.db);

    var db = mongoose.connection;
    db.on('error', function () {
        console.error('connection error...')
    });
    db.once('open', function () {
        console.log('db connection')
    });

}