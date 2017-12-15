

//var routes = require('../BackEnd/routes/index');
//var users = require('../BackEnd/routes/users');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

//set up static files
app.use(express.static('public'));



//var server = express();
//server.use('../public', express.static(__dirname + '/public'));

//server.get('/*', function(req, res){
  //res.sendFile(__dirname + '/index.html');
//});

//server.get('/login', function(req, res){
  //res.sendFile(__dirname + '/login.html');
//});

//var port = 4000;
//server.listen(port, function() {
  //console.log('server listening on port ' + port);
//});

// Get Username
//server.get('/get_user_name', function (req, res) {
//	res.send({
//		name: req.user.name,
//		email: req.user.email
//	});
//});

//module.exports = router;

// error handling middleware
app.use(function(err, req, res, next){
	console.log(err); // to see properties of message in our console
	res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 4000, function(){
	console.log('now listening for requests');
});