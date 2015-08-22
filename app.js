
/**
 * Module dependencies.
 */

//expresszzzzz
var express = require("express");

//define routes
var routes = require("./routes");

//define reqs
var http = require("http");
var path = require("path");
var cons = require('consolidate');
var swig = require('swig');

var app = express();

// all environments
app.engine('html', swig.renderFile);
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
