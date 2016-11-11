var express = require ('express');
var config  = require('./config');
var bodyParser  =   require('body-parser');

module.exports = function(){
    var app = express();


    //Required
    app.use(bodyParser.json() );

    // Set Routes
    require('../app/routes/projects.server.route.js')(app);

    // Set static files 
    app.use(express.static('public'));

    return app;
}