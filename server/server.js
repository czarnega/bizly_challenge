var express = require('express');
var app = express();
var path = require('path');
app.use('/node_modules', express.static(__dirname + '../node_modules'));
app.use(express.static(path.join(__dirname,'../')))

app.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/properties', function(req, res, next){
	res.sendFile(path.join(__dirname, '/data/properties.json'))
})

var port = process.env.PORT || 3090;
app.listen(port, function(){
	console.log('Server listening on port:',port);
})
