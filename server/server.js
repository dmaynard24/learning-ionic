// Set up
var express        = require('express');
var app            = express(); // create our app w/ express
var mongoose       = require('mongoose'); // mongoose for mongodb
var morgan         = require('morgan'); // log requests to the console (express4)
var bodyParser     = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors           = require('cors');
 
// Configuration
mongoose.connect('mongodb://localhost/music');
 
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());
 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
 
// Models
var Artist = mongoose.model('Artist', {
    name: String,
    image: String
});
 
// Routes
 
    // Get artists
    app.get('/api/artists', function(req, res) {
 
        console.log("fetching artists");
 
        // use mongoose to get all reviews in the database
        Artist.find(function(err, artists) {
 
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)
 
            res.json(artists); // return all artists in JSON format
        });
    });
 
    // create artist
    app.post('/api/artists', function(req, res) {
 
        console.log("creating artist");
 
        // create a artist, information comes from request from Ionic
        Artist.create({
            name : req.body.name,
            image : req.body.image
        }, function(err, artist) {
            if (err)
                res.send(err);
 
            // get and return all the artists after you create another
            // Artist.find(function(err, artists) {
            //     if (err)
            //         res.send(err)
            //     res.json(artists);
            // });
        });
 
    });
 
    // delete artist
    app.delete('/api/reviews/:artistId', function(req, res) {
        Artist.remove({
            _id : req.params.artistId
        }, function(err, artist) {
 
        });
    });
 
 
// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");
