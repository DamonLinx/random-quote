var path = require('path');
express = require('express');

var app = express();

// Let index.html access static files in public
app.use(express.static(__dirname + '/public'));

// Serve index.html when user tries to access root of web server
app.get('/', function(req , res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Listen for connections on port 8000
app.listen(8000, function(){
    console.log('App listening on port 8000');
});
