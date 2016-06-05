var express = require('express'),
    mongoose = require('mongoose');


var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();


var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);


app.get('/partials/*', function (req, res) {
    res.render('../../public/app/' + req.params[0]);
})


app.get('*', function (req, res) {
    res.render('index', {})
})

app.listen(config.port)
console.log('server running localhost:' + config.port);


mongoose.connect(config.db);

var db = mongoose.connection;
db.on('error', function () {
    console.error('connection error...')
});
db.once('open', function () {
    console.log('db connection')
});

//var mongoMessage;
//var Message = mongoose.model('Message', mongoose.Schema({message: String}));
