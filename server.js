process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express     = require('./config/express');
var mongoose    = require('./config/mongoose');
var db          = mongoose();
var app         = express(db);


app.set('port', 8000);

var server = app.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + server.address().port);
});


module.exports = app;