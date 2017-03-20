//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/Web Dev.html'));
});
app.get('/S1', function(req, res){
  res.sendFile(path.join(__dirname, 'views/S1.html'));
});app.get('/S2', function(req, res){
  res.sendFile(path.join(__dirname, 'views/S2.html'));
});app.get('/S3', function(req, res){
  res.sendFile(path.join(__dirname, 'views/S3.html'));
});app.get('/S4', function(req, res){
res.sendFile(path.join(__dirname, 'views/S4.html')); 
});app.get('/S5', function(req, res){
 res.sendFile(path.join(__dirname, 'views/S5.html')); 
});
//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});