var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');


var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path) {
    return stylus(str).set('filename', path);
}

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(stylus.middleware({
    src: __dirname + '/public',
    compile: compile
}));
app.use(express.static(__dirname + '/public'));


app.get('/partials/:partialPath', function (req, res) {
    res.render('partials/' + req.params.partialPath);
})


app.get('*', function (req, res) {
    res.render('index', {
        mongoMessage: mongoMessage
    })
})

app.listen(process.env.PORT || 5000)
console.log('server running localhost:3030');


if (env == "development") {
    mongoose.connect('mongodb://localhost/mean');
} else {
    mongoose.connect('mongodb://tang:tangzx711@ds015403.mlab.com:15403/mean');
}

var db = mongoose.connection;
db.on('error', function () {
    console.error('connection error...')
});
db.once('open', function () {
    console.log('db connection')
});

var mongoMessage;
var Message = mongoose.model('Message', mongoose.Schema({message: String}));

Message.findOne({}).exec(function (err, doc) {
    console.log(doc)
    mongoMessage = doc.message;
})