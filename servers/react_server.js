// LOAD MODULES
var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
//io = require('socket.io')(http);


// DEFINE VARIABLES
var lstn = 2020;
var runny = 8080;


// SETUP THE APP
app.set('port', (process.env.PORT || runny));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));


// DEFINE ROUTING
app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/teamstatus', function(req, res) {
    res.render('pages/anotherpage');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
