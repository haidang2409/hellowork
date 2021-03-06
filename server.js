
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

app.get('/', function(req, res){
	res.send('Hello Express! I am Nguyen Hai Dang');
});
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
http.createServer(app).listen(server_port, server_ip_address, function(){
  console.log('Express server listening on port ' + server_port);
});

